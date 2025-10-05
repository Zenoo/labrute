import { EventListCurrentResponse, formatLargeNumber } from '@labrute/core';
import { Badge, Box, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Page from '../../../components/Page';
import Text from '../../../components/Text';
import { useAlert } from '../../../hooks/useAlert';
import catchError from '../../../utils/catchError';
import { ErrorType } from '../../../utils/Fetch';
import Server from '../../../utils/Server';
import { EventType } from '@labrute/prisma';
import FantasyButton from '../../../components/FantasyButton';
import { History } from '@mui/icons-material';
import Loader from '../../../components/Loader';

const CurrentEventsView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();

  const [events, setEvents] = useState<EventListCurrentResponse>([]);
  const [loading, setLoading] = useState(true);

  // Fetch events
  useEffect(() => {
    setLoading(true);
    Server.Event.listCurrent().then((response) => {
      setEvents(response);
      setLoading(false);
    }).catch((error: ErrorType) => {
      catchError(Alert)(error);
      setEvents([]);
      setLoading(false);
    });
  }, [Alert]);

  const goTo = (url: string) => () => {
    navigate(url);
  };

  return (
    <Page title={`${t('currentEvents')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('currentEvents')}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        px: 0,
        overflowX: 'auto',
      }}
      >
        <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
          {/* Events */}
          {loading ? (
            <Box sx={{ display: 'flex', mb: 2, justifyContent: 'center' }}>
              <Loader />
            </Box>
          ) : events.map((event) => {
            switch (event.type) {
              case EventType.battleRoyale: {
                return (
                  <Grid item xs={12} md={6} key={event.id}>
                    <Paper
                      sx={{
                        bgcolor: 'background.paperDark',
                        textAlign: 'center',
                        p: 1,
                        borderRadius: 0,
                        cursor: 'pointer',
                      }}
                      onClick={goTo(`/${bruteName ?? ''}/event/${event.id}`)}
                    >
                      <Badge
                        color="success"
                        badgeContent={`${t('maxLevel')}: ${event.maxLevel}`}
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
                          badgeContent={t(`event.status.${event.status}`)}
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
                            badgeContent={t('participants', { value: formatLargeNumber(event.bruteCount) })}
                            sx={{ width: 1 }}
                            componentsProps={{
                              badge: { style: { marginTop: -16, marginRight: 8 } },
                            }}
                          >
                            <Badge
                              color="info"
                              badgeContent={event.tournament ? t('day', { day: event.tournament?.rounds }) : 0}
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
                                <Text h4 bold upperCase typo="handwritten">{t(`event.${event.type}`)}</Text>
                              </Box>
                            </Badge>
                          </Badge>
                        </Badge>
                      </Badge>
                    </Paper>
                  </Grid>
                );
              }
              default: {
                return null;
              }
            }
          })}
        </Grid>
        <Box sx={{ display: 'flex', mt: 1, justifyContent: 'center' }}>
          <FantasyButton color="secondary" to="../history" sx={{ m: 1 }}>
            <History sx={{ verticalAlign: 'middle', mr: 1 }} />
            {t('eventHistory')}
          </FantasyButton>
        </Box>
      </Paper>
    </Page>
  );
};

export default CurrentEventsView;
