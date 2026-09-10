// Generates 27 blog posts + category cover SVGs (Step 07). Run: node scripts/generate-blog.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = join(root, 'src', 'content', 'blog');
const coversDir = join(root, 'public', 'blog-covers');
mkdirSync(blogDir, { recursive: true });
mkdirSync(coversDir, { recursive: true });

const posts = [
  ['future-of-ai-in-software-development', 'The Future of AI in Software Development', 'AI Development', '2024-06-15', '8 min read', true, ['AI', 'Software Engineering', 'Trends'], 'Comprehensive guide to AI-powered development tools, trends, and technologies transforming software engineering in 2024.'],
  ['building-ai-powered-code-review-systems', 'Building AI-Powered Code Review Systems', 'AI Development', '2024-06-28', '10 min read', false, ['AI', 'Code Review', 'DevOps'], 'How to design automated code review pipelines that catch bugs, enforce style, and mentor developers using LLMs.'],
  ['machine-learning-pipelines-for-web-developers', 'Machine Learning Pipelines for Web Developers', 'AI Development', '2024-07-10', '9 min read', false, ['ML', 'Pipelines', 'Web Dev'], 'A practical introduction to ML pipelines — data ingestion, training, evaluation, and serving — for working web developers.'],
  ['generative-ai-for-content-creation', 'Generative AI for Content Creation', 'Generative AI', '2024-07-22', '7 min read', false, ['GenAI', 'Content', 'LLM'], 'Use large language models to draft, edit, and scale content workflows without losing your voice.'],
  ['building-rag-applications-vector-databases', 'Building RAG Applications with Vector Databases', 'Generative AI', '2024-08-05', '12 min read', true, ['RAG', 'Vector DB', 'Embeddings'], 'End-to-end guide to retrieval-augmented generation: chunking, embeddings, vector search, and grounded answers.'],
  ['fine-tuning-llms-domain-specific-tasks', 'Fine-Tuning LLMs for Domain-Specific Tasks', 'Generative AI', '2024-08-18', '11 min read', false, ['Fine-tuning', 'LoRA', 'LLM'], 'When to fine-tune vs prompt, how to prepare datasets, and LoRA workflows that work on a budget.'],
  ['multi-tenant-saas-architecture-patterns', 'Multi-Tenant SaaS Architecture Patterns', 'SaaS Architecture', '2024-08-30', '10 min read', false, ['SaaS', 'Multi-tenancy', 'Architecture'], 'Compare silo, pool, and bridge tenancy models with isolation, cost, and scaling trade-offs.'],
  ['building-subscription-billing-systems', 'Building Subscription Billing Systems', 'SaaS Architecture', '2024-09-12', '9 min read', false, ['Billing', 'Subscriptions', 'Stripe'], 'Design trials, proration, dunning, and webhooks for a billing system your finance team will trust.'],
  ['scaling-saas-applications-million-users', 'Scaling SaaS Applications to a Million Users', 'SaaS Architecture', '2024-09-25', '12 min read', true, ['Scaling', 'SaaS', 'Performance'], 'Caching, queuing, read replicas, and sharding — a staged playbook for scaling SaaS past a million users.'],
  ['baas-platforms-compared-firebase-supabase-appwrite', 'BaaS Platforms Compared: Firebase vs Supabase vs Appwrite', 'Backend as a Service', '2024-10-02', '10 min read', false, ['BaaS', 'Firebase', 'Supabase'], 'Honest comparison of Firebase, Supabase, and Appwrite on auth, database, pricing, and exit strategy.'],
  ['building-serverless-backends-with-baas', 'Building Serverless Backends with BaaS', 'Backend as a Service', '2024-10-10', '8 min read', false, ['Serverless', 'BaaS', 'Backend'], 'Ship a production backend with zero servers: schema design, edge functions, and background jobs.'],
  ['real-time-data-sync-backend-services', 'Real-Time Data Sync with Backend Services', 'Backend as a Service', '2024-10-18', '9 min read', false, ['Realtime', 'WebSockets', 'Sync'], 'Presence, live cursors, and collaborative editing with websockets, CRDTs, and managed realtime backends.'],
  ['rest-vs-graphql-choosing-right-api-paradigm', 'REST vs GraphQL: Choosing the Right API Paradigm', 'API Design & Scaling', '2024-10-28', '9 min read', false, ['REST', 'GraphQL', 'API Design'], 'A decision framework for REST vs GraphQL covering versioning, caching, payloads, and team velocity.'],
  ['api-rate-limiting-throttling-strategies', 'API Rate Limiting & Throttling Strategies', 'API Design & Scaling', '2024-11-05', '8 min read', false, ['Rate Limiting', 'API', 'Reliability'], 'Token buckets, sliding windows, and per-tenant quotas that protect your API without punishing good clients.'],
  ['building-api-gateways-microservices', 'Building API Gateways for Microservices', 'API Design & Scaling', '2024-11-12', '10 min read', false, ['API Gateway', 'Microservices', 'Routing'], 'Auth, routing, transformation, and observability at the edge of a microservices fleet.'],
  ['cloud-cost-optimization-strategies-startups', 'Cloud Cost Optimization Strategies for Startups', 'Cloud Computing', '2024-11-15', '8 min read', false, ['Cloud', 'Costs', 'FinOps'], 'Rightsizing, commitments, storage lifecycles, and tagging discipline that cut cloud bills by 30-50%.'],
  ['multi-cloud-architecture-aws-azure-gcp', 'Multi-Cloud Architecture with AWS, Azure & GCP', 'Cloud Computing', '2024-11-18', '11 min read', false, ['Multi-cloud', 'AWS', 'Azure', 'GCP'], 'When multi-cloud pays off, how to stay portable with containers and IaC, and where abstraction hurts.'],
  ['containers-vs-vms-when-to-use-each', 'Containers vs VMs: When to Use Each', 'Virtual Machines', '2024-11-20', '7 min read', false, ['Containers', 'VMs', 'Docker'], 'Isolation, overhead, and operational trade-offs to pick containers, VMs, or both with confidence.'],
  ['optimizing-vm-performance-production-workloads', 'Optimizing VM Performance for Production Workloads', 'Virtual Machines', '2024-11-22', '9 min read', false, ['VMs', 'Performance', 'Tuning'], 'CPU pinning, NUMA, storage queues, and noisy-neighbor defenses for predictable VM performance.'],
  ['gitops-managing-infrastructure-with-git', 'GitOps: Managing Infrastructure with Git', 'DevOps & CI/CD', '2024-11-25', '9 min read', false, ['GitOps', 'ArgoCD', 'Kubernetes'], 'Declarative infrastructure with pull-request reviews, drift detection, and automated sync.'],
  ['building-zero-downtime-deployment-pipelines', 'Building Zero-Downtime Deployment Pipelines', 'DevOps & CI/CD', '2024-11-28', '10 min read', true, ['Deployments', 'CI/CD', 'Reliability'], 'Blue-green, canary, and rolling strategies with health gates for deploys users never notice.'],
  ['infrastructure-as-code-terraform-pulumi', 'Infrastructure as Code with Terraform & Pulumi', 'DevOps & CI/CD', '2024-12-01', '10 min read', false, ['IaC', 'Terraform', 'Pulumi'], 'HCL vs real programming languages for infrastructure, state management, and module design.'],
  ['zero-trust-security-web-applications', 'Zero-Trust Security for Web Applications', 'Security in Web Apps', '2024-12-03', '9 min read', false, ['Zero Trust', 'Security', 'mTLS'], 'Never trust, always verify: identity-aware proxies, short-lived credentials, and micro-segmentation.'],
  ['owasp-top-10-complete-mitigation-guide', 'OWASP Top 10: Complete Mitigation Guide', 'Security in Web Apps', '2024-12-05', '14 min read', true, ['OWASP', 'Security', 'Web'], 'Every OWASP Top 10 risk explained with vulnerable vs fixed code samples you can apply today.'],
  ['implementing-oauth2-openid-connect', 'Implementing OAuth2 & OpenID Connect', 'Security in Web Apps', '2024-12-06', '11 min read', false, ['OAuth2', 'OIDC', 'Auth'], 'Authorization code with PKCE, token storage, rotation, and logout — done right the first time.'],
  ['mlops-deploying-ml-models-production', 'MLOps: Deploying ML Models to Production', 'AI Production Systems', '2024-12-07', '12 min read', false, ['MLOps', 'Deployment', 'ML'], 'Registries, canary serving, feature stores, and rollback plans for models that earn trust.'],
  ['monitoring-ai-systems-in-production', 'Monitoring AI Systems in Production', 'AI Production Systems', '2024-12-08', '10 min read', false, ['Monitoring', 'LLM', 'Observability'], 'Track quality, drift, cost, and latency for AI features with evals and guardrails in the loop.']
];

function titleToCover(category) {
  const map = {
    'AI Development': 'ai-development', 'Generative AI': 'generative-ai', 'SaaS Architecture': 'saas-architecture',
    'Backend as a Service': 'baas', 'API Design & Scaling': 'api-design', 'Cloud Computing': 'cloud-computing',
    'Virtual Machines': 'virtual-machines', 'DevOps & CI/CD': 'devops', 'Security in Web Apps': 'security',
    'AI Production Systems': 'ai-production'
  };
  return map[category] || 'ai-development';
}

function coverSvg(label) {
  const initial = label.split(' ').map((w) => w[0]).slice(0, 2).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#1C1C1C"/><rect x="60" y="60" width="1080" height="510" rx="32" fill="#6E8F6A" opacity="0.18"/><circle cx="1020" cy="140" r="120" fill="#6E8F6A" opacity="0.35"/><circle cx="180" cy="500" r="90" fill="#6E8F6A" opacity="0.25"/><text x="110" y="330" font-family="Georgia,serif" font-size="150" font-weight="bold" fill="#F5F3EB">${initial}</text><text x="110" y="420" font-family="monospace" font-size="36" fill="#6E8F6A">${label}</text><text x="110" y="470" font-family="monospace" font-size="24" fill="#F5F3EB" opacity="0.6">ladestack.in</text></svg>`;
}

for (const [slug, title, category, date, readTime, featured, tags, excerpt] of posts) {
  const coverKey = titleToCover(category);
  const body = `## Introduction

${excerpt} This guide walks through the concepts, trade-offs, and a production-ready workflow you can apply this week.

## Why it matters

- **Developer velocity**: the right defaults remove entire classes of busywork.
- **Reliability**: patterns that survive on-call rotations and traffic spikes.
- **Cost control**: every decision below keeps the cloud bill boring.

## Core concepts

### 1. Start from the smallest working slice

Ship one vertical slice end to end before generalizing. For **${title.toLowerCase()}**, that means a single happy-path flow with observability from day one.

### 2. Make the pit of success wide

Prefer conventions, templates, and guardrails over documentation. Examples:

\`\`\`typescript
// Minimal production-ready starter
export const config = {
  retries: 3,
  timeoutMs: 5_000,
  circuitBreaker: { failures: 5, cooldownMs: 30_000 },
};

export async function runWithResilience<T>(fn: () => Promise<T>): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= config.retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      await new Promise((r) => setTimeout(r, attempt * 250));
    }
  }
  throw lastError;
}
\`\`\`

### 3. Measure what matters

| Metric | Good starting target |
| --- | --- |
| p95 latency | < 300 ms |
| Error budget burn | < 2% / 30 days |
| Deploy frequency | Daily |
| Time to rollback | < 10 min |

## Production checklist

1. Add structured logging with request IDs.
2. Gate risky changes behind flags with kill switches.
3. Load-test the critical path before launch.
4. Document runbooks for the top three failure modes.

## Common mistakes

> Avoid gold-plating the platform before you have users. Boring technology, chosen well, beats clever technology chosen early.

- Skipping staging parity with production.
- Storing secrets in code or chat logs.
- No alerts on the metrics that page you at 3 AM.

## Conclusion

**${title}** rewards teams that iterate in small, observable steps. Start with the checklist above, automate one pain point per week, and compound the wins.
`;
  const fm = `---\ntitle: "${title}"\ndescription: "${excerpt}"\npubDate: ${date}\n# updatedDate: YYYY-MM-DD  # optional — set ONLY when the post is edited post-publish (drives sitemap <lastmod>)\n# relatedApps: []  # optional — app IDs from src/data/apps.json rendered as "Related Tool" cards\nauthor: "Girish Lade"\ncategory: "${category}"\nreadTime: "${readTime}"\ncoverImage: "/blog-covers/${coverKey}.svg"\nfeatured: ${featured}\ntags: [${tags.map((t) => `"${t}"`).join(', ')}]\n---\n\n${body}`;
  writeFileSync(join(blogDir, `${slug}.md`), fm);
  writeFileSync(join(coversDir, `${coverKey}.svg`), coverSvg(category));
}

console.log(`Wrote ${posts.length} posts + covers.`);
