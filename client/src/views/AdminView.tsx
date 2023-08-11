import { BruteWithBodyColors, availableBodyParts } from '@labrute/core';
import { BruteBody, BruteColors, DestinyChoiceSide, Gender, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BruteComponent from '../components/Brute/Body/BruteComponent';
import FantasyButton from '../components/FantasyButton';
import Page from '../components/Page';
import StyledInput from '../components/StyledInput';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const AdminView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();

  const [bruteName, setBruteName] = React.useState('');
  const [bruteId, setBruteId] = React.useState(0);
  const [brute, setBrute] = React.useState<BruteWithBodyColors | null>(null);
  const { user } = useAuth();

  // Change bruteName
  const changeBruteName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteName(e.target.value);
  }, []);

  // Change bruteId
  const changeBruteId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteId(+e.target.value);
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

  // Regenerate spritesheets
  const regenerateSpritesheets = useCallback(() => {
    Server.Spritesheet.regenerate().then(() => {
      Alert.open('success', 'Spritesheets regenerating');
    }).catch(catchError(Alert));
  }, [Alert]);

  // Fetch brute
  const updateBrute = useCallback(() => {
    Server.Brute.get({
      name: bruteName,
      include: { body: true, colors: true },
    }).then((b) => {
      setBrute(b as BruteWithBodyColors);
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

  // Save brute
  const saveBrute = useCallback(() => {
    if (!brute) return;

    const body = {
      ...brute.body,
      id: undefined,
      bruteId: undefined,
    };

    const colors = {
      ...brute.colors,
      id: undefined,
      bruteId: undefined,
    };

    Server.Brute.adminUpdate(bruteName, {
      ...brute,
      destinyPath: {
        set: brute.destinyPath,
      },
      userId: brute.userId || null,
      masterId: brute.masterId || null,
      clanId: brute.clanId || null,
      body: {
        update: body,
      },
      colors: {
        update: colors,
      },
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

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl="/">
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
              <FantasyButton color="success" onClick={regenerateSpritesheets}>REGENERATE SPRITESHEETS</FantasyButton>
            </Stack>
            <Divider />
            <Text bold h3 smallCaps color="secondary">{t('brute')}</Text>
            <StyledInput
              onChange={changeBruteName}
              value={bruteName}
            />
            {brute && brute.body && brute.colors && (
              <>
                <Text h2 smallCaps>{brute.name}</Text>
                <BruteComponent brute={brute} sx={{ width: 100 }} />
                <Grid container spacing={1}>
                  <Grid item xs={6} sm={3}>
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
                      label="Master ID"
                      value={brute.masterId || ''}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          masterId: +event.target.value || null,
                        }) : null));
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <StyledInput
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
                    <StyledInput
                      label="Clan ID"
                      value={brute.clanId || ''}
                      onChange={(event) => {
                        setBrute((b) => (b ? ({
                          ...b,
                          clanId: +event.target.value || null,
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
                    <StyledInput
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
                    <StyledInput
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
                    <StyledInput
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
                  {(Object.keys(availableBodyParts[brute.gender]) as unknown as (
                    keyof typeof availableBodyParts.male
                  )[]).map((bodyPart) => (
                    <Grid item xs={6} sm={3} key={bodyPart}>
                      <FormControl fullWidth>
                        <InputLabel>{bodyPart}</InputLabel>
                        <Select
                          value={brute.body?.[bodyPart]}
                          label={bodyPart}
                          onChange={(event) => {
                            setBrute((b) => (b ? ({
                              ...b,
                              body: {
                                ...b.body as BruteBody,
                                [bodyPart]: +event.target.value,
                              }
                            }) : null));
                          }}
                        >
                          {[...Array(availableBodyParts[brute.gender][bodyPart] + 1).keys()]
                            .map((part) => (
                              <MenuItem key={part} value={part}>
                                {part}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Grid>
                  ))}
                  {(['skinColor', 'skinShade', 'hairColor', 'hairShade', 'primaryColor', 'primaryShade', 'secondaryColor', 'secondaryShade', 'accentColor', 'accentShade'] as const).map((color) => (
                    <Grid item xs={6} sm={3} key={color}>
                      <StyledInput
                        label={color}
                        value={brute.colors?.[color]}
                        onChange={(event) => {
                          setBrute((b) => (b ? ({
                            ...b,
                            colors: {
                              ...b.colors as BruteColors,
                              [color]: event.target.value,
                            }
                          }) : null));
                        }}
                        fullWidth
                      />
                    </Grid>
                  ))}
                </Grid>
                <FantasyButton onClick={saveBrute}>Save</FantasyButton>
              </>
            )}
            <Divider />
            <Text bold h3 smallCaps color="secondary">Restore brute with ID</Text>
            <Box sx={{ display: 'flex' }}>
              <StyledInput
                onChange={changeBruteId}
                value={bruteId}
                sx={{ mr: 2 }}
              />
              <FantasyButton onClick={restoreBrute}>Restore</FantasyButton>
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
