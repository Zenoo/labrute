import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { Box, BoxProps, CircularProgress, Link, SpeedDial, SpeedDialAction, Tooltip } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert.js';
import { useAuth } from '../hooks/useAuth.js';
import { useLanguage } from '../hooks/useLanguage.js';
import { Language, languages } from '../i18n.js';
import catchError from '../utils/catchError.js';
import Fetch from '../utils/Fetch.js';
import BrutePortrait from './Brute/Body/BrutePortait.js';
import Text from './Text.js';

interface Props extends BoxProps {
  title: string,
  children: React.ReactNode;
}

const Page = ({
  title,
  children,
  ...rest
}: Props) => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { authing, user, signout, signin } = useAuth();
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

  const goToCell = useCallback((name: string) => () => {
    navigate(`/${name}/cell`);
  }, [navigate]);

  const oauth = useCallback(() => {
    Fetch<string>('/api/oauth/redirect').then((response) => {
      window.location.href = response;
    }).catch(catchError(Alert));
  }, [Alert]);

  // Logout
  const logout = useCallback(() => {
    signout();
    Alert.open('success', t('logoutSuccess'));
  }, [Alert, signout, t]);

  // Change language
  const changeLanguage = useCallback((lang: Language) => () => {
    setLanguage(lang);
  }, [setLanguage]);

  return (
    <Box {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
      {/* AUTH */}
      <SpeedDial
        ariaLabel={t('account')}
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={(
          <Tooltip title={user ? user.name : t('account')}>
            {authing ? <CircularProgress color="success" sx={{ width: '20px !important', height: '20px !important' }} /> : <AccountCircle />}
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
        {user && user.brutes && user.brutes.map((brute) => (
          <SpeedDialAction
            key={brute.id}
            icon={(
              <BrutePortrait
                id={brute.id}
                gender={brute.data.gender}
                bodyParts={brute.data.body}
                colors={brute.data.colors}
              />
            )}
            tooltipTitle={brute.data.name}
            tooltipOpen
            onClick={goToCell(brute.data.name)}
          />
        ))}
      </SpeedDial>
      {/* FOOTER */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Text color="secondary" sx={{ fontWeight: 'bold' }}>
          {t('moreGames')} :{' '}
          <Link href="">Arkadeo</Link>{' '}
          <Link href="">DinoRPG</Link>{' '}
          <Link href="">Alphabounce</Link>{' '}
          <Link href="">Hordes</Link>{' '}
          <Link href="">KadoKado</Link>{' '}
          <Link href="">Kingdom</Link>{' '}
          <Link href="">Fever!</Link>{' '}
          <Link href="">Naturalchimie</Link>{' '}
          <Link href="">Snake</Link>{' '}
          <Link href="">Mush</Link>{' '}
          <Link href="">Teacher Story</Link>{' '}
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
          {' '}| Remade with love at{' '}
          <Link href="https://eternal-twin.net/">Eternal Twin</Link>
          {/* LANGUAGE */}
          {languages.map((lang) => lang !== language && (
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
