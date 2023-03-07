import { Cmyk } from "../types";
import cmykToRgb from "./cmykToRgb";
import rgbToHsl from "./rgbToHsl";

const cmykToHsl = (cmyk: Cmyk) => {
  const rgb = cmykToRgb(cmyk);
  return rgbToHsl(rgb);
};

export default cmykToHsl;
