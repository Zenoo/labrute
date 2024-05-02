import { ExpectedError, colors } from '@labrute/core';
import { Gender, Prisma, User } from '@labrute/prisma';
import translate from '../translate.js';
import { LOGGER } from '../../context.js';

const isValid = (value: string | undefined, array: string[]) => typeof value === 'undefined' || array.includes(value);

const checkColors = (
  user: Pick<User, 'id' | 'lang'>,
  gender: Gender,
  inputs: Prisma.BruteColorsCreateWithoutBruteInput,
) => {
  if (!isValid(inputs.col0, colors[gender].skin)
    || !isValid(inputs.col0a, colors[gender].skin)
    || !isValid(inputs.col0c, colors[gender].skin)
    || !isValid(inputs.col1, colors[gender].hair)
    || !isValid(inputs.col1a, colors[gender].hair)
    || !isValid(inputs.col1b, colors[gender].hair)
    || !isValid(inputs.col1c, colors[gender].hair)
    || !isValid(inputs.col1d, colors[gender].hair)
    || !isValid(inputs.col3, colors[gender].clothing)
    || !isValid(inputs.col2, colors[gender].clothing)
    || !isValid(inputs.col2b, colors[gender].clothing)
    || !isValid(inputs.col3b, colors[gender].clothing)
    || !isValid(inputs.col2a, colors[gender].clothing)
    || !isValid(inputs.col4, colors[gender].clothing)
    || !isValid(inputs.col4a, colors[gender].clothing)
    || !isValid(inputs.col4b, colors[gender].clothing)
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
