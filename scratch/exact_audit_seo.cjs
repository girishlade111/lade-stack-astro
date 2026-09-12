const fs = require('fs');

// We can extract all keys and values by eval or regex parsing cleanly
const content = fs.readFileSync('src/i18n/seo.ts', 'utf8');

// Let's strip TypeScript type annotations and export to eval seoData safely in node
const jsContent = content
  .replace(/import type .*?;/g, '')
  .replace(/export interface PageSEO[\s\S]*?export type SEOPageKey[\s\S]*?;/g, '')
  .replace(/export const seoData: Record<SupportedLocale, Record<SEOPageKey, PageSEO>> =/g, 'const seoData =')
  .replace(/export function getPageSEO[\s\S]*$/g, '')
  .replace(/export function createBreadcrumbSchema[\s\S]*$/g, '');

const fn = new Function(`${jsContent}; return seoData;`);
const seoData = fn();

const locales = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'];
const pageKeys = ['home', 'about', 'apps', 'products', 'aiCodeViewer', 'docs', 'support', 'contact', 'privacy', 'terms', 'blogListing'];

console.log('=== EXACT SEO.TS DATA AUDIT ===');
for (const loc of locales) {
  console.log(`\n=================== LOCALE: ${loc} ===================`);
  if (!seoData[loc]) {
    console.error(`CRITICAL: Locale ${loc} missing in seoData!`);
    continue;
  }
  for (const pk of pageKeys) {
    const item = seoData[loc][pk];
    if (!item) {
      console.error(`CRITICAL: Page ${pk} missing in locale ${loc}!`);
      continue;
    }
    const tLen = item.title ? item.title.length : 0;
    const dLen = item.description ? item.description.length : 0;
    const hasKw = !!(item.keywords && item.keywords.trim().length > 0);
    const kwLen = item.keywords ? item.keywords.length : 0;
    
    // Check Phase 2 rule 5: "Ensure NO page (across any locale) has a title or description under 30 characters or over 165 characters — flag and fix any outliers found in Phase 1 audit."
    // Also Phase 2 rule 1: "Title tags: 50-60 characters, primary keyword near the front, brand name at the end (e.g. "AI Code Review Tool — CodeEnhance AI | Lade Stack")."
    // Phase 2 rule 2: "Meta descriptions: 140-160 characters..."
    
    const flags = [];
    if (!hasKw) flags.push('MISSING_KEYWORDS');
    if (tLen < 30) flags.push(`TITLE_UNDER_30(${tLen})`);
    if (tLen > 60) flags.push(`TITLE_OVER_60(${tLen})`);
    if (dLen < 140) flags.push(`DESC_UNDER_140(${dLen})`);
    if (dLen > 165) flags.push(`DESC_OVER_165(${dLen})`);

    console.log(`[${loc}][${pk}] ${flags.length ? flags.join(', ') : 'PERFECT'} | T(${tLen}): "${item.title}" | D(${dLen}): "${item.description.slice(0, 60)}..."`);
  }
}
