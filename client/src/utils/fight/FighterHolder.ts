import {
  Animation, bosses, Fighter, FIGHTER_HEIGHT,
  FIGHTER_WIDTH, readBodyString, readColorString, SkillId
} from '@labrute/core';
import {
  BossName, Gender, PetName, WeaponName
} from '@labrute/prisma';
import { AdjustmentFilter } from 'pixi-filters/adjustment';
import dayjs from 'dayjs';
import {
  FramePart, Symbol as LaBruteSymbol, Svg, Symbol475,
  Symbol476, Symbol478, Symbol479, Symbol488, Symbol489,
  Symbol490, Symbol491, Symbol493, Symbol494, Symbol495,
  Symbol496, Symbol497, Symbol498, Symbol503, Symbol505,
  Symbol506, Symbol507, Symbol508, Symbol509,
  Symbol510, Symbol513, Symbol516, Symbol517,
  Symbol541, Symbol542, Symbol543, Symbol544,
  Symbol545, Symbol546, Symbol846, Symbol847,
  Symbol848, Symbol849, Symbol851, Symbol854,
  Symbol855, Symbol856, Symbol857, Symbol858,
  Symbol859, Symbol860, Symbol861, Symbol863,
  Symbol864, Symbol865, Symbol866, Symbol867,
  Symbol868, Symbol869, Symbol870, Symbol871,
  Symbol875, Symbol876, Symbol877, Symbol878,
  Symbol879, Symbol880, Symbol894, Symbol903,
  Symbol904, Symbol905, Symbol906, Symbol907,
  Symbol910, Symbol911, Symbol912, Symbol913,
  Symbol935, Symbol936, Symbol937, Symbol938,
  Symbol939, Symbol940, Symbol941, Symbol942,
  Symbol943, Symbol944
} from 'labrute-fla-parser';
import {
  Application,
  Assets,
  BlurFilter, Container, Filter, Graphics, Matrix, Sprite, Texture,
  Ticker
} from 'pixi.js';
import { RefObject } from 'react';
import { createColorOffsetFilter } from '../pixi/createColorOffsetFilter';

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
    train: null,
    train2: null,
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
    train: null,
    train2: null,
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

type SvgLoadEntry = {
  svg: Svg;
  renderScale: number;
};

const matrixFromObject = (obj: FramePart['transform'], scale = 1) => new Matrix(obj?.a ?? 1, obj?.b ?? 0, obj?.c ?? 0, obj?.d ?? 1, (obj?.tx ?? 0) * scale, (obj?.ty ?? 0) * scale);

const multiplyMatrices = (left: Matrix, right: Matrix) => new Matrix(
  left.a * right.a + left.c * right.b,
  left.b * right.a + left.d * right.b,
  left.a * right.c + left.c * right.d,
  left.b * right.c + left.d * right.d,
  left.a * right.tx + left.c * right.ty + left.tx,
  left.b * right.tx + left.d * right.ty + left.ty,
);

export class FighterHolder {
  // Shared across all FighterHolder instances to avoid reloading/reparsing the same SVG
  // textures for each dojo pupil.
  static readonly #sharedSvgTextureCache = new Map<string, Promise<Texture | null>>();

  // Setup data
  readonly type: Fighter['type'];

  readonly #animationType: Gender | 'dog' | 'bear';

  readonly name: Fighter['name'];

  readonly #colors: Record<string, string>;

  readonly #parts: Record<string, number>;

  readonly skills: Partial<Record<SkillId, number>>;

  // Those can change mid-fight
  animation: Animation = 'arrive';

  shield = false;

  weapon: WeaponName | null = null;

  readonly baseWidth: number;

  readonly baseHeight: number;

  // PIXI
  readonly container: Container;

  #renderContainer = new Container();

  #animationSymbol: LaBruteSymbol | null = null;

  shadow: Container = new Container();

  #isAirborn = false;

  #scale = 1;

  #playing = true;

  #frame = 0;

  #previousFrame = -1;

  #timer = 0;

  #baseAnimationSpeed = 1;

  svgs: Sprite[] = [];

  #svgTexturesByLabel = new Map<string, Texture>();

  #svgDataByLabel = new Map<string, Svg>();

  #svgsByLabel = new Map<string, Sprite[]>();

  #maskSvgsByLabel = new Map<string, Sprite[]>();

  #containerPoolByParent = new WeakMap<Container, Map<string, Container[]>>();

  #allPooledContainers: Container[] = [];

  speed: RefObject<number>;

  #frameCount = 0;

  #usedSvgs: Record<string, number> = {};

  #usedMaskSvgs: Record<string, number> = {};

  #colorOffsetFilters = new WeakMap<Container, { key: string; filter: Filter }>();

  #tickerHandler: ((ticker: Ticker) => void) | null = null;

  #appTicker: Ticker | null = null;

  #isDestroyed = false;

  loaded = false;

  // Events
  events: Record<string, ((event: string) => void)[]> = {};

  onceEvents: Record<string, ((event: string) => void)[]> = {};

  constructor(
    app: Application,
    fighter: Fighter,
    speed: RefObject<number>,
    scale = 1,
  ) {
    this.type = fighter.type;
    this.name = fighter.name;
    this.shield = fighter.shield;
    this.weapon = null;
    this.skills = fighter.skills;
    this.#colors = readColorString(fighter.gender ?? Gender.male, fighter.colors || '0'.repeat(96));
    this.#parts = readBodyString(fighter.body || '0'.repeat(11));
    this.speed = speed;

    // Apply custom scale
    this.#scale = scale;

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

    const symbolContainer = new Container();
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

    this.#renderContainer.sortableChildren = true;
    this.#renderContainer.visible = true;
    this.container.addChild(this.#renderContainer);

    // Custom scale for panther
    if (this.type === 'pet' && this.name === 'panther') {
      this.#scale *= 1.5;
    } else if (this.type === 'boss') {
      // Custom scale for bosses
      this.#scale *= (bosses.find((b) => b.name === this.name)?.scale ?? 1);
    }

    // Get fighter model type
    let fighterModelType: 'brute' | 'dog' | 'bear' = 'brute';

    if (this.type === 'pet') {
      if (fighter.name === PetName.panther || fighter.name.startsWith('dog')) {
        fighterModelType = 'dog';
      } else if (fighter.name === PetName.bear) {
        fighterModelType = 'bear';
      }
    } else if (this.type === 'boss') {
      const bossType = bosses.find((b) => b.name === fighter.name)?.base as 'bear' | 'panther' | 'dog1' || 'bear';
      if (bossType === PetName.bear) {
        fighterModelType = 'bear';
      } else {
        fighterModelType = 'dog';
      }
    }

    // Set the base width and height information
    this.baseWidth = FIGHTER_WIDTH[fighterModelType] * SCALE * this.#scale;
    this.baseHeight = FIGHTER_HEIGHT[fighterModelType] * SCALE * this.#scale;

    // Create Shadow Graphics
    const shadowGraphics = new Graphics()
      .ellipse(0, 0, 30, 10)
      .fill({ color: 0x000000, alpha: 0.4 });

    // Create Shadow Sprite
    const shadowSprite = new Sprite();
    shadowSprite.texture = app.renderer.generateTexture(shadowGraphics);
    shadowSprite.anchor.set(0.5, 0.5);
    shadowSprite.width = this.baseWidth;
    shadowSprite.height = (this.baseHeight * 30) / this.baseWidth;

    if (fighterModelType === 'brute') {
      // Brute shadow
      shadowSprite.position.set(0, -0.02 * this.baseHeight);
      shadowSprite.scale.set(0.72 * this.#scale, 0.7 * this.#scale);
    } else if (fighterModelType === 'bear') {
      // Bear shadow
      shadowSprite.scale.set(1.3 * this.#scale, 1.1 * this.#scale);
    } else {
      // Dog shadow
      shadowSprite.position.set(-0.2 * this.baseHeight, 0);
      shadowSprite.scale.set(0.7 * this.#scale, 0.5 * this.#scale);
    }

    // Blur shadow depending on it's size
    shadowSprite.filters = [new BlurFilter({ strength: this.baseWidth * 0.065 })];
    // Add shadowSprite to shadow container
    this.shadow.addChild(shadowSprite);
    this.shadow.alpha = 0;
    // Add shadow Container to fightHolder
    this.container.addChild(this.shadow);

    const svgsToLoadByName = new Map<string, SvgLoadEntry>();

    this.#animationSymbol = ANIMATIONS[this.#animationType][this.animation];
    this.#frameCount = this.#animationSymbol?.frames?.length ?? 0;

    // For each animation
    for (const animation of animationsByType) {
      if (!animation) continue;

      // For each frame
      for (const frame of animation.frames ?? []) {
        this.#collectSvgsToLoad(svgsToLoadByName, animation.parts, frame);
      }

      // Change color on bosses
      if (this.type === 'boss') {
        const boss = bosses.find(({ name }) => name === this.name);
        if (!boss) {
          throw new Error(`Boss not found: ${this.name}`);
        }

        const aprilFools = dayjs.utc().isSame(dayjs.utc('04-01', 'MM-DD'), 'day');
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

    // Load SVG textures
    this.#loadSvgs([...svgsToLoadByName.values()]).then(() => {
      if (this.#isDestroyed || this.container.destroyed) {
        return;
      }

      // Loaded event
      this.loaded = true;

      // Play animation (loop on frames with PIXI ticker)
      this.#appTicker = app.ticker ?? null;
      this.#tickerHandler = () => {
        if (this.container.destroyed) return;

        // Update zIndex if not airborn
        if (!this.#isAirborn) {
          this.container.zIndex = this.container.y;
        }

        // Do nothing if not playing
        if (!this.#playing) {
          return;
        }

        const tickRate = 1000 / (30 * this.speed.current);

        this.#timer += (this.#appTicker?.elapsedMS) ?? 0;
        if (this.#timer === 0 || this.#timer >= tickRate) {
          this.#timer %= tickRate;

          const loopStart = LOOP_START[this.#animationType][this.animation];
          if (this.#frame >= this.#frameCount && loopStart !== null) {
            this.#frame = loopStart;
          }

          this.#prepareFrameRender();

          // Display frame
          this.#usedSvgs = {};
          this.#usedMaskSvgs = {};
          this.#displayFrame(this.#renderContainer, this.#animationSymbol);

          const currentFrame = Math.floor(this.#frame);
          const frameChanged = currentFrame !== this.#previousFrame;

          // Only trigger events when we've moved to a new frame
          if (frameChanged) {
            // :start event
            if (currentFrame === 0) {
              this.#triggerEvents(`${this.animation}:start`);
            }

            // :trashed event
            if (this.animation === 'trash' && currentFrame === 3) {
              this.#triggerEvents(`${this.animation}:trashed`);
            }

            // :hand-raised event (win animation is faster for female)
            if (this.animation === 'win'
              && currentFrame === (this.#animationType === Gender.male ? 52 : 27)) {
              this.#triggerEvents(`${this.animation}:hand-raised`);
            }

            // :hit event
            if (this.animation === 'fist' && currentFrame === 2) {
              this.#triggerEvents(`${this.animation}:hit`);
            } else if (this.animation === 'estoc' && currentFrame === 4) {
              this.#triggerEvents(`${this.animation}:hit`);
            } else if (this.animation === 'slash' && currentFrame === 5) {
              this.#triggerEvents(`${this.animation}:hit`);
            } else if (this.animation === 'whip' && currentFrame === 4) {
              this.#triggerEvents(`${this.animation}:hit`);
            } else if (this.animation === 'attack' && this.#animationType === 'dog' && currentFrame === 2) {
              this.#triggerEvents(`${this.animation}:hit`);
            } else if (this.animation === 'attack' && this.#animationType === 'bear' && currentFrame === 4) {
              this.#triggerEvents(`${this.animation}:hit`);
            }

            // :drop event
            if (this.animation === 'death' && currentFrame === LOOP_START[this.#animationType].death) {
              this.#triggerEvents(`${this.animation}:drop`);
            }

            this.#previousFrame = currentFrame;
          }

          this.#frame += this.animationSpeed;

          // :end event
          if ((this.#frame >= this.#frameCount || this.#frame < 0)
            && LOOP_START[this.#animationType]?.[this.animation] === null) {
            this.#playing = false;
            this.#triggerEvents(`${this.animation}:${this.#frame < 0 ? 'start' : 'end'}`);
          }
        }
      };

      if (this.#appTicker) {
        this.#appTicker.add(this.#tickerHandler);
      }
    });
  }

  // Getter and setter for animationSpeed that accounts for scale
  get animationSpeed(): number {
    return this.#baseAnimationSpeed / this.#scale;
  }

  set animationSpeed(value: number) {
    this.#baseAnimationSpeed = value;
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
    if (animation === 'idle' && this.skills[SkillId.monk]) {
      this.animation = 'monk';
    } else if (animation === 'win' && this.type !== 'brute') {
      // Skip win animation for pets and bosses
      return;
    } else {
      this.animation = animation;
    }

    this.#animationSymbol = ANIMATIONS[this.#animationType][this.animation];

    // Reset frame
    this.#frame = frame;
    this.#previousFrame = -1;
    this.#frameCount = this.#animationSymbol?.frames?.length ?? 0;
    this.#timer = 0;
    this.#playing = true;

    // Display frame
    this.#usedSvgs = {};
    this.#usedMaskSvgs = {};
    this.#prepareFrameRender();
    this.#displayFrame(this.#renderContainer, this.#animationSymbol);
  }

  #collectSvgsToLoad = (
    svgsToLoadByName: Map<string, SvgLoadEntry>,
    parts: LaBruteSymbol['parts'],
    frame: FramePart[] = [],
  ) => {
    frame.forEach((framePart) => {
      const symbol = parts?.find((p) => p.name === framePart.name);

      if (!symbol) {
        throw new Error(`Part ${framePart.name} not found in symbol parts`);
      }

      // SVG
      if (symbol.type === 'svg') {
        let customScale = symbol.scale ?? 1;
        const size = SCALE * this.#scale;

        // Increase loading scale for better resolution in some cases
        if (this.type === 'boss') {
          customScale = 2;
        }

        const renderScale = Math.max(1, size * customScale);
        const existing = svgsToLoadByName.get(symbol.name);
        if (!existing || renderScale > existing.renderScale) {
          svgsToLoadByName.set(symbol.name, {
            svg: symbol,
            renderScale,
          });
        }
      } else {
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

          this.#collectSvgsToLoad(
            svgsToLoadByName,
            symbol.parts,
            currentFrame,
          );
        }
      }
    });
  };

  #loadSvgs = async (svgsToLoad: SvgLoadEntry[]) => {
    const loadingSvgs: Promise<void>[] = [];

    const getTexture = (
      svgDataUrl: string,
      renderScale: number,
      cacheKey: string,
      svgName: string,
    ) => {
      const cached = FighterHolder.#sharedSvgTextureCache.get(cacheKey);
      if (cached) {
        return cached;
      }

      const loadPromise = Assets.load<Texture>({
        src: svgDataUrl,
        data: {
          parseAsGraphicsContext: false,
          resolution: renderScale,
        },
      }).catch((error) => {
        console.error('Error creating SVG texture via Assets.load', error, svgName);
        try {
          return Texture.from(svgDataUrl);
        } catch (fallbackError) {
          console.error('Error creating fallback SVG texture', fallbackError, svgName);
          return null;
        }
      });

      FighterHolder.#sharedSvgTextureCache.set(cacheKey, loadPromise);
      return loadPromise;
    };

    for (const svgToLoad of svgsToLoad) {
      const { svg, renderScale } = svgToLoad;

      loadingSvgs.push(new Promise((resolve) => {
        const svgSource = `${svg.svg}<!-- ${renderScale} -->`;
        const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgSource)}`;
        const cacheKey = `${svg.name}|${renderScale}`;

        getTexture(svgDataUrl, renderScale, cacheKey, svg.name)
          .then((texture) => {
            if (texture) {
              this.#svgTexturesByLabel.set(svg.name, texture);
              this.#svgDataByLabel.set(svg.name, svg);
            }
          })
          .finally(() => {
            resolve();
          });
      }));
    }

    await Promise.all(loadingSvgs);
  };

  #prepareFrameRender = () => {
    for (const svg of this.svgs) {
      svg.visible = false;
      svg.renderable = true;
      svg.mask = null;
    }

    for (const maskGroup of this.#maskSvgsByLabel.values()) {
      for (const maskSvg of maskGroup) {
        maskSvg.visible = false;
        maskSvg.renderable = false;
        maskSvg.mask = null;
      }
    }

    for (const container of this.#allPooledContainers) {
      container.visible = false;
      container.mask = null;
    }
  };

  #acquireContainer = (label: string, parent: Container, index: number) => {
    let poolsByLabel = this.#containerPoolByParent.get(parent);
    if (!poolsByLabel) {
      poolsByLabel = new Map<string, Container[]>();
      this.#containerPoolByParent.set(parent, poolsByLabel);
    }

    let containers = poolsByLabel.get(label);
    if (!containers) {
      containers = [];
      poolsByLabel.set(label, containers);
    }

    let container = containers[index];
    if (!container) {
      container = new Container();
      container.sortableChildren = true;
      container.label = label;
      container.visible = false;
      containers.push(container);
      this.#allPooledContainers.push(container);
    }

    if (container.parent !== parent) {
      parent.addChild(container);
    }

    return container;
  };

  #acquireSvgSprite = (svgName: string, parent: Container) => {
    const usedCount = this.#usedSvgs[svgName] ?? 0;
    let sprites = this.#svgsByLabel.get(svgName);

    if (!sprites) {
      sprites = [];
      this.#svgsByLabel.set(svgName, sprites);
    }

    let sprite = sprites[usedCount];
    if (!sprite) {
      const texture = this.#svgTexturesByLabel.get(svgName);
      const svgData = this.#svgDataByLabel.get(svgName);

      if (!texture || !svgData) {
        throw new Error(`Sprite ${svgName} texture not found`);
      }

      const size = SCALE * this.#scale;
      sprite = new Sprite(texture);
      sprite.label = svgName;
      sprite.scale.set(size);
      sprite.visible = false;

      if (svgData.offset) {
        sprite.x = -(svgData.offset.x ?? 0) * size;
        sprite.y = -(svgData.offset.y ?? 0) * size;
      }

      sprites.push(sprite);
      this.svgs.push(sprite);
    }

    if (sprite.parent !== parent) {
      parent.addChild(sprite);
    }

    this.#usedSvgs[svgName] = usedCount + 1;
    return sprite;
  };

  #acquireMaskSvgSprite = (svgName: string, parent: Container) => {
    const usedCount = this.#usedMaskSvgs[svgName] ?? 0;
    let sprites = this.#maskSvgsByLabel.get(svgName);

    if (!sprites) {
      sprites = [];
      this.#maskSvgsByLabel.set(svgName, sprites);
    }

    let sprite = sprites[usedCount];
    if (!sprite) {
      const texture = this.#svgTexturesByLabel.get(svgName);
      const svgData = this.#svgDataByLabel.get(svgName);

      if (!texture || !svgData) {
        throw new Error(`Mask sprite ${svgName} texture not found`);
      }

      const size = SCALE * this.#scale;
      sprite = new Sprite(texture);
      sprite.label = svgName;
      sprite.scale.set(size);
      sprite.visible = false;
      sprite.renderable = false;

      if (svgData.offset) {
        sprite.x = -(svgData.offset.x ?? 0) * size;
        sprite.y = -(svgData.offset.y ?? 0) * size;
      }

      sprites.push(sprite);
    }

    if (sprite.parent !== parent) {
      parent.addChild(sprite);
    }

    this.#usedMaskSvgs[svgName] = usedCount + 1;
    return sprite;
  };

  #getColorOffsetFilter = (container: Container, r: number, g: number, b: number) => {
    const key = `${r},${g},${b}`;
    const existingFilter = this.#colorOffsetFilters.get(container);

    if (existingFilter?.key === key) {
      return existingFilter.filter;
    }

    const filter = createColorOffsetFilter(r, g, b, 'fight-color-offset-filter');

    this.#colorOffsetFilters.set(container, { key, filter });

    return filter;
  };

  #displayFrame = (
    symbolContainer: Container | null,
    symbol: LaBruteSymbol | Svg | null,
    colorIdx?: string,
    zIndex?: number,
    svgMaskedBy?: number,
    frameTransform?: FramePart['transform'],
    frameAlpha?: number,
    framePartsByName?: Map<string, FramePart>,
  ) => {
    if (!symbolContainer || !symbol) return;

    if (symbol.type === 'svg') {
      const sprite = this.#acquireSvgSprite(symbol.name, symbolContainer);
      const svgData = this.#svgDataByLabel.get(symbol.name);

      if (!svgData) {
        throw new Error(`SVG data ${symbol.name} not found`);
      }

      // Apply transform from timeline placement.
      if (frameTransform) {
        const size = SCALE * this.#scale;
        const frameMatrix = matrixFromObject(frameTransform, size);
        const baseMatrix = new Matrix(
          size,
          0,
          0,
          size,
          -((svgData.offset?.x ?? 0) * size),
          -((svgData.offset?.y ?? 0) * size),
        );
        sprite.setFromMatrix(multiplyMatrices(frameMatrix, baseMatrix));
      }

      if (frameAlpha !== undefined) {
        sprite.alpha = frameAlpha;
      }

      // Hide shield if needed
      if (sprite.label === SHIELD_SYMBOL[this.#animationType]) {
        sprite.visible = this.shield;
      } else if (!this.weapon) {
        // Hide 39 if no weapon
        sprite.visible = sprite.label !== 'Symbol39';
      } else {
        sprite.visible = true;
      }

      // Apply masking
      if (svgMaskedBy) {
        const maskName = `Symbol${svgMaskedBy}`;
        const maskSprite = this.#acquireMaskSvgSprite(maskName, symbolContainer);
        const maskFramePart = framePartsByName?.get(maskName);

        if (maskFramePart?.transform) {
          const size = SCALE * this.#scale;
          const maskMatrix = matrixFromObject(maskFramePart.transform, size);
          const maskSvgData = this.#svgDataByLabel.get(maskName);
          const maskBaseMatrix = new Matrix(
            size,
            0,
            0,
            size,
            -((maskSvgData?.offset?.x ?? 0) * size),
            -((maskSvgData?.offset?.y ?? 0) * size),
          );
          maskSprite.setFromMatrix(multiplyMatrices(maskMatrix, maskBaseMatrix));
        }

        // Keep mask sprites in the graph for masking, but do not draw them.
        maskSprite.visible = true;
        maskSprite.renderable = false;

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
    } else {
      const usedContainers: Record<string, number> = {};

      // Check if symbol has an offset
      if (symbol.offset) {
        symbolContainer.x = this.#scale * SCALE * (symbol.offset.x ?? 0);
        symbolContainer.y = this.#scale * SCALE * (symbol.offset.y ?? 0);
      } else if (symbolContainer === this.#renderContainer) {
        // Top-level container is reused across animations; clear stale offset
        // when the current animation symbol has no explicit offset.
        symbolContainer.x = 0;
        symbolContainer.y = 0;
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
        frameToLoad = Math.floor(this.#frame);
      } else {
        // Else load the first frame
        frameToLoad = 0;
      }

      const frameParts = symbol.frames?.[frameToLoad] ?? [];
      const maskSymbolNames = new Set(
        frameParts
          .filter((part) => !!part.maskedBy)
          .map((part) => `Symbol${part.maskedBy}`),
      );
      const framePartByName = new Map(frameParts.map((part) => [part.name, part]));

      for (let i = 0; i < frameParts.length; i++) {
        const framePart = frameParts[i];

        if (!framePart) {
          throw new Error(`Part ${i} not found in frame ${frameToLoad}`);
        }

        // Match previous behavior: always resolve the first matching part by name.
        const framePartSymbol = symbol.parts?.find((p) => p.name === framePart.name);

        if (!framePartSymbol) {
          throw new Error(`Part ${framePart.name} not found in symbol ${symbol.name}`);
        }

        // Mask helper symbols should not be rendered as standalone visual parts.
        if (maskSymbolNames.has(framePart.name)) {
          continue;
        }

        if (framePartSymbol.type === 'svg') {
          this.#displayFrame(
            symbolContainer,
            framePartSymbol,
            colorIdx,
            frameParts.length - i,
            framePart.maskedBy,
            framePart.transform,
            framePart.alpha,
            framePartByName,
          );
          continue;
        }

        const usedContainerCount = usedContainers[framePart.name] ?? 0;
        const framePartContainer = this.#acquireContainer(
          framePart.name,
          symbolContainer,
          usedContainerCount,
        );
        usedContainers[framePart.name] = usedContainerCount + 1;

        // Apply transform
        if (framePart.transform) {
          const size = SCALE * this.#scale;
          framePartContainer.setFromMatrix(matrixFromObject(framePart.transform, size));
        }

        // Apply color offset
        if (framePart.colorOffset) {
          const colorFilter = this.type === 'pet' && this.name === 'panther'
            ? this.#getColorOffsetFilter(framePartContainer, -82, -97, -82)
            : this.#getColorOffsetFilter(
              framePartContainer,
              framePart.colorOffset.r ?? 0,
              framePart.colorOffset.g ?? 0,
              framePart.colorOffset.b ?? 0,
            );

          if (framePartContainer.filters?.[0] !== colorFilter
            || framePartContainer.filters?.length !== 1) {
            framePartContainer.filters = [colorFilter];
          }
        } else if (framePartContainer.filters) {
          framePartContainer.filters = null;
        }

        // Apply alpha
        if (framePart.alpha !== undefined) {
          framePartContainer.alpha = framePart.alpha;
        }

        // Apply masking
        if (framePart.maskedBy) {
          const maskSprite = this.#acquireMaskSvgSprite(`Symbol${framePart.maskedBy}`, framePartContainer);

          // Keep mask sprites in the graph for masking, but do not draw them.
          maskSprite.visible = true;
          maskSprite.renderable = false;

          framePartContainer.mask = maskSprite;
        } else {
          framePartContainer.mask = null;
        }

        // Apply zIndex
        framePartContainer.zIndex = frameParts.length - i;

        // Apply visibility
        framePartContainer.visible = true;

        // Handle children
        this.#displayFrame(
          framePartContainer,
          framePartSymbol,
          framePartSymbol.colorIdx ?? colorIdx,
          undefined,
          undefined,
          undefined,
          undefined,
          framePartByName,
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

  // Stop / restart actualizing zIndex
  setAirborn = (airborn: boolean) => {
    if (!airborn) {
      this.shadow.alpha = 1;
      this.shadow.y = 0;
      this.shadow.scale.set(1, 1);
      this.container.zIndex = this.container.y;
    }
    this.#isAirborn = airborn;
  };

  destroy = () => {
    if (this.#isDestroyed) {
      return;
    }
    this.#isDestroyed = true;

    this.pause();

    // Remove ticker handler to avoid leaked callbacks
    if (this.#appTicker && this.#tickerHandler) {
      try {
        this.#appTicker.remove(this.#tickerHandler);
      } catch (e) {
        console.error('Error removing ticker handler', e);
      }
      this.#tickerHandler = null;
      this.#appTicker = null;
    }

    // Destroy container and its children
    try {
      this.container.destroy({ children: true, texture: false });
    } catch (e) {
      console.error('Error destroying container', e);
    }

    // Clear svg sprite references to allow GC; do not destroy their textures here.
    this.svgs = [];
    this.#svgTexturesByLabel.clear();
    this.#svgDataByLabel.clear();
    this.#svgsByLabel.clear();
    this.#maskSvgsByLabel.clear();
    this.#allPooledContainers = [];
    this.#containerPoolByParent = new WeakMap<Container, Map<string, Container[]>>();

    this.#colorOffsetFilters = new WeakMap<Container, { key: string; filter: Filter }>();
  };
}
