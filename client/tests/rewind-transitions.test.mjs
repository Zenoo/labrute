import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';
import { Container, DOMAdapter, Sprite, Text, Texture, TextureSource, Ticker } from 'pixi.js';
import { readFileSync } from 'node:fs';
import { SkillId, StepType } from '@labrute/core';
import { gsap } from 'gsap';

let server;
let Fight;
let FightClock;
let FightReversal;

before(async () => {
  server = await createServer({
    configFile: false,
    plugins: [{
      name: 'silent-rewind-test',
      enforce: 'pre',
      resolveId(id) {
        if (id === '@pixi/sound') return '\0silent-audio';
        const visual = id.match(/\/(displayDamage|displayHeal)(?:\.[jt]s)?$/);
        if (visual) return `\0unused-visual:${visual[1]}`;
      },
      load(id) {
        if (id === '\0silent-audio') return 'export const sound = {};';
        if (id.startsWith('\0unused-visual:')) {
          return `export const ${id.split(':')[1]} = () => {};`;
        }
      },
    }],
    ssr: { external: ['@labrute/core', '@labrute/prisma'], noExternal: ['@pixi/sound'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ Fight } = await server.ssrLoadModule('/src/utils/fight/Fight.ts'));
  ({ FightClock } = await server.ssrLoadModule('/src/utils/fight/utils/FightClock.ts'));
  ({ FightReversal } = await server.ssrLoadModule('/src/utils/fight/utils/FightReversal.ts'));
});

after(async () => {
  await server?.close();
  gsap.ticker.sleep();
});

const gate = () => {
  let resolve;
  const promise = new Promise((done) => { resolve = done; });
  return { promise, resolve };
};

// Isolate rewind orchestration from arena construction, rendering and combat state.
const fixture = (t) => {
  const calls = [];
  const opening = gate();
  const closing = gate();
  const ticker = new Ticker();
  ticker.update(0);
  const clock = new FightClock({ ticker });
  const fight = Object.create(Fight.prototype);
  const holder = {
    seekPose: { visible: true },
    pause() { calls.push('pause'); },
    play() { calls.push('resume'); },
  };
  Object.assign(fight, {
    recordsRewind: true,
    history: [{}, {}],
    visualHistory: [],
    allFighters: [{ animation: holder }],
    shouldAbort: () => false,
    hypnosisEffect: {
      finish() { calls.push('closing'); return closing.promise; },
      dispose() { calls.push('dispose'); },
    },
    playHypnosisEffect(sustained) {
      assert.equal(sustained, true);
      calls.push('opening');
      return opening.promise;
    },
    reversal: {
      async playBetween() { calls.push('reverse'); },
      destroy() { calls.push('destroy'); },
    },
    restoreSnapshot() { calls.push('restore'); },
    async renderState() { calls.push('render'); },
  });
  t.after(() => { clock.destroy(); ticker.destroy(); });
  return { fight, clock, ticker, calls, opening, closing };
};

test('rewind waits for opening, reverses, then waits for closing before resuming', async (t) => {
  const f = fixture(t);
  const rewinding = f.fight.rewind(1);
  assert.deepEqual(f.calls, ['pause', 'opening']);
  assert.equal(f.clock.suspended, true);
  f.opening.resolve();
  // Advance through the async reverse and restored-state rendering boundaries.
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(f.calls, ['pause', 'opening', 'reverse', 'restore', 'render', 'pause', 'closing']);
  assert.equal(f.clock.suspended, true);
  assert.equal(f.fight.reversing, true);
  f.closing.resolve();
  await rewinding;
  assert.deepEqual(f.calls.slice(-3), ['resume', 'dispose', 'destroy']);
  assert.equal(f.clock.suspended, false);
  assert.equal(f.fight.reversing, false);
});

test('a failed closing transition still disposes rewind and resumes the clock', async (t) => {
  const f = fixture(t);
  const error = new Error('Closing snapshot failed');
  f.fight.hypnosisEffect.finish = async () => { throw error; };
  const rewinding = f.fight.rewind(1);
  f.opening.resolve();
  await assert.rejects(rewinding, (failure) => failure === error);
  assert.deepEqual(f.calls.slice(-2), ['dispose', 'destroy']);
  assert.equal(f.clock.suspended, false);
  assert.equal(f.fight.reversing, false);
});


test('reported fight clears its lethal text and fierce trail, then supports the later activation', async (t) => {
  t.mock.method(DOMAdapter.get(), 'createCanvas', () => ({ getContext: () => null }));
  const sample = JSON.parse(readFileSync(new URL('./fixtures/rewind-fierce-brute.json', import.meta.url)));
  const rewindIndex = sample.steps.findIndex((step) => step.a === StepType.Rewind);
  const rewind = sample.steps[rewindIndex];
  const target = rewindIndex - rewind.n;
  assert.equal(sample.steps[rewindIndex - 1].d, 28);
  assert.equal(target, 27);
  const f = fixture(t);
  const stage = new Container();
  const container = new Container();
  container.addChild(new Sprite(Texture.EMPTY));
  stage.addChild(container);
  const shadow = new Container();
  const generated = [];
  const app = {
    stage, ticker: f.ticker,
    renderer: {
      generateTexture() {
        const texture = new Texture({ source: new TextureSource({ width: 20, height: 30 }) });
        generated.push(texture);
        return texture;
      },
    },
  };
  const fighter = {
    ...sample.fighters[1],
    animation: {
      container, shadow, seekPose: { visible: true },
      capturePlaybackFrame: () => ({ animation: 'idle', frame: 0, airborne: false }),
      renderPlaybackFrame() {}, pause() {}, play() {},
    },
  };
  Object.assign(f.fight, {
    app, speed: { current: 1 }, fighters: [fighter], allFighters: [fighter],
    history: Array.from({ length: rewindIndex + 1 }, () => ({})),
    restoreSnapshot() { fighter.fierceBrute = false; },
  });
  const reversal = new FightReversal(app, [fighter], f.fight.speed, () => false);
  f.fight.reversal = reversal;
  const tick = () => f.ticker.update(f.ticker.lastTime + 40);
  t.after(() => {
    f.fight.clearFierceBruteEffects();
    reversal.destroy();
    stage.destroy({ children: true });
    shadow.destroy();
  });
  let lethalText;
  for (let index = target; index < rewindIndex; index++) {
    const step = sample.steps[index];
    reversal.startStep();
    if (step.a === StepType.SkillActivate && step.s === SkillId.fierceBrute) {
      fighter.fierceBrute = true;
      f.fight.startFierceBruteEffect(fighter);
    }
    if (index === rewindIndex - 1) {
      lethalText = f.clock.transient(new Text({ text: `-${step.d}` }));
      stage.addChild(lethalText);
      f.clock.tween(lethalText, { y: -100, duration: 2 });
    }
    container.x += 20;
    tick();
    tick();
    f.fight.visualHistory[index] = reversal.finishStep();
  }
  assert.ok(generated.length > 0);
  assert.equal(fighter.fierceBrute, true);
  const originalGhosts = stage.children.filter((child) => child instanceof Sprite);
  assert.ok(originalGhosts.length > 0);
  const rewinding = f.fight.rewind(rewind.n);
  f.opening.resolve();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(lethalText.destroyed, true);
  assert.ok(originalGhosts.every((ghost) => ghost.destroyed));
  for (let frame = 0; frame < rewind.n * 3; frame++) {
    tick();
    await new Promise((resolve) => setImmediate(resolve));
  }
  assert.deepEqual(stage.children, [container]);
  f.closing.resolve();
  await rewinding;
  assert.equal(fighter.fierceBrute, false);
  assert.equal(f.ticker.count, 1); // Only the forward fight clock remains.

  const laterActivation = sample.steps.findIndex((step, index) => (
    index > rewindIndex && step.a === StepType.SkillActivate && step.s === SkillId.fierceBrute
  ));
  assert.ok(laterActivation > rewindIndex);
  fighter.fierceBrute = true;
  f.fight.startFierceBruteEffect(fighter);
  tick();
  const freshGhost = stage.children.find((child) => child instanceof Sprite);
  assert.ok(freshGhost);
  assert.equal(freshGhost.texture.destroyed, false);
  const expiration = sample.steps.slice(laterActivation).find((step) => step.a === StepType.SkillExpire);
  await f.fight.skillExpire(expiration);
  assert.equal(freshGhost.destroyed, true);
  assert.equal(f.ticker.count, 1);
  assert.deepEqual(stage.children, [container]);

  // Also cover rewinds/seeks that restore a state inside an active Fierce Brute.
  fighter.animation.setAirborn = () => {};
  fighter.animation.setAnimation = () => {};
  fighter.fierceBrute = true;
  f.fight.reversing = true;
  await Fight.prototype.renderState.call(f.fight);
  tick();
  assert.deepEqual(stage.children, [container]);
  f.fight.reversing = false;
  tick();
  const restoredGhost = stage.children.find((child) => child instanceof Sprite);
  assert.ok(restoredGhost);
  assert.equal(restoredGhost.texture.destroyed, false);
  fighter.fierceBrute = false;
  await Fight.prototype.renderState.call(f.fight);
  assert.equal(restoredGhost.destroyed, true);
  assert.equal(f.ticker.count, 1);

});
