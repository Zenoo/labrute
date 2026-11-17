import {
  Paper, Stack, TextField, Button,
} from '@mui/material';
import React, { useCallback } from 'react';
import { AdminPage } from '../../components/admin/AdminPage';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const BrowserIdAdminView = () => {
  const Alert = useAlert();
  const { user } = useAuth();
  const Server = useServer();

  const [browserId, setBrowserId] = React.useState('');
  const [reason, setReason] = React.useState('');

  const unbanBrowser = useCallback(() => {
    if (!browserId || !reason.trim()) {
      return;
    }

    Server.User.unbanBrowser({
      browserId,
      reason,
    })
      .then(() => {
        Alert.open('success', 'Browser unbanned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId, reason]);

  const banBrowser = useCallback(() => {
    if (!browserId || !reason.trim()) {
      return;
    }

    Server.User.banBrowser({
      browserId,
      reason,
    })
      .then(() => {
        Alert.open('success', 'Browser banned successfully');
      })
      .catch(catchError(Alert));
  }, [Alert, Server.User, browserId, reason]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
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
            <Button
              color="success" onClick={unbanBrowser} disabled={!reason.trim() || !browserId}
            >
              Unban browser
            </Button>
            <Button
              color="error" onClick={banBrowser} disabled={!reason.trim() || !browserId}
            >
              Ban browser
            </Button>
          </Stack>
        )}
      </Paper>
    </AdminPage>
  );
};
