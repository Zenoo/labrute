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

  const unbanBrowser = useCallback(() => {
    if (!browserId) return;

    Server.User.unbanBrowser({ browserId })
      .then(() => {
        Alert.open('success', 'Browser unbanned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId]);

  const banBrowser = useCallback(() => {
    if (!browserId) return;

    Server.User.banBrowser({ browserId })
      .then(() => {
        Alert.open('success', 'Browser banned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId]);

  return (
    <Page title={t('adminPanel')} headerUrl="/">
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
            <FantasyButton color="success" onClick={unbanBrowser}>
              Unban browser
            </FantasyButton>
            <FantasyButton color="error" onClick={banBrowser}>
              Ban browser
            </FantasyButton>
          </Stack>
        )}
      </Paper>
    </Page>
  );
};
