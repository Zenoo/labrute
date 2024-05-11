import { RESET_PRICE, getBruteGoldValue } from '@labrute/core';
import { BruteReportReason } from '@labrute/prisma';
import { History } from '@mui/icons-material';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Fab, Paper, Tooltip, useMediaQuery } from '@mui/material';
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
import FantasyButton from '../components/FantasyButton';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';
import { useConfirm } from '../hooks/useConfirm';
import { useLanguage } from '../hooks/useLanguage';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import { getRandomAd } from '../utils/ads';
import catchError from '../utils/catchError';
import CellMobileView from './mobile/CellMobileView';

/**
 * CellView component
 */
const CellView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const smallScreen = useMediaQuery('(max-width: 938px)');
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { brute, updateBrute, owner } = useBrute();
  const Confirm = useConfirm();
  const Alert = useAlert();
  const { user, updateData } = useAuth();
  const { data: logs } = useStateAsync([], Server.Log.list, bruteName || '');

  // Sacrifice brute
  const confirmSacrifice = useCallback(() => {
    if (!brute) return;

    Confirm.open(t('sacrifice'), t('sacrificeConfirm', { gold: getBruteGoldValue(brute) }), () => {
      Server.Brute.sacrifice(brute.name).then(({ gold }) => {
        Alert.open('success', t('sacrificeSuccess', { gold }));
        navigate('/');

        // Update user data
        updateData((data) => (data ? ({
          ...data,
          gold: (data.gold || 0) + gold,
          brutes: data.brutes.filter((b) => b.name !== brute.name) || [],
        }) : null));
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, navigate, t, updateData]);

  const switchBrute = useCallback((side: number) => {
    if (!user || !brute || !user.brutes || !owner) return;

    const currentBruteIndex = user.brutes.findIndex((bruteTemp) => bruteTemp.id === brute.id);
    if (currentBruteIndex < 0) return;

    let newBrute = user.brutes[(currentBruteIndex + side) % user.brutes.length];
    if (currentBruteIndex === 0 && side === -1) {
      newBrute = user.brutes[user.brutes.length - 1];
    }
    if (!newBrute) return;

    navigate(`/${newBrute.name}/cell`);
  }, [brute, navigate, owner, user]);

  // Reset brute
  const confirmReset = useCallback(() => {
    if (!brute) return;

    Confirm.open(t('reset'), t('resetConfirm', { gold: RESET_PRICE }), () => {
      Server.Brute.reset(brute.name).then((newBrute) => {
        Alert.open('success', t('resetSuccess'));

        // Update user data
        updateData((data) => (data ? ({
          ...data,
          gold: data.gold - RESET_PRICE,
          brutes: data.brutes.map((b) => (b.name === brute.name ? newBrute : b)),
        }) : null));

        // Update brute data
        updateBrute(newBrute);
      }).catch(catchError(Alert));
    });
  }, [Alert, Confirm, brute, t, updateBrute, updateData]);

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

  // Handle keys
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        switchBrute(-1);
      }
      if (event.key === 'ArrowRight') {
        switchBrute(1);
      }
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [switchBrute]);

  // Handle swipe
  useEffect(() => {
    if (!owner) return () => {};
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;

    const checkSwipe = () => {
      const deltaX = touchendX - touchstartX;
      const deltaY = touchendY - touchstartY;
      if (Math.abs(deltaY) > Math.abs(deltaX)) return; // Ignore swipe if Y is more important than X
      if (deltaX > 120) {
        switchBrute(-1);
      }
      if (deltaX < -120) {
        switchBrute(1);
      }
    };

    const handlerStart = (e: TouchEvent) => {
      touchstartX = e.changedTouches[0].screenX;
      touchstartY = e.changedTouches[0].screenY;
    };

    const handlerEnd = (e: TouchEvent) => {
      touchendX = e.changedTouches[0].screenX;
      touchendY = e.changedTouches[0].screenY;
      checkSwipe();
    };

    document.addEventListener('touchstart', handlerStart);
    document.addEventListener('touchend', handlerEnd);

    return () => {
      document.removeEventListener('touchstart', handlerStart);
      document.removeEventListener('touchend', handlerEnd);
    };
  }, [brute, navigate, owner, switchBrute]);

  const previousBruteArrow = owner && (
    <Tooltip title={t('previousBrute')}>
      <Fab
        size="small"
        onClick={() => switchBrute(-1)}
        color="primary"
        sx={{
          position: 'fixed',
          left: 8,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <NavigateBeforeIcon sx={{ color: 'secondary.main', cursor: 'pointer', m: 'auto' }} />
      </Fab>
    </Tooltip>
  );
  const nextBruteArrow = owner && (
    <Tooltip title={t('nextBrute')}>
      <Fab
        size="small"
        onClick={() => switchBrute(1)}
        color="primary"
        sx={{
          position: 'fixed',
          right: 8,
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <NavigateNextIcon sx={{ color: 'secondary.main', cursor: 'pointer', m: 'auto' }} />
      </Fab>
    </Tooltip>
  );

  return brute && (smallScreen
    ? (
      <>
        {previousBruteArrow}
        <CellMobileView
          ad={ad}
          logs={logs}
          language={language}
          confirmReport={confirmReport}
          confirmSacrifice={confirmSacrifice}
          confirmReset={confirmReset}
        />
        {nextBruteArrow}
      </>
    )
    : (
      <Page title={`${brute.name} ${t('MyBrute')}`} headerUrl={`/${brute.name}/cell`}>
        {previousBruteArrow}
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
                confirmReset={confirmReset}
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
              {(owner || !!brute.clanId) && (
                <CellClan brute={brute} sx={{ ml: 4 }} />
              )}
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
        {nextBruteArrow}
      </Page>
    ));
};

export default CellView;
