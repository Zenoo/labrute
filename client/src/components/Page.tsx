import { Box, BoxProps, GlobalStyles, useTheme } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props extends BoxProps {
  title: string,
  children: React.ReactNode;
}

const Page = ({
  title,
  children,
  ...rest
}: Props) => {
  const theme = useTheme();
  return (
    <Box {...rest}>
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
          height: '100%',
          background: `linear-gradient(180deg, ${theme.palette.background.light} 0%, ${theme.palette.background.default} 160px)`,
        }
      }}
      />
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Box>
  );
};

export default Page;
