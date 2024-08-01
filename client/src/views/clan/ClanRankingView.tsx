import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import FantasyButton from '../../components/FantasyButton';
import Link from '../../components/Link';
import Loader from '../../components/Loader';
import Page from '../../components/Page';
import StyledInput from '../../components/StyledInput';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useBrute } from '../../hooks/useBrute';
import useStateAsync from '../../hooks/useStateAsync';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';

const ClanRankingView = () => {
  const { t } = useTranslation();
  const { bruteName } = useParams();
  const { brute } = useBrute();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const Alert = useAlert();

  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState('');
  const [clanIdAsMaster, setClanIdAsMaster] = React.useState<string | null>(null);

  const params = useMemo(() => ({ page, search }), [page, search]);
  const { data: clans, set: setClans } = useStateAsync(null, Server.Clan.list, params);

  // Fetch the clan id if the brute is the master of a clan
  useEffect(() => {
    if (!brute) return;

    Server.Brute.getClanIdAsMaster(brute.name)
      .then(({ id }) => setClanIdAsMaster(id))
      .catch(catchError(Alert));
  }, [Alert, brute]);

  const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClans(null);
    setSearch(e.target.value);
    setPage(1);
  };

  const changePage = (delta: number) => () => {
    setClans(null);
    setPage(page + delta);
  };

  // Declare war
  const declareWar = (clanId: string) => () => {
    if (!brute || !clanIdAsMaster) return;

    Server.ClanWar.create(brute.id, clanIdAsMaster, clanId)
      .then(() => {
        setClanIdAsMaster(null);
        Alert.open('success', t('warDeclared'));
      })
      .catch(catchError(Alert));
  };

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
                      {clanIdAsMaster && <TableCell />}
                      <TableCell>{t('master')}</TableCell>
                      <TableCell>{t('members')}</TableCell>
                      <TableCell align="right">{t('points')}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {clans ? (clans.map((clan, index) => (
                      <TableRow key={clan.id}>
                        <TableCell component="th" scope="row">
                          {(page - 1) * 15 + index + 1}
                        </TableCell>
                        <TableCell>
                          <Link to={`/${bruteName || ''}/clan/${clan.id}`}>
                            {clan.name}
                          </Link>
                        </TableCell>
                        {clanIdAsMaster && (
                          <TableCell>
                            {clanIdAsMaster !== clan.id && (
                              <Tooltip title={t('declareWar')}>
                                <Box
                                  component="img"
                                  src="/images/clan/pinned.png"
                                  onClick={declareWar(clan.id)}
                                  sx={{ width: 16, cursor: 'pointer' }}
                                />
                              </Tooltip>
                            )}
                          </TableCell>
                        )}
                        <TableCell>{clan.master.name}</TableCell>
                        <TableCell>{clan.brutes.length}</TableCell>
                        <TableCell align="right">{clan.points}</TableCell>
                      </TableRow>
                    ))) : (
                      <TableRow>
                        <TableCell component="th" scope="row" />
                        <TableCell colSpan={clanIdAsMaster ? 5 : 4}>
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
