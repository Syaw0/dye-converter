![headImg](https://github.com/Syaw0/color-converter/blob/develop/doc/head.png)

# Dye Converter

**simple and fast color converter!**

<br/>

## Get Started

installing the package:

```bash
npm install dye-converter
```

then import module:

```javascript
import dc from "dye-converter";
// or
const dc = require("dye-converter");
```

convert rgb to hex:

```javascript
const hex = dc.rgbToHex({ r: 11, g: 22, b: 123 });
```

convert rgb to hsl:

```javascript
const hex = dc.rgbToHsl({ r: 11, g: 22, b: 123 });
```

convert hsl to rgb:

```javascript
const hex = dc.hslToRgb({ h: 122, s: 11, l: 33 });
```

<br/>

## Available converters

| HEX       | RGB       | HSL      | CMYK      |
| --------- | --------- | -------- | --------- |
| hexToRgb  | rgbToHex  | hslToRgb | cmykToHsl |
| hexToHsv  | rgbToHsv  | hslToHex | cmykToRgb |
| hexToHsl  | rgbToHsl  |          |
| hexToCmyk | rgbToCmyk |          |


<br/>

## License

MIT
