import { Rgb } from "../types";
import rgbToHsl from "./rgbToHsl";

const rgbToHsv = (rgb: Rgb) => {
  let { r, g, b } = rgb;

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const hsl = rgbToHsl(rgb);
  return { h: hsl.h, s: hsl.s, v: Math.round(max * 100) };
};

export default rgbToHsv;

console.log(rgbToHsv({ r: 66, g: 135, b: 245 }));
