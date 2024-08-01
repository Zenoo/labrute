import { ClanWarGetResponse } from '@labrute/core';
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import catchError from '../../utils/catchError';
import Server from '../../utils/Server';
import { ClanWarStatus } from '@labrute/prisma';
import Link from '../../components/Link';

export const ClanWarView = () => {
  const { t } = useTranslation();
  const { bruteName, id, warId } = useParams();
  const Alert = useAlert();

  const [war, setWar] = useState<ClanWarGetResponse | null>(null);

  // Fetch clan war
  useEffect(() => {
    if (!id || !warId) return;

    Server.ClanWar.get(id, warId)
      .then(setWar)
      .catch(catchError(Alert));
  }, [Alert, id, warId]);

  return (
    <Page title={`${t('clanWar')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/clan/${id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{war?.attacker.name} {t('vs')} {war?.defender.name}</Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {war && (
          <>
            {(war.status === ClanWarStatus.accepted || war.status === ClanWarStatus.ongoing) && (
              <Text>SELECT NEXT FIGHTERS</Text>
            )}
            {/* FIGHTS */}
            {war.fights.length && (
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
                    <TableCell>{t('fights')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {war.fights.map((fight, index) => (
                    <TableRow
                      key={fight.id}
                    >
                      <TableCell>
                        <Link to={`/${fight.brute1.name}/fight/${fight.id}`}>
                          {t('day', { day: index + 1 })}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </>
        )}
      </Paper>
    </Page>
  );
};
