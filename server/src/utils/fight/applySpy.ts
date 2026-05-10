import {
  ExtraTieredSkillData,
  FightWeapon,
  StepType, WeaponByName, WeaponType,
} from '@labrute/core';
import { SkillName, WeaponName } from '@labrute/prisma';
import { shuffle } from '../shuffle.js';
import { DetailedFight, DetailedFighter } from './generateFight.js';

export const applySpy = (
  fightData: DetailedFight,
  brute: DetailedFighter,
  opponent: DetailedFighter,
) => {
  if (!brute.skills[SkillName.spy]) return;

  const opponentWeaponNames = Object.keys(opponent.weapons) as WeaponName[];
  const bruteWeaponNames = Object.keys(brute.weapons) as WeaponName[];

  // Build all valid swap pairs in a single pass
  const swapPairs: { bruteWeapon: FightWeapon; opponentWeapon: FightWeapon }[] = [];
  const processedNames = new Set<WeaponName>();

  // First pass: shared weapons (both fighters have the same weapon type)
  for (const name of bruteWeaponNames) {
    const opponentWeapon = opponent.weapons[name];
    if (opponentWeapon) {
      // Skip if protected by weaponsMaster
      if (opponent.skills[SkillName.weaponsMaster] &&
        opponentWeapon.types.includes(WeaponType.SHARP)) {
        continue;
      }

      swapPairs.push({
        bruteWeapon: brute.weapons[name] as FightWeapon,
        opponentWeapon
      });
      processedNames.add(name);
    }
  }

  // Second pass: unique weapon combinations
  const uniqueBruteNames = bruteWeaponNames.filter(name => !processedNames.has(name));
  const uniqueOpponentNames = opponentWeaponNames.filter(name => {
    if (processedNames.has(name)) return false;
    const weapon = opponent.weapons[name];
    // Filter out protected weapons
    return !(opponent.skills[SkillName.weaponsMaster] && weapon?.types.includes(WeaponType.SHARP));
  });

  const uniquePairCount = Math.min(uniqueBruteNames.length, uniqueOpponentNames.length);
  for (let i = 0; i < uniquePairCount; i++) {
    swapPairs.push({
      bruteWeapon: brute.weapons[uniqueBruteNames[i] as WeaponName] as FightWeapon,
      opponentWeapon: opponent.weapons[uniqueOpponentNames[i] as WeaponName] as FightWeapon
    });
  }

  if (swapPairs.length === 0) return;

  // Single shuffle operation
  const shuffledPairs = shuffle(swapPairs);
  const maxSwaps = Math.min(bruteWeaponNames.length, opponentWeaponNames.length);
  const pairsToSwap = shuffledPairs.slice(0, maxSwaps);

  // Record the swap
  fightData.steps.push({
    a: StepType.Spy,
    b: brute.index,
    t: opponent.index,
    s: pairsToSwap.map(p => WeaponByName[p.bruteWeapon.name]),
    r: pairsToSwap.map(p => WeaponByName[p.opponentWeapon.name]),
  });

  // Execute swaps
  for (const { bruteWeapon, opponentWeapon } of pairsToSwap) {
    bruteWeapon.damaged = ExtraTieredSkillData[SkillName.spy]?.[
      (brute.skills[SkillName.spy]?.tier ?? 1) - 1
    ];

    delete brute.weapons[bruteWeapon.name];
    delete opponent.weapons[opponentWeapon.name];

    opponent.weapons[bruteWeapon.name] = bruteWeapon;
    brute.weapons[opponentWeapon.name] = opponentWeapon;
  }
};
