import { Fighter, FullTournamentStep, GLOBAL_TOURNAMENT_START_HOUR, TournamentsGetGlobalResponse } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { Box, Paper, PaperProps, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrute } from '../../hooks/useBrute';
import Server from '../../utils/Server';
import BrutePortrait from '../Brute/Body/BrutePortait';
import BruteTooltip from '../Brute/BruteTooltip';
import Link from '../Link';
import Text from '../Text';

interface CellGlobalTournamentProps extends PaperProps {
  date?: moment.Moment;
  name?: string;
}

const CellGlobalTournament = ({
  sx,
  date,
  name,
  ...rest
}: CellGlobalTournamentProps) => {
  const { t } = useTranslation();
  const { brute } = useBrute();
  const theme = useTheme();

  const now = useMemo(() => moment.utc(), []);
  const bruteName = useMemo(() => name || brute?.name || '', [brute, name]);

  const [data, setData] = useState<TournamentsGetGlobalResponse | null>(null);

  // Get data
  useEffect(() => {
    Server.Tournament.getGlobal({ name: bruteName, date: (date || now).format('YYYY-MM-DD') }).then(setData).catch(() => {
      setData(null);
    });
  }, [bruteName, date, now]);

  const lostRound = useMemo(
    () => (bruteName && data
      ? data.tournament.steps.find((step) => step.fight.winner !== bruteName)
      || data.lastRounds.find((step) => (step.fight.brute1.name === bruteName
        || step.fight.brute2.name === bruteName)
        && step.fight.winner !== bruteName)
      : null),
    [bruteName, data],
  );

  // Last fights renderer
  const renderFight = (step: FullTournamentStep, finals = false) => {
    if (!bruteName) return null;

    const bruteInFight = step.fight.brute1.name === bruteName
      || step.fight.brute2.name === bruteName;
    const won = bruteInFight && step.fight.winner === bruteName;

    const fighter1 = (step.fight.fighters as unknown as Fighter[])
      .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute1.name);
    const fighter2 = (step.fight.fighters as unknown as Fighter[])
      .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute2.name);

    return (
      <Link
        to={`/${step.fight.brute1.name}/fight/${step.fightId}`}
        key={step.id}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: bruteInFight
            ? won
              ? 'logs.success.light'
              : 'logs.error.light'
            : 'background.paperDark',
          border: '1px solid',
          borderColor: theme.palette.border.shadow,
          borderRadius: 1,
          m: 1,
        }}
      >
        <BruteTooltip fighter={fighter1} brute={step.fight.brute1}>
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
        </BruteTooltip>
        <Box
          component="img"
          src="/images/tournament/vs.svg"
          sx={{
            width: finals ? 30 : 20,
          }}
        />
        <BruteTooltip fighter={fighter2} brute={step.fight.brute2}>
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
        </BruteTooltip>
      </Link>
    );
  };

  // Lost trash talk
  const renderLostMarker = () => bruteName && lostRound && (
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
        {t('eliminatedBy', {
          value: bruteName === lostRound.fight.brute1.name
            ? lostRound.fight.brute2.name
            : lostRound.fight.brute1.name
        })}
      </Text>
    </Box>
  );

  // Next opponent
  const renderNextOpponent = () => bruteName && data?.nextOpponent && (
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
        {t('nextOpponent')}
        {' '}
        <Link to={`/${data.nextOpponent}/cell`} sx={{ color: 'text.secondary' }}>
          {data.nextOpponent}
        </Link>
      </Text>
    </Box>
  );

  return bruteName ? data && (
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
      <Text>{(date || now).format('DD MMMM YYYY')}</Text>
      <Box sx={{
        mt: 1,
        bgcolor: 'background.paperLight',
        border: '1px solid',
        borderColor: theme.palette.border.shadow,
        textAlign: 'left',
      }}
      >
        {/* Rounds */}
        {Array.from({ length: data.rounds - 3 }).map((_, i) => {
          const step = data.tournament.steps.find((s) => s.step === i + 1);

          // Free bye
          if (!step) {
            // Check if brute lost a fight before
            const lost = data.tournament.steps
              .some((s) => s.step < i + 1 && s.fight.winner !== bruteName);

            if (lost) {
              return null;
            }

            // Check if round hour is passed
            const roundHour = GLOBAL_TOURNAMENT_START_HOUR + i;

            if (date?.isSame(now, 'day') && now.hour() < roundHour) {
              return null;
            }

            return (
              <Box
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                sx={{
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
                <Text bold color="text.disabled" sx={{ width: 30 }}>{i + GLOBAL_TOURNAMENT_START_HOUR}h</Text>
                <Text bold color="text.disabled">{t('automaticallyQualified')}</Text>
              </Box>
            );
          }

          const won = step.fight.winner === bruteName;
          const opponent = bruteName === step.fight.brute1.name
            ? step.fight.brute2.name
            : step.fight.brute1.name;

          const fighter1 = (step.fight.fighters as unknown as Fighter[])
            .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute1.name);
          const fighter2 = (step.fight.fighters as unknown as Fighter[])
            .find((fighter) => fighter.type === 'brute' && fighter.name === step.fight.brute2.name);

          // Normal fight
          return (
            <BruteTooltip
              fighter={bruteName === step.fight.brute1.name ? fighter2 : fighter1}
              brute={bruteName === step.fight.brute1.name
                ? step.fight.brute2
                : step.fight.brute1}
              key={step.id}
            >
              <Link
                to={`/${bruteName}/fight/${step.fightId}`}
                sx={{
                  display: 'flex',
                  px: 0.5,
                  py: 0.25,
                  bgcolor: won
                    ? 'logs.success.light'
                    : 'logs.error.light',
                  borderBottom: '1px solid',
                  borderBottomColor: theme.palette.border.shadow,
                  '&:last-child': {
                    borderBottom: 'none',
                  }
                }}
              >
                <Text
                  bold
                  color={won ? 'success.main' : 'error'}
                  sx={{ width: 30 }}
                >
                  {step.step + GLOBAL_TOURNAMENT_START_HOUR - 1}h
                </Text>
                <Box
                  component="img"
                  src={`/images/log/${won ? 'win' : 'lose'}.png`}
                  sx={{ width: 20, height: 20, mr: 0.5 }}
                />
                <Text
                  bold
                  color={won ? 'success.main' : 'error'}
                >
                  {won
                    ? t('log.win', { value: opponent })
                    : t('log.lose', { value: opponent })}
                </Text>
              </Link>
            </BruteTooltip>
          );
        })}
        {/* Lost marker */}
        {lostRound && lostRound.step <= data.rounds - 3 && renderLostMarker()}
        {/* Next opponent */}
        {data.nextOpponent && data.lastRounds.length === 0 && renderNextOpponent()}
        {/* Last rounds */}
        {/* Quarter-final */}
        {data.lastRounds.length > 0 && (
          <>
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
              <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].step + GLOBAL_TOURNAMENT_START_HOUR - 1}h {t('quarterFinals')}</Text>
              {data.lastRounds
                .filter((step) => step.step === data.lastRounds[0].step)
                .map((step) => renderFight(step))}
            </Box>
            {/* Lost marker */}
            {lostRound && lostRound.step === data.lastRounds[0].step && renderLostMarker()}
            {/* Next opponent */}
            {data.nextOpponent && data.lastRounds.length === 4 && renderNextOpponent()}
          </>
        )}
        {/* Semi-final */}
        {data.lastRounds.length > 4 && (
          <>
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
              <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].step + GLOBAL_TOURNAMENT_START_HOUR}h {t('semiFinals')}</Text>
              {data.lastRounds
                .filter((step) => step.step === data.lastRounds[0].step + 1)
                .map((step) => renderFight(step))}
            </Box>
            {/* Lost marker */}
            {lostRound && lostRound.step === data.lastRounds[0].step + 1 && renderLostMarker()}
            {/* Next opponent */}
            {data.nextOpponent && data.lastRounds.length > 4 && renderNextOpponent()}
          </>
        )}
        {/* Final */}
        {data.lastRounds.find((step) => step.step === data.lastRounds[0].step + 2) && (
          <>
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
              <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[data.lastRounds.length - 1].step + GLOBAL_TOURNAMENT_START_HOUR - 1}h {t('finals')}</Text>
              {renderFight(data.lastRounds[data.lastRounds.length - 1], true)}
            </Box>
            {/* Lost marker */}
            {lostRound && lostRound.step === data.lastRounds[0].step + 2 && renderLostMarker()}
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
  ) : null;
};

export default CellGlobalTournament;
