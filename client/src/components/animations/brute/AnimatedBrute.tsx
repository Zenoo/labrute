import { Gender } from '@eternaltwin/labrute-core/types';
import { BoxProps } from '@mui/material';
import React from 'react';
import IddleMaleBrute from './male/IddleMaleBrute.js';

export interface AnimatedBruteProps extends BoxProps {
  id: string;
  gender: Gender;
  animation: string;
  inverted?: boolean;
}

const AnimatedBrute = ({ animation, ...rest }: AnimatedBruteProps) => {
  switch (animation) {
    case 'iddle':
      return <IddleMaleBrute {...rest} />;
    default:
      return <IddleMaleBrute {...rest} />;
  }
};

export default AnimatedBrute;