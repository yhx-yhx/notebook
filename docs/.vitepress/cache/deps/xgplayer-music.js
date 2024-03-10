import {
  BasePlugin,
  Plugin,
  events_exports,
  util
} from "./chunk-N7KXS7CY.js";
import "./chunk-3EJPJMEH.js";

// node_modules/xgplayer-music/es/_virtual/_rollupPluginBabelHelpers.js
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

// node_modules/xgplayer-music/es/xhr.js
var Xhr = function() {
  function Xhr2(url, callback) {
    _classCallCheck(this, Xhr2);
    this.url = url;
    var xhr = new window.XMLHttpRequest();
    xhr.target = this;
    xhr.responseType = "arraybuffer";
    xhr.open("get", url);
    xhr.onload = function() {
      if (xhr.status === 200 || xhr.status === 206) {
        if (callback && callback instanceof Function) {
          callback(xhr.response);
        }
      }
    };
    xhr.onerror = function(e) {
    };
    this.xhr = xhr;
    this.run();
  }
  _createClass(Xhr2, [{
    key: "cancel",
    value: function cancel() {
      this.xhr.abort();
    }
  }, {
    key: "run",
    value: function run() {
      if (this.xhr.readyState === 1) {
        this.xhr.send();
      }
    }
  }]);
  return Xhr2;
}();

// node_modules/xgplayer-music/es/music.js
var PLAY_MODES = {
  ORDER: "order",
  SLOOP: "sloop",
  LOOP: "loop",
  RANDOM: "random"
};
var CLASS_NAME = "xgplayer-music";
function _randomIndex(min, max, index) {
  var i = Math.floor(Math.random() * (max - min) + min);
  if (i === index) {
    if (i > max / 2) {
      max = max / 2;
    } else {
      min = max / 2;
    }
    return max - min > 2 ? _randomIndex(min, max, index) : i;
  } else {
    return i;
  }
}
var Music = function(_BasePlugin) {
  _inherits(Music2, _BasePlugin);
  var _super = _createSuper(Music2);
  function Music2() {
    var _this;
    _classCallCheck(this, Music2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "_onEnded", function() {
      if (_this.mode === "order" && _this.index + 1 >= _this.list.length) {
        _this.player.pause();
        _this.player.currentTime = 0;
        return;
      }
      switch (_this.mode) {
        case PLAY_MODES.SLOOP:
          _this.change();
          break;
        case PLAY_MODES.ORDER:
        case PLAY_MODES.LOOP:
        default:
          _this.next();
          break;
      }
    });
    _defineProperty(_assertThisInitialized(_this), "_onDurationChange", function() {
      var abCycle = _this.config.abCycle;
      _this._initABCycle(abCycle, _this.player);
    });
    _defineProperty(_assertThisInitialized(_this), "_onTimeUpdate", function() {
      var _assertThisInitialize = _assertThisInitialized(_this), config = _assertThisInitialize.config, player = _assertThisInitialize.player;
      if (!_this.halfPass && player.currentTime > player.duration / 2) {
        _this.confirmOrder();
      }
      if (config.abCycle) {
        var c = config.abCycle;
        var _end = c.end > player.duration ? player.duration : c.end;
        if (player.currentTime >= _end) {
          if (!c.loop) {
            player.pause();
            _this.emit("abCycle_ended");
          }
          player.currentTime = c.start || 0;
        } else if (player.currentTime < c.start) {
          player.currentTime = c.start || 0;
        }
      }
    });
    return _this;
  }
  _createClass(Music2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var player = this.player, playerConfig = this.playerConfig;
      util.addClass(player.root, CLASS_NAME);
      this.halfPass = false;
      this.list = this.config.list || [];
      this.nextIndex = -1;
      this.prevIndex = -1;
      this.history = [];
      this.disable = !(this.list.length > 0);
      if (this.list.length === 0) {
        return;
      }
      if (!playerConfig.url && this.list.length > 0) {
        playerConfig.url = this.list[0].src;
      }
      if (!playerConfig.poster) {
        playerConfig.poster = this.list[0].poster;
      }
      if (!playerConfig.title) {
        playerConfig.title = this.list[0].title || "";
      }
      if (!playerConfig.vid) {
        playerConfig.vid = this.list[0].vid || "";
      }
      this._curInfo = {
        src: playerConfig.url,
        poster: playerConfig.poster,
        title: playerConfig.title,
        vid: playerConfig.vid
      };
      this.index = 0;
      this.on(events_exports.TIME_UPDATE, this._onTimeUpdate);
      this.on(events_exports.ENDED, this._onEnded);
      this.on(events_exports.DURATION_CHANGE, this._onDurationChange);
      if (this.config.offline) {
        this.checkOffline(this._curInfo.src, this._curInfo.vid).then(function(data) {
          if (data.code === 0) {
            playerConfig.url = data.url;
            if (player.state >= 4) {
              player.src = data.url;
            }
          }
        }).catch(function(e) {
        });
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      util.removeClass(this.player.root, CLASS_NAME);
    }
  }, {
    key: "_nextCompute",
    value: function _nextCompute() {
      if (this.disable) {
        return;
      }
      switch (this.mode) {
        case PLAY_MODES.SLOOP:
        case PLAY_MODES.ORDER:
        case PLAY_MODES.LOOP:
          if (this.index + 1 < this.list.length) {
            this.nextIndex = this.index + 1;
          } else {
            this.nextIndex = 0;
          }
          break;
        default:
          this.nextIndex = _randomIndex(0, this.list.length, this.index);
          break;
      }
    }
  }, {
    key: "_prevCompute",
    value: function _prevCompute() {
      if (this.disable) {
        return;
      }
      switch (this.mode) {
        case PLAY_MODES.SLOOP:
        case PLAY_MODES.ORDER:
        case PLAY_MODES.LOOP:
          if (this.index - 1 >= 0) {
            this.prevIndex = this.index - 1;
          } else {
            this.prevIndex = this.list.length - 1;
          }
          break;
        default:
          this.prevIndex = _randomIndex(0, this.list.length, this.index);
          break;
      }
    }
  }, {
    key: "_emitChange",
    value: function _emitChange() {
      this.emit("change", this._curInfo);
    }
  }, {
    key: "_initABCycle",
    value: function _initABCycle(abCycle, player) {
      var _p = player.plugins.progresspreview;
      if (abCycle && player) {
        var _end = abCycle.end > this.player.duration ? this.player.duration : abCycle.end;
        var _start = abCycle.start > this.player.duration ? 0 : abCycle.start;
        var dot = {
          id: player.playerId,
          time: abCycle.start,
          duration: _end - _start,
          text: abCycle.text,
          color: abCycle.color
        };
        _p.findDot(dot.id) ? _p.updateDot(dot) : _p.createDot(dot);
      } else {
        _p.findDot(player.playerId) ? _p.deleteDot(player.playerId) : "";
      }
    }
  }, {
    key: "random",
    value: function random() {
      if (this.list.length < 0) {
        return null;
      }
      var _i = _randomIndex(0, this.list.length, this.index);
      return this.list[_i];
    }
  }, {
    key: "next",
    value: function next() {
      if (this.disable) {
        return;
      }
      if (!this.halfPass) {
        this.halfPass = true;
        this._nextCompute();
      }
      this.index = this.nextIndex;
      this.change();
    }
  }, {
    key: "prev",
    value: function prev() {
      if (this.disable) {
        return;
      }
      if (!this.halfPass) {
        this.halfPass = true;
        this._prevCompute();
      }
      this.index = this.prevIndex;
      this.change();
    }
  }, {
    key: "forward",
    value: function forward() {
      var player = this.player;
      var timeScale = this.config.timeScale;
      player.currentTime = player.currentTime + timeScale < player.duration ? player.currentTime + timeScale : player.duration - 0.1;
    }
  }, {
    key: "backward",
    value: function backward() {
      var player = this.player;
      var timeScale = this.config.timeScale;
      player.currentTime = player.currentTime - timeScale > 0 ? player.currentTime - timeScale : 0;
    }
  }, {
    key: "add",
    value: function add(meta) {
      this.list.push({
        src: meta.src,
        title: meta.title,
        vid: meta.vid,
        poster: meta.poster
      });
    }
  }, {
    key: "remove",
    value: function remove(vid) {
      var idx = -1;
      this.list.every(function(item, index) {
        if (item.vid === vid) {
          idx = index;
          return false;
        } else {
          return true;
        }
      });
      if (idx > -1) {
        this.list.splice(idx, 1);
      }
    }
  }, {
    key: "setAbCycle",
    value: function setAbCycle(start, end, loop) {
      var ext = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
      if (start && util.typeof(start) === "Object") {
        this.config.abCycle = _objectSpread2({}, start);
      } else {
        this.config.abCycle = _objectSpread2({
          start: start || 0,
          end: end || this.player.duration,
          loop
        }, ext);
      }
      this._initABCycle(this.config.abCycle, this.player);
    }
  }, {
    key: "removeAbCycle",
    value: function removeAbCycle() {
      this.config.abCycle = null;
      this._initABCycle(null, this.player);
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var list = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      this.removeAbCycle();
      this.player.pause();
      this.player.currentTime = 0;
      this.list = list;
      this.nextIndex = 0;
      this.index = 0;
      this.change();
    }
  }, {
    key: "setIndex",
    value: function setIndex() {
      var index = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      if (index < 0 || index >= this.list.length) {
        return;
      }
      this.nextIndex = index;
      this.index = index;
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      var _this2 = this;
      if (this.disable) {
        return;
      }
      var player = this.player, list = this.list, index = this.index;
      var offlineVid = list[index].vid;
      this.halfPass = false;
      this.checkOffline(list[index].src, offlineVid).then(function(data) {
        _this2._curInfo = {
          title: _this2.list[_this2.index].title || "",
          vid: _this2.list[_this2.index].vid,
          poster: _this2.list[_this2.index].poster || "",
          src: data.url
        };
        player.playNext({
          url: data.url,
          vid: _this2.list[_this2.index].vid || 0,
          poster: _this2.list[_this2.index].poster || "",
          autoplay: true
        });
        player.off("timeupdate", _this2._emitChange);
        player.once("timeupdate", _this2._emitChange);
        player.play();
      });
    }
  }, {
    key: "checkOffline",
    value: function checkOffline(url, offlineVid) {
      var _this3 = this;
      return new Promise(function(resolve, reject) {
        if (!_this3.config.offline || _this3.disable) {
          resolve({
            url,
            code: -1,
            vid: offlineVid
          });
        }
        var database = _this3.player.database;
        database.openDB(function() {
          database.getDataByKey(database.myDB.ojstore.name, offlineVid, function(result) {
            setTimeout(function() {
              database.closeDB();
            }, 5e3);
            if (result) {
              resolve({
                url: URL.createObjectURL(result.blob),
                code: 0,
                vid: result.vid
              });
            } else {
              resolve({
                url,
                code: -2,
                vid: offlineVid
              });
            }
          });
        });
      });
    }
  }, {
    key: "confirmOrder",
    value: function confirmOrder() {
      this.halfPass = true;
      this._nextCompute();
      this._prevCompute();
      if (this.config.preloadNext) {
        this.preload(this.nextIndex);
      }
    }
  }, {
    key: "preload",
    value: function preload(index) {
      if (index < 0 || index >= this.list.length) {
        return;
      }
      var _item = this.list[index];
      var player = this.player;
      this.checkOffline(_item.src, _item.vid).then(function(data) {
        if (data.code === -2) {
          var offlineVid = _item.vid;
          new Xhr(_item.src, function(res) {
            player.database.openDB(function() {
              player.database.addData(player.database.myDB.ojstore.name, [{
                vid: offlineVid,
                blob: new Blob([res], {
                  type: 'audio/mp4; codecs="mp4a.40.5"'
                })
              }]);
              setTimeout(function() {
                player.database.closeDB();
              }, 5e3);
            });
          });
        }
      });
    }
  }, {
    key: "timeScale",
    get: function get() {
      return this.config.timeScale || 15;
    },
    set: function set(scale2) {
      this.config.timeScale = scale2;
    }
  }, {
    key: "mode",
    get: function get() {
      return this.config.mode || PLAY_MODES.RANDOM;
    },
    set: function set(val) {
      this.config.mode = val;
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "music";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        offline: false,
        preloadNext: true,
        abCycle: null,
        timeScale: 15,
        mode: PLAY_MODES.ORDER,
        list: []
      };
    }
  }, {
    key: "ModeType",
    get: function get() {
      return Object.keys(PLAY_MODES).map(function(key) {
        return PLAY_MODES[key];
      });
    }
  }]);
  return Music2;
}(BasePlugin);

// node_modules/xgplayer-music/es/plugins/musicCover.js
var MusicCover = function(_Plugin) {
  _inherits(MusicCover2, _Plugin);
  var _super = _createSuper(MusicCover2);
  function MusicCover2() {
    _classCallCheck(this, MusicCover2);
    return _super.apply(this, arguments);
  }
  _createClass(MusicCover2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.on("change", function(item) {
        if (item && item.poster) {
          if (_this.find("img")) {
            _this.find("img").src = item.poster;
          } else {
            var _img2 = new Image();
            _img2.src = item.poster;
            _this.appendChild(_img2);
          }
          _this.find("img").src = item.poster;
          _this.show();
        } else {
          _this.hide();
        }
      });
      if (this.playerConfig.poster) {
        var _img = new Image();
        _img.src = this.playerConfig.poster;
        this.appendChild(_img);
      }
    }
  }, {
    key: "render",
    value: function render2() {
      return '<xg-icon class="xgplayer-cover"></xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musiccover";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 6,
        position: Plugin.POSITIONS.CONTROLS_LEFT
      };
    }
  }]);
  return MusicCover2;
}(Plugin);

// node_modules/xgplayer-music/es/plugins/musicBackward.js
var MusicBackward = function(_Plugin) {
  _inherits(MusicBackward2, _Plugin);
  var _super = _createSuper(MusicBackward2);
  function MusicBackward2() {
    var _this;
    _classCallCheck(this, MusicBackward2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      e.preventDefault();
      e.stopPropagation();
      player.plugins.music.backward();
    });
    return _this;
  }
  _createClass(MusicBackward2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.initIcons();
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this2.bind(item, _this2.onClick);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        musicBackward: {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">\n      <path d="m 14,2.99996 0,10 -7,-5 7,-5 z m -7,5 0,5 -7,-5 7,-5 0,5 z m -7,0 0,0 z"></path>\n  </svg>',
          class: "xg-icon-mbackward"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.musicBackward);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this3.unbind(item, _this3.onClick);
      });
    }
  }, {
    key: "render",
    value: function render2() {
      return '<xg-icon class="xgplayer-backward">\n            <div class="xgplayer-icon">\n            </div>\n          </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musicbackward";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 1,
        position: Plugin.POSITIONS.CONTROLS_LEFT
      };
    }
  }]);
  return MusicBackward2;
}(Plugin);

// node_modules/xgplayer-music/es/plugins/musicPrev.js
var MusicPrev = function(_Plugin) {
  _inherits(MusicPrev2, _Plugin);
  var _super = _createSuper(MusicPrev2);
  function MusicPrev2() {
    var _this;
    _classCallCheck(this, MusicPrev2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      e.preventDefault();
      e.stopPropagation();
      player.plugins.music.prev();
    });
    return _this;
  }
  _createClass(MusicPrev2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.initIcons();
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this2.bind(item, _this2.onClick);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        musicPrev: {
          icon: ' <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="300 200 1024 1024">\n        <path d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>\n    </svg>',
          class: "xg-icon-mprev"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.musicPrev);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this3.unbind(item, _this3.onClick);
      });
    }
  }, {
    key: "render",
    value: function render2() {
      return '<xg-icon class="xgplayer-next">\n            <div class="xgplayer-icon">\n            </div>\n          </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musicprev";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 2,
        position: Plugin.POSITIONS.CONTROLS_LEFT
      };
    }
  }]);
  return MusicPrev2;
}(Plugin);

// node_modules/xgplayer-music/es/plugins/musicForward.js
var MusicForward = function(_Plugin) {
  _inherits(MusicForward2, _Plugin);
  var _super = _createSuper(MusicForward2);
  function MusicForward2() {
    var _this;
    _classCallCheck(this, MusicForward2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      e.preventDefault();
      e.stopPropagation();
      player.plugins.music.forward();
    });
    return _this;
  }
  _createClass(MusicForward2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.initIcons();
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this2.bind(item, _this2.onClick);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        musicForward: {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">\n        <path d="m 2,2.99996 0,10 7,-5 -7,-5 z m 7,5 0,5 7,-5 -7,-5 0,5 z m 7,0 0,0 z"></path>\n      </svg>',
          class: "xg-icon-mforward"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.musicForward);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this3.unbind(item, _this3.onClick);
      });
    }
  }, {
    key: "render",
    value: function render2() {
      return '<xg-icon class="xgplayer-forward">\n            <div class="xgplayer-icon">\n            </div>\n          </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musicforward";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 5,
        position: Plugin.POSITIONS.CONTROLS_LEFT
      };
    }
  }]);
  return MusicForward2;
}(Plugin);

// node_modules/xgplayer-music/es/plugins/musicNext.js
var MusicNext = function(_Plugin) {
  _inherits(MusicNext2, _Plugin);
  var _super = _createSuper(MusicNext2);
  function MusicNext2() {
    var _this;
    _classCallCheck(this, MusicNext2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "onClick", function(e) {
      var _assertThisInitialize = _assertThisInitialized(_this), player = _assertThisInitialize.player;
      e.preventDefault();
      e.stopPropagation();
      player.plugins.music.next();
    });
    return _this;
  }
  _createClass(MusicNext2, [{
    key: "afterCreate",
    value: function afterCreate() {
      var _this2 = this;
      this.initIcons();
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this2.bind(item, _this2.onClick);
      });
    }
  }, {
    key: "registerIcons",
    value: function registerIcons() {
      return {
        musicNext: {
          icon: ' <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="100 200 1024 1024">\n        <path d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z">\n      </svg>',
          class: "xg-icon-mnext"
        }
      };
    }
  }, {
    key: "initIcons",
    value: function initIcons() {
      var icons = this.icons;
      this.appendChild(".xgplayer-icon", icons.musicNext);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      var ev = ["click", "touchstart"];
      ev.forEach(function(item) {
        _this3.unbind(item, _this3.onClick);
      });
    }
  }, {
    key: "render",
    value: function render2() {
      return '<xg-icon class="xgplayer-next">\n            <div class="xgplayer-icon">\n            </div>\n          </xg-icon>';
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musicnext";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 4,
        position: Plugin.POSITIONS.CONTROLS_LEFT
      };
    }
  }]);
  return MusicNext2;
}(Plugin);

// node_modules/xgplayer-music/es/plugins/musicMeta.js
var MusicMeta = function(_Plugin) {
  _inherits(MusicMeta2, _Plugin);
  var _super = _createSuper(MusicMeta2);
  function MusicMeta2() {
    _classCallCheck(this, MusicMeta2);
    return _super.apply(this, arguments);
  }
  _createClass(MusicMeta2, [{
    key: "beforeCreate",
    value: function beforeCreate(args) {
      var progress = args.player.plugins.progress;
      if (progress) {
        args.root = progress.root;
      }
    }
  }, {
    key: "afterCreate",
    value: function afterCreate() {
      var _this = this;
      this.on("change", function(item) {
        if (item && item.title) {
          _this.root.innerHTML = "".concat(item.title);
        } else {
          _this.root.innerHTML = "";
        }
      });
    }
  }, {
    key: "render",
    value: function render2() {
      var playerConfig = this.playerConfig;
      return '<xg-title class="xgplayer-name">\n          '.concat(playerConfig.title || "", "\n       </xg-title>");
    }
  }], [{
    key: "pluginName",
    get: function get() {
      return "musicmeta";
    }
  }, {
    key: "defaultConfig",
    get: function get() {
      return {
        index: 0
      };
    }
  }]);
  return MusicMeta2;
}(Plugin);

// node_modules/xgplayer-music/es/preset.js
function initMusicConfig(playerConfig) {
  if (util.typeOf(playerConfig.controls) !== "Object") {
    playerConfig.controls = {
      mode: "flex",
      initShow: true
    };
  } else {
    var _c = playerConfig.controls;
    playerConfig.controls = _objectSpread2({
      mode: "flex",
      initShow: true
    }, _c);
  }
  var _p = playerConfig.play || {};
  playerConfig.play = _objectSpread2({
    index: 3
  }, _p);
  playerConfig.marginControls = true;
  playerConfig.mediaType = "audio";
}
var MusicPreset = _createClass(function MusicPreset2(options, playerConfig) {
  _classCallCheck(this, MusicPreset2);
  console.log("config", options, playerConfig);
  console.log("playerConfig", util.typeOf(playerConfig.controls) !== "Object");
  initMusicConfig(playerConfig);
  this.plugins = [
    Music,
    MusicBackward,
    MusicPrev,
    MusicForward,
    MusicNext,
    MusicCover,
    MusicMeta
  ];
  this.ignores = ["start", "cssFullScreen", "fullscreen", "pip", "enter", "replay", "pc", "loading", "poster"];
});

// node_modules/xgplayer-music/es/analyze/drawBars.js
var drawBars = function(context) {
  var data = context.data, options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var count = data.length > options.count ? options.count : data.length;
  var percent = parseInt(h / 255 * 2, 10);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  var step = w / count;
  var barWidth = step - step / 4;
  var barHeight;
  var x = 0;
  var gradient = options.linear;
  for (var i = 0; i < count; i++) {
    barHeight = data[i];
    ctx.fillStyle = gradient;
    ctx.fillRect(x, h - barHeight, barWidth, barHeight * percent + h / 2);
    x += step;
  }
};

// node_modules/xgplayer-music/es/analyze/drawVertlines.js
var drawVertLines = function(context) {
  var data = context.data, options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var count = options.count || 128;
  if (data.length < count) {
    count = data.length;
  }
  var percent = h / 255;
  var increase = w / count;
  var gradient = options.linear;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  for (var point = 1; point <= count; point++) {
    var p = data[point];
    p *= percent;
    var x = increase * point;
    ctx.moveTo(x, h);
    ctx.lineTo(x, h - p);
    ctx.strokeStyle = gradient;
    ctx.stroke();
    ctx.beginPath();
  }
};

// node_modules/xgplayer-music/es/analyze/drawLightning.js
var drawLightning = function(context) {
  var data = context.data, options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var bufferLen = data.length > options.count ? options.count : data.length;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  ctx.beginPath();
  var gradient = options.linear;
  ctx.strokeStyle = gradient;
  var sliceWidth = w / bufferLen;
  var x = 0;
  for (var i = 0; i < bufferLen; i++) {
    var v = data[i] / 128;
    var y = v * h / 2;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  }
  ctx.lineTo(w, h / 2);
  ctx.stroke();
};

// node_modules/xgplayer-music/es/analyze/drawDoubleline.js
var drawDoubleline = function(context) {
  var data = context.data, options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var percent = h / 255;
  var increase = w / 128;
  var count = options.count || 128;
  var min = 5;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  var gradient = options.linear;
  for (var point = 1; point <= count; point++) {
    var p = data[point];
    p += min;
    p *= percent;
    var x = increase * point;
    var mid = h / 2 + p / 2;
    ctx.moveTo(x, mid);
    ctx.lineTo(x, mid - p);
    ctx.strokeStyle = gradient;
    ctx.stroke();
    ctx.beginPath();
  }
};

// node_modules/xgplayer-music/es/analyze/drawDoubleBars.js
var drawDoubleBars = function(context) {
  var data = context.data, options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var count = data.length > options.count ? options.count : data.length;
  var percent = h / 255;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  var step = w / count;
  var barWidth = step - step / 4;
  var barHeight;
  var x = 0;
  var gradient = options.linear;
  for (var i = 0; i < count; i++) {
    barHeight = data[i] * percent;
    ctx.fillStyle = gradient;
    ctx.fillRect(x, h / 2 + barHeight / 2, barWidth, -barHeight);
    x += step;
  }
};

// node_modules/xgplayer-music/es/analyze/helper.js
function getGradient(ctx, w, colors) {
  var gradient = ctx.createLinearGradient(0, 0, w, 0);
  var len = colors.length;
  var per = 100 / len;
  for (var i = 0; i < colors.length; i++) {
    gradient.addColorStop(per * i / 100, colors[i]);
  }
  return gradient;
}
function shrink(data, count) {
  if (!count || count < 1) {
    count = data.length * count;
  }
  var rtn = [];
  var splitAt = Math.floor(data.length / count);
  for (var i = 1; i <= count; i++) {
    var arraySection = data.slice(i * splitAt, i * splitAt + splitAt);
    var middle = arraySection[Math.floor(arraySection.length / 2)];
    rtn.push(middle);
  }
  return rtn;
}
function scale(data, max) {
  var scalePercent = max / 255;
  if (max <= 3 && max >= 0)
    scalePercent = max;
  var rtn = data.map(function(value) {
    return value * scalePercent;
  });
  return rtn;
}
function split(data, count) {
  var size = Math.floor(data.length / count);
  var rtn = [];
  var temp = [];
  var track = 0;
  for (var i = 0; i <= size * count; i++) {
    if (track === size) {
      rtn.push(temp);
      temp = [];
      track = 0;
    }
    temp.push(data[i]);
    track++;
  }
  return rtn;
}

// node_modules/xgplayer-music/es/analyze/drawWaves.js
function drawPath(ctx, dataArray, options, bufferLen) {
  var w = options.w, linear = options.linear, reverse = options.reverse, offset = options.offset;
  ctx.save();
  ctx.beginPath();
  var sliceWidth = w * 1 / bufferLen;
  ctx.strokeStyle = linear;
  var x = 0;
  var y = 0;
  for (var i = 0; i < bufferLen; i++) {
    y = reverse ? 0 - dataArray[i] : dataArray[i];
    y = offset - y;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
    x += sliceWidth;
  }
  ctx.lineTo(w, y);
  ctx.stroke();
}
var drawWaves = function(context) {
  var options = context.options, ctx = context.ctx, h = context.h, w = context.w;
  var data = context.data;
  var colors = options.colors;
  data = shrink(data, 2048);
  data = scale(data, h / 2);
  data = split(data, 4).slice(0, 3);
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = options.bgColor;
  ctx.fillRect(0, 0, w, h);
  for (var i = 0; i < data.length; i++) {
    drawPath(ctx, data[i], {
      linear: colors[i],
      w,
      h,
      offset: h / 2,
      reverse: false
    }, data[i].length);
    drawPath(ctx, data[i], {
      linear: colors[i],
      w,
      h,
      offset: h / 2,
      reverse: true
    }, data[i].length);
  }
};

// node_modules/xgplayer-music/es/analyze/render.js
var modeMap = {
  bars: drawBars,
  vertLines: drawVertLines,
  lightning: drawLightning,
  doubleLine: drawDoubleline,
  doubleBars: drawDoubleBars,
  waves: drawWaves
};
var frameRateMap = {
  bars: 2,
  vertLines: 1,
  lightning: 2,
  doubleLine: 1,
  doubleBars: 2,
  waves: 2
};
var MODES = {
  BARS: "bars",
  VERT_LINES: "vertLines",
  LIGHTNING: "lightning",
  DOUBLE_LINE: "doubleLine",
  DOUBLE_BARS: "doubleBars",
  WAVES: "waves"
};
function render(data, canvas) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var frame = arguments.length > 3 ? arguments[3] : void 0;
  if (!canvas) {
    return;
  }
  options = _objectSpread2({}, options);
  if (!options.stroke)
    options.stroke = 1;
  if (!options.colors)
    options.colors = ["#ff8177", "#cf556c", "#f99185", "#b12a5b"];
  var ctx = canvas.getContext("2d");
  var h = canvas.height;
  var w = canvas.width;
  ctx.strokeStyle = options.colors[0];
  ctx.lineWidth = options.stroke;
  var context = {
    data,
    options,
    ctx,
    h,
    w
  };
  if (typeof options.mode === "string")
    options.mode = [options.mode];
  options.mode.forEach(function(mode) {
    if (frame % frameRateMap[mode] === 0) {
      ctx.clearRect(0, 0, w, h);
      ctx.beginPath();
      modeMap[mode](context);
    }
  });
}

// node_modules/xgplayer-music/es/analyze/index.js
var Analyze = function() {
  function Analyze2(player, canvas) {
    var _this = this;
    var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    _classCallCheck(this, Analyze2);
    _defineProperty(this, "start", function() {
      if (_this.reqId) {
        return;
      }
      _this._renderFrame();
    });
    _defineProperty(this, "stop", function() {
      cancelAnimationFrame(_this.reqId);
      _this.reqId = null;
    });
    _defineProperty(this, "_onDestroy", function() {
      _this._audioCtx.close();
    });
    _defineProperty(this, "_onoVolumechange", function() {
      console.log("onoVolumechange");
      _this.gainNode.gain.setValueAtTime(_this.player.volume, _this.player.currentTime);
    });
    _defineProperty(this, "_renderFrame", function() {
      if (_this.reqId) {
        cancelAnimationFrame(_this.reqId);
      }
      _this.reqId = requestAnimationFrame(_this._renderFrame);
      _this.frameCount++;
      _this.mode === "lightning" ? _this.analyser.getByteTimeDomainData(_this.dataArray) : _this.analyser.getByteFrequencyData(_this.dataArray);
      render.call(_this, _this.dataArray, _this.canvas, _this.options, _this.frameCount);
    });
    this.canvas = canvas;
    var _this$canvas$getBound = this.canvas.getBoundingClientRect(), width = _this$canvas$getBound.width, height = _this$canvas$getBound.height;
    this.canvas.width = width * 2;
    this.canvas.height = height * 2;
    this.player = player;
    this.options = Analyze2.defaultConfig;
    Object.keys(options).map(function(key) {
      _this.options[key] = options[key];
    });
    if (!Analyze2.AudioCtx) {
      return;
    }
    if (player.audioCtx) {
      this._audioCtx = player.audioCtx;
    } else {
      this._audioCtx = new Analyze2.AudioCtx();
    }
    this.analyser = this._audioCtx.createAnalyser();
    var gainNode = this._audioCtx.createGain();
    gainNode.gain.setValueAtTime(player.volume, player.currentTime);
    this.gainNode = gainNode;
    this.source = this._audioCtx.createMediaElementSource(player.video);
    this.ctx = canvas.getContext("2d");
    this.source.connect(this.analyser);
    this.analyser.connect(gainNode);
    this.fftSize = this.options.fftSize;
    this.frameCount = 0;
    if (this.options.isGradient) {
      this.options.linear = getGradient(this.ctx, canvas.width, this.options.colors);
    }
    gainNode.connect(this._audioCtx.destination);
    this._initPlayerEvents();
  }
  _createClass(Analyze2, [{
    key: "_initPlayerEvents",
    value: function _initPlayerEvents() {
      var _this2 = this;
      ["play", "playing", "seeked"].forEach(function(name) {
        _this2.player.on(name, _this2.start);
      });
      this.player.on("volumechange", this._onoVolumechange);
      this.player.on("destroy", this._onDestroy);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;
      this.stop();
      ["play", "playing", "seeked"].forEach(function(name) {
        _this3.player.off(name, _this3.start);
      });
      this.player.off("volumechange", this._onoVolumechange);
      this.player.off("destroy", this._onDestroy);
      this._audioCtx.close();
    }
  }, {
    key: "mode",
    get: function get() {
      return this.options.mode;
    },
    set: function set(val) {
      this.options.mode = val;
    }
  }, {
    key: "fftSize",
    get: function get() {
      return this.analyser.frequencyBinCount * 2;
    },
    set: function set(val) {
      this.analyser.fftSize = val;
      var bufferLen = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(bufferLen);
    }
  }], [{
    key: "defaultConfig",
    get: function get() {
      return {
        fftSize: 16384,
        count: 1024,
        mode: "bars",
        colors: ["#ff8177", "#cf556c", "#f99185", "#b12a5b"],
        stroke: 2,
        bgColor: "#000",
        isGradient: true,
        linear: null
      };
    }
  }, {
    key: "MODES",
    get: function get() {
      return MODES;
    }
  }, {
    key: "AudioCtx",
    get: function get() {
      return window.AudioContext || window.webkitAudioContext;
    }
  }]);
  return Analyze2;
}();

// node_modules/xgplayer-music/es/lyric.js
var LyricTime = _createClass(function LyricTime2(timeTxt) {
  _classCallCheck(this, LyricTime2);
  this.regRule = /(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g;
  if (this.regRule.test(timeTxt)) {
    this.time = RegExp.$1 * 60 + RegExp.$2 * 1 + ("0." + RegExp.$3) * 1;
  } else {
    this.time = -1;
  }
});
var Lyric = function() {
  function Lyric2(txts, dom) {
    var _this = this;
    _classCallCheck(this, Lyric2);
    this.rawTxts = txts;
    this.txts = txts.map(function(item) {
      return item.replace(/^[\r\n]|[\r\n]$/g, "").match(/(\[.*\])[^[]+/g);
    });
    this.isDynamics = txts.map(function(item, idx) {
      return [].concat(item.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length === _this.txts[idx].length && _this.txts[idx].length === _this.txts[0].length && _this.txts[idx].length > 1;
    });
    this.isDynamic = this.isDynamics.some(function(item) {
      return item;
    });
    this.__ainimateInterval__ = 0;
    this.__offset__ = 0;
    this.__offsetScale__ = 0.5;
    this.dom = dom;
    this.lists = [];
    this.isDynamics.map(function(item, idx) {
      if (item) {
        _this.lists.push(_this.txts[idx].map(function(txt, index) {
          var reg = /(\[[\d:\S]+\])([^[]+)/g.test(txt);
          var time = RegExp.$1;
          var lyric = RegExp.$2;
          return {
            time: reg ? new LyricTime(time).time : -1,
            lyric,
            idx: index
          };
        }));
      }
    });
    this.list = this.lists.reduce(function(pre, cur) {
      return pre.map(function(item, idx) {
        return {
          time: item.time,
          lyric: item.lyric === "\n" ? "".concat(item.lyric).concat(cur[idx].lyric) : "".concat(item.lyric, "<br/>").concat(cur[idx].lyric),
          idx
        };
      });
    });
    this.line = 0;
  }
  _createClass(Lyric2, [{
    key: "interval",
    get: function get() {
      return this.__ainimateInterval__;
    },
    set: function set(val) {
      this.__ainimateInterval__ = val;
    }
  }, {
    key: "offset",
    get: function get() {
      return this.__offset__;
    },
    set: function set(val) {
      this.__offset__ = val;
    }
  }, {
    key: "offsetScale",
    get: function get() {
      return this.__offsetScale__;
    },
    set: function set(val) {
      this.__offsetScale__ = val;
    }
  }, {
    key: "adjust",
    value: function adjust() {
      var list = this.list;
      for (var i = 0, j, k, len = list.length; i < len; i++) {
        for (j = i + 1; j < len; j++) {
          if (list[j].time > list[i].time) {
            break;
          }
        }
        if (j < len) {
          var sep = (list[j].time - list[i].time) / (j - i);
          for (k = i + 1; k < j; k++) {
            list[k].time = list[k - 1].time + sep;
          }
        }
      }
    }
  }, {
    key: "find",
    value: function find(curTime) {
      var list = this.list;
      var interval = this.__ainimateInterval__;
      var offset = this.__offset__;
      curTime = curTime + offset > 0 ? curTime + offset : 0;
      return list.filter(function(_ref, idx) {
        var time = _ref.time;
        var idxy = idx + 1;
        return curTime >= time && (list[idxy] && curTime * 1 + interval * 1 <= list[idxy].time || idxy >= list.length);
      });
    }
  }, {
    key: "bind",
    value: function bind(player) {
      var _this2 = this;
      var self = this;
      this.__player__ = player;
      if (self.isDynamic) {
        self.__handle__ = (function() {
          var f = _this2.find(player.currentTime)[0];
          if (f && f.idx !== _this2.line) {
            _this2.line = f.idx;
            player.emit("lyricUpdate", f);
          }
        }).bind(self, player);
        player.on("timeupdate", self.__handle__);
        self.__startHandle__ = (function() {
          player.emit("lyricUpdate", self.list[0]);
        }).bind(self, player);
        player.once("playing", self.__startHandle__);
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: "unbind",
    value: function unbind(player) {
      delete this.__player__;
      if (this.__handle__) {
        player.off("lyricUpdate", this.__handle__);
        delete this.__handle__;
      }
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;
      var dom = this.dom;
      var lyrbicTxts = [];
      var self = this;
      var ev = ["click", "touchstart"];
      if (dom && dom.nodeType === 1) {
        var lrcWrap = util.createDom("div", "<div></div>", {}, "xgplayer-lrcWrap");
        dom.appendChild(lrcWrap);
        this.list.forEach(function(item) {
          lyrbicTxts.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'.concat(item.idx, '">').concat(item.lyric.replace(/[\r\n]/g, ""), "</xg-lyric-item>"));
        });
        lrcWrap.innerHTML = lyrbicTxts.join("");
        var lrcForward = util.createDom("xg-lrcForward", "<div></div>", {}, "xgplayer-lrcForward");
        dom.appendChild(lrcForward);
        ev.forEach(function(item) {
          lrcForward.addEventListener(item, function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.offset -= self.offsetScale;
            console.log("lyric go forward ".concat(self.offsetScale, "s"));
          }, false);
        });
        var lrcBack = util.createDom("xg-lrcBack", "<div></div>", {}, "xgplayer-lrcBack");
        dom.appendChild(lrcBack);
        ev.forEach(function(item) {
          lrcBack.addEventListener(item, function(e) {
            e.preventDefault();
            e.stopPropagation();
            self.offset += self.offsetScale;
            console.log("lyric go back ".concat(self.offsetScale, "s"));
          }, false);
        });
        this.__updateHandle__ = function(item) {
          var domWrap = _this3.dom.querySelector(".xgplayer-lrcWrap");
          var activeDom = domWrap.querySelector(".xgplayer-lyric-item-active");
          var offsetHeight = domWrap.offsetHeight;
          var activeTop;
          if (activeDom) {
            activeDom.className = "xgplayer-lyric-item";
          }
          activeDom = domWrap.querySelector('.xgplayer-lyric-item[data-idx="'.concat(item.idx, '"]'));
          if (activeDom) {
            activeDom.className = "xgplayer-lyric-item xgplayer-lyric-item-active";
            activeTop = activeDom.getBoundingClientRect().top - domWrap.getBoundingClientRect().top + domWrap.scrollTop - offsetHeight / 2;
            if (activeTop) {
              domWrap.scrollTop = activeTop;
            }
          }
        };
        this.__player__.on("lyricUpdate", this.__updateHandle__);
      } else {
        this.__player__.emit("error", "lyric container can not be empty");
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.__updateHandle__.off("lyricUpdate", this.__updateHandle__);
    }
  }]);
  return Lyric2;
}();
export {
  Analyze,
  Lyric,
  Music,
  MusicBackward,
  MusicCover,
  MusicForward,
  MusicMeta,
  MusicNext,
  MusicPrev,
  MusicPreset as default
};
//# sourceMappingURL=xgplayer-music.js.map
