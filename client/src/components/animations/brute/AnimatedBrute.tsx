import { Gender } from '@eternaltwin/labrute-core/types';
import { BoxProps } from '@mui/material';
import React from 'react';
import ArriveMaleBrute from './male/ArriveMaleBrute.js';
import BlockMaleBrute from './male/BlockMaleBrute.js';
import EquipMaleBrute from './male/EquipMaleBrute.js';
import EstocMaleBrute from './male/EstocMaleBrute.js';
import EvadeMaleBrute from './male/EvadeMaleBrute.js';
import FistMaleBrute from './male/FistMaleBrute.js';
import HealMaleBrute from './male/HealMaleBrute.js';
import HitMaleBrute from './male/HitMaleBrute.js';
import IddleMaleBrute from './male/IddleMaleBrute.js';
import LoseMaleBrute from './male/LoseMaleBrute.js';
import RunMaleBrute from './male/RunMaleBrute.js';
import SlashMaleBrute from './male/SlashMaleBrute.js';
import StrengthenMaleBrute from './male/StrengthenMaleBrute.js';
import ThrowMaleBrute from './male/ThrowMaleBrute.js';
import TrappedMaleBrute from './male/TrappedMaleBrute.js';
import WhipMaleBrute from './male/WhipMaleBrute.js';
import WinMaleBrute from './male/WinMaleBrute.js';

export interface AnimatedBruteProps extends BoxProps {
  id: string;
  gender: Gender;
  animation: string;
  inverted?: boolean;
}

const AnimatedBrute = ({ animation, gender, ...rest }: AnimatedBruteProps) => {
  if (gender === 'male') {
    switch (animation) {
      case 'arrive':
        return <ArriveMaleBrute {...rest} />;
      case 'block':
        return <BlockMaleBrute {...rest} />;
      case 'equip':
        return <EquipMaleBrute {...rest} />;
      case 'estoc':
        return <EstocMaleBrute {...rest} />;
      case 'evade':
        return <EvadeMaleBrute {...rest} />;
      case 'fist':
        return <FistMaleBrute {...rest} />;
      case 'heal':
        return <HealMaleBrute {...rest} />;
      case 'hit':
        return <HitMaleBrute {...rest} />;
      case 'iddle':
        return <IddleMaleBrute {...rest} />;
      case 'lose':
        return <LoseMaleBrute {...rest} />;
      case 'run':
        return <RunMaleBrute {...rest} />;
      case 'slash':
        return <SlashMaleBrute {...rest} />;
      case 'strengthen':
        return <StrengthenMaleBrute {...rest} />;
      case 'throw':
        return <ThrowMaleBrute {...rest} />;
      case 'trapped':
        return <TrappedMaleBrute {...rest} />;
      case 'whip':
        return <WhipMaleBrute {...rest} />;
      case 'win':
        return <WinMaleBrute {...rest} />;
      default:
        return <IddleMaleBrute {...rest} />;
    }
  }
  switch (animation) {
    case 'arrive':
      return <ArriveMaleBrute {...rest} />;
    case 'block':
      return <BlockMaleBrute {...rest} />;
    case 'equip':
      return <EquipMaleBrute {...rest} />;
    case 'estoc':
      return <EstocMaleBrute {...rest} />;
    case 'evade':
      return <EvadeMaleBrute {...rest} />;
    case 'fist':
      return <FistMaleBrute {...rest} />;
    case 'heal':
      return <HealMaleBrute {...rest} />;
    case 'hit':
      return <HitMaleBrute {...rest} />;
    case 'iddle':
      return <IddleMaleBrute {...rest} />;
    case 'lose':
      return <LoseMaleBrute {...rest} />;
    case 'run':
      return <RunMaleBrute {...rest} />;
    case 'slash':
      return <SlashMaleBrute {...rest} />;
    case 'strengthen':
      return <StrengthenMaleBrute {...rest} />;
    case 'throw':
      return <ThrowMaleBrute {...rest} />;
    case 'trapped':
      return <TrappedMaleBrute {...rest} />;
    case 'whip':
      return <WhipMaleBrute {...rest} />;
    case 'win':
      return <WinMaleBrute {...rest} />;
    default:
      return <IddleMaleBrute {...rest} />;
  }
};

export default AnimatedBrute;