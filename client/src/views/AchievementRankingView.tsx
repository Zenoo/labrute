import { AchievementData, AchievementGetRankingsResponse } from '@labrute/core';
import { AchievementName } from '@labrute/prisma';
import { Box, Checkbox, FormControlLabel, Grid, List, ListItem, ListItemText, ListSubheader, Paper, Tooltip, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Link from '../components/Link';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import Server from '../utils/Server';
import catchError from '../utils/catchError';

const AchievementRankingView = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const Alert = useAlert();

  const [byUser, setByUser] = useState(false);
  const [rankings, setRankings] = useState<
    Record<AchievementName, AchievementGetRankingsResponse> | null
  >(null);

  // Fetch rankings
  useEffect(() => {
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
    }).catch(catchError(Alert));
  }, [Alert, byUser]);

  return (
    <Page title={t('MyBrute')} headerUrl="/">
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
                      <Tooltip
                        title={(
                          <>
                            <Text bold h6>
                              {t(`achievements.${achievementName}`)}
                            </Text>
                            <Text
                              sx={{
                                color: `achievements.${AchievementData[achievementName].rarety}.main`,
                                fontStyle: 'italic',
                                textTransform: 'capitalize',
                              }}
                            >
                              {t(AchievementData[achievementName].rarety)}
                            </Text>
                            <Text sx={{ fontStyle: 'italic', color: 'text.secondary' }}>{t(`achievements.${achievementName}.description`)}</Text>
                            {AchievementData[achievementName].onePerFight && (
                              <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                                {t('maxPerFight')}:{' '}
                                <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>1</Text>
                              </Text>
                            )}
                            {AchievementData[achievementName].perBrute && (
                              <Text subtitle2 sx={{ color: 'achievements.common.main' }}>
                                {t('maxPerBrute')}:{' '}
                                <Text component="span" subtitle2 bold sx={{ color: 'secondary.contrastText' }}>{AchievementData[achievementName].perBrute}</Text>
                              </Text>
                            )}
                          </>
                        )}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: 'secondary.main',
                              color: 'secondary.contrastText',
                              border: 1,
                              borderColor: 'primary.main',
                            }
                          },
                          popper: { sx: { width: 250 } },
                        }}
                      >
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
                      </Tooltip>
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
      </Paper>
    </Page>
  );
};

export default AchievementRankingView;
