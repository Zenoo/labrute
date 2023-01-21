import { Gender } from '../types';
import randomBetween from '../utils/randomBetween';
import availableBodyParts from './availableBodyParts';

const getRandomBody = (gender: Gender) => ({
  longHair: randomBetween(1, availableBodyParts[gender].longHair),
  lowerRightArm: randomBetween(1, availableBodyParts[gender].rightHand),
  rightHand: randomBetween(1, availableBodyParts[gender].lowerRightArm),
  upperRightArm: randomBetween(1, availableBodyParts[gender].rightShoulder),
  rightShoulder: randomBetween(1, availableBodyParts[gender].upperRightArm),
  rightFoot: randomBetween(1, availableBodyParts[gender].rightFoot),
  lowerRightLeg: randomBetween(1, availableBodyParts[gender].lowerRightLeg),
  upperRightLeg: randomBetween(1, availableBodyParts[gender].upperRightLeg),
  leftFoot: randomBetween(1, availableBodyParts[gender].leftFoot),
  lowerLeftLeg: randomBetween(1, availableBodyParts[gender].lowerLeftLeg),
  pelvis: randomBetween(1, availableBodyParts[gender].pelvis),
  upperLeftLeg: randomBetween(1, availableBodyParts[gender].upperLeftLeg),
  tummy: randomBetween(1, availableBodyParts[gender].tummy),
  torso: randomBetween(1, availableBodyParts[gender].torso),
  head: randomBetween(1, availableBodyParts[gender].head),
  leftHand: randomBetween(1, availableBodyParts[gender].leftHand),
  upperLeftArm: randomBetween(1, availableBodyParts[gender].upperLeftArm),
  lowerLeftArm: randomBetween(1, availableBodyParts[gender].lowerLeftArm),
  leftShoulder: randomBetween(1, availableBodyParts[gender].leftShoulder),
});

export default getRandomBody;