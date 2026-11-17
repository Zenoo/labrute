import { KnownFingerprintListResponse } from '@labrute/core';
import { Add, Close } from '@mui/icons-material';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle,
  IconButton, Paper, Stack, TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { AdminPage } from '../components/admin/AdminPage';
import { AdminGrid } from '../components/admin/AdminGrid';
import { Text } from '../components/Text';
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
    if (!admin?.admin) {
      return;
    }

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
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 2,
            }}>
              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => setAddDialogOpen(true)}
              >
                Add Known Fingerprint
              </Button>
            </Box>
            <AdminGrid
              label="Known fingerprints"
              rows={fingerprints}
              rowKey={(entry) => entry.id}
              emptyMessage="No matching known fingerprints."
              columns={[
                {
                  field: 'id',
                  heading: 'Fingerprint',
                  render: (entry) => entry.id,
                },
                {
                  field: 'description',
                  heading: 'Description',
                  render: (entry) => entry.description || 'No description',
                },
                {
                  field: 'createdAt',
                  heading: 'Added on',
                  kind: 'date' as const,
                  render: (entry) => dayjs.utc(entry.createdAt).format('DD/MM/YYYY'),
                },
                {
                  field: 'actions',
                  heading: 'Actions',
                  sortable: false,
                  filterable: false,
                  align: 'right',
                  render: (entry) => (
                    <IconButton aria-label="Remove known fingerprint" onClick={removeFingerprint(entry.id)}>
                      <Close />
                    </IconButton>
                  ),
                },
              ]}
            />
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
    </AdminPage>
  );
};
