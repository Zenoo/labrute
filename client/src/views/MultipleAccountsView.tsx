import { UserMultipleAccountsListResponse } from '@labrute/core';
import { List, ListItem, ListItemText, Paper, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

export const MultipleAccountsView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user: admin } = useAuth();

  const [instances, setInstances] = React.useState<UserMultipleAccountsListResponse>([]);

  // Trigger reports fetch when status changes
  useEffect(() => {
    if (!admin?.admin) return;

    Server.User.multipleAccounts().then((data) => {
      setInstances(data);
    }).catch(catchError(Alert));
  }, [admin, Alert]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Multiple accounts</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            {/* Report list */}
            <List dense>
              {instances.map((instance) => (
                <ListItem
                  key={instance.ip}
                >
                  <ListItemText
                    primary={instance.ip}
                    secondary={instance.users.map((u) => u).join(', ')}
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
