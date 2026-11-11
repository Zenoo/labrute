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

export const FingerprintAdminView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const { user } = useAuth();
  const Server = useServer();

  const [fingerprint, setFingerprint] = React.useState('');
  const [reason, setReason] = React.useState('');

  const unbanFingerprint = useCallback(() => {
    if (!fingerprint || !reason.trim()) return;

    Server.User.unbanFingerprint({ fingerprint, reason })
      .then(() => {
        Alert.open('success', 'Fingerprint unbanned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, fingerprint, reason]);

  const banFingerprint = useCallback(() => {
    if (!fingerprint || !reason.trim()) return;

    Server.User.banFingerprint({ fingerprint, reason })
      .then(() => {
        Alert.open('success', 'Fingerprint banned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, fingerprint, reason]);

  return (
    <Page headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {user && (
          <Stack spacing={2}>
            <TextField
              label="Fingerprint"
              value={fingerprint}
              onChange={(e) => setFingerprint(e.target.value)}
            />
            <TextField
              label="Review reason"
              value={reason}
              onChange={(event) => setReason(event.target.value)}
              required
              inputProps={{ maxLength: 500 }}
            />
            <FantasyButton
              color="success" onClick={unbanFingerprint} disabled={!reason.trim() || !fingerprint}
            >
              Unban fingerprint
            </FantasyButton>
            <FantasyButton
              color="error" onClick={banFingerprint} disabled={!reason.trim() || !fingerprint}
            >
              Ban fingerprint
            </FantasyButton>
          </Stack>
        )}
      </Paper>
    </Page>
  );
};
