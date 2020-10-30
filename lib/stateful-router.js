(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("prop-types"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "prop-types"], factory);
	else if(typeof exports === 'object')
		exports["stateful-router"] = factory(require("react"), require("prop-types"));
	else
		root["stateful-router"] = factory(root["react"], root["prop-types"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Router", function() { return /* reexport */ src_Router; });
__webpack_require__.d(__webpack_exports__, "Route", function() { return /* reexport */ src_Route; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(1);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./src/RouterContext.js

var RouterContext = /*#__PURE__*/Object(external_react_["createContext"])('');
/* harmony default export */ var src_RouterContext = (RouterContext);
// CONCATENATED MODULE: ./src/Router.js




var Router_Router = function Router(_ref) {
  var children = _ref.children,
      path = _ref.path;
  return /*#__PURE__*/external_react_default.a.createElement(src_RouterContext.Provider, {
    value: path
  }, children);
};

Router_Router.defaultProps = {
  path: ''
};
Router_Router.propTypes = {
  path: external_prop_types_default.a.string
};
/* harmony default export */ var src_Router = (Router_Router);
// CONCATENATED MODULE: ./src/path-util.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
  path:  /lists/42
  route: /lists
  isMatch? Yes

  path:  /lists/42
  route: /lists/
  isMatch? No

  path:  /lists
  route: /lists/new
  isMatch? No

  path:  /lists
  route: /lists/:id
  isMatch? No

  path:  /42/new
  route: /:id
  isMatch? Yes

  path:  /42/new
  route: /:id/
  isMatch? No
*/
var exists = function exists(value) {
  return value != null && value !== '';
};

var split = function split(str) {
  return str.split('/').filter(exists);
};

var isParam = function isParam(route) {
  return route.startsWith(':');
};

var isSubMatch = function isSubMatch(path, route) {
  return path === route || isParam(route);
}; // Returns true if the route is a valid match for the path.


var isMatch = function isMatch(path, route) {
  if (route === '' || route === '/') // This is a special case.
    return path === '' || path === '/';
  var paths = split(path);
  var routes = split(route);
  if (routes.length > paths.length) return false;
  var isExact = route.endsWith('/');
  return routes.every(function (route, i) {
    if (isExact && i === routes.length - 1) return routes.length === paths.length && isSubMatch(paths[i], route);else return isSubMatch(paths[i], route);
  });
}; // Extracts values from path given the keys from route.


var getParams = function getParams(path, route) {
  var paths = split(path);
  var routes = split(route);
  return routes.map(function (route, i) {
    return [paths[i], route];
  }).reduce(function (params, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        path = _ref2[0],
        route = _ref2[1];

    return isParam(route) ? _objectSpread(_objectSpread({}, params), {}, _defineProperty({}, route.slice(1), path)) : params;
  }, {});
}; // Expose these for external testing.


var __internals = {
  exists: exists,
  split: split,
  isParam: isParam,
  isSubMatch: isSubMatch
};

// CONCATENATED MODULE: ./src/Route.js





var Route_Route = function Route(_ref) {
  var children = _ref.children,
      route = _ref.route;
  if (route == null || route === '') return children;
  if (typeof route === 'string') route = [route];
  var path = Object(external_react_["useContext"])(src_RouterContext);
  var firstMatch = route.find(function (r) {
    return isMatch(path, r);
  });
  if (firstMatch == null) return null;
  return external_react_default.a.Children.map(children, function (child) {
    return /*#__PURE__*/Object(external_react_["isValidElement"])(child) ? /*#__PURE__*/Object(external_react_["cloneElement"])(child, getParams(path, firstMatch)) : child;
  });
};

Route_Route.propTypes = {
  route: external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.arrayOf(external_prop_types_default.a.string)])
};
/* harmony default export */ var src_Route = (Route_Route);
// CONCATENATED MODULE: ./src/index.js




/***/ })
/******/ ]);
});
//# sourceMappingURL=stateful-router.js.map