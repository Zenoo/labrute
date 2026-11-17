import { UserLogsListResponse } from '@labrute/core';
import { UserLogType } from '@labrute/prisma';
import {
  Autocomplete, Button, Chip, Paper, Stack, TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from '../../components/Link';
import { Loader } from '../../components/Loader';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid, useAdminGridModels } from '../../components/admin/AdminGrid';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

const renderLog = (log: UserLogsListResponse['logs'][number]) => {
  switch (log.type) {
    case UserLogType.CONNECT: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> logged in.
        </>
      );
    }

    case UserLogType.DISCONNECT: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> logged out.
        </>
      );
    }

    case UserLogType.GOLD_WIN: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> won {log.gold} gold.
        </>
      );
    }

    case UserLogType.GOLD_LOSS: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> lost {log.gold} gold.
        </>
      );
    }

    case UserLogType.CREATE_BRUTE: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> created the brute <Link to={`/${log.brute?.name}/cell`} target="_blank">{log.brute?.name}</Link>.
        </>
      );
    }

    case UserLogType.RENAME_BRUTE: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> renamed the brute {log.oldName} to <Link to={`/${log.brute?.name}/cell`} target="_blank">{log.brute?.name}</Link>.
        </>
      );
    }

    case UserLogType.SACRIFICE_BRUTE: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> sacrificed the brute {log.oldName}.
        </>
      );
    }

    case UserLogType.BANNED: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> was banned.
        </>
      );
    }

    case UserLogType.TRANSFER_BRUTE: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> transferred the brute {log.brute?.name} to <Link to={`/user/${log.targetUserId}`} target="_blank">{log.targetUserId}</Link>.
        </>
      );
    }

    case UserLogType.RECEIVE_BRUTE: {
      return (
        <>
          <Link to={`/user/${log.userId}`} target="_blank">{log.user.name}</Link> received the brute {log.brute?.name} from <Link to={`/user/${log.targetUserId}`} target="_blank">{log.targetUserId}</Link>.
        </>
      );
    }

    default: {
      console.error('Unknown log type', log);

      return null;
    }
  }
};

export const UserLogView = () => {
  const Alert = useAlert();
  const { user } = useAuth();
  const { userId } = useParams();
  const Server = useServer();

  const [userIds, setUserIds] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const models = useAdminGridModels(() => setPage(1));
  const { query } = models;
  const [result, setResult] = React.useState<UserLogsListResponse | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const [retry, setRetry] = React.useState(0);

  useEffect(() => {
    setUserIds(userId ? [userId] : []);
    setPage(1);
  }, [userId]);

  useEffect(() => {
    setResult(null);
    setFailed(false);

    if (!user?.admin || !userIds.length) {
      setLoading(false);

      return undefined;
    }

    let active = true;

    setLoading(true);
    Server.UserLog.list({
      userIds,
      page,
      grid: query,
    }).then((data) => {
      if (active) {
        setResult(data);
      }
    }).catch((error) => {
      if (active) {
        setFailed(true);
        catchError(Alert, error);
      }
    })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [Alert, user?.admin, userIds, page, query, retry, Server.UserLog]);

  const emptyMessage = result ? 'No matching log entries.' : undefined;

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {user?.admin && (
          <Stack spacing={2}>
            <Text bold h6 color="secondary">User logs</Text>
            <Autocomplete
              multiple
              options={[]}
              value={userIds}
              onChange={(_, value) => {
                setPage(1);
                setUserIds(value);
              }}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) => value.map(
                (option: string, index: number) => {
                  const { key, ...tagProps } = getTagProps({ index });

                  return (
                    <Chip variant="outlined" label={option} key={key} {...tagProps} />
                  );
                },
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="filled"
                  label="User IDs"
                />
              )}
            />
            {loading && <Loader />}
            {failed && (
              <Button onClick={() => setRetry((value) => value + 1)}>
                Unable to load user logs. Retry
              </Button>
            )}
            <AdminGrid
              label="User logs"
              models={models}
              rows={result?.logs ?? []}
              rowKey={(log) => log.id}
              busy={loading}
              paging={{
                page: page - 1,
                hasNext: result?.hasNext ?? false,
                onPageChange: (nextPage) => {
                  if (!loading) {
                    setPage(nextPage + 1);
                  }
                },
              }}
              emptyMessage={userIds.length === 0 ? 'Enter a user ID to view logs.' : emptyMessage}
              columns={[
                {
                  field: 'date',
                  heading: 'Date (UTC)',
                  kind: 'date' as const,
                  render: (log) => dayjs.utc(log.date).format('YYYY-MM-DD HH:mm:ss'),
                },
                {
                  field: 'type',
                  heading: 'Event',
                  kind: 'select',
                  valueOptions: Object.values(UserLogType),
                  render: renderLog,
                },
              ]}
            />
          </Stack>
        )}
      </Paper>
    </AdminPage>
  );
};
