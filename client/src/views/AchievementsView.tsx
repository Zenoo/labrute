import { AchievementIllustrations } from '@labrute/core';
import { AchievementRarity } from '@labrute/prisma';
import { QuestionMark } from '@mui/icons-material';
import { Box, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAuth } from '../hooks/useAuth';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';

const AchievementsView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();

  const { data: achievements } = useStateAsync([], Server.Achievement.getAll, undefined);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      {user && (
        <>
          <Paper sx={{ mx: 4 }}>
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('achievements')}</Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={3} />
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    bgcolor: 'background.paperDark',
                    textAlign: 'center',
                    p: 1,
                    borderRadius: 0,
                  }}
                >
                  <Text bold h6>{user.name}</Text>
                  <Box sx={{
                    mt: 1,
                    bgcolor: 'background.paperLight',
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                    textAlign: 'left',
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                  }}
                  >
                    {achievements.map((achievement) => (
                      <Tooltip
                        key={achievement.id}
                        title={(
                          <>
                            <Text bold h6>{t(achievement.name)} ({achievement.count})</Text>
                            <Text sx={{ fontStyle: 'italic', color: 'text.secondary' }}>{t(`${achievement.name}.description`)}</Text>
                          </>
                        )}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: 'secondary.main',
                              color: 'secondary.contrastText',
                              border: 1,
                              borderColor: 'primary.main',
                            }
                          },
                          popper: { sx: { width: 250 } },
                        }}
                      >
                        <Box
                          sx={{
                            width: 40,
                            pt: 0.5,
                            textAlign: 'center',
                            borderRadius: 1,
                            border: 1,
                            borderColor: achievement.rarity === AchievementRarity.common
                              ? 'primary.main'
                              : achievement.rarity === AchievementRarity.uncommon
                                ? 'secondary.main'
                                : achievement.rarity === AchievementRarity.rare
                                  ? 'error.main'
                                  : achievement.rarity === AchievementRarity.epic
                                    ? 'warning.main'
                                    : 'success.main',
                          }}
                        >
                          {AchievementIllustrations[achievement.name] ? (
                            <Box component="img" src={`/images/achievements/${AchievementIllustrations[achievement.name]}.png`} sx={{ maxWidth: 1 }} />
                          ) : (
                            <QuestionMark />
                          )}
                          <Text bold>{achievement.count}</Text>
                        </Box>
                      </Tooltip>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              {!isMd && (
                <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box component="img" src="/images/arena/referee.gif" sx={{ maxWidth: 1 }} />
                </Grid>
              )}
            </Grid>
          </Paper>
        </>
      )}
    </Page>
  );
};

export default AchievementsView;
