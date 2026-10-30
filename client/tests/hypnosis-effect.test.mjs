import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Container, DOMAdapter, Ticker } from 'pixi.js';
import { playHypnosisEffect } from '../src/utils/fight/utils/playHypnosisEffect.ts';

// Exercise resource ownership and fight-time scheduling without a browser or renderer.
const fixture = (t, speed = 1, shouldAbort, sustained = false) => {
  // Filters query shader precision at construction; no GPU context is needed here.
  t.mock.method(DOMAdapter.get(), 'createCanvas', () => ({ getContext: () => null }));
  const stage = new Container();
  const ticker = new Ticker();
  ticker.update(0);
  const existingFilter = {};
  stage.filters = [existingFilter];
  let renders = 0;
  const snapshots = [];
  const app = {
    stage,
    ticker,
    screen: { width: 500, height: 300 },
    renderer: {
      render({ container, target }) {
        renders++;
        snapshots.push([...stage.filters]);
        assert.equal(container, stage);
        assert.equal(target.width, 500);
        // Never sample the snapshot texture while rendering into that same texture.
        assert.ok(stage.children.every((child) => child.children.length === 0));
      },
    },
  };
  const effect = playHypnosisEffect(app, { current: speed }, shouldAbort, sustained);
  const [spiral, inverted] = stage.children;
  const sprites = [spiral.children[0], inverted.children[0]];
  const texture = sprites[0].texture;
  assert.equal(sprites[1].texture, texture);
  const mask = spiral.mask;
  const filters = [stage.filters[1], inverted.filters[0]];
  if (!sustained) assert.equal(spiral.filters[0], filters[1]);
  const destroyedTexture = t.mock.method(texture, 'destroy');
  const destroyedFilters = filters.map((filter) => t.mock.method(filter, 'destroy'));
  const tick = (milliseconds) => ticker.update(ticker.lastTime + milliseconds);
  t.after(() => {
    effect.dispose();
    ticker.destroy();
    stage.destroy({ children: true });
  });
  const assertClean = () => {
    assert.equal(ticker.count, 0);
    assert.equal(stage.listenerCount('destroyed'), 0);
    assert.equal(stage.children.length, 0);
    if (!stage.destroyed) assert.deepEqual(stage.filters, [existingFilter]);
    for (const resource of [spiral, inverted, ...sprites, mask]) {
      assert.equal(resource.destroyed, true);
    }
    assert.equal(destroyedTexture.mock.callCount(), 1);
    assert.deepEqual(destroyedTexture.mock.calls[0].arguments, [true]);
    for (const destroy of destroyedFilters) assert.equal(destroy.mock.callCount(), 1);
    effect.dispose();
    assert.equal(destroyedTexture.mock.callCount(), 1);
  };
  return { stage, effect, tick, spiral, inverted, assertClean, snapshots, renders: () => renders };
};

test('resolves at 2.25 fight seconds, then cleans the continuing fade and flash', async (t) => {
  const f = fixture(t);
  let completed = false;
  f.effect.then(() => { completed = true; });
  assert.equal(f.renders(), 1);
  assert.equal(f.spiral.alpha, 0);
  f.tick(50);
  assert.equal(f.spiral.alpha, 1);
  f.tick(1000);
  assert.equal(f.inverted.parent, null);
  f.tick(1199);
  await Promise.resolve();
  assert.equal(completed, false);
  f.tick(1);
  await f.effect;
  assert.equal(completed, true);
  assert.ok(Math.abs(f.spiral.alpha - 0.3) < 1e-10);
  assert.equal(f.spiral.destroyed, false);
  for (let frame = 0; frame < 9; frame++) f.tick(16);
  assert.equal(f.stage.filters.length, 1);
  f.tick(356);
  f.assertClean();
});

test('speed scales fade durations and an explicit disposal cancels the tail', async (t) => {
  const f = fixture(t, 2);
  f.tick(1125);
  await f.effect;
  assert.ok(Math.abs(f.spiral.alpha - 0.3) < 1e-10);
  f.effect.dispose();
  f.assertClean();
});

test('disposal before completion resolves the wait and destroys shared resources once', async (t) => {
  const f = fixture(t);
  f.tick(300);
  f.effect.dispose();
  await f.effect;
  f.assertClean();
});

test('stage disposal cleans resources even if no further fight ticks occur', async (t) => {
  const f = fixture(t);
  f.stage.destroy({ children: true });
  await f.effect;
  f.assertClean();
});

test('abort checks cancel the effect on the next fight tick', async (t) => {
  let aborted = false;
  const f = fixture(t, 1, () => aborted);
  aborted = true;
  f.tick(16);
  await f.effect;
  f.assertClean();
});

test('already-aborted effects never touch rendering resources', async () => {
  const app = new Proxy({}, {
    get() { throw new Error('Aborted effects must not access the app'); },
  });
  const effect = playHypnosisEffect(app, { current: 1 }, () => true);
  await effect;
  effect.dispose();
});


test('rewind opens once, holds only the live negative filter, then closes on a fresh snapshot', async (t) => {
  const f = fixture(t, 1, undefined, true);
  let opened = false;
  f.effect.then(() => { opened = true; });
  const negative = f.stage.filters[1];
  assert.equal(f.snapshots[0].length, 1);
  const mask = f.spiral.mask;
  const clear = t.mock.method(mask, 'clear');
  const fill = t.mock.method(mask, 'fill');
  f.tick(600);
  await Promise.resolve();
  assert.equal(opened, false);
  assert.equal(f.spiral.alpha, 1);
  assert.equal(f.inverted.alpha, 0.5);
  f.tick(600);
  await f.effect;
  assert.equal(opened, true);
  assert.equal(f.spiral.parent, null);
  assert.equal(f.inverted.parent, null);
  assert.equal(f.stage.filters[1], negative);
  assert.equal(f.renders(), 1);
  const rotation = mask.rotation;
  f.tick(10000);
  assert.equal(mask.rotation, rotation);
  assert.equal(f.stage.filters[1], negative);
  assert.equal(f.renders(), 1);
  const finishing = f.effect.finish();
  assert.equal(f.effect.finish(), finishing);
  assert.equal(f.renders(), 2);
  assert.equal(f.snapshots[1][1], negative);
  assert.equal(f.stage.filters.length, 1);
  assert.equal(f.inverted.parent, f.stage);
  assert.equal(f.inverted.alpha, 1);
  assert.equal(f.spiral.parent, f.stage);
  f.tick(600);
  assert.equal(f.spiral.alpha, 1);
  assert.ok(mask.rotation > rotation);
  f.tick(600);
  await finishing;
  assert.equal(clear.mock.callCount(), 0);
  assert.equal(fill.mock.callCount(), 0);
  f.assertClean();
});

test('rewind scales both transition durations with fight speed', async (t) => {
  const f = fixture(t, 2, undefined, true);
  f.tick(600);
  await f.effect;
  const finishing = f.effect.finish();
  f.tick(600);
  await finishing;
  f.assertClean();
});

test('disposal settles both transition waits and removes the held negative filter', async (t) => {
  for (const phase of ['opening', 'holding', 'closing']) {
    const f = fixture(t, 1, undefined, true);
    if (phase !== 'opening') {
      f.tick(1200);
      await f.effect;
    }
    const finishing = phase === 'closing' ? f.effect.finish() : undefined;
    f.effect.dispose();
    await f.effect;
    await finishing;
    await f.effect.finish();
    f.assertClean();
  }
});
