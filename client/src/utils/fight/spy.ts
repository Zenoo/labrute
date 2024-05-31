import { SpyStep, WeaponId, randomBetween } from '@labrute/core';

import { Easing, Tweener } from 'pixi-tweener';
import findFighter, { AnimationFighter } from './utils/findFighter';

const spy = async (
  fighters: AnimationFighter[],
  step: SpyStep,
  speed: React.MutableRefObject<number>,
) => {
  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const opponent = findFighter(fighters, step.t);
  if (!opponent) {
    throw new Error('Opponent not found');
  }

  const animations: Promise<unknown>[] = [];

  // Give brute weapons to opponent
  for (const weaponToSwap of step.s) {
    const index = brute.weapons.findIndex((weapon) => weapon === weaponToSwap);
    if (index === -1) {
      throw new Error('Weapon not found');
    }

    // Remove weapon from brute
    brute.weapons.splice(index, 1);

    const illustrationIndex = brute.weaponsIllustrations
      .findIndex((weapon) => (+weapon.name as WeaponId) === weaponToSwap);

    if (illustrationIndex === -1) {
      throw new Error('Weapon illustration not found');
    }

    // Remove weapon illustration from brute
    const [weaponIllustration] = brute.weaponsIllustrations.splice(illustrationIndex, 1);

    if (!weaponIllustration) {
      throw new Error('Weapon illustration not found');
    }

    // Add weapon to opponent
    opponent.weapons.push(weaponToSwap);
    opponent.weaponsIllustrations.push(weaponIllustration);
  }

  // Give opponent weapons to brute
  for (const weaponToSwap of step.r) {
    const index = opponent.weapons.findIndex((weapon) => weapon === weaponToSwap);
    if (index === -1) {
      throw new Error('Weapon not found');
    }

    // Remove weapon from opponent
    opponent.weapons.splice(index, 1);

    const illustrationIndex = opponent.weaponsIllustrations
      .findIndex((weapon) => (+weapon.name as WeaponId) === weaponToSwap);

    if (illustrationIndex === -1) {
      throw new Error('Weapon illustration not found');
    }

    // Remove weapon illustration from opponent
    const [weaponIllustration] = opponent.weaponsIllustrations.splice(illustrationIndex, 1);

    if (!weaponIllustration) {
      throw new Error('Weapon illustration not found');
    }

    // Add weapon to brute
    brute.weapons.push(weaponToSwap);
    brute.weaponsIllustrations.push(weaponIllustration);
  }

  // Sort weapons
  brute.weapons.sort((a, b) => a - b);
  opponent.weapons.sort((a, b) => a - b);
  brute.weaponsIllustrations.sort((a, b) => +a.name - +b.name);
  opponent.weaponsIllustrations.sort((a, b) => +a.name - +b.name);

  // Swap weapon illustrations
  [brute.weaponsIllustrations, opponent.weaponsIllustrations]
    .forEach((weaponsIllustrations, index) => {
      const fighter = index === 0 ? opponent : brute;

      weaponsIllustrations
        .forEach((weapon, i) => {
          // Get random duration
          const duration = 1 + randomBetween(1, 10) / 10;

          // Get target position
          const targetPosition = {
            x: fighter.animation.team === 'right'
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
};

export default spy;
