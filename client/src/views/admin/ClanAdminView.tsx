import { ClanGetForAdminResponse } from '@labrute/core';
import { BossName, Clan } from '@labrute/prisma';
import {
  Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { FantasyButton } from '../../components/FantasyButton';
import { Link } from '../../components/Link';
import { Loader } from '../../components/Loader';
import { Page } from '../../components/Page';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useConfirm } from '../../hooks/useConfirm';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const ClanAdminView = () => {
  const { t } = useTranslation('admin');
  const { clanId } = useParams();
  const Alert = useAlert();
  const Confirm = useConfirm();
  const { user } = useAuth();
  const Server = useServer();

  const [clan, setClan] = useState<ClanGetForAdminResponse | null>(null);
  const [newMasterId, setNewMasterId] = useState<string>('');
  const [deleting, setDeleting] = useState(false);

  // Fetch clan on page load
  useEffect(() => {
    if (!clanId) {
      return;
    }

    Server.Clan.getForAdmin(clanId).then((c) => {
      setClan(c);
    }).catch(catchError(Alert));
  }, [Alert, Server.Clan, clanId]);

  // Save clan
  const saveClan = useCallback(() => {
    if (!clan || !clanId) {
      return;
    }

    // Remove brutes from clan data
    const clanData = { ...clan } as Clan & { brutes?: unknown };

    delete clanData.brutes;

    Server.Clan.adminUpdate(clanId, clanData).then(() => {
      Alert.open('success', 'Clan saved');
    }).catch(catchError(Alert));
  }, [Alert, Server.Clan, clan, clanId]);

  // Transfer ownership
  const transferOwnership = useCallback(() => {
    if (!clanId || !newMasterId) {
      return;
    }

    Server.Clan.transferOwnership({
      id: clanId,
      brute: newMasterId,
    }).then(() => {
      Alert.open('success', 'Ownership transferred');
      setNewMasterId('');
    }).catch(catchError(Alert));
  }, [Alert, Server.Clan, clanId, newMasterId]);

  const deleteClan = useCallback(() => {
    if (!clan || !clanId || clan.deletedAt || deleting) {
      return;
    }

    Confirm.open('Delete clan', `Delete ${clan.name}? All members will leave the clan and pending join requests will be cleared. The brutes themselves will be kept.`, () => {
      setDeleting(true);

      return Server.Clan.adminDelete(clanId).then(() => {
        setClan((current) => (current ? {
          ...current,
          deletedAt: new Date(),
          masterId: null,
          participateInClanWar: false,
          brutes: [],
        } : null));
        Alert.open('success', 'Clan deleted');
      }).catch(catchError(Alert)).finally(() => {
        setDeleting(false);
      });
    });
  }, [Alert, Confirm, Server.Clan, clan, clanId, deleting]);

  return (
    <Page headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
      }}>
        {clan ? (
          <>
            <Text h2 smallCaps>
              <Link to={`/${user?.brutes[0]?.name}/clan/${clan.id}`}>
                {clan.name}
              </Link>
              {' '}({clan.id})
            </Text>
            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Name"
                  value={clan.name}
                  onChange={(event) => {
                    setClan((c) => (c ? ({
                      ...c,
                      name: event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <DatePicker
                  label="Deleted at"
                  value={clan.deletedAt
                    ? dayjs.utc(clan.deletedAt)
                    : null}
                  onChange={(newValue) => {
                    setClan((b) => (b ? ({
                      ...b,
                      deletedAt: dayjs.utc(newValue).toDate(),
                    }) : null));
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Limit"
                  value={clan.limit}
                  onChange={(event) => {
                    setClan((b) => (b ? ({
                      ...b,
                      limit: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Points"
                  value={clan.points}
                  onChange={(event) => {
                    setClan((b) => (b ? ({
                      ...b,
                      points: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Elo"
                  value={clan.elo}
                  onChange={(event) => {
                    setClan((b) => (b ? ({
                      ...b,
                      elo: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                  <InputLabel>Boss</InputLabel>
                  <Select
                    value={clan.boss}
                    label="Boss"
                    onChange={(event) => {
                      setClan((b) => (b ? ({
                        ...b,
                        boss: event.target.value as BossName,
                      }) : null));
                    }}
                  >
                    {Object.values(BossName).map((boss) => (
                      <MenuItem key={boss} value={boss}>
                        {boss}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="Damage on boss"
                  value={clan.damageOnBoss}
                  onChange={(event) => {
                    setClan((b) => (b ? ({
                      ...b,
                      damageOnBoss: +event.target.value,
                    }) : null));
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormControl fullWidth>
                  <InputLabel>Master</InputLabel>
                  <Select
                    value={clan.masterId && clan.brutes.some((brute) => brute.id === clan.masterId)
                      ? clan.masterId : ''}
                    label="Master"
                    onChange={(event) => {
                      setClan((b) => (b ? ({
                        ...b,
                        masterId: event.target.value as string,
                      }) : null));
                    }}
                  >
                    {clan.brutes.map((brute) => (
                      <MenuItem key={brute.id} value={brute.id}>
                        {brute.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6} sm={3}>
                <FormControlLabel
                  control={(
                    <Checkbox
                      checked={clan.participateInClanWar}
                      onChange={(event) => {
                        setClan((b) => (b ? ({
                          ...b,
                          participateInClanWar: event.target.checked,
                        }) : null));
                      }}
                    />
                  )}
                  label="Participate in clan war"
                />
              </Grid>
            </Grid>
            <FantasyButton color="success" onClick={saveClan} disabled={deleting}>Save</FantasyButton>
            <FantasyButton
              color="error"
              onClick={deleteClan}
              disabled={deleting || !!clan.deletedAt}
              sx={{ ml: 2 }}
            >
              Delete clan
            </FantasyButton>
            <Text h3 smallCaps sx={{ mt: 4 }}>Transfer ownership</Text>
            <Grid container spacing={1} sx={{
              mt: 2,
              mb: 4,
            }}>
              <Grid item xs={6} sm={3}>
                <TextField
                  label="New master"
                  value={newMasterId}
                  onChange={(event) => setNewMasterId(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <FantasyButton color="success" onClick={transferOwnership}>Transfer</FantasyButton>
              </Grid>
            </Grid>
          </>
        ) : (
          <Loader />
        )}
      </Paper>
    </Page>
  );
};
