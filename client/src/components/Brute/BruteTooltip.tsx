import { Brute } from '@labrute/prisma';
import { Box, Tooltip, TooltipProps } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ArenaStat from '../Arena/ArenaStat';
import Text from '../Text';
import BruteHP from './BruteHP';

interface BruteTooltipProps extends Omit<TooltipProps, 'title'> {
  brute: Brute;
}

const BruteTooltip = ({ brute, children, ...rest }: BruteTooltipProps) => {
  const { t } = useTranslation();

  return (
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
          <Text bold color="secondary">{brute.name}</Text>
          <Text bold smallCaps color="text.primary">
            {t('level')}
            <Text component="span" bold color="secondary"> {brute.level}</Text>
          </Text>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <BruteHP hp={brute.hp} />
            <Box flexGrow={1} sx={{ ml: 0.5 }}>
              <ArenaStat name={t('Str')} value={brute.strengthValue} />
              <ArenaStat name={t('Agi')} value={brute.agilityValue} />
              <ArenaStat name={t('Spe')} value={brute.speedValue} />
            </Box>
          </Box>
        </>
      )}
    >
      {children}
    </Tooltip>
  );
};

export default BruteTooltip;
