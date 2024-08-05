import { Box, BoxProps } from '@mui/material';
import React from 'react';

type AchievementHeaderProps = BoxProps;

export const AchievementHeader = ({
  sx,
  ...rest
}: AchievementHeaderProps) => (
  <Box
    component="img"
    src="/images/achievements/header.webp"
    sx={{
      display: 'block',
      m: '0 auto',
      mt: -3.5,
      mb: 1,
      ...sx,
    }}
    {...rest}
  />
);
