import { Box, BoxProps } from '@mui/material';
import React from 'react';
import head from '../assets/head.jpg';

const Header = (props: BoxProps) => {
  return (
    <Box {...props}>
      <img src={head} alt="LaBrute" />
    </Box>
  );
};

export default Header;
