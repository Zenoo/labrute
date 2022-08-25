/* eslint-disable no-param-reassign */
import { AnimatedSprite, Application } from 'pixi.js';
import { AnimationFighter } from './findFighter.js';
import { Animation } from '@eternaltwin/labrute-core/types';
import setupSprite from './setupSprite.js';

const getSprite = (
  app: Application,
  type: string,
  fighter: AnimationFighter,
  animation: Animation,
) => {
  // Get sprite
  const newAnimation = setupSprite(
    app,
    type,
    animation,
    fighter.team,
  );

  if (!newAnimation) {
    throw new Error(`New animation not found: ${animation}`);
  }

  // Set new animation position to the current position
  newAnimation.x = fighter.currentAnimation.x;
  newAnimation.y = fighter.currentAnimation.y;

  // Set old animation to invisible
  fighter.currentAnimation.visible = false;

  // Update current animation
  fighter.currentAnimation = newAnimation;

  // Set new animation to visible
  newAnimation.visible = true;

  // Set inverted
  newAnimation.scale.x = fighter.team === 'left' ? 1 : -1;

  // Play new animation
  if ((newAnimation as AnimatedSprite).play) {
    (newAnimation as AnimatedSprite).play();
  }
};

const changeAnimation = (
  app: Application,
  fighter: AnimationFighter,
  animation: Animation,
) => {
  // Cancel previous animation changes
  if ((fighter.currentAnimation as AnimatedSprite).play) {
    (fighter.currentAnimation as AnimatedSprite).off('complete');
  }

  // Get fighter type
  const type = fighter.type === 'pet'
    ? fighter.name.startsWith('dog')
      ? 'dog'
      : fighter.name === 'bear'
        ? 'bear'
        : 'panther'
    : fighter.data?.gender === 'male'
      ? 'male-brute'
      : 'female-brute';

  // Handle iddle differently for monks
  if (animation === 'iddle' && fighter.skills && fighter.skills.includes('monk')) {
    // Load the animation start
    getSprite(app, type, fighter, 'monk-start');

    // Wait for animation to end
    (fighter.currentAnimation as AnimatedSprite).onComplete = () => {
      if (fighter.currentAnimation.name === 'monk-start') {
        // Load the animation loop
        getSprite(app, type, fighter, 'monk-loop');
      }
    };
  } else {
    getSprite(app, type, fighter, animation);
  }
};

export default changeAnimation;