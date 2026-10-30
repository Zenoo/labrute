import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { after, before, test } from 'node:test';
import { createServer } from 'vite';
import { Container } from 'pixi.js';
import { StepType } from '@labrute/core';
import { gsap } from 'gsap';

let server;
let Fight;
before(async () => {
  server = await createServer({
    configFile: false,
    plugins: [{
      name: 'headless-hammer',
      enforce: 'pre',
      resolveId(id) {
        if (id === '@pixi/sound') return '\0audio';
        const visual = id.match(/\/(displayDamage|displayHeal)(?:\.[jt]s)?$/);
        if (visual) return `\0visual:${visual[1]}`;
        if (id === './utils/tween') return '\0tween';
        if (id === './utils/FightClock') return '\0clock';
        if (id === './utils/updateShadow') return '\0shadow';
      },
      load(id) {
        if (id === '\0audio') return 'export const sound = { play() {} };';
        if (id === '\0shadow') return `
          export const updateShadow = () => {};
          export const tweenShadow = async () => {};
          export const airbornMove = async ({ fighter, endPosition }) => {
            Object.assign(fighter.animation.container, endPosition);
          };
        `;
        if (id.startsWith('\0visual:')) return `export const ${id.split(':')[1]} = () => {};`;
        if (id === '\0tween') return `
          export const tween = async (target, { x, y }) => {
            if (x !== undefined) target.x = x;
            if (y !== undefined) target.y = y;
          };
          export const fightDelay = async () => {};
          export const Easing = {};
        `;
        if (id === '\0clock') return `
          export const getFightClock = () => ({ transient: (value) => value });
          export const fightSprite = () => {};
        `;
      },
    }],
    ssr: { external: ['@labrute/core', '@labrute/prisma'], noExternal: ['@pixi/sound'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ Fight } = await server.ssrLoadModule('/src/utils/fight/Fight.ts'));
});
after(async () => { await server?.close(); gsap.ticker.sleep(); });

const reported = JSON.parse(readFileSync(new URL('./fixtures/hammer-heal-fight.json', import.meta.url), 'utf8'));
const flush = () => new Promise((resolve) => setImmediate(resolve));

const fixture = (t) => {
  // Execute the real Hammer and Heal methods with controlled landing-stagger timing.
  let finishStagger;
  const stagger = new Promise((resolve) => { finishStagger = resolve; });
  const fighters = structuredClone(reported.fighters).map((data) => {
    const listeners = new Map();
    const animation = {
      animation: 'idle', container: new Container(), shadow: new Container(), baseWidth: 50, baseHeight: 100,
      setAnimation(name) { this.animation = name; },
      setAirborn() {},
      waitForEvent(event) { return new Promise((resolve) => listeners.set(event, resolve)); },
      emit(event) { listeners.get(event)?.(); listeners.delete(event); },
    };
    animation.container.position.set(data.team === 'L' ? 80 : 420, 220);
    return { ...data, animation };
  });
  const fight = Object.assign(Object.create(Fight.prototype), {
    seeking: false, fighters, speed: { current: 2 },
    app: {
      stage: new Container(), screen: { width: 500 },
    },
    skillUse() {}, playDustEffect() {}, playHitEffect() {}, playResistAnimation() {}, untrap() {},
    stagger: () => stagger, updateHp(target, delta) { target.hp += delta; },
  });
  return { fight, target: fighters[0], finishStagger };
};

test('fight 5ab696ec: late Hammer stagger must not interrupt step 59 drink', async (t) => {
  const { fight, target, finishStagger } = fixture(t);
  assert.equal(reported.steps[56].a, StepType.Hammer);
  assert.equal(reported.steps[59].a, StepType.Heal);
  await fight.hammer(reported.steps[56]);
  const hit = target.animation.animation;
  assert.match(hit, /^hit-/);
  const healing = fight.heal(reported.steps[59]);
  assert.equal(target.animation.animation, 'drink');
  finishStagger();
  await flush();
  assert.equal(target.animation.animation, 'drink');
  const hp = target.hp;
  target.animation.emit('drink:end');
  await healing;
  assert.equal(target.hp, hp + reported.steps[59].h);
  assert.equal(target.animation.animation, 'idle');
});

test('Hammer still restores idle when its landing hit animation remains current', async (t) => {
  const { fight, target, finishStagger } = fixture(t);
  await fight.hammer(reported.steps[56]);
  finishStagger();
  await flush();
  assert.equal(target.animation.animation, 'idle');
});
