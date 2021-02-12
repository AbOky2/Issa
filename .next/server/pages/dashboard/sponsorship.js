module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ugE":
/***/ (function(module, exports) {

module.exports = require("showdown");

/***/ }),

/***/ "5cZU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ form_Btn; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ form_Icon; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ form_Modal; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ Input; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Select; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ Wysiwyg; });

// NAMESPACE OBJECT: ./static/img/icons/index.js
var icons_namespaceObject = {};
__webpack_require__.r(icons_namespaceObject);
__webpack_require__.d(icons_namespaceObject, "arrow", function() { return arrow; });
__webpack_require__.d(icons_namespaceObject, "triangle", function() { return triangle; });
__webpack_require__.d(icons_namespaceObject, "home", function() { return home; });
__webpack_require__.d(icons_namespaceObject, "house", function() { return house; });
__webpack_require__.d(icons_namespaceObject, "calendar", function() { return calendar; });
__webpack_require__.d(icons_namespaceObject, "close", function() { return icons_close; });
__webpack_require__.d(icons_namespaceObject, "calendr", function() { return calendr; });
__webpack_require__.d(icons_namespaceObject, "location", function() { return icons_location; });
__webpack_require__.d(icons_namespaceObject, "heart", function() { return heart; });
__webpack_require__.d(icons_namespaceObject, "door", function() { return door; });
__webpack_require__.d(icons_namespaceObject, "elevator", function() { return elevator; });
__webpack_require__.d(icons_namespaceObject, "room", function() { return room; });
__webpack_require__.d(icons_namespaceObject, "user", function() { return user; });
__webpack_require__.d(icons_namespaceObject, "sponsorship", function() { return sponsorship; });
__webpack_require__.d(icons_namespaceObject, "phone", function() { return phone; });
__webpack_require__.d(icons_namespaceObject, "partners", function() { return partners; });
__webpack_require__.d(icons_namespaceObject, "pen", function() { return pen; });
__webpack_require__.d(icons_namespaceObject, "logo", function() { return logo; });
__webpack_require__.d(icons_namespaceObject, "logoFull", function() { return logoFull; });
__webpack_require__.d(icons_namespaceObject, "search", function() { return search; });
__webpack_require__.d(icons_namespaceObject, "timing", function() { return timing; });
__webpack_require__.d(icons_namespaceObject, "addUser", function() { return addUser; });
__webpack_require__.d(icons_namespaceObject, "plus", function() { return plus; });
__webpack_require__.d(icons_namespaceObject, "carrouselArrow", function() { return carrouselArrow; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// CONCATENATED MODULE: ./static/img/icons/index.js
var __jsx = external_react_default.a.createElement;


var arrow = function arrow(props) {
  return __jsx("svg", props, __jsx("path", {
    clipRule: "evenodd",
    d: "M15.99.369l8.556 8.118c.605.58.605 1.49 0 2.07l-8.556 8.036c-1.556 1.491-4.581-1.491-3.025-2.9l4.235-4.058H1.556c-2.075 0-2.075-4.225 0-4.225H17.2l-4.235-4.06C11.409 1.944 14.434-1.04 15.99.37z"
  }));
};

arrow.defaultProps = {
  width: "25",
  height: "19",
  viewBox: "0 0 25 19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var triangle = function triangle(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M7.31 1.124a1 1 0 0 0-1.621 0l-4.54 6.29A1 1 0 0 0 1.959 9h9.081a1 1 0 0 0 .811-1.585l-4.54-6.291z",
    fill: "#1A2E6C"
  }));
};

triangle.defaultProps = {
  width: "13",
  height: "9",
  viewBox: "0 0 13 9",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var home = function home(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M13.033 0a2.66 2.66 0 0 1 1.803.733l10.4 9.995c.793.762.941 1.866.57 2.726-.37.86-1.285 1.543-2.407 1.543h-.864v7.5c0 1.37-1.178 2.503-2.604 2.503h-3.466v-5.837c0-.923-.773-1.666-1.734-1.666h-3.467c-.96 0-1.734.743-1.734 1.666V25H6.064c-1.426 0-2.606-1.132-2.606-2.503v-7.5h-.864a2.609 2.609 0 0 1-2.399-1.543c-.37-.86-.23-1.964.564-2.726L11.157.733A2.656 2.656 0 0 1 13.033 0z",
    fill: "#4F80FF"
  }));
};

home.defaultProps = {
  width: "26",
  height: "25",
  viewBox: "0 0 26 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var house = function house(props) {
  return __jsx("svg", props, __jsx("rect", {
    x: "13",
    y: "9",
    width: "77",
    height: "77",
    rx: "15",
    fill: "#fff",
    filter: "url(#a)"
  }), __jsx("g", {
    filter: "url(#b)"
  }, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M54.754 25.943l19.85 20.578a1.406 1.406 0 0 1-2.024 1.953l-1.097-1.137v18.617a4.047 4.047 0 0 1-4.043 4.043H37.558a4.047 4.047 0 0 1-4.042-4.043V47.337l-1.098 1.137a1.406 1.406 0 0 1-2.024-1.953l19.85-20.578a3.168 3.168 0 0 1 4.51 0zM52.5 61a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17z",
    fill: "#FFB341",
    filter: "url(#c)"
  }), __jsx("path", {
    d: "M53.06 50.163c-.448 0-.817.11-1.107.333-.29.218-.477.537-.562.956h2.22v.825H51.31l-.011.164v.22l.01.155h1.956v.835h-1.862c.188.76.777 1.14 1.769 1.14.525 0 1.03-.09 1.515-.268v1.2c-.426.185-.964.277-1.614.277-.9 0-1.64-.208-2.22-.624-.581-.415-.947-.99-1.097-1.725H49v-.835h.65a1.516 1.516 0 0 1-.022-.29l.011-.249H49v-.825h.733c.136-.756.501-1.353 1.096-1.79.595-.442 1.339-.662 2.232-.662.69 0 1.337.128 1.939.385l-.54 1.087a5.827 5.827 0 0 0-.71-.225 2.772 2.772 0 0 0-.69-.084z",
    fill: "#FFB341"
  })), __jsx("defs", null, __jsx("filter", {
    id: "a",
    x: "0",
    y: "0",
    width: "103",
    height: "103",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), __jsx("feOffset", {
    dy: "4"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "6.5"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }), __jsx("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dy: "-3"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "5"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.583333 0 0 0 0 0.583333 0 0 0 0 0.583333 0 0 0 0.25 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect2_innerShadow"
  })), __jsx("filter", {
    id: "b",
    x: "30",
    y: "25",
    width: "45.998",
    height: "46.997",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dx: "1",
    dy: "2"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.833333 0 0 0 0 0.552778 0 0 0 0 0.131944 0 0 0 1 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow"
  })), __jsx("filter", {
    id: "c",
    x: "30",
    y: "25",
    width: "45.998",
    height: "46.997",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dx: "1",
    dy: "2"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.5"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.833333 0 0 0 0 0.552778 0 0 0 0 0.131944 0 0 0 1 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow"
  }))));
};

house.defaultProps = {
  width: "103",
  height: "103",
  viewBox: "0 0 103 103",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var calendar = function calendar(props) {
  return __jsx("svg", props, __jsx("rect", {
    x: ".852",
    y: "3.407",
    width: "20.444",
    height: "19.593",
    rx: "3.407",
    fill: "#fff"
  }), __jsx("rect", {
    x: "5.961",
    y: ".85",
    width: "2.559",
    height: "5.967",
    rx: "1.28",
    fill: "#fff",
    stroke: "#4F80FF",
    strokeWidth: "1.7"
  }), __jsx("rect", {
    x: "21.722",
    y: "10.648",
    width: ".852",
    height: "21.296",
    rx: ".426",
    transform: "rotate(90 21.722 10.648)",
    fill: "#fff",
    stroke: "#4F80FF",
    strokeWidth: ".852"
  }), __jsx("rect", {
    x: "13.628",
    y: ".85",
    width: "2.559",
    height: "5.967",
    rx: "1.28",
    fill: "#fff",
    stroke: "#4F80FF",
    strokeWidth: "1.7"
  }));
};

calendar.defaultProps = {
  width: "23",
  height: "23",
  viewBox: "0 0 23 23",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var icons_close = function close(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M24.325 20.335L16.484 12.5l7.835-7.84c.903-.9.903-2.35.003-3.253l-.728-.73A2.264 2.264 0 0 0 21.965 0h-.003c-.615 0-1.193.242-1.625.675L12.499 8.52 4.66.684A2.292 2.292 0 0 0 1.409.68l-.73.722C.24 1.832 0 2.418 0 3.032c0 .617.242 1.197.675 1.63l7.844 7.837-7.836 7.84a2.296 2.296 0 0 0-.003 3.256l.728.728a2.304 2.304 0 0 0 3.258.002l7.836-7.842 7.838 7.833a2.285 2.285 0 0 0 1.628.675c.587 0 1.175-.224 1.624-.67l.728-.727c.441-.428.68-1.013.68-1.629a2.28 2.28 0 0 0-.672-1.63h-.003z",
    fill: "#E1E3E7"
  }));
};

icons_close.defaultProps = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var calendr = function calendr(props) {
  return __jsx("svg", props, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.482 0A5.482 5.482 0 0 0 0 5.482v14.254a5.482 5.482 0 0 0 5.482 5.482h14.254a5.482 5.482 0 0 0 5.482-5.482V5.482A5.482 5.482 0 0 0 19.736 0H5.482zm6.234 7.132h1.868V8.3a1.167 1.167 0 1 0 2.335 0V7.132h.467c1.031 0 1.868.836 1.868 1.868v1.868H7.046V9c0-1.032.836-1.868 1.868-1.868h.467V8.3a1.167 1.167 0 1 0 2.335 0V7.132zm-4.67 4.67v4.203c0 1.032.836 1.868 1.868 1.868h7.472a1.868 1.868 0 0 0 1.868-1.868v-4.203H7.046z",
    fill: "url(#b)",
    filter: "url(#a)"
  }), __jsx("defs", null, __jsx("filter", {
    id: "a",
    x: "0",
    y: "0",
    width: "25.218",
    height: "25.218",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", null), __jsx("feGaussianBlur", {
    stdDeviation: "1.645"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.0958333 0 0 0 0 0.282599 0 0 0 0 0.766667 0 0 0 0.6 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow"
  })), __jsx("linearGradient", {
    id: "b",
    x1: "12.609",
    x2: "12.609",
    y2: "25.218",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#3563DC"
  }), __jsx("stop", {
    offset: ".043",
    stopColor: "#3E6FEF"
  }), __jsx("stop", {
    offset: ".94",
    stopColor: "#3062E3"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#154AD2"
  }))));
};

calendr.defaultProps = {
  width: "26",
  height: "26",
  viewBox: "0 0 26 26",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var icons_location = function location(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M4.032 42.137a31.83 31.83 0 0 0 5.83 6.66c1.707-1.377 3.584-2.386 5.409-3.352.715-.367 1.43-.742 2.136-1.144 1.081-.611 2.165-1.18 3.302-1.599a45.279 45.279 0 0 1-5.811-7.96 45.299 45.299 0 0 1-3.601-7.989L0 33.116a31.472 31.472 0 0 0 4.032 9.021zM22.536 42.196a9.225 9.225 0 0 1 2.64-.121c3.479.357 6.653 1.814 12.992 4.712l.59.268c1.654.769 2.566 1.188 3.987 1.313 3.2.295 5.82-1.188 7.072-1.904 5.392-3.076 13.67-8.762 23.935-16.443 1.358-1.162 2.235-2.512 2.289-3.594.035-.85-.26-1.52-.876-2.012-.93-.733-2.504-.948-3.917-.536-3.058.894-4.453 1.806-6.383 3.075a62.553 62.553 0 0 1-2.7 1.699c-1.014 2.357-3.373 3.941-5.652 4.175l-1.207.01c-.072.062-.143.125-.233.16-1.063.537-1.931.993-2.664 1.368-2.619 1.35-3.54 1.824-4.533 1.824a3.07 3.07 0 0 1-.402-.027c-.921-.107-6.715-1.189-7.412-2.306-.143-.242-.474-1.091-.08-1.86.357-.697 1.126-1.073 1.922-.939l14.61-.018c2.253 0 4.085-1.77 4.085-3.943 0-2.164-1.77-3.854-4.032-3.854H42.05a5.336 5.336 0 0 1-2.853-.849c-2.825-1.795-8.591-4.567-15.36-2.86-2.6.653-4.962 1.932-7.214 3.908a13.867 13.867 0 0 1-2.19 1.547l-1.633.92a43.61 43.61 0 0 0 3.566 7.992 43.608 43.608 0 0 0 6.171 8.295z",
    fill: "#4F80FF"
  }), __jsx("circle", {
    cx: "56",
    cy: "5",
    r: "5",
    fill: "#4F80FF"
  }), __jsx("circle", {
    cx: "38",
    cy: "10",
    r: "5",
    fill: "#4F80FF"
  }));
};

icons_location.defaultProps = {
  width: "77",
  height: "49",
  viewBox: "0 0 77 49",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var heart = function heart(props) {
  return __jsx("svg", props, __jsx("path", {
    clipRule: "evenodd",
    d: "M13.588 25l-1.904-1.897C4.618 16.853 0 12.638 0 7.47 0 3.265 3.264 0 7.47 0c2.317 0 4.625 1.089 6.118 2.854C15.08 1.089 17.388 0 19.706 0c4.205 0 7.47 3.265 7.47 7.47 0 5.169-4.619 9.382-11.684 15.633L13.588 25z"
  }));
};

heart.defaultProps = {
  width: "28",
  height: "25",
  viewBox: "0 0 28 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var door = function door(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.448 1.955L7.205.02c.302-.09.602.133.675.494V23.324c0 .361-.262.676-.56.676-.076 0-.15 0-.188-.047L.375 21.301C.15 21.21 0 20.944 0 20.671V2.63c-.002-.315.186-.586.448-.674zm6.307-.452L1.086 3.168v17.05l5.67 2.25V1.503zM8.558 1.458h3.454c.3 0 .56.317.56.676v19.077c0 .358-.26.673-.56.673H8.557v-1.302h2.89V2.81h-2.89V1.458z",
    fill: "#4F80FF"
  }), __jsx("path", {
    d: "M5.855 12.796c.31 0 .563-.382.563-.854 0-.471-.252-.854-.563-.854-.31 0-.563.383-.563.854 0 .472.252.854.563.854z",
    fill: "#4F80FF"
  }));
};

door.defaultProps = {
  width: "13",
  height: "24",
  viewBox: "0 0 13 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var elevator = function elevator(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M9.455 7.273H3.636v16.363a.364.364 0 0 1-.727 0V6.91c0-.2.163-.364.364-.364h13.09c.201 0 .364.163.364.364v16.727a.364.364 0 0 1-.727 0V7.273h-5.818v16.363a.364.364 0 0 1-.727 0V7.273zM.727 4.363v19.273a.364.364 0 0 1-.727 0V4c0-.2.163-.364.364-.364h18.909c.2 0 .363.163.363.364v19.636a.364.364 0 0 1-.727 0V4.364H.727zM7.273.879l-.834.834a.364.364 0 1 1-.514-.515l1.09-1.09a.364.364 0 0 1 .515 0l1.09 1.09a.364.364 0 1 1-.513.515L7.273.878zm5.09.062l.834-.833a.364.364 0 0 1 .515.514L12.62 1.71a.364.364 0 0 1-.514 0L11.016.622a.364.364 0 1 1 .514-.514l.834.833zm9.819 15.787a1.09 1.09 0 1 1 0-2.181 1.09 1.09 0 0 1 0 2.181zm0-.727a.364.364 0 1 0 0-.727.364.364 0 0 0 0 .727zm0-2.182a1.09 1.09 0 1 1 0-2.182 1.09 1.09 0 0 1 0 2.182zm0-.727a.364.364 0 1 0 0-.727.364.364 0 0 0 0 .727z",
    fill: "#4F80FF"
  }));
};

elevator.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var room = function room(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M16 12.074L2.44 6.037 16.03 0l13.591 6.037-13.62 6.037zM4.7 6.037L16 11.063l11.301-5.026-11.3-5.026L4.698 6.037zM32 7.286l-1.16-.505-13.442 5.888 1.13.536L32 7.286zM1.13 6.662L0 7.197l13.532 5.978 1.13-.506L1.13 6.662z",
    fill: "#4F80FF"
  }));
};

room.defaultProps = {
  width: "32",
  height: "14",
  viewBox: "0 0 32 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var user = function user(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M14 15c2.977 0 5-2.239 5-5 0-2.762-2.023-5-5-5s-5 2.238-5 5c0 2.761 2.023 5 5 5zM18.051 15.137c-1.07.962-2.472 1.53-4.05 1.53-1.579 0-2.982-.569-4.053-1.53a8.522 8.522 0 0 0-4.438 7.111A11.81 11.81 0 0 0 14 25.846c3.327 0 6.336-1.381 8.49-3.597a8.523 8.523 0 0 0-4.439-7.112z",
    fill: "#1A2E6C"
  }));
};

user.defaultProps = {
  width: "28",
  height: "28",
  viewBox: "0 0 28 28",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var sponsorship = function sponsorship(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M17.366 24.217l6.851-6.851c1.044-1.044 1.044-2.806 0-3.915L11.559.793A2.982 2.982 0 0 0 9.275.01L3.207.793A2.909 2.909 0 0 0 .793 3.207L.01 9.275a2.982 2.982 0 0 0 .783 2.284L13.45 24.217c1.11 1.044 2.87 1.044 3.915 0zM6.143 4.12c1.11 0 2.023.914 2.023 2.023 0 1.11-.914 2.023-2.023 2.023A2.033 2.033 0 0 1 4.12 6.143c0-1.11.914-2.023 2.023-2.023z",
    fill: "#1A2E6C"
  }));
};

sponsorship.defaultProps = {
  width: "25",
  height: "25",
  viewBox: "0 0 25 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var phone = function phone(props) {
  return __jsx("svg", props, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.509 2.14C7.364.841 9.576.253 11.953.303c1.535 2.191 3.251 9.413 1.815 10.419L9.46 13.738c-3.332 4.813 7.042 19.627 12.703 18.142l4.308-3.016c1.436-1.006 7.635 3.077 9.17 5.27-.766 2.249-2.075 4.127-3.93 5.426C15.398 50.98-10.804 13.563 5.508 2.14z",
    fill: "currentColor"
  }));
};

phone.defaultProps = {
  width: "36",
  height: "42",
  viewBox: "0 0 36 42",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var partners = function partners(props) {
  return __jsx("svg", props, __jsx("defs", null, __jsx("path", {
    id: "a",
    d: "M0 0h260v1236H0z"
  })), __jsx("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(-26 -307)"
  }, __jsx("path", {
    fill: "#F2F4F4",
    d: "M0 0h1440v940H0z"
  }), __jsx("mask", {
    id: "b",
    fill: "#fff"
  }, __jsx("use", {
    xlinkHref: "#a"
  })), __jsx("use", {
    fill: "#F2F4F4",
    xlinkHref: "#a"
  }), __jsx("g", {
    fill: "#475F7B",
    fillRule: "nonzero",
    mask: "url(#b)"
  }, __jsx("path", {
    d: "M40.257 310.13c.366 0 .736.092 1.007.274l1.995 1.704c.502.336 1.28.931 1.733 1.322l1.812 1.57L50 311.55l-4.966-4.43-1.196 1.093s-.4-.085-.678-.21l-1.873-.85a1.957 1.957 0 0 0-.794-.153c-.41 0-.834.103-1.131.299l-2.898 1.893c-.503.332-.615.982-.247 1.443l.171.217c.236.295.621.457 1.007.457.217 0 .433-.05.623-.158l1.375-.818c.243-.136.552-.203.864-.203z"
  }), __jsx("path", {
    d: "M45.65 316.056l-2.964-2.659a52.513 52.513 0 0 0-.832-.626l-1.858-1.642a.618.618 0 0 0-.37-.007l-1.348.83a2.55 2.55 0 0 1-1.28.34c-.802 0-1.56-.363-2.027-.971l-.168-.218a2.21 2.21 0 0 1-.437-1.725 2.264 2.264 0 0 1 .977-1.509l.305-.206c-.44-.052-.929-.007-1.286.14 0 0-.598.255-.79.333-.445.182-1.069.18-1.069.18L31.04 307 26 311.83l1.895 1.84.43-.436a2.447 2.447 0 0 1 1.735-.715c.619 0 1.206.227 1.653.638l.204.188c.262.241.456.526.58.833.392.097.753.29 1.052.565l.203.187c.462.424.726.998.742 1.617.14.083.273.182.394.294l.206.189c.287.264.491.581.612.921.363.102.697.287.976.543l.208.19a2.26 2.26 0 0 1 .382 2.894l.155.14c.442.396 1.14.372 1.55-.054l.192-.2a1.03 1.03 0 0 0-.034-1.467l1.421 1.272a1.13 1.13 0 0 0 1.55-.056l.193-.2a1.035 1.035 0 0 0-.05-1.488l.365.328a1.127 1.127 0 0 0 1.55-.055l.192-.2c.41-.426.384-1.1-.058-1.496l-.308-.276a1.127 1.127 0 0 0 1.524-.074l.193-.2c.412-.427.386-1.1-.056-1.496z"
  }), __jsx("path", {
    d: "M36.64 319.94l-.217-.191a1.209 1.209 0 0 0-.802-.298c-.307 0-.614.112-.842.334l-.004-.006a1.03 1.03 0 0 0-.04-1.528l-.217-.192a1.2 1.2 0 0 0-.797-.295c-.29 0-.58.1-.804.297l.436-.425a1.03 1.03 0 0 0-.04-1.528l-.216-.192a1.204 1.204 0 0 0-.8-.296 1.21 1.21 0 0 0-.823.314 1.025 1.025 0 0 0-.108-1.445l-.216-.192a1.211 1.211 0 0 0-.803-.297c-.308 0-.615.112-.842.334l-2.185 2.127a1.029 1.029 0 0 0 .04 1.528l.216.191c.223.198.51.295.796.295.264 0 .528-.083.742-.245l-.576.56c-.44.43-.423 1.118.04 1.528l.217.192c.225.199.514.298.803.298.308 0 .614-.112.842-.334l.45-.438c-.4.431-.374 1.088.074 1.485l.218.192c.224.198.514.297.803.297.307 0 .614-.112.842-.333l.722-.695a1.03 1.03 0 0 0 .039 1.528l.218.193c.223.198.513.297.802.297.307 0 .614-.112.842-.334l1.23-1.198a1.03 1.03 0 0 0-.04-1.527z"
  }))));
};

partners.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "24",
  height: "16",
  viewBox: "0 0 24 16"
};


var pen = function pen(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M57.277 8.55l-1.662-.605a3.48 3.48 0 0 0-4.453 2.078l-10.483 28.8a1.201 1.201 0 0 0-.057.589l.977 6.535a1.199 1.199 0 0 0 1.984.723l4.952-4.377c.15-.134.265-.302.336-.49l10.483-28.8a3.482 3.482 0 0 0-2.077-4.453zM44.682 42.494a2.72 2.72 0 0 0-1.236-.45l-.403-2.687 3.672 1.339-2.033 1.798zm12.412-30.313l-.687 1.883-3.672-1.337.684-1.883a1.073 1.073 0 0 1 1.373-.639l1.662.604c.554.202.843.818.64 1.372zM40.606 51.014a.973.973 0 0 1-.418-.092c-.128-.06-3.184-1.488-6.739-4.113-.742-.549-1.498-.763-2.021-.574-.71.255-1.084 1.237-1.277 2.013-.281 1.145-1.004 1.895-2.039 2.11-1.672.352-3.8-.873-4.587-1.905-.257-.34-.488-.807-.73-1.303-.248-.501-.825-1.676-1.155-1.78.002.006-.161.056-.458.395-1.176 1.34-2.71 1.873-4.101 1.422-1.638-.527-2.757-2.298-2.991-4.735-.44-4.565-1.732-7.349-2.343-7.658-.112.079-.49.424-.953 1.703-.707 1.958-1.102 3.694-1.45 5.228-.869 3.81-1.553 6.819-6.206 9.18a1 1 0 0 1-.905-1.782c3.817-1.936 4.322-4.16 5.162-7.842.361-1.588.772-3.39 1.522-5.464.292-.804 1.178-3.257 3.05-3.021 3.15.398 4.022 8.537 4.11 9.463.153 1.594.772 2.753 1.615 3.025.622.2 1.345-.106 1.99-.84.7-.804 1.45-1.161 2.223-1.057 1.353.18 2.088 1.675 2.681 2.877.19.389.388.79.528.972.42.553 1.807 1.328 2.59 1.161.13-.026.371-.078.507-.631.556-2.265 1.688-3.108 2.538-3.415 1.173-.422 2.587-.115 3.888.845 3.38 2.5 6.36 3.895 6.39 3.91a1 1 0 0 1-.421 1.907z",
    fill: "#4F80FF"
  }));
};

pen.defaultProps = {
  width: "60",
  height: "60",
  viewBox: "0 0 60 60",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var logo = function logo(props) {
  return __jsx("svg", props, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M24.228 39.517l.008-.013.007-.013c1.146-2.006 2.383-3.668 3.694-5.017a1985.07 1985.07 0 0 0 4.212-4.349c.67-.693 1.252-1.343 1.69-1.92.215-.285.452-.627.65-1 .148-.282.511-1.006.511-1.945 0-1.732-.99-2.993-1.69-3.705-.964-1.028-2.34-1.857-4.076-1.857-1.033 0-1.842.422-2.2.624a9.195 9.195 0 0 0-1.264.884c-.772.629-1.665 1.492-2.651 2.526l-.009.009-.008.008c-2.036 2.164-4.396 4.994-7.076 8.477 2.186-9.235 3.305-17.11 3.305-23.585a9.08 9.08 0 0 0-1.34-4.756c-.359-.646-.828-1.34-1.455-1.915-.67-.615-1.722-1.265-3.106-1.265-.895 0-2.69.2-3.833 1.81-.518.706-.705 1.446-.787 1.88a8.26 8.26 0 0 0-.128 1.533c0 5.513-.69 11.773-2.104 18.798-1.435 7.133-2.863 13.217-4.28 18.267-.727 2.566-1.28 4.612-1.656 6.123a43.757 43.757 0 0 0-.441 1.932C.114 51.486 0 52.107 0 52.663c0 1.378.39 2.666 1.005 3.825l.057.108.064.103c.7 1.119 2.094 2.679 4.368 2.679a4.46 4.46 0 0 0 1.992-.494c.464-.232.872-.52 1.212-.792.671-.537 1.358-1.24 2.042-2.02.84-.93 2.12-2.476 3.822-4.614.823 1.305 1.884 2.511 3.14 3.616l.011.01.011.009c2.89 2.498 6.043 4.285 9.34 4.285.866 0 2.082-.112 3.184-.78 1.376-.836 2.107-2.25 2.107-3.765 0-1.57-.913-2.622-1.367-3.076-.522-.523-1.149-.953-1.741-1.306a68.576 68.576 0 0 0-3.425-2.026c-.7-.408-1.446-1.059-2.21-2.062-.538-.74-.821-1.584-.821-2.654 0-.96.352-2.332 1.437-4.192z",
    fill: "url(#b)",
    filter: "url(#a)"
  }), __jsx("defs", null, __jsx("filter", {
    id: "a",
    x: "-2.024",
    y: ".705",
    width: "37.024",
    height: "58.875",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "BackgroundImageFix",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", {
    dx: "-2.024",
    dy: ".202"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "1.315"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.0991562 0 0 0 0 0.0869792 0 0 0 0 0.695833 0 0 0 0.3 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect1_innerShadow"
  })), __jsx("linearGradient", {
    id: "b",
    x1: ".049",
    y1: "15.376",
    x2: "25.707",
    y2: "20.853",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  }))));
};

logo.defaultProps = {
  width: "35",
  height: "60",
  viewBox: "0 0 35 60",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var logoFull = function logoFull(props) {
  return __jsx("svg", props, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.826 33.064l-.007.01c-.932 1.586-1.235 2.755-1.235 3.573 0 .912.244 1.631.706 2.262.657.855 1.298 1.41 1.899 1.757a59.116 59.116 0 0 1 2.943 1.727c.51.3 1.048.667 1.496 1.112.39.387 1.175 1.285 1.175 2.622 0 1.29-.628 2.496-1.81 3.208-.947.57-1.993.665-2.737.665-2.832 0-5.542-1.523-8.026-3.652l-.009-.008-.01-.008c-1.079-.941-1.99-1.97-2.698-3.08-1.462 1.82-2.562 3.138-3.284 3.93-.588.666-1.178 1.265-1.755 1.722a5.936 5.936 0 0 1-1.041.675c-.378.188-.976.421-1.712.421-1.954 0-3.152-1.33-3.753-2.283l-.056-.088-.049-.092C.336 46.55 0 45.452 0 44.277c0-.473.098-1.002.172-1.376.09-.45.22-1.004.38-1.646.322-1.288.798-3.032 1.423-5.219 1.217-4.302 2.444-9.487 3.678-15.566C6.868 14.484 7.46 9.15 7.46 4.45c0-.409.024-.86.11-1.306.07-.37.23-1 .675-1.601C9.23.17 10.772 0 11.541 0c1.188 0 2.092.554 2.668 1.078.54.49.943 1.081 1.251 1.632a7.69 7.69 0 0 1 1.152 4.053c0 5.518-.962 12.229-2.84 20.099 2.302-2.969 4.33-5.38 6.08-7.224l.007-.008.007-.007c.848-.881 1.615-1.617 2.278-2.153a7.908 7.908 0 0 1 1.087-.753c.307-.172 1.002-.532 1.89-.532 1.492 0 2.674.707 3.503 1.583.602.607 1.452 1.681 1.452 3.157 0 .8-.312 1.417-.44 1.657-.17.319-.373.61-.559.853-.375.492-.876 1.045-1.45 1.636-1.091 1.12-2.298 2.355-3.62 3.706-1.127 1.15-2.19 2.566-3.175 4.275l-.006.012zm5.694-13.295c-.427-.463-.893-.694-1.398-.694-.467 0-1.516.848-3.148 2.544-2.657 2.8-6.043 7.036-10.16 12.71a342.7 342.7 0 0 0-3.226 4.529c-.689.982-1.395 1.999-2.118 3.05l.227-.707a241.004 241.004 0 0 0 2.45-8.144c3.034-10.802 4.55-19.567 4.55-26.294a4.759 4.759 0 0 0-.59-2.312 5.433 5.433 0 0 0-.167-.29c-.467-.847-.933-1.27-1.4-1.27-.466 0-.776.115-.932.346-.155.193-.233.597-.233 1.214 0 .32-.003.641-.008.966 0 .033 0 .067-.002.1-.082 4.66-.7 9.834-1.855 15.524-1.244 6.127-2.487 11.387-3.73 15.78-1.244 4.354-1.866 6.84-1.866 7.457 0 .616.175 1.252.525 1.907.388.616.816.925 1.282.925.466 0 1.244-.617 2.332-1.85.392-.43.918-1.043 1.58-1.841l.024-.03.514-.625.136-.168a237.933 237.933 0 0 0 1.877-2.335 471.388 471.388 0 0 0 2.572-3.267v.636c0 1.098.238 2.152.714 3.16.56 1.186 1.448 2.31 2.666 3.372 1.35 1.157 2.613 1.974 3.788 2.45a7.203 7.203 0 0 0 1.39.411c.322.058.636.087.942.087 1.088 0 1.632-.328 1.632-.983 0-.347-.427-.77-1.282-1.272a42.124 42.124 0 0 0-.692-.428c-.23-.14-.468-.28-.71-.423-.462-.27-.947-.545-1.454-.825-1.01-.578-1.943-1.426-2.798-2.543-.855-1.156-1.282-2.486-1.282-3.989 0-1.502.544-3.179 1.632-5.028 1.088-1.889 2.293-3.507 3.614-4.856 1.32-1.349 2.526-2.582 3.613-3.7 1.088-1.117 1.633-1.83 1.633-2.138 0-.347-.214-.732-.642-1.156zM23.424 44.21s-.007.002-.024.003c.015-.003.024-.003.024-.003z",
    fill: "url(#a)"
  }), __jsx("path", {
    d: "M35.37 46.058c-.6 0-1.098-.165-1.497-.495-.377-.352-.566-.847-.566-1.485V31.344c0-.638.189-1.122.566-1.451.399-.33.898-.495 1.497-.495.598 0 1.097.165 1.497.495.399.33.598.813.598 1.451v12.734c0 .638-.2 1.133-.599 1.485-.399.33-.898.495-1.496.495zm0-19.596c-.755 0-1.353-.198-1.797-.594-.443-.418-.665-.957-.665-1.617s.222-1.187.665-1.583c.444-.396 1.042-.594 1.797-.594.731 0 1.32.198 1.763.594.465.396.698.924.698 1.583 0 .66-.222 1.199-.665 1.617-.444.396-1.042.594-1.796.594z",
    fill: "url(#b)"
  }), __jsx("path", {
    d: "M50.391 42.99c1.109.066 1.663.56 1.663 1.484 0 .528-.221.935-.665 1.22-.421.265-1.031.375-1.83.33l-.898-.065c-3.725-.264-5.588-2.244-5.588-5.939V32.83h-1.664c-.598 0-1.064-.132-1.397-.396-.31-.264-.465-.649-.465-1.155s.155-.89.465-1.154c.333-.264.799-.396 1.397-.396h1.664v-3.035c0-.594.188-1.067.565-1.419.377-.352.887-.528 1.53-.528.621 0 1.12.176 1.497.528.377.352.566.825.566 1.419v3.035h2.828c.598 0 1.053.132 1.363.395.333.264.5.65.5 1.155 0 .506-.167.89-.5 1.155-.31.264-.765.396-1.363.396H47.23v7.488c0 1.628.754 2.497 2.262 2.607l.898.066z",
    fill: "url(#c)"
  }), __jsx("path", {
    d: "M64.788 46.058c-.598 0-1.097-.165-1.496-.495-.378-.352-.566-.847-.566-1.485V24.383c0-.637.188-1.121.566-1.451.399-.33.898-.495 1.496-.495.6 0 1.098.165 1.497.495.4.33.6.814.6 1.451v19.695c0 .638-.2 1.133-.6 1.485-.399.33-.898.495-1.496.495z",
    fill: "url(#d)"
  }), __jsx("path", {
    d: "M83.257 41.44c.376 0 .676.142.898.428.244.286.366.67.366 1.155 0 .681-.41 1.253-1.231 1.715a11.71 11.71 0 0 1-2.562 1.023c-.953.242-1.863.363-2.727.363-2.617 0-4.69-.748-6.221-2.244-1.53-1.495-2.296-3.54-2.296-6.136 0-1.65.333-3.112.999-4.388.665-1.275 1.596-2.265 2.794-2.969 1.22-.703 2.594-1.055 4.125-1.055 1.463 0 2.739.319 3.825.956 1.087.638 1.93 1.54 2.528 2.706.6 1.165.899 2.54.899 4.123 0 .946-.422 1.419-1.264 1.419h-9.814c.133 1.517.566 2.64 1.298 3.365.731.704 1.796 1.056 3.193 1.056.71 0 1.33-.088 1.863-.264a17.805 17.805 0 0 0 1.863-.726c.665-.352 1.153-.528 1.463-.528zM77.5 32.234c-1.13 0-2.04.352-2.727 1.056-.665.703-1.065 1.715-1.198 3.035h7.518c-.044-1.342-.377-2.354-.998-3.035-.62-.704-1.486-1.056-2.595-1.056z",
    fill: "url(#e)"
  }), __jsx("path", {
    d: "M104.683 29.332c1.952 0 3.404.55 4.358 1.65.954 1.099 1.43 2.76 1.43 4.98v8.116c0 .616-.188 1.1-.565 1.452-.355.352-.854.528-1.497.528-.643 0-1.153-.176-1.53-.528-.377-.352-.566-.836-.566-1.452v-7.884c0-1.254-.244-2.167-.732-2.739-.465-.571-1.208-.857-2.228-.857-1.198 0-2.163.374-2.895 1.121-.71.748-1.064 1.749-1.064 3.002v7.357c0 .616-.189 1.1-.566 1.452-.377.352-.887.528-1.53.528s-1.153-.176-1.53-.528c-.355-.352-.532-.836-.532-1.452V31.311c0-.572.188-1.034.565-1.385.377-.352.887-.528 1.53-.528.577 0 1.043.176 1.398.528.377.33.565.77.565 1.32v.89a5.61 5.61 0 0 1 2.229-2.078c.931-.484 1.985-.726 3.16-.726z",
    fill: "url(#f)"
  }), __jsx("path", {
    d: "M115.441 46.058c-.599 0-1.098-.165-1.497-.495-.377-.352-.565-.847-.565-1.485V31.344c0-.638.188-1.122.565-1.451.399-.33.898-.495 1.497-.495.599 0 1.098.165 1.497.495.399.33.599.813.599 1.451v12.734c0 .638-.2 1.133-.599 1.485-.399.33-.898.495-1.497.495zm0-19.596c-.754 0-1.353-.198-1.796-.594-.444-.418-.665-.957-.665-1.617s.221-1.187.665-1.583c.443-.396 1.042-.594 1.796-.594.732 0 1.32.198 1.763.594.466.396.699.924.699 1.583 0 .66-.222 1.199-.665 1.617-.444.396-1.043.594-1.797.594z",
    fill: "url(#g)"
  }), __jsx("path", {
    d: "M134.871 22.437c.621 0 1.131.176 1.53.528.399.352.599.814.599 1.385v19.728c0 .594-.189 1.067-.566 1.419-.377.352-.875.528-1.496.528s-1.12-.176-1.497-.528c-.377-.352-.566-.825-.566-1.419v-.825a5.158 5.158 0 0 1-2.129 2.112c-.909.506-1.952.759-3.127.759-1.397 0-2.65-.352-3.759-1.056-1.087-.704-1.94-1.694-2.561-2.97-.599-1.297-.899-2.781-.899-4.453 0-1.671.3-3.134.899-4.388.621-1.253 1.474-2.22 2.561-2.903 1.087-.681 2.34-1.022 3.759-1.022 1.175 0 2.218.242 3.127.726a5.06 5.06 0 0 1 2.096 2.045v-7.819c0-.55.177-.99.532-1.32.377-.351.876-.527 1.497-.527zm-6.154 20.487c1.331 0 2.351-.451 3.06-1.353.732-.902 1.098-2.188 1.098-3.86 0-1.671-.366-2.947-1.098-3.827-.709-.901-1.718-1.352-3.027-1.352-1.33 0-2.362.44-3.094 1.32-.731.88-1.097 2.144-1.097 3.793 0 1.672.366 2.97 1.097 3.893.732.924 1.752 1.386 3.061 1.386z",
    fill: "url(#h)"
  }), __jsx("defs", null, __jsx("linearGradient", {
    id: "a",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "b",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "c",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "d",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "e",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "f",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "g",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  })), __jsx("linearGradient", {
    id: "h",
    x1: ".194",
    y1: "12.502",
    x2: "53.733",
    y2: "64.995",
    gradientUnits: "userSpaceOnUse"
  }, __jsx("stop", {
    stopColor: "#CC95DF"
  }), __jsx("stop", {
    offset: "1",
    stopColor: "#4F80FF"
  }))));
};

logoFull.defaultProps = {
  width: "137",
  height: "50",
  viewBox: "0 0 137 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var search = function search(props) {
  return __jsx("svg", props, __jsx("rect", {
    x: "14",
    y: "10",
    width: "40",
    height: "40",
    rx: "10",
    fill: "#4F80FF",
    filter: "url(#a)"
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.312 22.5c-1.785 0-3.452.8-4.57 2.201-1.684 2.101-1.65 5.253.067 7.337a5.836 5.836 0 0 0 4.503 2.118 5.9 5.9 0 0 0 3.118-.9l.1-.067 3.952 3.986c.434.45 1.218.45 1.651 0 .234-.234.367-.534.367-.85 0-.318-.117-.601-.334-.835l-3.968-3.969.066-.1c1.451-2.317 1.101-5.269-.817-7.203a5.747 5.747 0 0 0-4.135-1.718zm2.935 8.771a4.14 4.14 0 0 1-2.935 1.218 4.111 4.111 0 0 1-2.935-1.218 4.14 4.14 0 0 1-1.217-2.934 4.11 4.11 0 0 1 1.217-2.935 4.14 4.14 0 0 1 2.935-1.218 4.11 4.11 0 0 1 2.935 1.218 4.14 4.14 0 0 1 1.217 2.934 4.14 4.14 0 0 1-1.217 2.935z",
    fill: "#fff"
  }), __jsx("defs", null, __jsx("filter", {
    id: "a",
    x: "0",
    y: "0",
    width: "68",
    height: "68",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, __jsx("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
  }), __jsx("feOffset", {
    dy: "4"
  }), __jsx("feGaussianBlur", {
    stdDeviation: "7"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.0533854 0 0 0 0 0.421745 0 0 0 0 0.854167 0 0 0 0.35 0"
  }), __jsx("feBlend", {
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow"
  }), __jsx("feBlend", {
    in: "SourceGraphic",
    in2: "effect1_dropShadow",
    result: "shape"
  }), __jsx("feColorMatrix", {
    in: "SourceAlpha",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), __jsx("feOffset", null), __jsx("feGaussianBlur", {
    stdDeviation: "3"
  }), __jsx("feComposite", {
    in2: "hardAlpha",
    operator: "arithmetic",
    k2: "-1",
    k3: "1"
  }), __jsx("feColorMatrix", {
    values: "0 0 0 0 0.0958333 0 0 0 0 0.282599 0 0 0 0 0.766667 0 0 0 0.6 0"
  }), __jsx("feBlend", {
    in2: "shape",
    result: "effect2_innerShadow"
  }))));
};

search.defaultProps = {
  width: "68",
  height: "68",
  viewBox: "0 0 68 68",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var timing = function timing(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M4.018 3.952c.29-.285.556-.08.843.21l3.647 3.305a.74.74 0 0 1-1.054 1.037L4.23 4.777c-.286-.291-.503-.536-.212-.825z",
    fill: "#4F80FF"
  }), __jsx("path", {
    d: "M7.992 0a.735.735 0 1 0 .08 1.462 6.532 6.532 0 1 1-4.784 2.003.733.733 0 1 0-.973-1.093A8 8 0 1 0 7.992 0z",
    fill: "#4F80FF"
  }));
};

timing.defaultProps = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var addUser = function addUser(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M28.134 20.916a13.528 13.528 0 0 1-7.639 2.371c-2.845 0-5.48-.895-7.64-2.37-3.846 1.159-6.638 4.636-6.901 8.745a16.988 16.988 0 0 1 1.633-.105c7.165 0 12.96 5.796 12.96 12.96 0 1.16-.157 2.32-.474 3.373h12.382c1 0 1.791-.79 1.844-1.792l.685-13.33a9.717 9.717 0 0 0-6.85-9.852zM20.495 19.283a9.642 9.642 0 1 0 0-19.283 9.642 9.642 0 0 0 0 19.283zM14.173 39.83h-3.847v-3.846a1 1 0 0 0-1-1H5.847a1 1 0 0 0-1 1v3.846H1A1 1 0 0 0 0 40.833v3.477a1 1 0 0 0 1.001 1h3.846v3.847a1 1 0 0 0 1.001 1.001h3.477a1 1 0 0 0 1.002-1.001V45.31h3.846a1 1 0 0 0 1-1.001v-3.477c-.052-.58-.473-1.002-1-1.002z",
    fill: "#4F80FF"
  }));
};

addUser.defaultProps = {
  width: "35",
  height: "51",
  viewBox: "0 0 35 51",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var plus = function plus(props) {
  return __jsx("svg", props, __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.782 9.215h6.433V2.782c0-3.71 5.592-3.71 5.592 0v6.433h6.433c3.68 0 3.68 5.592 0 5.592h-6.433v6.433c0 3.68-5.592 3.68-5.592 0v-6.433H2.782c-3.71 0-3.71-5.592 0-5.592z",
    fill: "#4F80FF"
  }));
};

plus.defaultProps = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};


var carrouselArrow = function carrouselArrow(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.026 28.229L1.547 31 10 15.5 1.539 0 .026 2.771 6.974 15.5.026 28.229z",
    fill: "#fff"
  }));
};

carrouselArrow.defaultProps = {
  width: "10",
  height: "31",
  viewBox: "0 0 10 31",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

// CONCATENATED MODULE: ./components/form/Icon.js
var Icon_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SIZES = {
  small: 16,
  medium: 24,
  large: 48,
  big: 67
};
const ICON_COLORS = {
  darkBlue: '#1A2E6C',
  skyBlue: '#9B7B0A',
  lightBlue: '#5379EF',
  white: '#fff',
  red: '#E02A50'
};
const iconTypes = Object.keys(icons_namespaceObject);
const colorTypes = Object.keys(ICON_COLORS);
const useStyles = Object(styles_["makeStyles"])({
  svg: {
    '& path': {
      fill: props => props.fill
    }
  }
});

const Icon = ({
  type,
  color,
  size,
  customSize,
  strokeColor,
  rotate
}) => {
  var _ICON_COLORS$color;

  const SvgIcon = icons_namespaceObject[type];
  const svgSize = SIZES[size];
  const fill = (_ICON_COLORS$color = ICON_COLORS[color]) !== null && _ICON_COLORS$color !== void 0 ? _ICON_COLORS$color : color;
  const classes = useStyles({
    fill
  }); // for some reason, using the css prop here does not work
  // console.log(typeof iconTypes, typeof colorTypes, typeof sizeTypes, sizeTypes);

  return Icon_jsx(SvgIcon, {
    className: classes.svg,
    style: _objectSpread(_objectSpread(_objectSpread({
      display: 'inline-block',
      verticalAlign: 'middle',
      fill
    }, strokeColor ? {
      stroke: strokeColor
    } : {}), customSize || {
      width: svgSize,
      height: svgSize
    }), rotate ? {
      transform: `rotate(${rotate})`
    } : {})
  });
};

Icon.defaultProps = {
  color: 'darkBlue',
  size: 'medium',
  customSize: undefined,
  strokeColor: undefined,
  rotate: undefined
};
/* harmony default export */ var form_Icon = (Icon);
// CONCATENATED MODULE: ./components/form/Btn.js
var Btn_jsx = external_react_default.a.createElement;






const Btn_useStyles = Object(styles_["makeStyles"])(theme => ({
  container: {
    width: 'fit-content',
    padding: '18px 23px',
    background: 'linear-gradient(180deg, #3563DC 0%, #3E6FEF 4.34%, #3062E3 94.05%, #154AD2 100%)',
    boxShadow: '0px 4px 14px rgba(14, 108, 218, 0.35), inset 0px 0px 6px rgba(24, 72, 196, 0.6)',
    color: 'white',
    borderRadius: '10px',
    cursor: 'pointer',
    fontSize: '1.8rem',
    fontWeight: '600',
    '& a': {
      fontStyle: 'normal',
      lineHeight: '28px',
      color: 'white'
    },
    '& svg': {
      marginRight: 20
    }
  },
  whiteColor: {
    '& a': {
      color: theme.palette.blue
    },
    color: theme.palette.blue,
    background: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)'
  }
}));

const Btn = ({
  onClick,
  href,
  text,
  iconType,
  iconColor,
  alignRight,
  whiteColor
}) => {
  const classes = Btn_useStyles();
  const className = !whiteColor ? classes.container : external_clsx_default()(classes.container, classes.whiteColor);
  return Btn_jsx(core_["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center",
    className: className,
    style: alignRight ? {
      marginLeft: 'auto'
    } : {},
    onClick: onClick
  }, iconType ? Btn_jsx(form_Icon, {
    type: iconType,
    color: iconColor
  }) : '', href ? Btn_jsx(link_default.a, {
    href: href
  }, Btn_jsx("a", null, text)) : Btn_jsx("span", null, text));
};

Btn.defaultProps = {
  href: '',
  iconColor: undefined,
  iconType: undefined,
  alignRight: false,
  whiteColor: false
};
/* harmony default export */ var form_Btn = (Btn);
// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// CONCATENATED MODULE: ./components/form/Modal.js
var Modal_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */







const Modal_useStyles = Object(styles_["makeStyles"])({
  container: {
    padding: '4rem 10rem'
  },
  close: {
    position: 'absolute',
    top: 35,
    right: 35,
    cursor: 'pointer'
  },
  contentContainer: {
    display: 'inline-block',
    width: '100%',
    margin: '0 auto 1rem',
    padding: '4rem 0 5rem',
    borderBottom: '1px solid #C1CDE7'
  },
  btnContainer: {
    marginTop: 30,
    '& > div:first-of-type': {
      paddingRight: 11,
      '& div': {
        marginLeft: 'auto'
      }
    },
    '& > div:last-of-type': {
      paddingLeft: 11
    }
  }
});

const Modal = (_ref) => {
  let {
    children,
    openModal,
    onClose,
    title,
    showActions = true,
    onClick,
    confirmText = 'Confirmer'
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "openModal", "onClose", "title", "showActions", "onClick", "confirmText"]);

  const theme = Object(styles_["useTheme"])();
  const fullScreen = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const classes = Modal_useStyles();
  return Modal_jsx(Dialog_default.a, _extends({
    fullScreen: fullScreen,
    open: openModal,
    onClose: onClose,
    "aria-labelledby": "responsive-dialog-title",
    disableBackdropClick: true,
    fullWidth: true,
    overlaystyle: {
      background: `linear-gradient(109.69deg, rgba(204, 149, 223, 0.3) 6.69%,
          rgba(79, 128, 255, 0.3) 63.14%)`
    },
    maxWidth: "lg"
  }, props), Modal_jsx("div", {
    className: classes.close,
    onClick: onClose
  }, Modal_jsx(form_Icon, {
    type: "close"
  })), Modal_jsx("div", {
    className: classes.container
  }, title ? Modal_jsx(core_["Typography"], {
    variant: "h2",
    className: "text-center"
  }, title) : '', Modal_jsx("div", {
    className: classes.contentContainer
  }, children), showActions && Modal_jsx(core_["Grid"], {
    container: true,
    justify: "center",
    className: classes.btnContainer
  }, Modal_jsx(core_["Grid"], {
    item: true,
    md: 6
  }, Modal_jsx(form_Btn, {
    text: "Annuler",
    whiteColor: true,
    onClick: onClose
  })), Modal_jsx(core_["Grid"], {
    item: true,
    md: 6
  }, Modal_jsx(form_Btn, {
    text: confirmText,
    onClick: onClick
  })))));
};

Modal.defaultProps = {
  title: '',
  openModal: false,
  showActions: true,
  confirmText: 'Confirmer'
};
/* harmony default export */ var form_Modal = (Modal);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./components/form/Input.js
var Input_jsx = external_react_default.a.createElement;






const styles = theme => ({
  container: {
    '& input': {
      display: 'block',
      padding: '3rem 1.4rem',
      boxSizing: 'border-box',
      width: '100%',
      height: '38px',
      borderRadius: '6px',
      border: 'solid 1px #c7cfd6',
      fontFamily: 'Rubik',
      fontSize: '1.6rem',
      fontWeight: '600',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 'normal',
      letterSpacing: 'normal',
      color: '#1A2E6C'
    },
    '& input:focus': {
      boxShadow: '0px 4px 10px 3px rgba(0, 0, 0, 0.11)',
      border: '1px solid #4F80FF'
    },
    '& h4': {
      margin: '2rem 0 1rem',
      color: '#526190'
    }
  },
  left: {
    paddingRight: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      paddingRight: 0
    }
  },
  right: {
    paddingLeft: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0
    }
  }
});

const positionType = ['left', 'right'];
const InputType = Object(styles_["withStyles"])(styles)(({
  name,
  label,
  type,
  onChange,
  value,
  position,
  placeholder,
  classes
}) => Input_jsx(core_["Grid"], {
  item: true,
  md: position ? 6 : 12,
  className: position ? external_clsx_default()(classes.container, classes[position]) : classes.container
}, label ? Input_jsx(core_["Typography"], {
  variant: "h4"
}, label) : '', Input_jsx("input", {
  value: value,
  onChange: onChange(name),
  type: type,
  placeholder: placeholder
})));
InputType.propTypes = {
  name: external_prop_types_default.a.string.isRequired,
  onChange: external_prop_types_default.a.func.isRequired,
  classes: external_prop_types_default.a.object.isRequired,
  type: external_prop_types_default.a.string,
  placeholder: external_prop_types_default.a.string,
  label: external_prop_types_default.a.string,
  value: external_prop_types_default.a.string,
  position: external_prop_types_default.a.oneOf(positionType)
};
InputType.defaultProps = {
  label: undefined,
  type: 'text',
  value: null,
  placeholder: '',
  position: null,
  classes: {}
};
/* harmony default export */ var Input = (InputType);
// CONCATENATED MODULE: ./components/form/Select.js
var Select_jsx = external_react_default.a.createElement;





const Select_styles = theme => ({
  container: {
    '& p': {
      fontFamily: 'Open Sans',
      textAlign: 'left',
      margin: '2rem 0 1rem',
      fontSize: '1.8rem',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: '28px',
      color: 'rgba(26, 46, 108, 0.75)'
    },
    '& select': {
      padding: '2.27rem 1.4rem',
      fontSize: '1.4rem',
      color: '#8e97a1'
    }
  },
  formControl: {
    minWidth: 120,
    width: '100%',
    fontSize: '2rem',
    margin: 0,
    '& > div': {
      borderRadius: '10px'
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  left: {
    paddingRight: '1.3rem'
  },
  right: {
    paddingLeft: '1.3rem'
  }
});

const NativeSelects = ({
  name,
  onChange,
  value,
  position,
  list,
  label,
  classes
}) => Select_jsx(core_["Grid"], {
  item: true,
  md: position ? 6 : 12,
  xs: 12,
  className: position ? external_clsx_default()(classes.container, classes[position]) : classes.container
}, Select_jsx(core_["FormControl"], {
  variant: "outlined",
  className: classes.formControl
}, label ? Select_jsx("p", null, label) : '', Select_jsx(core_["Select"], {
  native: true,
  autoWidth: true,
  value: value,
  onChange: onChange(name),
  inputProps: {
    name
  }
}, list === null || list === void 0 ? void 0 : list.map(elem => Select_jsx("option", {
  key: elem.name,
  value: elem.value
}, elem.name)))));

NativeSelects.defaultProps = {
  label: '',
  value: '',
  position: '',
  list: null
};
/* harmony default export */ var Select = (Object(styles_["withStyles"])(Select_styles)(NativeSelects));
// EXTERNAL MODULE: external "react-mde"
var external_react_mde_ = __webpack_require__("op+O");
var external_react_mde_default = /*#__PURE__*/__webpack_require__.n(external_react_mde_);

// EXTERNAL MODULE: external "showdown"
var external_showdown_ = __webpack_require__("4ugE");

// EXTERNAL MODULE: ./components/form/formElement.js
var formElement = __webpack_require__("Djy0");

// EXTERNAL MODULE: ./node_modules/react-mde/lib/styles/css/react-mde-all.css
var react_mde_all = __webpack_require__("yCiI");

// CONCATENATED MODULE: ./components/form/Wysiwyg.js
var Wysiwyg_jsx = external_react_default.a.createElement;






const WysiwygComp = ({
  value,
  onChange,
  label,
  showLabel
}) => {
  const {
    0: tab,
    1: setTab
  } = Object(external_react_["useState"])('write');
  const converter = new external_showdown_["Converter"]({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });
  return Wysiwyg_jsx(formElement["a" /* FormElementWrapper */], {
    label: label,
    showLabel: showLabel
  }, Wysiwyg_jsx("span", {
    className: "container"
  }, Wysiwyg_jsx(external_react_mde_default.a, {
    onChange: value => onChange(value),
    onTabChange: setTab,
    value: value,
    generateMarkdownPreview: markdown => Promise.resolve(converter.makeHtml(markdown)),
    selectedTab: tab
  })));
};

/* harmony default export */ var Wysiwyg = (WysiwygComp);
// CONCATENATED MODULE: ./components/form/index.js







/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TRTU");


/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Djy0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementWrapper; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const labelDimension = {
  xs: 6,
  ms: 12
};
let className;
const defaultDimension = {
  xs: 12,
  ms: 12
};

const IconDisplay = ({
  src,
  fullIcon,
  withGrayScaleIcon
}) => __jsx("div", {
  className: "jsx-568689068" + " " + `${fullIcon ? 'fullIcon' : ''} ${withGrayScaleIcon ? 'withGrayScaleIcon' : ''}`
}, __jsx("img", {
  src: src,
  alt: "",
  className: "jsx-568689068" + " " + "elem-icon"
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "568689068"
}, [".fullIcon.jsx-568689068{width:100%;padding:5px;}", ".fullIcon.jsx-568689068 img.jsx-568689068{display:block;width:100%;}", ".withGrayScaleIcon.jsx-568689068 img.jsx-568689068{-webkit-filter:grayscale(1);filter:grayscale(1);}"]));

const LableWrapper = (_ref) => {
  let {
    value,
    label,
    labelPosition = '',
    icon,
    fullIcon,
    withGrayScaleIcon
  } = _ref,
      props = _objectWithoutProperties(_ref, ["value", "label", "labelPosition", "icon", "fullIcon", "withGrayScaleIcon"]);

  if (labelPosition.includes && labelPosition.includes('top')) labelDimension.xs = 12;
  if (labelPosition.includes && labelPosition.includes('left')) className = 'text-left'; // for all mobile
  // labelDimension.xs = 12

  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    justify: "space-between",
    alignItems: "center",
    alignContent: "center"
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true
  }, labelDimension, {
    className: `label-container ${className}`
  }), icon && __jsx(IconDisplay, {
    src: icon,
    fullIcon: fullIcon,
    withGrayScaleIcon: withGrayScaleIcon && !value
  }), __jsx("span", {
    className: "form-label-container",
    style: _objectSpread({}, props.labelStyle)
  }, label)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true
  }, labelDimension), props.children));
};

const FormElementWrapper = (_ref2) => {
  let {
    value,
    showLabel = false,
    icon,
    fullIcon,
    withGrayScaleIcon
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["value", "showLabel", "icon", "fullIcon", "withGrayScaleIcon"]);

  if (showLabel) return __jsx(LableWrapper, _extends({}, props, {
    icon: icon
  }));
  return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    item: true,
    container: true,
    alignItems: "center",
    justify: "space-between"
  }, defaultDimension), icon && __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 1
  }, icon && __jsx(IconDisplay, {
    src: icon,
    fullIcon: fullIcon,
    withGrayScaleIcon: withGrayScaleIcon && !value
  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: icon ? 11 : 12,
    className: icon ? 'input-icon-wrapper' : ''
  }, props.children));
};



/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "MrI4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return signUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logOut; });
/* unused harmony export getBookDetailApiMethod */
/* unused harmony export getChapterDetailApiMethod */
/* harmony import */ var _sendRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lFNj");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BASE_PATH = '/api/v1/public';
const signIn = args => Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(`/auth/signin`, {
  body: JSON.stringify(args)
});
const signUp = args => Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(`/auth/signup`, {
  body: JSON.stringify(args)
});
const logOut = () => Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(`/auth/logout`, {
  method: 'GET'
});
const getBookDetailApiMethod = ({
  slug
}) => Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(`${BASE_PATH}/books/${slug}`, {
  method: 'GET'
});
const getChapterDetailApiMethod = ({
  bookSlug,
  chapterSlug
}, options = {}) => Object(_sendRequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(`${BASE_PATH}/get-chapter-detail?bookSlug=${bookSlug}&chapterSlug=${chapterSlug}`, _objectSpread({
  method: 'GET'
}, options));

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Nv5c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ withAuth; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/form/index.js + 7 modules
var components_form = __webpack_require__("5cZU");

// CONCATENATED MODULE: ./components/admin/Sidebar.js
var __jsx = external_react_default.a.createElement;



const menuList = [{
  title: 'UTILISATEURS',
  menu: [{
    slug: 'List',
    name: 'Location',
    path: '/admin',
    iconType: 'house'
  }]
}, {
  title: 'ADMINISTRATIONS',
  menu: [{
    slug: 'partners',
    name: 'Offres partenaires',
    path: '/admin/partners',
    iconType: 'house'
  }]
}];

const Sidebar = ({
  notifications = {}
}) => {
  return __jsx("div", {
    id: "sidebar"
  }, __jsx("ul", null, menuList.map(({
    title,
    menu
  }, index) => __jsx("li", {
    key: index
  }, __jsx("h2", null, title), __jsx("ul", null, menu.map(({
    slug,
    name,
    path,
    iconType
  }, i) => __jsx(link_default.a, {
    href: path,
    exact: true,
    activeClassName: "active",
    key: i
  }, __jsx("li", null, __jsx("h3", null, __jsx(components_form["b" /* Icon */], {
    type: iconType,
    color: "lightBlue"
  }), __jsx("span", {
    className: "link-title"
  }, name), notifications[slug] ? __jsx("span", {
    className: "info"
  }, notifications[slug]) : '')))))))));
};

/* harmony default export */ var admin_Sidebar = (Sidebar);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./static/img/icons/calendr.png
var calendr = __webpack_require__("so46");
var calendr_default = /*#__PURE__*/__webpack_require__.n(calendr);

// EXTERNAL MODULE: ./lib/api/public.js
var api_public = __webpack_require__("MrI4");

// EXTERNAL MODULE: ./static/img/logo.png
var logo = __webpack_require__("oWhS");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./components/StudentSidebar.js
var StudentSidebar_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */

/* eslint-disable jsx-a11y/anchor-is-valid */











const UpdateProfile = ({
  handleChange,
  handleSumbit,
  openModal,
  onClose,
  values = {}
}) => StudentSidebar_jsx(components_form["d" /* Modal */], {
  openModal: openModal,
  onClose: onClose,
  onClick: handleSumbit,
  title: "Vos informations",
  confirmText: "Mettre \xE0 jour"
}, StudentSidebar_jsx(core_["Grid"], {
  container: true,
  item: true,
  justify: "center",
  className: "form-container"
}, StudentSidebar_jsx(core_["Grid"], {
  container: true,
  item: true
}, StudentSidebar_jsx(components_form["c" /* Input */], {
  value: values.lastName,
  label: "Nom*",
  onChange: handleChange,
  name: "lastName",
  position: "left"
}), StudentSidebar_jsx(components_form["c" /* Input */], {
  value: values.firstName,
  label: "Pr\xE9nom*",
  onChange: handleChange,
  name: "firstName",
  position: "right"
}), StudentSidebar_jsx(components_form["c" /* Input */], {
  value: values.email,
  label: "E-mail*",
  onChange: handleChange,
  name: "email",
  type: "email",
  position: "left"
}), StudentSidebar_jsx(components_form["c" /* Input */], {
  value: values.phone,
  label: "T\xE9l\xE9phone",
  onChange: handleChange,
  name: "phone",
  type: "phone",
  position: "right"
}), StudentSidebar_jsx(components_form["c" /* Input */], {
  value: values.password,
  label: "Mot de passe",
  placeholder: "Votre mot de passe",
  onChange: handleChange,
  name: "password",
  type: "password",
  position: "left"
}), StudentSidebar_jsx(components_form["e" /* Select */], {
  name: "status",
  value: values.status,
  onChange: handleChange,
  label: "Status",
  position: "right",
  list: [{
    name: 'Etudiant',
    value: 'student'
  }, {
    name: 'Jeune Travailleur',
    value: 'worker'
  }]
}))));

const useStyles = Object(styles_["makeStyles"])(theme => ({
  container: {
    height: 'calc(100vh - 60px)',
    padding: '3rem 0 0'
  },
  logoContainer: {
    marginBottom: '40px',
    width: '100%',
    textAlign: 'center',
    '& img': {
      width: 35
    }
  },
  navContainer: {
    width: '100%',
    '& > div .active-nav-link': {
      backgroundColor: 'rgba(79, 128, 255, 0.19)',
      border: '1px solid #c1cde7'
    },
    '& > div a': {
      display: 'flex',
      marginBottom: '9px',
      padding: 'calc(2rem - 6px)',
      width: '100%',
      alignItems: 'center',
      textAlign: 'left',
      borderRadius: '13px',
      border: '1px solid transparent',
      cursor: 'pointer'
    },
    '& > div span': {
      marginLeft: '25px',
      color: '#1a2e6c',
      fontFamily: 'Open Sans',
      fontWeight: 'bold',
      fontSize: '1.7rem'
    },
    '& > div .active-nav-link span': {
      color: '#4f80ff'
    },
    '& > div .active-nav-link svg path': {
      fill: '#4f80ff'
    },
    '& > div svg path': {
      fill: '#1a2e6c'
    }
  },
  contextMenu: {
    marginBottom: '1.5rem',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    textAlign: 'left',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '1.6rem',
    lineHeight: '22px',
    cursor: 'pointer'
  },
  logoutBtn: {
    marginBottom: '1.5rem',
    color: '#eb5757'
  },
  profileContainer: {
    position: 'relative',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '15px',
    cursor: 'pointer',
    maxWidth: 235,
    '& svg:first-of-type': {},
    '& svg:last-of-type': {
      position: 'absolute',
      top: '50%',
      right: '10px',
      width: '12px!important',
      transform: 'translateY(calc(50% - 13px)) rotate(180deg)'
    }
  },
  userName: {
    width: 'calc(100% - 30px)',
    marginRight: 'auto',
    padding: '0 10px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  userPictureContainer: {
    width: 50,
    paddingRight: 10
  },
  userPicture: {
    maxWidth: 40,
    borderRadius: '100%'
  },
  mobileContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0px 4px 13px rgba(0, 0, 0, 0.1)',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: '.5rem 3rem',
    zIndex: 10,
    '& > div a': {
      display: 'inline-block',
      width: 'fit-content',
      marginBottom: 0,
      textAlign: 'center'
    },
    '& > div .active-nav-link': {
      backgroundColor: 'initial',
      border: 'none',
      textAlign: 'center'
    },
    '& > div .active-nav-link p': {
      fontWeight: 'bold',
      color: '#4F80FF'
    },
    '& > div p': {
      margin: '4px 0 6px',
      fontSize: 10
    },
    '& span': {
      display: 'block'
    },
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  },
  calendar: {
    '& img': {
      width: 20
    }
  },
  sponsorship: {
    width: '100%',
    '& > div': {
      padding: '1.5rem 0',
      width: '100%'
    },
    '& svg': {
      marginRight: '1.5rem'
    },
    '& span': {
      fontSize: 14
    }
  },
  activeLink: {
    backgroundColor: 'rgba(79, 128, 255, 0.19)',
    border: '1px solid #c1cde7',
    '& svg path': {
      fill: '#4f80ff!important'
    },
    '& span': {
      color: `${theme.palette.newBlue}!important`
    }
  }
}));
const MenuItems = [{
  href: '/dashboard',
  iconType: 'home',
  txt: 'Accueil'
}, {
  href: '/dashboard/bookmark',
  iconType: 'heart',
  txt: 'Favoris'
}, {
  href: '/dashboard/sponsorship',
  iconType: 'sponsorship',
  txt: 'Parrainage'
}];
const MobileMenu = () => {
  const classes = useStyles();
  const {
    asPath
  } = Object(router_["useRouter"])();
  return StudentSidebar_jsx(core_["Grid"], {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: external_clsx_default()(classes.navContainer, classes.mobileContainer)
  }, MenuItems === null || MenuItems === void 0 ? void 0 : MenuItems.map(({
    href,
    txt,
    iconType
  }) => StudentSidebar_jsx(core_["Grid"], {
    key: href,
    item: true
  }, StudentSidebar_jsx(link_default.a, {
    href: href
  }, StudentSidebar_jsx("a", {
    className: asPath === href ? classes.activeLink : null
  }, StudentSidebar_jsx(components_form["b" /* Icon */], {
    type: iconType
  }), StudentSidebar_jsx("p", null, txt))))), StudentSidebar_jsx(core_["Grid"], {
    item: true,
    className: classes.calendar
  }, StudentSidebar_jsx(link_default.a, {
    href: "#"
  }, StudentSidebar_jsx("a", null, StudentSidebar_jsx("div", null, StudentSidebar_jsx("img", {
    src: calendr_default.a,
    alt: ""
  })), StudentSidebar_jsx("p", null, "Rendez-vous")))));
};
const logoSize = {
  width: 37
};

const StudentProfile = ({
  user
}) => {
  const {
    0: showSubMenu,
    1: setShowSubMenu
  } = Object(external_react_["useState"])(false);
  const {
    0: openModal,
    1: setOpenModal
  } = Object(external_react_["useState"])(false);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(user);
  const {
    asPath
  } = Object(router_["useRouter"])();

  const handleChange = name => ({
    target: {
      value
    }
  }) => setState(_objectSpread(_objectSpread({}, state), {}, {
    [name]: value
  }));

  const handleModalClose = () => setOpenModal(false);

  const handleOpenModal = () => setOpenModal(true);

  const toggleShowSubMenu = () => setShowSubMenu(!showSubMenu); // eslint-disable-next-line no-return-assign


  const handleLogOut = () => Object(api_public["a" /* logOut */])().then(() => window.location = '/login');

  const handleSumbit = () => {
    handleModalClose();
    console.log('Submit');
  };

  const classes = useStyles();
  return StudentSidebar_jsx("div", {
    id: "sidebar"
  }, StudentSidebar_jsx(core_["Grid"], {
    container: true,
    direction: "column",
    justify: "space-between",
    className: classes.container
  }, StudentSidebar_jsx(core_["Grid"], {
    container: true
  }, StudentSidebar_jsx(core_["Grid"], {
    className: classes.logoContainer
  }, StudentSidebar_jsx(link_default.a, {
    href: "/dashboard"
  }, StudentSidebar_jsx("a", null, StudentSidebar_jsx("img", {
    src: logo_default.a,
    alt: ""
  })))), StudentSidebar_jsx(core_["Grid"], {
    className: classes.navContainer
  }, MenuItems === null || MenuItems === void 0 ? void 0 : MenuItems.map(({
    href,
    txt,
    iconType
  }) => StudentSidebar_jsx(core_["Grid"], {
    key: href,
    container: true,
    alignItems: "center"
  }, StudentSidebar_jsx(link_default.a, {
    href: href
  }, StudentSidebar_jsx("a", {
    className: asPath === href ? classes.activeLink : null
  }, StudentSidebar_jsx(components_form["b" /* Icon */], {
    type: iconType
  }), StudentSidebar_jsx("span", null, txt)))))), StudentSidebar_jsx("div", {
    className: classes.sponsorship
  }, StudentSidebar_jsx(components_form["a" /* Btn */], {
    text: "Prendre rendez-vous",
    iconType: "calendar",
    onClick: () => console.log('Implement calendly')
  }))), StudentSidebar_jsx("div", null, showSubMenu && StudentSidebar_jsx("div", {
    className: classes.contextMenu
  }, StudentSidebar_jsx("div", {
    onClick: handleLogOut,
    className: classes.logoutBtn
  }, "D\xE9connexion"), StudentSidebar_jsx("div", {
    onClick: handleOpenModal
  }, "Modifier vos informations")), StudentSidebar_jsx(core_["Grid"], {
    container: true,
    alignItems: "center",
    justify: "space-between",
    className: classes.profileContainer,
    onClick: toggleShowSubMenu
  }, StudentSidebar_jsx(components_form["b" /* Icon */], {
    type: "user"
  }), StudentSidebar_jsx(core_["Typography"], {
    variant: "subtitle1",
    className: classes.userName
  }, `${state === null || state === void 0 ? void 0 : state.firstName} ${state === null || state === void 0 ? void 0 : state.lastName}`), StudentSidebar_jsx(components_form["b" /* Icon */], {
    type: "triangle",
    size: "small"
  }))), StudentSidebar_jsx(UpdateProfile, {
    values: state,
    handleChange: handleChange,
    handleSumbit: handleSumbit,
    openModal: openModal,
    onClose: handleModalClose
  })));
};

/* harmony default export */ var StudentSidebar = (StudentProfile);
// CONCATENATED MODULE: ./lib/AuthWrapper.js

var AuthWrapper_jsx = external_react_default.a.createElement;




 // import AdminHeader from '../components/admin/Header';

const styles = theme => ({
  studentContainer: {
    padding: '0 3rem',
    [theme.breakpoints.down('md')]: {
      margin: 'auto'
    }
  }
});

const StudentSidebarComp = Object(styles_["withStyles"])(styles)(({
  children,
  user,
  classes
}) => AuthWrapper_jsx(core_["Grid"], {
  container: true,
  className: "admin-container student-container"
}, AuthWrapper_jsx(core_["Grid"], {
  container: true,
  item: true,
  xs: 12,
  className: "content"
}, AuthWrapper_jsx(Hidden_default.a, {
  smDown: true
}, AuthWrapper_jsx(core_["Grid"], {
  item: true,
  smup: "true",
  sm: 2
}, AuthWrapper_jsx(StudentSidebar, {
  user: user
}))), AuthWrapper_jsx(Hidden_default.a, {
  mdUp: true
}, AuthWrapper_jsx(MobileMenu, {
  user: user
})), AuthWrapper_jsx(core_["Grid"], {
  item: true,
  xs: 12,
  sm: 10,
  className: classes.studentContainer
}, children))));
const AdminSidebarComp = ({
  children
}) => AuthWrapper_jsx(core_["Grid"], {
  container: true,
  className: "admin-container"
}, AuthWrapper_jsx(core_["Grid"], {
  item: true,
  xs: 2
}, AuthWrapper_jsx(admin_Sidebar, null)), AuthWrapper_jsx(core_["Grid"], {
  item: true,
  xs: 10,
  className: "content"
}, AuthWrapper_jsx(core_["Grid"], {
  item: true,
  xs: 12
}, children)));
// CONCATENATED MODULE: ./lib/withAuth.jsx
var withAuth_jsx = external_react_default.a.createElement;





router_default.a.events.on('routeChangeStart', () => {
  external_nprogress_["start"]();
});
router_default.a.events.on('routeChangeComplete', url => {
  if (window && process.env.GA_MEASUREMENT_ID) {
    window.gtag('config', process.env.GA_MEASUREMENT_ID, {
      page_path: url
    });
  }

  external_nprogress_["done"]();
});
router_default.a.events.on('routeChangeError', () => external_nprogress_["done"]());
let globalUser = null;
function withAuth(BaseComponent, {
  loginRequired = true,
  logoutRequired = false,
  adminRequired = false
} = {}) {
  class App extends external_react_default.a.Component {
    static async getInitialProps(ctx) {
      const isFromServer = true;
      const user = ctx.req ? ctx.req.user && ctx.req.user : globalUser;

      if (isFromServer && user) {
        user._id = user._id.toString();
      }

      const props = {
        user,
        isFromServer
      };

      if (BaseComponent.getInitialProps) {
        Object.assign(props, (await BaseComponent.getInitialProps(ctx)) || {});
      }

      return props;
    }

    componentDidMount() {
      const {
        user,
        isFromServer
      } = this.props;

      if (isFromServer) {
        globalUser = user;
      }

      if (loginRequired && !logoutRequired && !user) {
        router_default.a.push('/public/login', '/login');
        return;
      }

      if (adminRequired && (!user || !user.isAdmin)) {
        router_default.a.push('/customer/my-books', '/my-books');
      }

      if (logoutRequired && user) {
        router_default.a.push('/');
      }
    }

    render() {
      const {
        user
      } = this.props;

      if (loginRequired && !logoutRequired && !user) {
        return null;
      }

      if (adminRequired && (!user || !user.isAdmin)) {
        return null;
      }

      if (logoutRequired && user) {
        return null;
      }

      if (!user) return withAuth_jsx(BaseComponent, this.props);
      if (user !== null && user !== void 0 && user.isAdmin || (user === null || user === void 0 ? void 0 : user.role) === 'admin') return withAuth_jsx(external_react_default.a.Fragment, null, withAuth_jsx(AdminSidebarComp, {
        user: user
      }, withAuth_jsx(BaseComponent, this.props)));
      return withAuth_jsx(external_react_default.a.Fragment, null, withAuth_jsx(StudentSidebarComp, {
        user: user
      }, withAuth_jsx(BaseComponent, this.props)));
    }

  }

  const propTypes = {
    user: external_prop_types_default.a.shape({
      id: external_prop_types_default.a.string,
      isAdmin: external_prop_types_default.a.bool
    }),
    isFromServer: external_prop_types_default.a.bool.isRequired
  };
  const defaultProps = {
    user: null
  };
  App.defaultProps = defaultProps;
  return App;
}

/***/ }),

/***/ "OTFr":
/***/ (function(module, exports, __webpack_require__) {

const {
  format,
  differenceInYears
} = __webpack_require__("9BML");

const isArray = arr => Array.isArray(arr);

const isObject = arg => (typeof arg === 'object' || typeof arg === 'function') && arg !== null;

const toDate = date => format(new Date(date), 'dd/MM/yyyy');

const isMajor = age => differenceInYears(new Date(age), new Date()) >= 18;

const ucfirst = name => name.charAt(0).toUpperCase() + name.slice(1);

const isValidateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const toFormData = (form = {}) => {
  const formData = new FormData();
  Object.keys(form).forEach(key => formData.append(key, form[key]));
  return formData;
};

const toggleArray = (array, name) => {
  let found = false;
  if (!isArray(array) || !name && name !== '0') return array;
  const data = array.filter(elem => {
    if (elem === name) found = true;
    return elem !== name;
  });
  if (!found) data.push(name);
  return data;
};

const pick = (object, keys) => keys.reduce((obj, key) => {
  if (object && Object.prototype.hasOwnProperty.call(object, key)) {
    // eslint-disable-next-line no-param-reassign
    obj[key] = object[key];
  }

  return obj;
}, {});

module.exports = {
  toDate,
  isMajor,
  isArray,
  isObject,
  ucfirst,
  toFormData,
  isValidateEmail,
  pick,
  toggleArray
};

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TRTU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("yY0l");
/* harmony import */ var _helpers_convertAndCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("OTFr");
/* harmony import */ var _helpers_convertAndCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_convertAndCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_withAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Nv5c");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("5cZU");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var FirstDivider = function FirstDivider(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M.5 19.5c16.833-6 60.4-14.4 100 0s71.167-6.667 82-19",
    stroke: "#8C97B6",
    strokeLinecap: "round",
    strokeDasharray: "2 4"
  }));
};

FirstDivider.defaultProps = {
  width: "183",
  height: "25",
  viewBox: "0 0 183 25",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var SecondDivider = function SecondDivider(props) {
  return __jsx("svg", props, __jsx("path", {
    d: "M1 37.5c16.833-6 35.575-13.026 75.5-26.5C116.5-2.5 165-7 177 29",
    stroke: "#8C97B6",
    strokeLinecap: "round",
    strokeDasharray: "2 4"
  }));
};

SecondDivider.defaultProps = {
  width: "178",
  height: "38",
  viewBox: "0 0 178 38",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  tutorialConainer: {
    background: '#F0F3F9',
    boxShadow: '0px 4px 20px rgba(24, 55, 50, 0.04)',
    borderRadius: '25px',
    marginTop: '3.2rem',
    padding: '4rem',
    '& > div > div > div': {
      height: '100px',
      width: '100px',
      borderRadius: '100%',
      margin: 'auto',
      background: '#f4f5f7',
      boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.25)'
    },
    '& > p': {
      margin: '.8rem 0 4.2rem'
    },
    '& h3': {
      margin: '2.4rem 0 .8rem',
      textAlign: 'center'
    },
    '& > div > div > svg': {
      display: 'block',
      width: '100%',
      marginTop: '50px',
      transform: 'translateY(-75%)'
    }
  },
  formContainer: {
    marginTop: '3.8rem',
    padding: '4rem',
    backgroundColor: 'white',
    boxShadow: '0px 4px 13px rgb(0 0 0 / 10%), inset 0px -3px 10px rgb(149 149 149 / 20%)',
    borderRadius: 15,
    '& > h3': {
      marginBottom: '2rem'
    },
    '& > div:last-of-type': {
      marginTop: '1.6rem',
      '& > div': {
        [theme.breakpoints.down('sm')]: {
          margin: 'auto'
        }
      }
    }
  }
}));

const PartnerPage = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    email: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = name => ({
    target: {
      value
    }
  }) => setState(_objectSpread(_objectSpread({}, state), {}, {
    [name]: value
  }));

  const classes = useStyles();
  return __jsx(_components_wrapper__WEBPACK_IMPORTED_MODULE_3__[/* AdminContentWrapper */ "a"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h1"
  }, "Parrainer l\u2019un de vos proches"), __jsx("div", {
    className: classes.tutorialConainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h2"
  }, "Faites d\xE9couvrir Kit le nid \xE0 vos proches et recevez 800\u20AC"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "Aidez vos proches \xE0 concr\xE9tiser leur projet immobilier. Votre code parrain :", __jsx("strong", null, "FD32DJ")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 2,
    className: "text-center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center"
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Icon */ "b"], {
    type: "addUser",
    color: "lightBlue",
    size: "large"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, "Etapes 01"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "Renseigner les coordon\xE9s de votre contact ci-dessous.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 2
  }, __jsx(FirstDivider, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 2,
    className: "text-center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center"
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Icon */ "b"], {
    type: "phone",
    color: "lightBlue",
    size: "large"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, "Etapes 02"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "Nous prenons contact avec lui pour lui pr\xE9senter nos offres.")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 2
  }, __jsx(SecondDivider, null)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    item: true,
    md: 2,
    className: "text-center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    justify: "center",
    alignItems: "center"
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Icon */ "b"], {
    type: "pen",
    color: "lightBlue",
    size: "big"
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, "Etapes 03"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "D\xE8s sa signature chez le notaire, vous percevrez 800\u20AC par virement.")))), __jsx("div", {
    className: classes.formContainer
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "h3"
  }, "Inviter vos proches"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    container: true,
    item: true,
    justify: "center"
  }, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "c"], {
    label: "Pr\xE9nom*",
    onChange: handleChange,
    name: "firstName",
    position: "left"
  }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "c"], {
    label: "Nom*",
    onChange: handleChange,
    name: "lastName",
    position: "right"
  }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "c"], {
    label: "E-mail*",
    onChange: handleChange,
    name: "email",
    type: "email",
    position: "left"
  }), __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Input */ "c"], {
    label: "T\xE9l\xE9phone",
    onChange: handleChange,
    name: "phone",
    type: "phone",
    position: "right"
  })), __jsx("div", null, __jsx(_components_form__WEBPACK_IMPORTED_MODULE_6__[/* Btn */ "a"], {
    text: `Parrainer ${Object(_helpers_convertAndCheck__WEBPACK_IMPORTED_MODULE_4__["ucfirst"])(state.firstName)}`
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withAuth__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(PartnerPage));

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const localeDomain = (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "lFNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const {
  ROOT_URL
} = __webpack_require__("obyI");

async function sendRequest(path, options = {}, extra) {
  const headers = _objectSpread(_objectSpread({}, options.headers || {}), extra ? {} : {
    'Content-type': 'application/json; charset=UTF-8'
  });

  const response = await fetch(`${ROOT_URL}${path}`, _objectSpread(_objectSpread({
    method: 'POST',
    credentials: 'same-origin'
  }, options), {}, {
    headers
  }));
  let data;

  try {
    data = await response.json();
  } catch (error) {
    throw new Error(error);
  }

  return data;
}

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oWhS":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "obyI":
/***/ (function(module, exports, __webpack_require__) {

const dotenv = __webpack_require__("qW5S");

dotenv.config();
const {
  JWT_SECRET,
  NODE_ENV,
  MONGO_URL_TEST,
  MONGO_URL_PROD,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  SESSION_NAME,
  COOKIE_DOMAIN
} = process.env;
const PORT = process.env.PORT || 3000;
const ROOT_URL = 'http://212.47.235.69:3000' || false;
const SESSION_SECRET = process.env.SESSION_SECRET || 'M87kjdsfs876d98hdshhfjsecret';
const dev = NODE_ENV !== 'production';
const MONGO_URL = dev ? MONGO_URL_TEST : MONGO_URL_PROD;
module.exports = {
  PORT,
  ROOT_URL,
  NEXT_PUBLIC_PORT: PORT,
  MONGO_URL,
  JWT_SECRET,
  dev,
  SESSION_NAME,
  SESSION_SECRET,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CLIENT_ID,
  COOKIE_DOMAIN
};

/***/ }),

/***/ "op+O":
/***/ (function(module, exports) {

module.exports = require("react-mde");

/***/ }),

/***/ "qW5S":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "so46":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "yCiI":
/***/ (function(module, exports) {



/***/ }),

/***/ "yY0l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminContentWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const styles = theme => ({
  container: {
    width: 'calc(100% - 100px)',
    margin: 'auto',
    padding: '5.6rem 0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      paddingTop: '3.6rem',
      paddingBottom: 95
    }
  },
  redirect: {
    display: 'inline-block',
    marginBottom: '3.2rem',
    textAlign: 'left',
    color: '#8692a6',
    cursor: 'pointer',
    fontWeight: 'bold',
    '&::before': {
      content: "''",
      border: '1px solid #8692a6',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: '3px',
      marginRight: '1rem',
      transform: 'rotate(135deg);-webkit-transform: rotate(135deg)'
    }
  }
});

const AdminContentWrapper = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(({
  classes,
  children,
  redirectDashboard,
  redirectUri = '/dashboard',
  redirectText = 'Revenir à l’accueil'
}) => __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
  className: classes.container
}, redirectDashboard ? __jsx("div", {
  className: "text-left"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: redirectUri
}, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
  variant: "h4",
  className: classes.redirect
}, redirectText))) : '', children));


/***/ })

/******/ });