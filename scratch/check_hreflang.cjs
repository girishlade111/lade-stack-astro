const fs = require('fs');

const files = [
  'dist/apps/admin/index.html',
  'dist/ru/apps/admin/index.html',
  'dist/404.html',
  'dist/ru/404/index.html',
  'dist/500.html',
  'dist/privacy/index.html',
  'dist/ru/privacy/index.html',
  'dist/terms/index.html',
  'dist/ru/terms/index.html'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const html = fs.readFileSync(f, 'utf-8');
    const hreflangs = (html.match(/<link\s+rel="alternate"\s+hreflang/g) || []).length;
    const ogTitle = (html.match(/<meta property="og:title" content="([^"]*)"/i) || [])[1];
    const ogDesc = (html.match(/<meta property="og:description" content="([^"]*)"/i) || [])[1];
    console.log(`\nFile: ${f}`);
    console.log(`  hreflang tags: ${hreflangs}`);
    console.log(`  og:title: ${ogTitle}`);
    console.log(`  og:description: ${ogDesc}`);
  } else {
    console.log(`\nFile: ${f} (NOT FOUND)`);
  }
});
