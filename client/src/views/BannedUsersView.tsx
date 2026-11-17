import { Close } from '@mui/icons-material';
import {
  IconButton, Paper,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AdminPage } from '../components/admin/AdminPage';
import { ServerAdminGrid } from '../components/admin/AdminGrid';
import { Text } from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useConfirm } from '../hooks/useConfirm';
import { useServer } from '../hooks/useServer';
import { catchError } from '../utils/catchError';
import { Link } from '../components/Link';

export const BannedUsersView = () => {
  const { t } = useTranslation('bannedUsers');
  const Alert = useAlert();
  const { user: admin } = useAuth();
  const Confirm = useConfirm();
  const Server = useServer();

  const [refresh, setRefresh] = useState(0);

  // Unban user
  const unbanUser = useCallback((id: string) => () => {
    Confirm.open(t('unban'), t('unbanConfirm'), () => {
      Server.User.unban({ userId: id }).then(() => {
        Alert.open('success', t('unbanSuccess'));
        setRefresh((current) => current + 1);
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, Server.User, t]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {admin?.admin ? (
          <ServerAdminGrid
            label="Banned users"
            load={Server.Admin.bannedUsers}
            refresh={refresh}
            rowKey={(entry) => entry.id}
            emptyMessage="No matching banned users."
            columns={[
              {
                field: 'name',
                heading: 'User',
                render: (entry) => <Link to={`/admin-panel/user/${entry.id}`}>{entry.name}</Link>,
              },
              {
                field: 'id',
                heading: 'User ID',
                kind: 'id' as const,
                render: (entry) => entry.id,
              },
              {
                field: 'bannedAt',
                heading: 'Banned on',
                kind: 'date' as const,
                render: (entry) => entry.bannedAt ? dayjs.utc(entry.bannedAt).format('DD/MM/YYYY') : 'Unknown',
              },
              {
                field: 'banReason',
                heading: 'Reason',
                render: (entry) => entry.banReason ?? 'Unknown',
              },
              {
                field: 'actions',
                heading: 'Actions',
                sortable: false,
                filterable: false,
                align: 'right',
                render: (entry) => (
                  <IconButton aria-label={`Unban ${entry.name}`} onClick={unbanUser(entry.id)}>
                    <Close />
                  </IconButton>
                ),
              },
            ]}
          />
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </AdminPage>
  );
};
