import { ClanWarGetHistoryResponse } from '@labrute/core';
import { Box, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../../components/Page';
import Text from '../../components/Text';
import Server from '../../utils/Server';
import { useAlert } from '../../hooks/useAlert';
import catchError from '../../utils/catchError';

export const ClanWarHistoryView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();

  const [wars, setWars] = useState<ClanWarGetHistoryResponse | null>(null);

  // Fetch clan war
  useEffect(() => {
    if (!id) return;

    Server.ClanWar.getHistory(id)
      .then(setWars)
      .catch(catchError(Alert));
  }, [Alert, id]);

  return (
    <Page title={`${t('clanWar')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/clan/${id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('clanWar')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {wars?.map((war) => (
          <Box key={war.id}>
            <Text>{war.attacker.name} {t('vs')} {war.defender.name}</Text>
          </Box>
        ))}
      </Paper>
    </Page>
  );
};
