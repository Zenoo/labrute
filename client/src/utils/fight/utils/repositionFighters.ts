
import { StepType } from '@labrute/core';
import { moveBack } from '../moveBack';
import { AnimationFighter } from './findFighter';
import { getMultipleRandomPosition } from './fightPositions';

// StepTypes implying being ranged
const rangedSteps = [
  StepType.Haste,
  StepType.Throw,
  StepType.Trap,
  StepType.Hypnotise,
  StepType.Bomb,
];

// Return if stepType implies the fighters should be afar
export const isRangedStep = (stepType: StepType) => rangedSteps.includes(stepType);

export const repositionFighters = async (
  fighters: AnimationFighter[],
  speed: React.RefObject<number>,
  excludedFighterId?: AnimationFighter['id'],
) => {
  const misplacedFighters: AnimationFighter[] = [];
  const repositioning: Promise<void>[] = [];

  for (const fighter of fighters) {
    if (excludedFighterId && fighter.id === excludedFighterId) continue;

    // Can't reposition if dead or stunned or trapped
    if (fighter.dead || fighter.stunned || fighter.trapped) continue;

    // Mispositionned fighter can be:
    //   - One that countered a lot without moving
    //   - One that got stunned by a counter
    if ((fighter.animation.container.x > 225 && fighter.team === 'L')
      || (fighter.animation.container.x < 275 && fighter.team === 'R')) {
      misplacedFighters.push(fighter);
    }
  }

  if (!misplacedFighters.length) {
    return;
  }

  const targetPositions = getMultipleRandomPosition(fighters, misplacedFighters);

  for (let i = 0; i < misplacedFighters.length; i++) {
    const fighter = misplacedFighters[i];
    const targetPosition = targetPositions[i];
    if (!fighter || !targetPosition) continue;

    // Move back to the right half of the map
    repositioning.push(
      moveBack(
        fighters,
        { a: StepType.MoveBack, f: fighter.index },
        speed,
        targetPosition,
      )
    );
  }

  await Promise.all(repositioning);
};
