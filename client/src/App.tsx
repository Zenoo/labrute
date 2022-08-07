import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader.js';
import { AlertProvider } from './hooks/useAlert.js';
import { AuthProvider } from './hooks/useAuth.js';
import { ConfirmProvider } from './hooks/useConfirm.js';
import routes from './routes.js';
import light from './theme/light.js';

/**
 * App entry point
 * @returns {React.ReactElement}
 */
const App = () => {
  const routing = useRoutes(routes);

  return (
    <HelmetProvider>
      <CssBaseline />
      <AlertProvider>
        <AuthProvider>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={light}>
              <ConfirmProvider>
                <Suspense fallback={<Loader />}>
                  {routing}
                </Suspense>
              </ConfirmProvider>
            </ThemeProvider>
          </StyledEngineProvider>
        </AuthProvider>
      </AlertProvider>
    </HelmetProvider>
  );
};

export default App;
