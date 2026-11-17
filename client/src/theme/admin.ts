import { createTheme, PaletteMode } from '@mui/material';
import { dark } from './dark';
import { light } from './light';

// Build once per mode, retaining game palette extensions used by embedded admin tools.
const createAdminTheme = (mode: PaletteMode) => {
  const dashboard = createTheme({
    palette: {
      mode,
      primary: { main: mode === 'dark' ? '#90caf9' : '#1565c0' },
      secondary: { main: mode === 'dark' ? '#b0bec5' : '#455a64' },
      background: {
        default: mode === 'dark' ? '#101820' : '#f3f5f8',
        paper: mode === 'dark' ? '#1b2632' : '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h4: {
        fontSize: '1.8rem',
        fontWeight: 600,
      },
      h6: {
        fontSize: '1.15rem',
        fontWeight: 600,
      },
      button: { textTransform: 'none' },
    },
    components: {
      MuiTypography: { styleOverrides: { root: { overflowWrap: 'anywhere' } } },
      MuiTextField: { defaultProps: { fullWidth: true } },
      MuiButton: { defaultProps: { variant: 'outlined' } },
      MuiPaper: {
        defaultProps: { elevation: 0 },
        styleOverrides: {
          root: {
            padding: 20,
            borderRadius: 8,
            backgroundImage: 'none',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            padding: 0,
            borderRadius: 0,
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: 0,
          },
        },
      },
      MuiTableCell: { styleOverrides: { root: { overflowWrap: 'anywhere' } } },
      MuiListItem: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid',
            borderColor: mode === 'dark' ? '#344250' : '#e0e5eb',
          },
        },
      },
    },
  });

  const gameTheme = mode === 'dark' ? dark : light;

  return createTheme({
    ...dashboard,
    palette: {
      ...gameTheme.palette,
      ...dashboard.palette,
    },
  });
};

export const adminLight = createAdminTheme('light');
export const adminDark = createAdminTheme('dark');
