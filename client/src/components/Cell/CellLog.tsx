import { BruteRankings } from '@labrute/core';
import { Log, LogType } from '@labrute/prisma';
import { Box, Paper, PaperProps, Tooltip } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../Link';
import Text from '../Text';

export interface CellLogProps extends PaperProps {
  log: Log & {
    currentBrute: { name: string };
  }
}

const CellLog = ({ log, sx, ...rest }: CellLogProps) => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        display: 'flex',
        width: 250,
        minHeight: 50,
        p: 0,
        m: 1,
        border: 2,
        borderColor: 'border.outer',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        ...sx,
      }}
      {...rest}
    >
      <Box
        sx={{
          width: 50,
          borderRight: 2,
          borderRightColor: 'border.outer',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: log.type === LogType.lose ? 'logs.error.light' : 'logs.success.light',
        }}
      >
        <Box
          component="img"
          src={`/images/${log.type === LogType.survive
            ? 'log/win'
            : log.type === LogType.lvl
              ? `rankings/lvl_${log.level || BruteRankings[0]}`
              : log.type === LogType.tournament
                ? 'log/lose'
                : log.type === LogType.tournamentXp ? 'log/childup' : `log/${log.type}`}.png`}
        />
      </Box>
      <Box
        sx={{
          p: 0.5,
          bgcolor: log.type === LogType.lose ? 'logs.error.main' : 'logs.success.main',
          flexGrow: 1,
        }}
      >
        {log.type === LogType.survive || log.type === LogType.win || log.type === LogType.lose
          ? (
            <Tooltip title={t('seeFight')}>
              <Link
                to={`/${log.currentBrute.name}/fight/${log.fightId || 0}`}
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: (theme) => (log.type === LogType.lose
                      ? theme.palette.error.main
                      : theme.palette.success.main
                    ),
                  },
                }}
              >
                <Text bold color={log.type === LogType.lose ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
                  {t(`log.${log.type}`, { value: log.brute })}
                </Text>
              </Link>
            </Tooltip>
          )
          : (
            <Text bold color={log.type === LogType.tournament ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
              {log.type === LogType.lvl
                ? `${t('log.lvl')} ${t(`lvl_${log.level as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}`)}.`
                : log.type === LogType.tournament
                  ? t('log.tournament', { date: moment.utc(log.date).format('DD/MM/YY') })
                  : t(`log.${log.type}`, { value: log.brute })}
            </Text>
          )}
        {!!log.xp && (
          <Text
            color={log.type === 'lose' ? 'error.main' : 'success.main'}
            sx={{
              fontSize: 10,
            }}
          >
            {t(log.xp === 1 ? 'log.xp' : 'log.xps', { xp: log.xp })}
          </Text>
        )}
      </Box>
    </Paper>
  );
};

export default CellLog;
