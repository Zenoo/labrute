import { bosses, skills, StepType, weapons } from '@labrute/core';
import { FightModifier } from '@labrute/prisma';
import { getFighters } from '../../lib/utils/fight/getFighters.js';
import {
  checkDeaths, fighterArrives, orderFighters, playFighterTurn, saboteur,
} from '../../lib/utils/fight/fightMethods.js';
import { applySpy } from '../../lib/utils/fight/applySpy.js';
import { createFightRewind } from '../../lib/utils/fight/fightRewind.js';

const brute = (id, overrides = {}) => ({
  id, name: id, gender: 'male', body: '1002b500314', colors: '', ranking: 4,
  level: 25, pupilsCount: 0, hpValue: 250, strengthValue: 15, agilityValue: 10,
  speedValue: 10, hpModifier: 1, hpStat: 250,
  skills: { shield: 1, sixthSense: 2, fistsOfFury: 1, resistant: 1 },
  weapons: { scimitar: 1, shuriken: 2, baton: 1 }, pets: {},
  ...overrides,
});
const team = (brutes, overrides = {}) => ({ brutes, backups: [], bosses: [], ...overrides });
const supers = Object.fromEntries(Object.values(skills)
  .filter((skill) => skill.type === 'super' || ['chef', 'spy', 'saboteur', 'survival'].includes(skill.name))
  .map((skill) => [skill.name, 2]));
const arsenal = Object.fromEntries(Object.keys(weapons).map((name) => [name, 2]));
const petPack = { dog1: 1, dog2: 2, dog3: 3, panther: 2, bear: 1 };

export const fightScenarios = [
  {
    name: 'ordinary',
    team1: team([brute('left')]),
    team2: team([brute('right')]),
    modifiers: {},
  },
  {
    name: 'pets-supers-backups',
    team1: team([brute('left', { skills: { ...supers, backup: 2 }, weapons: arsenal, pets: petPack })], {
      backups: [brute('left-backup')],
    }),
    team2: team([brute('right', { skills: supers, weapons: arsenal, pets: petPack })], {
      backups: [brute('right-backup')],
    }),
    modifiers: { [FightModifier.alwaysUseSupers]: true },
  },
  {
    name: 'clan-16',
    team1: team(Array.from({ length: 8 }, (_, i) => brute(`left-${i}`))),
    team2: team(Array.from({ length: 8 }, (_, i) => brute(`right-${i}`))),
    modifiers: {},
    clanFight: true,
  },
  {
    name: 'boss',
    team1: team([brute('left', { skills: supers, weapons: arsenal, pets: petPack })]),
    team2: team([], { bosses: [{ ...bosses[0], startHP: 5000 }] }),
    modifiers: {},
  },
  {
    name: 'rewind',
    team1: team([brute('left', { skills: { ...supers, rewind: 3 }, weapons: arsenal, pets: petPack })]),
    team2: team([brute('right', { skills: { ...supers, rewind: 2 }, weapons: arsenal, pets: petPack })]),
    modifiers: {},
  },
  {
    name: 'reload',
    team1: team([brute('left', {
      hpValue: 1500, strengthValue: 3,
      skills: { reload: 3, bomb: 1, net: 1, hammer: 1, shield: 1 },
      weapons: { knife: 1, fan: 2 },
    })]),
    team2: team([brute('right', {
      hpValue: 1500, strengthValue: 3,
      skills: { reload: 2, bomb: 1, haste: 1 },
      weapons: { baton: 1 },
    })]),
    modifiers: { [FightModifier.alwaysUseSupers]: true },
  },
];

export const runScenario = (scenario, seed = 1) => {
  const previousRandom = Math.random;
  let randomCalls = 0;
  Math.random = () => {
    seed = (seed * 16807) % 2147483647;
    randomCalls++;
    return seed / 2147483647;
  };
  try {
    const fighters = getFighters(scenario);
    const stats = {};
    const achievements = {};
    for (const fighter of fighters) {
      if (fighter.type !== 'brute' || fighter.master) continue;
      stats[fighter.id] = { userId: fighter.id };
      achievements[fighter.id] = { userId: fighter.id, achievements: {} };
    }
    const fight = {
      fighters, initialFighters: [], modifiers: scenario.modifiers, steps: [],
      initiative: 0, winner: null, loser: null, overtime: false,
      rewind: createFightRewind(fighters),
    };
    for (const fighter of fighters) {
      if (fighter.type !== 'brute' || !fighter.master) fighterArrives(fight, fighter);
    }
    if (scenario.team1.brutes.length === 1 && scenario.team2.brutes.length === 1) {
      orderFighters(fight);
      const brutes = fighters.filter((fighter) => fighter.type === 'brute' && !fighter.master);
      applySpy(fight, brutes[0], brutes[1]);
      applySpy(fight, brutes[1], brutes[0]);
    }
    saboteur(fight, achievements);
    let turns = 0;
    while (!fight.loser && turns < 2000) {
      orderFighters(fight);
      if (!fight.fighters.length) break;
      fight.initiative = fight.fighters[0].initiative;
      if (turns > 1000) fight.overtime = true;
      playFighterTurn(fight, stats, achievements);
      checkDeaths(fight, stats);
      turns++;
    }
    if (!fight.loser) throw new Error(`Benchmark fight did not finish: ${scenario.name}`);
    // The rewind helper is internal bookkeeping, not part of the fight outcome.
    const { rewind: _rewind, ...outcome } = fight;
    return { fight: outcome, stats, achievements, turns, randomCalls };
  } finally {
    Math.random = previousRandom;
  }
};
