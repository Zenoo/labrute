import { adjustColor } from '@labrute/core';
import { Box, BoxProps, useTheme } from '@mui/material';
import React from 'react';

interface FantasyButtonProps extends BoxProps {
  color?: 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
}

/**
 * FantasyButton component
 */
const FantasyButton = React.forwardRef<HTMLDivElement, FantasyButtonProps>(({
  children,
  color = 'primary',
  sx,
  ...rest
}: FantasyButtonProps, ref) => {
  const theme = useTheme();

  const COLOR = theme.palette[color].main;
  const colorLight = adjustColor(theme.palette[color].main, 10);
  const colorDark = adjustColor(theme.palette[color].main, -10);
  const colorDarker = adjustColor(theme.palette[color].main, -20);

  return (
    <Box textAlign="center">
      <Box
        ref={ref}
        sx={{
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          outline: 'none',
          verticalAlign: 'middle',
          textDecoration: 'none',
          typography: 'Verdana',
          fontSize: '15px',
          fontWeight: 600,
          color: theme.palette[color].contrastText,
          textTransform: 'uppercase',
          py: 1,
          px: 2,
          background: colorLight,
          border: `2px solid ${colorDarker}`,
          borderRadius: 2,
          transformStyle: 'preserve-3d',
          transition: 'background 100ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 100ms cubic-bezier(0, 0, 0.58, 1)',
          '&::before': {
            position: 'absolute',
            content: '""',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: colorDark,
            borderRadius: 'inherit',
            boxShadow: `0 0 0 2px ${colorDarker}`,
            transform: 'translate3d(0, 5px, -2px)',
            transition: 'transform 100ms cubic-bezier(0, 0, 0.58, 1), box-shadow 100ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 100ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 100ms cubic-bezier(0, 0, 0.58, 1)',
          },
          '&:hover': {
            background: COLOR,
            transform: 'translate(0, 3px)',
          },
          '&:hover::before': {
            boxShadow: `0 0 0 2px ${colorDarker}`,
            transform: 'translate3d(0, 2px, -2px)',
          },
          '&:active': {
            background: COLOR,
            transform: 'translate(0, 5px)',
          },
          '&:active::before': {
            boxShadow: `0 0 0 2px ${colorDarker}`,
            transform: 'translate3d(0, 0, -2px)',
          },
          ...sx
        }}
        {...rest}
      >
        {children}
      </Box>
    </Box>
  );
});

FantasyButton.displayName = 'FantasyButton';

export default FantasyButton;
