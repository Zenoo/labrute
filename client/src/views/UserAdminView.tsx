import { LANGUAGES, Language, UserWithAchievements } from '@labrute/core';
import { Achievement, AchievementName, User } from '@labrute/prisma';
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material';
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

  const [userName, setUserName] = React.useState('');
  const [user, setUser] = React.useState<User | null>(null);
  const [achievements, setAchievements] = React.useState<Achievement[]>([]);
  const { user: admin } = useAuth();

  // Change user name
  const changeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  // Fetch user
  const updateUser = useCallback(() => {
    Server.User.get({
      name: userName,
      include: { achievements: true },
    }).then((u) => {
      setUser({
        id: u.id,
        lang: u.lang,
        name: u.name,
        admin: u.admin,
        connexionToken: u.connexionToken,
        bruteLimit: u.bruteLimit,
        gold: u.gold,
        fightSpeed: u.fightSpeed,
        backgroundMusic: u.backgroundMusic,
      });
      setAchievements((u as UserWithAchievements).achievements);
    }).catch(catchError(Alert));
  }, [Alert, userName]);

  // Trigger user fetch when userName changes (debounced for 1s)
  useEffect(() => {
    if (!userName) return undefined;

    const timeout = setTimeout(() => {
      updateUser();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userName, updateUser]);

  // Save user
  const saveUser = useCallback(() => {
    if (!user) return;

    Server.User.adminUpdate(user.id, {
      user: {
        lang: user.lang,
        admin: user.admin,
        bruteLimit: user.bruteLimit,
        gold: user.gold,
        fightSpeed: user.fightSpeed,
        backgroundMusic: user.backgroundMusic,
      },
      achievements,
    }).then(() => {
      Alert.open('success', 'User saved');
    }).catch(catchError(Alert));
  }, [Alert, achievements, user]);

  return (
    <Page title={`${userName || ''} ${t('MyBrute')}`} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Text bold h3 smallCaps color="secondary">User</Text>
            <StyledInput
              onChange={changeUserName}
              value={userName}
            />
            {user && (
              <>
                <Text h2 smallCaps>{user.name}</Text>
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
                            lang: event.target.value as Language,
                          }) : null));
                        }}
                      >
                        {LANGUAGES.map((lang) => (
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
                          .find((a) => !a.bruteId && a.name === key as AchievementName)?.count || 0}
                        onChange={(event) => {
                          const count = +event.target.value;
                          setAchievements((a) => {
                            const achievement = a.find((b) => b.name === key as AchievementName);
                            if (achievement) {
                              achievement.count = count;
                            } else {
                              a.push({
                                id: 0,
                                name: key as AchievementName,
                                count,
                                bruteId: null,
                                userId: user.id,
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
                <FantasyButton onClick={saveUser}>Save</FantasyButton>
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
