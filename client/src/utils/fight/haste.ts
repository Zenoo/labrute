/* eslint-disable no-void */
import { HasteStep, randomBetween } from '@labrute/core';
import { Application, Sprite, Texture, BaseTexture, BufferResource, Filter, Extract } from 'pixi.js';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import { MotionBlurFilter } from '@pixi/filter-motion-blur';
import { AdjustmentFilter } from '@pixi/filter-adjustment';

import displayDamage from './utils/displayDamage';
import { getRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';
import stagger from './stagger';
import updateHp from './updateHp';
import { untrap } from './untrap';
import { playDustEffect, playHitEffect } from './utils/playVFX';
import { playResistAnimation } from './resist';

export const haste = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HasteStep,
  speed: React.MutableRefObject<number>,
  isClanWar: boolean,
) => {
  if (!app.loader) {
    return;
  }
  const spritesheet = app.loader.resources['/images/game/misc.json']?.spritesheet;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  const brute = findFighter(fighters, step.b);
  if (!brute) {
    throw new Error('Brute not found');
  }

  const target = findFighter(fighters, step.t);
  if (!target) {
    throw new Error('Target not found');
  }
  // Play skill SFX
  void sound.play('sfx', { sprite: 'haste' });

  const windUpEnded = brute.animation.waitForEvent('strengthen:end');

  // Set animation to `strenghten`
  brute.animation.setAnimation('strengthen');

  await windUpEnded;
  // Set animation to `run`
  brute.animation.setAnimation('run');

  // Initialise brute filters
  if (!brute.animation.container.filters) brute.animation.container.filters = [];

  const hasteFilters: Filter[] = [
    // Yellowish color adjustment filter
    new AdjustmentFilter({ red: 2, green: 2 }),
    // Motion blur filter
    new MotionBlurFilter([50, 0], 9)
  ];
  // Add filters
  for (const filter of hasteFilters) brute.animation.container.filters.push(filter);

  // Dust cloud on sprint start
  playDustEffect(app, brute, speed);

  // Move brute to target position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.2 / speed.current,
    ease: Easing.linear,
  }, {
    x: target.animation.container.x,
    y: target.animation.container.y,
  });

  // Remove haste filters
  brute.animation.container.filters = brute.animation.container.filters.filter(
    (f) => !hasteFilters.includes(f)
  );

  // Set run animation on the prettiest frame
  brute.animation.setAnimation('run', 2);

  // Hide brute's shadow
  brute.animation.shadow.visible = false;

  // Get brute texture
  const originalTexture = app.renderer.generateTexture(brute.animation.container);
  // Create sprite from it
  const sprite = new Sprite(originalTexture);
  const { width, height } = sprite.texture;

  // Create array to work with pixels
  let pixels: Uint8Array = new Uint8Array();

  // Is extract not excluded by a custom build
  if ('extract' in app.renderer.plugins) {
    // Extract pixels
    const extract = app.renderer.plugins.extract as Extract;
    pixels = extract.pixels(sprite);
  }

  // Create the ghost image, a gradient starting on fighter's outline
  // Alpha gradient state for current row
  let gradientStart = false;
  // Length of gradient in percent
  const gradientPart = 0.66;
  // Color of the ghost
  const ghostColor = {
    alpha: 225,
    red: 255,
    green: 225,
    blue: 100,
  };
  // Loop throught pixels
  for (let i = pixels.length - 4; i > 0; i -= 4) {
    // Current column
    const column = (i % (4 * width)) / 4;
    // Current row's gradient delta per pixel
    const gradientDelta = Math.max(
      1,
      (ghostColor.alpha - Math.random() * 4) / (width * gradientPart)
    );
    // Alpha gradient
    const gradient = ghostColor.alpha - gradientDelta * (width * gradientPart - column);
    // New row
    if (column === 0) gradientStart = false;
    // Colors
    pixels[i] = ghostColor.red - Math.random() * 30;
    pixels[i + 1] = ghostColor.green + Math.random() * 30;
    pixels[i + 2] = ghostColor.blue + Math.random() * 30;
    // Start gradient on first opaque pixel
    if (!gradientStart && pixels[i + 3] === 255 && column < width * gradientPart) {
      gradientStart = true;
    }

    // If gradient started, apply it
    if (gradientStart) pixels[i + 3] = Math.max(0, gradient);
    // Else min gradient and pixel's alpha
    else pixels[i + 3] = Math.min(pixels[i + 3] ?? 0, gradient);
  }

  // Create ghost texture
  const ghostTexture = new BaseTexture(new BufferResource(pixels, { width, height }), {
    width,
    height,
  });

  // Create ghost
  const ghost = new Sprite();
  ghost.texture = new Texture(ghostTexture);
  // Place ghost behind target
  ghost.position.set(
    brute.team === 'L'
      ? target.animation.container.x + 0.5 * brute.animation.baseWidth + width * 0.33
      : target.animation.container.x - 0.5 * brute.animation.baseWidth - width * 0.33,
    target.animation.container.y,
  );
  ghost.anchor.set(0.5, 1);
  ghost.scale = brute.animation.container.scale;
  ghost.zIndex = target.animation.container.zIndex + 1;

  // Add ghost to stage
  app.stage.addChild(ghost);

  // Show brute's shadow
  brute.animation.shadow.visible = true;

  // Ghost fade out
  void Tweener.add({
    target: ghost,
    duration: 1.2 / speed.current,
    ease: Easing.linear,
  }, {
    alpha: 0,
  }).then(() => {
    // Remove from stage
    app.stage.removeChild(ghost);
  });

  // Re-apply haste filters
  for (const filter of hasteFilters) brute.animation.container.filters.push(filter);

  // Play hit effect
  playHitEffect(app, brute, target, speed);

  // Wake up target
  target.stunned = false;

  // Untrap target
  untrap(app, target);

  // Get target hit animation (random for male brute)
  const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
    ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
    : 'hit';

  const animationEnded = target.animation.waitForEvent(`${animation}:end`);

  // Set target animation to the correct hit animation
  target.animation.setAnimation(animation);

  displayDamage({ app, target, damage: step.d, speed, criticalHit: step.c });

  // Play the resist animation now
  playResistAnimation(app, target, speed);

  // Update HP bar
  updateHp(fighters, target, -step.d, speed, isClanWar);

  // Stagger
  stagger(target, speed, step.c ? 12 : 0).catch(console.error);

  animationEnded.then(() => {
    // Set target animation to normal
    target.animation.setAnimation(target.stunned ? 'death' : 'idle');
  }).catch(console.error);

  // Get position 200px away from target
  const targetX = target.animation.container.x + (target.team === 'L' ? -200 : 200);
  const targetY = target.animation.container.y;

  // Move brute to target position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.10 / speed.current,
    ease: Easing.linear,
  }, {
    x: targetX,
    y: targetY,
  });

  const { x, y } = getRandomPosition(fighters, brute);

  // Remove haste filters
  brute.animation.container.filters = brute.animation.container.filters.filter(
    (f) => !hasteFilters.includes(f)
  );
  // Teleport brute outside of the screen
  brute.animation.container.x = (
    brute.team === 'L'
      ? -brute.animation.baseWidth * 2
      : app.screen.width + (brute.animation.baseWidth * 2)
  );
  brute.animation.container.y = y;

  // Move brute to position
  await Tweener.add({
    target: brute.animation.container,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    x,
    y,
  });

  // Set brute animation to normal
  brute.animation.setAnimation('idle');
};
