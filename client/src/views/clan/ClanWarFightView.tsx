import { FightGetResponse } from '@labrute/core';
import { Box, Link, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import Server from '../../utils/Server';
import { useAlert } from '../../hooks/useAlert';
import { useLanguage } from '../../hooks/useLanguage';
import { getRandomAd } from '../../utils/ads';
import FightMobileView from '../mobile/FightMobileView';
import Page from '../../components/Page';
import BoxBg from '../../components/BoxBg';
import Text from '../../components/Text';
import FightComponent from '../../components/Arena/FightComponent';
import catchError from '../../utils/catchError';

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

  if (smallScreen) {
    return (
      <FightMobileView
        headerUrl=".."
        ads={ads}
        fight={fight}
      />
    );
  }

  return (id && fightId) ? (
    <Page title={t('MyBrute')} headerUrl="..">
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
          {/* FIGHT */}
          <Box sx={{ ml: 5, alignSelf: 'center' }}>
            <FightComponent fight={fight} />
          </Box>
        </Box>
      </BoxBg>
    </Page>
  ) : null;
};

export default ClanWarFightView;
