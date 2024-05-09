import { Fighter, GLOBAL_TOURNAMENT_START_HOUR, TournamentsGetGlobalResponse, TournamentsGetGlobalStep } from '@labrute/core';
import { Close } from '@mui/icons-material';
import { Box, Paper, PaperProps, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBrute } from '../../hooks/useBrute';
import Server from '../../utils/Server';
import BruteRender from '../Brute/Body/BruteRender';
import BruteTooltip from '../Brute/BruteTooltip';
import Link from '../Link';
import Text from '../Text';
import { Gender } from '@labrute/prisma';

const fighterToBrute = (fighter: Fighter) => ({
  id: fighter.id,
  gender: fighter.gender || Gender.male,
  name: fighter.name,
  hp: fighter.maxHp,
  level: fighter.level,
  strengthValue: fighter.strength,
  agilityValue: fighter.agility,
  speedValue: fighter.speed,
  body: fighter.body || '0'.repeat(11),
  colors: fighter.colors || '0'.repeat(32),
});

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
    let isSubscribed = true;
    if (!bruteName) return () => { isSubscribed = false; };

    setData(null);
    Server.Tournament.getGlobal({ name: bruteName, date: (date || now).format('YYYY-MM-DD') }).then((d) => {
      if (isSubscribed) {
        if (d.tournament) {
          setData(d);
        } else {
          setData(null);
        }
      }
    }).catch(() => {
      if (isSubscribed) {
        setData(null);
      }
    });

    return () => { isSubscribed = false; };
  }, [bruteName, date, now]);

  const lostRound = useMemo(
    () => (bruteName && data
      ? data.tournament?.steps.find((step) => step.fight.winner !== bruteName)
      || data.lastRounds.find((step) => (step.fight.brute1Id === brute?.id
        || step.fight.brute2Id === brute?.id)
        && step.fight.winner !== bruteName)
      : null),
    [brute?.id, bruteName, data],
  );

  // Last fights renderer
  const renderFight = (
    step: TournamentsGetGlobalStep,
    finals = false,
  ) => {
    if (!bruteName) return null;

    const bruteInFight = step.fight.brute1Id === brute?.id
      || step.fight.brute2Id === brute?.id;
    const won = bruteInFight && step.fight.winner === bruteName;

    const fighters = JSON.parse(step.fight.fighters) as Fighter[];

    const fighter1 = fighters
      .find((fighter) => fighter.type === 'brute' && fighter.id === step.fight.brute1Id);
    const fighter2 = fighters
      .find((fighter) => fighter.type === 'brute' && fighter.id === step.fight.brute2Id);

    if (!fighter1) return null;
    if (!fighter2) return null;

    return (
      <Link
        to={`/${fighter1.name}/fight/${step.fightId}`}
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
          overflow: 'hidden',
          width: finals ? 140 : 95,
          height: finals ? 40 : 28,
        }}
      >
        <BruteTooltip fighter={fighter1}>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              width: finals ? 40 : 30,
              height: 1,
            }}
          >
            <BruteRender
              brute={fighterToBrute(fighter1)}
              looking="right"
              y={-3}
            />
            {step.fight.winner === fighter2.name && (
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
        <BruteTooltip fighter={fighter2}>
          <Box
            sx={{
              position: 'relative',
              display: 'inline-block',
              width: finals ? 40 : 30,
              height: 1,
            }}
          >
            <BruteRender
              brute={fighterToBrute(fighter2)}
              looking="left"
              y={-3}
            />
            {step.fight.winner === fighter1.name && (
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
          value: lostRound.fight.winner
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

  return bruteName ? data && data.tournament && data?.lastRounds.length < 8 && (
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
        {Array.from({ length: data.tournament.rounds - 3 }).map((_, i) => {
          const step = data.tournament?.steps.find((s) => s.step === i + 1);

          // Free bye
          if (!step) {
            // Check if brute lost a fight before
            const lost = data.tournament?.steps
              .some((s) => s.step < i + 1 && s.fight.winner !== bruteName);

            if (lost) {
              return null;
            }

            // Check if round hour is passed
            const roundHour = GLOBAL_TOURNAMENT_START_HOUR + i;

            if ((!date || date.isSame(now, 'day')) && now.hour() < roundHour) {
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

          const fighters = JSON.parse(step.fight.fighters) as Fighter[];
          const fighter1 = fighters
            .find((fighter) => fighter.type === 'brute' && fighter.id === step.fight.brute1Id);
          const fighter2 = fighters
            .find((fighter) => fighter.type === 'brute' && fighter.id === step.fight.brute2Id);

          if (!fighter1) return null;
          if (!fighter2) return null;

          const won = step.fight.winner === bruteName;
          const opponent = brute?.id === step.fight.brute1Id
            ? fighter2.name
            : fighter1.name;

          // Normal fight
          return (
            <BruteTooltip
              fighter={bruteName === fighter2.name ? fighter1 : fighter2}
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
        {lostRound && lostRound.step <= data.tournament.rounds - 3 && renderLostMarker()}
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
