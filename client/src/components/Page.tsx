import { Box, BoxProps, GlobalStyles, Link, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
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
          height: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.light} 0%, ${theme.palette.background.default} 160px)`,
        }
      }}
      />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
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
