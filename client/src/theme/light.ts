import { createTheme } from '@mui/material';
import { defaultTheme } from './ThemeOptions';

const logColors = {
  success: {
    main: '#a9d346',
    light: '#c9e57f',
  },
  error: {
    main: '#ff8889',
    light: '#fea3a3',
  },
};

const border = {
  shadow: '#bc7b4a',
  outer: '#725254',
  main: '#f6ee90',
  inner: '#dec37f'
};

const initial = defaultTheme({
  border,
});

export default createTheme({
  ...initial,
  palette: {
    ...initial.palette,
    mode: 'light',
    primary: {
      main: '#dbbf95',
    },
    secondary: {
      main: '#733d2c',
    },
    divider: '#733d2c',
    background: {
      default: 'rgb(235,173,112)',
      light: 'rgba(247,225,183,1)',
      paper: '#fbf2af',
      paperLight: '#fbf7c0',
      paperDark: '#F8ED8F',
      paperAccent: '#fffcb0',
    },
    text: {
      primary: 'rgb(176 107 79)',
      secondary: 'rgba(176, 107, 79, 0.7)',
      disabled: 'rgba(176, 107, 79, 0.3)',
    },
    logs: logColors,
  },
});
