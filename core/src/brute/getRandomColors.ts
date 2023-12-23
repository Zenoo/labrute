import { Gender } from '@labrute/prisma';
import randomBetween from '../utils/randomBetween';
import colors from './colors';

const getRandomColors = (gender: Gender) => {
  const col0 = colors[gender].skin[randomBetween(0, colors[gender].skin.length - 1)];
  const col0a = col0;
  const col0c = col0;
  const col1 = colors[gender].hair[randomBetween(0, colors[gender].hair.length - 1)];
  const col1a = col1;
  const col1b = col1;
  const col1c = col1;
  const col1d = col1;
  const col3 = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col2 = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col2b = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col3b = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col2a = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col4 = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col4a = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];
  const col4b = colors[gender].clothing[randomBetween(0, colors[gender].clothing.length - 1)];

  return {
    col0,
    col0a,
    col0c,
    col1,
    col1a,
    col1b,
    col1c,
    col1d,
    col2,
    col2a,
    col2b,
    col3,
    col3b,
    col4,
    col4a,
    col4b,
  };
};

export default getRandomColors;