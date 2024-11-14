/* eslint-disable no-param-reassign */
import {
  DetailedFight, DetailedFighter, StepType, WeaponByName,
} from '@labrute/core';
import { WeaponName } from '@labrute/prisma';
import shuffle from '../shuffle.js';

const applySpy = (
  fightData: DetailedFight,
  brute: DetailedFighter,
  opponent: DetailedFighter,
) => {
  if (brute.skills.find((skill) => skill.name === 'spy')) {
    // Return if no weapon to swap
    if (brute.weapons.length === 0 || opponent.weapons.length === 0) {
      return;
    }

    // Operate with weapon names for more clarity
    // Handle the future cases where brutes may have multiple instances of a weapon
    const bruteWeaponNames = Array.from(new Set(brute.weapons.map((weapon) => weapon.name)));
    const opponentWeaponNames = Array.from(new Set(opponent.weapons.map((weapon) => weapon.name)));

    // Init swapped weapons
    const bruteSwappedWeaponNames: WeaponName[] = [];
    const opponentSwappedWeaponNames: WeaponName[] = [];

    // Automatically swap shared weapons
    for (const weaponName of bruteWeaponNames) {
      if (opponentWeaponNames.includes(weaponName)) {
        bruteSwappedWeaponNames.push(weaponName);
        opponentSwappedWeaponNames.push(weaponName);
      }
    }

	// Get the remaining weapons
    const bruteUniqueWeaponNames = bruteWeaponNames.filter((name) => !bruteSwappedWeaponNames.includes(name));
    const opponentUniqueWeaponNames = opponentWeaponNames.filter((name) => !opponentSwappedWeaponNames.includes(name));

    // Suffle
    const allUniqueWeaponNames = shuffle([...bruteUniqueWeaponNames, ...opponentUniqueWeaponNames]);

    // Get new weapon distribution
    const bruteNewWeaponNames = allUniqueWeaponNames.slice(0, bruteUniqueWeaponNames.length);
    const opponentNewWeaponNames = allUniqueWeaponNames.slice(bruteUniqueWeaponNames.length);

    // Keep track if a weapon has been swapped
    let weaponSwapped = false;

    // Register swapped brute weapons
    for (const weaponName of bruteNewWeaponNames) {
      if (!bruteUniqueWeaponNames.includes(weaponName)) {
        opponentSwappedWeaponNames.push(weaponName);
        weaponSwapped = true;
      }
    }

    // Register opponent swapped weapons
    for (const weaponName of opponentNewWeaponNames) {
      if (!opponentUniqueWeaponNames.includes(weaponName)) {
        bruteSwappedWeaponNames.push(weaponName);
      }
    }

    // If no swapped weapons, swap one
    if (!weaponSwapped && bruteNewWeaponNames[0] && opponentNewWeaponNames[0]) {
      bruteSwappedWeaponNames.push(bruteNewWeaponNames[0]);
      opponentSwappedWeaponNames.push(opponentNewWeaponNames[0]);
    }

    // Check swapped weapons length
    if (bruteSwappedWeaponNames.length !== opponentSwappedWeaponNames.length) {
      throw new Error('Different numbers of weapons to swap');
    }

    // Check if weapon to swap
    if (bruteSwappedWeaponNames.length === 0) {
      throw new Error('No weapon to swap');
    }

    fightData.steps.push({
      a: StepType.Spy,
      b: brute.index,
      t: opponent.index,
      s: bruteSwappedWeaponNames.map((weaponName) => WeaponByName[weaponName]),
      r: opponentSwappedWeaponNames.map((weaponName) => WeaponByName[weaponName]),
    });

    // Swap weapons
    for (const swappedWeaponName of bruteSwappedWeaponNames) {
      const index = brute.weapons.findIndex((weapon) => weapon.name === swappedWeaponName);
      if (index === -1) {
        throw new Error('Weapon not found');
      }

      opponent.weapons.push(brute.weapons[index]!);
      brute.weapons.splice(index, 1);
    }

    for (const swappedWeaponName of opponentSwappedWeaponNames) {
      const index = opponent.weapons.findIndex((weapon) => weapon.name === swappedWeaponName);
      if (index === -1) {
        throw new Error('Weapon not found');
      }

      brute.weapons.push(opponent.weapons[index]!);
      opponent.weapons.splice(index, 1);
    }

    // Add own weapons to opponent damaged weapons
    opponent.damagedWeapons.push(...bruteSwappedWeaponNames);
  }
};

export default applySpy;
