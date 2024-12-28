import { Easing, Tweener } from 'pixi-tweener';
import { Container, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';
import { getRealKnockBack } from './utils/knockBack';

const staggerObject = async (
  object: Container | Sprite,
  team: 'L' | 'R',
  speed: React.MutableRefObject<number>,
  // StaggerObject has an intergrated knockBack fonctionnality
  // It doesn't use the knockBack module as the two are x translations
  // and can't be played simultaneously
  knockBack: number = 0,
  duration: number = 0.5,
) => {
  await Tweener.add({
    target: object,
    duration: (duration * 0.1) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.1 + (team === 'L' ? -8 : 8) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.1) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.1 + (team === 'L' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.1) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.1 + (team === 'L' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.1) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.1 + (team === 'L' ? 4 : -4) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.2) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.2 + (team === 'L' ? -4 : 4) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.2) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.2 + (team === 'L' ? 8 : -8) });

  await Tweener.add({
    target: object,
    duration: (duration * 0.2) / speed.current,
    ease: Easing.linear
  }, { x: object.x + knockBack * 0.2 });
};

const stagger = async (
  fighter: AnimationFighter,
  speed: React.MutableRefObject<number>,
  unsignedKnockBack: number = 0,
  duration: number = 0.5,
) => {
  const staggers = [];

  // Sign and clamp knockBack value
  const knockBack = getRealKnockBack(fighter, unsignedKnockBack);

  // Stagger animation
  staggers.push(
    staggerObject(fighter.animation.container, fighter.team, speed, knockBack, duration)
  );

  // Stagger bust
  if (fighter.bust && fighter.HUDFocused) {
    staggers.push(staggerObject(fighter.bust, fighter.team, speed, 0, duration));
  }

  await Promise.all(staggers);

  if (fighter.bust && fighter.HUDFocused) {
    // Reposition bust because it can move in case of unawaited multiple staggers (flashflood)
    // eslint-disable-next-line no-param-reassign
    fighter.bust.x = fighter.team === 'L' ? 52 : 450;
  }
};

export default stagger;
