import { Gender } from '@labrute/prisma';
import randomBetween from '../utils/randomBetween';
import { colors } from './colors';
import { generateColorString } from './parsers';

const getRandomColors = (gender: Gender) => {
  const col0 = randomBetween(0, colors[gender].skin.length - 1);
  const col0a = col0;
  const col0c = col0;
  const col1 = randomBetween(0, colors[gender].hair.length - 1);
  const col1a = col1;
  const col1b = col1;
  const col1c = col1;
  const col1d = col1;
  const col3 = randomBetween(0, colors[gender].clothing.length - 1);
  const col2 = randomBetween(0, colors[gender].clothing.length - 1);
  const col2b = randomBetween(0, colors[gender].clothing.length - 1);
  const col3b = randomBetween(0, colors[gender].clothing.length - 1);
  const col2a = randomBetween(0, colors[gender].clothing.length - 1);
  const col4 = randomBetween(0, colors[gender].clothing.length - 1);
  const col4a = randomBetween(0, colors[gender].clothing.length - 1);
  const col4b = randomBetween(0, colors[gender].clothing.length - 1);

  return generateColorString({
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
  });
};

export default getRandomColors;
