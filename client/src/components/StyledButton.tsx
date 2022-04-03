import { Box, BoxProps } from '@mui/material';
import React, { useCallback } from 'react';

interface Props extends BoxProps {
  image?: string;
  imageHover?: string;
  swapImage?: boolean;
}

/**
 * StyledButton component
 */
const StyledButton = React.forwardRef<HTMLDivElement, Props>(({
  children,
  image = '/images/button.svg',
  imageHover = '/images/button-hover.svg',
  swapImage = true,
  sx,
  ...rest
}: Props, ref) => {
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
        position: 'relative',
        textAlign: 'center',
        width: 207,
        height: 58,
        cursor: 'pointer',
        ...sx
      }}
      {...rest}
    >
      <Box
        component="img"
        src={swapImage ? hover ? imageHover : image : image}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: `drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.2)) ${hover ? 'contrast(90%)' : ''}`,
        }}
      />
      <Box sx={{
        position: 'relative',
        top: '50%',
        transform: hover ? 'translateY(calc(-50% - 2px))' : 'translateY(-50%)',
        zIndex: 2,
        typography: 'handwritten',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'secondary.main'
      }}
      >
        {children}
      </Box>
    </Box>
  );
});

StyledButton.displayName = 'StyledButton';

export default StyledButton;
