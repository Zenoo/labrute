import { adjustColor } from '@labrute/core';
import { Box, BoxProps, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';
import Loader from './Loader';

interface FantasyButtonProps extends BoxProps {
  color: 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';
  disabled?: boolean;
  to?: string;
  size?: 'normal' | 'large';
  loading?: boolean;
}

/**
 * FantasyButton component
 */

const FantasyButton = React.forwardRef<HTMLDivElement, FantasyButtonProps>(({
  children,
  color = 'primary',
  disabled,
  sx,
  to,
  size = 'normal',
  loading = false,
  ...rest
}: FantasyButtonProps, ref) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const COLOR = theme.palette[color].main;
  const colorDark = adjustColor(COLOR, -30);
  const colorDarker = adjustColor(COLOR, -60);

  const loaderSize = size === 'large' ? 20 : 16;
  const isButtonDisabled = disabled || loading;

  const handleClick = () => {
    if (!isButtonDisabled && to) {
      navigate(to);
    }
  };

  return (
    <Box
      component="button"
      ref={ref}
      onClick={handleClick}
      sx={{
        display: 'block',
        mx: 'auto',
        mt: 2,
        position: 'relative',
        top: 0,
        borderRadius: 1,
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderTopColor: colorDarker,
        backgroundColor: COLOR,
        color: theme.palette[color].contrastText,
        py: size === 'normal' ? 0.5 : 1,
        px: size === 'normal' ? 1 : 2,
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        textTransform: 'uppercase',
        typography: 'LaBrute',
        fontSize: '1rem',
        boxShadow: '2px 3px rgba(0, 0, 0, 0.3)',
        transition: 'box-shadow 0.1s, top 0.1s, perspective 0.1s',
        perspective: 20,
        transformStyle: 'preserve-3d',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -8,
          left: '2.5%',
          width: 0.95,
          height: 8,
          backgroundColor: colorDark,
          transform: 'rotateX(20deg) translateZ(-1px)',
          zIndex: -1,
          transition: 'height 0.1s, top 0.1s',
        },
        '&:hover': {
          top: -3,
          boxShadow: '1px 1px rgba(0, 0, 0, 0.3)',
          perspective: 10,
          '&::before': {
            height: 6,
            top: -6,
          },
        },
        ...sx
      }}
      {...rest}
    >
      {loading && (
        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Loader size={loaderSize} color="inherit" />
        </Box>
      )}
      <Box sx={{ visibility: loading ? 'hidden' : 'initial', }}>
        {children}
      </Box>
    </Box>
  );
});

FantasyButton.displayName = 'FantasyButton';

export default FantasyButton;
