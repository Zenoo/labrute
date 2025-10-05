import { ClanWarGetAvailableFightersResponse, ClanWarGetResponse } from '@labrute/core';
import { ClanWarStatus } from '@labrute/prisma';
import { Alert as MuiAlert, Box, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import BruteRender from '../../../components/Brute/Body/BruteRender';
import Link from '../../../components/Link';
import Page from '../../../components/Page';
import StyledButton from '../../../components/StyledButton';
import Text from '../../../components/Text';
import { useAlert } from '../../../hooks/useAlert';
import catchError from '../../../utils/catchError';
import Server from '../../../utils/Server';
import { useBrute } from '../../../hooks/useBrute';

const ClanWarView = () => {
  const { t } = useTranslation();
  const { bruteName, id, warId } = useParams();
  const Alert = useAlert();
  const { brute, owner } = useBrute();

  const [war, setWar] = useState<ClanWarGetResponse | null>(null);
  const [brutes, setBrutes] = useState<ClanWarGetAvailableFightersResponse>([]);
  const [dayWatched, setDayWatched] = useState(+(localStorage.getItem(`clanWar-${warId}`) ?? ''));
  const [selectedFighters, setSelectedFighters] = useState<string[]>([]);
  const [usedBrutes, setUsedBrutes] = useState<ClanWarGetAvailableFightersResponse>([]);

  // Fetch clan war
  useEffect(() => {
    if (!id || !warId) return;

    Server.ClanWar.get(id, warId)
      .then((data) => {
        setWar(data);

        const fighters = data.attackerId === id
          ? data.fighters?.[0]?.attackers ?? []
          : data.fighters?.[0]?.defenders ?? [];

        setSelectedFighters(fighters.map((fighter) => fighter.id));
      })
      .catch(catchError(Alert));
  }, [Alert, id, warId]);

  // Fetch clan brutes
  useEffect(() => {
    if (!id || !warId || !brute) return;
    if (brute.clanId !== id || !owner) return;

    Server.ClanWar.getAvailableFighters(id, warId)
      .then(setBrutes)
      .catch(catchError(Alert));
  }, [Alert, brute, id, owner, warId]);

  // Fetch used brutes
  useEffect(() => {
    if (!id || !warId) return;

    Server.ClanWar.getUsedFighters(id, warId)
      .then(setUsedBrutes)
      .catch(catchError(Alert));
  }, [Alert, id, warId]);

  // Update day watched (localStorage)
  const updateDayWatched = (day: number) => () => {
    setDayWatched(day);
    localStorage.setItem(`clanWar-${warId}`, day.toString());
  };

  // Toggle fighter
  const toggleFighter = (fighterId: string) => () => {
    if (!id || !warId) return;

    const add = !selectedFighters.includes(fighterId);

    Server.ClanWar.toggleFighter(id, warId, fighterId, add).then(() => {
      if (add) {
        setSelectedFighters((prev) => [...prev, fighterId]);
      } else {
        setSelectedFighters((prev) => prev.filter((fid) => fid !== fighterId));
      }
    }).catch(catchError(Alert));
  };

  return (
    <Page title={`${t('clanWar')} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/clan/${id}`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>
          <Link to={`/${bruteName || ''}/clan/${war?.attacker.id}`} sx={{ display: 'inline' }}>
            {war?.attacker.name}
          </Link>
          {' '}{t('vs')}{' '}
          <Link to={`/${bruteName || ''}/clan/${war?.defender.id}`} sx={{ display: 'inline' }}>
            {war?.defender.name}
          </Link>
        </Text>
      </Paper>
      <Paper sx={{ bgcolor: 'background.paperLight', mt: -2 }}>
        {war && (
          <>
            <Text h3 center bold upperCase sx={{ my: 1 }}>{t(`clanWar.${war.status}`)}</Text>
            {/* FIGHTS */}
            {!!war.fights?.length && (
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
                    <TableCell>{t('date')}</TableCell>
                    <TableCell align="right">{t('attacker')}</TableCell>
                    <TableCell align="right">{t('defender')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {war.fights.map((fight, index) => (
                    <TableRow
                      key={fight.id}
                    >
                      <TableCell>
                        <Link
                          to={`fight/${fight.id}`}
                          onClick={updateDayWatched(index + 1)}
                        >
                          {t('day', { day: index + 1 })}
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Link
                          to={`fight/${fight.id}`}
                          onClick={updateDayWatched(index + 1)}
                          sx={{
                            fontWeight: 'bold',
                            color: dayWatched >= index + 1
                              ? fight.winner === fight.brute1?.name ? 'success.main' : 'error.main'
                              : undefined,
                          }}
                        >
                          {war.attacker.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Link
                          to={`fight/${fight.id}`}
                          onClick={updateDayWatched(index + 1)}
                          sx={{
                            fontWeight: 'bold',
                            color: dayWatched >= index + 1
                              ? fight.winner !== fight.brute1?.name ? 'success.main' : 'error.main'
                              : undefined,
                          }}
                        >
                          {war.defender.name}
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                  {/* EARLY END */}
                  {(war.fights.length < war.duration)
                    && (war.status === ClanWarStatus.waitingForRewards
                      || war.status === ClanWarStatus.finished)
                    && (
                      <TableRow>
                        <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                          <Text body2>{(Math.max(war.defenderWins, war.attackerWins) > (war.duration / 2)) ? t('clanWar.earlyEndVictories') : t('clanWar.earlyEnd')}</Text>
                        </TableCell>
                      </TableRow>
                    )}
                </TableBody>
              </Table>
            )}
            {brute?.clanId === id && owner && war.status === ClanWarStatus.ongoing && (
              <>
                <Text h3 center bold sx={{ my: 1 }}>{t('nextFighters')}</Text>
                <Text sx={{ mb: 1 }}>{t('nextFighters.desc')}</Text>

                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
                >
                  {brutes.map((b) => (
                    <StyledButton
                      key={b.id}
                      image="/images/arena/brute-bg.webp"
                      imageHover="/images/arena/brute-bg-hover.webp"
                      contrast={false}
                      shadow={false}
                      onClick={toggleFighter(b.id)}
                      sx={{
                        width: 190,
                        height: 102,
                        mx: 1,
                        my: 0.5,
                      }}
                    >
                      <Box sx={{
                        width: 185,
                        height: 93,
                        pl: 1,
                        pt: 0.5,
                        display: 'inline-block',
                        textAlign: 'left',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      >
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                        >
                          <Box display="flex" alignItems="center">
                            <Text bold color="secondary" sx={{ display: 'inline' }}>{b.name}</Text>
                          </Box>
                        </Box>
                        <Text bold smallCaps color="text.primary">
                          {t('level')}
                          <Text component="span" bold color="secondary"> {b.level}</Text>
                        </Text>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                          <Box component="img" src={`/images/rankings/lvl_${b.ranking}.webp`} sx={{ mr: 1 }} />
                          <Text bold color="text.primary" sx={{ lineHeight: 1 }}>{t(`lvl_${b.ranking}`)}</Text>
                        </Box>
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 115,
                          width: 70,
                          height: 1,
                        }}
                        >
                          <BruteRender
                            brute={b}
                            looking="left"
                            sx={{
                              filter: selectedFighters.includes(b.id)
                                ? 'drop-shadow(0 0 10px rgb(255, 0, 255))'
                                : undefined,
                            }}
                          />
                        </Box>
                      </Box>
                    </StyledButton>
                  ))}
                </Box>
                {brutes.length === 0 && (
                  <MuiAlert variant="filled" severity="warning">{t('nextFighters.noFighters')}</MuiAlert>
                )}
              </>
            )}
            {war.status === ClanWarStatus.ongoing && usedBrutes.length !== 0 && (
              <>
                <Text h3 center bold sx={{ my: 1 }}>{t('breakRoom')}</Text>
                <Text sx={{ mb: 1 }}>{t('breakRoom.desc')}</Text>

                <Box sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
                >
                  {usedBrutes.map((b) => (
                    <StyledButton
                      key={b.id}
                      image="/images/arena/brute-bg.webp"
                      imageHover="/images/arena/brute-bg-hover.webp"
                      contrast={false}
                      shadow={false}
                      sx={{
                        width: 190,
                        height: 102,
                        mx: 1,
                        my: 0.5,
                      }}
                    >
                      <Box sx={{
                        width: 185,
                        height: 93,
                        pl: 1,
                        pt: 0.5,
                        display: 'inline-block',
                        textAlign: 'left',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      >
                        <Box sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                        >
                          <Box display="flex" alignItems="center">
                            <Text bold color="secondary" sx={{ display: 'inline' }}>{b.name}</Text>
                          </Box>
                        </Box>
                        <Text bold smallCaps color="text.primary">
                          {t('level')}
                          <Text component="span" bold color="secondary"> {b.level}</Text>
                        </Text>
                        <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                          <Box component="img" src={`/images/rankings/lvl_${b.ranking}.webp`} sx={{ mr: 1 }} />
                          <Text bold color="text.primary" sx={{ lineHeight: 1 }}>{t(`lvl_${b.ranking}`)}</Text>
                        </Box>
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 115,
                          width: 70,
                          height: 1,
                        }}
                        >
                          <BruteRender
                            brute={b}
                            looking="left"
                          />
                        </Box>
                      </Box>
                    </StyledButton>
                  ))}
                </Box>
              </>
            )}
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ClanWarView;
