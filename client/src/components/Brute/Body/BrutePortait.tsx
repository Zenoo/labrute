import { BodyColors, BodyParts, Gender } from '@backend/types';
import { Box, BoxProps } from '@mui/material';
import React from 'react';
import Head from './Head/Head';
import LongHair from './Head/LongHair';

interface BrutePortraitProps extends Omit<BoxProps, 'id'> {
  id: number;
  gender: Gender;
  bodyParts: BodyParts;
  colors: BodyColors;
  inverted?: boolean;
  shadow?: boolean
}

const BrutePortrait = ({
  id,
  gender,
  bodyParts,
  colors,
  inverted,
  shadow = true,
  sx,
  ...rest
}: BrutePortraitProps) => {
  const props = {
    id,
    gender,
    colors,
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
        <use xmlns="http://www.w3.org/2000/svg" height="80.0" transform="matrix(1.2543, 0.0, 0.0, 0.5937, 25, 165)" width="80.0" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`#${id}-shadowSprite`} />
      )}
      <g transform="matrix(1, 0, 0, 1, 40, 7)">
        <LongHair {...props} type={bodyParts.longHair} />
        <Head {...props} type={bodyParts.head} />
      </g>
    </Box>
  );
};

export default BrutePortrait;
