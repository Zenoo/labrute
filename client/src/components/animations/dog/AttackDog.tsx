/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface AttackDogProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const AttackDog_WIDTH = 138.3;
export const AttackDog_HEIGHT = 49.25;
export const AttackDog_FRAMES = 7;
export const AttackDog_X_OFFSET = 77.85;
export const AttackDog_Y_OFFSET = 23.15;
export const AttackDog_MARGIN = 30;

const AttackDog = ({ id, inverted, sx, ...rest }: AttackDogProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: AttackDog_WIDTH,
      height: AttackDog_HEIGHT,
      ...sx,
    }}
    {...rest}
  >
    <Box
      component="svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        top: 0,
        left: !inverted
          ? -(AttackDog_WIDTH + AttackDog_MARGIN)
            * (AttackDog_FRAMES - 1)
            - (!inverted ? AttackDog_MARGIN : 0)
          : 0,
        width: (AttackDog_WIDTH + AttackDog_MARGIN) * AttackDog_FRAMES,
        animation: `AttackDog${inverted ? 'Inverted' : ''} 0.17s steps(${AttackDog_FRAMES}, jump-none) forwards`,
        transform: !inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 0}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2006, -0.4152, 0.3764, 1.0883, -7.888, 11.5116)" width="5.9" xlinkHref={`#AttackDog-1-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.977, 0.3243, -0.471, 1.8533, -0.4759, 0.848)" width="1.75" xlinkHref={`#AttackDog-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -6.7163, -2.2642)" width="1.75" xlinkHref={`#AttackDog-1-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 17.6841, -7.9101)" width="13.85" xlinkHref={`#AttackDog-1-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.9747, -0.5817, 0.5043, 0.845, 5.2917, 8.8026)" width="5.9" xlinkHref={`#AttackDog-1-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, 6.9427, -6.7012)" width="4.85" xlinkHref={`#AttackDog-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7368, -0.5322, 0.3549, 1.5693, 9.0531, -1.3004)" width="1.75" xlinkHref={`#AttackDog-1-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 15.8275, -10.6897)" width="8.9" xlinkHref={`#AttackDog-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -6.215, -8.3403)" width="8.9" xlinkHref={`#AttackDog-1-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 15.7424, 10.2971)" width="5.9" xlinkHref={`#AttackDog-1-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -22.4717, -6.6495)" width="16.45" xlinkHref={`#AttackDog-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.6583, -0.7828, 0.7828, 1.6583, 15.8745, 2.3682)" width="1.75" xlinkHref={`#AttackDog-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 10.1607, -1.8932)" width="4.85" xlinkHref={`#AttackDog-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(-1.1998, -2.4082, 1.7511, -0.8724, 0.1343, 1.5595)" width="1.75" xlinkHref={`#AttackDog-1-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.2808, 1.3514, -1.3514, 0.2808, 8.6716, -11.5561)" width="5.9" xlinkHref={`#AttackDog-1-${id}-sprite0`} />
      </g>
      <defs>
        <g id={`AttackDog-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-1-${id}-shape0`} />
        </g>
        <g id={`AttackDog-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-1-${id}-shape1`} />
        </g>
        <g id={`AttackDog-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-1-${id}-shape2`} />
        </g>
        <g id={`AttackDog-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-1-${id}-shape3`} />
        </g>
        <g id={`AttackDog-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-1-${id}-shape4`} />
        </g>
        <g id={`AttackDog-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-1-${id}-shape5`} />
        </g>
        <g id={`AttackDog-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 1}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2006, -0.4152, 0.3764, 1.0883, -7.888, 11.5116)" width="5.9" xlinkHref={`#AttackDog-2-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.977, 0.3243, -0.471, 1.8533, -0.4759, 0.848)" width="1.75" xlinkHref={`#AttackDog-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -6.7163, -2.2642)" width="1.75" xlinkHref={`#AttackDog-2-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 17.6841, -7.9101)" width="13.85" xlinkHref={`#AttackDog-2-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.9747, -0.5817, 0.5043, 0.845, 5.2917, 8.8026)" width="5.9" xlinkHref={`#AttackDog-2-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, 6.9427, -6.7012)" width="4.85" xlinkHref={`#AttackDog-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7368, -0.5322, 0.3549, 1.5693, 9.0531, -1.3004)" width="1.75" xlinkHref={`#AttackDog-2-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 15.8275, -10.6897)" width="8.9" xlinkHref={`#AttackDog-2-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -6.215, -8.3403)" width="8.9" xlinkHref={`#AttackDog-2-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 15.7424, 10.2971)" width="5.9" xlinkHref={`#AttackDog-2-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -22.4717, -6.6495)" width="16.45" xlinkHref={`#AttackDog-2-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.6583, -0.7828, 0.7828, 1.6583, 15.8745, 2.3682)" width="1.75" xlinkHref={`#AttackDog-2-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 10.1607, -1.8932)" width="4.85" xlinkHref={`#AttackDog-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(-1.1998, -2.4082, 1.7511, -0.8724, 0.1343, 1.5595)" width="1.75" xlinkHref={`#AttackDog-2-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.2808, 1.3514, -1.3514, 0.2808, 8.6716, -11.5561)" width="5.9" xlinkHref={`#AttackDog-2-${id}-sprite0`} />
        <use height="6.9" transform="matrix(3.252, 0.0, 0.0, 1.4587, -43.3733, -24.1325)" width="10.9" xlinkHref={`#AttackDog-2-${id}-sprite6`} />
      </g>
      <defs>
        <g id={`AttackDog-2-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-2-${id}-shape0`} />
        </g>
        <g id={`AttackDog-2-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-2-${id}-shape1`} />
        </g>
        <g id={`AttackDog-2-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-2-${id}-shape2`} />
        </g>
        <g id={`AttackDog-2-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-2-${id}-shape3`} />
        </g>
        <g id={`AttackDog-2-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-2-${id}-shape4`} />
        </g>
        <g id={`AttackDog-2-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-2-${id}-shape5`} />
        </g>
        <g id={`AttackDog-2-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-2-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 3.45)">
          <use height="6.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -3.45)" width="10.9" xlinkHref={`#AttackDog-2-${id}-shape6`} />
        </g>
        <g id={`AttackDog-2-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 3.45)">
          <path d="M-5.35 0.35 L-5.45 0.15 Q-5.45 -0.3 -0.6 -2.85 L-0.45 -2.7 Q-1.2 -1.8 -5.1 0.4 L-5.35 0.35 M-3.05 1.15 Q-3.05 0.65 -1.15 -0.35 L1.35 -1.6 3.65 -2.65 5.45 -3.45 1.8 -0.95 -2.7 1.5 -3.05 1.15 M-1.0 3.1 Q3.1 -0.2 5.2 -0.4 L2.05 2.05 Q-0.15 3.45 -0.55 3.45 L-0.9 3.4 -1.0 3.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 2}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(0.9371, -0.8555, 0.7755, 0.8494, -23.449, 10.3521)" width="5.9" xlinkHref={`#AttackDog-3-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.9416, -0.4841, 0.3006, 1.8862, -22.2035, -2.8818)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -26.2163, -6.2642)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, -1.8159, -11.9101)" width="13.85" xlinkHref={`#AttackDog-3-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.7603, -0.8414, 0.7295, 0.6591, -8.8924, 5.7629)" width="5.9" xlinkHref={`#AttackDog-3-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -12.5573, -10.7012)" width="4.85" xlinkHref={`#AttackDog-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.5026, -1.0177, 0.7993, 1.3947, -10.1762, -4.4133)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, -3.6725, -14.6897)" width="8.9" xlinkHref={`#AttackDog-3-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -25.715, -12.3403)" width="8.9" xlinkHref={`#AttackDog-3-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.7796, -0.3768, 0.4941, 1.0221, 1.4862, 6.0708)" width="5.9" xlinkHref={`#AttackDog-3-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -43.8717, -10.6495)" width="16.45" xlinkHref={`#AttackDog-3-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.1508, -1.4246, 1.4246, 1.1508, -3.6063, -0.234)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, -9.3393, -5.8932)" width="4.85" xlinkHref={`#AttackDog-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.2985, 2.3676, -1.7215, 0.9442, -17.5889, -3.906)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="3.75" transform="matrix(1.1286, 1.5337, -1.5337, 1.1286, -42.7422, -2.1623)" width="5.9" xlinkHref={`#AttackDog-3-${id}-sprite0`} />
        <use height="5.75" transform="matrix(0.769, 2.977, -2.977, 0.7691, -23.2745, -0.4862)" width="1.75" xlinkHref={`#AttackDog-3-${id}-sprite1`} />
        <use height="21.95" transform="matrix(3.252, 0.0, 0.0, 1.4587, -77.8431, -21.5229)" width="18.2" xlinkHref={`#AttackDog-3-${id}-sprite6`} />
      </g>
      <defs>
        <g id={`AttackDog-3-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-3-${id}-shape0`} />
        </g>
        <g id={`AttackDog-3-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-3-${id}-shape1`} />
        </g>
        <g id={`AttackDog-3-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-3-${id}-shape2`} />
        </g>
        <g id={`AttackDog-3-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-3-${id}-shape3`} />
        </g>
        <g id={`AttackDog-3-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-3-${id}-shape4`} />
        </g>
        <g id={`AttackDog-3-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-3-${id}-shape5`} />
        </g>
        <g id={`AttackDog-3-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-3-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 9.1, 10.95)">
          <use height="21.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -9.1, -10.95)" width="18.2" xlinkHref={`#AttackDog-3-${id}-shape6`} />
        </g>
        <g id={`AttackDog-3-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 9.1, 10.95)">
          <path d="M8.85 -7.25 Q4.6 -3.15 2.45 2.45 L1.3 5.5 0.15 8.5 -0.35 8.4 Q-0.15 2.65 3.25 -2.1 L4.2 -3.4 Q5.5 -6.0 8.0 -6.9 L8.85 -7.25 M-0.8 0.4 L-3.9 7.1 -5.75 11.0 Q-5.9 9.55 -5.15 6.85 -4.5 4.15 -1.75 -1.8 0.95 -7.75 9.1 -10.95 L4.8 -7.15 Q1.2 -3.75 -0.8 0.4 M-8.45 7.6 Q-9.25 6.3 -9.05 4.6 -8.55 0.35 -5.8 -3.0 -2.2 -7.35 2.9 -9.9 L1.4 -8.8 Q-2.0 -6.25 -4.4 -2.65 -7.0 1.25 -8.0 5.95 L-8.45 7.6" fill="#b70000" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 3}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(0.9371, -0.8555, 0.7755, 0.8494, -23.449, 10.3521)" width="5.9" xlinkHref={`#AttackDog-4-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.9416, -0.4841, 0.3006, 1.8862, -22.2035, -2.8818)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -26.2163, -6.2642)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, -1.8159, -11.9101)" width="13.85" xlinkHref={`#AttackDog-4-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.7603, -0.8414, 0.7295, 0.6591, -8.8924, 5.7629)" width="5.9" xlinkHref={`#AttackDog-4-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -12.5573, -10.7012)" width="4.85" xlinkHref={`#AttackDog-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.5026, -1.0177, 0.7993, 1.3947, -10.1762, -4.4133)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, -3.6725, -14.6897)" width="8.9" xlinkHref={`#AttackDog-4-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -25.715, -12.3403)" width="8.9" xlinkHref={`#AttackDog-4-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.7796, -0.3768, 0.4941, 1.0221, 1.4862, 6.0708)" width="5.9" xlinkHref={`#AttackDog-4-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -43.8717, -10.6495)" width="16.45" xlinkHref={`#AttackDog-4-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.1508, -1.4246, 1.4246, 1.1508, -3.6063, -0.234)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, -9.3393, -5.8932)" width="4.85" xlinkHref={`#AttackDog-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.2985, 2.3676, -1.7215, 0.9442, -17.5889, -3.906)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="3.75" transform="matrix(1.1286, 1.5337, -1.5337, 1.1286, -42.7422, -2.1623)" width="5.9" xlinkHref={`#AttackDog-4-${id}-sprite0`} />
        <use height="5.75" transform="matrix(0.769, 2.977, -2.977, 0.7691, -23.2745, -0.4862)" width="1.75" xlinkHref={`#AttackDog-4-${id}-sprite1`} />
        <use height="23.35" transform="matrix(3.252, 0.0, 0.0, 1.4587, -77.5253, -13.994)" width="12.85" xlinkHref={`#AttackDog-4-${id}-sprite6`} />
      </g>
      <defs>
        <g id={`AttackDog-4-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-4-${id}-shape0`} />
        </g>
        <g id={`AttackDog-4-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-4-${id}-shape1`} />
        </g>
        <g id={`AttackDog-4-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-4-${id}-shape2`} />
        </g>
        <g id={`AttackDog-4-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-4-${id}-shape3`} />
        </g>
        <g id={`AttackDog-4-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-4-${id}-shape4`} />
        </g>
        <g id={`AttackDog-4-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-4-${id}-shape5`} />
        </g>
        <g id={`AttackDog-4-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-4-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.45, 11.65)">
          <use height="23.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.45, -11.65)" width="12.85" xlinkHref={`#AttackDog-4-${id}-shape6`} />
        </g>
        <g id={`AttackDog-4-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.45, 11.65)">
          <path d="M0.1 -2.9 Q-0.8 1.5 0.7 5.75 1.85 9.1 4.4 11.7 -0.25 10.1 -1.15 4.9 -1.85 0.85 -0.75 -3.35 0.5 -8.2 4.25 -11.65 1.15 -8.05 0.1 -2.9 M5.05 -6.7 L5.75 -7.55 6.4 -7.75 Q3.4 -2.8 4.05 2.7 4.4 5.85 5.9 8.8 3.65 7.45 3.25 4.55 L2.95 0.75 Q2.9 -1.1 3.2 -3.0 3.75 -5.0 5.05 -6.7 M-3.45 -7.7 Q-5.0 -3.8 -4.85 0.45 -4.65 5.25 -2.95 9.6 -5.6 6.75 -6.2 2.9 -6.8 -0.7 -5.9 -4.1 -5.25 -6.65 -3.45 -7.7" fill="#b76b00" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 4}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(0.9371, -0.8555, 0.7755, 0.8494, -18.749, 10.3521)" width="5.9" xlinkHref={`#AttackDog-5-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.9416, -0.4841, 0.3006, 1.8862, -17.5035, -2.8818)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -21.5163, -6.2642)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 2.8841, -11.9101)" width="13.85" xlinkHref={`#AttackDog-5-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.7603, -0.8414, 0.7295, 0.6591, -4.1924, 5.7629)" width="5.9" xlinkHref={`#AttackDog-5-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -7.8573, -10.7012)" width="4.85" xlinkHref={`#AttackDog-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.5026, -1.0177, 0.7993, 1.3947, -5.4762, -4.4133)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 1.0275, -14.6897)" width="8.9" xlinkHref={`#AttackDog-5-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -21.015, -12.3403)" width="8.9" xlinkHref={`#AttackDog-5-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.7796, -0.3768, 0.4941, 1.0221, 6.1862, 6.0708)" width="5.9" xlinkHref={`#AttackDog-5-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -39.1717, -10.6495)" width="16.45" xlinkHref={`#AttackDog-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.1508, -1.4246, 1.4246, 1.1508, 1.0937, -0.234)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, -4.6393, -5.8932)" width="4.85" xlinkHref={`#AttackDog-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.2985, 2.3676, -1.7215, 0.9442, -12.8889, -3.906)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.7005, 0.3623, -0.5302, 1.0252, -28.8856, 1.9345)" width="5.9" xlinkHref={`#AttackDog-5-${id}-sprite0`} />
        <use height="5.75" transform="matrix(0.7222, 1.7219, -1.3716, 0.5753, -20.5307, 0.9656)" width="1.75" xlinkHref={`#AttackDog-5-${id}-sprite1`} />
        <use height="12.4" transform="matrix(3.252, 0.0, 0.0, 1.4587, -68.7261, 7.006)" width="13.7" xlinkHref={`#AttackDog-5-${id}-sprite6`} />
      </g>
      <defs>
        <g id={`AttackDog-5-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-5-${id}-shape0`} />
        </g>
        <g id={`AttackDog-5-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-5-${id}-shape1`} />
        </g>
        <g id={`AttackDog-5-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-5-${id}-shape2`} />
        </g>
        <g id={`AttackDog-5-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-5-${id}-shape3`} />
        </g>
        <g id={`AttackDog-5-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-5-${id}-shape4`} />
        </g>
        <g id={`AttackDog-5-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-5-${id}-shape5`} />
        </g>
        <g id={`AttackDog-5-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-5-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.85, 6.2)">
          <use height="12.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -6.2)" width="13.7" xlinkHref={`#AttackDog-5-${id}-shape6`} />
        </g>
        <g id={`AttackDog-5-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.85, 6.2)">
          <path d="M6.85 3.75 Q6.0 4.7 4.7 3.4 1.25 0.15 0.8 -4.5 0.7 -5.35 0.9 -6.2 1.15 -0.05 6.4 3.2 L6.85 3.75 M-2.7 -1.45 Q0.15 3.05 5.1 5.15 0.25 4.3 -2.2 -0.05 L-2.7 -1.45 M-6.6 -0.55 Q-4.6 3.6 -0.45 5.55 0.2 5.8 0.8 6.2 -4.05 5.05 -6.65 0.6 L-6.85 0.05 -6.6 -0.55" fill="#b76b04" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 5}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(0.9371, -0.8555, 0.7755, 0.8494, -18.749, 10.3521)" width="5.9" xlinkHref={`#AttackDog-6-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.9416, -0.4841, 0.3006, 1.8862, -17.5035, -2.8818)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -21.5163, -6.2642)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 2.8841, -11.9101)" width="13.85" xlinkHref={`#AttackDog-6-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.7603, -0.8414, 0.7295, 0.6591, -4.1924, 5.7629)" width="5.9" xlinkHref={`#AttackDog-6-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -7.8573, -10.7012)" width="4.85" xlinkHref={`#AttackDog-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.5026, -1.0177, 0.7993, 1.3947, -5.4762, -4.4133)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 1.0275, -14.6897)" width="8.9" xlinkHref={`#AttackDog-6-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -21.015, -12.3403)" width="8.9" xlinkHref={`#AttackDog-6-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.7796, -0.3768, 0.4941, 1.0221, 6.1862, 6.0708)" width="5.9" xlinkHref={`#AttackDog-6-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -39.1717, -10.6495)" width="16.45" xlinkHref={`#AttackDog-6-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.1508, -1.4246, 1.4246, 1.1508, 1.0937, -0.234)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, -4.6393, -5.8932)" width="4.85" xlinkHref={`#AttackDog-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.2985, 2.3676, -1.7215, 0.9442, -12.8889, -3.906)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.7005, 0.3623, -0.5302, 1.0252, -28.8856, 1.9345)" width="5.9" xlinkHref={`#AttackDog-6-${id}-sprite0`} />
        <use height="5.75" transform="matrix(0.7222, 1.7219, -1.3716, 0.5753, -20.5307, 0.9656)" width="1.75" xlinkHref={`#AttackDog-6-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`AttackDog-6-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-6-${id}-shape0`} />
        </g>
        <g id={`AttackDog-6-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-6-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-6-${id}-shape1`} />
        </g>
        <g id={`AttackDog-6-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-6-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-6-${id}-shape2`} />
        </g>
        <g id={`AttackDog-6-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-6-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-6-${id}-shape3`} />
        </g>
        <g id={`AttackDog-6-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-6-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-6-${id}-shape4`} />
        </g>
        <g id={`AttackDog-6-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-6-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-6-${id}-shape5`} />
        </g>
        <g id={`AttackDog-6-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${AttackDog_X_OFFSET + (AttackDog_WIDTH + AttackDog_MARGIN) * 6}, ${AttackDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(0.9371, -0.8555, 0.7755, 0.8494, -18.749, 10.3521)" width="5.9" xlinkHref={`#AttackDog-7-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.9416, -0.4841, 0.3006, 1.8862, -17.5035, -2.8818)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -21.5163, -6.2642)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 2.8841, -11.9101)" width="13.85" xlinkHref={`#AttackDog-7-${id}-sprite2`} />
        <use height="3.75" transform="matrix(0.7603, -0.8414, 0.7295, 0.6591, -4.1924, 5.7629)" width="5.9" xlinkHref={`#AttackDog-7-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -7.8573, -10.7012)" width="4.85" xlinkHref={`#AttackDog-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.5026, -1.0177, 0.7993, 1.3947, -5.4762, -4.4133)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 1.0275, -14.6897)" width="8.9" xlinkHref={`#AttackDog-7-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -21.015, -12.3403)" width="8.9" xlinkHref={`#AttackDog-7-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.7796, -0.3768, 0.4941, 1.0221, 6.1862, 6.0708)" width="5.9" xlinkHref={`#AttackDog-7-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -39.1717, -10.6495)" width="16.45" xlinkHref={`#AttackDog-7-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.1508, -1.4246, 1.4246, 1.1508, 1.0937, -0.234)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, -4.6393, -5.8932)" width="4.85" xlinkHref={`#AttackDog-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.2985, 2.3676, -1.7215, 0.9442, -12.8889, -3.906)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.7005, 0.3623, -0.5302, 1.0252, -28.8856, 1.9345)" width="5.9" xlinkHref={`#AttackDog-7-${id}-sprite0`} />
        <use height="5.75" transform="matrix(0.7222, 1.7219, -1.3716, 0.5753, -20.5307, 0.9656)" width="1.75" xlinkHref={`#AttackDog-7-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`AttackDog-7-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#AttackDog-7-${id}-shape0`} />
        </g>
        <g id={`AttackDog-7-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-7-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#AttackDog-7-${id}-shape1`} />
        </g>
        <g id={`AttackDog-7-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-7-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#AttackDog-7-${id}-shape2`} />
        </g>
        <g id={`AttackDog-7-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-7-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#AttackDog-7-${id}-shape3`} />
        </g>
        <g id={`AttackDog-7-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-7-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#AttackDog-7-${id}-shape4`} />
        </g>
        <g id={`AttackDog-7-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`AttackDog-7-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#AttackDog-7-${id}-shape5`} />
        </g>
        <g id={`AttackDog-7-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b04" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26400" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default AttackDog;