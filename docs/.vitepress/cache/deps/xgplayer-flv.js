import {
  BandwidthService,
  Buffer,
  ERR,
  ERR_CODE,
  EVENT,
  FMP4Remuxer,
  FlvDemuxer,
  GapService,
  Logger,
  Logger2,
  MSE,
  MediaStatsService,
  NetLoader,
  SeiService,
  StreamingError,
  WarningType,
  concatUint8Array,
  getVideoPlaybackQuality,
  isMediaPlaying
} from "./chunk-AA3UUEYT.js";
import {
  BasePlugin,
  Errors,
  events_exports,
  require_eventemitter3
} from "./chunk-5Y5CA5XL.js";
import {
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/xgplayer-flv/es/_virtual/_rollupPluginBabelHelpers.js
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

// node_modules/xgplayer-flv/es/flv/index.js
var import_eventemitter3 = __toESM(require_eventemitter3());

// node_modules/xgplayer-flv/es/flv/services/buffer-service.js
var logger = new Logger("BufferService");
var BufferService = function() {
  function BufferService2(flv, softVideo, opts) {
    _classCallCheck(this, BufferService2);
    _defineProperty(this, "flv", null);
    _defineProperty(this, "_demuxer", new FlvDemuxer());
    _defineProperty(this, "_remuxer", null);
    _defineProperty(this, "_mse", null);
    _defineProperty(this, "_softVideo", null);
    _defineProperty(this, "_sourceCreated", false);
    _defineProperty(this, "_needInitSegment", true);
    _defineProperty(this, "_discontinuity", true);
    _defineProperty(this, "_contiguous", false);
    _defineProperty(this, "_initSegmentId", "");
    _defineProperty(this, "_cachedBuffer", null);
    _defineProperty(this, "_demuxStartTime", 0);
    _defineProperty(this, "_opts", null);
    this.flv = flv;
    this._opts = opts;
    if (softVideo) {
      this._softVideo = softVideo;
    } else {
      this._remuxer = new FMP4Remuxer(this._demuxer.videoTrack, this._demuxer.audioTrack);
      this._mse = new MSE();
      this._mse.bindMedia(flv.media);
    }
  }
  _createClass(BufferService2, [{
    key: "baseDts",
    get: function get() {
      var _this$_demuxer, _this$_demuxer$_fixer;
      return (_this$_demuxer = this._demuxer) === null || _this$_demuxer === void 0 ? void 0 : (_this$_demuxer$_fixer = _this$_demuxer._fixer) === null || _this$_demuxer$_fixer === void 0 ? void 0 : _this$_demuxer$_fixer._baseDts;
    }
  }, {
    key: "seamlessSwitch",
    value: function seamlessSwitch() {
      this._needInitSegment = true;
      this._discontinuity = true;
      this._contiguous = true;
      this._initSegmentId = "";
    }
  }, {
    key: "unContiguous",
    value: function unContiguous(startTime) {
      this._contiguous = false;
      this._demuxStartTime = startTime;
    }
  }, {
    key: "reset",
    value: function() {
      var _reset = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
        var reuseMse, _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                reuseMse = _args.length > 0 && _args[0] !== void 0 ? _args[0] : false;
                if (!(this._mse && !reuseMse)) {
                  _context.next = 6;
                  break;
                }
                _context.next = 4;
                return this._mse.unbindMedia();
              case 4:
                _context.next = 6;
                return this._mse.bindMedia(this.flv.media);
              case 6:
                this._needInitSegment = true;
                this._discontinuity = true;
                this._contiguous = false;
                this._sourceCreated = false;
                this._initSegmentId = "";
              case 11:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function reset() {
        return _reset.apply(this, arguments);
      }
      return reset;
    }()
  }, {
    key: "endOfStream",
    value: function() {
      var _endOfStream = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._mse) {
                  _context2.next = 7;
                  break;
                }
                if (!this._sourceCreated) {
                  _context2.next = 5;
                  break;
                }
                _context2.next = 4;
                return this._mse.endOfStream();
              case 4:
                this.flv.emit(EVENT.BUFFEREOS);
              case 5:
                _context2.next = 8;
                break;
              case 7:
                if (this._softVideo) {
                  this._softVideo.endOfStream();
                }
              case 8:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function endOfStream() {
        return _endOfStream.apply(this, arguments);
      }
      return endOfStream;
    }()
  }, {
    key: "updateDuration",
    value: function() {
      var _updateDuration = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(duration) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this._mse) {
                  _context3.next = 7;
                  break;
                }
                if (this._mse.isOpened) {
                  _context3.next = 4;
                  break;
                }
                _context3.next = 4;
                return this._mse.open();
              case 4:
                logger.debug("update duration", duration);
                _context3.next = 7;
                return this._mse.updateDuration(duration);
              case 7:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function updateDuration(_x) {
        return _updateDuration.apply(this, arguments);
      }
      return updateDuration;
    }()
  }, {
    key: "destroy",
    value: function() {
      var _destroy = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this._mse) {
                  _context4.next = 3;
                  break;
                }
                _context4.next = 3;
                return this._mse.unbindMedia();
              case 3:
                this._mse = null;
                this._softVideo = null;
                this._demuxer = null;
                this._remuxer = null;
              case 7:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function destroy() {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }, {
    key: "appendBuffer",
    value: function() {
      var _appendBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(chunk) {
        var demuxer, videoTrack, audioTrack, metadataTrack, videoExist, audioExist, duration, track, videoType, audioType, mse, newId, remuxResult, p;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this._cachedBuffer) {
                  chunk = concatUint8Array(this._cachedBuffer, chunk);
                  this._cachedBuffer = null;
                }
                demuxer = this._demuxer;
                if (!(!chunk || !chunk.length || !demuxer)) {
                  _context5.next = 4;
                  break;
                }
                return _context5.abrupt("return");
              case 4:
                _context5.prev = 4;
                demuxer.demuxAndFix(chunk, this._discontinuity, this._contiguous, this._demuxStartTime);
                _context5.next = 11;
                break;
              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](4);
                throw new StreamingError(ERR.DEMUX, ERR.SUB_TYPES.FLV, _context5.t0);
              case 11:
                videoTrack = demuxer.videoTrack, audioTrack = demuxer.audioTrack, metadataTrack = demuxer.metadataTrack;
                videoExist = videoTrack.exist();
                audioExist = audioTrack.exist();
                if (this._opts.onlyAudio) {
                  videoExist = false;
                  videoTrack.present = false;
                }
                if (this._opts.onlyVideo) {
                  audioExist = false;
                  audioTrack.present = false;
                }
                if (!(!videoExist && videoTrack.present || !audioExist && audioTrack.present)) {
                  _context5.next = 29;
                  break;
                }
                duration = 0;
                track = videoExist ? videoTrack : audioExist ? audioTrack : void 0;
                if (track && track.samples.length) {
                  duration = (track.samples[track.samples.length - 1].originPts - track.samples[0].originPts) / track.timescale * 1e3;
                }
                if (!(duration > this._opts.analyzeDuration)) {
                  _context5.next = 27;
                  break;
                }
                logger.warn("analyze duration exceeded, ".concat(duration, "ms"), track);
                videoTrack.present = videoExist;
                audioTrack.present = audioExist;
                this.flv.emit(EVENT.ANALYZE_DURATION_EXCEEDED, {
                  duration
                });
                _context5.next = 29;
                break;
              case 27:
                this._cachedBuffer = chunk;
                return _context5.abrupt("return");
              case 29:
                videoType = videoTrack.type;
                audioType = audioTrack.type;
                this._fireEvents(videoTrack, audioTrack, metadataTrack);
                this._discontinuity = false;
                this._contiguous = true;
                this._demuxStartTime = 0;
                mse = this._mse;
                this.flv.emit(EVENT.DEMUXED_TRACK, {
                  videoTrack
                });
                newId = "".concat(videoTrack.codec, "/").concat(videoTrack.width, "/").concat(videoTrack.height, "/").concat(audioTrack.codec, "/").concat(audioTrack.config);
                if (newId !== this._initSegmentId) {
                  this._needInitSegment = true;
                  this._initSegmentId = newId;
                  this._emitMetaParsedEvent(videoTrack, audioTrack);
                }
                if (!mse) {
                  _context5.next = 65;
                  break;
                }
                if (this._sourceCreated) {
                  _context5.next = 47;
                  break;
                }
                _context5.next = 43;
                return mse.open();
              case 43:
                if (videoExist) {
                  logger.log("codec: video/mp4;codecs=".concat(videoTrack.codec));
                  mse.createSource(videoType, "video/mp4;codecs=".concat(videoTrack.codec));
                }
                if (audioExist) {
                  logger.log("codec: audio/mp4;codecs=".concat(audioTrack.codec));
                  mse.createSource(audioType, "audio/mp4;codecs=".concat(audioTrack.codec));
                }
                this._sourceCreated = true;
                this.flv.emit(EVENT.SOURCEBUFFER_CREATED);
              case 47:
                _context5.prev = 47;
                remuxResult = this._remuxer.remux(this._needInitSegment);
                _context5.next = 54;
                break;
              case 51:
                _context5.prev = 51;
                _context5.t1 = _context5["catch"](47);
                throw new StreamingError(ERR.REMUX, ERR.SUB_TYPES.FMP4, _context5.t1);
              case 54:
                if (!(this._needInitSegment && !remuxResult.videoInitSegment && !remuxResult.audioInitSegment)) {
                  _context5.next = 56;
                  break;
                }
                return _context5.abrupt("return");
              case 56:
                this._needInitSegment = false;
                p = [];
                if (remuxResult.videoInitSegment)
                  p.push(mse.append(videoType, remuxResult.videoInitSegment));
                if (remuxResult.audioInitSegment)
                  p.push(mse.append(audioType, remuxResult.audioInitSegment));
                if (remuxResult.videoSegment)
                  p.push(mse.append(videoType, remuxResult.videoSegment));
                if (remuxResult.audioSegment)
                  p.push(mse.append(audioType, remuxResult.audioSegment));
                return _context5.abrupt("return", Promise.all(p));
              case 65:
                if (this._softVideo) {
                  this._softVideo.appendBuffer(videoTrack, audioTrack);
                }
              case 66:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this, [[4, 8], [47, 51]]);
      }));
      function appendBuffer(_x2) {
        return _appendBuffer.apply(this, arguments);
      }
      return appendBuffer;
    }()
  }, {
    key: "evictBuffer",
    value: function() {
      var _evictBuffer = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6(bufferBehind) {
        var _this = this;
        var media, currentTime, removeEnd, start;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                media = this.flv.media;
                if (!(!this._mse || !this._demuxer || !media || !bufferBehind || bufferBehind < 0)) {
                  _context6.next = 3;
                  break;
                }
                return _context6.abrupt("return");
              case 3:
                currentTime = media.currentTime;
                removeEnd = currentTime - bufferBehind;
                if (!(removeEnd <= 0)) {
                  _context6.next = 7;
                  break;
                }
                return _context6.abrupt("return");
              case 7:
                start = Buffer.start(Buffer.get(media));
                if (!(start + 1 >= removeEnd)) {
                  _context6.next = 10;
                  break;
                }
                return _context6.abrupt("return");
              case 10:
                return _context6.abrupt("return", this._mse.clearBuffer(0, removeEnd).then(function() {
                  return _this.flv.emit(EVENT.REMOVE_BUFFER, {
                    removeEnd
                  });
                }));
              case 11:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function evictBuffer(_x3) {
        return _evictBuffer.apply(this, arguments);
      }
      return evictBuffer;
    }()
  }, {
    key: "_emitMetaParsedEvent",
    value: function _emitMetaParsedEvent(videoTrack, audioTrack) {
      if (videoTrack.exist()) {
        this.flv.emit(EVENT.METADATA_PARSED, {
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
        this.flv.emit(EVENT.METADATA_PARSED, {
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
      logger.debug("track parsed", videoTrack, audioTrack);
    }
  }, {
    key: "_fireEvents",
    value: function _fireEvents(videoTrack, audioTrack, metadataTrack) {
      var _this2 = this;
      logger.debug(videoTrack.samples, audioTrack.samples);
      metadataTrack.flvScriptSamples.forEach(function(sample) {
        _this2.flv.emit(EVENT.FLV_SCRIPT_DATA, sample);
        logger.debug("flvScriptData", sample);
      });
      videoTrack.samples.forEach(function(sample) {
        if (sample.keyframe) {
          _this2.flv.emit(EVENT.KEYFRAME, {
            pts: sample.pts
          });
        }
      });
      videoTrack.warnings.forEach(function(warn) {
        var type;
        switch (warn.type) {
          case WarningType.LARGE_AV_SHIFT:
            type = EVENT.LARGE_AV_FIRST_FRAME_GAP_DETECT;
            break;
          case WarningType.LARGE_VIDEO_GAP:
            type = EVENT.LARGE_VIDEO_DTS_GAP_DETECT;
            break;
          case WarningType.LARGE_VIDEO_GAP_BETWEEN_CHUNK:
            type = EVENT.MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT;
            break;
        }
        if (type)
          _this2.flv.emit(EVENT.STREAM_EXCEPTION, _objectSpread2(_objectSpread2({}, warn), {}, {
            type
          }));
        logger.warn("video exception", warn);
      });
      audioTrack.warnings.forEach(function(warn) {
        var type;
        switch (warn.type) {
          case WarningType.LARGE_AUDIO_GAP:
            type = EVENT.LARGE_AUDIO_DTS_GAP_DETECT;
            break;
          case WarningType.AUDIO_FILLED:
            type = EVENT.AUDIO_GAP_DETECT;
            break;
          case WarningType.AUDIO_DROPPED:
            type = EVENT.AUDIO_OVERLAP_DETECT;
            break;
        }
        if (type)
          _this2.flv.emit(EVENT.STREAM_EXCEPTION, _objectSpread2(_objectSpread2({}, warn), {}, {
            type
          }));
        logger.warn("audio exception", warn);
      });
      metadataTrack.seiSamples.forEach(function(sei) {
        _this2.flv.emit(EVENT.SEI, _objectSpread2(_objectSpread2({}, sei), {}, {
          sei: {
            code: sei.data.type,
            content: sei.data.payload,
            dts: sei.pts
          }
        }));
      });
    }
  }]);
  return BufferService2;
}();

// node_modules/xgplayer-flv/es/flv/options.js
function getOption(opts) {
  var ret = _objectSpread2({
    retryCount: 3,
    retryDelay: 1e3,
    loadTimeout: 1e4,
    maxReaderInterval: 5e3,
    preloadTime: 5,
    isLive: false,
    softDecode: false,
    bufferBehind: 10,
    maxJumpDistance: 3,
    analyzeDuration: 2e4,
    seamlesslyReload: false,
    keepStatusAfterSwitch: true,
    onlyVideo: false,
    onlyAudio: false
  }, opts);
  if (ret.isLive) {
    if (ret.preloadTime) {
      if (!ret.maxLatency) {
        ret.maxLatency = ret.preloadTime * 2;
      }
      if (!ret.targetLatency) {
        ret.targetLatency = ret.preloadTime;
      }
      if (ret.disconnectTime === null || ret.disconnectTime === void 0) {
        ret.disconnectTime = ret.maxLatency;
      }
    }
  }
  return ret;
}

// node_modules/xgplayer-flv/es/flv/utils.js
function searchKeyframeIndex(list, value) {
  var idx = 0;
  var last = list.length - 1;
  var mid = 0;
  var lbound = 0;
  var ubound = last;
  if (value < list[0]) {
    idx = 0;
    lbound = ubound + 1;
  }
  while (lbound <= ubound) {
    mid = lbound + Math.floor((ubound - lbound) / 2);
    if (mid === last || value >= list[mid] && value < list[mid + 1]) {
      idx = mid;
      break;
    } else if (list[mid] < value) {
      lbound = mid + 1;
    } else {
      ubound = mid - 1;
    }
  }
  return idx;
}

// node_modules/xgplayer-flv/es/flv/index.js
var logger2 = new Logger("flv");
var Flv = function(_EventEmitter) {
  _inherits(Flv2, _EventEmitter);
  var _super = _createSuper(Flv2);
  function Flv2(_opts) {
    var _this;
    _classCallCheck(this, Flv2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "media", null);
    _defineProperty(_assertThisInitialized(_this), "_loading", false);
    _defineProperty(_assertThisInitialized(_this), "_opts", null);
    _defineProperty(_assertThisInitialized(_this), "_bufferService", null);
    _defineProperty(_assertThisInitialized(_this), "_gapService", null);
    _defineProperty(_assertThisInitialized(_this), "_stats", null);
    _defineProperty(_assertThisInitialized(_this), "_mediaLoader", null);
    _defineProperty(_assertThisInitialized(_this), "_maxChunkWaitTimer", null);
    _defineProperty(_assertThisInitialized(_this), "_tickTimer", null);
    _defineProperty(_assertThisInitialized(_this), "_tickInterval", 500);
    _defineProperty(_assertThisInitialized(_this), "_urlSwitching", false);
    _defineProperty(_assertThisInitialized(_this), "_seamlessSwitching", false);
    _defineProperty(_assertThisInitialized(_this), "_keyframes", null);
    _defineProperty(_assertThisInitialized(_this), "_acceptRanges", true);
    _defineProperty(_assertThisInitialized(_this), "_onProgress", function() {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(chunk, done, _ref, response) {
        var startTime, endTime, st, firstByteTime, _this$_mediaLoader, headers, _this$_bufferService, maxReaderInterval;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                startTime = _ref.startTime, endTime = _ref.endTime, st = _ref.st, firstByteTime = _ref.firstByteTime;
                _this._loading = !done;
                if (_this._firstProgressEmit) {
                  _context.next = 11;
                  break;
                }
                if (_this.media) {
                  _context.next = 6;
                  break;
                }
                (_this$_mediaLoader = _this._mediaLoader) === null || _this$_mediaLoader === void 0 ? void 0 : _this$_mediaLoader.cancel();
                return _context.abrupt("return");
              case 6:
                headers = response.headers;
                _this.emit(EVENT.TTFB, {
                  url: _this._opts.url,
                  responseUrl: response.url,
                  elapsed: st ? firstByteTime - st : endTime - startTime
                });
                _this.emit(EVENT.LOAD_RESPONSE_HEADERS, {
                  headers
                });
                _this._acceptRanges = !!(headers !== null && headers !== void 0 && headers.get("Accept-Ranges")) || !!(headers !== null && headers !== void 0 && headers.get("Content-Range"));
                _this._firstProgressEmit = true;
              case 11:
                if (_this._bufferService) {
                  _context.next = 13;
                  break;
                }
                return _context.abrupt("return");
              case 13:
                clearTimeout(_this._maxChunkWaitTimer);
                _this._bandwidthService.addChunkRecord(chunk === null || chunk === void 0 ? void 0 : chunk.byteLength, endTime - startTime);
                _context.prev = 15;
                _context.next = 18;
                return _this._bufferService.appendBuffer(chunk);
              case 18:
                (_this$_bufferService = _this._bufferService) === null || _this$_bufferService === void 0 ? void 0 : _this$_bufferService.evictBuffer(_this._opts.bufferBehind);
                _context.next = 24;
                break;
              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](15);
                return _context.abrupt("return", _this._emitError(StreamingError.create(_context.t0)));
              case 24:
                if (_this._urlSwitching) {
                  _this._urlSwitching = false;
                  _this.emit(EVENT.SWITCH_URL_SUCCESS, {
                    url: _this._opts.url
                  });
                }
                if (_this._seamlessSwitching) {
                  _this._seamlessSwitching = false;
                  _this._tick();
                }
                if (!(done && !_this.media.seeking)) {
                  _context.next = 32;
                  break;
                }
                _this.emit(EVENT.LOAD_COMPLETE);
                logger2.debug("load done");
                return _context.abrupt("return", _this._end());
              case 32:
                maxReaderInterval = _this._opts.maxReaderInterval;
                if (maxReaderInterval) {
                  clearTimeout(_this._maxChunkWaitTimer);
                  _this._maxChunkWaitTimer = setTimeout(function() {
                    logger2.debug("onMaxChunkWait", maxReaderInterval);
                    _this._end();
                  }, maxReaderInterval);
                }
              case 34:
              case "end":
                return _context.stop();
            }
        }, _callee, null, [[15, 21]]);
      }));
      return function(_x, _x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }());
    _defineProperty(_assertThisInitialized(_this), "_onRetryError", function(error, retryTime) {
      logger2.debug("load retry", error, retryTime);
      _this.emit(EVENT.LOAD_RETRY, {
        error: StreamingError.network(error),
        retryTime
      });
    });
    _defineProperty(_assertThisInitialized(_this), "_end", function() {
      _this._clear();
      if (_this._bufferService) {
        _this._bufferService.endOfStream();
      }
      logger2.debug("end stream");
    });
    _defineProperty(_assertThisInitialized(_this), "_tick", function() {
      clearTimeout(_this._tickTimer);
      var _assertThisInitialize = _assertThisInitialized(_this), media = _assertThisInitialize.media;
      if (!media)
        return;
      _this._tickTimer = setTimeout(_this._tick, _this._tickInterval);
      var bufferEnd = Buffer.end(Buffer.get(media));
      if (bufferEnd < 0.1 || !media.readyState)
        return;
      var opts = _this._opts;
      if (isMediaPlaying(media)) {
        if (_this._gapService) {
          _this._gapService.do(media, opts.maxJumpDistance, _this.isLive, 3);
        }
      } else {
        if (!media.currentTime && _this._gapService) {
          _this._gapService.do(media, opts.maxJumpDistance, _this.isLive, 3);
          return;
        }
        if (opts.isLive && bufferEnd > opts.disconnectTime) {
          _this.disconnect();
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onPlay", function() {
      var _this$media, _this$media$buffered;
      var canReplay = _this._opts.softDecode || ((_this$media = _this.media) === null || _this$media === void 0 ? void 0 : (_this$media$buffered = _this$media.buffered) === null || _this$media$buffered === void 0 ? void 0 : _this$media$buffered.length);
      if (_this.isLive && !_this._loading && canReplay) {
        _this.replay(void 0, true);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onSeeking", _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
      var times, filepositions, currentTime, i, startByte;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1)
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(!_this.isLive && _this.seekable)) {
                _context2.next = 14;
                break;
              }
              times = _this._keyframes.times;
              filepositions = _this._keyframes.filepositions;
              if (!(!(times !== null && times !== void 0 && times.length) || !(filepositions !== null && filepositions !== void 0 && filepositions.length))) {
                _context2.next = 5;
                break;
              }
              return _context2.abrupt("return");
            case 5:
              currentTime = _this.media.currentTime;
              i = searchKeyframeIndex(_this._keyframes.times, currentTime);
              startByte = filepositions[i];
              if (!(startByte === null || startByte === void 0)) {
                _context2.next = 10;
                break;
              }
              return _context2.abrupt("return");
            case 10:
              _context2.next = 12;
              return _this._mediaLoader.cancel();
            case 12:
              _this._loadData(null, [startByte]);
              _this._bufferService.unContiguous(times[i]);
            case 14:
            case "end":
              return _context2.stop();
          }
      }, _callee2);
    })));
    _defineProperty(_assertThisInitialized(_this), "_onTimeupdate", function() {
      if (!_this.media)
        return;
      var opts = _this._opts;
      var currentTime = _this.media.currentTime;
      if (opts.isLive && opts.maxLatency && opts.targetLatency) {
        var bufferEnd = Buffer.end(Buffer.get(_this.media));
        var latency = bufferEnd - currentTime;
        if (latency >= opts.maxLatency) {
          _this.media.currentTime = bufferEnd - opts.targetLatency;
        }
      }
      _this._seiService.throw(currentTime);
    });
    _defineProperty(_assertThisInitialized(_this), "_onFlvScriptData", function(sample) {
      var _sample$data, _sample$data$onMetaDa, _sample$data2, _sample$data2$onMetaD;
      var keyframes = (_sample$data = sample.data) === null || _sample$data === void 0 ? void 0 : (_sample$data$onMetaDa = _sample$data.onMetaData) === null || _sample$data$onMetaDa === void 0 ? void 0 : _sample$data$onMetaDa.keyframes;
      var duration = (_sample$data2 = sample.data) === null || _sample$data2 === void 0 ? void 0 : (_sample$data2$onMetaD = _sample$data2.onMetaData) === null || _sample$data2$onMetaD === void 0 ? void 0 : _sample$data2$onMetaD.duration;
      if (keyframes) {
        _this._keyframes = keyframes;
      }
      if (!_this._opts.isLive && duration) {
        _this._bufferService.updateDuration(duration);
      }
    });
    _this._opts = getOption(_opts);
    _this.media = _this._opts.media || document.createElement("video");
    _this._opts.media = null;
    _this._firstProgressEmit = false;
    _this._mediaLoader = new NetLoader(_objectSpread2(_objectSpread2({}, _this._opts.fetchOptions), {}, {
      retry: _this._opts.retryCount,
      retryDelay: _this._opts.retryDelay,
      timeout: _this._opts.loadTimeout,
      onRetryError: _this._onRetryError,
      onProgress: _this._onProgress,
      responseType: "arraybuffer"
    }));
    _this._bufferService = new BufferService(_assertThisInitialized(_this), _this._opts.softDecode ? _this.media : void 0, _this._opts);
    _this._seiService = new SeiService(_assertThisInitialized(_this));
    _this._bandwidthService = new BandwidthService();
    _this._stats = new MediaStatsService(_assertThisInitialized(_this));
    if (!_this._opts.softDecode) {
      _this._gapService = new GapService();
    }
    _this.media.addEventListener("play", _this._onPlay);
    _this.media.addEventListener("seeking", _this._onSeeking);
    _this.media.addEventListener("timeupdate", _this._onTimeupdate);
    _this.on(EVENT.FLV_SCRIPT_DATA, _this._onFlvScriptData);
    return _this;
  }
  _createClass(Flv2, [{
    key: "version",
    get: function get() {
      return "3.0.7";
    }
  }, {
    key: "isLive",
    get: function get() {
      return this._opts.isLive;
    }
  }, {
    key: "baseDts",
    get: function get() {
      var _this$_bufferService2;
      return (_this$_bufferService2 = this._bufferService) === null || _this$_bufferService2 === void 0 ? void 0 : _this$_bufferService2.baseDts;
    }
  }, {
    key: "seekable",
    get: function get() {
      return !!this._keyframes && this._acceptRanges;
    }
  }, {
    key: "speedInfo",
    value: function speedInfo() {
      return {
        speed: this._bandwidthService.getLatestSpeed(),
        avgSpeed: this._bandwidthService.getAvgSpeed()
      };
    }
  }, {
    key: "getStats",
    value: function getStats() {
      return this._stats.getStats();
    }
  }, {
    key: "bufferInfo",
    value: function bufferInfo() {
      var _this$media2;
      var maxHole = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0.1;
      return Buffer.info(Buffer.get(this.media), (_this$media2 = this.media) === null || _this$media2 === void 0 ? void 0 : _this$media2.currentTime, maxHole);
    }
  }, {
    key: "playbackQuality",
    value: function playbackQuality() {
      return getVideoPlaybackQuality(this.media);
    }
  }, {
    key: "load",
    value: function() {
      var _load = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(url) {
        var reuseMse, _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                reuseMse = _args3.length > 1 && _args3[1] !== void 0 ? _args3[1] : false;
                if (this._bufferService) {
                  _context3.next = 3;
                  break;
                }
                return _context3.abrupt("return");
              case 3:
                _context3.next = 5;
                return this._reset(reuseMse);
              case 5:
                this._loadData(url);
                clearTimeout(this._tickTimer);
                this._tickTimer = setTimeout(this._tick, this._tickInterval);
              case 8:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function load(_x5) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "replay",
    value: function() {
      var _replay = _asyncToGenerator(_regeneratorRuntime().mark(function _callee4() {
        var _this2 = this;
        var seamlesslyReload, isPlayEmit, _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1)
            switch (_context4.prev = _context4.next) {
              case 0:
                seamlesslyReload = _args4.length > 0 && _args4[0] !== void 0 ? _args4[0] : this._opts.seamlesslyReload;
                isPlayEmit = _args4.length > 1 ? _args4[1] : void 0;
                if (this.media) {
                  _context4.next = 4;
                  break;
                }
                return _context4.abrupt("return");
              case 4:
                if (!seamlesslyReload) {
                  _context4.next = 10;
                  break;
                }
                _context4.next = 7;
                return this._clear();
              case 7:
                setTimeout(function() {
                  _this2._loadData(_this2._opts.url);
                  _this2._bufferService.seamlessSwitch();
                  _this2._seamlessSwitching = true;
                });
                _context4.next = 12;
                break;
              case 10:
                _context4.next = 12;
                return this.load();
              case 12:
                return _context4.abrupt("return", this.media.play(!isPlayEmit).catch(function() {
                }));
              case 13:
              case "end":
                return _context4.stop();
            }
        }, _callee4, this);
      }));
      function replay() {
        return _replay.apply(this, arguments);
      }
      return replay;
    }()
  }, {
    key: "disconnect",
    value: function disconnect() {
      logger2.debug("disconnect!");
      return this._clear();
    }
  }, {
    key: "switchURL",
    value: function() {
      var _switchURL = _asyncToGenerator(_regeneratorRuntime().mark(function _callee5(url, seamless) {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1)
            switch (_context5.prev = _context5.next) {
              case 0:
                if (this._bufferService) {
                  _context5.next = 2;
                  break;
                }
                return _context5.abrupt("return");
              case 2:
                if (!(!seamless || !this._opts.isLive)) {
                  _context5.next = 7;
                  break;
                }
                _context5.next = 5;
                return this.load(url);
              case 5:
                this._urlSwitching = true;
                return _context5.abrupt("return", this.media.play(true).catch(function() {
                }));
              case 7:
                _context5.next = 9;
                return this._clear();
              case 9:
                setTimeout(function() {
                  _this3._loadData(url);
                  _this3._bufferService.seamlessSwitch();
                  _this3._urlSwitching = true;
                  _this3._seamlessSwitching = true;
                });
              case 10:
              case "end":
                return _context5.stop();
            }
        }, _callee5, this);
      }));
      function switchURL(_x6, _x7) {
        return _switchURL.apply(this, arguments);
      }
      return switchURL;
    }()
  }, {
    key: "destroy",
    value: function() {
      var _destroy = _asyncToGenerator(_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1)
            switch (_context6.prev = _context6.next) {
              case 0:
                if (this.media) {
                  _context6.next = 2;
                  break;
                }
                return _context6.abrupt("return");
              case 2:
                this.removeAllListeners();
                this._seiService.reset();
                this.media.removeEventListener("play", this._onPlay);
                this.media.removeEventListener("seeking", this._onSeeking);
                this.media.removeEventListener("timeupdate", this._onTimeupdate);
                _context6.next = 9;
                return Promise.all([this._clear(), this._bufferService.destroy()]);
              case 9:
                this.media = null;
                this._bufferService = null;
              case 11:
              case "end":
                return _context6.stop();
            }
        }, _callee6, this);
      }));
      function destroy() {
        return _destroy.apply(this, arguments);
      }
      return destroy;
    }()
  }, {
    key: "_emitError",
    value: function _emitError(error) {
      var _this$media3;
      var endOfStream = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      logger2.table(error);
      logger2.error(error);
      logger2.error((_this$media3 = this.media) === null || _this$media3 === void 0 ? void 0 : _this$media3.error);
      if (this._urlSwitching) {
        this._urlSwitching = false;
        this._seamlessSwitching = false;
        this.emit(EVENT.SWITCH_URL_FAILED, error);
      }
      this.emit(EVENT.ERROR, error);
      if (endOfStream) {
        this._seiService.reset();
        this._end();
      }
    }
  }, {
    key: "_reset",
    value: function() {
      var _reset2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee7() {
        var reuseMse, _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1)
            switch (_context7.prev = _context7.next) {
              case 0:
                reuseMse = _args7.length > 0 && _args7[0] !== void 0 ? _args7[0] : false;
                this._seiService.reset();
                this._bandwidthService.reset();
                this._stats.reset();
                _context7.next = 6;
                return this._clear();
              case 6:
                _context7.next = 8;
                return this._bufferService.reset(reuseMse);
              case 8:
                this._firstProgressEmit = false;
              case 9:
              case "end":
                return _context7.stop();
            }
        }, _callee7, this);
      }));
      function _reset() {
        return _reset2.apply(this, arguments);
      }
      return _reset;
    }()
  }, {
    key: "_loadData",
    value: function() {
      var _loadData2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee8(url, range) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1)
            switch (_context8.prev = _context8.next) {
              case 0:
                if (url)
                  this._opts.url = url;
                url = this._opts.url;
                if (url) {
                  _context8.next = 4;
                  break;
                }
                throw new Error("Source url is missing");
              case 4:
                this.emit(EVENT.LOAD_START, {
                  url
                });
                logger2.debug("load data, loading:", this._loading, url);
                if (!this._loading) {
                  _context8.next = 9;
                  break;
                }
                _context8.next = 9;
                return this._mediaLoader.cancel();
              case 9:
                this._loading = true;
                _context8.prev = 10;
                _context8.next = 13;
                return this._mediaLoader.load({
                  url,
                  range
                });
              case 13:
                _context8.next = 18;
                break;
              case 15:
                _context8.prev = 15;
                _context8.t0 = _context8["catch"](10);
                return _context8.abrupt("return", this._emitError(StreamingError.network(_context8.t0)));
              case 18:
              case "end":
                return _context8.stop();
            }
        }, _callee8, this, [[10, 15]]);
      }));
      function _loadData(_x8, _x9) {
        return _loadData2.apply(this, arguments);
      }
      return _loadData;
    }()
  }, {
    key: "_clear",
    value: function() {
      var _clear2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1)
            switch (_context9.prev = _context9.next) {
              case 0:
                clearTimeout(this._maxChunkWaitTimer);
                clearTimeout(this._tickTimer);
                if (!this._mediaLoader) {
                  _context9.next = 5;
                  break;
                }
                _context9.next = 5;
                return this._mediaLoader.cancel();
              case 5:
                this._loading = false;
              case 6:
              case "end":
                return _context9.stop();
            }
        }, _callee9, this);
      }));
      function _clear() {
        return _clear2.apply(this, arguments);
      }
      return _clear;
    }()
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
  return Flv2;
}(import_eventemitter3.default);
try {
  if (localStorage.getItem("xgd")) {
    Flv.enableLogger();
  } else {
    Flv.disableLogger();
  }
} catch (error) {
}

// node_modules/xgplayer-flv/es/plugin-extension.js
var PluginExtension = function() {
  function PluginExtension2(opts, plugin) {
    var _this = this;
    _classCallCheck(this, PluginExtension2);
    _defineProperty(this, "_onLowDecode", function() {
      var _this$_plugin, _this$_plugin$player, _this$_plugin2, _this$_plugin2$player;
      var _this$_opts = _this._opts, media = _this$_opts.media, innerDegrade = _this$_opts.innerDegrade, backupURL = _this$_opts.backupURL;
      (_this$_plugin = _this._plugin) === null || _this$_plugin === void 0 ? void 0 : (_this$_plugin$player = _this$_plugin.player) === null || _this$_plugin$player === void 0 ? void 0 : _this$_plugin$player.emit("lowdecode", media.degradeInfo);
      (_this$_plugin2 = _this._plugin) === null || _this$_plugin2 === void 0 ? void 0 : (_this$_plugin2$player = _this$_plugin2.player) === null || _this$_plugin2$player === void 0 ? void 0 : _this$_plugin2$player.emit("core_event", _objectSpread2(_objectSpread2({}, media.degradeInfo), {}, {
        eventName: EVENT.LOWDECODE
      }));
      if ((innerDegrade === 1 || innerDegrade === 3) && backupURL) {
        _this._degrade(backupURL);
      }
    });
    _defineProperty(this, "_degrade", function(url) {
      var player = _this._plugin.player;
      var originVideo = player.video;
      if ((originVideo === null || originVideo === void 0 ? void 0 : originVideo.TAG) !== "MVideo")
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
      var flvPlugin = _this._plugin.constructor.pluginName.toLowerCase();
      player.unRegisterPlugin(flvPlugin);
      player.once("canplay", function() {
        player.play();
      });
    });
    _defineProperty(this, "forceDegradeToVideo", function(url) {
      var innerDegrade = _this._opts.innerDegrade;
      if (innerDegrade === 1 || innerDegrade === 3) {
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
      var _this$_opts2 = this._opts, media = _this$_opts2.media, preloadTime = _this$_opts2.preloadTime, innerDegrade = _this$_opts2.innerDegrade, decodeMode = _this$_opts2.decodeMode;
      if (!media)
        return;
      if (innerDegrade) {
        media.setAttribute("innerdegrade", innerDegrade);
      }
      if (preloadTime) {
        media.setAttribute("preloadtime", preloadTime);
      }
      if (media.setDecodeMode) {
        media.setDecodeMode(decodeMode);
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

// node_modules/xgplayer-flv/es/plugin.js
var FlvPlugin = function(_BasePlugin) {
  _inherits(FlvPlugin2, _BasePlugin);
  var _super = _createSuper(FlvPlugin2);
  function FlvPlugin2() {
    var _this;
    _classCallCheck(this, FlvPlugin2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "flv", null);
    _defineProperty(_assertThisInitialized(_this), "pluginExtension", null);
    _defineProperty(_assertThisInitialized(_this), "getStats", function() {
      var _this$flv;
      return (_this$flv = _this.flv) === null || _this$flv === void 0 ? void 0 : _this$flv.getStats();
    });
    _defineProperty(_assertThisInitialized(_this), "destroy", function() {
      var _this$pluginExtension;
      if (_this.flv) {
        _this.flv.destroy();
        _this.flv = null;
      }
      (_this$pluginExtension = _this.pluginExtension) === null || _this$pluginExtension === void 0 ? void 0 : _this$pluginExtension.destroy();
      _this.pluginExtension = null;
    });
    _defineProperty(_assertThisInitialized(_this), "_onSwitchURL", function(url, seamless) {
      if (_this.flv) {
        var _this$player$config, _this$player$config$f;
        _this.player.config.url = url;
        _this.flv.switchURL(url, seamless);
        if (!seamless && (_this$player$config = _this.player.config) !== null && _this$player$config !== void 0 && (_this$player$config$f = _this$player$config.flv) !== null && _this$player$config$f !== void 0 && _this$player$config$f.keepStatusAfterSwitch) {
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
    _defineProperty(_assertThisInitialized(_this), "_onDefinitionChange", function(_ref) {
      var to = _ref.to;
      if (_this.flv)
        _this.flv.switchURL(to);
    });
    return _this;
  }
  _createClass(FlvPlugin2, [{
    key: "core",
    get: function get() {
      return this.flv;
    }
  }, {
    key: "version",
    get: function get() {
      var _this$flv2;
      return (_this$flv2 = this.flv) === null || _this$flv2 === void 0 ? void 0 : _this$flv2.version;
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
      if (!config.url)
        return;
      if (this.flv)
        this.flv.destroy();
      this.player.switchURL = this._onSwitchURL;
      var flvOpts = config.flv || {};
      if (flvOpts.disconnectTime === null || flvOpts.disconnectTime === void 0) {
        flvOpts.disconnectTime = 0;
      }
      this.flv = new Flv(_objectSpread2({
        softDecode: this.softDecode,
        isLive: config.isLive,
        media: this.player.video
      }, flvOpts));
      if (!this.softDecode) {
        BasePlugin.defineGetterOrSetter(this.player, {
          url: {
            get: function get() {
              var _this2$flv, _this2$flv$media;
              return (_this2$flv = _this2.flv) === null || _this2$flv === void 0 ? void 0 : (_this2$flv$media = _this2$flv.media) === null || _this2$flv$media === void 0 ? void 0 : _this2$flv$media.src;
            },
            configurable: true
          }
        });
      }
      if (this.softDecode) {
        this.pluginExtension = new PluginExtension(_objectSpread2({
          media: this.player.video
        }, config.flv), this);
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
          var _this2$flv2;
          return (_this2$flv2 = _this2.flv) === null || _this2$flv2 === void 0 ? void 0 : _this2$flv2.replay();
        });
      }
      this.on(events_exports.URL_CHANGE, this._onSwitchURL);
      this.on(events_exports.DESTROY, this.destroy);
      this._transError();
      this._transCoreEvent(EVENT.TTFB);
      this._transCoreEvent(EVENT.LOAD_START);
      this._transCoreEvent(EVENT.LOAD_RESPONSE_HEADERS);
      this._transCoreEvent(EVENT.LOAD_COMPLETE);
      this._transCoreEvent(EVENT.LOAD_RETRY);
      this._transCoreEvent(EVENT.SOURCEBUFFER_CREATED);
      this._transCoreEvent(EVENT.ANALYZE_DURATION_EXCEEDED);
      this._transCoreEvent(EVENT.REMOVE_BUFFER);
      this._transCoreEvent(EVENT.BUFFEREOS);
      this._transCoreEvent(EVENT.KEYFRAME);
      this._transCoreEvent(EVENT.METADATA_PARSED);
      this._transCoreEvent(EVENT.SEI);
      this._transCoreEvent(EVENT.SEI_IN_TIME);
      this._transCoreEvent(EVENT.FLV_SCRIPT_DATA);
      this._transCoreEvent(EVENT.STREAM_EXCEPTION);
      this._transCoreEvent(EVENT.SWITCH_URL_SUCCESS);
      this._transCoreEvent(EVENT.SWITCH_URL_FAILED);
      this.flv.load(config.url, true);
    }
  }, {
    key: "_transError",
    value: function _transError() {
      var _this3 = this;
      this.flv.on(EVENT.ERROR, function(err) {
        if (_this3.player) {
          _this3.player.emit(events_exports.ERROR, new Errors(_this3.player, err));
        }
      });
    }
  }, {
    key: "_transCoreEvent",
    value: function _transCoreEvent(eventName) {
      var _this4 = this;
      this.flv.on(eventName, function(e) {
        if (_this4.player) {
          _this4.player.emit("core_event", _objectSpread2(_objectSpread2({}, e), {}, {
            eventName
          }));
        }
      });
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "flv";
    }
  }, {
    key: "isSupported",
    value: function isSupported(mediaType, codec) {
      return Flv.isSupported(mediaType, codec);
    }
  }]);
  return FlvPlugin2;
}(BasePlugin);
_defineProperty(FlvPlugin, "Flv", Flv);
export {
  ERR,
  ERR_CODE,
  EVENT,
  Flv,
  FlvPlugin,
  StreamingError,
  FlvPlugin as default,
  logger2 as logger
};
//# sourceMappingURL=xgplayer-flv.js.map
