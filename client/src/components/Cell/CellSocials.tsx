import { AccountTree, BookmarkAdd, BookmarkRemove, CopyAll, MilitaryTech, Person, Today } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Paper, PaperProps, Tooltip } from '@mui/material';
import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import { getBruteWinrate } from '../../utils/getBruteWinrate';
import { ActivityStatus } from '../ActivityStatus';
import Link from '../Link';
import Text from '../Text';
import { useServer } from '../../hooks/useServer';
import { catchError } from '../../utils/catchError';

export interface CellSocialsProps extends PaperProps {
  smallScreen?: boolean;
}

const CellSocials = ({
  smallScreen,
  sx,
  ...rest
}: CellSocialsProps) => {
  const { brute } = useBrute();
  const { user, updateData } = useAuth();
  const { t } = useTranslation();
  const Alert = useAlert();
  const Server = useServer();

  const [fetchedRanking, setFetchedRanking] = useState<number | null>(null);

  // Check if ranking is cached and fresh (updated today)
  const isRankingFresh = useMemo(() => Boolean(
    brute?.rankingPositionUpdatedAt
    && dayjs.utc(brute.rankingPositionUpdatedAt).isSame(dayjs.utc(), 'day')
  ), [brute?.rankingPositionUpdatedAt]);

  // Determine which ranking to display
  const ranking = useMemo(() => {
    if (isRankingFresh && brute?.rankingPosition) {
      return brute.rankingPosition;
    }
    return fetchedRanking ?? undefined;
  }, [isRankingFresh, brute?.rankingPosition, fetchedRanking]);

  // Fetch ranking if not fresh
  useEffect(() => {
    if (!brute?.name || isRankingFresh) {
      return;
    }

    Server.Brute.getRanking(brute.name)
      .then((data) => {
        setFetchedRanking(data.ranking);

        // Update brute's ranking position and updatedAt in local state to avoid refetching during the same day
        updateData((prev) => (prev ? {
          ...prev,
          rankingPosition: data.ranking,
          rankingPositionUpdatedAt: new Date().toISOString(),
        } : null));
      })
      .catch((error) => catchError(Alert, error));
  }, [brute?.name, isRankingFresh, Server.Brute, Alert, updateData]);

  const isFollowing = user?.following.some((following) => following.id === brute?.id);

  const copyUserId = () => {
    if (!brute) return;

    if (brute.userId) {
      navigator.clipboard.writeText(brute.userId).then(() => {
        Alert.open('success', t('userIdCopied', { ns: 'common' }));
      }).catch(() => { });
    }
  };

  // Toggle follow
  const toggleFollow = async () => {
    if (!brute) return;

    try {
      await Server.User.toggleFollow(brute.id);
      Alert.open('success', isFollowing ? t('unfollowed', { ns: 'common' }) : t('followed', { ns: 'common' }));
      updateData((prev) => (prev ? {
        ...prev,
        following: isFollowing
          ? prev.following.filter((following) => following.id !== brute.id)
          : prev.following.concat({ id: brute.id }),
      } : null));
    } catch (error) {
      catchError(Alert, error);
    }
  };

  return brute && (
    <Paper sx={{ position: 'relative', ...sx }} {...rest}>
      <Grid container spacing={1}>
        <Grid item xs={smallScreen ? 12 : 6}>
          {/* No achievements for bots */}
          {brute.userId && (
            <Tooltip title={t('achievements', { ns: 'common' })}>
              <Link
                to={`/${brute.name}/achievements`}
                sx={{ mr: 1 }}
              >
                <MilitaryTech color="warning" />
              </Link>
            </Tooltip>
          )}
          {/* No destiny for bots */}
          {brute.userId && (
            <Tooltip title={`${t('destinyOf', { ns: 'common' })} ${brute.name}`}>
              <Link
                to={`/${brute.name}/destiny`}
                sx={{ mr: 1 }}
              >
                <AccountTree color="success" />
              </Link>
            </Tooltip>
          )}
          <Text h2 smallCaps sx={{ display: 'inline-block' }}>{brute.name}</Text>
          <Box>
            {brute.user && (
              <>
                {user?.moderator && (
                  <Tooltip title={t('copyUserId', { ns: 'common' })}>
                    <IconButton size="small" onClick={copyUserId}>
                      <CopyAll color="primary" />
                    </IconButton>
                  </Tooltip>
                )}
                <Button
                  component={RouterLink}
                  to={`/user/${brute.user.id}`}
                  size="small"
                  startIcon={<Person fontSize="small" />}
                  color="secondary"
                >
                  <Text smallCaps subtitle2>{brute.user.name}</Text>
                  <ActivityStatus user={brute.user} sx={{ fontSize: 10, ml: 0.5 }} />
                </Button>
              </>
            )}
          </Box>
        </Grid>
        <Grid item xs={smallScreen ? 12 : 6}>
          <Grid container>
            {!!brute.master && (
              <Grid item xs={6}>
                <Text bold color="secondary" component="span">{t('master', { ns: 'common' })}: </Text>
                <Text bold component="span"><Link to={`/${brute.master.name}/cell`}>{brute.master.name}</Link></Text>
              </Grid>
            )}
            <Grid item xs={6}>
              <Tooltip title={t('rankingUpdatedDaily')}>
                <Link to={`/${brute.name}/ranking/${brute.eventId ? -1 : brute.ranking}`}>
                  <Text bold color="secondary" component="span">{t('ranking', { ns: 'common' })}: </Text>
                  <Text bold component="span">
                    {ranking || 'NA'}
                  </Text>
                </Link>
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <Text bold color="secondary" component="span">{t('winrate', { ns: 'common' })}: </Text>
              <Tooltip title={t('wins-losses', { ns: 'common', wins: brute.victories, losses: brute.losses })}>
                <Text bold component="span">
                  {getBruteWinrate(brute)}
                </Text>
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <Tooltip title={t('created', { ns: 'common', date: dayjs.utc(brute.createdAt).format('LLL') })}>
                <Text bold component="span">
                  <Today color="secondary" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                  {dayjs.utc(brute.createdAt).fromNow()}
                </Text>
              </Tooltip>
            </Grid>
            {!!brute.pupilsCount && (
              <Grid item xs={6}>
                <Text bold color="secondary" component="span">{t('pupils', { ns: 'common' })}: </Text>
                <Text bold component="span">{brute.pupilsCount}</Text>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* FOLLOW BUTTON */}
      {user && brute.userId !== user.id && (
        <Tooltip title={isFollowing ? t('unfollow', { ns: 'common' }) : t('follow', { ns: 'common' })}>
          <IconButton
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            size="small"
            onClick={toggleFollow}
          >
            {isFollowing ? <BookmarkRemove color="error" /> : <BookmarkAdd color="success" />}
          </IconButton>
        </Tooltip>
      )}
    </Paper>
  );
};

export default CellSocials;
