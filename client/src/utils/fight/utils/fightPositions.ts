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

const extraLeftPositions = [
  { x: 100, y: 200 },
  { x: 80, y: 212 },
  { x: 100, y: 224 },
  { x: 80, y: 236 },
  { x: 100, y: 248 },
  { x: 80, y: 260 },
  { x: 100, y: 272 },
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

const extraRightPositions = [
  { x: 400, y: 200 },
  { x: 420, y: 212 },
  { x: 400, y: 224 },
  { x: 420, y: 236 },
  { x: 400, y: 248 },
  { x: 420, y: 260 },
  { x: 400, y: 272 },
];

const getAvailablePositions = (fighters: AnimationFighter[], team: 'L' | 'R') => {
  const teamFighters = fighters.filter((fighter) => fighter.team === team);
  const positions = (team === 'L' ? leftPositions : rightPositions)
    .filter((p) => !teamFighters.find((f) => f.animation.container.x === p.x
    && f.animation.container.y === p.y));

  if (positions.length > 0) {
    return positions;
  }

  const extraPositions = (team === 'L' ? extraLeftPositions : extraRightPositions)
    .filter((p) => !teamFighters.find((f) => f.animation.container.x === p.x
    && f.animation.container.y === p.y));

  return extraPositions;
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
