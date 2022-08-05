import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface BoxBgProps extends BoxProps {
  src: string;
}

const BoxBg = ({
  src,
  children,
  sx,
  ...rest
}: BoxBgProps) => {
  return (
    <Box
      sx={{
        backgroundImage: `url("${src}")`,
        backgroundRepeat: 'no-repeat',
        ...sx
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default BoxBg;
