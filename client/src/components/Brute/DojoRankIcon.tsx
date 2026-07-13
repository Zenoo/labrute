import React, { useMemo } from 'react';
import {
  Box, BoxProps, Tooltip
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getDojoRank } from '../../utils/dojo';

type DojoRankIconProps = Omit<BoxProps, 'src'> & {
  pupilsCount?: number;
}

export const DojoRankIcon = ({ pupilsCount, sx, ...rest }: DojoRankIconProps) => {
  const { t } = useTranslation();

  const dojoRank = useMemo(() => getDojoRank(pupilsCount), [pupilsCount]);

  if (!pupilsCount || dojoRank === null) {
    return null;
  }

  return (
    <Tooltip title={t('dojoRank', { rank: dojoRank })}>
      <Box component="img" src={`/images/dojo/${dojoRank}.png`} sx={{ width: 11, height: 11, ...sx }} {...rest} />
    </Tooltip>
  );
};
