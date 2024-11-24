import { getFightsLeft, getGoldNeededForNewBrute, UserUpdateSettingsRequest } from '@labrute/core';
import { Lang } from '@labrute/prisma';
import { Add, AdminPanelSettings, DarkMode, Info, LightMode, Logout, Menu, MilitaryTech, MoreHoriz, MusicNote, NewReleases, Person, PersonSearch, Policy, RssFeed, Speed, SportsKabaddi } from '@mui/icons-material';
import { Badge, Box, Button, Divider, Drawer, GlobalStyles, IconButton, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Alert as MuiAlert, Switch, ThemeProvider, Tooltip, useTheme } from '@mui/material';
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
import { useBrute } from '../hooks/useBrute';

const Main = () => {
  const theme = useTheme();
  const { authing, user, signout, modifiers, updateData } = useAuth();
  const Alert = useAlert();
  const { t } = useTranslation();
  const colorMode = useContext(ColorModeContext);
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();
  const { brute } = useBrute();

  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<UserUpdateSettingsRequest>({
    fightSpeed: 2,
    backgroundMusic: true,
    displayVersusPage: true,
    displayOpponentDetails: false,
  });

  const favoriteCount = user?.brutes.filter((b) => b.favorite).length || 0;

  // Sync settings with user
  useEffect(() => {
    if (!user) return;

    setSettings({
      fightSpeed: user.fightSpeed,
      backgroundMusic: user.backgroundMusic,
      displayVersusPage: user.displayVersusPage,
      displayOpponentDetails: user.displayOpponentDetails,
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
    let processedPath = path;

    if (path.includes('{bruteName}')) {
      if (!brute && !user?.brutes[0]) return;

      processedPath = path.replace('{bruteName}', brute?.name ?? user?.brutes[0]?.name ?? '');
    }

    navigate(processedPath);
  };

  // Toggle setting
  const toggle = (key: keyof UserUpdateSettingsRequest) => () => {
    const newSettings: UserUpdateSettingsRequest = {
      fightSpeed: settings.fightSpeed,
      backgroundMusic: settings.backgroundMusic,
      displayVersusPage: settings.displayVersusPage,
      displayOpponentDetails: settings.displayOpponentDetails,
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
        displayOpponentDetails: newSettings.displayOpponentDetails,
      } : null));
    }).catch(catchError(Alert));
  };

  // All notifications read
  const allRead = () => {
    Server.Notification.setAllRead().then(() => {
      updateData((d) => (d ? {
        ...d,
        notifications: [],
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
          minWidth: 0,
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            bgcolor: 'transparent',
          },
          '&::-webkit-scrollbar': {
            width: '2px',
            bgcolor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: theme.palette.topbar.divider,
          },
        }}
        >
          {user?.brutes.slice(0, favoriteCount || 3).map((b) => (
            <Box
              key={b.id}
              mr={1}
            >
              <Badge
                badgeContent={getFightsLeft(b, modifiers)}
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
                  to={`/${b.name}/cell`}
                >
                  <BruteRender
                    brute={b}
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
            <Tooltip title={t('goldNeededForNewBrute', { gold: getGoldNeededForNewBrute(user) })}>
              <Text color={theme.palette.topbar.contrast} whiteSpace="nowrap">
                {user.gold}
                <Box component="img" src="/images/gold.png" sx={{ ml: 0.5, width: 8 }} />
              </Text>
            </Tooltip>
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
            <Badge
              badgeContent={user.notifications.length}
              color="success"
              componentsProps={{
                badge: { style: { marginTop: 4 } },
              }}
            >
              <Button
                onClick={toggleDrawer(true)}
                endIcon={<Person />}
                variant="outlined"
                size="small"
                color="info"
              >
                {user.name.length > 10 ? `${user.name.slice(0, 10)}…` : user.name}
              </Button>
            </Badge>
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
                {user.moderator && (
                  <ActionButton
                    to="/admin-panel/report"
                    Icon={Policy}
                    iconColor={theme.palette.info.main}
                    title={t('moderation')}
                  />
                )}
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
              <Badge
                badgeContent={user.notifications.length}
                color="success"
              >
                <Text h3 color={theme.palette.topbar.colorDark}>{t('notifications')}</Text>
              </Badge>
              <Button size="small" onClick={allRead} sx={{ color: theme.palette.topbar.contrast }}>{t('allRead')}</Button>
            </Box>
            <ThemeProvider theme={dark}>
              {user.notifications.length > 0 ? user.notifications.map((notification) => (
                <MuiAlert
                  key={notification.id}
                  variant="outlined"
                  severity={notification.severity}
                  icon={false}
                  action={notification.link && (
                    <Button
                      color={notification.severity}
                      size="small"
                      variant="outlined"
                      onClick={goTo(notification.link)}
                    >
                      {t('go')}
                    </Button>
                  )}
                  sx={{
                    mt: 0,
                    mb: 1,
                    '& .MuiAlert-action': {
                      alignItems: 'center',
                    }
                  }}
                >
                  <Text>{t(notification.message)}</Text>
                </MuiAlert>
              )) : (
                <Text center color={theme.palette.topbar.colorDark} sx={{ py: 2 }}>{t('noNotifications')}</Text>
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
                <ListItem>
                  <ListItemIcon>
                    <PersonSearch />
                  </ListItemIcon>
                  <ListItemText id="switch-displayOpponentDetails" primary={t('displayOpponentDetails')} />
                  <Switch
                    edge="end"
                    size="small"
                    onChange={toggle('displayOpponentDetails')}
                    checked={settings.displayOpponentDetails}
                    inputProps={{
                      'aria-labelledby': 'switch-displayOpponentDetails',
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
