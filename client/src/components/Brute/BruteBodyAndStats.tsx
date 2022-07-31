import { Brute } from '@backend/types';
import { Box, BoxProps, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import CellStats from '../Cell/CellStats';
import Text from '../Text';
import BruteComponent from './Body/BruteComponent';
import BruteHP from './BruteHP';

interface BruteBodyAndStatsProps extends BoxProps {
  brute: Brute;
}

const BruteBodyAndStats = ({
  brute,
  ...rest
}: BruteBodyAndStatsProps) => {
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="row" {...rest}>
      {/* BRUTE */}
      <BruteComponent
        id={brute.id}
        gender={brute.data.gender}
        bodyParts={brute.data.body}
        colors={brute.data.colors}
        inverted
        sx={{ height: 160 }}
      />
      <Stack spacing={1} flexGrow="1">
        {/* HP */}
        <Box>
          <BruteHP hp={brute.data.stats.hp} />
          <Text bold sx={{ display: 'inline-block', ml: 1 }}>{t('healthPoints')}</Text>
        </Box>
        {/* STRENGTH */}
        <CellStats stats={brute.data.stats} stat="strength" />
        {/* AGILITY */}
        <CellStats stats={brute.data.stats} stat="agility" />
        {/* SPEED */}
        <CellStats stats={brute.data.stats} stat="speed" />
      </Stack>
    </Box>
  );
};

export default BruteBodyAndStats;