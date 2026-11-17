import { keys, Modifiers } from '@labrute/core';
import { FightModifier } from '@labrute/prisma';
import {
  Alert as MuiAlert, Button, Card, CardActionArea, CardContent,
  Chip, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router';
import { AdminPage } from '../../components/admin/AdminPage';
import { useAlert } from '../../hooks/useAlert';
import { useConfirm } from '../../hooks/useConfirm';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

const shortcuts = [
  {
    title: 'Reports',
    path: 'report',
    description: 'Review reported names and resolve moderation requests.',
  },
  {
    title: 'Users',
    path: 'user',
    description: 'Find accounts, review sanctions and manage inventory.',
  },
  {
    title: 'Brutes',
    path: 'brute',
    description: 'Inspect brutes, grant XP and edit their attributes.',
  },
  {
    title: 'Multiple accounts',
    path: 'multiple-accounts',
    description: 'Review evidence and account appeals.',
  },
];

export const AdminView = () => {
  const { t } = useTranslation('admin');
  const Alert = useAlert();
  const Confirm = useConfirm();
  const Server = useServer();
  const [globalTournamentValid, setGlobalTournamentValid] = useState<boolean | null>(null);
  const [nextModifiers, setNextModifiers] = useState<FightModifier[]>([]);
  const [modifiersLoaded, setModifiersLoaded] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);

  useEffect(() => {
    Server.Tournament.isGlobalTournamentValid().then(({ isValid }) => {
      setGlobalTournamentValid(isValid);
    }).catch(catchError(Alert));

    Server.User.getNextModifiers().then((modifiers) => {
      setNextModifiers(keys(modifiers));
      setModifiersLoaded(true);
    }).catch(catchError(Alert));
  }, [Alert, Server.Tournament, Server.User]);

  const run = async (label: string, action: () => Promise<unknown>) => {
    setBusy(label);

    try {
      await action();
      Alert.open('success', `${label}: complete`);
    } catch (error) {
      catchError(Alert, error);
    } finally {
      setBusy(null);
    }
  };

  const operations = [
    {
      label: 'Delete daily tournaments',
      description: 'Delete the current daily tournaments. This cannot be undone.',
      action: () => Server.Tournament.deleteDaily(),
    },
    {
      label: 'Delete global tournament',
      description: 'Delete the current global tournament. This cannot be undone.',
      action: () => Server.Tournament.deleteGlobal(),
    },
    {
      label: 'Run daily job',
      description: 'Run the daily maintenance job now, including its normal rewards and event processing.',
      action: () => Server.User.runDailyJob(),
    },
  ];

  return (
    <AdminPage>
      <Grid container spacing={2}>
        {shortcuts.map((shortcut) => (
          <Grid item xs={12} sm={6} xl={3} key={shortcut.path}>
            <Card sx={{
              p: 0,
              height: '100%',
            }}>
              <CardActionArea component={RouterLink} to={`/admin-panel/${shortcut.path}`} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{shortcut.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{shortcut.description}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Paper>
        <Stack spacing={2}>
          <Typography variant="h6">Tournament health</Typography>
          <Chip
            sx={{ alignSelf: 'flex-start' }}
            color={globalTournamentValid === false ? 'error' : 'default'}
            label={globalTournamentValid === null ? 'Status unavailable' : 'Global tournament checked'}
          />
          {globalTournamentValid === false && <MuiAlert severity="warning">Global tournament malformed</MuiAlert>}
          {globalTournamentValid === true && <MuiAlert severity="success">Global tournament is valid.</MuiAlert>}
        </Stack>
      </Paper>
      <Paper>
        <Stack spacing={2}>
          <Typography variant="h6">Next daily modifiers</Typography>
          <Typography variant="body2" color="text.secondary">Choose the modifiers to apply during the next daily job.</Typography>
          <FormControl fullWidth disabled={!modifiersLoaded || !!busy}>
            <InputLabel id="next-modifiers-label">Modifiers</InputLabel>
            <Select
              labelId="next-modifiers-label"
              label="Modifiers"
              multiple
              value={nextModifiers}
              onChange={({ target: { value } }) => setNextModifiers(typeof value === 'string' ? value.split(',') as FightModifier[] : value)}
              renderValue={(selected) => selected.map((modifier) => t(`modifier.${modifier}`)).join(', ')}
            >
              {Object.values(FightModifier).map((modifier) => (
                <MenuItem key={modifier} value={modifier}>{t(`modifier.${modifier}`)}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            disabled={!modifiersLoaded || !!busy}
            sx={{ alignSelf: 'flex-start' }}
            onClick={() => {
              void run('Save modifiers', () => Server.User.setNextModifiers(
                nextModifiers.reduce<Modifiers>((result, modifier) => {
                  result[modifier] = true;

                  return result;
                }, {}),
              ));
            }}
          >Save modifiers</Button>
        </Stack>
      </Paper>
      <Paper sx={{
        border: 1,
        borderColor: 'error.main',
      }}>
        <Stack spacing={2}>
          <Typography variant="h6">Maintenance</Typography>
          <MuiAlert severity="warning">These operations affect the entire game. Review the confirmation before continuing.</MuiAlert>
          <Stack direction={{
            xs: 'column',
            sm: 'row',
          }} useFlexGap flexWrap="wrap" gap={2}>
            {operations.map((operation) => (
              <Button
                key={operation.label}
                color="error"
                disabled={!!busy}
                onClick={() => Confirm.open(
                  operation.label,
                  operation.description,
                  () => run(operation.label, operation.action),
                )}
              >{busy === operation.label ? 'Working...' : operation.label}</Button>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </AdminPage>
  );
};
