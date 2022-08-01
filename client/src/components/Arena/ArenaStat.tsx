import { Box, BoxProps, useTheme } from '@mui/material';
import React from 'react';
import Text from '../Text.js';

interface ArenaStatProps extends BoxProps {
  name: string;
  value: number;
}

const ArenaStat = ({
  name,
  value,
}: ArenaStatProps) => {
  const theme = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 14,
    }}
    >
      <Text bold color="secondary" sx={{ fontSize: 11, mr: 0.5 }}>
        {name}
      </Text>
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
    </Box>
  );
};

export default ArenaStat;
