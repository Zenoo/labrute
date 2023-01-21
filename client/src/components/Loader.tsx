import { Box, CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

const Loader = (props: CircularProgressProps) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1,
  }}
  >
    <CircularProgress {...props} />
  </Box>
);

export default Loader;
