import getXPNeeded from '@eternaltwin/labrute-core/brute/getXPNeeded';
import { Grid, useMediaQuery } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import Page from '../components/Page.js';
import StyledButton from '../components/StyledButton.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import { useAuth } from '../hooks/useAuth.js';
import useStateAsync from '../hooks/useStateAsync.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';
import VersusMobileView from './mobile/VersusMobileView.js';

const VersusView = () => {
  const { t } = useTranslation();
  const { bruteName, opponentName } = useParams();
  const navigate = useNavigate();
  const Alert = useAlert();
  const { user } = useAuth();
  const smallScreen = useMediaQuery('(max-width: 935px)');

  const { data: brute } = useStateAsync(null, Server.Brute.get, bruteName || '');
  const { data: opponent } = useStateAsync(null, Server.Brute.get, opponentName || '');

  const xpNeededForNextLevel = useMemo(() => brute
  && getXPNeeded(brute.data.level + 1), [brute]);

  // Redirect if invalid params
  useEffect(() => {
    if (!brute || !opponent || !user) {
      return;
    }
    if (brute.data.user !== user.id) {
      navigate(`/${brute.name}/cell`);
    }
    if (opponent.name === brute.name) {
      navigate(`/${brute.name}/arena`);
    }
    // Redirect to cell if XP is too much
    // TODO: Reactivate once alpha is over
    // if (xpNeededForNextLevel && brute.data.xp >= xpNeededForNextLevel) {
    //   navigate(`/${brute.name}/cell`);
    // }
  }, [brute, navigate, opponent, user, xpNeededForNextLevel]);

  // Start fight
  const startFight = useCallback(async () => {
    if (!brute || !opponent) {
      return;
    }

    // Create the fight
    const fight = await Server.Fight.create(brute.name, opponent.name)
      .catch(catchError(Alert));

    if (fight) {
      navigate(`/${brute.name}/fight/${fight.id}`);
    }
  }, [Alert, brute, navigate, opponent]);

  if (brute && opponent && smallScreen) {
    return <VersusMobileView brute={brute} opponent={opponent} startFight={startFight} />;
  }

  return brute && opponent && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <BoxBg
        src="/images/versus/background.gif"
        sx={{
          width: 881,
          maxWidth: 1,
          height: 504,
          mx: 'auto',
          pt: 1.5,
          textAlign: 'center',
        }}
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
      </BoxBg>
    </Page>
  );
};

export default VersusView;
