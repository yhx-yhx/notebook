import {
  EVENT,
  FMP4Remuxer,
  Logger,
  MP4Demuxer,
  MP4Parser,
  MSE,
  NetLoader,
  concatUint8Array
} from "./chunk-AA3UUEYT.js";
import {
  BasePlugin,
  Errors,
  events_exports,
  require_eventemitter3,
  sniffer
} from "./chunk-5Y5CA5XL.js";
import {
  __commonJS,
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/concat-typed-array/lib/concat.js
var require_concat = __commonJS({
  "node_modules/concat-typed-array/lib/concat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = function(ResultConstructor) {
      var totalLength = 0;
      for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        arrays[_key - 1] = arguments[_key];
      }
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = void 0;
      try {
        for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var arr = _step.value;
          totalLength += arr.length;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
      var result = new ResultConstructor(totalLength);
      var offset = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = void 0;
      try {
        for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _arr = _step2.value;
          result.set(_arr, offset);
          offset += _arr.length;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
      return result;
    };
  }
});

// node_modules/concat-typed-array/lib/index.js
var require_lib = __commonJS({
  "node_modules/concat-typed-array/lib/index.js"(exports, module) {
    "use strict";
    var _concat = require_concat();
    var _concat2 = _interopRequireDefault(_concat);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    module.exports = _concat2.default;
  }
});

// node_modules/xgplayer-mp4/es/_virtual/_rollupPluginBabelHelpers.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve, reject);
        }, function(err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method)
          throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
            continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method)
      return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod)
        return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next)
        return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          for (; ++i < iterable.length; )
            if (hasOwn.call(iterable, i))
              return next2.value = iterable[i], next2.done = false, next2;
          return next2.value = void 0, next2.done = true, next2;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: void 0,
      done: true
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function(arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports.keys = function(val) {
    var object = Object(val), keys = [];
    for (var key in object)
      keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length; ) {
        var key2 = keys.pop();
        if (key2 in object)
          return next.value = key2, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    },
    stop: function() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName,
        nextLoc
      }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/xgplayer-mp4/es/mp4.js
var import_eventemitter33 = __toESM(require_eventemitter3());
var import_concat_typed_array = __toESM(require_lib());

// node_modules/xgplayer-mp4/es/version.js
var version = "3.0.7";

// node_modules/xgplayer-mp4/es/error.js
var ERROR_CODES = {
  416: -499899,
  401: -499898,
  403: -499897,
  404: -499896,
  timeout: -499895,
  "4xx": -499894,
  "5xx": -499893,
  networkError: -499892,
  contentError: -499891,
  mse: -499971,
  mseOpen: -499972,
  mseAppend: -499973,
  boxsError: -499980,
  moovError: -499981,
  notH264: -499982,
  mdatError: -499983,
  mdhdError: -499984,
  metaError: -499985,
  muxError: -499986,
  h265Error: -499987,
  noneURL: -499988,
  other: -499989,
  other1: -499990,
  waitTimeout: -499791,
  onWaitInBufferRange: -499792
};
var ERROR_TYPES = {
  network: 1003,
  format: 1005,
  runtime: 1002,
  other: 9999,
  demux: 1006,
  remux: 1007
};
var NetWorkError = _createClass(function NetWorkError2(type, httpCode, context) {
  _classCallCheck(this, NetWorkError2);
  var rangeStart = 0;
  var rangeEnd = 0;
  if (context && context.range && context.range.length > 1) {
    rangeStart = context.range[0];
    rangeEnd = context.range[1];
  }
  return {
    errorCode: httpCode,
    errorType: type,
    errorTypeCode: ERROR_TYPES[type],
    errorMessage: (context === null || context === void 0 ? void 0 : context.httpText) || (context === null || context === void 0 ? void 0 : context.message),
    url: context === null || context === void 0 ? void 0 : context.url,
    httpCode,
    version,
    rangeStart,
    rangeEnd,
    ext: context,
    mediaError: {
      code: httpCode,
      message: (context === null || context === void 0 ? void 0 : context.httpText) || (context === null || context === void 0 ? void 0 : context.message)
    }
  };
});
var ParserError = _createClass(function ParserError2(type, errorCode, ext) {
  _classCallCheck(this, ParserError2);
  return {
    errorCode,
    errorType: type,
    errorTypeCode: ERROR_TYPES[type],
    version,
    errorMessage: ext.msg,
    ext,
    mediaError: {
      code: errorCode,
      message: ext.msg
    }
  };
});

// node_modules/xgplayer-mp4/es/util/index.js
var util = {};
util.nowTime = function() {
  try {
    return parseInt(performance.now(), 10);
  } catch (e) {
    return (/* @__PURE__ */ new Date()).getTime();
  }
};
util.concatData = function(video, audio) {
  var resBuffers = [];
  var bufferSize = 0;
  if (video) {
    resBuffers.push(video);
  }
  if (audio) {
    resBuffers.push(audio);
  }
  resBuffers.every(function(item) {
    item && (bufferSize += item.byteLength);
    return true;
  });
  var buffer = new Uint8Array(bufferSize);
  var offset = 0;
  resBuffers.every(function(item) {
    if (item) {
      buffer.set(item, offset);
      offset += item.byteLength;
    }
    return true;
  });
  return buffer;
};

// node_modules/xgplayer-mp4-loader/es/_virtual/_rollupPluginBabelHelpers.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread22(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), true).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _regeneratorRuntime2() {
  _regeneratorRuntime2 = function() {
    return exports;
  };
  var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function(obj, key, desc) {
    obj[key] = desc.value;
  }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {
  }
  function GeneratorFunction() {
  }
  function GeneratorFunctionPrototype() {
  }
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function() {
    return this;
  });
  var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg, value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function(value2) {
          invoke("next", value2, resolve, reject);
        }, function(err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function(resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function(method, arg) {
      if ("executing" === state)
        throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method)
          throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg; ; ) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel)
              continue;
            return delegateResult;
          }
        }
        if ("next" === context.method)
          context.sent = context._sent = context.arg;
        else if ("throw" === context.method) {
          if ("suspendedStart" === state)
            throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else
          "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel)
            continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method, method = delegate.iterator[methodName];
    if (void 0 === method)
      return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = void 0, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type)
      return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = void 0), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(true);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod)
        return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next)
        return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next2() {
          for (; ++i < iterable.length; )
            if (hasOwn.call(iterable, i))
              return next2.value = iterable[i], next2.done = false, next2;
          return next2.value = void 0, next2.done = true, next2;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: void 0,
      done: true
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: true
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: true
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function(genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function(genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function(arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function() {
    return this;
  }), define(Gp, "toString", function() {
    return "[object Generator]";
  }), exports.keys = function(val) {
    var object = Object(val), keys = [];
    for (var key in object)
      keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length; ) {
        var key2 = keys.pop();
        if (key2 in object)
          return next.value = key2, next.done = false, next;
      }
      return next.done = true, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = false, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !skipTempReset)
        for (var name in this)
          "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = void 0);
    },
    stop: function() {
      this.done = true;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type)
        throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done)
        throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = void 0), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i], record = entry.completion;
        if ("root" === entry.tryLoc)
          return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc)
              return handle(entry.catchLoc, true);
          } else {
            if (!hasFinally)
              throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc)
              return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function(record, afterLoc) {
      if ("throw" === record.type)
        throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc)
          return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName,
        nextLoc
      }, "next" === this.method && (this.arg = void 0), ContinueSentinel;
    }
  }, exports;
}
function asyncGeneratorStep2(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator2(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep2(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties2(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties2(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _inherits2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf2(subClass, superClass);
}
function _getPrototypeOf2(o) {
  _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf2(o);
}
function _setPrototypeOf2(o, p) {
  _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf2(o, p);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn2(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized2(self);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn2(this, result);
  };
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive2(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

// node_modules/xgplayer-mp4-loader/es/config.js
function getConfig(cfg) {
  return _objectSpread22({
    vid: "",
    moovEnd: 8e4,
    segmentDuration: 2,
    maxDownloadInfoSize: 30,
    responseType: "arraybuffer",
    cache: null
  }, cfg);
}

// node_modules/xgplayer-mp4-loader/es/error.js
var MediaError = _createClass2(function MediaError2(msg, data) {
  _classCallCheck2(this, MediaError2);
  this.type = "file";
  this.message = msg;
  this.data = data;
});

// node_modules/xgplayer-mp4-loader/es/cache.js
var Cache = function() {
  function Cache2() {
    _classCallCheck2(this, Cache2);
    _defineProperty2(this, "_data", /* @__PURE__ */ Object.create(null));
  }
  _createClass2(Cache2, [{
    key: "set",
    value: function set(id, data) {
      this._data[id] = data;
    }
  }, {
    key: "get",
    value: function get(id) {
      return this._data[id];
    }
  }, {
    key: "clear",
    value: function clear() {
      this._data = /* @__PURE__ */ Object.create(null);
    }
  }]);
  return Cache2;
}();

// node_modules/xgplayer-mp4-loader/es/utils.js
function moovToSegments(moov, duration) {
  var tracks = moov.trak;
  if (!tracks || !tracks.length)
    return;
  var videoTrack = tracks.find(function(t) {
    var _t$mdia, _t$mdia$hdlr;
    return ((_t$mdia = t.mdia) === null || _t$mdia === void 0 ? void 0 : (_t$mdia$hdlr = _t$mdia.hdlr) === null || _t$mdia$hdlr === void 0 ? void 0 : _t$mdia$hdlr.handlerType) === "vide";
  });
  var audioTrack = tracks.find(function(t) {
    var _t$mdia2, _t$mdia2$hdlr;
    return ((_t$mdia2 = t.mdia) === null || _t$mdia2 === void 0 ? void 0 : (_t$mdia2$hdlr = _t$mdia2.hdlr) === null || _t$mdia2$hdlr === void 0 ? void 0 : _t$mdia2$hdlr.handlerType) === "soun";
  });
  if (!videoTrack && !audioTrack)
    return;
  var videoSegments = [];
  var audioSegments = [];
  var segmentDurations;
  if (videoTrack) {
    var _videoTrack$mdia, _videoTrack$mdia$minf, _videoTrack$mdia$mdhd;
    var videoStbl = (_videoTrack$mdia = videoTrack.mdia) === null || _videoTrack$mdia === void 0 ? void 0 : (_videoTrack$mdia$minf = _videoTrack$mdia.minf) === null || _videoTrack$mdia$minf === void 0 ? void 0 : _videoTrack$mdia$minf.stbl;
    if (!videoStbl)
      return;
    var timescale = (_videoTrack$mdia$mdhd = videoTrack.mdia.mdhd) === null || _videoTrack$mdia$mdhd === void 0 ? void 0 : _videoTrack$mdia$mdhd.timescale;
    var stts = videoStbl.stts, stsc = videoStbl.stsc, stsz = videoStbl.stsz, stco = videoStbl.stco, stss = videoStbl.stss, ctts = videoStbl.ctts;
    if (!timescale || !stts || !stsc || !stsz || !stco || !stss)
      return;
    videoSegments = getSegments(duration, timescale, stts, stsc, stsz, stco, stss, ctts);
    segmentDurations = videoSegments.map(function(x) {
      return x.duration;
    });
  }
  if (audioTrack) {
    var _audioTrack$mdia, _audioTrack$mdia$minf, _audioTrack$mdia$mdhd;
    var audioStbl = (_audioTrack$mdia = audioTrack.mdia) === null || _audioTrack$mdia === void 0 ? void 0 : (_audioTrack$mdia$minf = _audioTrack$mdia.minf) === null || _audioTrack$mdia$minf === void 0 ? void 0 : _audioTrack$mdia$minf.stbl;
    if (!audioStbl)
      return;
    var _timescale = (_audioTrack$mdia$mdhd = audioTrack.mdia.mdhd) === null || _audioTrack$mdia$mdhd === void 0 ? void 0 : _audioTrack$mdia$mdhd.timescale;
    var _stts = audioStbl.stts, _stsc = audioStbl.stsc, _stsz = audioStbl.stsz, _stco = audioStbl.stco;
    if (!_timescale || !_stts || !_stsc || !_stsz || !_stco)
      return;
    audioSegments = getSegments(duration, _timescale, _stts, _stsc, _stsz, _stco, null, null, segmentDurations);
  }
  return {
    videoSegments,
    audioSegments
  };
}
function getSegments(segDuration, timescale, stts, stsc, stsz, stco, stss, ctts, segmentDurations) {
  var frames = [];
  var gop = [];
  var gopDuration = [];
  var stscEntries = stsc.entries;
  var stcoEntries = stco.entries;
  var stszEntrySizes = stsz.entrySizes;
  var stssEntries = stss === null || stss === void 0 ? void 0 : stss.entries;
  var cttsEntries = ctts === null || ctts === void 0 ? void 0 : ctts.entries;
  var cttsArr;
  if (cttsEntries) {
    cttsArr = [];
    cttsEntries.forEach(function(_ref) {
      var count = _ref.count, offset = _ref.offset;
      for (var i2 = 0; i2 < count; i2++) {
        cttsArr.push(offset);
      }
    });
  }
  var keyframeMap;
  if (stssEntries) {
    keyframeMap = {};
    stssEntries.forEach(function(x) {
      keyframeMap[x - 1] = true;
    });
  }
  var frame;
  var duration;
  var startTime = 0;
  var pos = 0;
  var chunkIndex = 0;
  var chunkRunIndex = 0;
  var offsetInChunk = 0;
  var lastSampleInChunk = stscEntries[0].samplesPerChunk;
  var lastChunkInRun = stscEntries[1] ? stscEntries[1].firstChunk - 1 : Infinity;
  var dts = 0;
  var gopId = -1;
  stts.entries.forEach(function(_ref2) {
    var count = _ref2.count, delta = _ref2.delta;
    duration = delta;
    for (var i2 = 0; i2 < count; i2++) {
      frame = {
        dts,
        startTime,
        duration,
        size: stszEntrySizes[pos] || stsz.sampleSize,
        offset: stcoEntries[chunkIndex] + offsetInChunk,
        index: pos
      };
      if (stssEntries) {
        frame.keyframe = keyframeMap[pos];
        if (frame.keyframe) {
          gopId++;
          gop.push([frame]);
          gopDuration.push(frame.duration);
        } else {
          gop[gop.length - 1].push(frame);
          gopDuration[gop.length - 1] += frame.duration;
        }
        frame.gopId = gopId;
      }
      if (cttsArr && pos < cttsArr.length) {
        frame.pts = dts + cttsArr[pos];
      }
      if (pos === 0) {
        frame.pts = 0;
      }
      frames.push(frame);
      startTime += duration;
      dts += delta;
      pos++;
      if (pos < lastSampleInChunk) {
        offsetInChunk += frame.size;
      } else {
        chunkIndex++;
        offsetInChunk = 0;
        if (chunkIndex >= lastChunkInRun) {
          chunkRunIndex++;
          lastChunkInRun = stscEntries[chunkRunIndex + 1] ? stscEntries[chunkRunIndex + 1].firstChunk - 1 : Infinity;
        }
        lastSampleInChunk += stscEntries[chunkRunIndex].samplesPerChunk;
      }
    }
  });
  var l = frames.length;
  if (!l || stss && !frames[0].keyframe)
    return;
  var segments = [];
  var segFrames = [];
  var time = 0;
  var lastFrame;
  var adjust = 0;
  var pushSegment = function pushSegment2(duration2) {
    var _segments;
    lastFrame = segFrames[segFrames.length - 1];
    segments.push({
      index: segments.length,
      startTime: ((_segments = segments[segments.length - 1]) === null || _segments === void 0 ? void 0 : _segments.endTime) || segFrames[0].startTime / timescale,
      endTime: (lastFrame.startTime + lastFrame.duration) / timescale,
      duration: duration2,
      range: [segFrames[0].offset, lastFrame.offset + lastFrame.size],
      frames: segFrames
    });
    time = 0;
    segFrames = [];
  };
  if (stss) {
    var _duration = segDuration * timescale;
    for (var i = 0, _l = gop.length; i < _l; i++) {
      var _segFrames;
      time += gopDuration[i];
      (_segFrames = segFrames).push.apply(_segFrames, _toConsumableArray(gop[i]));
      if (i + 1 < _l) {
        if (i === 0 || time > _duration) {
          pushSegment(time / timescale);
        }
      } else {
        pushSegment(time / timescale);
      }
    }
  } else {
    segmentDurations = segmentDurations || [];
    var _duration2 = segmentDurations[0] || segDuration;
    for (var _i = 0; _i < l; _i++) {
      segFrames.push(frames[_i]);
      time += frames[_i].duration;
      var curTime = time / timescale;
      if (_i + 1 >= l || curTime + adjust >= _duration2) {
        adjust += curTime - _duration2;
        pushSegment(curTime);
        _duration2 = segmentDurations[segments.length] || segDuration;
      }
    }
  }
  return segments;
}
function moovToMeta(moov) {
  var videoCodec = "";
  var audioCodec = "";
  var width = 0;
  var height = 0;
  var audioChannelCount = 0;
  var audioSampleRate = 0;
  var duration = 0;
  var videoTimescale = 0;
  var audioTimescale = 0;
  if (moov.mvhd) {
    duration = moov.mvhd.duration / moov.mvhd.timescale;
  }
  var tracks = moov.trak;
  if (tracks) {
    var videoTrack = tracks.find(function(t) {
      var _t$mdia3, _t$mdia3$hdlr;
      return ((_t$mdia3 = t.mdia) === null || _t$mdia3 === void 0 ? void 0 : (_t$mdia3$hdlr = _t$mdia3.hdlr) === null || _t$mdia3$hdlr === void 0 ? void 0 : _t$mdia3$hdlr.handlerType) === "vide";
    });
    var audioTrack = tracks.find(function(t) {
      var _t$mdia4, _t$mdia4$hdlr;
      return ((_t$mdia4 = t.mdia) === null || _t$mdia4 === void 0 ? void 0 : (_t$mdia4$hdlr = _t$mdia4.hdlr) === null || _t$mdia4$hdlr === void 0 ? void 0 : _t$mdia4$hdlr.handlerType) === "soun";
    });
    var e1 = null;
    var defaultKID;
    if (videoTrack) {
      var _videoTrack$mdia2, _videoTrack$mdia2$min, _videoTrack$mdia2$min2;
      e1 = (_videoTrack$mdia2 = videoTrack.mdia) === null || _videoTrack$mdia2 === void 0 ? void 0 : (_videoTrack$mdia2$min = _videoTrack$mdia2.minf) === null || _videoTrack$mdia2$min === void 0 ? void 0 : (_videoTrack$mdia2$min2 = _videoTrack$mdia2$min.stbl) === null || _videoTrack$mdia2$min2 === void 0 ? void 0 : _videoTrack$mdia2$min2.stsd.entries[0];
      if (e1) {
        var _videoTrack$mdia3, _videoTrack$mdia3$mdh, _ref3;
        width = e1.width;
        height = e1.height;
        videoTimescale = (_videoTrack$mdia3 = videoTrack.mdia) === null || _videoTrack$mdia3 === void 0 ? void 0 : (_videoTrack$mdia3$mdh = _videoTrack$mdia3.mdhd) === null || _videoTrack$mdia3$mdh === void 0 ? void 0 : _videoTrack$mdia3$mdh.timescale;
        videoCodec = (_ref3 = e1.avcC || e1.hvcC) === null || _ref3 === void 0 ? void 0 : _ref3.codec;
        if (e1.type === "encv") {
          var _e1$sinf, _e1$sinf$schi;
          defaultKID = (_e1$sinf = e1.sinf) === null || _e1$sinf === void 0 ? void 0 : (_e1$sinf$schi = _e1$sinf.schi) === null || _e1$sinf$schi === void 0 ? void 0 : _e1$sinf$schi.tenc.default_KID;
        }
      }
    }
    if (audioTrack) {
      var _audioTrack$mdia2, _audioTrack$mdia2$min, _audioTrack$mdia2$min2;
      e1 = (_audioTrack$mdia2 = audioTrack.mdia) === null || _audioTrack$mdia2 === void 0 ? void 0 : (_audioTrack$mdia2$min = _audioTrack$mdia2.minf) === null || _audioTrack$mdia2$min === void 0 ? void 0 : (_audioTrack$mdia2$min2 = _audioTrack$mdia2$min.stbl) === null || _audioTrack$mdia2$min2 === void 0 ? void 0 : _audioTrack$mdia2$min2.stsd.entries[0];
      if (e1) {
        var _e1$esds, _audioTrack$mdia3, _audioTrack$mdia3$mdh;
        audioChannelCount = e1.channelCount;
        audioSampleRate = e1.sampleRate;
        audioCodec = (_e1$esds = e1.esds) === null || _e1$esds === void 0 ? void 0 : _e1$esds.codec;
        audioTimescale = (_audioTrack$mdia3 = audioTrack.mdia) === null || _audioTrack$mdia3 === void 0 ? void 0 : (_audioTrack$mdia3$mdh = _audioTrack$mdia3.mdhd) === null || _audioTrack$mdia3$mdh === void 0 ? void 0 : _audioTrack$mdia3$mdh.timescale;
        if (e1.type === "enca") {
          var _e1$sinf2, _e1$sinf2$schi;
          defaultKID = defaultKID || ((_e1$sinf2 = e1.sinf) === null || _e1$sinf2 === void 0 ? void 0 : (_e1$sinf2$schi = _e1$sinf2.schi) === null || _e1$sinf2$schi === void 0 ? void 0 : _e1$sinf2$schi.tenc.default_KID);
        }
      }
    }
    return {
      kid: defaultKID ? defaultKID.join("") : null,
      videoCodec,
      audioCodec,
      width,
      height,
      videoTimescale,
      audioChannelCount,
      audioSampleRate,
      duration,
      audioTimescale,
      moov
    };
  }
}
function isNumber(n) {
  return typeof n === "number" && !Number.isNaN(n);
}

// node_modules/xgplayer-mp4-loader/es/loader.js
var import_eventemitter3 = __toESM(require_eventemitter3());
var _excluded = ["vid", "cache"];
var MP4Loader = function(_EventEmitter) {
  _inherits2(MP4Loader2, _EventEmitter);
  var _super = _createSuper2(MP4Loader2);
  function MP4Loader2(config) {
    var _this;
    _classCallCheck2(this, MP4Loader2);
    _this = _super.call(this);
    _defineProperty2(_assertThisInitialized2(_this), "vid", "");
    _defineProperty2(_assertThisInitialized2(_this), "url", "");
    _defineProperty2(_assertThisInitialized2(_this), "meta", {});
    _defineProperty2(_assertThisInitialized2(_this), "downloadInfo", []);
    _defineProperty2(_assertThisInitialized2(_this), "videoSegments", []);
    _defineProperty2(_assertThisInitialized2(_this), "audioSegments", []);
    _defineProperty2(_assertThisInitialized2(_this), "cache", null);
    _defineProperty2(_assertThisInitialized2(_this), "_currentSegmentIndex", -1);
    _defineProperty2(_assertThisInitialized2(_this), "_currentLoadingSegmentIndex", -1);
    _defineProperty2(_assertThisInitialized2(_this), "buffer", void 0);
    _defineProperty2(_assertThisInitialized2(_this), "_error", void 0);
    _defineProperty2(_assertThisInitialized2(_this), "_transformError", function(error) {
      return error;
    });
    _this._config = getConfig(config);
    var _this$_config = _this._config, vid = _this$_config.vid, cache = _this$_config.cache, rest = _objectWithoutProperties(_this$_config, _excluded);
    _this.cache = cache || new Cache();
    _this.vid = vid || rest.url;
    _this.url = rest.url;
    rest.transformError = _this._transformError;
    _this.logger = new Logger("MP4Loader_" + _this.vid);
    !!config.openLog && Logger.enable();
    rest.logger = _this.logger;
    _this._loader = new NetLoader(rest);
    _this._loader.on(EVENT.REAL_TIME_SPEED, function(data) {
      _this.emit(EVENT.REAL_TIME_SPEED, data);
    });
    return _this;
  }
  _createClass2(MP4Loader2, [{
    key: "isMetaLoaded",
    get: function get() {
      return this.videoSegments.length || this.audioSegments.length;
    }
  }, {
    key: "setCurrentSegment",
    value: function setCurrentSegment(segIndex) {
      if (isNumber(segIndex)) {
        this._currentSegmentIndex = segIndex;
      }
    }
  }, {
    key: "isLastSegment",
    value: function isLastSegment(segIndex) {
      if (isNumber(segIndex)) {
        var _this$videoSegments, _this$audioSegments;
        var lastIndex = ((_this$videoSegments = this.videoSegments[this.videoSegments.length - 1]) === null || _this$videoSegments === void 0 ? void 0 : _this$videoSegments.index) || ((_this$audioSegments = this.audioSegments[this.audioSegments.length - 1]) === null || _this$audioSegments === void 0 ? void 0 : _this$audioSegments.index) || 0;
        return segIndex >= lastIndex;
      }
      return false;
    }
  }, {
    key: "isSegmentLoading",
    value: function isSegmentLoading(segIndex) {
      return segIndex === this._currentLoadingSegmentIndex;
    }
  }, {
    key: "changeUrl",
    value: function() {
      var _changeUrl = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee(url) {
        var vid, moovEnd, notCancelLoader, _args = arguments;
        return _regeneratorRuntime2().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                vid = _args.length > 1 && _args[1] !== void 0 ? _args[1] : url;
                moovEnd = _args.length > 2 ? _args[2] : void 0;
                notCancelLoader = _args.length > 3 ? _args[3] : void 0;
                _context.next = 5;
                return this.reset(notCancelLoader);
              case 5:
                if (url)
                  this.url = url;
                if (vid)
                  this.vid = vid;
                if (moovEnd)
                  this._config.moovEnd = moovEnd;
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function changeUrl(_x) {
        return _changeUrl.apply(this, arguments);
      }
      return changeUrl;
    }()
  }, {
    key: "getOrLoadMeta",
    value: function() {
      var _getOrLoadMeta = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee2(cache) {
        return _regeneratorRuntime2().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.isMetaLoaded) {
                  _context2.next = 3;
                  break;
                }
                _context2.next = 3;
                return this.loadMeta(cache);
              case 3:
                return _context2.abrupt("return", this.meta);
              case 4:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function getOrLoadMeta(_x2) {
        return _getOrLoadMeta.apply(this, arguments);
      }
      return getOrLoadMeta;
    }()
  }, {
    key: "loadMetaProcess",
    value: function() {
      var _loadMetaProcess = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee4(cache, _ref, onProgress, config) {
        var _this2 = this;
        var _ref2, moovStart, moovEnd, OnProgressHandle;
        return _regeneratorRuntime2().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref2 = _slicedToArray(_ref, 2), moovStart = _ref2[0], moovEnd = _ref2[1];
                this._error = false;
                this.logger.debug("[loadMetaProcess start], range,", [moovStart, moovEnd]);
                OnProgressHandle = function() {
                  var _ref3 = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee3(data, state, options) {
                    var moov, mdat, _moovStart, res, parsedMoov, segments, videoSegments, audioSegments;
                    return _regeneratorRuntime2().wrap(function _callee3$(_context3) {
                      while (1)
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            if (_this2.meta && options !== null && options !== void 0 && options.range && options.range.length > 0 && options.range[1] >= moovEnd) {
                              state = true;
                              _this2.logger.debug("[loadMetaProcess],data done,setstate true,[", moovStart, moovEnd, "]");
                            }
                            if (state && options !== null && options !== void 0 && options.range && options.range.length > 0 && options.range[1] < moovEnd) {
                              state = false;
                              _this2.logger.debug("[loadMetaProcess],data not done,setstate false,[", moovStart, moovEnd, "]");
                            }
                            _this2.logger.debug("[loadMetaProcess],task,[", moovStart, moovEnd, "], range,", options.range, ",dataLen,", data ? data.byteLength : void 0, ", state,", state, ",err,", _this2._error);
                            !_this2._error && data && data.byteLength > 0 && onProgress(data, state, options);
                            if (!(_this2.meta.moov || _this2._error)) {
                              _context3.next = 6;
                              break;
                            }
                            return _context3.abrupt("return");
                          case 6:
                            if (!(data && data.byteLength > 0)) {
                              _context3.next = 44;
                              break;
                            }
                            _this2.buffer = concatUint8Array(_this2.buffer, data);
                            moov = MP4Parser.findBox(_this2.buffer, ["moov"])[0];
                            if (moov) {
                              _context3.next = 23;
                              break;
                            }
                            mdat = MP4Parser.findBox(_this2.buffer, ["mdat"])[0];
                            if (!state) {
                              _context3.next = 23;
                              break;
                            }
                            if (mdat) {
                              _context3.next = 18;
                              break;
                            }
                            _this2._error = true;
                            onProgress(null, state, options, {
                              err: "cannot find moov or mdat box"
                            });
                            return _context3.abrupt("return");
                          case 18:
                            _moovStart = mdat.start + mdat.size;
                            _context3.next = 21;
                            return _this2.loadData([_moovStart, ""], cache, config);
                          case 21:
                            res = _context3.sent;
                            if (res) {
                              moov = MP4Parser.findBox(res.data, ["moov"])[0];
                            }
                          case 23:
                            if (!(moov && state && moov.size > moov.data.length)) {
                              _context3.next = 27;
                              break;
                            }
                            _this2.logger.debug("[loadMetaProcess],moov not all, range,", options.range[1], ",dataLen,", _this2.buffer.byteLength, ", state,", state);
                            _context3.next = 27;
                            return _this2.loadMetaProcess(cache, [options.range[1], moov.start + moov.size - 1], onProgress);
                          case 27:
                            if (!(moov && moov.size <= moov.data.length && !_this2.meta.moov)) {
                              _context3.next = 44;
                              break;
                            }
                            parsedMoov = MP4Parser.moov(moov);
                            if (parsedMoov) {
                              _context3.next = 33;
                              break;
                            }
                            _this2._error = true;
                            onProgress(null, state, options, {
                              err: "cannot parse moov box"
                            });
                            return _context3.abrupt("return");
                          case 33:
                            segments = moovToSegments(parsedMoov, _this2._config.segmentDuration);
                            if (segments) {
                              _context3.next = 38;
                              break;
                            }
                            _this2._error = true;
                            onProgress(null, state, options, {
                              err: "cannot parse segments"
                            });
                            return _context3.abrupt("return");
                          case 38:
                            _this2.meta = moovToMeta(parsedMoov);
                            videoSegments = segments.videoSegments, audioSegments = segments.audioSegments;
                            _this2.videoSegments = videoSegments;
                            _this2.audioSegments = audioSegments;
                            _this2.logger.debug("[loadMetaProcess] moov ok");
                            onProgress(void 0, state, {
                              meta: {
                                meta: _this2.meta,
                                videoSegments,
                                audioSegments
                              }
                            });
                          case 44:
                          case "end":
                            return _context3.stop();
                        }
                    }, _callee3);
                  }));
                  return function OnProgressHandle2(_x7, _x8, _x9) {
                    return _ref3.apply(this, arguments);
                  };
                }();
                _context4.next = 6;
                return this.loadData([moovStart, moovEnd || this._config.moovEnd], cache, _objectSpread22({
                  onProgress: OnProgressHandle
                }, config));
              case 6:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function loadMetaProcess(_x3, _x4, _x5, _x6) {
        return _loadMetaProcess.apply(this, arguments);
      }
      return loadMetaProcess;
    }()
  }, {
    key: "loadMeta",
    value: function() {
      var _loadMeta = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee5(cache, moovEnd, config) {
        var responses, res, moov, mdat, moovStart, parsedMoov, segments, videoSegments, audioSegments;
        return _regeneratorRuntime2().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                responses = [];
                this.logger.debug("[loadMeta start]");
                _context5.next = 4;
                return this.loadData([0, moovEnd || this._config.moovEnd], cache, config);
              case 4:
                res = _context5.sent;
                if (res) {
                  _context5.next = 7;
                  break;
                }
                return _context5.abrupt("return");
              case 7:
                responses.push(res);
                moov = MP4Parser.findBox(res.data, ["moov"])[0];
                if (moov) {
                  _context5.next = 23;
                  break;
                }
                mdat = MP4Parser.findBox(res.data, ["mdat"])[0];
                if (mdat) {
                  _context5.next = 13;
                  break;
                }
                throw new MediaError("cannot find moov or mdat box", res.data);
              case 13:
                moovStart = mdat.start + mdat.size;
                _context5.next = 16;
                return this.loadData([moovStart], cache, config);
              case 16:
                res = _context5.sent;
                if (res) {
                  _context5.next = 19;
                  break;
                }
                return _context5.abrupt("return");
              case 19:
                responses.push(res);
                moov = MP4Parser.findBox(res.data, ["moov"], moovStart)[0];
                if (moov) {
                  _context5.next = 23;
                  break;
                }
                throw new MediaError("cannot find moov box", res.data);
              case 23:
                if (!(moov.size > moov.data.length)) {
                  _context5.next = 31;
                  break;
                }
                _context5.next = 26;
                return this.loadData([res.data.length, moov.start + moov.size - 1], cache, config);
              case 26:
                res = _context5.sent;
                if (res) {
                  _context5.next = 29;
                  break;
                }
                return _context5.abrupt("return");
              case 29:
                responses.push(res);
                moov.data = concatUint8Array(moov.data, res.data);
              case 31:
                parsedMoov = MP4Parser.moov(moov);
                if (parsedMoov) {
                  _context5.next = 34;
                  break;
                }
                throw new MediaError("cannot parse moov box", moov.data);
              case 34:
                segments = moovToSegments(parsedMoov, this._config.segmentDuration);
                if (segments) {
                  _context5.next = 37;
                  break;
                }
                throw new MediaError("cannot parse segments", moov.data);
              case 37:
                this.meta = moovToMeta(parsedMoov);
                videoSegments = segments.videoSegments, audioSegments = segments.audioSegments;
                this.videoSegments = videoSegments;
                this.audioSegments = audioSegments;
                this.logger.debug("[load moov end!!!!!]");
                return _context5.abrupt("return", {
                  meta: this.meta,
                  videoSegments,
                  audioSegments,
                  responses
                });
              case 43:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this);
      }));
      function loadMeta(_x10, _x11, _x12) {
        return _loadMeta.apply(this, arguments);
      }
      return loadMeta;
    }()
  }, {
    key: "loadCacheMeta",
    value: function loadCacheMeta(meta, segmentIndex) {
      var moov = meta.moov;
      var segments = moovToSegments(moov, this._config.segmentDuration);
      var videoSegments = segments.videoSegments, audioSegments = segments.audioSegments;
      this.videoSegments = videoSegments;
      this.audioSegments = audioSegments;
      this._currentSegmentIndex = segmentIndex;
      this.meta = meta;
    }
  }, {
    key: "getSegmentByTime",
    value: function getSegmentByTime(time) {
      var video;
      var audio;
      if (!this.videoSegments.length) {
        audio = this.audioSegments.find(function(x) {
          return x.startTime <= time && x.endTime > time;
        });
      } else {
        video = this.videoSegments.find(function(x) {
          return x.startTime <= time && x.endTime > time;
        });
        if (video) {
          audio = this.audioSegments[video.index];
        }
      }
      return {
        video,
        audio
      };
    }
  }, {
    key: "loadSegmentByTime",
    value: function() {
      var _loadSegmentByTime = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee6(time, cache) {
        var changeCurrent, config, _this$getSegmentByTim, video, audio, _args6 = arguments;
        return _regeneratorRuntime2().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                changeCurrent = _args6.length > 2 && _args6[2] !== void 0 ? _args6[2] : true;
                config = _args6.length > 3 && _args6[3] !== void 0 ? _args6[3] : {};
                if (this.isMetaLoaded) {
                  _context6.next = 5;
                  break;
                }
                _context6.next = 5;
                return this.loadMeta(cache);
              case 5:
                _this$getSegmentByTim = this.getSegmentByTime(time), video = _this$getSegmentByTim.video, audio = _this$getSegmentByTim.audio;
                return _context6.abrupt("return", this._loadSegment(video, audio, cache, changeCurrent, config));
              case 7:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function loadSegmentByTime(_x13, _x14) {
        return _loadSegmentByTime.apply(this, arguments);
      }
      return loadSegmentByTime;
    }()
  }, {
    key: "loadNextSegment",
    value: function() {
      var _loadNextSegment = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee7(cache) {
        var changeCurrent, config, video, audio, _args7 = arguments;
        return _regeneratorRuntime2().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                changeCurrent = _args7.length > 1 && _args7[1] !== void 0 ? _args7[1] : true;
                config = _args7.length > 2 && _args7[2] !== void 0 ? _args7[2] : {};
                if (this.isMetaLoaded) {
                  _context7.next = 5;
                  break;
                }
                _context7.next = 5;
                return this.loadMeta();
              case 5:
                video = this.videoSegments[this._currentSegmentIndex + 1];
                audio = this.audioSegments[this._currentSegmentIndex + 1];
                return _context7.abrupt("return", this._loadSegment(video, audio, cache, changeCurrent, config));
              case 8:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this);
      }));
      function loadNextSegment(_x15) {
        return _loadNextSegment.apply(this, arguments);
      }
      return loadNextSegment;
    }()
  }, {
    key: "preload",
    value: function() {
      var _preload = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee9(time) {
        var _this3 = this;
        var _this$getSegmentByTim2, video, audio, index, videos, audios, load;
        return _regeneratorRuntime2().wrap(function _callee9$(_context9) {
          while (1)
            switch (_context9.prev = _context9.next) {
              case 0:
                if (this.isMetaLoaded) {
                  _context9.next = 3;
                  break;
                }
                _context9.next = 3;
                return this.loadMeta(true);
              case 3:
                if (!(!time || time < 0)) {
                  _context9.next = 5;
                  break;
                }
                return _context9.abrupt("return");
              case 5:
                _this$getSegmentByTim2 = this.getSegmentByTime(time), video = _this$getSegmentByTim2.video, audio = _this$getSegmentByTim2.audio;
                index = Math.max((video === null || video === void 0 ? void 0 : video.index) || 0, (audio === null || audio === void 0 ? void 0 : audio.index) || 0);
                if (index) {
                  _context9.next = 9;
                  break;
                }
                return _context9.abrupt("return");
              case 9:
                videos = this.videoSegments.slice(0, index);
                audios = this.audioSegments.slice(0, index);
                load = function() {
                  var _ref4 = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee8(i) {
                    return _regeneratorRuntime2().wrap(function _callee8$(_context8) {
                      while (1)
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            if (!(i > index)) {
                              _context8.next = 2;
                              break;
                            }
                            return _context8.abrupt("return");
                          case 2:
                            _context8.next = 4;
                            return _this3._loadSegment(videos[i], audios[i], true, false);
                          case 4:
                            _context8.next = 6;
                            return load(i + 1);
                          case 6:
                          case "end":
                            return _context8.stop();
                        }
                    }, _callee8);
                  }));
                  return function load2(_x17) {
                    return _ref4.apply(this, arguments);
                  };
                }();
                _context9.next = 14;
                return load(0);
              case 14:
              case "end":
                return _context9.stop();
            }
        }, _callee9, this);
      }));
      function preload(_x16) {
        return _preload.apply(this, arguments);
      }
      return preload;
    }()
  }, {
    key: "cancel",
    value: function cancel() {
      return this._loader.cancel();
    }
  }, {
    key: "reset",
    value: function() {
      var _reset = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee10() {
        var notCancelLoader, _args10 = arguments;
        return _regeneratorRuntime2().wrap(function _callee10$(_context10) {
          while (1)
            switch (_context10.prev = _context10.next) {
              case 0:
                notCancelLoader = _args10.length > 0 && _args10[0] !== void 0 ? _args10[0] : false;
                if (notCancelLoader) {
                  _context10.next = 5;
                  break;
                }
                this.logger.debug("[MP4loader reset func call loader.cancel]");
                _context10.next = 5;
                return this._loader.cancel();
              case 5:
                this.vid = this.url = "";
                this.meta = {};
                this.downloadInfo = [];
                this.videoSegments = [];
                this.audioSegments = [];
                this._currentSegmentIndex = -1;
                this._currentLoadingSegmentIndex = -1;
              case 12:
              case "end":
                return _context10.stop();
            }
        }, _callee10, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "destroy",
    value: function() {
      var _destroy = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee11() {
        return _regeneratorRuntime2().wrap(function _callee11$(_context11) {
          while (1)
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.reset();
              case 2:
                this.cache.clear();
              case 3:
              case "end":
                return _context11.stop();
            }
        }, _callee11, this);
      }));
      function destroy() {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }, {
    key: "_loadSegment",
    value: function() {
      var _loadSegment2 = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee12(video, audio, cache, changeCurrent, config) {
        var segIndex, res;
        return _regeneratorRuntime2().wrap(function _callee12$(_context12) {
          while (1)
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!(!video && !audio)) {
                  _context12.next = 2;
                  break;
                }
                return _context12.abrupt("return");
              case 2:
                segIndex = (video === null || video === void 0 ? void 0 : video.index) || (audio === null || audio === void 0 ? void 0 : audio.index) || 0;
                this._currentLoadingSegmentIndex = segIndex;
                _context12.prev = 4;
                _context12.next = 7;
                return this.loadData([Math.min((video === null || video === void 0 ? void 0 : video.range[0]) || Infinity, (audio === null || audio === void 0 ? void 0 : audio.range[0]) || Infinity), Math.max((video === null || video === void 0 ? void 0 : video.range[1]) || 0, (audio === null || audio === void 0 ? void 0 : audio.range[1]) || 0)], cache, config);
              case 7:
                res = _context12.sent;
              case 8:
                _context12.prev = 8;
                this._currentLoadingSegmentIndex = -1;
                return _context12.finish(8);
              case 11:
                if (res) {
                  _context12.next = 13;
                  break;
                }
                return _context12.abrupt("return");
              case 13:
                if (changeCurrent) {
                  this._currentSegmentIndex = segIndex;
                }
                res.video = video;
                res.audio = audio;
                return _context12.abrupt("return", res);
              case 17:
              case "end":
                return _context12.stop();
            }
        }, _callee12, this, [[4, , 8, 11]]);
      }));
      function _loadSegment(_x18, _x19, _x20, _x21, _x22) {
        return _loadSegment2.apply(this, arguments);
      }
      return _loadSegment;
    }()
  }, {
    key: "loadData",
    value: function() {
      var _loadData = _asyncToGenerator2(_regeneratorRuntime2().mark(function _callee13(range, cache, config) {
        var cacheKey, data, res, url;
        return _regeneratorRuntime2().wrap(function _callee13$(_context13) {
          while (1)
            switch (_context13.prev = _context13.next) {
              case 0:
                cacheKey = this._getCacheKey(range);
                _context13.next = 3;
                return this.cache.get(cacheKey);
              case 3:
                data = _context13.sent;
                if (data) {
                  _context13.next = 11;
                  break;
                }
                url = config && config.url ? config.url : this.url;
                _context13.next = 8;
                return this._loader.load(url, _objectSpread22({
                  range,
                  vid: this.vid
                }, config));
              case 8:
                res = _context13.sent;
                _context13.next = 12;
                break;
              case 11:
                res = {
                  data,
                  state: true,
                  options: {
                    fromCache: true,
                    range,
                    vid: this.vid
                  }
                };
              case 12:
                if (res) {
                  _context13.next = 14;
                  break;
                }
                return _context13.abrupt("return");
              case 14:
                if (!data) {
                  res.data && this.downloadInfo.push({
                    startTime: res.startTime,
                    endTime: res.endTime,
                    size: res.data.byteLength,
                    range
                  });
                  if (this.downloadInfo && this.downloadInfo.length > this._config.maxDownloadInfoSize) {
                    this.downloadInfo = this.downloadInfo.slice(-this._config.maxDownloadInfoSize);
                  }
                }
                return _context13.abrupt("return", res);
              case 17:
              case "end":
                return _context13.stop();
            }
        }, _callee13, this);
      }));
      function loadData(_x23, _x24, _x25) {
        return _loadData.apply(this, arguments);
      }
      return loadData;
    }()
  }, {
    key: "_getCacheKey",
    value: function _getCacheKey(range) {
      return (this.vid || this.url) + ":" + range;
    }
  }]);
  return MP4Loader2;
}(import_eventemitter3.default);

// node_modules/xgplayer-mp4/es/util/logger.js
var isSupport = _isLocalStorageUsable();
var openLog = checkOpenLog();
checkTestOpenLog();
function probeSupport() {
  try {
    return typeof localStorage !== "undefined" && "setItem" in window.localStorage && !!window.localStorage.setItem;
  } catch (e) {
    return false;
  }
}
function checkIfLocalStorageThrows() {
  var localStorageTestKey = "_localstorage_support_test";
  try {
    window.localStorage.setItem(localStorageTestKey, true);
    window.localStorage.removeItem(localStorageTestKey);
    return false;
  } catch (e) {
    return true;
  }
}
function checkOpenLog() {
  if (isSupport) {
    try {
      return !!window.localStorage.getItem("playerlog");
    } catch (e) {
      return false;
    }
  }
  return false;
}
function _isLocalStorageUsable() {
  return probeSupport() && !checkIfLocalStorageThrows();
}
function log(message) {
  var _console;
  for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    optionalParams[_key - 1] = arguments[_key];
  }
  openLog && console.log && (_console = console).log.apply(_console, ["[logger]", util.nowTime(), message].concat(optionalParams));
}
function checkTestOpenLog() {
  if (isSupport) {
    try {
      return !!window.localStorage.getItem("playertestlog");
    } catch (e) {
      return false;
    }
  }
  return false;
}

// node_modules/xgplayer-mp4/es/worker/index.js
var import_eventemitter32 = __toESM(require_eventemitter3());

// node_modules/xgplayer-mp4/es/worker/transmuxerworker.js
var encodedJs = "IWZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgYT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihhPWEuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLGEpfXJldHVybiByfWZ1bmN0aW9uIHQodCl7Zm9yKHZhciByPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyl7dmFyIGE9bnVsbCE9YXJndW1lbnRzW3JdP2FyZ3VtZW50c1tyXTp7fTtyJTI/ZShPYmplY3QoYSksITApLmZvckVhY2goKGZ1bmN0aW9uKGUpe2kodCxlLGFbZV0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoYSkpOmUoT2JqZWN0KGEpKS5mb3JFYWNoKChmdW5jdGlvbihlKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSxlKSl9KSl9cmV0dXJuIHR9ZnVuY3Rpb24gcihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbiIpfWZ1bmN0aW9uIGEoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTthLmVudW1lcmFibGU9YS5lbnVtZXJhYmxlfHwhMSxhLmNvbmZpZ3VyYWJsZT0hMCwidmFsdWUiaW4gYSYmKGEud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGsoYS5rZXkpLGEpfX1mdW5jdGlvbiBuKGUsdCxyKXtyZXR1cm4gdCYmYShlLnByb3RvdHlwZSx0KSxyJiZhKGUsciksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsInByb3RvdHlwZSIse3dyaXRhYmxlOiExfSksZX1mdW5jdGlvbiBpKGUsdCxyKXtyZXR1cm4odD1rKHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIHMoZSx0KXtpZigiZnVuY3Rpb24iIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcigiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24iKTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsInByb3RvdHlwZSIse3dyaXRhYmxlOiExfSksdCYmdShlLHQpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuKG89T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2YoZSl9KShlKX1mdW5jdGlvbiB1KGUsdCl7cmV0dXJuKHU9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCk6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5fX3Byb3RvX189dCxlfSkoZSx0KX1mdW5jdGlvbiBjKCl7aWYoInVuZGVmaW5lZCI9PXR5cGVvZiBSZWZsZWN0fHwhUmVmbGVjdC5jb25zdHJ1Y3QpcmV0dXJuITE7aWYoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSlyZXR1cm4hMTtpZigiZnVuY3Rpb24iPT10eXBlb2YgUHJveHkpcmV0dXJuITA7dHJ5e3JldHVybiBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbixbXSwoZnVuY3Rpb24oKXt9KSkpLCEwfWNhdGNoKGUpe3JldHVybiExfX1mdW5jdGlvbiBsKGUsdCxyKXtyZXR1cm4obD1jKCk/UmVmbGVjdC5jb25zdHJ1Y3QuYmluZCgpOmZ1bmN0aW9uKGUsdCxyKXt2YXIgYT1bbnVsbF07YS5wdXNoLmFwcGx5KGEsdCk7dmFyIG49bmV3KEZ1bmN0aW9uLmJpbmQuYXBwbHkoZSxhKSk7cmV0dXJuIHImJnUobixyLnByb3RvdHlwZSksbn0pLmFwcGx5KG51bGwsYXJndW1lbnRzKX1mdW5jdGlvbiBkKGUsdCl7aWYodCYmKCJvYmplY3QiPT10eXBlb2YgdHx8ImZ1bmN0aW9uIj09dHlwZW9mIHQpKXJldHVybiB0O2lmKHZvaWQgMCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcigiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWQiKTtyZXR1cm4gZnVuY3Rpb24oZSl7aWYodm9pZCAwPT09ZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZCIpO3JldHVybiBlfShlKX1mdW5jdGlvbiBmKGUpe3ZhciB0PWMoKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgcixhPW8oZSk7aWYodCl7dmFyIG49byh0aGlzKS5jb25zdHJ1Y3RvcjtyPVJlZmxlY3QuY29uc3RydWN0KGEsYXJndW1lbnRzLG4pfWVsc2Ugcj1hLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gZCh0aGlzLHIpfX1mdW5jdGlvbiBoKGUsdCl7Zm9yKDshT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkmJm51bGwhPT0oZT1vKGUpKTspO3JldHVybiBlfWZ1bmN0aW9uIHAoKXtyZXR1cm4gcD0idW5kZWZpbmVkIiE9dHlwZW9mIFJlZmxlY3QmJlJlZmxlY3QuZ2V0P1JlZmxlY3QuZ2V0LmJpbmQoKTpmdW5jdGlvbihlLHQscil7dmFyIGE9aChlLHQpO2lmKGEpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYSx0KTtyZXR1cm4gbi5nZXQ/bi5nZXQuY2FsbChhcmd1bWVudHMubGVuZ3RoPDM/ZTpyKTpuLnZhbHVlfX0scC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gdihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBlfShlKXx8ZnVuY3Rpb24oZSx0KXt2YXIgcj1udWxsPT1lP251bGw6InVuZGVmaW5lZCIhPXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXXx8ZVsiQEBpdGVyYXRvciJdO2lmKG51bGwhPXIpe3ZhciBhLG4saSxzLG89W10sdT0hMCxjPSExO3RyeXtpZihpPShyPXIuY2FsbChlKSkubmV4dCwwPT09dCl7aWYoT2JqZWN0KHIpIT09cilyZXR1cm47dT0hMX1lbHNlIGZvcig7ISh1PShhPWkuY2FsbChyKSkuZG9uZSkmJihvLnB1c2goYS52YWx1ZSksby5sZW5ndGghPT10KTt1PSEwKTt9Y2F0Y2gobCl7Yz0hMCxuPWx9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPXIucmV0dXJuJiYocz1yLnJldHVybigpLE9iamVjdChzKSE9PXMpKXJldHVybn1maW5hbGx5e2lmKGMpdGhyb3cgbn19cmV0dXJuIG99fShlLHQpfHxtKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcigiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKX0oKX1mdW5jdGlvbiB5KGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBnKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoInVuZGVmaW5lZCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVsiQEBpdGVyYXRvciJdKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8bShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC4iKX0oKX1mdW5jdGlvbiBtKGUsdCl7aWYoZSl7aWYoInN0cmluZyI9PXR5cGVvZiBlKXJldHVybiBnKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO3JldHVybiJPYmplY3QiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKSwiTWFwIj09PXJ8fCJTZXQiPT09cj9BcnJheS5mcm9tKGUpOiJBcmd1bWVudHMiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/ZyhlLHQpOnZvaWQgMH19ZnVuY3Rpb24gZyhlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgcj0wLGE9bmV3IEFycmF5KHQpO3I8dDtyKyspYVtyXT1lW3JdO3JldHVybiBhfWZ1bmN0aW9uIGsoZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZigib2JqZWN0IiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgYT1yLmNhbGwoZSx0fHwiZGVmYXVsdCIpO2lmKCJvYmplY3QiIT10eXBlb2YgYSlyZXR1cm4gYTt0aHJvdyBuZXcgVHlwZUVycm9yKCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLiIpfXJldHVybigic3RyaW5nIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsInN0cmluZyIpO3JldHVybiJzeW1ib2wiPT10eXBlb2YgdD90OlN0cmluZyh0KX12YXIgYj0idmlkZW8iLF89ImF1ZGlvIix3PSJtZXRhZGF0YSIseD0iYXZjIixTPSJoZXZjIixBPSJhYWMiLEQ9Imc3MTEwYSIsRT0iZzcxMTBtIixCPSJMQVJHRV9BVl9TSElGVCIsVD0iTEFSR0VfVklERU9fR0FQIixDPSJMQVJHRV9WSURFT19HQVBfQkVUV0VFTl9DSFVOSyIsVT0iTEFSR0VfQVVESU9fR0FQIixQPSJBVURJT19GSUxMRUQiLEk9IkFVRElPX0RST1BQRUQiLHo9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpLGkodGhpcywiaWQiLDEpLGkodGhpcywidHlwZSIsYiksaSh0aGlzLCJjb2RlY1R5cGUiLHgpLGkodGhpcywicGlkIiwtMSksaSh0aGlzLCJodmNDIix2b2lkIDApLGkodGhpcywiY29kZWMiLCIiKSxpKHRoaXMsInRpbWVzY2FsZSIsMCksaSh0aGlzLCJmb3JtYXRUaW1lc2NhbGUiLDApLGkodGhpcywic2VxdWVuY2VOdW1iZXIiLDApLGkodGhpcywiYmFzZU1lZGlhRGVjb2RlVGltZSIsMCksaSh0aGlzLCJiYXNlRHRzIiwwKSxpKHRoaXMsImR1cmF0aW9uIiwwKSxpKHRoaXMsIndhcm5pbmdzIixbXSksaSh0aGlzLCJzYW1wbGVzIixbXSksaSh0aGlzLCJwcHMiLFtdKSxpKHRoaXMsInNwcyIsW10pLGkodGhpcywidnBzIixbXSksaSh0aGlzLCJmcHNOdW0iLDApLGkodGhpcywiZnBzRGVuIiwwKSxpKHRoaXMsInNhclJhdGlvIixbXSksaSh0aGlzLCJ3aWR0aCIsMCksaSh0aGlzLCJoZWlnaHQiLDApLGkodGhpcywibmFsVW5pdFNpemUiLDQpLGkodGhpcywicHJlc2VudCIsITEpLGkodGhpcywiaXNWaWRlb0VuY3J5cHRpb24iLCExKSxpKHRoaXMsImlzQXVkaW9FbmNyeXB0aW9uIiwhMSksaSh0aGlzLCJpc1ZpZGVvIiwhMCksaSh0aGlzLCJraWQiLG51bGwpLGkodGhpcywicHNzaCIsbnVsbCksaSh0aGlzLCJleHQiLHZvaWQgMCl9cmV0dXJuIG4oZSxbe2tleToicmVzZXQiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5zZXF1ZW5jZU51bWJlcj10aGlzLndpZHRoPXRoaXMuaGVpZ2h0PXRoaXMuZnBzRGVuPXRoaXMuZnBzTnVtPXRoaXMuZHVyYXRpb249dGhpcy5iYXNlTWVkaWFEZWNvZGVUaW1lPXRoaXMudGltZXNjYWxlPTAsdGhpcy5jb2RlYz0iIix0aGlzLnByZXNlbnQ9ITEsdGhpcy5waWQ9LTEsdGhpcy5wcHM9W10sdGhpcy5zcHM9W10sdGhpcy52cHM9W10sdGhpcy5zYXJSYXRpbz1bXSx0aGlzLnNhbXBsZXM9W10sdGhpcy53YXJuaW5ncz1bXSx0aGlzLmh2Y0M9bnVsbH19LHtrZXk6ImV4aXN0Iix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiEhKHRoaXMucHBzLmxlbmd0aCYmdGhpcy5zcHMubGVuZ3RoJiZ0aGlzLmNvZGVjKX19LHtrZXk6Imhhc1NhbXBsZSIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuc2FtcGxlcy5sZW5ndGh9fSx7a2V5OiJpc0VuY3J5cHRpb24iLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzVmlkZW9FbmNyeXB0aW9ufX1dKSxlfSgpLE09ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpLGkodGhpcywiaWQiLDIpLGkodGhpcywidHlwZSIsXyksaSh0aGlzLCJjb2RlY1R5cGUiLEEpLGkodGhpcywicGlkIiwtMSksaSh0aGlzLCJjb2RlYyIsIiIpLGkodGhpcywic2VxdWVuY2VOdW1iZXIiLDApLGkodGhpcywic2FtcGxlRHVyYXRpb24iLDApLGkodGhpcywidGltZXNjYWxlIiwwKSxpKHRoaXMsImZvcm1hdFRpbWVzY2FsZSIsMCksaSh0aGlzLCJiYXNlTWVkaWFEZWNvZGVUaW1lIiwwKSxpKHRoaXMsImR1cmF0aW9uIiwwKSxpKHRoaXMsIndhcm5pbmdzIixbXSksaSh0aGlzLCJzYW1wbGVzIixbXSksaSh0aGlzLCJiYXNlRHRzIiwwKSxpKHRoaXMsInNhbXBsZVNpemUiLDE2KSxpKHRoaXMsInNhbXBsZVJhdGUiLDApLGkodGhpcywiY2hhbm5lbENvdW50IiwwKSxpKHRoaXMsIm9iamVjdFR5cGUiLDApLGkodGhpcywic2FtcGxlUmF0ZUluZGV4IiwwKSxpKHRoaXMsImNvbmZpZyIsW10pLGkodGhpcywicHJlc2VudCIsITEpLGkodGhpcywiaXNWaWRlb0VuY3J5cHRpb24iLCExKSxpKHRoaXMsImlzQXVkaW9FbmNyeXB0aW9uIiwhMSksaSh0aGlzLCJraWQiLG51bGwpLGkodGhpcywiZXh0Iix2b2lkIDApfXJldHVybiBuKGUsW3trZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuc2VxdWVuY2VOdW1iZXI9MCx0aGlzLnRpbWVzY2FsZT0wLHRoaXMuc2FtcGxlRHVyYXRpb249MCx0aGlzLnNhbXBsZVJhdGU9MCx0aGlzLmNoYW5uZWxDb3VudD0wLHRoaXMuYmFzZU1lZGlhRGVjb2RlVGltZT0wLHRoaXMucHJlc2VudD0hMSx0aGlzLnBpZD0tMSx0aGlzLmNvZGVjPSIiLHRoaXMuc2FtcGxlcz1bXSx0aGlzLmNvbmZpZz1bXSx0aGlzLndhcm5pbmdzPVtdfX0se2tleToiZXhpc3QiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuISEodGhpcy5zYW1wbGVSYXRlJiZ0aGlzLmNoYW5uZWxDb3VudCYmdGhpcy5jb2RlYyYmdGhpcy5jb2RlY1R5cGU9PT1BKX19LHtrZXk6Imhhc1NhbXBsZSIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuc2FtcGxlcy5sZW5ndGh9fSx7a2V5OiJpc0VuY3J5cHRpb24iLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlzQXVkaW9FbmNyeXB0aW9ufX1dKSxlfSgpLFI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsYSxuKXtyKHRoaXMsZSksaSh0aGlzLCJmbGFnIix7fSksaSh0aGlzLCJrZXlmcmFtZSIsITEpLGkodGhpcywiZ29wSWQiLDApLGkodGhpcywiZHVyYXRpb24iLDApLGkodGhpcywic2l6ZSIsMCksaSh0aGlzLCJ1bml0cyIsW10pLGkodGhpcywiY2hyb21hRm9ybWF0Iiw0MjApLHRoaXMub3JpZ2luUHRzPXRoaXMucHRzPXQsdGhpcy5vcmlnaW5EdHM9dGhpcy5kdHM9YSxuJiYodGhpcy51bml0cz1uKX1yZXR1cm4gbihlLFt7a2V5OiJjdHMiLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB0cy10aGlzLmR0c319LHtrZXk6InNldFRvS2V5ZnJhbWUiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5rZXlmcmFtZT0hMCx0aGlzLmZsYWcuZGVwZW5kc09uPTIsdGhpcy5mbGFnLmlzTm9uU3luY1NhbXBsZT0wfX1dKSxlfSgpLE89bigoZnVuY3Rpb24gZSh0LGEsbixzKXtyKHRoaXMsZSksaSh0aGlzLCJkdXJhdGlvbiIsMTAyNCksaSh0aGlzLCJmbGFnIix7ZGVwZW5kc09uOjIsaXNOb25TeW5jU2FtcGxlOjB9KSxpKHRoaXMsImtleWZyYW1lIiwhMCksdGhpcy5vcmlnaW5QdHM9dGhpcy5wdHM9dGhpcy5kdHM9dCx0aGlzLmRhdGE9YSx0aGlzLnNpemU9YS5ieXRlTGVuZ3RoLHRoaXMuc2FtcGxlT2Zmc2V0PXMsbiYmKHRoaXMuZHVyYXRpb249bil9KSksTD1uKChmdW5jdGlvbiBlKHQsYSl7cih0aGlzLGUpLGkodGhpcywidGltZSIsMCksdGhpcy5kYXRhPXQsdGhpcy5vcmlnaW5QdHM9dGhpcy5wdHM9YX0pKSxWPWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gcih0aGlzLGEpLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuKGEpfShMKSxGPWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gcih0aGlzLGEpLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuKGEpfShMKSxOPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3IodGhpcyxlKSxpKHRoaXMsImlkIiwzKSxpKHRoaXMsInR5cGUiLHcpLGkodGhpcywidGltZXNjYWxlIiwwKSxpKHRoaXMsImZsdlNjcmlwdFNhbXBsZXMiLFtdKSxpKHRoaXMsInNlaVNhbXBsZXMiLFtdKX1yZXR1cm4gbihlLFt7a2V5OiJleGlzdCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hKCF0aGlzLmZsdlNjcmlwdFNhbXBsZXMubGVuZ3RoJiYhdGhpcy5zZWlTYW1wbGVzLmxlbmd0aHx8IXRoaXMudGltZXNjYWxlKX19LHtrZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3RoaXMudGltZXNjYWxlPTAsdGhpcy5mbHZTY3JpcHRTYW1wbGVzPVtdLHRoaXMuc2VpU2FtcGxlcz1bXX19LHtrZXk6Imhhc1NhbXBsZSIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4hKCF0aGlzLmZsdlNjcmlwdFNhbXBsZXMubGVuZ3RoJiYhdGhpcy5zZWlTYW1wbGVzLmxlbmd0aCl9fV0pLGV9KCksaj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7aWYocih0aGlzLGUpLGkodGhpcywiX2J5dGVzQXZhaWxhYmxlIix2b2lkIDApLGkodGhpcywiX2JpdHNBdmFpbGFibGUiLDApLGkodGhpcywiX3dvcmQiLDApLCF0KXRocm93IG5ldyBFcnJvcigiRXhwR29sb21iIGRhdGEgcGFyYW1zIGlzIHJlcXVpcmVkIik7dGhpcy5fZGF0YT10LHRoaXMuX2J5dGVzQXZhaWxhYmxlPXQuYnl0ZUxlbmd0aCx0aGlzLl9ieXRlc0F2YWlsYWJsZSYmdGhpcy5fbG9hZFdvcmQoKX1yZXR1cm4gbihlLFt7a2V5OiJfbG9hZFdvcmQiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fZGF0YS5ieXRlTGVuZ3RoLXRoaXMuX2J5dGVzQXZhaWxhYmxlLHQ9TWF0aC5taW4oNCx0aGlzLl9ieXRlc0F2YWlsYWJsZSk7aWYoMD09PXQpdGhyb3cgbmV3IEVycm9yKCJObyBieXRlcyBhdmFpbGFibGUiKTt2YXIgcj1uZXcgVWludDhBcnJheSg0KTtyLnNldCh0aGlzLl9kYXRhLnN1YmFycmF5KGUsZSt0KSksdGhpcy5fd29yZD1uZXcgRGF0YVZpZXcoci5idWZmZXIpLmdldFVpbnQzMigwKSx0aGlzLl9iaXRzQXZhaWxhYmxlPTgqdCx0aGlzLl9ieXRlc0F2YWlsYWJsZS09dH19LHtrZXk6InNraXBCaXRzIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLl9iaXRzQXZhaWxhYmxlPmUpdGhpcy5fd29yZDw8PWUsdGhpcy5fYml0c0F2YWlsYWJsZS09ZTtlbHNle2UtPXRoaXMuX2JpdHNBdmFpbGFibGU7dmFyIHQ9TWF0aC5mbG9vcihlLzgpO2UtPTgqdCx0aGlzLl9ieXRlc0F2YWlsYWJsZS09dCx0aGlzLl9sb2FkV29yZCgpLHRoaXMuX3dvcmQ8PD1lLHRoaXMuX2JpdHNBdmFpbGFibGUtPWV9fX0se2tleToicmVhZEJpdHMiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKGU+MzIpdGhyb3cgbmV3IEVycm9yKCJDYW5ub3QgcmVhZCBtb3JlIHRoYW4gMzIgYml0cyIpO3ZhciB0PU1hdGgubWluKHRoaXMuX2JpdHNBdmFpbGFibGUsZSkscj10aGlzLl93b3JkPj4+MzItdDtyZXR1cm4gdGhpcy5fYml0c0F2YWlsYWJsZS09dCx0aGlzLl9iaXRzQXZhaWxhYmxlPjA/dGhpcy5fd29yZDw8PXQ6dGhpcy5fYnl0ZXNBdmFpbGFibGU+MCYmdGhpcy5fbG9hZFdvcmQoKSwodD1lLXQpPjAmJnRoaXMuX2JpdHNBdmFpbGFibGU/cjw8dHx0aGlzLnJlYWRCaXRzKHQpOnJ9fSx7a2V5OiJza2lwTFoiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU7Zm9yKGU9MDtlPHRoaXMuX2JpdHNBdmFpbGFibGU7KytlKWlmKDAhPSh0aGlzLl93b3JkJjIxNDc0ODM2NDg+Pj5lKSlyZXR1cm4gdGhpcy5fd29yZDw8PWUsdGhpcy5fYml0c0F2YWlsYWJsZS09ZSxlO3JldHVybiB0aGlzLl9sb2FkV29yZCgpLGUrdGhpcy5za2lwTFooKX19LHtrZXk6InNraXBVRUciLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5za2lwQml0cygxK3RoaXMuc2tpcExaKCkpfX0se2tleToicmVhZFVFRyIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNraXBMWigpO3JldHVybiB0aGlzLnJlYWRCaXRzKGUrMSktMX19LHtrZXk6InJlYWRFRyIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnJlYWRVRUcoKTtyZXR1cm4gMSZlPzErZT4+PjE6LTEqKGU+Pj4xKX19LHtrZXk6InJlYWRCb29sIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiAxPT09dGhpcy5yZWFkQml0cygxKX19LHtrZXk6InJlYWRVQnl0ZSIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5yZWFkQml0cyg4KX19LHtrZXk6InNraXBTY2FsaW5nTGlzdCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTgscj04LGE9MDthPGU7YSsrKTAhPT1yJiYocj0odCt0aGlzLnJlYWRFRygpKzI1NiklMjU2KSx0PTA9PT1yP3Q6cn19XSksZX0oKSxHPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtyKHRoaXMsZSksdGhpcy5uYW1lPXR8fCIiLHRoaXMuX3ByZWZpeD0iWyIuY29uY2F0KHRoaXMubmFtZSwiXSIpfXJldHVybiBuKGUsW3trZXk6Indhcm4iLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ7aWYoIWUuZGlzYWJsZWQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGE9bmV3IEFycmF5KHIpLG49MDtuPHI7bisrKWFbbl09YXJndW1lbnRzW25dOyh0PWNvbnNvbGUpLndhcm4uYXBwbHkodCxbdGhpcy5fcHJlZml4XS5jb25jYXQoYSkpfX19XSxbe2tleToiZW5hYmxlIix2YWx1ZTpmdW5jdGlvbigpe2UuZGlzYWJsZWQ9ITF9fSx7a2V5OiJkaXNhYmxlIix2YWx1ZTpmdW5jdGlvbigpe2UuZGlzYWJsZWQ9ITB9fV0pLGV9KCk7aShHLCJkaXNhYmxlZCIsITApO3ZhciBIPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3IodGhpcyxlKX1yZXR1cm4gbihlLG51bGwsW3trZXk6ImRlY29kZSIsdmFsdWU6ZnVuY3Rpb24odCl7Zm9yKHZhciByPVtdLGE9dCxuPTAsaT10Lmxlbmd0aDtuPGk7KWlmKGFbbl08MTI4KXIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGFbbl0pKSwrK247ZWxzZXtpZihhW25dPDE5Mik7ZWxzZSBpZihhW25dPDIyNCl7aWYoZS5fY2hlY2tDb250aW51YXRpb24oYSxuLDEpKXt2YXIgcz0oMzEmYVtuXSk8PDZ8NjMmYVtuKzFdO2lmKHM+PTEyOCl7ci5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoNjU1MzUmcykpLG4rPTI7Y29udGludWV9fX1lbHNlIGlmKGFbbl08MjQwKXtpZihlLl9jaGVja0NvbnRpbnVhdGlvbihhLG4sMikpe3ZhciBvPSgxNSZhW25dKTw8MTJ8KDYzJmFbbisxXSk8PDZ8NjMmYVtuKzJdO2lmKG8+PTIwNDgmJjU1Mjk2IT0oNjM0ODgmbykpe3IucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1NTM1Jm8pKSxuKz0zO2NvbnRpbnVlfX19ZWxzZSBpZihhW25dPDI0OCYmZS5fY2hlY2tDb250aW51YXRpb24oYSxuLDMpKXt2YXIgdT0oNyZhW25dKTw8MTh8KDYzJmFbbisxXSk8PDEyfCg2MyZhW24rMl0pPDw2fDYzJmFbbiszXTtpZih1PjY1NTM2JiZ1PDExMTQxMTIpe3UtPTY1NTM2LHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHU+Pj4xMHw1NTI5NikpLHIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDEwMjMmdXw1NjMyMCkpLG4rPTQ7Y29udGludWV9fXIucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDY1NTMzKSksKytufXJldHVybiByLmpvaW4oIiIpfX0se2tleToiX2NoZWNrQ29udGludWF0aW9uIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIGE9ZTtpZih0K3I8YS5sZW5ndGgpe2Zvcig7ci0tOylpZigxMjghPSgxOTImYVsrK3RdKSlyZXR1cm4hMTtyZXR1cm4hMH1yZXR1cm4hMX19XSksZX0oKSxLPSJ1bmRlZmluZWQiIT10eXBlb2Ygd2luZG93LHE9SyYmbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvY2FsZUxvd2VyQ2FzZSgpLFc9SyYmL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpLy50ZXN0KHEpLFg9SyYmcS5pbmNsdWRlcygiZmlyZWZveCIpLFk9SyYmcS5pbmNsdWRlcygiYW5kcm9pZCIpO2Z1bmN0aW9uIFooKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0PXQuZmlsdGVyKEJvb2xlYW4pO3ZhciBhPW5ldyBVaW50OEFycmF5KHQucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlK3QuYnl0ZUxlbmd0aH0pLDApKSxuPTA7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24oZSl7YS5zZXQoZSxuKSxuKz1lLmJ5dGVMZW5ndGh9KSksYX12YXIgUT1NYXRoLnBvdygyLDMyKTtmdW5jdGlvbiBKKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowO3JldHVybihlW3RdPDw4KSsoZVt0KzFdfHwwKX1mdW5jdGlvbiAkKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTowO3JldHVybihlW3RdPDwyND4+PjApKyhlW3QrMV08PDE2KSsoZVt0KzJdPDw4KSsoZVt0KzNdfHwwKX1mdW5jdGlvbiBlZShlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MDtyZXR1cm4gJChlLHQpKlErJChlLHQrNCl9ZnVuY3Rpb24gdGUoZSl7Zm9yKHZhciB0LHI9ImF2YzEuIixhPTA7YTwzO2ErKykodD1lW2FdLnRvU3RyaW5nKDE2KSkubGVuZ3RoPDImJih0PSIwIi5jb25jYXQodCkpLHIrPXQ7cmV0dXJuIHJ9ZnVuY3Rpb24gcmUoZSl7dmFyIHQ9IiI7aWYoZS5mb3JFYWNoKChmdW5jdGlvbihlKXt0Kz1mdW5jdGlvbihlKXtyZXR1cm4oIjAiK051bWJlcihlKS50b1N0cmluZygxNikpLnNsaWNlKC0yKS50b1VwcGVyQ2FzZSgpfShlKX0pKSx0Lmxlbmd0aDw9MzIpZm9yKHZhciByPTMyLXQubGVuZ3RoLGE9MDthPHI7YSsrKXQrPSIwIjtyZXR1cm4gdH1mdW5jdGlvbiBhZShlKXtpZighQXJyYXkuaXNBcnJheShlKSl7Zm9yKHZhciB0PVtdLHI9IiIsYT0wO2E8ZS5sZW5ndGg7YSsrKWElMiYmKHI9ZVthLTFdK2VbYV0sdC5wdXNoKHBhcnNlSW50KHIsMTYpKSxyPSIiKTtyZXR1cm4gdH1yZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBwYXJzZUludChlLDE2KX0pKX12YXIgbmU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpfXJldHVybiBuKGUsbnVsbCxbe2tleToicGFyc2VBbm5leEIiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmxlbmd0aCxyPTIsYT0wO251bGwhPT1lW3JdJiZ2b2lkIDAhPT1lW3JdJiYxIT09ZVtyXTspcisrO2lmKChhPSsrcisyKT49dClyZXR1cm5bXTtmb3IodmFyIG49W107YTx0Oylzd2l0Y2goZVthXSl7Y2FzZSAwOmlmKDAhPT1lW2EtMV0pe2ErPTI7YnJlYWt9aWYoMCE9PWVbYS0yXSl7YSsrO2JyZWFrfXIhPT1hLTImJm4ucHVzaChlLnN1YmFycmF5KHIsYS0yKSk7ZG97YSsrfXdoaWxlKDEhPT1lW2FdJiZhPHQpO2E9KHI9YSsxKSsyO2JyZWFrO2Nhc2UgMTppZigwIT09ZVthLTFdfHwwIT09ZVthLTJdKXthKz0zO2JyZWFrfXIhPT1hLTImJm4ucHVzaChlLnN1YmFycmF5KHIsYS0yKSksYT0ocj1hKzEpKzI7YnJlYWs7ZGVmYXVsdDphKz0zfXJldHVybiByPHQmJm4ucHVzaChlLnN1YmFycmF5KHIpKSxufX0se2tleToicGFyc2VBdmNDIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06NDtpZighKGUubGVuZ3RoPDQpKXtmb3IodmFyIHIsYT1lLmxlbmd0aCxuPVtdLGk9MDtpK3Q8YTspaWYocj0kKGUsaSksMz09PXQmJihyPj4+PTgpLGkrPXQscil7aWYoaStyPmEpYnJlYWs7bi5wdXNoKGUuc3ViYXJyYXkoaSxpK3IpKSxpKz1yfXJldHVybiBufX19LHtrZXk6InBhcnNlU0VJIix2YWx1ZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj1lLmxlbmd0aCxhPXQ/MjoxLG49MCxpPTAscz0iIjsyNTU9PT1lW2FdOyluKz0yNTUsYSsrO2ZvcihuKz1lW2ErK107MjU1PT09ZVthXTspaSs9MjU1LGErKztpZihpKz1lW2ErK10sNT09PW4mJnI+YSsxNilmb3IodmFyIG89MDtvPDE2O28rKylzKz1lW2FdLnRvU3RyaW5nKDE2KSxhKys7cmV0dXJue3BheWxvYWQ6ZS5zdWJhcnJheShhKSx0eXBlOm4sc2l6ZTppLHV1aWQ6c319fSx7a2V5OiJyZW1vdmVFUEIiLHZhbHVlOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmJ5dGVMZW5ndGgscj1bXSxhPTE7YTx0LTI7KTA9PT1lW2FdJiYwPT09ZVthKzFdJiYzPT09ZVthKzJdPyhyLnB1c2goYSsyKSxhKz0yKTphKys7aWYoIXIubGVuZ3RoKXJldHVybiBlO3ZhciBuPXQtci5sZW5ndGgsaT1uZXcgVWludDhBcnJheShuKSxzPTA7Zm9yKGE9MDthPG47cysrLGErKylzPT09clswXSYmKHMrKyxyLnNoaWZ0KCkpLGlbYV09ZVtzXTtyZXR1cm4gaX19XSksZX0oKSxpZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyKHRoaXMsZSl9cmV0dXJuIG4oZSxudWxsLFt7a2V5OiJwYXJzZUFWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkIix2YWx1ZTpmdW5jdGlvbih0KXtpZighKHQubGVuZ3RoPDcpKXtmb3IodmFyIHIsYSxuPTErKDMmdFs0XSksaT1bXSxzPVtdLG89Nix1PTMxJnRbNV0sYz0wO2M8dTtjKyspaWYoYT10W29dPDw4fHRbbysxXSxvKz0yLGEpe3ZhciBsPXQuc3ViYXJyYXkobyxvK2EpO28rPWEsaS5wdXNoKGwpLHJ8fChyPWUucGFyc2VTUFMobmUucmVtb3ZlRVBCKGwpKSl9dmFyIGQsZj10W29dO28rKztmb3IodmFyIGg9MDtoPGY7aCsrKWQ9dFtvXTw8OHx0W28rMV0sbys9MixkJiYocy5wdXNoKHQuc3ViYXJyYXkobyxvK2QpKSxvKz1kKTtyZXR1cm57c3BzOnIsc3BzQXJyOmkscHBzQXJyOnMsbmFsVW5pdFNpemU6bn19fX0se2tleToicGFyc2VTUFMiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PW5ldyBqKGUpO3QucmVhZFVCeXRlKCk7dmFyIHI9dC5yZWFkVUJ5dGUoKSxhPXQucmVhZFVCeXRlKCksbj10LnJlYWRVQnl0ZSgpO3Quc2tpcFVFRygpO3ZhciBpPTQyMDtpZigxMDA9PT1yfHwxMTA9PT1yfHwxMjI9PT1yfHwyNDQ9PT1yfHw0ND09PXJ8fDgzPT09cnx8ODY9PT1yfHwxMTg9PT1yfHwxMjg9PT1yfHwxMzg9PT1yfHwxNDQ9PT1yKXt2YXIgcz10LnJlYWRVRUcoKTtpZihzPD0zJiYoaT1bMCw0MjAsNDIyLDQ0NF1bc10pLDM9PT1zJiZ0LnNraXBCaXRzKDEpLHQuc2tpcFVFRygpLHQuc2tpcFVFRygpLHQuc2tpcEJpdHMoMSksdC5yZWFkQm9vbCgpKWZvcih2YXIgbz0zIT09cz84OjEyLHU9MDt1PG87dSsrKXQucmVhZEJvb2woKSYmKHU8Nj90LnNraXBTY2FsaW5nTGlzdCgxNik6dC5za2lwU2NhbGluZ0xpc3QoNjQpKX10LnNraXBVRUcoKTt2YXIgYz10LnJlYWRVRUcoKTtpZigwPT09Yyl0LnJlYWRVRUcoKTtlbHNlIGlmKDE9PT1jKXt0LnNraXBCaXRzKDEpLHQuc2tpcFVFRygpLHQuc2tpcFVFRygpO2Zvcih2YXIgbD10LnJlYWRVRUcoKSxkPTA7ZDxsO2QrKyl0LnNraXBVRUcoKX10LnNraXBVRUcoKSx0LnNraXBCaXRzKDEpO3ZhciBmPXQucmVhZFVFRygpLGg9dC5yZWFkVUVHKCkscD10LnJlYWRCaXRzKDEpOzA9PT1wJiZ0LnNraXBCaXRzKDEpLHQuc2tpcEJpdHMoMSk7dmFyIHYseSxtLGcsayxiPTAsXz0wLHc9MCx4PTA7aWYodC5yZWFkQm9vbCgpJiYoYj10LnJlYWRVRUcoKSxfPXQucmVhZFVFRygpLHc9dC5yZWFkVUVHKCkseD10LnJlYWRVRUcoKSksdC5yZWFkQm9vbCgpKXtpZih0LnJlYWRCb29sKCkpc3dpdGNoKHQucmVhZFVCeXRlKCkpe2Nhc2UgMTp2PVsxLDFdO2JyZWFrO2Nhc2UgMjp2PVsxMiwxMV07YnJlYWs7Y2FzZSAzOnY9WzEwLDExXTticmVhaztjYXNlIDQ6dj1bMTYsMTFdO2JyZWFrO2Nhc2UgNTp2PVs0MCwzM107YnJlYWs7Y2FzZSA2OnY9WzI0LDExXTticmVhaztjYXNlIDc6dj1bMjAsMTFdO2JyZWFrO2Nhc2UgODp2PVszMiwxMV07YnJlYWs7Y2FzZSA5OnY9WzgwLDMzXTticmVhaztjYXNlIDEwOnY9WzE4LDExXTticmVhaztjYXNlIDExOnY9WzE1LDExXTticmVhaztjYXNlIDEyOnY9WzY0LDMzXTticmVhaztjYXNlIDEzOnY9WzE2MCw5OV07YnJlYWs7Y2FzZSAxNDp2PVs0LDNdO2JyZWFrO2Nhc2UgMTU6dj1bMywyXTticmVhaztjYXNlIDE2OnY9WzIsMV07YnJlYWs7Y2FzZSAyNTU6dj1bdC5yZWFkVUJ5dGUoKTw8OHx0LnJlYWRVQnl0ZSgpLHQucmVhZFVCeXRlKCk8PDh8dC5yZWFkVUJ5dGUoKV19aWYodC5yZWFkQm9vbCgpJiZ0LnJlYWRCb29sKCksdC5yZWFkQm9vbCgpJiYodC5yZWFkQml0cyg0KSx0LnJlYWRCb29sKCkmJnQucmVhZEJpdHMoMjQpKSx0LnJlYWRCb29sKCkmJih0LnJlYWRVRUcoKSx0LnJlYWRVRUcoKSksdC5yZWFkQm9vbCgpKXt2YXIgUz10LnJlYWRCaXRzKDMyKSxBPXQucmVhZEJpdHMoMzIpO3k9dC5yZWFkQm9vbCgpLGs9KG09QSkvKGc9MipTKX19cmV0dXJue2NvZGVjOnRlKGUuc3ViYXJyYXkoMSw0KSkscHJvZmlsZUlkYzpyLHByb2ZpbGVDb21wYXRpYmlsaXR5OmEsbGV2ZWxJZGM6bixjaHJvbWFGb3JtYXQ6aSx3aWR0aDpNYXRoLmNlaWwoMTYqKGYrMSktMiooYitfKSksaGVpZ2h0OigyLXApKihoKzEpKjE2LShwPzI6NCkqKHcreCksc2FyUmF0aW86dixmcHNOdW06bSxmcHNEZW46ZyxmcHM6ayxmaXhlZEZyYW1lOnl9fX1dKSxlfSgpLHNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3IodGhpcyxlKX1yZXR1cm4gbihlLG51bGwsW3trZXk6ImdldFJhdGVJbmRleEJ5UmF0ZSIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuRlJFUS5pbmRleE9mKHQpfX0se2tleToicGFyc2VBRFRTIix2YWx1ZTpmdW5jdGlvbih0LHIpe2Zvcih2YXIgYT10Lmxlbmd0aCxuPTA7bisyPGEmJigyNTUhPT10W25dfHwyNDAhPSgyNDYmdFtuKzFdKSk7KW4rKztpZighKG4+PWEpKXt2YXIgaT1uLHM9W10sbz0oNjAmdFtuKzJdKT4+PjIsdT1lLkZSRVFbb107aWYoIXUpdGhyb3cgbmV3IEVycm9yKCJJbnZhbGlkIHNhbXBsaW5nIGluZGV4OiAiLmNvbmNhdChvKSk7Zm9yKHZhciBjLGwsZD0xKygoMTkyJnRbbisyXSk+Pj42KSxmPSgxJnRbbisyXSk8PDJ8KDE5MiZ0W24rM10pPj4+NixoPWUuX2dldENvbmZpZyhvLGYsZCkscD1oLmNvbmZpZyx2PWguY29kZWMseT0wLG09ZS5nZXRGcmFtZUR1cmF0aW9uKHUpO24rNzxhOylpZigyNTU9PT10W25dJiYyNDA9PSgyNDYmdFtuKzFdKSl7aWYoYS1uPChsPSgzJnRbbiszXSk8PDExfHRbbis0XTw8M3woMjI0JnRbbis1XSk+PjUpKWJyZWFrO2M9MiooMSZ+dFtuKzFdKSxzLnB1c2goe3B0czpyK3kqbSxkYXRhOnQuc3ViYXJyYXkobis3K2MsbitsKX0pLHkrKyxuKz1sfWVsc2UgbisrO3JldHVybntza2lwOmkscmVtYWluaW5nOm4+PWE/dm9pZCAwOnQuc3ViYXJyYXkobiksZnJhbWVzOnMsc2FtcGxpbmdGcmVxdWVuY3lJbmRleDpvLHNhbXBsZVJhdGU6dSxvYmplY3RUeXBlOmQsY2hhbm5lbENvdW50OmYsY29kZWM6dixjb25maWc6cCxvcmlnaW5Db2RlYzoibXA0YS40MC4iLmNvbmNhdChkKX19fX0se2tleToicGFyc2VBdWRpb1NwZWNpZmljQ29uZmlnIix2YWx1ZTpmdW5jdGlvbih0KXtpZih0Lmxlbmd0aCl7dmFyIHI9dFswXT4+PjMsYT0oNyZ0WzBdKTw8MXx0WzFdPj4+NyxuPSgxMjAmdFsxXSk+Pj4zLGk9ZS5GUkVRW2FdO2lmKGkpe3ZhciBzPWUuX2dldENvbmZpZyhhLG4scik7cmV0dXJue3NhbXBsaW5nRnJlcXVlbmN5SW5kZXg6YSxzYW1wbGVSYXRlOmksb2JqZWN0VHlwZTpyLGNoYW5uZWxDb3VudDpuLGNvbmZpZzpzLmNvbmZpZyxjb2RlYzpzLmNvZGVjLG9yaWdpbkNvZGVjOiJtcDRhLjQwLiIuY29uY2F0KHIpfX19fX0se2tleToiZ2V0RnJhbWVEdXJhdGlvbiIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOjllNDtyZXR1cm4gMTAyNCp0L2V9fSx7a2V5OiJfZ2V0Q29uZmlnIix2YWx1ZTpmdW5jdGlvbihlLHQscil7dmFyIGEsbixpPVtdO3JldHVybiBYP2U+PTY/KGE9NSxuPWUtMyk6KGE9MixuPWUpOlk/KGE9MixuPWUpOihhPTI9PT1yfHw1PT09cj9yOjUsbj1lLGU+PTY/bj1lLTM6MT09PXQmJihhPTIsbj1lKSksaVswXT1hPDwzLGlbMF18PSgxNCZlKT4+MSxpWzFdPSgxJmUpPDw3LGlbMV18PXQ8PDMsNT09PWEmJihpWzFdfD0oMTQmbik+PjEsaVsyXT0oMSZuKTw8NyxpWzJdfD04LGlbM109MCkse2NvbmZpZzppLGNvZGVjOiJtcDRhLjQwLiIuY29uY2F0KGEpfX19LHtrZXk6ImdldFNpbGVudEZyYW1lIix2YWx1ZTpmdW5jdGlvbihlLHQpe2lmKCJtcDRhLjQwLjIiPT09ZSl7aWYoMT09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KFswLDIwMCwwLDEyOCwzNSwxMjhdKTtpZigyPT09dClyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzMzLDAsNzMsMTQ0LDIsMjUsMCwzNSwxMjhdKTtpZigzPT09dClyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzAsMjAwLDAsMTI4LDMyLDEzMiwxLDM4LDY0LDgsMTAwLDAsMTQyXSk7aWYoND09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KFswLDIwMCwwLDEyOCwzMiwxMzIsMSwzOCw2NCw4LDEwMCwwLDEyOCw0NCwxMjgsOCwyLDU2XSk7aWYoNT09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KFswLDIwMCwwLDEyOCwzMiwxMzIsMSwzOCw2NCw4LDEwMCwwLDEzMCw0OCw0LDE1MywwLDMzLDE0NCwyLDU2XSk7aWYoNj09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KFswLDIwMCwwLDEyOCwzMiwxMzIsMSwzOCw2NCw4LDEwMCwwLDEzMCw0OCw0LDE1MywwLDMzLDE0NCwyLDAsMTc4LDAsMzIsOCwyMjRdKX1lbHNle2lmKDE9PT10KXJldHVybiBuZXcgVWludDhBcnJheShbMSw2NCwzNCwxMjgsMTYzLDc4LDIzMCwxMjgsMTg2LDgsMCwwLDAsMjgsNiwyNDEsMTkzLDEwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDkwLDk0XSk7aWYoMj09PXQpcmV0dXJuIG5ldyBVaW50OEFycmF5KFsxLDY0LDM0LDEyOCwxNjMsOTQsMjMwLDEyOCwxODYsOCwwLDAsMCwwLDE0OSwwLDYsMjQxLDE2MSwxMCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5MCw5NF0pO2lmKDM9PT10KXJldHVybiBuZXcgVWludDhBcnJheShbMSw2NCwzNCwxMjgsMTYzLDk0LDIzMCwxMjgsMTg2LDgsMCwwLDAsMCwxNDksMCw2LDI0MSwxNjEsMTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTAsOTRdKX19fV0pLGV9KCk7aShzZSwiRlJFUSIsWzk2ZTMsODgyMDAsNjRlMyw0OGUzLDQ0MTAwLDMyZTMsMjRlMywyMjA1MCwxNmUzLDEyZTMsMTEwMjUsOGUzLDczNTBdKTt2YXIgb2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpfXJldHVybiBuKGUsbnVsbCxbe2tleToicGFyc2VIRVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtpZighKHQubGVuZ3RoPDIzKSl7cj1yfHx7fTtmb3IodmFyIGEsbixpLHMsbyx1PTErKDMmdFsyMV0pLGM9W10sbD1bXSxkPVtdLGY9MjMsaD10WzIyXSxwPTA7cDxoO3ArKyl7aT02MyZ0W2ZdLHM9dFtmKzFdPDw4fHRbZisyXSxmKz0zO2Zvcih2YXIgdj0wO3Y8czt2KyspaWYobz10W2ZdPDw4fHRbZisxXSxmKz0yLG8pe3N3aXRjaChpKXtjYXNlIDMyOnZhciB5PXQuc3ViYXJyYXkoZixmK28pO2F8fChhPWUucGFyc2VWUFMobmUucmVtb3ZlRVBCKHkpLHIpKSxkLnB1c2goeSk7YnJlYWs7Y2FzZSAzMzp2YXIgbT10LnN1YmFycmF5KGYsZitvKTtufHwobj1lLnBhcnNlU1BTKG5lLnJlbW92ZUVQQihtKSxyKSksYy5wdXNoKG0pO2JyZWFrO2Nhc2UgMzQ6bC5wdXNoKHQuc3ViYXJyYXkoZixmK28pKX1mKz1vfX1yZXR1cm57aHZjQzpyLHNwczpuLHNwc0FycjpjLHBwc0FycjpsLHZwc0FycjpkLG5hbFVuaXRTaXplOnV9fX19LHtrZXk6InBhcnNlVlBTIix2YWx1ZTpmdW5jdGlvbih0LHIpe3I9cnx8e307dmFyIGE9bmV3IGoodCk7YS5yZWFkVUJ5dGUoKSxhLnJlYWRVQnl0ZSgpLGEucmVhZEJpdHMoMTIpO3ZhciBuPWEucmVhZEJpdHMoMyk7cmV0dXJuIHIubnVtVGVtcG9yYWxMYXllcnM9TWF0aC5tYXgoci5udW1UZW1wb3JhbExheWVyc3x8MCxuKzEpLGEucmVhZEJpdHMoMTcpLGUuX3BhcnNlUHJvZmlsZVRpZXJMZXZlbChhLG4scikscn19LHtrZXk6InBhcnNlU1BTIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cj1yfHx7fTt2YXIgYT1uZXcgaih0KTthLnJlYWRVQnl0ZSgpLGEucmVhZFVCeXRlKCksYS5yZWFkQml0cyg0KTt2YXIgbj1hLnJlYWRCaXRzKDMpO3IubnVtVGVtcG9yYWxMYXllcnM9TWF0aC5tYXgobisxLHIubnVtVGVtcG9yYWxMYXllcnN8fDApLHIudGVtcG9yYWxJZE5lc3RlZD1hLnJlYWRCaXRzKDEpLGUuX3BhcnNlUHJvZmlsZVRpZXJMZXZlbChhLG4sciksYS5yZWFkVUVHKCk7dmFyIGk9ci5jaHJvbWFGb3JtYXRJZGM9YS5yZWFkVUVHKCkscz00MjA7aTw9MyYmKHM9WzAsNDIwLDQyMiw0NDRdW2ldKTt2YXIgbz0wOzM9PT1pJiYobz1hLnJlYWRCaXRzKDEpKTt2YXIgdSxjLGwsZCxmPWEucmVhZFVFRygpLGg9YS5yZWFkVUVHKCkscD1hLnJlYWRCaXRzKDEpO2lmKDE9PT1wJiYodT1hLnJlYWRVRUcoKSxjPWEucmVhZFVFRygpLGw9YS5yZWFkVUVHKCksZD1hLnJlYWRVRUcoKSksci5iaXREZXB0aEx1bWFNaW51czg9YS5yZWFkVUVHKCksci5iaXREZXB0aENocm9tYU1pbnVzOD1hLnJlYWRVRUcoKSwxPT09cCl7dmFyIHY9MSE9PWkmJjIhPT1pfHwwIT09bz8xOjIseT0xPT09aSYmMD09PW8/MjoxO2YtPXYqKGMrdSksaC09eSooZCtsKX1yZXR1cm57Y29kZWM6ImhldjEuMS42Lkw5My5CMCIsd2lkdGg6ZixoZWlnaHQ6aCxjaHJvbWFGb3JtYXQ6cyxodmNDOnJ9fX0se2tleToiX3BhcnNlUHJvZmlsZVRpZXJMZXZlbCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPXIuZ2VuZXJhbFRpZXJGbGFnfHwwO3IuZ2VuZXJhbFByb2ZpbGVTcGFjZT1lLnJlYWRCaXRzKDIpLHIuZ2VuZXJhbFRpZXJGbGFnPU1hdGgubWF4KGUucmVhZEJpdHMoMSksYSksci5nZW5lcmFsUHJvZmlsZUlkYz1NYXRoLm1heChlLnJlYWRCaXRzKDUpLHIuZ2VuZXJhbFByb2ZpbGVJZGN8fDApLHIuZ2VuZXJhbFByb2ZpbGVDb21wYXRpYmlsaXR5RmxhZ3M9ZS5yZWFkQml0cygzMiksci5nZW5lcmFsQ29uc3RyYWludEluZGljYXRvckZsYWdzPVtlLnJlYWRCaXRzKDgpLGUucmVhZEJpdHMoOCksZS5yZWFkQml0cyg4KSxlLnJlYWRCaXRzKDgpLGUucmVhZEJpdHMoOCksZS5yZWFkQml0cyg4KV07dmFyIG49ZS5yZWFkQml0cyg4KTthPHIuZ2VuZXJhbFRpZXJGbGFnP3IuZ2VuZXJhbExldmVsSWRjPW46ci5nZW5lcmFsTGV2ZWxJZGM9TWF0aC5tYXgobixyLmdlbmVyYWxMZXZlbElkY3x8MCk7Zm9yKHZhciBpPVtdLHM9W10sbz0wO288dDtvKyspaVtvXT1lLnJlYWRCaXRzKDEpLHNbb109ZS5yZWFkQml0cygxKTt0PjAmJmUucmVhZEJpdHMoMiooOC10KSk7Zm9yKHZhciB1PTA7dTx0O3UrKykwIT09aVt1XSYmKGUucmVhZEJpdHMoMiksZS5yZWFkQml0cygxKSxlLnJlYWRCaXRzKDUpLGUucmVhZEJpdHMoMTYpLGUucmVhZEJpdHMoMTYpLGUucmVhZEJpdHMoNCksZS5yZWFkQml0cygxNiksZS5yZWFkQml0cygxNiksZS5yZWFkQml0cygxMikpLDAhPT1zW3VdJiZlLnJlYWRCaXRzKDgpfX1dKSxlfSgpLHVlPTFlMyxjZT01ZTMsbGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsYSxuKXtyKHRoaXMsZSksdGhpcy52aWRlb1RyYWNrPXQsdGhpcy5hdWRpb1RyYWNrPWEsdGhpcy5tZXRhZGF0YVRyYWNrPW4sdGhpcy5fYmFzZUR0cz0tMSx0aGlzLl9iYXNlRHRzSW5pdGVkPSExLHRoaXMuX2F1ZGlvTmV4dFB0cz12b2lkIDAsdGhpcy5fdmlkZW9OZXh0RHRzPXZvaWQgMCx0aGlzLl9hdWRpb1RpbWVzdGFtcEJyZWFrPTAsdGhpcy5fdmlkZW9UaW1lc3RhbXBCcmVhaz0wLHRoaXMuX2xhc3RWaWRlb0R1cmF0aW9uPTAsdGhpcy5fa2V5RnJhbWVJbk5leHRDaHVuaz0hMSx0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25HYXBEb3Q9LTEvMCx0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25PdmVybGFwRG90PS0xLzAsdGhpcy5fbGFzdEF1ZGlvRXhjZXB0aW9uTGFyZ2VHYXBEb3Q9LTEvMCx0aGlzLl9sYXN0VmlkZW9FeGNlcHRpb25MYXJnZUdhcERvdD0tMS8wLHRoaXMuX2xhc3RWaWRlb0V4Y2VwdGlvbkNodW5rRmlyc3REdHNEb3Q9LTEvMH1yZXR1cm4gbihlLFt7a2V5OiJmaXgiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTowLHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxhPSEoYXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0pfHxhcmd1bWVudHNbMl07dD1NYXRoLnJvdW5kKDFlMyp0KTt2YXIgbj10aGlzLnZpZGVvVHJhY2ssaT10aGlzLmF1ZGlvVHJhY2s7IXImJmF8fCh0aGlzLl92aWRlb0xhc3RTYW1wbGU9bnVsbCx0aGlzLl9hdWRpb05leHRQdHM9dm9pZCAwLHRoaXMuX3ZpZGVvTmV4dER0cz12b2lkIDAsdGhpcy5fYXVkaW9UaW1lc3RhbXBCcmVhaz0wLHRoaXMuX3ZpZGVvVGltZXN0YW1wQnJlYWs9MCx0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25HYXBEb3Q9LTEvMCx0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25PdmVybGFwRG90PS0xLzAsdGhpcy5fbGFzdEF1ZGlvRXhjZXB0aW9uTGFyZ2VHYXBEb3Q9LTEvMCx0aGlzLl9sYXN0VmlkZW9FeGNlcHRpb25MYXJnZUdhcERvdD0tMS8wLHRoaXMuX2xhc3RWaWRlb0V4Y2VwdGlvbkNodW5rRmlyc3REdHNEb3Q9LTEvMCksciYmIWEmJih0aGlzLl9iYXNlRHRzSW5pdGVkPSExKSx0aGlzLl9iYXNlRHRzSW5pdGVkfHx0aGlzLl9jYWxjdWxhdGVCYXNlRHRzKGksbiksIWEmJnQmJih0aGlzLl9hdWRpb05leHRQdHM9dGhpcy5fdmlkZW9OZXh0RHRzPXQpO3ZhciBzPXRoaXMuX2Jhc2VEdHNJbml0ZWQmJih0aGlzLl92aWRlb1RpbWVzdGFtcEJyZWFrfHwhdGhpcy52aWRlb1RyYWNrLmV4aXN0KCkpJiYodGhpcy5fYXVkaW9UaW1lc3RhbXBCcmVha3x8IXRoaXMuYXVkaW9UcmFjay5leGlzdCgpKTtpZihzJiZ0aGlzLl9yZXNldEJhc2VEdHNXaGVuU3RyZWFtQnJlYWtlZCgpLHRoaXMuX2ZpeEF1ZGlvKGkpLHRoaXMuX2tleUZyYW1lSW5OZXh0Q2h1bms9ITEsdGhpcy5fZml4VmlkZW8obiksdGhpcy5tZXRhZGF0YVRyYWNrLmV4aXN0KCkpe3ZhciBvPXRoaXMubWV0YWRhdGFUcmFjay50aW1lc2NhbGU7dGhpcy5tZXRhZGF0YVRyYWNrLnNlaVNhbXBsZXMuZm9yRWFjaCgoZnVuY3Rpb24odCl7dC5wdHM9dC5vcmlnaW5QdHMtZS5fYmFzZUR0cyx0LnRpbWU9TWF0aC5tYXgoMCx0LnB0cykvb30pKSx0aGlzLm1ldGFkYXRhVHJhY2suZmx2U2NyaXB0U2FtcGxlcy5mb3JFYWNoKChmdW5jdGlvbih0KXt0LnB0cz10Lm9yaWdpblB0cy1lLl9iYXNlRHRzLHQudGltZT1NYXRoLm1heCgwLHQucHRzKS9vfSkpfW4uc2FtcGxlcy5sZW5ndGgmJihuLmJhc2VNZWRpYURlY29kZVRpbWU9bi5zYW1wbGVzWzBdLmR0cyksaS5zYW1wbGVzLmxlbmd0aCYmKGkuYmFzZU1lZGlhRGVjb2RlVGltZT1pLnNhbXBsZXNbMF0ucHRzKmkudGltZXNjYWxlLzFlMyl9fSx7a2V5OiJfZml4VmlkZW8iLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLnNhbXBsZXM7aWYoci5sZW5ndGgpe3ZhciBhO2lmKHIuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZS5kdHMtPXQuX2Jhc2VEdHMsZS5wdHMtPXQuX2Jhc2VEdHMsZS5rZXlmcmFtZSYmKHQuX2tleUZyYW1lSW5OZXh0Q2h1bms9ITApfSkpLGUuZnBzTnVtJiZlLmZwc0RlbilhPWUudGltZXNjYWxlKihlLmZwc0Rlbi9lLmZwc051bSk7ZWxzZSBpZihlLmxlbmd0aD4xKXt2YXIgbj1lLnNhbXBsZXNbMF0saT1lLnNhbXBsZXNbci5sZW5ndGgtMV07YT1NYXRoLmZsb29yKChpLmR0cy1uLmR0cykvKHIubGVuZ3RoLTEpKX1lbHNlIGE9dGhpcy5fbGFzdFZpZGVvRHVyYXRpb258fDQwO3ZhciBzPXIucG9wKCk7aWYodGhpcy5fdmlkZW9MYXN0U2FtcGxlJiZyLnVuc2hpZnQodGhpcy5fdmlkZW9MYXN0U2FtcGxlKSx0aGlzLl92aWRlb0xhc3RTYW1wbGU9cyxyLmxlbmd0aCl7aWYodm9pZCAwPT09dGhpcy5fdmlkZW9OZXh0RHRzKXt2YXIgbz1yWzBdO3RoaXMuX3ZpZGVvTmV4dER0cz1vLmR0c312YXIgdT1yLmxlbmd0aCxjPTAsbD1yWzBdLGQ9dGhpcy5fdmlkZW9OZXh0RHRzLWwuZHRzO2lmKE1hdGguYWJzKGQpPjIwMCl7dmFyIGY7aWYoTWF0aC5hYnMobC5kdHMtdGhpcy5fbGFzdFZpZGVvRXhjZXB0aW9uQ2h1bmtGaXJzdER0c0RvdCk+NWUzKXRoaXMuX2xhc3RWaWRlb0V4Y2VwdGlvbkNodW5rRmlyc3REdHNEb3Q9bC5kdHMsZS53YXJuaW5ncy5wdXNoKHt0eXBlOkMsbmV4dER0czp0aGlzLl92aWRlb05leHREdHMsZmlyc3RTYW1wbGVEdHM6bC5kdHMsbmV4dFNhbXBsZUR0czpudWxsPT09KGY9clsxXSl8fHZvaWQgMD09PWY/dm9pZCAwOmYuZHRzLHNhbXBsZUR1cmF0aW9uOmR9KTt0aGlzLl92aWRlb1RpbWVzdGFtcEJyZWFrPj01Pyh0aGlzLl92aWRlb05leHREdHM9bC5kdHMsdGhpcy5fdmlkZW9UaW1lc3RhbXBCcmVhaz0wKToobC5kdHMrPWQsbC5wdHMrPWQsdGhpcy5hdWRpb1RyYWNrLmV4aXN0KCl8fCh0aGlzLl92aWRlb1RpbWVzdGFtcEJyZWFrPTEpKX1mb3IodmFyIGg9MDtoPHU7aCsrKXt2YXIgcD1yW2hdLmR0cyx2PXJbaCsxXTsoKGM9aDx1LTE/di5kdHMtcDpzP3MuZHRzLXA6YSk+MWUzfHxjPDApJiYodGhpcy5fdmlkZW9UaW1lc3RhbXBCcmVhaysrLE1hdGguYWJzKHAtdGhpcy5fbGFzdFZpZGVvRXhjZXB0aW9uTGFyZ2VHYXBEb3QpPjVlMyYmKHRoaXMuX2xhc3RWaWRlb0V4Y2VwdGlvbkxhcmdlR2FwRG90PXAsZS53YXJuaW5ncy5wdXNoKHt0eXBlOlQsdGltZTpwL2UudGltZXNjYWxlLGR0czpwLG9yaWdpbkR0czpyW2hdLm9yaWdpbkR0cyxuZXh0RHRzOnRoaXMuX3ZpZGVvTmV4dER0cyxzYW1wbGVEdXJhdGlvbjpjLHJlZlNhbXBsZUR1cmF0aW9uOmF9KSksYz1hKSxyW2hdLmR1cmF0aW9uPWMsdGhpcy5fdmlkZW9OZXh0RHRzKz1jLHRoaXMuX2xhc3RWaWRlb0R1cmF0aW9uPWN9fX19fSx7a2V5OiJfZml4QXVkaW8iLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMscj1lLnNhbXBsZXM7ci5sZW5ndGgmJihyLmZvckVhY2goKGZ1bmN0aW9uKGUpe2UuZHRzPWUucHRzLT10Ll9iYXNlRHRzfSkpLHRoaXMuX2RvRml4QXVkaW9JbnRlcm5hbChlLHIsMWUzKSl9fSx7a2V5OiJfY2FsY3VsYXRlQmFzZUR0cyIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj1lLnNhbXBsZXMsYT10LnNhbXBsZXM7aWYoIXIubGVuZ3RoJiYhYS5sZW5ndGgpcmV0dXJuITE7dmFyIG49MS8wLGk9MS8wO3IubGVuZ3RoJiYoZS5iYXNlRHRzPW49clswXS5wdHMpLGEubGVuZ3RoJiYodC5iYXNlRHRzPWk9YVswXS5kdHMpLHRoaXMuX2Jhc2VEdHM9TWF0aC5taW4obixpKTt2YXIgcz1pLW47cmV0dXJuIE51bWJlci5pc0Zpbml0ZShzKSYmTWF0aC5hYnMocyk+NTAwJiZ0Lndhcm5pbmdzLnB1c2goe3R5cGU6Qix2aWRlb0Jhc2VEdHM6aSxhdWRpb0Jhc2VQdHM6bixiYXNlRHRzOnRoaXMuX2Jhc2VEdHMsZGVsdGE6c30pLHRoaXMuX2Jhc2VEdHNJbml0ZWQ9ITAsITB9fSx7a2V5OiJfcmVzZXRCYXNlRHRzV2hlblN0cmVhbUJyZWFrZWQiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fY2FsY3VsYXRlQmFzZUR0cyh0aGlzLmF1ZGlvVHJhY2ssdGhpcy52aWRlb1RyYWNrKSYmKHRoaXMuYXVkaW9UcmFjay5leGlzdCgpP3RoaXMudmlkZW9UcmFjay5leGlzdCgpP3RoaXMuX2Jhc2VEdHMtPU1hdGgubWluKHRoaXMuX2F1ZGlvTmV4dFB0cyx0aGlzLl92aWRlb05leHREdHMpOnRoaXMuX2Jhc2VEdHMtPXRoaXMuX2F1ZGlvTmV4dFB0czp0aGlzLl9iYXNlRHRzLT10aGlzLl92aWRlb05leHREdHMsdGhpcy5fdmlkZW9UaW1lc3RhbXBCcmVhaz0wLHRoaXMuX2F1ZGlvVGltZXN0YW1wQnJlYWs9MCl9fSx7a2V5OiJfZG9GaXhBdWRpb0ludGVybmFsIix2YWx1ZTpmdW5jdGlvbihlLHQscil7ZS5zYW1wbGVEdXJhdGlvbnx8KGUuc2FtcGxlRHVyYXRpb249ZS5jb2RlY1R5cGU9PT1BP3NlLmdldEZyYW1lRHVyYXRpb24oZS50aW1lc2NhbGUscik6dGhpcy5fZ2V0RzcxMUR1cmF0aW9uKGUpKTt2YXIgYT1lLnNhbXBsZUR1cmF0aW9uLG49ZS5jb2RlY1R5cGU9PT1BPzEwMjQ6YSplLnRpbWVzY2FsZS8xZTM7aWYodm9pZCAwPT09dGhpcy5fYXVkaW9OZXh0UHRzKXt2YXIgaT10WzBdO3RoaXMuX2F1ZGlvTmV4dFB0cz1pLnB0c31mb3IodmFyIHM9MDtzPHQubGVuZ3RoO3MrKyl7dmFyIG89dGhpcy5fYXVkaW9OZXh0UHRzLHU9dFtzXSxjPXUucHRzLW87aWYoMD09PXMmJnRoaXMuX2F1ZGlvVGltZXN0YW1wQnJlYWs+PTUmJnRoaXMuX2tleUZyYW1lSW5OZXh0Q2h1bmsmJihvPXRoaXMuX2F1ZGlvTmV4dFB0cz11LmR0cyxjPTAsdGhpcy5fYXVkaW9UaW1lc3RhbXBCcmVhaz0wKSwhdGhpcy5fYXVkaW9UaW1lc3RhbXBCcmVhayYmYz49MyphJiZjPD11ZSYmIVcpe3ZhciBsPXRoaXMuX2dldFNpbGVudEZyYW1lKGUpfHx0WzBdLmRhdGEuc3ViYXJyYXkoKSxkPU1hdGguZmxvb3IoYy9hKTtNYXRoLmFicyh1LnB0cy10aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25HYXBEb3QpPmNlJiYodGhpcy5fbGFzdEF1ZGlvRXhjZXB0aW9uR2FwRG90PXUucHRzLGUud2FybmluZ3MucHVzaCh7dHlwZTpQLHB0czp1LnB0cyxvcmlnaW5QdHM6dS5vcmlnaW5QdHMsY291bnQ6ZCxuZXh0UHRzOm8scmVmU2FtcGxlRHVyYXRpb246YX0pKTtmb3IodmFyIGY9MDtmPGQ7ZisrKXt2YXIgaD1uZXcgTyhNYXRoLmZsb29yKHRoaXMuX2F1ZGlvTmV4dFB0cythKS1NYXRoLmZsb29yKHRoaXMuX2F1ZGlvTmV4dFB0cyksbCxuKTtoLm9yaWdpblB0cz1NYXRoLmZsb29yKHRoaXMuX2Jhc2VEdHMrbyksdC5zcGxpY2UocywwLGgpLHRoaXMuX2F1ZGlvTmV4dFB0cys9YSxzKyt9cy0tfWVsc2UgYzw9LTMqYSYmYz49LTFlMz8oTWF0aC5hYnModS5wdHMtdGhpcy5fbGFzdEF1ZGlvRXhjZXB0aW9uT3ZlcmxhcERvdCk+Y2UmJih0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25PdmVybGFwRG90PXUucHRzLGUud2FybmluZ3MucHVzaCh7dHlwZTpJLHB0czp1LnB0cyxvcmlnaW5QdHM6dS5vcmlnaW5QdHMsbmV4dFB0czpvLHJlZlNhbXBsZUR1cmF0aW9uOmF9KSksdC5zcGxpY2UocywxKSxzLS0pOihNYXRoLmFicyhjKT51ZSYmKHRoaXMuX2F1ZGlvVGltZXN0YW1wQnJlYWsrKyxNYXRoLmFicyh1LnB0cy10aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25MYXJnZUdhcERvdCk+Y2UmJih0aGlzLl9sYXN0QXVkaW9FeGNlcHRpb25MYXJnZUdhcERvdD11LnB0cyxlLndhcm5pbmdzLnB1c2goe3R5cGU6VSx0aW1lOnUucHRzLzFlMyxwdHM6dS5wdHMsb3JpZ2luUHRzOnUub3JpZ2luUHRzLG5leHRQdHM6byxzYW1wbGVEdXJhdGlvbjpjLHJlZlNhbXBsZUR1cmF0aW9uOmF9KSkpLHUuZHRzPXUucHRzPW8sdS5kdXJhdGlvbj1uLHRoaXMuX2F1ZGlvTmV4dFB0cys9YSl9fX0se2tleToiX2dldEc3MTFEdXJhdGlvbiIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zYW1wbGVTaXplLHI9ZS5jaGFubmVsQ291bnQsYT1lLnNhbXBsZVJhdGUsbj1lLnNhbXBsZXNbMF07aWYobilyZXR1cm4gMipuLmRhdGEuYnl0ZUxlbmd0aC9yLyh0LzgpL2EqMWUzfX0se2tleToiX2dldFNpbGVudEZyYW1lIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZS5jb2RlY1R5cGU9PT1BP3NlLmdldFNpbGVudEZyYW1lKGUuY29kZWMsZS5jaGFubmVsQ291bnQpOm5ldyBVaW50OEFycmF5KDgqZS5zYW1wbGVEdXJhdGlvbiplLmNoYW5uZWxDb3VudCl9fV0pLGV9KCksZGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpfXJldHVybiBuKGUsbnVsbCxbe2tleToicGFyc2UiLHZhbHVlOmZ1bmN0aW9uKHQpe2lmKCEodC5sZW5ndGg8Mykpe3ZhciByPXt9LGE9ZS5fcGFyc2VWYWx1ZShuZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0LHQuYnl0ZUxlbmd0aCkpLG49ZS5fcGFyc2VWYWx1ZShuZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0K2Euc2l6ZSx0LmJ5dGVMZW5ndGgtYS5zaXplKSk7cmV0dXJuIHJbYS5kYXRhXT1uLmRhdGEscn19fSx7a2V5OiJfcGFyc2VWYWx1ZSIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHIsYT10LmJ5dGVMZW5ndGgsbj0xLGk9ITE7c3dpdGNoKHQuZ2V0VWludDgoMCkpe2Nhc2UgMDpyPXQuZ2V0RmxvYXQ2NCgxKSxuKz04O2JyZWFrO2Nhc2UgMTpyPSEhdC5nZXRVaW50OCgxKSxuKz0xO2JyZWFrO2Nhc2UgMjp2YXIgcz1lLl9wYXJzZVN0cmluZyhuZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0K24sdC5ieXRlTGVuZ3RoLW4pKTtyPXMuZGF0YSxuKz1zLnNpemU7YnJlYWs7Y2FzZSAzOnI9e307dmFyIG89MDtmb3IoOT09KDE2Nzc3MjE1JnQuZ2V0VWludDMyKGEtNCkpJiYobz0zKTtuPGEtNDspe3ZhciB1PWUuX3BhcnNlT2JqZWN0KG5ldyBEYXRhVmlldyh0LmJ1ZmZlcix0LmJ5dGVPZmZzZXQrbix0LmJ5dGVMZW5ndGgtbi1vKSksYz11LnNpemUsbD11LmRhdGE7aWYodS5pc0VuZClicmVhaztyW2wubmFtZV09bC52YWx1ZSxuKz1jfWlmKG48PWEtMyk5PT09KDE2Nzc3MjE1JnQuZ2V0VWludDMyKG4tMSkpJiYobis9Myk7YnJlYWs7Y2FzZSA4OnI9e30sbis9NDt2YXIgZD0wO2Zvcig5PT0oMTY3NzcyMTUmdC5nZXRVaW50MzIoYS00KSkmJihkPTMpO248YS04Oyl7dmFyIGY9ZS5fcGFyc2VPYmplY3QobmV3IERhdGFWaWV3KHQuYnVmZmVyLHQuYnl0ZU9mZnNldCtuLHQuYnl0ZUxlbmd0aC1uLWQpKSxoPWYuc2l6ZSxwPWYuZGF0YTtpZihmLmlzRW5kKWJyZWFrO3JbcC5uYW1lXT1wLnZhbHVlLG4rPWh9aWYobjw9YS0zKTk9PT0oMTY3NzcyMTUmdC5nZXRVaW50MzIobi0xKSkmJihuKz0zKTticmVhaztjYXNlIDk6cj12b2lkIDAsbj0xLGk9ITA7YnJlYWs7Y2FzZSAxMDpyPVtdO3ZhciB2PXQuZ2V0VWludDMyKDEpO24rPTQ7Zm9yKHZhciB5PTA7eTx2O3krKyl7dmFyIG09ZS5fcGFyc2VWYWx1ZShuZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0K24sdC5ieXRlTGVuZ3RoLW4pKSxnPW0uZGF0YSxrPW0uc2l6ZTtyLnB1c2goZyksbis9a31icmVhaztjYXNlIDExOnZhciBiPXQuZ2V0RmxvYXQ2NChuKSs2ZTQqdC5nZXRJbnQxNihuKzgpO3I9bmV3IERhdGUoYiksbis9MTA7YnJlYWs7Y2FzZSAxMjp2YXIgXz10LmdldFVpbnQzMigxKTtuKz00LHI9IiIsXz4wJiYocj1ILmRlY29kZShuZXcgVWludDhBcnJheSh0LmJ1ZmZlcix0LmJ5dGVPZmZzZXQrbixfKSkpLG4rPV87YnJlYWs7ZGVmYXVsdDpuPWF9cmV0dXJue2RhdGE6cixzaXplOm4saXNFbmQ6aX19fSx7a2V5OiJfcGFyc2VTdHJpbmciLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0VWludDE2KDApLHI9IiI7cmV0dXJuIHQ+MCYmKHI9SC5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoZS5idWZmZXIsZS5ieXRlT2Zmc2V0KzIsdCkpKSx7ZGF0YTpyLHNpemU6Mit0fX19LHtrZXk6Il9wYXJzZU9iamVjdCIsdmFsdWU6ZnVuY3Rpb24odCl7aWYoISh0LmJ5dGVMZW5ndGg8Mykpe3ZhciByPWUuX3BhcnNlU3RyaW5nKHQpLGE9ZS5fcGFyc2VWYWx1ZShuZXcgRGF0YVZpZXcodC5idWZmZXIsdC5ieXRlT2Zmc2V0K3Iuc2l6ZSx0LmJ5dGVMZW5ndGgtci5zaXplKSk7cmV0dXJue2RhdGE6e25hbWU6ci5kYXRhLHZhbHVlOmEuZGF0YX0sc2l6ZTpyLnNpemUrYS5zaXplLGlzRW5kOmEuaXNFbmR9fX19XSksZX0oKSxmZT1uZXcgRygiRmx2RGVtdXhlciIpLGhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGEsbil7cih0aGlzLGUpLGkodGhpcywiX2hlYWRlclBhcnNlZCIsITEpLGkodGhpcywiX3JlbWFpbmluZ0RhdGEiLG51bGwpLGkodGhpcywiX2dvcElkIiwwKSxpKHRoaXMsIl9uZWVkQWRkTWV0YUJlZm9yZUtleUZyYW1lTmFsIiwhMCksdGhpcy52aWRlb1RyYWNrPXR8fG5ldyB6LHRoaXMuYXVkaW9UcmFjaz1hfHxuZXcgTSx0aGlzLm1ldGFkYXRhVHJhY2s9bnx8bmV3IE4sdGhpcy5fZml4ZXI9bmV3IGxlKHRoaXMudmlkZW9UcmFjayx0aGlzLmF1ZGlvVHJhY2ssdGhpcy5tZXRhZGF0YVRyYWNrKX1yZXR1cm4gbihlLFt7a2V5OiJkZW11eCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0mJmFyZ3VtZW50c1sxXSxhPSEoYXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0pfHxhcmd1bWVudHNbMl0sbj10aGlzLmF1ZGlvVHJhY2ssaT10aGlzLnZpZGVvVHJhY2sscz10aGlzLm1ldGFkYXRhVHJhY2s7aWYoIXImJmF8fCh0aGlzLl9yZW1haW5pbmdEYXRhPW51bGwsdGhpcy5faGVhZGVyUGFyc2VkPSExKSxyPyhpLnJlc2V0KCksbi5yZXNldCgpLHMucmVzZXQoKSk6KGkuc2FtcGxlcz1bXSxuLnNhbXBsZXM9W10scy5zZWlTYW1wbGVzPVtdLHMuZmx2U2NyaXB0U2FtcGxlcz1bXSxpLndhcm5pbmdzPVtdLG4ud2FybmluZ3M9W10sdGhpcy5fcmVtYWluaW5nRGF0YSYmKHQ9Wih0aGlzLl9yZW1haW5pbmdEYXRhLHQpLHRoaXMuX3JlbWFpbmluZ0RhdGE9bnVsbCkpLCF0Lmxlbmd0aClyZXR1cm57dmlkZW9UcmFjazppLGF1ZGlvVHJhY2s6bixtZXRhZGF0YVRyYWNrOnN9O3ZhciBvPTA7aWYoIXRoaXMuX2hlYWRlclBhcnNlZCl7aWYoIWUucHJvYmUodCkpdGhyb3cgbmV3IEVycm9yKCJJbnZhbGlkIGZsdiBmaWxlIik7bi5wcmVzZW50PSg0JnRbNF0pPj4+MiE9MCxpLnByZXNlbnQ9MCE9KDEmdFs0XSksdGhpcy5faGVhZGVyUGFyc2VkPSEwLG89JCh0LDUpKzR9Zm9yKHZhciB1LGMsbCxkLGYsaD10Lmxlbmd0aDtvKzE1PGgmJih1PXRbb10sIShvKzE1KyhjPXRbbysxXTw8MTZ8dFtvKzJdPDw4fHRbbyszXSk+aCkpOylsPSh0W28rN108PDI0Pj4+MCkrKHRbbys0XTw8MTYpKyh0W28rNV08PDgpK3Rbbys2XSxvKz0xMSxkPXQuc3ViYXJyYXkobyxvK2MpLDg9PT11P3RoaXMuX3BhcnNlQXVkaW8oZCxsKTo5PT09dT90aGlzLl9wYXJzZVZpZGVvKGQsbCk6MTg9PT11P3RoaXMuX3BhcnNlU2NyaXB0KGQsbCk6ZmUud2FybigiSW52YWxpZCB0YWcgdHlwZTogIi5jb25jYXQodSkpLChmPSQodCxvKz1jKSkhPT0xMStjJiZmZS53YXJuKCJJbnZhbGlkIFByZXZUYWdTaXplICIuY29uY2F0KGYsIiAoIikuY29uY2F0KDExK2MsIikiKSksbys9NDtyZXR1cm4gbzxoJiYodGhpcy5fcmVtYWluaW5nRGF0YT10LnN1YmFycmF5KG8pKSxuLmZvcm1hdFRpbWVzY2FsZT1pLmZvcm1hdFRpbWVzY2FsZT1pLnRpbWVzY2FsZT1zLnRpbWVzY2FsZT0xZTMsbi50aW1lc2NhbGU9bi5zYW1wbGVSYXRlfHwwLCFuLmV4aXN0KCkmJm4uaGFzU2FtcGxlKCkmJm4ucmVzZXQoKSwhaS5leGlzdCgpJiZpLmhhc1NhbXBsZSgpJiZpLnJlc2V0KCkse3ZpZGVvVHJhY2s6aSxhdWRpb1RyYWNrOm4sbWV0YWRhdGFUcmFjazpzfX19LHtrZXk6ImZpeCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiB0aGlzLl9maXhlci5maXgoZSx0LHIpLHt2aWRlb1RyYWNrOnRoaXMudmlkZW9UcmFjayxhdWRpb1RyYWNrOnRoaXMuYXVkaW9UcmFjayxtZXRhZGF0YVRyYWNrOnRoaXMubWV0YWRhdGFUcmFja319fSx7a2V5OiJkZW11eEFuZEZpeCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIsYSl7cmV0dXJuIHRoaXMuZGVtdXgoZSx0LHIpLHRoaXMuZml4KGEsdCxyKX19LHtrZXk6Il9wYXJzZUF1ZGlvIix2YWx1ZTpmdW5jdGlvbih0LHIpe2lmKHQubGVuZ3RoKXt2YXIgYT0oMjQwJnRbMF0pPj4+NCxuPXRoaXMuYXVkaW9UcmFjaztpZigxMCE9PWEmJjchPT1hJiY4IT09YSlyZXR1cm4gZmUud2FybigiVW5zdXBwb3J0ZWQgc291bmQgZm9ybWF0OiAiLmNvbmNhdChhKSksdm9pZCBuLnJlc2V0KCk7aWYoMTAhPT1hKXt2YXIgaT0oMTImdFswXSk+PjIscz0oMiZ0WzBdKT4+MSxvPTEmdFswXTtuLnNhbXBsZVJhdGU9ZS5BVURJT19SQVRFW2ldLG4uc2FtcGxlU2l6ZT1zPzE2Ojgsbi5jaGFubmVsQ291bnQ9bysxfTEwPT09YT90aGlzLl9wYXJzZUFhYyh0LHIpOnRoaXMuX3BhcnNlRzcxMSh0LHIsYSl9fX0se2tleToiX3BhcnNlRzcxMSIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPXRoaXMuYXVkaW9UcmFjazthLmNvZGVjVHlwZT03PT09cj9EOkUsYS5zYW1wbGVSYXRlPThlMyxhLmNvZGVjPWEuY29kZWNUeXBlLGEuc2FtcGxlcy5wdXNoKG5ldyBPKHQsZS5zdWJhcnJheSgxKSkpfX0se2tleToiX3BhcnNlQWFjIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuYXVkaW9UcmFjaztpZihyLmNvZGVjVHlwZT1BLDA9PT1lWzFdKXt2YXIgYT1zZS5wYXJzZUF1ZGlvU3BlY2lmaWNDb25maWcoZS5zdWJhcnJheSgyKSk7YT8oci5jb2RlYz1hLmNvZGVjLHIuY2hhbm5lbENvdW50PWEuY2hhbm5lbENvdW50LHIuc2FtcGxlUmF0ZT1hLnNhbXBsZVJhdGUsci5jb25maWc9YS5jb25maWcsci5vYmplY3RUeXBlPWEub2JqZWN0VHlwZSxyLnNhbXBsZVJhdGVJbmRleD1hLnNhbXBsaW5nRnJlcXVlbmN5SW5kZXgpOihyLnJlc2V0KCksZmUud2FybigiQ2Fubm90IHBhcnNlIEF1ZGlvU3BlY2lmaWNDb25maWciLGUpKX1lbHNlIGlmKDE9PT1lWzFdKXtpZihudWxsPT10KXJldHVybjtyLnNhbXBsZXMucHVzaChuZXcgTyh0LGUuc3ViYXJyYXkoMikpKX1lbHNlIGZlLndhcm4oIlVua25vd24gQUFDUGFja2V0VHlwZTogIi5jb25jYXQoZVsxXSkpfX0se2tleToiX3BhcnNlVmlkZW8iLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9dGhpcztpZighKGUubGVuZ3RoPDYpKXt2YXIgYT0oMjQwJmVbMF0pPj4+NCxuPTE1JmVbMF0saT10aGlzLnZpZGVvVHJhY2s7aWYoNyE9PW4mJjEyIT09bilyZXR1cm4gaS5yZXNldCgpLHZvaWQgZmUud2FybigiVW5zdXBwb3J0ZWQgY29kZWNJZDogIi5jb25jYXQobikpO3ZhciBzPTEyPT09bjtpLmNvZGVjVHlwZT1zP1M6eDt2YXIgbz1lWzFdLHU9KGVbMl08PDE2fGVbM108PDh8ZVs0XSk8PDg+Pjg7aWYoMD09PW8pe3ZhciBjPWUuc3ViYXJyYXkoNSksbD1zP29lLnBhcnNlSEVWQ0RlY29kZXJDb25maWd1cmF0aW9uUmVjb3JkKGMpOmllLnBhcnNlQVZDRGVjb2RlckNvbmZpZ3VyYXRpb25SZWNvcmQoYyk7aWYobCl7dmFyIGQ9bC5odmNDLGY9bC5zcHMsaD1sLnBwc0FycixwPWwuc3BzQXJyLHY9bC52cHNBcnIseT1sLm5hbFVuaXRTaXplO2QmJihpLmh2Y0M9aS5odmNDfHxkKSxmJiYoaS5jb2RlYz1mLmNvZGVjLGkud2lkdGg9Zi53aWR0aCxpLmhlaWdodD1mLmhlaWdodCxpLnNhclJhdGlvPWYuc2FyUmF0aW8saS5mcHNOdW09Zi5mcHNOdW0saS5mcHNEZW49Zi5mcHNEZW4pLHAubGVuZ3RoJiYoaS5zcHM9cCksaC5sZW5ndGgmJihpLnBwcz1oKSx2JiZ2Lmxlbmd0aCYmKGkudnBzPXYpLHkmJihpLm5hbFVuaXRTaXplPXkpfWVsc2UgZmUud2FybigiQ2Fubm90IHBhcnNlICIuY29uY2F0KHM/IkhFVkMiOiJBVkMiLCJEZWNvZGVyQ29uZmlndXJhdGlvblJlY29yZCIpLGUpfWVsc2UgaWYoMT09PW8pe3ZhciBtPW5lLnBhcnNlQXZjQyhlLnN1YmFycmF5KDUpLGkubmFsVW5pdFNpemUpO2lmKChtPXRoaXMuX2NoZWNrQWRkTWV0YU5hbFRvVW5pdHMocyxtLGkpKSYmbS5sZW5ndGgpe3ZhciBnPW5ldyBSKHQrdSx0LG0pOzE9PT1hJiZnLnNldFRvS2V5ZnJhbWUoKSxpLnNhbXBsZXMucHVzaChnKSxtLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBhPXM/ZVswXT4+PjEmNjM6MzEmZVswXTtzd2l0Y2goYSl7Y2FzZSA1OmNhc2UgMTY6Y2FzZSAxNzpjYXNlIDE4OmNhc2UgMTk6Y2FzZSAyMDpjYXNlIDIxOmNhc2UgMjI6Y2FzZSAyMzppZighcyYmNSE9PWF8fHMmJjU9PT1hKWJyZWFrO2cuc2V0VG9LZXlmcmFtZSgpO2JyZWFrO2Nhc2UgNjpjYXNlIDM5OmNhc2UgNDA6aWYoIXMmJjYhPT1hfHxzJiY2PT09YSlicmVhaztyLm1ldGFkYXRhVHJhY2suc2VpU2FtcGxlcy5wdXNoKG5ldyBGKG5lLnBhcnNlU0VJKG5lLnJlbW92ZUVQQihlKSxzKSx0K3UpKX19KSksZy5rZXlmcmFtZSYmdGhpcy5fZ29wSWQrKyxnLmdvcElkPXRoaXMuX2dvcElkfWVsc2UgZmUud2FybigiQ2Fubm90IHBhcnNlIE5BTFVzIixlKX1lbHNlIDI9PT1vfHxmZS53YXJuKCJVbmtub3duIEFWQ1BhY2tldFR5cGU6ICIuY29uY2F0KG8pKX19fSx7a2V5OiJfY2hlY2tBZGRNZXRhTmFsVG9Vbml0cyIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3JldHVybiBlJiZ0aGlzLl9uZWVkQWRkTWV0YUJlZm9yZUtleUZyYW1lTmFsP3QubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZVswXT4+PjEmNjN9KSkuaW5jbHVkZXMoMzIpPyh0aGlzLl9uZWVkQWRkTWV0YUJlZm9yZUtleUZyYW1lTmFsPSExLHQpOih0LnVuc2hpZnQoci5wcHNbMF0pLHQudW5zaGlmdChyLnNwc1swXSksdC51bnNoaWZ0KHIudnBzWzBdKSx0LmZpbHRlcihCb29sZWFuKSk6KHRoaXMuX25lZWRBZGRNZXRhQmVmb3JlS2V5RnJhbWVOYWw9ITEsdCl9fSx7a2V5OiJfcGFyc2VTY3JpcHQiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5tZXRhZGF0YVRyYWNrLmZsdlNjcmlwdFNhbXBsZXMucHVzaChuZXcgVihkZS5wYXJzZShlKSx0KSl9fV0sW3trZXk6InByb2JlIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gNzA9PT1lWzBdJiY3Nj09PWVbMV0mJjg2PT09ZVsyXSYmMT09PWVbM10mJiQoZSw1KT49OX19XSksZX0oKTtpKGhlLCJBVURJT19SQVRFIixbNTUwMCwxMWUzLDIyZTMsNDRlM10pLG5ldyBHKCJUc0RlbXV4ZXIiKTt2YXIgcGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpfXJldHVybiBuKGUsbnVsbCxbe2tleToiZmluZEJveCIsdmFsdWU6ZnVuY3Rpb24odCxyKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxuPVtdO2lmKCF0KXJldHVybiBuO2Zvcih2YXIgaT0wLHM9IiIsbz0wO3QubGVuZ3RoPjc7KXtpZihpPSQodCkscz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zdWJhcnJheSg0LDgpKSxvPTgsMT09PWk/KGk9ZWUodCw4KSxvKz04KTppfHwoaT10Lmxlbmd0aCksIXJbMF18fHM9PT1yWzBdKXt2YXIgdT10LnN1YmFycmF5KDAsaSk7aWYoIShyLmxlbmd0aDwyKSlyZXR1cm4gZS5maW5kQm94KHUuc3ViYXJyYXkobyksci5zbGljZSgxKSxhK28pO24ucHVzaCh7c3RhcnQ6YSxzaXplOmksaGVhZGVyU2l6ZTpvLHR5cGU6cyxkYXRhOnV9KX1hKz1pLHQ9dC5zdWJhcnJheShpKX1yZXR1cm4gbn19LHtrZXk6InRmaGQiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2UudHJhY2tJZD0kKHQpO3ZhciByPTQsYT0xJmUuZmxhZ3Msbj0yJmUuZmxhZ3MsaT04JmUuZmxhZ3Mscz0xNiZlLmZsYWdzLG89MzImZS5mbGFnczthJiYocis9NCxlLmJhc2VEYXRhT2Zmc2V0PSQodCxyKSxyKz00KSxuJiYoZS5zYW1wbGVEZXNjcmlwdGlvbkluZGV4PSQodCxyKSxyKz00KSxpJiYoZS5kZWZhdWx0U2FtcGxlRHVyYXRpb249JCh0LHIpLHIrPTQpLHMmJihlLmRlZmF1bHRTYW1wbGVTaXplPSQodCxyKSxyKz00KSxvJiYoZS5kZWZhdWx0U2FtcGxlRmxhZ3M9JCh0LHIpKX0pKX19LHtrZXk6InNpZHgiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe3ZhciByPTA7ZS5yZWZlcmVuY2VfSUQ9JCh0LHIpLHIrPTQsZS50aW1lc2NhbGU9JCh0LHIpLHIrPTQsMD09PWUudmVyc2lvbj8oZS5lYXJsaWVzdF9wcmVzZW50YXRpb25fdGltZT0kKHQscikscis9NCxlLmZpcnN0X29mZnNldD0kKHQscikscis9NCk6KGUuZWFybGllc3RfcHJlc2VudGF0aW9uX3RpbWU9ZWUodCxyKSxyKz04LGUuZmlyc3Rfb2Zmc2V0PWVlKHQscikscis9OCkscis9MixlLnJlZmVyZW5jZXM9W107dmFyIGE9Sih0LHIpO3IrPTI7Zm9yKHZhciBuPTA7bjxhO24rKyl7dmFyIGk9e307ZS5yZWZlcmVuY2VzLnB1c2goaSk7dmFyIHM9JCh0LHIpO3IrPTQsaS5yZWZlcmVuY2VfdHlwZT1zPj4zMSYxLGkucmVmZXJlbmNlZF9zaXplPTIxNDc0ODM2NDcmcyxpLnN1YnNlZ21lbnRfZHVyYXRpb249JCh0LHIpLHM9JCh0LHIrPTQpLHIrPTQsaS5zdGFydHNfd2l0aF9TQVA9cz4+MzEmMSxpLlNBUF90eXBlPXM+PjI4JjcsaS5TQVBfZGVsdGFfdGltZT0yNjg0MzU0NTUmc319KSl9fSx7a2V5OiJtb292Iix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3QubXZoZD1lLm12aGQoZS5maW5kQm94KHIsWyJtdmhkIl0sYSlbMF0pLHQudHJhaz1lLmZpbmRCb3gocixbInRyYWsiXSxhKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWsodCl9KSksdC5wc3NoPWUucHNzaChlLmZpbmRCb3gocixbInBzc2giXSxhKVswXSl9KSl9fSx7a2V5OiJtdmhkIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSx0KXt2YXIgcj0wOzE9PT1lLnZlcnNpb24/KGUudGltZXNjYWxlPSQodCwxNiksZS5kdXJhdGlvbj1lZSh0LDIwKSxyKz0yOCk6KGUudGltZXNjYWxlPSQodCw4KSxlLmR1cmF0aW9uPSQodCwxMikscis9MTYpLGUubmV4dFRyYWNrSWQ9JCh0LHIrNzYpfSkpfX0se2tleToidHJhayIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQsITEsKGZ1bmN0aW9uKHQscixhKXt0LnRraGQ9ZS50a2hkKGUuZmluZEJveChyLFsidGtoZCJdLGEpWzBdKSx0Lm1kaWE9ZS5tZGlhKGUuZmluZEJveChyLFsibWRpYSJdLGEpWzBdKX0pKX19LHtrZXk6InRraGQiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe3ZhciByPTA7MT09PWUudmVyc2lvbj8oZS50cmFja0lkPSQodCwxNiksZS5kdXJhdGlvbj1lZSh0LDI0KSxyKz0zMik6KGUudHJhY2tJZD0kKHQsOCksZS5kdXJhdGlvbj0kKHQsMTYpLHIrPTIwKSxlLndpZHRoPSQodCxyKzUyKSxlLmhlaWdodD0kKHQscis1Nil9KSl9fSx7a2V5OiJtZGlhIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3QubWRoZD1lLm1kaGQoZS5maW5kQm94KHIsWyJtZGhkIl0sYSlbMF0pLHQuaGRscj1lLmhkbHIoZS5maW5kQm94KHIsWyJoZGxyIl0sYSlbMF0pLHQubWluZj1lLm1pbmYoZS5maW5kQm94KHIsWyJtaW5mIl0sYSlbMF0pfSkpfX0se2tleToibWRoZCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITAsKGZ1bmN0aW9uKGUsdCl7dmFyIHI9MDsxPT09ZS52ZXJzaW9uPyhlLnRpbWVzY2FsZT0kKHQsMTYpLGUuZHVyYXRpb249ZWUodCwyMCkscis9MjgpOihlLnRpbWVzY2FsZT0kKHQsOCksZS5kdXJhdGlvbj0kKHQsMTIpLHIrPTE2KTt2YXIgYT1KKHQscik7ZS5sYW5ndWFnZT1TdHJpbmcuZnJvbUNoYXJDb2RlKDk2KyhhPj4xMCYzMSksOTYrKGE+PjUmMzEpLDk2KygzMSZhKSl9KSl9fSx7a2V5OiJoZGxyIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSx0KXswPT09ZS52ZXJzaW9uJiYoZS5oYW5kbGVyVHlwZT1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsdC5zdWJhcnJheSg0LDgpKSl9KSl9fSx7a2V5OiJtaW5mIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3Qudm1oZD1lLnZtaGQoZS5maW5kQm94KHIsWyJ2bWhkIl0sYSlbMF0pLHQuc21oZD1lLnNtaGQoZS5maW5kQm94KHIsWyJzbWhkIl0sYSlbMF0pLHQuc3RibD1lLnN0YmwoZS5maW5kQm94KHIsWyJzdGJsIl0sYSlbMF0pfSkpfX0se2tleToidm1oZCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITAsKGZ1bmN0aW9uKGUsdCl7ZS5ncmFwaGljc21vZGU9Sih0KSxlLm9wY29sb3I9W0oodCwyKSxKKHQsNCksSih0LDYpXX0pKX19LHtrZXk6InNtaGQiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2UuYmFsYW5jZT1KKHQpfSkpfX0se2tleToic3RibCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQsITEsKGZ1bmN0aW9uKHQscixhKXt2YXIgbixpLHM7dC5zdHNkPWUuc3RzZChlLmZpbmRCb3gocixbInN0c2QiXSxhKVswXSksdC5zdHRzPWUuc3R0cyhlLmZpbmRCb3gocixbInN0dHMiXSxhKVswXSksdC5jdHRzPWUuY3R0cyhlLmZpbmRCb3gocixbImN0dHMiXSxhKVswXSksdC5zdHNjPWUuc3RzYyhlLmZpbmRCb3gocixbInN0c2MiXSxhKVswXSksdC5zdHN6PWUuc3RzeihlLmZpbmRCb3gocixbInN0c3oiXSxhKVswXSksdC5zdGNvPWUuc3RjbyhlLmZpbmRCb3gocixbInN0Y28iXSxhKVswXSksdC5zdGNvfHwodC5jbzY0PWUuY282NChlLmZpbmRCb3gocixbImNvNjQiXSxhKVswXSksdC5zdGNvPXQuY282NCk7dmFyIG89bnVsbD09PShuPXQuc3RzZC5lbnRyaWVzWzBdKXx8dm9pZCAwPT09bnx8bnVsbD09PShpPW4uc2luZil8fHZvaWQgMD09PWl8fG51bGw9PT0ocz1pLnNjaGkpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLnRlbmMuZGVmYXVsdF9JVl9zaXplO3Quc3Rzcz1lLnN0c3MoZS5maW5kQm94KHIsWyJzdHNzIl0sYSlbMF0pLHQuc2VuYz1lLnNlbmMoZS5maW5kQm94KHIsWyJzZW5jIl0sYSlbMF0sbyl9KSl9fSx7a2V5OiJzZW5jIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06ODtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSxyKXt2YXIgYT0wLG49JChyLGEpO2ErPTQsZS5zYW1wbGVzPVtdO2Zvcih2YXIgaT0wO2k8bjtpKyspe2Zvcih2YXIgcz17SW5pdGlhbGl6YXRpb25WZWN0b3I6W119LG89MDtvPHQ7bysrKXMuSW5pdGlhbGl6YXRpb25WZWN0b3Jbb109clthK29dO2lmKGErPXQsMiZlLmZsYWdzKXtzLnN1YnNhbXBsZXM9W107dmFyIHU9SihyLGEpO2ErPTI7Zm9yKHZhciBjPTA7Yzx1O2MrKyl7dmFyIGw9e307bC5CeXRlc09mQ2xlYXJEYXRhPUoocixhKSxhKz0yLGwuQnl0ZXNPZlByb3RlY3RlZERhdGE9JChyLGEpLGErPTQscy5zdWJzYW1wbGVzLnB1c2gobCl9fWUuc2FtcGxlcy5wdXNoKHMpfX0pKX19LHtrZXk6InBzc2giLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj1bXSxhPVtdLG49MCxpPTA7aTwxNjtpKyspYS5wdXNoKGJlKHRbbitpXSkpO2lmKG4rPTE2LGUudmVyc2lvbj4wKXt2YXIgcz0kKHQsbik7bis9NDtmb3IodmFyIG89MDtvPCgiIitzKS5sZW5ndGg7bysrKWZvcih2YXIgdT0wO3U8MTY7dSsrKXt2YXIgYz10W25dO24rPTEsci5wdXNoKGJlKGMpKX19dmFyIGw9JCh0LG4pO2UuZGF0YV9zaXplPWwsbis9NCxlLmtpZD1yLGUuc3lzdGVtX2lkPWEsZS5idWZmZXI9dH0pKX19LHtrZXk6InN0c2QiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBnZSh0LCEwLChmdW5jdGlvbih0LHIsYSl7dC5lbnRyeUNvdW50PSQociksdC5lbnRyaWVzPWUuZmluZEJveChyLnN1YmFycmF5KDQpLFtdLGErNCkubWFwKChmdW5jdGlvbih0KXtzd2l0Y2godC50eXBlKXtjYXNlImF2YzEiOmNhc2UiYXZjMiI6Y2FzZSJhdmMzIjpjYXNlImF2YzQiOnJldHVybiBlLmF2YzEodCk7Y2FzZSJodmMxIjpjYXNlImhldjEiOnJldHVybiBlLmh2YzEodCk7Y2FzZSJtcDRhIjpyZXR1cm4gZS5tcDRhKHQpO2Nhc2UiYWxhdyI6Y2FzZSJ1bGF3IjpyZXR1cm4gZS5hbGF3KHQpO2Nhc2UiZW5jYSI6cmV0dXJuIGdlKHQsITEsKGZ1bmN0aW9uKHQscixhKXt0LmNoYW5uZWxDb3VudD1KKHIsMTYpLHQuc2FtcGxlc2l6ZT1KKHIsMTgpLHQuc2FtcGxlUmF0ZT0kKHIsMjQpLzY1NTM2LHI9ci5zdWJhcnJheSgyOCksdC5zaW5mPWUuc2luZihlLmZpbmRCb3gocixbInNpbmYiXSxhKVswXSksdC5lc2RzPWUuZXNkcyhlLmZpbmRCb3gocixbImVzZHMiXSxhKVswXSl9KSk7Y2FzZSJlbmN2IjpyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3Qud2lkdGg9SihyLDI0KSx0LmhlaWdodD1KKHIsMjYpLHQuaG9yaXpyZXNvbHV0aW9uPSQociwyOCksdC52ZXJ0cmVzb2x1dGlvbj0kKHIsMzIpLHI9ci5zdWJhcnJheSg3OCksdC5zaW5mPWUuc2luZihlLmZpbmRCb3gocixbInNpbmYiXSxhKVswXSksdC5hdmNDPWUuYXZjQyhlLmZpbmRCb3gocixbImF2Y0MiXSxhKVswXSksdC5odmNDPWUuaHZjQyhlLmZpbmRCb3gocixbImh2Y0MiXSxhKVswXSksdC5wYXNwPWUucGFzcChlLmZpbmRCb3gocixbInBhc3AiXSxhKVswXSl9KSl9fSkpLmZpbHRlcihCb29sZWFuKX0pKX19LHtrZXk6InRlbmMiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCExLChmdW5jdGlvbihlLHQpe3ZhciByPTY7ZS5kZWZhdWx0X0lzRW5jcnlwdGVkPXRbcl0scis9MSxlLmRlZmF1bHRfSVZfc2l6ZT10W3JdLHIrPTEsZS5kZWZhdWx0X0tJRD1bXTtmb3IodmFyIGE9MDthPDE2O2ErKyllLmRlZmF1bHRfS0lELnB1c2goYmUodFtyXSkpLHIrPTF9KSl9fSx7a2V5OiJzY2hpIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3QudGVuYz1lLnRlbmMoZS5maW5kQm94KHIsWyJ0ZW5jIl0sYSlbMF0pfSkpfX0se2tleToic2luZiIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQsITEsKGZ1bmN0aW9uKHQscixhKXt0LnNjaGk9ZS5zY2hpKGUuZmluZEJveChyLFsic2NoaSJdLGEpWzBdKSx0LmZybWE9ZS5mcm1hKGUuZmluZEJveChyLFsiZnJtYSJdLGEpWzBdKX0pKX19LHtrZXk6ImZybWEiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCExLChmdW5jdGlvbihlLHQpe2UuZGF0YV9mb3JtYXQ9IiI7Zm9yKHZhciByPTA7cjw0O3IrKyllLmRhdGFfZm9ybWF0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHRbcl0pfSkpfX0se2tleToiYXZjMSIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGdlKHQsITEsKGZ1bmN0aW9uKHQscixhKXt2YXIgbj15ZSh0LHIpLGk9ci5zdWJhcnJheShuKTthKz1uLHQuYXZjQz1lLmF2Y0MoZS5maW5kQm94KGksWyJhdmNDIl0sYSlbMF0pLHQucGFzcD1lLnBhc3AoZS5maW5kQm94KGksWyJwYXNwIl0sYSlbMF0pfSkpfX0se2tleToiYXZjQyIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITEsKGZ1bmN0aW9uKGUsdCl7ZS5jb25maWd1cmF0aW9uVmVyc2lvbj10WzBdLGUuQVZDUHJvZmlsZUluZGljYXRpb249dFsxXSxlLnByb2ZpbGVDb21wYXRpYmlsaXR5PXRbMl0sZS5BVkNMZXZlbEluZGljYXRpb249dFszXSxlLmNvZGVjPXRlKFt0WzFdLHRbMl0sdFszXV0pLGUubGVuZ3RoU2l6ZU1pbnVzT25lPTMmdFs0XSxlLnNwc0xlbmd0aD0zMSZ0WzVdLGUuc3BzPVtdO2Zvcih2YXIgcj02LGE9MDthPGUuc3BzTGVuZ3RoO2ErKyl7dmFyIG49Sih0LHIpO3IrPTIsZS5zcHMucHVzaCh0LnN1YmFycmF5KHIscituKSkscis9bn1lLnBwc0xlbmd0aD10W3JdLHIrPTEsZS5wcHM9W107Zm9yKHZhciBpPTA7aTxlLnBwc0xlbmd0aDtpKyspe3ZhciBzPUoodCxyKTtyKz0yLGUucHBzLnB1c2godC5zdWJhcnJheShyLHIrPXMpKSxyKz1zfX0pKX19LHtrZXk6Imh2YzEiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBnZSh0LCExLChmdW5jdGlvbih0LHIsYSl7dmFyIG49eWUodCxyKSxpPXIuc3ViYXJyYXkobik7YSs9bix0Lmh2Y0M9ZS5odmNDKGUuZmluZEJveChpLFsiaHZjQyJdLGEpWzBdKSx0LnBhc3A9ZS5wYXNwKGUuZmluZEJveChpLFsicGFzcCJdLGEpWzBdKX0pKX19LHtrZXk6Imh2Y0MiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCExLChmdW5jdGlvbih0LHIpe3QuZGF0YT1lLmRhdGEsdC5jb2RlYz0iaGV2MS4xLjYuTDkzLkIwIix0LmNvbmZpZ3VyYXRpb25WZXJzaW9uPXJbMF07dmFyIGE9clsxXTt0LmdlbmVyYWxQcm9maWxlU3BhY2U9YT4+Nix0LmdlbmVyYWxUaWVyRmxhZz0oMzImYSk+PjUsdC5nZW5lcmFsUHJvZmlsZUlkYz0zMSZhLHQuZ2VuZXJhbFByb2ZpbGVDb21wYXRpYmlsaXR5PSQociwyKSx0LmdlbmVyYWxDb25zdHJhaW50SW5kaWNhdG9yRmxhZ3M9ci5zdWJhcnJheSg2LDEyKSx0LmdlbmVyYWxMZXZlbElkYz1yWzEyXSx0LmF2Z0ZyYW1lUmF0ZT1KKHIsMTkpLHQubnVtT2ZBcnJheXM9clsyMl0sdC52cHM9W10sdC5zcHM9W10sdC5wcHM9W107Zm9yKHZhciBuPTIzLGk9MCxzPTAsbz0wLHU9MDt1PHQubnVtT2ZBcnJheXM7dSsrKXtpPTYzJnJbbl0scz1KKHIsbisxKSxuKz0zO2Zvcih2YXIgYyxsPVtdLGQ9MDtkPHM7ZCsrKW89SihyLG4pLG4rPTIsbC5wdXNoKHIuc3ViYXJyYXkobixuK28pKSxuKz1vO2lmKDMyPT09aSkoYz10LnZwcykucHVzaC5hcHBseShjLGwpO2Vsc2UgaWYoMzM9PT1pKXt2YXIgZjsoZj10LnNwcykucHVzaC5hcHBseShmLGwpfWVsc2UgaWYoMzQ9PT1pKXt2YXIgaDsoaD10LnBwcykucHVzaC5hcHBseShoLGwpfX19KSl9fSx7a2V5OiJwYXNwIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMSwoZnVuY3Rpb24oZSx0KXtlLmhTcGFjaW5nPSQodCksZS52U3BhY2luZz0kKHQsNCl9KSl9fSx7a2V5OiJtcDRhIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3ZhciBuPW1lKHQscik7dC5lc2RzPWUuZXNkcyhlLmZpbmRCb3goci5zdWJhcnJheShuKSxbImVzZHMiXSxhK24pWzBdKX0pKX19LHtrZXk6ImVzZHMiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2UuY29kZWM9Im1wNGEuIjtmb3IodmFyIHI9MCxhPTAsbj0wLGk9MDt0Lmxlbmd0aDspe2ZvcihpPXRbcj0wXSxhPXRbcisxXSxyKz0yOzEyOCZhOyluPSgxMjcmYSk8PDcsYT10W3JdLHIrPTE7aWYobis9MTI3JmEsMz09PWkpdD10LnN1YmFycmF5KHIrMyk7ZWxzZXtpZig0IT09aSl7aWYoNT09PWkpe3ZhciBzPWUuY29uZmlnPXQuc3ViYXJyYXkocixyK24pLG89KDI0OCZzWzBdKT4+MztyZXR1cm4gMzE9PT1vJiZzLmxlbmd0aD49MiYmKG89MzIrKCg3JnNbMF0pPDwzKSsoKDIyNCZzWzFdKT4+NSkpLGUub2JqZWN0VHlwZT1vLGUuY29kZWMrPW8udG9TdHJpbmcoMTYpLHZvaWQoIi4iPT09ZS5jb2RlY1tlLmNvZGVjLmxlbmd0aC0xXSYmKGUuY29kZWM9ZS5jb2RlYy5zdWJzdHJpbmcoMCxlLmNvZGVjLmxlbmd0aC0xKSkpfXJldHVybiB2b2lkKCIuIj09PWUuY29kZWNbZS5jb2RlYy5sZW5ndGgtMV0mJihlLmNvZGVjPWUuY29kZWMuc3Vic3RyaW5nKDAsZS5jb2RlYy5sZW5ndGgtMSkpKX1lLmNvZGVjKz0odFtyXS50b1N0cmluZygxNikrIi4iKS5wYWRTdGFydCgzLCIwIiksdD10LnN1YmFycmF5KHIrMTMpfX19KSl9fSx7a2V5OiJhbGF3Iix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMSwoZnVuY3Rpb24oZSx0KXttZShlLHQpfSkpfX0se2tleToic3R0cyIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITAsKGZ1bmN0aW9uKGUsdCl7Zm9yKHZhciByPSQodCksYT1bXSxuPTQsaT0wO2k8cjtpKyspYS5wdXNoKHtjb3VudDokKHQsbiksZGVsdGE6JCh0LG4rNCl9KSxuKz04O2UuZW50cnlDb3VudD1yLGUuZW50cmllcz1hfSkpfX0se2tleToiY3R0cyIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITAsKGZ1bmN0aW9uKGUsdCl7dmFyIHI9JCh0KSxhPVtdLG49NDtpZigxPT09ZS52ZXJzaW9uKWZvcih2YXIgaT0wO2k8cjtpKyspYS5wdXNoKHtjb3VudDokKHQsbiksb2Zmc2V0OiQodCxuKzQpfSksbis9ODtlbHNlIGZvcih2YXIgcz0wO3M8cjtzKyspYS5wdXNoKHtjb3VudDokKHQsbiksb2Zmc2V0Oi0oMSt+JCh0LG4rNCkpfSksbis9ODtlLmVudHJ5Q291bnQ9cixlLmVudHJpZXM9YX0pKX19LHtrZXk6InN0c2MiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0kKHQpLGE9W10sbj00LGk9MDtpPHI7aSsrKWEucHVzaCh7Zmlyc3RDaHVuazokKHQsbiksc2FtcGxlc1BlckNodW5rOiQodCxuKzQpLHNhbXBsZURlc2NyaXB0aW9uSW5kZXg6JCh0LG4rOCl9KSxuKz0xMjtlLmVudHJ5Q291bnQ9cixlLmVudHJpZXM9YX0pKX19LHtrZXk6InN0c3oiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe3ZhciByPSQodCksYT0kKHQsNCksbj1bXTtpZighcilmb3IodmFyIGk9OCxzPTA7czxhO3MrKyluLnB1c2goJCh0LGkpKSxpKz00O2Uuc2FtcGxlU2l6ZT1yLGUuc2FtcGxlQ291bnQ9YSxlLmVudHJ5U2l6ZXM9bn0pKX19LHtrZXk6InN0Y28iLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0kKHQpLGE9W10sbj00LGk9MDtpPHI7aSsrKWEucHVzaCgkKHQsbikpLG4rPTQ7ZS5lbnRyeUNvdW50PXIsZS5lbnRyaWVzPWF9KSl9fSx7a2V5OiJjbzY0Iix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9JCh0KSxhPVtdLG49NCxpPTA7aTxyO2krKylhLnB1c2goZWUodCxuKSksbis9ODtlLmVudHJ5Q291bnQ9cixlLmVudHJpZXM9YX0pKX19LHtrZXk6InN0c3MiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBnZShlLCEwLChmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0kKHQpLGE9W10sbj00LGk9MDtpPHI7aSsrKWEucHVzaCgkKHQsbikpLG4rPTQ7ZS5lbnRyeUNvdW50PXIsZS5lbnRyaWVzPWF9KSl9fSx7a2V5OiJtb29mIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3QubWZoZD1lLm1maGQoZS5maW5kQm94KHIsWyJtZmhkIl0sYSlbMF0pLHQudHJhZj1lLmZpbmRCb3gocixbInRyYWYiXSxhKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWYodCl9KSl9KSl9fSx7a2V5OiJtZmhkIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSx0KXtlLnNlcXVlbmNlTnVtYmVyPSQodCl9KSl9fSx7a2V5OiJ0cmFmIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZ2UodCwhMSwoZnVuY3Rpb24odCxyLGEpe3QudGZoZD1lLnRmaGQoZS5maW5kQm94KHIsWyJ0ZmhkIl0sYSlbMF0pLHQudGZkdD1lLnRmZHQoZS5maW5kQm94KHIsWyJ0ZmR0Il0sYSlbMF0pLHQudHJ1bj1lLnRydW4oZS5maW5kQm94KHIsWyJ0cnVuIl0sYSlbMF0pfSkpfX0se2tleToidHJ1biIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGdlKGUsITAsKGZ1bmN0aW9uKGUsdCl7dmFyIHI9ZS52ZXJzaW9uLGE9ZS5mbGFncyxuPXQubGVuZ3RoLGk9ZS5zYW1wbGVDb3VudD0kKHQpLHM9NDtpZihuPnMmJjEmYSYmKGUuZGF0YU9mZnNldD0tKDErfiQodCxzKSkscys9NCksbj5zJiY0JmEmJihlLmZpcnN0U2FtcGxlRmxhZ3M9JCh0LHMpLHMrPTQpLGUuc2FtcGxlcz1bXSxuPnMpZm9yKHZhciBvLHU9MDt1PGk7dSsrKW89e30sMjU2JmEmJihvLmR1cmF0aW9uPSQodCxzKSxzKz00KSw1MTImYSYmKG8uc2l6ZT0kKHQscykscys9NCksMTAyNCZhJiYoby5mbGFncz0kKHQscykscys9NCksMjA0OCZhJiYoby5jdHM9cj8tKDErfiQodCxzKzQpKTokKHQscykscys9NCksZS5zYW1wbGVzLnB1c2gobyl9KSl9fSx7a2V5OiJ0ZmR0Iix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZ2UoZSwhMCwoZnVuY3Rpb24oZSx0KXsxPT09ZS52ZXJzaW9uP2UuYmFzZU1lZGlhRGVjb2RlVGltZT1lZSh0KTplLmJhc2VNZWRpYURlY29kZVRpbWU9JCh0KX0pKX19LHtrZXk6InByb2JlIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4hIWUuZmluZEJveCh0LFsiZnR5cCJdKX19LHtrZXk6InBhcnNlU2FtcGxlRmxhZ3MiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybntpc0xlYWRpbmc6KDEyJmVbMF0pPj4+MixkZXBlbmRzT246MyZlWzBdLGlzRGVwZW5kZWRPbjooMTkyJmVbMV0pPj4+NixoYXNSZWR1bmRhbmN5Oig0OCZlWzFdKT4+PjQscGFkZGluZ1ZhbHVlOigxNCZlWzFdKT4+PjEsaXNOb25TeW5jU2FtcGxlOjEmZVsxXSxkZWdyYWRhdGlvblByaW9yaXR5OmVbMl08PDh8ZVszXX19fSx7a2V5OiJtb292VG9UcmFjayIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhLG4saT1lLnRyYWs7aWYoaSYmaS5sZW5ndGgpe3ZhciBzPWkuZmluZCgoZnVuY3Rpb24oZSl7dmFyIHQscjtyZXR1cm4idmlkZSI9PT0obnVsbD09PSh0PWUubWRpYSl8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LmhkbHIpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhbmRsZXJUeXBlKX0pKSxvPWkuZmluZCgoZnVuY3Rpb24oZSl7dmFyIHQscjtyZXR1cm4ic291biI9PT0obnVsbD09PSh0PWUubWRpYSl8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LmhkbHIpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhbmRsZXJUeXBlKX0pKTtpZihzJiZ0KXt2YXIgdSxjLGwsZCxmLGgscCx2PXQseT1udWxsPT09KHU9cy50a2hkKXx8dm9pZCAwPT09dT92b2lkIDA6dS50cmFja0lkO251bGwhPXkmJih2LmlkPXMudGtoZC50cmFja0lkKSx2LnRraGREdXJhdGlvbj1zLnRraGQuZHVyYXRpb24sdi5tdmhkRHVydGlvbj1lLm12aGQuZHVyYXRpb24sdi5tdmhkVGltZWNhbGU9ZS5tdmhkLnRpbWVzY2FsZSx2LnRpbWVzY2FsZT12LmZvcm1hdFRpbWVzY2FsZT1zLm1kaWEubWRoZC50aW1lc2NhbGUsdi5kdXJhdGlvbj1zLm1kaWEubWRoZC5kdXJhdGlvbnx8di5tdmhkRHVydGlvbi92Lm12aGRUaW1lY2FsZSp2LnRpbWVzY2FsZTt2YXIgbSxnLGssYixfLHcseCxBLEI9cy5tZGlhLm1pbmYuc3RibC5zdHNkLmVudHJpZXNbMF07aWYodi53aWR0aD1CLndpZHRoLHYuaGVpZ2h0PUIuaGVpZ2h0LEIucGFzcCYmKHYuc2FyUmF0aW89W0IucGFzcC5oU3BhY2luZyxCLnBhc3AudlNwYWNpbmddKSxCLmh2Y0Mpdi5jb2RlY1R5cGU9Uyx2LmNvZGVjPUIuaHZjQy5jb2RlYyx2LnZwcz1CLmh2Y0MudnBzLHYuc3BzPUIuaHZjQy5zcHMsdi5wcHM9Qi5odmNDLnBwcyx2Lmh2Y0M9Qi5odmNDLmRhdGE7ZWxzZXtpZighQi5hdmNDKXRocm93IG5ldyBFcnJvcigidW5rbm93biB2aWRlbyBzdHNkIGVudHJ5Iik7di5jb2RlYz1CLmF2Y0MuY29kZWMsdi5zcHM9Qi5hdmNDLnNwcyx2LnBwcz1CLmF2Y0MucHBzfWlmKHYucHJlc2VudD0hMCx2LmV4dD17fSx2LmV4dC5zdHNzPW51bGw9PT0oYz1zLm1kaWEpfHx2b2lkIDA9PT1jfHxudWxsPT09KGw9Yy5taW5mKXx8dm9pZCAwPT09bHx8bnVsbD09PShkPWwuc3RibCl8fHZvaWQgMD09PWQ/dm9pZCAwOmQuc3Rzcyx2LmV4dC5jdHRzPW51bGw9PT0oZj1zLm1kaWEpfHx2b2lkIDA9PT1mfHxudWxsPT09KGg9Zi5taW5mKXx8dm9pZCAwPT09aHx8bnVsbD09PShwPWguc3RibCl8fHZvaWQgMD09PXA/dm9pZCAwOnAuY3R0cyxCJiYiZW5jdiI9PT1CLnR5cGUpdi5pc1ZpZGVvRW5jcnlwdGlvbj0hMCxCLmRlZmF1bHRfS0lEPW51bGw9PT0obT1CLnNpbmYpfHx2b2lkIDA9PT1tfHxudWxsPT09KGc9bS5zY2hpKXx8dm9pZCAwPT09Zz92b2lkIDA6Zy50ZW5jLmRlZmF1bHRfS0lELEIuZGVmYXVsdF9Jc0VuY3J5cHRlZD1udWxsPT09KGs9Qi5zaW5mKXx8dm9pZCAwPT09a3x8bnVsbD09PShiPWsuc2NoaSl8fHZvaWQgMD09PWI/dm9pZCAwOmIudGVuYy5kZWZhdWx0X0lzRW5jcnlwdGVkLEIuZGVmYXVsdF9JVl9zaXplPW51bGw9PT0oXz1CLnNpbmYpfHx2b2lkIDA9PT1ffHxudWxsPT09KHc9Xy5zY2hpKXx8dm9pZCAwPT09dz92b2lkIDA6dy50ZW5jLmRlZmF1bHRfSVZfc2l6ZSx2LnZpZGVvU2VuYz1zLm1kaWEubWluZi5zdGJsLnNlbmMmJnMubWRpYS5taW5mLnN0Ymwuc2VuYy5zYW1wbGVzLEIuZGF0YV9mb3JtYXQ9bnVsbD09PSh4PUIuc2luZil8fHZvaWQgMD09PXh8fG51bGw9PT0oQT14LmZybWEpfHx2b2lkIDA9PT1BP3ZvaWQgMDpBLmRhdGFfZm9ybWF0LHYudXNlRU1FPWUudXNlRU1FLHYua2lkVmFsdWU9ZS5raWRWYWx1ZSx2LnBzc2g9ZS5wc3NoLHYuZW5jdj1CfWlmKG8mJnIpe3ZhciBULEMsVSxQLEkseixNLFIsTyxMPXIsVj1udWxsPT09KFQ9by50a2hkKXx8dm9pZCAwPT09VD92b2lkIDA6VC50cmFja0lkO251bGwhPVYmJihMLmlkPW8udGtoZC50cmFja0lkKSxMLnRraGREdXJhdGlvbj1vLnRraGQuZHVyYXRpb24sTC5tdmhkRHVydGlvbj1lLm12aGQuZHVyYXRpb24sTC5tdmhkVGltZWNhbGU9ZS5tdmhkLnRpbWVzY2FsZSxMLnRpbWVzY2FsZT1MLmZvcm1hdFRpbWVzY2FsZT1vLm1kaWEubWRoZC50aW1lc2NhbGUsTC5kdXJhdGlvbj1vLm1kaWEubWRoZC5kdXJhdGlvbnx8TC5tdmhkRHVydGlvbi9MLm12aGRUaW1lY2FsZSpMLnRpbWVzY2FsZTt2YXIgRixOLGosRyxILEsscSxXLFg9by5tZGlhLm1pbmYuc3RibC5zdHNkLmVudHJpZXNbMF07c3dpdGNoKEwuc2FtcGxlU2l6ZT1YLnNhbXBsZVNpemUsTC5zYW1wbGVSYXRlPVguc2FtcGxlUmF0ZSxMLmNoYW5uZWxDb3VudD1YLmNoYW5uZWxDb3VudCxMLnByZXNlbnQ9ITAsWC50eXBlKXtjYXNlImFsYXciOkwuY29kZWNUeXBlPUwuY29kZWM9RCxMLnNhbXBsZVJhdGU9OGUzO2JyZWFrO2Nhc2UidWxhdyI6TC5jb2RlY1R5cGU9TC5jb2RlYz1FLEwuc2FtcGxlUmF0ZT04ZTM7YnJlYWs7ZGVmYXVsdDpMLnNhbXBsZUR1cmF0aW9uPXNlLmdldEZyYW1lRHVyYXRpb24oTC5zYW1wbGVSYXRlLEwudGltZXNjYWxlKSxMLnNhbXBsZVJhdGVJbmRleD1zZS5nZXRSYXRlSW5kZXhCeVJhdGUoTC5zYW1wbGVSYXRlKSxMLm9iamVjdFR5cGU9KG51bGw9PT0oYT1YLmVzZHMpfHx2b2lkIDA9PT1hP3ZvaWQgMDphLm9iamVjdFR5cGUpfHwyLFguZXNkcyYmKEwuY29uZmlnPUFycmF5LmZyb20oWC5lc2RzLmNvbmZpZykpLEwuY29kZWM9KG51bGw9PT0obj1YLmVzZHMpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLmNvZGVjKXx8Im1wNGEuNDAuMiJ9aWYoTC5zYW1wbGVEdXJhdGlvbj1zZS5nZXRGcmFtZUR1cmF0aW9uKEwuc2FtcGxlUmF0ZSxMLnRpbWVzY2FsZSksTC5vYmplY3RUeXBlPShudWxsPT09KEM9WC5lc2RzKXx8dm9pZCAwPT09Qz92b2lkIDA6Qy5vYmplY3RUeXBlKXx8MixYLmVzZHMmJihYLmVzZHMuY29uZmlnP0wuY29uZmlnPUFycmF5LmZyb20oWC5lc2RzLmNvbmZpZyk6Y29uc29sZS53YXJuKCJlc2RzIGNvbmZpZyBpcyBudWxsIikpLEwuY29kZWM9KG51bGw9PT0oVT1YLmVzZHMpfHx2b2lkIDA9PT1VP3ZvaWQgMDpVLmNvZGVjKXx8Im1wNGEuNDAuMiIsTC5zYW1wbGVSYXRlSW5kZXg9c2UuZ2V0UmF0ZUluZGV4QnlSYXRlKEwuc2FtcGxlUmF0ZSksTC5leHQ9e30sTC5leHQuc3Rzcz1udWxsPT09KFA9by5tZGlhKXx8dm9pZCAwPT09UHx8bnVsbD09PShJPVAubWluZil8fHZvaWQgMD09PUl8fG51bGw9PT0oej1JLnN0YmwpfHx2b2lkIDA9PT16P3ZvaWQgMDp6LnN0c3MsTC5leHQuY3R0cz1udWxsPT09KE09by5tZGlhKXx8dm9pZCAwPT09TXx8bnVsbD09PShSPU0ubWluZil8fHZvaWQgMD09PVJ8fG51bGw9PT0oTz1SLnN0YmwpfHx2b2lkIDA9PT1PP3ZvaWQgMDpPLmN0dHMsTC5wcmVzZW50PSEwLFgmJiJlbmNhIj09PVgudHlwZSlMLmlzQXVkaW9FbmNyeXB0aW9uPSEwLFguZGF0YV9mb3JtYXQ9bnVsbD09PShGPVguc2luZil8fHZvaWQgMD09PUZ8fG51bGw9PT0oTj1GLmZybWEpfHx2b2lkIDA9PT1OP3ZvaWQgMDpOLmRhdGFfZm9ybWF0LFguZGVmYXVsdF9LSUQ9bnVsbD09PShqPVguc2luZil8fHZvaWQgMD09PWp8fG51bGw9PT0oRz1qLnNjaGkpfHx2b2lkIDA9PT1HP3ZvaWQgMDpHLnRlbmMuZGVmYXVsdF9LSUQsWC5kZWZhdWx0X0lzRW5jcnlwdGVkPW51bGw9PT0oSD1YLnNpbmYpfHx2b2lkIDA9PT1IfHxudWxsPT09KEs9SC5zY2hpKXx8dm9pZCAwPT09Sz92b2lkIDA6Sy50ZW5jLmRlZmF1bHRfSXNFbmNyeXB0ZWQsWC5kZWZhdWx0X0lWX3NpemU9bnVsbD09PShxPVguc2luZil8fHZvaWQgMD09PXF8fG51bGw9PT0oVz1xLnNjaGkpfHx2b2lkIDA9PT1XP3ZvaWQgMDpXLnRlbmMuZGVmYXVsdF9JVl9zaXplLEwuYXVkaW9TZW5jPW8ubWRpYS5taW5mLnN0Ymwuc2VuYyYmby5tZGlhLm1pbmYuc3RibC5zZW5jLnNhbXBsZXMsTC51c2VFTUU9ZS51c2VFTUUsTC5raWRWYWx1ZT1lLmtpZFZhbHVlLEwuZW5jYT1YfWlmKHImJihyLmlzVmlkZW9FbmNyeXB0aW9uPSEhdCYmdC5pc1ZpZGVvRW5jcnlwdGlvbiksdCYmKHQuaXNBdWRpb0VuY3J5cHRpb249ISFyJiZyLmlzQXVkaW9FbmNyeXB0aW9uKSxudWxsIT10JiZ0LmVuY3Z8fG51bGwhPXImJnIuZW5jYSl7dmFyIFksWixRPW51bGw9PXR8fG51bGw9PT0oWT10LmVuY3YpfHx2b2lkIDA9PT1ZP3ZvaWQgMDpZLmRlZmF1bHRfS0lELEo9bnVsbD09cnx8bnVsbD09PShaPXIuZW5jYSl8fHZvaWQgMD09PVo/dm9pZCAwOlouZGVmYXVsdF9LSUQsJD1RfHxKPyhRfHxKKS5qb2luKCIiKTpudWxsO3QmJih0LmtpZD0kKSxyJiYoci5raWQ9JCl9cmV0dXJuIHQmJih0LmZsYWdzPTM4NDEpLHImJihyLmZsYWdzPTE3OTMpLHt2aWRlb1RyYWNrOnQsYXVkaW9UcmFjazpyfX19fSx7a2V5OiJldmFsdWF0ZURlZmF1bHREdXJhdGlvbiIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhLG49bnVsbD09dHx8bnVsbD09PShhPXQuc2FtcGxlcyl8fHZvaWQgMD09PWE/dm9pZCAwOmEubGVuZ3RoO3JldHVybiBuPzEwMjQqbi90LnRpbWVzY2FsZSplLnRpbWVzY2FsZS9yOjEwMjR9fSx7a2V5OiJtb29mVG9TYW1wbGVzIix2YWx1ZTpmdW5jdGlvbih0LHIsYSl7dmFyIG49e307cmV0dXJuIHQubWZoZCYmKHImJihyLnNlcXVlbmNlTnVtYmVyPXQubWZoZC5zZXF1ZW5jZU51bWJlciksYSYmKGEuc2VxdWVuY2VOdW1iZXI9dC5tZmhkLnNlcXVlbmNlTnVtYmVyKSksdC50cmFmLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBpPXQudGZoZCxzPXQudGZkdCxvPXQudHJ1bjtpZihpJiZvKXtzJiYociYmci5pZD09PWkudHJhY2tJZCYmKHIuYmFzZU1lZGlhRGVjb2RlVGltZT1zLmJhc2VNZWRpYURlY29kZVRpbWUpLGEmJmEuaWQ9PT1pLnRyYWNrSWQmJihhLmJhc2VNZWRpYURlY29kZVRpbWU9cy5iYXNlTWVkaWFEZWNvZGVUaW1lKSk7dmFyIHU9aS5kZWZhdWx0U2FtcGxlU2l6ZXx8MCxjPWkuZGVmYXVsdFNhbXBsZUR1cmF0aW9ufHxlLmV2YWx1YXRlRGVmYXVsdER1cmF0aW9uKHIsYSxvLnNhbXBsZXMubGVuZ3RofHxvLnNhbXBsZUNvdW50KSxsPW8uZGF0YU9mZnNldHx8MCxkPTAsZj0tMTtpZighby5zYW1wbGVzLmxlbmd0aCYmby5zYW1wbGVDb3VudCl7bltpLnRyYWNrSWRdPVtdO2Zvcih2YXIgaD0wO2g8by5zYW1wbGVDb3VudDtoKyspbltpLnRyYWNrSWRdLnB1c2goe29mZnNldDpsLGR0czpkLGR1cmF0aW9uOmMsc2l6ZTp1fSksZCs9YyxsKz11fWVsc2UgbltpLnRyYWNrSWRdPW8uc2FtcGxlcy5tYXAoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuKGU9e29mZnNldDpsLGR0czpkLHB0czpkKyhlLmN0c3x8MCksZHVyYXRpb246ZS5kdXJhdGlvbnx8YyxzaXplOmUuc2l6ZXx8dSxnb3BJZDpmLGtleWZyYW1lOjA9PT10fHxudWxsIT09ZS5mbGFncyYmdm9pZCAwIT09ZS5mbGFncyYmKDY1NTM2JmUuZmxhZ3MpPj4+MCE9NjU1MzZ9KS5rZXlmcmFtZSYmKGYrKyxlLmdvcElkPWYpLGQrPWUuZHVyYXRpb24sbCs9ZS5zaXplLGV9KSl9fSkpLG59fSx7a2V5OiJtb292VG9TYW1wbGVzIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1lLnRyYWs7aWYodCYmdC5sZW5ndGgpe3ZhciByPXQuZmluZCgoZnVuY3Rpb24oZSl7dmFyIHQscjtyZXR1cm4idmlkZSI9PT0obnVsbD09PSh0PWUubWRpYSl8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LmhkbHIpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhbmRsZXJUeXBlKX0pKSxhPXQuZmluZCgoZnVuY3Rpb24oZSl7dmFyIHQscjtyZXR1cm4ic291biI9PT0obnVsbD09PSh0PWUubWRpYSl8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LmhkbHIpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmhhbmRsZXJUeXBlKX0pKTtpZihyfHxhKXt2YXIgbixpO2lmKHIpe3ZhciBzLG8sdT1udWxsPT09KHM9ci5tZGlhKXx8dm9pZCAwPT09c3x8bnVsbD09PShvPXMubWluZil8fHZvaWQgMD09PW8/dm9pZCAwOm8uc3RibDtpZighdSlyZXR1cm47dmFyIGM9dS5zdHRzLGw9dS5zdHNjLGQ9dS5zdHN6LGY9dS5zdGNvLGg9dS5zdHNzLHA9dS5jdHRzO2lmKCEoYyYmbCYmZCYmZiYmaCkpcmV0dXJuO249dmUoYyxsLGQsZixwLGgpfWlmKGEpe3ZhciB2LHksbSxnPW51bGw9PT0odj1hLm1kaWEpfHx2b2lkIDA9PT12fHxudWxsPT09KHk9di5taW5mKXx8dm9pZCAwPT09eT92b2lkIDA6eS5zdGJsO2lmKCFnKXJldHVybjt2YXIgaz1udWxsPT09KG09YS5tZGlhLm1kaGQpfHx2b2lkIDA9PT1tP3ZvaWQgMDptLnRpbWVzY2FsZSxiPWcuc3R0cyxfPWcuc3RzYyx3PWcuc3Rzeix4PWcuc3RjbztpZighKGsmJmImJl8mJncmJngpKXJldHVybjtpPXZlKGIsXyx3LHgpfXJldHVybnt2aWRlb1NhbXBsZXM6bixhdWRpb1NhbXBsZXM6aX19fX19XSksZX0oKTtmdW5jdGlvbiB2ZShlLHQscixhLG4saSl7dmFyIHMsbyx1LGM9W10sbD1udWxsPT1uP3ZvaWQgMDpuLmVudHJpZXMsZD10LmVudHJpZXMsZj1hLmVudHJpZXMsaD1yLmVudHJ5U2l6ZXMscD1udWxsPT1pP3ZvaWQgMDppLmVudHJpZXM7cCYmKHM9e30scC5mb3JFYWNoKChmdW5jdGlvbihlKXtzW2UtMV09ITB9KSkpLGwmJihvPVtdLGwuZm9yRWFjaCgoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY291bnQscj1lLm9mZnNldCxhPTA7YTx0O2ErKylvLnB1c2gocil9KSkpO3ZhciB2PS0xLHk9MCxtPTAsZz0wLGs9MCxiPTAsXz1kWzBdLnNhbXBsZXNQZXJDaHVuayx3PWRbMV0/ZFsxXS5maXJzdENodW5rLTE6MS8wO3JldHVybiBlLmVudHJpZXMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuY291bnQsYT1lLmRlbHRhLG49MDtuPHQ7bisrKXU9e2R0czp5LGR1cmF0aW9uOmEsc2l6ZTpoW21dfHxyLnNhbXBsZVNpemUsb2Zmc2V0OmZbZ10rYixpbmRleDptfSxwJiYodS5rZXlmcmFtZT1zW21dLHUua2V5ZnJhbWUmJnYrKyx1LmdvcElkPXYpLG8mJm08by5sZW5ndGgmJih1LnB0cz11LmR0cytvW21dKSxjLnB1c2godSkseSs9YSwrK208Xz9iKz11LnNpemU6KGcrKyxiPTAsZz49dyYmKGsrKyx3PWRbaysxXT9kW2srMV0uZmlyc3RDaHVuay0xOjEvMCksXys9ZFtrXS5zYW1wbGVzUGVyQ2h1bmspfSkpLGN9ZnVuY3Rpb24geWUoZSx0KXtyZXR1cm4gZS5kYXRhUmVmZXJlbmNlSW5kZXg9Sih0LDYpLGUud2lkdGg9Sih0LDI0KSxlLmhlaWdodD1KKHQsMjYpLGUuaG9yaXpyZXNvbHV0aW9uPSQodCwyOCksZS52ZXJ0cmVzb2x1dGlvbj0kKHQsMzIpLGUuZnJhbWVDb3VudD1KKHQsNDApLGUuZGVwdGg9Sih0LDc0KSw3OH1mdW5jdGlvbiBtZShlLHQpe3JldHVybiBlLmRhdGFSZWZlcmVuY2VJbmRleD1KKHQsNiksZS5jaGFubmVsQ291bnQ9Sih0LDE2KSxlLnNhbXBsZVNpemU9Sih0LDE4KSxlLnNhbXBsZVJhdGU9JCh0LDI0KS82NTUzNiwyOH1mdW5jdGlvbiBnZShlLHQscil7aWYoZSl7aWYoZS5zaXplIT09ZS5kYXRhLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3IoImJveCAiLmNvbmNhdChlLnR5cGUsIiBzaXplICE9PSBkYXRhLmxlbmd0aCIpKTt2YXIgYT17c3RhcnQ6ZS5zdGFydCxzaXplOmUuc2l6ZSxoZWFkZXJTaXplOmUuaGVhZGVyU2l6ZSx0eXBlOmUudHlwZX07cmV0dXJuIHQmJihhLnZlcnNpb249ZS5kYXRhW2UuaGVhZGVyU2l6ZV0sYS5mbGFncz1mdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MDtyZXR1cm4oZVt0XTw8MTYpKyhlW3QrMV08PDgpKyhlW3QrMl18fDApfShlLmRhdGEsZS5oZWFkZXJTaXplKzEpLGEuaGVhZGVyU2l6ZSs9NCkscihhLGUuZGF0YS5zdWJhcnJheShhLmhlYWRlclNpemUpLGEuc3RhcnQrYS5oZWFkZXJTaXplKSxhfX12YXIga2U9ZnVuY3Rpb24oZSx0LHIpe2Zvcih2YXIgYT1TdHJpbmcociksbj10Pj4wLGk9TWF0aC5jZWlsKG4vYS5sZW5ndGgpLHM9W10sbz1TdHJpbmcoZSk7aS0tOylzLnB1c2goYSk7cmV0dXJuIHMuam9pbigiIikuc3Vic3RyaW5nKDAsbi1vLmxlbmd0aCkrb30sYmU9ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KHQpLGE9MDthPHQ7YSsrKXJbYV09YXJndW1lbnRzW2FdO3JldHVybiByLmZvckVhY2goKGZ1bmN0aW9uKHQpe2UucHVzaChrZShOdW1iZXIodCkudG9TdHJpbmcoMTYpLDIsMCkpfSkpLGVbMF19O2Z1bmN0aW9uIF9lKGUpe2Zvcih2YXIgdD0wLHI9YXJndW1lbnRzLmxlbmd0aCxhPW5ldyBBcnJheShyPjE/ci0xOjApLG49MTtuPHI7bisrKWFbbi0xXT1hcmd1bWVudHNbbl07YS5mb3JFYWNoKChmdW5jdGlvbihlKXt0Kz1lLmxlbmd0aH0pKTt2YXIgaT1uZXcgZSh0KSxzPTA7cmV0dXJuIGEuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS5zZXQoZSxzKSxzKz1lLmxlbmd0aH0pKSxpfXZhciB3ZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXtyKHRoaXMsZSksdGhpcy5idWZmZXI9bmV3IFVpbnQ4QXJyYXkoMCl9cmV0dXJuIG4oZSxbe2tleToid3JpdGUiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPXRoaXMsdD1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KHQpLGE9MDthPHQ7YSsrKXJbYV09YXJndW1lbnRzW2FdO3IuZm9yRWFjaCgoZnVuY3Rpb24odCl7dD9lLmJ1ZmZlcj1fZShVaW50OEFycmF5LGUuYnVmZmVyLHQpOndpbmRvdy5jb25zb2xlLndhcm4odCl9KSl9fV0sW3trZXk6IndyaXRlVWludDE2Iix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW2U+PjgmMjU1LDI1NSZlXSl9fSx7a2V5OiJ3cml0ZVVpbnQzMiIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIG5ldyBVaW50OEFycmF5KFtlPj4yNCxlPj4xNiYyNTUsZT4+OCYyNTUsMjU1JmVdKX19XSksZX0oKSx4ZT1NYXRoLnBvdygyLDMyKS0xLFNlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3IodGhpcyxlKX1yZXR1cm4gbihlLG51bGwsW3trZXk6ImJveCIsdmFsdWU6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodD4xP3QtMTowKSxhPTE7YTx0O2ErKylyW2EtMV09YXJndW1lbnRzW2FdO3ZhciBuPTgrKHI9ci5maWx0ZXIoQm9vbGVhbikpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSt0LmJ5dGVMZW5ndGh9KSwwKSxpPW5ldyBVaW50OEFycmF5KG4pO2lbMF09bj4+MjQmMjU1LGlbMV09bj4+MTYmMjU1LGlbMl09bj4+OCYyNTUsaVszXT0yNTUmbixpLnNldChlLDQpO3ZhciBzPTg7cmV0dXJuIHIuZm9yRWFjaCgoZnVuY3Rpb24oZSl7aS5zZXQoZSxzKSxzKz1lLmJ5dGVMZW5ndGh9KSksaX19LHtrZXk6ImZ0eXAiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiB0LmZpbmQoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnR5cGU9PT1iJiZlLmNvZGVjVHlwZT09PVN9KSk/ZS5GVFlQSEVWMTplLkZUWVBBVkMxfX0se2tleToiaW5pdFNlZ21lbnQiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBaKGUuZnR5cCh0KSxlLm1vb3YodCkpfX0se2tleToicHNzaCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoWzEsMCwwLDBdLmNvbmNhdChbMTYsMTE5LDIzOSwyMzYsMTkyLDE3OCw3NywyLDE3MiwyMjcsNjAsMzAsODIsMjI2LDI1MSw3NV0sWzAsMCwwLDFdLGFlKHQua2lkKSxbMCwwLDAsMF0pKTtyZXR1cm4gZS5ib3goZS50eXBlcy5wc3NoLHIpfX0se2tleToibW9vdiIsdmFsdWU6ZnVuY3Rpb24odCl7aWYodFswXS51c2VFTUUmJih0WzBdLmVuY3Z8fHRbMF0uZW5jYSkpe3RbMF0ucHNzaHx8KHRbMF0ucHNzaD17a2lkOnRbMF0ua2lkfSk7dmFyIHI9dGhpcy5wc3NoKHRbMF0ucHNzaCk7cmV0dXJuIGUuYm94LmFwcGx5KGUsW2UudHlwZXMubW9vdixlLm12aGQodFswXS5tdmhkRHVydGlvbnx8dFswXS5kdXJhdGlvbix0WzBdLm12aGRUaW1lY2FsZXx8dFswXS50aW1lc2NhbGUpLGUubXZleCh0KV0uY29uY2F0KHkodC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWsodCl9KSkpLFtyXSkpfXJldHVybiBlLmJveC5hcHBseShlLFtlLnR5cGVzLm1vb3YsZS5tdmhkKHRbMF0ubXZoZER1cnRpb258fHRbMF0uZHVyYXRpb24sdFswXS5tdmhkVGltZWNhbGV8fHRbMF0udGltZXNjYWxlKV0uY29uY2F0KHkodC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWsodCl9KSkpLFtlLm12ZXgodCldKSl9fSx7a2V5OiJtdmhkIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06OWU0LGE9ZS5ib3goZS50eXBlcy5tdmhkLG5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCxyPj4yNCYyNTUscj4+MTYmMjU1LHI+PjgmMjU1LDI1NSZyLHQ+PjI0JjI1NSx0Pj4xNiYyNTUsdD4+OCYyNTUsMjU1JnQsMCwxLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsNjQsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjU1LDI1NSwyNTUsMjU1XSkpO3JldHVybiBhfX0se2tleToidHJhayIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMudHJhayxlLnRraGQodC5pZCx0LnRraGREdXJhdGlvbnx8MCx0LndpZHRoLHQuaGVpZ2h0KSxlLm1kaWEodCkpfX0se2tleToidGtoZCIsdmFsdWU6ZnVuY3Rpb24odCxyKXt2YXIgYT1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06MCxuPWFyZ3VtZW50cy5sZW5ndGg+MyYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTowLGk9ZS5ib3goZS50eXBlcy50a2hkLG5ldyBVaW50OEFycmF5KFswLDAsMCw3LDAsMCwwLDAsMCwwLDAsMCx0Pj4yNCYyNTUsdD4+MTYmMjU1LHQ+PjgmMjU1LDI1NSZ0LDAsMCwwLDAscj4+MjQmMjU1LHI+PjE2JjI1NSxyPj44JjI1NSwyNTUmciwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCw2NCwwLDAsMCxhPj44JjI1NSwyNTUmYSwwLDAsbj4+OCYyNTUsMjU1Jm4sMCwwXSkpO3JldHVybiBpfX0se2tleToibWRpYSIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMubWRpYSxlLm1kaGQodC5kdXJhdGlvbix0LnRpbWVzY2FsZSksZS5oZGxyKHQudHlwZSksZS5taW5mKHQpKX19LHtrZXk6Im1kaGQiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTo5ZTQsYT1lLmJveChlLnR5cGVzLm1kaGQsbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLHI+PjI0JjI1NSxyPj4xNiYyNTUscj4+OCYyNTUsMjU1JnIsdD4+MjQmMjU1LHQ+PjE2JjI1NSx0Pj44JjI1NSwyNTUmdCw4NSwxOTYsMCwwXSkpO3JldHVybiBhfX0se2tleToiaGRsciIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMuaGRscixlLkhETFJfVFlQRVNbdF0pfX0se2tleToibWluZiIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMubWluZix0LnR5cGU9PT1iP2UuVk1IRDplLlNNSEQsZS5ESU5GLGUuc3RibCh0KSl9fSx7a2V5OiJzdGJsIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj1bXTtyZXR1cm4gdCYmdC5leHQmJnQuZXh0LnN0c3MmJnIucHVzaChlLnN0c3ModC5leHQuc3Rzcy5lbnRyaWVzKSksZS5ib3goZS50eXBlcy5zdGJsLGUuc3RzZCh0KSxlLlNUVFMsclswXSxlLlNUU0MsZS5TVFNaLGUuU1RDTyl9fSx7a2V5OiJzdHNkIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcjtyZXR1cm4gcj0iYXVkaW8iPT09dC50eXBlP3QudXNlRU1FJiZ0LmVuY2E/ZS5lbmNhKHQpOmUubXA0YSh0KTp0LnVzZUVNRSYmdC5lbmN2P2UuZW5jdih0KTplLmF2YzFoZXYxKHQpLGUuYm94KGUudHlwZXMuc3RzZCxuZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwxXSkscil9fSx7a2V5OiJlbmNhIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj10LmVuY2EuY2hhbm5lbENvdW50LGE9dC5lbmNhLnNhbXBsZVJhdGUsbj1uZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLHIsMCwxNiwwLDAsMCwwLGE+PjgmMjU1LDI1NSZhLDAsMF0pLGk9ZS5lc2RzKHQuY29uZmlnKSxzPWUuc2luZih0LmVuY2EpO3JldHVybiBlLmJveChlLnR5cGVzLmVuY2EsbixpLHMpfX0se2tleToiZW5jdiIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHIsYSxuPXQuc3BzLmxlbmd0aD4wP3Quc3BzWzBdOltdLGk9dC5wcHMubGVuZ3RoPjA/dC5wcHNbMF06W10scz10LndpZHRoLG89dC5oZWlnaHQsdT10LnNhclJhdGlvWzBdLGM9dC5zYXJSYXRpb1sxXSxsPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCxzPj44JjI1NSwyNTUmcyxvPj44JjI1NSwyNTUmbywwLDcyLDAsMCwwLDcyLDAsMCwwLDAsMCwwLDAsMSwxOCwxMDAsOTcsMTA1LDEwOCwxMjEsMTA5LDExMSwxMTYsMTA1LDExMSwxMTAsNDcsMTA0LDEwOCwxMTUsNDYsMTA2LDExNSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMjQsMTcsMTddKSxkPW5ldyBVaW50OEFycmF5KChyPShhPVsxLG5bMV0sblsyXSxuWzNdLDI1NSwyMjUsbi5sZW5ndGg+Pj44JjI1NSwyNTUmbi5sZW5ndGhdKS5jb25jYXQuYXBwbHkoYSx5KG4pKS5jb25jYXQoWzEsaS5sZW5ndGg+Pj44JjI1NSwyNTUmaS5sZW5ndGhdKSkuY29uY2F0LmFwcGx5KHIseShpKSkpLGY9bmV3IFVpbnQ4QXJyYXkoWzAsMCw4OCw1NywwLDE1LDIwMCwxOTIsMCw0LDg2LDcyXSksaD1lLnNpbmYodC5lbmN2KSxwPW5ldyBVaW50OEFycmF5KFt1Pj4yNCx1Pj4xNiYyNTUsdT4+OCYyNTUsMjU1JnUsYz4+MjQsYz4+MTYmMjU1LGM+PjgmMjU1LDI1NSZjXSk7cmV0dXJuIGUuYm94KGUudHlwZXMuZW5jdixsLGUuYm94KGUudHlwZXMuYXZjQyxkKSxlLmJveChlLnR5cGVzLmJ0cnQsZiksaCxlLmJveChlLnR5cGVzLnBhc3AscCkpfX0se2tleToic2NoaSIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9bmV3IFVpbnQ4QXJyYXkoW10pLGE9ZS50ZW5jKHQpO3JldHVybiBlLmJveChlLnR5cGVzLnNjaGkscixhKX19LHtrZXk6InRlbmMiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwyNTUmdC5kZWZhdWx0X0lzRW5jcnlwdGVkLDI1NSZ0LmRlZmF1bHRfSVZfc2l6ZV0uY29uY2F0KGFlKHQuZGVmYXVsdF9LSUQpKSk7cmV0dXJuIGUuYm94KGUudHlwZXMudGVuYyxyKX19LHtrZXk6InNpbmYiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPW5ldyBVaW50OEFycmF5KFtdKSxhPW5ldyBVaW50OEFycmF5KFt0LmRhdGFfZm9ybWF0LmNoYXJDb2RlQXQoMCksdC5kYXRhX2Zvcm1hdC5jaGFyQ29kZUF0KDEpLHQuZGF0YV9mb3JtYXQuY2hhckNvZGVBdCgyKSx0LmRhdGFfZm9ybWF0LmNoYXJDb2RlQXQoMyldKSxuPW5ldyBVaW50OEFycmF5KFswLDAsMCwwLDk5LDEwMSwxMTAsOTksMCwxLDAsMF0pLGk9ZS5zY2hpKHQpO3JldHVybiBlLmJveChlLnR5cGVzLnNpbmYscixlLmJveChlLnR5cGVzLmZybWEsYSksZS5ib3goZS50eXBlcy5zY2htLG4pLGkpfX0se2tleToiYXZjMWhldjEiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQuY29kZWNUeXBlPT09UyxhPXI/ZS50eXBlcy5odmMxOmUudHlwZXMuYXZjMSxuPXI/ZS5odmNDKHQpOmUuYXZjQyh0KSxpPVtuZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsdC53aWR0aD4+OCYyNTUsMjU1JnQud2lkdGgsdC5oZWlnaHQ+PjgmMjU1LDI1NSZ0LmhlaWdodCwwLDcyLDAsMCwwLDcyLDAsMCwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwyNCwxNywxN10pLG5dO3JldHVybiByP2kucHVzaChlLmJveChlLnR5cGVzLmZpZWwsbmV3IFVpbnQ4QXJyYXkoWzEsMF0pKSk6dC5zYXJSYXRpbyYmdC5zYXJSYXRpby5sZW5ndGg+MSYmaS5wdXNoKGUucGFzcCh0LnNhclJhdGlvKSksZS5ib3guYXBwbHkoZSxbYV0uY29uY2F0KGkpKX19LHtrZXk6ImF2Y0MiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByLGEsbixpPVtdLHM9W107cmV0dXJuIHQuc3BzLmZvckVhY2goKGZ1bmN0aW9uKGUpe249ZS5ieXRlTGVuZ3RoLGkucHVzaChuPj4+OCYyNTUpLGkucHVzaCgyNTUmbiksaS5wdXNoLmFwcGx5KGkseShlKSl9KSksdC5wcHMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7bj1lLmJ5dGVMZW5ndGgscy5wdXNoKG4+Pj44JjI1NSkscy5wdXNoKDI1NSZuKSxzLnB1c2guYXBwbHkocyx5KGUpKX0pKSxlLmJveChlLnR5cGVzLmF2Y0MsbmV3IFVpbnQ4QXJyYXkoKHI9KGE9WzEsaVszXSxpWzRdLGlbNV0sMjU1LDIyNHx0LnNwcy5sZW5ndGhdKS5jb25jYXQuYXBwbHkoYSxpKS5jb25jYXQoW3QucHBzLmxlbmd0aF0pKS5jb25jYXQuYXBwbHkocixzKSkpfX0se2tleToiaHZjQyIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9dC5odmNDO2lmKHIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcnx8ciBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIHI7dmFyIGEsbj10LnZwcyxpPXQuc3BzLHM9dC5wcHM7aWYocil7dmFyIG89ci5nZW5lcmFsUHJvZmlsZUNvbXBhdGliaWxpdHlGbGFncyx1PXIuZ2VuZXJhbENvbnN0cmFpbnRJbmRpY2F0b3JGbGFncyxjPShuLmxlbmd0aCYmMSkrKGkubGVuZ3RoJiYxKSsocy5sZW5ndGgmJjEpO2E9WzEsci5nZW5lcmFsUHJvZmlsZVNwYWNlPDw2fHIuZ2VuZXJhbFRpZXJGbGFnPDw1fHIuZ2VuZXJhbFByb2ZpbGVJZGMsbz4+PjI0LG8+Pj4xNixvPj4+OCxvLHVbMF0sdVsxXSx1WzJdLHVbM10sdVs0XSx1WzVdLHIuZ2VuZXJhbExldmVsSWRjLDI0MCwwLDI1MiwyNTJ8ci5jaHJvbWFGb3JtYXRJZGMsMjQ4fHIuYml0RGVwdGhMdW1hTWludXM4LDI0OHxyLmJpdERlcHRoQ2hyb21hTWludXM4LDAsMCxyLm51bVRlbXBvcmFsTGF5ZXJzPDwzfHIudGVtcG9yYWxJZE5lc3RlZDw8MnwzLGNdO3ZhciBsPWZ1bmN0aW9uKGUpe3ZhciB0O2EucHVzaChlLmxlbmd0aD4+OCxlLmxlbmd0aCksKHQ9YSkucHVzaC5hcHBseSh0LHkoZSkpfTtuLmxlbmd0aCYmKGEucHVzaCgxNjAsMCxuLmxlbmd0aCksbi5mb3JFYWNoKGwpKSxpLmxlbmd0aCYmKGEucHVzaCgxNjEsMCxpLmxlbmd0aCksaS5mb3JFYWNoKGwpKSxzLmxlbmd0aCYmKGEucHVzaCgxNjIsMCxzLmxlbmd0aCkscy5mb3JFYWNoKGwpKX1lbHNlIGE9WzEsMSw5NiwwLDAsMCwxNDQsMCwwLDAsMCwwLDkzLDI0MCwwLDI1MiwyNTMsMjQ4LDI0OCwwLDAsMTUsMywxNjAsMCwxLDAsMjQsNjQsMSwxMiwxLDI1NSwyNTUsMSw5NiwwLDAsMywwLDE0NCwwLDAsMywwLDAsMywwLDkzLDE1MywxNTIsOSwxNjEsMCwxLDAsNDUsNjYsMSwxLDEsOTYsMCwwLDMsMCwxNDQsMCwwLDMsMCwwLDMsMCw5MywxNjAsMiwxMjgsMTI4LDQ1LDIyLDg5LDE1MywxNjQsMTQ3LDQzLDE1NCwxMjgsMTI4LDEyOCwxMzAsMCwwLDMsMCwyLDAsMCwzLDAsNTAsMTYsMTYyLDAsMSwwLDcsNjgsMSwxOTMsMTE0LDE4MCw5OCw2NF07cmV0dXJuIGUuYm94KGUudHlwZXMuaHZjQyxuZXcgVWludDhBcnJheShhKSl9fSx7a2V5OiJwYXNwIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj12KHQsMiksYT1yWzBdLG49clsxXTtyZXR1cm4gZS5ib3goZS50eXBlcy5wYXNwLG5ldyBVaW50OEFycmF5KFthPj4yNCxhPj4xNiYyNTUsYT4+OCYyNTUsMjU1JmEsbj4+MjQsbj4+MTYmMjU1LG4+PjgmMjU1LDI1NSZuXSkpfX0se2tleToibXA0YSIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMubXA0YSxuZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwxLDAsMCwwLDAsMCwwLDAsMCwwLHQuY2hhbm5lbENvdW50LDAsMTYsMCwwLDAsMCx0LnNhbXBsZVJhdGU+PjgmMjU1LDI1NSZ0LnNhbXBsZVJhdGUsMCwwXSksdC5jb25maWcubGVuZ3RoP2UuZXNkcyh0LmNvbmZpZyk6dm9pZCAwKX19LHtrZXk6ImVzZHMiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQubGVuZ3RoO3JldHVybiBlLmJveChlLnR5cGVzLmVzZHMsbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMywyMytyLDAsMCwwLDQsMTUrciw2NCwyMSwwLDYsMCwwLDAsMjE4LDE5MiwwLDAsMjE4LDE5Miw1XS5jb25jYXQoW3JdKS5jb25jYXQodCkuY29uY2F0KFs2LDEsMl0pKSl9fSx7a2V5OiJtdmV4Iix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3guYXBwbHkoZSxbZS50eXBlcy5tdmV4XS5jb25jYXQoeSh0Lm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIGUudHJleCh0LmlkKX0pKSkpKX19LHtrZXk6InRyZXgiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBlLmJveChlLnR5cGVzLnRyZXgsbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsdD4+MjQsdD4+MTYmMjU1LHQ+PjgmMjU1LDI1NSZ0LDAsMCwwLDEsMCwwLDAsMCwwLDAsMCwwLDAsMSwwLDFdKSl9fSx7a2V5OiJ0cmV4MSIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMudHJleCxuZXcgVWludDhBcnJheShbMCwwLDAsMCx0Pj4yNCx0Pj4xNiYyNTUsdD4+OCYyNTUsMjU1JnQsMCwwLDAsMSwwLDAsMiwwLDAsMCwwLDAsMCwxLDAsMF0pKX19LHtrZXk6InRyZXgyIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3goZS50eXBlcy50cmV4LG5ldyBVaW50OEFycmF5KFswLDAsMCwwLHQ+PjI0LHQ+PjE2JjI1NSx0Pj44JjI1NSwyNTUmdCwwLDAsMCwxLDAsMCw0LDAsMCwwLDAsMCwyLDAsMCwwXSkpfX0se2tleToibW9vZiIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94LmFwcGx5KGUsW2UudHlwZXMubW9vZixlLm1maGQodFswXS5zYW1wbGVzP3RbMF0uc2FtcGxlc1swXS5nb3BJZDowKV0uY29uY2F0KHkodC5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBlLnRyYWYodCl9KSkpKSl9fSx7a2V5OiJtZmhkIix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3goZS50eXBlcy5tZmhkLG5ldyBVaW50OEFycmF5KFswLDAsMCwwLHQ+PjI0LHQ+PjE2JjI1NSx0Pj44JjI1NSwyNTUmdF0pKX19LHtrZXk6InRyYWYiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPWUudGZoZCh0LmlkKSxhPWUudGZkdCh0LHQuYmFzZU1lZGlhRGVjb2RlVGltZSksbj0wO2lmKHQuaXNWaWRlbyYmdC52aWRlb1NlbmMmJnQudmlkZW9TZW5jLmZvckVhY2goKGZ1bmN0aW9uKGUpe24rPTgsZS5zdWJzYW1wbGVzJiZlLnN1YnNhbXBsZXMubGVuZ3RoJiYobis9MixuKz02KmUuc3Vic2FtcGxlcy5sZW5ndGgpfSkpLHQudmlkZW9TZW5jTGVuZ3RoPW4sdC51c2VFTUUmJih0LmlzVmlkZW9FbmNyeXB0aW9ufHx0LmlzQXVkaW9FbmNyeXB0aW9uKSl7aWYodC5pc1ZpZGVvRW5jcnlwdGlvbil7aWYodC5pc1ZpZGVvKXt2YXIgaT1lLnNhaXoodCkscz1lLnNhaW8odCksbz1lLnRydW4xKHQpLHU9ZS5zZW5jKHQpO3JldHVybiBlLmJveChlLnR5cGVzLnRyYWYscixhLGkscyxvLHUpfWlmKHQuaXNBdWRpb0VuY3J5cHRpb24pe3ZhciBjPWUuc2JncCgpLGw9ZS5zYWl6KHQpLGQ9ZS5zYWlvKHQpLGY9ZS5zZW5jKHQpLGg9ZS50cnVuMSh0KTtyZXR1cm4gZS5ib3goZS50eXBlcy50cmFmLHIsYSxjLGwsZCxmLGgpfXZhciBwPWUuc2JncCgpLHY9ZS50cnVuMSh0KTtyZXR1cm4gZS5ib3goZS50eXBlcy50cmFmLHIsYSxwLHYpfWlmKHQuaXNWaWRlbyl7dmFyIHk9ZS50cnVuMSh0KTtyZXR1cm4gZS5ib3goZS50eXBlcy50cmFmLHIsYSx5KX12YXIgbT1lLnNiZ3AoKSxnPWUuc2Fpeih0KSxrPWUuc2Fpbyh0KSxiPWUuc2VuYyh0KSxfPWUudHJ1bjEodCk7cmV0dXJuIGUuYm94KGUudHlwZXMudHJhZixyLGEsbSxnLGssYixfKX12YXIgdz1lLnNkdHAodCk7cmV0dXJuIGUuYm94KGUudHlwZXMudHJhZixyLGEsdyxlLnRydW4odC5zYW1wbGVzLHcuYnl0ZUxlbmd0aCs3NikpfX0se2tleToic2R0cCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9bmV3IHdlO3JldHVybiB0LnNhbXBsZXMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ci53cml0ZShuZXcgVWludDhBcnJheSh0LmlzVmlkZW8/W2Uua2V5ZnJhbWU/MzI6MTZdOlsxNl0pKX0pKSxlLmJveChlLnR5cGVzLnNkdHAsdGhpcy5leHRlbnNpb24oMCwwKSxyLmJ1ZmZlcil9fSx7a2V5OiJ0cnVuMSIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9bmV3IHdlLGE9d2Uud3JpdGVVaW50MzIodC5zYW1wbGVzLmxlbmd0aCksbj1udWxsO2lmKHQuaXNWaWRlbyl7dmFyIGk9dC52aWRlb1NlbmNMZW5ndGg7bj13ZS53cml0ZVVpbnQzMigxNip0LnNhbXBsZXMubGVuZ3RoK2krMTQ5KSwhdC5pc1ZpZGVvRW5jcnlwdGlvbiYmdC5pc0F1ZGlvRW5jcnlwdGlvbiYmKG49d2Uud3JpdGVVaW50MzIoMTYqdC5zYW1wbGVzLmxlbmd0aCs5MikpfWVsc2V7dmFyIHM9MTIqdC5zYW1wbGVzLmxlbmd0aCsxMjQ7dC5pc0F1ZGlvRW5jcnlwdGlvbiYmKHM9MTIqdC5zYW1wbGVzLmxlbmd0aCs4KnQuYXVkaW9TZW5jLmxlbmd0aCsxNzcpLG49d2Uud3JpdGVVaW50MzIocyl9cmV0dXJuIHQuc2FtcGxlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtyLndyaXRlKHdlLndyaXRlVWludDMyKGUuZHVyYXRpb24pKSxyLndyaXRlKHdlLndyaXRlVWludDMyKGUuc2l6ZSkpLHIud3JpdGUod2Uud3JpdGVVaW50MzIoZS5rZXlmcmFtZT8zMzU1NDQzMjo2NTUzNikpLHQuaXNWaWRlbyYmci53cml0ZSh3ZS53cml0ZVVpbnQzMihlLmN0cz9lLmN0czowKSl9KSksZS5ib3goZS50eXBlcy50cnVuLHRoaXMuZXh0ZW5zaW9uKDAsdC5mbGFncyksYSxuLHIuYnVmZmVyKX19LHtrZXk6InNlbmMiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPW5ldyB3ZSxhPXQuc2FtcGxlcy5sZW5ndGgsbj10LmlzVmlkZW8/MTY6OCxpPXQuaXNWaWRlbz8yOjAscz1bXSxvPTA7cmV0dXJuIHQuaXNWaWRlbz8ocz10LnZpZGVvU2VuYyxvPXQudmlkZW9TZW5jTGVuZ3RoKTpzPXQuYXVkaW9TZW5jLG89b3x8biphLHIud3JpdGUod2Uud3JpdGVVaW50MzIoMTYrbyksZS50eXBlcy5zZW5jLHRoaXMuZXh0ZW5zaW9uKDAsaSkpLHIud3JpdGUod2Uud3JpdGVVaW50MzIoYSkpLHMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTA7dDxlLkluaXRpYWxpemF0aW9uVmVjdG9yLmxlbmd0aDt0Kyspci53cml0ZShuZXcgVWludDhBcnJheShbZS5Jbml0aWFsaXphdGlvblZlY3Rvclt0XV0pKTtlLnN1YnNhbXBsZXMmJmUuc3Vic2FtcGxlcy5sZW5ndGgmJihyLndyaXRlKHdlLndyaXRlVWludDE2KGUuc3Vic2FtcGxlcy5sZW5ndGgpKSxlLnN1YnNhbXBsZXMuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ci53cml0ZSh3ZS53cml0ZVVpbnQxNihlLkJ5dGVzT2ZDbGVhckRhdGEpKSxyLndyaXRlKHdlLndyaXRlVWludDMyKGUuQnl0ZXNPZlByb3RlY3RlZERhdGEpKX0pKSl9KSksci5idWZmZXJ9fSx7a2V5OiJzYWlvIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj0xMip0LnNhbXBsZXMubGVuZ3RoKzE0MTshdC5pc1ZpZGVvJiZ0LmlzQXVkaW9FbmNyeXB0aW9uJiYocj0xNDkpO3ZhciBhPW5ldyBVaW50OEFycmF5KFsxLDAsMCwwLDAsMCwwLDEsMCwwLDAsMCxyPj4yNCYyNTUscj4+MTYmMjU1LHI+PjgmMjU1LDI1NSZyXSk7cmV0dXJuIGUuYm94KGUudHlwZXMuc2FpbyxhKX19LHtrZXk6InNhaXoiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQuc2FtcGxlcy5sZW5ndGgsYT1uZXcgVWludDhBcnJheShbMCwwLDAsMCwxNixyPj4yNCYyNTUscj4+MTYmMjU1LHI+PjgmMjU1LDI1NSZyXSk7cmV0dXJuIGUuYm94KGUudHlwZXMuc2FpeixhKX19LHtrZXk6InNiZ3AiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ9bmV3IFVpbnQ4QXJyYXkoWzExNCwxMTEsMTA4LDEwOCwwLDAsMCwxLDAsMCwxLDI1LDAsMCwwLDFdKTtyZXR1cm4gZS5ib3goZS50eXBlcy5zYmdwLHRoaXMuZXh0ZW5zaW9uKDAsMCksdCl9fSx7a2V5OiJleHRlbnNpb24iLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KFtlLHQ+PjE2JjI1NSx0Pj44JjI1NSwyNTUmdF0pfX0se2tleToidGZoZCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94KGUudHlwZXMudGZoZCxuZXcgVWludDhBcnJheShbMCwwLDAsMCx0Pj4yNCx0Pj4xNiYyNTUsdD4+OCYyNTUsMjU1JnRdKSl9fSx7a2V5OiJ0ZmR0Iix2YWx1ZTpmdW5jdGlvbih0LHIpe3ZhciBhPU1hdGguZmxvb3Ioci8oeGUrMSkpLG49TWF0aC5mbG9vcihyJSh4ZSsxKSk7cmV0dXJuIHQudXNlRU1FJiYodC5pc1ZpZGVvRW5jcnlwdGlvbnx8dC5pc0F1ZGlvRW5jcnlwdGlvbik/ZS5ib3goZS50eXBlcy50ZmR0LG5ldyBVaW50OEFycmF5KFswLDAsMCwwLG4+PjI0LG4+PjE2JjI1NSxuPj44JjI1NSwyNTUmbl0pKTplLmJveChlLnR5cGVzLnRmZHQsbmV3IFVpbnQ4QXJyYXkoWzEsMCwwLDAsYT4+MjQsYT4+MTYmMjU1LGE+PjgmMjU1LDI1NSZhLG4+PjI0LG4+PjE2JjI1NSxuPj44JjI1NSwyNTUmbl0pKX19LHtrZXk6InRydW4iLHZhbHVlOmZ1bmN0aW9uKHQscil7dmFyIGE9dC5sZW5ndGgsbj0xMisxNiphO3IrPTgrbjt2YXIgaT1uZXcgVWludDhBcnJheShuKTtpLnNldChbMCwwLDE1LDEsYT4+PjI0JjI1NSxhPj4+MTYmMjU1LGE+Pj44JjI1NSwyNTUmYSxyPj4+MjQmMjU1LHI+Pj4xNiYyNTUscj4+PjgmMjU1LDI1NSZyXSwwKTtmb3IodmFyIHM9MDtzPGE7cysrKXt2YXIgbz10W3NdLHU9by5kdXJhdGlvbixjPW8uc2l6ZSxsPW8uZmxhZyxkPXZvaWQgMD09PWw/e306bCxmPW8uY3RzLGg9dm9pZCAwPT09Zj8wOmY7aS5zZXQoW3U+Pj4yNCYyNTUsdT4+PjE2JjI1NSx1Pj4+OCYyNTUsMjU1JnUsYz4+PjI0JjI1NSxjPj4+MTYmMjU1LGM+Pj44JjI1NSwyNTUmYyxkLmlzTGVhZGluZzw8MnwobnVsbD09PWQuZGVwZW5kc09ufHx2b2lkIDA9PT1kLmRlcGVuZHNPbj8xOmQuZGVwZW5kc09uKSxkLmlzRGVwZW5kZWRPbjw8NnxkLmhhc1JlZHVuZGFuY3k8PDR8ZC5wYWRkaW5nVmFsdWU8PDF8KG51bGw9PT1kLmlzTm9uU3luY1NhbXBsZXx8dm9pZCAwPT09ZC5pc05vblN5bmNTYW1wbGU/MTpkLmlzTm9uU3luY1NhbXBsZSksNjE0NDAmZC5kZWdyYWRhdGlvblByaW9yaXR5LDE1JmQuZGVncmFkYXRpb25Qcmlvcml0eSxoPj4+MjQmMjU1LGg+Pj4xNiYyNTUsaD4+PjgmMjU1LDI1NSZoXSwxMisxNipzKX1yZXR1cm4gZS5ib3goZS50eXBlcy50cnVuLGkpfX0se2tleToibW9vdk1QNCIsdmFsdWU6ZnVuY3Rpb24odCl7cmV0dXJuIGUuYm94LmFwcGx5KGUsW2UudHlwZXMubW9vdixlLm12aGQodFswXS5kdXJhdGlvbix0WzBdLnRpbWVzY2FsZSldLmNvbmNhdCh5KHQubWFwKChmdW5jdGlvbih0KXtyZXR1cm4gZS50cmFja01QNCh0KX0pKSkpKX19LHtrZXk6InRyYWNrTVA0Iix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3goZS50eXBlcy50cmFrLGUudGtoZCh0LmlkLHQuZHVyYXRpb24sdC53aWR0aCx0LmhlaWdodCksZS5tZGlhTVA0KHQpKX19LHtrZXk6Im1kaWFNUDQiLHZhbHVlOmZ1bmN0aW9uKHQpe3JldHVybiBlLmJveChlLnR5cGVzLm1kaWEsZS5tZGhkKHQuZHVyYXRpb24sdC50aW1lc2NhbGUpLGUuaGRscih0LnR5cGUpLGUubWluZk1QNCh0KSl9fSx7a2V5OiJtaW5mTVA0Iix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3goZS50eXBlcy5taW5mLHQudHlwZT09PWI/ZS5WTUhEOmUuU01IRCxlLkRJTkYsZS5zdGJsTVA0KHQpKX19LHtrZXk6InN0YmxNUDQiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQuZXh0LGE9W2Uuc3RzZCh0KSxlLnN0dHMoci5zdHRzKSxlLnN0c2Moci5zdHNjKSxlLnN0c3ooci5zdHN6KSxlLnN0Y28oci5zdGNvKV07cmV0dXJuIHIuc3Rzcy5sZW5ndGgmJmEucHVzaChlLnN0c3Moci5zdHNzKSksci5jdHRzLmxlbmd0aCYmYS5wdXNoKGUuY3R0cyhyLmN0dHMpKSxlLmJveC5hcHBseShlLFtlLnR5cGVzLnN0YmxdLmNvbmNhdChhKSl9fSx7a2V5OiJzdHRzIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj10Lmxlbmd0aCxhPW5ldyBVaW50OEFycmF5KDgqciksbj0wO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUudmFsdWUscj1lLmNvdW50O2Euc2V0KFtyPj4yNCxyPj4xNiYyNTUscj4+OCYyNTUsMjU1JnIsdD4+MjQsdD4+MTYmMjU1LHQ+PjgmMjU1LDI1NSZ0XSxuKSxuKz04fSkpLGUuYm94KGUudHlwZXMuc3R0cyxaKG5ldyBVaW50OEFycmF5KFswLDAsMCwwLHI+PjI0LHI+PjE2JjI1NSxyPj44JjI1NSwyNTUmcl0pLGEpKX19LHtrZXk6InN0c2MiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQubGVuZ3RoLGE9bmV3IFVpbnQ4QXJyYXkoMTIqciksbj0wO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUuZmlyc3RDaHVuayxyPWUuc2FtcGxlc1BlckNodW5rLGk9ZS5zYW1wbGVEZXNjSW5kZXg7YS5zZXQoW3Q+PjI0LHQ+PjE2JjI1NSx0Pj44JjI1NSwyNTUmdCxyPj4yNCxyPj4xNiYyNTUscj4+OCYyNTUsMjU1JnIsaT4+MjQsaT4+MTYmMjU1LGk+PjgmMjU1LDI1NSZpXSxuKSxuKz0xMn0pKSxlLmJveChlLnR5cGVzLnN0c2MsWihuZXcgVWludDhBcnJheShbMCwwLDAsMCxyPj4yNCxyPj4xNiYyNTUscj4+OCYyNTUsMjU1JnJdKSxhKSl9fSx7a2V5OiJzdHN6Iix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj10Lmxlbmd0aCxhPW5ldyBVaW50OEFycmF5KDQqciksbj0wO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKGUpe2Euc2V0KFtlPj4yNCxlPj4xNiYyNTUsZT4+OCYyNTUsMjU1JmVdLG4pLG4rPTR9KSksZS5ib3goZS50eXBlcy5zdHN6LFoobmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMCxyPj4yNCxyPj4xNiYyNTUscj4+OCYyNTUsMjU1JnJdKSxhKSl9fSx7a2V5OiJzdGNvIix2YWx1ZTpmdW5jdGlvbih0KXt2YXIgcj10Lmxlbmd0aCxhPW5ldyBVaW50OEFycmF5KDQqciksbj0wO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKGUpe2Euc2V0KFtlPj4yNCxlPj4xNiYyNTUsZT4+OCYyNTUsMjU1JmVdLG4pLG4rPTR9KSksZS5ib3goZS50eXBlcy5zdGNvLFoobmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAscj4+MjQscj4+MTYmMjU1LHI+PjgmMjU1LDI1NSZyXSksYSkpfX0se2tleToic3RzcyIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9dC5sZW5ndGgsYT1uZXcgVWludDhBcnJheSg0KnIpLG49MDtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbihlKXthLnNldChbZT4+MjQsZT4+MTYmMjU1LGU+PjgmMjU1LDI1NSZlXSxuKSxuKz00fSkpLGUuYm94KGUudHlwZXMuc3RzcyxaKG5ldyBVaW50OEFycmF5KFswLDAsMCwwLHI+PjI0LHI+PjE2JjI1NSxyPj44JjI1NSwyNTUmcl0pLGEpKX19LHtrZXk6ImN0dHMiLHZhbHVlOmZ1bmN0aW9uKHQpe3ZhciByPXQubGVuZ3RoLGE9bmV3IFVpbnQ4QXJyYXkoOCpyKSxuPTA7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS52YWx1ZSxyPWUuY291bnQ7YS5zZXQoW3I+PjI0LHI+PjE2JjI1NSxyPj44JjI1NSwyNTUmcix0Pj4yNCx0Pj4xNiYyNTUsdD4+OCYyNTUsMjU1JnRdLG4pLG4rPTh9KSksZS5ib3goZS50eXBlcy5jdHRzLFoobmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAscj4+MjQscj4+MTYmMjU1LHI+PjgmMjU1LDI1NSZyXSksYSkpfX0se2tleToic3R5cCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZS5ib3goZS50eXBlcy5zdHlwLG5ldyBVaW50OEFycmF5KFsxMDksMTE1LDEwMCwxMDQsMCwwLDAsMCwxMDksMTE1LDEwMCwxMDQsMTA5LDExNSwxMDUsMTIwXSkpfX0se2tleToic2lkeCIsdmFsdWU6ZnVuY3Rpb24odCl7dmFyIHI9dC50aW1lc2NhbGUsYT10LnNhbXBsZXNbMF0uZHVyYXRpb24sbj1hKnQuc2FtcGxlcy5sZW5ndGgsaT10LnNhbXBsZXNbMF0uc2FtcGxlT2Zmc2V0KmEscz04O3Quc2FtcGxlcy5mb3JFYWNoKChmdW5jdGlvbihlKXtzKz1lLnNpemV9KSk7dmFyIG89MDtpZih0LmlzVmlkZW8pe3ZhciB1LGM9MDt0LnZpZGVvU2VuYyYmKHU9dC52aWRlb1NlbmMpLHQuaXNWaWRlbyYmdS5mb3JFYWNoKChmdW5jdGlvbihlKXtjKz04LGUuc3Vic2FtcGxlcyYmZS5zdWJzYW1wbGVzLmxlbmd0aCYmKGMrPTIsYys9NiplLnN1YnNhbXBsZXMubGVuZ3RoKX0pKSx0LnZpZGVvU2VuY0xlbmd0aD1jLG89cysxNDErMTYqdC5zYW1wbGVzLmxlbmd0aCtjLHQudXNlRU1FJiZ0LmlzQXVkaW9FbmNyeXB0aW9uJiYhdC5pc1ZpZGVvRW5jcnlwdGlvbiYmKG89cysxNip0LnNhbXBsZXMubGVuZ3RoKzg0KX1lbHNlIG89cysxMTYrMTIqdC5zYW1wbGVzLmxlbmd0aCx0LnVzZUVNRSYmdC5pc0F1ZGlvRW5jcnlwdGlvbiYmKG89cysxNjkrMTIqdC5zYW1wbGVzLmxlbmd0aCs4KnQuYXVkaW9TZW5jLmxlbmd0aCk7dmFyIGw9bmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMjU1JnQuaWQscj4+MjQmMjU1LHI+PjE2JjI1NSxyPj44JjI1NSwyNTUmcixpPj4yNCYyNTUsaT4+MTYmMjU1LGk+PjgmMjU1LDI1NSZpLDAsMCwwLDAsMCwwLDAsMSwwLG8+PjE2JjI1NSxvPj44JjI1NSwyNTUmbyxuPj4yNCYyNTUsbj4+MTYmMjU1LG4+PjgmMjU1LDI1NSZuLDE0NCwwLDAsMF0pO3JldHVybiBlLmJveChlLnR5cGVzLnNpZHgsbCl9fSx7a2V5OiJtZGF0Iix2YWx1ZTpmdW5jdGlvbih0KXtyZXR1cm4gZS5ib3goZS50eXBlcy5tZGF0LHQpfX1dKSxlfSgpO2koU2UsInR5cGVzIixbImF2YzEiLCJhdmNDIiwiaHZjMSIsImh2Y0MiLCJkaW5mIiwiZHJlZiIsImVzZHMiLCJmdHlwIiwiaGRsciIsIm1kYXQiLCJtZGhkIiwibWRpYSIsIm1maGQiLCJtaW5mIiwibW9vZiIsIm1vb3YiLCJtcDRhIiwibXZleCIsIm12aGQiLCJwYXNwIiwic3RibCIsInN0Y28iLCJzdHNjIiwic3RzZCIsInN0c3oiLCJzdHRzIiwidGZkdCIsInRmaGQiLCJ0cmFmIiwidHJhayIsInRyZXgiLCJ0a2hkIiwidm1oZCIsInNtaGQiLCJjdHRzIiwic3RzcyIsInN0eXAiLCJwc3NoIiwic2lkeCIsInNiZ3AiLCJzYWl6Iiwic2FpbyIsInNlbmMiLCJ0cnVuIiwiZW5jdiIsImVuY2EiLCJzaW5mIiwiYnRydCIsImZybWEiLCJ0ZW5jIiwic2NobSIsInNjaGkiLCJtZWhkIiwiZmllbCIsInNkdHAiXS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGVbdF09W3QuY2hhckNvZGVBdCgwKSx0LmNoYXJDb2RlQXQoMSksdC5jaGFyQ29kZUF0KDIpLHQuY2hhckNvZGVBdCgzKV0sZX0pLE9iamVjdC5jcmVhdGUobnVsbCkpKSxpKFNlLCJIRExSX1RZUEVTIix7dmlkZW86bmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMCwxMTgsMTA1LDEwMCwxMDEsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsODYsMTA1LDEwMCwxMDEsMTExLDcyLDk3LDExMCwxMDAsMTA4LDEwMSwxMTQsMF0pLGF1ZGlvOm5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMTE1LDExMSwxMTcsMTEwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDgzLDExMSwxMTcsMTEwLDEwMCw3Miw5NywxMTAsMTAwLDEwOCwxMDEsMTE0LDBdKX0pLGkoU2UsIkZUWVBBVkMxIixTZS5ib3goU2UudHlwZXMuZnR5cCxuZXcgVWludDhBcnJheShbMTA1LDExNSwxMTEsMTA5LDAsMCwwLDEsMTA1LDExNSwxMTEsMTA5LDk3LDExOCw5OSw0OV0pKSksaShTZSwiRlRZUEhFVjEiLFNlLmJveChTZS50eXBlcy5mdHlwLG5ldyBVaW50OEFycmF5KFsxMDUsMTE1LDExMSwxMDksMCwwLDAsMSwxMDUsMTE1LDExMSwxMDksMTA0LDEwMSwxMTgsNDldKSkpLGkoU2UsIkRJTkYiLFNlLmJveChTZS50eXBlcy5kaW5mLFNlLmJveChTZS50eXBlcy5kcmVmLG5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDEsMCwwLDAsMTIsMTE3LDExNCwxMDgsMzIsMCwwLDAsMV0pKSkpLGkoU2UsIlZNSEQiLFNlLmJveChTZS50eXBlcy52bWhkLG5ldyBVaW50OEFycmF5KFswLDAsMCwxLDAsMCwwLDAsMCwwLDAsMF0pKSksaShTZSwiU01IRCIsU2UuYm94KFNlLnR5cGVzLnNtaGQsbmV3IFVpbnQ4QXJyYXkoWzAsMCwwLDAsMCwwLDAsMF0pKSksaShTZSwiU3RibFRhYmxlIixuZXcgVWludDhBcnJheShbMCwwLDAsMCwwLDAsMCwwXSkpLGkoU2UsIlNUVFMiLFNlLmJveChTZS50eXBlcy5zdHRzLFNlLlN0YmxUYWJsZSkpLGkoU2UsIlNUU0MiLFNlLmJveChTZS50eXBlcy5zdHNjLFNlLlN0YmxUYWJsZSkpLGkoU2UsIlNUU1oiLFNlLmJveChTZS50eXBlcy5zdHN6LG5ldyBVaW50OEFycmF5KFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0pKSksaShTZSwiU1RDTyIsU2UuYm94KFNlLnR5cGVzLnN0Y28sU2UuU3RibFRhYmxlKSk7dmFyIEFlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGEpe3IodGhpcyxlKSx0aGlzLm5hbWU9dHx8IiIsdGhpcy5fcHJlZml4PSJbIi5jb25jYXQodGhpcy5uYW1lLCJdIiksZS5kaXNhYmxlZD1hfXJldHVybiBuKGUsW3trZXk6ImRlYnVnIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0O2lmKCFlLmRpc2FibGVkKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxhPW5ldyBBcnJheShyKSxuPTA7bjxyO24rKylhW25dPWFyZ3VtZW50c1tuXTsodD1jb25zb2xlKS5kZWJ1Zy5hcHBseSh0LFt0aGlzLl9wcmVmaXhdLmNvbmNhdChhKSl9fX0se2tleToibG9nIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0O2lmKCFlLmRpc2FibGVkKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxhPW5ldyBBcnJheShyKSxuPTA7bjxyO24rKylhW25dPWFyZ3VtZW50c1tuXTsodD1jb25zb2xlKS5sb2cuYXBwbHkodCxbdGhpcy5fcHJlZml4XS5jb25jYXQoYSkpfX19LHtrZXk6Indhcm4iLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ7aWYoIWUuZGlzYWJsZWQpe2Zvcih2YXIgcj1hcmd1bWVudHMubGVuZ3RoLGE9bmV3IEFycmF5KHIpLG49MDtuPHI7bisrKWFbbl09YXJndW1lbnRzW25dOyh0PWNvbnNvbGUpLndhcm4uYXBwbHkodCxbdGhpcy5fcHJlZml4XS5jb25jYXQoYSkpfX19LHtrZXk6ImVycm9yIix2YWx1ZTpmdW5jdGlvbigpe3ZhciB0O2lmKCFlLmRpc2FibGVkKXtmb3IodmFyIHI9YXJndW1lbnRzLmxlbmd0aCxhPW5ldyBBcnJheShyKSxuPTA7bjxyO24rKylhW25dPWFyZ3VtZW50c1tuXTsodD1jb25zb2xlKS5lcnJvci5hcHBseSh0LFt0aGlzLl9wcmVmaXhdLmNvbmNhdChhKSl9fX0se2tleToidGFibGUiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIHQ7ZS5kaXNhYmxlZHx8KGNvbnNvbGUuZ3JvdXAodGhpcy5fcHJlZml4KSwodD1jb25zb2xlKS50YWJsZS5hcHBseSh0LGFyZ3VtZW50cyksY29uc29sZS5ncm91cEVuZCgpKX19XSxbe2tleToiZW5hYmxlIix2YWx1ZTpmdW5jdGlvbigpe2UuZGlzYWJsZWQ9ITF9fSx7a2V5OiJkaXNhYmxlIix2YWx1ZTpmdW5jdGlvbigpe2UuZGlzYWJsZWQ9ITB9fV0pLGV9KCk7aShBZSwiZGlzYWJsZWQiLCEwKTtmb3IodmFyIERlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGEsbil7cih0aGlzLGUpLHRoaXMudmlkZW9UcmFjaz10LHRoaXMuYXVkaW9UcmFjaz1hO3ZhciBpPS9DaHJvbWVcLyhbXi5dKykvLmV4ZWMobmF2aWdhdG9yLnVzZXJBZ2VudCk7dGhpcy5mb3JjZUZpcnN0SURSPWkmJk51bWJlcihpWzFdKTw1MCx0aGlzLmxvZz1uZXcgQWUoIkZNUDRSZW11eGVyIiwhbnx8IW4ub3BlbkxvZ3x8IW4ub3BlbkxvZyl9cmV0dXJuIG4oZSxbe2tleToicmVtdXgiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsdCxyLGEsbixpPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdJiZhcmd1bWVudHNbMF0scz1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbz10aGlzLnZpZGVvVHJhY2ssdT10aGlzLmF1ZGlvVHJhY2ssYz1vLmV4aXN0KCksbD11LmV4aXN0KCksZD1bXTtyZXR1cm4gaSYmKHMmJnMuaW5pdE1lcmdlPyhjJiZkLnB1c2godGhpcy52aWRlb1RyYWNrKSxsJiZkLnB1c2godGhpcy5hdWRpb1RyYWNrKSxyPVNlLmluaXRTZWdtZW50KGQpKTooYyYmKGU9U2UuaW5pdFNlZ21lbnQoW3RoaXMudmlkZW9UcmFja10pKSxsJiYodD1TZS5pbml0U2VnbWVudChbdGhpcy5hdWRpb1RyYWNrXSkpKSksYyYmby5oYXNTYW1wbGUoKSYmKGE9dGhpcy5fcmVtdXhWaWRlbygpKSxsJiZ1Lmhhc1NhbXBsZSgpJiYobj10aGlzLl9yZW11eEF1ZGlvKCkpLG8uc2FtcGxlcz1bXSx1LnNhbXBsZXM9W10se2luaXRTZWdtZW50OnIsdmlkZW9Jbml0U2VnbWVudDplLGF1ZGlvSW5pdFNlZ21lbnQ6dCx2aWRlb1NlZ21lbnQ6YSxhdWRpb1NlZ21lbnQ6bn19fSx7a2V5OiJfcmVtdXhWaWRlbyIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnZpZGVvVHJhY2s7dGhpcy5mb3JjZUZpcnN0SURSJiYoZS5zYW1wbGVzWzBdLmZsYWc9e2RlcGVuZHNPbjoyLGlzTm9uU3luY1NhbXBsZTowfSk7dmFyIHQ9ZS5zYW1wbGVzLHI9MDt0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3IrPWUudW5pdHMucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiBlK3QuYnl0ZUxlbmd0aH0pLDApLHIrPTQqZS51bml0cy5sZW5ndGh9KSk7Zm9yKHZhciBhLG49bmV3IFVpbnQ4QXJyYXkociksaT1uZXcgRGF0YVZpZXcobi5idWZmZXIpLHM9ZnVuY3Rpb24oZSxyKXtyPXRbb107dmFyIHM9MDtyLnVuaXRzLmZvckVhY2goKGZ1bmN0aW9uKHQpe2kuc2V0VWludDMyKGUsdC5ieXRlTGVuZ3RoKSxlKz00LG4uc2V0KHQsZSksZSs9dC5ieXRlTGVuZ3RoLHMrPTQrdC5ieXRlTGVuZ3RofSkpLHIuc2l6ZT1zLGM9ZSxhPXJ9LG89MCx1PXQubGVuZ3RoLGM9MDtvPHU7bysrKXMoYyxhKTt2YXIgbD1TZS5tZGF0KG4pO3JldHVybiBaKFNlLm1vb2YoW2VdKSxsKX19LHtrZXk6Il9yZW11eEF1ZGlvIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuYXVkaW9UcmFjayx0PW5ldyBVaW50OEFycmF5KGUuc2FtcGxlcy5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrdC5zaXplfSksMCkpO2Uuc2FtcGxlcy5yZWR1Y2UoKGZ1bmN0aW9uKGUscil7cmV0dXJuIHQuc2V0KHIuZGF0YSxlKSxlK3Iuc2l6ZX0pLDApO3ZhciByPVNlLm1kYXQodCk7cmV0dXJuIFooU2UubW9vZihbZV0pLHIpfX0se2tleToicmVzZXQiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy52aWRlb1RyYWNrLnJlc2V0KCksdGhpcy5hdWRpb1RyYWNrLnJlc2V0KCl9fV0pLGV9KCksRWU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKCl7cih0aGlzLGUpfXJldHVybiBuKGUsW3trZXk6Im1peEluIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmFzc2lnbih0aGlzLGUpfX0se2tleToiY2xvbmUiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9bmV3IHRoaXMuY29uc3RydWN0b3I7cmV0dXJuIE9iamVjdC5hc3NpZ24oZSx0aGlzKSxlfX1dLFt7a2V5OiJjcmVhdGUiLHZhbHVlOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspdFtyXT1hcmd1bWVudHNbcl07cmV0dXJuIGwodGhpcyx0KX19XSksZX0oKSxCZT1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKCl7dmFyIGUsbj1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10saT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06NCpuLmxlbmd0aDtyKHRoaXMsYSksZT10LmNhbGwodGhpcyk7dmFyIHM9bjtpZihzIGluc3RhbmNlb2YgQXJyYXlCdWZmZXImJihzPW5ldyBVaW50OEFycmF5KHMpKSwocyBpbnN0YW5jZW9mIEludDhBcnJheXx8cyBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5fHxzIGluc3RhbmNlb2YgSW50MTZBcnJheXx8cyBpbnN0YW5jZW9mIFVpbnQxNkFycmF5fHxzIGluc3RhbmNlb2YgSW50MzJBcnJheXx8cyBpbnN0YW5jZW9mIFVpbnQzMkFycmF5fHxzIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5fHxzIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5KSYmKHM9bmV3IFVpbnQ4QXJyYXkocy5idWZmZXIscy5ieXRlT2Zmc2V0LHMuYnl0ZUxlbmd0aCkpLHMgaW5zdGFuY2VvZiBVaW50OEFycmF5KXtmb3IodmFyIG89cy5ieXRlTGVuZ3RoLHU9W10sYz0wO2M8bztjKz0xKXVbYz4+PjJdfD1zW2NdPDwyNC1jJTQqODtlLndvcmRzPXUsZS5zaWdCeXRlcz1vfWVsc2UgZS53b3Jkcz1uLGUuc2lnQnl0ZXM9aTtyZXR1cm4gZX1yZXR1cm4gbihhLFt7a2V5OiJ0b1N0cmluZyIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06VGU7cmV0dXJuIGUuc3RyaW5naWZ5KHRoaXMpfX0se2tleToiY29uY2F0Iix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD10aGlzLndvcmRzLHI9ZS53b3JkcyxhPXRoaXMuc2lnQnl0ZXMsbj1lLnNpZ0J5dGVzO2lmKHRoaXMuY2xhbXAoKSxhJTQpZm9yKHZhciBpPTA7aTxuO2krPTEpe3ZhciBzPXJbaT4+PjJdPj4+MjQtaSU0KjgmMjU1O3RbYStpPj4+Ml18PXM8PDI0LShhK2kpJTQqOH1lbHNlIGZvcih2YXIgbz0wO288bjtvKz00KXRbYStvPj4+Ml09cltvPj4+Ml07cmV0dXJuIHRoaXMuc2lnQnl0ZXMrPW4sdGhpc319LHtrZXk6ImNsYW1wIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMud29yZHMsdD10aGlzLnNpZ0J5dGVzO2VbdD4+PjJdJj00Mjk0OTY3Mjk1PDwzMi10JTQqOCxlLmxlbmd0aD1NYXRoLmNlaWwodC80KX19LHtrZXk6ImNsb25lIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXAobyhhLnByb3RvdHlwZSksImNsb25lIix0aGlzKS5jYWxsKHRoaXMpO3JldHVybiBlLndvcmRzPXRoaXMud29yZHMuc2xpY2UoMCksZX19XSxbe2tleToicmFuZG9tIix2YWx1ZTpmdW5jdGlvbihlKXtmb3IodmFyIHQscj1bXSxuPWZ1bmN0aW9uKGUpe3ZhciB0PWUscj05ODc2NTQzMjEsYT00Mjk0OTY3Mjk1O3JldHVybiBmdW5jdGlvbigpe3ZhciBlPSgocj0zNjk2OSooNjU1MzUmcikrKHI+PjE2KSZhKTw8MTYpKyh0PTE4ZTMqKDY1NTM1JnQpKyh0Pj4xNikmYSkmYTtyZXR1cm4gZS89NDI5NDk2NzI5NiwoZSs9LjUpKihNYXRoLnJhbmRvbSgpPi41PzE6LTEpfX0saT0wO2k8ZTtpKz00KXt2YXIgcz1uKDQyOTQ5NjcyOTYqKHR8fE1hdGgucmFuZG9tKCkpKTt0PTk4NzY1NDA3MSpzKCksci5wdXNoKDQyOTQ5NjcyOTYqcygpfDApfXJldHVybiBuZXcgYShyLGUpfX1dKSxhfShFZSksVGU9e3N0cmluZ2lmeTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS53b3JkcyxyPWUuc2lnQnl0ZXMsYT1bXSxuPTA7bjxyO24rPTEpe3ZhciBpPXRbbj4+PjJdPj4+MjQtbiU0KjgmMjU1O2EucHVzaCgoaT4+PjQpLnRvU3RyaW5nKDE2KSksYS5wdXNoKCgxNSZpKS50b1N0cmluZygxNikpfXJldHVybiBhLmpvaW4oIiIpfSxwYXJzZTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5sZW5ndGgscj1bXSxhPTA7YTx0O2ErPTIpclthPj4+M118PXBhcnNlSW50KGUuc3Vic3RyKGEsMiksMTYpPDwyNC1hJTgqNDtyZXR1cm4gbmV3IEJlKHIsdC8yKX19LENlPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1lLmxlbmd0aCxyPVtdLGE9MDthPHQ7YSs9MSlyW2E+Pj4yXXw9KDI1NSZlLmNoYXJDb2RlQXQoYSkpPDwyNC1hJTQqODtyZXR1cm4gbmV3IEJlKHIsdCl9LFVlPWZ1bmN0aW9uKGUpe3JldHVybiBDZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZSkpKX0sUGU9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYSgpe3ZhciBlO3JldHVybiByKHRoaXMsYSksKGU9dC5jYWxsKHRoaXMpKS5fbWluQnVmZmVyU2l6ZT0wLGV9cmV0dXJuIG4oYSxbe2tleToicmVzZXQiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fZGF0YT1uZXcgQmUsdGhpcy5fbkRhdGFCeXRlcz0wfX0se2tleToiX2FwcGVuZCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZTsic3RyaW5nIj09dHlwZW9mIHQmJih0PVVlKHQpKSx0aGlzLl9kYXRhLmNvbmNhdCh0KSx0aGlzLl9uRGF0YUJ5dGVzKz10LnNpZ0J5dGVzfX0se2tleToiX3Byb2Nlc3MiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LHI9dGhpcy5fZGF0YSxhPXRoaXMuYmxvY2tTaXplLG49ci53b3JkcyxpPXIuc2lnQnl0ZXMscz1pLyg0KmEpLG89KHM9ZT9NYXRoLmNlaWwocyk6TWF0aC5tYXgoKDB8cyktdGhpcy5fbWluQnVmZmVyU2l6ZSwwKSkqYSx1PU1hdGgubWluKDQqbyxpKTtpZihvKXtmb3IodmFyIGM9MDtjPG87Yys9YSl0aGlzLl9kb1Byb2Nlc3NCbG9jayhuLGMpO3Q9bi5zcGxpY2UoMCxvKSxyLnNpZ0J5dGVzLT11fXJldHVybiBuZXcgQmUodCx1KX19LHtrZXk6ImNsb25lIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXAobyhhLnByb3RvdHlwZSksImNsb25lIix0aGlzKS5jYWxsKHRoaXMpO3JldHVybiBlLl9kYXRhPXRoaXMuX2RhdGEuY2xvbmUoKSxlfX1dKSxhfShFZSksSWU9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYShlKXt2YXIgbjtyZXR1cm4gcih0aGlzLGEpLChuPXQuY2FsbCh0aGlzKSkuYmxvY2tTaXplPTE2LG4uY2ZnPU9iamVjdC5hc3NpZ24obmV3IEVlLGUpLG4ucmVzZXQoKSxufXJldHVybiBuKGEsW3trZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3AobyhhLnByb3RvdHlwZSksInJlc2V0Iix0aGlzKS5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX19LHtrZXk6InVwZGF0ZSIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2FwcGVuZChlKSx0aGlzLl9wcm9jZXNzKCksdGhpc319LHtrZXk6ImZpbmFsaXplIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmdGhpcy5fYXBwZW5kKGUpLHRoaXMuX2RvRmluYWxpemUoKX19XSxbe2tleToiX2NyZWF0ZUhlbHBlciIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIG5ldyBlKHIpLmZpbmFsaXplKHQpfX19LHtrZXk6Il9jcmVhdGVIbWFjSGVscGVyIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24odCxyKXtyZXR1cm4gbmV3IHplKGUscikuZmluYWxpemUodCl9fX1dKSxhfShQZSksemU9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYShlLG4pe3ZhciBpO3IodGhpcyxhKSxpPXQuY2FsbCh0aGlzKTt2YXIgcz1uZXcgZTtpLl9oYXNoZXI9czt2YXIgbz1uOyJzdHJpbmciPT10eXBlb2YgbyYmKG89VWUobykpO3ZhciB1PXMuYmxvY2tTaXplLGM9NCp1O28uc2lnQnl0ZXM+YyYmKG89cy5maW5hbGl6ZShuKSksby5jbGFtcCgpO3ZhciBsPW8uY2xvbmUoKTtpLl9vS2V5PWw7dmFyIGQ9by5jbG9uZSgpO2kuX2lLZXk9ZDtmb3IodmFyIGY9bC53b3JkcyxoPWQud29yZHMscD0wO3A8dTtwKz0xKWZbcF1ePTE1NDk1NTY4MjgsaFtwXV49OTA5NTIyNDg2O3JldHVybiBsLnNpZ0J5dGVzPWMsZC5zaWdCeXRlcz1jLGkucmVzZXQoKSxpfXJldHVybiBuKGEsW3trZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2hhc2hlcjtlLnJlc2V0KCksZS51cGRhdGUodGhpcy5faUtleSl9fSx7a2V5OiJ1cGRhdGUiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9oYXNoZXIudXBkYXRlKGUpLHRoaXN9fSx7a2V5OiJmaW5hbGl6ZSIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9dGhpcy5faGFzaGVyLHI9dC5maW5hbGl6ZShlKTtyZXR1cm4gdC5yZXNldCgpLHQuZmluYWxpemUodGhpcy5fb0tleS5jbG9uZSgpLmNvbmNhdChyKSl9fV0pLGF9KEVlKSxNZT17c3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3ZhciB0PWUud29yZHMscj1lLnNpZ0J5dGVzLGE9dGhpcy5fbWFwO2UuY2xhbXAoKTtmb3IodmFyIG49W10saT0wO2k8cjtpKz0zKWZvcih2YXIgcz0odFtpPj4+Ml0+Pj4yNC1pJTQqOCYyNTUpPDwxNnwodFtpKzE+Pj4yXT4+PjI0LShpKzEpJTQqOCYyNTUpPDw4fHRbaSsyPj4+Ml0+Pj4yNC0oaSsyKSU0KjgmMjU1LG89MDtvPDQmJmkrLjc1Km88cjtvKz0xKW4ucHVzaChhLmNoYXJBdChzPj4+NiooMy1vKSY2MykpO3ZhciB1PWEuY2hhckF0KDY0KTtpZih1KWZvcig7bi5sZW5ndGglNDspbi5wdXNoKHUpO3JldHVybiBuLmpvaW4oIiIpfSxwYXJzZTpmdW5jdGlvbihlKXt2YXIgdD1lLmxlbmd0aCxyPXRoaXMuX21hcCxhPXRoaXMuX3JldmVyc2VNYXA7aWYoIWEpe3RoaXMuX3JldmVyc2VNYXA9W10sYT10aGlzLl9yZXZlcnNlTWFwO2Zvcih2YXIgbj0wO248ci5sZW5ndGg7bis9MSlhW3IuY2hhckNvZGVBdChuKV09bn12YXIgaT1yLmNoYXJBdCg2NCk7aWYoaSl7dmFyIHM9ZS5pbmRleE9mKGkpOy0xIT09cyYmKHQ9cyl9cmV0dXJuIGZ1bmN0aW9uKGUsdCxyKXtmb3IodmFyIGE9W10sbj0wLGk9MDtpPHQ7aSs9MSlpZihpJTQpe3ZhciBzPXJbZS5jaGFyQ29kZUF0KGktMSldPDxpJTQqMnxyW2UuY2hhckNvZGVBdChpKV0+Pj42LWklNCoyO2Fbbj4+PjJdfD1zPDwyNC1uJTQqOCxuKz0xfXJldHVybiBCZS5jcmVhdGUoYSxuKX0oZSx0LGEpfSxfbWFwOiJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSJ9LFJlPVtdLE9lPTA7T2U8NjQ7T2UrPTEpUmVbT2VdPTQyOTQ5NjcyOTYqTWF0aC5hYnMoTWF0aC5zaW4oT2UrMSkpfDA7dmFyIExlPWZ1bmN0aW9uKGUsdCxyLGEsbixpLHMpe3ZhciBvPWUrKHQmcnx+dCZhKStuK3M7cmV0dXJuKG88PGl8bz4+PjMyLWkpK3R9LFZlPWZ1bmN0aW9uKGUsdCxyLGEsbixpLHMpe3ZhciBvPWUrKHQmYXxyJn5hKStuK3M7cmV0dXJuKG88PGl8bz4+PjMyLWkpK3R9LEZlPWZ1bmN0aW9uKGUsdCxyLGEsbixpLHMpe3ZhciBvPWUrKHRecl5hKStuK3M7cmV0dXJuKG88PGl8bz4+PjMyLWkpK3R9LE5lPWZ1bmN0aW9uKGUsdCxyLGEsbixpLHMpe3ZhciBvPWUrKHJeKHR8fmEpKStuK3M7cmV0dXJuKG88PGl8bz4+PjMyLWkpK3R9LGplPWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gcih0aGlzLGEpLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuKGEsW3trZXk6Il9kb1Jlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3RoaXMuX2hhc2g9bmV3IEJlKFsxNzMyNTg0MTkzLDQwMjMyMzM0MTcsMjU2MjM4MzEwMiwyNzE3MzM4NzhdKX19LHtrZXk6Il9kb1Byb2Nlc3NCbG9jayIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9ZSxhPTA7YTwxNjthKz0xKXt2YXIgbj10K2EsaT1lW25dO3Jbbl09MTY3MTE5MzUmKGk8PDh8aT4+PjI0KXw0Mjc4MjU1MzYwJihpPDwyNHxpPj4+OCl9dmFyIHM9dGhpcy5faGFzaC53b3JkcyxvPXJbdCswXSx1PXJbdCsxXSxjPXJbdCsyXSxsPXJbdCszXSxkPXJbdCs0XSxmPXJbdCs1XSxoPXJbdCs2XSxwPXJbdCs3XSx2PXJbdCs4XSx5PXJbdCs5XSxtPXJbdCsxMF0sZz1yW3QrMTFdLGs9clt0KzEyXSxiPXJbdCsxM10sXz1yW3QrMTRdLHc9clt0KzE1XSx4PXNbMF0sUz1zWzFdLEE9c1syXSxEPXNbM107eD1MZSh4LFMsQSxELG8sNyxSZVswXSksRD1MZShELHgsUyxBLHUsMTIsUmVbMV0pLEE9TGUoQSxELHgsUyxjLDE3LFJlWzJdKSxTPUxlKFMsQSxELHgsbCwyMixSZVszXSkseD1MZSh4LFMsQSxELGQsNyxSZVs0XSksRD1MZShELHgsUyxBLGYsMTIsUmVbNV0pLEE9TGUoQSxELHgsUyxoLDE3LFJlWzZdKSxTPUxlKFMsQSxELHgscCwyMixSZVs3XSkseD1MZSh4LFMsQSxELHYsNyxSZVs4XSksRD1MZShELHgsUyxBLHksMTIsUmVbOV0pLEE9TGUoQSxELHgsUyxtLDE3LFJlWzEwXSksUz1MZShTLEEsRCx4LGcsMjIsUmVbMTFdKSx4PUxlKHgsUyxBLEQsayw3LFJlWzEyXSksRD1MZShELHgsUyxBLGIsMTIsUmVbMTNdKSxBPUxlKEEsRCx4LFMsXywxNyxSZVsxNF0pLFM9TGUoUyxBLEQseCx3LDIyLFJlWzE1XSkseD1WZSh4LFMsQSxELHUsNSxSZVsxNl0pLEQ9VmUoRCx4LFMsQSxoLDksUmVbMTddKSxBPVZlKEEsRCx4LFMsZywxNCxSZVsxOF0pLFM9VmUoUyxBLEQseCxvLDIwLFJlWzE5XSkseD1WZSh4LFMsQSxELGYsNSxSZVsyMF0pLEQ9VmUoRCx4LFMsQSxtLDksUmVbMjFdKSxBPVZlKEEsRCx4LFMsdywxNCxSZVsyMl0pLFM9VmUoUyxBLEQseCxkLDIwLFJlWzIzXSkseD1WZSh4LFMsQSxELHksNSxSZVsyNF0pLEQ9VmUoRCx4LFMsQSxfLDksUmVbMjVdKSxBPVZlKEEsRCx4LFMsbCwxNCxSZVsyNl0pLFM9VmUoUyxBLEQseCx2LDIwLFJlWzI3XSkseD1WZSh4LFMsQSxELGIsNSxSZVsyOF0pLEQ9VmUoRCx4LFMsQSxjLDksUmVbMjldKSxBPVZlKEEsRCx4LFMscCwxNCxSZVszMF0pLFM9VmUoUyxBLEQseCxrLDIwLFJlWzMxXSkseD1GZSh4LFMsQSxELGYsNCxSZVszMl0pLEQ9RmUoRCx4LFMsQSx2LDExLFJlWzMzXSksQT1GZShBLEQseCxTLGcsMTYsUmVbMzRdKSxTPUZlKFMsQSxELHgsXywyMyxSZVszNV0pLHg9RmUoeCxTLEEsRCx1LDQsUmVbMzZdKSxEPUZlKEQseCxTLEEsZCwxMSxSZVszN10pLEE9RmUoQSxELHgsUyxwLDE2LFJlWzM4XSksUz1GZShTLEEsRCx4LG0sMjMsUmVbMzldKSx4PUZlKHgsUyxBLEQsYiw0LFJlWzQwXSksRD1GZShELHgsUyxBLG8sMTEsUmVbNDFdKSxBPUZlKEEsRCx4LFMsbCwxNixSZVs0Ml0pLFM9RmUoUyxBLEQseCxoLDIzLFJlWzQzXSkseD1GZSh4LFMsQSxELHksNCxSZVs0NF0pLEQ9RmUoRCx4LFMsQSxrLDExLFJlWzQ1XSksQT1GZShBLEQseCxTLHcsMTYsUmVbNDZdKSxTPUZlKFMsQSxELHgsYywyMyxSZVs0N10pLHg9TmUoeCxTLEEsRCxvLDYsUmVbNDhdKSxEPU5lKEQseCxTLEEscCwxMCxSZVs0OV0pLEE9TmUoQSxELHgsUyxfLDE1LFJlWzUwXSksUz1OZShTLEEsRCx4LGYsMjEsUmVbNTFdKSx4PU5lKHgsUyxBLEQsayw2LFJlWzUyXSksRD1OZShELHgsUyxBLGwsMTAsUmVbNTNdKSxBPU5lKEEsRCx4LFMsbSwxNSxSZVs1NF0pLFM9TmUoUyxBLEQseCx1LDIxLFJlWzU1XSkseD1OZSh4LFMsQSxELHYsNixSZVs1Nl0pLEQ9TmUoRCx4LFMsQSx3LDEwLFJlWzU3XSksQT1OZShBLEQseCxTLGgsMTUsUmVbNThdKSxTPU5lKFMsQSxELHgsYiwyMSxSZVs1OV0pLHg9TmUoeCxTLEEsRCxkLDYsUmVbNjBdKSxEPU5lKEQseCxTLEEsZywxMCxSZVs2MV0pLEE9TmUoQSxELHgsUyxjLDE1LFJlWzYyXSksUz1OZShTLEEsRCx4LHksMjEsUmVbNjNdKSxzWzBdPXNbMF0reHwwLHNbMV09c1sxXStTfDAsc1syXT1zWzJdK0F8MCxzWzNdPXNbM10rRHwwfX0se2tleToiX2RvRmluYWxpemUiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fZGF0YSx0PWUud29yZHMscj04KnRoaXMuX25EYXRhQnl0ZXMsYT04KmUuc2lnQnl0ZXM7dFthPj4+NV18PTEyODw8MjQtYSUzMjt2YXIgbj1NYXRoLmZsb29yKHIvNDI5NDk2NzI5NiksaT1yO3RbMTUrKGErNjQ+Pj45PDw0KV09MTY3MTE5MzUmKG48PDh8bj4+PjI0KXw0Mjc4MjU1MzYwJihuPDwyNHxuPj4+OCksdFsxNCsoYSs2ND4+Pjk8PDQpXT0xNjcxMTkzNSYoaTw8OHxpPj4+MjQpfDQyNzgyNTUzNjAmKGk8PDI0fGk+Pj44KSxlLnNpZ0J5dGVzPTQqKHQubGVuZ3RoKzEpLHRoaXMuX3Byb2Nlc3MoKTtmb3IodmFyIHM9dGhpcy5faGFzaCxvPXMud29yZHMsdT0wO3U8NDt1Kz0xKXt2YXIgYz1vW3VdO29bdV09MTY3MTE5MzUmKGM8PDh8Yz4+PjI0KXw0Mjc4MjU1MzYwJihjPDwyNHxjPj4+OCl9cmV0dXJuIHN9fSx7a2V5OiJjbG9uZSIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1wKG8oYS5wcm90b3R5cGUpLCJjbG9uZSIsdGhpcykuY2FsbCh0aGlzKTtyZXR1cm4gZS5faGFzaD10aGlzLl9oYXNoLmNsb25lKCksZX19XSksYX0oSWUpO0llLl9jcmVhdGVIZWxwZXIoamUpLEllLl9jcmVhdGVIbWFjSGVscGVyKGplKTt2YXIgR2U9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYShlKXt2YXIgbjtyZXR1cm4gcih0aGlzLGEpLChuPXQuY2FsbCh0aGlzKSkuY2ZnPU9iamVjdC5hc3NpZ24obmV3IEVlLHtrZXlTaXplOjQsaGFzaGVyOmplLGl0ZXJhdGlvbnM6MX0sZSksbn1yZXR1cm4gbihhLFt7a2V5OiJjb21wdXRlIix2YWx1ZTpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcixhPXRoaXMuY2ZnLG49YS5oYXNoZXIuY3JlYXRlKCksaT1CZS5jcmVhdGUoKSxzPWkud29yZHMsbz1hLmtleVNpemUsdT1hLml0ZXJhdGlvbnM7cy5sZW5ndGg8bzspe3ImJm4udXBkYXRlKHIpLHI9bi51cGRhdGUoZSkuZmluYWxpemUodCksbi5yZXNldCgpO2Zvcih2YXIgYz0xO2M8dTtjKz0xKXI9bi5maW5hbGl6ZShyKSxuLnJlc2V0KCk7aS5jb25jYXQocil9cmV0dXJuIGkuc2lnQnl0ZXM9NCpvLGl9fV0pLGF9KEVlKSxIZT1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKGUsbixpKXt2YXIgcztyZXR1cm4gcih0aGlzLGEpLChzPXQuY2FsbCh0aGlzKSkuY2ZnPU9iamVjdC5hc3NpZ24obmV3IEVlLGkpLHMuX3hmb3JtTW9kZT1lLHMuX2tleT1uLHMucmVzZXQoKSxzfXJldHVybiBuKGEsW3trZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3AobyhhLnByb3RvdHlwZSksInJlc2V0Iix0aGlzKS5jYWxsKHRoaXMpLHRoaXMuX2RvUmVzZXQoKX19LHtrZXk6InByb2Nlc3MiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9hcHBlbmQoZSksdGhpcy5fcHJvY2VzcygpfX0se2tleToiZmluYWxpemUiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlJiZ0aGlzLl9hcHBlbmQoZSksdGhpcy5fZG9GaW5hbGl6ZSgpfX1dLFt7a2V5OiJjcmVhdGVFbmNyeXB0b3IiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0VOQ19YRk9STV9NT0RFLGUsdCl9fSx7a2V5OiJjcmVhdGVEZWNyeXB0b3IiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuY3JlYXRlKHRoaXMuX0RFQ19YRk9STV9NT0RFLGUsdCl9fSx7a2V5OiJfY3JlYXRlSGVscGVyIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlKXtyZXR1cm4ic3RyaW5nIj09dHlwZW9mIGU/ZXQ6SmV9O3JldHVybntlbmNyeXB0OmZ1bmN0aW9uKHIsYSxuKXtyZXR1cm4gdChhKS5lbmNyeXB0KGUscixhLG4pfSxkZWNyeXB0OmZ1bmN0aW9uKHIsYSxuKXtyZXR1cm4gdChhKS5kZWNyeXB0KGUscixhLG4pfX19fV0pLGF9KFBlKTtIZS5fRU5DX1hGT1JNX01PREU9MSxIZS5fREVDX1hGT1JNX01PREU9MixIZS5rZXlTaXplPTQsSGUuaXZTaXplPTQ7dmFyIEtlPWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoZSxuKXt2YXIgaTtyZXR1cm4gcih0aGlzLGEpLChpPXQuY2FsbCh0aGlzKSkuX2NpcGhlcj1lLGkuX2l2PW4saX1yZXR1cm4gbihhLG51bGwsW3trZXk6ImNyZWF0ZUVuY3J5cHRvciIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5FbmNyeXB0b3IuY3JlYXRlKGUsdCl9fSx7a2V5OiJjcmVhdGVEZWNyeXB0b3IiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuRGVjcnlwdG9yLmNyZWF0ZShlLHQpfX1dKSxhfShFZSk7ZnVuY3Rpb24gcWUoZSx0LHIpe3ZhciBhLG49ZSxpPXRoaXMuX2l2O2k/KGE9aSx0aGlzLl9pdj12b2lkIDApOmE9dGhpcy5fcHJldkJsb2NrO2Zvcih2YXIgcz0wO3M8cjtzKz0xKW5bdCtzXV49YVtzXX12YXIgV2U9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYSgpe3JldHVybiByKHRoaXMsYSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG4oYSl9KEtlKTtXZS5FbmNyeXB0b3I9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYSgpe3JldHVybiByKHRoaXMsYSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG4oYSxbe2tleToicHJvY2Vzc0Jsb2NrIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuX2NpcGhlcixhPXIuYmxvY2tTaXplO3FlLmNhbGwodGhpcyxlLHQsYSksci5lbmNyeXB0QmxvY2soZSx0KSx0aGlzLl9wcmV2QmxvY2s9ZS5zbGljZSh0LHQrYSl9fV0pLGF9KFdlKSxXZS5EZWNyeXB0b3I9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYSgpe3JldHVybiByKHRoaXMsYSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG4oYSxbe2tleToicHJvY2Vzc0Jsb2NrIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPXRoaXMuX2NpcGhlcixhPXIuYmxvY2tTaXplLG49ZS5zbGljZSh0LHQrYSk7ci5kZWNyeXB0QmxvY2soZSx0KSxxZS5jYWxsKHRoaXMsZSx0LGEpLHRoaXMuX3ByZXZCbG9jaz1ufX1dKSxhfShXZSk7dmFyIFhlPXtwYWQ6ZnVuY3Rpb24oZSx0KXtmb3IodmFyIHI9NCp0LGE9ci1lLnNpZ0J5dGVzJXIsbj1hPDwyNHxhPDwxNnxhPDw4fGEsaT1bXSxzPTA7czxhO3MrPTQpaS5wdXNoKG4pO3ZhciBvPUJlLmNyZWF0ZShpLGEpO2UuY29uY2F0KG8pfSx1bnBhZDpmdW5jdGlvbihlKXt2YXIgdD1lLHI9MjU1JnQud29yZHNbdC5zaWdCeXRlcy0xPj4+Ml07dC5zaWdCeXRlcy09cn19LFllPWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoZSxuLGkpe3ZhciBzO3JldHVybiByKHRoaXMsYSksKHM9dC5jYWxsKHRoaXMsZSxuLE9iamVjdC5hc3NpZ24oe21vZGU6V2UscGFkZGluZzpYZX0saSkpKS5ibG9ja1NpemU9NCxzfXJldHVybiBuKGEsW3trZXk6InJlc2V0Iix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlO3AobyhhLnByb3RvdHlwZSksInJlc2V0Iix0aGlzKS5jYWxsKHRoaXMpO3ZhciB0PXRoaXMuY2ZnLHI9dC5pdixuPXQubW9kZTt0aGlzLl94Zm9ybU1vZGU9PT10aGlzLmNvbnN0cnVjdG9yLl9FTkNfWEZPUk1fTU9ERT9lPW4uY3JlYXRlRW5jcnlwdG9yOihlPW4uY3JlYXRlRGVjcnlwdG9yLHRoaXMuX21pbkJ1ZmZlclNpemU9MSksdGhpcy5fbW9kZT1lLmNhbGwobix0aGlzLHImJnIud29yZHMpLHRoaXMuX21vZGUuX19jcmVhdG9yPWV9fSx7a2V5OiJfZG9Qcm9jZXNzQmxvY2siLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5fbW9kZS5wcm9jZXNzQmxvY2soZSx0KX19LHtrZXk6Il9kb0ZpbmFsaXplIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlLHQ9dGhpcy5jZmcucGFkZGluZztyZXR1cm4gdGhpcy5feGZvcm1Nb2RlPT09dGhpcy5jb25zdHJ1Y3Rvci5fRU5DX1hGT1JNX01PREU/KHQucGFkKHRoaXMuX2RhdGEsdGhpcy5ibG9ja1NpemUpLGU9dGhpcy5fcHJvY2VzcyghMCkpOihlPXRoaXMuX3Byb2Nlc3MoITApLHQudW5wYWQoZSkpLGV9fV0pLGF9KEhlKSxaZT1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKGUpe3ZhciBuO3JldHVybiByKHRoaXMsYSksKG49dC5jYWxsKHRoaXMpKS5taXhJbihlKSxufXJldHVybiBuKGEsW3trZXk6InRvU3RyaW5nIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4oZXx8dGhpcy5mb3JtYXR0ZXIpLnN0cmluZ2lmeSh0aGlzKX19XSksYX0oRWUpLFFlPXtzdHJpbmdpZnk6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5jaXBoZXJ0ZXh0LHI9ZS5zYWx0O3JldHVybihyP0JlLmNyZWF0ZShbMTM5ODg5MzY4NCwxNzAxMDc2ODMxXSkuY29uY2F0KHIpLmNvbmNhdCh0KTp0KS50b1N0cmluZyhNZSl9LHBhcnNlOmZ1bmN0aW9uKGUpe3ZhciB0LHI9TWUucGFyc2UoZSksYT1yLndvcmRzO3JldHVybiAxMzk4ODkzNjg0PT09YVswXSYmMTcwMTA3NjgzMT09PWFbMV0mJih0PUJlLmNyZWF0ZShhLnNsaWNlKDIsNCkpLGEuc3BsaWNlKDAsNCksci5zaWdCeXRlcy09MTYpLFplLmNyZWF0ZSh7Y2lwaGVydGV4dDpyLHNhbHQ6dH0pfX0sSmU9ZnVuY3Rpb24oZSl7cyhhLGUpO3ZhciB0PWYoYSk7ZnVuY3Rpb24gYSgpe3JldHVybiByKHRoaXMsYSksdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJuIG4oYSxudWxsLFt7a2V5OiJlbmNyeXB0Iix2YWx1ZTpmdW5jdGlvbihlLHQscixhKXt2YXIgbj1PYmplY3QuYXNzaWduKG5ldyBFZSx0aGlzLmNmZyxhKSxpPWUuY3JlYXRlRW5jcnlwdG9yKHIsbikscz1pLmZpbmFsaXplKHQpLG89aS5jZmc7cmV0dXJuIFplLmNyZWF0ZSh7Y2lwaGVydGV4dDpzLGtleTpyLGl2Om8uaXYsYWxnb3JpdGhtOmUsbW9kZTpvLm1vZGUscGFkZGluZzpvLnBhZGRpbmcsYmxvY2tTaXplOmkuYmxvY2tTaXplLGZvcm1hdHRlcjpuLmZvcm1hdH0pfX0se2tleToiZGVjcnlwdCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIsYSl7dmFyIG49dCxpPU9iamVjdC5hc3NpZ24obmV3IEVlLHRoaXMuY2ZnLGEpO3JldHVybiBuPXRoaXMuX3BhcnNlKG4saS5mb3JtYXQpLGUuY3JlYXRlRGVjcnlwdG9yKHIsaSkuZmluYWxpemUobi5jaXBoZXJ0ZXh0KX19LHtrZXk6Il9wYXJzZSIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4ic3RyaW5nIj09dHlwZW9mIGU/dC5wYXJzZShlLHRoaXMpOmV9fV0pLGF9KEVlKTtKZS5jZmc9T2JqZWN0LmFzc2lnbihuZXcgRWUse2Zvcm1hdDpRZX0pO3ZhciAkZT17ZXhlY3V0ZTpmdW5jdGlvbihlLHQscixhKXt2YXIgbj1hO258fChuPUJlLnJhbmRvbSg4KSk7dmFyIGk9R2UuY3JlYXRlKHtrZXlTaXplOnQrcn0pLmNvbXB1dGUoZSxuKSxzPUJlLmNyZWF0ZShpLndvcmRzLnNsaWNlKHQpLDQqcik7cmV0dXJuIGkuc2lnQnl0ZXM9NCp0LFplLmNyZWF0ZSh7a2V5OmksaXY6cyxzYWx0Om59KX19LGV0PWZ1bmN0aW9uKGUpe3MoYSxlKTt2YXIgdD1mKGEpO2Z1bmN0aW9uIGEoKXtyZXR1cm4gcih0aGlzLGEpLHQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBuKGEsbnVsbCxbe2tleToiZW5jcnlwdCIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIsYSl7dmFyIG49T2JqZWN0LmFzc2lnbihuZXcgRWUsdGhpcy5jZmcsYSksaT1uLmtkZi5leGVjdXRlKHIsZS5rZXlTaXplLGUuaXZTaXplKTtuLml2PWkuaXY7dmFyIHM9SmUuZW5jcnlwdC5jYWxsKHRoaXMsZSx0LGkua2V5LG4pO3JldHVybiBzLm1peEluKGkpLHN9fSx7a2V5OiJkZWNyeXB0Iix2YWx1ZTpmdW5jdGlvbihlLHQscixhKXt2YXIgbj10LGk9T2JqZWN0LmFzc2lnbihuZXcgRWUsdGhpcy5jZmcsYSk7bj10aGlzLl9wYXJzZShuLGkuZm9ybWF0KTt2YXIgcz1pLmtkZi5leGVjdXRlKHIsZS5rZXlTaXplLGUuaXZTaXplLG4uc2FsdCk7cmV0dXJuIGkuaXY9cy5pdixKZS5kZWNyeXB0LmNhbGwodGhpcyxlLG4scy5rZXksaSl9fV0pLGF9KEplKTtldC5jZmc9T2JqZWN0LmFzc2lnbihKZS5jZmcse2tkZjokZX0pO2Zvcih2YXIgdHQ9W10scnQ9W10sYXQ9W10sbnQ9W10saXQ9W10sc3Q9W10sb3Q9W10sdXQ9W10sY3Q9W10sbHQ9W10sZHQ9W10sZnQ9MDtmdDwyNTY7ZnQrPTEpZHRbZnRdPWZ0PDEyOD9mdDw8MTpmdDw8MV4yODM7Zm9yKHZhciBodD0wLHB0PTAsdnQ9MDt2dDwyNTY7dnQrPTEpe3ZhciB5dD1wdF5wdDw8MV5wdDw8Ml5wdDw8M15wdDw8NDt5dD15dD4+PjheMjU1Jnl0Xjk5LHR0W2h0XT15dCxydFt5dF09aHQ7dmFyIG10PWR0W2h0XSxndD1kdFttdF0sa3Q9ZHRbZ3RdLGJ0PTI1NypkdFt5dF1eMTY4NDMwMDgqeXQ7YXRbaHRdPWJ0PDwyNHxidD4+PjgsbnRbaHRdPWJ0PDwxNnxidD4+PjE2LGl0W2h0XT1idDw8OHxidD4+PjI0LHN0W2h0XT1idCxidD0xNjg0MzAwOSprdF42NTUzNypndF4yNTcqbXReMTY4NDMwMDgqaHQsb3RbeXRdPWJ0PDwyNHxidD4+PjgsdXRbeXRdPWJ0PDwxNnxidD4+PjE2LGN0W3l0XT1idDw8OHxidD4+PjI0LGx0W3l0XT1idCxodD8oaHQ9bXReZHRbZHRbZHRba3RebXRdXV0scHRePWR0W2R0W3B0XV0pOmh0PXB0PTF9dmFyIF90PVswLDEsMiw0LDgsMTYsMzIsNjQsMTI4LDI3LDU0XSx3dD1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKCl7cmV0dXJuIHIodGhpcyxhKSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gbihhLFt7a2V5OiJfZG9SZXNldCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTtpZighdGhpcy5fblJvdW5kc3x8dGhpcy5fa2V5UHJpb3JSZXNldCE9PXRoaXMuX2tleSl7dGhpcy5fa2V5UHJpb3JSZXNldD10aGlzLl9rZXk7dmFyIHQ9dGhpcy5fa2V5UHJpb3JSZXNldCxyPXQud29yZHMsYT10LnNpZ0J5dGVzLzQ7dGhpcy5fblJvdW5kcz1hKzY7dmFyIG49NCoodGhpcy5fblJvdW5kcysxKTt0aGlzLl9rZXlTY2hlZHVsZT1bXTtmb3IodmFyIGk9dGhpcy5fa2V5U2NoZWR1bGUscz0wO3M8bjtzKz0xKXM8YT9pW3NdPXJbc106KGU9aVtzLTFdLHMlYT9hPjYmJnMlYT09NCYmKGU9dHRbZT4+PjI0XTw8MjR8dHRbZT4+PjE2JjI1NV08PDE2fHR0W2U+Pj44JjI1NV08PDh8dHRbMjU1JmVdKTooZT10dFsoZT1lPDw4fGU+Pj4yNCk+Pj4yNF08PDI0fHR0W2U+Pj4xNiYyNTVdPDwxNnx0dFtlPj4+OCYyNTVdPDw4fHR0WzI1NSZlXSxlXj1fdFtzL2F8MF08PDI0KSxpW3NdPWlbcy1hXV5lKTt0aGlzLl9pbnZLZXlTY2hlZHVsZT1bXTtmb3IodmFyIG89dGhpcy5faW52S2V5U2NoZWR1bGUsdT0wO3U8bjt1Kz0xKXt2YXIgYz1uLXU7ZT11JTQ/aVtjXTppW2MtNF0sb1t1XT11PDR8fGM8PTQ/ZTpvdFt0dFtlPj4+MjRdXV51dFt0dFtlPj4+MTYmMjU1XV1eY3RbdHRbZT4+PjgmMjU1XV1ebHRbdHRbMjU1JmVdXX19fX0se2tleToiZW5jcnlwdEJsb2NrIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuX2RvQ3J5cHRCbG9jayhlLHQsdGhpcy5fa2V5U2NoZWR1bGUsYXQsbnQsaXQsc3QsdHQpfX0se2tleToiZGVjcnlwdEJsb2NrIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciByPWUsYT1yW3QrMV07clt0KzFdPXJbdCszXSxyW3QrM109YSx0aGlzLl9kb0NyeXB0QmxvY2socix0LHRoaXMuX2ludktleVNjaGVkdWxlLG90LHV0LGN0LGx0LHJ0KSxhPXJbdCsxXSxyW3QrMV09clt0KzNdLHJbdCszXT1hfX0se2tleToiX2RvQ3J5cHRCbG9jayIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIsYSxuLGkscyxvKXtmb3IodmFyIHU9ZSxjPXRoaXMuX25Sb3VuZHMsbD11W3RdXnJbMF0sZD11W3QrMV1eclsxXSxmPXVbdCsyXV5yWzJdLGg9dVt0KzNdXnJbM10scD00LHY9MTt2PGM7dis9MSl7dmFyIHk9YVtsPj4+MjRdXm5bZD4+PjE2JjI1NV1eaVtmPj4+OCYyNTVdXnNbMjU1JmhdXnJbcF07cCs9MTt2YXIgbT1hW2Q+Pj4yNF1ebltmPj4+MTYmMjU1XV5pW2g+Pj44JjI1NV1ec1syNTUmbF1ecltwXTtwKz0xO3ZhciBnPWFbZj4+PjI0XV5uW2g+Pj4xNiYyNTVdXmlbbD4+PjgmMjU1XV5zWzI1NSZkXV5yW3BdO3ArPTE7dmFyIGs9YVtoPj4+MjRdXm5bbD4+PjE2JjI1NV1eaVtkPj4+OCYyNTVdXnNbMjU1JmZdXnJbcF07cCs9MSxsPXksZD1tLGY9ZyxoPWt9dmFyIGI9KG9bbD4+PjI0XTw8MjR8b1tkPj4+MTYmMjU1XTw8MTZ8b1tmPj4+OCYyNTVdPDw4fG9bMjU1JmhdKV5yW3BdO3ArPTE7dmFyIF89KG9bZD4+PjI0XTw8MjR8b1tmPj4+MTYmMjU1XTw8MTZ8b1toPj4+OCYyNTVdPDw4fG9bMjU1JmxdKV5yW3BdO3ArPTE7dmFyIHc9KG9bZj4+PjI0XTw8MjR8b1toPj4+MTYmMjU1XTw8MTZ8b1tsPj4+OCYyNTVdPDw4fG9bMjU1JmRdKV5yW3BdO3ArPTE7dmFyIHg9KG9baD4+PjI0XTw8MjR8b1tsPj4+MTYmMjU1XTw8MTZ8b1tkPj4+OCYyNTVdPDw4fG9bMjU1JmZdKV5yW3BdO3ArPTEsdVt0XT1iLHVbdCsxXT1fLHVbdCsyXT13LHVbdCszXT14fX1dKSxhfShZZSk7d3Qua2V5U2l6ZT04O3ZhciB4dD1ZZS5fY3JlYXRlSGVscGVyKHd0KSxTdD1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKCl7cmV0dXJuIHIodGhpcyxhKSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gbihhKX0oS2UpO1N0LkVuY3J5cHRvcj1mdW5jdGlvbihlKXtzKGEsZSk7dmFyIHQ9ZihhKTtmdW5jdGlvbiBhKCl7cmV0dXJuIHIodGhpcyxhKSx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gbihhLFt7a2V5OiJwcm9jZXNzQmxvY2siLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZSxhPXRoaXMuX2NpcGhlcixuPWEuYmxvY2tTaXplLGk9dGhpcy5faXYscz10aGlzLl9jb3VudGVyO2kmJih0aGlzLl9jb3VudGVyPWkuc2xpY2UoMCkscz10aGlzLl9jb3VudGVyLHRoaXMuX2l2PXZvaWQgMCk7dmFyIG89cy5zbGljZSgwKTthLmVuY3J5cHRCbG9jayhvLDApLHNbbi0xXT1zW24tMV0rMXwwO2Zvcih2YXIgdT0wO3U8bjt1Kz0xKXJbdCt1XV49b1t1XX19XSksYX0oU3QpLFN0LkRlY3J5cHRvcj1TdC5FbmNyeXB0b3I7dmFyIEF0PXtwYWQ6ZnVuY3Rpb24oKXt9LHVucGFkOmZ1bmN0aW9uKCl7fX0sRHQ9e2RlY3J5cHRXb3JkQXJyYXk6ZnVuY3Rpb24oZSx0LHIpe3ZhciBhPVRlLnBhcnNlKHQpLG49VGUucGFyc2UocmUocikpLGk9QmUuY3JlYXRlKG5ldyBVaW50OEFycmF5KGUpKSxzPXh0LmRlY3J5cHQoWmUuY3JlYXRlKHtjaXBoZXJ0ZXh0Oml9KSxhLHtpdjpuLG1vZGU6U3QscGFkZGluZzpBdH0pO3JldHVybiBEdC53b3JkQXJyYXlUb1VpbnQ4QXJyYXkocyl9LHdvcmRBcnJheVRvVWludDhBcnJheTpmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zaWdCeXRlcyxyPWUud29yZHMsYT1uZXcgVWludDhBcnJheSh0KSxuPTAsaT0wO24hPT10Oyl7dmFyIHM9cltpKytdO2lmKGFbbisrXT0oNDI3ODE5MDA4MCZzKT4+PjI0LG49PT10KWJyZWFrO2lmKGFbbisrXT0oMTY3MTE2ODAmcyk+Pj4xNixuPT09dClicmVhaztpZihhW24rK109KDY1MjgwJnMpPj4+OCxuPT09dClicmVhazthW24rK109MjU1JnN9cmV0dXJuIGF9LGRlY29kZXJBRVNDVFJEYXRhOmZ1bmN0aW9uKGUsdCxyKXtpZihlLnZpZGVvU2VuYyl7dmFyIGE9ZS5raWRWYWx1ZSxuPWUudmlkZW9TZW5jO2Uuc2FtcGxlcy5mb3JFYWNoKChmdW5jdGlvbih0LGkpe3ZhciBzPW5baV0sbz10LmRhdGEsdT1bXSxjPVtdLGw9cy5Jbml0aWFsaXphdGlvblZlY3RvcjtpZihzLnN1YnNhbXBsZXMmJnMuc3Vic2FtcGxlcy5sZW5ndGgpcy5zdWJzYW1wbGVzLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0PWUuQnl0ZXNPZkNsZWFyRGF0YStlLkJ5dGVzT2ZQcm90ZWN0ZWREYXRhLHI9by5zbGljZSgwLHQpO3UucHVzaChyLnNsaWNlKDAsZS5CeXRlc09mQ2xlYXJEYXRhKSksYy5wdXNoKHIuc2xpY2UoZS5CeXRlc09mQ2xlYXJEYXRhKSksbz1vLnNsaWNlKHQpfSkpO2Vsc2V7dmFyIGQ9dC5zaXplO3UucHVzaChvLnNsaWNlKDAsMCkpLGMucHVzaChvLnNsaWNlKDAsZCkpLG89by5zbGljZShkKX12YXIgZj1uZXcgd2U7Zi53cml0ZS5hcHBseShmLGMpO3ZhciBoPXI/cihmLmJ1ZmZlcixhLGwpOkR0LmRlY3J5cHRXb3JkQXJyYXkoZi5idWZmZXIsYSxsKSxwPW5ldyB3ZTt1LmZvckVhY2goKGZ1bmN0aW9uKGUsdCl7dmFyIHI9Y1t0XS5sZW5ndGgsYT1oLnNsaWNlKDAscik7cC53cml0ZShlKSxwLndyaXRlKGEpLGg9aC5zbGljZShyKX0pKSxlLnNhbXBsZXNbaV0uZGF0YT1wLmJ1ZmZlcn0pKX1pZih0LmF1ZGlvU2VuYyl7dmFyIGk9dC5raWRWYWx1ZSxzPXQuYXVkaW9TZW5jO3Quc2FtcGxlcy5mb3JFYWNoKChmdW5jdGlvbihlLGEpe3ZhciBuPXNbYV0sbz1yP3IoZS5kYXRhLGksbi5Jbml0aWFsaXphdGlvblZlY3Rvcik6RHQuZGVjcnlwdFdvcmRBcnJheShlLmRhdGEsaSxuLkluaXRpYWxpemF0aW9uVmVjdG9yKTt0LnNhbXBsZXNbYV0uZGF0YT1vfSkpfX19LEV0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LGEsbixzKXt2YXIgbz10aGlzO3IodGhpcyxlKSxpKHRoaXMsIl92aWRlb1NhbXBsZXMiLFtdKSxpKHRoaXMsIl9hdWRpb1NhbXBsZXMiLFtdKSxpKHRoaXMsIl9sYXN0UmVtYWluQnVmZmVyIixbXSksaSh0aGlzLCJfbGFzdFJlbWFpbkJ1ZmZlclN0YXJ0UG9zIiwwKSx0aGlzLnZpZGVvVHJhY2s9bmV3IHosdGhpcy5hdWRpb1RyYWNrPW5ldyBNLHRoaXMubWV0YWRhdGFUcmFjaz1ufHxuZXcgTix0aGlzLmxvZz1uZXcgQWUoIk1QNERlbXV4ZXIiLCFzfHwhcy5vcGVuTG9nfHwhcy5vcGVuTG9nKSx0JiZ0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0Oyh0PW8uX3ZpZGVvU2FtcGxlcykucHVzaC5hcHBseSh0LHkoZS5mcmFtZXMpKX0pKSxhJiZhLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0Oyh0PW8uX2F1ZGlvU2FtcGxlcykucHVzaC5hcHBseSh0LHkoZS5mcmFtZXMpKX0pKX1yZXR1cm4gbihlLFt7a2V5OiJwYXJzZVNhbXBsZXMiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCFlKXRocm93IG5ldyBFcnJvcigibW9vdiBpcyByZXF1aXJlZCIpO2lmKHRoaXMudmlkZW9UcmFjay5jb2RlY3x8dGhpcy5hdWRpb1RyYWNrLmNvZGVjfHwocGUubW9vdlRvVHJhY2soZSx0aGlzLnZpZGVvVHJhY2ssdGhpcy5hdWRpb1RyYWNrKSx0aGlzLnZpZGVvU2VuYz10aGlzLnZpZGVvVHJhY2sudmlkZW9TZW5jLHRoaXMuYXVkaW9TZW5jPXRoaXMuYXVkaW9UcmFjay5hdWRpb1NlbmMpLCF0aGlzLl9hdWRpb1NhbXBsZXMubGVuZ3RoJiYhdGhpcy5fdmlkZW9TYW1wbGVzLmxlbmd0aCl7dmFyIHQ9cGUubW9vdlRvU2FtcGxlcyhlKTtpZighdCl0aHJvdyBuZXcgRXJyb3IoImNhbm5vdCBwYXJzZSBzYW1wbGVzIGZyb20gbW9vdiBib3giKTt0aGlzLl92aWRlb1NhbXBsZXM9dC52aWRlb1NhbXBsZXN8fFtdLHRoaXMuX2F1ZGlvU2FtcGxlcz10LmF1ZGlvU2FtcGxlc3x8W119fX0se2tleToiZGVtdXgiLHZhbHVlOmZ1bmN0aW9uKGUsdCxyLGEsbil7dGhpcy5wYXJzZVNhbXBsZXMobik7dmFyIGkscyxvLHU9dGhpcy52aWRlb1RyYWNrLGM9dGhpcy5hdWRpb1RyYWNrO2lmKHUuc2FtcGxlcz1bXSxjLnNhbXBsZXM9W10scil7Zm9yKHZhciBsLGQ9MCxmPXJbMF0saD1yWzFdO2Y8PWg7ZisrKXtpZighKGk9dGhpcy5fdmlkZW9TYW1wbGVzW2ZdKSl0aHJvdyBuZXcgRXJyb3IoImNhbm5vdCBmb3VuZCB2aWRlbyBmcmFtZSAjIi5jb25jYXQoZikpO289aS5vZmZzZXQtdCxzPWUuc3ViYXJyYXkobyxvK2kuc2l6ZSksKGw9bmV3IFIoaS5wdHN8fGkuZHRzLGkuZHRzKSkuZHVyYXRpb249aS5kdXJhdGlvbixsLmdvcElkPWkuZ29wSWQsaS5rZXlmcmFtZSYmbC5zZXRUb0tleWZyYW1lKCk7Zm9yKHZhciBwPTAsdj1zLmxlbmd0aC0xO3A8djspZD0kKHMscCkscCs9NCxsLnVuaXRzLnB1c2gocy5zdWJhcnJheShwLHArZCkpLHArPWQ7dS5zYW1wbGVzLnB1c2gobCl9dS5iYXNlTWVkaWFEZWNvZGVUaW1lPXUuc2FtcGxlc1swXS5kdHN9aWYoYSl7Zm9yKHZhciB5PWFbMF0sbT1hWzFdO3k8PW07eSsrKXtpZighKGk9dGhpcy5fYXVkaW9TYW1wbGVzW3ldKSl0aHJvdyBuZXcgRXJyb3IoImNhbm5vdCBmb3VuZCB2aWRlbyBmcmFtZSAjIi5jb25jYXQoeSkpO289aS5vZmZzZXQtdCxzPWUuc3ViYXJyYXkobyxvK2kuc2l6ZSksYy5zYW1wbGVzLnB1c2gobmV3IE8oaS5kdHMscyxpLmR1cmF0aW9uKSl9Yy5iYXNlTWVkaWFEZWNvZGVUaW1lPWMuc2FtcGxlc1swXS5kdHN9cmV0dXJue3ZpZGVvVHJhY2s6dSxhdWRpb1RyYWNrOmMsbWV0YWRhdGFUcmFjazp0aGlzLm1ldGFkYXRhVHJhY2t9fX0se2tleToiZGVtdXhQYXJ0Iix2YWx1ZTpmdW5jdGlvbihlLHQscixhLG4saSxzLG8pe2lmKHRoaXMucGFyc2VTYW1wbGVzKG4pLHRoaXMudmlkZW9UcmFjay51c2VFTUU9aSx0aGlzLmF1ZGlvVHJhY2sudXNlRU1FPWksdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlciYmdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlci5ieXRlTGVuZ3RoPjAmJnQ+dGhpcy5fbGFzdFJlbWFpbkJ1ZmZlclN0YXJ0UG9zJiZ0PD10aGlzLl9sYXN0UmVtYWluQnVmZmVyU3RhcnRQb3MrdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlci5ieXRlTGVuZ3RoKWZvcih2YXIgdT0wO3U8MjA7KXRyeXt2YXIgYz10aGlzLl9sYXN0UmVtYWluQnVmZmVyLnN1YmFycmF5KDAsdC10aGlzLl9sYXN0UmVtYWluQnVmZmVyU3RhcnRQb3MpLGw9bmV3IFVpbnQ4QXJyYXkoZS5ieXRlTGVuZ3RoK2MuYnl0ZUxlbmd0aCk7bC5zZXQoYywwKSxsLnNldChuZXcgVWludDhBcnJheShlKSxjLmJ5dGVMZW5ndGgpLGU9bCx0LT1jLmJ5dGVMZW5ndGgsdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlcj1udWxsLHRoaXMuX2xhc3RSZW1haW5CdWZmZXJTdGFydFBvcz0wO2JyZWFrfWNhdGNoKEUpe2lmKCEodTwyMCkpdGhyb3cgbmV3IEVycm9yKCJuZXcgVWludDhBcnJheSBlcnJvcjosIitFLmVycm9yTWVzc2FnZSk7dSsrfXZhciBkLGYsaCxwPXRoaXMudmlkZW9UcmFjayx2PXRoaXMuYXVkaW9UcmFjaztwLnNhbXBsZXM9W10sdi5zYW1wbGVzPVtdLHAudmlkZW9TZW5jPW51bGwsdi5hdWRpb1NlbmM9bnVsbDt2YXIgeT0wLG09MDtpZih0aGlzLl92aWRlb1NhbXBsZXMubGVuZ3RoPjAmJnIubGVuZ3RoPjApe2Zvcih2YXIgZyxrPWUuYnl0ZUxlbmd0aCt0LGI9clswXTtiPD1yWzFdO2IrKyl7aWYoIShkPXRoaXMuX3ZpZGVvU2FtcGxlc1tiXSkpdGhyb3cgbmV3IEVycm9yKCJjYW5ub3QgZm91bmQgdmlkZW8gZnJhbWUgIyIuY29uY2F0KGIpKTtkLm9mZnNldD49dCYmZC5vZmZzZXQrZC5zaXplPD1rJiYoeT0oaD1kLm9mZnNldC10KStkLnNpemUsZj1lLnN1YmFycmF5KGgseSksKGc9bmV3IFIoZC5wdHN8fGQuZHRzLGQuZHRzKSkuZHVyYXRpb249ZC5kdXJhdGlvbixnLmdvcElkPWQuZ29wSWQsZy5zYW1wbGVPZmZzZXQ9ZC5pbmRleCxkLmtleWZyYW1lJiZnLnNldFRvS2V5ZnJhbWUoKSxnLmRhdGE9ZixnLnNpemU9ZC5zaXplLHAuc2FtcGxlcy5wdXNoKGcpKX1wLnNhbXBsZXMubGVuZ3RoPjAmJihwLmdvcElkPXAuc2FtcGxlc1swXS5nb3BJZCxwLmJhc2VNZWRpYURlY29kZVRpbWU9cC5zYW1wbGVzWzBdLmR0cyxwLnN0YXJ0UHRzPXAuc2FtcGxlc1swXS5wdHMvcC50aW1lc2NhbGUscC5lbmRQdHM9cC5zYW1wbGVzW3Auc2FtcGxlcy5sZW5ndGgtMV0ucHRzL3AudGltZXNjYWxlLHRoaXMudmlkZW9TZW5jJiYocC52aWRlb1NlbmM9dGhpcy52aWRlb1NlbmMuc2xpY2UocC5zYW1wbGVzWzBdLnNhbXBsZU9mZnNldCxwLnNhbXBsZXNbMF0uc2FtcGxlT2Zmc2V0K3Auc2FtcGxlcy5sZW5ndGgpLHAua2lkVmFsdWU9cykpfWlmKHRoaXMuX2F1ZGlvU2FtcGxlcy5sZW5ndGg+MCYmYS5sZW5ndGg+MCl7Zm9yKHZhciBfPWFbMF07Xzw9YVsxXTtfKyspe2lmKCEoZD10aGlzLl9hdWRpb1NhbXBsZXNbX10pKXRocm93IG5ldyBFcnJvcigiY2Fubm90IGZvdW5kIHZpZGVvIGZyYW1lICMiLmNvbmNhdChfKSk7ZC5vZmZzZXQ+PXQmJmQub2Zmc2V0K2Quc2l6ZTw9ZS5ieXRlTGVuZ3RoK3QmJihtPShoPWQub2Zmc2V0LXQpK2Quc2l6ZSxmPWUuc3ViYXJyYXkoaCxtKSx2LnNhbXBsZXMucHVzaChuZXcgTyhkLmR0cyxmLGQuZHVyYXRpb24sZC5pbmRleCkpKX12LnNhbXBsZXMubGVuZ3RoPjAmJih2LmdvcElkPXYuc2FtcGxlc1swXS5nb3BJZHx8cC5nb3BJZCx2LmJhc2VNZWRpYURlY29kZVRpbWU9di5zYW1wbGVzWzBdLmR0cyx2LnN0YXJ0UHRzPXYuc2FtcGxlc1swXS5wdHMvdi50aW1lc2NhbGUsdi5lbmRQdHM9di5zYW1wbGVzW3Yuc2FtcGxlcy5sZW5ndGgtMV0ucHRzL3YudGltZXNjYWxlLHRoaXMuYXVkaW9TZW5jJiYodi5hdWRpb1NlbmM9dGhpcy5hdWRpb1NlbmMuc2xpY2Uodi5zYW1wbGVzWzBdLnNhbXBsZU9mZnNldCx2LnNhbXBsZXNbMF0uc2FtcGxlT2Zmc2V0K3Yuc2FtcGxlcy5sZW5ndGgpLHYua2lkVmFsdWU9cykpfXRoaXMuZGVjb2RlckRhdGEocCx2LG8pO2Zvcih2YXIgdz0wLHg9MDt4PHAuc2FtcGxlcy5sZW5ndGg7eCsrKWZvcih2YXIgUz0wLEE9cC5zYW1wbGVzW3hdLmRhdGEsRD1BLmxlbmd0aC0xO1M8RDspdz0kKEEsUyksUys9NCxwLnNhbXBsZXNbeF0udW5pdHMucHVzaChBLnN1YmFycmF5KFMsUyt3KSksUys9dztyZXR1cm4gdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlcj1lLnN1YmFycmF5KE1hdGgubWF4KHksbSkpLHRoaXMuX2xhc3RSZW1haW5CdWZmZXIuYnl0ZUxlbmd0aD4wP3RoaXMuX2xhc3RSZW1haW5CdWZmZXJTdGFydFBvcz10K2UuYnl0ZUxlbmd0aC10aGlzLl9sYXN0UmVtYWluQnVmZmVyLmJ5dGVMZW5ndGg6dGhpcy5fbGFzdFJlbWFpbkJ1ZmZlclN0YXJ0UG9zPTAse3ZpZGVvVHJhY2s6cCxhdWRpb1RyYWNrOnYsbWV0YWRhdGFUcmFjazp0aGlzLm1ldGFkYXRhVHJhY2t9fX0se2tleToicmVzZXQiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5fdmlkZW9TYW1wbGVzPVtdLHRoaXMuX2F1ZGlvU2FtcGxlcz1bXSx0aGlzLl9sYXN0UmVtYWluQnVmZmVyPW51bGwsdGhpcy5fbGFzdFJlbWFpbkJ1ZmZlclN0YXJ0UG9zPTAsdGhpcy52aWRlb1RyYWNrLnJlc2V0KCksdGhpcy5hdWRpb1RyYWNrLnJlc2V0KCksdGhpcy5tZXRhZGF0YVRyYWNrLnJlc2V0KCl9fSx7a2V5OiJkZWNvZGVyRGF0YSIsdmFsdWU6ZnVuY3Rpb24oZSx0LHIpe2UudXNlRU1FfHx0LnVzZUVNRXx8RHQuZGVjb2RlckFFU0NUUkRhdGEoZSx0LHIpfX1dLFt7a2V5OiJwcm9iZSIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHBlLnByb2JlKGUpfX1dKSxlfSgpLEJ0PXtub3dUaW1lOmZ1bmN0aW9uKCl7dHJ5e3JldHVybiBwYXJzZUludChwZXJmb3JtYW5jZS5ub3coKSwxMCl9Y2F0Y2goZSl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9fSxjb25jYXREYXRhOmZ1bmN0aW9uKGUsdCl7dmFyIHI9W10sYT0wO2UmJnIucHVzaChlKSx0JiZyLnB1c2godCksci5ldmVyeSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihhKz1lLmJ5dGVMZW5ndGgpLCEwfSkpO3ZhciBuPW5ldyBVaW50OEFycmF5KGEpLGk9MDtyZXR1cm4gci5ldmVyeSgoZnVuY3Rpb24oZSl7cmV0dXJuIGUmJihuLnNldChlLGkpLGkrPWUuYnl0ZUxlbmd0aCksITB9KSksbn19O29ubWVzc2FnZT1mdW5jdGlvbihlKXt2YXIgcj1lLmRhdGE7c3dpdGNoKHIubWV0aG9kKXtjYXNlImluaXQiOnRoaXMuY29kZWNUeXBlPXIuYXJncy5jb2RlY1R5cGUsdGhpcy5vcGVubG9nPXIuYXJncy5vcGVuTG9nLHRoaXMuTVA0RGVtdXhlcj1udWxsLHRoaXMuRk1QNFJlbXV4ZXI9bnVsbCx0aGlzLl9uZWVkSW5pdFNlZ21lbnQ9ITAsdGhpcy5zdXBwb3J0SGV2Yz1yLmFyZ3Muc3VwcG9ydEhldmM7YnJlYWs7Y2FzZSJ0cmFuc211eCI6dmFyIGE9ZS5kYXRhLmFyZ3Msbj1uZXcgVWludDhBcnJheShlLmRhdGEuYnVmZmVyKTt0aGlzLk1QNERlbXV4ZXJ8fCh0aGlzLk1QNERlbXV4ZXI9bmV3IEV0KG51bGwsbnVsbCxudWxsLHtvcGVubG9nOnRoaXMub3BlbmxvZ30pKTt2YXIgaSxzPXRoaXMuTVA0RGVtdXhlci5kZW11eFBhcnQobixhLnN0YXJ0LGEudmlkZW9JZHgsYS5hdWRpb0lkeCxhLm1vb3YsYS51c2VFTUUsYS5raWRWYWx1ZSk7aWYodGhpcy5GTVA0UmVtdXhlcnx8ImgyNjUiPT09dGhpcy5jb2RlY1R5cGUmJiF0aGlzLnN1cHBvcnRIZXZjfHwodGhpcy5GTVA0UmVtdXhlcj1uZXcgRGUodGhpcy5NUDREZW11eGVyLnZpZGVvVHJhY2ssdGhpcy5NUDREZW11eGVyLmF1ZGlvVHJhY2sse29wZW5Mb2c6dGhpcy5vcGVubG9nfSkpLHRoaXMuRk1QNFJlbXV4ZXIpe3ZhciBvPXRoaXMuRk1QNFJlbXV4ZXIucmVtdXgodGhpcy5fbmVlZEluaXRTZWdtZW50LHtpbml0TWVyZ2U6ITB9KTtvLmluaXRTZWdtZW50JiYodGhpcy5fbmVlZEluaXRTZWdtZW50PSExKSxpPXtidWZmZXI6QnQuY29uY2F0RGF0YShvLmF1ZGlvU2VnbWVudCxvLnZpZGVvU2VnbWVudCkscmFuZ2U6YS5jb250ZXh0LnJhbmdlLHN0YXRlOmEuY29udGV4dC5zdGF0ZSxjb250ZXh0OntyYW5nZTphLmNvbnRleHQucmFuZ2UsZnJhZ0luZGV4OmEuY29udGV4dC5mcmFnSW5kZXgsc3RhcnRQdHM6TWF0aC5taW4ocy52aWRlb1RyYWNrLnN0YXJ0UHRzLHMuYXVkaW9UcmFjay5zdGFydFB0cyksZW5kUHRzOk1hdGgubWF4KHMudmlkZW9UcmFjay5lbmRQdHMscy5hdWRpb1RyYWNrLmVuZFB0cyl9LGluaXRTZWc6by5pbml0U2VnbWVudH19dGhpcy5wb3N0TWVzc2FnZSh7bWV0aG9kOiJ0cmFuc211eCIsaWQ6ZS5kYXRhLmlkLGFyZ3M6dCh7fSxpKX0pO2JyZWFrO2Nhc2UicmVzZXQiOnRoaXMuRk1QNFJlbXV4ZXImJnRoaXMuRk1QNFJlbXV4ZXIucmVzZXQoKSx0aGlzLk1QNERlbXV4ZXImJnRoaXMuTVA0RGVtdXhlci5yZXNldCgpLHRoaXMuRk1QNFJlbXV4ZXI9bnVsbCx0aGlzLk1QNERlbXV4ZXI9bnVsbCx0aGlzLl9uZWVkSW5pdFNlZ21lbnQ9ITB9fX0oKTsK";
var blob = typeof window !== "undefined" && window.Blob && new Blob([atob(encodedJs)], {
  type: "text/javascript;charset=utf-8"
});
function WorkerWrapper() {
  var objURL = blob && (window.URL || window.webkitURL).createObjectURL(blob);
  try {
    return objURL ? new Worker(objURL, {}) : new Worker("data:application/javascript;base64," + encodedJs, {
      type: "module"
    });
  } finally {
    objURL && (window.URL || window.webkitURL).revokeObjectURL(objURL);
  }
}

// node_modules/xgplayer-mp4/es/worker/index.js
var TransmuxerWorkerControl = function(_EventEmitter) {
  _inherits(TransmuxerWorkerControl2, _EventEmitter);
  var _super = _createSuper(TransmuxerWorkerControl2);
  function TransmuxerWorkerControl2(options) {
    var _this;
    _classCallCheck(this, TransmuxerWorkerControl2);
    _this = _super.call(this);
    _this.openlog = options.openLog;
    _this.codecType = options.codecType;
    _this.supportHevc = options.supportHevc;
    _this.worker = new WorkerWrapper();
    _this.worker.onmessage = function(e) {
      _this.emit(e.data.method, e.data);
    };
    _this.worker.postMessage({
      method: "init",
      id: options.id || 0,
      args: {
        openlog: _this.openlog,
        supportHevc: _this.supportHevc,
        codecType: _this.codecType
      }
    });
    return _this;
  }
  _createClass(TransmuxerWorkerControl2, [{
    key: "transmux",
    value: function transmux(id, data, start, videoIdx, audioIdx, moov, useEME, kidValue, context) {
      var buffer = data.buffer;
      this.worker && this.worker.postMessage({
        method: "transmux",
        id,
        buffer,
        args: {
          start,
          videoIdx,
          audioIdx,
          moov,
          useEME,
          kidValue,
          context
        }
      }, [buffer]);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.worker && this.worker.postMessage({
        method: "reset"
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.worker && this.worker.terminate();
    }
  }]);
  return TransmuxerWorkerControl2;
}(import_eventemitter32.default);

// node_modules/xgplayer-mp4/es/mp4.js
var MP4_EVENTS = {
  ERROR: "error",
  META_READY: "metaReady",
  MOOV_REQ_PROGRESS: "moov_request_Progress",
  UPDATE_LOAD_IDX: "update_load_fragmentIdx"
};
var MP4 = function(_EventEmitter) {
  _inherits(MP42, _EventEmitter);
  var _super = _createSuper(MP42);
  function MP42(url, _options) {
    var _this;
    _classCallCheck(this, MP42);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "onprogressDataArrive", function() {
      var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(data, state, options) {
        var curSegRange;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                if (data && data.byteLength > 0) {
                  curSegRange = _this.timeRange[options.index].range;
                  if (curSegRange && options.range[1] >= curSegRange[1] && !state) {
                    state = true;
                  }
                  _this.log("[mp4.loadFragment onprogressDataArrive ] receive data, >>> index,", options.index, ",range,", JSON.stringify(options.range), ", dataLen,", data.byteLength);
                  _this._mux(data, options.range[0], options.index, state);
                }
                if (state) {
                  _this.timeRange[options.index].downloaded = true;
                  _this.bufferLoadedPos = -1;
                  _this.log("[FragLoadDowned],fragmentIdx,", options.index, ",rangeEnd,", options.range[1]);
                }
              case 2:
              case "end":
                return _context.stop();
            }
        }, _callee);
      }));
      return function(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }());
    _this.url = url;
    _this.options = MP42.getDefaultConfig();
    Object.keys(_options).map(function(key) {
      _options[key] !== void 0 && _options[key] !== null && (_this.options[key] = _options[key]);
    });
    _this.timeRange = [];
    _this.CHUNK_SIZE = _this.options.chunkSize;
    _this.bufferLoaded = new Uint8Array(0);
    _this.bufferLoadedPos = 0;
    _this.meta = null;
    _this.videoTrak = null;
    _this.audioTrak = null;
    _this.canDownload = true;
    _this._loadSuccessCallBack = null;
    _this._isPending = false;
    _this._metaLoading = false;
    _this.MP4Loader = new MP4Loader(_objectSpread2(_objectSpread2({
      segmentDuration: _this.options.segmentDuration,
      url,
      vid: _options.vid,
      retry: _this.options.retryCount,
      retryDelay: _this.options.retryDelay,
      timeout: _this.options.timeout
    }, _options.reqOptions), {}, {
      openLog: checkOpenLog()
    }));
    _this.MP4Demuxer = null;
    _this.FMP4Remuxer = null;
    _this._needInitSegment = true;
    _this._switchBitRate = false;
    _this.enableWorker = _this.options.enableWorker;
    if (_this.enableWorker && typeof Worker !== "undefined") {
      try {
        _this.workerSequence = 0;
        _this.transmuxerWorkerControl = new TransmuxerWorkerControl({
          id: _this.workerSequence,
          codecType: _options.codecType,
          supportHevc: _this.options.supportHevc,
          openLog: checkOpenLog()
        });
        _this.transmuxerWorkerControl.on("transmux", function(muxRes) {
          var res = muxRes.args;
          _this.log("[transmuxerworker end] ,range, ", JSON.stringify(res.range), ",dataLen,", res.buffer.byteLength, res.context);
          _this._loadSuccessCallBack && _this._loadSuccessCallBack(res);
        });
      } catch (error) {
        _this.log("Error in worker:", error);
        _this.enableWorker = false;
        _this.transmuxerWorkerControl = null;
      }
    }
    if (!_this.enableWorker) {
      _this.MP4Demuxer = null;
      _this.FMP4Remuxer = null;
    }
    _this.seekTime = -1;
    _this.changeBitRateTime = -1;
    return _this;
  }
  _createClass(MP42, [{
    key: "changeBitRate",
    value: function() {
      var _changeBitRate = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(bitRateInfo) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                this.url = bitRateInfo.url;
                _context2.next = 3;
                return this.MP4Loader.changeUrl(this.url, this.options.vid + Date.now(), this.CHUNK_SIZE);
              case 3:
                this._switchBitRate = true;
                this.log("[switchBitrate] changeUrl, bitRate,", this.url);
              case 5:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function changeBitRate(_x4) {
        return _changeBitRate.apply(this, arguments);
      }
      return changeBitRate;
    }()
  }, {
    key: "log",
    value: function log$1(message) {
      var options = this.options;
      var newMessage = options && options.vid ? "[MP4] ".concat(options.vid, " ").concat(message) : "[MP4] ".concat(message);
      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }
      log.apply(void 0, [newMessage].concat(optionalParams));
    }
  }, {
    key: "errorHandler",
    value: function() {
      var _errorHandler = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(error, state) {
        var response, message, vid, _error;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                response = error.response, message = error.message;
                vid = this.options ? this.options.vid : "";
                _error = null;
                this._isPending = true;
                if (response) {
                  _error = new NetWorkError("network", response.status, {
                    httpText: response.httpText,
                    message,
                    url: response.url
                  });
                  this.emit(MP4_EVENTS.ERROR, _error);
                } else {
                  console.log("[MP4] [".concat(vid, "] errorHandler,"), error);
                  _error = error;
                  this.emit(MP4_EVENTS.ERROR, _error);
                }
              case 6:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function errorHandler(_x5, _x6) {
        return _errorHandler.apply(this, arguments);
      }
      return errorHandler;
    }()
  }, {
    key: "init",
    value: function() {
      var _init = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.url) {
                  _context4.next = 3;
                  break;
                }
                _context4.next = 3;
                return this.MP4Loader.changeUrl(this.url, this.options.vid + Date.now(), this.CHUNK_SIZE);
              case 3:
                _context4.next = 5;
                return this.getMetaInfo();
              case 5:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "getTimeRange",
    value: function getTimeRange() {
      var range = [];
      var timeRange = null;
      for (var i = 0; this.videoTrak && i < this.videoTrak.length; i++) {
        timeRange = {
          startTime: this.videoTrak[i].startTime,
          endTime: this.videoTrak[i].endTime,
          downloaded: false,
          isLoading: false
        };
        range.push(timeRange);
      }
      if (this.audioTrak && this.audioTrak.length > range.length) {
        for (var j = range.length; j < this.audioTrak.length; j++) {
          timeRange = {
            startTime: Math.max(this.audioTrak[j].startTime, timeRange ? timeRange.endTime : 0),
            endTime: Math.max(this.audioTrak[j].endTime, timeRange ? timeRange.endTime : 0),
            downloaded: false,
            isLoading: false
          };
          range.push(timeRange);
        }
      }
      return range;
    }
  }, {
    key: "getMetaInfo",
    value: function() {
      var _getMetaInfo = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6() {
        var _this2 = this;
        var isEmitMetaEvent, startPos, onProgressHandle, _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                isEmitMetaEvent = _args6.length > 0 && _args6[0] !== void 0 ? _args6[0] : true;
                _context6.prev = 1;
                this._metaLoading = true;
                this.log("getMetaInfo start");
                this.bufferLoaded = new Uint8Array(0);
                startPos = 0;
                onProgressHandle = function() {
                  var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(data, state, options) {
                    var metaInfo;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1)
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _this2.log("getMetaInfo onProgressHandle, dataLen,", data ? data.byteLength : -1, ", state,", state, ",range,", JSON.stringify(options.range));
                            if (data) {
                              if (options.range[0] === startPos) {
                                _this2.bufferLoaded = (0, import_concat_typed_array.default)(Uint8Array, _this2.bufferLoaded, new Uint8Array(data));
                                startPos += data.byteLength;
                              }
                            }
                            if (options.meta && !_this2.meta) {
                              metaInfo = options.meta;
                              _this2.videoTrak = metaInfo.videoSegments;
                              _this2.audioTrak = metaInfo.audioSegments;
                              _this2.timeRange = _this2.getTimeRange();
                              _this2.meta = _objectSpread2(_objectSpread2({}, metaInfo.meta), {}, {
                                ext: {
                                  videoTrak: _this2.videoTrak,
                                  audioTrak: _this2.audioTrak
                                }
                              });
                              metaInfo.bufferLoaded = _this2.bufferLoaded;
                              _this2.log("meta reach");
                              if (isEmitMetaEvent) {
                                _this2.emit(MP4_EVENTS.META_READY, _this2.meta);
                              }
                            }
                            if (_this2.meta && state) {
                              _this2.log("[getMetaInfo req end]");
                              _this2._metaLoading = false;
                            }
                            if (_this2.meta && (data || state)) {
                              _this2.log("emit moov_req_progress");
                              _this2.emit(MP4_EVENTS.MOOV_REQ_PROGRESS);
                            }
                          case 5:
                          case "end":
                            return _context5.stop();
                        }
                    }, _callee5);
                  }));
                  return function onProgressHandle2(_x7, _x8, _x9) {
                    return _ref2.apply(this, arguments);
                  };
                }();
                _context6.next = 9;
                return this.MP4Loader.loadMetaProcess(this.MP4Loader.cache, [0, this.CHUNK_SIZE], onProgressHandle);
              case 9:
                _context6.next = 15;
                break;
              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);
                console.error("[MP4] trigger errorHandler getMetaInfo", _context6.t0 === null || _context6.t0 === void 0 ? void 0 : _context6.t0.message);
                this.loadError(_context6.t0, "getMetaInfo");
              case 15:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this, [[1, 11]]);
      }));
      function getMetaInfo() {
        return _getMetaInfo.apply(this, arguments);
      }
      return getMetaInfo;
    }()
  }, {
    key: "getFragmentIdx",
    value: function getFragmentIdx(time) {
      var video;
      var audio;
      if (!this.videoTrak.length) {
        audio = this.audioTrak.find(function(x) {
          return x.startTime <= time && x.endTime > time;
        });
        return audio ? audio.index : 0;
      } else {
        video = this.videoTrak.find(function(x) {
          return x.startTime <= time && x.endTime > time;
        });
        audio = this.audioTrak.find(function(x) {
          return x.startTime <= time && x.endTime > time;
        });
        if (video && audio) {
          return Math.min(video.index, audio.index);
        } else if (video || audio) {
          return video ? video.index : audio.index;
        } else {
          var last = Number.MAX_VALUE;
          if (this.videoTrak && this.videoTrak.length > 0) {
            last = this.videoTrak.length - 1;
          }
          if (this.audioTrak && this.audioTrak.length > 0) {
            last = Math.min(this.audioTrak.length - 1, last);
          }
          return last;
        }
      }
    }
  }, {
    key: "_checkHasMeta",
    value: function() {
      var _checkHasMeta2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee7() {
        var metaInfo;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                this.log(" loadMeta start");
                this._metaLoading = true;
                _context7.next = 4;
                return this.MP4Loader.loadMeta(this.MP4Loader.cache, Math.round(this.CHUNK_SIZE / 2));
              case 4:
                metaInfo = _context7.sent;
                this._metaLoading = false;
                this.videoTrak = metaInfo.videoSegments;
                this.audioTrak = metaInfo.audioSegments;
                this.meta = _objectSpread2(_objectSpread2({}, metaInfo.meta), {}, {
                  ext: {
                    videoTrak: this.videoTrak,
                    audioTrak: this.audioTrak
                  }
                });
                this.timeRange = this.getTimeRange();
                this.bufferLoaded = new Uint8Array(0);
                metaInfo.bufferLoaded = this.bufferLoaded;
                return _context7.abrupt("return", true);
              case 13:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this);
      }));
      function _checkHasMeta() {
        return _checkHasMeta2.apply(this, arguments);
      }
      return _checkHasMeta;
    }()
  }, {
    key: "resetFragmentLoadState",
    value: function resetFragmentLoadState(fragIndex) {
      for (var i = 0; i < this.timeRange.length; i++) {
        if (i < fragIndex) {
          this.timeRange[i].downloaded = true;
          this.timeRange[i].isLoading = true;
        } else {
          this.timeRange[i].downloaded = false;
          this.timeRange[i].isLoading = false;
        }
      }
    }
  }, {
    key: "getFragRange",
    value: function getFragRange(fragIndex) {
      var _videoSeg, _audioSeg, _videoSeg2, _audioSeg2;
      var videoSeg = null;
      if (this.videoTrak) {
        videoSeg = fragIndex < this.videoTrak.length ? this.videoTrak[fragIndex] : this.videoTrak[this.videoTrak.length - 1];
      }
      var audioSeg = null;
      if (this.audioTrak) {
        audioSeg = fragIndex < this.audioTrak.length ? this.audioTrak[fragIndex] : this.audioTrak[this.audioTrak.length - 1];
      }
      var videodiff = 0, audiodiff = 0;
      if (this.videoTrak && fragIndex >= this.videoTrak.length - 1) {
        videodiff = -1;
      }
      if (this.audioTrak && fragIndex >= this.audioTrak.length - 1) {
        audiodiff = -1;
      }
      var range = [Math.min(((_videoSeg = videoSeg) === null || _videoSeg === void 0 ? void 0 : _videoSeg.range[0]) || Infinity, ((_audioSeg = audioSeg) === null || _audioSeg === void 0 ? void 0 : _audioSeg.range[0]) || Infinity), Math.max(((_videoSeg2 = videoSeg) === null || _videoSeg2 === void 0 ? void 0 : _videoSeg2.range[1]) + videodiff || 0, ((_audioSeg2 = audioSeg) === null || _audioSeg2 === void 0 ? void 0 : _audioSeg2.range[1]) + audiodiff || 0)];
      if (fragIndex < this.timeRange.length) {
        this.timeRange[fragIndex].range = range;
      }
      return range;
    }
  }, {
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8(fragIndex, successCallback) {
        var metaReady, range, subRange;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch (_context8.prev = _context8.next) {
              case 0:
                this._loadSuccessCallBack = successCallback;
                if (!(this._switchBitRate && !this._metaLoading)) {
                  _context8.next = 12;
                  break;
                }
                this.log("[switchBitrate], switch bitRate start load, time,", fragIndex >= this.videoTrak.length ? this.audioTrak[fragIndex].startTime : this.videoTrak[fragIndex].startTime, ", fragIndex,", fragIndex);
                _context8.next = 5;
                return this._checkHasMeta();
              case 5:
                metaReady = _context8.sent;
                if (this.changeBitRateTime > 0) {
                  if (this.timeRange[fragIndex].startTime <= this.changeBitRateTime && this.changeBitRateTime < this.timeRange[fragIndex].endTime) {
                    this.log("[switchBitrate], not need update load fragIndex", fragIndex, ",stTime,", this.changeBitRateTime);
                  } else {
                    fragIndex = this.getFragmentIdx(this.changeBitRateTime);
                    this.log("[switchBitrate], need update load fragIndex", fragIndex, ",stTime,", this.changeBitRateTime, ",newBitrateTimeRange,", this.timeRange[fragIndex].startTime, "-", this.timeRange[fragIndex].endTime);
                    this.emit(MP4_EVENTS.UPDATE_LOAD_IDX, fragIndex);
                  }
                  this.seekTime = this.changeBitRateTime;
                  this.changeBitRateTime = -1;
                }
                this.resetFragmentLoadState(fragIndex);
                this.log("[switchBitrate], reset timerange state,", fragIndex);
                this._needInitSegment = true;
                this.resetTansmuxer();
                if (metaReady) {
                  this._switchBitRate = false;
                }
              case 12:
                if (!(this._switchBitRate && this._metaLoading)) {
                  _context8.next = 14;
                  break;
                }
                return _context8.abrupt("return");
              case 14:
                range = this.getFragRange(fragIndex);
                this.log("loadFragment,", fragIndex, ",range,", JSON.stringify(range));
                if (this.seekTime > 0) {
                  subRange = this.getSubRange(fragIndex, this.seekTime, range);
                  this.loadFragment(fragIndex, subRange);
                  this.seekTime = -1;
                } else {
                  this.loadFragment(fragIndex, range);
                }
              case 17:
              case "end":
                return _context8.stop();
            }
        }, _callee8, this);
      }));
      function load(_x10, _x11) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "getSubRange",
    value: function getSubRange(fragIndex, time, range) {
      var videoStartRange = range[0];
      var audioStartRange = range[0];
      var i = 1;
      var find = false;
      this.log(">>>>>getSubRange time,", time, JSON.stringify(range));
      if (this.videoTrak) {
        var videoSeg = fragIndex < this.videoTrak.length ? this.videoTrak[fragIndex] : this.videoTrak[this.videoTrak.length - 1];
        var keyFrameList = videoSeg.frames.filter(getKeyFrameList);
        var videoTimescale = this.meta.videoTimescale;
        var startTime = keyFrameList[0].startTime / videoTimescale;
        this.log(">>>>>getSubRange video, startTime,", videoSeg.startTime, ",endTime,", videoSeg.endTime);
        for (var j = 0; j < keyFrameList.length; j++) {
          this.log(">>>>>getSubRange video keyFrameList, startTime,", keyFrameList[j].startTime / videoTimescale, ",range,", keyFrameList[j].offset);
        }
        for (; i < keyFrameList.length; i++) {
          var endTime = keyFrameList[i].startTime / videoTimescale;
          if (startTime <= time && time < endTime && range[0] < keyFrameList[i - 1].offset) {
            videoStartRange = keyFrameList[i - 1].offset;
            find = true;
            this.log(">>>>>getSubRange video end, startTime,", startTime, ",endTime,", endTime, ",startRange,", videoStartRange, ", keyFrameIndex,", i - 1);
            break;
          }
          startTime = endTime;
        }
        if (!find && startTime <= time && time < videoSeg.endTime + 0.8) {
          videoStartRange = keyFrameList[i - 1].offset;
          this.log(">>>>>getSubRange video last, startTime,", startTime, ",endTime,", videoSeg.endTime, ",startRange,", videoStartRange);
        }
      }
      i = 1;
      if (this.audioTrak) {
        var audioSeg = fragIndex < this.audioTrak.length ? this.audioTrak[fragIndex] : this.audioTrak[this.audioTrak.length - 1];
        var frameList = audioSeg.frames;
        var audioTimescale = this.meta.audioTimescale;
        i = Math.floor((time * audioTimescale - frameList[0].startTime) / audioSeg.frames[0].duration);
        i = Math.min(frameList.length - 1, i);
        var starttime = i > 0 ? frameList[i - 1].startTime / audioTimescale : frameList[0].startTime / audioTimescale;
        for (; i >= 0 && i < frameList.length; ) {
          if (i > 0 && starttime > time) {
            i -= 1;
            starttime = frameList[i].startTime / audioTimescale;
            continue;
          }
          var endtime = (frameList[i].startTime + frameList[i].duration) / audioTimescale;
          if (starttime <= time && time < endtime && range[0] < frameList[i].offset) {
            audioStartRange = frameList[i].offset;
            find = true;
            this.log(">>>>>getSubRange audio end, startTime,", starttime, ",endTime,", endtime, ",startRange,", audioStartRange, ", index,", i);
            break;
          }
          starttime = endtime;
          i++;
        }
      }
      var finalRange = [Math.min(audioStartRange, videoStartRange), range[1]];
      this.log(">>>>>getSubRange finalRange ", JSON.stringify(finalRange), ",oldRange,", JSON.stringify(range));
      return finalRange;
    }
  }, {
    key: "_mux",
    value: function _mux(buffer, start, fragIndex, state) {
      var videoIndexRange = this.getSamplesRange(fragIndex, "video");
      var audioIndexRange = this.getSamplesRange(fragIndex, "audio");
      var range = [start, start + buffer.byteLength];
      if (this.transmuxerWorkerControl) {
        var context = {
          range,
          state,
          fragIndex
        };
        this.log("[transmuxerworker start] ,range, ", JSON.stringify(range), ",dataLen,", buffer.byteLength, context);
        this.transmuxerWorkerControl.transmux(this.workerSequence, buffer, start, videoIndexRange, audioIndexRange, this.meta.moov, this.useEME, this.kidValue, context);
      } else {
        try {
          if (!this.MP4Demuxer) {
            this.MP4Demuxer = new MP4Demuxer(this.videoTrak, this.audioTrak, null, {
              openLog: checkOpenLog()
            });
          }
          var demuxRet = this.MP4Demuxer.demuxPart(buffer, start, videoIndexRange, audioIndexRange, this.meta.moov, this.useEME, this.kidValue);
          if (!this.FMP4Remuxer && (!this.checkCodecH265() || this.options.supportHevc)) {
            this.FMP4Remuxer = new FMP4Remuxer(this.MP4Demuxer.videoTrack, this.MP4Demuxer.audioTrack, {
              openLog: checkOpenLog()
            });
          }
          var res;
          this.log("[mux], videoTimeRange,", demuxRet.videoTrack ? [demuxRet.videoTrack.startPts, demuxRet.videoTrack.endPts] : null, ",audioTimeRange,", demuxRet.audioTrack ? [demuxRet.audioTrack.startPts, demuxRet.audioTrack.endPts] : null);
          var startPts = Math.min(demuxRet.videoTrack.startPts, demuxRet.audioTrack.startPts);
          var endPts = Math.max(demuxRet.videoTrack.endPts, demuxRet.audioTrack.endPts);
          var timeRange = [startPts, endPts];
          if (this.FMP4Remuxer) {
            var remuxRes = this.FMP4Remuxer.remux(this._needInitSegment, {
              initMerge: true,
              range
            });
            remuxRes.initSegment && (this._needInitSegment = false);
            var data = util.concatData(remuxRes.audioSegment, remuxRes.videoSegment);
            res = {
              buffer: data,
              range,
              state,
              context: {
                range,
                fragIndex,
                timeRange
              },
              initSeg: remuxRes.initSegment
            };
          } else {
            res = {
              videoTrack: demuxRet.videoTrack,
              audioTrack: demuxRet.audioTrack,
              buffer: null,
              range,
              state,
              context: {
                range,
                fragIndex,
                timeRange
              }
            };
          }
          this._loadSuccessCallBack && this._loadSuccessCallBack(res);
        } catch (e) {
          console.error("mux err:", e);
          var err = new ParserError(ERROR_TYPES.remux, ERROR_CODES.muxError, {
            msg: JSON.stringify(e)
          });
          this.errorHandler(err, "mux", {
            fragIndex,
            range: [start, start + buffer.byteLength]
          });
        }
      }
    }
  }, {
    key: "getSamplesRange",
    value: function getSamplesRange(fragmentIdx, type) {
      var range = [];
      switch (type) {
        case "video":
          if (this.videoTrak && fragmentIdx < this.videoTrak.length) {
            var frames = this.videoTrak[fragmentIdx].frames;
            range.push(frames[0].index);
            range.push(frames[frames.length - 1].index);
          }
          break;
        case "audio":
          if (this.audioTrak && fragmentIdx < this.audioTrak.length) {
            var _frames = this.audioTrak[fragmentIdx].frames;
            range.push(_frames[0].index);
            range.push(_frames[_frames.length - 1].index);
          }
          break;
        default:
          console.warn("[getSamplesRange] type ", type, " is invalid");
          break;
      }
      return range;
    }
  }, {
    key: "loadFragment",
    value: function() {
      var _loadFragment = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9(fragIndex, range) {
        var start, buffer, _start, _buffer;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1)
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(this._isPending || range === [0, 0] || this.timeRange[fragIndex].isLoading)) {
                  _context9.next = 2;
                  break;
                }
                return _context9.abrupt("return");
              case 2:
                this.log("[MP4.loadFragment] ,fragIndex,", fragIndex, ",range ", range, ",len ,", range[1] - range[0], ", bufferLoaded_Len,", this.bufferLoaded.byteLength);
                if (!(range.length >= 2 && range[1] && range[1] > 0 && range[1] <= this.bufferLoaded.byteLength)) {
                  _context9.next = 13;
                  break;
                }
                this.timeRange[fragIndex].isLoading = true;
                start = Math.max(range[0], this.bufferLoadedPos);
                buffer = new Uint8Array(this.bufferLoaded.slice(start, range[1]));
                this.log("[mp4.loadFragment] has all data: ", start, range[1]);
                this.timeRange[fragIndex].downloaded = true;
                this.bufferLoadedPos = -1;
                this._mux(buffer, start, fragIndex, true);
                _context9.next = 34;
                break;
              case 13:
                if (!(range.length >= 2 && range[0] && range[0] <= this.bufferLoaded.byteLength)) {
                  _context9.next = 29;
                  break;
                }
                if (this.timeRange[fragIndex].isLoading) {
                  _context9.next = 27;
                  break;
                }
                _start = Math.max(range[0], this.bufferLoadedPos);
                _buffer = new Uint8Array(this.bufferLoaded.slice(_start, range[1]));
                if (!(_buffer.byteLength > 0)) {
                  _context9.next = 22;
                  break;
                }
                this.bufferLoadedPos = _start + _buffer.byteLength;
                this.log("[mp4.loadFragment] has part data: ", _start, _start + _buffer.byteLength);
                this._mux(_buffer, _start, fragIndex, range[1] <= this.bufferLoadedPos);
                return _context9.abrupt("return");
              case 22:
                if (!(!this._metaLoading && !this.timeRange[fragIndex].isLoading)) {
                  _context9.next = 27;
                  break;
                }
                this.log("[mp4.loadFragment] ready to load part data >>> ", this.bufferLoaded.byteLength, range[1]);
                this.timeRange[fragIndex].isLoading = true;
                _context9.next = 27;
                return this.startLoad([this.bufferLoaded.byteLength, range[1]], fragIndex);
              case 27:
                _context9.next = 34;
                break;
              case 29:
                if (!((!this._metaLoading || range[0] >= this.CHUNK_SIZE) && !this.timeRange[fragIndex].isLoading)) {
                  _context9.next = 34;
                  break;
                }
                this.timeRange[fragIndex].isLoading = true;
                this.log("[mp4.loadFragment],ready to load all data ,segmentIdx, ", fragIndex, ",range >>> ", JSON.stringify(range));
                _context9.next = 34;
                return this.startLoad(range, fragIndex);
              case 34:
              case "end":
                return _context9.stop();
            }
        }, _callee9, this);
      }));
      function loadFragment(_x12, _x13) {
        return _loadFragment.apply(this, arguments);
      }
      return loadFragment;
    }()
  }, {
    key: "startLoad",
    value: function() {
      var _startLoad = _asyncToGenerator(_regeneratorRuntime().mark(function _callee10(range, fragIndex) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1)
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.MP4Loader.loadData(range, this.MP4Loader.cache, {
                  index: fragIndex,
                  onProgress: this.onprogressDataArrive,
                  onProcessMinLen: this.options.onProcessMinLen
                });
              case 3:
                _context10.next = 9;
                break;
              case 5:
                _context10.prev = 5;
                _context10.t0 = _context10["catch"](0);
                console.error("[MP4] trigger errorHandler getMetaInfo", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
                this.loadError(_context10.t0, "loadFragment", {
                  range,
                  fragIndex
                });
              case 9:
              case "end":
                return _context10.stop();
            }
        }, _callee10, this, [[0, 5]]);
      }));
      function startLoad(_x14, _x15) {
        return _startLoad.apply(this, arguments);
      }
      return startLoad;
    }()
  }, {
    key: "loadError",
    value: function loadError(e, loadState, context) {
      var _e$response;
      !e.response && (e.response = {});
      if (e.isTimeout) {
        e.response.status = "timeout";
      } else if (!(e !== null && e !== void 0 && (_e$response = e.response) !== null && _e$response !== void 0 && _e$response.status)) {
        e.response.status = "networkError";
      }
      this.errorHandler(e, loadState, context);
    }
  }, {
    key: "cancelLoading",
    value: function() {
      var _cancelLoading = _asyncToGenerator(_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1)
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return this.MP4Loader;
              case 2:
                _context11.t0 = _context11.sent;
                if (!_context11.t0) {
                  _context11.next = 5;
                  break;
                }
                this.MP4Loader.cancel();
              case 5:
              case "end":
                return _context11.stop();
            }
        }, _callee11, this);
      }));
      function cancelLoading() {
        return _cancelLoading.apply(this, arguments);
      }
      return cancelLoading;
    }()
  }, {
    key: "update",
    value: function update(url) {
      this.url = url;
    }
  }, {
    key: "checkCodecH265",
    value: function checkCodecH265() {
      var isHvc = this.meta && (this.meta.videoCodec.indexOf("hvc1") > -1 || this.meta.videoCodec.indexOf("hev1") > -1);
      return isHvc;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.hasDestroyed) {
        return;
      }
      this.resetTansmuxer();
      this.transmuxerWorkerControl && this.transmuxerWorkerControl.destroy();
      this._isPending = false;
      this._metaLoading = false;
      this.bufferLoadedPos = 0;
      this.bufferLoaded = new Uint8Array(0);
      if (this.MP4Loader) {
        this.MP4Loader.cancel();
        this.MP4Loader.destroy();
      }
      this.hasDestroyed = true;
    }
  }, {
    key: "resetTansmuxer",
    value: function resetTansmuxer() {
      this.MP4Demuxer && this.MP4Demuxer.reset();
      this.MP4Demuxer = null;
      this.FMP4Remuxer && this.FMP4Remuxer.reset();
      this.FMP4Remuxer = null;
      this.transmuxerWorkerControl && this.transmuxerWorkerControl.reset();
    }
  }], [{
    key: "getDefaultConfig",
    value: function getDefaultConfig() {
      return {
        segmentDuration: 5,
        onProcessMinLen: 1024,
        chunkSize: 8e5,
        retryCount: 3,
        retryDelay: 1e3,
        timeout: 3e3,
        enableWorker: false,
        playerId: "",
        vid: "",
        ext: {}
      };
    }
  }]);
  return MP42;
}(import_eventemitter33.default);
function getKeyFrameList(frame) {
  if (frame.keyframe)
    return frame;
}

// node_modules/xgplayer-mp4/es/util/timer.js
var Timer = function() {
  function Timer2(onTick) {
    _classCallCheck(this, Timer2);
    this.onTick_ = onTick;
    this.cancelPending_ = null;
  }
  _createClass(Timer2, [{
    key: "tickAfter",
    value: function tickAfter(delayInSeconds) {
      var _this = this;
      var callback = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      this.stop();
      var alive = true;
      var timeoutId = null;
      this.cancelPending_ = function() {
        window.clearTimeout(timeoutId);
        alive = false;
      };
      var onTick = function onTick2() {
        if (alive) {
          _this.onTick_();
          if (callback) {
            callback();
          }
        }
      };
      timeoutId = window.setTimeout(onTick, delayInSeconds * 1e3);
      return this;
    }
  }, {
    key: "tickEvery",
    value: function tickEvery(seconds) {
      var _this2 = this;
      this.tickAfter(seconds, function() {
        _this2.tickEvery(seconds);
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.cancelPending_) {
        this.cancelPending_();
        this.cancelPending_ = null;
      }
    }
  }]);
  return Timer2;
}();

// node_modules/xgplayer-mp4/es/mp4Plugin.js
var _playerPlayNext = null;
var _playerStartInit = null;
var _playerChangeDefinition = null;
var _playerSwitchUrl = null;
var Mp4Plugin = function(_BasePlugin) {
  _inherits(Mp4Plugin2, _BasePlugin);
  var _super = _createSuper(Mp4Plugin2);
  function Mp4Plugin2(options) {
    var _this;
    _classCallCheck(this, Mp4Plugin2);
    _this = _super.call(this, options);
    _defineProperty(_assertThisInitialized(_this), "_onMp4DataCallBack", function() {
      if (_this._isMseInit) {
        _this._onTimeUpdate();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onMp4MetaReady", function(meta) {
      var _assertThisInitialize = _assertThisInitialized(_this), config = _assertThisInitialize.config;
      var isH265 = _this.mp4.checkCodecH265();
      try {
        if (isH265 && !_this.config.supportHevc) {
          var message = "browser not support HEVC";
          var _err = new Errors(_this.player, {
            errorType: "runtime",
            errorTypeCode: ERROR_TYPES.runtime,
            errorCode: ERROR_CODES.h265Error,
            errorMessage: message,
            vid: config.vid,
            mediaError: {
              code: ERROR_CODES.h265Error,
              message
            }
          });
          _this._errorHandler(_err);
        } else {
          _this._initMse(meta);
        }
      } catch (e) {
        var _err2 = new Errors(_this.player, {
          errorType: "runtime",
          errorTypeCode: ERROR_TYPES.runtime,
          errorCode: ERROR_CODES.mse,
          errorMessage: e === null || e === void 0 ? void 0 : e.message,
          vid: config.vid,
          mediaError: {
            code: ERROR_CODES.other1,
            message: e === null || e === void 0 ? void 0 : e.message
          }
        });
        _this._errorHandler(_err2);
      } finally {
        var url = _this.config.url;
        if (_this.mse) {
          url = _this.mse.url;
          _this._proxyPlayer();
        }
        _this.player._startInit.call(_this.player, url);
      }
      _this._loadData();
    });
    _defineProperty(_assertThisInitialized(_this), "_onMp4Error", function(err) {
      var vid = _this.playerConfig.vid;
      console.error("[Index] _onMp4Error", vid, err);
      _this._errorHandler(err);
    });
    _defineProperty(_assertThisInitialized(_this), "_loadDataSuccess", function(data) {
      if (_this.isDestroy || !_this.mse) {
        return;
      }
      _this.log("[loadFragment] _loadDataSuccess ", JSON.stringify(data.context.range), ",dataLen,", data.buffer ? data.buffer.byteLength : 0, data.state);
      try {
        if (data.initSeg) {
          _this._appendInitSeg(data.initSeg);
          if (!data.buffer || data.buffer.byteLength < 1) {
            _this.log("no data, must load data");
            _this._onTimeUpdate();
          }
        }
        var buffer = data.buffer, state = data.state, context = data.context;
        if (_this.mse && state && (!buffer || buffer.byteLength <= 0) && context.fragIndex === _this.mp4.timeRange.length - 1) {
          var buffered = _this.player.buffered;
          if (buffered && buffered.length > 0) {
            _this.bufferEndTime = buffered.end(buffered.length - 1);
          }
          _this._isEnded();
          _this.log("loaded ended !!!==>>>", JSON.stringify(context.range), ", fragIndex,", context.fragIndex, ", bufferEndTime,", _this.bufferEndTime, ",meta_duration,", _this.mp4.meta.duration);
        }
        if (_this.mse && state && context.fragIndex === _this.mp4.timeRange.length - 1 && (!buffer || buffer.byteLength <= 0)) {
          var _buffered = _this.player.buffered;
          if (_buffered && _buffered.length > 0) {
            _this.bufferEndTime = _buffered.end(_buffered.length - 1);
          }
          _this._isEnded();
          _this.log("load ended !!!==>>>", _this.playerConfig.vid, JSON.stringify(context.range), ", fragIndex,", context.fragIndex, ", bufferEndTime,", _this.bufferEndTime, ",meta_duration,", _this.mp4.meta.duration);
        }
        if (buffer && _this.mse) {
          if (buffer && buffer.byteLength > 0) {
            _this._appendBuffer(MSE.VIDEO, buffer, context, state);
          }
        }
      } catch (e) {
        _this.log("appendBuffer error", e);
        var _err = new Errors(_this.player, {
          errorType: "runtime",
          errorTypeCode: ERROR_TYPES.runtime,
          errorCode: ERROR_CODES.mse,
          vid: _this.player.config.vid,
          errorMessage: e.message,
          mediaError: {
            code: ERROR_CODES.mse,
            message: e.message
          }
        });
        _this._errorHandler(_err);
      }
      if (data !== null && data !== void 0 && data.state) {
        _this._onTimeUpdate();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onWaiting", function() {
      var _assertThisInitialize2 = _assertThisInitialized(_this), player = _assertThisInitialize2.player, config = _assertThisInitialize2.config;
      clearTimeout(_this._waitInBufferTimer);
      _this._waitInBufferTimer = null;
      var curTime = player.currentTime;
      console.log("[>>>>onWaiting],currentTime, ", curTime, util.nowTime());
      var buffer = player.bufferedPoint;
      if (buffer.end > 0 && buffer.end - player.currentTime >= 2) {
        if (_this._waitAdjustTimeCnt < config.waitJampBufferMaxCnt) {
          _this._waitInBufferTimer = setTimeout(function() {
            _this._waitAdjustTimeCnt++;
            player.currentTime = player.currentTime + 0.5;
            _this.log("[waitInBufferTimeout], waitAdjustTimeCnt,", _this._waitAdjustTimeCnt, ",curtime,", curTime, util.nowTime());
          }, config.waitingInBufferTimeOut);
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeking", _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
      var _assertThisInitialize3, player, mp4, curTime, buffered, hasBuffered, fragIndex, _assertThisInitialize4, mse, bufferList, bufferRange;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              _assertThisInitialize3 = _assertThisInitialized(_this), player = _assertThisInitialize3.player, mp4 = _assertThisInitialize3.mp4;
              curTime = player.currentTime;
              _this.log("[seekTime], curTime,", curTime, ",buffer,", player.buffered2.bufferedList);
              if (!(!mp4 || !mp4.meta)) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              _this.endofstream = false;
              mp4.bufferLoadedPos = -1;
              mp4._metaLoading = false;
              buffered = player.bufferedPoint;
              hasBuffered = false;
              fragIndex = 0;
              if (!(buffered.end > 0)) {
                _context.next = 25;
                break;
              }
              hasBuffered = true;
              if (!(mp4.meta.duration - buffered.end < 0.5)) {
                _context.next = 17;
                break;
              }
              _this._startProgress();
              _this.log("[seeking in buffered range], buffer end,", buffered.end, ", duration,", mp4.meta.duration);
              return _context.abrupt("return");
            case 17:
              fragIndex = mp4.getFragmentIdx(buffered.end);
              if (!(_this._curLoadSegmentIdx === fragIndex)) {
                _context.next = 22;
                break;
              }
              _this._startProgress();
              _this.log("[seeking in buffered range], seek fragIndex is current load segmentIdx", fragIndex);
              return _context.abrupt("return");
            case 22:
              mp4.seekTime = buffered.end;
              fragIndex < 0 && (fragIndex = _this._curLoadSegmentIdx);
              _this.log("[seeking in buffered range], seekTime ", curTime, ",bufferRange,", buffered.start, "-", buffered.end, ", fragIndex,", fragIndex);
            case 25:
              if (!hasBuffered) {
                mp4.seekTime = curTime;
                fragIndex = mp4.getFragmentIdx(curTime);
                fragIndex < 0 && (fragIndex = _this._curLoadSegmentIdx);
                _this.log("[seekTime out buffer range], curTime,", curTime, ", Idx,", fragIndex);
                _assertThisInitialize4 = _assertThisInitialized(_this), mse = _assertThisInitialize4.mse;
                if (mse && mse.isFull()) {
                  bufferList = player.buffered2.bufferedList;
                  bufferRange = bufferList[bufferList.length - 1];
                  mse.clearOpQueues(MSE.VIDEO);
                  _this._checkRemoveSourceBuffer([bufferRange.start, bufferRange.end], player.currentTime, true, true);
                }
              }
              _context.next = 28;
              return mp4.cancelLoading();
            case 28:
              mp4.resetFragmentLoadState(fragIndex);
              _this._curLoadSegmentIdx = fragIndex;
              _this._onTimeUpdate();
              _this._startProgress();
              _this._isEnded();
            case 33:
            case "end":
              return _context.stop();
          }
      }, _callee);
    })));
    _defineProperty(_assertThisInitialized(_this), "changeDefineCanPlay", function(currentTime, paused, from, to) {
      var _assertThisInitialize5 = _assertThisInitialized(_this), player = _assertThisInitialize5.player;
      if (player.ended) {
        player.currentTime = 0;
        return;
      }
      _this.log("[oldChangeDefinition],this._changeDefState,", _this._changeDefState);
      player.currentTime = _this._changeDefState ? _this._changeDefState.currentTime : currentTime;
      var isPause = _this._changeDefState ? _this._changeDefState.paused : paused;
      if (isPause) {
        player.pause();
      } else {
        player.play();
      }
      _this._changeDefState = null;
      player.emit(events_exports.AFTER_DEFINITION_CHANGE, {
        from,
        to
      });
    });
    _defineProperty(_assertThisInitialized(_this), "changeDefinition", function() {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(to, from) {
        var _assertThisInitialize6, player, config, mp4, timeStart, fragIndex, buffered;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                _assertThisInitialize6 = _assertThisInitialized(_this), player = _assertThisInitialize6.player, config = _assertThisInitialize6.config, mp4 = _assertThisInitialize6.mp4;
                if (!from) {
                  from = player.curDefinition;
                }
                _this._MSEError = false;
                if (!config.witchBitRateWay) {
                  _context2.next = 6;
                  break;
                }
                _this.oldChangeDefinition(to, from);
                return _context2.abrupt("return");
              case 6:
                player.emit(events_exports.DEFINITION_CHANGE, {
                  from,
                  to
                });
                timeStart = player.currentTime;
                fragIndex = mp4.getFragmentIdx(timeStart);
                fragIndex < 0 && (fragIndex = _this._curLoadSegmentIdx);
                _this.log("switchBitrate:point,fragIndex,", fragIndex, ",startTime,", mp4.timeRange[fragIndex].startTime, ",currentTime,", player.currentTime);
                if (!mp4) {
                  _context2.next = 16;
                  break;
                }
                _this.mp4.changeBitRateTime = timeStart;
                _context2.next = 15;
                return mp4.cancelLoading();
              case 15:
                mp4._metaLoading && (mp4._metaLoading = false);
              case 16:
                _this._removeBuffeEndTime = mp4.timeRange[fragIndex].startTime;
                _this._isChangeDefinition = true;
                buffered = player.getBufferedRange(player.buffered);
                if (buffered[1] > 0 && buffered[1] - player.currentTime > 5) {
                  _this.mse.clearOpQueues(MSE.VIDEO);
                  _this.mse.remove(MSE.VIDEO, player.currentTime + 5, buffered[1]);
                }
                _this.log("switchBitrate: resetFragmentLoadState,", fragIndex);
                mp4.resetFragmentLoadState(fragIndex);
                _this._curLoadSegmentIdx = fragIndex;
                _context2.next = 25;
                return _this.mp4.changeBitRate(to);
              case 25:
                _this._onTimeUpdate();
                player.emit("RESOLUTION_UPDATE", to);
              case 27:
              case "end":
                return _context2.stop();
            }
        }, _callee2);
      }));
      return function(_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this), "_replayHook", function() {
      var _this$player;
      (_this$player = _this.player) === null || _this$player === void 0 ? void 0 : _this$player.play();
      return false;
    });
    _defineProperty(_assertThisInitialized(_this), "_retryHook", function() {
      _this.beforePlayerInit();
      return false;
    });
    _this.mp4 = null;
    _this.mse = null;
    _this._waitAdjustTimeCnt = 0;
    _this._lastCheckTime = util.nowTime();
    _this._removeBuffeEndTime = 0;
    return _this;
  }
  _createClass(Mp4Plugin2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      window.__mp4player = this;
      try {
        BasePlugin.defineGetterOrSetter(this.player, {
          __url: {
            get: function get() {
              try {
                return _this2.mse ? _this2.mse.url : _this2.config.url;
              } catch (error) {
                return null;
              }
            }
          }
        });
      } catch (e) {
      }
    }
  }, {
    key: "beforePlayerInit",
    value: function beforePlayerInit() {
      var config = this.config;
      if (config.supportHevc === void 0) {
        if (sniffer !== null && sniffer !== void 0 && sniffer.isHevcSupported && sniffer.isHevcSupported()) {
          config.supportHevc = true;
        }
      }
      this.initMp4();
      this.attachEvents();
      this._startProgress();
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      this.off(events_exports.SEEKING, this._onSeeking);
      this.on(events_exports.SEEKING, this._onSeeking);
      this.on(events_exports.WAITING, this._onWaiting);
      this.off(events_exports.URL_CHANGE, this.switchURL);
      this.on(events_exports.URL_CHANGE, this.switchURL);
    }
  }, {
    key: "detachEvents",
    value: function detachEvents() {
      this.off(events_exports.SEEKING, this._onSeeking);
      this.off(events_exports.WAITING, this._onWaiting);
      this.off(events_exports.URL_CHANGE, this.switchURL);
    }
  }, {
    key: "initMp4",
    value: function initMp4() {
      var _this3 = this;
      var player = this.player;
      if (!player.config.vid) {
        player.config.vid = Date.now();
      }
      if (this.mp4) {
        this.mp4.off(MP4_EVENTS.META_READY, this._onMp4MetaReady);
        this.mp4.off(MP4_EVENTS.ERROR, this._onMp4Error);
        this.mp4.off(MP4_EVENTS.MOOV_REQ_PROGRESS, this._onMp4DataCallBack);
        this.mp4.destroy();
      }
      this.mp4 = new MP4(player.config.url, _objectSpread2(_objectSpread2({}, this.config), {}, {
        vid: player.config.vid
      }));
      this.mp4.on(MP4_EVENTS.META_READY, this._onMp4MetaReady);
      this.mp4.on(MP4_EVENTS.ERROR, this._onMp4Error);
      this.mp4.on(MP4_EVENTS.MOOV_REQ_PROGRESS, this._onMp4DataCallBack);
      this.mp4.on(MP4_EVENTS.UPDATE_LOAD_IDX, function(fragment) {
        _this3._curLoadSegmentIdx = fragment;
        _this3.log("[update curLoadSegmentIdx]", fragment);
      });
      this.mp4.init();
    }
  }, {
    key: "_proxyPlayer",
    value: function _proxyPlayer() {
      var _this4 = this;
      if (typeof this.player.playNext === "function") {
        _playerPlayNext = this.player.playNext;
      }
      this.player.playNext = function() {
        _this4.playNext.apply(_this4, arguments);
      };
      _playerSwitchUrl = this.player.switchURL;
      _playerChangeDefinition = this.player.changeDefinition;
      this.player.switchURL = this.switchURL.bind(this);
      this.player.changeDefinition = this.changeDefinition.bind(this);
      this.player.removeHooks("replay", this._replayHook);
      this.player.removeHooks("retry", this._retryHook);
    }
  }, {
    key: "setConfig",
    value: function setConfig(newConfig) {
      this.config = Object.assign(this.config, newConfig);
    }
  }, {
    key: "playNext",
    value: function playNext(newConfig) {
      var player = this.player;
      this._defInited = false;
      player.resetState();
      player._currentTime = 0;
      player._duration = 0;
      player.isPlaying = false;
      this._MSEError = false;
      player.pause();
      this._reset();
      player.setConfig(newConfig);
      this.log("[Index] playNext", newConfig);
      player.play();
      this.emit("playnext");
    }
  }, {
    key: "_errorHandler",
    value: function _errorHandler(err) {
      var player = this.player, config = this.config;
      if (!player) {
        return;
      }
      console.log("final error !!!!, ", config.vid, err);
      this.emit("error", err);
    }
  }, {
    key: "_initMse",
    value: function() {
      var _initMse2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(meta) {
        var _this5 = this;
        var isHvc, hasVideo, hasAudio, codec, contentTypes, openPromise;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.mse) {
                  _context3.next = 4;
                  break;
                }
                _context3.next = 3;
                return this.mse.unbindMedia();
              case 3:
                this.mse = null;
              case 4:
                isHvc = this.mp4 && this.mp4.checkCodecH265();
                hasVideo = !!meta.videoCodec;
                hasAudio = !!meta.audioCodec;
                if (hasVideo && hasAudio) {
                  codec = isHvc ? 'video/mp4; codecs="hev1.1.6.L93.B0, mp4a.40.5"' : 'video/mp4; codecs="avc1.64001E, mp4a.40.5"';
                } else if (hasVideo) {
                  codec = isHvc ? 'video/mp4; codecs="hev1.1.6.L93.B0"' : 'video/mp4; codecs="avc1.64001E"';
                } else {
                  codec = 'video/mp4; codecs="mp4a.40.5"';
                }
                contentTypes = _defineProperty({}, MSE.VIDEO, {
                  mimeType: "video/mp4",
                  codec
                });
                this.mse = new MSE();
                openPromise = this.mse.bindMedia(this.player.video);
                openPromise.then(function() {
                  var contentTypesLocal = Object.keys(contentTypes);
                  try {
                    for (var i = 0; i < contentTypesLocal.length; i++) {
                      var type = contentTypesLocal[i];
                      _this5.mse.createSource(type, contentTypes[type].codec);
                    }
                  } catch (e) {
                    console.error("MSE error: ", e);
                    _this5._errorHandler(e);
                  }
                  _this5._isMseInit = true;
                  _this5._onTimeUpdate();
                });
              case 12:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function _initMse(_x3) {
        return _initMse2.apply(this, arguments);
      }
      return _initMse;
    }()
  }, {
    key: "_onTimeUpdate",
    value: function _onTimeUpdate() {
      var _this6 = this;
      var mse = this.mse, mp4 = this.mp4, player = this.player, config = this.config;
      if (!mp4)
        return;
      var timeRange = mp4.timeRange;
      var range = player.getBufferedRange(player.buffered2);
      if (mse && mp4 && mp4.canDownload) {
        if (util.nowTime() - this._lastCheckTime > 1e3) {
          this._lastCheckTime = util.nowTime();
          this._loadStuckCheck();
          this._checkRemoveSourceBuffer(range, player.currentTime);
        }
        var cacheMaxTime = player.paused ? player.currentTime + config.minBufferLength : player.currentTime + config.maxBufferLength;
        if (range[1] - cacheMaxTime < 0) {
          timeRange.every(function(item, idx) {
            if (item.downloaded) {
              return true;
            }
            if (!_this6._isChangeDefinition && item.endTime - item.startTime > 1 && _this6._isInBuffer(item)) {
              item.downloaded = true;
              item.isLoading = true;
              _this6.log("onTimeUpdate, ".concat(idx, " download segment, has buffer"), item.startTime, item.endTime);
              return true;
            }
            if (item.startTime - player.currentTime < config.maxBufferLength) {
              _this6._curLoadSegmentIdx = idx;
              _this6.log("[onTimeUpdate],load index==>>>, ", idx, ",IdxTimeRange, ", item.startTime, "-", item.endTime, ",buffEnd, ", range[1], ",playCurTime,", player.currentTime, ", bufferLen,", range[1] - player.currentTime, ",bufferRangeList,", _this6.player.buffered2 ? _this6.player.buffered2.bufferedList : null);
              _this6._loadData();
            }
          });
        }
        this._isEnded();
      }
      this.checkRemoveOldBitrateBuffer();
    }
  }, {
    key: "checkRemoveOldBitrateBuffer",
    value: function checkRemoveOldBitrateBuffer() {
      var mse = this.mse, player = this.player;
      if (mse && this._removeBuffeEndTime > 0 && player.currentTime > this._removeBuffeEndTime + 1) {
        this.log("remove old bitrate buffer", this._removeBuffeEndTime);
        mse.remove(MSE.VIDEO, 0, this._removeBuffeEndTime - 1);
        this._removeBuffeEndTime = 0;
      }
    }
  }, {
    key: "_isInBuffer",
    value: function _isInBuffer(item) {
      var gap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var inbuffer = false;
      var buffered = this.player.video.buffered;
      for (var i = 0; i < buffered.length; i++) {
        var start = buffered.start(i) - gap;
        var end = buffered.end(i) + gap;
        if (start <= item.startTime && item.endTime <= end) {
          inbuffer = true;
          break;
        }
      }
      return inbuffer;
    }
  }, {
    key: "_loadData",
    value: function() {
      var _loadData2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(!this.mp4 || !this._isMseInit)) {
                  _context4.next = 3;
                  break;
                }
                this.log("loadData, player.mp4 null", this._isMseInit);
                return _context4.abrupt("return");
              case 3:
                _context4.prev = 3;
                _context4.next = 6;
                return this.mp4.load(this._curLoadSegmentIdx, this._loadDataSuccess);
              case 6:
                _context4.next = 11;
                break;
              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](3);
                console.error("[Index] _loadData error", this.playerConfig.vid, _context4.t0);
              case 11:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this, [[3, 8]]);
      }));
      function _loadData() {
        return _loadData2.apply(this, arguments);
      }
      return _loadData;
    }()
  }, {
    key: "_appendInitSeg",
    value: function _appendInitSeg(initSeg) {
      var _this7 = this;
      if (!this.mp4 || !this.mse)
        return;
      this.mse.append(MSE.VIDEO, initSeg, {
        vid: this.playerConfig.vid,
        range: null,
        dataLen: initSeg.byteLength,
        isinit: true
      }).then(function(data) {
        _this7.log("appendInitSeg end ==>>>", data.context ? data.context : null, ", costTime,", data.costtime);
      });
    }
  }, {
    key: "_appendBuffer",
    value: function _appendBuffer(codec, buffer) {
      var _this8 = this;
      var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      var state = arguments.length > 3 ? arguments[3] : void 0;
      var mse = this.mse, config = this.config;
      mse.append(codec, buffer, {
        vid: config.vid,
        fragIndex: context.fragIndex,
        range: context.range,
        dataLen: buffer.byteLength,
        state
      }).then(function(data) {
        _this8.log("player appendBuffer end ==>>>", data.context ? data.context : null, ", costTime,", data.costtime, ", opt,", data.name, ",bufferRange,", _this8.player.getBufferedRange());
        if (_this8.mse && context.state && context.fragIndex === _this8.mp4.timeRange.length - 1) {
          var buffered = _this8.player.buffered;
          if (buffered && buffered.length > 0) {
            _this8.bufferEndTime = buffered.end(buffered.length - 1);
          }
          _this8._isEnded();
          _this8.log("loaded ended !!!==>>>", context.range, ", fragIndex,", context.fragIndex, ", bufferEndTime,", _this8.bufferEndTime, ",meta_duration,", _this8.mp4.meta.duration);
        }
      }).catch(function(error) {
        console.log("[MSE error]", error);
        if (error && mse !== null && mse !== void 0 && mse.isFull()) {
          var bufferRange = _this8.player.getBufferedRange(_this8.player.buffered2);
          _this8._checkRemoveSourceBuffer(bufferRange, _this8.player.currentTime, true);
        }
      });
    }
  }, {
    key: "_checkRemoveSourceBuffer",
    value: function _checkRemoveSourceBuffer(sourceBufferRange, currentTime, mustClear) {
      var _this9 = this;
      var mse = this.mse, mp4 = this.mp4, player = this.player;
      if (!mse || !mp4 || !player)
        return;
      if (mustClear) {
        clearTimeout(this._removeBufferTimer);
        this._removeBufferTimer = null;
      }
      if (!sourceBufferRange)
        sourceBufferRange = player.getBufferedRange(player.buffered2);
      if (!currentTime)
        currentTime = player.currentTime;
      if (!mustClear && util.nowTime() - this._checkRemoveBufferLastTime <= this.config.removeBufferLen || this.endofstream)
        return;
      this._checkRemoveBufferLastTime = util.nowTime();
      if (sourceBufferRange && sourceBufferRange[0] >= 0 && (currentTime - sourceBufferRange[0] > this.config.removeBufferLen || mse.isFull())) {
        var time = sourceBufferRange[1];
        var segmentIdx = mp4.getFragmentIdx(time);
        if (segmentIdx >= 0 && mp4.timeRange[segmentIdx].startTime < currentTime) {
          var clearEnd = Math.floor(Math.min(mp4.timeRange[segmentIdx].startTime, sourceBufferRange[1]));
          if (sourceBufferRange[0] < clearEnd) {
            this.log("[checkremoveSourceBuffer], remove range==>>>", sourceBufferRange[0], clearEnd);
            mse.remove(MSE.VIDEO, sourceBufferRange[0], clearEnd);
          } else if (mse.isFull() && !this._removeBufferTimer) {
            this._removeBufferTimer = setTimeout(function() {
              _this9._checkRemoveSourceBuffer(null, null, true);
            }, 10 * 1e3);
          }
        }
      }
    }
  }, {
    key: "_isEnded",
    value: function _isEnded() {
      var player = this.player, mp4 = this.mp4;
      var buffered = player.bufferedPoint;
      var _end = buffered ? buffered.end : 0;
      if (!this.endofstream && this.mse && mp4.meta.duration - player.currentTime < 0.5) {
        this.log("[check player isEnded],deal mse.endOfStream, currentTime,", player.currentTime, ", bufferend,", _end, ", duration,", mp4.meta.duration);
        this.endofstream = true;
        this.mse.endOfStream();
      }
      if (mp4 && mp4.meta && mp4.meta.duration - player.currentTime < 0.5) {
        this._stopProgress();
        this.log("[check player isEnded],stopProgress and endOfStream,currentTime, ", player.currentTime, ", bufferend,", _end, ", duration,", mp4.meta.duration);
        this.mse && this.mse.endOfStream();
        return true;
      }
      return false;
    }
  }, {
    key: "switchURL",
    value: function switchURL(definitionInfo) {
      this.changeDefinition(definitionInfo);
    }
  }, {
    key: "oldChangeDefinition",
    value: function oldChangeDefinition(to, from) {
      var _this10 = this;
      var config = this.config, player = this.player;
      this.log("[oldChangeDefinition],currentTime,", player.currentTime, ",from,", from, ",to,", to);
      var currentTime = player.currentTime, paused = player.paused;
      if (!this._changeDefState) {
        this._changeDefState = {
          currentTime,
          paused
        };
        this.log("[oldChangeDefinition],currentTime,", player.currentTime, ",pause,", paused);
      }
      player.config.url = to.url;
      config.focusUserDefinition = true;
      player.currentTime = 0;
      player.pause();
      this._reset();
      this._isMseInit = false;
      this._changeDefineCanPlay && player.off("canplay", this._changeDefineCanPlay);
      this._changeDefineCanPlay = function() {
        _this10.changeDefineCanPlay(currentTime, paused, from, to);
        _this10._changeDefineCanPlay = null;
      };
      player.once("canplay", this._changeDefineCanPlay);
      this.player.video.load();
      this.initMp4();
    }
  }, {
    key: "_loadStuckCheck",
    value: function _loadStuckCheck() {
      var _this11 = this;
      var config = this.config, player = this.player;
      if (!config.disableBufferBreakCheck) {
        if (player.currentTime - (this._lastCurrentTime || 0) > 0.1 || player.paused) {
          if (this._bufferBreakFlag === 1 || this._bufferBreakFlag === 2) {
            this.log("视频没有卡死,重置卡死标记");
            this._bufferBreakFlag = 0;
            clearTimeout(this._bufferBreakTimer);
            this._bufferBreakFlag = null;
          }
        } else {
          if (!this._bufferBreakFlag) {
            this._bufferBreakFlag = 1;
            this.log("卡死计时开始! 持续".concat(config.waitingTimeOut, "毫秒则确认卡死"));
            this._bufferBreakTimer = setTimeout(function() {
              if (_this11.isDestroy) {
                return;
              }
              if (_this11._bufferBreakFlag === 1) {
                _this11._bufferBreakFlag = 2;
                _this11.log("确认卡死!!!");
                _this11._errorHandler(new Errors(_this11.player, {
                  errorType: "runtime",
                  errorTypeCode: ERROR_TYPES.runtime,
                  errorCode: ERROR_CODES.waitTimeout,
                  errorMessage: "wait_timeout",
                  vid: config.vid
                }));
              }
              _this11._bufferBreakTimer = null;
            }, config.waitingTimeOut);
          }
        }
        this._lastCurrentTime = player.currentTime;
      }
    }
  }, {
    key: "isDestroy",
    get: function get() {
      return !this.player;
    }
  }, {
    key: "_stopProgress",
    value: function _stopProgress() {
      this._hasStartProgress = false;
      if (this._requestTimer) {
        this._requestTimer.stop();
        this._requestTimer = null;
      }
      if (this._bufferBreakTimer) {
        clearTimeout(this._bufferBreakTimer);
        this._bufferBreakTimer = null;
        this._bufferBreakFlag = void 0;
      }
    }
  }, {
    key: "_startProgress",
    value: function _startProgress() {
      var _this12 = this;
      if (this._hasStartProgress) {
        return;
      }
      this._stopProgress();
      this._requestTimer = new Timer(function() {
        if (_this12._requestTimer) {
          _this12._onTimeUpdate();
        }
      });
      this._requestTimer.tickEvery(this.config.tickInSeconds);
      this._hasStartProgress = true;
    }
  }, {
    key: "log",
    value: function log$1(message) {
      var playerConfig = this.playerConfig;
      var newMessage = playerConfig && playerConfig.vid ? "[Index]".concat(playerConfig.vid, " ").concat(message) : "[Index] ".concat(message);
      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }
      log.apply(void 0, [newMessage].concat(optionalParams));
    }
  }, {
    key: "_reset",
    value: function _reset() {
      this._isMseInit = false;
      this.endofstream = false;
      this._curLoadSegmentIdx = 0;
      this._removeBuffeEndTime = 0;
      this._isChangeDefinition = false;
      this._stopProgress();
      if (this.mp4) {
        this.mp4.off(MP4_EVENTS.META_READY, this._onMp4MetaReady);
        this.mp4.off(MP4_EVENTS.ERROR, this._onMp4Error);
        this.mp4.off(MP4_EVENTS.MOOV_REQ_PROGRESS, this._onMp4DataCallBack);
        this.mp4.destroy();
        this.mp4 = null;
      }
      if (this.mse) {
        this.mse.unbindMedia();
        this.mse = null;
      }
      this._unloadVideo();
    }
  }, {
    key: "_unloadVideo",
    value: function _unloadVideo() {
      var player = this.player;
      try {
        this.log("unloadVideo src ".concat(player.video.src));
        if (player.video && player.video.src) {
          player.video.removeAttribute("src");
          player.video.load();
        }
      } catch (error) {
        this.log("unloadVideo error", error);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var player = this.player;
      player.removeHooks("replay", this._replayHook);
      player.removeHooks("retry", this._retryHook);
      this.detachEvents();
      this._reset();
      this.player.playNext = _playerPlayNext;
      this.player._startInit = _playerStartInit;
      this.player.changeDefinition = _playerChangeDefinition;
      this.player.switchURL = _playerSwitchUrl;
      if (this._bufferBreakTimer) {
        clearInterval(this._bufferBreakTimer);
      }
      if (this._removeBufferTimer) {
        clearTimeout(this._removeBufferTimer);
        this._removeBufferTimer = null;
      }
      if (this._waitInBufferTimer) {
        clearTimeout(this._waitInBufferTimer);
        this._waitInBufferTimer = null;
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "mp4Plugin";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        maxBufferLength: 40,
        minBufferLength: 5,
        disableBufferBreakCheck: false,
        waitingTimeOut: 15e3,
        waitingInBufferTimeOut: 5e3,
        waitJampBufferMaxCnt: 3,
        tickInSeconds: 0.1,
        reqOptions: null
      };
    }
  }, {
    key: "version",
    get: function get() {
      return "3.0.7";
    }
  }]);
  return Mp4Plugin2;
}(BasePlugin);
export {
  Mp4Plugin as default
};
//# sourceMappingURL=xgplayer-mp4.js.map
