import React, { useContext, useEffect, useMemo, useState } from 'react';
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
    fetchCsrfToken().then((token) => {
      setCsrfToken(token);

      // Set CSRF token in localStorage
      localStorage.setItem('csrfToken', token);
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
