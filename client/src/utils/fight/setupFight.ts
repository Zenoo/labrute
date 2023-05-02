/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import { Fighter, FightStep, randomBetween } from '@labrute/core';
import { Fight } from '@labrute/prisma';
import { Theme } from '@mui/material';
import { GlowFilter } from '@pixi/filter-glow';
import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { Easing, Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import { AnimatedSprite } from 'pixi.js';
import arrive from './arrive';
import attemptHit from './attemptHit';
import block from './block';
import bomb from './bomb';
import breakShield from './break';
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
import updateWeapons, { updateActiveWeapon } from './updateWeapons';
import hammer from './hammer';
import flashFlood from './flashFlood';
import { TFunction } from 'i18next';
import { ColorOverlayFilter } from '@pixi/filter-color-overlay';

const backgrounds = [
  'background/1.jpg',
  'background/2.jpg',
  'background/3.png',
  'background/4.png',
  'background/5.png',
  'background/6.png',
  'background/7.png',
  'background/8.png',
  'background/9.png',
  'background/10.png',
  'background/11.png',
  'background/12.png',
  'background/13.png',
];

const setupFight: (
  theme: Theme,
  fight: Fight,
  app: PIXI.Application,
  speed: React.MutableRefObject<number>,
  setCompleted: React.Dispatch<React.SetStateAction<boolean>>,
  t: TFunction,
  showTooltip: (brute: Fighter) => void,
  hideTooltip: () => void,
) => PIXI.Loader.OnCompleteSignal = (
  theme,
  fight,
  app,
  speed,
  setCompleted,
  t,
  showTooltip,
  hideTooltip,
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
  const background = new PIXI.Sprite(miscSheet.textures[
    backgrounds[randomBetween(0, backgrounds.length - 1)]
  ]);
  background.zIndex = -1;

  // Fill screen
  background.width = app.screen.width;
  background.height = app.screen.height;

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

  // Add tooltip on hover
  brute1Header.interactive = true;
  brute1Header.hitArea = new PIXI.Rectangle(0, 20, 50, 50);
  brute1Header.addListener('mouseover', () => {
    showTooltip(brute1);
  });
  brute1Header.addListener('mouseout', () => {
    hideTooltip();
  });
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

  // Add tooltip on hover
  brute2Header.interactive = true;
  brute2Header.hitArea = new PIXI.Rectangle(0, 20, 50, 50);
  brute2Header.on('mouseover', () => {
    showTooltip(brute2);
  });
  brute2Header.on('mouseout', () => {
    hideTooltip();
  });

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

    // Initialize fighter container
    const container = new PIXI.Container();
    container.sortableChildren = true;

    // Set position
    container.x = team === 'left' ? -100 : 600;
    container.y = 150;

    // Set inverted
    container.scale.x = team === 'left' ? 1 : -1;

    // Add to stage
    app.stage.addChild(container);
    container.addChild(arriveStartAnimation);

    const animationFighter: AnimationFighter = {
      ...fighter,
      team,
      container,
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
      shieldIllustration: null,
    };

    // Update brute weapons
    if (!fighter.master) {
      updateWeapons(app, animationFighter);
      updateActiveWeapon(app, animationFighter, null);
    }

    return animationFighter;
  });

  // Initialize tweener
  Tweener.init(app.ticker);

  let currentSpeed = speed.current;
  app.ticker.add(() => {
    fighters.forEach((fighter) => {
      if (!fighter.container) return;

      // Update zIndex on all fighters
      fighter.container.zIndex = fighter.container.y;
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
      case 'poison': {
        await hit(app, fighters, step, speed);
        break;
      }
      case 'flashFlood': {
        await flashFlood(app, fighters, step, speed);
        break;
      }
      case 'hammer': {
        await hammer(app, fighters, step, speed);
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
        disarm(app, fighters, step, speed);
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
        await skillExpire(app, fighters, step, speed);
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
      case 'break': {
        breakShield(app, fighters, step);
        break;
      }
      case 'counter': {
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

  // Get winner fighter
  const winner = fighters.find((fighter) => fighter.type === 'brute' && fighter.name === fight.winner);

  // Get loser fighter
  const loser = fighters.find((fighter) => !fighter.master && fighter.type === 'brute' && fighter.name !== fight.winner);

  // Display dead icon animation on the UI
  const deadIcon = new AnimatedSprite(miscSheet.animations.dead);
  deadIcon.filters = [new OutlineFilter()];
  deadIcon.loop = false;
  deadIcon.animationSpeed = 0.5;
  deadIcon.zIndex = 1000;
  if (loser?.team === 'right') {
    deadIcon.scale.x = -1;
    deadIcon.x = brute2Header.x + 32;
    deadIcon.y = brute2Header.y - 13;
  } else {
    deadIcon.x = brute1Header.x - 32;
    deadIcon.y = brute1Header.y - 13;
  }
  app.stage.addChild(deadIcon);
  deadIcon.play();

  // Display win message at the bottom
  const winMessage = new PIXI.Text(t('fight.wonTheFight', { brute: fight.winner }).toLocaleUpperCase(), {
    fontFamily: 'Poplar',
    fontSize: 30,
    fill: 0xffffff,
    align: 'center',
  });
  winMessage.filters = [new OutlineFilter()];
  winMessage.x = app.screen.width / 2;
  winMessage.y = app.screen.height - 20;
  winMessage.anchor.set(0.5, 0.5);
  winMessage.height = 0;
  winMessage.zIndex = 900;
  app.stage.addChild(winMessage);

  // Animate win message
  Tweener.add({
    target: winMessage,
    duration: 2 / speed.current,
    ease: Easing.bounce,
  }, {
    height: 30,
  }).catch(console.error);

  // Make 50 petals fall on the winner
  for (let i = 0; i < 50; i++) {
    const petal = new PIXI.AnimatedSprite(miscSheet.animations.petals);
    petal.filters = [new ColorOverlayFilter(
      // Random color
      Math.random() * 0xffffff,
      0.5,
    )];

    // Random horizontal position around the winner
    petal.x = (winner?.container.x || 0) - 75 + Math.random() * 150;
    petal.y = 0;
    petal.width = 10;
    petal.height = 10;

    // Random animation speed
    petal.animationSpeed = 0.1 + Math.random() * 0.5;

    petal.zIndex = 0;
    petal.play();
    app.stage.addChild(petal);

    // Animate petal
    Tweener.add({
      target: petal,
      duration: (2 + Math.random() * 4) / speed.current,
      ease: Easing.linear,
    }, {
      y: app.screen.height - 10 - Math.random() * 100,
    }).then(() => {
      // Stop animation
      petal.stop();
    }).catch(console.error);
  }
};

export default setupFight;