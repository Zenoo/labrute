/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface WinMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const WinMaleBrute_WIDTH = 153.05;
export const WinMaleBrute_HEIGHT = 171.05;
export const WinMaleBrute_FRAMES = 55;
export const WinMaleBrute_X_OFFSET = 62.8;
export const WinMaleBrute_Y_OFFSET = 154.35;
export const WinMaleBrute_MARGIN = 30;

const WinMaleBrute = ({ id, inverted, sx, ...rest }: WinMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: WinMaleBrute_WIDTH,
      height: WinMaleBrute_HEIGHT,
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
          ? -(WinMaleBrute_WIDTH + WinMaleBrute_MARGIN)
            * (WinMaleBrute_FRAMES - 1)
            - WinMaleBrute_MARGIN
          : 0,
        height: 200,
        width: (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * WinMaleBrute_FRAMES,
        animation: `WinMaleBrute${inverted ? 'Inverted' : ''} 1.37s steps(${WinMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 0}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 4.1538, -32.5698)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 1}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 22.8411, -48.5214)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3877, -0.0918, 0.0918, 0.3877, 4.1205, -32.6163)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0779, 0.3902, 0.3902, -0.0779, 4.0759, -42.2437)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3564, 0.1762, 0.1762, 0.3564, 16.6181, -47.4981)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 1.0E-4, -1.0E-4, 0.3983, 8.6936, -13.1092)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3945, 0.0366, 0.023, 0.2472, 24.855, -18.6703)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1259, 0.3749, 0.3749, 0.1259, 3.0803, -27.2498)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.738, -12.9877)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 1.0E-4, 1.0E-4, 0.3987, 10.8095, -28.1687)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2882, -0.2724, -0.1744, 0.1846, 1.3568, -17.0671)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3454, -0.198, -0.2118, 0.3375, 15.994, -21.3814)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3454, -0.1982, -0.1982, 0.3454, 21.402, -28.6892)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0529, -0.0529, 0.3326, 33.2741, -61.5336)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3724, -0.1398, -0.1398, 0.3724, -10.7929, -30.5367)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0019, -0.3987, -0.3987, 0.0019, 1.0883, -26.6465)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0915, -0.3872, -0.3872, 0.0915, 10.2336, -27.4658)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.1997, -0.3445, -0.3445, 0.1997, 7.6886, -26.2085)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 2}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3555, 0.1778, 0.1778, 0.3555, 22.6849, -48.4729)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3878, -0.0915, 0.0915, 0.3878, 4.022, -32.6748)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0744, 0.3908, 0.3908, -0.0744, 4.0853, -42.3107)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3579, 0.173, 0.173, 0.3579, 16.6299, -47.4823)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 4.0E-4, -4.0E-4, 0.3983, 8.5976, -13.1124)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0365, 0.023, 0.2484, 24.7544, -18.7725)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1289, 0.3738, 0.3738, 0.1289, 3.0894, -27.3364)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3388, -0.206, -0.2061, 0.3389, 0.7384, -12.9906)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 3.0E-4, 3.0E-4, 0.3987, 10.705, -28.2737)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2894, -0.271, -0.1741, 0.1858, 1.3208, -17.0873)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.347, -0.1952, -0.2101, 0.3385, 15.9735, -21.6316)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3455, -0.1979, -0.1979, 0.3455, 21.3522, -28.7519)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0528, -0.0528, 0.3326, 33.064, -61.643)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3737, -0.1363, -0.1363, 0.3737, -10.7393, -30.545)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0087, -0.3986, -0.3987, 0.0087, 1.1301, -26.7598)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.0964, -0.3859, -0.3861, 0.0965, 10.1125, -27.6934)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.204, -0.3419, -0.3419, 0.204, 7.6882, -26.3691)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 3}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3548, 0.1792, 0.1792, 0.3548, 22.4806, -48.4504)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3881, -0.0899, 0.0899, 0.3881, 3.8814, -32.6355)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0691, 0.3918, 0.3918, -0.0691, 3.9773, -42.462)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3608, 0.1668, 0.1668, 0.3608, 16.5925, -47.4553)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0021, -0.0021, 0.3983, 8.4205, -13.1358)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0364, 0.0231, 0.2504, 24.654, -18.8769)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1323, 0.3726, 0.3726, 0.1323, 3.006, -27.3707)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3316, -8.3555)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3395, -0.2047, -0.2048, 0.3397, 0.6972, -13.0697)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.002, 0.002, 0.3987, 10.5743, -28.4117)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2916, -0.2685, -0.1732, 0.1881, 1.2974, -17.2257)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3488, -0.1919, -0.2058, 0.3412, 15.8802, -21.7631)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3471, -0.1951, -0.1951, 0.3471, 21.1059, -29.0355)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3327, -0.0514, -0.0514, 0.3327, 32.5912, -61.8819)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3765, -0.1283, -0.1283, 0.3765, -10.6325, -30.4756)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0193, -0.3982, -0.3985, 0.0193, 1.1949, -26.9385)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1033, -0.3841, -0.3844, 0.1034, 10.0214, -27.9758)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2101, -0.3381, -0.3381, 0.2101, 7.7723, -26.6359)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 4}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3546, 0.1795, 0.1795, 0.3546, 22.1183, -48.4056)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3885, -0.0881, 0.0881, 0.3885, 3.6409, -32.6023)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0607, 0.3932, 0.3932, -0.0607, 3.8276, -42.7216)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3644, 0.1588, 0.1588, 0.3644, 16.5123, -47.4859)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3982, 0.0054, -0.0054, 0.3982, 8.1634, -13.2279)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3946, 0.0348, 0.0224, 0.2534, 24.4113, -18.8437)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1373, 0.3707, 0.3707, 0.1373, 3.0531, -27.5965)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3319, -8.3558)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3396, -0.2045, -0.2047, 0.34, 0.7485, -13.1254)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0038, 0.0038, 0.3987, 10.4408, -28.6027)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2941, -0.2658, -0.1725, 0.1909, 1.2766, -17.3688)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3521, -0.1858, -0.201, 0.344, 15.7254, -22.2309)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3481, -0.1934, -0.1934, 0.3481, 20.8076, -29.372)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3329, -0.0499, -0.0499, 0.3329, 32.1128, -62.2794)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3797, -0.1183, -0.1183, 0.3797, -10.6277, -30.3885)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0349, -0.397, -0.3976, 0.035, 1.2521, -27.1631)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1147, -0.3808, -0.3817, 0.1136, 9.8512, -28.4054)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2189, -0.3324, -0.3324, 0.2189, 7.8605, -26.9328)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 5}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3538, 0.181, 0.181, 0.3538, 21.6567, -48.3852)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3892, -0.0849, 0.0849, 0.3892, 3.3096, -32.7214)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0503, 0.3946, 0.3946, -0.0503, 3.6152, -42.9618)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.369, 0.1477, 0.1477, 0.369, 16.4764, -47.445)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3981, 0.0088, -0.0088, 0.3981, 7.8593, -13.2722)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3947, 0.0332, 0.0216, 0.2571, 24.1177, -19.0124)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1438, 0.3681, 0.3681, 0.1438, 3.0815, -27.9125)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3322, -8.4062)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3404, -0.2031, -0.2034, 0.341, 0.6582, -13.2074)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3986, 0.0071, 0.0071, 0.3986, 10.179, -28.8263)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.2976, -0.2617, -0.1712, 0.1946, 1.2173, -17.6305)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.356, -0.1781, -0.1935, 0.3482, 15.5605, -22.7152)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3498, -0.1902, -0.1891, 0.3504, 20.4862, -29.8348)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3333, -0.0472, -0.0472, 0.3333, 31.3717, -62.8028)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3836, -0.105, -0.105, 0.3836, -10.578, -30.2541)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0541, -0.3947, -0.3956, 0.0543, 1.2678, -27.5201)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.128, -0.3765, -0.3778, 0.127, 9.6437, -29.0226)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2304, -0.3245, -0.3245, 0.2304, 7.986, -27.3622)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 6}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3522, 0.1838, 0.1838, 0.3522, 21.1458, -48.3393)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3899, -0.0815, 0.0815, 0.3899, 2.9298, -32.746)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0367, 0.3961, 0.3961, -0.0367, 3.4677, -43.3031)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3739, 0.1347, 0.1347, 0.3739, 16.4405, -47.5008)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.398, 0.0125, -0.0125, 0.398, 7.4581, -13.3684)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3947, 0.0328, 0.0217, 0.2616, 23.7172, -19.2209)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.153, 0.3642, 0.3642, 0.153, 3.1136, -28.1601)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -6.333, -8.4065)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3412, -0.2016, -0.2021, 0.3421, 0.6179, -13.2919)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3985, 0.0105, 0.0105, 0.3985, 9.9147, -29.1525)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3021, -0.2564, -0.1693, 0.1994, 1.1189, -17.9116)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3604, -0.1688, -0.1844, 0.3531, 15.3443, -23.3084)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3522, -0.1858, -0.1858, 0.3522, 19.9593, -30.3374)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3335, -0.0454, -0.0454, 0.3335, 30.5778, -63.3131)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3878, -0.0882, -0.0882, 0.3878, -10.5886, -30.0719)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.0782, -0.3906, -0.3916, 0.0798, 1.2989, -27.9646)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.143, -0.3709, -0.3722, 0.1434, 9.3397, -29.6276)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2442, -0.3142, -0.3142, 0.2442, 8.0303, -27.9292)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 7}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3513, 0.1855, 0.1855, 0.3513, 20.5266, -48.1716)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3906, -0.078, 0.078, 0.3906, 2.5527, -32.8761)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0211, 0.3972, 0.3972, -0.0211, 3.215, -43.7164)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3794, 0.1183, 0.1183, 0.3794, 16.386, -47.5183)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3977, 0.0176, -0.0176, 0.3977, 7.0273, -13.4325)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3949, 0.0298, 0.0201, 0.267, 23.2807, -19.3042)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1624, 0.36, 0.36, 0.1624, 3.0516, -28.4509)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3336, -8.4065)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.342, -0.2001, -0.2008, 0.3432, 0.5782, -13.3775)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3983, 0.0141, 0.0141, 0.3983, 9.5463, -29.4817)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3075, -0.2498, -0.1668, 0.2053, 0.9801, -18.2626)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3649, -0.1589, -0.1735, 0.3585, 14.9566, -24.0244)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3546, -0.1811, -0.1811, 0.3546, 19.5073, -30.9602)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.334, -0.0414, -0.0414, 0.334, 29.5132, -64.0192)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3915, -0.0693, -0.0693, 0.3915, -10.4646, -29.8708)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1068, -0.3836, -0.3853, 0.1073, 1.338, -28.4507)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1621, -0.3629, -0.3645, 0.1626, 8.9272, -30.4944)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2591, -0.3019, -0.3019, 0.2591, 8.0574, -28.5679)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 8}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3496, 0.1884, 0.1884, 0.3496, 19.7574, -48.1772)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3913, -0.0744, 0.0744, 0.3913, 1.978, -32.9108)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0036, 0.3978, 0.3978, -0.0036, 3.0105, -44.0985)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3846, 0.0999, 0.0999, 0.3846, 16.2675, -47.4685)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3974, 0.0229, -0.0229, 0.3974, 6.5001, -13.5486)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.395, 0.0279, 0.0193, 0.2732, 22.7378, -19.5778)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1733, 0.3547, 0.3547, 0.1733, 3.0686, -28.8255)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.3842, -8.4066)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3428, -0.1984, -0.1993, 0.3444, 0.5382, -13.5151)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3981, 0.0191, 0.0191, 0.3981, 9.1492, -29.942)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3137, -0.2418, -0.1635, 0.2121, 0.8997, -18.6842)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3701, -0.146, -0.1608, 0.3643, 14.6256, -24.8869)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3577, -0.175, -0.175, 0.3577, 18.8002, -31.7485)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3343, -0.0383, -0.0383, 0.3343, 28.3458, -64.8604)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3948, -0.0468, -0.0468, 0.3948, -10.5135, -29.6697)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1383, -0.3732, -0.3749, 0.1404, 1.2723, -29.2454)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.1826, -0.3529, -0.355, 0.1834, 8.4542, -31.5327)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2768, -0.2856, -0.2856, 0.2768, 8.1201, -29.3718)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 9}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3478, 0.1914, 0.1914, 0.3478, 18.9845, -48.083)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3922, -0.0692, 0.0692, 0.3922, 1.4645, -33.0482)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0157, 0.3973, 0.3973, 0.0157, 2.6592, -44.5895)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3893, 0.0793, 0.0793, 0.3893, 16.0268, -47.3438)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3969, 0.0296, -0.0296, 0.3969, 5.8945, -13.6316)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3951, 0.026, 0.0184, 0.2803, 22.1435, -19.852)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1843, 0.3489, 0.3489, 0.1843, 3.0896, -29.2408)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0264, -0.0264, 0.3974, -6.385, -8.4569)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3443, -0.1956, -0.1967, 0.3463, 0.4059, -13.6293)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3978, 0.023, 0.023, 0.3978, 8.7232, -30.3759)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3199, -0.2333, -0.16, 0.2194, 0.8187, -19.0627)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3755, -0.1313, -0.1464, 0.3703, 14.1777, -25.7578)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3607, -0.1687, -0.1687, 0.3607, 18.1367, -32.5447)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3347, -0.034, -0.034, 0.3347, 26.9605, -65.8255)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.397, -0.0208, -0.0208, 0.397, -10.544, -29.4164)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.1733, -0.3581, -0.3607, 0.1747, 1.1687, -30.1086)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2065, -0.3394, -0.3426, 0.2066, 7.8929, -32.6457)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.2949, -0.2668, -0.2668, 0.2949, 8.0104, -30.2487)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 10}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.346, 0.1944, 0.1944, 0.346, 18.1076, -47.8882)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3932, -0.0627, 0.0627, 0.3932, 0.8145, -33.1877)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0382, 0.3957, 0.3957, 0.0382, 2.4407, -45.0547)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3935, 0.054, 0.054, 0.3935, 15.8185, -47.1667)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3963, 0.0366, -0.0366, 0.3963, 5.1933, -13.8149)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3952, 0.0228, 0.0166, 0.2882, 21.5566, -20.0903)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.1978, 0.3412, 0.3412, 0.1978, 3.11, -29.626)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3858, -8.4572)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3452, -0.1939, -0.1953, 0.3477, 0.3661, -13.7701)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3973, 0.0296, 0.0296, 0.3973, 8.2418, -30.8681)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3268, -0.2233, -0.1556, 0.2276, 0.6433, -19.5627)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3812, -0.1134, -0.13, 0.3762, 13.6674, -26.876)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3642, -0.1609, -0.1609, 0.3642, 17.3645, -33.5054)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3351, -0.0296, -0.0296, 0.3351, 25.4662, -66.7957)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3974, 0.0073, 0.0073, 0.3974, -10.6104, -29.0871)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2111, -0.3371, -0.34, 0.2131, 1.0167, -31.0604)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2311, -0.323, -0.3267, 0.2318, 7.1747, -33.9082)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.313, -0.2452, -0.2452, 0.313, 7.7081, -31.1967)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 11}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3441, 0.1975, 0.1975, 0.3441, 17.0762, -47.7947)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.394, -0.0573, 0.0573, 0.394, 0.1594, -33.3346)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0625, 0.3924, 0.3924, 0.0625, 2.1329, -45.5143)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3962, 0.0279, 0.0279, 0.3962, 15.4797, -46.8828)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3955, 0.0437, -0.0437, 0.3955, 4.446, -13.9487)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3954, 0.0194, 0.0146, 0.2969, 20.7691, -20.2299)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2123, 0.332, 0.332, 0.2123, 3.1047, -30.1367)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3864, -8.5079)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3467, -0.1909, -0.1926, 0.3497, 0.3333, -14.0383)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3968, 0.0351, 0.0351, 0.3968, 7.6811, -31.4342)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3342, -0.2118, -0.1501, 0.2368, 0.422, -20.1854)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3862, -0.0949, -0.1117, 0.382, 13.1119, -28.0628)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3677, -0.1529, -0.1529, 0.3677, 16.4326, -34.524)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, -0.025, -0.025, 0.3353, 23.8604, -67.9164)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3952, 0.04, 0.04, 0.3952, -10.6859, -28.7149)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2493, -0.3097, -0.313, 0.2522, 0.5714, -32.2015)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.257, -0.3026, -0.3069, 0.2585, 6.251, -35.3343)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3321, -0.2185, -0.2185, 0.3321, 7.3261, -32.2505)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 12}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3414, 0.2018, 0.2018, 0.3414, 15.8945, -47.722)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3949, -0.0504, 0.0504, 0.3949, -0.6807, -33.3829)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0896, 0.3869, 0.3869, 0.0896, 1.8674, -46.0736)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3971, -3.0E-4, -3.0E-4, 0.3971, 15.1292, -46.7509)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3944, 0.0523, -0.0523, 0.3944, 3.672, -14.0477)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3954, 0.0173, 0.0134, 0.3064, 19.9752, -20.6095)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2278, 0.3213, 0.3213, 0.2278, 3.121, -30.6194)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3872, -8.5082)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3482, -0.1879, -0.1898, 0.3518, 0.2004, -14.1581)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.396, 0.042, 0.042, 0.396, 7.0889, -32.028)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3414, -0.1997, -0.1441, 0.2464, 0.1962, -20.7659)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3906, -0.0744, -0.0913, 0.3873, 12.3661, -29.2537)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.371, -0.1446, -0.1446, 0.371, 15.3924, -35.651)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3357, -0.0192, -0.0192, 0.3357, 21.9323, -69.16)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3899, 0.0745, 0.0745, 0.3899, -10.8648, -28.3557)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.2866, -0.2754, -0.2779, 0.2914, -0.072, -33.4904)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.2826, -0.2787, -0.2835, 0.285, 5.1963, -36.8804)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3499, -0.1885, -0.1885, 0.3499, 6.8255, -33.5536)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 13}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3386, 0.2061, 0.2061, 0.3386, 14.7577, -47.5471)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3958, -0.042, 0.042, 0.3958, -1.4521, -33.6311)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1181, 0.379, 0.379, 0.1181, 1.5674, -46.555)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3954, -0.0331, -0.0331, 0.3954, 14.6435, -46.3803)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3928, 0.0624, -0.0624, 0.3928, 2.8225, -14.26)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, 0.0125, 0.01, 0.3168, 19.0937, -20.9137)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2441, 0.3088, 0.3088, 0.2441, 3.0564, -31.1699)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -6.4384, -8.5083)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3497, -0.1847, -0.187, 0.3539, 0.1172, -14.3295)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.395, 0.0504, 0.0504, 0.395, 6.4137, -32.7996)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3488, -0.186, -0.1369, 0.2568, 0.0205, -21.42)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3941, -0.052, -0.0678, 0.392, 11.5074, -30.6488)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3747, -0.1348, -0.1348, 0.3747, 14.3355, -36.8406)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3358, -0.0134, -0.0134, 0.3358, 19.99, -70.5014)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3802, 0.1128, 0.1128, 0.3802, -11.0254, -27.9853)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3222, -0.2326, -0.2348, 0.3281, -0.9268, -34.8638)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.309, -0.249, -0.2541, 0.3125, 3.9342, -38.5175)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3664, -0.1539, -0.154, 0.3664, 5.9629, -34.7569)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 14}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3357, 0.2105, 0.2105, 0.3357, 13.4656, -47.3215)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3965, -0.0348, 0.0348, 0.3965, -2.3794, -33.6877)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1489, 0.3677, 0.3677, 0.1489, 1.3152, -47.0045)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3907, -0.0674, -0.0674, 0.3907, 13.8997, -45.9984)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.391, 0.0725, -0.0725, 0.391, 1.8787, -14.4205)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3956, 0.0089, 0.0074, 0.328, 18.2064, -21.2573)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.26, 0.2952, 0.2952, 0.26, 3.0868, -31.7489)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.4395, -8.5589)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3512, -0.1815, -0.1841, 0.3561, -0.0665, -14.6026)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3939, 0.0575, 0.0575, 0.3939, 5.7595, -33.4942)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3565, -0.1705, -0.1281, 0.2679, -0.2074, -22.1485)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3966, -0.0263, -0.0435, 0.3953, 10.7083, -32.1272)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3786, -0.1235, -0.1235, 0.3786, 13.1041, -38.1922)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3359, -0.0073, -0.0073, 0.3359, 17.7354, -71.8941)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.366, 0.152, 0.152, 0.366, -11.2572, -27.4065)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3539, -0.1807, -0.1825, 0.3609, -2.063, -36.411)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3334, -0.215, -0.2203, 0.3382, 2.4408, -40.4051)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3804, -0.1148, -0.1148, 0.3804, 4.8872, -36.0275)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 15}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3326, 0.2149, 0.2149, 0.3326, 12.0693, -47.1436)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3971, -0.0261, 0.0261, 0.3971, -3.2852, -33.8438)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1804, 0.3531, 0.3531, 0.1804, 1.0285, -47.5468)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3822, -0.1044, -0.1044, 0.3822, 13.043, -45.4106)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3888, 0.0829, -0.0829, 0.3888, 0.7905, -14.629)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, 0.0053, 0.0046, 0.34, 17.1681, -21.6028)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2773, 0.2786, 0.2786, 0.2773, 3.0496, -32.3257)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0262, -0.0262, 0.3973, -6.4409, -8.6093)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3527, -0.1783, -0.1811, 0.3584, -0.0509, -14.7777)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3925, 0.0661, 0.0661, 0.3925, 4.9209, -34.2142)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.364, -0.1532, -0.1177, 0.2797, -0.5414, -22.9015)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3973, -1.0E-4, -0.0174, 0.3972, 9.6347, -33.6567)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3822, -0.1118, -0.1118, 0.3822, 11.8066, -39.7498)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3359, -1.0E-4, -1.0E-4, 0.3359, 15.4017, -73.4472)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3462, 0.1923, 0.1923, 0.3462, -11.6286, -26.8217)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3789, -0.1199, -0.1208, 0.3871, -3.5876, -37.9868)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3563, -0.1745, -0.181, 0.3619, 0.7476, -42.3375)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.391, -0.071, -0.071, 0.391, 3.3552, -37.3254)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 16}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3287, 0.2204, 0.2204, 0.3287, 10.5213, -46.9833)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3976, -0.016, 0.016, 0.3976, -4.2677, -34.0481)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2121, 0.3348, 0.3348, 0.2121, 0.7043, -47.867)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3694, -0.1422, -0.1422, 0.3694, 12.0752, -44.8618)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.386, 0.0946, -0.0946, 0.386, -0.2713, -14.8475)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, 3.0E-4, 3.0E-4, 0.3528, 16.0357, -22.0607)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.2937, 0.2607, 0.2607, 0.2937, 3.0005, -32.9756)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.4921, -8.6594)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3548, -0.1737, -0.1769, 0.3613, -0.2296, -15.0805)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3905, 0.0761, 0.0761, 0.3905, 4.0464, -35.1074)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3709, -0.1353, -0.1064, 0.2916, -0.9369, -23.7129)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3961, 0.0279, 0.0106, 0.3973, 8.478, -35.219)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3855, -0.0999, -0.0999, 0.3856, 10.4421, -41.1624)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3357, 0.0061, 0.0061, 0.3357, 12.9652, -75.0371)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.3207, 0.2319, 0.2319, 0.3207, -12.0806, -26.1501)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.394, -0.0522, -0.0517, 0.4034, -5.4833, -39.5973)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3749, -0.1297, -0.1358, 0.3822, -1.3021, -44.3907)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3966, -0.0243, -0.0243, 0.3966, 1.6117, -38.5349)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 17}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3252, 0.2263, 0.2263, 0.3252, 8.9248, -46.7916)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3978, -0.0072, 0.0072, 0.3978, -5.3087, -34.2038)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2449, 0.3121, 0.3121, 0.2449, 0.3715, -48.267)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3519, -0.1817, -0.1817, 0.3519, 10.8992, -44.2158)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3831, 0.1066, -0.1066, 0.3831, -1.3769, -15.0183)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3954, -0.0036, -0.0033, 0.3663, 14.7982, -22.7064)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3112, 0.2402, 0.2402, 0.3112, 2.8252, -33.4774)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -6.4905, -8.6607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3567, -0.1705, -0.1741, 0.364, -0.3053, -15.3062)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3886, 0.0863, 0.0863, 0.3886, 3.1681, -36.0046)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0932, 0.3041, -1.1389, -24.4973)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.0589, 0.0418, 0.3951, 7.1647, -36.9995)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.9067, -42.7354)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0149, 0.0149, 0.3353, 10.1706, -76.8013)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.288, 0.272, 0.272, 0.288, -12.5917, -25.355)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3969, 0.0209, 0.0232, 0.4073, -7.8256, -41.0686)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3886, -0.081, -0.0865, 0.3978, -3.642, -46.4243)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0263, 0.0262, 0.3964, -0.6168, -39.6628)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 18}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3207, 0.2315, 0.2315, 0.3207, 8.6647, -47.0091)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3975, -0.0139, 0.0139, 0.3975, -5.4389, -34.22)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.239, 0.3159, 0.3159, 0.239, 0.1436, -48.3023)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3531, -0.1783, -0.1783, 0.3531, 11.0155, -44.2923)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3859, 0.0949, -0.0949, 0.3859, -1.7647, -14.8009)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, -0.002, -0.0018, 0.3664, 14.4439, -22.4044)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3243, 0.2213, 0.2213, 0.3243, 3.165, -33.1011)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.5935, -8.6103)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3562, -0.1704, -0.1736, 0.3628, -0.4171, -15.2033)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3883, 0.0862, 0.0862, 0.3883, 3.1136, -35.9981)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1155, -0.0936, 0.3055, -1.1918, -24.5034)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3923, 0.0587, 0.0416, 0.3949, 7.1122, -37.042)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.7955, -42.6845)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.2281, -76.7891)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2875, 0.2716, 0.2716, 0.2875, -12.6472, -25.397)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3971, 0.0177, 0.02, 0.4074, -7.871, -41.105)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6481, -46.3711)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3963, 0.0261, 0.0261, 0.3963, -0.7139, -39.7017)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 19}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3167, 0.2371, 0.2371, 0.3167, 8.4606, -47.2461)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3973, -0.0195, 0.0195, 0.3973, -5.5532, -34.2745)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2336, 0.3201, 0.3201, 0.2336, -0.0314, -48.3011)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3553, -0.174, -0.174, 0.3553, 11.1946, -44.4674)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3884, 0.0847, -0.0847, 0.3884, -2.1298, -14.698)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3955, -0.0017, -0.0016, 0.3665, 14.0943, -22.1115)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3373, 0.2012, 0.2012, 0.3373, 3.555, -32.8021)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.6929, -8.5603)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3561, -0.1705, -0.1734, 0.362, -0.4687, -14.9473)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 3.0637, -35.9488)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1155, -0.094, 0.3071, -1.2402, -24.558)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0587, 0.0416, 0.395, 7.1125, -37.0422)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.7461, -42.6839)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.2272, -76.84)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2716, 0.2716, 0.2876, -12.7468, -25.4973)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3972, 0.0159, 0.0181, 0.4075, -7.7886, -41.1195)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6481, -46.4211)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3963, 0.0261, 0.0261, 0.3963, -0.7639, -39.8017)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 20}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3133, 0.2415, 0.2415, 0.3133, 8.2527, -47.4629)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3968, -0.0264, 0.0264, 0.3968, -5.6281, -34.1826)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2291, 0.3233, 0.3233, 0.2291, -0.2729, -48.3477)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3569, -0.1708, -0.1708, 0.3569, 11.1783, -44.5948)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3906, 0.0744, -0.0744, 0.3906, -2.4415, -14.4407)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3956, -2.0E-4, -2.0E-4, 0.3665, 13.7899, -21.9564)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.349, 0.1804, 0.1804, 0.349, 3.9232, -32.4865)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.7429, -8.5103)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3555, -0.1718, -0.1743, 0.3607, -0.4761, -14.9158)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 3.0637, -35.9488)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1156, -0.0946, 0.3088, -1.2384, -24.4125)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 7.0625, -37.0926)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.7469, -42.6848)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.2772, -76.84)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2716, 0.2716, 0.2876, -12.7967, -25.5479)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3972, 0.0141, 0.0162, 0.4076, -7.8074, -41.0834)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6477, -46.4714)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -0.8138, -39.8522)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 21}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3091, 0.247, 0.247, 0.3091, 7.995, -47.6915)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3963, -0.0332, 0.0332, 0.3963, -5.6006, -34.1892)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2235, 0.3273, 0.3273, 0.2235, -0.4475, -48.3915)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3585, -0.1676, -0.1676, 0.3585, 11.3605, -44.6226)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3925, 0.0641, -0.0641, 0.3925, -2.8509, -14.279)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3956, 0.0, 0.0, 0.3666, 13.4912, -21.6634)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.359, 0.1601, 0.1601, 0.359, 4.257, -32.0761)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.7929, -8.4603)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3555, -0.172, -0.1741, 0.3599, -0.5774, -14.7092)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 3.014, -35.899)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1155, -0.0951, 0.3105, -1.2867, -24.4674)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0587, 0.0416, 0.395, 7.013, -37.0925)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.6975, -42.684)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.2772, -76.84)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2716, 0.2716, 0.2876, -12.8463, -25.5982)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3973, 0.0123, 0.0144, 0.4077, -7.8254, -41.0974)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6477, -46.5214)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -0.8638, -39.9529)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 22}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3047, 0.2523, 0.2523, 0.3047, 7.7864, -47.9151)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3956, -0.0401, 0.0401, 0.3956, -5.7176, -34.2443)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2178, 0.3311, 0.3311, 0.2178, -0.6222, -48.4817)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.36, -0.1644, -0.1644, 0.36, 11.4919, -44.7005)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3942, 0.0537, -0.0537, 0.3942, -3.1574, -14.0634)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3957, 2.0E-4, 2.0E-4, 0.3666, 13.1912, -21.3704)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3682, 0.138, 0.138, 0.3682, 4.5307, -31.7307)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.8429, -8.4103)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3555, -0.1721, -0.1739, 0.3591, -0.6294, -14.6033)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 2.9644, -35.8993)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1155, -0.0956, 0.3121, -1.2854, -24.4222)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 7.013, -37.093)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.6475, -42.684)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.3272, -76.84)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2716, 0.2716, 0.2876, -12.8962, -25.6485)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3974, 0.0105, 0.0125, 0.4078, -7.8445, -41.0611)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6974, -46.5221)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -0.9138, -40.0029)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 23}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3003, 0.2576, 0.2576, 0.3003, 7.5268, -48.1851)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3948, -0.047, 0.047, 0.3948, -5.8313, -34.2487)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2121, 0.3349, 0.3349, 0.2121, -0.8964, -48.5184)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3615, -0.1612, -0.1612, 0.3615, 11.5712, -44.8276)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3957, 0.042, -0.042, 0.3957, -3.6293, -13.9285)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3957, 0.0018, 0.0016, 0.3667, 12.8368, -21.1156)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3761, 0.1155, 0.1155, 0.3761, 4.8302, -31.3228)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.9426, -8.3605)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3549, -0.1734, -0.1748, 0.3578, -0.6871, -14.4715)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 2.9147, -35.8996)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1155, -0.0961, 0.3138, -1.3336, -24.3769)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 6.9635, -37.093)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.5981, -42.6843)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.3281, -76.8909)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2717, 0.2717, 0.2876, -12.9961, -25.799)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3975, 0.0073, 0.0093, 0.4079, -7.8407, -41.0984)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6971, -46.5221)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.0138, -40.1029)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 24}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2958, 0.2628, 0.2628, 0.2958, 7.3149, -48.3998)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3939, -0.0538, 0.0538, 0.3939, -5.8903, -34.3012)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2063, 0.3386, 0.3386, 0.2063, -1.1211, -48.5528)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3635, -0.1568, -0.1568, 0.3635, 11.7416, -44.9516)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3967, 0.0315, -0.0315, 0.3967, -3.929, -13.7038)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3958, 0.002, 0.0019, 0.3667, 12.5376, -20.8226)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3823, 0.0937, 0.0937, 0.3823, 5.0963, -30.8766)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -6.9926, -8.3105)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3548, -0.1735, -0.1746, 0.357, -0.739, -14.3155)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 2.8651, -35.8499)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0966, 0.3154, -1.4322, -24.3812)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 6.9135, -37.0932)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.5486, -42.6843)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.3281, -76.8909)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2717, 0.2717, 0.2876, -13.0459, -25.8493)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3975, 0.0055, 0.0074, 0.408, -7.8601, -41.1122)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3884, -0.0809, -0.0864, 0.3976, -3.6968, -46.5727)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.0638, -40.1535)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 25}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2912, 0.2679, 0.2679, 0.2912, 7.0525, -48.6113)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3928, -0.0606, 0.0606, 0.3928, -5.9942, -34.203)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2004, 0.3421, 0.3421, 0.2004, -1.3452, -48.5837)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3649, -0.1535, -0.1535, 0.3649, 11.7686, -45.0792)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3976, 0.021, -0.021, 0.3976, -4.2752, -13.4761)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3958, 0.0035, 0.0033, 0.3668, 12.2327, -20.5679)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3875, 0.0703, 0.0703, 0.3875, 5.3963, -30.4979)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.0426, -8.2605)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3548, -0.1736, -0.1744, 0.3563, -0.7907, -14.2096)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 2.8651, -35.8499)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0971, 0.3171, -1.4306, -24.3359)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 6.8638, -37.143)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.5492, -42.6349)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.3772, -76.8917)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2877, 0.2717, 0.2717, 0.2877, -13.0955, -25.8997)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 0.0037, 0.0056, 0.4081, -7.8791, -41.1251)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.0809, -0.0864, 0.3976, -3.6962, -46.5724)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.1131, -40.254)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 27 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 26}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2865, 0.273, 0.273, 0.2865, 6.8386, -48.8166)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3917, -0.0674, 0.0674, 0.3917, -6.0454, -34.2039)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1956, 0.345, 0.345, 0.1956, -1.4365, -48.6167)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3663, -0.1503, -0.1503, 0.3663, 11.9951, -45.1064)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3981, 0.0105, -0.0105, 0.3981, -4.6182, -13.244)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0038, 0.0035, 0.3668, 11.8828, -20.2749)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3913, 0.0467, 0.0467, 0.3913, 5.52, -30.0105)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.1425, -8.2111)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3548, -0.1738, -0.1741, 0.3555, -0.8924, -14.1037)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3884, 0.0862, 0.0862, 0.3884, 2.8152, -35.8011)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0976, 0.3187, -1.4289, -24.3905)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0416, 0.395, 6.8638, -37.1432)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3889, -0.0863, -0.0863, 0.3889, 8.4995, -42.6346)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0147, 0.0147, 0.3353, 10.3772, -76.9417)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2877, 0.2717, 0.2717, 0.2877, -13.1952, -26.0003)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 0.0019, 0.0037, 0.4081, -7.898, -41.0384)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.0809, -0.0864, 0.3977, -3.6958, -46.6224)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.1636, -40.304)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 28 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 27}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2823, 0.2783, 0.2783, 0.2823, 6.5839, -49.0429)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3906, -0.0744, 0.0744, 0.3906, -6.1005, -34.1995)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1899, 0.3488, 0.3488, 0.1899, -1.6616, -48.6561)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3681, -0.1472, -0.1472, 0.3681, 12.086, -45.1841)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -4.9576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0056, 0.0052, 0.3669, 11.6271, -20.0787)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.9135, -29.596)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -7.1394, -8.1606)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3546, -0.1754, -0.1754, 0.3546, -1.0406, -13.9678)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3887, 0.0863, 0.0863, 0.3887, 2.7698, -35.8076)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1158, -0.0983, 0.3207, -1.5227, -24.3435)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3926, 0.0591, 0.0419, 0.3951, 6.815, -37.1038)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3892, -0.0865, -0.0865, 0.3892, 8.5125, -42.6344)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.015, 0.015, 0.3353, 10.4651, -76.9582)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2882, 0.2721, 0.2721, 0.2882, -13.239, -26.0085)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 1.0E-4, 0.0019, 0.4081, -7.919, -41.053)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3887, -0.0811, -0.0865, 0.3979, -3.6898, -46.6256)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0264, 0.0264, 0.3964, -1.1714, -40.4193)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 29 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 28}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2855, 0.2742, 0.2742, 0.2855, 6.6793, -48.8325)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3916, -0.0677, 0.0677, 0.3916, -6.0474, -34.2426)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1943, 0.3458, 0.3458, 0.1943, -1.6261, -48.6634)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3664, -0.1501, -0.1501, 0.3664, 12.0458, -45.0123)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.0076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3668, 11.5278, -20.071)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.8632, -29.5913)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.2417, -8.1608)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3542, -0.1751, -0.1751, 0.3542, -1.0997, -13.9714)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3885, 0.0862, 0.0862, 0.3885, 2.7656, -35.8014)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0981, 0.3204, -1.5768, -24.3451)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0417, 0.395, 6.7639, -37.1447)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.389, -0.0864, -0.0863, 0.389, 8.4012, -42.6344)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.5262, -76.8944)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2878, 0.2718, 0.2718, 0.2878, -13.2445, -26.0012)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 0.0018, 0.0036, 0.4081, -7.9968, -41.0868)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.0809, -0.0864, 0.3977, -3.7452, -46.573)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.214, -40.4059)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 30 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 29}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.29, 0.2694, 0.2694, 0.29, 6.8834, -48.682)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3925, -0.0625, 0.0625, 0.3925, -6.059, -34.1848)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1989, 0.3432, 0.3432, 0.1989, -1.4914, -48.5821)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3657, -0.1521, -0.1521, 0.3657, 12.1126, -45.0367)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.0076, -13.108)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3668, 11.5777, -20.1214)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.8632, -29.6419)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.2417, -8.2108)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3542, -0.1751, -0.1751, 0.3542, -1.0984, -14.0211)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3885, 0.0862, 0.0862, 0.3885, 2.7663, -35.8519)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3775, -0.1156, -0.0981, 0.3204, -1.5764, -24.3952)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3924, 0.0588, 0.0417, 0.3951, 6.7636, -37.1956)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.389, -0.0864, -0.0864, 0.389, 8.4024, -42.6841)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.4761, -76.9461)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2878, 0.2718, 0.2718, 0.2878, -13.2942, -25.9518)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 0.0035, 0.0054, 0.4081, -8.0263, -41.1725)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.0809, -0.0864, 0.3977, -3.7949, -46.6733)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0261, 0.0261, 0.3964, -1.2652, -40.356)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 31 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 30}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2937, 0.2655, 0.2655, 0.2937, 6.9891, -48.4891)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3934, -0.0572, 0.0572, 0.3934, -6.0685, -34.1779)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2047, 0.3398, 0.3398, 0.2047, -1.4226, -48.5035)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3644, -0.1553, -0.1553, 0.3644, 12.138, -44.9146)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.0576, -13.108)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3668, 11.5276, -20.1223)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.8134, -29.6422)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.2914, -8.211)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3543, -0.1751, -0.1751, 0.3543, -1.1477, -14.0206)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3885, 0.0862, 0.0862, 0.3885, 2.7169, -35.8525)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3775, -0.1156, -0.0982, 0.3205, -1.6262, -24.3948)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.0589, 0.0417, 0.395, 6.7142, -37.1963)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.389, -0.0864, -0.0864, 0.389, 8.3539, -42.6847)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.4752, -76.947)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2878, 0.2719, 0.2719, 0.2878, -13.2937, -26.0027)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 0.0053, 0.0072, 0.408, -8.1058, -41.2083)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.0809, -0.0865, 0.3978, -3.7939, -46.6737)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0262, 0.0262, 0.3964, -1.2656, -40.3578)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 32 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 31}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2982, 0.2605, 0.2605, 0.2982, 7.144, -48.2311)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3943, -0.0506, 0.0506, 0.3943, -6.1138, -34.1673)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2093, 0.337, 0.337, 0.2093, -1.2854, -48.5189)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.363, -0.1585, -0.1585, 0.363, 12.1119, -44.8417)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.1076, -13.108)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.4775, -20.1733)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.8133, -29.6428)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.3411, -8.2107)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3543, -0.1752, -0.1752, 0.3543, -1.1969, -14.0201)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3885, 0.0862, 0.0862, 0.3885, 2.6673, -35.8528)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3775, -0.1156, -0.0982, 0.3205, -1.6757, -24.3947)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.0589, 0.0417, 0.3951, 6.7138, -37.1974)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.3044, -42.7348)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.4234, -76.9469)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2879, 0.2719, 0.2719, 0.2879, -13.2429, -25.9532)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3975, 0.0071, 0.009, 0.408, -8.1356, -41.2441)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3885, -0.081, -0.0865, 0.3978, -3.8436, -46.6737)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0262, 0.0262, 0.3964, -1.3166, -40.3592)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 33 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 32}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3018, 0.2565, 0.2565, 0.3018, 7.2993, -48.0313)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.395, -0.0452, 0.0452, 0.395, -6.1161, -34.1602)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.215, 0.3335, 0.3335, 0.215, -1.1153, -48.4349)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3616, -0.1616, -0.1616, 0.3616, 12.1349, -44.7681)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.1076, -13.158)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.4773, -20.1738)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.7636, -29.6931)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.3408, -8.261)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3543, -0.1752, -0.1752, 0.3543, -1.1959, -14.0197)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3886, 0.0862, 0.0862, 0.3886, 2.6677, -35.9037)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3205, -1.6751, -24.3946)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.0589, 0.0418, 0.3951, 6.7141, -37.1981)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.3062, -42.7345)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.3716, -76.9486)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2879, 0.2719, 0.2719, 0.2879, -13.2424, -25.9541)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3975, 0.0088, 0.0108, 0.4079, -8.2154, -41.2797)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3886, -0.081, -0.0865, 0.3978, -3.8933, -46.6743)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0262, 0.0262, 0.3964, -1.3158, -40.3609)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 34 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 33}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3062, 0.2513, 0.2513, 0.3062, 7.4046, -47.8656)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3956, -0.0399, 0.0399, 0.3956, -6.1662, -34.1027)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2196, 0.3305, 0.3305, 0.2196, -1.027, -48.3462)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3602, -0.1648, -0.1648, 0.3602, 12.1563, -44.5941)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.1576, -13.158)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.4277, -20.2247)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.7635, -29.6937)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.3905, -8.2607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3544, -0.1752, -0.1752, 0.3544, -1.2452, -14.0696)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3886, 0.0863, 0.0863, 0.3886, 2.6174, -35.904)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -1.7247, -24.4443)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.0589, 0.0418, 0.3951, 6.6642, -37.2485)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.2562, -42.7851)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0148, 0.0148, 0.3353, 10.3216, -77.0004)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.288, 0.2719, 0.2719, 0.288, -13.2921, -25.9046)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3974, 0.0106, 0.0127, 0.4079, -8.296, -41.4156)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3886, -0.081, -0.0865, 0.3978, -3.943, -46.724)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0262, 0.0262, 0.3964, -1.3168, -40.3122)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 35 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 34}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3096, 0.2471, 0.2471, 0.3096, 7.6104, -47.6589)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3963, -0.0332, 0.0332, 0.3963, -6.1511, -34.1424)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2252, 0.3268, 0.3268, 0.2252, -0.9048, -48.3575)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3588, -0.168, -0.168, 0.3588, 12.1277, -44.4688)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.2076, -13.158)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.3776, -20.2256)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.7635, -29.6939)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.4405, -8.2607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3544, -0.1752, -0.1752, 0.3544, -1.2942, -14.0695)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3886, 0.0863, 0.0863, 0.3886, 2.5679, -35.9049)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -1.7242, -24.4444)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.059, 0.0418, 0.3951, 6.6145, -37.2501)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.2073, -42.7843)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0149, 0.0149, 0.3353, 10.3197, -77.0021)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.288, 0.272, 0.272, 0.288, -13.2913, -25.9054)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3974, 0.0124, 0.0145, 0.4078, -8.2767, -41.4509)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3886, -0.081, -0.0865, 0.3978, -3.9917, -46.7243)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0263, 0.0263, 0.3964, -1.3179, -40.3135)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 36 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 35}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3139, 0.2418, 0.2418, 0.3139, 7.7149, -47.4339)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3969, -0.0264, 0.0264, 0.3969, -6.0805, -34.0811)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2297, 0.3237, 0.3237, 0.2297, -0.8156, -48.2645)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3573, -0.1711, -0.1711, 0.3573, 12.1477, -44.4939)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.2576, -13.208)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.3275, -20.2765)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0244, 0.0244, 0.3935, 5.7134, -29.7445)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.4905, -8.3107)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3545, -0.1753, -0.1753, 0.3545, -1.3431, -14.0688)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3886, 0.0863, 0.0863, 0.3886, 2.5186, -35.9555)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -1.774, -24.4441)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.059, 0.0419, 0.3951, 6.5649, -37.2511)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3891, -0.0864, -0.0864, 0.3891, 8.1591, -42.8349)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0149, 0.0149, 0.3353, 10.2688, -77.003)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2881, 0.272, 0.272, 0.2881, -13.2908, -25.9062)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3973, 0.0142, 0.0163, 0.4077, -8.3576, -41.4369)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3886, -0.081, -0.0865, 0.3979, -3.9914, -46.7246)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0263, 0.0263, 0.3964, -1.3691, -40.3143)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 37 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 36}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.318, 0.2364, 0.2364, 0.318, 7.8693, -47.1559)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3972, -0.0209, 0.0209, 0.3972, -6.1202, -34.0739)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2352, 0.3197, 0.3197, 0.2352, -0.6922, -48.2203)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3552, -0.1755, -0.1755, 0.3552, 12.1226, -44.2708)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.2576, -13.208)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.3274, -20.2774)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.6637, -29.7448)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.4897, -8.3109)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3545, -0.1753, -0.1753, 0.3545, -1.3424, -14.0686)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3887, 0.0863, 0.0863, 0.3887, 2.5196, -35.9563)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1157, -0.0983, 0.3206, -1.7738, -24.4439)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.059, 0.0419, 0.3951, 6.5646, -37.2515)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3892, -0.0864, -0.0864, 0.3891, 8.1596, -42.8349)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0149, 0.0149, 0.3353, 10.267, -77.0047)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2881, 0.272, 0.272, 0.2881, -13.2903, -25.9069)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3972, 0.016, 0.0182, 0.4076, -8.4888, -41.4726)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3887, -0.081, -0.0865, 0.3979, -4.0405, -46.7249)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0263, 0.0263, 0.3964, -1.3693, -40.3167)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 38 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 37}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3214, 0.232, 0.232, 0.3214, 7.9246, -46.8886)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3976, -0.0141, 0.0141, 0.3976, -6.143, -34.0625)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2407, 0.3157, 0.3157, 0.2407, -0.5678, -48.2235)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3537, -0.1786, -0.1786, 0.3537, 12.0906, -44.0938)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.258)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.2773, -20.3278)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.6636, -29.7954)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.5397, -8.3609)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3545, -0.1753, -0.1753, 0.3545, -1.3914, -14.1182)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3887, 0.0863, 0.0863, 0.3887, 2.4691, -36.007)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1158, -0.0983, 0.3207, -1.8231, -24.4936)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3925, 0.059, 0.0419, 0.3951, 6.5147, -37.3028)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3892, -0.0865, -0.0865, 0.3892, 8.1111, -42.8849)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0149, 0.0149, 0.3353, 10.2169, -77.0565)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2882, 0.2721, 0.2721, 0.2882, -13.3395, -25.8576)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3971, 0.0191, 0.0214, 0.4074, -8.5434, -41.5839)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3887, -0.0811, -0.0865, 0.3979, -4.0901, -46.7749)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0264, 0.0264, 0.3964, -1.4198, -40.268)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 39 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 38}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3258, 0.2269, 0.2269, 0.3258, 8.1307, -46.6757)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3978, -0.0084, 0.0084, 0.3978, -6.1246, -34.0124)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2461, 0.3123, 0.3123, 0.2461, -0.4566, -48.1896)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3525, -0.1822, -0.1822, 0.3525, 12.127, -44.0632)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3576, -13.258)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0068, 0.0063, 0.3669, 11.2222, -20.3639)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0255, 0.0255, 0.3936, 5.5618, -29.8156)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -7.5327, -8.3562)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3549, -0.1759, -0.1759, 0.3549, -1.4319, -14.109)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3889, 0.0865, 0.0865, 0.3889, 2.372, -36.0162)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.378, -0.1163, -0.0987, 0.3209, -1.9187, -24.4881)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3926, 0.0601, 0.0431, 0.3951, 6.4024, -37.2868)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3894, -0.0868, -0.0869, 0.3894, 8.1275, -42.8755)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, 0.0159, 0.0159, 0.3353, 10.1576, -77.1621)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2889, 0.2723, 0.2723, 0.2889, -13.3797, -25.8647)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.397, 0.0212, 0.0235, 0.4074, -8.6295, -41.627)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3889, -0.0815, -0.0866, 0.3982, -4.1341, -46.7711)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3965, 0.0276, 0.0276, 0.3965, -1.4601, -40.3206)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 40 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 39}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3275, 0.2235, 0.222, 0.3277, 8.2961, -45.758)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3976, -0.0037, 0.0036, 0.3974, -6.5055, -33.3182)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2491, 0.3093, 0.3088, 0.2486, -0.1924, -47.2672)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3463, -0.1924, -0.1924, 0.3463, 11.7961, -42.9307)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3576, -13.208)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.2274, -20.2769)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.5637, -29.7448)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.54, -8.3107)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3545, -0.1753, -0.1753, 0.3545, -1.4427, -14.0186)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3894, 0.0829, 0.0829, 0.3894, 2.397, -35.8916)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1157, -0.0983, 0.3206, -1.9738, -24.3941)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.393, 0.0556, 0.0384, 0.3954, 6.5191, -37.0995)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3884, -0.0898, -0.0899, 0.3884, 8.1482, -42.6923)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3354, 0.012, 0.012, 0.3354, 10.401, -76.9959)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2881, 0.272, 0.272, 0.2881, -13.6404, -26.0566)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3976, 3.0E-4, 0.0021, 0.4081, -8.3232, -41.3054)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3879, -0.0844, -0.09, 0.3971, -3.9344, -46.7375)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3966, 0.0228, 0.0228, 0.3966, -1.5419, -40.4724)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 41 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 40}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3303, 0.2194, 0.2186, 0.3292, 8.4123, -44.8112)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3974, -2.0E-4, -2.0E-4, 0.3971, -6.8491, -32.7355)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.252, 0.3071, 0.3062, 0.2511, 0.008, -46.5097)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3409, -0.2016, -0.2016, 0.3409, 11.4688, -42.0415)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.158)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.2777, -20.2247)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.5636, -29.6934)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.4911, -8.2607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3544, -0.1752, -0.1752, 0.3544, -1.3953, -14.0199)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.39, 0.0794, 0.0794, 0.39, 2.474, -35.7744)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -1.9249, -24.3943)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3935, 0.052, 0.0349, 0.3957, 6.5731, -37.0442)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3875, -0.0932, -0.0932, 0.3875, 8.2818, -42.4983)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3355, 0.009, 0.009, 0.3355, 10.6842, -76.8345)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.288, 0.2719, 0.2719, 0.288, -13.942, -26.3044)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3971, -0.0177, -0.0164, 0.4077, -7.985, -41.0769)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3871, -0.0878, -0.0934, 0.3962, -3.8303, -46.7498)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3968, 0.0193, 0.0193, 0.3968, -1.5143, -40.6752)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 42 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 41}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3324, 0.2164, 0.2141, 0.3314, 8.5803, -43.8643)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3972, 0.0021, -0.0052, 0.3966, -7.2753, -32.0079)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2559, 0.304, 0.3035, 0.2535, 0.2287, -45.4846)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3345, -0.2118, -0.2118, 0.3345, 11.0833, -40.904)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.108)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3668, 11.2781, -20.1223)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.5634, -29.6419)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.4917, -8.2108)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3542, -0.1751, -0.1751, 0.3542, -1.398, -13.9708)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3906, 0.076, 0.076, 0.3906, 2.5005, -35.7073)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3775, -0.1156, -0.0982, 0.3205, -1.926, -24.3448)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3939, 0.0485, 0.0313, 0.396, 6.6255, -36.8391)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3866, -0.0965, -0.0966, 0.3866, 8.364, -42.3558)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, 0.006, 0.006, 0.3356, 10.9676, -76.6177)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2878, 0.2718, 0.2718, 0.2878, -14.2936, -26.5025)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3956, -0.0383, -0.0376, 0.4062, -7.6771, -40.7277)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3862, -0.0911, -0.0968, 0.3953, -3.6268, -46.6112)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3969, 0.0157, 0.0157, 0.3969, -1.6375, -40.9263)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 43 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 42}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3353, 0.2131, 0.2112, 0.3331, 8.6888, -42.8968)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3969, 0.0071, -0.0099, 0.3961, -7.6538, -31.3739)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2596, 0.3019, 0.3008, 0.2569, 0.4941, -44.6948)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3282, -0.2222, -0.2222, 0.3282, 10.7551, -39.8134)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0056, 0.0052, 0.3669, 11.2771, -20.0787)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.5635, -29.596)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0262, -0.0262, 0.3974, -7.4894, -8.1606)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3546, -0.1754, -0.1754, 0.3546, -1.3906, -13.9678)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3914, 0.0725, 0.0725, 0.3914, 2.5316, -35.5928)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1158, -0.0983, 0.3207, -1.8727, -24.3435)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3943, 0.0452, 0.028, 0.3963, 6.6285, -36.7396)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3859, -0.1001, -0.1001, 0.3859, 8.5102, -42.1576)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, 0.0031, 0.0031, 0.3356, 11.24, -76.4613)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2882, 0.2721, 0.2721, 0.2882, -14.639, -26.7585)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3932, -0.0592, -0.0589, 0.4038, -7.4352, -40.4588)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3856, -0.0947, -0.1004, 0.3946, -3.4653, -46.6232)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3971, 0.0124, 0.0124, 0.3971, -1.668, -41.0866)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 44 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 43}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3285, 0.2224, 0.2207, 0.3262, 8.3061, -43.4895)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.397, -0.0038, 0.0018, 0.3962, -7.7591, -31.5502)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2495, 0.3094, 0.3076, 0.2476, 0.1835, -44.8544)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3324, -0.2148, -0.2148, 0.3324, 10.682, -40.1727)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3668, 11.2279, -20.0701)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.513, -29.5907)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.5423, -8.1608)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3541, -0.175, -0.175, 0.3541, -1.4008, -14.0218)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3912, 0.0726, 0.0726, 0.3912, 2.5249, -35.5897)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0981, 0.3204, -1.8772, -24.3453)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3942, 0.045, 0.0278, 0.3962, 6.6263, -36.7845)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.386, -0.0985, -0.0984, 0.386, 8.4807, -42.1725)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, 0.0018, 0.0018, 0.3356, 11.2686, -76.4376)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2877, 0.2717, 0.2717, 0.2877, -14.5953, -26.7505)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3928, -0.0605, -0.0604, 0.4034, -7.4204, -40.4235)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3857, -0.093, -0.0988, 0.3947, -3.497, -46.6596)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.397, 0.0123, 0.0123, 0.397, -1.6654, -41.1279)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 45 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 44}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.3067, 0.2515, 0.2497, 0.3047, 7.1587, -44.9876)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3948, -0.0399, 0.0366, 0.3944, -7.9948, -31.8353)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.2213, 0.3302, 0.3291, 0.2186, -0.7207, -45.5244)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3442, -0.1954, -0.1954, 0.3442, 10.5446, -41.144)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3668, 11.2279, -20.0701)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.513, -29.5907)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.5423, -8.1608)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3541, -0.175, -0.175, 0.3541, -1.4012, -14.022)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3912, 0.0728, 0.0728, 0.3912, 2.5211, -35.5924)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3774, -0.1156, -0.0981, 0.3204, -1.8775, -24.3454)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3942, 0.0452, 0.028, 0.3962, 6.6236, -36.789)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3864, -0.0967, -0.0967, 0.3864, 8.3613, -42.2477)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, 0.0016, 0.0016, 0.3356, 11.1287, -76.4264)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2877, 0.2717, 0.2717, 0.2877, -14.6455, -26.8497)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3921, -0.0643, -0.0642, 0.4027, -7.4714, -40.2856)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3861, -0.0912, -0.097, 0.3951, -3.6264, -46.6558)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.397, 0.0124, 0.0124, 0.397, -1.7711, -41.1852)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 46 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 45}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.2648, 0.2951, 0.2923, 0.2643, 5.1596, -47.4268)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3843, -0.098, 0.096, 0.3841, -8.1681, -32.3551)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.1686, 0.36, 0.3582, 0.1673, -2.2384, -46.2842)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3615, -0.1615, -0.1615, 0.3615, 10.2283, -42.669)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.3576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3668, 11.1775, -20.0696)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.4627, -29.5906)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.5926, -8.1605)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3541, -0.175, -0.175, 0.3541, -1.4522, -14.0224)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3908, 0.0743, 0.0743, 0.3908, 2.4856, -35.6222)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1156, -0.0981, 0.3204, -1.9283, -24.3455)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.394, 0.0468, 0.0296, 0.3961, 6.5996, -36.8359)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3872, -0.0933, -0.0933, 0.3872, 8.3239, -42.3403)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, 2.0E-4, 2.0E-4, 0.3356, 11.0636, -76.2468)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2876, 0.2717, 0.2717, 0.2876, -14.7463, -26.9987)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3906, -0.0727, -0.0728, 0.4012, -7.415, -40.0385)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3868, -0.0878, -0.0935, 0.3959, -3.6825, -46.6929)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.397, 0.014, 0.014, 0.397, -1.9265, -41.4015)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 47 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 46}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.1972, 0.3439, 0.3414, 0.1975, 2.3968, -50.2411)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.3552, -0.1758, 0.1739, 0.3555, -7.8461, -33.004)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(-0.0898, 0.3874, 0.3859, 0.0878, -4.3128, -47.0058)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3802, -0.1113, -0.1113, 0.3802, 9.6725, -44.8625)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.4076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0052, 0.0049, 0.3668, 11.1276, -20.0692)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0241, 0.0241, 0.3935, 5.4628, -29.5904)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.6429, -8.1103)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.354, -0.175, -0.175, 0.354, -1.5042, -13.9726)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3905, 0.076, 0.076, 0.3905, 2.3978, -35.5535)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1155, -0.0981, 0.3203, -1.9789, -24.3455)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3938, 0.0484, 0.0312, 0.3959, 6.5242, -36.7849)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3884, -0.0883, -0.0883, 0.3884, 8.166, -42.601)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3356, -2.0E-4, -2.0E-4, 0.3356, 10.7384, -76.1702)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2875, 0.2716, 0.2716, 0.2875, -14.8971, -27.2975)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3885, -0.0831, -0.0835, 0.3991, -7.3368, -39.6899)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3879, -0.0828, -0.0884, 0.3971, -3.7664, -46.7702)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3969, 0.0157, 0.0157, 0.3969, -2.0864, -41.7208)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 48 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 47}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(-0.0982, 0.3846, 0.3826, 0.0991, -1.0989, -52.8801)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2953, -0.2649, 0.2633, 0.2961, -6.5208, -33.86)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.0159, 0.3976, 0.396, -0.0173, -6.6101, -47.4323)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.394, -0.0451, -0.0451, 0.394, 8.446, -47.4892)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.4576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.1273, -20.0738)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.4636, -29.5931)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.6408, -8.111)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3543, -0.1752, -0.1752, 0.3543, -1.5459, -13.9697)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3903, 0.0779, 0.0779, 0.3903, 2.4085, -35.6444)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3205, -2.0251, -24.3446)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3936, 0.0505, 0.0333, 0.3958, 6.4964, -36.847)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3897, -0.0831, -0.0831, 0.3897, 8.0134, -42.7233)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3355, -0.0032, -0.0032, 0.3355, 10.513, -75.9514)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2879, 0.2719, 0.2719, 0.2879, -15.0424, -27.6041)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3851, -0.0983, -0.0992, 0.3957, -7.3052, -39.2207)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3892, -0.0776, -0.083, 0.3985, -4.0012, -46.7569)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3969, 0.0177, 0.0177, 0.3969, -2.4077, -42.0087)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 49 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 48}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.0056, 0.3969, 0.3957, -0.0054, -4.0626, -54.38)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.2148, -0.3332, 0.3328, 0.2149, -4.1708, -35.1414)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.1199, 0.3789, 0.3774, -0.1211, -8.4785, -47.1465)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3962, 0.0212, 0.0212, 0.3962, 6.915, -49.8818)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0053, 0.0049, 0.3669, 11.0772, -20.0715)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0242, 0.0242, 0.3935, 5.3629, -29.5918)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.7426, -8.1105)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3541, -0.175, -0.175, 0.3541, -1.6514, -13.9716)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3898, 0.0796, 0.0796, 0.3898, 2.3677, -35.6745)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3773, -0.1156, -0.0981, 0.3203, -2.078, -24.3452)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3933, 0.0521, 0.0349, 0.3957, 6.4178, -36.9462)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3909, -0.0764, -0.0764, 0.391, 7.8251, -42.9978)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3354, -0.0059, -0.0059, 0.3354, 10.2686, -75.7452)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2877, 0.2717, 0.2717, 0.2877, -15.1456, -27.8992)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3813, -0.1117, -0.1129, 0.3918, -7.2646, -38.7825)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3903, -0.0709, -0.0762, 0.3997, -4.1693, -46.8213)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3968, 0.0194, 0.0194, 0.3968, -2.6189, -42.227)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 50 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 49}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.0947, 0.3852, 0.3844, -0.0943, -6.1611, -54.959)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.1343, -0.3735, 0.3732, 0.1344, -1.489, -36.6956)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.2022, 0.3419, 0.3405, -0.2031, -9.5219, -46.6259)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3887, 0.0792, 0.0792, 0.3887, 5.3131, -51.7793)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0054, 0.005, 0.3669, 11.0769, -20.0738)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.413, -29.593)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3973, -0.0261, -0.0261, 0.3973, -7.7414, -8.1105)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3542, -0.1751, -0.1751, 0.3542, -1.6486, -13.9704)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3896, 0.0813, 0.0813, 0.3896, 2.329, -35.7097)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3775, -0.1156, -0.0982, 0.3205, -2.0763, -24.3446)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3932, 0.054, 0.0381, 0.3954, 6.3768, -36.9496)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.392, -0.0713, -0.0713, 0.392, 7.7136, -43.1589)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3354, -0.0076, -0.0076, 0.3354, 10.1156, -75.5974)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2878, 0.2718, 0.2718, 0.2878, -15.2437, -28.1519)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3773, -0.1247, -0.1263, 0.3878, -7.2818, -38.3499)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3913, -0.0659, -0.071, 0.4007, -4.3067, -46.8982)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3966, 0.0225, 0.0225, 0.3966, -3.0322, -42.5587)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 51 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 50}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.1647, 0.3607, 0.3608, -0.1632, -7.4708, -55.0776)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.0624, -0.3924, 0.3922, 0.0625, 1.1285, -38.2972)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.2624, 0.2981, 0.2976, -0.2622, -10.1269, -45.9721)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3767, 0.1244, 0.1244, 0.3767, 3.9317, -53.0989)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5076, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.0771, -20.1256)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3935, 0.0243, 0.0243, 0.3935, 5.4135, -29.5939)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.7405, -8.1607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3544, -0.1752, -0.1752, 0.3544, -1.6455, -13.9195)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3893, 0.083, 0.083, 0.3893, 2.2427, -35.7434)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -2.075, -24.2943)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3929, 0.0557, 0.0398, 0.3953, 6.3005, -36.9016)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3927, -0.0677, -0.0677, 0.3928, 7.5697, -43.2569)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3353, -0.0091, -0.0091, 0.3353, 9.9071, -75.5065)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.288, 0.2719, 0.2719, 0.288, -15.3419, -28.3542)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.374, -0.1345, -0.1364, 0.3844, -7.2379, -38.0422)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.392, -0.0623, -0.0673, 0.4015, -4.4694, -46.7875)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3965, 0.0243, 0.0243, 0.3965, -3.1946, -42.832)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 52 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 51}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2149, 0.3332, 0.333, -0.2146, -8.1005, -54.8928)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(0.0054, -0.3976, 0.3975, 0.0055, 3.2159, -39.9147)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3026, 0.2571, 0.2569, -0.3024, -10.2595, -45.4691)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3637, 0.1585, 0.1585, 0.3637, 2.6987, -54.0614)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0055, 0.0051, 0.3669, 11.0269, -20.1274)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.3637, -29.5948)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.79, -8.1607)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3544, -0.1753, -0.1753, 0.3544, -1.6937, -13.9186)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.389, 0.0846, 0.0846, 0.389, 2.2068, -35.7744)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3776, -0.1157, -0.0982, 0.3206, -2.124, -24.2941)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3927, 0.0573, 0.0402, 0.3953, 6.2404, -36.9519)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3934, -0.0643, -0.0643, 0.3934, 7.5267, -43.3453)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3352, -0.0106, -0.0106, 0.3352, 9.7905, -75.3698)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2881, 0.272, 0.272, 0.2881, -15.3408, -28.5562)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3715, -0.1413, -0.1434, 0.382, -7.2759, -37.8117)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3926, -0.059, -0.0639, 0.4021, -4.4786, -46.8698)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3965, 0.0246, 0.0246, 0.3965, -3.3572, -42.8966)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 53 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 52}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2474, 0.3097, 0.3096, -0.2473, -8.4195, -54.8091)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.0347, -0.3962, 0.3961, -0.0347, 4.7637, -41.234)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3278, 0.2241, 0.224, -0.3277, -10.2606, -45.0581)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3526, 0.182, 0.182, 0.3526, 1.8345, -54.6948)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0056, 0.0051, 0.3669, 11.0273, -20.1283)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.3636, -29.5954)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.7897, -8.1609)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3545, -0.1753, -0.1753, 0.3545, -1.6918, -13.9185)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.389, 0.0848, 0.0848, 0.389, 2.1529, -35.7793)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1158, -0.0983, 0.3206, -2.1231, -24.2438)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3926, 0.0589, 0.0417, 0.3951, 6.2173, -37.0478)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3937, -0.0625, -0.0625, 0.3937, 7.453, -43.321)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3352, -0.0119, -0.0119, 0.3352, 9.6692, -75.2408)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2882, 0.2721, 0.2721, 0.2882, -15.3897, -28.6576)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3691, -0.1476, -0.1498, 0.3795, -7.2228, -37.6442)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3929, -0.0571, -0.062, 0.4025, -4.6119, -46.9157)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3964, 0.0262, 0.0262, 0.3964, -3.4641, -43.0601)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 54 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 53}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.266, 0.294, 0.2939, -0.266, -8.5604, -54.6859)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.0589, -0.3933, 0.3933, -0.0589, 5.7826, -42.0637)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.341, 0.2035, 0.2035, -0.341, -10.2599, -44.8365)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.3451, 0.1958, 0.1958, 0.3451, 1.2309, -55.0582)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0056, 0.0052, 0.3669, 11.0271, -20.1288)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0244, 0.0244, 0.3936, 5.3638, -29.596)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0261, -0.0261, 0.3974, -7.7894, -8.1612)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3546, -0.1754, -0.1754, 0.3546, -1.6909, -13.9177)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3887, 0.0863, 0.0863, 0.3887, 2.1703, -35.8069)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.3777, -0.1158, -0.0983, 0.3207, -2.1227, -24.2437)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3926, 0.059, 0.0419, 0.3951, 6.2155, -37.0525)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.394, -0.0609, -0.0609, 0.394, 7.4807, -43.4372)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3351, -0.0132, -0.0132, 0.3351, 9.6916, -75.1661)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2882, 0.2721, 0.2721, 0.2882, -15.4392, -28.7582)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3679, -0.1508, -0.1531, 0.3782, -7.2958, -37.5066)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3932, -0.0555, -0.0603, 0.4027, -4.6404, -46.8047)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3965, 0.0263, 0.0263, 0.3965, -3.5186, -43.1172)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      {/* FRAME 55 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${WinMaleBrute_X_OFFSET + (WinMaleBrute_WIDTH + WinMaleBrute_MARGIN) * 54}, ${WinMaleBrute_Y_OFFSET})`}>
        <use height="42.3" transform="matrix(0.2728, 0.2885, 0.2885, -0.2728, -8.5572, -54.607)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite0`} />
        <use height="126.95" transform="matrix(-0.0674, -0.3922, 0.3922, -0.0674, 6.1382, -42.3902)" width="253.5" xlinkHref={`#WinMaleBrute-${id}-sprite5`} />
        <use height="30.75" transform="matrix(0.3454, 0.1971, 0.1971, -0.3454, -10.1995, -44.7859)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite9`} />
        <use height="44.75" transform="matrix(-0.343, 0.2007, 0.2007, 0.343, 1.0673, -55.162)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite14`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, -5.5576, -13.058)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite20`} />
        <use height="52.5" transform="matrix(-0.3959, 0.0068, 0.0063, 0.3669, 11.0222, -20.1639)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite26`} />
        <use height="43.1" transform="matrix(-0.3936, 0.0255, 0.0255, 0.3936, 5.3618, -29.6156)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite31`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0264, -0.0264, 0.3975, -7.7327, -8.1562)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite37`} />
        <use height="51.8" transform="matrix(-0.3549, -0.1759, -0.1759, 0.3549, -1.6319, -13.909)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite43`} />
        <use height="34.25" transform="matrix(-0.3889, 0.0865, 0.0865, 0.3889, 2.172, -35.8162)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite47`} />
        <use height="45.0" transform="matrix(-0.378, -0.1163, -0.0987, 0.3209, -2.1187, -24.2881)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite52`} />
        <use height="44.05" transform="matrix(-0.3926, 0.0601, 0.0431, 0.3951, 6.2024, -37.0868)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite57`} />
        <use height="44.2" transform="matrix(-0.3942, -0.0609, -0.061, 0.3942, 7.4399, -43.4383)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite63`} />
        <use height="115.65" transform="matrix(-0.3352, -0.0135, -0.0135, 0.3352, 9.6634, -75.1491)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite70`} />
        <use height="26.45" transform="matrix(-0.2889, 0.2723, 0.2723, 0.2889, -15.4797, -28.7647)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite83`} />
        <use height="30.75" transform="matrix(-0.3678, -0.1521, -0.1545, 0.3782, -7.2246, -37.4793)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite87`} />
        <use height="48.0" transform="matrix(-0.3933, -0.0557, -0.0601, 0.403, -4.5913, -46.856)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite91`} />
        <use height="80.8" transform="matrix(-0.3965, 0.0276, 0.0276, 0.3965, -3.5601, -43.2206)" width="85.25" xlinkHref={`#WinMaleBrute-${id}-sprite95`} />
      </g>
      <defs>
        <g id={`WinMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#WinMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`WinMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#WinMaleBrute-${id}-sprite2`} />
          <use height="42.3" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#WinMaleBrute-${id}-sprite3`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#WinMaleBrute-${id}-shape0`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`WinMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-shape1`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 34.35, 13.2)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#WinMaleBrute-${id}-sprite6`} />
          <clipPath id={`WinMaleBrute-${id}-clipPath0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 0.0, 0.0)">
            <path d="M219.15 67.3 L200.5 105.55 112.35 83.7 105.15 113.75 -27.5 81.85 Q-24.75 62.95 -18.0 44.2 -32.7 31.15 -24.2 9.7 L-24.3 8.65 Q-21.85 -8.45 -6.9 0.4 -6.15 1.45 -5.65 2.8 L-3.4 8.4 -3.7 9.05 -4.4 9.3 -5.6 8.55 -7.05 8.55 -8.55 9.65 -8.15 13.6 -2.05 16.55 0.5 15.3 1.35 13.75 1.95 12.0 Q3.5 8.8 5.45 7.05 6.3 6.25 6.8 6.2 L8.3 3.65 21.85 -13.2 137.7 14.65 130.15 45.95 219.15 67.3" fill="#00ff00" fillRule="evenodd" stroke="none" />
          </clipPath>
        </g>
        <g id={`WinMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#WinMaleBrute-${id}-sprite7`} />
          <use height="16.55" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#WinMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#WinMaleBrute-${id}-shape2`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#WinMaleBrute-${id}-sprite11`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`WinMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#WinMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#WinMaleBrute-${id}-sprite13`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#WinMaleBrute-${id}-shape4`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#WinMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#WinMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#WinMaleBrute-${id}-sprite17`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#WinMaleBrute-${id}-sprite18`} />
          <use height="22.3" id={`WinMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#WinMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#WinMaleBrute-${id}-shape5`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`WinMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`WinMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#WinMaleBrute-${id}-sprite22`} />
          <use height="32.1" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#WinMaleBrute-${id}-sprite23`} />
          <use height="33.25" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#WinMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#WinMaleBrute-${id}-shape6`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`WinMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#WinMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#WinMaleBrute-${id}-sprite27`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`WinMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#WinMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite28`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#WinMaleBrute-${id}-sprite29`} />
          <use height="49.6" id={`WinMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#WinMaleBrute-${id}-shape7`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`WinMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite31`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#WinMaleBrute-${id}-sprite32`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`WinMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#WinMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#WinMaleBrute-${id}-sprite34`} />
          <use height="33.8" id={`WinMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#WinMaleBrute-${id}-sprite35`} />
          <use height="43.1" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#WinMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite34`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#WinMaleBrute-${id}-shape7`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#WinMaleBrute-${id}-shape8`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#WinMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`WinMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#WinMaleBrute-${id}-sprite39`} />
          <use height="33.4" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#WinMaleBrute-${id}-sprite40`} />
          <use height="38.65" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#WinMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#WinMaleBrute-${id}-shape9`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`WinMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#WinMaleBrute-${id}-sprite42`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite43`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#WinMaleBrute-${id}-sprite44`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`WinMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#WinMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#WinMaleBrute-${id}-sprite29`} />
          <use height="51.8" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#WinMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`WinMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#WinMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite48`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`WinMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#WinMaleBrute-${id}-sprite49`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`WinMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-sprite50`} />
          <use height="29.55" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#WinMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-shape10`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#WinMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`WinMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#WinMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite54`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#WinMaleBrute-${id}-sprite34`} />
          <use height="31.6" id={`WinMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#WinMaleBrute-${id}-sprite55`} />
          <use height="45.0" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#WinMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#WinMaleBrute-${id}-shape11`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#WinMaleBrute-${id}-sprite58`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite58`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#WinMaleBrute-${id}-sprite59`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#WinMaleBrute-${id}-sprite60`} />
          <use height="44.25" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#WinMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#WinMaleBrute-${id}-shape12`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`WinMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#WinMaleBrute-${id}-sprite62`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#WinMaleBrute-${id}-sprite64`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#WinMaleBrute-${id}-sprite65`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`WinMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#WinMaleBrute-${id}-sprite66`} />
          <use height="35.0" id={`WinMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#WinMaleBrute-${id}-sprite67`} />
          <use height="41.1" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#WinMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#WinMaleBrute-${id}-shape13`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`WinMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#WinMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#WinMaleBrute-${id}-shape14`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`WinMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#WinMaleBrute-${id}-sprite71`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`WinMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#WinMaleBrute-${id}-sprite72`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#WinMaleBrute-${id}-sprite73`} />
          <use height="12.9" id={`WinMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#WinMaleBrute-${id}-sprite78`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#WinMaleBrute-${id}-shape19`} />
          <use height="86.9" id={`WinMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#WinMaleBrute-${id}-sprite79`} />
          <use height="42.75" id={`WinMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#WinMaleBrute-${id}-sprite80`} />
          <use height="19.35" id={`WinMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#WinMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#WinMaleBrute-${id}-shape15`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`WinMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#WinMaleBrute-${id}-sprite74`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#WinMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#WinMaleBrute-${id}-sprite75`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#WinMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#WinMaleBrute-${id}-shape16`} />
          <use height="2.9" id={`WinMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#WinMaleBrute-${id}-sprite77`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#WinMaleBrute-${id}-shape17`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite78`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#WinMaleBrute-${id}-shape18`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#WinMaleBrute-${id}-shape20`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`WinMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#WinMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#WinMaleBrute-${id}-shape21`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite82`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#WinMaleBrute-${id}-shape22`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#WinMaleBrute-${id}-sprite85`} />
          <use height="26.45" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#WinMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#WinMaleBrute-${id}-shape23`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`WinMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#WinMaleBrute-${id}-sprite88`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#WinMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`WinMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#WinMaleBrute-${id}-sprite12`} />
          <use height="30.55" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#WinMaleBrute-${id}-sprite90`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#WinMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#WinMaleBrute-${id}-sprite93`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`WinMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#WinMaleBrute-${id}-sprite18`} />
          <use height="36.75" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#WinMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`WinMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#WinMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`WinMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#WinMaleBrute-${id}-sprite96`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`WinMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#WinMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`WinMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#WinMaleBrute-${id}-sprite2`} />
          <use height="61.05" id={`WinMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#WinMaleBrute-${id}-sprite98`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`WinMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#WinMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`WinMaleBrute-${id}-sprite99`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#WinMaleBrute-${id}-shape24`} />
        </g>
        <g id={`WinMaleBrute-${id}-shape24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
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

export default WinMaleBrute;