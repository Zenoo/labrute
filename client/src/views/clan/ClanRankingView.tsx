import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useBrute } from '../../hooks/useBrute';
import useStateAsync from '../../hooks/useStateAsync';
import Server from '../../utils/Server';

const ClanRankingView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { brute, fetchBrute } = useBrute();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const [page, setPage] = React.useState(1);

  const { data: clans } = useStateAsync(null, Server.Clan.list, page);

  const changePage = (delta: number) => () => {
    setPage(page + delta);
  };

  // Fetch brute
  useEffect(() => {
    if (!bruteName) return;

    fetchBrute(bruteName);
  }, [bruteName, fetchBrute]);

  return (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('clansRanking')}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {brute && (
          <>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
            >
              <Link to={`/${bruteName || ''}/cell`}>
                <Text bold smallCaps>{t('goBackToYourCell')}</Text>
              </Link>
              {brute.clan ? (
                <>
                  <Link to={`/${bruteName || ''}/clan/${brute.clan.id}`}>
                    <Text bold smallCaps>{t('myClan')}</Text>
                  </Link>
                  <Link to={`/${bruteName || ''}/clan/${brute.clan.id}/forum`}>
                    <Text bold smallCaps>{t('forum')}</Text>
                  </Link>
                </>
              ) : (
                <Link to={`/${bruteName || ''}/clan/create`}>
                  <Text bold smallCaps>{t('createAClan')}</Text>
                </Link>
              )}
            </Box>
            <Grid container spacing={1} sx={{ mt: 2 }}>
              <Grid item xs={12} md={3} />
              <Grid item xs={12} md={6}>
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
                      <TableCell />
                      <TableCell>{t('clan')}</TableCell>
                      <TableCell>{t('master')}</TableCell>
                      <TableCell>{t('members')}</TableCell>
                      <TableCell align="right">{t('points')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clans ? (clans.map((clan, index) => (
                      <TableRow key={clan.id}>
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>{clan.name}</TableCell>
                        <TableCell>{clan.master.name}</TableCell>
                        <TableCell>{clan.brutes.length}</TableCell>
                        <TableCell align="right">{clan.points}</TableCell>
                      </TableRow>
                    ))) : (
                      <TableRow>
                        <TableCell component="th" scope="row" />
                        <TableCell colSpan={4}>
                          <Loader size={20} />
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                  {page > 1 && (
                    <Link onClick={changePage(-1)} href="#">
                      <Text>{t('previous')}</Text>
                    </Link>
                  )}
                  {clans?.length === 15 && (
                    <Link onClick={changePage(1)} href="#">
                      <Text>{t('next')}</Text>
                    </Link>
                  )}
                </Box>
              </Grid>
              {!isMd && (
                <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box component="img" src="/images/arena/referee.gif" sx={{ maxWidth: 1 }} />
                </Grid>
              )}
            </Grid>
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ClanRankingView;
