import { BruteRankings, DailyTournamentGoldReward, DailyTournamentXpReward, getBruteGoldValue, getGoldNeededForNewBrute, getWinsNeededToRankUp, GlobalTournamentGoldReward, GlobalTournamentXpReward, RESET_PRICE } from '@labrute/core';
import { Box, Grid, Paper } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';
import { ChildCare, EmojiEvents, Groups, KeyboardDoubleArrowUp } from '@mui/icons-material';
import { Brute } from '@labrute/prisma';

const sacrificeExamples = [
  { rank: 11, level: 10 },
  { rank: 11, level: 20 },
  { rank: 11, level: 30 },
  { rank: 11, level: 40 },
  { rank: 11, level: 50 },
  { rank: 10, level: 10 },
  { rank: 9, level: 20 },
  { rank: 8, level: 30 },
  { rank: 7, level: 40 },
  { rank: 6, level: 50 },
];

export const WikiView = () => {
  const { t } = useTranslation();

  return (
    <Page
      title={`${t('wiki')} ${t('MyBrute')}`}
      description={t('wiki.desc')}
      headerUrl=""
    >
      <Paper sx={{
        mx: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
      >
        <Text h3 bold upperCase typo="LaBrute" sx={{ mr: 2 }}>{t('wiki')}</Text>
      </Paper>
      <Paper sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        bgcolor: 'background.paperLight',
        mt: -2,
      }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {/* RANK UP */}
            <FantasyButton color="success" sx={{ ml: 0 }}>
              <KeyboardDoubleArrowUp sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('rankUp')}
            </FantasyButton>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.howToRankup')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.winDaily')}</Text>
            {BruteRankings.slice(0, 3).map((rank) => (
              <Text body2 key={rank}>
                <Box
                  component="img"
                  src={`/images/rankings/lvl_${rank}.webp`}
                  sx={{ width: 16, mx: 1, verticalAlign: 'middle' }}
                />
                →
                <Box
                  component="img"
                  src={`/images/rankings/lvl_${rank - 1}.webp`}
                  sx={{ width: 16, mx: 1, verticalAlign: 'middle' }}
                />
                {t('wiki.wins', { count: getWinsNeededToRankUp({ ranking: rank, ascensions: 0 }) })}
              </Text>
            ))}
            <Text body2>{t('wiki.restartAfterRankup')}</Text>
            <Text body2>{t('wiki.previousDestiny')}</Text>
            {/* TOURNAMENTS */}
            <FantasyButton color="warning" sx={{ ml: 0, mt: 3 }}>
              <EmojiEvents sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('tournaments')}
            </FantasyButton>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.howWork')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('dailyTournament')}</Text>
            <Text body2>- {t('wiki.manualRegister')}</Text>
            <Text body2>- {t('wiki.allowRankUp')}</Text>
            <Text body2>- {t('wiki.xpPerWin', { count: DailyTournamentXpReward })}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('globalTournament')}</Text>
            <Text body2>- {t('wiki.autoRegister')}</Text>
            <Text body2>- {t('wiki.activePreviousDay')}</Text>
            <Text body2>- {t('wiki.xpPerWin', { count: GlobalTournamentXpReward })}</Text>
            <Text body2 mt={1}>
              {t('wiki.addedDelayedXP', {
                daily: 3,
                global: 4,
                total: 3 * DailyTournamentXpReward + 4 * GlobalTournamentXpReward,
              })}
            </Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.unlimitedGlobalTourney')}</Text>
            <Text body2>- {t('wiki.unregisteredOnly')}</Text>
            <Text body2>- {t('wiki.noRewards')}</Text>
            {/* CLANS */}
            <FantasyButton color="warning" sx={{ ml: 0, mt: 3 }}>
              <Groups sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('wiki.clans')}
            </FantasyButton>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.increaseClanCapacity')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.defeatBoss')}</Text>
            <Text body2>{t('wiki.bossExplanation')}</Text>
            <Box
              component="img"
              display="block"
              src="/images/wiki/defeat-boss.png"
              sx={{ mt: 1, maxWidth: 200 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* GOLD */}
            <FantasyButton color="warning" sx={{ ml: 0 }}>
              <Box component="img" src="/images/gold.png" sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('gold')}
            </FantasyButton>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.howToGetGold')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.sacrifice')}</Text>
            <Box sx={{ columns: 2 }}>
              {sacrificeExamples.map(({ level, rank }) => (
                <Text body2 key={`${level}-${rank}`}>
                  <Box
                    component="img"
                    src={`/images/rankings/lvl_${rank}.webp`}
                    sx={{ width: 16, mx: 1, verticalAlign: 'middle' }}
                  />
                  {t('wiki.level', { count: level })} = {getBruteGoldValue({ level, ranking: rank, eventId: null })}
                  <Box
                    component="img"
                    src="/images/gold.png"
                    sx={{ ml: 0.5, verticalAlign: 'middle' }}
                  />
                </Text>
              ))}
            </Box>
            <Text body2>{t('wiki.noSacrificeSameDay')}</Text>
            <Text body2>{t('wiki.sameNameAfterSacrifice')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">
              • {t('wiki.winDailyTourney')} = {DailyTournamentGoldReward}
              <Box
                component="img"
                src="/images/gold.png"
                sx={{ ml: 0.5, verticalAlign: 'middle' }}
              />
            </Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">
              • {t('wiki.winGlobalTourney')} = {GlobalTournamentGoldReward}
              <Box
                component="img"
                src="/images/gold.png"
                sx={{ ml: 0.5, verticalAlign: 'middle' }}
              />
            </Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.beatClanBoss')}</Text>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.howToUseGold')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.createNewBrutes')}</Text>
            {[4, 5, 6].map((brutes) => (
              <Text body2 key={brutes}>
                {t('wiki.count', { count: brutes })} = {getGoldNeededForNewBrute({ bruteLimit: brutes - 1, brutes: new Array(brutes - 1).fill({ id: '' }) as Pick<Brute, 'id'>[] })}
                <Box
                  component="img"
                  src="/images/gold.png"
                  sx={{ ml: 0.5, verticalAlign: 'middle' }}
                />
              </Text>
            ))}
            <Text h6 upperCase typo="LaBrute" color="secondary">
              • {t('wiki.resetBrute')} = {RESET_PRICE}
              <Box
                component="img"
                src="/images/gold.png"
                sx={{ ml: 0.5, verticalAlign: 'middle' }}
              />
            </Text>
            <Text body2>{t('wiki.resetExample')}</Text>
            <Text body2>{t('wiki.resetExample2')}</Text>
            {/* PUPILS */}
            <FantasyButton color="success" sx={{ ml: 0, mt: 3 }}>
              <ChildCare sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('wiki.pupils')}
            </FantasyButton>
            <Text h5 bold upperCase typo="LaBrute" color="secondary" mt={1}>{t('wiki.whatPupilBenefits')}</Text>
            <Text h6 upperCase typo="LaBrute" color="secondary">• {t('wiki.pupilBenefits')}</Text>
            <Text body2>{t('wiki.pupilExplanation')}</Text>
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};
