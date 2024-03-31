import { Lang, Log } from '@labrute/prisma';
import { History } from '@mui/icons-material';
import { Box, Grid, Paper, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import CellClan from '../../components/Cell/CellClan';
import CellGlobalTournament from '../../components/Cell/CellGlobalTournament';
import CellLog from '../../components/Cell/CellLog';
import CellMain from '../../components/Cell/CellMain';
import CellPets from '../../components/Cell/CellPets';
import CellSkills from '../../components/Cell/CellSkills';
import CellSocials from '../../components/Cell/CellSocials';
import CellTournament from '../../components/Cell/CellTournament';
import CellWeapons from '../../components/Cell/CellWeapons';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useBrute } from '../../hooks/useBrute';
import { AdResult } from '../../utils/ads';

export interface CellMobileViewProps {
  ad: AdResult;
  logs: (Log & { currentBrute: { name: string } })[];
  language: Lang;
  ownsBrute: boolean;
  confirmReport: () => void;
  confirmSacrifice: () => void;
  confirmReset: () => void;
  bruteList : string[] | undefined
}

const CellMobileView = ({
  ad,
  logs,
  language,
  ownsBrute,
  confirmReport,
  confirmSacrifice,
  confirmReset,
  bruteList
}: CellMobileViewProps) => {
  const { t } = useTranslation();
  const { brute, owner } = useBrute();
  const navigate = useNavigate();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const pageRef = useRef<HTMLInputElement>(null);

  useEffect(
    () => {
      let touchstartX = 0;
      let touchendX = 0;
      const checkSwipe = () => {
        if (touchendX > touchstartX && touchendX - touchstartX > -120) {
          if (bruteList && bruteList[bruteList.indexOf(brute!.name) - 1]) {
            navigate(`/${bruteList[bruteList.indexOf(brute!.name) - 1]}/cell`);
          }
        }
        if (touchendX < touchstartX && touchstartX - touchendX > -120) {
          if (bruteList && bruteList[bruteList.indexOf(brute!.name) + 1]) {
            navigate(`/${bruteList[bruteList.indexOf(brute!.name) + 1]}/cell`);
          }
        }
      };

      document.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
      }, false);
      document.addEventListener('touchmove', (e) => {
        touchendX = e.changedTouches[0].screenX;
        checkSwipe();
      }, false);

      return () => {
        document.removeEventListener('touchstart', (e) => {
          touchstartX = e.changedTouches[0].screenX;
        });
        document.removeEventListener('touchmove', (e) => {
          touchendX = e.changedTouches[0].screenX;
          checkSwipe();
        });
      };
    },

    [brute, bruteList, navigate]
  );

  return brute && (
    <div>
      <Page ref={pageRef} title={`${brute.name || ''} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
        <Grid container spacing={1} alignItems="center">
          {/* BRUTE NAME + SOCIALS */}
          <Grid item xs={12} sm={6} order={isXs ? 1 : 0}>
            <CellSocials smallScreen />
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
                <Text bold center>{`${window.location.origin}?ref=${brute.name}`}</Text>
              </Tooltip>
              {(ownsBrute || !!brute.clanId) && (
              <CellClan brute={brute} />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} order={isXs ? 3 : 0} sx={{ textAlign: 'center', px: 1, alignSelf: 'center' }}>
            <Box sx={{ mx: 1 }}>
              {/* WEAPONS */}
              <Text bold>{t('weaponsBonuses')}</Text>
              <CellWeapons sx={{ width: 1 }} />
              {/* SKILLS */}
              <CellSkills />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={isXs ? 2 : 0}>
            <Paper sx={{ bgcolor: 'background.paperLight' }}>
              {/* MAIN */}
              <CellMain
                language={language}
                smallScreen
              />
            </Paper>
            <Text
              smallCaps
              subtitle2
              center
              onClick={confirmReport}
              sx={{ cursor: 'pointer' }}
            >
              {t('report')}
            </Text>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 4 : 0}>
            {/* PETS OR ADVERT */}
            {brute.pets.length > 0 ? (
              <CellPets />
            ) : (
              <Tooltip title={t(`${ad.name}.desc`)}>
                <Link to={ad.url} target="_blank" sx={{ width: 200, mx: 'auto' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${ad.illustration}`}
                    sx={{ border: 2 }}
                  />
                </Link>
              </Tooltip>
            )}
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 5 : 0}>
            {/* TOURNAMENT */}
            <CellTournament
              language={language}
            />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }} order={isXs ? 6 : 0}>
            {/* GLOBAL TOURNAMENT */}
            <CellGlobalTournament />
          </Grid>
        </Grid>
        {/* LOGS */}
        {!!logs.length && (
        <Paper
          sx={{
            bgcolor: 'background.paperLight',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {logs.map((log) => <CellLog key={log.id} log={log} />)}
        </Paper>
        )}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Link to={`/${brute.name}/tournaments`}>
            <FantasyButton color="secondary" sx={{ m: 1 }}>
              <History sx={{ verticalAlign: 'middle', mr: 1 }} />
              {t('tournaments')}
            </FantasyButton>
          </Link>
        </Box>
        {/* BRUTE SACRIFICE */}
        {owner
        && moment.utc().isAfter(moment.utc(brute.createdAt), 'day')
        && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <FantasyButton
              color="error"
              onClick={confirmSacrifice}
              sx={{
                mt: 1,
              }}
            >
              {t('sacrifice')}
            </FantasyButton>
          </Box>
        )}
        {/* BRUTE RESET */}
        {owner && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <FantasyButton
            color="warning"
            onClick={confirmReset}
            sx={{
              mt: 2,
            }}
          >
            {t('reset')}
          </FantasyButton>
        </Box>
        )}
      </Page>
    </div>
  );
};

export default CellMobileView;
