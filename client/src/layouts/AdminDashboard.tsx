import {
  AdminPanelSettings, ArrowBack, DarkMode, LightMode, Menu,
} from '@mui/icons-material';
import {
  Alert, AppBar, Box, Breadcrumbs, Button, Chip, CircularProgress,
  CssBaseline, Divider, Drawer, GlobalStyles, IconButton, Link,
  List, ListItemButton, ListItemText, ListSubheader, Stack,
  ThemeProvider, Toolbar, Tooltip, Typography,
} from '@mui/material';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Link as RouterLink, Outlet, useLocation, useNavigate,
} from 'react-router';
import { useAuth } from '../hooks/useAuth';
import { useFingerprint } from '../hooks/useFingerprint';
import { ConfirmProvider } from '../hooks/useConfirm';
import { ColorModeContext } from '../theme/ColorModeContext';
import { adminDark, adminLight } from '../theme/admin';
import { LS_KEY_ADMIN_THEME } from '../utils/constants';

const sections = [
  {
    title: 'Workspace',
    links: [
      ['Overview', ''], ['Users', '/user'], ['Brutes', '/brute'], ['Clans', '/clan'],
    ],
  },
  {
    title: 'Moderation',
    links: [
      ['Reports', '/report'], ['Banned users', '/banned-users'],
      ['Multiple accounts', '/multiple-accounts'], ['Banned words', '/banned-words'],
    ],
  },
  {
    title: 'Investigation',
    links: [
      ['User logs', '/user/logs'], ['Shared browsers', '/shared-browser'],
      ['Fingerprints', '/fingerprint'], ['Browser IDs', '/browser-id'],
      ['Known fingerprints', '/known-fingerprints'], ['Fight replay', '/fight-replay'],
    ],
  },
  {
    title: 'System',
    links: [['Configuration', '/config']],
  },
];

export const AdminDashboard = ({ moderator = false }: { moderator?: boolean }) => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => (
    localStorage.getItem(LS_KEY_ADMIN_THEME) === 'light' ? 'light' : 'dark'
  ));

  const {
    user, authing, signin,
  } = useAuth();

  const fingerprint = useFingerprint();
  const initiated = useRef(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = mode === 'dark' ? adminDark : adminLight;

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((previous) => {
        const next = previous === 'light' ? 'dark' : 'light';

        localStorage.setItem(LS_KEY_ADMIN_THEME, next);

        return next;
      });
    },
  }), []);

  useEffect(() => {
    if (!user && !authing && !initiated.current && !fingerprint.loading) {
      initiated.current = true;
      signin();
    }
  }, [user, authing, signin, fingerprint.loading]);

  useEffect(() => {
    if (user && !user.termsAccepted) {
      navigate('/terms');
    }
  }, [user, navigate]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const base = moderator ? '/moderator-panel' : '/admin-panel';

  const navigation = moderator ? [{
    title: 'Moderation',
    links: [['Reports', '/report']],
  }] : sections;

  // Prefer the most specific link (user logs is nested below users).
  const active = navigation.flatMap((section) => section.links)
    .filter(([, path]) => path ? pathname.startsWith(`${base}${path}`) : pathname === base || pathname === `${base}/`)
    .sort((a, b) => (b[1]?.length ?? 0) - (a[1]?.length ?? 0))[0];

  const title = active?.[0] ?? 'Administration';
  const allowed = user?.admin || (moderator && user?.moderator);

  const sidebar = (
    <>
      <Toolbar sx={{ gap: 1.5 }}>
        <AdminPanelSettings color="primary" />
        <Typography variant="h6">LaBrute</Typography>
        <Chip label={moderator ? 'Mod' : 'Admin'} size="small" />
      </Toolbar>
      <Divider />
      <Box component="nav" aria-label="Administration">
        {navigation.map((section) => (
          <List key={section.title} subheader={<ListSubheader>{section.title}</ListSubheader>}>
            {section.links.map(([label, path]) => (
              <ListItemButton
                key={path}
                component={RouterLink}
                to={`${base}${path}`}
                selected={active?.[1] === path}
                aria-current={active?.[1] === path ? 'page' : undefined}
                sx={{
                  mx: 1,
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            ))}
          </List>
        ))}
      </Box>
    </>
  );

  const renderContent = () => {
    if (fingerprint.error) {
      return <Alert severity="error">Unable to connect. Please reload to retry.</Alert>;
    }

    if (authing || fingerprint.loading) {
      return <Box role="status" aria-label="Loading account"><CircularProgress /></Box>;
    }

    if (!allowed) {
      return <Alert severity="error">You do not have permission to access this dashboard.</Alert>;
    }

    return <Outlet />;
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <GlobalStyles styles={{
          html: { '--labrute-snackbar-z-index': theme.zIndex.snackbar },
        }} />
        <ConfirmProvider>
          <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}>
            <AppBar position="sticky" color="inherit" elevation={0} sx={{
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <Toolbar sx={{ gap: 2 }}>
                <IconButton aria-label="Open navigation" onClick={() => setMobileOpen(true)} sx={{ display: { md: 'none' } }}>
                  <Menu />
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>{moderator ? 'Moderation' : 'Administration'}</Typography>
                <Typography variant="body2" sx={{
                  display: {
                    xs: 'none',
                    sm: 'block',
                  },
                }}>{user?.name}</Typography>
                <Tooltip title={mode === 'dark' ? 'Use light mode' : 'Use dark mode'}>
                  <IconButton aria-label="Toggle color mode" onClick={colorMode.toggleColorMode}>
                    {mode === 'dark' ? <LightMode /> : <DarkMode />}
                  </IconButton>
                </Tooltip>
                <Button component={RouterLink} to="/" startIcon={<ArrowBack />}>Game</Button>
              </Toolbar>
            </AppBar>
            {allowed && (
              <>
                <Drawer variant="permanent" sx={{
                  display: {
                    xs: 'none',
                    md: 'block',
                  },
                  '& .MuiDrawer-paper': {
                    width: 248,
                    top: 64,
                    height: 'calc(100% - 64px)',
                  },
                }}>
                  {sidebar}
                </Drawer>
                <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)} sx={{ '& .MuiDrawer-paper': { width: 248 } }}>
                  {sidebar}
                </Drawer>
              </>
            )}
            <Box component="main" sx={{
              ml: { md: allowed ? '248px' : 0 },
              p: {
                xs: 2,
                md: 4,
              },
              minWidth: 0,
            }}>
              <Stack spacing={3} sx={{
                maxWidth: 1600,
                mx: 'auto',
              }}>
                <Breadcrumbs>
                  <Link component={RouterLink} to={moderator ? `${base}/report` : base}>Dashboard</Link>
                  <Typography color="text.primary">{title}</Typography>
                </Breadcrumbs>
                <Typography variant="h4" component="h1">{title}</Typography>
                {renderContent()}
              </Stack>
            </Box>
          </Box>
        </ConfirmProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
