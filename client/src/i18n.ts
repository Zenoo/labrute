import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'fr',
    backend: {
      /* translation file path */
      loadPath: '/static/i18n/{{lng}}/{{ns}}.json'
    },
    fallbackLng: 'fr',
    debug: false,
    /* can have multiple namespace, in case you want to divide a huge translation
    into smaller pieces and load them on demand */
    ns: ['common', 'errors'],
    defaultNS: 'common',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    react: {
      useSuspense: true
    },
    returnObjects: true,
  });

export default i18n;
