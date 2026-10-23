import { gsap } from 'gsap';
import {
  AnimatedSprite, type AnimatedSpriteFrames, Application, Ticker, UPDATE_PRIORITY
} from 'pixi.js';

const activeClock: { current: FightClock | null } = { current: null };

export class FightClock {
  private timeline = gsap.timeline({ paused: true });

  private effects = new Ticker();

  private elapsed = 0;

  private disposed = false;

  constructor(private app: Application) {
    activeClock.current = this;
    this.effects.autoStart = false;
    this.effects.update(0);
    app.ticker.add(this.update, this, UPDATE_PRIORITY.HIGH);
  }

  private update = (ticker: Ticker) => {
    this.elapsed += ticker.elapsedMS / 1000;
    this.timeline.totalTime(this.elapsed, false);
    if (!this.disposed) {
      this.effects.update(this.elapsed * 1000);
    }
  };

  tween(target: gsap.TweenTarget, vars: gsap.TweenVars) {
    this.timeline.to(target, vars, this.elapsed);
  }

  sprite(frames: AnimatedSpriteFrames) {
    const sprite = new AnimatedSprite(frames, false);
    const update = (ticker: Ticker) => {
      if (sprite.playing) sprite.update(ticker);
    };
    this.effects.add(update);
    sprite.once('destroyed', () => {
      if (!this.disposed) this.effects.remove(update);
    });
    return sprite;
  }

  async seek(shouldContinue: () => boolean) {
    const { app } = this;
    app.ticker.stop();
    app.ticker.remove(app.render, app);

    try {
      while (!this.disposed && shouldContinue()) {
        const start = performance.now();
        // Fixed-size ticks preserve animation events that large time jumps would skip.
        while (!this.disposed && shouldContinue() && performance.now() - start < 8) {
          app.ticker.update(app.ticker.lastTime + 1000 / 60);
          await Promise.resolve();
        }
        if (!this.disposed && shouldContinue()) {
          await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
        }
      }
    } finally {
      if (!this.disposed) {
        app.ticker.add(app.render, app, UPDATE_PRIORITY.LOW);
        app.render();
        app.ticker.start();
      }
    }
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
