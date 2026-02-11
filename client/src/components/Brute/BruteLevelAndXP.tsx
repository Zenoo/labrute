import { getXPNeeded } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, BoxProps, Tooltip } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextProps } from '../Text';
import { useNavigate } from 'react-router-dom';

interface BruteLevelAndXPProps extends BoxProps {
  brute: Pick<Brute, 'level' | 'xp' | 'eventId' | 'name'>;
  textProps?: Omit<TextProps, 'children'>;
}

const BruteLevelAndXP = ({
  brute,
  textProps = {},
  ...rest
}: BruteLevelAndXPProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const xpNeededForNextLevel = useMemo(() => getXPNeeded(brute.level + 1), [brute.level]);
  const limitedXP = useMemo(() => Math.min(
    brute.xp,
    xpNeededForNextLevel,
  ), [brute.xp, xpNeededForNextLevel]);

  const goToEvent = () => {
    navigate(`/${brute.name}/event/${brute.eventId}`);
  };

  return (
    <Box {...rest}>
      <Text bold h3 smallCaps color="secondary" {...textProps}>
        {brute.eventId && (
          <Tooltip title={t('eventBrute')}>
            <Box
              component="img"
              src="/images/event.webp"
              sx={{ width: 18, mr: 1, cursor: 'pointer' }}
              onClick={goToEvent}
            />
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
