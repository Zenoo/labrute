import {
  AchievementsStore, ExtraTieredSkillData, FightWeapon, Skill, StepType, Tiered
} from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import type { DetailedFight, DetailedFighter } from './generateFight.js';
import type { Stats } from './fightMethods.js';

type TurnSnapshot = {
  stepIndex: number;
  fighters: DetailedFighter[];
  initiative: number;
  winner: string | null;
  loser: string | null;
  consumed: Set<number>;
};

const cloneFighters = (fighters: DetailedFighter[]) => {
  const skills = new Map<Tiered<Skill>, Tiered<Skill>>();
  const weapons = new Map<FightWeapon, FightWeapon>();
  const cloneSkill = (skill: Tiered<Skill>) => {
    let copy = skills.get(skill);
    if (!copy) {
      copy = { ...skill };
      if (skill.uses) copy.uses = [...skill.uses];
      skills.set(skill, copy);
    }
    return copy;
  };
  const cloneWeapon = (weapon: FightWeapon) => {
    let copy = weapons.get(weapon);
    if (!copy) {
      copy = { ...weapon };
      weapons.set(weapon, copy);
    }
    return copy;
  };

  // Perk definitions are read-only during combat; copy mutable uses, maps and flags.
  // Retain aliases between active perks and inventories, just like structuredClone.
  return fighters.map((fighter) => ({
    ...fighter,
    skills: Object.fromEntries(Object.entries(fighter.skills).map(
      ([name, skill]) => [name, cloneSkill(skill)],
    )),
    reloadableSkills: Object.fromEntries(Object.entries(fighter.reloadableSkills).map(
      ([name, skill]) => [name, cloneSkill(skill)],
    )),
    activeSkills: fighter.activeSkills.map(cloneSkill),
    weapons: Object.fromEntries(Object.entries(fighter.weapons).map(
      ([name, weapon]) => [name, cloneWeapon(weapon)],
    )),
    reloadableWeapons: Object.fromEntries(Object.entries(fighter.reloadableWeapons).map(
      ([name, weapon]) => [name, cloneWeapon(weapon)],
    )),
    activeWeapon: fighter.activeWeapon ? cloneWeapon(fighter.activeWeapon) : null,
    hitBy: { ...fighter.hitBy },
  }));
};

// Unwind nested attacks/combos before replacing the turn's fighter state.
class RewindRequested {
  constructor(readonly fighter: DetailedFighter) { }
}

export class FightRewind {
  private readonly history: TurnSnapshot[] = [];

  private readonly consumed = new Set<number>();

  beginTurn(fight: DetailedFight) {
    if (!fight.fighters.some((fighter) => this.canRewind(fighter))) {
      this.history.length = 0;
      return false;
    }

    this.history.push({
      stepIndex: fight.steps.length,
      fighters: cloneFighters(fight.fighters),
      initiative: fight.initiative,
      winner: fight.winner,
      loser: fight.loser,
      consumed: new Set(this.consumed),
    });
    if (this.history.length > 5) this.history.shift();
    return true;
  }

  private canRewind(fighter: DetailedFighter) {
    const skill = fighter.skills[SkillName.rewind];
    return !this.consumed.has(fighter.index)
      && !!skill?.uses?.[skill.tier - 1];
  }

  request(fight: DetailedFight) {
    if (!this.history.length) return;
    const fighter = fight.fighters.find((candidate) => candidate.hp <= 0
      && this.canRewind(candidate));
    if (fighter) throw new RewindRequested(fighter);
  }

  restore(
    fight: DetailedFight,
    stats: Stats,
    caster: DetailedFighter,
    advanceInitiative: (fighter: DetailedFighter, fight: DetailedFight) => void,
  ) {
    const tier = caster.skills[SkillName.rewind]?.tier;
    const turns = tier && ExtraTieredSkillData[SkillName.rewind]?.[tier - 1];
    if (!turns) throw new Error('Invalid Rewind skill tier');

    const count = Math.min(turns, this.history.length);
    const targetIndex = this.history.length - count;
    const snapshot = this.history[targetIndex];
    if (!snapshot) throw new Error('Rewind turn snapshot not found');

    const steps = fight.steps.length - snapshot.stepIndex;
    this.consumed.add(caster.index);
    fight.fighters = cloneFighters(snapshot.fighters);
    fight.initiative = snapshot.initiative;
    fight.winner = snapshot.winner;
    fight.loser = snapshot.loser;

    for (const fighter of fight.fighters) {
      if (!this.consumed.has(fighter.index)) continue;
      delete fighter.skills[SkillName.rewind];
      delete fighter.reloadableSkills[SkillName.rewind];
      const fighterStats = stats[fighter.id];
      if (!snapshot.consumed.has(fighter.index) && fighterStats) {
        fighterStats.skillsUsed = (fighterStats.skillsUsed ?? 0) + 1;
      }
    }

    const restoredCaster = fight.fighters.find((fighter) => fighter.index === caster.index);
    if (!restoredCaster || restoredCaster.hp <= 0) {
      throw new Error('Rewind did not restore its caster alive');
    }
    advanceInitiative(restoredCaster, fight);
    this.history.length = targetIndex;
    fight.steps.push({ a: StepType.Rewind, f: caster.index, n: steps, t: count });
  }
}

// Rewind is passive and cannot be acquired through Mimic or reload,
// so the initial fighters decide once whether the fight needs snapshots.
export const createFightRewind = (fighters: DetailedFighter[]) => (
  fighters.some((fighter) => fighter.skills[SkillName.rewind]) ? new FightRewind() : null
);

export const requestFightRewind = (fight: DetailedFight) => {
  fight.rewind?.request(fight);
};

export const withFightRewind = (
  fight: DetailedFight,
  stats: Stats,
  achievements: AchievementsStore,
  playTurn: (fight: DetailedFight, stats: Stats, achievements: AchievementsStore) => void,
  advanceInitiative: (fighter: DetailedFighter, fight: DetailedFight) => void,
) => {
  const history = fight.rewind;
  if (!history) {
    playTurn(fight, stats, achievements);
    return;
  }

  if (!history.beginTurn(fight)) {
    fight.rewind = null;
    playTurn(fight, stats, achievements);
    return;
  }
  try {
    playTurn(fight, stats, achievements);
    history.request(fight);
  } catch (error) {
    if (!(error instanceof RewindRequested)) throw error;
    history.restore(fight, stats, error.fighter, advanceInitiative);
  }
};
