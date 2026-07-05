import { Container, Sprite } from 'pixi.js';
import { AnimationFighter } from './utils/findFighter';
import { getRealKnockBack } from './utils/knockBack';
import { tween } from './utils/tween';

const staggerObject = async (
  object: Container | Sprite,
  _team: 'L' | 'R',
  speed: React.RefObject<number>,
  // StaggerObject has an intergrated knockBack fonctionnality
  // It doesn't use the knockBack module as the two are x translations
  // and can't be played simultaneously
  knockBack: number = 0,
  duration: number = 0.5,
) => {
  const deltas = [
    knockBack * 0.1 + 8,
    knockBack * 0.1 + -4,
    knockBack * 0.1 + 4,
    knockBack * 0.1 + -4,
    knockBack * 0.2 + 4,
    knockBack * 0.2 + -8,
    knockBack * 0.2,
  ];
  const segments = [0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2];

  const baseX = object.x;
  const keyframes: { x: number; duration: number }[] = [];
  let currentX = baseX;

  for (let i = 0; i < deltas.length; i++) {
    const delta = deltas[i] ?? 0;
    const segment = segments[i] ?? 0;
    currentX += delta;
    keyframes.push({
      x: currentX,
      duration: (duration * segment) / speed.current,
    });
  }

  await tween(object, {
    ease: 'none',
    keyframes,
  });
};

export const stagger = async (
  fighter: AnimationFighter,
  speed: React.RefObject<number>,
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
    fighter.bust.x = 0;
  }
};
