import { Gender } from '@labrute/prisma';
import { randomBetween } from '../utils/index.js';
import { availableBodyParts } from './availableBodyParts.js';
import { generateBodyString } from './parsers.js';

export const getRandomBody = (gender: Gender) => {
  // Portrait clothing presets coordinate both outfit selectors.
  const outfit = randomBetween(0, availableBodyParts[gender].p7);

  return generateBodyString({
    p2: randomBetween(0, availableBodyParts[gender].p2),
    p3: randomBetween(0, availableBodyParts[gender].p3),
    p4: randomBetween(0, availableBodyParts[gender].p4),
    p7: outfit,
    p1: randomBetween(0, availableBodyParts[gender].p1),
    p1a: randomBetween(0, availableBodyParts[gender].p1a),
    p1b: randomBetween(0, availableBodyParts[gender].p1b),
    p6: randomBetween(0, availableBodyParts[gender].p6),
    p8: randomBetween(0, availableBodyParts[gender].p8),
    p7b: outfit,
    p5: randomBetween(0, availableBodyParts[gender].p5),
  });
};
