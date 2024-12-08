/* eslint-disable no-void */
import { Application } from 'pixi.js';

// Shake the stage along the Y-axis with decreasing intensity over a duration
export const shakeStage = async (
  app: Application,
  speed: React.MutableRefObject<number>,
  intensity: number,
  duration: number,
): Promise<void> => {
  const startTime = Date.now();
  const originalY = app.stage.y;

  return new Promise((resolve) => {
    const update = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration / speed.current) {
        // Calculate the current intensity, which decreases over time.
        const currentIntensity = intensity * (1 - (elapsed * speed.current) / duration);
        // Apply a random offset to the stage's Y position.
        // eslint-disable-next-line no-param-reassign
        app.stage.y = originalY + (Math.random() - 0.5) * currentIntensity * 2;
      } else {
        // Reset the stage's position
        // eslint-disable-next-line no-param-reassign
        app.stage.y = originalY;
        app.ticker.remove(update);
        // resolve the promise
        resolve();
      }
    };
    app.ticker.add(update);
  });
};

export default { shakeStage };