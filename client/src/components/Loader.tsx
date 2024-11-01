import { Box, CircularProgress, CircularProgressProps } from '@mui/material';
import React from 'react';

interface LoaderProps extends CircularProgressProps {
  height?: number | string;
}

const Loader = ({
  height,
  ...props
}: LoaderProps) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: height ?? 1,
  }}
  >
    <CircularProgress {...props} />
  </Box>
);

export default Loader;
