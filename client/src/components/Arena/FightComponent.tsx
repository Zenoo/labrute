import { Brute, Fight, PetName } from '@eternaltwin/labrute-core/types';
import { Rtt } from '@mui/icons-material';
import { Box, BoxProps, IconButton, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import { TFunction } from 'react-i18next';
import { AnimationFighter } from '../../utils/fight/findFighter.js';
import translateFightStep from '../../utils/translateFightStep.js';
import AnimatedBear from '../animations/bear/AnimatedBear.js';
import AnimatedDog from '../animations/dog/AnimatedDog.js';
import BoxBg from '../BoxBg.js';
import BruteComponent from '../Brute/Body/BruteComponent.js';
import Text from '../Text.js';
import FightHeader from './FightHeader.js';

export interface FightComponentProps extends BoxProps {
  fight: Fight | null;
  fighters: AnimationFighter[];
  displayLogs: boolean;
  t: TFunction;
  toggleLogs: () => void;
}

const FightComponent = ({
  fight,
  fighters,
  displayLogs,
  t,
  toggleLogs,
  sx,
  ...props
}: FightComponentProps) => {
  const brute1 = useMemo(() => !!fighters.length && fighters
    .filter((fighter) => !fighter.master)[0], [fighters]);
  const brute2 = useMemo(() => !!fighters.length && fighters
    .filter((fighter) => !fighter.master)[1], [fighters]);

  return (fight && brute1 && brute2 ? (
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
        ...sx,
      }}
      {...props}
    >
      {/* HEADERS */}
      <FightHeader brute={brute1} />
      <FightHeader brute={brute2} inverted />
      {/* FIGHTERS */}
      {fighters.map((fighter) => (
        <motion.div
          key={`${fighter.master || ''}.${fighter.name}`}
          initial={{
            left: fighter.team === 'left' ? fighter.x : 'unset',
            right: fighter.team === 'right' ? fighter.x : 'unset',
            bottom: fighter.y
          }}
          animate={{
            left: fighter.team === 'left' ? fighter.x : 'unset',
            right: fighter.team === 'right' ? fighter.x : 'unset',
            bottom: fighter.y
          }}
          transition={{ duration: 0.5, type: 'linear' }}
          style={{
            display: 'inline-block',
            position: 'absolute',
            // The further down the fighter is, the higher the z-index
            zIndex: 300 - fighter.y,
          }}
        >
          {fighter.type === 'brute' ? (
            <BruteComponent
              brute={{ name: fighter.name, data: fighter.data } as Brute}
              inverted={fighter.inverted}
              sx={{ height: 80 }}
            />
          ) : fighter.name === 'bear' ? (
            <AnimatedBear
              id={fighter.master || ''}
              animation={fighter.animation}
              inverted={!fighter.inverted}
            />
          ) : fighter.name.startsWith('dog') ? (
            <AnimatedDog
              id={`${fighter.master || ''}.${fighter.name}`}
              animation={fighter.animation}
              inverted={!fighter.inverted}
            />
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
  ) : null);
};

export default FightComponent;