import 'moment/locale/fr';
import moment from 'moment';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Language } from '../i18n';

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

  useEffect(() => {
    i18n.changeLanguage(language).catch((error) => {
      console.error(error);
    });
    document.documentElement.lang = language;
    moment.locale(language);
    localStorage.setItem('language', language);
  }, [i18n, language]);

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
