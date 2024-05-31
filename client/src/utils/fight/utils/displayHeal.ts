import { Application, Text } from 'pixi.js';
import insideXBounds from './insideXBounds';
import { AnimationFighter } from './findFighter';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';

export const displayHeal = (
  app: Application,
  fighter: AnimationFighter,
  amount: number,
  speed: React.MutableRefObject<number>,
) => {
  // Display floating and fading green heal text
  const healText = new Text(`+${amount}`, {
    fontFamily: 'GameFont', fontSize: 20, fill: 0x00ff00,
  });
  healText.anchor.set(0.5);
  healText.x = insideXBounds(fighter.animation.container.x);
  healText.y = fighter.animation.container.y - fighter.animation.container.height;
  healText.zIndex = 1000;
  healText.filters = [new OutlineFilter()];
  app.stage.addChild(healText);

  Tweener.add({
    target: healText,
    duration: 2 / speed.current,
  }, {
    y: healText.y - 100,
    alpha: 0,
  }).then(() => {
    // Remove text
    healText.destroy();
  }).catch(console.error);
};
