import typography from './typography';

interface TypeTransition {
  time: string;
}

interface TypeScrollbar {
  main: string;
  hover: string;
}

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    main: string;
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
declare module "@mui/material/styles/createTypography" {
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
    status: {
      ongoing: '#3294d6',
      sent: 'orange',
      validated: '#66cf6f',
      lost: '#f44336',
      closed: 'green',
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
