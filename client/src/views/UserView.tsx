import { AchievementData, FightStat, TitleRequirements, UserGetProfileResponse, formatLargeNumber, getFightsLeft } from '@labrute/core';
import { Check, QuestionMark } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemText, ListSubheader, Paper, Tooltip, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import ArenaStat from '../components/Arena/ArenaStat';
import BruteRender from '../components/Brute/Body/BruteRender';
import BruteHP from '../components/Brute/BruteHP';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import FantasyButton from '../components/FantasyButton';
import { useAuth } from '../hooks/useAuth';
import moment from 'moment';

const UserView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { userId } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const { user: authedUser, updateData } = useAuth();

  const [user, setUser] = useState<UserGetProfileResponse | null>(null);

  // Fetch user profile
  useEffect(() => {
    if (!userId) {
      return;
    }

    Server.User.getProfile(userId).then((profile) => {
      setUser(profile);
    }).catch(catchError(Alert));
  }, [Alert, userId]);

  const getDinoRpgReward = useCallback(() => {
    if (!authedUser) return;

    Server.User.getDinoRpgRewards().then(() => {
      Alert.open('success', t('dinoRpgRewardsSuccess'));
      updateData((data) => (data ? ({
        ...data,
        dinorpgDone: new Date(),
        brutes: data.brutes.map((brute) => ({
          ...brute,
          fightsLeft: getFightsLeft(brute) + 1,
          lastFight: new Date(),
        })),
      }) : null));
    }).catch(catchError(Alert));
  }, [Alert, authedUser, t, updateData]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      {user && (
        <>
          <Paper sx={{ mx: 4 }}>
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('userProfile', { user: user.name })}</Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
            {/* ACHIEVEMENTS */}
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
                    {user.achievements.map((achievement) => (
                      <Tooltip
                        key={`${user.id}-${achievement.name}`}
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
                    maxHeight: 500,
                    overflow: 'auto',
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
                    {user.achievements.map((achievement) => {
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
                            <Tooltip key={titleCount} title={`${t(`achievements.${achievement.name}`)} x ${titleCount}`}>
                              <ListItem sx={{
                                py: 0,
                                '&:not(:last-child)': {
                                  borderBottom: '1px dashed',
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
            {/* REWARDS */}
            {user.id === authedUser?.id && (
              <>
                <Text bold center smallCaps h4 sx={{ mt: 2, ml: 1 }}>{t('externalRewards')}</Text>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <FantasyButton
                    onClick={getDinoRpgReward}
                    color="success"
                    disabled={moment.utc(authedUser.dinorpgDone).isSame(moment.utc(), 'day')}
                    sx={{ m: 1 }}
                  >
                    <Check sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {t('eternalDinoRPG')}
                  </FantasyButton>
                </Box>
              </>
            )}
            {/* BRUTES */}
            <Text bold center smallCaps h4 sx={{ mt: 2, ml: 1 }}>{t('brutes')}</Text>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              bgcolor: 'background.paperLight',
            }}
            >
              {user && user.brutes.map((brute) => (
                <StyledButton
                  key={brute.name}
                  image="/images/arena/brute-bg.gif"
                  imageHover="/images/arena/brute-bg-hover.gif"
                  contrast={false}
                  shadow={false}
                  onClick={() => { navigate(`/${brute.name}/cell`); }}
                  sx={{
                    width: 190,
                    height: 102,
                    mx: 1,
                    my: 0.5,
                  }}
                >
                  <Box sx={{
                    width: 185,
                    height: 89,
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
                        <Text bold color="secondary" sx={{ display: 'inline' }}>{brute.name}</Text>
                      </Box>
                    </Box>
                    <Text bold smallCaps color="text.primary">
                      {t('level')}
                      <Text component="span" bold color="secondary"> {brute.level}</Text>
                      <Box
                        component="img"
                        src={`/images/rankings/lvl_${brute.ranking}.png`}
                        sx={{
                          verticalAlign: 'middle',
                          height: 16,
                          ml: 0.5,
                        }}
                      />
                    </Text>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                      <BruteHP hp={brute.hp} />
                      <Box flexGrow={1} sx={{ ml: 0.5 }}>
                        <ArenaStat
                          stat={FightStat.STRENGTH}
                          value={brute.strengthValue}
                          hideSkillText
                        />
                        <ArenaStat
                          stat={FightStat.AGILITY}
                          value={brute.agilityValue}
                          hideSkillText
                        />
                        <ArenaStat
                          stat={FightStat.SPEED}
                          value={brute.speedValue}
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
                </StyledButton>
              ))}
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};

export default UserView;
