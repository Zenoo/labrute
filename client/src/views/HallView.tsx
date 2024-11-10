import { FightStat, MAX_FAVORITE_BRUTES, getFightsLeft, getFinalHP, getFinalStat } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Check, CrisisAlert, Stars } from '@mui/icons-material';
import { Box, Paper, Tooltip, useTheme } from '@mui/material';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat';
import BruteRender from '../components/Brute/Body/BruteRender';
import BruteHP from '../components/Brute/BruteHP';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const HallView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user, updateData, modifiers } = useAuth();
  const Alert = useAlert();
  const { palette: { mode } } = useTheme();

  const fightsLeft = useMemo(() => user && user.brutes
    .reduce((acc, brute) => acc + getFightsLeft(brute, modifiers), 0), [user, modifiers]);

  // Go to cell page
  const goToCell = useCallback((bruteName: string) => () => {
    navigate(`/${bruteName}/cell`);
  }, [navigate]);

  // Toggle favorite
  const toggleFavorite = useCallback((brute: Brute) => (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!user) return;

    const wasFavorite = brute.favorite;

    if (!wasFavorite) {
      // Abort if limit reached
      const favoriteBrutes = user.brutes.filter((b) => b.favorite);
      if (favoriteBrutes.length >= MAX_FAVORITE_BRUTES) return;
    }

    Server.Brute.favorite(brute.name).then(() => {
      // Update brute favorite status
      updateData((data) => (data ? ({
        ...data,
        brutes: data.brutes.map((b) => (b.name === brute.name ? {
          ...b, favorite: !wasFavorite,
        } : b)).sort((a, b) => (a.favorite === b.favorite
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : a.favorite ? -1 : 1)),
      }) : null));
    }).catch(catchError(Alert));
  }, [Alert, updateData, user]);

  return (
    <Page title={`${t('hall')} ${t('MyBrute')}`} headerUrl="">
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('hall')}</Text>
        {!!fightsLeft && (
          <Text bold color="secondary">
            {fightsLeft > 1
              ? t('youHaveXFightsLeft', { value: fightsLeft })
              : t('youHaveOneFightLeft')}
          </Text>
        )}
      </Paper>
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        bgcolor: 'background.paperLight',
        mt: -2,
      }}
      >
        {user && user.brutes.map((brute) => {
          const bruteFightsLeft = getFightsLeft(brute, modifiers);

          return (
            <StyledButton
              key={brute.name}
              image="/images/arena/brute-bg.webp"
              imageHover="/images/arena/brute-bg-hover.webp"
              contrast={false}
              shadow={false}
              onClick={goToCell(brute.name)}
              sx={{
                width: 190,
                height: 114,
                mx: 1,
                my: 0.5,
              }}
            >
              <Box sx={{
                width: 185,
                height: 93,
                pl: 1,
                pt: 0.5,
                display: 'inline-block',
                textAlign: 'left',
                position: 'relative',
                overflow: 'hidden',
              }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                >
                  <Box display="flex" alignItems="center">
                    {/* Registration status */}
                    {brute.registeredForTournament && (
                      <Tooltip title={t('bruteRegistered')}>
                        <Check
                          fontSize="small"
                          sx={{
                            m: 0.25,
                            p: '2px',
                            bgcolor: 'warning.main',
                            borderRadius: '50%',
                          }}
                        />
                      </Tooltip>
                    )}
                    <Text bold color="secondary" sx={{ display: 'inline' }}>{brute.name}</Text>
                  </Box>
                  <Tooltip title={brute.favorite ? t('removeFromFavorites') : t('chooseAsFavorite', { amount: MAX_FAVORITE_BRUTES })}>
                    <Stars
                      onClick={toggleFavorite(brute)}
                      fontSize="small"
                      color={brute.favorite ? 'secondary' : 'disabled'}
                      sx={{
                        mr: 1,
                        zIndex: 1,
                        bgcolor: 'background.paperLight',
                        borderRadius: '50%',
                      }}
                    />
                  </Tooltip>
                </Box>
                <Text bold smallCaps color="text.primary">
                  {t('level')}
                  <Text component="span" bold color="secondary"> {brute.level}</Text>
                  {brute.eventId ? (
                    <Box
                      component="img"
                      src="/images/event.webp"
                      sx={{
                        verticalAlign: 'sub',
                        height: 18,
                        ml: 0.5,
                      }}
                    />
                  ) : (
                    <Box
                      component="img"
                      src={`/images/rankings/lvl_${brute.ranking}.webp`}
                      sx={{
                        verticalAlign: 'middle',
                        height: 16,
                        ml: 0.5,
                      }}
                    />
                  )}
                </Text>
                <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                  <BruteHP hp={getFinalHP(brute, modifiers)} />
                  <Box flexGrow={1} sx={{ ml: 0.5 }}>
                    <ArenaStat
                      stat={FightStat.STRENGTH}
                      value={getFinalStat(brute, 'strength', modifiers)}
                      hideSkillText
                    />
                    <ArenaStat
                      stat={FightStat.AGILITY}
                      value={getFinalStat(brute, 'agility', modifiers)}
                      hideSkillText
                    />
                    <ArenaStat
                      stat={FightStat.SPEED}
                      value={getFinalStat(brute, 'speed', modifiers)}
                      hideSkillText
                    />
                  </Box>
                </Box>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 115,
                  width: 70,
                  height: 1,
                }}
                >
                  <BruteRender
                    brute={brute}
                    looking="left"
                  />
                </Box>
              </Box>
              {/* Fights left */}
              <Tooltip title={t('fightsLeft', { value: bruteFightsLeft })}>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 21,
                  mt: -1,
                  zIndex: 1,
                }}
                >
                  {new Array(bruteFightsLeft).fill(0).map((_, i) => (
                    <CrisisAlert
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      fontSize="small"
                      sx={{
                        m: 0.25,
                        p: '2px',
                        bgcolor: mode === 'dark' ? 'success.dark' : 'success.main',
                        borderRadius: '50%',
                        color: 'success.light',
                      }}
                    />
                  ))}
                </Box>
              </Tooltip>
            </StyledButton>
          );
        })}
      </Paper>
    </Page>
  );
};

export default HallView;
