# 🧭 Lade Stack — Developer Architecture Guide & Codebase Map

> **Comprehensive Technical Reference, File Structure Map, Tech Stacks & Engineering Guidelines for Developers.**  
> Target Ecosystem: [ladestack.in](https://ladestack.in) • Author: **Girish Lade** • Architecture: **100% Pure Astro 5 SSG (Zero React Runtime)**

---

## 📑 Table of Contents

1. [Executive Summary & Core Mission](#1-executive-summary--core-mission)
2. [Architectural Invariants & Non-Negotiable Rules](#2-architectural-invariants--non-negotiable-rules)
3. [Technology Stack Breakdown](#3-technology-stack-breakdown)
4. [Exhaustive File Structure Map](#4-exhaustive-file-structure-map)
   - [Visual ASCII Directory Tree](#visual-ascii-directory-tree)
   - [Root Configuration Files](#root-configuration-files)
   - [Public Assets Directory (`public/`)](#public-assets-directory-public)
   - [CI & Audit Automation Scripts (`scripts/`)](#ci--audit-automation-scripts-scripts)
   - [Content Collections & Blog (`src/content/`)](#content-collections--blog-srccontent)
   - [Data Store (`src/data/`)](#data-store-srcdata)
   - [Internationalization System (`src/i18n/`)](#internationalization-system-srci18n)
   - [Master Layouts (`src/layouts/`)](#master-layouts-srclayouts)
   - [Modular UI Components (`src/components/`)](#modular-ui-components-srccomponents)
   - [Page Routing Engine (`src/pages/`)](#page-routing-engine-srcpages)
   - [Styling & Design System (`src/styles/`)](#styling--design-system-srcstyles)
5. [Deep-Dive: How Key Systems Work](#5-deep-dive-how-key-systems-work)
   - [Multi-Language (i18n) Routing & Translation Pipeline](#multi-language-i18n-routing--translation-pipeline)
   - [Zero-FOUC Dark/Light Mode Theme Engine](#zero-fouc-darklight-mode-theme-engine)
   - [Static SEO, hreflang Clustering & JSON-LD Generation](#static-seo-hreflang-clustering--json-ld-generation)
   - [Blog Content Collections & Canonical Architecture](#blog-content-collections--canonical-architecture)
   - [Offline Developer Tools Admin Dashboard](#offline-developer-tools-admin-dashboard)
6. [Developer Workflows (Step-by-Step)](#6-developer-workflows-step-by-step)
   - [Workflow A: Creating a New Page](#workflow-a-creating-a-new-page)
   - [Workflow B: Adding a New UI Component](#workflow-b-adding-a-new-ui-component)
   - [Workflow C: Publishing a New Technical Blog Post](#workflow-c-publishing-a-new-technical-blog-post)
   - [Workflow D: Registering a New Tool in the Apps Directory](#workflow-d-registering-a-new-tool-in-the-apps-directory)
   - [Workflow E: Adding Translation Keys or a New Language](#workflow-e-adding-translation-keys-or-a-new-language)
7. [Local Setup, Diagnostics & Deployment](#7-local-setup-diagnostics--deployment)
8. [Developer Dos & Don'ts Checklist](#8-developer-dos--donts-checklist)

---

## 1. Executive Summary & Core Mission

**Lade Stack** (`https://ladestack.in`) is an enterprise-grade AI developer tools ecosystem, engineering portfolio, and high-performance technical knowledge base engineered by **Girish Lade**.

### Why This Architecture Exists
Most modern developer portals rely on heavy Single Page Application (SPA) client frameworks (Next.js, Remix, React, Vue), incurring heavy client hydration costs (150 KB – 500 KB+ of JavaScript), layout shifts, and SEO crawling friction.

Lade Stack was engineered with a radical philosophy:
- **100% Pre-compiled Static HTML (SSG)** directly to disk via Astro 5.
- **Zero React Runtime**: 0 KB framework hydration in the client browser.
- **Sub-0.5s First Contentful Paint (FCP)** and zero layout shift (**CLS = 0.00**).
- **Native Static Multi-Language Support (i18n)** covering 6 canonical production languages without client re-rendering.
- **100/100 Lighthouse score** across Performance, Accessibility, Best Practices, and SEO.

---

## 2. Architectural Invariants & Non-Negotiable Rules

When working on this repository, you **MUST** follow these 6 strict invariants. Any pull request violating them will fail CI or code review:

| # | Invariant | Rule | Rationale |
|---|---|---|---|
| **1** | **Zero React Runtime** | Never import `react`, `react-dom`, `@types/react`, or React component libraries. | Keeps client hydration at **0 KB**. All interactive elements (drawers, dropdowns, filters) use lean Vanilla TypeScript/JavaScript inside `<script>` tags (< 3 KB total). |
| **2** | **Strict i18n Key Usage** | Never hardcode user-facing strings in `.astro` markup; always use `useTranslations(lang)`. | Prevents language bleeding across localized routes. Every UI string must resolve through `src/i18n/ui.ts` or `src/i18n/content-[lang].ts`. |
| **3** | **Strict Path Wrapping** | Never hardcode root URLs like `<a href="/about">`; always use `getLocalizedPath('/about', lang)`. | Ensures visitors navigating the site stay on their selected language prefix (`/zh/about`, `/ko/about`, etc.). |
| **4** | **Unprefixed English Root** | Default locale (`en`) has NO URL prefix (`/about`), whereas non-default locales are prefixed (`/zh/about`, `/ja/about`). | Prevents duplicate content penalties and conforms to Google International SEO standards. |
| **5** | **Canonical Blog Invariant** | Technical blog articles are written in English only at `/blog/...`. Non-default language blog paths permanently 301 redirect to `/blog/...`. | Prevents AI hallucination from automatic code translations and concentrates SEO domain authority on the canonical articles. |
| **6** | **No-Index Admin & Errors** | `/apps/admin`, `/404`, `/500`, `/502`, and `/error` must strictly retain `noindex, nofollow` and remain excluded from `sitemap.xml`. | Preserves search engine crawler budget exclusively for high-value user-facing pages. |

---

## 3. Technology Stack Breakdown

```
                             ┌──────────────────────────────────────┐
                             │       Lade Stack Architecture        │
                             └──────────────────┬───────────────────┘
                                                │
       ┌────────────────────────┬───────────────┴───────────────┬────────────────────────┐
       ▼                        ▼                               ▼                        ▼
┌──────────────┐       ┌─────────────────┐             ┌─────────────────┐      ┌────────────────┐
│ Static Build │       │ Styling System  │             │ Multi-Language  │      │ Content & Data │
├──────────────┤       ├─────────────────┤             ├─────────────────┤      ├────────────────┤
│ Astro 5.4+   │       │ Tailwind CSS 3.4│             │ Astro Native    │      │ Astro Content  │
│ TypeScript 5 │       │ Typography Ext  │             │ 6 Locales       │      │ Collections    │
│ Node 18/20+  │       │ Lucide Icons    │             │ hreflang & x-def│      │ Zod Schema     │
│ Zero Hydrate │       │ Polarity Rhythm │             │ Dynamic Routing │      │ apps.json DB   │
└──────────────┘       └─────────────────┘             └─────────────────┘      └────────────────┘
```

### Core Technologies

#### 1. Meta-Framework: [Astro 5.4+](https://astro.build)
- **Mode**: `output: 'static'` (Static Site Generation).
- **Build Output**: `build.format = 'directory'` (generates `dist/about/index.html` for clean URLs without trailing slashes).
- **Routing**: Static file-based routing combined with dynamic route parameters (`[lang]`, `[...slug]`, `[...page]`).
- **Zero Client Hydration**: Components render to static HTML at build time. No virtual DOM overhead.

#### 2. Styling Engine: [Tailwind CSS 3.4+](https://tailwindcss.com)
- **Integration**: `@astrojs/tailwind` with `applyBaseStyles: false` (to load custom base styles safely in `src/styles/global.css`).
- **Plugins**:
  - `@tailwindcss/typography`: Clean typography formatting for Markdown blog posts (`prose`).
  - `tailwindcss-animate`: Micro-animations for modals, dropdowns, and cards.
- **Design Tokens**: Custom HSL and hex palettes matching the editorial sage & dark canvas system defined in `DESIGN.md`.

#### 3. Type Checking: [TypeScript 5.7+](https://www.typescriptlang.org)
- Extends `astro/tsconfigs/strict`.
- Strict null checks enabled.
- Path aliases configured: `@/*` maps to `./src/*`.

#### 4. Iconography: [Lucide Icons](https://lucide.dev)
- Packaged via `astro-icon` and `@iconify-json/lucide`.
- **Zero Client Runtime**: SVGs are compiled and inlined at build time via `<Icon name="lucide:..." />`.

#### 5. Typography & Fonts: [@fontsource](https://fontsource.org)
- **UI Body**: `@fontsource/inter` (Clean, highly legible sans-serif).
- **Headings**: Editorial serif typography (`DM Serif Display`).
- **Code & Micro-Badges**: `@fontsource/ibm-plex-mono` (Terminal-grade monospace).

#### 6. SEO & Sitemap: [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Generates `sitemap-index.xml` and automated alias `sitemap.xml`.
- Custom priority/changefreq algorithm based on content depth.
- Automatic injection of `hreflang` alternates and `x-default`.

#### 7. Hosting & Edge Routing: [Vercel](https://vercel.com) / [Cloudflare Pages](https://pages.cloudflare.com)
- Edge rewrite and redirect rules managed via `vercel.json` and `public/_redirects`.
- Permanent 301 redirects for `/en` to `/` and localized `/blog` routes to canonical English `/blog`.

---

## 4. Exhaustive File Structure Map

### Visual ASCII Directory Tree

```text
lade-stack-astro/
├── .astro/                                # Astro internal cache and generated type definitions
├── .git/                                  # Git version control history
├── .gitignore                             # Git ignore rules
├── astro.config.mjs                       # Astro 5 configuration (SSG, i18n, sitemap, icons)
├── tailwind.config.mjs                    # Tailwind v3 design tokens, fonts, and screens
├── tsconfig.json                          # Strict TypeScript configuration & path aliases
├── package.json                           # Dependencies, build scripts, and engine specifications
├── package-lock.json                      # Deterministic dependency lockfile
├── vercel.json                            # Edge redirects (strips /en, maps canonical /blog)
├── PRD.md                                 # Product Requirements Document
├── DESIGN.md                              # Design System, Polarity Rhythm & Token Specifications
├── SKILL.md                               # Engineering Standards & Architectural Invariant Skill
├── LICENSE                                # MIT Open Source License (Girish Lade)
├── DEVELOPER_GUIDE.md                     # THIS FILE — Developer Architecture & Codebase Map
│
├── public/                                # Static files copied verbatim to dist/ root
│   ├── _redirects                         # Cloudflare/Netlify CDN edge redirect rules
│   ├── robots.txt                         # Search engine crawler policies & sitemap reference
│   ├── llms.txt                           # Machine-readable overview for AI agents & LLMs
│   ├── site.webmanifest                   # Progressive Web App manifest
│   ├── favicon.ico / .svg                 # Multi-resolution favicons
│   ├── favicon-16x16.png                  # Standard 16px favicon
│   ├── favicon-32x32.png                  # Standard 32px favicon
│   ├── apple-touch-icon.png               # iOS Safari home screen icon
│   ├── icon-192.png / icon-512.png        # PWA app icons
│   ├── og-image.png                       # Global OpenGraph social preview (1200x630)
│   ├── AIcode.png                         # Flagship AI Code Viewer product preview asset
│   ├── blog-covers/                       # 27+ SVG and raster cover illustrations for articles
│   ├── project-icons/                     # App SVG badges for ecosystem tools
│   └── images/                            # Supplementary branding and architectural images
│
├── scripts/                               # CI validation and automated audit scripts
│   ├── check-locale-leak.cjs              # Scans built HTML for un-translated English strings
│   ├── test-lang-switcher.cjs             # Audits language dropdown links & attributes
│   ├── check-products.cjs                 # Validates apps.json schema & link integrity
│   ├── validate-jsonld.py                 # Tests Schema.org JSON-LD microdata across pages
│   ├── generate-blog.mjs                  # CLI utility to scaffold new Markdown blog posts
│   ├── generate-assets.py                 # Asset generation utility
│   └── generate_favicons.py               # Favicon rendering script
│
├── sanity/                                # Legacy design audit archives
│   └── DESIGN.md                          # Original design analysis reference
│
└── src/                                   # Application Source Code
    ├── content.config.ts                  # Zod validation schema for Astro Content Collections
    │
    ├── content/                           # Astro Content Collections Root
    │   └── blog/                          # 27 Markdown technical engineering articles (*.md)
    │       ├── api-rate-limiting-throttling-strategies.md
    │       ├── baas-platforms-compared-firebase-supabase-appwrite.md
    │       ├── building-ai-powered-code-review-systems.md
    │       ├── building-api-gateways-microservices.md
    │       ├── building-rag-applications-vector-databases.md
    │       ├── building-serverless-backends-with-baas.md
    │       ├── building-subscription-billing-systems.md
    │       ├── building-zero-downtime-deployment-pipelines.md
    │       ├── cloud-cost-optimization-strategies-startups.md
    │       ├── containers-vs-vms-when-to-use-each.md
    │       ├── fine-tuning-llms-domain-specific-tasks.md
    │       ├── future-of-ai-in-software-development.md
    │       ├── generative-ai-for-content-creation.md
    │       ├── gitops-managing-infrastructure-with-git.md
    │       ├── implementing-oauth2-openid-connect.md
    │       ├── infrastructure-as-code-terraform-pulumi.md
    │       ├── machine-learning-pipelines-for-web-developers.md
    │       ├── mlops-deploying-ml-models-production.md
    │       ├── monitoring-ai-systems-in-production.md
    │       ├── multi-cloud-architecture-aws-azure-gcp.md
    │       ├── multi-tenant-saas-architecture-patterns.md
    │       ├── optimizing-vm-performance-production-workloads.md
    │       ├── owasp-top-10-complete-mitigation-guide.md
    │       ├── real-time-data-sync-backend-services.md
    │       ├── rest-vs-graphql-choosing-right-api-paradigm.md
    │       ├── scaling-saas-applications-million-users.md
    │       └── zero-trust-security-web-applications.md
    │
    ├── data/                              # Structured JSON Data Stores
    │   └── apps.json                      # Central registry of developer tools & apps
    │
    ├── i18n/                              # Multi-Language Internationalization Engine
    │   ├── config.ts                      # Supported languages, locale metadata, defaultLocale
    │   ├── content-types.ts               # TypeScript interfaces for structured page content
    │   ├── content.ts                     # Aggregator mapping pages to localized content
    │   ├── content-en.ts                  # English page copy (Home, About, Docs, Contact, etc.)
    │   ├── content-zh.ts                  # Simplified Chinese page copy
    │   ├── content-ko.ts                  # Korean page copy
    │   ├── content-ja.ts                  # Japanese page copy
    │   ├── content-tr.ts                  # Turkish page copy
    │   ├── content-ptbr.ts                # Brazilian Portuguese page copy
    │   ├── content-ru.ts                  # Russian page copy (fixture/reference)
    │   ├── ui.ts                          # Shared UI translations (buttons, nav, badges, search)
    │   ├── seo.ts                         # Localized SEO metadata (titles, descriptions, keywords)
    │   └── utils.ts                       # useTranslations(), getLocalizedPath(), getLangFromUrl()
    │
    ├── layouts/                           # Master Page Layouts
    │   └── BaseLayout.astro               # Root HTML document, SEO, fonts, Zero-FOUC theme script
    │
    ├── components/                        # UI Components
    │   ├── Header.astro                   # Sticky navigation, logo, desktop & mobile nav drawer
    │   ├── Footer.astro                   # Multi-column footer, newsletter, social links, legal
    │   ├── LanguageSwitcher.astro         # Zero-hydration vanilla JS accessible locale dropdown
    │   ├── ThemeToggle.astro              # Dark/light mode switcher with localStorage sync
    │   ├── SEO.astro                      # Canonical URLs, OpenGraph, hreflang, JSON-LD schemas
    │   ├── Icon.astro                     # Zero-runtime build-time Lucide SVG component
    │   ├── PageAnimations.astro           # Lightweight CSS micro-interaction keyframes
    │   │
    │   ├── sections/                      # Modular Landing Page Sections
    │   │   ├── HeroSection.astro          # Landing hero, value proposition, CTAs, StudioWindow
    │   │   ├── AboutSection.astro         # Founder profile summary & mission
    │   │   ├── ValuesSection.astro        # Core architectural & engineering values
    │   │   ├── ImpactSection.astro        # Global developer metrics, GitHub stars, stats
    │   │   ├── ProductsSection.astro      # Flagship developer tools grid
    │   │   ├── FreeForeverSection.astro   # Open source & free tools pledge
    │   │   ├── CommunitySection.astro     # Discord, GitHub community invitation
    │   │   └── Testimonials.astro         # Developer testimonials and industry feedback
    │   │
    │   └── ui/                            # Atomic & Reusable UI Primitives
    │       ├── BrandMark.astro            # Scalable SVG logo mark with subtle gradient
    │       ├── Button.astro               # Accessible button with primary/secondary/ghost variants
    │       ├── ErrorView.astro            # Universal error layout for 404, 500, 502
    │       ├── FeatureCard.astro          # Card container with hairline border & hover states
    │       ├── MonoEyebrow.astro          # Monospace metadata pill / section eyebrow
    │       └── StudioWindow.astro         # macOS-style window chrome with traffic light buttons
    │
    ├── pages/                             # Static File-Based Routing System
    │   ├── index.astro                    # Homepage (English default: /)
    │   ├── about.astro                    # Founder biography, career timeline & skills (/about)
    │   ├── products.astro                 # Flagship tools breakdown & comparison (/products)
    │   ├── ai-code-viewer-ai.astro        # AI Code Viewer dedicated product landing page
    │   ├── docs.astro                     # Developer documentation & API integration guides (/docs)
    │   ├── contact.astro                  # Contact form & collapsible FAQ accordion (/contact)
    │   ├── support.astro                  # Support center & troubleshooting (/support)
    │   ├── privacy.astro                  # Privacy policy (/privacy)
    │   ├── terms.astro                    # Terms of service (/terms)
    │   ├── 404.astro                      # Branded Not Found error page
    │   ├── 500.astro                      # Internal Server Error fallback
    │   ├── 502.astro                      # Bad Gateway fallback
    │   ├── error.astro                    # Generic error fallback
    │   ├── projects.astro                 # Alias redirecting to /apps
    │   ├── api-testing-platform.astro     # Legacy redirect page
    │   ├── file-sharing-platform.astro    # Legacy redirect page
    │   ├── website-builder-project.astro  # Legacy redirect page
    │   │
    │   ├── apps/                          # Apps Directory Module
    │   │   ├── index.astro                # Filterable developer tools gallery (/apps)
    │   │   └── admin.astro                # Offline client-side app database manager (/apps/admin)
    │   │
    │   ├── blog/                          # Technical Blog Module (English Canonical)
    │   │   ├── [...page].astro            # Paginated blog index (/blog, /blog/2, etc.)
    │   │   └── [...slug].astro            # Article markdown reader with TOC & code copy (/blog/[slug])
    │   │
    │   └── [lang]/                        # Dynamic Multi-Language Route Catchers
    │       ├── index.astro                # Localized home (e.g. /zh, /ko, /ja, /tr, /pt-BR)
    │       ├── about.astro                # Localized about (/[lang]/about)
    │       ├── products.astro             # Localized products (/[lang]/products)
    │       ├── ai-code-viewer-ai.astro    # Localized product landing page
    │       ├── docs.astro                 # Localized documentation (/[lang]/docs)
    │       ├── contact.astro              # Localized contact & FAQs (/[lang]/contact)
    │       ├── support.astro              # Localized support (/[lang]/support)
    │       ├── privacy.astro              # Localized privacy policy (/[lang]/privacy)
    │       ├── terms.astro                # Localized terms of service (/[lang]/terms)
    │       ├── 404.astro                  # Localized 404 page (/[lang]/404)
    │       └── apps/
    │           ├── index.astro            # Localized apps gallery (/[lang]/apps)
    │           └── admin.astro            # Localized admin editor (/[lang]/apps/admin)
    │
    └── styles/                            # Global Stylesheet
        └── global.css                     # Tailwind directives, CSS variables, typography & theme rules
```

---

### Root Configuration Files

| File | Purpose & Configuration Highlights |
|---|---|
| `astro.config.mjs` | Configures Astro 5 SSG (`output: 'static'`, `trailingSlash: 'never'`, `format: 'directory'`). Configures native i18n routing (`prefixDefaultLocale: false`). Sets up `@astrojs/tailwind` (with `applyBaseStyles: false`), `@astrojs/sitemap` (filters out admin/error pages, preloads frontmatter dates for accurate `<lastmod>`, adds `x-default`), and `astro-icon` with Lucide. Also implements the `sitemapXmlAlias()` build hook to create `sitemap.xml` from `sitemap-index.xml`. |
| `tailwind.config.mjs` | Defines custom design tokens: near-black canvas (`#0b0b0b`), coral brand accent (`#f36458`), paper light background (`#f5f3eb`), custom typography families (`Inter`, `IBM Plex Mono`), custom spacing scale, and 8 responsive screen breakpoints (`xxxs` at 376px to `2xl` at 1640px). |
| `tsconfig.json` | Extends `astro/tsconfigs/strict`. Defines TypeScript path alias `@/*` mapping directly to `./src/*`. Enables `strictNullChecks` and `allowJs`. |
| `package.json` | Project manifest defining npm scripts: `dev`, `build` (`astro check && astro build`), `preview`, `check`. Lists all zero-React dependencies. |
| `vercel.json` | Production edge routing configuration for Vercel. Redirects `/en` and `/en/*` to root without prefix, and permanently redirects non-English blog paths to canonical English `/blog/*`. |
| `PRD.md` | Product Requirements Document outlining the business vision, target metrics, core ecosystem apps, and product roadmap. |
| `DESIGN.md` | Single source of truth for the visual design system: color palette, typography hierarchy, polarity-flip section rhythm, and border radiuses. |
| `SKILL.md` | Agent and developer instructions detailing the non-negotiable architectural invariants and verification procedures. |

---

### Public Assets Directory (`public/`)

Assets in `public/` are served at the web root without build transformation:

- **`_redirects`**: CDN-level redirect table for Cloudflare Pages / Netlify. Strips `/en/` and redirects locale-prefixed `/blog/*` requests to `/blog/*`.
- **`robots.txt`**: Directs web crawlers. Disallows `/apps/admin`, `/404`, `/500`, `/502`, `/error`. Links to `https://ladestack.in/sitemap.xml`.
- **`llms.txt`**: Machine-readable text file formatted specifically for Large Language Model web crawlers and agents.
- **`site.webmanifest`**: PWA manifest specifying site name, icons, background color, and display mode.
- **`og-image.png`**: High-resolution (1200×630) social share card used across Twitter, LinkedIn, and Facebook.
- **Favicons**: Complete set including `favicon.ico`, `favicon.svg`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, and PWA icons (`icon-192.png`, `icon-512.png`).
- **`blog-covers/`**: 27+ optimized SVG and WebP cover graphics matching every article in `src/content/blog/`.
- **`project-icons/`**: Distinct SVG badges representing tools in `src/data/apps.json`.

---

### CI & Audit Automation Scripts (`scripts/`)

These automation scripts ensure the codebase adheres to strict quality controls before merging or deploying:

```bash
# 1. Detect untranslated English strings leaking into localized pages in dist/
node scripts/check-locale-leak.cjs

# 2. Test language switcher dropdown links, ARIA attributes, and path persistence
node scripts/test-lang-switcher.cjs

# 3. Validate apps.json schema, category integrity, and broken links
node scripts/check-products.cjs

# 4. Validate Schema.org JSON-LD microdata across all built pages
python scripts/validate-jsonld.py

# 5. CLI scaffolding tool to quickly generate a new blog post markdown file
node scripts/generate-blog.mjs
```

---

### Content Collections & Blog (`src/content/`)

All technical articles reside in `src/content/blog/*.md` and are strictly validated using Astro 5 Content Collections:

- **`src/content.config.ts`**: Defines the blog schema using Zod:
  ```typescript
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
  ```
- **27 Long-Form Articles**: Covering microservices, Kubernetes zero-downtime deployments, RAG & vector databases, OWASP Top 10 mitigation, OAuth2/OIDC, serverless BaaS, and SaaS multi-tenancy.

---

### Data Store (`src/data/`)

- **`src/data/apps.json`**: Central JSON database powering `/apps`, `/products`, and landing page highlights.
  - Fields per application: `id`, `slug`, `title`, `tagline`, `description`, `icon` (Lucide identifier), `category` (`AI Tools`, `Productivity`, `Cloud & DevOps`, `Developer Utilities`), `features`, `timeToValue`, `integrations`, `lifetimeFree`, `landingUrl`, `createdAt`, `popularityScore`, `iconAlt`.

---

### Internationalization System (`src/i18n/`)

Lade Stack features a rock-solid, multi-layered translation architecture:

1. **`src/i18n/config.ts`**:
   - Defines the `languages` dictionary:
     - `en`: English (Default, un-prefixed)
     - `zh`: Simplified Chinese (`/zh`)
     - `ko`: Korean (`/ko`)
     - `ja`: Japanese (`/ja`)
     - `tr`: Turkish (`/tr`)
     - `pt-BR`: Brazilian Portuguese (`/pt-BR`)
     - *(Reference: `ru`)*
   - Exports `SupportedLocale`, `defaultLocale`, `supportedLocales`, and `nonDefaultLocales`.

2. **`src/i18n/content-types.ts`**:
   - TypeScript contracts defining exact schemas for page content:
     - `HomePageContent`, `AboutPageContent`, `DocsPageContent`, `ContactPageContent`, `ProductsPageContent`, `SupportPageContent`, `LegalPageContent`.

3. **`src/i18n/content-[lang].ts`**:
   - High-fidelity translated page content for each language. Contains full paragraphs, feature bullet points, FAQ questions and answers, and career timeline milestones.

4. **`src/i18n/content.ts`**:
   - Helper aggregating all language dictionaries and exporting `getPageContent(page, lang)` with fallback to English.

5. **`src/i18n/ui.ts`**:
   - Fast key-value translation table for shared micro-copy: navigation labels (`nav.home`, `nav.apps`, `nav.blog`), button text (`common.launch`, `common.viewAll`), search placeholders, badge labels, and error messages.

6. **`src/i18n/utils.ts`**:
   - **`useTranslations(lang)`**: Returns a function `t(key)` that resolves keys from `src/i18n/ui.ts` with typed fallback to English.
   - **`getLocalizedPath(path, lang)`**: Converts a generic path into a correctly prefixed URL based on the target locale (e.g., `getLocalizedPath('/about', 'zh')` → `"/zh/about"`, while `getLocalizedPath('/about', 'en')` → `"/about"`).
   - **`getLangFromUrl(url)`**: Extracts the current active locale from `Astro.url.pathname`.

7. **`src/i18n/seo.ts`**:
   - Statically maps localized page titles, meta descriptions, and keywords for search engine indexing.

---

### Master Layouts (`src/layouts/`)

- **`src/layouts/BaseLayout.astro`**:
  - The universal layout wrapping every page on the website.
  - Injects Google Font links (`Inter`, `IBM Plex Mono`).
  - Renders `<SEO />` in `<head>`.
  - **Executes Zero-FOUC script**: An inline, synchronous JavaScript block in `<head>` that reads `localStorage.getItem('ladestack-theme')` and `prefers-color-scheme: dark`, setting `.dark` on `<html>` before any CSS or content paints.
  - Mounts `<Header />`, the main content `<slot />`, `<Footer />`, and `<PageAnimations />`.

---

### Modular UI Components (`src/components/`)

#### Global Chrome Components
- **`Header.astro`**:
  - Sticky glassmorphic top navigation bar.
  - Includes brand logo (`<BrandMark />`), desktop navigation links, search trigger, `<LanguageSwitcher />`, `<ThemeToggle />`, and mobile hamburger drawer.
  - Mobile drawer uses pure Vanilla JS to lock body scrolling (`overflow: hidden`) and trap focus.
- **`Footer.astro`**:
  - Multi-column footer organizing links across Products, Resources, Company, and Legal.
  - Embedded newsletter subscription form with client-side feedback.
  - Social media badges (GitHub, Twitter/X, LinkedIn, Discord).
- **`LanguageSwitcher.astro`**:
  - Custom accessible dropdown component built without external libraries.
  - Supports keyboard navigation (Enter, Space, Escape, Arrow Up/Down).
  - Automatically calculates destination URLs for all 6 languages using `getLocalizedPath()`.
  - Automatically preserves the current pathname when switching languages.
- **`ThemeToggle.astro`**:
  - Toggle button switching between light paper (`#F5F3EB`) and dark canvas (`#0b0b0b`).
  - Swaps Sun/Moon Lucide icons smoothly with CSS transitions.
- **`SEO.astro`**:
  - Comprehensive metadata generator.
  - Outputs canonical URL, OpenGraph tags, Twitter Card tags, and robots directives.
  - Generates full `hreflang` clustering links for all 6 locales + `x-default`.
  - Injects Schema.org JSON-LD microdata (`Organization`, `Person`, `WebSite`, `WebApplication`, `BlogPosting`, `FAQPage`).
- **`Icon.astro`**:
  - Thin wrapper around `astro-icon` with Lucide integration.
  - Zero runtime footprint.
- **`PageAnimations.astro`**:
  - CSS keyframes for subtle fade-in, upward drift, and stagger animations.

#### Landing Page Sections (`src/components/sections/`)
- **`HeroSection.astro`**: Main hero with high-impact headline, developer metrics pill, primary CTA buttons, and `<StudioWindow />` preview.
- **`AboutSection.astro`**: Founder snapshot detailing Girish Lade's background and core vision.
- **`ValuesSection.astro`**: The 4 pillars: Privacy by Design, Zero Bloat, Developer Ergonomics, Open Ecosystem.
- **`ImpactSection.astro`**: Real-world metrics grid (270+ pages, 100/100 Lighthouse, 0 KB hydration).
- **`ProductsSection.astro`**: Interactive showcase grid displaying flagship tools from `apps.json`.
- **`FreeForeverSection.astro`**: Commitment to free and open developer utilities.
- **`CommunitySection.astro`**: Call-to-action inviting developers to contribute and join the Discord community.
- **`Testimonials.astro`**: Peer reviews and engineering community feedback.

#### UI Primitives (`src/components/ui/`)
- **`BrandMark.astro`**: Vector logo badge with brand styling.
- **`Button.astro`**: Accessible link or button with `primary`, `secondary`, `outline`, and `ghost` variants.
- **`ErrorView.astro`**: Standard error template with status code badge, explanation, and return-home action.
- **`FeatureCard.astro`**: Reusable content box with 1px border, hover elevation, and icon slot.
- **`MonoEyebrow.astro`**: Monospace uppercase pill badge used as section eyebrow headers.
- **`StudioWindow.astro`**: macOS-styled code/app window container with red/yellow/green traffic lights.

---

### Page Routing Engine (`src/pages/`)

Astro uses file-based routing. Lade Stack implements a dual-layer routing architecture:

#### Layer 1: English Default Routes (Root / Un-prefixed)
Located directly in `src/pages/`:
- `/` → `src/pages/index.astro`
- `/about` → `src/pages/about.astro`
- `/products` → `src/pages/products.astro`
- `/ai-code-viewer-ai` → `src/pages/ai-code-viewer-ai.astro`
- `/docs` → `src/pages/docs.astro`
- `/contact` → `src/pages/contact.astro`
- `/support` → `src/pages/support.astro`
- `/privacy` → `src/pages/privacy.astro`
- `/terms` → `src/pages/terms.astro`
- `/apps` → `src/pages/apps/index.astro`
- `/apps/admin` → `src/pages/apps/admin.astro`
- `/blog` → `src/pages/blog/[...page].astro`
- `/blog/[slug]` → `src/pages/blog/[...slug].astro`
- Error pages: `404.astro`, `500.astro`, `502.astro`, `error.astro`

#### Layer 2: Localized Routes (`/[lang]/...`)
Located in `src/pages/[lang]/`:
Uses Astro's `getStaticPaths()` to dynamically generate pages for all non-default locales (`zh`, `ko`, `ja`, `tr`, `pt-BR`):
- `/[lang]` → `src/pages/[lang]/index.astro`
- `/[lang]/about` → `src/pages/[lang]/about.astro`
- `/[lang]/products` → `src/pages/[lang]/products.astro`
- `/[lang]/ai-code-viewer-ai` → `src/pages/[lang]/ai-code-viewer-ai.astro`
- `/[lang]/docs` → `src/pages/[lang]/docs.astro`
- `/[lang]/contact` → `src/pages/[lang]/contact.astro`
- `/[lang]/support` → `src/pages/[lang]/support.astro`
- `/[lang]/privacy` → `src/pages/[lang]/privacy.astro`
- `/[lang]/terms` → `src/pages/[lang]/terms.astro`
- `/[lang]/apps` → `src/pages/[lang]/apps/index.astro`
- `/[lang]/apps/admin` → `src/pages/[lang]/apps/admin.astro`
- `/[lang]/404` → `src/pages/[lang]/404.astro`

---

## 5. Deep-Dive: How Key Systems Work

### Multi-Language (i18n) Routing & Translation Pipeline

```
                       Browser Request: /zh/about
                                   │
                                   ▼
                    src/pages/[lang]/about.astro
                                   │
                     ┌─────────────┴─────────────┐
                     ▼                           ▼
        getLangFromUrl(Astro.url)      getPageContent('about', 'zh')
             (Resolves: 'zh')              (Loads: content-zh.ts)
                     │                           │
                     └─────────────┬─────────────┘
                                   ▼
                       useTranslations('zh')
                       (Loads: src/i18n/ui.ts)
                                   │
                                   ▼
               Renders static HTML into dist/zh/about/index.html
               Injected hreflang links: en, zh, ko, ja, tr, pt-BR
```

1. **Routing Strategy**: Handled statically via `getStaticPaths()` in `src/pages/[lang]/*.astro`.
2. **Path Normalization**: Whenever rendering an internal link, developers must call `getLocalizedPath(targetPath, lang)`.
   ```astro
   ---
   import { getLocalizedPath } from '@/i18n/utils';
   const { lang } = Astro.props;
   ---
   <a href={getLocalizedPath('/products', lang)}>Products</a>
   ```
   - If `lang === 'en'`, returns `/products`.
   - If `lang === 'zh'`, returns `/zh/products`.
3. **No Dynamic Client Translation**: Every single page permutation is written to disk as pre-rendered HTML during `astro build`.

---

### Zero-FOUC Dark/Light Mode Theme Engine

A common flaw in modern websites is the "Flash of Unstyled Content" (FOUC), where a dark mode user briefly sees a bright white flash before client JavaScript loads.

Lade Stack solves this by embedding a synchronous script directly inside `<head>` in `src/layouts/BaseLayout.astro`:

```html
<script is:inline>
  (function() {
    try {
      var saved = localStorage.getItem('ladestack-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
        document.documentElement.style.backgroundColor = '#0b0b0b';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.backgroundColor = '#F5F3EB';
      }
    } catch (e) {}
  })();
</script>
```

- **`is:inline` Directive**: Tells Astro not to bundle or defer this script. It executes synchronously before HTML parsing reaches `<body>` or stylesheets.
- **`ThemeToggle.astro`**: When clicked, toggles `.dark` on `document.documentElement`, stores the new preference in `localStorage.setItem('ladestack-theme', ...)`, and updates the icon.

---

### Static SEO, hreflang Clustering & JSON-LD Generation

In `src/components/SEO.astro`:

1. **`hreflang` Tag Generation**:
   Automatically generates self-referential and cross-language alternate tags for all indexable pages:
   ```html
   <link rel="alternate" hreflang="en" href="https://ladestack.in/about" />
   <link rel="alternate" hreflang="zh-CN" href="https://ladestack.in/zh/about" />
   <link rel="alternate" hreflang="ko" href="https://ladestack.in/ko/about" />
   <link rel="alternate" hreflang="ja" href="https://ladestack.in/ja/about" />
   <link rel="alternate" hreflang="tr" href="https://ladestack.in/tr/about" />
   <link rel="alternate" hreflang="pt-BR" href="https://ladestack.in/pt-BR/about" />
   <link rel="alternate" hreflang="x-default" href="https://ladestack.in/about" />
   ```
2. **Schema.org Structured Data**:
   Embeds type-safe JSON-LD schemas:
   - `Organization` & `Person` (Girish Lade)
   - `WebSite` & `SoftwareApplication`
   - `BlogPosting` (with headline, datePublished, author, and reading time)
   - `FAQPage` (accordion questions and answers)

---

### Blog Content Collections & Canonical Architecture

- Articles are authored in `src/content/blog/<slug>.md`.
- **English-Only Canonical Policy**: Technical articles feature deep architecture diagrams, code samples, and CLI commands. Machine-translating technical code introduces hallucinations. Therefore, blog posts exist exclusively in English at `https://ladestack.in/blog/<slug>`.
- **Edge 301 Redirects**: Any incoming request to a localized blog URL (e.g. `https://ladestack.in/zh/blog/my-post`) is caught by `vercel.json` or `public/_redirects` and permanently redirected (301) to `https://ladestack.in/blog/my-post`.

---

### Offline Developer Tools Admin Dashboard

Located at `src/pages/apps/admin.astro`:
- A zero-dependency, pure HTML/CSS/Vanilla JS dashboard.
- Allows developers to preview, add, edit, and re-order tools in `apps.json`.
- Features live search, category filtering, and one-click JSON export.
- Marked with `<meta name="robots" content="noindex, nofollow" />` to keep it out of search engine indexes.

---

## 6. Developer Workflows (Step-by-Step)

### Workflow A: Creating a New Page

When creating a new route (e.g., `/roadmap`):

1. **Create the English Route**:
   Create `src/pages/roadmap.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import { useTranslations } from '@/i18n/utils';
   
   const lang = 'en';
   const t = useTranslations(lang);
   ---
   
   <BaseLayout lang={lang} title="Roadmap | Lade Stack" description="Product roadmap">
     <main class="py-20">
       <h1 class="text-4xl font-bold font-serif">Roadmap</h1>
     </main>
   </BaseLayout>
   ```

2. **Create the Localized Dynamic Route**:
   Create `src/pages/[lang]/roadmap.astro`:
   ```astro
   ---
   import BaseLayout from '@/layouts/BaseLayout.astro';
   import { nonDefaultLocales, type SupportedLocale } from '@/i18n/config';
   import { useTranslations } from '@/i18n/utils';
   
   export function getStaticPaths() {
     return nonDefaultLocales.map((lang) => ({ params: { lang } }));
   }
   
   const { lang } = Astro.params as { lang: SupportedLocale };
   const t = useTranslations(lang);
   ---
   
   <BaseLayout lang={lang} title="Roadmap | Lade Stack">
     <main class="py-20">
       <h1 class="text-4xl font-bold font-serif">Roadmap</h1>
     </main>
   </BaseLayout>
   ```

3. **Register Page Translations**:
   Add relevant keys to `src/i18n/ui.ts` and structured content to `src/i18n/content-[lang].ts`.

---

### Workflow B: Adding a New UI Component

1. Create the component file in `src/components/` or `src/components/sections/` (e.g., `src/components/MetricCounter.astro`).
2. Follow the standard Astro component pattern:
   ```astro
   ---
   import type { SupportedLocale } from '@/i18n/config';
   import { useTranslations } from '@/i18n/utils';
   import Icon from '@/components/Icon.astro';
   
   interface Props {
     lang: SupportedLocale;
     value: string;
     labelKey: string;
     icon?: string;
     class?: string;
   }
   
   const { lang, value, labelKey, icon = 'lucide:sparkles', class: className = '' } = Astro.props;
   const t = useTranslations(lang);
   ---
   
   <div class={`p-6 rounded-marketing border border-hairline bg-card ${className}`}>
     <Icon name={icon} class="w-6 h-6 text-brand mb-2" />
     <span class="text-3xl font-bold text-foreground font-mono">{value}</span>
     <p class="text-sm text-muted-foreground mt-1">{t(labelKey)}</p>
   </div>
   ```

---

### Workflow C: Publishing a New Technical Blog Post

1. Create a markdown file in `src/content/blog/<slug>.md` (or run `node scripts/generate-blog.mjs`).
2. Include the required frontmatter validated by `src/content.config.ts`:
   ```markdown
   ---
   title: "Building High-Throughput Message Queues in Rust"
   description: "A deep dive into ring buffers, memory mapping, and lock-free concurrency."
   pubDate: 2026-09-15
   author: "Girish Lade"
   category: "Distributed Systems"
   readTime: 10
   coverImage: "/blog-covers/rust-queues.svg"
   featured: true
   tags: ["Rust", "Concurrency", "Queues", "Performance"]
   relatedApps: ["ls-microservice-kit"]
   ---
   
   ## Introduction
   
   Article body in standard Markdown with full code blocks...
   ```
3. Place the SVG/raster cover image in `public/blog-covers/`.
4. Run `npm run check` and `npm run build` to verify frontmatter types and markdown compilation.

---

### Workflow D: Registering a New Tool in the Apps Directory

1. Open `src/data/apps.json`.
2. Append the new application object:
   ```json
   {
     "id": "ls-query-optimizer",
     "slug": "ls-query-optimizer",
     "title": "QueryOpt AI",
     "tagline": "PostgreSQL & MySQL query plan analyzer",
     "description": "Analyze EXPLAIN ANALYZE queries client-side with visual index recommendations.",
     "icon": "lucide:database",
     "category": "Developer Utilities",
     "features": ["Visual execution tree", "Index advisor", "Zero-upload privacy"],
     "timeToValue": "30 seconds",
     "integrations": ["Web", "PostgreSQL", "MySQL"],
     "lifetimeFree": true,
     "landingUrl": "https://query.ladestack.in/",
     "createdAt": "2026-09-15",
     "popularityScore": 94,
     "iconAlt": "QueryOpt AI icon"
   }
   ```
3. Run `node scripts/check-products.cjs` to confirm schema integrity.

---

### Workflow E: Adding Translation Keys or a New Language

#### Adding New UI Keys
1. Open `src/i18n/ui.ts`.
2. Add the new key under `en`:
   ```typescript
   en: {
     // ...
     'nav.roadmap': 'Roadmap',
   }
   ```
3. Add the corresponding translation to each supported locale dictionary (`zh`, `ko`, `ja`, `tr`, `pt-BR`, `ru`).
4. Run `node scripts/check-locale-leak.cjs` to verify no translations are missing.

#### Adding a New Locale (e.g., German `de`)
1. In `src/i18n/config.ts`, add the locale definition to `languages`.
2. In `astro.config.mjs`, register the locale code under `i18n.locales` and in `@astrojs/sitemap`.
3. In `src/i18n/ui.ts`, provide the dictionary.
4. Create `src/i18n/content-de.ts` and wire it up in `src/i18n/content.ts`.
5. Update `public/_redirects` and `vercel.json` with the new locale redirect rule for `/blog`.

---

## 7. Local Setup, Diagnostics & Deployment

### Prerequisites
- **Node.js**: `v18.20.0` or `>= v20.0.0`
- **Package Manager**: `npm` (v9+) or `pnpm` (v8+)
- **Git**: Installed

### Development Commands

```bash
# 1. Install dependencies
npm install

# 2. Launch Astro local development server (HMR enabled)
npm run dev
# Server starts at http://localhost:4321

# 3. Perform static type checking across all .astro and .ts files
npm run check

# 4. Compile static production build into dist/
npm run build

# 5. Preview the compiled dist/ directory locally
npm run preview
```

### Automated Quality Audits

Run these checks prior to pushing commits:

```bash
# Audit 1: Type check
npm run check

# Audit 2: Build validation
npm run build

# Audit 3: Scan for un-translated English strings on localized routes
node scripts/check-locale-leak.cjs

# Audit 4: Test language switcher dropdown & route persistence
node scripts/test-lang-switcher.cjs

# Audit 5: Validate apps and product schema
node scripts/check-products.cjs

# Audit 6: Validate Schema.org JSON-LD microdata
python scripts/validate-jsonld.py
```

### Production Deployment

#### Vercel (Primary Production Host)
- **Framework Preset**: Astro (Automatically detected)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Redirects & Headers**: Handled by `vercel.json`

#### Cloudflare Pages / Netlify / GitHub Pages
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Redirects**: Handled by `public/_redirects`

---

## 8. Developer Dos & Don'ts Checklist

### ✅ DO
- **DO** use `useTranslations(lang)` for every piece of user-facing UI text.
- **DO** wrap every internal link with `getLocalizedPath(path, lang)`.
- **DO** use `<Icon name="lucide:..." />` for build-time optimized SVGs.
- **DO** verify changes with `npm run check` and `npm run build`.
- **DO** run `node scripts/check-locale-leak.cjs` after adding or editing translations.
- **DO** ensure the zero-FOUC theme script remains inline in `src/layouts/BaseLayout.astro`.

### ❌ DON'T
- **DON'T** import React, ReactDOM, `@types/react`, Radix, or Framer Motion (`Zero React Runtime`).
- **DON'T** hardcode naked URLs like `<a href="/about">` (this causes visitors to drop out of their active language).
- **DON'T** hardcode English text directly into `.astro` templates.
- **DON'T** create localized blog posts under `/[lang]/blog/` (the blog is canonical English only).
- **DON'T** add `react` to `package.json` under any circumstances.
- **DON'T** remove `noindex` from admin or error pages.

---

## 👥 Authors & Maintainers

- **Founder & Architect**: [Girish Lade](https://linkedin.com/in/girishlade)
- **Repository**: [github.com/girishlade111/lade-stack-astro](https://github.com/girishlade111/lade-stack-astro)
- **Live Ecosystem**: [ladestack.in](https://ladestack.in)
- **License**: MIT License
