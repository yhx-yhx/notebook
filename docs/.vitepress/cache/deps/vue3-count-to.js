import "./chunk-5WWUZCGV.js";

// node_modules/vue3-count-to/dist/vue3-count-to.esm.js
import Component from "D:/cangku/2023/notebook/node_modules/vue-count-to/src/vue-countTo.vue";
function _defineProperty(obj, key, value) {
  return key in obj ? Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }) : obj[key] = value, obj;
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
Component.unmounted = Component.destroyed, Reflect.deleteProperty(Component, "destroyed");
var CountTo = function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}({ name: "CountTo", emits: ["callback", "mountedCallback"] }, Component);
var index = { install: function(app) {
  app.component("count-to", CountTo);
}, version: "1.1.2" };
var vue3_count_to_esm_default = index;
export {
  CountTo,
  vue3_count_to_esm_default as default
};
//# sourceMappingURL=vue3-count-to.js.map
