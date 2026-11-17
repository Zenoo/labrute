import { Link } from '@mui/material';
import React from 'react';
import dayjs from 'dayjs';
import { Link as RouterLink, useNavigate } from 'react-router';
import { AdminPage } from '../../components/admin/AdminPage';
import { ServerAdminGrid } from '../../components/admin/AdminGrid';
import { useServer } from '../../hooks/useServer';

type Directory = 'user' | 'brute' | 'clan';

export const AdminDirectoryView = ({ directory }: { directory: Directory }) => {
  const Server = useServer();
  const navigate = useNavigate();
  const detailPath = (id: string) => `/admin-panel/${directory}/${id}`;
  const onOpen = ({ id }: { id: string }) => navigate(detailPath(id));

  const nameAndId = [
    {
      field: 'name',
      heading: 'Name',
      render: (row: { id: string; name: string }, params: { tabIndex: number }) => (
        <Link
          component={RouterLink}
          to={detailPath(row.id)}
          tabIndex={params.tabIndex}
          onClick={(event) => event.stopPropagation()}
        >
          {row.name}
        </Link>
      ),
    },
    {
      field: 'id',
      heading: 'ID',
      kind: 'id' as const,
      minWidth: 280,
      render: ({ id }: { id: string }) => id,
    },
  ];

  return (
    <AdminPage>
      {directory === 'user' && (
      <ServerAdminGrid
        label="Users"
        load={Server.Admin.users}
        onOpen={onOpen}
        columns={[
          ...nameAndId,
          {
            field: 'lastSeen',
            heading: 'Last seen (UTC)',
            kind: 'date' as const,
            render: (row) => dayjs.utc(row.lastSeen).format('DD/MM/YYYY'),
          },
          {
            field: 'bannedAt',
            heading: 'Banned on (UTC)',
            kind: 'date',
            render: (row) => row.bannedAt ? dayjs.utc(row.bannedAt).format('DD/MM/YYYY') : 'Active',
          },
        ]}
      />
      )}
      {directory === 'brute' && (
      <ServerAdminGrid
        label="Brutes"
        load={Server.Admin.brutes}
        onOpen={onOpen}
        columns={[
          ...nameAndId,
          {
            field: 'level',
            heading: 'Level',
            kind: 'number' as const,
            align: 'right',
            render: (row) => row.level,
          },
          {
            field: 'deletedAt',
            heading: 'Deleted on (UTC)',
            kind: 'date',
            render: (row) => row.deletedAt ? dayjs.utc(row.deletedAt).format('DD/MM/YYYY') : 'Active',
          },
        ]}
      />
      )}
      {directory === 'clan' && (
      <ServerAdminGrid
        label="Clans"
        load={Server.Admin.clans}
        onOpen={onOpen}
        columns={[
          ...nameAndId,
          {
            field: 'points',
            heading: 'Points',
            kind: 'number' as const,
            align: 'right',
            render: (row) => row.points,
          },
          {
            field: 'deletedAt',
            heading: 'Deleted on (UTC)',
            kind: 'date',
            render: (row) => row.deletedAt ? dayjs.utc(row.deletedAt).format('DD/MM/YYYY') : 'Active',
          },
        ]}
      />
      )}
    </AdminPage>
  );
};
