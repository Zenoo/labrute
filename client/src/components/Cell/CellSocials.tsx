import { AccountTree, BookmarkAdd, BookmarkRemove, CopyAll, MilitaryTech, Person, Today } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, Paper, PaperProps, Tooltip } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useBrute } from '../../hooks/useBrute';
import useStateAsync from '../../hooks/useStateAsync';
import Server from '../../utils/Server';
import Link from '../Link';
import Text from '../Text';
import moment from 'moment';
import { useAlert } from '../../hooks/useAlert';
import catchError from '../../utils/catchError';
import { ActivityStatus } from '../ActivityStatus';

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

  const { data: getter } = useStateAsync(null, Server.Brute.getRanking, brute?.name || '');

  const isFollowing = user?.following.some((following) => following.id === brute?.id);

  const copyUserId = () => {
    if (!brute) return;

    if (brute.userId) {
      navigator.clipboard.writeText(brute.userId).then(() => {
        Alert.open('success', t('userIdCopied'));
      }).catch(() => { });
    }
  };

  // Toggle follow
  const toggleFollow = () => {
    if (!brute) return;

    Server.User.toggleFollow(brute.id).then(() => {
      Alert.open('success', isFollowing ? t('unfollowed') : t('followed'));
      updateData((prev) => (prev ? {
        ...prev,
        following: isFollowing
          ? prev.following.filter((following) => following.id !== brute.id)
          : prev.following.concat({ id: brute.id }),
      } : null));
    }).catch(catchError(Alert));
  };

  return brute && (
    <Paper sx={{ position: 'relative', ...sx }} {...rest}>
      <Grid container spacing={1}>
        <Grid item xs={smallScreen ? 12 : 6}>
          {/* No achievements for bots */}
          {brute.userId && (
            <Tooltip title={t('achievements')}>
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
            <Tooltip title={`${t('destinyOf')} ${brute.name}`}>
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
                  <Tooltip title={t('copyUserId')}>
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
                <Text bold color="secondary" component="span">{t('master')}: </Text>
                <Text bold component="span"><Link to={`/${brute.master.name}/cell`}>{brute.master.name}</Link></Text>
              </Grid>
            )}
            <Grid item xs={6}>
              <Link to={`/${brute.name}/ranking`}>
                <Text bold color="secondary" component="span">{t('ranking')}: </Text>
                <Text bold component="span">
                  {getter?.ranking || 'NA'}
                </Text>
              </Link>
            </Grid>
            <Grid item xs={6}>
              <Text bold color="secondary" component="span">{t('winrate')}: </Text>
              <Tooltip title={t('wins-losses', { wins: brute.victories, losses: brute.losses })}>
                <Text bold component="span">
                  {(brute.victories + brute.losses) === 0
                    ? '0%'
                    : `${((brute.victories / (brute.victories + brute.losses)) * 100).toLocaleString(undefined, { maximumFractionDigits: 2 })}%`}
                </Text>
              </Tooltip>
            </Grid>
            <Grid item xs={6}>
              <Tooltip title={t('created', { date: moment.utc(brute.createdAt).format('LLL') })}>
                <Text bold component="span">
                  <Today color="secondary" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                  {moment.utc(brute.createdAt).fromNow()}
                </Text>
              </Tooltip>
            </Grid>
            {!!brute.pupilsCount && (
              <Grid item xs={6}>
                <Text bold color="secondary" component="span">{t('pupils')}: </Text>
                <Text bold component="span">{brute.pupilsCount}</Text>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* FOLLOW BUTTON */}
      {user && brute.userId !== user.id && (
        <Tooltip title={isFollowing ? t('unfollow') : t('follow')}>
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
