import { getFightsLeft, LAST_RELEASE, UserUpdateSettingsRequest } from '@labrute/core';
import { EventStatus, Lang } from '@labrute/prisma';
import { Add, AdminPanelSettings, DarkMode, Info, LightMode, Logout, Menu, MilitaryTech, MoreHoriz, MusicNote, NewReleases, Person, RssFeed, Speed, SportsKabaddi } from '@mui/icons-material';
import { Badge, Box, Button, Divider, Drawer, GlobalStyles, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Alert as MuiAlert, Switch, ThemeProvider, useTheme } from '@mui/material';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, Link as RouterLink, useNavigate } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import BruteRender from '../components/Brute/Body/BruteRender';
import Link from '../components/Link';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
import { ColorModeContext } from '../theme/ColorModeContext';
import dark from '../theme/dark';
import catchError from '../utils/catchError';
import Fetch from '../utils/Fetch';
import Server from '../utils/Server';

const Main = () => {
  const theme = useTheme();
  const { authing, user, signout, modifiers, updateData, currentEvent } = useAuth();
  const Alert = useAlert();
  const { t } = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<UserUpdateSettingsRequest>({
    fightSpeed: 2,
    backgroundMusic: false,
    displayVersusPage: true,
  });

  // Sync settings with user
  useEffect(() => {
    if (!user) return;

    setSettings({
      fightSpeed: user.fightSpeed,
      backgroundMusic: user.backgroundMusic,
      displayVersusPage: user.displayVersusPage,
    });
  }, [user]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // Login
  const oauth = useCallback(() => {
    Fetch<{ url: string }>('/api/oauth/redirect').then(({ url }) => {
      window.location.href = url;
    }).catch(catchError(Alert));
  }, [Alert]);

  // Logout
  const logout = useCallback(() => {
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

  // Redirect to page
  const goTo = (path: string) => () => {
    navigate(path);
  };

  // Toggle setting
  const toggle = (key: keyof UserUpdateSettingsRequest) => () => {
    const newSettings: UserUpdateSettingsRequest = {
      fightSpeed: settings.fightSpeed,
      backgroundMusic: settings.backgroundMusic,
      displayVersusPage: settings.displayVersusPage,
    };

    if (key === 'fightSpeed') {
      newSettings.fightSpeed = settings.fightSpeed === 2 ? 1 : 2;
    } else {
      newSettings[key] = !settings[key];
    }

    setSettings(newSettings);

    Server.User.updateSettings(newSettings).then(() => {
      updateData((d) => (d ? {
        ...d,
        fightSpeed: newSettings.fightSpeed,
        backgroundMusic: newSettings.backgroundMusic,
        displayVersusPage: newSettings.displayVersusPage,
      } : null));
    }).catch(catchError(Alert));
  };

  return (
    <>
      {/* TOPBAR */}
      <Box
        sx={{
          position: 'sticky',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 32,
          bgcolor: theme.palette.topbar.background,
          boxShadow: 1,
          color: theme.palette.topbar.color,
          px: 1,
          py: 0.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          overflow: 'hidden'
        }}
      >
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
        }}
        >
          {user?.brutes.slice(0, 3).map((brute) => (
            <Box
              key={brute.id}
              mr={1}
            >
              <Badge
                badgeContent={getFightsLeft(brute, modifiers)}
                color="info"
                componentsProps={{
                  badge: { style: { marginTop: 4 } },
                }}
              >
                <Link
                  sx={{
                    width: 25,
                    height: 25,
                    borderRadius: '50%',
                    cursor: 'pointer',
                  }}
                  to={`/${brute.name}/cell`}
                >
                  <BruteRender
                    brute={brute}
                  />
                </Link>
              </Badge>
            </Box>
          ))}
          {user && user.brutes.length > 3 && (
            <IconButton component={RouterLink} to="/hall" sx={{ color: theme.palette.topbar.color }}>
              <MoreHoriz />
            </IconButton>
          )}
          <IconButton component={RouterLink} to="/" sx={{ color: theme.palette.topbar.contrast }}>
            <Add />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {user && (
            <Text color={theme.palette.topbar.contrast}>
              {user.gold}
              <Box component="img" src="/images/gold.png" sx={{ ml: 0.5, width: 8 }} />
            </Text>
          )}
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              my: 0.5,
              borderColor: theme.palette.topbar.divider
            }}
          />
          {user ? (
            <Button
              onClick={toggleDrawer(true)}
              endIcon={<Person />}
              variant="outlined"
              size="small"
              color="info"
            >
              {user.name.length > 10 ? `${user.name.slice(0, 10)}…` : user.name}
            </Button>
          ) : authing ? null : (
            <Button
              onClick={oauth}
              color="success"
              variant="contained"
              size="small"
              sx={{
                px: 1,
                py: 0.25,
                minWidth: 'auto',
              }}
            >
              {t('login')}
            </Button>
          )}
        </Box>
      </Box>
      {/* USER DRAWER */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          variant: 'elevation',
          sx: {
            width: 310,
            bgcolor: theme.palette.topbar.background,
            color: theme.palette.topbar.color,
            backgroundImage: 'none',
          }
        }}
        anchor="right"
      >
        {user && (
          <>
            {/* Close drawer + name */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'stretch',
                color: theme.palette.topbar.colorLight,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  bgcolor: theme.palette.topbar.contrastLight
                }}
              >
                <IconButton
                  onClick={toggleDrawer(false)}
                  size="small"
                  sx={{ color: theme.palette.topbar.colorLight }}
                >
                  <Menu />
                </IconButton>
              </Box>
              <Text
                h2
                bold
                sx={{
                  bgcolor: theme.palette.topbar.contrast,
                  flexGrow: 1,
                  px: 2,
                  textAlign: 'right',
                }}
              >
                {user.name}
              </Text>
            </Box>
            {/* Actions */}
            <Box sx={{
              p: 2,
              bgcolor: theme.palette.topbar.backgroundLight,
            }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <ActionButton
                  to={`/user/${user.id}`}
                  Icon={Person}
                  title={t('profile')}
                />
                <ActionButton
                  to="/wiki"
                  Icon={Info}
                  title={t('wiki')}
                />
                <ActionButton
                  to={`/user/${user.id}/feed`}
                  Icon={RssFeed}
                  title={t('feed')}
                />
                <ActionButton
                  to="/achievements/rankings"
                  Icon={MilitaryTech}
                  title={t('ranking')}
                />
                <ActionButton
                  to="/patch-notes"
                  Icon={NewReleases}
                  title={t('patchNotes')}
                />
                <ActionButton
                  onClick={colorMode.toggleColorMode}
                  Icon={theme.palette.mode === 'dark' ? LightMode : DarkMode}
                  iconColor={theme.palette.mode === 'dark' ? theme.palette.topbar.contrastLight : theme.palette.topbar.color}
                  title={theme.palette.mode === 'dark' ? t('lightMode') : t('darkMode')}
                />
                {user.admin && (
                  <ActionButton
                    to="/admin-panel"
                    Icon={AdminPanelSettings}
                    iconColor={theme.palette.success.main}
                    title={t('adminPanel')}
                  />
                )}
                <ActionButton
                  onClick={logout}
                  Icon={Logout}
                  iconColor={theme.palette.error.main}
                  title={t('logout')}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: 1,
                  pt: 1,
                }}
              >
                {/* LANGUAGE */}
                {Object.values(Lang).map((lang) => (
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
                ))}
              </Box>
            </Box>
            {/* Notifs */}
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
            }}
            >
              <Text h3 color={theme.palette.topbar.colorDark}>{t('notifications')}</Text>
              <Button size="small" sx={{ color: theme.palette.topbar.contrast }}>{t('allRead')}</Button>
            </Box>
            <ThemeProvider theme={dark}>
              {/* PATCH NOTES */}
              {user.lastReleaseSeen !== LAST_RELEASE.version && (
                <MuiAlert onClick={goTo('/patch-notes')} variant="outlined" severity="warning" icon={false} sx={{ cursor: 'pointer' }}>
                  <Text>{t('newPatchNotesAvailable')}</Text>
                </MuiAlert>
              )}
              {/* EVENT */}
              {currentEvent?.status === EventStatus.starting && !!user.brutes.length && (
                <MuiAlert onClick={goTo(`/${user.brutes[0]?.name}/event/${currentEvent.id}`)} variant="outlined" severity="info" icon={false} sx={{ cursor: 'pointer' }}>
                  <Text>{t('event.started')}</Text>
                </MuiAlert>
              )}
              <List
                dense
                subheader={<ListSubheader sx={{ lineHeight: 'inherit', py: 1 }}>{t('settings')}</ListSubheader>}
              >
                <ListItem>
                  <ListItemIcon>
                    <Speed />
                  </ListItemIcon>
                  <ListItemText id="switch-fightSpeed" primary={t('fasterFights')} />
                  <Switch
                    edge="end"
                    size="small"
                    onChange={toggle('fightSpeed')}
                    checked={settings.fightSpeed === 2}
                    inputProps={{
                      'aria-labelledby': 'switch-fightSpeed',
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <MusicNote />
                  </ListItemIcon>
                  <ListItemText id="switch-backgroundMusic" primary={t('enableBackgroundMusic')} />
                  <Switch
                    edge="end"
                    size="small"
                    onChange={toggle('backgroundMusic')}
                    checked={settings.backgroundMusic}
                    inputProps={{
                      'aria-labelledby': 'switch-backgroundMusic',
                    }}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddi />
                  </ListItemIcon>
                  <ListItemText id="switch-displayVersusPage" primary={t('displayVersusPage')} />
                  <Switch
                    edge="end"
                    size="small"
                    onChange={toggle('displayVersusPage')}
                    checked={settings.displayVersusPage}
                    inputProps={{
                      'aria-labelledby': 'switch-displayVersusPage',
                    }}
                  />
                </ListItem>
              </List>
            </ThemeProvider>
          </>
        )}
      </Drawer>
      <Box sx={{
        height: 1,
        m: '0 auto',
        width: 930,
        maxWidth: 1
      }}
      >
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
        <Outlet />
      </Box>
    </>
  );
};

export default Main;
