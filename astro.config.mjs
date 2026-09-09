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
      filter: (page) => !page.includes('/apps/admin') && !page.includes('/404')
    }),
    icon({
      include: {
        lucide: ['*']
      }
    })
  ]
});
