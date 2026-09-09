import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

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
    locales: ['en', 'ko', 'ja', 'zh', 'tr', 'ru', 'pt-BR'],
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
          ko: 'ko-KR',
          ja: 'ja-JP',
          zh: 'zh-CN',
          tr: 'tr-TR',
          ru: 'ru-RU',
          'pt-BR': 'pt-BR'
        }
      },
      filter: (page) => {
        const excluded = ['/apps/admin', '/404', '/api-testing-platform', '/website-builder-project', '/file-sharing-platform', '/projects'];
        return !excluded.some((path) => page.includes(path));
      }
    }),
    icon({
      include: {
        lucide: ['*']
      }
    })
  ]
});
