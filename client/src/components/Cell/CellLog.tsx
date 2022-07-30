import { Log } from '@backend/types';
import { BoxProps, Link, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import BoxWithBackground from '../BoxWithBackground';
import Text from '../Text';

export interface CellLogProps extends BoxProps {
  log: Log;
}

const CellLog = ({ log, sx, ...rest }: CellLogProps) => {
  const { t } = useTranslation();

  return (
    <BoxWithBackground
      url={`/images/log/log_${log.type === 'survive'
        ? 'win'
        : log.type === 'lvl'
          ? `lvl_${log.level}`
          : log.type}.gif`}
      alt={t('background')}
      sx={{
        width: 200,
        height: 53,
        pl: '50px',
        pt: 0.5,
        ...sx,
      }}
      {...rest}
    >
      {log.type === 'survive' || log.type === 'win' || log.type === 'lose'
        ? (
          <Tooltip title={t('seeFight')}>
            <Link
              href=""
              sx={{
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline',
                  textDecorationColor: (theme) => (log.type === 'lose'
                    ? theme.palette.error.main
                    : theme.palette.success.main
                  ),
                },
              }}
            >
              <Text bold color={log.type === 'lose' ? 'error.main' : 'success.main'}>
                {t(`log.${log.type}`, { value: log.brute })}
              </Text>
            </Link>
          </Tooltip>
        )
        : (
          <Text bold color="success.main">
            {log.type === 'lvl'
              ? `${t('log.lvl')} ${t(`lvl_${log.level || 10}`)}.`
              : t(`log.${log.type}`, { value: log.brute })}
          </Text>
        )}
      {log.xp && (
        <Text
          color={log.type === 'lose' ? 'error.main' : 'success.main'}
          sx={{
            fontSize: 10,
            mt: '-5px',
          }}
        >
          {t(log.xp === 1 ? 'log.xp' : 'log.xps', { xp: log.xp })}
        </Text>
      )}
    </BoxWithBackground>
  );
};

export default CellLog;
