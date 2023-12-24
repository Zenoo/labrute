/* eslint-disable no-void */
import { FIGHTER_HIT_ANCHOR, HitStep, WEAPONS_SFX, randomBetween } from '@labrute/core';
import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { Tweener } from 'pixi-tweener';
import { AnimatedSprite, Application, Text } from 'pixi.js';

import findFighter, { AnimationFighter } from './findFighter';
import getFighterType from './getFighterType';
import insideXBounds from './insideXBounds';
import stagger from './stagger';
import updateHp from './updateHp';

const HIT_VFX = ['blood', 'impact-1', 'impact-2'];

const hit = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HitStep,
  speed: React.MutableRefObject<number>,
) => {
  if (!app.loader) {
    return;
  }
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const fighter = findFighter(fighters, step.fighter);
  if (!fighter) {
    throw new Error('Fighter not found');
  }
  const target = findFighter(fighters, step.target);
  if (!target) {
    throw new Error('Target not found');
  }

  // Get hit animation (random for male brute)
  const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.data?.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit';

  // Set animation to the correct hit animation
  target.animation.setAnimation(animation);

  // Play hitting SFX
  if (step.action === 'poison') {
    // Poison SFX
    void sound.play('hit/poison', {
      speed: speed.current,
    });
  } else if (step.weapon) {
    // Skill SFX
    if (['thief', 'fierceBrute', 'tragicPotion', 'net', 'bomb', 'hammer', 'cryOfTheDamned', 'hypnosis', 'tamer'].includes(step.weapon)) {
      void sound.play(`skills/${step.weapon}`, {
        speed: speed.current,
      });
    } else {
      // Weapon SFX
      void sound.play(`hitting/${WEAPONS_SFX[step.weapon][randomBetween(0, WEAPONS_SFX[step.weapon].length - 1)]}`, {
        speed: speed.current,
      });
    }
  } else if (step.fighter.type === 'pet') {
    // Sword SFX for pets
    void sound.play('hitting/sword', {
      speed: speed.current,
    });
  } else {
    // Fist SFX
    void sound.play(`hitting/fist${randomBetween(1, 3)}`, {
      speed: speed.current,
    });
  }

  // Play hit SFX
  if (step.target.type === 'pet') {
    // Remove numbers from pet name
    void sound.play(`hit/${step.target.name.replace(/\d/g, '')}`, {
      speed: speed.current,
    });
  }

  let vfx = null;

  if (step.action !== 'poison') {
    if (step.fighter.type === 'pet') {
      vfx = 'blood';
    } else {
      vfx = HIT_VFX[randomBetween(0, HIT_VFX.length - 1)];
    }
  }

  // Create hit VFX
  if (vfx) {
    const hitVfx = new AnimatedSprite(spritesheet.animations[vfx]);
    hitVfx.zIndex = 1000;
    hitVfx.animationSpeed = speed.current / 4;
    hitVfx.loop = false;
    hitVfx.scale.x = target.animation.team === 'left' ? -1 : 1;

    // Set hit VFX position
    const fighterType = getFighterType(fighter);
    hitVfx.x = target.animation.container.x + FIGHTER_HIT_ANCHOR[fighterType].x * (target.animation.team === 'left' ? 1 : -1);
    hitVfx.y = target.animation.container.y - FIGHTER_HIT_ANCHOR[fighterType].y;

    // Add hit VFX to stage
    app.stage.addChild(hitVfx);

    // Destroy hit VFX when animation is finished
    hitVfx.onComplete = () => {
      hitVfx.destroy();
    };

    // Play hit VFX
    hitVfx.play();
  }

  // Add poison filter if damage is poison
  let poisonFilter: OutlineFilter | null = null;
  if (step.action === 'poison') {
    poisonFilter = new OutlineFilter(1, 0x006400);
    target.animation.container.filters = [
      ...target.animation.container.filters || [],
      poisonFilter,
    ];
  }

  // Display floating and fading damage text
  const damageText = new Text(`-${step.damage}`, {
    fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
  });
  damageText.anchor.set(0.5);
  damageText.x = insideXBounds(target.animation.container.x);
  damageText.y = target.animation.container.y - target.animation.container.height;
  damageText.zIndex = 1000;
  damageText.filters = [new OutlineFilter()];
  app.stage.addChild(damageText);

  Tweener.add({
    target: damageText,
    duration: 2 / speed.current,
  }, {
    y: damageText.y - 100,
    alpha: 0,
  }).then(() => {
    // Remove text
    damageText.destroy();
  }).catch(console.error);

  // Update HP bar
  if (target.hpBar) {
    updateHp(target, -step.damage, speed);
  }

  // Stagger
  await stagger(target, speed);

  // Remove poison filter
  if (step.action === 'poison') {
    target.animation.container.filters = target.animation.container.filters?.filter(
      (filter) => filter !== poisonFilter,
    ) || [];
  }

  // Set animation to `idle`
  target.animation.setAnimation('idle');
};

export default hit;