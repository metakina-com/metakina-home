import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';// 导入语言文件
import enUS from './locales/en-US/index.js';
import jaJP from './locales/ja-JP/index.js';
import koKR from './locales/ko-KR/index.js';
import zhCN from './locales/zh-CN/index.js';
import zhTW from './locales/zh-TW/index.js';

const resources = {
  'en': {
    translation: enUS,
  },
  'zh': {
    translation: zhCN,
  },
  'zh-TW': {
    translation: zhTW,
  },
  'ja': {
    translation: jaJP,
  },
  'ko': {
    translation: koKR,
  },
};

i18n
  // 检测用户语言
  .use(LanguageDetector)
  // 将i18n实例传递给react-i18next
  .use(initReactI18next)
  // 初始化i18next
  .init({
    resources,
    fallbackLng: 'zh',
    debug: import.meta.env.MODE === 'development',
    interpolation: {
      escapeValue: false, // 不需要为React转义
    },
  });

export default i18n;
