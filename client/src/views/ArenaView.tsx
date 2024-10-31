import { BrutesGetOpponentsResponse, getFightsLeft, getXPNeeded } from '@labrute/core';
import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import BruteButton from '../components/Brute/BruteButton';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import Link from '../components/Link';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useBrute } from '../hooks/useBrute';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import { useAuth } from '../hooks/useAuth';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { brute } = useBrute();
  const { modifiers } = useAuth();

  const [opponents, setOpponents] = useState<BrutesGetOpponentsResponse>([]);
  const [search, setSearch] = useState('');

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
      navigate(`/${brute.name}/cell`);
      return cleanup;
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
  }, [Alert, brute, fightsLeft, navigate, xpNeededForNextLevel]);

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
            <Grid container spacing={1}>
              {opponents.map((opponent) => (
                <Grid item key={opponent.name} xs={12} sm={6}>
                  <BruteButton
                    brute={opponent}
                    link={`/${bruteName || ''}/versus/${opponent.name}`}
                  />
                </Grid>
              ))}
            </Grid>
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
