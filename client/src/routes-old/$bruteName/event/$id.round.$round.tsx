import { EventGetRoundResponse, Fighter } from '@labrute/core';
import { Box, Grid, Paper, TextField, useTheme } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Link from '../../../components/Link';
import Loader from '../../../components/Loader';
import Page from '../../../components/Page';
import Text from '../../../components/Text';
import { useAlert } from '../../../hooks/useAlert';
import catchError from '../../../utils/catchError';
import { ErrorType } from '../../../utils/Fetch';
import Server from '../../../utils/Server';

const EventRoundView = () => {
  const { t } = useTranslation();
  const { bruteName, id, round } = useParams();
  const Alert = useAlert();
  const theme = useTheme();

  const [event, setEvent] = useState<EventGetRoundResponse | null>(null);
  const [parsedFights, setParsedFights] = useState<(Omit<NonNullable<EventGetRoundResponse['tournament']>['fights'][number], 'fighters'> & {
    fighters: Fighter[],
  })[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const displayedFights = useMemo(() => {
    if (!parsedFights.length) return [];

    return parsedFights.filter((fight) => {
      if (!search) return true;

      return fight.fighters.some((fighter) => fighter.name.toLowerCase()
        .includes(search.toLowerCase()));
    }) || [];
  }, [parsedFights, search]);

  // Fetch events
  useEffect(() => {
    if (!id || !round) return;

    setLoading(true);
    Server.Event.getRound(id, round).then((response) => {
      setEvent(response);

      // Parse fights
      setParsedFights(response.tournament?.fights.map((fight) => ({
        ...fight,
        fighters: JSON.parse(fight.fighters) as Fighter[],
      })) || []);
      setLoading(false);
    }).catch((error: ErrorType) => {
      catchError(Alert)(error);
      setEvent(null);
      setLoading(false);
    });
  }, [Alert, id, round]);

  return (
    <Page title={`${t(`event.${event?.type}`)} | ${t('day', { day: round })} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/event/${id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t(`event.${event?.type}`)}, {t('day', { day: round })}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        px: 0,
        overflowX: 'auto',
      }}
      >
        {/* Search for a participant */}
        <Box sx={{ width: 1, display: 'flex', justifyContent: 'center', mt: 1 }}>
          <TextField
            label={t('searchForParticipant')}
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        {/* Fights */}
        {loading ? (
          <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
            <Loader />
          </Box>
        ) : (
          <Box sx={{
            m: 1,
            columns: {
              xs: 1,
              sm: 2,
              md: 3,
            }
          }}
          >
            {displayedFights.map((fight) => {
              const brute1 = fight.brute1?.name ?? fight.fighters.find((fighter) => fighter.team === 'L' && !fighter.master)?.name ?? '';
              const brute2 = fight.brute2?.name ?? fight.fighters.find((fighter) => fighter.team === 'R' && !fighter.master)?.name ?? '';
              return (
                <Grid item key={fight.id} xs={12} sm={6} md={4} lg={3}>
                  <Box sx={{
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                    px: 0.5,
                    py: 0.25,
                    textAlign: 'center',
                  }}
                  >
                    <Link to={`/fight/${fight.id}`} target="_blank">
                      {brute1} vs {brute2}
                    </Link>
                  </Box>
                </Grid>
              );
            })}
          </Box>
        )}
      </Paper>
    </Page>
  );
};

export default EventRoundView;
