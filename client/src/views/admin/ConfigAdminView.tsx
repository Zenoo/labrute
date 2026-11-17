import { ConfigsListResponse } from '@labrute/core';
import {
  Close, Edit, Visibility,
} from '@mui/icons-material';
import {
  Grid, IconButton, Box, Stack,
  Paper, TextField, Tooltip, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid } from '../../components/admin/AdminGrid';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const ConfigAdminView = () => {
  const Alert = useAlert();
  const Server = useServer();

  const [configs, setConfigs] = useState<(ConfigsListResponse[number] & {
    decrypted?: string;
  })[]>([]);

  const [editing, setEditing] = useState(false);
  const [editingConfigKey, setEditingConfigKey] = useState('');
  const [editingConfigValue, setEditingConfigValue] = useState('');
  const { user } = useAuth();

  // Load configuration on mount
  useEffect(() => {
    if (!user?.admin && !user?.moderator) {
      return;
    }

    Server.Config.list().then((data) => {
      setConfigs(data);
    }).catch(catchError(Alert));
  }, [user, Server.Config, Alert]);

  // Save config
  const save = () => {
    if (!editingConfigKey || !editingConfigValue) {
      return;
    }

    Server.Config.set(editingConfigKey, editingConfigValue).then((updatedConfig) => {
      setEditing(false);
      setEditingConfigKey('');
      setEditingConfigValue('');

      if (updatedConfig.key !== 'CRYPTR_SECRET') {
        setConfigs((prev) => {
          const index = prev.findIndex((c) => c.key === updatedConfig.key);

          if (index === -1) {
            return [...prev, updatedConfig];
          }

          const newConfigs = [...prev];

          newConfigs[index] = updatedConfig;

          return newConfigs;
        });
      }

      Alert.open('success', 'Config saved');
    }).catch(catchError(Alert));
  };

  // Reveal config
  const reveal = (config: ConfigsListResponse[number]) => () => {
    Server.Config.decrypt(config.value).then(({ decrypted }) => {
      setConfigs((prev) => prev.map((c) => (c.key === config.key
        ? {
          ...c,
          decrypted,
        }
        : c)));
      Alert.open('success', 'Config decrypted');
    }).catch(catchError(Alert));
  };

  // Edit config
  const edit = (config: ConfigsListResponse[number]) => () => {
    setEditing(true);
    setEditingConfigKey(config.key);
    setEditingConfigValue('');
  };

  // Delete config
  const deleteConfig = (key: string) => () => {
    Server.Config.delete(key).then(() => {
      setConfigs((prev) => prev.filter((c) => c.key !== key));
      Alert.open('success', 'Config deleted');
    }).catch(catchError(Alert));
  };

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {editing ? (
          <Grid container spacing={2} mr={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Key"
                value={editingConfigKey}
                onChange={(e) => setEditingConfigKey(e.target.value)}
                variant="standard"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Value"
                value={editingConfigValue}
                onChange={(e) => setEditingConfigValue(e.target.value)}
                variant="standard"
                fullWidth
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button color="success" onClick={save} sx={{ width: 1 }}>Save</Button>
            </Grid>
          </Grid>
        ) : (
          <Button color="success" onClick={() => setEditing(true)} sx={{ mb: 1 }}>Add</Button>
        )}
        <AdminGrid
          label="Configuration"
          rows={configs}
          rowKey={(config) => config.key}
          emptyMessage="No matching configuration entries."
          columns={[
            {
              field: 'key',
              heading: 'Key',
              render: (config) => config.key,
            },
            {
              field: 'value',
              heading: 'Value',
              value: (config) => config.decrypted ?? config.value,
              render: (config) => <Box sx={{ wordBreak: 'break-all' }}>{config.decrypted ?? config.value}</Box>,
            },
            {
              field: 'actions',
              heading: 'Actions',
              sortable: false,
              filterable: false,
              align: 'right',
              render: (config) => (
                <Stack direction="row" justifyContent="flex-end">
                  <Tooltip title="Reveal">
                    <IconButton aria-label={`Reveal ${config.key}`} onClick={reveal(config)}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton aria-label={`Edit ${config.key}`} onClick={edit(config)}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton aria-label={`Delete ${config.key}`} onClick={deleteConfig(config.key)}>
                      <Close />
                    </IconButton>
                  </Tooltip>
                </Stack>
              ),
            },
          ]}
        />
      </Paper>
    </AdminPage>
  );
};
