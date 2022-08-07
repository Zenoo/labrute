import { Brute } from '@eternaltwin/labrute-core/types';
import { Box, BoxProps, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Text.js';

const excesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface CellStatsProps extends BoxProps {
  stats: Brute['data']['stats'];
  stat: 'strength' | 'agility' | 'speed';
}

const CellStats = ({
  stats,
  stat,
}: CellStatsProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text bold>{t(stat)} :</Text>
      <Tooltip title={`${t(stat)} : ${stats[stat].value}`}>
        <Box>
          {excesses.map((excess) => (
            <Box
              key={excess}
              sx={{
                height: 20,
                width: 12,
                mr: 0.25,
                display: 'inline-block',
                border: '2px solid',
                borderColor: 'secondary.main',
                bgcolor: (theme) => {
                  const statDividedByTen = Math.floor(stats[stat].value / 10);
                  const { palette: { heat: {
                    [statDividedByTen]: baseColor,
                    [statDividedByTen + 1]: excessColor
                  } } } = theme;

                  return stats[stat].value % 10 >= excess
                    ? excessColor
                    : baseColor;
                },
              }}
            />
          ))}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default CellStats;
