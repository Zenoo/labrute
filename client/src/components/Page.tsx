import { getFightsLeft, getGoldNeededForNewBrute, LAST_RELEASE, Version } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { AccountCircle, Add, AdminPanelSettings, Brightness4, Brightness7, DoNotDisturb, Login, Logout, MilitaryTech, MoreHoriz } from '@mui/icons-material';
import { AlertTitle, Badge, Box, BoxProps, CircularProgress, Fab, Alert as MuiAlert, SpeedDial, SpeedDialAction, Tooltip, useTheme } from '@mui/material';
import React, { Fragment, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { ColorModeContext } from '../theme/ColorModeContext';
import ads, { AdName } from '../utils/ads';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import Server from '../utils/Server';
import BruteRender from './Brute/Body/BruteRender';
import Header from './Header';
import Text from './Text';
import Link from './Link';

interface Props extends BoxProps {
  title: string,
  headerUrl?: string,
  children: React.ReactNode;
  sx?: BoxProps['sx'];
}

const Page = ({
  title,
  headerUrl,
  children,
  sx,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { authing, user, signout, signin, updateData, randomSkill } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  // Speed dial state
  const [open, setOpen] = useState(false);

  // Gold needed for a new brute
  const goldNeeded = useMemo(() => (user ? getGoldNeededForNewBrute(user) : 0), [user]);

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

  // Check last patch notes seen
  useEffect(() => {
    if (!user) return;

    const lastPatchNotes = localStorage.getItem('patchNotes');

    if (lastPatchNotes !== LAST_RELEASE.version) {
      Alert.open('info', t('newPatchNotesAvailable'), '/patch-notes');
    }
  }, [Alert, t, user]);

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
  const changeLanguage = useCallback((lang: Lang) => () => {
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

  // Redirect to User profile
  const GoToUserProfile = useCallback(() => {
    setOpen(false);
    navigate(`/user/${user?.id}`);
  }, [navigate, user]);

  // Redirect to Hall page
  const goToHall = useCallback(() => {
    setOpen(false);
    navigate('/hall');
  }, [navigate]);

  const ColorModeIcon = theme.palette.mode === 'dark' ? Brightness7 : Brightness4;

  return (
    <Box
      sx={{
        pb: 2,
        ...sx,
      }}
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* HEADER */}
      <Header url={headerUrl} />
      {children}
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
            icon={user.gold}
            tooltipTitle={t('gold')}
            tooltipOpen
          />
          <SpeedDialAction
            icon={<MilitaryTech color="warning" />}
            tooltipTitle={t('userProfile', { user: user.name })}
            tooltipOpen
            onClick={GoToUserProfile}
            sx={{ textAlign: 'right', whiteSpace: 'nowrap' }}
          />
          {user.brutes.slice(0, 3).map((brute) => (
            <SpeedDialAction
              key={brute.name}
              icon={(
                <Badge badgeContent={getFightsLeft(brute, randomSkill)} color="secondary">
                  <Box sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    p: 0.25,
                  }}
                  >
                    <BruteRender
                      brute={brute}
                      looking="left"
                    />
                  </Box>
                </Badge>
              )}
              tooltipTitle={brute.name}
              tooltipOpen
              onClick={goToCell(brute.name)}
            />
          ))}
          {user.brutes.length > 3 && (
            <SpeedDialAction
              icon={<MoreHoriz color="secondary" />}
              tooltipTitle={t('hall')}
              tooltipOpen
              onClick={goToHall}
            />
          )}
          <SpeedDialAction
            icon={user.gold >= goldNeeded ? <Add color="success" /> : <DoNotDisturb color="error" />}
            tooltipTitle={`${t('newBrute')}${getGoldNeededForNewBrute(user) > 0 ? ` (${getGoldNeededForNewBrute(user)} ${t('gold')})` : ''}`}
            tooltipOpen
            onClick={user.gold >= goldNeeded ? goHome : undefined}
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
          {' '}| v{Version}{' '}
          <Link to="/patch-notes" sx={{ fontStyle: 'italic' }}>({t('patchNotes')})</Link>
          {' '}Remade with love at{' '}
          <Link href="https://eternal-twin.net/">Eternal Twin</Link>
          {/* LANGUAGE */}
          {Object.values(Lang).map((lang) => lang !== language && (
            <Tooltip title={t(`${lang}-version`)} key={lang}>
              <Box
                component="img"
                src={`/images/${lang}/flag.svg`}
                alt={lang}
                onClick={changeLanguage(lang)}
                sx={{ ml: 1, cursor: 'pointer', width: 15 }}
              />
            </Tooltip>
          ))}
          {/* LIGHT/DARK MODE */}
          <Tooltip title={theme.palette.mode === 'dark' ? t('lightMode') : t('darkMode')}>
            <ColorModeIcon
              onClick={colorMode.toggleColorMode}
              sx={{ cursor: 'pointer', fontSize: 14, ml: 1 }}
            />
          </Tooltip>
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
      <MuiAlert
        severity="warning"
        variant="filled"
        sx={{ mb: 0 }}
      >
        <AlertTitle>{t('betaTitle')}</AlertTitle>
        {t('betaDescription')}
        <Link href="https://discord.gg/ERc3svy" target="_blank" sx={{ ml: 0.5, textDecoration: 'underline' }}>
          {t('discord')}
        </Link>
        .<br />
        {t('betaReset')}
      </MuiAlert>
    </Box>
  );
};

export default Page;
