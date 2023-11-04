import { availableBodyParts } from '@labrute/core';
import { Gender, Prisma, User } from '@labrute/prisma';
import translate from '../translate.js';

const checkBodyPart = (value: number, expected: number) => (expected === 0
  ? value === 0
  : value > 0 && value <= expected);

const checkBody = (
  user: User,
  gender: Gender,
  inputs: Prisma.BruteBodyCreateWithoutBruteInput,
) => {
  if (!checkBodyPart(inputs.longHair, availableBodyParts[gender].longHair)
    || !checkBodyPart(inputs.lowerRightArm, availableBodyParts[gender].lowerRightArm)
    || !checkBodyPart(inputs.rightHand, availableBodyParts[gender].rightHand)
    || !checkBodyPart(inputs.upperRightArm, availableBodyParts[gender].upperRightArm)
    || !checkBodyPart(inputs.rightShoulder, availableBodyParts[gender].rightShoulder)
    || !checkBodyPart(inputs.rightFoot, availableBodyParts[gender].rightFoot)
    || !checkBodyPart(inputs.lowerRightLeg, availableBodyParts[gender].lowerRightLeg)
    || !checkBodyPart(inputs.upperRightLeg, availableBodyParts[gender].upperRightLeg)
    || !checkBodyPart(inputs.leftFoot, availableBodyParts[gender].leftFoot)
    || !checkBodyPart(inputs.lowerLeftLeg, availableBodyParts[gender].lowerLeftLeg)
    || !checkBodyPart(inputs.pelvis, availableBodyParts[gender].pelvis)
    || !checkBodyPart(inputs.upperLeftLeg, availableBodyParts[gender].upperLeftLeg)
    || !checkBodyPart(inputs.tummy, availableBodyParts[gender].tummy)
    || !checkBodyPart(inputs.torso, availableBodyParts[gender].torso)
    || !checkBodyPart(inputs.head, availableBodyParts[gender].head)
    || !checkBodyPart(inputs.leftHand, availableBodyParts[gender].leftHand)
    || !checkBodyPart(inputs.upperLeftArm, availableBodyParts[gender].upperLeftArm)
    || !checkBodyPart(inputs.lowerLeftArm, availableBodyParts[gender].lowerLeftArm)
    || !checkBodyPart(inputs.leftShoulder, availableBodyParts[gender].leftShoulder)
  ) {
    throw new Error(translate('invalidCreation', user));
  }
};

export default checkBody;