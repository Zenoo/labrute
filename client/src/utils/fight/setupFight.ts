

import {
  Fighter, FightStep, isLoser, isWinner, SkillById, SkillId, skills, StepType
} from '@labrute/core';
import { BossName, Fight } from '@labrute/prisma';
import { Theme } from '@mui/material';
import { ColorOverlayFilter } from 'pixi-filters/color-overlay';
import { GlowFilter } from 'pixi-filters/glow';
import { OutlineFilter } from 'pixi-filters/outline';
import { sound } from '@pixi/sound';
import dayjs from 'dayjs';
import { TFunction } from 'react-i18next';
import {
  AnimatedSprite, Application, Color, Container, Graphics, Sprite, Text, Texture
} from 'pixi.js';
import { RendererContextInterface } from '../../hooks/useRenderer';
import { arrive } from './arrive';
import { attemptHit } from './attemptHit';
import { block } from './block';
import { bomb } from './bomb';
import { death } from './death';
import { disarm } from './disarm';
import { dropShield } from './dropShield';
import { eat } from './eat';
import { end } from './end';
import { equip } from './equip';
import { evade } from './evade';
import { FighterHolder } from './FighterHolder';
import { flashFlood } from './flashFlood';
import { hammer } from './hammer';
import { haste } from './haste';
import { heal } from './heal';
import { hit } from './hit';
import { hypnotise } from './hypnotise';
import { leave } from './leave';
import { moveBack } from './moveBack';
import { moveTo } from './moveTo';
import { regenerate } from './regenerate';
import { resist } from './resist';
import { sabotage } from './sabotage';
import { saboteur } from './saboteur';
import { setHUDFocus } from './setHUDFocus';
import { skillActivate } from './skillActivate';
import { skillExpire } from './skillExpire';
import { spy } from './spy';
import { steal } from './steal';
import { survive } from './survive';
import { throwWeapon } from './throwWeapon';
import { trap } from './trap';
import { trash } from './trash';
import { treat } from './treat';
import { updateWeapons } from './updateWeapons';
import { createBustImage } from './utils/createBustImage';
import { AnimationFighter, findHUDFocusedFighter } from './utils/findFighter';
import { isRangedStep, repositionFighters } from './utils/repositionFighters';
import { vampirism } from './vampirism';
import { getFighters } from './utils/getFighters';
import { mimic } from './mimic';
import { tween } from './utils/tween';
import { Spritesheets } from './utils/spritesheet';

export const setupFight: (
  theme: Theme,
  fight: Fight,
  app: Application,
  speed: React.RefObject<number>,
  t: TFunction,
  toggleTooltip: (brute: Fighter, open: boolean) => void,
  renderer: RendererContextInterface,
  spritesheets: Spritesheets,
  showPerformanceStats?: boolean,
  isDisposed?: () => boolean,
) => Promise<void> = async (
  theme,
  fight,
  app,
  speed,
  t,
  toggleTooltip,
  renderer,
  spritesheets,
  showPerformanceStats = false,
  isDisposed
) => {
    const shouldAbort = () => (isDisposed?.() ?? false) || !app.stage || app.stage.destroyed;

    type StepPerf = {
      stepName: string;
      index: number;
      samples: number;
      minFps: number;
      sumFrameMs: number;
      maxFrameMs: number;
      frameMsSamples: number[];
    };

    let perfContainer: Container | null = null;
    let perfText: Text | null = null;
    let perfBackground: Graphics | null = null;
    let perfLiveActive = false;
    let perfSummaryPrinted = false;
    let currentStepName = 'setup';
    let currentStepIndex = -1;
    const fpsSamples: number[] = [];
    const frameMsSamples: number[] = [];
    const stepPerf = new Map<string, StepPerf>();

    const getPercentile = (values: number[], percentile: number): number => {
      if (!values.length) {
        return 0;
      }

      const sorted = [...values].sort((a, b) => a - b);
      const index = Math.min(
        sorted.length - 1,
        Math.max(0, Math.ceil((percentile / 100) * sorted.length) - 1),
      );

      return sorted[index] ?? 0;
    };

    // AnimationFighters
    let fighters: AnimationFighter[] = [];

    if (showPerformanceStats && app.stage) {
      const countDisplayObjects = (container: Container): number => container.children
        .reduce(
          (count, child) => count + 1 + (
            child instanceof Container ? countDisplayObjects(child) : 0
          ),
          0,
        );

      perfContainer = new Container();
      perfContainer.zIndex = 3999;
      app.stage.addChild(perfContainer);

      // Background to make the text readable
      perfBackground = new Graphics()
        .rect(0, 0, 140, 40)
        .fill(new Color(0x000000));
      perfBackground.alpha = 0.7;
      perfBackground.zIndex = 3999;
      perfBackground.eventMode = 'none';
      perfContainer.addChild(perfBackground);

      perfText = new Text({
        text: '',
        style: {
          fontFamily: 'Courier New',
          fontSize: 10,
          fill: 0x7CFF9B,
          align: 'left',
        },
      });
      perfText.x = 6;
      perfText.y = 0;
      perfText.zIndex = 4000;
      perfText.eventMode = 'none';
      perfContainer.addChild(perfText);
      perfLiveActive = true;

      let elapsed = 0;
      app.ticker.add(() => {
        if (!perfLiveActive) {
          return;
        }
        if (!perfText) {
          return;
        }

        const elapsedMs = app.ticker.elapsedMS;
        const instantFps = elapsedMs > 0 ? 1000 / elapsedMs : 0;
        const stepKey = `${currentStepName}#${currentStepIndex}`;
        const existingStepPerf = stepPerf.get(stepKey);

        if (existingStepPerf) {
          existingStepPerf.samples += 1;
          existingStepPerf.minFps = Math.min(existingStepPerf.minFps, instantFps);
          existingStepPerf.sumFrameMs += elapsedMs;
          existingStepPerf.maxFrameMs = Math.max(existingStepPerf.maxFrameMs, elapsedMs);
          existingStepPerf.frameMsSamples.push(elapsedMs);
        } else {
          stepPerf.set(stepKey, {
            stepName: currentStepName,
            index: currentStepIndex,
            samples: 1,
            minFps: instantFps,
            sumFrameMs: elapsedMs,
            maxFrameMs: elapsedMs,
            frameMsSamples: [elapsedMs],
          });
        }

        fpsSamples.push(instantFps);
        frameMsSamples.push(elapsedMs);

        elapsed += app.ticker.elapsedMS;

        // Refresh at 10Hz to keep overlay readable with very low overhead.
        if (elapsed < 100) {
          return;
        }
        elapsed = 0;

        const fps = app.ticker.FPS;
        const frameMs = fps > 0 ? 1000 / fps : 0;
        const displayObjects = app.stage ? countDisplayObjects(app.stage) : 0;

        perfText.text = [
          `FPS ${fps.toFixed(1)}`,
          `Frame ${frameMs.toFixed(1)} ms`,
          `DisplayObjects ${displayObjects}`,
        ].join('\n');
      });
    }

    const updatePerformanceSummary = () => {
      if (perfSummaryPrinted || !showPerformanceStats) {
        return;
      }
      perfSummaryPrinted = true;

      perfLiveActive = false;

      const fpsMedian = getPercentile(fpsSamples, 50);
      const frameP95 = getPercentile(frameMsSamples, 95);

      const worstSteps = [...stepPerf.values()]
        .filter((s) => s.samples > 0)
        .sort((a, b) => a.minFps - b.minFps)
        .slice(0, 10)
        .map((s) => ({
          index: s.index,
          step: s.stepName,
          minFps: Number(s.minFps.toFixed(1)),
          avgFps: Number((1000 / (s.sumFrameMs / s.samples)).toFixed(1)),
          p95FrameMs: Number(getPercentile(s.frameMsSamples, 95).toFixed(1)),
          worstFrameMs: Number(s.maxFrameMs.toFixed(1)),
          samples: s.samples,
        }));

      if (worstSteps.length) {
        console.warn('[Fight perf] Lowest FPS steps', worstSteps);
      }

      if (perfText && perfBackground) {
        const currentLines = perfText.text.split('\n').filter(Boolean);
        const topLines = currentLines.slice(0, 3);
        perfText.text = [
          ...topLines,
          `FPS p50 ${fpsMedian.toFixed(1)}`,
          `Frame p95 ${frameP95.toFixed(1)} ms`,
        ].join('\n');

        perfBackground.clear()
          .rect(0, 0, 140, 65)
          .fill(new Color(0x000000));
        perfBackground.alpha = 0.7;
      }
    };

    // Spritesheet
    const miscSheet = spritesheets.misc;

    if (!miscSheet) {
      throw new Error('Misc spritesheet not found');
    }

    const fightFighters = getFighters(fight.fighters);

    const brute1 = fightFighters.find((fighter) => !fighter.master
      && fighter.team === 'L');
    const brute2 = fightFighters.find((fighter) => !fighter.master
      && fighter.team === 'R');
    const boss = fightFighters.find((fighter) => fighter.type === 'boss');

    if (!brute1) {
      throw new Error('Brute not found');
    }

    if (shouldAbort()) return;

    // TODO: Remove this on release, as background extensions were changed
    const fightBackground = `${fight.background.split('.')[0]}.jpg`;

    // Add background
    const background = new Sprite(miscSheet.textures[`background/${fightBackground}`]);
    background.zIndex = -1;

    // Fill screen
    background.width = app.screen.width;
    background.height = app.screen.height;

    app.stage?.addChild(background);

    // Add 2px border
    const border = new Graphics()
      .rect(0, 0, app.screen.width, app.screen.height)
      .stroke({ color: new Color(theme.palette.secondary.main), width: 2 });
    border.zIndex = 102;
    app.stage?.addChild(border);

    // Add headers

    // First brute header
    const team1Header = new Sprite(miscSheet.textures['header.png']);
    team1Header.filters = [new OutlineFilter()];
    team1Header.x = 4;
    team1Header.y = 10;
    team1Header.zIndex = 101;

    // Tooltip on hover/tap
    team1Header.eventMode = 'static';
    team1Header.cursor = 'pointer';
    team1Header.on('pointerover', () => {
      toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute1.team) || brute1, true);
    });
    team1Header.on('pointerout', () => {
      toggleTooltip(brute1, false);
    });
    team1Header.on('pointertap', (e) => {
      e.stopPropagation();
      toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute1.team) || brute1, true);
    });

    app.stage?.addChild(team1Header);

    // First team name
    const team1Text = new Text({
      text: brute1.name.toLocaleUpperCase(),
      style: {
        fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff
      }
    });
    team1Text.filters = [new OutlineFilter()];
    team1Text.anchor.set(0, 1);
    team1Text.x = 4;
    team1Text.y = 23;
    team1Text.zIndex = 102;
    team1Text.eventMode = 'none';
    app.stage?.addChild(team1Text);

    // First team HP bar
    const team1HpBar = new Graphics()
      .roundRect(0, 0, 236, 9, 4)
      .fill(new Color(theme.palette.hpBar.main));
    team1HpBar.filters = [new GlowFilter({
      distance: 6,
      innerStrength: 2,
      outerStrength: 0,
      color: new Color(theme.palette.hpBar.dark),
    })];
    team1HpBar.x = 7;
    team1HpBar.y = 21;
    team1HpBar.zIndex = 103;
    team1HpBar.label = `${brute1.name}.hp`;
    team1HpBar.eventMode = 'none';
    app.stage?.addChild(team1HpBar);

    // First team phantom HP bar
    const team1PhantomHpBar = new Graphics()
      .roundRect(0, 0, 236, 9, 4)
      .fill(new Color(theme.palette.error.main));
    team1PhantomHpBar.x = 7;
    team1PhantomHpBar.y = 21;
    team1PhantomHpBar.zIndex = 102;
    team1PhantomHpBar.label = `${brute1.name}.hp-phantom`;
    team1PhantomHpBar.eventMode = 'none';
    app.stage?.addChild(team1PhantomHpBar);

    // Reset tooltip on tap anywhere
    if (app.stage) {
      app.stage.eventMode = 'static';
    }
    app.stage?.on('pointertap', () => {
      toggleTooltip(brute1, false);
    });

    // First team bust
    if (shouldAbort()) return;
    const brute1BustImg = await createBustImage(brute1, renderer);
    if (shouldAbort()) return;
    const team1Bust = new Sprite(Texture.from({
      resource: brute1BustImg,
      scaleMode: 'linear'
    }));
    const team1BustContainer = new Container();
    team1BustContainer.x = 52;
    team1BustContainer.y = 35;
    team1BustContainer.zIndex = 102;
    team1BustContainer.scale.y = 0.15;
    team1BustContainer.scale.x = -0.15;
    team1BustContainer.eventMode = 'none';
    app.stage.addChild(team1BustContainer);
    team1BustContainer.addChild(team1Bust);

    // Clip bust to fit in the header
    const team1BustMask = new Graphics()
      .rect(0, 0, 300, 264)
      .fill(0xFFFFFF);
    team1BustContainer.addChild(team1BustMask);
    team1Bust.mask = team1BustMask;

    const team1Weapons: Sprite[] = [];
    const team1Skills: Sprite[] = [];

    let team2Header: Sprite | null = null;
    let team2Text: Text | null = null;
    let team2HpBar: Graphics | null = null;
    let team2PhantomHpBar: Graphics | null = null;
    let brute2BustImg: HTMLImageElement | null = null;
    let team2Bust: Sprite | null = null;
    const team2Weapons: Sprite[] = [];
    const team2Skills: Sprite[] = [];

    if (brute2) {
      // Second team header
      team2Header = new Sprite(miscSheet.textures['header.png']);
      team2Header.filters = [new OutlineFilter()];
      team2Header.scale.x = -1;
      team2Header.x = app.screen.width - 4;
      team2Header.y = 10;
      team2Header.zIndex = 101;

      // Tooltip on hover/tap
      team2Header.eventMode = 'static';
      team2Header.cursor = 'pointer';
      team2Header.on('pointerover', () => {
        toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute2.team) || brute2, true);
      });
      team2Header.on('pointerout', () => {
        toggleTooltip(brute2, false);
      });
      team2Header.on('pointertap', (e) => {
        e.stopPropagation();
        toggleTooltip(findHUDFocusedFighter(fightFighters, fighters, brute2.team) || brute2, true);
      });

      app.stage?.addChild(team2Header);

      // Second team name
      team2Text = new Text({
        text: brute2.name.toLocaleUpperCase(),
        style: {
          fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff, align: 'right'
        }
      });
      team2Text.filters = [new OutlineFilter()];
      team2Text.anchor.set(1, 1);
      team2Text.x = app.screen.width - 4;
      team2Text.y = 23;
      team2Text.zIndex = 102;
      team2Text.eventMode = 'none';
      app.stage?.addChild(team2Text);

      // Second team HP bar
      team2HpBar = new Graphics()
        .roundRect(0, 0, 236, 9, 4)
        .fill(new Color(theme.palette.hpBar.main));
      team2HpBar.filters = [new GlowFilter({
        distance: 6,
        innerStrength: 2,
        outerStrength: 0,
        color: new Color(theme.palette.hpBar.dark),
      })];
      team2HpBar.scale.x = -1;
      team2HpBar.x = app.screen.width - 7;
      team2HpBar.y = 21;
      team2HpBar.zIndex = 103;
      team2HpBar.label = `${brute2.name}.hp`;
      team2HpBar.eventMode = 'none';
      app.stage?.addChild(team2HpBar);

      // Second team phantom HP bar
      team2PhantomHpBar = new Graphics()
        .roundRect(0, 0, 236, 9, 4)
        .fill(new Color(theme.palette.error.main));
      team2PhantomHpBar.scale.x = -1;
      team2PhantomHpBar.x = app.screen.width - 7;
      team2PhantomHpBar.y = 21;
      team2PhantomHpBar.zIndex = 102;
      team2PhantomHpBar.label = `${brute2.name}.hp-phantom`;
      team2PhantomHpBar.eventMode = 'none';
      app.stage?.addChild(team2PhantomHpBar);

      // Second team bust
      if (shouldAbort()) return;
      brute2BustImg = await createBustImage(brute2, renderer);
      if (shouldAbort()) return;
      team2Bust = new Sprite(Texture.from({
        resource: brute2BustImg,
        scaleMode: 'linear'
      }));
      const team2BustContainer = new Container();
      team2BustContainer.x = 450;
      team2BustContainer.y = 35;
      team2BustContainer.zIndex = 102;
      team2BustContainer.scale.y = 0.15;
      team2BustContainer.scale.x = 0.15;
      team2BustContainer.eventMode = 'none';
      app.stage?.addChild(team2BustContainer);
      team2BustContainer.addChild(team2Bust);

      // Clip bust to fit in the header
      const team2BustMask = new Graphics()
        .rect(0, 0, 300, 264)
        .fill(0xFFFFFF);
      team2BustContainer.addChild(team2BustMask);
      team2Bust.mask = team2BustMask;
    }

    let bossHeader: Sprite | null = null;
    let bossHpBar: Graphics | null = null;
    let bossPhantomHpBar: Graphics | null = null;
    if (boss) {
      // Boss header
      bossHeader = new Sprite(miscSheet.textures['header.png']);
      bossHeader.filters = [new OutlineFilter()];
      bossHeader.scale.x = -1;
      bossHeader.x = app.screen.width - 4;
      bossHeader.y = 10;
      bossHeader.zIndex = 101;

      app.stage?.addChild(bossHeader);

      // Boss name
      const displayedBossName = (
        // Normal day Display
        !dayjs.utc().isSame(dayjs.utc('04-01', 'MM-DD'), 'day') ? boss.name
          // April Fools Display
          : boss.name === BossName.EmberFang ? 'EmberFool'
            : boss.name === BossName.GoldClaw ? 'GoldClown'
              : boss.name
      );

      const bossName = new Text({
        text: displayedBossName.toLocaleUpperCase(),
        style: {
          fontFamily: 'GameFont', fontSize: 20, fill: 0xffffff, align: 'right'
        }
      });
      bossName.filters = [new OutlineFilter()];
      bossName.anchor.set(1, 1);
      bossName.x = app.screen.width - 4;
      bossName.y = 23;
      bossName.zIndex = 102;
      app.stage?.addChild(bossName);

      // Boss HP bar
      bossHpBar = new Graphics()
        .roundRect(0, 0, (boss.hp / boss.maxHp) * 236, 9, 4)
        .fill(new Color(theme.palette.hpBar.main));
      bossHpBar.filters = [new GlowFilter({
        distance: 6,
        innerStrength: 2,
        outerStrength: 0,
        color: new Color(theme.palette.hpBar.dark),
      })];
      bossHpBar.scale.x = -1;
      bossHpBar.x = app.screen.width - 7;
      bossHpBar.y = 21;
      bossHpBar.zIndex = 103;
      bossHpBar.label = `${boss.name}.hp`;
      app.stage?.addChild(bossHpBar);

      // Boss phantom HP bar
      bossPhantomHpBar = new Graphics()
        .roundRect(0, 0, (boss.hp / boss.maxHp) * 236, 9, 4)
        .fill(new Color(theme.palette.error.main));
      bossPhantomHpBar.scale.x = -1;
      bossPhantomHpBar.x = app.screen.width - 7;
      bossPhantomHpBar.y = 21;
      bossPhantomHpBar.zIndex = 102;
      bossPhantomHpBar.label = `${boss.name}.hp-phantom`;
      app.stage?.addChild(bossPhantomHpBar);
    }

    // Set stage as sortable
    if (app.stage) {
      app.stage.sortableChildren = true;
    }

    // Set background music
    if (shouldAbort()) return;
    await sound.play('background', { loop: true });

    // Get fighters animations
    if (shouldAbort()) return;

    const nextFighters: AnimationFighter[] = [];

    for (const fighter of fightFighters) {
      if (shouldAbort()) {
        for (const createdFighter of nextFighters) {
          createdFighter.animation.destroy();
        }
        return;
      }

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
        bustImage: (fighter.type === 'pet'
          ? null
          : fighter.id === brute1.id
            ? brute1BustImg
            : fighter.id === brute2?.id
              ? brute2BustImg
              : null) ?? null,
        bust: (fighter.type === 'pet'
          ? undefined
          : fighter.team === brute1.team
            ? team1Bust
            : fighter.team === brute2?.team
              ? team2Bust
              : undefined) ?? undefined,
        text: (fighter.type === 'pet'
          ? undefined
          : fighter.team === brute1.team
            ? team1Text
            : fighter.team === brute2?.team
              ? team2Text
              : undefined) ?? undefined,
        teamWeaponsIllustrations: fighter.team === brute1.team ? team1Weapons : team2Weapons,
        teamSkillsIllustrations: fighter.team === brute1.team ? team1Skills : team2Skills,
        HUDFocused: fighter.id === brute2?.id || fighter.id === brute1?.id,
        skills: Object.fromEntries(Object.entries(fighter.skills).map(([skillId, tier]) => {
          let skillUses = skills[SkillById[+skillId as SkillId]].uses?.[tier - 1] ?? 0;

          // Add one fierceBrute every 30 strength
          if (+skillId === SkillId.fierceBrute) {
            skillUses += Math.floor(fighter.strength / 30);
          }

          return [
            skillId,
            {
              tier,
              uses: skillUses,
            },
          ];
        })),
        animation: new FighterHolder(
          app,
          fighter,
          speed,
          fighter.size
        ),
      };

      // Set position
      animationFighter.animation.container.x = fighter.team === 'L' ? -100 : 600;
      animationFighter.animation.container.y = 150;

      // Add to stage
      app.stage?.addChild(animationFighter.animation.container);

      // Update brute weapons
      updateWeapons(app, spritesheets, animationFighter);

      nextFighters.push(animationFighter);
    }

    fighters = nextFighters;

    // Wait for all fighters to be loaded
    while (!shouldAbort() && fighters.some((fighter) => !fighter.animation.loaded)) {
      await new Promise((resolve) => {
        setTimeout(resolve, 100);
      });
    }

    if (shouldAbort()) return;

    const isClanWar = !!fight.clanWarId;

    // Loop on steps
    const steps = JSON.parse(fight.steps) as FightStep[];
    for (let i = 0; i < steps.length; i++) {
      if (shouldAbort()) return;

      const { [i]: step } = steps;

      if (!step) {
        throw new Error('Step not found');
      }

      currentStepIndex = i;
      currentStepName = StepType[step.a] ?? String(step.a);

      // Reposition mispositionned fighters during neutral
      if (isRangedStep(step.a)) await repositionFighters(fighters, speed);

      // Display step's brute in HUD
      if ('b' in step && Object.hasOwn(step, 'b') && step.a !== StepType.AttemptHit) {
        void setHUDFocus(app, spritesheets, renderer, fighters, step.b, speed, isClanWar);
      }
      // Display step's fighter in HUD
      if ('f' in step && Object.hasOwn(step, 'f') && typeof step.f === 'number') {
        void setHUDFocus(app, spritesheets, renderer, fighters, step.f, speed, isClanWar);
      }
      // Display step's target in HUD
      if ('t' in step && Object.hasOwn(step, 't') && step.a !== StepType.Bomb && step.a !== StepType.Hypnotise) {
        void setHUDFocus(app, spritesheets, renderer, fighters, step.t, speed, isClanWar);
      }

      switch (step.a) {
        case StepType.Move: {
          await moveTo(fighters, step, speed);
          break;
        }
        case StepType.MoveBack: {
          await moveBack(fighters, step, speed);
          break;
        }
        case StepType.Arrive: {
          await arrive(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Leave: {
          await leave(fighters, step, speed);
          break;
        }
        case StepType.AttemptHit: {
          await attemptHit(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Hit:
        case StepType.Poison: {
          await hit(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.FlashFlood: {
          await flashFlood(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Hammer: {
          await hammer(app, spritesheets, fighters, step, speed, isClanWar);
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
          await saboteur(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Disarm: {
          disarm(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Steal: {
          await steal(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Throw: {
          await throwWeapon(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Trash: {
          await trash(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Eat: {
          await eat(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Heal: {
          await heal(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Survive: {
          survive(fight, fighters, step, speed);
          break;
        }
        case StepType.Trap: {
          await trap(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Block: {
          await block(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.SkillActivate: {
          await skillActivate(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.SkillExpire: {
          await skillExpire(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.End: {
          end(app, spritesheets, fighters, step);
          break;
        }
        case StepType.Hypnotise: {
          await hypnotise(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Equip: {
          await equip(app, spritesheets, fighters, step);
          break;
        }
        case StepType.Sabotage: {
          sabotage(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Resist: {
          resist(fighters, step);
          break;
        }
        case StepType.Bomb: {
          await bomb(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Spy: {
          await spy(fighters, step, speed);
          break;
        }
        case StepType.Vampirism: {
          await vampirism(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Haste: {
          await haste(app, spritesheets, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Treat: {
          await treat(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.DropShield: {
          dropShield(app, spritesheets, fighters, step, speed);
          break;
        }
        case StepType.Regeneration: {
          await regenerate(app, fighters, step, speed, isClanWar);
          break;
        }
        case StepType.Counter: {
          // Do nothing for now
          break;
        }
        case StepType.Mimic: {
          await mimic(app, spritesheets, fighters, step, speed);
          break;
        }
        default:
          console.error('Unknown step', step);
          break;
      }

      if (shouldAbort()) return;
    }

    void sound.play('sfx', { sprite: 'win' });

    // Get winner fighter
    const winner = fighters.find((fighter) => !fighter.master && isWinner(fighter, fight));

    // Get loser fighter
    const loser = fighters.find((fighter) => !fighter.master && isLoser(fighter, fight));

    // Display dead icon animation on the UI
    const deadIcon = new AnimatedSprite(miscSheet.animations.dead ?? []);
    deadIcon.filters = [new OutlineFilter()];
    deadIcon.loop = false;
    deadIcon.animationSpeed = 0.5;
    deadIcon.zIndex = 1000;
    deadIcon.eventMode = 'none';
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
    const winMessage = new Text({
      text: t('fight.wonTheFight', { brute: fight.winner }).toLocaleUpperCase(),
      style: {
        fontFamily: 'GameFont',
        fontSize: 20,
        fill: 0xffffff,
        align: 'center',
      }
    });
    winMessage.filters = [new OutlineFilter()];
    winMessage.x = app.screen.width / 2;
    winMessage.y = app.screen.height - 20;
    winMessage.anchor.set(0.5, 0.5);
    winMessage.height = 0;
    winMessage.zIndex = 900;
    app.stage?.addChild(winMessage);

    // Animate win message
    tween(winMessage, {
      duration: 2 / speed.current,
      height: 30,
      ease: 'bounce',
    });

    // Make 50 petals fall on the winner
    currentStepName = 'postFight';
    currentStepIndex = steps.length;
    let completedPetals = 0;
    for (let i = 0; i < 50; i++) {
      const petal = new AnimatedSprite(miscSheet.animations.petals ?? []);
      petal.filters = [new ColorOverlayFilter({
        // Random color
        color: Math.random() * 0xffffff,
        alpha: 0.5,
      })];

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
      tween(petal, {
        duration: (2 + Math.random() * 4) / speed.current,
        ease: 'none',
        y: app.screen.height - 10 - Math.random() * 100,
      }).then(() => {
        // Stop animation
        petal.stop();

        completedPetals += 1;
        if (completedPetals >= 50) {
          updatePerformanceSummary();
        }
      }).catch(console.error);
    }

    // Freeze app after 10 seconds to save GPU.
    setTimeout(() => {
      if (app?.ticker) {
        app.ticker.stop();
      }
    }, 10000);
  };
