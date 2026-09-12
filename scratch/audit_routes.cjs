const fs = require('fs');
const path = require('path');

const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];

// Root English routes (prefixDefaultLocale: false)
// For non-default locales: /[lang]/...

// Let's get all 27 blog posts
const blogDir = path.resolve('src/content/blog/en');
const blogPosts = fs.readdirSync(blogDir).filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''));

// Paginated blog pages:
// With 27 posts and 12 per page:
// Page 1: /blog
// Page 2: /blog/2
// Page 3: /blog/3
// Are there localized blog pages in dist/?
// Let's inspect what's in dist/ for all locales!

const allHtmlFiles = [];
function findHtml(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      findHtml(full, baseDir);
    } else if (e.name.endsWith('.html')) {
      const rel = path.relative(baseDir, full).replace(/\\/g, '/');
      allHtmlFiles.push(rel);
    }
  }
}
findHtml('dist');

console.log(`Total HTML files in dist: ${allHtmlFiles.length}`);

// Group by route category
const indexable = [];
const nonIndexable = [];

for (const f of allHtmlFiles) {
  const fullPath = path.join('dist', f);
  const html = fs.readFileSync(fullPath, 'utf8');
  const isNoIndex = html.includes('content="noindex');
  const route = '/' + f.replace(/\/index\.html$/, '').replace(/\.html$/, '');
  const cleanRoute = route === '/index' ? '/' : route;

  if (isNoIndex) {
    nonIndexable.push({ file: f, route: cleanRoute });
  } else {
    indexable.push({ file: f, route: cleanRoute });
  }
}

console.log(`Indexable routes: ${indexable.length}`);
console.log(`Non-indexable routes (noindex): ${nonIndexable.length}`);

console.log('\n--- NON-INDEXABLE ROUTES ---');
nonIndexable.forEach(r => console.log(`  ${r.route} (${r.file})`));

// Check sitemap
const sitemapPath = 'dist/sitemap-0.xml';
if (fs.existsSync(sitemapPath)) {
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  console.log(`\nTotal URLs in sitemap-0.xml: ${sitemapUrls.length}`);
  
  // Check which indexable routes are in sitemap
  const missingFromSitemap = [];
  for (const r of indexable) {
    const expectedUrl = `https://ladestack.in${r.route === '/' ? '/' : r.route}`;
    if (!sitemapUrls.includes(expectedUrl)) {
      missingFromSitemap.push(expectedUrl);
    }
  }
  console.log(`Indexable routes missing from sitemap: ${missingFromSitemap.length}`);
  if (missingFromSitemap.length > 0) {
    console.log('Missing URLs:', missingFromSitemap);
  }

  // Check which non-indexable routes are in sitemap
  const noindexInSitemap = [];
  for (const r of nonIndexable) {
    const url = `https://ladestack.in${r.route === '/' ? '/' : r.route}`;
    if (sitemapUrls.includes(url)) {
      noindexInSitemap.push(url);
    }
  }
  console.log(`Non-indexable routes present in sitemap: ${noindexInSitemap.length}`);
  if (noindexInSitemap.length > 0) {
    console.log('LEAKED NOINDEX IN SITEMAP:', noindexInSitemap);
  }
}
