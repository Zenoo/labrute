import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string,
  children: React.ReactNode;
}

const Page = ({
  title,
  children
}: Props) => {
  return (
    <Box sx={{}}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default Page;
