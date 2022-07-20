import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';

export interface AlertContextInterface {
  open: (severity: AlertColor, message: string) => void;
}

const AlertContext = React.createContext<AlertContextInterface>({
  open: () => {
    console.error('AlertContext.open() not implemented');
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
  const [alert, setAlert] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>('info');
  const [alertMessage, setAlertMessage] = useState('');

  const open = useCallback((severity: AlertColor, message: string) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setTimeout(() => {
      setAlert(true);
    });
  }, []);
  const closeAlert = useCallback(() => setAlert(false), []);

  const methods = useMemo(() => ({
    open,
  }), [open]);

  return (
    <AlertContext.Provider value={methods}>
      {children}
      <Snackbar onClose={closeAlert} open={alert}>
        <Alert onClose={closeAlert} severity={alertSeverity} sx={{ boxShadow: 8 }} variant="filled">
          {alertMessage}
        </Alert>
      </Snackbar>
    </AlertContext.Provider>
  );
};