import { AnimationFighter } from './findFighter.js';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';

const leftPositions = [
  { x: 40, y: -100 },
  { x: 20, y: -85 },
  { x: 40, y: -70 },
  { x: 20, y: -55 },
  { x: 40, y: -40 },
  { x: 20, y: -25 },
  { x: 40, y: -10 },
];

const rightPositions = [
  { x: 410, y: -100 },
  { x: 430, y: -85 },
  { x: 410, y: -70 },
  { x: 430, y: -55 },
  { x: 410, y: -40 },
  { x: 430, y: -25 },
  { x: 410, y: -10 },
];

const getAvailablePositions = (fighters: AnimationFighter[], side: 'left' | 'right') => {
  const positions = side === 'left' ? leftPositions : rightPositions;

  return positions.filter((p) => fighters.every((f) => f.x !== p.x || f.y !== p.y));
};

const getRandomPosition = (fighters: AnimationFighter[], side: 'left' | 'right') => {
  const availablePositions = getAvailablePositions(fighters, side);
  const random = randomBetween(0, availablePositions.length - 1);

  return availablePositions[random];
};

export {
  getAvailablePositions,
  getRandomPosition
};