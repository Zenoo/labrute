import { BoxProps } from '@mui/material';
import React from 'react';
import ArriveDog from './ArriveDog.js';
import AttackDog from './AttackDog.js';
import DeathDog from './DeathDog.js';
import EvadeDog from './EvadeDog.js';
import HitDog from './HitDog.js';
import IddleDog from './IddleDog.js';
import RunDog from './RunDog.js';
import TrappedDog from './TrappedDog.js';

export interface AnimatedDogProps extends BoxProps {
  id: string;
  animation: string;
  inverted?: boolean;
}

const AnimatedDog = ({ animation, ...rest }: AnimatedDogProps) => {
  switch (animation) {
    case 'arrive':
      return <ArriveDog {...rest} />;
    case 'iddle':
      return <IddleDog {...rest} />;
    case 'attack':
      return <AttackDog {...rest} />;
    case 'hit':
      return <HitDog {...rest} />;
    case 'run':
      return <RunDog {...rest} />;
    case 'evade':
      return <EvadeDog {...rest} />;
    case 'death':
      return <DeathDog {...rest} />;
    case 'trapped':
      return <TrappedDog {...rest} />;
    default:
      return <IddleDog {...rest} />;
  }
};

export default AnimatedDog;