import { ExpectedError, colors } from '@labrute/core';
import { Gender, User } from '@labrute/prisma';
import translate from '../translate.js';
import { LOGGER } from '../../context.js';

const isValid = (value: number, array: string[]) => value >= 0 && value < array.length;

const isValidWithSpecials = (
  value: number,
  array: string[],
) => value >= 0 && (value < array.length || (value < 100 && value > (99 - colors.special.length)));

const checkColors = (
  user: Pick<User, 'id' | 'lang'>,
  gender: Gender,
  colorString: string,
  includeSpecials = false,
) => {
  // Split colors every 2 characters
  const inputs = {
    col0: +colorString.slice(0, 2),
    col0a: +colorString.slice(2, 4),
    col0c: +colorString.slice(4, 6),
    col1: +colorString.slice(6, 8),
    col1a: +colorString.slice(8, 10),
    col1b: +colorString.slice(10, 12),
    col1c: +colorString.slice(12, 14),
    col1d: +colorString.slice(14, 16),
    col2: +colorString.slice(16, 18),
    col2a: +colorString.slice(18, 20),
    col2b: +colorString.slice(20, 22),
    col3: +colorString.slice(22, 24),
    col3b: +colorString.slice(24, 26),
    col4: +colorString.slice(26, 28),
    col4a: +colorString.slice(28, 30),
    col4b: +colorString.slice(30, 32),
  };

  const check = includeSpecials ? isValidWithSpecials : isValid;

  if (!check(inputs.col0, colors[gender].skin)
    || !check(inputs.col0a, colors[gender].skin)
    || !check(inputs.col0c, colors[gender].skin)
    || !check(inputs.col1, colors[gender].hair)
    || !check(inputs.col1a, colors[gender].hair)
    || !check(inputs.col1b, colors[gender].hair)
    || !check(inputs.col1c, colors[gender].hair)
    || !check(inputs.col1d, colors[gender].hair)
    || !check(inputs.col3, colors[gender].clothing)
    || !check(inputs.col2, colors[gender].clothing)
    || !check(inputs.col2b, colors[gender].clothing)
    || !check(inputs.col3b, colors[gender].clothing)
    || !check(inputs.col2a, colors[gender].clothing)
    || !check(inputs.col4, colors[gender].clothing)
    || !check(inputs.col4a, colors[gender].clothing)
    || !check(inputs.col4b, colors[gender].clothing)
  ) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }

  // col0, col0a, col0c must be the same
  if (inputs.col0 !== inputs.col0a || inputs.col0 !== inputs.col0c) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }

  // col1, col1a, col1b, col1c, col1d must be the same
  if (inputs.col1 !== inputs.col1a
    || inputs.col1 !== inputs.col1b
    || inputs.col1 !== inputs.col1c
    || inputs.col1 !== inputs.col1d) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }
};

export default checkColors;
