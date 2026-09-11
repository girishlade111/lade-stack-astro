const fs = require('fs');
const files = ['src/pages/products.astro','src/pages/contact.astro','src/pages/apps/index.astro','src/pages/ai-code-viewer-ai.astro','src/pages/blog/[...page].astro','src/pages/blog/[...slug].astro','src/pages/docs.astro','src/pages/about.astro','src/pages/support.astro','src/pages/privacy.astro','src/pages/terms.astro'];
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  const types = [...t.matchAll(/['"]@type['"]\s*:\s*['"]([^'"]+)['"]/g)].map(m => m[1]).join(',');
  console.log(`${f} :: [${types}]`);
}
// inLanguage on all [lang] pages
const langFiles = ['src/pages/[lang]/products.astro','src/pages/[lang]/contact.astro','src/pages/[lang]/apps/index.astro','src/pages/[lang]/apps/admin.astro','src/pages/[lang]/ai-code-viewer-ai.astro','src/pages/[lang]/blog/[...page].astro','src/pages/[lang]/blog/[...slug].astro','src/pages/[lang]/docs.astro','src/pages/[lang]/about.astro','src/pages/[lang]/support.astro','src/pages/[lang]/privacy.astro','src/pages/[lang]/terms.astro'];
for (const f of langFiles) {
  const t = fs.readFileSync(f, 'utf8');
  const types = [...t.matchAll(/['"]@type['"]\s*:\s*['"]([^'"]+)['"]/g)].map(m => m[1]).join(',');
  console.log(`${f} inLang=${/inLanguage/.test(t)} :: [${types}]`);
}
// docs structuredData block
const d = fs.readFileSync('src/pages/docs.astro','utf8');
console.log('--- docs structuredData ---');
console.log(d.slice(d.indexOf('const structuredData'), d.indexOf('---', d.indexOf('const structuredData'))).slice(0, 2000));
