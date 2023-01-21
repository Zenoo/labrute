import { Brute, getXPNeeded } from '@labrute/core';
import { Box, BoxProps, Tooltip } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextProps } from '../Text';

interface BruteLevelAndXPProps extends BoxProps {
  brute: Brute;
  textProps?: Omit<TextProps, 'children'>;
}

const BruteLevelAndXP = ({
  brute,
  textProps = {},
  ...rest
}: BruteLevelAndXPProps) => {
  const { t } = useTranslation();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.data.level + 1), [brute.data.level]);
  const limitedXP = useMemo(() => Math.min(
    brute.data.xp,
    xpNeededForNextLevel,
  ), [brute.data.xp, xpNeededForNextLevel]);

  return (
    <Box {...rest}>
      <Text bold h3 smallCaps color="secondary" {...textProps}>{t('level')} {brute.data.level}</Text>
      {/* LEVEL BAR */}
      <Tooltip title={`${limitedXP} / ${xpNeededForNextLevel}`}>
        <Box sx={{ bgcolor: 'secondary.main', p: '2px', width: 120 }}>
          <Box sx={{
            bgcolor: 'level',
            height: 3,
            width: limitedXP / xpNeededForNextLevel
          }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default BruteLevelAndXP;
