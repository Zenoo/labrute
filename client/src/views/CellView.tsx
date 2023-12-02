import { FullBrute, UserWithBrutesBodyColor, getBruteGoldValue } from '@labrute/core';
import { BruteReportReason, TournamentType } from '@labrute/prisma';
import { Box, Paper, Tooltip, useMediaQuery } from '@mui/material';
import moment from 'moment';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg';
import CellClan from '../components/Cell/CellClan';
import CellLog from '../components/Cell/CellLog';
import CellMain from '../components/Cell/CellMain';
import CellPets from '../components/Cell/CellPets';
import CellSkills from '../components/Cell/CellSkills';
import CellSocials from '../components/Cell/CellSocials';
import CellWeapons from '../components/Cell/CellWeapons';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import { useBrute } from '../hooks/useBrute';
import { useLanguage } from '../hooks/useLanguage';
import useStateAsync from '../hooks/useStateAsync';
import { getRandomAd } from '../utils/ads';
import Server from '../utils/Server';
import CellMobileView from './mobile/CellMobileView';
import FantasyButton from '../components/FantasyButton';
import { History } from '@mui/icons-material';
import { useConfirm } from '../hooks/useConfirm';
import { useAlert } from '../hooks/useAlert';
import catchError from '../utils/catchError';
import { useAuth } from '../hooks/useAuth';

/**
 * CellView component
 */
const CellView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const smallScreen = useMediaQuery('(max-width: 938px)');
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { brute, updateBrute } = useBrute();
  const Confirm = useConfirm();
  const Alert = useAlert();
  const { updateData } = useAuth();

  const { data: logs } = useStateAsync([], Server.Log.list, bruteName || '');

  // Sacrifice brute
  const confirmSacrifice = useCallback(() => {
    if (!brute) return;

    Confirm.open(t('sacrifice'), t('sacrificeConfirm', { gold: getBruteGoldValue(brute) }), () => {
      Server.Brute.sacrifice(brute.name).then(({ gold }) => {
        Alert.open('success', t('sacrificeSuccess', { gold }));
        navigate('/');

        updateData((data) => ({
          ...data,
          gold: (data?.gold || 0) + gold,
          brutes: data?.brutes?.filter((b) => b.name !== brute.name) || [],
        }) as UserWithBrutesBodyColor);
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, navigate, t, updateData]);

  // Fetch brute
  useEffect(() => {
    let isSubscribed = true;
    if (bruteName) {
      Server.Brute.get({
        name: bruteName,
        include: {
          master: true,
          body: true,
          colors: true,
          clan: true,
          user: true,
          tournaments: {
            where: {
              type: TournamentType.DAILY,
              date: moment.utc().startOf('day').toDate(),
            }
          }
        },
      }).then((data) => {
        if (isSubscribed) {
          updateBrute(data as FullBrute);
        }
      }).catch(() => {
        navigate('/unknown-brute');
      });
    }
    return () => { isSubscribed = false; };
  }, [bruteName, navigate, updateBrute]);

  // Randomized advertising
  const ad = useMemo(() => getRandomAd(language), [language]);

  // Report brute
  const confirmReport = useCallback(() => {
    if (!brute) return;

    Confirm.open(t('reportName'), t('reportConfirm', { brute: brute.name }), () => {
      Server.BruteReport.send(brute.name, BruteReportReason.name).then(() => {
        Alert.open('success', t('reportSuccess'));
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, t]);

  return brute && (smallScreen
    ? (
      <CellMobileView
        ad={ad}
        logs={logs}
        language={language}
        confirmReport={confirmReport}
        confirmSacrifice={confirmSacrifice}
      />
    )
    : (
      <Page title={`${brute.name} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
        <Box display="flex" zIndex={1}>
          {/* BRUTE NAME + SOCIALS */}
          <CellSocials
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              ml: 3,
              mr: 1,
              flexGrow: 1,
              py: 0,
              px: 1,
              mb: '5px',
            }}
          />
          <Paper sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            borderBottom: 'none',
            width: 270,
            bgcolor: 'background.paperLight',
            mb: 0,
          }}
          />
        </Box>
        <Paper sx={{
          borderTopRightRadius: 0,
          bgcolor: 'background.paperLight',
          zIndex: 2,
          position: 'relative',
          mt: 0,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -9,
            right: 0,
            width: 270,
            height: '9px',
            bgcolor: 'background.paperLight',
          },
        }}
        >
          <Box display="flex">
            <Box sx={{ display: 'flex', flexGrow: 1 }}>
              <Box sx={{ width: 315 }}>
                {/* WEAPONS */}
                <Text bold center>{t('weaponsBonuses')}</Text>
                <CellWeapons />
                {/* SKILLS */}
                <CellSkills />
                {/* PETS */}
                <CellPets sx={{ mt: 2 }} />
              </Box>
              {/* MAIN */}
              <CellMain
                sx={{ flexGrow: 1 }}
                language={language}
                confirmSacrifice={confirmSacrifice}
              />
            </Box>
            {/* RIGHT SIDE */}
            <Box sx={{
              position: 'relative',
              width: 270,
              mt: -7,
            }}
            >
              {/* REF LINK */}
              <Tooltip title={t('refLink')}>
                <Paper sx={{
                  p: 1,
                  mr: 0,
                  ml: 4,
                  bgcolor: 'background.paperAccent',
                  textAlign: 'center',
                }}
                >
                  <Text bold sx={{ wordBreak: 'break-word' }}>{`${window.location.origin}?ref=${bruteName || ''}`}</Text>
                </Paper>
              </Tooltip>

              {/* CLAN */}
              <CellClan brute={brute} />
              {/* ADVERT */}
              <BoxBg
                src={`/images/${language}/cell/a-bg.gif`}
                sx={{
                  width: 300,
                  height: 205,
                  ml: 0.5,
                }}
              >
                <Tooltip title={t(`${ad.name}.desc`)}>
                  <Link to={ad.url} target="_blank" sx={{ width: 200, mx: 4, display: 'inline-block' }}>
                    <Box
                      component="img"
                      src={`/images/redirects/${ad.illustration}`}
                      sx={{ ml: 1, mt: 3.5 }}
                    />
                  </Link>
                </Tooltip>
              </BoxBg>
              {/* LOGS */}
              <Box sx={{ ml: 2, mt: 1 }}>
                {logs.map((log) => <CellLog key={log.id} log={log} />)}
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link to={`/${brute.name}/tournaments`}>
                  <FantasyButton color="secondary" sx={{ m: 1 }}>
                    <History sx={{ verticalAlign: 'middle', mr: 1 }} />
                    {t('tournaments')}
                  </FantasyButton>
                </Link>
              </Box>
              <Text
                smallCaps
                subtitle2
                center
                onClick={confirmReport}
                sx={{ cursor: 'pointer' }}
              >
                {t('report')}
              </Text>
            </Box>
          </Box>
        </Paper>
      </Page>
    ));
};

export default CellView;
