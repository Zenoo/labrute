import { Box, BoxProps, GlobalStyles } from '@mui/material';
import React from 'react';

export interface IddleMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

const WIDTH = 151.5;
const HEIGHT = 85.45;
const FRAMES = 39;
const X_OFFSET = 37.25;
const Y_OFFSET = 68.8;
const MARGIN = 30;

const IddleMaleBrute = ({ id, inverted, sx, ...rest }: IddleMaleBruteProps) => (
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
      '@keyframes IddleMaleBrute': {
        '100%': {
          left: inverted
            ? -MARGIN
            : -(WIDTH + MARGIN) * (FRAMES - 1) - (inverted ? MARGIN : 0),
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
        left: inverted
          ? -(WIDTH + MARGIN) * (FRAMES - 1) - (inverted ? MARGIN : 0)
          : 0,
        width: (WIDTH + MARGIN) * FRAMES,
        animation: `IddleMaleBrute 0.97s steps(${FRAMES}, jump-none) infinite`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 0}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 1}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.8922, -48.5208)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 4.1643, -32.5658)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.149, -42.2128)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6163, -47.4774)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.038, 0.0238, 0.2467, 24.8975, -18.7578)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1258, 0.375, 0.375, 0.1258, 3.077, -27.2009)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.738, -12.9877)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.3456, -16.9515)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 16.055, -21.3662)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3454, -0.1983, -0.1983, 0.3454, 21.5041, -28.6352)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.3269, -61.4793)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3718, -0.1414, -0.1414, 0.3718, -10.7451, -30.5604)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.1005, -26.617)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0899, -0.3875, -0.3876, 0.0899, 10.2577, -27.4246)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1982, -0.3453, -0.3453, 0.1982, 7.6026, -26.222)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 2}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.8918, -48.5204)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 4.1645, -32.5663)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1493, -42.213)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6158, -47.477)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.038, 0.0238, 0.2467, 24.8966, -18.7588)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1258, 0.3749, 0.3749, 0.1258, 3.0785, -27.2005)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7375, -12.9882)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.1751, 0.1839, 1.3458, -16.9524)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 16.0539, -21.3663)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3455, -0.1983, -0.1983, 0.3455, 21.5102, -28.6353)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.3269, -61.4793)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3717, -0.1414, -0.1414, 0.3717, -10.7456, -30.5595)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-2.0E-4, -0.3987, -0.3987, 2.0E-4, 1.1026, -26.6196)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0913, -0.3872, -0.3872, 0.0913, 10.2789, -27.4601)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1981, -0.3453, -0.3453, 0.1982, 7.5999, -26.2192)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 3}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 22.8915, -48.5188)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 4.1652, -32.5666)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1496, -42.2127)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 16.6155, -47.4755)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.0381, 0.0238, 0.2467, 24.8964, -18.7604)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1259, 0.3748, 0.3748, 0.1259, 3.0804, -27.1992)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3319, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.206, -0.206, 0.3387, 0.737, -12.9893)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2724, -0.1746, 0.1847, 1.3561, -17.0672)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3366, 16.0532, -21.3664)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3457, -0.1984, -0.1984, 0.3457, 21.5198, -28.6853)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.2743, -61.5283)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3712, -0.1427, -0.1427, 0.3712, -10.7483, -30.5883)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-4.0E-4, -0.3987, -0.3987, 4.0E-4, 1.1073, -26.6233)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0915, -0.3871, -0.3871, 0.0915, 10.2811, -27.4655)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.198, -0.3453, -0.3453, 0.198, 7.5964, -26.2156)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 4}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 22.8403, -48.5672)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 4.1156, -32.5159)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1501, -42.1627)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 16.6145, -47.4741)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.0381, 0.0239, 0.2467, 24.8962, -18.7622)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1273, 0.3743, 0.3743, 0.1273, 3.0572, -27.1925)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3319, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2048, -0.2048, 0.3394, 0.7453, -12.9661)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2723, -0.1748, 0.185, 1.4067, -17.1188)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1982, -0.2131, 0.3366, 16.0519, -21.3665)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.346, -0.1986, -0.1986, 0.346, 21.5336, -28.6354)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.2734, -61.5274)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3711, -0.1428, -0.1428, 0.3711, -10.7492, -30.5863)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.002, -0.3987, -0.3987, 0.002, 1.0902, -26.6499)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.093, -0.3867, -0.3867, 0.093, 10.3529, -27.6054)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1979, -0.3453, -0.3454, 0.1979, 7.5409, -26.1103)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 5}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 22.7897, -48.5661)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 4.1168, -32.566)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1506, -42.212)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.6138, -47.473)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.0382, 0.0239, 0.2467, 24.945, -18.7653)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1275, 0.3742, 0.3742, 0.1275, 3.1108, -27.1909)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3327, -8.3562)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2047, -0.2047, 0.3394, 0.7448, -12.9685)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2722, -0.1751, 0.1853, 1.4073, -17.0712)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1981, -0.213, 0.3365, 16.1002, -21.4172)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3464, -0.1988, -0.1988, 0.3464, 21.6027, -28.735)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 33.2225, -61.5782)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.371, -0.1429, -0.1429, 0.371, -10.7003, -30.5342)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0037, -0.3986, -0.3986, 0.0037, 1.1247, -26.6777)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0933, -0.3866, -0.3866, 0.0933, 10.3567, -27.6149)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1966, -0.346, -0.346, 0.1966, 7.5572, -26.0361)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 6}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 22.7379, -48.5634)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 4.0684, -32.5654)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1514, -42.2117)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.6622, -47.5206)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3942, 0.0384, 0.024, 0.2466, 24.9433, -18.7688)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1289, 0.3737, 0.3737, 0.1289, 3.1392, -27.2335)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.333, -8.3565)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2046, -0.2046, 0.3394, 0.7442, -12.9709)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2721, -0.1754, 0.1857, 1.4085, -17.1239)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1981, -0.213, 0.3365, 16.0989, -21.4177)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3468, -0.199, -0.1991, 0.3468, 21.5741, -28.685)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 33.2181, -61.6272)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3704, -0.1443, -0.1443, 0.3704, -10.6537, -30.5113)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0055, -0.3986, -0.3986, 0.0055, 1.1609, -26.7078)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0949, -0.3861, -0.3861, 0.0949, 10.3311, -27.7092)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1963, -0.346, -0.346, 0.1964, 7.597, -25.9277)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 7}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 22.7367, -48.611)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.093, 0.093, 0.3873, 4.0196, -32.5655)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1018, -42.261)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.6609, -47.5184)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.394, 0.0398, 0.0249, 0.2466, 24.8844, -18.8108)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1292, 0.3735, 0.3735, 0.1292, 3.1444, -27.2812)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3338, -8.3568)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3394, -0.2044, -0.2044, 0.3394, 0.7934, -12.9742)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2881, -0.2719, -0.1758, 0.1862, 1.4598, -17.1271)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3451, -0.198, -0.213, 0.3364, 16.1459, -21.4689)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3474, -0.1993, -0.1993, 0.3474, 21.5504, -28.6846)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.0529, -0.0529, 0.3325, 33.168, -61.679)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3702, -0.1445, -0.1445, 0.3702, -10.7055, -30.458)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0087, -0.3985, -0.3985, 0.0087, 1.1753, -26.7609)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0979, -0.3852, -0.3852, 0.0979, 10.3251, -27.8393)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1949, -0.3467, -0.3467, 0.1949, 7.6098, -25.851)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 8}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 22.6853, -48.5579)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 4.0219, -32.6153)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1028, -42.3104)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 16.6596, -47.4655)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.394, 0.0399, 0.025, 0.2465, 24.8826, -18.8151)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1307, 0.3729, 0.3729, 0.1307, 3.1746, -27.2728)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3344, -8.3569)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3401, -0.2031, -0.2031, 0.3401, 0.7007, -13.0029)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.267)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2708, -0.1756, 0.1874, 1.5205, -17.1446)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.345, -0.198, -0.2129, 0.3363, 16.1925, -21.4697)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.348, -0.1997, -0.1997, 0.348, 21.631, -28.7348)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 33.1146, -61.7771)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3695, -0.1459, -0.1459, 0.3695, -10.7094, -30.4342)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0107, -0.3984, -0.3984, 0.0107, 1.2144, -26.6944)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0997, -0.3846, -0.3846, 0.0997, 10.3498, -27.8378)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1946, -0.3467, -0.3468, 0.1946, 7.5482, -25.8393)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 9}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 22.6334, -48.6043)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 3.9735, -32.6646)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 4.1036, -42.3094)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 16.6577, -47.4622)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3938, 0.0414, 0.0259, 0.2464, 24.8722, -18.8579)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1322, 0.3722, 0.3722, 0.1322, 3.205, -27.2642)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3353, -8.3572)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3401, -0.2029, -0.2029, 0.3401, 0.6998, -13.0071)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.267)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2706, -0.1761, 0.1881, 1.5721, -17.1988)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3449, -0.1979, -0.2128, 0.3363, 16.1899, -21.4707)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3487, -0.2001, -0.2001, 0.3487, 21.7152, -28.734)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 33.0119, -61.8761)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3693, -0.1461, -0.1461, 0.3693, -10.7119, -30.38)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.014, -0.3982, -0.3982, 0.014, 1.2311, -26.8017)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1016, -0.384, -0.384, 0.1016, 10.3255, -27.939)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1932, -0.3474, -0.3474, 0.1932, 7.5571, -25.7093)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 10}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 22.5811, -48.6013)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 3.9258, -32.6644)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 4.1048, -42.3084)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 16.6056, -47.5095)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3937, 0.0416, 0.026, 0.2464, 24.8703, -18.914)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1338, 0.3716, 0.3716, 0.1338, 3.1365, -27.3048)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3358, -8.3578)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3407, -0.2015, -0.2015, 0.3407, 0.7065, -13.037)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.267)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2704, -0.1767, 0.1888, 1.5739, -17.2034)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3448, -0.1978, -0.2128, 0.3362, 16.2363, -21.5225)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3495, -0.2005, -0.2005, 0.3495, 21.7525, -28.7841)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0529, -0.0529, 0.3323, 32.9575, -61.9251)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3686, -0.1475, -0.1475, 0.3686, -10.7663, -30.2555)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0174, -0.398, -0.398, 0.0174, 1.3487, -26.8604)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1047, -0.383, -0.383, 0.1047, 10.3701, -28.1252)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1916, -0.3481, -0.3481, 0.1916, 7.4645, -25.5284)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 11}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 22.5287, -48.6474)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 3.8781, -32.7141)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 4.1061, -42.358)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 16.6033, -47.5059)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3937, 0.0418, 0.0262, 0.2463, 24.8676, -18.9198)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1354, 0.3708, 0.3708, 0.1354, 3.1683, -27.3452)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.337, -8.3579)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3407, -0.2013, -0.2013, 0.3407, 0.7553, -13.0918)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.317)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.2693, -0.1767, 0.1902, 1.5848, -17.3722)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3448, -0.1977, -0.2127, 0.3361, 16.2327, -21.5241)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3503, -0.2009, -0.2009, 0.3503, 21.7926, -28.7341)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 32.9048, -62.0759)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3678, -0.149, -0.149, 0.3678, -10.7713, -30.2804)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0209, -0.3978, -0.3978, 0.0209, 1.3169, -26.9209)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1079, -0.382, -0.382, 0.1079, 10.4144, -28.2635)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1901, -0.3488, -0.3488, 0.1901, 7.4196, -25.447)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 12}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 22.4762, -48.6927)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3869, -0.093, 0.093, 0.3869, 3.8307, -32.7131)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 4.1574, -42.357)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 16.6509, -47.5016)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3935, 0.0433, 0.0271, 0.2462, 24.7575, -19.0138)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1371, 0.3701, 0.3701, 0.1371, 3.2506, -27.3857)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3381, -8.4085)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3414, -0.1999, -0.1999, 0.3414, 0.7623, -13.072)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.317)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.269, -0.1772, 0.191, 1.5369, -17.4275)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3447, -0.1977, -0.2126, 0.336, 16.2784, -21.5752)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3512, -0.2014, -0.2014, 0.3512, 21.8854, -28.7838)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 32.8513, -62.1758)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3671, -0.1504, -0.1504, 0.3671, -10.7766, -30.2052)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0245, -0.3976, -0.3976, 0.0245, 1.3358, -26.9831)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1111, -0.3809, -0.3808, 0.1111, 10.4081, -28.4031)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1885, -0.3494, -0.3494, 0.1885, 7.4239, -25.314)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 13}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3548, 0.1773, 0.1773, 0.3548, 22.4243, -48.6392)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3869, -0.093, 0.093, 0.3869, 3.733, -32.7628)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, 4.1583, -42.4057)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3548, 0.1773, 0.1773, 0.3548, 16.649, -47.4984)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3932, 0.0449, 0.0281, 0.2461, 24.7466, -19.0583)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1387, 0.3694, 0.3694, 0.1387, 3.2831, -27.3752)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.3392, -8.4086)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3414, -0.1997, -0.1997, 0.3414, 0.7611, -13.0771)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.367)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2899, -0.2688, -0.1779, 0.1918, 1.6388, -17.3328)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3446, -0.1976, -0.2125, 0.3358, 16.275, -21.6765)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3521, -0.2019, -0.2019, 0.3521, 22.0294, -28.8335)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 32.8478, -62.2757)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3668, -0.1507, -0.1507, 0.3668, -10.7797, -30.1498)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.028, -0.3972, -0.3972, 0.028, 1.4043, -27.0465)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1131, -0.3801, -0.3801, 0.1131, 10.4341, -28.4598)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1869, -0.3501, -0.3501, 0.1869, 7.4276, -25.0824)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 14}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3547, 0.1772, 0.1772, 0.3547, 22.3713, -48.6842)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3868, -0.093, 0.093, 0.3868, 3.686, -32.7628)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3893, 0.3893, -0.0793, 4.1596, -42.4047)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3547, 0.1772, 0.1772, 0.3547, 16.6461, -47.5937)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3932, 0.0451, 0.0282, 0.246, 24.7446, -19.0649)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1415, 0.3682, 0.3682, 0.1415, 3.3393, -27.3589)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.3398, -8.4092)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3421, -0.1983, -0.1983, 0.3421, 0.7676, -13.1079)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.367)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2908, -0.2676, -0.1779, 0.1933, 1.6502, -17.4523)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3445, -0.1975, -0.2124, 0.3357, 16.2713, -21.6276)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.353, -0.2024, -0.2024, 0.353, 22.0242, -28.8338)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3322, -0.0527, -0.0527, 0.3322, 32.7943, -62.4238)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.366, -0.1522, -0.1522, 0.366, -10.7848, -30.1744)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0316, -0.3969, -0.3969, 0.0316, 1.4229, -27.0604)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1163, -0.3789, -0.3789, 0.1163, 10.4272, -28.6013)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1853, -0.3507, -0.3507, 0.1853, 7.2802, -25.0002)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 15}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3546, 0.1772, 0.1772, 0.3546, 22.3692, -48.8298)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3867, -0.0929, 0.0929, 0.3867, 3.6383, -32.8126)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3893, 0.3893, -0.0793, 4.1608, -42.4537)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3546, 0.1772, 0.1772, 0.3546, 16.6442, -47.5897)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3929, 0.0466, 0.0292, 0.2459, 24.7332, -19.0094)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1432, 0.3674, 0.3674, 0.1432, 3.4218, -27.4482)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.3409, -8.4593)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.342, -0.198, -0.198, 0.342, 0.666, -13.0632)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.417)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2908, -0.2674, -0.1785, 0.1942, 1.7022, -17.5077)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3444, -0.1974, -0.2124, 0.3356, 16.3167, -21.6797)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3539, -0.2029, -0.2029, 0.354, 22.1675, -28.8833)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3322, -0.0527, -0.0527, 0.3322, 32.689, -62.5736)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3652, -0.1537, -0.1537, 0.3652, -10.7903, -30.0491)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0364, -0.3964, -0.3964, 0.0364, 1.515, -27.1487)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1196, -0.3778, -0.3777, 0.1196, 10.4693, -28.8425)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1837, -0.3513, -0.3514, 0.1837, 7.3833, -24.9181)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 16}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3545, 0.1771, 0.1771, 0.3545, 22.3167, -48.8251)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3867, -0.0929, 0.0929, 0.3867, 3.5906, -32.8123)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3892, 0.3892, -0.0793, 4.1119, -42.4531)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3545, 0.1771, 0.1771, 0.3545, 16.6417, -47.6354)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3929, 0.0468, 0.0293, 0.2458, 24.6812, -19.0159)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1448, 0.3667, 0.3667, 0.1448, 3.4037, -27.438)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.342, -8.4599)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1966, -0.1966, 0.3427, 0.6727, -13.0934)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.467)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.2662, -0.1785, 0.1956, 1.7129, -17.5766)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3443, -0.1973, -0.2123, 0.3355, 16.3133, -21.6811)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3548, -0.2034, -0.2034, 0.3548, 22.1597, -28.933)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3321, -0.0527, -0.0527, 0.3321, 32.6364, -62.6226)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3644, -0.1551, -0.1551, 0.3644, -10.796, -29.9738)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0399, -0.396, -0.396, 0.0399, 1.5311, -27.2132)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1227, -0.3766, -0.3766, 0.1228, 10.4604, -28.9333)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1833, -0.3514, -0.3514, 0.1833, 7.3153, -24.7516)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 17}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 22.2249, -48.8404)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3869, -0.093, 0.093, 0.3869, 3.532, -32.8632)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, 4.1581, -42.5061)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 16.6496, -47.6494)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3928, 0.0486, 0.0304, 0.2458, 24.6233, -19.0671)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1467, 0.3663, 0.3663, 0.1467, 3.4409, -27.4843)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.34, -8.4101)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3432, -0.1967, -0.1967, 0.3432, 0.6821, -13.0937)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.467)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2922, -0.2664, -0.1793, 0.1967, 1.7719, -17.5274)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3446, -0.1976, -0.2125, 0.3359, 16.3771, -21.7277)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3561, -0.2041, -0.2041, 0.3561, 22.3231, -28.9295)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0527, -0.0527, 0.3323, 32.5459, -62.7291)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.364, -0.1568, -0.1568, 0.364, -10.7943, -29.9476)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0435, -0.3958, -0.3958, 0.0435, 1.5508, -27.2764)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1262, -0.3757, -0.3757, 0.1262, 10.513, -29.0726)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.182, -0.3525, -0.3525, 0.182, 7.2978, -24.6612)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 18}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3547, 0.1772, 0.1772, 0.3547, 22.1711, -48.8834)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3868, -0.093, 0.093, 0.3868, 3.486, -32.8628)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3893, 0.3893, -0.0793, 4.1596, -42.5047)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3547, 0.1772, 0.1772, 0.3547, 16.646, -47.743)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3927, 0.0486, 0.0304, 0.2457, 24.5713, -19.0683)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1481, 0.3655, 0.3655, 0.1481, 3.469, -27.5733)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.34, -8.4095)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.343, -0.1965, -0.1965, 0.343, 0.6789, -13.098)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.467)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2921, -0.2661, -0.1797, 0.1973, 1.8217, -17.5322)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3444, -0.1975, -0.2124, 0.3357, 16.3198, -21.7284)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3567, -0.2045, -0.2045, 0.3567, 22.3527, -28.9288)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3322, -0.0527, -0.0527, 0.3322, 32.4925, -62.7737)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3632, -0.1582, -0.1582, 0.3632, -10.8007, -29.8233)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0469, -0.3953, -0.3953, 0.0469, 1.6128, -27.3398)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1278, -0.3751, -0.3751, 0.1278, 10.5355, -29.1685)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1805, -0.353, -0.353, 0.1805, 7.2985, -24.5386)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 19}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1774, 0.1774, 0.3549, 22.1268, -48.8439)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 3.4804, -32.9138)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 4.1571, -42.5567)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1774, 0.1774, 0.3549, 16.6515, -47.7027)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3926, 0.0502, 0.0314, 0.2457, 24.5639, -19.1143)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1498, 0.3651, 0.3651, 0.1498, 3.4524, -27.5694)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3375, -8.4085)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.344, -0.1954, -0.1954, 0.344, 0.643, -13.0732)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.517)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2933, -0.2653, -0.1797, 0.1987, 1.7871, -17.5966)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3447, -0.1977, -0.2126, 0.336, 16.3794, -21.6752)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3577, -0.2051, -0.2051, 0.3577, 22.4005, -28.9246)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 32.4513, -62.8758)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3633, -0.1586, -0.1586, 0.3633, -10.7979, -29.8177)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0503, -0.3949, -0.3949, 0.0503, 1.6277, -27.4519)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1309, -0.3744, -0.3744, 0.1309, 10.5349, -29.1986)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1804, -0.3533, -0.3533, 0.1804, 7.3069, -24.4216)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 20}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1774, 0.1774, 0.3552, 22.0821, -48.852)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 3.4251, -32.914)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3896, 0.3896, -0.0793, 4.1046, -42.5593)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1774, 0.1774, 0.3552, 16.6065, -47.7601)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3925, 0.0517, 0.0324, 0.2456, 24.4556, -19.1091)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1514, 0.3647, 0.3647, 0.1514, 3.4842, -27.6145)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3358, -8.3578)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3443, -0.1955, -0.1955, 0.3443, 0.6487, -13.1233)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.517)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2936, -0.2655, -0.1803, 0.1994, 1.7427, -17.6471)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3449, -0.1978, -0.2128, 0.3362, 16.4375, -21.7724)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3585, -0.2057, -0.2057, 0.3585, 22.4937, -28.9706)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 32.4092, -62.9269)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3628, -0.1601, -0.1601, 0.3628, -10.7982, -29.7927)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0523, -0.3948, -0.3948, 0.0523, 1.6667, -27.3882)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1328, -0.374, -0.374, 0.1327, 10.5159, -29.343)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1792, -0.3542, -0.3542, 0.1792, 7.2848, -24.2912)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 21}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 22.036, -48.8599)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 3.4207, -32.9651)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1021, -42.6607)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.6103, -47.8173)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3925, 0.0519, 0.0325, 0.2456, 24.4568, -19.1155)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.153, 0.3642, 0.3642, 0.153, 3.5652, -27.6594)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3344, -8.3569)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3445, -0.1955, -0.1955, 0.3445, 0.6036, -13.1231)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.567)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2939, -0.2655, -0.1808, 0.2001, 1.7476, -17.5978)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3451, -0.198, -0.2129, 0.3364, 16.4447, -21.7694)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3592, -0.2061, -0.2061, 0.3592, 22.529, -29.0175)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 32.3172, -63.0263)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3623, -0.1616, -0.1616, 0.3623, -10.7487, -29.7683)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0555, -0.3944, -0.3944, 0.0555, 1.6762, -27.4976)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1345, -0.3737, -0.3737, 0.1345, 10.4944, -29.3857)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1791, -0.3545, -0.3545, 0.1791, 7.3405, -24.228)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 22}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 22.0897, -48.8161)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 3.3673, -33.0158)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1003, -42.6624)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.6138, -47.873)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3926, 0.0521, 0.0326, 0.2456, 24.3568, -19.1205)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1534, 0.3642, 0.3642, 0.1534, 3.5711, -27.711)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3322, -8.3562)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3447, -0.1956, -0.1956, 0.3447, 0.6079, -13.1735)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.567)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2941, -0.2656, -0.1812, 0.2006, 1.8014, -17.5981)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1981, -0.213, 0.3366, 16.4507, -21.7674)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3598, -0.2065, -0.2065, 0.3598, 22.5585, -29.0151)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.3225, -63.0282)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3624, -0.1618, -0.1618, 0.3624, -10.7471, -29.7151)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0573, -0.3942, -0.3942, 0.0573, 1.7104, -27.5303)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1361, -0.3733, -0.3733, 0.1361, 10.5707, -29.4778)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1791, -0.3547, -0.3547, 0.1791, 7.2952, -24.2183)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 23}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.0553, -48.8865)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 3.3538, -32.9698)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.6151)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.8917)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3925, 0.0538, 0.0337, 0.2456, 24.4016, -19.221)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1552, 0.3641, 0.3641, 0.1552, 3.6057, -27.7619)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3454, -0.1959, -0.1959, 0.3454, 0.6217, -13.2203)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.567)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2952, -0.2656, -0.1814, 0.2016, 1.8659, -17.651)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.4614, -21.7347)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3602, -0.208, -0.208, 0.3603, 22.6043, -28.9692)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 32.3807, -62.9805)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3624, -0.1631, -0.1631, 0.3624, -10.7404, -29.6466)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0592, -0.3941, -0.3941, 0.0592, 1.7482, -27.5622)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1373, -0.3735, -0.3735, 0.1373, 10.5992, -29.5003)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1789, -0.3555, -0.3555, 0.1789, 7.314, -24.1255)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 24}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.0918, -48.8704)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.3645, -33.0163)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.099, -42.6128)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 16.6658, -47.877)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3924, 0.0535, 0.0335, 0.2455, 24.3989, -19.2607)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1547, 0.3638, 0.3638, 0.1547, 3.5972, -27.7548)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3448, -0.1956, -0.1956, 0.3448, 0.6106, -13.2729)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.567)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2942, -0.2657, -0.1807, 0.2014, 1.8518, -17.6996)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 16.4545, -21.766)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3601, -0.2067, -0.2067, 0.3601, 22.6219, -29.0137)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.3769, -63.0293)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3624, -0.1619, -0.1619, 0.3624, -10.7456, -29.6636)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0575, -0.3941, -0.3941, 0.0575, 1.764, -27.5341)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1362, -0.3734, -0.3734, 0.1362, 10.5748, -29.4785)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1779, -0.3554, -0.3548, 0.1791, 7.2499, -24.1385)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 25}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 22.141, -48.8684)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3874, -0.0931, 0.0931, 0.3874, 3.4156, -32.9659)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.0996, -42.5627)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1777, 0.1777, 0.3556, 16.6651, -47.8752)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3926, 0.052, 0.0326, 0.2457, 24.4083, -19.1689)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1532, 0.3644, 0.3644, 0.1532, 3.5185, -27.663)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3319, -8.3558)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3447, -0.1957, -0.1957, 0.3447, 0.6088, -13.2212)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.567)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2941, -0.2657, -0.181, 0.2003, 1.8515, -17.696)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3366, 16.4532, -21.7164)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3595, -0.2064, -0.2064, 0.3596, 22.5958, -29.0651)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.4243, -62.9783)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3625, -0.1618, -0.1618, 0.3625, -10.7454, -29.7163)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0557, -0.3944, -0.3944, 0.0557, 1.7816, -27.4998)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1332, -0.3745, -0.3745, 0.1332, 10.4843, -29.2936)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1793, -0.3547, -0.3547, 0.1793, 7.2537, -24.2241)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 27 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 26}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 22.1902, -48.8164)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 3.4661, -32.9157)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1003, -42.5124)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3556, 0.1776, 0.1776, 0.3556, 16.6643, -47.8233)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3926, 0.0518, 0.0324, 0.2457, 24.5094, -19.1617)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1516, 0.365, 0.365, 0.1516, 3.4863, -27.6714)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3324, -8.3565)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3446, -0.1958, -0.1958, 0.3446, 0.6069, -13.1685)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.517)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.294, -0.2658, -0.1804, 0.1996, 1.7975, -17.5434)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1982, -0.2131, 0.3366, 16.4013, -21.6671)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3587, -0.2059, -0.2059, 0.3587, 22.4536, -29.0171)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 32.4725, -62.8282)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3631, -0.1603, -0.1603, 0.3631, -10.7426, -29.7413)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0524, -0.3949, -0.3949, 0.0524, 1.7198, -27.4356)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1298, -0.3756, -0.3756, 0.1298, 10.5371, -29.2508)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1807, -0.3539, -0.3539, 0.1807, 7.3397, -24.3545)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 28 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 27}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 22.1879, -48.7634)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 3.5182, -32.9149)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1014, -42.5117)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.6622, -47.7706)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3928, 0.0502, 0.0314, 0.2458, 24.5692, -19.1149)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1498, 0.3657, 0.3657, 0.1498, 3.5015, -27.6798)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3335, -8.3571)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3438, -0.1971, -0.1971, 0.3438, 0.5964, -13.1897)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.467)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2938, -0.2658, -0.1796, 0.1985, 1.7929, -17.5398)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1981, -0.213, 0.3365, 16.2984, -21.6686)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3575, -0.2052, -0.2052, 0.3575, 22.296, -29.0199)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.0529, -0.0529, 0.3325, 32.4698, -62.679)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3638, -0.1587, -0.1587, 0.3638, -10.7391, -29.7683)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0487, -0.3954, -0.3954, 0.0487, 1.6519, -27.3661)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1249, -0.3771, -0.3771, 0.1249, 10.4674, -29.1163)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1822, -0.3531, -0.3531, 0.1822, 7.3268, -24.4921)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 29 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 28}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 22.186, -48.8099)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.0931, 0.0931, 0.3872, 3.5705, -32.8646)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1021, -42.5107)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.7103, -47.7673)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.393, 0.0485, 0.0304, 0.2459, 24.5302, -19.1158)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1467, 0.3669, 0.3669, 0.1467, 3.4401, -27.5953)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.335, -8.3575)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3436, -0.1972, -0.1972, 0.3436, 0.5926, -13.2356)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.467)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2927, -0.2669, -0.1793, 0.1966, 1.6778, -17.421)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3451, -0.198, -0.2129, 0.3364, 16.2955, -21.6199)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3561, -0.2043, -0.2043, 0.3561, 22.1762, -28.9238)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 32.5654, -62.5298)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3645, -0.157, -0.157, 0.3645, -10.7357, -29.9462)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0435, -0.3961, -0.3961, 0.0435, 1.6547, -27.2194)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1197, -0.3787, -0.3787, 0.1197, 10.4414, -28.8751)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1838, -0.3522, -0.3522, 0.1838, 7.3647, -24.6337)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 30 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 29}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 22.2837, -48.706)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 3.673, -32.8149)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 4.1036, -42.46)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 16.708, -47.7138)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3932, 0.0468, 0.0293, 0.246, 24.5908, -19.0154)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1435, 0.368, 0.368, 0.1435, 3.3268, -27.5105)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3358, -8.3584)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3427, -0.1985, -0.1985, 0.3427, 0.5306, -13.1552)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.417)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2915, -0.2679, -0.1788, 0.1946, 1.7118, -17.4017)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.345, -0.1979, -0.2128, 0.3363, 16.2914, -21.622)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3545, -0.2034, -0.2034, 0.3545, 22.0472, -28.8775)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 32.6601, -62.3778)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3652, -0.1553, -0.1553, 0.3652, -10.7326, -29.9752)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0368, -0.3968, -0.3968, 0.0368, 1.5277, -27.1474)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.113, -0.3806, -0.3806, 0.113, 10.3927, -28.5968)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1854, -0.3513, -0.3513, 0.1854, 7.4041, -24.9288)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 31 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 30}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 22.3306, -48.651)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 3.6758, -32.7644)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3896, 0.3896, -0.0793, 4.1049, -42.409)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3551, 0.1774, 0.1774, 0.3551, 16.6551, -47.6592)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3934, 0.045, 0.0282, 0.2461, 24.6511, -18.9635)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1402, 0.3692, 0.3692, 0.1402, 3.2623, -27.4249)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3375, -8.3591)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3417, -0.1998, -0.1998, 0.3417, 0.6183, -13.175)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.367)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2912, -0.268, -0.1776, 0.193, 1.6545, -17.2964)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3449, -0.1978, -0.2128, 0.3362, 16.237, -21.5739)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3528, -0.2023, -0.2023, 0.3528, 21.9621, -28.8821)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0528, -0.0528, 0.3324, 32.8065, -62.2795)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3665, -0.1523, -0.1523, 0.3665, -10.6772, -30.0754)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.03, -0.3974, -0.3974, 0.03, 1.4466, -27.0753)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1049, -0.3828, -0.3828, 0.1049, 10.3195, -28.2337)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1882, -0.3497, -0.3497, 0.1882, 7.4227, -25.1933)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 32 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 31}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 22.4786, -48.5966)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 3.7786, -32.8139)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 4.1564, -42.4077)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 16.7032, -47.6051)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3936, 0.0432, 0.0271, 0.2462, 24.7613, -18.9113)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1369, 0.3704, 0.3704, 0.1369, 3.197, -27.3893)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3386, -8.3597)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3408, -0.2012, -0.2012, 0.3408, 0.5556, -13.1447)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.317)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.29, -0.2691, -0.177, 0.1908, 1.5877, -17.1768)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3448, -0.1977, -0.2127, 0.3361, 16.1832, -21.5258)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.351, -0.2012, -0.2013, 0.351, 21.7761, -28.8364)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 32.9021, -62.0802)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3672, -0.1504, -0.1504, 0.3672, -10.6743, -30.2558)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0244, -0.3978, -0.3978, 0.0244, 1.4385, -26.9277)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.098, -0.3845, -0.3845, 0.0979, 10.2109, -28.0545)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1899, -0.3487, -0.3487, 0.1899, 7.4114, -25.3921)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 33 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 32}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 22.5256, -48.5416)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3869, -0.093, 0.093, 0.3869, 3.8309, -32.7636)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3894, 0.3894, -0.0793, 4.1576, -42.3567)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3549, 0.1773, 0.1773, 0.3549, 16.7503, -47.5505)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3938, 0.0415, 0.026, 0.2464, 24.8212, -18.9099)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1336, 0.3715, 0.3715, 0.1336, 3.0826, -27.3032)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -6.3403, -8.4104)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3405, -0.2013, -0.2013, 0.3405, 0.651, -13.1898)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.267)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2897, -0.2691, -0.1759, 0.1893, 1.5304, -17.1713)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3447, -0.1976, -0.2126, 0.336, 16.1285, -21.4774)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3493, -0.2002, -0.2002, 0.3493, 21.6899, -28.8408)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0527, -0.0527, 0.3323, 32.9959, -61.8791)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3684, -0.1474, -0.1474, 0.3684, -10.6696, -30.3056)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0176, -0.3982, -0.3982, 0.0176, 1.4043, -26.8597)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0911, -0.386, -0.386, 0.0911, 10.1998, -27.8294)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1916, -0.3478, -0.3478, 0.1916, 7.4505, -25.6407)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 34 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 33}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 22.6332, -48.5057)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 3.9728, -32.6643)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 4.1036, -42.26)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, 0.1775, 0.1775, 0.3553, 16.7076, -47.5135)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.394, 0.04, 0.025, 0.2465, 24.8829, -18.8169)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1306, 0.3729, 0.3729, 0.1306, 3.0737, -27.2727)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3374, -8.3602)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.34, -0.2031, -0.2031, 0.34, 0.6487, -13.0521)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.289, -0.2706, -0.1757, 0.1876, 1.4209, -17.0974)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.345, -0.1978, -0.2128, 0.3363, 16.0921, -21.4236)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3481, -0.1996, -0.1996, 0.3482, 21.5858, -28.7399)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0528, -0.0528, 0.3324, 33.1082, -61.7331)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3694, -0.146, -0.146, 0.3694, -10.6604, -30.3824)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0122, -0.3985, -0.3985, 0.0122, 1.2978, -26.7678)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0846, -0.3876, -0.3877, 0.0846, 10.0991, -27.5613)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1945, -0.3467, -0.3467, 0.1945, 7.5415, -25.8376)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 35 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 34}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 22.6776, -48.4959)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.387, -0.093, 0.093, 0.387, 4.0784, -32.6634)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0793, 0.3895, 0.3895, -0.0793, 4.1564, -42.3077)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.355, 0.1774, 0.1774, 0.355, 16.7022, -47.5045)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3941, 0.0383, 0.024, 0.2466, 24.8406, -18.7181)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1289, 0.3733, 0.3733, 0.1289, 3.04, -27.2766)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3385, -8.3103)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3397, -0.203, -0.203, 0.3397, 0.6929, -13.1039)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2886, -0.2705, -0.175, 0.1867, 1.3643, -17.1466)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3448, -0.1977, -0.2127, 0.3361, 16.0822, -21.4758)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3471, -0.199, -0.199, 0.3471, 21.584, -28.6922)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3323, -0.0528, -0.0528, 0.3323, 33.2012, -61.6793)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3699, -0.1443, -0.1443, 0.3699, -10.6609, -30.5089)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0088, -0.3985, -0.3985, 0.0088, 1.1784, -26.7114)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.086, -0.3874, -0.3874, 0.086, 10.1234, -27.4958)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1947, -0.3463, -0.3463, 0.1947, 7.5367, -25.9115)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 36 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 35}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 22.7319, -48.5033)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3871, -0.093, 0.093, 0.3871, 4.0742, -32.615)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3896, 0.3896, -0.0794, 4.1541, -42.3094)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, 0.1775, 0.1775, 0.3552, 16.6564, -47.5613)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3942, 0.0382, 0.0239, 0.2466, 24.8423, -18.7146)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1275, 0.374, 0.374, 0.1275, 3.0111, -27.236)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3363, -8.309)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3391, -0.2043, -0.2043, 0.3391, 0.638, -13.0742)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.217)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2878, -0.2718, -0.1752, 0.1855, 1.4049, -16.9773)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3449, -0.1978, -0.2128, 0.3363, 16.0896, -21.4729)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3465, -0.1988, -0.1988, 0.3466, 21.5089, -28.7395)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0528, -0.0528, 0.3324, 33.21, -61.5796)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3702, -0.1442, -0.1442, 0.3702, -10.6072, -30.4122)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0055, -0.3986, -0.3986, 0.0055, 1.1613, -26.6566)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0864, -0.3876, -0.3876, 0.0864, 10.1371, -27.4999)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1962, -0.3457, -0.3457, 0.1963, 7.5827, -26.0371)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 37 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 36}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 22.7865, -48.4602)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3872, -0.093, 0.093, 0.3872, 4.1202, -32.6153)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3897, 0.3897, -0.0794, 4.1521, -42.2607)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3554, 0.1776, 0.1776, 0.3554, 16.6608, -47.4676)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3942, 0.0381, 0.0238, 0.2467, 24.8949, -18.7617)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1273, 0.3742, 0.3742, 0.1273, 3.0069, -27.1895)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3341, -8.3077)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2046, -0.2046, 0.3392, 0.6914, -13.0193)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2879, -0.272, -0.1749, 0.1851, 1.4051, -17.0224)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3451, -0.198, -0.2129, 0.3364, 15.9957, -21.3699)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3461, -0.1986, -0.1985, 0.3461, 21.4361, -28.7378)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3324, -0.0529, -0.0529, 0.3324, 33.2154, -61.528)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3709, -0.1428, -0.1428, 0.3709, -10.7022, -30.4856)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0036, -0.3987, -0.3987, 0.0036, 1.1223, -26.6748)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0881, -0.3875, -0.3876, 0.0881, 10.219, -27.4857)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1977, -0.3452, -0.3452, 0.1977, 7.5779, -26.0613)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 38 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 37}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 22.7897, -48.5161)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3873, -0.0931, 0.0931, 0.3873, 4.1173, -32.5658)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 4.1006, -42.212)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 16.6138, -47.523)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3943, 0.038, 0.0238, 0.2467, 24.896, -18.7595)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1259, 0.3748, 0.3748, 0.1259, 3.0793, -27.1982)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.333, -8.3065)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3386, -0.2059, -0.2059, 0.3386, 0.7354, -12.8906)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2723, -0.1746, 0.1847, 1.3551, -17.0182)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3452, -0.1981, -0.2131, 0.3366, 16.0008, -21.3676)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3456, -0.1984, -0.1984, 0.3457, 21.4674, -28.6867)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.0529, -0.0529, 0.3325, 33.2216, -61.4791)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3711, -0.1427, -0.1427, 0.3711, -10.6993, -30.5882)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-4.0E-4, -0.3987, -0.3987, 4.0E-4, 1.1082, -26.6235)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0896, -0.3874, -0.3874, 0.0896, 10.1988, -27.5208)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.198, -0.3452, -0.3452, 0.198, 7.6425, -26.2173)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 39 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${X_OFFSET + (WIDTH + MARGIN) * 38}, ${Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#IddleMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#IddleMaleBrute-${id}-sprite95`} />
      </g>
      <defs>
        <g id={`IddleMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#IddleMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#IddleMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#IddleMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#IddleMaleBrute-${id}-shape0`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`IddleMaleBrute-39-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-shape1`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#IddleMaleBrute-${id}-sprite6`} />
          <clipPath id={`IddleMaleBrute-39-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`IddleMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#IddleMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#IddleMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#IddleMaleBrute-${id}-shape2`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#IddleMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#IddleMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#IddleMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#IddleMaleBrute-${id}-shape4`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#IddleMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#IddleMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#IddleMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#IddleMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#IddleMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#IddleMaleBrute-${id}-shape5`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`IddleMaleBrute-39-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`IddleMaleBrute-39-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#IddleMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#IddleMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#IddleMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#IddleMaleBrute-${id}-shape6`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#IddleMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#IddleMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`IddleMaleBrute-39-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#IddleMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#IddleMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#IddleMaleBrute-${id}-shape7`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`IddleMaleBrute-39-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#IddleMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`IddleMaleBrute-39-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#IddleMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#IddleMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`IddleMaleBrute-39-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#IddleMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#IddleMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#IddleMaleBrute-${id}-shape7`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#IddleMaleBrute-${id}-shape8`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#IddleMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`IddleMaleBrute-39-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#IddleMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#IddleMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#IddleMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#IddleMaleBrute-${id}-shape9`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#IddleMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#IddleMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`IddleMaleBrute-39-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#IddleMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#IddleMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#IddleMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`IddleMaleBrute-39-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#IddleMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`IddleMaleBrute-39-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#IddleMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`IddleMaleBrute-39-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#IddleMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-shape10`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#IddleMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`IddleMaleBrute-39-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#IddleMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#IddleMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`IddleMaleBrute-39-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#IddleMaleBrute-${id}-sprite55`} />
          <use height="45.0" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#IddleMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#IddleMaleBrute-${id}-shape11`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#IddleMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#IddleMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#IddleMaleBrute-${id}-sprite60`} />
          <use height="44.25" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#IddleMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#IddleMaleBrute-${id}-shape12`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#IddleMaleBrute-${id}-sprite62`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#IddleMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#IddleMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`IddleMaleBrute-39-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#IddleMaleBrute-${id}-sprite66`} />
          <use height="35.0" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#IddleMaleBrute-${id}-sprite67`} />
          <use height="41.1" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#IddleMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#IddleMaleBrute-${id}-shape13`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#IddleMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#IddleMaleBrute-${id}-shape14`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`IddleMaleBrute-39-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#IddleMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`IddleMaleBrute-39-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#IddleMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#IddleMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`IddleMaleBrute-39-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#IddleMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#IddleMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`IddleMaleBrute-39-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#IddleMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`IddleMaleBrute-39-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#IddleMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`IddleMaleBrute-39-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#IddleMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#IddleMaleBrute-${id}-shape15`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`IddleMaleBrute-39-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#IddleMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#IddleMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#IddleMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#IddleMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#IddleMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`IddleMaleBrute-39-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#IddleMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#IddleMaleBrute-${id}-shape17`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#IddleMaleBrute-${id}-shape18`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#IddleMaleBrute-${id}-shape20`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`IddleMaleBrute-39-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#IddleMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#IddleMaleBrute-${id}-shape21`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#IddleMaleBrute-${id}-shape22`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#IddleMaleBrute-${id}-sprite85`} />
          <use height="26.45" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#IddleMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#IddleMaleBrute-${id}-shape23`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#IddleMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#IddleMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#IddleMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#IddleMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#IddleMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#IddleMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#IddleMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#IddleMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`IddleMaleBrute-39-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#IddleMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`IddleMaleBrute-39-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#IddleMaleBrute-${id}-sprite96`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`IddleMaleBrute-39-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#IddleMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`IddleMaleBrute-39-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#IddleMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`IddleMaleBrute-39-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#IddleMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`IddleMaleBrute-39-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#IddleMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`IddleMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#IddleMaleBrute-${id}-shape24`} />
        </g>
        <g id={`IddleMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
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

export default IddleMaleBrute;