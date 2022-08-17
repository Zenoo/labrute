import { Box, BoxProps, GlobalStyles } from '@mui/material';
import React from 'react';

export interface DeathPantherProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

const WIDTH = 135;
const HEIGHT = 90;
const FRAMES = 27;
const X_OFFSET = 60;
const Y_OFFSET = 57;
const MARGIN = 30;

const DeathPanther = ({ id, inverted, sx, ...rest }: DeathPantherProps) => (
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
    <GlobalStyles styles={{
      '@keyframes DeathPanther': {
        '100%': {
          left: !inverted
            ? -MARGIN
            : -(WIDTH + MARGIN) * (FRAMES - 1) - (!inverted ? MARGIN : 0),
        }
      }
    }}
    />
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
        animation: `DeathPanther 0.67s steps(${FRAMES}, jump-none) forwards`,
        transform: !inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 0}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.3172, 0.0, 0.0, 1.0311, -22.4943, 1.339)" width="40.0" xlinkHref={`#DeathPanther-1-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7664, 1.0031, -0.9093, 0.6947, -25.6286, -13.4942)" width="5.9" xlinkHref={`#DeathPanther-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.8268, 1.8128, -1.7918, 0.637, -13.0059, -13.7678)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-0.642, 2.3143, -1.6591, -0.3002, -5.135, -18.1173)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
        <use height="5.4" transform="matrix(0.6851, 0.8994, -0.8994, 0.6851, 13.7515, -7.8059)" width="13.85" xlinkHref={`#DeathPanther-1-${id}-sprite3`} />
        <use height="3.75" transform="matrix(1.1212, 0.1386, -0.1201, 0.972, -7.0351, -1.8071)" width="5.9" xlinkHref={`#DeathPanther-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2502, 0.7636, -0.65, 1.0918, 4.9798, -13.9762)" width="4.85" xlinkHref={`#DeathPanther-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(-1.3563, 0.2321, 0.2321, 1.3563, 11.974, -12.7565)" width="8.9" xlinkHref={`#DeathPanther-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.5627, 0.907, -0.9047, 1.3202, 1.9846, -8.5642)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
        <use height="7.2" transform="matrix(1.1515, 1.6574, -2.0381, 1.416, -0.2503, -24.3095)" width="8.9" xlinkHref={`#DeathPanther-1-${id}-sprite5`} />
        <use height="3.75" transform="matrix(0.6462, -0.5738, 0.7523, 0.8473, -4.0481, 7.7752)" width="5.9" xlinkHref={`#DeathPanther-1-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.5124, -1.281, 1.281, 0.5124, -17.2314, 2.481)" width="5.9" xlinkHref={`#DeathPanther-1-${id}-sprite1`} />
        <use height="13.0" transform="matrix(1.2384, 0.5856, -0.5856, 1.2384, -18.5084, -30.8531)" width="16.45" xlinkHref={`#DeathPanther-1-${id}-sprite6`} />
        <use height="5.75" transform="matrix(1.7943, 0.3351, -0.3351, 1.7943, -0.6713, -4.4033)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
        <use height="7.55" transform="matrix(1.095, 0.9681, -0.9681, 1.095, 4.17, -10.5776)" width="4.85" xlinkHref={`#DeathPanther-1-${id}-sprite4`} />
        <use height="5.75" transform="matrix(2.2103, 0.2817, -0.2817, 2.2103, -14.6382, -14.0804)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-0.0771, 2.7023, -1.9649, -0.056, -1.9502, -14.0737)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-sprite2`} />
      </g>
      <defs>
        <g id={`DeathPanther-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-1-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-1-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-1-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-1-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-1-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-1-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-1-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-1-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#DeathPanther-1-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-1-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 2 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 1}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.2019, 0.0, 0.0, 0.9408, -21.2387, 2.2416)" width="40.0" xlinkHref={`#DeathPanther-2-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7664, 1.0031, -0.9093, 0.6947, -25.6286, -13.4942)" width="5.9" xlinkHref={`#DeathPanther-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.8268, 1.8128, -1.7918, 0.637, -13.0059, -13.7678)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-0.642, 2.3143, -1.6591, -0.3002, -5.135, -18.1173)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
        <use height="5.4" transform="matrix(0.6851, 0.8994, -0.8994, 0.6851, 13.7515, -7.8059)" width="13.85" xlinkHref={`#DeathPanther-2-${id}-sprite3`} />
        <use height="3.75" transform="matrix(1.1212, 0.1386, -0.1201, 0.972, -7.0351, -1.8071)" width="5.9" xlinkHref={`#DeathPanther-2-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2502, 0.7636, -0.65, 1.0918, 4.9798, -13.9762)" width="4.85" xlinkHref={`#DeathPanther-2-${id}-sprite4`} />
        <use height="7.2" transform="matrix(-1.3563, 0.2321, 0.2321, 1.3563, 11.974, -12.7565)" width="8.9" xlinkHref={`#DeathPanther-2-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.5627, 0.907, -0.9047, 1.3202, 1.9846, -8.5642)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
        <use height="7.2" transform="matrix(1.1515, 1.6574, -2.0381, 1.416, -0.2503, -24.3095)" width="8.9" xlinkHref={`#DeathPanther-2-${id}-sprite5`} />
        <use height="3.75" transform="matrix(0.6462, -0.5738, 0.7523, 0.8473, -4.0481, 7.7752)" width="5.9" xlinkHref={`#DeathPanther-2-${id}-sprite1`} />
        <use height="3.75" transform="matrix(0.5124, -1.281, 1.281, 0.5124, -17.2314, 2.481)" width="5.9" xlinkHref={`#DeathPanther-2-${id}-sprite1`} />
        <use height="13.0" transform="matrix(1.2384, 0.5856, -0.5856, 1.2384, -18.5084, -30.8531)" width="16.45" xlinkHref={`#DeathPanther-2-${id}-sprite6`} />
        <use height="5.75" transform="matrix(1.7943, 0.3351, -0.3351, 1.7943, -0.6713, -4.4033)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
        <use height="7.55" transform="matrix(1.095, 0.9681, -0.9681, 1.095, 4.17, -10.5776)" width="4.85" xlinkHref={`#DeathPanther-2-${id}-sprite4`} />
        <use height="5.75" transform="matrix(2.2103, 0.2817, -0.2817, 2.2103, -14.6382, -14.0804)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-0.0771, 2.7023, -1.9649, -0.056, -1.9502, -14.0737)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-sprite2`} />
      </g>
      <defs>
        <g id={`DeathPanther-2-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-2-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-2-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-2-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-2-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-2-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-2-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-2-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-2-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-2-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-2-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-2-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-2-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-2-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#DeathPanther-2-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-2-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 3 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 2}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.0867, 0.0, 0.0, 0.8506, -20.084, 3.1435)" width="40.0" xlinkHref={`#DeathPanther-3-${id}-sprite0`} />
        <use height="3.75" transform="matrix(-0.1656, 1.2554, -1.1379, -0.1502, 6.5439, -23.8255)" width="5.9" xlinkHref={`#DeathPanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(-1.018, 1.7166, -1.5486, -1.1093, 14.4813, -15.2452)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.8524, -1.5289, 0.9499, -1.3931, 14.3532, -7.0077)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-0.7719, 0.8249, -0.8249, -0.7719, -2.6468, -2.9077)" width="13.85" xlinkHref={`#DeathPanther-3-${id}-sprite3`} />
        <use height="3.75" transform="matrix(-0.7491, 0.85, -0.7369, -0.6494, 5.823, -17.956)" width="5.9" xlinkHref={`#DeathPanther-3-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.2066, 0.8309, -0.7325, -1.0384, 9.0897, -4.6714)" width="4.85" xlinkHref={`#DeathPanther-3-${id}-sprite4`} />
        <use height="5.75" transform="matrix(-1.6351, 0.781, -0.5814, -1.496, 6.1427, -6.6621)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
        <use height="7.2" transform="matrix(1.3288, -0.3503, -0.3503, -1.3288, -4.1176, 2.1939)" width="8.9" xlinkHref={`#DeathPanther-3-${id}-sprite5`} />
        <use height="7.2" transform="matrix(-1.9828, 0.3768, -0.4633, -2.4383, 18.613, 0.7854)" width="8.9" xlinkHref={`#DeathPanther-3-${id}-sprite5`} />
        <use height="3.75" transform="matrix(-0.7641, 1.1518, -1.1518, -0.7641, -0.1651, -21.4343)" width="5.9" xlinkHref={`#DeathPanther-3-${id}-sprite1`} />
        <use height="13.0" transform="matrix(-1.0392, 0.8926, -0.8926, -1.0392, 29.5412, -15.2694)" width="16.45" xlinkHref={`#DeathPanther-3-${id}-sprite6`} />
        <use height="7.55" transform="matrix(-1.4509, -0.1813, 0.1813, -1.4509, 3.7519, -1.6721)" width="4.85" xlinkHref={`#DeathPanther-3-${id}-sprite4`} />
        <use height="5.75" transform="matrix(-0.103, 2.2291, -2.2291, -0.103, 6.8588, -18.253)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.7167, 2.086, -1.5168, -1.2482, 13.667, -11.225)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
        <use height="3.75" transform="matrix(-0.8207, 0.2637, -0.3457, -1.076, 3.7607, -18.0873)" width="5.9" xlinkHref={`#DeathPanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(-1.8058, 0.2544, -0.2544, -1.8058, 3.1068, -8.602)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-sprite2`} />
      </g>
      <defs>
        <g id={`DeathPanther-3-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-3-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-3-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-3-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-3-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-3-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-3-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-3-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-3-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-3-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-3-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-3-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-3-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-3-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#DeathPanther-3-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-3-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 4 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 3}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.2351, 0.0, 0.0, 0.9197, -19.1528, 2.8026)" width="40.0" xlinkHref={`#DeathPanther-4-${id}-sprite0`} />
        <use height="3.75" transform="matrix(-0.1656, 1.2554, -1.1379, -0.1502, 6.5439, -23.8255)" width="5.9" xlinkHref={`#DeathPanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(-1.018, 1.7166, -1.5486, -1.1093, 14.4813, -15.2452)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.8524, -1.5289, 0.9499, -1.3931, 14.3532, -7.0077)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-0.7719, 0.8249, -0.8249, -0.7719, -2.6468, -2.9077)" width="13.85" xlinkHref={`#DeathPanther-4-${id}-sprite3`} />
        <use height="3.75" transform="matrix(-0.7491, 0.85, -0.7369, -0.6494, 5.823, -17.956)" width="5.9" xlinkHref={`#DeathPanther-4-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.2066, 0.8309, -0.7325, -1.0384, 9.0897, -4.6714)" width="4.85" xlinkHref={`#DeathPanther-4-${id}-sprite4`} />
        <use height="5.75" transform="matrix(-1.6351, 0.781, -0.5814, -1.496, 6.1427, -6.6621)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
        <use height="7.2" transform="matrix(1.3288, -0.3503, -0.3503, -1.3288, -4.1176, 2.1939)" width="8.9" xlinkHref={`#DeathPanther-4-${id}-sprite5`} />
        <use height="7.2" transform="matrix(-1.9828, 0.3768, -0.4633, -2.4383, 18.613, 0.7854)" width="8.9" xlinkHref={`#DeathPanther-4-${id}-sprite5`} />
        <use height="3.75" transform="matrix(-0.7641, 1.1518, -1.1518, -0.7641, -0.1651, -21.4343)" width="5.9" xlinkHref={`#DeathPanther-4-${id}-sprite1`} />
        <use height="13.0" transform="matrix(-1.0392, 0.8926, -0.8926, -1.0392, 29.5412, -15.2694)" width="16.45" xlinkHref={`#DeathPanther-4-${id}-sprite6`} />
        <use height="7.55" transform="matrix(-1.4509, -0.1813, 0.1813, -1.4509, 3.7519, -1.6721)" width="4.85" xlinkHref={`#DeathPanther-4-${id}-sprite4`} />
        <use height="5.75" transform="matrix(-0.103, 2.2291, -2.2291, -0.103, 6.8588, -18.253)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.7167, 2.086, -1.5168, -1.2482, 13.667, -11.225)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
        <use height="3.75" transform="matrix(-0.8207, 0.2637, -0.3457, -1.076, 3.7607, -18.0873)" width="5.9" xlinkHref={`#DeathPanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(-1.8058, 0.2544, -0.2544, -1.8058, 3.1068, -8.602)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-sprite2`} />
      </g>
      <defs>
        <g id={`DeathPanther-4-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-4-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-4-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-4-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-4-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-4-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-4-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-4-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-4-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-4-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-4-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-4-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-4-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-4-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#DeathPanther-4-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-4-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 5 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 4}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.3836, 0.0, 0.0, 0.9889, -18.2221, 2.5612)" width="40.0" xlinkHref={`#DeathPanther-5-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -7.584)" width="5.9" xlinkHref={`#DeathPanther-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -4.7931)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 9.5272)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 11.9084)" width="13.85" xlinkHref={`#DeathPanther-5-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -1.5731)" width="13.0" xlinkHref={`#DeathPanther-5-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -4.6572)" width="5.9" xlinkHref={`#DeathPanther-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 5.8649)" width="4.85" xlinkHref={`#DeathPanther-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -2.6948)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -4.1776)" width="8.9" xlinkHref={`#DeathPanther-5-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 6.01)" width="8.9" xlinkHref={`#DeathPanther-5-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.6172, 0.2088)" width="5.9" xlinkHref={`#DeathPanther-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.225, 11.8163)" width="4.85" xlinkHref={`#DeathPanther-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 3.8653, 1.8602)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 10.0267)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -2.7567)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -3.1842)" width="5.9" xlinkHref={`#DeathPanther-5-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-2.4395, 0.0, 0.0, 0.6919, 21.1412, 12.1278)" width="3.6" xlinkHref={`#DeathPanther-5-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-2.1084, 0.6215, 0.6796, 0.598, 25.4, 8.8657)" width="3.6" xlinkHref={`#DeathPanther-5-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-5-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-5-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-5-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-5-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-5-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-5-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-5-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-5-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-5-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-5-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-5-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-5-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-5-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-5-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-5-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-5-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-5-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-5-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-5-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.39607844" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.39607844" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.39607844" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.39607844" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 6 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 5}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4073, 0.0, 0.0, 0.9889, -18.5967, 1.0114)" width="40.0" xlinkHref={`#DeathPanther-6-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -7.584)" width="5.9" xlinkHref={`#DeathPanther-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -4.7931)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 9.5272)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 11.9084)" width="13.85" xlinkHref={`#DeathPanther-6-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -1.5731)" width="13.0" xlinkHref={`#DeathPanther-6-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -4.6572)" width="5.9" xlinkHref={`#DeathPanther-6-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 5.8649)" width="4.85" xlinkHref={`#DeathPanther-6-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -2.6948)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -4.1776)" width="8.9" xlinkHref={`#DeathPanther-6-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 6.01)" width="8.9" xlinkHref={`#DeathPanther-6-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.6172, 0.2088)" width="5.9" xlinkHref={`#DeathPanther-6-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.225, 11.8163)" width="4.85" xlinkHref={`#DeathPanther-6-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 3.8653, 1.8602)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 10.0267)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -2.7567)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -3.1842)" width="5.9" xlinkHref={`#DeathPanther-6-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-2.7089, 0.0, 0.0, 0.9566, 21.5261, 11.7454)" width="3.6" xlinkHref={`#DeathPanther-6-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-2.1404, 0.81, 1.0744, 0.7364, 24.739, 8.422)" width="3.6" xlinkHref={`#DeathPanther-6-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-6-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-6-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-6-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-6-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-6-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-6-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-6-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-6-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-6-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-6-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-6-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-6-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-6-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-6-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-6-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-6-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-6-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-6-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-6-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.3764706" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.3764706" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.3764706" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.3764706" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 7 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 6}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-7-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-7-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-7-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-7-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-7-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-7-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-7-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-7-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-7-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-7-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-2.972, 0.0, 0.0, 1.2151, 21.7995, 11.3769)" width="3.6" xlinkHref={`#DeathPanther-7-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-2.1143, 1.0053, 1.5265, 0.8327, 23.7974, 8.0084)" width="3.6" xlinkHref={`#DeathPanther-7-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-7-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-7-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-7-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-7-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-7-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-7-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-7-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-7-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-7-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-7-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-7-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-7-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-7-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-7-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-7-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-7-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-7-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-7-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-7-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.35686275" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.35686275" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.35686275" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.35686275" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 8 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 7}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-8-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-8-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-8-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-8-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-8-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-8-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-8-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-8-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-8-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-8-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-8-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-3.2281, 0.0, 0.0, 1.4668, 22.1106, 11.0231)" width="3.6" xlinkHref={`#DeathPanther-8-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.1081, 0.6217, 0.6798, -0.5979, 3.3098, 13.4963)" width="3.6" xlinkHref={`#DeathPanther-8-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-2.0297, 1.2023, 2.0191, 0.8842, 22.5614, 7.6407)" width="3.6" xlinkHref={`#DeathPanther-8-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-8-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-8-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-8-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-8-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-8-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-8-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-8-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-8-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-8-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-8-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-8-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-8-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-8-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-8-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-8-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-8-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-8-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-8-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-8-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.3372549" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.3372549" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.3372549" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.3372549" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 9 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 8}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-9-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-9-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-9-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-9-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-9-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-9-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-9-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-9-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-9-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-9-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-9-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-3.4778, 0.0, 0.0, 1.7121, 22.4601, 10.7334)" width="3.6" xlinkHref={`#DeathPanther-9-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.3851, 0.6504, 0.8856, -0.8424, 2.3086, 13.9326)" width="3.6" xlinkHref={`#DeathPanther-9-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-1.8882, 1.3966, 2.5363, 0.8895, 21.3189, 7.4293)" width="3.6" xlinkHref={`#DeathPanther-9-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-9-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-9-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-9-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-9-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-9-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-9-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-9-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-9-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-9-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-9-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-9-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-9-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-9-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-9-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-9-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-9-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-9-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-9-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-9-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.31764707" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.31764707" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.31764707" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.31764707" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 10 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 9}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-10-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-10-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-10-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-10-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-10-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-10-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-10-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-10-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-10-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-10-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-10-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-3.7207, 0.0, 0.0, 1.9507, 22.7972, 10.3584)" width="3.6" xlinkHref={`#DeathPanther-10-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.661, 0.67, 1.0562, -1.0881, 1.2866, 14.438)" width="3.6" xlinkHref={`#DeathPanther-10-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-1.6918, 1.5841, 3.0632, 0.8487, 19.9062, 7.3316)" width="3.6" xlinkHref={`#DeathPanther-10-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-10-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-10-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-10-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-10-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-10-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-10-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-10-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-10-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-10-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-10-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-10-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-10-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-10-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-10-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-10-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-10-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-10-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-10-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-10-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.3019608" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.3019608" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.3019608" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.3019608" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 11 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 10}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-11-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-11-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-11-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-11-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-11-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-11-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-11-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-11-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-11-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-11-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-11-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-3.957, 0.0, 0.0, 2.183, 23.0227, 10.0975)" width="3.6" xlinkHref={`#DeathPanther-11-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.9343, 0.6808, 1.1928, -1.3336, 0.444, 14.9584)" width="3.6" xlinkHref={`#DeathPanther-11-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-1.4449, 1.7607, 3.5845, 0.763, 18.365, 7.3521)" width="3.6" xlinkHref={`#DeathPanther-11-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-11-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-11-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-11-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-11-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-11-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-11-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-11-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-11-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-11-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-11-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-11-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-11-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-11-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-11-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-11-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-11-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-11-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-11-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-11-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.28627452" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.28627452" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.28627452" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.28627452" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 12 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 11}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-12-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-12-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-12-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-12-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-12-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-12-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-12-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-12-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-12-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-12-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-12-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-4.1867, 0.0, 0.0, 2.4086, 23.386, 9.7511)" width="3.6" xlinkHref={`#DeathPanther-12-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.2044, 0.6835, 1.2975, -1.5779, -0.3724, 15.491)" width="3.6" xlinkHref={`#DeathPanther-12-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-1.1517, 1.9235, 4.0876, 0.6348, 16.8303, 7.4911)" width="3.6" xlinkHref={`#DeathPanther-12-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-12-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-12-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-12-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-12-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-12-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-12-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-12-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-12-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-12-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-12-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-12-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-12-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-12-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-12-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-12-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-12-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-12-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-12-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-12-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.27058825" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.27058825" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.27058825" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.27058825" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 13 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 12}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-13-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-13-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-13-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-13-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-13-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-13-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-13-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-13-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-13-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-13-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-13-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-4.4097, 0.0, 0.0, 2.6277, 23.6875, 9.419)" width="3.6" xlinkHref={`#DeathPanther-13-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.4699, 0.6786, 1.3719, -1.8196, -1.1139, 16.0318)" width="3.6" xlinkHref={`#DeathPanther-13-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-0.817, 2.0697, 4.5616, 0.4671, 15.335, 7.7469)" width="3.6" xlinkHref={`#DeathPanther-13-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-13-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-13-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-13-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-13-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-13-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-13-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-13-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-13-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-13-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-13-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-13-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-13-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-13-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-13-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-13-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-13-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-13-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-13-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-13-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.25490198" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.25490198" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.25490198" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.25490198" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 14 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 13}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-14-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-14-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-14-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-14-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-14-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-14-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-14-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-14-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-14-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-14-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-14-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-4.626, 0.0, 0.0, 2.8402, 23.9268, 9.1516)" width="3.6" xlinkHref={`#DeathPanther-14-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.7304, 0.6665, 1.4179, -2.0583, -1.7839, 16.5785)" width="3.6" xlinkHref={`#DeathPanther-14-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-0.4471, 2.197, 4.996, 0.2638, 13.7636, 8.1151)" width="3.6" xlinkHref={`#DeathPanther-14-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-14-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-14-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-14-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-14-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-14-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-14-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-14-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-14-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-14-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-14-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-14-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-14-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-14-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-14-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-14-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-14-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-14-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-14-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-14-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.23921569" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.23921569" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.23921569" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.23921569" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 15 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 14}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-15-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-15-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-15-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-15-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-15-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-15-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-15-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-15-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-15-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-15-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-15-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-4.8356, 0.0, 0.0, 3.0462, 24.1541, 8.8484)" width="3.6" xlinkHref={`#DeathPanther-15-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.9846, 0.6479, 1.4373, -2.2928, -2.4345, 17.0779)" width="3.6" xlinkHref={`#DeathPanther-15-${id}-sprite7`} />
        <use height="3.9" transform="matrix(-0.0478, 2.3039, 5.383, 0.029, 12.2935, 8.5392)" width="3.6" xlinkHref={`#DeathPanther-15-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-15-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-15-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-15-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-15-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-15-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-15-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-15-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-15-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-15-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-15-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-15-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-15-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-15-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-15-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-15-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-15-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-15-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-15-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-15-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.22352941" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.22352941" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.22352941" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.22352941" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 16 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 15}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-16-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-16-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-16-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-16-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-16-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-16-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-16-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-16-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-16-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-16-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-16-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.0387, 0.0, 0.0, 3.2457, 24.4696, 8.6094)" width="3.6" xlinkHref={`#DeathPanther-16-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.2325, 0.6234, 1.4323, -2.5225, -3.0195, 17.6775)" width="3.6" xlinkHref={`#DeathPanther-16-${id}-sprite7`} />
        <use height="3.9" transform="matrix(0.375, 2.3892, 5.7163, -0.2326, 10.8492, 9.1113)" width="3.6" xlinkHref={`#DeathPanther-16-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-16-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-16-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-16-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-16-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-16-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-16-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-16-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-16-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-16-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-16-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-16-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-16-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-16-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-16-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-16-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-16-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-16-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-16-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-16-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.20784314" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.20784314" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.20784314" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.20784314" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 17 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 16}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-17-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-17-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-17-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-17-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-17-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-17-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-17-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-17-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-17-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-17-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-17-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.2349, 0.0, 0.0, 3.4386, 24.6729, 8.3352)" width="3.6" xlinkHref={`#DeathPanther-17-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.4728, 0.5933, 1.4046, -2.7466, -3.4912, 18.2746)" width="3.6" xlinkHref={`#DeathPanther-17-${id}-sprite7`} />
        <use height="3.9" transform="matrix(0.8147, 2.4521, 5.9911, -0.5163, 9.603, 9.722)" width="3.6" xlinkHref={`#DeathPanther-17-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-17-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-17-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-17-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-17-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-17-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-17-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-17-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-17-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-17-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-17-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-17-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-17-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-17-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-17-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-17-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-17-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-17-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-17-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-17-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.19607843" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.19607843" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.19607843" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.19607843" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 18 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 17}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-18-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-18-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-18-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-18-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-18-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-18-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-18-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-18-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-18-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-18-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-18-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.4247, 0.0, 0.0, 3.625, 24.9645, 8.125)" width="3.6" xlinkHref={`#DeathPanther-18-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.7056, 0.5583, 1.3562, -2.9648, -3.9037, 18.7675)" width="3.6" xlinkHref={`#DeathPanther-18-${id}-sprite7`} />
        <use height="3.9" transform="matrix(1.2659, 2.4928, 6.2045, -0.8172, 8.3714, 10.5108)" width="3.6" xlinkHref={`#DeathPanther-18-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-18-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-18-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-18-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-18-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-18-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-18-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-18-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-18-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-18-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-18-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-18-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-18-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-18-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-18-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-18-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-18-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-18-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-18-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-18-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.18039216" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.18039216" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.18039216" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.18039216" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 19 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 18}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-19-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-19-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-19-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-19-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-19-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-19-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-19-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-19-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-19-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-19-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-19-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.6077, 0.0, 0.0, 3.8048, 25.1439, 7.8794)" width="3.6" xlinkHref={`#DeathPanther-19-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.9305, 0.519, 1.289, -3.1765, -4.3106, 19.3041)" width="3.6" xlinkHref={`#DeathPanther-19-${id}-sprite7`} />
        <use height="3.9" transform="matrix(1.7234, 2.5112, 6.355, -1.1312, 7.2668, 11.2684)" width="3.6" xlinkHref={`#DeathPanther-19-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-19-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-19-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-19-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-19-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-19-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-19-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-19-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-19-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-19-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-19-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-19-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-19-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-19-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-19-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-19-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-19-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-19-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-19-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-19-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.16862746" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.16862746" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.16862746" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.16862746" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 20 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 19}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-20-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-20-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-20-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-20-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-20-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-20-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-20-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-20-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-20-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-20-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-20-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.7842, 0.0, 0.0, 3.9782, 25.3615, 7.598)" width="3.6" xlinkHref={`#DeathPanther-20-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.1468, 0.4758, 1.2051, -3.3811, -4.6154, 19.782)" width="3.6" xlinkHref={`#DeathPanther-20-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.1808, 2.5081, 6.4422, -1.4529, 6.3018, 12.1318)" width="3.6" xlinkHref={`#DeathPanther-20-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-20-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-20-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-20-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-20-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-20-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-20-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-20-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-20-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-20-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-20-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-20-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-20-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-20-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-20-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-20-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-20-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-20-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-20-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-20-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.15686275" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.15686275" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.15686275" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.15686275" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 21 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 20}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-21-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-21-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-21-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-21-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-21-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-21-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-21-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-21-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-21-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-21-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-21-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-5.9539, 0.0, 0.0, 4.1449, 25.567, 7.3812)" width="3.6" xlinkHref={`#DeathPanther-21-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.3547, 0.4292, 1.106, -3.5786, -4.9216, 20.3003)" width="3.6" xlinkHref={`#DeathPanther-21-${id}-sprite7`} />
        <use height="3.9" transform="matrix(2.6339, 2.4843, 6.4672, -1.7785, 5.5811, 12.9409)" width="3.6" xlinkHref={`#DeathPanther-21-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-21-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-21-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-21-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-21-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-21-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-21-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-21-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-21-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-21-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-21-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-21-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-21-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-21-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-21-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-21-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-21-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-21-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-21-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-21-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.14117648" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.14117648" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.14117648" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.14117648" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 22 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 21}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-22-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-22-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-22-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-22-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-22-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-22-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-22-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-22-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-22-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-22-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-22-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.1168, 0.0, 0.0, 4.305, 25.8103, 7.2289)" width="3.6" xlinkHref={`#DeathPanther-22-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.5537, 0.3799, 0.9939, -3.7686, -5.1832, 20.7571)" width="3.6" xlinkHref={`#DeathPanther-22-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.079, 2.441, 6.4321, -2.1044, 4.8572, 13.8358)" width="3.6" xlinkHref={`#DeathPanther-22-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-22-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-22-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-22-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-22-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-22-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-22-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-22-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-22-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-22-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-22-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-22-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-22-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-22-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-22-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-22-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-22-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-22-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-22-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-22-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.13333334" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.13333334" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.13333334" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.13333334" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 23 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 22}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-23-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-23-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-23-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-23-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-23-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-23-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-23-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-23-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-23-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-23-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-23-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.2733, 0.0, 0.0, 4.4588, 25.992, 6.9907)" width="3.6" xlinkHref={`#DeathPanther-23-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.744, 0.3282, 0.8703, -3.951, -5.3539, 21.3014)" width="3.6" xlinkHref={`#DeathPanther-23-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.5113, 2.3796, 6.3399, -2.4264, 4.432, 14.8047)" width="3.6" xlinkHref={`#DeathPanther-23-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-23-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-23-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-23-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-23-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-23-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-23-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-23-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-23-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-23-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-23-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-23-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-23-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-23-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-23-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-23-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-23-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-23-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-23-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-23-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.12156863" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.12156863" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.12156863" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.12156863" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 24 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 23}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-24-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-24-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-24-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-24-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-24-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-24-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-24-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-24-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-24-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-24-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-24-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.423, 0.0, 0.0, 4.6059, 26.2114, 6.8171)" width="3.6" xlinkHref={`#DeathPanther-24-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.9252, 0.2746, 0.7372, -4.1254, -5.5373, 21.7315)" width="3.6" xlinkHref={`#DeathPanther-24-${id}-sprite7`} />
        <use height="3.9" transform="matrix(3.928, 2.3018, 6.1943, -2.7418, 4.0021, 15.7888)" width="3.6" xlinkHref={`#DeathPanther-24-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-24-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-24-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-24-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-24-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-24-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-24-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-24-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-24-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-24-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-24-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-24-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-24-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-24-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-24-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-24-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-24-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-24-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-24-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-24-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.10980392" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.10980392" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.10980392" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.10980392" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 25 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 24}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-25-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-25-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-25-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-25-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-25-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-25-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-25-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-25-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-25-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-25-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-25-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.5662, 0.0, 0.0, 4.7465, 26.3691, 6.6076)" width="3.6" xlinkHref={`#DeathPanther-25-${id}-sprite7`} />
        <use height="3.9" transform="matrix(6.0974, 0.2197, 0.5961, -4.2917, -5.6368, 22.1964)" width="3.6" xlinkHref={`#DeathPanther-25-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.3266, 2.209, 5.9994, -3.0478, 3.7634, 16.6789)" width="3.6" xlinkHref={`#DeathPanther-25-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-25-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-25-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-25-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-25-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-25-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-25-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-25-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-25-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-25-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-25-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-25-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-25-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-25-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-25-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-25-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-25-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-25-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-25-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-25-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.09803922" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.09803922" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.09803922" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.09803922" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 26 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 25}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-26-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-26-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-26-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-26-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-26-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-26-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-26-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-26-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-26-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-26-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-26-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.7026, 0.0, 0.0, 4.8806, 26.5146, 6.4627)" width="3.6" xlinkHref={`#DeathPanther-26-${id}-sprite7`} />
        <use height="3.9" transform="matrix(6.2608, 0.1637, 0.4487, -4.4502, -5.7566, 22.6458)" width="3.6" xlinkHref={`#DeathPanther-26-${id}-sprite7`} />
        <use height="3.9" transform="matrix(4.7044, 2.1032, 5.7601, -3.3418, 3.7098, 17.6161)" width="3.6" xlinkHref={`#DeathPanther-26-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-26-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-26-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-26-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-26-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-26-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-26-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-26-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-26-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-26-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-26-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-26-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-26-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-26-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-26-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-26-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-26-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-26-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-26-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-26-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.09019608" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.09019608" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.09019608" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.09019608" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
      {/* FRAME 27 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${X_OFFSET + (WIDTH + MARGIN) * 26}, ${Y_OFFSET})`}>
        <use height="20.0" transform="matrix(1.4311, 0.0, 0.0, 0.9889, -18.9718, -0.4388)" width="40.0" xlinkHref={`#DeathPanther-27-${id}-sprite0`} />
        <use height="3.75" transform="matrix(0.7396, 1.0318, -0.9353, 0.6704, 5.8484, -10.584)" width="5.9" xlinkHref={`#DeathPanther-27-${id}-sprite1`} />
        <use height="5.75" transform="matrix(0.2524, 1.9861, -1.9094, 0.0766, 18.7854, -7.7931)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-1.9617, 1.3979, -1.1032, -1.2816, 21.9859, 6.5272)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="5.4" transform="matrix(-1.1145, -0.1982, -0.1982, 1.1145, -0.3751, 8.9084)" width="13.85" xlinkHref={`#DeathPanther-27-${id}-sprite3`} />
        <use height="9.4" transform="matrix(-1.3164, 0.383, 0.383, 1.3164, 31.8788, -4.5731)" width="13.0" xlinkHref={`#DeathPanther-27-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.568, 0.9818, -0.8512, 0.4924, -10.6008, -7.6572)" width="5.9" xlinkHref={`#DeathPanther-27-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.3446, 0.5858, -0.5853, -1.3033, 5.0002, 2.8649)" width="4.85" xlinkHref={`#DeathPanther-27-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.5082, 1.7425, -1.5728, 0.3333, -0.5099, -5.6948)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="7.2" transform="matrix(-1.643, 1.1765, 1.4468, 2.0204, 14.0449, -7.1776)" width="8.9" xlinkHref={`#DeathPanther-27-${id}-sprite6`} />
        <use height="7.2" transform="matrix(1.3783, 0.024, -0.024, 1.3783, -3.1833, 3.01)" width="8.9" xlinkHref={`#DeathPanther-27-${id}-sprite6`} />
        <use height="3.75" transform="matrix(0.0382, 0.8639, -1.1327, 0.0501, -5.1172, -2.2912)" width="5.9" xlinkHref={`#DeathPanther-27-${id}-sprite1`} />
        <use height="7.55" transform="matrix(-1.457, 0.1651, -0.1651, -1.457, 6.725, 9.3163)" width="4.85" xlinkHref={`#DeathPanther-27-${id}-sprite5`} />
        <use height="5.75" transform="matrix(0.0551, 1.8306, -1.8306, 0.0551, 4.3653, -0.6398)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="5.75" transform="matrix(-2.6712, -0.4284, 0.3114, -1.9423, 20.6825, 7.0267)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="5.75" transform="matrix(0.2451, 2.2262, -2.2262, 0.2451, 22.3656, -5.7567)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.3634, 0.2583, -0.2583, 1.3634, 7.2559, -6.1842)" width="5.9" xlinkHref={`#DeathPanther-27-${id}-sprite1`} />
        <use height="3.9" transform="matrix(-6.8324, 0.0, 0.0, 5.0081, 26.6483, 6.2321)" width="3.6" xlinkHref={`#DeathPanther-27-${id}-sprite7`} />
        <use height="3.9" transform="matrix(6.4153, 0.1072, 0.2965, -4.6007, -5.7999, 23.0785)" width="3.6" xlinkHref={`#DeathPanther-27-${id}-sprite7`} />
        <use height="3.9" transform="matrix(5.0599, 1.9862, 5.4816, -3.6221, 3.7326, 18.5434)" width="3.6" xlinkHref={`#DeathPanther-27-${id}-sprite7`} />
      </g>
      <defs>
        <g id={`DeathPanther-27-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <use height="20.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -10.0)" width="40.0" xlinkHref={`#DeathPanther-27-${id}-shape0`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 10.0)">
          <path d="M14.15 -7.05 Q20.0 -4.1 20.0 0.0 20.0 1.3 19.4 2.5 18.15 5.05 14.15 7.1 8.3 10.0 0.0 10.0 -8.3 10.0 -14.15 7.1 -18.15 5.05 -19.4 2.5 -20.0 1.3 -20.0 0.0 -20.0 -4.1 -14.15 -7.05 -8.3 -10.0 0.0 -10.0 8.3 -10.0 14.15 -7.05" fill="url(#gradient0)" fillRule="evenodd" stroke="none" />
        </g>
        <radialGradient cx="0" cy="0" gradientTransform="matrix(0.0244, 0.0, 0.0, 0.0123, 0.0, 0.0)" gradientUnits="userSpaceOnUse" id={`DeathPanther-27-${id}-gradient0`} r="819.2" spreadMethod="pad">
          <stop offset="0.611764705882353" stopColor="#c10202" stopOpacity="0.15686275" />
          <stop offset="1.0" stopColor="#660000" stopOpacity="0.0" />
        </radialGradient>
        <g id={`DeathPanther-27-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#DeathPanther-27-${id}-shape1`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#DeathPanther-27-${id}-shape2`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#DeathPanther-27-${id}-shape3`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <use height="9.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.9, -4.1)" width="13.0" xlinkHref={`#DeathPanther-27-${id}-shape4`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.9, 4.1)">
          <path d="M-6.9 -3.2 L-6.85 -3.3 -6.75 -3.4 -6.4 -3.65 -6.25 -3.75 -5.9 -3.95 -5.7 -3.95 -5.45 -4.0 -5.05 -4.05 -4.95 -4.1 -4.05 -4.05 -3.2 -3.95 -2.6 -3.8 -2.0 -3.75 -1.9 -3.8 -1.15 -3.95 -0.85 -3.95 0.4 -4.05 0.0 -3.45 0.3 -3.55 1.0 -3.6 1.7 -3.7 2.25 -3.7 2.25 -3.65 1.65 -3.45 0.5 -2.9 0.55 -2.9 0.65 -2.85 1.1 -2.8 2.6 -2.9 3.05 -2.85 3.8 -2.75 4.4 -2.65 4.45 -2.6 4.55 -2.5 Q5.05 -1.85 5.05 -1.2 L5.1 -0.2 4.75 1.15 4.75 1.2 2.9 1.0 1.35 0.85 0.2 0.5 1.7 2.1 1.0 1.9 -1.25 1.0 -0.9 1.7 -0.95 1.75 -1.4 1.55 -1.95 1.1 -2.0 1.65 -2.0 1.7 -2.05 1.7 -2.85 0.9 -3.35 0.5 -3.6 1.2 -4.55 -0.35 -4.65 -0.5 -5.0 -0.65 -5.05 -0.85 -4.9 -1.25 -4.85 -1.3 Q-4.6 -1.1 -4.1 -1.05 -3.65 -1.0 -4.0 -1.3 L-4.55 -1.6 Q-4.7 -1.6 -5.45 -2.05 L-5.7 -2.2 -5.85 -2.1 -5.9 -2.1 -6.1 -2.15 -6.6 -2.3 -6.75 -2.45 -6.85 -2.6 -6.95 -2.85 -6.95 -3.05 -6.95 -3.1 -6.9 -3.2 -6.95 -3.1 -7.0 -3.15 -6.9 -3.2" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M-6.95 -3.1 L-6.95 -3.05 -6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.7 -2.2 -5.45 -2.05 Q-4.7 -1.6 -4.55 -1.6 L-4.0 -1.3 Q-3.65 -1.0 -4.1 -1.05 -4.6 -1.1 -4.85 -1.3 L-4.9 -1.25 -5.05 -0.85 -5.0 -0.65 -4.65 -0.5 -4.55 -0.35 -3.6 1.2 -3.35 0.5 -2.85 0.9 -2.05 1.7 -2.0 1.7 -2.0 1.65 -1.95 1.1 -1.4 1.55 -0.95 1.75 -0.9 1.7 -1.25 1.0 1.0 1.9 1.7 2.1 0.2 0.5 1.35 0.85 2.9 1.0 4.75 1.2 4.65 1.5 4.5 1.7 4.25 2.25 4.0 3.1 3.9 3.3 3.5 3.25 3.35 3.2 2.75 3.25 2.65 3.35 2.75 3.7 3.15 4.25 2.1 4.1 1.6 4.0 0.75 3.65 0.7 3.65 0.9 3.95 0.9 4.05 0.75 4.15 0.7 4.15 0.65 4.1 0.55 4.1 0.4 4.1 0.35 4.05 0.25 4.05 -0.2 4.05 -1.25 4.0 -1.6 4.0 -2.35 4.0 -2.55 4.0 -2.65 4.1 -2.65 4.65 -2.65 5.15 -2.7 5.3 -3.35 4.5 -3.75 4.0 -4.45 2.65 -4.4 2.6 -4.5 2.2 -4.55 2.05 -4.55 2.0 -4.9 1.15 -5.1 -0.05 -5.0 -0.65 -5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.6 2.05 -5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.15 -5.75 0.1 -5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 -7.0 -3.15 -6.95 -3.1 M-5.45 -2.05 L-5.85 -2.1 -5.45 -2.05 M-0.25 3.1 L-1.95 2.3 -2.45 1.95 -2.5 2.4 -2.6 2.65 -3.15 2.25 -3.5 1.85 -3.85 1.5 -3.95 1.45 -3.95 1.6 -4.0 1.65 -4.05 1.9 -4.25 2.45 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.25 -3.7 L1.7 -3.7 1.0 -3.6 0.3 -3.55 0.0 -3.45 0.4 -4.05 -0.85 -3.95 -1.15 -3.95 -1.9 -3.8 -2.0 -3.75 -2.6 -3.8 -3.2 -3.95 -4.05 -4.05 -4.95 -4.1 -5.05 -4.05 -5.45 -4.0 -5.7 -3.95 -5.9 -3.95 -6.25 -3.75 -6.4 -3.65 -6.75 -3.4 -6.85 -3.3 -6.9 -3.2 -6.95 -3.1 M-6.95 -3.05 L-6.95 -2.85 -6.85 -2.6 -6.75 -2.45 -6.6 -2.3 -6.1 -2.15 -5.9 -2.1 -5.85 -2.1 -5.45 -2.05 M3.8 -2.75 L3.05 -2.85 2.6 -2.9 1.1 -2.8 0.65 -2.85 0.55 -2.9 0.5 -2.9 1.65 -3.45 2.25 -3.65 2.35 -3.7 2.25 -3.7 M3.8 -2.75 L4.0 -2.75 4.4 -2.65 4.55 -2.5 M-4.45 2.65 L-3.75 4.0 -3.35 4.5 -2.7 5.3 -2.65 5.15 -2.65 4.65 -2.65 4.1 -2.55 4.0 -2.35 4.0 -1.6 4.0 -1.25 4.0 -0.2 4.05 0.25 4.05 0.35 4.05 0.4 4.1 0.55 4.1 0.65 4.1 0.7 4.15 0.75 4.15 0.9 4.05 0.9 3.95 0.7 3.65 0.75 3.65 1.6 4.0 2.1 4.1 3.15 4.25 2.75 3.7 2.65 3.35 2.75 3.25 3.35 3.2 3.5 3.25 3.9 3.3 M-6.9 -3.2 L-7.0 -3.15 M-5.75 0.1 L-5.8 -0.05 -5.8 -0.1 -5.9 -0.2 -6.0 -0.3 -6.2 -0.45 -6.4 -0.55 -6.65 -0.65 -7.4 -1.1 -7.5 -1.15 -7.85 -1.5 -7.9 -1.7 -7.85 -1.85 -7.7 -2.4 -7.65 -2.55 -7.45 -2.75 -7.35 -2.9 M-5.0 -0.65 L-5.1 -0.05 -4.9 1.15 -4.55 2.0 -4.55 2.05 -4.5 2.2 -4.4 2.6 -4.25 2.45 -4.05 1.9 -4.0 1.65 -3.95 1.6 -3.95 1.45 -3.85 1.5 -3.5 1.85 -3.15 2.25 -2.6 2.65 -2.5 2.4 -2.45 1.95 -1.95 2.3 -0.25 3.1 M-4.6 2.05 L-4.55 2.05 M-4.6 2.05 L-5.05 1.85 -5.6 1.6 -5.9 1.15 -5.85 0.7 -5.8 0.45 -5.75 0.1 -5.75 0.15 -5.8 0.45 M-4.6 2.05 L-4.5 2.5 -4.45 2.65" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#DeathPanther-27-${id}-shape5`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#DeathPanther-27-${id}-shape6`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`DeathPanther-27-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.8, 2.2)">
          <use height="19.25" id={`DeathPanther-27-${id}-smc`} transform="matrix(0.2011, 0.0, 0.0, 0.2011, -1.7899, -2.1907)" width="17.85" xlinkHref={`#DeathPanther-27-${id}-sprite8`} />
        </g>
        <g id={`DeathPanther-27-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" id={`DeathPanther-27-${id}-smc`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-27-${id}-sprite9`} />
        </g>
        <g id={`DeathPanther-27-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <use height="19.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -9.65)" width="17.85" xlinkHref={`#DeathPanther-27-${id}-shape7`} />
        </g>
        <g id={`DeathPanther-27-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 9.65)">
          <path d="M-2.4 -3.45 Q0.3 -3.45 2.25 -1.55 4.15 0.4 4.15 3.05 4.15 5.75 2.25 7.7 0.3 9.6 -2.4 9.6 -5.1 9.6 -7.05 7.7 -8.9 5.75 -8.9 3.05 -8.9 0.4 -7.05 -1.55 -5.1 -3.45 -2.4 -3.45" fill="#ffbc47" fillOpacity="0.078431375" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -9.65 Q0.15 -9.65 1.8 -7.95 3.5 -6.3 3.5 -4.0 3.5 -1.65 1.8 0.0 0.15 1.65 -2.15 1.65 -4.55 1.65 -6.2 0.0 -7.8 -1.65 -7.8 -4.0 -7.8 -6.3 -6.2 -7.95 -4.55 -9.65 -2.15 -9.65" fill="#ffbc47" fillOpacity="0.078431375" fillRule="evenodd" stroke="none" />
          <path d="M4.25 -4.55 Q6.2 -4.55 7.55 -3.15 8.95 -1.8 8.95 0.15 8.95 2.1 7.55 3.45 6.2 4.85 4.25 4.85 2.3 4.85 0.9 3.45 -0.45 2.1 -0.45 0.15 -0.45 -1.8 0.9 -3.15 2.3 -4.55 4.25 -4.55" fill="#ffbc47" fillOpacity="0.078431375" fillRule="evenodd" stroke="none" />
          <path d="M4.0 -1.0 L4.0 -0.95 Q4.75 -0.2 4.75 0.8 4.75 1.85 4.0 2.6 3.25 3.35 2.2 3.35 L1.45 3.25 Q1.3 4.5 0.35 5.5 -0.8 6.6 -2.35 6.6 -3.95 6.6 -5.0 5.5 L-5.05 5.5 Q-6.1 4.35 -6.1 2.8 -6.1 1.25 -5.05 0.15 L-5.0 0.1 -4.75 -0.15 Q-5.35 -0.95 -5.35 -2.05 -5.35 -3.35 -4.45 -4.25 -3.5 -5.2 -2.2 -5.2 -0.9 -5.2 0.05 -4.25 1.0 -3.35 1.0 -2.05 L0.95 -1.4 2.2 -1.75 Q3.25 -1.75 4.0 -1.0" fill="#ff9a25" fillOpacity="0.078431375" fillRule="evenodd" stroke="none" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default DeathPanther;