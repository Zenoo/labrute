import { Brute, Fight } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { Box, Link, Tooltip } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import BoxBg from '../components/BoxBg.js';
import Page from '../components/Page.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import advertisings from '../utils/advertisings.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';

const FightView = () => {
  const { t } = useTranslation();
  const { bruteName, fightId } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();

  const [fight, setFight] = useState<Fight | null>(null);
  const [brute1, setBrute1] = useState<Brute | null>(null);
  const [brute2, setBrute2] = useState<Brute | null>(null);

  console.log(fight, brute1, brute2);

  // Fetch fight and brutes
  useEffect(() => {
    let isSubscribed = true;
    const cleanup = () => { isSubscribed = false; };

    if (!bruteName || !fightId) {
      navigate('/');
      return cleanup;
    }

    Server.Fight.get(bruteName, +fightId).then((fetchedFight) => {
      if (isSubscribed) {
        setFight(fetchedFight);

        Server.Brute.get(fetchedFight.brute_1).then((fetchedBrute) => {
          if (isSubscribed) {
            setBrute1(fetchedBrute);
          }
        }).catch(catchError(Alert));
        Server.Brute.get(fetchedFight.brute_2).then((fetchedBrute) => {
          if (isSubscribed) {
            setBrute2(fetchedBrute);
          }
        }).catch(catchError(Alert));
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

  return (bruteName && fightId) ? (
    <Page title={`${bruteName || ''} ${t('MyBrute')}`}>
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
            <Text bold color="text.primary" textAlign="center">{t('fight.discoverGames')}</Text>
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
          <BoxBg
            src="/images/game/background/179.jpg"
            sx={{
              width: 500,
              height: 300,
              border: 1,
              borderColor: 'secondary.main',
              alignSelf: 'center',
              ml: 5,
            }}
          >
            .
          </BoxBg>
        </Box>
      </BoxBg>
    </Page>
  ) : null;
};

export default FightView;
