import { Gender } from '../types.js';
import adjustColor from '../utils/adjustColor.js';
import randomBetween from '../utils/randomBetween.js';
import colors from './colors.js';

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
    skin: {
      color: skin,
      shade: adjustColor(skin, -20),
    },
    hair: {
      color: hair,
      shade: adjustColor(hair, -20),
    },
    primary: {
      color: primary,
      shade: adjustColor(primary, -20),
    },
    secondary: {
      color: secondary,
      shade: adjustColor(secondary, -20),
    },
    accent: {
      color: accent,
      shade: adjustColor(accent, -20),
    },
  };
};

export default getRandomColors;