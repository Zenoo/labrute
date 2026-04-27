import { CSRF_COOKIE_NAME } from '@labrute/core';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { LS_KEY_CSRF_TOKEN } from '../utils/constants';
import { getCookie } from '../utils/cookies';
import { fetchCsrfToken } from '../utils/Fetch';

interface CsrfContextInterface {
  csrfToken: string | null,
}

const CsrfContext = React.createContext<CsrfContextInterface>({
  csrfToken: null,
});

export function useCsrf(): CsrfContextInterface {
  return useContext(CsrfContext);
}

interface CsrfProviderProps {
  children: React.ReactNode;
}

export const CsrfProvider = ({ children }: CsrfProviderProps) => {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);

  // Fetch CSRF token on page load
  useEffect(() => {
    const csrfCookie = getCookie(CSRF_COOKIE_NAME);
    const localStorageToken = localStorage.getItem(LS_KEY_CSRF_TOKEN);

    // If localStorage has a token but the session cookie is gone, clear localStorage
    if (localStorageToken && !csrfCookie) {
      localStorage.removeItem(LS_KEY_CSRF_TOKEN);
    }

    fetchCsrfToken().then((token) => {
      setCsrfToken(token);

      // Set CSRF token in localStorage
      localStorage.setItem(LS_KEY_CSRF_TOKEN, token);
    }).catch(() => {
      console.error('Failed to fetch CSRF token');
      setCsrfToken(null);
    });
  }, []);

  const methods = useMemo(() => ({
    csrfToken,
  }), [csrfToken]);

  return (
    <CsrfContext.Provider value={methods}>
      {children}
    </CsrfContext.Provider>
  );
};
