import { Fighter, GLOBAL_TOURNAMENT_START_HOUR, TournamentsGetGlobalFight, TournamentsGetGlobalResponse } from '@labrute/core';
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
import catchError from '../../utils/catchError';
import { useAlert } from '../../hooks/useAlert';
import { useNavigate } from 'react-router';

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
  const { brute, owner, updateBrute } = useBrute();
  const theme = useTheme();
  const Alert = useAlert();
  const navigate = useNavigate();

  const now = useMemo(() => moment.utc(), []);
  const bruteName = useMemo(() => name || brute?.name || '', [brute, name]);

  const [data, setData] = useState<TournamentsGetGlobalResponse | null>(null);

  const watchingRound = useMemo(() => (date
    ? 999
    : moment.utc().isSame(brute?.globalTournamentWatchedDate || new Date(), 'day')
      ? (brute?.globalTournamentRoundWatched || 0) + 1
      : 1), [brute, date]);

  const lastCommonRound = useMemo(() => {
    if (!brute || !data?.tournament) return 0;

    return data.tournament.fights
      .reduce((round, fight) => (fight.tournamentStep > round ? fight.tournamentStep : round), 0);
  }, [brute, data]);

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
      ? data.tournament?.fights.find((fight) => fight.winner !== bruteName)
      || data.lastRounds.find((fight) => (fight.brute1Id === brute?.id
        || fight.brute2Id === brute?.id)
        && fight.winner !== bruteName)
      : null),
    [brute?.id, bruteName, data],
  );

  // Watch fight
  const watchFight = (
    currentBrute: string,
    round: number,
    fightId: number,
    skipUpdate?: boolean
  ) => () => {
    if (owner && !skipUpdate && round >= watchingRound) {
      Server.Tournament.updateGlobalRoundWatched(currentBrute, fightId).then((d) => {
        updateBrute((b) => (b ? ({
          ...b,
          globalTournamentRoundWatched: d.globalTournamentRoundWatched,
          globalTournamentWatchedDate: d.globalTournamentWatchedDate,
        }) : b));

        navigate(`/${currentBrute}/fight/${fightId}`);
      }).catch(catchError(Alert));
    } else {
      navigate(`/${currentBrute}/fight/${fightId}`);
    }
  };

  // Last fights renderer
  const renderFight = (
    fight: TournamentsGetGlobalFight,
    finals = false,
  ) => {
    if (!bruteName) return null;

    const bruteInFight = fight.brute1Id === brute?.id
      || fight.brute2Id === brute?.id;
    const won = bruteInFight && fight.winner === bruteName;

    const fighters = JSON.parse(fight.fighters) as Fighter[];

    const fighter1 = fighters
      .find((fighter) => fighter.type === 'brute' && fighter.id === fight.brute1Id);
    const fighter2 = fighters
      .find((fighter) => fighter.type === 'brute' && fighter.id === fight.brute2Id);

    if (!fighter1) return null;
    if (!fighter2) return null;

    const ownFight = bruteName === fighter1.name || bruteName === fighter2.name;

    return (
      <Box
        onClick={watchFight(
          ownFight ? bruteName : fighter1.name,
          fight.tournamentStep,
          fight.id,
          !ownFight
        )}
        key={fight.id}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          bgcolor: bruteInFight
            ? watchingRound > fight.tournamentStep
              ? won
                ? 'logs.success.light'
                : 'logs.error.light'
              : 'warning.light'
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
            {(!ownFight || watchingRound > fight.tournamentStep)
              && fight.winner === fighter2.name
              && (
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
            {(!ownFight || watchingRound > fight.tournamentStep)
              && fight.winner === fighter1.name
              && (
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
      </Box>
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
          value: lostRound.winner
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
          const fight = data.tournament?.fights.find((f) => f.tournamentStep === i + 1);

          // Free bye
          if (!fight) {
            // Check if brute lost a fight before
            const lost = data.tournament?.fights
              .some((f) => f.tournamentStep < i + 1 && f.winner !== bruteName);

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

          const fighters = JSON.parse(fight.fighters) as Fighter[];
          const fighter1 = fighters
            .find((fighter) => fighter.type === 'brute' && fighter.id === fight.brute1Id);
          const fighter2 = fighters
            .find((fighter) => fighter.type === 'brute' && fighter.id === fight.brute2Id);

          if (!fighter1) return null;
          if (!fighter2) return null;

          const won = fight.winner === bruteName;
          const opponent = brute?.id === fight.brute1Id
            ? fighter2.name
            : fighter1.name;

          // Hide unwatched fights
          if (owner && (watchingRound === i + 1) && !date) {
            return (
              <BruteTooltip
                fighter={bruteName === fighter2.name ? fighter1 : fighter2}
                key={fight.id}
              >
                <Box
                  onClick={watchFight(bruteName, i + 1, fight.id)}
                  sx={{
                    display: 'flex',
                    px: 0.5,
                    py: 0.25,
                    cursor: 'pointer',
                    bgcolor: 'logs.warning.light',
                    borderBottom: '1px solid',
                    borderBottomColor: theme.palette.border.shadow,
                    '&:last-child': {
                      borderBottom: 'none',
                    }
                  }}
                >
                  <Text
                    bold
                    color="warning.main"
                    sx={{ width: 30 }}
                  >
                    {fight.tournamentStep + GLOBAL_TOURNAMENT_START_HOUR - 1}h
                  </Text>
                  <Text
                    bold
                    color="warning.main"
                    sx={{ ml: 2.5 }}
                  >
                    {t('log.fight', { value: opponent })}
                  </Text>
                </Box>
              </BruteTooltip>
            );
          }

          // Hide fights after unwatched fights
          if (owner && watchingRound < i + 1) {
            return null;
          }

          // Normal fight
          return (
            <BruteTooltip
              fighter={bruteName === fighter2.name ? fighter1 : fighter2}
              key={fight.id}
            >
              <Link
                to={`/${bruteName}/fight/${fight.id}`}
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
                  {fight.tournamentStep + GLOBAL_TOURNAMENT_START_HOUR - 1}h
                </Text>
                <Box
                  component="img"
                  src={`/images/log/${won ? 'win' : 'lose'}.webp`}
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
        {lostRound
          && lostRound.tournamentStep <= data.tournament.rounds - 3
          && (!owner || watchingRound > lostRound.tournamentStep)
          && renderLostMarker()}
        {/* Next opponent */}
        {data.nextOpponent
          && data.nextRound
          && data.lastRounds.length === 0
          && (!owner || watchingRound >= data.nextRound)
          && renderNextOpponent()}
        {/* Last rounds */}
        {/* Quarter-final */}
        {data.lastRounds.length > 0
          && (!owner || watchingRound >= data.lastRounds[0].tournamentStep)
          && (
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
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].tournamentStep + GLOBAL_TOURNAMENT_START_HOUR - 1}h {t('quarterFinals')}</Text>
                {data.lastRounds
                  .filter((fight) => fight.tournamentStep === data.lastRounds[0].tournamentStep)
                  .map((fight) => renderFight(fight))}
              </Box>
              {/* Lost marker */}
              {lostRound
                && lostRound.tournamentStep === data.lastRounds[0].tournamentStep
                && (!owner || watchingRound > data.lastRounds[0].tournamentStep)
                && renderLostMarker()}
              {/* Next opponent */}
              {data.nextOpponent
                && data.lastRounds.length === 4
                && (!owner || watchingRound >= data.lastRounds[0].tournamentStep)
                && renderNextOpponent()}
            </>
          )}
        {/* Semi-final */}
        {data.lastRounds.length > 4
          && (!owner || watchingRound >= data.lastRounds[0].tournamentStep + 1)
          && (
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
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[0].tournamentStep + GLOBAL_TOURNAMENT_START_HOUR}h {t('semiFinals')}</Text>
                {data.lastRounds
                  .filter((fight) => fight.tournamentStep === data.lastRounds[0].tournamentStep + 1)
                  .map((step) => renderFight(step))}
              </Box>
              {/* Lost marker */}
              {lostRound
                && lostRound.tournamentStep === data.lastRounds[0].tournamentStep + 1
                && (!owner || watchingRound > (data.lastRounds[0].tournamentStep + 1))
                && renderLostMarker()}
              {/* Next opponent */}
              {data.nextOpponent
                && data.lastRounds.length === 6
                && (!owner || watchingRound > (data.lastRounds[0].tournamentStep + 1))
                && renderNextOpponent()}
            </>
          )}
        {/* Final */}
        {data.lastRounds.find(
          (fight) => fight.tournamentStep === data.lastRounds[0].tournamentStep + 2
        )
          && (!owner || watchingRound >= data.lastRounds[0].tournamentStep + 2)
          && (
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
                <Text bold sx={{ flexBasis: '100%' }}>{data.lastRounds[data.lastRounds.length - 1].tournamentStep + GLOBAL_TOURNAMENT_START_HOUR - 1}h {t('finals')}</Text>
                {renderFight(data.lastRounds[data.lastRounds.length - 1], true)}
              </Box>
              {/* Lost marker */}
              {lostRound
                && lostRound.tournamentStep === data.lastRounds[0].tournamentStep + 2
                && (!owner || watchingRound > (data.lastRounds[0].tournamentStep + 2))
                && renderLostMarker()}
            </>
          )}
        {/* Tournament done ? */}
        {!data.done
          && (!owner || watchingRound > lastCommonRound)
          && (
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
