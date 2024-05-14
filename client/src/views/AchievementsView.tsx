import { AchievementData, AchievementsGetResponse, TitleRequirements, formatLargeNumber } from '@labrute/core';
import { QuestionMark } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemText, ListSubheader, Paper, Tooltip, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const AchievementsView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { bruteName } = useParams();
  const { user } = useAuth();
  const Alert = useAlert();

  const [achievements, setAchievements] = useState<AchievementsGetResponse>([]);

  // Fetch achievements
  useEffect(() => {
    if (bruteName) {
      Server.Achievement.getForBrute(bruteName).then((data) => {
        setAchievements(data);
      }).catch(catchError(Alert));
    } else if (user) {
      Server.Achievement.getForUser(user.id).then((data) => {
        setAchievements(data);
      }).catch(catchError(Alert));
    }
  }, [Alert, bruteName, user]);

  return (
    <Page title={t('MyBrute')} headerUrl={bruteName ? `/${bruteName}/cell` : '/'}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('achievements')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <FantasyButton
          color="secondary"
          to="/achievements/rankings"
          sx={{
            mb: 1,
          }}
        >
          {t('ranking')}
        </FantasyButton>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                bgcolor: 'background.paperDark',
                textAlign: 'center',
                p: 1,
                borderRadius: 0,
              }}
            >
              <Text bold h6>{t('achievements')}</Text>
              <Box sx={{
                mt: 1,
                bgcolor: 'background.paperLight',
                border: '1px solid',
                borderColor: theme.palette.border.shadow,
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                px: 0.25,
              }}
              >
                {achievements.map((achievement) => (
                  <Tooltip
                    key={achievement.name}
                    title={(
                      <>
                        <Text bold h6>
                          {t(`achievements.${achievement.name}`)} ({achievement.count})
                        </Text>
                        <Text
                          sx={{
                            color: `achievements.${AchievementData[achievement.name].rarety}.main`,
                            fontStyle: 'italic',
                            textTransform: 'capitalize',
                          }}
                        >
                          {t(AchievementData[achievement.name].rarety)}
                        </Text>
                        <Text sx={{ fontStyle: 'italic', color: 'text.secondary' }}>{t(`achievements.${achievement.name}.description`)}</Text>
                        {AchievementData[achievement.name].onePerFight && (
                          <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                            {t('maxPerFight')}:{' '}
                            <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>1</Text>
                          </Text>
                        )}
                        {AchievementData[achievement.name].perBrute && (
                          <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                            {t('maxPerBrute')}:{' '}
                            <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>{AchievementData[achievement.name].perBrute}</Text>
                          </Text>
                        )}
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
                        mx: 0.25,
                        my: 0.5,
                        textAlign: 'center',
                        borderRadius: 1,
                        border: 1,
                        borderColor: `achievements.${AchievementData[achievement.name].rarety}.main`,
                        bgcolor: `achievements.${AchievementData[achievement.name].rarety}.light`,
                        color: `achievements.${AchievementData[achievement.name].rarety}.contrastText`,
                      }}
                    >
                      {AchievementData[achievement.name].illustration ? (
                        <Box component="img" src={`/images/achievements/${AchievementData[achievement.name].illustration || ''}`} sx={{ maxWidth: 34 }} />
                      ) : (
                        <QuestionMark />
                      )}
                      <Text bold>{formatLargeNumber(achievement.count)}</Text>
                    </Box>
                  </Tooltip>
                ))}
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                bgcolor: 'background.paperDark',
                textAlign: 'center',
                p: 1,
                borderRadius: 0,
              }}
            >
              <Text bold h6>{t('titles')}</Text>
              <Box sx={{
                mt: 1,
                bgcolor: 'background.paperLight',
                border: '1px solid',
                borderColor: theme.palette.border.shadow,
                textAlign: 'left',
                display: 'flex',
                flexWrap: 'wrap',
              }}
              >
                {achievements.map((achievement) => {
                  const availableTitles = TitleRequirements[achievement.name]
                    .filter((title) => title <= achievement.count);

                  if (availableTitles.length === 0) {
                    return null;
                  }

                  return (
                    <List
                      key={achievement.name}
                      dense
                      sx={{ width: 1, py: 0 }}
                      subheader={(
                        <Tooltip
                          title={(
                            <>
                              <Text bold h6>
                                {t(`achievements.${achievement.name}`)} ({achievement.count})
                              </Text>
                              <Text
                                sx={{
                                  color: `achievements.${AchievementData[achievement.name].rarety}.main`,
                                  fontStyle: 'italic',
                                  textTransform: 'capitalize',
                                }}
                              >
                                {t(AchievementData[achievement.name].rarety)}
                              </Text>
                              <Text sx={{ fontStyle: 'italic', color: 'text.secondary' }}>{t(`achievements.${achievement.name}.description`)}</Text>
                              {AchievementData[achievement.name].onePerFight && (
                                <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                                  {t('maxPerFight')}:{' '}
                                  <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>1</Text>
                                </Text>
                              )}
                              {AchievementData[achievement.name].perBrute && (
                                <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                                  {t('maxPerBrute')}:{' '}
                                  <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>{AchievementData[achievement.name].perBrute}</Text>
                                </Text>
                              )}
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
                          <ListSubheader sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: 0.5,
                            bgcolor: 'secondary.main',
                          }}
                          >
                            <Box
                              component="img"
                              src={`/images/achievements/${AchievementData[achievement.name].illustration || ''}`}
                              sx={{ width: 20 }}
                            />
                            <Text smallCaps bold color="secondary.contrastText" sx={{ ml: 1 }}>{t(`achievements.${achievement.name}`)}</Text>
                          </ListSubheader>
                        </Tooltip>
                      )}
                    >
                      {availableTitles.map((titleCount, i) => (
                        <Tooltip key={`${achievement.name}x${titleCount}`} title={`${t(`achievements.${achievement.name}`)} x ${titleCount}`}>
                          <ListItem sx={{
                            py: 0,
                            '&:not(:last-child)': {
                              borderBottom: '1px dashed',
                              borderBottomColor: theme.palette.border.shadow,
                            },
                          }}
                          >
                            <ListItemText
                              sx={{ my: 0 }}
                              primary={(
                                <>
                                  <span>{t(`${achievement.name}.title.${(i + 1) as 1 | 2 | 3 | 4 | 5}`) || 'TODO'}</span>
                                  <Box component="span" sx={{ ml: 0.5, color: 'text.secondary' }}>(x{titleCount})</Box>
                                </>
                              )}
                            />
                          </ListItem>
                        </Tooltip>
                      ))}
                    </List>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export default AchievementsView;
