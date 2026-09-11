// Scans built localized pages for leftover English UI strings.
// Article bodies + brand names + URLs + code stay English by design and are excluded.
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
// Real production non-default locales (C8: retired stale 'ru' fixture).
const locales = ['zh', 'ko', 'ja', 'tr', 'pt-BR'];
// English UI copy that must never appear on localized CHROME (not bodies)
const probes = [
  'Frequently Asked Questions',
  'Still stuck?',
  'Getting started',
  'Quickstart',
  'No accounts required',
  'Privacy by Design',
  'Support Center',
  'Terms of Service',
  'Privacy Policy',
  'AI Code Viewer',
  'Information we collect',
  'Acceptable use',
  'The toolkit begins',
  'Core Stack',
  'Loved by developers',
  'Flagship AI Developer Tools',
  'Coming soon',
  'Launch App',
  'In progress',
  'Featured',
  'Related articles',
  'Back to blog',
  'Copy link',
  'Engineering Insights',
  ' min read',
  'On this page',
  'Share this article',
  'Select Language',
  'Toggle Dark Mode',
  'Send a Message',
  'Your Name',
  'Email Address',
  'Thanks for subscribing',
  'Search articles by title',
  'No articles match',
  'No documentation matches',
  'No apps match',
  'Return Home',
  'Page Not Found',
  'All Categories',
  '0 KB React Overhead',
  'Founder &amp; Lead Software Architect',
  'Founder & Lead Developer',
  'Last updated',
  ' applications',
];

const leaks = [];
for (const l of locales) {
  const files = [
    'index.html',
    'about/index.html',
    'contact/index.html',
    'docs/index.html',
    'ai-code-viewer-ai/index.html',
    'privacy/index.html',
    'terms/index.html',
    'support/index.html',
    'products/index.html',
    'apps/index.html',
    'apps/admin/index.html',
    // NOTE: blog is English-only (no /{locale}/blog routes) — covered by the sitemap scan below.
  ];
  let blob = '';
  for (const f of files) {
    const p = path.join(dist, l, f);
    if (fs.existsSync(p)) blob += fs.readFileSync(p, 'utf8');
  }
  // Strip HTML comments (structural notes like "Featured Card" per DESIGN.md)
  // — they never render, so they can't be UI-string leaks.
  blob = blob.replace(/<!--[\s\S]*?-->/g, '');
  // Strip article bodies? Listing pages have no bodies; readers excluded from this scan.
  for (const probe of probes) {
    if (blob.includes(probe)) leaks.push(`${l} :: ${probe}`);
  }
}
if (leaks.length === 0) {
  console.log('LOCALE LEAK SCAN: clean (0 English UI strings on localized pages)');
} else {
  console.log(`LOCALE LEAK SCAN: ${leaks.length} hits`);
  leaks.slice(0, 40).forEach((x) => console.log('  LEAK', x));
  process.exit(1);
}

// --- Sitemap SEO assertions (Fix 1 + Fix 6) ---
// 1. No /en/ prefixed paths may appear in the final sitemap output
//    (prefixDefaultLocale: false — English lives at root; /en/* 301s at CDN).
const sitemapFiles = fs.readdirSync(dist).filter((f) => /^sitemap.*\.xml$/.test(f));
if (sitemapFiles.length === 0) {
  console.log('SITEMAP SCAN: no sitemap*.xml found in dist/ — skipping');
} else {
  const locRe = /<loc>(.*?)<\/loc>/g;
  const badEn = [];
  for (const f of sitemapFiles) {
    const xml = fs.readFileSync(path.join(dist, f), 'utf8');
    let m;
    while ((m = locRe.exec(xml)) !== null) {
      const loc = m[1];
      let pathname;
      try {
        pathname = new URL(loc).pathname;
      } catch {
        continue;
      }
      if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) badEn.push(`${f} :: ${loc}`);
    }
  }
  // Sitemap index files reference child sitemaps — scan those too.
  const childRefs = [];
  for (const f of sitemapFiles) {
    const xml = fs.readFileSync(path.join(dist, f), 'utf8');
    const smRe = /<loc>(.*?sitemap-\d+\.xml)<\/loc>/g;
    let m;
    while ((m = smRe.exec(xml)) !== null) childRefs.push(m[1]);
  }
  for (const ref of childRefs) {
    const childPath = path.join(dist, path.basename(new URL(ref, 'https://ladestack.in').pathname));
    if (!fs.existsSync(childPath)) continue;
    const xml = fs.readFileSync(childPath, 'utf8');
    let m;
    const re2 = /<loc>(.*?)<\/loc>/g;
    while ((m = re2.exec(xml)) !== null) {
      const loc = m[1];
      if (loc.endsWith('.xml')) continue;
      let pathname;
      try {
        pathname = new URL(loc).pathname;
      } catch {
        continue;
      }
      if (pathname === '/en' || pathname === '/en/' || pathname.startsWith('/en/')) badEn.push(`${path.basename(childPath)} :: ${loc}`);
    }
  }
  // 3. No /en/ directory may be emitted to dist/ at all.
  if (fs.existsSync(path.join(dist, 'en'))) {
    badEn.push('dist/en/ directory exists — /en/ pages must not be generated');
  }
  if (badEn.length === 0) {
    console.log(`SITEMAP SCAN: clean (0 /en/ paths across ${sitemapFiles.length} sitemap file(s))`);
  } else {
    console.log(`SITEMAP SCAN: ${badEn.length} /en/ violation(s)`);
    badEn.slice(0, 20).forEach((x) => console.log('  BAD-EN', x));
    process.exit(1);
  }
}
