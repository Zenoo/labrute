import { UserBannedListResponse } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { IconButton, List, ListItem, ListItemText, Paper, Stack } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useConfirm } from '../hooks/useConfirm';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

export const BannedUsersView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user: admin } = useAuth();
  const Confirm = useConfirm();

  const [users, setUsers] = React.useState<UserBannedListResponse>([]);

  // Trigger reports fetch when status changes
  useEffect(() => {
    if (!admin?.admin) return;

    Server.User.banlist().then((data) => {
      setUsers(data);
    }).catch(catchError(Alert));
  }, [admin, Alert]);

  // Unban user
  const unbanUser = useCallback((id: string) => () => {
    Confirm.open(t('unban'), t('unbanConfirm'), () => {
      Server.User.unban(id).then(() => {
        Alert.open('success', t('unbanSuccess'));
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, t]);

  return (
    <Page title="Banned users" headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Banned users</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            {/* Report list */}
            <List dense>
              {users.map((bannedUser) => (
                <ListItem
                  key={bannedUser.id}
                  secondaryAction={(
                    <IconButton edge="end" onClick={unbanUser(bannedUser.id)}>
                      <Close />
                    </IconButton>
                  )}
                >
                  <ListItemText
                    primary={`${bannedUser.name} (${bannedUser.id})`}
                    secondary={`${moment.utc(bannedUser.bannedAt).format('DD/MM/YYYY')}, reason: ${bannedUser.banReason}`}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </Page>
  );
};
