import { EventFightsPerDay, EventFreeResets, EventGetResponse, EventPauseDuration, Fighter, formatLargeNumber } from '@labrute/core';
import { EventStatus, EventType, Gender } from '@labrute/prisma';
import { Close, Groups } from '@mui/icons-material';
import { Badge, Box, List, ListItem, ListItemButton, ListItemText, ListSubheader, Paper, Tooltip, useTheme } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BruteRender from '../../components/Brute/Body/BruteRender';
import BruteTooltip from '../../components/Brute/BruteTooltip';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';

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
  const { brute, owner, updateBrute } = useBrute();
  const navigate = useNavigate();
  const theme = useTheme();

  const [data, setData] = useState<EventGetResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch event
  useEffect(() => {
    if (!brute || !id) return;

    setLoading(true);
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

  const watchingRound = useMemo(() => {
    if (!data) return 0;
    if (data.event.finishedAt || !owner) return 999;

    const firstFoughtRound = ([...data.fights].sort(
      (a, b) => a.tournamentStep - b.tournamentStep,
    ).pop()?.tournamentStep ?? 1);

    if (moment.utc().isSame(brute?.eventTournamentWatchedDate, 'day')) {
      if ((brute?.eventTournamentRoundWatched || 1) <= firstFoughtRound) {
        return firstFoughtRound;
      }

      return brute?.eventTournamentRoundWatched || 1;
    }

    return Math.max(firstFoughtRound, 1);
  }, [brute, data, owner]);

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
    currentBrute: string,
    round: number,
    fightId: string,
    skipUpdate?: boolean
  ) => () => {
    if (!data) return;

    // Update watched round
    if (owner && !skipUpdate && round >= watchingRound) {
      Server.Brute.updateEventRoundWatched(currentBrute, fightId).then((d) => {
        updateBrute((b) => (b ? ({
          ...b,
          eventTournamentRoundWatched: d.eventTournamentRoundWatched,
          eventTournamentWatchedDate: d.eventTournamentWatchedDate,
        }) : b));

        navigate(`/${currentBrute}/fight/${fightId}`);
      }).catch(catchError(Alert));
    } else {
      navigate(`/${currentBrute}/fight/${fightId}`);
    }
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
            <Paper
              sx={{
                bgcolor: 'background.paperDark',
                textAlign: 'center',
                p: 1,
                borderRadius: 0,
                mb: 3,
              }}
            >
              <Badge
                color="success"
                badgeContent={`${t('maxLevel')}: ${data.event.maxLevel}`}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ width: 1 }}
                componentsProps={{
                  badge: { style: { marginTop: -16, marginLeft: 8 } },
                }}
              >
                <Badge
                  color="warning"
                  badgeContent={t(`event.status.${data.event.status}`)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  sx={{ width: 1 }}
                  componentsProps={{
                    badge: { style: { marginBottom: -12, marginLeft: -4 } },
                  }}
                >
                  <Badge
                    color="error"
                    badgeContent={t('participants', { value: formatLargeNumber(data.participants) })}
                    sx={{ width: 1 }}
                    componentsProps={{
                      badge: { style: { marginTop: -16, marginRight: 8 } },
                    }}
                  >
                    <Badge
                      color="info"
                      badgeContent={data.event.tournament ? t('day', { day: data.event.tournament?.rounds }) : 0}
                      sx={{ width: 1 }}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                      componentsProps={{
                        badge: { style: { marginBottom: -12 } },
                      }}
                    >
                      <Box sx={{ width: 1 }}>
                        <Text h4 bold upperCase typo="handwritten">{t(`event.${data.event.type}`)}</Text>
                      </Box>
                    </Badge>
                  </Badge>
                </Badge>
              </Badge>
            </Paper>
            {/* CREATE BRUTE */}
            {user
              && !user.brutes.some((b) => b.eventId === data.event.id)
              && data.event.status === EventStatus.starting
              && (
                <FantasyButton color="primary" to={`/?event=${data.event.id}`} sx={{ mt: 2, mx: 'auto' }}>
                  {t('createABrute')}
                </FantasyButton>
              )}
            {/* FIGHTS */}
            {!!data.event.tournament?.rounds && (
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
                  length: Math.min(data.event.tournament?.rounds || 0, data.event.maxRound - 3),
                }).map((_, i) => {
                  const fight = data.fights.find((f) => f.tournamentStep === i + 1);

                  // Not participated
                  if (brute?.eventId !== data.event.id) {
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
                        <Tooltip title={t('seeParticipants')}>
                          <Link to={`round/${i + 1}`} sx={{ fontSize: 0 }}>
                            <Groups
                              sx={{
                                cursor: 'pointer',
                                color: 'text.disabled',
                                mr: 1,
                              }}
                            />
                          </Link>
                        </Tooltip>
                        <Text bold color="text.disabled">{t('dayOver', { day: i + 1 })}</Text>
                      </Box>
                    );
                  }

                  // Free bye
                  if (!fight) {
                    // Check if brute lost a fight before
                    const lost = data.fights
                      .some((f) => f.tournamentStep < i + 1 && f.winner !== bruteName);

                    if (lost) {
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
                          <Tooltip title={t('seeParticipants')}>
                            <Link to={`round/${i + 1}`} sx={{ fontSize: 0 }}>
                              <Groups
                                sx={{
                                  cursor: 'pointer',
                                  color: 'text.disabled',
                                  mr: 1,
                                }}
                              />
                            </Link>
                          </Tooltip>
                          <Text bold color="text.disabled">{t('dayOver', { day: i + 1 })}</Text>
                        </Box>
                      );
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
                        <Tooltip title={t('seeParticipants')}>
                          <Link to={`round/${i + 1}`} sx={{ fontSize: 0 }}>
                            <Groups
                              sx={{
                                cursor: 'pointer',
                                color: 'text.disabled',
                                mr: 1,
                              }}
                            />
                          </Link>
                        </Tooltip>
                        <Text bold color="text.disabled" sx={{ width: 50 }}>{t('day', { day: i + 1 })}</Text>
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
                      <Box
                        key={fight.id}
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
                        <Tooltip title={t('seeParticipants')}>
                          <Link to={`round/${i + 1}`} sx={{ fontSize: 0 }}>
                            <Groups
                              sx={{
                                cursor: 'pointer',
                                mr: 1,
                              }}
                            />
                          </Link>
                        </Tooltip>
                        <BruteTooltip
                          fighter={bruteName === fighter2.name ? fighter1 : fighter2}
                        >
                          <Box onClick={watchFight(bruteName || '', i + 1, fight.id)} sx={{ display: 'flex' }}>
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
                            >
                              {t('log.fight', { value: opponent })}
                            </Text>
                          </Box>
                        </BruteTooltip>
                      </Box>
                    );
                  }

                  // Hide fights after unwatched fights
                  if (owner && watchingRound < i + 1) {
                    return null;
                  }

                  // Normal fight
                  return (
                    <Box
                      key={fight.id}
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
                      <Tooltip title={t('seeParticipants')}>
                        <Link to={`round/${i + 1}`} sx={{ fontSize: 0 }}>
                          <Groups
                            sx={{
                              cursor: 'pointer',
                              mr: 1,
                            }}
                          />
                        </Link>
                      </Tooltip>
                      <BruteTooltip
                        fighter={bruteName === fighter2.name ? fighter1 : fighter2}
                      >
                        <Link to={`/${bruteName}/fight/${fight.id}`} sx={{ display: 'flex' }}>
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
                    </Box>
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
                mt: 1.5,
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
          </>
        ) : (
          <Text center>{t('noEvent')}</Text>
        )}
      </Paper>
    </Page>
  );
};
