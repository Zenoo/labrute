/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import { Fighter, FightStep, StepType } from '@labrute/core';
import { Fight, Gender } from '@labrute/prisma';
import { Theme } from '@mui/material';
import { ColorOverlayFilter } from '@pixi/filter-color-overlay';
import { GlowFilter } from '@pixi/filter-glow';
import { OutlineFilter } from '@pixi/filter-outline';
import { sound } from '@pixi/sound';
import { TFunction } from 'i18next';
import { Easing, Tweener } from 'pixi-tweener';
import * as PIXI from 'pixi.js';
import { AnimatedSprite, BaseTexture, Texture } from 'pixi.js';
import { RendererContextInterface } from '../../hooks/useRenderer';
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
import FighterHolder from './FighterHolder';
import flashFlood from './flashFlood';
import hammer from './hammer';
import { haste } from './haste';
import heal from './heal';
import hit from './hit';
import hypnotise from './hypnotise';
import leave from './leave';
import moveBack from './moveBack';
import moveTo from './moveTo';
import resist from './resist';
import sabotage from './sabotage';
import saboteur from './saboteur';
import skillActivate from './skillActivate';
import skillExpire from './skillExpire';
import spy from './spy';
import steal from './steal';
import survive from './survive';
import throwWeapon from './throwWeapon';
import trap from './trap';
import trash from './trash';
import { treat } from './treat';
import updateWeapons from './updateWeapons';
import { AnimationFighter } from './utils/findFighter';
import { vampirism } from './vampirism';

const setupFight: (
  theme: Theme,
  fight: Fight,
  app: PIXI.Application,
  speed: React.MutableRefObject<number>,
  t: TFunction,
  toggleTooltip: (brute: Fighter, forceValue?: boolean) => void,
  renderer: RendererContextInterface,
) => PIXI.Loader.OnCompleteSignal = (
  theme,
  fight,
  app,
  speed,
  t,
  toggleTooltip,
  renderer,
) => async (
  loader,
  resources,
) => {
  if (!loader) {
    return;
  }

  // Spritesheet
  const miscSheet = resources['/images/game/misc.json']?.spritesheet;

  if (!miscSheet) {
    throw new Error('Misc spritesheet not found');
  }

  const fightFighters = JSON.parse(fight.fighters) as Fighter[];

  const brute1 = fightFighters.find((fighter) => !fighter.master
    && fighter.id === fight.brute1Id);
  const brute2 = fightFighters.find((fighter) => !fighter.master
    && fighter.id === fight.brute2Id);
  const boss = fightFighters.find((fighter) => fighter.type === 'boss');

  if (!brute1) {
    throw new Error('Brute not found');
  }

  // Add background
  const background = new PIXI.Sprite(miscSheet.textures[`background/${fight.background}`]);
  background.zIndex = -1;

  // Fill screen
  background.width = app.screen.width;
  background.height = app.screen.height;

  app.stage?.addChild(background);

  // Add 2px border
  const border = new PIXI.Graphics();
  border.lineStyle(2, PIXI.utils.string2hex(theme.palette.secondary.main));
  border.drawRect(0, 0, app.screen.width, app.screen.height);
  border.zIndex = 102;
  app.stage?.addChild(border);

  // Add headers

  // First brute header
  const brute1Header = new PIXI.Sprite(miscSheet.textures['header.png']);
  brute1Header.filters = [new OutlineFilter()];
  brute1Header.x = 4;
  brute1Header.y = 10;
  brute1Header.zIndex = 101;

  // Add tooltip on hover
  brute1Header.interactive = true;
  brute1Header.hitArea = new PIXI.Polygon([
    new PIXI.Point(0, 10),
    new PIXI.Point(240, 10),
    new PIXI.Point(240, 20),
    new PIXI.Point(50, 20),
    new PIXI.Point(50, 65),
    new PIXI.Point(0, 65),
  ]);
  brute1Header.addListener('mouseover', () => {
    toggleTooltip(brute1, true);
  });
  brute1Header.addListener('mouseout', () => {
    toggleTooltip(brute1, false);
  });
  brute1Header.on('tap', (e: PIXI.InteractionEvent) => {
    e.stopPropagation();
    toggleTooltip(brute1);
  });
  app.stage?.addChild(brute1Header);

  // First brute name
  const brute1Name = new PIXI.Text(brute1.name.toLocaleUpperCase(), {
    fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
  });
  brute1Name.filters = [new OutlineFilter()];
  brute1Name.x = 4;
  brute1Name.y = 0;
  brute1Name.zIndex = 102;
  app.stage?.addChild(brute1Name);

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
  app.stage?.addChild(brute1HpBar);

  // First brute phantom HP bar
  const brute1PhantomHpBar = new PIXI.Graphics();
  brute1PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  brute1PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  brute1PhantomHpBar.x = 7;
  brute1PhantomHpBar.y = 21;
  brute1PhantomHpBar.zIndex = 102;
  brute1HpBar.name = `${brute1.name}.hp-phantom`;
  app.stage?.addChild(brute1PhantomHpBar);

  // Reset tooltip on tap anywhere
  if (app.stage) {
    app.stage.interactive = true;
  }
  app.stage?.on('tap', () => {
    toggleTooltip(brute1, false);
  });

  // First brute bust
  const brute1BustImg = await new Promise<HTMLImageElement | null>((resolve) => {
    renderer.onRender(brute1.id, (content) => {
      const img = document.createElement('img');
      img.src = content;
      resolve(img);
    });

    renderer.render({
      ...brute1,
      gender: brute1.gender || Gender.male,
      body: brute1.body || '0'.repeat(11),
      colors: brute1.colors || '0'.repeat(32),
    });
  });

  const brute1Bust = new PIXI.Sprite(new Texture(new BaseTexture(brute1BustImg)));
  brute1Bust.x = 52;
  brute1Bust.y = 35;
  brute1Bust.zIndex = 102;
  brute1Bust.scale.y = 0.45;
  brute1Bust.scale.x = -0.45;
  app.stage?.addChild(brute1Bust);

  // Clip bust to fit in the header
  const brute1BustMask = new PIXI.Graphics();
  brute1BustMask.beginFill(0xFFFFFF);
  brute1BustMask.drawRect(0, 0, 100, 88);
  brute1BustMask.endFill();
  brute1Bust.addChild(brute1BustMask);
  brute1Bust.mask = brute1BustMask;

  let brute2Header: PIXI.Sprite | null = null;
  let brute2HpBar: PIXI.Graphics | null = null;
  let brute2PhantomHpBar: PIXI.Graphics | null = null;
  let brute2Bust: PIXI.Sprite | null = null;
  if (brute2) {
    // Second brute header
    brute2Header = new PIXI.Sprite(miscSheet.textures['header.png']);
    brute2Header.filters = [new OutlineFilter()];
    brute2Header.scale.x = -1;
    brute2Header.x = app.screen.width - 4;
    brute2Header.y = 10;
    brute2Header.zIndex = 101;

    // Add tooltip on hover
    brute2Header.interactive = true;
    brute2Header.hitArea = new PIXI.Polygon([
      new PIXI.Point(0, 10),
      new PIXI.Point(240, 10),
      new PIXI.Point(240, 20),
      new PIXI.Point(50, 20),
      new PIXI.Point(50, 65),
      new PIXI.Point(0, 65),
    ]);
    brute2Header.on('mouseover', () => {
      toggleTooltip(brute2, true);
    });
    brute2Header.on('mouseout', () => {
      toggleTooltip(brute2, false);
    });
    brute2Header.on('tap', (e: PIXI.InteractionEvent) => {
      e.stopPropagation();
      toggleTooltip(brute2);
    });

    app.stage?.addChild(brute2Header);

    // Second brute name
    const brute2Name = new PIXI.Text(brute2.name.toLocaleUpperCase(), {
      fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff, align: 'right'
    });
    brute2Name.anchor.x = 1;
    brute2Name.filters = [new OutlineFilter()];
    brute2Name.x = app.screen.width - 4;
    brute2Name.y = 0;
    brute2Name.zIndex = 102;
    app.stage?.addChild(brute2Name);

    // Second brute HP bar
    brute2HpBar = new PIXI.Graphics();
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
    brute2HpBar.name = `${brute2.name}.hp`;
    app.stage?.addChild(brute2HpBar);

    // Second brute phantom HP bar
    brute2PhantomHpBar = new PIXI.Graphics();
    brute2PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
    brute2PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
    brute2PhantomHpBar.scale.x = -1;
    brute2PhantomHpBar.x = app.screen.width - 7;
    brute2PhantomHpBar.y = 21;
    brute2PhantomHpBar.zIndex = 102;
    brute2PhantomHpBar.name = `${brute2.name}.hp-phantom`;
    app.stage?.addChild(brute2PhantomHpBar);

    // First brute bust
    const brute2BustImg = await new Promise<HTMLImageElement | null>((resolve) => {
      renderer.onRender(brute2.id, (content) => {
        const img = document.createElement('img');
        img.src = content;
        resolve(img);
      });

      renderer.render({
        ...brute2,
        gender: brute2.gender || Gender.male,
        body: brute2.body || '0'.repeat(11),
        colors: brute2.colors || '0'.repeat(32),
      });
    });

    brute2Bust = new PIXI.Sprite(new Texture(new BaseTexture(brute2BustImg)));
    brute2Bust.x = 450;
    brute2Bust.y = 35;
    brute2Bust.zIndex = 102;
    brute2Bust.scale.y = 0.45;
    brute2Bust.scale.x = 0.45;
    app.stage?.addChild(brute2Bust);

    // Clip bust to fit in the header
    const brute2BustMask = new PIXI.Graphics();
    brute2BustMask.beginFill(0xFFFFFF);
    brute2BustMask.drawRect(0, 0, 100, 88);
    brute2BustMask.endFill();
    brute2Bust.addChild(brute2BustMask);
    brute2Bust.mask = brute2BustMask;
  }

  let bossHeader: PIXI.Sprite | null = null;
  let bossHpBar: PIXI.Graphics | null = null;
  let bossPhantomHpBar: PIXI.Graphics | null = null;
  if (boss) {
    // boss header
    bossHeader = new PIXI.Sprite(miscSheet.textures['header.png']);
    bossHeader.filters = [new OutlineFilter()];
    bossHeader.scale.x = -1;
    bossHeader.x = app.screen.width - 4;
    bossHeader.y = 10;
    bossHeader.zIndex = 101;

    app.stage?.addChild(bossHeader);

    // Boss name
    const bossName = new PIXI.Text(boss.name.toLocaleUpperCase(), {
      fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff, align: 'right'
    });
    bossName.anchor.x = 1;
    bossName.filters = [new OutlineFilter()];
    bossName.x = app.screen.width - 4;
    bossName.y = 0;
    bossName.zIndex = 102;
    app.stage?.addChild(bossName);

    // Boss HP bar
    bossHpBar = new PIXI.Graphics();
    bossHpBar.beginFill(PIXI.utils.string2hex(theme.palette.hpBar.main));
    bossHpBar.drawRoundedRect(0, 0, (boss.hp / boss.maxHp) * 236, 9, 4);
    bossHpBar.filters = [new GlowFilter({
      distance: 6,
      innerStrength: 2,
      outerStrength: 0,
      color: PIXI.utils.string2hex(theme.palette.hpBar.dark),
    })];
    bossHpBar.scale.x = -1;
    bossHpBar.x = app.screen.width - 7;
    bossHpBar.y = 21;
    bossHpBar.zIndex = 103;
    bossHpBar.name = `${boss.name}.hp`;
    app.stage?.addChild(bossHpBar);

    // Second brute phantom HP bar
    bossPhantomHpBar = new PIXI.Graphics();
    bossPhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
    bossPhantomHpBar.drawRoundedRect(0, 0, (boss.hp / boss.maxHp) * 236, 9, 4);
    bossPhantomHpBar.scale.x = -1;
    bossPhantomHpBar.x = app.screen.width - 7;
    bossPhantomHpBar.y = 21;
    bossPhantomHpBar.zIndex = 102;
    bossPhantomHpBar.name = `${boss.name}.hp-phantom`;
    app.stage?.addChild(bossPhantomHpBar);
  }

  // Set stage as sortable
  if (app.stage) {
    app.stage.sortableChildren = true;
  }

  // Set background music
  await sound.play('background', { loop: true });

  // Get fighters animations
  const fighters: AnimationFighter[] = fightFighters.map((fighter) => {
    const team = fighter.team
      ? fighter.team === 'L' ? 'left' : 'right'
      // Necessary since .team was added later
      : (fighter.master || fighter.id) === brute1.id ? 'left' : 'right';

    const animationFighter: AnimationFighter = {
      ...fighter,
      hpBar: fighter.master
        ? undefined
        : fighter.id === brute1.id ? brute1HpBar : (brute2HpBar || bossHpBar || undefined),
      hpBarPhantom: fighter.master
        ? undefined
        : fighter.id === brute1.id
          ? brute1PhantomHpBar
          : (brute2PhantomHpBar || bossPhantomHpBar || undefined),
      bust: fighter.master
        ? undefined
        : fighter.id === brute1.id ? brute1Bust : (brute2Bust || undefined),
      weaponsIllustrations: [],
      animation: new FighterHolder(
        app,
        fighter,
        team,
        speed
      ),
    };

    // Set position
    animationFighter.animation.container.x = team === 'left' ? -100 : 600;
    animationFighter.animation.container.y = 150;

    // Add to stage
    app.stage?.addChild(animationFighter.animation.container);

    // Update brute weapons
    updateWeapons(app, animationFighter);

    return animationFighter;
  });

  // Wait for all fighters to be loaded
  while (fighters.some((fighter) => !fighter.animation.loaded)) {
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
  }

  // Initialize tweener
  if (app.stage) {
    Tweener.init(app.ticker);
  }

  // Loop on steps
  const steps = JSON.parse(fight.steps) as FightStep[];
  for (let i = 0; i < steps.length; i++) {
    const { [i]: step } = steps;

    if (!step) {
      throw new Error('Step not found');
    }

    switch (step.a) {
      case StepType.Move: {
        await moveTo(app, fighters, step, speed);
        break;
      }
      case StepType.MoveBack: {
        await moveBack(app, fighters, step, speed);
        break;
      }
      case StepType.Arrive: {
        await arrive(app, fighters, step, speed);
        break;
      }
      case StepType.Leave: {
        await leave(app, fighters, step, speed);
        break;
      }
      case StepType.AttemptHit: {
        await attemptHit(app, fighters, step, speed);
        break;
      }
      case StepType.Hit:
      case StepType.Poison: {
        await hit(app, fighters, step, speed);
        break;
      }
      case StepType.FlashFlood: {
        await flashFlood(app, fighters, step, speed);
        break;
      }
      case StepType.Hammer: {
        await hammer(app, fighters, step, speed);
        break;
      }
      case StepType.Death: {
        death(fighters, step);
        break;
      }
      case StepType.Evade: {
        await evade(fighters, step, speed);
        break;
      }
      case StepType.Saboteur: {
        await saboteur(app, fighters, step, speed);
        break;
      }
      case StepType.Disarm: {
        disarm(app, fighters, step, speed);
        break;
      }
      case StepType.Steal: {
        await steal(app, fighters, step, speed);
        break;
      }
      case StepType.Throw: {
        await throwWeapon(app, fighters, step, speed);
        break;
      }
      case StepType.Trash: {
        await trash(app, fighters, step, speed);
        break;
      }
      case StepType.Eat: {
        await eat(app, fighters, step, speed);
        break;
      }
      case StepType.Heal: {
        await heal(app, fighters, step, speed);
        break;
      }
      case StepType.Survive: {
        survive(app, fighters, step, speed);
        break;
      }
      case StepType.Trap: {
        await trap(app, fighters, step, speed);
        break;
      }
      case StepType.Block: {
        await block(app, fighters, step, speed);
        break;
      }
      case StepType.SkillActivate: {
        await skillActivate(app, fighters, step, speed);
        break;
      }
      case StepType.SkillExpire: {
        await skillExpire(app, fighters, step, speed);
        break;
      }
      case StepType.End: {
        end(fighters, step);
        break;
      }
      case StepType.Hypnotise: {
        await hypnotise(app, fighters, step, speed);
        break;
      }
      case StepType.Equip: {
        await equip(app, fighters, step, speed);
        break;
      }
      case StepType.Sabotage: {
        sabotage(app, fighters, step);
        break;
      }
      case StepType.Resist: {
        const nextStep = steps[i + 1];

        if (!nextStep) {
          throw new Error('Next step not found');
        }
        resist(app, fighters, step, nextStep, speed);
        break;
      }
      case StepType.Bomb: {
        await bomb(app, fighters, step, speed);
        break;
      }
      case StepType.Spy: {
        await spy(fighters, step, speed);
        break;
      }
      case StepType.Vampirism: {
        await vampirism(app, fighters, step, speed);
        break;
      }
      case StepType.Haste: {
        await haste(app, fighters, step, speed);
        break;
      }
      case StepType.Treat: {
        await treat(app, fighters, step, speed);
        break;
      }
      case StepType.Counter: {
        // Do nothing for now
        break;
      }
      default:
        console.error('Unknown step', step);
        break;
    }
  }

  void sound.play('win');

  // Get winner fighter
  const winner = fighters.find((fighter) => (fighter.type === 'brute' || fighter.type === 'boss') && fighter.name === fight.winner);

  // Get loser fighter
  const loser = fighters.find((fighter) => !fighter.master && ((fighter.type === 'brute' && fighter.name !== fight.winner) || fighter.type === 'boss'));

  // Display dead icon animation on the UI
  const deadIcon = new AnimatedSprite(miscSheet.animations.dead || []);
  deadIcon.filters = [new OutlineFilter()];
  deadIcon.loop = false;
  deadIcon.animationSpeed = 0.5;
  deadIcon.zIndex = 1000;
  if (loser?.animation.team === 'right') {
    deadIcon.scale.x = -1;
    if (brute2Header) {
      deadIcon.x = brute2Header.x + 32;
      deadIcon.y = brute2Header.y - 13;
    } else if (bossHeader) {
      deadIcon.x = bossHeader.x + 32;
      deadIcon.y = bossHeader.y - 13;
    }
  } else {
    deadIcon.x = brute1Header.x - 32;
    deadIcon.y = brute1Header.y - 13;
  }
  app.stage?.addChild(deadIcon);
  deadIcon.play();

  // Display win message at the bottom
  const winMessage = new PIXI.Text(t('fight.wonTheFight', { brute: fight.winner }).toLocaleUpperCase(), {
    fontFamily: 'GameFont',
    fontSize: 20,
    fill: 0xffffff,
    align: 'center',
  });
  winMessage.filters = [new OutlineFilter()];
  winMessage.x = app.screen.width / 2;
  winMessage.y = app.screen.height - 20;
  winMessage.anchor.set(0.5, 0.5);
  winMessage.height = 0;
  winMessage.zIndex = 900;
  app.stage?.addChild(winMessage);

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
    const petal = new PIXI.AnimatedSprite(miscSheet.animations.petals || []);
    petal.filters = [new ColorOverlayFilter(
      // Random color
      Math.random() * 0xffffff,
      0.5,
    )];

    // Random horizontal position around the winner
    petal.x = (winner?.animation.container.x || 0) - 75 + Math.random() * 150;
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

    // Freeze app after 10 seconds to save GPU
    setTimeout(() => {
      if (app?.ticker) {
        app.ticker.stop();
      }
    }, 10000);
  }
};

export default setupFight;
