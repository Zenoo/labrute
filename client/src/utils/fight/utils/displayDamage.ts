import { BossName } from '@labrute/prisma';
import { OutlineFilter } from 'pixi-filters/outline';
import { Application, Text } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import { insideXBounds } from './insideXBounds';
import { tween } from './tween';

export const displayDamage = ({
  app,
  target,
  damage,
  criticalHit,
  speed,
}: {
  app: Application;
  target: AnimationFighter;
  damage: number;
  criticalHit?: 1 | 0;
  speed: React.MutableRefObject<number>;
}) => {
  // Display floating and fading damage text
  const damageText = new Text({
    text: `-${damage}`,
    style: {
      fontFamily: 'GameFont',
      fontSize: criticalHit ? 30 : 20,
      fill: criticalHit ? 0xff0000 : 0xffffff,
    }
  });
  damageText.anchor.set(0.5);
  damageText.zIndex = 1000;
  damageText.filters = [new OutlineFilter()];

  damageText.x = insideXBounds(target.animation.container.x);

  // Custom height for bosses
  if (target.type === 'boss') {
    if (target.name === BossName.GoldClaw) {
      damageText.y = target.animation.container.y - 100;
    } else {
      damageText.y = target.animation.container.y - 50;
    }
  } else {
    damageText.y = target.animation.container.y - target.animation.container.height;
  }

  app.stage.addChild(damageText);

  tween(damageText, {
    duration: 2 / speed.current,
    ease: 'none',
    y: damageText.y - 100,
    alpha: 0,
  }).then(() => {
    // Remove text
    damageText.destroy();
  }).catch(console.error);
};
