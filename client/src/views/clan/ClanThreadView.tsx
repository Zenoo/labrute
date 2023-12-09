import { ClanGetThreadResponse } from '@labrute/core';
import { Box, Paper } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import { useConfirm } from '../../hooks/useConfirm';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import moment from 'moment';
import BruteComponent from '../../components/Brute/Body/BruteComponent';

const ClanThreadView = () => {
  const { t } = useTranslation();
  const { bruteName, id, tid } = useParams();
  const Alert = useAlert();
  const { user } = useAuth();
  const Confirm = useConfirm();
  const navigate = useNavigate();

  const brute = useMemo(() => user?.brutes.find((b) => b.name === bruteName), [bruteName, user]);

  const [thread, setThread] = useState<ClanGetThreadResponse | null>(null);
  const [page, setPage] = useState(1);

  // Fetch thread page
  useEffect(() => {
    if (!bruteName || !id || !tid) return;

    Server.Clan.getThread(bruteName, +id, +tid, page)
      .then(setThread)
      .catch(catchError(Alert));
  }, [Alert, bruteName, id, page, tid]);

  // Lock thread
  const lockThread = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!bruteName || !id || !tid) return;

    Confirm.open(t('lockThread'), t('confirmLockThread'), () => {
      Server.Clan.lockThread(bruteName, +id, +tid).then(() => {
        Alert.open('success', t('threadLocked'));

        // Go to forum
        navigate(`/${bruteName}/clan/${id}/forum`);
      }).catch(catchError(Alert));
    });
  };

  // Pin thread
  const pinThread = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!bruteName || !id || !tid) return;

    Server.Clan.pinThread(bruteName, +id, +tid).then(() => {
      Alert.open('success', t('threadPinned'));

      // Go to forum
      navigate(`/${bruteName}/clan/${id}/forum`);
    }).catch(catchError(Alert));
  };

  // Unpin thread
  const unpinThread = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!bruteName || !id || !tid) return;

    Server.Clan.unpinThread(bruteName, +id, +tid).then(() => {
      Alert.open('success', t('threadUnpinned'));

      // Go to forum
      navigate(`/${bruteName}/clan/${id}/forum`);
    }).catch(catchError(Alert));
  };

  const changePage = (delta: number) => () => {
    setPage(page + delta);
  };

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      {bruteName && id && tid && brute && thread && (
        <>
          <Paper sx={{ mx: 4 }}>
            <Link to={`/${bruteName}/clan/${id}/forum`} sx={{ display: 'inline-block' }}>
              <Text h3 bold upperCase typo="handwritten">{t('forum')} {thread.clan.name}</Text>
            </Link>
            <Text h3 bold upperCase typo="handwritten" color="secondary" sx={{ ml: 1, display: 'inline-block' }}>&gt; {thread.title.substring(0, 30)}{thread.title.length > 30 && '...'}</Text>
          </Paper>
          <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            >
              <Link to={`/${bruteName || ''}/cell`}>
                <Text bold smallCaps>{t('goBackToYourCell')}</Text>
              </Link>
              <Link to={`/${bruteName || ''}/clan/ranking`}>
                <Text bold smallCaps>{t('ranking')}</Text>
              </Link>
              <Link to={`/${bruteName}/clan/${id}`}>
                <Text bold smallCaps>{t('myClan')}</Text>
              </Link>
              {brute.id === thread.clan.masterId && !thread.locked && (
                <Link href="#" onClick={lockThread}>
                  <Text bold smallCaps>{t('lockThread')}</Text>
                </Link>
              )}
              {brute.id === thread.clan.masterId && !thread.pinned && (
                <Link href="#" onClick={pinThread}>
                  <Text bold smallCaps>{t('pinThread')}</Text>
                </Link>
              )}
              {brute.id === thread.clan.masterId && thread.pinned && (
                <Link href="#" onClick={unpinThread}>
                  <Text bold smallCaps>{t('unpinThread')}</Text>
                </Link>
              )}
            </Box>
            {thread.posts.map((post) => (
              <Box key={post.id} sx={{ position: 'relative', my: 1 }}>
                {/* HEADER */}
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  bgcolor: 'secondary.main',
                  py: 0.5,
                  px: 1,
                  pl: 8,
                }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="img" src={`/images/rankings/lvl_${post.author.ranking}.png`} sx={{ mr: 1, width: 20 }} />
                    <Text bold color="primary">{post.author.name}</Text>
                    {post.author.id === thread.clan.masterId && (
                      <Box component="img" src="/images/clan/master.gif" sx={{ ml: 1, width: 7 }} />
                    )}
                  </Box>
                  <Text color="primary">{moment(post.date).format('D MMM YYYY HH:mm')}</Text>
                </Box>
                {/* CONTENT */}
                <Box
                  dangerouslySetInnerHTML={{ __html: post.message }}
                  sx={{
                    bgcolor: 'background.paper',
                    py: 0.5,
                    px: 1,
                    pl: 8,
                    minHeight: 100,
                    '& p': {
                      m: 0,
                    }
                  }}
                />
                {/* BRUTE */}
                <BruteComponent
                  brute={post.author}
                  inverted
                  sx={{
                    position: 'absolute',
                    top: -10,
                    left: -30,
                    height: 150,
                  }}
                />
              </Box>
            ))}
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              {page > 1 && (
                <Link onClick={changePage(-Math.ceil(thread.postCount / 10))} href="#">
                  <Text>{t('first')}</Text>
                </Link>
              )}
              {page > 1 && (
                <Link onClick={changePage(-1)} href="#">
                  <Text>{t('previous')}</Text>
                </Link>
              )}
              {!thread.locked && (
                <Link to={`/${bruteName}/clan/${id}/post/${tid}`}>
                  <Text>{t('reply')}</Text>
                </Link>
              )}
              {page * 10 < thread.postCount && (
                <Link onClick={changePage(1)} href="#">
                  <Text>{t('next')}</Text>
                </Link>
              )}
              {page * 10 < thread.postCount && (
                <Link onClick={changePage(Math.ceil(thread.postCount / 10) - page)} href="#">
                  <Text>{t('last')}</Text>
                </Link>
              )}
            </Box>
          </Paper>
        </>
      )}
    </Page>
  );
};

export default ClanThreadView;
