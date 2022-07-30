import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonFr from './assets/i18n/fr/common.json';
import levelUpFr from './assets/i18n/fr/level-up.json';
import commonEn from './assets/i18n/en/common.json';
import levelUpEn from './assets/i18n/en/level-up.json';

export const languages = ['fr', 'en'] as const;
export type Language = typeof languages[number];

export const defaultNS = 'common';
export const resources = {
  en: {
    common: commonEn,
    'level-up': levelUpEn,
  },
  fr: {
    common: commonFr,
    'level-up': levelUpFr,
  }
} as const;

i18n.use(initReactI18next).init({
  lng: languages[0],
  ns: ['common'],
  defaultNS,
  resources,
  interpolation: {
    escapeValue: false
  }
}).catch((err) => {
  console.error('Error loading language', err);
});

export default i18n;