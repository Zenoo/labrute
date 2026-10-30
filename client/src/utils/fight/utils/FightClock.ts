import { gsap } from 'gsap';
import {
  AnimatedSprite, type AnimatedSpriteFrames, Application, Container, Ticker, UPDATE_PRIORITY
} from 'pixi.js';

const activeClock: { current: FightClock | null } = { current: null };

export class FightClock {
  private timeline = gsap.timeline({ paused: true });

  private effects = new Ticker();

  private elapsed = 0;

  private disposed = false;

  private suspended = false;

  private sprites = new Set<AnimatedSprite>();

  private transients = new Set<Container>();

  constructor(private app: Application) {
    activeClock.current = this;
    this.effects.autoStart = false;
    this.effects.update(0);
    app.ticker.add(this.update, this, UPDATE_PRIORITY.HIGH);
  }

  private update = (ticker: Ticker) => {
    if (this.suspended) return;

    this.elapsed += ticker.elapsedMS / 1000;
    this.timeline.totalTime(this.elapsed, false);
    if (!this.disposed) {
      this.effects.update(this.elapsed * 1000);
    }
  };

  suspend() {
    this.suspended = true;
  }

  resume() {
    this.suspended = false;
  }

  cancelAnimations() {
    this.timeline.clear();

    for (const sprite of this.sprites) {
      sprite.destroy();
    }
    for (const transient of this.transients) {
      transient.destroy({ children: true });
    }
  }

  // Transient visuals outlive their step, but never a cancelled forward timeline.
  transient<T extends Container>(container: T): T {
    this.transients.add(container);
    container.once('destroyed', () => this.transients.delete(container));
    return container;
  }

  tween(target: gsap.TweenTarget, vars: gsap.TweenVars) {
    this.timeline.to(target, vars, this.elapsed);
  }

  sprite(frames: AnimatedSpriteFrames) {
    const sprite = new AnimatedSprite(frames, false);
    this.sprites.add(sprite);
    const update = (ticker: Ticker) => {
      if (sprite.playing) sprite.update(ticker);
    };
    this.effects.add(update);
    sprite.once('destroyed', () => {
      this.sprites.delete(sprite);
      if (!this.disposed) this.effects.remove(update);
    });
    return sprite;
  }

  destroy() {
    if (this.disposed) return;
    this.disposed = true;
    this.app.ticker.remove(this.update, this);
    this.timeline.kill();
    this.effects.destroy();
    if (activeClock.current === this) activeClock.current = null;
  }
}

export const getFightClock = () => {
  if (!activeClock.current) throw new Error('Fight clock not initialized');
  return activeClock.current;
};

export const fightSprite = (
  frames: AnimatedSpriteFrames | undefined
) => getFightClock().sprite(frames ?? []);
