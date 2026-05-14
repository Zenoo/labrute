
import {
  SpyStep, WeaponId, randomBetween
} from '@labrute/core';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { AnimationFighter, findFighter } from './utils/findFighter';
import {
  WEAPONS_PER_ROW, WEAPON_SIZE, WEAPON_SPACING
} from './utils/fightPositions';

export const spy = async (
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

  // Play steal SFX
  void sound.play('sfx', { sprite: 'spy' });

  // Give brute weapons to opponent
  const newOpponentWeapons: Partial<Record<WeaponId, number>> = {};

  for (const weaponToSwap of step.s) {
    const tier = brute.weapons[weaponToSwap]
    if (!tier) {
      throw new Error('Weapon not found');
    }

    // Remove weapon from brute
    delete brute.weapons[weaponToSwap];

    const illustrationIndex = brute.teamWeaponsIllustrations
      .findIndex((w) => (+w.name as WeaponId) === weaponToSwap);

    if (illustrationIndex === -1) {
      throw new Error('Weapon illustration not found');
    }

    // Remove weapon illustration from brute
    const [weaponIllustration] = brute.teamWeaponsIllustrations.splice(illustrationIndex, 1);

    if (!weaponIllustration) {
      throw new Error('Weapon illustration not found');
    }

    // Add weapon to opponent
    newOpponentWeapons[weaponToSwap] = tier;
    opponent.teamWeaponsIllustrations.push(weaponIllustration);
  }

  // Give opponent weapons to brute
  for (const weaponToSwap of step.r) {
    const weapon = opponent.weapons[weaponToSwap]
    if (!weapon) {
      throw new Error('Weapon not found');
    }

    // Remove weapon from opponent
    delete opponent.weapons[weaponToSwap];

    const illustrationIndex = opponent.teamWeaponsIllustrations
      .findIndex((w) => (+w.name as WeaponId) === weaponToSwap);

    if (illustrationIndex === -1) {
      throw new Error('Weapon illustration not found');
    }

    // Remove weapon illustration from opponent
    const [weaponIllustration] = opponent.teamWeaponsIllustrations.splice(illustrationIndex, 1);

    if (!weaponIllustration) {
      throw new Error('Weapon illustration not found');
    }

    // Add weapon to brute
    brute.weapons[weaponToSwap] = weapon;
    brute.teamWeaponsIllustrations.push(weaponIllustration);
  }

  // Add opponent's new weapons to his list
  Object.entries(newOpponentWeapons).forEach(([w, tier]) => {
    opponent.weapons[+w as WeaponId] = tier;
  });

  // Sort weapons
  brute.teamWeaponsIllustrations.sort((a, b) => +a.name - +b.name);
  opponent.teamWeaponsIllustrations.sort((a, b) => +a.name - +b.name);

  // Swap weapon illustrations
  [brute.teamWeaponsIllustrations, opponent.teamWeaponsIllustrations]
    .forEach((teamWeaponsIllustrations, index) => {
      const fighter = index === 0 ? opponent : brute;

      teamWeaponsIllustrations
        .forEach((weapon, i) => {
          // Get random duration
          const duration = 1 + randomBetween(1, 10) / 10;

          // Get target position
          const targetPosition = {
            x: fighter.team === 'R'
              ? (i % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60
              : 480 - ((i % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60),
            y: Math.floor(i / WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 40,
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
