import { Box, BoxProps, Button, GlobalStyles, Link, Paper, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import etwin from '../utils/etwin';
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

  const oauth = useCallback(() => {
    etwin.fetch('/oauth/redirect', {
      method: 'POST',
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

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
      <Paper sx={{
        position: 'fixed',
        bottom: -22,
        right: 0,
        py: 0,
        px: 1,
        transition: 'all 0.3s ease-in-out',
        zIndex: 1,
        '&:hover': {
          bottom: 0
        }
      }}
      >
        <Button onClick={oauth}>
          <Text bold color="secondary">{t('connect')}</Text>
        </Button>
      </Paper>
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
