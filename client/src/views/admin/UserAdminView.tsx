import { BanReason, UserGetAdminResponse } from '@labrute/core';
import { AchievementName, Lang } from '@labrute/prisma';
import { Block } from '@mui/icons-material';
import {
  Box,
  Checkbox, FormControl, FormControlLabel, Grid,
  InputLabel, MenuItem, Paper, Select, Stack, Table,
  TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip
} from '@mui/material';
import React, {
  useCallback, useEffect, useState
} from 'react';
import { useTranslation } from 'react-i18next';
import { FantasyButton } from '../../components/FantasyButton';
import { Page } from '../../components/Page';
import { StyledInput } from '../../components/StyledInput';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import dayjs from 'dayjs';
import { useConfirm } from '../../hooks/useConfirm';
import { useParams } from 'react-router';
import { Link } from '../../components/Link';

export const UserAdminView = () => {
  const { t } = useTranslation('admin');
  const { id: urlUserId } = useParams();
  const Alert = useAlert();
  const { user: admin } = useAuth();
  const Server = useServer();
  const Confirm = useConfirm();

  const [userIdOrName, setUserIdOrName] = useState(urlUserId ?? '');
  const [duplicates, setDuplicates] = useState<UserGetAdminResponse['duplicates']>([]);
  const [user, setUser] = useState<Omit<UserGetAdminResponse['user'], 'achievements'> | null>(null);
  const [achievements, setAchievements] = useState<UserGetAdminResponse['user']['achievements']>([]);
  const [initialAchievements, setInitialAchievements] = useState<UserGetAdminResponse['user']['achievements']>([]);
  const [banReason, setBanReason] = useState('');
  const [includeFingerprints, setIncludeFingerprints] = useState(true);

  // Change user id or name
  const changeUserIdOrName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserIdOrName(e.target.value.trim());
  }, []);

  // Fetch user
  const updateUser = useCallback(() => {
    Server.User.getForAdmin({ identifier: userIdOrName }).then(({ user: u, duplicates: d }) => {
      setDuplicates(d);
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
        createdAt: u.createdAt,
        bannedAt: u.bannedAt,
        banReason: u.banReason,
        ips: u.ips,
        fingerprints: u.fingerprints,
        browserIds: u.browserIds,
        displayVersusPage: u.displayVersusPage,
        displayOpponentDetails: u.displayOpponentDetails,
        lastSeen: u.lastSeen,
        transferedBrutesCount: u.transferedBrutesCount,
        brutes: u.brutes,
        otherUsersSharingFingerprints: u.otherUsersSharingFingerprints,
        otherUsersSharingBrowserIds: u.otherUsersSharingBrowserIds,
        sharedBrowserId: u.sharedBrowserId,
      });
      setAchievements(u.achievements);
      // Map to new array to avoid reference
      setInitialAchievements(u.achievements.map((a) => ({ ...a })));
    }).catch(catchError(Alert));
  }, [Alert, Server.User, userIdOrName]);

  // Trigger user fetch when userId changes (debounced for 1s)
  useEffect(() => {
    if (!userIdOrName) return undefined;

    const timeout = setTimeout(() => {
      updateUser();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [userIdOrName, updateUser]);

  // Trigger user fetch when urlUserId changes
  useEffect(() => {
    if (urlUserId) {
      setUserIdOrName(urlUserId);
    }
  }, [urlUserId]);

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
        transferedBrutesCount: user.transferedBrutesCount,
      },
      achievements: changedAchievements,
    }).then(() => {
      Alert.open('success', 'User saved');
    }).catch(catchError(Alert));
  }, [Alert, Server.User, achievements, initialAchievements, user]);

  // Unban user
  const unban = () => {
    if (!user) return;

    Server.User.unban({ userId: user.id }).then(() => {
      Alert.open('success', 'User unbanned');
      updateUser();
    }).catch(catchError(Alert));
  };
  // Ban user
  const banUser = () => {
    if (!user || !banReason) return;

    Confirm.open(t('user:ban'), t('user:banConfirm'), () => {
      Server.User.ban({ userId: user.id, reason: banReason, banFingerprints: includeFingerprints })
        .then(() => {
          Alert.open('success', t('user:banSuccess'));
          updateUser();
        }).catch(catchError(Alert));
    });
  };

  // Delete account
  const deleteAccount = () => {
    if (!user) return;
    if (user.id === admin?.id) return;

    Confirm.open(t('user:deleteAccount'), t('user:deleteAccountConfirm'), () => {
      Server.User.deleteAccount({ id: user.id }).then(() => {
        Alert.open('success', t('user:accountDeleted'));
        updateUser();
      }).catch(catchError(Alert));
    });
  };


  return (
    <Page title={t('adminPanel')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Text bold h3 smallCaps color="secondary">User</Text>
            <StyledInput
              onChange={changeUserIdOrName}
              value={userIdOrName}
            />
            {duplicates.length > 0 && (
              <Box sx={{ bgcolor: 'warning.main', color: 'warning.contrastText', p: 2, borderRadius: 1, mb: 2 }}>
                <Text bold>Duplicates:</Text>
                {duplicates.map((dup) => (
                  <Box key={dup.id} sx={{ border: '1px solid', borderColor: 'warning.dark', borderRadius: 1, p: 1, mt: 1 }}>
                    <Text>
                      {dup.name} (
                      <Link to={`/admin-panel/user/${dup.id}`}>
                        {dup.id}
                      </Link>
                      ){dup.bannedAt ? ` - Banned at ${dayjs.utc(dup.bannedAt).format('YYYY-MM-DD HH:mm:ss')}, reason: ${dup.banReason}` : ''}
                    </Text>
                  </Box>
                ))}
              </Box>
            )}
            {user && (
              <>
                <Text h2 smallCaps>
                  {user.name} ({user.id})
                  {user.bannedAt && (
                    <Tooltip title={user.banReason || ''}>
                      <Block color="error" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                </Text>
                <FantasyButton color="warning" onClick={deleteAccount} disabled={!!user.bannedAt}>Delete Account</FantasyButton>
                <FantasyButton color="warning" onClick={unban} disabled={!user.bannedAt}>Unban</FantasyButton>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={includeFingerprints}
                      onChange={(event) => {
                        setIncludeFingerprints(event.target.checked);
                      }}
                    />
                  )}
                  label="Ban fingerprints"
                />
                {!user.bannedAt && (
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Select
                      variant="standard"
                      value={banReason}
                      onChange={(e) => setBanReason(e.target.value)}
                      sx={{ m: 1 }}
                    >
                      {Object.values(BanReason).map((reason) => (
                        <MenuItem key={reason} value={reason}>{t(`user:banReason.${reason}`)}</MenuItem>
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
                <TableContainer component={Paper}>
                  <Text h3 bold upperCase typo="handwritten" sx={{ p: 2 }}>Brutes</Text>
                  <Table sx={{ minWidth: 650 }} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Deleted At</TableCell>
                        <TableCell align="right">Deletion Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {user.brutes.map((brute) => (
                        <TableRow
                          key={brute.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {brute.name}
                          </TableCell>
                          <TableCell align="right"><Link to={`/admin-panel/brute/${brute.id}`}>{brute.id}</Link></TableCell>
                          <TableCell align="right">{brute.deletedAt ? dayjs(brute.deletedAt).utc().format('YYYY-MM-DD HH:mm:ss') : ''}</TableCell>
                          <TableCell align="right">{brute.deletionReason ? t(`deletionReason.${brute.deletionReason}`) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper}>
                  <Text h3 bold upperCase typo="handwritten" sx={{ p: 2 }}>Users sharing fingerprints ({user.otherUsersSharingFingerprints.length + 1})</Text>
                  <Table sx={{ minWidth: 650 }} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Fingerprints</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Last seen</TableCell>
                        <TableCell align="right">Banned At</TableCell>
                        <TableCell align="right">Ban Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[user, ...user.otherUsersSharingFingerprints].map((otherUser) => (
                        <TableRow
                          key={otherUser.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {otherUser.name}
                          </TableCell>
                          <TableCell align="right"><Link to={`/admin-panel/user/${otherUser.id}`}>{otherUser.id}</Link></TableCell>
                          <TableCell align="right" dangerouslySetInnerHTML={{ __html: otherUser.fingerprints.map((f) => (user.fingerprints.includes(f) ? `<b>${f}</b>` : f)).join('<br>') }} />
                          <TableCell align="right">{dayjs(otherUser.createdAt).utc().format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                          <TableCell align="right">{dayjs(otherUser.lastSeen).utc().format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                          <TableCell align="right">{otherUser.bannedAt ? dayjs(otherUser.bannedAt).utc().format('YYYY-MM-DD HH:mm:ss') : ''}</TableCell>
                          <TableCell align="right">{otherUser.banReason ? t(`banReason.${otherUser.banReason}`) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TableContainer component={Paper} sx={{ mb: 2 }}>
                  <Text h3 bold upperCase typo="handwritten" sx={{ p: 2 }}>Users sharing browser IDs ({user.otherUsersSharingBrowserIds.length + 1})</Text>
                  <Table sx={{ minWidth: 650 }} size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Browser IDs</TableCell>
                        <TableCell align="right">Created At</TableCell>
                        <TableCell align="right">Last seen</TableCell>
                        <TableCell align="right">Banned At</TableCell>
                        <TableCell align="right">Ban Reason</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {[user, ...user.otherUsersSharingBrowserIds].map((otherUser) => (
                        <TableRow
                          key={otherUser.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {otherUser.name}
                          </TableCell>
                          <TableCell align="right"><Link to={`/admin-panel/user/${otherUser.id}`}>{otherUser.id}</Link></TableCell>
                          <TableCell align="right" dangerouslySetInnerHTML={{ __html: otherUser.browserIds.map((b) => (user.browserIds.includes(b) ? `<b>${b}</b>` : b)).join('<br>') }} />
                          <TableCell align="right">{dayjs(otherUser.createdAt).utc().format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                          <TableCell align="right">{dayjs(otherUser.lastSeen).utc().format('YYYY-MM-DD HH:mm:ss')}</TableCell>
                          <TableCell align="right">{otherUser.bannedAt ? dayjs(otherUser.bannedAt).utc().format('YYYY-MM-DD HH:mm:ss') : ''}</TableCell>
                          <TableCell align="right">{otherUser.banReason ? t(`banReason.${otherUser.banReason}`) : ''}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
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
                    <StyledInput
                      label="Transfered Brutes Count"
                      value={user.transferedBrutesCount}
                      onChange={(event) => {
                        setUser((b) => (b ? ({
                          ...b,
                          transferedBrutesCount: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
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
