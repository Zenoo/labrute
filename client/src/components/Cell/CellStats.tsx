import { Box, BoxProps, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Text';

const excesses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface CellStatsProps extends BoxProps {
  value: number;
  stat: 'strength' | 'agility' | 'speed';
}

const CellStats = ({
  value,
  stat,
}: CellStatsProps) => {
  const { t } = useTranslation();

  return (
    <Box>
      <Text bold>{t(stat)} : {value}</Text>
      <Tooltip title={`${t(stat)} : ${value}`}>
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
                  const statDividedByTen = Math.floor(value / 10);
                  const { palette: { heat: {
                    [statDividedByTen]: baseColor,
                    [statDividedByTen + 1]: excessColor
                  } } } = theme;

                  return value % 10 >= excess
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
