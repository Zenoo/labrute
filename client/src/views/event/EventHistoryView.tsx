import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { EventListResponse } from '@labrute/core';
import Server from '../../utils/Server';
import { ErrorType } from '../../utils/Fetch';
import { useAlert } from '../../hooks/useAlert';
import catchError from '../../utils/catchError';
import moment from 'moment';
import Loader from '../../components/Loader';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';

export const EventHistoryView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<EventListResponse | null>(null);

  // Fetch events
  useEffect(() => {
    Server.Event.list(page).then((response) => {
      setEvents(response);
    }).catch((error: ErrorType) => {
      catchError(Alert)(error);
      setEvents([]);
    });
  }, [Alert, page]);

  const changePage = (delta: number) => () => {
    setEvents(null);
    setPage(page + delta);
  };

  return (
    <Page title={`${t('eventHistory')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('eventHistory')}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        px: 0,
        overflowX: 'auto',
      }}
      >
        <Grid container spacing={1} sx={{ mt: 2 }}>
          <Grid item xs={12} md={3} />
          <Grid item xs={12} md={6} zIndex={1}>
            <Table sx={{
              maxWidth: 1,
              '& th': {
                bgcolor: 'secondary.main',
                color: 'secondary.contrastText',
                py: 0.5,
                px: 1,
                fontWeight: 'bold',
                border: '1px solid',
                borderColor: 'background.default',
              },
              '& td': {
                bgcolor: 'background.paperDark',
                py: 0.5,
                px: 1,
                border: '1px solid',
                borderColor: 'background.default',
              },
            }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>{t('date')}</TableCell>
                  <TableCell>{t('event')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {events ? (events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell component="th" scope="row">
                      {moment.utc(event.date).format('DD/MM/YYYY')}
                    </TableCell>
                    <TableCell>
                      <Link to={`/${bruteName}/event/${event.id}`}>
                        {t(`event.${event.type}`)}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))) : (
                  <TableRow>
                    <TableCell component="th" scope="row" />
                    <TableCell colSpan={5}>
                      <Loader size={20} />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1 }}>
              {page > 1 && (
                <FantasyButton color="primary" onClick={changePage(-1)}>{t('previous')}</FantasyButton>
              )}
              {events?.length === 15 && (
                <FantasyButton color="primary" onClick={changePage(1)}>{t('next')}</FantasyButton>
              )}
            </Box>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};
