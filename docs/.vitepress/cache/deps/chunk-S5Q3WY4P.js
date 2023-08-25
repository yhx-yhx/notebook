import {
  require_eventemitter3
} from "./chunk-BYX4PHXJ.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/xgplayer-streaming-shared/es/_virtual/_rollupPluginBabelHelpers.js
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
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2)
        _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? /* @__PURE__ */ new Map() : void 0;
  _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
    if (Class2 === null || !_isNativeFunction(Class2))
      return Class2;
    if (typeof Class2 !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class2))
        return _cache.get(Class2);
      _cache.set(Class2, Wrapper);
    }
    function Wrapper() {
      return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class2);
  };
  return _wrapNativeSuper(Class);
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
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null)
      break;
  }
  return object;
}
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get.bind();
  } else {
    _get = function _get2(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base)
        return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return {
        s: F,
        n: function() {
          if (i >= o.length)
            return {
              done: true
            };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function(e) {
          throw e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function() {
      it = it.call(o);
    },
    n: function() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function(e) {
      didErr = true;
      err = e;
    },
    f: function() {
      try {
        if (!normalCompletion && it.return != null)
          it.return();
      } finally {
        if (didErr)
          throw err;
      }
    }
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

// node_modules/xgplayer-streaming-shared/es/error.js
var _ERR_CODE;
var ERR = {
  MANIFEST: "manifest",
  NETWORK: "network",
  NETWORK_TIMEOUT: "network_timeout",
  NETWORK_FORBIDDEN: "network_forbidden",
  NETWORK_NOTFOUND: "network_notfound",
  NETWROK_RANGE_NOT_SATISFIABLE: "network_range_not_satisfiable",
  DEMUX: "demux",
  REMUX: "remux",
  MEDIA: "media",
  DRM: "drm",
  OTHER: "other",
  RUNTIME: "runtime",
  SUB_TYPES: {
    FLV: "FLV",
    HLS: "HLS",
    MP4: "MP4",
    FMP4: "FMP4",
    MSE_ADD_SB: "MSE_ADD_SB",
    MSE_APPEND_BUFFER: "MSE_APPEND_BUFFER",
    MSE_OTHER: "MSE_OTHER",
    MSE_FULL: "MSE_FULL",
    OPTION: "OPTION",
    DASH: "DASH",
    LICENSE: "LICENSE",
    CUSTOM_LICENSE: "CUSTOM_LICENSE",
    MSE_HIJACK: "MSE_HIJACK",
    EME_HIJACK: "EME_HIJACK",
    SIDX: "SIDX",
    NO_CANPLAY_ERROR: "NO_CANPLAY_ERROR",
    BUFFERBREAK_ERROR: "BUFFERBREAK_ERROR",
    WAITING_TIMEOUT_ERROR: "WAITINT_TIME_OUT_ERROR",
    MEDIA_ERR_ABORTED: "MEDIA_ERR_ABORTED",
    MEDIA_ERR_NETWORK: "MEDIA_ERR_NETWORK",
    MEDIA_ERR_DECODE: "MEDIA_ERR_DECODE",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "MEDIA_ERR_SRC_NOT_SUPPORTED",
    MEDIA_ERR_CODEC_NOT_SUPPORTED: "MEDIA_ERR_CODEC_NOT_SUPPORTED",
    MEDIA_ERR_URL_EMPTY: "MEDIA_ERR_URL_EMPTY"
  }
};
var ERR_CODE = (_ERR_CODE = {}, _defineProperty(_ERR_CODE, ERR.MANIFEST, {
  HLS: 1100,
  DASH: 1200
}), _defineProperty(_ERR_CODE, ERR.NETWORK, 2100), _defineProperty(_ERR_CODE, ERR.NETWORK_TIMEOUT, 2101), _defineProperty(_ERR_CODE, ERR.NETWORK_FORBIDDEN, 2103), _defineProperty(_ERR_CODE, ERR.NETWORK_NOTFOUND, 2104), _defineProperty(_ERR_CODE, ERR.NETWROK_RANGE_NOT_SATISFIABLE, 2116), _defineProperty(_ERR_CODE, ERR.DEMUX, {
  FLV: 3100,
  HLS: 3200,
  MP4: 3300,
  FMP4: 3400,
  SIDX: 3410
}), _defineProperty(_ERR_CODE, ERR.REMUX, {
  FMP4: 4100,
  MP4: 4200
}), _defineProperty(_ERR_CODE, ERR.MEDIA, {
  MEDIA_ERR_ABORTED: 5101,
  MEDIA_ERR_NETWORK: 5102,
  MEDIA_ERR_DECODE: 5103,
  MEDIA_ERR_SRC_NOT_SUPPORTED: 5104,
  MEDIA_ERR_CODEC_NOT_SUPPORTED: 5105,
  MEDIA_ERR_URL_EMPTY: 5106,
  MSE_ADD_SB: 5200,
  MSE_APPEND_BUFFER: 5201,
  MSE_OTHER: 5202,
  MSE_FULL: 5203,
  MSE_HIJACK: 5204,
  EME_HIJACK: 5301
}), _defineProperty(_ERR_CODE, ERR.DRM, {
  LICENSE: 7100,
  CUSTOM_LICENSE: 7200
}), _defineProperty(_ERR_CODE, ERR.OTHER, 8e3), _defineProperty(_ERR_CODE, ERR.RUNTIME, {
  NO_CANPLAY_ERROR: 9001,
  BUFFERBREAK_ERROR: 9002,
  WAITING_TIMEOUT_ERROR: 9003
}), _ERR_CODE);
var StreamingError = function(_Error) {
  _inherits(StreamingError2, _Error);
  var _super = _createSuper(StreamingError2);
  function StreamingError2(type, subType, origin, payload, msg) {
    var _this;
    _classCallCheck(this, StreamingError2);
    _this = _super.call(this, msg || (origin === null || origin === void 0 ? void 0 : origin.message));
    _this.errorType = type === ERR.NETWORK_TIMEOUT ? ERR.NETWORK : type;
    _this.originError = origin;
    _this.ext = payload;
    _this.errorCode = ERR_CODE[type][subType] || ERR_CODE[type];
    _this.errorMessage = _this.message;
    if (!_this.errorCode) {
      _this.errorType = ERR.OTHER;
      _this.errorCode = ERR_CODE[_this.errorType];
    }
    return _this;
  }
  _createClass(StreamingError2, null, [{
    key: "create",
    value: function create(type, subType, origin, payload, msg) {
      if (type instanceof StreamingError2) {
        return type;
      } else if (type instanceof Error) {
        origin = type;
        type = "";
      }
      if (!type)
        type = ERR.OTHER;
      return new StreamingError2(type, subType, origin, payload, msg);
    }
  }, {
    key: "network",
    value: function network(error) {
      var _error$response;
      return new StreamingError2(error !== null && error !== void 0 && error.isTimeout ? ERR.NETWORK_TIMEOUT : ERR.NETWORK, null, error instanceof Error ? error : null, {
        url: error === null || error === void 0 ? void 0 : error.url,
        response: error === null || error === void 0 ? void 0 : error.response,
        httpCode: error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status
      });
    }
  }]);
  return StreamingError2;
}(_wrapNativeSuper(Error));

// node_modules/xgplayer-streaming-shared/es/event.js
var EVENT = {
  ERROR: "error",
  TTFB: "core.ttfb",
  LOAD_START: "core.loadstart",
  LOAD_RESPONSE_HEADERS: "core.loadresponseheaders",
  LOAD_COMPLETE: "core.loadcomplete",
  LOAD_RETRY: "core.loadretry",
  SOURCEBUFFER_CREATED: "core.sourcebuffercreated",
  ANALYZE_DURATION_EXCEEDED: "core.analyzedurationexceeded",
  REMOVE_BUFFER: "core.removebuffer",
  BUFFEREOS: "core.buffereos",
  KEYFRAME: "core.keyframe",
  METADATA_PARSED: "core.metadataparsed",
  SEI: "core.sei",
  SEI_IN_TIME: "core.seiintime",
  FLV_SCRIPT_DATA: "core.flvscriptdata",
  LOWDECODE: "core.lowdecode",
  SWITCH_URL_SUCCESS: "core.switchurlsuccess",
  SWITCH_URL_FAILED: "core.switchurlfailed",
  SPEED: "core.speed",
  HLS_MANIFEST_LOADED: "core.hlsmanifestloaded",
  HLS_LEVEL_LOADED: "core.hlslevelloaded",
  DEMUXED_TRACK: "core.demuxedtrack",
  STREAM_EXCEPTION: "core.streamexception",
  LARGE_AV_FIRST_FRAME_GAP_DETECT: "LARGE_AV_FIRST_FRAME_GAP_DETECT",
  LARGE_VIDEO_DTS_GAP_DETECT: "LARGE_VIDEO_DTS_GAP_DETECT",
  LARGE_AUDIO_DTS_GAP_DETECT: "LARGE_AUDIO_DTS_GAP_DETECT",
  AUDIO_GAP_DETECT: "AUDIO_GAP_DETECT",
  AUDIO_OVERLAP_DETECT: "AUDIO_OVERLAP_DETECT",
  MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT: "MAX_DTS_DELTA_WITH_NEXT_SEGMENT_DETECT",
  REAL_TIME_SPEED: "real_time_speed"
};

// node_modules/xgplayer-streaming-shared/es/utils.js
function createPublicPromise() {
  var res, rej;
  var promise = new Promise(function(resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.used = false;
  promise.resolve = function() {
    promise.used = true;
    return res.apply(void 0, arguments);
  };
  promise.reject = function() {
    promise.used = true;
    return rej.apply(void 0, arguments);
  };
  return promise;
}
function nowTime() {
  try {
    return parseInt(performance.now(), 10);
  } catch (e) {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}

// node_modules/xgplayer-streaming-shared/es/buffer.js
var Buffer = function() {
  function Buffer22() {
    _classCallCheck(this, Buffer22);
  }
  _createClass(Buffer22, null, [{
    key: "start",
    value: function start(buf) {
      if (!buf || !buf.length)
        return 0;
      if (buf.length === 1 && buf.end(0) - buf.start(0) < 1e-6)
        return 0;
      if (buf.length === 1 && buf.start(0) < 0)
        return 0;
      return buf.start(0);
    }
  }, {
    key: "end",
    value: function end(buf) {
      if (!buf || !buf.length)
        return 0;
      if (buf.length === 1 && buf.end(0) - buf.start(0) < 1e-6)
        return 0;
      return buf.end(buf.length - 1);
    }
  }, {
    key: "get",
    value: function get(b) {
      if (!b)
        return;
      try {
        return b.buffered;
      } catch (error) {
      }
    }
  }, {
    key: "buffers",
    value: function buffers(buf, maxHole) {
      if (!buf || !buf.length)
        return [];
      var buffers2 = [];
      for (var i = 0, l = buf.length; i < l; i++) {
        var bufLen = buffers2.length;
        if (!bufLen || !maxHole) {
          buffers2.push([buf.start(i), buf.end(i)]);
        } else {
          var last = buffers2[bufLen - 1];
          var lastEnd = last[1];
          var start = buf.start(i);
          if (start - lastEnd <= maxHole) {
            var end = buf.end(i);
            if (end > lastEnd) {
              last[1] = end;
            }
          } else {
            buffers2.push([buf.start(i), buf.end(i)]);
          }
        }
      }
      return buffers2;
    }
  }, {
    key: "totalLength",
    value: function totalLength(buffers) {
      if (!buffers || !buffers.length)
        return 0;
      return buffers.reduce(function(a, c) {
        return a += c[1] - c[0];
      }, 0);
    }
  }, {
    key: "info",
    value: function info(buf) {
      var pos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var maxHole = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      if (!buf || !buf.length)
        return {
          start: 0,
          end: 0,
          buffers: []
        };
      var start = 0;
      var end = 0;
      var index = 0;
      var nextStart = 0;
      var nextEnd = 0;
      var prevStart = 0;
      var prevEnd = 0;
      var buffers = Buffer22.buffers(buf, maxHole);
      for (var i = 0, l = buffers.length; i < l; i++) {
        var item = buffers[i];
        if (pos + maxHole >= item[0] && pos <= item[1]) {
          start = item[0];
          end = item[1];
          index = i;
        } else if (pos + maxHole < item[0]) {
          nextStart = item[0];
          nextEnd = item[1];
          break;
        } else if (pos + maxHole > item[1]) {
          prevStart = item[0];
          prevEnd = item[1];
        }
      }
      return {
        start,
        end,
        index,
        buffers,
        nextStart,
        nextEnd,
        prevStart,
        prevEnd,
        currentTime: pos,
        behind: pos - start,
        remaining: end ? end - pos : 0,
        length: Buffer22.totalLength && Buffer22.totalLength(buffers)
      };
    }
  }]);
  return Buffer22;
}();

// node_modules/xgplayer-streaming-shared/es/env.js
var isBrowser = typeof window !== "undefined";

// node_modules/xgplayer-streaming-shared/es/logger.js
var LogCacheLevel = {
  "DEBUG": 1,
  "LOG": 2,
  "WARN": 3,
  "ERROR": 4
};
var LOG_MAX_SIZE = 200 * 1024;
var SIMPLE_TYPE = ["Boolean", "Number", "String", "Undefined", "Null", "Date", "Object"];
var Logger = function() {
  function Logger22(name, config) {
    _classCallCheck(this, Logger22);
    this.name = name || "";
    this._prefix = "[".concat(this.name, "]");
    Logger22.disabled = (config === null || config === void 0 ? void 0 : config.disabled) || true;
    this.logCacheLevel = (config === null || config === void 0 ? void 0 : config.logCacheLevel) || 3;
    this.logMaxSize = (config === null || config === void 0 ? void 0 : config.logMaxSize) || LOG_MAX_SIZE;
    this.logSize = 0;
    this.logTextArray = [];
  }
  _createClass(Logger22, [{
    key: "debug",
    value: function debug() {
      var _console;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this.logCache.apply(this, [LogCacheLevel.DEBUG].concat(args));
      if (Logger22.disabled)
        return;
      (_console = console).debug.apply(_console, [this._prefix, nowTime2()].concat(args));
    }
  }, {
    key: "log",
    value: function log() {
      var _console2;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this.logCache.apply(this, [LogCacheLevel.LOG].concat(args));
      if (Logger22.disabled)
        return;
      (_console2 = console).log.apply(_console2, [this._prefix, nowTime2()].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      var _console3;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this.logCache.apply(this, [LogCacheLevel.WARN].concat(args));
      if (Logger22.disabled)
        return;
      (_console3 = console).warn.apply(_console3, [this._prefix, nowTime2()].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      var _console4;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this.logCache.apply(this, [LogCacheLevel.ERROR].concat(args));
      if (Logger22.disabled)
        return;
      (_console4 = console).error.apply(_console4, [this._prefix, nowTime2()].concat(args));
    }
  }, {
    key: "logCache",
    value: function logCache(logCacheLevel) {
      if (logCacheLevel < this.logCacheLevel)
        return;
      var text = "";
      try {
        for (var _len5 = arguments.length, logText = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
          logText[_key5 - 1] = arguments[_key5];
        }
        var finLogText = logText.map(function(item) {
          return logable(item);
        });
        text = this._prefix + nowTime2() + JSON.stringify(finLogText);
      } catch (e) {
        return;
      }
      if (logCacheLevel >= this.logCacheLevel) {
        this.logSize += text.length;
        this.logTextArray.push(text);
      }
      if (this.logSize > this.logMaxSize) {
        var delLog = this.logTextArray.shift();
        this.logSize -= delLog.length;
      }
    }
  }, {
    key: "getLogCache",
    value: function getLogCache() {
      var logText = this.logTextArray.join("\n");
      this.reset();
      return logText;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.logTextArray = [];
      this.logSize = 0;
    }
  }, {
    key: "table",
    value: function table() {
      var _console5;
      if (Logger22.disabled)
        return;
      console.group(this._prefix);
      (_console5 = console).table.apply(_console5, arguments);
      console.groupEnd();
    }
  }, {
    key: "setLogLevel",
    value: function setLogLevel(val) {
      this.logCacheLevel = val;
    }
  }], [{
    key: "enable",
    value: function enable() {
      Logger22.disabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      Logger22.disabled = true;
    }
  }]);
  return Logger22;
}();
_defineProperty(Logger, "disabled", true);
function nowTime2() {
  return (/* @__PURE__ */ new Date()).toLocaleString();
}
function reduceDepth(val) {
  if (_typeof(val) !== "object") {
    return val;
  }
  var objType = Object.prototype.toString.call(val).slice(8, -1);
  switch (objType) {
    case "Array":
    case "Uint8Array":
    case "ArrayBuffer":
      return objType + "[" + val.length + "]";
    case "Object":
      return "{}";
    default:
      return objType;
  }
}
function logable(obj, maxDepth, depth) {
  if (!depth)
    depth = 1;
  if (!maxDepth)
    maxDepth = 2;
  var result = {};
  if (!obj || _typeof(obj) !== "object") {
    return obj;
  }
  var objType = Object.prototype.toString.call(obj).slice(8, -1);
  if (!SIMPLE_TYPE.includes(objType)) {
    return objType;
  }
  if (depth > maxDepth) {
    return void 0;
  }
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (depth === maxDepth) {
        result[key] = reduceDepth(obj[key]);
      } else if (_typeof(obj[key]) === "object") {
        result[key] = logable(obj[key], maxDepth, depth + 1);
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}

// node_modules/xgplayer-streaming-shared/es/mse.js
function getMediaSource() {
  try {
    return isBrowser ? window.MediaSource : null;
  } catch (e) {
  }
}
var MediaSource = getMediaSource();
var OP_NAME = {
  APPEND: "appendBuffer",
  REMOVE: "removeBuffer",
  UPDATE_DURATION: "updateDuration"
};
var MSEError = function(_Error) {
  _inherits(MSEError2, _Error);
  var _super = _createSuper(MSEError2);
  function MSEError2(type, msg) {
    var _this;
    _classCallCheck(this, MSEError2);
    _this = _super.call(this, msg || type);
    _this.type = type;
    _this.msg = msg;
    return _this;
  }
  return _createClass(MSEError2);
}(_wrapNativeSuper(Error));
var MSE = function() {
  function MSE2(media, config) {
    var _this2 = this;
    _classCallCheck(this, MSE2);
    _defineProperty(this, "media", null);
    _defineProperty(this, "mediaSource", null);
    _defineProperty(this, "_openPromise", createPublicPromise());
    _defineProperty(this, "_queue", /* @__PURE__ */ Object.create(null));
    _defineProperty(this, "_sourceBuffer", /* @__PURE__ */ Object.create(null));
    _defineProperty(this, "_mseFullFlag", {});
    _defineProperty(this, "_st", 0);
    _defineProperty(this, "_opst", 0);
    _defineProperty(this, "_logger", null);
    _defineProperty(this, "_config", null);
    _defineProperty(this, "_url", null);
    _defineProperty(this, "_onSBUpdateEnd", function(type) {
      var queue = _this2._queue[type];
      if (queue) {
        var op = queue[0];
        if (!((op === null || op === void 0 ? void 0 : op.opName) === OP_NAME.UPDATE_DURATION)) {
          queue.shift();
        }
        if (op) {
          var costtime = nowTime() - _this2._opst;
          _this2._logger.debug("UpdateEnd", op.opName, costtime, op.context);
          op.promise.resolve({
            name: op.opName,
            context: op.context,
            costtime
          });
          _this2._startQueue(type);
        }
      }
    });
    _defineProperty(this, "_onSBUpdateError", function(type, event) {
      var queue = _this2._queue[type];
      if (queue) {
        var op = queue[0];
        if (op) {
          _this2._logger.error("UpdateError", type, op.opName, op.context);
          op.promise.reject(new StreamingError(ERR.MEDIA, ERR.SUB_TYPES.MSE_APPEND_BUFFER, event));
        }
      }
    });
    this._config = Object.assign(MSE2.getDefaultConfig(), config);
    if (media)
      this.bindMedia(media);
    this._logger = new Logger("MSE");
    if (this._config.openLog) {
      Logger.enable();
    }
  }
  _createClass(MSE2, [{
    key: "isOpened",
    get: function get() {
      var _this$mediaSource;
      return ((_this$mediaSource = this.mediaSource) === null || _this$mediaSource === void 0 ? void 0 : _this$mediaSource.readyState) === "open";
    }
  }, {
    key: "url",
    get: function get() {
      return this._url;
    }
  }, {
    key: "duration",
    get: function get() {
      var _this$mediaSource2;
      return ((_this$mediaSource2 = this.mediaSource) === null || _this$mediaSource2 === void 0 ? void 0 : _this$mediaSource2.duration) || -1;
    }
  }, {
    key: "isEnded",
    get: function get() {
      return this.mediaSource ? this.mediaSource.readyState === "ended" : false;
    }
  }, {
    key: "isFull",
    value: function isFull(type) {
      return type ? this._mseFullFlag[type] : this._mseFullFlag[MSE2.VIDEO];
    }
  }, {
    key: "updateDuration",
    value: function updateDuration(duration) {
      var _this3 = this;
      var isReduceDuration = this.mediaSource && this.mediaSource.duration > duration;
      if (this.mediaSource && this.mediaSource.duration > duration) {
        var bufferEnd = 0;
        Object.keys(this._sourceBuffer).forEach(function(k) {
          try {
            bufferEnd = Math.max(_this3.bufferEnd(k) || 0, bufferEnd);
          } catch (error) {
          }
        });
        if (duration < bufferEnd) {
          return Promise.resolve();
        }
      }
      return this._enqueueBlockingOp(function() {
        if (_this3.isEnded) {
          _this3._logger.debug("[debug mse] setDuration ended");
          return;
        }
        if (_this3.mediaSource) {
          _this3.mediaSource.duration = duration;
          _this3._logger.debug("[debug mse] setDuration");
        }
      }, OP_NAME.UPDATE_DURATION, {
        isReduceDuration
      });
    }
  }, {
    key: "open",
    value: function open() {
      var _this4 = this;
      if (this._openPromise.used && !this.isOpened && this.mediaSource) {
        var ms = this.mediaSource;
        var onOpen = function onOpen2() {
          var costtime = nowTime() - _this4._st;
          _this4._logger.debug("MSE OPEN", costtime);
          ms.removeEventListener("sourceopen", onOpen2);
          _this4._openPromise.resolve({
            costtime
          });
        };
        ms.addEventListener("sourceopen", onOpen);
        this._openPromise = createPublicPromise();
      }
      return this._openPromise;
    }
  }, {
    key: "bindMedia",
    value: function() {
      var _bindMedia = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(media) {
        var _this5 = this;
        var ms, onOpen;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.mediaSource || this.media)) {
                  _context.next = 3;
                  break;
                }
                _context.next = 3;
                return this.unbindMedia();
              case 3:
                if (!(!media || !MediaSource)) {
                  _context.next = 5;
                  break;
                }
                throw new Error("Param media or MediaSource does not exist");
              case 5:
                this.media = media;
                ms = this.mediaSource = new MediaSource();
                this._st = nowTime();
                onOpen = function onOpen2() {
                  var costtime = nowTime() - _this5._st;
                  _this5._logger.debug("MSE OPEN");
                  ms.removeEventListener("sourceopen", onOpen2);
                  URL.revokeObjectURL(media.src);
                  _this5._openPromise.resolve({
                    costtime
                  });
                };
                ms.addEventListener("sourceopen", onOpen);
                this._url = URL.createObjectURL(ms);
                media.src = this._url;
                return _context.abrupt("return", this._openPromise);
              case 13:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function bindMedia(_x) {
        return _bindMedia.apply(this, arguments);
      }
      return bindMedia;
    }()
  }, {
    key: "unbindMedia",
    value: function() {
      var _unbindMedia = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        var _this6 = this;
        var ms, hasMetadata, mseOpen;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._openPromise.used)
                  this._openPromise.resolve();
                ms = this.mediaSource;
                if (ms) {
                  Object.keys(this._queue).forEach(function(t) {
                    var queue = _this6._queue[t];
                    if (queue) {
                      queue.forEach(function(x2) {
                        return x2.promise.resolve;
                      });
                    }
                  });
                  hasMetadata = !!this.media && this.media.readyState >= 1;
                  mseOpen = ms.readyState === "open";
                  if (hasMetadata && mseOpen) {
                    try {
                      ms.endOfStream();
                    } catch (error) {
                    }
                  }
                  Object.keys(this._sourceBuffer).forEach(function(k) {
                    try {
                      ms.removeSourceBuffer(_this6._sourceBuffer[k]);
                    } catch (error) {
                    }
                  });
                }
                if (this.media) {
                  this.media.removeAttribute("src");
                  try {
                    this.media.load();
                  } catch (error) {
                  }
                  this.media = null;
                }
                this.mediaSource = null;
                this._openPromise = createPublicPromise();
                this._queue = /* @__PURE__ */ Object.create(null);
                this._sourceBuffer = /* @__PURE__ */ Object.create(null);
              case 8:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this);
      }));
      function unbindMedia() {
        return _unbindMedia.apply(this, arguments);
      }
      return unbindMedia;
    }()
  }, {
    key: "createSource",
    value: function createSource(type, mimeType) {
      if (this._sourceBuffer[type] || !this.mediaSource)
        return;
      var sb;
      try {
        sb = this._sourceBuffer[type] = this.mediaSource.addSourceBuffer(mimeType);
      } catch (error) {
        throw new StreamingError(ERR.MEDIA, ERR.SUB_TYPES.MSE_ADD_SB, error);
      }
      sb.mimeType = mimeType;
      sb.addEventListener("updateend", this._onSBUpdateEnd.bind(this, type));
      sb.addEventListener("error", this._onSBUpdateError.bind(this, type));
    }
  }, {
    key: "changeType",
    value: function changeType(type, mimeType) {
      var _this7 = this;
      var sb = this._sourceBuffer[type];
      if (!this.mediaSource || !sb || sb.mimeType === mimeType)
        return Promise.resolve();
      if (typeof sb.changeType !== "function")
        return Promise.reject();
      return this._enqueueOp(type, function() {
        sb.changeType(mimeType);
        sb.mimeType = mimeType;
        _this7._onSBUpdateEnd(type);
      }, "changeType", {
        mimeType
      });
    }
  }, {
    key: "createOrChangeSource",
    value: function createOrChangeSource(type, mimeType) {
      this.createSource(type, mimeType);
      return this.changeType(type, mimeType);
    }
  }, {
    key: "append",
    value: function append(type, buffer, context) {
      var _this8 = this;
      if (!buffer || !buffer.byteLength) {
        return Promise.resolve();
      }
      if (!this._sourceBuffer[type])
        return Promise.resolve();
      return this._enqueueOp(type, function() {
        var _this8$_sourceBuffer$;
        if (!_this8.mediaSource || _this8.media.error)
          return;
        _this8._logger.debug("MSE APPEND START", context);
        _this8._opst = nowTime();
        (_this8$_sourceBuffer$ = _this8._sourceBuffer[type]) === null || _this8$_sourceBuffer$ === void 0 ? void 0 : _this8$_sourceBuffer$.appendBuffer(buffer);
      }, OP_NAME.APPEND, context);
    }
  }, {
    key: "remove",
    value: function remove(type, startTime, endTime, context) {
      var _this9 = this;
      var isInsertHead = false;
      if (this._mseFullFlag[type]) {
        isInsertHead = true;
      }
      return this._enqueueOp(type, function() {
        if (!_this9.mediaSource || _this9.media.error)
          return;
        var sb = _this9._sourceBuffer[type];
        if (startTime >= endTime || !sb) {
          _this9._onSBUpdateEnd(type);
          return;
        }
        _this9._opst = nowTime();
        _this9._logger.debug("MSE REMOVE START", type, startTime, endTime, context);
        sb.remove(startTime, endTime);
      }, OP_NAME.REMOVE, context, isInsertHead);
    }
  }, {
    key: "clearBuffer",
    value: function clearBuffer(startTime, endTime) {
      var _this10 = this;
      var p;
      Object.keys(this._sourceBuffer).forEach(function(k) {
        p = _this10._enqueueOp(k, function() {
          if (!_this10.mediaSource || _this10.media.error)
            return;
          var sb = _this10._sourceBuffer[k];
          _this10._logger.debug("MSE clearBuffer START", k, startTime, endTime);
          sb.remove(startTime, endTime);
        }, OP_NAME.REMOVE);
      });
      return p;
    }
  }, {
    key: "clearAllBuffer",
    value: function clearAllBuffer() {
      var _this11 = this;
      var p;
      Object.keys(this._sourceBuffer).forEach(function(k) {
        p = _this11._enqueueOp(k, function() {
          if (!_this11.mediaSource || _this11.media.error)
            return;
          var sb = _this11._sourceBuffer[k];
          _this11._logger.debug("MSE clearAllBuffer START", k);
          sb.remove(0, Buffer.end(Buffer.get(sb)));
        });
      });
      return p;
    }
  }, {
    key: "clearOpQueues",
    value: function clearOpQueues(type, allClear) {
      var _this$_queue$type;
      this._logger.debug("MSE clearOpQueue START");
      var queue = this._queue[type];
      if (allClear && queue) {
        this._queue[type] = [];
        return;
      }
      if (!queue || !queue[type] || queue.length < 5)
        return;
      var initOpque = [];
      queue.forEach(function(op) {
        if (op.context && op.context.isinit) {
          initOpque.push(op);
        }
      });
      this._queue[type] = queue.slice(0, 2);
      initOpque.length > 0 && (_this$_queue$type = this._queue[type]).push.apply(_this$_queue$type, initOpque);
    }
  }, {
    key: "endOfStream",
    value: function endOfStream(reason) {
      var _this12 = this;
      if (!this.mediaSource || this.mediaSource.readyState !== "open")
        return Promise.resolve();
      return this._enqueueBlockingOp(function() {
        var ms = _this12.mediaSource;
        if (!ms || ms.readyState !== "open")
          return;
        _this12._logger.debug("MSE endOfStream START");
        if (reason) {
          ms.endOfStream(reason);
        } else {
          ms.endOfStream();
        }
      }, "endOfStream");
    }
  }, {
    key: "setLiveSeekableRange",
    value: function setLiveSeekableRange(start, end) {
      var ms = this.mediaSource;
      if (start < 0 || end < start || !(ms !== null && ms !== void 0 && ms.setLiveSeekableRange) || ms.readyState !== "open")
        return;
      ms.setLiveSeekableRange(start, end);
    }
  }, {
    key: "getSourceBuffer",
    value: function getSourceBuffer(type) {
      return this._sourceBuffer[type];
    }
  }, {
    key: "buffered",
    value: function buffered(type) {
      return Buffer.get(this._sourceBuffer[type]);
    }
  }, {
    key: "bufferStart",
    value: function bufferStart(type) {
      return Buffer.start(this.buffered(type));
    }
  }, {
    key: "bufferEnd",
    value: function bufferEnd(type) {
      return Buffer.end(this.buffered(type));
    }
  }, {
    key: "_enqueueOp",
    value: function _enqueueOp(type, exec, opName, context, isInsertHead) {
      var _this13 = this;
      if (!this.mediaSource)
        return Promise.resolve();
      var queue = this._queue[type] = this._queue[type] || [];
      var op = {
        exec,
        promise: createPublicPromise(),
        opName,
        context
      };
      if (isInsertHead) {
        queue.splice(0, 0, op);
        this._mseFullFlag[type] = false;
        this._startQueue(type);
      } else {
        queue.push(op);
      }
      if (this.isOpened || this.isEnded) {
        if (queue.length === 1) {
          this._startQueue(type);
        }
      } else {
        this._openPromise.then(function() {
          if (queue.length === 1) {
            _this13._startQueue(type);
          }
        });
      }
      return op.promise;
    }
  }, {
    key: "_enqueueBlockingOp",
    value: function() {
      var _enqueueBlockingOp2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3(exec, opName, context) {
        var _this14 = this;
        var types, waiters;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.mediaSource) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt("return", Promise.resolve());
              case 2:
                types = Object.keys(this._sourceBuffer);
                if (types.length) {
                  _context3.next = 5;
                  break;
                }
                return _context3.abrupt("return", exec());
              case 5:
                waiters = [];
                types.forEach(function(t) {
                  var queue = _this14._queue[t];
                  var prom = createPublicPromise();
                  waiters.push(prom);
                  queue.push({
                    exec: function exec2() {
                      prom.resolve();
                    },
                    promise: prom,
                    opName,
                    context
                  });
                  if (queue.length === 1) {
                    _this14._startQueue(t);
                  }
                });
                return _context3.abrupt("return", Promise.all(waiters).then(function() {
                  try {
                    return exec();
                  } finally {
                    types.forEach(function(t) {
                      var queue = _this14._queue[t];
                      var sb = _this14._sourceBuffer[t];
                      queue === null || queue === void 0 ? void 0 : queue.shift();
                      if (!sb || !sb.updating) {
                        _this14._startQueue(t);
                      }
                    });
                  }
                }));
              case 8:
              case "end":
                return _context3.stop();
            }
        }, _callee3, this);
      }));
      function _enqueueBlockingOp(_x2, _x3, _x4) {
        return _enqueueBlockingOp2.apply(this, arguments);
      }
      return _enqueueBlockingOp;
    }()
  }, {
    key: "_startQueue",
    value: function _startQueue(type) {
      var queue = this._queue[type];
      if (queue) {
        var op = queue[0];
        if (op && !this._mseFullFlag[type]) {
          try {
            op.exec();
          } catch (error) {
            if (error && error.message && error.message.indexOf("SourceBuffer is full") >= 0) {
              this._mseFullFlag[type] = true;
              this._logger.error("[MSE error],  context,", op.context, " ,name,", op.opName, ",err,SourceBuffer is full");
              op.promise.reject(new StreamingError(ERR.MEDIA, ERR.SUB_TYPES.MSE_FULL, error));
            } else {
              this._logger.error(error);
              op.promise.reject(new StreamingError(ERR.MEDIA, ERR.SUB_TYPES.MSE_OTHER, error));
              queue.shift();
              this._startQueue(type);
            }
          }
        }
      }
    }
  }, {
    key: "setTimeoffset",
    value: function setTimeoffset(type, timestampOffset, context) {
      var _this15 = this;
      return this._enqueueOp(type, function() {
        if (timestampOffset < 0) {
          timestampOffset += 1e-3;
        }
        _this15._sourceBuffer[type].timestampOffset = timestampOffset;
        _this15._onSBUpdateEnd(type);
      }, "setTimeoffset", context);
    }
  }, {
    key: "abort",
    value: function abort(type, context) {
      var _this16 = this;
      if (!this.isOpened) {
        return Promise.resolve();
      }
      return this._enqueueOp(type, function() {
        _this16._sourceBuffer[type].abort();
        _this16._onSBUpdateEnd(type);
      }, "abort", context);
    }
  }], [{
    key: "getDefaultConfig",
    value: function getDefaultConfig() {
      return {
        openLog: false
      };
    }
  }, {
    key: "isSupported",
    value: function isSupported() {
      var mime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"';
      if (!MediaSource)
        return false;
      try {
        return MediaSource.isTypeSupported(mime);
      } catch (error) {
        this._logger.error(mime, error);
        return false;
      }
    }
  }]);
  return MSE2;
}();
_defineProperty(MSE, "VIDEO", "video");
_defineProperty(MSE, "AUDIO", "audio");

// node_modules/xgplayer-streaming-shared/es/net/types.js
var LoaderType = {
  FETCH: "fetch",
  XHR: "xhr"
};
var ResponseType = {
  ARRAY_BUFFER: "arraybuffer",
  TEXT: "text",
  JSON: "json"
};

// node_modules/xgplayer-streaming-shared/es/net/error.js
var NetError = function(_Error) {
  _inherits(NetError2, _Error);
  var _super = _createSuper(NetError2);
  function NetError2(url, request, response, msg) {
    var _this;
    _classCallCheck(this, NetError2);
    _this = _super.call(this, msg);
    _defineProperty(_assertThisInitialized(_this), "retryCount", 0);
    _defineProperty(_assertThisInitialized(_this), "isTimeout", false);
    _defineProperty(_assertThisInitialized(_this), "loaderType", LoaderType.FETCH);
    _defineProperty(_assertThisInitialized(_this), "startTime", 0);
    _defineProperty(_assertThisInitialized(_this), "endTime", 0);
    _defineProperty(_assertThisInitialized(_this), "options", {});
    _this.url = url;
    _this.request = request;
    _this.response = response;
    return _this;
  }
  return _createClass(NetError2);
}(_wrapNativeSuper(Error));

// node_modules/xgplayer-streaming-shared/es/is.js
var toString = Object.prototype.toString;
function isObject(a) {
  return a !== null && _typeof(a) === "object";
}
function isPlainObject(val) {
  if (toString.call(val) !== "[object Object]") {
    return false;
  }
  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
function isDate(a) {
  return toString.call(a) === "[object Date]";
}

// node_modules/xgplayer-streaming-shared/es/net/helper.js
function getRangeValue(value) {
  if (!value || value[0] === null || value[0] === void 0 || value[0] === 0 && (value[1] === null || value[1] === void 0)) {
    return;
  }
  var ret = "bytes=" + value[0] + "-";
  if (value[1])
    ret += value[1];
  return ret;
}
function encode(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function setUrlParams(url, params) {
  if (!url)
    return;
  if (!params)
    return url;
  var v;
  var str = Object.keys(params).map(function(k) {
    v = params[k];
    if (v === null || v === void 0)
      return;
    if (Array.isArray(v)) {
      k = k + "[]";
    } else {
      v = [v];
    }
    return v.map(function(x2) {
      if (isDate(x2)) {
        x2 = x2.toISOString();
      } else if (isObject(x2)) {
        x2 = JSON.stringify(x2);
      }
      return "".concat(encode(k), "=").concat(encode(x2));
    }).join("&");
  }).filter(Boolean).join("&");
  if (str) {
    var hashIndex = url.indexOf("#");
    if (hashIndex !== -1) {
      url = url.slice(0, hashIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + str;
  }
  return url;
}
function createResponse(data, done, response, contentLength, age, startTime, firstByteTime, index, range, vid, priOptions) {
  age = age !== null && age !== void 0 ? parseFloat(age) : null;
  contentLength = parseInt(contentLength || "0", 10);
  if (Number.isNaN(contentLength))
    contentLength = 0;
  var options = {
    range,
    vid,
    index,
    contentLength,
    age,
    startTime,
    firstByteTime,
    endTime: Date.now(),
    priOptions
  };
  return {
    data,
    done,
    options,
    response
  };
}
function calculateSpeed(byteLen, millisec) {
  return Math.round(byteLen * 8 * 1e3 / millisec / 1024);
}

// node_modules/xgplayer-streaming-shared/es/net/fetch.js
var import_eventemitter3 = __toESM(require_eventemitter3());
var CACHESIZE = 2 * 1024 * 1024;
var FetchLoader = function(_EventEmitter) {
  _inherits(FetchLoader2, _EventEmitter);
  var _super = _createSuper(FetchLoader2);
  function FetchLoader2() {
    var _this;
    _classCallCheck(this, FetchLoader2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_abortController", null);
    _defineProperty(_assertThisInitialized(_this), "_timeoutTimer", null);
    _defineProperty(_assertThisInitialized(_this), "_reader", null);
    _defineProperty(_assertThisInitialized(_this), "_response", null);
    _defineProperty(_assertThisInitialized(_this), "_aborted", false);
    _defineProperty(_assertThisInitialized(_this), "_index", -1);
    _defineProperty(_assertThisInitialized(_this), "_range", null);
    _defineProperty(_assertThisInitialized(_this), "_receivedLength", 0);
    _defineProperty(_assertThisInitialized(_this), "_running", false);
    _defineProperty(_assertThisInitialized(_this), "_logger", null);
    _defineProperty(_assertThisInitialized(_this), "_vid", "");
    _defineProperty(_assertThisInitialized(_this), "_onProcessMinLen", 0);
    _defineProperty(_assertThisInitialized(_this), "_onCancel", null);
    _defineProperty(_assertThisInitialized(_this), "_priOptions", null);
    return _this;
  }
  _createClass(FetchLoader2, [{
    key: "load",
    value: function load(_ref) {
      var _this$_abortControlle, _this2 = this;
      var url = _ref.url, vid = _ref.vid, timeout = _ref.timeout, responseType = _ref.responseType, onProgress = _ref.onProgress, index = _ref.index, onTimeout = _ref.onTimeout, onCancel = _ref.onCancel, range = _ref.range, transformResponse = _ref.transformResponse, request = _ref.request, params = _ref.params, logger3 = _ref.logger, method = _ref.method, headers = _ref.headers, body = _ref.body, mode = _ref.mode, credentials = _ref.credentials, cache = _ref.cache, redirect = _ref.redirect, referrer = _ref.referrer, referrerPolicy = _ref.referrerPolicy, onProcessMinLen = _ref.onProcessMinLen, priOptions = _ref.priOptions;
      this._logger = logger3;
      this._aborted = false;
      this._onProcessMinLen = onProcessMinLen;
      this._onCancel = onCancel;
      this._abortController = typeof AbortController !== "undefined" && new AbortController();
      this._running = true;
      this._index = index;
      this._range = range || [0, 0];
      this._vid = vid || url;
      this._priOptions = priOptions || {};
      var init = {
        method,
        headers,
        body,
        mode,
        credentials,
        cache,
        redirect,
        referrer,
        referrerPolicy,
        signal: (_this$_abortControlle = this._abortController) === null || _this$_abortControlle === void 0 ? void 0 : _this$_abortControlle.signal
      };
      var isTimeout = false;
      clearTimeout(this._timeoutTimer);
      url = setUrlParams(url, params);
      var rangeValue = getRangeValue(range);
      if (rangeValue) {
        if (request) {
          headers = request.headers;
        } else {
          headers = init.headers = init.headers || (Headers ? new Headers() : {});
        }
        if (Headers && headers instanceof Headers) {
          headers.append("Range", rangeValue);
        } else {
          headers.Range = rangeValue;
        }
      }
      if (timeout) {
        this._timeoutTimer = setTimeout(function() {
          isTimeout = true;
          _this2.cancel();
          if (onTimeout) {
            var error = new NetError(url, init, null, "timeout");
            error.isTimeout = true;
            onTimeout(error, {
              index: _this2._index,
              range: _this2._range,
              vid: _this2._vid,
              priOptions: _this2._priOptions
            });
          }
        }, timeout);
      }
      var startTime = Date.now();
      this._logger.debug("[fetch load start], index,", index, ",range,", range);
      return new Promise(function(resolve, reject) {
        fetch(request || url, request ? void 0 : init).then(function() {
          var _ref2 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee(response) {
            var firstByteTime, data, costTime, speed;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1)
                switch (_context.prev = _context.next) {
                  case 0:
                    clearTimeout(_this2._timeoutTimer);
                    _this2._response = response;
                    if (!(_this2._aborted || !_this2._running)) {
                      _context.next = 4;
                      break;
                    }
                    return _context.abrupt("return");
                  case 4:
                    if (transformResponse) {
                      response = transformResponse(response, url) || response;
                    }
                    if (response.ok) {
                      _context.next = 7;
                      break;
                    }
                    throw new NetError(url, init, response, "bad network response");
                  case 7:
                    firstByteTime = Date.now();
                    if (!(responseType === ResponseType.TEXT)) {
                      _context.next = 15;
                      break;
                    }
                    _context.next = 11;
                    return response.text();
                  case 11:
                    data = _context.sent;
                    _this2._running = false;
                    _context.next = 37;
                    break;
                  case 15:
                    if (!(responseType === ResponseType.JSON)) {
                      _context.next = 22;
                      break;
                    }
                    _context.next = 18;
                    return response.json();
                  case 18:
                    data = _context.sent;
                    _this2._running = false;
                    _context.next = 37;
                    break;
                  case 22:
                    if (!onProgress) {
                      _context.next = 29;
                      break;
                    }
                    _this2.resolve = resolve;
                    _this2.reject = reject;
                    _this2._loadChunk(response, onProgress, startTime, firstByteTime);
                    return _context.abrupt("return");
                  case 29:
                    _context.next = 31;
                    return response.arrayBuffer();
                  case 31:
                    data = _context.sent;
                    data = new Uint8Array(data);
                    _this2._running = false;
                    costTime = Date.now() - startTime;
                    speed = calculateSpeed(data.byteLength, costTime);
                    _this2.emit(EVENT.REAL_TIME_SPEED, {
                      speed,
                      len: data.byteLength,
                      time: costTime,
                      vid: _this2._vid,
                      index: _this2._index,
                      range: _this2._range,
                      priOptions: _this2._priOptions
                    });
                  case 37:
                    _this2._logger.debug("[fetch load end], index,", index, ",range,", range);
                    resolve(createResponse(data, true, response, response.headers.get("Content-Length"), response.headers.get("age"), startTime, firstByteTime, index, range, _this2._vid, _this2._priOptions));
                  case 39:
                  case "end":
                    return _context.stop();
                }
            }, _callee);
          }));
          return function(_x) {
            return _ref2.apply(this, arguments);
          };
        }()).catch(function(error) {
          var _error;
          clearTimeout(_this2._timeoutTimer);
          _this2._running = false;
          if (_this2._aborted && !isTimeout)
            return;
          error = error instanceof NetError ? error : new NetError(url, init, null, (_error = error) === null || _error === void 0 ? void 0 : _error.message);
          error.startTime = startTime;
          error.endTime = Date.now();
          error.isTimeout = isTimeout;
          error.options = {
            index: _this2._index,
            range: _this2._range,
            vid: _this2._vid,
            priOptions: _this2._priOptions
          };
          reject(error);
        });
      });
    }
  }, {
    key: "cancel",
    value: function() {
      var _cancel = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this._aborted) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                this._aborted = true;
                this._running = false;
                if (!this._response) {
                  _context2.next = 14;
                  break;
                }
                _context2.prev = 5;
                if (!this._reader) {
                  _context2.next = 9;
                  break;
                }
                _context2.next = 9;
                return this._reader.cancel();
              case 9:
                _context2.next = 13;
                break;
              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2["catch"](5);
              case 13:
                this._response = this._reader = null;
              case 14:
                if (this._abortController) {
                  try {
                    this._abortController.abort();
                  } catch (error) {
                  }
                  this._abortController = null;
                }
                if (this._onCancel) {
                  this._onCancel({
                    index: this._index,
                    range: this._range,
                    vid: this._vid,
                    priOptions: this._priOptions
                  });
                }
              case 16:
              case "end":
                return _context2.stop();
            }
        }, _callee2, this, [[5, 11]]);
      }));
      function cancel() {
        return _cancel.apply(this, arguments);
      }
      return cancel;
    }()
  }, {
    key: "_loadChunk",
    value: function _loadChunk(response, onProgress, st, firstByteTime) {
      var _this3 = this;
      if (!response.body || !response.body.getReader) {
        this._running = false;
        var err = new NetError(response.url, "", response, "onProgress of bad response.body.getReader");
        err.options = {
          index: this._index,
          range: this._range,
          vid: this._vid,
          priOptions: this._priOptions
        };
        this.reject(err);
        return;
      }
      if (this._onProcessMinLen > 0) {
        this._cache = new Uint8Array(CACHESIZE);
        this._writeIdx = 0;
      }
      var reader = this._reader = response.body.getReader();
      var data;
      var startTime;
      var endTime;
      var pump = function() {
        var _ref3 = _asyncToGenerator(_regeneratorRuntime().mark(function _callee3() {
          var _this3$_range;
          var startRange, startByte, curLen, retData, temp, costTime, speed;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1)
              switch (_context3.prev = _context3.next) {
                case 0:
                  startTime = Date.now();
                  _context3.prev = 1;
                  _context3.next = 4;
                  return reader.read();
                case 4:
                  data = _context3.sent;
                  endTime = Date.now();
                  _context3.next = 13;
                  break;
                case 8:
                  _context3.prev = 8;
                  _context3.t0 = _context3["catch"](1);
                  endTime = Date.now();
                  if (!_this3._aborted) {
                    _this3._running = false;
                    _context3.t0.options = {
                      index: _this3._index,
                      range: _this3._range,
                      vid: _this3._vid,
                      priOptions: _this3._priOptions
                    };
                    _this3.reject(_context3.t0);
                  }
                  return _context3.abrupt("return");
                case 13:
                  startRange = ((_this3$_range = _this3._range) === null || _this3$_range === void 0 ? void 0 : _this3$_range.length) > 0 ? _this3._range[0] : 0;
                  startByte = startRange + _this3._receivedLength;
                  if (!_this3._aborted) {
                    _context3.next = 19;
                    break;
                  }
                  _this3._running = false;
                  onProgress(void 0, false, {
                    range: [startByte, startByte],
                    vid: _this3._vid,
                    index: _this3._index,
                    startTime,
                    endTime,
                    st,
                    firstByteTime,
                    priOptions: _this3._priOptions
                  }, response);
                  return _context3.abrupt("return");
                case 19:
                  curLen = data.value ? data.value.byteLength : 0;
                  _this3._receivedLength += curLen;
                  _this3._logger.debug("【fetchLoader,onProgress call】,task,", _this3._range, ", start,", startByte, ", end,", startRange + _this3._receivedLength, ", done,", data.done);
                  if (_this3._onProcessMinLen > 0) {
                    if (_this3._writeIdx + curLen >= _this3._onProcessMinLen || data.done) {
                      retData = new Uint8Array(_this3._writeIdx + curLen);
                      retData.set(_this3._cache.slice(0, _this3._writeIdx), 0);
                      curLen > 0 && retData.set(data.value, _this3._writeIdx);
                      _this3._writeIdx = 0;
                      _this3._logger.debug("【fetchLoader,onProgress enough】,done,", data.done, ",len,", retData.byteLength, ", writeIdx,", _this3._writeIdx);
                    } else {
                      if (curLen > 0 && _this3._writeIdx + curLen < CACHESIZE) {
                        _this3._cache.set(data.value, _this3._writeIdx);
                        _this3._writeIdx += curLen;
                        _this3._logger.debug("【fetchLoader,onProgress cache】,len,", curLen, ", writeIdx,", _this3._writeIdx);
                      } else if (curLen > 0) {
                        temp = new Uint8Array(_this3._writeIdx + curLen + 2048);
                        _this3._logger.debug("【fetchLoader,onProgress extra start】,size,", _this3._writeIdx + curLen + 2048, ", datalen,", curLen, ", writeIdx,", _this3._writeIdx);
                        temp.set(_this3._cache.slice(0, _this3._writeIdx), 0);
                        curLen > 0 && temp.set(data.value, _this3._writeIdx);
                        _this3._writeIdx += curLen;
                        delete _this3._cache;
                        _this3._cache = temp;
                        _this3._logger.debug("【fetchLoader,onProgress extra end】,len,", curLen, ", writeIdx,", _this3._writeIdx);
                      }
                    }
                  } else {
                    retData = data.value;
                  }
                  if (retData && retData.byteLength > 0 || data.done) {
                    onProgress(retData, data.done, {
                      range: [_this3._range[0] + _this3._receivedLength - (retData ? retData.byteLength : 0), _this3._range[0] + _this3._receivedLength],
                      vid: _this3._vid,
                      index: _this3._index,
                      startTime,
                      endTime,
                      st,
                      firstByteTime,
                      priOptions: _this3._priOptions
                    }, response);
                  }
                  if (!data.done) {
                    pump();
                  } else {
                    costTime = Date.now() - st;
                    speed = calculateSpeed(_this3._receivedLength, costTime);
                    _this3.emit(EVENT.REAL_TIME_SPEED, {
                      speed,
                      len: _this3._receivedLength,
                      time: costTime,
                      vid: _this3._vid,
                      index: _this3._index,
                      range: _this3._range,
                      priOptions: _this3._priOptions
                    });
                    _this3._running = false;
                    _this3._logger.debug("[fetchLoader onProgress end],task,", _this3._range, ",done,", data.done);
                    _this3.resolve(createResponse(data, true, response, response.headers.get("Content-Length"), response.headers.get("age"), st, firstByteTime, _this3._index, _this3._range, _this3._vid, _this3._priOptions));
                  }
                case 25:
                case "end":
                  return _context3.stop();
              }
          }, _callee3, null, [[1, 8]]);
        }));
        return function pump2() {
          return _ref3.apply(this, arguments);
        };
      }();
      pump();
    }
  }, {
    key: "receiveLen",
    get: function get() {
      return this._receivedLength;
    }
  }, {
    key: "running",
    get: function get() {
      return this._running;
    },
    set: function set(status) {
      this._running = status;
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return !!(typeof fetch !== "undefined");
    }
  }]);
  return FetchLoader2;
}(import_eventemitter3.default);

// node_modules/xgplayer-streaming-shared/es/net/config.js
function getConfig(cfg) {
  return _objectSpread2({
    loaderType: LoaderType.FETCH,
    retry: 0,
    retryDelay: 0,
    timeout: 0,
    request: null,
    onTimeout: void 0,
    onProgress: void 0,
    onRetryError: void 0,
    transformRequest: void 0,
    transformResponse: void 0,
    transformError: void 0,
    responseType: ResponseType.TEXT,
    range: void 0,
    url: "",
    params: void 0,
    method: "GET",
    headers: {},
    body: void 0,
    mode: void 0,
    credentials: void 0,
    cache: void 0,
    redirect: void 0,
    referrer: void 0,
    referrerPolicy: void 0,
    integrity: void 0,
    onProcessMinLen: 0
  }, cfg);
}

// node_modules/xgplayer-streaming-shared/es/net/xhr.js
var import_eventemitter32 = __toESM(require_eventemitter3());
var XhrLoader = function(_EventEmitter) {
  _inherits(XhrLoader2, _EventEmitter);
  var _super = _createSuper(XhrLoader2);
  function XhrLoader2() {
    var _this;
    _classCallCheck(this, XhrLoader2);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_xhr", null);
    _defineProperty(_assertThisInitialized(_this), "_aborted", false);
    _defineProperty(_assertThisInitialized(_this), "_timeoutTimer", null);
    _defineProperty(_assertThisInitialized(_this), "_range", null);
    _defineProperty(_assertThisInitialized(_this), "_receivedLength", 0);
    _defineProperty(_assertThisInitialized(_this), "_url", null);
    _defineProperty(_assertThisInitialized(_this), "_onProgress", null);
    _defineProperty(_assertThisInitialized(_this), "_index", -1);
    _defineProperty(_assertThisInitialized(_this), "_headers", null);
    _defineProperty(_assertThisInitialized(_this), "_currentChunkSizeKB", 384);
    _defineProperty(_assertThisInitialized(_this), "_timeout", null);
    _defineProperty(_assertThisInitialized(_this), "_xhr", null);
    _defineProperty(_assertThisInitialized(_this), "_withCredentials", null);
    _defineProperty(_assertThisInitialized(_this), "_startTime", -1);
    _defineProperty(_assertThisInitialized(_this), "_loadCompleteResolve", null);
    _defineProperty(_assertThisInitialized(_this), "_loadCompleteReject", null);
    _defineProperty(_assertThisInitialized(_this), "_runing", false);
    _defineProperty(_assertThisInitialized(_this), "_logger", false);
    _defineProperty(_assertThisInitialized(_this), "_vid", "");
    _defineProperty(_assertThisInitialized(_this), "_responseType", void 0);
    _defineProperty(_assertThisInitialized(_this), "_credentials", void 0);
    _defineProperty(_assertThisInitialized(_this), "_method", void 0);
    _defineProperty(_assertThisInitialized(_this), "_transformResponse", void 0);
    _defineProperty(_assertThisInitialized(_this), "_firstRtt", void 0);
    _defineProperty(_assertThisInitialized(_this), "_onCancel", null);
    _defineProperty(_assertThisInitialized(_this), "_priOptions", null);
    return _this;
  }
  _createClass(XhrLoader2, [{
    key: "load",
    value: function load(req) {
      var _this2 = this;
      clearTimeout(this._timeoutTimer);
      this._logger = req.logger;
      this._range = req.range;
      this._onProgress = req.onProgress;
      this._index = req.index;
      this._headers = req.headers;
      this._withCredentials = req.credentials === "include" || req.credentials === "same-origin";
      this._body = req.body || null;
      req.method && (this._method = req.method);
      this._timeout = req.timeout || null;
      this._runing = true;
      this._vid = req.vid || req.url;
      this._responseType = req.responseType;
      this._firstRtt = -1;
      this._onTimeout = req.onTimeout;
      this._onCancel = req.onCancel;
      this._request = req.request;
      this._priOptions = req.priOptions || {};
      this._logger.debug("【xhrLoader task】, range", this._range);
      this._url = setUrlParams(req.url, req.params);
      var startTime = Date.now();
      return new Promise(function(resolve, reject) {
        _this2._loadCompleteResolve = resolve;
        _this2._loadCompleteReject = reject;
        _this2._startLoad();
      }).catch(function(error) {
        clearTimeout(_this2._timeoutTimer);
        _this2._runing = false;
        if (_this2._aborted)
          return;
        error = error instanceof NetError ? error : new NetError(_this2._url, _this2._request);
        error.startTime = startTime;
        error.endTime = Date.now();
        error.options = {
          index: _this2._index,
          vid: _this2._vid,
          priOptions: _this2._priOptions
        };
        throw error;
      });
    }
  }, {
    key: "_startLoad",
    value: function _startLoad() {
      var range = null;
      if (this._responseType === ResponseType.ARRAY_BUFFER && this._range && this._range.length > 1) {
        if (this._onProgress) {
          this._firstRtt = -1;
          var chunkSize = this._currentChunkSizeKB * 1024;
          var from = this._range[0] + this._receivedLength;
          var to = this._range[1];
          if (chunkSize < this._range[1] - from) {
            to = from + chunkSize;
          }
          range = [from, to];
          this._logger.debug("[xhr_loader->],tast :", this._range, ", SubRange, ", range);
        } else {
          range = this._range;
          this._logger.debug("[xhr_loader->],tast :", this._range, ", allRange, ", range);
        }
      }
      this._internalOpen(range);
    }
  }, {
    key: "_internalOpen",
    value: function _internalOpen(range) {
      var _this3 = this;
      try {
        this._startTime = Date.now();
        var xhr = this._xhr = new XMLHttpRequest();
        xhr.open(this._method || "GET", this._url, true);
        xhr.responseType = this._responseType;
        this._timeout && (xhr.timeout = this._timeout);
        xhr.withCredentials = this._withCredentials;
        xhr.onload = this._onLoad.bind(this);
        xhr.onreadystatechange = this._onReadyStatechange.bind(this);
        xhr.onerror = function(errorEvent) {
          var _errorEvent$currentTa, _errorEvent$currentTa2, _errorEvent$currentTa3;
          _this3._running = false;
          var error = new NetError(_this3._url, _this3._request, errorEvent === null || errorEvent === void 0 ? void 0 : (_errorEvent$currentTa = errorEvent.currentTarget) === null || _errorEvent$currentTa === void 0 ? void 0 : _errorEvent$currentTa.response, "xhr.onerror.status:" + (errorEvent === null || errorEvent === void 0 ? void 0 : (_errorEvent$currentTa2 = errorEvent.currentTarget) === null || _errorEvent$currentTa2 === void 0 ? void 0 : _errorEvent$currentTa2.status) + ",statusText," + (errorEvent === null || errorEvent === void 0 ? void 0 : (_errorEvent$currentTa3 = errorEvent.currentTarget) === null || _errorEvent$currentTa3 === void 0 ? void 0 : _errorEvent$currentTa3.statusText));
          error.options = {
            index: _this3._index,
            range: _this3._range,
            vid: _this3._vid,
            priOptions: _this3._priOptions
          };
          _this3._loadCompleteReject(error);
        };
        xhr.ontimeout = function(event) {
          _this3.cancel();
          var error = new NetError(_this3._url, _this3._request, {
            status: 408
          }, "timeout");
          if (_this3._onTimeout) {
            error.isTimeout = true;
            _this3._onTimeout(error, {
              index: _this3._index,
              range: _this3._range,
              vid: _this3._vid,
              priOptions: _this3._priOptions
            });
          }
          error.options = {
            index: _this3._index,
            range: _this3._range,
            vid: _this3._vid,
            priOptions: _this3._priOptions
          };
          _this3._loadCompleteReject(error);
        };
        var headers = this._headers || {};
        var rangeValue = getRangeValue(range);
        if (rangeValue) {
          headers.Range = rangeValue;
        }
        if (headers) {
          Object.keys(headers).forEach(function(k) {
            xhr.setRequestHeader(k, headers[k]);
          });
        }
        this._logger.debug("[xhr.send->] tast,", this._range, ",load sub range, ", range);
        xhr.send(this._body);
      } catch (e) {
        e.options = {
          index: this._index,
          range,
          vid: this._vid,
          priOptions: this._priOptions
        };
        this._loadCompleteReject(e);
      }
    }
  }, {
    key: "_onReadyStatechange",
    value: function _onReadyStatechange(e) {
      var xhr = e.target;
      if (xhr.readyState === 2) {
        this._firstRtt < 0 && (this._firstRtt = Date.now());
      }
    }
  }, {
    key: "_onLoad",
    value: function _onLoad(e) {
      var _this$_range;
      var status = e.target.status;
      if (status < 200 || status > 299) {
        var error = new NetError(this._url, null, _objectSpread2(_objectSpread2({}, e.target.response), {}, {
          status
        }), "bad response,status:" + status);
        error.options = {
          index: this._index,
          range: this._range,
          vid: this._vid,
          priOptions: this._priOptions
        };
        return this._loadCompleteReject(error);
      }
      var data = null;
      var done = false;
      var byteStart;
      var startRange = ((_this$_range = this._range) === null || _this$_range === void 0 ? void 0 : _this$_range.length) > 0 ? this._range[0] : 0;
      if (this._responseType === ResponseType.ARRAY_BUFFER) {
        var _this$_range2;
        var chunk = new Uint8Array(e.target.response);
        byteStart = startRange + this._receivedLength;
        if (chunk && chunk.byteLength > 0) {
          this._receivedLength += chunk.byteLength;
          var costTime = Date.now() - this._startTime;
          var speed = calculateSpeed(this._receivedLength, costTime);
          this.emit(EVENT.REAL_TIME_SPEED, {
            speed,
            len: this._receivedLength,
            time: costTime,
            vid: this._vid,
            index: this._index,
            range: [byteStart, startRange + this._receivedLength],
            priOptions: this._priOptions
          });
        }
        data = chunk;
        if (((_this$_range2 = this._range) === null || _this$_range2 === void 0 ? void 0 : _this$_range2.length) > 1 && this._range[1] && this._receivedLength < this._range[1] - this._range[0]) {
          done = false;
        } else {
          done = true;
        }
        this._logger.debug("[xhr load done->], tast :", this._range, ", start", byteStart, "end ", startRange + this._receivedLength, ",dataLen,", chunk ? chunk.byteLength : 0, ",receivedLength", this._receivedLength, ",index,", this._index, ", done,", done);
      } else {
        done = true;
        data = e.target.response;
      }
      var response = {
        ok: status >= 200 && status < 300,
        status,
        statusText: this._xhr.statusText,
        url: this._xhr.responseURL,
        headers: this._getHeaders(this._xhr),
        body: this._xhr.response
      };
      if (this._transformResponse) {
        response = this._transformResponse(response, this._url) || response;
      }
      if (this._onProgress) {
        this._onProgress(data, done, {
          index: this._index,
          vid: this._vid,
          range: [byteStart, startRange + this._receivedLength],
          startTime: this._startTime,
          endTime: Date.now(),
          priOptions: this._priOptions
        }, response);
      }
      if (!done) {
        this._startLoad();
      } else {
        this._runing = false;
        this._loadCompleteResolve && this._loadCompleteResolve(createResponse(this._onProgress ? null : data, done, response, response.headers["content-length"], response.headers.age, this._startTime, this._firstRtt, this._index, this._range, this._vid, this._priOptions));
      }
    }
  }, {
    key: "cancel",
    value: function cancel() {
      if (this._aborted)
        return;
      this._aborted = true;
      this._runing = false;
      _get(_getPrototypeOf(XhrLoader2.prototype), "removeAllListeners", this).call(this);
      if (this._onCancel) {
        this._onCancel({
          index: this._index,
          range: this._range,
          vid: this._vid,
          priOptions: this._priOptions
        });
      }
      if (this._xhr) {
        return this._xhr.abort();
      }
    }
  }, {
    key: "receiveLen",
    get: function get() {
      return this._receivedLength;
    }
  }, {
    key: "running",
    get: function get() {
      return this._running;
    },
    set: function set(status) {
      this._running = status;
    }
  }, {
    key: "_getHeaders",
    value: function _getHeaders(xhr) {
      var headerLines = xhr.getAllResponseHeaders().trim().split("\r\n");
      var headers = {};
      var _iterator = _createForOfIteratorHelper(headerLines), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var header = _step.value;
          var parts = header.split(": ");
          headers[parts[0].toLowerCase()] = parts.slice(1).join(": ");
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return headers;
    }
  }], [{
    key: "isSupported",
    value: function isSupported() {
      return typeof XMLHttpRequest !== "undefined";
    }
  }]);
  return XhrLoader2;
}(import_eventemitter32.default);

// node_modules/xgplayer-streaming-shared/es/net/task.js
var _excluded = ["retry", "retryDelay", "onRetryError", "transformError"];
var Task = function() {
  function Task2(type, config) {
    _classCallCheck(this, Task2);
    this.promise = createPublicPromise();
    this.alive = !!config.onProgress;
    !config.logger && (config.logger = new Logger("Loader"));
    this._loaderType = type;
    this._loader = type === LoaderType.FETCH && !!window.fetch ? new FetchLoader() : new XhrLoader();
    this._config = config;
    this._retryCount = 0;
    this._retryTimer = null;
    this._canceled = false;
    this._retryCheckFunc = config.retryCheckFunc;
    this._logger = config.logger;
  }
  _createClass(Task2, [{
    key: "exec",
    value: function exec() {
      var _this = this;
      var _this$_config = this._config, retry = _this$_config.retry, retryDelay = _this$_config.retryDelay, onRetryError = _this$_config.onRetryError, transformError = _this$_config.transformError, rest = _objectWithoutProperties(_this$_config, _excluded);
      var request = function() {
        var _ref = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
          var response, error, isRetry;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _this._loader.load(rest);
                case 3:
                  response = _context.sent;
                  _this.promise.resolve(response);
                  _context.next = 27;
                  break;
                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  _this._loader.running = false;
                  _this._logger.debug("[task request catch err]", _context.t0);
                  if (!_this._canceled) {
                    _context.next = 13;
                    break;
                  }
                  return _context.abrupt("return");
                case 13:
                  _context.t0.loaderType = _this._loaderType;
                  _context.t0.retryCount = _this._retryCount;
                  error = _context.t0;
                  if (transformError) {
                    error = transformError(error) || error;
                  }
                  if (onRetryError && _this._retryCount > 0)
                    onRetryError(error, _this._retryCount, {
                      index: rest.index,
                      vid: rest.vid,
                      range: rest.range,
                      priOptions: rest.priOptions
                    });
                  _this._retryCount++;
                  isRetry = true;
                  if (_this._retryCheckFunc) {
                    isRetry = _this._retryCheckFunc(_context.t0);
                  }
                  if (!(isRetry && _this._retryCount <= retry)) {
                    _context.next = 26;
                    break;
                  }
                  clearTimeout(_this._retryTimer);
                  _this._logger.debug("[task request setTimeout],retry", _this._retryCount, ",retry range,", rest.range);
                  _this._retryTimer = setTimeout(request, retryDelay);
                  return _context.abrupt("return");
                case 26:
                  _this.promise.reject(error);
                case 27:
                case "end":
                  return _context.stop();
              }
          }, _callee, null, [[0, 7]]);
        }));
        return function request2() {
          return _ref.apply(this, arguments);
        };
      }();
      request();
      return this.promise;
    }
  }, {
    key: "cancel",
    value: function() {
      var _cancel = _asyncToGenerator(_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1)
            switch (_context2.prev = _context2.next) {
              case 0:
                clearTimeout(this._retryTimer);
                this._canceled = true;
                this._loader.running = false;
                return _context2.abrupt("return", this._loader.cancel());
              case 4:
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
  }, {
    key: "running",
    get: function get() {
      return this._loader && this._loader.running;
    }
  }, {
    key: "loader",
    get: function get() {
      return this._loader;
    }
  }]);
  return Task2;
}();

// node_modules/xgplayer-streaming-shared/es/streaming-helper.js
function isMediaPlaying(media) {
  return media && !media.paused && !media.ended && media.playbackRate !== 0 && media.readyState !== 0;
}
function getVideoPlaybackQuality(video) {
  if (!video)
    return {};
  if (typeof video.getVideoPlaybackQuality === "function") {
    var info = video.getVideoPlaybackQuality();
    return {
      droppedVideoFrames: info.droppedVideoFrames || info.corruptedVideoFrames,
      totalVideoFrames: info.totalVideoFrames,
      creationTime: info.creationTime
    };
  }
  return {
    droppedVideoFrames: video.webkitDroppedFrameCount,
    totalVideoFrames: video.webkitDecodedFrameCount,
    creationTime: performance.now()
  };
}
function concatUint8Array() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }
  arr = arr.filter(Boolean);
  if (arr.length < 2)
    return arr[0];
  var data = new Uint8Array(arr.reduce(function(p, c) {
    return p + c.byteLength;
  }, 0));
  var prevLen = 0;
  arr.forEach(function(d2) {
    data.set(d2, prevLen);
    prevLen += d2.byteLength;
  });
  return data;
}
function sleep() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return new Promise(function(resolve) {
    return setTimeout(resolve, t);
  });
}

// node_modules/xgplayer-streaming-shared/es/net/index.js
var import_eventemitter33 = __toESM(require_eventemitter3());
var NetLoader = function(_EventEmitter) {
  _inherits(NetLoader2, _EventEmitter);
  var _super = _createSuper(NetLoader2);
  function NetLoader2(cfg) {
    var _this;
    _classCallCheck(this, NetLoader2);
    _this = _super.call(this, cfg);
    _defineProperty(_assertThisInitialized(_this), "type", LoaderType.FETCH);
    _defineProperty(_assertThisInitialized(_this), "_queue", []);
    _defineProperty(_assertThisInitialized(_this), "_alive", []);
    _defineProperty(_assertThisInitialized(_this), "_currentTask", null);
    _defineProperty(_assertThisInitialized(_this), "_config", void 0);
    _this._config = getConfig(cfg);
    if (_this._config.loaderType === LoaderType.XHR || !FetchLoader.isSupported()) {
      _this.type = LoaderType.XHR;
    }
    _this.log = cfg.logger;
    return _this;
  }
  _createClass(NetLoader2, [{
    key: "isFetch",
    value: function isFetch() {
      return this.type === LoaderType.FETCH;
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this2 = this;
      var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (typeof url === "string" || !url) {
        config.url = url || config.url || this._config.url;
      } else {
        config = url;
      }
      config = Object.assign({}, this._config, config);
      if (config.params)
        config.params = Object.assign({}, config.params);
      if (config.headers && isPlainObject(config.headers))
        config.headers = Object.assign({}, config.headers);
      if (config.body && isPlainObject(config.body))
        config.body = Object.assign({}, config.body);
      if (config.transformRequest) {
        config = config.transformRequest(config) || config;
      }
      config.logger = this.log;
      var task = new Task(this.type, config);
      task.loader.on(EVENT.REAL_TIME_SPEED, function(data) {
        _this2.emit(EVENT.REAL_TIME_SPEED, data);
      });
      this._queue.push(task);
      if (this._queue.length === 1 && (!this._currentTask || !this._currentTask.running)) {
        this._processTask();
      }
      return task.promise;
    }
  }, {
    key: "cancel",
    value: function() {
      var _cancel = _asyncToGenerator(_regeneratorRuntime().mark(function _callee() {
        var cancels;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch (_context.prev = _context.next) {
              case 0:
                cancels = this._queue.map(function(t) {
                  return t.cancel();
                }).concat(this._alive.map(function(t) {
                  return t.cancel();
                }));
                if (this._currentTask) {
                  cancels.push(this._currentTask.cancel());
                }
                this._queue = [];
                this._alive = [];
                _context.next = 6;
                return Promise.all(cancels);
              case 6:
                _context.next = 8;
                return sleep();
              case 8:
              case "end":
                return _context.stop();
            }
        }, _callee, this);
      }));
      function cancel() {
        return _cancel.apply(this, arguments);
      }
      return cancel;
    }()
  }, {
    key: "_processTask",
    value: function _processTask() {
      var _this3 = this;
      this._currentTask = this._queue.shift();
      if (!this._currentTask)
        return;
      if (this._currentTask.alive) {
        this._alive.push(this._currentTask);
      }
      var req = this._currentTask.exec().catch(function(e) {
      });
      if (!(req && typeof req.finally === "function"))
        return;
      req.finally(function() {
        var _this3$_currentTask, _this3$_alive;
        if ((_this3$_currentTask = _this3._currentTask) !== null && _this3$_currentTask !== void 0 && _this3$_currentTask.alive && ((_this3$_alive = _this3._alive) === null || _this3$_alive === void 0 ? void 0 : _this3$_alive.length) > 0) {
          _this3._alive = _this3._alive.filter(function(task) {
            return task && task !== _this3._currentTask;
          });
        }
        _this3._processTask();
      });
    }
  }], [{
    key: "isFetchSupport",
    value: function isFetchSupport() {
      return FetchLoader.isSupported();
    }
  }]);
  return NetLoader2;
}(import_eventemitter33.default);

// node_modules/xgplayer-streaming-shared/es/services/gap.js
var GapService = function() {
  function GapService2() {
    _classCallCheck(this, GapService2);
    _defineProperty(this, "_prevCurrentTime", 0);
  }
  _createClass(GapService2, [{
    key: "do",
    value: function _do(media) {
      var maxJumpDistance = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
      var isLive = arguments.length > 2 ? arguments[2] : void 0;
      var seekThreshold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
      if (!media)
        return;
      var currentTime = media.currentTime;
      var jumpTo = 0;
      if (this._prevCurrentTime === currentTime) {
        var info = Buffer.info(Buffer.get(media), currentTime);
        if (!info.buffers.length)
          return;
        if (isLive && info.nextStart || info.nextStart && info.nextStart - currentTime < maxJumpDistance) {
          jumpTo = info.nextStart + 0.1;
        } else if (info.end && info.end - currentTime > seekThreshold && !media.seeking) {
          jumpTo = currentTime + 0.1;
        }
      }
      this._prevCurrentTime = currentTime;
      if (jumpTo && currentTime !== jumpTo) {
        media.currentTime = jumpTo;
      }
    }
  }]);
  return GapService2;
}();

// node_modules/xgplayer-streaming-shared/es/services/sei.js
var SeiService = function() {
  function SeiService2(emitter) {
    var _this = this;
    _classCallCheck(this, SeiService2);
    _defineProperty(this, "_seiSet", /* @__PURE__ */ new Set());
    this.emitter = emitter;
    emitter.on(EVENT.SEI, function(sei) {
      if (sei)
        _this._seiSet.add(sei);
    });
  }
  _createClass(SeiService2, [{
    key: "throw",
    value: function _throw(currentTime) {
      var _this2 = this;
      if (currentTime === null || currentTime === void 0 || !this._seiSet.size)
        return;
      var min = currentTime - 0.2;
      var max = currentTime + 0.2;
      var toThrow = [];
      this._seiSet.forEach(function(sei) {
        if (sei.time >= min && sei.time <= max) {
          toThrow.push(sei);
        }
      });
      toThrow.forEach(function(sei) {
        _this2._seiSet.delete(sei);
        _this2.emitter.emit(EVENT.SEI_IN_TIME, sei);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._seiSet.clear();
    }
  }]);
  return SeiService2;
}();

// node_modules/xgplayer-streaming-shared/es/services/bandwidth.js
var BandwidthService = function() {
  function BandwidthService2() {
    _classCallCheck(this, BandwidthService2);
    _defineProperty(this, "_chunkSpeeds", []);
    _defineProperty(this, "_speeds", []);
  }
  _createClass(BandwidthService2, [{
    key: "addRecord",
    value: function addRecord(totalByte, ms) {
      if (!totalByte || !ms)
        return;
      this._speeds.push(8e3 * totalByte / ms);
      this._speeds = this._speeds.slice(-3);
    }
  }, {
    key: "addChunkRecord",
    value: function addChunkRecord(totalByte, ms) {
      if (!totalByte || !ms)
        return;
      this._chunkSpeeds.push(8e3 * totalByte / ms);
      this._chunkSpeeds = this._chunkSpeeds.slice(-100);
    }
  }, {
    key: "getAvgSpeed",
    value: function getAvgSpeed() {
      if (!this._chunkSpeeds.length && !this._speeds.length)
        return 0;
      if (this._speeds.length) {
        return this._speeds.reduce(function(a, c) {
          return a += c;
        }) / this._speeds.length;
      }
      return this._chunkSpeeds.reduce(function(a, c) {
        return a += c;
      }) / this._chunkSpeeds.length;
    }
  }, {
    key: "getLatestSpeed",
    value: function getLatestSpeed() {
      if (!this._chunkSpeeds.length && !this._speeds.length)
        return 0;
      if (this._speeds.length) {
        return this._speeds[this._speeds.length - 1];
      }
      return this._chunkSpeeds[this._chunkSpeeds.length - 1];
    }
  }, {
    key: "reset",
    value: function reset() {
      this._chunkSpeeds = [];
      this._speeds = [];
    }
  }]);
  return BandwidthService2;
}();

// node_modules/xgplayer-streaming-shared/es/services/stats.js
var import_eventemitter34 = __toESM(require_eventemitter3());
var Stats = function() {
  function Stats2(timescale) {
    _classCallCheck(this, Stats2);
    _defineProperty(this, "encodeType", "");
    _defineProperty(this, "audioCodec", "");
    _defineProperty(this, "videoCodec", "");
    _defineProperty(this, "domain", "");
    _defineProperty(this, "fps", 0);
    _defineProperty(this, "bitrate", 0);
    _defineProperty(this, "width", 0);
    _defineProperty(this, "height", 0);
    _defineProperty(this, "samplerate", 0);
    _defineProperty(this, "channelCount", 0);
    _defineProperty(this, "gop", 0);
    _defineProperty(this, "_bitsAccumulateSize", 0);
    _defineProperty(this, "_bitsAccumulateDuration", 0);
    this._timescale = timescale;
  }
  _createClass(Stats2, [{
    key: "getStats",
    value: function getStats() {
      return {
        encodeType: this.encodeType,
        audioCodec: this.audioCodec,
        videoCodec: this.videoCodec,
        domain: this.domain,
        fps: this.fps,
        bitrate: this.bitrate,
        width: this.width,
        height: this.height,
        samplerate: this.samplerate,
        channelCount: this.channelCount,
        gop: this.gop
      };
    }
  }, {
    key: "setEncodeType",
    value: function setEncodeType(encode2) {
      this.encodeType = encode2;
    }
  }, {
    key: "setFpsFromScriptData",
    value: function setFpsFromScriptData(_ref) {
      var _data$onMetaData;
      var data = _ref.data;
      var fps = data === null || data === void 0 ? void 0 : (_data$onMetaData = data.onMetaData) === null || _data$onMetaData === void 0 ? void 0 : _data$onMetaData.framerate;
      if (fps && fps > 0 && fps < 100) {
        this.fps = fps;
      }
    }
  }, {
    key: "setVideoMeta",
    value: function setVideoMeta(track) {
      this.width = track.width;
      this.height = track.height;
      this.videoCodec = track.codec;
      this.encodeType = track.codecType;
      if (track.fpsNum && track.fpsDen) {
        var fps = track.fpsNum / track.fpsDen;
        if (fps > 0 && fps < 100) {
          this.fps = fps;
        }
      }
    }
  }, {
    key: "setAudioMeta",
    value: function setAudioMeta(track) {
      this.audioCodec = track.codec;
      this.samplerate = track.sampleRate;
      this.channelCount = track.channelCount;
    }
  }, {
    key: "setDomain",
    value: function setDomain(responseUrl) {
      this.domain = responseUrl.split("/").slice(2, 3)[0];
    }
  }, {
    key: "updateBitrate",
    value: function updateBitrate(samples) {
      var _this = this;
      if (!this.fps || this.fps >= 100) {
        if (samples.length) {
          var duration = samples.reduce(function(a, b) {
            return a += b.duration;
          }, 0) / samples.length;
          this.fps = Math.round(this._timescale / duration);
        }
      }
      samples.forEach(function(sample) {
        if (sample.gopId === 1) {
          _this.gop++;
        }
        _this._bitsAccumulateDuration += sample.duration / (_this._timescale / 1e3);
        _this._bitsAccumulateSize += sample.units.reduce(function(a, c) {
          return a += c.length;
        }, 0);
        if (_this._bitsAccumulateDuration >= 1e3) {
          _this.bitrate = _this._bitsAccumulateSize * 8;
          _this._bitsAccumulateDuration = 0;
          _this._bitsAccumulateSize = 0;
        }
      });
    }
  }]);
  return Stats2;
}();
var MediaStatsService = function() {
  function MediaStatsService2(core) {
    var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
    _classCallCheck(this, MediaStatsService2);
    _defineProperty(this, "_core", null);
    _defineProperty(this, "_samples", []);
    this._core = core;
    this._timescale = timescale;
    this._stats = new Stats(timescale);
    this._bindEvents();
  }
  _createClass(MediaStatsService2, [{
    key: "getStats",
    value: function getStats() {
      var _this$_core, _this$_core2, _this$_core2$speedInf, _this$_core3, _this$_core3$speedInf, _this$_core4, _this$_core4$bufferIn;
      var _ref2 = ((_this$_core = this._core) === null || _this$_core === void 0 ? void 0 : _this$_core.media) || {}, _ref2$currentTime = _ref2.currentTime, currentTime = _ref2$currentTime === void 0 ? 0 : _ref2$currentTime, _ref2$decodeFps = _ref2.decodeFps, decodeFps = _ref2$decodeFps === void 0 ? 0 : _ref2$decodeFps;
      return _objectSpread2(_objectSpread2({}, this._stats.getStats()), {}, {
        downloadSpeed: ((_this$_core2 = this._core) === null || _this$_core2 === void 0 ? void 0 : (_this$_core2$speedInf = _this$_core2.speedInfo) === null || _this$_core2$speedInf === void 0 ? void 0 : _this$_core2$speedInf.call(_this$_core2).speed) || 0,
        avgSpeed: ((_this$_core3 = this._core) === null || _this$_core3 === void 0 ? void 0 : (_this$_core3$speedInf = _this$_core3.speedInfo) === null || _this$_core3$speedInf === void 0 ? void 0 : _this$_core3$speedInf.call(_this$_core3).avgSpeed) || 0,
        currentTime,
        bufferEnd: ((_this$_core4 = this._core) === null || _this$_core4 === void 0 ? void 0 : (_this$_core4$bufferIn = _this$_core4.bufferInfo()) === null || _this$_core4$bufferIn === void 0 ? void 0 : _this$_core4$bufferIn.remaining) || 0,
        decodeFps
      });
    }
  }, {
    key: "_bindEvents",
    value: function _bindEvents() {
      var _this2 = this;
      this._core.on(EVENT.DEMUXED_TRACK, function(_ref3) {
        var videoTrack = _ref3.videoTrack;
        return _this2._stats.updateBitrate(videoTrack.samples);
      });
      this._core.on(EVENT.FLV_SCRIPT_DATA, function(data) {
        _this2._stats.setFpsFromScriptData(data);
      });
      this._core.on(EVENT.METADATA_PARSED, function(e) {
        if (e.type === "video") {
          _this2._stats.setVideoMeta(e.track);
        } else {
          _this2._stats.setAudioMeta(e.track);
        }
      });
      this._core.on(EVENT.TTFB, function(e) {
        _this2._stats.setDomain(e.responseUrl);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this._samples = [];
      this._stats = new Stats(this._timescale);
    }
  }]);
  return MediaStatsService2;
}();

// node_modules/xgplayer-transmuxer/es/_virtual/_rollupPluginBabelHelpers.js
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
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
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

// node_modules/xgplayer-transmuxer/es/utils/logger.js
var Logger2 = function() {
  function Logger22(name) {
    _classCallCheck2(this, Logger22);
    this.name = name || "";
    this._prefix = "[".concat(this.name, "]");
  }
  _createClass2(Logger22, [{
    key: "warn",
    value: function warn() {
      var _console;
      if (Logger22.disabled)
        return;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console = console).warn.apply(_console, [this._prefix].concat(args));
    }
  }], [{
    key: "enable",
    value: function enable() {
      Logger22.disabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      Logger22.disabled = true;
    }
  }]);
  return Logger22;
}();
_defineProperty2(Logger2, "disabled", true);

// node_modules/xgplayer-transmuxer/es/model/types.js
var TrackType = {
  VIDEO: "video",
  AUDIO: "audio",
  METADATA: "metadata"
};
var VideoCodecType = {
  AVC: "avc",
  HEVC: "hevc"
};
var AudioCodecType = {
  AAC: "aac",
  G711PCMA: "g7110a",
  G711PCMU: "g7110m"
};
var WarningType = {
  LARGE_AV_SHIFT: "LARGE_AV_SHIFT",
  LARGE_VIDEO_GAP: "LARGE_VIDEO_GAP",
  LARGE_VIDEO_GAP_BETWEEN_CHUNK: "LARGE_VIDEO_GAP_BETWEEN_CHUNK",
  LARGE_AUDIO_GAP: "LARGE_AUDIO_GAP",
  AUDIO_FILLED: "AUDIO_FILLED",
  AUDIO_DROPPED: "AUDIO_DROPPED"
};

// node_modules/xgplayer-transmuxer/es/model/video-track.js
var VideoTrack = function() {
  function VideoTrack2() {
    _classCallCheck2(this, VideoTrack2);
    _defineProperty2(this, "id", 1);
    _defineProperty2(this, "type", TrackType.VIDEO);
    _defineProperty2(this, "codecType", VideoCodecType.AVC);
    _defineProperty2(this, "pid", -1);
    _defineProperty2(this, "hvcC", void 0);
    _defineProperty2(this, "codec", "");
    _defineProperty2(this, "timescale", 0);
    _defineProperty2(this, "formatTimescale", 0);
    _defineProperty2(this, "sequenceNumber", 0);
    _defineProperty2(this, "baseMediaDecodeTime", 0);
    _defineProperty2(this, "baseDts", 0);
    _defineProperty2(this, "duration", 0);
    _defineProperty2(this, "warnings", []);
    _defineProperty2(this, "samples", []);
    _defineProperty2(this, "pps", []);
    _defineProperty2(this, "sps", []);
    _defineProperty2(this, "vps", []);
    _defineProperty2(this, "fpsNum", 0);
    _defineProperty2(this, "fpsDen", 0);
    _defineProperty2(this, "sarRatio", []);
    _defineProperty2(this, "width", 0);
    _defineProperty2(this, "height", 0);
    _defineProperty2(this, "nalUnitSize", 4);
    _defineProperty2(this, "present", false);
    _defineProperty2(this, "isVideoEncryption", false);
    _defineProperty2(this, "isAudioEncryption", false);
    _defineProperty2(this, "isVideo", true);
    _defineProperty2(this, "kid", null);
    _defineProperty2(this, "pssh", null);
    _defineProperty2(this, "ext", void 0);
  }
  _createClass2(VideoTrack2, [{
    key: "reset",
    value: function reset() {
      this.sequenceNumber = this.width = this.height = this.fpsDen = this.fpsNum = this.duration = this.baseMediaDecodeTime = this.timescale = 0;
      this.codec = "";
      this.present = false;
      this.pid = -1;
      this.pps = [];
      this.sps = [];
      this.vps = [];
      this.sarRatio = [];
      this.samples = [];
      this.warnings = [];
      this.hvcC = null;
    }
  }, {
    key: "exist",
    value: function exist() {
      return !!(this.pps.length && this.sps.length && this.codec);
    }
  }, {
    key: "hasSample",
    value: function hasSample() {
      return !!this.samples.length;
    }
  }, {
    key: "isEncryption",
    get: function get() {
      return this.isVideoEncryption;
    }
  }]);
  return VideoTrack2;
}();

// node_modules/xgplayer-transmuxer/es/model/audio-track.js
var AudioTrack = function() {
  function AudioTrack2() {
    _classCallCheck2(this, AudioTrack2);
    _defineProperty2(this, "id", 2);
    _defineProperty2(this, "type", TrackType.AUDIO);
    _defineProperty2(this, "codecType", AudioCodecType.AAC);
    _defineProperty2(this, "pid", -1);
    _defineProperty2(this, "codec", "");
    _defineProperty2(this, "sequenceNumber", 0);
    _defineProperty2(this, "sampleDuration", 0);
    _defineProperty2(this, "timescale", 0);
    _defineProperty2(this, "formatTimescale", 0);
    _defineProperty2(this, "baseMediaDecodeTime", 0);
    _defineProperty2(this, "duration", 0);
    _defineProperty2(this, "warnings", []);
    _defineProperty2(this, "samples", []);
    _defineProperty2(this, "baseDts", 0);
    _defineProperty2(this, "sampleSize", 16);
    _defineProperty2(this, "sampleRate", 0);
    _defineProperty2(this, "channelCount", 0);
    _defineProperty2(this, "objectType", 0);
    _defineProperty2(this, "sampleRateIndex", 0);
    _defineProperty2(this, "config", []);
    _defineProperty2(this, "present", false);
    _defineProperty2(this, "isVideoEncryption", false);
    _defineProperty2(this, "isAudioEncryption", false);
    _defineProperty2(this, "kid", null);
    _defineProperty2(this, "ext", void 0);
  }
  _createClass2(AudioTrack2, [{
    key: "reset",
    value: function reset() {
      this.sequenceNumber = 0;
      this.timescale = 0;
      this.sampleDuration = 0;
      this.sampleRate = 0;
      this.channelCount = 0;
      this.baseMediaDecodeTime = 0;
      this.present = false;
      this.pid = -1;
      this.codec = "";
      this.samples = [];
      this.config = [];
      this.warnings = [];
    }
  }, {
    key: "exist",
    value: function exist() {
      return !!(this.sampleRate && this.channelCount && this.codec && this.codecType === AudioCodecType.AAC);
    }
  }, {
    key: "hasSample",
    value: function hasSample() {
      return !!this.samples.length;
    }
  }, {
    key: "isEncryption",
    get: function get() {
      return this.isAudioEncryption;
    }
  }]);
  return AudioTrack2;
}();

// node_modules/xgplayer-transmuxer/es/model/video-sample.js
var VideoSample = function() {
  function VideoSample2(pts, dts, units) {
    _classCallCheck2(this, VideoSample2);
    _defineProperty2(this, "flag", {});
    _defineProperty2(this, "keyframe", false);
    _defineProperty2(this, "gopId", 0);
    _defineProperty2(this, "duration", 0);
    _defineProperty2(this, "size", 0);
    _defineProperty2(this, "units", []);
    _defineProperty2(this, "chromaFormat", 420);
    this.originPts = this.pts = pts;
    this.originDts = this.dts = dts;
    if (units)
      this.units = units;
  }
  _createClass2(VideoSample2, [{
    key: "cts",
    get: function get() {
      return this.pts - this.dts;
    }
  }, {
    key: "setToKeyframe",
    value: function setToKeyframe() {
      this.keyframe = true;
      this.flag.dependsOn = 2;
      this.flag.isNonSyncSample = 0;
    }
  }]);
  return VideoSample2;
}();

// node_modules/xgplayer-transmuxer/es/model/audio-sample.js
var AudioSample = _createClass2(
  function AudioSample2(pts, data, duration, sampleOffset) {
    _classCallCheck2(this, AudioSample2);
    _defineProperty2(this, "duration", 1024);
    _defineProperty2(this, "flag", {
      dependsOn: 2,
      isNonSyncSample: 0
    });
    _defineProperty2(this, "keyframe", true);
    this.originPts = this.pts = this.dts = pts;
    this.data = data;
    this.size = data.byteLength;
    this.sampleOffset = sampleOffset;
    if (duration)
      this.duration = duration;
  }
);

// node_modules/xgplayer-transmuxer/es/model/metadata-track.js
var Sample = _createClass2(
  function Sample2(data, pts) {
    _classCallCheck2(this, Sample2);
    _defineProperty2(this, "time", 0);
    this.data = data;
    this.originPts = this.pts = pts;
  }
);
var FlvScriptSample = function(_Sample) {
  _inherits2(FlvScriptSample2, _Sample);
  var _super = _createSuper2(FlvScriptSample2);
  function FlvScriptSample2() {
    _classCallCheck2(this, FlvScriptSample2);
    return _super.apply(this, arguments);
  }
  return _createClass2(FlvScriptSample2);
}(Sample);
var SeiSample = function(_Sample2) {
  _inherits2(SeiSample2, _Sample2);
  var _super2 = _createSuper2(SeiSample2);
  function SeiSample2() {
    _classCallCheck2(this, SeiSample2);
    return _super2.apply(this, arguments);
  }
  return _createClass2(SeiSample2);
}(Sample);
var MetadataTrack = function() {
  function MetadataTrack2() {
    _classCallCheck2(this, MetadataTrack2);
    _defineProperty2(this, "id", 3);
    _defineProperty2(this, "type", TrackType.METADATA);
    _defineProperty2(this, "timescale", 0);
    _defineProperty2(this, "flvScriptSamples", []);
    _defineProperty2(this, "seiSamples", []);
  }
  _createClass2(MetadataTrack2, [{
    key: "exist",
    value: function exist() {
      return !!((this.flvScriptSamples.length || this.seiSamples.length) && this.timescale);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.timescale = 0;
      this.flvScriptSamples = [];
      this.seiSamples = [];
    }
  }, {
    key: "hasSample",
    value: function hasSample() {
      return !!(this.flvScriptSamples.length || this.seiSamples.length);
    }
  }]);
  return MetadataTrack2;
}();

// node_modules/xgplayer-transmuxer/es/utils/env.js
var isBrowser2 = typeof window !== "undefined";
var ua = isBrowser2 && navigator.userAgent.toLocaleLowerCase();
var isSafari = isBrowser2 && /^((?!chrome|android).)*safari/.test(ua);
var isFirefox = isBrowser2 && ua.includes("firefox");
var isAndroid = isBrowser2 && ua.includes("android");

// node_modules/xgplayer-transmuxer/es/codec/aac.js
var AAC = function() {
  function AAC2() {
    _classCallCheck2(this, AAC2);
  }
  _createClass2(AAC2, null, [{
    key: "getRateIndexByRate",
    value: function getRateIndexByRate(rate) {
      return AAC2.FREQ.indexOf(rate);
    }
  }, {
    key: "parseADTS",
    value: function parseADTS(data, pts) {
      var len = data.length;
      var i = 0;
      while (i + 2 < len) {
        if (data[i] === 255 && (data[i + 1] & 246) === 240) {
          break;
        }
        i++;
      }
      if (i >= len)
        return;
      var skip = i;
      var frames = [];
      var samplingFrequencyIndex = (data[i + 2] & 60) >>> 2;
      var sampleRate = AAC2.FREQ[samplingFrequencyIndex];
      if (!sampleRate)
        throw new Error("Invalid sampling index: ".concat(samplingFrequencyIndex));
      var objectType = ((data[i + 2] & 192) >>> 6) + 1;
      var channelCount = (data[i + 2] & 1) << 2 | (data[i + 3] & 192) >>> 6;
      var _AAC$_getConfig = AAC2._getConfig(samplingFrequencyIndex, channelCount, objectType), config = _AAC$_getConfig.config, codec = _AAC$_getConfig.codec;
      var protectionSkipBytes;
      var frameLength;
      var frameIndex = 0;
      var duration = AAC2.getFrameDuration(sampleRate);
      while (i + 7 < len) {
        if (data[i] !== 255 || (data[i + 1] & 246) !== 240) {
          i++;
          continue;
        }
        frameLength = (data[i + 3] & 3) << 11 | data[i + 4] << 3 | (data[i + 5] & 224) >> 5;
        if (len - i < frameLength)
          break;
        protectionSkipBytes = (~data[i + 1] & 1) * 2;
        frames.push({
          pts: pts + frameIndex * duration,
          data: data.subarray(i + 7 + protectionSkipBytes, i + frameLength)
        });
        frameIndex++;
        i += frameLength;
      }
      return {
        skip,
        remaining: i >= len ? void 0 : data.subarray(i),
        frames,
        samplingFrequencyIndex,
        sampleRate,
        objectType,
        channelCount,
        codec,
        config,
        originCodec: "mp4a.40.".concat(objectType)
      };
    }
  }, {
    key: "parseAudioSpecificConfig",
    value: function parseAudioSpecificConfig(data) {
      if (!data.length)
        return;
      var objectType = data[0] >>> 3;
      var samplingFrequencyIndex = (data[0] & 7) << 1 | data[1] >>> 7;
      var channelCount = (data[1] & 120) >>> 3;
      var sampleRate = AAC2.FREQ[samplingFrequencyIndex];
      if (!sampleRate)
        return;
      var _AAC$_getConfig2 = AAC2._getConfig(samplingFrequencyIndex, channelCount, objectType), config = _AAC$_getConfig2.config, codec = _AAC$_getConfig2.codec;
      return {
        samplingFrequencyIndex,
        sampleRate,
        objectType,
        channelCount,
        config,
        codec,
        originCodec: "mp4a.40.".concat(objectType)
      };
    }
  }, {
    key: "getFrameDuration",
    value: function getFrameDuration(rate) {
      var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 9e4;
      return 1024 * timescale / rate;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(samplingIndex, channelCount, originObjectType) {
      var config = [];
      var objectType;
      var extensionSamplingIndex;
      if (isFirefox) {
        if (samplingIndex >= 6) {
          objectType = 5;
          extensionSamplingIndex = samplingIndex - 3;
        } else {
          objectType = 2;
          extensionSamplingIndex = samplingIndex;
        }
      } else if (isAndroid) {
        objectType = 2;
        extensionSamplingIndex = samplingIndex;
      } else {
        objectType = originObjectType === 2 || originObjectType === 5 ? originObjectType : 5;
        extensionSamplingIndex = samplingIndex;
        if (samplingIndex >= 6) {
          extensionSamplingIndex = samplingIndex - 3;
        } else if (channelCount === 1) {
          objectType = 2;
          extensionSamplingIndex = samplingIndex;
        }
      }
      config[0] = objectType << 3;
      config[0] |= (samplingIndex & 14) >> 1;
      config[1] = (samplingIndex & 1) << 7;
      config[1] |= channelCount << 3;
      if (objectType === 5) {
        config[1] |= (extensionSamplingIndex & 14) >> 1;
        config[2] = (extensionSamplingIndex & 1) << 7;
        config[2] |= 2 << 2;
        config[3] = 0;
      }
      return {
        config,
        codec: "mp4a.40.".concat(objectType)
      };
    }
  }, {
    key: "getSilentFrame",
    value: function getSilentFrame(codec, channelCount) {
      switch (codec) {
        case "mp4a.40.2":
          if (channelCount === 1) {
            return new Uint8Array([0, 200, 0, 128, 35, 128]);
          }
          if (channelCount === 2) {
            return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
          }
          if (channelCount === 3) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
          }
          if (channelCount === 4) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
          }
          if (channelCount === 5) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
          }
          if (channelCount === 6) {
            return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
          }
          break;
        default:
          if (channelCount === 1) {
            return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          if (channelCount === 2) {
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          if (channelCount === 3) {
            return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
          }
          break;
      }
    }
  }]);
  return AAC2;
}();
_defineProperty2(AAC, "FREQ", [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350]);

// node_modules/xgplayer-transmuxer/es/flv/fixer.js
var LARGE_AV_FIRST_FRAME_GAP = 500;
var AUDIO_GAP_OVERLAP_THRESHOLD_COUNT = 3;
var MAX_SILENT_FRAME_DURATION = 1e3;
var AUDIO_EXCETION_LOG_EMIT_DURATION = 5e3;
var MAX_VIDEO_FRAME_DURATION = 1e3;
var MAX_DTS_DELTA_WITH_NEXT_CHUNK = 200;
var VIDEO_EXCETION_LOG_EMIT_DURATION = 5e3;
var TRACK_BREACKED_CHECK_TIME = 5;
var FlvFixer = function() {
  function FlvFixer2(videoTrack, audioTrack, metadataTrack) {
    _classCallCheck2(this, FlvFixer2);
    this.videoTrack = videoTrack;
    this.audioTrack = audioTrack;
    this.metadataTrack = metadataTrack;
    this._baseDts = -1;
    this._baseDtsInited = false;
    this._audioNextPts = void 0;
    this._videoNextDts = void 0;
    this._audioTimestampBreak = 0;
    this._videoTimestampBreak = 0;
    this._lastVideoDuration = 0;
    this._keyFrameInNextChunk = false;
    this._lastAudioExceptionGapDot = -Infinity;
    this._lastAudioExceptionOverlapDot = -Infinity;
    this._lastAudioExceptionLargeGapDot = -Infinity;
    this._lastVideoExceptionLargeGapDot = -Infinity;
    this._lastVideoExceptionChunkFirstDtsDot = -Infinity;
  }
  _createClass2(FlvFixer2, [{
    key: "fix",
    value: function fix() {
      var _this = this;
      var startTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var discontinuity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var contiguous = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      startTime = Math.round(startTime * 1e3);
      var videoTrack = this.videoTrack;
      var audioTrack = this.audioTrack;
      if (discontinuity || !contiguous) {
        this._videoLastSample = null;
        this._audioNextPts = void 0;
        this._videoNextDts = void 0;
        this._audioTimestampBreak = 0;
        this._videoTimestampBreak = 0;
        this._lastAudioExceptionGapDot = -Infinity;
        this._lastAudioExceptionOverlapDot = -Infinity;
        this._lastAudioExceptionLargeGapDot = -Infinity;
        this._lastVideoExceptionLargeGapDot = -Infinity;
        this._lastVideoExceptionChunkFirstDtsDot = -Infinity;
      }
      if (discontinuity && !contiguous) {
        this._baseDtsInited = false;
      }
      if (!this._baseDtsInited) {
        this._calculateBaseDts(audioTrack, videoTrack);
      }
      if (!contiguous && startTime) {
        this._audioNextPts = this._videoNextDts = startTime;
      }
      var resetBaseDts = this._baseDtsInited && (this._videoTimestampBreak || !this.videoTrack.exist()) && (this._audioTimestampBreak || !this.audioTrack.exist());
      if (resetBaseDts) {
        this._resetBaseDtsWhenStreamBreaked();
      }
      this._fixAudio(audioTrack);
      this._keyFrameInNextChunk = false;
      this._fixVideo(videoTrack);
      if (this.metadataTrack.exist()) {
        var timescale = this.metadataTrack.timescale;
        this.metadataTrack.seiSamples.forEach(function(s) {
          s.pts = s.originPts - _this._baseDts;
          s.time = Math.max(0, s.pts) / timescale;
        });
        this.metadataTrack.flvScriptSamples.forEach(function(s) {
          s.pts = s.originPts - _this._baseDts;
          s.time = Math.max(0, s.pts) / timescale;
        });
      }
      if (videoTrack.samples.length) {
        videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
      }
      if (audioTrack.samples.length) {
        audioTrack.baseMediaDecodeTime = audioTrack.samples[0].pts * audioTrack.timescale / 1e3;
      }
    }
  }, {
    key: "_fixVideo",
    value: function _fixVideo(videoTrack) {
      var _this2 = this;
      var samples = videoTrack.samples;
      if (!samples.length)
        return;
      samples.forEach(function(x2) {
        x2.dts -= _this2._baseDts;
        x2.pts -= _this2._baseDts;
        if (x2.keyframe)
          _this2._keyFrameInNextChunk = true;
      });
      var refSampleDurationInt;
      if (videoTrack.fpsNum && videoTrack.fpsDen) {
        refSampleDurationInt = videoTrack.timescale * (videoTrack.fpsDen / videoTrack.fpsNum);
      } else if (videoTrack.length > 1) {
        var first = videoTrack.samples[0];
        var last = videoTrack.samples[samples.length - 1];
        refSampleDurationInt = Math.floor((last.dts - first.dts) / (samples.length - 1));
      } else {
        refSampleDurationInt = this._lastVideoDuration || 40;
      }
      var lastSample = samples.pop();
      if (this._videoLastSample) {
        samples.unshift(this._videoLastSample);
      }
      this._videoLastSample = lastSample;
      if (!samples.length)
        return;
      if (this._videoNextDts === void 0) {
        var samp0 = samples[0];
        this._videoNextDts = samp0.dts;
      }
      var len = samples.length;
      var sampleDuration = 0;
      var firstSample = samples[0];
      var vDelta = this._videoNextDts - firstSample.dts;
      if (Math.abs(vDelta) > MAX_DTS_DELTA_WITH_NEXT_CHUNK) {
        if (Math.abs(firstSample.dts - this._lastVideoExceptionChunkFirstDtsDot) > VIDEO_EXCETION_LOG_EMIT_DURATION) {
          var _samples$;
          this._lastVideoExceptionChunkFirstDtsDot = firstSample.dts;
          videoTrack.warnings.push({
            type: WarningType.LARGE_VIDEO_GAP_BETWEEN_CHUNK,
            nextDts: this._videoNextDts,
            firstSampleDts: firstSample.dts,
            nextSampleDts: (_samples$ = samples[1]) === null || _samples$ === void 0 ? void 0 : _samples$.dts,
            sampleDuration: vDelta
          });
        }
        if (this._videoTimestampBreak >= TRACK_BREACKED_CHECK_TIME) {
          this._videoNextDts = firstSample.dts;
          this._videoTimestampBreak = 0;
        } else {
          firstSample.dts += vDelta;
          firstSample.pts += vDelta;
          if (!this.audioTrack.exist()) {
            this._videoTimestampBreak = 1;
          }
        }
      }
      for (var i = 0; i < len; i++) {
        var dts = samples[i].dts;
        var nextSample = samples[i + 1];
        if (i < len - 1) {
          sampleDuration = nextSample.dts - dts;
        } else if (lastSample) {
          sampleDuration = lastSample.dts - dts;
        } else {
          sampleDuration = refSampleDurationInt;
        }
        if (sampleDuration > MAX_VIDEO_FRAME_DURATION || sampleDuration < 0) {
          this._videoTimestampBreak++;
          if (Math.abs(dts - this._lastVideoExceptionLargeGapDot) > VIDEO_EXCETION_LOG_EMIT_DURATION) {
            this._lastVideoExceptionLargeGapDot = dts;
            videoTrack.warnings.push({
              type: WarningType.LARGE_VIDEO_GAP,
              time: dts / videoTrack.timescale,
              dts,
              originDts: samples[i].originDts,
              nextDts: this._videoNextDts,
              sampleDuration,
              refSampleDuration: refSampleDurationInt
            });
          }
          sampleDuration = refSampleDurationInt;
        }
        samples[i].duration = sampleDuration;
        this._videoNextDts += sampleDuration;
        this._lastVideoDuration = sampleDuration;
      }
    }
  }, {
    key: "_fixAudio",
    value: function _fixAudio(audioTrack) {
      var _this3 = this;
      var samples = audioTrack.samples;
      if (!samples.length)
        return;
      samples.forEach(function(x2) {
        x2.dts = x2.pts -= _this3._baseDts;
      });
      this._doFixAudioInternal(audioTrack, samples, 1e3);
    }
  }, {
    key: "_calculateBaseDts",
    value: function _calculateBaseDts(audioTrack, videoTrack) {
      var audioSamps = audioTrack.samples;
      var videoSamps = videoTrack.samples;
      if (!audioSamps.length && !videoSamps.length) {
        return false;
      }
      var audioBasePts = Infinity;
      var videoBaseDts = Infinity;
      if (audioSamps.length) {
        audioTrack.baseDts = audioBasePts = audioSamps[0].pts;
      }
      if (videoSamps.length) {
        videoTrack.baseDts = videoBaseDts = videoSamps[0].dts;
      }
      this._baseDts = Math.min(audioBasePts, videoBaseDts);
      var delta = videoBaseDts - audioBasePts;
      if (Number.isFinite(delta) && Math.abs(delta) > LARGE_AV_FIRST_FRAME_GAP) {
        videoTrack.warnings.push({
          type: WarningType.LARGE_AV_SHIFT,
          videoBaseDts,
          audioBasePts,
          baseDts: this._baseDts,
          delta
        });
      }
      this._baseDtsInited = true;
      return true;
    }
  }, {
    key: "_resetBaseDtsWhenStreamBreaked",
    value: function _resetBaseDtsWhenStreamBreaked() {
      var calc = this._calculateBaseDts(this.audioTrack, this.videoTrack);
      if (!calc)
        return;
      if (!this.audioTrack.exist()) {
        this._baseDts -= this._videoNextDts;
      } else if (!this.videoTrack.exist()) {
        this._baseDts -= this._audioNextPts;
      } else {
        this._baseDts -= Math.min(this._audioNextPts, this._videoNextDts);
      }
      this._videoTimestampBreak = 0;
      this._audioTimestampBreak = 0;
    }
  }, {
    key: "_doFixAudioInternal",
    value: function _doFixAudioInternal(audioTrack, samples, timescale) {
      if (!audioTrack.sampleDuration) {
        audioTrack.sampleDuration = audioTrack.codecType === AudioCodecType.AAC ? AAC.getFrameDuration(audioTrack.timescale, timescale) : this._getG711Duration(audioTrack);
      }
      var refSampleDuration = audioTrack.sampleDuration;
      var sampleDurationInSampleRate = audioTrack.codecType === AudioCodecType.AAC ? 1024 : refSampleDuration * audioTrack.timescale / 1e3;
      if (this._audioNextPts === void 0) {
        var samp0 = samples[0];
        this._audioNextPts = samp0.pts;
      }
      for (var i = 0; i < samples.length; i++) {
        var nextPts = this._audioNextPts;
        var sample = samples[i];
        var delta = sample.pts - nextPts;
        if (i === 0 && this._audioTimestampBreak >= TRACK_BREACKED_CHECK_TIME && this._keyFrameInNextChunk) {
          nextPts = this._audioNextPts = sample.dts;
          delta = 0;
          this._audioTimestampBreak = 0;
        }
        if (!this._audioTimestampBreak && delta >= AUDIO_GAP_OVERLAP_THRESHOLD_COUNT * refSampleDuration && delta <= MAX_SILENT_FRAME_DURATION && !isSafari) {
          var silentFrame = this._getSilentFrame(audioTrack) || samples[0].data.subarray();
          var count = Math.floor(delta / refSampleDuration);
          if (Math.abs(sample.pts - this._lastAudioExceptionGapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION) {
            this._lastAudioExceptionGapDot = sample.pts;
            audioTrack.warnings.push({
              type: WarningType.AUDIO_FILLED,
              pts: sample.pts,
              originPts: sample.originPts,
              count,
              nextPts,
              refSampleDuration
            });
          }
          for (var j = 0; j < count; j++) {
            var silentSample = new AudioSample(Math.floor(this._audioNextPts + refSampleDuration) - Math.floor(this._audioNextPts), silentFrame, sampleDurationInSampleRate);
            silentSample.originPts = Math.floor(this._baseDts + nextPts);
            samples.splice(i, 0, silentSample);
            this._audioNextPts += refSampleDuration;
            i++;
          }
          i--;
        } else if (delta <= -AUDIO_GAP_OVERLAP_THRESHOLD_COUNT * refSampleDuration && delta >= -1 * MAX_SILENT_FRAME_DURATION) {
          if (Math.abs(sample.pts - this._lastAudioExceptionOverlapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION) {
            this._lastAudioExceptionOverlapDot = sample.pts;
            audioTrack.warnings.push({
              type: WarningType.AUDIO_DROPPED,
              pts: sample.pts,
              originPts: sample.originPts,
              nextPts,
              refSampleDuration
            });
          }
          samples.splice(i, 1);
          i--;
        } else {
          if (Math.abs(delta) > MAX_SILENT_FRAME_DURATION) {
            this._audioTimestampBreak++;
            if (Math.abs(sample.pts - this._lastAudioExceptionLargeGapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION) {
              this._lastAudioExceptionLargeGapDot = sample.pts;
              audioTrack.warnings.push({
                type: WarningType.LARGE_AUDIO_GAP,
                time: sample.pts / 1e3,
                pts: sample.pts,
                originPts: sample.originPts,
                nextPts,
                sampleDuration: delta,
                refSampleDuration
              });
            }
          }
          sample.dts = sample.pts = nextPts;
          sample.duration = sampleDurationInSampleRate;
          this._audioNextPts += refSampleDuration;
        }
      }
    }
  }, {
    key: "_getG711Duration",
    value: function _getG711Duration(track) {
      var sampleSize = track.sampleSize, channelCount = track.channelCount, sampleRate = track.sampleRate;
      var samp0 = track.samples[0];
      if (!samp0)
        return;
      return samp0.data.byteLength * 2 / channelCount / (sampleSize / 8) / sampleRate * 1e3;
    }
  }, {
    key: "_getSilentFrame",
    value: function _getSilentFrame(track) {
      if (track.codecType === AudioCodecType.AAC)
        return AAC.getSilentFrame(track.codec, track.channelCount);
      return new Uint8Array(8 * track.sampleDuration * track.channelCount);
    }
  }]);
  return FlvFixer2;
}();

// node_modules/xgplayer-transmuxer/es/utils/index.js
function concatUint8Array2() {
  for (var _len = arguments.length, arr = new Array(_len), _key = 0; _key < _len; _key++) {
    arr[_key] = arguments[_key];
  }
  arr = arr.filter(Boolean);
  var data = new Uint8Array(arr.reduce(function(p, c) {
    return p + c.byteLength;
  }, 0));
  var prevLen = 0;
  arr.forEach(function(d2) {
    data.set(d2, prevLen);
    prevLen += d2.byteLength;
  });
  return data;
}
var MAX_SIZE = Math.pow(2, 32);
function readBig16(data) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (data[i] << 8) + (data[i + 1] || 0);
}
function readBig24(data) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (data[i] << 16) + (data[i + 1] << 8) + (data[i + 2] || 0);
}
function readBig32(data) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return (data[i] << 24 >>> 0) + (data[i + 1] << 16) + (data[i + 2] << 8) + (data[i + 3] || 0);
}
function readBig64(data) {
  var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return readBig32(data, i) * MAX_SIZE + readBig32(data, i + 4);
}
function getAvcCodec(codecs) {
  var codec = "avc1.";
  var h;
  for (var i = 0; i < 3; i++) {
    h = codecs[i].toString(16);
    if (h.length < 2)
      h = "0".concat(h);
    codec += h;
  }
  return codec;
}
function formatIV(arr) {
  var iv = "";
  arr.forEach(function(value) {
    iv += bufferToString(value);
  });
  if (iv.length <= 32) {
    var len = 32 - iv.length;
    for (var i = 0; i < len; i++) {
      iv += "0";
    }
  }
  return iv;
}
function parse(a) {
  if (!Array.isArray(a)) {
    var arr = [];
    var value = "";
    for (var i = 0; i < a.length; i++) {
      if (i % 2) {
        value = a[i - 1] + a[i];
        arr.push(parseInt(value, 16));
        value = "";
      }
    }
    return arr;
  }
  return a.map(function(item) {
    return parseInt(item, 16);
  });
}
function bufferToString(value) {
  return ("0" + Number(value).toString(16)).slice(-2).toUpperCase();
}

// node_modules/xgplayer-transmuxer/es/codec/nalu.js
var NALu = function() {
  function NALu2() {
    _classCallCheck2(this, NALu2);
  }
  _createClass2(NALu2, null, [{
    key: "parseAnnexB",
    value: function parseAnnexB(data) {
      var len = data.length;
      var start = 2;
      var end = 0;
      while (data[start] !== null && data[start] !== void 0 && data[start] !== 1) {
        start++;
      }
      start++;
      end = start + 2;
      if (end >= len)
        return [];
      var units = [];
      while (end < len) {
        switch (data[end]) {
          case 0:
            if (data[end - 1] !== 0) {
              end += 2;
              break;
            } else if (data[end - 2] !== 0) {
              end++;
              break;
            }
            if (start !== end - 2)
              units.push(data.subarray(start, end - 2));
            do {
              end++;
            } while (data[end] !== 1 && end < len);
            start = end + 1;
            end = start + 2;
            break;
          case 1:
            if (data[end - 1] !== 0 || data[end - 2] !== 0) {
              end += 3;
              break;
            }
            if (start !== end - 2)
              units.push(data.subarray(start, end - 2));
            start = end + 1;
            end = start + 2;
            break;
          default:
            end += 3;
            break;
        }
      }
      if (start < len)
        units.push(data.subarray(start));
      return units;
    }
  }, {
    key: "parseAvcC",
    value: function parseAvcC(data) {
      var size = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4;
      if (data.length < 4)
        return;
      var dataLen = data.length;
      var units = [];
      var offset = 0;
      var length;
      while (offset + size < dataLen) {
        length = readBig32(data, offset);
        if (size === 3)
          length >>>= 8;
        offset += size;
        if (!length)
          continue;
        if (offset + length > dataLen) {
          break;
        }
        units.push(data.subarray(offset, offset + length));
        offset += length;
      }
      return units;
    }
  }, {
    key: "parseSEI",
    value: function parseSEI(unit, isHevc) {
      var len = unit.length;
      var i = isHevc ? 2 : 1;
      var type = 0;
      var size = 0;
      var uuid = "";
      while (unit[i] === 255) {
        type += 255;
        i++;
      }
      type += unit[i++];
      while (unit[i] === 255) {
        size += 255;
        i++;
      }
      size += unit[i++];
      if (type === 5 && len > i + 16) {
        for (var j = 0; j < 16; j++) {
          uuid += unit[i].toString(16);
          i++;
        }
      }
      return {
        payload: unit.subarray(i),
        type,
        size,
        uuid
      };
    }
  }, {
    key: "removeEPB",
    value: function removeEPB(uint) {
      var length = uint.byteLength;
      var emulationPreventionBytesPositions = [];
      var i = 1;
      while (i < length - 2) {
        if (uint[i] === 0 && uint[i + 1] === 0 && uint[i + 2] === 3) {
          emulationPreventionBytesPositions.push(i + 2);
          i += 2;
        } else {
          i++;
        }
      }
      if (!emulationPreventionBytesPositions.length)
        return uint;
      var newLength = length - emulationPreventionBytesPositions.length;
      var newData = new Uint8Array(newLength);
      var sourceIndex = 0;
      for (i = 0; i < newLength; sourceIndex++, i++) {
        if (sourceIndex === emulationPreventionBytesPositions[0]) {
          sourceIndex++;
          emulationPreventionBytesPositions.shift();
        }
        newData[i] = uint[sourceIndex];
      }
      return newData;
    }
  }]);
  return NALu2;
}();

// node_modules/xgplayer-transmuxer/es/utils/exp-golomb.js
var ExpGolomb = function() {
  function ExpGolomb2(data) {
    _classCallCheck2(this, ExpGolomb2);
    _defineProperty2(this, "_bytesAvailable", void 0);
    _defineProperty2(this, "_bitsAvailable", 0);
    _defineProperty2(this, "_word", 0);
    if (!data)
      throw new Error("ExpGolomb data params is required");
    this._data = data;
    this._bytesAvailable = data.byteLength;
    if (this._bytesAvailable)
      this._loadWord();
  }
  _createClass2(ExpGolomb2, [{
    key: "_loadWord",
    value: function _loadWord() {
      var position = this._data.byteLength - this._bytesAvailable;
      var availableBytes = Math.min(4, this._bytesAvailable);
      if (availableBytes === 0)
        throw new Error("No bytes available");
      var workingBytes = new Uint8Array(4);
      workingBytes.set(this._data.subarray(position, position + availableBytes));
      this._word = new DataView(workingBytes.buffer).getUint32(0);
      this._bitsAvailable = availableBytes * 8;
      this._bytesAvailable -= availableBytes;
    }
  }, {
    key: "skipBits",
    value: function skipBits(count) {
      if (this._bitsAvailable > count) {
        this._word <<= count;
        this._bitsAvailable -= count;
      } else {
        count -= this._bitsAvailable;
        var skipBytes = Math.floor(count / 8);
        count -= skipBytes * 8;
        this._bytesAvailable -= skipBytes;
        this._loadWord();
        this._word <<= count;
        this._bitsAvailable -= count;
      }
    }
  }, {
    key: "readBits",
    value: function readBits(size) {
      if (size > 32) {
        throw new Error("Cannot read more than 32 bits");
      }
      var bits = Math.min(this._bitsAvailable, size);
      var val = this._word >>> 32 - bits;
      this._bitsAvailable -= bits;
      if (this._bitsAvailable > 0) {
        this._word <<= bits;
      } else if (this._bytesAvailable > 0) {
        this._loadWord();
      }
      bits = size - bits;
      if (bits > 0 && this._bitsAvailable) {
        return val << bits | this.readBits(bits);
      }
      return val;
    }
  }, {
    key: "skipLZ",
    value: function skipLZ() {
      var leadingZeroCount;
      for (leadingZeroCount = 0; leadingZeroCount < this._bitsAvailable; ++leadingZeroCount) {
        if ((this._word & 2147483648 >>> leadingZeroCount) !== 0) {
          this._word <<= leadingZeroCount;
          this._bitsAvailable -= leadingZeroCount;
          return leadingZeroCount;
        }
      }
      this._loadWord();
      return leadingZeroCount + this.skipLZ();
    }
  }, {
    key: "skipUEG",
    value: function skipUEG() {
      this.skipBits(1 + this.skipLZ());
    }
  }, {
    key: "readUEG",
    value: function readUEG() {
      var clz = this.skipLZ();
      return this.readBits(clz + 1) - 1;
    }
  }, {
    key: "readEG",
    value: function readEG() {
      var val = this.readUEG();
      if (1 & val) {
        return 1 + val >>> 1;
      }
      return -1 * (val >>> 1);
    }
  }, {
    key: "readBool",
    value: function readBool() {
      return this.readBits(1) === 1;
    }
  }, {
    key: "readUByte",
    value: function readUByte() {
      return this.readBits(8);
    }
  }, {
    key: "skipScalingList",
    value: function skipScalingList(count) {
      var lastScale = 8;
      var nextScale = 8;
      var deltaScale;
      for (var j = 0; j < count; j++) {
        if (nextScale !== 0) {
          deltaScale = this.readEG();
          nextScale = (lastScale + deltaScale + 256) % 256;
        }
        lastScale = nextScale === 0 ? lastScale : nextScale;
      }
    }
  }]);
  return ExpGolomb2;
}();

// node_modules/xgplayer-transmuxer/es/codec/avc.js
var AVC = function() {
  function AVC2() {
    _classCallCheck2(this, AVC2);
  }
  _createClass2(AVC2, null, [{
    key: "parseAVCDecoderConfigurationRecord",
    value: function parseAVCDecoderConfigurationRecord(data) {
      if (data.length < 7)
        return;
      var nalUnitSize = (data[4] & 3) + 1;
      var spsParsed;
      var spsArr = [];
      var ppsArr = [];
      var offset = 6;
      var spsCount = data[5] & 31;
      var spsSize;
      for (var i = 0; i < spsCount; i++) {
        spsSize = data[offset] << 8 | data[offset + 1];
        offset += 2;
        if (!spsSize)
          continue;
        var sps = data.subarray(offset, offset + spsSize);
        offset += spsSize;
        spsArr.push(sps);
        if (!spsParsed) {
          spsParsed = AVC2.parseSPS(NALu.removeEPB(sps));
        }
      }
      var ppsCount = data[offset];
      offset++;
      var ppsSize;
      for (var _i = 0; _i < ppsCount; _i++) {
        ppsSize = data[offset] << 8 | data[offset + 1];
        offset += 2;
        if (!ppsSize)
          continue;
        ppsArr.push(data.subarray(offset, offset + ppsSize));
        offset += ppsSize;
      }
      return {
        sps: spsParsed,
        spsArr,
        ppsArr,
        nalUnitSize
      };
    }
  }, {
    key: "parseSPS",
    value: function parseSPS(unit) {
      var eg = new ExpGolomb(unit);
      eg.readUByte();
      var profileIdc = eg.readUByte();
      var profileCompatibility = eg.readUByte();
      var levelIdc = eg.readUByte();
      eg.skipUEG();
      var chromaFormat = 420;
      if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
        var chromaFormatIdc = eg.readUEG();
        if (chromaFormatIdc <= 3)
          chromaFormat = [0, 420, 422, 444][chromaFormatIdc];
        if (chromaFormatIdc === 3)
          eg.skipBits(1);
        eg.skipUEG();
        eg.skipUEG();
        eg.skipBits(1);
        if (eg.readBool()) {
          var scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
          for (var i = 0; i < scalingListCount; i++) {
            if (eg.readBool()) {
              if (i < 6) {
                eg.skipScalingList(16);
              } else {
                eg.skipScalingList(64);
              }
            }
          }
        }
      }
      eg.skipUEG();
      var picOrderCntType = eg.readUEG();
      if (picOrderCntType === 0) {
        eg.readUEG();
      } else if (picOrderCntType === 1) {
        eg.skipBits(1);
        eg.skipUEG();
        eg.skipUEG();
        var numRefFramesInPicOrderCntCycle = eg.readUEG();
        for (var _i2 = 0; _i2 < numRefFramesInPicOrderCntCycle; _i2++) {
          eg.skipUEG();
        }
      }
      eg.skipUEG();
      eg.skipBits(1);
      var picWidthInMbsMinus1 = eg.readUEG();
      var picHeightInMapUnitsMinus1 = eg.readUEG();
      var frameMbsOnlyFlag = eg.readBits(1);
      if (frameMbsOnlyFlag === 0)
        eg.skipBits(1);
      eg.skipBits(1);
      var frameCropLeftOffset = 0;
      var frameCropRightOffset = 0;
      var frameCropTopOffset = 0;
      var frameCropBottomOffset = 0;
      if (eg.readBool()) {
        frameCropLeftOffset = eg.readUEG();
        frameCropRightOffset = eg.readUEG();
        frameCropTopOffset = eg.readUEG();
        frameCropBottomOffset = eg.readUEG();
      }
      var sarRatio;
      var fixedFrame;
      var fpsNum;
      var fpsDen;
      var fps;
      if (eg.readBool()) {
        if (eg.readBool()) {
          var aspectRatioIdc = eg.readUByte();
          switch (aspectRatioIdc) {
            case 1:
              sarRatio = [1, 1];
              break;
            case 2:
              sarRatio = [12, 11];
              break;
            case 3:
              sarRatio = [10, 11];
              break;
            case 4:
              sarRatio = [16, 11];
              break;
            case 5:
              sarRatio = [40, 33];
              break;
            case 6:
              sarRatio = [24, 11];
              break;
            case 7:
              sarRatio = [20, 11];
              break;
            case 8:
              sarRatio = [32, 11];
              break;
            case 9:
              sarRatio = [80, 33];
              break;
            case 10:
              sarRatio = [18, 11];
              break;
            case 11:
              sarRatio = [15, 11];
              break;
            case 12:
              sarRatio = [64, 33];
              break;
            case 13:
              sarRatio = [160, 99];
              break;
            case 14:
              sarRatio = [4, 3];
              break;
            case 15:
              sarRatio = [3, 2];
              break;
            case 16:
              sarRatio = [2, 1];
              break;
            case 255: {
              sarRatio = [eg.readUByte() << 8 | eg.readUByte(), eg.readUByte() << 8 | eg.readUByte()];
              break;
            }
          }
        }
        if (eg.readBool())
          eg.readBool();
        if (eg.readBool()) {
          eg.readBits(4);
          if (eg.readBool())
            eg.readBits(24);
        }
        if (eg.readBool()) {
          eg.readUEG();
          eg.readUEG();
        }
        if (eg.readBool()) {
          var numUnitsInTick = eg.readBits(32);
          var timeScale = eg.readBits(32);
          fixedFrame = eg.readBool();
          fpsNum = timeScale;
          fpsDen = numUnitsInTick * 2;
          fps = fpsNum / fpsDen;
        }
      }
      return {
        codec: getAvcCodec(unit.subarray(1, 4)),
        profileIdc,
        profileCompatibility,
        levelIdc,
        chromaFormat,
        width: Math.ceil((picWidthInMbsMinus1 + 1) * 16 - 2 * (frameCropLeftOffset + frameCropRightOffset)),
        height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
        sarRatio,
        fpsNum,
        fpsDen,
        fps,
        fixedFrame
      };
    }
  }]);
  return AVC2;
}();

// node_modules/xgplayer-transmuxer/es/codec/hevc.js
var HEVC = function() {
  function HEVC2() {
    _classCallCheck2(this, HEVC2);
  }
  _createClass2(HEVC2, null, [{
    key: "parseHEVCDecoderConfigurationRecord",
    value: function parseHEVCDecoderConfigurationRecord(data) {
      var hvcC = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (data.length < 23)
        return;
      hvcC = hvcC || {};
      var nalUnitSize = (data[21] & 3) + 1;
      var vpsParsed;
      var spsParsed;
      var spsArr = [];
      var ppsArr = [];
      var vpsArr = [];
      var offset = 23;
      var numOfArrays = data[22];
      var nalUnitType;
      var numNalus;
      var nalSize;
      for (var i = 0; i < numOfArrays; i++) {
        nalUnitType = data[offset] & 63;
        numNalus = data[offset + 1] << 8 | data[offset + 2];
        offset += 3;
        for (var j = 0; j < numNalus; j++) {
          nalSize = data[offset] << 8 | data[offset + 1];
          offset += 2;
          if (!nalSize)
            continue;
          switch (nalUnitType) {
            case 32:
              {
                var vps = data.subarray(offset, offset + nalSize);
                if (!vpsParsed)
                  vpsParsed = HEVC2.parseVPS(NALu.removeEPB(vps), hvcC);
                vpsArr.push(vps);
              }
              break;
            case 33:
              {
                var sps = data.subarray(offset, offset + nalSize);
                if (!spsParsed)
                  spsParsed = HEVC2.parseSPS(NALu.removeEPB(sps), hvcC);
                spsArr.push(sps);
              }
              break;
            case 34:
              ppsArr.push(data.subarray(offset, offset + nalSize));
              break;
          }
          offset += nalSize;
        }
      }
      return {
        hvcC,
        sps: spsParsed,
        spsArr,
        ppsArr,
        vpsArr,
        nalUnitSize
      };
    }
  }, {
    key: "parseVPS",
    value: function parseVPS(unit, hvcC) {
      hvcC = hvcC || {};
      var eg = new ExpGolomb(unit);
      eg.readUByte();
      eg.readUByte();
      eg.readBits(12);
      var vpsMaxSubLayersMinus1 = eg.readBits(3);
      hvcC.numTemporalLayers = Math.max(hvcC.numTemporalLayers || 0, vpsMaxSubLayersMinus1 + 1);
      eg.readBits(17);
      HEVC2._parseProfileTierLevel(eg, vpsMaxSubLayersMinus1, hvcC);
      return hvcC;
    }
  }, {
    key: "parseSPS",
    value: function parseSPS(unit) {
      var hvcC = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      hvcC = hvcC || {};
      var eg = new ExpGolomb(unit);
      eg.readUByte();
      eg.readUByte();
      eg.readBits(4);
      var spsMaxSubLayersMinus1 = eg.readBits(3);
      hvcC.numTemporalLayers = Math.max(spsMaxSubLayersMinus1 + 1, hvcC.numTemporalLayers || 0);
      hvcC.temporalIdNested = eg.readBits(1);
      HEVC2._parseProfileTierLevel(eg, spsMaxSubLayersMinus1, hvcC);
      eg.readUEG();
      var chromaFormatIdc = hvcC.chromaFormatIdc = eg.readUEG();
      var chromaFormat = 420;
      if (chromaFormatIdc <= 3)
        chromaFormat = [0, 420, 422, 444][chromaFormatIdc];
      var separateColourPlaneFlag = 0;
      if (chromaFormatIdc === 3) {
        separateColourPlaneFlag = eg.readBits(1);
      }
      var width = eg.readUEG();
      var height = eg.readUEG();
      var conformanceWindowFlag = eg.readBits(1);
      var confWinLeftOffset;
      var confWinRightOffset;
      var confWinTopOffset;
      var confWinBottomOffset;
      if (conformanceWindowFlag === 1) {
        confWinLeftOffset = eg.readUEG();
        confWinRightOffset = eg.readUEG();
        confWinTopOffset = eg.readUEG();
        confWinBottomOffset = eg.readUEG();
      }
      hvcC.bitDepthLumaMinus8 = eg.readUEG();
      hvcC.bitDepthChromaMinus8 = eg.readUEG();
      if (conformanceWindowFlag === 1) {
        var subWidthC = (chromaFormatIdc === 1 || chromaFormatIdc === 2) && separateColourPlaneFlag === 0 ? 2 : 1;
        var subHeightC = chromaFormatIdc === 1 && separateColourPlaneFlag === 0 ? 2 : 1;
        width -= subWidthC * (confWinRightOffset + confWinLeftOffset);
        height -= subHeightC * (confWinBottomOffset + confWinTopOffset);
      }
      return {
        codec: "hev1.1.6.L93.B0",
        width,
        height,
        chromaFormat,
        hvcC
      };
    }
  }, {
    key: "_parseProfileTierLevel",
    value: function _parseProfileTierLevel(eg, maxSubLayersMinus1, hvcC) {
      var generalTierFlag = hvcC.generalTierFlag || 0;
      hvcC.generalProfileSpace = eg.readBits(2);
      hvcC.generalTierFlag = Math.max(eg.readBits(1), generalTierFlag);
      hvcC.generalProfileIdc = Math.max(eg.readBits(5), hvcC.generalProfileIdc || 0);
      hvcC.generalProfileCompatibilityFlags = eg.readBits(32);
      hvcC.generalConstraintIndicatorFlags = [eg.readBits(8), eg.readBits(8), eg.readBits(8), eg.readBits(8), eg.readBits(8), eg.readBits(8)];
      var generalLevelIdc = eg.readBits(8);
      if (generalTierFlag < hvcC.generalTierFlag) {
        hvcC.generalLevelIdc = generalLevelIdc;
      } else {
        hvcC.generalLevelIdc = Math.max(generalLevelIdc, hvcC.generalLevelIdc || 0);
      }
      var subLayerProfilePresentFlag = [];
      var subLayerLevelPresentFlag = [];
      for (var j = 0; j < maxSubLayersMinus1; j++) {
        subLayerProfilePresentFlag[j] = eg.readBits(1);
        subLayerLevelPresentFlag[j] = eg.readBits(1);
      }
      if (maxSubLayersMinus1 > 0) {
        eg.readBits((8 - maxSubLayersMinus1) * 2);
      }
      for (var i = 0; i < maxSubLayersMinus1; i++) {
        if (subLayerProfilePresentFlag[i] !== 0) {
          eg.readBits(2);
          eg.readBits(1);
          eg.readBits(5);
          eg.readBits(16);
          eg.readBits(16);
          eg.readBits(4);
          eg.readBits(16);
          eg.readBits(16);
          eg.readBits(12);
        }
        if (subLayerLevelPresentFlag[i] !== 0) {
          eg.readBits(8);
        }
      }
    }
  }]);
  return HEVC2;
}();

// node_modules/xgplayer-transmuxer/es/utils/utf8.js
var UTF8 = function() {
  function UTF82() {
    _classCallCheck2(this, UTF82);
  }
  _createClass2(UTF82, null, [{
    key: "decode",
    value: function decode(uint8array) {
      var out = [];
      var input = uint8array;
      var i = 0;
      var length = uint8array.length;
      while (i < length) {
        if (input[i] < 128) {
          out.push(String.fromCharCode(input[i]));
          ++i;
          continue;
        } else if (input[i] < 192)
          ;
        else if (input[i] < 224) {
          if (UTF82._checkContinuation(input, i, 1)) {
            var ucs4 = (input[i] & 31) << 6 | input[i + 1] & 63;
            if (ucs4 >= 128) {
              out.push(String.fromCharCode(ucs4 & 65535));
              i += 2;
              continue;
            }
          }
        } else if (input[i] < 240) {
          if (UTF82._checkContinuation(input, i, 2)) {
            var _ucs = (input[i] & 15) << 12 | (input[i + 1] & 63) << 6 | input[i + 2] & 63;
            if (_ucs >= 2048 && (_ucs & 63488) !== 55296) {
              out.push(String.fromCharCode(_ucs & 65535));
              i += 3;
              continue;
            }
          }
        } else if (input[i] < 248) {
          if (UTF82._checkContinuation(input, i, 3)) {
            var _ucs2 = (input[i] & 7) << 18 | (input[i + 1] & 63) << 12 | (input[i + 2] & 63) << 6 | input[i + 3] & 63;
            if (_ucs2 > 65536 && _ucs2 < 1114112) {
              _ucs2 -= 65536;
              out.push(String.fromCharCode(_ucs2 >>> 10 | 55296));
              out.push(String.fromCharCode(_ucs2 & 1023 | 56320));
              i += 4;
              continue;
            }
          }
        }
        out.push(String.fromCharCode(65533));
        ++i;
      }
      return out.join("");
    }
  }, {
    key: "_checkContinuation",
    value: function _checkContinuation(uint8array, start, checkLength) {
      var array = uint8array;
      if (start + checkLength < array.length) {
        while (checkLength--) {
          if ((array[++start] & 192) !== 128) {
            return false;
          }
        }
        return true;
      } else {
        return false;
      }
    }
  }]);
  return UTF82;
}();

// node_modules/xgplayer-transmuxer/es/flv/amf.js
var AMF = function() {
  function AMF2() {
    _classCallCheck2(this, AMF2);
  }
  _createClass2(AMF2, null, [{
    key: "parse",
    value: function parse2(data) {
      if (data.length < 3)
        return;
      var ret = {};
      var name = AMF2._parseValue(new DataView(data.buffer, data.byteOffset, data.byteLength));
      var value = AMF2._parseValue(new DataView(data.buffer, data.byteOffset + name.size, data.byteLength - name.size));
      ret[name.data] = value.data;
      return ret;
    }
  }, {
    key: "_parseValue",
    value: function _parseValue(view) {
      var dataLen = view.byteLength;
      var type = view.getUint8(0);
      var offset = 1;
      var isEnd = false;
      var value;
      switch (type) {
        case 0:
          value = view.getFloat64(1);
          offset += 8;
          break;
        case 1: {
          value = !!view.getUint8(1);
          offset += 1;
          break;
        }
        case 2:
          {
            var _AMF$_parseString = AMF2._parseString(new DataView(view.buffer, view.byteOffset + offset, view.byteLength - offset)), data = _AMF$_parseString.data, size = _AMF$_parseString.size;
            value = data;
            offset += size;
          }
          break;
        case 3:
          {
            value = {};
            var terminal = 0;
            if ((view.getUint32(dataLen - 4) & 16777215) === 9) {
              terminal = 3;
            }
            while (offset < dataLen - 4) {
              var _AMF$_parseObject = AMF2._parseObject(new DataView(view.buffer, view.byteOffset + offset, view.byteLength - offset - terminal)), _size = _AMF$_parseObject.size, _data = _AMF$_parseObject.data, _isEnd = _AMF$_parseObject.isEnd;
              if (_isEnd)
                break;
              value[_data.name] = _data.value;
              offset += _size;
            }
            if (offset <= dataLen - 3) {
              var marker = view.getUint32(offset - 1) & 16777215;
              if (marker === 9)
                offset += 3;
            }
          }
          break;
        case 8:
          {
            value = {};
            offset += 4;
            var _terminal = 0;
            if ((view.getUint32(dataLen - 4) & 16777215) === 9) {
              _terminal = 3;
            }
            while (offset < dataLen - 8) {
              var _AMF$_parseObject2 = AMF2._parseObject(new DataView(view.buffer, view.byteOffset + offset, view.byteLength - offset - _terminal)), _size2 = _AMF$_parseObject2.size, _data2 = _AMF$_parseObject2.data, _isEnd2 = _AMF$_parseObject2.isEnd;
              if (_isEnd2)
                break;
              value[_data2.name] = _data2.value;
              offset += _size2;
            }
            if (offset <= dataLen - 3) {
              var _marker = view.getUint32(offset - 1) & 16777215;
              if (_marker === 9) {
                offset += 3;
              }
            }
          }
          break;
        case 9:
          value = void 0;
          offset = 1;
          isEnd = true;
          break;
        case 10:
          {
            value = [];
            var strictArrayLength = view.getUint32(1);
            offset += 4;
            for (var i = 0; i < strictArrayLength; i++) {
              var _AMF$_parseValue = AMF2._parseValue(new DataView(view.buffer, view.byteOffset + offset, view.byteLength - offset)), _data3 = _AMF$_parseValue.data, _size3 = _AMF$_parseValue.size;
              value.push(_data3);
              offset += _size3;
            }
          }
          break;
        case 11:
          {
            var timestamp = view.getFloat64(offset) + view.getInt16(offset + 8) * 6e4;
            value = new Date(timestamp);
            offset += 10;
          }
          break;
        case 12:
          {
            var length = view.getUint32(1);
            offset += 4;
            value = "";
            if (length > 0) {
              value = UTF8.decode(new Uint8Array(view.buffer, view.byteOffset + offset, length));
            }
            offset += length;
          }
          break;
        default:
          offset = dataLen;
          break;
      }
      return {
        data: value,
        size: offset,
        isEnd
      };
    }
  }, {
    key: "_parseString",
    value: function _parseString(view) {
      var length = view.getUint16(0);
      var data = "";
      if (length > 0) {
        data = UTF8.decode(new Uint8Array(view.buffer, view.byteOffset + 2, length));
      }
      return {
        data,
        size: 2 + length
      };
    }
  }, {
    key: "_parseObject",
    value: function _parseObject(view) {
      if (view.byteLength < 3)
        return;
      var name = AMF2._parseString(view);
      var value = AMF2._parseValue(new DataView(view.buffer, view.byteOffset + name.size, view.byteLength - name.size));
      return {
        data: {
          name: name.data,
          value: value.data
        },
        size: name.size + value.size,
        isEnd: value.isEnd
      };
    }
  }]);
  return AMF2;
}();

// node_modules/xgplayer-transmuxer/es/flv/index.js
var logger = new Logger2("FlvDemuxer");
var FlvDemuxer = function() {
  function FlvDemuxer2(videoTrack, audioTrack, metadataTrack) {
    _classCallCheck2(this, FlvDemuxer2);
    _defineProperty2(this, "_headerParsed", false);
    _defineProperty2(this, "_remainingData", null);
    _defineProperty2(this, "_gopId", 0);
    _defineProperty2(this, "_needAddMetaBeforeKeyFrameNal", true);
    this.videoTrack = videoTrack || new VideoTrack();
    this.audioTrack = audioTrack || new AudioTrack();
    this.metadataTrack = metadataTrack || new MetadataTrack();
    this._fixer = new FlvFixer(this.videoTrack, this.audioTrack, this.metadataTrack);
  }
  _createClass2(FlvDemuxer2, [{
    key: "demux",
    value: function demux(data) {
      var discontinuity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var contiguous = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var audioTrack = this.audioTrack, videoTrack = this.videoTrack, metadataTrack = this.metadataTrack;
      if (discontinuity || !contiguous) {
        this._remainingData = null;
        this._headerParsed = false;
      }
      if (discontinuity) {
        videoTrack.reset();
        audioTrack.reset();
        metadataTrack.reset();
      } else {
        videoTrack.samples = [];
        audioTrack.samples = [];
        metadataTrack.seiSamples = [];
        metadataTrack.flvScriptSamples = [];
        videoTrack.warnings = [];
        audioTrack.warnings = [];
        if (this._remainingData) {
          data = concatUint8Array2(this._remainingData, data);
          this._remainingData = null;
        }
      }
      if (!data.length) {
        return {
          videoTrack,
          audioTrack,
          metadataTrack
        };
      }
      var offset = 0;
      if (!this._headerParsed) {
        if (!FlvDemuxer2.probe(data)) {
          throw new Error("Invalid flv file");
        }
        audioTrack.present = (data[4] & 4) >>> 2 !== 0;
        videoTrack.present = (data[4] & 1) !== 0;
        this._headerParsed = true;
        offset = readBig32(data, 5) + 4;
      }
      var dataLen = data.length;
      var tagType;
      var dataSize;
      var timestamp;
      var bodyData;
      var prevTagSize;
      while (offset + 15 < dataLen) {
        tagType = data[offset];
        dataSize = data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3];
        if (offset + 15 + dataSize > dataLen)
          break;
        timestamp = (data[offset + 7] << 24 >>> 0) + (data[offset + 4] << 16) + (data[offset + 5] << 8) + data[offset + 6];
        offset += 11;
        bodyData = data.subarray(offset, offset + dataSize);
        if (tagType === 8) {
          this._parseAudio(bodyData, timestamp);
        } else if (tagType === 9) {
          this._parseVideo(bodyData, timestamp);
        } else if (tagType === 18) {
          this._parseScript(bodyData, timestamp);
        } else {
          logger.warn("Invalid tag type: ".concat(tagType));
        }
        offset += dataSize;
        prevTagSize = readBig32(data, offset);
        if (prevTagSize !== 11 + dataSize) {
          logger.warn("Invalid PrevTagSize ".concat(prevTagSize, " (").concat(11 + dataSize, ")"));
        }
        offset += 4;
      }
      if (offset < dataLen) {
        this._remainingData = data.subarray(offset);
      }
      audioTrack.formatTimescale = videoTrack.formatTimescale = videoTrack.timescale = metadataTrack.timescale = 1e3;
      audioTrack.timescale = audioTrack.sampleRate || 0;
      if (!audioTrack.exist() && audioTrack.hasSample()) {
        audioTrack.reset();
      }
      if (!videoTrack.exist() && videoTrack.hasSample()) {
        videoTrack.reset();
      }
      return {
        videoTrack,
        audioTrack,
        metadataTrack
      };
    }
  }, {
    key: "fix",
    value: function fix(startTime, discontinuity, contiguous) {
      this._fixer.fix(startTime, discontinuity, contiguous);
      return {
        videoTrack: this.videoTrack,
        audioTrack: this.audioTrack,
        metadataTrack: this.metadataTrack
      };
    }
  }, {
    key: "demuxAndFix",
    value: function demuxAndFix(data, discontinuity, contiguous, startTime) {
      this.demux(data, discontinuity, contiguous);
      return this.fix(startTime, discontinuity, contiguous);
    }
  }, {
    key: "_parseAudio",
    value: function _parseAudio(data, pts) {
      if (!data.length)
        return;
      var format = (data[0] & 240) >>> 4;
      var track = this.audioTrack;
      if (format !== 10 && format !== 7 && format !== 8) {
        logger.warn("Unsupported sound format: ".concat(format));
        track.reset();
        return;
      }
      if (format !== 10) {
        var soundRate = (data[0] & 12) >> 2;
        var soundSize = (data[0] & 2) >> 1;
        var soundType = data[0] & 1;
        track.sampleRate = FlvDemuxer2.AUDIO_RATE[soundRate];
        track.sampleSize = soundSize ? 16 : 8;
        track.channelCount = soundType + 1;
      }
      if (format === 10) {
        this._parseAac(data, pts);
      } else {
        this._parseG711(data, pts, format);
      }
    }
  }, {
    key: "_parseG711",
    value: function _parseG711(data, pts, format) {
      var track = this.audioTrack;
      track.codecType = format === 7 ? AudioCodecType.G711PCMA : AudioCodecType.G711PCMU;
      track.sampleRate = 8e3;
      track.codec = track.codecType;
      track.samples.push(new AudioSample(pts, data.subarray(1)));
    }
  }, {
    key: "_parseAac",
    value: function _parseAac(data, pts) {
      var track = this.audioTrack;
      track.codecType = AudioCodecType.AAC;
      if (data[1] === 0) {
        var ret = AAC.parseAudioSpecificConfig(data.subarray(2));
        if (ret) {
          track.codec = ret.codec;
          track.channelCount = ret.channelCount;
          track.sampleRate = ret.sampleRate;
          track.config = ret.config;
          track.objectType = ret.objectType;
          track.sampleRateIndex = ret.samplingFrequencyIndex;
        } else {
          track.reset();
          logger.warn("Cannot parse AudioSpecificConfig", data);
        }
      } else if (data[1] === 1) {
        if (pts === void 0 || pts === null)
          return;
        track.samples.push(new AudioSample(pts, data.subarray(2)));
      } else {
        logger.warn("Unknown AACPacketType: ".concat(data[1]));
      }
    }
  }, {
    key: "_parseVideo",
    value: function _parseVideo(data, dts) {
      var _this = this;
      if (data.length < 6)
        return;
      var frameType = (data[0] & 240) >>> 4;
      var codecId = data[0] & 15;
      var track = this.videoTrack;
      if (codecId !== 7 && codecId !== 12) {
        track.reset();
        logger.warn("Unsupported codecId: ".concat(codecId));
        return;
      }
      var isHevc = codecId === 12;
      track.codecType = isHevc ? VideoCodecType.HEVC : VideoCodecType.AVC;
      var packetType = data[1];
      var cts = (data[2] << 16 | data[3] << 8 | data[4]) << 8 >> 8;
      if (packetType === 0) {
        var configData = data.subarray(5);
        var ret = isHevc ? HEVC.parseHEVCDecoderConfigurationRecord(configData) : AVC.parseAVCDecoderConfigurationRecord(configData);
        if (ret) {
          var hvcC = ret.hvcC, sps = ret.sps, ppsArr = ret.ppsArr, spsArr = ret.spsArr, vpsArr = ret.vpsArr, nalUnitSize = ret.nalUnitSize;
          if (hvcC) {
            track.hvcC = track.hvcC || hvcC;
          }
          if (sps) {
            track.codec = sps.codec;
            track.width = sps.width;
            track.height = sps.height;
            track.sarRatio = sps.sarRatio;
            track.fpsNum = sps.fpsNum;
            track.fpsDen = sps.fpsDen;
          }
          if (spsArr.length)
            track.sps = spsArr;
          if (ppsArr.length)
            track.pps = ppsArr;
          if (vpsArr && vpsArr.length)
            track.vps = vpsArr;
          if (nalUnitSize)
            track.nalUnitSize = nalUnitSize;
        } else {
          logger.warn("Cannot parse ".concat(isHevc ? "HEVC" : "AVC", "DecoderConfigurationRecord"), data);
        }
      } else if (packetType === 1) {
        var units = NALu.parseAvcC(data.subarray(5), track.nalUnitSize);
        units = this._checkAddMetaNalToUnits(isHevc, units, track);
        if (units && units.length) {
          var sample = new VideoSample(dts + cts, dts, units);
          if (frameType === 1) {
            sample.setToKeyframe();
          }
          track.samples.push(sample);
          units.forEach(function(unit) {
            var type = isHevc ? unit[0] >>> 1 & 63 : unit[0] & 31;
            switch (type) {
              case 5:
              case 16:
              case 17:
              case 18:
              case 19:
              case 20:
              case 21:
              case 22:
              case 23:
                if (!isHevc && type !== 5 || isHevc && type === 5)
                  break;
                sample.setToKeyframe();
                break;
              case 6:
              case 39:
              case 40:
                if (!isHevc && type !== 6 || isHevc && type === 6)
                  break;
                _this.metadataTrack.seiSamples.push(new SeiSample(NALu.parseSEI(NALu.removeEPB(unit), isHevc), dts + cts));
                break;
            }
          });
          if (sample.keyframe) {
            this._gopId++;
          }
          sample.gopId = this._gopId;
        } else {
          logger.warn("Cannot parse NALUs", data);
        }
      } else if (packetType === 2)
        ;
      else {
        logger.warn("Unknown AVCPacketType: ".concat(packetType));
      }
    }
  }, {
    key: "_checkAddMetaNalToUnits",
    value: function _checkAddMetaNalToUnits(hevc, units, track) {
      if (!hevc || !this._needAddMetaBeforeKeyFrameNal) {
        this._needAddMetaBeforeKeyFrameNal = false;
        return units;
      }
      var nalTypes = units.map(function(x2) {
        return x2[0] >>> 1 & 63;
      });
      if (nalTypes.includes(32)) {
        this._needAddMetaBeforeKeyFrameNal = false;
        return units;
      }
      units.unshift(track.pps[0]);
      units.unshift(track.sps[0]);
      units.unshift(track.vps[0]);
      return units.filter(Boolean);
    }
  }, {
    key: "_parseScript",
    value: function _parseScript(data, pts) {
      this.metadataTrack.flvScriptSamples.push(new FlvScriptSample(AMF.parse(data), pts));
    }
  }], [{
    key: "probe",
    value: function probe(data) {
      if (data[0] !== 70 || data[1] !== 76 || data[2] !== 86 || data[3] !== 1) {
        return false;
      }
      return readBig32(data, 5) >= 9;
    }
  }]);
  return FlvDemuxer2;
}();
_defineProperty2(FlvDemuxer, "AUDIO_RATE", [5500, 11e3, 22e3, 44e3]);

// node_modules/xgplayer-transmuxer/es/mpeg-ts/fixer.js
var LARGE_AV_FIRST_FRAME_GAP2 = 9e4 / 2;
var AUDIO_GAP_OVERLAP_THRESHOLD_COUNT2 = 3;
var MAX_SILENT_FRAME_DURATION2 = 9e4;
var AUDIO_EXCETION_LOG_EMIT_DURATION2 = 5 * 9e4;
var MAX_VIDEO_FRAME_DURATION2 = 9e4;
var MAX_DTS_DELTA_WITH_NEXT_CHUNK2 = 9e4 / 2;
var TsFixer = function() {
  function TsFixer2(videoTrack, audioTrack, metadataTrack) {
    _classCallCheck2(this, TsFixer2);
    this.videoTrack = videoTrack;
    this.audioTrack = audioTrack;
    this.metadataTrack = metadataTrack;
    this._baseDts = -1;
    this._baseDtsInited = false;
    this._audioNextPts = void 0;
    this._videoNextDts = void 0;
    this._audioTimestampBreak = false;
    this._videoTimestampBreak = false;
    this._lastAudioExceptionGapDot = 0;
    this._lastAudioExceptionOverlapDot = 0;
    this._lastAudioExceptionLargeGapDot = 0;
  }
  _createClass2(TsFixer2, [{
    key: "fix",
    value: function fix() {
      var _this = this;
      var startTime = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var discontinuity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var contiguous = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      startTime = Math.round(startTime * 9e4);
      var videoTrack = this.videoTrack;
      var audioTrack = this.audioTrack;
      var vSamples = videoTrack.samples;
      var aSamples = audioTrack.samples;
      if (!vSamples.length && !aSamples.length)
        return;
      var firstVideoSample = vSamples[0];
      var firstAudioSample = aSamples[0];
      var vaDelta = 0;
      if (vSamples.length && aSamples.length) {
        vaDelta = firstVideoSample.dts - firstAudioSample.pts;
      }
      if (!this._baseDtsInited) {
        this._calculateBaseDts(this.audioTrack, this.videoTrack);
      }
      if (discontinuity) {
        this._calculateBaseDts(this.audioTrack, this.videoTrack);
        this._baseDts -= startTime;
      }
      if (!contiguous) {
        this._videoNextDts = vaDelta > 0 ? startTime + vaDelta : startTime;
        this._audioNextPts = vaDelta > 0 ? startTime : startTime - vaDelta;
        var vDeltaToNextDts = firstVideoSample ? firstVideoSample.dts - this._baseDts - this._videoNextDts : 0;
        var aDeltaToNextDts = firstAudioSample ? firstAudioSample.pts - this._baseDts - this._audioNextPts : 0;
        if (Math.abs(vDeltaToNextDts || aDeltaToNextDts) > MAX_VIDEO_FRAME_DURATION2) {
          this._calculateBaseDts(this.audioTrack, this.videoTrack);
          this._baseDts -= startTime;
        }
      }
      this._resetBaseDtsWhenStreamBreaked();
      this._fixAudio(audioTrack);
      this._fixVideo(videoTrack);
      if (this.metadataTrack.exist()) {
        var timescale = this.metadataTrack.timescale;
        this.metadataTrack.seiSamples.forEach(function(s) {
          s.pts = s.originPts - _this._baseDts;
          s.time = Math.max(0, s.pts) / timescale;
        });
      }
      if (videoTrack.samples.length) {
        videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
      }
      if (audioTrack.samples.length) {
        audioTrack.baseMediaDecodeTime = audioTrack.samples[0].pts * audioTrack.timescale / 9e4;
      }
    }
  }, {
    key: "_fixVideo",
    value: function _fixVideo(videoTrack) {
      var _this2 = this;
      var samples = videoTrack.samples;
      if (!samples.length)
        return;
      samples.forEach(function(x2) {
        x2.dts -= _this2._baseDts;
        x2.pts -= _this2._baseDts;
      });
      if (this._videoNextDts === void 0) {
        var samp0 = samples[0];
        this._videoNextDts = samp0.dts;
      }
      var len = samples.length;
      var sampleDuration = 0;
      var firstSample = samples[0];
      var nextSample = samples[1];
      var vDelta = this._videoNextDts - firstSample.dts;
      if (Math.abs(vDelta) > MAX_DTS_DELTA_WITH_NEXT_CHUNK2) {
        var _samples$;
        firstSample.dts += vDelta;
        firstSample.pts += vDelta;
        videoTrack.warnings.push({
          type: WarningType.LARGE_VIDEO_GAP_BETWEEN_CHUNK,
          nextDts: this._videoNextDts,
          firstSampleDts: firstSample.dts,
          nextSampleDts: (_samples$ = samples[1]) === null || _samples$ === void 0 ? void 0 : _samples$.dts,
          sampleDuration: vDelta
        });
        if (nextSample && Math.abs(nextSample.dts - firstSample.dts) > MAX_VIDEO_FRAME_DURATION2) {
          this._videoTimestampBreak = true;
          samples.forEach(function(x2, i2) {
            if (i2 === 0)
              return;
            x2.dts += vDelta;
            x2.pts += vDelta;
          });
        }
      }
      var refSampleDurationInt;
      if (videoTrack.fpsNum && videoTrack.fpsDen) {
        refSampleDurationInt = videoTrack.timescale * (videoTrack.fpsDen / videoTrack.fpsNum);
      } else {
        var first = videoTrack.samples[0];
        var last = videoTrack.samples[len - 1];
        refSampleDurationInt = len === 1 ? 9e3 : Math.floor((last.dts - first.dts) / (len - 1));
      }
      for (var i = 0; i < len; i++) {
        var dts = samples[i].dts;
        var _nextSample = samples[i + 1];
        if (i < len - 1) {
          sampleDuration = _nextSample.dts - dts;
        } else if (samples[i - 1]) {
          sampleDuration = Math.min(dts - samples[i - 1].dts, refSampleDurationInt);
        } else {
          sampleDuration = refSampleDurationInt;
        }
        if (sampleDuration > MAX_VIDEO_FRAME_DURATION2 || sampleDuration < 0) {
          this._videoTimestampBreak = true;
          sampleDuration = this._audioTimestampBreak ? refSampleDurationInt : Math.max(sampleDuration, 30 * 90);
          var expectFragEnd = this._audioNextPts || 0;
          if (_nextSample && _nextSample.dts > expectFragEnd) {
            sampleDuration = refSampleDurationInt;
          }
          videoTrack.warnings.push({
            type: WarningType.LARGE_VIDEO_GAP,
            time: dts / videoTrack.timescale,
            dts,
            originDts: samples[i].originDts,
            nextDts: this._videoNextDts,
            sampleDuration,
            refSampleDuration: refSampleDurationInt
          });
        }
        samples[i].duration = sampleDuration;
        this._videoNextDts += sampleDuration;
      }
    }
  }, {
    key: "_fixAudio",
    value: function _fixAudio(audioTrack) {
      var _this3 = this;
      var samples = audioTrack.samples;
      if (!samples.length)
        return;
      samples.forEach(function(x2) {
        x2.pts -= _this3._baseDts;
        x2.dts = x2.pts;
      });
      this._doFixAudioInternal(audioTrack, samples, 9e4);
    }
  }, {
    key: "_calculateBaseDts",
    value: function _calculateBaseDts(audioTrack, videoTrack) {
      var audioSamps = audioTrack.samples;
      var videoSamps = videoTrack.samples;
      if (!audioSamps.length && !videoSamps.length) {
        return false;
      }
      var audioBasePts = Infinity;
      var videoBaseDts = Infinity;
      if (audioSamps.length) {
        audioTrack.baseDts = audioBasePts = audioSamps[0].pts;
      }
      if (videoSamps.length) {
        videoTrack.baseDts = videoBaseDts = videoSamps[0].dts;
      }
      this._baseDts = Math.min(audioBasePts, videoBaseDts);
      var delta = videoBaseDts - audioBasePts;
      if (Number.isFinite(delta) && Math.abs(delta) > LARGE_AV_FIRST_FRAME_GAP2) {
        videoTrack.warnings.push({
          type: WarningType.LARGE_AV_SHIFT,
          videoBaseDts,
          audioBasePts,
          baseDts: this._baseDts,
          delta
        });
      }
      this._baseDtsInited = true;
      return true;
    }
  }, {
    key: "_resetBaseDtsWhenStreamBreaked",
    value: function _resetBaseDtsWhenStreamBreaked() {
      if (this._baseDtsInited && this._videoTimestampBreak && this._audioTimestampBreak) {
        var calc = this._calculateBaseDts(this.audioTrack, this.videoTrack);
        if (!calc)
          return;
        this._baseDts -= Math.min(this._audioNextPts, this._videoNextDts);
        this._audioLastSample = null;
        this._videoLastSample = null;
        this._videoTimestampBreak = false;
        this._audioTimestampBreak = false;
      }
    }
  }, {
    key: "_doFixAudioInternal",
    value: function _doFixAudioInternal(audioTrack, samples, timescale) {
      if (!audioTrack.sampleDuration)
        audioTrack.sampleDuration = AAC.getFrameDuration(audioTrack.timescale, timescale);
      var refSampleDuration = audioTrack.sampleDuration;
      if (this._audioNextPts === void 0) {
        var samp0 = samples[0];
        this._audioNextPts = samp0.pts;
      }
      for (var i = 0; i < samples.length; i++) {
        var nextPts = this._audioNextPts;
        var sample = samples[i];
        var delta = sample.pts - nextPts;
        if (!this._audioTimestampBreak && delta >= AUDIO_GAP_OVERLAP_THRESHOLD_COUNT2 * refSampleDuration && delta <= MAX_SILENT_FRAME_DURATION2 && !isSafari) {
          var silentFrame = AAC.getSilentFrame(audioTrack.codec, audioTrack.channelCount) || samples[0].data.subarray();
          var count = Math.floor(delta / refSampleDuration);
          if (Math.abs(sample.pts - this._lastAudioExceptionGapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION2) {
            this._lastAudioExceptionGapDot = sample.pts;
          }
          audioTrack.warnings.push({
            type: WarningType.AUDIO_FILLED,
            pts: sample.pts,
            originPts: sample.originPts,
            count,
            nextPts,
            refSampleDuration
          });
          for (var j = 0; j < count; j++) {
            var silentSample = new AudioSample(Math.floor(nextPts), silentFrame);
            silentSample.originPts = Math.floor(this._baseDts + nextPts);
            samples.splice(i, 0, silentSample);
            this._audioNextPts += refSampleDuration;
            i++;
          }
          i--;
        } else if (delta <= -AUDIO_GAP_OVERLAP_THRESHOLD_COUNT2 * refSampleDuration && delta >= -1 * MAX_SILENT_FRAME_DURATION2) {
          if (Math.abs(sample.pts - this._lastAudioExceptionOverlapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION2) {
            this._lastAudioExceptionOverlapDot = sample.pts;
            audioTrack.warnings.push({
              type: WarningType.AUDIO_DROPPED,
              pts: sample.pts,
              originPts: sample.originPts,
              nextPts,
              refSampleDuration
            });
          }
          samples.splice(i, 1);
          i--;
        } else {
          if (Math.abs(delta) >= MAX_SILENT_FRAME_DURATION2) {
            this._audioTimestampBreak = true;
            if (Math.abs(sample.pts - this._lastAudioExceptionLargeGapDot) > AUDIO_EXCETION_LOG_EMIT_DURATION2) {
              this._lastAudioExceptionLargeGapDot = sample.pts;
              audioTrack.warnings.push({
                type: WarningType.LARGE_AUDIO_GAP,
                time: sample.pts / 1e3,
                pts: sample.pts,
                originPts: sample.originPts,
                nextPts,
                sampleDuration: delta,
                refSampleDuration
              });
            }
          }
          sample.dts = sample.pts = nextPts;
          this._audioNextPts += refSampleDuration;
        }
      }
    }
  }]);
  return TsFixer2;
}();

// node_modules/xgplayer-transmuxer/es/mpeg-ts/index.js
var logger2 = new Logger2("TsDemuxer");
var TsDemuxer = function() {
  function TsDemuxer2(videoTrack, audioTrack, metadataTrack) {
    _classCallCheck2(this, TsDemuxer2);
    _defineProperty2(this, "_pmtId", -1);
    _defineProperty2(this, "_remainingPacketData", null);
    _defineProperty2(this, "_videoPesData", []);
    _defineProperty2(this, "_audioPesData", []);
    _defineProperty2(this, "_gopId", 0);
    this.videoTrack = videoTrack || new VideoTrack();
    this.audioTrack = audioTrack || new AudioTrack();
    this.metadataTrack = metadataTrack || new MetadataTrack();
    this._fixer = new TsFixer(this.videoTrack, this.audioTrack, this.metadataTrack);
  }
  _createClass2(TsDemuxer2, [{
    key: "demux",
    value: function demux(data) {
      var discontinuity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var contiguous = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
      var audioTrack = this.audioTrack, videoTrack = this.videoTrack, metadataTrack = this.metadataTrack;
      if (discontinuity) {
        this._pmtId = -1;
        videoTrack.reset();
        audioTrack.reset();
        metadataTrack.reset();
      }
      if (!contiguous || discontinuity) {
        this._remainingPacketData = null;
        this._videoPesData = [];
        this._audioPesData = [];
      } else {
        videoTrack.samples = [];
        audioTrack.samples = [];
        metadataTrack.seiSamples = [];
        videoTrack.warnings = [];
        audioTrack.warnings = [];
        if (this._remainingPacketData) {
          data = concatUint8Array2(this._remainingPacketData, data);
          this._remainingPacketData = null;
        }
      }
      var dataLen = data.length;
      var remainingLength = dataLen % 188;
      if (remainingLength) {
        this._remainingPacketData = data.subarray(dataLen - remainingLength);
        dataLen -= remainingLength;
      }
      var videoPid = videoTrack.pid;
      var audioPid = audioTrack.pid;
      for (var start = 0; start < dataLen; start += 188) {
        if (data[start] !== 71)
          throw new Error("TS packet did not start with 0x47");
        var payloadUnitStartIndicator = !!(data[start + 1] & 64);
        var pid = ((data[start + 1] & 31) << 8) + data[start + 2];
        var adaptationFiledControl = (data[start + 3] & 48) >> 4;
        var offset = void 0;
        if (adaptationFiledControl > 1) {
          offset = start + 5 + data[start + 4];
          if (offset === start + 188)
            continue;
        } else {
          offset = start + 4;
        }
        switch (pid) {
          case 0:
            if (payloadUnitStartIndicator)
              offset += data[offset] + 1;
            this._pmtId = (data[offset + 10] & 31) << 8 | data[offset + 11];
            break;
          case this._pmtId:
            {
              if (payloadUnitStartIndicator)
                offset += data[offset] + 1;
              var tableEnd = offset + 3 + ((data[offset + 1] & 15) << 8 | data[offset + 2]) - 4;
              var programInfoLength = (data[offset + 10] & 15) << 8 | data[offset + 11];
              offset += 12 + programInfoLength;
              while (offset < tableEnd) {
                var esPid = (data[offset + 1] & 31) << 8 | data[offset + 2];
                switch (data[offset]) {
                  case 15:
                    audioTrack.pid = audioPid = esPid;
                    break;
                  case 27:
                    if (videoPid !== -1)
                      break;
                    videoTrack.codecType = VideoCodecType.AVC;
                    videoTrack.pid = videoPid = esPid;
                    break;
                  case 36:
                    if (videoPid !== -1)
                      break;
                    videoTrack.codecType = VideoCodecType.HEVC;
                    videoTrack.pid = videoPid = esPid;
                    break;
                  default:
                    logger2.warn("Unsupported stream. type: ".concat(data[offset], ", pid: ").concat(esPid));
                }
                offset += ((data[offset + 3] & 15) << 8 | data[offset + 4]) + 5;
              }
            }
            break;
          case videoPid:
            if (payloadUnitStartIndicator && this._videoPesData.length) {
              this._parseVideoData();
            }
            this._videoPesData.push(data.subarray(offset, start + 188));
            break;
          case audioPid:
            if (payloadUnitStartIndicator && this._audioPesData.length) {
              this._parseAudioData();
            }
            this._audioPesData.push(data.subarray(offset, start + 188));
            break;
          case 17:
          case 8191:
            break;
          default:
            logger2.warn("Unknown pid: ".concat(pid));
        }
      }
      this._parseVideoData();
      this._parseAudioData();
      audioTrack.formatTimescale = videoTrack.formatTimescale = videoTrack.timescale = metadataTrack.timescale = 9e4;
      audioTrack.timescale = audioTrack.sampleRate || 0;
      return {
        videoTrack,
        audioTrack,
        metadataTrack
      };
    }
  }, {
    key: "fix",
    value: function fix(startTime, discontinuity, contiguous) {
      this._fixer.fix(startTime, discontinuity, contiguous);
      return {
        videoTrack: this.videoTrack,
        audioTrack: this.audioTrack,
        metadataTrack: this.metadataTrack
      };
    }
  }, {
    key: "demuxAndFix",
    value: function demuxAndFix(data, discontinuity, contiguous, startTime) {
      this.demux(data, discontinuity, contiguous);
      return this.fix(startTime, discontinuity, contiguous);
    }
  }, {
    key: "_parseVideoData",
    value: function _parseVideoData() {
      if (!this._videoPesData.length)
        return;
      var pes = TsDemuxer2._parsePES(concatUint8Array2.apply(void 0, _toConsumableArray(this._videoPesData)));
      if (!pes) {
        logger2.warn("Cannot parse video pes", this._videoPesData);
        return;
      }
      var units = NALu.parseAnnexB(pes.data);
      if (units) {
        this._createVideoSample(units, pes.pts, pes.dts);
      } else {
        logger2.warn("Cannot parse avc units", pes);
      }
      this._videoPesData = [];
    }
  }, {
    key: "_createVideoSample",
    value: function _createVideoSample(units, pts, dts) {
      var _this = this;
      if (!units.length)
        return;
      var track = this.videoTrack;
      var isHevc = track.codecType === VideoCodecType.HEVC;
      var sample = new VideoSample(pts, dts);
      units.forEach(function(unit) {
        var type = isHevc ? unit[0] >>> 1 & 63 : unit[0] & 31;
        switch (type) {
          case 5:
          case 16:
          case 17:
          case 18:
          case 19:
          case 20:
          case 21:
          case 22:
          case 23:
            if (!isHevc && type !== 5 || isHevc && type === 5)
              break;
            sample.setToKeyframe();
            _this._gopId++;
            break;
          case 6:
          case 39:
          case 40:
            if (!isHevc && type !== 6 || isHevc && type === 6)
              break;
            _this.metadataTrack.seiSamples.push(new SeiSample(NALu.parseSEI(NALu.removeEPB(unit), isHevc), pts));
            return;
          case 32:
            if (!isHevc)
              break;
            if (!track.vps.length) {
              var hvcC = HEVC.parseVPS(NALu.removeEPB(unit), track.hvcC);
              track.hvcC = track.hvcC || hvcC;
              track.vps = [unit];
            }
            break;
          case 7:
          case 33:
            if (!isHevc && type !== 7 || isHevc && type === 7)
              break;
            if (!track.sps.length) {
              var data = NALu.removeEPB(unit);
              var spsInfo = isHevc ? HEVC.parseSPS(data, track.hvcC) : AVC.parseSPS(data);
              track.sps = [unit];
              track.hvcC = track.hvcC || spsInfo.hvcC;
              track.codec = spsInfo.codec;
              track.width = spsInfo.width;
              track.height = spsInfo.height;
              track.sarRatio = spsInfo.sarRatio;
              track.fpsNum = spsInfo.fpsNum;
              track.fpsDen = spsInfo.fpsDen;
            }
            break;
          case 8:
          case 34:
            if (!isHevc && type !== 8 || isHevc && type === 8)
              break;
            if (!track.pps.length)
              track.pps = [unit];
            break;
        }
        sample.units.push(unit);
      });
      sample.gopId = this._gopId;
      this._pushVideoSample(track, sample);
    }
  }, {
    key: "_pushVideoSample",
    value: function _pushVideoSample(track, sample) {
      if (sample.units.length) {
        if (sample.pts === null || sample.pts === void 0) {
          logger2.warn("Video sample no pts", sample);
          var lastSample = track.samples[track.samples.length - 1];
          if (lastSample) {
            sample.pts = lastSample.pts;
            sample.dts = lastSample.dts;
          } else {
            logger2.warn("Drop video sample", sample);
          }
        } else {
          track.samples.push(sample);
        }
      }
    }
  }, {
    key: "_parseAudioData",
    value: function _parseAudioData() {
      if (!this._audioPesData.length)
        return;
      var pes = TsDemuxer2._parsePES(concatUint8Array2.apply(void 0, _toConsumableArray(this._audioPesData)));
      if (!pes) {
        logger2.warn("Cannot parse audio pes", this._audioPesData);
        return;
      }
      this._parseAacData(pes);
      this._audioPesData = [];
    }
  }, {
    key: "_parseAacData",
    value: function _parseAacData(pes) {
      var track = this.audioTrack;
      var pts = pes.pts;
      if (pts === null || pts === void 0) {
        logger2.warn("AAC pes not pts", track);
        if (!track.samples.length || !track.sampleRate) {
          return;
        }
        pts = track.samples[track.samples.length - 1].pts + AAC.getFrameDuration(track.sampleRate);
      }
      var ret = AAC.parseADTS(pes.data, pts);
      if (ret) {
        var _track$samples;
        track.codec = ret.codec;
        track.channelCount = ret.channelCount;
        track.sampleRate = ret.sampleRate;
        track.objectType = ret.objectType;
        track.sampleRateIndex = ret.samplingFrequencyIndex;
        track.config = ret.config;
        (_track$samples = track.samples).push.apply(_track$samples, _toConsumableArray(ret.frames.map(function(s) {
          return new AudioSample(s.pts, s.data);
        })));
        if (ret.skip) {
          logger2.warn("Skip aac adts ".concat(ret.skip, " bits"));
        }
        if (ret.remaining) {
          logger2.warn("Remaining aac adts ".concat(ret.remaining, " bits"));
        }
      } else {
        logger2.warn("Cannot parse aac adts", pes);
      }
    }
  }], [{
    key: "probe",
    value: function probe(data) {
      if (!data.length)
        return false;
      return data[0] === 71 && data[188] === 71 && data[376] === 71;
    }
  }, {
    key: "_parsePES",
    value: function _parsePES(data) {
      var headerDataLen = data[8];
      if (headerDataLen === null || headerDataLen === void 0 || data.length < headerDataLen + 9)
        return;
      var startPrefix = data[0] << 16 | data[1] << 8 | data[2];
      if (startPrefix !== 1)
        return;
      var pesLen = (data[4] << 8) + data[5];
      if (pesLen && pesLen > data.length - 6)
        return;
      var pts;
      var dts;
      var ptsDtsFlags = data[7];
      if (ptsDtsFlags & 192) {
        pts = (data[9] & 14) * 536870912 + (data[10] & 255) * 4194304 + (data[11] & 254) * 16384 + (data[12] & 255) * 128 + (data[13] & 254) / 2;
        if (ptsDtsFlags & 64) {
          dts = (data[14] & 14) * 536870912 + (data[15] & 255) * 4194304 + (data[16] & 254) * 16384 + (data[17] & 255) * 128 + (data[18] & 254) / 2;
          if (pts - dts > 60 * 9e4)
            pts = dts;
        } else {
          dts = pts;
        }
      }
      return {
        data: data.subarray(9 + headerDataLen),
        pts,
        dts
      };
    }
  }]);
  return TsDemuxer2;
}();

// node_modules/xgplayer-transmuxer/es/mp4/mp4-parser.js
var MP4Parser = function() {
  function MP4Parser2() {
    _classCallCheck2(this, MP4Parser2);
  }
  _createClass2(MP4Parser2, null, [{
    key: "findBox",
    value: function findBox(data, names) {
      var start = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var ret = [];
      if (!data)
        return ret;
      var size = 0;
      var type = "";
      var headerSize = 0;
      while (data.length > 7) {
        size = readBig32(data);
        type = String.fromCharCode.apply(null, data.subarray(4, 8));
        headerSize = 8;
        if (size === 1) {
          size = readBig64(data, 8);
          headerSize += 8;
        } else if (!size) {
          size = data.length;
        }
        if (!names[0] || type === names[0]) {
          var subData = data.subarray(0, size);
          if (names.length < 2) {
            ret.push({
              start,
              size,
              headerSize,
              type,
              data: subData
            });
          } else {
            return MP4Parser2.findBox(subData.subarray(headerSize), names.slice(1), start + headerSize);
          }
        }
        start += size;
        data = data.subarray(size);
      }
      return ret;
    }
  }, {
    key: "tfhd",
    value: function tfhd(box) {
      return parseBox(box, true, function(ret, data) {
        ret.trackId = readBig32(data);
        var start = 4;
        var baseDataOffsetPresent = ret.flags & 255 & 1;
        var sampleDescriptionIndexPresent = ret.flags & 255 & 2;
        var defaultSampleDurationPresent = ret.flags & 255 & 8;
        var defaultSampleSizePresent = ret.flags & 255 & 16;
        var defaultSampleFlagsPresent = ret.flags & 255 & 32;
        if (baseDataOffsetPresent) {
          start += 4;
          ret.baseDataOffset = readBig32(data, start);
          start += 4;
        }
        if (sampleDescriptionIndexPresent) {
          ret.sampleDescriptionIndex = readBig32(data, start);
          start += 4;
        }
        if (defaultSampleDurationPresent) {
          ret.defaultSampleDuration = readBig32(data, start);
          start += 4;
        }
        if (defaultSampleSizePresent) {
          ret.defaultSampleSize = readBig32(data, start);
          start += 4;
        }
        if (defaultSampleFlagsPresent) {
          ret.defaultSampleFlags = readBig32(data, start);
        }
      });
    }
  }, {
    key: "sidx",
    value: function sidx(box) {
      return parseBox(box, true, function(ret, data) {
        var start = 0;
        ret.reference_ID = readBig32(data, start);
        start += 4;
        ret.timescale = readBig32(data, start);
        start += 4;
        if (ret.version === 0) {
          ret.earliest_presentation_time = readBig32(data, start);
          start += 4;
          ret.first_offset = readBig32(data, start);
          start += 4;
        } else {
          ret.earliest_presentation_time = readBig64(data, start);
          start += 8;
          ret.first_offset = readBig64(data, start);
          start += 8;
        }
        start += 2;
        ret.references = [];
        var count = readBig16(data, start);
        start += 2;
        for (var i = 0; i < count; i++) {
          var ref = {};
          ret.references.push(ref);
          var tmp32 = readBig32(data, start);
          start += 4;
          ref.reference_type = tmp32 >> 31 & 1;
          ref.referenced_size = tmp32 & 2147483647;
          ref.subsegment_duration = readBig32(data, start);
          start += 4;
          tmp32 = readBig32(data, start);
          start += 4;
          ref.starts_with_SAP = tmp32 >> 31 & 1;
          ref.SAP_type = tmp32 >> 28 & 7;
          ref.SAP_delta_time = tmp32 & 268435455;
        }
      });
    }
  }, {
    key: "moov",
    value: function moov(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.mvhd = MP4Parser2.mvhd(MP4Parser2.findBox(data, ["mvhd"], start)[0]);
        ret.trak = MP4Parser2.findBox(data, ["trak"], start).map(function(trak) {
          return MP4Parser2.trak(trak);
        });
        ret.pssh = MP4Parser2.pssh(MP4Parser2.findBox(data, ["pssh"], start)[0]);
      });
    }
  }, {
    key: "mvhd",
    value: function mvhd(box) {
      return parseBox(box, true, function(ret, data) {
        var start = 0;
        if (ret.version === 1) {
          ret.timescale = readBig32(data, 16);
          ret.duration = readBig64(data, 20);
          start += 28;
        } else {
          ret.timescale = readBig32(data, 8);
          ret.duration = readBig32(data, 12);
          start += 16;
        }
        ret.nextTrackId = readBig32(data, start + 76);
      });
    }
  }, {
    key: "trak",
    value: function trak(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.tkhd = MP4Parser2.tkhd(MP4Parser2.findBox(data, ["tkhd"], start)[0]);
        ret.mdia = MP4Parser2.mdia(MP4Parser2.findBox(data, ["mdia"], start)[0]);
      });
    }
  }, {
    key: "tkhd",
    value: function tkhd(box) {
      return parseBox(box, true, function(ret, data) {
        var start = 0;
        if (ret.version === 1) {
          ret.trackId = readBig32(data, 16);
          ret.duration = readBig64(data, 24);
          start += 32;
        } else {
          ret.trackId = readBig32(data, 8);
          ret.duration = readBig32(data, 16);
          start += 20;
        }
        ret.width = readBig32(data, start + 52);
        ret.height = readBig32(data, start + 56);
      });
    }
  }, {
    key: "mdia",
    value: function mdia(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.mdhd = MP4Parser2.mdhd(MP4Parser2.findBox(data, ["mdhd"], start)[0]);
        ret.hdlr = MP4Parser2.hdlr(MP4Parser2.findBox(data, ["hdlr"], start)[0]);
        ret.minf = MP4Parser2.minf(MP4Parser2.findBox(data, ["minf"], start)[0]);
      });
    }
  }, {
    key: "mdhd",
    value: function mdhd(box) {
      return parseBox(box, true, function(ret, data) {
        var start = 0;
        if (ret.version === 1) {
          ret.timescale = readBig32(data, 16);
          ret.duration = readBig64(data, 20);
          start += 28;
        } else {
          ret.timescale = readBig32(data, 8);
          ret.duration = readBig32(data, 12);
          start += 16;
        }
        var lang = readBig16(data, start);
        ret.language = String.fromCharCode((lang >> 10 & 31) + 96, (lang >> 5 & 31) + 96, (lang & 31) + 96);
      });
    }
  }, {
    key: "hdlr",
    value: function hdlr(box) {
      return parseBox(box, true, function(ret, data) {
        if (ret.version === 0) {
          ret.handlerType = String.fromCharCode.apply(null, data.subarray(4, 8));
        }
      });
    }
  }, {
    key: "minf",
    value: function minf(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.vmhd = MP4Parser2.vmhd(MP4Parser2.findBox(data, ["vmhd"], start)[0]);
        ret.smhd = MP4Parser2.smhd(MP4Parser2.findBox(data, ["smhd"], start)[0]);
        ret.stbl = MP4Parser2.stbl(MP4Parser2.findBox(data, ["stbl"], start)[0]);
      });
    }
  }, {
    key: "vmhd",
    value: function vmhd(box) {
      return parseBox(box, true, function(ret, data) {
        ret.graphicsmode = readBig16(data);
        ret.opcolor = [readBig16(data, 2), readBig16(data, 4), readBig16(data, 6)];
      });
    }
  }, {
    key: "smhd",
    value: function smhd(box) {
      return parseBox(box, true, function(ret, data) {
        ret.balance = readBig16(data);
      });
    }
  }, {
    key: "stbl",
    value: function stbl(box) {
      return parseBox(box, false, function(ret, data, start) {
        var _ret$stsd$entries$, _ret$stsd$entries$$si, _ret$stsd$entries$$si2;
        ret.stsd = MP4Parser2.stsd(MP4Parser2.findBox(data, ["stsd"], start)[0]);
        ret.stts = MP4Parser2.stts(MP4Parser2.findBox(data, ["stts"], start)[0]);
        ret.ctts = MP4Parser2.ctts(MP4Parser2.findBox(data, ["ctts"], start)[0]);
        ret.stsc = MP4Parser2.stsc(MP4Parser2.findBox(data, ["stsc"], start)[0]);
        ret.stsz = MP4Parser2.stsz(MP4Parser2.findBox(data, ["stsz"], start)[0]);
        ret.stco = MP4Parser2.stco(MP4Parser2.findBox(data, ["stco"], start)[0]);
        if (!ret.stco) {
          ret.co64 = MP4Parser2.co64(MP4Parser2.findBox(data, ["co64"], start)[0]);
          ret.stco = ret.co64;
        }
        var default_IV_size = (_ret$stsd$entries$ = ret.stsd.entries[0]) === null || _ret$stsd$entries$ === void 0 ? void 0 : (_ret$stsd$entries$$si = _ret$stsd$entries$.sinf) === null || _ret$stsd$entries$$si === void 0 ? void 0 : (_ret$stsd$entries$$si2 = _ret$stsd$entries$$si.schi) === null || _ret$stsd$entries$$si2 === void 0 ? void 0 : _ret$stsd$entries$$si2.tenc.default_IV_size;
        ret.stss = MP4Parser2.stss(MP4Parser2.findBox(data, ["stss"], start)[0]);
        ret.senc = MP4Parser2.senc(MP4Parser2.findBox(data, ["senc"], start)[0], default_IV_size);
      });
    }
  }, {
    key: "senc",
    value: function senc(box) {
      var iv = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 8;
      return parseBox(box, true, function(ret, data) {
        var start = 0;
        var sampleCount = readBig32(data, start);
        start += 4;
        ret.samples = [];
        for (var i = 0; i < sampleCount; i++) {
          var sample = {};
          sample.InitializationVector = [];
          for (var j = 0; j < iv; j++) {
            sample.InitializationVector[j] = data[start + j];
          }
          start += iv;
          if (ret.flags & 2) {
            sample.subsamples = [];
            var subsampleCount = readBig16(data, start);
            start += 2;
            for (var _j = 0; _j < subsampleCount; _j++) {
              var subsample = {};
              subsample.BytesOfClearData = readBig16(data, start);
              start += 2;
              subsample.BytesOfProtectedData = readBig32(data, start);
              start += 4;
              sample.subsamples.push(subsample);
            }
          }
          ret.samples.push(sample);
        }
      });
    }
  }, {
    key: "pssh",
    value: function pssh(box) {
      return parseBox(box, true, function(ret, data) {
        var keyIds = [];
        var systemId = [];
        var start = 0;
        for (var i = 0; i < 16; i++) {
          systemId.push(toHex(data[start + i]));
        }
        start += 16;
        if (ret.version > 0) {
          var numKeyIds = readBig32(data, start);
          start += 4;
          for (var _i = 0; _i < ("" + numKeyIds).length; _i++) {
            for (var j = 0; j < 16; j++) {
              var keyId = data[start];
              start += 1;
              keyIds.push(toHex(keyId));
            }
          }
        }
        var dataSize = readBig32(data, start);
        ret.data_size = dataSize;
        start += 4;
        ret.kid = keyIds;
        ret.system_id = systemId;
        ret.buffer = data;
      });
    }
  }, {
    key: "stsd",
    value: function stsd(box) {
      return parseBox(box, true, function(ret, data, start) {
        ret.entryCount = readBig32(data);
        ret.entries = MP4Parser2.findBox(data.subarray(4), [], start + 4).map(function(b) {
          switch (b.type) {
            case "avc1":
            case "avc2":
            case "avc3":
            case "avc4":
              return MP4Parser2.avc1(b);
            case "hvc1":
            case "hev1":
              return MP4Parser2.hvc1(b);
            case "mp4a":
              return MP4Parser2.mp4a(b);
            case "alaw":
            case "ulaw":
              return MP4Parser2.alaw(b);
            case "enca":
              return parseBox(b, false, function(ret2, data2, start2) {
                ret2.channelCount = readBig16(data2, 16);
                ret2.samplesize = readBig16(data2, 18);
                ret2.sampleRate = readBig32(data2, 24) / (1 << 16);
                data2 = data2.subarray(28);
                ret2.sinf = MP4Parser2.sinf(MP4Parser2.findBox(data2, ["sinf"], start2)[0]);
                ret2.esds = MP4Parser2.esds(MP4Parser2.findBox(data2, ["esds"], start2)[0]);
              });
            case "encv":
              return parseBox(b, false, function(ret2, data2, start2) {
                ret2.width = readBig16(data2, 24);
                ret2.height = readBig16(data2, 26);
                ret2.horizresolution = readBig32(data2, 28);
                ret2.vertresolution = readBig32(data2, 32);
                data2 = data2.subarray(78);
                ret2.sinf = MP4Parser2.sinf(MP4Parser2.findBox(data2, ["sinf"], start2)[0]);
                ret2.avcC = MP4Parser2.avcC(MP4Parser2.findBox(data2, ["avcC"], start2)[0]);
                ret2.hvcC = MP4Parser2.hvcC(MP4Parser2.findBox(data2, ["hvcC"], start2)[0]);
                ret2.pasp = MP4Parser2.pasp(MP4Parser2.findBox(data2, ["pasp"], start2)[0]);
              });
          }
        }).filter(Boolean);
      });
    }
  }, {
    key: "tenc",
    value: function tenc(box) {
      return parseBox(box, false, function(ret, data) {
        var start = 6;
        ret.default_IsEncrypted = data[start];
        start += 1;
        ret.default_IV_size = data[start];
        start += 1;
        ret.default_KID = [];
        for (var i = 0; i < 16; i++) {
          ret.default_KID.push(toHex(data[start]));
          start += 1;
        }
      });
    }
  }, {
    key: "schi",
    value: function schi(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.tenc = MP4Parser2.tenc(MP4Parser2.findBox(data, ["tenc"], start)[0]);
      });
    }
  }, {
    key: "sinf",
    value: function sinf(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.schi = MP4Parser2.schi(MP4Parser2.findBox(data, ["schi"], start)[0]);
        ret.frma = MP4Parser2.frma(MP4Parser2.findBox(data, ["frma"], start)[0]);
      });
    }
  }, {
    key: "frma",
    value: function frma(box) {
      return parseBox(box, false, function(ret, data) {
        ret.data_format = "";
        for (var i = 0; i < 4; i++) {
          ret.data_format += String.fromCharCode(data[i]);
        }
      });
    }
  }, {
    key: "avc1",
    value: function avc1(box) {
      return parseBox(box, false, function(ret, data, start) {
        var bodyStart = parseVisualSampleEntry(ret, data);
        var bodyData = data.subarray(bodyStart);
        start += bodyStart;
        ret.avcC = MP4Parser2.avcC(MP4Parser2.findBox(bodyData, ["avcC"], start)[0]);
        ret.pasp = MP4Parser2.pasp(MP4Parser2.findBox(bodyData, ["pasp"], start)[0]);
      });
    }
  }, {
    key: "avcC",
    value: function avcC(box) {
      return parseBox(box, false, function(ret, data) {
        ret.configurationVersion = data[0];
        ret.AVCProfileIndication = data[1];
        ret.profileCompatibility = data[2];
        ret.AVCLevelIndication = data[3];
        ret.codec = getAvcCodec([data[1], data[2], data[3]]);
        ret.lengthSizeMinusOne = data[4] & 3;
        ret.spsLength = data[5] & 31;
        ret.sps = [];
        var start = 6;
        for (var i = 0; i < ret.spsLength; i++) {
          var size = readBig16(data, start);
          start += 2;
          ret.sps.push(data.subarray(start, start + size));
          start += size;
        }
        ret.ppsLength = data[start];
        start += 1;
        ret.pps = [];
        for (var _i2 = 0; _i2 < ret.ppsLength; _i2++) {
          var _size = readBig16(data, start);
          start += 2;
          ret.pps.push(data.subarray(start, start += _size));
          start += _size;
        }
      });
    }
  }, {
    key: "hvc1",
    value: function hvc1(box) {
      return parseBox(box, false, function(ret, data, start) {
        var bodyStart = parseVisualSampleEntry(ret, data);
        var bodyData = data.subarray(bodyStart);
        start += bodyStart;
        ret.hvcC = MP4Parser2.hvcC(MP4Parser2.findBox(bodyData, ["hvcC"], start)[0]);
        ret.pasp = MP4Parser2.pasp(MP4Parser2.findBox(bodyData, ["pasp"], start)[0]);
      });
    }
  }, {
    key: "hvcC",
    value: function hvcC(box) {
      return parseBox(box, false, function(ret, data) {
        ret.data = box.data;
        ret.codec = "hev1.1.6.L93.B0";
        ret.configurationVersion = data[0];
        var tmp = data[1];
        ret.generalProfileSpace = tmp >> 6;
        ret.generalTierFlag = (tmp & 32) >> 5;
        ret.generalProfileIdc = tmp & 31;
        ret.generalProfileCompatibility = readBig32(data, 2);
        ret.generalConstraintIndicatorFlags = data.subarray(6, 12);
        ret.generalLevelIdc = data[12];
        ret.avgFrameRate = readBig16(data, 19);
        ret.numOfArrays = data[22];
        ret.vps = [];
        ret.sps = [];
        ret.pps = [];
        var start = 23;
        var type = 0;
        var numNalus = 0;
        var size = 0;
        for (var i = 0; i < ret.numOfArrays; i++) {
          type = data[start] & 63;
          numNalus = readBig16(data, start + 1);
          start += 3;
          var nalus = [];
          for (var j = 0; j < numNalus; j++) {
            size = readBig16(data, start);
            start += 2;
            nalus.push(data.subarray(start, start + size));
            start += size;
          }
          if (type === 32) {
            var _ret$vps;
            (_ret$vps = ret.vps).push.apply(_ret$vps, nalus);
          } else if (type === 33) {
            var _ret$sps;
            (_ret$sps = ret.sps).push.apply(_ret$sps, nalus);
          } else if (type === 34) {
            var _ret$pps;
            (_ret$pps = ret.pps).push.apply(_ret$pps, nalus);
          }
        }
      });
    }
  }, {
    key: "pasp",
    value: function pasp(box) {
      return parseBox(box, false, function(ret, data) {
        ret.hSpacing = readBig32(data);
        ret.vSpacing = readBig32(data, 4);
      });
    }
  }, {
    key: "mp4a",
    value: function mp4a(box) {
      return parseBox(box, false, function(ret, data, start) {
        var bodyStart = parseAudioSampleEntry(ret, data);
        ret.esds = MP4Parser2.esds(MP4Parser2.findBox(data.subarray(bodyStart), ["esds"], start + bodyStart)[0]);
      });
    }
  }, {
    key: "esds",
    value: function esds(box) {
      return parseBox(box, true, function(ret, data) {
        ret.codec = "mp4a.";
        var start = 0;
        var byteRead = 0;
        var size = 0;
        var tag = 0;
        while (data.length) {
          start = 0;
          tag = data[start];
          byteRead = data[start + 1];
          start += 2;
          while (byteRead & 128) {
            size = (byteRead & 127) << 7;
            byteRead = data[start];
            start += 1;
          }
          size += byteRead & 127;
          if (tag === 3) {
            data = data.subarray(start + 3);
          } else if (tag === 4) {
            ret.codec += (data[start].toString(16) + ".").padStart(3, "0");
            data = data.subarray(start + 13);
          } else if (tag === 5) {
            var config = ret.config = data.subarray(start, start + size);
            var objectType = (config[0] & 248) >> 3;
            if (objectType === 31 && config.length >= 2) {
              objectType = 32 + ((config[0] & 7) << 3) + ((config[1] & 224) >> 5);
            }
            ret.objectType = objectType;
            ret.codec += objectType.toString(16);
            if (ret.codec[ret.codec.length - 1] === ".") {
              ret.codec = ret.codec.substring(0, ret.codec.length - 1);
            }
            return;
          } else {
            if (ret.codec[ret.codec.length - 1] === ".") {
              ret.codec = ret.codec.substring(0, ret.codec.length - 1);
            }
            return;
          }
        }
      });
    }
  }, {
    key: "alaw",
    value: function alaw(box) {
      return parseBox(box, false, function(ret, data) {
        parseAudioSampleEntry(ret, data);
      });
    }
  }, {
    key: "stts",
    value: function stts(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        for (var i = 0; i < entryCount; i++) {
          entries.push({
            count: readBig32(data, start),
            delta: readBig32(data, start + 4)
          });
          start += 8;
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "ctts",
    value: function ctts(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        if (ret.version === 1) {
          for (var i = 0; i < entryCount; i++) {
            entries.push({
              count: readBig32(data, start),
              offset: readBig32(data, start + 4)
            });
            start += 8;
          }
        } else {
          for (var _i3 = 0; _i3 < entryCount; _i3++) {
            entries.push({
              count: readBig32(data, start),
              offset: -(~readBig32(data, start + 4) + 1)
            });
            start += 8;
          }
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "stsc",
    value: function stsc(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        for (var i = 0; i < entryCount; i++) {
          entries.push({
            firstChunk: readBig32(data, start),
            samplesPerChunk: readBig32(data, start + 4),
            sampleDescriptionIndex: readBig32(data, start + 8)
          });
          start += 12;
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "stsz",
    value: function stsz(box) {
      return parseBox(box, true, function(ret, data) {
        var sampleSize = readBig32(data);
        var sampleCount = readBig32(data, 4);
        var entrySizes = [];
        if (!sampleSize) {
          var start = 8;
          for (var i = 0; i < sampleCount; i++) {
            entrySizes.push(readBig32(data, start));
            start += 4;
          }
        }
        ret.sampleSize = sampleSize;
        ret.sampleCount = sampleCount;
        ret.entrySizes = entrySizes;
      });
    }
  }, {
    key: "stco",
    value: function stco(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        for (var i = 0; i < entryCount; i++) {
          entries.push(readBig32(data, start));
          start += 4;
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "co64",
    value: function co64(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        for (var i = 0; i < entryCount; i++) {
          entries.push(readBig64(data, start));
          start += 8;
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "stss",
    value: function stss(box) {
      return parseBox(box, true, function(ret, data) {
        var entryCount = readBig32(data);
        var entries = [];
        var start = 4;
        for (var i = 0; i < entryCount; i++) {
          entries.push(readBig32(data, start));
          start += 4;
        }
        ret.entryCount = entryCount;
        ret.entries = entries;
      });
    }
  }, {
    key: "moof",
    value: function moof(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.mfhd = MP4Parser2.mfhd(MP4Parser2.findBox(data, ["mfhd"], start)[0]);
        ret.traf = MP4Parser2.findBox(data, ["traf"], start).map(function(t) {
          return MP4Parser2.traf(t);
        });
      });
    }
  }, {
    key: "mfhd",
    value: function mfhd(box) {
      return parseBox(box, true, function(ret, data) {
        ret.sequenceNumber = readBig32(data);
      });
    }
  }, {
    key: "traf",
    value: function traf(box) {
      return parseBox(box, false, function(ret, data, start) {
        ret.tfhd = MP4Parser2.tfhd(MP4Parser2.findBox(data, ["tfhd"], start)[0]);
        ret.tfdt = MP4Parser2.tfdt(MP4Parser2.findBox(data, ["tfdt"], start)[0]);
        ret.trun = MP4Parser2.trun(MP4Parser2.findBox(data, ["trun"], start)[0]);
      });
    }
  }, {
    key: "trun",
    value: function trun(box) {
      return parseBox(box, true, function(ret, data) {
        var version = ret.version, flags = ret.flags;
        var dataLen = data.length;
        var sampleCount = ret.sampleCount = readBig32(data);
        var offset = 4;
        if (dataLen > offset && flags & 1) {
          ret.dataOffset = -(~readBig32(data, offset) + 1);
          offset += 4;
        }
        if (dataLen > offset && flags & 4) {
          ret.firstSampleFlags = readBig32(data, offset);
          offset += 4;
        }
        ret.samples = [];
        if (dataLen > offset) {
          var sample;
          for (var i = 0; i < sampleCount; i++) {
            sample = {};
            if (flags & 256) {
              sample.duration = readBig32(data, offset);
              offset += 4;
            }
            if (flags & 512) {
              sample.size = readBig32(data, offset);
              offset += 4;
            }
            if (flags & 1024) {
              sample.flags = readBig32(data, offset);
              offset += 4;
            }
            if (flags & 2048) {
              if (version) {
                sample.cts = -(~readBig32(data, offset + 4) + 1);
              } else {
                sample.cts = readBig32(data, offset);
              }
              offset += 4;
            }
            ret.samples.push(sample);
          }
        }
      });
    }
  }, {
    key: "tfdt",
    value: function tfdt(box) {
      return parseBox(box, true, function(ret, data) {
        if (ret.version === 1) {
          ret.baseMediaDecodeTime = readBig64(data);
        } else {
          ret.baseMediaDecodeTime = readBig32(data);
        }
      });
    }
  }, {
    key: "probe",
    value: function probe(data) {
      return !!MP4Parser2.findBox(data, ["ftyp"]);
    }
  }, {
    key: "parseSampleFlags",
    value: function parseSampleFlags(flags) {
      return {
        isLeading: (flags[0] & 12) >>> 2,
        dependsOn: flags[0] & 3,
        isDependedOn: (flags[1] & 192) >>> 6,
        hasRedundancy: (flags[1] & 48) >>> 4,
        paddingValue: (flags[1] & 14) >>> 1,
        isNonSyncSample: flags[1] & 1,
        degradationPriority: flags[2] << 8 | flags[3]
      };
    }
  }, {
    key: "moovToTrack",
    value: function moovToTrack(moov, videoTrack, audioTrack) {
      var _e$esds, _e$esds2;
      var tracks = moov.trak;
      if (!tracks || !tracks.length)
        return;
      var vTrack = tracks.find(function(t) {
        var _t$mdia, _t$mdia$hdlr;
        return ((_t$mdia = t.mdia) === null || _t$mdia === void 0 ? void 0 : (_t$mdia$hdlr = _t$mdia.hdlr) === null || _t$mdia$hdlr === void 0 ? void 0 : _t$mdia$hdlr.handlerType) === "vide";
      });
      var aTrack = tracks.find(function(t) {
        var _t$mdia2, _t$mdia2$hdlr;
        return ((_t$mdia2 = t.mdia) === null || _t$mdia2 === void 0 ? void 0 : (_t$mdia2$hdlr = _t$mdia2.hdlr) === null || _t$mdia2$hdlr === void 0 ? void 0 : _t$mdia2$hdlr.handlerType) === "soun";
      });
      if (vTrack && videoTrack) {
        var _vTrack$tkhd, _vTrack$mdia, _vTrack$mdia$minf, _vTrack$mdia$minf$stb, _vTrack$mdia2, _vTrack$mdia2$minf, _vTrack$mdia2$minf$st;
        var v = videoTrack;
        var _vTrackId = (_vTrack$tkhd = vTrack.tkhd) === null || _vTrack$tkhd === void 0 ? void 0 : _vTrack$tkhd.trackId;
        if (_vTrackId !== null && _vTrackId !== void 0)
          v.id = vTrack.tkhd.trackId;
        v.tkhdDuration = vTrack.tkhd.duration;
        v.mvhdDurtion = moov.mvhd.duration;
        v.mvhdTimecale = moov.mvhd.timescale;
        v.timescale = v.formatTimescale = vTrack.mdia.mdhd.timescale;
        v.duration = vTrack.mdia.mdhd.duration || v.mvhdDurtion / v.mvhdTimecale * v.timescale;
        var e1 = vTrack.mdia.minf.stbl.stsd.entries[0];
        v.width = e1.width;
        v.height = e1.height;
        if (e1.pasp) {
          v.sarRatio = [e1.pasp.hSpacing, e1.pasp.vSpacing];
        }
        if (e1.hvcC) {
          v.codecType = VideoCodecType.HEVC;
          v.codec = e1.hvcC.codec;
          v.vps = e1.hvcC.vps;
          v.sps = e1.hvcC.sps;
          v.pps = e1.hvcC.pps;
          v.hvcC = e1.hvcC.data;
        } else if (e1.avcC) {
          v.codec = e1.avcC.codec;
          v.sps = e1.avcC.sps;
          v.pps = e1.avcC.pps;
        } else {
          throw new Error("unknown video stsd entry");
        }
        v.present = true;
        v.ext = {};
        v.ext.stss = (_vTrack$mdia = vTrack.mdia) === null || _vTrack$mdia === void 0 ? void 0 : (_vTrack$mdia$minf = _vTrack$mdia.minf) === null || _vTrack$mdia$minf === void 0 ? void 0 : (_vTrack$mdia$minf$stb = _vTrack$mdia$minf.stbl) === null || _vTrack$mdia$minf$stb === void 0 ? void 0 : _vTrack$mdia$minf$stb.stss;
        v.ext.ctts = (_vTrack$mdia2 = vTrack.mdia) === null || _vTrack$mdia2 === void 0 ? void 0 : (_vTrack$mdia2$minf = _vTrack$mdia2.minf) === null || _vTrack$mdia2$minf === void 0 ? void 0 : (_vTrack$mdia2$minf$st = _vTrack$mdia2$minf.stbl) === null || _vTrack$mdia2$minf$st === void 0 ? void 0 : _vTrack$mdia2$minf$st.ctts;
        if (e1 && e1.type === "encv") {
          var _e1$sinf, _e1$sinf$schi, _e1$sinf2, _e1$sinf2$schi, _e1$sinf3, _e1$sinf3$schi, _e1$sinf4, _e1$sinf4$frma;
          v.isVideoEncryption = true;
          e1.default_KID = (_e1$sinf = e1.sinf) === null || _e1$sinf === void 0 ? void 0 : (_e1$sinf$schi = _e1$sinf.schi) === null || _e1$sinf$schi === void 0 ? void 0 : _e1$sinf$schi.tenc.default_KID;
          e1.default_IsEncrypted = (_e1$sinf2 = e1.sinf) === null || _e1$sinf2 === void 0 ? void 0 : (_e1$sinf2$schi = _e1$sinf2.schi) === null || _e1$sinf2$schi === void 0 ? void 0 : _e1$sinf2$schi.tenc.default_IsEncrypted;
          e1.default_IV_size = (_e1$sinf3 = e1.sinf) === null || _e1$sinf3 === void 0 ? void 0 : (_e1$sinf3$schi = _e1$sinf3.schi) === null || _e1$sinf3$schi === void 0 ? void 0 : _e1$sinf3$schi.tenc.default_IV_size;
          v.videoSenc = vTrack.mdia.minf.stbl.senc && vTrack.mdia.minf.stbl.senc.samples;
          e1.data_format = (_e1$sinf4 = e1.sinf) === null || _e1$sinf4 === void 0 ? void 0 : (_e1$sinf4$frma = _e1$sinf4.frma) === null || _e1$sinf4$frma === void 0 ? void 0 : _e1$sinf4$frma.data_format;
          v.useEME = moov.useEME;
          v.kidValue = moov.kidValue;
          v.pssh = moov.pssh;
          v.encv = e1;
        }
      }
      if (aTrack && audioTrack) {
        var _aTrack$tkhd, _e$esds3, _e$esds4, _aTrack$mdia, _aTrack$mdia$minf, _aTrack$mdia$minf$stb, _aTrack$mdia2, _aTrack$mdia2$minf, _aTrack$mdia2$minf$st;
        var a = audioTrack;
        var _aTrackId = (_aTrack$tkhd = aTrack.tkhd) === null || _aTrack$tkhd === void 0 ? void 0 : _aTrack$tkhd.trackId;
        if (_aTrackId !== null && _aTrackId !== void 0)
          a.id = aTrack.tkhd.trackId;
        a.tkhdDuration = aTrack.tkhd.duration;
        a.mvhdDurtion = moov.mvhd.duration;
        a.mvhdTimecale = moov.mvhd.timescale;
        a.timescale = a.formatTimescale = aTrack.mdia.mdhd.timescale;
        a.duration = aTrack.mdia.mdhd.duration || a.mvhdDurtion / a.mvhdTimecale * a.timescale;
        var _e = aTrack.mdia.minf.stbl.stsd.entries[0];
        a.sampleSize = _e.sampleSize;
        a.sampleRate = _e.sampleRate;
        a.channelCount = _e.channelCount;
        a.present = true;
        switch (_e.type) {
          case "alaw":
            a.codecType = a.codec = AudioCodecType.G711PCMA;
            a.sampleRate = 8e3;
            break;
          case "ulaw":
            a.codecType = a.codec = AudioCodecType.G711PCMU;
            a.sampleRate = 8e3;
            break;
          default:
            a.sampleDuration = AAC.getFrameDuration(a.sampleRate, a.timescale);
            a.sampleRateIndex = AAC.getRateIndexByRate(a.sampleRate);
            a.objectType = ((_e$esds = _e.esds) === null || _e$esds === void 0 ? void 0 : _e$esds.objectType) || 2;
            if (_e.esds)
              a.config = Array.from(_e.esds.config);
            a.codec = ((_e$esds2 = _e.esds) === null || _e$esds2 === void 0 ? void 0 : _e$esds2.codec) || "mp4a.40.2";
            break;
        }
        a.sampleDuration = AAC.getFrameDuration(a.sampleRate, a.timescale);
        a.objectType = ((_e$esds3 = _e.esds) === null || _e$esds3 === void 0 ? void 0 : _e$esds3.objectType) || 2;
        if (_e.esds) {
          if (_e.esds.config) {
            a.config = Array.from(_e.esds.config);
          } else {
            console.warn("esds config is null");
          }
        }
        a.codec = ((_e$esds4 = _e.esds) === null || _e$esds4 === void 0 ? void 0 : _e$esds4.codec) || "mp4a.40.2";
        a.sampleRateIndex = AAC.getRateIndexByRate(a.sampleRate);
        a.ext = {};
        a.ext.stss = (_aTrack$mdia = aTrack.mdia) === null || _aTrack$mdia === void 0 ? void 0 : (_aTrack$mdia$minf = _aTrack$mdia.minf) === null || _aTrack$mdia$minf === void 0 ? void 0 : (_aTrack$mdia$minf$stb = _aTrack$mdia$minf.stbl) === null || _aTrack$mdia$minf$stb === void 0 ? void 0 : _aTrack$mdia$minf$stb.stss;
        a.ext.ctts = (_aTrack$mdia2 = aTrack.mdia) === null || _aTrack$mdia2 === void 0 ? void 0 : (_aTrack$mdia2$minf = _aTrack$mdia2.minf) === null || _aTrack$mdia2$minf === void 0 ? void 0 : (_aTrack$mdia2$minf$st = _aTrack$mdia2$minf.stbl) === null || _aTrack$mdia2$minf$st === void 0 ? void 0 : _aTrack$mdia2$minf$st.ctts;
        a.present = true;
        if (_e && _e.type === "enca") {
          var _e$sinf, _e$sinf$frma, _e$sinf2, _e$sinf2$schi, _e$sinf3, _e$sinf3$schi, _e$sinf4, _e$sinf4$schi;
          a.isAudioEncryption = true;
          _e.data_format = (_e$sinf = _e.sinf) === null || _e$sinf === void 0 ? void 0 : (_e$sinf$frma = _e$sinf.frma) === null || _e$sinf$frma === void 0 ? void 0 : _e$sinf$frma.data_format;
          _e.default_KID = (_e$sinf2 = _e.sinf) === null || _e$sinf2 === void 0 ? void 0 : (_e$sinf2$schi = _e$sinf2.schi) === null || _e$sinf2$schi === void 0 ? void 0 : _e$sinf2$schi.tenc.default_KID;
          _e.default_IsEncrypted = (_e$sinf3 = _e.sinf) === null || _e$sinf3 === void 0 ? void 0 : (_e$sinf3$schi = _e$sinf3.schi) === null || _e$sinf3$schi === void 0 ? void 0 : _e$sinf3$schi.tenc.default_IsEncrypted;
          _e.default_IV_size = (_e$sinf4 = _e.sinf) === null || _e$sinf4 === void 0 ? void 0 : (_e$sinf4$schi = _e$sinf4.schi) === null || _e$sinf4$schi === void 0 ? void 0 : _e$sinf4$schi.tenc.default_IV_size;
          a.audioSenc = aTrack.mdia.minf.stbl.senc && aTrack.mdia.minf.stbl.senc.samples;
          a.useEME = moov.useEME;
          a.kidValue = moov.kidValue;
          a.enca = _e;
        }
      }
      audioTrack && (audioTrack.isVideoEncryption = videoTrack ? videoTrack.isVideoEncryption : false);
      videoTrack && (videoTrack.isAudioEncryption = audioTrack ? audioTrack.isAudioEncryption : false);
      if (videoTrack !== null && videoTrack !== void 0 && videoTrack.encv || audioTrack !== null && audioTrack !== void 0 && audioTrack.enca) {
        var _videoTrack$encv, _audioTrack$enca;
        var vkid = videoTrack === null || videoTrack === void 0 ? void 0 : (_videoTrack$encv = videoTrack.encv) === null || _videoTrack$encv === void 0 ? void 0 : _videoTrack$encv.default_KID;
        var akid = audioTrack === null || audioTrack === void 0 ? void 0 : (_audioTrack$enca = audioTrack.enca) === null || _audioTrack$enca === void 0 ? void 0 : _audioTrack$enca.default_KID;
        var kid = vkid || akid ? (vkid || akid).join("") : null;
        videoTrack && (videoTrack.kid = kid);
        audioTrack && (audioTrack.kid = kid);
      }
      videoTrack && (videoTrack.flags = 3841);
      audioTrack && (audioTrack.flags = 1793);
      return {
        videoTrack,
        audioTrack
      };
    }
  }, {
    key: "evaluateDefaultDuration",
    value: function evaluateDefaultDuration(videoTrack, audioTrack, videoSampleCount) {
      var _audioTrack$samples;
      var audioSampleCount = audioTrack === null || audioTrack === void 0 ? void 0 : (_audioTrack$samples = audioTrack.samples) === null || _audioTrack$samples === void 0 ? void 0 : _audioTrack$samples.length;
      if (!audioSampleCount)
        return 1024;
      var segmentDuration = 1024 * audioSampleCount / audioTrack.timescale;
      return segmentDuration * videoTrack.timescale / videoSampleCount;
    }
  }, {
    key: "moofToSamples",
    value: function moofToSamples(moof, videoTrack, audioTrack) {
      var ret = {};
      if (moof.mfhd) {
        if (videoTrack)
          videoTrack.sequenceNumber = moof.mfhd.sequenceNumber;
        if (audioTrack)
          audioTrack.sequenceNumber = moof.mfhd.sequenceNumber;
      }
      moof.traf.forEach(function(_ref) {
        var tfhd = _ref.tfhd, tfdt = _ref.tfdt, trun = _ref.trun;
        if (!tfhd || !trun)
          return;
        if (tfdt) {
          if (videoTrack && videoTrack.id === tfhd.trackId)
            videoTrack.baseMediaDecodeTime = tfdt.baseMediaDecodeTime;
          if (audioTrack && audioTrack.id === tfhd.trackId)
            audioTrack.baseMediaDecodeTime = tfdt.baseMediaDecodeTime;
        }
        var defaultSize = tfhd.defaultSampleSize || 0;
        var defaultDuration = tfhd.defaultSampleDuration || MP4Parser2.evaluateDefaultDuration(videoTrack, audioTrack, trun.samples.length || trun.sampleCount);
        var offset = trun.dataOffset || 0;
        var dts = 0;
        var gopId = -1;
        if (!trun.samples.length && trun.sampleCount) {
          ret[tfhd.trackId] = [];
          for (var i = 0; i < trun.sampleCount; i++) {
            ret[tfhd.trackId].push({
              offset,
              dts,
              duration: defaultDuration,
              size: defaultSize
            });
            dts += defaultDuration;
            offset += defaultSize;
          }
        } else {
          ret[tfhd.trackId] = trun.samples.map(function(s, index) {
            s = {
              offset,
              dts,
              pts: dts + (s.cts || 0),
              duration: s.duration || defaultDuration,
              size: s.size || defaultSize,
              gopId,
              keyframe: index === 0 || s.flags !== null && s.flags !== void 0 && (s.flags & 65536) >>> 0 !== 65536
            };
            if (s.keyframe) {
              gopId++;
              s.gopId = gopId;
            }
            dts += s.duration;
            offset += s.size;
            return s;
          });
        }
      });
      return ret;
    }
  }, {
    key: "moovToSamples",
    value: function moovToSamples(moov) {
      var tracks = moov.trak;
      if (!tracks || !tracks.length)
        return;
      var vTrack = tracks.find(function(t) {
        var _t$mdia3, _t$mdia3$hdlr;
        return ((_t$mdia3 = t.mdia) === null || _t$mdia3 === void 0 ? void 0 : (_t$mdia3$hdlr = _t$mdia3.hdlr) === null || _t$mdia3$hdlr === void 0 ? void 0 : _t$mdia3$hdlr.handlerType) === "vide";
      });
      var aTrack = tracks.find(function(t) {
        var _t$mdia4, _t$mdia4$hdlr;
        return ((_t$mdia4 = t.mdia) === null || _t$mdia4 === void 0 ? void 0 : (_t$mdia4$hdlr = _t$mdia4.hdlr) === null || _t$mdia4$hdlr === void 0 ? void 0 : _t$mdia4$hdlr.handlerType) === "soun";
      });
      if (!vTrack && !aTrack)
        return;
      var videoSamples;
      var audioSamples;
      if (vTrack) {
        var _vTrack$mdia3, _vTrack$mdia3$minf;
        var videoStbl = (_vTrack$mdia3 = vTrack.mdia) === null || _vTrack$mdia3 === void 0 ? void 0 : (_vTrack$mdia3$minf = _vTrack$mdia3.minf) === null || _vTrack$mdia3$minf === void 0 ? void 0 : _vTrack$mdia3$minf.stbl;
        if (!videoStbl)
          return;
        var stts = videoStbl.stts, stsc = videoStbl.stsc, stsz = videoStbl.stsz, stco = videoStbl.stco, stss = videoStbl.stss, ctts = videoStbl.ctts;
        if (!stts || !stsc || !stsz || !stco || !stss)
          return;
        videoSamples = getSamples(stts, stsc, stsz, stco, ctts, stss);
      }
      if (aTrack) {
        var _aTrack$mdia3, _aTrack$mdia3$minf, _aTrack$mdia$mdhd;
        var audioStbl = (_aTrack$mdia3 = aTrack.mdia) === null || _aTrack$mdia3 === void 0 ? void 0 : (_aTrack$mdia3$minf = _aTrack$mdia3.minf) === null || _aTrack$mdia3$minf === void 0 ? void 0 : _aTrack$mdia3$minf.stbl;
        if (!audioStbl)
          return;
        var timescale = (_aTrack$mdia$mdhd = aTrack.mdia.mdhd) === null || _aTrack$mdia$mdhd === void 0 ? void 0 : _aTrack$mdia$mdhd.timescale;
        var _stts = audioStbl.stts, _stsc = audioStbl.stsc, _stsz = audioStbl.stsz, _stco = audioStbl.stco;
        if (!timescale || !_stts || !_stsc || !_stsz || !_stco)
          return;
        audioSamples = getSamples(_stts, _stsc, _stsz, _stco);
      }
      return {
        videoSamples,
        audioSamples
      };
    }
  }]);
  return MP4Parser2;
}();
function getSamples(stts, stsc, stsz, stco, ctts, stss) {
  var samples = [];
  var cttsEntries = ctts === null || ctts === void 0 ? void 0 : ctts.entries;
  var stscEntries = stsc.entries;
  var stcoEntries = stco.entries;
  var stszEntrySizes = stsz.entrySizes;
  var stssEntries = stss === null || stss === void 0 ? void 0 : stss.entries;
  var keyframeMap;
  if (stssEntries) {
    keyframeMap = {};
    stssEntries.forEach(function(x2) {
      keyframeMap[x2 - 1] = true;
    });
  }
  var cttsArr;
  if (cttsEntries) {
    cttsArr = [];
    cttsEntries.forEach(function(_ref2) {
      var count = _ref2.count, offset = _ref2.offset;
      for (var i = 0; i < count; i++) {
        cttsArr.push(offset);
      }
    });
  }
  var sample;
  var gopId = -1;
  var dts = 0;
  var pos = 0;
  var chunkIndex = 0;
  var chunkRunIndex = 0;
  var offsetInChunk = 0;
  var lastSampleInChunk = stscEntries[0].samplesPerChunk;
  var lastChunkInRun = stscEntries[1] ? stscEntries[1].firstChunk - 1 : Infinity;
  stts.entries.forEach(function(_ref3) {
    var count = _ref3.count, delta = _ref3.delta;
    for (var i = 0; i < count; i++) {
      sample = {
        dts,
        duration: delta,
        size: stszEntrySizes[pos] || stsz.sampleSize,
        offset: stcoEntries[chunkIndex] + offsetInChunk,
        index: pos
      };
      if (stssEntries) {
        sample.keyframe = keyframeMap[pos];
        if (sample.keyframe) {
          gopId++;
        }
        sample.gopId = gopId;
      }
      if (cttsArr && pos < cttsArr.length) {
        sample.pts = sample.dts + cttsArr[pos];
      }
      samples.push(sample);
      dts += delta;
      pos++;
      if (pos < lastSampleInChunk) {
        offsetInChunk += sample.size;
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
  return samples;
}
function parseVisualSampleEntry(ret, data) {
  ret.dataReferenceIndex = readBig16(data, 6);
  ret.width = readBig16(data, 24);
  ret.height = readBig16(data, 26);
  ret.horizresolution = readBig32(data, 28);
  ret.vertresolution = readBig32(data, 32);
  ret.frameCount = readBig16(data, 40);
  ret.depth = readBig16(data, 74);
  return 78;
}
function parseAudioSampleEntry(ret, data) {
  ret.dataReferenceIndex = readBig16(data, 6);
  ret.channelCount = readBig16(data, 16);
  ret.sampleSize = readBig16(data, 18);
  ret.sampleRate = readBig32(data, 24) / (1 << 16);
  return 28;
}
function parseBox(box, isFullBox, parse2) {
  if (!box)
    return;
  if (box.size !== box.data.length)
    throw new Error("box ".concat(box.type, " size !== data.length"));
  var ret = {
    start: box.start,
    size: box.size,
    headerSize: box.headerSize,
    type: box.type
  };
  if (isFullBox) {
    ret.version = box.data[box.headerSize];
    ret.flags = readBig24(box.data, box.headerSize + 1);
    ret.headerSize += 4;
  }
  parse2(ret, box.data.subarray(ret.headerSize), ret.start + ret.headerSize);
  return ret;
}
var padStart = function padStart2(str, length, pad) {
  var charstr = String(pad);
  var len = length >> 0;
  var maxlen = Math.ceil(len / charstr.length);
  var chars = [];
  var r = String(str);
  while (maxlen--) {
    chars.push(charstr);
  }
  return chars.join("").substring(0, len - r.length) + r;
};
var toHex = function toHex2() {
  var hex = [];
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }
  value.forEach(function(item) {
    hex.push(padStart(Number(item).toString(16), 2, 0));
  });
  return hex[0];
};

// node_modules/xgplayer-transmuxer/es/mp4/fmp4-demuxer.js
var FMP4Demuxer = function() {
  function FMP4Demuxer2(videoTrack, audioTrack, metadataTrack) {
    _classCallCheck2(this, FMP4Demuxer2);
    this.videoTrack = videoTrack || new VideoTrack();
    this.audioTrack = audioTrack || new AudioTrack();
    this.metadataTrack = metadataTrack || new MetadataTrack();
  }
  _createClass2(FMP4Demuxer2, [{
    key: "demux",
    value: function demux(videoData, audioData) {
      var videoTrack = this.videoTrack, audioTrack = this.audioTrack;
      var videoExist = videoTrack.exist();
      var audioExist = audioTrack.exist();
      videoTrack.samples = [];
      audioTrack.samples = [];
      if (audioData) {
        if (!audioExist) {
          var moovBox = MP4Parser.findBox(audioData, ["moov"])[0];
          if (!moovBox)
            throw new Error("cannot found moov box");
          MP4Parser.moovToTrack(MP4Parser.moov(moovBox), null, audioTrack);
        }
        var moofBox = MP4Parser.findBox(audioData, ["moof"])[0];
        if (moofBox) {
          var samples = MP4Parser.moofToSamples(MP4Parser.moof(moofBox), null, audioTrack)[audioTrack.id];
          var baseMediaDecodeTime = audioTrack.baseMediaDecodeTime;
          if (samples) {
            var baseOffset = moofBox.start;
            samples.map(function(x2) {
              x2.offset += baseOffset;
              var sampleData = audioData.subarray(x2.offset, x2.offset + x2.size);
              audioTrack.samples.push(new AudioSample(x2.dts + baseMediaDecodeTime, sampleData, x2.duration));
            });
          }
        }
      }
      if (videoData) {
        if (!videoExist && !audioExist) {
          var _moovBox = MP4Parser.findBox(videoData, ["moov"])[0];
          if (!_moovBox)
            throw new Error("cannot found moov box");
          MP4Parser.moovToTrack(MP4Parser.moov(_moovBox), videoTrack, audioTrack);
        }
        var _moofBox = MP4Parser.findBox(videoData, ["moof"])[0];
        if (_moofBox) {
          var tracks = MP4Parser.moofToSamples(MP4Parser.moof(_moofBox), videoTrack, audioTrack);
          var videoBaseMediaDecodeTime = videoTrack.baseMediaDecodeTime;
          var audioBaseMediaDecodeTime = audioTrack.baseMediaDecodeTime;
          var _baseOffset = _moofBox.start;
          var nalSize;
          Object.keys(tracks).forEach(function(k) {
            if (videoTrack.id == k) {
              tracks[k].map(function(x2) {
                x2.offset += _baseOffset;
                var sample = new VideoSample((x2.pts || x2.dts) + videoBaseMediaDecodeTime, x2.dts + videoBaseMediaDecodeTime);
                sample.duration = x2.duration;
                sample.gopId = x2.gopId;
                if (x2.keyframe)
                  sample.setToKeyframe();
                var sampleData = videoData.subarray(x2.offset, x2.offset + x2.size);
                sample.data = sampleData;
                var start = 0;
                var len = sampleData.length - 1;
                while (start < len) {
                  nalSize = readBig32(sampleData, start);
                  start += 4;
                  sample.units.push(sampleData.subarray(start, start + nalSize));
                  start += nalSize;
                }
                videoTrack.samples.push(sample);
              });
            } else if (audioTrack.id == k) {
              tracks[k].map(function(x2) {
                x2.offset += _baseOffset;
                var sampleData = videoData.subarray(x2.offset, x2.offset + x2.size);
                audioTrack.samples.push(new AudioSample(x2.dts + audioBaseMediaDecodeTime, sampleData, x2.duration));
              });
            }
          });
        }
      }
      return {
        videoTrack,
        audioTrack,
        metadataTrack: this.metadataTrack
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this.videoTrack.reset();
      this.audioTrack.reset();
      this.metadataTrack.reset();
    }
  }], [{
    key: "probe",
    value: function probe(data) {
      return MP4Parser.probe(data);
    }
  }]);
  return FMP4Demuxer2;
}();

// node_modules/xgplayer-transmuxer/es/mp4/buffer.js
function Concat(ResultConstructor) {
  var totalLength = 0;
  for (var _len = arguments.length, arrays = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }
  arrays.forEach(function(arr) {
    totalLength += arr.length;
  });
  var result = new ResultConstructor(totalLength);
  var offset = 0;
  arrays.forEach(function(arr) {
    result.set(arr, offset);
    offset += arr.length;
  });
  return result;
}
var Buffer2 = function() {
  function Buffer22() {
    _classCallCheck2(this, Buffer22);
    this.buffer = new Uint8Array(0);
  }
  _createClass2(Buffer22, [{
    key: "write",
    value: function write() {
      var self = this;
      for (var _len2 = arguments.length, buffer = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        buffer[_key2] = arguments[_key2];
      }
      buffer.forEach(function(item) {
        if (item) {
          self.buffer = Concat(Uint8Array, self.buffer, item);
        } else {
          window.console.warn(item);
        }
      });
    }
  }], [{
    key: "writeUint16",
    value: function writeUint16(value) {
      return new Uint8Array([value >> 8 & 255, value & 255]);
    }
  }, {
    key: "writeUint32",
    value: function writeUint32(value) {
      return new Uint8Array([value >> 24, value >> 16 & 255, value >> 8 & 255, value & 255]);
    }
  }]);
  return Buffer22;
}();

// node_modules/xgplayer-transmuxer/es/mp4/mp4.js
var UINT32_MAX = Math.pow(2, 32) - 1;
var MP4 = function() {
  function MP42() {
    _classCallCheck2(this, MP42);
  }
  _createClass2(MP42, null, [{
    key: "box",
    value: function box(type) {
      for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        payload[_key - 1] = arguments[_key];
      }
      payload = payload.filter(Boolean);
      var size = 8 + payload.reduce(function(p, c) {
        return p + c.byteLength;
      }, 0);
      var ret = new Uint8Array(size);
      ret[0] = size >> 24 & 255;
      ret[1] = size >> 16 & 255;
      ret[2] = size >> 8 & 255;
      ret[3] = size & 255;
      ret.set(type, 4);
      var offset = 8;
      payload.forEach(function(data) {
        ret.set(data, offset);
        offset += data.byteLength;
      });
      return ret;
    }
  }, {
    key: "ftyp",
    value: function ftyp(tracks) {
      var isHevc = tracks.find(function(t) {
        return t.type === TrackType.VIDEO && t.codecType === VideoCodecType.HEVC;
      });
      return isHevc ? MP42.FTYPHEV1 : MP42.FTYPAVC1;
    }
  }, {
    key: "initSegment",
    value: function initSegment(tracks) {
      var ftyp = MP42.ftyp(tracks);
      var init = concatUint8Array2(ftyp, MP42.moov(tracks));
      return init;
    }
  }, {
    key: "pssh",
    value: function pssh(data) {
      var content = new Uint8Array([
        1,
        0,
        0,
        0
      ].concat([16, 119, 239, 236, 192, 178, 77, 2, 172, 227, 60, 30, 82, 226, 251, 75], [0, 0, 0, 1], parse(data.kid), [0, 0, 0, 0]));
      return MP42.box(MP42.types.pssh, content);
    }
  }, {
    key: "moov",
    value: function moov(tracks) {
      if (tracks[0].useEME && (tracks[0].encv || tracks[0].enca)) {
        if (!tracks[0].pssh) {
          tracks[0].pssh = {
            kid: tracks[0].kid
          };
        }
        var pssh = this.pssh(tracks[0].pssh);
        return MP42.box.apply(MP42, [MP42.types.moov, MP42.mvhd(tracks[0].mvhdDurtion || tracks[0].duration, tracks[0].mvhdTimecale || tracks[0].timescale), MP42.mvex(tracks)].concat(_toConsumableArray(tracks.map(function(t) {
          return MP42.trak(t);
        })), [pssh]));
      } else {
        return MP42.box.apply(MP42, [MP42.types.moov, MP42.mvhd(tracks[0].mvhdDurtion || tracks[0].duration, tracks[0].mvhdTimecale || tracks[0].timescale)].concat(_toConsumableArray(tracks.map(function(t) {
          return MP42.trak(t);
        })), [MP42.mvex(tracks)]));
      }
    }
  }, {
    key: "mvhd",
    value: function mvhd(duration) {
      var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 9e4;
      var mvhd2 = MP42.box(MP42.types.mvhd, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        timescale >> 24 & 255,
        timescale >> 16 & 255,
        timescale >> 8 & 255,
        timescale & 255,
        duration >> 24 & 255,
        duration >> 16 & 255,
        duration >> 8 & 255,
        duration & 255,
        0,
        1,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        255,
        255,
        255,
        255
      ]));
      return mvhd2;
    }
  }, {
    key: "trak",
    value: function trak(track) {
      var trak2 = MP42.box(MP42.types.trak, MP42.tkhd(track.id, track.tkhdDuration || 0, track.width, track.height), MP42.mdia(track));
      return trak2;
    }
  }, {
    key: "tkhd",
    value: function tkhd(id, duration) {
      var width = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
      var height = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
      var tkhd2 = MP42.box(MP42.types.tkhd, new Uint8Array([
        0,
        0,
        0,
        7,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        id >> 24 & 255,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        0,
        duration >> 24 & 255,
        duration >> 16 & 255,
        duration >> 8 & 255,
        duration & 255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        64,
        0,
        0,
        0,
        width >> 8 & 255,
        width & 255,
        0,
        0,
        height >> 8 & 255,
        height & 255,
        0,
        0
      ]));
      return tkhd2;
    }
  }, {
    key: "mdia",
    value: function mdia(track) {
      var mdia2 = MP42.box(MP42.types.mdia, MP42.mdhd(track.duration, track.timescale), MP42.hdlr(track.type), MP42.minf(track));
      return mdia2;
    }
  }, {
    key: "mdhd",
    value: function mdhd(duration) {
      var timescale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 9e4;
      var mdhd2 = MP42.box(MP42.types.mdhd, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        timescale >> 24 & 255,
        timescale >> 16 & 255,
        timescale >> 8 & 255,
        timescale & 255,
        duration >> 24 & 255,
        duration >> 16 & 255,
        duration >> 8 & 255,
        duration & 255,
        85,
        196,
        0,
        0
      ]));
      return mdhd2;
    }
  }, {
    key: "hdlr",
    value: function hdlr(type) {
      var hdlr2 = MP42.box(MP42.types.hdlr, MP42.HDLR_TYPES[type]);
      return hdlr2;
    }
  }, {
    key: "minf",
    value: function minf(track) {
      var minf2 = MP42.box(MP42.types.minf, track.type === TrackType.VIDEO ? MP42.VMHD : MP42.SMHD, MP42.DINF, MP42.stbl(track));
      return minf2;
    }
  }, {
    key: "stbl",
    value: function stbl(track) {
      var extBox = [];
      if (track && track.ext) {
        track.ext.stss && extBox.push(MP42.stss(track.ext.stss.entries));
      }
      var stbl2 = MP42.box(MP42.types.stbl, MP42.stsd(track), MP42.STTS, extBox[0], MP42.STSC, MP42.STSZ, MP42.STCO);
      return stbl2;
    }
  }, {
    key: "stsd",
    value: function stsd(track) {
      var content;
      if (track.type === "audio") {
        if (track.useEME && track.enca) {
          content = MP42.enca(track);
        } else {
          content = MP42.mp4a(track);
        }
      } else if (track.useEME && track.encv) {
        content = MP42.encv(track);
      } else {
        content = MP42.avc1hev1(track);
      }
      var stsd2 = MP42.box(MP42.types.stsd, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1
      ]), content);
      return stsd2;
    }
  }, {
    key: "enca",
    value: function enca(data) {
      var channelCount = data.enca.channelCount;
      var sampleRate = data.enca.sampleRate;
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        sampleRate >> 8 & 255,
        sampleRate & 255,
        0,
        0
      ]);
      var esds = MP42.esds(data.config);
      var sinf = MP42.sinf(data.enca);
      return MP42.box(MP42.types.enca, content, esds, sinf);
    }
  }, {
    key: "encv",
    value: function encv(track) {
      var _concat$concat, _ref;
      var sps = track.sps.length > 0 ? track.sps[0] : [];
      var pps = track.pps.length > 0 ? track.pps[0] : [];
      var width = track.width;
      var height = track.height;
      var hSpacing = track.sarRatio[0];
      var vSpacing = track.sarRatio[1];
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        width >> 8 & 255,
        width & 255,
        height >> 8 & 255,
        height & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        18,
        100,
        97,
        105,
        108,
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        17,
        17
      ]);
      var avcc = new Uint8Array((_concat$concat = (_ref = [
        1,
        sps[1],
        sps[2],
        sps[3],
        252 | 3,
        224 | 1,
        sps.length >>> 8 & 255,
        sps.length & 255
      ]).concat.apply(_ref, _toConsumableArray(sps)).concat([1, pps.length >>> 8 & 255, pps.length & 255])).concat.apply(_concat$concat, _toConsumableArray(pps)));
      var btrt = new Uint8Array([0, 0, 88, 57, 0, 15, 200, 192, 0, 4, 86, 72]);
      var sinf = MP42.sinf(track.encv);
      var pasp = new Uint8Array([
        hSpacing >> 24,
        hSpacing >> 16 & 255,
        hSpacing >> 8 & 255,
        hSpacing & 255,
        vSpacing >> 24,
        vSpacing >> 16 & 255,
        vSpacing >> 8 & 255,
        vSpacing & 255
      ]);
      return MP42.box(MP42.types.encv, content, MP42.box(MP42.types.avcC, avcc), MP42.box(MP42.types.btrt, btrt), sinf, MP42.box(MP42.types.pasp, pasp));
    }
  }, {
    key: "schi",
    value: function schi(data) {
      var content = new Uint8Array([]);
      var tenc = MP42.tenc(data);
      return MP42.box(MP42.types.schi, content, tenc);
    }
  }, {
    key: "tenc",
    value: function tenc(data) {
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        data.default_IsEncrypted & 255,
        data.default_IV_size & 255
      ].concat(parse(data.default_KID)));
      return MP42.box(MP42.types.tenc, content);
    }
  }, {
    key: "sinf",
    value: function sinf(data) {
      var content = new Uint8Array([]);
      var frma = new Uint8Array([data.data_format.charCodeAt(0), data.data_format.charCodeAt(1), data.data_format.charCodeAt(2), data.data_format.charCodeAt(3)]);
      var schm = new Uint8Array([
        0,
        0,
        0,
        0,
        99,
        101,
        110,
        99,
        0,
        1,
        0,
        0
      ]);
      var schi = MP42.schi(data);
      return MP42.box(MP42.types.sinf, content, MP42.box(MP42.types.frma, frma), MP42.box(MP42.types.schm, schm), schi);
    }
  }, {
    key: "avc1hev1",
    value: function avc1hev1(track) {
      var isHevc = track.codecType === VideoCodecType.HEVC;
      var typ = isHevc ? MP42.types.hvc1 : MP42.types.avc1;
      var config = isHevc ? MP42.hvcC(track) : MP42.avcC(track);
      var boxes = [new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        track.width >> 8 & 255,
        track.width & 255,
        track.height >> 8 & 255,
        track.height & 255,
        0,
        72,
        0,
        0,
        0,
        72,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        24,
        17,
        17
      ]), config];
      if (isHevc) {
        boxes.push(MP42.box(MP42.types.fiel, new Uint8Array([1, 0])));
      } else if (track.sarRatio && track.sarRatio.length > 1) {
        boxes.push(MP42.pasp(track.sarRatio));
      }
      return MP42.box.apply(MP42, [typ].concat(boxes));
    }
  }, {
    key: "avcC",
    value: function avcC(track) {
      var _concat$concat2, _ref2;
      var sps = [];
      var pps = [];
      var len;
      track.sps.forEach(function(s) {
        len = s.byteLength;
        sps.push(len >>> 8 & 255);
        sps.push(len & 255);
        sps.push.apply(sps, _toConsumableArray(s));
      });
      track.pps.forEach(function(p) {
        len = p.byteLength;
        pps.push(len >>> 8 & 255);
        pps.push(len & 255);
        pps.push.apply(pps, _toConsumableArray(p));
      });
      return MP42.box(MP42.types.avcC, new Uint8Array((_concat$concat2 = (_ref2 = [
        1,
        sps[3],
        sps[4],
        sps[5],
        252 | 3,
        224 | track.sps.length
      ]).concat.apply(_ref2, sps).concat([track.pps.length])).concat.apply(_concat$concat2, pps)));
    }
  }, {
    key: "hvcC",
    value: function hvcC(track) {
      var hvcC2 = track.hvcC;
      if (hvcC2 instanceof ArrayBuffer || hvcC2 instanceof Uint8Array)
        return hvcC2;
      var vps = track.vps, sps = track.sps, pps = track.pps;
      var data;
      if (hvcC2) {
        var pcf = hvcC2.generalProfileCompatibilityFlags;
        var cif = hvcC2.generalConstraintIndicatorFlags;
        var numOfArrays = (vps.length && 1) + (sps.length && 1) + (pps.length && 1);
        data = [
          1,
          hvcC2.generalProfileSpace << 6 | hvcC2.generalTierFlag << 5 | hvcC2.generalProfileIdc,
          pcf >>> 24,
          pcf >>> 16,
          pcf >>> 8,
          pcf,
          cif[0],
          cif[1],
          cif[2],
          cif[3],
          cif[4],
          cif[5],
          hvcC2.generalLevelIdc,
          240,
          0,
          252,
          hvcC2.chromaFormatIdc | 252,
          hvcC2.bitDepthLumaMinus8 | 248,
          hvcC2.bitDepthChromaMinus8 | 248,
          0,
          0,
          hvcC2.numTemporalLayers << 3 | hvcC2.temporalIdNested << 2 | 3,
          numOfArrays
        ];
        var write = function write2(x2) {
          var _data;
          data.push(x2.length >> 8, x2.length);
          (_data = data).push.apply(_data, _toConsumableArray(x2));
        };
        if (vps.length) {
          data.push(160, 0, vps.length);
          vps.forEach(write);
        }
        if (sps.length) {
          data.push(161, 0, sps.length);
          sps.forEach(write);
        }
        if (pps.length) {
          data.push(162, 0, pps.length);
          pps.forEach(write);
        }
      } else {
        data = [
          1,
          1,
          96,
          0,
          0,
          0,
          144,
          0,
          0,
          0,
          0,
          0,
          93,
          240,
          0,
          252,
          253,
          248,
          248,
          0,
          0,
          15,
          3,
          160,
          0,
          1,
          0,
          24,
          64,
          1,
          12,
          1,
          255,
          255,
          1,
          96,
          0,
          0,
          3,
          0,
          144,
          0,
          0,
          3,
          0,
          0,
          3,
          0,
          93,
          153,
          152,
          9,
          161,
          0,
          1,
          0,
          45,
          66,
          1,
          1,
          1,
          96,
          0,
          0,
          3,
          0,
          144,
          0,
          0,
          3,
          0,
          0,
          3,
          0,
          93,
          160,
          2,
          128,
          128,
          45,
          22,
          89,
          153,
          164,
          147,
          43,
          154,
          128,
          128,
          128,
          130,
          0,
          0,
          3,
          0,
          2,
          0,
          0,
          3,
          0,
          50,
          16,
          162,
          0,
          1,
          0,
          7,
          68,
          1,
          193,
          114,
          180,
          98,
          64
        ];
      }
      return MP42.box(MP42.types.hvcC, new Uint8Array(data));
    }
  }, {
    key: "pasp",
    value: function pasp(_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2), hSpacing = _ref4[0], vSpacing = _ref4[1];
      return MP42.box(MP42.types.pasp, new Uint8Array([hSpacing >> 24, hSpacing >> 16 & 255, hSpacing >> 8 & 255, hSpacing & 255, vSpacing >> 24, vSpacing >> 16 & 255, vSpacing >> 8 & 255, vSpacing & 255]));
    }
  }, {
    key: "mp4a",
    value: function mp4a(track) {
      return MP42.box(MP42.types.mp4a, new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        track.channelCount,
        0,
        16,
        0,
        0,
        0,
        0,
        track.sampleRate >> 8 & 255,
        track.sampleRate & 255,
        0,
        0
      ]), track.config.length ? MP42.esds(track.config) : void 0);
    }
  }, {
    key: "esds",
    value: function esds(config) {
      var len = config.length;
      var esds2 = MP42.box(MP42.types.esds, new Uint8Array([
        0,
        0,
        0,
        0,
        3,
        23 + len,
        0,
        0,
        0,
        4,
        15 + len,
        64,
        21,
        0,
        6,
        0,
        0,
        0,
        218,
        192,
        0,
        0,
        218,
        192,
        5
      ].concat([len]).concat(config).concat(
        [6, 1, 2]
      )));
      return esds2;
    }
  }, {
    key: "mvex",
    value: function mvex(tracks) {
      var mvex2 = MP42.box.apply(MP42, [MP42.types.mvex].concat(_toConsumableArray(tracks.map(function(t) {
        return MP42.trex(t.id);
      }))));
      return mvex2;
    }
  }, {
    key: "trex",
    value: function trex(id) {
      var trex2 = MP42.box(MP42.types.trex, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        1
      ]));
      return trex2;
    }
  }, {
    key: "trex1",
    value: function trex1(id) {
      var trex = MP42.box(MP42.types.trex, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0
      ]));
      return trex;
    }
  }, {
    key: "trex2",
    value: function trex2(id) {
      var trex = MP42.box(MP42.types.trex, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255,
        0,
        0,
        0,
        1,
        0,
        0,
        4,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0
      ]));
      return trex;
    }
  }, {
    key: "moof",
    value: function moof(tracks) {
      var moof2 = MP42.box.apply(MP42, [MP42.types.moof, MP42.mfhd(tracks[0].samples ? tracks[0].samples[0].gopId : 0)].concat(_toConsumableArray(tracks.map(function(t) {
        return MP42.traf(t);
      }))));
      return moof2;
    }
  }, {
    key: "mfhd",
    value: function mfhd(sequenceNumber) {
      var mfhd2 = MP42.box(MP42.types.mfhd, new Uint8Array([
        0,
        0,
        0,
        0,
        sequenceNumber >> 24,
        sequenceNumber >> 16 & 255,
        sequenceNumber >> 8 & 255,
        sequenceNumber & 255
      ]));
      return mfhd2;
    }
  }, {
    key: "traf",
    value: function traf(track) {
      var tfhd = MP42.tfhd(track.id);
      var tfdt = MP42.tfdt(track, track.baseMediaDecodeTime);
      var sencLength = 0;
      var samples;
      if (track.isVideo && track.videoSenc) {
        samples = track.videoSenc;
        samples.forEach(function(item) {
          sencLength = sencLength + 8;
          if (item.subsamples && item.subsamples.length) {
            sencLength = sencLength + 2;
            sencLength = sencLength + item.subsamples.length * 6;
          }
        });
      }
      track.videoSencLength = sencLength;
      if (!track.useEME || !track.isVideoEncryption && !track.isAudioEncryption) {
        var sdtp = MP42.sdtp(track);
        var offset = 16 + 20 + 8 + 16 + 8 + 8;
        return MP42.box(MP42.types.traf, tfhd, tfdt, sdtp, MP42.trun(track.samples, sdtp.byteLength + offset));
      } else if (track.isVideoEncryption) {
        if (track.isVideo) {
          var saiz = MP42.saiz(track);
          var saio = MP42.saio(track);
          var trun = MP42.trun1(track);
          var senc = MP42.senc(track);
          var traf2 = MP42.box(MP42.types.traf, tfhd, tfdt, saiz, saio, trun, senc);
          return traf2;
        } else {
          if (!track.isAudioEncryption) {
            var sbgp = MP42.sbgp();
            var _trun = MP42.trun1(track);
            return MP42.box(MP42.types.traf, tfhd, tfdt, sbgp, _trun);
          } else {
            var _sbgp = MP42.sbgp();
            var _saiz = MP42.saiz(track);
            var _saio = MP42.saio(track);
            var _senc = MP42.senc(track);
            var _trun2 = MP42.trun1(track);
            var _traf = MP42.box(MP42.types.traf, tfhd, tfdt, _sbgp, _saiz, _saio, _senc, _trun2);
            return _traf;
          }
        }
      } else {
        if (track.isVideo) {
          var _trun3 = MP42.trun1(track);
          return MP42.box(MP42.types.traf, tfhd, tfdt, _trun3);
        } else {
          var _sbgp2 = MP42.sbgp();
          var _saiz2 = MP42.saiz(track);
          var _saio2 = MP42.saio(track);
          var _senc2 = MP42.senc(track);
          var _trun4 = MP42.trun1(track);
          var _traf2 = MP42.box(MP42.types.traf, tfhd, tfdt, _sbgp2, _saiz2, _saio2, _senc2, _trun4);
          return _traf2;
        }
      }
    }
  }, {
    key: "sdtp",
    value: function sdtp(data) {
      var buffer = new Buffer2();
      data.samples.forEach(function(item) {
        buffer.write(new Uint8Array(data.isVideo ? [item.keyframe ? 32 : 16] : [16]));
      });
      return MP42.box(MP42.types.sdtp, this.extension(0, 0), buffer.buffer);
    }
  }, {
    key: "trun1",
    value: function trun1(data) {
      var buffer = new Buffer2();
      var sampleCount = Buffer2.writeUint32(data.samples.length);
      var offset = null;
      if (data.isVideo) {
        var sencLength = data.videoSencLength;
        offset = Buffer2.writeUint32(data.samples.length * 16 + sencLength + 149);
        if (!data.isVideoEncryption && data.isAudioEncryption) {
          offset = Buffer2.writeUint32(data.samples.length * 16 + 92);
        }
      } else {
        var len = data.samples.length * 12 + 124;
        if (data.isAudioEncryption) {
          len = data.samples.length * 12 + 8 * data.audioSenc.length + 177;
        }
        offset = Buffer2.writeUint32(len);
      }
      data.samples.forEach(function(item) {
        buffer.write(Buffer2.writeUint32(item.duration));
        buffer.write(Buffer2.writeUint32(item.size));
        buffer.write(Buffer2.writeUint32(item.keyframe ? 33554432 : 65536));
        if (data.isVideo) {
          buffer.write(Buffer2.writeUint32(item.cts ? item.cts : 0));
        }
      });
      return MP42.box(MP42.types.trun, this.extension(0, data.flags), sampleCount, offset, buffer.buffer);
    }
  }, {
    key: "senc",
    value: function senc(data) {
      var buffer = new Buffer2();
      var len = data.samples.length;
      var ceil = data.isVideo ? 16 : 8;
      var flag = data.isVideo ? 2 : 0;
      var samples = [];
      var samplesLength = 0;
      if (data.isVideo) {
        samples = data.videoSenc;
        samplesLength = data.videoSencLength;
      } else {
        samples = data.audioSenc;
      }
      samplesLength = samplesLength || ceil * len;
      buffer.write(Buffer2.writeUint32(16 + samplesLength), MP42.types.senc, this.extension(0, flag));
      buffer.write(Buffer2.writeUint32(len));
      samples.forEach(function(item) {
        for (var i = 0; i < item.InitializationVector.length; i++) {
          buffer.write(new Uint8Array([item.InitializationVector[i]]));
        }
        if (item.subsamples && item.subsamples.length) {
          buffer.write(Buffer2.writeUint16(item.subsamples.length));
          item.subsamples.forEach(function(value) {
            buffer.write(Buffer2.writeUint16(value.BytesOfClearData));
            buffer.write(Buffer2.writeUint32(value.BytesOfProtectedData));
          });
        }
      });
      return buffer.buffer;
    }
  }, {
    key: "saio",
    value: function saio(data) {
      var length = data.samples.length * 12 + 141;
      if (!data.isVideo && data.isAudioEncryption) {
        length = 149;
      }
      var content = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, length >> 24 & 255, length >> 16 & 255, length >> 8 & 255, length & 255]);
      return MP42.box(MP42.types.saio, content);
    }
  }, {
    key: "saiz",
    value: function saiz(data) {
      var samplesLength = data.samples.length;
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        16,
        samplesLength >> 24 & 255,
        samplesLength >> 16 & 255,
        samplesLength >> 8 & 255,
        samplesLength & 255
      ]);
      return MP42.box(MP42.types.saiz, content);
    }
  }, {
    key: "sbgp",
    value: function sbgp() {
      var content = new Uint8Array([
        114,
        111,
        108,
        108,
        0,
        0,
        0,
        1,
        0,
        0,
        1,
        25,
        0,
        0,
        0,
        1
      ]);
      return MP42.box(MP42.types.sbgp, this.extension(0, 0), content);
    }
  }, {
    key: "extension",
    value: function extension(version, flag) {
      return new Uint8Array([version, flag >> 16 & 255, flag >> 8 & 255, flag & 255]);
    }
  }, {
    key: "tfhd",
    value: function tfhd(id) {
      return MP42.box(MP42.types.tfhd, new Uint8Array([
        0,
        0,
        0,
        0,
        id >> 24,
        id >> 16 & 255,
        id >> 8 & 255,
        id & 255
      ]));
    }
  }, {
    key: "tfdt",
    value: function tfdt(data, baseMediaDecodeTime) {
      var upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
      var lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
      if (data.useEME && (data.isVideoEncryption || data.isAudioEncryption)) {
        return MP42.box(MP42.types.tfdt, new Uint8Array([
          0,
          0,
          0,
          0,
          lowerWordBaseMediaDecodeTime >> 24,
          lowerWordBaseMediaDecodeTime >> 16 & 255,
          lowerWordBaseMediaDecodeTime >> 8 & 255,
          lowerWordBaseMediaDecodeTime & 255
        ]));
      } else {
        return MP42.box(MP42.types.tfdt, new Uint8Array([
          1,
          0,
          0,
          0,
          upperWordBaseMediaDecodeTime >> 24,
          upperWordBaseMediaDecodeTime >> 16 & 255,
          upperWordBaseMediaDecodeTime >> 8 & 255,
          upperWordBaseMediaDecodeTime & 255,
          lowerWordBaseMediaDecodeTime >> 24,
          lowerWordBaseMediaDecodeTime >> 16 & 255,
          lowerWordBaseMediaDecodeTime >> 8 & 255,
          lowerWordBaseMediaDecodeTime & 255
        ]));
      }
    }
  }, {
    key: "trun",
    value: function trun(samples, offset) {
      var sampleLen = samples.length;
      var dataLen = 12 + 16 * sampleLen;
      offset += 8 + dataLen;
      var data = new Uint8Array(dataLen);
      data.set([
        0,
        0,
        15,
        1,
        sampleLen >>> 24 & 255,
        sampleLen >>> 16 & 255,
        sampleLen >>> 8 & 255,
        sampleLen & 255,
        offset >>> 24 & 255,
        offset >>> 16 & 255,
        offset >>> 8 & 255,
        offset & 255
      ], 0);
      for (var i = 0; i < sampleLen; i++) {
        var _samples$i = samples[i], duration = _samples$i.duration, size = _samples$i.size, _samples$i$flag = _samples$i.flag, flag = _samples$i$flag === void 0 ? {} : _samples$i$flag, _samples$i$cts = _samples$i.cts, cts = _samples$i$cts === void 0 ? 0 : _samples$i$cts;
        data.set([
          duration >>> 24 & 255,
          duration >>> 16 & 255,
          duration >>> 8 & 255,
          duration & 255,
          size >>> 24 & 255,
          size >>> 16 & 255,
          size >>> 8 & 255,
          size & 255,
          flag.isLeading << 2 | (flag.dependsOn === null || flag.dependsOn === void 0 ? 1 : flag.dependsOn),
          flag.isDependedOn << 6 | flag.hasRedundancy << 4 | flag.paddingValue << 1 | (flag.isNonSyncSample === null || flag.isNonSyncSample === void 0 ? 1 : flag.isNonSyncSample),
          flag.degradationPriority & 240 << 8,
          flag.degradationPriority & 15,
          cts >>> 24 & 255,
          cts >>> 16 & 255,
          cts >>> 8 & 255,
          cts & 255
        ], 12 + 16 * i);
      }
      return MP42.box(MP42.types.trun, data);
    }
  }, {
    key: "moovMP4",
    value: function moovMP4(tracks) {
      return MP42.box.apply(MP42, [MP42.types.moov, MP42.mvhd(tracks[0].duration, tracks[0].timescale)].concat(_toConsumableArray(tracks.map(function(t) {
        return MP42.trackMP4(t);
      }))));
    }
  }, {
    key: "trackMP4",
    value: function trackMP4(track) {
      return MP42.box(MP42.types.trak, MP42.tkhd(track.id, track.duration, track.width, track.height), MP42.mdiaMP4(track));
    }
  }, {
    key: "mdiaMP4",
    value: function mdiaMP4(track) {
      return MP42.box(MP42.types.mdia, MP42.mdhd(track.duration, track.timescale), MP42.hdlr(track.type), MP42.minfMP4(track));
    }
  }, {
    key: "minfMP4",
    value: function minfMP4(track) {
      return MP42.box(MP42.types.minf, track.type === TrackType.VIDEO ? MP42.VMHD : MP42.SMHD, MP42.DINF, MP42.stblMP4(track));
    }
  }, {
    key: "stblMP4",
    value: function stblMP4(track) {
      var ext = track.ext;
      var boxes = [MP42.stsd(track), MP42.stts(ext.stts), MP42.stsc(ext.stsc), MP42.stsz(ext.stsz), MP42.stco(ext.stco)];
      if (ext.stss.length) {
        boxes.push(MP42.stss(ext.stss));
      }
      if (ext.ctts.length) {
        boxes.push(MP42.ctts(ext.ctts));
      }
      return MP42.box.apply(MP42, [MP42.types.stbl].concat(boxes));
    }
  }, {
    key: "stts",
    value: function stts(samples) {
      var len = samples.length;
      var data = new Uint8Array(8 * len);
      var offset = 0;
      samples.forEach(function(_ref5) {
        var value = _ref5.value, count = _ref5.count;
        data.set([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255, value >> 24, value >> 16 & 255, value >> 8 & 255, value & 255], offset);
        offset += 8;
      });
      return MP42.box(MP42.types.stts, concatUint8Array2(new Uint8Array([0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "stsc",
    value: function stsc(entries) {
      var len = entries.length;
      var data = new Uint8Array(12 * len);
      var offset = 0;
      entries.forEach(function(_ref6) {
        var firstChunk = _ref6.firstChunk, samplesPerChunk = _ref6.samplesPerChunk, sampleDescIndex = _ref6.sampleDescIndex;
        data.set([firstChunk >> 24, firstChunk >> 16 & 255, firstChunk >> 8 & 255, firstChunk & 255, samplesPerChunk >> 24, samplesPerChunk >> 16 & 255, samplesPerChunk >> 8 & 255, samplesPerChunk & 255, sampleDescIndex >> 24, sampleDescIndex >> 16 & 255, sampleDescIndex >> 8 & 255, sampleDescIndex & 255], offset);
        offset += 12;
      });
      return MP42.box(MP42.types.stsc, concatUint8Array2(new Uint8Array([0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "stsz",
    value: function stsz(samplesSizes) {
      var len = samplesSizes.length;
      var data = new Uint8Array(4 * len);
      var offset = 0;
      samplesSizes.forEach(function(x2) {
        data.set([x2 >> 24, x2 >> 16 & 255, x2 >> 8 & 255, x2 & 255], offset);
        offset += 4;
      });
      return MP42.box(MP42.types.stsz, concatUint8Array2(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "stco",
    value: function stco(offsets) {
      var len = offsets.length;
      var data = new Uint8Array(4 * len);
      var offset = 0;
      offsets.forEach(function(x2) {
        data.set([x2 >> 24, x2 >> 16 & 255, x2 >> 8 & 255, x2 & 255], offset);
        offset += 4;
      });
      return MP42.box(MP42.types.stco, concatUint8Array2(new Uint8Array([0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "stss",
    value: function stss(keyframeIndexes) {
      var len = keyframeIndexes.length;
      var data = new Uint8Array(4 * len);
      var offset = 0;
      keyframeIndexes.forEach(function(x2) {
        data.set([x2 >> 24, x2 >> 16 & 255, x2 >> 8 & 255, x2 & 255], offset);
        offset += 4;
      });
      return MP42.box(MP42.types.stss, concatUint8Array2(new Uint8Array([0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "ctts",
    value: function ctts(samples) {
      var len = samples.length;
      var data = new Uint8Array(8 * len);
      var offset = 0;
      samples.forEach(function(_ref7) {
        var value = _ref7.value, count = _ref7.count;
        data.set([count >> 24, count >> 16 & 255, count >> 8 & 255, count & 255, value >> 24, value >> 16 & 255, value >> 8 & 255, value & 255], offset);
        offset += 8;
      });
      return MP42.box(MP42.types.ctts, concatUint8Array2(new Uint8Array([0, 0, 0, 0, len >> 24, len >> 16 & 255, len >> 8 & 255, len & 255]), data));
    }
  }, {
    key: "styp",
    value: function styp() {
      return MP42.box(MP42.types.styp, new Uint8Array([109, 115, 100, 104, 0, 0, 0, 0, 109, 115, 100, 104, 109, 115, 105, 120]));
    }
  }, {
    key: "sidx",
    value: function sidx(data) {
      var timescale = data.timescale;
      var duration = data.samples[0].duration;
      var durationCount = duration * data.samples.length;
      var earliestTime = data.samples[0].sampleOffset * duration;
      var mdatSize = 8;
      data.samples.forEach(function(item) {
        mdatSize += item.size;
      });
      var length = 0;
      if (data.isVideo) {
        var sencLength = 0;
        var samples;
        if (data.videoSenc) {
          samples = data.videoSenc;
        }
        if (data.isVideo) {
          samples.forEach(function(item) {
            sencLength = sencLength + 8;
            if (item.subsamples && item.subsamples.length) {
              sencLength = sencLength + 2;
              sencLength = sencLength + item.subsamples.length * 6;
            }
          });
        }
        data.videoSencLength = sencLength;
        length = mdatSize + 141 + data.samples.length * 16 + sencLength;
        if (data.useEME && data.isAudioEncryption && !data.isVideoEncryption) {
          length = mdatSize + data.samples.length * 16 + 84;
        }
      } else {
        length = mdatSize + 116 + data.samples.length * 12;
        if (data.useEME && data.isAudioEncryption) {
          length = mdatSize + 169 + data.samples.length * 12 + 8 * data.audioSenc.length;
        }
      }
      var content = new Uint8Array([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        data.id & 255,
        timescale >> 24 & 255,
        timescale >> 16 & 255,
        timescale >> 8 & 255,
        timescale & 255,
        earliestTime >> 24 & 255,
        earliestTime >> 16 & 255,
        earliestTime >> 8 & 255,
        earliestTime & 255,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        length >> 16 & 255,
        length >> 8 & 255,
        length & 255,
        durationCount >> 24 & 255,
        durationCount >> 16 & 255,
        durationCount >> 8 & 255,
        durationCount & 255,
        144,
        0,
        0,
        0
      ]);
      return MP42.box(MP42.types.sidx, content);
    }
  }, {
    key: "mdat",
    value: function mdat(data) {
      var mdat2 = MP42.box(MP42.types.mdat, data);
      return mdat2;
    }
  }]);
  return MP42;
}();
_defineProperty2(MP4, "types", ["avc1", "avcC", "hvc1", "hvcC", "dinf", "dref", "esds", "ftyp", "hdlr", "mdat", "mdhd", "mdia", "mfhd", "minf", "moof", "moov", "mp4a", "mvex", "mvhd", "pasp", "stbl", "stco", "stsc", "stsd", "stsz", "stts", "tfdt", "tfhd", "traf", "trak", "trex", "tkhd", "vmhd", "smhd", "ctts", "stss", "styp", "pssh", "sidx", "sbgp", "saiz", "saio", "senc", "trun", "encv", "enca", "sinf", "btrt", "frma", "tenc", "schm", "schi", "mehd", "fiel", "sdtp"].reduce(function(p, c) {
  p[c] = [c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2), c.charCodeAt(3)];
  return p;
}, /* @__PURE__ */ Object.create(null)));
_defineProperty2(MP4, "HDLR_TYPES", {
  video: new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    118,
    105,
    100,
    101,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    86,
    105,
    100,
    101,
    111,
    72,
    97,
    110,
    100,
    108,
    101,
    114,
    0
  ]),
  audio: new Uint8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    115,
    111,
    117,
    110,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    83,
    111,
    117,
    110,
    100,
    72,
    97,
    110,
    100,
    108,
    101,
    114,
    0
  ])
});
_defineProperty2(MP4, "FTYPAVC1", MP4.box(MP4.types.ftyp, new Uint8Array([
  105,
  115,
  111,
  109,
  0,
  0,
  0,
  1,
  105,
  115,
  111,
  109,
  97,
  118,
  99,
  49
])));
_defineProperty2(MP4, "FTYPHEV1", MP4.box(MP4.types.ftyp, new Uint8Array([
  105,
  115,
  111,
  109,
  0,
  0,
  0,
  1,
  105,
  115,
  111,
  109,
  104,
  101,
  118,
  49
])));
_defineProperty2(MP4, "DINF", MP4.box(MP4.types.dinf, MP4.box(MP4.types.dref, new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  12,
  117,
  114,
  108,
  32,
  0,
  0,
  0,
  1
]))));
_defineProperty2(MP4, "VMHD", MP4.box(MP4.types.vmhd, new Uint8Array([
  0,
  0,
  0,
  1,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
])));
_defineProperty2(MP4, "SMHD", MP4.box(MP4.types.smhd, new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
])));
_defineProperty2(MP4, "StblTable", new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
]));
_defineProperty2(MP4, "STTS", MP4.box(MP4.types.stts, MP4.StblTable));
_defineProperty2(MP4, "STSC", MP4.box(MP4.types.stsc, MP4.StblTable));
_defineProperty2(MP4, "STSZ", MP4.box(MP4.types.stsz, new Uint8Array([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
])));
_defineProperty2(MP4, "STCO", MP4.box(MP4.types.stco, MP4.StblTable));

// node_modules/xgplayer-transmuxer/es/mp4/logger.js
var Logger3 = function() {
  function Logger22(name, enable) {
    _classCallCheck2(this, Logger22);
    this.name = name || "";
    this._prefix = "[".concat(this.name, "]");
    Logger22.disabled = enable;
  }
  _createClass2(Logger22, [{
    key: "debug",
    value: function debug() {
      var _console;
      if (Logger22.disabled)
        return;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      (_console = console).debug.apply(_console, [this._prefix].concat(args));
    }
  }, {
    key: "log",
    value: function log() {
      var _console2;
      if (Logger22.disabled)
        return;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      (_console2 = console).log.apply(_console2, [this._prefix].concat(args));
    }
  }, {
    key: "warn",
    value: function warn() {
      var _console3;
      if (Logger22.disabled)
        return;
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      (_console3 = console).warn.apply(_console3, [this._prefix].concat(args));
    }
  }, {
    key: "error",
    value: function error() {
      var _console4;
      if (Logger22.disabled)
        return;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      (_console4 = console).error.apply(_console4, [this._prefix].concat(args));
    }
  }, {
    key: "table",
    value: function table() {
      var _console5;
      if (Logger22.disabled)
        return;
      console.group(this._prefix);
      (_console5 = console).table.apply(_console5, arguments);
      console.groupEnd();
    }
  }], [{
    key: "enable",
    value: function enable() {
      Logger22.disabled = false;
    }
  }, {
    key: "disable",
    value: function disable() {
      Logger22.disabled = true;
    }
  }]);
  return Logger22;
}();
_defineProperty2(Logger3, "disabled", true);

// node_modules/xgplayer-transmuxer/es/mp4/fmp4-remuxer.js
var FMP4Remuxer = function() {
  function FMP4Remuxer2(videoTrack, audioTrack, options) {
    _classCallCheck2(this, FMP4Remuxer2);
    this.videoTrack = videoTrack;
    this.audioTrack = audioTrack;
    var browserVersions = /Chrome\/([^.]+)/.exec(navigator.userAgent);
    this.forceFirstIDR = browserVersions && Number(browserVersions[1]) < 50;
    this.log = new Logger3("FMP4Remuxer", options && options.openLog ? !options.openLog : true);
  }
  _createClass2(FMP4Remuxer2, [{
    key: "remux",
    value: function remux() {
      var createInit = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var videoTrack = this.videoTrack;
      var audioTrack = this.audioTrack;
      var hasVideo = videoTrack.exist();
      var hasAudio = audioTrack.exist();
      var videoInitSegment;
      var audioInitSegment;
      var initSegment;
      var tracks = [];
      if (createInit) {
        if (options && options.initMerge) {
          if (hasVideo) {
            tracks.push(this.videoTrack);
          }
          if (hasAudio) {
            tracks.push(this.audioTrack);
          }
          initSegment = MP4.initSegment(tracks);
        } else {
          if (hasVideo)
            videoInitSegment = MP4.initSegment([this.videoTrack]);
          if (hasAudio)
            audioInitSegment = MP4.initSegment([this.audioTrack]);
        }
      }
      var videoSegment;
      var audioSegment;
      if (hasVideo && videoTrack.hasSample()) {
        videoSegment = this._remuxVideo();
      }
      if (hasAudio && audioTrack.hasSample()) {
        audioSegment = this._remuxAudio();
      }
      videoTrack.samples = [];
      audioTrack.samples = [];
      return {
        initSegment,
        videoInitSegment,
        audioInitSegment,
        videoSegment,
        audioSegment
      };
    }
  }, {
    key: "_remuxVideo",
    value: function _remuxVideo() {
      var track = this.videoTrack;
      if (this.forceFirstIDR) {
        track.samples[0].flag = {
          dependsOn: 2,
          isNonSyncSample: 0
        };
      }
      var samples = track.samples;
      var mdatSize = 0;
      samples.forEach(function(s) {
        mdatSize += s.units.reduce(function(t, c) {
          return t + c.byteLength;
        }, 0);
        mdatSize += s.units.length * 4;
      });
      var mdata = new Uint8Array(mdatSize);
      var mdatView = new DataView(mdata.buffer);
      var _loop = function _loop2(_offset, _sample) {
        _sample = samples[i];
        var sampleSize = 0;
        _sample.units.forEach(function(u) {
          mdatView.setUint32(_offset, u.byteLength);
          _offset += 4;
          mdata.set(u, _offset);
          _offset += u.byteLength;
          sampleSize += 4 + u.byteLength;
        });
        _sample.size = sampleSize;
        offset = _offset, sample = _sample;
      };
      for (var i = 0, l = samples.length, offset = 0, sample; i < l; i++) {
        _loop(offset, sample);
      }
      var mdat = MP4.mdat(mdata);
      var moof = MP4.moof([track]);
      return concatUint8Array2(moof, mdat);
    }
  }, {
    key: "_remuxAudio",
    value: function _remuxAudio() {
      var track = this.audioTrack;
      var mdata = new Uint8Array(track.samples.reduce(function(t, c) {
        return t + c.size;
      }, 0));
      track.samples.reduce(function(offset, s) {
        mdata.set(s.data, offset);
        return offset + s.size;
      }, 0);
      var mdat = MP4.mdat(mdata);
      var moof = MP4.moof([track]);
      return concatUint8Array2(moof, mdat);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.videoTrack.reset();
      this.audioTrack.reset();
    }
  }]);
  return FMP4Remuxer2;
}();

// node_modules/crypto-es/lib/core.js
var Base = class {
  /**
   * Extends this object and runs the init method.
   * Arguments to create() will be passed to init().
   *
   * @return {Object} The new object.
   *
   * @static
   *
   * @example
   *
   *     var instance = MyType.create();
   */
  static create(...args) {
    return new this(...args);
  }
  /**
   * Copies properties into this object.
   *
   * @param {Object} properties The properties to mix in.
   *
   * @example
   *
   *     MyType.mixIn({
   *         field: 'value'
   *     });
   */
  mixIn(properties) {
    return Object.assign(this, properties);
  }
  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = instance.clone();
   */
  clone() {
    const clone = new this.constructor();
    Object.assign(clone, this);
    return clone;
  }
};
var WordArray = class _WordArray extends Base {
  /**
   * Initializes a newly created word array.
   *
   * @param {Array} words (Optional) An array of 32-bit words.
   * @param {number} sigBytes (Optional) The number of significant bytes in the words.
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.create();
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
   *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
   */
  constructor(words = [], sigBytes = words.length * 4) {
    super();
    let typedArray = words;
    if (typedArray instanceof ArrayBuffer) {
      typedArray = new Uint8Array(typedArray);
    }
    if (typedArray instanceof Int8Array || typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
      typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
    }
    if (typedArray instanceof Uint8Array) {
      const typedArrayByteLength = typedArray.byteLength;
      const _words = [];
      for (let i = 0; i < typedArrayByteLength; i += 1) {
        _words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
      }
      this.words = _words;
      this.sigBytes = typedArrayByteLength;
    } else {
      this.words = words;
      this.sigBytes = sigBytes;
    }
  }
  /**
   * Creates a word array filled with random bytes.
   *
   * @param {number} nBytes The number of random bytes to generate.
   *
   * @return {WordArray} The random word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.lib.WordArray.random(16);
   */
  static random(nBytes) {
    const words = [];
    const r = (m_w) => {
      let _m_w = m_w;
      let _m_z = 987654321;
      const mask = 4294967295;
      return () => {
        _m_z = 36969 * (_m_z & 65535) + (_m_z >> 16) & mask;
        _m_w = 18e3 * (_m_w & 65535) + (_m_w >> 16) & mask;
        let result = (_m_z << 16) + _m_w & mask;
        result /= 4294967296;
        result += 0.5;
        return result * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let i = 0, rcache; i < nBytes; i += 4) {
      const _r = r((rcache || Math.random()) * 4294967296);
      rcache = _r() * 987654071;
      words.push(_r() * 4294967296 | 0);
    }
    return new _WordArray(words, nBytes);
  }
  /**
   * Converts this word array to a string.
   *
   * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
   *
   * @return {string} The stringified word array.
   *
   * @example
   *
   *     var string = wordArray + '';
   *     var string = wordArray.toString();
   *     var string = wordArray.toString(CryptoJS.enc.Utf8);
   */
  toString(encoder = Hex) {
    return encoder.stringify(this);
  }
  /**
   * Concatenates a word array to this word array.
   *
   * @param {WordArray} wordArray The word array to append.
   *
   * @return {WordArray} This word array.
   *
   * @example
   *
   *     wordArray1.concat(wordArray2);
   */
  concat(wordArray) {
    const thisWords = this.words;
    const thatWords = wordArray.words;
    const thisSigBytes = this.sigBytes;
    const thatSigBytes = wordArray.sigBytes;
    this.clamp();
    if (thisSigBytes % 4) {
      for (let i = 0; i < thatSigBytes; i += 1) {
        const thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
      }
    } else {
      for (let i = 0; i < thatSigBytes; i += 4) {
        thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
      }
    }
    this.sigBytes += thatSigBytes;
    return this;
  }
  /**
   * Removes insignificant bits.
   *
   * @example
   *
   *     wordArray.clamp();
   */
  clamp() {
    const { words, sigBytes } = this;
    words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
    words.length = Math.ceil(sigBytes / 4);
  }
  /**
   * Creates a copy of this word array.
   *
   * @return {WordArray} The clone.
   *
   * @example
   *
   *     var clone = wordArray.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone.words = this.words.slice(0);
    return clone;
  }
};
var Hex = {
  /**
   * Converts a word array to a hex string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The hex string.
   *
   * @static
   *
   * @example
   *
   *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const hexChars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16));
      hexChars.push((bite & 15).toString(16));
    }
    return hexChars.join("");
  },
  /**
   * Converts a hex string to a word array.
   *
   * @param {string} hexStr The hex string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
   */
  parse(hexStr) {
    const hexStrLength = hexStr.length;
    const words = [];
    for (let i = 0; i < hexStrLength; i += 2) {
      words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
    }
    return new WordArray(words, hexStrLength / 2);
  }
};
var Latin1 = {
  /**
   * Converts a word array to a Latin1 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Latin1 string.
   *
   * @static
   *
   * @example
   *
   *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const latin1Chars = [];
    for (let i = 0; i < sigBytes; i += 1) {
      const bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      latin1Chars.push(String.fromCharCode(bite));
    }
    return latin1Chars.join("");
  },
  /**
   * Converts a Latin1 string to a word array.
   *
   * @param {string} latin1Str The Latin1 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
   */
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i += 1) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
var Utf8 = {
  /**
   * Converts a word array to a UTF-8 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The UTF-8 string.
   *
   * @static
   *
   * @example
   *
   *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
   */
  stringify(wordArray) {
    try {
      return decodeURIComponent(escape(Latin1.stringify(wordArray)));
    } catch (e) {
      throw new Error("Malformed UTF-8 data");
    }
  },
  /**
   * Converts a UTF-8 string to a word array.
   *
   * @param {string} utf8Str The UTF-8 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
   */
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
var BufferedBlockAlgorithm = class extends Base {
  constructor() {
    super();
    this._minBufferSize = 0;
  }
  /**
   * Resets this block algorithm's data buffer to its initial state.
   *
   * @example
   *
   *     bufferedBlockAlgorithm.reset();
   */
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  /**
   * Adds new data to this block algorithm's buffer.
   *
   * @param {WordArray|string} data
   *
   *     The data to append. Strings are converted to a WordArray using UTF-8.
   *
   * @example
   *
   *     bufferedBlockAlgorithm._append('data');
   *     bufferedBlockAlgorithm._append(wordArray);
   */
  _append(data) {
    let m_data = data;
    if (typeof m_data === "string") {
      m_data = Utf8.parse(m_data);
    }
    this._data.concat(m_data);
    this._nDataBytes += m_data.sigBytes;
  }
  /**
   * Processes available data blocks.
   *
   * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
   *
   * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
   *
   * @return {WordArray} The processed data.
   *
   * @example
   *
   *     var processedData = bufferedBlockAlgorithm._process();
   *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
   */
  _process(doFlush) {
    let processedWords;
    const { _data: data, blockSize } = this;
    const dataWords = data.words;
    const dataSigBytes = data.sigBytes;
    const blockSizeBytes = blockSize * 4;
    let nBlocksReady = dataSigBytes / blockSizeBytes;
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += blockSize) {
        this._doProcessBlock(dataWords, offset);
      }
      processedWords = dataWords.splice(0, nWordsReady);
      data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
  /**
   * Creates a copy of this object.
   *
   * @return {Object} The clone.
   *
   * @example
   *
   *     var clone = bufferedBlockAlgorithm.clone();
   */
  clone() {
    const clone = super.clone.call(this);
    clone._data = this._data.clone();
    return clone;
  }
};
var Hasher = class extends BufferedBlockAlgorithm {
  constructor(cfg) {
    super();
    this.blockSize = 512 / 32;
    this.cfg = Object.assign(new Base(), cfg);
    this.reset();
  }
  /**
   * Creates a shortcut function to a hasher's object interface.
   *
   * @param {Hasher} SubHasher The hasher to create a helper for.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
   */
  static _createHelper(SubHasher) {
    return (message, cfg) => new SubHasher(cfg).finalize(message);
  }
  /**
   * Creates a shortcut function to the HMAC's object interface.
   *
   * @param {Hasher} SubHasher The hasher to use in this HMAC helper.
   *
   * @return {Function} The shortcut function.
   *
   * @static
   *
   * @example
   *
   *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
   */
  static _createHmacHelper(SubHasher) {
    return (message, key) => new HMAC(SubHasher, key).finalize(message);
  }
  /**
   * Resets this hasher to its initial state.
   *
   * @example
   *
   *     hasher.reset();
   */
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  /**
   * Updates this hasher with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {Hasher} This hasher.
   *
   * @example
   *
   *     hasher.update('message');
   *     hasher.update(wordArray);
   */
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  /**
   * Finalizes the hash computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The hash.
   *
   * @example
   *
   *     var hash = hasher.finalize();
   *     var hash = hasher.finalize('message');
   *     var hash = hasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
    const hash = this._doFinalize();
    return hash;
  }
};
var HMAC = class extends Base {
  /**
   * Initializes a newly created HMAC.
   *
   * @param {Hasher} SubHasher The hash algorithm to use.
   * @param {WordArray|string} key The secret key.
   *
   * @example
   *
   *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
   */
  constructor(SubHasher, key) {
    super();
    const hasher = new SubHasher();
    this._hasher = hasher;
    let _key = key;
    if (typeof _key === "string") {
      _key = Utf8.parse(_key);
    }
    const hasherBlockSize = hasher.blockSize;
    const hasherBlockSizeBytes = hasherBlockSize * 4;
    if (_key.sigBytes > hasherBlockSizeBytes) {
      _key = hasher.finalize(key);
    }
    _key.clamp();
    const oKey = _key.clone();
    this._oKey = oKey;
    const iKey = _key.clone();
    this._iKey = iKey;
    const oKeyWords = oKey.words;
    const iKeyWords = iKey.words;
    for (let i = 0; i < hasherBlockSize; i += 1) {
      oKeyWords[i] ^= 1549556828;
      iKeyWords[i] ^= 909522486;
    }
    oKey.sigBytes = hasherBlockSizeBytes;
    iKey.sigBytes = hasherBlockSizeBytes;
    this.reset();
  }
  /**
   * Resets this HMAC to its initial state.
   *
   * @example
   *
   *     hmacHasher.reset();
   */
  reset() {
    const hasher = this._hasher;
    hasher.reset();
    hasher.update(this._iKey);
  }
  /**
   * Updates this HMAC with a message.
   *
   * @param {WordArray|string} messageUpdate The message to append.
   *
   * @return {HMAC} This HMAC instance.
   *
   * @example
   *
   *     hmacHasher.update('message');
   *     hmacHasher.update(wordArray);
   */
  update(messageUpdate) {
    this._hasher.update(messageUpdate);
    return this;
  }
  /**
   * Finalizes the HMAC computation.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} messageUpdate (Optional) A final message update.
   *
   * @return {WordArray} The HMAC.
   *
   * @example
   *
   *     var hmac = hmacHasher.finalize();
   *     var hmac = hmacHasher.finalize('message');
   *     var hmac = hmacHasher.finalize(wordArray);
   */
  finalize(messageUpdate) {
    const hasher = this._hasher;
    const innerHash = hasher.finalize(messageUpdate);
    hasher.reset();
    const hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
    return hmac;
  }
};

// node_modules/crypto-es/lib/enc-base64.js
var parseLoop = (base64Str, base64StrLength, reverseMap) => {
  const words = [];
  let nBytes = 0;
  for (let i = 0; i < base64StrLength; i += 1) {
    if (i % 4) {
      const bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
      const bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
      const bitsCombined = bits1 | bits2;
      words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
      nBytes += 1;
    }
  }
  return WordArray.create(words, nBytes);
};
var Base64 = {
  /**
   * Converts a word array to a Base64 string.
   *
   * @param {WordArray} wordArray The word array.
   *
   * @return {string} The Base64 string.
   *
   * @static
   *
   * @example
   *
   *     const base64String = CryptoJS.enc.Base64.stringify(wordArray);
   */
  stringify(wordArray) {
    const { words, sigBytes } = wordArray;
    const map = this._map;
    wordArray.clamp();
    const base64Chars = [];
    for (let i = 0; i < sigBytes; i += 3) {
      const byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i + j * 0.75 < sigBytes; j += 1) {
        base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      while (base64Chars.length % 4) {
        base64Chars.push(paddingChar);
      }
    }
    return base64Chars.join("");
  },
  /**
   * Converts a Base64 string to a word array.
   *
   * @param {string} base64Str The Base64 string.
   *
   * @return {WordArray} The word array.
   *
   * @static
   *
   * @example
   *
   *     const wordArray = CryptoJS.enc.Base64.parse(base64String);
   */
  parse(base64Str) {
    let base64StrLength = base64Str.length;
    const map = this._map;
    let reverseMap = this._reverseMap;
    if (!reverseMap) {
      this._reverseMap = [];
      reverseMap = this._reverseMap;
      for (let j = 0; j < map.length; j += 1) {
        reverseMap[map.charCodeAt(j)] = j;
      }
    }
    const paddingChar = map.charAt(64);
    if (paddingChar) {
      const paddingIndex = base64Str.indexOf(paddingChar);
      if (paddingIndex !== -1) {
        base64StrLength = paddingIndex;
      }
    }
    return parseLoop(base64Str, base64StrLength, reverseMap);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
};

// node_modules/crypto-es/lib/md5.js
var T = [];
for (let i = 0; i < 64; i += 1) {
  T[i] = Math.abs(Math.sin(i + 1)) * 4294967296 | 0;
}
var FF = (a, b, c, d2, x2, s, t) => {
  const n = a + (b & c | ~b & d2) + x2 + t;
  return (n << s | n >>> 32 - s) + b;
};
var GG = (a, b, c, d2, x2, s, t) => {
  const n = a + (b & d2 | c & ~d2) + x2 + t;
  return (n << s | n >>> 32 - s) + b;
};
var HH = (a, b, c, d2, x2, s, t) => {
  const n = a + (b ^ c ^ d2) + x2 + t;
  return (n << s | n >>> 32 - s) + b;
};
var II = (a, b, c, d2, x2, s, t) => {
  const n = a + (c ^ (b | ~d2)) + x2 + t;
  return (n << s | n >>> 32 - s) + b;
};
var MD5Algo = class extends Hasher {
  _doReset() {
    this._hash = new WordArray([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(M, offset) {
    const _M = M;
    for (let i = 0; i < 16; i += 1) {
      const offset_i = offset + i;
      const M_offset_i = M[offset_i];
      _M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
    }
    const H = this._hash.words;
    const M_offset_0 = _M[offset + 0];
    const M_offset_1 = _M[offset + 1];
    const M_offset_2 = _M[offset + 2];
    const M_offset_3 = _M[offset + 3];
    const M_offset_4 = _M[offset + 4];
    const M_offset_5 = _M[offset + 5];
    const M_offset_6 = _M[offset + 6];
    const M_offset_7 = _M[offset + 7];
    const M_offset_8 = _M[offset + 8];
    const M_offset_9 = _M[offset + 9];
    const M_offset_10 = _M[offset + 10];
    const M_offset_11 = _M[offset + 11];
    const M_offset_12 = _M[offset + 12];
    const M_offset_13 = _M[offset + 13];
    const M_offset_14 = _M[offset + 14];
    const M_offset_15 = _M[offset + 15];
    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d2 = H[3];
    a = FF(a, b, c, d2, M_offset_0, 7, T[0]);
    d2 = FF(d2, a, b, c, M_offset_1, 12, T[1]);
    c = FF(c, d2, a, b, M_offset_2, 17, T[2]);
    b = FF(b, c, d2, a, M_offset_3, 22, T[3]);
    a = FF(a, b, c, d2, M_offset_4, 7, T[4]);
    d2 = FF(d2, a, b, c, M_offset_5, 12, T[5]);
    c = FF(c, d2, a, b, M_offset_6, 17, T[6]);
    b = FF(b, c, d2, a, M_offset_7, 22, T[7]);
    a = FF(a, b, c, d2, M_offset_8, 7, T[8]);
    d2 = FF(d2, a, b, c, M_offset_9, 12, T[9]);
    c = FF(c, d2, a, b, M_offset_10, 17, T[10]);
    b = FF(b, c, d2, a, M_offset_11, 22, T[11]);
    a = FF(a, b, c, d2, M_offset_12, 7, T[12]);
    d2 = FF(d2, a, b, c, M_offset_13, 12, T[13]);
    c = FF(c, d2, a, b, M_offset_14, 17, T[14]);
    b = FF(b, c, d2, a, M_offset_15, 22, T[15]);
    a = GG(a, b, c, d2, M_offset_1, 5, T[16]);
    d2 = GG(d2, a, b, c, M_offset_6, 9, T[17]);
    c = GG(c, d2, a, b, M_offset_11, 14, T[18]);
    b = GG(b, c, d2, a, M_offset_0, 20, T[19]);
    a = GG(a, b, c, d2, M_offset_5, 5, T[20]);
    d2 = GG(d2, a, b, c, M_offset_10, 9, T[21]);
    c = GG(c, d2, a, b, M_offset_15, 14, T[22]);
    b = GG(b, c, d2, a, M_offset_4, 20, T[23]);
    a = GG(a, b, c, d2, M_offset_9, 5, T[24]);
    d2 = GG(d2, a, b, c, M_offset_14, 9, T[25]);
    c = GG(c, d2, a, b, M_offset_3, 14, T[26]);
    b = GG(b, c, d2, a, M_offset_8, 20, T[27]);
    a = GG(a, b, c, d2, M_offset_13, 5, T[28]);
    d2 = GG(d2, a, b, c, M_offset_2, 9, T[29]);
    c = GG(c, d2, a, b, M_offset_7, 14, T[30]);
    b = GG(b, c, d2, a, M_offset_12, 20, T[31]);
    a = HH(a, b, c, d2, M_offset_5, 4, T[32]);
    d2 = HH(d2, a, b, c, M_offset_8, 11, T[33]);
    c = HH(c, d2, a, b, M_offset_11, 16, T[34]);
    b = HH(b, c, d2, a, M_offset_14, 23, T[35]);
    a = HH(a, b, c, d2, M_offset_1, 4, T[36]);
    d2 = HH(d2, a, b, c, M_offset_4, 11, T[37]);
    c = HH(c, d2, a, b, M_offset_7, 16, T[38]);
    b = HH(b, c, d2, a, M_offset_10, 23, T[39]);
    a = HH(a, b, c, d2, M_offset_13, 4, T[40]);
    d2 = HH(d2, a, b, c, M_offset_0, 11, T[41]);
    c = HH(c, d2, a, b, M_offset_3, 16, T[42]);
    b = HH(b, c, d2, a, M_offset_6, 23, T[43]);
    a = HH(a, b, c, d2, M_offset_9, 4, T[44]);
    d2 = HH(d2, a, b, c, M_offset_12, 11, T[45]);
    c = HH(c, d2, a, b, M_offset_15, 16, T[46]);
    b = HH(b, c, d2, a, M_offset_2, 23, T[47]);
    a = II(a, b, c, d2, M_offset_0, 6, T[48]);
    d2 = II(d2, a, b, c, M_offset_7, 10, T[49]);
    c = II(c, d2, a, b, M_offset_14, 15, T[50]);
    b = II(b, c, d2, a, M_offset_5, 21, T[51]);
    a = II(a, b, c, d2, M_offset_12, 6, T[52]);
    d2 = II(d2, a, b, c, M_offset_3, 10, T[53]);
    c = II(c, d2, a, b, M_offset_10, 15, T[54]);
    b = II(b, c, d2, a, M_offset_1, 21, T[55]);
    a = II(a, b, c, d2, M_offset_8, 6, T[56]);
    d2 = II(d2, a, b, c, M_offset_15, 10, T[57]);
    c = II(c, d2, a, b, M_offset_6, 15, T[58]);
    b = II(b, c, d2, a, M_offset_13, 21, T[59]);
    a = II(a, b, c, d2, M_offset_4, 6, T[60]);
    d2 = II(d2, a, b, c, M_offset_11, 10, T[61]);
    c = II(c, d2, a, b, M_offset_2, 15, T[62]);
    b = II(b, c, d2, a, M_offset_9, 21, T[63]);
    H[0] = H[0] + a | 0;
    H[1] = H[1] + b | 0;
    H[2] = H[2] + c | 0;
    H[3] = H[3] + d2 | 0;
  }
  /* eslint-ensable no-param-reassign */
  _doFinalize() {
    const data = this._data;
    const dataWords = data.words;
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = data.sigBytes * 8;
    dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    const nBitsTotalH = Math.floor(nBitsTotal / 4294967296);
    const nBitsTotalL = nBitsTotal;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
    dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
    data.sigBytes = (dataWords.length + 1) * 4;
    this._process();
    const hash = this._hash;
    const H = hash.words;
    for (let i = 0; i < 4; i += 1) {
      const H_i = H[i];
      H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
    }
    return hash;
  }
  clone() {
    const clone = super.clone.call(this);
    clone._hash = this._hash.clone();
    return clone;
  }
};
var MD5 = Hasher._createHelper(MD5Algo);
var HmacMD5 = Hasher._createHmacHelper(MD5Algo);

// node_modules/crypto-es/lib/evpkdf.js
var EvpKDFAlgo = class extends Base {
  /**
   * Initializes a newly created key derivation function.
   *
   * @param {Object} cfg (Optional) The configuration options to use for the derivation.
   *
   * @example
   *
   *     const kdf = CryptoJS.algo.EvpKDF.create();
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
   *     const kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
   */
  constructor(cfg) {
    super();
    this.cfg = Object.assign(
      new Base(),
      {
        keySize: 128 / 32,
        hasher: MD5Algo,
        iterations: 1
      },
      cfg
    );
  }
  /**
   * Derives a key from a password.
   *
   * @param {WordArray|string} password The password.
   * @param {WordArray|string} salt A salt.
   *
   * @return {WordArray} The derived key.
   *
   * @example
   *
   *     const key = kdf.compute(password, salt);
   */
  compute(password, salt) {
    let block;
    const { cfg } = this;
    const hasher = cfg.hasher.create();
    const derivedKey = WordArray.create();
    const derivedKeyWords = derivedKey.words;
    const { keySize, iterations } = cfg;
    while (derivedKeyWords.length < keySize) {
      if (block) {
        hasher.update(block);
      }
      block = hasher.update(password).finalize(salt);
      hasher.reset();
      for (let i = 1; i < iterations; i += 1) {
        block = hasher.finalize(block);
        hasher.reset();
      }
      derivedKey.concat(block);
    }
    derivedKey.sigBytes = keySize * 4;
    return derivedKey;
  }
};

// node_modules/crypto-es/lib/cipher-core.js
var Cipher = class extends BufferedBlockAlgorithm {
  /**
   * Initializes a newly created cipher.
   *
   * @param {number} xformMode Either the encryption or decryption transormation mode constant.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.create(
   *       CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray }
   *     );
   */
  constructor(xformMode, key, cfg) {
    super();
    this.cfg = Object.assign(new Base(), cfg);
    this._xformMode = xformMode;
    this._key = key;
    this.reset();
  }
  /**
   * Creates this cipher in encryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
   */
  static createEncryptor(key, cfg) {
    return this.create(this._ENC_XFORM_MODE, key, cfg);
  }
  /**
   * Creates this cipher in decryption mode.
   *
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {Cipher} A cipher instance.
   *
   * @static
   *
   * @example
   *
   *     const cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
   */
  static createDecryptor(key, cfg) {
    return this.create(this._DEC_XFORM_MODE, key, cfg);
  }
  /**
   * Creates shortcut functions to a cipher's object interface.
   *
   * @param {Cipher} cipher The cipher to create a helper for.
   *
   * @return {Object} An object with encrypt and decrypt shortcut functions.
   *
   * @static
   *
   * @example
   *
   *     const AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
   */
  static _createHelper(SubCipher) {
    const selectCipherStrategy = (key) => {
      if (typeof key === "string") {
        return PasswordBasedCipher;
      }
      return SerializableCipher;
    };
    return {
      encrypt(message, key, cfg) {
        return selectCipherStrategy(key).encrypt(SubCipher, message, key, cfg);
      },
      decrypt(ciphertext, key, cfg) {
        return selectCipherStrategy(key).decrypt(SubCipher, ciphertext, key, cfg);
      }
    };
  }
  /**
   * Resets this cipher to its initial state.
   *
   * @example
   *
   *     cipher.reset();
   */
  reset() {
    super.reset.call(this);
    this._doReset();
  }
  /**
   * Adds data to be encrypted or decrypted.
   *
   * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
   *
   * @return {WordArray} The data after processing.
   *
   * @example
   *
   *     const encrypted = cipher.process('data');
   *     const encrypted = cipher.process(wordArray);
   */
  process(dataUpdate) {
    this._append(dataUpdate);
    return this._process();
  }
  /**
   * Finalizes the encryption or decryption process.
   * Note that the finalize operation is effectively a destructive, read-once operation.
   *
   * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
   *
   * @return {WordArray} The data after final processing.
   *
   * @example
   *
   *     const encrypted = cipher.finalize();
   *     const encrypted = cipher.finalize('data');
   *     const encrypted = cipher.finalize(wordArray);
   */
  finalize(dataUpdate) {
    if (dataUpdate) {
      this._append(dataUpdate);
    }
    const finalProcessedData = this._doFinalize();
    return finalProcessedData;
  }
};
Cipher._ENC_XFORM_MODE = 1;
Cipher._DEC_XFORM_MODE = 2;
Cipher.keySize = 128 / 32;
Cipher.ivSize = 128 / 32;
var BlockCipherMode = class extends Base {
  /**
   * Initializes a newly created mode.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
   */
  constructor(cipher, iv) {
    super();
    this._cipher = cipher;
    this._iv = iv;
  }
  /**
   * Creates this mode for encryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
   */
  static createEncryptor(cipher, iv) {
    return this.Encryptor.create(cipher, iv);
  }
  /**
   * Creates this mode for decryption.
   *
   * @param {Cipher} cipher A block cipher instance.
   * @param {Array} iv The IV words.
   *
   * @static
   *
   * @example
   *
   *     const mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
   */
  static createDecryptor(cipher, iv) {
    return this.Decryptor.create(cipher, iv);
  }
};
function xorBlock(words, offset, blockSize) {
  const _words = words;
  let block;
  const iv = this._iv;
  if (iv) {
    block = iv;
    this._iv = void 0;
  } else {
    block = this._prevBlock;
  }
  for (let i = 0; i < blockSize; i += 1) {
    _words[offset + i] ^= block[i];
  }
}
var CBC = class extends BlockCipherMode {
};
CBC.Encryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    xorBlock.call(this, words, offset, blockSize);
    cipher.encryptBlock(words, offset);
    this._prevBlock = words.slice(offset, offset + blockSize);
  }
};
CBC.Decryptor = class extends CBC {
  /**
   * Processes the data block at offset.
   *
   * @param {Array} words The data words to operate on.
   * @param {number} offset The offset where the block starts.
   *
   * @example
   *
   *     mode.processBlock(data.words, offset);
   */
  processBlock(words, offset) {
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const thisBlock = words.slice(offset, offset + blockSize);
    cipher.decryptBlock(words, offset);
    xorBlock.call(this, words, offset, blockSize);
    this._prevBlock = thisBlock;
  }
};
var Pkcs7 = {
  /**
   * Pads data using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to pad.
   * @param {number} blockSize The multiple that the data should be padded to.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
   */
  pad(data, blockSize) {
    const blockSizeBytes = blockSize * 4;
    const nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
    const paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
    const paddingWords = [];
    for (let i = 0; i < nPaddingBytes; i += 4) {
      paddingWords.push(paddingWord);
    }
    const padding = WordArray.create(paddingWords, nPaddingBytes);
    data.concat(padding);
  },
  /**
   * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
   *
   * @param {WordArray} data The data to unpad.
   *
   * @static
   *
   * @example
   *
   *     CryptoJS.pad.Pkcs7.unpad(wordArray);
   */
  unpad(data) {
    const _data = data;
    const nPaddingBytes = _data.words[_data.sigBytes - 1 >>> 2] & 255;
    _data.sigBytes -= nPaddingBytes;
  }
};
var BlockCipher = class extends Cipher {
  constructor(xformMode, key, cfg) {
    super(xformMode, key, Object.assign(
      {
        mode: CBC,
        padding: Pkcs7
      },
      cfg
    ));
    this.blockSize = 128 / 32;
  }
  reset() {
    let modeCreator;
    super.reset.call(this);
    const { cfg } = this;
    const { iv, mode } = cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      modeCreator = mode.createEncryptor;
    } else {
      modeCreator = mode.createDecryptor;
      this._minBufferSize = 1;
    }
    this._mode = modeCreator.call(mode, this, iv && iv.words);
    this._mode.__creator = modeCreator;
  }
  _doProcessBlock(words, offset) {
    this._mode.processBlock(words, offset);
  }
  _doFinalize() {
    let finalProcessedBlocks;
    const { padding } = this.cfg;
    if (this._xformMode === this.constructor._ENC_XFORM_MODE) {
      padding.pad(this._data, this.blockSize);
      finalProcessedBlocks = this._process(true);
    } else {
      finalProcessedBlocks = this._process(true);
      padding.unpad(finalProcessedBlocks);
    }
    return finalProcessedBlocks;
  }
};
var CipherParams = class extends Base {
  /**
   * Initializes a newly created cipher params object.
   *
   * @param {Object} cipherParams An object with any of the possible cipher parameters.
   *
   * @example
   *
   *     var cipherParams = CryptoJS.lib.CipherParams.create({
   *         ciphertext: ciphertextWordArray,
   *         key: keyWordArray,
   *         iv: ivWordArray,
   *         salt: saltWordArray,
   *         algorithm: CryptoJS.algo.AES,
   *         mode: CryptoJS.mode.CBC,
   *         padding: CryptoJS.pad.PKCS7,
   *         blockSize: 4,
   *         formatter: CryptoJS.format.OpenSSL
   *     });
   */
  constructor(cipherParams) {
    super();
    this.mixIn(cipherParams);
  }
  /**
   * Converts this cipher params object to a string.
   *
   * @param {Format} formatter (Optional) The formatting strategy to use.
   *
   * @return {string} The stringified cipher params.
   *
   * @throws Error If neither the formatter nor the default formatter is set.
   *
   * @example
   *
   *     var string = cipherParams + '';
   *     var string = cipherParams.toString();
   *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
   */
  toString(formatter) {
    return (formatter || this.formatter).stringify(this);
  }
};
var OpenSSLFormatter = {
  /**
   * Converts a cipher params object to an OpenSSL-compatible string.
   *
   * @param {CipherParams} cipherParams The cipher params object.
   *
   * @return {string} The OpenSSL-compatible string.
   *
   * @static
   *
   * @example
   *
   *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
   */
  stringify(cipherParams) {
    let wordArray;
    const { ciphertext, salt } = cipherParams;
    if (salt) {
      wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
    } else {
      wordArray = ciphertext;
    }
    return wordArray.toString(Base64);
  },
  /**
   * Converts an OpenSSL-compatible string to a cipher params object.
   *
   * @param {string} openSSLStr The OpenSSL-compatible string.
   *
   * @return {CipherParams} The cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
   */
  parse(openSSLStr) {
    let salt;
    const ciphertext = Base64.parse(openSSLStr);
    const ciphertextWords = ciphertext.words;
    if (ciphertextWords[0] === 1398893684 && ciphertextWords[1] === 1701076831) {
      salt = WordArray.create(ciphertextWords.slice(2, 4));
      ciphertextWords.splice(0, 4);
      ciphertext.sigBytes -= 16;
    }
    return CipherParams.create({ ciphertext, salt });
  }
};
var SerializableCipher = class extends Base {
  /**
   * Encrypts a message.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key);
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       .encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, key, cfg) {
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    const encryptor = cipher.createEncryptor(key, _cfg);
    const ciphertext = encryptor.finalize(message);
    const cipherCfg = encryptor.cfg;
    return CipherParams.create({
      ciphertext,
      key,
      iv: cipherCfg.iv,
      algorithm: cipher,
      mode: cipherCfg.mode,
      padding: cipherCfg.padding,
      blockSize: encryptor.blockSize,
      formatter: _cfg.format
    });
  }
  /**
   * Decrypts serialized ciphertext.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {WordArray} key The key.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.SerializableCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, key,
   *         { iv: iv, format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, key, cfg) {
    let _ciphertext = ciphertext;
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    _ciphertext = this._parse(_ciphertext, _cfg.format);
    const plaintext = cipher.createDecryptor(key, _cfg).finalize(_ciphertext.ciphertext);
    return plaintext;
  }
  /**
   * Converts serialized ciphertext to CipherParams,
   * else assumed CipherParams already and returns ciphertext unchanged.
   *
   * @param {CipherParams|string} ciphertext The ciphertext.
   * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
   *
   * @return {CipherParams} The unserialized ciphertext.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.SerializableCipher
   *       ._parse(ciphertextStringOrParams, format);
   */
  static _parse(ciphertext, format) {
    if (typeof ciphertext === "string") {
      return format.parse(ciphertext, this);
    }
    return ciphertext;
  }
};
SerializableCipher.cfg = Object.assign(
  new Base(),
  { format: OpenSSLFormatter }
);
var OpenSSLKdf = {
  /**
   * Derives a key and IV from a password.
   *
   * @param {string} password The password to derive from.
   * @param {number} keySize The size in words of the key to generate.
   * @param {number} ivSize The size in words of the IV to generate.
   * @param {WordArray|string} salt
   *     (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
   *
   * @return {CipherParams} A cipher params object with the key, IV, and salt.
   *
   * @static
   *
   * @example
   *
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
   *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
   */
  execute(password, keySize, ivSize, salt) {
    let _salt = salt;
    if (!_salt) {
      _salt = WordArray.random(64 / 8);
    }
    const key = EvpKDFAlgo.create({ keySize: keySize + ivSize }).compute(password, _salt);
    const iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
    key.sigBytes = keySize * 4;
    return CipherParams.create({ key, iv, salt: _salt });
  }
};
var PasswordBasedCipher = class extends SerializableCipher {
  /**
   * Encrypts a message using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {WordArray|string} message The message to encrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {CipherParams} A cipher params object.
   *
   * @static
   *
   * @example
   *
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password');
   *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher
   *       .encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
   */
  static encrypt(cipher, message, password, cfg) {
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
    _cfg.iv = derivedParams.iv;
    const ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, _cfg);
    ciphertext.mixIn(derivedParams);
    return ciphertext;
  }
  /**
   * Decrypts serialized ciphertext using a password.
   *
   * @param {Cipher} cipher The cipher algorithm to use.
   * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
   * @param {string} password The password.
   * @param {Object} cfg (Optional) The configuration options to use for this operation.
   *
   * @return {WordArray} The plaintext.
   *
   * @static
   *
   * @example
   *
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   *     var plaintext = CryptoJS.lib.PasswordBasedCipher
   *       .decrypt(CryptoJS.algo.AES, ciphertextParams, 'password',
   *         { format: CryptoJS.format.OpenSSL });
   */
  static decrypt(cipher, ciphertext, password, cfg) {
    let _ciphertext = ciphertext;
    const _cfg = Object.assign(new Base(), this.cfg, cfg);
    _ciphertext = this._parse(_ciphertext, _cfg.format);
    const derivedParams = _cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, _ciphertext.salt);
    _cfg.iv = derivedParams.iv;
    const plaintext = SerializableCipher.decrypt.call(this, cipher, _ciphertext, derivedParams.key, _cfg);
    return plaintext;
  }
};
PasswordBasedCipher.cfg = Object.assign(SerializableCipher.cfg, { kdf: OpenSSLKdf });

// node_modules/crypto-es/lib/aes.js
var _SBOX = [];
var INV_SBOX = [];
var _SUB_MIX_0 = [];
var _SUB_MIX_1 = [];
var _SUB_MIX_2 = [];
var _SUB_MIX_3 = [];
var INV_SUB_MIX_0 = [];
var INV_SUB_MIX_1 = [];
var INV_SUB_MIX_2 = [];
var INV_SUB_MIX_3 = [];
var d = [];
for (let i = 0; i < 256; i += 1) {
  if (i < 128) {
    d[i] = i << 1;
  } else {
    d[i] = i << 1 ^ 283;
  }
}
var x = 0;
var xi = 0;
for (let i = 0; i < 256; i += 1) {
  let sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
  sx = sx >>> 8 ^ sx & 255 ^ 99;
  _SBOX[x] = sx;
  INV_SBOX[sx] = x;
  const x2 = d[x];
  const x4 = d[x2];
  const x8 = d[x4];
  let t = d[sx] * 257 ^ sx * 16843008;
  _SUB_MIX_0[x] = t << 24 | t >>> 8;
  _SUB_MIX_1[x] = t << 16 | t >>> 16;
  _SUB_MIX_2[x] = t << 8 | t >>> 24;
  _SUB_MIX_3[x] = t;
  t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
  INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
  INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
  INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
  INV_SUB_MIX_3[sx] = t;
  if (!x) {
    xi = 1;
    x = xi;
  } else {
    x = x2 ^ d[d[d[x8 ^ x2]]];
    xi ^= d[d[xi]];
  }
}
var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var AESAlgo = class extends BlockCipher {
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key) {
      return;
    }
    this._keyPriorReset = this._key;
    const key = this._keyPriorReset;
    const keyWords = key.words;
    const keySize = key.sigBytes / 4;
    this._nRounds = keySize + 6;
    const nRounds = this._nRounds;
    const ksRows = (nRounds + 1) * 4;
    this._keySchedule = [];
    const keySchedule = this._keySchedule;
    for (let ksRow = 0; ksRow < ksRows; ksRow += 1) {
      if (ksRow < keySize) {
        keySchedule[ksRow] = keyWords[ksRow];
      } else {
        t = keySchedule[ksRow - 1];
        if (!(ksRow % keySize)) {
          t = t << 8 | t >>> 24;
          t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 255] << 16 | _SBOX[t >>> 8 & 255] << 8 | _SBOX[t & 255];
          t ^= RCON[ksRow / keySize | 0] << 24;
        } else if (keySize > 6 && ksRow % keySize === 4) {
          t = _SBOX[t >>> 24] << 24 | _SBOX[t >>> 16 & 255] << 16 | _SBOX[t >>> 8 & 255] << 8 | _SBOX[t & 255];
        }
        keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
      }
    }
    this._invKeySchedule = [];
    const invKeySchedule = this._invKeySchedule;
    for (let invKsRow = 0; invKsRow < ksRows; invKsRow += 1) {
      const ksRow = ksRows - invKsRow;
      if (invKsRow % 4) {
        t = keySchedule[ksRow];
      } else {
        t = keySchedule[ksRow - 4];
      }
      if (invKsRow < 4 || ksRow <= 4) {
        invKeySchedule[invKsRow] = t;
      } else {
        invKeySchedule[invKsRow] = INV_SUB_MIX_0[_SBOX[t >>> 24]] ^ INV_SUB_MIX_1[_SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[_SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[_SBOX[t & 255]];
      }
    }
  }
  encryptBlock(M, offset) {
    this._doCryptBlock(
      M,
      offset,
      this._keySchedule,
      _SUB_MIX_0,
      _SUB_MIX_1,
      _SUB_MIX_2,
      _SUB_MIX_3,
      _SBOX
    );
  }
  decryptBlock(M, offset) {
    const _M = M;
    let t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
    this._doCryptBlock(
      _M,
      offset,
      this._invKeySchedule,
      INV_SUB_MIX_0,
      INV_SUB_MIX_1,
      INV_SUB_MIX_2,
      INV_SUB_MIX_3,
      INV_SBOX
    );
    t = _M[offset + 1];
    _M[offset + 1] = _M[offset + 3];
    _M[offset + 3] = t;
  }
  _doCryptBlock(M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
    const _M = M;
    const nRounds = this._nRounds;
    let s0 = _M[offset] ^ keySchedule[0];
    let s1 = _M[offset + 1] ^ keySchedule[1];
    let s2 = _M[offset + 2] ^ keySchedule[2];
    let s3 = _M[offset + 3] ^ keySchedule[3];
    let ksRow = 4;
    for (let round = 1; round < nRounds; round += 1) {
      const t02 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[s1 >>> 16 & 255] ^ SUB_MIX_2[s2 >>> 8 & 255] ^ SUB_MIX_3[s3 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t12 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[s2 >>> 16 & 255] ^ SUB_MIX_2[s3 >>> 8 & 255] ^ SUB_MIX_3[s0 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t22 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[s3 >>> 16 & 255] ^ SUB_MIX_2[s0 >>> 8 & 255] ^ SUB_MIX_3[s1 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      const t32 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[s0 >>> 16 & 255] ^ SUB_MIX_2[s1 >>> 8 & 255] ^ SUB_MIX_3[s2 & 255] ^ keySchedule[ksRow];
      ksRow += 1;
      s0 = t02;
      s1 = t12;
      s2 = t22;
      s3 = t32;
    }
    const t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    const t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRow];
    ksRow += 1;
    _M[offset] = t0;
    _M[offset + 1] = t1;
    _M[offset + 2] = t2;
    _M[offset + 3] = t3;
  }
};
AESAlgo.keySize = 256 / 32;
var AES = BlockCipher._createHelper(AESAlgo);

// node_modules/crypto-es/lib/mode-ctr.js
var CTR = class extends BlockCipherMode {
};
CTR.Encryptor = class extends CTR {
  processBlock(words, offset) {
    const _words = words;
    const cipher = this._cipher;
    const { blockSize } = cipher;
    const iv = this._iv;
    let counter = this._counter;
    if (iv) {
      this._counter = iv.slice(0);
      counter = this._counter;
      this._iv = void 0;
    }
    const keystream = counter.slice(0);
    cipher.encryptBlock(keystream, 0);
    counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
    for (let i = 0; i < blockSize; i += 1) {
      _words[offset + i] ^= keystream[i];
    }
  }
};
CTR.Decryptor = CTR.Encryptor;

// node_modules/crypto-es/lib/pad-nopadding.js
var NoPadding = {
  pad() {
  },
  unpad() {
  }
};

// node_modules/xgplayer-transmuxer/es/mp4/crypto/crypto.js
var Crypto = {
  decryptWordArray: function decryptWordArray(raw, key, iv) {
    var realKey = Hex.parse(key);
    var realIV = Hex.parse(formatIV(iv));
    var message = WordArray.create(new Uint8Array(raw));
    var decryptWord = AES.decrypt(CipherParams.create({
      ciphertext: message
    }), realKey, {
      iv: realIV,
      mode: CTR,
      padding: NoPadding
    });
    return Crypto.wordArrayToUint8Array(decryptWord);
  },
  wordArrayToUint8Array: function wordArrayToUint8Array(wordArray) {
    var l = wordArray.sigBytes;
    var words = wordArray.words;
    var result = new Uint8Array(l);
    var i = 0;
    var j = 0;
    while (true) {
      if (i === l) {
        break;
      }
      var w = words[j++];
      result[i++] = (w & 4278190080) >>> 24;
      if (i === l) {
        break;
      }
      result[i++] = (w & 16711680) >>> 16;
      if (i === l) {
        break;
      }
      result[i++] = (w & 65280) >>> 8;
      if (i === l) {
        break;
      }
      result[i++] = w & 255;
    }
    return result;
  },
  decoderAESCTRData: function decoderAESCTRData(videoTrack, audioTrack, customDescryptHandler) {
    if (videoTrack.videoSenc) {
      var key = videoTrack.kidValue;
      var senc = videoTrack.videoSenc;
      videoTrack.samples.forEach(function(item, index) {
        var sencBox = senc[index];
        var encodeWord = item.data;
        var encodeBuffers = [];
        var decodeBuffers = [];
        var iv = sencBox.InitializationVector;
        if (sencBox.subsamples && sencBox.subsamples.length) {
          sencBox.subsamples.forEach(function(value) {
            var len2 = value.BytesOfClearData + value.BytesOfProtectedData;
            var sampleData = encodeWord.slice(0, len2);
            encodeBuffers.push(sampleData.slice(0, value.BytesOfClearData));
            decodeBuffers.push(sampleData.slice(value.BytesOfClearData));
            encodeWord = encodeWord.slice(len2);
          });
        } else {
          var len = item.size;
          encodeBuffers.push(encodeWord.slice(0, 0));
          decodeBuffers.push(encodeWord.slice(0, len));
          encodeWord = encodeWord.slice(len);
        }
        var tempBuffer = new Buffer2();
        tempBuffer.write.apply(tempBuffer, decodeBuffers);
        var decrypted = customDescryptHandler ? customDescryptHandler(tempBuffer.buffer, key, iv) : Crypto.decryptWordArray(tempBuffer.buffer, key, iv);
        var buffer = new Buffer2();
        encodeBuffers.forEach(function(clearDataBuf, i) {
          var protectedDataLen = decodeBuffers[i].length;
          var decodeProtectedData = decrypted.slice(0, protectedDataLen);
          buffer.write(clearDataBuf);
          buffer.write(decodeProtectedData);
          decrypted = decrypted.slice(protectedDataLen);
        });
        videoTrack.samples[index].data = buffer.buffer;
      });
    }
    if (audioTrack.audioSenc) {
      var _key = audioTrack.kidValue;
      var _senc = audioTrack.audioSenc;
      audioTrack.samples.forEach(function(item, index) {
        var sencBox = _senc[index];
        var dec = customDescryptHandler ? customDescryptHandler(item.data, _key, sencBox.InitializationVector) : Crypto.decryptWordArray(item.data, _key, sencBox.InitializationVector);
        audioTrack.samples[index].data = dec;
      });
    }
  }
};

// node_modules/xgplayer-transmuxer/es/mp4/mp4-demuxer.js
var NEW_ARRAY_MAX_CNT = 20;
var MP4Demuxer = function() {
  function MP4Demuxer2(videoSegmnents, audioSegmnents, metadataTrack, options) {
    var _this = this;
    _classCallCheck2(this, MP4Demuxer2);
    _defineProperty2(this, "_videoSamples", []);
    _defineProperty2(this, "_audioSamples", []);
    _defineProperty2(this, "_lastRemainBuffer", []);
    _defineProperty2(this, "_lastRemainBufferStartPos", 0);
    this.videoTrack = new VideoTrack();
    this.audioTrack = new AudioTrack();
    this.metadataTrack = metadataTrack || new MetadataTrack();
    this.log = new Logger3("MP4Demuxer", options && options.openLog ? !options.openLog : true);
    videoSegmnents && videoSegmnents.forEach(function(item) {
      var _this$_videoSamples;
      (_this$_videoSamples = _this._videoSamples).push.apply(_this$_videoSamples, _toConsumableArray(item.frames));
    });
    audioSegmnents && audioSegmnents.forEach(function(item) {
      var _this$_audioSamples;
      (_this$_audioSamples = _this._audioSamples).push.apply(_this$_audioSamples, _toConsumableArray(item.frames));
    });
  }
  _createClass2(MP4Demuxer2, [{
    key: "parseSamples",
    value: function parseSamples(moov) {
      if (!moov) {
        throw new Error("moov is required");
      }
      if (!this.videoTrack.codec && !this.audioTrack.codec) {
        MP4Parser.moovToTrack(moov, this.videoTrack, this.audioTrack);
        this.videoSenc = this.videoTrack.videoSenc;
        this.audioSenc = this.audioTrack.audioSenc;
      }
      if (!this._audioSamples.length && !this._videoSamples.length) {
        var ret = MP4Parser.moovToSamples(moov);
        if (!ret)
          throw new Error("cannot parse samples from moov box");
        this._videoSamples = ret.videoSamples || [];
        this._audioSamples = ret.audioSamples || [];
      }
    }
  }, {
    key: "demux",
    value: function demux(data, dataStart, videoIndexRange, audioIndexRange, moov) {
      this.parseSamples(moov);
      var videoTrack = this.videoTrack;
      var audioTrack = this.audioTrack;
      videoTrack.samples = [];
      audioTrack.samples = [];
      var sample;
      var sampleData;
      var startByte;
      if (videoIndexRange) {
        var frame;
        var nalSize = 0;
        for (var i = videoIndexRange[0], l = videoIndexRange[1]; i <= l; i++) {
          sample = this._videoSamples[i];
          if (!sample) {
            throw new Error("cannot found video frame #".concat(i));
          }
          startByte = sample.offset - dataStart;
          sampleData = data.subarray(startByte, startByte + sample.size);
          frame = new VideoSample(sample.pts || sample.dts, sample.dts);
          frame.duration = sample.duration;
          frame.gopId = sample.gopId;
          if (sample.keyframe)
            frame.setToKeyframe();
          var start = 0;
          var len = sampleData.length - 1;
          while (start < len) {
            nalSize = readBig32(sampleData, start);
            start += 4;
            frame.units.push(sampleData.subarray(start, start + nalSize));
            start += nalSize;
          }
          videoTrack.samples.push(frame);
        }
        videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
      }
      if (audioIndexRange) {
        for (var _i = audioIndexRange[0], _l = audioIndexRange[1]; _i <= _l; _i++) {
          sample = this._audioSamples[_i];
          if (!sample) {
            throw new Error("cannot found video frame #".concat(_i));
          }
          startByte = sample.offset - dataStart;
          sampleData = data.subarray(startByte, startByte + sample.size);
          audioTrack.samples.push(new AudioSample(sample.dts, sampleData, sample.duration));
        }
        audioTrack.baseMediaDecodeTime = audioTrack.samples[0].dts;
      }
      return {
        videoTrack,
        audioTrack,
        metadataTrack: this.metadataTrack
      };
    }
  }, {
    key: "demuxPart",
    value: function demuxPart(data, dataStart, videoIndexRange, audioIndexRange, moov, useEME, kidValue, customDescryptHandler) {
      this.parseSamples(moov);
      this.videoTrack.useEME = useEME;
      this.audioTrack.useEME = useEME;
      if (this._lastRemainBuffer && this._lastRemainBuffer.byteLength > 0 && dataStart > this._lastRemainBufferStartPos && dataStart <= this._lastRemainBufferStartPos + this._lastRemainBuffer.byteLength) {
        var tryCnt = 0;
        while (tryCnt < NEW_ARRAY_MAX_CNT) {
          try {
            var buffer = this._lastRemainBuffer.subarray(0, dataStart - this._lastRemainBufferStartPos);
            var temp = new Uint8Array(data.byteLength + buffer.byteLength);
            temp.set(buffer, 0);
            temp.set(new Uint8Array(data), buffer.byteLength);
            data = temp;
            dataStart -= buffer.byteLength;
            this._lastRemainBuffer = null;
            this._lastRemainBufferStartPos = 0;
            break;
          } catch (e) {
            if (tryCnt < NEW_ARRAY_MAX_CNT) {
              tryCnt++;
            } else {
              throw new Error("new Uint8Array error:," + e.errorMessage);
            }
          }
        }
      }
      var videoTrack = this.videoTrack;
      var audioTrack = this.audioTrack;
      videoTrack.samples = [];
      audioTrack.samples = [];
      videoTrack.videoSenc = null;
      audioTrack.audioSenc = null;
      var sample;
      var sampleData;
      var startByte;
      var videoEndByte = 0;
      var audioEndByte = 0;
      if (this._videoSamples.length > 0 && videoIndexRange.length > 0) {
        var frame;
        var end = data.byteLength + dataStart;
        for (var i = videoIndexRange[0]; i <= videoIndexRange[1]; i++) {
          sample = this._videoSamples[i];
          if (!sample) {
            throw new Error("cannot found video frame #".concat(i));
          }
          if (sample.offset >= dataStart && sample.offset + sample.size <= end) {
            startByte = sample.offset - dataStart;
            videoEndByte = startByte + sample.size;
            sampleData = data.subarray(startByte, videoEndByte);
            frame = new VideoSample(sample.pts || sample.dts, sample.dts);
            frame.duration = sample.duration;
            frame.gopId = sample.gopId;
            frame.sampleOffset = sample.index;
            if (sample.keyframe)
              frame.setToKeyframe();
            frame.data = sampleData;
            frame.size = sample.size;
            videoTrack.samples.push(frame);
          }
        }
        if (videoTrack.samples.length > 0) {
          videoTrack.gopId = videoTrack.samples[0].gopId;
          videoTrack.baseMediaDecodeTime = videoTrack.samples[0].dts;
          videoTrack.startPts = videoTrack.samples[0].pts / videoTrack.timescale;
          videoTrack.endPts = videoTrack.samples[videoTrack.samples.length - 1].pts / videoTrack.timescale;
          if (this.videoSenc) {
            videoTrack.videoSenc = this.videoSenc.slice(videoTrack.samples[0].sampleOffset, videoTrack.samples[0].sampleOffset + videoTrack.samples.length);
            videoTrack.kidValue = kidValue;
          }
        }
      }
      if (this._audioSamples.length > 0 && audioIndexRange.length > 0) {
        for (var _i2 = audioIndexRange[0]; _i2 <= audioIndexRange[1]; _i2++) {
          sample = this._audioSamples[_i2];
          if (!sample) {
            throw new Error("cannot found video frame #".concat(_i2));
          }
          if (sample.offset >= dataStart && sample.offset + sample.size <= data.byteLength + dataStart) {
            startByte = sample.offset - dataStart;
            audioEndByte = startByte + sample.size;
            sampleData = data.subarray(startByte, audioEndByte);
            audioTrack.samples.push(new AudioSample(sample.dts, sampleData, sample.duration, sample.index));
          }
        }
        if (audioTrack.samples.length > 0) {
          audioTrack.gopId = audioTrack.samples[0].gopId || videoTrack.gopId;
          audioTrack.baseMediaDecodeTime = audioTrack.samples[0].dts;
          audioTrack.startPts = audioTrack.samples[0].pts / audioTrack.timescale;
          audioTrack.endPts = audioTrack.samples[audioTrack.samples.length - 1].pts / audioTrack.timescale;
          if (this.audioSenc) {
            audioTrack.audioSenc = this.audioSenc.slice(audioTrack.samples[0].sampleOffset, audioTrack.samples[0].sampleOffset + audioTrack.samples.length);
            audioTrack.kidValue = kidValue;
          }
        }
      }
      this.decoderData(videoTrack, audioTrack, customDescryptHandler);
      var nalSize = 0;
      for (var _i3 = 0; _i3 < videoTrack.samples.length; _i3++) {
        var start = 0;
        var _sampleData = videoTrack.samples[_i3].data;
        var len = _sampleData.length - 1;
        while (start < len) {
          nalSize = readBig32(_sampleData, start);
          start += 4;
          videoTrack.samples[_i3].units.push(_sampleData.subarray(start, start + nalSize));
          start += nalSize;
        }
      }
      this._lastRemainBuffer = data.subarray(Math.max(videoEndByte, audioEndByte));
      if (this._lastRemainBuffer.byteLength > 0) {
        this._lastRemainBufferStartPos = dataStart + data.byteLength - this._lastRemainBuffer.byteLength;
      } else {
        this._lastRemainBufferStartPos = 0;
      }
      return {
        videoTrack,
        audioTrack,
        metadataTrack: this.metadataTrack
      };
    }
  }, {
    key: "reset",
    value: function reset() {
      this._videoSamples = [];
      this._audioSamples = [];
      this._lastRemainBuffer = null;
      this._lastRemainBufferStartPos = 0;
      this.videoTrack.reset();
      this.audioTrack.reset();
      this.metadataTrack.reset();
    }
  }, {
    key: "decoderData",
    value: function decoderData(videoTrack, audioTrack, customDescryptHandler) {
      if (videoTrack.useEME || audioTrack.useEME)
        return;
      Crypto.decoderAESCTRData(videoTrack, audioTrack, customDescryptHandler);
    }
  }], [{
    key: "probe",
    value: function probe(data) {
      return MP4Parser.probe(data);
    }
  }]);
  return MP4Demuxer2;
}();

// node_modules/xgplayer-transmuxer/es/mp4/mp4-remuxer.js
var MP4Remuxer = function() {
  function MP4Remuxer2(videoTrack, audioTrack) {
    _classCallCheck2(this, MP4Remuxer2);
    this.videoTrack = videoTrack;
    this.audioTrack = audioTrack;
  }
  _createClass2(MP4Remuxer2, [{
    key: "remux",
    value: function remux(videoTrack, audioTrack) {
      this.videoTrack = videoTrack || this.videoTrack;
      this.audioTrack = audioTrack || this.audioTrack;
      var hasVideo = (videoTrack === null || videoTrack === void 0 ? void 0 : videoTrack.exist()) && (videoTrack === null || videoTrack === void 0 ? void 0 : videoTrack.hasSample());
      var hasAudio = (audioTrack === null || audioTrack === void 0 ? void 0 : audioTrack.exist()) && (audioTrack === null || audioTrack === void 0 ? void 0 : audioTrack.hasSample());
      var videoSegment;
      var audioSegment;
      if (hasVideo && hasAudio) {
        videoSegment = this._remuxMix(videoTrack, audioTrack);
      } else if (hasVideo) {
        videoSegment = this._remuxTrack(videoTrack);
      } else if (hasAudio) {
        audioSegment = this._remuxTrack(audioTrack);
      }
      if (videoTrack) {
        videoTrack.samples = [];
      }
      if (audioTrack) {
        audioTrack.samples = [];
      }
      return {
        videoSegment,
        audioSegment
      };
    }
  }, {
    key: "_remuxMix",
    value: function _remuxMix(videoTrack, audioTrack) {
      var ftyp = MP4.ftyp([videoTrack, audioTrack]);
      var _this$_remuxData = this._remuxData(videoTrack, ftyp.byteLength + 8), video = _this$_remuxData.mdatData, chunkOffset = _this$_remuxData.chunkOffset;
      var _this$_remuxData2 = this._remuxData(audioTrack, chunkOffset), audio = _this$_remuxData2.mdatData;
      var mdat = MP4.mdat(concatUint8Array2(video, audio));
      var moov = MP4.moovMP4([videoTrack, audioTrack]);
      videoTrack.ext = void 0;
      audioTrack.ext = void 0;
      videoTrack.samples = [];
      audioTrack.samples = [];
      return concatUint8Array2(ftyp, mdat, moov);
    }
  }, {
    key: "_remuxTrack",
    value: function _remuxTrack(track) {
      var ftyp = MP4.ftyp([track]);
      var _this$_remuxData3 = this._remuxData(track, ftyp.byteLength + 8), mdatData = _this$_remuxData3.mdatData;
      var mdat = MP4.mdat(mdatData);
      var moov = MP4.moovMP4([track]);
      track.ext = void 0;
      track.samples = [];
      return concatUint8Array2(ftyp, mdat, moov);
    }
  }, {
    key: "_remuxData",
    value: function _remuxData(track, chunkOffset) {
      var _this = this;
      var isVideo = track.type === TrackType.VIDEO;
      var samples = track.samples;
      var mdatSize = 0;
      if (isVideo) {
        samples.forEach(function(s) {
          mdatSize += s.units.reduce(function(t, c) {
            return t + c.byteLength;
          }, 0);
          mdatSize += s.units.length * 4;
        });
      } else {
        mdatSize = samples.reduce(function(t, c) {
          return t + c.size;
        }, 0);
      }
      var mdatData = new Uint8Array(mdatSize);
      var mdatView = new DataView(mdatData.buffer);
      var ext = track.ext = {
        stts: [],
        stsc: [],
        stsz: [],
        stco: [],
        stss: [],
        ctts: []
      };
      var samplesPerChunk = 1;
      var dataOffset = 0;
      var totalDuration = 0;
      var sample;
      var sampleLen = samples.length;
      var _loop = function _loop2() {
        sample = samples[i];
        totalDuration += sample.duration;
        var sampleSize = isVideo ? 0 : sample.size;
        if (isVideo) {
          sample.units.forEach(function(u) {
            mdatView.setUint32(dataOffset, u.byteLength);
            dataOffset += 4;
            mdatData.set(u, dataOffset);
            dataOffset += u.byteLength;
            sampleSize += 4 + u.byteLength;
          });
        } else {
          mdatData.set(sample.data, dataOffset);
          dataOffset += sampleSize;
        }
        sample.size = sampleSize;
        ext.stsz.push(sampleSize);
        if (isVideo)
          _this._fillCttsSamples(ext.ctts, sample.cts);
        _this._fillSttsSamples(ext.stts, sample, samples[i + 1]);
        _this._fillStcoSamples(ext.stco, i, samplesPerChunk, chunkOffset);
        chunkOffset += sampleSize;
        if (isVideo && sample.keyframe) {
          ext.stss.push(i + 1);
        }
      };
      for (var i = 0; i < sampleLen; i++) {
        _loop();
      }
      track.duration = totalDuration;
      this._fillStscSamples(ext.stsc, sampleLen, samplesPerChunk);
      return {
        mdatData,
        chunkOffset
      };
    }
  }, {
    key: "_fillSttsSamples",
    value: function _fillSttsSamples(sttsSamples, cur, next) {
      var lastSample = sttsSamples[sttsSamples.length - 1];
      if (next) {
        if (!lastSample || lastSample.value !== cur.duration) {
          sttsSamples.push({
            value: cur.duration,
            count: 1
          });
        } else {
          lastSample.count++;
        }
        return;
      }
      if (lastSample) {
        lastSample.count++;
      } else {
        sttsSamples.push({
          value: 40,
          count: 1
        });
      }
    }
  }, {
    key: "_fillCttsSamples",
    value: function _fillCttsSamples(cttsSamples, cts) {
      var lastSample = cttsSamples[cttsSamples.length - 1];
      if (!lastSample || lastSample.value !== cts) {
        cttsSamples.push({
          value: cts,
          count: 1
        });
      } else {
        lastSample.count++;
      }
    }
  }, {
    key: "_fillStcoSamples",
    value: function _fillStcoSamples(stcoSamples, index, samplePerChunk, chunkOffset) {
      if (!(index % samplePerChunk)) {
        stcoSamples.push(chunkOffset);
      }
    }
  }, {
    key: "_fillStscSamples",
    value: function _fillStscSamples(samples, sampleCount, samplesPerChunk) {
      if (sampleCount <= samplesPerChunk) {
        samples.push({
          firstChunk: 1,
          samplesPerChunk: sampleCount,
          sampleDescIndex: 1
        });
      } else {
        var len = Math.floor(sampleCount / samplesPerChunk);
        var remaining = sampleCount % samplesPerChunk;
        samples.push({
          firstChunk: 1,
          samplesPerChunk,
          sampleDescIndex: 1
        });
        if (remaining) {
          samples.push({
            firstChunk: len + 1,
            samplesPerChunk: remaining,
            sampleDescIndex: 1
          });
        }
      }
    }
  }]);
  return MP4Remuxer2;
}();

export {
  Buffer,
  ERR,
  ERR_CODE,
  StreamingError,
  Logger,
  MSE,
  EVENT,
  isMediaPlaying,
  getVideoPlaybackQuality,
  concatUint8Array,
  NetLoader,
  GapService,
  SeiService,
  BandwidthService,
  MediaStatsService,
  WarningType,
  Logger2,
  FlvDemuxer,
  TsDemuxer,
  MP4Parser,
  FMP4Demuxer,
  FMP4Remuxer,
  MP4Demuxer
};
//# sourceMappingURL=chunk-S5Q3WY4P.js.map
