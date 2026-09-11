import { defaultLocale, languages, type SupportedLocale } from './config';
import { z, type CollectionEntry } from 'astro:content';
import type { LocaleContent } from './content-types';
import { en } from './content-en';
import { ru } from './content-ru';
import { ko } from './content-ko';
import { ja } from './content-ja';
import { zh } from './content-zh';
import { tr } from './content-tr';
import { ptBR } from './content-ptbr';
import appsData from '../data/apps.json';

export const content: Record<SupportedLocale, LocaleContent> = {
  en,
  ru,
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

/**
 * Strips locale prefix from blog post slug (e.g. 'en/zero-trust' -> 'zero-trust').
 */
export function getPostSlug(post: { slug: string }): string {
  const parts = post.slug.split('/');
  return parts.length > 1 ? parts.slice(1).join('/') : post.slug;
}

/**
 * Extracts locale from a blog post slug (e.g. 'zh/zero-trust' -> 'zh', 'zero-trust' -> 'en').
 */
export function getPostLocale(post: { slug: string }): SupportedLocale {
  const parts = post.slug.split('/');
  if (parts.length > 1) {
    const matched = (Object.keys(languages) as SupportedLocale[]).find(
      (l) => l.toLowerCase() === parts[0].toLowerCase()
    );
    if (matched) return matched;
  }
  return defaultLocale;
}

export type LocaleBlogPost = {
  post: CollectionEntry<'blog'>;
  isFallback: boolean;
  cleanSlug: string;
};

/**
 * Resolves posts for a given locale.
 * - For English ('en'): returns all English posts with isFallback=false.
 * - For non-English: checks if a translated post exists with the same clean slug in that locale's folder.
 *   If found, uses it (isFallback=false). Otherwise falls back to the English post (isFallback=true).
 * Results are sorted newest first by pubDate.
 */
export function getBlogPostsForLocale(
  lang: SupportedLocale,
  allPosts: CollectionEntry<'blog'>[]
): LocaleBlogPost[] {
  const enPosts = allPosts.filter((p) => getPostLocale(p) === defaultLocale);

  if (lang === defaultLocale) {
    return enPosts
      .map((post) => ({
        post,
        isFallback: false,
        cleanSlug: getPostSlug(post)
      }))
      .sort((a, b) => b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf());
  }

  const localePosts = allPosts.filter((p) => getPostLocale(p) === lang);
  const localePostMap = new Map<string, CollectionEntry<'blog'>>();
  for (const p of localePosts) {
    localePostMap.set(getPostSlug(p), p);
  }

  return enPosts
    .map((enPost) => {
      const cleanSlug = getPostSlug(enPost);
      const translated = localePostMap.get(cleanSlug);
      if (translated) {
        return { post: translated, isFallback: false, cleanSlug };
      }
      return { post: enPost, isFallback: true, cleanSlug };
    })
    .sort((a, b) => b.post.data.pubDate.valueOf() - a.post.data.pubDate.valueOf());
}
