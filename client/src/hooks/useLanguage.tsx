import 'dayjs/locale/de';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/pt';
import 'dayjs/locale/ru';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DEFAULT_LANGUAGE } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { getInitialLanguage } from '../i18n';
import { LS_KEY_LANGUAGE } from '../utils/constants';
import dayjs from 'dayjs';

interface LanguageContextInterface {
  language: Lang;
  setLanguage: (lang: Lang) => void;
}

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: DEFAULT_LANGUAGE as Lang,
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
  const [language, setLanguage] = useState<Lang>(getInitialLanguage);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update i18n language
    i18n.changeLanguage(language).catch((error) => {
      console.error(error);
    });

    // Update document language
    document.documentElement.lang = language;

    // Update dayjs language
    dayjs.locale(language);

    // Update language in localStorage
    localStorage.setItem(LS_KEY_LANGUAGE, language);
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
