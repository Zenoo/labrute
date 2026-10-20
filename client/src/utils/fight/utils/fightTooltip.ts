import {
  Fighter, Skill, Weapon
} from '@labrute/core';
import { Container } from 'pixi.js';

export type FightTooltipTarget =
  | { type: 'brute'; fighter: Fighter }
  | { type: 'skill'; skill: Skill; tier: number }
  | { type: 'weapon'; weapon: Weapon; tier: number };

export type ToggleFightTooltip = (target: FightTooltipTarget | null, open: boolean) => void;

export const bindFightTooltip = (
  container: Container,
  getTarget: () => FightTooltipTarget,
  toggleTooltip: ToggleFightTooltip,
) => {
  let activeTarget: FightTooltipTarget | null = null;

  const open = () => {
    activeTarget = getTarget();
    toggleTooltip(activeTarget, true);
  };
  const close = () => {
    if (activeTarget) {
      toggleTooltip(activeTarget, false);
      activeTarget = null;
    }
  };

  container.eventMode = 'static';
  container.cursor = 'pointer';
  container.on('pointerover', (event) => {
    event.stopPropagation();
    open();
  });
  container.on('pointerout', (event) => {
    event.stopPropagation();
    close();
  });
  container.on('pointertap', (event) => {
    event.stopPropagation();
    open();
  });
  container.on('destroyed', close);
};
