import { LogGetForUserFeedResponse, skills, weapons } from '@labrute/core';
import { LogType } from '@labrute/prisma';
import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Tooltip } from '@mui/material';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SkillTooltip from '../components/Brute/SkillTooltip';
import WeaponTooltip from '../components/Brute/WeaponTooltip';
import FantasyButton from '../components/FantasyButton';
import { LogImage } from '../components/LogImage';
import Page from '../components/Page';
import Text from '../components/Text';
import { useAlert } from '../hooks/useAlert';
import { useAuth } from '../hooks/useAuth';
import Server from '../utils/Server';
import catchError from '../utils/catchError';
import Link from '../components/Link';
import BruteRender from '../components/Brute/Body/BruteRender';

export const FollowingFeedView = () => {
  const { t } = useTranslation();
  const Alert = useAlert();
  const { user } = useAuth();

  const [logs, setLogs] = React.useState<LogGetForUserFeedResponse['logs']>([]);
  const [followedBrutes, setFollowedBrutes] = React.useState<LogGetForUserFeedResponse['brutes']>([]);
  const [page, setPage] = React.useState(0);
  const [lastPage, setLastPage] = React.useState(false);

  // Load logs
  useEffect(() => {
    if (!user) return;

    Server.Log.getForUserFeed(page).then((data) => {
      // Add new logs
      setLogs((prev) => prev.concat(
        // Filter out logs already in the list (solves possible desync if log created between requests)
        data.logs.filter((log) => !prev.find((prevLog) => prevLog.id === log.id))
      ));

      // Set followed brutes
      setFollowedBrutes(data.brutes);

      // Set last page
      setLastPage(data.logs.length < 20);
    }).catch(catchError(Alert));
  }, [user, Alert, page]);

  return (
    <Page title={`${t('followingFeed')} ${t('MyBrute')}`} headerUrl={`/user/${user?.id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten">{t('followingFeed')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {user && (
          <Stack spacing={2}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 1,
            }}
            >
              {followedBrutes.map((b) => (
                <Tooltip key={b.id} title={b.name}>
                  <Link
                    sx={{
                      width: 25,
                      height: 25,
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                    to={`/${b.name}/cell`}
                  >
                    <BruteRender
                      brute={b}
                    />
                  </Link>
                </Tooltip>
              ))}
            </Box>
            {/* Report list */}
            <List dense>
              {logs.map((log) => (
                <ListItem
                  key={log.id}
                >
                  <ListItemIcon>
                    <LogImage log={log} sx={{ width: 25 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={(
                      <Link to={`/${log.currentBrute?.name}/cell`}>
                        <Text body2>
                          {t(`log.${log.type}`, {
                            brute: log.currentBrute?.name,
                            value: log.type === LogType.lvl ? t(`lvl_${log.level}`) : log.level,
                          })}
                        </Text>
                        {log.type === LogType.up && (
                          <Text body2>
                            {/* +3 Skill */}
                            {log.destinyChoice?.type === 'stats' && !log.destinyChoice?.stat2 && `+${log.destinyChoice?.stat1Value || ''} ${t('in')} `}
                            {/* +2/+1 Skill */}
                            {log.destinyChoice?.type === 'stats' && log.destinyChoice?.stat2 && `+${log.destinyChoice?.stat1Value || ''}/+${log.destinyChoice?.stat2Value || ''} ${t('in')} `}
                            {/* New weapon */}
                            {log.destinyChoice?.type === 'weapon' && `${t('newWeapon')} : `}
                            {/* New skill */}
                            {log.destinyChoice?.type === 'skill' && `${t('newSkill')} : `}
                            {/* New pet */}
                            {log.destinyChoice?.type === 'pet' && `${t('newPet')} : `}
                            {(log.destinyChoice?.type === 'skill' ? (
                              <SkillTooltip
                                skill={skills.find((s) => s.name === log.destinyChoice?.skill)}
                              >
                                <Text component="span" body2>
                                  {t(log.destinyChoice?.skill ?? '')}
                                </Text>
                              </SkillTooltip>
                            ) : log.destinyChoice?.type === 'weapon' ? (
                              <WeaponTooltip weapon={weapons
                                .find((w) => w.name === log.destinyChoice?.weapon)}
                              >
                                <Text component="span" body2>
                                  {t(log.destinyChoice?.weapon ?? '')}
                                </Text>
                              </WeaponTooltip>
                            ) : log.destinyChoice?.type === 'pet' ? (
                              <Text component="span" body2>{t(log.destinyChoice?.pet ?? '')}</Text>
                            ) : !log.destinyChoice?.stat2 ? (
                              <Text component="span" body2>
                                {t(log.destinyChoice?.stat1 ?? '')}
                              </Text>
                            ) : (
                              <Text component="span" body2>
                                {t(log.destinyChoice?.stat1 ?? '')} / {t(log.destinyChoice?.stat2)}
                              </Text>
                            ))}
                          </Text>
                        )}
                      </Link>
                    )}
                    secondary={moment.utc(log.date).fromNow()}
                  />
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
      </Paper>
      <FantasyButton
        color="success"
        onClick={() => setPage((prev) => prev + 1)}
        disabled={lastPage}
        sx={{ mx: 'auto', mt: 3 }}
      >
        {t('showMore')}
      </FantasyButton>
    </Page>
  );
};
