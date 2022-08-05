import React from 'react';
import BoxBg, { BoxBgProps } from '../BoxBg.js';
import Text from '../Text.js';

interface BruteHPProps extends Omit<BoxBgProps, 'src'> {
  hp: number;
}

const BruteHP = ({ hp, sx, ...rest }: BruteHPProps) => (
  <BoxBg
    sx={{ textAlign: 'center', pt: '5px', width: 39, height: 29, display: 'inline-block', ...sx }}
    {...rest}
    src="/images/hp.gif"
  >
    <Text bold color="common.white">{hp}</Text>
  </BoxBg>
);

export default BruteHP;
