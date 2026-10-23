import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { gsap } from 'gsap';
import { Application, Texture, Ticker } from 'pixi.js';
import { FightClock, getFightClock } from '../src/utils/fight/utils/FightClock.ts';

const frames = new Map();
let nextFrame = 0;
globalThis.requestAnimationFrame = (callback) => {
  const id = ++nextFrame;
  frames.set(id, setTimeout(() => {
    frames.delete(id);
    callback(performance.now());
  }, 1));
  return id;
};
globalThis.cancelAnimationFrame = (id) => {
  clearTimeout(frames.get(id));
  frames.delete(id);
};

after(() => {
  for (const timer of frames.values()) clearTimeout(timer);
  gsap.ticker.sleep();
});

const fixture = (t) => {
  const app = new Application();
  app.ticker = new Ticker();
  app.ticker.update(0);
  let renders = 0;
  app.render = () => { renders++; };
  const clock = new FightClock(app);
  t.after(() => {
    clock.destroy();
    app.ticker.destroy();
    app.stage.destroy({ children: true });
  });
  const tick = (milliseconds) => app.ticker.update(app.ticker.lastTime + milliseconds);
  return { app, clock, tick, renders: () => renders };
};

test('tweens advance only with fight ticks, not the GSAP wall clock', async (t) => {
  const { clock, tick } = fixture(t);
  const target = { x: 0 };
  clock.tween(target, { x: 100, duration: 1, ease: 'none' });
  tick(250);
  assert.equal(target.x, 25);
  await new Promise((resolve) => setTimeout(resolve, 30));
  assert.equal(target.x, 25);
  tick(750);
  assert.equal(target.x, 100);
});

test('new tweens start at the current fight time after an idle gap', (t) => {
  const { clock, tick } = fixture(t);
  const target = { x: 0 };
  clock.tween(target, { x: 10, duration: 0.1, ease: 'none' });
  tick(100);
  tick(2000);
  clock.tween(target, { x: 20, duration: 1, ease: 'none' });
  tick(500);
  assert.equal(target.x, 15);
});

test('simultaneous tweens and delays finish together', (t) => {
  const { clock, tick } = fixture(t);
  const first = { x: 0 };
  const second = { y: 0 };
  let completed = 0;
  clock.tween(first, { x: 10, duration: 0.5, onComplete: () => completed++ });
  clock.tween(second, { y: 20, duration: 0.5, onComplete: () => completed++ });
  clock.tween({}, { duration: 0.5, onComplete: () => completed++ });
  tick(500);
  assert.equal(completed, 3);
  assert.equal(first.x, 10);
  assert.equal(second.y, 20);
});

test('animated effects use the fight clock and unregister when destroyed', (t) => {
  const { app, clock, tick } = fixture(t);
  const sprite = clock.sprite([Texture.EMPTY, Texture.EMPTY, Texture.EMPTY]);
  sprite.animationSpeed = 1;
  sprite.loop = false;
  sprite.play();
  app.stage.addChild(sprite);
  tick(1000 / 60);
  assert.equal(sprite.currentFrame, 1);
  tick(1000 / 60);
  assert.equal(sprite.currentFrame, 2);
  sprite.destroy();
  assert.doesNotThrow(() => tick(1000 / 60));
});

test('seeking runs asynchronous fight actions without rendering intermediate frames', async (t) => {
  const { app, clock, renders } = fixture(t);
  let step = 0;
  const action = () => new Promise((resolve) => {
    clock.tween({}, { duration: 0.1, onComplete: resolve });
  });
  const playback = (async () => {
    await action();
    step++;
    await action();
    step++;
  })();
  await clock.seek(() => step < 2);
  await playback;
  assert.equal(step, 2);
  assert.equal(renders(), 1);
  assert.equal(app.ticker.started, true);
  app.ticker.stop();
});

test('disposing cancels callbacks and allows sprites to be destroyed afterwards', (t) => {
  const { app, clock, tick } = fixture(t);
  let completed = false;
  const sprite = clock.sprite([Texture.EMPTY]);
  app.stage.addChild(sprite);
  clock.tween({}, { duration: 0.1, onComplete: () => { completed = true; } });
  clock.destroy();
  tick(1000);
  assert.equal(completed, false);
  assert.doesNotThrow(() => sprite.destroy());
  assert.throws(() => getFightClock(), /not initialized/);
});

test('seeking stops at the selected action and normal ticks resume from there', async (t) => {
  const { app, clock, tick } = fixture(t);
  let step = 0;
  const action = () => new Promise((resolve) => {
    clock.tween({}, { duration: 0.1, onComplete: resolve });
  });
  const playback = (async () => {
    await action();
    step++;
    await action();
    step++;
  })();
  await clock.seek(() => step < 1);
  app.ticker.stop();
  assert.equal(step, 1);
  tick(100);
  await playback;
  assert.equal(step, 2);
});

test('disposing an old fight does not clear the replacement fight clock', (t) => {
  const oldFight = fixture(t);
  const replacement = fixture(t);
  oldFight.clock.destroy();
  assert.equal(getFightClock(), replacement.clock);
});

test('disposing during a seek does not restart the old ticker', async (t) => {
  const { app, clock, renders } = fixture(t);
  clock.tween({}, { duration: 0.1, onComplete: () => clock.destroy() });
  await clock.seek(() => true);
  assert.equal(app.ticker.started, false);
  assert.equal(renders(), 0);
});
