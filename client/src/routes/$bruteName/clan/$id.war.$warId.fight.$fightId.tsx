import { Fighter, FightGetResponse } from '@labrute/core';
import { Box, Table, TableBody, TableCell, TableHead, TableRow, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Server from '../../../utils/Server';
import { useAlert } from '../../../hooks/useAlert';
import { useLanguage } from '../../../hooks/useLanguage';
import { getRandomAd } from '../../../utils/ads';
import Page from '../../../components/Page';
import BoxBg from '../../../components/BoxBg';
import Text from '../../../components/Text';
import FightComponent from '../../../components/Arena/FightComponent';
import catchError from '../../../utils/catchError';
import BruteTooltip from '../../../components/Brute/BruteTooltip';
import Link from '../../../components/Link';
import FightMobileView from '../../../mobile/FightMobileView';

const ClanWarFightView = () => {
  const { t } = useTranslation();
  const { id, warId, fightId } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const smallScreen = useMediaQuery('(max-width: 935px)');
  const { language } = useLanguage();
  const { palette: { mode } } = useTheme();

  // Fight data
  const [fight, setFight] = useState<FightGetResponse | null>(null);

  // Fetch fight
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };

    if (!id || !warId || !fightId) {
      navigate('/');
      return cleanup;
    }

    Server.ClanWar.getFight(warId, fightId).then((result) => {
      if (isSubscribed) {
        setFight(result);
      }
    }).catch(catchError(Alert));

    return cleanup;
  }, [Alert, fightId, id, navigate, warId]);

  // Randomized adverts (must be different)
  const ads = useMemo(() => {
    const firstAd = getRandomAd(language);
    const secondAd = getRandomAd(language, firstAd.name);
    return [firstAd, secondAd];
  }, [language]);

  const fighters = useMemo(() => (fight ? JSON.parse(fight.fighters) as Fighter[] : []), [fight]);
  const attackers = useMemo(() => fighters.filter((f) => f.team === 'L'), [fighters]);
  const defenders = useMemo(() => fighters.filter((f) => f.team === 'R'), [fighters]);

  if (smallScreen) {
    return (
      <FightMobileView
        headerUrl=".."
        ads={ads}
        fight={fight}
        attackers={attackers}
        defenders={defenders}
      />
    );
  }

  return (id && fightId) ? (
    <Page title={t('fight')} headerUrl="..">
      <BoxBg
        src={`/images${mode === 'dark' ? '/dark' : ''}/fight/background.webp`}
        sx={{
          width: 930,
          height: 460,
        }}
      >
        <Box display="flex">
          {/* ADVERTS */}
          <Box sx={{ width: 236, mt: 5 }}>
            <Text color="text.primary" center typo="GameFont" upperCase sx={{ ml: 2, fontSize: 10 }}>{t('fight.discoverGames')}</Text>
            {ads.map((ad) => (
              <Tooltip title={t(`${ad.name}.desc`)} key={ad.name}>
                <Link href={ad.url} target="_blank" sx={{ width: 200, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${ad.illustration}`}
                    sx={{ width: 1, border: 2, borderColor: 'common.white', ml: 3 }}
                  />
                </Link>
              </Tooltip>
            ))}
          </Box>
          <Box sx={{ mt: 2, ml: 5, alignSelf: 'center' }}>
            {/* FIGHT */}
            <FightComponent fight={fight} />
            {/* FIGHTERS */}
            <Box sx={{
              ml: smallScreen ? 0 : 5,
              maxWidth: 500,
              maxHeight: 75,
              overflowY: 'auto',
            }}
            >
              <Table sx={{
                maxWidth: 500,
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
                    <TableCell>{t('attackers')}</TableCell>
                    <TableCell align="right">{t('defenders')}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Array.from({
                    length: Math.max(attackers.length, defenders.length)
                  }).map((_, i) => (
                    <TableRow key={attackers[i]?.name || defenders[i]?.name}>
                      <TableCell>
                        {attackers[i] && (
                          <BruteTooltip fighter={attackers[i]}>
                            <Text bold color="secondary">
                              <Link to={`/${attackers[i].name}/cell`}>{attackers[i].name}</Link>
                            </Text>
                          </BruteTooltip>
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {defenders[i] && (
                          <BruteTooltip fighter={defenders[i]}>
                            <Text bold color="secondary">
                              <Link to={`/${defenders[i].name}/cell`}>{defenders[i].name}</Link>
                            </Text>
                          </BruteTooltip>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Box>
        </Box>
      </BoxBg>
    </Page>
  ) : null;
};

export default ClanWarFightView;
