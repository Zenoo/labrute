import moment from 'moment';
import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextInterface {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = React.createContext<LanguageContextInterface>({
  language: 'fr',
  setLanguage: () => { },
});

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};


interface LanguageProviderProps {
  children: React.ReactNode;
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, _setLanguage] = useState('fr');
  const { i18n } = useTranslation();

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    _setLanguage(lang);
    moment.locale(lang);
  }, [i18n]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

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
