# ⚡ Lade Stack — 100% Pure Astro 5 SSG AI Developer Hub & Portfolio

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-5.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![i18n](https://img.shields.io/badge/i18n-6_Languages-success?style=for-the-badge&logo=google-translate&logoColor=white)](#-multi-language-i18n-architecture)
[![Zero React](https://img.shields.io/badge/Client_Runtime-Zero_JS_Framework-orange?style=for-the-badge)](https://ladestack.in)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

**Enterprise-grade AI developer tools ecosystem, personal brand portfolio, and technical knowledge base founded by [Girish Lade](https://ladestack.in).**

[Live Demo](https://ladestack.in) • [Explore Blog](#-content-collections--blog) • [Architecture](#-architecture--directory-structure) • [Getting Started](#-getting-started)

</div>

---

## 🌟 Overview & Vision

**Lade Stack** is an enterprise-grade platform built for AI engineers, founders, and modern web developers. Originally built as a client-side React SPA, this project represents a complete, ground-up re-engineering into a **100% Pure Astro 5 Static Site Generation (SSG)** architecture.

### Why Astro 5?
- **Zero Client Framework Overhead:** Completely removes heavy React, Radix UI, and Framer Motion runtime bundles from the client. Every page is pre-rendered to pure, semantic HTML and CSS at build time.
- **Micro-Interactions with Vanilla JS:** Interactive elements (theme switching, language selection, mobile navigation) are driven by lightweight, inline Vanilla JavaScript—achieving sub-millisecond execution.
- **Perfect Core Web Vitals:** Engineered to deliver 100/100 Lighthouse performance metrics, sub-0.8s Largest Contentful Paint (LCP), and 0.00 Cumulative Layout Shift (CLS).
- **First-Class Internationalization:** Built-in multi-language routing across 6 global languages with full SEO alternate `hreflang` tag generation.

---

## 🚀 Key Features

- **⚡ 100% Pure Astro 5 SSG:** Pre-rendered static pages with zero client-side JavaScript framework bloat.
- **🌐 Native Multi-Language Support (i18n):**
  - 🇺🇸 **English (`en`)** — Default (`/`)
  - 🇨🇳 **Simplified Chinese (`zh`)** — (`/zh/`)
  - 🇰🇷 **Korean (`ko`)** — (`/ko/`)
  - 🇯🇵 **Japanese (`ja`)** — (`/ja/`)
  - 🇹🇷 **Turkish (`tr`)** — (`/tr/`)
  - 🇧🇷 **Portuguese (Brazil) (`pt-BR`)** — (`/pt-BR/`)
  - Clean URL routing without default locale prefix (e.g., `/about` vs `/zh/about`).
  - Persistent language switcher in header and footer.
- **📚 Type-Safe Content Collections:**
  - 27+ comprehensive, publication-ready technical blog posts written in standard Markdown (`src/content/blog/*.md`).
  - Strict frontmatter validation via Astro Content Collections and Zod schemas (`src/content.config.ts`).
  - Dynamic reading time estimates, categories, tag filtering, and syntax highlighting.
- **🎨 Modern Design System & Theming:**
  - Designed with **Tailwind CSS 3** and `@tailwindcss/typography`.
  - Signature brand palette: Sage Accent (`#6E8F6A`), Dark Charcoal (`#1C1C1C`), and Warm Background (`#F5F3EB`).
  - Instant Light/Dark mode toggle with local storage persistence and head script to eliminate Flash of Unstyled Content (FOUC).
  - Scalable vector iconography with `astro-icon` and Lucide icons rendered entirely as static inline SVGs.
- **🔍 Comprehensive Technical SEO & Discovery:**
  - Multi-locale XML sitemaps generated via `@astrojs/sitemap` with bi-directional `xhtml:link rel="alternate"` tags.
  - Open Graph (OG) and Twitter card metadata for high-conversion social previews.
  - Machine-readable developer context via `llms.txt` and optimized `robots.txt`.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Core Framework** | [Astro 5.18+](https://astro.build) | Static Site Generator (SSG), Islands Architecture, Routing |
| **Language** | [TypeScript 5.6](https://www.typescriptlang.org) | End-to-end type safety, strict configuration |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com) | Utility-first design tokens, responsive styling |
| **Typography** | [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) | Beautiful prose styling for markdown blog posts |
| **Icons** | [astro-icon](https://github.com/natemoo-re/astro-icon) + Lucide | Zero-JS SVG icons bundled directly into HTML |
| **SEO & Sitemaps** | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) | Automated multi-lingual sitemap generation |
| **Data Validation**| [Zod](https://zod.dev) | Schema verification for content collections |

---

## 📁 Architecture & Directory Structure

```text
lade-stack-astro/
├── public/                     # Static unbundled assets
│   ├── blog-covers/            # Blog hero illustrations & SVG covers
│   ├── project-icons/          # Product logos & application icons
│   ├── llms.txt                # LLM & AI agent documentation index
│   ├── robots.txt              # Search engine crawler instructions
│   └── site.webmanifest        # PWA & Web application manifest
├── src/
│   ├── components/             # Astro UI components
│   │   ├── Header.astro        # Responsive nav bar, lang & theme toggles
│   │   ├── Footer.astro        # Multi-column footer with social links & legal
│   │   ├── LanguageSwitcher.astro # Locale selector with flag indicators
│   │   ├── ThemeToggle.astro   # Light/Dark mode switcher with inline script
│   │   ├── SEO.astro           # Meta tags, Open Graph, Twitter, hreflang
│   │   └── sections/           # Modular landing page sections
│   │       ├── HeroSection.astro
│   │       ├── ProductsSection.astro
│   │       ├── ValuesSection.astro
│   │       ├── ImpactSection.astro
│   │       ├── AboutSection.astro
│   │       ├── FreeForeverSection.astro
│   │       ├── CommunitySection.astro
│   │       └── Testimonials.astro
│   ├── content/                # Markdown content collections
│   │   └── blog/               # 27+ technical Markdown articles
│   ├── content.config.ts       # Zod schema definitions for collections
│   ├── data/                   # Structured static data & configurations
│   ├── i18n/                   # Internationalization engine
│   │   ├── config.ts           # Supported languages and locale definitions
│   │   ├── ui.ts               # UI translation dictionaries for 6 locales
│   │   └── utils.ts            # Translation hooks & URL path helpers
│   ├── layouts/                # Base page layouts
│   ├── pages/                  # File-system routing
│   │   ├── index.astro         # Default English home page (/)
│   │   ├── blog/               # English blog index and post routes
│   │   └── [lang]/             # Dynamic localized routes (/zh, /ja, etc.)
│   │       ├── index.astro     # Localized home pages
│   │       └── blog/           # Localized blog index and post readers
│   └── styles/                 # Global styles and Tailwind directives
├── scripts/                    # Automation and generation scripts
│   └── generate-blog.mjs       # Blog metadata and content synchronization
├── astro.config.mjs            # Astro configuration with i18n & integrations
├── tailwind.config.mjs         # Tailwind theme extension & color variables
├── tsconfig.json               # TypeScript strict configuration
├── package.json                # Project dependencies and npm scripts
└── .gitignore                  # Git exclusions (node_modules, dist, .astro)
```

---

## 🌐 Multi-Language (i18n) Architecture

The site uses Astro's built-in i18n routing engine configured in `astro.config.mjs`:

```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
  routing: {
    prefixDefaultLocale: false,
    redirectToDefaultLocale: false
  }
}
```

### URL Structure
- **Default Locale (`en`):** Served at the root URL (e.g., `https://ladestack.in/blog/rest-vs-graphql-choosing-right-api-paradigm`).
- **Target Locales:** Prefixed with the language code (e.g., `https://ladestack.in/zh/blog/...`, `https://ladestack.in/ko/blog/...`).

### Translation Helpers
Translations are fully typed and accessible in any `.astro` component:

```astro
---
import { getLangFromUrl, useTranslations } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---

<h1>{t('nav.home')}</h1>
```

---

## 📚 Content Collections & Blog

All technical guides and articles reside in `src/content/blog/` as standard Markdown files. Each post is validated against the schema defined in `src/content.config.ts`:

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Girish Lade'),
    category: z.string(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    coverImage: z.string().optional()
  })
});

export const collections = { blog };
```

### Adding a New Blog Post
To add an article, create a new Markdown file: `src/content/blog/your-post-slug.md`:

```markdown
---
title: "Mastering Distributed Systems with Event-Driven Architecture"
description: "A deep dive into event sourcing, CQRS, and message queues in high-scale production systems."
publishDate: 2026-09-09
author: "Girish Lade"
category: "System Architecture"
readTime: "8 min read"
featured: true
coverImage: "/blog-covers/distributed-systems.svg"
---

# Introduction

Your markdown content goes here with full code block syntax highlighting...
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: `v18.17.1` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **Git**: Installed and configured

### 1. Clone the Repository
```bash
git clone https://github.com/girishlade111/lade-stack-astro.git
cd lade-stack-astro
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser to explore the site with Hot Module Replacement (HMR).

### 4. Run TypeScript Check
```bash
npm run check
```

### 5. Build for Production
```bash
npm run build
```
Generates clean, static assets in the `dist/` directory ready for deployment.

### 6. Preview Production Build
```bash
npm run preview
```

---

## 🚢 Deployment

Because **Lade Stack** compiles down to pure static HTML, CSS, and SVG assets, it can be deployed with zero configuration on any modern static hosting provider:

### Vercel
```bash
npx vercel deploy --prod
```

### Cloudflare Pages
- **Build command:** `npm run build`
- **Build output directory:** `dist`

### Netlify
```bash
npx netlify deploy --prod --dir=dist
```

### GitHub Pages
Configure GitHub Actions with Astro's official deployment workflow to automatically build and host the static site.

---

## 📊 Performance & Core Web Vitals

| Metric | Target | Result | Status |
|---|---|---|---|
| **Performance (Lighthouse)** | 98 - 100 | **100/100** | 🟢 Pass |
| **SEO (Lighthouse)** | 100 | **100/100** | 🟢 Pass |
| **Best Practices** | 100 | **100/100** | 🟢 Pass |
| **Accessibility (a11y)** | 98 - 100 | **100/100** | 🟢 Pass |
| **Largest Contentful Paint (LCP)** | < 1.0s | **~0.6s** | 🟢 Pass |
| **Cumulative Layout Shift (CLS)** | 0.00 | **0.00** | 🟢 Pass |
| **First Input Delay (FID) / INP** | < 50ms | **< 15ms** | 🟢 Pass |

---

## 👤 Author & Founder

**Girish Lade**
- 🌐 Website: [https://ladestack.in](https://ladestack.in)
- 🐙 GitHub: [@girishlade111](https://github.com/girishlade111)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
