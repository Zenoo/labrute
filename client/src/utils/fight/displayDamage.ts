import { Application, Text } from 'pixi.js';
import { AnimationFighter } from './findFighter';
import insideXBounds from './insideXBounds';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import { BossName } from '@labrute/prisma';

const displayDamage = (
  app: Application,
  target: AnimationFighter,
  damage: number,
  speed: React.MutableRefObject<number>,
) => {
  // Display floating and fading damage text
  const damageText = new Text(`-${damage}`, {
    fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
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
};

export default displayDamage;