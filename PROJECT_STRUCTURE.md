# Lade Stack Astro — Project Structure & Architecture Documentation

> **Project Type:** 100% Pure Astro 5 Static Site Generator (SSG)  
> **Stack:** Astro 5 + Tailwind CSS 3.4 + TypeScript 5.7  
> **Internationalization:** 6 languages (en, zh, ko, ja, tr, pt-BR)  
> **Zero React Runtime** — No hydration, no islands, pure static HTML

---

## 📁 Root Directory Overview

```
ladestack-astro/
├── .astro/                    # Astro internal cache (generated)
├── .vscode/                   # VS Code workspace settings
├── dist/                      # Production build output (generated)
├── node_modules/              # Dependencies (ignored)
├── public/                    # Static assets (served as-is)
├── sanity/                    # Sanity CMS design tokens (optional)
├── scripts/                   # Build-time automation scripts
├── src/                       # **Main source code** (documented below)
├── astro.config.mjs           # Astro configuration
├── package.json               # Project manifest & dependencies
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
└── PROJECT_STRUCTURE.md       # This file
```

---

## 🏗️ `src/` — Main Source Code Structure

```
src/
├── components/                # Reusable Astro components
│   ├── sections/              # Homepage section components
│   ├── ui/                    # Atomic UI primitives
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Icon.astro
│   ├── LanguageSwitcher.astro
│   ├── SEO.astro
│   └── ThemeToggle.astro
├── content/                   # Content collections (Astro Content Layer)
│   ├── blog/                  # Markdown blog posts (27 posts)
│   └── blog/*.md              # Frontmatter + MDX content
├── content.config.ts          # Content collection schemas
├── data/                      # Static JSON data files
│   └── apps.json              # App registry (13 apps)
├── i18n/                      # Internationalization system
│   ├── config.ts              # Locale definitions
│   ├── content.ts             # Content translations + app localization
│   ├── content-en.ts          # English content dictionary
│   ├── content-ja.ts          # Japanese content dictionary
│   ├── content-ko.ts          # Korean content dictionary
│   ├── content-zh.ts          # Chinese content dictionary
│   ├── content-tr.ts          # Turkish content dictionary
│   ├── content-ptbr.ts        # Portuguese (Brazil) content dictionary
│   ├── content-types.ts       # TypeScript types for i18n
│   ├── ui.ts                  # UI translation dictionary (229 keys × 6 locales)
│   └── utils.ts               # i18n helper functions
├── layouts/                   # Page layouts
│   └── BaseLayout.astro       # Root HTML layout (all pages)
├── pages/                     # File-based routing (Astro pages)
│   ├── [lang]/                # Localized routes (5 non-default locales)
│   │   ├── apps/
│   │   ├── blog/
│   │   ├── 404.astro
│   │   ├── about.astro
│   │   ├── ai-code-viewer-ai.astro
│   │   ├── contact.astro
│   │   ├── docs.astro
│   │   ├── index.astro
│   │   ├── privacy.astro
│   │   ├── products.astro
│   │   ├── support.astro
│   │   └── terms.astro
│   ├── apps/                  # Default locale (en) apps routes
│   │   ├── admin.astro
│   │   └── index.astro
│   ├── blog/                  # Default locale (en) blog routes
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── [lang].astro           # Dynamic locale handler (not used — explicit routes)
│   ├── 404.astro
│   ├── 500.astro
│   ├── 502.astro
│   ├── about.astro
│   ├── ai-code-viewer-ai.astro
│   ├── api-testing-platform.astro
│   ├── contact.astro
│   ├── docs.astro
│   ├── error.astro
│   ├── file-sharing-platform.astro
│   ├── index.astro            # Homepage (default locale: en)
│   ├── privacy.astro
│   ├── products.astro
│   ├── projects.astro
│   ├── support.astro
│   ├── terms.astro
│   └── website-builder-project.astro
├── styles/
│   └── global.css             # Global styles + Tailwind imports
├── env.d.ts                   # Astro type declarations
└── middleware.ts              # (Optional) Astro middleware
```

---

## 🧩 Components Deep Dive

### Layout Components (`src/components/`)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **BaseLayout.astro** | Root HTML document wrapper | SEO, fonts, analytics, theme script, Header/Footer slots |
| **Header.astro** | Global navigation bar | Logo, nav links, language switcher, theme toggle, mobile menu |
| **Footer.astro** | Site footer | Links, newsletter signup, social, copyright, stack badge |
| **SEO.astro** | Meta tags & structured data | Open Graph, Twitter Cards, JSON-LD, hreflang, canonical |
| **LanguageSwitcher.astro** | Locale selector dropdown | 6 languages, flag icons, localized paths |
| **ThemeToggle.astro** | Dark/Light mode switch | localStorage persistence, zero-FOUC inline script |
| **Icon.astro** | Lucide icon wrapper | `astro-icon` integration, dynamic icon names |

### Section Components (`src/components/sections/`)

| Component | Homepage Section | Description |
|-----------|------------------|-------------|
| **HeroSection.astro** | Above-fold hero | Badge, split headline, stats, dual CTAs, animated elements |
| **AboutSection.astro** | Mission statement | Founder story, mission, CTA to about page |
| **ValuesSection.astro** | Core values grid | 4 pillars: AI-First, Open Access, Performance, Trust |
| **ImpactSection.astro** | Metrics showcase | 8K+ devs, 9+ tools, 27+ guides, 100% free |
| **ProductsSection.astro** | Product cards | Flagship apps with launch/coming-soon badges |
| **FreeForeverSection.astro** | Pricing pledge | "Free forever — no tiers, no trials, no credit card" |
| **CommunitySection.astro** | Community CTA | GitHub star, contact, contributor count |
| **Testimonials.astro** | Social proof | Rotating dev testimonials with avatars |

### UI Primitives (`src/components/ui/`)

| Component | Purpose | Props |
|-----------|---------|-------|
| **Button.astro** | Primary/secondary/ghost buttons | `variant`, `href`, `class`, `disabled` |
| **FeatureCard.astro** | Product/app feature card | `title`, `description`, `icon`, `features[]` |
| **BrandMark.astro** | Logo mark + wordmark | `class`, `size` |
| **StudioWindow.astro** | Code editor preview mockup | `title`, `code`, `language` |
| **MonoEyebrow.astro** | Section eyebrow label | `children`, `class` |
| **ErrorView.astro** | Error state illustration | `code`, `message`, `action` |

---

## 🌐 Internationalization (i18n) Architecture

### Locale Configuration (`src/i18n/config.ts`)

```typescript
export const languages = {
  en: { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr', iso: 'en_US' },
  zh: { code: 'zh', name: '简体中文', flag: '🇨🇳', dir: 'ltr', iso: 'zh_CN' },
  ko: { code: 'ko', name: '한국어', flag: '🇰🇷', dir: 'ltr', iso: 'ko_KR' },
  ja: { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr', iso: 'ja_JP' },
  tr: { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr', iso: 'tr_TR' },
  'pt-BR': { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷', dir: 'ltr', iso: 'pt_BR' }
} as const;

export type SupportedLocale = keyof typeof languages; // 'en' | 'zh' | 'ko' | 'ja' | 'tr' | 'pt-BR'
export const defaultLocale: SupportedLocale = 'en';
```

### Routing Strategy (Astro Native i18n)

- **Default locale (`en`)**: No prefix — `/`, `/blog`, `/apps`, `/about`
- **Non-default locales**: Prefixed — `/zh/`, `/zh/blog`, `/ko/apps`, etc.
- **Astro config** (`astro.config.mjs`):
  ```js
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'ko', 'ja', 'tr', 'pt-BR'],
    routing: {
      prefixDefaultLocale: false,  // / not /en/
      redirectToDefaultLocale: true
    }
  }
  ```

### Translation Layers

#### 1. UI Dictionary (`src/i18n/ui.ts`)
- **229 translation keys** × **6 locales** = **1,374 strings**
- Namespaced keys: `nav.home`, `home.hero.title`, `blog.post.toc`, `admin.formTitle`
- Type-safe via `UIKeys = keyof typeof en`
- Fallback chain: `ui[lang][key] ?? ui[defaultLocale][key] ?? key`

#### 2. Content Dictionary (`src/i18n/content-*.ts`)
- **Page-level copy**: Hero, About, Values, Impact, Products, Free, Community, Testimonials
- **App overrides**: Per-locale `tagline`, `description`, `features` for each app in `apps.json`
- **Blog post SEO**: Localized `title` + `description` (body remains English)
- **Category labels**: Localized blog/app category names

#### 3. Utility Functions (`src/i18n/utils.ts`)
```typescript
getLangFromUrl(url)           // Extract locale from URL pathname
useTranslations(lang)         // Returns typed `t(key)` function
getLocalizedPath(path, lang)  // Convert canonical path → localized path
getRouteFromUrl(url)          // Strip locale prefix → canonical route
getLocalizedPathFromUrl()     // Current URL → target locale equivalent
```

#### 4. Content Access (`src/i18n/content.ts`)
```typescript
getContent(lang)              // Full LocaleContent dictionary
getLocalizedApps(lang)        // apps.json merged with locale overrides
localizePost(slug, fallback, lang)  // Blog post SEO localization
```

---

## 📄 Content Collections (Astro Content Layer)

### Blog Collection (`src/content/config.ts`)

```typescript
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Girish Lade'),
    category: z.string(),
    readTime: z.string(),
    coverImage: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([])
  })
});
```

### Blog Posts (`src/content/blog/`)

**27 Markdown files** covering:
- AI Development (LLMs, RAG, fine-tuning, code review)
- API Design (REST vs GraphQL, rate limiting, gateways)
- Cloud & DevOps (Terraform, GitOps, multi-cloud, containers)
- SaaS Architecture (multi-tenant, billing, zero-downtime)
- Security (OWASP, zero-trust, OAuth2/OIDC)
- ML/Ops (pipelines, MLOps, monitoring)

**Frontmatter Example:**
```yaml
---
title: "Building RAG Applications with Vector Databases"
description: "Complete guide to retrieval-augmented generation..."
pubDate: "2024-03-15"
author: "Girish Lade"
category: "AI Development"
readTime: "12"
coverImage: "/blog-covers/ai-production.svg"
featured: true
tags: ["RAG", "Vector Databases", "LLM", "AI"]
---
```

---

## 📦 Data Layer

### Apps Registry (`src/data/apps.json`)

**13 applications** with full metadata:

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (kebab-case) |
| `slug` | string | URL slug for landing page |
| `title` | string | Display name |
| `tagline` | string | One-line pitch |
| `description` | string | Full description |
| `icon` | string | Lucide icon name (`lucide:code-xml`) |
| `category` | string | Group: "AI Tools" \| "Productivity" \| "Utilities" |
| `features` | string[] | 3-5 key features |
| `timeToValue` | string | e.g., "Instant", "2 minutes", "5 minutes" |
| `integrations` | string[] | Platform integrations |
| `lifetimeFree` | boolean | Always `true` |
| `landingUrl` | string | Relative (`/ai-code-viewer-ai`) or absolute (`https://pdf.ladestack.in/`) |
| `createdAt` | string | ISO date |
| `popularityScore` | number | 0-100 for sorting |
| `iconAlt` | string | Accessibility alt text |
| `comingSoon?` | boolean | Optional — hides from sitemap |

---

## 🛣️ Routing & Pages

### Default Locale Routes (`en` — no prefix)

| Route | Page Component | Description |
|-------|----------------|-------------|
| `/` | `src/pages/index.astro` | Homepage with all sections |
| `/about` | `src/pages/about.astro` | About page |
| `/apps` | `src/pages/apps/index.astro` | Apps gallery |
| `/apps/admin` | `src/pages/apps/admin.astro` | Admin dashboard (noindex) |
| `/blog` | `src/pages/blog/index.astro` | Blog index with search |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Individual blog post |
| `/products` | `src/pages/products.astro` | Products overview |
| `/projects` | `src/pages/projects.astro` | Projects showcase |
| `/ai-code-viewer-ai` | `src/pages/ai-code-viewer-ai.astro` | CodeEnhance AI landing |
| `/api-testing-platform` | `src/pages/api-testing-platform.astro` | API Testing landing (noindex) |
| `/website-builder-project` | `src/pages/website-builder-project.astro` | Website Builder landing (noindex) |
| `/file-sharing-platform` | `src/pages/file-sharing-platform.astro` | File Management landing (noindex) |
| `/contact` | `src/pages/contact.astro` | Contact form + FAQ |
| `/docs` | `src/pages/docs.astro` | Documentation hub |
| `/support` | `src/pages/support.astro` | Support center |
| `/privacy` | `src/pages/privacy.astro` | Privacy policy |
| `/terms` | `src/pages/terms.astro` | Terms of service |
| `/404` | `src/pages/404.astro` | Custom 404 |
| `/500` | `src/pages/500.astro` | Server error |
| `/502` | `src/pages/502.astro` | Bad gateway |
| `/error` | `src/pages/error.astro` | Generic error |

### Localized Routes (5 non-default locales)

Each locale has explicit routes under `src/pages/[lang]/`:
- `index.astro` → localized homepage
- `about.astro`, `apps/index.astro`, `apps/admin.astro`
- `blog/index.astro`, `blog/[...slug].astro`
- `contact.astro`, `docs.astro`, `support.astro`
- `privacy.astro`, `terms.astro`, `products.astro`
- `ai-code-viewer-ai.astro`
- `404.astro`

**Static generation**: `getStaticPaths()` in `[lang]/index.astro` generates all 5 locale homepages at build time.

---

## 🎨 Styling System

### Tailwind Configuration (`tailwind.config.mjs`)

- **Custom color palette**: `canvas`, `ink`, `brand`, `sage`, `muted`, `card`, `border`, `foreground`
- **Typography**: `@tailwindcss/typography` for blog prose
- **Animations**: `tailwindcss-animate` for transitions
- **Dark mode**: `class` strategy (`.dark` on `<html>`)

### Global Styles (`src/styles/global.css`)

```css
@import "tailwindcss";
@plugin "tailwindcss-animate";
@plugin "@tailwindcss/typography";

@theme {
  --color-canvas: #0b0b0b;
  --color-ink: #fafafa;
  --color-brand: #10b981;      /* Emerald 500 */
  --color-sage: #84cc16;       /* Lime 500 */
  /* ... semantic color tokens */
}

@layer base {
  html { @apply scroll-smooth; }
  body { @apply bg-canvas text-ink; }
  .dark { @apply bg-canvas text-ink; }
}
```

### Fonts (Per DESIGN.md)
- **Primary**: Inter (400, 500, 600) — UI text
- **Mono**: IBM Plex Mono (400, 500) — Code, technical
- **Fallback**: System fonts (waldenburgNormal alternative)

---

## ⚙️ Build & Deployment

### Scripts (`package.json`)

```json
{
  "dev": "astro dev",
  "start": "astro dev",
  "build": "astro check && astro build",
  "preview": "astro preview",
  "astro": "astro",
  "check": "astro check"
}
```

### Astro Config Highlights (`astro.config.mjs`)

```js
export default defineConfig({
  site: 'https://ladestack.in',
  output: 'static',                    // Pure SSG
  trailingSlash: 'never',              // Clean URLs
  build: { format: 'directory' },      // /blog/slug/index.html
  i18n: { /* 6 locales, prefixDefaultLocale: false */ },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({ /* priority/changefreq/lastmod logic + x-default */ }),
    icon({ include: { lucide: ['*'] } })
  ]
});
```

### Sitemap Strategy

- **Priority tiers**: Home (1.0) → Apps/Products (0.9) → Blog index (0.8) → Posts (0.7) → Legal (0.3)
- **Excluded from sitemap**: Admin, error pages, coming-soon apps, sitemap files themselves
- **Blog lastmod**: Parsed from frontmatter `pubDate` at build time
- **x-default hreflang**: Auto-added for international SEO clustering

---

## 🔧 Build-Time Scripts (`scripts/`)

| Script | Purpose | Language |
|--------|---------|----------|
| `generate-assets.py` | Generate OG images, favicons, icons | Python |
| `generate-blog.mjs` | Scaffold new blog posts with frontmatter | Node/ESM |
| `generate_favicons.py` | Create multi-size favicon set | Python |
| `validate-jsonld.py` | Validate structured data schemas | Python |
| `check-locale-leak.cjs` | Detect hardcoded English in localized pages | Node/CommonJS |
| `check-products.cjs` | Validate apps.json schema & consistency | Node/CommonJS |
| `test-lang-switcher.cjs` | Verify language switcher paths | Node/CommonJS |

---

## 📊 Build Output (`dist/`)

```
dist/
├── _astro/                    # Hashed CSS/JS assets
├── blog-covers/               # Blog cover images (SVG)
├── project-icons/             # Project showcase icons
├── en/                        # Default locale (root files copied)
├── zh/                        # Chinese
├── ko/                        # Korean
├── ja/                        # Japanese
├── tr/                        # Turkish
├── pt-BR/                     # Portuguese (Brazil)
├── favicon.ico
├── favicon.svg
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── icon-192.png
├── icon-512.png
├── site.webmanifest
├── robots.txt
├── sitemap.xml                # Alias of sitemap-index.xml
├── sitemap-index.xml          # Main sitemap index
├── llms.txt                   # AI training data opt-out/allow
├── og-image.png               # Open Graph default image
└── AIcode.png                 # CodeEnhance AI preview
```

---

## 🔑 Key Architectural Decisions

### 1. **Zero React / Zero Hydration**
- Pure Astro components (`.astro`) only
- No `client:load`, `client:visible`, or islands
- All interactivity: vanilla `<script is:inline>` (theme toggle, copy buttons, language switcher)

### 2. **Explicit Localized Routes**
- No dynamic `[lang]` catch-all — each locale has explicit page files
- Enables per-locale SEO optimization, different component composition
- Trade-off: More files, but full control over each locale's HTML

### 3. **Content-Driven Apps Registry**
- Single source of truth: `src/data/apps.json`
- Localized overrides via `src/i18n/content-*.ts`
- Admin dashboard (`/apps/admin`) generates updated JSON for commit

### 4. **Type-Safe i18n**
- `UIKeys` type from English dictionary
- `SupportedLocale` union type from config
- Compile-time safety for all translation keys

### 5. **Performance Baselines**
- `output: 'static'` + `format: 'directory'` → optimal caching
- Zero client-side JS by default
- Inline critical CSS via Astro + Tailwind
- Preloaded Google Fonts with `display=swap`
- Lighthouse 100/100 target

### 6. **SEO-First Architecture**
- JSON-LD structured data on every page (WebApplication, WebSite, Organization, BlogPosting)
- Hreflang annotations with x-default
- Canonical URLs per locale
- Semantic HTML5 + ARIA labels
- `robots.txt` + `sitemap.xml` auto-generated

---

## 🚀 Development Workflow

### Adding a New Blog Post
```bash
# 1. Run scaffold script
node scripts/generate-blog.mjs "My New Post Title" "AI Development"

# 2. Edit generated file in src/content/blog/
# 3. Add cover image to public/blog-covers/
# 4. Add translations in src/i18n/content-*.ts (blogPosts section)
```

### Adding a New App
```bash
# 1. Edit src/data/apps.json (add entry)
# 2. Add localized copy to src/i18n/content-*.ts (apps section)
# 3. Run admin dashboard at /apps/admin to validate & export
# 4. Commit updated apps.json
```

### Adding a New Locale
1. Add locale to `src/i18n/config.ts` `languages` object
2. Create `src/i18n/content-<locale>.ts` (copy from `content-en.ts`)
3. Create `src/i18n/ui-<locale>.ts` translations (or extend `ui.ts`)
4. Add locale to `astro.config.mjs` `i18n.locales`
5. Create pages under `src/pages/<locale>/`
6. Update sitemap locale mapping in `astro.config.mjs`

---

## 📈 Performance & Quality Gates

| Metric | Target | Implementation |
|--------|--------|----------------|
| **Lighthouse Performance** | 100 | Static HTML, no JS, optimized fonts, preloading |
| **Lighthouse Accessibility** | 100 | Semantic HTML, ARIA, color contrast, focus states |
| **Lighthouse Best Practices** | 100 | HTTPS, CSP-ready, no deprecated APIs |
| **Lighthouse SEO** | 100 | Meta tags, structured data, hreflang, sitemap |
| **Bundle Size (JS)** | 0 KB | No hydration, no islands |
| **Time to First Byte** | < 100ms | Static hosting (CDN), edge deployment |

### Quality Checks (Pre-commit / CI)
```bash
npm run check          # astro check (TypeScript + Astro diagnostics)
npm run build          # Full production build verification
```

---

## 🔮 Extensibility Points

| Extension | Location | Pattern |
|-----------|----------|---------|
| New UI component | `src/components/ui/` | `.astro` + TypeScript props interface |
| New homepage section | `src/components/sections/` | Import in `index.astro` + `[lang]/index.astro` |
| New page type | `src/pages/` + `src/pages/[lang]/` | Follow existing page patterns |
| New content collection | `src/content.config.ts` | `defineCollection()` + schema |
| New i18n namespace | `src/i18n/content-*.ts` | Add to `LocaleContent` type |
| New script | `scripts/` | Add to `package.json` scripts |

---

## 📝 File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Astro components | PascalCase | `HeroSection.astro`, `Button.astro` |
| Pages (routes) | kebab-case | `ai-code-viewer-ai.astro`, `[...slug].astro` |
| Layouts | PascalCase + Layout | `BaseLayout.astro` |
| Styles | kebab-case | `global.css` |
| Scripts | kebab-case + extension | `generate-blog.mjs`, `validate-jsonld.py` |
| Content (blog) | kebab-case | `building-rag-applications.md` |
| Data files | kebab-case | `apps.json` |
| i18n dictionaries | kebab-case + locale | `content-en.ts`, `ui.ts` |

---

## 🔗 Related Documentation

- **DESIGN.md** — Visual design system, color tokens, spacing, typography (in `sanity/`)
- **Astro Docs** — https://docs.astro.build
- **Tailwind CSS** — https://tailwindcss.com
- **Astro i18n Guide** — https://docs.astro.build/en/guides/internationalization/

---

*Generated from codebase analysis — Lade Stack Astro v1.0.0*