import { UserMultipleAccountsListResponse } from '@labrute/core';
import { List, ListItem, ListItemText, Paper, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const MultipleAccounts = () => {
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
    <Page title="Multiple accounts" headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Multiple accounts</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2}>
          {/* Report list */}
          <List dense>
            {instances.map((instance) => (
              <ListItem
                key={instance.ip}
              >
                <ListItemText
                  primary={instance.ip}
                  secondary={instance.users.map((u) => (
                    <Link key={u} to={`/user/${u}`} target="_blank" sx={{ mr: 1 }}>{u}</Link>
                  ))}
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Paper>
    </Page>
  );
};

export default MultipleAccounts;
