import { seoData } from '../src/i18n/seo';

const locales = ['ru', 'zh', 'ko', 'ja', 'tr', 'pt-BR'] as const;
const fields = ['title', 'description', 'keywords', 'ogTitle', 'ogDescription', 'breadcrumbName'] as const;

for (const [pageKey, pageMap] of Object.entries(seoData['en'])) {
  for (const loc of locales) {
    const locMap = seoData[loc]?.[pageKey as keyof typeof pageMap];
    if (!locMap) {
      console.log(`Missing page in ${loc}: ${pageKey}`);
      continue;
    }
    for (const f of fields) {
      const enVal = (pageMap as any)[f];
      const locVal = (locMap as any)[f];
      if (enVal && locVal && enVal === locVal) {
        console.log(`[IDENTICAL TO EN] Page '${pageKey}', locale '${loc}', field '${f}': "${enVal.slice(0, 30)}..."`);
      }
    }
  }
}
