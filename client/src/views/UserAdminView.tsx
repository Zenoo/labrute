import { UserGetAdminResponse } from '@labrute/core';
import { AchievementName, Lang } from '@labrute/prisma';
import { Block } from '@mui/icons-material';
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, Stack, Tooltip } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const UserAdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user: admin } = useAuth();

  const [userId, setUserId] = React.useState('');
  const [user, setUser] = React.useState<Omit<UserGetAdminResponse, 'achievements'> | null>(null);
  const [achievements, setAchievements] = React.useState<UserGetAdminResponse['achievements']>([]);
  const [initialAchievements, setInitialAchievements] = React.useState<UserGetAdminResponse['achievements']>([]);

  // Change user id
  const changeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  }, []);

  // Fetch user
  const updateUser = useCallback(() => {
    Server.User.getForAdmin(userId).then((u) => {
      setUser({
        id: u.id,
        lang: u.lang,
        name: u.name,
        admin: u.admin,
        moderator: u.moderator,
        connexionToken: u.connexionToken,
        bruteLimit: u.bruteLimit,
        gold: u.gold,
        fightSpeed: u.fightSpeed,
        backgroundMusic: u.backgroundMusic,
        dinorpgDone: u.dinorpgDone,
        bannedAt: u.bannedAt,
        banReason: u.banReason,
        ips: u.ips,
        displayVersusPage: u.displayVersusPage,
        displayOpponentDetails: u.displayOpponentDetails,
        lastSeen: u.lastSeen,
      });
      setAchievements(u.achievements);
      // Map to new array to avoid reference
      setInitialAchievements(u.achievements.map((a) => ({ ...a })));
    }).catch(catchError(Alert));
  }, [Alert, userId]);

  // Trigger user fetch when userId changes (debounced for 1s)
  useEffect(() => {
    if (!userId) return undefined;

    const timeout = setTimeout(() => {
      updateUser();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userId, updateUser]);

  // Save user
  const saveUser = useCallback(() => {
    if (!user) return;

    const changedAchievements = achievements.filter((a) => {
      const initialAchievement = initialAchievements.find((b) => b.name === a.name);
      return !initialAchievement || initialAchievement.count !== a.count;
    });

    Server.User.adminUpdate(user.id, {
      user: {
        lang: user.lang,
        admin: user.admin,
        moderator: user.moderator,
        bruteLimit: user.bruteLimit,
        gold: user.gold,
        fightSpeed: user.fightSpeed,
        backgroundMusic: user.backgroundMusic,
      },
      achievements: changedAchievements,
    }).then(() => {
      Alert.open('success', 'User saved');
    }).catch(catchError(Alert));
  }, [Alert, achievements, initialAchievements, user]);

  return (
    <Page title={`${userId || ''} ${t('MyBrute')}`} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Text bold h3 smallCaps color="secondary">User</Text>
            <StyledInput
              onChange={changeUserId}
              value={userId}
            />
            {user && (
              <>
                <Text h2 smallCaps>
                  {user.name}
                  {user.bannedAt && (
                    <Tooltip title={user.banReason || ''}>
                      <Block color="error" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                </Text>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Language</InputLabel>
                      <Select
                        value={user.lang}
                        label="Language"
                        onChange={(event) => {
                          setUser((b) => (b ? ({
                            ...b,
                            lang: event.target.value as Lang,
                          }) : null));
                        }}
                      >
                        {Object.values(Lang).map((lang) => (
                          <MenuItem key={lang} value={lang}>
                            {lang}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={user.admin}
                          onChange={(event) => {
                            setUser((b) => (b ? ({
                              ...b,
                              admin: event.target.checked,
                            }) : null));
                          }}
                        />
                      )}
                      label="Admin"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={user.moderator}
                          onChange={(event) => {
                            setUser((b) => (b ? ({
                              ...b,
                              moderator: event.target.checked,
                            }) : null));
                          }}
                        />
                      )}
                      label="Moderator"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <StyledInput
                      label="Brute limit"
                      value={user.bruteLimit}
                      onChange={(event) => {
                        setUser((b) => (b ? ({
                          ...b,
                          bruteLimit: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <StyledInput
                      label="Gold"
                      value={user.gold}
                      onChange={(event) => {
                        setUser((b) => (b ? ({
                          ...b,
                          gold: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <StyledInput
                      label="Fight Speed"
                      value={user.fightSpeed}
                      onChange={(event) => {
                        setUser((b) => (b ? ({
                          ...b,
                          fightSpeed: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={user.backgroundMusic}
                          onChange={(event) => {
                            setUser((b) => (b ? ({
                              ...b,
                              backgroundMusic: event.target.checked,
                            }) : null));
                          }}
                        />
                      )}
                      label="Background Music"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Text h3 bold upperCase typo="handwritten">{t('achievements')}</Text>
                  </Grid>
                  {Object.keys(AchievementName).map((key) => (
                    <Grid item xs={6} sm={3} key={key}>
                      <StyledInput
                        label={key}
                        value={achievements
                          .find((a) => a.name === key as AchievementName)?.count || 0}
                        onChange={(event) => {
                          const count = +event.target.value;
                          setAchievements((a) => {
                            const achievement = a.find((b) => b.name === key as AchievementName);
                            if (achievement) {
                              achievement.count = count;
                            } else {
                              a.push({
                                name: key as AchievementName,
                                count,
                              });
                            }
                            return [...a];
                          });
                        }}
                        fullWidth
                      />
                    </Grid>
                  ))}
                </Grid>
                <FantasyButton color="success" onClick={saveUser}>Save</FantasyButton>
              </>
            )}
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </Page>
  );
};

export default UserAdminView;
