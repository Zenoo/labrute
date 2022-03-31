import typography from './typography';

interface TypeTransition {
  time: string;
}

interface TypeScrollbar {
  main: string;
  hover: string;
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    light: string;
  }

  interface Palette {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar
  }
  interface PaletteOptions {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar
  }
  interface TypeText {
    white: string;
  }
}
declare module '@mui/material/styles/createTypography' {
  interface Typography {
    largeTextBackground: FontStyle
    tinyTextBackground: FontStyle
  }
}

const defaultTheme = {
  palette: {
    primary: {
      main: '#4d8fb7',
    },
    secondary: {
      main: '#604db7',
    },
    transition: { // Custom
      time: '0.5s',
    },
    scrollbar: { // Custom
      main: 'rgba(0,0,0,.3)',
      hover: 'rgba(0,0,0,.5)',
    },
    background: {
      default: 'rgb(235,173,112)',
      light: 'rgba(247,225,183,1)'
    }
  },
  typography,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: 'none',
        },
      },
    },
  },
};

export default defaultTheme;
