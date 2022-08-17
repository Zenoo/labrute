/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface HealMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const HealMaleBrute_WIDTH = 151.5;
export const HealMaleBrute_HEIGHT = 102.25;
export const HealMaleBrute_FRAMES = 48;
export const HealMaleBrute_X_OFFSET = 53.25;
export const HealMaleBrute_Y_OFFSET = 84.75;
export const HealMaleBrute_MARGIN = 30;

// TODO: Missing shapes at the start

const HealMaleBrute = ({ id, inverted, sx, ...rest }: HealMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: HealMaleBrute_WIDTH,
      height: HealMaleBrute_HEIGHT,
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
          ? -(HealMaleBrute_WIDTH + HealMaleBrute_MARGIN)
            * (HealMaleBrute_FRAMES - 1)
            - HealMaleBrute_MARGIN
          : 0,
        width: (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * HealMaleBrute_FRAMES,
        animation: `HealMaleBrute${inverted ? 'Inverted' : ''} 1.20s steps(${HealMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 0}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 1}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.5422, -48.3708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.8143, -32.4158)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0403, 0.3959, 0.3959, -0.0403, 4.6475, -43.193)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6663, -48.0274)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1438, 0.3683, 0.3683, 0.1438, 3.7825, -27.6661)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.397, -0.0333, -0.0333, 0.397, -5.6712, -8.4105)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 1.1877, -13.0873)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0055, 0.0055, 0.3987, 10.9595, -28.6921)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2941, -0.2659, -0.1736, 0.192, 1.7794, -17.5196)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.348, -0.1934, -0.2073, 0.3403, 16.2728, -22.0548)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.348, -0.1934, -0.1934, 0.3481, 21.5579, -29.3194)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.0769, -62.1293)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3718, -0.1414, -0.1414, 0.3718, -10.0452, -30.3106)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0282, -0.3976, -0.3976, 0.0282, 1.9146, -27.2924)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0965, -0.3859, -0.386, 0.0965, 10.4615, -28.0947)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2157, -0.3346, -0.3346, 0.2157, 8.4962, -27.0301)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 2}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 21.4922, -47.9208)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 2.7643, -31.9658)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0743, 0.3909, 0.3909, 0.0743, 6.496, -45.5667)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.8663, -49.7274)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1982, 0.3418, 0.3418, 0.1982, 5.816, -28.8393)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3948, -0.0524, -0.0524, 0.3948, -3.8761, -8.5909)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 2.4877, -13.3373)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3979, 0.0247, 0.0247, 0.3979, 11.344, -30.3663)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.312, -0.2445, -0.1691, 0.2158, 3.0948, -19.0598)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.357, -0.1764, -0.1907, 0.35, 17.0601, -23.8887)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.357, -0.1764, -0.1764, 0.357, 21.9036, -31.4336)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.3269, -64.1793)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3718, -0.1414, -0.1414, 0.3718, -7.9952, -29.6106)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1166, -0.3809, -0.3809, 0.1166, 4.1213, -29.6567)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.115, -0.3808, -0.3808, 0.115, 10.9379, -30.1354)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2618, -0.2999, -0.2999, 0.2618, 10.6048, -29.5455)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 3}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 19.6922, -47.1708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 0.9643, -31.2158)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2493, 0.3095, 0.3095, 0.2493, 10.3516, -47.9327)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.1663, -52.5274)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2785, 0.2798, 0.2798, 0.2785, 9.2706, -30.55)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.389, -0.0848, -0.0848, 0.389, -0.8181, -8.9398)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 4.6377, -13.8373)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3944, 0.0575, 0.0575, 0.3944, 11.9712, -33.1017)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3394, -0.2047, -0.1549, 0.2569, 5.1519, -21.7831)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3705, -0.1463, -0.1611, 0.3646, 18.1383, -27.1821)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3704, -0.1463, -0.1463, 0.3705, 22.4037, -35.0773)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 31.0769, -67.6293)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3718, -0.1414, -0.1414, 0.3718, -4.5452, -28.4106)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2482, -0.3112, -0.3112, 0.2482, 6.8684, -34.2575)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1461, -0.3699, -0.3699, 0.1461, 11.6062, -33.4555)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3268, -0.2273, -0.2273, 0.3268, 13.2486, -33.9405)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 4}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 17.1053, -46.0865)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, -1.5962, -30.1698)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3901, 0.0796, 0.0796, 0.3901, 15.4151, -47.2076)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 17.6287, -56.4917)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 13.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3768, -0.1297, -0.1297, 0.3768, 3.3808, -9.2246)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 7.7982, -14.4318)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 12.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3692, -0.145, -0.1231, 0.3135, 7.8403, -25.6015)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 19.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1032, -0.1032, 0.3851, 22.9434, -40.0793)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 29.3307, -72.3305)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, 0.3604, -26.6972)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3715, -0.1445, -0.1445, 0.3715, 8.3901, -41.1277)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.188, -0.3509, -0.3509, 0.1881, 12.5336, -38.2707)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3851, -0.1032, -0.1032, 0.3851, 14.7463, -39.9863)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 5}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.2422, -45.9708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, -1.4357, -30.0658)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3898, 0.0794, 0.0794, 0.3898, 15.2628, -47.051)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.5163, -56.3774)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 13.4109, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3826, -0.1099, -0.1099, 0.3826, 3.2483, -8.9746)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.349, -0.1882, -0.1882, 0.349, 7.6592, -14.6395)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 12.6057, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3728, -0.1343, -0.1176, 0.3264, 7.5698, -25.8252)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 19.3982, -31.6921)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1019, -0.1019, 0.3851, 22.7682, -39.9766)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3293, -0.0703, -0.0703, 0.3293, 30.5757, -70.8648)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3814, -0.1131, -0.1131, 0.3814, 0.2742, -27.774)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3589, -0.1717, -0.1717, 0.3589, 8.3174, -40.4163)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1604, -0.3638, -0.3638, 0.1604, 12.1765, -37.1807)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3907, -0.0779, -0.0779, 0.3907, 13.8779, -41.7181)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 6}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.3922, -45.8708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, -1.2857, -29.9658)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3898, 0.0794, 0.0794, 0.3898, 15.0628, -46.951)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.3163, -56.2774)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 13.1609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3887, -0.0864, -0.0864, 0.3887, 3.0027, -8.6527)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3599, -0.1665, -0.1665, 0.3599, 7.5247, -14.8176)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 12.3557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3763, -0.1243, -0.1122, 0.3395, 7.3982, -26.0384)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 19.1482, -31.6921)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1019, -0.1019, 0.3851, 22.5682, -39.8766)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3243, -0.0902, -0.0902, 0.3243, 31.9429, -69.0474)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3898, -0.0795, -0.0795, 0.3898, 0.3534, -28.911)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3432, -0.2008, -0.2008, 0.3432, 8.1595, -39.7118)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1282, -0.3763, -0.3763, 0.1283, 11.569, -36.0533)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3952, -0.0503, -0.0503, 0.3952, 12.9344, -43.5123)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 7}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.5422, -45.7708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, -1.1357, -29.8658)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3898, 0.0794, 0.0794, 0.3898, 14.8128, -46.851)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 17.0663, -56.1774)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.9109, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3939, -0.059, -0.059, 0.3939, 2.7214, -8.3921)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3708, -0.1409, -0.1409, 0.3708, 7.2213, -15.1226)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 12.1057, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3794, -0.1143, -0.1051, 0.3529, 7.1177, -26.3042)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.8982, -31.6921)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1019, -0.1019, 0.3851, 22.3182, -39.7766)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3171, -0.1127, -0.1127, 0.3171, 33.4831, -66.8599)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3956, -0.0419, -0.0419, 0.3956, 0.1273, -30.2462)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3231, -0.2313, -0.2313, 0.3231, 7.8334, -38.7589)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0931, -0.3865, -0.3865, 0.0931, 10.951, -34.8114)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3979, -0.0192, -0.0192, 0.3979, 11.7446, -45.5998)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 8}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 17.7553, -45.6365)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, -0.9462, -29.7198)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3901, 0.0796, 0.0796, 0.3901, 14.5651, -46.7576)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.7787, -56.0417)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1032, -0.1032, 0.3851, 22.0934, -39.6293)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3073, -0.1381, -0.1381, 0.3073, 35.1543, -64.2912)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3979, -0.0021, -0.0021, 0.3979, -0.0124, -31.6489)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2984, -0.2629, -0.2629, 0.2984, 7.5314, -37.81)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0541, -0.394, -0.394, 0.0541, 10.1475, -33.546)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3981, 0.0143, 0.0143, 0.3981, 10.2631, -47.653)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 9}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 17.5405, -45.6681)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, -1.1844, -29.8159)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3875, 0.0897, 0.0897, 0.3875, 14.4061, -46.8225)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 16.4146, -55.9249)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0366, 0.0229, 0.2468, 24.9044, -18.718)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3594, 0.1626, 0.1626, 0.3594, 12.7096, -32.2231)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, 2.4676, -7.9065)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1112, -0.1112, 0.3808, 6.9816, -15.4045)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7555, -36.8984)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.3659, 6.8396, -26.5364)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3806, 18.5458, -31.7416)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1019, -0.1019, 0.3851, 22.0655, -39.7777)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.32, -0.1042, -0.1042, 0.32, 32.4836, -67.2065)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3956, 0.0402, 0.0402, 0.3956, -0.4305, -33.3199)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2676, -0.2935, -0.2935, 0.2676, 6.8864, -37.0355)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0107, -0.3975, -0.3975, 0.0107, 9.0689, -32.5231)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3949, 0.0506, 0.0506, 0.3949, 8.4909, -50.0616)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 10}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 17.2391, -45.7649)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, -1.4829, -29.8653)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3849, 0.1, 0.1, 0.3849, 14.144, -46.99)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.0632, -55.772)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0366, 0.0229, 0.2468, 24.9041, -18.717)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3594, 0.1625, 0.1625, 0.3594, 12.7092, -32.2219)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, 2.4662, -7.9074)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3807, -0.1112, -0.1112, 0.3807, 6.9812, -15.4048)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1018, 0.1018, 0.3851, 11.7555, -36.8961)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1028, -0.0983, 0.3659, 6.8387, -26.5368)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3847, -0.1032, -0.1185, 0.3806, 18.5435, -31.7413)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.385, -0.1018, -0.1018, 0.3851, 22.0126, -39.8288)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3294, -0.0686, -0.0686, 0.3294, 29.4901, -70.0656)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3879, 0.0864, 0.0864, 0.3879, -0.8461, -35.2744)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2313, -0.3231, -0.3231, 0.2313, 6.1612, -36.2405)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0347, -0.396, -0.396, -0.0347, 7.8982, -31.5131)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3876, 0.0899, 0.0899, 0.3876, 6.2897, -52.514)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 11}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.9872, -45.8114)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, -1.7306, -29.915)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3816, 0.1115, 0.1115, 0.3816, 13.8498, -47.1215)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 15.7114, -55.5687)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0365, 0.0228, 0.2468, 24.9038, -18.7153)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3593, 0.1624, 0.1624, 0.3593, 12.7082, -32.22)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0263, -0.0263, 0.3975, 2.4651, -7.9086)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3807, -0.1112, -0.1112, 0.3807, 6.9795, -15.4053)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.385, 0.1018, 0.1018, 0.385, 11.756, -36.8942)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3825, -0.1028, -0.0983, 0.3658, 6.8384, -26.5371)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3847, -0.1032, -0.1184, 0.3805, 18.5918, -31.6915)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.385, -0.1018, -0.1018, 0.385, 22.0108, -39.8805)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3351, -0.0311, -0.0311, 0.3351, 26.112, -72.7094)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.2995, 0.5187, -0.5187, 0.2995, -1.6339, -33.2186)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(-0.3738, 0.1353, 0.1353, 0.3738, -1.4186, -37.1923)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.1896, -0.3501, -0.3501, 0.1896, 5.1327, -35.4639)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(0.0835, -0.3887, -0.3888, -0.0835, 6.4343, -30.6512)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(-0.3756, 0.132, 0.132, 0.3756, 3.8365, -54.9735)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 12}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.6856, -45.9095)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.0931, 0.0931, 0.3872, -2.029, -30.0144)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3784, 0.1216, 0.1216, 0.3784, 13.6274, -47.2777)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 15.4099, -55.417)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0365, 0.0228, 0.2468, 24.904, -18.7134)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3593, 0.1624, 0.1624, 0.3593, 12.7075, -32.2191)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, 2.514, -7.9093)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3806, -0.1112, -0.1112, 0.3806, 6.9785, -15.4054)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.385, 0.1017, 0.1017, 0.385, 11.756, -36.942)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3825, -0.1028, -0.0983, 0.3658, 6.8373, -26.5376)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3846, -0.1031, -0.1184, 0.3805, 18.5395, -31.7412)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.385, -0.1017, -0.1017, 0.385, 21.9573, -39.9818)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3365, 0.0047, 0.0047, 0.3365, 22.6965, -75.0033)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.5501, 0.3724, -0.3724, 0.5501, 1.225, -34.4239)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(-0.2813, 0.2799, 0.2799, 0.2813, 0.6741, -37.0936)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.3149, -0.2424, -0.2424, 0.3149, 7.0926, -38.3486)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(0.0174, -0.3971, -0.3971, -0.0174, 7.9775, -31.8497)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(-0.318, 0.2383, 0.2383, 0.3179, 0.8349, -55.3533)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 13}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 16.4332, -45.9057)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, -2.2767, -30.0641)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3744, 0.1329, 0.1329, 0.3744, 13.2716, -47.446)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 15.0576, -55.3135)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0364, 0.0228, 0.2467, 24.9032, -18.712)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3592, 0.1623, 0.1623, 0.3592, 12.7065, -32.2172)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, 2.5126, -7.9102)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3806, -0.1111, -0.1111, 0.3806, 6.9771, -15.356)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.385, 0.1016, 0.1016, 0.385, 11.807, -36.9399)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3824, -0.1027, -0.0982, 0.3658, 6.8368, -26.538)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3846, -0.1031, -0.1184, 0.3804, 18.5381, -31.7406)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3849, -0.1016, -0.1016, 0.385, 21.9052, -40.0344)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3336, 0.0428, 0.0428, 0.3336, 18.657, -77.2174)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.7238, 0.1052, -0.1052, 0.7238, 3.434, -34.5488)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(-0.1346, 0.3734, 0.3734, 0.1346, 2.1805, -35.9992)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.3873, -0.0898, -0.0898, 0.3873, 7.2903, -41.3119)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.0487, -0.3942, -0.3942, 0.0487, 9.3412, -33.3311)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(-0.2297, 0.324, 0.324, 0.2297, -2.7912, -53.7062)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 14}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.0922, -46.0708)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, -2.5857, -30.1658)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3705, 0.1444, 0.1444, 0.3705, 13.0643, -47.5676)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 14.6663, -55.1274)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1019, -0.1019, 0.3851, 21.9682, -40.1266)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3263, 0.0817, 0.0817, 0.3263, 14.5164, -79.2645)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.761, -0.2407, 0.2407, 0.761, 5.6595, -33.0689)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.0398, 0.3952, 0.3952, -0.0398, 3.7374, -33.5655)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.3897, 0.0797, 0.0797, 0.3898, 5.7685, -43.5019)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.1166, -0.3798, -0.3798, 0.1166, 10.3987, -35.0386)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(-0.1182, 0.3796, 0.3796, 0.1182, -6.349, -50.0169)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 15}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 16.0851, -46.0592)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, -2.5788, -30.1649)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3657, 0.1555, 0.1555, 0.3657, 12.7948, -47.5661)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1776, 0.1776, 0.3553, 14.2594, -54.8667)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0365, 0.0228, 0.2468, 24.8539, -18.7139)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3593, 0.1624, 0.1624, 0.3593, 12.6572, -32.2688)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, 2.514, -7.9093)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3806, -0.1111, -0.1111, 0.3806, 6.9784, -15.4057)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.385, 0.1017, 0.1017, 0.385, 11.7563, -36.9416)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3825, -0.1028, -0.0983, 0.3658, 6.8373, -26.5376)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3846, -0.1032, -0.1184, 0.3805, 18.5389, -31.7408)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.385, -0.1017, -0.1017, 0.385, 22.0076, -40.183)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3195, 0.1042, 0.1042, 0.3195, 11.8893, -80.0716)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.6277, -0.5933, 0.5933, 0.6277, 5.583, -37.2012)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.2091, 0.337, 0.337, -0.2091, 4.7679, -37.0116)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.318, 0.2382, 0.2382, 0.318, 3.8941, -46.322)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.1807, -0.3533, -0.3533, 0.1807, 11.1807, -36.8674)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.0056, 0.3975, 0.3975, -0.0056, -8.5588, -50.1327)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 16}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.0891, -46.1149)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, -2.5823, -30.1651)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3609, 0.1666, 0.1666, 0.3609, 12.5244, -47.5177)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 13.9132, -54.672)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0366, 0.0229, 0.2468, 24.8541, -18.7166)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3594, 0.1625, 0.1625, 0.3594, 12.6589, -32.2719)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, 2.4665, -7.9077)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3807, -0.1112, -0.1112, 0.3807, 6.9808, -15.405)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1018, 0.1018, 0.3851, 11.7562, -36.8961)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1028, -0.0983, 0.3659, 6.8387, -26.5368)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3847, -0.1032, -0.1185, 0.3806, 18.5942, -31.692)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1018, -0.1018, 0.3851, 21.9629, -40.1797)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3109, 0.1276, 0.1276, 0.3109, 9.0593, -80.8663)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(0.3269, -0.8717, 0.8717, 0.3269, 6.9332, -40.5015)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3378, 0.2078, 0.2078, -0.3378, 6.7128, -39.6272)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.1839, 0.3524, 0.3524, 0.1839, 1.4416, -47.3278)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.2409, -0.3154, -0.3154, 0.2409, 11.6427, -38.9543)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.1328, 0.3744, 0.3744, -0.1328, -9.5181, -48.407)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 17}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.1053, -46.0865)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, -2.5962, -30.1698)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 12.2559, -47.6219)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 13.5287, -54.3917)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3851, -0.1032, -0.1032, 0.3851, 21.9434, -40.0793)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3009, 0.1507, 0.1507, 0.3009, 6.1124, -81.5622)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.0919, -0.9947, 0.9947, -0.0919, 10.0241, -43.5441)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3957, 0.0334, 0.0334, -0.3957, 9.9584, -42.0258)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(-0.0109, 0.3979, 0.3979, 0.0109, -0.6622, -46.242)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.2949, -0.2667, -0.2667, 0.295, 11.7532, -40.9867)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2471, 0.3117, 0.3117, -0.2471, -8.4192, -45.514)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 18}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3395, 0.2068, 0.2068, 0.3395, 13.6691, -47.2401)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3782, -0.1252, 0.1252, 0.3782, -3.6422, -29.7417)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3458, 0.196, 0.196, 0.3458, 11.4138, -48.2789)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3458, 0.196, 0.196, 0.3458, 12.2962, -55.1292)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3897, -0.0829, -0.0829, 0.3897, 21.5081, -41.2772)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2922, 0.1658, 0.1658, 0.2922, 3.5213, -81.7401)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.1435, -0.9879, 0.9879, -0.1435, 9.3205, -44.0158)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3968, 0.0123, 0.0123, -0.3968, 9.3337, -42.6068)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.009, 0.3979, 0.3979, -0.009, -1.4213, -46.1729)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.308, -0.2504, -0.2504, 0.308, 11.2358, -41.6452)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2624, 0.2979, 0.2979, -0.2624, -9.164, -45.1009)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 19}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3201, 0.2357, 0.2357, 0.3201, 10.9998, -48.2782)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3657, -0.1577, 0.1577, 0.3657, -4.6932, -29.4104)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3349, 0.2139, 0.2139, 0.3349, 10.4668, -48.8718)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3349, 0.2139, 0.2139, 0.3349, 10.9562, -55.7469)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3935, -0.0624, -0.0624, 0.3935, 20.8906, -42.371)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.283, 0.1809, 0.1809, 0.283, 0.8037, -81.936)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.1951, -0.9787, 0.9787, -0.1951, 8.6861, -44.649)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3969, -0.0072, -0.0072, -0.3969, 8.7672, -43.1158)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0298, 0.3967, 0.3967, -0.0298, -2.1826, -46.1644)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3207, -0.2338, -0.2338, 0.3207, 10.6553, -42.2525)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2776, 0.2837, 0.2837, -0.2776, -9.8386, -44.6683)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 20}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, -5.648, -28.9898)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3236, 0.2316, 0.2316, 0.3236, 9.5634, -49.5544)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3236, 0.2315, 0.2315, 0.3236, 9.7557, -56.3995)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3964, -0.0413, -0.0413, 0.3964, 20.3284, -43.6158)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2733, 0.196, 0.196, 0.2733, -1.8511, -82.0551)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2472, -0.9674, 0.9674, -0.2472, 7.9712, -45.1385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3959, -0.0293, -0.0293, -0.3959, 8.1791, -43.6417)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0518, 0.3945, 0.3945, -0.0518, -2.9519, -46.1142)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.333, -0.2168, -0.2168, 0.3331, 10.1094, -42.9114)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2929, 0.2688, 0.2688, -0.2929, -10.4898, -44.2036)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 21}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3471, -0.1951, 0.1951, 0.3471, -5.5474, -28.9807)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.3418, -49.7377)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.415, -56.512)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4035, -0.0353, -0.0419, 0.3979, 20.4562, -43.8689)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2696, 0.2001, 0.2001, 0.2696, -2.6022, -82.0145)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2627, -0.9623, 0.9624, -0.2627, 7.7841, -45.3385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0349, -0.0349, -0.3953, 7.962, -43.861)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0574, 0.3935, 0.3935, -0.0574, -3.1005, -46.1057)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3362, -0.2108, -0.2108, 0.3362, 9.9996, -43.1517)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2967, 0.2635, 0.2635, -0.2967, -10.5784, -44.0973)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 22}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3436, -0.201, 0.201, 0.3436, -5.4571, -28.9309)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.1058, -49.8752)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.1241, -56.7281)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4107, -0.0289, -0.0423, 0.3997, 20.4842, -44.2949)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2661, 0.2048, 0.2048, 0.2661, -3.4258, -82.0138)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2761, -0.9585, 0.9585, -0.2761, 7.6278, -45.5501)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3946, -0.0416, -0.0416, -0.3946, 7.9022, -43.9632)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0641, 0.3924, 0.3924, -0.0641, -3.2224, -46.0751)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3397, -0.205, -0.205, 0.3398, 9.9027, -43.2973)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3012, 0.2584, 0.2584, -0.3012, -10.6951, -43.9224)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 23}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3401, -0.2069, 0.2069, 0.3401, -5.3134, -28.832)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3115, 0.2465, 0.2465, 0.3115, 8.9363, -50.0694)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3114, 0.2465, 0.2465, 0.3114, 8.7864, -56.9541)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3848, -0.1032, -0.1185, 0.3807, 18.5482, -31.7421)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.418, -0.0222, -0.0426, 0.4014, 20.6608, -44.7307)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2632, 0.2084, 0.2084, 0.2632, -4.1576, -81.9957)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2925, -0.9535, 0.9535, -0.2925, 7.4448, -45.7429)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3938, -0.0484, -0.0484, -0.3938, 7.7938, -44.1155)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0709, 0.3912, 0.3912, -0.0709, -3.4927, -46.0411)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3426, -0.2002, -0.2002, 0.3426, 9.7119, -43.5044)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3056, 0.2531, 0.2531, -0.3056, -10.9077, -43.7451)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 24}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3371, -0.2128, 0.2129, 0.3371, -5.2375, -28.7879)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.6182, -50.2764)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.3526, -57.1001)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4252, -0.0162, -0.0447, 0.4032, 20.7721, -44.99)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2598, 0.2135, 0.2135, 0.2598, -4.9588, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.3102, -0.9488, 0.9488, -0.3102, 7.2649, -45.7747)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.393, -0.0552, -0.0552, -0.393, 7.5847, -44.2675)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0777, 0.3901, 0.3901, -0.0777, -3.6652, -46.01)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3465, -0.1944, -0.1944, 0.3465, 9.5739, -43.6561)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3098, 0.2489, 0.2489, -0.3098, -11.0963, -43.6172)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 25}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3392, -0.2084, 0.2084, 0.3392, -5.2514, -28.7704)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.8441, -50.1297)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.6277, -56.9727)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3903, -0.1047, -0.1202, 0.3861, 18.7356, -31.7078)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4094, -0.0199, -0.0429, 0.3915, 20.296, -44.5654)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2623, 0.2096, 0.2096, 0.2623, -4.3766, -81.906)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2964, -0.9523, 0.9522, -0.2964, 7.473, -45.6678)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3935, -0.0501, -0.0501, -0.3935, 7.6545, -44.1415)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0725, 0.3909, 0.3909, -0.0725, -3.5719, -46.0078)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3434, -0.1987, -0.1987, 0.3434, 9.6492, -43.5031)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3058, 0.2528, 0.2528, -0.3058, -11.0074, -43.7723)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 27 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 26}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3419, -0.2039, 0.2039, 0.3419, -5.3859, -28.8093)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9733, -49.9973)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9575, -56.8152)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3958, -0.1062, -0.1219, 0.3916, 18.9752, -31.7246)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3933, -0.0243, -0.0402, 0.3799, 19.7435, -44.0696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.265, 0.2061, 0.2061, 0.265, -3.767, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.284, -0.9561, 0.9561, -0.2839, 7.5333, -45.5988)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3942, -0.045, -0.045, -0.3942, 7.8226, -44.0151)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0674, 0.3919, 0.3919, -0.0674, -3.3818, -46.0097)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3408, -0.2032, -0.2032, 0.3408, 9.7884, -43.4053)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3033, 0.2558, 0.2558, -0.3034, -10.8511, -43.7369)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 28 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 27}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3446, -0.1994, 0.1994, 0.3446, -5.4695, -28.8493)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.2019, -49.813)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.188, -56.7056)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4014, -0.1077, -0.1237, 0.3971, 19.1677, -31.7909)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.377, -0.0283, -0.0388, 0.3679, 19.3065, -43.6331)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2677, 0.2026, 0.2026, 0.2677, -3.1054, -81.9908)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2714, -0.9599, 0.9599, -0.2714, 7.7444, -45.3312)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3948, -0.0398, -0.0398, -0.3948, 7.941, -43.9396)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0623, 0.3927, 0.3927, -0.0623, -3.2398, -46.0605)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3381, -0.2077, -0.2077, 0.3381, 9.8745, -43.2068)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2991, 0.2608, 0.2598, -0.3, -10.7051, -43.9163)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 29 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 28}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3472, -0.1949, 0.1949, 0.3472, -5.4984, -28.94)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.3306, -49.6767)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.4184, -56.5932)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4071, -0.1092, -0.1254, 0.4027, 19.3624, -31.7578)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3605, -0.0318, -0.0374, 0.3558, 18.7601, -43.2097)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2704, 0.1991, 0.1991, 0.2704, -2.4938, -82.002)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2588, -0.9634, 0.9634, -0.2588, 7.7571, -45.2647)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0346, -0.0346, -0.3953, 8.1107, -43.8148)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0571, 0.3936, 0.3936, -0.0571, -3.0963, -46.11)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3353, -0.2121, -0.2121, 0.3354, 10.0597, -43.1073)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2957, 0.2647, 0.2647, -0.2957, -10.6219, -44.1332)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 30 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 29}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, -5.648, -28.9898)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3236, 0.2316, 0.2316, 0.3236, 9.5634, -49.5544)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3236, 0.2315, 0.2315, 0.3236, 9.7557, -56.3995)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4133, -0.1107, -0.1279, 0.4086, 19.5797, -31.7776)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3437, -0.0358, -0.0358, 0.3437, 18.2504, -42.7696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2733, 0.196, 0.196, 0.2733, -1.8511, -82.0551)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2472, -0.9674, 0.9674, -0.2472, 7.9712, -45.1385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3959, -0.0293, -0.0293, -0.3959, 8.1791, -43.6417)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0518, 0.3945, 0.3945, -0.0518, -2.9519, -46.1142)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.333, -0.2168, -0.2168, 0.3331, 10.1094, -42.9114)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2929, 0.2688, 0.2688, -0.2929, -10.4898, -44.2036)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 31 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 30}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3471, -0.1951, 0.1951, 0.3471, -5.5469, -28.9798)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.3413, -49.7378)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.4636, -56.5631)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4059, -0.1089, -0.1251, 0.4015, 19.2711, -31.7547)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3639, -0.0318, -0.0377, 0.3584, 18.8953, -43.3103)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2696, 0.2001, 0.2001, 0.2696, -2.604, -82.0144)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2627, -0.9623, 0.9624, -0.2627, 7.7841, -45.3385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0349, -0.0349, -0.3953, 7.9621, -43.8608)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0574, 0.3935, 0.3935, -0.0574, -3.1011, -46.1052)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3362, -0.2108, -0.2108, 0.3362, 9.9996, -43.1523)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2967, 0.2635, 0.2635, -0.2967, -10.5774, -44.0461)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 32 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 31}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3436, -0.201, 0.201, 0.3436, -5.4575, -28.9306)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.105, -49.8756)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.1232, -56.7275)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3989, -0.107, -0.1229, 0.3946, 19.0813, -31.7838)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3843, -0.027, -0.0395, 0.3733, 19.492, -43.7887)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2661, 0.2048, 0.2048, 0.2661, -3.4276, -82.0137)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2761, -0.9585, 0.9585, -0.2761, 7.6278, -45.5501)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3946, -0.0417, -0.0417, -0.3946, 7.9022, -43.963)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0641, 0.3924, 0.3924, -0.0641, -3.223, -46.0746)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3398, -0.2049, -0.2049, 0.3398, 9.9027, -43.298)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3012, 0.2583, 0.2583, -0.3012, -10.6953, -43.92)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 33 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 32}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3401, -0.2069, 0.2069, 0.3401, -5.2636, -28.8313)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3115, 0.2465, 0.2465, 0.3115, 8.886, -50.0697)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3114, 0.2465, 0.2465, 0.3114, 8.7856, -56.9542)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3919, -0.1051, -0.1207, 0.3876, 18.8402, -31.7131)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4048, -0.0214, -0.0412, 0.3882, 20.1898, -44.3944)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2632, 0.2085, 0.2085, 0.2632, -4.1603, -81.9965)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2925, -0.9535, 0.9535, -0.2925, 7.4448, -45.7429)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3938, -0.0485, -0.0485, -0.3938, 7.7939, -44.1151)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0709, 0.3912, 0.3912, -0.0709, -3.493, -46.0409)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3432, -0.199, -0.199, 0.3432, 9.702, -43.5424)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3056, 0.2531, 0.2531, -0.3056, -10.9079, -43.744)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 34 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 33}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3371, -0.2128, 0.2129, 0.3371, -5.2375, -28.7879)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.6182, -50.2764)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.3526, -57.1001)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4252, -0.0162, -0.0447, 0.4032, 20.7721, -44.99)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2598, 0.2135, 0.2135, 0.2598, -4.9588, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.3102, -0.9488, 0.9488, -0.3102, 7.2649, -45.7747)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.393, -0.0552, -0.0552, -0.393, 7.5847, -44.2675)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0777, 0.3901, 0.3901, -0.0777, -3.6652, -46.01)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3465, -0.1944, -0.1944, 0.3465, 9.5739, -43.6561)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3098, 0.2489, 0.2489, -0.3098, -11.0963, -43.6172)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 35 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 34}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3392, -0.2084, 0.2084, 0.3392, -5.2514, -28.7704)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.8441, -50.1297)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.6277, -56.9727)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3903, -0.1047, -0.1202, 0.3861, 18.7356, -31.7078)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4094, -0.0199, -0.0429, 0.3915, 20.296, -44.5654)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2623, 0.2096, 0.2096, 0.2623, -4.3766, -81.906)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2964, -0.9523, 0.9522, -0.2964, 7.473, -45.6678)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3935, -0.0501, -0.0501, -0.3935, 7.6545, -44.1415)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0725, 0.3909, 0.3909, -0.0725, -3.5719, -46.0078)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3434, -0.1987, -0.1987, 0.3434, 9.6492, -43.5031)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3058, 0.2528, 0.2528, -0.3058, -11.0074, -43.7723)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 36 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 35}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3419, -0.2039, 0.2039, 0.3419, -5.3859, -28.8093)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9733, -49.9973)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9575, -56.8152)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3958, -0.1062, -0.1219, 0.3916, 18.9752, -31.7246)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3933, -0.0243, -0.0402, 0.3799, 19.7435, -44.0696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.265, 0.2061, 0.2061, 0.265, -3.767, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.284, -0.9561, 0.9561, -0.2839, 7.5333, -45.5988)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3942, -0.045, -0.045, -0.3942, 7.8226, -44.0151)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0674, 0.3919, 0.3919, -0.0674, -3.3818, -46.0097)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3408, -0.2032, -0.2032, 0.3408, 9.7884, -43.4053)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3033, 0.2558, 0.2558, -0.3034, -10.8511, -43.7369)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 37 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 36}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3446, -0.1994, 0.1994, 0.3446, -5.4695, -28.8493)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.2019, -49.813)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.188, -56.7056)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4014, -0.1077, -0.1237, 0.3971, 19.1677, -31.7909)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.377, -0.0283, -0.0388, 0.3679, 19.3065, -43.6331)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2677, 0.2026, 0.2026, 0.2677, -3.1054, -81.9908)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2714, -0.9599, 0.9599, -0.2714, 7.7444, -45.3312)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3948, -0.0398, -0.0398, -0.3948, 7.941, -43.9396)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0623, 0.3927, 0.3927, -0.0623, -3.2398, -46.0605)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3381, -0.2077, -0.2077, 0.3381, 9.8745, -43.2068)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2991, 0.2608, 0.2598, -0.3, -10.7051, -43.9163)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 38 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 37}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3472, -0.1949, 0.1949, 0.3472, -5.4984, -28.94)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.3306, -49.6767)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.4184, -56.5932)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4071, -0.1092, -0.1254, 0.4027, 19.3624, -31.7578)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3605, -0.0318, -0.0374, 0.3558, 18.7601, -43.2097)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2704, 0.1991, 0.1991, 0.2704, -2.4938, -82.002)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2588, -0.9634, 0.9634, -0.2588, 7.7571, -45.2647)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0346, -0.0346, -0.3953, 8.1107, -43.8148)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0571, 0.3936, 0.3936, -0.0571, -3.0963, -46.11)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3353, -0.2121, -0.2121, 0.3354, 10.0597, -43.1073)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2957, 0.2647, 0.2647, -0.2957, -10.6219, -44.1332)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 39 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 38}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, -5.648, -28.9898)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3236, 0.2316, 0.2316, 0.3236, 9.5634, -49.5544)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3236, 0.2315, 0.2315, 0.3236, 9.7557, -56.3995)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4133, -0.1107, -0.1279, 0.4086, 19.5797, -31.7776)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3437, -0.0358, -0.0358, 0.3437, 18.2504, -42.7696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2733, 0.196, 0.196, 0.2733, -1.8511, -82.0551)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2472, -0.9674, 0.9674, -0.2472, 7.9712, -45.1385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3959, -0.0293, -0.0293, -0.3959, 8.1791, -43.6417)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0518, 0.3945, 0.3945, -0.0518, -2.9519, -46.1142)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.333, -0.2168, -0.2168, 0.3331, 10.1094, -42.9114)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2929, 0.2688, 0.2688, -0.2929, -10.4898, -44.2036)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 40 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 39}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3471, -0.1951, 0.1951, 0.3471, -5.5469, -28.9798)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.3413, -49.7378)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.319, 0.2367, 0.2367, 0.319, 9.4636, -56.5631)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4059, -0.1089, -0.1251, 0.4015, 19.2711, -31.7547)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3639, -0.0319, -0.0378, 0.3584, 18.895, -43.3098)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2696, 0.2001, 0.2001, 0.2696, -2.604, -82.0144)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2627, -0.9623, 0.9624, -0.2627, 7.7841, -45.3385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0349, -0.0349, -0.3953, 7.9621, -43.8608)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0574, 0.3935, 0.3935, -0.0574, -3.1011, -46.1052)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3362, -0.2108, -0.2108, 0.3362, 9.9996, -43.1523)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2967, 0.2635, 0.2635, -0.2967, -10.5774, -44.0461)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 41 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 40}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3436, -0.201, 0.201, 0.3436, -5.4575, -28.9306)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.105, -49.8756)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3157, 0.2411, 0.2411, 0.3157, 9.1232, -56.7275)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3989, -0.107, -0.1229, 0.3946, 19.0813, -31.7838)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3843, -0.027, -0.0395, 0.3733, 19.4914, -43.7889)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2661, 0.2048, 0.2048, 0.2661, -3.4276, -82.0137)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2761, -0.9585, 0.9585, -0.2761, 7.6278, -45.5501)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3946, -0.0417, -0.0417, -0.3946, 7.9022, -43.963)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0641, 0.3924, 0.3924, -0.0641, -3.223, -46.0746)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3398, -0.2049, -0.2049, 0.3398, 9.9024, -43.298)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3012, 0.2583, 0.2583, -0.3012, -10.6953, -43.92)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 42 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 41}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3401, -0.2069, 0.2069, 0.3401, -5.2636, -28.8313)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3115, 0.2465, 0.2465, 0.3115, 8.886, -50.0697)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3114, 0.2465, 0.2465, 0.3114, 8.7856, -56.9542)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3919, -0.1051, -0.1207, 0.3876, 18.8402, -31.7131)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4047, -0.0215, -0.0412, 0.3882, 20.1892, -44.3936)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2632, 0.2085, 0.2085, 0.2632, -4.1603, -81.9965)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2925, -0.9535, 0.9535, -0.2925, 7.4448, -45.7429)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3938, -0.0485, -0.0485, -0.3938, 7.7939, -44.1151)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0709, 0.3912, 0.3912, -0.0709, -3.493, -46.0409)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3432, -0.199, -0.199, 0.3432, 9.702, -43.5424)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3056, 0.2531, 0.2531, -0.3056, -10.9079, -43.744)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 43 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 42}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3371, -0.2128, 0.2129, 0.3371, -5.2375, -28.7879)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.6182, -50.2764)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3076, 0.2523, 0.2523, 0.3076, 8.3526, -57.1001)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 18.6158, -31.6939)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4252, -0.0162, -0.0447, 0.4032, 20.7721, -44.99)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2598, 0.2135, 0.2135, 0.2598, -4.9588, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.3102, -0.9488, 0.9488, -0.3102, 7.2649, -45.7747)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.393, -0.0552, -0.0552, -0.393, 7.5847, -44.2675)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0777, 0.3901, 0.3901, -0.0777, -3.6652, -46.01)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3465, -0.1944, -0.1944, 0.3465, 9.5739, -43.6561)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3098, 0.2489, 0.2489, -0.3098, -11.0963, -43.6172)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 44 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 43}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3392, -0.2084, 0.2084, 0.3392, -5.2514, -28.7704)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.8441, -50.1297)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3104, 0.2478, 0.2478, 0.3104, 8.6277, -56.9727)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3903, -0.1047, -0.1202, 0.3861, 18.7356, -31.7078)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.4094, -0.0199, -0.0429, 0.3915, 20.296, -44.5654)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2623, 0.2096, 0.2096, 0.2623, -4.3766, -81.906)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2964, -0.9523, 0.9522, -0.2964, 7.473, -45.6678)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3935, -0.0501, -0.0501, -0.3935, 7.6545, -44.1415)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0725, 0.3909, 0.3909, -0.0725, -3.5719, -46.0078)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3434, -0.1987, -0.1987, 0.3434, 9.6492, -43.5031)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3058, 0.2528, 0.2528, -0.3058, -11.0074, -43.7723)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 45 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 44}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3419, -0.2039, 0.2039, 0.3419, -5.3859, -28.8093)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9733, -49.9973)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3136, 0.2437, 0.2437, 0.3136, 8.9575, -56.8152)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3958, -0.1062, -0.1219, 0.3916, 18.9752, -31.7246)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3933, -0.0243, -0.0402, 0.3799, 19.7435, -44.0696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.265, 0.2061, 0.2061, 0.265, -3.767, -81.926)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.284, -0.9561, 0.9561, -0.2839, 7.5333, -45.5988)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3942, -0.045, -0.045, -0.3942, 7.8226, -44.0151)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0674, 0.3919, 0.3919, -0.0674, -3.3818, -46.0097)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3408, -0.2032, -0.2032, 0.3408, 9.7884, -43.4053)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.3033, 0.2558, 0.2558, -0.3034, -10.8511, -43.7369)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 46 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 45}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3446, -0.1994, 0.1994, 0.3446, -5.4695, -28.8493)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.2019, -49.813)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3168, 0.2396, 0.2396, 0.3168, 9.188, -56.7056)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4014, -0.1077, -0.1237, 0.3971, 19.1677, -31.7909)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.377, -0.0283, -0.0388, 0.3679, 19.3065, -43.6331)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2677, 0.2026, 0.2026, 0.2677, -3.1054, -81.9908)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2714, -0.9599, 0.9599, -0.2714, 7.7444, -45.3312)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3948, -0.0398, -0.0398, -0.3948, 7.941, -43.9396)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0623, 0.3927, 0.3927, -0.0623, -3.2398, -46.0605)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3381, -0.2077, -0.2077, 0.3381, 9.8745, -43.2068)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2991, 0.2608, 0.2598, -0.3, -10.7051, -43.9163)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 47 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 46}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 8.2893, -49.2158)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3472, -0.1949, 0.1949, 0.3472, -5.4984, -28.94)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.3306, -49.6767)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.32, 0.2354, 0.2354, 0.32, 9.4184, -56.5932)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1626, 0.1626, 0.3595, 12.6609, -32.2247)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, 2.4687, -7.9058)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3808, -0.1113, -0.1113, 0.3808, 6.9829, -15.4042)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1019, 0.1019, 0.3851, 11.7557, -36.9502)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3826, -0.1029, -0.0984, 0.366, 6.8401, -26.5859)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4071, -0.1092, -0.1254, 0.4027, 19.3624, -31.7578)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3605, -0.0318, -0.0374, 0.3558, 18.7601, -43.2097)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2704, 0.1991, 0.1991, 0.2704, -2.4938, -82.002)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2588, -0.9634, 0.9634, -0.2588, 7.7571, -45.2647)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3953, -0.0346, -0.0346, -0.3953, 8.1107, -43.8148)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0571, 0.3936, 0.3936, -0.0571, -3.0963, -46.11)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.3353, -0.2121, -0.2121, 0.3354, 10.0597, -43.1073)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2957, 0.2647, 0.2647, -0.2957, -10.6219, -44.1332)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 48 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${HealMaleBrute_X_OFFSET + (HealMaleBrute_WIDTH + HealMaleBrute_MARGIN) * 47}, ${HealMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.264, 0.264, 0.298, 8.3602, -49.237)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, -5.648, -28.9898)" width="253.5" xlinkHref={`#HealMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.3236, 0.2316, 0.2316, 0.3236, 9.5634, -49.5544)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3236, 0.2315, 0.2315, 0.3236, 9.7557, -56.3995)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3595, 0.1638, 0.1638, 0.3595, 12.6586, -32.2458)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, 2.4414, -7.8802)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3811, -0.1117, -0.1117, 0.3811, 6.9896, -15.3972)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3851, 0.1032, 0.1032, 0.3851, 11.7328, -36.9292)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3828, -0.1038, -0.0992, 0.3661, 6.8437, -26.5754)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.4133, -0.1107, -0.1279, 0.4086, 19.5797, -31.7776)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3437, -0.0358, -0.0358, 0.3437, 18.2504, -42.7696)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2733, 0.196, 0.196, 0.2733, -1.8511, -82.0551)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite70`} />
        <use height="15.9" transform="matrix(-0.2472, -0.9674, 0.9674, -0.2472, 7.9712, -45.1385)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-sprite83`} />
        <use height="26.45" transform="matrix(0.3959, -0.0293, -0.0293, -0.3959, 8.1791, -43.6417)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite84`} />
        <use height="30.75" transform="matrix(0.0518, 0.3945, 0.3945, -0.0518, -2.9519, -46.1142)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite88`} />
        <use height="48.0" transform="matrix(-0.333, -0.2168, -0.2168, 0.3331, 10.1094, -42.9114)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite92`} />
        <use height="80.8" transform="matrix(0.2929, 0.2688, 0.2688, -0.2929, -10.4898, -44.2036)" width="85.25" xlinkHref={`#HealMaleBrute-${id}-sprite96`} />
      </g>
      <defs>
        <g id={`HealMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#HealMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`HealMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#HealMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#HealMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#HealMaleBrute-${id}-shape0`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`HealMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-shape1`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#HealMaleBrute-${id}-sprite6`} />
          <clipPath id={`HealMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`HealMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#HealMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#HealMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#HealMaleBrute-${id}-shape2`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#HealMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`HealMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#HealMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#HealMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#HealMaleBrute-${id}-shape4`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#HealMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#HealMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#HealMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#HealMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`HealMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#HealMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#HealMaleBrute-${id}-shape5`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`HealMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`HealMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#HealMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#HealMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#HealMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#HealMaleBrute-${id}-shape6`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`HealMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#HealMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#HealMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`HealMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#HealMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#HealMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`HealMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#HealMaleBrute-${id}-shape7`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`HealMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#HealMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`HealMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#HealMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#HealMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`HealMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#HealMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#HealMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#HealMaleBrute-${id}-shape7`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#HealMaleBrute-${id}-shape8`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#HealMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`HealMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#HealMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#HealMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#HealMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#HealMaleBrute-${id}-shape9`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`HealMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#HealMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#HealMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`HealMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#HealMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#HealMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#HealMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`HealMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#HealMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`HealMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#HealMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`HealMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#HealMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-shape10`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#HealMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`HealMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#HealMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#HealMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`HealMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#HealMaleBrute-${id}-sprite55`} />
          <use height="45.0" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#HealMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#HealMaleBrute-${id}-shape11`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#HealMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#HealMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#HealMaleBrute-${id}-sprite60`} />
          <use height="44.25" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#HealMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#HealMaleBrute-${id}-shape12`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`HealMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#HealMaleBrute-${id}-sprite62`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#HealMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#HealMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`HealMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#HealMaleBrute-${id}-sprite66`} />
          <use height="35.0" id={`HealMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#HealMaleBrute-${id}-sprite67`} />
          <use height="41.1" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#HealMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#HealMaleBrute-${id}-shape13`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`HealMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#HealMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#HealMaleBrute-${id}-shape14`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`HealMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#HealMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`HealMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#HealMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#HealMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`HealMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#HealMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#HealMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`HealMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#HealMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`HealMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#HealMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`HealMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#HealMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#HealMaleBrute-${id}-shape15`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`HealMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#HealMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#HealMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#HealMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#HealMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#HealMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`HealMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#HealMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#HealMaleBrute-${id}-shape17`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#HealMaleBrute-${id}-shape18`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#HealMaleBrute-${id}-shape20`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`HealMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#HealMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#HealMaleBrute-${id}-shape21`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#HealMaleBrute-${id}-shape22`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.7, 7.95)">
          <use height="15.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.7, -7.95)" width="9.35" xlinkHref={`#HealMaleBrute-${id}-shape23`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.7, 7.95)">
          <path d="M-2.45 -7.15 Q-2.45 -7.5 -1.75 -7.75 L0.05 -7.95 1.8 -7.75 Q2.55 -7.5 2.55 -7.15 2.55 -6.8 1.8 -6.6 L1.55 -6.5 1.55 -1.85 3.25 -0.7 Q4.65 0.8 4.65 2.9 4.65 5.0 3.25 6.45 1.9 7.95 -0.05 7.95 -1.95 7.95 -3.35 6.45 -4.7 5.0 -4.7 2.9 -4.7 0.8 -3.35 -0.7 -2.5 -1.55 -1.5 -1.9 L-1.5 -6.5 -1.75 -6.6 Q-2.45 -6.8 -2.45 -7.15 M1.55 -1.85 L-0.05 -2.15 -1.5 -1.9 -0.05 -2.15 1.55 -1.85 M-1.5 -6.5 L0.0 -6.6 1.55 -6.5 0.0 -6.6 -1.5 -6.5 M2.55 1.4 L3.0 1.7 3.45 1.4 3.35 1.15 2.95 0.9 Q2.55 0.9 2.55 1.4 M0.15 -0.55 Q0.15 -0.3 0.5 0.1 1.0 0.65 1.65 0.65 2.45 0.65 2.45 0.2 2.45 -0.45 1.3 -1.05 0.15 -1.65 0.15 -0.55 M-4.1 2.75 L-4.25 3.75 -3.1 5.75 Q-2.0 7.2 -0.45 7.3 1.05 7.45 2.15 6.6 L3.4 5.2 3.7 3.95 3.65 3.6 Q3.5 3.3 2.85 3.3 2.1 3.3 1.6 3.6 L0.45 3.85 Q-0.45 3.85 -1.6 2.85 -2.75 1.8 -3.15 1.8 -4.0 1.8 -4.1 2.75" fill="#990000" fillRule="evenodd" stroke="none" />
          <path d="M0.15 -0.55 Q0.15 -1.65 1.3 -1.05 2.45 -0.45 2.45 0.2 2.45 0.65 1.65 0.65 1.0 0.65 0.5 0.1 0.15 -0.3 0.15 -0.55 M2.55 1.4 Q2.55 0.9 2.95 0.9 L3.35 1.15 3.45 1.4 3.0 1.7 2.55 1.4" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M3.4 5.2 L2.15 6.6 Q1.05 7.45 -0.45 7.3 -2.0 7.2 -3.1 5.75 L-4.25 3.75 -4.1 2.75 -4.05 2.6 -4.1 2.8 -3.8 3.5 Q-2.5 6.55 -0.6 6.55 0.6 6.55 1.85 5.55 L3.15 4.15 3.25 4.1 3.4 4.4 3.4 5.2" fill="#ff0000" fillRule="evenodd" stroke="none" />
          <path d="M3.4 5.2 L3.4 4.4 3.25 4.1 3.15 4.15 1.85 5.55 Q0.6 6.55 -0.6 6.55 -2.5 6.55 -3.8 3.5 L-4.1 2.8 -4.05 2.6 -4.1 2.75 Q-4.0 1.8 -3.15 1.8 -2.75 1.8 -1.6 2.85 -0.45 3.85 0.45 3.85 L1.6 3.6 Q2.1 3.3 2.85 3.3 3.5 3.3 3.65 3.6 L3.7 3.95 3.4 5.2" fill="#e11ebb" fillRule="evenodd" stroke="none" />
          <path d="M-2.45 -7.15 Q-2.45 -7.5 -1.75 -7.75 L0.05 -7.95 1.8 -7.75 Q2.55 -7.5 2.55 -7.15 2.55 -6.8 1.8 -6.6 L1.55 -6.5 1.55 -1.85 3.25 -0.7 Q4.65 0.8 4.65 2.9 4.65 5.0 3.25 6.45 1.9 7.95 -0.05 7.95 -1.95 7.95 -3.35 6.45 -4.7 5.0 -4.7 2.9 -4.7 0.8 -3.35 -0.7 -2.5 -1.55 -1.5 -1.9 L-1.5 -6.5 -1.75 -6.6 Q-2.45 -6.8 -2.45 -7.15 M1.55 -6.5 L0.0 -6.6 -1.5 -6.5 M-1.5 -1.9 L-0.05 -2.15 1.55 -1.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite85`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#HealMaleBrute-${id}-sprite86`} />
          <use height="26.45" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#HealMaleBrute-${id}-sprite87`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite86`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#HealMaleBrute-${id}-shape24`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`HealMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#HealMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#HealMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite90`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`HealMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#HealMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#HealMaleBrute-${id}-sprite91`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#HealMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#HealMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`HealMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#HealMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#HealMaleBrute-${id}-sprite95`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`HealMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#HealMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`HealMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#HealMaleBrute-${id}-sprite97`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-sprite100`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`HealMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#HealMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`HealMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#HealMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`HealMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#HealMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`HealMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#HealMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`HealMaleBrute-${id}-sprite100`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#HealMaleBrute-${id}-shape25`} />
        </g>
        <g id={`HealMaleBrute-${id}-shape25`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
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

export default HealMaleBrute;