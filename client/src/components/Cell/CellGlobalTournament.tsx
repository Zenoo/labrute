import { FullTournamentStep, GLOBAL_TOURNAMENT_START_HOUR, hexToRgba } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { Box, Paper, PaperProps, Tooltip, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrute } from '../../hooks/useBrute';
import useStateAsync from '../../hooks/useStateAsync';
import Server from '../../utils/Server';
import BrutePortrait from '../Brute/Body/BrutePortait';
import Link from '../Link';
import Text from '../Text';

const CellGlobalTournament = ({
  sx,
  ...rest
}: PaperProps) => {
  const { t } = useTranslation();
  const { brute } = useBrute();
  const theme = useTheme();

  const now = useMemo(() => moment.utc(), []);

  const props = useMemo(() => ({ name: brute?.name || '', date: now.format('YYYY-MM-DD') }), [brute, now]);
  const { data } = useStateAsync(null, Server.Tournament.getGlobal, props);

  const lastOwnRound = useMemo(
    () => (data?.tournament.steps
      ? data.tournament.steps[data.tournament.steps.length - 1]
      : null),
    [data],
  );

  // Last fights renderer
  const renderFight = (step: FullTournamentStep, finals = false) => (
    <Link
      to={`/${step.fight.brute1.name}/fight/${step.fightId}`}
      key={step.id}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paperDark',
        border: '1px solid',
        borderColor: theme.palette.border.shadow,
        borderRadius: 1,
        m: 1,
      }}
    >
      <Tooltip title={step.fight.brute1.name}>
        <Box sx={{ position: 'relative', display: 'inline-block', ml: -0.5 }}>
          <BrutePortrait
            inverted
            brute={step.fight.brute1}
            sx={{
              width: finals ? 60 : 40,
              verticalAlign: 'middle',
            }}
          />
          {step.fight.winner === step.fight.brute2.name && (
            <Close
              color="error"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 1,
                height: 1,
              }}
            />
          )}
        </Box>
      </Tooltip>
      <Box
        component="img"
        src="/images/tournament/vs.svg"
        sx={{
          width: finals ? 30 : 20,
        }}
      />
      <Tooltip title={step.fight.brute2.name}>
        <Box sx={{ position: 'relative', display: 'inline-block', mr: -0.5 }}>
          <BrutePortrait
            brute={step.fight.brute2}
            sx={{
              width: finals ? 60 : 40,
              verticalAlign: 'middle',
            }}
          />
          {step.fight.winner === step.fight.brute1.name && (
            <Close
              color="error"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: 1,
                height: 1,
              }}
            />
          )}
        </Box>
      </Tooltip>
    </Link>
  );

  return brute && data && (
    <Paper
      sx={{
        bgcolor: 'background.paperDark',
        textAlign: 'center',
        p: 1,
        borderRadius: 0,
        ...sx
      }}
      {...rest}
    >
      <Text bold h6>{t('globalTournament')}</Text>
      <Text>{now.format('DD MMMM YYYY')}</Text>
      <Box sx={{
        mt: 1,
        bgcolor: 'background.paperLight',
        border: '1px solid',
        borderColor: theme.palette.border.shadow,
        textAlign: 'left',
      }}
      >
        {/* Rounds */}
        {Array.from({ length: data.rounds }).map((_, i) => {
          const step = data.tournament.steps.find((s) => s.step === i + 1);

          // Free bye
          if (!step) {
            // Check if brute lost a fight before
            const lost = data.tournament.steps
              .some((s) => s.step < i + 1 && s.fight.winner !== brute.name);

            if (lost) {
              return null;
            }

            // Check if round hour is passed
            const roundHour = GLOBAL_TOURNAMENT_START_HOUR + i;

            if (now.hour() < roundHour) {
              return null;
            }

            return (
              <Box sx={{
                display: 'flex',
                px: 0.5,
                py: 0.25,
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.border.shadow,
                '&:last-child': {
                  borderBottom: 'none',
                }
              }}
              >
                <Text bold color="text.disabled" sx={{ width: 30 }}>{i + 1 + 10}h</Text>
                <Text bold color="text.disabled">{t('automaticallyQualified')}</Text>
              </Box>
            );
          }

          const won = step.fight.winner === brute.name;
          const opponent = step.fight.winner === step.fight.brute1.name
            ? step.fight.brute2.name
            : step.fight.brute1.name;

          // Normal fight
          return (
            <Link
              to={`/${brute.name}/fight/${step.fightId}`}
              sx={{
                display: 'flex',
                px: 0.5,
                py: 0.25,
                bgcolor: won
                  ? hexToRgba(theme.palette.success.light, 0.2)
                  : hexToRgba(theme.palette.error.light, 0.2),
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.border.shadow,
                '&:last-child': {
                  borderBottom: 'none',
                }
              }}
              key={step.id}
            >
              <Text
                bold
                color={won ? 'success.main' : 'error'}
                sx={{ width: 30 }}
              >
                {step.step + 10}h
              </Text>
              <Text
                bold
                color={won ? 'success.main' : 'error'}
              >
                {won
                  ? t('log.win', { value: opponent })
                  : t('log.lose', { value: opponent })}
              </Text>
            </Link>
          );
        })}
        {/* Lost marker */}
        {lastOwnRound && lastOwnRound.fight.winner !== brute.name && (
          <Box sx={{
            display: 'flex',
            px: 0.5,
            py: 0.25,
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.border.shadow,
            '&:last-child': {
              borderBottom: 'none',
            }
          }}
          >
            <Text bold color="text.disabled">
              {t('eleminatedBy', {
                value: lastOwnRound.fight.winner === lastOwnRound.fight.brute1.name
                  ? lastOwnRound.fight.brute2.name
                  : lastOwnRound.fight.brute1.name
              })}
            </Text>
          </Box>
        )}
        {/* Last rounds if not won */}
        {lastOwnRound && lastOwnRound.fight.winner !== brute.name && (
          <>
            {/* Quarter-final */}
            {data.lastRounds.length > 0 && (
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                px: 0.5,
                py: 0.25,
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.border.shadow,
                '&:last-child': {
                  borderBottom: 'none',
                }
              }}
              >
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].step + 10}h {t('quarterFinals')}</Text>
                {data.lastRounds
                  .filter((step) => step.step === data.lastRounds[0].step)
                  .map((step) => renderFight(step))}
              </Box>
            )}
            {/* Semi-final */}
            {data.lastRounds.length > 4 && (
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                px: 0.5,
                py: 0.25,
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.border.shadow,
                '&:last-child': {
                  borderBottom: 'none',
                }
              }}
              >
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].step + 10 + 1}h {t('semiFinals')}</Text>
                {data.lastRounds
                  .filter((step) => step.step === data.lastRounds[0].step + 1)
                  .map((step) => renderFight(step))}
              </Box>
            )}
            {/* final */}
            {data.lastRounds.find((step) => step.step === data.lastRounds[0].step + 2) && (
              <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                px: 0.5,
                py: 0.25,
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.border.shadow,
                '&:last-child': {
                  borderBottom: 'none',
                }
              }}
              >
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[data.lastRounds.length - 1].step + 10}h {t('finals')}</Text>
                {renderFight(data.lastRounds[data.lastRounds.length - 1], true)}
              </Box>
            )}
          </>
        )}
        {/* Tournament done ? */}
        {!data.done && (
          <Box sx={{
            px: 0.5,
            py: 0.25,
            borderBottom: '1px solid',
            borderBottomColor: theme.palette.border.shadow,
            '&:last-child': {
              borderBottom: 'none',
            }
          }}
          >
            <Text bold color="text.disabled">{t('comeBackInOneHour')} ...</Text>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default CellGlobalTournament;
