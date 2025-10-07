import { Home } from '@mui/icons-material';
import { Box, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';

const NotFoundView = () => {
  const { t } = useTranslation();

  return (
    <Page title={t('notFound.title')} description={t('notFound.subtitle')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('notFound.title')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        >
          <Text h4 color="secondary" bold sx={{ mb: 2 }}>
            {t('notFound.subtitle')}
          </Text>
          <FantasyButton color="secondary" to="/">
            <Home sx={{ verticalAlign: 'middle', mr: 1 }} />
            {t('home')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};

export default NotFoundView;
