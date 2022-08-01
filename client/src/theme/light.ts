import { createTheme } from '@mui/material';
import ThemeOptions from './ThemeOptions.js';

export default createTheme({
  ...ThemeOptions,
  palette: {
    ...ThemeOptions.palette,
    mode: 'light',
    text: {
      primary: 'rgb(176 107 79)',
      secondary: 'rgba(176, 107, 79, 0.7)',
      disabled: 'rgba(176, 107, 79, 0.3)',
    }
  },
});
