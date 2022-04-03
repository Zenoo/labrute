import { Box, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

/**
 * StyledButton component
 */
const StyledInput = ({ sx, ...rest }: TextFieldProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        textAlign: 'center',
        width: 204,
        ...sx
      }}
    >
      <Box
        component="img"
        src="/images/creation/input.svg"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.2))',
        }}
      />
      <TextField
        fullWidth
        sx={{
          px: 1,
          position: 'relative',
          zIndex: 2,
          ...sx
        }}
        {...rest}
      />
    </Box>
  );
};

export default StyledInput;
