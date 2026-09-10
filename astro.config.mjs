import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

import fs from 'node:fs/promises';

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
          '/sitemap.xml'
        ];
        return !excluded.some((path) => page.includes(path));
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
