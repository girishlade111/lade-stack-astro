import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'dist/sitemap-0.xml');
if (!fs.existsSync(sitemapPath)) {
  console.log('sitemap-0.xml not found');
  process.exit(1);
}

const content = fs.readFileSync(sitemapPath, 'utf-8');

const forbidden = [
  'admin',
  '404',
  '500',
  '502',
  'error',
  'api-testing-platform',
  'website-builder-project',
  'file-sharing-platform',
  'projects',
  'sitemap'
];

console.log('Checking dist/sitemap-0.xml for forbidden paths:');
for (const word of forbidden) {
  const matches = content.match(new RegExp(`<loc>[^<]*${word}[^<]*<\/loc>`, 'gi'));
  if (matches) {
    console.log(`[LEAK] Found ${matches.length} <loc> entries containing '${word}':`, matches.slice(0, 5));
  } else {
    console.log(`[OK] No <loc> entries contain '${word}'`);
  }
}

// Check hreflang alternates inside sitemap
console.log('\nChecking hreflang in sitemap:');
// Count total url blocks
const urlBlocks = content.split('<url>').slice(1);
console.log(`Total <url> blocks in sitemap: ${urlBlocks.length}`);

// Sample the first url block
if (urlBlocks.length > 0) {
  console.log('Sample <url> block:\n<url>' + urlBlocks[0].slice(0, 1000));
}

// Check hreflang codes used
const hreflangMatches = content.match(/hreflang="([^"]+)"/g);
if (hreflangMatches) {
  const codes = new Set(hreflangMatches.map(m => m.replace(/hreflang="|"$/g, '')));
  console.log('Hreflang codes found in sitemap:', Array.from(codes));
} else {
  console.log('No hreflang attributes found in sitemap');
}
