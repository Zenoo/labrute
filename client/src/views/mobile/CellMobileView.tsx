import { Brute, Log } from '@backend/types';
import { Box, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { Moment } from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CellClan from '../../components/Cell/CellClan';
import CellLog from '../../components/Cell/CellLog';
import CellMain from '../../components/Cell/CellMain';
import CellPets from '../../components/Cell/CellPets';
import CellSkills from '../../components/Cell/CellSkills';
import CellSocials from '../../components/Cell/CellSocials';
import CellTournament from '../../components/Cell/CellTournament';
import CellWeapons from '../../components/Cell/CellWeapons';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { Language } from '../../i18n';

export interface CellMobileViewProps {
  bruteName?: string;
  brute: Brute;
  advertising: string;
  logs: Log[];
  ownsBrute: boolean;
  language: Language;
  nextTournament: Moment;
}

const CellMobileView = ({
  bruteName,
  brute,
  advertising,
  logs,
  ownsBrute,
  language,
  nextTournament,
}: CellMobileViewProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
      <Grid container spacing={1} alignItems="center">
        {/* BRUTE NAME + SOCIALS */}
        <Grid item xs={12} sm={6} order={isXs ? 1 : 0}>
          <CellSocials brute={brute} smallScreen />
        </Grid>
        <Grid item xs={12} sm={6} order={isXs ? 6 : 0}>
          {/* REF LINK + CLAN */}
          {!brute.data.clan && (
            <Paper sx={{ bgcolor: 'background.paperLight', px: 0, py: 1 }}>
              <Tooltip title={t('refLink')}>
                <Text bold textAlign="center">{`${window.location.origin}?ref=${bruteName}`}</Text>
              </Tooltip>
              <CellClan brute={brute} />
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} order={isXs ? 3 : 0} sx={{ textAlign: 'center', px: 1, alignSelf: 'center' }}>
          <Box sx={{ mx: 1 }}>
            {/* WEAPONS */}
            <Text bold>{t('weaponsBonuses')}</Text>
            <CellWeapons weapons={brute.data.weapons} sx={{ width: 1 }} />
            {/* SKILLS */}
            <CellSkills brute={brute} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} order={isXs ? 2 : 0}>
          <Paper sx={{ bgcolor: 'background.paperLight' }}>
            {/* MAIN */}
            <CellMain
              brute={brute}
              ownsBrute={ownsBrute}
              language={language}
              nextTournament={nextTournament}
              smallScreen
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 4 : 0}>
          {/* PETS OR ADVERT */}
          {(brute.data.pets.dog || brute.data.pets.panther || brute.data.pets.bear) ? (
            <CellPets pets={brute.data.pets} />
          ) : (
            <Tooltip title="TODO">
              <Link to="" sx={{ width: 200, mx: 'auto' }}>
                <Box
                  component="img"
                  src={`/images/redirects/${advertising}`}
                  sx={{ border: 2 }}
                />
              </Link>
            </Tooltip>
          )}
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 5 : 0}>
          {/* TOURNAMENT */}
          <CellTournament
            brute={brute}
            nextTournament={nextTournament}
            ownsBrute={ownsBrute}
            language={language}
          />
        </Grid>
      </Grid>
      {/* LOGS */}
      {!!logs.length && (
        <Paper sx={{ bgcolor: 'background.paperLight' }}>
          {logs.map((log) => <CellLog key={log.id} log={log} />)}
        </Paper>
      )}
    </Page>
  );
};

export default CellMobileView;
