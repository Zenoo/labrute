import { WeaponById, WeaponId, weapons } from '@labrute/core';
import { Application, Sprite, Container, filters } from 'pixi.js';
import { DropShadowFilter } from '@pixi/filter-drop-shadow';

import { AnimationFighter } from './utils/findFighter';
import { Easing, Tweener } from 'pixi-tweener';

// Light and realistic item bouncing module
const itemDrop = ({
  app,
  fighter,
  speed,
  item,
  initialPosition,
  initialVelocity,
  broken,
  saboteur,
}: {
  app: Application;
  fighter: AnimationFighter;
  speed: React.MutableRefObject<number>,
  item: WeaponId | 'shield';
  initialPosition?: { x?: number; y?: number; r?: number },
  initialVelocity?: { x?: number; y?: number; r?: number },
  broken?: boolean;
  saboteur?: boolean;
}) => {
  if (!app.loader) {
    return;
  }
  const itemSpriteSheet = app.loader.resources[
    item === 'shield' || broken || saboteur
      ? '/images/game/misc.json'
      : '/images/game/thrown-weapons.json'
  ]?.spritesheet;

  if (!itemSpriteSheet) {
    throw new Error('Spritesheet not found');
  }

  // Shield / weapon / broken-weapon / saboteur-weapon texture
  const itemTexture = itemSpriteSheet.textures[
    item === 'shield'
      ? 'shield'
      : broken
        ? `broken-weapons/${WeaponById[item]}.png`
        : saboteur
          ? `saboteur-weapons/${WeaponById[item]}.png`
          : `${WeaponById[item]}.png`
  ];

  // Create sprites
  const itemSprite = new Sprite(itemTexture);
  const shadowSprite = new Sprite(itemTexture);

  // Position item so the grip of the weapon is close to the hand
  const itemX = initialPosition?.x
    ?? (fighter.team === 'L'
      ? fighter.animation.container.x + fighter.animation.baseWidth * 0.25 - itemSprite.width * 0.2
      : fighter.animation.container.x - fighter.animation.baseWidth * 0.25 + itemSprite.width * 0.2
    );
  const itemY = initialPosition?.y
    ?? (fighter.animation.container.y
      - fighter.animation.baseHeight * 0.5 - itemSprite.width * 0.7);

  // Shield in front, weapons behind
  const baseZIndex = fighter.animation.container.y + (item === 'shield' ? 1 : -1);

  // Create containers in order to handle scale and angle in the right order
  const itemContainer = new Container();
  const shadowContainer = new Container();

  // Add to containers
  itemContainer.addChild(itemSprite);
  shadowContainer.addChild(shadowSprite);

  itemContainer.zIndex = baseZIndex;
  // Add a transparent shadow filter to item sprite that will be faded in at the end
  const shadowFilter = new DropShadowFilter({ alpha: 0, quality: 1, distance: 0 });
  itemSprite.filters = [shadowFilter];
  itemSprite.anchor.set(0.5, 0.5);
  // Set sprite angle
  itemSprite.angle = fighter.team === 'L' ? -110 : -70;
  // Set item position
  itemContainer.position.set(itemX, itemY);

  // Initialise the shadow container
  shadowContainer.zIndex = baseZIndex - 0.1;
  shadowContainer.y = shadowContainer.zIndex;
  shadowSprite.anchor.set(0.5, 0.5);
  // Black tint
  shadowSprite.tint = 0x000000;
  shadowSprite.alpha = 0.4;
  // Add a blur filter to the shadow
  shadowContainer.filters = [new filters.BlurFilter(4, 4, 4, 5)];
  shadowContainer.scale.y = 0.4;

  // Add to stage
  app.stage.addChild(itemContainer);
  app.stage.addChild(shadowContainer);

  // Items can levitate (saboteur bumps)
  const levitate = item === WeaponId.bumps && saboteur;

  // Gravity constant
  const gravity = levitate ? -0.01 : 1;

  // Infer item weight from it's damage
  let itemWeight = item === 'shield'
    ? 0.3
    : Math.max(0.1, (weapons.find((weapon) => weapon.name === WeaponById[item])?.damage ?? 0) / 70);

  // Lower weight if broken or saboteur (plastic)
  if (broken) itemWeight *= 0.5;
  if (saboteur) itemWeight = Math.min(itemWeight, 0.2);

  // Roundness coefficient to handle bounces
  const itemRoundness = Math.min(
    0.7,
    Math.min(itemSprite.height, itemSprite.width) / Math.max(itemSprite.height, itemSprite.width)
  );

  // How much the item will bounce
  const itemBounciness = -0.9 + itemWeight * 2.5 * itemRoundness;

  // Velocity (x, y, angle)
  // Initialise as a default overhead throw
  // Initial velocity depends on item weight
  // Initial x and angle velocity are relative to the fighter
  const velocity = {
    x: (initialVelocity?.x ?? 7) * (fighter.team === 'L' ? -1 : 1) * (1.15 - itemWeight),
    y: (initialVelocity?.y ?? -7) * (1.2 - itemWeight),
    r: (initialVelocity?.r ?? (Math.random() * 10 + 6))
      * (fighter.team === 'L' ? -1 : 1) * (1.2 - itemWeight),
  };

  // Animation variables
  // Base speed that will go down with time and bounces
  let itemSpeed = 1;
  // Number of bounces
  let numBounces = 0;
  // At end phase, the item will slow down and the shadow will fade out
  let endPhase = false;
  // Store the shadow alpha at the start of ending part
  let endShadowAlpha = 0;

  // Update function
  const update = (delta: number) => {
    const deltaTime = delta * speed.current * itemSpeed;

    // Update item position
    itemContainer.x += velocity.x * deltaTime;
    itemContainer.y += velocity.y * deltaTime;

    // Update angle
    if (levitate) velocity.r = 270 - itemSprite.angle;
    itemSprite.angle = (((itemSprite.angle + velocity.r * deltaTime) % 360) + 360) % 360;

    // Update shadow x
    shadowContainer.x = itemContainer.x;

    // Update shadow if not end phase
    if (!endPhase) {
      shadowSprite.angle = -itemSprite.angle;
      shadowContainer.y -= shadowContainer.getBounds().y - shadowContainer.zIndex;
      shadowContainer.alpha = (10 - numBounces) * 0.1
        * Math.max(0.6, Math.abs(itemContainer.y - shadowContainer.y) / 200);
    }
    // Check if item is in contact with the ground
    const itemBounds = itemSprite.getBounds();
    if (itemBounds.y + itemBounds.height > baseZIndex && velocity.y > 0) {
      // Increment number of bounces
      numBounces++;
      // Reposition item over the ground
      itemContainer.y -= itemBounds.y + itemBounds.height - baseZIndex;
      // Get angle relative to the ground
      const currentAngle = itemSprite.angle % 180;

      // Compute the bounce influence on the velocity
      let vxCoef = 0;
      let vyCoef = 0;
      let vrCoef = 0;
      // Interpolate the influence depending on the item angle for realism
      // For instance, for 0 - 45 - 90 - 135 - 0 angles, x influence is 0.7 - 0.5 - 0.6 - 0.5 - 0.7
      if (currentAngle < 45) {
        const interpFactor = currentAngle / 45;
        vxCoef = 0.7 * (1 - interpFactor) + 0.5 * interpFactor;
        vyCoef = 0.8 * (1 - interpFactor) + 0.6 * interpFactor;
        vrCoef = -0.5 * (1 - interpFactor) + -1 * interpFactor;
      } else if (currentAngle < 90) {
        const interpFactor = (currentAngle - 45) / 45;
        vxCoef = 0.5 * (1 - interpFactor) + 0.6 * interpFactor;
        vyCoef = 0.6 * (1 - interpFactor) + 0.1 * interpFactor;
        vrCoef = -1 * (1 - interpFactor) + -0.5 * interpFactor;
      } else if (currentAngle < 135) {
        const interpFactor = (currentAngle - 90) / 45;
        vxCoef = 0.6 * (1 - interpFactor) + 0.5 * interpFactor;
        vyCoef = 0.1 * (1 - interpFactor) + 0.6 * interpFactor;
        vrCoef = 0.5 * (1 - interpFactor) + 1 * interpFactor;
      } else {
        const interpFactor = (currentAngle - 135) / 45;
        vxCoef = 0.5 * (1 - interpFactor) + 0.7 * interpFactor;
        vyCoef = 0.6 * (1 - interpFactor) + 0.8 * interpFactor;
        vrCoef = 1 * (1 - interpFactor) + 0.5 * interpFactor;
      }
      // Get the new velocity
      const newVr = vrCoef * 1
        * (vxCoef * Math.abs(velocity.x) + vyCoef * velocity.y + 10 / numBounces);
      const newVx = velocity.x * (1 - vxCoef) * (1 - itemWeight);
      const newVy = velocity.y * (1 - vyCoef);

      // Update velocity with the new velocity depending on item roundness
      velocity.r = itemRoundness * velocity.r + (1 - itemRoundness) * newVr;
      velocity.x = itemRoundness * velocity.x + (1 - itemRoundness) * newVx;
      velocity.y = itemBounciness * (itemRoundness * velocity.y + (1 - itemRoundness) * newVy);

      // If 4th bounce, go to end phase
      if (numBounces === 4) {
        endPhase = true;
        // Reduce shadow alpha to avoid flickering effect
        shadowContainer.alpha = Math.min(0.4, shadowContainer.alpha);
        // Store shadow current alpha
        endShadowAlpha = shadowContainer.alpha;
        // Set zIndex to back
        itemContainer.zIndex = 1;
        shadowContainer.zIndex = 1;
        // Fade out the shadow
        Tweener.add({
          target: shadowContainer,
          duration: 0.35 / speed.current,
          ease: Easing.linear,
        }, {
          alpha: 0,
        }).then(() => {
          // Wait a bit
          setTimeout(() => {
            // Fade out the item
            Tweener.add({
              target: itemContainer,
              duration: 1.2 / speed.current,
              ease: Easing.linear,
            }, {
              alpha: 0,
            }).then(() => {
              // Remove update from ticker
              app.ticker.remove(update);
              // Remove containers from stage
              app.stage.removeChild(shadowContainer, itemContainer);
            }).catch(console.error);
          }, 250 / speed.current);
        }).catch(console.error);
      }
    }

    if (endPhase) {
      // Get the progress of the end phase
      const progress = Math.min(1, (endShadowAlpha - shadowContainer.alpha) / endShadowAlpha);
      // Change the item scale to make a minimal 3d effect
      const finalScale = Math.min(
        0.8 + 0.2 * (Math.min(
          Math.abs(itemSprite.angle - 90),
          Math.abs(itemSprite.angle - 270)
        ) / 90),
        itemRoundness > 0.6 ? 0.85 : 1
      );
      itemContainer.scale.y = 1 + (finalScale - 1) * progress;
      shadowContainer.scale.y = 1 + (finalScale - 1) * progress;
      // Move the shadow behind the item
      shadowContainer.y = itemContainer.y * progress + shadowContainer.y * (1 - progress);
      // Slow down
      itemSpeed = 1 - progress;
      shadowSprite.angle = itemSprite.angle;
      // Fade in the item shadow
      shadowFilter.alpha = progress * 0.25;
    }

    // Add gravity at the end of the update process
    velocity.y += deltaTime * gravity;
    // If item goes off the screen
    if (itemContainer.x - itemSprite.width > app.screen.width
      || itemContainer.x + itemSprite.width < 0
      || (levitate && itemContainer.y - itemSprite.height * 2 < 0)) {
      // Remove update from ticker
      app.ticker.remove(update);
      // Remove containers from stage
      app.stage.removeChild(shadowContainer, itemContainer);
    }
  };

  // Add update to ticker
  app.ticker.add(update);
};

export default itemDrop;
