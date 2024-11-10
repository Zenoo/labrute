import { Box, TextField, TextFieldProps, useTheme } from '@mui/material';
import React from 'react';

/**
 * StyledButton component
 */
const StyledInput = ({ sx, ...rest }: TextFieldProps) => {
  const { palette: { mode } } = useTheme();

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
        src={`/images${mode === 'dark' ? '/dark' : ''}/creation/input.svg`}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.2))',
          width: 204,
          height: 50
        }}
      />
      <TextField
        fullWidth
        sx={{
          px: 1,
          position: 'relative',
          zIndex: 2,
          color: 'secondary.main',
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
          },
          '& .MuiInputBase-input': {
            fontWeight: 'bold',
          },
          '& .MuiFormLabel-root': {
            textTransform: 'uppercase',
          },
          ...sx
        }}
        {...rest}
      />
    </Box>
  );
};

export default StyledInput;
