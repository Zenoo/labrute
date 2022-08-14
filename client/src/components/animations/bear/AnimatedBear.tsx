import { BoxProps } from '@mui/material';
import React from 'react';
import ArriveBear from './ArriveBear.js';
import AttackBear from './AttackBear.js';
import IddleBear from './IddleBear.js';

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
    default:
      return <IddleBear {...rest} />;
  }
};

export default AnimatedBear;