import React, { useContext, useEffect, useMemo, useState } from 'react';
import Server from '../utils/Server';

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
    Server.csrf().then((data) => {
      setCsrfToken(data.csrfToken);

      // Set CSRF token in localStorage
      localStorage.setItem('csrfToken', data.csrfToken);
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
