import { Version } from '@labrute/core';
import { AlertTitle, Box, BoxProps, Alert as MuiAlert, Tooltip } from '@mui/material';
import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import ads, { AdName } from '../utils/ads';
import Header from './Header';
import Link from './Link';
import Text from './Text';

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
  const { authing, user, signin } = useAuth();

  // Auth on page load
  useEffect(() => {
    if (!user && !authing) {
      signin();
    }
  }, [authing, signin, user]);

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
        <Text color="secondary" bold>
          &copy; 2008{' '}
          <Link href="http://www.motion-twin.com/">
            <Box
              component="img"
              src="/images/motiontwin.gif"
              alt="Motion Twin"
              sx={{ verticalAlign: 'text-top' }}
            />
          </Link>
          {' '}| v{Version} | Made with 💖
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
