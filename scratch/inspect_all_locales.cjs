const fs = require('fs');
const path = require('path');

const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];

console.log('--- ADMIN & ERROR PAGES HREFLANG CHECK ---');
const noindexPages = [
  'dist/apps/admin/index.html',
  'dist/404.html',
  'dist/500.html',
  ...locales.filter(l => l !== 'en').map(l => `dist/${l}/apps/admin/index.html`),
  ...locales.filter(l => l !== 'en').map(l => `dist/${l}/404.html`),
  ...locales.filter(l => l !== 'en').map(l => `dist/${l}/500.html`),
];

let noindexHreflangFailures = 0;
for (const p of noindexPages) {
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const hreflangs = html.match(/<link[^>]*hreflang=[^>]*>/gi) || [];
    const robots = html.match(/<meta[^>]*robots[^>]*>/gi) || [];
    if (hreflangs.length > 0) {
      console.error(`FAIL: ${p} has ${hreflangs.length} hreflang tags:`, hreflangs);
      noindexHreflangFailures++;
    } else {
      console.log(`PASS: ${p} has 0 hreflang tags (robots: ${robots[0] || 'none'})`);
    }
  } else {
    // some 404/500 localized pages may not exist if only at root
    console.log(`INFO: ${p} does not exist (expected if root only)`);
  }
}

console.log('\n--- PRIVACY & TERMS OG TAGS ACROSS ALL 7 LOCALES ---');
let ogFailures = 0;
for (const loc of locales) {
  for (const page of ['privacy', 'terms']) {
    const filePath = loc === 'en' ? `dist/${page}/index.html` : `dist/${loc}/${page}/index.html`;
    if (!fs.existsSync(filePath)) {
      console.error(`MISSING FILE: ${filePath}`);
      ogFailures++;
      continue;
    }
    const html = fs.readFileSync(filePath, 'utf8');
    const ogTitleMatch = html.match(/<meta\s+property=["']og:title["']\s+content=["'](.*?)["']/i);
    const ogDescMatch = html.match(/<meta\s+property=["']og:description["']\s+content=["'](.*?)["']/i);
    const titleTagMatch = html.match(/<title>(.*?)<\/title>/i);
    const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);

    const ogTitle = ogTitleMatch ? ogTitleMatch[1] : null;
    const ogDesc = ogDescMatch ? ogDescMatch[1] : null;
    const pageTitle = titleTagMatch ? titleTagMatch[1] : null;
    const pageDesc = metaDescMatch ? metaDescMatch[1] : null;

    if (!ogTitle || !ogDesc) {
      console.error(`FAIL [${loc}][${page}]: Missing og:title or og:description!`);
      ogFailures++;
    } else {
      console.log(`PASS [${loc}][${page}]:`);
      console.log(`  og:title:       ${ogTitle}`);
      console.log(`  og:description: ${ogDesc}`);
    }
  }
}

console.log('\n--- SUMMARY ---');
console.log(`Noindex hreflang failures: ${noindexHreflangFailures}`);
console.log(`OG tags failures: ${ogFailures}`);
