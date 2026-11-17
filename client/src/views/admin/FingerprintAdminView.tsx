import {
  Paper, Stack, TextField, Button,
} from '@mui/material';
import React, { useCallback } from 'react';
import { AdminPage } from '../../components/admin/AdminPage';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const FingerprintAdminView = () => {
  const Alert = useAlert();
  const { user } = useAuth();
  const Server = useServer();

  const [fingerprint, setFingerprint] = React.useState('');
  const [reason, setReason] = React.useState('');

  const unbanFingerprint = useCallback(() => {
    if (!fingerprint || !reason.trim()) {
      return;
    }

    Server.User.unbanFingerprint({
      fingerprint,
      reason,
    })
      .then(() => {
        Alert.open('success', 'Fingerprint unbanned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, fingerprint, reason]);

  const banFingerprint = useCallback(() => {
    if (!fingerprint || !reason.trim()) {
      return;
    }

    Server.User.banFingerprint({
      fingerprint,
      reason,
    })
      .then(() => {
        Alert.open('success', 'Fingerprint banned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, fingerprint, reason]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
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
            <Button
              color="success" onClick={unbanFingerprint} disabled={!reason.trim() || !fingerprint}
            >
              Unban fingerprint
            </Button>
            <Button
              color="error" onClick={banFingerprint} disabled={!reason.trim() || !fingerprint}
            >
              Ban fingerprint
            </Button>
          </Stack>
        )}
      </Paper>
    </AdminPage>
  );
};
