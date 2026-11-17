import {
  Autocomplete, Chip, Paper, Stack, TextField,
  Button,
} from '@mui/material';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid } from '../../components/admin/AdminGrid';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { Loader } from '../../components/Loader';
import { GetSharedBrowserResponse, isUuid } from '@labrute/core';

export const SharedBrowserView = () => {
  const Alert = useAlert();
  const Server = useServer();

  const [browserId, setBrowserId] = useState('');
  const [userIds, setUserIds] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<GetSharedBrowserResponse['history']>([]);
  const selectedBrowser = useRef('');
  const requestVersion = useRef(0);

  const updateData = useCallback(() => {
    if (selectedBrowser.current !== browserId) {
      return;
    }

    const version = ++requestVersion.current;

    setLoading(true);
    Server.User.getSharedBrowser(browserId).then((data) => {
      if (requestVersion.current !== version) {
        return;
      }

      const {
        users, description: desc, history: actions,
      } = data;

      setUserIds(users.map((user) => user.id));
      setDescription(desc ?? '');
      setHistory(actions);
      setLoading(false);
    }).catch((error) => {
      if (requestVersion.current !== version) {
        return;
      }

      setUserIds([]);
      setDescription('');
      setHistory([]);
      catchError(Alert, error);
      setLoading(false);
    });
  }, [Alert, Server.User, browserId]);

  // Fetch data when browserId changes
  useEffect(() => {
    if (browserId.length !== 36 || !isUuid(browserId)) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      updateData();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [Alert, Server.User, browserId, updateData]);

  const changeBrowserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase();

    selectedBrowser.current = value;
    requestVersion.current++;
    setBrowserId(value);
    setUserIds([]);
    setDescription('');
    setHistory([]);
    setLoading(value.length === 36 && isUuid(value));
  }, []);

  // Save shared browser
  const saveSharedBrowser = useCallback(() => {
    if (!browserId) {
      return;
    }

    if (!description.trim()) {
      return;
    }

    Server.User.editSharedBrowser({
      id: browserId,
      users: userIds,
      description,
    }).then(() => {
      Alert.open('success', 'Shared browser saved');
      updateData();
    }).catch(catchError(Alert));
  }, [Alert, Server.User, browserId, userIds, description, updateData]);

  // Delete shared browser
  const deleteSharedBrowser = useCallback(() => {
    if (!browserId) {
      return;
    }

    Server.User.deleteSharedBrowser(browserId).then(() => {
      Alert.open('success', 'Shared browser deleted');
      updateData();
    }).catch(catchError(Alert));
  }, [Alert, Server.User, browserId, updateData]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        <Stack spacing={2}>
          <Text bold h6 color="secondary">Shared Browser</Text>
          <TextField
            label="Browser ID"
            value={browserId}
            onChange={changeBrowserId}
            fullWidth
          />
          {loading ? <Loader /> : (
            <>
              <Autocomplete
                multiple
                options={[]}
                value={userIds}
                onChange={(_, value) => {
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
              <TextField
                label="Approval / revocation reason"
                required
                inputProps={{ maxLength: 500 }}
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                fullWidth
              />
            </>)}
          <Button
            color="success"
            onClick={saveSharedBrowser}
            disabled={
              loading || !description.trim() || browserId.length !== 36 || !isUuid(browserId)
            }
          >
            Save
          </Button>
          <Button
            color="error"
            onClick={deleteSharedBrowser}
            disabled={loading || browserId.length !== 36 || !isUuid(browserId)}
          >
            Delete
          </Button>
          <Text bold>Review history (latest 100 decisions)</Text>
          <AdminGrid
            key={browserId}
            label="Shared browser review history"
            rows={history}
            rowKey={(entry) => entry.id}
            busy={loading}
            emptyMessage={loading ? 'Loading review history...' : 'No matching review decisions.'}
            columns={[
              {
                field: 'action',
                heading: 'Action',
                render: (entry) => entry.action,
              },
              {
                field: 'subjectId',
                heading: 'Account or subject',
                value: (entry) => entry.userId ?? entry.subjectId,
                render: (entry) => entry.userId ?? entry.subjectId,
              },
              {
                field: 'reason',
                heading: 'Reason',
                render: (entry) => entry.reason,
              },
              {
                field: 'actorId',
                heading: 'Reviewer',
                render: (entry) => entry.actorId ?? 'Legacy / unknown reviewer',
              },
              {
                field: 'createdAt',
                heading: 'Date',
                kind: 'date',
                value: (entry) => new Date(entry.createdAt),
                render: (entry) => new Date(entry.createdAt).toLocaleString(),
              },
            ]}
          />
        </Stack>
      </Paper>
    </AdminPage>
  );
};
