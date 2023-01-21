import { createTheme } from '@mui/material';
import ThemeOptions from './ThemeOptions';

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
