/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface ThrowMaleBruteProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const ThrowMaleBrute_WIDTH = 120;
export const ThrowMaleBrute_HEIGHT = 78.65;
export const ThrowMaleBrute_FRAMES = 14;
export const ThrowMaleBrute_X_OFFSET = 61.25;
export const ThrowMaleBrute_Y_OFFSET = 61.85;
export const ThrowMaleBrute_MARGIN = 30;

// Todo: Wrong shapes for this animation

const ThrowMaleBrute = ({ id, inverted, sx, ...rest }: ThrowMaleBruteProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: ThrowMaleBrute_WIDTH,
      height: ThrowMaleBrute_HEIGHT,
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
          ? -(ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN)
            * (ThrowMaleBrute_FRAMES - 1)
            - ThrowMaleBrute_MARGIN
          : 0,
        width: (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * ThrowMaleBrute_FRAMES,
        animation: `ThrowMaleBrute${inverted ? 'Inverted' : ''} 0.35s steps(${ThrowMaleBrute_FRAMES}, jump-none) forwards`,
        transform: inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 0}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(0.3105, 0.2479, 0.2479, -0.3105, -4.5806, -35.7572)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3555, 0.1776, 0.1776, 0.3555, 14.812, -47.4698)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0365, 0.0229, 0.2468, 24.9042, -18.7157)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.1257, 0.3748, 0.3748, 0.1257, 3.0756, -27.1481)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3974, -0.0263, -0.0263, 0.3974, -6.3349, -8.3581)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.3385, -0.206, -0.206, 0.3385, 0.7327, -12.9387)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3878, 0.0914, 0.0914, 0.3878, 8.1561, -30.4588)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.2869, -0.2733, -0.1749, 0.1836, 1.3421, -16.9529)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3816, -0.1134, -0.13, 0.3766, 14.779, -24.9308)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.3451, -0.198, -0.198, 0.3452, 19.6416, -28.69)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.3325, -0.0529, -0.0529, 0.3325, 29.3162, -62.4807)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.3094, 0.2493, 0.2493, 0.3094, -0.874, -33.5108)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(-0.3445, -0.1997, -0.1997, 0.3445, 7.1682, -33.3545)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(-0.2168, -0.333, -0.333, 0.2169, 10.31, -31.4896)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(-0.3985, -0.0018, -4.0E-4, 0.3985, 12.8263, -44.1206)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(0.0658, 0.3922, 0.3922, -0.0658, -5.7606, -50.8715)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.0229, -0.3979, 0.3979, 0.0229, 6.0688, -36.2119)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 1}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(0.3898, -0.0794, -0.0794, -0.3898, -8.8628, -27.899)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3557, 0.1777, 0.1777, 0.3557, 12.4163, -47.4774)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0367, 0.0229, 0.2468, 24.9047, -18.7199)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.1257, 0.375, 0.375, 0.1257, 3.0767, -27.2008)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0265, -0.0265, 0.3975, -6.3313, -8.3558)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.3387, -0.2061, -0.2061, 0.3387, 0.7377, -12.9873)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3453, 0.1994, 0.1994, 0.3453, 4.2316, -32.6057)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.2872, -0.2734, -0.175, 0.1838, 1.2957, -16.9515)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3982, 0.001, -0.0162, 0.3982, 12.1477, -29.3497)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1982, -0.1982, 0.3453, 17.3027, -28.6354)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.3325, -0.053, -0.053, 0.3325, 24.4269, -63.8293)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(0.1629, 0.3629, 0.3629, -0.1629, 7.2438, -29.898)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(-0.2819, 0.2819, 0.2819, 0.2819, 0.8469, -38.5971)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(-0.3376, -0.2105, -0.2105, 0.3376, 8.373, -36.8881)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(-0.104, 0.3843, 0.3847, 0.1027, -2.6871, -45.9465)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(0.3895, -0.0796, -0.0796, -0.3895, -18.3289, -34.8584)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(-0.3983, -0.0103, 0.0103, -0.3983, -6.2119, -51.079)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 2}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(0.093, -0.3864, -0.3864, -0.093, 16.5565, -21.4844)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3944, 0.047, 0.047, 0.3944, 29.0874, -43.4235)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3835, -0.0976, -0.0746, 0.2932, 29.0122, -16.9547)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.2773, 0.2808, 0.2808, 0.2773, 14.3961, -30.567)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3074, -0.2519, -0.2519, 0.3074, 1.5062, -15.2518)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.1126, -0.3792, -0.3792, 0.1126, 5.4192, -12.7781)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3922, 0.0695, 0.0695, 0.3922, 17.1526, -33.5361)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.1784, -0.3532, -0.226, 0.1142, 9.2096, -18.7894)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3748, -0.133, -0.1494, 0.3689, 23.3408, -26.9896)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.2585, -0.3017, -0.3017, 0.2585, 27.773, -24.4369)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2952, -0.1609, -0.1609, 0.2952, 45.7387, -51.5443)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(0.3958, -0.0366, -0.0366, -0.3958, 7.5123, -33.3337)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.1762, 0.3567, 0.3567, -0.1762, 1.8354, -39.1882)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(-0.1262, -0.3766, -0.3766, 0.1262, 20.5836, -30.2043)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.3301, 0.2213, 0.2199, -0.331, -9.2868, -33.3053)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(0.2235, -0.3274, -0.3274, -0.2235, 5.7971, -19.0053)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(-0.2922, 0.2691, -0.2691, -0.2922, 5.0762, -38.4427)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 3}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3743, -0.1341, -0.1341, 0.3743, 41.0587, -27.6853)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3766, -0.1257, -0.1257, 0.3766, 48.6563, -36.8071)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3046, -0.2531, -0.2389, 0.2874, 32.7006, -14.7343)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3872, 0.0786, 0.0786, 0.3872, 27.9221, -33.0022)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.0334, -0.3962, -0.3962, 0.0334, 5.9806, -24.4656)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.2419, -0.3126, -0.3126, -0.2419, 7.7095, -18.0134)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3838, -0.1059, -0.1059, 0.3838, 32.387, -33.4274)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0096, -0.3958, -0.2533, 0.0061, 18.7935, -21.6914)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2812, -0.2818, -0.294, 0.2689, 35.6493, -24.1211)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1041, -0.3838, -0.3838, 0.1041, 38.7939, -20.0933)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.1978, -0.2723, -0.2723, 0.1978, 68.7935, -34.1574)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.0507, -0.394, -0.394, 0.0507, 18.3189, -43.2992)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3503, -0.1889, -0.1889, -0.3503, 21.8981, -33.4255)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.2138, -0.3348, -0.3348, -0.2138, 29.6114, -25.4666)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.2096, -0.3381, -0.339, -0.2082, 23.2205, -25.2145)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.1532, -0.3655, -0.3655, 0.1532, 35.8074, -11.2418)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.0683, 0.3914, -0.3914, 0.0683, 17.8346, -19.904)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 4}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3771, -0.1248, -0.1248, 0.3771, 40.7695, -27.9684)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3776, -0.1214, -0.1214, 0.3776, 48.3475, -37.0061)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3066, -0.2495, -0.2346, 0.2883, 32.6425, -14.7964)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3861, 0.0823, 0.0823, 0.3861, 27.693, -32.9202)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.0384, -0.3956, -0.3956, 0.0384, 5.9202, -24.2667)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.2353, -0.3167, -0.3167, -0.2353, 7.6597, -17.8622)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3837, -0.1047, -0.1047, 0.3837, 32.1636, -33.3526)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0123, -0.3956, -0.2532, 0.0078, 18.5272, -21.5976)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2816, -0.2804, -0.2926, 0.2693, 35.3944, -24.0699)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1065, -0.3827, -0.3827, 0.1065, 38.611, -20.1804)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.1992, -0.2705, -0.2705, 0.1992, 68.4161, -34.4978)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.054, -0.3934, -0.3934, 0.054, 18.0152, -43.1231)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3481, -0.1918, -0.1918, -0.3481, 21.6407, -33.3533)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.2105, -0.3361, -0.3361, -0.2105, 29.4055, -25.4577)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.205, -0.3401, -0.341, -0.2036, 23.0872, -25.1852)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.1584, -0.3627, -0.3627, 0.1584, 35.7598, -11.65)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.0744, 0.39, -0.39, 0.0744, 17.8321, -20.0899)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 5}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3802, -0.1147, -0.1147, 0.3802, 40.3269, -28.4219)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3786, -0.1179, -0.1179, 0.3786, 47.9587, -37.1331)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3088, -0.2466, -0.2308, 0.2891, 32.5403, -14.8363)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3849, 0.0874, 0.0874, 0.3849, 27.3589, -32.9627)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.0453, -0.3949, -0.3949, 0.0453, 5.9456, -23.9554)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.2282, -0.3218, -0.3218, -0.2282, 7.6726, -17.6954)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3841, -0.1031, -0.1031, 0.3841, 31.7927, -33.3462)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0158, -0.3955, -0.2531, 0.0101, 18.3719, -21.5558)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2827, -0.2791, -0.2914, 0.2704, 35.1637, -24.0722)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1099, -0.3817, -0.3817, 0.1099, 38.4174, -20.187)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2025, -0.2679, -0.2679, 0.2025, 68.093, -34.8913)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.0605, -0.3924, -0.3924, 0.0605, 17.7579, -42.9166)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3447, -0.1975, -0.1975, -0.3447, 21.4513, -33.1399)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.2062, -0.3386, -0.3386, -0.2062, 29.197, -25.3948)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.2004, -0.3427, -0.3436, -0.199, 22.9755, -25.0795)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.1662, -0.359, -0.359, 0.1662, 35.7275, -12.0917)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.0828, 0.3882, -0.3882, 0.0828, 17.7087, -20.2218)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 6}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3839, -0.1015, -0.1015, 0.3839, 39.9475, -28.9952)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3801, -0.1129, -0.1129, 0.3801, 47.5516, -37.4113)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3118, -0.2424, -0.2257, 0.2904, 32.4578, -14.9137)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3833, 0.0939, 0.0939, 0.3833, 27.0134, -32.9322)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.0539, -0.3937, -0.3937, 0.0539, 5.8462, -23.7301)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.2196, -0.3276, -0.3276, -0.2196, 7.6699, -17.4706)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3845, -0.1014, -0.1014, 0.3845, 31.4718, -33.292)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0208, -0.3952, -0.2529, 0.0133, 18.1352, -21.5185)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2838, -0.2778, -0.2901, 0.2715, 34.883, -24.077)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1147, -0.3801, -0.3801, 0.1147, 38.1668, -20.2894)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2059, -0.2651, -0.2651, 0.2059, 67.6678, -35.3972)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.0659, -0.3914, -0.3914, 0.0659, 17.2346, -42.6544)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3418, -0.2022, -0.2022, -0.3418, 21.0377, -33.0393)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.2017, -0.3411, -0.3412, -0.2017, 28.893, -25.4356)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.1944, -0.346, -0.3469, -0.1929, 22.8463, -24.9414)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.1754, -0.3544, -0.3544, 0.1754, 35.7193, -12.6456)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.0929, 0.3858, -0.3858, 0.0929, 17.6217, -20.3479)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 7}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3875, -0.0878, -0.0878, 0.3875, 39.4583, -29.4787)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3818, -0.108, -0.108, 0.3818, 47.0029, -37.5938)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3154, -0.2385, -0.2207, 0.2919, 32.3404, -14.9354)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3817, 0.1009, 0.1009, 0.3817, 26.6183, -32.8604)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.0643, -0.3923, -0.3923, 0.0643, 5.7787, -23.3927)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.2098, -0.3344, -0.3344, -0.2098, 7.544, -17.1801)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3852, -0.0998, -0.0998, 0.3852, 31.1569, -33.1415)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0263, -0.395, -0.2528, 0.0168, 17.8041, -21.3318)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2853, -0.2769, -0.2893, 0.2731, 34.4697, -24.0223)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.12, -0.3788, -0.3788, 0.12, 37.9383, -20.3969)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2096, -0.2627, -0.2627, 0.2096, 67.1797, -35.8579)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.0743, -0.3901, -0.3901, 0.0743, 16.8038, -42.4111)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3377, -0.2097, -0.2097, -0.3377, 20.6913, -32.7498)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.1974, -0.3441, -0.3441, -0.1974, 28.5943, -25.4132)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.1883, -0.3498, -0.3507, -0.1869, 22.6374, -24.7838)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.1863, -0.3492, -0.3492, 0.1863, 35.701, -13.3558)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.1046, 0.383, -0.383, 0.1046, 17.5203, -20.6201)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 8}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3973, -0.0074, -0.0074, 0.3973, 36.5098, -32.3596)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3886, -0.0792, -0.0792, 0.3886, 44.2748, -38.8022)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3319, -0.2141, -0.1916, 0.2971, 31.8005, -15.3321)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3694, 0.1383, 0.1383, 0.3695, 24.5028, -32.5386)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.1163, -0.3798, -0.3798, 0.1163, 5.2989, -21.7121)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.1531, -0.3636, -0.3636, -0.1531, 7.1992, -15.8637)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3875, -0.0896, -0.0896, 0.3875, 29.1759, -32.6651)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0553, -0.3919, -0.2508, 0.0354, 16.2671, -20.8232)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.2921, -0.2689, -0.2816, 0.2802, 32.6919, -23.7472)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1475, -0.3686, -0.3686, 0.1475, 36.6614, -21.0244)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2283, -0.246, -0.246, 0.2283, 64.3793, -38.6113)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.1131, -0.3804, -0.3804, 0.1131, 14.2395, -41.0739)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.3145, -0.2423, -0.2423, -0.3145, 18.6459, -31.6987)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.1709, -0.3576, -0.3577, -0.1709, 26.8261, -25.3332)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.1508, -0.3672, -0.3679, -0.1492, 21.6971, -24.1117)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.2383, -0.3155, -0.3155, 0.2383, 35.3594, -17.0556)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.1618, 0.3622, -0.3622, 0.1618, 17.0254, -21.821)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 9}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3845, 0.0999, 0.0999, 0.3845, 31.9876, -35.7312)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3951, -0.0383, -0.0383, 0.3951, 40.2893, -40.4162)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3526, -0.1783, -0.1521, 0.3009, 31.0386, -15.7566)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3473, 0.1872, 0.1872, 0.3473, 21.3252, -32.0606)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.184, -0.352, -0.352, 0.184, 4.5606, -19.4662)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(0.0704, -0.3888, -0.3888, -0.0704, 6.847, -14.5476)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3905, -0.076, -0.076, 0.3905, 26.2989, -31.9811)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.0959, -0.384, -0.2458, 0.0614, 14.0688, -20.0476)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3014, -0.2587, -0.2718, 0.29, 30.1674, -23.3239)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.1852, -0.3513, -0.3513, 0.1852, 34.725, -21.9732)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.252, -0.2217, -0.2217, 0.252, 60.36, -42.1961)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.1664, -0.3603, -0.3603, 0.1664, 10.5969, -39.2056)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.2766, -0.285, -0.285, -0.2766, 16.0629, -30.3255)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.1326, -0.3738, -0.3739, -0.1326, 24.557, -25.4423)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.0979, -0.3851, -0.3855, -0.0964, 20.1757, -23.4372)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.3003, -0.2575, -0.2575, 0.3003, 34.2921, -22.3011)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.2353, 0.3195, -0.3195, 0.2353, 16.4953, -23.2253)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 10}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.3278, 0.2241, 0.2241, 0.3278, 25.7138, -39.0686)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3971, 0.0107, 0.0107, 0.3971, 35.206, -42.2354)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3726, -0.1321, -0.1059, 0.2987, 29.8772, -16.4602)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.3105, 0.2436, 0.2436, 0.3105, 17.404, -31.1905)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.2601, -0.3003, -0.3003, 0.2601, 2.9666, -17.0468)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.0365, -0.3939, -0.3939, 0.0365, 6.0824, -13.2875)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3937, -0.0589, -0.0589, 0.3937, 22.8112, -31.1794)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.144, -0.3689, -0.236, 0.0921, 11.2511, -19.2282)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3117, -0.2465, -0.259, 0.3018, 26.9409, -22.8834)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.2284, -0.3251, -0.3251, 0.2284, 32.1151, -23.3647)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.2789, -0.1872, -0.1872, 0.2789, 54.949, -46.8414)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.2267, -0.3258, -0.3258, 0.2268, 6.0957, -37.0321)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.2227, -0.3291, -0.3291, -0.2227, 12.7321, -28.979)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.0827, -0.3883, -0.3883, -0.0827, 21.4916, -25.5263)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(0.0281, -0.3968, -0.3968, -0.0279, 18.1275, -23.3107)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.3585, -0.1696, -0.1696, 0.3585, 31.9795, -28.9225)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.3115, 0.2463, -0.2463, 0.3115, 15.9003, -24.8615)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 11}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.2168, 0.3329, 0.3329, 0.2168, 18.2303, -41.6002)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3913, 0.0691, 0.0691, 0.3913, 29.0961, -44.2258)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3884, -0.0758, -0.0563, 0.2884, 28.3742, -17.1796)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.2571, 0.2997, 0.2997, 0.2571, 12.6214, -30.1771)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3301, -0.2214, -0.2214, 0.3301, 0.571, -14.2642)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.1552, -0.364, -0.364, 0.1552, 4.8893, -12.6746)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3964, -0.0385, -0.0385, 0.3964, 18.8045, -30.1963)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.1969, -0.3437, -0.2199, 0.126, 8.0278, -18.4447)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3235, -0.2313, -0.2443, 0.3141, 23.2352, -22.3413)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.2731, -0.2889, -0.2889, 0.2731, 28.8624, -24.9576)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.3032, -0.1451, -0.1451, 0.3032, 48.194, -52.0035)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.2874, -0.274, -0.274, 0.2874, 0.7245, -34.8169)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.1527, -0.3673, -0.3673, -0.1527, 9.0413, -27.8138)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(0.0245, -0.3967, -0.3968, -0.0245, 17.8752, -26.0603)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(-0.049, -0.395, -0.3948, 0.0504, 15.1386, -23.6499)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.3932, -0.0539, -0.0539, 0.3932, 30.1439, -36.2538)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.3717, 0.1413, -0.1413, 0.3717, 15.3555, -26.5751)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 12}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(-0.0675, 0.392, 0.392, 0.0675, 10.4915, -42.6842)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3768, 0.1264, 0.1264, 0.3768, 22.7441, -45.9618)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3957, -0.0159, -0.0108, 0.2697, 26.6918, -18.0161)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.1921, 0.3453, 0.3453, 0.1921, 7.7437, -28.6912)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3778, -0.1248, -0.1248, 0.3778, -2.684, -11.3902)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.2631, -0.296, -0.296, 0.2631, 3.1076, -12.5644)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3981, -0.0178, -0.0178, 0.3981, 14.6685, -29.1501)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.2471, -0.3098, -0.1983, 0.1581, 4.6028, -17.666)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3353, -0.2143, -0.2288, 0.3259, 19.5735, -21.8976)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.3141, -0.2442, -0.2442, 0.3141, 25.2024, -26.7957)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.3217, -0.0986, -0.0986, 0.3217, 40.7462, -57.0712)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.3377, -0.2095, -0.2095, 0.3377, -5.1571, -32.5465)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.0745, -0.3912, -0.3912, -0.0745, 4.9402, -27.0252)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(-0.0349, -0.3962, -0.3962, 0.0349, 13.9464, -26.7031)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(-0.1299, -0.3763, -0.3763, 0.13, 11.6041, -24.7149)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.3913, 0.0691, 0.0691, 0.3913, 26.8218, -43.1466)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.3979, 0.0195, -0.0195, 0.3979, 15.1629, -28.2514)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${ThrowMaleBrute_X_OFFSET + (ThrowMaleBrute_WIDTH + ThrowMaleBrute_MARGIN) * 13}, ${ThrowMaleBrute_Y_OFFSET})`}>
        <use height="30.75" transform="matrix(0.0796, 0.3901, 0.3901, -0.0796, 4.0924, -42.2151)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite0`} />
        <use height="44.75" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 16.6287, -47.4917)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite5`} />
        <use height="38.95" transform="matrix(0.3983, 0.0, 0.0, 0.3983, 8.7424, -13.108)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite11`} />
        <use height="52.5" transform="matrix(-0.3944, 0.0379, 0.0237, 0.2468, 24.9012, -18.7573)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite17`} />
        <use height="43.1" transform="matrix(-0.1261, 0.3752, 0.3752, 0.1261, 3.0336, -27.2069)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite23`} />
        <use height="40.55" transform="matrix(-0.3975, -0.0278, -0.0278, 0.3975, -6.3086, -8.3302)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite29`} />
        <use height="51.8" transform="matrix(-0.3392, -0.2065, -0.2065, 0.3392, 0.7982, -12.9318)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite35`} />
        <use height="34.25" transform="matrix(-0.3987, 0.0, 0.0, 0.3987, 10.8109, -28.167)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite39`} />
        <use height="45.0" transform="matrix(-0.288, -0.2735, -0.175, 0.1843, 1.3559, -17.0016)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite44`} />
        <use height="44.05" transform="matrix(-0.3453, -0.1994, -0.2137, 0.337, 16.0614, -21.3347)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite49`} />
        <use height="44.2" transform="matrix(-0.3453, -0.1994, -0.1994, 0.3453, 21.4743, -28.5932)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite55`} />
        <use height="115.65" transform="matrix(-0.3326, -0.0539, -0.0539, 0.3326, 33.3807, -61.3805)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite62`} />
        <use height="26.45" transform="matrix(-0.3719, -0.1423, -0.1423, 0.3719, -10.6896, -30.5472)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite75`} />
        <use height="30.75" transform="matrix(0.0, -0.3987, -0.3987, 0.0, 1.0996, -26.6163)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite79`} />
        <use height="48.0" transform="matrix(-0.0908, -0.3876, -0.3876, 0.0908, 10.2782, -27.4914)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite83`} />
        <use height="80.8" transform="matrix(-0.1994, -0.3453, -0.3453, 0.1994, 7.6526, -26.2114)" width="85.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite87`} />
        <use height="42.3" transform="matrix(-0.3562, 0.1778, 0.1778, 0.3562, 22.8553, -48.4865)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite93`} />
        <use height="18.15" transform="matrix(0.3877, -0.0931, 0.0931, 0.3877, 15.3356, -29.7191)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite96`} />
      </g>
      <defs>
        <g id={`ThrowMaleBrute-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.75" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.25, -15.5)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite1`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite2`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite3`} />
          <use height="30.55" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite4`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.2, 0.3)" width="12.4" xlinkHref={`#ThrowMaleBrute-${id}-shape0`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.2, -0.3)">
          <path d="M3.25 1.5 Q5.3 3.1 6.2 6.75 L5.5 24.35 4.35 26.8 3.15 27.6 Q1.45 28.6 -0.55 28.15 L-0.4 26.55 0.0 22.65 Q0.25 18.35 0.15 13.0 L-0.2 0.3 Q1.7 0.4 3.25 1.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-0.2 0.3 L0.15 13.0 Q0.25 18.35 0.0 22.65 L-0.4 26.55 -0.55 28.15 -2.1 27.65 Q-3.4 27.15 -4.0 26.55 -4.8 25.75 -4.85 24.65 L-6.2 6.95 Q-6.25 4.65 -5.35 3.25 -3.85 0.8 -0.2 0.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.35 26.8 L5.5 24.35 6.2 6.75 Q5.3 3.1 3.25 1.5 M-5.35 3.25 Q-6.25 4.65 -6.2 6.95 L-4.85 24.65 Q-4.8 25.75 -4.0 26.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="44.75" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -30.15, -20.3)" width="45.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite6`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.15, 20.3)">
          <use height="37.75" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite7`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="37.75" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.45, -17.2)" width="38.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite8`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.45, 17.2)">
          <use height="14.1" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite9`} />
          <use height="22.3" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(-0.7987, 0.5992, 0.5992, 0.7987, -0.6469, -17.1943)" width="24.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <use height="14.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#ThrowMaleBrute-${id}-shape1`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.0, 7.05)">
          <path d="M1.05 7.0 Q2.3 5.95 3.0 3.85 L3.85 -1.05 Q3.75 -3.05 1.1 -6.05 L0.4 -6.9 Q0.6 -7.15 0.7 -6.9 L0.95 -6.9 Q4.1 -6.6 5.85 -4.25 7.35 -2.15 6.9 1.2 6.55 3.6 4.95 5.2 L4.35 5.75 Q3.2 6.65 1.95 6.9 L1.05 7.0" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M0.4 -6.9 L1.1 -6.05 Q3.75 -3.05 3.85 -1.05 L3.0 3.85 Q2.3 5.95 1.05 7.0 L0.95 7.05 0.8 7.05 -1.15 6.95 -1.4 6.7 Q-4.05 6.25 -5.55 4.25 -6.85 2.5 -6.9 0.45 L-7.0 -1.2 Q-6.5 -3.55 -4.9 -5.15 -4.75 -5.55 -4.2 -5.75 -3.55 -6.4 -2.6 -6.55 -1.25 -7.25 0.4 -6.9" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.95 5.2 Q6.55 3.6 6.9 1.2 7.35 -2.15 5.85 -4.25 4.1 -6.6 0.95 -6.9 L0.7 -6.9 Q0.6 -7.15 0.4 -6.9 -1.25 -7.25 -2.6 -6.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.2, 12.95)">
          <use height="38.95" id={`ThrowMaleBrute-${id}-_p8`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.2, -12.95)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite12`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 17.1)">
          <use height="27.4" id={`ThrowMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -5.55)" width="40.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite13`} />
          <use height="32.1" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.75, -16.35)" width="36.1" xlinkHref={`#ThrowMaleBrute-${id}-sprite14`} />
          <use height="33.25" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.4, -17.1)" width="36.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite15`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <use height="32.1" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.05, -16.05)" width="36.1" xlinkHref={`#ThrowMaleBrute-${id}-shape2`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.05, 16.05)">
          <path d="M-1.1 -15.25 L-0.25 -13.75 Q0.7 -11.8 2.35 -9.3 L6.8 -3.9 Q9.45 -0.9 11.6 0.55 13.9 2.05 16.35 2.7 L17.65 4.5 17.0 5.15 17.0 5.35 17.2 5.5 17.2 5.65 Q19.15 7.65 16.5 8.6 L16.35 8.3 15.55 7.8 15.35 7.8 15.05 7.65 14.55 7.45 Q12.9 7.15 11.25 8.3 11.1 8.3 11.1 8.45 11.25 8.45 11.4 8.6 11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 12.9 9.95 11.4 8.6 9.75 9.45 8.8 9.75 Q7.95 9.75 7.8 10.45 L7.65 10.6 Q7.65 10.95 8.15 11.4 L9.45 12.25 9.6 12.25 Q7.8 12.75 5.0 11.75 2.2 10.6 1.2 7.65 0.05 4.5 -0.75 3.35 -1.75 2.2 -4.7 2.2 L-8.15 2.2 -8.35 1.85 -8.65 1.4 -8.8 0.55 -9.5 -2.4 Q-9.8 -4.85 -9.5 -7.0 -8.8 -10.3 -8.65 -13.1 L-8.5 -16.05 -1.1 -15.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-8.5 -16.05 L-8.65 -13.1 Q-8.8 -10.3 -9.5 -7.0 -9.8 -4.85 -9.5 -2.4 L-8.8 0.55 -8.65 1.4 -8.35 1.85 -8.15 2.2 -4.7 2.2 Q-1.75 2.2 -0.75 3.35 0.05 4.5 1.2 7.65 2.2 10.6 5.0 11.75 7.8 12.75 9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 12.9 9.95 12.9 10.1 13.05 10.25 12.9 10.1 12.9 9.95 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 L-17.85 1.55 -18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 Q-14.25 -13.9 -12.45 -14.9 -10.45 -15.75 -8.5 -16.05 M13.05 10.25 L13.05 10.45 13.25 10.45 13.05 10.25 M14.05 12.1 L13.25 10.45 14.05 12.1 M11.75 11.4 Q10.25 12.4 9.6 12.25 10.25 12.4 11.75 11.4" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M13.25 10.45 L13.05 10.45 13.05 10.25 13.25 10.45" fill="#e89f48" fillRule="evenodd" stroke="none" />
          <path d="M16.5 8.6 Q19.15 7.65 17.2 5.65 L17.2 5.5 17.0 5.35 17.0 5.15 17.65 4.5 16.35 2.7 Q13.9 2.05 11.6 0.55 9.45 -0.9 6.8 -3.9 L2.35 -9.3 Q0.7 -11.8 -0.25 -13.75 L-1.1 -15.25 M9.6 12.25 L9.45 12.25 8.15 11.4 Q7.65 10.95 7.65 10.6 L7.8 10.45 Q7.95 9.75 8.8 9.75 L9.75 9.45 11.4 8.6 Q11.25 8.45 11.1 8.45 11.1 8.3 11.25 8.3 12.9 7.15 14.55 7.45 L15.05 7.65 15.35 7.8 15.55 7.8 16.35 8.3 16.5 8.6 16.7 9.1 Q16.85 10.1 15.7 10.75 L14.05 12.1 13.55 14.4 11.25 16.05 5.15 15.05 3.2 14.55 Q1.4 12.9 0.9 11.25 L0.05 10.25 Q-1.25 8.6 -3.25 7.8 -4.85 7.0 -6.7 6.8 L-14.1 5.15 Q-14.25 5.0 -14.4 5.0 -15.25 5.0 -15.55 4.35 -17.4 3.5 -17.7 1.7 M-17.85 1.55 L-18.05 0.55 Q-18.05 -1.4 -17.4 -4.05 -16.7 -6.35 -16.4 -9.3 L-15.9 -12.6 M13.25 10.45 L13.05 10.25 12.9 10.1 12.9 9.95 11.4 8.6 M13.25 10.45 L14.05 12.1 M12.9 9.95 L16.35 8.3 M9.6 12.25 Q10.25 12.4 11.75 11.4" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 17.85)">
          <use height="33.25" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -17.85)" width="36.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite16`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.55, 4.4)">
          <use height="52.5" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -29.55, -4.4)" width="53.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite18`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 29.45, 20.8)">
          <use height="52.5" id={`ThrowMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -24.0, -20.8)" width="43.9" xlinkHref={`#ThrowMaleBrute-${id}-sprite19`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.0, 20.8)">
          <use height="37.35" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite20`} />
          <use height="49.6" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(0.9969, -0.0749, 0.0749, 0.9969, -24.0105, -17.758)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite21`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#ThrowMaleBrute-${id}-shape3`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 18.65)">
          <path d="M0.3 18.7 Q-0.7 11.7 -0.55 11.15 L0.15 -5.25 0.05 -18.6 Q3.4 -18.45 5.5 -16.1 L5.95 -15.65 6.9 -13.35 6.75 12.25 Q6.45 14.0 5.75 15.25 4.05 18.45 0.3 18.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 -0.55 11.15 Q-0.7 11.7 0.3 18.7 -3.55 17.8 -5.25 16.05 -6.8 14.5 -6.65 12.15 L-6.9 -13.5 -5.45 -16.15 -4.05 -17.4 Q-2.4 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M5.75 15.25 Q6.45 14.0 6.75 12.25 L6.9 -13.35 5.95 -15.65 M-5.45 -16.15 L-6.9 -13.5 -6.65 12.15 Q-6.8 14.5 -5.25 16.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 23.05, 21.1)">
          <use height="33.65" id={`ThrowMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite22`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <use height="33.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.5, -6.05)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-shape4`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.5, 6.05)">
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 13.2 -2.55 14.2 -1.05 10.05 -1.2 Q6.95 -1.3 9.55 0.2 12.95 1.95 14.85 5.35 L15.1 5.6 14.45 5.6 Q10.05 4.85 11.85 8.6 12.85 10.75 13.2 13.0 L11.35 11.75 Q10.3 11.0 9.2 10.75 6.05 9.75 7.45 12.4 9.05 14.9 9.2 18.05 7.2 17.15 6.45 19.3 5.3 22.45 4.9 26.1" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M11.95 -4.7 L17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Q5.3 22.45 6.45 19.3 7.2 17.15 9.2 18.05 9.05 14.9 7.45 12.4 6.05 9.75 9.2 10.75 10.3 11.0 11.35 11.75 L13.2 13.0 Q12.85 10.75 11.85 8.6 10.05 4.85 14.45 5.6 L15.1 5.6 14.85 5.35 Q12.95 1.95 9.55 0.2 6.95 -1.3 10.05 -1.2 L14.2 -1.05 13.2 -2.55 11.95 -4.7" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M4.9 26.1 Q4.05 26.55 3.15 26.95 1.65 24.95 0.5 22.95 -1.1 20.8 -2.0 18.55 L-4.4 19.8 Q-3.5 13.9 -1.1 8.75 L-4.5 9.35 -2.25 4.7 Q-1.75 3.45 -0.85 2.35 L-2.25 1.95 Q-1.6 0.7 -0.35 -0.3 1.0 -1.3 2.65 -2.05 L2.4 -2.55 1.9 -3.2 1.9 -3.7 2.05 -4.1 7.2 -3.95 8.3 -4.7 Q10.3 -6.95 11.45 -5.45 L11.95 -4.7 17.5 -5.35 16.25 -4.1 19.6 -2.55 23.15 -1.05 23.25 -0.7 22.0 -0.55 20.15 -0.7 25.9 9.85 22.15 7.35 23.25 12.65 24.0 16.4 20.65 13.5 Q21.15 18.3 18.35 23.3 17.85 24.05 17.6 24.95 L16.85 24.8 Q15.75 23.7 15.2 22.45 L5.8 27.6 5.15 26.1 4.9 26.1 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.85, 2.25)">
          <use height="43.1" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.85, -2.25)" width="31.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite24`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite24`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.75, 18.65)">
          <use height="43.1" id={`ThrowMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite25`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite25`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.4, 18.65)">
          <use height="37.35" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite26`} />
          <use height="33.8" id={`ThrowMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite27`} />
          <use height="43.1" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.4, -18.65)" width="22.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite28`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite26`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.0, 18.65)">
          <use height="37.35" transform="matrix(1.1594, 0.0, 0.0, 1.0, -8.0, -18.65)" width="13.8" xlinkHref={`#ThrowMaleBrute-${id}-shape3`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite27`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <use height="33.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.2, -18.65)" width="17.2" xlinkHref={`#ThrowMaleBrute-${id}-shape5`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.2, 18.65)">
          <path d="M-0.6 15.15 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.5 10.9 6.2 12.6 3.85 14.25 -0.6 15.15" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 15.15 Q-3.15 14.9 -4.9 14.0 -6.65 13.05 -7.6 10.95 -8.55 8.9 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.6 15.15" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-6.3 -16.15 Q-7.25 -15.05 -8.0 -13.5 L-8.0 3.75 Q-8.55 8.9 -7.6 10.95 -6.65 13.05 -4.9 14.0 -3.15 14.9 -0.6 15.15 3.85 14.25 6.2 12.6 8.5 10.9 9.0 7.6 L8.0 -13.35 6.9 -15.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite29`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.0, 17.7)">
          <use height="40.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.0, -17.7)" width="30.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite30`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite30`} transform="matrix(1.0, 0.0, 0.0, 1.0, 18.7, 20.85)">
          <use height="35.6" id={`ThrowMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.7, -15.9)" width="29.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite31`} />
          <use height="33.4" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -16.15, -20.0)" width="25.45" xlinkHref={`#ThrowMaleBrute-${id}-sprite32`} />
          <use height="38.65" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -18.2, -20.85)" width="30.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite33`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite32`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <use height="33.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.75, -16.7)" width="25.45" xlinkHref={`#ThrowMaleBrute-${id}-shape6`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape6`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.75, 16.7)">
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 Q8.0 9.15 6.25 11.75 L5.9 12.55 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 L10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 -1.7 17.55 -5.3 15.6 L-5.6 14.95 -4.95 12.4 -4.65 8.95 -4.95 12.4 -5.6 14.95 -7.55 16.45 -10.5 15.95 -12.45 14.3 -12.45 14.0 Q-12.1 12.7 -10.35 12.2 L-7.4 13.35 -6.45 13.2 -6.75 12.2 -6.25 10.9 -4.65 8.95 Q-4.15 8.95 -3.85 9.6 -3.5 10.25 -3.5 11.25 -4.55 11.55 -4.15 12.2 L-3.65 12.7 -3.65 13.2 -2.35 13.5 -2.05 13.35 -1.9 13.35 -0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 0.7 12.2 1.7 13.05 1.7 13.35 1.85 13.85 3.95 13.85 1.85 13.85 1.7 13.35 3.95 13.85 4.45 13.65 4.6 13.2 4.6 11.4 4.75 11.4 6.25 7.65 3.15 3.45 1.05 -0.1 Q1.2 -2.55 1.5 -4.5 1.7 -6.6 0.85 -11.3 L-0.1 -16.5 -0.1 -16.7 Q3.0 -16.7 5.25 -15.85 L6.4 -15.4 7.7 -14.75 8.85 -13.6 Q8.85 -13.25 9.0 -12.95 M-0.1 13.5 L0.05 14.65 -0.1 13.5 M7.55 12.2 L7.85 11.9 Q8.85 11.9 9.0 12.55 L9.0 13.05 7.55 12.7 7.55 12.2 7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2 M5.9 12.55 L6.05 13.5 5.9 12.55" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M9.65 -9.55 L9.0 -12.95 9.3 -12.15 9.65 -9.55 M-0.1 -16.5 L0.85 -11.3 Q1.7 -6.6 1.5 -4.5 1.2 -2.55 1.05 -0.1 L3.15 3.45 6.25 7.65 4.75 11.4 4.6 11.4 2.8 10.6 Q1.35 10.1 0.2 11.4 1.35 10.1 2.8 10.6 L4.6 11.4 4.6 13.2 4.45 13.65 Q4.1 11.75 2.0 12.7 L1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 1.7 13.35 1.7 13.05 0.7 12.2 0.2 11.4 -0.1 12.05 -0.25 12.05 -3.0 11.1 -3.5 11.25 -3.0 11.1 -0.25 12.05 -0.1 12.4 -0.1 13.5 -1.9 13.35 Q-0.75 12.4 -3.0 12.4 -3.35 12.4 -3.65 12.7 -3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-2.05 13.35 -2.35 13.5 -3.65 13.2 -1.9 13.35 -3.65 13.2 -3.65 12.7 -4.15 12.2 Q-4.55 11.55 -3.5 11.25 -3.5 10.25 -3.85 9.6 -4.15 8.95 -4.65 8.95 L-6.25 10.9 -6.75 12.2 -6.45 13.2 -7.4 13.35 -10.35 12.2 Q-12.1 12.7 -12.45 14.0 L-12.45 14.3 -12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 Q-6.75 -16.5 -0.75 -16.5 L-0.1 -16.5 M-7.4 8.3 L-9.85 8.15 -12.1 9.95 -9.85 8.15 -7.4 8.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-0.1 12.4 L-0.25 12.05 -0.1 12.05 -0.1 12.4" fill="#c16308" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -12.95 L9.65 -9.55 9.8 -8.4 9.8 -7.25 Q9.95 -4.35 10.6 -1.25 11.25 1.65 12.4 4.75 L12.7 6.55 10.8 11.25 10.6 13.35 10.45 14.3 Q8.65 15.45 7.7 14.65 L6.05 13.5 Q5.9 17.25 1.85 16.6 -0.1 16.75 0.05 14.65 L-0.1 13.5 -0.1 12.4 -0.1 12.05 0.2 11.4 Q1.35 10.1 2.8 10.6 L4.6 11.4 4.75 11.4 5.9 12.55 6.25 11.75 Q8.0 9.15 10.8 11.25 M9.0 -12.95 Q8.85 -13.25 8.85 -13.6 M-12.45 14.3 L-12.6 14.0 -12.75 13.2 Q-12.6 11.55 -12.1 9.95 -11.8 7.2 -11.15 4.6 L-9.5 -0.3 Q-8.85 -1.9 -8.55 -3.35 L-7.55 -7.45 -6.75 -10.85 M-0.25 12.05 L-3.0 11.1 -3.5 11.25 M-0.25 12.05 L-0.1 12.05 M-4.65 8.95 L-4.95 12.4 -5.6 14.95 -5.3 15.6 Q-1.7 17.55 0.05 14.65 M-12.45 14.3 L-10.5 15.95 -7.55 16.45 -5.6 14.95 M-12.1 9.95 L-9.85 8.15 -7.4 8.3 M6.05 13.5 L5.9 12.55" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-3.65 12.7 Q-3.35 12.4 -3.0 12.4 -0.75 12.4 -1.9 13.35 L-3.65 13.2 -3.65 12.7 M3.95 13.85 L1.85 13.85 1.7 13.35 1.7 13.05 2.0 12.7 Q4.1 11.75 4.45 13.65 L3.95 13.85 M-6.75 12.2 L-6.45 13.2 -7.4 13.35 -10.35 12.2 M7.55 12.2 L7.55 12.7 9.0 13.05 9.0 12.55 Q8.85 11.9 7.85 11.9 L7.55 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite33`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.25, 19.35)">
          <use height="38.65" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.0, -19.35)" width="29.95" xlinkHref={`#ThrowMaleBrute-${id}-sprite34`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite35`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.75, 4.6)">
          <use height="51.8" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.75, -4.6)" width="41.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite36`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite36`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.65, 21.0)">
          <use height="51.8" id={`ThrowMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite37`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite37`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.8, 21.0)">
          <use height="37.35" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite20`} />
          <use height="51.8" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.8, -21.0)" width="33.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite38`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite38`} transform="matrix(1.0, 0.0, 0.0, 1.0, 16.35, 22.55)">
          <use height="33.65" id={`ThrowMaleBrute-${id}-_col2`} transform="matrix(1.0203, -0.0668, 0.077, 1.1768, -16.3576, -19.0691)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite22`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite39`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.85, 18.1)">
          <use height="34.25" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -22.85, -18.1)" width="46.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite40`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite40`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.8, 24.05)">
          <use height="29.55" id={`ThrowMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite41`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite41`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.8, 20.75)">
          <use height="29.15" id={`ThrowMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.55, -20.5)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite42`} />
          <use height="29.55" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.8, -20.75)" width="30.8" xlinkHref={`#ThrowMaleBrute-${id}-sprite43`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite42`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <use height="29.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -15.2, -14.6)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-shape7`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape7`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.2, 14.6)">
          <path d="M-14.2 2.05 L-14.55 0.8 Q-15.4 -2.05 -15.15 -3.75 -14.8 -6.05 -11.55 -9.8 -8.55 -13.6 -2.3 -14.6 L2.45 -14.25 Q1.95 -10.8 3.0 -2.0 4.0 6.75 -1.5 8.75 L-2.8 8.95 -5.05 9.1 Q-8.1 8.95 -10.55 7.15 -10.85 6.95 -11.2 7.15 L-11.35 7.3 -11.85 6.65 Q-13.15 4.8 -13.85 3.0 L-14.0 2.6 -14.2 2.05" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-11.35 7.3 L-11.2 7.15 Q-10.85 6.95 -10.55 7.15 -8.1 8.95 -5.05 9.1 L-2.8 8.95 -1.5 8.75 Q4.0 6.75 3.0 -2.0 1.95 -10.8 2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 L-3.8 13.55 -6.25 12.2 Q-6.6 11.95 -6.9 11.75 L-7.6 11.25 -8.75 10.1 -8.9 9.9 -9.55 9.25 -10.35 8.45 -11.35 7.3" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M2.45 -14.25 L-2.3 -14.6 Q-8.55 -13.6 -11.55 -9.8 -14.8 -6.05 -15.15 -3.75 -15.4 -2.05 -14.55 0.8 L-14.2 2.05 M2.45 -14.25 L5.4 -13.45 7.55 -12.6 7.9 -12.45 Q8.4 -12.3 9.05 -11.8 L9.85 -11.45 10.2 -11.15 10.35 -11.0 11.35 -10.3 12.85 -8.2 14.5 -4.55 Q15.45 -1.45 15.15 2.35 14.65 9.6 8.55 12.55 2.45 15.85 -3.65 13.7 M-3.8 13.55 L-6.25 12.2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite44`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.7, 2.85)">
          <use height="45.0" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -12.7, -2.85)" width="29.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite45`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite45`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.6, 19.25)">
          <use height="45.0" id={`ThrowMaleBrute-${id}-_p6`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#ThrowMaleBrute-${id}-sprite46`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite46`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.9, 19.25)">
          <use height="37.35" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.0, -18.65)" width="16.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite26`} />
          <use height="31.6" id={`ThrowMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.15, -18.95)" width="17.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite47`} />
          <use height="45.0" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -19.25)" width="20.95" xlinkHref={`#ThrowMaleBrute-${id}-sprite48`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite47`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <use height="31.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.25, -18.65)" width="17.25" xlinkHref={`#ThrowMaleBrute-${id}-shape8`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape8`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.25, 18.65)">
          <path d="M-0.5 12.9 L-0.55 11.35 -0.3 5.8 Q0.0 0.55 0.15 -5.25 L0.05 -18.6 Q3.95 -18.45 6.35 -16.1 L6.9 -15.65 8.0 -13.35 9.0 7.6 Q8.55 9.9 6.25 11.55 3.9 13.15 -0.5 12.9" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M0.05 -18.6 L0.15 -5.25 Q0.0 0.55 -0.3 5.8 L-0.55 11.35 -0.5 12.9 Q-3.0 12.55 -4.85 11.65 -6.75 10.75 -7.7 9.3 -8.65 7.85 -8.0 3.75 L-8.0 -13.5 Q-7.25 -15.05 -6.3 -16.15 L-4.7 -17.4 Q-2.8 -18.9 0.05 -18.6" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-0.5 12.9 Q3.9 13.15 6.25 11.55 8.55 9.9 9.0 7.6 L8.0 -13.35 M-8.0 -13.5 L-8.0 3.75 Q-8.65 7.85 -7.7 9.3 -6.75 10.75 -4.85 11.65 -3.0 12.55 -0.5 12.9 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite49`} transform="matrix(1.0, 0.0, 0.0, 1.0, 30.8, 11.35)">
          <use height="44.35" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, -0.0697, 0.9926, -27.6904, -11.3459)" width="63.95" xlinkHref={`#ThrowMaleBrute-${id}-sprite50`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite50`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.65, 20.95)">
          <use height="44.25" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -20.9)" width="37.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite51`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite51`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.05, 20.9)">
          <use height="22.55" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite52`} />
          <use height="44.25" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.05, -20.9)" width="37.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite53`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite52`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <use height="22.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -10.7, -20.8)" width="28.0" xlinkHref={`#ThrowMaleBrute-${id}-shape9`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape9`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.7, 20.8)">
          <path d="M-1.05 1.4 Q-2.9 1.1 -4.4 0.4 -6.55 -0.1 -8.2 -1.4 -10.2 -2.4 -10.7 -4.95 L-10.55 -6.1 -10.2 -8.45 Q-9.7 -11.75 -8.7 -14.75 -8.2 -16.45 -6.2 -17.95 -4.2 -19.6 -1.55 -20.45 L2.8 -20.8 3.65 -20.8 Q3.65 -18.95 4.65 -17.3 L4.85 -16.85 5.2 -14.75 4.65 -12.95 Q2.95 -10.1 3.15 -7.1 3.15 -4.1 1.45 -1.9 L-1.05 1.4 M-4.9 -7.45 Q-6.2 -7.1 -5.7 -6.25 -5.4 -6.1 -5.2 -6.45 -5.05 -6.45 -5.05 -6.6 L-4.9 -7.45 -4.9 -9.75 -4.9 -7.45" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-1.05 1.4 L1.45 -1.9 Q3.15 -4.1 3.15 -7.1 2.95 -10.1 4.65 -12.95 L5.2 -14.75 4.85 -16.85 4.65 -17.3 Q3.65 -18.95 3.65 -20.8 L4.45 -20.65 8.8 -19.45 9.65 -18.95 Q10.9 -18.15 12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 Q-0.85 1.4 -1.05 1.4 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.65 -20.8 L2.8 -20.8 -1.55 -20.45 Q-4.2 -19.6 -6.2 -17.95 -8.2 -16.45 -8.7 -14.75 -9.7 -11.75 -10.2 -8.45 L-10.55 -6.1 -10.7 -4.95 Q-10.2 -2.4 -8.2 -1.4 -6.55 -0.1 -4.4 0.4 -2.9 1.1 -1.05 1.4 M3.65 -20.8 L4.45 -20.65 8.8 -19.45 M12.5 -17.8 L13.8 -17.3 14.1 -16.8 Q14.65 -15.9 14.5 -14.75 14.4 -12.55 15.5 -10.1 L17.15 -5.6 Q17.8 -3.75 15.15 -1.9 12.3 -0.1 10.3 0.4 L5.8 1.75 1.8 1.75 0.3 1.75 -0.7 1.6 M-4.9 -7.45 L-5.05 -6.6 Q-5.05 -6.45 -5.2 -6.45 -5.4 -6.1 -5.7 -6.25 -6.2 -7.1 -4.9 -7.45 L-4.9 -9.75" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite53`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.95, 28.0)">
          <use height="28.6" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -17.0, -14.3)" width="34.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite54`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite55`} transform="matrix(1.0, 0.0, 0.0, 1.0, 37.35, 19.95)">
          <use height="44.2" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -37.35, -19.95)" width="79.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite56`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite56`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 4.05)">
          <use height="41.1" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, -2.8)" width="54.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite57`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite57`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.5, 2.8)">
          <use height="25.5" id={`ThrowMaleBrute-${id}-_p7b`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.5, 0.5)" width="20.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite58`} />
          <use height="35.0" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(0.9077, 0.0, 0.0, 0.9077, -0.0172, 0.0158)" width="39.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite59`} />
          <use height="41.1" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -4.2, -2.8)" width="51.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite60`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite59`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <use height="35.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.85, -17.5)" width="39.75" xlinkHref={`#ThrowMaleBrute-${id}-shape10`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape10`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.85, 17.5)">
          <path d="M-3.2 -16.85 L1.5 -17.5 1.65 -17.5 10.9 -16.7 11.55 -16.6 11.7 -16.6 13.8 -16.15 17.95 -14.65 19.05 -13.85 19.75 -12.5 19.9 -10.65 Q19.85 -9.1 19.4 -7.6 18.55 -4.9 17.05 -2.35 L14.1 2.45 Q12.7 4.5 10.9 6.2 L4.95 13.8 4.7 14.1 Q2.65 15.75 0.15 16.4 L-1.0 16.7 -2.3 17.0 -4.55 17.3 -6.75 17.5 -6.75 17.45 Q-5.75 14.95 -5.4 12.35 L-4.9 10.55 -4.45 9.4 Q-3.6 7.5 -5.3 6.3 L-5.45 5.95 -5.1 5.75 -4.2 5.55 -1.7 4.65 Q0.75 3.65 2.75 2.0 L4.85 0.35 7.4 -1.6 Q9.35 -3.15 11.15 -4.85 L12.65 -6.55 13.4 -8.0 Q13.6 -8.6 13.4 -9.15 12.4 -12.05 9.4 -12.4 L7.7 -12.15 5.65 -11.3 1.25 -9.2 Q-1.15 -8.1 -3.7 -7.55 L-5.95 -7.5 Q-7.45 -7.85 -8.5 -9.0 L-9.0 -9.95 Q-9.35 -11.15 -8.75 -12.35 L-7.15 -15.5 Q-5.7 -16.35 -3.45 -16.8 L-3.2 -16.85" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-3.2 -16.85 L-3.45 -16.8 -3.5 -16.8 -3.2 -16.85 M-7.15 -15.5 L-8.75 -12.35 Q-9.35 -11.15 -9.0 -9.95 L-8.5 -9.0 Q-7.45 -7.85 -5.95 -7.5 L-3.7 -7.55 Q-1.15 -8.1 1.25 -9.2 L5.65 -11.3 7.7 -12.15 9.4 -12.4 Q12.4 -12.05 13.4 -9.15 13.6 -8.6 13.4 -8.0 L12.65 -6.55 11.15 -4.85 Q9.35 -3.15 7.4 -1.6 L4.85 0.35 2.75 2.0 Q0.75 3.65 -1.7 4.65 L-4.2 5.55 -5.1 5.75 -5.45 5.95 -5.3 6.3 Q-3.6 7.5 -4.45 9.4 L-4.9 10.55 -5.4 12.35 Q-5.75 14.95 -6.75 17.45 L-9.5 17.3 Q-12.35 17.0 -14.95 15.85 -18.15 14.45 -19.85 11.4 L-19.8 10.5 -19.65 6.85 -18.4 0.1 -18.3 -0.25 -18.3 -0.3 -18.4 -0.6 -18.45 -0.75 -18.75 -1.7 -18.7 -2.95 -18.75 -1.7 -18.9 -2.15 -18.7 -2.95 -18.65 -3.2 -18.6 -3.4 -17.55 -6.15 Q-16.75 -8.2 -14.85 -9.55 L-14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -17.9 -5.55 -16.9 -7.45 Q-16.15 -8.7 -14.9 -9.55 L-14.1 -10.1 -13.65 -10.5 -12.0 -11.9 -10.95 -12.85 -8.25 -14.8 -7.75 -15.05 -7.15 -15.5 -7.75 -15.05 -8.25 -14.8 -8.0 -14.95 -7.15 -15.5 M-12.45 1.15 L-15.95 0.65 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-5.1 5.75 L-7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 -9.7 2.8 Q-9.0 4.4 -7.3 5.0 L-5.1 5.75" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M11.55 -16.6 L10.9 -16.7 1.65 -17.5 1.5 -17.5 -3.2 -16.85 -3.45 -16.8 Q-5.7 -16.35 -7.15 -15.5 L-7.75 -15.05 -8.25 -14.8 -10.95 -12.85 -12.0 -11.9 -13.65 -10.5 -14.1 -10.1 -14.85 -9.55 Q-16.75 -8.2 -17.55 -6.15 L-18.6 -3.4 -18.65 -3.2 -18.7 -2.95 -18.75 -1.7 -18.45 -0.75 -18.4 -0.6 -18.3 -0.3 -18.3 -0.25 -15.95 0.65 -12.45 1.15 M-4.2 5.55 L-5.1 5.75 -7.3 5.0 Q-9.0 4.4 -9.7 2.8 L-11.0 0.05 M4.95 13.8 L10.9 6.2 Q12.7 4.5 14.1 2.45 L17.05 -2.35 Q18.55 -4.9 19.4 -7.6 19.85 -9.1 19.9 -10.65 L19.75 -12.5 19.05 -13.85 17.95 -14.65 13.8 -16.15 11.7 -16.6 M-18.3 -0.25 L-18.4 0.1 -19.65 6.85 -19.8 10.5" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite60`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 17.95)">
          <use height="33.6" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -19.35, -15.85)" width="40.9" xlinkHref={`#ThrowMaleBrute-${id}-sprite61`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite61`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.35, 15.85)">
          <use height="31.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.3, -15.85)" width="38.65" xlinkHref={`#ThrowMaleBrute-${id}-shape11`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape11`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.3, 15.85)">
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 -4.6 -5.5 -5.0 -3.75 -6.1 2.95 -13.2 4.25 M-4.85 2.2 L-5.5 3.0 Q-6.15 3.4 -6.65 3.95 L-4.85 2.2 M-10.85 -5.35 L-9.8 -5.7 Q-9.95 -6.7 -11.4 -6.5 L-12.75 -5.85 Q-15.7 -2.8 -13.4 -0.15 -12.9 0.35 -12.45 0.05 -12.3 0.05 -12.3 0.2 -11.6 1.2 -10.2 1.2 -9.1 1.25 -7.95 0.35 -7.0 -0.7 -6.8 -2.1 -6.7 -3.7 -7.4 -4.6 L-7.7 -4.85 Q-8.4 -5.6 -9.55 -5.65 L-10.85 -5.35" fill="#ffcc00" fillRule="evenodd" stroke="none" />
          <path d="M-4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -6.65 3.95 Q-8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 -6.1 2.95 -5.0 -3.75 -4.6 -5.5 -4.5 -7.35 M-12.45 0.05 Q-12.9 0.35 -13.4 -0.15 -15.7 -2.8 -12.75 -5.85 L-11.4 -6.5 Q-9.95 -6.7 -9.8 -5.7 L-10.85 -5.35 -11.3 -5.05 -11.6 -4.85 -11.75 -4.85 -11.8 -4.7 Q-12.75 -3.75 -12.85 -2.25 -13.0 -1.0 -12.45 0.05" fill="#e6941a" fillRule="evenodd" stroke="none" />
          <path d="M-13.2 4.25 L-14.8 2.9 Q-16.3 0.7 -16.05 -2.3 -15.8 -5.35 -13.65 -7.35 -11.55 -9.45 -8.85 -9.4 -6.2 -9.4 -4.5 -7.35 L-3.4 -5.15 Q-3.05 -3.7 -3.25 -2.2 -3.45 0.2 -4.65 1.95 L-4.85 2.2 -5.5 3.0 Q-6.15 3.4 -6.65 3.95 -8.35 4.95 -10.3 5.0 -11.95 4.85 -13.2 4.25 M-10.85 -5.35 L-9.55 -5.65 Q-8.4 -5.6 -7.7 -4.85 L-7.4 -4.6 Q-6.7 -3.7 -6.8 -2.1 -7.0 -0.7 -7.95 0.35 -9.1 1.25 -10.2 1.2 -11.6 1.2 -12.3 0.2 -12.3 0.05 -12.45 0.05 -13.0 -1.0 -12.85 -2.25 -12.75 -3.75 -11.8 -4.7 L-11.75 -4.85 -11.6 -4.85 -11.3 -5.05 -10.85 -5.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="0.05" />
          <path d="M-7.45 -2.2 L-10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 L11.25 -14.8 11.75 -13.85 Q9.95 -13.2 8.35 -12.25 2.55 -9.0 -2.8 -4.95 L-4.1 -6.25 -5.05 -5.45 -6.0 -4.15 -7.45 -2.2 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 Q-14.55 -0.1 -14.9 0.5 -17.15 3.1 -17.8 6.5 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 -8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 Q-1.65 8.45 -3.45 8.1 L-3.75 8.1 Q-5.2 8.9 -5.35 10.85 L-5.35 12.65" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -6.0 -4.15 -5.05 -5.45 -4.1 -6.25 -2.8 -4.95 Q2.55 -9.0 8.35 -12.25 9.95 -13.2 11.75 -13.85 L11.25 -14.8 10.95 -15.3 M-13.9 -0.3 L-13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 -17.8 6.5 Q-17.15 3.1 -14.9 0.5 -14.55 -0.1 -13.9 -0.3 M-0.5 7.6 L0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65 -5.35 10.85 Q-5.2 8.9 -3.75 8.1 L-3.45 8.1 Q-1.65 8.45 -0.5 7.6" fill="#764701" fillRule="evenodd" stroke="none" />
          <path d="M10.95 -15.3 L12.4 -15.6 Q13.85 -16.1 15.8 -15.6 17.55 -15.3 19.35 -12.25 12.85 -11.9 9.65 -10.45 L8.7 -10.15 8.5 -9.95 Q5.15 -8.35 0.45 -5.15 L-1.65 -3.85 Q-4.7 -2.2 -7.0 -2.2 L-7.45 -2.2 -10.05 -2.55 -10.2 -4.3 Q-13.1 -6.4 -2.8 -10.45 5.95 -13.85 10.95 -15.3 M-17.95 7.0 L-19.25 5.55 Q-19.75 2.3 -16.5 0.2 L-14.75 -0.6 -13.9 -0.3 -13.45 -0.1 -13.45 0.05 Q-13.1 -0.1 -12.95 0.2 -16.2 4.05 -15.85 9.4 L-17.95 7.0 M-5.35 12.65 Q-8.6 10.35 -10.35 6.8 -12.65 2.45 -11.35 -1.25 L-10.2 -2.2 -8.25 -0.95 M-8.45 -0.95 Q-5.35 5.7 -0.7 7.45 L-0.5 7.6 0.45 7.95 0.75 8.1 Q4.5 9.4 6.75 9.4 9.15 9.25 10.45 10.2 L10.8 14.4 2.85 15.85 Q-1.15 15.05 -4.1 13.45 L-5.35 12.65" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M-13.05 -6.95 Q-11.05 -6.15 -13.35 -4.65 -14.8 -3.8 -14.9 -4.8 -15.25 -6.3 -13.05 -6.95 M-10.9 -7.8 Q-10.95 -8.0 -9.85 -8.3 L-9.15 -8.65 -7.65 -8.65 Q-7.1 -8.65 -7.4 -8.3 L-7.6 -8.15 -8.45 -7.8 -10.7 -7.65 -10.9 -7.8" fill="#ffffff" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite62`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="115.65" id={`ThrowMaleBrute-${id}-_p3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -56.1, -59.85)" width="108.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite63`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite63`} transform="matrix(1.0, 0.0, 0.0, 1.0, 56.1, 59.85)">
          <use height="63.95" id={`ThrowMaleBrute-${id}-_col0a`} transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -25.9)" width="63.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite64`} />
          <use height="28.7" transform="matrix(0.9958, 0.088, 0.0, 1.0, -32.563, 2.769)" width="42.9" xlinkHref={`#ThrowMaleBrute-${id}-sprite65`} />
          <use height="12.9" id={`ThrowMaleBrute-${id}-_col1d`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.3, 5.25)" width="38.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite70`} />
          <use height="19.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -26.55, -0.6)" width="17.3" xlinkHref={`#ThrowMaleBrute-${id}-shape16`} />
          <use height="86.9" id={`ThrowMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite71`} />
          <use height="42.75" id={`ThrowMaleBrute-${id}-_p4`} transform="matrix(1.0, 0.0, 0.0, 1.0, -28.0497, 13.0502)" width="46.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite72`} />
          <use height="19.35" id={`ThrowMaleBrute-${id}-_col0c`} transform="matrix(1.0, 0.0, 0.0, 1.0, 12.55, 11.7)" width="17.9" xlinkHref={`#ThrowMaleBrute-${id}-sprite74`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite64`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <use height="63.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -31.35, -31.95)" width="63.3" xlinkHref={`#ThrowMaleBrute-${id}-shape12`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape12`} transform="matrix(1.0, 0.0, 0.0, 1.0, 31.35, 31.95)">
          <path d="M-19.5 28.2 L-22.1 26.65 Q-27.15 23.0 -26.25 17.45 L-26.1 16.25 Q-25.6 14.5 -26.1 13.1 L-26.25 12.75 -26.8 12.05 -26.95 11.9 Q-28.55 9.8 -29.4 7.55 -30.95 3.9 -31.3 0.45 -31.65 -8.75 -27.5 -17.1 -23.3 -26.45 -14.45 -29.55 -4.75 -32.85 5.15 -31.65 L5.85 -31.6 7.9 -29.9 Q13.45 -25.9 12.95 -19.0 12.25 -10.65 9.3 -2.7 7.55 1.65 3.4 3.55 -5.3 7.9 -13.95 11.7 L-15.0 11.55 Q-17.95 9.45 -19.35 11.9 -20.55 11.55 -21.6 12.25 L-22.45 13.1 -23.15 12.95 -25.4 12.05 -25.6 12.05 -26.25 11.7 -26.25 11.9 -26.1 12.05 -25.6 12.75 -25.4 13.1 Q-24.9 14.5 -25.4 16.25 L-25.6 17.45 -25.05 17.6 -21.6 18.15 -15.15 19.7 Q-13.45 20.05 -11.85 20.9 -10.85 21.45 -9.95 22.3 -8.9 23.0 -7.9 24.05 L-7.55 24.2 -7.9 24.4 Q-12.9 28.4 -19.5 28.2" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M-19.5 28.2 Q-12.9 28.4 -7.9 24.4 L-7.55 24.2 -7.9 24.05 Q-8.9 23.0 -9.95 22.3 -10.85 21.45 -11.85 20.9 -13.45 20.05 -15.15 19.7 L-21.6 18.15 -25.05 17.6 -25.6 17.45 -25.4 16.25 Q-24.9 14.5 -25.4 13.1 L-25.6 12.75 -26.1 12.05 -26.25 11.9 -26.25 11.7 -25.6 12.05 -25.4 12.05 -23.15 12.95 -22.45 13.1 -21.6 12.25 Q-20.55 11.55 -19.35 11.9 -17.95 9.45 -15.0 11.55 L-13.95 11.7 Q-5.3 7.9 3.4 3.55 7.55 1.65 9.3 -2.7 12.25 -10.65 12.95 -19.0 13.45 -25.9 7.9 -29.9 L5.85 -31.6 5.8 -31.65 7.55 -31.5 10.7 -30.45 12.95 -29.55 Q15.55 -28.55 18.65 -26.8 27.85 -21.75 30.45 -12.55 32.9 -3.55 31.35 0.8 29.95 4.95 28.55 6.15 27.15 7.2 26.8 8.95 25.95 11.7 24.55 14.35 L22.65 17.45 18.15 22.15 16.75 23.35 16.6 23.35 12.75 25.8 Q7.2 28.9 2.0 30.3 -3.9 32.0 -9.45 32.0 L-10.15 32.0 -13.8 31.0 -17.4 29.4 -19.5 28.2" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M5.85 -31.6 L5.15 -31.65 Q-4.75 -32.85 -14.45 -29.55 -23.3 -26.45 -27.5 -17.1 -31.65 -8.75 -31.3 0.45 -30.95 3.9 -29.4 7.55 -28.55 9.8 -26.95 11.9 L-26.8 12.05 -26.25 12.75 -26.1 13.1 Q-25.6 14.5 -26.1 16.25 L-26.25 17.45 Q-27.15 23.0 -22.1 26.65 L-19.5 28.2 -17.4 29.4 -13.8 31.0 -10.15 32.0 -9.45 32.0 Q-3.9 32.0 2.0 30.3 7.2 28.9 12.75 25.8 L16.6 23.35 16.75 23.35 18.15 22.15 22.65 17.45 24.55 14.35 Q25.95 11.7 26.8 8.95 27.15 7.2 28.55 6.15 29.95 4.95 31.35 0.8 32.9 -3.55 30.45 -12.55 27.85 -21.75 18.65 -26.8 15.55 -28.55 12.95 -29.55 L10.7 -30.45 7.55 -31.5 5.8 -31.65 5.85 -31.6 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite65`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.8, 22.05)">
          <use height="6.05" id={`ThrowMaleBrute-${id}-yeux`} transform="matrix(3.5469, 0.6759, 0.0, 3.8129, -7.3594, -22.0349)" width="8.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite66`} />
          <use height="6.05" transform="matrix(-0.7089, 0.0624, 0.9139, 3.339, -14.9276, -20.8291)" width="8.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite66`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite66`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 5.95)">
          <use height="4.25" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.15, -4.15)" width="6.95" xlinkHref={`#ThrowMaleBrute-${id}-sprite67`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite67`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="3.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.05, -0.7)" width="6.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite68`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite68`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.65)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -3.4, -1.55)" width="5.55" xlinkHref={`#ThrowMaleBrute-${id}-shape13`} />
          <use height="2.9" id={`ThrowMaleBrute-${id}-_col3`} transform="matrix(1.0, 0.0, 0.0, 1.0, -1.85, -1.55)" width="2.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite69`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape13`} transform="matrix(1.0, 0.0, 0.0, 1.0, 3.4, 1.55)">
          <path d="M1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 0.55 1.05 0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 1.2 -1.45 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35 -2.4 1.3 -2.5 1.1 -2.55 0.35 -1.65 -0.95" fill="#fbfbfb" fillRule="evenodd" stroke="none" />
          <path d="M2.15 -1.35 L1.2 -1.45 Q2.05 -0.75 1.7 0.0 L1.3 0.75 M-0.15 -1.55 L-1.65 -0.95 -2.55 0.35 -2.95 0.5 -3.4 0.55 M-0.15 -1.55 L1.2 -1.45" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
          <path d="M0.55 1.05 L0.65 0.7 0.65 0.05 0.5 -0.55 -0.15 -1.55 M-1.65 -0.95 L-1.8 -0.1 -1.75 0.45 -1.65 0.75 -1.5 1.0 -1.15 1.3 -1.0 1.35" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite69`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <use height="2.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -1.45)" width="2.5" xlinkHref={`#ThrowMaleBrute-${id}-shape14`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape14`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 1.45)">
          <path d="M-0.1 0.8 L0.1 0.8 0.25 0.75 -0.1 0.8" fill="#cccccc" fillRule="evenodd" stroke="none" />
          <path d="M0.25 0.75 L0.45 0.7 0.6 0.6 0.65 0.65 0.15 1.15 Q-0.55 1.4 -0.7 0.9 L-0.6 0.7 -0.1 0.8 0.25 0.75" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M0.45 0.7 L0.25 0.75 0.1 0.8 -0.1 0.8 -0.4 0.5 -0.55 0.0 Q-0.55 -1.05 0.1 -0.85 0.75 -0.7 0.75 0.05 L0.6 0.5 0.45 0.7" fill="#666666" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 M0.45 0.7 L0.6 0.5 0.75 0.05 Q0.75 -0.7 0.1 -0.85 -0.55 -1.05 -0.55 0.0 L-0.4 0.5 -0.1 0.8 -0.6 0.7 -0.7 0.9 Q-0.55 1.4 0.15 1.15 L0.65 0.65 0.6 0.6 0.45 0.7" fill="#999999" fillRule="evenodd" stroke="none" />
          <path d="M1.1 -0.45 L1.25 0.15 1.25 0.8 1.15 1.15 0.85 1.25 -0.4 1.45 -0.55 1.4 -0.9 1.1 -1.05 0.85 -1.15 0.55 -1.2 0.0 -1.05 -0.85 0.45 -1.45 1.1 -0.45 Z" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite70`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <use height="12.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.6, -6.9)" width="38.3" xlinkHref={`#ThrowMaleBrute-${id}-shape15`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape15`} transform="matrix(1.0, 0.0, 0.0, 1.0, 19.6, 6.9)">
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 12.4 2.4 11.8 2.4 13.05 1.65 14.05 1.35 Q12.05 1.65 9.35 2.55 L2.3 3.85 -1.1 4.9 -1.45 5.05 -1.65 5.15 -1.5 4.95 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 9.0 -0.45 M18.7 5.45 L18.7 5.55 18.7 5.45 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 Q-15.0 -2.8 -16.65 -2.9 L-18.3 -2.7 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 -19.6 -5.3" fill="#bfa6a6" fillRule="evenodd" stroke="none" />
          <path d="M17.15 2.85 L18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.2 5.4 -2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -1.5 4.95 -1.65 5.15 -1.45 5.05 -1.1 4.9 2.3 3.85 9.35 2.55 Q12.05 1.65 14.05 1.35 L13.05 1.65 11.8 2.4 12.4 2.4 17.15 2.85 M-14.25 -2.0 L-14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.3 -2.7 -16.65 -2.9 Q-15.0 -2.8 -14.25 -2.0 M-2.15 5.4 L-2.15 5.45 -2.15 5.4" fill="#a38d8d" fillRule="evenodd" stroke="none" />
          <path d="M9.0 -0.45 L7.35 0.95 7.35 1.0 11.0 0.15 14.85 -0.35 16.35 -0.4 16.7 -0.4 17.45 -0.45 14.2 0.65 15.3 1.2 Q16.4 1.8 16.85 2.4 L17.15 2.85 18.0 4.15 18.05 4.3 18.7 5.45 18.7 5.55 17.2 4.95 15.7 4.4 16.1 5.3 16.2 6.0 12.65 4.65 8.15 4.5 3.1 5.3 0.85 5.75 -0.45 6.0 -0.55 6.0 Q-1.65 6.05 -2.15 5.45 L-2.15 5.4 -2.55 4.15 -1.7 4.55 -1.2 4.8 -1.15 4.8 -0.7 4.6 3.4 2.6 8.95 -0.5 M-19.6 -5.3 L-18.2 -4.55 Q-18.05 -4.65 -18.05 -5.75 L-18.05 -6.9 -15.4 -3.25 -15.0 -4.8 -14.95 -4.85 -14.25 -2.0 -14.0 -0.8 Q-13.45 1.05 -12.65 1.05 L-12.35 1.0 -12.1 0.75 -12.1 2.2 Q-12.15 2.75 -12.35 3.0 L-12.65 3.1 -12.7 3.1 Q-13.45 3.1 -14.6 0.8 -15.75 -1.5 -16.9 -1.5 L-17.3 -1.45 -17.75 -1.25 -18.25 -2.6 -18.6 -3.5 -19.6 -5.25 M-1.65 5.15 L-1.5 4.95 -1.15 4.8" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape16`} transform="matrix(1.0, 0.0, 0.0, 1.0, 26.55, 0.6)">
          <path d="M-23.9 -0.05 L-24.2 -0.45 -24.0 -0.6 -13.45 -0.25 -9.25 1.8 -9.45 2.0 -10.5 2.7 -13.15 5.0 Q-15.5 6.9 -17.2 10.85 L-19.55 16.2 Q-20.2 17.6 -22.45 18.8 -24.9 19.85 -26.25 13.25 -27.65 6.65 -22.95 1.1 L-22.8 1.1 -23.3 0.6 -23.9 -0.05" fill="#631300" fillOpacity="0.3529412" fillRule="evenodd" stroke="none" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite71`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <use height="86.9" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.9, -43.45)" width="85.85" xlinkHref={`#ThrowMaleBrute-${id}-shape17`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape17`} transform="matrix(1.0, 0.0, 0.0, 1.0, 42.9, 43.45)">
          <path d="M22.5 -34.8 L22.65 -34.95 22.65 -34.8 22.5 -34.8 M-30.1 3.7 Q-29.75 2.85 -29.05 2.35 L-29.05 2.5 -30.1 3.7" fill="#996600" fillRule="evenodd" stroke="none" />
          <path d="M22.5 -34.8 L22.65 -34.8 23.45 -33.25 24.9 -30.1 25.3 -28.8 25.8 -27.35 26.35 -26.05 28.8 -22.25 28.9 -22.1 29.05 -21.95 31.7 -19.35 35.15 -15.95 36.35 -14.85 38.45 -12.5 40.2 -10.15 Q41.75 -7.55 42.25 -4.95 42.95 -2.15 42.95 0.6 L42.6 4.85 42.45 5.45 42.45 5.5 42.25 6.3 42.05 5.35 37.55 -3.9 37.9 -0.55 37.9 -0.45 37.05 4.65 36.35 6.3 Q33.75 12.05 32.9 18.8 L32.9 18.85 Q32.7 20.4 33.05 21.95 33.4 24.2 34.3 26.3 L35.3 28.9 35.65 29.55 Q36.25 30.5 37.5 31.3 L35.15 31.45 25.1 31.85 30.0 37.35 31.95 38.75 Q25.9 39.65 20.4 35.8 L20.25 35.65 Q21.25 39.85 23.85 42.95 L23.85 43.45 Q20.55 42.25 18.3 40.35 L14.15 36.7 12.85 35.3 11.7 33.9 Q11.2 33.4 11.05 32.9 L11.05 32.85 Q12.4 30.95 15.2 29.9 16.95 27.65 17.45 25.05 L17.75 24.05 17.95 23.0 17.9 21.9 17.8 21.4 13.3 20.4 12.6 20.05 Q11.05 19.0 10.5 17.6 10.35 15.7 11.9 13.8 L12.6 12.75 Q15.7 8.95 12.95 4.95 L11.15 2.95 10.0 1.8 7.6 0.6 3.9 -0.55 3.75 -0.55 3.55 -0.6 -1.45 -0.45 -2.15 -0.25 -2.75 -0.1 -3.35 0.1 -6.3 0.9 -9.25 1.8 -13.45 -0.25 -24.0 -0.6 -24.2 -0.45 Q-26.6 0.4 -29.05 2.5 L-29.05 2.35 Q-29.75 2.85 -30.1 3.7 -31.5 4.95 -32.15 6.3 L-33.1 8.45 -35.55 15.5 -35.8 16.2 -36.25 17.55 -37.2 21.75 -37.2 21.8 Q-37.55 24.55 -37.55 27.5 L-37.55 30.45 -38.4 28.9 -39.3 26.8 Q-40.65 22.3 -40.65 17.45 -40.5 11.2 -39.45 5.1 -38.05 -2.35 -32.15 -6.85 -34.45 -3.55 -36.35 0.25 -38.4 4.75 -38.4 9.8 -38.4 12.2 -37.9 14.65 -37.05 -2.85 -19.5 -5.15 -16.75 -5.45 -14.3 -4.1 -7.35 0.1 0.25 -4.1 6.15 -7.2 12.6 -6.35 13.1 -14.0 12.25 -20.2 17.3 -19.85 21.45 -17.25 20.9 -21.45 19.35 -25.1 16.75 -31.0 11.7 -34.6 13.8 -33.9 15.55 -32.35 L15.8 -32.15 19.65 -28.9 21.45 -27.7 22.3 -27.15 22.5 -34.8 M-5.45 -29.4 L-3.0 -25.6 Q-0.75 -22.8 4.45 -22.15 L4.45 -20.9 Q3.9 -20.4 0.8 -19.2 L-0.4 -18.85 Q-3.0 -17.6 -5.65 -16.4 L-6.3 -16.6 Q-5.95 -17.6 -5.65 -20.05 -5.1 -21.9 -3.45 -22.9 L-3.35 -22.8 -2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 -1.45 -20.9 -2.5 -21.95 L-3.35 -22.8 -3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 M28.05 -6.85 Q32.55 -5.15 33.6 -1.65 L33.6 -2.5 Q33.6 -10.85 28.4 -15.0 33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M24.05 -24.55 Q24.75 -23.5 25.25 -21.25 L25.45 -17.8 25.25 -15.7 25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M11.7 -34.6 Q16.75 -31.0 19.35 -25.1 20.9 -21.45 21.45 -17.25 17.3 -19.85 12.25 -20.2 13.1 -14.0 12.6 -6.35 6.15 -7.2 0.25 -4.1 -7.35 0.1 -14.3 -4.1 -16.75 -5.45 -19.5 -5.15 -37.05 -2.85 -37.9 14.65 -38.4 12.2 -38.4 9.8 -38.4 4.75 -36.35 0.25 -34.45 -3.55 -32.15 -6.85 -38.05 -2.35 -39.45 5.1 -40.5 11.2 -40.65 17.45 -40.65 22.3 -39.3 26.8 -41.0 22.5 -42.05 17.6 -42.6 15.0 -42.75 12.4 -43.25 7.9 -42.05 3.9 L-40.35 -1.1 -40.15 -1.8 -39.85 -2.65 -37.1 -8.05 -36.95 -8.2 -36.85 -8.4 -36.7 -8.55 -33.4 -12.65 -32.15 -13.95 -32.0 -13.95 -32.0 -14.0 -31.75 -15.2 -31.75 -15.4 -30.7 -20.45 -30.45 -21.05 Q-30.1 -21.4 -28.7 -23.3 -27.5 -25.25 -25.4 -25.9 L-21.4 -27.65 -21.4 -27.7 -21.95 -28.45 -21.4 -27.7 -21.95 -28.45 -33.2 -43.45 Q-27.65 -37.7 -20.55 -34.95 L-10.8 -32.75 -7.9 -32.85 3.2 -34.75 7.8 -35.25 11.7 -34.6 M-36.25 17.55 L-35.8 16.2 -35.55 15.5 -35.8 16.25 -36.25 17.55 M-33.1 8.45 L-32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-23.9 -0.05 -24.2 -0.4 Q-26.6 0.45 -29.05 2.55 L-30.1 3.75 Q-31.5 4.95 -32.15 6.35 L-33.1 8.45 M-9.25 1.8 L-6.3 0.9 -9.25 1.85 -9.3 1.9 -9.25 1.8 M-3.35 0.1 L-2.75 -0.1 -2.7 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 -1.45 -0.4 -2.15 -0.25 -2.7 -0.05 -3.35 0.1 M7.6 0.6 L10.0 1.8 11.15 2.95 10.0 1.85 7.6 0.6 M13.3 20.4 L17.8 21.4 17.9 21.9 17.8 21.45 13.3 20.4 M11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 11.7 33.95 11.05 32.9 M20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L32.0 38.8 Q25.95 39.65 20.4 35.85 L20.25 35.65 M35.15 31.45 L37.5 31.3 37.55 31.35 35.15 31.45 M32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 36.35 6.35 Q33.75 12.05 32.9 18.85 M42.05 5.35 L42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.45 5.5 42.25 6.35 42.05 5.35 M-5.3 -8.75 Q-6.3 -10.0 -7.35 -10.7 L-12.4 -14.15 Q-15.15 -15.7 -18.1 -16.75 L-21.95 -17.1 -25.25 -16.75 -29.05 -15.7 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-3.45 -22.9 Q-5.1 -21.9 -5.65 -20.05 -5.95 -17.6 -6.3 -16.6 L-5.65 -16.4 Q-3.0 -17.6 -0.4 -18.85 L0.8 -19.2 Q3.9 -20.4 4.45 -20.9 L4.45 -22.15 Q-0.75 -22.8 -3.0 -25.6 L-5.45 -29.4 Q-5.45 -27.7 -4.95 -26.1 -4.4 -24.4 -3.35 -23.0 L-3.45 -22.9 M2.35 -25.95 Q-1.3 -26.8 -2.5 -27.7 L-5.65 -30.3 -5.45 -29.4 -5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M-3.45 -22.9 L-3.35 -23.0 -3.35 -22.8 -3.45 -22.9 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75" fill="#660000" fillOpacity="0.28235295" fillRule="evenodd" stroke="none" />
          <path d="M-2.75 -0.1 L-2.15 -0.25 -2.7 -0.1 -2.75 -0.1" fill="#7e4b01" fillRule="evenodd" stroke="none" />
          <path d="M22.65 -34.8 L22.65 -34.95 22.5 -34.95 22.5 -34.8 22.3 -27.15 21.45 -27.7 19.65 -28.9 15.8 -32.15 15.55 -32.35 Q13.8 -33.9 11.7 -34.6 L7.8 -35.25 3.2 -34.8 -7.9 -32.9 -10.8 -32.75 -20.55 -34.95 Q-27.65 -37.7 -33.2 -43.45 L-21.95 -28.45 -21.4 -27.7 -25.4 -25.95 Q-27.5 -25.25 -28.7 -23.35 -30.1 -21.45 -30.45 -21.1 L-30.7 -20.45 -31.75 -15.4 -31.75 -15.2 -32.0 -14.0 -29.05 -15.7 -25.25 -16.75 -21.95 -17.1 -18.1 -16.75 Q-15.15 -15.7 -12.4 -14.15 L-7.35 -10.7 Q-6.3 -10.0 -5.3 -8.75 M-39.3 26.8 L-38.4 28.9 -37.55 30.45 -37.55 27.5 Q-37.55 24.55 -37.2 21.8 L-37.2 21.75 -36.25 17.55 -35.8 16.2 -35.55 15.5 -33.1 8.45 -32.15 6.3 Q-31.5 4.95 -30.1 3.7 L-29.05 2.5 Q-26.6 0.4 -24.2 -0.45 L-24.0 -0.6 -13.45 -0.25 -9.25 1.8 -6.3 0.9 -3.35 0.1 -2.75 -0.1 -2.15 -0.25 -1.45 -0.45 3.55 -0.6 3.75 -0.55 3.9 -0.55 7.6 0.6 10.0 1.8 11.15 2.95 12.95 4.95 Q15.7 8.95 12.6 12.75 L11.9 13.8 Q10.35 15.7 10.5 17.6 11.05 19.0 12.6 20.05 L13.3 20.4 17.8 21.4 17.9 21.9 17.95 23.0 17.75 24.05 17.45 25.05 Q16.95 27.65 15.2 29.9 12.4 30.95 11.05 32.85 L11.05 32.9 Q11.2 33.4 11.7 33.9 L12.85 35.3 14.15 36.7 18.3 40.35 Q20.55 42.25 23.85 43.45 L24.05 43.45 23.85 42.95 Q21.25 39.85 20.25 35.65 L20.4 35.8 Q25.9 39.65 31.95 38.75 L30.0 37.35 25.1 31.85 35.15 31.45 37.5 31.3 Q36.25 30.5 35.65 29.55 L35.3 28.9 34.3 26.3 Q33.4 24.2 33.05 21.95 32.7 20.4 32.9 18.85 L32.9 18.8 Q33.75 12.05 36.35 6.3 L37.05 4.65 37.9 -0.45 37.9 -0.55 37.55 -3.9 42.05 5.35 42.25 6.3 42.45 5.5 42.45 5.45 42.6 4.85 42.95 0.6 Q42.95 -2.15 42.25 -4.95 41.75 -7.55 40.2 -10.15 L38.45 -12.5 36.35 -14.85 35.15 -15.95 31.7 -19.35 29.05 -21.95 28.9 -22.1 28.8 -22.25 26.35 -26.05 25.8 -27.35 25.3 -28.8 24.9 -30.1 23.45 -33.25 22.65 -34.8 M-3.35 -23.0 Q-4.4 -24.4 -4.95 -26.1 -5.45 -27.7 -5.45 -29.4 L-5.65 -30.3 -2.5 -27.7 Q-1.3 -26.8 2.35 -25.95 M25.25 -15.7 L25.45 -17.8 25.25 -21.25 Q24.75 -23.5 24.05 -24.55 M28.4 -15.0 Q33.6 -10.85 33.6 -2.5 L33.6 -1.65 Q32.55 -5.15 28.05 -6.85 M37.5 31.3 L37.55 31.3 37.5 31.3 M31.95 38.75 L32.0 38.75 31.95 38.75 M-33.4 -12.65 L-32.15 -14.0 -32.0 -14.0 M-33.4 -12.65 L-36.7 -8.55 -36.85 -8.4 -36.95 -8.2 -37.1 -8.05 -39.85 -2.65 -40.15 -1.85 -40.35 -1.1 -42.05 3.9 Q-43.25 7.9 -42.75 12.4 -42.6 15.0 -42.05 17.6 -41.0 22.5 -39.3 26.8 M-23.9 -0.05 L-24.2 -0.45 M-3.35 -22.8 L-2.5 -21.95 Q-1.45 -20.9 0.8 -19.2 M-3.35 -23.0 L-3.35 -22.8 M-9.25 1.8 L-9.3 1.9 -9.45 2.0 -10.5 2.7 M-23.9 -0.05 L-23.3 0.6 -22.8 1.1" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite72`} transform="matrix(1.0, 0.0, 0.0, 1.0, 22.25, 11.8)">
          <use height="23.45" id={`ThrowMaleBrute-${id}-_col1`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.85, -6.65)" width="43.7" xlinkHref={`#ThrowMaleBrute-${id}-sprite73`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite73`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <use height="23.45" transform="matrix(1.0, 0.0, 0.0, 1.0, -24.2, 0.15)" width="43.7" xlinkHref={`#ThrowMaleBrute-${id}-shape18`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape18`} transform="matrix(1.0, 0.0, 0.0, 1.0, 24.2, -0.15)">
          <path d="M17.6 5.9 L17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 8.9 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.35 14.4 -23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 Q-21.8 12.3 -16.25 12.3 -12.75 12.3 -8.6 13.55 -7.55 13.7 -5.8 14.75 L-3.4 15.45 Q0.25 15.45 3.55 13.9 5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.35 10.3 8.0 L11.2 6.95 Q11.85 5.2 13.6 3.65 L14.3 3.1 17.6 5.9 M1.3 16.3 L1.1 15.8 -0.6 15.8 -1.15 15.95 -0.95 16.85 0.95 16.85 1.3 16.3 M5.65 15.95 L5.95 15.6 Q4.95 15.1 4.6 15.1 L4.05 15.1 3.9 15.45 Q3.9 15.95 4.05 15.95 L5.65 15.95 M-12.6 17.0 L-10.35 17.0 Q-9.65 16.85 -10.7 16.3 L-14.35 14.55 -16.25 13.7 -19.35 14.9 -17.95 15.8 -12.6 17.0 M-8.95 14.55 Q-8.25 16.5 -6.35 16.5 -5.5 16.5 -5.15 16.15 L-4.95 15.6 Q-6.0 14.4 -7.4 14.4 L-8.95 14.55 M-16.05 17.85 Q-17.1 17.85 -17.1 18.55 -16.75 21.0 -13.65 21.0 -11.9 21.0 -11.9 19.95 -12.6 19.1 -14.15 18.4 -15.55 17.85 -16.05 17.85 M-23.15 14.4 L-23.5 13.75 -23.15 14.4 M-23.15 12.65 Q-22.85 14.05 -21.45 14.05 L-20.75 13.55 Q-21.1 12.15 -23.0 12.15 L-23.15 12.65" fill="#d6baba" fillRule="evenodd" stroke="none" />
          <path d="M-24.05 11.45 L-24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q0.25 15.45 -3.4 15.45 L-5.8 14.75 Q-7.55 13.7 -8.6 13.55 -12.75 12.3 -16.25 12.3 -21.8 12.3 -24.05 11.45 M8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 12.75 3.3 13.95 3.1 Q13.95 2.95 14.15 2.95 L14.3 3.1 13.6 3.65 Q11.85 5.2 11.2 6.95 L10.3 8.0 Q9.8 9.35 8.9 10.4 M5.65 15.95 L4.05 15.95 Q3.9 15.95 3.9 15.45 L4.05 15.1 4.6 15.1 Q4.95 15.1 5.95 15.6 L5.65 15.95 M1.3 16.3 L0.95 16.85 -0.95 16.85 -1.15 15.95 -0.6 15.8 1.1 15.8 1.3 16.3 M-16.05 17.85 Q-15.55 17.85 -14.15 18.4 -12.6 19.1 -11.9 19.95 -11.9 21.0 -13.65 21.0 -16.75 21.0 -17.1 18.55 -17.1 17.85 -16.05 17.85 M-8.95 14.55 L-7.4 14.4 Q-6.0 14.4 -4.95 15.6 L-5.15 16.15 Q-5.5 16.5 -6.35 16.5 -8.25 16.5 -8.95 14.55 M-23.15 12.65 L-23.0 12.15 Q-21.1 12.15 -20.75 13.55 L-21.45 14.05 Q-22.85 14.05 -23.15 12.65" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M16.75 1.05 L17.25 0.85 17.25 1.4 Q17.25 1.75 17.75 2.1 L18.3 1.75 Q19.5 1.75 19.5 2.75 L19.5 3.1 17.6 5.9 14.3 3.1 14.3 2.95 15.15 1.75 15.35 1.55 15.5 1.4 Q16.05 1.05 16.75 1.05" fill="#d6baba" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M12.75 3.3 L13.8 0.15 Q16.2 0.15 16.75 1.05 16.05 1.05 15.5 1.4 L15.35 1.55 15.15 1.75 14.3 2.95 14.3 3.1 14.15 2.95 Q13.95 2.95 13.95 3.1 L12.75 3.3" fill="#ffffff" fillOpacity="0.5019608" fillRule="evenodd" stroke="none" />
          <path d="M17.1 6.4 Q15.7 8.15 14.45 10.4 L9.8 17.85 Q9.8 18.55 9.25 18.9 L9.1 18.9 9.1 19.1 Q6.65 20.8 1.1 22.4 -4.6 23.75 -7.05 23.6 -9.65 23.4 -13.65 22.2 -17.6 21.0 -20.9 17.85 -22.5 16.15 -23.15 14.4 L-23.5 13.75 -23.5 13.7 Q-24.05 12.65 -24.05 11.8 L-24.05 11.45 -24.2 10.4 Q-24.2 6.05 -22.85 5.05 -19.0 10.75 -17.6 10.75 -14.0 9.55 -11.2 10.05 -8.6 10.6 -5.3 12.3 -2.0 13.9 2.15 13.9 L3.55 13.9 Q5.65 13.55 7.35 12.3 L8.9 10.4 Q9.8 9.2 10.5 7.45 10.65 6.6 12.2 4.15 L12.55 3.3 M9.1 18.9 L8.9 18.9 9.8 17.85" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
          <path d="M19.5 3.1 L17.6 5.9 M12.75 3.3 L13.8 0.15" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.15294118" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite74`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <use height="19.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.95, -9.65)" width="17.9" xlinkHref={`#ThrowMaleBrute-${id}-shape19`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape19`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.95, 9.65)">
          <path d="M-1.5 -6.7 Q-1.15 -7.25 -0.6 -7.4 1.35 -8.45 3.25 -8.8 L3.95 -8.95 Q6.9 -7.4 4.1 -5.15 2.0 -3.4 -0.6 -4.1 -0.95 -4.45 -1.45 -4.6 -1.9 -5.2 -1.85 -5.8 L-1.9 -5.75 -1.85 -5.85 -1.85 -6.0 Q-1.85 -6.55 -1.5 -6.7 M-3.5 -4.55 L-3.55 -4.45 -3.5 -4.55 M-8.95 7.0 L-8.9 7.0 -8.05 8.55 -6.3 9.6 -6.35 9.6 -8.05 8.6 -8.1 8.55 -8.95 7.05 -8.95 7.0" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M1.5 4.05 L3.25 2.3 Q5.3 -0.1 3.95 -2.9 3.6 -3.25 3.25 -3.4 1.35 -3.9 -0.05 -3.4 -0.75 -3.25 -1.25 -2.7 L-4.2 0.75 -1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-1.5 -6.7 L-1.5 -6.75 -1.45 -6.8 -0.75 -8.05 -0.75 -8.1 Q1.75 -9.55 4.1 -9.65 L6.7 -8.8 Q10.0 -5.3 8.45 -0.1 7.55 2.5 6.15 4.4 0.95 10.45 -6.3 9.6 L-8.05 8.55 -8.9 7.0 -8.95 7.0 -3.6 -4.45 -3.55 -4.45 -3.5 -4.55 -1.9 -5.75 -1.85 -5.8 Q-1.9 -5.2 -1.45 -4.6 -0.95 -4.45 -0.6 -4.1 2.0 -3.4 4.1 -5.15 6.9 -7.4 3.95 -8.95 L3.25 -8.8 Q1.35 -8.45 -0.6 -7.4 -1.15 -7.25 -1.5 -6.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-4.2 0.75 L-1.25 -2.7 Q-0.75 -3.25 -0.05 -3.4 1.35 -3.9 3.25 -3.4 3.6 -3.25 3.95 -2.9 5.3 -0.1 3.25 2.3 L1.5 4.05 M-6.3 9.6 Q0.95 10.45 6.15 4.4 7.55 2.5 8.45 -0.1 10.0 -5.3 6.7 -8.8 L4.1 -9.65 Q1.75 -9.55 -0.75 -8.1 L-0.75 -8.05 -1.45 -6.8 -1.5 -6.75 -1.5 -6.7 M-8.9 7.0 L-8.05 8.55 -6.3 9.6" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite75`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.9, 4.35)">
          <use height="26.45" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.9, -4.35)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite76`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite76`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.15, 7.5)">
          <use height="22.7" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#ThrowMaleBrute-${id}-sprite77`} />
          <use height="26.45" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.15, -7.5)" width="23.2" xlinkHref={`#ThrowMaleBrute-${id}-sprite78`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite77`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <use height="22.7" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.6, -3.75)" width="21.65" xlinkHref={`#ThrowMaleBrute-${id}-shape20`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape20`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.6, 3.75)">
          <path d="M-10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 -10.25 13.45 -9.9 13.1 L-9.6 12.0 Q-9.1 9.95 -9.75 7.65 -11.1 9.15 -10.9 10.65 L-11.55 10.65 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 -5.15 -3.5 -4.8 -3.75 0.85 -3.6 1.25 0.05 Q1.6 6.15 0.65 12.3 0.35 12.65 0.35 12.95 L-1.45 14.6 -3.3 14.1 Q-5.8 13.1 -6.45 15.45 L-10.75 15.3" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-6.45 15.45 Q-5.8 13.1 -3.3 14.1 L-1.45 14.6 0.35 12.95 Q0.35 12.65 0.65 12.3 1.6 6.15 1.25 0.05 L0.85 -3.6 6.5 -3.15 M-10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 -11.55 10.65 -10.9 10.65 Q-11.1 9.15 -9.75 7.65 -9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-0.3 15.95 L-1.15 16.25 Q-2.8 17.1 -4.45 17.25 L-6.45 15.45 -4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-4.45 17.25 L-4.95 17.75 -4.45 17.25" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M6.5 -3.15 L6.7 -2.35 6.8 -1.8 Q8.8 6.0 7.65 11.3 L4.35 14.3 Q2.5 15.8 0.65 15.8 L0.2 15.6 Q-0.15 15.6 -0.3 15.95 L-2.5 17.6 -4.95 17.75 -7.6 18.95 Q-8.95 18.25 -9.9 17.1 L-10.05 16.95 Q-10.75 16.1 -10.75 15.3 L-10.75 14.95 Q-10.75 14.45 -10.4 14.1 L-13.55 12.0 -13.55 11.6 -13.55 10.65 Q-13.75 7.2 -12.75 4.2 L-11.7 1.35 -9.9 -0.45 -8.6 -1.5 -7.8 -2.25 -7.0 -2.8 M-6.45 15.45 L-4.45 17.25 Q-2.8 17.1 -1.15 16.25 L-0.3 15.95 M-9.75 7.65 Q-9.1 9.95 -9.6 12.0 L-9.9 13.1 Q-10.25 13.45 -10.4 14.1 M-4.95 17.75 L-4.45 17.25" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite79`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.65, 16.05)">
          <use height="30.75" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.65, -16.05)" width="40.3" xlinkHref={`#ThrowMaleBrute-${id}-sprite80`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite80`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.25, 15.5)">
          <use height="30.55" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite81`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite81`} transform="matrix(1.0, 0.0, 0.0, 1.0, 10.2, 15.4)">
          <use height="28.0" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(0.9552, -0.2927, 0.2927, 0.9552, -10.0342, -11.5985)" width="12.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite3`} />
          <use height="30.55" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -10.2, -15.4)" width="20.25" xlinkHref={`#ThrowMaleBrute-${id}-sprite82`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite83`} transform="matrix(1.0, 0.0, 0.0, 1.0, 20.75, 20.75)">
          <use height="48.0" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -20.75, -20.75)" width="56.75" xlinkHref={`#ThrowMaleBrute-${id}-sprite84`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite84`} transform="matrix(1.0, 0.0, 0.0, 1.0, 13.75, 13.7)">
          <use height="36.75" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.9, -10.1)" width="43.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite85`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite85`} transform="matrix(1.0, 0.0, 0.0, 1.0, 15.9, 17.15)">
          <use height="14.1" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -7.0, -7.05)" width="14.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite9`} />
          <use height="36.75" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -15.9, -17.15)" width="43.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite86`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite86`} transform="matrix(1.0, 0.0, 0.0, 1.0, 17.8, 16.65)">
          <use height="22.3" id={`ThrowMaleBrute-${id}-_p1`} transform="matrix(0.7987, 0.5992, -0.5992, 0.7987, -3.1531, -16.6443)" width="24.6" xlinkHref={`#ThrowMaleBrute-${id}-sprite10`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite87`} transform="matrix(1.0, 0.0, 0.0, 1.0, 43.2, 34.0)">
          <use height="61.05" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -21.95, -34.0)" width="64.0" xlinkHref={`#ThrowMaleBrute-${id}-sprite88`} />
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -43.2, -21.15)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite92`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite88`} transform="matrix(1.0, 0.0, 0.0, 1.0, 21.95, 34.0)">
          <use height="61.05" id={`ThrowMaleBrute-${id}-_p5`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite89`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite89`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.2, 34.0)">
          <use height="28.0" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -3.8281, -14.5535)" width="11.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite90`} />
          <use height="61.05" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -14.2, -34.0)" width="43.35" xlinkHref={`#ThrowMaleBrute-${id}-sprite91`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite90`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <use height="28.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.45, -1.45)" width="11.15" xlinkHref={`#ThrowMaleBrute-${id}-shape21`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape21`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.45, 1.45)">
          <path d="M3.7 0.7 Q4.3 1.25 4.6 2.1 L3.85 0.9 3.7 0.7 M-0.55 26.25 Q-2.8 25.8 -3.65 24.7 -4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7 L-4.6 1.3 Q-3.4 -1.05 -0.1 -1.45 L0.15 11.35 -0.1 22.1 -0.05 23.3 -0.5 24.65 -0.55 26.25" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M3.7 0.7 L3.85 0.9 4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 2.5 26.3 0.5 26.55 L0.25 26.45 -0.55 26.25 -0.5 24.65 -0.05 23.3 -0.1 22.1 0.15 11.35 -0.1 -1.45 Q1.65 -1.2 2.95 -0.2 L3.6 0.55 3.7 0.7" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M3.85 0.9 L4.6 2.1 5.65 4.95 5.7 5.15 4.85 22.75 Q4.5 24.1 3.7 25.15 M-3.65 24.7 Q-4.4 23.85 -4.4 22.75 L-5.4 5.15 Q-5.5 3.8 -5.2 2.7" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.3019608" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite91`} transform="matrix(1.0, 0.0, 0.0, 1.0, 14.75, 35.55)">
          <use height="33.65" id={`ThrowMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite22`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite92`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <use height="67.95" transform="matrix(1.0, 0.0, 0.0, 1.0, -5.0, -1.85)" width="67.05" xlinkHref={`#ThrowMaleBrute-${id}-shape22`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape22`} transform="matrix(1.0, 0.0, 0.0, 1.0, 5.0, 1.85)">
          <path d="M53.3 19.5 L53.15 19.35 52.8 18.85 52.6 18.25 Q52.6 17.65 53.2 17.15 53.7 16.7 54.1 16.7 54.55 16.7 55.0 17.15 55.5 17.65 55.5 18.3 L54.95 19.35 Q54.4 19.9 54.05 19.9 53.7 19.9 53.3 19.5 M42.8 27.5 Q41.75 28.65 41.05 28.65 L40.05 27.95 Q39.05 27.2 38.75 27.2 37.75 27.2 36.8 25.85 35.85 24.5 35.85 23.1 35.85 22.6 36.2 22.2 36.55 21.75 37.05 21.75 38.5 21.75 40.6 22.45 43.85 23.5 43.85 25.5 43.85 26.3 42.8 27.5 M47.6 47.1 Q47.6 45.8 48.65 45.8 49.65 45.8 49.7 46.95 49.7 48.05 48.8 48.05 L48.3 48.0 Q47.6 47.8 47.6 47.1 M27.85 10.55 Q27.85 9.45 28.8 9.45 29.6 9.45 29.6 10.5 29.6 11.55 28.65 11.55 L27.95 11.4 27.85 10.55 M37.6 34.25 L39.15 34.0 Q40.95 34.0 40.3 35.6 39.7 37.15 38.45 37.15 L37.6 36.85 Q36.95 36.4 36.95 35.5 36.95 34.6 37.6 34.25" fill="#ffffff" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 L26.1 66.1 25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 Q28.5 17.2 26.05 18.6 24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 15.6 39.05 16.45 41.2 17.1 43.05 18.3 44.65 21.9 49.55 28.15 49.5 L31.45 49.2 31.85 49.1 Q36.05 48.05 39.7 44.7 45.05 39.85 46.2 33.05 L46.5 29.6 M30.85 27.0 L33.35 27.2 34.7 27.65 36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M26.2 66.1 Q28.1 58.95 31.45 49.2 28.1 58.95 26.2 66.1 M49.0 20.2 Q49.2 21.9 50.0 22.45 L53.3 22.2 Q55.9 21.4 56.5 20.55 57.05 19.75 56.4 17.7 55.8 15.75 55.1 15.25 L52.8 15.15 Q50.75 15.55 49.5 17.35 48.75 18.4 49.0 20.2 M42.45 19.75 L49.1 3.0 42.45 19.75 M49.95 45.5 Q47.95 43.65 45.05 45.0 39.55 47.7 43.7 52.1 L45.2 51.7 Q47.1 51.1 48.5 49.9 49.8 48.75 50.7 47.15 L50.7 46.35 49.95 45.5 52.05 38.45 Q57.0 21.7 58.6 12.75 57.0 21.7 52.05 38.45 L49.95 45.5 M34.0 0.15 Q32.7 1.95 31.95 3.65 31.25 5.2 31.25 5.75 L30.6 7.85 31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M44.75 59.5 Q46.3 56.55 48.5 49.9 46.3 56.55 44.75 59.5 M28.1 13.9 L28.2 13.85 Q29.55 13.3 30.5 12.2 L31.0 11.15 Q31.9 8.7 30.9 8.05 L30.6 7.85 27.5 7.65 Q24.45 8.05 22.95 10.15 22.6 10.7 23.0 11.75 23.4 12.95 24.45 13.65 26.0 14.8 28.1 13.9 L26.05 18.6 28.1 13.9 M11.2 29.0 L10.9 28.55 Q6.9 28.25 4.2 31.4 3.6 34.55 6.3 36.0 L6.7 36.0 Q12.15 34.35 11.2 29.0 M14.9 55.9 Q14.05 59.1 17.0 59.1 22.95 59.1 21.05 53.4 16.4 50.4 14.9 55.9 M16.45 41.2 Q12.3 51.95 9.35 60.6 12.3 51.95 16.45 41.2" fill="#a77250" fillRule="evenodd" stroke="none" />
          <path d="M13.65 63.5 Q8.4 62.2 4.35 58.75 2.2 56.95 0.4 54.5 -6.8 44.75 -4.4 31.05 -2.0 17.45 8.65 7.8 18.05 -0.8 29.0 -1.7 L31.85 -1.85 Q38.3 -1.85 43.35 0.75 40.3 0.0 36.85 0.0 L34.0 0.15 Q23.05 1.05 13.65 9.65 3.0 19.3 0.6 32.9 -1.8 46.6 5.4 56.35 7.2 58.8 9.35 60.6 11.35 62.3 13.65 63.5 M53.3 19.5 L52.4 20.5 51.1 21.4 48.95 19.55 Q48.95 19.05 50.05 17.6 51.15 16.15 51.65 16.15 53.05 16.15 52.55 17.0 L51.5 18.45 Q52.4 18.45 52.6 19.0 L52.65 18.85 52.8 18.85 53.15 19.35 53.3 19.5 M42.8 49.1 Q42.8 48.25 43.75 47.4 44.6 46.6 45.25 46.6 45.9 46.6 45.95 47.0 L45.9 47.5 46.15 48.2 46.4 48.85 Q46.4 49.5 45.4 49.95 L43.9 50.3 Q42.8 50.05 42.8 49.1 M24.45 11.15 Q22.85 10.1 24.25 9.1 25.55 8.2 26.35 8.2 28.2 8.2 27.0 10.6 L25.35 12.95 24.45 11.15 M24.75 21.2 Q25.25 21.2 25.1 21.4 L25.05 21.4 Q25.1 22.1 24.3 23.05 L24.85 23.7 Q24.85 24.65 23.55 26.15 23.55 27.0 23.2 27.5 L22.85 28.2 Q22.85 28.7 23.0 28.5 L23.05 28.45 23.6 27.4 Q23.95 26.8 24.3 26.8 24.6 26.8 24.7 27.05 L25.1 27.9 26.15 27.2 27.0 26.65 27.15 26.85 Q24.9 32.4 24.65 32.4 L24.05 32.3 23.65 31.15 23.3 30.75 22.9 31.05 22.35 31.2 Q21.65 31.2 21.35 30.3 L21.35 30.4 20.0 32.55 Q18.75 34.4 18.35 34.4 L17.85 34.05 17.65 33.35 Q17.65 33.05 17.8 32.85 L17.9 32.5 Q16.95 32.2 16.95 31.45 16.95 30.25 20.5 25.7 24.0 21.2 24.75 21.2 M19.0 42.3 L19.2 41.5 Q19.45 41.0 19.85 41.0 20.35 41.0 21.25 41.5 21.05 40.05 21.9 39.7 L23.4 39.25 24.45 37.65 Q25.15 36.3 25.35 36.3 26.35 36.3 26.3 37.75 26.25 39.2 25.5 39.2 L25.15 39.15 25.0 38.9 24.9 39.1 Q25.2 39.4 25.0 40.2 24.8 41.0 24.35 41.0 24.1 41.0 23.5 41.35 22.75 41.8 22.75 42.3 L22.85 43.55 21.5 43.95 22.4 45.5 Q22.4 46.3 21.65 46.3 21.2 46.3 20.3 45.4 19.0 44.15 19.0 42.3 M7.35 29.3 Q8.75 29.3 8.1 30.15 L6.85 31.6 6.9 31.65 7.55 31.7 Q8.15 31.8 8.15 32.45 L7.9 34.0 Q7.5 34.65 6.5 34.65 L5.65 34.5 5.55 33.8 Q5.55 33.25 5.15 32.65 L4.75 31.6 Q4.75 30.95 5.8 30.1 6.8 29.3 7.35 29.3 M18.2 54.5 L17.9 55.5 17.95 55.75 Q19.1 55.85 19.1 56.6 L18.25 57.55 Q17.4 58.15 16.9 58.15 16.4 58.15 15.95 57.5 15.5 56.9 15.5 56.4 15.5 55.45 16.05 54.5 16.6 53.5 17.3 53.5 18.25 53.5 18.2 54.5" fill="#674732" fillRule="evenodd" stroke="none" />
          <path d="M52.8 18.85 L52.65 18.85 52.6 19.0 Q52.4 18.45 51.5 18.45 L52.55 17.0 Q53.05 16.15 51.65 16.15 51.15 16.15 50.05 17.6 48.95 19.05 48.95 19.55 L51.1 21.4 52.4 20.5 53.3 19.5 Q53.7 19.9 54.05 19.9 54.4 19.9 54.95 19.35 L55.5 18.3 Q55.5 17.65 55.0 17.15 54.55 16.7 54.1 16.7 53.7 16.7 53.2 17.15 52.6 17.65 52.6 18.25 L52.8 18.85 M31.2 16.75 L33.95 16.5 Q39.05 16.5 42.45 19.75 L43.85 21.4 Q46.45 24.95 46.5 29.6 L36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 15.5 34.85 15.85 32.95 17.05 26.15 22.35 21.3 24.15 19.7 26.05 18.6 28.5 17.2 31.2 16.75 L30.85 27.0 31.2 16.75 M36.25 30.95 L34.7 27.65 33.35 27.2 30.85 27.0 30.0 27.35 Q26.35 29.25 25.95 33.3 L15.55 36.65 25.95 33.3 26.1 34.25 Q26.85 38.65 31.05 37.95 L32.3 37.4 Q36.9 35.35 36.25 30.95 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M42.8 27.5 Q43.85 26.3 43.85 25.5 43.85 23.5 40.6 22.45 38.5 21.75 37.05 21.75 36.55 21.75 36.2 22.2 35.85 22.6 35.85 23.1 35.85 24.5 36.8 25.85 37.75 27.2 38.75 27.2 39.05 27.2 40.05 27.95 L41.05 28.65 Q41.75 28.65 42.8 27.5 M42.8 49.1 Q42.8 50.05 43.9 50.3 L45.4 49.95 Q46.4 49.5 46.4 48.85 L46.15 48.2 45.9 47.5 45.95 47.0 Q45.9 46.6 45.25 46.6 44.6 46.6 43.75 47.4 42.8 48.25 42.8 49.1 M47.6 47.1 Q47.6 47.8 48.3 48.0 L48.8 48.05 Q49.7 48.05 49.7 46.95 49.65 45.8 48.65 45.8 47.6 45.8 47.6 47.1 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M24.45 11.15 L25.35 12.95 27.0 10.6 Q28.2 8.2 26.35 8.2 25.55 8.2 24.25 9.1 22.85 10.1 24.45 11.15 M27.85 10.55 L27.95 11.4 28.65 11.55 Q29.6 11.55 29.6 10.5 29.6 9.45 28.8 9.45 27.85 9.45 27.85 10.55 M24.75 21.2 Q24.0 21.2 20.5 25.7 16.95 30.25 16.95 31.45 16.95 32.2 17.9 32.5 L17.8 32.85 Q17.65 33.05 17.65 33.35 L17.85 34.05 18.35 34.4 Q18.75 34.4 20.0 32.55 L21.35 30.4 21.35 30.3 Q21.65 31.2 22.35 31.2 L22.9 31.05 23.3 30.75 23.65 31.15 24.05 32.3 24.65 32.4 Q24.9 32.4 27.15 26.85 L27.0 26.65 26.15 27.2 25.1 27.9 24.7 27.05 Q24.6 26.8 24.3 26.8 23.95 26.8 23.6 27.4 L23.05 28.45 23.0 28.5 Q22.85 28.7 22.85 28.2 L23.2 27.5 Q23.55 27.0 23.55 26.15 24.85 24.65 24.85 23.7 L24.3 23.05 Q25.1 22.1 25.05 21.4 L25.1 21.4 Q25.25 21.2 24.75 21.2 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M7.35 29.3 Q6.8 29.3 5.8 30.1 4.75 30.95 4.75 31.6 L5.15 32.65 Q5.55 33.25 5.55 33.8 L5.65 34.5 6.5 34.65 Q7.5 34.65 7.9 34.0 L8.15 32.45 Q8.15 31.8 7.55 31.7 L6.9 31.65 6.85 31.6 8.1 30.15 Q8.75 29.3 7.35 29.3 M19.0 42.3 Q19.0 44.15 20.3 45.4 21.2 46.3 21.65 46.3 22.4 46.3 22.4 45.5 L21.5 43.95 22.85 43.55 22.75 42.3 Q22.75 41.8 23.5 41.35 24.1 41.0 24.35 41.0 24.8 41.0 25.0 40.2 25.2 39.4 24.9 39.1 L25.0 38.9 25.15 39.15 25.5 39.2 Q26.25 39.2 26.3 37.75 26.35 36.3 25.35 36.3 25.15 36.3 24.45 37.65 L23.4 39.25 21.9 39.7 Q21.05 40.05 21.25 41.5 20.35 41.0 19.85 41.0 19.45 41.0 19.2 41.5 L19.0 42.3 M37.6 34.25 Q36.95 34.6 36.95 35.5 36.95 36.4 37.6 36.85 L38.45 37.15 Q39.7 37.15 40.3 35.6 40.95 34.0 39.15 34.0 L37.6 34.25 M31.85 49.1 L31.05 37.95 31.85 49.1 M18.2 54.5 Q18.25 53.5 17.3 53.5 16.6 53.5 16.05 54.5 15.5 55.45 15.5 56.4 15.5 56.9 15.95 57.5 16.4 58.15 16.9 58.15 17.4 58.15 18.25 57.55 L19.1 56.6 Q19.1 55.85 17.95 55.75 L17.9 55.5 18.2 54.5 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="#f7c500" fillRule="evenodd" stroke="none" />
          <path d="M43.35 0.75 Q38.3 -1.85 31.85 -1.85 L29.0 -1.7 Q18.05 -0.8 8.65 7.8 -2.0 17.45 -4.4 31.05 -6.8 44.75 0.4 54.5 2.2 56.95 4.35 58.75 8.4 62.2 13.65 63.5 11.35 62.3 9.35 60.6 7.2 58.8 5.4 56.35 -1.8 46.6 0.6 32.9 3.0 19.3 13.65 9.65 23.05 1.05 34.0 0.15 L36.85 0.0 Q40.3 0.0 43.35 0.75 L44.15 0.95 Q46.8 1.7 49.1 3.0 53.4 5.4 56.65 9.75 L58.6 12.75 Q63.5 21.55 61.45 33.05 59.05 46.85 48.4 56.5 L44.75 59.5 Q36.1 65.8 26.2 66.1 M26.1 66.1 L25.2 66.1 Q18.7 66.1 13.65 63.5 M46.5 29.6 Q46.45 24.95 43.85 21.4 L42.45 19.75 Q39.05 16.5 33.95 16.5 L31.2 16.75 30.85 27.0 33.35 27.2 34.7 27.65 36.25 30.95 46.5 29.6 46.2 33.05 Q45.05 39.85 39.7 44.7 36.05 48.05 31.85 49.1 L31.45 49.2 28.15 49.5 Q21.9 49.55 18.3 44.65 17.1 43.05 16.45 41.2 15.6 39.05 15.55 36.65 L25.95 33.3 Q26.35 29.25 30.0 27.35 L30.85 27.0 M49.0 20.2 Q48.75 18.4 49.5 17.35 50.75 15.55 52.8 15.15 L55.1 15.25 Q55.8 15.75 56.4 17.7 57.05 19.75 56.5 20.55 55.9 21.4 53.3 22.2 L50.0 22.45 Q49.2 21.9 49.0 20.2 M48.5 49.9 Q47.1 51.1 45.2 51.7 L43.7 52.1 Q39.55 47.7 45.05 45.0 47.95 43.65 49.95 45.5 L50.7 46.35 50.7 47.15 Q49.8 48.75 48.5 49.9 M30.6 7.85 L30.9 8.05 Q31.9 8.7 31.0 11.15 L30.5 12.2 Q29.55 13.3 28.2 13.85 L28.1 13.9 Q26.0 14.8 24.45 13.65 23.4 12.95 23.0 11.75 22.6 10.7 22.95 10.15 24.45 8.05 27.5 7.65 L30.6 7.85 M26.05 18.6 Q28.5 17.2 31.2 16.75 M26.05 18.6 Q24.15 19.7 22.35 21.3 17.05 26.15 15.85 32.95 15.5 34.85 15.55 36.65 M11.2 29.0 Q12.15 34.35 6.7 36.0 L6.3 36.0 Q3.6 34.55 4.2 31.4 6.9 28.25 10.9 28.55 L11.2 29.0 M31.05 37.95 Q26.85 38.65 26.1 34.25 L25.95 33.3 M36.25 30.95 Q36.9 35.35 32.3 37.4 L31.05 37.95 31.85 49.1 M14.9 55.9 Q16.4 50.4 21.05 53.4 22.95 59.1 17.0 59.1 14.05 59.1 14.9 55.9" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
          <path d="M31.45 49.2 Q28.1 58.95 26.2 66.1 M49.1 3.0 L42.45 19.75 M49.95 45.5 L52.05 38.45 Q57.0 21.7 58.6 12.75 M48.5 49.9 Q46.3 56.55 44.75 59.5 M30.6 7.85 L31.25 5.75 Q31.25 5.2 31.95 3.65 32.7 1.95 34.0 0.15 M28.1 13.9 L26.05 18.6 M9.35 60.6 Q12.3 51.95 16.45 41.2" fill="none" stroke="#3b0101" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.2509804" strokeWidth="0.05" />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite93`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.0, 22.45)">
          <use height="42.3" id={`ThrowMaleBrute-${id}-_p2`} transform="matrix(1.0, 0.0, 0.0, 1.0, -32.0, -22.45)" width="51.5" xlinkHref={`#ThrowMaleBrute-${id}-sprite94`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite94`} transform="matrix(1.0, 0.0, 0.0, 1.0, 32.55, 24.0)">
          <use height="28.0" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(0.9918, 0.1221, -0.1221, 0.9918, -4.3781, -16.1035)" width="11.15" xlinkHref={`#ThrowMaleBrute-${id}-sprite90`} />
          <use height="42.3" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -25.3, -24.0)" width="40.05" xlinkHref={`#ThrowMaleBrute-${id}-sprite95`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite95`} transform="matrix(1.0, 0.0, 0.0, 1.0, 25.3, 24.0)">
          <use height="33.65" id={`ThrowMaleBrute-${id}-_col2`} transform="matrix(0.8944, -0.0586, 0.0675, 1.0316, -14.7336, -16.4277)" width="30.4" xlinkHref={`#ThrowMaleBrute-${id}-sprite22`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite96`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.75, -0.3)">
          <use height="18.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.75, 0.3)" width="17.85" xlinkHref={`#ThrowMaleBrute-${id}-sprite97`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite97`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.8, 2.35)">
          <use height="17.85" id={`ThrowMaleBrute-${id}-_col0`} transform="matrix(1.0, 0.0, 0.0, 1.0, -8.8, -2.05)" width="17.65" xlinkHref={`#ThrowMaleBrute-${id}-sprite98`} />
          <use height="16.55" id={`ThrowMaleBrute-${id}-_p7`} transform="matrix(1.0, 0.0, 0.0, 1.0, -6.85, -2.35)" width="15.9" xlinkHref={`#ThrowMaleBrute-${id}-sprite99`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-sprite98`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <use height="17.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -8.65, -8.7)" width="17.65" xlinkHref={`#ThrowMaleBrute-${id}-shape23`} />
        </g>
        <g id={`ThrowMaleBrute-${id}-shape23`} transform="matrix(1.0, 0.0, 0.0, 1.0, 8.65, 8.7)">
          <path d="M-4.8 -6.05 Q-4.95 -4.15 -4.35 -2.2 L-3.95 -0.85 -6.0 -0.45 -6.0 -0.7 -6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-7.15 4.7 L-8.65 4.3 -8.35 1.95 Q-8.5 -0.85 -6.0 -0.7 -6.45 -2.2 -6.6 -4.4 -6.7 -6.05 -6.15 -7.7 L-6.1 -7.85 -5.7 -8.7 1.65 -8.35 2.0 -5.9 Q2.05 -4.35 1.55 -2.8 L0.8 -0.45 Q0.35 0.75 0.35 2.05 0.2 3.85 -1.3 4.85 L-1.7 5.15 Q-2.45 5.45 -3.2 5.15 -3.8 4.7 -4.1 4.7 -4.65 4.55 -5.1 4.7 -5.45 5.0 -5.45 5.6 L-5.25 6.2 Q-5.7 6.2 -6.0 5.8 L-7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 -7.45 1.95 -7.15 4.55 L-7.15 4.7 M-3.95 -0.85 Q-3.5 2.05 -5.1 4.7 -3.5 2.05 -3.95 -0.85" fill="#efcdaf" fillRule="evenodd" stroke="none" />
          <path d="M4.6 -8.25 L5.3 -7.2 5.65 -6.75 7.0 -3.25 8.9 2.35 Q9.2 3.35 8.75 5.15 6.7 6.2 4.6 7.35 2.1 8.85 -0.25 9.15 L-0.8 8.15 -1.6 6.65 -3.8 7.05 -1.6 6.65 -0.8 8.15 -2.75 8.0 -3.8 7.05 -5.25 6.2 -5.45 5.6 Q-5.45 5.0 -5.1 4.7 -4.65 4.55 -4.1 4.7 -3.8 4.7 -3.2 5.15 -2.45 5.45 -1.7 5.15 L-1.3 4.85 Q0.2 3.85 0.35 2.05 0.35 0.75 0.8 -0.45 L1.55 -2.8 Q2.05 -4.35 2.0 -5.9 L1.65 -8.35 1.65 -8.4 1.85 -8.35 4.6 -8.25 M4.75 -0.85 L3.3 0.3 2.55 1.0 1.4 3.35 0.9 5.15 Q0.8 5.8 0.5 6.05 -0.25 6.5 -1.3 6.5 L-1.85 6.05 -2.0 6.05 -3.5 5.6 -4.1 4.7 -3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M2.7 4.3 L2.7 3.7 1.4 3.35 2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 4.5 -0.15 4.2 1.65 4.05 2.95 2.7 3.7 L2.7 4.3 4.35 4.45 4.6 4.7 Q5.35 5.0 5.35 5.6 5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 2.85 6.05 3.0 5.8 2.7 4.3 M-1.3 6.5 L-1.6 6.65 -1.3 6.5" fill="#c6886a" fillRule="evenodd" stroke="none" />
          <path d="M-6.0 -0.7 L-6.0 -0.45 -3.95 -0.85 -4.35 -2.2 Q-4.95 -4.15 -4.8 -6.05 M-5.7 -8.7 L-6.1 -7.85 -6.15 -7.7 Q-6.7 -6.05 -6.6 -4.4 -6.45 -2.2 -6.0 -0.7 -8.5 -0.85 -8.35 1.95 L-8.65 4.3 -7.15 4.7 -7.15 4.55 Q-7.45 1.95 -6.0 -0.45 M-0.8 8.15 L-0.25 9.15 Q2.1 8.85 4.6 7.35 6.7 6.2 8.75 5.15 9.2 3.35 8.9 2.35 L7.0 -3.25 5.65 -6.75 5.3 -7.2 4.6 -8.25 M-4.1 4.7 L-3.5 5.6 -2.0 6.05 -1.85 6.05 -1.3 6.5 Q-0.25 6.5 0.5 6.05 0.8 5.8 0.9 5.15 L1.4 3.35 2.55 1.0 3.3 0.3 4.75 -0.85 M1.4 3.35 L2.7 3.7 Q4.05 2.95 4.2 1.65 4.5 -0.15 3.3 0.3 M5.35 5.6 Q5.35 5.0 4.6 4.7 L4.35 4.45 2.7 4.3 3.0 5.8 2.85 6.05 1.4 7.8 M2.7 3.7 L2.7 4.3 M-7.15 4.7 L-6.0 5.8 Q-5.7 6.2 -5.25 6.2 L-5.45 5.6 Q-5.45 5.0 -5.1 4.7 -3.5 2.05 -3.95 -0.85 M-0.8 8.15 L-1.6 6.65 -3.8 7.05 -2.75 8.0 -0.8 8.15 M-1.6 6.65 L-1.3 6.5 M-5.25 6.2 L-3.8 7.05" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default ThrowMaleBrute;