/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import { Fight } from '@eternaltwin/labrute-core/types';
import { Theme } from '@mui/material';
import { GlowFilter } from '@pixi/filter-glow';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import arrive from './arrive.js';
import attemptHit from './attemptHit.js';
import death from './death.js';
import end from './end.js';
import equip from './equip.js';
import evade from './evade.js';
import { AnimationFighter } from './findFighter.js';
import hit from './hit.js';
import hypnotise from './hypnotise.js';
import moveBack from './moveBack.js';
import moveTo from './moveTo.js';
import setupSprite from './setupSprite.js';
import trap from './trap.js';
import trash from './trash.js';
import updateWeapons from './updateWeapons.js';

const setupFight: (
  theme: Theme,
  fight: Fight,
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
  const { '/images/game/misc.json': { spritesheet: miscSheet } } = resources;

  if (!miscSheet) {
    throw new Error('Misc scpritesheet not found');
  }

  const brute1 = fight.data.fighters.find((fighter) => !fighter.master
    && fighter.name === fight.brute_1);
  const brute2 = fight.data.fighters.find((fighter) => !fighter.master
    && fighter.name === fight.brute_2);

  if (!brute1 || !brute2) {
    throw new Error('Brute not found');
  }

  // Add background
  const background = new PIXI.Sprite(miscSheet.textures['background/1.jpg']);
  background.zIndex = -1;
  app.stage.addChild(background);

  // Add 2px border
  const border = new PIXI.Graphics();
  border.lineStyle(2, PIXI.utils.string2hex(theme.palette.secondary.main));
  border.drawRect(0, 0, app.screen.width, app.screen.height);
  border.zIndex = 102;
  app.stage.addChild(border);

  // Add headers

  // First brute header
  const brute1Header = new PIXI.Sprite(miscSheet.textures['header.png']);
  brute1Header.filters = [new OutlineFilter()];
  brute1Header.x = 4;
  brute1Header.y = 10;
  brute1Header.zIndex = 101;
  app.stage.addChild(brute1Header);

  // First brute name
  const brute1Name = new PIXI.Text(fight.brute_1.toLocaleUpperCase(), {
    fontFamily: 'Poplar', fontSize: 20, fill: 0xffffff
  });
  brute1Name.filters = [new OutlineFilter()];
  brute1Name.x = 4;
  brute1Name.y = 0;
  brute1Name.zIndex = 102;
  app.stage.addChild(brute1Name);

  // First brute HP bar
  const brute1HpBar = new PIXI.Graphics();
  brute1HpBar.beginFill(PIXI.utils.string2hex(theme.palette.hpBar.main));
  brute1HpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute1HpBar.filters = [new GlowFilter({
    distance: 6,
    innerStrength: 2,
    outerStrength: 0,
    color: PIXI.utils.string2hex(theme.palette.hpBar.dark),
  })];
  brute1HpBar.x = 7;
  brute1HpBar.y = 21;
  brute1HpBar.zIndex = 103;
  brute1HpBar.name = `${fight.brute_1}.hp`;
  app.stage.addChild(brute1HpBar);

  // First brute phantom HP bar
  const brute1PhantomHpBar = new PIXI.Graphics();
  brute1PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  brute1PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute1PhantomHpBar.x = 7;
  brute1PhantomHpBar.y = 21;
  brute1PhantomHpBar.zIndex = 102;
  brute1HpBar.name = `${fight.brute_1}.hp-phantom`;
  app.stage.addChild(brute1PhantomHpBar);

  // Second brute header
  const brute2Header = new PIXI.Sprite(miscSheet.textures['header.png']);
  brute2Header.filters = [new OutlineFilter()];
  brute2Header.scale.x = -1;
  brute2Header.x = app.screen.width - 4;
  brute2Header.y = 10;
  brute2Header.zIndex = 101;
  app.stage.addChild(brute2Header);

  // Second brute name
  const brute2Name = new PIXI.Text(fight.brute_2.toLocaleUpperCase(), {
    fontFamily: 'Poplar', fontSize: 20, fill: 0xffffff, align: 'right'
  });
  brute2Name.anchor.x = 1;
  brute2Name.filters = [new OutlineFilter()];
  brute2Name.x = app.screen.width - 4;
  brute2Name.y = 0;
  brute2Name.zIndex = 102;
  app.stage.addChild(brute2Name);

  // Second brute HP bar
  const brute2HpBar = new PIXI.Graphics();
  brute2HpBar.beginFill(PIXI.utils.string2hex(theme.palette.hpBar.main));
  brute2HpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute2HpBar.filters = [new GlowFilter({
    distance: 6,
    innerStrength: 2,
    outerStrength: 0,
    color: PIXI.utils.string2hex(theme.palette.hpBar.dark),
  })];
  brute2HpBar.scale.x = -1;
  brute2HpBar.x = app.screen.width - 7;
  brute2HpBar.y = 21;
  brute2HpBar.zIndex = 103;
  brute1HpBar.name = `${fight.brute_2}.hp`;
  app.stage.addChild(brute2HpBar);

  // Second brute phantom HP bar
  const brute2PhantomHpBar = new PIXI.Graphics();
  brute2PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  brute2PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute2PhantomHpBar.scale.x = -1;
  brute2PhantomHpBar.x = app.screen.width - 7;
  brute2PhantomHpBar.y = 21;
  brute2PhantomHpBar.zIndex = 102;
  brute1HpBar.name = `${fight.brute_2}.hp-phantom`;
  app.stage.addChild(brute2PhantomHpBar);

  // Set stage as sortable
  app.stage.sortableChildren = true;

  // Set amnimation to 30 FPS
  app.ticker.speed = 0.5;

  // Get fighters animations
  const fighters: AnimationFighter[] = fight.data.fighters.map((fighter) => {
    const type = fighter.type === 'pet'
      ? fighter.name.startsWith('dog')
        ? 'dog'
        : fighter.name === 'bear'
          ? 'bear'
          : 'panther'
      : fighter.data?.gender === 'male'
        ? 'male-brute'
        : 'female-brute';

    const team = (fighter.master || fighter.name) === fight.brute_1 ? 'left' : 'right';

    const arriveStartAnimation = setupSprite(app, type, 'arrive-start', team);

    if (!arriveStartAnimation) {
      throw new Error(`Arrive start animation not found: ${type}`);
    }

    const animationFighter: AnimationFighter = {
      ...fighter,
      team,
      currentAnimation: arriveStartAnimation,
      activeWeapon: null,
      hpBar: fighter.master
        ? undefined
        : fighter.name === fight.brute_1 ? brute1HpBar : brute2HpBar,
      hpBarPhantom: fighter.master
        ? undefined
        : fighter.name === fight.brute_1 ? brute1PhantomHpBar : brute2PhantomHpBar,
      weaponsIllustrations: [],
    };

    // Update brute weapons
    if (!fighter.master) {
      updateWeapons(app, animationFighter);
    }

    return animationFighter;
  });

  // Initialize tweener
  Tweener.init(app.ticker);

  app.ticker.add(() => {
    // Update zIndex on all fighters
    fighters.forEach((fighter) => {
      fighter.currentAnimation.zIndex = fighter.currentAnimation.y;
    });
  });

  // Loop on steps
  for (let i = 0; i < fight.data.steps.length; i++) {
    const { data: { steps: { [i]: step } } } = fight;

    switch (step.action) {
      case 'moveTo': {
        await moveTo(app, fighters, step);
        break;
      }
      case 'moveBack': {
        await moveBack(app, fighters, step);
        break;
      }
      case 'arrive': {
        await arrive(app, fighters, step);
        break;
      }
      // case 'leave': {
      //   leave(setFighters, step);
      //   break;
      // }
      case 'attemptHit': {
        attemptHit(app, fighters, step);
        break;
      }
      case 'hit':
      case 'hammer':
      case 'flashFlood':
      case 'poison': {
        await hit(app, fighters, step);
        break;
      }
      case 'death': {
        death(app, fighters, step);
        break;
      }
      case 'evade': {
        await evade(app, fighters, step);
        break;
      }
      // case 'saboteur': {
      //   saboteur(setFighters, step);
      //   break;
      // }
      // case 'disarm': {
      //   disarm(setFighters, step);
      //   break;
      // }
      // case 'steal': {
      //   steal(setFighters, step);
      //   break;
      // }
      // case 'throw': {
      //   throwWeapon(setFighters, step);
      //   break;
      // }
      case 'trash': {
        await trash(app, fighters, step);
        break;
      }
      // case 'eat': {
      //   eat(setFighters, step);
      //   break;
      // }
      // case 'heal': {
      //   heal(setFighters, step);
      //   break;
      // }
      // case 'survive': {
      //   survive(setFighters, step);
      //   break;
      // }
      case 'trap': {
        await trap(app, fighters, step);
        break;
      }
      // case 'block': {
      //   block(setFighters, step);
      //   break;
      // }
      // case 'skillActivate': {
      //   skillActivate(setFighters, step);
      //   break;
      // }
      case 'end': {
        end(app, fighters, step);
        break;
      }
      case 'hypnotise': {
        await hypnotise(app, fighters, step);
        break;
      }
      case 'equip': {
        await equip(app, fighters, step);
        break;
      }
      case 'counter': {
        // Do nothing for now
        break;
      }
      default:
        console.log('Unknown action', step.action);
        break;
    }
  }
};

export default setupFight;