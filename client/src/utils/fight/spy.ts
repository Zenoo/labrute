import { SpyStep, randomBetween } from '@labrute/core';
import { Application } from 'pixi.js';

import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './findFighter';
import { WeaponName } from '@labrute/prisma';

const spy = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SpyStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.brute);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const opponent = findFighter(fighters, step.opponent);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  // Old versions didn't have sent/received weapons
  // apply all weapons to brute and opponent
  if (!step.sent) {
    // eslint-disable-next-line no-param-reassign
    step.sent = brute.weapons.map((weapon) => weapon.name);
  }
  if (!step.received) {
    // eslint-disable-next-line no-param-reassign
    step.received = opponent.weapons.map((weapon) => weapon.name);
  }

  const animations: Promise<unknown>[] = [];

  // Get final brute weapons
  const finalBruteWeapons = [...brute.weapons]
    .filter((weapon) => !step.sent.includes(weapon.name))
    .concat(opponent.weapons.filter((weapon) => step.received.includes(weapon.name)))
    .sort((a, b) => a.name.localeCompare(b.name));
  const finalBruteWeaponIllustrations = [...brute.weaponsIllustrations]
    .filter((weapon) => !step.sent.includes(weapon.name as WeaponName))
    .concat(opponent.weaponsIllustrations
      .filter((weapon) => step.received.includes(weapon.name as WeaponName)))
    .sort((a, b) => a.name.localeCompare(b.name));
  const finalOpponentWeapons = [...opponent.weapons]
    .filter((weapon) => !step.received.includes(weapon.name))
    .concat(brute.weapons.filter((weapon) => step.sent.includes(weapon.name)))
    .sort((a, b) => a.name.localeCompare(b.name));
  const finalOpponentWeaponIllustrations = [...opponent.weaponsIllustrations]
    .filter((weapon) => !step.received.includes(weapon.name as WeaponName))
    .concat(brute.weaponsIllustrations
      .filter((weapon) => step.sent.includes(weapon.name as WeaponName)))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Swap weapon illustrations
  [finalBruteWeaponIllustrations, finalOpponentWeaponIllustrations]
    .forEach((weaponsIllustrations, index) => {
      const fighter = index === 0 ? opponent : brute;

      weaponsIllustrations
        .forEach((weapon, i) => {
          // Get random duration
          const duration = 1 + randomBetween(1, 10) / 10;

          // Get target position
          const targetPosition = {
            x: fighter.team === 'right'
              ? (i % 9) * 20 + 60
              : 480 - ((i % 9) * 20 + 60),
            y: Math.floor(i / 9) * 20 + 40,
          };

          // Move weapon horizontally
          animations.push(Tweener.add({
            target: weapon,
            duration: duration / speed.current,
            ease: Easing.linear,
          }, {
            x: targetPosition.x,
          }));

          // Move weapon vertically
          animations.push(new Promise((resolve) => {
            // First arc
            Tweener.add({
              target: weapon,
              duration: (duration / 2) / speed.current,
              ease: Easing.easeOutCirc,
            }, {
              y: targetPosition.y + randomBetween(-100, 100),
            }).then(() => {
              // Second arc
              Tweener.add({
                target: weapon,
                duration: (duration / 2) / speed.current,
                ease: Easing.easeInCirc,
              }, {
                y: targetPosition.y,
              }).then(resolve).catch(console.error);
            }).catch(console.error);
          }));
        });
    });

  // Wait for animations to complete
  await Promise.all(animations);

  // Swap weapons
  brute.weapons = finalBruteWeapons;
  opponent.weapons = finalOpponentWeapons;
  brute.weaponsIllustrations = finalBruteWeaponIllustrations;
  opponent.weaponsIllustrations = finalOpponentWeaponIllustrations;
};

export default spy;