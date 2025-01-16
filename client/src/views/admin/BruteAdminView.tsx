import { AdminPanelBrute } from '@labrute/core';
import { DestinyChoiceSide, Gender, InventoryItemType, PetName, SkillName, WeaponName } from '@labrute/prisma';
import { Box, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import BruteRender from '../../components/Brute/Body/BruteRender';
import FantasyButton from '../../components/FantasyButton';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

export const BruteAdminView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();

  const [brute, setBrute] = useState<AdminPanelBrute | null>(null);
  const [item, setItem] = useState<InventoryItemType | ''>('');

  // Fetch brute on page load
  useEffect(() => {
    if (!bruteName) return;

    Server.Brute.getForAdmin(bruteName).then((b) => {
      setBrute(b);
    }).catch(catchError(Alert));
  }, [Alert, bruteName]);

  // Save brute
  const saveBrute = useCallback(() => {
    if (!brute) return;
    if (!bruteName) return;

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

  // Give item
  const giveItem = useCallback(() => {
    if (!brute || !item) return;

    Server.Brute.giveItem(brute.id, item).then(() => {
      Alert.open('success', 'Item given');
    }).catch(catchError(Alert));
  }, [Alert, brute, item]);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {brute ? (
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
        ) : (
          <Loader />
        )}
      </Paper>
    </Page>
  );
};
