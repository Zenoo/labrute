import { ClanWarGetHistoryResponse } from '@labrute/core';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import moment from 'moment';
import Loader from '../../components/Loader';
import { ClanWarType } from '@labrute/prisma';

export const ClanWarHistoryView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();

  const [wars, setWars] = useState<ClanWarGetHistoryResponse | null>(null);

  // Fetch clan war
  useEffect(() => {
    if (!id) return;

    Server.ClanWar.getHistory(id)
      .then(setWars)
      .catch(catchError(Alert));
  }, [Alert, id]);

  return (
    <Page title={`${t('clanWarHistory')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/clan/${id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('clanWarHistory')}</Text>
      </Paper>
      <Paper sx={{
        bgcolor: 'background.paperLight',
        mt: -2,
        px: 0,
        overflowX: 'auto',
      }}
      >
        <Table sx={{
          maxWidth: 1,
          mx: 2,
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
            py: 0.5,
            px: 1,
            border: '1px solid',
            borderColor: 'background.default',
          },
        }}
        >
          <TableHead>
            <TableRow>
              <TableCell>{t('date')}</TableCell>
              <TableCell align="right">{t('attacker')}</TableCell>
              <TableCell align="right">{t('defender')}</TableCell>
              <TableCell align="right">{t('W/L')}</TableCell>
              <TableCell align="right">{t('elo')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wars ? wars.map((war) => {
              const eloChange = war.attackerId === id
                ? war.attackerEloChange
                : war.defenderEloChange;

              return (
                <TableRow
                  key={war.id}
                >
                  <TableCell component="th" scope="row">
                    {moment.utc(war.date).format('DD/MM/YYYY')}
                    {war.type === ClanWarType.friendly && (
                      <Tooltip title={t('clanWar.friendly')}>
                        <Box component="img" src="/images/clan/friendly.webp" sx={{ width: 8, ml: 0.5 }} />
                      </Tooltip>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/${bruteName}/clan/${id}/war/${war.id}`}>
                      <Text
                        bold
                        sx={{
                          color: war.winnerId
                            ? war.winnerId === war.attackerId
                              ? 'success.main'
                              : 'error.main'
                            : undefined,
                        }}
                      >
                        {war.attacker.name}
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Link to={`/${bruteName}/clan/${id}/war/${war.id}`}>
                      <Text
                        bold
                        sx={{
                          color: war.winnerId
                            ? war.winnerId === war.defenderId
                              ? 'success.main'
                              : 'error.main'
                            : undefined,
                        }}
                      >
                        {war.defender.name}
                      </Text>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Text bold>
                      <Text component="span" bold sx={{ color: 'success.main' }}>{war.defenderId === id ? war.defenderWins : war.attackerWins}</Text>
                      /
                      <Text component="span" bold sx={{ color: 'error.main' }}>{war.defenderId === id ? war.attackerWins : war.defenderWins}</Text>
                    </Text>
                  </TableCell>
                  <TableCell align="right">
                    <Text
                      bold
                      sx={{
                        color: eloChange < 0 ? 'error.main' : 'success.main'
                      }}
                    >
                      {eloChange > 0 ? '+' : ''}{eloChange}
                    </Text>
                  </TableCell>
                </TableRow>
              );
            }) : (
              <TableRow>
                <TableCell colSpan={4}>
                  <Loader size={20} />
                </TableCell>
                <TableCell />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Page>
  );
};
