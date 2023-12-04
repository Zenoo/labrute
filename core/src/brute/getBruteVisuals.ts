import { BruteSpritesheet } from '@labrute/prisma';
import { BruteWithBodyColors } from '../types';

export type BruteVisuals = Omit<BruteSpritesheet, 'id' | 'image' | 'json' | 'version'>;

const getBruteVisuals = (brute: BruteWithBodyColors) => {
  if (!brute.body || !brute.colors) {
    throw new Error('Brute body or colors not found');
  }

  const {
    longHair,
    lowerRightArm,
    rightHand,
    upperRightArm,
    rightShoulder,
    rightFoot,
    lowerRightLeg,
    upperRightLeg,
    leftFoot,
    lowerLeftLeg,
    pelvis,
    upperLeftLeg,
    tummy,
    torso,
    head,
    leftHand,
    upperLeftArm,
    lowerLeftArm,
    leftShoulder,
  } = brute.body;

  const {
    skinColor,
    skinShade,
    hairColor,
    hairShade,
    primaryColor,
    primaryShade,
    secondaryColor,
    secondaryShade,
    accentColor,
    accentShade,
  } = brute.colors;

  return {
    gender: brute.gender,
    longHair,
    lowerRightArm,
    rightHand,
    upperRightArm,
    rightShoulder,
    rightFoot,
    lowerRightLeg,
    upperRightLeg,
    leftFoot,
    lowerLeftLeg,
    pelvis,
    upperLeftLeg,
    tummy,
    torso,
    head,
    leftHand,
    upperLeftArm,
    lowerLeftArm,
    leftShoulder,
    skinColor,
    skinShade,
    hairColor,
    hairShade,
    primaryColor,
    primaryShade,
    secondaryColor,
    secondaryShade,
    accentColor,
    accentShade,
  };
};

export default getBruteVisuals;