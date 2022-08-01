import React from 'react';
import BoxWithBackground, { BoxWithBackgroundProps } from '../BoxWithBackground.js';
import Text from '../Text.js';

interface BruteHPProps extends Omit<BoxWithBackgroundProps, 'url' | 'alt'> {
  hp: number;
}

const BruteHP = ({ hp, sx, ...rest }: BruteHPProps) => (
  <BoxWithBackground
    sx={{ textAlign: 'center', pt: '5px', width: 39, display: 'inline-block', ...sx }}
    {...rest}
    url="/images/hp.gif"
    alt="HP"
  >
    <Text bold color="common.white">{hp}</Text>
  </BoxWithBackground>
);

export default BruteHP;
