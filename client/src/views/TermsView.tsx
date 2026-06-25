import {
  Box, Grid, List, ListItem, ListItemText, Paper, useTheme
} from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../components/Page';
import { Text } from '../components/Text';
import { useServer } from '../hooks/useServer';
import { FantasyButton } from '../components/FantasyButton';
import { useNavigate } from 'react-router-dom';
import { catchError } from '../utils/catchError';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';

export const TermsView = () => {
  const { t } = useTranslation('terms');
  const { palette: { mode } } = useTheme();
  const Server = useServer();
  const navigate = useNavigate();
  const Alert = useAlert();
  const { user, updateData } = useAuth();

  const acceptTerms = async () => {
    if (!user) {
      return;
    }

    try {
      await Server.User.acceptTerms();
      Alert.open('success', t('termsAccepted'));
      updateData({
        ...user,
        termsAccepted: true,
      })
      navigate('/');
    } catch (error) {
      catchError(Alert, error);
    }
  }

  return (
    <Page
      title={t('title')}
      headerUrl="/"
    >
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('title')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={6} md={3} order={{ xs: 2, md: 1 }}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <Text>{t('description')}</Text>
            <List dense>
              <ListItem>
                <ListItemText primary={t('multipleAccounts')} />
              </ListItem>
              <ListItem>
                <ListItemText primary={t('bots')} />
              </ListItem>
              <ListItem>
                <ListItemText primary={t('bugAbuse')} />
              </ListItem>
            </List>
            <FantasyButton color="success" onClick={acceptTerms}>{t('accept')}</FantasyButton>
          </Grid>
          <Grid item xs={6} md={3} order={3}>
            <Box component="img" src={`/images${mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};
