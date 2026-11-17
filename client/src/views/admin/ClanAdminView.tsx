import { ClanGetForAdminResponse } from '@labrute/core';
import { BossName, Clan } from '@labrute/prisma';
import {
  Stack, Alert as MuiAlert, Checkbox, FormControl, FormControlLabel, Grid, InputLabel,
  MenuItem, Paper, Select, TextField, Button,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useNavigate, useParams } from 'react-router';
import { Link } from '../../components/Link';
import { Loader } from '../../components/Loader';
import { AdminPage } from '../../components/admin/AdminPage';
import { Text } from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useConfirm } from '../../hooks/useConfirm';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export const ClanAdminView = () => {
  const { clanId } = useParams();
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState(clanId ?? '');
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
    <AdminPage>
      <Paper>
        <Stack component="form" direction={{
          xs: 'column',
          sm: 'row',
        }} spacing={2} onSubmit={(event) => {
          event.preventDefault();

          if (searchId.trim()) {
            navigate(`/admin-panel/clan/${encodeURIComponent(searchId.trim())}`);
          }
        }}>
          <TextField label="Clan ID" value={searchId} onChange={(event) => setSearchId(event.target.value)} fullWidth />
          <Button type="submit" disabled={!searchId.trim()}>Find clan</Button>
        </Stack>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paper',
        mt: 0,
      }}>
        {clan ? (
          <>
            <Text h5>
              <Link to={`/${user?.brutes[0]?.name}/clan/${clan.id}`}>
                {clan.name}
              </Link>
              {' '}({clan.id})
            </Text>
            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
              <Grid item xs={12} sm={6} lg={3}>
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
            <Button color="success" onClick={saveClan} disabled={deleting}>Save</Button>
            <Button
              color="error"
              onClick={deleteClan}
              disabled={deleting || !!clan.deletedAt}
              sx={{ ml: 2 }}
            >
              Delete clan
            </Button>
            <Text h6 sx={{ mt: 4 }}>Transfer ownership</Text>
            <Grid container spacing={1} sx={{
              mt: 2,
              mb: 4,
            }}>
              <Grid item xs={12} sm={6} lg={3}>
                <TextField
                  label="New master"
                  value={newMasterId}
                  onChange={(event) => setNewMasterId(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <Button color="success" onClick={transferOwnership}>Transfer</Button>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            {clanId && <Loader />}
            {!clanId && <MuiAlert severity="info">Enter a clan ID to manage a clan.</MuiAlert>}
          </>
        )}
      </Paper>
    </AdminPage>
  );
};
