import { Fighter } from '@labrute/core';
import { Brute } from '@labrute/prisma';
import { Box, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ArenaStat from '../Arena/ArenaStat';
import Text from '../Text';
import BruteHP from './BruteHP';

interface BruteTooltipProps extends Omit<TooltipProps, 'title'> {
  brute?: Brute;
  fighter?: Fighter;
}

const BruteTooltip = ({ brute, fighter, children, ...rest }: BruteTooltipProps) => {
  const { t } = useTranslation();

  const target = fighter?.level ? fighter : brute;

  return target ? (
    <Tooltip
      {...rest}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor: 'background.paperLight',
          },
        },
      }}
      title={(
        <>
          <Text bold color="secondary">{target.name}</Text>
          <Text bold smallCaps color="text.primary">
            {t('level')}
            <Text component="span" bold color="secondary"> {target.level}</Text>
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BruteHP hp={target.hp} />
            <Box flexGrow={1} sx={{ ml: 0.5 }}>
              <ArenaStat name={t('Str')} value={fighter?.strength || brute?.strengthValue || 0} />
              <ArenaStat name={t('Agi')} value={fighter?.agility || brute?.agilityValue || 0} />
              <ArenaStat name={t('Spe')} value={fighter?.speed || brute?.speedValue || 0} />
            </Box>
          </Box>
        </>
      )}
    >
      {children}
    </Tooltip>
  ) : null;
};

export default BruteTooltip;
