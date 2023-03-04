import { Language, LANGUAGES } from '@labrute/core';
import { AccountCircle, Add, Login, Logout } from '@mui/icons-material';
import { Box, BoxProps, CircularProgress, Link, SpeedDial, SpeedDialAction, Tooltip } from '@mui/material';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import ads, { AdName } from '../utils/ads';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import Version from '../utils/Version';
import BrutePortrait from './Brute/Body/BrutePortait';
import Header from './Header';
import Text from './Text';

interface Props extends BoxProps {
  title: string,
  headerUrl?: string,
  children: React.ReactNode;
}

const Page = ({
  title,
  headerUrl,
  children,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { authing, user, signout, signin } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // Speed dial state
  const [open, setOpen] = useState(false);

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

  // Open speed dial
  const openSpeedDial = useCallback(() => {
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
  }, [setLanguage]);

  // Redirect to Home page
  const goHome = useCallback(() => {
    setOpen(false);
    navigate('/');
  }, [navigate]);

  return (
    <Box {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {/* HEADER */}
      <Header url={headerUrl} />
      {children}
      {/* AUTH */}
      <SpeedDial
        ariaLabel={t('account')}
        open={open}
        onMouseEnter={openSpeedDial}
        onClick={toggleSpeedDial}
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 101 }}
        FabProps={{ sx: { bgcolor: 'success.light', '&:hover': { bgcolor: 'success.main' } } }}
        icon={(
          <Tooltip title={user ? user.name : t('account')}>
            {authing
              ? <CircularProgress color="success" sx={{ width: '20px !important', height: '20px !important' }} />
              : <AccountCircle />}
          </Tooltip>
        )}
      >
        {!authing && !user && (
          <SpeedDialAction
            icon={<Login color="success" />}
            tooltipTitle={t('login')}
            tooltipOpen
            onClick={oauth}
          />
        )}
        {user && (
          <SpeedDialAction
            icon={<Logout color="error" />}
            tooltipTitle={t('logout')}
            tooltipOpen
            onClick={logout}
          />
        )}
        {user && (
          <SpeedDialAction
            icon={user.sacrificePoints}
            tooltipTitle={t('sacrificePoints')}
            tooltipOpen
          />
        )}
        {user && user.brutes && user.brutes.map((brute) => (
          <SpeedDialAction
            key={brute.name}
            icon={(
              <BrutePortrait brute={brute} />
            )}
            tooltipTitle={brute.name}
            tooltipOpen
            onClick={goToCell(brute.name)}
          />
        ))}
        {user && user.brutes
          && (user.brutes.length < user.bruteLimit || user.sacrificePoints >= 500)
          && (
            <SpeedDialAction
              icon={<Add color="success" />}
              tooltipTitle={t('newBrute')}
              tooltipOpen
              onClick={goHome}
              sx={{ textAlign: 'right' }}
            />
          )}
      </SpeedDial>
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
        </Text>
      </Box>
    </Box>
  );
};

export default Page;
