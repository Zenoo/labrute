import { Box, GlobalStyles, useTheme } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  const theme = useTheme();

  return (
    <Box sx={{
      height: 1,
      m: '0 auto',
      width: 930,
      maxWidth: 1
    }}
    >
      <GlobalStyles styles={{
        html: {
          height: '100%'
        },
        body: {
          margin: 0,
          height: '100%',
          fontFamily: 'arial,sans-serif'
        },
        '#root': {
          minHeight: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.light} 0%, ${theme.palette.background.default} 160px)`,
        }
      }}
      />
      <Outlet />
    </Box>
  );
};

export default Main;
