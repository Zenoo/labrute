import { ClanGetThreadsResponse } from '@labrute/core';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const ClanForumView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();

  const [data, setData] = useState<ClanGetThreadsResponse | null>(null);

  // Fetch data
  useEffect(() => {
    if (!bruteName || !id) return;

    Server.Clan.getThreads({ brute: bruteName, id: +id }).then(setData).catch(catchError(Alert));
  }, [Alert, bruteName, id]);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('forum')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {bruteName && id && data && (
          <>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            >
              <Link to={`/${bruteName}/cell`}>
                <Text bold smallCaps>{t('goBackToYourCell')}</Text>
              </Link>
              <Link to={`/${bruteName}/clan/ranking`}>
                <Text bold smallCaps>{t('ranking')}</Text>
              </Link>
              <Link to={`/${bruteName}/clan/${id}`}>
                <Text bold smallCaps>{t('myClan')}</Text>
              </Link>
              <Link to={`/${bruteName}/clan/${id}/post/0`}>
                <Text bold smallCaps>{t('startThread')}</Text>
              </Link>
            </Box>
            {/* THREADS */}
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
                  <TableCell>{t('title')}</TableCell>
                  <TableCell>{t('creator')}</TableCell>
                  <TableCell>{t('msg')}</TableCell>
                  <TableCell align="right">{t('lastReply')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.threads.map((thread, i) => (
                  <Fragment key={thread.id}>
                    {/* Insert data row between threads with different dates */}
                    {(!data.threads[i - 1] || moment.utc(thread.updatedAt).format('DD/MM/YYYY') !== moment.utc(data.threads[i - 1].updatedAt).format('DD/MM/YYYY')) && (
                      <TableRow>
                        <TableCell component="th" colSpan={4} sx={{ textAlign: 'center' }}>
                          <Text bold>{moment.utc(thread.updatedAt).format('D MMMM YYYY')}</Text>
                        </TableCell>
                      </TableRow>
                    )}
                    {/* Thread row */}
                    <TableRow>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {thread.pinned && (
                            <Tooltip title={t('pinned')}>
                              <Box component="img" src="/images/clan/pinned.png" sx={{ width: 16 }} />
                            </Tooltip>
                          )}
                          {thread.locked && (
                            <Tooltip title={t('locked')}>
                              <Box component="img" src="/images/clan/lock.gif" sx={{ mr: 0.5, width: 11 }} />
                            </Tooltip>
                          )}
                          <Link to={`/${bruteName}/clan/${id}/thread/${thread.id}`}>
                            <Text bold>{thread.title.substring(0, 50)}{thread.title.length > 50 && '...'}</Text>
                          </Link>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {thread.posts[0].author.id === data.masterId && (
                            <Tooltip title={t('clanMaster')}>
                              <Box component="img" src="/images/clan/master.gif" sx={{ mr: 0.5, width: 7 }} />
                            </Tooltip>
                          )}
                          <Text bold>{thread.posts[0].author.name}</Text>
                        </Box>
                      </TableCell>
                      <TableCell>{thread.postCount}</TableCell>
                      <TableCell align="right">{thread.posts[0].author.name}, {moment.utc(thread.updatedAt).format('HH:mm')}</TableCell>
                    </TableRow>
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ClanForumView;
