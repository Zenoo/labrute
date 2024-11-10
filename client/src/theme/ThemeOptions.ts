import { ThemeOptions, createTheme } from '@mui/material/styles';
import { FontStyle } from '@mui/material/styles/createTypography';
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

interface TypeHover {
  main: string;
  hover: string;
}

interface TypeButton {
  shadow: TypeHover
}

interface TypeLog {
  main: string;
  light: string;
}

interface TypeLogs {
  success: TypeLog
  error: TypeLog
}

interface TypeTopbar {
  background: string;
  backgroundLight: string;
  divider: string;
  color: string;
  colorLight: string;
  colorDark: string;
  contrast: string;
  contrastLight: string;
  contrastShadow: string;
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    mybrute: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    mybrute: true;
  }
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
    logs: TypeLogs,
    achievements: {
      common: Palette['primary'];
      uncommon: Palette['primary'];
      rare: Palette['primary'];
      epic: Palette['primary'];
      legendary: Palette['primary'];
    },
    heat: (null | string)[],
    level: string,
    hpBar: {
      main: string;
      dark: string;
    },
    topbar: TypeTopbar,
  }
  interface PaletteOptions {
    transition?: TypeTransition,
    scrollbar?: TypeScrollbar,
    border?: TypeBorder,
    button?: TypeButton,
    logs?: TypeLogs,
    achievements?: {
      common: PaletteOptions['primary'];
      uncommon: PaletteOptions['primary'];
      rare: PaletteOptions['primary'];
      epic: PaletteOptions['primary'];
      legendary: PaletteOptions['primary'];
    },
    heat?: (null | string)[],
    level?: string,
    hpBar?: {
      main: string;
      dark: string;
    },
    topbar?: TypeTopbar,
  }
  interface TypeText {
    white: string;
  }

  interface Typography {
    handwritten: FontStyle
    Pixelized: FontStyle
    GameFont: FontStyle
  }

  interface TypographyVariants {
    handwritten: React.CSSProperties
    Pixelized: React.CSSProperties
    GameFont: React.CSSProperties
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    handwritten?: React.CSSProperties
    Pixelized?: React.CSSProperties
    GameFont?: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    handwritten: true
    Pixelized: true
    GameFont: true
  }
}

const { palette } = createTheme();

const logColors = {
  success: {
    main: '',
    light: '',
  },
  error: {
    main: '',
    light: '',
  },
};

const achievements = {
  common: palette.augmentColor({ color: { main: '#dbbf95' } }),
  uncommon: palette.augmentColor({ color: { main: '#a9d346' } }),
  rare: palette.augmentColor({ color: { main: '#4d94ff' } }),
  epic: palette.augmentColor({ color: { main: '#b866ff' } }),
  legendary: palette.augmentColor({ color: { main: '#ffcd00' } }),
};

type ThemeGeneratorOptions = {
  border: TypeBorder;
};

export const defaultTheme: (option: ThemeGeneratorOptions) => ThemeOptions = ({
  border
}) => ({
  palette: {
    transition: { // Custom
      time: '0.5s',
    },
    scrollbar: { // Custom
      main: 'rgba(0,0,0,.3)',
      hover: 'rgba(0,0,0,.5)',
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
    hpBar: {
      main: '#ffff00',
      dark: '#ff7100',
    },
    border,
    logs: logColors,
    achievements,
    topbar: {
      background: '#111317',
      backgroundLight: '#1d2028',
      divider: '#3b4151',
      color: '#B7B9C6',
      colorLight: '#FFF',
      colorDark: '#6C7188',
      contrast: '#fe7d00',
      contrastLight: '#feb500',
      contrastShadow: '#bd3d00',
    },
  },
  typography,
  components: {
    MuiPaper: {
      defaultProps: {
        variant: 'mybrute',
      },
      variants: [
        {
          props: { variant: 'mybrute' },
          style: {
            boxShadow: `0 0 0 1px ${border.inner},
            0 0 1px 4.5px ${border.main},
            0 0 0 6px ${border.outer},
            3px 3px 0 6px ${border.shadow}`,
            bgcolor: 'background.paper',
            borderRadius: '5px',
            padding: 16,
            margin: 16,
            border: 'none',
          }
        }
      ]
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'mybrute' },
          style: {
            border: `2px solid ${border.outer}`,
            bgcolor: 'background.paperLight',
            borderRadius: '4px',
            boxShadow: `2px 2px 1px 1px ${border.shadow}`,
            transition: '.13s ease-in-out',
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 8,
            paddingRight: 8,
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
          }
        }
      ],
    },
    MuiTooltip: {
      defaultProps: {
        followCursor: true,
        placement: 'top' as const,
        enterTouchDelay: 100,
      },
      styleOverrides: {
        tooltip: ({ theme }) => theme.unstable_sx({
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
        root: ({ theme }) => theme.unstable_sx({
          boxShadow: 1,
        })
      }
    },
    MuiMenu: {
      defaultProps: {
        slotProps: {
          paper: {
            variant: 'elevation',
          }
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => theme.unstable_sx({
          '&.Mui-selected': {
            bgcolor: 'background.paperDark'
          }
        })
      }
    },
  },
});
