import { Fight, PetName } from '@eternaltwin/labrute-core/types';
import { FIGHTER_WIDTH } from '@eternaltwin/labrute-core/constants';
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
import adjustPosition from '../utils/fight/adjustPosition.js';
import arrive from '../utils/fight/arrive.js';
import attemptHit from '../utils/fight/attemptHit.js';
import death from '../utils/fight/death.js';
import disarm from '../utils/fight/disarm.js';
import eat from '../utils/fight/eat.js';
import evade from '../utils/fight/evade.js';
import { AnimationFighter } from '../utils/fight/findFighter.js';
import getMoveDuration from '../utils/fight/getMoveDuration.js';
import heal from '../utils/fight/heal.js';
import hit from '../utils/fight/hit.js';
import leave from '../utils/fight/leave.js';
import moveBack from '../utils/fight/moveBack.js';
import moveTo from '../utils/fight/moveTo.js';
import saboteur from '../utils/fight/saboteur.js';
import steal from '../utils/fight/steal.js';
import survive from '../utils/fight/survive.js';
import throwWeapon from '../utils/fight/throwWeapon.js';
import trash from '../utils/fight/trash.js';
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

  // Fight state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [fighters, setFighters] = useState<AnimationFighter[]>([]);

  // Logs display
  const [displayLogs, setDisplayLogs] = useState(false);

  // Initialize fighters when everything is ready
  useEffect(() => {
    if (!fight) {
      return;
    }

    setFighters(fight.data.fighters.map((fighter) => {
      const isFromLeftTeam = fighter.master
        ? fighter.master === fight.brute_1
        : fighter.name === fight.brute_1;

      const type = fighter.type === 'brute' ? 'brute' : fighter.name as PetName;

      return {
        name: fighter.name,
        data: fighter.data,
        master: fighter.master,
        type: fighter.type,
        team: isFromLeftTeam ? 'left' : 'right',
        inverted: isFromLeftTeam,
        x: adjustPosition(-150, 'x', fighter),
        y: adjustPosition(150, 'y', fighter),
        animation: 'iddle',
        width: FIGHTER_WIDTH[type],
        hp: fighter.hp,
        maxHp: fighter.maxHp,
        weapons: fighter.weapons,
        activeWeapon: null,
      };
    }));
  }, [fight]);

  // Start animation when everything is ready
  useEffect(() => {
    let timeout: number | null = null;
    const resetTimeout = () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };

    if (fight) {
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
        case 'hit':
        case 'hammer':
        case 'flashFlood':
        case 'poison': { // TODO: Rework animation component to add staggered animation
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
        case 'saboteur': {
          saboteur(setFighters, step);
          break;
        }
        case 'disarm': {
          disarm(setFighters, step);
          break;
        }
        case 'steal': {
          steal(setFighters, step);
          break;
        }
        case 'throw': {
          throwWeapon(setFighters, step);
          break;
        }
        case 'trash': {
          trash(setFighters, step);
          break;
        }
        case 'eat': {
          eat(setFighters, step);
          break;
        }
        case 'heal': {
          heal(setFighters, step);
          break;
        }
        case 'survive': {
          survive(setFighters, step);
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
          timeout = window.setTimeout(triggerNextAnimation, getMoveDuration('arrive', step.fighter) + 1);
          break;
        case 'leave':
        case 'moveTo':
        case 'moveBack':
          timeout = window.setTimeout(triggerNextAnimation, getMoveDuration('run', step.fighter) + 1);
          break;
        case 'death':
          timeout = window.setTimeout(triggerNextAnimation, getMoveDuration('death', step.fighter) + 1);
          break;
        case 'hit':
        case 'block':
        case 'evade':
          timeout = window.setTimeout(triggerNextAnimation, getMoveDuration('hit', step.fighter) + 1);
          break;
        default:
          triggerNextAnimation();
          break;
      }
    }

    return resetTimeout;
  }, [currentStep, fight]);

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

  const toggleLogs = useCallback(() => {
    setDisplayLogs((prev) => !prev);
  }, []);

  if (smallScreen) {
    return (
      <FightMobileView
        bruteName={bruteName}
        fight={fight}
        fighters={fighters}
        displayLogs={displayLogs}
        toggleLogs={toggleLogs}
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
            fighters={fighters}
            displayLogs={displayLogs}
            t={t}
            toggleLogs={toggleLogs}
          />
        </Box>
      </BoxBg>
    </Page>
  ) : null;
};

export default FightView;
