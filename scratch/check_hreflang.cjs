const fs = require('fs');

const noIndexFiles = [
  'dist/apps/admin/index.html',
  'dist/ru/apps/admin/index.html',
  'dist/zh/apps/admin/index.html',
  'dist/ko/apps/admin/index.html',
  'dist/ja/apps/admin/index.html',
  'dist/tr/apps/admin/index.html',
  'dist/pt-BR/apps/admin/index.html',
  'dist/404.html',
  'dist/ru/404/index.html',
  'dist/zh/404/index.html',
  'dist/ko/404/index.html',
  'dist/ja/404/index.html',
  'dist/tr/404/index.html',
  'dist/pt-BR/404/index.html',
  'dist/500.html',
  'dist/502.html',
  'dist/error/index.html'
];

console.log('=== NOINDEX PAGES: HREFLANG COUNT (SHOULD ALL BE 0) ===');
let allNoIndexClean = true;
noIndexFiles.forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf-8');
    const hreflangs = (html.match(/<link\s+rel="alternate"\s+hreflang/g) || []).length;
    console.log(`${f}: hreflang count = ${hreflangs}`);
    if (hreflangs !== 0) allNoIndexClean = false;
  } else {
    console.log(`${f}: FILE NOT PRESENT`);
  }
});
console.log('All noIndex pages have 0 hreflang:', allNoIndexClean ? 'PASSED' : 'FAILED');

const locales = ['', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];
console.log('\n=== PRIVACY & TERMS: DEDICATED OG TAGS ACROSS LOCALES ===');

locales.forEach(loc => {
  const prefix = loc ? `${loc}/` : '';
  const privFile = `dist/${prefix}privacy/index.html`;
  const termsFile = `dist/${prefix}terms/index.html`;

  [privFile, termsFile].forEach(f => {
    if (fs.existsSync(f)) {
      const html = fs.readFileSync(f, 'utf-8');
      const hreflangs = (html.match(/<link\s+rel="alternate"\s+hreflang/g) || []).length;
      const ogTitle = (html.match(/<meta property="og:title" content="([^"]*)"/i) || [])[1];
      const ogDesc = (html.match(/<meta property="og:description" content="([^"]*)"/i) || [])[1];
      const twTitle = (html.match(/<meta name="twitter:title" content="([^"]*)"/i) || [])[1];
      const twDesc = (html.match(/<meta name="twitter:description" content="([^"]*)"/i) || [])[1];
      console.log(`\n[${f}]`);
      console.log(`  hreflang tags: ${hreflangs} (should be 8)`);
      console.log(`  og:title: ${ogTitle}`);
      console.log(`  og:description: ${ogDesc}`);
      console.log(`  twitter:title: ${twTitle}`);
      console.log(`  twitter:description: ${twDesc}`);
    } else {
      console.log(`\n[${f}] NOT FOUND`);
    }
  });
});
