import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/canvas/lib/parse-font.js
var require_parse_font = __commonJS({
  "node_modules/canvas/lib/parse-font.js"(exports, module) {
    "use strict";
    var weights = "bold|bolder|lighter|[1-9]00";
    var styles = "italic|oblique";
    var variants = "small-caps";
    var stretches = "ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded";
    var units = "px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q";
    var string = `'([^']+)'|"([^"]+)"|[\\w\\s-]+`;
    var weightRe = new RegExp(`(${weights}) +`, "i");
    var styleRe = new RegExp(`(${styles}) +`, "i");
    var variantRe = new RegExp(`(${variants}) +`, "i");
    var stretchRe = new RegExp(`(${stretches}) +`, "i");
    var sizeFamilyRe = new RegExp(
      `([\\d\\.]+)(${units}) *((?:${string})( *, *(?:${string}))*)`
    );
    var cache = {};
    var defaultHeight = 16;
    module.exports = (str) => {
      if (cache[str])
        return cache[str];
      const sizeFamily = sizeFamilyRe.exec(str);
      if (!sizeFamily)
        return;
      const font = {
        weight: "normal",
        style: "normal",
        stretch: "normal",
        variant: "normal",
        size: parseFloat(sizeFamily[1]),
        unit: sizeFamily[2],
        family: sizeFamily[3].replace(/["']/g, "").replace(/ *, */g, ",")
      };
      let weight, style, variant, stretch;
      const substr = str.substring(0, sizeFamily.index);
      if (weight = weightRe.exec(substr))
        font.weight = weight[1];
      if (style = styleRe.exec(substr))
        font.style = style[1];
      if (variant = variantRe.exec(substr))
        font.variant = variant[1];
      if (stretch = stretchRe.exec(substr))
        font.stretch = stretch[1];
      switch (font.unit) {
        case "pt":
          font.size /= 0.75;
          break;
        case "pc":
          font.size *= 16;
          break;
        case "in":
          font.size *= 96;
          break;
        case "cm":
          font.size *= 96 / 2.54;
          break;
        case "mm":
          font.size *= 96 / 25.4;
          break;
        case "%":
          break;
        case "em":
        case "rem":
          font.size *= defaultHeight / 0.75;
          break;
        case "q":
          font.size *= 96 / 25.4 / 4;
          break;
      }
      return cache[str] = font;
    };
  }
});

// node_modules/canvas/browser.js
var require_browser = __commonJS({
  "node_modules/canvas/browser.js"(exports) {
    var parseFont = require_parse_font();
    exports.parseFont = parseFont;
    exports.createCanvas = function(width, height) {
      return Object.assign(document.createElement("canvas"), { width, height });
    };
    exports.createImageData = function(array, width, height) {
      switch (arguments.length) {
        case 0:
          return new ImageData();
        case 1:
          return new ImageData(array);
        case 2:
          return new ImageData(array, width);
        default:
          return new ImageData(array, width, height);
      }
    };
    exports.loadImage = function(src, options) {
      return new Promise(function(resolve, reject) {
        const image = Object.assign(document.createElement("img"), options);
        function cleanup() {
          image.onload = null;
          image.onerror = null;
        }
        image.onload = function() {
          cleanup();
          resolve(image);
        };
        image.onerror = function() {
          cleanup();
          reject(new Error('Failed to load the image "' + src + '"'));
        };
        image.src = src;
      });
    };
  }
});
export default require_browser();
//# sourceMappingURL=canvas.js.map
