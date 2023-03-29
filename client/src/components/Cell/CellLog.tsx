import { BruteRankings } from '@labrute/core';
import { Log, LogType } from '@labrute/prisma';
import { BoxProps, Tooltip } from '@mui/material';
import moment from 'moment';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BoxBg from '../BoxBg';
import Link from '../Link';
import Text from '../Text';

export interface CellLogProps extends BoxProps {
  log: Log & {
    currentBrute: { name: string };
  }
}

const CellLog = ({ log, sx, ...rest }: CellLogProps) => {
  const { t } = useTranslation();

  return (
    <BoxBg
      src={`/images/log/log_${log.type === LogType.survive
        ? 'win'
        : log.type === LogType.lvl
          ? `lvl_${log.level || BruteRankings[0]}`
          : log.type === LogType.tournament
            ? 'lose'
            : log.type === LogType.tournamentXp ? 'childup' : log.type}.gif`}
      sx={{
        width: 250,
        height: 53,
        pl: '50px',
        pt: 0.5,
        pr: 1,
        pb: 1,
        ...sx,
      }}
      {...rest}
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
          <Text bold color={log.type === LogType.tournament ? 'error.main' : 'success.main'}>
            {log.type === LogType.lvl
              ? `${t('log.lvl')} ${t(`lvl_${log.level as 0|1|2|3|4|5|6|7|8|9|10|11}`)}.`
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
    </BoxBg>
  );
};

export default CellLog;
