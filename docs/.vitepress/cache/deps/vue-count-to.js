import {
  __commonJS
} from "./chunk-5WWUZCGV.js";

// node_modules/vue-count-to/dist/vue-count-to.min.js
var require_vue_count_to_min = __commonJS({
  "node_modules/vue-count-to/dist/vue-count-to.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("CountTo", [], e) : "object" == typeof exports ? exports.CountTo = e() : t.CountTo = e();
    }(exports, function() {
      return function(t) {
        function e(n) {
          if (i[n])
            return i[n].exports;
          var a = i[n] = { i: n, l: false, exports: {} };
          return t[n].call(a.exports, a, a.exports, e), a.l = true, a.exports;
        }
        var i = {};
        return e.m = t, e.c = i, e.i = function(t2) {
          return t2;
        }, e.d = function(t2, i2, n) {
          e.o(t2, i2) || Object.defineProperty(t2, i2, { configurable: false, enumerable: true, get: n });
        }, e.n = function(t2) {
          var i2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return e.d(i2, "a", i2), i2;
        }, e.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, e.p = "/dist/", e(e.s = 2);
      }([function(t, e, i) {
        var n = i(4)(i(1), i(5), null, null);
        t.exports = n.exports;
      }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var n = i(3);
        e.default = { props: { startVal: { type: Number, required: false, default: 0 }, endVal: { type: Number, required: false, default: 2017 }, duration: { type: Number, required: false, default: 3e3 }, autoplay: { type: Boolean, required: false, default: true }, decimals: { type: Number, required: false, default: 0, validator: function(t2) {
          return t2 >= 0;
        } }, decimal: { type: String, required: false, default: "." }, separator: { type: String, required: false, default: "," }, prefix: { type: String, required: false, default: "" }, suffix: { type: String, required: false, default: "" }, useEasing: { type: Boolean, required: false, default: true }, easingFn: { type: Function, default: function(t2, e2, i2, n2) {
          return i2 * (1 - Math.pow(2, -10 * t2 / n2)) * 1024 / 1023 + e2;
        } } }, data: function() {
          return { localStartVal: this.startVal, displayValue: this.formatNumber(this.startVal), printVal: null, paused: false, localDuration: this.duration, startTime: null, timestamp: null, remaining: null, rAF: null };
        }, computed: { countDown: function() {
          return this.startVal > this.endVal;
        } }, watch: { startVal: function() {
          this.autoplay && this.start();
        }, endVal: function() {
          this.autoplay && this.start();
        } }, mounted: function() {
          this.autoplay && this.start(), this.$emit("mountedCallback");
        }, methods: { start: function() {
          this.localStartVal = this.startVal, this.startTime = null, this.localDuration = this.duration, this.paused = false, this.rAF = (0, n.requestAnimationFrame)(this.count);
        }, pauseResume: function() {
          this.paused ? (this.resume(), this.paused = false) : (this.pause(), this.paused = true);
        }, pause: function() {
          (0, n.cancelAnimationFrame)(this.rAF);
        }, resume: function() {
          this.startTime = null, this.localDuration = +this.remaining, this.localStartVal = +this.printVal, (0, n.requestAnimationFrame)(this.count);
        }, reset: function() {
          this.startTime = null, (0, n.cancelAnimationFrame)(this.rAF), this.displayValue = this.formatNumber(this.startVal);
        }, count: function(t2) {
          this.startTime || (this.startTime = t2), this.timestamp = t2;
          var e2 = t2 - this.startTime;
          this.remaining = this.localDuration - e2, this.useEasing ? this.countDown ? this.printVal = this.localStartVal - this.easingFn(e2, 0, this.localStartVal - this.endVal, this.localDuration) : this.printVal = this.easingFn(e2, this.localStartVal, this.endVal - this.localStartVal, this.localDuration) : this.countDown ? this.printVal = this.localStartVal - (this.localStartVal - this.endVal) * (e2 / this.localDuration) : this.printVal = this.localStartVal + (this.localStartVal - this.startVal) * (e2 / this.localDuration), this.countDown ? this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal : this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal, this.displayValue = this.formatNumber(this.printVal), e2 < this.localDuration ? this.rAF = (0, n.requestAnimationFrame)(this.count) : this.$emit("callback");
        }, isNumber: function(t2) {
          return !isNaN(parseFloat(t2));
        }, formatNumber: function(t2) {
          t2 = t2.toFixed(this.decimals), t2 += "";
          var e2 = t2.split("."), i2 = e2[0], n2 = e2.length > 1 ? this.decimal + e2[1] : "", a = /(\d+)(\d{3})/;
          if (this.separator && !this.isNumber(this.separator))
            for (; a.test(i2); )
              i2 = i2.replace(a, "$1" + this.separator + "$2");
          return this.prefix + i2 + n2 + this.suffix;
        } }, destroyed: function() {
          (0, n.cancelAnimationFrame)(this.rAF);
        } };
      }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var n = i(0), a = function(t2) {
          return t2 && t2.__esModule ? t2 : { default: t2 };
        }(n);
        e.default = a.default, "undefined" != typeof window && window.Vue && window.Vue.component("count-to", a.default);
      }, function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var n = 0, a = "webkit moz ms o".split(" "), r = void 0, o = void 0;
        if ("undefined" == typeof window)
          e.requestAnimationFrame = r = function() {
          }, e.cancelAnimationFrame = o = function() {
          };
        else {
          e.requestAnimationFrame = r = window.requestAnimationFrame, e.cancelAnimationFrame = o = window.cancelAnimationFrame;
          for (var s = void 0, u = 0; u < a.length && (!r || !o); u++)
            s = a[u], e.requestAnimationFrame = r = r || window[s + "RequestAnimationFrame"], e.cancelAnimationFrame = o = o || window[s + "CancelAnimationFrame"] || window[s + "CancelRequestAnimationFrame"];
          r && o || (e.requestAnimationFrame = r = function(t2) {
            var e2 = (/* @__PURE__ */ new Date()).getTime(), i2 = Math.max(0, 16 - (e2 - n)), a2 = window.setTimeout(function() {
              t2(e2 + i2);
            }, i2);
            return n = e2 + i2, a2;
          }, e.cancelAnimationFrame = o = function(t2) {
            window.clearTimeout(t2);
          });
        }
        e.requestAnimationFrame = r, e.cancelAnimationFrame = o;
      }, function(t, e) {
        t.exports = function(t2, e2, i, n) {
          var a, r = t2 = t2 || {}, o = typeof t2.default;
          "object" !== o && "function" !== o || (a = t2, r = t2.default);
          var s = "function" == typeof r ? r.options : r;
          if (e2 && (s.render = e2.render, s.staticRenderFns = e2.staticRenderFns), i && (s._scopeId = i), n) {
            var u = Object.create(s.computed || null);
            Object.keys(n).forEach(function(t3) {
              var e3 = n[t3];
              u[t3] = function() {
                return e3;
              };
            }), s.computed = u;
          }
          return { esModule: a, exports: r, options: s };
        };
      }, function(t, e) {
        t.exports = { render: function() {
          var t2 = this, e2 = t2.$createElement;
          return (t2._self._c || e2)("span", [t2._v("\n  " + t2._s(t2.displayValue) + "\n")]);
        }, staticRenderFns: [] };
      }]);
    });
  }
});
export default require_vue_count_to_min();
//# sourceMappingURL=vue-count-to.js.map
