/* eslint-disable no-void */
/* eslint-disable no-param-reassign */
import { Fighter, FightStep, StepType } from '@labrute/core';
import { BossName, Fight } from '@labrute/prisma';
import moment from 'moment';
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
import { AnimationFighter, findHUDFocusedFighter } from './utils/findFighter';
import createBustImage from './utils/createBustImage';
import repositionFighters, { isNeutralStep } from './utils/repositionFighters';
import { vampirism } from './vampirism';
import dropShield from './dropShield';
import setHUDFocus from './setHUDFocus';

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

  // AnimationFighters
  let fighters: AnimationFighter[] = [];

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
  const team1Header = new PIXI.Sprite(miscSheet.textures['header.png']);
  team1Header.filters = [new OutlineFilter()];
  team1Header.x = 4;
  team1Header.y = 10;
  team1Header.zIndex = 101;

  // Add tooltip on hover
  team1Header.interactive = true;
  team1Header.hitArea = new PIXI.Polygon([
    new PIXI.Point(0, 10),
    new PIXI.Point(240, 10),
    new PIXI.Point(240, 20),
    new PIXI.Point(50, 20),
    new PIXI.Point(50, 65),
    new PIXI.Point(0, 65),
  ]);
  team1Header.addListener('mouseover', () => {
    toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute1.team) || brute1, true);
  });
  team1Header.addListener('mouseout', () => {
    toggleTooltip(brute1, false);
  });
  team1Header.on('tap', (e: PIXI.InteractionEvent) => {
    e.stopPropagation();
    toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute1.team) || brute1, true);
  });
  app.stage?.addChild(team1Header);

  // First team name
  const team1Text = new PIXI.Text(brute1.name.toLocaleUpperCase(), {
    fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
  });
  team1Text.filters = [new OutlineFilter()];
  team1Text.x = 4;
  team1Text.y = 0;
  team1Text.zIndex = 102;
  app.stage?.addChild(team1Text);

  // First team HP bar
  const team1HpBar = new PIXI.Graphics();
  team1HpBar.beginFill(PIXI.utils.string2hex(theme.palette.hpBar.main));
  team1HpBar.drawRoundedRect(0, 0, 236, 9, 4);
  team1HpBar.filters = [new GlowFilter({
    distance: 6,
    innerStrength: 2,
    outerStrength: 0,
    color: PIXI.utils.string2hex(theme.palette.hpBar.dark),
  })];
  team1HpBar.x = 7;
  team1HpBar.y = 21;
  team1HpBar.zIndex = 103;
  team1HpBar.name = `${brute1.name}.hp`;
  app.stage?.addChild(team1HpBar);

  // First team phantom HP bar
  const team1PhantomHpBar = new PIXI.Graphics();
  team1PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
  team1PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
  team1PhantomHpBar.x = 7;
  team1PhantomHpBar.y = 21;
  team1PhantomHpBar.zIndex = 102;
  team1HpBar.name = `${brute1.name}.hp-phantom`;
  app.stage?.addChild(team1PhantomHpBar);

  // Reset tooltip on tap anywhere
  if (app.stage) {
    app.stage.interactive = true;
  }
  app.stage?.on('tap', () => {
    toggleTooltip(brute1, false);
  });

  // First team bust
  const brute1BustImg = await createBustImage(brute1, renderer);

  const team1Bust = new PIXI.Sprite(new Texture(new BaseTexture(brute1BustImg)));
  team1Bust.x = 52;
  team1Bust.y = 35;
  team1Bust.zIndex = 102;
  team1Bust.scale.y = 0.45;
  team1Bust.scale.x = -0.45;
  app.stage?.addChild(team1Bust);

  // Clip bust to fit in the header
  const team1BustMask = new PIXI.Graphics();
  team1BustMask.beginFill(0xFFFFFF);
  team1BustMask.drawRect(0, 0, 100, 88);
  team1BustMask.endFill();
  team1Bust.addChild(team1BustMask);
  team1Bust.mask = team1BustMask;

  const team1Weapons: PIXI.Sprite[] = [];

  let team2Header: PIXI.Sprite | null = null;
  let team2Text: PIXI.Text | null = null;
  let team2HpBar: PIXI.Graphics | null = null;
  let team2PhantomHpBar: PIXI.Graphics | null = null;
  let brute2BustImg: HTMLImageElement | null = null;
  let team2Bust: PIXI.Sprite | null = null;
  const team2Weapons: PIXI.Sprite[] = [];

  if (brute2) {
    // Second team header
    team2Header = new PIXI.Sprite(miscSheet.textures['header.png']);
    team2Header.filters = [new OutlineFilter()];
    team2Header.scale.x = -1;
    team2Header.x = app.screen.width - 4;
    team2Header.y = 10;
    team2Header.zIndex = 101;

    // Add tooltip on hover
    team2Header.interactive = true;
    team2Header.hitArea = new PIXI.Polygon([
      new PIXI.Point(0, 10),
      new PIXI.Point(240, 10),
      new PIXI.Point(240, 20),
      new PIXI.Point(50, 20),
      new PIXI.Point(50, 65),
      new PIXI.Point(0, 65),
    ]);
    team2Header.on('mouseover', () => {
      toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute2.team) || brute2, true);
    });
    team2Header.on('mouseout', () => {
      toggleTooltip(brute2, false);
    });
    team2Header.on('tap', (e: PIXI.InteractionEvent) => {
      e.stopPropagation();
      toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute2.team) || brute2, true);
    });

    app.stage?.addChild(team2Header);

    // Second team name
    team2Text = new PIXI.Text(brute2.name.toLocaleUpperCase(), {
      fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff, align: 'right'
    });
    team2Text.anchor.x = 1;
    team2Text.filters = [new OutlineFilter()];
    team2Text.x = app.screen.width - 4;
    team2Text.y = 0;
    team2Text.zIndex = 102;
    app.stage?.addChild(team2Text);

    // Second team HP bar
    team2HpBar = new PIXI.Graphics();
    team2HpBar.beginFill(PIXI.utils.string2hex(theme.palette.hpBar.main));
    team2HpBar.drawRoundedRect(0, 0, 236, 9, 4);
    team2HpBar.filters = [new GlowFilter({
      distance: 6,
      innerStrength: 2,
      outerStrength: 0,
      color: PIXI.utils.string2hex(theme.palette.hpBar.dark),
    })];
    team2HpBar.scale.x = -1;
    team2HpBar.x = app.screen.width - 7;
    team2HpBar.y = 21;
    team2HpBar.zIndex = 103;
    team2HpBar.name = `${brute2.name}.hp`;
    app.stage?.addChild(team2HpBar);

    // Second team phantom HP bar
    team2PhantomHpBar = new PIXI.Graphics();
    team2PhantomHpBar.beginFill(PIXI.utils.string2hex(theme.palette.error.main));
    team2PhantomHpBar.drawRoundedRect(0, 0, 236, 9, 4);
    team2PhantomHpBar.scale.x = -1;
    team2PhantomHpBar.x = app.screen.width - 7;
    team2PhantomHpBar.y = 21;
    team2PhantomHpBar.zIndex = 102;
    team2PhantomHpBar.name = `${brute2.name}.hp-phantom`;
    app.stage?.addChild(team2PhantomHpBar);

    // Second team bust
    brute2BustImg = await createBustImage(brute2, renderer);

    team2Bust = new PIXI.Sprite(new Texture(new BaseTexture(brute2BustImg)));
    team2Bust.x = 450;
    team2Bust.y = 35;
    team2Bust.zIndex = 102;
    team2Bust.scale.y = 0.45;
    team2Bust.scale.x = 0.45;
    app.stage?.addChild(team2Bust);

    // Clip bust to fit in the header
    const team2BustMask = new PIXI.Graphics();
    team2BustMask.beginFill(0xFFFFFF);
    team2BustMask.drawRect(0, 0, 100, 88);
    team2BustMask.endFill();
    team2Bust.addChild(team2BustMask);
    team2Bust.mask = team2BustMask;
  }

  let bossHeader: PIXI.Sprite | null = null;
  let bossHpBar: PIXI.Graphics | null = null;
  let bossPhantomHpBar: PIXI.Graphics | null = null;
  if (boss) {
    // Boss header
    bossHeader = new PIXI.Sprite(miscSheet.textures['header.png']);
    bossHeader.filters = [new OutlineFilter()];
    bossHeader.scale.x = -1;
    bossHeader.x = app.screen.width - 4;
    bossHeader.y = 10;
    bossHeader.zIndex = 101;

    app.stage?.addChild(bossHeader);

    // Boss name
    const displayedBossName = (
      // Normal day Display
      !moment().isSame(moment('04-01', 'MM-DD'), 'day') ? boss.name
        // April Fools Display
        : boss.name === BossName.EmberFang ? 'EmberFool'
          : boss.name === BossName.GoldClaw ? 'GoldClown'
            : boss.name
    );

    const bossName = new PIXI.Text(displayedBossName.toLocaleUpperCase(), {
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

    // Boss phantom HP bar
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
  fighters = fightFighters.map((fighter) => {
    // Necessary since .team was added later
    // TODO: Remove on release
    if (!fighter.team) {
      fighter.team = (fighter.master || fighter.id) === brute1.id ? 'L' : 'R';
    }

    const animationFighter: AnimationFighter = {
      ...fighter,
      hpBar: (fighter.master
        ? undefined
        : fighter.team === brute1.team
          ? team1HpBar
          : fighter.team === brute2?.team
            ? team2HpBar
            : fighter.id === boss?.id
              ? bossHpBar
              : undefined) ?? undefined,
      hpBarPhantom: (fighter.master
        ? undefined
        : fighter.team === brute1.team
          ? team1PhantomHpBar
          : fighter.team === brute2?.team
            ? team2PhantomHpBar
            : fighter.id === boss?.id
              ? bossPhantomHpBar
              : undefined) ?? undefined,
      bustImage: (fighter.master
        ? null
        : fighter.id === brute1.id
          ? brute1BustImg
          : fighter.id === brute2?.id
            ? brute2BustImg
            : null) ?? null,
      bust: (fighter.master
        ? undefined
        : fighter.team === brute1.team
          ? team1Bust
          : fighter.team === brute2?.team
            ? team2Bust
            : undefined) ?? undefined,
      text: (fighter.master
        ? undefined
        : fighter.team === brute1.team
          ? team1Text
          : fighter.team === brute2?.team
            ? team2Text
            : undefined) ?? undefined,
      teamWeaponsIllustrations: fighter.team === brute1.team ? team1Weapons : team2Weapons,
      HUDFocused: fighter.id === brute2?.id || fighter.id === brute1?.id,
      animation: new FighterHolder(
        app,
        fighter,
        speed
      ),
    };

    // Set position
    animationFighter.animation.container.x = fighter.team === 'L' ? -100 : 600;
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

  const isClanWar = !!fight.clanWarId;

  // Loop on steps
  const steps = JSON.parse(fight.steps) as FightStep[];
  for (let i = 0; i < steps.length; i++) {
    const { [i]: step } = steps;

    if (!step) {
      throw new Error('Step not found');
    }

    // Reposition mispositionned fighters during neutral
    if (isNeutralStep(step.a)) await repositionFighters(app, fighters, speed);

    // Display step's brute in HUD
    if ('b' in step && Object.hasOwn(step, 'b') && step.a !== StepType.AttemptHit) {
      void setHUDFocus(app, renderer, fighters, step.b, speed, isClanWar);
    }
    // Display step's fighter in HUD
    if ('f' in step && Object.hasOwn(step, 'f')) {
      void setHUDFocus(app, renderer, fighters, step.f, speed, isClanWar);
    }
    // Display step's target in HUD
    if ('t' in step && Object.hasOwn(step, 't') && step.a !== StepType.Bomb && step.a !== StepType.Hypnotise) {
      void setHUDFocus(app, renderer, fighters, step.t, speed, isClanWar);
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
        await hit(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.FlashFlood: {
        await flashFlood(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Hammer: {
        await hammer(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Death: {
        death(fighters, step, speed, isClanWar);
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
        await eat(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Heal: {
        await heal(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Survive: {
        survive(app, fight, fighters, step, speed);
        break;
      }
      case StepType.Trap: {
        await trap(app, fighters, step, speed);
        break;
      }
      case StepType.Block: {
        await block(app, fighters, step);
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
        await equip(app, fighters, step);
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
        await bomb(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Spy: {
        await spy(fighters, step, speed);
        break;
      }
      case StepType.Vampirism: {
        await vampirism(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Haste: {
        await haste(app, fighters, step, speed, isClanWar);
        break;
      }
      case StepType.Treat: {
        await treat(app, fighters, step, speed);
        break;
      }
      case StepType.DropShield: {
        dropShield(app, fighters, step, speed);
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

  void sound.play('sfx', { sprite: 'win' });

  // Get winner fighter
  const winner = fighters.find((fighter) => !fighter.master && fighter.name === fight.winner);

  // Get loser fighter
  const loser = fighters.find((fighter) => !fighter.master && fighter.name === fight.loser);

  // Display dead icon animation on the UI
  const deadIcon = new AnimatedSprite(miscSheet.animations.dead || []);
  deadIcon.filters = [new OutlineFilter()];
  deadIcon.loop = false;
  deadIcon.animationSpeed = 0.5;
  deadIcon.zIndex = 1000;
  if (loser?.team === 'R') {
    deadIcon.scale.x = -1;
    if (team2Header) {
      deadIcon.x = team2Header.x + 32;
      deadIcon.y = team2Header.y - 13;
    } else if (bossHeader) {
      deadIcon.x = bossHeader.x + 32;
      deadIcon.y = bossHeader.y - 13;
    }
  } else {
    deadIcon.x = team1Header.x - 32;
    deadIcon.y = team1Header.y - 13;
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
