import { ClanGetForAdminResponse } from '@labrute/core';
import { BossName, Clan } from '@labrute/prisma';
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const ClanAdminView = () => {
  const { t } = useTranslation();
  const { clanId } = useParams();
  const Alert = useAlert();
  const { user } = useAuth();

  const [clan, setClan] = useState<ClanGetForAdminResponse | null>(null);

  // Fetch clan on page load
  useEffect(() => {
    if (!clanId) return;

    Server.Clan.getForAdmin(clanId).then((c) => {
      setClan(c);
    }).catch(catchError(Alert));
  }, [Alert, clanId]);

  // Save clan
  const saveClan = useCallback(() => {
    if (!clan || !clanId) return;

    // Remove brutes from clan data
    const clanData = { ...clan } as Clan & { brutes?: unknown };
    delete clanData.brutes;

    Server.Clan.adminUpdate(clanId, clanData).then(() => {
      Alert.open('success', 'Clan saved');
    }).catch(catchError(Alert));
  }, [Alert, clan, clanId]);

  return (
    <Page title={t('adminPanel')} headerUrl="/">
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('adminPanel')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
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
                    value={clan.masterId}
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
            <FantasyButton color="success" onClick={saveClan}>Save</FantasyButton>
          </>
        ) : (
          <Loader />
        )}
      </Paper>
    </Page>
  );
};

export default ClanAdminView;
