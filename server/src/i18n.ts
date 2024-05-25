import i18next from 'i18next';
import Backend, { FsBackendOptions } from 'i18next-fs-backend';
import { Lang } from '@labrute/prisma';
import { LOGGER } from './context.js';

i18next.use(Backend).init<FsBackendOptions>({
  lng: 'en',
  backend: {
    /* translation file path */
    loadPath: 'i18n/{{lng}}.json',
  },
  fallbackLng: 'en',
  debug: false,
  returnNull: false,
  supportedLngs: Object.values(Lang),
  preload: Object.values(Lang),
}).catch((err) => {
  LOGGER.error(`Error loading language ${err}`);
});

export default i18next;
