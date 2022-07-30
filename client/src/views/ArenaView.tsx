import { Brute } from '@backend/types';
import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();

  const { data: brute } = useStateAsync(null, Server.Brute.get, bruteName);
  const [opponents, setOpponents] = useState<Brute[]>([]);

  // Fetch random opponents
  useEffect(() => {
    if (!brute) return;

    // TODO
    setOpponents([
      { ...brute, id: -1 },
      { ...brute, id: -2 },
      { ...brute, id: -3 },
      { ...brute, id: -4 },
      { ...brute, id: -5 },
      { ...brute, id: -6 },
    ]);
  }, [brute]);

  return brute && (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('arena')}</Text>
        <Text bold color="secondary">{t('youHaveXFightsLeft', { value: 6 })}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {opponents.map((opponent) => (
          <Text key={opponent.id}>{opponent.data.name}</Text>
        ))}
      </Paper>
    </Page>
  );
};

export default ArenaView;