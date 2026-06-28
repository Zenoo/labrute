import {
  BruteBodyPart, BruteColor, readBodyString, readColorString
} from '@labrute/core';
import { Gender } from '@labrute/prisma';
import {
  FramePart, Symbol as LaBruteSymbol, Svg, Symbol460, Symbol752
} from 'labrute-static-fla-parser';
import { OutlineFilter } from 'pixi-filters/outline';
import {
  Assets,
  ColorMatrixFilter,
  Container,
  Matrix,
  Sprite,
  Texture
} from 'pixi.js';

const FEMALE_SYMBOL = Symbol752;
const MALE_SYMBOL = Symbol460;

type SvgsToLoad = {
  svg: Svg;
  count: number;
}[];

const matrixFromObject = (obj: FramePart['transform'], scale = 1) => new Matrix(obj?.a ?? 1, obj?.b ?? 0, obj?.c ?? 0, obj?.d ?? 1, (obj?.tx ?? 0) * scale, (obj?.ty ?? 0) * scale);

type Colors = {
  col0: string;
  col0a: string;
  col0c: string;
  col1: string;
  col1a: string;
  col1b: string;
  col1c: string;
  col1d: string;
  col2: string;
  col2a: string;
  col2b: string;
  col3: string;
  col3b: string;
  col4: string;
  col4a: string;
  col4b: string;
};

export class BruteDisplay {
  // Setup data
  gender: 'male' | 'female';

  #colors: Colors;

  #parts: Record<BruteBodyPart, number>;

  readonly #looking: 'left' | 'right';

  // PIXI
  container: Container;

  svgs: Sprite[] = [];

  #usedSvgs: Record<string, number> = {};

  #scale: number;

  #highlightTint?: BruteColor;

  #colorOffsetFilters = new WeakMap<Container, { key: string; filter: ColorMatrixFilter }>();

  #isReady = false;

  #onLoad: (() => void) | undefined;

  constructor(
    gender: Gender,
    colors: string,
    parts: string,
    looking: 'left' | 'right' = 'left',
    scale = 1,
    highlightTint?: BruteColor
  ) {
    this.#colors = readColorString(gender, colors);
    this.#parts = readBodyString(parts);
    this.#looking = looking;
    this.gender = gender;
    this.#scale = scale;
    this.#highlightTint = highlightTint;
    this.container = new Container();
    this.container.sortableChildren = true;

    this.#initialize();
  }

  #initialize() {
    // Create male and female container inside
    const maleContainer = new Container();
    maleContainer.sortableChildren = true;
    maleContainer.label = Gender.male;
    this.container.addChild(maleContainer);

    const femaleContainer = new Container();
    femaleContainer.sortableChildren = true;
    femaleContainer.label = Gender.female;
    this.container.addChild(femaleContainer);

    // Initialize male
    const svgsToLoad: SvgsToLoad = [];
    if (this.gender === Gender.male) {
      const symbol = MALE_SYMBOL;

      this.#initializeContainersAndGetSvgsToLoad(
        svgsToLoad,
        maleContainer,
        symbol.parts,
        symbol.frames?.[0],
      );
    } else {
      // Initialize female
      const symbol = FEMALE_SYMBOL;

      this.#initializeContainersAndGetSvgsToLoad(
        svgsToLoad,
        femaleContainer,
        symbol.parts,
        symbol.frames?.[0],
      );
    }

    // Load SVGs
    this.#loadSvgs(svgsToLoad).then(() => {
      // Set X scale
      if (this.#looking === 'right') {
        this.container.scale.x = -1;
      }

      // Apply black outline and subtle outer glow for Flash-era look
      const containerOutline = new OutlineFilter({
        thickness: 2,
        color: 0x000000,
      });
      containerOutline.padding = 4;
      this.container.filters = [
        containerOutline,
      ];

      // Display frame
      this.#usedSvgs = {};
      if (this.gender === Gender.male) {
        this.#displayFrame(maleContainer, MALE_SYMBOL);
      } else {
        this.#displayFrame(femaleContainer, FEMALE_SYMBOL);
      }

      this.#isReady = true;
      this.#onLoad?.();
    });
  }

  updateBrute(
    gender: Gender,
    colors: Colors,
    parts: Record<BruteBodyPart, number>,
  ) {
    this.gender = gender;
    this.#colors = colors;
    this.#parts = parts;

    // Reset everything
    this.svgs.forEach((svg) => {
      if (!svg.destroyed) {
        svg.destroy({ texture: false, textureSource: false });
      }
    });
    this.svgs = [];
    this.container.children.forEach((child) => {
      if (!child.destroyed) {
        child.destroy({ children: true, texture: false, textureSource: false });
      }
    });

    this.#initialize();
  }

  #initializeContainersAndGetSvgsToLoad = (
    svgsToLoad: SvgsToLoad,
    symbolContainer: Container,
    parts: LaBruteSymbol['parts'],
    frame: FramePart[] = [],
  ) => {
    frame.forEach((framePart, i) => {
      const symbol = parts?.find((p) => p.name === framePart.name);

      if (!symbol) {
        throw new Error(`Part ${framePart.name} not found in symbol ${symbolContainer.label}`);
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

        const container = new Container();
        container.sortableChildren = true;
        container.label = symbol.name;
        container.visible = false;
        container.zIndex = frame.length - i;

        symbolContainer.addChild(container);

        // Get frames to load
        let framesToLoad: number[] = [];

        // If symbol has partIdx
        if (symbol.partIdx) {
          // Load only the corresponding frame
          const partValue = this.#parts[symbol.partIdx.substring(1) as BruteBodyPart];

          if (partValue === undefined) {
            throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
          }

          framesToLoad = [partValue];
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

  #loadSvgs = async (svgsToLoad: SvgsToLoad) => {
    const loadingSvgs: Promise<void>[] = [];
    const textureCache = new Map<string, Promise<Texture | null>>();

    const getTexture = (
      svgDataUrl: string,
      renderScale: number,
      cacheKey: string,
      svgName: string,
    ) => {
      const cached = textureCache.get(cacheKey);
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

      textureCache.set(cacheKey, loadPromise);
      return loadPromise;
    };

    for (const svgToLoad of svgsToLoad) {
      const { svg } = svgToLoad;

      for (let i = 0; i < svgToLoad.count; i++) {
        loadingSvgs.push(new Promise((resolve) => {
          const size = this.#scale;
          const customScale = svg.scale ?? 1;
          const renderScale = Math.max(1, size * customScale);
          const svgSource = `${svg.svg}<!-- ${renderScale} -->`;
          const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(svgSource)}`;

          const addSprite = (texture: Texture) => {
            const svgSprite = new Sprite(texture);
            svgSprite.label = svg.name;
            svgSprite.scale.set(size);
            svgSprite.visible = false;

            // Apply offset
            if (svg.offset) {
              svgSprite.x = -(svg.offset.x ?? 0) * size;
              svgSprite.y = -(svg.offset.y ?? 0) * size;
            }

            this.container.addChild(svgSprite);
            this.svgs.push(svgSprite);
          };

          const cacheKey = `${svg.name}|${renderScale}`;
          getTexture(svgDataUrl, renderScale, cacheKey, svg.name)
            .then((texture) => {
              if (texture) {
                addSprite(texture);
              }
            })
            .finally(() => {
              resolve();
            });
        }));
      }
    }

    await Promise.all(loadingSvgs);
  };

  #getColorOffsetFilter = (container: Container, r: number, g: number, b: number) => {
    const key = `${r},${g},${b}`;
    const existingFilter = this.#colorOffsetFilters.get(container);

    if (existingFilter?.key === key) {
      return existingFilter.filter;
    }

    const filter = new ColorMatrixFilter();
    filter.matrix = [
      1, 0, 0, 0, r / 255,
      0, 1, 0, 0, g / 255,
      0, 0, 1, 0, b / 255,
      0, 0, 0, 1, 0,
    ];

    this.#colorOffsetFilters.set(container, { key, filter });

    return filter;
  };

  #displayFrame = (
    symbolContainer: Container,
    symbol: LaBruteSymbol | Svg,
    colorIdx?: string,
    zIndex?: number,
  ) => {
    if (symbol.type === 'svg') {
      const sprite = this.svgs.filter(
        (s) => s.label === symbol.name,
      )[this.#usedSvgs[symbol.name] ?? 0];

      if (!sprite) {
        throw new Error(`Sprite ${symbol.name} not found`);
      }

      // Hide 45
      if (symbol.name === 'Symbol45') {
        sprite.visible = false;
        return;
      }

      // Set visibility
      sprite.visible = true;

      // Apply color
      if (colorIdx) {
        const colorName = colorIdx.substring(1) as BruteColor;
        const color = this.#colors[colorName];
        if (!color) {
          throw new Error(`Color ${colorIdx} not found`);
        }

        sprite.tint = parseInt(color.replace('#', ''), 16);

        if (this.#highlightTint === colorName) {
          // Apply highlight effect
          const highlightOutline = new OutlineFilter({
            thickness: 4,
            color: 0xFFFFFF,
          });
          highlightOutline.padding = 8;
          sprite.filters = [
            highlightOutline,
          ];
        } else {
          sprite.filters = null;
        }
      }

      // Add to current container
      sprite.zIndex = zIndex ?? 0;
      symbolContainer.addChild(sprite);

      // Increment used count
      this.#usedSvgs[symbol.name] = (this.#usedSvgs[symbol.name] ?? 0) + 1;
    } else {
      const usedSymbols: string[] = [];

      // Get frame to load
      let frameToLoad: number;

      // If symbol has partIdx, only load the corresponding frame
      if (symbol.partIdx) {
        const partValue = this.#parts[symbol.partIdx.substring(1) as BruteBodyPart];

        if (partValue === undefined) {
          throw new Error(`Part ${symbol.partIdx} not found in fighter config`);
        }

        frameToLoad = partValue;
      } else {
        // Else load the first frame
        frameToLoad = 0;
      }

      const frameParts = symbol.frames?.[frameToLoad] ?? [];
      const usedContainers: Record<string, number> = {};

      for (let i = 0; i < frameParts.length; i++) {
        const framePart = frameParts[i];

        if (!framePart) {
          throw new Error(`Part not found in symbol ${symbol.name}`);
        }

        // Count identic symbols already used
        const identicSymbolsCount = usedSymbols.filter((s) => s === framePart.name).length;

        // Get corresponding symbol
        const framePartSymbol = symbol.parts?.filter(
          (p) => p.name === framePart.name,
        )[identicSymbolsCount];

        if (!framePartSymbol) {
          throw new Error(`Part ${framePart.name} not found in symbol ${symbol.name}`);
        }

        if (framePartSymbol.type === 'svg') {
          this.#displayFrame(
            symbolContainer,
            framePartSymbol,
            colorIdx,
            frameParts.length - i,
          );
          continue;
        }

        // Get corresponding container
        const framePartContainer = symbolContainer.children
          .filter(
            (child) => child instanceof Container && child.label === framePart.name
          )[usedContainers[framePart.name] ?? 0] as Container | undefined;

        if (!framePartContainer) {
          throw new Error(`Container ${framePart.name} not found`);
        }

        // Apply transform
        if (framePart.transform) {
          framePartContainer.setFromMatrix(
            matrixFromObject(framePart.transform, this.#scale)
          );
        }

        // Apply color offset
        if (framePart.colorOffset) {
          framePartContainer.filters = [this.#getColorOffsetFilter(
            framePartContainer,
            framePart.colorOffset.r ?? 0,
            framePart.colorOffset.g ?? 0,
            framePart.colorOffset.b ?? 0,
          )];
        }

        // Apply alpha
        if (framePart.alpha) {
          framePartContainer.alpha = framePart.alpha;
        }

        // Apply masking
        if (framePart.maskedBy) {
          // Get mask sprite
          const maskSprite = this.svgs.find((svg) => svg.label === `Symbol${framePart.maskedBy}`);
          if (!maskSprite) {
            throw new Error(`Mask sprite Symbol${framePart.maskedBy} not found`);
          }

          if (maskSprite.parent !== framePartContainer) {
            framePartContainer.addChild(maskSprite);
          }

          // Keep mask sprites visible for Pixi v8 masking.
          maskSprite.visible = true;

          framePartContainer.mask = maskSprite;
        }

        // Apply visibility
        framePartContainer.visible = true;
        usedContainers[framePart.name] = (usedContainers[framePart.name] ?? 0) + 1;

        // Handle children
        this.#displayFrame(
          framePartContainer,
          framePartSymbol,
          framePartSymbol.colorIdx ?? colorIdx,
        );
      }
    }
  };

  onLoad = (callback: () => void) => {
    this.#onLoad = callback;

    if (this.#isReady) {
      callback();
    }
  };

  destroy = () => {
    this.svgs.forEach((svg) => {
      if (!svg.destroyed) {
        svg.destroy({ texture: false, textureSource: false });
      }
    });
    this.svgs = [];
    this.container.destroy({ children: true, texture: false, textureSource: false });
  };
}
