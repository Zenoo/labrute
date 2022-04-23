export type Gender = 'male' | 'female';

export interface AssetPosition {
  x: number;
  y: number;
}

export interface Asset {
  file: string;
  name: string;
  position: AssetPosition;
  rotateCenter: AssetPosition;
}
