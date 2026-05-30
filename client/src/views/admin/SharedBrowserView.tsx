import {
  Autocomplete, Chip, Paper, Stack, TextField
} from '@mui/material';
import React, {
  useCallback, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { FantasyButton } from '../../components/FantasyButton';
import { Page } from '../../components/Page';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import { Loader } from '../../components/Loader';

export const SharedBrowserView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const Server = useServer();

  const [browserId, setBrowserId] = useState('');
  const [userIds, setUserIds] = useState<string[]>([]);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const updateData = useCallback(() => {
    setLoading(true);
    Server.User.getSharedBrowser(browserId).then(({ users, description: desc }) => {
      setUserIds(users.map((user) => user.id));
      setDescription(desc ?? '');
      setLoading(false);
    }).catch((error) => {
      setUserIds([]);
      setDescription('');
      catchError(Alert, error);
      setLoading(false);
    });
  }, [Alert, Server.User, browserId]);

  // Fetch data when browserId changes
  useEffect(() => {
    if (!browserId) return undefined;

    const timeout = setTimeout(() => {
      updateData();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [Alert, Server.User, browserId, updateData]);

  const changeBrowserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBrowserId(e.target.value.trim());
  }, []);

  // Save shared browser
  const saveSharedBrowser = useCallback(() => {
    if (!browserId) return;
    if (userIds.length === 0) return;

    Server.User.editSharedBrowser({
      id: browserId,
      users: userIds,
      description,
    }).then(() => {
      Alert.open('success', 'Shared browser saved');
    }).catch(catchError(Alert));
  }, [Alert, Server.User, browserId, userIds, description]);

  // Delete shared browser
  const deleteSharedBrowser = useCallback(() => {
    if (!browserId) return;

    Server.User.deleteSharedBrowser(browserId).then(() => {
      Alert.open('success', 'Shared browser deleted');
      updateData();
    }).catch(catchError(Alert));
  }, [Alert, Server.User, browserId, updateData]);

  return (
    <Page title={t('adminPanel')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2}>
          <Text bold h3 smallCaps color="secondary">Shared Browser</Text>
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
                label="Description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                fullWidth
              />
            </>)}
          <FantasyButton color="success" onClick={saveSharedBrowser}>Save</FantasyButton>
          <FantasyButton color="error" onClick={deleteSharedBrowser}>Delete</FantasyButton>
        </Stack>
      </Paper>
    </Page>
  );
};
