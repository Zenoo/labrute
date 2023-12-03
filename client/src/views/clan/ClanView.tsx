import { BruteRanking, ClanGetResponse } from '@labrute/core';
import { Box, Paper } from '@mui/material';
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

const ClanView = () => {
  const { t } = useTranslation();
  const { bruteName, id } = useParams();
  const Alert = useAlert();
  const { user } = useAuth();
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
        </Box>
        <Text bold h4 sx={{ my: 1 }}>{clan.brutes.length}/{clan.limit} {t('brutes')}</Text>
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
                      <Box component="img" src="/images/clan/master.png" sx={{ mr: 0.5 }} />
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
      </Paper>
    </Page>
  );
};

export default ClanView;
