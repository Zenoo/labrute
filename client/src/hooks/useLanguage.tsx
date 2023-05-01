import { Language } from '@labrute/core';
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/es';
import 'moment/locale/fr';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAlert } from './useAlert';

interface LanguageContextInterface {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: 'fr',
  setLanguage: () => {
    console.error('LanguageContext.setLanguage() not implemented');
  },
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>(localStorage.getItem('language') as Language || 'fr');
  const { i18n } = useTranslation();
  const Alert = useAlert();

  useEffect(() => {
    // Update i18n language
    i18n.changeLanguage(language).catch((error) => {
      console.error(error);
    });

    // Update document language
    document.documentElement.lang = language;

    // Update moment language
    moment.locale(language);

    // Update language in localStorage
    localStorage.setItem('language', language);
  }, [Alert, i18n, language]);

  const methods = useMemo(() => ({
    language,
    setLanguage
  }), [language, setLanguage]);

  return (
    <LanguageContext.Provider value={methods}>
      {children}
    </LanguageContext.Provider>
  );
};
