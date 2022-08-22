import { Fight } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { Box, Link, Tooltip, useMediaQuery } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import FightComponent from '../components/Arena/FightComponent.js';
import BoxBg from '../components/BoxBg.js';
import Page from '../components/Page.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import advertisings from '../utils/advertisings.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';
import FightMobileView from './mobile/FightMobileView.js';

const FightView = () => {
  const { t } = useTranslation();
  const { bruteName, fightId } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();
  const smallScreen = useMediaQuery('(max-width: 935px)');

  // Fight data
  const [fight, setFight] = useState<Fight | null>(null);

  // Fetch fight and brutes
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };

    if (!bruteName || !fightId) {
      navigate('/');
      return cleanup;
    }

    Server.Fight.get(bruteName, +fightId).then((result) => {
      if (isSubscribed) {
        setFight(result);
      }
    }).catch(catchError(Alert));

    return cleanup;
  }, [Alert, bruteName, fightId, navigate]);

  // Randomized adverts (must be different)
  const adverts = useMemo(() => {
    const { [randomBetween(0, advertisings.length - 1)]: firstAdvert } = advertisings;
    let { [randomBetween(0, advertisings.length - 1)]: secondAdvert } = advertisings;
    while (firstAdvert === secondAdvert) {
      secondAdvert = advertisings[randomBetween(0, advertisings.length - 1)];
    }
    return [firstAdvert, secondAdvert];
  }, []);

  if (smallScreen) {
    return (
      <FightMobileView
        bruteName={bruteName}
        adverts={adverts}
      />
    );
  }

  return (bruteName && fightId) ? (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`} headerUrl={`/${bruteName}/cell`}>
      <BoxBg
        src="/images/fight/background.gif"
        sx={{
          width: 930,
          height: 460,
        }}
      >
        <Box display="flex">
          {/* ADVERTS */}
          <Box sx={{ width: 236, mt: 5 }}>
            <Text color="text.primary" textAlign="center" typo="Poplar" upperCase>{t('fight.discoverGames')}</Text>
            {adverts.map((advert) => (
              <Tooltip title="TODO" key={advert}>
                <Link href="" sx={{ width: 200, display: 'inline-block' }}>
                  <Box
                    component="img"
                    src={`/images/redirects/${advert}`}
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

export default FightView;