import { Box, BoxProps, Divider, Stack, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import StatColor from '../../utils/StatColor';
import CellStats from '../Cell/CellStats';
import Text from '../Text';
import BruteRender from './Body/BruteRender';
import BruteHP from './BruteHP';
import { Brute } from '@labrute/prisma';
import { getFinalEndurance, getFinalHP, readableHPFormula } from '@labrute/core';
import { useAuth } from '../../hooks/useAuth';

interface BruteBodyAndStatsProps extends BoxProps {
  brute: Brute;
  isMd?: boolean;
}

const BruteBodyAndStats = ({
  brute,
  isMd,
  ...rest
}: BruteBodyAndStatsProps) => {
  const { t } = useTranslation();
  const { randomSkill } = useAuth();

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
        <Tooltip title={(
          <>
            <code>{readableHPFormula(t('level'), t('endurance'))}</code>
            <Divider />
            <code>{readableHPFormula(brute.level, getFinalEndurance(brute, randomSkill))}</code>
          </>
        )}
        >
          <Box>
            <BruteHP hp={getFinalHP(brute, randomSkill)} />
            <Text bold sx={{ display: 'inline-block', ml: 1, color: StatColor.endurance }}>{t('healthPoints')}</Text>
          </Box>
        </Tooltip>
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
