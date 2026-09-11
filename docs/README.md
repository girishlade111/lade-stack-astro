# Lade Stack Technical Translation Master Guide & Standards

This document establishes the overarching architecture, invariants, formatting constraints, and tone principles for translating technical engineering content on Lade Stack across all 6 supported non-default locales:

- [Simplified Chinese (简体中文) — `zh`](./i18n-glossary-zh.md)
- [Russian (Русский) — `ru`](./i18n-glossary-ru.md)
- [Japanese (日本語) — `ja`](./i18n-glossary-ja.md)
- [Korean (한국어) — `ko`](./i18n-glossary-ko.md)
- [Turkish (Türkçe) — `tr`](./i18n-glossary-tr.md)
- [Portuguese - Brazil (Português do Brasil) — `pt-BR`](./i18n-glossary-pt-BR.md)

---

## 1. Global Untranslated Terms (Universal Invariants)

The following categories of terms **must always remain in English** across all locales, without transliteration, calquing, or partial translation:

### 1.1 Brand & Product Names
- `Lade Stack` / `LadeStack`
- `CodeEnhance AI`
- `LS PDF Tools`
- `LS Image Studio`
- `Secure File Hub`
- `Website Builder AI`
- `API Testing Platform`

### 1.2 Technology Brands, Frameworks, Platforms & Libraries
- **Frontend & Runtimes**: `React`, `Astro`, `Next.js`, `Vite`, `Vue`, `Svelte`, `Node.js`, `Bun`, `Deno`
- **Languages**: `TypeScript`, `JavaScript`, `Python`, `Go`, `Rust`, `SQL`, `HTML`, `CSS`
- **Cloud & Orchestration**: `Kubernetes`, `Docker`, `Terraform`, `Pulumi`, `AWS`, `Azure`, `GCP`, `Cloudflare`, `Vercel`
- **Databases & Caches**: `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`, `Supabase`, `Firebase`, `Appwrite`, `Pinecone`, `Milvus`, `Qdrant`, `Chroma`, `pgvector`
- **Observability & Tooling**: `OpenTelemetry`, `Prometheus`, `Grafana`, `Jaeger`, `Datadog`
- **Styling**: `Tailwind CSS`, `PostCSS`

### 1.3 Protocols, Standards & Specs
- `REST`, `GraphQL`, `WebSocket`, `gRPC`, `CRDT`
- `OAuth 2.0`, `OpenID Connect`, `PKCE`, `JWT`, `JWK`, `SAML`, `TLS 1.3`, `HTTPS`
- `OWASP`, `OWASP Top 10`

### 1.4 Code Identifiers & Syntax
- Any variable, function, class, type, interface, constant, method, struct, or enum name:
  - `runWithResilience`, `circuitBreaker`, `timeoutMs`, `retries`, `lastError`
  - `CollectionEntry<'blog'>`, `SupportedLocale`, `getLocalizedPath`

### 1.5 CLI Commands, Tools & Shell Flags
- Shell commands, utilities, and flags:
  - `git commit`, `git push`, `git rebase`
  - `npm run build`, `pnpm install`, `yarn test`, `npx`
  - `kubectl apply -f`, `docker build -t`, `terraform init`
  - All command-line flags (e.g. `--namespace`, `-p`, `--dry-run`)

### 1.6 File Paths, Routes & Config Keys
- File paths: `src/content/blog/`, `astro.config.mjs`, `package.json`, `tsconfig.json`, `_redirects`, `vercel.json`
- URL slugs & paths: `/blog`, `/blog/[slug]`, `/[lang]/blog/[slug]`
- Configuration keys: `trailingSlash`, `defaultLocale`, `pubDate`, `author`, `readTime`

### 1.7 HTTP & Protocol Primitives
- HTTP Methods: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`, `HEAD`, `OPTIONS`
- HTTP Status Codes: `200 OK`, `201 Created`, `301 Moved Permanently`, `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `429 Too Many Requests`, `500 Internal Server Error`, `502 Bad Gateway`, `503 Service Unavailable`
- HTTP Headers: `Content-Type`, `Authorization`, `Accept`, `Cache-Control`, `X-Forwarded-For`

---

## 2. Formatting & Markdown Syntax Rules

Strict adherence to Markdown and code syntax ensures clean builds, high readability, and flawless rendering.

### 2.1 Code Blocks (` ```...``` `)
- **Rule**: **NEVER** translate code inside fenced code blocks.
- Code logic, syntax, imports, strings, types, and structure must remain exact.
- **Comments**: Only translate comments if they deliver pedagogical value for understanding the architecture (e.g., `// Minimal production-ready starter` -> `// 生产级极简初始配置`).
- If in doubt, leave comments in English.
- Never alter comment syntax delimiters (`//`, `/* */`, `#`, `<!-- -->`, `--`).

### 2.2 Inline Code (`` `...` ``)
- **Rule**: **NEVER** translate content enclosed in backticks.
- Examples: `retryCount`, `localStorage`, `setTimeout`, `p95`, `O(1)`, `HTTP 429`.

### 2.3 Frontmatter Constraints
Every translated blog markdown file (`src/content/blog/[lang]/[slug].md`) uses strict YAML frontmatter:

```yaml
---
title: "Localized Canonical Title"
description: "Punchy, actionable 1-2 sentence localized description."
pubDate: 2024-11-28
author: "Girish Lade"
category: "DevOps & CI/CD"
readTime: 10
coverImage: "/blog-covers/devops.svg"
featured: true
tags: ["LocalizedTag1", "LocalizedTag2", "LocalizedTag3"]
---
```

- **`title`**: Must use the exact title specified in the locale's glossary and `src/i18n/content-[lang].ts`.
- **`description`**: Must use the exact description specified in `content-[lang].ts`.
- **`pubDate`**: Keep the exact publication date in ISO format (`YYYY-MM-DD`).
- **`author`**: Always `"Girish Lade"` (founder attribution).
- **`category`**: Retain the standard English category key matching the collection schema:
  - `"AI Development"`
  - `"Generative AI"`
  - `"SaaS Architecture"`
  - `"Backend as a Service"`
  - `"API Design & Scaling"`
  - `"Cloud Computing"`
  - `"Virtual Machines"`
  - `"DevOps & CI/CD"`
  - `"Security in Web Apps"`
  - `"AI Production Systems"`
- **`readTime`**: Preserve numerical integer value.
- **`coverImage`**: Keep exact file path (e.g. `"/blog-covers/devops.svg"`).
- **`featured`**: Keep boolean (`true` / `false`).
- **`tags`**: Translate tags into concise technical tags according to the locale glossary.

### 2.4 Tables & Lists
- Translate table headers and cell text, but keep technical metrics, units (`ms`, `req/s`, `GB`), formulas, and code in English.
- Preserve markdown table delimiters (`|`, `---`).
- Retain exact numbered (`1.`, `2.`) and bulleted (`-`, `*`) list structure.

### 2.5 Callouts & Blockquotes
- Retain GitHub/Astro alert syntax exactly:
  - `> [!NOTE]`
  - `> [!TIP]`
  - `> [!IMPORTANT]`
  - `> [!WARNING]`
  - `> [!CAUTION]`
- Translate the blockquote body text immediately following the directive.

---

## 3. Tone & Voice Principles (Engineer-to-Engineer)

Lade Stack content is written by engineers, for engineers. The tone must strictly adhere to these 4 tenets:

1. **Direct and Actionable**: Get straight to the engineering problem, the trade-offs, and the implementation.
2. **Zero Marketing Fluff**: Eliminate hyperbole, corporate jargon, and exaggerated claims (*"revolutionary"*, *"game-changing"*, *"miraculous"*). State technical realities (*"lowers p99 latency from 450ms to 85ms"*, *"prevents connection pool starvation under traffic spikes"*).
3. **Pragmatic & Production-Hardened**: Emphasize edge cases, failure modes, rollback strategies, cost implications, and operational observability.
4. **Peer-to-Peer Register**: Treat the reader as an intelligent fellow engineer. Do not adopt an academic, condescending, or overly bureaucratic tone.

---

## 4. The 27 Canonical Blog Articles

Every locale glossary covers all 27 articles in the core catalog:

| # | Clean Slug | Primary Domain | Core Engineering Focus |
|---|---|---|---|
| 1 | `api-rate-limiting-throttling-strategies` | API & Architecture | Token bucket, leaky bucket, distributed Redis limits |
| 2 | `baas-platforms-compared-firebase-supabase-appwrite` | Backend & Cloud | Postgres vs Document, vendor lock-in, edge functions |
| 3 | `building-ai-powered-code-review-systems` | Generative AI | AST analysis, LLM diff inspection, automated feedback |
| 4 | `building-api-gateways-microservices` | API & Architecture | Reverse proxy, auth termination, rate limiting, routing |
| 5 | `building-rag-applications-vector-databases` | Generative AI | Chunking, embeddings, vector search, grounded context |
| 6 | `building-serverless-backends-with-baas` | Backend & Cloud | Edge functions, schema design, background task queues |
| 7 | `building-subscription-billing-systems` | SaaS & Business | Webhooks, idempotency, proration, dunning workflows |
| 8 | `building-zero-downtime-deployment-pipelines` | DevOps & CI/CD | Blue-green, canary, rolling updates, health gates |
| 9 | `cloud-cost-optimization-strategies-startups` | Cloud & Infrastructure | Rightsizing, reserved instances, cold storage, tags |
| 10 | `containers-vs-vms-when-to-use-each` | Cloud & Infrastructure | Kernel sharing, hypervisor overhead, isolation trade-offs |
| 11 | `fine-tuning-llms-domain-specific-tasks` | Generative AI | LoRA, QLoRA, dataset curation, prompt vs tuning |
| 12 | `future-of-ai-in-software-development` | Generative AI | Agentic workflows, automated test generation, reasoning |
| 13 | `generative-ai-for-content-creation` | Generative AI | LLM editorial assistance, stylistic guardrails, tone |
| 14 | `gitops-managing-infrastructure-with-git` | DevOps & CI/CD | Declarative state, pull request reviews, drift detection |
| 15 | `implementing-oauth2-openid-connect` | Security | PKCE, authorization code flow, token storage, rotation |
| 16 | `infrastructure-as-code-terraform-pulumi` | DevOps & CI/CD | HCL vs general-purpose languages, state locking |
| 17 | `machine-learning-pipelines-for-web-developers` | Generative AI / ML | Feature pipelines, data ingestion, inference serving |
| 18 | `mlops-deploying-ml-models-production` | AI Production Systems | Model registries, canary serving, drift monitoring |
| 19 | `monitoring-ai-systems-in-production` | AI Production Systems | Latency, token usage, evaluation benchmarks, guardrails |
| 20 | `multi-cloud-architecture-aws-azure-gcp` | Cloud & Infrastructure | Portability, egress costs, cross-cloud networking |
| 21 | `multi-tenant-saas-architecture-patterns` | SaaS Architecture | Silo, pool, bridge models, tenant isolation, sharding |
| 22 | `optimizing-vm-performance-production-workloads` | Virtual Machines | CPU pinning, NUMA topology, virtio queues, noisy neighbors |
| 23 | `owasp-top-10-complete-mitigation-guide` | Security | Injection, broken auth, SSRF, security misconfigurations |
| 24 | `real-time-data-sync-backend-services` | API & Architecture | WebSocket, CRDTs, optimistic UI updates, pub/sub |
| 25 | `rest-vs-graphql-choosing-right-api-paradigm` | API & Architecture | Over-fetching, schema evolution, HTTP caching |
| 26 | `scaling-saas-applications-million-users` | SaaS Architecture | Read replicas, horizontal scaling, caching layers |
| 27 | `zero-trust-security-web-applications` | Security | Identity-aware proxy, mTLS, microsegmentation |

---

## 5. Directory Organization

All documentation and glossaries reside in `/docs`:
```
docs/
├── README.md                 # This master guide
├── i18n-glossary-zh.md       # Simplified Chinese glossary & style guide
├── i18n-glossary-ru.md       # Russian glossary & style guide
├── i18n-glossary-ja.md       # Japanese glossary & style guide
├── i18n-glossary-ko.md       # Korean glossary & style guide
├── i18n-glossary-tr.md       # Turkish glossary & style guide
└── i18n-glossary-pt-BR.md    # Brazilian Portuguese glossary & style guide
```
