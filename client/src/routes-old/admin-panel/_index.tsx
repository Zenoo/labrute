import { FightModifier } from '@labrute/prisma';
import { Box, Divider, MenuItem, Alert as MuiAlert, Paper, Select, Stack, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../../components/FantasyButton';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const AdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [bruteId, setBruteId] = useState('');
  const [globalTournamentValid, setGlobalTournamentValid] = useState(true);
  const [nextModifiers, setNextModifiers] = useState<FightModifier[]>([]);

  // Change bruteId
  const changeBruteId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteId(e.target.value);
  }, []);

  // Delete daily tournaments
  const deleteDailyTournaments = useCallback(() => {
    Server.Tournament.deleteDaily().then(() => {
      Alert.open('success', 'Daily tournaments deleted');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Delete global tournament
  const deleteGlobalTournament = useCallback(() => {
    Server.Tournament.deleteGlobal().then(() => {
      Alert.open('success', 'Global tournament deleted');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Run daily job
  const runDailyJob = useCallback(() => {
    Server.User.runDailyJob().then(() => {
      Alert.open('success', 'Daily job done');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Fetch global tournament status
  useEffect(() => {
    Server.Tournament.isGlobalTournamentValid().then(({ isValid }) => {
      setGlobalTournamentValid(isValid);
    }).catch(catchError(Alert));
  }, [Alert]);

  // Fetch next modifiers
  useEffect(() => {
    Server.User.getNextModifiers().then((modifiers) => {
      setNextModifiers(modifiers);
    }).catch(catchError(Alert));
  }, [Alert]);

  // Save next modifiers
  const saveNextModifiers = useCallback(() => {
    Server.User.setNextModifiers(nextModifiers).then(() => {
      Alert.open('success', 'Next modifiers saved');
    }).catch(catchError(Alert));
  }, [Alert, nextModifiers]);

  // Restore brute
  const restoreBrute = useCallback(() => {
    if (!bruteId) return;

    Server.Brute.restore(bruteId).then(() => {
      Alert.open('success', 'Brute restored');
    }).catch(catchError(Alert));
  }, [Alert, bruteId]);

  return (
    <Page title={t('adminPanel')} headerUrl="/">
      {!globalTournamentValid && (
        <MuiAlert severity="warning" variant="filled">
          <Text h5>Global tournament malformed</Text>
        </MuiAlert>
      )}
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 1 }}>
            <FantasyButton color="error" onClick={deleteDailyTournaments}>DELETE DAILY TOURNAMENTS</FantasyButton>
            <FantasyButton color="error" onClick={deleteGlobalTournament}>DELETE GLOBAL TOURNAMENT</FantasyButton>
            <FantasyButton color="warning" onClick={runDailyJob}>RUN DAILY JOB</FantasyButton>
            <FantasyButton color="secondary" to="/admin-panel/user">USER ADMIN</FantasyButton>
            <FantasyButton color="primary" to="/admin-panel/report">REPORTS</FantasyButton>
            <FantasyButton color="error" to="/admin-panel/banned-users">BANLIST</FantasyButton>
            <FantasyButton color="warning" to="/admin-panel/multiple-accounts">MULTIS</FantasyButton>
            <FantasyButton color="error" to="/admin-panel/config">CONFIG</FantasyButton>
            <FantasyButton color="warning" to="/admin-panel/user/logs/">USER LOGS</FantasyButton>
          </Stack>
          <Divider />
          <Text bold h3 smallCaps color="secondary">Next modifiers</Text>
          <Select
            variant="standard"
            multiple
            value={nextModifiers}
            onChange={({ target: { value } }) => setNextModifiers(typeof value === 'string' ? value.split(',') as FightModifier[] : value)}
            sx={{ m: 1 }}
          >
            {Object.values(FightModifier).map((modifier) => (
              <MenuItem key={modifier} value={modifier}>{t(`modifier.${modifier}`)}</MenuItem>
            ))}
          </Select>
          <FantasyButton color="success" onClick={saveNextModifiers}>Save</FantasyButton>
          <Divider />
          <Text bold h3 smallCaps color="secondary">Restore brute with ID</Text>
          <Box sx={{ display: 'flex' }}>
            <TextField
              onChange={changeBruteId}
              value={bruteId}
              sx={{ mr: 2 }}
            />
            <FantasyButton color="success" onClick={restoreBrute}>Restore</FantasyButton>
          </Box>
        </Stack>

      </Paper>
    </Page>
  );
};

export default AdminView;
