import { Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../../components/Page';
import Text from '../../components/Text';

export const EventHistoryView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  return (
    <Page title={`${t('TODO')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('TODO')}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        px: 0,
        overflowX: 'auto',
      }}
      >
        TODO
      </Paper>
    </Page>
  );
};
