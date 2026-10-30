import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { gsap } from 'gsap';
import { Application, Container, Sprite, Texture, Ticker } from 'pixi.js';
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

test('suspension freezes forward tweens and resumes without consuming rewind time', (t) => {
  const { clock, tick } = fixture(t);
  const target = { x: 0 };
  let completed = 0;

  clock.tween(target, {
    x: 100, duration: 1, ease: 'none', onComplete: () => completed++,
  });
  tick(250);
  clock.suspend();
  tick(5000);
  assert.equal(target.x, 25);
  assert.equal(completed, 0);
  clock.resume();
  tick(750);
  assert.equal(target.x, 100);
  assert.equal(completed, 1);
});

test('rewind cancellation discards abandoned forward callbacks and effect sprites', (t) => {
  const { app, clock, tick } = fixture(t);
  const target = { x: 0 };
  let completed = false;
  const sprite = clock.sprite([Texture.EMPTY, Texture.EMPTY]);
  app.stage.addChild(sprite);
  clock.tween(target, { x: 100, duration: 1, onComplete: () => { completed = true; } });
  tick(250);
  clock.suspend();
  clock.cancelAnimations();
  target.x = 5;
  clock.resume();
  tick(1000);
  assert.equal(target.x, 5);
  assert.equal(completed, false);
  assert.equal(sprite.destroyed, true);
  clock.tween(target, { x: 10, duration: 0.5, ease: 'none' });
  tick(500);
  assert.equal(target.x, 10);
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

test('disposing an old fight does not clear the replacement fight clock', (t) => {
  const oldFight = fixture(t);
  const replacement = fixture(t);
  oldFight.clock.destroy();
  assert.equal(getFightClock(), replacement.clock);
});

test('disposing inside an animation callback safely stops the clock', (t) => {
  const { clock, tick } = fixture(t);
  clock.tween({}, { duration: 0.1, onComplete: () => clock.destroy() });
  assert.doesNotThrow(() => tick(100));
});


test('rewind removes transient visuals even when their tween cleanup never runs', (t) => {
  const { app, clock, tick } = fixture(t);
  const permanent = new Sprite(Texture.EMPTY);
  const skill = clock.transient(new Sprite(Texture.EMPTY));
  const group = clock.transient(new Container());
  const child = group.addChild(new Sprite(Texture.EMPTY));
  app.stage.addChild(permanent, skill, group);
  let completed = false;
  clock.tween(skill, { alpha: 0, duration: 3, onComplete: () => { completed = true; } });
  tick(100);
  clock.suspend();
  clock.cancelAnimations();
  assert.equal(skill.destroyed, true);
  assert.equal(group.destroyed, true);
  assert.equal(child.destroyed, true);
  assert.equal(permanent.destroyed, false);
  assert.equal(Texture.EMPTY.destroyed, false);
  assert.deepEqual(app.stage.children, [permanent]);
  clock.resume();
  tick(5000);
  assert.equal(completed, false);
  assert.doesNotThrow(() => clock.cancelAnimations());
});
