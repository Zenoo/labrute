import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { Suspense, useMemo, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { useRoutes } from 'react-router-dom';
import Loader from './components/Loader';
import { AlertProvider } from './hooks/useAlert';
import { AuthProvider } from './hooks/useAuth';
import { ConfirmProvider } from './hooks/useConfirm';
import { RendererProvider } from './hooks/useRenderer';
import routes from './routes';
import { ColorModeContext } from './theme/ColorModeContext';
import dark from './theme/dark';
import light from './theme/light';

/**
 * App entry point
 * @returns {React.ReactElement}
 */
const App = () => {
  const routing = useRoutes(routes);
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
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <HelmetProvider>
        <CssBaseline />
        <AlertProvider>
          <AuthProvider>
            <RendererProvider>
              <StyledEngineProvider injectFirst>
                <ColorModeContext.Provider value={colorMode}>
                  <ThemeProvider theme={theme}>
                    <ConfirmProvider>
                      <Suspense fallback={<Loader />}>
                        {routing}
                      </Suspense>
                    </ConfirmProvider>
                  </ThemeProvider>
                </ColorModeContext.Provider>
              </StyledEngineProvider>
            </RendererProvider>
          </AuthProvider>
        </AlertProvider>
      </HelmetProvider>
    </LocalizationProvider>
  );
};

export default App;
