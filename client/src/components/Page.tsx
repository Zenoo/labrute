import { AccountCircle, Login, Logout, Man, Woman } from '@mui/icons-material';
import { Box, BoxProps, CircularProgress, GlobalStyles, Link, SpeedDial, SpeedDialAction, Tooltip, useTheme } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import Text from './Text';

interface Props extends BoxProps {
  title: string,
  children: React.ReactNode;
}

const Page = ({
  title,
  children,
  ...rest
}: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const Alert = useAlert();
  const { authing, user, signout, signin } = useAuth();
  const navigate = useNavigate();

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

  const goToCell = useCallback((name: string) => () => {
    navigate(`/cell/${name}`);
  }, [navigate]);

  const oauth = useCallback(() => {
    Fetch<string>('/api/oauth/redirect').then((response) => {
      window.location.href = response;
    }).catch(catchError(Alert, t));
  }, [Alert, t]);

  const logout = useCallback(() => {
    signout();
    Alert.open('success', t('logoutSuccess'));
  }, [Alert, signout, t]);

  return (
    <Box {...rest}>
      <GlobalStyles styles={{
        html: {
          height: '100%'
        },
        body: {
          margin: 0,
          height: '100%',
          fontFamily: 'arial,sans-serif'
        },
        '#root': {
          minHeight: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.light} 0%, ${theme.palette.background.default} 160px)`,
        }
      }}
      />
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
            icon={brute.data.gender === 'male' ? <Man /> : <Woman />}
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
          <Link href="" color="inherit" underline="hover">Arkadeo</Link>{' '}
          <Link href="" color="inherit" underline="hover">DinoRPG</Link>{' '}
          <Link href="" color="inherit" underline="hover">Alphabounce</Link>{' '}
          <Link href="" color="inherit" underline="hover">Hordes</Link>{' '}
          <Link href="" color="inherit" underline="hover">KadoKado</Link>{' '}
          <Link href="" color="inherit" underline="hover">Kingdom</Link>{' '}
          <Link href="" color="inherit" underline="hover">Fever!</Link>{' '}
          <Link href="" color="inherit" underline="hover">Naturalchimie</Link>{' '}
          <Link href="" color="inherit" underline="hover">Snake</Link>{' '}
          <Link href="" color="inherit" underline="hover">Mush</Link>{' '}
          <Link href="" color="inherit" underline="hover">Teacher Story</Link>{' '}
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
          <Link href="https://eternal-twin.net/" color="inherit" underline="hover">Eternal Twin</Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Page;
