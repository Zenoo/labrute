import { BrutesGetOpponentsResponse, getFightsLeft, getXPNeeded } from '@labrute/core';
import { Alert as MuiAlert, Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import BruteButton from '../components/Brute/BruteButton';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import Link from '../components/Link';
import Loader from '../components/Loader';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { brute, updateBrute } = useBrute();
  const { modifiers, user, updateData, currentEvent } = useAuth();

  const [opponents, setOpponents] = useState<BrutesGetOpponentsResponse>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const xpNeededForNextLevel = useMemo(() => brute
    && getXPNeeded(brute.level + 1), [brute]);

  const fightsLeft = useMemo(
    () => (brute && getFightsLeft(brute, modifiers)) ?? 0,
    [brute, modifiers]
  );

  // Fetch random opponents
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };
    if (!brute) return cleanup;

    // Redirect to cell if XP is too much
    if (xpNeededForNextLevel && brute.xp >= xpNeededForNextLevel) {
      // Don't redirect if event brute who reached max level
      if (!brute.eventId || brute.level < (currentEvent?.maxLevel ?? 999)) {
        navigate(`/${brute.name}/cell`);
        return cleanup;
      }
    }

    // Redirect to cell if brute doesn't have enough fights left
    if (fightsLeft <= 0) {
      navigate(`/${brute.name}/cell`);
    }

    Server.Brute.getOpponents(brute.name, brute.level).then((data) => {
      if (isSubscribed) {
        setOpponents(data);
      }
    }).catch(catchError(Alert));

    return cleanup;
  }, [Alert, brute, currentEvent?.maxLevel, fightsLeft, navigate, xpNeededForNextLevel]);

  const changeSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  // Search for opponents
  const searchOpponent = useCallback(() => {
    if (!brute) return;
    if (search.length < 3) {
      Alert.open('error', t('arena.search.atLeastThreeCharacters'));
      return;
    }
    if (search === brute.name) {
      Alert.open('error', t('arena.search.noSelf'));
      return;
    }

    Server.Brute.exists(search).then((response) => {
      if (!response.exists) {
        Alert.open('error', t('arena.search.notFound'));
      } else {
        navigate(`/${bruteName || ''}/versus/${response.name}`);
      }
    }).catch(catchError(Alert));
  }, [Alert, brute, bruteName, navigate, search, t]);

  // Go to versus page
  const goToVersus = useCallback((opponentName: string) => () => {
    if (!user || !brute || loading) return;

    // Skip versus page
    if (!user.displayVersusPage) {
      setLoading(true);

      // Create the fight
      Server.Fight.create(brute.name, opponentName)
        .then((fight) => {
          navigate(`/${brute.name}/fight/${fight.id}`);

          // Update brute data
          updateData((data) => (data ? ({
            ...data,
            brutes: data.brutes.map((b) => (b.name === brute.name ? {
              ...b,
              fightsLeft: fight.fightsLeft,
              xp: b.xp + fight.xpWon,
              victories: b.victories + fight.victories,
              lastFight: new Date(),
            } : b)),
          }) : null));

          updateBrute((data) => (data ? ({
            ...data,
            fightsLeft: fight.fightsLeft,
            xp: data.xp + fight.xpWon,
            victories: data.victories + fight.victories,
            lastFight: new Date(),
          }) : null));
        })
        .catch(catchError(Alert))
        .finally(() => setLoading(false));
    } else {
      navigate(`/${bruteName || ''}/versus/${opponentName}`);
    }
  }, [Alert, brute, bruteName, loading, navigate, updateBrute, updateData, user]);

  return brute && (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('arena')}</Text>
        <Text bold color="secondary">{fightsLeft > 1 ? t('youHaveXFightsLeft', { value: getFightsLeft(brute, modifiers) }) : t('youHaveOneFightLeft')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {/* No XP won for event brutes at max level */}
        {brute.eventId && brute.level >= (currentEvent?.maxLevel ?? 999) && (
          <MuiAlert severity="info" sx={{ borderRadius: 0 }}>
            {t('arena.noXP')}
          </MuiAlert>
        )}
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Text h4 bold color="secondary" center>{brute.name}</Text>
            <BruteLevelAndXP
              brute={brute}
              textProps={{ h3: false, h5: true, color: 'primary.text', center: true }}
              sx={{ mb: 1, width: 120, mx: 'auto' }}
            />
            <BruteBodyAndStats brute={brute} isMd={isMd} />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
              {!isMd && (
                <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/bear.webp`} sx={{ maxWidth: 1 }} />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={5.6}>
            {loading ? <Loader height={346} /> : (
              <Grid container spacing={1} mb={3}>
                {opponents.map((opponent) => (
                  <Grid item key={opponent.name} xs={12} sm={6}>
                    <BruteButton
                      brute={opponent}
                      onClick={goToVersus(opponent.name)}
                      displayDetails={user?.displayOpponentDetails}
                      shiftMargin
                      sx={{
                        width: 185,
                        height: 1,
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              <StyledInput
                onChange={changeSearch}
                value={search}
                sx={{ mr: 2 }}
              />
              <Button onClick={searchOpponent} variant="mybrute">{t('arena.search')}</Button>
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={2.4}>
              <Text bold>{t('selectedOpponents')}</Text>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default ArenaView;
