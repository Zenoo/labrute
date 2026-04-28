import { KnownFingerprintListResponse } from '@labrute/core';
import { Add, Close } from '@mui/icons-material';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  IconButton, List, ListItem, ListItemText, Paper, Stack, TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useConfirm } from '../hooks/useConfirm';
import { useServer } from '../hooks/useServer';
import { catchError } from '../utils/catchError';

export const KnownFingerprintsView = () => {
  const Alert = useAlert();
  const { user: admin } = useAuth();
  const Confirm = useConfirm();
  const Server = useServer();

  const [fingerprints, setFingerprints] = useState<KnownFingerprintListResponse>([]);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [newFingerprint, setNewFingerprint] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Fetch fingerprints on mount
  useEffect(() => {
    if (!admin?.admin) return;

    Server.User.knownFingerprintsList().then((data) => {
      setFingerprints(data);
    }).catch(catchError(Alert));
  }, [admin, Alert, Server.User]);

  // Remove fingerprint
  const removeFingerprint = useCallback((fingerprint: string) => () => {
    Confirm.open(
      'Remove Known Fingerprint',
      `Are you sure you want to remove this fingerprint from the known list? (${fingerprint})`,
      () => {
        Server.User.removeKnownFingerprint({ fingerprint }).then(() => {
          Alert.open('success', 'Fingerprint removed from known list');
          setFingerprints((prev) => prev.filter((fp) => fp.id !== fingerprint));
        }).catch(catchError(Alert));
      },
    );
  }, [Alert, Confirm, Server.User]);

  // Add fingerprint
  const handleAddFingerprint = useCallback(() => {
    if (!newFingerprint.trim()) {
      Alert.open('error', 'Please enter a fingerprint');
      return;
    }

    Server.User.addKnownFingerprint({
      fingerprint: newFingerprint.trim(),
      description: newDescription.trim() || undefined,
    }).then(() => {
      Alert.open('success', 'Fingerprint added to known list');
      setAddDialogOpen(false);
      setNewFingerprint('');
      setNewDescription('');
      // Refresh list
      Server.User.knownFingerprintsList().then((data) => {
        setFingerprints(data);
      }).catch(catchError(Alert));
    }).catch(catchError(Alert));
  }, [Alert, Server.User, newFingerprint, newDescription]);

  return (
    <Page title="Known Fingerprints" headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">Known Fingerprints</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setAddDialogOpen(true)}
              >
                Add Known Fingerprint
              </Button>
            </Box>
            {/* Fingerprint list */}
            <List dense>
              {fingerprints.map((fp) => (
                <ListItem
                  key={fp.id}
                  secondaryAction={(
                    <IconButton edge="end" onClick={removeFingerprint(fp.id)}>
                      <Close />
                    </IconButton>
                  )}
                >
                  <ListItemText
                    primary={`${fp.id.slice(0, 40)}${fp.id.length > 40 ? '...' : ''}`}
                    secondary={`${fp.description || 'No description'} - Added: ${dayjs.utc(fp.createdAt).format('DD/MM/YYYY')}`}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>

      {/* Add Dialog */}
      <Dialog open={addDialogOpen} onClose={() => setAddDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Add Known Fingerprint</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Fingerprint"
              fullWidth
              value={newFingerprint}
              onChange={(e) => setNewFingerprint(e.target.value)}
              placeholder="Enter the fingerprint hash"
              multiline
              rows={3}
            />
            <TextField
              label="Description (optional)"
              fullWidth
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="e.g., Common iOS devices, Generic Android fingerprint"
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddDialogOpen(false)}>Cancel</Button>
          <Button onClick={handleAddFingerprint} variant="contained">Add</Button>
        </DialogActions>
      </Dialog>
    </Page>
  );
};
