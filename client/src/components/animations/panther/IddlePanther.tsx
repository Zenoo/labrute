/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface IddlePantherProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const IddlePanther_WIDTH = 200;
export const IddlePanther_HEIGHT = 60;
export const IddlePanther_FRAMES = 26;
export const IddlePanther_X_OFFSET = 110;
export const IddlePanther_Y_OFFSET = 22;
export const IddlePanther_MARGIN = 0;

const IddlePanther = ({ id, inverted, sx, ...rest }: IddlePantherProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: IddlePanther_WIDTH,
      height: IddlePanther_HEIGHT,
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
          ? -(IddlePanther_WIDTH + IddlePanther_MARGIN)
          * (IddlePanther_FRAMES - 1)
          - (!inverted ? IddlePanther_MARGIN : 0)
          : 0,
        width: (IddlePanther_WIDTH + IddlePanther_MARGIN) * IddlePanther_FRAMES,
        animation: `IddlePanther${inverted ? 'Inverted' : ''} 0.65s steps(${IddlePanther_FRAMES}, jump-none) infinite`,
        transform: !inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 0}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-1-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 9.1841, -9.1101)" width="13.85" xlinkHref={`#IddlePanther-1-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-1-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -11.8897)" width="8.9" xlinkHref={`#IddlePanther-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -9.5403)" width="8.9" xlinkHref={`#IddlePanther-1-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-1-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-1-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -7.8495)" width="16.45" xlinkHref={`#IddlePanther-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0259, -0.0259, 1.836, 7.3763, -0.3312)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.3932)" width="4.85" xlinkHref={`#IddlePanther-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8549, 3.7317)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2337, -1.535, 1.1161, 1.6242, -9.5116, -2.1477)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-1-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-1-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-1-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-1-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-1-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-1-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 2 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 1}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-2-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7631, 0.9554, -1.0536, 1.598, -8.6566, -0.6387)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.0596)" width="13.85" xlinkHref={`#IddlePanther-2-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-2-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.8892)" width="8.9" xlinkHref={`#IddlePanther-2-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0275, 0.0, 0.0, 2.4931, -14.7749, -9.55)" width="8.9" xlinkHref={`#IddlePanther-2-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-2-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-2-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3594, -0.1929, 0.1929, 1.3594, -27.9727, -7.8463)" width="16.45" xlinkHref={`#IddlePanther-2-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.025, -0.025, 1.8359, 7.474, -0.3799)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.3931)" width="4.85" xlinkHref={`#IddlePanther-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0805, 0.8375, -0.8375, 2.0804, -2.9474, 3.7319)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2329, -1.5359, 1.1169, 1.6236, -9.5625, -2.195)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-2-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-2-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-2-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-2-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-2-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-2-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-2-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-2-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-2-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-2-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-2-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-2-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-2-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 3 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 2}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-3-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7599, 0.9613, -1.0589, 1.5944, -8.6378, -0.5862)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.0596)" width="13.85" xlinkHref={`#IddlePanther-3-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-3-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.8892)" width="8.9" xlinkHref={`#IddlePanther-3-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0346, 0.0, 0.0, 2.5019, -14.8074, -9.532)" width="8.9" xlinkHref={`#IddlePanther-3-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-3-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-3-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3593, -0.1939, 0.1939, 1.3593, -27.9784, -7.8378)" width="16.45" xlinkHref={`#IddlePanther-3-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.0222, -0.0222, 1.8359, 7.4661, -0.3766)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.3931)" width="4.85" xlinkHref={`#IddlePanther-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0774, 0.8449, -0.8449, 2.0774, -2.8732, 3.731)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2307, -1.539, 1.1191, 1.6219, -9.566, -2.1366)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-3-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-3-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-3-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-3-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-3-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-3-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-3-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-3-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-3-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-3-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-3-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-3-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-3-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 4 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 3}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-4-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.754, 0.9718, -1.0685, 1.588, -8.5542, -0.5318)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.0596)" width="13.85" xlinkHref={`#IddlePanther-4-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-4-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.8892)" width="8.9" xlinkHref={`#IddlePanther-4-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0474, 0.0, 0.0, 2.5177, -14.8656, -9.6394)" width="8.9" xlinkHref={`#IddlePanther-4-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-4-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-4-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.359, -0.1957, 0.1957, 1.359, -28.0381, -7.8221)" width="16.45" xlinkHref={`#IddlePanther-4-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0171, -0.0171, 1.836, 7.4021, -0.3202)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.4431)" width="4.85" xlinkHref={`#IddlePanther-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0719, 0.8582, -0.8582, 2.0719, -2.8299, 3.8295)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2267, -1.5446, 1.1232, 1.619, -9.522, -2.0716)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-4-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-4-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-4-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-4-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-4-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-4-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-4-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-4-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-4-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-4-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-4-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-4-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-4-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 5 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 4}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-5-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7452, 0.9875, -1.0827, 1.5783, -8.4041, -0.4747)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.1096)" width="13.85" xlinkHref={`#IddlePanther-5-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-5-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.9392)" width="8.9" xlinkHref={`#IddlePanther-5-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0665, 0.0, 0.0, 2.5411, -14.9525, -9.7752)" width="8.9" xlinkHref={`#IddlePanther-5-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-5-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-5-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3586, -0.1984, 0.1984, 1.3586, -28.1027, -7.6992)" width="16.45" xlinkHref={`#IddlePanther-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0095, -0.0095, 1.836, 7.3311, -0.3108)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.4431)" width="4.85" xlinkHref={`#IddlePanther-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0636, 0.8779, -0.8779, 2.0636, -2.7654, 3.7779)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2207, -1.5529, 1.1292, 1.6146, -9.5312, -2.0491)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-5-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-5-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-5-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-5-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-5-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-5-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-5-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-5-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-5-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-5-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-5-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-5-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-5-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 6 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 5}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-6-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7331, 1.0084, -1.1016, 1.565, -8.387, -0.3644)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.1096)" width="13.85" xlinkHref={`#IddlePanther-6-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-6-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.9392)" width="8.9" xlinkHref={`#IddlePanther-6-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0921, 0.0, 0.0, 2.5726, -15.0691, -9.9402)" width="8.9" xlinkHref={`#IddlePanther-6-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-6-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-6-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3581, -0.202, 0.202, 1.3581, -28.1722, -7.6182)" width="16.45" xlinkHref={`#IddlePanther-6-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, -6.0E-4, 6.0E-4, 1.836, 7.3034, -0.2981)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.4931)" width="4.85" xlinkHref={`#IddlePanther-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0521, 0.9042, -0.9042, 2.0521, -2.5786, 3.8765)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2125, -1.5641, 1.1374, 1.6087, -9.4934, -1.9188)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-6-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-6-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-6-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-6-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-6-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-6-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-6-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-6-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-6-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-6-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-6-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-6-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-6-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 7 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 6}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-7-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7179, 1.034, -1.1246, 1.5485, -8.1545, -0.2508)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.1596)" width="13.85" xlinkHref={`#IddlePanther-7-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-7-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -11.9892)" width="8.9" xlinkHref={`#IddlePanther-7-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1236, 0.0, 0.0, 2.6114, -15.2124, -10.1315)" width="8.9" xlinkHref={`#IddlePanther-7-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-7-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-7-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3574, -0.2064, 0.2064, 1.3574, -28.2461, -7.48)" width="16.45" xlinkHref={`#IddlePanther-7-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, -0.0131, 0.0131, 1.8359, 7.219, -0.3323)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.5431)" width="4.85" xlinkHref={`#IddlePanther-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0375, 0.9364, -0.9363, 2.0374, -2.4719, 3.9266)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2025, -1.5777, 1.1473, 1.6014, -9.4581, -1.7317)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-7-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-7-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-7-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-7-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-7-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-7-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-7-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-7-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-7-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-7-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-7-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-7-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-7-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 8 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 7}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-8-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7003, 1.0624, -1.1502, 1.5294, -7.9622, -0.134)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.2096)" width="13.85" xlinkHref={`#IddlePanther-8-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-8-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-8-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.0392)" width="8.9" xlinkHref={`#IddlePanther-8-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.159, 0.0, 0.0, 2.655, -15.3736, -10.3406)" width="8.9" xlinkHref={`#IddlePanther-8-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-8-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-8-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3566, -0.2113, 0.2113, 1.3566, -28.323, -7.3873)" width="16.45" xlinkHref={`#IddlePanther-8-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8357, -0.0272, 0.0272, 1.8357, 7.1305, -0.3141)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.5931)" width="4.85" xlinkHref={`#IddlePanther-8-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0205, 0.9722, -0.9722, 2.0204, -2.252, 3.9785)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.191, -1.593, 1.1584, 1.5931, -9.4243, -1.5897)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-8-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-8-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-8-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-8-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-8-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-8-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-8-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-8-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-8-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-8-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-8-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-8-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-8-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 9 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 8}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-9-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6817, 1.0913, -1.1762, 1.5094, -7.8176, -0.1151)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.2096)" width="13.85" xlinkHref={`#IddlePanther-9-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-9-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-9-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.0392)" width="8.9" xlinkHref={`#IddlePanther-9-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1954, 0.0, 0.0, 2.6997, -15.5393, -10.604)" width="8.9" xlinkHref={`#IddlePanther-9-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-9-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-9-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3558, -0.2164, 0.2164, 1.3558, -28.4002, -7.2927)" width="16.45" xlinkHref={`#IddlePanther-9-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8354, -0.0417, 0.0417, 1.8354, 7.0911, -0.3452)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.6431)" width="4.85" xlinkHref={`#IddlePanther-9-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0023, 1.0088, -1.0088, 2.0023, -2.1287, 3.9827)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1791, -1.6086, 1.1697, 1.5845, -9.4407, -1.4465)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-9-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-9-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-9-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-9-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-9-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-9-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-9-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-9-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-9-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-9-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-9-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-9-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-9-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 10 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 9}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-10-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6639, 1.1182, -1.2003, 1.4902, -7.629, 0.0543)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.2596)" width="13.85" xlinkHref={`#IddlePanther-10-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-10-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-10-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.0892)" width="8.9" xlinkHref={`#IddlePanther-10-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2297, 0.0, 0.0, 2.7418, -15.6951, -10.8075)" width="8.9" xlinkHref={`#IddlePanther-10-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-10-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-10-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.355, -0.2212, 0.2212, 1.355, -28.4758, -7.1513)" width="16.45" xlinkHref={`#IddlePanther-10-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.835, -0.0553, 0.0553, 1.835, 7.0042, -0.3271)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.6931)" width="4.85" xlinkHref={`#IddlePanther-10-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9847, 1.0428, -1.0428, 1.9846, -2.013, 4.0888)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1679, -1.6232, 1.1804, 1.5763, -9.4058, -1.2559)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-10-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-10-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-10-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-10-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-10-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-10-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-10-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-10-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-10-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-10-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-10-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-10-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-10-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 11 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 10}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-11-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.648, 1.1414, -1.221, 1.4732, -7.5022, 0.072)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3096)" width="13.85" xlinkHref={`#IddlePanther-11-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-11-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-11-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1392)" width="8.9" xlinkHref={`#IddlePanther-11-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2595, 0.0, 0.0, 2.7785, -15.7806, -10.9914)" width="8.9" xlinkHref={`#IddlePanther-11-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-11-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-11-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3543, -0.2253, 0.2253, 1.3543, -28.5478, -7.0147)" width="16.45" xlinkHref={`#IddlePanther-11-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8346, -0.0671, 0.0671, 1.8346, 6.9222, -0.2611)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.7431)" width="4.85" xlinkHref={`#IddlePanther-11-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9688, 1.0722, -1.0723, 1.9688, -1.8623, 4.1455)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.158, -1.6359, 1.1896, 1.5691, -9.3688, -1.0702)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-11-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-11-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-11-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-11-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-11-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-11-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-11-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-11-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-11-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-11-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-11-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-11-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-11-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 12 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 11}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-12-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6347, 1.1602, -1.2378, 1.459, -7.3395, 0.2374)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3096)" width="13.85" xlinkHref={`#IddlePanther-12-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-12-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-12-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1392)" width="8.9" xlinkHref={`#IddlePanther-12-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2839, 0.0, 0.0, 2.8084, -15.9416, -11.1508)" width="8.9" xlinkHref={`#IddlePanther-12-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-12-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-12-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3538, -0.2288, 0.2288, 1.3538, -28.6161, -6.9348)" width="16.45" xlinkHref={`#IddlePanther-12-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8341, -0.0768, 0.0768, 1.8341, 6.8962, -0.2479)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.7931)" width="4.85" xlinkHref={`#IddlePanther-12-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9555, 1.0961, -1.0961, 1.9555, -1.6801, 4.2022)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1499, -1.6462, 1.1971, 1.5632, -9.3293, -0.991)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-12-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-12-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-12-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-12-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-12-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-12-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-12-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-12-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-12-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-12-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-12-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-12-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-12-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 13 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 12}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-13-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6242, 1.1746, -1.2506, 1.4479, -7.291, 0.25)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3096)" width="13.85" xlinkHref={`#IddlePanther-13-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-13-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-13-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1392)" width="8.9" xlinkHref={`#IddlePanther-13-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3027, 0.0, 0.0, 2.8317, -16.0274, -11.2856)" width="8.9" xlinkHref={`#IddlePanther-13-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-13-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-13-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3533, -0.2314, 0.2314, 1.3533, -28.6297, -6.8117)" width="16.45" xlinkHref={`#IddlePanther-13-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8338, -0.0843, 0.0843, 1.8338, 6.8759, -0.2875)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.7931)" width="4.85" xlinkHref={`#IddlePanther-13-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.945, 1.1144, -1.1145, 1.945, -1.6165, 4.2082)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1435, -1.6541, 1.2028, 1.5585, -9.3372, -0.8683)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-13-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-13-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-13-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-13-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-13-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-13-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-13-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-13-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-13-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-13-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-13-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-13-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-13-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 14 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 13}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-14-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6166, 1.185, -1.2599, 1.4398, -7.206, 0.3093)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3596)" width="13.85" xlinkHref={`#IddlePanther-14-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-14-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-14-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1892)" width="8.9" xlinkHref={`#IddlePanther-14-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3165, 0.0, 0.0, 2.8485, -16.0399, -11.347)" width="8.9" xlinkHref={`#IddlePanther-14-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-14-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-14-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.353, -0.2333, 0.2333, 1.353, -28.6897, -6.7949)" width="16.45" xlinkHref={`#IddlePanther-14-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8335, -0.0897, 0.0897, 1.8335, 6.8114, -0.2799)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.8431)" width="4.85" xlinkHref={`#IddlePanther-14-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9373, 1.1277, -1.1278, 1.9373, -1.5202, 4.3128)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1389, -1.6599, 1.207, 1.5552, -9.293, -0.802)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-14-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-14-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-14-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-14-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-14-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-14-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-14-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-14-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-14-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-14-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-14-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-14-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-14-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 15 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 14}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-15-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6115, 1.1919, -1.2661, 1.4343, -7.1827, 0.3657)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3596)" width="13.85" xlinkHref={`#IddlePanther-15-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-15-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-15-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1892)" width="8.9" xlinkHref={`#IddlePanther-15-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3256, 0.0, 0.0, 2.8597, -16.1314, -11.4379)" width="8.9" xlinkHref={`#IddlePanther-15-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-15-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-15-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3527, -0.2346, 0.2346, 1.3527, -28.6964, -6.6836)" width="16.45" xlinkHref={`#IddlePanther-15-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8333, -0.0933, 0.0933, 1.8333, 6.8016, -0.275)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.8431)" width="4.85" xlinkHref={`#IddlePanther-15-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9321, 1.1365, -1.1365, 1.9321, -1.4896, 4.2661)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1358, -1.6637, 1.2098, 1.553, -9.2968, -0.7411)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-15-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-15-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-15-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-15-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-15-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-15-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-15-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-15-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-15-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-15-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-15-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-15-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-15-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 16 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 15}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-16-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6086, 1.1958, -1.2695, 1.4313, -7.1696, 0.3692)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2343, -9.3596)" width="13.85" xlinkHref={`#IddlePanther-16-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-16-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-16-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2483, 0.5897, 0.5897, 1.2483, 7.2773, -12.1892)" width="8.9" xlinkHref={`#IddlePanther-16-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3306, 0.0, 0.0, 2.866, -16.1544, -11.4608)" width="8.9" xlinkHref={`#IddlePanther-16-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-16-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-16-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3526, -0.2353, 0.2353, 1.3526, -28.7001, -6.6774)" width="16.45" xlinkHref={`#IddlePanther-16-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8332, -0.0954, 0.0954, 1.8332, 6.7963, -0.2221)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.111, -3.8431)" width="4.85" xlinkHref={`#IddlePanther-16-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9292, 1.1414, -1.1414, 1.9292, -1.5226, 4.2679)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1341, -1.6658, 1.2113, 1.5517, -9.2988, -0.785)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-16-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-16-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-16-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-16-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-16-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-16-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-16-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-16-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-16-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-16-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-16-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-16-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-16-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 17 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 16}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-17-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6078, 1.1971, -1.2706, 1.4304, -7.1155, 0.32)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 9.1841, -9.4101)" width="13.85" xlinkHref={`#IddlePanther-17-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-17-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-17-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -12.1897)" width="8.9" xlinkHref={`#IddlePanther-17-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3323, 0.0, 0.0, 2.868, -16.1119, -11.5183)" width="8.9" xlinkHref={`#IddlePanther-17-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-17-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddlePanther-17-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3526, -0.2355, 0.2355, 1.3526, -28.6518, -6.676)" width="16.45" xlinkHref={`#IddlePanther-17-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8332, -0.0961, 0.0961, 1.8332, 6.7443, -0.2213)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.8432)" width="4.85" xlinkHref={`#IddlePanther-17-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9284, 1.1431, -1.1431, 1.9284, -1.3671, 4.2181)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1337, -1.6666, 1.2119, 1.5514, -9.1497, -0.7331)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-17-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-17-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-17-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-17-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-17-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-17-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-17-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-17-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-17-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-17-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-17-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-17-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-17-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 18 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 17}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-18-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6103, 1.1935, -1.2674, 1.4331, -7.1275, 0.267)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0448, -1.2737, 1.0217, 1.3477, -15.1658, -3.4641)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8283, -0.8283, 0.7757, 9.2344, -9.4594)" width="13.85" xlinkHref={`#IddlePanther-18-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-18-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0501, 0.0578, 1.2723, -1.5071, -7.9012)" width="4.85" xlinkHref={`#IddlePanther-18-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7666, 0.4336, -0.5001, 1.5316, 0.7671, -2.3538)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2482, 0.5897, 0.5897, 1.2482, 7.2772, -12.1891)" width="8.9" xlinkHref={`#IddlePanther-18-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3276, 0.0, 0.0, 2.8622, -16.0907, -11.4972)" width="8.9" xlinkHref={`#IddlePanther-18-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-18-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1474, 14.4804)" width="5.9" xlinkHref={`#IddlePanther-18-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3527, -0.2348, 0.2348, 1.3527, -28.6978, -6.7313)" width="16.45" xlinkHref={`#IddlePanther-18-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8333, -0.0943, 0.0943, 1.8333, 6.7992, -0.1237)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7838, 0.7838, 1.242, 1.0611, -3.8431)" width="4.85" xlinkHref={`#IddlePanther-18-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9309, 1.1384, -1.1385, 1.9309, -1.4329, 4.2669)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.135, -1.6646, 1.2104, 1.5524, -9.1472, -0.7384)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-18-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-18-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-18-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-18-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-18-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-18-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-18-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-18-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-18-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-18-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-18-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-18-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-18-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 19 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 18}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-19-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.619, 1.1814, -1.2565, 1.4426, -7.1685, 0.2061)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0447, -1.2735, 1.0216, 1.3477, -15.1653, -3.5142)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7756, 0.8282, -0.8282, 0.7756, 9.2346, -9.4088)" width="13.85" xlinkHref={`#IddlePanther-19-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-19-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0499, 0.0577, 1.2723, -1.4568, -7.9016)" width="4.85" xlinkHref={`#IddlePanther-19-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7665, 0.4336, -0.5001, 1.5315, 0.7671, -2.3537)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2482, 0.5896, 0.5896, 1.2482, 7.277, -12.1886)" width="8.9" xlinkHref={`#IddlePanther-19-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3117, 0.0, 0.0, 2.8427, -16.0683, -11.426)" width="8.9" xlinkHref={`#IddlePanther-19-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-19-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1474, 14.4804)" width="5.9" xlinkHref={`#IddlePanther-19-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3531, -0.2325, 0.2325, 1.3531, -28.6855, -6.7517)" width="16.45" xlinkHref={`#IddlePanther-19-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8336, -0.088, 0.088, 1.8336, 6.816, -0.1824)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2418, -0.7838, 0.7838, 1.2418, 1.0615, -3.8427)" width="4.85" xlinkHref={`#IddlePanther-19-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.94, 1.1228, -1.1228, 1.94, -1.4873, 4.1615)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1401, -1.6578, 1.2055, 1.5562, -9.1902, -0.8071)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-19-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-19-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-19-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-19-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-19-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-19-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-19-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-19-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-19-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-19-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-19-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-19-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-19-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 20 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 19}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-20-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6356, 1.1581, -1.2352, 1.4605, -7.3976, 0.086)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0446, -1.273, 1.0213, 1.3476, -15.1645, -3.5145)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7754, 0.8281, -0.8281, 0.7754, 9.2353, -9.3573)" width="13.85" xlinkHref={`#IddlePanther-20-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-20-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0495, 0.0576, 1.2723, -1.4563, -7.9026)" width="4.85" xlinkHref={`#IddlePanther-20-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7664, 0.4335, -0.4999, 1.5314, 0.8167, -2.3533)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.248, 0.5896, 0.5896, 1.248, 7.2766, -12.1377)" width="8.9" xlinkHref={`#IddlePanther-20-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2812, 0.0, 0.0, 2.8052, -15.8793, -11.2389)" width="8.9" xlinkHref={`#IddlePanther-20-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-20-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1474, 14.4804)" width="5.9" xlinkHref={`#IddlePanther-20-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3538, -0.2281, 0.2281, 1.3538, -28.6118, -6.8897)" width="16.45" xlinkHref={`#IddlePanther-20-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8342, -0.0759, 0.0759, 1.8342, 6.8486, -0.1491)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2416, -0.7838, 0.7838, 1.2416, 1.062, -3.8418)" width="4.85" xlinkHref={`#IddlePanther-20-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9571, 1.0925, -1.0925, 1.9571, -1.692, 4.1025)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.15, -1.6448, 1.196, 1.5633, -9.1764, -0.9931)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-20-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-20-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-20-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-20-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-20-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-20-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-20-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-20-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-20-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-20-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-20-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-20-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-20-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 21 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 20}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-21-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6606, 1.1212, -1.2017, 1.4878, -7.6711, -0.043)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0444, -1.2723, 1.0209, 1.3474, -15.1128, -3.515)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7752, 0.8279, -0.8279, 0.7752, 9.2861, -9.3053)" width="13.85" xlinkHref={`#IddlePanther-21-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-21-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0488, 0.0573, 1.2722, -1.4554, -7.904)" width="4.85" xlinkHref={`#IddlePanther-21-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7662, 0.4333, -0.4996, 1.5313, 0.8162, -2.3526)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2477, 0.5895, 0.5895, 1.2477, 7.2755, -12.0865)" width="8.9" xlinkHref={`#IddlePanther-21-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2337, 0.0, 0.0, 2.7468, -15.7134, -10.926)" width="8.9" xlinkHref={`#IddlePanther-21-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-21-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1474, 14.4804)" width="5.9" xlinkHref={`#IddlePanther-21-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3548, -0.2213, 0.2213, 1.3548, -28.5245, -7.0991)" width="16.45" xlinkHref={`#IddlePanther-21-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8349, -0.0571, 0.0571, 1.8349, 6.9493, -0.1746)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2412, -0.7838, 0.7838, 1.2412, 1.0631, -3.7407)" width="4.85" xlinkHref={`#IddlePanther-21-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9827, 1.0448, -1.0448, 1.9827, -1.905, 4.0417)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1651, -1.6245, 1.1812, 1.5743, -9.2048, -1.1987)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-21-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-21-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-21-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-21-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-21-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-21-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-21-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-21-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-21-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-21-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-21-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-21-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-21-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 22 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 21}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-22-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6911, 1.0741, -1.1586, 1.5211, -7.9277, -0.1757)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0441, -1.2714, 1.0202, 1.3472, -15.1108, -3.4655)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.775, 0.8276, -0.8276, 0.775, 9.2871, -9.253)" width="13.85" xlinkHref={`#IddlePanther-22-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-22-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0481, 0.057, 1.2722, -1.4543, -7.9558)" width="4.85" xlinkHref={`#IddlePanther-22-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.766, 0.4332, -0.4993, 1.531, 0.8156, -2.3518)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2474, 0.5894, 0.5894, 1.2474, 7.2246, -12.0347)" width="8.9" xlinkHref={`#IddlePanther-22-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1738, 0.0, 0.0, 2.6732, -15.441, -10.5573)" width="8.9" xlinkHref={`#IddlePanther-22-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-22-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0974, 14.5304)" width="5.9" xlinkHref={`#IddlePanther-22-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3561, -0.2126, 0.2126, 1.3561, -28.377, -7.324)" width="16.45" xlinkHref={`#IddlePanther-22-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8356, -0.0334, 0.0334, 1.8356, 7.1638, -0.1561)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2407, -0.7838, 0.7838, 1.2407, 1.0643, -3.6892)" width="4.85" xlinkHref={`#IddlePanther-22-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0133, 0.9838, -0.9839, 2.0133, -2.2609, 3.9337)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1839, -1.5986, 1.1624, 1.588, -9.2266, -1.4187)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-22-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-22-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-22-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-22-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-22-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-22-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-22-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-22-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-22-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-22-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-22-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-22-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-22-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 23 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 22}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-23-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7194, 1.0276, -1.1159, 1.5522, -8.2804, -0.4031)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0438, -1.2705, 1.0197, 1.347, -15.109, -3.466)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7747, 0.8274, -0.8274, 0.7747, 9.3382, -9.1506)" width="13.85" xlinkHref={`#IddlePanther-23-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-23-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0473, 0.0566, 1.2722, -1.4532, -7.9576)" width="4.85" xlinkHref={`#IddlePanther-23-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7657, 0.433, -0.499, 1.5308, 0.815, -2.351)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2471, 0.5892, 0.5892, 1.2471, 7.2235, -11.9829)" width="8.9" xlinkHref={`#IddlePanther-23-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1158, 0.0, 0.0, 2.6019, -15.1769, -10.1969)" width="8.9" xlinkHref={`#IddlePanther-23-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-23-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0974, 14.5304)" width="5.9" xlinkHref={`#IddlePanther-23-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3573, -0.2041, 0.2041, 1.3573, -28.2806, -7.4964)" width="16.45" xlinkHref={`#IddlePanther-23-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, -0.0103, 0.0103, 1.8359, 7.2767, -0.2357)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2402, -0.7837, 0.7837, 1.2402, 1.0656, -3.5877)" width="4.85" xlinkHref={`#IddlePanther-23-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0412, 0.9239, -0.9239, 2.0412, -2.5107, 3.8319)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2018, -1.5734, 1.1441, 1.6011, -9.3485, -1.6862)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-23-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-23-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-23-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-23-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-23-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-23-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-23-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-23-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-23-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-23-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-23-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-23-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-23-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 24 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 23}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-24-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7399, 0.9917, -1.083, 1.575, -8.5467, -0.471)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0437, -1.2699, 1.0193, 1.3468, -15.0576, -3.4164)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7746, 0.8271, -0.8271, 0.7746, 9.3889, -9.0986)" width="13.85" xlinkHref={`#IddlePanther-24-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-24-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0467, 0.0564, 1.2722, -1.4524, -7.9589)" width="4.85" xlinkHref={`#IddlePanther-24-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7656, 0.4329, -0.4987, 1.5307, 0.8145, -2.3504)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2468, 0.5892, 0.5892, 1.2468, 7.2227, -11.9316)" width="8.9" xlinkHref={`#IddlePanther-24-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0718, 0.0, 0.0, 2.5478, -14.9767, -9.9495)" width="8.9" xlinkHref={`#IddlePanther-24-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-24-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0974, 14.5304)" width="5.9" xlinkHref={`#IddlePanther-24-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3582, -0.1978, 0.1978, 1.3582, -28.1453, -7.8008)" width="16.45" xlinkHref={`#IddlePanther-24-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0071, -0.0071, 1.836, 7.3745, -0.1577)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2399, -0.7837, 0.7837, 1.2399, 1.0664, -3.5366)" width="4.85" xlinkHref={`#IddlePanther-24-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0611, 0.8779, -0.8779, 2.0612, -2.7121, 3.7344)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2153, -1.5541, 1.1301, 1.6108, -9.3268, -1.9371)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-24-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-24-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-24-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-24-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-24-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-24-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-24-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-24-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-24-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-24-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-24-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-24-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-24-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 25 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 24}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-25-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7526, 0.9689, -1.0619, 1.5891, -8.6206, -0.5311)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0435, -1.2695, 1.019, 1.3467, -15.0567, -3.4166)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.3894, -9.0474)" width="13.85" xlinkHref={`#IddlePanther-25-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-25-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0463, 0.0562, 1.2722, -1.4519, -7.9598)" width="4.85" xlinkHref={`#IddlePanther-25-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7654, 0.4328, -0.4986, 1.5305, 0.8142, -2.35)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.2223, -11.8809)" width="8.9" xlinkHref={`#IddlePanther-25-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0439, 0.0, 0.0, 2.5135, -14.8498, -9.7744)" width="8.9" xlinkHref={`#IddlePanther-25-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-25-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0974, 14.5304)" width="5.9" xlinkHref={`#IddlePanther-25-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3587, -0.1937, 0.1937, 1.3587, -28.0223, -7.8851)" width="16.45" xlinkHref={`#IddlePanther-25-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.0182, -0.0182, 1.8359, 7.4551, -0.1714)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2396, -0.7837, 0.7837, 1.2396, 1.0671, -3.4859)" width="4.85" xlinkHref={`#IddlePanther-25-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0733, 0.8485, -0.8486, 2.0733, -2.908, 3.6378)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2236, -1.5418, 1.1211, 1.6169, -9.3627, -2.0192)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-25-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-25-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-25-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-25-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-25-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-25-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-25-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-25-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-25-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-25-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-25-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-25-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-25-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 26 */}
      <g transform={`matrix(1.5, 0.0, 0.0, 1.5, ${IddlePanther_X_OFFSET + (IddlePanther_WIDTH + IddlePanther_MARGIN) * 25}, ${IddlePanther_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddlePanther-26-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7592, 0.957, -1.0509, 1.5964, -8.709, -0.6363)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.2896, -9.0974)" width="13.85" xlinkHref={`#IddlePanther-26-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddlePanther-26-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddlePanther-26-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.2721, -11.8808)" width="8.9" xlinkHref={`#IddlePanther-26-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0295, 0.0, 0.0, 2.4958, -14.7841, -9.6096)" width="8.9" xlinkHref={`#IddlePanther-26-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddlePanther-26-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddlePanther-26-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.359, -0.1916, 0.1916, 1.359, -27.9612, -7.9034)" width="16.45" xlinkHref={`#IddlePanther-26-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.024, -0.024, 1.8359, 7.4212, -0.2788)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.0671, -3.4355)" width="4.85" xlinkHref={`#IddlePanther-26-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0795, 0.8332, -0.8333, 2.0795, -2.908, 3.6397)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2282, -1.5355, 1.1165, 1.6202, -9.4056, -2.136)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddlePanther-26-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddlePanther-26-${id}-shape0`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-26-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddlePanther-26-${id}-shape1`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-26-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddlePanther-26-${id}-shape2`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-26-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddlePanther-26-${id}-shape3`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-26-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddlePanther-26-${id}-shape4`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#ad9ead" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#845968" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#a897a6" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#510918" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddlePanther-26-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddlePanther-26-${id}-shape5`} />
        </g>
        <g id={`IddlePanther-26-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
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

export default IddlePanther;