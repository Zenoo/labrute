import { EventFightsPerDay, EventFreeResets, EventGetResponse, EventPauseDuration } from '@labrute/core';
import { EventType } from '@labrute/prisma';
import { History } from '@mui/icons-material';
import { Box, List, ListItemText, ListSubheader, Paper } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import { useBrute } from '../../hooks/useBrute';

const eventRules = {
  [EventType.battleRoyale]: 9,
};

export const EventView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();
  const { user } = useAuth();
  const { owner } = useBrute();

  const [data, setData] = useState<EventGetResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch event
  useEffect(() => {
    Server.Event.get(id)
      .then(setData)
      .catch(catchError(Alert))
      .finally(() => setLoading(false));
  }, [Alert, id]);

  const watchingRound = useMemo(() => ((data?.event.finishedAt || !owner)
    ? 999
    : localStorage.getItem('eventRoundWatched') || 0), [data, owner]);

  const lastCommonRound = useMemo(() => {
    if (!data) return 0;

    return data.fights
      .reduce((round, fight) => (fight.tournamentStep > round ? fight.tournamentStep : round), 0);
  }, [data]);

  const lastRoundsFirstStep = data?.lastRounds[0]?.tournamentStep ?? 0;

  console.log(watchingRound, lastCommonRound, lastRoundsFirstStep);

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
        px: 0,
        overflowX: 'auto',
      }}
      >
        {loading ? (
          <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
            <Loader />
          </Box>
        ) : data ? (
          <>
            <Text h4 bold upperCase sx={{ mx: 1 }}>{t(`event.${data.event.type}`)}</Text>
            <Text>{t(`event.${data.event.type}.desc`)}</Text>
            {/* RULES */}
            <Text bold>{t('event.rules')}:</Text>
            <List
              dense
              subheader={(
                <ListSubheader component="div">
                  {t('event.rules')}:
                </ListSubheader>
              )}
            >
              {Array.from({ length: eventRules[data.event.type] }).map((_, i) => (
                <ListItemText primary={t(`event.${data.event.type}.rule.${i}`, {
                  count: data.event.type === EventType.battleRoyale
                    ? i === 3 ? EventFightsPerDay
                      : i === 4 ? EventFreeResets
                        : i === 8 ? EventPauseDuration
                          : undefined : undefined,
                })}
                />
              ))}
            </List>
            {/* CREATE BRUTE */}
            {user && user.brutes.every((brute) => brute.eventId !== data.event.id) && (
              <FantasyButton color="primary" to={`/?event=${data.event.id}`} sx={{ m: 1 }}>
                {t('createBrute')}
              </FantasyButton>
            )}
            {/* FIGHTS */}
            {/* TODO */}
          </>
        ) : (
          <Text>{t('noEvent')}</Text>
        )}
        <Box sx={{ display: 'flex', mt: 2, justifyContent: 'center' }}>
          <FantasyButton color="secondary" to="/event/history" sx={{ m: 1 }}>
            <History sx={{ verticalAlign: 'middle', mr: 1 }} />
            {t('eventHistory')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};
