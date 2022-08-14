import { Rtt } from '@mui/icons-material';
import { Box, Tooltip, IconButton, BoxProps } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';
import translateFightStep from '../../utils/translateFightStep.js';
import AnimatedBear from '../animations/bear/AnimatedBear.js';
import BoxBg from '../BoxBg.js';
import BruteComponent from '../Brute/Body/BruteComponent.js';
import { Brute, Fight, PetName } from '@eternaltwin/labrute-core/types';
import { AnimationFighter } from '../../utils/fight/findFighter.js';
import Text from '../Text.js';
import { TFunction } from 'react-i18next';

export interface FightComponentProps extends BoxProps {
  fight: Fight | null;
  brutes: Brute[];
  fighters: AnimationFighter[];
  displayLogs: boolean;
  t: TFunction;
  toggleLogs: () => void;
}

const FightComponent = ({
  fight,
  brutes,
  fighters,
  displayLogs,
  t,
  toggleLogs,
  sx,
  ...props
}: FightComponentProps) => ((fight && !!brutes.length) ? (
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
          bottom: 0,
          left: 0,
          transformOrigin: fighter.team === 'left' ? 'left bottom' : 'right bottom',
          // The further down the fighter is, the higher the z-index
          zIndex: 300 + fighter.y,
        }}
      >
        {fighter.type === 'brute' ? (
          <BruteComponent
            brute={fighter.brute as Brute}
            inverted={fighter.inverted}
            sx={{ height: 80 }}
          />
        ) : fighter.name === 'bear' ? (
          <AnimatedBear
            id="bear"
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

export default FightComponent;