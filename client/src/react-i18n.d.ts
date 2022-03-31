// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import fr from './assets/i18n/fr/common.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'common';
    // custom resources type
    resources: {
      fr: typeof fr;
    }
  }
}