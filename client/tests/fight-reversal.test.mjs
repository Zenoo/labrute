import assert from 'node:assert/strict';
import { test } from 'node:test';
import { Application, Container, DOMAdapter, Sprite, Text, Texture, TextureSource, Ticker } from 'pixi.js';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import {
  FightReversal, REVERSAL_MAX_FRAMES, ownFightTexture, releaseFightTexture,
} from '../src/utils/fight/utils/FightReversal.ts';

const fixture = (t) => {
  const app = new Application();
  app.ticker = new Ticker();
  app.ticker.update(0);
  const speed = { current: 1 };
  let aborted = false;
  let playback = { animation: 'run', frame: 0, airborne: false };
  const rendered = [];
  const holder = {
    container: new Container(),
    shadow: new Container(),
    weapon: null,
    shield: false,
    capturePlaybackFrame: () => playback,
    renderPlaybackFrame: (frame) => { rendered.push({ ...frame }); },
    pause: () => {},
  };
  const bar = new Container();
  // Recording must not invoke expensive width/bounds getters.
  Object.defineProperty(bar, 'width', { get() { throw Error('bounds access'); } });
  bar.getLocalBounds = () => ({ width: 236 });
  const fighter = { animation: holder, hpBar: bar, hpBarPhantom: bar };
  const reversal = new FightReversal(app, [fighter], speed, () => aborted);
  const tick = (milliseconds) => app.ticker.update(app.ticker.lastTime + milliseconds);
  t.after(() => {
    reversal.destroy();
    app.ticker.destroy();
    app.stage.destroy({ children: true });
    holder.container.destroy();
    holder.shadow.destroy();
    bar.destroy();
  });
  return {
    app, speed, fighter, holder, bar, rendered, reversal, tick,
    abort: () => { aborted = true; },
    frame: (value) => { playback = { ...playback, ...value }; },
  };
};

test('captures after holders, copies primitives, and replays exact frames backwards', async (t) => {
  const f = fixture(t);
  f.app.ticker.add(() => {
    f.holder.container.x += 10;
    f.holder.shadow.y += 5;
  });
  f.reversal.startStep();
  f.frame({ frame: 1 });
  f.tick(40);
  f.frame({ frame: 2, airborne: true });
  f.holder.weapon = 'knife';
  f.holder.shield = true;
  f.bar.scale.x = 0.5;
  f.tick(40);
  const recording = f.reversal.finishStep();
  assert.equal(recording.duration, 80);
  assert.equal(recording.frames[1].fighters[0].container.x, 10);
  assert.equal(recording.frames[1].fighters[0].shadow.y, 5);
  assert.equal(recording.frames[0].fighters[0].playback.frame, 0);
  assert.equal(recording.frames.at(-1).hud.length, 1);
  const playing = f.reversal.play(recording);
  assert.equal(f.holder.container.x, 20);
  assert.equal(f.bar.scale.x, 0.5);
  f.tick(40);
  assert.equal(f.holder.container.x, 10);
  assert.equal(f.rendered.at(-1).frame, 1);
  f.tick(40);
  await playing;
  assert.equal(f.holder.container.x, 0);
  assert.equal(f.holder.shadow.y, 0);
  assert.equal(f.holder.weapon, null);
  assert.equal(f.holder.shield, false);
  assert.equal(f.bar.scale.x, 1);
  assert.equal(f.rendered.at(-1).frame, 0);
});

test('recording and replay timing follows the current game speed, not wall time', async (t) => {
  const f = fixture(t);
  f.speed.current = 2;
  f.reversal.startStep();
  f.tick(50);
  const recording = f.reversal.finishStep();
  assert.equal(recording.duration, 100);
  f.speed.current = 0;
  let done = false;
  const playing = f.reversal.play(recording).then(() => { done = true; });
  f.tick(1000);
  await Promise.resolve();
  assert.equal(done, false);
  f.speed.current = 4;
  f.tick(25);
  await playing;
  assert.equal(done, true);
});

test('recording samples at most 30fps and bounds unusually long steps', (t) => {
  const f = fixture(t);
  f.reversal.startStep();
  for (let i = 0; i < 120; i++) f.tick(1000 / 120);
  const short = f.reversal.finishStep();
  assert.ok(short.frames.length <= 32);
  f.reversal.startStep();
  for (let i = 0; i < 10000; i++) {
    f.holder.container.x = i;
    f.tick(40);
  }
  const long = f.reversal.finishStep();
  assert.ok(long.frames.length <= REVERSAL_MAX_FRAMES);
  assert.equal(long.frames[0].fighters[0].container.x, 0);
  assert.equal(long.frames.at(-1).fighters[0].container.x, 9999);
  assert.equal(long.duration, 400000);
});

test('stage destruction, abort and explicit disposal settle pending playback and remove tickers', async (t) => {
  for (const mode of ['destroy', 'abort', 'dispose']) {
    const f = fixture(t);
    f.reversal.startStep();
    f.tick(40);
    const recording = f.reversal.finishStep();
    const baseline = f.app.ticker.count;
    const playing = f.reversal.play(recording);
    assert.equal(f.app.ticker.count, baseline + 1);
    if (mode === 'destroy') f.app.stage.destroy();
    if (mode === 'dispose') f.reversal.destroy();
    if (mode === 'abort') { f.abort(); f.tick(1); }
    await playing;
    assert.equal(f.app.ticker.count, baseline);
  }
});

test('empty and instantaneous recordings, cancellation and destroyed holders are safe', async (t) => {
  const f = fixture(t);
  await f.reversal.play({ duration: 0, frames: [] });
  f.reversal.startStep();
  await f.reversal.play(f.reversal.finishStep());
  f.reversal.startStep();
  f.tick(40);
  const recording = f.reversal.finishStep();
  const first = f.reversal.play(recording);
  const second = f.reversal.play(recording);
  await first;
  f.holder.container.destroy();
  f.bar.destroy();
  f.tick(40);
  await second;
});

test('fallback interpolates skipped positions and HUD without inventing animation history', async (t) => {
  const f = fixture(t);
  const snapshot = (x, hp) => ({
    activeFighters: [f.fighter],
    fighters: [{
      fighter: f.fighter,
      state: { hp, maxHp: 100, HUDFocused: true },
      pose: { animation: 'idle', airborne: false },
      weapon: null,
      shield: false,
      container: {
        x, y: 0, scaleX: 1, scaleY: 1, rotation: 0, alpha: 1, zIndex: 0, visible: true,
      },
    }],
  });

  const playing = f.reversal.playBetween(snapshot(100, 20), snapshot(0, 100));
  f.tick(125);
  assert.equal(f.holder.container.x, 50);
  assert.ok(Math.abs(f.bar.scale.x - 0.6) < 1e-10);
  f.tick(125);
  await playing;
  assert.equal(f.holder.container.x, 0);
  assert.equal(f.bar.scale.x, 1);
  assert.equal(f.rendered.at(-1).frame, 0);
});

test('fallback uses logical pose visibility for seeked hidden fighters in both directions', async (t) => {
  const f = fixture(t);
  const snapshot = (visible, x) => ({
    fighters: [{
      fighter: f.fighter,
      state: { hp: 100, maxHp: 100, HUDFocused: true },
      pose: { animation: 'idle', airborne: false, visible },
      weapon: null,
      shield: false,
      container: {
        x, y: 0, scaleX: 1, scaleY: 1, rotation: 0, alpha: 1, zIndex: 0, visible: true,
      },
    }],
  });
  for (const [start, end] of [[false, true], [true, false], [false, false]]) {
    const playing = f.reversal.playBetween(snapshot(start, 100), snapshot(end, 0));
    assert.equal(f.holder.container.visible, start);
    f.tick(125);
    assert.equal(f.holder.container.visible, start || end);
    assert.equal(f.holder.container.x, 50);
    f.tick(125);
    await playing;
    assert.equal(f.holder.container.visible, end);
    assert.equal(f.holder.container.x, 0);
  }
});

test('fallback preserves mirrored HUD sign and uses geometry width once', async (t) => {
    const f = fixture(t);
    let boundsCalls = 0;
    f.bar.scale.x = -0.5;
    f.bar.getLocalBounds = () => { boundsCalls++; return { width: 118 }; };
    const snapshot = (hp) => ({
      fighters: [{
        fighter: f.fighter,
        state: { hp, maxHp: 100, HUDFocused: true, team: 'right' },
        pose: { animation: 'idle', airborne: false },
        weapon: null, shield: false,
        container: {
          x: 0, y: 0, scaleX: 1, scaleY: 1, rotation: 0, alpha: 1, zIndex: 0, visible: true,
        },
      }],
    });
    const from = snapshot(20);
    const to = snapshot(100);
    // Sharing the ordinary team bar must not cause HP to be summed.
    const backup = {
      ...to.fighters[0],
      fighter: { ...f.fighter },
      state: { hp: 0, maxHp: 900, HUDFocused: false, team: 'right' },
    };
    from.fighters.push(backup);
    to.fighters.push(backup);
    const playing = f.reversal.playBetween(from, to);
    assert.equal(f.bar.scale.x, -0.4);
    f.tick(125);
    assert.ok(Math.abs(f.bar.scale.x + 1.2) < 1e-10);
    f.tick(125);
    await playing;
    assert.equal(f.bar.scale.x, -2);
    assert.equal(boundsCalls, 1);
  });

  test('initial and ticker render errors reject asynchronously and remove playback ticker', async (t) => {
    for (const failInitially of [true, false]) {
      const f = fixture(t);
      f.reversal.startStep();
      f.tick(40);
      const recording = f.reversal.finishStep();
      let calls = 0;
      f.holder.renderPlaybackFrame = () => {
        if (++calls > (failInitially ? 0 : 1)) throw Error('render failed');
      };
      let playing;
      assert.doesNotThrow(() => { playing = f.reversal.play(recording); });
      const rejection = assert.rejects(playing, /render failed/);
      assert.doesNotThrow(() => f.tick(40));
      await rejection;
      assert.equal(f.app.ticker.count, 0);
    }
  });

  test('projectiles replay using shared textures after original destruction and clones are cleaned', async (t) => {
    const f = fixture(t);
    const sprite = new Sprite(Texture.EMPTY);
    f.app.stage.addChild(sprite);
    f.reversal.startStep();
    sprite.x = 50;
    sprite.anchor.set(0.5);
    sprite.tint = 0xff0000;
    f.tick(40);
    sprite.destroy();
    f.tick(40);
    const recording = f.reversal.finishStep();
    const playing = f.reversal.play(recording);
    f.tick(40);
    const clone = f.app.stage.children.find((child) => child instanceof Sprite);
    assert.ok(clone);
    assert.equal(clone.texture, Texture.EMPTY);
    assert.equal(clone.x, 50);
    assert.equal(clone.anchor.x, 0.5);
    assert.equal(clone.tint, 0xff0000);
    f.tick(40);
    await playing;
    assert.equal(f.app.stage.children.length, 0);
    assert.equal(Texture.EMPTY.destroyed, false);
  });

  test('forward sprites are hidden only during replay and destroyed textures are skipped', async (t) => {
    const f = fixture(t);
    const texture = new Texture({ source: new TextureSource({ width: 10, height: 10 }) });
    const sprite = new Sprite(texture);
    f.app.stage.addChild(sprite);
    f.reversal.startStep();
    f.tick(40);
    const recording = f.reversal.finishStep();
    const playing = f.reversal.play(recording);
    assert.equal(sprite.visible, false);
    assert.equal(f.app.stage.children.length, 2);
    texture.source.destroy();
    f.tick(20);
    assert.equal(f.app.stage.children[1].visible, false);
    f.tick(20);
    await playing;
    assert.equal(sprite.visible, true);
    assert.equal(f.app.stage.children.length, 1);
  });


test('the lethal-hit text moves backwards and disappears before its creation', async (t) => {
  const f = fixture(t);
  f.reversal.startStep();
  f.tick(40);
  const text = new Text({ text: '-28', style: { fontFamily: 'GameFont', fontSize: 20 } });
  text.position.set(150, 80);
  f.app.stage.addChild(text);
  f.tick(40);
  text.y = 60;
  text.alpha = 0.75;
  f.tick(40);
  const recording = f.reversal.finishStep();
  // Rewind cancels the forward timeline and disposes its visual objects first.
  text.destroy();
  const playing = f.reversal.play(recording);
  const clone = f.app.stage.children.find((child) => child instanceof Text);
  assert.ok(clone);
  assert.equal(clone.text, '-28');
  assert.equal(clone.y, 60);
  f.tick(40);
  assert.equal(clone.y, 80);
  assert.equal(clone.alpha, 1);
  f.tick(40);
  assert.equal(clone.visible, false);
  f.tick(40);
  await playing;
  assert.equal(clone.destroyed, true);
  assert.equal(f.app.stage.children.length, 0);
});

test('ghost history retains generated textures and copies mutable color filters', async (t) => {
  t.mock.method(DOMAdapter.get(), 'createCanvas', () => ({ getContext: () => null }));
  const f = fixture(t);
  const first = ownFightTexture(new Texture({ source: new TextureSource({ width: 10, height: 10 }) }));
  const second = ownFightTexture(new Texture({ source: new TextureSource({ width: 10, height: 10 }) }));
  const ghost = new Sprite(first);
  const filter = new AdjustmentFilter({ red: 2.4, blue: 0.9 });
  ghost.filters = [filter];
  f.app.stage.addChild(ghost);
  f.reversal.startStep();
  f.tick(40);
  ghost.texture = second;
  releaseFightTexture(first);
  filter.red = 0.4;
  ghost.x = 100;
  f.tick(40);
  const recording = f.reversal.finishStep();
  releaseFightTexture(second);
  ghost.destroy();
  filter.destroy();
  assert.equal(first.destroyed, false);
  assert.equal(second.destroyed, false);
  const playing = f.reversal.play(recording);
  const clone = f.app.stage.children.find((child) => child instanceof Sprite);
  assert.equal(clone.texture, second);
  assert.equal(clone.filters[0].red, 0.4);
  f.tick(40);
  assert.equal(clone.texture, first);
  assert.equal(clone.filters[0].red, 2.4);
  assert.equal(clone.filters[0].blue, 0.9);
  assert.equal(clone.x, 0);
  f.tick(40);
  await playing;
  f.reversal.destroy();
  // A later rewind can still use this recording, even after its recorder stops.
  assert.equal(first.destroyed, false);
  f.app.stage.destroy();
  assert.equal(first.destroyed, true);
  assert.equal(second.destroyed, true);
});
