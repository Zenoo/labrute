import {
  BruteGetForAdminResponse, getXPForTargetLevel, entries,
  getTieredPets, getTieredSkills, getTieredWeapons, isUuid,
} from '@labrute/core';
import {
  DestinyChoiceSide, Gender, InventoryItemType, PetName, SkillName, WeaponName,
} from '@labrute/prisma';
import {
  Alert as MuiAlert, Stack, Box, Checkbox, FormControl,
  FormControlLabel, Grid, InputLabel, MenuItem, Paper,
  Select, TextField, Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { BruteRender } from '../../components/Brute/Body/BruteRender';
import { Link } from '../../components/Link';
import { Loader } from '../../components/Loader';
import { AdminPage } from '../../components/admin/AdminPage';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const BruteAdminView = () => {
  const { t } = useTranslation('admin');
  const { bruteName: urlBruteName } = useParams();
  const Alert = useAlert();
  const Server = useServer();

  const lookup = useRef(0);
  const [loadingBrute, setLoadingBrute] = useState(false);
  const [lookupFailed, setLookupFailed] = useState(false);
  const [bruteIdentifier, setBruteIdentifier] = useState(urlBruteName ?? '');
  const [includeDeleted, setIncludeDeleted] = useState(() => isUuid(urlBruteName));
  const [duplicates, setDuplicates] = useState<BruteGetForAdminResponse['duplicates']>([]);
  const [brute, setBrute] = useState<BruteGetForAdminResponse['brute'] | null>(null);
  const [bruteSkills, setBruteSkills] = useState<string[]>([]);
  const [bruteWeapons, setBruteWeapons] = useState<string[]>([]);
  const [brutePets, setBrutePets] = useState<string[]>([]);
  const [targetLevel, setTargetLevel] = useState('');
  const [grantingXP, setGrantingXP] = useState(false);
  const [item, setItem] = useState<InventoryItemType | ''>('');

  // Update brute identifier when url changes
  useEffect(() => {
    setBruteIdentifier(urlBruteName ?? '');
    setIncludeDeleted(isUuid(urlBruteName));
  }, [urlBruteName]);

  const updateBrute = useCallback(() => {
    const request = ++lookup.current;

    setLoadingBrute(true);
    setLookupFailed(false);
    Server.Brute.getForAdmin({
      identifier: bruteIdentifier,
      includeDeleted: includeDeleted ? 'true' : 'false',
    }).then(({ duplicates: dups, brute: b }) => {
      if (request !== lookup.current) {
        return;
      }

      setDuplicates(dups);
      setBrute(b);
      setBruteSkills(entries(getTieredSkills(b, {})).map(([skillName, tier]) => `${skillName}:${tier}`));
      setBruteWeapons(entries(getTieredWeapons(b, {})).map(([weaponName, tier]) => `${weaponName}:${tier}`));
      setBrutePets(entries(getTieredPets(b)).map(([petName, tier]) => `${petName}:${tier}`));
    }).catch((error) => {
      if (request === lookup.current) {
        setBrute(null);
        setLookupFailed(true);
        catchError(Alert, error);
      }
    }).finally(() => {
      if (request === lookup.current) {
        setLoadingBrute(false);
      }
    });
  }, [Alert, Server.Brute, bruteIdentifier, includeDeleted]);

  // Fetch brute on brute identifier change or includeDeleted change
  useEffect(() => {
    setBrute(null);
    setDuplicates([]);
    setLookupFailed(false);
    setLoadingBrute(!!bruteIdentifier);

    if (!bruteIdentifier) {
      return undefined;
    }

    const timeout = setTimeout(() => {
      updateBrute();
    }, 1000);

    return () => {
      clearTimeout(timeout);
      lookup.current += 1;
    };
  }, [Alert, Server.Brute, bruteIdentifier, includeDeleted, updateBrute]);

  const changeBruteName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setBruteIdentifier(e.target.value.trim());
  }, []);

  // Save brute
  const saveBrute = useCallback(() => {
    if (!brute) {
      return;
    }

    if (!bruteIdentifier) {
      return;
    }

    const bruteData = {
      ...brute,
      user: undefined,
    };

    Server.Brute.adminUpdate(bruteIdentifier, {
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
  }, [Alert, Server.Brute, brute, bruteIdentifier]);

  // Give item
  const giveItem = useCallback(() => {
    if (!brute || !item) {
      return;
    }

    Server.Brute.giveItem(brute.id, item).then(() => {
      Alert.open('success', 'Item given');
    }).catch(catchError(Alert));
  }, [Alert, Server.Brute, brute, item]);

  let targetXP: number | null = null;

  if (brute && targetLevel) {
    try {
      targetXP = getXPForTargetLevel(brute, Number(targetLevel));
    } catch {
      // Keep invalid input visible and disable the grant until it is corrected.
    }
  }

  const grantXP = async () => {
    if (!brute || targetXP === null || grantingXP) {
      return;
    }

    const bruteId = brute.id;

    setGrantingXP(true);

    try {
      const result = await Server.Brute.grantXP(bruteId, Number(targetLevel));

      setBrute((previous) => previous?.id === bruteId ? {
        ...previous,
        xp: result.xp,
      } : previous);
      Alert.open('success', `${result.addedXP} XP granted`);
    } catch (error) {
      catchError(Alert, error);
    } finally {
      setGrantingXP(false);
    }
  };

  // Delete brute
  const deleteBrute = useCallback(() => {
    if (!brute) {
      return;
    }

    Server.Brute.delete({ id: brute.id }).then(() => {
      Alert.open('success', 'Brute deleted');
      setIncludeDeleted(true);
      updateBrute();
    }).catch(catchError(Alert));
  }, [Alert, Server.Brute, brute, updateBrute]);

  // Restore brute
  const restoreBrute = useCallback(() => {
    if (!brute) {
      return;
    }

    Server.Brute.restore(brute.id).then(() => {
      Alert.open('success', 'Brute restored');
      updateBrute();
    }).catch(catchError(Alert));
  }, [Alert, Server.Brute, brute, updateBrute]);

  return (
    <AdminPage>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        <Text bold h6 color="secondary">Brute</Text>
        <TextField
          onChange={changeBruteName}
          label="Brute name or ID"
          value={bruteIdentifier}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={includeDeleted}
              onChange={(e) => setIncludeDeleted(e.target.checked)}
            />
          )}
          label="Include deleted"
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
                  <Link to={`/admin-panel/brute/${dup.id}`}>{dup.id}</Link>
                  ){dup.deletedAt ? ` - Deleted at ${dayjs.utc(dup.deletedAt).format('YYYY-MM-DD HH:mm:ss')}, reason: ${dup.deletionReason}` : ''}
                  {' '}
                  ({dup.user?.name} <Link to={`/admin-panel/user/${dup.user?.id}`}>{dup.user?.id}</Link>)
                </Text>
              </Box>
            ))}
          </Box>
        )}
        {brute ? (
          <>
            <Text h5>
              <Link to={`/${brute.name}/cell`}>{brute.name}</Link> ({brute.id})
              {' '}
              {brute.user && <>({brute.user.name} <Link to={`/admin-panel/user/${brute.user.id}`}>{brute.user.id}</Link>)</>}
            </Text>
            <Box width={100}>
              <BruteRender brute={brute} />
            </Box>
            <Stack spacing={2} sx={{ my: 3 }}>
              <Text h6>Grant XP for a target level</Text>
              <MuiAlert severity="info">Grants are saved immediately. The brute keeps its current level and makes its usual level-up choices.</MuiAlert>
              <Stack direction={{
                xs: 'column',
                sm: 'row',
              }} spacing={2} alignItems="flex-start">
                <TextField
                  label="Target level"
                  type="number"
                  value={targetLevel}
                  onChange={(event) => setTargetLevel(event.target.value)}
                  inputProps={{
                    min: brute.level + 1,
                    max: 10000,
                    step: 1,
                  }}
                  error={!!targetLevel && targetXP === null}
                  helperText={targetXP === null ? `Enter a whole level from ${brute.level + 1} to 10000` : `${targetXP - brute.xp} XP to add (${targetXP} banked XP)`}
                />
                <Button variant="contained" sx={{
                  flexShrink: 0,
                  whiteSpace: 'nowrap',
                }} onClick={() => {
                  void grantXP();
                }} disabled={targetXP === null || grantingXP || !!brute.deletedAt}>
                  {grantingXP ? 'Granting XP...' : 'Grant XP'}
                </Button>
              </Stack>
            </Stack>
            <Grid container spacing={1}>
              <Grid item xs={12}><Text h6 sx={{ mt: 2 }}>Progression</Text></Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="Destiny path"
                  value={brute.destinyPath}
                  onChange={(event) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      destinyPath: event.target.value ? event.target.value.split(',') as DestinyChoiceSide[] : [],
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12}><Text h6 sx={{ mt: 2 }}>Combat attributes</Text></Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="HP stat"
                  value={brute.hpStat}
                  onChange={(event) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      hpStat: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="HP modifier"
                  value={brute.hpModifier}
                  onChange={(event) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      hpModifier: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="HP value"
                  value={brute.hpValue}
                  onChange={(event) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      hpValue: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Weapons</InputLabel>
                  <Select
                    value={bruteWeapons}
                    label="Weapons"
                    multiple
                    onChange={(event) => {
                      setBruteWeapons(event.target.value as string[]);
                      setBrute((b) => (b ? ({
                        ...b,
                        weapons: (event.target.value as string[]).map((w) => w.split(':')[0] as WeaponName),
                      }) : null));
                    }}
                  >
                    {Object.values(WeaponName).map((weapon) => Array.from(
                      { length: 3 },
                      (_, tier) => (
                        <MenuItem key={`${weapon}:${tier + 1}`} value={`${weapon}:${tier + 1}`}>
                          {`${weapon} ${tier > 0 ? `(${tier + 1})` : ''}`}
                        </MenuItem>
                      ),
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Skills</InputLabel>
                  <Select
                    value={bruteSkills}
                    label="Skills"
                    multiple
                    onChange={(event) => {
                      setBruteSkills(event.target.value as string[]);
                      setBrute((b) => (b ? ({
                        ...b,
                        skills: (event.target.value as string[]).map((s) => s.split(':')[0] as SkillName),
                      }) : null));
                    }}
                  >
                    {Object.values(SkillName).map((skill) => Array.from(
                      { length: 3 },
                      (_, tier) => (
                        <MenuItem key={`${skill}:${tier + 1}`} value={`${skill}:${tier + 1}`}>
                          {`${skill} ${tier > 0 ? `(${tier + 1})` : ''}`}
                        </MenuItem>
                      ),
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Pets</InputLabel>
                  <Select
                    value={brutePets}
                    label="Pets"
                    multiple
                    onChange={(event) => {
                      setBrutePets(event.target.value as string[]);
                      setBrute((b) => (b ? ({
                        ...b,
                        pets: (event.target.value as string[]).map((p) => p.split(':')[0] as PetName),
                      }) : null));
                    }}
                  >
                    {Object.values(PetName).map((pet) => Array.from(
                      { length: 3 },
                      (_, tier) => (
                        <MenuItem key={`${pet}:${tier + 1}`} value={`${pet}:${tier + 1}`}>
                          {`${pet} ${tier > 0 ? `(${tier + 1})` : ''}`}
                        </MenuItem>
                      ),
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}><Text h6 sx={{ mt: 2 }}>Ownership and activity</Text></Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
                <DatePicker
                  label="Next tournament date"
                  value={brute.nextTournamentDate
                    ? dayjs.utc(brute.nextTournamentDate)
                    : null}
                  onChange={(newValue) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      nextTournamentDate: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <DatePicker
                  label="Current tournament date"
                  value={brute.currentTournamentDate
                    ? dayjs.utc(brute.currentTournamentDate)
                    : null}
                  onChange={(newValue) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      currentTournamentDate: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
                <DatePicker
                  label="Last fight"
                  value={brute.lastFight
                    ? dayjs.utc(brute.lastFight)
                    : null}
                  onChange={(newValue) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      lastFight: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
                <DatePicker
                  label="Opponents generated at"
                  value={brute.opponentsGeneratedAt
                    ? dayjs.utc(brute.opponentsGeneratedAt)
                    : null}
                  onChange={(newValue) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      opponentsGeneratedAt: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <DatePicker
                  label="Can rank up since"
                  value={brute.canRankUpSince
                    ? dayjs.utc(brute.canRankUpSince)
                    : null}
                  onChange={(newValue) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      canRankUpSince: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12}><Text h6 sx={{ mt: 2 }}>Appearance and ascension</Text></Grid>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="Event ID"
                  value={brute.eventId || ''}
                  onChange={(event) => {
                    setBrute((b) => (b ? ({
                      ...b,
                      eventId: event.target.value || null,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Ascended Weapons</InputLabel>
                  <Select
                    value={brute.ascendedWeapons}
                    label="Ascended Weapons"
                    multiple
                    onChange={(event) => {
                      setBrute((b) => (b ? ({
                        ...b,
                        ascendedWeapons: event.target.value as WeaponName[],
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
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Ascended Skills</InputLabel>
                  <Select
                    value={brute.ascendedSkills}
                    label="Ascended Skills"
                    multiple
                    onChange={(event) => {
                      setBrute((b) => (b ? ({
                        ...b,
                        ascendedSkills: event.target.value as SkillName[],
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
              <Grid item xs={12} sm={6} lg={3}>
                <FormControl fullWidth>
                  <InputLabel>Ascended Pets</InputLabel>
                  <Select
                    value={brute.ascendedPets}
                    label="Ascended Pets"
                    multiple
                    onChange={(event) => {
                      setBrute((b) => (b ? ({
                        ...b,
                        ascendedPets: event.target.value as PetName[],
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
            </Grid>
            <Stack direction={{
              xs: 'column',
              sm: 'row',
            }} spacing={2} sx={{ my: 3 }}>
              <Button variant="contained" color="success" disabled={grantingXP} onClick={saveBrute}>Save changes</Button>
              {!brute.deletedAt ? (
                <Button color="error" onClick={deleteBrute}>Delete</Button>
              ) : (
                <Button color="warning" onClick={restoreBrute}>Restore</Button>
              )}
            </Stack>
            <Stack direction={{
              xs: 'column',
              sm: 'row',
            }} spacing={2}>
              <FormControl sx={{ minWidth: 240 }}>
                <InputLabel id="brute-inventory-item-label">Inventory item</InputLabel>
                <Select
                  labelId="brute-inventory-item-label"
                  label="Inventory item"
                  value={item}
                  onChange={({ target: { value } }) => setItem(value as InventoryItemType)}
                >
                  {Object.values(InventoryItemType).map((it) => (
                    <MenuItem key={it} value={it}>{t(`inventory:item.${it}`)}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button color="success" disabled={!item} onClick={giveItem}>Add item</Button>
            </Stack>
          </>
        ) : (
          <>
            {loadingBrute && <Loader />}
            {lookupFailed && <MuiAlert severity="error">Could not load the brute. Check the name or ID, or <Button onClick={updateBrute}>retry</Button>.</MuiAlert>}
            {!bruteIdentifier && <MuiAlert severity="info">Search by brute name or ID to manage a brute.</MuiAlert>}
          </>
        )}
      </Paper>
    </AdminPage>
  );
};
