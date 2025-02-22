/* eslint-disable no-void */
import { SkillActivateStep, SkillById, SkillId } from '@labrute/core';
import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { AdjustmentFilter } from '@pixi/filter-adjustment';

import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import stagger from './stagger';
import findFighter, { AnimationFighter } from './utils/findFighter';
import repositionFighters from './utils/repositionFighters';
import { playDustEffect } from './utils/playVFX';
import { airbornMove } from './utils/updateShadow';

const skillActivate = async (
  app: Application,
  fighters: AnimationFighter[],
  step: SkillActivateStep,
  speed: React.MutableRefObject<number>,
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

  // Filter the only activation case outside of neutral (wake up cry)
  if (step.s !== SkillId.cryOfTheDamned || !brute.stunned) {
    // Reposition mispositionned fighters before skillActivate
    await repositionFighters(app, fighters, speed);
  }

  // Play skill SFX
  if ([SkillId.cryOfTheDamned, SkillId.fierceBrute].includes(step.s)) {
    void sound.play('sfx', { sprite: `${SkillById[step.s]}` });
  }

  if ([SkillId.cryOfTheDamned, SkillId.fierceBrute, SkillId.hammer].includes(step.s)) {
    const animationEnded = brute.animation.waitForEvent('strengthen:end');

    // Set animation to `strenghten`
    brute.animation.setAnimation('strengthen');

    if (step.s === SkillId.fierceBrute) {
      brute.fierceBrute = true;

      // Ghost creation interval
      const ghostInterval = 2;
      // Number of ghosts
      const maxGhosts = 6;
      // Ghost array
      const ghosts: Sprite[] = [];
      let currentIndex = maxGhosts;
      let timeSinceLastGhost = ghostInterval;
      // Ticker update function
      const update = (delta: number) => {
        if (brute.animation.container.destroyed) return;

        timeSinceLastGhost += delta * speed.current;
        // No ghost creation
        if (timeSinceLastGhost < ghostInterval) return;
        timeSinceLastGhost -= ghostInterval;
        // FierceBrute end
        if (!brute?.fierceBrute) {
          // Remove ghosts from stage
          for (const ghost of ghosts) app.stage.removeChild(ghost);
          // Remove update from ticker
          app.ticker.remove(update);
          return;
        }
        // Update ghosts color filter
        for (const ghost of ghosts) {
          if (ghost) {
            const filter = ghost.filters?.find(
              (f) => f instanceof AdjustmentFilter
            ) as AdjustmentFilter | null;
            if (filter) {
              filter.blue += 0.16;
              filter.red -= 0.28;
            }
          }
        }
        // Add ghost
        currentIndex = (currentIndex + 1) % maxGhosts;
        let ghost = ghosts[currentIndex];
        if (!ghost) {
          ghost = new Sprite();
          ghosts[currentIndex] = ghost;
          app.stage.addChild(ghost);
          ghost.filters = [new AdjustmentFilter()];
        }
        // Reposition last ghost
        if (ghost) {
          // Hide shadow before texture copy
          brute.animation.shadow.visible = false;
          // Get brute's current texture
          ghost.texture = app.renderer.generateTexture(brute.animation.container);
          // Position ghost behind brute
          const fighterBounds = brute.animation.container.getBounds();
          ghost.position.set(fighterBounds.x, fighterBounds.y);
          ghost.anchor.set(brute.animation.container.scale.x === 1 ? 0 : 1, 0);
          ghost.scale = brute.animation.container.scale;
          ghost.zIndex = brute.animation.container.zIndex - 1;
          // Reset color filter
          const filter = ghost.filters?.find(
            (f) => f instanceof AdjustmentFilter
          ) as AdjustmentFilter | null;
          if (filter) {
            filter.blue = 0.9;
            filter.red = 2.4;
            filter.saturation = 0.28;
            filter.gamma = 0.26;
            filter.contrast = 0.62;
          }
          // Show brute's shadow
          brute.animation.shadow.visible = true;
        }
      };
      // Add to ticker
      app.ticker.add(update);
    }

    const animations = [];

    // Strengthen animation
    animations.push(new Promise((resolve) => {
      animationEnded.then(() => {
        // Set animation to `idle`
        brute.animation.setAnimation('idle');

        resolve(null);
      }).catch((err) => {
        console.error(err);
      });
    }));

    if (step.s === SkillId.cryOfTheDamned) {
      // Create 3 cries
      for (let i = 0; i < 3; i++) {
        const cry = new AnimatedSprite(spritesheet.animations.cry || []);
        cry.animationSpeed = speed.current;
        cry.zIndex = 1000;
        cry.alpha = 0;

        // Set cry position
        cry.position.set(
          brute.animation.container.x + (i % 2) * 20,
          brute.animation.container.y - brute.animation.baseHeight / 2 + i * 20,
        );

        // Add cry to stage
        app.stage.addChild(cry);

        // Play cry animation
        cry.play();

        // Fade in cry
        Tweener.add({
          target: cry,
          duration: 0.25 / speed.current,
          ease: Easing.linear,
        }, {
          alpha: 1,
        }).catch(console.error);

        // Move cry horizontally
        Tweener.add({
          target: cry,
          duration: 1 / speed.current,
          ease: Easing.linear,
        }, {
          x: brute.team === 'L' ? cry.x + 100 : cry.x - 100,
        }).then(() => {
          // Destroy cry
          cry.destroy();
        }).catch(console.error);
      }
    }

    // Stagger remaining pets
    // Don't do it if brute is stunned as it would cancel a pet's moveBack
    if (step.p && !brute.stunned) {
      for (const petIndex of step.p) {
        // Get pet
        const pet = findFighter(fighters, petIndex);
        if (!pet) {
          throw new Error('Pet not found');
        }
        animations.push(stagger(pet, speed));
      }
    }

    if (brute.stunned) {
      // If brute is stunned, it means it is repulsing the opponent
      // in this case the animation must be played while opponent runs away
      brute.stunned = false;
      void Promise.all(animations);
    } else {
      // Else, wait for animations to complete
      await Promise.all(animations);
    }
  }

  // Flash flood
  if (step.s === SkillId.flashFlood) {
    // Set brute animation to `evade`
    brute.animation.setAnimation('evade');
    // Start airborn phase
    brute.animation.setAirborn(true);
    // Dust cloud on takeof
    playDustEffect(app, brute, speed);
    // Move brute to upper middle
    await airbornMove({
      fighter: brute,
      speed,
      duration: 0.4,
      ease: Easing.easeOutCubic,
      endPosition: {
        y: 100,
        x: brute.team === 'L'
          ? app.screen.width / 2 - brute.animation.baseWidth / 2
          : app.screen.width / 2 + brute.animation.baseWidth / 2,
      },
    });
    // Make sure brute is on front
    brute.animation.container.zIndex = 1000;
  }
};

export default skillActivate;
