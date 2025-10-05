import { ConfigsListResponse } from '@labrute/core';
import { Close, Edit, Visibility } from '@mui/icons-material';
import { Grid, IconButton, List, ListItem, ListItemText, Paper, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FantasyButton from '../../components/FantasyButton';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const ConfigAdminView = () => {
  const Alert = useAlert();

  const [configs, setConfigs] = useState<ConfigsListResponse>([]);
  const [editing, setEditing] = useState(false);
  const [editingConfigKey, setEditingConfigKey] = useState('');
  const [editingConfigValue, setEditingConfigValue] = useState('');
  const { user } = useAuth();

  // Trigger reports fetch on page load
  useEffect(() => {
    if (!user?.admin && !user?.moderator) return;

    Server.Config.list().then((data) => {
      setConfigs(data);
    }).catch(catchError(Alert));
  }, [user, Alert]);

  // Save config
  const save = () => {
    if (!editingConfigKey || !editingConfigValue) return;

    Server.Config.set(editingConfigKey, editingConfigValue).then((updatedConfig) => {
      setEditing(false);
      setEditingConfigKey('');
      setEditingConfigValue('');

      if (updatedConfig.key !== 'CRYPTR_SECRET') {
        setConfigs((prev) => {
          const index = prev.findIndex((c) => c.key === updatedConfig.key);
          if (index === -1) return [...prev, updatedConfig];

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
        ? { ...c, value: decrypted }
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
    <Page title="Config admin panel" headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Config</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
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
              <FantasyButton color="success" onClick={save} sx={{ width: 1 }}>Save</FantasyButton>
            </Grid>
          </Grid>
        ) : (
          <FantasyButton color="success" onClick={() => setEditing(true)}>Add</FantasyButton>
        )}
        {/* Config list */}
        <List dense>
          {configs.map((config) => (
            <ListItem
              key={config.key}
              secondaryAction={(
                <>
                  <Tooltip title="Reveal">
                    <IconButton onClick={reveal(config)}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton onClick={edit(config)}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton edge="end" onClick={deleteConfig(config.key)}>
                      <Close />
                    </IconButton>
                  </Tooltip>
                </>
              )}
            >
              <ListItemText
                primary={config.key}
                secondary={config.value}
                secondaryTypographyProps={{ sx: { wordBreak: 'break-all', mr: 8 } }}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Page>
  );
};

export default ConfigAdminView;
