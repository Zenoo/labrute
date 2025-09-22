import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { Suspense, useMemo, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import Loader from './components/Loader';
import { AlertProvider } from './hooks/useAlert';
import { AuthProvider } from './hooks/useAuth';
import { BruteProvider } from './hooks/useBrute';
import { ConfirmProvider } from './hooks/useConfirm';
import { CsrfProvider } from './hooks/useCsrf';
import { RendererProvider } from './hooks/useRenderer';
import { LanguageProvider } from './hooks/useLanguage';
import { ColorModeContext } from './theme/ColorModeContext';
import dark from './theme/dark';
import light from './theme/light';
import { useAnalytics } from './hooks/useAnalytics';
import './index.css';
import './i18n';

export default function Root() {
  useAnalytics();
  
  const [mode, setMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('mode') === 'dark') ? 'dark' : 'light'
  );
  
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('mode', newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = useMemo(
    () => (mode === 'light' ? light : dark),
    [mode],
  );

  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <HelmetProvider>
            <CssBaseline />
            <LanguageProvider>
              <CsrfProvider>
                <AlertProvider>
                  <AuthProvider>
                    <BruteProvider>
                      <RendererProvider>
                        <StyledEngineProvider injectFirst>
                          <ColorModeContext.Provider value={colorMode}>
                            <ThemeProvider theme={theme}>
                              <ConfirmProvider>
                                <Suspense fallback={<Loader />}>
                                  <Outlet />
                                </Suspense>
                              </ConfirmProvider>
                            </ThemeProvider>
                          </ColorModeContext.Provider>
                        </StyledEngineProvider>
                      </RendererProvider>
                    </BruteProvider>
                  </AuthProvider>
                </AlertProvider>
              </CsrfProvider>
            </LanguageProvider>
          </HelmetProvider>
        </LocalizationProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}