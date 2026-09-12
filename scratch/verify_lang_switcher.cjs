const fs = require('fs');
const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];
let allPassed = true;

for (const loc of locales) {
  const file = loc === 'en' ? 'dist/index.html' : `dist/${loc}/index.html`;
  if (!fs.existsSync(file)) {
    console.error(`File missing: ${file}`);
    allPassed = false;
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  const menuMatch = html.match(/<div[^>]*data-lang-menu[\s\S]*?<\/div>\s*<\/div>/);
  if (!menuMatch) {
    console.error(`Menu not found in ${file}`);
    allPassed = false;
    continue;
  }
  const menu = menuMatch[0];
  const activeMatch = menu.match(/<a[^>]*aria-current="true"[\s\S]*?<\/a>/);
  if (!activeMatch) {
    console.error(`Active link not found in ${file}`);
    allPassed = false;
    continue;
  }
  const activeHtml = activeMatch[0];
  const hasBrandText = activeHtml.includes('text-brand');
  const hasBrandBg = activeHtml.includes('bg-brand/10');
  const hasTextPrimary = activeHtml.includes('text-primary');
  const hasCheck = activeHtml.includes('text-brand') && activeHtml.includes('lucide:check');
  const hasRingBrand = html.includes('focus:ring-brand');

  const ok = hasBrandText && hasBrandBg && !hasTextPrimary && hasCheck && hasRingBrand;
  if (!ok) allPassed = false;
  console.log(`[${loc.padEnd(5)}] ${ok ? 'PASS' : 'FAIL'} | Active: ${activeHtml.replace(/\s+/g, ' ').slice(0, 120)}...`);
}

console.log(`\nOverall verification: ${allPassed ? 'ALL PASSED' : 'SOME FAILED'}`);
