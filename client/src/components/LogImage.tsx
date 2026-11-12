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

  const getLogImage = () => {
    if ((log.type === LogType.bossDefeat || log.type === LogType.bossFight)) {
      return 'inventory/bossTicket';
    }

    if (log.type === LogType.lvl) {
      return `rankings/lvl_${log.level ?? BruteRankings[0]}`;
    }

    if (log.type === LogType.tournament) {
      return 'log/lose';
    }

    if (log.type === LogType.tournamentXp) {
      return 'log/childup';
    }

    return `log/${log.type}`;
  };

  return (
    <Box
      component="img"
      src={`/images/${getLogImage()}.webp`}
      sx={{
        filter: `drop-shadow(3px 3px ${negativeLogs.includes(log.type) ? theme.palette.error.main : theme.palette.success.main})`,
        maxWidth: 40,
        ...sx,
      }}
      {...rest}
    />
  );
};
