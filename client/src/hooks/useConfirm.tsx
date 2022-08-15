import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ConfirmContextInterface {
  open: (title: string, content: string, onAccept?: () => void, onCancel?: () => void) => void;
}

const ConfirmContext = React.createContext<ConfirmContextInterface>({
  open: () => {
    console.error('ConfirmContext.open() not implemented');
  },
});

export const useConfirm = () => {
  const context = useContext(ConfirmContext);
  return context;
};

interface ConfirmProviderProps {
  children: React.ReactNode;
}

interface ConfirmParams {
  title: string;
  content: string;
  onAccept?: () => void;
  onCancel?: () => void;
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<ConfirmParams>({
    title: '',
    content: ''
  });

  // Accept action
  const accept = useCallback(() => {
    setOpen(false);
    if (params.onAccept) params.onAccept();
  }, [params]);

  // Cancel action
  const cancel = useCallback(() => {
    setOpen(false);
    if (params.onCancel) params.onCancel();
  }, [params]);

  // Open dialog
  const handleOpen = useCallback((
    title: string,
    content: string,
    onAccept?: () => void,
    onCancel?: () => void
  ) => {
    setParams({
      title,
      content,
      onAccept,
      onCancel,
    });
    setOpen(true);
  }, []);

  // Close dialog
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const methods = useMemo(() => ({
    open: handleOpen,
  }), [handleOpen]);

  return (
    <ConfirmContext.Provider value={methods}>
      {children}
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{params.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{params.content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancel}
            variant="contained"
            sx={{ color: 'error.main' }}
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={accept}
            autoFocus
            variant="contained"
            sx={{ color: 'success.main' }}
          >
            {t('continue')}
          </Button>
        </DialogActions>
      </Dialog>
    </ConfirmContext.Provider>
  );
};
