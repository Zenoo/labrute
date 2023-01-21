import { Gender } from '@labrute/prisma';
import adjustColor from '../utils/adjustColor';
import randomBetween from '../utils/randomBetween';
import colors from './colors';

const getRandomColors = (gender: Gender) => {
  const {
    [gender]: {
      skin: {
        [randomBetween(0, colors[gender].skin.length - 1)]: skin,
      },
      hair: {
        [randomBetween(0, colors[gender].hair.length - 1)]: hair,
      },
      clothing: {
        [randomBetween(0, colors[gender].clothing.length - 1)]: primary,
        [randomBetween(0, colors[gender].clothing.length - 1)]: secondary,
        [randomBetween(0, colors[gender].clothing.length - 1)]: accent,
      },
    },
  } = colors;

  return {
    skinColor: skin,
    skinShade: adjustColor(skin, -20),
    hairColor: hair,
    hairShade: adjustColor(hair, -20),
    primaryColor: primary,
    primaryShade: adjustColor(primary, -20),
    secondaryColor: secondary,
    secondaryShade: adjustColor(secondary, -20),
    accentColor: accent,
    accentShade: adjustColor(accent, -20),
  };
};

export default getRandomColors;