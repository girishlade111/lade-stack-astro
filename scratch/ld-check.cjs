const fs = require('fs');
const files = ['src/pages/products.astro','src/pages/contact.astro','src/pages/apps/index.astro','src/pages/apps/admin.astro','src/pages/ai-code-viewer-ai.astro','src/pages/blog/[...page].astro','src/pages/blog/[...slug].astro','src/pages/docs.astro','src/pages/about.astro','src/pages/support.astro','src/pages/privacy.astro','src/pages/terms.astro','src/pages/[lang]/contact.astro','src/pages/[lang]/apps/index.astro','src/pages/[lang]/blog/[...slug].astro','src/pages/[lang]/docs.astro'];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const hasBreadProp = /breadcrumbs=\{/.test(t);
  const hasCreate = t.includes('createBreadcrumbSchema');
  const types = [...t.matchAll(/'@type':\s*'([^']+)'/g)].map(m => m[1]).join(',');
  const inLang = /inLanguage/.test(t);
  console.log(`${f} | breadProp=${hasBreadProp} createSchema=${hasCreate} inLanguage=${inLang} | [${types}]`);
}
