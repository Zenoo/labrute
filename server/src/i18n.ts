import i18next from 'i18next';
import Backend from 'i18next-fs-backend';

i18next.use(Backend).init({
  lng: 'en',
  backend: {
    /* translation file path */
    loadPath: 'i18n/{{lng}}.json',
  },
  fallbackLng: 'en',
  debug: false,
  returnNull: false,
}).catch((err) => {
  console.error('Error loading language', err);
});

export default i18next;
