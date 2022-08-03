import { Grid } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxWithBackground from '../components/BoxWithBackground.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import Text from '../components/Text.js';
import useStateAsync from '../hooks/useStateAsync.js';
import Server from '../utils/Server.js';

const VersusView = () => {
  const { t } = useTranslation();
  const { bruteName, opponentName } = useParams();
  const navigate = useNavigate();

  const { data: brute } = useStateAsync(null, Server.Brute.get, bruteName);
  const { data: opponent } = useStateAsync(null, Server.Brute.get, opponentName);

  // Redirect if invalid params
  useEffect(() => {
    if (!brute || !opponent) {
      return;
    }
    if (opponent.name === brute.name) {
      navigate(`/${brute.name}/arena`);
    }
  }, [brute, navigate, opponent]);

  // Start fight
  const startFight = useCallback(() => {
    // TODO
  }, []);

  return brute && opponent && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`}>
      <BoxWithBackground
        url="/images/versus/background.gif"
        alt={t('background')}
        sx={{
          width: 881,
          maxWidth: 1,
          height: 504,
          mx: 'auto',
          pt: 1.5,
          textAlign: 'center',
        }}
        imgSx={{ width: 1 }}
      >
        <Text h2 smallCaps bold color="text.primary">{t('dareChallenge')} {opponent.name} !</Text>
        <Grid container spacing={2} sx={{ mt: 4, mb: 5 }}>
          <Grid item xs={12} sm={4}>
            <BruteComponent
              brute={brute}
              sx={{ maxWidth: 200 }}
              inverted
            />
            <Text h3 smallCaps bold color="text.primary">{brute.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {brute.data.level}</Text>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Grid item xs={12} sm={4}>
            <BruteComponent
              brute={opponent}
              sx={{ maxWidth: 200 }}
            />
            <Text h3 smallCaps bold color="text.primary">{opponent.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {opponent.data.level}</Text>
          </Grid>
        </Grid>
        <StyledButton onClick={startFight} sx={{ ml: '39.8%' }}>
          <Text h5 typo="handwritten" upperCase bold color="secondary">{t('startFight')}</Text>
        </StyledButton>
      </BoxWithBackground>
    </Page>
  );
};

export default VersusView;
