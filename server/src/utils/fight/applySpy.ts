/* eslint-disable no-param-reassign */
import {
  StepType, WeaponByName, WeaponType,
} from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import { shuffle } from '../shuffle.js';
import { DetailedFight, DetailedFighter } from './generateFight.js';

export const applySpy = (
  fightData: DetailedFight,
  brute: DetailedFighter,
  opponent: DetailedFighter,
) => {
  if (brute.skills[SkillName.spy]) {
    let swappableOpponentWeapons = Object.values(opponent.weapons);

    // If opponent has weaponMaster, can't swap it's sharp weapons
    if (opponent.skills[SkillName.weaponsMaster]) {
      swappableOpponentWeapons = swappableOpponentWeapons.filter(
        (w) => !w.types.includes(WeaponType.SHARP),
      );
    }

    const opponentWeaponsCount = swappableOpponentWeapons.length;
    const bruteWeapons = Object.values(brute.weapons);
    const bruteWeaponsCount = bruteWeapons.length;
    const weaponsToSwap = Math.min(opponentWeaponsCount, bruteWeaponsCount);

    if (weaponsToSwap === 0) {
      return;
    }

    // Only swap the amount of weapons the spy has (maxed at opponent's swappable weapons count)
    const opponentWeaponsToSwap = shuffle(swappableOpponentWeapons)
      .slice(0, weaponsToSwap);
    const bruteWeaponsToSwap = shuffle(bruteWeapons)
      .slice(0, weaponsToSwap);

    fightData.steps.push({
      a: StepType.Spy,
      b: brute.index,
      t: opponent.index,
      s: bruteWeaponsToSwap.map((weapon) => WeaponByName[weapon.name]),
      r: opponentWeaponsToSwap.map((weapon) => WeaponByName[weapon.name]),
    });

    // Swap weapons
    for (const weaponToSwap of bruteWeaponsToSwap) {
      delete brute.weapons[weaponToSwap.name];
      opponent.weapons[weaponToSwap.name] = weaponToSwap;
    }

    for (const weaponToSwap of opponentWeaponsToSwap) {
      delete opponent.weapons[weaponToSwap.name];
      brute.weapons[weaponToSwap.name] = weaponToSwap;
    }

    // Add own weapons to opponent damaged weapons
    opponent.damagedWeapons.push(...bruteWeaponsToSwap.map((weapon) => weapon.name));
  }
};
