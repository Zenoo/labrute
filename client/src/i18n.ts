import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonFr from './assets/i18n/fr/common.json';
import commonEn from './assets/i18n/en/common.json';

export const defaultNS = 'common';
export const resources = {
  en: {
    common: commonEn,
  },
  fr: {
    common: commonFr,
  }
} as const;

i18n.use(initReactI18next).init({
  lng: 'fr',
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