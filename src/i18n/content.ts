import { defaultLocale, type SupportedLocale } from './config';
import { z } from 'astro:content';
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

// B14: build-time validation schema for apps.json.
export const appSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  icon: z.string().min(1),
  category: z.string().min(1),
  features: z.array(z.string()).default([]),
  timeToValue: z.string().min(1),
  integrations: z.array(z.string()).default([]),
  lifetimeFree: z.boolean().default(true),
  landingUrl: z.string().optional().nullable(),
  createdAt: z.string().optional(),
  popularityScore: z.number().optional(),
  iconAlt: z.string().min(1),
  comingSoon: z.boolean().optional(),
});

export const appsSchema = z.array(appSchema);

export type AppEntryInput = z.infer<typeof appSchema>;

// Validate apps.json at import time — fail the build on malformed entries (B14).
const _appsParse = appsSchema.safeParse(appsData);
if (!_appsParse.success) {
  throw new Error(`[apps.json] schema validation failed:\n${_appsParse.error.message}`);
}

export type AppEntry = AppEntryInput;

export type LocalizedApp = AppEntry & {
  displayCategory: string;
};

export function validateApps(data: unknown) {
  return appsSchema.safeParse(data);
}

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
