/* eslint-disable no-param-reassign */
import {
  DetailedFight, DetailedFighter, StepType, WeaponByName, WeaponType
} from '@labrute/core';
import { SkillName } from '@labrute/prisma';
import shuffle from '../shuffle.js';

const applySpy = (
  fightData: DetailedFight,
  brute: DetailedFighter,
  opponent: DetailedFighter,
) => {
  if (brute.skills.find((skill) => skill.name === 'spy')) {
    let swappableOpponentWeapons = opponent.weapons;

    if (opponent.skills.some((skill) => skill.name === SkillName.weaponsMaster)) {
      swappableOpponentWeapons = swappableOpponentWeapons.filter(
        (w) => !w.types.includes(WeaponType.SHARP)
      );
    }

    const opponentWeaponsCount = swappableOpponentWeapons.length;
    const bruteWeaponsCount = brute.weapons.length;
    const weaponsToSwap = Math.min(opponentWeaponsCount, bruteWeaponsCount);

    if (weaponsToSwap === 0) {
      return;
    }

    // Only swap the amount of weapons the spy has (maxed at opponent's weapons count)
    const opponentWeaponsToSwap = shuffle(swappableOpponentWeapons)
      .slice(0, weaponsToSwap);
    const bruteWeaponsToSwap = shuffle(brute.weapons)
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
      const index = brute.weapons.findIndex((weapon) => weapon.name === weaponToSwap.name);
      if (index === -1) {
        throw new Error('Weapon not found');
      }

      brute.weapons.splice(index, 1);
      opponent.weapons.push(weaponToSwap);
    }

    for (const weaponToSwap of opponentWeaponsToSwap) {
      const index = opponent.weapons.findIndex((weapon) => weapon.name === weaponToSwap.name);
      if (index === -1) {
        throw new Error('Weapon not found');
      }

      opponent.weapons.splice(index, 1);
      brute.weapons.push(weaponToSwap);
    }

    // Add own weapons to opponent damaged weapons
    opponent.damagedWeapons.push(...bruteWeaponsToSwap.map((weapon) => weapon.name));
  }
};

export default applySpy;