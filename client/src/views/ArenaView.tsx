import { BruteWithBodyColors, getFightsLeft, getXPNeeded } from '@labrute/core';
import { Box, Button, Grid, Paper, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import BruteBodyAndStats from '../components/Brute/BruteBodyAndStats';
import BruteHP from '../components/Brute/BruteHP';
import Link from '../components/Link';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import useStateAsync from '../hooks/useStateAsync';
import catchError from '../utils/catchError';
import Server from '../utils/Server';
import BruteLevelAndXP from '../components/Brute/BruteLevelAndXP';
import { Brute } from '@labrute/prisma';

const ArenaView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const bruteProps = useMemo(() => ({ name: bruteName || '', include: { body: true, colors: true } }), [bruteName]);
  const { data: _brute } = useStateAsync(null, Server.Brute.get, bruteProps);
  const [opponents, setOpponents] = useState<BruteWithBodyColors[]>([]);
  const [search, setSearch] = useState('');

  const brute = _brute as BruteWithBodyColors;

  const xpNeededForNextLevel = useMemo(() => brute
    && getXPNeeded(brute.level + 1), [brute]);

  const fightsLeft = useMemo(() => brute && getFightsLeft(brute), [brute]);

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

  // Go to versus page
  const goToVersus = useCallback((opponent: Brute) => () => {
    navigate(`/${bruteName || ''}/versus/${opponent.name}`);
  }, [bruteName, navigate]);

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

    Server.Brute.isNameAvailable(search).then((notFound) => {
      if (notFound) {
        Alert.open('error', t('arena.search.notFound'));
      } else {
        navigate(`/${bruteName || ''}/versus/${search}`);
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
        <Text bold color="secondary">{fightsLeft > 1 ? t('youHaveXFightsLeft', { value: getFightsLeft(brute) }) : t('youHaveOneFightLeft')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Text h4 bold color="secondary" sx={{ textAlign: 'center' }}>{brute.name}</Text>
            <BruteLevelAndXP
              brute={brute}
              textProps={{ h3: false, h5: true, color: 'primary.text', textAlign: 'center' }}
              sx={{ mb: 1, width: 120, mx: 'auto' }}
            />
            <BruteBodyAndStats brute={brute} isMd={isMd} />
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Link to={`/${brute.name}/cell`}>
                <Text bold>{t('backToCell')}</Text>
              </Link>
              {!isMd && (
                <Box component="img" src="/images/arena/bear.gif" sx={{ maxWidth: 1 }} />
              )}
            </Box>
          </Grid>
          <Grid item xs={12} md={5.6}>
            <Grid container spacing={1}>
              {opponents.map((opponent) => (
                <Grid item key={opponent.name} xs={12} sm={6}>
                  <StyledButton
                    image="/images/arena/brute-bg.gif"
                    imageHover="/images/arena/brute-bg-hover.gif"
                    contrast={false}
                    shadow={false}
                    onClick={goToVersus(opponent)}
                    sx={{
                      width: 190,
                      height: 102,
                      mx: 'auto',
                    }}
                  >
                    <Box sx={{
                      width: 185,
                      height: 89,
                      pl: 1,
                      pt: 0.5,
                      display: 'inline-block',
                      overflow: 'hidden',
                      textAlign: 'left',
                      position: 'relative',
                    }}
                    >
                      <Text bold color="secondary">{opponent.name}</Text>
                      <Text bold smallCaps color="text.primary">
                        {t('level')}
                        <Text component="span" bold color="secondary"> {opponent.level}</Text>
                      </Text>
                      <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                        <BruteHP hp={opponent.hp} />
                        <Box flexGrow={1} sx={{ ml: 0.5 }}>
                          <ArenaStat name={t('Str')} value={opponent.strengthValue} />
                          <ArenaStat name={t('Agi')} value={opponent.agilityValue} />
                          <ArenaStat name={t('Spe')} value={opponent.speedValue} />
                        </Box>
                      </Box>
                      <BruteComponent
                        brute={opponent}
                        sx={{
                          position: 'absolute',
                          height: 160,
                          top: 0,
                          left: 92,
                        }}
                      />
                    </Box>
                  </StyledButton>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', mt: 1 }}>
              <StyledInput
                onChange={changeSearch}
                value={search}
                sx={{ mr: 2 }}
              />
              <Button onClick={searchOpponent} variant="contained">GO !</Button>
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={2.4}>
              <Text bold>{t('selectedOpponents')}</Text>
              <Box component="img" src="/images/arena/referee.gif" sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default ArenaView;
