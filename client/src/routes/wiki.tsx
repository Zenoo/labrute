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

export default function Wiki() {
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
        <Grid container spacing={1} sx={{ textAlign: 'center' }}>
          <Grid item xs={12} md={6}>
            <FantasyButton
              to="https://eternaltwin.net/forum/labrute"
              target="_blank"
              sx={{ width: 250, mx: 'auto' }}
            >
              <Text bold smallCaps>{t('forum')}</Text>
            </FantasyButton>
          </Grid>
          <Grid item xs={12} md={6}>
            <FantasyButton
              to="https://discord.gg/4VHyaYVGAA"
              target="_blank"
              sx={{ width: 250, mx: 'auto' }}
            >
              <Text bold smallCaps>Discord</Text>
            </FantasyButton>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperDark', mt: -2 }}>
        <Text h4 bold color="secondary" center sx={{ mb: 1 }}>{t('wiki.rankings')}</Text>
        <Grid container spacing={1}>
          {BruteRankings.map((ranking, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={ranking.name}>
              <Box sx={{ textAlign: 'center' }}>
                <Box
                  component="img"
                  src={`/images/rankings/${ranking.name}.webp`}
                  sx={{ width: 50, height: 50 }}
                />
                <Text bold color="secondary" fontSize={10} center>
                  {index + 1}. {t(`ranks.${ranking.name}`)}
                </Text>
                <Text fontSize={9} center>
                  {t('wiki.winsNeeded', { wins: getWinsNeededToRankUp(index) })}
                </Text>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Text h4 bold color="secondary" center sx={{ mb: 1 }}>
          <EmojiEvents sx={{ verticalAlign: 'middle', mr: 1 }} />
          {t('wiki.tournaments')}
        </Text>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Text h5 bold color="text.primary" center sx={{ mb: 1 }}>{t('wiki.daily')}</Text>
            <Text center sx={{ mb: 1 }}>{t('wiki.dailyDesc')}</Text>
            <Text center sx={{ mb: 1 }}>
              <Text component="span" bold color="warning.main">
                {t('gold')}: {DailyTournamentGoldReward}
              </Text>
              {' + '}
              <Text component="span" bold color="info.main">
                XP: {DailyTournamentXpReward}
              </Text>
            </Text>
          </Grid>
          <Grid item xs={12} md={6}>
            <Text h5 bold color="text.primary" center sx={{ mb: 1 }}>{t('wiki.global')}</Text>
            <Text center sx={{ mb: 1 }}>{t('wiki.globalDesc')}</Text>
            <Text center sx={{ mb: 1 }}>
              <Text component="span" bold color="warning.main">
                {t('gold')}: {GlobalTournamentGoldReward}
              </Text>
              {' + '}
              <Text component="span" bold color="info.main">
                XP: {GlobalTournamentXpReward}
              </Text>
            </Text>
          </Grid>
        </Grid>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperDark', mt: -2 }}>
        <Text h4 bold color="secondary" center sx={{ mb: 1 }}>
          <ChildCare sx={{ verticalAlign: 'middle', mr: 1 }} />
          {t('wiki.pupils')}
        </Text>
        <Text center sx={{ mb: 1 }}>{t('wiki.pupilsDesc')}</Text>
        <Text center>
          <Text component="span" bold color="warning.main">
            {t('gold')}: {getGoldNeededForNewBrute({ gold: 0 } as any)}
          </Text>
        </Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Text h4 bold color="secondary" center sx={{ mb: 1 }}>
          <KeyboardDoubleArrowUp sx={{ verticalAlign: 'middle', mr: 1 }} />
          {t('wiki.reset')}
        </Text>
        <Text center sx={{ mb: 1 }}>{t('wiki.resetDesc')}</Text>
        <Text center sx={{ mb: 1 }}>
          <Text component="span" bold color="warning.main">
            {t('cost')}: {RESET_PRICE} {t('gold')}
          </Text>
        </Text>
        <Text center sx={{ mb: 1 }}>{t('wiki.sacrifice')}</Text>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
        }}
        >
          {sacrificeExamples.map((example, index) => (
            <Box
              key={index}
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                p: 1,
                minWidth: 80,
                textAlign: 'center',
              }}
            >
              <Text fontSize={10} bold>
                R{example.rank} L{example.level}
              </Text>
              <Text fontSize={9} color="warning.main">
                {getBruteGoldValue({ ranking: example.rank, level: example.level } as Brute)} {t('gold')}
              </Text>
            </Box>
          ))}
        </Box>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperDark', mt: -2 }}>
        <Text h4 bold color="secondary" center sx={{ mb: 1 }}>
          <Groups sx={{ verticalAlign: 'middle', mr: 1 }} />
          {t('wiki.clans')}
        </Text>
        <Text center>{t('wiki.clansDesc')}</Text>
      </Paper>
    </Page>
  );
}