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

export default function Hall() {
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
    const favoriteCount = user.brutes.filter((b) => b.favorite).length;

    if (!wasFavorite && favoriteCount >= MAX_FAVORITE_BRUTES) {
      Alert.open('error', t('maxFavoriteBrutes', { max: MAX_FAVORITE_BRUTES }));
      return;
    }

    Server.Brute.toggleFavorite(brute.name).then(() => {
      // Update brute in user data
      updateData({
        brutes: user.brutes.map((b) => (b.id === brute.id
          ? { ...b, favorite: !wasFavorite }
          : b)),
      });
    }).catch(catchError(Alert));
  }, [Alert, t, updateData, user]);

  if (!user) {
    return null;
  }

  return (
    <Page title={`${t('myBrutes')} ${t('MyBrute')}`} headerUrl="/">
      <Paper sx={{ bgcolor: 'background.paperLight', textAlign: 'center' }}>
        <Text h3 bold upperCase color="secondary">{t('myBrutes')}</Text>
        <Text bold small color="text.primary" sx={{ display: 'block' }}>
          {t('fightsLeft')}: {fightsLeft || 0}
        </Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperDark', textAlign: 'center', mt: -2 }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
          gap: 1,
          alignItems: 'start',
          p: 1,
        }}
        >
          {user.brutes.map((brute) => {
            const currentHP = getFinalHP(brute, brute.level, modifiers);
            const currentEndurance = getFinalStat(brute, 'endurance', brute.level, modifiers);
            const currentStrength = getFinalStat(brute, 'strength', brute.level, modifiers);
            const currentAgility = getFinalStat(brute, 'agility', brute.level, modifiers);
            const currentSpeed = getFinalStat(brute, 'speed', brute.level, modifiers);

            return (
              <Box
                key={brute.id}
                onClick={goToCell(brute.name)}
                sx={{
                  border: '1px solid',
                  borderColor: 'border.shadow',
                  borderRadius: 1,
                  bgcolor: 'background.paperLight',
                  p: 1,
                  cursor: 'pointer',
                  position: 'relative',
                  '&:hover': {
                    bgcolor: 'background.paperAccent',
                  }
                }}
              >
                {/* Favorite button */}
                <Tooltip title={brute.favorite ? t('removeFromFavorites') : t('addToFavorites')}>
                  <Box
                    component="span"
                    onClick={toggleFavorite(brute)}
                    sx={{
                      position: 'absolute',
                      top: 4,
                      right: 4,
                      zIndex: 1,
                      cursor: 'pointer',
                      color: brute.favorite ? 'secondary.main' : 'text.secondary',
                      '&:hover': {
                        color: 'secondary.main',
                      }
                    }}
                  >
                    <Stars />
                  </Box>
                </Tooltip>
                {/* Name */}
                <Text bold color="secondary" center>
                  {brute.name}
                </Text>
                {/* Level */}
                <Text small color="text.primary" center sx={{ display: 'block' }}>
                  {t('level')} {brute.level}
                </Text>
                {/* Render */}
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <BruteRender
                    brute={brute}
                    looking="left"
                  />
                </Box>
                {/* HP */}
                <BruteHP hp={brute.hp} maxHp={currentHP} />
                {/* XP */}
                <Box sx={{
                  width: '100%',
                  bgcolor: 'background.default',
                  border: 1,
                  borderColor: 'border.shadow',
                  height: 6,
                  borderRadius: 1,
                  overflow: 'hidden',
                  mt: 0.5,
                }}
                >
                  <Box sx={{
                    width: `${Math.floor((brute.xp / (brute.level * 100)) * 100)}%`,
                    bgcolor: 'info.main',
                    height: '100%',
                  }}
                  />
                </Box>
                <Text small color="text.primary" center>
                  XP: {brute.xp} / {brute.level * 100}
                </Text>
                {/* Stats */}
                <Box sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 0.5,
                  mt: 1,
                }}
                >
                  <ArenaStat
                    stat={FightStat.ENDURANCE}
                    value={currentEndurance}
                    hideSkillTooltip
                  />
                  <ArenaStat
                    stat={FightStat.STRENGTH}
                    value={currentStrength}
                    hideSkillTooltip
                  />
                  <ArenaStat
                    stat={FightStat.AGILITY}
                    value={currentAgility}
                    hideSkillTooltip
                  />
                  <ArenaStat
                    stat={FightStat.SPEED}
                    value={currentSpeed}
                    hideSkillTooltip
                  />
                </Box>
                {/* Fights left */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1 }}>
                  <Box
                    component="img"
                    src={`/images${mode === 'dark' ? '/dark' : ''}/arena/swords.webp`}
                    sx={{ width: 16, height: 16, mr: 0.5 }}
                  />
                  <Text small color="text.primary">
                    {getFightsLeft(brute, modifiers)}
                  </Text>
                </Box>
                {/* Tournament indicator */}
                {brute.registeredForTournament && (
                  <Box sx={{ textAlign: 'center', mt: 0.5 }}>
                    <Tooltip title={t('registeredForTournament')}>
                      <Check color="success" fontSize="small" />
                    </Tooltip>
                  </Box>
                )}
                {/* Can rank up indicator */}
                {brute.canRankUpSince && (
                  <Box sx={{ textAlign: 'center', mt: 0.5 }}>
                    <Tooltip title={t('canRankUp')}>
                      <CrisisAlert color="warning" fontSize="small" />
                    </Tooltip>
                  </Box>
                )}
              </Box>
            );
          })}
        </Box>
        {/* Add brute button */}
        <StyledButton
          image="/images/arena/brute-bg.webp"
          swapImage="/images/arena/brute-bg-small.webp"
          shadow={false}
          contrast={false}
          sx={{
            fontFamily: 'GameFont',
            fontSize: 12,
            color: 'secondary.main',
            textTransform: 'uppercase',
            mx: 'auto',
            my: 1,
          }}
          onClick={() => navigate('/')}
        >
          <Box component="img" src="/images/create/plus.webp" sx={{ mr: 1, verticalAlign: 'middle' }} />
          {t('addBrute')}
        </StyledButton>
      </Paper>
    </Page>
  );
}