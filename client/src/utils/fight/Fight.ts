import {
  ArriveStep, WeaponById, AttemptHitStep, weapons, BlockStep, randomBetween, BombStep,
  SkillId, DeathStep, DisarmStep, DropShieldStep, EatStep, EndStep, EquipStep,
  EvadeStep, HitStep, HasteStep, HealStep, StepType, WEAPONS_SFX, HypnotiseStep,
  LeaveStep, MoveBackStep, MoveStep, RegenerationStep, ResistStep, SabotageStep,
  SaboteurStep, SkillActivateStep, SkillById, SkillExpireStep, SpyStep, WeaponId,
  FIGHTER_HEIGHT, StealStep, SurviveStep, ThrowStep, TrapStep, TrashStep, WeaponByName,
  TreatStep, VampirismStep, MimicStep, ReloadStep, RewindStep, skills, FightStep,
  entries
} from '@labrute/core';
import {
  Application, Sprite, BlurFilter, Container, Texture, Filter, Ticker, Text
} from 'pixi.js';
import {
  BossName, WeaponName, Gender, Fight as FightData
} from '@labrute/prisma';
import { AnimationFighter, findFighter } from './utils/findFighter';
import { shakeStage } from './utils/stageAnimations';
import { sound } from '@pixi/sound';
import {
  getRandomPosition, getMultipleRandomPosition, WEAPONS_PER_ROW, WEAPON_SIZE,
  WEAPON_SPACING,
  SKILL_SIZE,
  SKILLS_PER_ROW,
  SKILL_SPACING
} from './utils/fightPositions';
import {
  updateShadow, airbornMove, tweenShadow
} from './utils/updateShadow';
import { Spritesheets } from './utils/spritesheet';
import {
  fightDelay, tween, Easing
} from './utils/tween';
import { BevelFilter } from 'pixi-filters/bevel';
import { getHitDistance } from './utils/getHitDistance';
import {
  getRealKnockBack, getHitKnockBack, isOwnSideHit
} from './utils/knockBack';
import { displayDamage } from './utils/displayDamage';
import { fightSprite, getFightClock } from './utils/FightClock';
import { getFighterType } from './utils/getFighterType';
import { displayHeal } from './utils/displayHeal';
import { MotionBlurFilter } from 'pixi-filters/motion-blur';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import { insideXBounds } from './utils/insideXBounds';
import { OutlineFilter } from 'pixi-filters/outline';
import { GlowFilter } from 'pixi-filters/glow';
import { addSkillUse, consumeSkillUse } from './utils/skillUses';
import { DropShadowFilter } from 'pixi-filters/drop-shadow';
import { TFunction } from 'react-i18next';
import { RendererContextInterface } from '../../hooks/useRenderer';
import { playHypnosisEffect, HypnosisEffect } from './utils/playHypnosisEffect';
import {
  captureFightSnapshot, restoreFightSnapshot, FightSnapshot
} from './utils/fightSnapshot';
import { FightReversal, ReversalRecording } from './utils/FightReversal';
import { FierceBruteEffect } from './utils/FierceBruteEffect';
import { createBustImage } from './utils/createBustImage';
import { TieredPerkColor } from '../StatColor';
import { bindFightTooltip } from './utils/fightTooltip';
import { animatePerkGain } from './utils/animatePerkGain';

const POISON_OUTLINE_FILTER_CONFIG = {
  thickness: 1,
  color: 0x006400,
};
const rangedSteps = [
  StepType.Haste,
  StepType.Throw,
  StepType.Trap,
  StepType.Hypnotise,
  StepType.Bomb,
];

export type FightOptions = {
  app: Application;
  fight: FightData;
  fighters: AnimationFighter[];
  speed: React.RefObject<number>;
  spritesheets: Spritesheets;
  renderer: RendererContextInterface;
  t: TFunction;
  shouldAbort: () => boolean;
  steps: readonly FightStep[];
};

export class Fight {
  readonly app: Application;

  readonly fight: FightData;

  readonly fighters: AnimationFighter[];

  readonly speed: React.RefObject<number>;

  readonly spritesheets: Spritesheets;

  readonly renderer: RendererContextInterface;

  readonly t: TFunction;

  readonly shouldAbort: () => boolean;

  readonly isClanWar: boolean;

  seeking = false;

  private readonly allFighters: AnimationFighter[];

  // Indexed by completed step count; only states a later Rewind returns through are captured.
  private readonly history: (FightSnapshot | undefined)[] = [];

  private readonly recordsRewind: boolean;

  private readonly rewoundStates = new Set<number>();

  private readonly rewoundSteps = new Set<number>();

  private readonly consumedRewinds = new Set<number>();

  private stepCount = 0;

  private readonly visualHistory: (ReversalRecording | undefined)[] = [];

  private reversal?: FightReversal;

  private reversing = false;

  private fierceBruteEffects?: Map<AnimationFighter, FierceBruteEffect>;

  private executing = false;

  private hypnosisEffect?: HypnosisEffect;

  constructor(options: FightOptions) {
    this.app = options.app;
    this.fight = options.fight;
    this.fighters = options.fighters;
    this.speed = options.speed;
    this.spritesheets = options.spritesheets;
    this.renderer = options.renderer;
    this.t = options.t;
    this.shouldAbort = options.shouldAbort;
    this.isClanWar = !!options.fight.clanWarId;
    this.allFighters = [...options.fighters];
    this.recordsRewind = options.steps.some((step) => step.a === StepType.Rewind);

    // A Rewind at step `r` undoes steps [r - n, r - 1], passing through states [r - n, r].
    options.steps.forEach((step, index) => {
      if (step.a !== StepType.Rewind) return;

      const target = Math.max(0, index - step.n);

      for (let state = target; state <= index; state++) {
        this.rewoundStates.add(state);

        if (state < index) this.rewoundSteps.add(state);
      }
    });

    if (this.recordsRewind) this.history.push(this.captureState(true));

    // Update fighter weapons
    for (const fighter of this.fighters) {
      this.updateWeapons(fighter);
    }
  }

  private captureState(seeking: boolean) {
    return this.rewoundStates.has(this.history.length)
      ? captureFightSnapshot(this.fighters, this.allFighters, seeking)
      : undefined;
  }

  async runStep(step: FightStep, seeking = false) {
    if (this.executing || this.reversing) throw new Error('A fight step is already running');

    this.executing = true;

    const previousSeeking = this.seeking;
    const recording = !seeking
      && step.a !== StepType.Rewind
      && this.rewoundSteps.has(this.stepCount);
    let recordingFinished = false;

    this.seeking = seeking;

    try {
      if (recording) this.getReversal().startStep();

      await this.dispatch(step);

      if (!this.shouldAbort()) {
        if (this.recordsRewind) {
          this.history.push(this.captureState(seeking));
          this.visualHistory.push(recording ? this.reversal?.finishStep() : undefined);
        }
        this.stepCount++;
        recordingFinished = true;
      }
    } finally {
      if (recording && !recordingFinished) this.reversal?.finishStep();

      this.seeking = previousSeeking;
      this.executing = false;
    }
  }

  get completedSteps() {
    return this.stepCount;
  }

  // The instruction cursor belongs to the caller and never moves backwards.
  async rewind(count: number) {
    if (!Number.isInteger(count) || count < 0) {
      throw new Error(`Invalid fight rewind count: ${count}`);
    }

    if (this.reversing) throw new Error('A fight rewind is already running');

    if (count === 0 || this.shouldAbort()) return;

    if (!this.recordsRewind) throw new Error('Rewind history is disabled for this fight');

    const targetIndex = Math.max(0, this.history.length - 1 - count);
    const snapshot = this.history[targetIndex];

    if (!snapshot) throw new Error('Fight rewind state not found');

    if (this.seeking) {
      this.restoreSnapshot(snapshot);

      return;
    }

    const clock = getFightClock();

    this.reversing = true;
    clock.suspend();

    try {
      for (const fighter of this.allFighters) fighter.animation.pause();

      await this.playHypnosisEffect(true);
      if (this.shouldAbort()) return;

      // Forward visuals must not remain frozen over recorded playback. Text is
      // reconstructed from its recorded content; generated ghost textures are retained.
      clock.cancelAnimations();
      this.clearFierceBruteEffects();

      const reversal = this.getReversal();
      const playBackwards = async () => {
        for (let index = this.history.length - 2; index >= targetIndex; index--) {
          if (this.shouldAbort()) return;

          const recording = this.visualHistory[index];

          if (recording) {
            await reversal.play(recording);
          } else {
            const from = this.history[index + 1];
            const to = this.history[index];

            if (!from || !to) throw new Error('Fight rewind state not found');

            await reversal.playBetween(from, to);
          }
        }
      };

      await playBackwards();

      if (this.shouldAbort()) return;

      for (const fighter of this.allFighters) fighter.animation.onceEvents = {};

      this.restoreSnapshot(snapshot);
      await this.renderState();

      for (const fighter of this.allFighters) fighter.animation.pause();

      await this.hypnosisEffect?.finish?.();

      if (this.shouldAbort()) return;

      for (const fighter of this.allFighters) {
        if (fighter.animation.seekPose.visible) fighter.animation.play();
      }
    } finally {
      this.hypnosisEffect?.dispose();
      this.reversal?.destroy();
      this.reversal = undefined;
      clock.resume();
      this.reversing = false;
    }
  }

  private restoreSnapshot(snapshot: FightSnapshot) {
    restoreFightSnapshot(snapshot, this.fighters);
    for (const fighter of this.allFighters) {
      if (this.consumedRewinds.has(fighter.index)) delete fighter.skills[SkillId.rewind];
    }
  }

  async rewindSkill(step: RewindStep) {
    this.consumedRewinds.add(step.f);
    await this.rewind(step.n);
  }

  private getReversal() {
    this.reversal ??= new FightReversal(
      this.app, this.allFighters, this.speed, this.shouldAbort, this.isClanWar,
    );

    return this.reversal;
  }

  async renderState() {
    for (const fighter of this.allFighters) {
      if (this.shouldAbort()) return;

      const pose = fighter.animation.seekPose;

      fighter.animation.container.visible = pose.visible;

      if (!pose.visible) {
        fighter.animation.pause();

        continue;
      }

      fighter.animation.setAirborn(pose.airborne);
      fighter.animation.container.zIndex = pose.airborne ? 1000 : fighter.animation.container.y;
      fighter.animation.shadow.alpha = pose.airborne ? 0 : 1;
      fighter.animation.shadow.visible = true;
      fighter.animation.setAnimation(pose.animation);

      const filters = (fighter.animation.container.filters || [])
        .filter((filter) => !(filter instanceof GlowFilter));

      fighter.animation.container.filters = pose.hypnotised ? [
        ...filters,
        new GlowFilter({
          distance: 10, outerStrength: 1, innerStrength: 0.5,
          color: 0xAD3C8F, quality: 0.05,
        }),
      ] : filters;
    }

    this.clearFierceBruteEffects();
    for (const fighter of this.allFighters) {
      if (fighter.fierceBrute) this.startFierceBruteEffect(fighter);
    }

    for (const fighter of this.fighters.filter((candidate) => candidate.HUDFocused)) {
      fighter.HUDFocused = false;
      await this.setHUDFocus(fighter.index);

      if (this.shouldAbort()) return;

      this.updateHp(fighter, fighter.hp, true);
    }
  }

  private async dispatch(step: FightStep) {
    if (this.isRangedStep(step.a))
      await this.repositionFighters(undefined);

    const focus = async (index: number | undefined) => {
      await this.setHUDFocus(index);
    };

    if ('b' in step && step.a !== StepType.AttemptHit)
      await focus(step.b);

    if ('f' in step && typeof step.f === 'number')
      await focus(step.f);

    if ('t' in step && typeof step.t === 'number'
      && step.a !== StepType.Mimic && step.a !== StepType.Rewind)
      await focus(step.t);

    if (this.shouldAbort())
      return;

    switch (step.a) {
      case StepType.Move: return this.moveTo(step);
      case StepType.MoveBack: return this.moveBack(step, undefined);
      case StepType.Arrive: return this.arrive(step);
      case StepType.Leave: return this.leave(step);
      case StepType.AttemptHit: return this.attemptHit(step);
      case StepType.Hit:
      case StepType.Poison: return this.hit(step);
      case StepType.FlashFlood:
        return this.flashFlood(step);
      case StepType.Hammer:
        return this.hammer(step);
      case StepType.Death: return this.death(step);
      case StepType.Evade: return this.evade(step);
      case StepType.Saboteur: return this.saboteur(step);
      case StepType.Disarm: return this.disarm(step);
      case StepType.Steal: return this.steal(step);
      case StepType.Throw: return this.throwWeapon(step);
      case StepType.Trash: return this.trash(step);
      case StepType.Eat: return this.eat(step);
      case StepType.Heal: return this.heal(step);
      case StepType.Survive: return this.survive(step);
      case StepType.Trap: return this.trap(step);
      case StepType.Block: return this.block(step);
      case StepType.SkillActivate:
        return this.skillActivate(step);
      case StepType.SkillExpire:
        return this.skillExpire(step);
      case StepType.End: return this.end(step);
      case StepType.Hypnotise: return this.hypnotise(step);
      case StepType.Equip: return this.equip(step);
      case StepType.Sabotage: return this.sabotage(step);
      case StepType.Resist: return this.resist(step);
      case StepType.Bomb: return this.bomb(step);
      case StepType.Spy: return this.spy(step);
      case StepType.Vampirism:
        return this.vampirism(step);
      case StepType.Haste: return this.haste(step);
      case StepType.Treat: return this.treat(step);
      case StepType.DropShield: return this.dropShield(step);
      case StepType.Regeneration:
        return this.regenerate(step);
      case StepType.Mimic: return this.mimic(step);
      case StepType.Reload: return this.reload(step);
      case StepType.Rewind: return this.rewindSkill(step);
      case StepType.Counter: return;
      default: {
        const unhandled: never = step;

        throw new Error(`Unsupported fight step: ${JSON.stringify(unhandled)}`);
      }
    }
  }

  async playHypnosisEffect(sustained = false) {
    if (this.seeking) return;

    this.hypnosisEffect?.dispose();
    this.hypnosisEffect = playHypnosisEffect(this.app, this.speed, this.shouldAbort, sustained);
    await this.hypnosisEffect;
  }

  async arrive(step: ArriveStep) {
    const shouldAbort = () => !this.app.stage || this.app.stage.destroyed;
    const fighter = findFighter(this.fighters, step.f);

    if (!this.seeking && (shouldAbort()
      || fighter.animation.container.destroyed
      || fighter.animation.shadow.destroyed)) {
      return;
    }

    // Equip weapon if needed
    if (typeof step.w !== 'undefined') {
      // Update available weapons
      this.updateWeapons(fighter, step.w, 'remove');

      // Update active weapon
      fighter.animation.weapon = WeaponById[step.w];
    }

    // Get random position
    const { x, y } = getRandomPosition(this.fighters, fighter);

    if (!this.seeking) {
      const spritesheet = this.spritesheets.misc;

      if (!spritesheet) {
        throw new Error('Spritesheet not found');
      }

      fighter.animation.once('arrive:start', () => {
        fighter.animation.pause();
      });
      fighter.animation.setAnimation('arrive');

      // Wait 0.25s before playing arrive SFX
      fightDelay(0.25 / this.speed.current).then(() => {
        if (shouldAbort() || fighter.animation.container.destroyed) {
          return;
        }

        void sound.play('sfx', { sprite: 'arrive' });
      }).catch(console.error);

      // Set airborn phase
      fighter.animation.setAirborn(true);

      // Hide shadow
      fighter.animation.shadow.alpha = 0;

      // Set zIndex to front
      fighter.animation.container.zIndex = y + 30;

      // Update shadow to the state from which it will be tweened
      updateShadow(fighter);
    }

    await airbornMove({
      fighter,
      speed: this.speed,
      duration: 0.5,
      ease: 'none',
      endPosition: { x, y, zIndex: y },
      seeking: this.seeking,
    });

    if (!this.seeking && (shouldAbort()
      || fighter.animation.container.destroyed
      || fighter.animation.shadow.destroyed)) {
      return;
    }

    // Stop airborn phase
    fighter.animation.setAirborn(false, this.seeking);

    if (!this.seeking) {
      const animations = [fighter.animation.waitForEvent('arrive:end')];

      // GroundShake for big bosses
      if (fighter.type === 'boss'
        && (fighter.name === BossName.EmberFang || fighter.name === BossName.GoldClaw)) {
        // Shake 8px for 350 ms
        animations.push(shakeStage(this.app, this.speed, 8, 350));
      }

      // Finish the arrive animation
      fighter.animation.play();

      // Dust cloud at arrival
      this.playDustEffect(fighter);

      // Wait for animation to end
      await Promise.all(animations);

      if (shouldAbort() || fighter.animation.container.destroyed) {
        return;
      }
    }

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  async attemptHit(step: AttemptHitStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    // Custom animation for brutes
    const animation = fighter.type === 'brute'
      ? typeof step.w !== 'undefined' ? weapons[WeaponById[step.w]].animation || 'fist' : 'fist'
      : 'attack';
    const hitTriggered = this.seeking ? undefined : fighter.animation.waitForEvent(`${animation}:hit`);
    const animationEnded = this.seeking ? Promise.resolve() : fighter.animation.waitForEvent(`${animation}:end`);

    // Set animation to the correct hitting animation
    if (!this.seeking)
      fighter.animation.setAnimation(animation);

    // Wait for animation to hit
    await hitTriggered;

    // Get the correct x position in order to hit
    const hitRangeXPosition = fighter.team === 'L'
      ? target.animation.container.x - getHitDistance(fighter, target)
      : target.animation.container.x + getHitDistance(fighter, target);

    // If this position is ahead, leap to it
    if (fighter.team === 'L'
      ? hitRangeXPosition > fighter.animation.container.x
      : hitRangeXPosition < fighter.animation.container.x) {
      if (this.seeking) {
        fighter.animation.container.x = hitRangeXPosition;
      }
      else {
        await tween(fighter.animation.container, {
          x: hitRangeXPosition,
          duration: 0.1 / this.speed.current,
          ease: 'none',
        });
      }
    }

    animationEnded.then(() => {
      // Set animation to `idle`
      fighter.animation.setAnimation('idle', 0, this.seeking);
    }).catch(console.error);

    // Handle shield breaking
    // Necessary since dropShield was added later
    // TODO: Remove on release
    if (step.b) {
      target.animation.shield = false;

      if (!this.seeking) {
        const spritesheet = this.spritesheets.misc;
        // Create trashed shield sprite
        const trashedShield = new Sprite(spritesheet.textures['shield.png']);

        trashedShield.filters = [new BevelFilter()];
        trashedShield.zIndex = 1;

        // Anchor to left center
        trashedShield.anchor.set(0, 0.5);

        // Set position
        trashedShield.position.set(
          target.team === 'L'
            ? target.animation.container.x + target.animation.baseWidth * 0.25
            : target.animation.container.x + target.animation.baseWidth * 0.25,
          target.animation.container.y - target.animation.baseHeight * 0.4,
        );

        // Set angle
        trashedShield.angle = target.team === 'L' ? -110 : 70;

        // Add to stage
        this.app.stage.addChild(getFightClock().transient(trashedShield));

        // Animate the fall
        tween(trashedShield, {
          duration: 0.3 / this.speed.current,
          ease: 'none',
          x: target.team === 'L'
            ? trashedShield.x - 20
            : trashedShield.x + 20,
          y: trashedShield.y + 50,
          angle: target.team === 'L' ? -180 : 0,
        }).then(() => {
          // Wait a bit
          return fightDelay(0.5 / this.speed.current).then(() => {
            // Decrease opacity
            tween(trashedShield, {
              duration: 0.5 / this.speed.current,
              ease: 'none',
              alpha: 0,
            }).then(() => {
              // Remove from stage
              this.app.stage.removeChild(trashedShield);
            }).catch(console.error);
          });
        }).catch(console.error);
      }
    }
  }

  async block(step: BlockStep) {
    const fighter = findFighter(this.fighters, step.f);
    const animationsEnded: Promise<void>[] = [];

    if (!this.seeking) {
      animationsEnded.push(fighter.animation.waitForEvent('block:end'));

      // Set animation to `block` (start at frame 3)
      fighter.animation.setAnimation('block', 3);
    }

    // Slight knockBack
    animationsEnded.push(this.knockBack(fighter, 9, 0.25));

    if (!this.seeking) {
      // Dust cloud from the knockBack slowdown
      this.playDustEffect(fighter, 14);

      // Play block SFX
      void sound.play('sfx', { sprite: `block${randomBetween(1, 4)}` });
    }

    // Wait for animation to complete
    await Promise.all(animationsEnded);

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  getBombDamage(damage: BombStep['d'], target: AnimationFighter) {
    const targetDamage = damage[target.index];

    if (typeof targetDamage !== 'number') {
      throw new Error('Target damage not found');
    }

    return targetDamage;
  }

  async bomb(step: BombStep) {
    const fighter = findFighter(this.fighters, step.f);

    // Set animation to `launch`
    fighter.animation.setAnimation('launch', 0, this.seeking);

    // Play launch SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'net' });
    }

    this.skillUse(fighter, SkillId.bomb);

    if (!this.seeking) {
      const spritesheet = this.spritesheets.misc;
      // Create bomb sprite
      const bombSprite = fightSprite(spritesheet.animations.bomb);

      bombSprite.animationSpeed = this.speed.current / 2;
      bombSprite.loop = true;

      // Set bomb sprite position
      bombSprite.position.set(
        fighter.team === 'L'
          ? fighter.animation.container.x + fighter.animation.baseWidth / 2
          : fighter.animation.container.x - fighter.animation.baseWidth / 2,
        fighter.animation.container.y - fighter.animation.baseHeight / 2,
      );

      // Get target position
      const targetPosition = {
        x: fighter.team === 'L' ? this.app.screen.width - 100 : 100,
        y: this.app.screen.height * 0.75,
      };

      // Add bomb sprite to stage
      this.app.stage.addChild(bombSprite);

      // Play bomb
      bombSprite.play();

      const animations: Promise<unknown>[] = [];

      // Move bomb horizontally
      animations.push(tween(bombSprite, {
        duration: 0.5 / this.speed.current,
        x: targetPosition.x,
        ease: 'none',
      }));

      // Move bomb vertically
      animations.push(new Promise((resolve) => {
        // Move up
        tween(bombSprite, {
          duration: 0.25 / this.speed.current,
          ease: 'circ.out',
          y: targetPosition.y - 100,
        }).then(() => {
          // Move down
          tween(bombSprite, {
            duration: 0.25 / this.speed.current,
            ease: 'circ.in',
            y: targetPosition.y,
          }).then(resolve).catch(console.error);
        }).catch(console.error);
      }));

      // Wait for animations to complete
      await Promise.all(animations);

      // Remove bomb sprite
      bombSprite.destroy();

      // Create explosion sprite
      const explosionSprite = fightSprite(spritesheet.animations.explosion);

      explosionSprite.animationSpeed = this.speed.current;
      explosionSprite.loop = false;
      explosionSprite.filters = [new BlurFilter({ strength: 3 })];
      explosionSprite.width *= 2;
      explosionSprite.height *= 2;

      // Set explosion sprite position
      explosionSprite.x = targetPosition.x;
      explosionSprite.y = targetPosition.y;
      explosionSprite.zIndex = targetPosition.y;

      // Add explosion sprite to stage
      this.app.stage.addChild(explosionSprite);

      // Delete explosion sprite when animation is complete
      explosionSprite.onComplete = () => {
        explosionSprite.destroy();
      };

      // Play explosion
      explosionSprite.play();
    }

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);

    // Play bomb SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'bomb' });
    }

    // Get targets
    const targets = step.t.map((t) => findFighter(this.fighters, t));
    // Shake stage 8px 350ms
    const staggers = this.seeking ? [] : [shakeStage(this.app, this.speed, 8, 350)];

    for (const target of targets) {
      // Wake up target
      target.stunned = false;

      // Untrap target
      this.untrap(target);

      // Get damage
      const damage = this.getBombDamage(step.d, target);
      // Get hit animation (random for male brute)
      const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
        ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
        : 'hit';

      // Set animation to the correct hit animation
      target.animation.setAnimation(animation, 0, this.seeking);

      if (!this.seeking) {
        displayDamage({ app: this.app, target, damage, speed: this.speed });
      }

      // Play the resist animation now
      this.playResistAnimation(target);

      // Update HP bar
      this.updateHp(target, -damage);

      // Stagger
      staggers.push(this.stagger(target)
        .then(() => {
          if (this.seeking || target.animation.animation.startsWith('hit')) {
            // Set animation to normal
            target.animation.setAnimation(
              target.stunned ? 'death' : 'idle',
              0,
              this.seeking,
            );
          }
        }));
    }

    // Wait for staggers to complete
    await Promise.all(staggers);
  }

  death(step: DeathStep) {
    const fighter = findFighter(this.fighters, step.f);

    fighter.dead = true;

    if (this.isClanWar) fighter.animation.seekPose.visible = false;

    const animationEnded = this.seeking ? undefined : fighter.animation.waitForEvent('death:drop');

    // Set animation to `death`
    fighter.animation.setAnimation('death', 0, this.seeking);

    if (!this.seeking) {
      // Fade out shadow
      const deathShadowAlpha = getFighterType(fighter) === 'brute' ? 0.8 : 0;
      const fadeOutDuration = getFighterType(fighter) === 'brute' ? 1 : 0.4;

      tween(fighter.animation.shadow, {
        alpha: deathShadowAlpha,
        duration: fadeOutDuration / this.speed.current,
        ease: 'none',
      });

      // If brute, also decrease shadow size
      if (getFighterType(fighter) === 'brute') {
        tween(fighter.animation.shadow.scale, {
          x: 0.65,
          y: 0.7,
          duration: fadeOutDuration / this.speed.current,
          ease: 'none',
        });
      }

      // Wait for animation to end
      animationEnded?.then(() => {
        // Decrease opacity in clan wars
        if (this.isClanWar) {
          // Decrease opacity
          tween(fighter.animation.container, {
            alpha: 0,
            duration: 0.5 / this.speed.current,
            ease: 'none',
          });
        }
      }).catch(console.error);
    }
  }

  disarm(step: DisarmStep) {
    const target = findFighter(this.fighters, step.t);

    if (!this.seeking) {
      const waveSpritesheet = this.spritesheets.misc;
      // Create wave sprite
      const waveSprite = fightSprite(waveSpritesheet.animations.wave);

      waveSprite.animationSpeed = this.speed.current;
      waveSprite.loop = false;

      // Center sprite on the hand of target
      waveSprite.anchor.set(0.5, 0.5);
      waveSprite.zIndex = target.animation.container.zIndex + 1;
      waveSprite.position.set(
        target.team === 'L'
          ? target.animation.container.x + target.animation.baseWidth * 0.25
          : target.animation.container.x - target.animation.baseWidth * 0.25,
        target.animation.container.y - target.animation.baseHeight * 0.5,
      );

      // Add wave sprite to stage
      this.app.stage.addChild(waveSprite);

      // Delete sprite when animation is complete
      waveSprite.onComplete = () => {
        waveSprite.destroy();
      };

      // Play wave
      waveSprite.play();
    }

    // Remove weapon from opponent
    target.animation.weapon = null;

    if (!this.seeking) {
      // Drop item
      this.itemDrop(target, step.w);
    }
  }

  dropShield(step: DropShieldStep) {
    const target = findFighter(this.fighters, step.b);

    target.animation.shield = false;

    if (!this.seeking) {
      // position middle of target
      const initialPosition = {
        x: target.animation.container.x,
        y: target.animation.container.y - target.animation.baseHeight * 0.25
      };
      // velocity 9 back 7 up
      const initialVelocity = { x: 9, y: -7 };

      // Drop shield
      this.itemDrop(target, 'shield', { initialPosition, initialVelocity });
    }
  }

  async eat(step: EatStep) {
    const brute = findFighter(this.fighters, step.b);
    const pet = findFighter(this.fighters, step.t);

    const animationEnded = this.seeking ? undefined : brute.animation.waitForEvent('eat:end');

    // Set brute animation to `eat`
    brute.animation.setAnimation('eat', 0, this.seeking);

    // Resize pet to 0 in 0.5s
    pet.animation.seekPose.visible = false;

    if (!this.seeking) {
      tween(pet.animation.container.scale, {
        duration: 0.5 / this.speed.current,
        ease: 'none',
        x: 0,
        y: 0,
      });

      // Play eat SFX
      void sound.play('sfx', { sprite: `tamer${randomBetween(1, 2)}` });
    }

    this.skillUse(brute, SkillId.tamer);

    if (!this.seeking) {
      displayHeal(this.app, brute, step.h, this.speed);
    }

    // Wait for animation to complete
    if (!this.seeking) {
      await animationEnded;
    }

    // Heal brute
    this.updateHp(brute, step.h);

    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  end(step: EndStep) {
    const winner = findFighter(this.fighters, step.w);

    // Get team
    const team = this.fighters.filter((fighter) => fighter.team === winner.team);

    team.forEach((fighter) => {
      // Untrap fighter
      this.untrap(fighter);

      // Set animation to `win`
      fighter.animation.setAnimation('win', 0, this.seeking);
    });
  }

  async equip(step: EquipStep) {
    const brute = findFighter(this.fighters, step.b);

    let animationEnded: Promise<void> | undefined;

    if (!this.seeking) {
      animationEnded = brute.animation.waitForEvent('equip:end');

      // Set animation to `equip`
      brute.animation.setAnimation('equip');
    }

    // Update available weapons
    this.updateWeapons(brute, step.w, 'remove');

    // Update active weapon
    brute.animation.weapon = WeaponById[step.w];

    if (!this.seeking) {
      // Play equip SFX
      void sound.play('sfx', { sprite: 'equip' });

      // Wait for animation to complete
      await animationEnded;
    }

    // Set animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async jumpBack(fighter: AnimationFighter, distance: number = 30, duration: number = 0.5) {
    // Sign the X backward movement and clamp it
    const setBack = getRealKnockBack(fighter, distance);
    const initialX = fighter.animation.container.x;

    if (!this.seeking) {
      // Set animation to `evade`
      fighter.animation.setAnimation('evade');

      // Play evade SFX
      void sound.play('sfx', { sprite: 'evade' });

      // Start airborn phase
      fighter.animation.setAirborn(true);

      // Store initial X position
      const jumpHeight = Math.min(80, fighter.animation.baseHeight * 0.5);
      const upAnimations: Promise<unknown>[] = [];

      // Add horizontal tweener
      upAnimations.push(tween(fighter.animation.container, {
        duration: (duration * 0.5) / this.speed.current,
        ease: 'none',
        x: initialX + setBack * 0.5,
      }));

      // Add a vertical tweener handling shadow
      upAnimations.push(airbornMove({
        fighter,
        speed: this.speed,
        duration: duration * 0.5,
        ease: Easing.easeTo,
        endPosition: { y: fighter.animation.container.y - jumpHeight },
      }));
      await Promise.all(upAnimations);

      const downAnimations: Promise<unknown>[] = [];

      // Add horizontal tween
      downAnimations.push(tween(fighter.animation.container, {
        duration: (duration * 0.5) / this.speed.current,
        ease: 'none',
        x: initialX + setBack,
      }));

      // Add a vertical tweener handling shadow
      downAnimations.push(airbornMove({
        fighter,
        speed: this.speed,
        duration: duration * 0.5,
        ease: Easing.easeFrom,
        endPosition: { y: fighter.animation.container.y + jumpHeight },
      }));

      await Promise.all(downAnimations);
    } else {
      // Directly set the final position if seeking
      fighter.animation.container.x = initialX + setBack;
    }

    // End airborn phase
    fighter.animation.setAirborn(false, this.seeking);

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  async evade(step: EvadeStep) {
    // Jump back
    await this.jumpBack(findFighter(this.fighters, step.f));
  }

  async flashFlood(step: HitStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    const startedWithAWeapon = fighter.animation.weapon !== null;
    const weapon = typeof step.w !== 'undefined' ? WeaponById[step.w] : WeaponName.lance;

    // Set animation to `throw`
    fighter.animation.setAnimation('throw', 0, this.seeking);

    // Shield throw
    if (step.s) {
      fighter.animation.shield = false;
    } else if (!startedWithAWeapon) {
      // Update current weapon
      fighter.animation.weapon = weapon;
    }

    // Get thrown item starting position
    const start = {
      x: fighter.team === 'L'
        ? fighter.animation.container.x + fighter.animation.baseWidth
        : fighter.animation.container.x,
      y: fighter.animation.container.y - fighter.animation.baseHeight * 0.5,
    };

    // Get end position (on ground if weapon, on head if shield)
    const end = step.s
      ? {
        x: target.team === 'L'
          ? target.animation.container.x - target.animation.baseWidth * 0.25
          : target.animation.container.x + target.animation.baseWidth * 0.25,
        y: target.animation.container.y - target.animation.baseHeight * 0.8,
      }
      : {
        x: target.team === 'L'
          ? target.animation.container.x - fighter.animation.baseWidth * 0.6
          : target.animation.container.x + fighter.animation.baseWidth * 0.6,
        y: target.animation.container.y + 5,
      };
    let flashFloodContainer: Container | undefined;
    let thrownItem: Sprite | undefined;

    if (!this.seeking) {
      // Create weapon and vfx

      // Create a container
      flashFloodContainer = new Container();
      flashFloodContainer.zIndex = target.animation.container.y - 1;
      flashFloodContainer.sortableChildren = true;

      thrownItem = new Sprite(step.s
        ? this.spritesheets.misc.textures['shield.png']
        : this.spritesheets.thrownWeapons.textures[`${weapon}.png`]);


      // Anchor to center
      thrownItem.anchor.set(1, 0.5);

      // Set position
      thrownItem.position.set(start.x, start.y);
      thrownItem.zIndex = 2;

      // Set rotation (from fighter and target positions)
      thrownItem.angle = (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;

      flashFloodContainer.addChild(thrownItem);
      this.app.stage.addChild(getFightClock().transient(flashFloodContainer));
    }

    // Remove Shield
    if (step.s) {
      fighter.animation.shield = false;
      // Remove Weapon
    } else {
      fighter.animation.weapon = null;

      if (!startedWithAWeapon) {
        this.updateWeapons(fighter, step.w, 'remove');
      }
    }

    if (!this.seeking && flashFloodContainer && thrownItem) {
      // Play throw SFX
      void sound.play('sfx', { sprite: 'flashFlood' });

      if (!step.s) {
        // Create flashFlood sprite
        const flashFloodSprite = fightSprite(this.spritesheets.misc.animations.flashFlood);

        flashFloodSprite.animationSpeed = this.speed.current * 0.35;
        flashFloodSprite.loop = false;
        flashFloodSprite.anchor.set(1, 0.5);
        flashFloodSprite.x = end.x - (start.x - end.x) * 0.1;
        flashFloodSprite.y = end.y - (start.y - end.y) * 0.1;
        flashFloodSprite.angle = thrownItem.angle;
        flashFloodSprite.zIndex = 1;

        // Add flashFlood sprite to stage
        flashFloodContainer.addChild(flashFloodSprite);

        // Destroy flashFlood sprite when animation ends
        flashFloodSprite.onComplete = () => {
          flashFloodSprite.destroy();
        };

        // Play flashFlood
        flashFloodSprite.play();
      }
    }

    const impact = async () => {
      // Wake up target
      target.stunned = false;

      // Untrap target
      this.untrap(target);

      // Get hit animation (random for male brute)
      const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
        ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
        : 'hit';

      // Set animation to the correct hit animation
      target.animation.setAnimation(animation, 0, this.seeking);

      if (!step.s) {
        if (!this.seeking) {
          // Display damage if weapon
          displayDamage(
            { app: this.app, target, damage: step.d, speed: this.speed, criticalHit: step.c },
          );
        }

        // Play the resist animation now
        this.playResistAnimation(target);

        // Update HP bar
        this.updateHp(target, -step.d);
      }
      else {
        // Stun target brute if shield
        if (target.type === 'brute')
          target.stunned = true;

        if (!this.seeking) {
          thrownItem?.destroy();

          // Drop shield (rebounds on target head)
          this.itemDrop(target, 'shield', { initialPosition: end, initialVelocity: { x: 9, y: -7 } });
        }
      }

      // Stagger, then set animation to death if stunned
      // Can't set to idle because this async process could cancel next animations

      const knockback = (step.s ? 0 : 18) + (step.c ? 12 : 0);

      await this.stagger(target, knockback, 0.1);

      // Playback must not reset a subsequent step's animation.
      if (this.seeking || (target.stunned && target.animation.animation !== 'death')) {
        // Check if not already death to avoid flickering
        target.animation.setAnimation(
          target.stunned ? 'death' : 'idle',
          0,
          this.seeking,
        );
      }

      if (!this.seeking && flashFloodContainer) {
        // Wait for 1s
        await fightDelay(1 / this.speed.current);

        // Fade out item
        await tween(flashFloodContainer, {
          duration: 1.5 / this.speed.current,
          ease: 'none',
          alpha: 0,
        });
        flashFloodContainer.destroy();
      }
    };

    if (this.seeking) {
      await impact();
    } else if (thrownItem) {
      tween(thrownItem, {
        duration: 0.1 / this.speed.current,
        ease: 'none',
        x: end.x,
        y: end.y,
      }).then(impact).catch(console.error);

      await fightDelay(0.3 / this.speed.current);
    }
  }

  async hammer(step: HitStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    const move = async (movingFighter: AnimationFighter, position: {
      x?: number;
      y?: number;
    }, duration: number) => {
      if (this.seeking) {
        Object.assign(movingFighter.animation.container, position);
      }
      else {
        await tween(movingFighter.animation.container, {
          ...position,
          duration: duration / this.speed.current,
          ease: 'none',
        });
      }
    };

    // Skill SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'hammer' });
    }

    // Wake up target
    target.stunned = false;

    // Untrap target
    this.untrap(target);

    fighter.animation.container.zIndex = target.animation.container.zIndex + 1;

    // Get signed and clamped push
    const pushDistance = getRealKnockBack(target, 30);

    // Push both
    const pushAnimations = [fighter, target].map((f) => move(f, {
      x: f.animation.container.x + pushDistance,
    }, 0.16));

    // Dust cloud
    if (!this.seeking) {
      this.playDustEffect(target, 22);
    }

    // Wait for both animations to finish
    await Promise.all(pushAnimations);

    // Start airborn phase
    fighter.animation.setAirborn(true, this.seeking);
    target.animation.setAirborn(true, this.seeking);

    // Handle fighters with base scale inverted (dog)
    const targetInitialScaleX = target.animation.container.scale.x;

    // Store start position
    const start = {
      x: fighter.animation.container.x,
      y: fighter.animation.container.y,
    };

    // Jump to the top of the screen
    const topY = fighter.animation.baseHeight * 0.2;

    // Jump duration depends on jump height
    const jumpDuration = 0.0032 * (fighter.animation.container.y - topY);

    // Jump both
    const jumpAnimations = [fighter, target].map((f) => airbornMove({
      fighter: f,
      duration: jumpDuration,
      speed: this.speed,
      ease: 'none',
      endPosition: { y: topY },
      seeking: this.seeking,
    }));

    // Max brute distance
    const bruteDistance = Math.abs(target.animation.container.x - start.x);

    // Store direction
    const direction = fighter.team === 'L' ? 1 : -1;

    // Get fighter current side relative to target
    let side = direction * (target.animation.container.x > fighter.animation.container.x ? -1 : 1);

    const changeSide = () => {
      side *= -1;

      // Turn fighters
      target.animation.container.scale.x = side * targetInitialScaleX;
      fighter.animation.container.scale.x = side;

      // zIndex fighters
      target.animation.container.zIndex = start.y - side;
      fighter.animation.container.zIndex = start.y + side;
    };

    changeSide();

    jumpAnimations.push(
      // First spin
      (async () => {
        await move(fighter, { x: target.animation.container.x }, jumpDuration / 6);
        changeSide();
        await move(fighter, {
          x: target.animation.container.x + bruteDistance * direction,
        }, jumpDuration / 6);

        // Second spin
        fighter.animation.setAnimation('grab', 0, this.seeking);
        target.animation.setAnimation('grabbed', 0, this.seeking);
        await move(fighter, { x: target.animation.container.x }, jumpDuration / 6);
        changeSide();
        await move(fighter, {
          x: target.animation.container.x - bruteDistance * direction,
        }, jumpDuration / 6);

        // Third spin
        await move(fighter, { x: target.animation.container.x }, jumpDuration / 6);
        changeSide();
        await move(fighter, {
          x: target.animation.container.x + bruteDistance * direction,
        }, jumpDuration / 6);
      })());

    // Wait for jump animations to finish
    await Promise.all(jumpAnimations);

    // Invert on y for the drop
    fighter.animation.container.scale.y = -1;
    target.animation.container.scale.y = -1;

    // Change their y as their y anchor is 0
    fighter.animation.container.y -= fighter.animation.baseHeight;
    target.animation.container.y -= target.animation.baseHeight;

    // Drop both
    const dropAnimations = [fighter, target].map((f) => move(f, {
      y: start.y - f.animation.baseHeight,
    }, jumpDuration * 0.38));

    if (!this.seeking) {
      // Special shadow handling as fighters are y inverted
      updateShadow(fighter, fighter.animation.container.y - start.y, 0.2);
      updateShadow(target, target.animation.container.y - start.y, 0.2);

      // Add a tweener for the fighter's shadow
      dropAnimations.push(tweenShadow({
        fighter,
        speed: this.speed,
        duration: jumpDuration * 0.38,
        ease: 'none',
        endAltitude: -fighter.animation.baseHeight,
      }));

      // Add a tweener for the target's shadow
      dropAnimations.push(tweenShadow({
        fighter: target,
        speed: this.speed,
        duration: jumpDuration * 0.38,
        ease: 'none',
        endAltitude: -target.animation.baseHeight,
      }));
    }

    // Wait for animations to finish
    await Promise.all(dropAnimations);

    // Reset fighters scale
    fighter.animation.container.scale.x = direction;
    fighter.animation.container.scale.y = 1;
    target.animation.container.scale.x = targetInitialScaleX;
    target.animation.container.scale.y = 1;

    // Reset y to match y inversion
    fighter.animation.container.y += fighter.animation.baseHeight;
    target.animation.container.y += target.animation.baseHeight;

    // Reset fighter x
    fighter.animation.container.x = start.x;

    // End airborn phase
    fighter.animation.setAirborn(false, this.seeking);
    target.animation.setAirborn(false, this.seeking);

    // Dust cloud on landing
    if (!this.seeking) {
      this.playDustEffect(target);
    }

    // Display damage
    if (!this.seeking) {
      displayDamage(
        { app: this.app, target, damage: step.d, speed: this.speed, criticalHit: step.c },
      );
    }

    // Play the resist animation now
    this.playResistAnimation(target);

    // Update HP bar
    this.updateHp(target, -step.d);

    // Get hit animation (random for male brute)
    const hitAnimation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';

    // Set animation to the correct hit animation
    target.animation.setAnimation(hitAnimation, 0, this.seeking);

    // Play hit effect on target
    if (!this.seeking) {
      this.playHitEffect(fighter, target);
    }

    // Stagger target
    const staggerEnded = this.stagger(
      target, step.c ? 12 : 0,
    ).then(() => {
      target.animation.setAnimation(
        target.stunned ? 'death' : 'idle',
        0,
        this.seeking,
      );
    });

    if (this.seeking) {
      await staggerEnded;
    } else {
      staggerEnded.catch(console.error);
    }
  }

  async haste(step: HasteStep) {
    const brute = findFighter(this.fighters, step.b);
    const target = findFighter(this.fighters, step.t);

    const move = async (x: number, y: number, duration: number) => {
      if (this.seeking) {
        brute.animation.container.x = x;
        brute.animation.container.y = y;
      }
      else {
        await tween(brute.animation.container, {
          duration: duration / this.speed.current,
          ease: 'none',
          x,
          y,
        });
      }
    };

    // Play skill SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'haste' });
    }

    this.skillUse(brute, SkillId.haste);

    let hasteFilters: Filter[] = [];

    if (!this.seeking) {
      const windUpEnded = brute.animation.waitForEvent('strengthen:end');

      // Set animation to `strenghten`
      brute.animation.setAnimation('strengthen');
      await windUpEnded;

      // Set animation to `run`
      brute.animation.setAnimation('run');

      // Initialise brute filters
      if (!brute.animation.container.filters) {
        brute.animation.container.filters = [];
      }

      hasteFilters = [
        // Yellowish color adjustment filter
        new AdjustmentFilter({ red: 2, green: 2 }),
        // Motion blur filter
        new MotionBlurFilter({
          velocity: [50, 0],
          kernelSize: 9,
        })
      ];

      // Add filters
      brute.animation.container.filters = brute.animation.container.filters.concat(hasteFilters);

      // Dust cloud on sprint start
      this.playDustEffect(brute);
    }

    // Move brute to target position
    await move(target.animation.container.x, target.animation.container.y, 0.2);

    if (!this.seeking) {
      // Remove haste filters
      brute.animation.container.filters = brute.animation.container.filters
        .filter((f) => !hasteFilters.includes(f));

      // Set run animation on the prettiest frame
      brute.animation.setAnimation('run', 2);

      // Hide brute's shadow
      brute.animation.shadow.visible = false;

      // Get brute texture
      const originalTexture = this.app.renderer.generateTexture(brute.animation.container);
      // Create sprite from it
      const sprite = new Sprite(originalTexture);
      const displayWidth = sprite.texture.width;
      // Extract pixels from the generated fighter texture.
      const {
        pixels, width: extractedWidth, height: extractedHeight,
      } = this.app.renderer.extract.pixels(sprite);
      const pixelCount = Math.floor(pixels.length / 4);
      let pixelWidth = Math.round(extractedWidth ?? 0);
      let pixelHeight = Math.round(extractedHeight ?? 0);

      if (pixelWidth <= 0 || pixelHeight <= 0 || pixelWidth * pixelHeight !== pixelCount) {
        const sourceWidth = Math.round(originalTexture.source.width);

        pixelWidth = Math.max(1, sourceWidth);
        pixelHeight = Math.max(1, Math.floor(pixelCount / pixelWidth));
      }

      if (pixelWidth * pixelHeight !== pixelCount) {
        pixelWidth = Math.max(1, Math.floor(Math.sqrt(pixelCount)));

        while (pixelWidth > 1 && pixelCount % pixelWidth !== 0)
          pixelWidth -= 1;

        pixelHeight = Math.max(1, Math.floor(pixelCount / pixelWidth));
      }

      // Create the ghost image, a gradient starting on fighter's outline
      // Alpha gradient state for current row
      let gradientStart = false;
      // Length of gradient in percent
      const gradientPart = 0.66;
      // Color of the ghost
      const ghostColor = {
        alpha: 225,
        red: 255,
        green: 225,
        blue: 100,
      };

      // Loop throught pixels
      for (let i = pixels.length - 4; i > 0; i -= 4) {
        // Current column
        const column = (i % (4 * pixelWidth)) / 4;
        // Current row's gradient delta per pixel
        const gradientDelta = Math.max(
          1,
          (ghostColor.alpha - Math.random() * 4) / (pixelWidth * gradientPart),
        );
        // Alpha gradient
        const gradient = ghostColor.alpha - gradientDelta * (pixelWidth * gradientPart - column);

        // New row
        if (column === 0)
          gradientStart = false;

        // Colors
        pixels[i] = ghostColor.red - Math.random() * 30;
        pixels[i + 1] = ghostColor.green + Math.random() * 30;
        pixels[i + 2] = ghostColor.blue + Math.random() * 30;

        // Start gradient on first opaque pixel
        if (!gradientStart && pixels[i + 3] === 255 && column < pixelWidth * gradientPart) {
          gradientStart = true;
        }

        // If gradient started, apply it
        if (gradientStart)
          pixels[i + 3] = Math.max(0, gradient);
        // Else min gradient and pixel's alpha
        else
          pixels[i + 3] = Math.min(pixels[i + 3] ?? 0, gradient);
      }

      // Build a canvas-backed texture source for Pixi v8 compatibility.
      const ghostCanvas = document.createElement('canvas');

      ghostCanvas.width = pixelWidth;
      ghostCanvas.height = pixelHeight;

      const ghostContext = ghostCanvas.getContext('2d');

      if (!ghostContext) {
        throw new Error('Could not create ghost canvas context');
      }

      const imageDataPixels = new Uint8ClampedArray(pixels.length);

      imageDataPixels.set(pixels);
      ghostContext.putImageData(
        new ImageData(imageDataPixels, pixelWidth, pixelHeight),
        0,
        0,
      );

      const ghostTexture = Texture.from(ghostCanvas);
      const ghost = new Sprite(ghostTexture);

      // Place ghost behind target
      ghost.position.set(
        brute.team === 'L'
          ? target.animation.container.x + 0.5 * brute.animation.baseWidth + displayWidth * 0.33
          : target.animation.container.x - 0.5 * brute.animation.baseWidth - displayWidth * 0.33,
        target.animation.container.y,
      );
      ghost.anchor.set(0.5, 1);
      ghost.scale = brute.animation.container.scale;
      ghost.zIndex = target.animation.container.zIndex + 1;

      // Add ghost to stage
      this.app.stage.addChild(getFightClock().transient(ghost));
      ghost.once('destroyed', () => {
        ghostTexture.destroy(true);
        originalTexture.destroy(true);
      });

      // Show brute's shadow
      brute.animation.shadow.visible = true;

      // Ghost fade out
      tween(ghost, {
        duration: 1.2 / this.speed.current,
        ease: 'none',
        alpha: 0,
      }).then(() => {
        // Remove from stage
        this.app.stage.removeChild(ghost);
        ghost.destroy();
      });

      // Re-apply haste filters
      brute.animation.container.filters = brute.animation.container.filters.concat(hasteFilters);

      // Play hit effect
      this.playHitEffect(brute, target);
    }

    // Wake up target
    target.stunned = false;

    // Untrap target
    this.untrap(target);

    // Get target hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';
    const animationEnded = this.seeking ? undefined : target.animation.waitForEvent(`${animation}:end`);

    // Set target animation to the correct hit animation
    target.animation.setAnimation(animation, 0, this.seeking);

    if (!this.seeking) {
      displayDamage(
        { app: this.app, target, damage: step.d, speed: this.speed, criticalHit: step.c },
      );
    }

    // Play the resist animation now
    this.playResistAnimation(target);

    // Update HP bar
    this.updateHp(target, -step.d);

    // Stagger
    const staggerEnded = this.stagger(target, step.c ? 12 : 0);

    if (this.seeking)
      await staggerEnded;
    else
      staggerEnded.catch(console.error);

    const resetTarget = () => {
      // Set target animation to normal
      target.animation.setAnimation(
        target.stunned ? 'death' : 'idle',
        0,
        this.seeking,
      );
    };

    if (this.seeking) {
      resetTarget();
    } else {
      animationEnded?.then(resetTarget).catch(console.error);
    }

    // Get position 200px away from target
    const targetX = target.animation.container.x + (target.team === 'L' ? -200 : 200);
    const targetY = target.animation.container.y;

    // Move brute to target position
    await move(targetX, targetY, 0.10);

    const { x, y } = getRandomPosition(this.fighters, brute);

    // Remove haste filters
    if (!this.seeking) {
      brute.animation.container.filters = brute.animation.container.filters
        ?.filter((f) => !hasteFilters.includes(f)) || [];
    }

    // Teleport brute outside of the screen
    brute.animation.container.x = (brute.team === 'L'
      ? -brute.animation.baseWidth * 2
      : this.app.screen.width + (brute.animation.baseWidth * 2));
    brute.animation.container.y = y;

    // Move brute to position
    await move(x, y, 0.5);

    // Set brute animation to normal
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async heal(step: HealStep) {
    const brute = findFighter(this.fighters, step.b);

    const animationEnded = this.seeking ? undefined : brute.animation.waitForEvent('drink:end');

    // Set animation to `drink`
    brute.animation.setAnimation('drink', 0, this.seeking);

    // Play heal SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'tragicPotion' });
    }

    this.skillUse(brute, SkillId.tragicPotion);

    if (!this.seeking) {
      displayHeal(this.app, brute, step.h, this.speed);
    }

    // Display floating and fading cure icon if brute was poison healed
    if (!this.seeking && step.c) {
      const spritesheet = this.spritesheets.misc;
      const cureIcon = new Sprite(spritesheet.textures['cure.png']);

      cureIcon.anchor.set(0.5);
      cureIcon.width = 30;
      cureIcon.height = 30;
      cureIcon.x = insideXBounds(brute.animation.container.x) - 35;
      cureIcon.y = brute.animation.container.y - brute.animation.container.height;
      cureIcon.zIndex = 1000;
      this.app.stage.addChild(getFightClock().transient(cureIcon));

      tween(cureIcon, {
        duration: 2 / this.speed.current,
        y: cureIcon.y - 100,
        ease: 'none',
        alpha: 0,
      }).then(() => {
        // Remove icon
        cureIcon.destroy();
      }).catch(console.error);
    }

    // Wait for animation to complete
    if (!this.seeking) {
      await animationEnded;
    }

    // Heal brute
    this.updateHp(brute, step.h);

    // Set animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async hit(step: HitStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    // Get hit animation (random for male brute)
    const animation: 'hit' | 'hit-0' | 'hit-1' | 'hit-2' = target.type === 'brute' && target.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}`
      : 'hit';
    const ownSideHit = isOwnSideHit(fighter, target);

    // Wake up target
    target.stunned = false;

    // Untrap target
    this.untrap(target);

    // Set animation to the correct hit animation
    target.animation.setAnimation(animation, 0, this.seeking);

    if (!this.seeking) {
      // Play hitting SFX
      if (step.a === StepType.Poison) {
        // Poison SFX
        void sound.play('sfx', { sprite: 'poison' });
      }
      else if (typeof step.w !== 'undefined') {
        // Weapon SFX
        void sound.play(
          'sfx',
          { sprite: `${WEAPONS_SFX[WeaponById[step.w]][randomBetween(0, WEAPONS_SFX[WeaponById[step.w]].length - 1)]}` },
        );
      }
      else if (fighter.type === 'pet') {
        // Sword SFX for pets
        void sound.play('sfx', { sprite: 'sword' });
      }
      else {
        // Fist SFX
        void sound.play('sfx', { sprite: `fist${randomBetween(1, 3)}` });
      }

      // Play hit SFX
      if (target.type === 'pet') {
        // Remove numbers from pet name
        void sound.play('sfx', { sprite: `${target.name.replace(/\d/g, '')}` });
      }
    }

    if (!this.seeking && step.a !== StepType.Poison) {
      this.playHitEffect(fighter, target);
    }

    // Add poison filter if damage is poison
    let poisonFilter: OutlineFilter | null = null;

    if (!this.seeking && step.a === StepType.Poison) {
      poisonFilter = new OutlineFilter(POISON_OUTLINE_FILTER_CONFIG);
      target.animation.container.filters = [
        ...target.animation.container.filters || [],
        poisonFilter,
      ];
    }

    if (!this.seeking) {
      displayDamage(
        { app: this.app, target, damage: step.d, speed: this.speed, criticalHit: step.c },
      );
    }

    // Play the resist animation now
    this.playResistAnimation(target);

    // Update HP bar
    this.updateHp(target, -step.d);

    // Stagger with knockBack
    await this.stagger(
      target,
      getHitKnockBack(fighter, target, step),
    );

    // Remove poison filter
    if (!this.seeking && step.a === StepType.Poison) {
      target.animation.container.filters = target.animation.container.filters
        ?.filter((filter) => filter !== poisonFilter) ?? [];
    }

    // Chaining
    if (step.s) {
      if (!this.seeking) {
        void sound.play('sfx', { sprite: 'chaining' });
      }

      target.stunned = true;
    }

    // Set animation to `death` if target is stunned
    if (target.stunned) {
      target.animation.setAnimation('death', 0, this.seeking);

      // Wait for 0.45s if this is a counter attack stun so it gets readable for the player
      if (!this.seeking && ownSideHit) {
        await fightDelay(0.45 / this.speed.current);
      }
    } else {
      // Set animation to `idle`
      target.animation.setAnimation('idle', 0, this.seeking);
    }
  }

  async hypnotise(step: HypnotiseStep) {
    const brute = findFighter(this.fighters, step.b);

    // Faster win animation speed for male brutes
    const animationSpeed = brute.gender === Gender.male ? 2 : 1;

    if (!this.seeking) {
      const handRaised = brute.animation.waitForEvent('win:hand-raised');

      brute.animation.animationSpeed = animationSpeed;

      // Set brute animation to `win` at frame 5
      brute.animation.setAnimation('win', 6 * animationSpeed);

      // Wait for the hand to be raised
      await handRaised;

      // Keep hand raised
      brute.animation.animationSpeed = 0;

      // Play hypnosis SFX
      void sound.play('sfx', { sprite: 'hypnosis' });
    }

    this.skillUse(brute, SkillId.hypnosis);

    if (!this.seeking) {
      await this.playHypnosisEffect();
    }

    for (const target of step.t) {
      // Get fighter brute and bosses
      const fighter = findFighter(this.fighters, target);

      fighter.animation.seekPose.hypnotised = true;

      if (!this.seeking) {
        if (!fighter.animation.container.filters) {
          fighter.animation.container.filters = [];
        }

        fighter.animation.container.filters = fighter.animation.container.filters
          .concat(new GlowFilter({
            distance: 10,
            outerStrength: 1,
            innerStrength: 0.5,
            color: 0xAD3C8F,
            quality: 0.05,
          }));
      }
    }

    const pets = step.p.map((petIndex) => {
      const pet = findFighter(this.fighters, petIndex);

      // Change pet team
      pet.team = brute.team;
      pet.master = brute.id;

      return pet;
    });

    // Get new random positions
    const newPositions = getMultipleRandomPosition(this.fighters, pets);

    // Move each pet to other team
    const animationsDone = [];

    for (const pet of pets) {
      // Get random position
      const position = newPositions.shift();

      if (!position) {
        throw new Error('No position found for pet');
      }

      const { x, y } = position;

      // Set pet animation to `run`
      if (!this.seeking)
        pet.animation.setAnimation('run');

      // Move pet to other team
      const movement = this.seeking
        ? Promise.resolve(Object.assign(pet.animation.container, { x, y, zIndex: y }))
        : tween(pet.animation.container, {
          duration: 0.5 / this.speed.current,
          ease: 'none',
          x, y
        });

      animationsDone.push(movement.then(() => {
        pet.animation.container.scale.x *= -1;

        // Set pet animation to `idle`
        pet.animation.setAnimation('idle', 0, this.seeking);
      }));
    }

    // Set animation speed to fast reverse
    if (!this.seeking) {
      brute.animation.animationSpeed = -animationSpeed * 2;

      // Add hand down to waited animations
      animationsDone.push(brute.animation.waitForEvent('win:start'));
    }

    // Wait for all animations to complete
    await Promise.all(animationsDone);

    // Set animation speed to normal
    if (!this.seeking) {
      brute.animation.animationSpeed = 1;
    }

    // Set animation to idle
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async leave(step: LeaveStep) {
    const fighter = findFighter(this.fighters, step.f);

    // Remove fighter from fighters
    this.fighters.splice(this.fighters.indexOf(fighter), 1);
    fighter.animation.seekPose.visible = false;

    const x = fighter.team === 'L' ? -100 : 600;


    if (!this.seeking) {
      // Set animation to `run`
      fighter.animation.setAnimation('run');

      // Invert fighter
      fighter.animation.container.scale.x *= -1;

      // Move fighter to the position
      const moveFighter = tween(fighter.animation.container, {
        duration: 0.5 / this.speed.current,
        ease: 'none',
        x,
      }).then(() => {
        // Retain the holder so a later rewind can restore it.
        fighter.animation.container.visible = false;
        fighter.animation.pause();
      });

      // Await if it is not a pet leaving
      if (fighter.type !== 'pet') {
        await moveFighter;
      }
    } else {
      fighter.animation.container.x = x;
    }
  }

  async moveBack(step: MoveBackStep, targetPosition?: {
    x: number;
    y: number;
  }) {
    const fighter = findFighter(this.fighters, step.f);

    // Get positions
    const { x, y } = targetPosition ?? getRandomPosition(this.fighters, fighter);

    const travelDistance = Math.hypot(
      x - fighter.animation.container.x, y - fighter.animation.container.y,
    );

    // No-op movement: skip animation/tween overhead.
    if (travelDistance < 1) {
      return;
    }

    // Set animation to `run`
    if (!this.seeking) {
      fighter.animation.setAnimation('run');
    }

    // Is fighter inversion needed ?
    const invertFighter = fighter.team === 'L'
      ? fighter.animation.container.x > x
      : fighter.animation.container.x < x;

    // Invert fighter if needed
    if (!this.seeking && invertFighter) {
      fighter.animation.container.scale.x *= -1;
    }

    // Travel duration depends on distance
    const duration = Math.max(0.15, travelDistance / 480);

    // Move fighter to the position
    if (this.seeking) {
      Object.assign(fighter.animation.container, { x, y, zIndex: y });
    } else {
      await tween(fighter.animation.container, {
        duration: duration / this.speed.current,
        ease: 'none',
        x,
        y
      });
    }

    // Invert fighter if needed
    if (!this.seeking && invertFighter) {
      fighter.animation.container.scale.x *= -1;
    }

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  async moveTo(step: MoveStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    // Filter the only moveTo case outside of neutral (melee repositioning)
    if (!step.r) {
      // Reposition mispositionned other fighters before moveTo
      await this.repositionFighters(fighter.id);
    }

    const distance = getHitDistance(fighter, target, !!step.c, !!step.s);
    // Get travel position
    const targetX = target.team === 'R'
      ? target.animation.container.x - distance
      : target.animation.container.x + distance;
    const targetY = target.animation.container.y;

    // Get travel distance
    const travelDistance = Math.hypot(
      targetX - fighter.animation.container.x,
      targetY - fighter.animation.container.y,
    );

    if (travelDistance < 1) {
      return;
    }

    // Set animation to `run`
    if (!this.seeking) {
      fighter.animation.setAnimation('run');
    }

    // Play running SFX
    if (!this.seeking && fighter.type === 'pet') {
      // Remove numbers from pet name
      void sound.play('sfx', { sprite: `${fighter.name.replace(/\d/g, '')}` });
    }

    // Travel duration depends on distance
    const duration = Math.max(0.16, travelDistance / 430);

    // Move fighter to the position
    if (this.seeking) {
      Object.assign(
        fighter.animation.container,
        { x: targetX, y: targetY, zIndex: targetY },
      );
    } else {
      await tween(fighter.animation.container, {
        duration: duration / this.speed.current,
        ease: 'none',
        x: targetX,
        y: targetY,
      });
    }

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  async regenerate(step: RegenerationStep) {
    const fighter = findFighter(this.fighters, step.f);

    if (!this.seeking) {
      displayHeal(this.app, fighter, step.h, this.speed);
    }

    // Heal brute
    this.updateHp(fighter, step.h);

    // Delay
    if (!this.seeking && step.d) {
      await fightDelay(0.5 / this.speed.current);
    }
  }

  resist(step: ResistStep) {
    const brute = findFighter(this.fighters, step.b);

    brute.resist = true;
  }

  playResistAnimation(brute: AnimationFighter) {
    // Abort if brute doesn't resist
    if (!brute.resist) return;

    brute.resist = false;

    if (this.seeking) return;

    const spritesheet = this.spritesheets.misc;

    // Create resist sprite
    const resistSprite = fightSprite(spritesheet.animations.resist);
    resistSprite.animationSpeed = this.speed.current * 0.4;
    resistSprite.loop = false;

    // Center resist sprite on brute's chest
    resistSprite.anchor.set(0.5, 0.5);
    resistSprite.zIndex = brute.animation.container.zIndex + 1;
    resistSprite.position.set(
      brute.animation.container.x + (brute.team === 'L' ? -10 : 10),
      brute.animation.container.y - brute.animation.baseHeight * 0.36,
    );

    // Add resist sprite to stage
    this.app.stage.addChild(resistSprite);

    // Delete resist sprite when animation is complete
    resistSprite.onComplete = () => {
      resistSprite.destroy();
    };

    // Play resist
    resistSprite.play();
  }

  sabotage(step: SabotageStep) {
    const target = findFighter(this.fighters, step.t);

    if (!this.seeking) {
      // Weapon position
      const initialPosition = {
        x: target.animation.container.x,
        y: target.animation.container.y - target.animation.baseHeight * 0.4,
      };

      // Weapon velocity
      const initialVelocity = {
        x: 3 + Math.random() * 2,
        y: -3,
      };

      // Drop broken weapon
      this.itemDrop(target, step.w, { initialPosition, initialVelocity, broken: true });
    }

    // Update weapon list
    this.updateWeapons(target, step.w, 'remove');
  }

  async saboteur(step: SaboteurStep) {
    const brute = findFighter(this.fighters, step.b);

    const animation = !this.seeking && brute.gender === 'male'
      ? `hit-${randomBetween(0, 2) as 0 | 1 | 2}` as const
      : 'hit' as const;
    let animationEnded = Promise.resolve();

    if (!this.seeking) {
      animationEnded = brute.animation.waitForEvent(`${animation}:end`);
    }

    animationEnded.then(() => {
      // Set animation to `idle`
      brute.animation.setAnimation('idle', 0, this.seeking);
    }).catch(console.error);

    if (!this.seeking) {
      // Set animation to `hit`
      brute.animation.setAnimation(animation);

      // Play saboteur SFX
      void sound.play('sfx', { sprite: 'saboteur' });
    }

    // Stagger animation
    const staggerVfx = this.stagger(brute);

    // Update active weapon
    brute.animation.weapon = null;

    if (!this.seeking) {
      // Weapon position
      const initialPosition = {
        x: brute.animation.container.x,
        y: brute.animation.container.y - brute.animation.baseHeight * 0.6,
      };
      // Weapon velocity
      const initialVelocity = {
        x: 2,
        y: -3,
      };

      // Drop saboteur weapon
      this.itemDrop(brute, step.w, { initialPosition, initialVelocity, saboteur: true });
    }

    // Wait for stagger
    await staggerVfx;
  }

  skillUse(brute: AnimationFighter, skillId: SkillId) {
    if (!this.seeking) {
      const skillSprite = brute.teamSkillsIllustrations.find(
        (illustration) => illustration.label === skillId.toString(),
      );

      if (!skillSprite) {
        console.error('Skill sprite not found for skill', skillId);

        return;
      }

      // Create a 3x copy of the skill sprite
      const skillCopy = new Sprite(skillSprite.texture);

      skillCopy.scale.x = skillSprite.scale.x * 3;
      skillCopy.scale.y = skillSprite.scale.y * 3;
      skillCopy.zIndex = 1000;

      // Center it on the original skill sprite
      const originalWidth = skillSprite.width;
      const originalHeight = skillSprite.height;
      const copyWidth = originalWidth * 3;
      const copyHeight = originalHeight * 3;

      skillCopy.x = skillSprite.x - (copyWidth - originalWidth) / 2;
      skillCopy.y = skillSprite.y - (copyHeight - originalHeight) / 2;

      // Add to stage
      this.app.stage.addChild(getFightClock().transient(skillCopy));

      // Animate: float up and fade out
      tween(skillCopy, {
        duration: 3 / this.speed.current,
        ease: Easing.easeOutQuad,
        y: skillCopy.y - 30,
        alpha: 0,
      }).then(() => {
        // Remove the copy after animation
        skillCopy.destroy();
      }).catch(console.error);
    }

    // Remove one use
    if (consumeSkillUse(brute, skillId) && !this.seeking) {
      this.updateSkills(brute);
    }
  }

  private startFierceBruteEffect(fighter: AnimationFighter) {
    this.fierceBruteEffects ??= new Map();
    this.fierceBruteEffects.get(fighter)?.destroy();
    this.fierceBruteEffects.set(fighter, new FierceBruteEffect(
      this.app, fighter, this.speed, () => this.reversing, this.shouldAbort,
    ));
  }

  private clearFierceBruteEffects() {
    for (const effect of this.fierceBruteEffects?.values() ?? []) effect.destroy();
    this.fierceBruteEffects?.clear();
  }

  async skillActivate(step: SkillActivateStep) {
    const brute = findFighter(this.fighters, step.b);

    // Filter the only activation case outside of neutral (wake up cry)
    if (step.s !== SkillId.cryOfTheDamned || !brute.stunned) {
      // Reposition mispositionned fighters before skillActivate
      await this.repositionFighters(undefined);
    }

    // Play skill SFX
    if (!this.seeking && [SkillId.cryOfTheDamned, SkillId.fierceBrute].includes(step.s)) {
      void sound.play('sfx', { sprite: `${SkillById[step.s]}` });
    }

    this.skillUse(brute, step.s);

    if ([SkillId.cryOfTheDamned, SkillId.fierceBrute, SkillId.hammer].includes(step.s)) {
      let animationEnded = Promise.resolve();

      if (!this.seeking) {
        animationEnded = brute.animation.waitForEvent('strengthen:end');

        // Set animation to `strenghten`
        brute.animation.setAnimation('strengthen');
      }

      if (step.s === SkillId.fierceBrute) {
        brute.fierceBrute = true;

        if (!this.seeking) this.startFierceBruteEffect(brute);
      }

      const animations = [];

      // Strengthen animation
      animations.push(new Promise((resolve) => {
        animationEnded.then(() => {
          // Set animation to `idle`
          brute.animation.setAnimation('idle', 0, this.seeking);
          resolve(null);
        }).catch((err) => {
          console.error(err);
        });
      }));

      if (!this.seeking && step.s === SkillId.cryOfTheDamned) {
        const spritesheet = this.spritesheets.misc;

        // Create 3 cries
        for (let i = 0; i < 3; i++) {
          const cry = fightSprite(spritesheet.animations.cry);

          cry.animationSpeed = this.speed.current;
          cry.zIndex = 1000;
          cry.alpha = 0;

          // Set cry position
          cry.position.set(
            brute.animation.container.x + (i % 2) * 20,
            brute.animation.container.y - brute.animation.baseHeight / 2 + i * 20,
          );

          // Add cry to stage
          this.app.stage.addChild(cry);

          // Play cry animation
          cry.play();

          // Fade in cry
          tween(cry, {
            duration: 0.25 / this.speed.current,
            ease: 'none',
            alpha: 1,
          }).catch(console.error);

          // Move cry horizontally
          tween(cry, {
            duration: 1 / this.speed.current,
            ease: 'none',
            x: brute.team === 'L' ? cry.x + 100 : cry.x - 100,
          }).then(() => {
            // Destroy cry
            cry.destroy();
          }).catch(console.error);
        }
      }

      // Stagger remaining pets
      // Don't do it if brute is stunned as it would cancel a pet's moveBack
      if (step.p && !brute.stunned) {
        for (const petIndex of step.p) {
          // Get pet
          const pet = findFighter(this.fighters, petIndex);

          animations.push(this.stagger(pet));
        }
      }

      if (brute.stunned) {
        // If brute is stunned, it means it is repulsing the opponent
        // in this case the animation must be played while opponent runs away
        brute.stunned = false;
        void Promise.all(animations);
      } else {
        // Else, wait for animations to complete
        await Promise.all(animations);
      }
    }

    // Flash flood
    if (step.s === SkillId.flashFlood) {
      // Set brute animation to `evade`
      brute.animation.setAnimation('evade', 0, this.seeking);

      // Start airborn phase
      brute.animation.setAirborn(true, this.seeking);

      // Dust cloud on takeof
      if (!this.seeking) {
        this.playDustEffect(brute);
      }

      const arenaCenterX = this.seeking ? 250 : this.app.screen.width / 2;

      // Move brute to upper middle
      await airbornMove({
        fighter: brute,
        speed: this.speed,
        duration: 0.4,
        ease: Easing.easeOutCubic,
        endPosition: {
          y: 100,
          x: brute.team === 'L'
            ? arenaCenterX - brute.animation.baseWidth / 2
            : arenaCenterX + brute.animation.baseWidth / 2,
        },
        seeking: this.seeking,
      });

      // Make sure brute is on front
      brute.animation.container.zIndex = 1000;
    }
  }

  async skillExpire(step: SkillExpireStep) {
    const fighter = findFighter(this.fighters, step.b || step.f || 0);

    if (step.s === SkillId.fierceBrute) {
      // End fierceBrute
      fighter.fierceBrute = false;
      if (!this.seeking) {
        this.fierceBruteEffects?.get(fighter)?.destroy();
        this.fierceBruteEffects?.delete(fighter);
      }
    }

    // Handle self untrap / wake up
    if (step.s === SkillId.net || step.s === SkillId.chaining) {
      // Untrap target
      this.untrap(fighter);

      // Wake up
      fighter.stunned = false;

      // Play strenghten anim if brute
      if (!this.seeking && fighter.type === 'brute') {
        const animationEnded = fighter.animation.waitForEvent('strengthen:end');

        // Set animation to `strenghten`
        fighter.animation.setAnimation('strengthen');
        await animationEnded;
      }

      fighter.animation.setAnimation('idle', 0, this.seeking);
    }

    // Hypnosis aura fade out
    if (step.s === SkillId.hypnosis) {
      fighter.animation.seekPose.hypnotised = false;

      if (!this.seeking) {
        // Get hypnosis Glowfilter
        const glowFilter = fighter.animation.container.filters
          ?.find((filter) => filter instanceof GlowFilter) as GlowFilter | undefined;

        if (glowFilter) {
          let { outerStrength, innerStrength } = glowFilter;
          const fadeOut = () => {
            if (this.reversing) return;

            if (!fighter.animation.container.filters?.includes(glowFilter)) {
              this.app.ticker.remove(fadeOut);

              return;
            }

            outerStrength -= 0.1;
            innerStrength -= 0.1;

            if (outerStrength <= 0 && innerStrength <= 0) {
              // Remove Glow filter when faded
              fighter.animation.container.filters = fighter.animation.container.filters
                ?.filter((filter) => !(filter instanceof GlowFilter)) || [];
              this.app.ticker.remove(fadeOut);
            }
            else {
              glowFilter.outerStrength = outerStrength;
              glowFilter.innerStrength = innerStrength;
            }
          };

          this.app.ticker.add(fadeOut);
        }
      }
    }

    // Flash flood
    if (step.s === SkillId.flashFlood) {
      if (!this.seeking) {
        // Set brute animation to `arrive`
        fighter.animation.once('arrive:start', () => {
          fighter.animation.pause();
        });
        fighter.animation.setAnimation('arrive');
      }

      // Get positions
      const { x, y } = getRandomPosition(this.fighters, fighter);

      // Set zIndex
      fighter.animation.container.zIndex = y;

      // Move brute back
      await airbornMove({
        fighter,
        speed: this.speed,
        duration: 0.4,
        ease: Easing.easeInCubic,
        endPosition: { x, y, zIndex: y },
        seeking: this.seeking,
      });

      // End airborn phase
      fighter.animation.setAirborn(false, this.seeking);

      if (!this.seeking) {
        // Dust cloud on landing
        this.playDustEffect(fighter);

        const animationEnded = fighter.animation.waitForEvent('arrive:end');

        // Continue brute animation
        fighter.animation.play();

        // Wait for animation to end before going further
        await animationEnded;
      }

      // Set animation to `idle`
      fighter.animation.setAnimation('idle', 0, this.seeking);
    }

    // Hammer
    if (step.s === SkillId.hammer) {
      // Jump back from impact
      await this.jumpBack(fighter, 110, 0.33);
    }
  }

  async spy(step: SpyStep) {
    const brute = findFighter(this.fighters, step.b);
    const opponent = findFighter(this.fighters, step.t);
    const animations: Promise<unknown>[] = [];

    // Play steal SFX
    if (!this.seeking) {
      void sound.play('sfx', { sprite: 'spy' });
    }

    // Give brute weapons to opponent
    const newOpponentWeapons: Partial<Record<WeaponId, number>> = {};

    for (const weaponToSwap of step.s) {
      const tier = brute.weapons[weaponToSwap];

      if (!tier) {
        throw new Error(`Weapon not found: ${weaponToSwap}`);
      }

      // Remove weapon from brute
      delete brute.weapons[weaponToSwap];

      // Add weapon to opponent
      newOpponentWeapons[weaponToSwap] = tier;

      if (!this.seeking) {
        const illustrationIndex = brute.teamWeaponsIllustrations
          .findIndex((w) => (+w.label as WeaponId) === weaponToSwap);

        if (illustrationIndex === -1) {
          throw new Error('Weapon illustration not found');
        }

        // Remove weapon illustration from brute
        const [weaponIllustration] = brute.teamWeaponsIllustrations.splice(illustrationIndex, 1);

        if (!weaponIllustration) {
          throw new Error('Weapon illustration not found');
        }

        opponent.teamWeaponsIllustrations.push(weaponIllustration);
      }
    }

    // Give opponent weapons to brute
    for (const weaponToSwap of step.r) {
      const weapon = opponent.weapons[weaponToSwap];

      if (!weapon) {
        throw new Error(`Weapon not found: ${weaponToSwap}`);
      }

      // Remove weapon from opponent
      delete opponent.weapons[weaponToSwap];

      // Add weapon to brute
      brute.weapons[weaponToSwap] = weapon;

      if (!this.seeking) {
        const illustrationIndex = opponent.teamWeaponsIllustrations
          .findIndex((w) => (+w.label as WeaponId) === weaponToSwap);

        if (illustrationIndex === -1) {
          throw new Error('Weapon illustration not found');
        }

        // Remove weapon illustration from opponent
        const [weaponIllustration] = opponent.teamWeaponsIllustrations.splice(illustrationIndex, 1);

        if (!weaponIllustration) {
          throw new Error('Weapon illustration not found');
        }

        brute.teamWeaponsIllustrations.push(weaponIllustration);
      }
    }

    // Add opponent's new weapons to his list
    Object.entries(newOpponentWeapons).forEach(([w, tier]) => {
      opponent.weapons[+w as WeaponId] = tier;
    });

    if (!this.seeking) {
      // Sort weapons
      brute.teamWeaponsIllustrations.sort((a, b) => +a.label - +b.label);
      opponent.teamWeaponsIllustrations.sort((a, b) => +a.label - +b.label);

      // Swap weapon illustrations
      [brute.teamWeaponsIllustrations, opponent.teamWeaponsIllustrations]
        .forEach((teamWeaponsIllustrations, index) => {
          const fighter = index === 0 ? opponent : brute;

          teamWeaponsIllustrations
            .forEach((weapon, i) => {
              // Get random duration
              const duration = 1 + randomBetween(1, 10) / 10;
              // Get target position
              const targetPosition = {
                x: fighter.team === 'R'
                  ? (i % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60
                  : 480 - ((i % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60),
                y: Math.floor(i / WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 40,
              };

              // Move weapon horizontally
              animations.push(tween(weapon, {
                duration: duration / this.speed.current,
                ease: 'none',
                x: targetPosition.x,
              }));

              // Move weapon vertically
              animations.push(new Promise((resolve) => {
                // First arc
                tween(weapon, {
                  duration: (duration / 2) / this.speed.current,
                  ease: 'circ.out',
                  y: targetPosition.y + randomBetween(-100, 100),
                }).then(() => {
                  // Second arc
                  tween(weapon, {
                    duration: (duration / 2) / this.speed.current,
                    ease: 'circ.in',
                    y: targetPosition.y,
                  }).then(resolve).catch(console.error);
                }).catch(console.error);
              }));
            });
        });

      // Wait for animations to complete
      await Promise.all(animations);
    }
  }

  async steal(step: StealStep) {
    const brute = findFighter(this.fighters, step.b);
    const target = findFighter(this.fighters, step.t);

    let animationEnded: Promise<void> | undefined;

    if (!this.seeking) {
      // Set brute animation to `evade`
      brute.animation.setAnimation('evade');

      // Start airborn phase
      brute.animation.setAirborn(true);

      const start = {
        x: brute.animation.container.x,
        y: brute.animation.container.y,
      };
      const end = {
        x: target.animation.container.x,
        y: target.animation.container.y - FIGHTER_HEIGHT.brute / 2,
      };

      // Jump first phase
      await airbornMove({
        fighter: brute,
        speed: this.speed,
        duration: 0.15,
        ease: Easing.easeInQuad,
        endPosition: {
          y: (start.y + end.y) * 0.5 - 30,
          x: (start.x + end.x) * 0.5,
          zIndex: target.animation.container.zIndex - 1,
        },
      });

      // Jump second phase
      await airbornMove({
        fighter: brute,
        speed: this.speed,
        duration: 0.15,
        ease: 'none',
        endPosition: {
          x: end.x,
          y: end.y,
          zIndex: target.animation.container.zIndex - 1,
        },
      });

      // Reverse brute
      brute.animation.container.scale.x *= -1;

      // Set brute animation to `steal`
      brute.animation.setAnimation('steal');

      // Play steal SFX
      void sound.play('sfx', { sprite: 'thief' });
    }

    this.skillUse(brute, SkillId.thief);

    if (!this.seeking) {
      animationEnded = target.animation.waitForEvent('stolen:end');

      // Set target animation to `stolen`
      target.animation.setAnimation('stolen');

      // Wait for animation to finish
      await animationEnded;
    }

    // Update target current weapon
    target.animation.weapon = null;

    // Update brute weapons
    brute.animation.weapon = WeaponById[step.w];

    // Wake up target
    target.stunned = false;

    // Set target animation to idle
    target.animation.setAnimation('idle', 0, this.seeking);

    // Set brute animation to `evade`
    if (!this.seeking) {
      brute.animation.setAnimation('evade');
    }

    const { x, y } = getRandomPosition(this.fighters, brute);

    if (!this.seeking) {
      // Jump first phase
      await airbornMove({
        fighter: brute,
        speed: this.speed,
        duration: 0.15,
        ease: Easing.easeInQuad,
        endPosition: {
          y: (brute.animation.container.y + y) * 0.5 - 30,
          x: (brute.animation.container.x + x) * 0.5,
          zIndex: y,
        },
      });
    }

    // Jump second phase
    await airbornMove({
      fighter: brute,
      speed: this.speed,
      duration: 0.15,
      ease: 'none',
      endPosition: {
        x,
        y,
        zIndex: y,
      },
      seeking: this.seeking,
    });

    // End airborn phase
    brute.animation.setAirborn(false, this.seeking);

    // Restore scale
    if (!this.seeking) {
      brute.animation.container.scale.x *= -1;
    }

    // Set brute animation to normal
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  survive(step: SurviveStep) {
    const brute = findFighter(this.fighters, step.b);

    // Ignore if clan war fight
    if (this.fight.clanWarId) {
      return;
    }

    // Set brute HP to 1
    this.updateHp(brute, 1, true);
  }

  async throwWeapon(step: ThrowStep) {
    const fighter = findFighter(this.fighters, step.f);
    const target = findFighter(this.fighters, step.t);

    // Weapon return
    if (step.r) {
      // Get correct animation
      const animation = fighter.type === 'brute'
        ? fighter.animation.weapon ? weapons[fighter.animation.weapon].animation : 'fist'
        : 'attack';

      // Set animation to the correct animation
      fighter.animation.setAnimation(animation, 0, this.seeking);
    } else {
      // Normal throw
      const prepareEnded = this.seeking ? undefined : fighter.animation.waitForEvent('prepare-throw:end');

      // Set animation to `prepare-throw`
      fighter.animation.setAnimation('prepare-throw', 0, this.seeking);

      // Wait for animation to finish
      if (!this.seeking) {
        await prepareEnded;
      }

      // Remove weapon from brute if needed
      if (!step.k) {
        fighter.animation.weapon = null;
      }

      // Set animation to `throw`
      fighter.animation.setAnimation('throw', 0, this.seeking);
    }

    // Infer weapon's weight on it's damage
    const weaponWeight = weapons[WeaponById[step.w]].damage[0];

    // Small self knockback
    void this.knockBack(fighter, weaponWeight * 0.25, 0.25);

    if (!this.seeking) {
      const spritesheet = this.spritesheets.thrownWeapons;
      // Create thrown weapon sprite
      const thrownWeapon = new Sprite(spritesheet.textures[`${WeaponById[step.w]}.png`]);

      // Anchor to left center
      thrownWeapon.anchor.set(0, 0.5);

      // Get starting position
      const start = {
        x: fighter.team === 'L'
          ? fighter.animation.container.x + fighter.animation.baseWidth
          : fighter.animation.container.x,
        y: fighter.animation.container.y - fighter.animation.baseHeight * 0.5,
      };
      // Get end position
      const end = {
        x: target.team === 'L'
          ? target.animation.container.x + target.animation.baseWidth
          : target.animation.container.x,
        y: target.animation.container.y - target.animation.baseHeight * 0.5,
      };

      // Set position
      thrownWeapon.position.set(start.x, start.y);

      // Set rotation (from fighter and opponent positions)
      thrownWeapon.angle = (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI;

      // Add to stage
      this.app.stage.addChild(getFightClock().transient(thrownWeapon));

      // Play throw SFX
      void sound.play('sfx', { sprite: 'net' });

      // Move thrown weapon
      await tween(thrownWeapon, {
        duration: 0.25 / this.speed.current,
        ease: 'none',
        x: end.x,
        y: end.y,
      });

      // Remove thrown weapon
      this.app.stage.removeChild(thrownWeapon);
      thrownWeapon.destroy();
    }

    // Set animation to `idle`
    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  async trap(step: TrapStep) {
    const brute = findFighter(this.fighters, step.b);
    const target = findFighter(this.fighters, step.t);

    if (!this.seeking) {
      // Set fighter animation to `launch`
      brute.animation.setAnimation('launch');

      // Play trap SFX
      void sound.play('sfx', { sprite: 'net' });
    }

    this.skillUse(brute, SkillId.net);

    if (!this.seeking) {
      const spritesheet = this.spritesheets.misc;
      // Create net sprite
      const net = new Sprite(spritesheet.textures['thrown-net.png']);

      net.anchor.set(0.5, 0.5);

      // Set net position
      net.position.set(
        brute.team === 'L'
          ? brute.animation.container.x + brute.animation.baseWidth / 2
          : brute.animation.container.x - brute.animation.baseWidth / 2,
        brute.animation.container.y - brute.animation.baseHeight / 2,
      );

      // Get target position
      const targetPosition = {
        x: target.animation.container.x,
        y: target.animation.container.y - target.animation.baseHeight,
      };

      // Set rotation (from brute and target positions)
      net.angle = (Math.atan2(targetPosition.y - net.y, targetPosition.x - net.x) * 180) / Math.PI;

      // Add net to stage
      this.app.stage.addChild(getFightClock().transient(net));

      const animations = [];

      // Move net horizontally
      animations.push(tween(net, {
        duration: 0.5 / this.speed.current,
        ease: 'none',
        x: targetPosition.x,
      }));

      // Move net vertically
      animations.push(new Promise((resolve) => {
        // Move up
        tween(net, {
          duration: 0.25 / this.speed.current,
          ease: 'circ.out',
          y: targetPosition.y - 120,
        }).then(() => {
          // Move down
          tween(net, {
            duration: 0.25 / this.speed.current,
            ease: 'circ.in',
            y: targetPosition.y,
          }).then(resolve).catch(console.error);
        }).catch(console.error);
      }));

      // Wait for animations to complete
      await Promise.all(animations);

      // Remove net from stage
      net.destroy();
    }

    // Set fighter animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);

    // Set target animation to `trapped`
    target.animation.setAnimation('trapped', 0, this.seeking);
    target.trapped = true;
  }

  async trash(step: TrashStep) {
    const brute = findFighter(this.fighters, step.b);
    const weaponName = brute.animation.weapon;

    if (!weaponName) {
      throw new Error('Brute has no weapon equipped');
    }

    let animationEnded: Promise<void> | undefined;

    if (!this.seeking) {
      const spritesheet = this.spritesheets.thrownWeapons;

      animationEnded = brute.animation.waitForEvent('trash:end');

      // Listen for `trash:trashed` event
      brute.animation.once(
        'trash:trashed',
        () => {
          // Infer weapon weight from it's damage
          const weaponWeight = weapons[weaponName].damage[0];

          // Lighter weapons are more likely to be trashed over head
          const throwBackward = Math.random() > Math.max(0.1, Math.min(0.9, weaponWeight / 40));

          if (throwBackward) {
            // Over head trash
            this.itemDrop(
              brute,
              WeaponByName[weaponName],
              { initialVelocity: { r: 17 + Math.random() * 8 } },
            );
          } else {
            // Ground trash

            // Create trashed weapon sprite
            const trashedWeapon = new Sprite(spritesheet.textures[`${weaponName}.png`]);

            trashedWeapon.filters = [new DropShadowFilter({ alpha: 0, quality: 1 })];
            trashedWeapon.zIndex = 1;

            // Anchor to left center
            trashedWeapon.anchor.set(0, 0.5);

            // Set position
            trashedWeapon.position.set(brute.team === 'L'
              ? brute.animation.container.x + brute.animation.baseWidth * 0.25
              : brute.animation.container.x + brute.animation.baseWidth * 0.25,
              brute.animation.container.y - brute.animation.baseHeight * 0.5,
            );

            // Set angle
            trashedWeapon.angle = brute.team === 'L' ? -110 : 70;

            // Add to stage
            this.app.stage.addChild(getFightClock().transient(trashedWeapon));

            // Animate the fall
            tween(trashedWeapon, {
              duration: 0.3 / this.speed.current,
              ease: 'none',
              x: brute.team === 'L'
                ? trashedWeapon.x - 20
                : trashedWeapon.x + 20,
              y: trashedWeapon.y + 50,
              angle: brute.team === 'L' ? -180 : 0,
            }).then(() => {
              // Wait a bit
              return fightDelay(0.5 / this.speed.current).then(() => {
                // Decrease opacity
                tween(trashedWeapon, {
                  duration: 0.5 / this.speed.current,
                  ease: 'none',
                  alpha: 0,
                }).then(() => {
                  // Remove from stage
                  this.app.stage.removeChild(trashedWeapon);
                }).catch(console.error);
              });
            }).catch(console.error);
          }
        },
      );

      // Set animation to `trash`
      brute.animation.setAnimation('trash');

      // Play trash SFX
      void sound.play('sfx', { sprite: 'net' });
    }

    // Remove weapon from brute
    brute.animation.weapon = null;

    // Wait for animation to complete
    if (!this.seeking) {
      await animationEnded;
    }

    // Set animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async treat(step: TreatStep) {
    const brute = findFighter(this.fighters, step.b);
    const pet = findFighter(this.fighters, step.t);

    let animationEnded: Promise<void> | undefined;

    if (!this.seeking) {
      animationEnded = brute.animation.waitForEvent('eat:end');

      // Set brute animation to `eat`
      brute.animation.setAnimation('eat');

      // Play eat SFX
      void sound.play('sfx', { sprite: `tamer${randomBetween(1, 2)}` });
    }

    this.skillUse(brute, SkillId.treat);

    if (!this.seeking) {
      displayHeal(this.app, pet, step.h, this.speed);

      // Display floating and fading cure icon if pet was poison healed
      if (step.c) {
        const spritesheet = this.spritesheets.misc;
        const cureIcon = new Sprite(spritesheet.textures['cure.png']);

        cureIcon.anchor.set(0.5);
        cureIcon.width = 30;
        cureIcon.height = 30;
        cureIcon.x = insideXBounds(pet.animation.container.x) - 35;
        cureIcon.y = pet.animation.container.y - pet.animation.container.height;
        cureIcon.zIndex = 1000;
        this.app.stage.addChild(getFightClock().transient(cureIcon));

        tween(cureIcon, {
          duration: 2 / this.speed.current,
          y: cureIcon.y - 100,
          ease: 'none',
          alpha: 0,
        }).then(() => {
          // Remove icon
          cureIcon.destroy();
        }).catch(console.error);
      }

      // Wait for animation to complete
      await animationEnded;
    }

    // Untrap pet
    this.untrap(pet);

    // Set animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async vampirism(step: VampirismStep) {
    const brute = findFighter(this.fighters, step.b);
    const target = findFighter(this.fighters, step.t);

    let animationEnded: Promise<void> | undefined;

    if (!this.seeking) {
      // Set brute animation to `evade`
      brute.animation.setAnimation('evade');

      // Start airborn phase
      brute.animation.setAirborn(true);

      // Move brute to target position
      await airbornMove({
        fighter: brute,
        speed: this.speed,
        duration: 0.25,
        ease: 'none',
        endPosition: {
          x: target.team === 'R'
            ? target.animation.container.x + target.animation.baseWidth / 2
            : target.animation.container.x - target.animation.baseWidth / 2,
          y: target.animation.container.y - 1,
          zIndex: target.animation.container.zIndex - 1,
        },
      });

      // Reverse brute
      brute.animation.container.scale.x *= -1;
      animationEnded = brute.animation.waitForEvent('steal:end');

      // Set brute animation to `steal`
      brute.animation.setAnimation('steal');

      // Play steal SFX
      void sound.play('sfx', { sprite: 'vampirism' });
    }

    this.skillUse(brute, SkillId.vampirism);

    // Wake up target
    target.stunned = false;

    // Untrap target
    this.untrap(target);

    if (!this.seeking) {
      // Set target animation to `stolen`
      if (target.type === 'brute') {
        target.animation.setAnimation('stolen');
      }

      // Blood vfx
      this.playHitEffect(brute, target, 'blood');
      displayHeal(this.app, brute, step.h, this.speed);
      displayDamage({ app: this.app, target, damage: step.d, speed: this.speed });
    }

    // Play the resist animation now
    this.playResistAnimation(target);

    // Update HP bar
    this.updateHp(brute, step.h);
    this.updateHp(target, -step.d);

    if (!this.seeking) {
      // Wait for animation to finish
      await animationEnded;
    }

    // Set target animation to normal
    target.animation.setAnimation(
      target.stunned ? 'death' : 'idle',
      0,
      this.seeking,
    );

    if (!this.seeking) {
      // Set brute animation to `evade`
      brute.animation.setAnimation('evade');
    }

    const { x, y } = getRandomPosition(this.fighters, brute);

    // Move brute to position
    await airbornMove({
      fighter: brute,
      speed: this.speed,
      duration: 0.25,
      ease: 'none',
      endPosition: {
        x,
        y,
        zIndex: y,
      },
      seeking: this.seeking,
    });

    // End airborn phase
    brute.animation.setAirborn(false, this.seeking);

    if (!this.seeking) {
      // Restore scale
      brute.animation.container.scale.x *= -1;
    }

    // Set brute animation to `idle`
    brute.animation.setAnimation('idle', 0, this.seeking);
  }

  async mimic(step: MimicStep) {
    const opponents = step.f.map((fighterId) => findFighter(this.fighters, fighterId));

    if (opponents.length === 0) {
      throw new Error('No opponent found for mimic');
    }

    const animations: Promise<void>[] = [];

    for (const opponent of opponents) {
      animations.push((async () => {
        // Faster win animation speed for male brutes
        const animationSpeed = opponent.gender === Gender.male ? 2 : 1;

        if (!this.seeking) {
          const handRaised = opponent.animation.waitForEvent('win:hand-raised');

          opponent.animation.animationSpeed = animationSpeed;

          // Set opponent animation to `win` at frame 5
          opponent.animation.setAnimation('win', 6 * animationSpeed);

          // Wait for the hand to be raised
          await handRaised;

          // Keep hand raised
          opponent.animation.animationSpeed = 0;
        }

        this.skillUse(opponent, SkillId.mimic);
        this.updateSkills(opponent, step.s, 'add', step.t);

        if (!this.seeking) {
          // Set animation speed to fast reverse
          opponent.animation.animationSpeed = -animationSpeed * 2;

          // Add hand down to waited animations
          await opponent.animation.waitForEvent('win:start');

          // Set animation speed to normal
          opponent.animation.animationSpeed = 1;
        }

        // Set animation to idle
        opponent.animation.setAnimation('idle', 0, this.seeking);
      })());
    }

    await Promise.all(animations);
  }

  async reload(step: ReloadStep) {
    const fighter = findFighter(this.fighters, step.f);

    let reloadMessage: Text | undefined;
    let motionBlur: MotionBlurFilter | undefined;
    let messageAnimation: Promise<unknown> | undefined;

    // Faster win animation speed for male brutes
    const animationSpeed = fighter.gender === Gender.male ? 2 : 1;

    // Fights recorded before Reload became a skill have no use to spend
    // TODO: Remove on release
    if (fighter.skills[SkillId.reload]) {
      this.skillUse(fighter, SkillId.reload);
    }

    if (!this.seeking) {
      const handRaised = fighter.animation.waitForEvent('win:hand-raised');

      fighter.animation.animationSpeed = animationSpeed;

      // Set opponent animation to `win` at frame 5
      fighter.animation.setAnimation('win', 6 * animationSpeed);

      // Wait for the hand to be raised
      await handRaised;

      // Keep hand raised
      fighter.animation.animationSpeed = 0;

      reloadMessage = new Text({
        text: this.t('fight.reload').toLocaleUpperCase(),
        style: {
          fontFamily: 'GameFont',
          fontSize: 30,
          fill: 0xffffff,
          align: 'center',
        }
      });
      motionBlur = new MotionBlurFilter({
        velocity: [50, 0],
        kernelSize: 9,
        offset: -0.5,
      });
      motionBlur.padding = 60;
      reloadMessage.filters = [new OutlineFilter(), motionBlur];

      const offscreenMargin = reloadMessage.width;

      reloadMessage.x = -offscreenMargin;
      reloadMessage.y = this.app.screen.height / 2;
      reloadMessage.anchor.set(0.5, 0.5);
      reloadMessage.scale.set(1.5, 0.75);
      reloadMessage.angle = -12;
      reloadMessage.alpha = 0;
      reloadMessage.zIndex = 900;
      this.app.stage.addChild(getFightClock().transient(reloadMessage));

      // Animate reload message
      const message = reloadMessage;
      const blur = motionBlur;

      messageAnimation = Promise.all([
        tween(motionBlur, {
          duration: 0.7 / this.speed.current,
          ease: 'power4.out',
          velocityX: 0,
        }),
        tween(message, {
          duration: 0.7 / this.speed.current,
          ease: 'power4.out',
          x: this.app.screen.width / 2,
          angle: 4,
          alpha: 1,
        }),
        tween(message.scale, {
          duration: 0.7 / this.speed.current,
          ease: 'back.out(2)',
          x: 1.15,
          y: 1.15,
        }),
      ]).then(() => Promise.all([
        tween(message, {
          duration: 0.3 / this.speed.current,
          ease: 'power2.out',
          angle: 0,
        }),
        tween(message.scale, {
          duration: 0.3 / this.speed.current,
          ease: 'power2.out',
          x: 1,
          y: 1,
        }),
      ])).then(() => Promise.all([
        tween(blur, {
          duration: 1 / this.speed.current,
          ease: 'power4.in',
          velocityX: 50,
        }),
        tween(message, {
          duration: 1 / this.speed.current,
          ease: 'power4.in',
          x: this.app.screen.width + offscreenMargin,
          angle: -8,
          alpha: 0,
        }),
        tween(message.scale, {
          duration: 1 / this.speed.current,
          ease: 'power4.in',
          x: 1.5,
          y: 0.75,
        }),
      ]));
    }

    // Stagger gains using the fight clock so pause and seek apply.
    for (const weapon of step.w) {
      this.updateWeapons(fighter, weapon.i, 'add', weapon.t);

      if (!this.seeking) {
        await fightDelay(0.05 / this.speed.current);
      }
    }

    for (const skill of step.s) {
      if (!skills[SkillById[skill.i]].uses)
        continue;

      this.updateSkills(fighter, skill.i, 'add', skill.t);

      if (!this.seeking) {
        await fightDelay(0.05 / this.speed.current);
      }
    }

    if (!this.seeking) {
      await messageAnimation;
      reloadMessage?.destroy();
      motionBlur?.destroy();

      // Set animation speed to fast reverse
      const handDown = fighter.animation.waitForEvent('win:start');

      fighter.animation.animationSpeed = -animationSpeed * 2;
      await handDown;
      fighter.animation.animationSpeed = 1;
    }

    fighter.animation.setAnimation('idle', 0, this.seeking);
  }

  isRangedStep(stepType: StepType) {
    return rangedSteps.includes(stepType);
  }

  async repositionFighters(excludedFighterId?: AnimationFighter['id']) {
    const misplacedFighters: AnimationFighter[] = [];
    const repositioning: Promise<void>[] = [];

    for (const fighter of this.fighters) {
      if (excludedFighterId && fighter.id === excludedFighterId)
        continue;

      // Can't reposition if dead or stunned or trapped
      if (fighter.dead || fighter.stunned || fighter.trapped)
        continue;

      // Mispositionned fighter can be:
      //   - One that countered a lot without moving
      //   - One that got stunned by a counter
      if ((fighter.animation.container.x > 225 && fighter.team === 'L')
        || (fighter.animation.container.x < 275 && fighter.team === 'R')) {
        misplacedFighters.push(fighter);
      }
    }

    if (!misplacedFighters.length) {
      return;
    }

    const targetPositions = getMultipleRandomPosition(this.fighters, misplacedFighters);

    for (let i = 0; i < misplacedFighters.length; i++) {
      const fighter = misplacedFighters[i];
      const targetPosition = targetPositions[i];

      if (!fighter || !targetPosition)
        continue;

      // Move back to the right half of the map
      repositioning.push(
        this.moveBack({ a: StepType.MoveBack, f: fighter.index }, targetPosition),
      );
    }

    await Promise.all(repositioning);
  }

  async setHUDFocus(fighterIndex: number | undefined) {
    const fighter = findFighter(this.fighters, fighterIndex);

    // Abort if not focused or not brute
    if (fighter.HUDFocused || fighter.type !== 'brute') return;

    this.fighters.forEach((f) => {
      if (f.team === fighter.team) {
        f.HUDFocused = false;
      }
    });
    fighter.HUDFocused = true;

    if (this.seeking) return;

    if (fighter.text) {
      fighter.text.text = fighter.name.toLocaleUpperCase();
    }

    if (!fighter.bustImage && fighter.type === 'brute') {
      fighter.bustImage = await createBustImage(fighter, this.renderer);
    }

    if (!this.app.stage
      || this.app.stage.destroyed
      || fighter.animation.container.destroyed) return;

    if (fighter.bust && fighter.bustImage) {
      fighter.bust.texture = Texture.from(fighter.bustImage);
    }
    // Don't update hp bar if clanwar
    if (!this.isClanWar) {
      this.updateHp(fighter, fighter.hp, true);
    }

    this.updateWeapons(fighter);
  }

  updateWeapons(
    brute: AnimationFighter,
    weapon?: WeaponId,
    action?: 'remove' | 'add',
    weaponTier?: number
  ) {
    // Only affect the HUD for the focused brutes
    if (!this.seeking && brute.HUDFocused) {
      // Empty list
      brute.teamWeaponsIllustrations.forEach((illustration) => {
        illustration.destroy();
      });
      brute.teamWeaponsIllustrations.length = 0;
    }

    // Remove weapon
    if (action === 'remove') {
      if (typeof weapon === 'undefined') {
        throw new Error('Weapon not found');
      }

      delete brute.weapons[weapon];
    } else if (action === 'add') {
      if (typeof weapon === 'undefined') {
        throw new Error('Weapon not found');
      }
      if (typeof weaponTier === 'undefined') {
        throw new Error('Weapon tier not found');
      }

      brute.weapons[weapon] = weaponTier;
    }

    if (this.seeking) return;

    const spritesheet = this.spritesheets.misc;

    // Only affect the HUD for the focused brutes
    if (brute.HUDFocused) {
      // Generate new list
      entries(brute.weapons).forEach(([w, tier], index) => {
        const texture = spritesheet.textures[`weapons/${WeaponById[+w as WeaponId]}.png`];

        if (!texture) {
          throw new Error('Texture not found');
        }

        const sprite = new Sprite(texture);
        sprite.label = w.toString();
        sprite.zIndex = 104;
        sprite.width = WEAPON_SIZE;
        sprite.height = WEAPON_SIZE;

        if (brute.team === 'L') {
          sprite.x = (index % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60;
        } else {
          sprite.x = 480 - ((index % WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 60);
        }
        sprite.y = Math.floor(index / WEAPONS_PER_ROW) * (WEAPON_SIZE + WEAPON_SPACING) + 40;
        sprite.filters = [];

        if (tier > 1) {
          sprite.filters = [new OutlineFilter({
            thickness: 1,
            color: parseInt(TieredPerkColor[tier]?.slice(1) ?? '0', 16),
          })];
        }
        sprite.filters = sprite.filters.concat(new OutlineFilter());
        if (brute.toggleTooltip) {
          bindFightTooltip(sprite, () => ({
            type: 'weapon',
            weapon: weapons[WeaponById[+w as WeaponId]],
            tier,
          }), brute.toggleTooltip);
        }
        this.app.stage.addChild(sprite);
        brute.teamWeaponsIllustrations.push(sprite);

        if (action === 'add' && +w === weapon && this.speed) {
          animatePerkGain(this.app, sprite, this.speed);
        }
      });
    }

    // Always update skills as well since they are displayed in the same area and can be affected by weapon changes
    this.updateSkills(brute);
  }

  updateSkills(
    brute: AnimationFighter,
    skillId?: SkillId,
    action?: 'remove' | 'add',
    skillTier?: number,
  ) {
    // Only affect the HUD for the focused brutes
    if (!this.seeking && brute.HUDFocused) {
      // Empty list
      brute.teamSkillsIllustrations.forEach((illustration) => {
        illustration.destroy();
      });
      brute.teamSkillsIllustrations.length = 0;
    }

    // Remove skill
    if (action === 'remove') {
      if (typeof skillId === 'undefined') {
        throw new Error('Skill not found');
      }

      delete brute.skills[skillId];
    } else if (action === 'add') {
      if (typeof skillId === 'undefined') {
        throw new Error('Skill not found');
      }

      if (typeof skillTier === 'undefined') {
        throw new Error('Skill tier not found');
      }

      addSkillUse(brute, skillId, skillTier);
    }

    if (this.seeking) return;

    const spritesheet = this.spritesheets.skills;

    // Only affect the HUD for the focused brutes
    if (brute.HUDFocused) {
      // Calculate starting Y position based on number of weapons
      const weaponCount = Object.keys(brute.weapons).length;
      const weaponRows = Math.ceil(weaponCount / WEAPONS_PER_ROW);
      const skillsStartY = weaponRows * (WEAPON_SIZE + WEAPON_SPACING) + 40;

      // Generate new list
      entries(brute.skills)
        // Ignore non usable skills
        .filter(([, currentSkill]) => currentSkill.uses)
        .forEach(([s, currentSkill], index) => {
          const skillName = SkillById[+s as SkillId];

          const texture = spritesheet.textures[`tier-${currentSkill.tier}/${skillName}.png`]
            ?? ((+s === SkillId.rewind || +s === SkillId.reload) ? Texture.EMPTY : undefined);

          if (!texture) {
            throw new Error(`Skill texture not found: tier-${currentSkill.tier}/${skillName}.png`);
          }

          const sprite = new Sprite(texture);

          sprite.label = s.toString();
          sprite.zIndex = 104;
          sprite.width = SKILL_SIZE;
          sprite.height = SKILL_SIZE;

          if (brute.team === 'L') {
            sprite.x = (index % SKILLS_PER_ROW) * (SKILL_SIZE + SKILL_SPACING) + 60;
          } else {
            sprite.x = 480 - ((index % SKILLS_PER_ROW) * (SKILL_SIZE + SKILL_SPACING) + 60);
          }
          sprite.y = Math.floor(index / SKILLS_PER_ROW)
            * (SKILL_SIZE + SKILL_SPACING)
            + skillsStartY;

          if (brute.toggleTooltip) {
            bindFightTooltip(sprite, () => ({
              type: 'skill',
              skill: skills[skillName],
              tier: currentSkill.tier,
            }), brute.toggleTooltip);
          }
          this.app.stage.addChild(sprite);
          brute.teamSkillsIllustrations.push(sprite);

          if (action === 'add' && +s === skillId && this.speed) {
            animatePerkGain(this.app, sprite, this.speed);
          }
        });
    }
  }

  itemDrop(
    fighter: AnimationFighter,
    item: WeaponId | 'shield',
    { initialPosition,
      initialVelocity,
      broken,
      saboteur }: {
        initialPosition?: { x?: number; y?: number; r?: number },
        initialVelocity?: { x?: number; y?: number; r?: number },
        broken?: boolean;
        saboteur?: boolean;
      } = {}
  ) {
    if (this.seeking) return;

    const itemSpriteSheet = item === 'shield' || broken || saboteur
      ? this.spritesheets.misc
      : this.spritesheets.thrownWeapons;

    // Shield / weapon / broken-weapon / saboteur-weapon texture
    const itemTexture = itemSpriteSheet.textures[
      item === 'shield'
        ? 'shield.png'
        : broken
          ? `broken-weapons/${WeaponById[item]}.png`
          : saboteur
            ? `saboteur-weapons/${WeaponById[item]}.png`
            : `${WeaponById[item]}.png`
    ];

    // Create sprites
    const itemSprite = new Sprite(itemTexture);
    const shadowSprite = new Sprite(itemTexture);

    // Position item so the grip of the weapon is close to the hand
    const itemX = initialPosition?.x
      ?? (fighter.team === 'L'
        ? fighter.animation.container.x
        + fighter.animation.baseWidth * 0.25
        - itemSprite.width * 0.2
        : fighter.animation.container.x
        - fighter.animation.baseWidth * 0.25
        + itemSprite.width * 0.2
      );
    const itemY = initialPosition?.y
      ?? (fighter.animation.container.y
        - fighter.animation.baseHeight * 0.5 - itemSprite.width * 0.7);

    // Shield in front, weapons behind
    const baseZIndex = fighter.animation.container.y + (item === 'shield' ? 1 : -1);

    // Create containers in order to handle scale and angle in the right order
    const itemContainer = new Container();
    const shadowContainer = new Container();

    // Add to containers
    itemContainer.addChild(itemSprite);
    shadowContainer.addChild(shadowSprite);

    itemContainer.zIndex = baseZIndex;
    // Add a transparent shadow filter to item sprite that will be faded in at the end
    const shadowFilter = new DropShadowFilter({ alpha: 0, quality: 1 });
    itemSprite.filters = [shadowFilter];
    itemSprite.anchor.set(0.5, 0.5);
    // Set sprite angle
    itemSprite.angle = fighter.team === 'L' ? -110 : -70;
    // Set item position
    itemContainer.position.set(itemX, itemY);

    // Initialise the shadow container
    shadowContainer.zIndex = baseZIndex - 0.1;
    shadowContainer.y = shadowContainer.zIndex;
    shadowSprite.anchor.set(0.5, 0.5);
    // Black tint
    shadowSprite.tint = 0x000000;
    shadowSprite.alpha = 0.4;
    // Add a blur filter to the shadow
    shadowContainer.filters = [new BlurFilter({
      strength: 4,
      quality: 4,
      resolution: 4,
      kernelSize: 5
    })];
    shadowContainer.scale.y = 0.4;

    // Add to stage
    this.app.stage.addChild(getFightClock().transient(itemContainer));
    this.app.stage.addChild(getFightClock().transient(shadowContainer));

    // Items can levitate (saboteur bumps)
    const levitate = item === WeaponId.bumps && saboteur;

    // Gravity constant
    const gravity = levitate ? -0.01 : 1;

    // Infer item weight from it's damage
    let itemWeight = item === 'shield'
      ? 0.3
      : Math.max(0.1, weapons[WeaponById[item]].damage[0] / 70);

    // Lower weight if broken or saboteur (plastic)
    if (broken) itemWeight *= 0.5;
    if (saboteur) itemWeight = Math.min(itemWeight, 0.2);

    // Roundness coefficient to handle bounces
    const itemRoundness = Math.min(
      0.7,
      Math.min(itemSprite.height, itemSprite.width) / Math.max(itemSprite.height, itemSprite.width)
    );

    // How much the item will bounce
    const itemBounciness = -0.9 + itemWeight * 2.5 * itemRoundness;

    // Velocity (x, y, angle)
    // Initialise as a default overhead throw
    // Initial velocity depends on item weight
    // Initial x and angle velocity are relative to the fighter
    const velocity = {
      x: (initialVelocity?.x ?? 7) * (fighter.team === 'L' ? -1 : 1) * (1.15 - itemWeight),
      y: (initialVelocity?.y ?? -7) * (1.2 - itemWeight),
      r: (initialVelocity?.r ?? (Math.random() * 10 + 6))
        * (fighter.team === 'L' ? -1 : 1) * (1.2 - itemWeight),
    };

    // Animation variables
    // Base speed that will go down with time and bounces
    let itemSpeed = 1;
    // Number of bounces
    let numBounces = 0;
    // At end phase, the item will slow down and the shadow will fade out
    let endPhase = false;
    // Store the shadow alpha at the start of ending part
    let endShadowAlpha = 0;

    // Update function
    const update = (ticker: Ticker) => {
      if (this.reversing) return;

      const deltaTime = ticker.deltaTime * this.speed.current * itemSpeed;

      // Update item position
      itemContainer.x += velocity.x * deltaTime;
      itemContainer.y += velocity.y * deltaTime;

      // Update angle
      if (levitate) velocity.r = 270 - itemSprite.angle;
      itemSprite.angle = (((itemSprite.angle + velocity.r * deltaTime) % 360) + 360) % 360;

      // Update shadow x
      shadowContainer.x = itemContainer.x;

      // Update shadow if not end phase
      if (!endPhase) {
        shadowSprite.angle = -itemSprite.angle;
        shadowContainer.y -= shadowContainer.getBounds().rectangle.y - shadowContainer.zIndex;
        shadowContainer.alpha = (10 - numBounces) * 0.1
          * Math.max(0.6, Math.abs(itemContainer.y - shadowContainer.y) / 200);
      }
      // Check if item is in contact with the ground
      const itemBounds = itemSprite.getBounds().rectangle;
      if (itemBounds.y + itemBounds.height > baseZIndex && velocity.y > 0) {
        // Increment number of bounces
        numBounces++;
        // Reposition item over the ground
        itemContainer.y -= itemBounds.y + itemBounds.height - baseZIndex;
        // Get angle relative to the ground
        const currentAngle = itemSprite.angle % 180;

        // Compute the bounce influence on the velocity
        let vxCoef = 0;
        let vyCoef = 0;
        let vrCoef = 0;
        // Interpolate the influence depending on the item angle for realism
        // For instance, for 0 - 45 - 90 - 135 - 0 angles, x influence is 0.7 - 0.5 - 0.6 - 0.5 - 0.7
        if (currentAngle < 45) {
          const interpFactor = currentAngle / 45;
          vxCoef = 0.7 * (1 - interpFactor) + 0.5 * interpFactor;
          vyCoef = 0.8 * (1 - interpFactor) + 0.6 * interpFactor;
          vrCoef = -0.5 * (1 - interpFactor) + -1 * interpFactor;
        } else if (currentAngle < 90) {
          const interpFactor = (currentAngle - 45) / 45;
          vxCoef = 0.5 * (1 - interpFactor) + 0.6 * interpFactor;
          vyCoef = 0.6 * (1 - interpFactor) + 0.1 * interpFactor;
          vrCoef = -1 * (1 - interpFactor) + -0.5 * interpFactor;
        } else if (currentAngle < 135) {
          const interpFactor = (currentAngle - 90) / 45;
          vxCoef = 0.6 * (1 - interpFactor) + 0.5 * interpFactor;
          vyCoef = 0.1 * (1 - interpFactor) + 0.6 * interpFactor;
          vrCoef = 0.5 * (1 - interpFactor) + 1 * interpFactor;
        } else {
          const interpFactor = (currentAngle - 135) / 45;
          vxCoef = 0.5 * (1 - interpFactor) + 0.7 * interpFactor;
          vyCoef = 0.6 * (1 - interpFactor) + 0.8 * interpFactor;
          vrCoef = 1 * (1 - interpFactor) + 0.5 * interpFactor;
        }
        // Get the new velocity
        const newVr = vrCoef * 1
          * (vxCoef * Math.abs(velocity.x) + vyCoef * velocity.y + 10 / numBounces);
        const newVx = velocity.x * (1 - vxCoef) * (1 - itemWeight);
        const newVy = velocity.y * (1 - vyCoef);

        // Update velocity with the new velocity depending on item roundness
        velocity.r = itemRoundness * velocity.r + (1 - itemRoundness) * newVr;
        velocity.x = itemRoundness * velocity.x + (1 - itemRoundness) * newVx;
        velocity.y = itemBounciness * (itemRoundness * velocity.y + (1 - itemRoundness) * newVy);

        // If 4th bounce, go to end phase
        if (numBounces === 4) {
          endPhase = true;
          // Reduce shadow alpha to avoid flickering effect
          shadowContainer.alpha = Math.min(0.4, shadowContainer.alpha);
          // Store shadow current alpha
          endShadowAlpha = shadowContainer.alpha;
          // Set zIndex to back
          itemContainer.zIndex = 1;
          shadowContainer.zIndex = 1;
          // Fade out the shadow
          tween(shadowContainer, {
            duration: 0.35 / this.speed.current,
            ease: 'none',
            alpha: 0,
          }).then(() => {
            // Wait a bit
            return fightDelay(0.25 / this.speed.current).then(() => {
              // Fade out the item
              tween(itemContainer, {
                duration: 1.2 / this.speed.current,
                ease: 'none',
                alpha: 0,
              }).then(() => {
                // Remove update from ticker
                this.app.ticker.remove(update);
                // Remove containers from stage
                shadowContainer.destroy({ children: true });
                itemContainer.destroy({ children: true });
              }).catch(console.error);
            });
          }).catch(console.error);
        }
      }

      if (endPhase) {
        // Get the progress of the end phase
        const progress = Math.min(1, (endShadowAlpha - shadowContainer.alpha) / endShadowAlpha);
        // Change the item scale to make a minimal 3d effect
        const finalScale = Math.min(
          0.8 + 0.2 * (Math.min(
            Math.abs(itemSprite.angle - 90),
            Math.abs(itemSprite.angle - 270)
          ) / 90),
          itemRoundness > 0.6 ? 0.85 : 1
        );
        itemContainer.scale.y = 1 + (finalScale - 1) * progress;
        shadowContainer.scale.y = 1 + (finalScale - 1) * progress;
        // Move the shadow behind the item
        shadowContainer.y = itemContainer.y * progress + shadowContainer.y * (1 - progress);
        // Slow down
        itemSpeed = 1 - progress;
        shadowSprite.angle = itemSprite.angle;
        // Fade in the item shadow
        shadowFilter.alpha = progress * 0.25;
      }

      // Add gravity at the end of the update process
      velocity.y += deltaTime * gravity;
      // If item goes off the screen
      if (itemContainer.x - itemSprite.width > this.app.screen.width
        || itemContainer.x + itemSprite.width < 0
        || (levitate && itemContainer.y - itemSprite.height * 2 < 0)) {
        // Remove update from ticker
        this.app.ticker.remove(update);
        // Remove containers from stage
        shadowContainer.destroy({ children: true });
        itemContainer.destroy({ children: true });
      }
    };

    // Add update to ticker
    itemContainer.once('destroyed', () => this.app.ticker.remove(update));
    shadowContainer.once('destroyed', () => this.app.ticker.remove(update));
    this.app.ticker.add(update);
  }

  async knockBack(
    fighter: AnimationFighter,
    unsignedKnockBack: number,
    duration = 0.5,
    seeking = false,
  ) {
    const knockBackDistance = getRealKnockBack(fighter, unsignedKnockBack);
    const x = fighter.animation.container.x + knockBackDistance;
    // Move fighter
    if (seeking) {
      fighter.animation.container.x = x;
    } else {
      await tween(fighter.animation.container, {
        duration: duration / this.speed.current,
        ease: 'none',
        x,
      });
    }
  }

  async stagger(
    fighter: AnimationFighter,
    unsignedKnockBack = 0,
    duration = 0.5,
  ) {
    const staggers = [];

    // Sign and clamp knockBack value
    const knockBack = getRealKnockBack(fighter, unsignedKnockBack);

    // Stagger animation
    staggers.push(
      this._staggerObject(fighter.animation.container, fighter.team, knockBack, duration)
    );

    // Stagger bust
    if (!this.seeking && fighter.bust && fighter.HUDFocused) {
      staggers.push(this._staggerObject(fighter.bust, fighter.team, 0, duration));
    }

    await Promise.all(staggers);

    if (!this.seeking && fighter.bust && fighter.HUDFocused) {
      // Reposition bust because it can move in case of unawaited multiple staggers (flashflood)
      fighter.bust.x = 0;
    }
  }

  private async _staggerObject(
    object: Container | Sprite,
    _team: 'L' | 'R',
    // StaggerObject has an intergrated knockBack fonctionnality
    // It doesn't use the knockBack module as the two are x translations
    // and can't be played simultaneously
    knockBack = 0,
    duration = 0.5,
  ) {
    const deltas = [
      knockBack * 0.1 + 8,
      knockBack * 0.1 + -4,
      knockBack * 0.1 + 4,
      knockBack * 0.1 + -4,
      knockBack * 0.2 + 4,
      knockBack * 0.2 + -8,
      knockBack * 0.2,
    ];
    const segments = [0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2];

    const baseX = object.x;
    const keyframes: { x: number; duration: number }[] = [];
    let currentX = baseX;

    for (let i = 0; i < deltas.length; i++) {
      const delta = deltas[i] ?? 0;
      const segment = segments[i] ?? 0;
      currentX += delta;
      keyframes.push({
        x: currentX,
        duration: (duration * segment) / this.speed.current,
      });
    }

    if (this.seeking) {
      object.x = currentX;
    } else {
      await tween(object, {
        ease: 'none',
        keyframes,
      });
    }
  }

  playDustEffect(
    fighter: AnimationFighter,
    offset = 0,
  ) {
    if (this.seeking) return;

    const spritesheet = this.spritesheets.misc;

    // Create dust sprite
    const dustSprite = fightSprite(spritesheet.animations.dust);
    dustSprite.animationSpeed = this.speed.current / 2;
    dustSprite.loop = false;

    // Set dust sprite position to the feet of fighter
    dustSprite.x = fighter.animation.container.x + (fighter.team === 'L' ? -offset : offset);
    dustSprite.y = fighter.animation.container.y + 5;
    dustSprite.zIndex = fighter.animation.container.zIndex - 1;

    // Add dust sprite to stage
    this.app.stage.addChild(dustSprite);

    // Destroy dust sprite when animation ends
    dustSprite.onComplete = () => {
      dustSprite.destroy();
    };

    // Play dust
    dustSprite.play();
  }

  playHitEffect(
    fighter: AnimationFighter,
    target: AnimationFighter,
    VFX?: string,
  ) {
    if (this.seeking) return;

    const spritesheet = this.spritesheets.misc;

    if (!spritesheet) {
      throw new Error('Spritesheet not found');
    }

    const HIT_VFX = ['blood', 'impact-1', 'impact-2'];

    const vfx = fighter.type === 'pet'
      ? 'blood'
      : VFX ?? HIT_VFX[randomBetween(0, HIT_VFX.length - 1)] ?? 'blood';

    // Create hit VFX
    const hitVfx = fightSprite(spritesheet.animations[vfx]);
    hitVfx.zIndex = 1000;
    hitVfx.animationSpeed = this.speed.current / 4;
    hitVfx.loop = false;
    hitVfx.scale.x = target.team === 'L' ? -1 : 1;
    hitVfx.anchor.set(0.5, 0.5);

    const distance = Math.abs(fighter.animation.container.x - target.animation.container.x);
    const hitDistance = getHitDistance(fighter, target);

    const fighterHead = {
      x: fighter.team === 'L'
        ? fighter.animation.container.x + fighter.animation.baseWidth * 0.1
        : fighter.animation.container.x - fighter.animation.baseWidth * 0.1,
      y: fighter.animation.container.y - fighter.animation.baseHeight * 0.55,
    };

    const targetHead = {
      x: target.team === 'L'
        ? target.animation.container.x + target.animation.baseWidth * 0.1
        : target.animation.container.x - target.animation.baseWidth * 0.1,
      y: target.animation.container.y - target.animation.baseHeight * 0.55,
    };

    // If target is smaller than fighter
    if (fighter.animation.baseHeight > target.animation.baseHeight
      // or thrown attack
      || distance > hitDistance * 1.2
      // or fighter and target are too close (vampirism, hammer)
      || distance < hitDistance * 0.9) {
      // Set position to target head
      hitVfx.position.set(targetHead.x, targetHead.y);
      // Else set position to contact point
    } else {
      hitVfx.position.set(targetHead.x, fighterHead.y);
    }

    // Add hit VFX to stage
    this.app.stage.addChild(hitVfx);

    // Destroy hit VFX when animation is finished
    hitVfx.onComplete = () => {
      hitVfx.destroy();
    };

    // Play hit VFX
    hitVfx.play();
  }

  untrap(
    fighter: AnimationFighter,
  ) {
    if (fighter.trapped) {
      fighter.trapped = false;
      if (fighter.type === 'brute') {

        fighter.stunned = true;
      }
    }

    // Add broken net VFX if fighter was trapped
    const animation = this.seeking
      ? fighter.animation.seekPose.animation
      : fighter.animation.animation;

    if (animation === 'trapped') {
      // Set animation to `idle`
      fighter.animation.setAnimation('idle', 0, this.seeking);

      if (this.seeking) {
        return;
      }

      const spritesheet = this.spritesheets.misc;

      // Create 6 net parts
      for (let i = 0; i < 6; i += 1) {
        const netPart = new Sprite(spritesheet.textures['net-part.png']);
        netPart.filters = [new BevelFilter()];
        // Set random position around fighter
        netPart.position.set(
          fighter.animation.container.x + Math.random() * 20 - 10,
          fighter.animation.container.y + Math.random() * 20 - 10,
        );
        // Add net part to stage
        this.app.stage.addChild(getFightClock().transient(netPart));
        // Set random rotation
        netPart.rotation = Math.random() * Math.PI * 2;
        // Move net part away from fighter
        tween(netPart, {
          duration: 0.5,
          ease: 'none',
          x: netPart.x + Math.cos(netPart.rotation) * 30,
          y: netPart.y + Math.sin(netPart.rotation) * 30,
        }).then(() => {
          // Fade out net part
          tween(netPart, {
            duration: 0.5,
            ease: 'none',
            alpha: 0,
          }).then(() => {
            // Destroy net part
            netPart.destroy();
          }).catch(console.error);
        }).catch(console.error);
      }
    }
  }

  updateHp(
    fighter: AnimationFighter,
    hp: number,
    fix?: boolean,
  ) {
    const { hpBar, hpBarPhantom } = fighter;
    let { maxHp } = fighter;

    if (!hpBar || !hpBarPhantom) {
      return;
    }

    if (fix) {
      // Hp is set to fixed value
      fighter.hp = hp;
    } else {
      // Hp change
      // Prevent overhits
      let realHpChange = hp;

      // Damage
      if (hp < 0) {
        if (fighter.hp <= 0) {
          realHpChange = 0;
        } else if (fighter.hp + hp < 0) {
          realHpChange = -fighter.hp;
        }
      }

      // Keep track of HP
      fighter.hp += realHpChange;
    }

    if (this.seeking) return;

    let currentHP = 0;

    if (this.isClanWar && !fighter.master) {
      // hp is the sum of all the fighters' hp
      currentHP = this.fighters
        .filter((f) => f.team === fighter.team && !f.master)
        .reduce((acc, f) => acc + f.hp, 0);

      // Max HP is the sum of all the fighters' max HP
      maxHp = this.fighters
        .filter((f) => f.team === fighter.team && !f.master)
        .reduce((acc, f) => acc + f.maxHp, 0);
    } else {
      currentHP = fighter.hp;
    }

    const percent = (currentHP / maxHp) * 236;
    const newWidth = Math.max(1, Math.min(236, percent));

    hpBar.width = newWidth;
    if (currentHP === 0) {
      hpBar.visible = false;
    } else {
      hpBar.visible = true;
    }

    if (fix) {
      hpBarPhantom.width = newWidth;
      if (currentHP === 0) {
        hpBarPhantom.visible = false;
      } else {
        hpBarPhantom.visible = true;
      }
    } else {
      tween(hpBarPhantom, {
        duration: 0.25 / this.speed.current,
        delay: 0.25 / this.speed.current,
        ease: 'none',
        width: newWidth,
      }).then(() => {
        if (currentHP === 0) {
          hpBarPhantom.visible = false;
        } else {
          hpBarPhantom.visible = true;
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  }
}
