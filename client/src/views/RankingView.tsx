import { BruteRanking, BruteRankings, BrutesGetForRankResponse } from '@labrute/core';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import BruteRender from '../components/Brute/Body/BruteRender';
import Link from '../components/Link';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import { useAuth } from '../hooks/useAuth';
import { useBrute } from '../hooks/useBrute';

const RankingView = () => {
  const { t } = useTranslation();
  const { bruteName, rank } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));
  const { currentEvent } = useAuth();
  const { brute } = useBrute();

  const ranking = useMemo(() => (typeof rank === 'undefined' ? brute?.eventId ? -1 : undefined : rank === 'event' ? -1 : +rank), [brute?.eventId, rank]);

  const rankingProps = useMemo(() => ({
    name: bruteName || '',
    rank: ranking,
  }), [bruteName, ranking]);
  const { data: rankings } = useStateAsync(null, Server.Brute.getForRank, rankingProps);

  const rankingSelected = useMemo(() => (typeof ranking !== 'undefined'
    ? ranking
    : (rankings && rankings.topBrutes.length
      ? rankings.topBrutes[0]?.ranking
      : undefined)), [ranking, rankings]);

  const bruteRow = (b: BrutesGetForRankResponse['topBrutes'][number], index: number) => (
    <TableRow
      key={b.id}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell sx={{ overflow: 'hidden' }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          height: 16,
        }}
        >
          <Box width={24} height={1}>
            <BruteRender brute={b} y={-5} />
          </Box>
          <Link to={`/${b.name}/cell`} sx={{ ml: 1 }}>
            <Text bold>{b.name}</Text>
          </Link>
        </Box>
      </TableCell>
      <TableCell align="right">{t('level')} {b.level}</TableCell>
      {rankingSelected === 0 && (
        <TableCell align="right">{b.ascensions}</TableCell>
      )}
    </TableRow>
  );

  return rankings && (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('ranking')} {t(`lvl_${(rankings.topBrutes.length ? rankings.topBrutes[0]?.ranking : ranking) as BruteRanking}`)}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        >
          {currentEvent && (
            <Tooltip title={t('event')}>
              <RouterLink to={`/${bruteName || ''}/ranking/event`}>
                <StyledButton
                  image={rankingSelected === -1 ? '/images/rankings/button_selected.webp' : '/images/rankings/button.webp'}
                  imageHover={rankingSelected === -1 ? '/images/rankings/button_selected.webp' : '/images/rankings/button_hover.webp'}
                  shadow={false}
                  contrast={false}
                  sx={{
                    height: 65,
                    width: 65,
                  }}
                >
                  <Box
                    component="img"
                    src="/images/event.webp"
                    sx={{ width: 25 }}
                  />
                </StyledButton>
              </RouterLink>
            </Tooltip>
          )}
          {BruteRankings.map((bruteRanking) => (
            <Tooltip key={bruteRanking} title={t(`lvl_${bruteRanking}`)}>
              <RouterLink to={`/${bruteName || ''}/ranking/${bruteRanking}`}>
                <StyledButton
                  image={rankingSelected === bruteRanking ? '/images/rankings/button_selected.webp' : '/images/rankings/button.webp'}
                  imageHover={rankingSelected === bruteRanking ? '/images/rankings/button_selected.webp' : '/images/rankings/button_hover.webp'}
                  shadow={false}
                  contrast={false}
                  sx={{
                    height: 65,
                    width: 65,
                  }}
                >
                  <Box
                    component="img"
                    src={`/images/rankings/lvl_${bruteRanking}.webp`}
                    sx={{ height: 38, width: 38 }}
                  />
                </StyledButton>
              </RouterLink>
            </Tooltip>
          ))}
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
                  <TableCell>{t('brute')}</TableCell>
                  <TableCell align="right">{t('experience')}</TableCell>
                  {rankingSelected === 0 && (
                    <TableCell align="right">{t('ascensions')}</TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {rankings.topBrutes.map((b, index) => bruteRow(b, index))}
                {!!rankings.nearbyBrutes.length && (
                  <>
                    {rankings.position > 18 && (
                      <TableRow>
                        <TableCell component="th" scope="row" colSpan={3}>
                          ...
                        </TableCell>
                      </TableRow>
                    )}
                    {rankings.nearbyBrutes.map(
                      (b, index) => bruteRow(
                        b,
                        [16, 17].includes(rankings.position)
                          ? 15 + index
                          : rankings.position - 3 + index,
                      ),
                    )}
                  </>
                )}
                {/* Total */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    {t('total')}
                  </TableCell>
                  <TableCell component="th" scope="row" colSpan={rankingSelected === 0 ? 3 : 2} align="right">
                    {rankings.total}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          {!isMd && (
            <Grid item xs={12} md={3} sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src={`/images${theme.palette.mode === 'dark' ? '/dark' : ''}/arena/referee.webp`} sx={{ maxWidth: 1 }} />
            </Grid>
          )}
        </Grid>
      </Paper>
    </Page>
  );
};

export default RankingView;
