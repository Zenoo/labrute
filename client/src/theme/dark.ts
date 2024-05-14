import { createTheme } from '@mui/material';
import { indigo } from '@mui/material/colors';
import { defaultTheme } from './ThemeOptions';

const logColors = {
  success: {
    main: '#1c3f0b',
    light: '#206e00',
  },
  error: {
    main: '#5d0000',
    light: '#920000',
  },
};

const border = {
  shadow: indigo[800],
  outer: indigo[500],
  main: indigo[300],
  inner: indigo[200],
};

const initial = defaultTheme({
  border,
});

export default createTheme({
  ...initial,
  palette: {
    ...initial.palette,
    mode: 'dark',
    primary: {
      main: '#3399FF',
    },
    secondary: {
      main: '#AEBACB',
    },
    divider: 'rgba(0, 0, 0, 0.5)',
    background: {
      paper: 'rgb(15, 25, 36)',
      paperLight: 'rgb(20, 30, 41)',
      paperDark: 'rgb(10, 20, 31)',
      paperAccent: 'rgb(15, 25, 36)',
      default: '#101418',
      light: '#1c1f24',
    },
    border,
    logs: logColors,
  },
});
