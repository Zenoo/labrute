import { BruteRankings } from '@labrute/core';
import { Log, LogType } from '@labrute/prisma';
import { Box, Paper, PaperProps, Tooltip, useTheme } from '@mui/material';
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

const negativeLogs: LogType[] = [LogType.lose, LogType.tournament];

const CellLog = ({ log, sx, ...rest }: CellLogProps) => {
  const { t } = useTranslation();
  const theme = useTheme();

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
          bgcolor: negativeLogs.includes(log.type) ? 'logs.error.light' : 'logs.success.light',
        }}
      >
        <Box
          component="img"
          src={`/images/${log.type === LogType.bossDefeat
            ? 'rankings/lvl_0'
            : log.type === LogType.survive
              ? 'log/win'
              : log.type === LogType.lvl
                ? `rankings/lvl_${log.level || BruteRankings[0]}`
                : log.type === LogType.tournament
                  ? 'log/lose'
                  : log.type === LogType.tournamentXp ? 'log/childup' : `log/${log.type}`}.webp`}
          sx={{
            filter: `drop-shadow(3px 3px ${negativeLogs.includes(log.type) ? theme.palette.error.main : theme.palette.success.main})`,
          }}
        />
      </Box>
      <Box
        sx={{
          p: 0.5,
          bgcolor: negativeLogs.includes(log.type) ? 'logs.error.main' : 'logs.success.main',
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
                    textDecorationColor: log.type === LogType.lose
                      ? theme.palette.error.main
                      : theme.palette.success.main
                    ,
                  },
                }}
              >
                <Text bold color={negativeLogs.includes(log.type) ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
                  {t(`log.${log.type}`, { value: log.brute })}
                </Text>
              </Link>
            </Tooltip>
          )
          : (
            <Text bold color={negativeLogs.includes(log.type) ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
              {log.type === LogType.lvl
                ? `${t('log.lvl')} ${t(`lvl_${log.level as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11}`)}.`
                : log.type === LogType.tournament
                  ? t('log.tournament', { date: moment.utc(log.date).format('DD/MM/YY') })
                  : t(`log.${log.type}`, { value: log.brute })}
            </Text>
          )}
        {(!!log.xp || !!log.gold) && (
          <Text
            color={negativeLogs.includes(log.type) ? 'error.main' : 'success.main'}
            sx={{
              fontSize: 10,
            }}
          >
            {log.xp
              ? log.gold
                ? t('log.xpAndGold', { xp: log.xp, gold: log.gold })
                : t(log.xp === 1 ? 'log.xp' : 'log.xps', { xp: log.xp })
              : t('log.gold', { gold: log.gold })}
          </Text>
        )}
      </Box>
    </Paper>
  );
};

export default CellLog;
