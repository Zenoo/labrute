/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface ArrivePantherProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const ArrivePanther_WIDTH = 140;
export const ArrivePanther_HEIGHT = 77.6;
export const ArrivePanther_FRAMES = 5;
export const ArrivePanther_X_OFFSET = 50;
export const ArrivePanther_Y_OFFSET = 40;
export const ArrivePanther_MARGIN = 30;

const ArrivePanther = ({ id, inverted, sx, ...rest }: ArrivePantherProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: ArrivePanther_WIDTH,
      height: ArrivePanther_HEIGHT,
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
          ? -(ArrivePanther_WIDTH + ArrivePanther_MARGIN)
            * (ArrivePanther_FRAMES - 1)
            - (!inverted ? ArrivePanther_MARGIN : 0)
          : 0,
        width: (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * ArrivePanther_FRAMES,
        animation: `ArrivePanther${inverted ? 'Inverted' : ''} 1s steps(${ArrivePanther_FRAMES}, jump-none) forwards`,
        transform: !inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${ArrivePanther_X_OFFSET + (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * 0}, ${ArrivePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#ArrivePanther-1-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -13.7163, -0.4642)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
        <use height="5.4" transform="matrix(1.0162, -0.503, 0.503, 1.0162, 3.9304, -6.573)" width="13.85" xlinkHref={`#ArrivePanther-1-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#ArrivePanther-1-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -4.9012)" width="4.85" xlinkHref={`#ArrivePanther-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -7.3897)" width="8.9" xlinkHref={`#ArrivePanther-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -5.0403)" width="8.9" xlinkHref={`#ArrivePanther-1-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#ArrivePanther-1-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#ArrivePanther-1-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -0.3495)" width="16.45" xlinkHref={`#ArrivePanther-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.7227, 0.63, -0.63, 1.7227, 11.4293, -0.1248)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(0.6861, -1.2963, 1.2963, 0.6861, 3.1553, 0.0657)" width="4.85" xlinkHref={`#ArrivePanther-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.8974, 1.1935, -1.1934, 1.8974, -0.1899, 4.1903)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(1.3504, -2.3459, 1.7058, 0.9819, -9.7289, 2.0822)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`ArrivePanther-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 9.75, 20.35)">
          <path d="M-1.2 -18.85 Q-0.8 -16.4 0.2 -14.3 L0.8 -13.65 2.1 -13.65 Q3.75 -14.95 4.9 -16.7 5.95 -18.4 6.25 -20.35 6.4 -19.4 6.2 -18.4 5.85 -16.8 6.15 -15.05 L8.0 -14.9 Q8.95 -15.1 9.75 -15.75 L11.25 -17.4 Q10.85 -15.4 9.75 -13.65 8.15 -11.2 9.45 -8.75 L12.2 -9.0 11.5 -6.9 8.85 -7.6 5.5 -8.05 3.15 -10.6 1.0 -8.85 Q-1.35 -6.2 -1.7 -2.45 -2.35 3.9 2.45 7.15 4.2 6.5 5.0 5.05 L5.25 4.6 7.45 4.8 9.0 4.6 Q9.35 6.0 10.2 7.35 L9.35 7.3 8.55 7.35 7.9 7.55 7.35 7.8 Q6.55 8.55 6.6 9.55 6.7 12.1 7.35 14.15 L4.7 11.3 Q3.2 12.55 1.95 14.15 -0.35 17.05 -1.7 20.3 L-1.15 17.35 Q-0.1 13.55 -3.05 11.65 -5.95 9.8 -8.5 12.45 -6.1 8.9 -5.35 4.5 -4.65 0.2 -8.65 -1.95 L-6.6 -3.45 Q-5.95 -3.95 -6.0 -4.75 -6.15 -9.15 -9.75 -12.05 -6.85 -10.0 -3.25 -10.15 -1.6 -11.35 -1.45 -13.0 -1.15 -16.55 -1.35 -20.3 L-1.2 -18.85" fill="#ffffff" fillOpacity="0.49803922" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#ArrivePanther-1-${id}-shape1`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#ArrivePanther-1-${id}-shape2`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#ArrivePanther-1-${id}-shape3`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#ArrivePanther-1-${id}-shape4`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#ArrivePanther-1-${id}-shape5`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#ArrivePanther-1-${id}-shape6`} />
        </g>
        <g id={`ArrivePanther-1-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 2 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${ArrivePanther_X_OFFSET + (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * 1}, ${ArrivePanther_Y_OFFSET})`}>
        <use height="52.05" transform="matrix(0.0026, -0.6203, 0.8477, 0.0035, -23.4187, 22.0736)" width="28.15" xlinkHref={`#ArrivePanther-2-${id}-shape0`} />
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#ArrivePanther-2-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -13.7163, -0.4642)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
        <use height="5.4" transform="matrix(1.0162, -0.503, 0.503, 1.0162, 3.9304, -6.573)" width="13.85" xlinkHref={`#ArrivePanther-2-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#ArrivePanther-2-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -4.9012)" width="4.85" xlinkHref={`#ArrivePanther-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -7.3897)" width="8.9" xlinkHref={`#ArrivePanther-2-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -5.0403)" width="8.9" xlinkHref={`#ArrivePanther-2-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#ArrivePanther-2-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#ArrivePanther-2-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -0.3495)" width="16.45" xlinkHref={`#ArrivePanther-2-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.7227, 0.63, -0.63, 1.7227, 11.4293, -0.1248)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
        <use height="7.55" transform="matrix(0.6861, -1.2963, 1.2963, 0.6861, 3.1553, 0.0657)" width="4.85" xlinkHref={`#ArrivePanther-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.8974, 1.1935, -1.1934, 1.8974, -0.1899, 4.1903)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(1.3504, -2.3459, 1.7058, 0.9819, -9.7289, 2.0822)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`ArrivePanther-2-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 26.05)">
          <path d="M7.05 15.8 L7.3 15.7 Q7.5 17.0 7.85 18.15 L6.05 16.2 7.05 15.8 M13.0 -9.75 L12.25 -11.35 14.1 -11.5 13.55 -9.85 13.3 -9.05 13.0 -9.75 M-3.3 -26.0 L-3.1 -24.15 Q-2.55 -21.0 -1.3 -18.3 L-0.5 -17.45 1.15 -17.45 3.15 -19.3 4.75 -21.4 Q6.05 -23.55 6.45 -26.05 L6.4 -23.55 Q5.95 -21.5 6.35 -19.25 L8.7 -19.05 Q9.9 -19.35 10.95 -20.15 L12.85 -22.3 Q12.35 -19.7 10.95 -17.45 L10.25 -16.05 9.9 -14.8 Q7.2 -17.7 3.8 -17.7 L3.15 -17.65 Q1.0 -17.5 -0.8 -16.15 -2.5 -14.9 -3.9 -12.7 -7.05 -7.7 -7.05 -0.6 -7.05 6.5 -3.9 11.5 -1.2 15.75 2.5 16.4 L0.95 18.15 Q-2.0 21.85 -3.75 26.0 L-3.0 22.25 Q-1.7 17.35 -5.45 14.95 -9.15 12.55 -12.45 15.95 -9.35 11.4 -8.4 5.75 -7.5 0.25 -12.65 -2.5 L-10.0 -4.4 Q-9.15 -5.05 -9.25 -6.05 -9.45 -11.7 -14.05 -15.4 -10.3 -12.8 -5.7 -13.0 -3.6 -14.55 -3.4 -16.65 -3.0 -21.2 -3.3 -26.0" fill="#ffffff" fillOpacity="0.49803922" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#ArrivePanther-2-${id}-shape1`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#ArrivePanther-2-${id}-shape2`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#ArrivePanther-2-${id}-shape3`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#ArrivePanther-2-${id}-shape4`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#ArrivePanther-2-${id}-shape5`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-2-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#ArrivePanther-2-${id}-shape6`} />
        </g>
        <g id={`ArrivePanther-2-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 3 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${ArrivePanther_X_OFFSET + (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * 2}, ${ArrivePanther_Y_OFFSET})`}>
        <use height="65.5" transform="matrix(0.0026, -0.6203, 0.8477, 0.0035, -29.1077, 24.3142)" width="35.4" xlinkHref={`#ArrivePanther-3-${id}-shape0`} />
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#ArrivePanther-3-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
        <use height="5.4" transform="matrix(1.0791, 0.3462, -0.3462, 1.0791, 6.2387, -9.6021)" width="13.85" xlinkHref={`#ArrivePanther-3-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#ArrivePanther-3-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#ArrivePanther-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -10.3897)" width="8.9" xlinkHref={`#ArrivePanther-3-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -8.0403)" width="8.9" xlinkHref={`#ArrivePanther-3-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#ArrivePanther-3-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#ArrivePanther-3-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -6.3495)" width="16.45" xlinkHref={`#ArrivePanther-3-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0259, -0.0259, 1.836, 7.3763, -0.3312)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.3932)" width="4.85" xlinkHref={`#ArrivePanther-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8549, 3.7317)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2337, -1.535, 1.1161, 1.6242, -9.5116, -2.1477)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`ArrivePanther-3-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.7, 32.75)">
          <path d="M16.7 -11.35 L16.35 -12.25 15.4 -14.25 17.7 -14.45 17.0 -12.35 16.7 -11.35 M9.55 22.5 L9.7 22.35 9.85 22.85 9.55 22.5 M-3.9 -30.35 Q-3.35 -27.05 -2.1 -24.1 L-4.2 -22.1 Q-3.85 -27.25 -4.15 -32.65 L-3.9 -30.35 M8.8 -24.0 L10.9 -23.95 Q12.45 -24.3 13.75 -25.3 L16.15 -28.0 Q15.5 -24.75 13.75 -21.9 L12.85 -20.15 12.65 -19.45 Q10.85 -22.4 8.8 -24.0 M8.1 -32.75 Q8.35 -31.2 8.0 -29.6 7.5 -27.2 7.9 -24.65 6.6 -25.5 5.2 -25.8 L5.95 -26.9 Q7.6 -29.6 8.1 -32.75 M-17.7 -19.35 Q-13.2 -16.2 -7.7 -16.25 -10.65 -9.5 -10.65 -0.45 -10.65 10.15 -6.6 17.6 -3.75 22.85 -0.05 24.45 -2.9 28.4 -4.75 32.75 -4.5 30.35 -3.8 28.0 -2.15 21.85 -6.9 18.85 -11.55 15.8 -15.7 20.1 -11.8 14.35 -10.6 7.25 -9.45 0.35 -15.95 -3.1 L-12.6 -5.5 Q-11.55 -6.3 -11.65 -7.6 -11.9 -14.7 -17.7 -19.35" fill="#ffffff" fillOpacity="0.49803922" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#ArrivePanther-3-${id}-shape1`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#ArrivePanther-3-${id}-shape2`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#ArrivePanther-3-${id}-shape3`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#ArrivePanther-3-${id}-shape4`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#ArrivePanther-3-${id}-shape5`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-3-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#ArrivePanther-3-${id}-shape6`} />
        </g>
        <g id={`ArrivePanther-3-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 4 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${ArrivePanther_X_OFFSET + (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * 3}, ${ArrivePanther_Y_OFFSET})`}>
        <use height="73.2" transform="matrix(0.0026, -0.6203, 0.8477, 0.0035, -32.3768, 25.6343)" width="37.85" xlinkHref={`#ArrivePanther-4-${id}-shape0`} />
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#ArrivePanther-4-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
        <use height="5.4" transform="matrix(1.0791, 0.3462, -0.3462, 1.0791, 6.2387, -9.6021)" width="13.85" xlinkHref={`#ArrivePanther-4-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#ArrivePanther-4-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#ArrivePanther-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -10.3897)" width="8.9" xlinkHref={`#ArrivePanther-4-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -8.0403)" width="8.9" xlinkHref={`#ArrivePanther-4-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#ArrivePanther-4-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#ArrivePanther-4-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -6.3495)" width="16.45" xlinkHref={`#ArrivePanther-4-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0259, -0.0259, 1.836, 7.3763, -0.3312)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.3932)" width="4.85" xlinkHref={`#ArrivePanther-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8549, 3.7317)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2337, -1.535, 1.1161, 1.6242, -9.5116, -2.1477)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`ArrivePanther-4-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 36.6)">
          <path d="M-10.8 19.8 Q-14.3 19.05 -17.6 22.45 -14.8 18.35 -13.25 13.7 -12.3 16.85 -10.8 19.8 M-3.85 28.4 L-1.7 29.65 Q-3.8 33.0 -5.35 36.6 -5.05 33.9 -4.3 31.25 -3.9 29.7 -3.85 28.4 M-17.85 -3.45 L-14.95 -5.55 -15.15 -1.65 Q-16.3 -2.65 -17.85 -3.45 M-11.7 -18.3 Q-12.95 -15.65 -13.7 -12.65 -15.15 -17.85 -19.85 -21.6 -16.1 -19.0 -11.7 -18.3 M-4.4 -33.9 Q-4.05 -31.55 -3.3 -29.3 L-4.55 -28.35 Q-4.45 -32.35 -4.7 -36.45 L-4.4 -33.9 M10.65 25.1 Q10.7 25.0 10.8 25.0 L10.95 25.55 10.65 25.1 M15.3 -28.25 L18.0 -31.25 Q17.3 -27.85 15.5 -24.8 L13.5 -27.2 Q14.45 -27.6 15.3 -28.25 M9.0 -36.6 Q9.3 -34.85 8.9 -33.05 8.6 -31.75 8.6 -30.5 L7.15 -31.0 Q8.55 -33.6 9.0 -36.6" fill="#ffffff" fillOpacity="0.49803922" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#ArrivePanther-4-${id}-shape1`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#ArrivePanther-4-${id}-shape2`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#ArrivePanther-4-${id}-shape3`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#ArrivePanther-4-${id}-shape4`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#ArrivePanther-4-${id}-shape5`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-4-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#ArrivePanther-4-${id}-shape6`} />
        </g>
        <g id={`ArrivePanther-4-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 5 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${ArrivePanther_X_OFFSET + (ArrivePanther_WIDTH + ArrivePanther_MARGIN) * 4}, ${ArrivePanther_Y_OFFSET})`}>
        <use height="77.6" transform="matrix(0.0026, -0.6203, 0.8477, 0.0035, -34.2447, 26.3399)" width="40.15" xlinkHref={`#ArrivePanther-5-${id}-shape0`} />
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#ArrivePanther-5-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
        <use height="5.4" transform="matrix(1.0791, 0.3462, -0.3462, 1.0791, 6.2387, -9.6021)" width="13.85" xlinkHref={`#ArrivePanther-5-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#ArrivePanther-5-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#ArrivePanther-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -10.3897)" width="8.9" xlinkHref={`#ArrivePanther-5-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -8.0403)" width="8.9" xlinkHref={`#ArrivePanther-5-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#ArrivePanther-5-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#ArrivePanther-5-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -6.3495)" width="16.45" xlinkHref={`#ArrivePanther-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0259, -0.0259, 1.836, 7.3763, -0.3312)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.3932)" width="4.85" xlinkHref={`#ArrivePanther-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8549, 3.7317)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2337, -1.535, 1.1161, 1.6242, -9.5116, -2.1477)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`ArrivePanther-5-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.0, 38.8)">
          <path d="M-4.45 33.0 L-3.1 33.7 -5.6 38.8 Q-5.3 35.95 -4.5 33.15 L-4.45 33.0 M-15.35 18.05 L-14.1 21.05 Q-16.4 21.55 -18.6 23.8 -16.75 21.05 -15.35 18.05 M-18.85 -3.65 L-18.45 -3.9 -18.5 -3.45 -18.85 -3.65 M-15.25 -20.1 L-16.2 -17.45 Q-17.95 -20.45 -21.0 -22.9 -18.3 -21.05 -15.25 -20.1 M-4.6 -35.95 L-4.4 -34.7 -4.75 -34.5 -4.9 -38.3 -4.6 -35.95 M11.65 27.1 L11.35 26.6 11.5 26.5 11.65 27.1 M16.95 -27.05 L15.35 -29.35 16.25 -29.95 19.15 -33.15 Q18.5 -29.95 16.95 -27.05 M9.45 -34.75 L8.7 -35.15 9.6 -38.8 Q9.9 -36.95 9.5 -35.05 L9.45 -34.75" fill="#ffffff" fillOpacity="0.49803922" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#ArrivePanther-5-${id}-shape1`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#ArrivePanther-5-${id}-shape2`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#ArrivePanther-5-${id}-shape3`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#ArrivePanther-5-${id}-shape4`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#ArrivePanther-5-${id}-shape5`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ArrivePanther-5-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#ArrivePanther-5-${id}-shape6`} />
        </g>
        <g id={`ArrivePanther-5-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default ArrivePanther;