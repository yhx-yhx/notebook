// node_modules/path2d-polyfill/dist/path2d-polyfill.dev.js
(function() {
  "use strict";
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar)
            ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var ARG_LENGTH = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  };
  var SEGMENT_PATTERN = /([astvzqmhlc])([^astvzqmhlc]*)/gi;
  var NUMBER = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;
  function parseValues(args) {
    var numbers = args.match(NUMBER);
    return numbers ? numbers.map(Number) : [];
  }
  function parsePath(path) {
    var data = [];
    var p = String(path).trim();
    if (p[0] !== "M" && p[0] !== "m") {
      return data;
    }
    p.replace(SEGMENT_PATTERN, function(_, command, args) {
      var theArgs = parseValues(args);
      var type = command.toLowerCase();
      var theCommand = command;
      if (type === "m" && theArgs.length > 2) {
        data.push(__spreadArray([theCommand], theArgs.splice(0, 2), true));
        type = "l";
        theCommand = theCommand === "m" ? "l" : "L";
      }
      if (theArgs.length < ARG_LENGTH[type]) {
        return "";
      }
      data.push(__spreadArray([theCommand], theArgs.splice(0, ARG_LENGTH[type]), true));
      while (theArgs.length >= ARG_LENGTH[type] && theArgs.length && ARG_LENGTH[type]) {
        data.push(__spreadArray([theCommand], theArgs.splice(0, ARG_LENGTH[type]), true));
      }
      return "";
    });
    return data;
  }
  function rotatePoint(point, angle) {
    var nx = point.x * Math.cos(angle) - point.y * Math.sin(angle);
    var ny = point.y * Math.cos(angle) + point.x * Math.sin(angle);
    point.x = nx;
    point.y = ny;
  }
  function translatePoint(point, dx, dy) {
    point.x += dx;
    point.y += dy;
  }
  function scalePoint(point, s) {
    point.x *= s;
    point.y *= s;
  }
  var Path2D = (
    /** @class */
    function() {
      function Path2D2(path) {
        var _a;
        this.commands = [];
        if (path && path instanceof Path2D2) {
          (_a = this.commands).push.apply(_a, path.commands);
        } else if (path) {
          this.commands = parsePath(path);
        }
      }
      Path2D2.prototype.addPath = function(path) {
        var _a;
        if (path && path instanceof Path2D2) {
          (_a = this.commands).push.apply(_a, path.commands);
        }
      };
      Path2D2.prototype.moveTo = function(x, y) {
        this.commands.push(["M", x, y]);
      };
      Path2D2.prototype.lineTo = function(x, y) {
        this.commands.push(["L", x, y]);
      };
      Path2D2.prototype.arc = function(x, y, r, start, end, ccw) {
        this.commands.push(["AC", x, y, r, start, end, !!ccw]);
      };
      Path2D2.prototype.arcTo = function(x1, y1, x2, y2, r) {
        this.commands.push(["AT", x1, y1, x2, y2, r]);
      };
      Path2D2.prototype.ellipse = function(x, y, rx, ry, angle, start, end, ccw) {
        this.commands.push(["E", x, y, rx, ry, angle, start, end, !!ccw]);
      };
      Path2D2.prototype.closePath = function() {
        this.commands.push(["Z"]);
      };
      Path2D2.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
        this.commands.push(["C", cp1x, cp1y, cp2x, cp2y, x, y]);
      };
      Path2D2.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
        this.commands.push(["Q", cpx, cpy, x, y]);
      };
      Path2D2.prototype.rect = function(x, y, width, height) {
        this.commands.push(["R", x, y, width, height]);
      };
      Path2D2.prototype.roundRect = function(x, y, width, height, radii) {
        if (typeof radii === "undefined") {
          this.commands.push(["RR", x, y, width, height, 0]);
        } else {
          this.commands.push(["RR", x, y, width, height, radii]);
        }
      };
      return Path2D2;
    }()
  );
  function buildPath(ctx, commands) {
    var x = 0;
    var y = 0;
    var endAngle;
    var startAngle;
    var largeArcFlag;
    var sweepFlag;
    var endPoint;
    var midPoint;
    var angle;
    var lambda;
    var t1;
    var t2;
    var x1;
    var y1;
    var r;
    var rx;
    var ry;
    var w;
    var h;
    var pathType;
    var centerPoint;
    var ccw;
    var radii;
    var cpx = null;
    var cpy = null;
    var qcpx = null;
    var qcpy = null;
    var startPoint = null;
    var currentPoint = null;
    ctx.beginPath();
    for (var i = 0; i < commands.length; ++i) {
      pathType = commands[i][0];
      if (pathType !== "S" && pathType !== "s" && pathType !== "C" && pathType !== "c") {
        cpx = null;
        cpy = null;
      }
      if (pathType !== "T" && pathType !== "t" && pathType !== "Q" && pathType !== "q") {
        qcpx = null;
        qcpy = null;
      }
      var c = void 0;
      switch (pathType) {
        case "m":
        case "M":
          c = commands[i];
          if (pathType === "m") {
            x += c[1];
            y += c[2];
          } else {
            x = c[1];
            y = c[2];
          }
          if (pathType === "M" || !startPoint) {
            startPoint = { x, y };
          }
          ctx.moveTo(x, y);
          break;
        case "l":
          c = commands[i];
          x += c[1];
          y += c[2];
          ctx.lineTo(x, y);
          break;
        case "L":
          c = commands[i];
          x = c[1];
          y = c[2];
          ctx.lineTo(x, y);
          break;
        case "H":
          c = commands[i];
          x = c[1];
          ctx.lineTo(x, y);
          break;
        case "h":
          c = commands[i];
          x += c[1];
          ctx.lineTo(x, y);
          break;
        case "V":
          c = commands[i];
          y = c[1];
          ctx.lineTo(x, y);
          break;
        case "v":
          c = commands[i];
          y += c[1];
          ctx.lineTo(x, y);
          break;
        case "a":
        case "A":
          c = commands[i];
          if (currentPoint === null) {
            throw new Error("This should never happen");
          }
          if (pathType === "a") {
            x += c[6];
            y += c[7];
          } else {
            x = c[6];
            y = c[7];
          }
          rx = c[1];
          ry = c[2];
          angle = c[3] * Math.PI / 180;
          largeArcFlag = !!c[4];
          sweepFlag = !!c[5];
          endPoint = { x, y };
          midPoint = {
            x: (currentPoint.x - endPoint.x) / 2,
            y: (currentPoint.y - endPoint.y) / 2
          };
          rotatePoint(midPoint, -angle);
          lambda = midPoint.x * midPoint.x / (rx * rx) + midPoint.y * midPoint.y / (ry * ry);
          if (lambda > 1) {
            lambda = Math.sqrt(lambda);
            rx *= lambda;
            ry *= lambda;
          }
          centerPoint = {
            x: rx * midPoint.y / ry,
            y: -(ry * midPoint.x) / rx
          };
          t1 = rx * rx * ry * ry;
          t2 = rx * rx * midPoint.y * midPoint.y + ry * ry * midPoint.x * midPoint.x;
          if (sweepFlag !== largeArcFlag) {
            scalePoint(centerPoint, Math.sqrt((t1 - t2) / t2) || 0);
          } else {
            scalePoint(centerPoint, -Math.sqrt((t1 - t2) / t2) || 0);
          }
          startAngle = Math.atan2((midPoint.y - centerPoint.y) / ry, (midPoint.x - centerPoint.x) / rx);
          endAngle = Math.atan2(-(midPoint.y + centerPoint.y) / ry, -(midPoint.x + centerPoint.x) / rx);
          rotatePoint(centerPoint, angle);
          translatePoint(centerPoint, (endPoint.x + currentPoint.x) / 2, (endPoint.y + currentPoint.y) / 2);
          ctx.save();
          ctx.translate(centerPoint.x, centerPoint.y);
          ctx.rotate(angle);
          ctx.scale(rx, ry);
          ctx.arc(0, 0, 1, startAngle, endAngle, !sweepFlag);
          ctx.restore();
          break;
        case "C":
          c = commands[i];
          cpx = c[3];
          cpy = c[4];
          x = c[5];
          y = c[6];
          ctx.bezierCurveTo(c[1], c[2], cpx, cpy, x, y);
          break;
        case "c":
          c = commands[i];
          ctx.bezierCurveTo(c[1] + x, c[2] + y, c[3] + x, c[4] + y, c[5] + x, c[6] + y);
          cpx = c[3] + x;
          cpy = c[4] + y;
          x += c[5];
          y += c[6];
          break;
        case "S":
          c = commands[i];
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          ctx.bezierCurveTo(2 * x - cpx, 2 * y - cpy, c[1], c[2], c[3], c[4]);
          cpx = c[1];
          cpy = c[2];
          x = c[3];
          y = c[4];
          break;
        case "s":
          c = commands[i];
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          ctx.bezierCurveTo(2 * x - cpx, 2 * y - cpy, c[1] + x, c[2] + y, c[3] + x, c[4] + y);
          cpx = c[1] + x;
          cpy = c[2] + y;
          x += c[3];
          y += c[4];
          break;
        case "Q":
          c = commands[i];
          qcpx = c[1];
          qcpy = c[2];
          x = c[3];
          y = c[4];
          ctx.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "q":
          c = commands[i];
          qcpx = c[1] + x;
          qcpy = c[2] + y;
          x += c[3];
          y += c[4];
          ctx.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "T":
          c = commands[i];
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          qcpx = 2 * x - qcpx;
          qcpy = 2 * y - qcpy;
          x = c[1];
          y = c[2];
          ctx.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "t":
          c = commands[i];
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          qcpx = 2 * x - qcpx;
          qcpy = 2 * y - qcpy;
          x += c[1];
          y += c[2];
          ctx.quadraticCurveTo(qcpx, qcpy, x, y);
          break;
        case "z":
        case "Z":
          if (startPoint) {
            x = startPoint.x;
            y = startPoint.y;
          }
          startPoint = null;
          ctx.closePath();
          break;
        case "AC":
          c = commands[i];
          x = c[1];
          y = c[2];
          r = c[3];
          startAngle = c[4];
          endAngle = c[5];
          ccw = c[6];
          ctx.arc(x, y, r, startAngle, endAngle, ccw);
          break;
        case "AT":
          c = commands[i];
          x1 = c[1];
          y1 = c[2];
          x = c[3];
          y = c[4];
          r = c[5];
          ctx.arcTo(x1, y1, x, y, r);
          break;
        case "E":
          c = commands[i];
          x = c[1];
          y = c[2];
          rx = c[3];
          ry = c[4];
          angle = c[5];
          startAngle = c[6];
          endAngle = c[7];
          ccw = c[8];
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          ctx.scale(rx, ry);
          ctx.arc(0, 0, 1, startAngle, endAngle, ccw);
          ctx.restore();
          break;
        case "R":
          c = commands[i];
          x = c[1];
          y = c[2];
          w = c[3];
          h = c[4];
          startPoint = { x, y };
          ctx.rect(x, y, w, h);
          break;
        case "RR":
          c = commands[i];
          x = c[1];
          y = c[2];
          w = c[3];
          h = c[4];
          radii = c[5];
          startPoint = { x, y };
          ctx.roundRect(x, y, w, h, radii);
          break;
      }
      if (!currentPoint) {
        currentPoint = { x, y };
      } else {
        currentPoint.x = x;
        currentPoint.y = y;
      }
    }
  }
  function polyfillPath2D(window2) {
    if (!window2 || !window2.CanvasRenderingContext2D || window2.Path2D)
      return;
    var CanvasRenderingContext2D = window2.CanvasRenderingContext2D;
    var cFill = CanvasRenderingContext2D.prototype.fill;
    var cStroke = CanvasRenderingContext2D.prototype.stroke;
    var cIsPointInPath = CanvasRenderingContext2D.prototype.isPointInPath;
    CanvasRenderingContext2D.prototype.fill = function fill() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (args[0] instanceof Path2D) {
        var path = args[0];
        var fillRule = args[1] || "nonzero";
        buildPath(this, path.commands);
        cFill.apply(this, [fillRule]);
      } else {
        var fillRule = args[0] || "nonzero";
        return cFill.apply(this, [fillRule]);
      }
    };
    CanvasRenderingContext2D.prototype.stroke = function stroke(path) {
      if (path) {
        buildPath(this, path.commands);
      }
      cStroke.apply(this);
    };
    CanvasRenderingContext2D.prototype.isPointInPath = function isPointInPath() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      if (args[0] instanceof Path2D) {
        var path = args[0];
        var x = args[1];
        var y = args[2];
        var fillRule = args[3] || "nonzero";
        buildPath(this, path.commands);
        return cIsPointInPath.apply(this, [x, y, fillRule]);
      } else {
        return cIsPointInPath.apply(this, args);
      }
    };
    window2.Path2D = Path2D;
  }
  function roundRect(x, y, width, height, radii) {
    var _this = this;
    if (radii === void 0) {
      radii = 0;
    }
    if (typeof radii === "number") {
      radii = [radii];
    }
    if (Array.isArray(radii)) {
      if (radii.length === 0 || radii.length > 4) {
        throw new RangeError("Failed to execute 'roundRect' on '".concat(this.constructor.name, "': ").concat(radii.length, " radii provided. Between one and four radii are necessary."));
      }
      radii.forEach(function(v) {
        if (v < 0) {
          throw new RangeError("Failed to execute 'roundRect' on '".concat(_this.constructor.name, "': Radius value ").concat(v, " is negative."));
        }
      });
    } else {
      return;
    }
    if (radii.length === 1 && radii[0] === 0) {
      return this.rect(x, y, width, height);
    }
    var minRadius = Math.min(width, height) / 2;
    var tr, br, bl;
    var tl = tr = br = bl = Math.min(minRadius, radii[0]);
    if (radii.length === 2) {
      tr = bl = Math.min(minRadius, radii[1]);
    }
    if (radii.length === 3) {
      tr = bl = Math.min(minRadius, radii[1]);
      br = Math.min(minRadius, radii[2]);
    }
    if (radii.length === 4) {
      tr = Math.min(minRadius, radii[1]);
      br = Math.min(minRadius, radii[2]);
      bl = Math.min(minRadius, radii[3]);
    }
    this.moveTo(x, y + height - bl);
    this.arcTo(x, y, x + tl, y, tl);
    this.arcTo(x + width, y, x + width, y + tr, tr);
    this.arcTo(x + width, y + height, x + width - br, y + height, br);
    this.arcTo(x, y + height, x, y + height - bl, bl);
    this.moveTo(x, y);
  }
  function polyfillRoundRect(window2) {
    if (!window2 || !window2.CanvasRenderingContext2D)
      return;
    var CanvasRenderingContext2D = window2.CanvasRenderingContext2D, Path2D2 = window2.Path2D;
    if (CanvasRenderingContext2D && !CanvasRenderingContext2D.prototype.roundRect) {
      CanvasRenderingContext2D.prototype.roundRect = roundRect;
    }
    if (Path2D2 && !Path2D2.prototype.roundRect) {
      Path2D2.prototype.roundRect = roundRect;
    }
  }
  polyfillPath2D(window);
  polyfillRoundRect(window);
})();
//# sourceMappingURL=path2d-polyfill.js.map
