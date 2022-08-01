import { LocalizationProviderProps } from '@mui/lab';
import AdapterMoment from '@mui/lab/AdapterMoment';
import _LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader.js';
import { AlertProvider } from './hooks/useAlert.js';
import { AuthProvider } from './hooks/useAuth.js';
import { ConfirmProvider } from './hooks/useConfirm.js';
import { useLanguage } from './hooks/useLanguage.js';
import routes from './routes.js';
import light from './theme/light.js';

// Workaround for a type-resolution issue with `@mui/lab`.
// eslint-disable-next-line
const LocalizationProvider: (p: LocalizationProviderProps) => JSX.Element = (
  // eslint-disable-next-line
  _LocalizationProvider as any
);

/**
 * App entry point
 * @returns {React.ReactElement}
 */
const App = () => {
  const routing = useRoutes(routes);
  const { language } = useLanguage();

  return (
    <HelmetProvider>
      <AlertProvider>
        <AuthProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={light}>
              <LocalizationProvider
                dateAdapter={/* eslint-disable */ AdapterMoment as any}
                locale={language}
              >
                <ConfirmProvider>
                  <Suspense fallback={<Loader />}>
                    {routing}
                  </Suspense>
                </ConfirmProvider>
              </LocalizationProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </AuthProvider>
      </AlertProvider>
    </HelmetProvider>
  );
};

export default App;
