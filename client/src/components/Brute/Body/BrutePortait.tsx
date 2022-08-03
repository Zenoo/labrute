import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import Head from './Head/Head.js';
import LongHair from './Head/LongHair.js';

interface BrutePortraitProps extends BoxProps {
  brute: Brute;
  inverted?: boolean;
  shadow?: boolean
}

const BrutePortrait = ({
  brute,
  inverted,
  shadow = true,
  sx,
  ...rest
}: BrutePortraitProps) => {
  const props = {
    id: brute.name,
    gender: brute.data.gender,
    colors: brute.data.colors,
  };

  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 167 110"
      sx={{
        transform: inverted ? 'scale(-1, 1)' : 'scale(1, 1)',
        filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.3))',
        ...sx,
      }}
      {...rest}
    >
      {shadow && (
        <use xmlns="http://www.w3.org/2000/svg" height="80.0" transform="matrix(1.2543, 0.0, 0.0, 0.5937, 25, 165)" width="80.0" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#${brute.name}-shadowSprite`} />
      )}
      <g transform="matrix(1, 0, 0, 1, 40, 7)">
        <LongHair {...props} type={brute.data.body.longHair} />
        <Head {...props} type={brute.data.body.head} />
      </g>
    </Box>
  );
};

export default BrutePortrait;
