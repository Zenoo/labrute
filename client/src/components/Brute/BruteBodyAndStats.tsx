import { BruteWithBodyColors } from '@labrute/core';
import { Box, BoxProps, Stack } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StatColor from '../../utils/StatColor';
import CellStats from '../Cell/CellStats';
import Text from '../Text';
import BruteRender from './Body/BruteRender';
import BruteHP from './BruteHP';

interface BruteBodyAndStatsProps extends BoxProps {
  brute: BruteWithBodyColors;
  isMd?: boolean;
}

const BruteBodyAndStats = ({
  brute,
  isMd,
  ...rest
}: BruteBodyAndStatsProps) => {
  const { t } = useTranslation();

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="row"
      justifyContent={isMd ? 'center' : 'space-between'}
      {...rest}
    >
      {/* BRUTE */}
      <Box flexGrow={1}>
        <Box width={80} mx="auto">
          <BruteRender brute={brute} />
        </Box>
      </Box>
      <Stack spacing={1} sx={{ minWidth: 153 }}>
        {/* HP */}
        <Box>
          <BruteHP hp={brute.hp} />
          <Text bold sx={{ display: 'inline-block', ml: 1, color: StatColor.endurance }}>{t('healthPoints')}</Text>
        </Box>
        {/* STRENGTH */}
        <CellStats value={brute.strengthValue} stat="strength" />
        {/* AGILITY */}
        <CellStats value={brute.agilityValue} stat="agility" />
        {/* SPEED */}
        <CellStats value={brute.speedValue} stat="speed" />
      </Stack>
    </Box>
  );
};

export default BruteBodyAndStats;
