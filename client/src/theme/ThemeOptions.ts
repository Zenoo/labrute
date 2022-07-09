import typography from './typography';
import { experimental_sx as sx } from '@mui/material/styles';

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

interface TypeHover {
  main: string;
  hover: string;
}

interface TypeButton {
  shadow: TypeHover
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    light: string;
    paperLight: string;
    paperAccent: string;
  }

  interface Palette {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar,
    border: TypeBorder,
    button: TypeButton
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
    handwritten: FontStyle
    Verdana: FontStyle
  }
}

const border = {
  shadow: '#ce8b45',
  outer: '#815e56',
  main: '#f6ee90',
  inner: '#dec37f'
};

const button = {
  shadow: {
    main: '#ce8b45',
    hover: '#be803f'
  }
};

const defaultTheme = {
  palette: {
    primary: {
      main: '#dbbf95',
    },
    secondary: {
      main: '#733d2c',
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
      light: 'rgba(247,225,183,1)',
      paper: '#fbf2af',
      paperLight: '#fbf7c0',
      paperAccent: '#fffcb0',
    },
    border,
    button
  },
  typography,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: sx({
          boxShadow: `0 0 0 1.5px ${border.inner},
          0 0 0 4px ${border.main},
          0 0 0 5.5px ${border.outer},
          3px 3px 1px 5px ${border.shadow}`,
          bgcolor: 'background.paper',
          borderRadius: '7px',
          p: 2,
          mx: '14px'
        })
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: sx({
          color: 'secondary.main',
        }),
        notchedOutline: sx({
          border: 'none',
        }),
        input: sx({
          typography: 'handwritten',
          fontWeight: 'bold',
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: sx({
          typography: 'handwritten',
          textTransform: 'uppercase',
        }),
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: sx({
          border: `2px solid ${border.outer}`,
          bgcolor: 'background.paperLight',
          borderRadius: '4px',
          boxShadow: `2px 2px 1px 1px ${border.shadow}`,
          transition: '.13s ease-in-out',
          p: 0,
          typography: 'handwritten',
          '&:hover': {
            bgcolor: 'background.paper',
            boxShadow: `2px 2px 1px 1px ${border.shadow}`,
          },
          '&:active': {
            boxShadow: 'none',
            '&>div': {
              boxShadow: 'none',
              '&>div': {
                transform: 'translate3d(0px, 0px, 0px)'
              }
            }
          }
        }),
      },
    },
  },
};

export default defaultTheme;
