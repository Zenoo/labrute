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
      justifyContent={isMd ? 'center' : undefined}
      {...rest}
    >
      {/* BRUTE */}
      <BruteRender
        brute={brute}
        scale={0.8}
        width={120}
        height={180}
      />
      <Stack spacing={1} flexGrow={isMd ? undefined : 1} sx={{ minWidth: 153 }}>
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
