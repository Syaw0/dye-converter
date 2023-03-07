import { Rgb } from "../types";

const rgbToCmyk = (rgb: Rgb) => {
  let { r, g, b } = rgb;

  r /= 255;
  g /= 255;
  b /= 255;

  const k = 1 - Math.max(r, g, b);
  const c = (1 - r - k) / (1 - k);
  const m = (1 - g - k) / (1 - k);
  const y = (1 - b - k) / (1 - k);

  const cmyk: { [i: string]: number } = { c, m, y, k };
  Object.keys(cmyk).forEach((i) => {
    cmyk[i] = Math.round(cmyk[i] * 100);
  });

  return cmyk;
};

export default rgbToCmyk;
