import { Box, BoxProps, Tooltip, useTheme } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { FightStat } from '@labrute/core';
import StatColor from '../../utils/StatColor';

interface ArenaStatProps extends BoxProps {
  stat: FightStat;
  value: number;
  hideSkillText?: boolean;
}

const ArenaStat = ({
  stat,
  value,
  hideSkillText,
}: ArenaStatProps) => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      height: 14,
    }}
    >
      <Box component="img" src={`/images/${stat}.gif`} sx={{ mr: 0.5, width: 11 }} alt={stat} />
      <Tooltip title={value}>
        <Box sx={{
          height: 8,
          border: 1,
          borderColor: 'secondary.main',
          width: 58,
          bgcolor: theme.palette.heat[
            Math.floor(value / 10)
          ]
        }}
        >
          <Box sx={{
            height: 8,
            border: 1,
            borderColor: 'secondary.main',
            mt: '-1px',
            ml: '-1px',
            bgcolor: theme.palette.heat[
              Math.floor(value / 10) + 1
            ],
            width: (value % 10) / 10
          }}
          />
        </Box>
      </Tooltip>
      {!hideSkillText && (
        <Text bold color="secondary" sx={{ fontSize: 11, ml: 0.5, color: StatColor[stat] }}>
          {value}
        </Text>
      )}
    </Box>
  );
};

export default ArenaStat;
