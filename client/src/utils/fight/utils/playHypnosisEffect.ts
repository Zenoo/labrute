import {
  Application, ColorMatrixFilter, Container, Graphics, RenderTexture, Sprite, Ticker
} from 'pixi.js';

export type HypnosisEffect = Promise<void> & {
  dispose: () => void;
  finish: () => Promise<void>;
};

// Hypnosis resolves before its final flash/fade. Rewind resolves after its opening
// spiral, holds the live scene in negative colors, then finish() plays the exit.
export const playHypnosisEffect = (
  app: Application,
  speed: React.RefObject<number>,
  shouldAbort: () => boolean = () => false,
  sustained = false,
): HypnosisEffect => {
  let complete = () => {};
  const result = new Promise<void>((resolve) => { complete = resolve; }) as HypnosisEffect;
  result.dispose = complete;
  result.finish = () => { result.dispose(); return Promise.resolve(); };
  if (shouldAbort() || !app.stage || app.stage.destroyed) {
    complete();
    return result;
  }

  const { stage, ticker } = app;
  const spiralContainer = new Container();
  const invertedContainer = new Container();
  const hypnosisFilter = new ColorMatrixFilter();
  hypnosisFilter.negative(true);
  if (!sustained) hypnosisFilter.hue(73, true);
  const invertFilter = new ColorMatrixFilter();
  if (sustained) invertFilter.negative(true);
  else invertFilter.hue(-146, false);
  if (!sustained) stage.filters = [...(stage.filters ?? []), hypnosisFilter];
  spiralContainer.filters = sustained ? [] : [invertFilter];
  invertedContainer.filters = [invertFilter];
  spiralContainer.zIndex = 1002;
  invertedContainer.zIndex = 1001;
  spiralContainer.alpha = 0;
  stage.addChild(spiralContainer);
  stage.addChild(invertedContainer);

  const stageTexture = RenderTexture.create({
    width: app.screen.width, height: app.screen.height,
  });
  const stageSprite = new Sprite(stageTexture);
  const spiralStageSprite = new Sprite(stageTexture);
  const spiral = new Graphics();

  let elapsed = 0;
  let phase = 0;
  let phaseElapsed = 0;
  let duration = 0.05 / speed.current;
  let brightness = 10;
  let disposed = false;
  let holding = false;
  let closing = false;
  let finishPromise: Promise<void> | undefined;
  let finishComplete = () => {};

  const removeFilter = () => {
    if (!stage.destroyed) {
      stage.filters = stage.filters?.filter((filter) => filter !== hypnosisFilter) ?? [];
    }
  };
  // Build a single ribbon once. Rebuilding hundreds of stroked paths each tick
  // forces Pixi to tessellate the mask again throughout the rewind.
  const points: number[] = [];
  const inner: number[] = [];
  for (let i = 0; i < 12 * Math.PI * 2; i += 0.1) {
    const radius = i * 4;
    const halfWidth = i * 0.2;
    points.push((radius + halfWidth) * Math.cos(i), (radius + halfWidth) * Math.sin(i));
    inner.unshift((radius - halfWidth) * Math.cos(i), (radius - halfWidth) * Math.sin(i));
  }
  spiral.poly([...points, ...inner]).fill(0xffffff);
  spiral.position.set(app.screen.width / 2, app.screen.height / 2);

  const update = (frame: Ticker) => {
    if (shouldAbort() || stage.destroyed) {
      result.dispose();
      return;
    }
    if (holding) return;
    const delta = Math.max(0, frame.elapsedMS) / 1000 * Math.max(0, speed.current);
    elapsed += delta;
    spiral.rotation += (closing ? 15 : -15) * delta;
    spiral.scale.set(1 + 0.1 * Math.sin(elapsed));
    if (sustained) {
      const progress = Math.min(elapsed / 1.2, 1);
      spiralContainer.alpha = Math.sin(progress * Math.PI);
      invertedContainer.alpha = 1 - progress;
      if (progress === 1) {
        spiralContainer.removeFromParent();
        invertedContainer.removeFromParent();
        holding = true;
        if (closing) result.dispose();
        else complete();
      }
      return;
    }
    if (phase >= 3 && brightness > 1) {
      brightness--;
      hypnosisFilter.brightness(brightness, false);
      if (brightness <= 1) removeFilter();
    }

    // Use the same elapsed fight time as FightClock, never GSAP's wall clock.
    phaseElapsed += frame.elapsedMS / 1000;
    while (phase < 4 && phaseElapsed >= duration) {
      phaseElapsed -= duration;
      phase++;
      if (phase === 1) {
        spiralContainer.alpha = 1;
        duration = 1 / speed.current;
      } else if (phase === 2) {
        invertedContainer.alpha = 0;
        invertedContainer.removeFromParent();
        duration = 1.2 / speed.current;
      } else if (phase === 3) {
        spiralContainer.alpha = 0.3;
        hypnosisFilter.negative(true);
        hypnosisFilter.hue(-75, true);
        duration = 0.5 / speed.current;
        complete();
      } else {
        spiralContainer.alpha = 0;
        spiralContainer.removeFromParent();
      }
    }
    const progress = Math.min(phaseElapsed / duration, 1);
    if (phase === 0) spiralContainer.alpha = progress;
    if (phase === 1) invertedContainer.alpha = 1 - progress;
    if (phase === 2) spiralContainer.alpha = 1 - 0.7 * progress;
    if (phase === 3) spiralContainer.alpha = 0.3 * (1 - progress);
    if (phase === 4 && brightness <= 1) result.dispose();
  };

  result.dispose = () => {
    if (disposed) return;
    disposed = true;
    ticker.remove(update);
    stage.off('destroyed', result.dispose);
    removeFilter();
    spiralContainer.mask = null;
    spiralContainer.filters = [];
    invertedContainer.filters = [];
    spiralContainer.removeFromParent();
    invertedContainer.removeFromParent();
    // Both sprites share the render texture; only its owner destroys it.
    stageSprite.destroy();
    spiralStageSprite.destroy();
    spiral.destroy();
    spiralContainer.destroy();
    invertedContainer.destroy();
    stageTexture.destroy(true);
    hypnosisFilter.destroy();
    invertFilter.destroy();
    complete();
    finishComplete();
  };
  if (sustained) {
    result.finish = () => {
      if (disposed || shouldAbort() || stage.destroyed) {
        result.dispose();
        return Promise.resolve();
      }
      if (finishPromise) return finishPromise;
      finishPromise = new Promise<void>((resolve) => { finishComplete = resolve; });
      try {
        // Refresh from the restored live scene, never the pre-rewind snapshot.
        // Detach both copies before writing into their shared texture.
        spiralContainer.removeFromParent();
        invertedContainer.removeFromParent();
        app.renderer.render({ container: stage, target: stageTexture });
        removeFilter();
        // The snapshot is negative already; the masked copy reveals normal colors.
        invertedContainer.filters = [];
        spiralContainer.filters = [invertFilter];
        invertedContainer.alpha = 1;
        spiralContainer.alpha = 0;
        stage.addChild(invertedContainer, spiralContainer);
        elapsed = 0;
        holding = false;
        closing = true;
      } catch (error) {
        result.dispose();
        return Promise.reject(error);
      }
      return finishPromise;
    };
  }
  stage.once('destroyed', result.dispose);
  try {
    app.renderer.render({ container: stage, target: stageTexture });
    if (sustained) stage.filters = [...(stage.filters ?? []), hypnosisFilter];
    invertedContainer.addChild(stageSprite);
    spiralContainer.addChild(spiralStageSprite);
    // Attach only after the snapshot, so it does not capture the mask itself.
    stage.addChild(spiral);
    spiralContainer.mask = spiral;
    ticker.add(update);
  } catch (error) {
    result.dispose();
    throw error;
  }
  return result;
};
