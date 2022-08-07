import { Box, BoxProps } from '@mui/material';
import React, { useCallback } from 'react';

export interface StyledButtonProps extends Omit<BoxProps, 'translate'> {
  image?: string;
  imageHover?: string;
  swapImage?: boolean;
  shadow?: boolean;
  contrast?: boolean;
  shift?: string;
}

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
  sx,
  ...rest
}: StyledButtonProps, ref) => {
  // Controlled hover state
  const [hover, setHover] = React.useState(false);

  const handleMouseEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setHover(false);
  }, []);
  return (
    <Box
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: 207,
        height: 58,
        pt: hover ? 0 : shift,
        pb: shift,
        cursor: 'pointer',
        backgroundImage: `url('${swapImage ? hover ? imageHover : image : image}')`,
        backgroundRepeat: 'no-repeat',
        filter: `${shadow ? 'drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.2))' : ''} ${contrast && hover ? 'contrast(90%)' : ''}`,
        fontVariant: 'small-caps',
        fontWeight: 'bold',
        color: 'secondary.main',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
});

StyledButton.displayName = 'StyledButton';

export default StyledButton;
