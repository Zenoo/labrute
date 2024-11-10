import { InventoryItemType, Log, LogType } from '@labrute/prisma';
import { Box, Paper, PaperProps, Tooltip, useTheme } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../Link';
import { LogImage } from '../LogImage';
import Text from '../Text';

export interface CellLogProps extends PaperProps {
  log: Log & {
    currentBrute: { name: string };
  }
}

const negativeLogs: LogType[] = [LogType.lose, LogType.tournament];
const combatLogs: LogType[] = [LogType.lose, LogType.win];
const childLogs: LogType[] = [LogType.child, LogType.childup];

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
        <LogImage log={log} />
      </Box>
      <Box
        sx={{
          p: 0.5,
          bgcolor: negativeLogs.includes(log.type) ? 'logs.error.main' : 'logs.success.main',
          flexGrow: 1,
        }}
      >
        {combatLogs.includes(log.type) || childLogs.includes(log.type)
          ? (
            <Tooltip title={combatLogs.includes(log.type) ? t('seeFight') : t('bruteCell', { name: log.brute })}>
              <Link
                to={combatLogs.includes(log.type) ? `/${log.currentBrute.name}/fight/${log.fightId || 0}` : `/${log.brute}/cell`}
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
                <Text bold color={log.type === LogType.lose ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
                  {combatLogs.includes(log.type)
                    ? t(`log.fight.${log.template ?? '0'}`, {
                      winner: log.type === LogType.lose ? log.brute : log.currentBrute.name,
                      loser: log.type === LogType.lose ? log.currentBrute.name : log.brute,
                    })
                    : t(`log.${log.type}`, { value: log.brute })}
                </Text>
              </Link>
            </Tooltip>
          ) : (
            <Text bold color={negativeLogs.includes(log.type) ? 'error.main' : 'success.main'} sx={{ lineHeight: '13px' }}>
              {log.type === LogType.lvl
                ? t('log.lvl', { brute: log.currentBrute.name, value: t(`lvl_${log.level}`) })
                : log.type === LogType.up
                  ? t('log.up', { brute: log.currentBrute.name, value: log.level ?? 0 })
                  : log.type === LogType.ascend
                    ? t(log.level && log.level > 1 ? 'log.ascends' : 'log.ascend', { brute: log.currentBrute.name, value: log.level ?? 0 })
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
              : log.type === LogType.bossDefeat
                ? t('log.itemAndGold', { count: 1, item: t(`inventory.item.${InventoryItemType.bossTicket}`), gold: log.gold })
                : t('log.gold', { gold: log.gold })}
          </Text>
        )}
      </Box>
    </Paper>
  );
};

export default CellLog;
