import { ATTACK_DURATION, MOVE_DURATION } from '@eternaltwin/labrute-core/constants';
import { Brute, Fight } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { Box, Link, Tooltip, useMediaQuery } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import FightComponent from '../components/Arena/FightComponent.js';
import BoxBg from '../components/BoxBg.js';
import Page from '../components/Page.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import advertisings from '../utils/advertisings.js';
import catchError from '../utils/catchError.js';
import arrive from '../utils/fight/arrive.js';
import attemptHit from '../utils/fight/attemptHit.js';
import death from '../utils/fight/death.js';
import evade from '../utils/fight/evade.js';
import { AnimationFighter } from '../utils/fight/findFighter.js';
import hit from '../utils/fight/hit.js';
import leave from '../utils/fight/leave.js';
import moveBack from '../utils/fight/moveBack.js';
import moveTo from '../utils/fight/moveTo.js';
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
  const [brutes, setBrutes] = useState<Brute[]>([]);

  // Fight state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [fighters, setFighters] = useState<AnimationFighter[]>([]);

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

  // Initialize fighters when everything is ready
  useEffect(() => {
    if (!fight || !brutes.length) {
      return;
    }

    setFighters(fight.data.fighters.map((fighter) => {
      const isFromLeftTeam = fighter.master
        ? fighter.master === fight.brute_1
        : fighter.name === fight.brute_1;

      return {
        name: fighter.name,
        master: fighter.master,
        type: fighter.type,
        team: isFromLeftTeam ? 'left' : 'right',
        inverted: isFromLeftTeam,
        x: isFromLeftTeam ? -150 : 550,
        y: -150,
        animation: 'iddle',
        distanceBetweenFighters: fighter.type === 'pet' && fighter.name === 'bear' ? 100 : 60,
        brute: fighter.type === 'brute' ? brutes.find((b) => b.name === fighter.name) : undefined,
      };
    }));
  }, [brutes, fight]);

  // Start animation when everything is ready
  useEffect(() => {
    let timeout: number | null = null;
    const resetTimeout = () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };

    if (fight && brutes.length) {
      const { data: { steps } } = fight;
      const { [currentStep]: step } = steps;

      // Stop loop at the end of the fight
      if (currentStep >= steps.length) {
        if (timeout) window.clearTimeout(timeout);
        return resetTimeout;
      }

      // Animate actions
      switch (step.action) {
        case 'moveTo': {
          moveTo(setFighters, step);
          break;
        }
        case 'moveBack': {
          moveBack(setFighters, step);
          break;
        }
        case 'arrive': {
          arrive(setFighters, step);
          break;
        }
        case 'leave': {
          leave(setFighters, step);
          break;
        }
        case 'attemptHit': {
          attemptHit(setFighters, step);
          break;
        }
        case 'hit': { // TODO: Rework animation component to add staggered animation
          hit(setFighters, step);
          break;
        }
        case 'death': {
          death(setFighters, step);
          break;
        }
        case 'evade': { // TODO: Rework animation component to add Y offset
          evade(setFighters, step);
          break;
        }
        default:
          break;
      }

      const triggerNextAnimation = () => {
        setCurrentStep((prevStep) => prevStep + 1);
      };

      // Timeout for animated actions only
      switch (step.action) {
        case 'arrive':
        case 'leave':
        case 'moveTo':
        case 'moveBack':
        case 'death':
          timeout = window.setTimeout(triggerNextAnimation, MOVE_DURATION);
          break;
        case 'hit':
        case 'block':
        case 'evade':
          timeout = window.setTimeout(triggerNextAnimation, ATTACK_DURATION);
          break;
        default:
          triggerNextAnimation();
          break;
      }
    }

    return resetTimeout;
  }, [brutes.length, currentStep, fight]);

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
        setFight(result.fight);
        setBrutes(result.brutes);
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

  const toggleLogs = useCallback(() => {
    setDisplayLogs((prev) => !prev);
  }, []);

  if (smallScreen) {
    return (
      <FightMobileView
        bruteName={bruteName}
        fight={fight}
        brutes={brutes}
        fighters={fighters}
        displayLogs={displayLogs}
        toggleLogs={toggleLogs}
        adverts={adverts}
      />
    );
  }

  return (bruteName && fightId) && (
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
          <FightComponent
            fight={fight}
            brutes={brutes}
            fighters={fighters}
            displayLogs={displayLogs}
            t={t}
            toggleLogs={toggleLogs}
          />
        </Box>
      </BoxBg>
    </Page>
  );
};

export default FightView;
