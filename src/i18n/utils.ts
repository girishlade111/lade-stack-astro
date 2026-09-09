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
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  // Strip any existing locale prefix
  const parts = cleanPath.split('/').filter(Boolean);
  const firstPart = parts[0];
  let subPath = cleanPath;
  if (firstPart && firstPart in languages) {
    subPath = '/' + parts.slice(1).join('/');
    if (subPath === '/') subPath = '/';
  }
  if (subPath === '') subPath = '/';

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
export function getLocalizedPathFromUrl(url: URL, targetLang: SupportedLocale): string {
  const route = getRouteFromUrl(url);
  return getLocalizedPath(route, targetLang);
}
