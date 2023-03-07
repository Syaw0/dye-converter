export {};

declare global {
  type Rgb = { r: number; g: number; b: number };
  type Hsl = { h: number; s: number; l: number };
  type Cmyk = { c: number; m: number; y: number; k: number };
  type Hex = string;
}
