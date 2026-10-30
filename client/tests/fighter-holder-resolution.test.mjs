import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { setImmediate } from 'node:timers/promises';
import { Assets, DOMAdapter, Texture, TextureSource } from 'pixi.js';
import * as symbols from 'labrute-pixi-fighter';
import { createServer } from 'vite';

let server;
let FighterHolder;
const originalLoad = Assets.load;

before(async (t) => {
  // Retain real sprite sizes/transforms and the requested texture pixel density.
  // Rasterizing SVG pixels themselves requires a browser.
  Assets.load = async ({ src, data }) => {
    const svg = decodeURIComponent(src.split(',')[1]);
    const width = Number(svg.match(/\bwidth="([\d.]+)px"/)[1]);
    const height = Number(svg.match(/\bheight="([\d.]+)px"/)[1]);
    return new Texture({ source: new TextureSource({
      width: width * data.resolution,
      height: height * data.resolution,
      resolution: data.resolution,
    }) });
  };
  t.mock.method(DOMAdapter.get(), 'createCanvas', () => ({ getContext: () => null }));
  server = await createServer({
    configFile: false,
    ssr: { external: ['@labrute/core', '@labrute/prisma', 'pixi.js'] },
    optimizeDeps: { noDiscovery: true, entries: [] },
    server: { middlewareMode: true, watch: null, hmr: false },
  });
  ({ FighterHolder } = await server.ssrLoadModule('/src/utils/fight/FighterHolder.ts'));
});

after(async () => {
  Assets.load = originalLoad;
  await server?.close();
});

const animationIds = {
  dog: [894, 903, 904, 905, 906, 907, 910, 911, 912, 913],
  bear: [935, 936, 937, 938, 939, 940, 941, 942, 943, 944],
  male: [475, 476, 478, 479, 488, 489, 490, 491, 493, 494, 495, 496, 497, 498, 503, 505, 506, 507, 508, 509, 510, 513, 516, 517, 541, 542, 543, 544, 545, 546],
  female: [846, 847, 848, 849, 851, 854, 855, 856, 857, 858, 859, 860, 861, 863, 864, 865, 866, 867, 868, 869, 870, 871, 875, 876, 877, 878, 879, 880],
};
const petAnimations = ['idle', 'attack', 'arrive', 'hit', 'run', 'evade', 'death', 'grab', 'grabbed', 'trapped'];
const bruteAnimations = ['idle', 'monk', 'fist', 'arrive', 'hit', 'run', 'equip', 'evade', 'block', 'trash', 'death', 'estoc', 'slash', 'throw', 'prepare-throw', 'grab', 'steal', 'grabbed', 'stolen', 'trapped', 'drink', 'strengthen', 'whip', 'launch', 'win', 'train', 'train2', 'eat'];

for (const [name, type, model, scale, resolution, body] of [
  ['dog1', 'pet', 'dog', 1, 1],
  ['dog2', 'pet', 'dog', 1, 2],
  ['dog3', 'pet', 'dog', 1, 1.5],
  ['panther', 'pet', 'dog', 1, 2],
  ['bear', 'pet', 'bear', 1, 2],
  ['dog1', 'pet', 'dog', 0.6, 2],
  ['Cerberus', 'boss', 'dog', 1, 2],
  ['male', 'brute', 'male', 1, 2],
  ['female', 'brute', 'female', 1, 2],
  ['male', 'brute', 'male', 1, 2, '1'.repeat(11)],
  ['male', 'brute', 'male', 1, 2],
  ['dog1', 'pet', 'dog', 1, 1],
]) {
  test(`${name} at scale ${scale}, resolution ${resolution}: every animated part has enough pixels`, async () => {
    const holder = new FighterHolder({
      renderer: { resolution, generateTexture: () => Texture.WHITE },
    }, { type, name, body, gender: type === 'brute' ? model : undefined, team: 'R', skills: {}, shield: false }, { current: 1 }, scale);
    try {
      while (!holder.loaded) await setImmediate();
      const animations = type !== 'brute' ? petAnimations : model === 'male'
        ? [...bruteAnimations.slice(0, 4), 'hit-0', 'hit-1', 'hit-2', ...bruteAnimations.slice(5)]
        : bruteAnimations;
      for (const [index, animation] of animations.entries()) {
        const symbol = symbols[`Symbol${animationIds[model][index]}`];
        for (let frame = 0; frame < symbol.frames.length; frame++) {
          holder.setAnimation(animation, frame);
          for (const sprite of holder.svgs.filter((part) => part.visible)) {
            const { a, b, c, d } = sprite.getGlobalTransform();
            // Sample directions independently of the production singular-value formula.
            for (let angle = 0; angle < Math.PI; angle += Math.PI / 16) {
              const x = Math.cos(angle);
              const y = Math.sin(angle);
              const required = Math.hypot(a * x + c * y, b * x + d * y) * resolution;
              assert.ok(sprite.texture.source.resolution + 1e-6 >= required,
                `${animation} frame ${frame}, ${sprite.label}: needs ${required}, has ${sprite.texture.source.resolution}`);
            }
          }
        }
      }
      const checkFilters = (container) => {
        if (container === holder.shadow) return;
        for (const filter of container.filters ?? []) {
          assert.equal(filter.resolution, 'inherit', `${container.label}: color filters retain renderer pixel density`);
        }
        for (const child of container.children ?? []) checkFilters(child);
      };
      checkFilters(holder.container);
    } finally {
      holder.destroy();
    }
  });
}
