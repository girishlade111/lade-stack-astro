# Lade Stack — 100% Pure Astro Re-creation

AI-powered developer tools ecosystem (`https://ladestack.in`) rebuilt as a zero-runtime static site.

- **Framework**: Astro 5 (SSG, `output: static`)
- **Styling**: Tailwind CSS 3 + `@tailwindcss/typography`
- **i18n**: 7 locales — `en` (default, unprefixed), `ko`, `ja`, `zh`, `tr`, `ru`, `pt-BR`
- **SEO**: pre-rendered meta, canonical, 6× `hreflang` + `x-default`, OG/Twitter cards, Schema.org JSON-LD, sitemap with locale alternates
- **Runtime JS**: vanilla micro-interactions only (theme, language dropdown, mobile drawer, search/filter, FAQ, copy-code, forms)

## Scripts

```bash
npm install      # install dependencies
npm run dev      # local dev server
npm run check    # Astro + TypeScript diagnostics (must be 0 errors)
npm run build    # static build → dist/ (271 pages across 7 locales)
npm run preview  # serve dist/ locally
```

## Project structure

```text
src/
├── components/       # SEO, Header, Footer, ThemeToggle, LanguageSwitcher + sections/
├── content/blog/     # 27 Markdown articles (Content Collections + Zod schema)
├── data/apps.json    # Apps gallery database (editable via /apps/admin)
├── i18n/             # config, ui.ts dictionaries, utils (useTranslations, getLocalizedPath)
├── layouts/          # BaseLayout (zero-FOUC theme, fonts, SEO, Header/Footer)
├── pages/            # EN routes (/) + [lang]/ localized routes
└── styles/global.css # HSL design tokens (sage #6E8F6A, warm #F5F3EB, charcoal #1C1C1C)
```

## Key invariants

- Never add React/Vue/Svelte runtime dependencies.
- Never hardcode UI strings — use `useTranslations(lang)`.
- Never hardcode paths — use `getLocalizedPath(path, lang)`.
- `/apps/admin` and `/404` stay `noindex` and out of the sitemap.
