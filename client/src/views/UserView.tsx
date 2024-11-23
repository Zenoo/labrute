import { AchievementData, BanReason, TitleRequirements, UserGetProfileResponse, formatLargeNumber, getFightsLeft } from '@labrute/core';
import { Check, QuestionMark } from '@mui/icons-material';
import { Box, Grid, List, ListItem, ListItemText, ListSubheader, MenuItem, Paper, Select, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { AchievementHeader } from '../components/AchievementHeader';
import { AchievementTooltip } from '../components/AchievementTooltip';
import { ActivityStatus } from '../components/ActivityStatus';
import BruteButton from '../components/Brute/BruteButton';
import FantasyButton from '../components/FantasyButton';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useConfirm } from '../hooks/useConfirm';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const UserView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { userId } = useParams();
  const Alert = useAlert();
  const { user: authedUser, updateData, modifiers } = useAuth();
  const Confirm = useConfirm();

  const [user, setUser] = useState<UserGetProfileResponse | null>(null);
  const [banReason, setBanReason] = useState('');

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
          fightsLeft: getFightsLeft(brute, modifiers) + 1,
          lastFight: new Date(),
        })),
      }) : null));
    }).catch(catchError(Alert));
  }, [Alert, authedUser, modifiers, t, updateData]);

  // Ban user
  const banUser = useCallback(() => {
    if (!user || !banReason) return;

    Confirm.open(t('ban'), t('banConfirm'), () => {
      Server.User.ban(user.id, banReason).then(() => {
        Alert.open('success', t('banSuccess'));
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, banReason, t, user]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
      {user && (
        <>
          <Paper sx={{ mx: 4 }}>
            <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>
              <ActivityStatus user={user} sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('userProfile', { user: user.name })}
            </Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
            {authedUser?.admin && user.id !== authedUser.id && (
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Select
                  variant="standard"
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                  sx={{ m: 1 }}
                >
                  {Object.values(BanReason).map((reason) => (
                    <MenuItem key={reason} value={reason}>{t(`banReason.${reason}`)}</MenuItem>
                  ))}
                </Select>
                <FantasyButton
                  onClick={banUser}
                  color="error"
                  sx={{ m: 1 }}
                >
                  {t('ban')}
                </FantasyButton>
              </Box>
            )}
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
                  <AchievementHeader />
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
                      <AchievementTooltip key={achievement.name} achievement={achievement}>
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
                      </AchievementTooltip>
                    ))}
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <AchievementHeader sx={{
                  mt: -0.5,
                  mb: -1.5,
                }}
                />
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
                            <AchievementTooltip achievement={achievement}>
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
                            </AchievementTooltip>
                          )}
                        >
                          {availableTitles.map((titleCount, i) => (
                            <Tooltip key={titleCount} title={`${t(`achievements.${achievement.name}`)} x ${titleCount}`}>
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
                <FantasyButton
                  color="secondary"
                  to="/achievements/rankings"
                  sx={{
                    mt: 3,
                  }}
                >
                  {t('ranking')}
                </FantasyButton>
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
                    {t('dinorpg')}
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
                <BruteButton key={brute.id} brute={brute} />
              ))}
            </Box>
            {/* FAVORITE FIGHTS */}
            {user.id === authedUser?.id && !!user.favoriteFights.length && (
              <>
                <Text bold center smallCaps h4 sx={{ mt: 2, ml: 1 }}>{t('favoriteFights')}</Text>
                <Table sx={{
                  maxWidth: 1,
                  '& th': {
                    bgcolor: 'secondary.main',
                    color: 'secondary.contrastText',
                    py: 0.5,
                    px: 1,
                    fontWeight: 'bold',
                    border: '1px solid',
                    borderColor: 'background.default',
                  },
                  '& td': {
                    bgcolor: 'background.paperDark',
                    py: 0.5,
                    px: 1,
                    border: '1px solid',
                    borderColor: 'background.default',
                  },
                }}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>{t('fight')}</TableCell>
                      <TableCell align="right">{t('date')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {user.favoriteFights.map((fight) => (
                      <TableRow
                        key={fight.id}
                      >
                        <TableCell>
                          <Link to={`/${fight.brute1.name}/fight/${fight.id}`}>
                            {fight.brute1.name} {t('vs')} {fight.brute2?.name}
                          </Link>
                        </TableCell>
                        <TableCell align="right">{moment.utc(fight.date).format('DD/MM/YYYY')}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </>
            )}
          </Paper>
        </>
      )}
    </Page>
  );
};

export default UserView;
