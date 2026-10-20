import { Lang } from '@labrute/prisma';
import {
  Box, BoxProps,
  Tooltip,
  useTheme
} from '@mui/material';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { useServer } from '../hooks/useServer';
import { useAuth } from '../hooks/useAuth';
import { catchError } from '../utils/catchError';
import { useAlert } from '../hooks/useAlert';

export const LanguageSwitch = ({ sx, ...rest }: BoxProps) => {
  const { t } = useTranslation();
  const { user, updateData } = useAuth();
  const { language, setLanguage } = useLanguage();
  const Server = useServer();
  const Alert = useAlert();
  const theme = useTheme();

  const changeLanguage = useCallback((lang: Lang) => async () => {
    setLanguage(lang);

    // Update user language if logged in
    if (user && user.lang !== lang) {
      try {
        await Server.User.changeLanguage(lang);
        updateData(({
          ...user,
          lang,
        }));
      } catch (error) {
        catchError(Alert, error);
      }
    }
  }, [Alert, Server.User, setLanguage, updateData, user]);

  return (

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 1,
        ...sx,
      }}
      {...rest}
    >
      {/* LANGUAGE */}
      {Object.values(Lang).map((lang) => (
        <Tooltip title={t(`${lang}-version`)}>
          <Box
            key={lang}
            component="img"
            src={`/images/${lang}/flag.svg`}
            alt={lang}
            onClick={changeLanguage(lang)}
            sx={{
              cursor: 'pointer',
              width: 15,
              boxShadow: language === lang ? `0 0 8px ${theme.palette.topbar.contrastShadow}` : 'none',
              border: `1px solid ${theme.palette.topbar.colorDark}`,
              '&:hover': {
                boxShadow: `0 0 8px ${theme.palette.topbar.contrastShadow}`,
              }
            }}
          />
        </Tooltip>
      ))}
    </Box>
  );
};
