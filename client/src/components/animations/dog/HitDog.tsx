import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface HitDogProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

const WIDTH = 86;
const HEIGHT = 42;
const FRAMES = 1;
const X_OFFSET = 26.2;
const Y_OFFSET = 13.5;
const MARGIN = 30;

const HitDog = ({ id, inverted, sx, ...rest }: HitDogProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: WIDTH,
      height: HEIGHT,
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
          ? -(WIDTH + MARGIN) * (FRAMES - 1) - (!inverted ? MARGIN : 0)
          : 0,
        width: (WIDTH + MARGIN) * FRAMES,
        animation: `${!inverted ? 'inverted-' : ''}stagger 0.5s forwards`,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 0}, ${Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -16.1513, 7.3175)" width="5.9" xlinkHref={`#HitDog-1-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -6.2623, -1.5898)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -11.8163, -4.4642)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -3.6033, 4.3768)" width="5.9" xlinkHref={`#HitDog-1-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, 1.8427, -8.9012)" width="4.85" xlinkHref={`#HitDog-1-${id}-sprite2`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 3.1172, -3.3542)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.8564, 0.1323, -0.1735, 1.1228, 5.7446, 7.8324)" width="5.9" xlinkHref={`#HitDog-1-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -11.2976, 13.0803)" width="5.9" xlinkHref={`#HitDog-1-${id}-sprite0`} />
        <use height="5.4" transform="matrix(0.6441, 0.9337, -0.9337, 0.6441, 11.7762, -10.4814)" width="13.85" xlinkHref={`#HitDog-1-${id}-sprite3`} />
        <use height="7.2" transform="matrix(-1.3715, 0.1448, 0.1448, 1.3715, 12.912, -12.1147)" width="8.9" xlinkHref={`#HitDog-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -10.315, -12.5403)" width="8.9" xlinkHref={`#HitDog-1-${id}-sprite4`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -20.2217, -10.3495)" width="16.45" xlinkHref={`#HitDog-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8096, 0.3058, -0.3058, 1.8096, 9.279, -1.1585)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.3465, -0.5847, 0.5847, 1.3465, 3.4973, -5.1555)" width="4.85" xlinkHref={`#HitDog-1-${id}-sprite2`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8049, 2.3317)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.706, -0.0317, 0.023, 1.9676, -3.5959, -5.8713)" width="1.75" xlinkHref={`#HitDog-1-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`HitDog-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#HitDog-1-${id}-shape0`} />
        </g>
        <g id={`HitDog-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`HitDog-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#HitDog-1-${id}-shape1`} />
        </g>
        <g id={`HitDog-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`HitDog-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#HitDog-1-${id}-shape2`} />
        </g>
        <g id={`HitDog-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`HitDog-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#HitDog-1-${id}-shape3`} />
        </g>
        <g id={`HitDog-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`HitDog-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#HitDog-1-${id}-shape4`} />
        </g>
        <g id={`HitDog-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`HitDog-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#HitDog-1-${id}-shape5`} />
        </g>
        <g id={`HitDog-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default HitDog;