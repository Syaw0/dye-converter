import { Hex } from "../types";
import hexToRgb from "./hexToRgb";

const hexToCmyk = (hex: Hex) => {
  const rgbColor = hexToRgb(hex);
  const cmyk = { c: 0, m: 0, y: 0, k: 0 };
  let { r, g, b } = rgbColor;
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);

  cmyk.k = 1 - max;
  cmyk.c = (1 - r - cmyk.k) / (1 - cmyk.k);
  cmyk.m = (1 - g - cmyk.k) / (1 - cmyk.k);
  cmyk.y = (1 - b - cmyk.k) / (1 - cmyk.k);
  Object.keys(cmyk).forEach((k) => {
    const key = k as keyof typeof cmyk;
    cmyk[key] *= 100;
    cmyk[key] = Math.round(cmyk[key]);
  });
  return cmyk;
};
export default hexToCmyk;
