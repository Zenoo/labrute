import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { DojoRankIcon } from './DojoRankIcon';
import { DOJO_UNLOCKS } from '@labrute/core';

type BruteNameProps = Omit<BoxProps, 'src'> & {
  brute: {
    name: string;
    pupilsCount?: number;
  }
}

export const BruteName = ({ brute, ...rest }: BruteNameProps) => {
  if (!brute.pupilsCount || brute.pupilsCount < DOJO_UNLOCKS[0]) {
    return brute.name;
  }

  return (
    <Box component="span" {...rest}>
      <DojoRankIcon pupilsCount={brute.pupilsCount} sx={{ mr: 0.5 }} />
      <Box component="span">{brute.name}</Box>
    </Box>
  );
};
