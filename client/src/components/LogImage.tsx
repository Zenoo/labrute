import { BruteRankings } from '@labrute/core';
import { Log, LogType } from '@labrute/prisma';
import { Box, useTheme } from '@mui/material';
import { BoxProps } from '@mui/system';
import React from 'react';

type LogImageProps = BoxProps & {
  log: Log;
};

const negativeLogs: LogType[] = [LogType.lose, LogType.tournament, LogType.bossFight];

export const LogImage = ({
  log,
  sx,
  ...rest
}: LogImageProps) => {
  const theme = useTheme();

  return (
    <Box
      component="img"
      src={`/images/${(log.type === LogType.bossDefeat || log.type === LogType.bossFight)
        ? 'inventory/bossTicket'
        : log.type === LogType.lvl
          ? `rankings/lvl_${log.level ?? BruteRankings[0]}`
          : log.type === LogType.tournament
            ? 'log/lose'
            : log.type === LogType.tournamentXp ? 'log/childup' : `log/${log.type}`}.webp`}
      sx={{
        filter: `drop-shadow(3px 3px ${negativeLogs.includes(log.type) ? theme.palette.error.main : theme.palette.success.main})`,
        ...sx,
      }}
      {...rest}
    />
  );
};
