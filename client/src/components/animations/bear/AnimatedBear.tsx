import { BoxProps } from '@mui/material';
import React from 'react';
import ArriveBear from './ArriveBear.js';
import AttackBear from './AttackBear.js';
import HitBear from './HitBear.js';
import IddleBear from './IddleBear.js';
import EvadeBear from './EvadeBear.js';
import RunBear from './RunBear.js';
import DeathBear from './DeathBear.js';
import TrappedBear from './TrappedBear.js';

export interface AnimatedBearProps extends BoxProps {
  id: string;
  animation: string;
  inverted?: boolean;
}

const AnimatedBear = ({ animation, ...rest }: AnimatedBearProps) => {
  switch (animation) {
    case 'arrive':
      return <ArriveBear {...rest} />;
    case 'iddle':
      return <IddleBear {...rest} />;
    case 'attack':
      return <AttackBear {...rest} />;
    case 'hit':
      return <HitBear {...rest} />;
    case 'run':
      return <RunBear {...rest} />;
    case 'evade':
      return <EvadeBear {...rest} />;
    case 'death':
      return <DeathBear {...rest} />;
    case 'trapped':
      return <TrappedBear {...rest} />;
    default:
      return <IddleBear {...rest} />;
  }
};

export default AnimatedBear;