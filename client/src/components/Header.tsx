import { pad } from '@labrute/core';
import { Box, BoxProps, Link, Paper, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import Text from './Text';
import { useAuth } from '../hooks/useAuth';
import Marquee from 'react-fast-marquee';

export interface HeaderProps extends BoxProps {
  url?: string;
}

const Header = ({
  url,
  ...rest
}: HeaderProps) => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const theme = useTheme();
  const { modifiers } = useAuth();

  const [time, setTime] = useState(moment.utc());
  const [marqueePaused, setMarqueePaused] = useState(localStorage.getItem('marqueePaused') === moment.utc().format('YYYY-MM-DD'));

  // Randomized left art
  const leftArt = useMemo(() => Math.floor(Math.random() * (11 - 1 + 1) + 1), []);
  // Randomized right art (must be different from left art)
  const rightArt = useMemo(() => {
    let art = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    while (art === leftArt) {
      art = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    }
    return art;
  }, [leftArt]);

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment.utc());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  // Pause marquee
  const pauseMarquee = () => {
    setMarqueePaused((prev) => {
      if (prev) {
        localStorage.removeItem('marqueePaused');
        return false;
      }
      localStorage.setItem('marqueePaused', time.format('YYYY-MM-DD'));
      return true;
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: 2,
      }}
      {...rest}
    >
      <Box
        component="img"
        src={`/images/header/left/${pad(leftArt, 2)}.png`}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          width: '23.118279569%',
        }}
      />
      <Link component={RouterLink} to={url || '/'}>
        <Box
          component="img"
          src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/${language}/header/head.webp`}
          sx={{
            width: 1,
            filter: `drop-shadow(3px 3px ${theme.palette.border.shadow})`,
          }}
        />
      </Link>
      <Box
        component="img"
        src={`/images/header/right/1${pad(rightArt, 2)}.png`}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          width: '23.118279569%',
        }}
      />
      <Text center bold color="secondary">
        {t('serverTime')}: {time.format('HH:mm')}
      </Text>
      {!!modifiers.length && (
        <Paper sx={{ mx: 1, p: 0, cursor: 'pointer' }} onClick={pauseMarquee}>
          <Marquee
            pauseOnHover
            play={!marqueePaused}
            style={{
              justifyContent: 'center',
            }}
          >
            <Text bold smallCaps sx={{ mr: 0.5 }}>
              {t('activeModifiers')}:
            </Text>
            {modifiers.map((modifier) => (
              <Text key={modifier}>
                <Text component="span" bold color="secondary" smallCaps>
                  {t(`modifier.${modifier}`)}
                </Text>.{' '}
                {t(`modifier.${modifier}.desc`)}
              </Text>
            ))}
          </Marquee>
        </Paper>
      )}
    </Box>
  );
};

export default Header;
