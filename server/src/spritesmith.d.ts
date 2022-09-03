declare module 'spritesmith' {
  export interface SpriteResult {
    coordinates: Record<string, { x: number; y: number; width: number; height: number }>;
    properties: { width: number; height: number };
    image: Buffer;
  }

  export interface SpriteSmithOptions {
    src: (string | Vynil.BufferFile)[];
    padding?: number;
    algorithm?: 'top-down' | 'left-right' | 'diagonal' | 'alt-diagonal' | 'binary-tree';
    engine?: 'pixelsmith' | 'canvas';
    exportOpts?: {
      format?: 'png' | 'jpg' | 'jpeg' | 'webp';
      quality?: number;
      background?: string;
    };
  }

  export function run(options: SpriteSmithOptions, callback: (err: Error | null, result: SpriteResult) => void): void;
}