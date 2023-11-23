import {
  BandwidthService,
  Buffer,
  ERR,
  ERR_CODE,
  EVENT,
  FMP4Demuxer,
  FMP4Remuxer,
  GapService,
  Logger,
  Logger2,
  MP4Parser,
  MSE,
  MediaStatsService,
  NetLoader,
  SeiService,
  StreamingError,
  TsDemuxer,
  WarningType,
  concatUint8Array,
  getVideoPlaybackQuality,
  isMediaPlaying
} from "./chunk-V5EGXLXH.js";
import {
  BasePlugin,
  Errors,
  events_exports,
  require_eventemitter3
} from "./chunk-ARSWWNTN.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/xgplayer-hls/es/_virtual/_rollupPluginBabelHelpers.js
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
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
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
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
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

// node_modules/xgplayer-hls/es/hls/index.js
var import_eventemitter3 = __toESM(require_eventemitter3());

// node_modules/xgplayer-hls/es/hls/buffer-service/decrypt/index.js
var Decryptor = function() {
  function Decryptor2() {
    _classCallCheck(this, Decryptor2);
    var crypto = window.crypto || window.msCrypto;
    this.subtle = crypto && (crypto.subtle || crypto.webkitSubtle);
    this.externalDecryptor = null;
  }
  _createClass(Decryptor2, [{
    key: "destroy",
    value: function destroy() {
      var _this$externalDecrypt;
      if ((_this$externalDecrypt = this.externalDecryptor) !== null && _this$externalDecrypt !== void 0 && _this$externalDecrypt.destroy) {
        this.externalDecryptor.destroy();
      }
    }
  }, {
    key: "decrypt",
    value: function decrypt(video, audio) {
      if (!video && !audio)
        return;
      var ret = [];
      if (video) {
        ret[0] = this._decryptSegment(video);
      }
      if (audio) {
        ret[1] = this._decryptSegment(audio);
      }
      return Promise.all(ret);
    }
  }, {
    key: "_decryptSegment",
    value: function() {
      var _decryptSegment2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(seg) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                data = seg.data;
                if (!seg.key) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 4;
                return this._decryptData(seg.data, seg.key, seg.keyIv);
              case 4:
                data = _context2.sent;
              case 5:
                if (seg.map) {
                  _context2.next = 7;
                  break;
                }
                return _context2.abrupt("return", data);
              case 7:
                return _context2.abrupt("return", concatUint8Array(seg.map, data));
              case 8:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function _decryptSegment(_x4) {
        return _decryptSegment2.apply(this, arguments);
      }
      return _decryptSegment;
    }()
  }, {
    key: "_decryptData",
    value: function() {
      var _decryptData2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(data, key, iv) {
        var aesKey;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.externalDecryptor) {
                  _context3.next = 6;
                  break;
                }
                _context3.next = 3;
                return this.externalDecryptor.decrypt(data, key, iv);
              case 3:
                return _context3.abrupt("return", _context3.sent);
              case 6:
                if (this.subtle) {
                  _context3.next = 8;
                  break;
                }
                throw new Error("crypto is not defined");
              case 8:
                _context3.next = 10;
                return this.subtle.importKey("raw", key, {
                  name: "AES-CBC"
                }, false, ["encrypt", "decrypt"]);
              case 10:
                aesKey = _context3.sent;
                _context3.t0 = Uint8Array;
                _context3.next = 14;
                return this.subtle.decrypt({
                  name: "AES-CBC",
                  iv
                }, aesKey, data);
              case 14:
                _context3.t1 = _context3.sent;
                return _context3.abrupt("return", new _context3.t0(_context3.t1));
              case 16:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function _decryptData(_x5, _x6, _x7) {
        return _decryptData2.apply(this, arguments);
      }
      return _decryptData;
    }()
  }]);
  return Decryptor2;
}();

// node_modules/xgplayer-hls/es/hls/constants.js
var Event = _objectSpread2(_objectSpread2({}, EVENT), {}, {
  STREAM_PARSED: "core.streamparsed",
  NO_AUDIO_TRACK: "core.noaudiotrack",
  SUBTITLE_SEGMENTS: "core.subtitlesegments",
  SUBTITLE_PLAYLIST: "core.subtitleplaylist",
  SEI_PAYLOAD_TIME: "core.seipayloadtime",
  APPEND_COST: "core.appendcost"
});

// node_modules/xgplayer-hls/es/hls/buffer-service/transmuxer/index.js
var logger = new Logger("Transmuxer");
var Transmuxer = function() {
  function Transmuxer2(hls, isMP4, needRemux) {
    _classCallCheck(this, Transmuxer2);
    _defineProperty(this, "_initSegmentId", "");
    this.hls = hls;
    this._demuxer = isMP4 ? new FMP4Demuxer() : new TsDemuxer();
    this._isMP4 = isMP4;
    if (needRemux)
      this._remuxer = new FMP4Remuxer(this._demuxer.videoTrack, this._demuxer.audioTrack);
  }
  _createClass(Transmuxer2, [{
    key: "transmux",
    value: function transmux(videoChunk, audioChunk, discontinuity, contiguous, startTime, needInit) {
      var demuxer = this._demuxer;
      try {
        if (this._isMP4) {
          demuxer.demux(videoChunk, audioChunk);
        } else {
          demuxer.demuxAndFix(concatUint8Array(videoChunk, audioChunk), discontinuity, contiguous, startTime);
        }
      } catch (error) {
        throw new StreamingError(ERR.DEMUX, ERR.SUB_TYPES.HLS, error);
      }
      var videoTrack = demuxer.videoTrack, audioTrack = demuxer.audioTrack, metadataTrack = demuxer.metadataTrack;
      var newId = "".concat(videoTrack.codec, "/").concat(videoTrack.width, "/").concat(videoTrack.height, "/").concat(audioTrack.codec, "/").concat(audioTrack.config);
      if (newId !== this._initSegmentId) {
        this._initSegmentId = newId;
        needInit = true;
      }
      this._fireEvents(videoTrack, audioTrack, metadataTrack, discontinuity || needInit);
      this.hls.emit(Event.DEMUXED_TRACK, {
        videoTrack,
        audioTrack
      });
      if (this._remuxer) {
        try {
          var _this$_remuxer$remux = this._remuxer.remux(needInit), videoInitSegment = _this$_remuxer$remux.videoInitSegment, videoSegment = _this$_remuxer$remux.videoSegment, audioInitSegment = _this$_remuxer$remux.audioInitSegment, audioSegment = _this$_remuxer$remux.audioSegment;
          var v = concatUint8Array(videoInitSegment, videoSegment);
          var a = concatUint8Array(audioInitSegment, audioSegment);
          return [v ? {
            codec: videoTrack.codec,
            data: v
          } : void 0, a ? {
            codec: audioTrack.codec,
            data: a
          } : void 0];
        } catch (error) {
          throw new StreamingError(ERR.REMUX, ERR.SUB_TYPES.FMP4, error);
        }
      } else {
        return [videoTrack, audioTrack];
      }
    }
  }, {
    key: "_fireEvents",
    value: function _fireEvents(videoTrack, audioTrack, metadataTrack, discontinuity) {
      var _this = this;
      logger.debug(videoTrack.samples, audioTrack.samples);
      if (discontinuity) {
        if (videoTrack.exist()) {
          this.hls.emit(Event.METADATA_PARSED, {
            type: "video",
            track: videoTrack,
            meta: {
              codec: videoTrack.codec,
              timescale: videoTrack.timescale,
              width: videoTrack.width,
              height: videoTrack.height,
              sarRatio: videoTrack.sarRatio,
              baseDts: videoTrack.baseDts
            }
          });
        }
        if (audioTrack.exist()) {
          this.hls.emit(Event.METADATA_PARSED, {
            type: "audio",
            track: audioTrack,
            meta: {
              codec: audioTrack.codec,
              channelCount: audioTrack.channelCount,
              sampleRate: audioTrack.sampleRate,
              timescale: audioTrack.timescale,
              baseDts: audioTrack.baseDts
            }
          });
        }
        logger.debug("discontinuity", videoTrack, audioTrack);
      }
      videoTrack.warnings.forEach(function(warn) {
        var type;
        switch (warn.type) {
          case WarningType.LARGE_AV_SHIFT:
            type = Event.LARGE_AV_FIRST_FRAME_GAP_DETECT;
            break;
          case WarningType.LARGE_VIDEO_GAP:
            type = Event.LARGE_VIDEO_DTS_GAP_DETECT;
            break;
          case WarningType.LARGE_VIDEO_GAP_BETWEEN_CHUNK:
            type = Event.MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT;
            break;
        }
        if (type)
          _this.hls.emit(Event.STREAM_EXCEPTION, _objectSpread2(_objectSpread2({}, warn), {}, {
            type
          }));
        logger.warn("video exception", warn);
      });
      audioTrack.warnings.forEach(function(warn) {
        var type;
        switch (warn.type) {
          case WarningType.LARGE_AUDIO_GAP:
            type = Event.LARGE_AUDIO_DTS_GAP_DETECT;
            break;
          case WarningType.AUDIO_FILLED:
            type = Event.AUDIO_GAP_DETECT;
            break;
          case WarningType.AUDIO_DROPPED:
            type = Event.AUDIO_OVERLAP_DETECT;
            break;
        }
        if (type)
          _this.hls.emit(Event.STREAM_EXCEPTION, _objectSpread2(_objectSpread2({}, warn), {}, {
            type
          }));
        logger.warn("audio exception", warn);
      });
      videoTrack.samples.forEach(function(sample) {
        if (sample.keyframe) {
          _this.hls.emit(Event.KEYFRAME, {
            pts: sample.pts
          });
        }
      });
      metadataTrack.seiSamples.forEach(function(sei) {
        _this.hls.emit(Event.SEI, _objectSpread2(_objectSpread2({}, sei), {}, {
          originPts: sei.originPts / 90,
          sei: {
            code: sei.data.type,
            content: sei.data.payload,
            dts: sei.pts
          }
        }));
      });
    }
  }]);
  return Transmuxer2;
}();

// node_modules/xgplayer-hls/es/hls/buffer-service/index.js
var logger2 = new Logger("BufferService");
var BufferService = function() {
  function BufferService2(hls) {
    _classCallCheck(this, BufferService2);
    _defineProperty(this, "_decryptor", new Decryptor());
    _defineProperty(this, "_transmuxer", null);
    _defineProperty(this, "_mse", null);
    _defineProperty(this, "_softVideo", null);
    _defineProperty(this, "_sourceCreated", false);
    _defineProperty(this, "_needInitSegment", true);
    _defineProperty(this, "_directAppend", false);
    this.hls = hls;
    if (hls.config.softDecode) {
      this._softVideo = hls.media;
    } else {
      this._mse = new MSE();
      if (hls.config.url) {
        this._mse.bindMedia(hls.media);
      }
    }
    if (hls.config.decryptor) {
      this._decryptor.externalDecryptor = hls.config.decryptor;
    }
  }
  _createClass(BufferService2, [{
    key: "baseDts",
    get: function get() {
      var _this$_transmuxer, _this$_transmuxer$_de, _this$_transmuxer$_de2;
      return (_this$_transmuxer = this._transmuxer) === null || _this$_transmuxer === void 0 ? void 0 : (_this$_transmuxer$_de = _this$_transmuxer._demuxer) === null || _this$_transmuxer$_de === void 0 ? void 0 : (_this$_transmuxer$_de2 = _this$_transmuxer$_de._fixer) === null || _this$_transmuxer$_de2 === void 0 ? void 0 : _this$_transmuxer$_de2._baseDts;
    }
  }, {
    key: "nbSb",
    get: function get() {
      var _this$_mse;
      if (!((_this$_mse = this._mse) !== null && _this$_mse !== void 0 && _this$_mse._sourceBuffer))
        return 0;
      return Object.keys(this._mse._sourceBuffer).length;
    }
  }, {
    key: "msIsOpend",
    get: function get() {
      var _this$_mse2;
      return (_this$_mse2 = this._mse) === null || _this$_mse2 === void 0 ? void 0 : _this$_mse2.isOpened;
    }
  }, {
    key: "updateDuration",
    value: function() {
      var _updateDuration = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(duration) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                logger2.debug("update duration", duration);
                if (!this._mse) {
                  _context.next = 9;
                  break;
                }
                if (this._mse.isOpened) {
                  _context.next = 5;
                  break;
                }
                _context.next = 5;
                return this._mse.open();
              case 5:
                _context.next = 7;
                return this._mse.updateDuration(duration);
              case 7:
                _context.next = 10;
                break;
              case 9:
                if (this._softVideo) {
                  this._softVideo.duration = duration;
                }
              case 10:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function updateDuration(_x) {
        return _updateDuration.apply(this, arguments);
      }
      return updateDuration;
    }()
  }, {
    key: "createSource",
    value: function createSource(videoChunk, audioChunk, videoCodec, audioCodec) {
      if (this._sourceCreated)
        return;
      var chunk = videoChunk || audioChunk;
      if (!chunk)
        return;
      if (TsDemuxer.probe(chunk)) {
        if (!this._transmuxer)
          this._transmuxer = new Transmuxer(this.hls, false, !this._softVideo);
      } else if (MP4Parser.probe(chunk)) {
        if (this._softVideo) {
          if (!this._transmuxer)
            this._transmuxer = new Transmuxer(this.hls, true);
        } else {
          this._directAppend = true;
          var mix = false;
          if (videoChunk && !videoCodec) {
            MP4Parser.findBox(videoChunk, ["moov", "trak"]).forEach(function(t) {
              var box = MP4Parser.findBox(t.data, ["trak", "mdia", "minf", "stbl", "stsd"])[0];
              if (box) {
                var e = MP4Parser.stsd(box).entries[0];
                if (e) {
                  if (e.hvcC) {
                    videoCodec = e.hvcC.codec || "hev1.1.6.L93.B0";
                  } else if (e.avcC) {
                    videoCodec = e.avcC.codec;
                  } else if (e.sampleRate || e.esds) {
                    var _e$esds;
                    audioCodec = ((_e$esds = e.esds) === null || _e$esds === void 0 ? void 0 : _e$esds.codec) || "mp4a.40.2";
                    mix = true;
                  }
                }
              }
            });
          }
          if (audioChunk && !audioCodec) {
            MP4Parser.findBox(audioChunk, ["moov", "trak", "mdia", "minf", "stbl", "stsd"]).forEach(function(stsd) {
              var e = MP4Parser.stsd(stsd).entries[0];
              if (e && e.esds)
                audioCodec = e.esds.codec;
            });
          }
          if (videoChunk && !videoCodec)
            videoCodec = "avc1.42e01e";
          if (audioChunk && !audioCodec)
            audioCodec = "mp4a.40.2";
          if (mix) {
            videoCodec += ", ".concat(audioCodec);
            audioCodec = "";
          }
          this._createMseSource(videoCodec, audioCodec);
        }
      } else {
        throw new StreamingError(ERR.OTHER, null, null, null, "unsupported stream");
      }
      if (this._softVideo)
        this._sourceCreated = true;
    }
  }, {
    key: "appendBuffer",
    value: function() {
      var _appendBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2(segment, audioSegment, videoChunk, audioChunk, discontinuity, contiguous, startTime) {
        var p, needInit, _this$_transmuxer$tra, _this$_transmuxer$tra2, video, audio, isFirstAppend, mse, _p;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!(videoChunk !== null && videoChunk !== void 0 && videoChunk.length) && !(audioChunk !== null && audioChunk !== void 0 && audioChunk.length))) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                if (!this._directAppend) {
                  _context2.next = 7;
                  break;
                }
                p = [];
                if (videoChunk)
                  p.push(this._mse.append(MSE.VIDEO, videoChunk));
                if (audioChunk)
                  p.push(this._mse.append(MSE.AUDIO, audioChunk));
                return _context2.abrupt("return", Promise.all(p));
              case 7:
                needInit = this._needInitSegment || discontinuity;
                _this$_transmuxer$tra = this._transmuxer.transmux(videoChunk, audioChunk, discontinuity, contiguous, startTime, this._needInitSegment || discontinuity), _this$_transmuxer$tra2 = _slicedToArray(_this$_transmuxer$tra, 2), video = _this$_transmuxer$tra2[0], audio = _this$_transmuxer$tra2[1];
                if (audioChunk && audioSegment) {
                  audioSegment === null || audioSegment === void 0 ? void 0 : audioSegment.setTrackExist(false, true);
                }
                if (audioChunk && segment) {
                  segment === null || segment === void 0 ? void 0 : segment.setTrackExist(true, false);
                }
                if (!audioSegment) {
                  segment === null || segment === void 0 ? void 0 : segment.setTrackExist(!!video, !!audio);
                }
                if (video && !audio) {
                  this.hls.emit(Event.NO_AUDIO_TRACK);
                }
                if (!this._softVideo) {
                  _context2.next = 18;
                  break;
                }
                this._softVideo.appendBuffer(video, audio);
                this._needInitSegment = false;
                _context2.next = 28;
                break;
              case 18:
                if (!this._mse) {
                  _context2.next = 28;
                  break;
                }
                isFirstAppend = !this._sourceCreated;
                if (isFirstAppend) {
                  this._createMseSource(video === null || video === void 0 ? void 0 : video.codec, audio === null || audio === void 0 ? void 0 : audio.codec);
                }
                this._needInitSegment = false;
                mse = this._mse;
                _p = [];
                if (needInit && !isFirstAppend) {
                  this._handleCodecChange(video, audio);
                }
                if (video)
                  _p.push(mse.append(MSE.VIDEO, video.data));
                if (audio)
                  _p.push(mse.append(MSE.AUDIO, audio.data));
                return _context2.abrupt("return", Promise.all(_p));
              case 28:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function appendBuffer(_x2, _x3, _x4, _x5, _x6, _x7, _x8) {
        return _appendBuffer.apply(this, arguments);
      }
      return appendBuffer;
    }()
  }, {
    key: "removeBuffer",
    value: function() {
      var _removeBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3() {
        var _this = this;
        var start, end, media, _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                start = _args3.length > 0 && _args3[0] !== void 0 ? _args3[0] : 0;
                end = _args3.length > 1 && _args3[1] !== void 0 ? _args3[1] : Infinity;
                media = this.hls.media;
                if (!(!this._mse || !media || start < 0 || end < start || start >= this._mse.duration)) {
                  _context3.next = 5;
                  break;
                }
                return _context3.abrupt("return");
              case 5:
                return _context3.abrupt("return", this._mse.clearBuffer(start, end).then(function() {
                  return _this.hls.emit(EVENT.REMOVE_BUFFER, {
                    start,
                    end,
                    removeEnd: end
                  });
                }));
              case 6:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function removeBuffer() {
        return _removeBuffer.apply(this, arguments);
      }
      return removeBuffer;
    }()
  }, {
    key: "evictBuffer",
    value: function() {
      var _evictBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(bufferBehind) {
        var media, currentTime, removeEnd, start;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                media = this.hls.media;
                if (!(!this._mse || !media || !bufferBehind || bufferBehind < 0)) {
                  _context4.next = 3;
                  break;
                }
                return _context4.abrupt("return");
              case 3:
                currentTime = media.currentTime;
                removeEnd = currentTime - bufferBehind;
                if (!(removeEnd <= 0)) {
                  _context4.next = 7;
                  break;
                }
                return _context4.abrupt("return");
              case 7:
                start = Buffer.start(Buffer.get(media));
                if (!(start + 1 >= removeEnd)) {
                  _context4.next = 10;
                  break;
                }
                return _context4.abrupt("return");
              case 10:
                return _context4.abrupt("return", this.removeBuffer(0, removeEnd));
              case 11:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function evictBuffer(_x9) {
        return _evictBuffer.apply(this, arguments);
      }
      return evictBuffer;
    }()
  }, {
    key: "clearAllBuffer",
    value: function() {
      var _clearAllBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this._mse) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return", this._mse.clearAllBuffer());
              case 2:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this);
      }));
      function clearAllBuffer() {
        return _clearAllBuffer.apply(this, arguments);
      }
      return clearAllBuffer;
    }()
  }, {
    key: "decryptBuffer",
    value: function decryptBuffer(video, audio) {
      return this._decryptor.decrypt(video, audio);
    }
  }, {
    key: "reset",
    value: function() {
      var _reset = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6() {
        var reuseMse, _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                reuseMse = _args6.length > 0 && _args6[0] !== void 0 ? _args6[0] : false;
                if (!(this._mse && !reuseMse)) {
                  _context6.next = 8;
                  break;
                }
                this._transmuxer = null;
                this._sourceCreated = false;
                _context6.next = 6;
                return this._mse.unbindMedia();
              case 6:
                _context6.next = 8;
                return this._mse.bindMedia(this.hls.media);
              case 8:
                this._needInitSegment = true;
                this._directAppend = false;
              case 10:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "endOfStream",
    value: function() {
      var _endOfStream = _asyncToGenerator(_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                if (!this._mse) {
                  _context7.next = 5;
                  break;
                }
                if (!this._sourceCreated) {
                  _context7.next = 5;
                  break;
                }
                _context7.next = 4;
                return this._mse.endOfStream();
              case 4:
                this.hls.emit(EVENT.BUFFEREOS);
              case 5:
                if (this._softVideo) {
                  this._softVideo.endOfStream();
                }
              case 6:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this);
      }));
      function endOfStream() {
        return _endOfStream.apply(this, arguments);
      }
      return endOfStream;
    }()
  }, {
    key: "setLiveSeekableRange",
    value: function() {
      var _setLiveSeekableRange = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8(start, end) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch (_context8.prev = _context8.next) {
              case 0:
                if (this._mse)
                  this._mse.setLiveSeekableRange(start, end);
              case 1:
              case "end":
                return _context8.stop();
            }
        }, _callee8, this);
      }));
      function setLiveSeekableRange(_x10, _x11) {
        return _setLiveSeekableRange.apply(this, arguments);
      }
      return setLiveSeekableRange;
    }()
  }, {
    key: "destroy",
    value: function() {
      var _destroy = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9() {
        var _this$_decryptor;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1)
            switch (_context9.prev = _context9.next) {
              case 0:
                (_this$_decryptor = this._decryptor) === null || _this$_decryptor === void 0 ? void 0 : _this$_decryptor.destroy();
                if (!this._mse) {
                  _context9.next = 4;
                  break;
                }
                _context9.next = 4;
                return this._mse.unbindMedia();
              case 4:
                this._decryptor = null;
                this._mse = null;
                this._softVideo = null;
              case 7:
              case "end":
                return _context9.stop();
            }
        }, _callee9, this);
      }));
      function destroy() {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }, {
    key: "_createMseSource",
    value: function _createMseSource(videoCodec, audioCodec) {
      logger2.debug("create mse source, videoCodec=".concat(videoCodec, ", audioCodec=").concat(audioCodec));
      var mse = this._mse;
      if (!mse)
        return;
      if (videoCodec) {
        mse.createSource(MSE.VIDEO, "video/mp4;codecs=".concat(videoCodec));
        this._sourceCreated = true;
      }
      if (audioCodec) {
        mse.createSource(MSE.AUDIO, "audio/mp4;codecs=".concat(audioCodec));
        this._sourceCreated = true;
      }
      this.hls.emit(EVENT.SOURCEBUFFER_CREATED);
    }
  }, {
    key: "_handleCodecChange",
    value: function _handleCodecChange(video, audio) {
      var mse = this._mse;
      var codecList = [{
        type: MSE.VIDEO,
        codecs: video === null || video === void 0 ? void 0 : video.codec
      }, {
        type: MSE.AUDIO,
        codecs: audio === null || audio === void 0 ? void 0 : audio.codec
      }];
      codecList.filter(function(item) {
        return !!item.codecs;
      }).forEach(function(_ref) {
        var type = _ref.type, codecs = _ref.codecs;
        var sourceBuffer = mse.getSourceBuffer(type);
        if (sourceBuffer) {
          var codec = codecs.split(",")[0];
          if (!new RegExp(codec, "ig").test(sourceBuffer.mimeType)) {
            mse.changeType(type, "".concat(type, "/mp4;codecs=").concat(codecs));
          }
        }
      });
    }
  }, {
    key: "seamlessSwitch",
    value: function seamlessSwitch() {
      this._needInitSegment = true;
    }
  }]);
  return BufferService2;
}();

// node_modules/xgplayer-hls/es/hls/config.js
function getConfig(cfg) {
  var media = (cfg === null || cfg === void 0 ? void 0 : cfg.media) || document.createElement("video");
  return _objectSpread2(_objectSpread2({
    maxPlaylistSize: 50,
    retryCount: 3,
    retryDelay: 1e3,
    pollRetryCount: 2,
    loadTimeout: 1e4,
    preloadTime: 30,
    softDecode: false,
    bufferBehind: 10,
    maxJumpDistance: 3,
    startTime: 0,
    targetLatency: 10,
    maxLatency: 20,
    allowedStreamTrackChange: true,
    seiInTime: false,
    manifest: ""
  }, cfg), {}, {
    media
  });
}

// node_modules/xgplayer-hls/es/hls/manifest-loader/parser/model.js
var MasterPlaylist = _createClass(function MasterPlaylist2() {
  _classCallCheck(this, MasterPlaylist2);
  _defineProperty(this, "version", 0);
  _defineProperty(this, "streams", []);
  _defineProperty(this, "isMaster", true);
});
var MediaType = {
  Audio: "AUDIO",
  Video: "VIDEO",
  SubTitle: "SUBTITLE",
  ClosedCaptions: "CLOSED-CAPTIONS"
};
var MediaStream = _createClass(function MediaStream2() {
  _classCallCheck(this, MediaStream2);
  _defineProperty(this, "id", 0);
  _defineProperty(this, "url", "");
  _defineProperty(this, "default", false);
  _defineProperty(this, "autoSelect", false);
  _defineProperty(this, "forced", false);
  _defineProperty(this, "group", "");
  _defineProperty(this, "name", "");
  _defineProperty(this, "lang", "");
  _defineProperty(this, "segments", []);
  _defineProperty(this, "endSN", 0);
});
var AudioStream = function(_MediaStream) {
  _inherits(AudioStream2, _MediaStream);
  var _super = _createSuper(AudioStream2);
  function AudioStream2() {
    var _this;
    _classCallCheck(this, AudioStream2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "mediaType", MediaType.Audio);
    _defineProperty(_assertThisInitialized(_this), "channels", 0);
    return _this;
  }
  return _createClass(AudioStream2);
}(MediaStream);
var SubTitleStream = function(_MediaStream3) {
  _inherits(SubTitleStream2, _MediaStream3);
  var _super3 = _createSuper(SubTitleStream2);
  function SubTitleStream2() {
    var _this3;
    _classCallCheck(this, SubTitleStream2);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this3 = _super3.call.apply(_super3, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this3), "mediaType", MediaType.SubTitle);
    return _this3;
  }
  return _createClass(SubTitleStream2);
}(MediaStream);
var MasterStream = _createClass(function MasterStream2() {
  _classCallCheck(this, MasterStream2);
  _defineProperty(this, "id", 0);
  _defineProperty(this, "bitrate", 0);
  _defineProperty(this, "width", 0);
  _defineProperty(this, "height", 0);
  _defineProperty(this, "name", "");
  _defineProperty(this, "url", "");
  _defineProperty(this, "audioCodec", "");
  _defineProperty(this, "videoCodec", "");
  _defineProperty(this, "textCodec", "");
  _defineProperty(this, "audioGroup", "");
  _defineProperty(this, "audioStreams", []);
  _defineProperty(this, "subtitleStreams", []);
  _defineProperty(this, "closedCaptionsStream", []);
});
var MediaPlaylist = _createClass(function MediaPlaylist2() {
  _classCallCheck(this, MediaPlaylist2);
  _defineProperty(this, "version", 0);
  _defineProperty(this, "url", "");
  _defineProperty(this, "type", "");
  _defineProperty(this, "startCC", 0);
  _defineProperty(this, "endCC", 0);
  _defineProperty(this, "startSN", 0);
  _defineProperty(this, "endSN", 0);
  _defineProperty(this, "totalDuration", 0);
  _defineProperty(this, "targetDuration", 0);
  _defineProperty(this, "live", true);
  _defineProperty(this, "segments", []);
});
var MediaSegment = function() {
  function MediaSegment2() {
    _classCallCheck(this, MediaSegment2);
    _defineProperty(this, "sn", 0);
    _defineProperty(this, "cc", 0);
    _defineProperty(this, "url", "");
    _defineProperty(this, "title", "");
    _defineProperty(this, "start", 0);
    _defineProperty(this, "duration", 0);
    _defineProperty(this, "key", null);
    _defineProperty(this, "byteRange", null);
    _defineProperty(this, "isInitSegment", false);
    _defineProperty(this, "initSegment", null);
    _defineProperty(this, "isLast", false);
    _defineProperty(this, "hasAudio", false);
    _defineProperty(this, "hasVideo", false);
  }
  _createClass(MediaSegment2, [{
    key: "end",
    get: function get() {
      return this.start + this.duration;
    }
  }, {
    key: "setTrackExist",
    value: function setTrackExist(v, a) {
      this.hasVideo = v;
      this.hasAudio = a;
    }
  }, {
    key: "setByteRange",
    value: function setByteRange(data, prevSegment) {
      this.byteRange = [0];
      var bytes = data.split("@");
      if (bytes.length === 1 && prevSegment && prevSegment.byteRange) {
        this.byteRange[0] = prevSegment.byteRange[1] || 0;
        if (this.byteRange[0])
          this.byteRange[0] += 1;
      } else {
        this.byteRange[0] = parseInt(bytes[1]);
      }
      this.byteRange[1] = this.byteRange[0] + parseInt(bytes[0]) - 1;
    }
  }]);
  return MediaSegment2;
}();
var MediaSegmentKey = function() {
  function MediaSegmentKey2(segKey) {
    _classCallCheck(this, MediaSegmentKey2);
    _defineProperty(this, "method", "");
    _defineProperty(this, "url", "");
    _defineProperty(this, "iv", null);
    _defineProperty(this, "keyFormat", "");
    _defineProperty(this, "keyFormatVersions", "");
    if (segKey instanceof MediaSegmentKey2) {
      this.method = segKey.method;
      this.url = segKey.url;
      this.keyFormat = segKey.keyFormat;
      this.keyFormatVersions = segKey.keyFormatVersions;
      if (segKey.iv)
        this.iv = new Uint8Array(segKey.iv);
    }
  }
  _createClass(MediaSegmentKey2, [{
    key: "clone",
    value: function clone(sn) {
      var key = new MediaSegmentKey2(this);
      if (sn !== null && sn !== void 0)
        key.setIVFromSN(sn);
      return key;
    }
  }, {
    key: "setIVFromSN",
    value: function setIVFromSN(sn) {
      if (!this.iv && this.method === "AES-128" && typeof sn === "number" && this.url) {
        this.iv = new Uint8Array(16);
        for (var i = 12; i < 16; i++) {
          this.iv[i] = sn >> 8 * (15 - i) & 255;
        }
      }
    }
  }]);
  return MediaSegmentKey2;
}();

// node_modules/xgplayer-hls/es/hls/manifest-loader/parser/utils.js
var REGEXP_TAG = /^#(EXT[^:]*)(?::(.*))?$/;
var REGEXP_ATTR = /([^=]+)=(?:"([^"]*)"|([^",]*))(?:,|$)/g;
var REGEXP_ABSOLUTE_URL = /^(?:[a-zA-Z0-9+\-.]+:)?\/\//;
var REGEXP_URL_PAIR = /^((?:[a-zA-Z0-9+\-.]+:)?\/\/[^/?#]*)?([^?#]*\/)?/;
function getLines(text) {
  return text.split(/[\r\n]/).map(function(x) {
    return x.trim();
  }).filter(Boolean);
}
function parseTag(text) {
  var ret = text.match(REGEXP_TAG);
  if (!ret || !ret[1])
    return;
  return [ret[1].replace("EXT-X-", ""), ret[2]];
}
function parseAttr(text) {
  var ret = {};
  var match = REGEXP_ATTR.exec(text);
  while (match) {
    ret[match[1]] = match[2] || match[3];
    match = REGEXP_ATTR.exec(text);
  }
  return ret;
}
function getAbsoluteUrl(url, parentUrl) {
  if (!parentUrl || !url || REGEXP_ABSOLUTE_URL.test(url))
    return url;
  var pairs = REGEXP_URL_PAIR.exec(parentUrl);
  if (!pairs)
    return url;
  if (url[0] === "/")
    return pairs[1] + url;
  return pairs[1] + pairs[2] + url;
}
var CODECS_REGEXP = {
  audio: [/^mp4a/, /^vorbis$/, /^opus$/, /^flac$/, /^[ae]c-3$/],
  video: [/^avc/, /^hev/, /^hvc/, /^vp0?[89]/, /^av1$/],
  text: [/^vtt$/, /^wvtt/, /^stpp/]
};
function getCodecs(type, codecs) {
  var re = CODECS_REGEXP[type];
  if (!re || !codecs || !codecs.length)
    return;
  for (var i = 0; i < re.length; i++) {
    for (var j = 0; j < codecs.length; j++) {
      if (re[i].test(codecs[j]))
        return codecs[j];
    }
  }
}

// node_modules/xgplayer-hls/es/hls/manifest-loader/parser/master.js
function parseMasterPlaylist(lines, parentUrl) {
  var master = new MasterPlaylist();
  var index = 0;
  var line;
  var audioStreams = [];
  var subtitleStreams = [];
  while (line = lines[index++]) {
    var tag = parseTag(line);
    if (!tag)
      continue;
    var _tag = _slicedToArray(tag, 2), name = _tag[0], data = _tag[1];
    if (name === "VERSION") {
      master.version = parseInt(data);
    } else if (name === "MEDIA" && data) {
      var attr = parseAttr(data);
      var stream = void 0;
      switch (attr.TYPE) {
        case "AUDIO":
          stream = new AudioStream();
          break;
        case "SUBTITLES":
          stream = new SubTitleStream();
          break;
        default:
          stream = new MediaStream();
      }
      stream.url = getAbsoluteUrl(attr.URI, parentUrl);
      stream.default = attr.DEFAULT === "YES";
      stream.autoSelect = attr.AUTOSELECT === "YES";
      stream.group = attr["GROUP-ID"];
      stream.name = attr.NAME;
      stream.lang = attr.LANGUAGE;
      if (attr.CHANNELS) {
        stream.channels = Number(attr.CHANNELS.split("/")[0]);
        if (Number.isNaN(stream.channels))
          stream.channels = 0;
      }
      if (attr.TYPE === "AUDIO" && attr.URI) {
        audioStreams.push(stream);
      }
      if (attr.TYPE === "SUBTITLES") {
        subtitleStreams.push(stream);
      }
    } else if (name === "STREAM-INF" && data) {
      var _stream = new MasterStream();
      var _attr = parseAttr(data);
      _stream.bitrate = parseInt(_attr["AVERAGE-BANDWIDTH"] || _attr.BANDWIDTH);
      _stream.name = _attr.NAME;
      _stream.url = getAbsoluteUrl(lines[index++], parentUrl);
      if (_attr.RESOLUTION) {
        var _attr$RESOLUTION$spli = _attr.RESOLUTION.split("x"), _attr$RESOLUTION$spli2 = _slicedToArray(_attr$RESOLUTION$spli, 2), w = _attr$RESOLUTION$spli2[0], h = _attr$RESOLUTION$spli2[1];
        _stream.width = parseInt(w);
        _stream.height = parseInt(h);
      }
      if (_attr.CODECS) {
        var codecs = _attr.CODECS.split(/[ ,]+/).filter(Boolean);
        _stream.videoCodec = getCodecs("video", codecs);
        _stream.audioCodec = getCodecs("audio", codecs);
        _stream.textCodec = getCodecs("text", codecs);
      }
      _stream.audioGroup = _attr.AUDIO;
      _stream.subtitleGroup = _attr.SUBTITLES;
      master.streams.push(_stream);
    }
  }
  master.streams.forEach(function(s, i) {
    s.id = i;
  });
  if (audioStreams.length) {
    audioStreams.forEach(function(s, i) {
      s.id = i;
    });
    master.streams.forEach(function(stream2) {
      if (stream2.audioGroup) {
        stream2.audioStreams = audioStreams.filter(function(x) {
          return x.group === stream2.audioGroup;
        });
      }
    });
  }
  if (subtitleStreams.length) {
    subtitleStreams.forEach(function(s, i) {
      s.id = i;
    });
    master.streams.forEach(function(stream2) {
      if (stream2.subtitleGroup) {
        stream2.subtitleStreams = subtitleStreams.filter(function(x) {
          return x.group === stream2.subtitleGroup;
        });
      }
    });
  }
  return master;
}

// node_modules/xgplayer-hls/es/hls/manifest-loader/parser/media.js
function parseMediaPlaylist(lines, parentUrl) {
  var media = new MediaPlaylist();
  media.url = parentUrl;
  var curSegment = new MediaSegment();
  var curInitSegment = null;
  var curKey = null;
  var totalDuration = 0;
  var curSN = 0;
  var curCC = 0;
  var index = 0;
  var line;
  var endOfList = false;
  while (line = lines[index++]) {
    if (endOfList) {
      break;
    }
    if (line[0] !== "#") {
      curSegment.sn = curSN;
      curSegment.cc = curCC;
      curSegment.url = getAbsoluteUrl(line, parentUrl);
      if (curKey)
        curSegment.key = curKey.clone(curSN);
      if (curInitSegment)
        curSegment.initSegment = curInitSegment;
      media.segments.push(curSegment);
      curSegment = new MediaSegment();
      curSN++;
      continue;
    }
    var tag = parseTag(line);
    if (!tag)
      continue;
    var _tag = _slicedToArray(tag, 2), name = _tag[0], data = _tag[1];
    switch (name) {
      case "VERSION":
        media.version = parseInt(data);
        break;
      case "PLAYLIST-TYPE":
        media.type = data === null || data === void 0 ? void 0 : data.toUpperCase();
        break;
      case "TARGETDURATION":
        media.targetDuration = parseFloat(data);
        break;
      case "ENDLIST":
        {
          var _lastSegment = media.segments[media.segments.length - 1];
          if (_lastSegment) {
            _lastSegment.isLast = true;
          }
          media.live = false;
          endOfList = true;
        }
        break;
      case "MEDIA-SEQUENCE":
        curSN = media.startSN = parseInt(data);
        break;
      case "DISCONTINUITY-SEQUENCE":
        curCC = media.startCC = parseInt(data);
        break;
      case "DISCONTINUITY":
        curCC++;
        break;
      case "BYTERANGE":
        curSegment.setByteRange(data, media.segments[media.segments.length - 1]);
        break;
      case "EXTINF":
        {
          var _data$split = data.split(","), _data$split2 = _slicedToArray(_data$split, 2), duration = _data$split2[0], title = _data$split2[1];
          curSegment.start = totalDuration;
          curSegment.duration = parseFloat(duration);
          totalDuration += curSegment.duration;
          curSegment.title = title;
        }
        break;
      case "KEY":
        {
          var attr = parseAttr(data);
          if (attr.METHOD === "NONE") {
            curKey = null;
            break;
          }
          if (attr.METHOD !== "AES-128")
            throw new Error("encrypt ".concat(attr.METHOD, "/").concat(attr.KEYFORMAT, " is not supported"));
          curKey = new MediaSegmentKey();
          curKey.method = attr.METHOD;
          curKey.url = /^blob:/.test(attr.URI) ? attr.URI : getAbsoluteUrl(attr.URI, parentUrl);
          curKey.keyFormat = attr.KEYFORMAT || "identity";
          curKey.keyFormatVersions = attr.KEYFORMATVERSIONS;
          if (attr.IV) {
            var str = attr.IV.slice(2);
            str = (str.length & 1 ? "0" : "") + str;
            curKey.iv = new Uint8Array(str.length / 2);
            for (var i = 0, l = str.length / 2; i < l; i++) {
              curKey.iv[i] = parseInt(str.slice(i * 2, i * 2 + 2), 16);
            }
          }
        }
        break;
      case "MAP":
        {
          var _attr = parseAttr(data);
          curSegment.url = getAbsoluteUrl(_attr.URI, parentUrl);
          if (_attr.BYTERANGE)
            curSegment.setByteRange(_attr.BYTERANGE);
          curSegment.isInitSegment = true;
          curSegment.sn = 0;
          if (curKey) {
            curSegment.key = curKey.clone(0);
          }
          curInitSegment = curSegment;
          curSegment = new MediaSegment();
        }
        break;
    }
  }
  media.segments = media.segments.filter(function(x) {
    return x.duration !== 0;
  });
  var lastSegment = media.segments[media.segments.length - 1];
  if (lastSegment)
    media.endSN = lastSegment.sn;
  media.totalDuration = totalDuration;
  media.endCC = curCC;
  return media;
}

// node_modules/xgplayer-hls/es/hls/manifest-loader/parser/index.js
var M3U8Parser = function() {
  function M3U8Parser2() {
    _classCallCheck(this, M3U8Parser2);
  }
  _createClass(M3U8Parser2, null, [{
    key: "parse",
    value: function parse() {
      var text = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var parentUrl = arguments.length > 1 ? arguments[1] : void 0;
      if (!text.includes("#EXTM3U"))
        throw new Error("Invalid m3u8 file");
      var lines = getLines(text);
      if (M3U8Parser2.isMediaPlaylist(text)) {
        return parseMediaPlaylist(lines, parentUrl);
      }
      return parseMasterPlaylist(lines, parentUrl);
    }
  }, {
    key: "isMediaPlaylist",
    value: function isMediaPlaylist(text) {
      return text.includes("#EXTINF:") || text.includes("#EXT-X-TARGETDURATION:");
    }
  }]);
  return M3U8Parser2;
}();

// node_modules/xgplayer-hls/es/hls/manifest-loader/index.js
var ManifestLoader = function() {
  function ManifestLoader2(hls) {
    var _this = this;
    _classCallCheck(this, ManifestLoader2);
    _defineProperty(this, "_emitOnLoaded", function(res, url) {
      var response = res.response, options = res.options;
      var _ref = options || {}, firstByteTime = _ref.firstByteTime, startTime = _ref.startTime, endTime = _ref.endTime, contentLength = _ref.contentLength;
      var time = endTime - startTime;
      _this.hls.emit(EVENT.SPEED, {
        time,
        byteLength: contentLength,
        url
      });
      _this.hls.emit(EVENT.LOAD_COMPLETE, {
        url,
        elapsed: time || 0
      });
      _this.hls.emit(EVENT.TTFB, {
        url,
        responseUrl: response.url,
        elapsed: firstByteTime - startTime
      });
      _this.hls.emit(EVENT.LOAD_RESPONSE_HEADERS, {
        headers: response.headers,
        url
      });
    });
    _defineProperty(this, "_onLoaderRetry", function(error, retryTime) {
      _this.hls.emit(Event.LOAD_RETRY, {
        error: StreamingError.network(error),
        retryTime
      });
    });
    this.hls = hls;
    this._timer = null;
    var _this$hls$config = this.hls.config, retryCount = _this$hls$config.retryCount, retryDelay = _this$hls$config.retryDelay, loadTimeout = _this$hls$config.loadTimeout, fetchOptions = _this$hls$config.fetchOptions;
    this._loader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "text",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
    this._audioLoader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "text",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
    this._subtitleLoader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "text",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
  }
  _createClass(ManifestLoader2, [{
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(url, audioUrl, subtitleUrl) {
        var toLoad, videoText, audioText, subtitleText, _yield$Promise$all, _yield$Promise$all2, video, audio, subtitle, onPreM3U8Parse, playlist, audioPlaylist, subtitlePlaylist, _playlist;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                toLoad = [this._loader.load(url)];
                if (audioUrl) {
                  toLoad.push(this._audioLoader.load(audioUrl));
                }
                if (subtitleUrl) {
                  toLoad.push(this._subtitleLoader.load(subtitleUrl));
                }
                _context.prev = 3;
                _context.next = 6;
                return Promise.all(toLoad);
              case 6:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
                video = _yield$Promise$all2[0];
                audio = _yield$Promise$all2[1];
                subtitle = _yield$Promise$all2[2];
                if (video) {
                  _context.next = 13;
                  break;
                }
                return _context.abrupt("return", []);
              case 13:
                this._emitOnLoaded(video, url);
                videoText = video.data;
                if (audioUrl) {
                  audioText = audio === null || audio === void 0 ? void 0 : audio.data;
                  subtitleText = subtitle === null || subtitle === void 0 ? void 0 : subtitle.data;
                  audioText && this._emitOnLoaded(audio, audioUrl);
                  subtitleText && this._emitOnLoaded(subtitle, subtitleUrl);
                } else {
                  subtitleText = subtitle === null || subtitle === void 0 ? void 0 : subtitle.data;
                  subtitleText && this._emitOnLoaded(subtitle, subtitleUrl);
                }
                _context.next = 21;
                break;
              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](3);
                throw StreamingError.network(_context.t0);
              case 21:
                onPreM3U8Parse = this.hls.config.onPreM3U8Parse;
                _context.prev = 22;
                if (onPreM3U8Parse) {
                  videoText = onPreM3U8Parse(videoText) || videoText;
                  if (audioText)
                    audioText = onPreM3U8Parse(audioText, true) || audioText;
                  if (subtitleText)
                    subtitleText = onPreM3U8Parse(subtitleText, true) || subtitleText;
                }
                playlist = M3U8Parser.parse(videoText, url);
                if (!(((_playlist = playlist) === null || _playlist === void 0 ? void 0 : _playlist.live) === false && playlist.segments && !playlist.segments.length)) {
                  _context.next = 27;
                  break;
                }
                throw new Error("empty segments list");
              case 27:
                if (audioText) {
                  audioPlaylist = M3U8Parser.parse(audioText, audioUrl);
                }
                if (subtitleText) {
                  subtitlePlaylist = M3U8Parser.parse(subtitleText, subtitleUrl);
                }
                _context.next = 34;
                break;
              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](22);
                throw new StreamingError(ERR.MANIFEST, ERR.SUB_TYPES.HLS, _context.t1);
              case 34:
                if (playlist) {
                  if (playlist.isMaster) {
                    this.hls.emit(Event.HLS_MANIFEST_LOADED, {
                      playlist
                    });
                  } else {
                    this.hls.emit(Event.HLS_LEVEL_LOADED, {
                      playlist
                    });
                  }
                }
                return _context.abrupt("return", [playlist, audioPlaylist, subtitlePlaylist]);
              case 36:
              case "end":
                return _context.stop();
            }
        }, _callee, this, [[3, 18], [22, 31]]);
      }));
      function load(_x, _x2, _x3) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "parseText",
    value: function parseText(videoText, url) {
      var onPreM3U8Parse = this.hls.config.onPreM3U8Parse;
      var playlist;
      try {
        var _playlist2;
        if (onPreM3U8Parse) {
          videoText = onPreM3U8Parse(videoText) || videoText;
        }
        playlist = M3U8Parser.parse(videoText, url);
        if (((_playlist2 = playlist) === null || _playlist2 === void 0 ? void 0 : _playlist2.live) === false && playlist.segments && !playlist.segments.length) {
          throw new Error("empty segments list");
        }
      } catch (error) {
        throw new StreamingError(ERR.MANIFEST, ERR.SUB_TYPES.HLS, error);
      }
      if (playlist) {
        if (playlist.isMaster) {
          this.hls.emit(Event.HLS_MANIFEST_LOADED, {
            playlist
          });
        } else {
          this.hls.emit(Event.HLS_LEVEL_LOADED, {
            playlist
          });
        }
      }
      return [playlist];
    }
  }, {
    key: "poll",
    value: function poll(url, audioUrl, subtitleUrl, cb, errorCb, time) {
      var _this2 = this;
      clearTimeout(this._timer);
      time = time || 3e3;
      var retryCount = this.hls.config.pollRetryCount;
      var fn = function() {
        var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
          var res;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1)
              switch (_context2.prev = _context2.next) {
                case 0:
                  clearTimeout(_this2._timer);
                  _context2.prev = 1;
                  _context2.next = 4;
                  return _this2.load(url, audioUrl, subtitleUrl);
                case 4:
                  res = _context2.sent;
                  if (res[0]) {
                    _context2.next = 7;
                    break;
                  }
                  return _context2.abrupt("return");
                case 7:
                  retryCount = _this2.hls.config.pollRetryCount;
                  cb(res[0], res[1], res[2]);
                  _context2.next = 15;
                  break;
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](1);
                  retryCount--;
                  if (retryCount <= 0) {
                    errorCb(_context2.t0);
                  }
                case 15:
                  _this2._timer = setTimeout(fn, time);
                case 16:
                case "end":
                  return _context2.stop();
              }
          }, _callee2, null, [[1, 11]]);
        }));
        return function fn2() {
          return _ref2.apply(this, arguments);
        };
      }();
      this._timer = setTimeout(fn, time);
    }
  }, {
    key: "stopPoll",
    value: function stopPoll() {
      clearTimeout(this._timer);
      return this.cancel();
    }
  }, {
    key: "cancel",
    value: function cancel() {
      return Promise.all([this._loader.cancel(), this._audioLoader.cancel()]);
    }
  }]);
  return ManifestLoader2;
}();

// node_modules/xgplayer-hls/es/hls/utils.js
function clamp(num, min, max) {
  if (min > max) {
    max = min;
  }
  return Math.min(Math.max(num, min), max);
}

// node_modules/xgplayer-hls/es/hls/playlist/stream.js
var Stream = function() {
  function Stream2(playlist, audioPlaylist, subtitlePlaylist) {
    _classCallCheck(this, Stream2);
    _defineProperty(this, "live", void 0);
    _defineProperty(this, "id", 0);
    _defineProperty(this, "bitrate", 0);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "name", "");
    _defineProperty(this, "url", "");
    _defineProperty(this, "audioCodec", "");
    _defineProperty(this, "videoCodec", "");
    _defineProperty(this, "textCodec", "");
    _defineProperty(this, "startCC", 0);
    _defineProperty(this, "endCC", 0);
    _defineProperty(this, "startSN", 0);
    _defineProperty(this, "endSN", -1);
    _defineProperty(this, "totalDuration", 0);
    _defineProperty(this, "targetDuration", 0);
    _defineProperty(this, "snDiff", null);
    _defineProperty(this, "segments", []);
    _defineProperty(this, "audioStreams", []);
    _defineProperty(this, "subtitleStreams", []);
    _defineProperty(this, "closedCaptions", []);
    _defineProperty(this, "currentAudioStream", null);
    _defineProperty(this, "currentSubtitleStream", null);
    this.update(playlist, audioPlaylist, subtitlePlaylist);
  }
  _createClass(Stream2, [{
    key: "lastSegment",
    get: function get() {
      if (this.segments.length) {
        return this.segments[this.segments.length - 1];
      }
      return null;
    }
  }, {
    key: "segmentDuration",
    get: function get() {
      var _this$segments$;
      return this.targetDuration || ((_this$segments$ = this.segments[0]) === null || _this$segments$ === void 0 ? void 0 : _this$segments$.duration) || 0;
    }
  }, {
    key: "liveEdge",
    get: function get() {
      return this.endTime;
    }
  }, {
    key: "endTime",
    get: function get() {
      var _this$lastSegment;
      return ((_this$lastSegment = this.lastSegment) === null || _this$lastSegment === void 0 ? void 0 : _this$lastSegment.end) || 0;
    }
  }, {
    key: "currentSubtitleEndSn",
    get: function get() {
      var _this$currentSubtitle;
      return ((_this$currentSubtitle = this.currentSubtitleStream) === null || _this$currentSubtitle === void 0 ? void 0 : _this$currentSubtitle.endSN) || 0;
    }
  }, {
    key: "clearOldSegment",
    value: function clearOldSegment(startTime, pointer) {
      if (this.currentAudioStream) {
        this._clearSegments(startTime, pointer);
      }
      return this._clearSegments(startTime, pointer);
    }
  }, {
    key: "getAudioSegment",
    value: function getAudioSegment(seg) {
      if (!seg || !this.currentAudioStream)
        return;
      var sn = seg.sn - this.snDiff;
      return this.currentAudioStream.segments.find(function(x) {
        return x.sn === sn;
      });
    }
  }, {
    key: "update",
    value: function update(playlist, audioPlaylist) {
      this.url = playlist.url;
      if (Array.isArray(playlist.segments)) {
        if (this.live === null || this.live === void 0)
          this.live = playlist.live;
        this._updateSegments(playlist, this);
        this.startCC = playlist.startCC;
        this.endCC = playlist.endCC;
        this.startSN = playlist.startSN;
        this.endSN = playlist.endSN || -1;
        this.totalDuration = playlist.totalDuration;
        this.targetDuration = playlist.targetDuration;
        this.live = playlist.live;
        if (audioPlaylist && this.currentAudioStream && Array.isArray(audioPlaylist.segments)) {
          this._updateSegments(audioPlaylist, this.currentAudioStream);
          if ((this.snDiff === null || this.snDiff === void 0) && playlist.segments.length && audioPlaylist.segments.length) {
            this.snDiff = playlist.segments[0].sn - audioPlaylist.segments[0].sn;
          }
        }
      } else {
        this.id = playlist.id;
        this.bitrate = playlist.bitrate;
        this.width = playlist.width;
        this.height = playlist.height;
        this.name = playlist.name;
        this.audioCodec = playlist.audioCodec;
        this.videoCodec = playlist.videoCodec;
        this.textCodec = playlist.textCodec;
        this.audioStreams = playlist.audioStreams;
        this.subtitleStreams = playlist.subtitleStreams;
        if (!this.currentAudioStream && this.audioStreams.length) {
          this.currentAudioStream = this.audioStreams.find(function(x) {
            return x.default;
          }) || this.audioStreams[0];
        }
        if (!this.currentSubtitleStream && this.subtitleStreams.length) {
          this.currentSubtitleStream = this.subtitleStreams.find(function(x) {
            return x.default;
          }) || this.subtitleStreams[0];
        }
      }
    }
  }, {
    key: "updateSubtitle",
    value: function updateSubtitle(subtitlePlaylist) {
      var _this = this;
      if (!(subtitlePlaylist && this.currentSubtitleStream && Array.isArray(subtitlePlaylist.segments)))
        return;
      var newSegs = this._updateSegments(subtitlePlaylist, this.currentSubtitleStream);
      var segs = this.currentSubtitleStream.segments;
      if (segs.length > 100) {
        this.currentSubtitleStream.segments = segs.slice(100);
      }
      if (!newSegs)
        return;
      return newSegs.map(function(x) {
        return {
          sn: x.sn,
          url: x.url,
          duration: x.duration,
          start: x.start,
          end: x.end,
          lang: _this.currentSubtitleStream.lang
        };
      });
    }
  }, {
    key: "switchSubtitle",
    value: function switchSubtitle(lang) {
      var toSwitch = this.subtitleStreams.find(function(x) {
        return x.lang === lang;
      });
      var origin = this.currentSubtitleStream;
      if (toSwitch) {
        this.currentSubtitleStream = toSwitch;
        origin.segments = [];
      }
    }
  }, {
    key: "_clearSegments",
    value: function _clearSegments(startTime, pointer) {
      var sliceStart = 0;
      var segments = this.segments;
      for (var i = 0, l = segments.length; i < l; i++) {
        if (segments[i].end >= startTime) {
          sliceStart = i;
          break;
        }
      }
      if (sliceStart > pointer) {
        sliceStart = pointer;
      }
      if (sliceStart) {
        this.segments = this.segments.slice(sliceStart);
        if (this.currentAudioStream) {
          this.currentAudioStream.segments = this.currentAudioStream.segments.slice(sliceStart);
        }
      }
      return pointer - sliceStart;
    }
  }, {
    key: "_updateSegments",
    value: function _updateSegments(playlist, segObj) {
      var segments = segObj.segments;
      if (this.live) {
        var endSeg = segments[segments.length - 1];
        var endSN = (endSeg === null || endSeg === void 0 ? void 0 : endSeg.sn) || -1;
        if (endSN < playlist.endSN && playlist.segments.length) {
          var index = playlist.segments.findIndex(function(x) {
            return x.sn === endSN;
          });
          var toAppend = index < 0 ? playlist.segments : playlist.segments.slice(index + 1);
          if (segments.length && toAppend.length) {
            var endTime = endSeg.end;
            toAppend.forEach(function(seg) {
              seg.start = endTime;
              endTime = seg.end;
            });
            var lastCC = (endSeg === null || endSeg === void 0 ? void 0 : endSeg.cc) || -1;
            if (lastCC > toAppend[0].cc) {
              toAppend.forEach(function(seg) {
                return seg.cc += lastCC;
              });
            }
          }
          segObj.endSN = playlist.endSN;
          segObj.segments = segments.concat(toAppend);
          return toAppend;
        }
      } else {
        segObj.segments = playlist.segments;
      }
    }
  }]);
  return Stream2;
}();

// node_modules/xgplayer-hls/es/hls/playlist/index.js
var Playlist = function() {
  function Playlist2(hls) {
    _classCallCheck(this, Playlist2);
    _defineProperty(this, "streams", []);
    _defineProperty(this, "currentStream", null);
    _defineProperty(this, "dvrWindow", 0);
    _defineProperty(this, "_segmentPointer", -1);
    this.hls = hls;
  }
  _createClass(Playlist2, [{
    key: "lastSegment",
    get: function get() {
      var _this$currentStream;
      return (_this$currentStream = this.currentStream) === null || _this$currentStream === void 0 ? void 0 : _this$currentStream.lastSegment;
    }
  }, {
    key: "currentSegment",
    get: function get() {
      var _this$currentSegments;
      return (_this$currentSegments = this.currentSegments) === null || _this$currentSegments === void 0 ? void 0 : _this$currentSegments[this._segmentPointer];
    }
  }, {
    key: "nextSegment",
    get: function get() {
      var _this$currentSegments2;
      return (_this$currentSegments2 = this.currentSegments) === null || _this$currentSegments2 === void 0 ? void 0 : _this$currentSegments2[this._segmentPointer + 1];
    }
  }, {
    key: "currentSegments",
    get: function get() {
      var _this$currentStream2;
      return (_this$currentStream2 = this.currentStream) === null || _this$currentStream2 === void 0 ? void 0 : _this$currentStream2.segments;
    }
  }, {
    key: "currentSubtitleEndSn",
    get: function get() {
      var _this$currentStream3;
      return (_this$currentStream3 = this.currentStream) === null || _this$currentStream3 === void 0 ? void 0 : _this$currentStream3.currentSubtitleEndSn;
    }
  }, {
    key: "liveEdge",
    get: function get() {
      var _this$currentStream4;
      return (_this$currentStream4 = this.currentStream) === null || _this$currentStream4 === void 0 ? void 0 : _this$currentStream4.liveEdge;
    }
  }, {
    key: "totalDuration",
    get: function get() {
      var _this$currentStream5;
      return ((_this$currentStream5 = this.currentStream) === null || _this$currentStream5 === void 0 ? void 0 : _this$currentStream5.totalDuration) || 0;
    }
  }, {
    key: "seekRange",
    get: function get() {
      var segments = this.currentSegments;
      if (!segments || !segments.length)
        return;
      return [segments[0].start, segments[segments.length - 1].end];
    }
  }, {
    key: "isEmpty",
    get: function get() {
      var _this$currentSegments3;
      return !((_this$currentSegments3 = this.currentSegments) !== null && _this$currentSegments3 !== void 0 && _this$currentSegments3.length);
    }
  }, {
    key: "isLive",
    get: function get() {
      var _this$currentStream6;
      return (_this$currentStream6 = this.currentStream) === null || _this$currentStream6 === void 0 ? void 0 : _this$currentStream6.live;
    }
  }, {
    key: "hasSubtitle",
    get: function get() {
      var _this$currentStream7;
      return !!((_this$currentStream7 = this.currentStream) !== null && _this$currentStream7 !== void 0 && _this$currentStream7.currentSubtitleStream);
    }
  }, {
    key: "getAudioSegment",
    value: function getAudioSegment(seg) {
      var _this$currentStream8;
      return (_this$currentStream8 = this.currentStream) === null || _this$currentStream8 === void 0 ? void 0 : _this$currentStream8.getAudioSegment(seg);
    }
  }, {
    key: "moveSegmentPointer",
    value: function moveSegmentPointer(pos) {
      var _this$currentSegments4;
      if (pos === null || pos === void 0)
        pos = this._segmentPointer + 1;
      this._segmentPointer = clamp(pos, -1, (_this$currentSegments4 = this.currentSegments) === null || _this$currentSegments4 === void 0 ? void 0 : _this$currentSegments4.length);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.streams = [];
      this.currentStream = null;
      this.dvrWindow = 0;
      this._segmentPointer = -1;
    }
  }, {
    key: "getSegmentByIndex",
    value: function getSegmentByIndex(index) {
      var _this$currentSegments5;
      return (_this$currentSegments5 = this.currentSegments) === null || _this$currentSegments5 === void 0 ? void 0 : _this$currentSegments5[index];
    }
  }, {
    key: "setNextSegmentByIndex",
    value: function setNextSegmentByIndex() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      this._segmentPointer = index - 1;
    }
  }, {
    key: "findSegmentIndexByTime",
    value: function findSegmentIndexByTime(time) {
      var segments = this.currentSegments;
      if (segments) {
        for (var i = 0, l = segments.length, seg; i < l; i++) {
          seg = segments[i];
          if (time >= seg.start && time < seg.end) {
            return i;
          }
        }
        var lastSegment = segments[segments.length - 1];
        if (Math.abs(time - lastSegment.end) < 0.2)
          return segments.length - 1;
      }
    }
  }, {
    key: "upsertPlaylist",
    value: function upsertPlaylist(playlist, audioPlaylist, subtitlePlaylist) {
      var _this = this;
      if (!playlist)
        return;
      if (playlist.isMaster) {
        this.streams.length = playlist.streams.length;
        playlist.streams.filter(function(x) {
          return x.url;
        }).forEach(function(stream2, i) {
          if (_this.streams[i]) {
            _this.streams[i].update(stream2);
          } else {
            _this.streams[i] = new Stream(stream2);
          }
        });
        this.currentStream = this.streams[0];
      } else if (Array.isArray(playlist.segments)) {
        var stream = this.currentStream;
        if (stream) {
          stream.update(playlist, audioPlaylist, subtitlePlaylist);
          var newSubtitleSegs = stream.updateSubtitle(subtitlePlaylist);
          if (newSubtitleSegs) {
            this.hls.emit(Event.SUBTITLE_SEGMENTS, {
              list: newSubtitleSegs
            });
          }
        } else {
          this.reset();
          this.currentStream = this.streams[0] = new Stream(playlist, audioPlaylist, subtitlePlaylist);
        }
      }
      var currentStream = this.currentStream;
      if (currentStream) {
        if (this.hls.isLive && !this.dvrWindow) {
          this.dvrWindow = this.currentSegments.reduce(function(a, c) {
            a += c.duration;
            return a;
          }, 0);
        }
      }
    }
  }, {
    key: "switchSubtitle",
    value: function switchSubtitle(lang) {
      var _this$currentStream9;
      (_this$currentStream9 = this.currentStream) === null || _this$currentStream9 === void 0 ? void 0 : _this$currentStream9.switchSubtitle(lang);
    }
  }, {
    key: "clearOldSegment",
    value: function clearOldSegment() {
      var maxPlaylistSize = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 50;
      var stream = this.currentStream;
      if (!this.dvrWindow || !stream)
        return;
      var startTime = stream.endTime - this.dvrWindow;
      if (startTime <= 0)
        return;
      var segments = stream.segments;
      if (segments.length <= maxPlaylistSize)
        return;
      this._segmentPointer = stream.clearOldSegment(startTime, this._segmentPointer);
    }
  }, {
    key: "checkSegmentTrackChange",
    value: function checkSegmentTrackChange(cTime, nbSb) {
      var index = this.findSegmentIndexByTime(cTime);
      var seg = this.getSegmentByIndex(index);
      if (!seg)
        return;
      if (!seg.hasAudio && !seg.hasVideo)
        return;
      if (nbSb !== 2 && seg.hasAudio && seg.hasVideo)
        return seg;
      if (seg.end - cTime > 0.3)
        return;
      var next = this.getSegmentByIndex(index + 1);
      if (!next)
        return;
      if (!next.hasAudio && !next.hasVideo)
        return;
      if (next.hasAudio !== seg.hasAudio || next.hasVideo !== seg.hasVideo)
        return next;
    }
  }]);
  return Playlist2;
}();

// node_modules/xgplayer-hls/es/hls/segment-loader/index.js
var SegmentLoader = function() {
  function SegmentLoader2(hls) {
    var _this = this;
    _classCallCheck(this, SegmentLoader2);
    _defineProperty(this, "error", null);
    _defineProperty(this, "_emitOnLoaded", function(res, url) {
      var data = res.data, response = res.response, options = res.options;
      var _ref = options || {}, firstByteTime = _ref.firstByteTime, startTime = _ref.startTime, endTime = _ref.endTime, contentLength = _ref.contentLength;
      var time = endTime - startTime;
      _this._bandwidthService.addRecord(contentLength || data.byteLength, time);
      _this.hls.emit(EVENT.SPEED, {
        time,
        byteLength: contentLength,
        url
      });
      _this.hls.emit(EVENT.LOAD_COMPLETE, {
        url,
        elapsed: time || 0
      });
      _this.hls.emit(EVENT.TTFB, {
        url,
        responseUrl: response.url,
        elapsed: firstByteTime - startTime
      });
      _this.hls.emit(EVENT.LOAD_RESPONSE_HEADERS, {
        headers: response.headers,
        url
      });
    });
    _defineProperty(this, "_onLoaderRetry", function(error, retryTime) {
      _this.hls.emit(EVENT.LOAD_RETRY, {
        error: StreamingError.network(error),
        retryTime
      });
    });
    this.hls = hls;
    this._bandwidthService = new BandwidthService();
    this._mapCache = {};
    this._keyCache = {};
    var _this$hls$config = this.hls.config, retryCount = _this$hls$config.retryCount, retryDelay = _this$hls$config.retryDelay, loadTimeout = _this$hls$config.loadTimeout, fetchOptions = _this$hls$config.fetchOptions;
    this._segmentLoader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "arraybuffer",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
    this._audioSegmentLoader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "arraybuffer",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
    this._keyLoader = new NetLoader(_objectSpread2(_objectSpread2({}, fetchOptions), {}, {
      responseType: "arraybuffer",
      retry: retryCount,
      retryDelay,
      timeout: loadTimeout,
      onRetryError: this._onLoaderRetry
    }));
  }
  _createClass(SegmentLoader2, [{
    key: "speedInfo",
    value: function speedInfo() {
      return {
        speed: this._bandwidthService.getLatestSpeed(),
        avgSpeed: this._bandwidthService.getAvgSpeed()
      };
    }
  }, {
    key: "load",
    value: function load(seg, audioSeg, loadInit) {
      var loadAudioInit = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : loadInit;
      var toLoad = [];
      if (seg)
        toLoad[0] = this.loadVideoSegment(seg, loadInit);
      if (audioSeg)
        toLoad[1] = this.loadAudioSegment(audioSeg, loadAudioInit);
      return Promise.all(toLoad);
    }
  }, {
    key: "loadVideoSegment",
    value: function loadVideoSegment(seg, loadInit) {
      return this._loadSegment(this._segmentLoader, seg, loadInit);
    }
  }, {
    key: "loadAudioSegment",
    value: function loadAudioSegment(seg, loadInit) {
      return this._loadSegment(this._audioSegmentLoader, seg, loadInit);
    }
  }, {
    key: "_loadSegment",
    value: function() {
      var _loadSegment2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(segLoader, seg, loadInit) {
        var _this2 = this, _seg$key;
        var map, key, keyIv, mapKey, mapKeyIv, toLoad, _seg$initSegment$key, mapUrl, _keyUrl, keyUrl, _yield$Promise$all, _yield$Promise$all2, s, data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                toLoad = [];
                this.hls.emit(EVENT.LOAD_START, {
                  url: seg.url
                });
                toLoad[0] = segLoader.load(seg.url);
                if (loadInit && seg.initSegment) {
                  mapUrl = seg.initSegment.url;
                  map = this._mapCache[mapUrl];
                  if (!map) {
                    this.hls.emit(EVENT.LOAD_START, {
                      url: mapUrl
                    });
                    toLoad[1] = segLoader.load(mapUrl).then(function(r) {
                      if (r) {
                        var l = Object.keys(_this2._mapCache);
                        if (l > 30)
                          _this2._mapCache = {};
                        map = _this2._mapCache[mapUrl] = r.data;
                        _this2._emitOnLoaded(r, mapUrl);
                      }
                    });
                  }
                  _keyUrl = (_seg$initSegment$key = seg.initSegment.key) === null || _seg$initSegment$key === void 0 ? void 0 : _seg$initSegment$key.url;
                  if (_keyUrl) {
                    mapKeyIv = seg.initSegment.key.iv;
                    mapKey = this._keyCache[_keyUrl];
                    if (!mapKey) {
                      this.hls.emit(EVENT.LOAD_START, {
                        url: _keyUrl
                      });
                      toLoad[2] = this._keyLoader.load(_keyUrl).then(function(r) {
                        if (r) {
                          mapKey = _this2._keyCache[_keyUrl] = r.data;
                          _this2._emitOnLoaded(r, _keyUrl);
                        }
                      });
                    }
                  }
                }
                keyUrl = (_seg$key = seg.key) === null || _seg$key === void 0 ? void 0 : _seg$key.url;
                if (keyUrl) {
                  keyIv = seg.key.iv;
                  key = this._keyCache[keyUrl];
                  if (!key) {
                    this.hls.emit(EVENT.LOAD_START, {
                      url: keyUrl
                    });
                    toLoad[3] = this._keyLoader.load(keyUrl).then(function(r) {
                      if (r) {
                        key = _this2._keyCache[keyUrl] = r.data;
                        _this2._emitOnLoaded(r, keyUrl);
                      }
                    });
                  }
                }
                _context.next = 8;
                return Promise.all(toLoad);
              case 8:
                _yield$Promise$all = _context.sent;
                _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 1);
                s = _yield$Promise$all2[0];
                if (s) {
                  _context.next = 13;
                  break;
                }
                return _context.abrupt("return");
              case 13:
                data = s.data;
                this._emitOnLoaded(s, seg.url);
                return _context.abrupt("return", {
                  data,
                  map,
                  key,
                  mapKey,
                  keyIv,
                  mapKeyIv
                });
              case 16:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function _loadSegment(_x, _x2, _x3) {
        return _loadSegment2.apply(this, arguments);
      }
      return _loadSegment;
    }()
  }, {
    key: "reset",
    value: function reset() {
      this.error = null;
      this._mapCache = {};
      this._keyCache = {};
      this._bandwidthService.reset();
    }
  }, {
    key: "cancel",
    value: function() {
      var _cancel = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Promise.all([this._keyLoader.cancel(), this._segmentLoader.cancel(), this._audioSegmentLoader.cancel()]);
              case 2:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function cancel() {
        return _cancel.apply(this, arguments);
      }
      return cancel;
    }()
  }]);
  return SegmentLoader2;
}();

// node_modules/xgplayer-hls/es/hls/index.js
var logger3 = new Logger("hls");
var Hls = function(_EventEmitter) {
  _inherits(Hls2, _EventEmitter);
  var _super = _createSuper(Hls2);
  function Hls2(_cfg) {
    var _this;
    _classCallCheck(this, Hls2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "version", Hls2.version);
    _defineProperty(_assertThisInitialized(_this), "media", null);
    _defineProperty(_assertThisInitialized(_this), "config", null);
    _defineProperty(_assertThisInitialized(_this), "_manifestLoader", null);
    _defineProperty(_assertThisInitialized(_this), "_segmentLoader", null);
    _defineProperty(_assertThisInitialized(_this), "_playlist", null);
    _defineProperty(_assertThisInitialized(_this), "_bufferService", null);
    _defineProperty(_assertThisInitialized(_this), "_gapService", null);
    _defineProperty(_assertThisInitialized(_this), "_seiService", null);
    _defineProperty(_assertThisInitialized(_this), "_stats", null);
    _defineProperty(_assertThisInitialized(_this), "_prevSegSn", null);
    _defineProperty(_assertThisInitialized(_this), "_prevSegCc", null);
    _defineProperty(_assertThisInitialized(_this), "_tickTimer", null);
    _defineProperty(_assertThisInitialized(_this), "_tickInterval", 500);
    _defineProperty(_assertThisInitialized(_this), "_segmentProcessing", false);
    _defineProperty(_assertThisInitialized(_this), "_reloadOnPlay", false);
    _defineProperty(_assertThisInitialized(_this), "_switchUrlOpts", null);
    _defineProperty(_assertThisInitialized(_this), "_loadSegment", _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
      var nextSeg, bInfo, bufferThroughout;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1)
          switch (_context.prev = _context.next) {
            case 0:
              if (!(_this._segmentProcessing || !_this.media)) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              nextSeg = _this._playlist.nextSegment;
              if (nextSeg) {
                _context.next = 5;
                break;
              }
              return _context.abrupt("return");
            case 5:
              if (_this.isLive) {
                _context.next = 12;
                break;
              }
              bInfo = _this.bufferInfo();
              bufferThroughout = Math.abs(bInfo.end - _this.media.duration) < 0.1;
              if (!(bInfo.remaining >= _this.config.preloadTime || bufferThroughout)) {
                _context.next = 11;
                break;
              }
              if (bufferThroughout && _this._bufferService.msIsOpend) {
                _this._bufferService.endOfStream();
              }
              return _context.abrupt("return");
            case 11:
              if (!_this._urlSwitching && _this._prevSegSn !== nextSeg.sn - 1 && bInfo.end && Math.abs(nextSeg.start - bInfo.end) > 1) {
                _this._playlist.setNextSegmentByIndex(_this._playlist.findSegmentIndexByTime(bInfo.end + 0.1));
              }
            case 12:
              return _context.abrupt("return", _this._loadSegmentDirect());
            case 13:
            case "end":
              return _context.stop();
          }
      }, _callee);
    })));
    _defineProperty(_assertThisInitialized(_this), "_onPlay", _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              clearTimeout(_this._disconnectTimer);
              if (!_this._reloadOnPlay) {
                _context2.next = 6;
                break;
              }
              _this._reloadOnPlay = false;
              _this.replay(true);
              _context2.next = 9;
              break;
            case 6:
              _context2.next = 8;
              return _this._loadSegment();
            case 8:
              _this._startTick();
            case 9:
            case "end":
              return _context2.stop();
          }
      }, _callee2);
    })));
    _defineProperty(_assertThisInitialized(_this), "_onPause", function() {
      if (_this.isLive) {
        if (!_this._reloadOnPlay) {
          var disconnectTime = _this.config.disconnectTime;
          if (disconnectTime === null || disconnectTime === void 0)
            disconnectTime = _this._playlist.dvrWindow;
          if (!Number.isFinite(disconnectTime))
            return;
          clearTimeout(_this._disconnectTimer);
          _this._disconnectTimer = setTimeout(function() {
            _this._reloadOnPlay = true;
            _this._clear();
          }, disconnectTime || 0);
        }
      } else {
        _this._stopTick();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeking", _asyncToGenerator(_regeneratorRuntime().mark(function _callee3() {
      var seekTime, seekRange, newSeekTime, curSeg, info, segIndex, seg;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1)
          switch (_context3.prev = _context3.next) {
            case 0:
              if (_this.media) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              seekTime = _this.media.currentTime;
              seekRange = _this._playlist.seekRange;
              if (!seekRange) {
                _context3.next = 9;
                break;
              }
              newSeekTime = clamp(seekTime, seekRange[0], seekRange[1]);
              if (!(newSeekTime >= 0 && Math.abs(seekTime - newSeekTime) >= 0.1)) {
                _context3.next = 9;
                break;
              }
              _this.media.currentTime = newSeekTime;
              return _context3.abrupt("return");
            case 9:
              curSeg = _this._playlist.currentSegment;
              info = Buffer.info(Buffer.get(_this.media), seekTime, 0.1);
              if (!curSeg) {
                _context3.next = 14;
                break;
              }
              if (!(info.end && Math.abs(info.end - curSeg.end) < 0.2)) {
                _context3.next = 14;
                break;
              }
              return _context3.abrupt("return");
            case 14:
              segIndex = _this._playlist.findSegmentIndexByTime(seekTime);
              seg = _this._playlist.getSegmentByIndex(segIndex);
              if (!(segIndex === null || segIndex === void 0 || !seg || _this._segmentProcessing && seg === _this._playlist.nextSegment)) {
                _context3.next = 18;
                break;
              }
              return _context3.abrupt("return");
            case 18:
              logger3.debug("seek to", seekTime, seg);
              _this._playlist.setNextSegmentByIndex(segIndex);
              _this._stopTick();
              _context3.next = 23;
              return _this._segmentLoader.cancel();
            case 23:
              _this._segmentProcessing = false;
              if (!(!info.end || _this.isLive)) {
                _context3.next = 27;
                break;
              }
              _context3.next = 27;
              return _this._loadSegmentDirect();
            case 27:
              _this._startTick();
            case 28:
            case "end":
              return _context3.stop();
          }
      }, _callee3);
    })));
    _defineProperty(_assertThisInitialized(_this), "_onTimeupdate", function() {
      if (!_this.media)
        return;
      var cfg = _this.config;
      if (cfg.isLive && cfg.maxLatency && cfg.targetLatency && _this.media) {
        var liveEdge = _this._playlist.liveEdge;
        if (!liveEdge)
          return;
        var latency = liveEdge - _this.media.currentTime;
        if (latency >= cfg.maxLatency) {
          logger3.debug("latency jump, currentTime:".concat(_this.media.currentTime, ", liveEdge:").concat(liveEdge, ",  latency=").concat(latency));
          _this.media.currentTime = liveEdge - cfg.targetLatency;
        }
      }
      if (cfg.seiInTime) {
        var _this$_seiService;
        (_this$_seiService = _this._seiService) === null || _this$_seiService === void 0 ? void 0 : _this$_seiService.throw(_this.media.currentTime);
      }
      if (_this.config.allowedStreamTrackChange && !_this.config.softDecode) {
        _this._checkStreamTrackChange(_this.media.currentTime);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_tick", function() {
      if (!_this.media)
        return;
      _this._startTick();
      var media = _this.media;
      var buffered = Buffer.get(media);
      var segLoaderError = _this._segmentLoader.error;
      if (segLoaderError) {
        var bufferMaxHoleTolerance = 0.5;
        if (!media.readyState || _this.bufferInfo(bufferMaxHoleTolerance).remaining < 1) {
          segLoaderError.fatal = true;
          _this._emitError(StreamingError.network(segLoaderError));
        }
        return;
      }
      if (Buffer.end(buffered) < 0.1 || !media.readyState)
        return;
      if (isMediaPlaying(media)) {
        _this._loadSegment();
        if (_this._gapService) {
          _this._gapService.do(media, _this.config.maxJumpDistance, _this.isLive);
        }
      } else {
        if (media.readyState < 2 && _this._gapService) {
          _this._gapService.do(media, _this.config.maxJumpDistance, !media.currentTime ? true : _this.isLive);
        }
      }
    });
    _this.config = _cfg = getConfig(_cfg);
    _this.media = _this.config.media;
    _this._manifestLoader = new ManifestLoader(_assertThisInitialized(_this));
    _this._segmentLoader = new SegmentLoader(_assertThisInitialized(_this));
    _this._playlist = new Playlist(_assertThisInitialized(_this));
    _this._bufferService = new BufferService(_assertThisInitialized(_this));
    if (_cfg.seiInTime) {
      _this._seiService = new SeiService(_assertThisInitialized(_this));
    }
    if (!_cfg.softDecode)
      _this._gapService = new GapService();
    _this._stats = new MediaStatsService(_assertThisInitialized(_this), 9e4);
    _this.media.addEventListener("play", _this._onPlay);
    _this.media.addEventListener("pause", _this._onPause);
    _this.media.addEventListener("seeking", _this._onSeeking);
    _this.media.addEventListener("timeupdate", _this._onTimeupdate);
    return _this;
  }
  _createClass(Hls2, [{
    key: "isLive",
    get: function get() {
      return this._playlist.isLive;
    }
  }, {
    key: "streams",
    get: function get() {
      return this._playlist.streams;
    }
  }, {
    key: "currentStream",
    get: function get() {
      return this._playlist.currentStream;
    }
  }, {
    key: "hasSubtitle",
    get: function get() {
      return this._playlist.hasSubtitle;
    }
  }, {
    key: "baseDts",
    get: function get() {
      var _this$_bufferService;
      return (_this$_bufferService = this._bufferService) === null || _this$_bufferService === void 0 ? void 0 : _this$_bufferService.baseDts;
    }
  }, {
    key: "speedInfo",
    value: function speedInfo() {
      return this._segmentLoader.speedInfo();
    }
  }, {
    key: "bufferInfo",
    value: function bufferInfo() {
      var _this$media;
      var maxHole = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
      return Buffer.info(Buffer.get(this.media), (_this$media = this.media) === null || _this$media === void 0 ? void 0 : _this$media.currentTime, maxHole);
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this._stats.getStats();
    }
  }, {
    key: "playbackQuality",
    value: function playbackQuality() {
      return getVideoPlaybackQuality(this.media);
    }
  }, {
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4(url) {
        var reuseMse, _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                reuseMse = _args4.length > 1 && _args4[1] !== void 0 ? _args4[1] : false;
                if (url)
                  this.config.url = url;
                url = this.config.url;
                _context4.next = 5;
                return this._reset(reuseMse);
              case 5:
                _context4.next = 7;
                return this._loadData(url);
              case 7:
                this._startTick();
              case 8:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "_loadData",
    value: function() {
      var _loadData2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(url) {
        var manifest, currentStream, _this$_switchUrlOpts, _this$_switchUrlOpts2, switchTimePoint, segIdx, nextSeg, bufferClearStartPoint, startTime, _this$_switchUrlOpts3;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                try {
                  if (url)
                    url = url.trim();
                } catch (e) {
                }
                if (url) {
                  _context5.next = 3;
                  break;
                }
                throw this._emitError(new StreamingError(ERR.OTHER, ERR.SUB_TYPES.OPTION, null, null, "m3u8 url is missing"));
              case 3:
                _context5.next = 5;
                return this._loadM3U8(url, this.config.manifest);
              case 5:
                manifest = _context5.sent;
                currentStream = this._playlist.currentStream;
                if (!this._urlSwitching) {
                  _context5.next = 17;
                  break;
                }
                if (currentStream.bitrate === 0 && (_this$_switchUrlOpts = this._switchUrlOpts) !== null && _this$_switchUrlOpts !== void 0 && _this$_switchUrlOpts.bitrate) {
                  currentStream.bitrate = (_this$_switchUrlOpts2 = this._switchUrlOpts) === null || _this$_switchUrlOpts2 === void 0 ? void 0 : _this$_switchUrlOpts2.bitrate;
                }
                switchTimePoint = this._getSeamlessSwitchPoint();
                this.config.startTime = switchTimePoint;
                segIdx = this._playlist.findSegmentIndexByTime(switchTimePoint);
                nextSeg = this._playlist.getSegmentByIndex(segIdx + 1);
                if (!nextSeg) {
                  _context5.next = 17;
                  break;
                }
                bufferClearStartPoint = nextSeg.start;
                _context5.next = 17;
                return this._bufferService.removeBuffer(bufferClearStartPoint);
              case 17:
                if (!manifest) {
                  _context5.next = 29;
                  break;
                }
                if (!this.isLive) {
                  _context5.next = 25;
                  break;
                }
                this._bufferService.setLiveSeekableRange(0, 4294967295);
                logger3.log("totalDuration first time got", this._playlist.totalDuration);
                if (this.config.targetLatency < this._playlist.totalDuration) {
                  this.config.targetLatency = this._playlist.totalDuration;
                  this.config.maxLatency = 1.5 * this.config.targetLatency;
                }
                if (!manifest.isMaster)
                  this._pollM3U8(url);
                _context5.next = 29;
                break;
              case 25:
                _context5.next = 27;
                return this._bufferService.updateDuration(currentStream.totalDuration);
              case 27:
                startTime = this.config.startTime;
                if (startTime) {
                  if (!((_this$_switchUrlOpts3 = this._switchUrlOpts) !== null && _this$_switchUrlOpts3 !== void 0 && _this$_switchUrlOpts3.seamless)) {
                    this.media.currentTime = startTime;
                  }
                  this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(startTime) || 0);
                }
              case 29:
                _context5.next = 31;
                return this._loadSegment();
              case 31:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this);
      }));
      function _loadData(_x2) {
        return _loadData2.apply(this, arguments);
      }
      return _loadData;
    }()
  }, {
    key: "replay",
    value: function() {
      var _replay = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6(isPlayEmit) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                this.config.startTime = 0;
                _context6.next = 3;
                return this.load();
              case 3:
                this._reloadOnPlay = false;
                return _context6.abrupt("return", this.media.play(!isPlayEmit));
              case 5:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function replay(_x3) {
        return _replay.apply(this, arguments);
      }
      return replay;
    }()
  }, {
    key: "switchURL",
    value: function() {
      var _switchURL = _asyncToGenerator(_regeneratorRuntime().mark(function _callee7(url) {
        var options, defaultOpts, key, _options, seamless, startTime, appended, _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                options = _args7.length > 1 && _args7[1] !== void 0 ? _args7[1] : {};
                defaultOpts = {
                  seamless: false,
                  startTime: 0,
                  bitrate: 0
                };
                _context7.t0 = _typeof(options);
                _context7.next = _context7.t0 === "number" ? 5 : _context7.t0 === "boolean" ? 7 : _context7.t0 === "object" ? 9 : 11;
                break;
              case 5:
                options = {
                  startTime: options
                };
                return _context7.abrupt("break", 12);
              case 7:
                options = {
                  seamless: options
                };
                return _context7.abrupt("break", 12);
              case 9:
                for (key in options) {
                  if (options[key] === void 0 || options[key] === null) {
                    delete options[key];
                  }
                }
                return _context7.abrupt("break", 12);
              case 11:
                throw "unsupported switchURL args: ".concat(options);
              case 12:
                options = Object.assign({}, defaultOpts, options);
                _options = options, seamless = _options.seamless, startTime = _options.startTime;
                this.config.url = url;
                this.config.startTime = startTime;
                this._switchUrlOpts = options;
                if (seamless) {
                  _context7.next = 38;
                  break;
                }
                _context7.prev = 18;
                if (!this.config.softDecode) {
                  _context7.next = 23;
                  break;
                }
                _context7.t1 = this.load(url);
                _context7.next = 26;
                break;
              case 23:
                _context7.next = 25;
                return this.load(url);
              case 25:
                _context7.t1 = _context7.sent;
              case 26:
                appended = _context7.t1;
                _context7.next = 33;
                break;
              case 29:
                _context7.prev = 29;
                _context7.t2 = _context7["catch"](18);
                this.emit(Event.SWITCH_URL_FAILED, _context7.t2);
                throw _context7.t2;
              case 33:
                this._reloadOnPlay = false;
                if (appended) {
                  this.emit(Event.SWITCH_URL_SUCCESS, {
                    url
                  });
                }
                return _context7.abrupt("return", this.media.play(true));
              case 38:
                this._urlSwitching = true;
                this._prevSegSn = null;
                this._prevSegCc = null;
                this._playlist.reset();
                this._bufferService.seamlessSwitch();
                _context7.next = 45;
                return this._clear();
              case 45:
                _context7.next = 47;
                return this._loadData(url);
              case 47:
                this._startTick();
              case 48:
                this._switchUrlOpts = null;
              case 49:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this, [[18, 29]]);
      }));
      function switchURL(_x4) {
        return _switchURL.apply(this, arguments);
      }
      return switchURL;
    }()
  }, {
    key: "switchStream",
    value: function() {
      var _switchStream = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8(id) {
        var force, curStream, streams, toSwitch, curId, _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch (_context8.prev = _context8.next) {
              case 0:
                force = _args8.length > 1 && _args8[1] !== void 0 ? _args8[1] : true;
                curStream = this.currentStream;
                streams = this.streams;
                if (!(!curStream || curStream.id === id || !streams || streams.length < 2)) {
                  _context8.next = 5;
                  break;
                }
                return _context8.abrupt("return");
              case 5:
                toSwitch = streams.find(function(x) {
                  return x.id === id;
                });
                if (toSwitch) {
                  _context8.next = 8;
                  break;
                }
                return _context8.abrupt("return");
              case 8:
                _context8.prev = 8;
                _context8.next = 11;
                return this._clear();
              case 11:
                if (!force) {
                  _context8.next = 14;
                  break;
                }
                _context8.next = 14;
                return this._bufferService.clearAllBuffer();
              case 14:
                _context8.next = 19;
                break;
              case 16:
                _context8.prev = 16;
                _context8.t0 = _context8["catch"](8);
                throw this._emitError(StreamingError.create(_context8.t0));
              case 19:
                if (curStream.currentAudioStream && toSwitch.audioStreams.length > 2) {
                  curId = curStream.currentAudioStream.id;
                  toSwitch.currentAudioStream = toSwitch.audioStreams.find(function(x) {
                    return x.id === curId;
                  }) || toSwitch.currentAudioStream;
                }
                this._playlist.currentStream = toSwitch;
                _context8.prev = 21;
                if (!(this.isLive || !toSwitch.segments.length)) {
                  _context8.next = 25;
                  break;
                }
                _context8.next = 25;
                return this._refreshM3U8();
              case 25:
                this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(this.media.currentTime) || 0);
                this._prevSegCc = null;
                _context8.next = 29;
                return this._loadSegmentDirect();
              case 29:
                _context8.next = 35;
                break;
              case 31:
                _context8.prev = 31;
                _context8.t1 = _context8["catch"](21);
                this._playlist.currentStream = curStream;
                throw _context8.t1;
              case 35:
                this._startTick();
                return _context8.abrupt("return", toSwitch);
              case 37:
              case "end":
                return _context8.stop();
            }
        }, _callee8, this, [[8, 16], [21, 31]]);
      }));
      function switchStream(_x5) {
        return _switchStream.apply(this, arguments);
      }
      return switchStream;
    }()
  }, {
    key: "switchAudioStream",
    value: function() {
      var _switchAudioStream = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9(id) {
        var force, curStream, audioStream, toSwitch, _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1)
            switch (_context9.prev = _context9.next) {
              case 0:
                force = _args9.length > 1 && _args9[1] !== void 0 ? _args9[1] : true;
                curStream = this.currentStream;
                if (curStream) {
                  _context9.next = 4;
                  break;
                }
                return _context9.abrupt("return");
              case 4:
                audioStream = curStream.currentAudioStream;
                if (!(!audioStream || audioStream.id === id || curStream.audioStreams.length < 2)) {
                  _context9.next = 7;
                  break;
                }
                return _context9.abrupt("return");
              case 7:
                toSwitch = curStream.audioStreams.find(function(x) {
                  return x.id === id;
                });
                if (toSwitch) {
                  _context9.next = 10;
                  break;
                }
                return _context9.abrupt("return");
              case 10:
                _context9.prev = 10;
                _context9.next = 13;
                return this._clear();
              case 13:
                if (!force) {
                  _context9.next = 16;
                  break;
                }
                _context9.next = 16;
                return this._bufferService.clearAllBuffer();
              case 16:
                _context9.next = 21;
                break;
              case 18:
                _context9.prev = 18;
                _context9.t0 = _context9["catch"](10);
                throw this._emitError(StreamingError.create(_context9.t0));
              case 21:
                curStream.currentAudioStream = toSwitch;
                _context9.prev = 22;
                if (!(this.isLive || !toSwitch.segments.length)) {
                  _context9.next = 26;
                  break;
                }
                _context9.next = 26;
                return this._refreshM3U8();
              case 26:
                this._playlist.setNextSegmentByIndex(this._playlist.findSegmentIndexByTime(this.media.currentTime) || 0);
                this._prevSegCc = null;
                _context9.next = 30;
                return this._loadSegmentDirect();
              case 30:
                _context9.next = 36;
                break;
              case 32:
                _context9.prev = 32;
                _context9.t1 = _context9["catch"](22);
                curStream.currentAudioStream = audioStream;
                throw _context9.t1;
              case 36:
                this._startTick();
                return _context9.abrupt("return", toSwitch);
              case 38:
              case "end":
                return _context9.stop();
            }
        }, _callee9, this, [[10, 18], [22, 32]]);
      }));
      function switchAudioStream(_x6) {
        return _switchAudioStream.apply(this, arguments);
      }
      return switchAudioStream;
    }()
  }, {
    key: "switchSubtitleStream",
    value: function() {
      var _switchSubtitleStream = _asyncToGenerator(_regeneratorRuntime().mark(function _callee10(lang) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1)
            switch (_context10.prev = _context10.next) {
              case 0:
                this._playlist.switchSubtitle(lang);
                _context10.next = 3;
                return this._manifestLoader.stopPoll();
              case 3:
                _context10.next = 5;
                return this._refreshM3U8();
              case 5:
              case "end":
                return _context10.stop();
            }
        }, _callee10, this);
      }));
      function switchSubtitleStream(_x7) {
        return _switchSubtitleStream.apply(this, arguments);
      }
      return switchSubtitleStream;
    }()
  }, {
    key: "destroy",
    value: function() {
      var _destroy = _asyncToGenerator(_regeneratorRuntime().mark(function _callee11() {
        var _this$_seiService2;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1)
            switch (_context11.prev = _context11.next) {
              case 0:
                if (this.media) {
                  _context11.next = 2;
                  break;
                }
                return _context11.abrupt("return");
              case 2:
                this.removeAllListeners();
                this._playlist.reset();
                this._segmentLoader.reset();
                (_this$_seiService2 = this._seiService) === null || _this$_seiService2 === void 0 ? void 0 : _this$_seiService2.reset();
                this.media.removeEventListener("play", this._onPlay);
                this.media.removeEventListener("pause", this._onPause);
                this.media.removeEventListener("seeking", this._onSeeking);
                this.media.removeEventListener("timeupdate", this._onTimeupdate);
                _context11.next = 12;
                return Promise.all([this._clear(), this._bufferService.destroy()]);
              case 12:
                this.media = null;
              case 13:
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
    key: "_loadM3U8",
    value: function() {
      var _loadM3U = _asyncToGenerator(_regeneratorRuntime().mark(function _callee12(url, manifest) {
        var playlist, _ref4, _ref5, _this$_playlist$curre;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1)
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                if (!manifest) {
                  _context12.next = 5;
                  break;
                }
                _context12.t0 = this._manifestLoader.parseText(manifest, url);
                _context12.next = 8;
                break;
              case 5:
                _context12.next = 7;
                return this._manifestLoader.load(url);
              case 7:
                _context12.t0 = _context12.sent;
              case 8:
                _ref4 = _context12.t0;
                _ref5 = _slicedToArray(_ref4, 1);
                playlist = _ref5[0];
                _context12.next = 16;
                break;
              case 13:
                _context12.prev = 13;
                _context12.t1 = _context12["catch"](0);
                throw this._emitError(StreamingError.create(_context12.t1));
              case 16:
                if (playlist) {
                  _context12.next = 18;
                  break;
                }
                return _context12.abrupt("return");
              case 18:
                this._playlist.upsertPlaylist(playlist);
                if (!playlist.isMaster) {
                  _context12.next = 23;
                  break;
                }
                if ((_this$_playlist$curre = this._playlist.currentStream.subtitleStreams) !== null && _this$_playlist$curre !== void 0 && _this$_playlist$curre.length) {
                  this.emit(Event.SUBTITLE_PLAYLIST, {
                    list: this._playlist.currentStream.subtitleStreams
                  });
                }
                _context12.next = 23;
                return this._refreshM3U8();
              case 23:
                this.emit(Event.STREAM_PARSED);
                return _context12.abrupt("return", playlist);
              case 25:
              case "end":
                return _context12.stop();
            }
        }, _callee12, this, [[0, 13]]);
      }));
      function _loadM3U8(_x8, _x9) {
        return _loadM3U.apply(this, arguments);
      }
      return _loadM3U8;
    }()
  }, {
    key: "_refreshM3U8",
    value: function _refreshM3U8() {
      var _stream$currentAudioS, _stream$currentSubtit, _this2 = this;
      var stream = this._playlist.currentStream;
      if (!stream || !stream.url)
        throw this._emitError(StreamingError.create(null, null, new Error("m3u8 url is not defined")));
      var url = stream.url;
      var audioUrl = (_stream$currentAudioS = stream.currentAudioStream) === null || _stream$currentAudioS === void 0 ? void 0 : _stream$currentAudioS.url;
      var subtitleUrl = (_stream$currentSubtit = stream.currentSubtitleStream) === null || _stream$currentSubtit === void 0 ? void 0 : _stream$currentSubtit.url;
      return this._manifestLoader.load(url, audioUrl, subtitleUrl).then(function(_ref6) {
        var _ref7 = _slicedToArray(_ref6, 3), mediaPlaylist = _ref7[0], audioPlaylist = _ref7[1], subtitlePlaylist = _ref7[2];
        if (!mediaPlaylist)
          return;
        _this2._playlist.upsertPlaylist(mediaPlaylist, audioPlaylist, subtitlePlaylist);
        if (!_this2.isLive)
          return;
        _this2._pollM3U8(url, audioUrl, subtitleUrl);
      }).catch(function(err) {
        throw _this2._emitError(StreamingError.create(err));
      });
    }
  }, {
    key: "_pollM3U8",
    value: function _pollM3U8(url, audioUrl, subtitleUrl) {
      var _this3 = this, _this$_playlist$lastS;
      var isEmpty = this._playlist.isEmpty;
      this._manifestLoader.poll(
        url,
        audioUrl,
        subtitleUrl,
        function(p1, p2, p3) {
          _this3._playlist.upsertPlaylist(p1, p2, p3);
          _this3._playlist.clearOldSegment();
          if (p1 && isEmpty && !_this3._playlist.isEmpty) {
            _this3._loadSegment();
          }
          if (isEmpty)
            isEmpty = _this3._playlist.isEmpty;
        },
        function(err) {
          _this3._emitError(StreamingError.create(err));
        },
        (((_this$_playlist$lastS = this._playlist.lastSegment) === null || _this$_playlist$lastS === void 0 ? void 0 : _this$_playlist$lastS.duration) || 0) * 1e3
      );
    }
  }, {
    key: "_loadSegmentDirect",
    value: function() {
      var _loadSegmentDirect2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee13() {
        var seg, appended, cachedError;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1)
            switch (_context13.prev = _context13.next) {
              case 0:
                seg = this._playlist.nextSegment;
                if (seg) {
                  _context13.next = 3;
                  break;
                }
                return _context13.abrupt("return");
              case 3:
                appended = false;
                cachedError = null;
                _context13.prev = 5;
                this._segmentProcessing = true;
                _context13.next = 9;
                return this._reqAndBufferSegment(seg, this._playlist.getAudioSegment(seg));
              case 9:
                appended = _context13.sent;
                _context13.next = 15;
                break;
              case 12:
                _context13.prev = 12;
                _context13.t0 = _context13["catch"](5);
                cachedError = _context13.t0;
              case 15:
                _context13.prev = 15;
                this._segmentProcessing = false;
                return _context13.finish(15);
              case 18:
                if (!cachedError) {
                  _context13.next = 20;
                  break;
                }
                return _context13.abrupt("return", this._emitError(StreamingError.create(cachedError)));
              case 20:
                if (appended) {
                  if (this._urlSwitching) {
                    this._urlSwitching = false;
                    this.emit(Event.SWITCH_URL_SUCCESS, {
                      url: this.config.url
                    });
                  }
                  this._playlist.moveSegmentPointer();
                  if (seg.isLast) {
                    this._end();
                  } else {
                    this._loadSegment();
                  }
                }
                return _context13.abrupt("return", appended);
              case 22:
              case "end":
                return _context13.stop();
            }
        }, _callee13, this, [[5, 12, 15, 18]]);
      }));
      function _loadSegmentDirect() {
        return _loadSegmentDirect2.apply(this, arguments);
      }
      return _loadSegmentDirect;
    }()
  }, {
    key: "_reqAndBufferSegment",
    value: function() {
      var _reqAndBufferSegment2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee14(seg, audioSeg) {
        var _this$_bufferService2;
        var cc, discontinuity, responses, data, sn, start, stream, before;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1)
            switch (_context14.prev = _context14.next) {
              case 0:
                cc = seg ? seg.cc : audioSeg.cc;
                discontinuity = this._prevSegCc !== cc;
                responses = [];
                _context14.prev = 3;
                _context14.next = 6;
                return this._segmentLoader.load(seg, audioSeg, discontinuity);
              case 6:
                responses = _context14.sent;
                _context14.next = 14;
                break;
              case 9:
                _context14.prev = 9;
                _context14.t0 = _context14["catch"](3);
                _context14.t0.fatal = false;
                this._segmentLoader.error = _context14.t0;
                throw _context14.t0;
              case 14:
                if (responses[0]) {
                  _context14.next = 16;
                  break;
                }
                return _context14.abrupt("return");
              case 16:
                _context14.next = 18;
                return (_this$_bufferService2 = this._bufferService).decryptBuffer.apply(_this$_bufferService2, _toConsumableArray(responses));
              case 18:
                data = _context14.sent;
                if (data) {
                  _context14.next = 21;
                  break;
                }
                return _context14.abrupt("return");
              case 21:
                sn = seg ? seg.sn : audioSeg.sn;
                start = seg ? seg.start : audioSeg.start;
                stream = this._playlist.currentStream;
                this._bufferService.createSource(data[0], data[1], stream === null || stream === void 0 ? void 0 : stream.videoCodec, stream === null || stream === void 0 ? void 0 : stream.audioCodec);
                before = Date.now();
                _context14.next = 28;
                return this._bufferService.appendBuffer(seg, audioSeg, data[0], data[1], discontinuity, this._prevSegSn === sn - 1, start);
              case 28:
                this.emit(Event.APPEND_COST, {
                  elapsed: Date.now() - before,
                  url: seg.url
                });
                _context14.next = 31;
                return this._bufferService.evictBuffer(this.config.bufferBehind);
              case 31:
                this._prevSegCc = cc;
                this._prevSegSn = sn;
                return _context14.abrupt("return", true);
              case 34:
              case "end":
                return _context14.stop();
            }
        }, _callee14, this, [[3, 9]]);
      }));
      function _reqAndBufferSegment(_x10, _x11) {
        return _reqAndBufferSegment2.apply(this, arguments);
      }
      return _reqAndBufferSegment;
    }()
  }, {
    key: "_checkStreamTrackChange",
    value: function _checkStreamTrackChange(time) {
      var changedSeg = this._playlist.checkSegmentTrackChange(time, this._bufferService.nbSb);
      if (!changedSeg)
        return;
      this.switchURL(this.config.url, changedSeg.start + 0.2);
    }
  }, {
    key: "_clear",
    value: function() {
      var _clear2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1)
            switch (_context15.prev = _context15.next) {
              case 0:
                clearTimeout(this._disconnectTimer);
                this._stopTick();
                _context15.next = 4;
                return Promise.all([this._segmentLoader.cancel(), this._manifestLoader.stopPoll()]);
              case 4:
                this._segmentProcessing = false;
              case 5:
              case "end":
                return _context15.stop();
            }
        }, _callee15, this);
      }));
      function _clear() {
        return _clear2.apply(this, arguments);
      }
      return _clear;
    }()
  }, {
    key: "_reset",
    value: function() {
      var _reset2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee16() {
        var _this$_seiService3;
        var reuseMse, _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1)
            switch (_context16.prev = _context16.next) {
              case 0:
                reuseMse = _args16.length > 0 && _args16[0] !== void 0 ? _args16[0] : false;
                this._reloadOnPlay = false;
                this._prevSegSn = null;
                this._prevSegCc = null;
                this._switchUrlOpts = null;
                this._playlist.reset();
                this._segmentLoader.reset();
                (_this$_seiService3 = this._seiService) === null || _this$_seiService3 === void 0 ? void 0 : _this$_seiService3.reset();
                this._stats.reset();
                _context16.next = 11;
                return this._clear();
              case 11:
                return _context16.abrupt("return", this._bufferService.reset(reuseMse));
              case 12:
              case "end":
                return _context16.stop();
            }
        }, _callee16, this);
      }));
      function _reset() {
        return _reset2.apply(this, arguments);
      }
      return _reset;
    }()
  }, {
    key: "_end",
    value: function _end() {
      this._clear();
      this._bufferService.endOfStream();
      if (this.media.readyState <= 2) {
        this._startTick();
      }
    }
  }, {
    key: "_stopTick",
    value: function _stopTick() {
      if (this._tickTimer) {
        clearTimeout(this._tickTimer);
      }
      this._tickTimer = null;
    }
  }, {
    key: "_startTick",
    value: function _startTick() {
      this._stopTick();
      this._tickTimer = setTimeout(this._tick, this._tickInterval);
    }
  }, {
    key: "_emitError",
    value: function _emitError(error) {
      var _error$originError;
      var endOfStream = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      if (((_error$originError = error.originError) === null || _error$originError === void 0 ? void 0 : _error$originError.fatal) === false) {
        logger3.warn(error);
      } else {
        var _this$media2, _this$media3, _this$_seiService4;
        logger3.table(error);
        logger3.error(error);
        logger3.error((_this$media2 = this.media) === null || _this$media2 === void 0 ? void 0 : _this$media2.error);
        if ((_this$media3 = this.media) !== null && _this$media3 !== void 0 && _this$media3.readyState) {
          this.media.pause();
        }
        this._stopTick();
        if (this._urlSwitching) {
          this._urlSwitching = false;
          this.emit(Event.SWITCH_URL_FAILED, error);
        }
        this.emit(Event.ERROR, error);
        if (endOfStream)
          this._end();
        (_this$_seiService4 = this._seiService) === null || _this$_seiService4 === void 0 ? void 0 : _this$_seiService4.reset();
      }
      return error;
    }
  }, {
    key: "_getSeamlessSwitchPoint",
    value: function _getSeamlessSwitchPoint() {
      var media = this.media;
      var nextLoadPoint = media.currentTime;
      if (!media.paused) {
        var _this$_stats;
        var segIdx = this._playlist.findSegmentIndexByTime(media.currentTime);
        var curSeg = this._playlist.getSegmentByIndex(segIdx);
        var latestKbps = (_this$_stats = this._stats) === null || _this$_stats === void 0 ? void 0 : _this$_stats.getStats().downloadSpeed;
        if (latestKbps && curSeg) {
          var delay = curSeg.duration * this._playlist.currentStream.bitrate / latestKbps + 1;
          nextLoadPoint += delay;
        } else {
          nextLoadPoint += 5;
        }
      }
      return nextLoadPoint;
    }
  }], [{
    key: "isSupported",
    value: function isSupported(mediaType) {
      if (!mediaType || mediaType === "video" || mediaType === "audio") {
        return MSE.isSupported();
      }
      return typeof WebAssembly !== "undefined";
    }
  }, {
    key: "enableLogger",
    value: function enableLogger() {
      Logger.enable();
      Logger2.enable();
    }
  }, {
    key: "disableLogger",
    value: function disableLogger() {
      Logger.disable();
      Logger2.disable();
    }
  }]);
  return Hls2;
}(import_eventemitter3.default);
_defineProperty(Hls, "version", "3.0.7");
try {
  if (localStorage.getItem("xgd")) {
    Hls.enableLogger();
  } else {
    Hls.disableLogger();
  }
} catch (error) {
}

// node_modules/xgplayer-hls/es/plugin-extension.js
var PluginExtension = function() {
  function PluginExtension2(opts, plugin) {
    var _this = this;
    _classCallCheck(this, PluginExtension2);
    _defineProperty(this, "_opts", null);
    _defineProperty(this, "_plugin", null);
    _defineProperty(this, "_onLowDecode", function() {
      var _this$_plugin, _this$_plugin$player, _this$_plugin2, _this$_plugin2$player;
      var _this$_opts = _this._opts, media = _this$_opts.media, innerDegrade = _this$_opts.innerDegrade;
      (_this$_plugin = _this._plugin) === null || _this$_plugin === void 0 ? void 0 : (_this$_plugin$player = _this$_plugin.player) === null || _this$_plugin$player === void 0 ? void 0 : _this$_plugin$player.emit("lowdecode", media.degradeInfo);
      (_this$_plugin2 = _this._plugin) === null || _this$_plugin2 === void 0 ? void 0 : (_this$_plugin2$player = _this$_plugin2.player) === null || _this$_plugin2$player === void 0 ? void 0 : _this$_plugin2$player.emit("core_event", _objectSpread2(_objectSpread2({}, media.degradeInfo), {}, {
        eventName: Event.LOWDECODE
      }));
      if (innerDegrade === 1) {
        _this._degrade(media.src);
      }
    });
    _defineProperty(this, "_degrade", function(url) {
      var player = _this._plugin.player;
      var originVideo = player.video;
      if (originVideo && originVideo.TAG !== "MVideo")
        return;
      var newVideo = player.video.degradeVideo;
      player.video = newVideo;
      originVideo.degrade(url);
      if (url) {
        player.config.url = url;
      }
      var firstChild = player.root.firstChild;
      if (firstChild.TAG === "MVideo") {
        player.root.replaceChild(newVideo, firstChild);
      }
      var hlsPlugin = _this._plugin.constructor.pluginName.toLowerCase();
      player.unRegisterPlugin(hlsPlugin);
      player.once("canplay", function() {
        player.play();
      });
    });
    _defineProperty(this, "forceDegradeToVideo", function(url) {
      var innerDegrade = _this._opts.innerDegrade;
      if (innerDegrade === 1) {
        _this._degrade(url);
      }
    });
    this._opts = opts;
    this._plugin = plugin;
    this._init();
  }
  _createClass(PluginExtension2, [{
    key: "_init",
    value: function _init() {
      var _this$_opts2 = this._opts, media = _this$_opts2.media, preloadTime = _this$_opts2.preloadTime, innerDegrade = _this$_opts2.innerDegrade, isLive = _this$_opts2.isLive;
      if (!media)
        return;
      if (!isLive && media.setPlayMode) {
        media.setPlayMode("VOD");
        return;
      }
      if (innerDegrade) {
        media.setAttribute("innerdegrade", innerDegrade);
      }
      if (preloadTime) {
        media.setAttribute("preloadtime", preloadTime);
      }
      this._bindEvents();
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var media = this._opts.media;
      media.addEventListener("lowdecode", this._onLowDecode);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$_opts3, _this$_opts3$media;
      (_this$_opts3 = this._opts) === null || _this$_opts3 === void 0 ? void 0 : (_this$_opts3$media = _this$_opts3.media) === null || _this$_opts3$media === void 0 ? void 0 : _this$_opts3$media.removeEventListener("lowdecode", this._onLowDecode);
      this._plugin = null;
    }
  }]);
  return PluginExtension2;
}();

// node_modules/xgplayer-hls/es/plugin.js
function parseSwitchUrlArgs(args, plugin) {
  var player = plugin.player;
  var curTime = player.currentTime;
  var options = {
    startTime: curTime
  };
  switch (_typeof(args)) {
    case "boolean":
      options.seamless = args;
      break;
    case "object":
      Object.assign(options, args);
      break;
  }
  return options;
}
var HlsPlugin = function(_BasePlugin) {
  _inherits(HlsPlugin2, _BasePlugin);
  var _super = _createSuper(HlsPlugin2);
  function HlsPlugin2() {
    var _this;
    _classCallCheck(this, HlsPlugin2);
    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(_args));
    _defineProperty(_assertThisInitialized(_this), "hls", null);
    _defineProperty(_assertThisInitialized(_this), "pluginExtension", null);
    _defineProperty(_assertThisInitialized(_this), "getStats", function() {
      var _this$hls;
      return (_this$hls = _this.hls) === null || _this$hls === void 0 ? void 0 : _this$hls.getStats();
    });
    _defineProperty(_assertThisInitialized(_this), "_onSwitchSubtitle", function(_ref) {
      var _this$hls2;
      var lang = _ref.lang;
      (_this$hls2 = _this.hls) === null || _this$hls2 === void 0 ? void 0 : _this$hls2.switchSubtitleStream(lang);
    });
    _defineProperty(_assertThisInitialized(_this), "_onSwitchURL", function(url, args) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player, hls = _assertThisInitialize.hls;
      if (hls) {
        var _this$player$config, _this$player$config$h;
        var options = parseSwitchUrlArgs(args, _assertThisInitialized(_this));
        player.config.url = url;
        hls.switchURL(url, options).catch(function(e) {
        });
        if (!options.seamless && (_this$player$config = _this.player.config) !== null && _this$player$config !== void 0 && (_this$player$config$h = _this$player$config.hls) !== null && _this$player$config$h !== void 0 && _this$player$config$h.keepStatusAfterSwitch) {
          _this._keepPauseStatus();
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_keepPauseStatus", function() {
      var paused = _this.player.paused;
      if (!paused)
        return;
      _this.player.once("canplay", function() {
        _this.player.pause();
      });
    });
    return _this;
  }
  _createClass(HlsPlugin2, [{
    key: "core",
    get: function get() {
      return this.hls;
    }
  }, {
    key: "version",
    get: function get() {
      var _this$hls3;
      return (_this$hls3 = this.hls) === null || _this$hls3 === void 0 ? void 0 : _this$hls3.version;
    }
  }, {
    key: "softDecode",
    get: function get() {
      var _this$player, _this$player$config2;
      var mediaType = (_this$player = this.player) === null || _this$player === void 0 ? void 0 : (_this$player$config2 = _this$player.config) === null || _this$player$config2 === void 0 ? void 0 : _this$player$config2.mediaType;
      return !!mediaType && mediaType !== "video" && mediaType !== "audio";
    }
  }, {
    key: "beforePlayerInit",
    value: function beforePlayerInit() {
      var _this2 = this;
      var config = this.player.config;
      if (!config.url && !config.__allowHlsEmptyUrl__) {
        return;
      }
      if (this.hls)
        this.hls.destroy();
      this.player.switchURL = this._onSwitchURL;
      var hlsOpts = config.hls || {};
      hlsOpts.innerDegrade = hlsOpts.innerDegrade || config.innerDegrade;
      if (hlsOpts.disconnectTime === null || hlsOpts.disconnectTime === void 0)
        hlsOpts.disconnectTime = 0;
      this.hls = new Hls(_objectSpread2({
        softDecode: this.softDecode,
        isLive: config.isLive,
        media: this.player.media || this.player.video,
        startTime: config.startTime,
        url: config.url
      }, hlsOpts));
      if (!this.softDecode) {
        BasePlugin.defineGetterOrSetter(this.player, {
          url: {
            get: function get() {
              var _this2$hls, _this2$hls$media;
              return (_this2$hls = _this2.hls) === null || _this2$hls === void 0 ? void 0 : (_this2$hls$media = _this2$hls.media) === null || _this2$hls$media === void 0 ? void 0 : _this2$hls$media.src;
            },
            configurable: true
          }
        });
      }
      if (this.softDecode) {
        this.pluginExtension = new PluginExtension(_objectSpread2({
          isLive: config.isLive,
          media: this.player.video
        }, hlsOpts), this);
        this.player.forceDegradeToVideo = function() {
          var _this2$pluginExtensio;
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return (_this2$pluginExtensio = _this2.pluginExtension) === null || _this2$pluginExtensio === void 0 ? void 0 : _this2$pluginExtensio.forceDegradeToVideo.apply(_this2$pluginExtensio, args);
        };
      }
      if (config.isLive) {
        var _this$player2;
        (_this$player2 = this.player) === null || _this$player2 === void 0 ? void 0 : _this$player2.useHooks("replay", function() {
          var _this2$hls2;
          return (_this2$hls2 = _this2.hls) === null || _this2$hls2 === void 0 ? void 0 : _this2$hls2.replay();
        });
      }
      this.on(events_exports.SWITCH_SUBTITLE || "switch_subtitle", this._onSwitchSubtitle);
      this.on(events_exports.URL_CHANGE, this._onSwitchURL);
      this.on(events_exports.DESTROY, this.destroy.bind(this));
      this._transError();
      this._transCoreEvent(EVENT.TTFB);
      this._transCoreEvent(EVENT.LOAD_START);
      this._transCoreEvent(EVENT.LOAD_RESPONSE_HEADERS);
      this._transCoreEvent(EVENT.LOAD_COMPLETE);
      this._transCoreEvent(EVENT.LOAD_RETRY);
      this._transCoreEvent(EVENT.SOURCEBUFFER_CREATED);
      this._transCoreEvent(EVENT.REMOVE_BUFFER);
      this._transCoreEvent(EVENT.BUFFEREOS);
      this._transCoreEvent(EVENT.KEYFRAME);
      this._transCoreEvent(EVENT.METADATA_PARSED);
      this._transCoreEvent(EVENT.DEMUXED_TRACK);
      this._transCoreEvent(EVENT.SEI);
      this._transCoreEvent(EVENT.SEI_IN_TIME);
      this._transCoreEvent(EVENT.SPEED);
      this._transCoreEvent(EVENT.HLS_MANIFEST_LOADED);
      this._transCoreEvent(EVENT.HLS_LEVEL_LOADED);
      this._transCoreEvent(EVENT.STREAM_EXCEPTION);
      this._transCoreEvent(EVENT.SWITCH_URL_SUCCESS);
      this._transCoreEvent(EVENT.SWITCH_URL_FAILED);
      this._transCoreEvent(Event.NO_AUDIO_TRACK);
      this._transCoreEvent(Event.STREAM_PARSED);
      this._transCoreEvent(Event.SUBTITLE_SEGMENTS);
      this._transCoreEvent(Event.SUBTITLE_PLAYLIST);
      this._transCoreEvent(Event.APPEND_COST);
      if (config.url) {
        this.hls.load(config.url, true).catch(function(e) {
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this$pluginExtension;
      if (this.hls) {
        this.hls.destroy();
        this.hls = null;
      }
      (_this$pluginExtension = this.pluginExtension) === null || _this$pluginExtension === void 0 ? void 0 : _this$pluginExtension.destroy();
      this.pluginExtension = null;
    }
  }, {
    key: "_transError",
    value: function _transError() {
      var _this3 = this;
      this.hls.on(Event.ERROR, function(err) {
        if (_this3.player) {
          _this3.player.emit(events_exports.ERROR, new Errors(_this3.player, err));
        }
      });
    }
  }, {
    key: "_transCoreEvent",
    value: function _transCoreEvent(eventName) {
      var _this4 = this;
      this.hls.on(eventName, function(e) {
        if (_this4.player) {
          _this4.player.emit("core_event", _objectSpread2(_objectSpread2({}, e), {}, {
            eventName
          }));
          if (eventName === EVENT.SEI_IN_TIME && _this4.hls.hasSubtitle) {
            _this4._emitSeiPaylodTime(e);
          }
        }
      });
    }
  }, {
    key: "_emitSeiPaylodTime",
    value: function _emitSeiPaylodTime(e) {
      try {
        var seiJson = JSON.parse(Array.from(e.data.payload).map(function(x) {
          return String.fromCharCode(x);
        }).join("").slice(0, -1));
        if (!seiJson["rtmp_dts"])
          return;
        this.player.emit("core_event", {
          eventName: Event.SEI_PAYLOAD_TIME,
          time: seiJson["rtmp_dts"]
        });
      } catch (e2) {
      }
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "hls";
    }
  }, {
    key: "isSupported",
    value: function isSupported(mediaType, codec) {
      return Hls.isSupported(mediaType, codec);
    }
  }]);
  return HlsPlugin2;
}(BasePlugin);
_defineProperty(HlsPlugin, "Hls", Hls);
_defineProperty(HlsPlugin, "EVENT", Event);
export {
  ERR,
  ERR_CODE,
  Event as EVENT,
  Hls,
  HlsPlugin,
  StreamingError,
  HlsPlugin as default,
  parseSwitchUrlArgs
};
//# sourceMappingURL=xgplayer-hls.js.map
