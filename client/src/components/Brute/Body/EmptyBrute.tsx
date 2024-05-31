import { Box, BoxProps, useTheme } from '@mui/material';
import React from 'react';

const EmptyBrute = ({ sx, ...props }: BoxProps) => {
  const { palette: { mode } } = useTheme();

  return (
    <Box
      component="img"
      src={`/images${mode === 'dark' ? '/dark' : ''}/creation/noCharacter.webp`}
      alt="Empty Brute"
      sx={{
        width: 65,
        height: 140,
        ...sx
      }}
      {...props}
    />
  );
};

export default EmptyBrute;
