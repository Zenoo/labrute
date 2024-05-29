import { Box, Grid, Paper, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import Server from '../utils/Server';
import useStateAsync from '../hooks/useStateAsync';

const GeneratingView = () => {
  const { t } = useTranslation();
  const { palette: { mode } } = useTheme();

  // Get server state
  const { data: serverState, reload } = useStateAsync(null, Server.isReady, undefined);

  // Check server state every minute
  useEffect(() => {
    const interval = setInterval(() => {
      reload();
    }, 60000);
    return () => clearInterval(interval);
  }, [reload]);

  // Redirect to home when server is ready
  useEffect(() => {
    if (serverState === null) return;

    if (serverState.ready) {
      window.location.href = '/';
    }
  }, [serverState]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('pleaseWait')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3} order={{ xs: 2, md: 1 }}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Text bold>{t('generatingTournaments')}</Text>
          </Grid>
          <Grid item xs={6} md={3} order={3}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export default GeneratingView;
