/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface BlockMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const BlockMaleBrute_WIDTH = 151.65;
export const BlockMaleBrute_HEIGHT = 127.5;
export const BlockMaleBrute_FRAMES = 23;
export const BlockMaleBrute_X_OFFSET = 62.25;
export const BlockMaleBrute_Y_OFFSET = 110.65;
export const BlockMaleBrute_MARGIN = 30;

const BlockMaleBrute = ({ id, inverted, sx, ...rest }: BlockMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: BlockMaleBrute_WIDTH,
      height: BlockMaleBrute_HEIGHT,
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
          ? -(BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN)
            * (BlockMaleBrute_FRAMES - 1)
            - BlockMaleBrute_MARGIN
          : 0,
        width: (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * BlockMaleBrute_FRAMES,
        animation: `BlockMaleBrute${inverted ? 'Inverted' : ''} 0.57s steps(${BlockMaleBrute_FRAMES}, jump-none) forwards, ${inverted ? 'inverted-' : ''}stagger 0.5s forwards`,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 0}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 1}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 21.6386, -48.1146)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3734, -0.1382, 0.1382, 0.3734, 2.001, -30.5324)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 3.0511, -41.762)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 15.5628, -47.0716)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3942, 0.0383, 0.024, 0.2467, 24.9444, -18.7675)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1026, 0.3818, 0.3818, 0.1026, 2.3746, -26.5284)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.333, -8.3565)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2046, -0.1975, 0.3277, 0.4619, -12.5663)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3981, 0.0195, 0.0195, 0.3981, 9.8444, -28.1518)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2721, -0.169, 0.1789, 0.99, -16.5039)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3605, -0.1685, -0.1829, 0.3538, 15.4311, -22.1261)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3466, -0.1989, -0.199, 0.3467, 20.4666, -28.1854)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.1216, -61.1773)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3978, -0.0108, -0.0108, 0.3978, -7.676, -32.0692)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1381, -0.3735, -0.3735, 0.1381, 3.7467, -28.6538)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1214, -0.3785, -0.3785, 0.1214, 9.7734, -28.2637)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3009, -0.2602, -0.2602, 0.3009, 11.1966, -32.3902)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 2}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 18.1288, -46.8953)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3016, -0.2587, 0.2587, 0.3016, -2.9251, -24.7962)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, -0.2434, -40.6074)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 12.2533, -45.7539)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3935, 0.0432, 0.027, 0.2462, 24.8097, -19.0094)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0329, 0.3937, 0.3937, 0.0329, 0.5346, -24.3951)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3372, -8.4082)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3407, -0.2012, -0.1738, 0.2943, -0.321, -11.2295)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3902, 0.0798, 0.0798, 0.3902, 6.7211, -28.0846)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.2692, -0.1523, 0.164, -0.1845, -15.0983)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3908, -0.0725, -0.0882, 0.3878, 12.5889, -24.1681)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3506, -0.2011, -0.2011, 0.3506, 17.4574, -27.0341)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 28.504, -60.325)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2281, 0.3244, 0.3244, 0.2281, -2.2619, -34.9265)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3924, -0.0676, -0.0676, 0.3924, 4.6392, -36.9516)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2062, -0.3388, -0.3388, 0.2062, 7.9081, -30.3976)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3828, 0.1064, 0.1064, 0.3829, 8.0218, -48.1623)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 3}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 13.6749, -45.4404)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1589, -0.3641, 0.3641, 0.1589, -6.966, -18.3399)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, -4.3919, -39.1061)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 8.0996, -44.2494)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3928, 0.0486, 0.0304, 0.2458, 24.6233, -19.0671)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0561, 0.3905, 0.3905, -0.0561, -1.7863, -21.3353)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.34, -8.4101)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3432, -0.1967, -0.1443, 0.2517, -1.459, -9.5229)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3672, 0.1543, 0.1543, 0.3672, 2.5468, -27.6712)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2922, -0.2664, -0.1318, 0.1446, -1.6635, -13.1289)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.055, 0.0379, 0.3952, 8.073, -26.63)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3561, -0.2041, -0.2041, 0.3561, 13.7731, -25.5295)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0527, -0.0527, 0.3323, 23.9959, -59.3291)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2369, 0.3178, 0.3178, -0.2369, 2.8884, -30.9546)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1602, 0.3645, 0.3645, 0.1602, -6.3924, -39.498)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2971, -0.2623, -0.2623, 0.2971, 4.6567, -33.4225)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0186, 0.3963, 0.3963, 0.0186, -10.1189, -44.6022)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 4}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 5}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 6}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 7}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 8}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 9}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 13.6649, -45.4225)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1586, -0.3638, 0.3638, 0.1586, -6.8981, -18.3474)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3891, 0.3891, -0.0793, -4.3866, -39.1517)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3544, 0.1771, 0.1771, 0.3544, 8.09, -44.2329)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0483, 0.0302, 0.2457, 24.6199, -19.0591)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0552, 0.3905, 0.3905, -0.0552, -1.7192, -21.3362)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3429, -8.4603)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1964, -0.144, 0.2513, -1.5192, -9.5777)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3667, 0.1541, 0.1541, 0.3667, 2.5409, -27.6586)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.266, -0.1316, 0.1443, -1.6705, -13.1333)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0539, 0.0367, 0.3952, 8.0851, -26.5955)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3556, -0.2038, -0.2038, 0.3556, 13.6988, -25.5832)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0526, -0.0526, 0.3321, 23.9811, -59.3725)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.236, 0.3176, 0.3176, -0.236, 2.9513, -30.9061)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1591, 0.3644, 0.3644, 0.1591, -6.4135, -39.4796)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2969, -0.2616, -0.2615, 0.2969, 4.5873, -33.483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0176, 0.3962, 0.3963, 0.0177, -10.1112, -44.5678)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 10}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 13.6749, -45.4404)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1589, -0.3641, 0.3641, 0.1589, -6.966, -18.3399)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, -4.3919, -39.1061)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 8.0996, -44.2494)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3928, 0.0486, 0.0304, 0.2458, 24.6233, -19.0671)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0561, 0.3905, 0.3905, -0.0561, -1.7863, -21.3353)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.34, -8.4101)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3432, -0.1967, -0.1443, 0.2517, -1.459, -9.5229)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3672, 0.1543, 0.1543, 0.3672, 2.5468, -27.6712)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2922, -0.2664, -0.1318, 0.1446, -1.6635, -13.1289)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.055, 0.0379, 0.3952, 8.073, -26.63)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3561, -0.2041, -0.2041, 0.3561, 13.7731, -25.5295)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0527, -0.0527, 0.3323, 23.9959, -59.3291)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2369, 0.3178, 0.3178, -0.2369, 2.8884, -30.9546)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1602, 0.3645, 0.3645, 0.1602, -6.3924, -39.498)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2971, -0.2623, -0.2623, 0.2971, 4.6567, -33.4225)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0186, 0.3963, 0.3963, 0.0186, -10.1189, -44.6022)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 11}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3545, 0.1771, 0.1771, 0.3545, 14.5678, -45.7267)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1914, -0.3477, 0.3477, 0.1914, -6.2148, -19.5337)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3892, 0.3892, -0.0793, -3.5381, -39.4531)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3545, 0.1771, 0.1771, 0.3545, 8.9428, -44.5368)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3929, 0.0468, 0.0293, 0.2458, 24.6814, -19.0637)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0365, 0.3929, 0.3929, -0.0365, -1.322, -22.0234)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.3418, -8.4596)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1967, -0.1496, 0.2606, -1.194, -9.8642)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3731, 0.1383, 0.1383, 0.3731, 3.4723, -27.8119)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.2663, -0.1357, 0.1486, -1.3091, -13.492)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3959, 0.0279, 0.0107, 0.3971, 9.1223, -26.0667)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3546, -0.2032, -0.2032, 0.3546, 14.4987, -25.8335)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0527, -0.0527, 0.3321, 24.9864, -59.5726)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.147, 0.3678, 0.3678, -0.147, 1.5598, -32.4905)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2533, 0.3064, 0.3064, 0.2533, -3.6873, -40.3928)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2794, -0.2804, -0.2803, 0.2794, 5.4155, -32.8304)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1195, 0.3781, 0.3781, 0.1195, -6.6956, -48.046)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 12}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3546, 0.1772, 0.1772, 0.3546, 15.4705, -46.0822)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2225, -0.3288, 0.3288, 0.2225, -5.5332, -20.8441)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3893, 0.3893, -0.0793, -2.6896, -39.7544)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3546, 0.1772, 0.1772, 0.3546, 9.8454, -44.9419)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3931, 0.0452, 0.0283, 0.246, 24.7424, -19.0184)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0191, 0.3943, 0.3943, -0.0191, -0.7972, -22.639)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.3406, -8.4096)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.342, -0.1981, -0.1559, 0.2691, -1.0278, -10.1752)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3779, 0.1248, 0.1248, 0.3779, 4.2766, -27.9404)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2908, -0.2675, -0.1401, 0.1523, -1.0575, -13.9371)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3972, 0.002, -0.014, 0.3971, 10.0912, -25.6691)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3536, -0.2027, -0.2027, 0.3536, 15.3005, -26.0831)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3322, -0.0527, -0.0527, 0.3322, 25.8908, -59.7737)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.0501, 0.3934, 0.3934, -0.0501, 0.4423, -33.643)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3253, 0.2286, 0.2286, 0.3253, -1.1012, -40.4432)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2629, -0.2962, -0.2962, 0.2629, 6.1006, -32.2079)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2105, 0.336, 0.336, 0.2105, -2.8315, -50.0238)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 13}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3548, 0.1772, 0.1772, 0.3548, 16.3729, -46.386)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2505, -0.3081, 0.3081, 0.2505, -4.7717, -22.025)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, -1.8909, -40.0554)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3548, 0.1772, 0.1772, 0.3548, 10.6477, -45.2454)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3932, 0.045, 0.0282, 0.246, 24.7453, -19.0118)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0018, 0.3949, 0.3949, -0.0018, -0.4225, -23.2903)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3392, -8.4092)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3414, -0.1995, -0.162, 0.2773, -0.7622, -10.535)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3826, 0.1099, 0.1099, 0.3826, 5.0521, -27.9363)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2908, -0.2677, -0.144, 0.1564, -0.7965, -14.3454)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3967, -0.0212, -0.0384, 0.3956, 11.0053, -25.2385)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3526, -0.2021, -0.2022, 0.3526, 16.0028, -26.4338)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3322, -0.0528, -0.0528, 0.3322, 26.7961, -59.9738)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.0467, 0.394, 0.394, 0.0467, -0.5674, -34.4736)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3737, 0.1366, 0.1366, 0.3737, 1.2249, -39.8689)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2445, -0.3118, -0.3118, 0.2445, 6.7427, -31.5547)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2859, 0.2749, 0.2749, 0.2859, 1.054, -50.5977)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 14}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 17.1751, -46.5912)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2765, -0.2852, 0.2852, 0.2765, -3.9612, -23.352)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, -1.0921, -40.3564)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 11.4498, -45.5502)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3934, 0.0435, 0.0272, 0.2462, 24.7563, -18.9673)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0141, 0.3948, 0.3948, 0.0141, 0.0276, -23.773)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3383, -8.4088)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3414, -0.1998, -0.1672, 0.2857, -0.6382, -10.8182)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3866, 0.0951, 0.0951, 0.3866, 5.9632, -28.0702)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.2689, -0.1482, 0.1598, -0.5459, -14.6399)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3948, -0.0454, -0.0625, 0.3927, 11.869, -24.7586)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3516, -0.2016, -0.2016, 0.3516, 16.6565, -26.6838)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 27.5987, -60.1248)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.1378, 0.3719, 0.3719, 0.1378, -1.2654, -34.8913)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3962, 0.04, 0.04, 0.3962, 3.1406, -38.6846)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2265, -0.3253, -0.3253, 0.2265, 7.3496, -30.9483)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3427, 0.2003, 0.2003, 0.3427, 4.6417, -50.0541)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 15}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 17.9778, -46.8946)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2993, -0.2614, 0.2614, 0.2993, -3.0297, -24.6217)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, -0.3434, -40.6574)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 12.1524, -45.7533)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3935, 0.0432, 0.027, 0.2462, 24.7588, -18.8603)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0311, 0.3938, 0.3938, 0.0311, 0.4506, -24.244)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3369, -8.4085)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3407, -0.2012, -0.1732, 0.2933, -0.4241, -11.1755)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3898, 0.0815, 0.0815, 0.3898, 6.6824, -28.1669)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.2692, -0.1518, 0.1635, -0.1855, -14.9477)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3914, -0.0693, -0.0862, 0.3883, 12.5839, -24.2236)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3507, -0.2011, -0.2012, 0.3507, 17.4126, -27.0346)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 28.4531, -60.3258)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2194, 0.3304, 0.3304, 0.2194, -2.1179, -34.9776)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3943, -0.0557, -0.0557, 0.3943, 4.437, -37.1781)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2079, -0.3378, -0.3378, 0.2078, 7.9214, -30.454)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3798, 0.1165, 0.1165, 0.3798, 7.7473, -48.3473)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 16}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 18.7802, -47.0985)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3191, -0.237, 0.237, 0.3191, -2.1386, -25.8696)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 0.4054, -40.9084)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 12.9047, -46.0568)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3937, 0.0417, 0.0261, 0.2464, 24.8197, -18.8167)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0467, 0.3924, 0.3924, 0.0467, 0.8467, -24.8013)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3367, -8.3576)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3407, -0.2015, -0.178, 0.3011, -0.2515, -11.5061)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3925, 0.0679, 0.0679, 0.3925, 7.3892, -28.1549)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2704, -0.1559, 0.1666, 0.0146, -15.2914)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3869, -0.0914, -0.1082, 0.3829, 13.2952, -23.7798)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3498, -0.2007, -0.2007, 0.3498, 18.0198, -27.2843)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0529, -0.0529, 0.3323, 29.2575, -60.5251)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2872, 0.2738, 0.2738, 0.2872, -2.9123, -34.7283)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3702, -0.1462, -0.1462, 0.3702, 5.2907, -35.373)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1898, -0.3484, -0.3484, 0.1899, 8.3191, -29.96)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3966, 0.0299, 0.0299, 0.3966, 10.1171, -45.7765)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 17}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 19.5322, -47.4028)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.336, -0.2126, 0.2126, 0.336, -0.999, -27.134)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 1.1038, -41.1591)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 13.6067, -46.3609)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3938, 0.0415, 0.026, 0.2464, 24.822, -18.8101)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.062, 0.3903, 0.3903, 0.062, 1.2904, -25.2967)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3355, -8.3575)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3401, -0.2028, -0.1837, 0.3079, -0.0388, -11.7108)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3945, 0.0556, 0.0556, 0.3945, 8.0064, -28.2115)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2706, -0.1592, 0.1701, 0.2739, -15.5985)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3813, -0.1131, -0.1283, 0.3767, 13.8998, -23.3423)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.349, -0.2002, -0.2002, 0.349, 18.6787, -27.5344)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 30.011, -60.677)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3383, 0.2077, 0.2077, 0.3383, -3.9635, -34.2669)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3284, -0.2246, -0.2246, 0.3284, 5.5874, -33.5334)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1727, -0.3575, -0.3574, 0.1727, 8.8003, -29.4664)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3944, -0.0522, -0.0522, 0.3944, 11.5638, -42.8037)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 18}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 20.2348, -47.6075)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.351, -0.1872, 0.1872, 0.351, -0.0274, -28.3523)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 1.7534, -41.3603)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 14.2591, -46.5652)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.394, 0.04, 0.025, 0.2465, 24.8316, -18.7665)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0758, 0.3879, 0.3879, 0.0758, 1.6058, -25.6829)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3344, -8.3574)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3401, -0.203, -0.1881, 0.3151, 0.1318, -11.9892)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3961, 0.0435, 0.0435, 0.3961, 8.7131, -28.162)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2708, -0.1625, 0.1734, 0.5831, -15.9552)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3749, -0.1329, -0.1479, 0.3696, 14.4265, -22.8005)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3482, -0.1998, -0.1998, 0.3482, 19.3394, -27.7842)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 30.7646, -60.8253)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3738, 0.1346, 0.1346, 0.3738, -5.0162, -33.6314)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2721, -0.2904, -0.2904, 0.2721, 5.3284, -31.7207)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1541, -0.366, -0.366, 0.1541, 9.1933, -28.9528)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3755, -0.1313, -0.1313, 0.3755, 12.1346, -39.3433)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 19}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 20.9367, -47.861)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3633, -0.1623, 0.1623, 0.3633, 0.9767, -29.4708)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 2.4021, -41.5607)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 14.9109, -46.8184)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.394, 0.0398, 0.0249, 0.2466, 24.7844, -18.7608)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0893, 0.3851, 0.3851, 0.0893, 2.017, -26.1098)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3335, -8.3571)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2044, -0.1935, 0.3212, 0.293, -12.241)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3973, 0.0314, 0.0314, 0.3973, 9.2586, -28.2093)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2719, -0.1661, 0.176, 0.6819, -16.1478)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3681, -0.151, -0.1669, 0.3615, 14.8828, -22.4026)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3474, -0.1994, -0.1994, 0.3474, 19.9019, -27.9846)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 31.4681, -61.0772)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.393, 0.0606, 0.0606, 0.393, -6.308, -32.9123)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2071, -0.3399, -0.3399, 0.2071, 4.732, -30.0554)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1378, -0.3727, -0.3727, 0.1378, 9.4919, -28.5253)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3433, -0.2008, -0.2008, 0.3434, 12.0096, -35.8504)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 20}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 21.5891, -48.0649)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3734, -0.1382, 0.1382, 0.3734, 2.0505, -30.5826)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 3.001, -41.8114)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 15.5132, -47.072)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3942, 0.0383, 0.024, 0.2467, 24.8939, -18.6675)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1026, 0.3818, 0.3818, 0.1026, 2.2743, -26.5284)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3324, -8.3565)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2046, -0.1975, 0.3277, 0.4118, -12.5162)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3981, 0.0195, 0.0195, 0.3981, 9.8941, -28.1521)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2721, -0.169, 0.1789, 0.9404, -16.4539)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3605, -0.1685, -0.1829, 0.3538, 15.3309, -22.0758)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3466, -0.199, -0.199, 0.3467, 20.4166, -28.1848)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.0529, -0.0529, 0.3325, 32.1707, -61.2282)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3978, -0.0108, -0.0108, 0.3978, -7.6761, -32.1194)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1381, -0.3735, -0.3735, 0.1381, 3.747, -28.704)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1214, -0.3785, -0.3786, 0.1214, 9.7237, -28.214)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3009, -0.2602, -0.2602, 0.3009, 11.0969, -32.3402)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 21}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 22.1903, -48.2672)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3813, -0.115, 0.115, 0.3813, 3.1338, -31.6317)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 3.5503, -42.0124)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 16.0645, -47.2741)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.0381, 0.0239, 0.2467, 24.8457, -18.6622)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1143, 0.3786, 0.3786, 0.1143, 2.6529, -26.843)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3316, -8.3561)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2048, -0.2014, 0.3337, 0.6295, -12.7899)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3986, 0.009, 0.009, 0.3986, 10.3436, -28.1703)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2723, -0.1718, 0.1817, 1.148, -16.7096)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3529, -0.1842, -0.1983, 0.3455, 15.7196, -21.7475)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.346, -0.1986, -0.1986, 0.346, 20.9833, -28.3854)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.7743, -61.3283)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3898, -0.0796, -0.0796, 0.3898, -9.146, -31.3597)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0677, -0.3927, -0.3927, 0.0677, 2.5504, -27.4774)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.105, -0.3836, -0.3836, 0.105, 10.0379, -27.8692)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2522, -0.3078, -0.3078, 0.2522, 9.6626, -29.1786)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${BlockMaleBrute_X_OFFSET + (BlockMaleBrute_WIDTH + BlockMaleBrute_MARGIN) * 22}, ${BlockMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#BlockMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#BlockMaleBrute-${id}-sprite95`} />
      </g>
      <defs>
        <g id={`BlockMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#BlockMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#BlockMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#BlockMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#BlockMaleBrute-${id}-shape0`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`BlockMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-shape1`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#BlockMaleBrute-${id}-sprite6`} />
          <clipPath id={`BlockMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`BlockMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#BlockMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#BlockMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#BlockMaleBrute-${id}-shape2`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#BlockMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#BlockMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#BlockMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#BlockMaleBrute-${id}-shape4`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#BlockMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#BlockMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#BlockMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#BlockMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#BlockMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#BlockMaleBrute-${id}-shape5`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`BlockMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`BlockMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#BlockMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#BlockMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#BlockMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#BlockMaleBrute-${id}-shape6`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#BlockMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#BlockMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`BlockMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#BlockMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#BlockMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#BlockMaleBrute-${id}-shape7`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`BlockMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#BlockMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`BlockMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#BlockMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#BlockMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`BlockMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#BlockMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#BlockMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#BlockMaleBrute-${id}-shape7`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#BlockMaleBrute-${id}-shape8`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#BlockMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`BlockMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#BlockMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#BlockMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#BlockMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#BlockMaleBrute-${id}-shape9`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#BlockMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#BlockMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`BlockMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#BlockMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#BlockMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#BlockMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`BlockMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#BlockMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`BlockMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#BlockMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`BlockMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#BlockMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-shape10`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#BlockMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`BlockMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#BlockMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#BlockMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`BlockMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#BlockMaleBrute-${id}-sprite55`} />
          <use height="45.0" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#BlockMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#BlockMaleBrute-${id}-shape11`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#BlockMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#BlockMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#BlockMaleBrute-${id}-sprite60`} />
          <use height="44.25" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#BlockMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#BlockMaleBrute-${id}-shape12`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#BlockMaleBrute-${id}-sprite62`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#BlockMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#BlockMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`BlockMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#BlockMaleBrute-${id}-sprite66`} />
          <use height="35.0" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#BlockMaleBrute-${id}-sprite67`} />
          <use height="41.1" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#BlockMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#BlockMaleBrute-${id}-shape13`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#BlockMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#BlockMaleBrute-${id}-shape14`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`BlockMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#BlockMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`BlockMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#BlockMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#BlockMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`BlockMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#BlockMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#BlockMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`BlockMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#BlockMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`BlockMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#BlockMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`BlockMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#BlockMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#BlockMaleBrute-${id}-shape15`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`BlockMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#BlockMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#BlockMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#BlockMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#BlockMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#BlockMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`BlockMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#BlockMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#BlockMaleBrute-${id}-shape17`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#BlockMaleBrute-${id}-shape18`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#BlockMaleBrute-${id}-shape20`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`BlockMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#BlockMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#BlockMaleBrute-${id}-shape21`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#BlockMaleBrute-${id}-shape22`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#BlockMaleBrute-${id}-sprite85`} />
          <use height="26.45" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#BlockMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#BlockMaleBrute-${id}-shape23`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#BlockMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#BlockMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#BlockMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#BlockMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#BlockMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#BlockMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#BlockMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#BlockMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`BlockMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#BlockMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`BlockMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#BlockMaleBrute-${id}-sprite96`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`BlockMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#BlockMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`BlockMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#BlockMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`BlockMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#BlockMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`BlockMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#BlockMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`BlockMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#BlockMaleBrute-${id}-shape24`} />
        </g>
        <g id={`BlockMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
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

export default BlockMaleBrute;