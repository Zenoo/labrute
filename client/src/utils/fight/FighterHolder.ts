import { Animation, Fighter, bosses, readColorString, readBodyString, SkillById } from '@labrute/core';
import { BossName, Gender, SkillName, WeaponName } from '@labrute/prisma';
import moment from 'moment';
import { AdjustmentFilter } from '@pixi/filter-adjustment';
import { FramePart, Symbol as LaBruteSymbol, Svg, Symbol475, Symbol476, Symbol478, Symbol479, Symbol488, Symbol489, Symbol490, Symbol491, Symbol493, Symbol494, Symbol495, Symbol496, Symbol497, Symbol498, Symbol503, Symbol505, Symbol506, Symbol507, Symbol508, Symbol509, Symbol510, Symbol513, Symbol516, Symbol517, Symbol541, Symbol542, Symbol543, Symbol544, Symbol545, Symbol546, Symbol846, Symbol847, Symbol848, Symbol849, Symbol851, Symbol854, Symbol855, Symbol856, Symbol857, Symbol858, Symbol859, Symbol860, Symbol861, Symbol863, Symbol864, Symbol865, Symbol866, Symbol867, Symbol868, Symbol869, Symbol870, Symbol871, Symbol875, Symbol876, Symbol877, Symbol878, Symbol879, Symbol880, Symbol894, Symbol903, Symbol904, Symbol905, Symbol906, Symbol907, Symbol910, Symbol911, Symbol912, Symbol913, Symbol935, Symbol936, Symbol937, Symbol938, Symbol939, Symbol940, Symbol941, Symbol942, Symbol943, Symbol944 } from 'labrute-fla-parser';
import * as PIXI from 'pixi.js';
import { Filter, Matrix, Texture } from 'pixi.js';
import { MutableRefObject } from 'react';

const ANIMATIONS: Record<
  Gender | 'dog' | 'bear' | 'panther',
  Record<Animation, LaBruteSymbol | null>
> = {
  male: {
    idle: Symbol475,
    monk: Symbol476,
    fist: Symbol478,
    arrive: Symbol479,
    'hit-0': Symbol488,
    'hit-1': Symbol489,
    'hit-2': Symbol490,
    run: Symbol491,
    equip: Symbol493,
    evade: Symbol494,
    block: Symbol495,
    trash: Symbol496,
    death: Symbol497,
    estoc: Symbol498,
    slash: Symbol503,
    throw: Symbol505,
    'prepare-throw': Symbol506,
    grab: Symbol507,
    steal: Symbol508,
    grabbed: Symbol509,
    stolen: Symbol510,
    trapped: Symbol513,
    drink: Symbol516,
    strengthen: Symbol517,
    whip: Symbol541,
    launch: Symbol542,
    win: Symbol543,
    train: Symbol544,
    train2: Symbol545,
    eat: Symbol546,
    attack: null,
    hit: null,
  },
  female: {
    idle: Symbol846,
    monk: Symbol847,
    fist: Symbol848,
    arrive: Symbol849,
    hit: Symbol851,
    run: Symbol854,
    equip: Symbol855,
    evade: Symbol856,
    block: Symbol857,
    trash: Symbol858,
    death: Symbol859,
    estoc: Symbol860,
    slash: Symbol861,
    throw: Symbol863,
    'prepare-throw': Symbol864,
    grab: Symbol865,
    steal: Symbol866,
    grabbed: Symbol867,
    stolen: Symbol868,
    trapped: Symbol869,
    drink: Symbol870,
    strengthen: Symbol871,
    whip: Symbol875,
    launch: Symbol876,
    win: Symbol877,
    train: Symbol878,
    train2: Symbol879,
    eat: Symbol880,
    attack: null,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
  },
  dog: {
    idle: Symbol894,
    attack: Symbol903,
    arrive: Symbol904,
    hit: Symbol905,
    run: Symbol906,
    evade: Symbol907,
    death: Symbol910,
    grab: Symbol911,
    grabbed: Symbol912,
    trapped: Symbol913,
    block: null,
    drink: null,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    equip: null,
    estoc: null,
    fist: null,
    launch: null,
    monk: null,
    'prepare-throw': null,
    slash: null,
    steal: null,
    strengthen: null,
    throw: null,
    trash: null,
    whip: null,
    win: null,
    train: null,
    train2: null,
    eat: null,
    stolen: null,
  },
  bear: {
    idle: Symbol935,
    attack: Symbol936,
    arrive: Symbol937,
    hit: Symbol938,
    run: Symbol939,
    evade: Symbol940,
    death: Symbol941,
    grab: Symbol942,
    grabbed: Symbol943,
    trapped: Symbol944,
    block: null,
    drink: null,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    equip: null,
    estoc: null,
    fist: null,
    launch: null,
    monk: null,
    'prepare-throw': null,
    slash: null,
    steal: null,
    strengthen: null,
    throw: null,
    trash: null,
    whip: null,
    win: null,
    train: null,
    train2: null,
    eat: null,
    stolen: null,
  },
  panther: {
    idle: Symbol894,
    attack: Symbol903,
    arrive: Symbol904,
    hit: Symbol905,
    run: Symbol906,
    evade: Symbol907,
    death: Symbol910,
    grab: Symbol911,
    grabbed: Symbol912,
    trapped: Symbol913,
    block: null,
    drink: null,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    equip: null,
    estoc: null,
    fist: null,
    launch: null,
    monk: null,
    'prepare-throw': null,
    slash: null,
    steal: null,
    strengthen: null,
    throw: null,
    trash: null,
    whip: null,
    win: null,
    train: null,
    train2: null,
    eat: null,
    stolen: null,
  },
};

const LOOP_START: Record<
  Gender | 'dog' | 'bear' | 'panther',
  Record<Animation, number | null>
> = {
  male: {
    idle: 0,
    monk: 6,
    run: 0,
    death: 24,
    trapped: 11,
    train: 0,
    train2: 0,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    'prepare-throw': null,
    grab: null,
    grabbed: null,
    stolen: null,
    steal: null,
    drink: null,
    strengthen: null,
    whip: null,
    launch: null,
    win: null,
    eat: null,
    arrive: null,
    fist: null,
    estoc: null,
    slash: null,
    throw: null,
    trash: null,
    equip: null,
    block: null,
    evade: null,
    attack: null,
    hit: null,
  },
  female: {
    idle: 0,
    monk: 12,
    run: 0,
    death: 24,
    trapped: 11,
    train: 0,
    train2: 0,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    'prepare-throw': null,
    grab: null,
    grabbed: null,
    stolen: null,
    steal: null,
    drink: null,
    strengthen: null,
    whip: null,
    launch: null,
    win: null,
    eat: null,
    arrive: null,
    fist: null,
    estoc: null,
    slash: null,
    throw: null,
    trash: null,
    equip: null,
    block: null,
    evade: null,
    attack: null,
    hit: null,
  },
  dog: {
    idle: 0,
    run: 0,
    evade: 0,
    trapped: 11,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    'prepare-throw': null,
    grab: null,
    grabbed: null,
    stolen: null,
    steal: null,
    drink: null,
    strengthen: null,
    whip: null,
    launch: null,
    win: null,
    eat: null,
    arrive: null,
    fist: null,
    estoc: null,
    slash: null,
    throw: null,
    trash: null,
    equip: null,
    block: null,
    attack: null,
    hit: null,
    death: null,
    monk: null,
    train: null,
    train2: null,
  },
  bear: {
    idle: 0,
    run: 0,
    trapped: 11,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    'prepare-throw': null,
    grab: null,
    grabbed: null,
    stolen: null,
    steal: null,
    drink: null,
    strengthen: null,
    whip: null,
    launch: null,
    win: null,
    eat: null,
    arrive: null,
    fist: null,
    estoc: null,
    slash: null,
    throw: null,
    trash: null,
    equip: null,
    block: null,
    attack: null,
    hit: null,
    death: null,
    monk: null,
    train: null,
    train2: null,
    evade: null,
  },
  panther: {
    idle: 0,
    run: 0,
    evade: 0,
    trapped: 11,
    'hit-0': null,
    'hit-1': null,
    'hit-2': null,
    'prepare-throw': null,
    grab: null,
    grabbed: null,
    stolen: null,
    steal: null,
    drink: null,
    strengthen: null,
    whip: null,
    launch: null,
    win: null,
    eat: null,
    arrive: null,
    fist: null,
    estoc: null,
    slash: null,
    throw: null,
    trash: null,
    equip: null,
    block: null,
    attack: null,
    hit: null,
    death: null,
    monk: null,
    train: null,
    train2: null,
  },
};

const ANIMATION_SYMBOL_NAMES = {
  male: Object.values(ANIMATIONS.male).filter(Boolean).map((a) => a?.name ?? ''),
  female: Object.values(ANIMATIONS.female).filter(Boolean).map((a) => a?.name ?? ''),
  dog: Object.values(ANIMATIONS.dog).filter(Boolean).map((a) => a?.name ?? ''),
  bear: Object.values(ANIMATIONS.bear).filter(Boolean).map((a) => a?.name ?? ''),
  panther: Object.values(ANIMATIONS.dog).filter(Boolean).map((a) => a?.name ?? ''),
};

const WEAPON_SYMBOL = 'Symbol68';
const SHIELD_SYMBOL: Record<Gender | 'dog' | 'bear' | 'panther', string> = {
  male: 'Symbol472',
  female: 'Symbol472',
  dog: '',
  bear: '',
  panther: '',
};

const WEAPON_FRAMES: (WeaponName | null)[] = [
  null,
  'knife',
  'broadsword',
  'lance',
  'baton',
  'trident',
  'hatchet',
  'scimitar',
  'axe',
  'sword',
  'fan',
  'shuriken',
  null,
  'bumps',
  'morningStar',
  'mammothBone',
  'flail',
  'whip',
  'sai',
  'leek',
  'mug',
  'fryingPan',
  'piopio',
  'halbard',
  'trombone',
  'keyboard',
  'noodleBowl',
  'racquet',
];

const SCALE = 1;

type SvgsToLoad = {
  svg: Svg;
  count: number;
}[];

const matrixFromObject = (obj: FramePart['transform'], scale = 1) => new Matrix(obj?.a ?? 1, obj?.b ?? 0, obj?.c ?? 0, obj?.d ?? 1, (obj?.tx ?? 0) * scale, (obj?.ty ?? 0) * scale);

const ColorOffsetShader = `
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec3 offset;
uniform vec3 mult;

void main(void){
  vec4 color = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(vec3((color.r / color.a) * mult.r + offset.r / 255.0, (color.g / color.a) * mult.g + offset.g / 255.0, (color.b / color.a) * mult.b + offset.b / 255.0) * color.a, color.a);
}
`;

export default class FighterHolder {
  // Setup data
  readonly type: Fighter['type'];

  readonly #animationType: Gender | 'dog' | 'bear';

  readonly name: Fighter['name'];

  readonly #colors: Record<string, string>;

  readonly #parts: Record<string, number>;

  readonly skills: SkillName[];

  // Those can change mid-fight
  animation: Animation = 'arrive';

  shield = false;

  weapon: WeaponName | null = null;

  // PIXI
  readonly container: PIXI.Container;

  #animationContainer: PIXI.Container | null = null;

  #animationSymbol: LaBruteSymbol | null = null;

  #playing = true;

  #frame = 0;

  #timer = 0;

  svgs: PIXI.Sprite[] = [];

  speed: MutableRefObject<number>;

  #frameCount = 0;

  #usedSvgs: Record<string, number> = {};

  readonly loaded: boolean = false;

  // Events
  events: Record<string, ((event: string) => void)[]> = {};

  onceEvents: Record<string, ((event: string) => void)[]> = {};

  constructor(
    app: PIXI.Application,
    fighter: Fighter,
    speed: MutableRefObject<number>,
  ) {
    this.type = fighter.type;
    this.name = fighter.name;
    this.shield = fighter.shield;
    this.weapon = null;
    this.skills = fighter.skills.map((s) => SkillById[s]);
    this.#colors = readColorString(fighter.gender || Gender.male, fighter.colors || '0'.repeat(32));
    this.#parts = readBodyString(fighter.body || '0'.repeat(11));
    this.speed = speed;

    // Get animation type
    if (this.type === 'brute') {
      this.#animationType = fighter.gender || Gender.male;
    } else if (this.type === 'pet') {
      this.#animationType = (fighter.name.startsWith('dog') || fighter.name === 'panther') ? 'dog' : 'bear';
    } else {
      const bossType = bosses.find((b) => b.name === fighter.name)?.base as 'bear' | 'panther' | 'dog1' || 'bear';
      this.#animationType = bossType === 'dog1' || bossType === 'panther' ? 'dog' : bossType;
    }

    // Get all animations
    const animationsByType = Object.values(ANIMATIONS[this.#animationType]);

    const symbolContainer = new PIXI.Container();
    symbolContainer.sortableChildren = true;
    symbolContainer.x = 0;
    symbolContainer.y = 0;

    // Handle team side
    symbolContainer.scale.x = fighter.team === 'L' ? 1 : -1;

    // Reverse X for dog
    if (this.#animationType === 'dog') {
      symbolContainer.scale.x *= -1;
    }

    this.container = symbolContainer;

    const maxSvgs: SvgsToLoad = [];

    // For each animation
    for (const animation of animationsByType) {
      if (!animation) continue;

      const animationContainer = new PIXI.Container();
      animationContainer.name = animation.name;
      animationContainer.sortableChildren = true;
      animationContainer.visible = false;
      this.container.addChild(animationContainer);

      if (animation.name === ANIMATIONS[this.#animationType][this.animation]?.name) {
        animationContainer.visible = true;
        this.#animationContainer = animationContainer;
        this.#animationSymbol = animation;
        this.#frameCount = animation.frames?.length ?? 0;
      }

      // For each frame
      for (const frame of animation.frames ?? []) {
        const svgsToLoad: SvgsToLoad = [];
        this.#initializeContainersAndGetSvgsToLoad(
          svgsToLoad,
          animationContainer,
          animation.parts,
          frame,
        );

        // Merge svgs
        for (const svg of svgsToLoad) {
          const existingSvg = maxSvgs.find((s) => s.svg.name === svg.svg.name);
          if (!existingSvg) {
            maxSvgs.push(svg);
          } else {
            existingSvg.count = Math.max(existingSvg.count, svg.count);
          }
        }
      }

      // Change color on bosses
      if (this.type === 'boss') {
        const boss = bosses.find(({ name }) => name === this.name);
        if (!boss) {
          throw new Error(`Boss not found: ${this.name}`);
        }

        const aprilFools = moment().isSame(moment('04-01', 'MM-DD'), 'day');
        // Apply color
        if (fighter.name === BossName.GoldClaw) {
          this.container.filters = [new AdjustmentFilter({
            gamma: 1,
            brightness: aprilFools ? 0.8 : 4,
            red: aprilFools ? 4 : 1,
          })];
        } else if (fighter.name === BossName.EmberFang) {
          this.container.filters = [new AdjustmentFilter({
            red: aprilFools ? 0.8 : 2.2,
            green: 0.8,
            blue: aprilFools ? 6 : 0.8,
          })];
        } else if (fighter.name === BossName.Cerberus) {
          this.container.filters = [new AdjustmentFilter({
            gamma: 1,
            brightness: 0.37,
            red: 1.1,
            blue: 1.02,
          })];
        }
      }
    }

    // Load SVGs
    this.#loadSvgs(maxSvgs);

    // Loaded event
    this.loaded = true;

    // Play animation (loop on frames with PIXI ticker)
    app.ticker?.add(() => {
      if (this.container.destroyed) return;

      // Update zIndex
      this.container.zIndex = this.container.y;

      // Do nothing if not playing
      if (!this.#playing) {
        return;
      }

      const tickRate = 1000 / (30 * this.speed.current);

      this.#timer += app.ticker.elapsedMS;
      if (this.#timer === 0 || this.#timer >= tickRate) {
        this.#timer %= tickRate;

        const loopStart = LOOP_START[this.#animationType][this.animation];
        if (this.#frame >= this.#frameCount && loopStart !== null) {
          this.#frame = loopStart;
        }

        // Hide all svgs
        for (const svg of this.svgs) {
          svg.visible = false;
        }

        // Display frame
        this.#usedSvgs = {};
        this.#displayFrame(this.#animationContainer, this.#animationSymbol);

        // :start event
        if (this.#frame === 0) {
          this.#triggerEvents(`${this.animation}:start`);
        }

        // :trashed event
        if (this.animation === 'trash' && this.#frame === 3) {
          this.#triggerEvents(`${this.animation}:trashed`);
        }

        // :hit event
        if (this.animation === 'fist' && this.#frame === 2) {
          this.#triggerEvents(`${this.animation}:hit`);
        } else if (this.animation === 'estoc' && this.#frame === 4) {
          this.#triggerEvents(`${this.animation}:hit`);
        } else if (this.animation === 'slash' && this.#frame === 5) {
          this.#triggerEvents(`${this.animation}:hit`);
        } else if (this.animation === 'whip' && this.#frame === 4) {
          this.#triggerEvents(`${this.animation}:hit`);
        } else if (this.animation === 'attack' && this.#animationType === 'dog' && this.#frame === 2) {
          this.#triggerEvents(`${this.animation}:hit`);
        } else if (this.animation === 'attack' && this.#animationType === 'bear' && this.#frame === 4) {
          this.#triggerEvents(`${this.animation}:hit`);
        }

        // :drop event
        if (this.animation === 'death' && this.#frame === LOOP_START[this.#animationType].death) {
          this.#triggerEvents(`${this.animation}:drop`);
        }

        this.#frame++;

        // :end event
        if (this.#frame >= this.#frameCount
          && LOOP_START[this.#animationType]?.[this.animation] === null) {
          this.#playing = false;
          this.#triggerEvents(`${this.animation}:end`);
        }
      }
    });
  }

  #triggerEvents = (event: string) => {
    // Trigger events
    if (this.events[event]) {
      for (const callback of this.events[event] ?? []) {
        callback(event);
      }
    }

    // Trigger once events
    if (this.onceEvents[event]) {
      for (const callback of this.onceEvents[event] ?? []) {
        callback(event);
      }
      delete this.onceEvents[event];
    }

    // Trigger global events
    if (this.events['*']) {
      for (const callback of this.events['*']) {
        callback(event);
      }
    }

    // Trigger global once events
    if (this.onceEvents['*']) {
      for (const callback of this.onceEvents['*']) {
        callback(event);
      }
      delete this.onceEvents['*'];
    }
  };

  setAnimation(animation: Animation, frame = 0) {
    // Handle idle differently for monks
    if (animation === 'idle' && this.skills.includes('monk')) {
      this.animation = 'monk';
    } else if (animation === 'win' && this.type !== 'brute') {
      // Skip win animation for pets and bosses
      return;
    } else {
      this.animation = animation;
    }

    // Hide all animations
    for (const child of this.container.children) {
      if (child instanceof PIXI.Container) {
        child.visible = false;
      }
    }

    // Update current animation
    this.#animationContainer = this.container.children
      .find(
        (child) => child.name === ANIMATIONS[this.#animationType][this.animation]?.name
      ) as PIXI.Container;
    this.#animationSymbol = ANIMATIONS[this.#animationType][this.animation];

    // Show current animation
    this.#animationContainer.visible = true;

    // Reset frame
    this.#frame = frame;
    this.#frameCount = this.#animationSymbol?.frames?.length ?? 0;
    this.#timer = 0;
    this.#playing = true;

    // Display frame
    this.#usedSvgs = {};
    this.#displayFrame(this.#animationContainer, this.#animationSymbol);
  }

  #initializeContainersAndGetSvgsToLoad = (
    svgsToLoad: SvgsToLoad,
    symbolContainer: PIXI.Container,
    parts: LaBruteSymbol['parts'],
    frame: FramePart[] = [],
  ) => {
    frame.forEach((framePart, i) => {
      const symbol = parts?.find((p) => p.name === framePart.name);

      if (!symbol) {
        throw new Error(`Part ${framePart.name} not found in symbol ${symbolContainer.name}`);
      }

      // SVG
      if (symbol.type === 'svg') {
        const existingSvg = svgsToLoad.find((s) => s.svg.name === symbol.name);
        if (existingSvg) {
          existingSvg.count++;
        } else {
          svgsToLoad.push({
            svg: symbol,
            count: 1,
          });
        }
      } else {
        // Symbol

        const container = new PIXI.Container();
        container.sortableChildren = true;
        container.name = symbol.name;
        container.visible = false;
        container.zIndex = frame.length - i;

        symbolContainer.addChild(container);

        // Get frames to load
        let framesToLoad: number[] = [];

        // If symbol has partIdx, only load the corresponding frame
        if (symbol.partIdx) {
          const partValue = this.#parts[symbol.partIdx.substring(1)];

          if (partValue === undefined) {
            throw new Error(`Part ${symbol.partIdx.substring(1)} not found in fighter config`);
          }

          framesToLoad = [partValue];
        } else if (symbol.name === WEAPON_SYMBOL) {
          // Load all weapon frames
          framesToLoad = WEAPON_FRAMES.map((_, index) => index);
        } else if (symbol.name === 'Symbol526') {
          // Special case for whip animation
          framesToLoad = [16];
        } else {
          // Load only the first frame
          framesToLoad = [0];
        }

        // For each frame, load the corresponding SVGs
        for (const frameIdx of framesToLoad) {
          const currentFrame = symbol.frames?.[frameIdx];
          if (!currentFrame) {
            continue;
          }

          this.#initializeContainersAndGetSvgsToLoad(
            svgsToLoad,
            container,
            symbol.parts,
            currentFrame,
          );
        }
      }
    });
  };

  #loadSvgs = (svgsToLoad: SvgsToLoad) => {
    for (const svgToLoad of svgsToLoad) {
      const { svg } = svgToLoad;

      for (let i = 0; i < svgToLoad.count; i++) {
        // Custom scale
        let customScale = svg.scale ?? 1;
        let size = SCALE;

        // Custom scale for panther
        if (this.type === 'pet' && this.name === 'panther') {
          size = SCALE * 1.5;
        } else if (this.type === 'boss') {
          // Custom scale for bosses
          size = SCALE * (bosses.find((b) => b.name === this.name)?.scale ?? 1);
        }

        // Increase loading scale for better resolution in some cases
        if (this.type === 'boss') {
          customScale = 2;
        }

        const svgSprite = new PIXI.Sprite(Texture.from(
          `${svg.svg}<!-- ${size * customScale} -->`,
          { resourceOptions: { scale: size * customScale } },
        ));
        svgSprite.name = svg.name;
        svgSprite.scale.set(1 / customScale);
        svgSprite.visible = false;

        // Apply offset
        if (svg.offset) {
          svgSprite.x = -(svg.offset.x ?? 0) * size;
          svgSprite.y = -(svg.offset.y ?? 0) * size;
        }

        this.container.addChild(svgSprite);
        this.svgs.push(svgSprite);
      }
    }
  };

  #displayFrame = (
    symbolContainer: PIXI.Container | null,
    symbol: LaBruteSymbol | Svg | null,
    colorIdx?: string,
    zIndex?: number,
    svgMaskedBy?: number,
  ) => {
    if (!symbolContainer || !symbol) return;

    if (symbol.type === 'svg') {
      const sprite = this.svgs
        .filter((s) => s.name === symbol.name)[this.#usedSvgs[symbol.name] ?? 0];

      if (!sprite) {
        throw new Error(`Sprite ${symbol.name} not found`);
      }

      // Hide shield if needed
      if (sprite.name === SHIELD_SYMBOL[this.#animationType]) {
        sprite.visible = this.shield;
      } else if (!this.weapon) {
        // Hide 39 if no weapon
        sprite.visible = sprite.name !== 'Symbol39';
      } else {
        sprite.visible = true;
      }

      // Apply masking
      if (svgMaskedBy) {
        // Get mask sprite
        const maskSprite = this.svgs.find((svg) => svg.name === `Symbol${svgMaskedBy}`);
        if (!maskSprite) {
          throw new Error(`Mask sprite Symbol${svgMaskedBy} not found`);
        }

        sprite.mask = maskSprite;
      }

      // Apply color
      if (colorIdx) {
        const color = this.#colors[colorIdx.substring(1)];
        if (!color) {
          throw new Error(`Color ${colorIdx} not found`);
        }

        sprite.tint = parseInt(color.replace('#', ''), 16);
      }

      // Add to current container
      sprite.zIndex = zIndex ?? 0;
      symbolContainer.addChild(sprite);

      // Increment used count
      const usedCount = this.#usedSvgs[symbol.name];
      if (usedCount) {
        this.#usedSvgs[symbol.name] = usedCount + 1;
      } else {
        this.#usedSvgs[symbol.name] = 1;
      }
    } else {
      const usedSymbols: string[] = [];

      // Check if symbol has an offset
      if (symbol.offset) {
        // eslint-disable-next-line no-param-reassign
        symbolContainer.x = symbol.offset.x ?? 0;
        // eslint-disable-next-line no-param-reassign
        symbolContainer.y = symbol.offset.y ?? 0;
      }

      // Get frame to load
      let frameToLoad: number;

      // If symbol has partIdx, only load the corresponding frame
      if (symbol.partIdx) {
        const partValue = this.#parts[symbol.partIdx.substring(1)];

        if (partValue === undefined) {
          throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
        }

        frameToLoad = partValue;
      } else if (symbol.name === WEAPON_SYMBOL) {
        // Load current weapon frame
        frameToLoad = WEAPON_FRAMES.indexOf(this.weapon);
      } else if (symbol.name === 'Symbol526') {
        // Special case for whip animation
        frameToLoad = 16;
      } else if (ANIMATION_SYMBOL_NAMES[this.#animationType].includes(symbol.name)) {
        // If the symbol is an animation, load the current frame
        frameToLoad = this.#frame;
      } else {
        // Else load the first frame
        frameToLoad = 0;
      }

      const frameParts = symbol.frames?.[frameToLoad] ?? [];
      const usedContainers: Record<string, number> = {};

      for (let i = 0; i < frameParts.length; i++) {
        const framePart = frameParts[i];

        if (!framePart) {
          throw new Error(`Part ${i} not found in frame ${frameToLoad}`);
        }

        // Count identic symbols already used
        const identicSymbolsCount = usedSymbols.filter((s) => s === framePart.name).length;

        // Get corresponding symbol
        const framePartSymbol = symbol.parts
          ?.filter((p) => p.name === framePart.name)[identicSymbolsCount];

        if (!framePartSymbol) {
          throw new Error(`Part ${framePart.name} not found in symbol ${symbol.name}`);
        }

        if (framePartSymbol.type === 'svg') {
          this.#displayFrame(
            symbolContainer,
            framePartSymbol,
            colorIdx,
            frameParts.length - i,
            framePart.maskedBy,
          );
          continue;
        }

        // Get corresponding container
        const sameParts = symbolContainer.children.filter(
          (child) => child instanceof PIXI.Container
            && child.name === framePart.name
        ).length;
        const framePartContainer = symbolContainer.children
          .filter(
            (child) => child instanceof PIXI.Container && child.name === framePart.name
          )[sameParts - (usedContainers[framePart.name] ?? 0) - 1] as PIXI.Container | undefined;

        if (!framePartContainer) {
          throw new Error(`Container ${framePart.name} not found`);
        }

        // Apply transform
        if (framePart.transform) {
          let size = SCALE;

          // Custom scale for panther
          if (this.type === 'pet' && this.name === 'panther') {
            size = SCALE * 1.5;
          } else if (this.type === 'boss') {
            // Custom scale for bosses
            size = SCALE * (bosses.find((b) => b.name === this.name)?.scale ?? 1);
          }
          framePartContainer.transform.setFromMatrix(matrixFromObject(framePart.transform, size));
        }

        // Apply color offset
        if (framePart.colorOffset) {
          if (this.type === 'pet' && this.name === 'panther') {
            framePartContainer.filters = [new Filter(undefined, ColorOffsetShader, {
              offset: new Float32Array([-82, -97, -82]),
              mult: new Float32Array([1, 1, 1])
            })];
          } else {
            framePartContainer.filters = [new Filter(undefined, ColorOffsetShader, {
              offset: new Float32Array([
                framePart.colorOffset.r ?? 0,
                framePart.colorOffset.g ?? 0,
                framePart.colorOffset.b ?? 0
              ]),
              mult: new Float32Array([1, 1, 1])
            })];
          }
        }

        // Apply alpha
        if (framePart.alpha) {
          framePartContainer.alpha = framePart.alpha;
        }

        // Apply masking
        if (framePart.maskedBy) {
          // Get mask sprite
          const maskSprite = this.svgs.find((svg) => svg.name === `Symbol${framePart.maskedBy}`);
          if (!maskSprite) {
            throw new Error(`Mask sprite Symbol${framePart.maskedBy} not found`);
          }

          framePartContainer.mask = maskSprite;
        }

        // Apply visibility
        framePartContainer.visible = true;
        const usedCount = usedContainers[framePart.name];
        if (usedCount) {
          usedContainers[framePart.name] = usedCount + 1;
        } else {
          usedContainers[framePart.name] = 1;
        }

        // Handle children
        this.#displayFrame(
          framePartContainer,
          framePartSymbol,
          framePartSymbol.colorIdx ?? colorIdx,
        );
      }
    }
  };

  once = (event: string, callback: (e: string) => void) => {
    if (!this.onceEvents[event]) {
      this.onceEvents[event] = [];
    }

    (this.onceEvents[event] ?? []).push(callback);
  };

  on = (event: string, callback: (e: string) => void) => {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    (this.events[event] ?? []).push(callback);
  };

  play = () => {
    this.#playing = true;
  };

  pause = () => {
    this.#playing = false;
  };

  waitForEvent = async (event: string) => new Promise<void>((resolve) => {
    this.once(event, () => {
      resolve();
    });
  });

  destroy = () => {
    this.pause();
    this.container.destroy();
  };
}
