const fs = require('fs');
const path = require('path');

const checkFiles = [
  'dist/apps/admin/index.html',
  'dist/404.html',
  'dist/500.html',
  'dist/ru/apps/admin/index.html',
  'dist/zh/apps/admin/index.html',
  'dist/privacy/index.html',
  'dist/ru/privacy/index.html',
  'dist/terms/index.html',
  'dist/ru/terms/index.html'
];

for (const f of checkFiles) {
  const fullPath = path.resolve(f);
  if (fs.existsSync(fullPath)) {
    const html = fs.readFileSync(fullPath, 'utf8');
    const hreflangs = html.match(/<link[^>]*hreflang=[^>]*>/g) || [];
    const ogTitle = html.match(/<meta property="og:title"[^>]*>/g) || [];
    const ogDesc = html.match(/<meta property="og:description"[^>]*>/g) || [];
    console.log('FILE:', f);
    console.log('  hreflangs count:', hreflangs.length);
    if (hreflangs.length > 0) console.log('  hreflangs:', hreflangs);
    console.log('  og:title:', ogTitle[0] || 'NONE');
    console.log('  og:description:', ogDesc[0] || 'NONE');
  } else {
    console.log('FILE NOT FOUND:', f);
  }
}
