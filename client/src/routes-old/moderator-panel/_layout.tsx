import { Box, Grid, Paper, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAuth } from '../../hooks/useAuth';

/**
 * Component that restricts access to moderator users
 */
const ModeratorLayout = () => {
  const { user, authing } = useAuth();
  const { t } = useTranslation();
  const { palette: { mode } } = useTheme();

  const moderator = user?.moderator || user?.admin;

  return moderator ? (
    <Outlet />
  ) : authing ? null : (
    <Page title={t('MyBrute')} headerUrl="/">
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('unauthorized')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3} order={{ xs: 2, md: 1 }}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Text bold>{t('unauthorized.desc')}</Text>
          </Grid>
          <Grid item xs={6} md={3} order={3}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export default ModeratorLayout;
