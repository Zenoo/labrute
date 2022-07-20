import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Main = () => {
  return (
    <Box sx={{
      height: 1,
      m: '0 auto',
      width: 930,
      maxWidth: 1
    }}
    >
      <Header />
      <Box sx={{}}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Main;
