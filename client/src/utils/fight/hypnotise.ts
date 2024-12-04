/* eslint-disable no-void */
import { HypnotiseStep } from '@labrute/core';
import { sound } from '@pixi/sound';
import { GlowFilter } from '@pixi/filter-glow';
import { Easing, Tweener } from 'pixi-tweener';
import { Application, Sprite, RenderTexture, Graphics, filters, Container } from 'pixi.js';
import { getMultipleRandomPosition } from './utils/fightPositions';
import findFighter, { AnimationFighter } from './utils/findFighter';

const hypnotise = async (
  app: Application,
  fighters: AnimationFighter[],
  step: HypnotiseStep,
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
  const handRaised = brute.animation.waitForEvent('win:hand-raised');

  // Set brute animation to `win` at frame 3
  brute.animation.setAnimation('win', 3);

  // Wait for the hand to be raised
  await handRaised;

  // Keep hand raised
  brute.animation.animationSpeed = 0;

  // Play hypnosis SFX
  void sound.play('sfx', { sprite: 'hypnosis' });

  // Container for the spiral graphics
  const spiralContainer = new Container();

  // Container for the color inversion fadeIn
  const invertedContainer = new Container();
  // Color matrix filter
  const hypnosisFilter = new filters.ColorMatrixFilter();
  // Invert
  hypnosisFilter.negative(true);
  // Slight rosiness
  hypnosisFilter.hue(73, true);

  // Regular hue filter for the containers
  const invertFilter = new filters.ColorMatrixFilter();
  invertFilter.hue(-146, false);

  // If stage has no filter array, create one
  // eslint-disable-next-line no-param-reassign
  if (!app.stage.filters) app.stage.filters = [];
  // Add filter to stage
  app.stage.filters.push(hypnosisFilter);
  // Add filters to containers
  spiralContainer.filters = [invertFilter];
  invertedContainer.filters = [invertFilter];

  // Add containers
  app.stage.addChild(spiralContainer);
  app.stage.addChild(invertedContainer);

  // Set containers on front
  spiralContainer.zIndex = 1002;
  invertedContainer.zIndex = 1001;

  // Set alpha to zero
  spiralContainer.alpha = 0;

  // Copy the stage texture
  const stageTexture = RenderTexture.create({ width: app.screen.width, height: app.screen.height });
  app.renderer.render(app.stage, { renderTexture: stageTexture });
  // Create a sprite from it
  const stageSprite = new Sprite(stageTexture);
  const spiralStageSprite = new Sprite(stageTexture);
  // Add to containers
  invertedContainer.addChild(stageSprite);
  spiralContainer.addChild(spiralStageSprite);

  // Create spiral graphics
  const spiral = new Graphics();
  // Mask spiral container with it
  spiralContainer.mask = spiral;

  // Radius change par line
  let radiusIncrement = 4;
  // Angle of the line
  let angle = 0;
  // Thickness increment of the line
  let thicknessDelta = 0.04;
  let stopDraw = false;
  // Update spiral graphics
  const update = (delta: number) => {
    // Reset graphics
    spiral.clear();

    // Thickness start
    let thickness = 0;
    const centerX = app.screen.width / 2;
    const centerY = app.screen.height / 2;

    // Number of turns
    const turns = 12;

    // Draw the spiral
    for (let i = 0; i < turns * Math.PI * 2; i += 0.1) {
      thickness += thicknessDelta;
      spiral.lineStyle(thickness, 0xffffff);
      const radius = i * radiusIncrement;
      const x = centerX + radius * Math.cos(i + angle);
      const y = centerY + radius * Math.sin(i + angle);
      const moveX = centerX + radius * Math.cos(i + angle - 0.05);
      const moveY = centerY + radius * Math.sin(i + angle - 0.05);

      if (i === 0) {
        spiral.moveTo(x, y);
      } else {
        spiral.lineTo(x, y);
        spiral.moveTo(moveX, moveY);
      }
    }
    // Update params
    angle -= 0.25 * speed.current * delta;
    radiusIncrement += 0.015 * speed.current * delta;
    thicknessDelta -= 0.00048 * speed.current * delta;
    // Stop
    if (stopDraw) app.ticker.remove(update);
  };

  app.ticker.add(update);

  // Fade in spiral
  await Tweener.add({
    target: spiralContainer,
    duration: 0.05 / speed.current,
    ease: Easing.linear,
  }, {
    alpha: 1,
  });

  // Fade out inverted container
  await Tweener.add({
    target: invertedContainer,
    duration: 1 / speed.current,
    ease: Easing.linear,
  }, {
    alpha: 0,
  }).then(() => {
    // Remove from stage
    app.stage.removeChild(invertedContainer);
  });

  // Fade out spiral container to 0.3
  await Tweener.add({
    target: spiralContainer,
    duration: 1.2 / speed.current,
    ease: Easing.linear,
  }, {
    alpha: 0.3,
  });

  // Reset hypnosis filter
  hypnosisFilter.negative(true);
  hypnosisFilter.hue(-75, true);

  // Slight flash animation
  let brightness = 10;
  const flash = () => {
    brightness -= 1;
    hypnosisFilter.brightness(brightness, false);
    if (brightness <= 1 && app.stage.filters) {
      // Flash animation end
      app.ticker.remove(flash);
      // Remove hypnosis filter
      const index = app.stage.filters?.findIndex((f) => f === hypnosisFilter);
      if (index !== undefined && index !== -1) {
        app.stage.filters?.splice(index, 1);
      }
    }
  };

  // Start flash animation
  app.ticker.add(flash);

  // Fade out spiral container
  void Tweener.add({
    target: spiralContainer,
    duration: 0.5 / speed.current,
    ease: Easing.linear,
  }, {
    alpha: 0,
  }).then(() => {
    // End spiral animation
    stopDraw = true;
    // Remove from stage
    app.stage.removeChild(spiralContainer);
  });

  for (const target of step.t) {
    // Get fighter brute and bosses
    const fighter = findFighter(fighters, target);
    if (!fighter) {
      throw new Error('Hypnotized brute or boss not found');
    }

    if (!fighter.animation.container.filters) {
      // eslint-disable-next-line no-param-reassign
      fighter.animation.container.filters = [];
    }

    fighter.animation.container.filters.push(new GlowFilter({
      distance: 10,
      outerStrength: 1,
      innerStrength: 0.5,
      color: 0xAD3C8F,
      quality: 0.05,
    }));
  }

  const pets = step.p.map((petIndex) => {
    const pet = findFighter(fighters, petIndex);
    if (!pet) {
      throw new Error('Pet not found');
    }
    // Change pet team
    pet.team = brute.team;
    pet.master = brute.id;
    return pet;
  });

  // Get new random positions
  const newPositions = getMultipleRandomPosition(fighters, pets);

  // Move each pet to other team
  const animationsDone = [];
  for (const pet of pets) {
    // Get random position
    const { x, y } = newPositions.shift()!;

    // Set pet animation to `run`
    pet.animation.setAnimation('run');

    // Move pet to other team
    animationsDone.push(
      Tweener.add({
        target: pet.animation.container,
        duration: 0.5 / speed.current,
        ease: Easing.linear,
      }, { x, y }).then(() => {
        pet.animation.container.scale.x *= -1;

        // Set pet animation to `idle`
        pet.animation.setAnimation('idle');
      })
    );
  }

  // Set animation speed to reverse
  brute.animation.animationSpeed = -1;

  // Add hand down to waited animations
  animationsDone.push(brute.animation.waitForEvent('win:start'));

  // Wait for all animations to complete
  await Promise.all(animationsDone);

  // Set animation speed to normal
  brute.animation.animationSpeed = 1;

  // Set animation to idle
  brute.animation.setAnimation('idle');
};

export default hypnotise;
