import { experimental_sx as sx } from '@mui/material/styles';
import { FontStyle } from '@mui/material/styles/createTypography.js';
import typography from './typography.js';

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

declare module '@mui/material/styles' {
  interface TypeBackground {
    light: string;
    paperLight: string;
    paperDark: string;
    paperAccent: string;
  }

  interface Palette {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar,
    border: TypeBorder,
    button: TypeButton,
    heat: (null | string)[]
    level: string
  }
  interface PaletteOptions {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar,
    heat: (null | string)[]
    level: string
  }
  interface TypeText {
    white: string;
  }
  interface Typography {
    handwritten: FontStyle
    Verdana: FontStyle
  }
}

const border = {
  shadow: '#bc7b4a',
  outer: '#725254',
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
      paperDark: '#F8ED8F',
      paperAccent: '#fffcb0',
    },
    heat: [
      null,
      '#cccc00',
      '#ffcc00',
      '#ff9900',
      '#ff6600',
      '#ff3300',
      '#ff0000',
      '#cc0000',
      '#990000',
      '#660000',
      '#330000',
      '#000000',
      '#00ccff',
      '#0099ff',
      '#0066ff',
      '#0033ff',
      '#0000ff',
      '#0000cc',
      '#000099',
      '#000066',
      '#000033',
      '#000000',
      '#ccffcc',
      '#99ff99',
      '#66ff66',
      '#33ff33',
      '#00ff00',
      '#00cc00',
      '#009900',
      '#006600',
      '#003300',
      '#000000',
      null,
    ],
    level: '#d0f832',
    border,
    button
  },
  typography,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: sx({
          boxShadow: `0 0 0 1px ${border.inner},
          0 0 1px 4.5px ${border.main},
          0 0 0 6px ${border.outer},
          3px 3px 0 6px ${border.shadow}`,
          bgcolor: 'background.paper',
          borderRadius: '5px',
          p: 2,
          m: 2,
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
          fontWeight: 'bold',
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: sx({
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
    MuiTooltip: {
      defaultProps: {
        followCursor: true,
        placement: 'top' as const,
        enterTouchDelay: 100,
      },
      styleOverrides: {
        tooltip: sx({
          bgcolor: 'background.paper',
          color: 'secondary.main',
          borderColor: 'secondary.main',
          borderWidth: '1.5px',
          borderStyle: 'solid',
        }),
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'inherit',
        underline: 'hover' as const,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: sx({
          boxShadow: 1,
        })
      }
    }
  },
};

export default defaultTheme;
