import { getFightsLeft, getSacriPointsNeeded, Language, LANGUAGES, Version } from '@labrute/core';
import { AccountCircle, Add, AdminPanelSettings, DoNotDisturb, Login, Logout, MilitaryTech } from '@mui/icons-material';
import { Badge, Box, BoxProps, CircularProgress, Fab, Link, SpeedDial, SpeedDialAction, Tooltip } from '@mui/material';
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import ads, { AdName } from '../utils/ads';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import BrutePortrait from './Brute/Body/BrutePortait';
import Header from './Header';
import Text from './Text';
import Server from '../utils/Server';
import { isMobile } from 'react-device-detect';
import useStateAsync from '../hooks/useStateAsync';

interface Props extends BoxProps {
  title: string,
  headerUrl?: string,
  children: React.ReactNode;
  checkServer?: boolean;
}

const Page = ({
  title,
  headerUrl,
  children,
  checkServer = true,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { authing, user, signout, signin, updateData } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // Check if server is ready
  const { data: serverState } = useStateAsync(null, Server.isReady, undefined);

  // Speed dial state
  const [open, setOpen] = useState(false);

  // Points needed for a new brute
  const pointsNeeded = useMemo(() => (user ? getSacriPointsNeeded(user) : 0), [user]);

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

  // Redirect to waiting page if server is not ready
  useEffect(() => {
    if (serverState === null) return;

    if (checkServer && !serverState.ready) {
      navigate('/generating-tournaments');
    }
  }, [checkServer, navigate, serverState]);

  // Open speed dial
  const openSpeedDial = useCallback(() => {
    // Don't do anything on mobile
    if (isMobile) return;

    setOpen(true);
  }, []);

  // Close speed dial
  const toggleSpeedDial = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const goToCell = useCallback((name: string) => () => {
    setOpen(false);
    navigate(`/${name}/cell`);
  }, [navigate]);

  const oauth = useCallback(() => {
    Fetch<{ url: string }>('/api/oauth/redirect').then(({ url }) => {
      window.location.href = url;
    }).catch(catchError(Alert));
  }, [Alert]);

  // Logout
  const logout = useCallback(() => {
    setOpen(false);
    signout();
    Alert.open('success', t('logoutSuccess'));
  }, [Alert, signout, t]);

  // Change language
  const changeLanguage = useCallback((lang: Language) => () => {
    setLanguage(lang);

    // Update user language if logged in
    if (user && user.lang !== lang) {
      Server.User.changeLanguage(lang).then(() => {
        updateData(({
          ...user,
          lang,
        }));
      }).catch(catchError(Alert));
    }
  }, [Alert, setLanguage, updateData, user]);

  // Redirect to Home page
  const goHome = useCallback(() => {
    setOpen(false);
    navigate('/');
  }, [navigate]);

  // Redirect to Achievements page
  const goToAchievements = useCallback(() => {
    setOpen(false);
    navigate('/achievements');
  }, [navigate]);

  return (
    <Box {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* HEADER */}
      <Header url={headerUrl} />
      {(!!serverState?.ready) && children}
      {/* AUTH */}
      {!user ? (
        <Tooltip title={t('login')}>
          <Fab
            onClick={oauth}
            sx={{
              position: 'fixed',
              bottom: 16,
              right: 16,
              zIndex: 101,
              bgcolor: 'success.light',
              '&:hover': { bgcolor: 'success.main' },
            }}
          >
            {authing
              ? <CircularProgress color="success" sx={{ width: '20px !important', height: '20px !important' }} />
              : <Login />}
          </Fab>
        </Tooltip>
      ) : (
        <SpeedDial
          ariaLabel={t('account')}
          open={open}
          onMouseEnter={openSpeedDial}
          onClick={toggleSpeedDial}
          sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 101 }}
          FabProps={{ sx: { bgcolor: 'success.light', '&:hover': { bgcolor: 'success.main' } } }}
          icon={(
            <Tooltip title={user.name}>
              <AccountCircle />
            </Tooltip>
          )}
        >
          <SpeedDialAction
            icon={<Logout color="error" />}
            tooltipTitle={t('logout')}
            tooltipOpen
            onClick={logout}
          />
          <SpeedDialAction
            icon={user.sacrificePoints}
            tooltipTitle={t('sacrificePoints')}
            tooltipOpen
          />
          <SpeedDialAction
            icon={<MilitaryTech color="warning" />}
            tooltipTitle={t('achievements')}
            tooltipOpen
            onClick={goToAchievements}
          />
          {user.brutes && user.brutes.map((brute) => (
            <SpeedDialAction
              key={brute.name}
              icon={(
                <Badge badgeContent={getFightsLeft(brute)} color="secondary">
                  <BrutePortrait brute={brute} sx={{ width: 40 }} />
                </Badge>
              )}
              tooltipTitle={brute.name}
              tooltipOpen
              onClick={goToCell(brute.name)}
            />
          ))}
          <SpeedDialAction
            icon={user.sacrificePoints >= pointsNeeded ? <Add color="success" /> : <DoNotDisturb color="error" />}
            tooltipTitle={`${t('newBrute')}${getSacriPointsNeeded(user) > 0 ? ` (${getSacriPointsNeeded(user)} SP)` : ''}`}
            tooltipOpen
            onClick={user.sacrificePoints >= pointsNeeded ? goHome : undefined}
            sx={{ textAlign: 'right', whiteSpace: 'nowrap' }}
          />
        </SpeedDial>
      )}
      {/* FOOTER */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Text color="secondary" sx={{ fontWeight: 'bold' }}>
          {t('moreGames')} :{' '}
          {Object.entries(ads).map(([name, ad]) => (
            <Fragment key={name}>
              <Tooltip title={t(`${name as AdName}.desc`)}>
                <Link href={ad.url} target="_blank">{t(name as AdName)}</Link>
              </Tooltip>
              {' '}
            </Fragment>
          ))}
        </Text>
        <Text color="secondary" sx={{ fontWeight: 'bold' }}>
          &copy; 2008{' '}
          <Link href="http://www.motion-twin.com/">
            <Box
              component="img"
              src="/images/motiontwin.gif"
              alt="Motion Twin"
              sx={{ verticalAlign: 'middle' }}
            />
          </Link>
          {' '}| v{Version} Remade with love at{' '}
          <Link href="https://eternal-twin.net/">Eternal Twin</Link>
          {/* LANGUAGE */}
          {LANGUAGES.map((lang) => lang !== language && (
            <Tooltip title={t(`${lang}-version`)} key={lang}>
              <Box
                component="img"
                src={`/images/${lang}/flag.svg`}
                alt={t(`${lang}-version`)}
                onClick={changeLanguage(lang)}
                sx={{ ml: 1, cursor: 'pointer', width: 15 }}
              />
            </Tooltip>
          ))}
          {/* ADMIN PANEL */}
          {user && user.admin && (
            <Tooltip title={t('adminPanel')}>
              <Link href="/admin-panel" sx={{ ml: 1 }}>
                <AdminPanelSettings sx={{ fontSize: 14 }} />
              </Link>
            </Tooltip>
          )}
        </Text>
      </Box>
    </Box>
  );
};

export default Page;
