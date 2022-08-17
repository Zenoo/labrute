import { BoxProps } from '@mui/material';
import React from 'react';
import ArrivePanther from './ArrivePanther.js';
import AttackPanther from './AttackPanther.js';
import DeathPanther from './DeathPanther.js';
import EvadePanther from './EvadePanther.js';
import HitPanther from './HitPanther.js';
import IddlePanther from './IddlePanther.js';
import RunPanther from './RunPanther.js';
import TrappedPanther from './TrappedPanther.js';

export interface AnimatedPanther extends BoxProps {
  id: string;
  animation: string;
  inverted?: boolean;
}

const AnimatedPanther = ({ animation, ...rest }: AnimatedPanther) => {
  switch (animation) {
    case 'arrive':
      return <ArrivePanther {...rest} />;
    case 'iddle':
      return <IddlePanther {...rest} />;
    case 'attack':
      return <AttackPanther {...rest} />;
    case 'hit':
      return <HitPanther {...rest} />;
    case 'run':
      return <RunPanther {...rest} />;
    case 'evade':
      return <EvadePanther {...rest} />;
    case 'death':
      return <DeathPanther {...rest} />;
    case 'trapped':
      return <TrappedPanther {...rest} />;
    default:
      return <IddlePanther {...rest} />;
  }
};

export default AnimatedPanther;