import { BruteWithMasterBodyColorsClanTournament, Language } from '@labrute/core';
import { Log } from '@labrute/prisma';
import { Box, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
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

export interface CellMobileViewProps {
  brute: BruteWithMasterBodyColorsClanTournament;
  advertising: string;
  logs: (Log & { currentBrute: { name: string } })[];
  ownsBrute: boolean;
  language: Language;
}

const CellMobileView = ({
  brute,
  advertising,
  logs,
  ownsBrute,
  language,
}: CellMobileViewProps) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));

  return (
    <Page title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
      <Grid container spacing={1} alignItems="center">
        {/* BRUTE NAME + SOCIALS */}
        <Grid item xs={12} sm={6} order={isXs ? 1 : 0}>
          <CellSocials brute={brute} smallScreen />
        </Grid>
        <Grid item xs={12} sm={6} order={isXs ? 6 : 0} alignSelf="stretch">
          {/* REF LINK + CLAN */}
          <Paper sx={{
            bgcolor: 'background.paperLight',
            px: 0,
            py: 1,
            height: 'calc(100% - 32px)',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
          }}
          >
            <Tooltip title={t('refLink')}>
              <Text bold textAlign="center">{`${window.location.origin}?ref=${brute.name}`}</Text>
            </Tooltip>
            <CellClan brute={brute} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} order={isXs ? 3 : 0} sx={{ textAlign: 'center', px: 1, alignSelf: 'center' }}>
          <Box sx={{ mx: 1 }}>
            {/* WEAPONS */}
            <Text bold>{t('weaponsBonuses')}</Text>
            <CellWeapons weapons={brute.weapons} sx={{ width: 1 }} />
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
              smallScreen
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 4 : 0}>
          {/* PETS OR ADVERT */}
          {brute.pets.length > 0 ? (
            <CellPets pets={brute.pets} />
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
