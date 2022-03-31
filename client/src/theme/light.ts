import { createTheme } from '@mui/material';
import ThemeOptions from './ThemeOptions';

export default createTheme({
  ...ThemeOptions,
  palette: {
    ...ThemeOptions.palette,
    mode: 'light',
    text: {
      primary: 'rgba(0, 0, 0, 0.7)',
      secondary: 'rgba(0, 0, 0, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.3)',
    }
  },
});
