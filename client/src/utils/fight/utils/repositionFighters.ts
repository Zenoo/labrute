/* eslint-disable no-void */
import { StepType } from '@labrute/core';
import { Application } from 'pixi.js';
import moveBack from '../moveBack';
import { AnimationFighter } from './findFighter';

// StepTypes implying neutral situation
const neutralSteps = [
  StepType.Haste,
  StepType.Steal,
  StepType.Throw,
  StepType.Trash,
  StepType.Trap,
  StepType.Hypnotise,
  StepType.Equip,
  StepType.Bomb,
  StepType.Vampirism,
];

// Return if stepType implies the fight is on neutral state
export const isNeutralStep = (stepType: StepType) => neutralSteps.includes(stepType);

const repositionFighters = async (
  app: Application,
  fighters: AnimationFighter[],
  speed: React.MutableRefObject<number>,
) => {
  for (const fighter of fighters) {
    // Can't reposition if dead or stunned or trapped
    if (fighter.dead || fighter.stunned || fighter.trapped) continue;

    // Mispositionned fighter can be:
    //   - One that countered a lot without moving
    //   - One that got stunned by a counter
    if ((fighter.animation.container.x > 250 && fighter.team === 'L')
      || (fighter.animation.container.x < 250 && fighter.team === 'R')) {
      // Move back to the right half of the map
      await moveBack(
        app,
        fighters,
        { a: StepType.MoveBack, f: fighter.index },
        speed,
      );
    }
  }
};

export default repositionFighters;
