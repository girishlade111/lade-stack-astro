import { defaultLocale, type SupportedLocale } from './config';
import type { LocaleContent } from './content-types';
import { en } from './content-en';
import { ko } from './content-ko';
import { ja } from './content-ja';
import { zh } from './content-zh';
import { tr } from './content-tr';
import { ptBR } from './content-ptbr';
import appsData from '../data/apps.json';

export const content: Record<SupportedLocale, LocaleContent> = {
  en,
  ko,
  ja,
  zh,
  tr,
  'pt-BR': ptBR
};

export function getContent(lang: SupportedLocale): LocaleContent {
  return content[lang] ?? content[defaultLocale];
}

export type AppEntry = (typeof appsData)[number];

export type LocalizedApp = AppEntry & {
  displayCategory: string;
};

/** apps.json merged with per-locale copy overrides (missing entries fall back to English). */
export function getLocalizedApps(lang: SupportedLocale): LocalizedApp[] {
  const c = getContent(lang);
  return appsData.map((app) => {
    const o = c.apps[app.id];
    return {
      ...app,
      tagline: o?.tagline ?? app.tagline,
      description: o?.description ?? app.description,
      features: o?.features ?? app.features,
      displayCategory: c.appCategories[app.category] ?? app.category
    };
  });
}

/** Localized blog card/SEO title + description (body stays English for now). */
export function localizePost(
  slug: string,
  fallback: { title: string; description: string },
  lang: SupportedLocale
): { title: string; description: string } {
  const o = getContent(lang).blogPosts[slug];
  return {
    title: o?.title ?? fallback.title,
    description: o?.description ?? fallback.description
  };
}
