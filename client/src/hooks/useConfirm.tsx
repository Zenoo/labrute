import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StyledInput from '../components/StyledInput';

interface ConfirmContextInterface {
  open: (title: string, content: string, onAccept?: () => void, onCancel?: () => void) => void;
  close: () => void;
}

const ConfirmContext = React.createContext<ConfirmContextInterface>({
  open: () => {
    console.error('ConfirmContext.open() not implemented');
  },
  close: () => {
    console.error('ConfirmContext.close() not implemented');
  }
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
  onAccept?: (input?: string) => void;
  onCancel?: () => void;
  inputName?: string;
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [params, setParams] = useState<ConfirmParams>({
    title: '',
    content: ''
  });
  const [input, setInput] = useState('');

  // Accept action
  const accept = useCallback(() => {
    if (params.inputName && !input) return;

    setOpen(false);
    if (params.onAccept) params.onAccept(input);
  }, [params, input]);

  // Cancel action
  const cancel = useCallback(() => {
    setOpen(false);
    if (params.onCancel) params.onCancel();
  }, [params]);

  // Open dialog
  const handleOpen = useCallback((
    title: string,
    content: string,
    onAccept?: (userInput?: string) => void,
    onCancel?: () => void,
    inputName?: string,
  ) => {
    setParams({
      title,
      content,
      onAccept,
      onCancel,
      inputName,
    });
    setInput('');
    setOpen(true);
  }, []);

  // Close dialog
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const methods = useMemo(() => ({
    open: handleOpen,
    close: handleClose
  }), [handleClose, handleOpen]);

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
          {params.inputName && (
            <StyledInput
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder={t(params.inputName)}
              sx={{ mr: 2 }}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={cancel}
            variant="contained"
            sx={{ color: 'text.secondary' }}
          >
            {t('cancel')}
          </Button>
          <Button
            onClick={accept}
            autoFocus
            variant="contained"
            sx={{ color: 'error.main' }}
          >
            {t('continue')}
          </Button>
        </DialogActions>
      </Dialog>
    </ConfirmContext.Provider>
  );
};
