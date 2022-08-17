/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface LoseMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const LoseMaleBrute_WIDTH = 153.75;
export const LoseMaleBrute_HEIGHT = 96.85;
export const LoseMaleBrute_FRAMES = 54;
export const LoseMaleBrute_X_OFFSET = 61.75;
export const LoseMaleBrute_Y_OFFSET = 80.0;
export const LoseMaleBrute_MARGIN = 30;

const LoseMaleBrute = ({ id, inverted, sx, ...rest }: LoseMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: LoseMaleBrute_WIDTH,
      height: LoseMaleBrute_HEIGHT,
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
        left: inverted
          ? -(LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN)
            * (LoseMaleBrute_FRAMES - 1)
            - LoseMaleBrute_MARGIN
          : 0,
        width: (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * LoseMaleBrute_FRAMES,
        animation: `LoseMaleBrute${inverted ? 'Inverted' : ''} 1.35s steps(${LoseMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 0}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 21.0553, -42.4865)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 2.3538, -26.5698)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3164, -0.1152, -0.1152, 0.3164, 36.3409, -56.7747)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, -7.74, -25.8129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.135, -0.3747, -0.3747, 0.135, 4.6519, -26.078)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 13.016, -30.0228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3043, -0.257, -0.257, 0.3043, 10.9337, -27.9408)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 1}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.0922, -42.4208)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.3643, -26.5658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.149, -42.2128)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6163, -47.4774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, -1.0E-4, -1.0E-4, 0.3987, 10.8126, -28.1649)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3446, -0.1994, -0.2132, 0.3367, 16.0339, -21.328)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.5027, -28.6354)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.316, -0.1152, -0.1152, 0.316, 36.3723, -56.6958)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.743, -25.8232)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.5908, -26.0305)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 12.9936, -30.0009)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 10.8999, -27.9672)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 2}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.1422, -42.3708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.4143, -26.5158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.199, -42.1628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6663, -47.4274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, -4.0E-4, -4.0E-4, 0.3987, 10.8681, -28.1079)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3445, -0.1997, -0.2146, 0.3358, 16.0445, -21.2602)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.5527, -28.5854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3159, -0.1155, -0.1155, 0.3159, 36.3827, -56.6257)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.693, -25.7732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.6408, -25.9805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.0436, -29.9509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 10.9499, -27.9172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 3}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.1922, -42.3208)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.4643, -26.4658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.249, -42.1128)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.7163, -47.3774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, -0.0035, -0.0035, 0.3987, 10.9234, -28.0359)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3429, -0.2024, -0.2161, 0.3348, 16.1634, -21.1162)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.6027, -28.5354)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3149, -0.118, -0.118, 0.3149, 36.5794, -56.2805)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.643, -25.7232)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.6908, -25.9305)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.0936, -29.9009)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 10.9999, -27.8672)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 4}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.2922, -42.2208)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.5643, -26.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.349, -42.0128)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.8163, -47.2774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, -0.0055, -0.0055, 0.3987, 11.0592, -27.9394)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3418, -0.2041, -0.2189, 0.333, 16.213, -20.9923)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.7027, -28.4354)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3143, -0.1196, -0.1196, 0.3143, 36.7928, -56.0024)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.543, -25.6232)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.7908, -25.8305)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.1936, -29.8009)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.0999, -27.7672)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 5}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.3922, -42.0708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.6643, -26.2158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.449, -41.8628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.9163, -47.1274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3986, -0.009, -0.009, 0.3986, 11.1706, -27.7575)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.34, -0.2071, -0.2218, 0.331, 16.2396, -20.8776)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.8027, -28.2854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3128, -0.1234, -0.1234, 0.3128, 37.0865, -55.4462)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.443, -25.4732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.8908, -25.6805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.2936, -29.6509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.1999, -27.6172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 6}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.4922, -41.9708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.7643, -26.1158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.549, -41.7628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.0163, -47.0274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3984, -0.0141, -0.0141, 0.3984, 11.3576, -27.5898)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3373, -0.2114, -0.2249, 0.3289, 16.3924, -20.5221)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 21.9027, -28.1854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3116, -0.1264, -0.1264, 0.3116, 37.3952, -54.8571)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.343, -25.3732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 4.9908, -25.5805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.3936, -29.5509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.2999, -27.5172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 7}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.6422, -41.7708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.9143, -25.9158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.699, -41.5628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.1663, -46.8274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3981, -0.0193, -0.0193, 0.3981, 11.5461, -27.3658)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3345, -0.2158, -0.2292, 0.3259, 16.4043, -20.3026)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 22.0527, -27.9854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3094, -0.1316, -0.1316, 0.3094, 37.7823, -54.1381)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -7.193, -25.1732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 5.1408, -25.3805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.5436, -29.3509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.4499, -27.3172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 8}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.8422, -41.5708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.1143, -25.7158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.899, -41.3628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.3663, -46.6274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3978, -0.0247, -0.0247, 0.3978, 11.7865, -27.136)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3315, -0.2203, -0.2346, 0.3219, 16.573, -19.968)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 22.2527, -27.7854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3075, -0.1358, -0.1358, 0.3075, 38.2328, -53.2843)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -6.993, -24.9732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 5.3408, -25.1805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.7436, -29.1509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.6499, -27.1172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 9}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.0422, -41.3708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.3143, -25.5158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 5.099, -41.1628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.5663, -46.4274)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3973, -0.0316, -0.0316, 0.3973, 11.9997, -26.768)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3276, -0.2261, -0.2402, 0.3178, 16.7156, -19.5935)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 22.4527, -27.5854)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3046, -0.1423, -0.1423, 0.3046, 38.8011, -52.2985)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -6.793, -24.7732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 5.5408, -24.9805)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 13.9436, -28.9509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 11.8499, -26.9172)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 10}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.2422, -41.1208)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.5143, -25.2658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 5.299, -40.9128)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.7663, -46.1774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3965, -0.04, -0.04, 0.3965, 12.3337, -26.4609)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3227, -0.233, -0.2458, 0.3134, 16.7789, -19.1312)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 22.6527, -27.3354)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.3019, -0.1478, -0.1478, 0.3019, 39.2311, -51.3261)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, -6.593, -24.5232)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1347, -0.3744, -0.3744, 0.1347, 5.7408, -24.7305)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 14.1436, -28.7009)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3041, -0.2563, -0.2563, 0.3041, 12.0499, -26.6672)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 11}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.4553, -40.8865)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 3.7538, -24.9698)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 5.4924, -40.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 18.0287, -45.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 12.6223, -26.0944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 16.9739, -18.704)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 22.8743, -26.9932)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2985, -0.1554, -0.1554, 0.2985, 39.9477, -50.0436)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, -6.34, -24.2129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.135, -0.3747, -0.3747, 0.135, 6.0519, -24.478)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 14.416, -28.4228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3043, -0.257, -0.257, 0.3043, 12.3337, -26.3408)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 12}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 23.3398, -41.3169)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 4.5161, -25.9157)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 6.5003, -41.2624)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 19.014, -46.4738)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 9.0424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3956, 0.0194, 0.0127, 0.259, 25.9355, -18.5125)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1323, 0.3725, 0.3725, 0.1323, 4.3556, -27.4192)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3949, -0.0505, -0.0505, 0.3949, -5.108, -8.5313)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.314, -0.2417, -0.2417, 0.314, 1.9139, -11.2207)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 13.6648, -26.6459)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2398, -0.2525, 0.3078, 17.941, -19.2565)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.338, -0.2101, -0.2101, 0.338, 23.8651, -26.9956)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3053, -0.2527, -0.1651, 0.1995, 2.6482, -17.1097)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2958, -0.1593, -0.1593, 0.2958, 41.7773, -50.7154)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, -3.7431, -24.1736)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1886, -0.3501, -0.3501, 0.1886, 8.6632, -26.3487)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2154, -0.3335, -0.3335, 0.2154, 15.6895, -29.4506)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3212, -0.2342, -0.2342, 0.3212, 14.8891, -28.0558)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 13}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 24.2373, -41.7622)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.093, 0.093, 0.3873, 5.2696, -26.9155)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 7.5516, -41.9614)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 20.0616, -47.1695)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 9.3424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3961, 4.0E-4, 2.0E-4, 0.2719, 26.9538, -18.2068)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1402, 0.3694, 0.3694, 0.1402, 5.8107, -27.7788)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3906, -0.076, -0.076, 0.3906, -3.7423, -8.7428)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2831, -0.277, -0.277, 0.2831, 3.0159, -9.4321)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 14.7635, -27.2954)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2398, -0.2524, 0.3077, 18.9857, -19.9577)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3293, -0.223, -0.223, 0.3293, 24.8995, -26.8411)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3231, -0.2292, -0.1531, 0.2159, 3.8898, -16.955)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2935, -0.1632, -0.1632, 0.2935, 43.8327, -51.5575)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, -0.8936, -24.1242)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2425, -0.3148, -0.3148, 0.2425, 11.311, -28.4915)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2153, -0.3334, -0.3334, 0.2153, 17.1357, -30.6997)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3385, -0.2081, -0.2081, 0.3385, 17.6508, -29.8683)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 14}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 25.2349, -42.3083)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 6.2217, -27.9647)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 8.7532, -42.7106)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 21.2593, -47.8659)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 9.6924, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, -0.0191, -0.0137, 0.2851, 28.0464, -17.9912)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1469, 0.3666, 0.3666, 0.1469, 7.2439, -28.0402)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3841, -0.103, -0.103, 0.3841, -2.4448, -8.9377)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2455, -0.3106, -0.3106, 0.2455, 4.027, -7.4453)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 15.9128, -28.0449)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 20.2302, -20.7086)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3192, -0.2369, -0.2369, 0.3192, 26.1483, -26.7718)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3401, -0.2028, -0.1387, 0.2327, 5.2643, -17.038)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2905, -0.1682, -0.1682, 0.2905, 46.1108, -52.3511)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 2.2062, -24.0249)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2945, -0.2666, -0.2666, 0.2945, 13.8105, -30.923)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2151, -0.3333, -0.3333, 0.2152, 18.6806, -31.899)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3546, -0.1791, -0.1791, 0.3546, 20.5094, -31.8676)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 15}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 26.3422, -42.8208)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.0643, -29.2158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 9.999, -43.4628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.5163, -48.6774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 10.0424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3937, -0.0415, -0.0314, 0.2984, 29.2224, -17.6379)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1564, 0.3629, 0.3629, 0.1564, 8.9321, -28.4417)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3754, -0.1315, -0.1315, 0.3754, -1.0134, -9.1139)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2, -0.3421, -0.3421, 0.2, 5.1237, -5.4629)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 17.1661, -28.8458)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 21.4458, -21.5052)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.3088, -0.2509, -0.2509, 0.3089, 27.3906, -26.6916)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3567, -0.1725, -0.121, 0.2502, 6.625, -17.1226)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2877, -0.1735, -0.1735, 0.2877, 48.6256, -53.2345)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 5.507, -23.9732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3396, -0.207, -0.207, 0.3396, 16.1853, -33.5777)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 20.3436, -33.2509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3697, -0.1463, -0.1463, 0.3697, 23.395, -33.9511)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 16}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 26.8344, -40.408)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.3217, -27.7647)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 10.7531, -41.41)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 23.2588, -46.5156)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 10.5424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3889, -0.0725, -0.0588, 0.3157, 30.8013, -17.1971)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0924, 0.3839, 0.3839, 0.0924, 8.778, -26.9952)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3584, -0.1714, -0.1714, 0.3584, 0.9024, -9.2162)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.1275, -0.3749, -0.3749, 0.1275, 6.3931, -2.7321)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 17.9622, -26.845)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 22.1809, -19.4583)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2923, -0.2692, -0.2692, 0.2923, 27.9878, -23.4766)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3752, -0.126, -0.0915, 0.2726, 8.5764, -17.1772)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2828, -0.1807, -0.1807, 0.2828, 49.1818, -49.3373)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 9.2062, -19.6249)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.383, -0.1067, -0.1067, 0.383, 16.8707, -31.9446)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2151, -0.3333, -0.3333, 0.2152, 20.6312, -29.9494)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3854, -0.0965, -0.0965, 0.3854, 25.1301, -31.537)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 17}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 27.3889, -37.7641)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.6177, -26.1651)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 11.6014, -39.1117)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 24.1131, -44.3212)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.1424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3806, -0.1075, -0.0936, 0.3311, 32.507, -16.6299)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0193, 0.3947, 0.3947, 0.0193, 8.5766, -25.1339)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3356, -0.2126, -0.2126, 0.3356, 2.924, -9.3888)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.0432, -0.394, -0.394, 0.0432, 7.5658, -0.0176)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 18.7641, -24.5954)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3173, -0.2398, -0.2524, 0.3077, 23.0371, -17.2073)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2728, -0.2891, -0.2891, 0.2728, 28.7075, -19.7462)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.389, -0.0741, -0.0558, 0.2932, 10.5489, -17.2448)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2779, -0.1883, -0.1883, 0.2779, 49.8136, -45.0179)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 13.2565, -14.874)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3979, 0.0089, 0.0089, 0.3979, 16.7749, -29.7708)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2153, -0.3334, -0.3335, 0.2153, 20.9372, -26.2997)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3953, -0.0417, -0.0417, 0.3953, 26.6442, -28.7403)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 18}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 27.9553, -34.9365)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 7.9038, -24.4198)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 12.4924, -36.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 25.0287, -41.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3687, -0.1439, -0.1343, 0.3441, 34.385, -16.1119)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0584, 0.391, 0.391, -0.0584, 8.6195, -22.7888)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3055, -0.2549, -0.2549, 0.3055, 4.8708, -9.5602)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0502, -0.3934, -0.3934, -0.0502, 8.5685, 2.4005)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 19.6223, -22.0944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 23.9739, -14.704)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2504, -0.3097, -0.3097, 0.2505, 29.2827, -15.9296)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0166, -0.013, 0.31, 12.514, -17.3231)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.272, -0.1978, -0.1978, 0.272, 50.5521, -40.2821)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, 17.66, -9.7129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3747, 0.1351, 0.1351, 0.3747, 15.8183, -26.8541)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 21.416, -22.4228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0187, 0.0187, 0.3972, 27.9753, -25.4121)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 19}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 27.8922, -34.8708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9143, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.499, -36.6628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 25.0163, -41.8774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1436, -0.134, 0.3438, 34.3237, -16.1205)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0672, 0.3893, 0.3893, -0.0672, 8.6081, -22.588)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8536, -9.6075)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.397)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6161, -21.9958)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 23.8958, -14.5552)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2496, -0.3096, -0.3096, 0.2496, 29.4975, -15.7171)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.1825)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2715, -0.1978, -0.1978, 0.2715, 50.615, -39.8034)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.657, -9.6732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1347, 0.1347, 0.3744, 15.8183, -26.841)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 21.4436, -22.4509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0177, 0.0177, 0.3972, 28.0078, -25.3194)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 20}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 27.8922, -34.8708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9143, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.499, -36.6628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 25.0163, -41.8774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1436, -0.134, 0.3438, 34.3237, -16.1205)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0773, 0.3874, 0.3874, -0.0773, 8.5207, -22.3283)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8536, -9.6075)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.397)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6161, -21.8458)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 23.8958, -14.4052)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2496, -0.3096, -0.3096, 0.2496, 29.6975, -15.5171)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.0825)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2715, -0.1978, -0.1978, 0.2715, 50.715, -39.3034)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.657, -9.6732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1347, 0.1347, 0.3744, 15.8183, -26.841)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 21.4436, -22.4509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0177, 0.0177, 0.3972, 28.0078, -25.3194)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 21}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 27.9553, -34.9365)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 7.9038, -24.4198)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 12.4924, -36.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 25.0287, -41.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3687, -0.1439, -0.1343, 0.3441, 34.385, -16.1119)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.089, 0.3851, 0.3851, -0.089, 8.4067, -22.1087)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3055, -0.2549, -0.2549, 0.3055, 4.8708, -9.5602)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0502, -0.3934, -0.3934, -0.0502, 8.5685, 2.4005)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 19.6223, -21.6444)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 23.9739, -14.254)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2504, -0.3097, -0.3097, 0.2505, 29.8827, -15.3296)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0166, -0.013, 0.31, 12.514, -17.0231)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.272, -0.1978, -0.1978, 0.272, 50.8521, -38.7821)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, 17.66, -9.7129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3747, 0.1351, 0.1351, 0.3747, 15.8183, -26.8541)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 21.416, -22.4228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0187, 0.0187, 0.3972, 27.9753, -25.4121)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 22}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 27.8922, -34.8708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9143, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.499, -36.6628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 25.0163, -41.8774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1436, -0.134, 0.3438, 34.3237, -16.1205)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.079, 0.387, 0.387, -0.079, 8.4904, -22.318)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8536, -9.6075)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.397)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6161, -21.7958)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 23.9458, -14.4052)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2496, -0.3096, -0.3096, 0.2496, 29.6975, -15.5671)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.0825)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2696, -0.2003, -0.2003, 0.2696, 50.7103, -38.9016)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.657, -9.6732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1347, 0.1347, 0.3744, 15.8183, -26.841)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 21.4436, -22.4509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0177, 0.0177, 0.3972, 28.0078, -25.3194)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 23}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 27.8922, -34.8708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9143, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.499, -36.6628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 25.0163, -41.8774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1436, -0.134, 0.3438, 34.3237, -16.1205)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0688, 0.389, 0.389, -0.0688, 8.5775, -22.5785)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8536, -9.6075)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.397)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6161, -21.9458)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 23.9458, -14.5552)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2496, -0.3096, -0.3096, 0.2496, 29.4975, -15.7671)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.1825)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.267, -0.2037, -0.2037, 0.267, 50.6185, -39.1037)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.657, -9.6732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1347, 0.1347, 0.3744, 15.8183, -26.841)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2155, -0.3336, -0.3336, 0.2155, 21.4436, -22.4509)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0177, 0.0177, 0.3972, 28.0078, -25.3194)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 24}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 27.9553, -34.9365)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 7.9038, -24.4198)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 12.4924, -36.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 25.0287, -41.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3687, -0.1439, -0.1343, 0.3441, 34.385, -16.1119)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0584, 0.391, 0.391, -0.0584, 8.6195, -22.7888)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3055, -0.2549, -0.2549, 0.3055, 4.8708, -9.5602)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0502, -0.3934, -0.3934, -0.0502, 8.5685, 2.4005)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 19.6223, -22.0944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 23.9739, -14.704)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2504, -0.3097, -0.3097, 0.2505, 29.2827, -15.9296)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0166, -0.013, 0.31, 12.514, -17.3231)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2648, -0.2073, -0.2073, 0.2648, 50.5152, -39.3212)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, 17.66, -9.7129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3747, 0.1351, 0.1351, 0.3747, 15.8183, -26.8541)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 21.416, -22.4228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0187, 0.0187, 0.3972, 27.9753, -25.4121)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 25}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 27.8905, -34.8681)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9156, -24.3659)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5001, -36.6627)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 24.9646, -41.8749)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1435, -0.134, 0.3437, 34.3218, -16.1211)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.6937, -22.7911)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8513, -9.6071)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5697, 2.3964)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6148, -22.1459)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2399, -0.2525, 0.3078, 23.8928, -14.7059)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2504, -0.3106, -0.3106, 0.2504, 29.3501, -15.944)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.2829)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2642, -0.2071, -0.2071, 0.2642, 50.5683, -39.3914)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.6569, -9.6734)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1333, 0.1333, 0.3748, 15.9502, -26.9188)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2153, -0.3336, -0.3336, 0.2154, 21.4904, -22.4475)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0175, 0.0175, 0.3972, 28.0147, -25.362)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 27 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 26}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 27.8891, -34.8649)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.9173, -24.4158)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5011, -36.612)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 24.9632, -41.872)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3682, -0.1435, -0.1339, 0.3436, 34.3194, -16.0722)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.3909, 0.3909, -0.0571, 8.6944, -22.7909)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3048, -0.2544, -0.2544, 0.3048, 4.8487, -9.607)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.3958)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6141, -22.1454)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3173, -0.2398, -0.2525, 0.3078, 23.9391, -14.757)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2514, -0.3118, -0.3118, 0.2514, 29.4595, -15.9181)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.2831)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2641, -0.2072, -0.2072, 0.2641, 50.5632, -39.4341)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6566, -9.6735)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1331, 0.1331, 0.3748, 15.9033, -26.9656)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2152, -0.3336, -0.3336, 0.2152, 21.4863, -22.443)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.016, 0.016, 0.3973, 28.0675, -25.2989)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 28 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 27}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 27.8877, -34.8617)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.8694, -24.315)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5018, -36.611)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 24.9619, -41.869)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1434, -0.1339, 0.3436, 34.317, -16.0728)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6956, -22.7904)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3047, -0.2543, -0.2543, 0.3047, 4.8455, -9.6569)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5698, 2.3952)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6134, -22.1948)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2397, -0.2524, 0.3077, 23.9349, -14.7083)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2524, -0.3132, -0.3132, 0.2524, 29.5253, -15.7895)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5114, -17.2335)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2639, -0.2072, -0.2072, 0.2639, 50.6047, -39.425)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6565, -9.674)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1329, 0.1329, 0.3748, 15.9566, -26.9106)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2139, -0.3343, -0.3343, 0.2139, 21.5243, -22.4512)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.0158, 0.0158, 0.3973, 28.1254, -25.3902)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 29 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 28}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 27.8353, -34.9079)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.8719, -24.3153)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5531, -36.61)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 24.9596, -41.8655)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3435, 34.3641, -16.0734)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6965, -22.79)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2542, -0.2542, 0.3046, 4.8417, -9.6068)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5697, 2.3949)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6125, -22.1946)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 23.9304, -14.7091)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2536, -0.3146, -0.3146, 0.2536, 29.547, -15.8079)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2338)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2631, -0.208, -0.208, 0.2631, 50.5614, -39.426)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6564, -9.6742)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3753, 0.1315, 0.1315, 0.3753, 16.0393, -26.8874)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2136, -0.3343, -0.3343, 0.2136, 21.5189, -22.4962)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.0143, 0.0143, 0.3973, 28.1798, -25.3252)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 30 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 29}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 27.833, -34.8548)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 7.9242, -24.365)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3896, 0.3896, -0.0793, 12.5046, -36.6593)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 24.9574, -41.8127)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3434, 34.3617, -16.0748)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6974, -22.8398)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3045, -0.2541, -0.2541, 0.3045, 4.838, -9.6068)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.3931, -0.3931, -0.05, 8.5699, 2.3942)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6121, -22.1943)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.317, -0.2396, -0.2522, 0.3075, 23.8759, -14.7599)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2548, -0.3162, -0.3162, 0.2548, 29.6739, -15.7239)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2342)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.263, -0.2081, -0.2081, 0.263, 50.7038, -39.566)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6561, -9.6246)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3752, 0.1312, 0.1312, 0.3752, 16.0929, -26.9322)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2123, -0.335, -0.335, 0.2123, 21.5056, -22.5037)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.014, 0.014, 0.3973, 28.238, -25.3635)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 31 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 30}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 27.8306, -34.851)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 7.9268, -24.364)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 12.5056, -36.6581)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 24.9551, -41.7592)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3679, -0.1433, -0.1338, 0.3433, 34.4088, -16.1257)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3908, 0.3908, -0.0569, 8.6989, -22.8391)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3044, -0.254, -0.254, 0.3044, 4.7839, -9.6064)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.3931, -0.3931, -0.05, 8.5696, 2.393)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3952, -0.0486, -0.0486, 0.3952, 19.6105, -22.1942)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3169, -0.2395, -0.2521, 0.3074, 23.8711, -14.7616)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2561, -0.3179, -0.3179, 0.2561, 29.807, -15.6877)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3957, -0.0157, -0.0123, 0.31, 12.5108, -17.2345)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2628, -0.2081, -0.2081, 0.2628, 50.6944, -39.556)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.656, -9.6251)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3757, 0.1297, 0.1297, 0.3757, 16.1757, -27.0081)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.212, -0.335, -0.335, 0.212, 21.5999, -22.498)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0124, 0.0124, 0.3974, 28.2935, -25.3483)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 32 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 31}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 27.7779, -34.8454)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 7.9297, -24.3135)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 12.5068, -36.6571)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 25.0025, -41.8041)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3678, -0.1433, -0.1337, 0.3432, 34.4058, -16.1262)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0568, 0.3908, 0.3908, -0.0568, 8.6998, -22.8389)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3042, -0.254, -0.254, 0.3042, 4.7795, -9.6558)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.393, -0.393, -0.05, 8.5697, 2.392)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3952, -0.0486, -0.0486, 0.3952, 19.6095, -22.2434)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3167, -0.2394, -0.252, 0.3072, 23.8655, -14.7623)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2575, -0.3197, -0.3197, 0.2575, 29.8962, -15.5981)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0156, -0.0122, 0.31, 12.5109, -17.1849)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2619, -0.2089, -0.2089, 0.2619, 50.6977, -39.5534)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6556, -9.6255)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3761, 0.1282, 0.1282, 0.3761, 16.1587, -27.0332)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2106, -0.3357, -0.3357, 0.2106, 21.6856, -22.505)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0108, 0.0108, 0.3974, 28.4005, -25.28)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 33 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 32}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 27.8351, -34.8592)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.9217, -24.3147)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5031, -36.66)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 25.0094, -41.8167)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1434, -0.1338, 0.3435, 34.315, -16.1238)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6976, -22.7907)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2542, -0.2542, 0.3046, 4.842, -9.6565)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5696, 2.3946)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6122, -22.195)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 23.8809, -14.7583)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2595, -0.322, -0.3221, 0.2595, 30.0175, -15.5494)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2342)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2621, -0.2094, -0.2094, 0.2621, 50.8318, -39.6385)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6562, -9.6749)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3764, 0.1281, 0.1281, 0.3764, 16.2681, -27.136)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2106, -0.3362, -0.3362, 0.2106, 21.7461, -22.5442)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0108, 0.0108, 0.3974, 28.4012, -25.3805)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 34 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 33}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 27.8275, -34.8451)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 7.9297, -24.3135)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, 12.5076, -36.7067)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 25.0021, -41.8038)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3677, -0.1433, -0.1337, 0.3432, 34.305, -16.1262)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0568, 0.3908, 0.3908, -0.0568, 8.6998, -22.7889)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3042, -0.2539, -0.2539, 0.3042, 4.7787, -9.6562)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.393, -0.393, -0.05, 8.5697, 2.392)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3952, -0.0486, -0.0486, 0.3952, 19.6095, -22.2434)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3167, -0.2394, -0.252, 0.3072, 23.8648, -14.7628)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2601, -0.3229, -0.3229, 0.2601, 30.0579, -15.5799)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3957, -0.0156, -0.0122, 0.31, 12.5107, -17.1849)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2609, -0.2102, -0.2102, 0.2609, 50.8643, -39.5728)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6556, -9.6755)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3766, 0.1266, 0.1266, 0.3766, 16.2959, -27.1081)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2092, -0.3366, -0.3366, 0.2092, 21.8236, -22.5562)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0091, 0.0091, 0.3975, 28.4599, -25.4072)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 35 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 34}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 27.88, -34.8498)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 7.9274, -24.3638)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 12.5058, -36.6577)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 25.0045, -41.8581)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3678, -0.1433, -0.1338, 0.3433, 34.3083, -16.1257)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3908, 0.3908, -0.0569, 8.6989, -22.7391)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3043, -0.254, -0.254, 0.3043, 4.783, -9.6062)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.393, -0.393, -0.05, 8.5695, 2.3927)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3952, -0.0486, -0.0486, 0.3952, 19.6098, -22.1936)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3168, -0.2395, -0.2521, 0.3073, 23.87, -14.7612)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2612, -0.3242, -0.3243, 0.2613, 30.1266, -15.6514)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.511, -17.2345)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.26, -0.2114, -0.2114, 0.26, 50.9404, -39.4506)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6562, -9.6751)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3768, 0.1265, 0.1265, 0.3768, 16.3505, -27.1587)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2091, -0.3368, -0.3368, 0.2091, 21.7771, -22.6508)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.009, 0.009, 0.3975, 28.5137, -25.4538)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 36 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 35}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 27.8824, -34.8536)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 7.9245, -24.3642)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5043, -36.659)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 25.0068, -41.8616)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3434, 34.3116, -16.1247)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6977, -22.7395)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3045, -0.2541, -0.2541, 0.3045, 4.8371, -9.5565)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5693, 2.3934)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6118, -22.1941)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.317, -0.2396, -0.2522, 0.3075, 23.8748, -14.7607)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2624, -0.3256, -0.3256, 0.2624, 30.1459, -15.6733)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2344)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2592, -0.2127, -0.2127, 0.2592, 50.9682, -39.4802)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.656, -9.6748)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3769, 0.1264, 0.1264, 0.3769, 16.4045, -27.2087)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.209, -0.337, -0.337, 0.209, 21.7796, -22.6451)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0089, 0.0089, 0.3975, 28.5179, -25.4985)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 37 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 36}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 27.8848, -34.9075)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.8717, -24.3147)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5031, -36.61)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 25.0091, -41.8652)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1339, 0.3435, 34.3146, -16.1234)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6465, -22.7403)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2542, -0.2542, 0.3046, 4.8411, -9.5563)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5696, 2.3946)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6125, -22.1946)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 23.9302, -14.7085)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2635, -0.327, -0.327, 0.2635, 30.3163, -15.7442)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.234)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2583, -0.2139, -0.2139, 0.2583, 51.0417, -39.407)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6564, -9.7245)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3774, 0.125, 0.125, 0.3774, 16.4371, -27.1896)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2079, -0.3378, -0.3379, 0.2079, 21.8239, -22.6033)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0088, 0.0088, 0.3975, 28.5223, -25.4956)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 38 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 37}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 27.8878, -34.9125)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.0931, 0.0931, 0.3872, 7.87, -24.3148)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5018, -36.611)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 25.012, -41.8698)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1434, -0.1339, 0.3436, 34.3179, -16.0728)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6455, -22.7407)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3047, -0.2543, -0.2543, 0.3047, 4.8458, -9.5571)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5698, 2.3955)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6141, -22.1954)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2398, -0.2524, 0.3077, 23.9359, -14.7077)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2647, -0.3284, -0.3284, 0.2647, 30.387, -15.8158)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5116, -17.2335)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2567, -0.216, -0.216, 0.2567, 51.1295, -39.2965)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6565, -9.724)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3775, 0.125, 0.125, 0.3775, 16.4409, -27.24)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2078, -0.3381, -0.3381, 0.2078, 21.8771, -22.6473)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0087, 0.0087, 0.3975, 28.5264, -25.541)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 39 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 38}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 27.9398, -34.9169)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.8666, -24.3655)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5006, -36.612)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 24.964, -41.8738)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3682, -0.1435, -0.1339, 0.3437, 34.3203, -16.0719)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.644, -22.7411)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3048, -0.2544, -0.2544, 0.3048, 4.8498, -9.5069)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5697, 2.3961)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6151, -22.1456)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2398, -0.2525, 0.3078, 23.9404, -14.657)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2658, -0.3298, -0.3298, 0.2658, 30.5075, -15.837)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0123, 0.31, 12.5118, -17.2831)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2558, -0.2172, -0.2172, 0.2558, 51.1538, -39.1742)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6569, -9.7236)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3777, 0.1249, 0.1249, 0.3777, 16.4448, -27.24)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2078, -0.3383, -0.3383, 0.2078, 21.8802, -22.6923)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0073, 0.0073, 0.3976, 28.6261, -25.5312)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 40 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 39}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 27.9553, -34.9365)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 7.9038, -24.4198)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 12.4924, -36.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 25.0287, -41.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3687, -0.1439, -0.1343, 0.3441, 34.385, -16.1119)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0584, 0.391, 0.391, -0.0584, 8.6195, -22.7888)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3055, -0.2549, -0.2549, 0.3055, 4.8708, -9.5602)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0502, -0.3934, -0.3934, -0.0502, 8.5685, 2.4005)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 19.6223, -22.0944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 23.9739, -14.704)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2679, -0.3313, -0.3313, 0.2679, 30.5642, -15.8723)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0166, -0.013, 0.31, 12.514, -17.3231)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2555, -0.2187, -0.2187, 0.2555, 51.2699, -39.1228)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, 17.66, -9.7129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3782, 0.1249, 0.1249, 0.3782, 16.5053, -27.2987)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2074, -0.3393, -0.3393, 0.2074, 21.9948, -22.7135)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0078, 0.0078, 0.3976, 28.6069, -25.5556)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 41 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 40}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 27.8903, -34.8672)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9156, -24.3659)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5001, -36.6627)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 24.9645, -41.8741)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1435, -0.1339, 0.3437, 34.3217, -16.1211)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.6943, -22.7915)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2544, -0.2544, 0.3049, 4.8507, -9.6071)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5697, 2.3964)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6148, -22.1459)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2399, -0.2525, 0.3078, 23.9421, -14.7566)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2646, -0.3282, -0.3282, 0.2646, 30.3814, -15.9197)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.2829)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2558, -0.2174, -0.2174, 0.2558, 51.2086, -39.0611)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6569, -9.6736)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3777, 0.125, 0.125, 0.3777, 16.4916, -27.2436)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2079, -0.3382, -0.3382, 0.2079, 21.9331, -22.6473)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0088, 0.0088, 0.3975, 28.4729, -25.5961)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 42 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 41}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 27.9386, -34.8646)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.9179, -24.4156)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5008, -36.6117)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 24.9628, -41.8716)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3682, -0.1435, -0.1339, 0.3436, 34.3194, -16.0722)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.391, 0.391, -0.057, 8.6952, -22.7913)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3048, -0.2544, -0.2544, 0.3048, 4.8481, -9.607)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.3958)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6141, -22.1454)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3173, -0.2398, -0.2524, 0.3077, 23.9387, -14.7568)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2622, -0.3254, -0.3254, 0.2623, 30.2859, -15.8299)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0123, 0.31, 12.5118, -17.2833)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2565, -0.2163, -0.2163, 0.2565, 51.2392, -38.8685)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6565, -9.674)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3771, 0.1266, 0.1266, 0.3771, 16.3554, -27.1654)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2093, -0.3372, -0.3373, 0.2093, 21.891, -22.6448)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3975, 0.0105, 0.0105, 0.3975, 28.3649, -25.5657)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 43 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 42}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 27.8872, -34.8114)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.8694, -24.315)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5018, -36.661)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 24.9614, -41.8687)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1434, -0.1339, 0.3436, 34.317, -16.0728)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.7464, -22.8405)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3047, -0.2543, -0.2543, 0.3047, 4.8455, -9.6569)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5698, 2.3952)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6134, -22.1948)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2398, -0.2524, 0.3077, 23.8846, -14.7075)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2599, -0.3225, -0.3226, 0.2599, 30.1441, -15.8391)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2339)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2566, -0.2161, -0.2161, 0.2566, 51.1788, -38.6885)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6564, -9.6245)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3765, 0.1281, 0.1281, 0.3765, 16.2195, -27.0876)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2106, -0.3363, -0.3363, 0.2106, 21.7489, -22.5926)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0108, 0.0108, 0.3974, 28.3027, -25.5285)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 44 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 43}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 27.8351, -34.8592)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.8717, -24.3147)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5029, -36.6609)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 24.9594, -41.8667)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3435, 34.3645, -16.0738)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6976, -22.8404)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2542, -0.2542, 0.3046, 4.8423, -9.6568)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5698, 2.3952)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6128, -22.1949)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 23.8809, -14.7085)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2576, -0.3197, -0.3197, 0.2577, 30.0017, -15.8989)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2342)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2574, -0.215, -0.215, 0.2574, 51.1603, -38.5951)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6563, -9.6247)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3763, 0.1283, 0.1283, 0.3763, 16.1621, -27.0399)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2108, -0.336, -0.3361, 0.2109, 21.6483, -22.5525)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3974, 0.0124, 0.0124, 0.3974, 28.2446, -25.547)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 45 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 44}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 27.8332, -34.8557)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 7.8733, -24.3141)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5536, -36.66)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 24.9576, -41.8635)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3434, 34.3635, -16.0745)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6985, -22.8402)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3045, -0.2542, -0.2542, 0.3045, 4.8397, -9.6066)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.3931, -0.3931, -0.05, 8.5699, 2.3942)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6125, -22.1946)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.317, -0.2396, -0.2522, 0.3075, 23.877, -14.7094)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2554, -0.317, -0.317, 0.2554, 29.9129, -15.8558)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5112, -17.2346)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2575, -0.2148, -0.2148, 0.2575, 51.2, -38.4134)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.656, -9.6251)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3758, 0.1298, 0.1298, 0.3758, 16.1259, -26.9618)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2122, -0.3351, -0.3351, 0.2122, 21.6065, -22.4996)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.014, 0.014, 0.3973, 28.1376, -25.5153)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 46 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 45}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 27.8922, -34.8708)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9143, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.499, -36.6628)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 25.0163, -41.8774)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1436, -0.134, 0.3438, 34.3237, -16.1205)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.6934, -22.7916)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8536, -9.6075)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.397)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6161, -22.1458)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3175, -0.2399, -0.2526, 0.3079, 23.8958, -14.7052)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2537, -0.3147, -0.3147, 0.2537, 29.8036, -15.8081)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.2825)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2587, -0.2141, -0.2141, 0.2587, 51.1748, -38.274)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.657, -9.6732)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3755, 0.1317, 0.1317, 0.3755, 15.9902, -26.9453)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2139, -0.3346, -0.3346, 0.2139, 21.5815, -22.4949)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.0157, 0.0157, 0.3973, 28.0782, -25.4881)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 47 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 46}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 27.8335, -34.8552)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 7.9235, -24.3146)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5041, -36.6594)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 25.0079, -41.813)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3434, 34.3126, -16.1245)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6988, -22.7902)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3045, -0.2542, -0.2542, 0.3045, 4.8388, -9.6564)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.3931, -0.3931, -0.05, 8.5698, 2.3939)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6115, -22.1944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.317, -0.2396, -0.2522, 0.3075, 23.8759, -14.7592)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2527, -0.3137, -0.3137, 0.2527, 29.6971, -15.8268)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0156, -0.0123, 0.31, 12.5112, -17.2348)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2592, -0.2128, -0.2128, 0.2592, 50.9728, -38.4259)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6559, -9.6753)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3752, 0.1314, 0.1314, 0.3752, 15.9882, -26.9856)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2136, -0.3342, -0.3342, 0.2136, 21.517, -22.499)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0157, 0.0157, 0.3973, 28.1262, -25.4365)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 48 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 47}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 27.8339, -34.8577)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.9223, -24.3145)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 12.5036, -36.66)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 25.0083, -41.8153)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.368, -0.1434, -0.1338, 0.3435, 34.314, -16.1242)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6979, -22.7901)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2542, -0.2542, 0.3046, 4.8409, -9.6566)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5696, 2.3946)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6122, -22.195)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3171, -0.2397, -0.2523, 0.3076, 23.8791, -14.7585)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2522, -0.3131, -0.3131, 0.2523, 29.6175, -15.8399)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5112, -17.2344)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2594, -0.2126, -0.2126, 0.2594, 50.9766, -38.4928)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.007, -0.007, 0.3977, 17.6562, -9.6749)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3752, 0.1316, 0.1316, 0.3752, 15.9363, -26.9387)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2137, -0.3342, -0.3342, 0.2137, 21.5195, -22.4506)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.0158, 0.0158, 0.3973, 28.1237, -25.441)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 49 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 48}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1775, 0.1775, 0.3554, 27.8364, -34.8594)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 7.9207, -24.3151)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5028, -36.6604)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1775, 0.1775, 0.3554, 25.0106, -41.8669)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1434, -0.1339, 0.3435, 34.3159, -16.1231)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0569, 0.3909, 0.3909, -0.0569, 8.6973, -22.7907)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3046, -0.2543, -0.2543, 0.3046, 4.8429, -9.6567)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3931, -0.3931, -0.0501, 8.5697, 2.3949)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3953, -0.0486, -0.0486, 0.3953, 19.6128, -22.1949)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2397, -0.2523, 0.3076, 23.8822, -14.7577)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2518, -0.3125, -0.3125, 0.2518, 29.5897, -15.9033)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5114, -17.2342)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2602, -0.2117, -0.2117, 0.2602, 50.8661, -38.5988)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6563, -9.6747)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1329, 0.1329, 0.3748, 15.9062, -26.9092)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2139, -0.3342, -0.3342, 0.2139, 21.5224, -22.5028)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.0159, 0.0159, 0.3973, 28.1206, -25.395)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 50 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 49}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 27.8873, -34.9122)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.9194, -24.315)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5021, -36.6113)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 25.0116, -41.8695)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3681, -0.1435, -0.1339, 0.3436, 34.3174, -16.1224)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6964, -22.7908)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3047, -0.2543, -0.2543, 0.3047, 4.8452, -9.5566)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.05, -0.3932, -0.3932, -0.05, 8.5701, 2.3951)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6135, -22.1454)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3172, -0.2398, -0.2524, 0.3077, 23.9347, -14.7573)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2514, -0.3119, -0.3119, 0.2514, 29.4616, -15.8655)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5113, -17.2338)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2604, -0.2116, -0.2116, 0.2604, 50.87, -38.6157)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6564, -9.6742)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.133, 0.133, 0.3748, 15.954, -26.8621)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2151, -0.3335, -0.3335, 0.2151, 21.4834, -22.4424)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3973, 0.016, 0.016, 0.3973, 28.1175, -25.3489)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 51 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 50}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 27.8884, -34.9137)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.9177, -24.3651)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 12.5014, -36.6117)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 25.0126, -41.8709)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3682, -0.1435, -0.1339, 0.3436, 34.3188, -16.1226)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.057, 0.3909, 0.3909, -0.057, 8.6455, -22.791)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3047, -0.2544, -0.2544, 0.3047, 4.8472, -9.5568)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5699, 2.3958)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6141, -22.1454)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3173, -0.2398, -0.2524, 0.3077, 23.9371, -14.7573)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2509, -0.3113, -0.3113, 0.2509, 29.4321, -15.8786)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0157, -0.0123, 0.31, 12.5118, -17.2837)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2612, -0.2106, -0.2106, 0.2612, 50.7104, -38.8208)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6565, -9.724)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1331, 0.1331, 0.3748, 15.9523, -26.8648)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2152, -0.3335, -0.3335, 0.2152, 21.436, -22.4449)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0174, 0.0174, 0.3972, 28.0172, -25.4075)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 52 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 51}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 27.8902, -34.9164)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 7.9173, -24.3658)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.5006, -36.612)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 25.0143, -41.8733)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3682, -0.1435, -0.1339, 0.3437, 34.3203, -16.1219)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.6446, -22.7912)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3048, -0.2544, -0.2544, 0.3048, 4.8495, -9.5566)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5697, 2.3961)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6148, -22.1453)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2398, -0.2525, 0.3078, 23.9402, -14.7564)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2505, -0.3107, -0.3107, 0.2505, 29.304, -15.842)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0123, 0.31, 12.5118, -17.2833)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2614, -0.2105, -0.2105, 0.2614, 50.6652, -38.8869)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0071, -0.0071, 0.3977, 17.6569, -9.7236)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3748, 0.1333, 0.1333, 0.3748, 15.851, -26.8678)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2153, -0.3335, -0.3336, 0.2153, 21.4385, -22.4468)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0175, 0.0175, 0.3972, 28.0634, -25.4109)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 53 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 52}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 27.891, -34.9184)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 7.9156, -24.3659)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 12.4998, -36.6124)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 25.0151, -41.8752)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3683, -0.1435, -0.134, 0.3437, 34.3218, -16.1212)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0571, 0.391, 0.391, -0.0571, 8.6437, -22.7914)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3049, -0.2545, -0.2545, 0.3049, 4.8516, -9.5574)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0501, -0.3932, -0.3932, -0.0501, 8.5698, 2.3967)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3954, -0.0486, -0.0486, 0.3954, 19.6158, -22.1461)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3174, -0.2399, -0.2526, 0.3079, 23.8934, -14.7058)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.25, -0.3101, -0.3102, 0.25, 29.3253, -15.8546)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0158, -0.0124, 0.31, 12.5119, -17.2831)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.2623, -0.2096, -0.2096, 0.2623, 50.5074, -38.992)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0072, -0.0072, 0.3977, 17.6569, -9.7234)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1346, 0.1346, 0.3744, 15.8203, -26.8385)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2154, -0.3335, -0.3336, 0.2154, 21.391, -22.3987)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0176, 0.0176, 0.3972, 28.0616, -25.3654)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 54 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${LoseMaleBrute_X_OFFSET + (LoseMaleBrute_WIDTH + LoseMaleBrute_MARGIN) * 53}, ${LoseMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 27.9553, -34.9365)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 7.9038, -24.4198)" width="253.5" xlinkHref={`#LoseMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 12.4924, -36.6151)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 25.0287, -41.8917)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 11.7424, -13.108)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3687, -0.1439, -0.1343, 0.3441, 34.385, -16.1119)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0584, 0.391, 0.391, -0.0584, 8.6195, -22.7888)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3055, -0.2549, -0.2549, 0.3055, 4.8708, -9.5602)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(0.0502, -0.3934, -0.3934, -0.0502, 8.5685, 2.4005)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3956, -0.0488, -0.0488, 0.3956, 19.6223, -22.0944)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite47`} />
        <use height="44.05" transform="matrix(-0.3182, -0.2401, -0.2533, 0.3082, 23.9739, -14.704)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite52`} />
        <use height="44.2" transform="matrix(-0.2504, -0.3097, -0.3097, 0.2505, 29.2827, -15.9296)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite58`} />
        <use height="45.0" transform="matrix(-0.3958, -0.0166, -0.013, 0.31, 12.514, -17.3231)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite65`} />
        <use height="115.65" transform="matrix(-0.263, -0.2097, -0.2097, 0.263, 50.5515, -39.0744)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3977, -0.0079, -0.0079, 0.3977, 17.66, -9.7129)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3747, 0.1351, 0.1351, 0.3747, 15.8183, -26.8541)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2166, -0.3336, -0.3336, 0.2166, 21.416, -22.4228)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3972, 0.0187, 0.0187, 0.3972, 27.9753, -25.4121)" width="85.25" xlinkHref={`#LoseMaleBrute-${id}-sprite95`} />
      </g>
      <defs>
        <g id={`LoseMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#LoseMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#LoseMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#LoseMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#LoseMaleBrute-${id}-shape0`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`LoseMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-shape1`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#LoseMaleBrute-${id}-sprite6`} />
          <clipPath id={`LoseMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`LoseMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#LoseMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#LoseMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#LoseMaleBrute-${id}-shape2`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#LoseMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#LoseMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#LoseMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#LoseMaleBrute-${id}-shape4`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#LoseMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#LoseMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#LoseMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#LoseMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#LoseMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#LoseMaleBrute-${id}-shape5`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`LoseMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`LoseMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#LoseMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#LoseMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#LoseMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#LoseMaleBrute-${id}-shape6`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#LoseMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#LoseMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`LoseMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#LoseMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#LoseMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#LoseMaleBrute-${id}-shape7`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`LoseMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#LoseMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`LoseMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#LoseMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#LoseMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`LoseMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#LoseMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#LoseMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#LoseMaleBrute-${id}-shape7`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#LoseMaleBrute-${id}-shape8`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#LoseMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`LoseMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#LoseMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#LoseMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#LoseMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#LoseMaleBrute-${id}-shape9`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#LoseMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#LoseMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`LoseMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#LoseMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#LoseMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#LoseMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`LoseMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#LoseMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`LoseMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#LoseMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`LoseMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#LoseMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-shape10`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#LoseMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#LoseMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#LoseMaleBrute-${id}-sprite55`} />
          <use height="44.25" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#LoseMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#LoseMaleBrute-${id}-shape11`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite56`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#LoseMaleBrute-${id}-sprite57`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#LoseMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#LoseMaleBrute-${id}-sprite60`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`LoseMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#LoseMaleBrute-${id}-sprite61`} />
          <use height="35.0" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#LoseMaleBrute-${id}-sprite62`} />
          <use height="41.1" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#LoseMaleBrute-${id}-sprite63`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite62`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#LoseMaleBrute-${id}-shape12`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#LoseMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#LoseMaleBrute-${id}-shape13`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#LoseMaleBrute-${id}-sprite66`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite66`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`LoseMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#LoseMaleBrute-${id}-sprite67`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#LoseMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`LoseMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#LoseMaleBrute-${id}-sprite68`} />
          <use height="45.0" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#LoseMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#LoseMaleBrute-${id}-shape14`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`LoseMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#LoseMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`LoseMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#LoseMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#LoseMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`LoseMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#LoseMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#LoseMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`LoseMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#LoseMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`LoseMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#LoseMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`LoseMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#LoseMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#LoseMaleBrute-${id}-shape15`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`LoseMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#LoseMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#LoseMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#LoseMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#LoseMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#LoseMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`LoseMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#LoseMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#LoseMaleBrute-${id}-shape17`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#LoseMaleBrute-${id}-shape18`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#LoseMaleBrute-${id}-shape20`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`LoseMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#LoseMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#LoseMaleBrute-${id}-shape21`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#LoseMaleBrute-${id}-shape22`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#LoseMaleBrute-${id}-sprite85`} />
          <use height="26.45" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#LoseMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#LoseMaleBrute-${id}-shape23`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#LoseMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#LoseMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#LoseMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#LoseMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#LoseMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#LoseMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#LoseMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#LoseMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`LoseMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#LoseMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`LoseMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#LoseMaleBrute-${id}-sprite96`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`LoseMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#LoseMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`LoseMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#LoseMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`LoseMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#LoseMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`LoseMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#LoseMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`LoseMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#LoseMaleBrute-${id}-shape24`} />
        </g>
        <g id={`LoseMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <path d="M53.3 19.5 L53.15 19.35 52.8 18.85 52.6 18.25 Q52.6 17.65 53.2 17.15 53.7 16.7 54.1 16.7 54.55 16.7 55.0 17.15 55.5 17.65 55.5 18.3 L54.95 19.35 Q54.4 19.9 54.05 19.9 53.7 19.9 53.3 19.5 M42.8 27.5 Q41.75 28.65 41.05 28.65 L40.05 27.95 Q39.05 27.2 38.75 27.2 37.75 27.2 36.8 25.85 35.85 24.5 35.85 23.1 35.85 22.6 36.2 22.2 36.55 21.75 37.05 21.75 38.5 21.75 40.6 22.45 43.85 23.5 43.85 25.5 43.85 26.3 42.8 27.5 M47.6 47.1 Q47.6 45.8 48.65 45.8 49.65 45.8 49.7 46.95 49.7 48.05 48.8 48.05 L48.3 48.0 Q47.6 47.8 47.6 47.1 M27.85 10.55 Q27.85 9.45 28.8 9.45 29.6 9.45 29.6 10.5 29.6 11.55 28.65 11.55 L27.95 11.4 27.85 10.55 M37.6 34.25 L39.15 34.0 Q40.95 34.0 40.3 35.6 39.7 37.15 38.45 37.15 L37.6 36.85 Q36.95 36.4 36.95 35.5 36.95 34.6 37.6 34.25" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 L26.1 66.1 25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 Q28.5 17.2 26.05 18.6 24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 15.6 39.05 16.45 41.2 17.1 43.05 18.3 44.65 21.9 49.55 28.15 49.5 L31.45 49.2 31.85 49.1 Q36.05 48.05 39.7 44.7 45.05 39.85 46.2 33.05 L46.5 29.6 M30.85 27.0 L33.35 27.2 34.7 27.65 36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M26.2 66.1 Q28.1 58.95 31.45 49.2 28.1 58.95 26.2 66.1 M49.0 20.2 Q49.2 21.9 50.0 22.45 L53.3 22.2 Q55.9 21.4 56.5 20.55 57.05 19.75 56.4 17.7 55.8 15.75 55.1 15.25 L52.8 15.15 Q50.75 15.55 49.5 17.35 48.75 18.4 49.0 20.2 M42.45 19.75 L49.1 3.0 42.45 19.75 M49.95 45.5 Q47.95 43.65 45.05 45.0 39.55 47.7 43.7 52.1 L45.2 51.7 Q47.1 51.1 48.5 49.9 49.8 48.75 50.7 47.15 L50.7 46.35 49.95 45.5 52.05 38.45 Q57.0 21.7 58.6 12.75 57.0 21.7 52.05 38.45 L49.95 45.5 M34.0 0.15 Q32.7 1.95 31.95 3.65 31.25 5.2 31.25 5.75 L30.6 7.85 31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M44.75 59.5 Q46.3 56.55 48.5 49.9 46.3 56.55 44.75 59.5 M28.1 13.9 L28.2 13.85 Q29.55 13.3 30.5 12.2 L31.0 11.15 Q31.9 8.7 30.9 8.05 L30.6 7.85 27.5 7.65 Q24.45 8.05 22.95 10.15 22.6 10.7 23.0 11.75 23.4 12.95 24.45 13.65 26.0 14.8 28.1 13.9 L26.05 18.6 28.1 13.9 M11.2 29.0 L10.9 28.55 Q6.9 28.25 4.2 31.4 3.6 34.55 6.3 36.0 L6.7 36.0 Q12.15 34.35 11.2 29.0 M14.9 55.9 Q14.05 59.1 17.0 59.1 22.95 59.1 21.05 53.4 16.4 50.4 14.9 55.9 M16.45 41.2 Q12.3 51.95 9.35 60.6 12.3 51.95 16.45 41.2" fill="#a77250" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q8.4 62.2 4.35 58.75 2.2 56.95 0.4 54.5 -6.8 44.75 -4.4 31.05 -2.0 17.45 8.65 7.8 18.05 -0.8 29.0 -1.7 L31.85 -1.85 Q38.3 -1.85 43.35 0.75 40.3 0.0 36.85 0.0 L34.0 0.15 Q23.05 1.05 13.65 9.65 3.0 19.3 0.6 32.9 -1.8 46.6 5.4 56.35 7.2 58.8 9.35 60.6 11.35 62.3 13.65 63.5 M53.3 19.5 L52.4 20.5 51.1 21.4 48.95 19.55 Q48.95 19.05 50.05 17.6 51.15 16.15 51.65 16.15 53.05 16.15 52.55 17.0 L51.5 18.45 Q52.4 18.45 52.6 19.0 L52.65 18.85 52.8 18.85 53.15 19.35 53.3 19.5 M42.8 49.1 Q42.8 48.25 43.75 47.4 44.6 46.6 45.25 46.6 45.9 46.6 45.95 47.0 L45.9 47.5 46.15 48.2 46.4 48.85 Q46.4 49.5 45.4 49.95 L43.9 50.3 Q42.8 50.05 42.8 49.1 M24.45 11.15 Q22.85 10.1 24.25 9.1 25.55 8.2 26.35 8.2 28.2 8.2 27.0 10.6 L25.35 12.95 24.45 11.15 M24.75 21.2 Q25.25 21.2 25.1 21.4 L25.05 21.4 Q25.1 22.1 24.3 23.05 L24.85 23.7 Q24.85 24.65 23.55 26.15 23.55 27.0 23.2 27.5 L22.85 28.2 Q22.85 28.7 23.0 28.5 L23.05 28.45 23.6 27.4 Q23.95 26.8 24.3 26.8 24.6 26.8 24.7 27.05 L25.1 27.9 26.15 27.2 27.0 26.65 27.15 26.85 Q24.9 32.4 24.65 32.4 L24.05 32.3 23.65 31.15 23.3 30.75 22.9 31.05 22.35 31.2 Q21.65 31.2 21.35 30.3 L21.35 30.4 20.0 32.55 Q18.75 34.4 18.35 34.4 L17.85 34.05 17.65 33.35 Q17.65 33.05 17.8 32.85 L17.9 32.5 Q16.95 32.2 16.95 31.45 16.95 30.25 20.5 25.7 24.0 21.2 24.75 21.2 M19.0 42.3 L19.2 41.5 Q19.45 41.0 19.85 41.0 20.35 41.0 21.25 41.5 21.05 40.05 21.9 39.7 L23.4 39.25 24.45 37.65 Q25.15 36.3 25.35 36.3 26.35 36.3 26.3 37.75 26.25 39.2 25.5 39.2 L25.15 39.15 25.0 38.9 24.9 39.1 Q25.2 39.4 25.0 40.2 24.8 41.0 24.35 41.0 24.1 41.0 23.5 41.35 22.75 41.8 22.75 42.3 L22.85 43.55 21.5 43.95 22.4 45.5 Q22.4 46.3 21.65 46.3 21.2 46.3 20.3 45.4 19.0 44.15 19.0 42.3 M7.35 29.3 Q8.75 29.3 8.1 30.15 L6.85 31.6 6.9 31.65 7.55 31.7 Q8.15 31.8 8.15 32.45 L7.9 34.0 Q7.5 34.65 6.5 34.65 L5.65 34.5 5.55 33.8 Q5.55 33.25 5.15 32.65 L4.75 31.6 Q4.75 30.95 5.8 30.1 6.8 29.3 7.35 29.3 M18.2 54.5 L17.9 55.5 17.95 55.75 Q19.1 55.85 19.1 56.6 L18.25 57.55 Q17.4 58.15 16.9 58.15 16.4 58.15 15.95 57.5 15.5 56.9 15.5 56.4 15.5 55.45 16.05 54.5 16.6 53.5 17.3 53.5 18.25 53.5 18.2 54.5" fill="#674732" fillRule="evenodd" stroke="none" />
          <path d="M52.8 18.85 L52.65 18.85 52.6 19.0 Q52.4 18.45 51.5 18.45 L52.55 17.0 Q53.05 16.15 51.65 16.15 51.15 16.15 50.05 17.6 48.95 19.05 48.95 19.55 L51.1 21.4 52.4 20.5 53.3 19.5 Q53.7 19.9 54.05 19.9 54.4 19.9 54.95 19.35 L55.5 18.3 Q55.5 17.65 55.0 17.15 54.55 16.7 54.1 16.7 53.7 16.7 53.2 17.15 52.6 17.65 52.6 18.25 L52.8 18.85 M31.2 16.75 L33.95 16.5 Q39.05 16.5 42.45 19.75 L43.85 21.4 Q46.45 24.95 46.5 29.6 L36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 15.5 34.85 15.85 32.95 17.05 26.15 22.35 21.3 24.15 19.7 26.05 18.6 28.5 17.2 31.2 16.75 L30.85 27.0 31.2 16.75 M36.25 30.95 L34.7 27.65 33.35 27.2 30.85 27.0 30.0 27.35 Q26.35 29.25 25.95 33.3 L15.55 36.65 25.95 33.3 26.1 34.25 Q26.85 38.65 31.05 37.95 L32.3 37.4 Q36.9 35.35 36.25 30.95 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M42.8 27.5 Q43.85 26.3 43.85 25.5 43.85 23.5 40.6 22.45 38.5 21.75 37.05 21.75 36.55 21.75 36.2 22.2 35.85 22.6 35.85 23.1 35.85 24.5 36.8 25.85 37.75 27.2 38.75 27.2 39.05 27.2 40.05 27.95 L41.05 28.65 Q41.75 28.65 42.8 27.5 M42.8 49.1 Q42.8 50.05 43.9 50.3 L45.4 49.95 Q46.4 49.5 46.4 48.85 L46.15 48.2 45.9 47.5 45.95 47.0 Q45.9 46.6 45.25 46.6 44.6 46.6 43.75 47.4 42.8 48.25 42.8 49.1 M47.6 47.1 Q47.6 47.8 48.3 48.0 L48.8 48.05 Q49.7 48.05 49.7 46.95 49.65 45.8 48.65 45.8 47.6 45.8 47.6 47.1 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M24.45 11.15 L25.35 12.95 27.0 10.6 Q28.2 8.2 26.35 8.2 25.55 8.2 24.25 9.1 22.85 10.1 24.45 11.15 M27.85 10.55 L27.95 11.4 28.65 11.55 Q29.6 11.55 29.6 10.5 29.6 9.45 28.8 9.45 27.85 9.45 27.85 10.55 M24.75 21.2 Q24.0 21.2 20.5 25.7 16.95 30.25 16.95 31.45 16.95 32.2 17.9 32.5 L17.8 32.85 Q17.65 33.05 17.65 33.35 L17.85 34.05 18.35 34.4 Q18.75 34.4 20.0 32.55 L21.35 30.4 21.35 30.3 Q21.65 31.2 22.35 31.2 L22.9 31.05 23.3 30.75 23.65 31.15 24.05 32.3 24.65 32.4 Q24.9 32.4 27.15 26.85 L27.0 26.65 26.15 27.2 25.1 27.9 24.7 27.05 Q24.6 26.8 24.3 26.8 23.95 26.8 23.6 27.4 L23.05 28.45 23.0 28.5 Q22.85 28.7 22.85 28.2 L23.2 27.5 Q23.55 27.0 23.55 26.15 24.85 24.65 24.85 23.7 L24.3 23.05 Q25.1 22.1 25.05 21.4 L25.1 21.4 Q25.25 21.2 24.75 21.2 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M7.35 29.3 Q6.8 29.3 5.8 30.1 4.75 30.95 4.75 31.6 L5.15 32.65 Q5.55 33.25 5.55 33.8 L5.65 34.5 6.5 34.65 Q7.5 34.65 7.9 34.0 L8.15 32.45 Q8.15 31.8 7.55 31.7 L6.9 31.65 6.85 31.6 8.1 30.15 Q8.75 29.3 7.35 29.3 M19.0 42.3 Q19.0 44.15 20.3 45.4 21.2 46.3 21.65 46.3 22.4 46.3 22.4 45.5 L21.5 43.95 22.85 43.55 22.75 42.3 Q22.75 41.8 23.5 41.35 24.1 41.0 24.35 41.0 24.8 41.0 25.0 40.2 25.2 39.4 24.9 39.1 L25.0 38.9 25.15 39.15 25.5 39.2 Q26.25 39.2 26.3 37.75 26.35 36.3 25.35 36.3 25.15 36.3 24.45 37.65 L23.4 39.25 21.9 39.7 Q21.05 40.05 21.25 41.5 20.35 41.0 19.85 41.0 19.45 41.0 19.2 41.5 L19.0 42.3 M37.6 34.25 Q36.95 34.6 36.95 35.5 36.95 36.4 37.6 36.85 L38.45 37.15 Q39.7 37.15 40.3 35.6 40.95 34.0 39.15 34.0 L37.6 34.25 M31.85 49.1 L31.05 37.95 31.85 49.1 M18.2 54.5 Q18.25 53.5 17.3 53.5 16.6 53.5 16.05 54.5 15.5 55.45 15.5 56.4 15.5 56.9 15.95 57.5 16.4 58.15 16.9 58.15 17.4 58.15 18.25 57.55 L19.1 56.6 Q19.1 55.85 17.95 55.75 L17.9 55.5 18.2 54.5 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="#f7c500" fillRule="evenodd" stroke="none" />
          <path d="M43.35 0.75 Q38.3 -1.85 31.85 -1.85 L29.0 -1.7 Q18.05 -0.8 8.65 7.8 -2.0 17.45 -4.4 31.05 -6.8 44.75 0.4 54.5 2.2 56.95 4.35 58.75 8.4 62.2 13.65 63.5 11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 M26.1 66.1 L25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 30.85 27.0 33.35 27.2 34.7 27.65 36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M26.05 18.6 Q28.5 17.2 31.2 16.75 M26.05 18.6 Q24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 M36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 31.85 49.1 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M31.45 49.2 Q28.1 58.95 26.2 66.1 M49.1 3.0 L42.45 19.75 M49.95 45.5 L52.05 38.45 Q57.0 21.7 58.6 12.75 M48.5 49.9 Q46.3 56.55 44.75 59.5 M30.6 7.85 L31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M28.1 13.9 L26.05 18.6 M9.35 60.6 Q12.3 51.95 16.45 41.2" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default LoseMaleBrute;