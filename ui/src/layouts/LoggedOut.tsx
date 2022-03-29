import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';


const LoggedOut = () => {
  return (
    <Box sx={{}}>
      <Header />
      <Box sx={{}}>
            <Outlet />
      </Box>
    </Box>
  );
};

export default LoggedOut;
