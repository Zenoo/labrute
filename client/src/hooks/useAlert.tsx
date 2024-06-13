import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export interface AlertContextInterface {
  open: (
    severity: AlertColor,
    message: string,
    target?: string,
  ) => void;
  close: () => void;
}

const AlertContext = React.createContext<AlertContextInterface>({
  open: () => {
    console.error('AlertContext.open() not implemented');
  },
  close: () => {
    console.error('AlertContext.close() not implemented');
  },
});

export const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
};

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [alert, setAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('info');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertTarget, setAlertTarget] = useState('');

  const open = useCallback((
    severity: AlertColor,
    message: string,
    target?: string,
  ) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertTarget(target || '');
    setTimeout(() => {
      setAlert(true);
    });
  }, []);

  const closeAlert = useCallback(() => setAlert(false), []);

  const goToTarget = () => {
    navigate(alertTarget);
  };

  const methods = useMemo(() => ({
    open,
    close: closeAlert,
  }), [closeAlert, open]);

  return (
    <AlertContext.Provider value={methods}>
      {children}
      <Snackbar onClose={closeAlert} open={alert} sx={{ zIndex: 100 }}>
        <Alert
          onClose={closeAlert}
          severity={alertSeverity}
          action={alertTarget ? (
            <Button color="inherit" size="small" onClick={goToTarget}>
              {t('go')}
            </Button>
          ) : undefined}
          sx={{ boxShadow: 8 }}
          variant="filled"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};
