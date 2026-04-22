import { Home } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';

const BruteNotFoundView = () => {
  const { t } = useTranslation(['bruteNotFound', 'global']);

  return (
    <Page
      title={t('title', { ns: 'bruteNotFound' })}
      description={t('desc', { ns: 'bruteNotFound' })}
      headerUrl="/"
    >
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('title', { ns: 'bruteNotFound' })}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Text h4 color="secondary" bold sx={{ mb: 2 }}>
            {t('subtitle', { ns: 'bruteNotFound' })}
          </Text>
          <FantasyButton color="secondary" to="/">
            <Home sx={{ verticalAlign: 'middle', mr: 1 }} />
            {t('home', { ns: 'global' })}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};

export default BruteNotFoundView;
