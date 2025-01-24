import { Gender } from '@labrute/prisma';
import { randomBetween } from '../utils/randomBetween';
import { availableBodyParts } from './availableBodyParts';
import { generateBodyString } from './parsers';

export const getRandomBody = (gender: Gender) => generateBodyString({
  p2: randomBetween(0, availableBodyParts[gender].p2),
  p3: randomBetween(0, availableBodyParts[gender].p3),
  p4: randomBetween(0, availableBodyParts[gender].p4),
  p7: randomBetween(0, availableBodyParts[gender].p7),
  p1: randomBetween(0, availableBodyParts[gender].p1),
  p1a: randomBetween(0, availableBodyParts[gender].p1a),
  p1b: randomBetween(0, availableBodyParts[gender].p1b),
  p6: randomBetween(0, availableBodyParts[gender].p6),
  p8: randomBetween(0, availableBodyParts[gender].p8),
  p7b: randomBetween(0, availableBodyParts[gender].p7b),
  p5: randomBetween(0, availableBodyParts[gender].p5),
});
