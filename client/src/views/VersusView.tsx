import { getXPNeeded } from '@labrute/core';
import { Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg';
import BruteRender from '../components/Brute/Body/BruteRender';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import VersusMobileView from './mobile/VersusMobileView';

const VersusView = () => {
  const { t } = useTranslation();
  const { opponentName } = useParams();
  const navigate = useNavigate();
  const Alert = useAlert();
  const { user, updateData, currentEvent } = useAuth();
  const { brute, updateBrute } = useBrute();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const { palette: { mode } } = useTheme();

  // Prevent multi click
  const [fighting, setFighting] = React.useState(false);

  const { data: opponent } = useStateAsync(null, Server.Brute.getForVersus, opponentName || '');

  const xpNeededForNextLevel = useMemo(() => brute
    && getXPNeeded(brute.level + 1), [brute]);

  // Redirect if invalid params
  useEffect(() => {
    if (!brute || !opponent || !user) {
      return;
    }
    if (brute.userId !== user.id) {
      navigate(`/${brute.name}/cell`);
    }
    if (opponent.name === brute.name) {
      navigate(`/${brute.name}/arena`);
    }

    if (xpNeededForNextLevel && brute.xp >= xpNeededForNextLevel) {
      if (!brute.eventId || brute.level < (currentEvent?.maxLevel ?? 999)) {
        navigate(`/${brute.name}/cell`);
      }
    }
  }, [brute, currentEvent?.maxLevel, navigate, opponent, user, xpNeededForNextLevel]);

  // Start fight
  const startFight = useCallback(async () => {
    if (!brute || !opponent || fighting) {
      return;
    }

    setFighting(true);

    // Create the fight
    const fight = await Server.Fight.create(brute.name, opponent.name)
      .catch(catchError(Alert));

    if (fight) {
      navigate(`/${brute.name}/fight/${fight.id}`);

      // Update brute data
      updateData((data) => (data ? ({
        ...data,
        brutes: data.brutes.map((b) => (b.name === brute.name ? {
          ...b,
          fightsLeft: fight.fightsLeft,
          xp: b.xp + fight.xpWon,
          victories: b.victories + fight.victories,
          losses: b.losses + fight.losses,
          lastFight: new Date(),
        } : b)),
      }) : null));

      updateBrute((data) => (data ? ({
        ...data,
        fightsLeft: fight.fightsLeft,
        xp: data.xp + fight.xpWon,
        victories: data.victories + fight.victories,
        losses: data.losses + fight.losses,
        lastFight: new Date(),
      }) : null));
    }

    setFighting(false);
  }, [Alert, brute, fighting, navigate, opponent, updateBrute, updateData]);

  if (brute && opponent && smallScreen) {
    return <VersusMobileView brute={brute} opponent={opponent} startFight={startFight} />;
  }

  return brute && opponent && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <BoxBg
        src={`/images${mode === 'dark' ? '/dark' : ''}/versus/background.webp`}
        sx={{
          width: 881,
          maxWidth: 1,
          height: 504,
          mx: 'auto',
          pt: 1.5,
          textAlign: 'center',
        }}
      >
        <Text h2 smallCaps bold color="text.primary">{t('dareChallenge', { value: opponent.name })}</Text>
        <Grid container spacing={2} sx={{ mt: 4, mb: 5 }}>
          <Grid item xs={12} sm={4}>
            <Box width={100} height={270} mx="auto">
              <BruteRender
                brute={brute}
              />
            </Box>
            <Text h3 smallCaps bold color="text.primary">{brute.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {brute.level}</Text>
          </Grid>
          <Grid item xs={4} sx={{ display: { xs: 'none', sm: 'block' } }} />
          <Grid item xs={12} sm={4}>
            <Box width={100} height={270} mx="auto">
              <BruteRender
                brute={opponent}
                looking="left"
              />
            </Box>
            <Text h3 smallCaps bold color="text.primary">{opponent.name}</Text>
            <Text h5 upperCase bold color="secondary">{t('level')} {opponent.level}</Text>
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
