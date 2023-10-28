/* eslint-disable no-param-reassign */
import { Animation } from '@labrute/core';
import { GlowFilter } from '@pixi/filter-glow';
import { AnimatedSprite, Application, Filter, Sprite } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import setupSprite from './setupSprite';
import { updateShieldFrame, updateWeaponFrame } from './updateWeapons';
import { BevelFilter } from '@pixi/filter-bevel';
import { Easing, Tweener } from 'pixi-tweener';
import { OutlineFilter } from '@pixi/filter-outline';

const getSprite = (
  app: Application,
  fighter: AnimationFighter,
  animation: Animation,
  speed: React.MutableRefObject<number>,
) => {
  // Do nothing if the game was stopped
  if (!app.loader) {
    return;
  }

  // Get sprite
  const newAnimation = setupSprite(
    app,
    fighter,
    animation,
    fighter.team,
    speed,
  );

  if (!newAnimation) {
    throw new Error(`New animation not found: ${animation}`);
  }

  // Set old animation to invisible
  fighter.currentAnimation.visible = false;

  // Add Bevel filter
  newAnimation.filters = [new BevelFilter()];

  // Set new animation to visible
  newAnimation.visible = true;

  // Remove old animation
  fighter.container.removeChild(fighter.currentAnimation);
  fighter.currentAnimation.destroy();

  // Update current animation
  fighter.currentAnimation = newAnimation;
  fighter.container.addChild(newAnimation);

  // Update weapon frame
  if (fighter.activeWeapon?.sprite) {
    updateWeaponFrame(fighter);
  }

  // Update shield frame
  if (fighter.activeShield?.sprite) {
    updateShieldFrame(fighter);
  }

  if (newAnimation instanceof AnimatedSprite) {
    // Setup weapon and shield frame change on animation frame change
    newAnimation.onFrameChange = () => {
      if (app.ticker?.started) {
        if (fighter.activeWeapon?.sprite) {
          updateWeaponFrame(fighter);
        }

        if (fighter.activeShield?.sprite) {
          updateShieldFrame(fighter);
        }
      }
    };

    // Play new animation
    newAnimation.play();
  }
};

export const handleEffects = (
  fighter: AnimationFighter,
  previousFilters: Filter[] | null,
) => {
  if (!fighter.currentAnimation.filters) {
    fighter.currentAnimation.filters = [];
  }

  // Carry resistant filter over
  const resistantFilter = previousFilters
    ?.find((f) => f instanceof OutlineFilter && f.color === 0xffff00);
  if (resistantFilter) {
    fighter.currentAnimation.filters.push(resistantFilter);
  }

  if (fighter.activeEffects.includes('fierceBrute')) {
    fighter.currentAnimation.filters.push(new GlowFilter({
      color: 0xff0000,
      outerStrength: 1,
    }));
  }
};

const changeAnimation = (
  app: Application,
  fighter: AnimationFighter,
  animation: Animation,
  speed: React.MutableRefObject<number>,
) => {
  const { loader: { resources: { '/images/game/misc.json': { spritesheet } } } } = app;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Store previous filters
  const { filters: previousFilters } = fighter.currentAnimation;

  // Cancel previous animation changes
  if ((fighter.currentAnimation as AnimatedSprite).play) {
    (fighter.currentAnimation as AnimatedSprite).off('complete');
  }

  // Add broken net VFX if fighter was trapped
  if (fighter.currentAnimation.name === 'trapped-loop') {
    // Create 6 net parts
    for (let i = 0; i < 6; i += 1) {
      const netPart = new Sprite(spritesheet.textures['net-part.png']);
      netPart.filters = [new BevelFilter()];

      // Set random position around fighter
      netPart.position.set(
        fighter.container.x + Math.random() * 20 - 10,
        fighter.container.y + Math.random() * 20 - 10,
      );

      // Add net part to stage
      app.stage.addChild(netPart);

      // Set random rotation
      netPart.rotation = Math.random() * Math.PI * 2;

      // Move net part away from fighter
      Tweener.add({
        target: netPart,
        duration: 0.5,
        ease: Easing.linear,
      }, {
        x: netPart.x + Math.cos(netPart.rotation) * 30,
        y: netPart.y + Math.sin(netPart.rotation) * 30,
      }).then(() => {
        // Fade out net part
        Tweener.add({
          target: netPart,
          duration: 0.5,
          ease: Easing.linear,
        }, {
          alpha: 0,
        }).then(() => {
          // Destroy net part
          netPart.destroy();
        }).catch(console.error);
      }).catch(console.error);
    }
  }

  // Handle idle differently for monks
  if (animation === 'idle' && fighter.skills && fighter.skills.includes('monk')) {
    // Load the animation start
    getSprite(app, fighter, 'monk-start', speed);

    // Wait for animation to end
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      if (fighter.currentAnimation.name === 'monk-start') {
        // Load the animation loop
        getSprite(app, fighter, 'monk-loop', speed);
      }
    };
  } else {
    getSprite(app, fighter, animation, speed);
  }

  handleEffects(fighter, previousFilters);
};

export default changeAnimation;