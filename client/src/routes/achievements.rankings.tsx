import { AchievementData, AchievementGetRankingsResponse } from '@labrute/core';
import { AchievementName } from '@labrute/prisma';
import { Box, Checkbox, FormControlLabel, Grid, List, ListItem, ListItemText, ListSubheader, Paper, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AchievementTooltip } from '../components/AchievementTooltip';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import Loader from '../components/Loader';
import { ErrorType } from '../utils/Fetch';

const AchievementsRankings = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const Alert = useAlert();

  const [byUser, setByUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [rankings, setRankings] = useState<
    Record<AchievementName, AchievementGetRankingsResponse> | null
  >(null);

  // Fetch rankings
  useEffect(() => {
    setLoading(true);

    Server.Achievement.getRankings(byUser).then((data) => {
      // Group by achievement name
      const groupedRankings = data.reduce((acc, ranking) => {
        if (!acc[ranking.name]) {
          acc[ranking.name] = [];
        }
        acc[ranking.name].push(ranking);
        return acc;
      }, {} as Record<AchievementName, AchievementGetRankingsResponse>);

      setRankings(groupedRankings);
    }).catch((reason: ErrorType) => {
      catchError(Alert)(reason);
      setRankings(null);
    }).finally(() => {
      setLoading(false);
    });
  }, [Alert, byUser]);

  return (
    <Page
      title={t('achievementRankings')}
      description={t('achievementRankings.desc')}
      headerUrl="/"
    >
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('achievementRankings')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <FormControlLabel
          control={(
            <Checkbox
              checked={byUser}
              onChange={(event) => {
                setByUser(event.target.checked);
              }}
            />
          )}
          label={t('byUser')}
        />
        {/* ACHIEVEMENTS */}
        {loading ? <Loader /> : (
          <Grid container spacing={1}>
            {rankings && Object.entries(rankings).map(([achievementNameAsString, top3]) => {
              const achievementName = achievementNameAsString as AchievementName;

              return (
                <Grid item xs={12} sm={6} md={4} key={achievementName}>
                  <Box sx={{
                    mt: 1,
                    border: '1px solid',
                    borderColor: theme.palette.border.shadow,
                  }}
                  >
                    <List
                      dense
                      sx={{ width: 1, py: 0 }}
                      subheader={(
                        <AchievementTooltip name={achievementName}>
                          <ListSubheader sx={{
                            display: 'flex',
                            alignItems: 'center',
                            py: 0.5,
                            bgcolor: 'secondary.main',
                          }}
                          >
                            <Box
                              component="img"
                              src={`/images/achievements/${AchievementData[achievementName].illustration || ''}`}
                              sx={{ width: 20 }}
                            />
                            <Text smallCaps bold color="secondary.contrastText" sx={{ ml: 1 }}>{t(`achievements.${achievementName}`)}</Text>
                          </ListSubheader>
                        </AchievementTooltip>
                      )}
                    >
                      {top3.map((ranked) => (
                        <ListItem
                          key={ranked?.user?.id || ranked?.brute?.id}
                          sx={{
                            py: 0,
                            bgcolor: 'background.paper',
                            '&:not(:last-child)': {
                              borderBottom: '1px dashed',
                              borderBottomColor: theme.palette.border.shadow,
                            },
                          }}
                        >
                          <ListItemText
                            sx={{ my: 0 }}
                            primary={(
                              <Link to={ranked.user ? `/user/${ranked.user.id}` : `/${ranked.brute?.name}/cell`}>
                                <span>{ranked.user?.name || ranked.brute?.name}</span>
                                <Box component="span" sx={{ ml: 0.5, color: 'text.secondary' }}>(x{ranked.count})</Box>
                              </Link>
                            )}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        )}
      </Paper>
    </Page>
  );
};

export default AchievementsRankings;
