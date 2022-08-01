import { createTheme } from '@mui/material';
import ThemeOptions from './ThemeOptions.js';

export default createTheme({
  ...ThemeOptions,
  palette: {
    ...ThemeOptions.palette,
    mode: 'dark',
    background: {
      default: '#303030',
      paper: '#424242'
    },
  }
});
