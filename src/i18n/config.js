export const defaultLocale = 'zh-CN';
export const locales = ['en-US', 'zh-CN', 'zh-TW', 'ja-JP', 'ko-KR'];

export function getLanguageName(locale) {
  switch (locale) {
    case 'en-US':
      return 'English';

    case 'zh-CN':
      return '简体中文';

    case 'zh-TW':
      return '繁體中文';

    case 'ja-JP':
      return '日本語';

    case 'ko-KR':
      return '한국어';

    default:
      return locale;
  }
}

export function getLanguageFlag(locale) {
  switch (locale) {
    case 'en-US':
      return '🇺🇸';

    case 'zh-CN':
      return '🇨🇳';

    case 'zh-TW':
      return '🇹🇼';

    case 'ja-JP':
      return '🇯🇵';

    case 'ko-KR':
      return '🇰🇷';

    default:
      return '🌐';
  }
}
