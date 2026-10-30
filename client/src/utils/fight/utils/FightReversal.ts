import {
  Application, Container, Filter, Sprite, Text, TextStyle, Texture, Ticker, UPDATE_PRIORITY
} from 'pixi.js';
import type { RefObject } from 'react';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import type { AnimationFighter } from './findFighter';
import type { FighterSnapshot, FightSnapshot } from './fightSnapshot';

// Generated effect textures have a live owner and may also be retained by rewind
// recordings. Shared spritesheet textures are never registered or destroyed here.
const references = new WeakMap<Texture, number>();

export const ownFightTexture = (texture: Texture): Texture => {
  references.set(texture, 1);
  return texture;
};

const retainFightTexture = (texture: Texture): boolean => {
  const count = references.get(texture);
  if (count === undefined) return false;
  references.set(texture, count + 1);
  return true;
};

export const releaseFightTexture = (texture: Texture): void => {
  const count = references.get(texture);
  if (count === undefined) return;
  if (count > 1) references.set(texture, count - 1);
  else {
    references.delete(texture);
    texture.destroy(true);
  }
};

type Holder = AnimationFighter['animation'];
export type PlaybackFrame = ReturnType<Holder['capturePlaybackFrame']>;

export interface ReversalTransform {
  readonly x: number;
  readonly y: number;
  readonly scaleX: number;
  readonly scaleY: number;
  readonly pivotX: number;
  readonly pivotY: number;
  readonly skewX: number;
  readonly skewY: number;
  readonly rotation: number;
  readonly alpha: number;
  readonly visible: boolean;
  readonly zIndex: number;
}

export interface ReversalFighterFrame {
  readonly fighter: AnimationFighter;
  readonly playback: Readonly<PlaybackFrame>;
  readonly weapon: Holder['weapon'];
  readonly shield: boolean;
  readonly container: ReversalTransform;
  readonly shadow: ReversalTransform | null;
}

export interface ReversalHudFrame {
  readonly bar: Container;
  // Width changes on these fixed-geometry bars are scale changes. Reading width
  // would force a bounds calculation; retain the equivalent primitive instead.
  readonly scaleX: number;
  readonly visible: boolean;
  readonly alpha: number;
}

export interface ReversalFrame {
  /** Elapsed game milliseconds, independent of the speed at replay time. */
  readonly time: number;
  readonly fighters: readonly ReversalFighterFrame[];
  readonly hud: readonly ReversalHudFrame[];
  readonly sprites?: readonly ReversalSpriteFrame[];
}

type ReversalFilter = {
  readonly filter: Filter;
  readonly adjustment?: Pick<AdjustmentFilter,
    'red' | 'green' | 'blue' | 'alpha' | 'gamma' | 'saturation' | 'contrast' | 'brightness'>;
};

export interface ReversalSpriteFrame {
  readonly sprite: Sprite | Text;
  readonly texture?: Texture;
  readonly text?: string;
  readonly style?: TextStyle;
  readonly filters: readonly ReversalFilter[];
  readonly transform: ReversalTransform;
  readonly anchorX: number;
  readonly anchorY: number;
  readonly tint: number;
  readonly blendMode: Sprite['blendMode'];
}

export interface ReversalRecording {
  readonly duration: number;
  readonly frames: readonly ReversalFrame[];
}

export const REVERSAL_MAX_FRAMES = 900;
const SAMPLE_INTERVAL = 1000 / 30;
const FALLBACK_DURATION = 250;

const captureTransform = (container: Container): ReversalTransform => ({
  x: container.x,
  y: container.y,
  scaleX: container.scale.x,
  scaleY: container.scale.y,
  pivotX: container.pivot.x,
  pivotY: container.pivot.y,
  skewX: container.skew.x,
  skewY: container.skew.y,
  rotation: container.rotation,
  alpha: container.alpha,
  visible: container.visible,
  zIndex: container.zIndex,
});

const applyTransform = (container: Container, frame: ReversalTransform) => {
  if (container.destroyed) return;
  container.position.set(frame.x, frame.y);
  container.scale.set(frame.scaleX, frame.scaleY);
  container.pivot.set(frame.pivotX, frame.pivotY);
  container.skew.set(frame.skewX, frame.skewY);
  container.rotation = frame.rotation;
  container.alpha = frame.alpha;
  container.visible = frame.visible;
  container.zIndex = frame.zIndex;
};

/**
 * Records only watched steps. Does not own logical fight state, sounds or the
 * forward fight clock: suspend those before play(), then restore/render state.
 * Recordings retain identities and sprite textures, never full arena screenshots.
 */
export class FightReversal {
  private frames: ReversalFrame[] | null = null;
  private elapsed = 0;
  private sampleElapsed = 0;
  private sampleInterval = SAMPLE_INTERVAL;
  private disposed = false;
  private clones = new Map<Sprite | Text, Sprite | Text>();
  private cloneFilters = new Map<Filter, AdjustmentFilter>();
  private retainedTextures = new Set<Texture>();
  private hidden = new Map<Sprite | Text, boolean>();
  private pending?: {
    update: (ticker: Ticker) => void;
    resolve: () => void;
    reject: (error: unknown) => void;
  };

  constructor(
    private app: Application,
    private fighters: readonly AnimationFighter[],
    private speed: RefObject<number>,
    private shouldAbort: () => boolean,
    private isClanWar = false,
  ) {
    app.stage.once('destroyed', this.destroy);
    // Completed recordings can be used by a later Rewind too. Their generated
    // textures belong to the scene, independently of this playback controller.
    app.stage.once('destroyed', this.releaseTextures);
  }

  private stopped() {
    if (this.disposed) return true;
    if (this.app.stage.destroyed || this.shouldAbort()) {
      this.destroy();
      return true;
    }
    return false;
  }

  private delta(ticker: Ticker) {
    const speed = this.speed.current;
    return Math.max(0, ticker.elapsedMS) * (
      Number.isFinite(speed) ? Math.max(0, speed) : 0
    );
  }

  private capture(): ReversalFrame {
    const fighters: ReversalFighterFrame[] = [];
    const hud: ReversalHudFrame[] = [];
    const bars = new Set<Container>();
    for (const fighter of this.fighters) {
      const holder = fighter.animation;
      if (!holder.container.destroyed) {
        fighters.push({
          fighter,
          playback: { ...holder.capturePlaybackFrame() },
          weapon: holder.weapon,
          shield: holder.shield,
          container: captureTransform(holder.container),
          shadow: holder.shadow.destroyed ? null : captureTransform(holder.shadow),
        });
      }
      for (const bar of [fighter.hpBar, fighter.hpBarPhantom]) {
        if (!bar || bar.destroyed || bars.has(bar)) continue;
        bars.add(bar);
        hud.push({
          bar, scaleX: bar.scale.x, visible: bar.visible, alpha: bar.alpha,
        });
      }
    }
    const excluded = new Set<Container>();
    for (const fighter of this.fighters) {
      excluded.add(fighter.animation.container);
      if (fighter.bust) excluded.add(fighter.bust);
      for (const sprite of [
        ...(fighter.teamWeaponsIllustrations ?? []), ...(fighter.teamSkillsIllustrations ?? []),
      ]) excluded.add(sprite);
    }
    const sprites: ReversalSpriteFrame[] = [];
    for (const child of this.app.stage.children) {
      if (sprites.length >= 128) break;
      if (!(child instanceof Sprite || child instanceof Text)
        || child.destroyed || excluded.has(child)) continue;
      if (child instanceof Sprite) {
        if (child.texture.destroyed || child.texture.source.destroyed) continue;
        if (!this.retainedTextures.has(child.texture) && retainFightTexture(child.texture)) {
          this.retainedTextures.add(child.texture);
        }
      }
      sprites.push({
        sprite: child,
        ...(child instanceof Text ? {
          text: child.text, style: child.style.clone(),
        } : { texture: child.texture }),
        filters: (child.filters ?? []).map((filter) => ({
          filter,
          ...(filter instanceof AdjustmentFilter ? { adjustment: {
            red: filter.red, green: filter.green, blue: filter.blue, alpha: filter.alpha,
            gamma: filter.gamma, saturation: filter.saturation,
            contrast: filter.contrast, brightness: filter.brightness,
          } } : {}),
        })),
        transform: captureTransform(child),
        anchorX: child.anchor.x,
        anchorY: child.anchor.y,
        tint: child.tint,
        blendMode: child.blendMode,
      });
    }
    return { time: this.elapsed, fighters, hud, sprites };
  }

  private record = (ticker: Ticker) => {
    if (this.stopped() || !this.frames) return;
    this.elapsed += this.delta(ticker);
    this.sampleElapsed += Math.max(0, ticker.elapsedMS);
    if (this.sampleElapsed < this.sampleInterval) return;
    this.sampleElapsed %= this.sampleInterval;
    this.makeRoom();
    this.frames.push(this.capture());
  };

  private makeRoom() {
    if (!this.frames || this.frames.length < REVERSAL_MAX_FRAMES) return;
    // Preserve the beginning and decimate older samples instead of allowing a
    // stalled/very long step to grow an unbounded recording.
    this.frames = this.frames.filter((_, index) => index % 2 === 0);
    this.sampleInterval *= 2;
  }

  startStep(): void {
    this.app.ticker.remove(this.record, this);
    this.frames = null;
    if (this.stopped()) return;
    this.cancelPlayback();
    this.elapsed = 0;
    this.sampleElapsed = 0;
    this.sampleInterval = SAMPLE_INTERVAL;
    this.frames = [this.capture()];
    this.app.ticker.add(this.record, this, UPDATE_PRIORITY.LOW);
  }

  finishStep(): ReversalRecording {
    this.app.ticker.remove(this.record, this);
    if (!this.frames) return { duration: 0, frames: [] };
    if (!this.stopped()) {
      this.makeRoom();
      this.frames?.push(this.capture());
    }
    const frames = this.frames ?? [];
    this.frames = null;
    return { duration: this.elapsed, frames };
  }

  private render(frame: ReversalFrame) {
    for (const clone of this.clones.values()) clone.visible = false;
    for (const saved of frame.sprites ?? []) {
      if (saved.texture?.destroyed || saved.texture?.source.destroyed) continue;
      let clone = this.clones.get(saved.sprite);
      if (!clone) {
        clone = saved.text !== undefined
          ? new Text({ text: saved.text, style: saved.style }) : new Sprite(saved.texture);
        clone.eventMode = 'none';
        this.clones.set(saved.sprite, clone);
        this.app.stage.addChild(clone);
      }
      if (clone instanceof Sprite && saved.texture) clone.texture = saved.texture;
      if (clone instanceof Text) {
        clone.text = saved.text ?? '';
        if (saved.style) clone.style = saved.style;
      }
      clone.filters = saved.filters.map((savedFilter) => {
        if (!savedFilter.adjustment) return savedFilter.filter;
        let filter = this.cloneFilters.get(savedFilter.filter);
        if (!filter) {
          filter = new AdjustmentFilter();
          this.cloneFilters.set(savedFilter.filter, filter);
        }
        Object.assign(filter, savedFilter.adjustment);
        return filter;
      });
      clone.anchor.set(saved.anchorX, saved.anchorY);
      clone.tint = saved.tint;
      clone.blendMode = saved.blendMode;
      applyTransform(clone, saved.transform);
    }
    for (const saved of frame.fighters) {
      const holder = saved.fighter.animation;
      if (holder.container.destroyed) continue;
      holder.weapon = saved.weapon;
      holder.shield = saved.shield;
      holder.renderPlaybackFrame(saved.playback);
      holder.pause();
      applyTransform(holder.container, saved.container);
      if (saved.shadow) applyTransform(holder.shadow, saved.shadow);
    }
    for (const saved of frame.hud) {
      if (saved.bar.destroyed) continue;
      saved.bar.scale.x = saved.scaleX;
      saved.bar.visible = saved.visible;
      saved.bar.alpha = saved.alpha;
    }
  }

  private cleanupSprites() {
    for (const clone of this.clones.values()) {
      if (!clone.destroyed) clone.destroy();
    }
    this.clones.clear();
    for (const filter of this.cloneFilters.values()) filter.destroy();
    this.cloneFilters.clear();
    for (const [sprite, visible] of this.hidden) {
      if (!sprite.destroyed) sprite.visible = visible;
    }
    this.hidden.clear();
  }

  private cancelPlayback(error?: unknown) {
    this.cleanupSprites();
    if (!this.pending) return;
    const { update, resolve, reject } = this.pending;
    this.pending = undefined;
    this.app.ticker.remove(update, this);
    if (error !== undefined) reject(error);
    else resolve();
  }

  private animate(
    duration: number, render: (elapsed: number) => void, prepare?: () => void,
  ): Promise<void> {
    this.app.ticker.remove(this.record, this);
    this.frames = null;
    this.cancelPlayback();
    if (this.stopped()) return Promise.resolve();
    return new Promise<void>((resolve, reject) => {
      let elapsed = 0;
      const update = (ticker: Ticker) => {
        if (this.stopped()) return;
        elapsed = Math.min(duration, elapsed + this.delta(ticker));
        try {
          render(elapsed);
        } catch (error) {
          this.cancelPlayback(error);
          return;
        }
        if (elapsed >= duration) this.cancelPlayback();
      };
      this.pending = { update, resolve, reject };
      try {
        prepare?.();
        render(0);
      } catch (error) {
        this.cancelPlayback(error);
        return;
      }
      if (duration <= 0) {
        this.cancelPlayback();
        return;
      }
      this.app.ticker.add(update, this, UPDATE_PRIORITY.LOW);
    });
  }

  play(recording: ReversalRecording): Promise<void> {
    let index = recording.frames.length - 1;
    return this.animate(recording.duration, (elapsed) => {
      if (index < 0) return;
      if (elapsed >= recording.duration) index = 0;
      const time = Math.max(0, recording.duration - elapsed);
      while (index > 0 && (recording.frames[index]?.time ?? Infinity) > time) index--;
      const frame = recording.frames[index];
      if (frame) this.render(frame);
    }, () => {
      for (const frame of recording.frames) {
        for (const saved of frame.sprites ?? []) {
          if (saved.sprite.destroyed || this.hidden.has(saved.sprite)) continue;
          this.hidden.set(saved.sprite, saved.sprite.visible);
          saved.sprite.visible = false;
        }
      }
    });
  }

  /** Skipped steps have no rendered history: interpolate state, not fake frames. */
  playBetween(from: FightSnapshot, to: FightSnapshot): Promise<void> {
    const origins = new Map(from.fighters.map((saved) => [saved.fighter, saved]));
    const fullScales = new Map<Container, number>();
    for (const saved of to.fighters) {
      for (const bar of [saved.fighter.hpBar, saved.fighter.hpBarPhantom]) {
        if (!bar || bar.destroyed || fullScales.has(bar)) continue;
        const width = bar.getLocalBounds().width;
        if (width > 0) fullScales.set(bar, (bar.scale.x < 0 ? -1 : 1) * 236 / width);
      }
    }
    return this.animate(FALLBACK_DURATION, (elapsed) => {
      const progress = elapsed / FALLBACK_DURATION;
      for (const target of to.fighters) {
        const origin = origins.get(target.fighter) ?? target;
        const holder = target.fighter.animation;
        if (holder.container.destroyed) continue;
        const pose = progress === 0 ? origin : target;
        holder.weapon = pose.weapon;
        holder.shield = pose.shield;
        holder.renderPlaybackFrame({
          animation: pose.pose.animation, frame: 0, airborne: pose.pose.airborne,
        });
        holder.pause();
        const lerp = (a: number, b: number) => a + (b - a) * progress;
        const container = holder.container;
        container.position.set(
          lerp(origin.container.x, target.container.x),
          lerp(origin.container.y, target.container.y),
        );
        container.scale.set(
          lerp(origin.container.scaleX, target.container.scaleX),
          lerp(origin.container.scaleY, target.container.scaleY),
        );
        container.rotation = lerp(origin.container.rotation, target.container.rotation);
        container.alpha = lerp(origin.container.alpha, target.container.alpha);
        container.zIndex = lerp(origin.container.zIndex, target.container.zIndex);
        container.visible = progress === 0 ? origin.pose.visible : (
          progress < 1 ? origin.pose.visible || target.pose.visible : target.pose.visible
        );
        if (!holder.shadow.destroyed) {
          holder.shadow.alpha = lerp(
            origin.pose.airborne ? 0 : 1, target.pose.airborne ? 0 : 1,
          );
        }
      }
      this.renderFallbackHud(from, to, progress, fullScales);
    });
  }

  private renderFallbackHud(
    from: FightSnapshot, to: FightSnapshot, progress: number,
    fullScales: ReadonlyMap<Container, number>,
  ) {
    const fraction = (snapshot: FightSnapshot, focused: FighterSnapshot) => {
      const teammates = snapshot.fighters.filter((saved) => (
        saved.state.team === focused.state.team && !saved.state.master
      ));
      const members = this.isClanWar && !focused.state.master ? teammates : [focused];
      const hp = members.reduce((total, saved) => total + saved.state.hp, 0);
      const maxHp = members.reduce((total, saved) => total + saved.state.maxHp, 0);
      return maxHp > 0 ? Math.max(0, Math.min(1, hp / maxHp)) : 0;
    };
    const bars = new Set<Container>();
    for (const target of to.fighters) {
      if (!target.state.HUDFocused) continue;
      const origin = from.fighters.find((saved) => saved.fighter === target.fighter) ?? target;
      const start = fraction(from, origin);
      const end = fraction(to, target);
      const value = start + (end - start) * progress;
      for (const bar of [target.fighter.hpBar, target.fighter.hpBarPhantom]) {
        if (!bar || bar.destroyed || bars.has(bar)) continue;
        bars.add(bar);
        const fullScale = fullScales.get(bar);
        if (fullScale !== undefined) bar.scale.x = fullScale * Math.max(1 / 236, value);
        bar.visible = value > 0;
      }
    }
  }

  private releaseTextures = () => {
    for (const texture of this.retainedTextures) releaseFightTexture(texture);
    this.retainedTextures.clear();
  };

  destroy = (): void => {
    if (this.disposed) return;
    this.disposed = true;
    this.app.ticker.remove(this.record, this);
    this.app.stage.off('destroyed', this.destroy);
    this.frames = null;
    this.cancelPlayback();
  };
}
