import { Cmyk } from "../types";

const cmykToRgb = (cmyk: Cmyk) => {
  let { c, m, y, k } = cmyk;
  c /= 100;
  m /= 100;
  y /= 100;
  k /= 100;
  const r = 255 * (1 - c) * (1 - k);
  const g = 255 * (1 - m) * (1 - k);
  const b = 255 * (1 - y) * (1 - k);
  return { r, g, b };
};

export default cmykToRgb;
