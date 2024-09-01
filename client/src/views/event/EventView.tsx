import { EventFightsPerDay, EventFreeResets, EventGetResponse, EventPauseDuration, Fighter } from '@labrute/core';
import { EventStatus, EventType, Gender } from '@labrute/prisma';
import { Close, History } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemText, ListSubheader, Paper, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import { useBrute } from '../../hooks/useBrute';
import BruteTooltip from '../../components/Brute/BruteTooltip';
import BruteRender from '../../components/Brute/Body/BruteRender';
import Link from '../../components/Link';

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

const eventRules = {
  [EventType.battleRoyale]: 10,
};

export const EventView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();
  const { user } = useAuth();
  const { brute, owner } = useBrute();
  const navigate = useNavigate();
  const theme = useTheme();

  const [data, setData] = useState<EventGetResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch event
  useEffect(() => {
    if (!brute || !id) return;

    Server.Event.get(brute.id, id)
      .then((d) => {
        setData(d);

        if (d.event.status !== EventStatus.finished) {
          // Clear local storage from other events
          Object.keys(localStorage).forEach((key) => {
            if (key.startsWith('eventRoundWatched-') && key !== `eventRoundWatched-${id}`) {
              localStorage.removeItem(key);
            }
          });
        }
      })
      .catch(catchError(Alert))
      .finally(() => setLoading(false));
  }, [Alert, brute, id]);

  const watchingRound = useMemo(() => (!data ? 0 : (data.event.finishedAt || !owner)
    ? 999
    : +(localStorage.getItem(`eventRoundWatched-${data?.event.id}`) || 1)), [data, owner]);

  const lastRoundsFirstStep = data?.lastRounds[0]?.tournamentStep ?? 0;

  const lostRound = useMemo(
    () => (bruteName && data
      ? data.fights.find((fight) => fight.winner !== bruteName)
      || data.lastRounds.find((fight) => (fight.brute1Id === brute?.id
        || fight.brute2Id === brute?.id)
        && fight.winner !== bruteName)
      : null),
    [brute?.id, bruteName, data],
  );

  // Watch fight
  const watchFight = (
    currentBrute: string | undefined,
    round: number,
    fightId: string,
    skipUpdate?: boolean
  ) => () => {
    if (!data) return;

    if (owner && !skipUpdate && round >= watchingRound) {
      localStorage.setItem(`eventRoundWatched-${data.event.id}`, (round + 1).toString());
    }

    navigate(`/${currentBrute}/fight/${fightId}`);
  };

  // Last fights renderer
  const renderFight = (
    fight: EventGetResponse['fights'][0] | undefined,
    finals = false,
  ) => {
    if (!bruteName || !fight) return null;

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
          src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/versus/vs.webp`}
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

  return (
    <Page title={`${t('event')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>
          {data && `${moment.utc(data.event.date).format('DD/MM/YYYY')} - `}
          {t('event')}
        </Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        overflowX: 'auto',
      }}
      >
        {loading ? (
          <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
            <Loader />
          </Box>
        ) : data ? (
          <>
            <Text h4 bold upperCase sx={{ mx: 1, my: 1 }}>{t(`event.${data.event.type}`)}</Text>
            <Text my={1}>{t(`event.${data.event.type}.desc`)}</Text>
            {/* RULES */}
            <List
              dense
              subheader={(
                <ListSubheader component="div">
                  <Text bold py={1}>{t('event.rules')}</Text>
                </ListSubheader>
              )}
              sx={{
                border: '1px solid',
                borderColor: theme.palette.border.shadow,
                pb: 0,
              }}
            >
              {Array.from({ length: eventRules[data.event.type] }).map((_, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <ListItem disablePadding key={i}>
                  <ListItemButton>
                    <ListItemText primary={t(`event.${data.event.type}.rule.${i}`, {
                      count: data.event.type === EventType.battleRoyale
                        ? i === 3 ? EventFightsPerDay
                          : i === 4 ? EventFreeResets
                            : i === 8 ? EventPauseDuration
                              : i === 9 ? data.event.maxLevel
                                : undefined : undefined,
                    })}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* CREATE BRUTE */}
            {user
              && !user.brutes.some((b) => b.eventId === data.event.id)
              && data.event.status === EventStatus.starting
              && (
                <FantasyButton color="primary" to={`/?event=${data.event.id}`} sx={{ mt: 2, mx: 'auto' }}>
                  {t('createABrute')}
                </FantasyButton>
              )}
            {/* STARTED MESSAGE */}
            {user
              && !user.brutes.some((b) => b.eventId === data.event.id)
              && data.event.status === EventStatus.ongoing
              && (
                <Text bold>{t('event.ongoing')}</Text>
              )}
            {/* FIGHTS */}
            {!!data.fights.length && (
              <Box sx={{
                mt: 1,
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: theme.palette.border.shadow,
                textAlign: 'left',
                mx: 'auto',
                maxWidth: 600,
              }}
              >
                {/* Rounds */}
                {Array.from({
                  length: data.fights.length
                }).map((_, i) => {
                  const fight = data.fights.find((f) => f.tournamentStep === i + 1);

                  // Free bye
                  if (!fight) {
                    // Check if brute lost a fight before
                    const lost = data.fights
                      .some((f) => f.tournamentStep < i + 1 && f.winner !== bruteName);

                    if (lost) {
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
                        <Text bold color="text.disabled" sx={{ width: 50 }}>{t('day', { day: 1 })}</Text>
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
                  if (owner && (watchingRound === i + 1)) {
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
                            sx={{ width: 50 }}
                          >
                            {t('day', { day: fight.tournamentStep })}
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
                          sx={{ width: 50 }}
                        >
                          {t('day', { day: fight.tournamentStep })}
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
                  && lostRound.tournamentStep <= data.event.maxRound - 3
                  && (!owner || watchingRound > lostRound.tournamentStep)
                  && renderLostMarker()}
                {/* Last rounds */}
                {/* Quarter-final */}
                {data.lastRounds.length > 0
                  && (!owner || watchingRound >= lastRoundsFirstStep)
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
                        <Text bold sx={{ flexBasis: '100%' }}>
                          {t('day', { day: lastRoundsFirstStep })}
                          {' '}
                          {t('quarterFinals')}
                        </Text>
                        {data.lastRounds
                          .filter((fight) => fight.tournamentStep === lastRoundsFirstStep)
                          .map((fight) => renderFight(fight))}
                      </Box>
                      {/* Lost marker */}
                      {lostRound
                        && lostRound.tournamentStep === lastRoundsFirstStep
                        && (!owner || watchingRound > lastRoundsFirstStep)
                        && renderLostMarker()}
                    </>
                  )}
                {/* Semi-final */}
                {data.lastRounds.length > 4
                  && (!owner || watchingRound >= lastRoundsFirstStep + 1)
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
                        <Text bold sx={{ flexBasis: '100%' }}>
                          {t('day', { day: lastRoundsFirstStep + 1 })}
                          {' '}
                          {t('semiFinals')}
                        </Text>
                        {data.lastRounds
                          .filter((fight) => fight.tournamentStep === lastRoundsFirstStep + 1)
                          .map((step) => renderFight(step))}
                      </Box>
                      {/* Lost marker */}
                      {lostRound
                        && lostRound.tournamentStep === lastRoundsFirstStep + 1
                        && (!owner || watchingRound > (lastRoundsFirstStep + 1))
                        && renderLostMarker()}
                    </>
                  )}
                {/* Final */}
                {data.lastRounds.find(
                  (fight) => fight.tournamentStep === lastRoundsFirstStep + 2
                )
                  && (!owner || watchingRound >= lastRoundsFirstStep + 2)
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
                        <Text bold sx={{ flexBasis: '100%' }}>
                          {t('day', { day: lastRoundsFirstStep + 2 })}
                          {' '}
                          {t('finals')}
                        </Text>
                        {renderFight(data.lastRounds[data.lastRounds.length - 1], true)}
                      </Box>
                      {/* Lost marker */}
                      {lostRound
                        && lostRound.tournamentStep === lastRoundsFirstStep + 2
                        && (!owner || watchingRound > (lastRoundsFirstStep + 2))
                        && renderLostMarker()}
                    </>
                  )}
              </Box>
            )}
          </>
        ) : (
          <Text center>{t('noEvent')}</Text>
        )}
        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
          <FantasyButton color="secondary" to="../history" sx={{ m: 1 }}>
            <History sx={{ verticalAlign: 'middle', mr: 1 }} />
            {t('eventHistory')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};
