/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import { Fighter, FightStep } from '@labrute/core';
import { Fight } from '@labrute/prisma';
import { Theme } from '@mui/material';
import { GlowFilter } from '@pixi/filter-glow';
import { OutlineFilter } from '@pixi/filter-outline';
import { Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import { AnimatedSprite } from 'pixi.js';
import arrive from './arrive';
import attemptHit from './attemptHit';
import block from './block';
import bomb from './bomb';
import death from './death';
import disarm from './disarm';
import eat from './eat';
import end from './end';
import equip from './equip';
import evade from './evade';
import { AnimationFighter } from './findFighter';
import heal from './heal';
import hit from './hit';
import hypnotise from './hypnotise';
import leave from './leave';
import moveBack from './moveBack';
import moveTo from './moveTo';
import resist from './resist';
import sabotage from './sabotage';
import saboteur from './saboteur';
import setupSprite from './setupSprite';
import skillActivate from './skillActivate';
import skillExpire from './skillExpire';
import steal from './steal';
import survive from './survive';
import throwWeapon from './throwWeapon';
import trap from './trap';
import trash from './trash';
import updateWeapons from './updateWeapons';
import { sound } from '@pixi/sound';

const setupFight: (
  theme: Theme,
  fight: Fight,
  app: PIXI.Application,
  speed: React.MutableRefObject<number>,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
) => PIXI.Loader.OnCompleteSignal = (
  theme,
  fight,
  app,
  speed,
  setCompleted,
) => async (
  loader,
  resources,
) => {
  if (!loader) {
    return;
  }

  // Spritesheet
  const { '/images/game/misc.json': { spritesheet: miscSheet } } = resources;

  if (!miscSheet) {
    throw new Error('Misc spritesheet not found');
  }

  const fightFighters = fight.fighters as unknown as Fighter[];

  const brute1 = fightFighters.find((fighter) => !fighter.master
    && fighter.id === fight.brute1Id);
  const brute2 = fightFighters.find((fighter) => !fighter.master
    && fighter.id === fight.brute2Id);

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
  const brute1Name = new PIXI.Text(brute1.name.toLocaleUpperCase(), {
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
  brute1HpBar.name = `${brute1.name}.hp`;
  app.stage.addChild(brute1HpBar);

  // First brute phantom HP bar
  const brute1PhantomHpBar = new PIXI.Graphics();
  brute1PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  brute1PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute1PhantomHpBar.x = 7;
  brute1PhantomHpBar.y = 21;
  brute1PhantomHpBar.zIndex = 102;
  brute1HpBar.name = `${brute1.name}.hp-phantom`;
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
  const brute2Name = new PIXI.Text(brute2.name.toLocaleUpperCase(), {
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
  brute1HpBar.name = `${brute2.name}.hp`;
  app.stage.addChild(brute2HpBar);

  // Second brute phantom HP bar
  const brute2PhantomHpBar = new PIXI.Graphics();
  brute2PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  brute2PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute2PhantomHpBar.scale.x = -1;
  brute2PhantomHpBar.x = app.screen.width - 7;
  brute2PhantomHpBar.y = 21;
  brute2PhantomHpBar.zIndex = 102;
  brute1HpBar.name = `${brute2.name}.hp-phantom`;
  app.stage.addChild(brute2PhantomHpBar);

  // Set stage as sortable
  app.stage.sortableChildren = true;

  // Set amnimation to 30 FPS
  app.ticker.speed = 0.5;

  // Set background music
  await sound.play('background', { loop: true });

  // Get fighters animations
  const fighters: AnimationFighter[] = fightFighters.map((fighter) => {
    const type = fighter.type === 'pet'
      ? fighter.name.startsWith('dog')
        ? 'dog'
        : fighter.name === 'bear'
          ? 'bear'
          : 'panther'
      : fighter.name;

    const team = (fighter.master || fighter.id) === brute1.id ? 'left' : 'right';

    const arriveStartAnimation = setupSprite(app, fighter, 'arrive-start', team, speed);

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
        : fighter.id === brute1.id ? brute1HpBar : brute2HpBar,
      hpBarPhantom: fighter.master
        ? undefined
        : fighter.id === brute1.id ? brute1PhantomHpBar : brute2PhantomHpBar,
      weaponsIllustrations: [],
      activeEffects: [],
    };

    // Update brute weapons
    if (!fighter.master) {
      updateWeapons(app, animationFighter);
    }

    return animationFighter;
  });

  // Initialize tweener
  Tweener.init(app.ticker);

  let currentSpeed = speed.current;
  app.ticker.add(() => {
    // Update zIndex on all fighters
    fighters.forEach((fighter) => {
      fighter.currentAnimation.zIndex = fighter.currentAnimation.y;
    });

    // Update speed if needed
    if (currentSpeed !== speed.current) {
      fighters.forEach((fighter) => {
        if ((fighter.currentAnimation as AnimatedSprite).play) {
          (fighter.currentAnimation as AnimatedSprite).animationSpeed = speed.current;
        }
      });
      currentSpeed = speed.current;
    }
  });

  // Loop on steps
  const steps = fight.steps as unknown as FightStep[];
  for (let i = 0; i < steps.length; i++) {
    const { [i]: step } = steps;

    switch (step.action) {
      case 'moveTo': {
        await moveTo(app, fighters, step, speed);
        break;
      }
      case 'moveBack': {
        await moveBack(app, fighters, step, speed);
        break;
      }
      case 'arrive': {
        await arrive(app, fighters, step, speed);
        break;
      }
      case 'leave': {
        await leave(app, fighters, step, speed);
        break;
      }
      case 'attemptHit': {
        attemptHit(app, fighters, step, speed);
        break;
      }
      case 'hit':
      case 'hammer':
      case 'flashFlood':
      case 'poison': {
        await hit(app, fighters, step, speed);
        break;
      }
      case 'death': {
        death(app, fighters, step, speed);
        break;
      }
      case 'evade': {
        await evade(app, fighters, step, speed);
        break;
      }
      case 'saboteur': {
        await saboteur(app, fighters, step, speed);
        break;
      }
      case 'disarm': {
        disarm(app, fighters, step);
        break;
      }
      case 'steal': {
        await steal(app, fighters, step, speed);
        break;
      }
      case 'throw': {
        await throwWeapon(app, fighters, step, speed);
        break;
      }
      case 'trash': {
        await trash(app, fighters, step, speed);
        break;
      }
      case 'eat': {
        await eat(app, fighters, step, speed);
        break;
      }
      case 'heal': {
        await heal(app, fighters, step, speed);
        break;
      }
      case 'survive': {
        survive(app, fighters, step, speed);
        break;
      }
      case 'trap': {
        await trap(app, fighters, step, speed);
        break;
      }
      case 'block': {
        await block(app, fighters, step, speed);
        break;
      }
      case 'skillActivate': {
        await skillActivate(app, fighters, step, speed);
        break;
      }
      case 'skillExpire': {
        skillExpire(app, fighters, step);
        break;
      }
      case 'end': {
        end(app, fighters, step, speed);
        break;
      }
      case 'hypnotise': {
        await hypnotise(app, fighters, step, speed);
        break;
      }
      case 'equip': {
        await equip(app, fighters, step, speed);
        break;
      }
      case 'sabotage': {
        sabotage(app, fighters, step);
        break;
      }
      case 'resist': {
        resist(app, fighters, step);
        break;
      }
      case 'bomb': {
        await bomb(app, fighters, step, speed);
        break;
      }
      case 'counter':
      case 'break': {
        // Do nothing for now
        break;
      }
      default:
        console.error('Unknown step', step);
        break;
    }
  }

  setCompleted(true);
  void sound.play('win');
};

export default setupFight;