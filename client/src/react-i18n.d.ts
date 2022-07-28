// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from './assets/i18n/fr/common.json';
import levelUp from './assets/i18n/fr/level-up.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      common: typeof common;
      'level-up': typeof levelUp;
    }
  }
}