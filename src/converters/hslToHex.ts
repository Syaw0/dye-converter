import { Hsl } from "../types";
import hslToRgb from "./hslToRgb";
import rgbToHex from "./rgbToHex";

const hslToHex = (hsl: Hsl) => {
  let rgb = hslToRgb(hsl);
  return rgbToHex(rgb);
};

export default hslToHex;
