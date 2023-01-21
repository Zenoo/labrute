import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader';
import { AlertProvider } from './hooks/useAlert';
import { AuthProvider } from './hooks/useAuth';
import { ConfirmProvider } from './hooks/useConfirm';
import routes from './routes';
import light from './theme/light';

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
