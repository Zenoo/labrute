import { ExpectedError, availableBodyParts } from '@labrute/core';
import { Gender, User } from '@labrute/prisma';
import translate from '../translate.js';
import { LOGGER } from '../../context.js';

const checkBodyPart = (
  value: number,
  expected: number,
) => value >= 0 && value <= expected;

const checkBody = (
  user: Pick<User, 'id' | 'lang'>,
  gender: Gender,
  bodyString: string,
) => {
  // Convert every char from hex to number
  const inputs = {
    p1: parseInt(bodyString[0] || '0', 16),
    p1a: parseInt(bodyString[1] || '0', 16),
    p1b: parseInt(bodyString[2] || '0', 16),
    p2: parseInt(bodyString[3] || '0', 16),
    p3: parseInt(bodyString[4] || '0', 16),
    p4: parseInt(bodyString[5] || '0', 16),
    p5: parseInt(bodyString[6] || '0', 16),
    p6: parseInt(bodyString[7] || '0', 16),
    p7: parseInt(bodyString[8] || '0', 16),
    p7b: parseInt(bodyString[9] || '0', 16),
    p8: parseInt(bodyString[10] || '0', 16),
  };

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
