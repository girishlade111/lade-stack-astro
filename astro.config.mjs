import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import fsSync from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

// Preload blog dates from frontmatter for accurate <lastmod>
const blogDates = new Map();
try {
  const blogDir = path.resolve('src/content/blog');
  if (fsSync.existsSync(blogDir)) {
    const files = fsSync.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace(/\.md$/, '');
        const content = fsSync.readFileSync(path.join(blogDir, file), 'utf8');
        const match = content.match(/pubDate:\s*([^\r\n]+)/);
        if (match) {
          const rawDate = match[1].trim().replace(/['"]/g, '');
          const d = new Date(rawDate);
          if (!isNaN(d.getTime())) {
            blogDates.set(slug, d.toISOString());
          }
        }
      }
    }
  }
} catch (e) {
  console.warn('Could not read blog dates for sitemap:', e.message);
}

function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        try {
          const sitemapIndex = new URL('sitemap-index.xml', dir);
          const sitemapTarget = new URL('sitemap.xml', dir);
          await fs.copyFile(sitemapIndex, sitemapTarget);
          console.log('[@astrojs/sitemap] Created sitemap.xml from sitemap-index.xml');
        } catch (err) {
          console.warn('[@astrojs/sitemap] Could not create sitemap.xml:', err.message);
        }
      }
    }
  };
}

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://ladestack.in',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
          ko: 'ko-KR',
          ja: 'ja-JP',
          tr: 'tr-TR',
          'pt-BR': 'pt-BR'
        }
      },
      filter: (page) => {
        const excluded = [
          '/apps/admin',
          '/404',
          '/500',
          '/502',
          '/error',
          '/api-testing-platform',
          '/website-builder-project',
          '/file-sharing-platform',
          '/projects',
          '/sitemap.xml',
          '/sitemap-index.xml'
        ];
        return !excluded.some((path) => page.includes(path));
      },
      serialize(item) {
        const urlObj = new URL(item.url);
        const pathname = urlObj.pathname.replace(/\/$/, '') || '/';

        // 1. Assign Priority, Changefreq, and accurate Lastmod based on content hierarchy
        if (pathname === '/' || /^\/(zh|ko|ja|tr|pt-BR)$/.test(pathname)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
          item.lastmod = new Date().toISOString();
        } else if (/^\/(?:(zh|ko|ja|tr|pt-BR)\/)?(apps|products|ai-code-viewer-ai|docs)$/.test(pathname)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
          item.lastmod = new Date().toISOString();
        } else if (/^\/(?:(zh|ko|ja|tr|pt-BR)\/)?blog$/.test(pathname)) {
          item.priority = 0.8;
          item.changefreq = 'daily';
          item.lastmod = new Date().toISOString();
        } else if (pathname.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
          const slug = pathname.split('/blog/')[1]?.replace(/\/$/, '');
          if (slug && blogDates.has(slug)) {
            item.lastmod = blogDates.get(slug);
          } else {
            item.lastmod = new Date().toISOString();
          }
        } else if (/^\/(?:(zh|ko|ja|tr|pt-BR)\/)?(about|contact|support)$/.test(pathname)) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
        } else if (/^\/(?:(zh|ko|ja|tr|pt-BR)\/)?(privacy|terms)$/.test(pathname)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
          item.lastmod = '2025-01-01T00:00:00.000Z';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
          item.lastmod = new Date().toISOString();
        }

        // 2. Add International SEO x-default alternate link for hreflang clustering
        if (item.links && item.links.length > 0) {
          const hasXDefault = item.links.some((l) => l.lang === 'x-default');
          if (!hasXDefault) {
            const defaultLink = item.links.find((l) => l.lang === 'en-US') || item.links[0];
            item.links.push({
              lang: 'x-default',
              url: defaultLink.url
            });
          }
        }

        return item;
      }
    }),
    sitemapXmlAlias(),
    icon({
      include: {
        lucide: ['*']
      }
    })
  ]
});
