import {
  Application, Bounds, Sprite, Ticker
} from 'pixi.js';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import { MotionBlurFilter } from 'pixi-filters/motion-blur';
import type { AnimationFighter } from './findFighter';
import { ownFightTexture, releaseFightTexture } from './FightReversal';

export class FierceBruteEffect {
  private ghosts: Sprite[] = [];
  private filters: AdjustmentFilter[] = [];
  private bounds = new Bounds();
  private elapsed = 0;
  private index = 0;
  private disposed = false;

  constructor(
    private app: Application,
    private fighter: AnimationFighter,
    private speed: React.RefObject<number>,
    private paused: () => boolean,
    private shouldAbort: () => boolean,
  ) {
    app.stage.once('destroyed', this.destroy);
    app.ticker.add(this.update);
  }

  private update = (ticker: Ticker) => {
    const { animation: holder } = this.fighter;
    if (this.shouldAbort() || holder.container.destroyed || !this.fighter.fierceBrute) {
      this.destroy();
      return;
    }
    if (this.paused() || this.speed.current <= 0) return;
    const interval = Math.max(18, Math.min(33, 1000 / (35 * this.speed.current)));
    this.elapsed += ticker.deltaMS;
    if (this.elapsed < interval) return;
    this.elapsed %= interval;

    for (const filter of this.filters) {
      filter.blue += 0.16;
      filter.red -= 0.28;
    }
    const slot = this.index++ % 6;
    let ghost = this.ghosts[slot];
    let filter = this.filters[slot];
    if (!ghost) {
      ghost = new Sprite();
      filter = new AdjustmentFilter();
      this.ghosts[slot] = ghost;
      this.filters[slot] = filter;
      ghost.filters = [filter];
      this.app.stage.addChild(ghost);
    }

    const previousTexture = ghost.texture;
    const previousFilters = holder.container.filters;
    const shadowVisible = holder.shadow.visible;
    holder.shadow.visible = false;
    holder.container.filters = (previousFilters ?? [])
      .filter((activeFilter) => !(activeFilter instanceof MotionBlurFilter));
    try {
      ghost.texture = ownFightTexture(this.app.renderer.generateTexture(holder.container));
    } finally {
      holder.shadow.visible = shadowVisible;
      holder.container.filters = [...(previousFilters ?? [])];
    }
    releaseFightTexture(previousTexture);
    const bounds = holder.container.getBounds(false, this.bounds).rectangle;
    ghost.position.set(bounds.x, bounds.y);
    ghost.anchor.set(holder.container.scale.x === 1 ? 0 : 1, 0);
    ghost.scale.copyFrom(holder.container.scale);
    ghost.zIndex = holder.container.zIndex - 1;
    if (filter) Object.assign(filter, {
      blue: 0.9, red: 2.4, saturation: 0.28, gamma: 0.26, contrast: 0.62,
    });
  };

  destroy = () => {
    if (this.disposed) return;
    this.disposed = true;
    this.app.ticker.remove(this.update);
    this.app.stage.off('destroyed', this.destroy);
    for (const ghost of this.ghosts) {
      releaseFightTexture(ghost.texture);
      ghost.destroy();
    }
    for (const filter of this.filters) filter.destroy();
    this.ghosts = [];
    this.filters = [];
  };
}

