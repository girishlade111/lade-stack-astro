import { ui, type UIKeys } from './ui';
import { defaultLocale, languages, type SupportedLocale } from './config';

export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLocale;
  }
  return defaultLocale;
}

export function useTranslations(lang: SupportedLocale) {
  return function t(key: UIKeys): string {
    const dict = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLocale] as Record<string, string>;
    return dict?.[key] ?? fallback?.[key] ?? key;
  };
}

export function getLocalizedPath(path: string, lang: SupportedLocale): string {
  // Normalize trailing slash (trailingSlash:'never') — C3 fix.
  let input = path.startsWith('/') ? path : `/${path}`;
  if (input.length > 1) input = input.replace(/\/+$/, '');
  const cleanPath = input || '/';

  // Strip any existing locale prefix
  const parts = cleanPath.split('/').filter(Boolean);
  const firstPart = parts[0];
  let subPath = cleanPath;
  if (firstPart && firstPart in languages) {
    subPath = '/' + parts.slice(1).join('/');
    if (subPath === '/') subPath = '/';
  }
  if (subPath === '') subPath = '/';

  // Blog content is English-only (Invariant #5).
  // When switching to a non-default language from a blog route, redirect to localized home (`/${lang}`).
  if (subPath === '/blog' || subPath.startsWith('/blog/')) {
    if (lang === defaultLocale) {
      return subPath;
    }
    return `/${lang}`;
  }

  if (lang === defaultLocale) {
    return subPath;
  }

  return subPath === '/' ? `/${lang}` : `/${lang}${subPath}`;
}

/** Strip locale prefix to get the canonical route (e.g. /zh/blog/x -> /blog/x) */
export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  for (const locale of Object.keys(languages)) {
    if (locale === defaultLocale) continue;
    if (pathname === `/${locale}`) return '/';
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1) || '/';
  }
  return pathname || '/';
}

/** Given current URL + target lang, return the localized equivalent path */
/** Given current URL + target lang, return the localized equivalent path */
export function getLocalizedPathFromUrl(url: URL, targetLang: SupportedLocale): string {
  const route = getRouteFromUrl(url);
  return getLocalizedPath(route, targetLang);
}

export const LAST_MODIFIED = {
  home: '2026-09-01',
  apps: '2026-09-01',
  products: '2026-09-01',
  aiCodeViewer: '2026-09-01',
  docs: '2026-09-01',
  about: '2026-09-01',
  contact: '2026-09-01',
  support: '2026-09-01',
  privacy: '2025-01-01',
  terms: '2025-01-01',
} as const;
