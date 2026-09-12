const fs = require('fs');
const path = require('path');

const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];

// Check src/i18n/seo.ts directly
// We can parse or evaluate the file or regex check
const seoTs = fs.readFileSync('src/i18n/seo.ts', 'utf8');

console.log('=== CHECKING src/i18n/seo.ts FOR ALL LOCALES & PAGES ===');
// Check keys defined for each locale
for (const loc of locales) {
  console.log(`\nLocale: ${loc}`);
  // Find locale section
  const locIndex = seoTs.indexOf(`\n  ${loc === 'en' ? 'en' : loc === 'pt-BR' ? "'pt-BR'" : loc}: {`);
  if (locIndex === -1) {
    console.log(`  ERROR: Locale ${loc} not found in seo.ts!`);
    continue;
  }
  const pageKeys = ['home', 'about', 'apps', 'products', 'aiCodeViewer', 'docs', 'support', 'contact', 'privacy', 'terms', 'blogListing'];
  for (const pk of pageKeys) {
    // Check if pk exists under loc
    const pkPattern = new RegExp(`${pk}:\\s*\\{([\\s\\S]*?)\\},\\s*(?:[a-zA-Z]+:|\\})`, 'm');
    const locSub = seoTs.slice(locIndex, locIndex + 5000);
    const m = locSub.match(pkPattern);
    if (!m) {
      console.log(`  MISSING PAGE KEY: ${pk}`);
    } else {
      const block = m[1];
      const hasTitle = block.includes('title:');
      const hasDesc = block.includes('description:');
      const hasKeywords = block.includes('keywords:');
      const hasOgTitle = block.includes('ogTitle:');
      const hasOgDesc = block.includes('ogDescription:');
      
      // extract title and desc strings
      const tMatch = block.match(/title:\s*['"`](.*?)['"`]/);
      const dMatch = block.match(/description:\s*['"`]([\s\S]*?)['"`]/);
      const kMatch = block.match(/keywords:\s*['"`]([\s\S]*?)['"`]/);
      
      const t = tMatch ? tMatch[1] : '';
      const d = dMatch ? dMatch[1].replace(/\s+/g, ' ').trim() : '';
      const k = kMatch ? kMatch[1].replace(/\s+/g, ' ').trim() : '';

      const issues = [];
      if (!hasKeywords) issues.push('NO_KEYWORDS_FIELD');
      if (t.length < 30) issues.push(`TITLE_TOO_SHORT(${t.length})`);
      if (t.length > 60) issues.push(`TITLE_TOO_LONG(${t.length})`);
      if (d.length < 140) issues.push(`DESC_TOO_SHORT(${d.length})`);
      if (d.length > 165) issues.push(`DESC_TOO_LONG(${d.length})`);

      if (issues.length > 0) {
        console.log(`  ${pk}: ${issues.join(', ')} | Title (${t.length}): "${t}" | Desc (${d.length}): "${d}"`);
      } else {
        console.log(`  ${pk}: OK | Title (${t.length}) | Desc (${d.length})`);
      }
    }
  }
}
