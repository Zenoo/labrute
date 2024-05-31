import { BruteRanking, BruteRankings } from '@labrute/core';
import { Box, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Page from '../components/Page';
import StyledButton from '../components/StyledButton';
import Text from '../components/Text';
import useStateAsync from '../hooks/useStateAsync';
import Server from '../utils/Server';
import Link from '../components/Link';
import BruteRender from '../components/Brute/Body/BruteRender';
import { Brute } from '@labrute/prisma';

const RankingView = () => {
  const { t } = useTranslation();
  const { bruteName, rank } = useParams();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const ranking = useMemo(() => (typeof rank === 'undefined' ? undefined : +rank), [rank]);

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

  const bruteRow = (brute: Brute, index: number) => (
    <TableRow
      key={brute.id}
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
            <BruteRender brute={brute} y={-5} />
          </Box>
          <Link to={`/${brute.name}/cell`} sx={{ ml: 1 }}>
            <Text bold>{brute.name}</Text>
          </Link>
        </Box>
      </TableCell>
      <TableCell align="right">{t('level')} {brute.level}</TableCell>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {rankings.topBrutes.map((brute, index) => bruteRow(brute, index))}
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
                      (brute, index) => bruteRow(brute, rankings.position - 3 + index),
                    )}
                  </>
                )}
                {/* Total */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    {t('total')}
                  </TableCell>
                  <TableCell component="th" scope="row" colSpan={2} align="right">
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
