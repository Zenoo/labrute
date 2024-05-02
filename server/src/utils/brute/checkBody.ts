import { ExpectedError, availableBodyParts } from '@labrute/core';
import { Gender, Prisma, User } from '@labrute/prisma';
import translate from '../translate.js';
import { LOGGER } from '../../context.js';

const checkBodyPart = (
  value: number | undefined,
  expected: number,
) => typeof value === 'undefined' || (value >= 0 && value <= expected);

const checkBody = (
  user: Pick<User, 'id' | 'lang'>,
  gender: Gender,
  inputs: Prisma.BruteBodyCreateWithoutBruteInput,
) => {
  if (!checkBodyPart(inputs.p2, availableBodyParts[gender].p2)
    || !checkBodyPart(inputs.p3, availableBodyParts[gender].p3)
    || !checkBodyPart(inputs.p4, availableBodyParts[gender].p4)
    || !checkBodyPart(inputs.p7, availableBodyParts[gender].p7)
    || !checkBodyPart(inputs.p1, availableBodyParts[gender].p1)
    || !checkBodyPart(inputs.p1a, availableBodyParts[gender].p1a)
    || !checkBodyPart(inputs.p1b, availableBodyParts[gender].p1b)
    || !checkBodyPart(inputs.p6, availableBodyParts[gender].p6)
    || !checkBodyPart(inputs.p8, availableBodyParts[gender].p8)
    || !checkBodyPart(inputs.p7b, availableBodyParts[gender].p7b)
    || !checkBodyPart(inputs.p5, availableBodyParts[gender].p5)
  ) {
    LOGGER.log(`User ${user.id} tried to create a brute with invalid colors or body.`);
    throw new ExpectedError(translate('invalidCreation', user));
  }
};

export default checkBody;
