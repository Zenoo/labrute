import {
  IconButton, Paper, Stack, TextField, Tooltip, Button,
} from '@mui/material';
import { AdminPage } from '../../components/admin/AdminPage';
import { ServerAdminGrid } from '../../components/admin/AdminGrid';
import React, { useState } from 'react';
import { catchError } from '../../utils/catchError';
import { useAlert } from '../../hooks/useAlert';
import { useServer } from '../../hooks/useServer';
import { Delete } from '@mui/icons-material';

export const BannedWordsAdminView = () => {
  const Alert = useAlert();
  const Server = useServer();

  const [refresh, setRefresh] = useState(0);
  const [newWord, setNewWord] = useState('');

  const banWord = () => {
    if (!newWord.trim()) {
      return;
    }

    Server.Brute.addBannedWord({ word: newWord.trim() })
      .then(() => {
        Alert.open('success', 'Word banned successfully');
        setNewWord('');
        setRefresh((current) => current + 1);
      })
      .catch(catchError(Alert));
  };

  const unbanWord = (id: string) => {
    Server.Brute.removeBannedWord({ id })
      .then(() => {
        Alert.open('success', 'Word unbanned successfully');
        setRefresh((current) => current + 1);
      })
      .catch(catchError(Alert));
  };

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Stack
            component="form"
            direction={{
              xs: 'column',
              sm: 'row',
            }}
            spacing={1}
            onSubmit={(event) => {
              event.preventDefault();
              banWord();
            }}
          >
            <TextField
              label="Word to ban"
              value={newWord}
              onChange={(event) => setNewWord(event.target.value)}
              fullWidth
            />
            <Button type="submit" color="error" disabled={!newWord.trim()} sx={{ flexShrink: 0 }}>
              Ban word
            </Button>
          </Stack>
          <ServerAdminGrid
            label="Banned words"
            load={Server.Admin.bannedWords}
            refresh={refresh}
            rowKey={(entry) => entry.id}
            emptyMessage="No matching banned words."
            columns={[
              {
                field: 'word',
                heading: 'Word',
                render: (entry) => entry.word,
              },
              {
                field: 'actions',
                heading: 'Actions',
                sortable: false,
                filterable: false,
                align: 'right',
                render: (entry) => (
                  <Tooltip title="Unban word">
                    <IconButton aria-label={`Unban ${entry.word}`} onClick={() => unbanWord(entry.id)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                ),
              },
            ]}
          />
        </Stack>
      </Paper>
    </AdminPage>
  );
};
