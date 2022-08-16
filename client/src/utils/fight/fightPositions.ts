import { AnimationFighter } from './findFighter.js';
import randomBetween from '@eternaltwin/labrute-core/utils/randomBetween';

const positions = [
  { x: 40, y: 100 },
  { x: 20, y: 85 },
  { x: 40, y: 70 },
  { x: 20, y: 55 },
  { x: 40, y: 40 },
  { x: 20, y: 25 },
  { x: 40, y: 10 },
];

const getAvailablePositions = (fighters: AnimationFighter[], team: 'left' | 'right') => {
  const teamFighters = fighters.filter((fighter) => fighter.team === team);

  return positions
    .filter((p) => teamFighters.every((f) => f.x !== p.x || f.y !== p.y));
};

const getRandomPosition = (fighters: AnimationFighter[], team: 'left' | 'right') => {
  const availablePositions = getAvailablePositions(fighters, team);
  const random = randomBetween(0, availablePositions.length - 1);

  return availablePositions[random];
};

export {
  getAvailablePositions,
  getRandomPosition
};