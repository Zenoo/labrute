/* eslint-disable no-param-reassign */
import { DetailedFight, DetailedFighter } from '@labrute/core';
import shuffle from '../shuffle.js';
import { stepFighter } from './fightMethods.js';

const applySpy = (
  fightData: DetailedFight['data'],
  brute: DetailedFighter,
  opponent: DetailedFighter,
) => {
  if (brute.skills.find((skill) => skill.name === 'spy')) {
    const opponentWeaponsCount = opponent.weapons.length;
    const bruteWeaponsCount = brute.weapons.length;
    const weaponsToSwap = Math.min(opponentWeaponsCount, bruteWeaponsCount);

    // Only swap the amount of weapons the spy has (maxed at opponent's weapons count)
    const opponentWeaponsToSwap = shuffle(opponent.weapons)
      .slice(0, weaponsToSwap);
    const bruteWeaponsToSwap = shuffle(brute.weapons)
      .slice(0, weaponsToSwap);

    fightData.steps.push({
      action: 'spy',
      brute: stepFighter(brute),
      opponent: stepFighter(opponent),
      sent: bruteWeaponsToSwap.map((weapon) => weapon.name),
      received: opponentWeaponsToSwap.map((weapon) => weapon.name),
    });

    // Swap weapons
    opponent.weapons = opponent.weapons
      .filter((weapon) => !opponentWeaponsToSwap.includes(weapon))
      .concat(bruteWeaponsToSwap);
    brute.weapons = brute.weapons
      .filter((weapon) => !bruteWeaponsToSwap.includes(weapon))
      .concat(opponentWeaponsToSwap);

    // Add own weapons to opponent damaged weapons
    opponent.damagedWeapons.push(...bruteWeaponsToSwap.map((weapon) => weapon.name));
  }
};

export default applySpy;