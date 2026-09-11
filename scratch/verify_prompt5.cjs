const fs = require('fs');

console.log('=== VERIFYING PROMPT 5 FIXES IN DIST ===');

// 1. docs heading
const enDocs = fs.readFileSync('dist/docs/index.html', 'utf-8');
const ruDocs = fs.readFileSync('dist/ru/docs/index.html', 'utf-8');
console.log('\n1. Docs Headings:');
console.log('EN <h1> match:', (enDocs.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());
console.log('RU <h1> match:', (ruDocs.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());

// 2. privacy headings and last updated
const enPrivacy = fs.readFileSync('dist/privacy/index.html', 'utf-8');
const ruPrivacy = fs.readFileSync('dist/ru/privacy/index.html', 'utf-8');
console.log('\n2. Privacy Headings & Last Updated:');
console.log('EN <h1>:', (enPrivacy.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());
console.log('EN Updated line:', (enPrivacy.match(/<p class="mt-3 text-sm text-foreground\/55">([\s\S]*?)<\/p>/i) || [])[1]?.trim());
console.log('RU <h1>:', (ruPrivacy.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());
console.log('RU Updated line:', (ruPrivacy.match(/<p class="mt-3 text-sm text-foreground\/55">([\s\S]*?)<\/p>/i) || [])[1]?.trim());

// 3. terms headings and last updated
const enTerms = fs.readFileSync('dist/terms/index.html', 'utf-8');
const ruTerms = fs.readFileSync('dist/ru/terms/index.html', 'utf-8');
console.log('\n3. Terms Headings & Last Updated:');
console.log('EN <h1>:', (enTerms.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());
console.log('EN Updated line:', (enTerms.match(/<p class="mt-3 text-sm text-foreground\/55">([\s\S]*?)<\/p>/i) || [])[1]?.trim());
console.log('RU <h1>:', (ruTerms.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.trim());
console.log('RU Updated line:', (ruTerms.match(/<p class="mt-3 text-sm text-foreground\/55">([\s\S]*?)<\/p>/i) || [])[1]?.trim());

// 4. Breadcrumb schema localization in RU pages
console.log('\n4. Breadcrumb Schema in RU pages:');
const checkBreadcrumbs = (filePath, label) => {
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    const bcMatch = html.match(/"@type":\s*"BreadcrumbList"[\s\S]*?"itemListElement":\s*(\[[^\]]*\])/);
    if (bcMatch) {
      console.log(`- ${label}: ${bcMatch[1]}`);
    } else {
      console.log(`- ${label}: (no BreadcrumbList JSON-LD block found, checking structuredData)`);
    }
  }
};
checkBreadcrumbs('dist/ru/docs/index.html', 'RU Docs');
checkBreadcrumbs('dist/ru/privacy/index.html', 'RU Privacy');
checkBreadcrumbs('dist/ru/terms/index.html', 'RU Terms');
checkBreadcrumbs('dist/ru/about/index.html', 'RU About');

// 5. Header mobile menu button aria-label
console.log('\n5. Header mobile menu button aria-label:');
const enIndex = fs.readFileSync('dist/index.html', 'utf-8');
const ruIndex = fs.readFileSync('dist/ru/index.html', 'utf-8');
console.log('EN mobile menu btn:', (enIndex.match(/id="mobile-menu-btn"[^>]*aria-label="([^"]*)"/i) || [])[1]);
console.log('RU mobile menu btn:', (ruIndex.match(/id="mobile-menu-btn"[^>]*aria-label="([^"]*)"/i) || [])[1]);

// 6. Testimonials rating aria-label
console.log('\n6. Testimonials rating aria-label:');
console.log('EN rating aria-label:', (enIndex.match(/aria-label="([^"]*)"\s*>★★★★★/i) || [])[1]);
console.log('RU rating aria-label:', (ruIndex.match(/aria-label="([^"]*)"\s*>★★★★★/i) || [])[1]);
