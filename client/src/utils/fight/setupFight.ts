import { Fight } from '@eternaltwin/labrute-core/types';
import { Theme } from '@mui/material';
import { Easing, Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';

const setupFight: (
  theme: Theme,
  fight: Fight | null,
  app: PIXI.Application
) => PIXI.Loader.OnCompleteSignal = (
  theme,
  fight,
  app,
) => async (
  loader,
  resources,
) => {
  // Spritesheet
  const { '/images/game/sprites-0.json': { spritesheet } } = resources;

  if (!spritesheet) {
    throw new Error('Spritesheet not found');
  }

  // Add background
  const background = new PIXI.Sprite(spritesheet.textures['background/1.jpg']);
  background.zIndex = -1;
  app.stage.addChild(background);

  // Add 2px border
  const border = new PIXI.Graphics();
  border.lineStyle(2, PIXI.utils.string2hex(theme.palette.secondary.main));
  border.drawRect(0, 0, app.screen.width, app.screen.height);
  app.stage.addChild(border);

  // Get fighters animations
  // TODO

  const bear = {
    iddle: new PIXI.AnimatedSprite(spritesheet.animations['bear-death']),
  };

  // Setup the position of the bear
  bear.iddle.x = app.renderer.width / 2;
  bear.iddle.y = app.renderer.height / 2;

  // Rotate around the center
  bear.iddle.anchor.x = 0.5;
  bear.iddle.anchor.y = 0.5;

  // Add the bear to the scene
  app.stage.addChild(bear.iddle);

  // Play the bear iddle animation
  bear.iddle.play();

  Tweener.init(app.ticker);

  await Tweener.add({
    target: bear.iddle,
    duration: 3,
    ease: Easing.linear
  }, { x: 100 });
};

export default setupFight;