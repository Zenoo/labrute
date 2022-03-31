import typography from './typography';

interface TypeTransition {
  time: string;
}

interface TypeScrollbar {
  main: string;
  hover: string;
}

interface TypeBorder {
  shadow: string;
  outer: string;
  main: string;
  inner: string;
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    light: string;
  }

  interface Palette {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar,
    border: TypeBorder,
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
      paper: '#fbf2af',
      light: 'rgba(247,225,183,1)'
    },
    border: {
      shadow: '#ce8b45',
      outer: '#876259',
      main: '#f6e978',
      inner: '#dec37f',
    }
  },
  typography,
  components: {
    MuiTextField: {
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
};

export default defaultTheme;
