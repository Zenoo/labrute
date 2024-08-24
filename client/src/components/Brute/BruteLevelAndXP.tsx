import { getXPNeeded } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, BoxProps, Tooltip } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextProps } from '../Text';

interface BruteLevelAndXPProps extends BoxProps {
  brute: Pick<Brute, 'level' | 'xp' | 'eventId'>;
  textProps?: Omit<TextProps, 'children'>;
}

const BruteLevelAndXP = ({
  brute,
  textProps = {},
  ...rest
}: BruteLevelAndXPProps) => {
  const { t } = useTranslation();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.level + 1), [brute.level]);
  const limitedXP = useMemo(() => Math.min(
    brute.xp,
    xpNeededForNextLevel,
  ), [brute.xp, xpNeededForNextLevel]);

  return (
    <Box {...rest}>
      <Text bold h3 smallCaps color="secondary" {...textProps}>
        {brute.eventId && (
          <Tooltip title={t('eventBrute')}>
            <Box component="img" src="/images/event.webp" sx={{ width: 12, mr: 1 }} />
          </Tooltip>
        )}
        {t('level')} {brute.level}
      </Text>
      {/* LEVEL BAR */}
      <Tooltip title={`${limitedXP} / ${xpNeededForNextLevel}`}>
        <Box sx={{ bgcolor: 'divider', p: '2px', width: 120 }}>
          <Box sx={{
            bgcolor: 'level',
            height: 3,
            width: Math.max(0, limitedXP) / xpNeededForNextLevel,
          }}
          />
        </Box>
      </Tooltip>
    </Box>
  );
};

export default BruteLevelAndXP;
