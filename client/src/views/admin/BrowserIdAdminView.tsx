import {
  Paper, Stack, TextField
} from '@mui/material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FantasyButton } from '../../components/FantasyButton';
import { Page } from '../../components/Page';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const BrowserIdAdminView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const { user } = useAuth();
  const Server = useServer();

  const [browserId, setBrowserId] = React.useState('');
  const [reason, setReason] = React.useState('');

  const unbanBrowser = useCallback(() => {
    if (!browserId || !reason.trim()) return;

    Server.User.unbanBrowser({ browserId, reason })
      .then(() => {
        Alert.open('success', 'Browser unbanned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId, reason]);

  const banBrowser = useCallback(() => {
    if (!browserId || !reason.trim()) return;

    Server.User.banBrowser({ browserId, reason })
      .then(() => {
        Alert.open('success', 'Browser banned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId, reason]);

  return (
    <Page headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {user && (
          <Stack spacing={2}>
            <TextField
              label="Browser ID"
              value={browserId}
              onChange={(e) => setBrowserId(e.target.value)}
            />
            <TextField
              label="Review reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              required
              inputProps={{ maxLength: 500 }}
            />
            <FantasyButton
              color="success" onClick={unbanBrowser} disabled={!reason.trim() || !browserId}
            >
              Unban browser
            </FantasyButton>
            <FantasyButton
              color="error" onClick={banBrowser} disabled={!reason.trim() || !browserId}
            >
              Ban browser
            </FantasyButton>
          </Stack>
        )}
      </Paper>
    </Page>
  );
};
