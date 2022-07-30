import { Box, BoxProps, SxProps } from '@mui/material';
import React from 'react';

interface Props extends BoxProps {
  url: string;
  alt: string;
  imgSx?: SxProps;
}

const BoxWithBackground = ({
  url,
  alt,
  children,
  sx,
  imgSx,
  ...rest
}: Props) => {
  return (
    <Box sx={{ position: 'relative', ...sx }} {...rest}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          ...imgSx
        }}
        component="img"
        src={url}
        alt={alt}
      />
      <Box sx={{ zIndex: 2, position: 'relative' }}>
        {children}
      </Box>
    </Box>
  );
};

export default BoxWithBackground;
