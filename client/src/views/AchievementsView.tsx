import { AchievementData } from '@labrute/core';
import { Achievement } from '@labrute/prisma';
import { QuestionMark } from '@mui/icons-material';
import { Box, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
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
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { user } = useAuth();
  const Alert = useAlert();

  const [achievements, setAchievements] = useState<Achievement[]>([]);

  // Fetch achievements
  useEffect(() => {
    if (!user && !bruteName) return;

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
                  <Text bold h6>{bruteName || user.name}</Text>
                  <Box sx={{
                    mt: 1,
                    bgcolor: 'background.paperLight',
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                    textAlign: 'left',
                    display: 'flex',
                    flexWrap: 'wrap',
                    px: 0.25,
                  }}
                  >
                    {achievements.map((achievement) => (
                      <Tooltip
                        key={achievement.id}
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
                              {AchievementData[achievement.name].rarety}
                            </Text>
                            <Text sx={{ fontStyle: 'italic', color: 'text.secondary' }}>{t(`achievements.${achievement.name}.description`)}</Text>
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
                            <Box component="img" src={`/images/achievements/${AchievementData[achievement.name].illustration || ''}`} sx={{ maxWidth: 1 }} />
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
