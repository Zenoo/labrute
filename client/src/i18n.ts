import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './i18n/locales/fr';
import en from './i18n/locales/en';
import es from './i18n/locales/es';
import de from './i18n/locales/de';
import ru from './i18n/locales/ru';
import pt from './i18n/locales/pt';
import { DEFAULT_LANGUAGE } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { HOST, Host } from './utils/host';

export const defaultLangByHost: Record<string, Lang> = {
  [Host.LaBrute]: Lang.fr,
  [Host.MyBrute]: Lang.en,
  [Host.ElBruto]: Lang.es,
  [Host.MeinBrutalo]: Lang.de,
};

export const defaultNS = 'common';
export const resources = {
  en,
  fr,
  es,
  de,
  ru,
  pt,
} as const;

const lang = defaultLangByHost[HOST] ?? DEFAULT_LANGUAGE;

i18n.use(initReactI18next).init({
  lng: lang,
  resources,
  defaultNS,
  interpolation: {
    escapeValue: false
  },
  fallbackLng: Lang.en,
}).catch((err) => {
  console.error('Error loading language', err);
});

export default i18n;
