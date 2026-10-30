import {
  bosses, Fighter, FIGHTER_HEIGHT, FIGHTER_WIDTH, readBodyString, readColorString, SkillId
} from '@labrute/core';
import {
  BossName, Gender, PetName
} from '@labrute/prisma';
import dayjs from 'dayjs';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import { Application, Filter } from 'pixi.js';
import {
  Animation, FighterAppearance, FighterHolder as PixiFighterHolder, SpeedRef
} from 'labrute-pixi-fighter';

const appearance = (fighter: Fighter): FighterAppearance => {
  const boss = fighter.type === 'boss' ? bosses.find(({ name }) => name === fighter.name) : undefined;

  if (fighter.type === 'boss' && !boss) throw new Error(`Boss not found: ${fighter.name}`);

  const base = boss?.base ?? fighter.name;
  const model = fighter.type === 'brute' ? fighter.gender ?? Gender.male
    : base === 'bear' ? 'bear' : 'dog';
  const dimensionType = fighter.type === 'brute' ? 'brute' : model === 'bear' ? 'bear' : 'dog';
  let filters: Filter[] = [];

  // Change color on bosses
  if (fighter.type === 'boss') {
    const aprilFools = dayjs.utc().isSame(dayjs.utc('04-01', 'MM-DD'), 'day');

    // Apply color
    if (fighter.name === BossName.GoldClaw) {
      filters = [new AdjustmentFilter({
        gamma: 1,
        brightness: aprilFools ? 0.8 : 4,
        red: aprilFools ? 4 : 1,
      })];
    } else if (fighter.name === BossName.EmberFang) {
      filters = [new AdjustmentFilter({
        red: aprilFools ? 0.8 : 2.2,
        green: 0.8,
        blue: aprilFools ? 6 : 0.8,
      })];
    } else if (fighter.name === BossName.Cerberus) {
      filters = [new AdjustmentFilter({
        gamma: 1,
        brightness: 0.37,
        red: 1.1,
        blue: 1.02,
      })];
    }
  }

  // Change color for dog2 and dog3
  if (fighter.type === 'pet') {
    if (fighter.name === PetName.dog2) {
      filters = [new AdjustmentFilter({
        gamma: 1,
        brightness: 1.1,
        red: 1.3,
      })];
    } else if (fighter.name === PetName.dog3) {
      filters = [new AdjustmentFilter({
        brightness: 2.5,
        red: 0.7,
      })];
    }
  }

  return {
    type: fighter.type,
    name: fighter.name,
    model,
    team: fighter.team,
    shield: fighter.shield,
    parts: readBodyString(fighter.body || '0'.repeat(11)),
    colors: readColorString(fighter.gender ?? Gender.male, fighter.colors || '0'.repeat(96)),
    width: FIGHTER_WIDTH[dimensionType],
    height: FIGHTER_HEIGHT[dimensionType],
    filters,
    colorOffset: fighter.type === 'pet' && fighter.name === PetName.panther
      ? { r: -82, g: -97, b: -82 } : undefined,
  };
};

export class FighterHolder extends PixiFighterHolder {
  declare readonly name: Fighter['name'];
  readonly skills: Fighter['skills'];

  constructor(app: Application, fighter: Fighter, speed: SpeedRef, scale = 1) {
    const boss = fighter.type === 'boss' ? bosses.find(({ name }) => name === fighter.name) : undefined;
    const modelScale = fighter.type === 'pet' && fighter.name === PetName.panther ? 1.5 : boss?.scale ?? 1;
    super(app, appearance(fighter), speed, scale * modelScale);
    this.skills = fighter.skills;
  }

  override setAnimation(animation: Animation, frame = 0, seeking = false) {
    this.idleAnimation = this.skills[SkillId.monk] ? 'monk' : 'idle';
    super.setAnimation(animation, frame, seeking);
  }
}
