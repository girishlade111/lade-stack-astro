# ⚡ Lade Stack — 100% Pure Astro Static Ecosystem

<div align="center">

[![Astro 5](https://img.shields.io/badge/Astro-5.4+-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)
[![Zero React Runtime](https://img.shields.io/badge/Zero_Framework_Runtime-0_KB_Hydration-000000?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://ladestack.in)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![i18n Supported](https://img.shields.io/badge/i18n-6_Locales-6E8F6A?style=for-the-badge&logo=googletranslate&logoColor=white)](https://ladestack.in)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse&logoColor=white)](https://pagespeed.web.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**Enterprise-grade AI developer tools ecosystem, engineering portfolio, and high-performance technical knowledge hub.**

[Live Production](https://ladestack.in) • [Explore Apps](https://ladestack.in/apps) • [Read the Blog](https://ladestack.in/blog) • [Founder Profile](https://ladestack.in/about) • [Documentation](https://ladestack.in/docs)

</div>

---

## 📖 Table of Contents

- [Executive Overview](#-executive-overview)
- [Core Architectural Invariants](#-core-architectural-invariants)
- [Key Features](#-key-features)
- [Performance & Core Web Vitals](#-performance--core-web-vitals)
- [Technology Stack](#-technology-stack)
- [Directory Structure](#-directory-structure)
- [Routing Matrix & Pages](#-routing-matrix--pages)
- [Multi-Language (i18n) Engine](#-multi-language-i18n-engine)
  - [Supported Locales](#supported-locales)
  - [Translation Strategy & Conventions](#translation-strategy--conventions)
  - [Adding New Translations](#adding-new-translations)
- [Content Collections (Technical Blog)](#-content-collections-technical-blog)
- [Design System & Theming](#-design-system--theming)
  - [Color Palette](#color-palette)
  - [Zero-FOUC Theme Engine](#zero-fouc-theme-engine)
- [Developer Quickstart](#-developer-quickstart)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Available Scripts](#available-scripts)
  - [Verification & Audit Scripts](#verification--audit-scripts)
- [SEO, Social & Structured Data](#-seo-social--structured-data)
- [Deployment](#-deployment)
- [Contributing Guidelines](#-contributing-guidelines)
- [Author & License](#-author--license)

---

## 🌟 Executive Overview

**Lade Stack** (`https://ladestack.in`) is an AI-powered developer tools ecosystem and engineering portfolio founded by **Girish Lade**. 

Re-architected from the ground up to replace heavy Single Page Application (SPA) client frameworks with a **100% Pure Astro 5 Static Site Generation (SSG)** architecture, this project delivers:

1. **Zero Client Framework Overhead**: Complete removal of React, React Router, Radix UI, and Framer Motion runtime bundles. Renders 100% pre-compiled HTML directly to disk.
2. **First-Class Multi-Language Support (i18n)**: 6 canonical languages statically generated with clean URL routing, bidirectional path persistence, and full `hreflang` clustering.
3. **Flawless Core Web Vitals**: Instant First Contentful Paint (< 0.5s), Cumulative Layout Shift of 0.00, and 100/100 Lighthouse metrics across Performance, Accessibility, Best Practices, and SEO.
4. **Rich Editorial Experience**: 27 deep-dive engineering articles with Markdown Content Collections, validated Zod frontmatter, syntax highlighting, reading time calculation, and copy-code interactions.

---

## 🛡️ Core Architectural Invariants

Every contribution and modification to this repository must adhere to the following non-negotiable rules:

| Invariant | Rule | Rationale |
|---|---|---|
| **Zero React Runtime** | Never import `react`, `react-dom`, `@types/react`, or React-based component libraries. | Keeps client hydration at **0 KB**. All interactive elements are written in lean, modular Vanilla TypeScript/JavaScript inside `<script>` tags. |
| **Strict i18n Mapping** | Never hardcode user-facing strings in `.astro` templates; always use `useTranslations(lang)`. | Guarantees seamless locale switching without text leaking across any of the 6 languages. |
| **Localized Links** | Never hardcode root URLs like `/about`; always wrap with `getLocalizedPath('/about', lang)`. | Ensures visitors and search engine bots maintain their current locale during navigation. |
| **Unprefixed Default Locale** | English (`en`) paths have no prefix (e.g., `/about`), while non-default locales are prefixed (e.g., `/zh/about`, `/ko/about`). | Prevents duplicate content penalties and aligns with modern international SEO standards. |
| **Blog Canonical Rule** | Technical articles reside in English at `/blog/...`. Localized blog paths redirect permanently to canonical English articles. | Focuses link equity, prevents machine-translated hallucination on technical code, and strips false hreflang signals. |
| **No-Index Admin & Error Pages** | `/apps/admin`, `/404`, `/500`, `/502`, and `/error` remain strictly `noindex, nofollow` and excluded from `sitemap.xml`. | Prevents crawler budget waste on administrative tools and error handlers. |

---

## ✨ Key Features

### 1. ⚡ Ultra-Fast Static Site Generation (SSG)
- Pre-renders **270+ static HTML pages** at build time using Astro 5.
- Zero client-side JavaScript execution required to view content, read articles, or browse apps.

### 2. 🌐 Multi-Language (i18n) Engine
- Built-in static internationalization supporting **English**, **Simplified Chinese**, **Korean**, **Japanese**, **Turkish**, and **Brazilian Portuguese**.
- Zero-layout-shift language dropdown with keyboard navigation, outside-click detection, and current URL preservation.
- Full `hreflang` alternates + `x-default` metadata automatically injected into every HTML `<head>`.

### 3. 🌗 Zero-FOUC Dark / Light Theming
- Synchronous inline script in `<head>` executes before stylesheet or font rendering, completely preventing any Flash of Unstyled Content.
- Respects system preferences (`prefers-color-scheme: dark`) with seamless toggle persistence in `localStorage`.

### 4. 📚 Astro Content Collections (Engineering Blog)
- 27 long-form architectural and engineering articles stored in `src/content/blog/*.md`.
- Strict schema validation via Zod (`title`, `description`, `pubDate`, `updatedDate`, `author`, `category`, `readTime`, `coverImage`, `featured`, `tags`).
- Code blocks featuring syntax highlighting, clipboard copy buttons with visual feedback, dynamic table of contents, and related articles.

### 5. 🛠️ AI Developer Tools Gallery & Offline Admin
- Filterable showcase of developer products (CodeEnhance AI, API testing platforms, microservices utilities) with instant category filtering.
- Pure HTML & Vanilla JS admin dashboard (`/apps/admin`) with offline-ready JSON generation for rapid ecosystem updates.

### 6. 🔍 Pristine Pre-Rendered SEO & JSON-LD
- Rich `<SEO.astro>` component generating custom OpenGraph images, Twitter summary cards, and canonical links.
- Schema.org JSON-LD microdata for `Organization`, `Person` (Girish Lade), `WebSite`, `WebApplication`, `BlogPosting`, `FAQPage`, and `ContactPage`.

---

## 📊 Performance & Core Web Vitals

| Metric | Target | Realized Score | Verification Tool |
|---|---|---|---|
| **Lighthouse Performance** | 100 / 100 | **100** | Chrome DevTools Lighthouse Audit |
| **Lighthouse Accessibility** | 100 / 100 | **100** | Chrome DevTools Lighthouse Audit |
| **Lighthouse Best Practices** | 100 / 100 | **100** | Chrome DevTools Lighthouse Audit |
| **Lighthouse SEO** | 100 / 100 | **100** | Chrome DevTools Lighthouse Audit |
| **First Contentful Paint (FCP)** | < 0.8s | **~0.4s** | WebPageTest / Chrome UX Report |
| **Largest Contentful Paint (LCP)** | < 1.2s | **~0.6s** | Core Web Vitals |
| **Cumulative Layout Shift (CLS)** | 0.00 | **0.00** | Zero layout shifts |
| **Client JS Hydration Payload** | 0 KB | **0 KB** | Pure static HTML + CSS |

---

## 💻 Technology Stack

```
                     ┌──────────────────────────────────────────────┐
                     │          Lade Stack Web Ecosystem            │
                     └──────────────────────┬───────────────────────┘
                                            │
               ┌────────────────────────────┼────────────────────────────┐
               ▼                            ▼                            ▼
      ┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
      │   Core Engine   │          │   UI & Styles   │          │  i18n & Content │
      ├─────────────────┤          ├─────────────────┤          ├─────────────────┤
      │ Astro 5.4+ (SSG)│          │ Tailwind CSS 3  │          │ 6 Static Locales│
      │ TypeScript 5.7+ │          │ Typography Ext  │          │ Content Colls   │
      │ Node.js 18+/20+ │          │ Lucide Icons    │          │ Zod Validation  │
      │ Zero JS Runtime │          │ Custom CSS HSL  │          │ Sitemap + SEO   │
      └─────────────────┘          └─────────────────┘          └─────────────────┘
```

- **Framework**: [Astro 5.4+](https://astro.build) (Static mode: `output: 'static'`)
- **Styling**: [Tailwind CSS 3.4+](https://tailwindcss.com) with `@tailwindcss/typography` & `tailwindcss-animate`
- **Type Checking**: [TypeScript 5.7+](https://www.typescriptlang.org) via `@astrojs/check`
- **Iconography**: [Lucide Icons](https://lucide.dev) via `astro-icon` and `@iconify-json/lucide` (build-time SVG compilation, 0 KB runtime)
- **Sitemap**: `@astrojs/sitemap` with automated multi-locale hreflang generation and custom priority/changefreq filters
- **Typography**: `@fontsource/inter` (UI), `DM Serif Display` (Headings), and `@fontsource/ibm-plex-mono` (Code)
- **Deployment**: [Vercel](https://vercel.com) (configured via `vercel.json` with edge static caching and permanent 301 redirects)

---

## 📁 Directory Structure

```text
lade-stack-astro/
├── astro.config.mjs               # Astro 5 configuration (i18n, sitemap, tailwind, icons)
├── tailwind.config.mjs            # Tailwind v3 config (design tokens, color palettes, fonts)
├── tsconfig.json                  # Strict TypeScript configuration
├── package.json                   # Dependencies, scripts, and build tasks
├── vercel.json                    # Vercel edge redirects & routing rules
├── PRD.md                         # Product Requirements Document
├── DESIGN.md                      # Technical & Design System Specifications
├── LICENSE                        # MIT License
├── public/                        # Static assets served at root
│   ├── AIcode.png                 # Flagship AI Code Viewer graphic
│   ├── og-image.png               # Global OpenGraph preview (1200x630)
│   ├── favicon.ico / .svg         # Multi-format favicons
│   ├── robots.txt                 # Search engine bot directives
│   ├── llms.txt                   # LLM crawler summary manifest
│   ├── site.webmanifest           # Progressive Web App manifest
│   ├── blog-covers/               # 24+ SVG and raster cover illustrations
│   └── project-icons/             # App SVG badges
├── scripts/                       # CI validation & automated audit utilities
│   ├── check-locale-leak.cjs      # Checks built HTML for un-translated English copy
│   ├── test-lang-switcher.cjs     # Validates language dropdown integrity
│   ├── check-products.cjs         # Validates products and apps schema
│   ├── validate-jsonld.py         # Tests Schema.org JSON-LD microdata
│   └── generate-blog.mjs          # Technical blog scaffolding tool
└── src/
    ├── content.config.ts          # Zod schema definition for blog collection
    ├── components/                # Modular UI components
    │   ├── Header.astro           # Sticky navigation, logo, desktop & mobile nav
    │   ├── Footer.astro           # Site links, newsletter, social handles, copyright
    │   ├── LanguageSwitcher.astro # Accessible vanilla JS locale switcher dropdown
    │   ├── ThemeToggle.astro      # Instant dark/light mode button
    │   ├── SEO.astro              # Meta tags, hreflang alternates, JSON-LD schema
    │   ├── Icon.astro             # Build-time SVG icon component (Lucide)
    │   ├── PageAnimations.astro   # Subtle CSS micro-interactions
    │   └── sections/              # Reusable modular landing page sections
    │       ├── HeroSection.astro
    │       ├── AboutSection.astro
    │       ├── ValuesSection.astro
    │       ├── ImpactSection.astro
    │       ├── ProductsSection.astro
    │       ├── FreeForeverSection.astro
    │       ├── CommunitySection.astro
    │       └── Testimonials.astro
    ├── content/
    │   └── blog/                  # 27+ Markdown technical articles
    ├── data/
    │   └── apps.json              # Ecosystem applications registry
    ├── i18n/                      # Internationalization engine
    │   ├── config.ts              # Supported language registry & default locale
    │   ├── content-types.ts       # TypeScript interfaces for localized pages
    │   ├── content.ts             # Locale content aggregator
    │   ├── content-en.ts          # English content copy
    │   ├── content-zh.ts          # Simplified Chinese content copy
    │   ├── content-ko.ts          # Korean content copy
    │   ├── content-ja.ts          # Japanese content copy
    │   ├── content-tr.ts          # Turkish content copy
    │   ├── content-ptbr.ts        # Brazilian Portuguese content copy
    │   ├── ui.ts                  # Shared UI translation dictionaries
    │   └── utils.ts               # useTranslations(), getLocalizedPath(), getLangFromUrl()
    ├── layouts/
    │   └── BaseLayout.astro       # Root HTML document, SEO, fonts, zero-FOUC script
    ├── pages/
    │   ├── index.astro            # Home landing page (English default: /)
    │   ├── about.astro            # Founder story, timeline & tech stack (/about)
    │   ├── apps/
    │   │   ├── index.astro        # Apps gallery with category filtering (/apps)
    │   │   └── admin.astro        # Offline apps database editor (/apps/admin)
    │   ├── blog/
    │   │   ├── index.astro        # Paginated blog index with search (/blog)
    │   │   └── [...slug].astro    # Dynamic markdown reader (/blog/[slug])
    │   ├── products.astro         # Flagship products showcase (/products)
    │   ├── ai-code-viewer-ai.astro# AI Code Viewer product landing page
    │   ├── docs.astro             # Developer manuals and API guides (/docs)
    │   ├── contact.astro          # Interactive contact form & FAQ accordion (/contact)
    │   ├── support.astro          # Support desk & troubleshooting (/support)
    │   ├── privacy.astro          # Privacy policy (/privacy)
    │   ├── terms.astro            # Terms of service (/terms)
    │   ├── 404.astro              # Custom branded 404 page
    │   ├── 500.astro / 502.astro  # Server error fallbacks
    │   └── [lang]/                # Localized dynamic route permutations
    │       ├── index.astro        # /[lang]
    │       ├── about.astro        # /[lang]/about
    │       ├── apps/index.astro   # /[lang]/apps
    │       ├── contact.astro      # /[lang]/contact
    │       ├── docs.astro         # /[lang]/docs
    │       ├── products.astro     # /[lang]/products
    │       ├── ai-code-viewer-ai.astro
    │       ├── support.astro      # /[lang]/support
    │       ├── privacy.astro      # /[lang]/privacy
    │       └── terms.astro        # /[lang]/terms
    └── styles/
        └── global.css             # Tailwind base directives & CSS design tokens
```

---

## 🗺️ Routing Matrix & Pages

| Route (English Default) | Localized Route Pattern | Description & Features |
|---|---|---|
| `/` | `/[lang]` | **Homepage**: Hero banner, impact metrics, product showcase, core values, social proof, testimonials carousel. |
| `/about` | `/[lang]/about` | **About & Founder**: Girish Lade's engineering journey, philosophy, career timeline, tech stack badges. |
| `/apps` | `/[lang]/apps` | **AI Apps Gallery**: Complete showcase of developer tools with live category filtering (AI, Cloud, DevTools). |
| `/apps/admin` | `/[lang]/apps/admin` | **Apps Admin Tool**: Pure client-side tool for adding/updating tools in `apps.json` with instant JSON export. |
| `/blog` | N/A *(Redirects to `/blog`)* | **Engineering Blog**: Real-time search by title/tag, category pills, reading times, featured post hero. |
| `/blog/[slug]` | N/A *(Redirects to `/blog/[slug]`)* | **Article Reader**: Syntax highlighting, copy code buttons, dynamic Table of Contents, related articles. |
| `/products` | `/[lang]/products` | **Products Overview**: Detailed breakdown of flagship Lade Stack products and feature roadmaps. |
| `/ai-code-viewer-ai` | `/[lang]/ai-code-viewer-ai` | **AI Code Viewer**: Flagship developer product landing page with live code review demonstration. |
| `/docs` | `/[lang]/docs` | **Documentation**: Guides, architecture walk-throughs, and API integration references. |
| `/contact` | `/[lang]/contact` | **Contact & FAQ**: Interactive form validation, instant feedback, collapsible FAQ accordion. |
| `/support` | `/[lang]/support` | **Support Center**: Helpdesk resources, common troubleshooting steps, issue tracker links. |
| `/privacy` | `/[lang]/privacy` | **Privacy Policy**: GDPR/CCPA compliance notices and data telemetry policies. |
| `/terms` | `/[lang]/terms` | **Terms of Service**: Software licensing, fair use policies, and API terms. |
| `/404` | `/[lang]/404` | **Not Found**: Custom branded error screen with return CTAs. |

---

## 🌐 Multi-Language (i18n) Engine

### Supported Locales

Lade Stack supports 6 canonical languages:

| Locale Code | Language Name | Native Name | URL Prefix | Direction | Flag |
|---|---|---|---|---|:---:|
| `en` | English *(Default)* | English | `None` (e.g. `/about`) | LTR | 🇺🇸 |
| `zh` | Simplified Chinese | 简体中文 | `/zh/about` | LTR | 🇨🇳 |
| `ko` | Korean | 한국어 | `/ko/about` | LTR | 🇰🇷 |
| `ja` | Japanese | 日本語 | `/ja/about` | LTR | 🇯🇵 |
| `tr` | Turkish | Türkçe | `/tr/about` | LTR | 🇹🇷 |
| `pt-BR` | Brazilian Portuguese | Português (Brasil) | `/pt-BR/about` | LTR | 🇧🇷 |

### Translation Strategy & Conventions

The translation architecture is divided into two layers:

1. **Shared UI Dictionary (`src/i18n/ui.ts`)**: Key-value pairs for navigation, buttons, badges, search placeholders, and common labels.
2. **Page-Level Localized Content (`src/i18n/content-[lang].ts`)**: Structured objects for rich page content (hero copy, feature lists, about bio, FAQs, timelines).

#### Usage in `.astro` Components

```astro
---
import type { SupportedLocale } from '@/i18n/config';
import { useTranslations, getLocalizedPath } from '@/i18n/utils';

interface Props {
  lang: SupportedLocale;
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<a href={getLocalizedPath('/apps', lang)} class="btn-primary">
  {t('nav.apps')}
</a>
```

### Adding New Translations

1. Register new UI keys in `src/i18n/ui.ts` under the `en` dictionary (which acts as the strongly-typed fallback).
2. Add the corresponding translation strings to each locale (`zh`, `ko`, `ja`, `tr`, `pt-BR`).
3. For large structured page sections, add typed content to `src/i18n/content-[lang].ts` adhering to `content-types.ts`.
4. Run `node scripts/check-locale-leak.cjs` to confirm no English copy leaks onto localized routes.

---

## 📝 Content Collections (Technical Blog)

Technical blog articles are managed via Astro 5 Content Collections in `src/content/blog/`.

### Frontmatter Schema Definition (`src/content.config.ts`)

```typescript
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    relatedApps: z.array(z.string()).default([]),
    author: z.string().default('Girish Lade'),
    category: z.string(),
    readTime: z.coerce.number(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { blog };
```

### Creating a New Blog Post

Create a new Markdown file in `src/content/blog/<slug>.md`:

```markdown
---
title: "Architecting Zero-Downtime Microservices on Kubernetes"
description: "A comprehensive guide to rolling updates, canary deployments, and zero-downtime database migrations."
pubDate: 2026-09-10
author: "Girish Lade"
category: "DevOps & Cloud"
readTime: 8
coverImage: "/blog-covers/kubernetes-zero-downtime.svg"
featured: true
tags: ["Kubernetes", "DevOps", "Microservices", "Docker"]
---

## Introduction

Your article body here written in standard Markdown with full syntax highlighting...
```

---

## 🎨 Design System & Theming

### Color Palette

The Lade Stack design system combines an editorial sage aesthetic with a dark-mode first developer canvas:

| Token Name | Light Mode Value | Dark Mode Value | Usage |
|---|---|---|---|
| **Sage Primary** | `#6E8F6A` | `#7EA47A` | Brand accent, primary buttons, badges, highlights |
| **Canvas Background** | `#F5F3EB` *(Warm paper)* | `#050505` *(Deep charcoal)* | Main page background |
| **Card / Surface** | `#FFFFFF` | `#141414` | Content cards, dialogs, dropdown menus |
| **Text Primary** | `#1C1C1C` | `#EDEDED` | Headings, body titles, active links |
| **Text Muted** | `#6B7280` | `#9CA3AF` | Subtitles, metadata, timestamps |
| **Border / Divider** | `#E5E2D9` | `#262626` | Subtle dividers, card borders, table lines |

### Zero-FOUC Theme Engine

To guarantee that visitors never experience a flash of light background when requesting in dark mode, `src/layouts/BaseLayout.astro` executes a synchronous script in `<head>` prior to any CSS rendering:

```html
<script is:inline>
  (function() {
    try {
      const savedTheme = localStorage.getItem('ladestack-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#050505';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#F5F3EB';
      }
    } catch (e) {}
  })();
</script>
```

---

## 🚀 Developer Quickstart

### Prerequisites

- **Node.js**: `v18.20.0` or `>= v20.0.0`
- **Package Manager**: `npm` (v9+) or `pnpm` (v8+)
- **Git**: Installed and configured

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/girishlade111/lade-stack-astro.git
   cd lade-stack-astro
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts Astro development server with instant HMR on `localhost:4321`. |
| `npm run check` | Executes `@astrojs/check` and TypeScript compiler diagnostics across all `.astro` and `.ts` files. |
| `npm run build` | Runs type checks and compiles static HTML production bundle into `dist/`. |
| `npm run preview` | Locally serves the compiled production build from `dist/` to verify headers, static routing, and speed. |

### Verification & Audit Scripts

The repository includes a suite of automated audit utilities in `scripts/`:

```bash
# 1. Audit built HTML for untranslated English strings leaking into localized pages
node scripts/check-locale-leak.cjs

# 2. Test language switcher links, attributes, and route persistence
node scripts/test-lang-switcher.cjs

# 3. Verify product catalog and apps schema integrity
node scripts/check-products.cjs

# 4. Validate Schema.org JSON-LD microdata across pages
python scripts/validate-jsonld.py
```

---

## 🔎 SEO, Social & Structured Data

Every pre-rendered page emits complete, valid HTML metadata:

### Pre-Rendered Meta Tags
- **Title Tag**: Localized per-page title + ` | Lade Stack` brand suffix.
- **Description & Keywords**: Localized metadata targeting developers and search engines.
- **Canonical URL**: Exact canonical URL pointing to `https://ladestack.in/...`.
- **Robots Directive**: `index, follow, max-image-preview:large, max-snippet:-1`.

### Multi-Locale `hreflang` Clustering
For every indexable page, all 6 locale alternates and `x-default` are statically output:

```html
<link rel="alternate" hreflang="en" href="https://ladestack.in/about" />
<link rel="alternate" hreflang="zh" href="https://ladestack.in/zh/about" />
<link rel="alternate" hreflang="ko" href="https://ladestack.in/ko/about" />
<link rel="alternate" hreflang="ja" href="https://ladestack.in/ja/about" />
<link rel="alternate" hreflang="tr" href="https://ladestack.in/tr/about" />
<link rel="alternate" hreflang="pt-BR" href="https://ladestack.in/pt-BR/about" />
<link rel="alternate" hreflang="x-default" href="https://ladestack.in/about" />
```

### Structured Data (Schema.org JSON-LD)
Pages automatically inject typed JSON-LD scripts:
- **Global**: `Organization` and `Person` (Girish Lade).
- **Home**: `WebApplication` and `SoftwareApplication`.
- **Blog Posts**: `BlogPosting` with headline, datePublished, dateModified, author, and reading time.
- **Contact / Support**: `FAQPage` and `ContactPage`.
- **Apps Gallery**: `CollectionPage`.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

Lade Stack is configured out-of-the-box for [Vercel](https://vercel.com):

1. Connect your GitHub repository to Vercel.
2. The `Framework Preset` is automatically detected as **Astro**.
3. Output Directory: `dist`.
4. The included `vercel.json` ensures:
   - `/en` permanently 301 redirects to `/`.
   - Localized blog URLs `/:lang/blog/*` permanently redirect to `/blog/*`.

### Deploy to Cloudflare Pages / Netlify / GitHub Pages

Because the project compiles to standard static HTML in `dist/`:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- Configure your host to serve `dist/` with standard static headers.

---

## 🤝 Contributing Guidelines

We welcome issues and pull requests! When contributing:

1. **Fork the repository** and create a feature branch (`git checkout -b feature/amazing-feature`).
2. **Follow Architectural Invariants**:
   - Do **NOT** add React or React-based runtime dependencies.
   - Use `useTranslations(lang)` for all UI strings.
   - Use `getLocalizedPath(path, lang)` for all navigation links.
3. **Run Type Checks & Diagnostics**:
   ```bash
   npm run check
   ```
4. **Run Build & Locale Leak Checks**:
   ```bash
   npm run build
   node scripts/check-locale-leak.cjs
   ```
5. **Commit your changes** using conventional commit messages (`feat: add new AI developer tool`).
6. **Open a Pull Request** with a detailed explanation of your changes.

---

## 👤 Author & License

### Author

**Girish Lade**  
- **Website**: [ladestack.in](https://ladestack.in)
- **GitHub**: [@girishlade111](https://github.com/girishlade111)
- **LinkedIn**: [Girish Lade](https://linkedin.com/in/girishlade)

### License

This project is open-source software licensed under the [MIT License](LICENSE).  
Copyright © 2026 Girish Lade. All rights reserved.
