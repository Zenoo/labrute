import { Brute, Fight, PetName, StepFighter } from '@eternaltwin/labrute-core/types';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';
import { Rtt } from '@mui/icons-material';
import { Box, Button, IconButton, Link, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router';
import AnimatedBear from '../components/animations/bear/AnimatedBear.js';
import BoxBg from '../components/BoxBg.js';
import BruteComponent from '../components/Brute/Body/BruteComponent.js';
import Page from '../components/Page.js';
import Text from '../components/Text.js';
import { useAlert } from '../hooks/useAlert.js';
import advertisings from '../utils/advertisings.js';
import catchError from '../utils/catchError.js';
import Server from '../utils/Server.js';
import translateFightStep from '../utils/translateFightStep.js';

interface AnimationFighter {
  name: string;
  master?: string;
  type: 'brute' | 'pet';
  team: 'left' | 'right';
  x: number;
  y: number;
  animation: 'iddle' | 'run' | 'attack' | 'hit';
  distanceBetweenFighters: number;
  brute?: Brute;
}

const MOVE_DURATION = 500;
const ATTACK_DURATION = 470;

const leftPositions = [
  { x: 40, y: 120 },
  { x: 20, y: 135 },
  { x: 40, y: 150 },
  { x: 20, y: 165 },
  { x: 40, y: 180 },
  { x: 20, y: 195 },
  { x: 40, y: 210 },
];

const rightPositions = [
  { x: 410, y: 120 },
  { x: 430, y: 135 },
  { x: 410, y: 150 },
  { x: 430, y: 165 },
  { x: 410, y: 180 },
  { x: 430, y: 195 },
  { x: 410, y: 210 },
];

const findFighter = (
  fighters: AnimationFighter[],
  stepFighter?: StepFighter,
) => (stepFighter ? fighters.find((f) => f.name === stepFighter.name
  && f.type === stepFighter.type
  && f.master === stepFighter.master) : undefined);

const fightersEqual = (
  a: AnimationFighter | StepFighter | undefined,
  b: AnimationFighter | StepFighter | undefined,
) => !a || !b || (a.name === b.name
  && a.type === b.type
  && a.master === b.master);

const getAvailablePositions = (fighters: AnimationFighter[], side: 'left' | 'right') => {
  const positions = side === 'left' ? leftPositions : rightPositions;

  return positions.filter((p) => fighters.every((f) => f.x !== p.x || f.y !== p.y));
};

const getRandomPosition = (fighters: AnimationFighter[], side: 'left' | 'right') => {
  const availablePositions = getAvailablePositions(fighters, side);
  const random = randomBetween(0, availablePositions.length - 1);

  return availablePositions[random];
};

const FightView = () => {
  const { t } = useTranslation();
  const { bruteName, fightId } = useParams();
  const Alert = useAlert();
  const navigate = useNavigate();

  const [fight, setFight] = useState<Fight | null>(null);
  const [brutes, setBrutes] = useState<Brute[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [fighters, setFighters] = useState<AnimationFighter[]>([]);

  const [displayLogs, setDisplayLogs] = useState(false);

  // Update fighters
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
        x: isFromLeftTeam ? -100 : 500,
        y: 50,
        animation: 'iddle',
        distanceBetweenFighters: fighter.type === 'pet' && fighter.name === 'bear' ? 100 : 60,
        brute: fighter.type === 'brute' ? brutes.find((b) => b.name === fighter.name) : undefined,
      };
    }));
  }, [brutes, fight]);

  // Startup animation
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
          // Move fighter
          setFighters((prevFighters) => prevFighters.map((fighter) => {
            if (!fightersEqual(step.fighter, fighter)) {
              return fighter;
            }

            const target = findFighter(prevFighters, step.target);

            if (!target) {
              console.error('Target not found');
              return fighter;
            }

            return {
              ...fighter,
              animation: 'run',
              x: target.team === 'left' ? target.x + fighter.distanceBetweenFighters : target.x - fighter.distanceBetweenFighters,
              y: target.y,
            };
          }));
          break;
        }
        case 'moveBack': {
          // Move fighter
          setFighters((prevFighters) => prevFighters.map((fighter) => {
            if (!fightersEqual(step.fighter, fighter)) {
              return fighter;
            }

            const backPosition = getRandomPosition(prevFighters, fighter.team);

            return {
              ...fighter,
              animation: 'run',
              x: backPosition.x,
              y: backPosition.y,
            };
          }));
          break;
        }
        case 'arrive': {
          // Move fighter
          setFighters((prevFighters) => prevFighters.map((fighter) => {
            if (!fightersEqual(step.fighter, fighter)) {
              return fighter;
            }

            const position = getRandomPosition(prevFighters, fighter.team);

            return {
              ...fighter,
              animation: 'iddle',
              x: position.x,
              y: position.y,
            };
          }));
          break;
        }
        case 'leave': {
          // Move fighter
          setFighters((prevFighters) => prevFighters.map((fighter) => {
            if (!fightersEqual(step.fighter, fighter)) {
              return fighter;
            }

            return {
              ...fighter,
              animation: 'run',
              x: fighter.team === 'left' ? -100 : 500,
            };
          }));
          break;
        }
        case 'attemptHit': {
          // Set hitting animation for fighters
          setFighters((prevFighters) => prevFighters.map((fighter) => {
            if (fightersEqual(step.fighter, fighter)) {
              return {
                ...fighter,
                animation: 'attack',
              };
            }
            if (fightersEqual(step.target, fighter)) {
              return {
                ...fighter,
                animation: 'hit',
              };
            }

            return fighter;
          }));
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

  const setRandomPositions = useCallback(() => {
    if (!fight || !brutes.length) {
      return;
    }

    const usedPositions: { x: number, y: number }[] = [];
    setFighters((prev) => prev.map((fighter) => {
      const availablePositions = fighter.team === 'left'
        ? leftPositions.filter((p) => !usedPositions.find((u) => u.x === p.x && u.y === p.y))
        : rightPositions.filter((p) => !usedPositions.find((u) => u.x === p.x && u.y === p.y));
      const { [randomBetween(0, availablePositions.length - 1)]: position } = availablePositions;
      usedPositions.push(position);
      return { ...fighter, x: position.x, y: position.y };
    }));
  }, [brutes.length, fight]);

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
          {fight && !!brutes.length && (
            <BoxBg
              src="/images/game/background/179.jpg"
              sx={{
                position: 'relative',
                width: 500,
                height: 300,
                border: 1,
                borderColor: 'secondary.main',
                alignSelf: 'center',
                ml: 5,
                overflow: 'hidden',
              }}
            >
              {/* FIGHTERS */}
              {fighters.map((fighter) => (
                <motion.div
                  key={`${fighter.master || ''}.${fighter.name}`}
                  initial={{ x: fighter.x, y: fighter.y }}
                  animate={{ x: fighter.x, y: fighter.y }}
                  transition={{ duration: 0.5, type: 'linear' }}
                  style={{
                    display: 'inline-block',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    // The further down the fighter is, the higher the z-index
                    zIndex: fighter.y,
                  }}
                >
                  {fighter.type === 'brute' ? (
                    <BruteComponent
                      brute={fighter.brute as Brute}
                      inverted={fighter.team === 'left'}
                      sx={{ height: 80 }}
                    />
                  ) : fighter.name === 'bear' ? (
                    <AnimatedBear id="bear" animation={fighter.animation} inverted={fighter.team === 'right'} />
                  ) : t(fighter.name as PetName)}
                </motion.div>
              ))}
              {/* LOGS */}
              {displayLogs && (
                <Box sx={{
                  height: 1,
                  width: 1,
                  overflowY: 'auto',
                  position: 'absolute',
                  top: 0,
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                  zIndex: 500,
                }}
                >
                  {fight.data.steps.filter((step) => !['moveTo', 'moveBack'].includes(step.action)).map((step, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Text key={i}>{translateFightStep(step, t)}</Text>
                  ))}
                </Box>
              )}
              {/* LOGS TOGGLE */}
              <Tooltip title={t('fight.toggleLogs')}>
                <IconButton onClick={toggleLogs} sx={{ position: 'absolute', bottom: 0, right: 0, zIndex: 501, }}>
                  <Rtt />
                </IconButton>
              </Tooltip>
            </BoxBg>
          )}
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Button onClick={setRandomPositions}>TEST</Button>
        </Box>
      </BoxBg>
    </Page>
  ) : null;
};

export default FightView;
