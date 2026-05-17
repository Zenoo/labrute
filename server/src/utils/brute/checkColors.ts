import {
  BruteColor, ExpectedError, colors
} from '@labrute/core';
import {
  Brute, UnlockedColors, User
} from '@labrute/prisma';
import { translate } from '../translate.js';
import { LOGGER } from '../../context.js';

const isValid = (
  value: string | undefined,
  brute: Pick<Brute, 'gender'> & {
    unlockedColors: Pick<UnlockedColors, 'bodyPart' | 'colors'>[];
  },
  colorName: BruteColor
) => {
  if (typeof value !== 'string') return false;

  let allowedColors: string[] = [];

  switch (colorName) {
    case 'col0':
    case 'col0a':
    case 'col0c':
      allowedColors = colors[brute.gender].skin;
      break;
    case 'col1':
    case 'col1a':
    case 'col1b':
    case 'col1c':
    case 'col1d':
      allowedColors = colors[brute.gender].hair;
      break;
    case 'col2':
    case 'col2a':
    case 'col2b':
    case 'col3':
    case 'col3b':
    case 'col4':
    case 'col4a':
    case 'col4b':
      allowedColors = colors[brute.gender].clothing;
      break;
    default:
      break;
  }

  // Add unlocked colors for the specific body part
  const unlockedForPart = brute.unlockedColors.find(uc => uc.bodyPart === colorName);
  if (unlockedForPart) {
    allowedColors = allowedColors.concat(unlockedForPart.colors);
  }

  return allowedColors.includes(value);
};

export const checkColors = (
  user: Pick<User, 'id' | 'lang'>,
  brute: Pick<Brute, 'gender'> & {
    unlockedColors: Pick<UnlockedColors, 'bodyPart' | 'colors'>[];
  },
  colorString: string
) => {
  // Split colors every 6 characters
  const [col0, col0a, col0c, col1, col1a, col1b, col1c, col1d,
    col2, col2a, col2b, col3, col3b, col4, col4a, col4b] = colorString.match(/.{1,6}/g)?.map(s => `#${s}`) ?? [];

  if (!isValid(col0, brute, 'col0')
    || !isValid(col0a, brute, 'col0a')
    || !isValid(col0c, brute, 'col0c')
    || !isValid(col1, brute, 'col1')
    || !isValid(col1a, brute, 'col1a')
    || !isValid(col1b, brute, 'col1b')
    || !isValid(col1c, brute, 'col1c')
    || !isValid(col1d, brute, 'col1d')
    || !isValid(col3, brute, 'col3')
    || !isValid(col2, brute, 'col2')
    || !isValid(col2b, brute, 'col2b')
    || !isValid(col3b, brute, 'col3b')
    || !isValid(col2a, brute, 'col2a')
    || !isValid(col4, brute, 'col4')
    || !isValid(col4a, brute, 'col4a')
    || !isValid(col4b, brute, 'col4b')
  ) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }

  // col0, col0a, col0c must be the same
  if (col0 !== col0a || col0 !== col0c) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }

  // col1, col1a, col1b, col1c, col1d must be the same
  if (col1 !== col1a
    || col1 !== col1b
    || col1 !== col1c
    || col1 !== col1d) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }
};
