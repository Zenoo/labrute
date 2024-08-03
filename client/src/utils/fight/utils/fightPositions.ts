import { randomItem } from '@labrute/core';
import { AnimationFighter } from './findFighter';

const leftPositions = [
  { x: 60, y: 200 },
  { x: 40, y: 212 },
  { x: 60, y: 224 },
  { x: 40, y: 236 },
  { x: 60, y: 248 },
  { x: 40, y: 260 },
  { x: 60, y: 272 },
];

const rightPositions = [
  { x: 440, y: 200 },
  { x: 460, y: 212 },
  { x: 440, y: 224 },
  { x: 460, y: 236 },
  { x: 440, y: 248 },
  { x: 460, y: 260 },
  { x: 440, y: 272 },
];

const getAvailablePositions = (fighters: AnimationFighter[], team: 'L' | 'R') => {
  const teamFighters = fighters.filter((fighter) => fighter.team === team);

  return (team === 'L' ? leftPositions : rightPositions)
    .filter((p) => !teamFighters.find((f) => f.animation.container.x === p.x
    && f.animation.container.y === p.y));
};

const getRandomPosition = (fighters: AnimationFighter[], team: 'L' | 'R') => {
  const availablePositions = getAvailablePositions(fighters, team);

  if (availablePositions.length === 0) {
    throw new Error('No available positions');
  }

  return randomItem(availablePositions);
};

export {
  getAvailablePositions,
  getRandomPosition
};
