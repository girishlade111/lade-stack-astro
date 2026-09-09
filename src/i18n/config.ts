export const languages = {
  en: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr', iso: 'en_US' },
  zh: { code: 'zh', name: 'Chinese', nativeName: '简体中文', flag: '🇨🇳', dir: 'ltr', iso: 'zh_CN' },
  ko: { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr', iso: 'ko_KR' },
  ja: { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr', iso: 'ja_JP' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr', iso: 'tr_TR' },
  'pt-BR': { code: 'pt-BR', name: 'Portuguese (Brazil)', nativeName: 'Português (Brasil)', flag: '🇧🇷', dir: 'ltr', iso: 'pt_BR' }
} as const;

export type SupportedLocale = keyof typeof languages;
export const defaultLocale: SupportedLocale = 'en';
export const localeKeys = Object.keys(languages) as SupportedLocale[];
export const supportedLocales = localeKeys;
export const nonDefaultLocales = supportedLocales.filter((l) => l !== defaultLocale);
