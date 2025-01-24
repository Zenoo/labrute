import { ClanListResponse, ClanSort } from '@labrute/core';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { useBrute } from '../../hooks/useBrute';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import { useAlert } from '../../hooks/useAlert';
import { ErrorType } from '../../utils/Fetch';

const ClanRankingView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { brute } = useBrute();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const Alert = useAlert();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<ClanSort>(ClanSort.points);
  const [search, setSearch] = useState('');
  const [clans, setClans] = useState<ClanListResponse | null>(null);

  // Fetch clans (debounce if search not empty)
  useEffect(() => {
    const fetchClans = () => {
      Server.Clan.list({
        page,
        search,
        sort,
      }).then((response) => {
        setClans(response);
      }).catch((error: ErrorType) => {
        catchError(Alert)(error);
        setClans([]);
      });
    };

    setClans(null);

    if (search) {
      const debounceTimeout = setTimeout(fetchClans, 1000);
      return () => clearTimeout(debounceTimeout);
    }

    fetchClans();
    return () => { };
  }, [Alert, page, search, sort]);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClans(null);
    setSearch(e.target.value);
    setPage(1);
  };

  const changePage = (delta: number) => () => {
    setClans(null);
    setPage(page + delta);
  };

  const changeSort = (newSort: ClanSort) => () => {
    if (sort === newSort) return;
    setClans(null);
    setSort(newSort);
  };

  return (
    <Page
      title={t('clansRanking')}
      description={t('clansRanking.desc')}
      headerUrl={`/${bruteName || ''}/cell`}
    >
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
              <Grid item xs={12} md={6} zIndex={1}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 1 }}>
                  <Text bold color="text.primary" smallCaps>{t('searchByName')}</Text>
                  <StyledInput
                    onChange={changeSearch}
                    value={search}
                  />
                </Box>
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
                      <TableCell onClick={changeSort(ClanSort.elo)} sx={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                        {t('elo')}
                        {sort === ClanSort.elo && (
                          <Box component="img" src="/images/clan/sort.webp" sx={{ width: 9, verticalAlign: 'middle', ml: 0.5 }} />
                        )}
                      </TableCell>
                      <TableCell align="right" onClick={changeSort(ClanSort.points)} sx={{ cursor: 'pointer', whiteSpace: 'nowrap' }}>
                        {t('points')}
                        {sort === ClanSort.points && (
                          <Box component="img" src="/images/clan/sort.webp" sx={{ width: 9, verticalAlign: 'middle', ml: 0.5 }} />
                        )}
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clans ? (clans.map((clan, index) => (
                      <TableRow key={clan.id}>
                        <TableCell component="th" scope="row">
                          {(page - 1) * 15 + index + 1}
                        </TableCell>
                        <TableCell>
                          {clan.participateInClanWar && (
                            <Tooltip title={t('clanWarsEnabled')}>
                              <Box component="img" src="/images/clan/war.webp" sx={{ width: 12, verticalAlign: 'text-bottom', mr: 0.5 }} />
                            </Tooltip>
                          )}
                          <Link to={`/${bruteName || ''}/clan/${clan.id}`} title={clan.name}>
                            {clan.name.length > 19 ? `${clan.name.slice(0, 19)}...` : clan.name}
                          </Link>
                        </TableCell>
                        <TableCell>{clan.master.name}</TableCell>
                        <TableCell>{clan.brutes.length}</TableCell>
                        <TableCell>{clan.elo}</TableCell>
                        <TableCell align="right">{clan.points}</TableCell>
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
                  {clans?.length === 15 && (
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
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ClanRankingView;
