import { BruteRanking, BruteWithBodyColors, ClanGetResponse } from '@labrute/core';
import { Box, Paper, Table, TableBody, TableCell, TableHead, TableRow, Tooltip } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Link from '../../components/Link';
import Page from '../../components/Page';
import Text from '../../components/Text';
import { useAlert } from '../../hooks/useAlert';
import { useAuth } from '../../hooks/useAuth';
import Server from '../../utils/Server';
import catchError from '../../utils/catchError';
import StyledButton from '../../components/StyledButton';
import BruteComponent from '../../components/Brute/Body/BruteComponent';
import { useConfirm } from '../../hooks/useConfirm';
import BrutePortrait from '../../components/Brute/Body/BrutePortait';
import FantasyButton from '../../components/FantasyButton';
import { HighlightOff } from '@mui/icons-material';

const ClanView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();
  const { user, updateData } = useAuth();
  const navigate = useNavigate();
  const Confirm = useConfirm();

  const [clan, setClan] = useState<ClanGetResponse | null>(null);

  const brute = useMemo(
    () => (user ? user.brutes.find((b) => b.name === bruteName) : null),
    [bruteName, user],
  );

  // Fetch clan
  useEffect(() => {
    if (!id) return;

    Server.Clan.get(+id).then((data) => {
      setClan(data);
    }).catch(catchError(Alert));
  }, [id, Alert]);

  // Go to cell page
  const goToCell = (name: string) => () => {
    navigate(`/${name}/cell`);
  };

  // Ask to join clan
  const askToJoin = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!brute || !clan) return;

    Confirm.open(t('joinAClan'), t('confirmJoin'), () => {
      Server.Clan.request(brute.name, clan.id).then(() => {
        Alert.open('success', t('requestSent'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          joinRequests: [...prevClan.joinRequests, brute],
        }) : null));
      }).catch(catchError(Alert));
    });
  };

  // Cancel join request
  const cancelRequest = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!brute || !clan) return;

    Confirm.open(t('cancelJoinRequest'), t('confirmCancelRequest'), () => {
      Server.Clan.cancelRequest(brute.name, clan.id).then(() => {
        Alert.open('success', t('requestCanceled'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          joinRequests: prevClan.joinRequests.filter((br) => br.id !== brute?.id),
        }) : null));
      }).catch(catchError(Alert));
    });
  };

  // Accept join request
  const acceptJoin = (requester: BruteWithBodyColors) => () => {
    if (!clan) return;

    Confirm.open(t('acceptJoinRequest'), t('confirmAcceptRequest'), () => {
      Server.Clan.accept(requester.name, clan.id).then(() => {
        Alert.open('success', t('requestAccepted'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          joinRequests: prevClan.joinRequests.filter((br) => br.id !== requester.id),
          brutes: [...prevClan.brutes, requester],
        }) : null));
      }).catch(catchError(Alert));
    });
  };

  // Reject join request
  const rejectJoin = (requester: BruteWithBodyColors) => () => {
    if (!clan) return;

    Confirm.open(t('rejectJoinRequest'), t('confirmRejectRequest'), () => {
      Server.Clan.reject(requester.name, clan.id).then(() => {
        Alert.open('success', t('requestRejected'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          joinRequests: prevClan.joinRequests.filter((br) => br.id !== requester.id),
        }) : null));
      }).catch(catchError(Alert));
    });
  };

  // Remove brute from clan
  const removeFromClan = (clanBrute: BruteWithBodyColors) => (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!clan) return;

    Confirm.open(t('removeFromClan'), t('confirmRemoveFromClan'), () => {
      Server.Clan.remove(clanBrute.name, clan.id).then(() => {
        Alert.open('success', t('bruteRemoved'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          brutes: prevClan.brutes.filter((br) => br.id !== clanBrute.id),
        }) : null));
      }).catch(catchError(Alert));
    });
  };

  // Leave clan
  const leave = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!clan || !brute) return;

    Confirm.open(t('leaveClan'), t('confirmLeaveClan'), () => {
      Server.Clan.leave(brute.name, clan.id).then(() => {
        Alert.open('success', t('clanLeft'));

        // Update clan
        setClan((prevClan) => (prevClan ? ({
          ...prevClan,
          brutes: prevClan.brutes.filter((br) => br.id !== brute?.id),
        }) : null));

        // Update user data
        updateData((data) => (data ? ({
          ...data,
          brutes: data.brutes.map((b) => (b.name === brute.name ? {
            ...b, clanId: null,
          } : b)),
        }) : null));

        // Redirect to cell
        navigate(`/${brute.name}/cell`);
      }).catch(catchError(Alert));
    });
  };

  return clan && (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName || ''}/cell`}>
      <Paper sx={{ mx: 4 }}>
        <Text h3 bold upperCase typo="handwritten" sx={{ mr: 2 }}>{t('clan')} {clan.name}</Text>
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
          {user && brute?.clanId === clan.id && (
            <Link to={`/clan/${clan.id}/forum`}>
              <Text bold smallCaps>{t('forum')}</Text>
            </Link>
          )}
          {user
            && brute?.clanId !== clan.id
            && !clan.joinRequests.find((request) => request.id === brute?.id)
            && (
              <Link href="#" onClick={askToJoin}>
                <Text bold smallCaps>{t('askToJoin')}</Text>
              </Link>
            )}
          {user
            && brute?.clanId !== clan.id
            && clan.joinRequests.find((request) => request.id === brute?.id)
            && (
              <Link href="#" onClick={cancelRequest}>
                <Text bold smallCaps>{t('cancelJoinRequest')}</Text>
              </Link>
            )}
          {user && brute?.clanId === clan.id && (
            <Link href="#" onClick={leave}>
              <Text bold smallCaps>{t('leave')}</Text>
            </Link>
          )}
        </Box>
        <Text bold h4 sx={{ my: 1 }}>{clan.brutes.length}/{clan.limit} {t('brutes')}</Text>
        {/* MEMBERS */}
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        >
          {clan.brutes.map((clanBrute) => (
            <StyledButton
              key={clanBrute.name}
              image="/images/arena/brute-bg.gif"
              imageHover="/images/arena/brute-bg-hover.gif"
              contrast={false}
              shadow={false}
              onClick={goToCell(clanBrute.name)}
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
                overflow: 'hidden',
                textAlign: 'left',
                position: 'relative',
              }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
                >
                  <Box display="flex" alignItems="center">
                    {clan.masterId === clanBrute.id && (
                      <Box component="img" src="/images/clan/master.gif" sx={{ mr: 0.5, width: 7 }} />
                    )}
                    {/* Button to remove brute from clan */}
                    {clan.masterId === brute?.id && clan.masterId !== clanBrute.id && (
                      <Tooltip title={t('removeFromClan')}>
                        <HighlightOff
                          onClick={removeFromClan(clanBrute)}
                          fontSize="small"
                          color="error"
                          sx={{ mr: 0.5 }}
                        />
                      </Tooltip>
                    )}
                    <Text bold color="secondary" sx={{ display: 'inline' }}>{clanBrute.name}</Text>
                  </Box>
                </Box>
                <Text bold smallCaps color="text.primary">
                  {t('level')}
                  <Text component="span" bold color="secondary"> {clanBrute.level}</Text>
                </Text>
                <Box sx={{ display: 'flex', alignItems: 'center', width: 115 }}>
                  <Box component="img" src={`/images/rankings/lvl_${clanBrute.ranking}.png`} sx={{ mr: 1 }} />
                  <Text bold color="text.primary" sx={{ lineHeight: 1 }}>{t(`lvl_${clanBrute.ranking as BruteRanking}`)}</Text>
                </Box>
                <BruteComponent
                  brute={clanBrute}
                  sx={{
                    position: 'absolute',
                    height: 160,
                    top: 0,
                    left: 92,
                  }}
                />
              </Box>
            </StyledButton>
          ))}
        </Box>
        {/* JOIN REQUESTS */}
        {clan.masterId === brute?.id && !!clan.joinRequests.length && (
          <>
            <Text bold h4 sx={{ my: 1 }}>{t('joinRequests')}</Text>
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
                  <TableCell>{t('ranking')}</TableCell>
                  <TableCell>{t('brute')}</TableCell>
                  <TableCell align="right">{t('level')}</TableCell>
                  <TableCell align="right">{t('actions')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {clan.joinRequests.map((requester) => (
                  <TableRow
                    key={requester.id}
                  >
                    <TableCell component="th" scope="row">
                      <Box component="img" src={`/images/rankings/lvl_${requester.ranking}.png`} sx={{ width: 20 }} />
                    </TableCell>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <BrutePortrait
                          brute={requester}
                          shadow={false}
                          sx={{ width: 40, mr: 1, filter: null, }}
                        />
                        <Link to={`/${requester.name}/cell`}>
                          <Text bold>{requester.name}</Text>
                        </Link>
                      </Box>
                    </TableCell>
                    <TableCell align="right">{t('level')} {requester.level}</TableCell>
                    <TableCell align="right">
                      <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 1,
                        gap: 1,
                      }}
                      >
                        <FantasyButton color="success" onClick={acceptJoin(requester)}>{t('accept')}</FantasyButton>
                        <FantasyButton color="error" onClick={rejectJoin(requester)}>{t('reject')}</FantasyButton>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </Paper>
    </Page>
  );
};

export default ClanView;
