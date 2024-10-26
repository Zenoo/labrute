import { Box, BoxProps, Divider, Stack, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StatColor from '../../utils/StatColor';
import CellStats from '../Cell/CellStats';
import Text from '../Text';
import BruteRender from './Body/BruteRender';
import BruteHP from './BruteHP';
import { Brute } from '@labrute/prisma';
import { getFinalHP, getFinalStat, readableHPFormula } from '@labrute/core';
import { useAuth } from '../../hooks/useAuth';

interface BruteBodyAndStatsProps extends BoxProps {
  brute: Brute;
  isMd?: boolean;
  centered?: boolean;
}

const BruteBodyAndStats = ({
  brute,
  isMd,
  centered = false,
  ...rest
}: BruteBodyAndStatsProps) => {
  const { t } = useTranslation();
  const { modifiers } = useAuth();

  return (
    <Box
      position="relative"
      display="flex"
      flexDirection="row"
      justifyContent={isMd ? 'center' : 'space-between'}
      {...rest}
    >
      {/* BRUTE */}
      <Box flexGrow={centered ? 0 : 1} sx={{ width: centered ? 115 : 'fit-content' }}>
        <Box width={80} mx="auto">
          <BruteRender brute={brute} />
        </Box>
      </Box>
      <Stack spacing={1} sx={{ minWidth: 153 }}>
        {/* HP */}
        <Tooltip title={(
          <>
            <code>{readableHPFormula(t('level'), t('endurance'))}</code>
            <Divider />
            <code>{readableHPFormula(brute.level, getFinalStat(brute, 'endurance', modifiers))}</code>
          </>
        )}
        >
          <Box>
            <BruteHP hp={getFinalHP(brute, modifiers)} />
            <Text bold sx={{ display: 'inline-block', ml: 1, color: StatColor.endurance }}>{t('healthPoints')}</Text>
          </Box>
        </Tooltip>
        {/* STRENGTH */}
        <CellStats value={getFinalStat(brute, 'strength', modifiers)} stat="strength" />
        {/* AGILITY */}
        <CellStats value={getFinalStat(brute, 'agility', modifiers)} stat="agility" />
        {/* SPEED */}
        <CellStats value={getFinalStat(brute, 'speed', modifiers)} stat="speed" />
      </Stack>
    </Box>
  );
};

export default BruteBodyAndStats;
