import { UserLogsListResponse } from '@labrute/core';
import { UserLogType } from '@labrute/prisma';
import { Autocomplete, Chip, Paper, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const renderLog = (log: UserLogsListResponse[number]) => {
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
    default: {
      console.error('Unknown log type', log);
      return null;
    }
  }
};

const UserLogView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user } = useAuth();
  const { userId } = useParams();

  const [userIds, setUserIds] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(1);
  const [logs, setLogs] = React.useState<UserLogsListResponse>([]);
  const [loading, setLoading] = React.useState(false);

  // Add userId from URL
  useEffect(() => {
    if (userId) {
      setUserIds([userId]);
    }
  }, [userId]);

  // Trigger logs fetch when userIds changes (debounced for 1s)
  useEffect(() => {
    if (!userIds.length) {
      setLogs([]);
      setPage(1);
      return () => { };
    }

    const timeout = setTimeout(() => {
      setLoading(true);
      Server.UserLog.list({ userIds, page }).then((l) => {
        setLogs((prev) => [...prev, ...l]);
      }).catch(catchError(Alert)).finally(() => {
        setLoading(false);
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, [Alert, userIds, page]);

  return (
    <Page title={t('adminPanel')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {user && (
          <Stack spacing={2}>
            <Text bold h3 smallCaps color="secondary">User logs</Text>
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
            {loading ? <Loader /> : (
              <Stack>
                {logs.map((log) => (
                  <Text key={log.id} body2>
                    <Text component="span" bold body2 key={log.id}>[{dayjs.utc(log.date).format('YYYY-MM-DD HH:mm:ss')}]</Text>
                    {' '}
                    {renderLog(log)}
                  </Text>
                ))}
                {/* Load more */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <FantasyButton
                    color="success"
                    onClick={() => setPage((p) => p + 1)}
                    disabled={loading}
                  >
                    Load more
                  </FantasyButton>
                </Box>
              </Stack>
            )}
          </Stack>
        )}
      </Paper>
    </Page>
  );
};

export default UserLogView;
