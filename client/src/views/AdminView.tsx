import { AdminPanelBrute } from '@labrute/core';
import { DestinyChoiceSide, FightModifier, Gender, InventoryItemType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Alert as MuiAlert, Paper, Select, Stack, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BruteRender from '../components/Brute/Body/BruteRender';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const AdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user } = useAuth();

  const [bruteName, setBruteName] = useState('');
  const [bruteId, setBruteId] = useState('');
  const [brute, setBrute] = useState<AdminPanelBrute | null>(null);
  const [globalTournamentValid, setGlobalTournamentValid] = useState(true);
  const [nextModifiers, setNextModifiers] = useState<FightModifier[]>([]);
  const [item, setItem] = useState<InventoryItemType | ''>('');

  // Change bruteName
  const changeBruteName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteName(e.target.value);
  }, []);

  // Change bruteId
  const changeBruteId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteId(e.target.value);
  }, []);

  // Delete daily tournaments
  const deleteDailyTournaments = useCallback(() => {
    Server.Tournament.deleteDaily().then(() => {
      Alert.open('success', 'Daily tournaments deleted');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Delete global tournament
  const deleteGlobalTournament = useCallback(() => {
    Server.Tournament.deleteGlobal().then(() => {
      Alert.open('success', 'Global tournament deleted');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Run daily job
  const runDailyJob = useCallback(() => {
    Server.User.runDailyJob().then(() => {
      Alert.open('success', 'Daily job done');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Fetch brute
  const updateBrute = useCallback(() => {
    Server.Brute.getForAdmin(bruteName).then((b) => {
      setBrute(b);
    }).catch(catchError(Alert));
  }, [Alert, bruteName]);

  // Trigger brute fetch when bruteName changes (debounced for 1s)
  useEffect(() => {
    if (!bruteName) return undefined;

    const timeout = setTimeout(() => {
      updateBrute();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [bruteName, updateBrute]);

  // Fetch global tournament status
  useEffect(() => {
    Server.Tournament.isGlobalTournamentValid().then(({ isValid }) => {
      setGlobalTournamentValid(isValid);
    }).catch(catchError(Alert));
  }, [Alert]);

  // Fetch next modifiers
  useEffect(() => {
    Server.User.getNextModifiers().then((modifiers) => {
      setNextModifiers(modifiers);
    }).catch(catchError(Alert));
  }, [Alert]);

  // Save next modifiers
  const saveNextModifiers = useCallback(() => {
    Server.User.setNextModifiers(nextModifiers).then(() => {
      Alert.open('success', 'Next modifiers saved');
    }).catch(catchError(Alert));
  }, [Alert, nextModifiers]);

  // Save brute
  const saveBrute = useCallback(() => {
    if (!brute) return;

    const bruteData = {
      ...brute,
      user: undefined,
    };

    Server.Brute.adminUpdate(bruteName, {
      ...bruteData,
      destinyPath: {
        set: brute.destinyPath,
      },
      userId: brute.userId || null,
      masterId: brute.masterId || null,
      clanId: brute.clanId || null,
    }).then(() => {
      Alert.open('success', 'Brute saved');
    }).catch(catchError(Alert));
  }, [Alert, brute, bruteName]);

  // Restore brute
  const restoreBrute = useCallback(() => {
    if (!bruteId) return;

    Server.Brute.restore(bruteId).then(() => {
      Alert.open('success', 'Brute restored');
    }).catch(catchError(Alert));
  }, [Alert, bruteId]);

  // Give item
  const giveItem = useCallback(() => {
    if (!brute || !item) return;

    Server.Brute.giveItem(brute.id, item).then(() => {
      Alert.open('success', 'Item given');
    }).catch(catchError(Alert));
  }, [Alert, brute, item]);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl="/">
      {!globalTournamentValid && (
        <MuiAlert severity="warning" variant="filled">
          <Text h5>Global tournament malformed</Text>
        </MuiAlert>
      )}
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {user?.admin ? (
          <Stack spacing={2}>
            <Stack direction="row" spacing={0} sx={{ flexWrap: 'wrap', gap: 1 }}>
              <FantasyButton color="error" onClick={deleteDailyTournaments}>DELETE DAILY TOURNAMENTS</FantasyButton>
              <FantasyButton color="error" onClick={deleteGlobalTournament}>DELETE GLOBAL TOURNAMENT</FantasyButton>
              <FantasyButton color="warning" onClick={runDailyJob}>RUN DAILY JOB</FantasyButton>
              <FantasyButton color="secondary" to="/admin-panel/user">USER ADMIN</FantasyButton>
              <FantasyButton color="primary" to="/admin-panel/report">REPORTS</FantasyButton>
              <FantasyButton color="error" to="/admin-panel/banned-users">BANLIST</FantasyButton>
              <FantasyButton color="warning" to="/admin-panel/multiple-accounts">MULTIS</FantasyButton>
            </Stack>
            <Divider />
            <Text bold h3 smallCaps color="secondary">Next modifiers</Text>
            <Select
              variant="standard"
              multiple
              value={nextModifiers}
              onChange={({ target: { value } }) => setNextModifiers(typeof value === 'string' ? value.split(',') as FightModifier[] : value)}
              sx={{ m: 1 }}
            >
              {Object.values(FightModifier).map((modifier) => (
                <MenuItem key={modifier} value={modifier}>{t(`modifier.${modifier}`)}</MenuItem>
              ))}
            </Select>
            <FantasyButton color="success" onClick={saveNextModifiers}>Save</FantasyButton>
            <Divider />
            <Text bold h3 smallCaps color="secondary">{t('brute')}</Text>
            <TextField
              label="Brute name"
              variant="outlined"
              onChange={changeBruteName}
              value={bruteName}
            />
            {brute && brute.body && brute.colors && (
              <>
                <Text h2 smallCaps>{brute.name} ({brute.user?.name} {brute.user?.id})</Text>
                <Box width={100}>
                  <BruteRender brute={brute} />
                </Box>
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Destiny path"
                      value={brute.destinyPath}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          destinyPath: event.target.value.split(',') as DestinyChoiceSide[],
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Level"
                      value={brute.level}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          level: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="XP"
                      value={brute.xp}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          xp: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="HP"
                      value={brute.hp}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          hp: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Endurance stat"
                      value={brute.enduranceStat}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          enduranceStat: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Endurance modifier"
                      value={brute.enduranceModifier}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          enduranceModifier: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Endurance value"
                      value={brute.enduranceValue}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          enduranceValue: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Strength stat"
                      value={brute.strengthStat}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          strengthStat: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Strength modifier"
                      value={brute.strengthModifier}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          strengthModifier: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Strength value"
                      value={brute.strengthValue}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          strengthValue: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Agility stat"
                      value={brute.agilityStat}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          agilityStat: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Agility modifier"
                      value={brute.agilityModifier}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          agilityModifier: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Agility value"
                      value={brute.agilityValue}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          agilityValue: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Speed stat"
                      value={brute.speedStat}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          speedStat: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Speed modifier"
                      value={brute.speedModifier}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          speedModifier: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Speed value"
                      value={brute.speedValue}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          speedValue: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Ranking"
                      value={brute.ranking}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          ranking: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        value={brute.gender}
                        label="Gender"
                        onChange={(event) => {
                          setBrute((b) => (b ? ({
                            ...b,
                            gender: event.target.value as Gender,
                          }) : null));
                        }}
                      >
                        <MenuItem value={Gender.male}>{Gender.male}</MenuItem>
                        <MenuItem value={Gender.female}>{Gender.female}</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="User ID"
                      value={brute.userId || ''}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          userId: event.target.value || null,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Weapons</InputLabel>
                      <Select
                        value={brute.weapons}
                        label="Weapons"
                        multiple
                        onChange={(event) => {
                          setBrute((b) => (b ? ({
                            ...b,
                            weapons: event.target.value as WeaponName[],
                          }) : null));
                        }}
                      >
                        {Object.values(WeaponName).map((weapon) => (
                          <MenuItem key={weapon} value={weapon}>
                            {weapon}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Skills</InputLabel>
                      <Select
                        value={brute.skills}
                        label="Skills"
                        multiple
                        onChange={(event) => {
                          setBrute((b) => (b ? ({
                            ...b,
                            skills: event.target.value as SkillName[],
                          }) : null));
                        }}
                      >
                        {Object.values(SkillName).map((skill) => (
                          <MenuItem key={skill} value={skill}>
                            {skill}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControl fullWidth>
                      <InputLabel>Pets</InputLabel>
                      <Select
                        value={brute.pets}
                        label="Pets"
                        multiple
                        onChange={(event) => {
                          setBrute((b) => (b ? ({
                            ...b,
                            pets: event.target.value as PetName[],
                          }) : null));
                        }}
                      >
                        {Object.values(PetName).map((pet) => (
                          <MenuItem key={pet} value={pet}>
                            {pet}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Master ID"
                      value={brute.masterId || ''}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          masterId: event.target.value || null,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Pupils counts"
                      value={brute.pupilsCount}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          pupilsCount: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Clan ID"
                      value={brute.clanId || ''}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          clanId: event.target.value || null,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <FormControlLabel
                      control={(
                        <Checkbox
                          checked={brute.registeredForTournament}
                          onChange={(event) => {
                            setBrute((b) => (b ? ({
                              ...b,
                              registeredForTournament: event.target.checked,
                            }) : null));
                          }}
                        />
                      )}
                      label="Registered for tournament"
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DatePicker
                      label="Next tournament date"
                      value={brute.nextTournamentDate
                        ? moment.utc(brute.nextTournamentDate)
                        : null}
                      onChange={(newValue) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          nextTournamentDate: moment.utc(newValue).toDate(),
                        }) : null));
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DatePicker
                      label="Current tournament date"
                      value={brute.currentTournamentDate
                        ? moment.utc(brute.currentTournamentDate)
                        : null}
                      onChange={(newValue) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          currentTournamentDate: moment.utc(newValue).toDate(),
                        }) : null));
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Current tournament step watched"
                      value={brute.currentTournamentStepWatched}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          currentTournamentStepWatched: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DatePicker
                      label="Last fight"
                      value={brute.lastFight
                        ? moment.utc(brute.lastFight)
                        : null}
                      onChange={(newValue) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          lastFight: moment.utc(newValue).toDate(),
                        }) : null));
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Fights left"
                      value={brute.fightsLeft}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          fightsLeft: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Victories"
                      value={brute.victories}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          victories: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DatePicker
                      label="Opponents generated at"
                      value={brute.opponentsGeneratedAt
                        ? moment.utc(brute.opponentsGeneratedAt)
                        : null}
                      onChange={(newValue) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          opponentsGeneratedAt: moment.utc(newValue).toDate(),
                        }) : null));
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <DatePicker
                      label="Can rank up since"
                      value={brute.canRankUpSince
                        ? moment.utc(brute.canRankUpSince)
                        : null}
                      onChange={(newValue) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          canRankUpSince: moment.utc(newValue).toDate(),
                        }) : null));
                      }}
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Tournament wins"
                      value={brute.tournamentWins}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          tournamentWins: +event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Body"
                      value={brute.body}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          body: event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <TextField
                      label="Colors"
                      value={brute.colors}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          colors: event.target.value,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <FantasyButton color="success" onClick={saveBrute}>Save</FantasyButton>
                <Select
                  variant="filled"
                  value={item}
                  onChange={({ target: { value } }) => setItem(value as InventoryItemType)}
                  sx={{ m: 1 }}
                >
                  {Object.values(InventoryItemType).map((it) => (
                    <MenuItem key={it} value={it}>{it}</MenuItem>
                  ))}
                </Select>
                <FantasyButton color="success" onClick={giveItem}>Add item</FantasyButton>
              </>
            )}
            <Divider />
            <Text bold h3 smallCaps color="secondary">Restore brute with ID</Text>
            <Box sx={{ display: 'flex' }}>
              <TextField
                onChange={changeBruteId}
                value={bruteId}
                sx={{ mr: 2 }}
              />
              <FantasyButton color="success" onClick={restoreBrute}>Restore</FantasyButton>
            </Box>
          </Stack>
        ) : (
          <Text>Nice try buddy.</Text>
        )}
      </Paper>
    </Page>
  );
};

export default AdminView;
