import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import fsSync from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';

// Preload blog dates from frontmatter for accurate <lastmod>.
// Prefers `updatedDate` (set only when a post is edited post-publish) over `pubDate`.
const blogDates = new Map();
try {
  const blogDir = path.resolve('src/content/blog');
  if (fsSync.existsSync(blogDir)) {
    const files = fsSync.readdirSync(blogDir);
    for (const file of files) {
      if (file.endsWith('.md')) {
        const slug = file.replace(/\.md$/, '');
        const content = fsSync.readFileSync(path.join(blogDir, file), 'utf8');
        const updatedMatch = content.match(/updatedDate:\s*([^\r\n]+)/);
        const pubMatch = content.match(/pubDate:\s*([^\r\n]+)/);
        const rawDate = ((updatedMatch && updatedMatch[1]) || (pubMatch && pubMatch[1]) || '').trim().replace(/['"]/g, '');
        const d = new Date(rawDate);
        if (rawDate && !isNaN(d.getTime())) {
          blogDates.set(slug, d.toISOString());
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
    locales: ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
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
          en: 'en',
          ru: 'ru',
          zh: 'zh-CN',
          ko: 'ko',
          ja: 'ja',
          tr: 'tr',
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
        if (excluded.some((path) => page.includes(path))) return false;
        const { pathname } = new URL(page);
        // No /en/ prefixed duplicates (prefixDefaultLocale: false — English lives at root).
        if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) return false;
        // Blog is English-only: drop localized blog paths entirely (no hreflang signal).
        if (/^\/(ru|zh|ko|ja|tr|pt-BR)\/blog(\/|$)/.test(pathname)) return false;
        return true;
      },
      serialize(item) {
        const urlObj = new URL(item.url);
        const pathname = urlObj.pathname.replace(/\/$/, '') || '/';
        const isBlogUrl = pathname === '/blog' || /^\/blog\/\d+$/.test(pathname) || pathname.includes('/blog/');

        // 1. Assign Priority, Changefreq, and accurate Lastmod based on content hierarchy
        // B5: content-derived dates only — never build-time `now`.
        /** @type {Record<string, string>} */
        const STATIC_LASTMOD = {
          '/': '2026-09-01T00:00:00.000Z',
          apps: '2026-09-01T00:00:00.000Z',
          products: '2026-09-01T00:00:00.000Z',
          'ai-code-viewer-ai': '2026-09-01T00:00:00.000Z',
          docs: '2026-09-01T00:00:00.000Z',
          about: '2026-09-01T00:00:00.000Z',
          contact: '2026-09-01T00:00:00.000Z',
          support: '2026-09-01T00:00:00.000Z',
        };
        /** @param {string} key @returns {string} */
        function staticLastmod(key) {
          return STATIC_LASTMOD[key] ?? new Date('2026-09-01T00:00:00.000Z').toISOString();
        }
        if (pathname === '/' || /^\/(ru|zh|ko|ja|tr|pt-BR)$/.test(pathname)) {
          item.priority = 1.0;
          item.changefreq = 'daily';
          item.lastmod = '2026-09-01T00:00:00.000Z';
        } else if (/^\/(?:(ru|zh|ko|ja|tr|pt-BR)\/)?(apps|products|ai-code-viewer-ai|docs)$/.test(pathname)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
          const key = pathname.split('/').filter(Boolean).pop() ?? '/';
          item.lastmod = staticLastmod(key === pathname.replace('/', '') ? key : key);
        } else if (/^\/blog(\/\d+)?$/.test(pathname)) {
          // Paginated blog index (English only): lower than post pages (0.7).
          item.priority = 0.6;
          item.changefreq = 'weekly';
          item.lastmod = blogDates.size
            ? [...blogDates.values()].sort().reverse()[0]
            : '2026-09-01T00:00:00.000Z';
        } else if (pathname.includes('/blog/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
          const slug = pathname.split('/blog/')[1]?.replace(/\/$/, '');
          if (slug && blogDates.has(slug)) {
            item.lastmod = blogDates.get(slug);
          } else {
            item.lastmod = '2026-09-01T00:00:00.000Z';
          }
        } else if (/^\/(?:(ru|zh|ko|ja|tr|pt-BR)\/)?(about|contact|support)$/.test(pathname)) {
          item.priority = 0.6;
          item.changefreq = 'monthly';
          item.lastmod = '2026-09-01T00:00:00.000Z';
        } else if (/^\/(?:(ru|zh|ko|ja|tr|pt-BR)\/)?(privacy|terms)$/.test(pathname)) {
          item.priority = 0.3;
          item.changefreq = 'yearly';
          item.lastmod = '2025-01-01T00:00:00.000Z';
        } else {
          item.priority = 0.5;
          item.changefreq = 'monthly';
          item.lastmod = '2026-09-01T00:00:00.000Z';
        }

        // 2. hreflang alternates. Blog URLs are English-only (self-referencing
        // canonical, no hreflang) — strip auto-generated alternates so the
        // sitemap never emits a false hreflang signal for /blog pages.
        if (isBlogUrl) {
          item.links = [];
        } else if (item.links && item.links.length > 0) {
          // Add International SEO x-default alternate link for hreflang clustering
          const hasXDefault = item.links.some((l) => l.lang === 'x-default');
          if (!hasXDefault) {
            const defaultLink = item.links.find((l) => l.lang === 'en' || l.lang === 'en-US') || item.links[0];
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
