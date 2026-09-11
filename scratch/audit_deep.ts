import { content } from '../src/i18n/content';
import { en } from '../src/i18n/content-en';
import { ru } from '../src/i18n/content-ru';
import { zh } from '../src/i18n/content-zh';
import { ko } from '../src/i18n/content-ko';
import { ja } from '../src/i18n/content-ja';
import { tr } from '../src/i18n/content-tr';
import { ptBR } from '../src/i18n/content-ptbr';
import { pageSEO, getPageSEO } from '../src/i18n/seo';
import appsData from '../src/data/apps.json';

const allLocales = {
  ru,
  zh,
  ko,
  ja,
  tr,
  'pt-BR': ptBR
};

console.log('=== SECTION 5 AUDIT: content-[lang].ts structural parity & empty strings ===');

function deepCompare(enObj: any, locObj: any, locName: string, path = ''): { missing: string[], empty: string[], typeMismatch: string[], lengthMismatch: string[] } {
  const res = { missing: [] as string[], empty: [] as string[], typeMismatch: [] as string[], lengthMismatch: [] as string[] };
  
  if (enObj === null || enObj === undefined) return res;

  if (typeof enObj !== 'object') {
    if (typeof enObj === 'string' && enObj.trim().length > 0) {
      if (typeof locObj !== 'string') {
        res.typeMismatch.push(`${path} (expected string, got ${typeof locObj})`);
      } else if (locObj.trim().length === 0) {
        res.empty.push(path);
      }
    }
    return res;
  }

  if (Array.isArray(enObj)) {
    if (!Array.isArray(locObj)) {
      res.typeMismatch.push(`${path} (expected Array)`);
      return res;
    }
    if (enObj.length !== locObj.length) {
      res.lengthMismatch.push(`${path} (en has ${enObj.length} items, ${locName} has ${locObj.length})`);
    }
    const maxLen = Math.min(enObj.length, locObj.length);
    for (let i = 0; i < maxLen; i++) {
      const childRes = deepCompare(enObj[i], locObj[i], locName, `${path}[${i}]`);
      res.missing.push(...childRes.missing);
      res.empty.push(...childRes.empty);
      res.typeMismatch.push(...childRes.typeMismatch);
      res.lengthMismatch.push(...childRes.lengthMismatch);
    }
    return res;
  }

  for (const key of Object.keys(enObj)) {
    const currentPath = path ? `${path}.${key}` : key;
    if (!(key in locObj)) {
      res.missing.push(currentPath);
    } else {
      const childRes = deepCompare(enObj[key], locObj[key], locName, currentPath);
      res.missing.push(...childRes.missing);
      res.empty.push(...childRes.empty);
      res.typeMismatch.push(...childRes.typeMismatch);
      res.lengthMismatch.push(...childRes.lengthMismatch);
    }
  }

  return res;
}

for (const [locName, locObj] of Object.entries(allLocales)) {
  const diff = deepCompare(en, locObj, locName);
  console.log(`\n--- Locale: ${locName} ---`);
  console.log(`Missing fields: ${diff.missing.length}`);
  if (diff.missing.length > 0) console.log(diff.missing);
  console.log(`Empty strings (where en has content): ${diff.empty.length}`);
  if (diff.empty.length > 0) console.log(diff.empty);
  console.log(`Type mismatches: ${diff.typeMismatch.length}`);
  if (diff.typeMismatch.length > 0) console.log(diff.typeMismatch);
  console.log(`Length mismatches (arrays): ${diff.lengthMismatch.length}`);
  if (diff.lengthMismatch.length > 0) console.log(diff.lengthMismatch);
}

console.log('\n=== SECTION 6 AUDIT: SEO metadata parity in src/i18n/seo.ts ===');
console.log('pageSEO keys (pages):', Object.keys(pageSEO));

const localesForSEO = ['en', 'ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'] as const;
const seoFields = ['title', 'description', 'keywords', 'ogTitle', 'ogDescription', 'breadcrumbName'] as const;

for (const [pageKey, pageData] of Object.entries(pageSEO)) {
  console.log(`\nPage: ${pageKey}`);
  for (const loc of localesForSEO) {
    const dataForLoc = (pageData as any)[loc];
    if (!dataForLoc) {
      console.log(`  [MISSING ENTIRE LOCALE] ${loc}`);
      continue;
    }
    const missingFields: string[] = [];
    const emptyFields: string[] = [];
    for (const f of seoFields) {
      if (!(f in dataForLoc)) {
        missingFields.push(f);
      } else if (typeof dataForLoc[f] === 'string' && dataForLoc[f].trim().length === 0) {
        emptyFields.push(f);
      }
    }
    if (missingFields.length > 0 || emptyFields.length > 0) {
      console.log(`  Locale ${loc}: missing=[${missingFields.join(', ')}], empty=[${emptyFields.join(', ')}]`);
    } else {
      // Check if it's identical to en (untranslated fallback)
      const enData = (pageData as any)['en'];
      if (loc !== 'en' && enData) {
        const identical = seoFields.filter(f => dataForLoc[f] === enData[f]);
        if (identical.length > 0) {
          console.log(`  Locale ${loc}: identical to EN for fields: ${identical.join(', ')}`);
        }
      }
    }
  }
}

console.log('\n=== SECTION 7 AUDIT: apps.json categories and translations ===');
const categoriesInApps = Array.from(new Set(appsData.map((a: any) => a.category)));
console.log('Categories found in apps.json:', categoriesInApps);

for (const [locName, locObj] of Object.entries({ en, ...allLocales })) {
  console.log(`\nLocale ${locName} appCategories:`, locObj.appCategories);
  const missingCat = categoriesInApps.filter(c => !locObj.appCategories || !locObj.appCategories[c]);
  if (missingCat.length > 0) {
    console.log(`  MISSING translation for categories:`, missingCat);
  }
}
