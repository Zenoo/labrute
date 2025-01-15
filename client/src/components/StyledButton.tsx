import { Box, BoxProps, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import Loader from './Loader';

export interface StyledButtonProps extends Omit<BoxProps, 'translate'> {
  image?: string;
  imageHover?: string;
  swapImage?: boolean;
  shadow?: boolean;
  contrast?: boolean;
  shift?: string;
  shiftMargin?: boolean;
  shadowColor?: string;
  to?: string;
  disabled?: boolean;
  loading?: boolean;
}

export const StyledButtonWidth = 207;
export const StyledButtonHeight = 58;

/**
 * StyledButton component
 */
const StyledButton = React.forwardRef<HTMLDivElement, StyledButtonProps>(({
  children,
  image = '/images/button.svg',
  imageHover = '/images/button-hover.svg',
  swapImage = true,
  shadow = true,
  contrast = true,
  shift = '4px',
  shiftMargin = false,
  shadowColor = 'rgba(0, 0, 0, 0.2)',
  to,
  sx,
  disabled = false,
  loading = false,
  ...rest
}: StyledButtonProps, ref) => {
  const { palette: { mode } } = useTheme();
  const navigate = useNavigate();

  const themedImage = mode === 'dark' ? image.replace('/images/', '/images/dark/') : image;
  const themedImageHover = mode === 'dark' ? imageHover.replace('/images/', '/images/dark/') : imageHover;

  const isButtonDisabled = disabled || loading;

  // Controlled hover state
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);

  const handleClick = () => {
    if (to && !isButtonDisabled) {
      navigate(to);
    }
  };

  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: StyledButtonWidth,
        height: StyledButtonHeight,
        pt: hover ? 0 : shift,
        pb: shift,
        cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
        backgroundImage: `url('${swapImage ? hover ? themedImageHover : themedImage : themedImage}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        filter: `${shadow ? `drop-shadow(4px 4px 0px ${shadowColor})` : ''} ${contrast && hover ? 'contrast(90%)' : ''}`,
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        color: 'secondary.main',
        position: 'relative',
        ...sx,
        mb: (hover && shiftMargin) ? 1 : undefined,
      }}
      {...rest}
    >
      {loading && (
        <Box sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <Loader size={16} color="inherit" />
        </Box>
      )}
      <Box sx={{ visibility: loading ? 'hidden' : 'initial', }}>
        {children}
      </Box>
    </Box>
  );
});

StyledButton.displayName = 'StyledButton';

export default StyledButton;
