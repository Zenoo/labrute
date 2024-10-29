import { Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';

export const WikiView = () => {
  const { t } = useTranslation();

  return (
    <Page title={`${t('wiki')} ${t('MyBrute')}`} headerUrl="">
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('wiki')}</Text>
      </Paper>
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        bgcolor: 'background.paperLight',
        mt: -2,
      }}
      >
        TODO
      </Paper>
    </Page>
  );
};
