import { BanReason, UserGetAdminResponse } from '@labrute/core';
import {
  AchievementName, InventoryItemType, Lang,
} from '@labrute/prisma';
import {
  Block, ExpandLess, ExpandMore,
} from '@mui/icons-material';
import {
  Box, Checkbox, Collapse, FormControl, FormControlLabel,
  Grid, InputLabel, MenuItem, Paper, Select,
  Stack, Tooltip, Button, TextField,
} from '@mui/material';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { AdminPage } from '../../components/admin/AdminPage';
import { AdminGrid } from '../../components/admin/AdminGrid';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';
import dayjs from 'dayjs';
import { useConfirm } from '../../hooks/useConfirm';
import { useParams } from 'react-router';
import { Link } from '../../components/Link';
import { UserCasePanel } from '../../components/admin/UserCasePanel';
import { UserRelatedAccountsPanel } from '../../components/admin/UserRelatedAccountsPanel';

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
  const requestId = useRef(0);
  const [securityHistory, setSecurityHistory] = useState<UserGetAdminResponse['securityHistory']>([]);
  const [banHistory, setBanHistory] = useState<UserGetAdminResponse['banHistory']>([]);
  const [brutesOpen, setBrutesOpen] = useState(false);
  const [item, setItem] = useState<InventoryItemType | ''>('');

  const invalidateRequests = useCallback(() => {
    requestId.current++;
  }, []);

  // Change user id or name
  const changeUserIdOrName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    invalidateRequests();
    setUser(null);
    setSecurityHistory([]);
    setBanHistory([]);
    setDuplicates([]);
    setUserIdOrName(e.target.value.trim());
  }, [invalidateRequests]);

  // Fetch user
  const updateUser = useCallback(() => {
    const request = ++requestId.current;

    Server.User.getForAdmin({ identifier: userIdOrName }).then((result) => {
      if (request !== requestId.current) {
        return;
      }

      const { achievements: currentAchievements, ...profile } = result.user;

      setDuplicates(result.duplicates);
      setUser(profile);
      setSecurityHistory(result.securityHistory);
      setBanHistory(result.banHistory ?? []);
      setAchievements(currentAchievements);
      setInitialAchievements(currentAchievements.map((entry) => ({ ...entry })));
    }).catch(catchError(Alert));
  }, [Alert, Server.User, userIdOrName]);

  // Trigger user fetch when userId changes (debounced for 1s)
  useEffect(() => {
    if (!userIdOrName) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      updateUser();
    }, 1000);

    return () => {
      clearTimeout(timeout);
      invalidateRequests();
    };
  }, [userIdOrName, updateUser, invalidateRequests]);

  // Trigger user fetch when urlUserId changes
  useEffect(() => {
    if (urlUserId) {
      invalidateRequests();
      setUser(null);
      setSecurityHistory([]);
      setBanHistory([]);
      setDuplicates([]);
      setUserIdOrName(urlUserId);
    }
  }, [urlUserId, invalidateRequests]);

  // Save user
  const saveUser = useCallback(() => {
    if (!user) {
      return;
    }

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
    if (!user) {
      return;
    }

    Server.User.unban({ userId: user.id }).then(() => {
      Alert.open('success', 'User unbanned');
      updateUser();
    }).catch(catchError(Alert));
  };

  // Ban user
  const banUser = () => {
    if (!user || !banReason) {
      return;
    }

    Confirm.open(t('user:ban'), t('user:banConfirm'), () => {
      Server.User.ban({
        userId: user.id,
        reason: banReason,
      })
        .then(() => {
          Alert.open('success', t('user:banSuccess'));
          updateUser();
        }).catch(catchError(Alert));
    });
  };

  // Delete account
  const deleteAccount = () => {
    if (!user) {
      return;
    }

    if (user.id === admin?.id) {
      return;
    }

    Confirm.open(t('user:deleteAccount'), t('user:deleteAccountConfirm'), () => {
      Server.User.deleteAccount({ id: user.id }).then(() => {
        Alert.open('success', t('user:accountDeleted'));
        updateUser();
      }).catch(catchError(Alert));
    });
  };

  // Give item
  const giveItem = useCallback(() => {
    if (!user || !item) {
      return;
    }

    Server.User.giveItem({
      id: user?.id,
      item,
    }).then(() => {
      Alert.open('success', 'Item given');
    }).catch(catchError(Alert));
  }, [Alert, Server.User, user, item]);

  const renderExpandButton = (
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ) => (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      {open ? (
        <ExpandMore
          onClick={() => setOpen((prev) => !prev)}
        />
      ) : (
        <ExpandLess
          onClick={() => setOpen((prev) => !prev)}
        />
      )}
    </Box>
  );

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {admin?.admin ? (
          <Stack spacing={2}>
            <Text bold h6 color="secondary">User</Text>
            <TextField
              label="User name, ID or appeal code"
              onChange={changeUserIdOrName}
              value={userIdOrName}
            />
            {duplicates.length > 0 && (
              <Box sx={{
                bgcolor: 'warning.main',
                color: 'warning.contrastText',
                p: 2,
                borderRadius: 1,
                mb: 2,
              }}>
                <Text bold>Duplicates:</Text>
                {duplicates.map((dup) => (
                  <Box key={dup.id} sx={{
                    border: '1px solid',
                    borderColor: 'warning.dark',
                    borderRadius: 1,
                    p: 1,
                    mt: 1,
                  }}>
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
                <Text h5>
                  {user.name} ({user.id})
                  {user.bannedAt && (
                    <Tooltip title={user.banReason || ''}>
                      <Block color="error" sx={{ ml: 1 }} />
                    </Tooltip>
                  )}
                </Text>
                <Paper sx={{ p: 2 }}>
                  <Text h6>Account ban information</Text>
                  {user.bannedAt ? <>
                    <Text>Banned at {dayjs(user.bannedAt).utc().format('YYYY-MM-DD HH:mm:ss')} UTC</Text>
                    <Text>Ban reason: {user.banReason || 'Not recorded'}</Text>
                    <Text>
                      Appeal code: {user.banAppealCode
                      ? <Link to={`/admin-panel/multiple-accounts?case=MC-${user.banAppealCode}`}>
                        MC-{user.banAppealCode}
                      </Link>
                      : `USER-${user.id}`}
                    </Text>
                  </> : <Text>Not currently banned.</Text>}
                  {banHistory.length > 0 && <>
                    <Text bold>Latest 25 recorded ban dates (legacy account logs)</Text>
                    {banHistory.map((entry) => <Text key={entry.id}>
                      {dayjs(entry.date).utc().format('YYYY-MM-DD HH:mm:ss')} UTC
                    </Text>)}
                    <Text>
                      These logs do not record the original reason, actor or linked accounts.
                    </Text>
                  </>}
                </Paper>
                <Button color="warning" onClick={deleteAccount} disabled={!!user.bannedAt}>Delete Account</Button>
                <Button color="warning" onClick={unban} disabled={!user.bannedAt}>Unban</Button>
                {!user.bannedAt && (
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
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
                    <Button
                      onClick={banUser}
                      color="error"
                      sx={{ m: 1 }}
                    >
                      {t('user:ban')}
                    </Button>
                  </Box>
                )}
                <Paper sx={{ minWidth: 0 }}>
                  <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                    <Text h6 bold sx={{ p: 2 }}>
                      Brutes ({user.brutes.filter((brute) => !brute.deletedAt).length}
                      /{user.brutes.length})
                    </Text>
                    {renderExpandButton(brutesOpen, setBrutesOpen)}
                  </Box>
                  <Collapse in={brutesOpen} mountOnEnter>
                    <AdminGrid
                      key={user.id}
                      label="Owned brutes"
                      rows={user.brutes}
                      columns={[
                        {
                          field: 'name',
                          heading: 'Name',
                          render: (brute, { tabIndex }) => (
                            <Link to={`/admin-panel/brute/${brute.id}`} tabIndex={tabIndex}>
                              {brute.name}
                            </Link>
                          ),
                        },
                        {
                          field: 'id',
                          heading: 'ID',
                          minWidth: 280,
                          render: (brute) => brute.id,
                        },
                        {
                          field: 'deletedAt',
                          heading: 'Deleted at (UTC)',
                          kind: 'date' as const,
                          render: (brute) => (
                            brute.deletedAt
                              ? dayjs.utc(brute.deletedAt).format('YYYY-MM-DD HH:mm:ss')
                              : ''
                          ),
                        },
                        {
                          field: 'deletionReason',
                          heading: 'Deletion reason',
                          value: (brute) => brute.deletionReason ? t(`deletionReason.${brute.deletionReason}`) : null,
                          render: (brute) => (
                            brute.deletionReason ? t(`deletionReason.${brute.deletionReason}`) : ''
                          ),
                        },
                      ]}
                    />
                  </Collapse>
                </Paper>
                <UserCasePanel key={user.id} userId={user.id} />
                <UserRelatedAccountsPanel key={`related-${user.id}`} userId={user.id} />
                <Paper sx={{ p: 2 }}>
                  <Text h6>Latest 25 account sanction decisions</Text>
                  {securityHistory.length === 0 && <Text>No recorded account decisions.</Text>}
                  {securityHistory.length === 0 && user.bannedAt && <Text>
                    This ban has no structured audit entry. It may predate case history;
                    the ban details above and historical account links remain available for review.
                  </Text>}
                  {securityHistory.map((entry) => (
                    <Text key={entry.id} sx={{ overflowWrap: 'anywhere' }}>
                      {dayjs(entry.createdAt).utc().format('YYYY-MM-DD HH:mm:ss')}: {entry.action}
                      {' '}by {entry.actorId ?? 'automatic or unrecorded actor'}. {entry.reason}
                    </Text>
                  ))}
                </Paper>
                <Grid container spacing={1}>
                  <Grid item xs={12} sm={6} lg={3}>
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
                  <Grid item xs={12} sm={6} lg={3}>
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
                  <Grid item xs={12} sm={6} lg={3}>
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
                  <Grid item xs={12} sm={6} lg={3}>
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
                  <Grid item xs={12} sm={6} lg={3}>
                    <TextField
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
                  <Grid item xs={12} sm={6} lg={3}>
                    <TextField
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
                  <Grid item xs={12} sm={6} lg={3}>
                    <TextField
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
                  <Grid item xs={12} sm={6} lg={3}>
                    <TextField
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
                    <Text h6 bold>{t('achievements')}</Text>
                  </Grid>
                  {Object.keys(AchievementName).map((key) => (
                    <Grid item xs={12} sm={6} lg={3} key={key}>
                      <TextField
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
                <Button color="success" onClick={saveUser}>Save</Button>
                <Select
                  variant="filled"
                  value={item}
                  onChange={({ target: { value } }) => setItem(value as InventoryItemType)}
                  sx={{ m: 1 }}
                >
                  {Object.values(InventoryItemType).map((it) => (
                    <MenuItem key={it} value={it}>{t(`inventory:item.${it}`)}</MenuItem>
                  ))}
                </Select>
                <Button color="success" onClick={giveItem}>Add item</Button>
              </>
            )}
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </AdminPage>
  );
};
