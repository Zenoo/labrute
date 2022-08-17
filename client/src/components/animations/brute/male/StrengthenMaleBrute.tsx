/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface StrengthenMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const StrengthenMaleBrute_WIDTH = 165.6;
export const StrengthenMaleBrute_HEIGHT = 138.1;
export const StrengthenMaleBrute_FRAMES = 25;
export const StrengthenMaleBrute_X_OFFSET = 61.85;
export const StrengthenMaleBrute_Y_OFFSET = 120.45;
export const StrengthenMaleBrute_MARGIN = 30;

const StrengthenMaleBrute = ({ id, inverted, sx, ...rest }: StrengthenMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: StrengthenMaleBrute_WIDTH,
      height: StrengthenMaleBrute_HEIGHT,
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
          ? -(StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN)
            * (StrengthenMaleBrute_FRAMES - 1)
            - StrengthenMaleBrute_MARGIN
          : 0,
        width: (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN)
          * StrengthenMaleBrute_FRAMES,
        animation: `StrengthenMaleBrute${inverted ? 'Inverted' : ''} 0.62s steps(${StrengthenMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 0}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 1}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3396, 0.2066, 0.2066, 0.3396, 21.2289, -49.7353)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3808, -0.1169, 0.1169, 0.3808, 3.5764, -32.5593)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0966, 0.3859, 0.3859, -0.0966, 3.4626, -42.1662)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3491, 0.1902, 0.1902, 0.3491, 15.7648, -47.8709)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3982, -0.0054, 0.0054, 0.3982, 8.7239, -13.2857)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3937, 0.0433, 0.0275, 0.2503, 24.7634, -19.2305)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1194, 0.377, 0.377, 0.1194, 2.7529, -27.3757)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.331, -8.3561)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3403, -0.2034, -0.2034, 0.3403, 0.7073, -13.0494)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.6609, -28.367)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2917, -0.2685, -0.1734, 0.1885, 1.3493, -17.1772)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3471, -0.1951, -0.2101, 0.3386, 15.9244, -21.7322)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3497, -0.1905, -0.1905, 0.3497, 21.2093, -29.2122)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3338, -0.0442, -0.0442, 0.3338, 32.0229, -62.1955)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3602, -0.1684, -0.1684, 0.3602, -10.9499, -30.8574)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0056, -0.3986, -0.3986, -0.0056, 0.6322, -26.7286)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0831, -0.3891, -0.3891, 0.0831, 9.8481, -27.4021)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1797, -0.3553, -0.3553, 0.1797, 6.8426, -25.6092)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 2}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2778, 0.2841, 0.2841, 0.2778, 16.2637, -52.678)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3505, -0.1889, 0.1889, 0.3505, 2.1184, -32.6883)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1494, 0.3685, 0.3685, -0.1494, 1.5138, -41.9466)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3253, 0.2284, 0.2284, 0.3253, 13.1713, -49.0389)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3974, -0.0228, 0.0228, 0.3974, 8.5581, -13.7452)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3913, 0.0605, 0.0403, 0.2606, 24.1845, -20.8845)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1028, 0.3819, 0.3819, 0.1028, 1.8779, -27.7797)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3324, -8.3565)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3439, -0.1973, -0.1973, 0.3439, 0.5986, -13.1857)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.1609, -28.867)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3033, -0.2552, -0.1695, 0.2015, 1.1355, -17.8325)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3521, -0.1858, -0.1999, 0.3447, 15.4647, -22.5393)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3622, -0.1654, -0.1654, 0.3622, 20.1779, -31.0506)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3362, -0.0178, -0.0178, 0.3362, 28.0755, -64.3233)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3149, -0.2424, -0.2424, 0.3149, -11.9535, -31.7076)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0263, -0.3976, -0.3976, -0.0263, -0.7618, -26.9174)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.064, -0.3926, -0.3926, 0.064, 8.3255, -27.1822)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.12, -0.3797, -0.3797, 0.12, 4.292, -23.7788)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 3}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.138, 0.3727, 0.3727, 0.138, 7.6985, -55.5262)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2719, -0.2906, 0.2906, 0.2719, 0.9753, -32.9076)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.23, 0.3241, 0.3241, -0.23, -1.3306, -41.4483)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2778, 0.2841, 0.2841, 0.2778, 8.6596, -50.6052)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3944, -0.0522, 0.0522, 0.3944, 8.368, -14.418)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3854, 0.0893, 0.064, 0.2762, 23.1575, -23.4553)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0742, 0.3884, 0.3884, 0.0742, 0.5247, -28.3891)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3341, -8.3577)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3497, -0.1866, -0.1866, 0.3497, 0.314, -13.5231)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 9.3609, -29.767)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3223, -0.2307, -0.1602, 0.2239, 0.7996, -18.8083)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3606, -0.1687, -0.1843, 0.3532, 14.7984, -24.0625)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3797, -0.1202, -0.1202, 0.3797, 18.3796, -34.1375)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3355, 0.0253, 0.0253, 0.3355, 21.2572, -67.7478)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.208, -0.3384, -0.3384, 0.208, -14.2291, -33.3124)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0606, -0.3935, -0.3935, -0.0606, -3.1855, -27.351)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0297, -0.3966, -0.3967, 0.0297, 5.8476, -26.8869)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.014, -0.398, -0.398, 0.014, -1.0624, -21.6327)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 4}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.0896, 0.3872, 0.3872, -0.0896, -2.8087, -55.3293)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1152, -0.3811, 0.3811, 0.1152, 1.6608, -34.5809)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.322, 0.2328, 0.2328, -0.322, -4.4783, -40.4228)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.1947, 0.3464, 0.3464, 0.1947, 2.2389, -51.9476)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3864, -0.093, 0.093, 0.3864, 8.0944, -15.4258)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3736, 0.129, 0.1016, 0.2942, 21.5431, -27.0574)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.0346, 0.3939, 0.3939, 0.0346, -1.4846, -29.4035)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.336, -8.3593)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3573, -0.1712, -0.1712, 0.3573, -0.0551, -13.9634)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 8.2106, -31.0167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3454, -0.1942, -0.1432, 0.2546, 0.3442, -20.1591)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3708, -0.1447, -0.1608, 0.3645, 13.647, -26.2298)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3945, -0.0556, -0.0556, 0.3945, 15.3939, -38.2938)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3244, 0.0872, 0.0872, 0.3244, 11.0788, -71.8102)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.0159, -0.3971, -0.3971, 0.0159, -18.4356, -36.5027)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1065, -0.3832, -0.3832, -0.1065, -6.6485, -28.1275)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.016, -0.3973, -0.3973, -0.016, 2.312, -26.5256)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.1331, -0.3746, -0.3746, -0.1331, -10.1142, -20.5905)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 5}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3301, 0.2214, 0.2214, -0.3301, -10.4843, -50.3224)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1132, -0.3819, 0.3819, -0.1132, 4.8982, -40.2361)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3891, 0.0828, 0.0828, -0.3891, -6.9636, -39.2462)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.071, 0.3915, 0.3915, 0.071, -5.8576, -52.3942)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3703, -0.1443, 0.1443, 0.3703, 7.8931, -16.7412)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3529, 0.1783, 0.1566, 0.3101, 19.2878, -31.5819)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0176, 0.395, 0.395, -0.0176, -4.0713, -30.4061)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3661, -0.1523, -0.1523, 0.3661, -0.5187, -14.6269)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.7606, -32.6167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3688, -0.1457, -0.1154, 0.2921, -0.4869, -22.0321)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3819, -0.1136, -0.1301, 0.3769, 12.1881, -29.0786)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3974, 0.0296, 0.0296, 0.3974, 10.9515, -43.4341)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2942, 0.162, 0.162, 0.2942, -2.6463, -75.9472)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2283, -0.3249, -0.3249, -0.2283, -24.2879, -42.9164)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1639, -0.3624, -0.3624, -0.1639, -11.1181, -29.2369)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0776, -0.3897, -0.3897, -0.0776, -2.4739, -26.2532)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.2937, -0.2679, -0.2679, -0.2937, -23.1795, -23.7396)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 6}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3354, 0.2123, 0.2123, -0.3354, -10.6499, -50.113)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1201, -0.3795, 0.3795, -0.1201, 5.0167, -40.5304)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3902, 0.0762, 0.0762, -0.3902, -7.0837, -39.2452)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0659, 0.3922, 0.3922, 0.0659, -6.126, -52.4116)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3693, -0.1458, 0.1458, 0.3693, 7.8876, -16.8582)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3516, 0.1796, 0.1584, 0.3102, 19.1434, -31.7217)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0191, 0.3949, 0.3949, -0.0191, -4.1491, -30.5002)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3374, -8.3108)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3664, -0.1505, -0.1505, 0.3664, -0.5212, -14.6622)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.7106, -32.6667)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3692, -0.1438, -0.1142, 0.2931, -0.5363, -22.1089)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3821, -0.1118, -0.1284, 0.3771, 12.1753, -29.1373)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3971, 0.0316, 0.0316, 0.3972, 10.8521, -43.5544)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2924, 0.1642, 0.1642, 0.2924, -3.1737, -75.9665)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.235, -0.3193, -0.3193, -0.235, -24.4129, -43.2697)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1652, -0.3613, -0.3613, -0.1652, -11.2626, -29.3882)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0793, -0.3891, -0.3891, -0.0793, -2.6723, -26.3795)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.2979, -0.2624, -0.2624, -0.2979, -23.6003, -24.0369)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 7}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.341, 0.2034, 0.2034, -0.341, -10.6277, -49.8553)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1283, -0.3768, 0.3768, -0.1283, 5.1816, -40.764)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3913, 0.071, 0.071, -0.3913, -7.0735, -39.1223)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0609, 0.393, 0.393, 0.0609, -6.493, -52.3359)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3687, -0.1474, 0.1474, 0.3687, 7.9242, -16.8784)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3509, 0.1812, 0.1604, 0.3106, 19.0126, -31.8707)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0209, 0.3948, 0.3948, -0.0209, -4.2326, -30.5444)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.3371, -8.3099)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3665, -0.1504, -0.1504, 0.3665, -0.5197, -14.6154)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.6606, -32.7167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3698, -0.1422, -0.1132, 0.2944, -0.5307, -22.2332)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3822, -0.1115, -0.1269, 0.3776, 12.0621, -29.3012)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3969, 0.0349, 0.035, 0.3969, 10.675, -43.7232)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.291, 0.1668, 0.1668, 0.291, -3.7058, -76.1262)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2421, -0.3141, -0.3141, -0.2421, -24.641, -43.6674)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1669, -0.3605, -0.3605, -0.1669, -11.3596, -29.5264)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0811, -0.3887, -0.3888, -0.0811, -2.7669, -26.4997)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3025, -0.2572, -0.2572, -0.3025, -24.0231, -24.3566)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 8}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3463, 0.1944, 0.1944, -0.3463, -10.7955, -49.698)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1363, -0.374, 0.374, -0.1363, 5.2967, -41.1042)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3922, 0.0657, 0.0657, -0.3922, -7.1611, -39.1504)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0571, 0.3936, 0.3936, 0.0571, -6.7678, -52.328)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3681, -0.1491, 0.1491, 0.3681, 7.9111, -16.9485)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3501, 0.1828, 0.1624, 0.3111, 18.9809, -32.0191)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0227, 0.3947, 0.3947, -0.0227, -4.3657, -30.5385)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3363, -8.3096)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3666, -0.1503, -0.1503, 0.3666, -0.6183, -14.6686)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.6106, -32.8167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.371, -0.1393, -0.1111, 0.296, -0.6219, -22.2741)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3827, -0.11, -0.1266, 0.3778, 12.0234, -29.3991)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3965, 0.0383, 0.0383, 0.3966, 10.446, -43.8924)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2896, 0.1694, 0.1694, 0.2896, -4.1397, -76.2833)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.25, -0.3078, -0.3079, -0.2501, -24.7865, -43.9758)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1698, -0.3592, -0.3592, -0.1698, -11.5402, -29.7073)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.083, -0.3884, -0.3884, -0.0829, -2.9122, -26.5196)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.307, -0.2519, -0.2519, -0.3069, -24.4969, -24.6321)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 9}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3513, 0.1853, 0.1853, -0.3513, -10.852, -49.5413)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1432, -0.3714, 0.3714, -0.1432, 5.4653, -41.452)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3933, 0.0591, 0.0591, -0.3933, -7.2312, -39.1499)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0521, 0.3944, 0.3944, 0.0521, -7.034, -52.3482)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3674, -0.1507, 0.1507, 0.3674, 7.848, -16.9183)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3493, 0.1843, 0.1644, 0.3115, 18.8986, -32.1179)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0245, 0.3946, 0.3946, -0.0245, -4.4494, -30.5824)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0263, -0.0263, 0.3975, -6.3354, -8.3092)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3672, -0.1489, -0.1489, 0.3672, -0.613, -14.7478)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.5606, -32.8667)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3716, -0.1377, -0.1101, 0.2972, -0.5663, -22.3486)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3831, -0.1085, -0.1251, 0.3783, 12.0206, -29.5517)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3962, 0.0417, 0.0417, 0.3962, 10.2662, -44.1114)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2881, 0.1719, 0.1719, 0.2881, -4.6734, -76.2886)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2569, -0.3022, -0.3022, -0.2569, -25.0625, -44.3794)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1715, -0.3585, -0.3585, -0.1715, -11.7374, -29.7458)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.086, -0.3877, -0.3877, -0.086, -3.0901, -26.5696)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3114, -0.2465, -0.2465, -0.3113, -24.9195, -24.9641)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 10}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3562, 0.176, 0.176, -0.3562, -10.9482, -49.2853)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1512, -0.3682, 0.3682, -0.1512, 5.5819, -41.7555)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3941, 0.0538, 0.0538, -0.3941, -7.2645, -39.0295)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0471, 0.395, 0.395, 0.0471, -7.2999, -52.2159)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3668, -0.1524, 0.1524, 0.3668, 7.8851, -17.0878)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3485, 0.1859, 0.1664, 0.3119, 18.8663, -32.3166)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0263, 0.3944, 0.3944, -0.0263, -4.5325, -30.6261)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0263, -0.0263, 0.3975, -6.3346, -8.3083)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3673, -0.1488, -0.1488, 0.3673, -0.6115, -14.701)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.5106, -32.9167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3723, -0.136, -0.1091, 0.2985, -0.611, -22.4231)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3832, -0.1083, -0.1236, 0.3788, 11.9569, -29.565)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.396, 0.0437, 0.0437, 0.396, 10.1171, -44.1838)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2866, 0.1744, 0.1744, 0.2866, -5.1098, -76.3903)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2636, -0.2964, -0.2965, -0.2636, -25.1874, -44.7864)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1732, -0.3577, -0.3577, -0.1732, -11.8352, -29.8345)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0878, -0.3874, -0.3874, -0.0878, -3.2351, -26.6395)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3157, -0.2411, -0.2411, -0.3157, -25.3902, -25.2521)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 11}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3613, 0.1653, 0.1653, -0.3613, -10.974, -49.0295)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1591, -0.3649, 0.3649, -0.1591, 5.6989, -42.0648)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3951, 0.0471, 0.0471, -0.3951, -7.2303, -39.0312)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.042, 0.3957, 0.3957, 0.042, -7.6154, -52.2819)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3661, -0.1541, 0.1541, 0.3661, 7.972, -17.0075)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3477, 0.1875, 0.1684, 0.3123, 18.7839, -32.465)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0294, 0.3942, 0.3942, -0.0294, -4.6403, -30.6145)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3338, -8.308)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3674, -0.1487, -0.1487, 0.3674, -0.6097, -14.7543)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.4606, -32.9667)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.373, -0.1344, -0.108, 0.2997, -0.6557, -22.4478)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3837, -0.1068, -0.1234, 0.379, 11.8186, -29.7632)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3956, 0.0471, 0.0471, 0.3956, 9.985, -44.4024)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2851, 0.177, 0.177, 0.2851, -5.6953, -76.5929)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2711, -0.2896, -0.2897, -0.2711, -25.3296, -45.105)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.176, -0.3563, -0.3563, -0.176, -12.0167, -29.9671)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0896, -0.3869, -0.387, -0.0896, -3.3807, -26.761)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3199, -0.2356, -0.2356, -0.3199, -25.8111, -25.4975)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 12}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3657, 0.1558, 0.1558, -0.3657, -11.048, -48.8753)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.167, -0.3614, 0.3614, -0.167, 5.9164, -42.4318)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3957, 0.0418, 0.0418, -0.3957, -7.3598, -39.0127)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0382, 0.3961, 0.3961, 0.0382, -7.7874, -52.2178)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3654, -0.1557, 0.1557, 0.3654, 7.9098, -17.0769)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3469, 0.1891, 0.1705, 0.3128, 18.6506, -32.6641)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0312, 0.394, 0.394, -0.0312, -4.7239, -30.7076)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3332, -8.3074)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.368, -0.1473, -0.1473, 0.368, -0.5542, -14.8335)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.4106, -33.0167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3736, -0.1327, -0.1069, 0.301, -0.7006, -22.5723)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3842, -0.1052, -0.1219, 0.3795, 11.816, -29.866)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3952, 0.0505, 0.0505, 0.3952, 9.8027, -44.6196)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2836, 0.1795, 0.1795, 0.2836, -6.2333, -76.6419)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2776, -0.2836, -0.2836, -0.2776, -25.5523, -45.5174)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1778, -0.3555, -0.3555, -0.1778, -12.1151, -30.2058)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0915, -0.3865, -0.3865, -0.0915, -3.5272, -26.8319)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3241, -0.2299, -0.2299, -0.324, -26.2807, -25.899)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 13}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3697, 0.146, 0.146, -0.3697, -11.1097, -48.6731)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1748, -0.3577, 0.3577, -0.1748, 5.9837, -42.756)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3964, 0.0351, 0.0351, -0.3964, -7.4205, -39.016)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0332, 0.3965, 0.3965, 0.0332, -8.1002, -52.2289)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3648, -0.1574, 0.1574, 0.3648, 7.8969, -17.1465)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3461, 0.1907, 0.1725, 0.3132, 18.568, -32.862)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.033, 0.3939, 0.3939, -0.033, -4.8575, -30.7507)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.3327, -8.3068)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3681, -0.1472, -0.1472, 0.3681, -0.603, -14.7869)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.3606, -33.1167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3742, -0.131, -0.1058, 0.3023, -0.7456, -22.6472)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3843, -0.105, -0.1203, 0.38, 11.7517, -29.93)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3947, 0.0538, 0.0538, 0.3948, 9.5689, -44.7867)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.282, 0.182, 0.182, 0.282, -6.6704, -76.7891)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2848, -0.2764, -0.2764, -0.2848, -25.641, -45.8432)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1794, -0.3547, -0.3547, -0.1794, -12.263, -30.2959)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0945, -0.3858, -0.3858, -0.0945, -3.756, -26.9331)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3281, -0.2243, -0.2243, -0.3281, -26.6989, -26.2573)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 14}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3736, 0.1362, 0.1362, -0.3736, -11.1616, -48.4727)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1826, -0.3538, 0.3538, -0.1826, 6.1509, -43.1863)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3969, 0.0297, 0.0297, -0.3969, -7.3963, -38.9993)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0281, 0.397, 0.397, 0.0281, -8.3131, -52.1893)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3636, -0.1602, 0.1602, 0.3636, 7.9261, -17.143)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3446, 0.1934, 0.1756, 0.313, 18.4607, -32.9919)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0348, 0.3937, 0.3937, -0.0348, -4.9411, -30.7437)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3322, -8.3062)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3687, -0.1458, -0.1458, 0.3687, -0.6475, -14.8165)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.3106, -33.1667)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3749, -0.1294, -0.1048, 0.3035, -0.7405, -22.6721)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3847, -0.1035, -0.1201, 0.3802, 11.6627, -29.9779)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3942, 0.0572, 0.0572, 0.3943, 9.3834, -44.8523)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2804, 0.1845, 0.1845, 0.2804, -7.2101, -76.8337)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.291, -0.27, -0.27, -0.291, -25.8609, -46.3119)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1823, -0.3533, -0.3533, -0.1823, -12.395, -30.4292)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0964, -0.3854, -0.3854, -0.0963, -3.9026, -27.0543)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.332, -0.2185, -0.2185, -0.332, -27.2157, -26.5221)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 15}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.3776, 0.1261, 0.1261, -0.3776, -11.1639, -48.3082)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.1903, -0.3504, 0.3504, -0.1903, 6.3104, -43.4527)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3974, 0.0241, 0.0241, -0.3974, -7.5199, -38.9784)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.0241, 0.3974, 0.3974, 0.0241, -8.6406, -52.1695)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3633, -0.1621, 0.1621, 0.3633, 7.9052, -17.2144)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3443, 0.1952, 0.1779, 0.3139, 18.3917, -33.148)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0377, 0.3936, 0.3936, -0.0377, -4.996, -30.7343)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3691, -0.1462, -0.1462, 0.3691, -0.5383, -14.811)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 6.2606, -33.2167)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3759, -0.1279, -0.1038, 0.3051, -0.6808, -22.6951)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3852, -0.1032, -0.1192, 0.3809, 11.6162, -30.0945)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.394, 0.0604, 0.0604, 0.394, 9.2095, -45.066)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.2791, 0.1875, 0.1875, 0.2791, -7.768, -77.0236)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.2981, -0.2632, -0.2632, -0.298, -26.0465, -46.6825)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1845, -0.3528, -0.3528, -0.1845, -12.5488, -30.5535)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0991, -0.385, -0.385, -0.0991, -4.0165, -27.1059)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.3362, -0.2132, -0.2132, -0.3362, -27.576, -26.9074)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 16}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2575, 0.3028, 0.3028, -0.2575, -7.7373, -52.1574)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.0351, -0.397, 0.397, -0.0351, 5.014, -37.5983)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3665, 0.1542, 0.1542, -0.3665, -5.462, -38.8908)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.1296, 0.376, 0.376, 0.1296, -1.5242, -51.617)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3786, -0.1214, 0.1214, 0.3786, 9.4302, -16.1494)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3632, 0.1564, 0.1392, 0.3232, 21.4203, -30.4439)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0381, 0.3935, 0.3935, -0.0381, -2.7527, -28.7817)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.4313, -8.2058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3496, -0.1867, -0.1867, 0.3496, 0.3141, -12.9715)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 8.1106, -31.0667)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3457, -0.194, -0.1489, 0.2652, 0.8143, -19.7916)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3771, -0.1284, -0.1447, 0.3715, 13.5568, -26.9614)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3985, -0.0088, -0.0088, 0.3985, 13.7087, -40.1715)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3102, 0.129, 0.1291, 0.3103, 4.5295, -72.7082)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(0.1652, -0.3613, -0.3613, -0.1652, -21.2893, -41.6484)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1808, -0.3542, -0.3542, -0.1808, -9.0979, -28.8829)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0946, -0.3859, -0.386, -0.0946, -0.4551, -25.5781)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.2629, -0.2983, -0.2983, -0.2629, -18.3645, -23.0245)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 17}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.0021, 0.3981, 0.3981, -0.0021, 2.8956, -55.2415)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.167, -0.3615, 0.3615, 0.167, 4.4913, -33.4866)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.2665, 0.2948, 0.2948, -0.2665, -1.067, -39.1392)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.2505, 0.3086, 0.3086, 0.2505, 7.9398, -49.339)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3921, -0.0675, 0.0675, 0.3921, 11.5, -14.6867)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3818, 0.1043, 0.0899, 0.3291, 25.1854, -26.8792)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0383, 0.3936, 0.3936, -0.0383, 0.092, -26.3823)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.5313, -8.0058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.318, -0.2364, -0.2364, 0.318, 1.2172, -10.7439)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.5109, -28.317)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2905, -0.2695, -0.1913, 0.2062, 2.2842, -16.1153)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3644, -0.1608, -0.1765, 0.3573, 15.8759, -23.0033)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3864, -0.0968, -0.0968, 0.3864, 18.9137, -33.6937)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.333, 0.0485, 0.0485, 0.333, 19.8778, -65.7482)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.0419, -0.3956, -0.3956, 0.0419, -14.9057, -36.6883)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.175, -0.3574, -0.3574, -0.175, -4.6279, -26.8119)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0895, -0.3873, -0.3873, -0.0895, 4.0292, -23.5556)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(0.1398, -0.3726, -0.3726, -0.1398, -6.6211, -20.4491)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 18}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.2639, 0.2639, 0.298, 21.211, -50.6868)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, 7.7527, -31.9896)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 6.7424, -39.0151)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 19.2787, -44.2917)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 14.1924, -12.808)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0314, 0.3267, 29.4674, -22.3587)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0409, 0.3935, 0.3935, -0.0409, 3.6434, -23.4262)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.6086, -7.7302)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2697, -0.291, -0.291, 0.2697, 2.0643, -8.0441)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -24.967)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2022, -0.3414, -0.2185, 0.1294, 3.6905, -11.833)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 18.7114, -18.1347)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 24.1243, -25.3932)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 37.1307, -55.2805)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2756, -0.2873, -0.2873, 0.2756, -8.0937, -32.7187)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.17, -0.3606, -0.3606, -0.17, 0.8263, -24.1756)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0831, -0.3892, -0.3892, -0.0831, 9.5514, -21.0487)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.033, -0.3972, -0.3973, 0.0331, 6.6341, -20.9638)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 19}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 21.1393, -50.7658)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3498, -0.1903, 0.1903, 0.3498, 7.7742, -31.9314)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 6.749, -39.1628)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 19.3163, -44.3774)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 14.1424, -12.858)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0304, 0.3267, 29.422, -22.4213)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.04, 0.3935, 0.3935, -0.04, 3.6613, -23.5274)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.5813, -7.8058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2694, -0.2903, -0.2903, 0.2694, 2.1061, -8.1049)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -25.067)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2016, -0.3411, -0.2183, 0.129, 3.7322, -11.9357)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 18.705, -18.2162)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 24.1027, -25.4854)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 37.0769, -55.5293)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2805, -0.2816, -0.2816, 0.2805, -8.1453, -32.6751)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1623, -0.3636, -0.3636, -0.1623, 0.9836, -24.2367)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0745, -0.3907, -0.3907, -0.0745, 9.7113, -21.2956)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0402, -0.3965, -0.3965, 0.0402, 6.8173, -21.1402)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 20}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 21.1393, -51.1158)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3498, -0.1903, 0.1903, 0.3498, 7.6242, -31.7814)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 6.749, -39.5128)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 19.3163, -44.7274)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 13.9924, -13.058)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0304, 0.3267, 29.272, -22.6213)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.04, 0.3935, 0.3935, -0.04, 3.5113, -23.7274)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.4813, -8.0058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2694, -0.2903, -0.2903, 0.2694, 2.2061, -8.3049)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -25.417)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2016, -0.3411, -0.2183, 0.129, 3.8322, -12.1357)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 18.705, -18.5662)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 24.1027, -25.8354)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 37.0269, -56.1793)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2972, -0.264, -0.264, 0.2972, -8.1739, -32.3092)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1399, -0.3728, -0.3728, -0.1399, 1.3448, -24.4549)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.052, -0.3945, -0.3945, -0.052, 10.2575, -22.0363)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0642, -0.3932, -0.3933, 0.0642, 7.4435, -21.6937)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 21}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.2639, 0.2639, 0.298, 21.211, -51.6868)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, 7.2527, -31.4896)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 6.7424, -40.0151)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 19.2787, -45.2917)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 13.6924, -13.408)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0314, 0.3267, 28.9674, -22.9587)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0409, 0.3935, 0.3935, -0.0409, 3.1434, -24.0262)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2697, -0.291, -0.291, 0.2697, 2.3643, -8.6441)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -25.967)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2022, -0.3414, -0.2185, 0.1294, 3.9905, -12.433)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 18.7114, -19.1347)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 24.1243, -26.3932)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 37.0307, -57.1805)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3224, -0.2337, -0.2337, 0.3224, -8.3295, -31.72)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1032, -0.3851, -0.3851, -0.1032, 2.0506, -24.8904)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0126, -0.3979, -0.3979, -0.0126, 11.1459, -23.332)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1032, -0.3851, -0.3851, 0.1032, 8.253, -22.7715)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 22}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 21.1393, -51.4158)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3498, -0.1903, 0.1903, 0.3498, 7.4242, -31.6314)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 6.749, -39.7628)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 19.2663, -44.9774)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 13.8424, -13.258)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0304, 0.3267, 29.122, -22.8213)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.04, 0.3935, 0.3935, -0.04, 3.3113, -23.9274)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.4313, -8.2058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2694, -0.2903, -0.2903, 0.2694, 2.2561, -8.5549)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -25.717)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2016, -0.3411, -0.2183, 0.129, 3.8822, -12.2857)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 18.655, -18.8662)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 24.1527, -26.1354)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 37.0269, -56.7793)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3107, -0.248, -0.248, 0.3107, -8.2418, -31.9563)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.1201, -0.3798, -0.3798, -0.1201, 1.7641, -24.7296)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0299, -0.3969, -0.3969, -0.0299, 10.7657, -22.6951)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0847, -0.3893, -0.3893, 0.0848, 7.8482, -22.2643)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 23}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2973, 0.2638, 0.2638, 0.2973, 21.1393, -51.0658)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3498, -0.1903, 0.1903, 0.3498, 7.5742, -31.7814)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0794, 0.3898, 0.3898, -0.0794, 6.749, -39.4128)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 19.2663, -44.6274)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 13.9924, -13.058)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0304, 0.3267, 29.272, -22.6213)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.04, 0.3935, 0.3935, -0.04, 3.4613, -23.7274)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.5313, -8.0058)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2694, -0.2903, -0.2903, 0.2694, 2.1561, -8.3549)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -25.367)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2016, -0.3411, -0.2183, 0.129, 3.7822, -12.0857)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1982, -0.2131, 0.3367, 18.655, -18.5162)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 24.1527, -25.7854)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 37.0269, -56.1293)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.295, -0.2664, -0.2664, 0.295, -8.2456, -32.3636)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.143, -0.3717, -0.3717, -0.143, 1.3626, -24.3799)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0539, -0.3942, -0.3942, -0.0539, 10.2613, -21.9518)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.0609, -0.3938, -0.3938, 0.061, 7.3214, -21.6118)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${StrengthenMaleBrute_X_OFFSET + (StrengthenMaleBrute_WIDTH + StrengthenMaleBrute_MARGIN) * 24}, ${StrengthenMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.298, 0.2639, 0.2639, 0.298, 21.211, -50.6868)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3504, -0.1903, 0.1903, 0.3504, 7.7527, -31.9896)" width="253.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 6.7424, -39.0151)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 19.2787, -44.2917)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 14.1924, -12.808)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0314, 0.3267, 29.4674, -22.3587)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(0.0409, 0.3935, 0.3935, -0.0409, 3.6434, -23.4262)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.6086, -7.7302)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.2697, -0.291, -0.291, 0.2697, 2.0643, -8.0441)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 13.4609, -24.967)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2022, -0.3414, -0.2185, 0.1294, 3.6905, -11.833)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 18.7114, -18.1347)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 24.1243, -25.3932)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 37.1307, -55.2805)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2756, -0.2873, -0.2873, 0.2756, -8.0937, -32.7187)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.17, -0.3606, -0.3606, -0.17, 0.8263, -24.1756)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(0.0831, -0.3892, -0.3892, -0.0831, 9.5514, -21.0487)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.033, -0.3972, -0.3973, 0.0331, 6.6341, -20.9638)" width="85.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite95`} />
      </g>
      <defs>
        <g id={`StrengthenMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#StrengthenMaleBrute-${id}-shape0`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`StrengthenMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-shape1`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite6`} />
          <clipPath id={`StrengthenMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#StrengthenMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#StrengthenMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#StrengthenMaleBrute-${id}-shape2`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#StrengthenMaleBrute-${id}-shape4`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#StrengthenMaleBrute-${id}-shape5`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`StrengthenMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`StrengthenMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#StrengthenMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#StrengthenMaleBrute-${id}-shape6`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`StrengthenMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#StrengthenMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#StrengthenMaleBrute-${id}-shape7`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`StrengthenMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`StrengthenMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`StrengthenMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#StrengthenMaleBrute-${id}-shape7`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#StrengthenMaleBrute-${id}-shape8`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`StrengthenMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#StrengthenMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#StrengthenMaleBrute-${id}-shape9`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#StrengthenMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`StrengthenMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`StrengthenMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`StrengthenMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`StrengthenMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#StrengthenMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-shape10`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`StrengthenMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#StrengthenMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`StrengthenMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite55`} />
          <use height="45.0" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#StrengthenMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#StrengthenMaleBrute-${id}-shape11`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#StrengthenMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite60`} />
          <use height="44.25" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#StrengthenMaleBrute-${id}-shape12`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite62`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`StrengthenMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite66`} />
          <use height="35.0" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite67`} />
          <use height="41.1" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#StrengthenMaleBrute-${id}-shape13`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#StrengthenMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#StrengthenMaleBrute-${id}-shape14`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`StrengthenMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`StrengthenMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#StrengthenMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`StrengthenMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#StrengthenMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`StrengthenMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#StrengthenMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`StrengthenMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`StrengthenMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#StrengthenMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#StrengthenMaleBrute-${id}-shape15`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`StrengthenMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#StrengthenMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#StrengthenMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`StrengthenMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#StrengthenMaleBrute-${id}-shape17`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#StrengthenMaleBrute-${id}-shape18`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#StrengthenMaleBrute-${id}-shape20`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`StrengthenMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#StrengthenMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#StrengthenMaleBrute-${id}-shape21`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#StrengthenMaleBrute-${id}-shape22`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#StrengthenMaleBrute-${id}-sprite85`} />
          <use height="26.45" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#StrengthenMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#StrengthenMaleBrute-${id}-shape23`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#StrengthenMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#StrengthenMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#StrengthenMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#StrengthenMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`StrengthenMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#StrengthenMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`StrengthenMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#StrengthenMaleBrute-${id}-sprite96`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`StrengthenMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`StrengthenMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#StrengthenMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`StrengthenMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#StrengthenMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`StrengthenMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#StrengthenMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#StrengthenMaleBrute-${id}-shape24`} />
        </g>
        <g id={`StrengthenMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
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

export default StrengthenMaleBrute;