import { ui, type UIKeys } from './ui';
import { defaultLocale, languages, type SupportedLocale } from './config';

export function getLangFromUrl(url: URL): SupportedLocale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0] as SupportedLocale | undefined;
  if (first && first in languages) return first;
  // Handle pt-BR encoded? pathname keeps "pt-BR" literally
  if (segments[0] === 'pt-BR') return 'pt-BR';
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
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLocale) return cleanPath === '/' ? '/' : cleanPath;
  return cleanPath === '/' ? `/${lang}` : `/${lang}${cleanPath}`;
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
export function getLocalizedPathFromUrl(url: URL, targetLang: SupportedLocale): string {
  const route = getRouteFromUrl(url);
  return getLocalizedPath(route, targetLang);
}
