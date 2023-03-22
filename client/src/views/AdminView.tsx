import { BruteWithBodyColors } from '@labrute/core';
import { Divider, Paper, Stack } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import catchError from '../utils/catchError';
import Server from '../utils/Server';

const AdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [bruteName, setBruteName] = React.useState('');
  const [brute, setBrute] = React.useState<BruteWithBodyColors | null>(null);

  // Change bruteName
  const changeBruteName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteName(e.target.value);
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

  // Fetch brute when bruteName changes (debounced for 1s)
  useEffect(() => {
    if (!bruteName) return undefined;

    const timeout = setTimeout(() => {
      Server.Brute.get({
        name: bruteName,
        include: { body: true, colors: true },
      }).then((b) => {
        setBrute(b as BruteWithBodyColors);
      }).catch(catchError(Alert));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [Alert, bruteName]);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <FantasyButton color="error" onClick={deleteDailyTournaments}>DELETE DAILY TOURNAMENTS</FantasyButton>
            <FantasyButton color="error" onClick={deleteGlobalTournament}>DELETE GLOBAL TOURNAMENT</FantasyButton>
            <FantasyButton color="warning" onClick={runDailyJob}>RUN DAILY JOB</FantasyButton>
          </Stack>
          <Divider />
          <Text bold h3 smallCaps color="secondary">{t('brute')}</Text>
          <StyledInput
            onChange={changeBruteName}
            value={bruteName}
            sx={{ mr: 2 }}
          />
          {brute && (
            <>
              <Text h2 smallCaps>{brute.name}</Text>
              <BruteComponent brute={brute} sx={{ width: 100 }} />
            </>
          )}
        </Stack>
      </Paper>
    </Page>
  );
};

export default AdminView;
