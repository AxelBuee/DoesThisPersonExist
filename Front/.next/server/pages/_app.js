module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/identification.jsx":
/*!***************************************!*\
  !*** ./components/identification.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/react-bootstrap */ "./node_modules/react-bootstrap/cjs/index.js");
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Axel\\Documents\\ESIEE\\Architecture\\DoesThisPersonExist\\Front\\components\\identification.jsx";




const Identification = props => {
  const {
    islogged
  } = props; //savoir si le mec est loggé

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: isRedirected,
    1: setIsRedirected
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!islogged && router.pathname !== "/" && router.pathname !== "/login" && router.pathname !== "/sign-up") {
      router.push('/');
      setIsRedirected(true);
    } else if (islogged && (router.pathname == "/" || router.pathname == "/login" && router.pathname == "/sign-up")) {
      router.push('/profil');
    }
  }, [router.pathname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: isRedirected && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      variant: "danger",
      children: "Please login or signup before accessing the game !"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Identification);

/***/ }),

/***/ "./components/menu.jsx":
/*!*****************************!*\
  !*** ./components/menu.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/react-bootstrap */ "./node_modules/react-bootstrap/cjs/index.js");
/* harmony import */ var _node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\Axel\\Documents\\ESIEE\\Architecture\\DoesThisPersonExist\\Front\\components\\menu.jsx";



const Menu = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [(router.pathname == "/" || router.pathname == "/login" || router.pathname == "/sign-up") && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      bg: "white",
      expand: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
        href: "/",
        children: "Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          className: "mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
            href: "/login",
            children: "Log in"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
            href: "/sign-up",
            children: "Sign up"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 21
    }, undefined), router.pathname !== "/" && router.pathname !== "/login" && router.pathname !== "/sign-up" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
      bg: "white",
      expand: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
        href: "/game/play",
        children: "Play"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Toggle, {
        "aria-controls": "basic-navbar-nav"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Collapse, {
        id: "basic-navbar-nav",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
          className: "mr-auto",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
            href: "/profil",
            children: "Profil"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 33
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_node_modules_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
            href: "/",
            children: "Log out"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 29
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 25
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/AbstractNav.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/AbstractNav.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! dom-helpers/querySelectorAll */ "dom-helpers/querySelectorAll"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useForceUpdate */ "@restart/hooks/useForceUpdate"));

var _useMergedRefs = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useMergedRefs */ "@restart/hooks/useMergedRefs"));

var _NavContext = _interopRequireDefault(__webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/cjs/NavContext.js"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _TabContext = _interopRequireDefault(__webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/cjs/TabContext.js"));

// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

var AbstractNav = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);
  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  var forceUpdate = (0, _useForceUpdate.default)();
  var needsRefocusRef = (0, _react.useRef)(false);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var tabContext = (0, _react.useContext)(_TabContext.default);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = (0, _react.useRef)(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    var currentListNode = listNode.current;
    if (!currentListNode) return null;
    var items = (0, _querySelectorAll.default)(currentListNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = currentListNode.querySelector('.active');
    if (!activeChild) return null;
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0, _react.useEffect)(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = (0, _useMergedRefs.default)(ref, listNode);
  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, /*#__PURE__*/_react.default.createElement(_NavContext.default.Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});

var _default = AbstractNav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/AbstractNavItem.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/AbstractNavItem.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _NavContext = _interopRequireDefault(__webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/cjs/NavContext.js"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var defaultProps = {
  disabled: false
};

var AbstractNavItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "className", "eventKey", "onSelect", "onClick", "as"]);
  var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(navKey);
    var contextControlledId = navContext.getControlledId(navKey);
     true ? (0, _warning.default)(!contextControllerId || !props.id, "[react-bootstrap] The provided id '" + props.id + "' was overwritten by the current navContext with '" + contextControllerId + "'.") : undefined;
     true ? (0, _warning.default)(!contextControlledId || !props['aria-controls'], "[react-bootstrap] The provided aria-controls value '" + props['aria-controls'] + "' was overwritten by the current navContext with '" + contextControlledId + "'.") : undefined;
    props['data-rb-event-key'] = navKey;
    props.id = contextControllerId || props.id;
    props['aria-controls'] = contextControlledId || props['aria-controls'];
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    if (props.disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    props['aria-selected'] = isActive;
  }

  var handleOnclick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: (0, _classnames.default)(className, isActive && 'active')
  }));
});

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Accordion.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Accordion.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _AccordionToggle = _interopRequireDefault(__webpack_require__(/*! ./AccordionToggle */ "./node_modules/react-bootstrap/cjs/AccordionToggle.js"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _AccordionCollapse = _interopRequireDefault(__webpack_require__(/*! ./AccordionCollapse */ "./node_modules/react-bootstrap/cjs/AccordionCollapse.js"));

var _AccordionContext = _interopRequireDefault(__webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/cjs/AccordionContext.js"));

var Accordion = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  var finalClassName = (0, _classnames.default)(className, (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion'));
  return /*#__PURE__*/_react.default.createElement(_AccordionContext.default.Provider, {
    value: activeKey || null
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: onSelect || null
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: finalClassName
  }), children)));
});

Accordion.displayName = 'Accordion';
Accordion.Toggle = _AccordionToggle.default;
Accordion.Collapse = _AccordionCollapse.default;
var _default = Accordion;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/AccordionCollapse.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/AccordionCollapse.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Collapse = _interopRequireDefault(__webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/cjs/Collapse.js"));

var _AccordionContext = _interopRequireDefault(__webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/cjs/AccordionContext.js"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var AccordionCollapse = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "eventKey"]);
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default); // Empty SelectableContext is to prevent elements in the collapse
  // from collapsing the accordion when clicked.

  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/_react.default.createElement("div", null, _react.default.Children.only(children))));
});

AccordionCollapse.displayName = 'AccordionCollapse';
var _default = AccordionCollapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/AccordionContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/AccordionContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var context = /*#__PURE__*/_react.default.createContext(null);

context.displayName = 'AccordionContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/AccordionToggle.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/AccordionToggle.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useAccordionToggle = useAccordionToggle;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _AccordionContext = _interopRequireDefault(__webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/cjs/AccordionContext.js"));

function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default);
  var onSelect = (0, _react.useContext)(_SelectableContext.default);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}

var AccordionToggle = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "children", "eventKey", "onClick"]);
  var accordionOnClick = useAccordionToggle(eventKey, onClick);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});

var _default = AccordionToggle;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Alert.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Alert.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

var _CloseButton = _interopRequireDefault(__webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/cjs/CloseButton.js"));

var _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/cjs/divWithClassName.js"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
var AlertHeading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var AlertLink = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
var defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};

var Alert = /*#__PURE__*/_react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    show: 'onClose'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      show = _useUncontrolled.show,
      closeLabel = _useUncontrolled.closeLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      variant = _useUncontrolled.variant,
      onClose = _useUncontrolled.onClose,
      dismissible = _useUncontrolled.dismissible,
      transition = _useUncontrolled.transition,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  var handleClose = (0, _useEventCallback.default)(function (e) {
    if (onClose) {
      onClose(false, e);
    }
  });
  var Transition = transition === true ? _Fade.default : transition;

  var alert = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    role: "alert"
  }, !Transition ? props : undefined, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    onClick: handleClose,
    label: closeLabel
  }), children);

  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/_react.default.createElement(Transition, (0, _extends2.default)({
    unmountOnExit: true
  }, props, {
    ref: undefined,
    in: show
  }), alert);
});

Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = AlertLink;
Alert.Heading = AlertHeading;
var _default = Alert;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Badge.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Badge.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  pill: false
};

var Badge = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'span' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'badge');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/BootstrapModalManager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/BootstrapModalManager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _css3 = _interopRequireDefault(__webpack_require__(/*! dom-helpers/css */ "dom-helpers/css"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__(/*! dom-helpers/querySelectorAll */ "dom-helpers/querySelectorAll"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/scrollbarSize */ "dom-helpers/scrollbarSize"));

var _ModalManager2 = _interopRequireDefault(__webpack_require__(/*! react-overlays/ModalManager */ "react-overlays/ModalManager"));

var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager = /*#__PURE__*/function (_ModalManager) {
  (0, _inheritsLoose2.default)(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    return _ModalManager.apply(this, arguments) || this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.adjustAndStore = function adjustAndStore(prop, element, adjust) {
    var _css;

    var actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    (0, _css3.default)(element, (_css = {}, _css[prop] = parseFloat((0, _css3.default)(element, prop)) + adjust + "px", _css));
  };

  _proto.restore = function restore(prop, element) {
    var value = element.dataset[prop];

    if (value !== undefined) {
      var _css2;

      delete element.dataset[prop];
      (0, _css3.default)(element, (_css2 = {}, _css2[prop] = value, _css2));
    }
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = (0, _scrollbarSize.default)();
    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('paddingRight', el, size);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, -size);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.restore('paddingRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
  };

  return BootstrapModalManager;
}(_ModalManager2.default);

exports.default = BootstrapModalManager;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Breadcrumb.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Breadcrumb.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/cjs/BreadcrumbItem.js"));

var defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};

var Breadcrumb = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'nav' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "listProps", "children", "label", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement("ol", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)(prefix, listProps == null ? void 0 : listProps.className)
  }), children));
});

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = _BreadcrumbItem.default;
var _default = Breadcrumb;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/BreadcrumbItem.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/BreadcrumbItem.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  active: false,
  linkProps: {}
};

var BreadcrumbItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      _ref$linkAs = _ref.linkAs,
      LinkComponent = _ref$linkAs === void 0 ? _SafeAnchor.default : _ref$linkAs,
      linkProps = _ref.linkProps,
      href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "children", "className", "as", "linkAs", "linkProps", "href", "title", "target"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }), active ? children : /*#__PURE__*/_react.default.createElement(LinkComponent, (0, _extends2.default)({}, linkProps, {
    href: href,
    title: title,
    target: target
  }), children));
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Button.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Button.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};

var Button = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', variant && prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      ref: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ButtonGroup.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ButtonGroup.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group'
};

var ButtonGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      toggle = _ref.toggle,
      vertical = _ref.vertical,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
var _default = ButtonGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ButtonToolbar.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ButtonToolbar.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  role: 'toolbar'
};

var ButtonToolbar = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
var _default = ButtonToolbar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Card.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Card.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/cjs/divWithClassName.js"));

var _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/cjs/CardContext.js"));

var _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/cjs/CardImg.js"));

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var CardTitle = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
var CardText = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
var CardHeader = (0, _createWithBsPrefix.default)('card-header');
var CardFooter = (0, _createWithBsPrefix.default)('card-footer');
var CardImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var defaultProps = {
  body: false
};

var Card = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/_react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
var _default = Card;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CardColumns.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CardColumns.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('card-columns');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CardContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CardContext.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var context = /*#__PURE__*/_react.default.createContext(null);

context.displayName = 'CardContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CardDeck.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CardDeck.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('card-deck');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CardGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CardGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('card-group');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CardImg.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CardImg.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  variant: null
};

var CardImg = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Carousel.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Carousel.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _useUpdateEffect = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useUpdateEffect */ "@restart/hooks/useUpdateEffect"));

var _useCommittedRef = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useCommittedRef */ "@restart/hooks/useCommittedRef"));

var _useTimeout = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useTimeout */ "@restart/hooks/useTimeout"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _transitionEnd = _interopRequireDefault(__webpack_require__(/*! dom-helpers/transitionEnd */ "dom-helpers/transitionEnd"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! react-transition-group/Transition */ "react-transition-group/Transition"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _CarouselCaption = _interopRequireDefault(__webpack_require__(/*! ./CarouselCaption */ "./node_modules/react-bootstrap/cjs/CarouselCaption.js"));

var _CarouselItem = _interopRequireDefault(__webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/cjs/CarouselItem.js"));

var _ElementChildren = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/cjs/ElementChildren.js");

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__(/*! ./triggerBrowserReflow */ "./node_modules/react-bootstrap/cjs/triggerBrowserReflow.js"));

var SWIPE_THRESHOLD = 40;
var propTypes = {
  /**
   * @default 'carousel'
   */
  bsPrefix: _propTypes.default.string,
  as: _propTypes.default.elementType,

  /**
   * Enables animation on the Carousel as it transitions between slides.
   */
  slide: _propTypes.default.bool,

  /** Cross fade slides instead of the default slide animation */
  fade: _propTypes.default.bool,

  /**
   * Show the Carousel previous and next arrows for changing the current slide
   */
  controls: _propTypes.default.bool,

  /**
   * Show a set of slide position indicators
   */
  indicators: _propTypes.default.bool,

  /**
   * Controls the current visible slide
   *
   * @controllable onSelect
   */
  activeIndex: _propTypes.default.number,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: number, event: Object | null) => void
   * ```
   *
   * @controllable activeIndex
   */
  onSelect: _propTypes.default.func,

  /**
   * Callback fired when a slide transition starts.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlide: _propTypes.default.func,

  /**
   * Callback fired when a slide transition ends.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlid: _propTypes.default.func,

  /**
   * The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle.
   */
  interval: _propTypes.default.number,

  /** Whether the carousel should react to keyboard events. */
  keyboard: _propTypes.default.bool,

  /**
   * If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.
   *
   * On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: _propTypes.default.oneOf(['hover', false]),

  /** Whether the carousel should cycle continuously or have hard stops. */
  wrap: _propTypes.default.bool,

  /**
   * Whether the carousel should support left/right swipe interactions on touchscreen devices.
   */
  touch: _propTypes.default.bool,

  /** Override the default button icon for the "previous" control */
  prevIcon: _propTypes.default.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: _propTypes.default.string,

  /** Override the default button icon for the "next" control */
  nextIcon: _propTypes.default.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: _propTypes.default.string
};
var defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  var elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

function CarouselFunc(uncontrolledProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    activeIndex: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      slide = _useUncontrolled.slide,
      fade = _useUncontrolled.fade,
      controls = _useUncontrolled.controls,
      indicators = _useUncontrolled.indicators,
      activeIndex = _useUncontrolled.activeIndex,
      onSelect = _useUncontrolled.onSelect,
      onSlide = _useUncontrolled.onSlide,
      onSlid = _useUncontrolled.onSlid,
      interval = _useUncontrolled.interval,
      keyboard = _useUncontrolled.keyboard,
      onKeyDown = _useUncontrolled.onKeyDown,
      pause = _useUncontrolled.pause,
      onMouseOver = _useUncontrolled.onMouseOver,
      onMouseOut = _useUncontrolled.onMouseOut,
      wrap = _useUncontrolled.wrap,
      touch = _useUncontrolled.touch,
      onTouchStart = _useUncontrolled.onTouchStart,
      onTouchMove = _useUncontrolled.onTouchMove,
      onTouchEnd = _useUncontrolled.onTouchEnd,
      prevIcon = _useUncontrolled.prevIcon,
      prevLabel = _useUncontrolled.prevLabel,
      nextIcon = _useUncontrolled.nextIcon,
      nextLabel = _useUncontrolled.nextLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "slide", "fade", "controls", "indicators", "activeIndex", "onSelect", "onSlide", "onSlid", "interval", "keyboard", "onKeyDown", "pause", "onMouseOver", "onMouseOut", "wrap", "touch", "onTouchStart", "onTouchMove", "onTouchEnd", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'carousel');
  var nextDirectionRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)('next'),
      direction = _useState[0],
      setDirection = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      paused = _useState2[0],
      setPaused = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      isSliding = _useState3[0],
      setIsSliding = _useState3[1];

  var _useState4 = (0, _react.useState)(activeIndex || 0),
      renderedActiveIndex = _useState4[0],
      setRenderedActiveIndex = _useState4[1];

  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }

    if (slide) {
      setIsSliding(true);
    }

    setRenderedActiveIndex(activeIndex || 0);
  }

  (0, _react.useEffect)(function () {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  var numChildren = 0;
  var activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  (0, _ElementChildren.forEach)(children, function (child, index) {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  var activeChildIntervalRef = (0, _useCommittedRef.default)(activeChildInterval);
  var prev = (0, _react.useCallback)(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  var next = (0, _useEventCallback.default)(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  });
  var elementRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      element: elementRef.current,
      prev: prev,
      next: next
    };
  }); // This is used in the setInterval, so it should not invalidate.

  var nextWhenVisible = (0, _useEventCallback.default)(function () {
    if (!document.hidden && isVisible(elementRef.current)) {
      next();
    }
  });
  var slideDirection = direction === 'next' ? 'left' : 'right';
  (0, _useUpdateEffect.default)(function () {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [renderedActiveIndex]);
  var orderClassName = prefix + "-item-" + direction;
  var directionalClassName = prefix + "-item-" + slideDirection;
  var handleEnter = (0, _react.useCallback)(function (node) {
    (0, _triggerBrowserReflow.default)(node);

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }
  }, [onSlide, renderedActiveIndex, slideDirection]);
  var handleEntered = (0, _react.useCallback)(function () {
    setIsSliding(false);

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [onSlid, renderedActiveIndex, slideDirection]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prev(event);
          return;

        case 'ArrowRight':
          event.preventDefault();
          next(event);
          return;

        default:
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [keyboard, onKeyDown, prev, next]);
  var handleMouseOver = (0, _react.useCallback)(function (event) {
    if (pause === 'hover') {
      setPaused(true);
    }

    if (onMouseOver) {
      onMouseOver(event);
    }
  }, [pause, onMouseOver]);
  var handleMouseOut = (0, _react.useCallback)(function (event) {
    setPaused(false);

    if (onMouseOut) {
      onMouseOut(event);
    }
  }, [onMouseOut]);
  var touchStartXRef = (0, _react.useRef)(0);
  var touchDeltaXRef = (0, _react.useRef)(0);
  var touchUnpauseTimeout = (0, _useTimeout.default)();
  var handleTouchStart = (0, _react.useCallback)(function (event) {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (pause === 'hover') {
      setPaused(true);
    }

    if (onTouchStart) {
      onTouchStart(event);
    }
  }, [pause, onTouchStart]);
  var handleTouchMove = (0, _react.useCallback)(function (event) {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    if (onTouchMove) {
      onTouchMove(event);
    }
  }, [onTouchMove]);
  var handleTouchEnd = (0, _react.useCallback)(function (event) {
    if (touch) {
      var touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (pause === 'hover') {
      touchUnpauseTimeout.set(function () {
        setPaused(false);
      }, interval || undefined);
    }

    if (onTouchEnd) {
      onTouchEnd(event);
    }
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  var shouldPlay = interval != null && !paused && !isSliding;
  var intervalHandleRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : next, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return function () {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, next, activeChildIntervalRef, interval, nextWhenVisible]);
  var indicatorOnClicks = (0, _react.useMemo)(function () {
    return indicators && Array.from({
      length: numChildren
    }, function (_, index) {
      return function (event) {
        if (onSelect) {
          onSelect(index, event);
        }
      };
    });
  }, [indicators, numChildren, onSelect]);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: elementRef
  }, props, {
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, _classnames.default)(className, prefix, slide && 'slide', fade && prefix + "-fade")
  }), indicators && /*#__PURE__*/_react.default.createElement("ol", {
    className: prefix + "-indicators"
  }, (0, _ElementChildren.map)(children, function (_child, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: index === renderedActiveIndex ? 'active' : undefined,
      onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: prefix + "-inner"
  }, (0, _ElementChildren.map)(children, function (child, index) {
    var isActive = index === renderedActiveIndex;
    return slide ? /*#__PURE__*/_react.default.createElement(_Transition.default, {
      in: isActive,
      onEnter: isActive ? handleEnter : undefined,
      onEntered: isActive ? handleEntered : undefined,
      addEndListener: _transitionEnd.default
    }, function (status) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
      });
    }) : /*#__PURE__*/_react.default.cloneElement(child, {
      className: (0, _classnames.default)(child.props.className, isActive && 'active')
    });
  })), controls && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (wrap || activeIndex !== 0) && /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, {
    className: prefix + "-control-prev",
    onClick: prev
  }, prevIcon, prevLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, prevLabel)), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, {
    className: prefix + "-control-next",
    onClick: next
  }, nextIcon, nextLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, nextLabel))));
}

var Carousel = /*#__PURE__*/_react.default.forwardRef(CarouselFunc);

Carousel.displayName = 'Carousel';
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = _CarouselCaption.default;
Carousel.Item = _CarouselItem.default;
var _default = Carousel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CarouselCaption.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CarouselCaption.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('carousel-caption');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CarouselItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CarouselItem.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var CarouselItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "children", "className"]);
  var finalClassName = (0, _classnames.default)(className, (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});

CarouselItem.displayName = 'CarouselItem';
var _default = CarouselItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/CloseButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/CloseButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["label", "onClick", "className"]);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    ref: ref,
    type: "button",
    className: (0, _classnames.default)('close', className),
    onClick: onClick
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label));
});

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Col.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Col.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Collapse.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Collapse.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _css = _interopRequireDefault(__webpack_require__(/*! dom-helpers/css */ "dom-helpers/css"));

var _transitionEnd = _interopRequireDefault(__webpack_require__(/*! dom-helpers/transitionEnd */ "dom-helpers/transitionEnd"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireWildcard(__webpack_require__(/*! react-transition-group/Transition */ "react-transition-group/Transition"));

var _createChainedFunction = _interopRequireDefault(__webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap/cjs/createChainedFunction.js"));

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__(/*! ./triggerBrowserReflow */ "./node_modules/react-bootstrap/cjs/triggerBrowserReflow.js"));

var _collapseStyles;

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[0]), 10) + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[_Transition.EXITED] = 'collapse', _collapseStyles[_Transition.EXITING] = 'collapsing', _collapseStyles[_Transition.ENTERING] = 'collapsing', _collapseStyles[_Transition.ENTERED] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};

var Collapse = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      className = _ref.className,
      children = _ref.children,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
      _ref$getDimensionValu = _ref.getDimensionValue,
      getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"]);

  /* Compute dimension */
  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      (0, _triggerBrowserReflow.default)(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/_react.default.createElement(_Transition.default // @ts-ignore
  , (0, _extends2.default)({
    ref: ref,
    addEndListener: _transitionEnd.default
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return /*#__PURE__*/_react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
      className: (0, _classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore


// @ts-ignore
Collapse.defaultProps = defaultProps;
var _default = Collapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Container.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Container.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  fluid: false
};

var Container = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? "" + prefix + suffix : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Dropdown.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Dropdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! react-overlays/Dropdown */ "react-overlays/Dropdown"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _DropdownItem = _interopRequireDefault(__webpack_require__(/*! ./DropdownItem */ "./node_modules/react-bootstrap/cjs/DropdownItem.js"));

var _DropdownMenu = _interopRequireDefault(__webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-bootstrap/cjs/DropdownMenu.js"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-bootstrap/cjs/DropdownToggle.js"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var DropdownHeader = (0, _createWithBsPrefix.default)('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
var DropdownDivider = (0, _createWithBsPrefix.default)('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var DropdownItemText = (0, _createWithBsPrefix.default)('dropdown-item-text', {
  Component: 'span'
});
var defaultProps = {
  navbar: false
};

var Dropdown = /*#__PURE__*/_react.default.forwardRef(function (pProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(pProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      _4 = _useUncontrolled.navbar,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"]);

  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown');
  var handleToggle = (0, _useEventCallback.default)(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document) source = 'rootClose';

    if (onToggle) {
      onToggle(nextShow, event, {
        source: source
      });
    }
  });
  var handleSelect = (0, _useEventCallback.default)(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, function (_ref) {
    var dropdownProps = _ref.props;
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, dropdownProps, {
      ref: ref,
      className: (0, _classnames.default)(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
    }));
  }));
});

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;
Dropdown.Item = _DropdownItem.default;
Dropdown.ItemText = DropdownItemText;
Dropdown.Menu = _DropdownMenu.default;
Dropdown.Toggle = _DropdownToggle.default;
var _default = Dropdown;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/DropdownButton.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/DropdownButton.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/cjs/Dropdown.js"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__(/*! ./DropdownToggle */ "./node_modules/react-bootstrap/cjs/DropdownToggle.js"));

var _DropdownMenu = _interopRequireWildcard(__webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-bootstrap/cjs/DropdownMenu.js"));

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `href` passed to the Toggle component */
  href: _propTypes.default.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables both Buttons  */
  disabled: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: _DropdownMenu.alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string,

  /** @ignore */
  variant: _propTypes.default.string,

  /** @ignore */
  size: _propTypes.default.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */

var DropdownButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      variant = _ref.variant,
      size = _ref.size,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      disabled = _ref.disabled,
      href = _ref.href,
      id = _ref.id,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuAlign", "menuRole", "renderMenuOnMount", "disabled", "href", "id"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_DropdownToggle.default, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix
  }, title), /*#__PURE__*/_react.default.createElement(_DropdownMenu.default, {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes;
var _default = DropdownButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/DropdownItem.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/DropdownItem.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _NavContext = _interopRequireDefault(__webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/cjs/NavContext.js"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var defaultProps = {
  as: _SafeAnchor.default,
  disabled: false
};

var DropdownItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-item');
  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey; // TODO: Restrict eventKey to string in v5?


  var key = (0, _SelectableContext.makeEventKey)(eventKey, href);
  var active = propActive == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : propActive;
  var handleClick = (0, _useEventCallback.default)(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: (0, _classnames.default)(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});

DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/DropdownMenu.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/DropdownMenu.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.alignPropType = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _DropdownMenu = __webpack_require__(/*! react-overlays/DropdownMenu */ "react-overlays/DropdownMenu");

var _useMergedRefs = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useMergedRefs */ "@restart/hooks/useMergedRefs"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/cjs/NavbarContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _useWrappedRefWithWarning = _interopRequireDefault(__webpack_require__(/*! ./useWrappedRefWithWarning */ "./node_modules/react-bootstrap/cjs/useWrappedRefWithWarning.js"));

var _usePopperMarginModifiers = _interopRequireDefault(__webpack_require__(/*! ./usePopperMarginModifiers */ "./node_modules/react-bootstrap/cjs/usePopperMarginModifiers.js"));

var alignDirection = _propTypes.default.oneOf(['left', 'right']);

var alignPropType = _propTypes.default.oneOfType([alignDirection, _propTypes.default.shape({
  sm: alignDirection
}), _propTypes.default.shape({
  md: alignDirection
}), _propTypes.default.shape({
  lg: alignDirection
}), _propTypes.default.shape({
  xl: alignDirection
})]);

exports.alignPropType = alignPropType;
var defaultProps = {
  align: 'left',
  alignRight: false,
  flip: true
}; // TODO: remove this hack

var DropdownMenu = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      align = _ref.align,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      showProps = _ref.show,
      renderOnMount = _ref.renderOnMount,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      popperConfig = _ref.popperConfig,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"]);
  var isNavbar = (0, _react.useContext)(_NavbarContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = (0, _usePopperMarginModifiers.default)(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      var keys = Object.keys(align);
       true ? (0, _warning.default)(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : undefined;

      if (keys.length) {
        var brkPoint = keys[0];
        var direction = align[brkPoint]; // .dropdown-menu-right is required for responsively aligning
        // left in addition to align left classes.
        // Reuse alignRight to toggle the class below.

        alignRight = direction === 'left';
        alignClasses.push(prefix + "-" + brkPoint + "-" + direction);
      }
    } else if (align === 'right') {
      alignRight = true;
    }
  }

  var _ref2 = (0, _DropdownMenu.useDropdownMenu)({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar && alignClasses.length === 0,
    popperConfig: (0, _extends2.default)({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      hasShown = _ref2.hasShown,
      placement = _ref2.placement,
      show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      close = _ref2.close,
      menuProps = _ref2.props;

  menuProps.ref = (0, _useMergedRefs.default)(popperRef, (0, _useMergedRefs.default)((0, _useWrappedRefWithWarning.default)(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = close;
    menuProps.alignRight = alignEnd;
  }

  var style = props.style;

  if (placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    style = (0, _extends2.default)({}, props.style, menuProps.style);
    props['x-placement'] = placement;
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, menuProps, {
    style: style,
    className: _classnames.default.apply(void 0, [className, prefix, show && 'show', alignEnd && prefix + "-right"].concat(alignClasses))
  }));
});

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
var _default = DropdownMenu;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/DropdownToggle.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/DropdownToggle.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "prop-types-extra/lib/isRequiredForA11y"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _DropdownToggle = __webpack_require__(/*! react-overlays/DropdownToggle */ "react-overlays/DropdownToggle");

var _useMergedRefs = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useMergedRefs */ "@restart/hooks/useMergedRefs"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/cjs/Button.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _useWrappedRefWithWarning = _interopRequireDefault(__webpack_require__(/*! ./useWrappedRefWithWarning */ "./node_modules/react-bootstrap/cjs/useWrappedRefWithWarning.js"));

var DropdownToggle = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? _Button.default : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "split", "className", "childBsPrefix", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = (0, _DropdownToggle.useDropdownToggle)(),
      toggleProps = _useDropdownToggle[0],
      toggle = _useDropdownToggle[1].toggle;

  toggleProps.ref = (0, _useMergedRefs.default)(toggleProps.ref, (0, _useWrappedRefWithWarning.default)(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    onClick: toggle,
    className: (0, _classnames.default)(className, prefix, split && prefix + "-split")
  }, toggleProps, props));
});

DropdownToggle.displayName = 'DropdownToggle';
var _default = DropdownToggle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ElementChildren.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ElementChildren.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.map = map;
exports.forEach = forEach;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  var index = 0;
  return _react.default.Children.map(children, function (child) {
    return /*#__PURE__*/_react.default.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;

  _react.default.Children.forEach(children, function (child) {
    if ( /*#__PURE__*/_react.default.isValidElement(child)) func(child, index++);
  });
}

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Fade.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Fade.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _transitionEnd = _interopRequireDefault(__webpack_require__(/*! dom-helpers/transitionEnd */ "dom-helpers/transitionEnd"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireWildcard(__webpack_require__(/*! react-transition-group/Transition */ "react-transition-group/Transition"));

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__(/*! ./triggerBrowserReflow */ "./node_modules/react-bootstrap/cjs/triggerBrowserReflow.js"));

var _fadeStyles;

var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[_Transition.ENTERING] = 'show', _fadeStyles[_Transition.ENTERED] = 'show', _fadeStyles);

var Fade = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className", "children"]);
  var handleEnter = (0, _react.useCallback)(function (node) {
    (0, _triggerBrowserReflow.default)(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(_Transition.default, (0, _extends2.default)({
    ref: ref,
    addEndListener: _transitionEnd.default
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return /*#__PURE__*/_react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
      className: (0, _classnames.default)('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});

Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
var _default = Fade;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Feedback.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Feedback.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string,

  /** Display feedback as a tooltip. */
  tooltip: _propTypes.default.bool,
  as: _propTypes.default.elementType
};

var Feedback = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'valid' : _ref$type,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type", "tooltip"]);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type + "-" + (tooltip ? 'tooltip' : 'feedback'))
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Figure.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Figure.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _FigureImage = _interopRequireDefault(__webpack_require__(/*! ./FigureImage */ "./node_modules/react-bootstrap/cjs/FigureImage.js"));

var _FigureCaption = _interopRequireDefault(__webpack_require__(/*! ./FigureCaption */ "./node_modules/react-bootstrap/cjs/FigureCaption.js"));

var Figure = (0, _createWithBsPrefix.default)('figure', {
  Component: 'figure'
});
Figure.Image = _FigureImage.default;
Figure.Caption = _FigureCaption.default;
var _default = Figure;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FigureCaption.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FigureCaption.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var FigureCaption = (0, _createWithBsPrefix.default)('figure-caption', {
  Component: 'figcaption'
});
var _default = FigureCaption;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FigureImage.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FigureImage.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Image = _interopRequireWildcard(__webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/cjs/Image.js"));

var defaultProps = {
  fluid: true
};

var FigureImage = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_Image.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, 'figure-img')
  }));
});

FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = _Image.propTypes;
FigureImage.defaultProps = defaultProps;
var _default = FigureImage;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Form.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Form.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _FormCheck = _interopRequireDefault(__webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/cjs/FormCheck.js"));

var _FormFile = _interopRequireDefault(__webpack_require__(/*! ./FormFile */ "./node_modules/react-bootstrap/cjs/FormFile.js"));

var _FormControl = _interopRequireDefault(__webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/cjs/FormControl.js"));

var _FormGroup = _interopRequireDefault(__webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/cjs/FormGroup.js"));

var _FormLabel = _interopRequireDefault(__webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/cjs/FormLabel.js"));

var _FormText = _interopRequireDefault(__webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/cjs/FormText.js"));

var _Switch = _interopRequireDefault(__webpack_require__(/*! ./Switch */ "./node_modules/react-bootstrap/cjs/Switch.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var FormRow = (0, _createWithBsPrefix.default)('form-row');
var defaultProps = {
  inline: false
};

var FormImpl = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

FormImpl.displayName = 'Form';
FormImpl.defaultProps = defaultProps;
FormImpl.Row = FormRow;
FormImpl.Group = _FormGroup.default;
FormImpl.Control = _FormControl.default;
FormImpl.Check = _FormCheck.default;
FormImpl.File = _FormFile.default;
FormImpl.Switch = _Switch.default;
FormImpl.Label = _FormLabel.default;
FormImpl.Text = _FormText.default;
var _default = FormImpl;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormCheck.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormCheck.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "prop-types-extra/lib/all"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Feedback = _interopRequireDefault(__webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/cjs/Feedback.js"));

var _FormCheckInput = _interopRequireDefault(__webpack_require__(/*! ./FormCheckInput */ "./node_modules/react-bootstrap/cjs/FormCheckInput.js"));

var _FormCheckLabel = _interopRequireDefault(__webpack_require__(/*! ./FormCheckLabel */ "./node_modules/react-bootstrap/cjs/FormCheckLabel.js"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormCheck = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      label = _ref.label,
      children = _ref.children,
      propCustom = _ref.custom,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"]);
  var custom = type === 'switch' ? true : propCustom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control'] : [bsPrefix, 'form-check'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = custom || label != null && label !== false && !children;

  var input = /*#__PURE__*/_react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled,
    as: as
  }));

  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, bsPrefix, custom && "custom-" + type, inline && bsPrefix + "-inline")
  }, children || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input, hasLabel && /*#__PURE__*/_react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && /*#__PURE__*/_react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormCheckInput.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormCheckInput.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormCheckInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      isStatic = _ref.isStatic,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-input'] : [bsPrefix, 'form-check-input'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    type: type,
    id: id || controlId,
    className: (0, _classnames.default)(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});

FormCheckInput.displayName = 'FormCheckInput';
var _default = FormCheckInput;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormCheckLabel.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormCheckLabel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormCheckLabel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-label'] : [bsPrefix, 'form-check-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

FormCheckLabel.displayName = 'FormCheckLabel';
var _default = FormCheckLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormContext.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormContext.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var FormContext = /*#__PURE__*/_react.default.createContext({
  controlId: undefined
});

var _default = FormContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormControl.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormControl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "prop-types-extra/lib/all"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _Feedback = _interopRequireDefault(__webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/cjs/Feedback.js"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormControl = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      type = _ref.type,
      size = _ref.size,
      htmlSize = _ref.htmlSize,
      id = _ref.id,
      className = _ref.className,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      custom = _ref.custom,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-control'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else if (type === 'range') {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix + "-range"] = true, _classes3);
  } else if (Component === 'select' && custom) {
    var _classes4;

    classes = (_classes4 = {}, _classes4[bsPrefix + "-select"] = true, _classes4[bsPrefix + "-select-" + size] = size, _classes4);
  } else {
    var _classes5;

    classes = (_classes5 = {}, _classes5[bsPrefix] = true, _classes5[bsPrefix + "-" + size] = size, _classes5);
  }

   true ? (0, _warning.default)(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : undefined;
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});

FormControl.displayName = 'FormControl';

var _default = Object.assign(FormControl, {
  Feedback: _Feedback.default
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormFile.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormFile.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "prop-types-extra/lib/all"));

var _Feedback = _interopRequireDefault(__webpack_require__(/*! ./Feedback */ "./node_modules/react-bootstrap/cjs/Feedback.js"));

var _FormFileInput = _interopRequireDefault(__webpack_require__(/*! ./FormFileInput */ "./node_modules/react-bootstrap/cjs/FormFileInput.js"));

var _FormFileLabel = _interopRequireDefault(__webpack_require__(/*! ./FormFileLabel */ "./node_modules/react-bootstrap/cjs/FormFileLabel.js"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormFile = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      lang = _ref.lang,
      dataBrowse = _ref['data-browse'],
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$inputAs = _ref.inputAs,
      inputAs = _ref$inputAs === void 0 ? 'input' : _ref$inputAs,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"]);

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  var type = 'file';

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;

  var input = /*#__PURE__*/_react.default.createElement(_FormFileInput.default, (0, _extends2.default)({}, props, {
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: inputAs,
    lang: lang
  }));

  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/_react.default.createElement(Component, {
    style: style,
    className: (0, _classnames.default)(className, bsPrefix, custom && "custom-" + type)
  }, children || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, custom ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input, hasLabel && /*#__PURE__*/_react.default.createElement(_FormFileLabel.default, {
    "data-browse": dataBrowse
  }, label)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hasLabel && /*#__PURE__*/_react.default.createElement(_FormFileLabel.default, null, label), input), (isValid || isInvalid) && /*#__PURE__*/_react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});

FormFile.displayName = 'FormFile';
FormFile.Input = _FormFileInput.default;
FormFile.Label = _FormFileLabel.default;
var _default = FormFile;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormFileInput.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormFileInput.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormFileInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      lang = _ref.lang,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var type = 'file';

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-input'] : [bsPrefix, 'form-control-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    id: id || controlId,
    type: type,
    lang: lang,
    className: (0, _classnames.default)(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  }));
});

FormFileInput.displayName = 'FormFileInput';
var _default = FormFileInput;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormFileLabel.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormFileLabel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormFileLabel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-label'] : [bsPrefix, 'form-file-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, bsPrefix),
    "data-browse": props['data-browse']
  }));
});

FormFileLabel.displayName = 'FormFileLabel';
var _default = FormFileLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');
  var context = (0, _react.useMemo)(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
});

FormGroup.displayName = 'FormGroup';
var _default = FormGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormLabel.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormLabel.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/cjs/Col.js"));

var _FormContext = _interopRequireDefault(__webpack_require__(/*! ./FormContext */ "./node_modules/react-bootstrap/cjs/FormContext.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  column: false,
  srOnly: false
};

var FormLabel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'label' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');
  var columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = columnClass + " " + columnClass + "-" + column;
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && columnClass);
   true ? (0, _warning.default)(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : undefined;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/_react.default.createElement(_Col.default, (0, _extends2.default)({
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    _react.default.createElement(Component, (0, _extends2.default)({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/FormText.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/FormText.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var FormText = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      muted = _ref.muted,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as", "muted"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix, muted && 'text-muted')
  }));
});

FormText.displayName = 'FormText';
var _default = FormText;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Image.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Image.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.propTypes = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
exports.propTypes = propTypes;
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var Image = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'img');
  var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Image.displayName = 'Image';
Image.defaultProps = defaultProps;
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/InputGroup.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/InputGroup.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var InputGroupAppend = (0, _createWithBsPrefix.default)('input-group-append');
var InputGroupPrepend = (0, _createWithBsPrefix.default)('input-group-prepend');
var InputGroupText = (0, _createWithBsPrefix.default)('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/_react.default.createElement(InputGroupText, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/_react.default.createElement(InputGroupText, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "size", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'input-group');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});

InputGroup.displayName = 'InputGroup';
var InputGroupWithExtras = (0, _extends2.default)({}, InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox,
  Append: InputGroupAppend,
  Prepend: InputGroupPrepend
});
var _default = InputGroupWithExtras;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Jumbotron.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Jumbotron.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  fluid: false
};

var Jumbotron = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "fluid", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
var _default = Jumbotron;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ListGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ListGroup.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _AbstractNav = _interopRequireDefault(__webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/cjs/AbstractNav.js"));

var _ListGroupItem = _interopRequireDefault(__webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/cjs/ListGroupItem.js"));

var defaultProps = {
  variant: undefined,
  horizontal: undefined
};

var ListGroup = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      horizontal = _useUncontrolled.horizontal,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["className", "bsPrefix", "variant", "horizontal", "as"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'list-group');
  var horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-" + horizontal;
  } else {
    horizontalVariant = null;
  }

   true ? (0, _warning.default)(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : undefined;
  return /*#__PURE__*/_react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    as: as,
    className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant, horizontalVariant && bsPrefix + "-" + horizontalVariant)
  }));
});

ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = _ListGroupItem.default;
var _default = ListGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ListGroupItem.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ListGroupItem.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _AbstractNavItem = _interopRequireDefault(__webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/cjs/AbstractNavItem.js"));

var _SelectableContext = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js");

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};

var ListGroupItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'list-group-item');
  var handleClick = (0, _react.useCallback)(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/_react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    // TODO: Restrict eventKey to string in v5?
    eventKey: (0, _SelectableContext.makeEventKey)(eventKey, props.href) // eslint-disable-next-line no-nested-ternary
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: (0, _classnames.default)(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});

ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
var _default = ListGroupItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Media.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Media.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var MediaBody = (0, _createWithBsPrefix.default)('media-body');

var Media = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'media');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

Media.displayName = 'Media';
Media.Body = MediaBody;
var _default = Media;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Modal.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Modal.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _addEventListener = _interopRequireDefault(__webpack_require__(/*! dom-helpers/addEventListener */ "dom-helpers/addEventListener"));

var _canUseDOM = _interopRequireDefault(__webpack_require__(/*! dom-helpers/canUseDOM */ "dom-helpers/canUseDOM"));

var _ownerDocument = _interopRequireDefault(__webpack_require__(/*! dom-helpers/ownerDocument */ "dom-helpers/ownerDocument"));

var _removeEventListener = _interopRequireDefault(__webpack_require__(/*! dom-helpers/removeEventListener */ "dom-helpers/removeEventListener"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/scrollbarSize */ "dom-helpers/scrollbarSize"));

var _useCallbackRef2 = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useCallbackRef */ "@restart/hooks/useCallbackRef"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _useWillUnmount = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useWillUnmount */ "@restart/hooks/useWillUnmount"));

var _transitionEnd = _interopRequireDefault(__webpack_require__(/*! dom-helpers/transitionEnd */ "dom-helpers/transitionEnd"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Modal = _interopRequireDefault(__webpack_require__(/*! react-overlays/Modal */ "react-overlays/Modal"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _BootstrapModalManager = _interopRequireDefault(__webpack_require__(/*! ./BootstrapModalManager */ "./node_modules/react-bootstrap/cjs/BootstrapModalManager.js"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

var _ModalBody = _interopRequireDefault(__webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/cjs/ModalBody.js"));

var _ModalContext = _interopRequireDefault(__webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/cjs/ModalContext.js"));

var _ModalDialog = _interopRequireDefault(__webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/cjs/ModalDialog.js"));

var _ModalFooter = _interopRequireDefault(__webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/cjs/ModalFooter.js"));

var _ModalHeader = _interopRequireDefault(__webpack_require__(/*! ./ModalHeader */ "./node_modules/react-bootstrap/cjs/ModalHeader.js"));

var _ModalTitle = _interopRequireDefault(__webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/cjs/ModalTitle.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog.default
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}

function BackdropTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}
/* eslint-enable no-use-before-define */


var Modal = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      style = _ref.style,
      dialogClassName = _ref.dialogClassName,
      contentClassName = _ref.contentClassName,
      children = _ref.children,
      Dialog = _ref.dialogAs,
      ariaLabelledby = _ref['aria-labelledby'],
      show = _ref.show,
      animation = _ref.animation,
      backdrop = _ref.backdrop,
      keyboard = _ref.keyboard,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onShow = _ref.onShow,
      onHide = _ref.onHide,
      container = _ref.container,
      autoFocus = _ref.autoFocus,
      enforceFocus = _ref.enforceFocus,
      restoreFocus = _ref.restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onExited = _ref.onExited,
      backdropClassName = _ref.backdropClassName,
      propsManager = _ref.manager,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"]);

  var _useState = (0, _react.useState)({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = (0, _react.useRef)(false);
  var ignoreBackdropClickRef = (0, _react.useRef)(false);
  var removeStaticModalAnimationRef = (0, _react.useRef)(null); // TODO: what's this type

  var _useCallbackRef = (0, _useCallbackRef2.default)(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = (0, _useEventCallback.default)(onHide);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      get _modal() {
         true ? (0, _warning.default)(false, 'Accessing `_modal` is not supported and will be removed in a future release') : undefined;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = (0, _react.useMemo)(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new _BootstrapModalManager.default();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!_canUseDOM.default) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > (0, _ownerDocument.default)(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined
    });
  }

  var handleWindowResize = (0, _useEventCallback.default)(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  (0, _useWillUnmount.default)(function () {
    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);

    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  var handleDialogMouseDown = function handleDialogMouseDown() {
    waitingForMouseUpRef.current = true;
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  var handleStaticModalAnimation = function handleStaticModalAnimation() {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = (0, _transitionEnd.default)(modal.dialog, function () {
      setAnimateStaticModal(false);
    });
  };

  var handleStaticBackdropClick = function handleStaticBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  var handleClick = function handleClick(e) {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide();
  };

  var handleEscapeKeyDown = function handleEscapeKeyDown(e) {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in react-overlays,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  var handleEnter = function handleEnter(node) {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (onEnter) onEnter.apply(void 0, [node].concat(args));
  };

  var handleExit = function handleExit(node) {
    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (onExit) onExit.apply(void 0, [node].concat(args));
  };

  var handleEntering = function handleEntering(node) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (onEntering) onEntering.apply(void 0, [node].concat(args)); // FIXME: This should work even when animation is disabled.

    (0, _addEventListener.default)(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (onExited) onExited.apply(void 0, args); // FIXME: This should work even when animation is disabled.

    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = (0, _react.useCallback)(function (backdropProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, backdropProps, {
      className: (0, _classnames.default)(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);
  var baseModalStyle = (0, _extends2.default)({}, style, modalStyle); // Sets `display` always block when `animation` is false

  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: (0, _classnames.default)(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/_react.default.createElement(Dialog, (0, _extends2.default)({}, props, {
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/_react.default.createElement(_ModalContext.default.Provider, {
    value: modalContext
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: show,
    ref: setModalRef,
    backdrop: backdrop,
    container: container,
    keyboard: true // Always set true - see handleEscapeKeyDown
    ,
    autoFocus: autoFocus,
    enforceFocus: enforceFocus,
    restoreFocus: restoreFocus,
    restoreFocusOptions: restoreFocusOptions,
    onEscapeKeyDown: handleEscapeKeyDown,
    onShow: onShow,
    onHide: onHide,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: onEntered,
    onExit: handleExit,
    onExiting: onExiting,
    onExited: handleExited,
    manager: getModalManager(),
    containerClassName: bsPrefix + "-open",
    transition: animation ? DialogTransition : undefined,
    backdropTransition: animation ? BackdropTransition : undefined,
    renderBackdrop: renderBackdrop,
    renderDialog: renderDialog
  }));
});

Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
Modal.Body = _ModalBody.default;
Modal.Header = _ModalHeader.default;
Modal.Title = _ModalTitle.default;
Modal.Footer = _ModalFooter.default;
Modal.Dialog = _ModalDialog.default;
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
var _default = Modal;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalBody.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('modal-body');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalContext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var ModalContext = /*#__PURE__*/_react.default.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide: function onHide() {}
});

var _default = ModalContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalDialog.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalDialog.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var ModalDialog = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(bsPrefix + "-content", contentClassName)
  }, children));
});

ModalDialog.displayName = 'ModalDialog';
var _default = ModalDialog;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalFooter.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalFooter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('modal-footer');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalHeader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _CloseButton = _interopRequireDefault(__webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/cjs/CloseButton.js"));

var _ModalContext = _interopRequireDefault(__webpack_require__(/*! ./ModalContext */ "./node_modules/react-bootstrap/cjs/ModalContext.js"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal-header');
  var context = (0, _react.useContext)(_ModalContext.default);
  var handleClick = (0, _useEventCallback.default)(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children, closeButton && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick
  }));
});

ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ModalTitle.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ModalTitle.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _divWithClassName = _interopRequireDefault(__webpack_require__(/*! ./divWithClassName */ "./node_modules/react-bootstrap/cjs/divWithClassName.js"));

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');

var _default = (0, _createWithBsPrefix.default)('modal-title', {
  Component: DivStyledAsH4
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Nav.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _all = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/all */ "prop-types-extra/lib/all"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/cjs/NavbarContext.js"));

var _CardContext = _interopRequireDefault(__webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/cjs/CardContext.js"));

var _AbstractNav = _interopRequireDefault(__webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/cjs/AbstractNav.js"));

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/cjs/NavItem.js"));

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/cjs/NavLink.js"));

var defaultProps = {
  justify: false,
  fill: false
};

var Nav = /*#__PURE__*/_react.default.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'nav');
  var navbarBsPrefix;
  var cardHeaderBsPrefix;
  var isNavbar = false;
  var navbarContext = (0, _react.useContext)(_NavbarContext.default);
  var cardContext = (0, _react.useContext)(_CardContext.default);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return /*#__PURE__*/_react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !isNavbar, _classNames[navbarBsPrefix + "-nav"] = isNavbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});

Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem.default;
Nav.Link = _NavLink.default;
var _default = Nav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var NavContext = /*#__PURE__*/_react.default.createContext(null);

NavContext.displayName = 'NavContext';
var _default = NavContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavDropdown.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavDropdown.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/cjs/Dropdown.js"));

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/cjs/NavItem.js"));

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/cjs/NavLink.js"));

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables the toggle NavLink  */
  disabled: _propTypes.default.bool,

  /** Style the toggle NavLink as active  */
  active: _propTypes.default.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string
};

var NavDropdown = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    as: _NavItem.default
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    id: id,
    eventKey: null,
    active: active,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    as: _NavLink.default
  }, title), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

NavDropdown.displayName = 'NavDropdown';
NavDropdown.propTypes = propTypes;
NavDropdown.Item = _Dropdown.default.Item;
NavDropdown.ItemText = _Dropdown.default.ItemText;
NavDropdown.Divider = _Dropdown.default.Divider;
NavDropdown.Header = _Dropdown.default.Header;
var _default = NavDropdown;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavItem.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var NavItem = /*#__PURE__*/_react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-item');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

NavItem.displayName = 'NavItem';
var _default = NavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavLink.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

var _AbstractNavItem = _interopRequireDefault(__webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/cjs/AbstractNavItem.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  disabled: false,
  as: _SafeAnchor.default
};

var NavLink = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-link');
  return /*#__PURE__*/_react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: (0, _classnames.default)(className, bsPrefix, disabled && 'disabled')
  }));
});

NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Navbar.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Navbar.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _NavbarBrand = _interopRequireDefault(__webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/cjs/NavbarBrand.js"));

var _NavbarCollapse = _interopRequireDefault(__webpack_require__(/*! ./NavbarCollapse */ "./node_modules/react-bootstrap/cjs/NavbarCollapse.js"));

var _NavbarToggle = _interopRequireDefault(__webpack_require__(/*! ./NavbarToggle */ "./node_modules/react-bootstrap/cjs/NavbarToggle.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/cjs/NavbarContext.js"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var NavbarText = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    expanded: 'onToggle'
  }),
      initialBsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'navbar');
  var handleCollapse = (0, _react.useCallback)(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      if (_onToggle) {
        _onToggle(false);
      }
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = (0, _react.useMemo)(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle && _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: !!expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Provider, {
    value: navbarContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleCollapse
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});

Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = _NavbarBrand.default;
Navbar.Toggle = _NavbarToggle.default;
Navbar.Collapse = _NavbarCollapse.default;
Navbar.Text = NavbarText;
var _default = Navbar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavbarBrand.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavbarBrand.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var NavbarBrand = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

NavbarBrand.displayName = 'NavbarBrand';
var _default = NavbarBrand;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavbarCollapse.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavbarCollapse.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Collapse = _interopRequireDefault(__webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/cjs/Collapse.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/cjs/NavbarContext.js"));

var NavbarCollapse = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
    return /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});

NavbarCollapse.displayName = 'NavbarCollapse';
var _default = NavbarCollapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavbarContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavbarContext.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var context = /*#__PURE__*/_react.default.createContext(null);

context.displayName = 'NavbarContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/NavbarToggle.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/NavbarToggle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _NavbarContext = _interopRequireDefault(__webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/cjs/NavbarContext.js"));

var defaultProps = {
  label: 'Toggle navigation'
};

var NavbarToggle = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-toggler');

  var _ref2 = (0, _react.useContext)(_NavbarContext.default) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, _classnames.default)(className, bsPrefix, !expanded && 'collapsed')
  }), children || /*#__PURE__*/_react.default.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
var _default = NavbarToggle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Overlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Overlay.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _Overlay = _interopRequireDefault(__webpack_require__(/*! react-overlays/Overlay */ "react-overlays/Overlay"));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__(/*! react-overlays/safeFindDOMNode */ "react-overlays/safeFindDOMNode"));

var _usePopperMarginModifiers = _interopRequireDefault(__webpack_require__(/*! ./usePopperMarginModifiers */ "./node_modules/react-bootstrap/cjs/usePopperMarginModifiers.js"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

var defaultProps = {
  transition: _Fade.default,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _safeFindDOMNode.default)(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef((0, _safeFindDOMNode.default)(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      outerProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "transition", "popperConfig"]);
  var popperRef = (0, _react.useRef)({});

  var _usePopperMarginModif = (0, _usePopperMarginModifiers.default)(),
      ref = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var actualTransition = transition === true ? _Fade.default : transition || null;
  return /*#__PURE__*/_react.default.createElement(_Overlay.default, (0, _extends2.default)({}, outerProps, {
    ref: ref,
    popperConfig: (0, _extends2.default)({}, popperConfig, {
      modifiers: marginModifiers.concat(popperConfig.modifiers || [])
    }),
    transition: actualTransition
  }), function (_ref2) {
    var _state$modifiersData$;

    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        update = _ref2.update,
        _ = _ref2.forceUpdate,
        placement = _ref2.placement,
        state = _ref2.state,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"]);
    wrapRefs(overlayProps, arrowProps);
    var popper = Object.assign(popperRef.current, {
      state: state,
      scheduleUpdate: update,
      placement: placement,
      outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
    });
    if (typeof overlay === 'function') return overlay((0, _extends2.default)({}, props, overlayProps, {
      placement: placement,
      show: show,
      popper: popper,
      arrowProps: arrowProps
    }));
    return /*#__PURE__*/_react.default.cloneElement(overlay, (0, _extends2.default)({}, props, overlayProps, {
      placement: placement,
      arrowProps: arrowProps,
      popper: popper,
      className: (0, _classnames.default)(overlay.props.className, !transition && show && 'show'),
      style: (0, _extends2.default)({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
var _default = Overlay;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/OverlayTrigger.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/OverlayTrigger.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _contains = _interopRequireDefault(__webpack_require__(/*! dom-helpers/contains */ "dom-helpers/contains"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useTimeout = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useTimeout */ "@restart/hooks/useTimeout"));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__(/*! react-overlays/safeFindDOMNode */ "react-overlays/safeFindDOMNode"));

var _warning = _interopRequireDefault(__webpack_require__(/*! warning */ "warning"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _Overlay = _interopRequireDefault(__webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/cjs/Overlay.js"));

var RefHolder = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react.default.Component);

function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut(handler, args, relatedNative) {
  var e = args[0];
  var target = e.currentTarget;
  var related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !(0, _contains.default)(target, related)) {
    handler.apply(void 0, args);
  }
}

var defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger(_ref) {
  var trigger = _ref.trigger,
      overlay = _ref.overlay,
      children = _ref.children,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      propsShow = _ref.show,
      _ref$defaultShow = _ref.defaultShow,
      defaultShow = _ref$defaultShow === void 0 ? false : _ref$defaultShow,
      onToggle = _ref.onToggle,
      propsDelay = _ref.delay,
      placement = _ref.placement,
      _ref$flip = _ref.flip,
      flip = _ref$flip === void 0 ? placement && placement.indexOf('auto') !== -1 : _ref$flip,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"]);
  var triggerNodeRef = (0, _react.useRef)(null);
  var timeout = (0, _useTimeout.default)();
  var hoverStateRef = (0, _react.useRef)('');

  var _useUncontrolledProp = (0, _uncontrollable.useUncontrolledProp)(propsShow, defaultShow, onToggle),
      show = _useUncontrolledProp[0],
      setShow = _useUncontrolledProp[1];

  var delay = normalizeDelay(propsDelay);

  var _ref2 = typeof children !== 'function' ? _react.default.Children.only(children).props : {},
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onClick = _ref2.onClick;

  var getTarget = (0, _react.useCallback)(function () {
    return (0, _safeFindDOMNode.default)(triggerNodeRef.current);
  }, []);
  var handleShow = (0, _react.useCallback)(function () {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  var handleHide = (0, _react.useCallback)(function () {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  var handleFocus = (0, _react.useCallback)(function () {
    handleShow();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onFocus == null ? void 0 : onFocus.apply(void 0, args);
  }, [handleShow, onFocus]);
  var handleBlur = (0, _react.useCallback)(function () {
    handleHide();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    onBlur == null ? void 0 : onBlur.apply(void 0, args);
  }, [handleHide, onBlur]);
  var handleClick = (0, _react.useCallback)(function () {
    setShow(!show);
    if (onClick) onClick.apply(void 0, arguments);
  }, [onClick, setShow, show]);
  var handleMouseOver = (0, _react.useCallback)(function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  var handleMouseOut = (0, _react.useCallback)(function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  var triggers = trigger == null ? [] : [].concat(trigger);
  var triggerProps = {};

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
     true ? (0, _warning.default)(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : undefined;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeof children === 'function' ? children((0, _extends2.default)({}, triggerProps, {
    ref: triggerNodeRef
  })) : /*#__PURE__*/_react.default.createElement(RefHolder, {
    ref: triggerNodeRef
  }, /*#__PURE__*/(0, _react.cloneElement)(children, triggerProps)), /*#__PURE__*/_react.default.createElement(_Overlay.default, (0, _extends2.default)({}, props, {
    show: show,
    onHide: handleHide,
    flip: flip,
    placement: placement,
    popperConfig: popperConfig,
    target: getTarget
  }), overlay));
}

OverlayTrigger.defaultProps = defaultProps;
var _default = OverlayTrigger;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/PageItem.js":
/*!******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/PageItem.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Last = exports.Next = exports.Ellipsis = exports.Prev = exports.First = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

/* eslint-disable react/no-multi-comp */
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};

var PageItem = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);
  var Component = active || disabled ? 'span' : _SafeAnchor.default;
  return /*#__PURE__*/_react.default.createElement("li", {
    ref: ref,
    style: style,
    className: (0, _classnames.default)(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
});

PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
var _default = PageItem;
exports.default = _default;

function createButton(name, defaultValue, label) {
  if (label === void 0) {
    label = name;
  }

  function Button(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["children"]);
    return /*#__PURE__*/_react.default.createElement(PageItem, props, /*#__PURE__*/_react.default.createElement("span", {
      "aria-hidden": "true"
    }, children || defaultValue), /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, label));
  }

  Button.displayName = name;
  return Button;
}

var First = createButton('First', '«');
exports.First = First;
var Prev = createButton('Prev', '‹', 'Previous');
exports.Prev = Prev;
var Ellipsis = createButton('Ellipsis', '…', 'More');
exports.Ellipsis = Ellipsis;
var Next = createButton('Next', '›');
exports.Next = Next;
var Last = createButton('Last', '»');
exports.Last = Last;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Pagination.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Pagination.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _PageItem = _interopRequireWildcard(__webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/cjs/PageItem.js"));

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "size"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'pagination');
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, decoratedBsPrefix, size && decoratedBsPrefix + "-" + size)
  }), children);
});

Pagination.First = _PageItem.First;
Pagination.Prev = _PageItem.Prev;
Pagination.Ellipsis = _PageItem.Ellipsis;
Pagination.Item = _PageItem.default;
Pagination.Next = _PageItem.Next;
Pagination.Last = _PageItem.Last;
var _default = Pagination;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Popover.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Popover.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _PopoverTitle = _interopRequireDefault(__webpack_require__(/*! ./PopoverTitle */ "./node_modules/react-bootstrap/cjs/PopoverTitle.js"));

var _PopoverContent = _interopRequireDefault(__webpack_require__(/*! ./PopoverContent */ "./node_modules/react-bootstrap/cjs/PopoverContent.js"));

var defaultProps = {
  placement: 'right'
};

var Popover = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _1 = _ref.show,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "placement", "className", "style", "children", "content", "arrowProps", "popper", "show"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, decoratedBsPrefix, primaryPlacement && "bs-popover-" + primaryPlacement)
  }, props), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), content ? /*#__PURE__*/_react.default.createElement(_PopoverContent.default, null, children) : children);
});

Popover.defaultProps = defaultProps;
Popover.Title = _PopoverTitle.default;
Popover.Content = _PopoverContent.default;
var _default = Popover;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/PopoverContent.js":
/*!************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/PopoverContent.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var PopoverContent = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-body');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

var _default = PopoverContent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/PopoverTitle.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/PopoverTitle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var PopoverTitle = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-header');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(bsPrefix, className)
  }), children);
});

var _default = PopoverTitle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ProgressBar.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ProgressBar.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _ElementChildren = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/cjs/ElementChildren.js");

var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;

  _react.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = /*#__PURE__*/_react.default.createElement(ProgressBar, null);

    if (child.type === element.type) return;
    var childType = child.type;
    var childIdentifier = /*#__PURE__*/_react.default.isValidElement(child) ? childType.displayName || childType.name || childType : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });

  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar(_ref, ref) {
  var _classNames;

  var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      animated = _ref.animated,
      className = _ref.className,
      style = _ref.style,
      variant = _ref.variant,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    role: "progressbar",
    className: (0, _classnames.default)(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
    style: (0, _extends2.default)({
      width: getPercentage(now, min, max) + "%"
    }, style),
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max
  }), srOnly ? /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label) : label);
}

var ProgressBar = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
  var isChild = _ref2.isChild,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["isChild"]);
  props.bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      animated = props.animated,
      bsPrefix = props.bsPrefix,
      variant = props.variant,
      className = props.className,
      children = props.children,
      wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, wrapperProps, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children ? (0, _ElementChildren.map)(children, function (child) {
    return /*#__PURE__*/(0, _react.cloneElement)(child, {
      isChild: true
    });
  }) : renderProgressBar({
    min: min,
    now: now,
    max: max,
    label: label,
    srOnly: srOnly,
    striped: striped,
    animated: animated,
    bsPrefix: bsPrefix,
    variant: variant
  }, ref));
});

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = defaultProps;
var _default = ProgressBar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ResponsiveEmbed.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ResponsiveEmbed.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      aspectRatio = _ref.aspectRatio,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "aspectRatio"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'embed-responsive');

  var child = _react.default.Children.only(children);

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(decoratedBsPrefix, className, aspectRatio && decoratedBsPrefix + "-" + aspectRatio)
  }), /*#__PURE__*/_react.default.cloneElement(child, {
    className: (0, _classnames.default)(child.props.className, decoratedBsPrefix + "-item")
  }));
});

ResponsiveEmbed.defaultProps = defaultProps;
var _default = ResponsiveEmbed;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Row.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Row.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};

var Row = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "noGutters", "as"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: _classnames.default.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});

Row.displayName = 'Row';
Row.defaultProps = defaultProps;
var _default = Row;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/SafeAnchor.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/SafeAnchor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _createChainedFunction = _interopRequireDefault(__webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap/cjs/createChainedFunction.js"));

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: (0, _createChainedFunction.default)(handleKeyDown, onKeyDown)
  }));
});

SafeAnchor.displayName = 'SafeAnchor';
var _default = SafeAnchor;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/SelectableContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/SelectableContext.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = exports.makeEventKey = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var SelectableContext = /*#__PURE__*/_react.default.createContext(null);

var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};

exports.makeEventKey = makeEventKey;
var _default = SelectableContext;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Spinner.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Spinner.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var Spinner = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      animation = _ref.animation,
      size = _ref.size,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'spinner');
  var bsSpinnerPrefix = bsPrefix + "-" + animation;
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
  }), children);
});

Spinner.displayName = 'Spinner';
var _default = Spinner;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/SplitButton.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/SplitButton.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/cjs/Button.js"));

var _ButtonGroup = _interopRequireDefault(__webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/cjs/ButtonGroup.js"));

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/cjs/Dropdown.js"));

var _DropdownMenu = __webpack_require__(/*! ./DropdownMenu */ "./node_modules/react-bootstrap/cjs/DropdownMenu.js");

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: _propTypes.default.string,

  /** An `href` passed to the non-toggle Button */
  href: _propTypes.default.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: _propTypes.default.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** A `type` passed to the non-toggle Button */
  type: _propTypes.default.string,

  /** Disables both Buttons  */
  disabled: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: _DropdownMenu.alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string,

  /** @ignore */
  variant: _propTypes.default.string,

  /** @ignore */
  size: _propTypes.default.string
};
var defaultProps = {
  toggleLabel: 'Toggle dropdown',
  type: 'button'
};
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */

var SplitButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      variant = _ref.variant,
      title = _ref.title,
      type = _ref.type,
      toggleLabel = _ref.toggleLabel,
      children = _ref.children,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      rootCloseEvent = _ref.rootCloseEvent,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "size", "variant", "title", "type", "toggleLabel", "children", "onClick", "href", "target", "menuAlign", "menuRole", "renderMenuOnMount", "rootCloseEvent"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    as: _ButtonGroup.default
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick,
    type: type
  }, title), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    split: true,
    id: id ? id.toString() : undefined,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, toggleLabel)), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;
SplitButton.displayName = 'SplitButton';
var _default = SplitButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Switch.js":
/*!****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Switch.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _FormCheck = _interopRequireDefault(__webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/cjs/FormCheck.js"));

var Switch = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_FormCheck.default, (0, _extends2.default)({}, props, {
    ref: ref,
    type: "switch"
  }));
});

Switch.displayName = 'Switch';
Switch.Input = _FormCheck.default.Input;
Switch.Label = _FormCheck.default.Label;
var _default = Switch;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Tab.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Tab.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _TabContainer = _interopRequireDefault(__webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/cjs/TabContainer.js"));

var _TabContent = _interopRequireDefault(__webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/cjs/TabContent.js"));

var _TabPane = _interopRequireDefault(__webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/cjs/TabPane.js"));

/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
    return null;
  };

  return Tab;
}(_react.default.Component);

Tab.Container = _TabContainer.default;
Tab.Content = _TabContent.default;
Tab.Pane = _TabPane.default;
var _default = Tab;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/TabContainer.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/TabContainer.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _TabContext = _interopRequireDefault(__webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/cjs/TabContext.js"));

var _SelectableContext = _interopRequireDefault(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var TabContainer = function TabContainer(props) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      generateCustomChildId = _useUncontrolled.generateChildId,
      onSelect = _useUncontrolled.onSelect,
      activeKey = _useUncontrolled.activeKey,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children;

  var generateChildId = (0, _react.useMemo)(function () {
    return generateCustomChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };
  }, [id, generateCustomChildId]);
  var tabContext = (0, _react.useMemo)(function () {
    return {
      onSelect: onSelect,
      activeKey: activeKey,
      transition: transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: function getControlledId(key) {
        return generateChildId(key, 'tabpane');
      },
      getControllerId: function getControllerId(key) {
        return generateChildId(key, 'tab');
      }
    };
  }, [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/_react.default.createElement(_TabContext.default.Provider, {
    value: tabContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: onSelect || null
  }, children));
};

var _default = TabContainer;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/TabContent.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/TabContent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var TabContent = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "as", "className"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-content');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, decoratedBsPrefix)
  }));
});

var _default = TabContent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/TabContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/TabContext.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var TabContext = /*#__PURE__*/_react.default.createContext(null);

var _default = TabContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/TabPane.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/TabPane.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _TabContext = _interopRequireDefault(__webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/cjs/TabContext.js"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/cjs/SelectableContext.js"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

function useTabContext(props) {
  var context = (0, _react.useContext)(_TabContext.default);
  if (!context) return props;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutPropertiesLoose2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0, _SelectableContext.makeEventKey)(props.eventKey);
  return (0, _extends2.default)({}, props, {
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_useTabContext, ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-pane');
  if (!active && !Transition && unmountOnExit) return null;

  var pane = /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: (0, _classnames.default)(className, prefix, {
      active: active
    })
  }));

  if (Transition) pane = /*#__PURE__*/_react.default.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/_react.default.createElement(_TabContext.default.Provider, {
    value: null
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, pane));
});

TabPane.displayName = 'TabPane';
var _default = TabPane;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Table.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Table.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var Table = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'table');
  var classes = (0, _classnames.default)(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");

  var table = /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});

var _default = Table;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Tabs.js":
/*!**************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Tabs.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "prop-types-extra/lib/isRequiredForA11y"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _Nav = _interopRequireDefault(__webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/cjs/Nav.js"));

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/cjs/NavLink.js"));

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/cjs/NavItem.js"));

var _TabContainer = _interopRequireDefault(__webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/cjs/TabContainer.js"));

var _TabContent = _interopRequireDefault(__webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/cjs/TabContent.js"));

var _TabPane = _interopRequireDefault(__webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/cjs/TabPane.js"));

var _ElementChildren = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/cjs/ElementChildren.js");

var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  (0, _ElementChildren.forEach)(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName,
      id = _child$props.id;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
    as: _NavLink.default,
    eventKey: eventKey,
    disabled: disabled,
    id: id,
    className: tabClassName
  }, title);
}

var Tabs = function Tabs(props) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      onSelect = _useUncontrolled.onSelect,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

  return /*#__PURE__*/_react.default.createElement(_TabContainer.default, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, (0, _extends2.default)({}, controlledProps, {
    role: "tablist",
    as: "nav"
  }), (0, _ElementChildren.map)(children, renderTab)), /*#__PURE__*/_react.default.createElement(_TabContent.default, null, (0, _ElementChildren.map)(children, function (child) {
    var childProps = (0, _extends2.default)({}, child.props);
    delete childProps.title;
    delete childProps.disabled;
    delete childProps.tabClassName;
    return /*#__PURE__*/_react.default.createElement(_TabPane.default, childProps);
  })));
};

Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
var _default = Tabs;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ThemeProvider.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ThemeProvider.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var ThemeContext = /*#__PURE__*/_react.default.createContext({});

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = (0, _react.useMemo)(function () {
    return (0, _extends2.default)({}, prefixes);
  }, [prefixes]);
  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;

  var Wrapped = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
    var props = (0, _extends2.default)({}, _ref2);
    props[forwardRefAs] = ref;
    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      bsPrefix: bsPrefix
    }));
  });

  Wrapped.displayName = "Bootstrap(" + (Component.displayName || Component.name) + ")";
  return Wrapped;
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Toast.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Toast.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _useTimeout = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useTimeout */ "@restart/hooks/useTimeout"));

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

var _ToastHeader = _interopRequireDefault(__webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/cjs/ToastHeader.js"));

var _ToastBody = _interopRequireDefault(__webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/cjs/ToastBody.js"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _ToastContext = _interopRequireDefault(__webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/cjs/ToastContext.js"));

var Toast = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? _Fade.default : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = (0, _react.useRef)(delay);
  var onCloseRef = (0, _react.useRef)(onClose);
  (0, _react.useEffect)(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = (0, _useTimeout.default)();
  var autohideToast = !!(autohide && show);
  var autohideFunc = (0, _react.useCallback)(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, _react.useEffect)(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = (0, _react.useMemo)(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);

  var toast = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);

  return /*#__PURE__*/_react.default.createElement(_ToastContext.default.Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/_react.default.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});

Toast.displayName = 'Toast';

var _default = Object.assign(Toast, {
  Body: _ToastBody.default,
  Header: _ToastHeader.default
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ToastBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ToastBody.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js"));

var _default = (0, _createWithBsPrefix.default)('toast-body');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ToastContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ToastContext.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var ToastContext = /*#__PURE__*/_react.default.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
});

var _default = ToastContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ToastHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ToastHeader.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _useEventCallback = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useEventCallback */ "@restart/hooks/useEventCallback"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var _CloseButton = _interopRequireDefault(__webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/cjs/CloseButton.js"));

var _ToastContext = _interopRequireDefault(__webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/cjs/ToastContext.js"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};

var ToastHeader = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast-header');
  var context = (0, _react.useContext)(_ToastContext.default);
  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});

ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
var _default = ToastHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ToggleButton.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ToggleButton.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/cjs/Button.js"));

var noop = function noop() {
  return undefined;
};

var ToggleButton = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      className = _ref.className,
      checked = _ref.checked,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef"]);

  var _useState = (0, _react.useState)(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(true);
  }, []);
  var handleBlur = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, focused && 'focus', disabled && 'disabled'),
    type: undefined,
    active: !!checked,
    as: "label"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: name,
    type: type,
    value: value,
    ref: inputRef,
    autoComplete: "off",
    checked: !!checked,
    disabled: !!disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: onChange || noop
  }), children);
});

ToggleButton.displayName = 'ToggleButton';
var _default = ToggleButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/ToggleButtonGroup.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/ToggleButtonGroup.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "invariant"));

var _uncontrollable = __webpack_require__(/*! uncontrollable */ "uncontrollable");

var _createChainedFunction = _interopRequireDefault(__webpack_require__(/*! ./createChainedFunction */ "./node_modules/react-bootstrap/cjs/createChainedFunction.js"));

var _ElementChildren = __webpack_require__(/*! ./ElementChildren */ "./node_modules/react-bootstrap/cjs/ElementChildren.js");

var _ButtonGroup = _interopRequireDefault(__webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/cjs/ButtonGroup.js"));

var _ToggleButton = _interopRequireDefault(__webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/cjs/ToggleButton.js"));

var defaultProps = {
  type: 'radio',
  vertical: false
};

var ToggleButtonGroup = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    value: 'onChange'
  }),
      children = _useUncontrolled.children,
      type = _useUncontrolled.type,
      name = _useUncontrolled.name,
      value = _useUncontrolled.value,
      onChange = _useUncontrolled.onChange,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["children", "type", "name", "value", "onChange"]);

  var getValues = function getValues() {
    return value == null ? [] : [].concat(value);
  };

  var handleToggle = function handleToggle(inputVal, event) {
    if (!onChange) {
      return;
    }

    var values = getValues();
    var isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== inputVal;
      }), event);
    } else {
      onChange([].concat(values, [inputVal]), event);
    }
  };

  !(type !== 'radio' || !!name) ?  true ? (0, _invariant.default)(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : undefined : void 0;
  return /*#__PURE__*/_react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, controlledProps, {
    ref: ref,
    toggle: true
  }), (0, _ElementChildren.map)(children, function (child) {
    var values = getValues();
    var _child$props = child.props,
        childVal = _child$props.value,
        childOnChange = _child$props.onChange;

    var handler = function handler(e) {
      return handleToggle(childVal, e);
    };

    return /*#__PURE__*/_react.default.cloneElement(child, {
      type: type,
      name: child.name || name,
      checked: values.indexOf(childVal) !== -1,
      onChange: (0, _createChainedFunction.default)(childOnChange, handler)
    });
  }));
});

ToggleButtonGroup.defaultProps = defaultProps;
ToggleButtonGroup.Button = _ToggleButton.default;
var _default = ToggleButtonGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/Tooltip.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/Tooltip.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__(/*! prop-types-extra/lib/isRequiredForA11y */ "prop-types-extra/lib/isRequiredForA11y"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var defaultProps = {
  placement: 'right'
};

var Tooltip = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _2 = _ref.show,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-tooltip-" + primaryPlacement)
  }, props), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), /*#__PURE__*/_react.default.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});

Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
var _default = Tooltip;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/createChainedFunction.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/createChainedFunction.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

var _default = createChainedFunction;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/createWithBsPrefix.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/createWithBsPrefix.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _camelize = _interopRequireDefault(__webpack_require__(/*! dom-helpers/camelize */ "dom-helpers/camelize"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = /*#__PURE__*/_react.default.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/divWithClassName.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/divWithClassName.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "classnames"));

var _default = function _default(className) {
  return /*#__PURE__*/_react.default.forwardRef(function (p, ref) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useAccordionToggle = exports.Tooltip = exports.ToggleButtonGroup = exports.ToggleButton = exports.ToastHeader = exports.ToastBody = exports.Toast = exports.ThemeProvider = exports.Tabs = exports.TabPane = exports.Table = exports.TabContent = exports.TabContainer = exports.Tab = exports.SplitButton = exports.Spinner = exports.SafeAnchor = exports.Row = exports.ResponsiveEmbed = exports.ProgressBar = exports.PopoverContent = exports.PopoverTitle = exports.Popover = exports.Pagination = exports.PageItem = exports.OverlayTrigger = exports.Overlay = exports.NavLink = exports.NavItem = exports.NavDropdown = exports.NavbarBrand = exports.Navbar = exports.Nav = exports.ModalTitle = exports.ModalFooter = exports.ModalDialog = exports.ModalBody = exports.Modal = exports.Media = exports.ListGroupItem = exports.ListGroup = exports.Jumbotron = exports.InputGroup = exports.Figure = exports.Image = exports.Container = exports.FormText = exports.FormLabel = exports.FormGroup = exports.FormFile = exports.FormCheck = exports.FormControl = exports.Form = exports.Fade = exports.DropdownButton = exports.Dropdown = exports.Collapse = exports.Col = exports.CloseButton = exports.CarouselItem = exports.Carousel = exports.CardGroup = exports.CardImg = exports.CardDeck = exports.CardColumns = exports.Card = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.BreadcrumbItem = exports.Breadcrumb = exports.Badge = exports.Alert = exports.AccordionToggle = exports.AccordionCollapse = exports.AccordionContext = exports.Accordion = void 0;

var _Accordion = _interopRequireDefault(__webpack_require__(/*! ./Accordion */ "./node_modules/react-bootstrap/cjs/Accordion.js"));

exports.Accordion = _Accordion.default;

var _AccordionContext = _interopRequireDefault(__webpack_require__(/*! ./AccordionContext */ "./node_modules/react-bootstrap/cjs/AccordionContext.js"));

exports.AccordionContext = _AccordionContext.default;

var _AccordionCollapse = _interopRequireDefault(__webpack_require__(/*! ./AccordionCollapse */ "./node_modules/react-bootstrap/cjs/AccordionCollapse.js"));

exports.AccordionCollapse = _AccordionCollapse.default;

var _AccordionToggle = _interopRequireWildcard(__webpack_require__(/*! ./AccordionToggle */ "./node_modules/react-bootstrap/cjs/AccordionToggle.js"));

exports.AccordionToggle = _AccordionToggle.default;
exports.useAccordionToggle = _AccordionToggle.useAccordionToggle;

var _Alert = _interopRequireDefault(__webpack_require__(/*! ./Alert */ "./node_modules/react-bootstrap/cjs/Alert.js"));

exports.Alert = _Alert.default;

var _Badge = _interopRequireDefault(__webpack_require__(/*! ./Badge */ "./node_modules/react-bootstrap/cjs/Badge.js"));

exports.Badge = _Badge.default;

var _Breadcrumb = _interopRequireDefault(__webpack_require__(/*! ./Breadcrumb */ "./node_modules/react-bootstrap/cjs/Breadcrumb.js"));

exports.Breadcrumb = _Breadcrumb.default;

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__(/*! ./BreadcrumbItem */ "./node_modules/react-bootstrap/cjs/BreadcrumbItem.js"));

exports.BreadcrumbItem = _BreadcrumbItem.default;

var _Button = _interopRequireDefault(__webpack_require__(/*! ./Button */ "./node_modules/react-bootstrap/cjs/Button.js"));

exports.Button = _Button.default;

var _ButtonGroup = _interopRequireDefault(__webpack_require__(/*! ./ButtonGroup */ "./node_modules/react-bootstrap/cjs/ButtonGroup.js"));

exports.ButtonGroup = _ButtonGroup.default;

var _ButtonToolbar = _interopRequireDefault(__webpack_require__(/*! ./ButtonToolbar */ "./node_modules/react-bootstrap/cjs/ButtonToolbar.js"));

exports.ButtonToolbar = _ButtonToolbar.default;

var _Card = _interopRequireDefault(__webpack_require__(/*! ./Card */ "./node_modules/react-bootstrap/cjs/Card.js"));

exports.Card = _Card.default;

var _CardColumns = _interopRequireDefault(__webpack_require__(/*! ./CardColumns */ "./node_modules/react-bootstrap/cjs/CardColumns.js"));

exports.CardColumns = _CardColumns.default;

var _CardDeck = _interopRequireDefault(__webpack_require__(/*! ./CardDeck */ "./node_modules/react-bootstrap/cjs/CardDeck.js"));

exports.CardDeck = _CardDeck.default;

var _CardImg = _interopRequireDefault(__webpack_require__(/*! ./CardImg */ "./node_modules/react-bootstrap/cjs/CardImg.js"));

exports.CardImg = _CardImg.default;

var _CardGroup = _interopRequireDefault(__webpack_require__(/*! ./CardGroup */ "./node_modules/react-bootstrap/cjs/CardGroup.js"));

exports.CardGroup = _CardGroup.default;

var _Carousel = _interopRequireDefault(__webpack_require__(/*! ./Carousel */ "./node_modules/react-bootstrap/cjs/Carousel.js"));

exports.Carousel = _Carousel.default;

var _CarouselItem = _interopRequireDefault(__webpack_require__(/*! ./CarouselItem */ "./node_modules/react-bootstrap/cjs/CarouselItem.js"));

exports.CarouselItem = _CarouselItem.default;

var _CloseButton = _interopRequireDefault(__webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/cjs/CloseButton.js"));

exports.CloseButton = _CloseButton.default;

var _Col = _interopRequireDefault(__webpack_require__(/*! ./Col */ "./node_modules/react-bootstrap/cjs/Col.js"));

exports.Col = _Col.default;

var _Collapse = _interopRequireDefault(__webpack_require__(/*! ./Collapse */ "./node_modules/react-bootstrap/cjs/Collapse.js"));

exports.Collapse = _Collapse.default;

var _Dropdown = _interopRequireDefault(__webpack_require__(/*! ./Dropdown */ "./node_modules/react-bootstrap/cjs/Dropdown.js"));

exports.Dropdown = _Dropdown.default;

var _DropdownButton = _interopRequireDefault(__webpack_require__(/*! ./DropdownButton */ "./node_modules/react-bootstrap/cjs/DropdownButton.js"));

exports.DropdownButton = _DropdownButton.default;

var _Fade = _interopRequireDefault(__webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/cjs/Fade.js"));

exports.Fade = _Fade.default;

var _Form = _interopRequireDefault(__webpack_require__(/*! ./Form */ "./node_modules/react-bootstrap/cjs/Form.js"));

exports.Form = _Form.default;

var _FormControl = _interopRequireDefault(__webpack_require__(/*! ./FormControl */ "./node_modules/react-bootstrap/cjs/FormControl.js"));

exports.FormControl = _FormControl.default;

var _FormCheck = _interopRequireDefault(__webpack_require__(/*! ./FormCheck */ "./node_modules/react-bootstrap/cjs/FormCheck.js"));

exports.FormCheck = _FormCheck.default;

var _FormFile = _interopRequireDefault(__webpack_require__(/*! ./FormFile */ "./node_modules/react-bootstrap/cjs/FormFile.js"));

exports.FormFile = _FormFile.default;

var _FormGroup = _interopRequireDefault(__webpack_require__(/*! ./FormGroup */ "./node_modules/react-bootstrap/cjs/FormGroup.js"));

exports.FormGroup = _FormGroup.default;

var _FormLabel = _interopRequireDefault(__webpack_require__(/*! ./FormLabel */ "./node_modules/react-bootstrap/cjs/FormLabel.js"));

exports.FormLabel = _FormLabel.default;

var _FormText = _interopRequireDefault(__webpack_require__(/*! ./FormText */ "./node_modules/react-bootstrap/cjs/FormText.js"));

exports.FormText = _FormText.default;

var _Container = _interopRequireDefault(__webpack_require__(/*! ./Container */ "./node_modules/react-bootstrap/cjs/Container.js"));

exports.Container = _Container.default;

var _Image = _interopRequireDefault(__webpack_require__(/*! ./Image */ "./node_modules/react-bootstrap/cjs/Image.js"));

exports.Image = _Image.default;

var _Figure = _interopRequireDefault(__webpack_require__(/*! ./Figure */ "./node_modules/react-bootstrap/cjs/Figure.js"));

exports.Figure = _Figure.default;

var _InputGroup = _interopRequireDefault(__webpack_require__(/*! ./InputGroup */ "./node_modules/react-bootstrap/cjs/InputGroup.js"));

exports.InputGroup = _InputGroup.default;

var _Jumbotron = _interopRequireDefault(__webpack_require__(/*! ./Jumbotron */ "./node_modules/react-bootstrap/cjs/Jumbotron.js"));

exports.Jumbotron = _Jumbotron.default;

var _ListGroup = _interopRequireDefault(__webpack_require__(/*! ./ListGroup */ "./node_modules/react-bootstrap/cjs/ListGroup.js"));

exports.ListGroup = _ListGroup.default;

var _ListGroupItem = _interopRequireDefault(__webpack_require__(/*! ./ListGroupItem */ "./node_modules/react-bootstrap/cjs/ListGroupItem.js"));

exports.ListGroupItem = _ListGroupItem.default;

var _Media = _interopRequireDefault(__webpack_require__(/*! ./Media */ "./node_modules/react-bootstrap/cjs/Media.js"));

exports.Media = _Media.default;

var _Modal = _interopRequireDefault(__webpack_require__(/*! ./Modal */ "./node_modules/react-bootstrap/cjs/Modal.js"));

exports.Modal = _Modal.default;

var _ModalBody = _interopRequireDefault(__webpack_require__(/*! ./ModalBody */ "./node_modules/react-bootstrap/cjs/ModalBody.js"));

exports.ModalBody = _ModalBody.default;

var _ModalDialog = _interopRequireDefault(__webpack_require__(/*! ./ModalDialog */ "./node_modules/react-bootstrap/cjs/ModalDialog.js"));

exports.ModalDialog = _ModalDialog.default;

var _ModalFooter = _interopRequireDefault(__webpack_require__(/*! ./ModalFooter */ "./node_modules/react-bootstrap/cjs/ModalFooter.js"));

exports.ModalFooter = _ModalFooter.default;

var _ModalTitle = _interopRequireDefault(__webpack_require__(/*! ./ModalTitle */ "./node_modules/react-bootstrap/cjs/ModalTitle.js"));

exports.ModalTitle = _ModalTitle.default;

var _Nav = _interopRequireDefault(__webpack_require__(/*! ./Nav */ "./node_modules/react-bootstrap/cjs/Nav.js"));

exports.Nav = _Nav.default;

var _Navbar = _interopRequireDefault(__webpack_require__(/*! ./Navbar */ "./node_modules/react-bootstrap/cjs/Navbar.js"));

exports.Navbar = _Navbar.default;

var _NavbarBrand = _interopRequireDefault(__webpack_require__(/*! ./NavbarBrand */ "./node_modules/react-bootstrap/cjs/NavbarBrand.js"));

exports.NavbarBrand = _NavbarBrand.default;

var _NavDropdown = _interopRequireDefault(__webpack_require__(/*! ./NavDropdown */ "./node_modules/react-bootstrap/cjs/NavDropdown.js"));

exports.NavDropdown = _NavDropdown.default;

var _NavItem = _interopRequireDefault(__webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/cjs/NavItem.js"));

exports.NavItem = _NavItem.default;

var _NavLink = _interopRequireDefault(__webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/cjs/NavLink.js"));

exports.NavLink = _NavLink.default;

var _Overlay = _interopRequireDefault(__webpack_require__(/*! ./Overlay */ "./node_modules/react-bootstrap/cjs/Overlay.js"));

exports.Overlay = _Overlay.default;

var _OverlayTrigger = _interopRequireDefault(__webpack_require__(/*! ./OverlayTrigger */ "./node_modules/react-bootstrap/cjs/OverlayTrigger.js"));

exports.OverlayTrigger = _OverlayTrigger.default;

var _PageItem = _interopRequireDefault(__webpack_require__(/*! ./PageItem */ "./node_modules/react-bootstrap/cjs/PageItem.js"));

exports.PageItem = _PageItem.default;

var _Pagination = _interopRequireDefault(__webpack_require__(/*! ./Pagination */ "./node_modules/react-bootstrap/cjs/Pagination.js"));

exports.Pagination = _Pagination.default;

var _Popover = _interopRequireDefault(__webpack_require__(/*! ./Popover */ "./node_modules/react-bootstrap/cjs/Popover.js"));

exports.Popover = _Popover.default;

var _PopoverTitle = _interopRequireDefault(__webpack_require__(/*! ./PopoverTitle */ "./node_modules/react-bootstrap/cjs/PopoverTitle.js"));

exports.PopoverTitle = _PopoverTitle.default;

var _PopoverContent = _interopRequireDefault(__webpack_require__(/*! ./PopoverContent */ "./node_modules/react-bootstrap/cjs/PopoverContent.js"));

exports.PopoverContent = _PopoverContent.default;

var _ProgressBar = _interopRequireDefault(__webpack_require__(/*! ./ProgressBar */ "./node_modules/react-bootstrap/cjs/ProgressBar.js"));

exports.ProgressBar = _ProgressBar.default;

var _ResponsiveEmbed = _interopRequireDefault(__webpack_require__(/*! ./ResponsiveEmbed */ "./node_modules/react-bootstrap/cjs/ResponsiveEmbed.js"));

exports.ResponsiveEmbed = _ResponsiveEmbed.default;

var _Row = _interopRequireDefault(__webpack_require__(/*! ./Row */ "./node_modules/react-bootstrap/cjs/Row.js"));

exports.Row = _Row.default;

var _SafeAnchor = _interopRequireDefault(__webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/cjs/SafeAnchor.js"));

exports.SafeAnchor = _SafeAnchor.default;

var _Spinner = _interopRequireDefault(__webpack_require__(/*! ./Spinner */ "./node_modules/react-bootstrap/cjs/Spinner.js"));

exports.Spinner = _Spinner.default;

var _SplitButton = _interopRequireDefault(__webpack_require__(/*! ./SplitButton */ "./node_modules/react-bootstrap/cjs/SplitButton.js"));

exports.SplitButton = _SplitButton.default;

var _Tab = _interopRequireDefault(__webpack_require__(/*! ./Tab */ "./node_modules/react-bootstrap/cjs/Tab.js"));

exports.Tab = _Tab.default;

var _TabContainer = _interopRequireDefault(__webpack_require__(/*! ./TabContainer */ "./node_modules/react-bootstrap/cjs/TabContainer.js"));

exports.TabContainer = _TabContainer.default;

var _TabContent = _interopRequireDefault(__webpack_require__(/*! ./TabContent */ "./node_modules/react-bootstrap/cjs/TabContent.js"));

exports.TabContent = _TabContent.default;

var _Table = _interopRequireDefault(__webpack_require__(/*! ./Table */ "./node_modules/react-bootstrap/cjs/Table.js"));

exports.Table = _Table.default;

var _TabPane = _interopRequireDefault(__webpack_require__(/*! ./TabPane */ "./node_modules/react-bootstrap/cjs/TabPane.js"));

exports.TabPane = _TabPane.default;

var _Tabs = _interopRequireDefault(__webpack_require__(/*! ./Tabs */ "./node_modules/react-bootstrap/cjs/Tabs.js"));

exports.Tabs = _Tabs.default;

var _ThemeProvider = _interopRequireDefault(__webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js"));

exports.ThemeProvider = _ThemeProvider.default;

var _Toast = _interopRequireDefault(__webpack_require__(/*! ./Toast */ "./node_modules/react-bootstrap/cjs/Toast.js"));

exports.Toast = _Toast.default;

var _ToastBody = _interopRequireDefault(__webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/cjs/ToastBody.js"));

exports.ToastBody = _ToastBody.default;

var _ToastHeader = _interopRequireDefault(__webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/cjs/ToastHeader.js"));

exports.ToastHeader = _ToastHeader.default;

var _ToggleButton = _interopRequireDefault(__webpack_require__(/*! ./ToggleButton */ "./node_modules/react-bootstrap/cjs/ToggleButton.js"));

exports.ToggleButton = _ToggleButton.default;

var _ToggleButtonGroup = _interopRequireDefault(__webpack_require__(/*! ./ToggleButtonGroup */ "./node_modules/react-bootstrap/cjs/ToggleButtonGroup.js"));

exports.ToggleButtonGroup = _ToggleButtonGroup.default;

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! ./Tooltip */ "./node_modules/react-bootstrap/cjs/Tooltip.js"));

exports.Tooltip = _Tooltip.default;

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/triggerBrowserReflow.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/triggerBrowserReflow.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = triggerBrowserReflow;

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/usePopperMarginModifiers.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/usePopperMarginModifiers.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = usePopperMarginModifiers;

var _react = __webpack_require__(/*! react */ "react");

var _hasClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/hasClass */ "dom-helpers/hasClass"));

var _ThemeProvider = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/cjs/ThemeProvider.js");

function getMargins(element) {
  var styles = window.getComputedStyle(element);
  var top = parseFloat(styles.marginTop) || 0;
  var right = parseFloat(styles.marginRight) || 0;
  var bottom = parseFloat(styles.marginBottom) || 0;
  var left = parseFloat(styles.marginLeft) || 0;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
}

function usePopperMarginModifiers() {
  var overlayRef = (0, _react.useRef)(null);
  var margins = (0, _react.useRef)(null);
  var popoverClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'popover');
  var dropdownMenuClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'dropdown-menu');
  var callback = (0, _react.useCallback)(function (overlay) {
    if (!overlay || !((0, _hasClass.default)(overlay, popoverClass) || (0, _hasClass.default)(overlay, dropdownMenuClass))) return;
    margins.current = getMargins(overlay);
    overlay.style.margin = '0';
    overlayRef.current = overlay;
  }, [popoverClass, dropdownMenuClass]);
  var offset = (0, _react.useMemo)(function () {
    return {
      name: 'offset',
      options: {
        offset: function offset(_ref) {
          var placement = _ref.placement;
          if (!margins.current) return [0, 0];
          var _margins$current = margins.current,
              top = _margins$current.top,
              left = _margins$current.left,
              bottom = _margins$current.bottom,
              right = _margins$current.right;

          switch (placement.split('-')[0]) {
            case 'top':
              return [0, bottom];

            case 'left':
              return [0, right];

            case 'bottom':
              return [0, top];

            case 'right':
              return [0, left];

            default:
              return [0, 0];
          }
        }
      }
    };
  }, [margins]); // Converts popover arrow margin to arrow modifier padding

  var popoverArrowMargins = (0, _react.useMemo)(function () {
    return {
      name: 'popoverArrowMargins',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['arrow'],
      effect: function effect(_ref2) {
        var state = _ref2.state;

        if (!overlayRef.current || !state.elements.arrow || !(0, _hasClass.default)(overlayRef.current, popoverClass) || !state.modifiersData['arrow#persistent']) {
          return undefined;
        }

        var _getMargins = getMargins(state.elements.arrow),
            top = _getMargins.top,
            right = _getMargins.right;

        var padding = top || right;
        state.modifiersData['arrow#persistent'].padding = {
          top: padding,
          left: padding,
          right: padding,
          bottom: padding
        };
        state.elements.arrow.style.margin = '0';
        return function () {
          if (state.elements.arrow) state.elements.arrow.style.margin = '';
        };
      }
    };
  }, [popoverClass]);
  return [callback, [offset, popoverArrowMargins]];
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-bootstrap/cjs/useWrappedRefWithWarning.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-bootstrap/cjs/useWrappedRefWithWarning.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = useWrappedRefWithWarning;

var _invariant = _interopRequireDefault(__webpack_require__(/*! invariant */ "invariant"));

var _react = __webpack_require__(/*! react */ "react");

var _useMergedRefs = _interopRequireDefault(__webpack_require__(/*! @restart/hooks/useMergedRefs */ "@restart/hooks/useMergedRefs"));

function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (false) {} // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = (0, _react.useCallback)(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ?  true ? (0, _invariant.default)(false, componentName + " injected a ref to a provided `as` component that resolved to a component instance instead of a DOM element. " + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : undefined : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return (0, _useMergedRefs.default)(warningRef, ref);
}

module.exports = exports["default"];

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menu */ "./components/menu.jsx");
/* harmony import */ var _components_identification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/identification */ "./components/identification.jsx");


var _jsxFileName = "C:\\Users\\Axel\\Documents\\ESIEE\\Architecture\\DoesThisPersonExist\\Front\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  let logged = false;
  const token = localStorage.getItem('accessToken');
  const res = fetch('http://localhost:5000/api/verify', {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    },
    method: 'GET'
  });
  logged = res.json();
  console.log(res.json());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_identification__WEBPACK_IMPORTED_MODULE_4__["default"], {
      islogged: true
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@restart/hooks/useCallbackRef":
/*!************************************************!*\
  !*** external "@restart/hooks/useCallbackRef" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useCallbackRef");

/***/ }),

/***/ "@restart/hooks/useCommittedRef":
/*!*************************************************!*\
  !*** external "@restart/hooks/useCommittedRef" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useCommittedRef");

/***/ }),

/***/ "@restart/hooks/useEventCallback":
/*!**************************************************!*\
  !*** external "@restart/hooks/useEventCallback" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useEventCallback");

/***/ }),

/***/ "@restart/hooks/useForceUpdate":
/*!************************************************!*\
  !*** external "@restart/hooks/useForceUpdate" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useForceUpdate");

/***/ }),

/***/ "@restart/hooks/useMergedRefs":
/*!***********************************************!*\
  !*** external "@restart/hooks/useMergedRefs" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useMergedRefs");

/***/ }),

/***/ "@restart/hooks/useTimeout":
/*!********************************************!*\
  !*** external "@restart/hooks/useTimeout" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useTimeout");

/***/ }),

/***/ "@restart/hooks/useUpdateEffect":
/*!*************************************************!*\
  !*** external "@restart/hooks/useUpdateEffect" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useUpdateEffect");

/***/ }),

/***/ "@restart/hooks/useWillUnmount":
/*!************************************************!*\
  !*** external "@restart/hooks/useWillUnmount" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@restart/hooks/useWillUnmount");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "dom-helpers/addEventListener":
/*!***********************************************!*\
  !*** external "dom-helpers/addEventListener" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/addEventListener");

/***/ }),

/***/ "dom-helpers/camelize":
/*!***************************************!*\
  !*** external "dom-helpers/camelize" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/camelize");

/***/ }),

/***/ "dom-helpers/canUseDOM":
/*!****************************************!*\
  !*** external "dom-helpers/canUseDOM" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/canUseDOM");

/***/ }),

/***/ "dom-helpers/contains":
/*!***************************************!*\
  !*** external "dom-helpers/contains" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/contains");

/***/ }),

/***/ "dom-helpers/css":
/*!**********************************!*\
  !*** external "dom-helpers/css" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/css");

/***/ }),

/***/ "dom-helpers/hasClass":
/*!***************************************!*\
  !*** external "dom-helpers/hasClass" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/hasClass");

/***/ }),

/***/ "dom-helpers/ownerDocument":
/*!********************************************!*\
  !*** external "dom-helpers/ownerDocument" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/ownerDocument");

/***/ }),

/***/ "dom-helpers/querySelectorAll":
/*!***********************************************!*\
  !*** external "dom-helpers/querySelectorAll" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/querySelectorAll");

/***/ }),

/***/ "dom-helpers/removeEventListener":
/*!**************************************************!*\
  !*** external "dom-helpers/removeEventListener" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/removeEventListener");

/***/ }),

/***/ "dom-helpers/scrollbarSize":
/*!********************************************!*\
  !*** external "dom-helpers/scrollbarSize" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/scrollbarSize");

/***/ }),

/***/ "dom-helpers/transitionEnd":
/*!********************************************!*\
  !*** external "dom-helpers/transitionEnd" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dom-helpers/transitionEnd");

/***/ }),

/***/ "invariant":
/*!****************************!*\
  !*** external "invariant" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-extra/lib/all":
/*!*******************************************!*\
  !*** external "prop-types-extra/lib/all" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-extra/lib/all");

/***/ }),

/***/ "prop-types-extra/lib/isRequiredForA11y":
/*!*********************************************************!*\
  !*** external "prop-types-extra/lib/isRequiredForA11y" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-extra/lib/isRequiredForA11y");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-overlays/Dropdown":
/*!******************************************!*\
  !*** external "react-overlays/Dropdown" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/Dropdown");

/***/ }),

/***/ "react-overlays/DropdownMenu":
/*!**********************************************!*\
  !*** external "react-overlays/DropdownMenu" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/DropdownMenu");

/***/ }),

/***/ "react-overlays/DropdownToggle":
/*!************************************************!*\
  !*** external "react-overlays/DropdownToggle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/DropdownToggle");

/***/ }),

/***/ "react-overlays/Modal":
/*!***************************************!*\
  !*** external "react-overlays/Modal" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/Modal");

/***/ }),

/***/ "react-overlays/ModalManager":
/*!**********************************************!*\
  !*** external "react-overlays/ModalManager" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/ModalManager");

/***/ }),

/***/ "react-overlays/Overlay":
/*!*****************************************!*\
  !*** external "react-overlays/Overlay" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/Overlay");

/***/ }),

/***/ "react-overlays/safeFindDOMNode":
/*!*************************************************!*\
  !*** external "react-overlays/safeFindDOMNode" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-overlays/safeFindDOMNode");

/***/ }),

/***/ "react-transition-group/Transition":
/*!****************************************************!*\
  !*** external "react-transition-group/Transition" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uncontrollable":
/*!*********************************!*\
  !*** external "uncontrollable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uncontrollable");

/***/ }),

/***/ "warning":
/*!**************************!*\
  !*** external "warning" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQWJzdHJhY3ROYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQWJzdHJhY3ROYXZJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0FjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9BY2NvcmRpb25Db2xsYXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9BY2NvcmRpb25Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0FjY29yZGlvblRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9BbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9CYWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Cb290c3RyYXBNb2RhbE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQnJlYWRjcnVtYi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9CcmVhZGNydW1iSXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQnV0dG9uVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9DYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NhcmRDb2x1bW5zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NhcmRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NhcmREZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NhcmRHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9DYXJkSW1nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Nhcm91c2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Nhcm91c2VsQ2FwdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9DYXJvdXNlbEl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvQ29sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Ecm9wZG93bkJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Ecm9wZG93bkl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvRHJvcGRvd25NZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Ryb3Bkb3duVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0VsZW1lbnRDaGlsZHJlbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9GYWRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0ZlZWRiYWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0ZpZ3VyZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9GaWd1cmVDYXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0ZpZ3VyZUltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvRm9ybUNoZWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1DaGVja0lucHV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1DaGVja0xhYmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1Db250cm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1GaWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1GaWxlSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvRm9ybUZpbGVMYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvRm9ybUxhYmVsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0Zvcm1UZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0lucHV0R3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvSnVtYm90cm9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL0xpc3RHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9MaXN0R3JvdXBJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL01lZGlhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL01vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL01vZGFsQm9keS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Nb2RhbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTW9kYWxEaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTW9kYWxGb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTW9kYWxIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTW9kYWxUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTmF2Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9OYXZEcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9OYXZJdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL05hdkxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTmF2YmFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL05hdmJhckJyYW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL05hdmJhckNvbGxhcHNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL05hdmJhckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvTmF2YmFyVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL092ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvT3ZlcmxheVRyaWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvUGFnZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvUGFnaW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Qb3BvdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1BvcG92ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1BvcG92ZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9SZXNwb25zaXZlRW1iZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvUm93LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1NhZmVBbmNob3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvU2VsZWN0YWJsZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvU3Bpbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9TcGxpdEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVGFiLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1RhYkNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9UYWJDb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1RhYkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVGFiUGFuZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9UYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9UYWJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1RoZW1lUHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVG9hc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVG9hc3RCb2R5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL1RvYXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Ub2FzdEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9Ub2dnbGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVG9nZ2xlQnV0dG9uR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2Nqcy9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvY3JlYXRlV2l0aEJzUHJlZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL2RpdldpdGhDbGFzc05hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvdHJpZ2dlckJyb3dzZXJSZWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9janMvdXNlUG9wcGVyTWFyZ2luTW9kaWZpZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvY2pzL3VzZVdyYXBwZWRSZWZXaXRoV2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZXN0YXJ0L2hvb2tzL3VzZUNhbGxiYWNrUmVmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlc3RhcnQvaG9va3MvdXNlQ29tbWl0dGVkUmVmXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZXN0YXJ0L2hvb2tzL3VzZUZvcmNlVXBkYXRlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZXN0YXJ0L2hvb2tzL3VzZVRpbWVvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVzdGFydC9ob29rcy91c2VVcGRhdGVFZmZlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVzdGFydC9ob29rcy91c2VXaWxsVW5tb3VudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb20taGVscGVycy9hZGRFdmVudExpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tLWhlbHBlcnMvY2FtZWxpemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb20taGVscGVycy9jYW5Vc2VET01cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb20taGVscGVycy9jb250YWluc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbS1oZWxwZXJzL2Nzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbS1oZWxwZXJzL2hhc0NsYXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tLWhlbHBlcnMvb3duZXJEb2N1bWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb20taGVscGVycy9yZW1vdmVFdmVudExpc3RlbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZG9tLWhlbHBlcnMvc2Nyb2xsYmFyU2l6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvbS1oZWxwZXJzL3RyYW5zaXRpb25FbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnZhcmlhbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4dHJhL2xpYi9hbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4dHJhL2xpYi9pc1JlcXVpcmVkRm9yQTExeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3ZlcmxheXMvRHJvcGRvd25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93bk1lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93blRvZ2dsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW92ZXJsYXlzL01vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3ZlcmxheXMvTW9kYWxNYW5hZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtb3ZlcmxheXMvT3ZlcmxheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW92ZXJsYXlzL3NhZmVGaW5kRE9NTm9kZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXAvVHJhbnNpdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVuY29udHJvbGxhYmxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid2FybmluZ1wiIl0sIm5hbWVzIjpbIklkZW50aWZpY2F0aW9uIiwicHJvcHMiLCJpc2xvZ2dlZCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzUmVkaXJlY3RlZCIsInNldElzUmVkaXJlY3RlZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicGF0aG5hbWUiLCJwdXNoIiwiTWVudSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9nZ2VkIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGlFQUFpRTs7QUFFcEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEVBQUU7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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LEVBQVo7QUFHRixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGtFQUFEO0FBQWdCLGNBQVEsRUFBRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxTQUFELG9CQUFlVCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBLGtCQURGO0FBT0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsNEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsOEQ7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IEFsZXJ0IH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcblxyXG5cclxuY29uc3QgSWRlbnRpZmljYXRpb24gPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHsgaXNsb2dnZWQgfSA9IHByb3BzOyAvL3Nhdm9pciBzaSBsZSBtZWMgZXN0IGxvZ2fDqVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtpc1JlZGlyZWN0ZWQsIHNldElzUmVkaXJlY3RlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBpZighaXNsb2dnZWQgJiYgKHJvdXRlci5wYXRobmFtZSAhPT0gXCIvXCIgJiYgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiICYmIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvc2lnbi11cFwiKSl7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgc2V0SXNSZWRpcmVjdGVkKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoaXNsb2dnZWQgJiYgKHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIiB8fCByb3V0ZXIucGF0aG5hbWUgPT0gXCIvbG9naW5cIiAmJiByb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2lnbi11cFwiKSl7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsJylcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm91dGVyLnBhdGhuYW1lXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXNSZWRpcmVjdGVkICYmIFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IHZhcmlhbnQ9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgbG9naW4gb3Igc2lnbnVwIGJlZm9yZSBhY2Nlc3NpbmcgdGhlIGdhbWUgIVxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IElkZW50aWZpY2F0aW9uOyIsImltcG9ydCB7IE5hdmJhciwgTmF2IH0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXBcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBNZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSA9PSBcIi9cIiB8fCByb3V0ZXIucGF0aG5hbWUgPT0gXCIvbG9naW5cIiB8fCByb3V0ZXIucGF0aG5hbWUgPT0gXCIvc2lnbi11cFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJ3aGl0ZVwiIGV4cGFuZD1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9cIj5Ib21lPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL2xvZ2luXCI+TG9nIGluPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9zaWduLXVwXCI+U2lnbiB1cDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgKHJvdXRlci5wYXRobmFtZSAhPT0gXCIvXCIgJiYgcm91dGVyLnBhdGhuYW1lICE9PSBcIi9sb2dpblwiICYmIHJvdXRlci5wYXRobmFtZSAhPT0gXCIvc2lnbi11cFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIgYmc9XCJ3aGl0ZVwiIGV4cGFuZD1cImxnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIi9nYW1lL3BsYXlcIj5QbGF5PC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiL3Byb2ZpbFwiPlByb2ZpbDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvXCI+TG9nIG91dDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0c0xvb3NlOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3F1ZXJ5U2VsZWN0b3JBbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9xdWVyeVNlbGVjdG9yQWxsXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlRm9yY2VVcGRhdGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZVwiKSk7XG5cbnZhciBfdXNlTWVyZ2VkUmVmcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnNcIikpO1xuXG52YXIgX05hdkNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdkNvbnRleHRcIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vU2VsZWN0YWJsZUNvbnRleHRcIikpO1xuXG52YXIgX1RhYkNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RhYkNvbnRleHRcIikpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIEFic3RyYWN0TmF2ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAndWwnIDogX3JlZiRhcyxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIGFjdGl2ZUtleSA9IF9yZWYuYWN0aXZlS2V5LFxuICAgICAgcm9sZSA9IF9yZWYucm9sZSxcbiAgICAgIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImFzXCIsIFwib25TZWxlY3RcIiwgXCJhY3RpdmVLZXlcIiwgXCJyb2xlXCIsIFwib25LZXlEb3duXCJdKTtcbiAgLy8gQSByZWYgYW5kIGZvcmNlVXBkYXRlIGZvciByZWZvY3VzLCBiL2Mgd2Ugb25seSB3YW50IHRvIHRyaWdnZXIgd2hlbiBuZWVkZWRcbiAgLy8gYW5kIGRvbid0IHdhbnQgdG8gcmVzZXQgdGhlIHNldCBpbiB0aGUgZWZmZWN0XG4gIHZhciBmb3JjZVVwZGF0ZSA9ICgwLCBfdXNlRm9yY2VVcGRhdGUuZGVmYXVsdCkoKTtcbiAgdmFyIG5lZWRzUmVmb2N1c1JlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShmYWxzZSk7XG4gIHZhciBwYXJlbnRPblNlbGVjdCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQpO1xuICB2YXIgdGFiQ29udGV4dCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX1RhYkNvbnRleHQuZGVmYXVsdCk7XG4gIHZhciBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZDtcblxuICBpZiAodGFiQ29udGV4dCkge1xuICAgIHJvbGUgPSByb2xlIHx8ICd0YWJsaXN0JztcbiAgICBhY3RpdmVLZXkgPSB0YWJDb250ZXh0LmFjdGl2ZUtleTtcbiAgICBnZXRDb250cm9sbGVkSWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZWRJZDtcbiAgICBnZXRDb250cm9sbGVySWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZXJJZDtcbiAgfVxuXG4gIHZhciBsaXN0Tm9kZSA9ICgwLCBfcmVhY3QudXNlUmVmKShudWxsKTtcblxuICB2YXIgZ2V0TmV4dEFjdGl2ZUNoaWxkID0gZnVuY3Rpb24gZ2V0TmV4dEFjdGl2ZUNoaWxkKG9mZnNldCkge1xuICAgIHZhciBjdXJyZW50TGlzdE5vZGUgPSBsaXN0Tm9kZS5jdXJyZW50O1xuICAgIGlmICghY3VycmVudExpc3ROb2RlKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaXRlbXMgPSAoMCwgX3F1ZXJ5U2VsZWN0b3JBbGwuZGVmYXVsdCkoY3VycmVudExpc3ROb2RlLCAnW2RhdGEtcmItZXZlbnQta2V5XTpub3QoLmRpc2FibGVkKScpO1xuICAgIHZhciBhY3RpdmVDaGlsZCA9IGN1cnJlbnRMaXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgaWYgKCFhY3RpdmVDaGlsZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGluZGV4ID0gaXRlbXMuaW5kZXhPZihhY3RpdmVDaGlsZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG5leHRJbmRleCA9IGluZGV4ICsgb2Zmc2V0O1xuICAgIGlmIChuZXh0SW5kZXggPj0gaXRlbXMubGVuZ3RoKSBuZXh0SW5kZXggPSAwO1xuICAgIGlmIChuZXh0SW5kZXggPCAwKSBuZXh0SW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBpdGVtc1tuZXh0SW5kZXhdO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTZWxlY3QgPSBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoa2V5LCBldmVudCkge1xuICAgIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3Qoa2V5LCBldmVudCk7XG4gICAgaWYgKHBhcmVudE9uU2VsZWN0KSBwYXJlbnRPblNlbGVjdChrZXksIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAob25LZXlEb3duKSBvbktleURvd24oZXZlbnQpO1xuICAgIHZhciBuZXh0QWN0aXZlQ2hpbGQ7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlQ2hpbGQoLTEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlQ2hpbGQoMSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0QWN0aXZlQ2hpbGQpIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVNlbGVjdChuZXh0QWN0aXZlQ2hpbGQuZGF0YXNldC5yYkV2ZW50S2V5LCBldmVudCk7XG4gICAgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGlzdE5vZGUuY3VycmVudCAmJiBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gbGlzdE5vZGUuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yYi1ldmVudC1rZXldLmFjdGl2ZScpO1xuICAgICAgaWYgKGFjdGl2ZUNoaWxkKSBhY3RpdmVDaGlsZC5mb2N1cygpO1xuICAgIH1cblxuICAgIG5lZWRzUmVmb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0pO1xuICB2YXIgbWVyZ2VkUmVmID0gKDAsIF91c2VNZXJnZWRSZWZzLmRlZmF1bHQpKHJlZiwgbGlzdE5vZGUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaGFuZGxlU2VsZWN0XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9OYXZDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgcm9sZTogcm9sZSxcbiAgICAgIC8vIHVzZWQgYnkgTmF2TGluayB0byBkZXRlcm1pbmUgaXQncyByb2xlXG4gICAgICBhY3RpdmVLZXk6ICgwLCBfU2VsZWN0YWJsZUNvbnRleHQubWFrZUV2ZW50S2V5KShhY3RpdmVLZXkpLFxuICAgICAgZ2V0Q29udHJvbGxlZElkOiBnZXRDb250cm9sbGVkSWQgfHwgbm9vcCxcbiAgICAgIGdldENvbnRyb2xsZXJJZDogZ2V0Q29udHJvbGxlcklkIHx8IG5vb3BcbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgcmVmOiBtZXJnZWRSZWYsXG4gICAgcm9sZTogcm9sZVxuICB9KSkpKTtcbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBBYnN0cmFjdE5hdjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZUV2ZW50Q2FsbGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrXCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbnZhciBfTmF2Q29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2Q29udGV4dFwiKSk7XG5cbnZhciBfU2VsZWN0YWJsZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9TZWxlY3RhYmxlQ29udGV4dFwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxudmFyIEFic3RyYWN0TmF2SXRlbSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBldmVudEtleSA9IF9yZWYuZXZlbnRLZXksXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZi5hcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJhY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJldmVudEtleVwiLCBcIm9uU2VsZWN0XCIsIFwib25DbGlja1wiLCBcImFzXCJdKTtcbiAgdmFyIG5hdktleSA9ICgwLCBfU2VsZWN0YWJsZUNvbnRleHQubWFrZUV2ZW50S2V5KShldmVudEtleSwgcHJvcHMuaHJlZik7XG4gIHZhciBwYXJlbnRPblNlbGVjdCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQpO1xuICB2YXIgbmF2Q29udGV4dCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX05hdkNvbnRleHQuZGVmYXVsdCk7XG4gIHZhciBpc0FjdGl2ZSA9IGFjdGl2ZTtcblxuICBpZiAobmF2Q29udGV4dCkge1xuICAgIGlmICghcHJvcHMucm9sZSAmJiBuYXZDb250ZXh0LnJvbGUgPT09ICd0YWJsaXN0JykgcHJvcHMucm9sZSA9ICd0YWInO1xuICAgIHZhciBjb250ZXh0Q29udHJvbGxlcklkID0gbmF2Q29udGV4dC5nZXRDb250cm9sbGVySWQobmF2S2V5KTtcbiAgICB2YXIgY29udGV4dENvbnRyb2xsZWRJZCA9IG5hdkNvbnRleHQuZ2V0Q29udHJvbGxlZElkKG5hdktleSk7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nLmRlZmF1bHQpKCFjb250ZXh0Q29udHJvbGxlcklkIHx8ICFwcm9wcy5pZCwgXCJbcmVhY3QtYm9vdHN0cmFwXSBUaGUgcHJvdmlkZWQgaWQgJ1wiICsgcHJvcHMuaWQgKyBcIicgd2FzIG92ZXJ3cml0dGVuIGJ5IHRoZSBjdXJyZW50IG5hdkNvbnRleHQgd2l0aCAnXCIgKyBjb250ZXh0Q29udHJvbGxlcklkICsgXCInLlwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcuZGVmYXVsdCkoIWNvbnRleHRDb250cm9sbGVkSWQgfHwgIXByb3BzWydhcmlhLWNvbnRyb2xzJ10sIFwiW3JlYWN0LWJvb3RzdHJhcF0gVGhlIHByb3ZpZGVkIGFyaWEtY29udHJvbHMgdmFsdWUgJ1wiICsgcHJvcHNbJ2FyaWEtY29udHJvbHMnXSArIFwiJyB3YXMgb3ZlcndyaXR0ZW4gYnkgdGhlIGN1cnJlbnQgbmF2Q29udGV4dCB3aXRoICdcIiArIGNvbnRleHRDb250cm9sbGVkSWQgKyBcIicuXCIpIDogdm9pZCAwO1xuICAgIHByb3BzWydkYXRhLXJiLWV2ZW50LWtleSddID0gbmF2S2V5O1xuICAgIHByb3BzLmlkID0gY29udGV4dENvbnRyb2xsZXJJZCB8fCBwcm9wcy5pZDtcbiAgICBwcm9wc1snYXJpYS1jb250cm9scyddID0gY29udGV4dENvbnRyb2xsZWRJZCB8fCBwcm9wc1snYXJpYS1jb250cm9scyddO1xuICAgIGlzQWN0aXZlID0gYWN0aXZlID09IG51bGwgJiYgbmF2S2V5ICE9IG51bGwgPyBuYXZDb250ZXh0LmFjdGl2ZUtleSA9PT0gbmF2S2V5IDogYWN0aXZlO1xuICB9XG5cbiAgaWYgKHByb3BzLnJvbGUgPT09ICd0YWInKSB7XG4gICAgaWYgKHByb3BzLmRpc2FibGVkKSB7XG4gICAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgICAgcHJvcHNbJ2FyaWEtZGlzYWJsZWQnXSA9IHRydWU7XG4gICAgfVxuXG4gICAgcHJvcHNbJ2FyaWEtc2VsZWN0ZWQnXSA9IGlzQWN0aXZlO1xuICB9XG5cbiAgdmFyIGhhbmRsZU9uY2xpY2sgPSAoMCwgX3VzZUV2ZW50Q2FsbGJhY2suZGVmYXVsdCkoZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAob25DbGljaykgb25DbGljayhlKTtcbiAgICBpZiAobmF2S2V5ID09IG51bGwpIHJldHVybjtcbiAgICBpZiAob25TZWxlY3QpIG9uU2VsZWN0KG5hdktleSwgZSk7XG4gICAgaWYgKHBhcmVudE9uU2VsZWN0KSBwYXJlbnRPblNlbGVjdChuYXZLZXksIGUpO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBvbkNsaWNrOiBoYW5kbGVPbmNsaWNrLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgaXNBY3RpdmUgJiYgJ2FjdGl2ZScpXG4gIH0pKTtcbn0pO1xuXG5BYnN0cmFjdE5hdkl0ZW0uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gQWJzdHJhY3ROYXZJdGVtO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoXCJ1bmNvbnRyb2xsYWJsZVwiKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF9BY2NvcmRpb25Ub2dnbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FjY29yZGlvblRvZ2dsZVwiKSk7XG5cbnZhciBfU2VsZWN0YWJsZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NlbGVjdGFibGVDb250ZXh0XCIpKTtcblxudmFyIF9BY2NvcmRpb25Db2xsYXBzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWNjb3JkaW9uQ29sbGFwc2VcIikpO1xuXG52YXIgX0FjY29yZGlvbkNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FjY29yZGlvbkNvbnRleHRcIikpO1xuXG52YXIgQWNjb3JkaW9uID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VVbmNvbnRyb2xsZWQgPSAoMCwgX3VuY29udHJvbGxhYmxlLnVzZVVuY29udHJvbGxlZCkocHJvcHMsIHtcbiAgICBhY3RpdmVLZXk6ICdvblNlbGVjdCdcbiAgfSksXG4gICAgICBfdXNlVW5jb250cm9sbGVkJGFzID0gX3VzZVVuY29udHJvbGxlZC5hcyxcbiAgICAgIENvbXBvbmVudCA9IF91c2VVbmNvbnRyb2xsZWQkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3VzZVVuY29udHJvbGxlZCRhcyxcbiAgICAgIGFjdGl2ZUtleSA9IF91c2VVbmNvbnRyb2xsZWQuYWN0aXZlS2V5LFxuICAgICAgYnNQcmVmaXggPSBfdXNlVW5jb250cm9sbGVkLmJzUHJlZml4LFxuICAgICAgY2hpbGRyZW4gPSBfdXNlVW5jb250cm9sbGVkLmNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lID0gX3VzZVVuY29udHJvbGxlZC5jbGFzc05hbWUsXG4gICAgICBvblNlbGVjdCA9IF91c2VVbmNvbnRyb2xsZWQub25TZWxlY3QsXG4gICAgICBjb250cm9sbGVkUHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF91c2VVbmNvbnRyb2xsZWQsIFtcImFzXCIsIFwiYWN0aXZlS2V5XCIsIFwiYnNQcmVmaXhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzTmFtZVwiLCBcIm9uU2VsZWN0XCJdKTtcblxuICB2YXIgZmluYWxDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2FjY29yZGlvbicpKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BY2NvcmRpb25Db250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogYWN0aXZlS2V5IHx8IG51bGxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogb25TZWxlY3QgfHwgbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIGNvbnRyb2xsZWRQcm9wcywge1xuICAgIGNsYXNzTmFtZTogZmluYWxDbGFzc05hbWVcbiAgfSksIGNoaWxkcmVuKSkpO1xufSk7XG5cbkFjY29yZGlvbi5kaXNwbGF5TmFtZSA9ICdBY2NvcmRpb24nO1xuQWNjb3JkaW9uLlRvZ2dsZSA9IF9BY2NvcmRpb25Ub2dnbGUuZGVmYXVsdDtcbkFjY29yZGlvbi5Db2xsYXBzZSA9IF9BY2NvcmRpb25Db2xsYXBzZS5kZWZhdWx0O1xudmFyIF9kZWZhdWx0ID0gQWNjb3JkaW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Db2xsYXBzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ29sbGFwc2VcIikpO1xuXG52YXIgX0FjY29yZGlvbkNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0FjY29yZGlvbkNvbnRleHRcIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TZWxlY3RhYmxlQ29udGV4dFwiKSk7XG5cbnZhciBBY2NvcmRpb25Db2xsYXBzZSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGV2ZW50S2V5ID0gX3JlZi5ldmVudEtleSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJjaGlsZHJlblwiLCBcImV2ZW50S2V5XCJdKTtcbiAgdmFyIGNvbnRleHRFdmVudEtleSA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX0FjY29yZGlvbkNvbnRleHQuZGVmYXVsdCk7IC8vIEVtcHR5IFNlbGVjdGFibGVDb250ZXh0IGlzIHRvIHByZXZlbnQgZWxlbWVudHMgaW4gdGhlIGNvbGxhcHNlXG4gIC8vIGZyb20gY29sbGFwc2luZyB0aGUgYWNjb3JkaW9uIHdoZW4gY2xpY2tlZC5cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ29sbGFwc2UuZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWYsXG4gICAgaW46IGNvbnRleHRFdmVudEtleSA9PT0gZXZlbnRLZXlcbiAgfSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLCBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKSkpKTtcbn0pO1xuXG5BY2NvcmRpb25Db2xsYXBzZS5kaXNwbGF5TmFtZSA9ICdBY2NvcmRpb25Db2xsYXBzZSc7XG52YXIgX2RlZmF1bHQgPSBBY2NvcmRpb25Db2xsYXBzZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBjb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbmNvbnRleHQuZGlzcGxheU5hbWUgPSAnQWNjb3JkaW9uQ29udGV4dCc7XG52YXIgX2RlZmF1bHQgPSBjb250ZXh0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudXNlQWNjb3JkaW9uVG9nZ2xlID0gdXNlQWNjb3JkaW9uVG9nZ2xlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TZWxlY3RhYmxlQ29udGV4dFwiKSk7XG5cbnZhciBfQWNjb3JkaW9uQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWNjb3JkaW9uQ29udGV4dFwiKSk7XG5cbmZ1bmN0aW9uIHVzZUFjY29yZGlvblRvZ2dsZShldmVudEtleSwgb25DbGljaykge1xuICB2YXIgY29udGV4dEV2ZW50S2V5ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfQWNjb3JkaW9uQ29udGV4dC5kZWZhdWx0KTtcbiAgdmFyIG9uU2VsZWN0ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfU2VsZWN0YWJsZUNvbnRleHQuZGVmYXVsdCk7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIC8qXG4gICAgICBDb21wYXJlIHRoZSBldmVudCBrZXkgaW4gY29udGV4dCB3aXRoIHRoZSBnaXZlbiBldmVudCBrZXkuXG4gICAgICBJZiB0aGV5IGFyZSB0aGUgc2FtZSwgdGhlbiBjb2xsYXBzZSB0aGUgY29tcG9uZW50LlxuICAgICovXG4gICAgdmFyIGV2ZW50S2V5UGFzc2VkID0gZXZlbnRLZXkgPT09IGNvbnRleHRFdmVudEtleSA/IG51bGwgOiBldmVudEtleTtcbiAgICBpZiAob25TZWxlY3QpIG9uU2VsZWN0KGV2ZW50S2V5UGFzc2VkLCBlKTtcbiAgICBpZiAob25DbGljaykgb25DbGljayhlKTtcbiAgfTtcbn1cblxudmFyIEFjY29yZGlvblRvZ2dsZSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2J1dHRvbicgOiBfcmVmJGFzLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZXZlbnRLZXkgPSBfcmVmLmV2ZW50S2V5LFxuICAgICAgb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJhc1wiLCBcImNoaWxkcmVuXCIsIFwiZXZlbnRLZXlcIiwgXCJvbkNsaWNrXCJdKTtcbiAgdmFyIGFjY29yZGlvbk9uQ2xpY2sgPSB1c2VBY2NvcmRpb25Ub2dnbGUoZXZlbnRLZXksIG9uQ2xpY2spO1xuXG4gIGlmIChDb21wb25lbnQgPT09ICdidXR0b24nKSB7XG4gICAgcHJvcHMudHlwZSA9ICdidXR0b24nO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWYsXG4gICAgb25DbGljazogYWNjb3JkaW9uT25DbGlja1xuICB9LCBwcm9wcyksIGNoaWxkcmVuKTtcbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBBY2NvcmRpb25Ub2dnbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdW5jb250cm9sbGFibGUgPSByZXF1aXJlKFwidW5jb250cm9sbGFibGVcIik7XG5cbnZhciBfdXNlRXZlbnRDYWxsYmFjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2tcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX0ZhZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZhZGVcIikpO1xuXG52YXIgX0Nsb3NlQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DbG9zZUJ1dHRvblwiKSk7XG5cbnZhciBfZGl2V2l0aENsYXNzTmFtZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZGl2V2l0aENsYXNzTmFtZVwiKSk7XG5cbnZhciBfY3JlYXRlV2l0aEJzUHJlZml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXaXRoQnNQcmVmaXhcIikpO1xuXG52YXIgX1NhZmVBbmNob3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NhZmVBbmNob3JcIikpO1xuXG52YXIgRGl2U3R5bGVkQXNINCA9ICgwLCBfZGl2V2l0aENsYXNzTmFtZS5kZWZhdWx0KSgnaDQnKTtcbkRpdlN0eWxlZEFzSDQuZGlzcGxheU5hbWUgPSAnRGl2U3R5bGVkQXNINCc7XG52YXIgQWxlcnRIZWFkaW5nID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2FsZXJ0LWhlYWRpbmcnLCB7XG4gIENvbXBvbmVudDogRGl2U3R5bGVkQXNINFxufSk7XG52YXIgQWxlcnRMaW5rID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2FsZXJ0LWxpbmsnLCB7XG4gIENvbXBvbmVudDogX1NhZmVBbmNob3IuZGVmYXVsdFxufSk7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICB0cmFuc2l0aW9uOiBfRmFkZS5kZWZhdWx0LFxuICBjbG9zZUxhYmVsOiAnQ2xvc2UgYWxlcnQnXG59O1xuXG52YXIgQWxlcnQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAodW5jb250cm9sbGVkUHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVVuY29udHJvbGxlZCA9ICgwLCBfdW5jb250cm9sbGFibGUudXNlVW5jb250cm9sbGVkKSh1bmNvbnRyb2xsZWRQcm9wcywge1xuICAgIHNob3c6ICdvbkNsb3NlJ1xuICB9KSxcbiAgICAgIGJzUHJlZml4ID0gX3VzZVVuY29udHJvbGxlZC5ic1ByZWZpeCxcbiAgICAgIHNob3cgPSBfdXNlVW5jb250cm9sbGVkLnNob3csXG4gICAgICBjbG9zZUxhYmVsID0gX3VzZVVuY29udHJvbGxlZC5jbG9zZUxhYmVsLFxuICAgICAgY2xhc3NOYW1lID0gX3VzZVVuY29udHJvbGxlZC5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF91c2VVbmNvbnRyb2xsZWQuY2hpbGRyZW4sXG4gICAgICB2YXJpYW50ID0gX3VzZVVuY29udHJvbGxlZC52YXJpYW50LFxuICAgICAgb25DbG9zZSA9IF91c2VVbmNvbnRyb2xsZWQub25DbG9zZSxcbiAgICAgIGRpc21pc3NpYmxlID0gX3VzZVVuY29udHJvbGxlZC5kaXNtaXNzaWJsZSxcbiAgICAgIHRyYW5zaXRpb24gPSBfdXNlVW5jb250cm9sbGVkLnRyYW5zaXRpb24sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiYnNQcmVmaXhcIiwgXCJzaG93XCIsIFwiY2xvc2VMYWJlbFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwidmFyaWFudFwiLCBcIm9uQ2xvc2VcIiwgXCJkaXNtaXNzaWJsZVwiLCBcInRyYW5zaXRpb25cIl0pO1xuXG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2FsZXJ0Jyk7XG4gIHZhciBoYW5kbGVDbG9zZSA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGZhbHNlLCBlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgVHJhbnNpdGlvbiA9IHRyYW5zaXRpb24gPT09IHRydWUgPyBfRmFkZS5kZWZhdWx0IDogdHJhbnNpdGlvbjtcblxuICB2YXIgYWxlcnQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByb2xlOiBcImFsZXJ0XCJcbiAgfSwgIVRyYW5zaXRpb24gPyBwcm9wcyA6IHVuZGVmaW5lZCwge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgcHJlZml4LCB2YXJpYW50ICYmIHByZWZpeCArIFwiLVwiICsgdmFyaWFudCwgZGlzbWlzc2libGUgJiYgcHJlZml4ICsgXCItZGlzbWlzc2libGVcIilcbiAgfSksIGRpc21pc3NpYmxlICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9DbG9zZUJ1dHRvbi5kZWZhdWx0LCB7XG4gICAgb25DbGljazogaGFuZGxlQ2xvc2UsXG4gICAgbGFiZWw6IGNsb3NlTGFiZWxcbiAgfSksIGNoaWxkcmVuKTtcblxuICBpZiAoIVRyYW5zaXRpb24pIHJldHVybiBzaG93ID8gYWxlcnQgOiBudWxsO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxuICB9LCBwcm9wcywge1xuICAgIHJlZjogdW5kZWZpbmVkLFxuICAgIGluOiBzaG93XG4gIH0pLCBhbGVydCk7XG59KTtcblxuQWxlcnQuZGlzcGxheU5hbWUgPSAnQWxlcnQnO1xuQWxlcnQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQWxlcnQuTGluayA9IEFsZXJ0TGluaztcbkFsZXJ0LkhlYWRpbmcgPSBBbGVydEhlYWRpbmc7XG52YXIgX2RlZmF1bHQgPSBBbGVydDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHBpbGw6IGZhbHNlXG59O1xuXG52YXIgQmFkZ2UgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgcGlsbCA9IF9yZWYucGlsbCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnc3BhbicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwidmFyaWFudFwiLCBcInBpbGxcIiwgXCJjbGFzc05hbWVcIiwgXCJhc1wiXSk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2JhZGdlJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBwcmVmaXgsIHBpbGwgJiYgcHJlZml4ICsgXCItcGlsbFwiLCB2YXJpYW50ICYmIHByZWZpeCArIFwiLVwiICsgdmFyaWFudClcbiAgfSkpO1xufSk7XG5cbkJhZGdlLmRpc3BsYXlOYW1lID0gJ0JhZGdlJztcbkJhZGdlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IEJhZGdlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9pbmhlcml0c0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKSk7XG5cbnZhciBfY3NzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2Nzc1wiKSk7XG5cbnZhciBfcXVlcnlTZWxlY3RvckFsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGxcIikpO1xuXG52YXIgX3Njcm9sbGJhclNpemUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9zY3JvbGxiYXJTaXplXCIpKTtcblxudmFyIF9Nb2RhbE1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtb3ZlcmxheXMvTW9kYWxNYW5hZ2VyXCIpKTtcblxudmFyIFNlbGVjdG9yID0ge1xuICBGSVhFRF9DT05URU5UOiAnLmZpeGVkLXRvcCwgLmZpeGVkLWJvdHRvbSwgLmlzLWZpeGVkLCAuc3RpY2t5LXRvcCcsXG4gIFNUSUNLWV9DT05URU5UOiAnLnN0aWNreS10b3AnLFxuICBOQVZCQVJfVE9HR0xFUjogJy5uYXZiYXItdG9nZ2xlcidcbn07XG5cbnZhciBCb290c3RyYXBNb2RhbE1hbmFnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9Nb2RhbE1hbmFnZXIpIHtcbiAgKDAsIF9pbmhlcml0c0xvb3NlMi5kZWZhdWx0KShCb290c3RyYXBNb2RhbE1hbmFnZXIsIF9Nb2RhbE1hbmFnZXIpO1xuXG4gIGZ1bmN0aW9uIEJvb3RzdHJhcE1vZGFsTWFuYWdlcigpIHtcbiAgICByZXR1cm4gX01vZGFsTWFuYWdlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gQm9vdHN0cmFwTW9kYWxNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRqdXN0QW5kU3RvcmUgPSBmdW5jdGlvbiBhZGp1c3RBbmRTdG9yZShwcm9wLCBlbGVtZW50LCBhZGp1c3QpIHtcbiAgICB2YXIgX2NzcztcblxuICAgIHZhciBhY3R1YWwgPSBlbGVtZW50LnN0eWxlW3Byb3BdOyAvLyBUT0RPOiBET01TdHJpbmdNYXAgYW5kIENTU1N0eWxlRGVjbGFyYXRpb24gYXJlbid0IHN0cmljdGx5IGNvbXBhdGlibGVcbiAgICAvLyBAdHMtaWdub3JlXG5cbiAgICBlbGVtZW50LmRhdGFzZXRbcHJvcF0gPSBhY3R1YWw7XG4gICAgKDAsIF9jc3MzLmRlZmF1bHQpKGVsZW1lbnQsIChfY3NzID0ge30sIF9jc3NbcHJvcF0gPSBwYXJzZUZsb2F0KCgwLCBfY3NzMy5kZWZhdWx0KShlbGVtZW50LCBwcm9wKSkgKyBhZGp1c3QgKyBcInB4XCIsIF9jc3MpKTtcbiAgfTtcblxuICBfcHJvdG8ucmVzdG9yZSA9IGZ1bmN0aW9uIHJlc3RvcmUocHJvcCwgZWxlbWVudCkge1xuICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQuZGF0YXNldFtwcm9wXTtcblxuICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgX2NzczI7XG5cbiAgICAgIGRlbGV0ZSBlbGVtZW50LmRhdGFzZXRbcHJvcF07XG4gICAgICAoMCwgX2NzczMuZGVmYXVsdCkoZWxlbWVudCwgKF9jc3MyID0ge30sIF9jc3MyW3Byb3BdID0gdmFsdWUsIF9jc3MyKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXRDb250YWluZXJTdHlsZSA9IGZ1bmN0aW9uIHNldENvbnRhaW5lclN0eWxlKGNvbnRhaW5lclN0YXRlLCBjb250YWluZXIpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgX01vZGFsTWFuYWdlci5wcm90b3R5cGUuc2V0Q29udGFpbmVyU3R5bGUuY2FsbCh0aGlzLCBjb250YWluZXJTdGF0ZSwgY29udGFpbmVyKTtcblxuICAgIGlmICghY29udGFpbmVyU3RhdGUub3ZlcmZsb3dpbmcpIHJldHVybjtcbiAgICB2YXIgc2l6ZSA9ICgwLCBfc2Nyb2xsYmFyU2l6ZS5kZWZhdWx0KSgpO1xuICAgICgwLCBfcXVlcnlTZWxlY3RvckFsbC5kZWZhdWx0KShjb250YWluZXIsIFNlbGVjdG9yLkZJWEVEX0NPTlRFTlQpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgICByZXR1cm4gX3RoaXMuYWRqdXN0QW5kU3RvcmUoJ3BhZGRpbmdSaWdodCcsIGVsLCBzaXplKTtcbiAgICB9KTtcbiAgICAoMCwgX3F1ZXJ5U2VsZWN0b3JBbGwuZGVmYXVsdCkoY29udGFpbmVyLCBTZWxlY3Rvci5TVElDS1lfQ09OVEVOVCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBfdGhpcy5hZGp1c3RBbmRTdG9yZSgnbWFyZ2luUmlnaHQnLCBlbCwgLXNpemUpO1xuICAgIH0pO1xuICAgICgwLCBfcXVlcnlTZWxlY3RvckFsbC5kZWZhdWx0KShjb250YWluZXIsIFNlbGVjdG9yLk5BVkJBUl9UT0dHTEVSKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIF90aGlzLmFkanVzdEFuZFN0b3JlKCdtYXJnaW5SaWdodCcsIGVsLCBzaXplKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQ29udGFpbmVyU3R5bGUgPSBmdW5jdGlvbiByZW1vdmVDb250YWluZXJTdHlsZShjb250YWluZXJTdGF0ZSwgY29udGFpbmVyKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBfTW9kYWxNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVDb250YWluZXJTdHlsZS5jYWxsKHRoaXMsIGNvbnRhaW5lclN0YXRlLCBjb250YWluZXIpO1xuXG4gICAgKDAsIF9xdWVyeVNlbGVjdG9yQWxsLmRlZmF1bHQpKGNvbnRhaW5lciwgU2VsZWN0b3IuRklYRURfQ09OVEVOVCkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBfdGhpczIucmVzdG9yZSgncGFkZGluZ1JpZ2h0JywgZWwpO1xuICAgIH0pO1xuICAgICgwLCBfcXVlcnlTZWxlY3RvckFsbC5kZWZhdWx0KShjb250YWluZXIsIFNlbGVjdG9yLlNUSUNLWV9DT05URU5UKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5yZXN0b3JlKCdtYXJnaW5SaWdodCcsIGVsKTtcbiAgICB9KTtcbiAgICAoMCwgX3F1ZXJ5U2VsZWN0b3JBbGwuZGVmYXVsdCkoY29udGFpbmVyLCBTZWxlY3Rvci5OQVZCQVJfVE9HR0xFUikuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgIHJldHVybiBfdGhpczIucmVzdG9yZSgnbWFyZ2luUmlnaHQnLCBlbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEJvb3RzdHJhcE1vZGFsTWFuYWdlcjtcbn0oX01vZGFsTWFuYWdlcjIuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEJvb3RzdHJhcE1vZGFsTWFuYWdlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX0JyZWFkY3J1bWJJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CcmVhZGNydW1iSXRlbVwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnYnJlYWRjcnVtYicsXG4gIGxpc3RQcm9wczoge31cbn07XG5cbnZhciBCcmVhZGNydW1iID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBsaXN0UHJvcHMgPSBfcmVmLmxpc3RQcm9wcyxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ25hdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwibGlzdFByb3BzXCIsIFwiY2hpbGRyZW5cIiwgXCJsYWJlbFwiLCBcImFzXCJdKTtcbiAgdmFyIHByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnYnJlYWRjcnVtYicpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBcImFyaWEtbGFiZWxcIjogbGFiZWwsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm9sXCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIGxpc3RQcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHByZWZpeCwgbGlzdFByb3BzID09IG51bGwgPyB2b2lkIDAgOiBsaXN0UHJvcHMuY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4pKTtcbn0pO1xuXG5CcmVhZGNydW1iLmRpc3BsYXlOYW1lID0gJ0JyZWFkY3J1bWInO1xuQnJlYWRjcnVtYi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5CcmVhZGNydW1iLkl0ZW0gPSBfQnJlYWRjcnVtYkl0ZW0uZGVmYXVsdDtcbnZhciBfZGVmYXVsdCA9IEJyZWFkY3J1bWI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1NhZmVBbmNob3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NhZmVBbmNob3JcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBsaW5rUHJvcHM6IHt9XG59O1xuXG52YXIgQnJlYWRjcnVtYkl0ZW0gPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBhY3RpdmUgPSBfcmVmLmFjdGl2ZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnbGknIDogX3JlZiRhcyxcbiAgICAgIF9yZWYkbGlua0FzID0gX3JlZi5saW5rQXMsXG4gICAgICBMaW5rQ29tcG9uZW50ID0gX3JlZiRsaW5rQXMgPT09IHZvaWQgMCA/IF9TYWZlQW5jaG9yLmRlZmF1bHQgOiBfcmVmJGxpbmtBcyxcbiAgICAgIGxpbmtQcm9wcyA9IF9yZWYubGlua1Byb3BzLFxuICAgICAgaHJlZiA9IF9yZWYuaHJlZixcbiAgICAgIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHRhcmdldCA9IF9yZWYudGFyZ2V0LFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiYWN0aXZlXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJhc1wiLCBcImxpbmtBc1wiLCBcImxpbmtQcm9wc1wiLCBcImhyZWZcIiwgXCJ0aXRsZVwiLCBcInRhcmdldFwiXSk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2JyZWFkY3J1bWItaXRlbScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKHByZWZpeCwgY2xhc3NOYW1lLCB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZVxuICAgIH0pLFxuICAgIFwiYXJpYS1jdXJyZW50XCI6IGFjdGl2ZSA/ICdwYWdlJyA6IHVuZGVmaW5lZFxuICB9KSwgYWN0aXZlID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChMaW5rQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBsaW5rUHJvcHMsIHtcbiAgICBocmVmOiBocmVmLFxuICAgIHRpdGxlOiB0aXRsZSxcbiAgICB0YXJnZXQ6IHRhcmdldFxuICB9KSwgY2hpbGRyZW4pKTtcbn0pO1xuXG5CcmVhZGNydW1iSXRlbS5kaXNwbGF5TmFtZSA9ICdCcmVhZGNydW1iSXRlbSc7XG5CcmVhZGNydW1iSXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBCcmVhZGNydW1iSXRlbTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBfU2FmZUFuY2hvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2FmZUFuY2hvclwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICdwcmltYXJ5JyxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG52YXIgQnV0dG9uID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBhY3RpdmUgPSBfcmVmLmFjdGl2ZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgYmxvY2sgPSBfcmVmLmJsb2NrLFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIGFzID0gX3JlZi5hcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJzaXplXCIsIFwiYWN0aXZlXCIsIFwiY2xhc3NOYW1lXCIsIFwiYmxvY2tcIiwgXCJ0eXBlXCIsIFwiYXNcIl0pO1xuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdidG4nKTtcbiAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBwcmVmaXgsIGFjdGl2ZSAmJiAnYWN0aXZlJywgdmFyaWFudCAmJiBwcmVmaXggKyBcIi1cIiArIHZhcmlhbnQsIGJsb2NrICYmIHByZWZpeCArIFwiLWJsb2NrXCIsIHNpemUgJiYgcHJlZml4ICsgXCItXCIgKyBzaXplKTtcblxuICBpZiAocHJvcHMuaHJlZikge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfU2FmZUFuY2hvci5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgICAgYXM6IGFzLFxuICAgICAgcmVmOiByZWYsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc2VzLCBwcm9wcy5kaXNhYmxlZCAmJiAnZGlzYWJsZWQnKVxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChyZWYpIHtcbiAgICBwcm9wcy5yZWYgPSByZWY7XG4gIH1cblxuICBpZiAodHlwZSkge1xuICAgIHByb3BzLnR5cGUgPSB0eXBlO1xuICB9IGVsc2UgaWYgKCFhcykge1xuICAgIHByb3BzLnR5cGUgPSAnYnV0dG9uJztcbiAgfVxuXG4gIHZhciBDb21wb25lbnQgPSBhcyB8fCAnYnV0dG9uJztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgfSkpO1xufSk7XG5cbkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdCdXR0b24nO1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IEJ1dHRvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHZlcnRpY2FsOiBmYWxzZSxcbiAgdG9nZ2xlOiBmYWxzZSxcbiAgcm9sZTogJ2dyb3VwJ1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHRvZ2dsZSA9IF9yZWYudG9nZ2xlLFxuICAgICAgdmVydGljYWwgPSBfcmVmLnZlcnRpY2FsLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3JlZiRhcyxcbiAgICAgIHJlc3QgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwic2l6ZVwiLCBcInRvZ2dsZVwiLCBcInZlcnRpY2FsXCIsIFwiY2xhc3NOYW1lXCIsIFwiYXNcIl0pO1xuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdidG4tZ3JvdXAnKTtcbiAgdmFyIGJhc2VDbGFzcyA9IHByZWZpeDtcbiAgaWYgKHZlcnRpY2FsKSBiYXNlQ2xhc3MgPSBwcmVmaXggKyBcIi12ZXJ0aWNhbFwiO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCByZXN0LCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBiYXNlQ2xhc3MsIHNpemUgJiYgcHJlZml4ICsgXCItXCIgKyBzaXplLCB0b2dnbGUgJiYgcHJlZml4ICsgXCItdG9nZ2xlXCIpXG4gIH0pKTtcbn0pO1xuXG5CdXR0b25Hcm91cC5kaXNwbGF5TmFtZSA9ICdCdXR0b25Hcm91cCc7XG5CdXR0b25Hcm91cC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBCdXR0b25Hcm91cDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICd0b29sYmFyJ1xufTtcblxudmFyIEJ1dHRvblRvb2xiYXIgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiXSk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2J0bi10b29sYmFyJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgcHJlZml4KVxuICB9KSk7XG59KTtcblxuQnV0dG9uVG9vbGJhci5kaXNwbGF5TmFtZSA9ICdCdXR0b25Ub29sYmFyJztcbkJ1dHRvblRvb2xiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gQnV0dG9uVG9vbGJhcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9kaXZXaXRoQ2xhc3NOYW1lID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kaXZXaXRoQ2xhc3NOYW1lXCIpKTtcblxudmFyIF9DYXJkQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2FyZENvbnRleHRcIikpO1xuXG52YXIgX0NhcmRJbWcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NhcmRJbWdcIikpO1xuXG52YXIgRGl2U3R5bGVkQXNINSA9ICgwLCBfZGl2V2l0aENsYXNzTmFtZS5kZWZhdWx0KSgnaDUnKTtcbnZhciBEaXZTdHlsZWRBc0g2ID0gKDAsIF9kaXZXaXRoQ2xhc3NOYW1lLmRlZmF1bHQpKCdoNicpO1xudmFyIENhcmRCb2R5ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtYm9keScpO1xudmFyIENhcmRUaXRsZSA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdjYXJkLXRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDVcbn0pO1xudmFyIENhcmRTdWJ0aXRsZSA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdjYXJkLXN1YnRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDZcbn0pO1xudmFyIENhcmRMaW5rID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtbGluaycsIHtcbiAgQ29tcG9uZW50OiAnYSdcbn0pO1xudmFyIENhcmRUZXh0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtdGV4dCcsIHtcbiAgQ29tcG9uZW50OiAncCdcbn0pO1xudmFyIENhcmRIZWFkZXIgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnY2FyZC1oZWFkZXInKTtcbnZhciBDYXJkRm9vdGVyID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtZm9vdGVyJyk7XG52YXIgQ2FyZEltZ092ZXJsYXkgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnY2FyZC1pbWctb3ZlcmxheScpO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYm9keTogZmFsc2Vcbn07XG5cbnZhciBDYXJkID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBiZyA9IF9yZWYuYmcsXG4gICAgICB0ZXh0ID0gX3JlZi50ZXh0LFxuICAgICAgYm9yZGVyID0gX3JlZi5ib3JkZXIsXG4gICAgICBib2R5ID0gX3JlZi5ib2R5LFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJiZ1wiLCBcInRleHRcIiwgXCJib3JkZXJcIiwgXCJib2R5XCIsIFwiY2hpbGRyZW5cIiwgXCJhc1wiXSk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2NhcmQnKTtcbiAgdmFyIGNhcmRDb250ZXh0ID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRIZWFkZXJCc1ByZWZpeDogcHJlZml4ICsgXCItaGVhZGVyXCJcbiAgICB9O1xuICB9LCBbcHJlZml4XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ2FyZENvbnRleHQuZGVmYXVsdC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBjYXJkQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBwcmVmaXgsIGJnICYmIFwiYmctXCIgKyBiZywgdGV4dCAmJiBcInRleHQtXCIgKyB0ZXh0LCBib3JkZXIgJiYgXCJib3JkZXItXCIgKyBib3JkZXIpXG4gIH0pLCBib2R5ID9cbiAgLyojX19QVVJFX18qL1xuICAvLyBAdHMtaWdub3JlXG4gIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2FyZEJvZHksIG51bGwsIGNoaWxkcmVuKSA6IGNoaWxkcmVuKSk7XG59KTtcblxuQ2FyZC5kaXNwbGF5TmFtZSA9ICdDYXJkJztcbkNhcmQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQ2FyZC5JbWcgPSBfQ2FyZEltZy5kZWZhdWx0O1xuQ2FyZC5UaXRsZSA9IENhcmRUaXRsZTtcbkNhcmQuU3VidGl0bGUgPSBDYXJkU3VidGl0bGU7XG5DYXJkLkJvZHkgPSBDYXJkQm9keTtcbkNhcmQuTGluayA9IENhcmRMaW5rO1xuQ2FyZC5UZXh0ID0gQ2FyZFRleHQ7XG5DYXJkLkhlYWRlciA9IENhcmRIZWFkZXI7XG5DYXJkLkZvb3RlciA9IENhcmRGb290ZXI7XG5DYXJkLkltZ092ZXJsYXkgPSBDYXJkSW1nT3ZlcmxheTtcbnZhciBfZGVmYXVsdCA9IENhcmQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtY29sdW1ucycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgY29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5jb250ZXh0LmRpc3BsYXlOYW1lID0gJ0NhcmRDb250ZXh0JztcbnZhciBfZGVmYXVsdCA9IGNvbnRleHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtZGVjaycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2NhcmQtZ3JvdXAnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogbnVsbFxufTtcblxudmFyIENhcmRJbWcgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZiggLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnaW1nJyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJ2YXJpYW50XCIsIFwiYXNcIl0pO1xuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdjYXJkLWltZycpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KSh2YXJpYW50ID8gcHJlZml4ICsgXCItXCIgKyB2YXJpYW50IDogcHJlZml4LCBjbGFzc05hbWUpXG4gIH0sIHByb3BzKSk7XG59KTtcblxuQ2FyZEltZy5kaXNwbGF5TmFtZSA9ICdDYXJkSW1nJztcbkNhcmRJbWcuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gQ2FyZEltZztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF91c2VFdmVudENhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFja1wiKSk7XG5cbnZhciBfdXNlVXBkYXRlRWZmZWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlVXBkYXRlRWZmZWN0XCIpKTtcblxudmFyIF91c2VDb21taXR0ZWRSZWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VDb21taXR0ZWRSZWZcIikpO1xuXG52YXIgX3VzZVRpbWVvdXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VUaW1lb3V0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfdHJhbnNpdGlvbkVuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL3RyYW5zaXRpb25FbmRcIikpO1xuXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoXCJ1bmNvbnRyb2xsYWJsZVwiKTtcblxudmFyIF9DYXJvdXNlbENhcHRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Nhcm91c2VsQ2FwdGlvblwiKSk7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DYXJvdXNlbEl0ZW1cIikpO1xuXG52YXIgX0VsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoXCIuL0VsZW1lbnRDaGlsZHJlblwiKTtcblxudmFyIF9TYWZlQW5jaG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TYWZlQW5jaG9yXCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF90cmlnZ2VyQnJvd3NlclJlZmxvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdHJpZ2dlckJyb3dzZXJSZWZsb3dcIikpO1xuXG52YXIgU1dJUEVfVEhSRVNIT0xEID0gNDA7XG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQGRlZmF1bHQgJ2Nhcm91c2VsJ1xuICAgKi9cbiAgYnNQcmVmaXg6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG4gIGFzOiBfcHJvcFR5cGVzLmRlZmF1bHQuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgYW5pbWF0aW9uIG9uIHRoZSBDYXJvdXNlbCBhcyBpdCB0cmFuc2l0aW9ucyBiZXR3ZWVuIHNsaWRlcy5cbiAgICovXG4gIHNsaWRlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKiogQ3Jvc3MgZmFkZSBzbGlkZXMgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBzbGlkZSBhbmltYXRpb24gKi9cbiAgZmFkZTogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIENhcm91c2VsIHByZXZpb3VzIGFuZCBuZXh0IGFycm93cyBmb3IgY2hhbmdpbmcgdGhlIGN1cnJlbnQgc2xpZGVcbiAgICovXG4gIGNvbnRyb2xzOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogU2hvdyBhIHNldCBvZiBzbGlkZSBwb3NpdGlvbiBpbmRpY2F0b3JzXG4gICAqL1xuICBpbmRpY2F0b3JzOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKipcbiAgICogQ29udHJvbHMgdGhlIGN1cnJlbnQgdmlzaWJsZSBzbGlkZVxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIG9uU2VsZWN0XG4gICAqL1xuICBhY3RpdmVJbmRleDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgYWN0aXZlIGl0ZW0gY2hhbmdlcy5cbiAgICpcbiAgICogYGBganNcbiAgICogKGV2ZW50S2V5OiBudW1iZXIsIGV2ZW50OiBPYmplY3QgfCBudWxsKSA9PiB2b2lkXG4gICAqIGBgYFxuICAgKlxuICAgKiBAY29udHJvbGxhYmxlIGFjdGl2ZUluZGV4XG4gICAqL1xuICBvblNlbGVjdDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gYSBzbGlkZSB0cmFuc2l0aW9uIHN0YXJ0cy5cbiAgICpcbiAgICogYGBganNcbiAgICogKGV2ZW50S2V5OiBudW1iZXIsIGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JykgPT4gdm9pZFxuICAgKi9cbiAgb25TbGlkZTogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gYSBzbGlkZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIChldmVudEtleTogbnVtYmVyLCBkaXJlY3Rpb246ICdsZWZ0JyB8ICdyaWdodCcpID0+IHZvaWRcbiAgICovXG4gIG9uU2xpZDogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBhbW91bnQgb2YgdGltZSB0byBkZWxheSBiZXR3ZWVuIGF1dG9tYXRpY2FsbHkgY3ljbGluZyBhbiBpdGVtLiBJZiBgbnVsbGAsIGNhcm91c2VsIHdpbGwgbm90IGF1dG9tYXRpY2FsbHkgY3ljbGUuXG4gICAqL1xuICBpbnRlcnZhbDogX3Byb3BUeXBlcy5kZWZhdWx0Lm51bWJlcixcblxuICAvKiogV2hldGhlciB0aGUgY2Fyb3VzZWwgc2hvdWxkIHJlYWN0IHRvIGtleWJvYXJkIGV2ZW50cy4gKi9cbiAga2V5Ym9hcmQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBzZXQgdG8gYFwiaG92ZXJcImAsIHBhdXNlcyB0aGUgY3ljbGluZyBvZiB0aGUgY2Fyb3VzZWwgb24gYG1vdXNlZW50ZXJgIGFuZCByZXN1bWVzIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCBvbiBgbW91c2VsZWF2ZWAuIElmIHNldCB0byBgZmFsc2VgLCBob3ZlcmluZyBvdmVyIHRoZSBjYXJvdXNlbCB3b24ndCBwYXVzZSBpdC5cbiAgICpcbiAgICogT24gdG91Y2gtZW5hYmxlZCBkZXZpY2VzLCB3aGVuIHNldCB0byBgXCJob3ZlclwiYCwgY3ljbGluZyB3aWxsIHBhdXNlIG9uIGB0b3VjaGVuZGAgKG9uY2UgdGhlIHVzZXIgZmluaXNoZWQgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY2Fyb3VzZWwpIGZvciB0d28gaW50ZXJ2YWxzLCBiZWZvcmUgYXV0b21hdGljYWxseSByZXN1bWluZy4gTm90ZSB0aGF0IHRoaXMgaXMgaW4gYWRkaXRpb24gdG8gdGhlIGFib3ZlIG1vdXNlIGJlaGF2aW9yLlxuICAgKi9cbiAgcGF1c2U6IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZihbJ2hvdmVyJywgZmFsc2VdKSxcblxuICAvKiogV2hldGhlciB0aGUgY2Fyb3VzZWwgc2hvdWxkIGN5Y2xlIGNvbnRpbnVvdXNseSBvciBoYXZlIGhhcmQgc3RvcHMuICovXG4gIHdyYXA6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBjYXJvdXNlbCBzaG91bGQgc3VwcG9ydCBsZWZ0L3JpZ2h0IHN3aXBlIGludGVyYWN0aW9ucyBvbiB0b3VjaHNjcmVlbiBkZXZpY2VzLlxuICAgKi9cbiAgdG91Y2g6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBidXR0b24gaWNvbiBmb3IgdGhlIFwicHJldmlvdXNcIiBjb250cm9sICovXG4gIHByZXZJY29uOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZSxcblxuICAvKipcbiAgICogTGFiZWwgc2hvd24gdG8gc2NyZWVuIHJlYWRlcnMgb25seSwgY2FuIGJlIHVzZWQgdG8gc2hvdyB0aGUgcHJldmlvdXMgZWxlbWVudFxuICAgKiBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqIFNldCB0byBudWxsIHRvIGRlYWN0aXZhdGUuXG4gICAqL1xuICBwcmV2TGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGJ1dHRvbiBpY29uIGZvciB0aGUgXCJuZXh0XCIgY29udHJvbCAqL1xuICBuZXh0SWNvbjogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUsXG5cbiAgLyoqXG4gICAqIExhYmVsIHNob3duIHRvIHNjcmVlbiByZWFkZXJzIG9ubHksIGNhbiBiZSB1c2VkIHRvIHNob3cgdGhlIG5leHQgZWxlbWVudFxuICAgKiBpbiB0aGUgY2Fyb3VzZWwuXG4gICAqIFNldCB0byBudWxsIHRvIGRlYWN0aXZhdGUuXG4gICAqL1xuICBuZXh0TGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmdcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBzbGlkZTogdHJ1ZSxcbiAgZmFkZTogZmFsc2UsXG4gIGNvbnRyb2xzOiB0cnVlLFxuICBpbmRpY2F0b3JzOiB0cnVlLFxuICBkZWZhdWx0QWN0aXZlSW5kZXg6IDAsXG4gIGludGVydmFsOiA1MDAwLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgcGF1c2U6ICdob3ZlcicsXG4gIHdyYXA6IHRydWUsXG4gIHRvdWNoOiB0cnVlLFxuICBwcmV2SWNvbjogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiXG4gIH0pLFxuICBwcmV2TGFiZWw6ICdQcmV2aW91cycsXG4gIG5leHRJY29uOiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uXCJcbiAgfSksXG4gIG5leHRMYWJlbDogJ05leHQnXG59O1xuXG5mdW5jdGlvbiBpc1Zpc2libGUoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuc3R5bGUgfHwgIWVsZW1lbnQucGFyZW50Tm9kZSB8fCAhZWxlbWVudC5wYXJlbnROb2RlLnN0eWxlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGVsZW1lbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHJldHVybiBlbGVtZW50U3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnICYmIGVsZW1lbnRTdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQucGFyZW50Tm9kZSkuZGlzcGxheSAhPT0gJ25vbmUnO1xufVxuXG5mdW5jdGlvbiBDYXJvdXNlbEZ1bmModW5jb250cm9sbGVkUHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVVuY29udHJvbGxlZCA9ICgwLCBfdW5jb250cm9sbGFibGUudXNlVW5jb250cm9sbGVkKSh1bmNvbnRyb2xsZWRQcm9wcywge1xuICAgIGFjdGl2ZUluZGV4OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgX3VzZVVuY29udHJvbGxlZCRhcyA9IF91c2VVbmNvbnRyb2xsZWQuYXMsXG4gICAgICBDb21wb25lbnQgPSBfdXNlVW5jb250cm9sbGVkJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF91c2VVbmNvbnRyb2xsZWQkYXMsXG4gICAgICBic1ByZWZpeCA9IF91c2VVbmNvbnRyb2xsZWQuYnNQcmVmaXgsXG4gICAgICBzbGlkZSA9IF91c2VVbmNvbnRyb2xsZWQuc2xpZGUsXG4gICAgICBmYWRlID0gX3VzZVVuY29udHJvbGxlZC5mYWRlLFxuICAgICAgY29udHJvbHMgPSBfdXNlVW5jb250cm9sbGVkLmNvbnRyb2xzLFxuICAgICAgaW5kaWNhdG9ycyA9IF91c2VVbmNvbnRyb2xsZWQuaW5kaWNhdG9ycyxcbiAgICAgIGFjdGl2ZUluZGV4ID0gX3VzZVVuY29udHJvbGxlZC5hY3RpdmVJbmRleCxcbiAgICAgIG9uU2VsZWN0ID0gX3VzZVVuY29udHJvbGxlZC5vblNlbGVjdCxcbiAgICAgIG9uU2xpZGUgPSBfdXNlVW5jb250cm9sbGVkLm9uU2xpZGUsXG4gICAgICBvblNsaWQgPSBfdXNlVW5jb250cm9sbGVkLm9uU2xpZCxcbiAgICAgIGludGVydmFsID0gX3VzZVVuY29udHJvbGxlZC5pbnRlcnZhbCxcbiAgICAgIGtleWJvYXJkID0gX3VzZVVuY29udHJvbGxlZC5rZXlib2FyZCxcbiAgICAgIG9uS2V5RG93biA9IF91c2VVbmNvbnRyb2xsZWQub25LZXlEb3duLFxuICAgICAgcGF1c2UgPSBfdXNlVW5jb250cm9sbGVkLnBhdXNlLFxuICAgICAgb25Nb3VzZU92ZXIgPSBfdXNlVW5jb250cm9sbGVkLm9uTW91c2VPdmVyLFxuICAgICAgb25Nb3VzZU91dCA9IF91c2VVbmNvbnRyb2xsZWQub25Nb3VzZU91dCxcbiAgICAgIHdyYXAgPSBfdXNlVW5jb250cm9sbGVkLndyYXAsXG4gICAgICB0b3VjaCA9IF91c2VVbmNvbnRyb2xsZWQudG91Y2gsXG4gICAgICBvblRvdWNoU3RhcnQgPSBfdXNlVW5jb250cm9sbGVkLm9uVG91Y2hTdGFydCxcbiAgICAgIG9uVG91Y2hNb3ZlID0gX3VzZVVuY29udHJvbGxlZC5vblRvdWNoTW92ZSxcbiAgICAgIG9uVG91Y2hFbmQgPSBfdXNlVW5jb250cm9sbGVkLm9uVG91Y2hFbmQsXG4gICAgICBwcmV2SWNvbiA9IF91c2VVbmNvbnRyb2xsZWQucHJldkljb24sXG4gICAgICBwcmV2TGFiZWwgPSBfdXNlVW5jb250cm9sbGVkLnByZXZMYWJlbCxcbiAgICAgIG5leHRJY29uID0gX3VzZVVuY29udHJvbGxlZC5uZXh0SWNvbixcbiAgICAgIG5leHRMYWJlbCA9IF91c2VVbmNvbnRyb2xsZWQubmV4dExhYmVsLFxuICAgICAgY2xhc3NOYW1lID0gX3VzZVVuY29udHJvbGxlZC5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF91c2VVbmNvbnRyb2xsZWQuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiYXNcIiwgXCJic1ByZWZpeFwiLCBcInNsaWRlXCIsIFwiZmFkZVwiLCBcImNvbnRyb2xzXCIsIFwiaW5kaWNhdG9yc1wiLCBcImFjdGl2ZUluZGV4XCIsIFwib25TZWxlY3RcIiwgXCJvblNsaWRlXCIsIFwib25TbGlkXCIsIFwiaW50ZXJ2YWxcIiwgXCJrZXlib2FyZFwiLCBcIm9uS2V5RG93blwiLCBcInBhdXNlXCIsIFwib25Nb3VzZU92ZXJcIiwgXCJvbk1vdXNlT3V0XCIsIFwid3JhcFwiLCBcInRvdWNoXCIsIFwib25Ub3VjaFN0YXJ0XCIsIFwib25Ub3VjaE1vdmVcIiwgXCJvblRvdWNoRW5kXCIsIFwicHJldkljb25cIiwgXCJwcmV2TGFiZWxcIiwgXCJuZXh0SWNvblwiLCBcIm5leHRMYWJlbFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcblxuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdjYXJvdXNlbCcpO1xuICB2YXIgbmV4dERpcmVjdGlvblJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShudWxsKTtcblxuICB2YXIgX3VzZVN0YXRlID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoJ25leHQnKSxcbiAgICAgIGRpcmVjdGlvbiA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldERpcmVjdGlvbiA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgX3VzZVN0YXRlMiA9ICgwLCBfcmVhY3QudXNlU3RhdGUpKGZhbHNlKSxcbiAgICAgIHBhdXNlZCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQYXVzZWQgPSBfdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gKDAsIF9yZWFjdC51c2VTdGF0ZSkoZmFsc2UpLFxuICAgICAgaXNTbGlkaW5nID0gX3VzZVN0YXRlM1swXSxcbiAgICAgIHNldElzU2xpZGluZyA9IF91c2VTdGF0ZTNbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTQgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKShhY3RpdmVJbmRleCB8fCAwKSxcbiAgICAgIHJlbmRlcmVkQWN0aXZlSW5kZXggPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0UmVuZGVyZWRBY3RpdmVJbmRleCA9IF91c2VTdGF0ZTRbMV07XG5cbiAgaWYgKCFpc1NsaWRpbmcgJiYgYWN0aXZlSW5kZXggIT09IHJlbmRlcmVkQWN0aXZlSW5kZXgpIHtcbiAgICBpZiAobmV4dERpcmVjdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICBzZXREaXJlY3Rpb24obmV4dERpcmVjdGlvblJlZi5jdXJyZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RGlyZWN0aW9uKChhY3RpdmVJbmRleCB8fCAwKSA+IHJlbmRlcmVkQWN0aXZlSW5kZXggPyAnbmV4dCcgOiAncHJldicpO1xuICAgIH1cblxuICAgIGlmIChzbGlkZSkge1xuICAgICAgc2V0SXNTbGlkaW5nKHRydWUpO1xuICAgIH1cblxuICAgIHNldFJlbmRlcmVkQWN0aXZlSW5kZXgoYWN0aXZlSW5kZXggfHwgMCk7XG4gIH1cblxuICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIGlmIChuZXh0RGlyZWN0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgIG5leHREaXJlY3Rpb25SZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9KTtcbiAgdmFyIG51bUNoaWxkcmVuID0gMDtcbiAgdmFyIGFjdGl2ZUNoaWxkSW50ZXJ2YWw7IC8vIEl0ZXJhdGUgdG8gZ3JhYiBhbGwgb2YgdGhlIGNoaWxkcmVuJ3MgaW50ZXJ2YWwgdmFsdWVzXG4gIC8vIChhbmQgY291bnQgdGhlbSwgdG9vKVxuXG4gICgwLCBfRWxlbWVudENoaWxkcmVuLmZvckVhY2gpKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgKytudW1DaGlsZHJlbjtcblxuICAgIGlmIChpbmRleCA9PT0gYWN0aXZlSW5kZXgpIHtcbiAgICAgIGFjdGl2ZUNoaWxkSW50ZXJ2YWwgPSBjaGlsZC5wcm9wcy5pbnRlcnZhbDtcbiAgICB9XG4gIH0pO1xuICB2YXIgYWN0aXZlQ2hpbGRJbnRlcnZhbFJlZiA9ICgwLCBfdXNlQ29tbWl0dGVkUmVmLmRlZmF1bHQpKGFjdGl2ZUNoaWxkSW50ZXJ2YWwpO1xuICB2YXIgcHJldiA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChpc1NsaWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEFjdGl2ZUluZGV4ID0gcmVuZGVyZWRBY3RpdmVJbmRleCAtIDE7XG5cbiAgICBpZiAobmV4dEFjdGl2ZUluZGV4IDwgMCkge1xuICAgICAgaWYgKCF3cmFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbmV4dEFjdGl2ZUluZGV4ID0gbnVtQ2hpbGRyZW4gLSAxO1xuICAgIH1cblxuICAgIG5leHREaXJlY3Rpb25SZWYuY3VycmVudCA9ICdwcmV2JztcblxuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgb25TZWxlY3QobmV4dEFjdGl2ZUluZGV4LCBldmVudCk7XG4gICAgfVxuICB9LCBbaXNTbGlkaW5nLCByZW5kZXJlZEFjdGl2ZUluZGV4LCBvblNlbGVjdCwgd3JhcCwgbnVtQ2hpbGRyZW5dKTsgLy8gVGhpcyBpcyB1c2VkIGluIHRoZSBzZXRJbnRlcnZhbCwgc28gaXQgc2hvdWxkIG5vdCBpbnZhbGlkYXRlLlxuXG4gIHZhciBuZXh0ID0gKDAsIF91c2VFdmVudENhbGxiYWNrLmRlZmF1bHQpKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChpc1NsaWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbmV4dEFjdGl2ZUluZGV4ID0gcmVuZGVyZWRBY3RpdmVJbmRleCArIDE7XG5cbiAgICBpZiAobmV4dEFjdGl2ZUluZGV4ID49IG51bUNoaWxkcmVuKSB7XG4gICAgICBpZiAoIXdyYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBuZXh0QWN0aXZlSW5kZXggPSAwO1xuICAgIH1cblxuICAgIG5leHREaXJlY3Rpb25SZWYuY3VycmVudCA9ICduZXh0JztcblxuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgb25TZWxlY3QobmV4dEFjdGl2ZUluZGV4LCBldmVudCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGVsZW1lbnRSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgKDAsIF9yZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudDogZWxlbWVudFJlZi5jdXJyZW50LFxuICAgICAgcHJldjogcHJldixcbiAgICAgIG5leHQ6IG5leHRcbiAgICB9O1xuICB9KTsgLy8gVGhpcyBpcyB1c2VkIGluIHRoZSBzZXRJbnRlcnZhbCwgc28gaXQgc2hvdWxkIG5vdCBpbnZhbGlkYXRlLlxuXG4gIHZhciBuZXh0V2hlblZpc2libGUgPSAoMCwgX3VzZUV2ZW50Q2FsbGJhY2suZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgIGlmICghZG9jdW1lbnQuaGlkZGVuICYmIGlzVmlzaWJsZShlbGVtZW50UmVmLmN1cnJlbnQpKSB7XG4gICAgICBuZXh0KCk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHNsaWRlRGlyZWN0aW9uID0gZGlyZWN0aW9uID09PSAnbmV4dCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAoMCwgX3VzZVVwZGF0ZUVmZmVjdC5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHNsaWRlKSB7XG4gICAgICAvLyBUaGVzZSBjYWxsYmFja3Mgd2lsbCBiZSBoYW5kbGVkIGJ5IHRoZSA8VHJhbnNpdGlvbj4gY2FsbGJhY2tzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvblNsaWRlKSB7XG4gICAgICBvblNsaWRlKHJlbmRlcmVkQWN0aXZlSW5kZXgsIHNsaWRlRGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAob25TbGlkKSB7XG4gICAgICBvblNsaWQocmVuZGVyZWRBY3RpdmVJbmRleCwgc2xpZGVEaXJlY3Rpb24pO1xuICAgIH1cbiAgfSwgW3JlbmRlcmVkQWN0aXZlSW5kZXhdKTtcbiAgdmFyIG9yZGVyQ2xhc3NOYW1lID0gcHJlZml4ICsgXCItaXRlbS1cIiArIGRpcmVjdGlvbjtcbiAgdmFyIGRpcmVjdGlvbmFsQ2xhc3NOYW1lID0gcHJlZml4ICsgXCItaXRlbS1cIiArIHNsaWRlRGlyZWN0aW9uO1xuICB2YXIgaGFuZGxlRW50ZXIgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAobm9kZSkge1xuICAgICgwLCBfdHJpZ2dlckJyb3dzZXJSZWZsb3cuZGVmYXVsdCkobm9kZSk7XG5cbiAgICBpZiAob25TbGlkZSkge1xuICAgICAgb25TbGlkZShyZW5kZXJlZEFjdGl2ZUluZGV4LCBzbGlkZURpcmVjdGlvbik7XG4gICAgfVxuICB9LCBbb25TbGlkZSwgcmVuZGVyZWRBY3RpdmVJbmRleCwgc2xpZGVEaXJlY3Rpb25dKTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoKSB7XG4gICAgc2V0SXNTbGlkaW5nKGZhbHNlKTtcblxuICAgIGlmIChvblNsaWQpIHtcbiAgICAgIG9uU2xpZChyZW5kZXJlZEFjdGl2ZUluZGV4LCBzbGlkZURpcmVjdGlvbik7XG4gICAgfVxuICB9LCBbb25TbGlkLCByZW5kZXJlZEFjdGl2ZUluZGV4LCBzbGlkZURpcmVjdGlvbl0pO1xuICB2YXIgaGFuZGxlS2V5RG93biA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChrZXlib2FyZCAmJiAhL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpIHtcbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBwcmV2KGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBuZXh0KGV2ZW50KTtcbiAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25LZXlEb3duKSB7XG4gICAgICBvbktleURvd24oZXZlbnQpO1xuICAgIH1cbiAgfSwgW2tleWJvYXJkLCBvbktleURvd24sIHByZXYsIG5leHRdKTtcbiAgdmFyIGhhbmRsZU1vdXNlT3ZlciA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChwYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgc2V0UGF1c2VkKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvbk1vdXNlT3Zlcikge1xuICAgICAgb25Nb3VzZU92ZXIoZXZlbnQpO1xuICAgIH1cbiAgfSwgW3BhdXNlLCBvbk1vdXNlT3Zlcl0pO1xuICB2YXIgaGFuZGxlTW91c2VPdXQgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBzZXRQYXVzZWQoZmFsc2UpO1xuXG4gICAgaWYgKG9uTW91c2VPdXQpIHtcbiAgICAgIG9uTW91c2VPdXQoZXZlbnQpO1xuICAgIH1cbiAgfSwgW29uTW91c2VPdXRdKTtcbiAgdmFyIHRvdWNoU3RhcnRYUmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKDApO1xuICB2YXIgdG91Y2hEZWx0YVhSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoMCk7XG4gIHZhciB0b3VjaFVucGF1c2VUaW1lb3V0ID0gKDAsIF91c2VUaW1lb3V0LmRlZmF1bHQpKCk7XG4gIHZhciBoYW5kbGVUb3VjaFN0YXJ0ID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdG91Y2hTdGFydFhSZWYuY3VycmVudCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICB0b3VjaERlbHRhWFJlZi5jdXJyZW50ID0gMDtcblxuICAgIGlmIChwYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgc2V0UGF1c2VkKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChvblRvdWNoU3RhcnQpIHtcbiAgICAgIG9uVG91Y2hTdGFydChldmVudCk7XG4gICAgfVxuICB9LCBbcGF1c2UsIG9uVG91Y2hTdGFydF0pO1xuICB2YXIgaGFuZGxlVG91Y2hNb3ZlID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0b3VjaERlbHRhWFJlZi5jdXJyZW50ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdG91Y2hEZWx0YVhSZWYuY3VycmVudCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRvdWNoU3RhcnRYUmVmLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKG9uVG91Y2hNb3ZlKSB7XG4gICAgICBvblRvdWNoTW92ZShldmVudCk7XG4gICAgfVxuICB9LCBbb25Ub3VjaE1vdmVdKTtcbiAgdmFyIGhhbmRsZVRvdWNoRW5kID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICB2YXIgdG91Y2hEZWx0YVggPSB0b3VjaERlbHRhWFJlZi5jdXJyZW50O1xuXG4gICAgICBpZiAoTWF0aC5hYnModG91Y2hEZWx0YVgpID4gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICAgIGlmICh0b3VjaERlbHRhWCA+IDApIHtcbiAgICAgICAgICBwcmV2KGV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwYXVzZSA9PT0gJ2hvdmVyJykge1xuICAgICAgdG91Y2hVbnBhdXNlVGltZW91dC5zZXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRQYXVzZWQoZmFsc2UpO1xuICAgICAgfSwgaW50ZXJ2YWwgfHwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICBpZiAob25Ub3VjaEVuZCkge1xuICAgICAgb25Ub3VjaEVuZChldmVudCk7XG4gICAgfVxuICB9LCBbdG91Y2gsIHBhdXNlLCBwcmV2LCBuZXh0LCB0b3VjaFVucGF1c2VUaW1lb3V0LCBpbnRlcnZhbCwgb25Ub3VjaEVuZF0pO1xuICB2YXIgc2hvdWxkUGxheSA9IGludGVydmFsICE9IG51bGwgJiYgIXBhdXNlZCAmJiAhaXNTbGlkaW5nO1xuICB2YXIgaW50ZXJ2YWxIYW5kbGVSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoKTtcbiAgKDAsIF9yZWFjdC51c2VFZmZlY3QpKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3JlZiwgX2FjdGl2ZUNoaWxkSW50ZXJ2YWxSO1xuXG4gICAgaWYgKCFzaG91bGRQbGF5KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGludGVydmFsSGFuZGxlUmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlID8gbmV4dFdoZW5WaXNpYmxlIDogbmV4dCwgKF9yZWYgPSAoX2FjdGl2ZUNoaWxkSW50ZXJ2YWxSID0gYWN0aXZlQ2hpbGRJbnRlcnZhbFJlZi5jdXJyZW50KSAhPSBudWxsID8gX2FjdGl2ZUNoaWxkSW50ZXJ2YWxSIDogaW50ZXJ2YWwpICE9IG51bGwgPyBfcmVmIDogdW5kZWZpbmVkKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGludGVydmFsSGFuZGxlUmVmLmN1cnJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbEhhbmRsZVJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbc2hvdWxkUGxheSwgbmV4dCwgYWN0aXZlQ2hpbGRJbnRlcnZhbFJlZiwgaW50ZXJ2YWwsIG5leHRXaGVuVmlzaWJsZV0pO1xuICB2YXIgaW5kaWNhdG9yT25DbGlja3MgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gaW5kaWNhdG9ycyAmJiBBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogbnVtQ2hpbGRyZW5cbiAgICB9LCBmdW5jdGlvbiAoXywgaW5kZXgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgaWYgKG9uU2VsZWN0KSB7XG4gICAgICAgICAgb25TZWxlY3QoaW5kZXgsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfSwgW2luZGljYXRvcnMsIG51bUNoaWxkcmVuLCBvblNlbGVjdF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IGVsZW1lbnRSZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgb25Nb3VzZU92ZXI6IGhhbmRsZU1vdXNlT3ZlcixcbiAgICBvbk1vdXNlT3V0OiBoYW5kbGVNb3VzZU91dCxcbiAgICBvblRvdWNoU3RhcnQ6IGhhbmRsZVRvdWNoU3RhcnQsXG4gICAgb25Ub3VjaE1vdmU6IGhhbmRsZVRvdWNoTW92ZSxcbiAgICBvblRvdWNoRW5kOiBoYW5kbGVUb3VjaEVuZCxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIHByZWZpeCwgc2xpZGUgJiYgJ3NsaWRlJywgZmFkZSAmJiBwcmVmaXggKyBcIi1mYWRlXCIpXG4gIH0pLCBpbmRpY2F0b3JzICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwib2xcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4ICsgXCItaW5kaWNhdG9yc1wiXG4gIH0sICgwLCBfRWxlbWVudENoaWxkcmVuLm1hcCkoY2hpbGRyZW4sIGZ1bmN0aW9uIChfY2hpbGQsIGluZGV4KSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAga2V5OiBpbmRleCxcbiAgICAgIGNsYXNzTmFtZTogaW5kZXggPT09IHJlbmRlcmVkQWN0aXZlSW5kZXggPyAnYWN0aXZlJyA6IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6IGluZGljYXRvck9uQ2xpY2tzID8gaW5kaWNhdG9yT25DbGlja3NbaW5kZXhdIDogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH0pKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4ICsgXCItaW5uZXJcIlxuICB9LCAoMCwgX0VsZW1lbnRDaGlsZHJlbi5tYXApKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgdmFyIGlzQWN0aXZlID0gaW5kZXggPT09IHJlbmRlcmVkQWN0aXZlSW5kZXg7XG4gICAgcmV0dXJuIHNsaWRlID8gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24uZGVmYXVsdCwge1xuICAgICAgaW46IGlzQWN0aXZlLFxuICAgICAgb25FbnRlcjogaXNBY3RpdmUgPyBoYW5kbGVFbnRlciA6IHVuZGVmaW5lZCxcbiAgICAgIG9uRW50ZXJlZDogaXNBY3RpdmUgPyBoYW5kbGVFbnRlcmVkIDogdW5kZWZpbmVkLFxuICAgICAgYWRkRW5kTGlzdGVuZXI6IF90cmFuc2l0aW9uRW5kLmRlZmF1bHRcbiAgICB9LCBmdW5jdGlvbiAoc3RhdHVzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjaGlsZC5wcm9wcy5jbGFzc05hbWUsIGlzQWN0aXZlICYmIHN0YXR1cyAhPT0gJ2VudGVyZWQnICYmIG9yZGVyQ2xhc3NOYW1lLCAoc3RhdHVzID09PSAnZW50ZXJlZCcgfHwgc3RhdHVzID09PSAnZXhpdGluZycpICYmICdhY3RpdmUnLCAoc3RhdHVzID09PSAnZW50ZXJpbmcnIHx8IHN0YXR1cyA9PT0gJ2V4aXRpbmcnKSAmJiBkaXJlY3Rpb25hbENsYXNzTmFtZSlcbiAgICAgIH0pO1xuICAgIH0pIDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2hpbGQucHJvcHMuY2xhc3NOYW1lLCBpc0FjdGl2ZSAmJiAnYWN0aXZlJylcbiAgICB9KTtcbiAgfSkpLCBjb250cm9scyAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgKHdyYXAgfHwgYWN0aXZlSW5kZXggIT09IDApICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TYWZlQW5jaG9yLmRlZmF1bHQsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeCArIFwiLWNvbnRyb2wtcHJldlwiLFxuICAgIG9uQ2xpY2s6IHByZXZcbiAgfSwgcHJldkljb24sIHByZXZMYWJlbCAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgfSwgcHJldkxhYmVsKSksICh3cmFwIHx8IGFjdGl2ZUluZGV4ICE9PSBudW1DaGlsZHJlbiAtIDEpICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TYWZlQW5jaG9yLmRlZmF1bHQsIHtcbiAgICBjbGFzc05hbWU6IHByZWZpeCArIFwiLWNvbnRyb2wtbmV4dFwiLFxuICAgIG9uQ2xpY2s6IG5leHRcbiAgfSwgbmV4dEljb24sIG5leHRMYWJlbCAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgfSwgbmV4dExhYmVsKSkpKTtcbn1cblxudmFyIENhcm91c2VsID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoQ2Fyb3VzZWxGdW5jKTtcblxuQ2Fyb3VzZWwuZGlzcGxheU5hbWUgPSAnQ2Fyb3VzZWwnO1xuQ2Fyb3VzZWwucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuQ2Fyb3VzZWwuQ2FwdGlvbiA9IF9DYXJvdXNlbENhcHRpb24uZGVmYXVsdDtcbkNhcm91c2VsLkl0ZW0gPSBfQ2Fyb3VzZWxJdGVtLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBDYXJvdXNlbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlV2l0aEJzUHJlZml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXaXRoQnNQcmVmaXhcIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnY2Fyb3VzZWwtY2FwdGlvbicpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgQ2Fyb3VzZWxJdGVtID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJhc1wiLCBcImJzUHJlZml4XCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIl0pO1xuICB2YXIgZmluYWxDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2Nhcm91c2VsLWl0ZW0nKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBmaW5hbENsYXNzTmFtZVxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5cbkNhcm91c2VsSXRlbS5kaXNwbGF5TmFtZSA9ICdDYXJvdXNlbEl0ZW0nO1xudmFyIF9kZWZhdWx0ID0gQ2Fyb3VzZWxJdGVtO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIHByb3BUeXBlcyA9IHtcbiAgbGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25DbGljazogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmNcbn07XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJ0Nsb3NlJ1xufTtcblxudmFyIENsb3NlQnV0dG9uID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgb25DbGljayA9IF9yZWYub25DbGljayxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImxhYmVsXCIsIFwib25DbGlja1wiLCBcImNsYXNzTmFtZVwiXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZixcbiAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKCdjbG9zZScsIGNsYXNzTmFtZSksXG4gICAgb25DbGljazogb25DbGlja1xuICB9LCBwcm9wcyksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBcIlxceEQ3XCIpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgfSwgbGFiZWwpKTtcbn0pO1xuXG5DbG9zZUJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdDbG9zZUJ1dHRvbic7XG5DbG9zZUJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5DbG9zZUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBDbG9zZUJ1dHRvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBERVZJQ0VfU0laRVMgPSBbJ3hsJywgJ2xnJywgJ21kJywgJ3NtJywgJ3hzJ107XG5cbnZhciBDb2wgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZiggLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImFzXCJdKTtcbiAgdmFyIHByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnY29sJyk7XG4gIHZhciBzcGFucyA9IFtdO1xuICB2YXIgY2xhc3NlcyA9IFtdO1xuICBERVZJQ0VfU0laRVMuZm9yRWFjaChmdW5jdGlvbiAoYnJrUG9pbnQpIHtcbiAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbYnJrUG9pbnRdO1xuICAgIGRlbGV0ZSBwcm9wc1ticmtQb2ludF07XG4gICAgdmFyIHNwYW47XG4gICAgdmFyIG9mZnNldDtcbiAgICB2YXIgb3JkZXI7XG5cbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ29iamVjdCcgJiYgcHJvcFZhbHVlICE9IG51bGwpIHtcbiAgICAgIHZhciBfcHJvcFZhbHVlJHNwYW4gPSBwcm9wVmFsdWUuc3BhbjtcbiAgICAgIHNwYW4gPSBfcHJvcFZhbHVlJHNwYW4gPT09IHZvaWQgMCA/IHRydWUgOiBfcHJvcFZhbHVlJHNwYW47XG4gICAgICBvZmZzZXQgPSBwcm9wVmFsdWUub2Zmc2V0O1xuICAgICAgb3JkZXIgPSBwcm9wVmFsdWUub3JkZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4gPSBwcm9wVmFsdWU7XG4gICAgfVxuXG4gICAgdmFyIGluZml4ID0gYnJrUG9pbnQgIT09ICd4cycgPyBcIi1cIiArIGJya1BvaW50IDogJyc7XG4gICAgaWYgKHNwYW4pIHNwYW5zLnB1c2goc3BhbiA9PT0gdHJ1ZSA/IFwiXCIgKyBwcmVmaXggKyBpbmZpeCA6IFwiXCIgKyBwcmVmaXggKyBpbmZpeCArIFwiLVwiICsgc3Bhbik7XG4gICAgaWYgKG9yZGVyICE9IG51bGwpIGNsYXNzZXMucHVzaChcIm9yZGVyXCIgKyBpbmZpeCArIFwiLVwiICsgb3JkZXIpO1xuICAgIGlmIChvZmZzZXQgIT0gbnVsbCkgY2xhc3Nlcy5wdXNoKFwib2Zmc2V0XCIgKyBpbmZpeCArIFwiLVwiICsgb2Zmc2V0KTtcbiAgfSk7XG5cbiAgaWYgKCFzcGFucy5sZW5ndGgpIHtcbiAgICBzcGFucy5wdXNoKHByZWZpeCk7IC8vIHBsYWluICdjb2wnXG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogX2NsYXNzbmFtZXMuZGVmYXVsdC5hcHBseSh2b2lkIDAsIFtjbGFzc05hbWVdLmNvbmNhdChzcGFucywgY2xhc3NlcykpXG4gIH0pKTtcbn0pO1xuXG5Db2wuZGlzcGxheU5hbWUgPSAnQ29sJztcbnZhciBfZGVmYXVsdCA9IENvbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY3NzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY3NzXCIpKTtcblxudmFyIF90cmFuc2l0aW9uRW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvdHJhbnNpdGlvbkVuZFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RyYW5zaXRpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uXCIpKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZUNoYWluZWRGdW5jdGlvblwiKSk7XG5cbnZhciBfdHJpZ2dlckJyb3dzZXJSZWZsb3cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3RyaWdnZXJCcm93c2VyUmVmbG93XCIpKTtcblxudmFyIF9jb2xsYXBzZVN0eWxlcztcblxudmFyIE1BUkdJTlMgPSB7XG4gIGhlaWdodDogWydtYXJnaW5Ub3AnLCAnbWFyZ2luQm90dG9tJ10sXG4gIHdpZHRoOiBbJ21hcmdpbkxlZnQnLCAnbWFyZ2luUmlnaHQnXVxufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdERpbWVuc2lvblZhbHVlKGRpbWVuc2lvbiwgZWxlbSkge1xuICB2YXIgb2Zmc2V0ID0gXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpO1xuICB2YXIgdmFsdWUgPSBlbGVtW29mZnNldF07XG4gIHZhciBtYXJnaW5zID0gTUFSR0lOU1tkaW1lbnNpb25dO1xuICByZXR1cm4gdmFsdWUgKyAvLyBAdHMtaWdub3JlXG4gIHBhcnNlSW50KCgwLCBfY3NzLmRlZmF1bHQpKGVsZW0sIG1hcmdpbnNbMF0pLCAxMCkgKyAvLyBAdHMtaWdub3JlXG4gIHBhcnNlSW50KCgwLCBfY3NzLmRlZmF1bHQpKGVsZW0sIG1hcmdpbnNbMV0pLCAxMCk7XG59XG5cbnZhciBjb2xsYXBzZVN0eWxlcyA9IChfY29sbGFwc2VTdHlsZXMgPSB7fSwgX2NvbGxhcHNlU3R5bGVzW19UcmFuc2l0aW9uLkVYSVRFRF0gPSAnY29sbGFwc2UnLCBfY29sbGFwc2VTdHlsZXNbX1RyYW5zaXRpb24uRVhJVElOR10gPSAnY29sbGFwc2luZycsIF9jb2xsYXBzZVN0eWxlc1tfVHJhbnNpdGlvbi5FTlRFUklOR10gPSAnY29sbGFwc2luZycsIF9jb2xsYXBzZVN0eWxlc1tfVHJhbnNpdGlvbi5FTlRFUkVEXSA9ICdjb2xsYXBzZSBzaG93JywgX2NvbGxhcHNlU3R5bGVzKTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGluOiBmYWxzZSxcbiAgdGltZW91dDogMzAwLFxuICBtb3VudE9uRW50ZXI6IGZhbHNlLFxuICB1bm1vdW50T25FeGl0OiBmYWxzZSxcbiAgYXBwZWFyOiBmYWxzZSxcbiAgZ2V0RGltZW5zaW9uVmFsdWU6IGdldERlZmF1bHREaW1lbnNpb25WYWx1ZVxufTtcblxudmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgb25FbnRlciA9IF9yZWYub25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcgPSBfcmVmLm9uRW50ZXJpbmcsXG4gICAgICBvbkVudGVyZWQgPSBfcmVmLm9uRW50ZXJlZCxcbiAgICAgIG9uRXhpdCA9IF9yZWYub25FeGl0LFxuICAgICAgb25FeGl0aW5nID0gX3JlZi5vbkV4aXRpbmcsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkZGltZW5zaW9uID0gX3JlZi5kaW1lbnNpb24sXG4gICAgICBkaW1lbnNpb24gPSBfcmVmJGRpbWVuc2lvbiA9PT0gdm9pZCAwID8gJ2hlaWdodCcgOiBfcmVmJGRpbWVuc2lvbixcbiAgICAgIF9yZWYkZ2V0RGltZW5zaW9uVmFsdSA9IF9yZWYuZ2V0RGltZW5zaW9uVmFsdWUsXG4gICAgICBnZXREaW1lbnNpb25WYWx1ZSA9IF9yZWYkZ2V0RGltZW5zaW9uVmFsdSA9PT0gdm9pZCAwID8gZ2V0RGVmYXVsdERpbWVuc2lvblZhbHVlIDogX3JlZiRnZXREaW1lbnNpb25WYWx1LFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcIm9uRW50ZXJcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FbnRlcmVkXCIsIFwib25FeGl0XCIsIFwib25FeGl0aW5nXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaW1lbnNpb25cIiwgXCJnZXREaW1lbnNpb25WYWx1ZVwiXSk7XG5cbiAgLyogQ29tcHV0ZSBkaW1lbnNpb24gKi9cbiAgdmFyIGNvbXB1dGVkRGltZW5zaW9uID0gdHlwZW9mIGRpbWVuc2lvbiA9PT0gJ2Z1bmN0aW9uJyA/IGRpbWVuc2lvbigpIDogZGltZW5zaW9uO1xuICAvKiAtLSBFeHBhbmRpbmcgLS0gKi9cblxuICB2YXIgaGFuZGxlRW50ZXIgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uZGVmYXVsdCkoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGVbY29tcHV0ZWREaW1lbnNpb25dID0gJzAnO1xuICAgIH0sIG9uRW50ZXIpO1xuICB9LCBbY29tcHV0ZWREaW1lbnNpb24sIG9uRW50ZXJdKTtcbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmRlZmF1bHQpKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICB2YXIgc2Nyb2xsID0gXCJzY3JvbGxcIiArIGNvbXB1dGVkRGltZW5zaW9uWzBdLnRvVXBwZXJDYXNlKCkgKyBjb21wdXRlZERpbWVuc2lvbi5zbGljZSgxKTtcbiAgICAgIGVsZW0uc3R5bGVbY29tcHV0ZWREaW1lbnNpb25dID0gZWxlbVtzY3JvbGxdICsgXCJweFwiO1xuICAgIH0sIG9uRW50ZXJpbmcpO1xuICB9LCBbY29tcHV0ZWREaW1lbnNpb24sIG9uRW50ZXJpbmddKTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uZGVmYXVsdCkoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGVbY29tcHV0ZWREaW1lbnNpb25dID0gbnVsbDtcbiAgICB9LCBvbkVudGVyZWQpO1xuICB9LCBbY29tcHV0ZWREaW1lbnNpb24sIG9uRW50ZXJlZF0pO1xuICAvKiAtLSBDb2xsYXBzaW5nIC0tICovXG5cbiAgdmFyIGhhbmRsZUV4aXQgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uZGVmYXVsdCkoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGVbY29tcHV0ZWREaW1lbnNpb25dID0gZ2V0RGltZW5zaW9uVmFsdWUoY29tcHV0ZWREaW1lbnNpb24sIGVsZW0pICsgXCJweFwiO1xuICAgICAgKDAsIF90cmlnZ2VyQnJvd3NlclJlZmxvdy5kZWZhdWx0KShlbGVtKTtcbiAgICB9LCBvbkV4aXQpO1xuICB9LCBbb25FeGl0LCBnZXREaW1lbnNpb25WYWx1ZSwgY29tcHV0ZWREaW1lbnNpb25dKTtcbiAgdmFyIGhhbmRsZUV4aXRpbmcgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uZGVmYXVsdCkoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGVbY29tcHV0ZWREaW1lbnNpb25dID0gbnVsbDtcbiAgICB9LCBvbkV4aXRpbmcpO1xuICB9LCBbY29tcHV0ZWREaW1lbnNpb24sIG9uRXhpdGluZ10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RyYW5zaXRpb24uZGVmYXVsdCAvLyBAdHMtaWdub3JlXG4gICwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWYsXG4gICAgYWRkRW5kTGlzdGVuZXI6IF90cmFuc2l0aW9uRW5kLmRlZmF1bHRcbiAgfSwgcHJvcHMsIHtcbiAgICBcImFyaWEtZXhwYW5kZWRcIjogcHJvcHMucm9sZSA/IHByb3BzLmluIDogbnVsbCxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGluZzogaGFuZGxlRXhpdGluZ1xuICB9KSwgZnVuY3Rpb24gKHN0YXRlLCBpbm5lclByb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIGlubmVyUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgY2hpbGRyZW4ucHJvcHMuY2xhc3NOYW1lLCBjb2xsYXBzZVN0eWxlc1tzdGF0ZV0sIGNvbXB1dGVkRGltZW5zaW9uID09PSAnd2lkdGgnICYmICd3aWR0aCcpXG4gICAgfSkpO1xuICB9KTtcbn0pOyAvLyBAdHMtaWdub3JlXG5cblxuLy8gQHRzLWlnbm9yZVxuQ29sbGFwc2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gQ29sbGFwc2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBmbHVpZDogZmFsc2Vcbn07XG5cbnZhciBDb250YWluZXIgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBmbHVpZCA9IF9yZWYuZmx1aWQsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3JlZiRhcyxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiZmx1aWRcIiwgXCJhc1wiLCBcImNsYXNzTmFtZVwiXSk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2NvbnRhaW5lcicpO1xuICB2YXIgc3VmZml4ID0gdHlwZW9mIGZsdWlkID09PSAnc3RyaW5nJyA/IFwiLVwiICsgZmx1aWQgOiAnLWZsdWlkJztcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGZsdWlkID8gXCJcIiArIHByZWZpeCArIHN1ZmZpeCA6IHByZWZpeClcbiAgfSkpO1xufSk7XG5cbkNvbnRhaW5lci5kaXNwbGF5TmFtZSA9ICdDb250YWluZXInO1xuQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IENvbnRhaW5lcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Ryb3Bkb3duID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtb3ZlcmxheXMvRHJvcGRvd25cIikpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZShcInVuY29udHJvbGxhYmxlXCIpO1xuXG52YXIgX3VzZUV2ZW50Q2FsbGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrXCIpKTtcblxudmFyIF9Ecm9wZG93bkl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Ryb3Bkb3duSXRlbVwiKSk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ecm9wZG93bk1lbnVcIikpO1xuXG52YXIgX0Ryb3Bkb3duVG9nZ2xlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ecm9wZG93blRvZ2dsZVwiKSk7XG5cbnZhciBfU2VsZWN0YWJsZUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NlbGVjdGFibGVDb250ZXh0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF9jcmVhdGVXaXRoQnNQcmVmaXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdpdGhCc1ByZWZpeFwiKSk7XG5cbnZhciBEcm9wZG93bkhlYWRlciA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdkcm9wZG93bi1oZWFkZXInLCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHJvbGU6ICdoZWFkaW5nJ1xuICB9XG59KTtcbnZhciBEcm9wZG93bkRpdmlkZXIgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnZHJvcGRvd24tZGl2aWRlcicsIHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgcm9sZTogJ3NlcGFyYXRvcidcbiAgfVxufSk7XG52YXIgRHJvcGRvd25JdGVtVGV4dCA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdkcm9wZG93bi1pdGVtLXRleHQnLCB7XG4gIENvbXBvbmVudDogJ3NwYW4nXG59KTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIG5hdmJhcjogZmFsc2Vcbn07XG5cbnZhciBEcm9wZG93biA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwUHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVVuY29udHJvbGxlZCA9ICgwLCBfdW5jb250cm9sbGFibGUudXNlVW5jb250cm9sbGVkKShwUHJvcHMsIHtcbiAgICBzaG93OiAnb25Ub2dnbGUnXG4gIH0pLFxuICAgICAgYnNQcmVmaXggPSBfdXNlVW5jb250cm9sbGVkLmJzUHJlZml4LFxuICAgICAgZHJvcCA9IF91c2VVbmNvbnRyb2xsZWQuZHJvcCxcbiAgICAgIHNob3cgPSBfdXNlVW5jb250cm9sbGVkLnNob3csXG4gICAgICBjbGFzc05hbWUgPSBfdXNlVW5jb250cm9sbGVkLmNsYXNzTmFtZSxcbiAgICAgIGFsaWduUmlnaHQgPSBfdXNlVW5jb250cm9sbGVkLmFsaWduUmlnaHQsXG4gICAgICBvblNlbGVjdCA9IF91c2VVbmNvbnRyb2xsZWQub25TZWxlY3QsXG4gICAgICBvblRvZ2dsZSA9IF91c2VVbmNvbnRyb2xsZWQub25Ub2dnbGUsXG4gICAgICBmb2N1c0ZpcnN0SXRlbU9uU2hvdyA9IF91c2VVbmNvbnRyb2xsZWQuZm9jdXNGaXJzdEl0ZW1PblNob3csXG4gICAgICBfdXNlVW5jb250cm9sbGVkJGFzID0gX3VzZVVuY29udHJvbGxlZC5hcyxcbiAgICAgIENvbXBvbmVudCA9IF91c2VVbmNvbnRyb2xsZWQkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3VzZVVuY29udHJvbGxlZCRhcyxcbiAgICAgIF80ID0gX3VzZVVuY29udHJvbGxlZC5uYXZiYXIsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiYnNQcmVmaXhcIiwgXCJkcm9wXCIsIFwic2hvd1wiLCBcImNsYXNzTmFtZVwiLCBcImFsaWduUmlnaHRcIiwgXCJvblNlbGVjdFwiLCBcIm9uVG9nZ2xlXCIsIFwiZm9jdXNGaXJzdEl0ZW1PblNob3dcIiwgXCJhc1wiLCBcIm5hdmJhclwiXSk7XG5cbiAgdmFyIG9uU2VsZWN0Q3R4ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfU2VsZWN0YWJsZUNvbnRleHQuZGVmYXVsdCk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2Ryb3Bkb3duJyk7XG4gIHZhciBoYW5kbGVUb2dnbGUgPSAoMCwgX3VzZUV2ZW50Q2FsbGJhY2suZGVmYXVsdCkoZnVuY3Rpb24gKG5leHRTaG93LCBldmVudCwgc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSA9PT0gdm9pZCAwKSB7XG4gICAgICBzb3VyY2UgPSBldmVudC50eXBlO1xuICAgIH1cblxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ID09PSBkb2N1bWVudCkgc291cmNlID0gJ3Jvb3RDbG9zZSc7XG5cbiAgICBpZiAob25Ub2dnbGUpIHtcbiAgICAgIG9uVG9nZ2xlKG5leHRTaG93LCBldmVudCwge1xuICAgICAgICBzb3VyY2U6IHNvdXJjZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZVNlbGVjdCA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShmdW5jdGlvbiAoa2V5LCBldmVudCkge1xuICAgIGlmIChvblNlbGVjdEN0eCkgb25TZWxlY3RDdHgoa2V5LCBldmVudCk7XG4gICAgaWYgKG9uU2VsZWN0KSBvblNlbGVjdChrZXksIGV2ZW50KTtcbiAgICBoYW5kbGVUb2dnbGUoZmFsc2UsIGV2ZW50LCAnc2VsZWN0Jyk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaGFuZGxlU2VsZWN0XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ecm9wZG93bi5kZWZhdWx0LCB7XG4gICAgZHJvcDogZHJvcCxcbiAgICBzaG93OiBzaG93LFxuICAgIGFsaWduRW5kOiBhbGlnblJpZ2h0LFxuICAgIG9uVG9nZ2xlOiBoYW5kbGVUb2dnbGUsXG4gICAgZm9jdXNGaXJzdEl0ZW1PblNob3c6IGZvY3VzRmlyc3RJdGVtT25TaG93LFxuICAgIGl0ZW1TZWxlY3RvcjogXCIuXCIgKyBwcmVmaXggKyBcIi1pdGVtOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpXCJcbiAgfSwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZHJvcGRvd25Qcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIGRyb3Bkb3duUHJvcHMsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBzaG93ICYmICdzaG93JywgKCFkcm9wIHx8IGRyb3AgPT09ICdkb3duJykgJiYgcHJlZml4LCBkcm9wID09PSAndXAnICYmICdkcm9wdXAnLCBkcm9wID09PSAncmlnaHQnICYmICdkcm9wcmlnaHQnLCBkcm9wID09PSAnbGVmdCcgJiYgJ2Ryb3BsZWZ0JylcbiAgICB9KSk7XG4gIH0pKTtcbn0pO1xuXG5Ecm9wZG93bi5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bic7XG5Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5Ecm9wZG93bi5EaXZpZGVyID0gRHJvcGRvd25EaXZpZGVyO1xuRHJvcGRvd24uSGVhZGVyID0gRHJvcGRvd25IZWFkZXI7XG5Ecm9wZG93bi5JdGVtID0gX0Ryb3Bkb3duSXRlbS5kZWZhdWx0O1xuRHJvcGRvd24uSXRlbVRleHQgPSBEcm9wZG93bkl0ZW1UZXh0O1xuRHJvcGRvd24uTWVudSA9IF9Ecm9wZG93bk1lbnUuZGVmYXVsdDtcbkRyb3Bkb3duLlRvZ2dsZSA9IF9Ecm9wZG93blRvZ2dsZS5kZWZhdWx0O1xudmFyIF9kZWZhdWx0ID0gRHJvcGRvd247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfRHJvcGRvd24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Ryb3Bkb3duXCIpKTtcblxudmFyIF9Ecm9wZG93blRvZ2dsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRHJvcGRvd25Ub2dnbGVcIikpO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL0Ryb3Bkb3duTWVudVwiKSk7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBBbiBodG1sIGlkIGF0dHJpYnV0ZSBmb3IgdGhlIFRvZ2dsZSBidXR0b24sIG5lY2Vzc2FyeSBmb3IgYXNzaXN0aXZlIHRlY2hub2xvZ2llcywgc3VjaCBhcyBzY3JlZW4gcmVhZGVycy5cbiAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAqIEByZXF1aXJlZFxuICAgKi9cbiAgaWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5hbnksXG5cbiAgLyoqIEFuIGBocmVmYCBwYXNzZWQgdG8gdGhlIFRvZ2dsZSBjb21wb25lbnQgKi9cbiAgaHJlZjogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKiogQW4gYG9uQ2xpY2tgIGhhbmRsZXIgcGFzc2VkIHRvIHRoZSBUb2dnbGUgY29tcG9uZW50ICovXG4gIG9uQ2xpY2s6IF9wcm9wVHlwZXMuZGVmYXVsdC5mdW5jLFxuXG4gIC8qKiBUaGUgY29udGVudCBvZiB0aGUgbm9uLXRvZ2dsZSBCdXR0b24uICAqL1xuICB0aXRsZTogX3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZCxcblxuICAvKiogRGlzYWJsZXMgYm90aCBCdXR0b25zICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEFsaWducyB0aGUgZHJvcGRvd24gbWVudSByZXNwb25zaXZlbHkuXG4gICAqXG4gICAqIF9zZWUgW0Ryb3Bkb3duTWVudV0oI2Ryb3Bkb3duLW1lbnUtcHJvcHMpIGZvciBtb3JlIGRldGFpbHNfXG4gICAqXG4gICAqIEB0eXBlIHtcImxlZnRcInxcInJpZ2h0XCJ8eyBzbTogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyBtZDogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyBsZzogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyB4bDogXCJsZWZ0XCJ8XCJyaWdodFwifSB9XG4gICAqL1xuICBtZW51QWxpZ246IF9Ecm9wZG93bk1lbnUuYWxpZ25Qcm9wVHlwZSxcblxuICAvKiogQW4gQVJJQSBhY2Nlc3NpYmxlIHJvbGUgYXBwbGllZCB0byB0aGUgTWVudSBjb21wb25lbnQuIFdoZW4gc2V0IHRvICdtZW51JywgVGhlIGRyb3Bkb3duICovXG4gIG1lbnVSb2xlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgZHJvcGRvd24gbWVudSBpbiB0aGUgRE9NIGJlZm9yZSB0aGUgZmlyc3QgdGltZSBpdCBpcyBzaG93biAqL1xuICByZW5kZXJNZW51T25Nb3VudDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqICBXaGljaCBldmVudCB3aGVuIGZpcmVkIG91dHNpZGUgdGhlIGNvbXBvbmVudCB3aWxsIGNhdXNlIGl0IHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogX3NlZSBbRHJvcGRvd25NZW51XSgjZHJvcGRvd24tbWVudS1wcm9wcykgZm9yIG1vcmUgZGV0YWlsc19cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICovXG4gIGJzUHJlZml4OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICovXG4gIHZhcmlhbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgc2l6ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufTtcbi8qKlxuICogQSBjb252ZW5pZW5jZSBjb21wb25lbnQgZm9yIHNpbXBsZSBvciBnZW5lcmFsIHVzZSBkcm9wZG93bnMuIFJlbmRlcnMgYSBgQnV0dG9uYCB0b2dnbGUgYW5kIGFsbCBgY2hpbGRyZW5gXG4gKiBhcmUgcGFzc2VkIGRpcmVjdGx5IHRvIHRoZSBkZWZhdWx0IGBEcm9wZG93bi5NZW51YC4gVGhpcyBjb21wb25lbnQgYWNjZXB0cyBhbGwgb2ZcbiAqIFtgRHJvcGRvd25gJ3MgcHJvcHNdKCNkcm9wZG93bi1wcm9wcykuXG4gKlxuICogX0FsbCB1bmtub3duIHByb3BzIGFyZSBwYXNzZWQgdGhyb3VnaCB0byB0aGUgYERyb3Bkb3duYCBjb21wb25lbnQuXyBPbmx5XG4gKiB0aGUgQnV0dG9uIGB2YXJpYW50YCwgYHNpemVgIGFuZCBgYnNQcmVmaXhgIHByb3BzIGFyZSBwYXNzZWQgdG8gdGhlIHRvZ2dsZSxcbiAqIGFsb25nIHdpdGggbWVudS1yZWxhdGVkIHByb3BzIGFyZSBwYXNzZWQgdG8gdGhlIGBEcm9wZG93bi5NZW51YFxuICovXG5cbnZhciBEcm9wZG93bkJ1dHRvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHJvb3RDbG9zZUV2ZW50ID0gX3JlZi5yb290Q2xvc2VFdmVudCxcbiAgICAgIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICBzaXplID0gX3JlZi5zaXplLFxuICAgICAgbWVudUFsaWduID0gX3JlZi5tZW51QWxpZ24sXG4gICAgICBtZW51Um9sZSA9IF9yZWYubWVudVJvbGUsXG4gICAgICByZW5kZXJNZW51T25Nb3VudCA9IF9yZWYucmVuZGVyTWVudU9uTW91bnQsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBocmVmID0gX3JlZi5ocmVmLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcInRpdGxlXCIsIFwiY2hpbGRyZW5cIiwgXCJic1ByZWZpeFwiLCBcInJvb3RDbG9zZUV2ZW50XCIsIFwidmFyaWFudFwiLCBcInNpemVcIiwgXCJtZW51QWxpZ25cIiwgXCJtZW51Um9sZVwiLCBcInJlbmRlck1lbnVPbk1vdW50XCIsIFwiZGlzYWJsZWRcIiwgXCJocmVmXCIsIFwiaWRcIl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duVG9nZ2xlLmRlZmF1bHQsIHtcbiAgICBpZDogaWQsXG4gICAgaHJlZjogaHJlZixcbiAgICBzaXplOiBzaXplLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGNoaWxkQnNQcmVmaXg6IGJzUHJlZml4XG4gIH0sIHRpdGxlKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duTWVudS5kZWZhdWx0LCB7XG4gICAgYWxpZ246IG1lbnVBbGlnbixcbiAgICByb2xlOiBtZW51Um9sZSxcbiAgICByZW5kZXJPbk1vdW50OiByZW5kZXJNZW51T25Nb3VudCxcbiAgICByb290Q2xvc2VFdmVudDogcm9vdENsb3NlRXZlbnRcbiAgfSwgY2hpbGRyZW4pKTtcbn0pO1xuXG5Ecm9wZG93bkJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bkJ1dHRvbic7XG5Ecm9wZG93bkJ1dHRvbi5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG52YXIgX2RlZmF1bHQgPSBEcm9wZG93bkJ1dHRvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VzZUV2ZW50Q2FsbGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrXCIpKTtcblxudmFyIF9TZWxlY3RhYmxlQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCIuL1NlbGVjdGFibGVDb250ZXh0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF9OYXZDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZDb250ZXh0XCIpKTtcblxudmFyIF9TYWZlQW5jaG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TYWZlQW5jaG9yXCIpKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYXM6IF9TYWZlQW5jaG9yLmRlZmF1bHQsXG4gIGRpc2FibGVkOiBmYWxzZVxufTtcblxudmFyIERyb3Bkb3duSXRlbSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgZXZlbnRLZXkgPSBfcmVmLmV2ZW50S2V5LFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgaHJlZiA9IF9yZWYuaHJlZixcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBwcm9wQWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBDb21wb25lbnQgPSBfcmVmLmFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJldmVudEtleVwiLCBcImRpc2FibGVkXCIsIFwiaHJlZlwiLCBcIm9uQ2xpY2tcIiwgXCJvblNlbGVjdFwiLCBcImFjdGl2ZVwiLCBcImFzXCJdKTtcbiAgdmFyIHByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnZHJvcGRvd24taXRlbScpO1xuICB2YXIgb25TZWxlY3RDdHggPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9TZWxlY3RhYmxlQ29udGV4dC5kZWZhdWx0KTtcbiAgdmFyIG5hdkNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9OYXZDb250ZXh0LmRlZmF1bHQpO1xuXG4gIHZhciBfcmVmMiA9IG5hdkNvbnRleHQgfHwge30sXG4gICAgICBhY3RpdmVLZXkgPSBfcmVmMi5hY3RpdmVLZXk7IC8vIFRPRE86IFJlc3RyaWN0IGV2ZW50S2V5IHRvIHN0cmluZyBpbiB2NT9cblxuXG4gIHZhciBrZXkgPSAoMCwgX1NlbGVjdGFibGVDb250ZXh0Lm1ha2VFdmVudEtleSkoZXZlbnRLZXksIGhyZWYpO1xuICB2YXIgYWN0aXZlID0gcHJvcEFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsID8gKDAsIF9TZWxlY3RhYmxlQ29udGV4dC5tYWtlRXZlbnRLZXkpKGFjdGl2ZUtleSkgPT09IGtleSA6IHByb3BBY3RpdmU7XG4gIHZhciBoYW5kbGVDbGljayA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBTYWZlQW5jaG9yIGhhbmRsZXMgdGhlIGRpc2FibGVkIGNhc2UsIGJ1dCB3ZSBoYW5kbGUgaXQgaGVyZVxuICAgIC8vIGZvciBvdGhlciBjb21wb25lbnRzXG4gICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soZXZlbnQpO1xuICAgIGlmIChvblNlbGVjdEN0eCkgb25TZWxlY3RDdHgoa2V5LCBldmVudCk7XG4gICAgaWYgKG9uU2VsZWN0KSBvblNlbGVjdChrZXksIGV2ZW50KTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIFwiVFMyNjA0OiBKU1ggZWxlbWVudCB0eXBlICdDb21wb25lbnQnIGRvZXMgbm90IGhhdmUgYW55IGNvbnN0cnVjdCBvciBjYWxsIHNpZ25hdHVyZXMuXCJcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGhyZWY6IGhyZWYsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIHByZWZpeCwgYWN0aXZlICYmICdhY3RpdmUnLCBkaXNhYmxlZCAmJiAnZGlzYWJsZWQnKSxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrXG4gICAgfSksIGNoaWxkcmVuKVxuICApO1xufSk7XG5cbkRyb3Bkb3duSXRlbS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bkl0ZW0nO1xuRHJvcGRvd25JdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IERyb3Bkb3duSXRlbTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLmFsaWduUHJvcFR5cGUgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Ryb3Bkb3duTWVudSA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93bk1lbnVcIik7XG5cbnZhciBfdXNlTWVyZ2VkUmVmcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnNcIikpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ3YXJuaW5nXCIpKTtcblxudmFyIF9OYXZiYXJDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZiYXJDb250ZXh0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF91c2VXcmFwcGVkUmVmV2l0aFdhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3VzZVdyYXBwZWRSZWZXaXRoV2FybmluZ1wiKSk7XG5cbnZhciBfdXNlUG9wcGVyTWFyZ2luTW9kaWZpZXJzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91c2VQb3BwZXJNYXJnaW5Nb2RpZmllcnNcIikpO1xuXG52YXIgYWxpZ25EaXJlY3Rpb24gPSBfcHJvcFR5cGVzLmRlZmF1bHQub25lT2YoWydsZWZ0JywgJ3JpZ2h0J10pO1xuXG52YXIgYWxpZ25Qcm9wVHlwZSA9IF9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW2FsaWduRGlyZWN0aW9uLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBzbTogYWxpZ25EaXJlY3Rpb25cbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBtZDogYWxpZ25EaXJlY3Rpb25cbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICBsZzogYWxpZ25EaXJlY3Rpb25cbn0pLCBfcHJvcFR5cGVzLmRlZmF1bHQuc2hhcGUoe1xuICB4bDogYWxpZ25EaXJlY3Rpb25cbn0pXSk7XG5cbmV4cG9ydHMuYWxpZ25Qcm9wVHlwZSA9IGFsaWduUHJvcFR5cGU7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhbGlnbjogJ2xlZnQnLFxuICBhbGlnblJpZ2h0OiBmYWxzZSxcbiAgZmxpcDogdHJ1ZVxufTsgLy8gVE9ETzogcmVtb3ZlIHRoaXMgaGFja1xuXG52YXIgRHJvcGRvd25NZW51ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBhbGlnbiA9IF9yZWYuYWxpZ24sXG4gICAgICBhbGlnblJpZ2h0ID0gX3JlZi5hbGlnblJpZ2h0LFxuICAgICAgcm9vdENsb3NlRXZlbnQgPSBfcmVmLnJvb3RDbG9zZUV2ZW50LFxuICAgICAgZmxpcCA9IF9yZWYuZmxpcCxcbiAgICAgIHNob3dQcm9wcyA9IF9yZWYuc2hvdyxcbiAgICAgIHJlbmRlck9uTW91bnQgPSBfcmVmLnJlbmRlck9uTW91bnQsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3JlZiRhcyxcbiAgICAgIHBvcHBlckNvbmZpZyA9IF9yZWYucG9wcGVyQ29uZmlnLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiYWxpZ25cIiwgXCJhbGlnblJpZ2h0XCIsIFwicm9vdENsb3NlRXZlbnRcIiwgXCJmbGlwXCIsIFwic2hvd1wiLCBcInJlbmRlck9uTW91bnRcIiwgXCJhc1wiLCBcInBvcHBlckNvbmZpZ1wiXSk7XG4gIHZhciBpc05hdmJhciA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX05hdmJhckNvbnRleHQuZGVmYXVsdCk7XG4gIHZhciBwcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2Ryb3Bkb3duLW1lbnUnKTtcblxuICB2YXIgX3VzZVBvcHBlck1hcmdpbk1vZGlmID0gKDAsIF91c2VQb3BwZXJNYXJnaW5Nb2RpZmllcnMuZGVmYXVsdCkoKSxcbiAgICAgIHBvcHBlclJlZiA9IF91c2VQb3BwZXJNYXJnaW5Nb2RpZlswXSxcbiAgICAgIG1hcmdpbk1vZGlmaWVycyA9IF91c2VQb3BwZXJNYXJnaW5Nb2RpZlsxXTtcblxuICB2YXIgYWxpZ25DbGFzc2VzID0gW107XG5cbiAgaWYgKGFsaWduKSB7XG4gICAgaWYgKHR5cGVvZiBhbGlnbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWxpZ24pO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nLmRlZmF1bHQpKGtleXMubGVuZ3RoID09PSAxLCAnVGhlcmUgc2hvdWxkIG9ubHkgYmUgMSBicmVha3BvaW50IHdoZW4gcGFzc2luZyBhbiBvYmplY3QgdG8gYGFsaWduYCcpIDogdm9pZCAwO1xuXG4gICAgICBpZiAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGJya1BvaW50ID0ga2V5c1swXTtcbiAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGFsaWduW2Jya1BvaW50XTsgLy8gLmRyb3Bkb3duLW1lbnUtcmlnaHQgaXMgcmVxdWlyZWQgZm9yIHJlc3BvbnNpdmVseSBhbGlnbmluZ1xuICAgICAgICAvLyBsZWZ0IGluIGFkZGl0aW9uIHRvIGFsaWduIGxlZnQgY2xhc3Nlcy5cbiAgICAgICAgLy8gUmV1c2UgYWxpZ25SaWdodCB0byB0b2dnbGUgdGhlIGNsYXNzIGJlbG93LlxuXG4gICAgICAgIGFsaWduUmlnaHQgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JztcbiAgICAgICAgYWxpZ25DbGFzc2VzLnB1c2gocHJlZml4ICsgXCItXCIgKyBicmtQb2ludCArIFwiLVwiICsgZGlyZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICBhbGlnblJpZ2h0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB2YXIgX3JlZjIgPSAoMCwgX0Ryb3Bkb3duTWVudS51c2VEcm9wZG93bk1lbnUpKHtcbiAgICBmbGlwOiBmbGlwLFxuICAgIHJvb3RDbG9zZUV2ZW50OiByb290Q2xvc2VFdmVudCxcbiAgICBzaG93OiBzaG93UHJvcHMsXG4gICAgYWxpZ25FbmQ6IGFsaWduUmlnaHQsXG4gICAgdXNlUG9wcGVyOiAhaXNOYXZiYXIgJiYgYWxpZ25DbGFzc2VzLmxlbmd0aCA9PT0gMCxcbiAgICBwb3BwZXJDb25maWc6ICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHBvcHBlckNvbmZpZywge1xuICAgICAgbW9kaWZpZXJzOiBtYXJnaW5Nb2RpZmllcnMuY29uY2F0KChwb3BwZXJDb25maWcgPT0gbnVsbCA/IHZvaWQgMCA6IHBvcHBlckNvbmZpZy5tb2RpZmllcnMpIHx8IFtdKVxuICAgIH0pXG4gIH0pLFxuICAgICAgaGFzU2hvd24gPSBfcmVmMi5oYXNTaG93bixcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgIHNob3cgPSBfcmVmMi5zaG93LFxuICAgICAgYWxpZ25FbmQgPSBfcmVmMi5hbGlnbkVuZCxcbiAgICAgIGNsb3NlID0gX3JlZjIuY2xvc2UsXG4gICAgICBtZW51UHJvcHMgPSBfcmVmMi5wcm9wcztcblxuICBtZW51UHJvcHMucmVmID0gKDAsIF91c2VNZXJnZWRSZWZzLmRlZmF1bHQpKHBvcHBlclJlZiwgKDAsIF91c2VNZXJnZWRSZWZzLmRlZmF1bHQpKCgwLCBfdXNlV3JhcHBlZFJlZldpdGhXYXJuaW5nLmRlZmF1bHQpKHJlZiwgJ0Ryb3Bkb3duTWVudScpLCBtZW51UHJvcHMucmVmKSk7XG4gIGlmICghaGFzU2hvd24gJiYgIXJlbmRlck9uTW91bnQpIHJldHVybiBudWxsOyAvLyBGb3IgY3VzdG9tIGNvbXBvbmVudHMgcHJvdmlkZSBhZGRpdGlvbmFsLCBub24tRE9NLCBwcm9wcztcblxuICBpZiAodHlwZW9mIENvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICBtZW51UHJvcHMuc2hvdyA9IHNob3c7XG4gICAgbWVudVByb3BzLmNsb3NlID0gY2xvc2U7XG4gICAgbWVudVByb3BzLmFsaWduUmlnaHQgPSBhbGlnbkVuZDtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IHByb3BzLnN0eWxlO1xuXG4gIGlmIChwbGFjZW1lbnQpIHtcbiAgICAvLyB3ZSBkb24ndCBuZWVkIHRoZSBkZWZhdWx0IHBvcHBlciBzdHlsZSxcbiAgICAvLyBtZW51cyBhcmUgZGlzcGxheTogbm9uZSB3aGVuIG5vdCBzaG93bi5cbiAgICBzdHlsZSA9ICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLnN0eWxlLCBtZW51UHJvcHMuc3R5bGUpO1xuICAgIHByb3BzWyd4LXBsYWNlbWVudCddID0gcGxhY2VtZW50O1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIG1lbnVQcm9wcywge1xuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6IF9jbGFzc25hbWVzLmRlZmF1bHQuYXBwbHkodm9pZCAwLCBbY2xhc3NOYW1lLCBwcmVmaXgsIHNob3cgJiYgJ3Nob3cnLCBhbGlnbkVuZCAmJiBwcmVmaXggKyBcIi1yaWdodFwiXS5jb25jYXQoYWxpZ25DbGFzc2VzKSlcbiAgfSkpO1xufSk7XG5cbkRyb3Bkb3duTWVudS5kaXNwbGF5TmFtZSA9ICdEcm9wZG93bk1lbnUnO1xuRHJvcGRvd25NZW51LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IERyb3Bkb3duTWVudTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXMtZXh0cmEvbGliL2lzUmVxdWlyZWRGb3JBMTF5XCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Ecm9wZG93blRvZ2dsZSA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93blRvZ2dsZVwiKTtcblxudmFyIF91c2VNZXJnZWRSZWZzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmc1wiKSk7XG5cbnZhciBfQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9CdXR0b25cIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX3VzZVdyYXBwZWRSZWZXaXRoV2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXNlV3JhcHBlZFJlZldpdGhXYXJuaW5nXCIpKTtcblxudmFyIERyb3Bkb3duVG9nZ2xlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgc3BsaXQgPSBfcmVmLnNwbGl0LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZEJzUHJlZml4ID0gX3JlZi5jaGlsZEJzUHJlZml4LFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyBfQnV0dG9uLmRlZmF1bHQgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwic3BsaXRcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZEJzUHJlZml4XCIsIFwiYXNcIl0pO1xuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdkcm9wZG93bi10b2dnbGUnKTtcblxuICBpZiAoY2hpbGRCc1ByZWZpeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMuYnNQcmVmaXggPSBjaGlsZEJzUHJlZml4O1xuICB9XG5cbiAgdmFyIF91c2VEcm9wZG93blRvZ2dsZSA9ICgwLCBfRHJvcGRvd25Ub2dnbGUudXNlRHJvcGRvd25Ub2dnbGUpKCksXG4gICAgICB0b2dnbGVQcm9wcyA9IF91c2VEcm9wZG93blRvZ2dsZVswXSxcbiAgICAgIHRvZ2dsZSA9IF91c2VEcm9wZG93blRvZ2dsZVsxXS50b2dnbGU7XG5cbiAgdG9nZ2xlUHJvcHMucmVmID0gKDAsIF91c2VNZXJnZWRSZWZzLmRlZmF1bHQpKHRvZ2dsZVByb3BzLnJlZiwgKDAsIF91c2VXcmFwcGVkUmVmV2l0aFdhcm5pbmcuZGVmYXVsdCkocmVmLCAnRHJvcGRvd25Ub2dnbGUnKSk7IC8vIFRoaXMgaW50ZW50aW9uYWxseSBmb3J3YXJkcyBzaXplIGFuZCB2YXJpYW50IChpZiBzZXQpIHRvIHRoZVxuICAvLyB1bmRlcmx5aW5nIGNvbXBvbmVudCwgdG8gYWxsb3cgaXQgdG8gcmVuZGVyIHNpemUgYW5kIHN0eWxlIHZhcmlhbnRzLlxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIG9uQ2xpY2s6IHRvZ2dsZSxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIHByZWZpeCwgc3BsaXQgJiYgcHJlZml4ICsgXCItc3BsaXRcIilcbiAgfSwgdG9nZ2xlUHJvcHMsIHByb3BzKSk7XG59KTtcblxuRHJvcGRvd25Ub2dnbGUuZGlzcGxheU5hbWUgPSAnRHJvcGRvd25Ub2dnbGUnO1xudmFyIF9kZWZhdWx0ID0gRHJvcGRvd25Ub2dnbGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5tYXAgPSBtYXA7XG5leHBvcnRzLmZvckVhY2ggPSBmb3JFYWNoO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgbWFwcyBvdmVyIGNoaWxkcmVuIHRoYXQgYXJlIFwidmFsaWQgZWxlbWVudHNcIi5cbiAqXG4gKiBUaGUgbWFwRnVuY3Rpb24gcHJvdmlkZWQgaW5kZXggd2lsbCBiZSBub3JtYWxpc2VkIHRvIHRoZSBjb21wb25lbnRzIG1hcHBlZCxcbiAqIHNvIGFuIGludmFsaWQgY29tcG9uZW50IHdvdWxkIG5vdCBpbmNyZWFzZSB0aGUgaW5kZXguXG4gKlxuICovXG5mdW5jdGlvbiBtYXAoY2hpbGRyZW4sIGZ1bmMpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgPyBmdW5jKGNoaWxkLCBpbmRleCsrKSA6IGNoaWxkO1xuICB9KTtcbn1cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGVsZW1lbnRzXCIuXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKi9cblxuXG5mdW5jdGlvbiBmb3JFYWNoKGNoaWxkcmVuLCBmdW5jKSB7XG4gIHZhciBpbmRleCA9IDA7XG5cbiAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSBmdW5jKGNoaWxkLCBpbmRleCsrKTtcbiAgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3RyYW5zaXRpb25FbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy90cmFuc2l0aW9uRW5kXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVHJhbnNpdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb25cIikpO1xuXG52YXIgX3RyaWdnZXJCcm93c2VyUmVmbG93ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi90cmlnZ2VyQnJvd3NlclJlZmxvd1wiKSk7XG5cbnZhciBfZmFkZVN0eWxlcztcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgaW46IGZhbHNlLFxuICB0aW1lb3V0OiAzMDAsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlLFxuICBhcHBlYXI6IGZhbHNlXG59O1xudmFyIGZhZGVTdHlsZXMgPSAoX2ZhZGVTdHlsZXMgPSB7fSwgX2ZhZGVTdHlsZXNbX1RyYW5zaXRpb24uRU5URVJJTkddID0gJ3Nob3cnLCBfZmFkZVN0eWxlc1tfVHJhbnNpdGlvbi5FTlRFUkVEXSA9ICdzaG93JywgX2ZhZGVTdHlsZXMpO1xuXG52YXIgRmFkZSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgdmFyIGhhbmRsZUVudGVyID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAoMCwgX3RyaWdnZXJCcm93c2VyUmVmbG93LmRlZmF1bHQpKG5vZGUpO1xuICAgIGlmIChwcm9wcy5vbkVudGVyKSBwcm9wcy5vbkVudGVyKG5vZGUpO1xuICB9LCBbcHJvcHNdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9UcmFuc2l0aW9uLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmLFxuICAgIGFkZEVuZExpc3RlbmVyOiBfdHJhbnNpdGlvbkVuZC5kZWZhdWx0XG4gIH0sIHByb3BzLCB7XG4gICAgb25FbnRlcjogaGFuZGxlRW50ZXJcbiAgfSksIGZ1bmN0aW9uIChzdGF0dXMsIGlubmVyUHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgaW5uZXJQcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoJ2ZhZGUnLCBjbGFzc05hbWUsIGNoaWxkcmVuLnByb3BzLmNsYXNzTmFtZSwgZmFkZVN0eWxlc1tzdGF0dXNdKVxuICAgIH0pKTtcbiAgfSk7XG59KTtcblxuRmFkZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5GYWRlLmRpc3BsYXlOYW1lID0gJ0ZhZGUnO1xudmFyIF9kZWZhdWx0ID0gRmFkZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBTcGVjaWZ5IHdoZXRoZXIgdGhlIGZlZWRiYWNrIGlzIGZvciB2YWxpZCBvciBpbnZhbGlkIGZpZWxkc1xuICAgKlxuICAgKiBAdHlwZSB7KCd2YWxpZCd8J2ludmFsaWQnKX1cbiAgICovXG4gIHR5cGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIERpc3BsYXkgZmVlZGJhY2sgYXMgYSB0b29sdGlwLiAqL1xuICB0b29sdGlwOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcbiAgYXM6IF9wcm9wVHlwZXMuZGVmYXVsdC5lbGVtZW50VHlwZVxufTtcblxudmFyIEZlZWRiYWNrID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbmZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBfcmVmJHR5cGUgPSBfcmVmLnR5cGUsXG4gICAgICB0eXBlID0gX3JlZiR0eXBlID09PSB2b2lkIDAgPyAndmFsaWQnIDogX3JlZiR0eXBlLFxuICAgICAgX3JlZiR0b29sdGlwID0gX3JlZi50b29sdGlwLFxuICAgICAgdG9vbHRpcCA9IF9yZWYkdG9vbHRpcCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHRvb2x0aXAsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYXNcIiwgXCJjbGFzc05hbWVcIiwgXCJ0eXBlXCIsIFwidG9vbHRpcFwiXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCB0eXBlICsgXCItXCIgKyAodG9vbHRpcCA/ICd0b29sdGlwJyA6ICdmZWVkYmFjaycpKVxuICB9KSk7XG59KTtcblxuRmVlZGJhY2suZGlzcGxheU5hbWUgPSAnRmVlZGJhY2snO1xuRmVlZGJhY2sucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xudmFyIF9kZWZhdWx0ID0gRmVlZGJhY2s7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9GaWd1cmVJbWFnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRmlndXJlSW1hZ2VcIikpO1xuXG52YXIgX0ZpZ3VyZUNhcHRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZ3VyZUNhcHRpb25cIikpO1xuXG52YXIgRmlndXJlID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2ZpZ3VyZScsIHtcbiAgQ29tcG9uZW50OiAnZmlndXJlJ1xufSk7XG5GaWd1cmUuSW1hZ2UgPSBfRmlndXJlSW1hZ2UuZGVmYXVsdDtcbkZpZ3VyZS5DYXB0aW9uID0gX0ZpZ3VyZUNhcHRpb24uZGVmYXVsdDtcbnZhciBfZGVmYXVsdCA9IEZpZ3VyZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlV2l0aEJzUHJlZml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXaXRoQnNQcmVmaXhcIikpO1xuXG52YXIgRmlndXJlQ2FwdGlvbiA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdmaWd1cmUtY2FwdGlvbicsIHtcbiAgQ29tcG9uZW50OiAnZmlnY2FwdGlvbidcbn0pO1xudmFyIF9kZWZhdWx0ID0gRmlndXJlQ2FwdGlvbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfSW1hZ2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi9JbWFnZVwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiB0cnVlXG59O1xuXG52YXIgRmlndXJlSW1hZ2UgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJjbGFzc05hbWVcIl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0ltYWdlLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCAnZmlndXJlLWltZycpXG4gIH0pKTtcbn0pO1xuXG5GaWd1cmVJbWFnZS5kaXNwbGF5TmFtZSA9ICdGaWd1cmVJbWFnZSc7XG5GaWd1cmVJbWFnZS5wcm9wVHlwZXMgPSBfSW1hZ2UucHJvcFR5cGVzO1xuRmlndXJlSW1hZ2UuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gRmlndXJlSW1hZ2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Zvcm1DaGVjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNoZWNrXCIpKTtcblxudmFyIF9Gb3JtRmlsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUZpbGVcIikpO1xuXG52YXIgX0Zvcm1Db250cm9sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ29udHJvbFwiKSk7XG5cbnZhciBfRm9ybUdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtR3JvdXBcIikpO1xuXG52YXIgX0Zvcm1MYWJlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUxhYmVsXCIpKTtcblxudmFyIF9Gb3JtVGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybVRleHRcIikpO1xuXG52YXIgX1N3aXRjaCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU3dpdGNoXCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF9jcmVhdGVXaXRoQnNQcmVmaXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdpdGhCc1ByZWZpeFwiKSk7XG5cbnZhciBGb3JtUm93ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2Zvcm0tcm93Jyk7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBpbmxpbmU6IGZhbHNlXG59O1xuXG52YXIgRm9ybUltcGwgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBpbmxpbmUgPSBfcmVmLmlubGluZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgdmFsaWRhdGVkID0gX3JlZi52YWxpZGF0ZWQsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdmb3JtJyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJpbmxpbmVcIiwgXCJjbGFzc05hbWVcIiwgXCJ2YWxpZGF0ZWRcIiwgXCJhc1wiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdmb3JtJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCB2YWxpZGF0ZWQgJiYgJ3dhcy12YWxpZGF0ZWQnLCBpbmxpbmUgJiYgYnNQcmVmaXggKyBcIi1pbmxpbmVcIilcbiAgfSkpO1xufSk7XG5cbkZvcm1JbXBsLmRpc3BsYXlOYW1lID0gJ0Zvcm0nO1xuRm9ybUltcGwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuRm9ybUltcGwuUm93ID0gRm9ybVJvdztcbkZvcm1JbXBsLkdyb3VwID0gX0Zvcm1Hcm91cC5kZWZhdWx0O1xuRm9ybUltcGwuQ29udHJvbCA9IF9Gb3JtQ29udHJvbC5kZWZhdWx0O1xuRm9ybUltcGwuQ2hlY2sgPSBfRm9ybUNoZWNrLmRlZmF1bHQ7XG5Gb3JtSW1wbC5GaWxlID0gX0Zvcm1GaWxlLmRlZmF1bHQ7XG5Gb3JtSW1wbC5Td2l0Y2ggPSBfU3dpdGNoLmRlZmF1bHQ7XG5Gb3JtSW1wbC5MYWJlbCA9IF9Gb3JtTGFiZWwuZGVmYXVsdDtcbkZvcm1JbXBsLlRleHQgPSBfRm9ybVRleHQuZGVmYXVsdDtcbnZhciBfZGVmYXVsdCA9IEZvcm1JbXBsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9hbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4dHJhL2xpYi9hbGxcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9GZWVkYmFjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRmVlZGJhY2tcIikpO1xuXG52YXIgX0Zvcm1DaGVja0lucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ2hlY2tJbnB1dFwiKSk7XG5cbnZhciBfRm9ybUNoZWNrTGFiZWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Zvcm1DaGVja0xhYmVsXCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUNoZWNrID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgYnNDdXN0b21QcmVmaXggPSBfcmVmLmJzQ3VzdG9tUHJlZml4LFxuICAgICAgX3JlZiRpbmxpbmUgPSBfcmVmLmlubGluZSxcbiAgICAgIGlubGluZSA9IF9yZWYkaW5saW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkaW5saW5lLFxuICAgICAgX3JlZiRkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYkZGlzYWJsZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkaXNhYmxlZCxcbiAgICAgIF9yZWYkaXNWYWxpZCA9IF9yZWYuaXNWYWxpZCxcbiAgICAgIGlzVmFsaWQgPSBfcmVmJGlzVmFsaWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRpc1ZhbGlkLFxuICAgICAgX3JlZiRpc0ludmFsaWQgPSBfcmVmLmlzSW52YWxpZCxcbiAgICAgIGlzSW52YWxpZCA9IF9yZWYkaXNJbnZhbGlkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkaXNJbnZhbGlkLFxuICAgICAgX3JlZiRmZWVkYmFja1Rvb2x0aXAgPSBfcmVmLmZlZWRiYWNrVG9vbHRpcCxcbiAgICAgIGZlZWRiYWNrVG9vbHRpcCA9IF9yZWYkZmVlZGJhY2tUb29sdGlwID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZmVlZGJhY2tUb29sdGlwLFxuICAgICAgZmVlZGJhY2sgPSBfcmVmLmZlZWRiYWNrLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBfcmVmJHRpdGxlID0gX3JlZi50aXRsZSxcbiAgICAgIHRpdGxlID0gX3JlZiR0aXRsZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHRpdGxlLFxuICAgICAgX3JlZiR0eXBlID0gX3JlZi50eXBlLFxuICAgICAgdHlwZSA9IF9yZWYkdHlwZSA9PT0gdm9pZCAwID8gJ2NoZWNrYm94JyA6IF9yZWYkdHlwZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByb3BDdXN0b20gPSBfcmVmLmN1c3RvbSxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgYXMgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJpZFwiLCBcImJzUHJlZml4XCIsIFwiYnNDdXN0b21QcmVmaXhcIiwgXCJpbmxpbmVcIiwgXCJkaXNhYmxlZFwiLCBcImlzVmFsaWRcIiwgXCJpc0ludmFsaWRcIiwgXCJmZWVkYmFja1Rvb2x0aXBcIiwgXCJmZWVkYmFja1wiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsIFwibGFiZWxcIiwgXCJjaGlsZHJlblwiLCBcImN1c3RvbVwiLCBcImFzXCJdKTtcbiAgdmFyIGN1c3RvbSA9IHR5cGUgPT09ICdzd2l0Y2gnID8gdHJ1ZSA6IHByb3BDdXN0b207XG5cbiAgdmFyIF9yZWYyID0gY3VzdG9tID8gW2JzQ3VzdG9tUHJlZml4LCAnY3VzdG9tLWNvbnRyb2wnXSA6IFtic1ByZWZpeCwgJ2Zvcm0tY2hlY2snXSxcbiAgICAgIHByZWZpeCA9IF9yZWYyWzBdLFxuICAgICAgZGVmYXVsdFByZWZpeCA9IF9yZWYyWzFdO1xuXG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkocHJlZml4LCBkZWZhdWx0UHJlZml4KTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Gb3JtQ29udGV4dC5kZWZhdWx0KSxcbiAgICAgIGNvbnRyb2xJZCA9IF91c2VDb250ZXh0LmNvbnRyb2xJZDtcblxuICB2YXIgaW5uZXJGb3JtQ29udGV4dCA9ICgwLCBfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sSWQ6IGlkIHx8IGNvbnRyb2xJZCxcbiAgICAgIGN1c3RvbTogY3VzdG9tXG4gICAgfTtcbiAgfSwgW2NvbnRyb2xJZCwgY3VzdG9tLCBpZF0pO1xuICB2YXIgaGFzTGFiZWwgPSBjdXN0b20gfHwgbGFiZWwgIT0gbnVsbCAmJiBsYWJlbCAhPT0gZmFsc2UgJiYgIWNoaWxkcmVuO1xuXG4gIHZhciBpbnB1dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Gb3JtQ2hlY2tJbnB1dC5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHR5cGU6IHR5cGUgPT09ICdzd2l0Y2gnID8gJ2NoZWNrYm94JyA6IHR5cGUsXG4gICAgcmVmOiByZWYsXG4gICAgaXNWYWxpZDogaXNWYWxpZCxcbiAgICBpc0ludmFsaWQ6IGlzSW52YWxpZCxcbiAgICBpc1N0YXRpYzogIWhhc0xhYmVsLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBhczogYXNcbiAgfSkpO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRm9ybUNvbnRleHQuZGVmYXVsdC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBpbm5lckZvcm1Db250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCwgY3VzdG9tICYmIFwiY3VzdG9tLVwiICsgdHlwZSwgaW5saW5lICYmIGJzUHJlZml4ICsgXCItaW5saW5lXCIpXG4gIH0sIGNoaWxkcmVuIHx8IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBpbnB1dCwgaGFzTGFiZWwgJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1DaGVja0xhYmVsLmRlZmF1bHQsIHtcbiAgICB0aXRsZTogdGl0bGVcbiAgfSwgbGFiZWwpLCAoaXNWYWxpZCB8fCBpc0ludmFsaWQpICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GZWVkYmFjay5kZWZhdWx0LCB7XG4gICAgdHlwZTogaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCcsXG4gICAgdG9vbHRpcDogZmVlZGJhY2tUb29sdGlwXG4gIH0sIGZlZWRiYWNrKSkpKTtcbn0pO1xuXG5Gb3JtQ2hlY2suZGlzcGxheU5hbWUgPSAnRm9ybUNoZWNrJztcbkZvcm1DaGVjay5JbnB1dCA9IF9Gb3JtQ2hlY2tJbnB1dC5kZWZhdWx0O1xuRm9ybUNoZWNrLkxhYmVsID0gX0Zvcm1DaGVja0xhYmVsLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBGb3JtQ2hlY2s7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUNoZWNrSW5wdXQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBic0N1c3RvbVByZWZpeCA9IF9yZWYuYnNDdXN0b21QcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIF9yZWYkdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHR5cGUgPSBfcmVmJHR5cGUgPT09IHZvaWQgMCA/ICdjaGVja2JveCcgOiBfcmVmJHR5cGUsXG4gICAgICBfcmVmJGlzVmFsaWQgPSBfcmVmLmlzVmFsaWQsXG4gICAgICBpc1ZhbGlkID0gX3JlZiRpc1ZhbGlkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkaXNWYWxpZCxcbiAgICAgIF9yZWYkaXNJbnZhbGlkID0gX3JlZi5pc0ludmFsaWQsXG4gICAgICBpc0ludmFsaWQgPSBfcmVmJGlzSW52YWxpZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGlzSW52YWxpZCxcbiAgICAgIGlzU3RhdGljID0gX3JlZi5pc1N0YXRpYyxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiaWRcIiwgXCJic1ByZWZpeFwiLCBcImJzQ3VzdG9tUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwidHlwZVwiLCBcImlzVmFsaWRcIiwgXCJpc0ludmFsaWRcIiwgXCJpc1N0YXRpY1wiLCBcImFzXCJdKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Gb3JtQ29udGV4dC5kZWZhdWx0KSxcbiAgICAgIGNvbnRyb2xJZCA9IF91c2VDb250ZXh0LmNvbnRyb2xJZCxcbiAgICAgIGN1c3RvbSA9IF91c2VDb250ZXh0LmN1c3RvbTtcblxuICB2YXIgX3JlZjIgPSBjdXN0b20gPyBbYnNDdXN0b21QcmVmaXgsICdjdXN0b20tY29udHJvbC1pbnB1dCddIDogW2JzUHJlZml4LCAnZm9ybS1jaGVjay1pbnB1dCddLFxuICAgICAgcHJlZml4ID0gX3JlZjJbMF0sXG4gICAgICBkZWZhdWx0UHJlZml4ID0gX3JlZjJbMV07XG5cbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShwcmVmaXgsIGRlZmF1bHRQcmVmaXgpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgaWQ6IGlkIHx8IGNvbnRyb2xJZCxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBpc1ZhbGlkICYmICdpcy12YWxpZCcsIGlzSW52YWxpZCAmJiAnaXMtaW52YWxpZCcsIGlzU3RhdGljICYmICdwb3NpdGlvbi1zdGF0aWMnKVxuICB9KSk7XG59KTtcblxuRm9ybUNoZWNrSW5wdXQuZGlzcGxheU5hbWUgPSAnRm9ybUNoZWNrSW5wdXQnO1xudmFyIF9kZWZhdWx0ID0gRm9ybUNoZWNrSW5wdXQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUNoZWNrTGFiZWwgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBic0N1c3RvbVByZWZpeCA9IF9yZWYuYnNDdXN0b21QcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGh0bWxGb3IgPSBfcmVmLmh0bWxGb3IsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJic0N1c3RvbVByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImh0bWxGb3JcIl0pO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX0Zvcm1Db250ZXh0LmRlZmF1bHQpLFxuICAgICAgY29udHJvbElkID0gX3VzZUNvbnRleHQuY29udHJvbElkLFxuICAgICAgY3VzdG9tID0gX3VzZUNvbnRleHQuY3VzdG9tO1xuXG4gIHZhciBfcmVmMiA9IGN1c3RvbSA/IFtic0N1c3RvbVByZWZpeCwgJ2N1c3RvbS1jb250cm9sLWxhYmVsJ10gOiBbYnNQcmVmaXgsICdmb3JtLWNoZWNrLWxhYmVsJ10sXG4gICAgICBwcmVmaXggPSBfcmVmMlswXSxcbiAgICAgIGRlZmF1bHRQcmVmaXggPSBfcmVmMlsxXTtcblxuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKHByZWZpeCwgZGVmYXVsdFByZWZpeCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaHRtbEZvcjogaHRtbEZvciB8fCBjb250cm9sSWQsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeClcbiAgfSkpO1xufSk7XG5cbkZvcm1DaGVja0xhYmVsLmRpc3BsYXlOYW1lID0gJ0Zvcm1DaGVja0xhYmVsJztcbnZhciBfZGVmYXVsdCA9IEZvcm1DaGVja0xhYmVsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIEZvcm1Db250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xuICBjb250cm9sSWQ6IHVuZGVmaW5lZFxufSk7XG5cbnZhciBfZGVmYXVsdCA9IEZvcm1Db250ZXh0O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9hbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4dHJhL2xpYi9hbGxcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbnZhciBfRmVlZGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZlZWRiYWNrXCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUNvbnRyb2wgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBic0N1c3RvbVByZWZpeCA9IF9yZWYuYnNDdXN0b21QcmVmaXgsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIGh0bWxTaXplID0gX3JlZi5odG1sU2l6ZSxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRpc1ZhbGlkID0gX3JlZi5pc1ZhbGlkLFxuICAgICAgaXNWYWxpZCA9IF9yZWYkaXNWYWxpZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGlzVmFsaWQsXG4gICAgICBfcmVmJGlzSW52YWxpZCA9IF9yZWYuaXNJbnZhbGlkLFxuICAgICAgaXNJbnZhbGlkID0gX3JlZiRpc0ludmFsaWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRpc0ludmFsaWQsXG4gICAgICBwbGFpbnRleHQgPSBfcmVmLnBsYWludGV4dCxcbiAgICAgIHJlYWRPbmx5ID0gX3JlZi5yZWFkT25seSxcbiAgICAgIGN1c3RvbSA9IF9yZWYuY3VzdG9tLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImJzQ3VzdG9tUHJlZml4XCIsIFwidHlwZVwiLCBcInNpemVcIiwgXCJodG1sU2l6ZVwiLCBcImlkXCIsIFwiY2xhc3NOYW1lXCIsIFwiaXNWYWxpZFwiLCBcImlzSW52YWxpZFwiLCBcInBsYWludGV4dFwiLCBcInJlYWRPbmx5XCIsIFwiY3VzdG9tXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBfdXNlQ29udGV4dCA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoX0Zvcm1Db250ZXh0LmRlZmF1bHQpLFxuICAgICAgY29udHJvbElkID0gX3VzZUNvbnRleHQuY29udHJvbElkO1xuXG4gIHZhciBfcmVmMiA9IGN1c3RvbSA/IFtic0N1c3RvbVByZWZpeCwgJ2N1c3RvbSddIDogW2JzUHJlZml4LCAnZm9ybS1jb250cm9sJ10sXG4gICAgICBwcmVmaXggPSBfcmVmMlswXSxcbiAgICAgIGRlZmF1bHRQcmVmaXggPSBfcmVmMlsxXTtcblxuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKHByZWZpeCwgZGVmYXVsdFByZWZpeCk7XG4gIHZhciBjbGFzc2VzO1xuXG4gIGlmIChwbGFpbnRleHQpIHtcbiAgICB2YXIgX2NsYXNzZXM7XG5cbiAgICBjbGFzc2VzID0gKF9jbGFzc2VzID0ge30sIF9jbGFzc2VzW2JzUHJlZml4ICsgXCItcGxhaW50ZXh0XCJdID0gdHJ1ZSwgX2NsYXNzZXMpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdmaWxlJykge1xuICAgIHZhciBfY2xhc3NlczI7XG5cbiAgICBjbGFzc2VzID0gKF9jbGFzc2VzMiA9IHt9LCBfY2xhc3NlczJbYnNQcmVmaXggKyBcIi1maWxlXCJdID0gdHJ1ZSwgX2NsYXNzZXMyKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAncmFuZ2UnKSB7XG4gICAgdmFyIF9jbGFzc2VzMztcblxuICAgIGNsYXNzZXMgPSAoX2NsYXNzZXMzID0ge30sIF9jbGFzc2VzM1tic1ByZWZpeCArIFwiLXJhbmdlXCJdID0gdHJ1ZSwgX2NsYXNzZXMzKTtcbiAgfSBlbHNlIGlmIChDb21wb25lbnQgPT09ICdzZWxlY3QnICYmIGN1c3RvbSkge1xuICAgIHZhciBfY2xhc3NlczQ7XG5cbiAgICBjbGFzc2VzID0gKF9jbGFzc2VzNCA9IHt9LCBfY2xhc3NlczRbYnNQcmVmaXggKyBcIi1zZWxlY3RcIl0gPSB0cnVlLCBfY2xhc3NlczRbYnNQcmVmaXggKyBcIi1zZWxlY3QtXCIgKyBzaXplXSA9IHNpemUsIF9jbGFzc2VzNCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9jbGFzc2VzNTtcblxuICAgIGNsYXNzZXMgPSAoX2NsYXNzZXM1ID0ge30sIF9jbGFzc2VzNVtic1ByZWZpeF0gPSB0cnVlLCBfY2xhc3NlczVbYnNQcmVmaXggKyBcIi1cIiArIHNpemVdID0gc2l6ZSwgX2NsYXNzZXM1KTtcbiAgfVxuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/ICgwLCBfd2FybmluZy5kZWZhdWx0KShjb250cm9sSWQgPT0gbnVsbCB8fCAhaWQsICdgY29udHJvbElkYCBpcyBpZ25vcmVkIG9uIGA8Rm9ybUNvbnRyb2w+YCB3aGVuIGBpZGAgaXMgc3BlY2lmaWVkLicpIDogdm9pZCAwO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgc2l6ZTogaHRtbFNpemUsXG4gICAgcmVmOiByZWYsXG4gICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgIGlkOiBpZCB8fCBjb250cm9sSWQsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBjbGFzc2VzLCBpc1ZhbGlkICYmIFwiaXMtdmFsaWRcIiwgaXNJbnZhbGlkICYmIFwiaXMtaW52YWxpZFwiKVxuICB9KSk7XG59KTtcblxuRm9ybUNvbnRyb2wuZGlzcGxheU5hbWUgPSAnRm9ybUNvbnRyb2wnO1xuXG52YXIgX2RlZmF1bHQgPSBPYmplY3QuYXNzaWduKEZvcm1Db250cm9sLCB7XG4gIEZlZWRiYWNrOiBfRmVlZGJhY2suZGVmYXVsdFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2FsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXMtZXh0cmEvbGliL2FsbFwiKSk7XG5cbnZhciBfRmVlZGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZlZWRiYWNrXCIpKTtcblxudmFyIF9Gb3JtRmlsZUlucHV0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtRmlsZUlucHV0XCIpKTtcblxudmFyIF9Gb3JtRmlsZUxhYmVsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtRmlsZUxhYmVsXCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUZpbGUgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBic0N1c3RvbVByZWZpeCA9IF9yZWYuYnNDdXN0b21QcmVmaXgsXG4gICAgICBfcmVmJGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3JlZiRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRpc2FibGVkLFxuICAgICAgX3JlZiRpc1ZhbGlkID0gX3JlZi5pc1ZhbGlkLFxuICAgICAgaXNWYWxpZCA9IF9yZWYkaXNWYWxpZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGlzVmFsaWQsXG4gICAgICBfcmVmJGlzSW52YWxpZCA9IF9yZWYuaXNJbnZhbGlkLFxuICAgICAgaXNJbnZhbGlkID0gX3JlZiRpc0ludmFsaWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRpc0ludmFsaWQsXG4gICAgICBfcmVmJGZlZWRiYWNrVG9vbHRpcCA9IF9yZWYuZmVlZGJhY2tUb29sdGlwLFxuICAgICAgZmVlZGJhY2tUb29sdGlwID0gX3JlZiRmZWVkYmFja1Rvb2x0aXAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRmZWVkYmFja1Rvb2x0aXAsXG4gICAgICBmZWVkYmFjayA9IF9yZWYuZmVlZGJhY2ssXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGN1c3RvbSA9IF9yZWYuY3VzdG9tLFxuICAgICAgbGFuZyA9IF9yZWYubGFuZyxcbiAgICAgIGRhdGFCcm93c2UgPSBfcmVmWydkYXRhLWJyb3dzZSddLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBfcmVmJGlucHV0QXMgPSBfcmVmLmlucHV0QXMsXG4gICAgICBpbnB1dEFzID0gX3JlZiRpbnB1dEFzID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3JlZiRpbnB1dEFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImlkXCIsIFwiYnNQcmVmaXhcIiwgXCJic0N1c3RvbVByZWZpeFwiLCBcImRpc2FibGVkXCIsIFwiaXNWYWxpZFwiLCBcImlzSW52YWxpZFwiLCBcImZlZWRiYWNrVG9vbHRpcFwiLCBcImZlZWRiYWNrXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJsYWJlbFwiLCBcImNoaWxkcmVuXCIsIFwiY3VzdG9tXCIsIFwibGFuZ1wiLCBcImRhdGEtYnJvd3NlXCIsIFwiYXNcIiwgXCJpbnB1dEFzXCJdKTtcblxuICB2YXIgX3JlZjIgPSBjdXN0b20gPyBbYnNDdXN0b21QcmVmaXgsICdjdXN0b20nXSA6IFtic1ByZWZpeCwgJ2Zvcm0tZmlsZSddLFxuICAgICAgcHJlZml4ID0gX3JlZjJbMF0sXG4gICAgICBkZWZhdWx0UHJlZml4ID0gX3JlZjJbMV07XG5cbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShwcmVmaXgsIGRlZmF1bHRQcmVmaXgpO1xuICB2YXIgdHlwZSA9ICdmaWxlJztcblxuICB2YXIgX3VzZUNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Gb3JtQ29udGV4dC5kZWZhdWx0KSxcbiAgICAgIGNvbnRyb2xJZCA9IF91c2VDb250ZXh0LmNvbnRyb2xJZDtcblxuICB2YXIgaW5uZXJGb3JtQ29udGV4dCA9ICgwLCBfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb250cm9sSWQ6IGlkIHx8IGNvbnRyb2xJZCxcbiAgICAgIGN1c3RvbTogY3VzdG9tXG4gICAgfTtcbiAgfSwgW2NvbnRyb2xJZCwgY3VzdG9tLCBpZF0pO1xuICB2YXIgaGFzTGFiZWwgPSBsYWJlbCAhPSBudWxsICYmIGxhYmVsICE9PSBmYWxzZSAmJiAhY2hpbGRyZW47XG5cbiAgdmFyIGlucHV0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1GaWxlSW5wdXQuZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgIGlzSW52YWxpZDogaXNJbnZhbGlkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBhczogaW5wdXRBcyxcbiAgICBsYW5nOiBsYW5nXG4gIH0pKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1Db250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaW5uZXJGb3JtQ29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIHtcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCwgY3VzdG9tICYmIFwiY3VzdG9tLVwiICsgdHlwZSlcbiAgfSwgY2hpbGRyZW4gfHwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGN1c3RvbSA/IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCBpbnB1dCwgaGFzTGFiZWwgJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1GaWxlTGFiZWwuZGVmYXVsdCwge1xuICAgIFwiZGF0YS1icm93c2VcIjogZGF0YUJyb3dzZVxuICB9LCBsYWJlbCkpIDogLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsIG51bGwsIGhhc0xhYmVsICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Gb3JtRmlsZUxhYmVsLmRlZmF1bHQsIG51bGwsIGxhYmVsKSwgaW5wdXQpLCAoaXNWYWxpZCB8fCBpc0ludmFsaWQpICYmIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GZWVkYmFjay5kZWZhdWx0LCB7XG4gICAgdHlwZTogaXNWYWxpZCA/ICd2YWxpZCcgOiAnaW52YWxpZCcsXG4gICAgdG9vbHRpcDogZmVlZGJhY2tUb29sdGlwXG4gIH0sIGZlZWRiYWNrKSkpKTtcbn0pO1xuXG5Gb3JtRmlsZS5kaXNwbGF5TmFtZSA9ICdGb3JtRmlsZSc7XG5Gb3JtRmlsZS5JbnB1dCA9IF9Gb3JtRmlsZUlucHV0LmRlZmF1bHQ7XG5Gb3JtRmlsZS5MYWJlbCA9IF9Gb3JtRmlsZUxhYmVsLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBGb3JtRmlsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Zvcm1Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ29udGV4dFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBGb3JtRmlsZUlucHV0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgaWQgPSBfcmVmLmlkLFxuICAgICAgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgYnNDdXN0b21QcmVmaXggPSBfcmVmLmJzQ3VzdG9tUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBpc1ZhbGlkID0gX3JlZi5pc1ZhbGlkLFxuICAgICAgaXNJbnZhbGlkID0gX3JlZi5pc0ludmFsaWQsXG4gICAgICBsYW5nID0gX3JlZi5sYW5nLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnaW5wdXQnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJpZFwiLCBcImJzUHJlZml4XCIsIFwiYnNDdXN0b21QcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJpc1ZhbGlkXCIsIFwiaXNJbnZhbGlkXCIsIFwibGFuZ1wiLCBcImFzXCJdKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Gb3JtQ29udGV4dC5kZWZhdWx0KSxcbiAgICAgIGNvbnRyb2xJZCA9IF91c2VDb250ZXh0LmNvbnRyb2xJZCxcbiAgICAgIGN1c3RvbSA9IF91c2VDb250ZXh0LmN1c3RvbTtcblxuICB2YXIgdHlwZSA9ICdmaWxlJztcblxuICB2YXIgX3JlZjIgPSBjdXN0b20gPyBbYnNDdXN0b21QcmVmaXgsICdjdXN0b20tZmlsZS1pbnB1dCddIDogW2JzUHJlZml4LCAnZm9ybS1jb250cm9sLWZpbGUnXSxcbiAgICAgIHByZWZpeCA9IF9yZWYyWzBdLFxuICAgICAgZGVmYXVsdFByZWZpeCA9IF9yZWYyWzFdO1xuXG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkocHJlZml4LCBkZWZhdWx0UHJlZml4KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBpZDogaWQgfHwgY29udHJvbElkLFxuICAgIHR5cGU6IHR5cGUsXG4gICAgbGFuZzogbGFuZyxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBpc1ZhbGlkICYmICdpcy12YWxpZCcsIGlzSW52YWxpZCAmJiAnaXMtaW52YWxpZCcpXG4gIH0pKTtcbn0pO1xuXG5Gb3JtRmlsZUlucHV0LmRpc3BsYXlOYW1lID0gJ0Zvcm1GaWxlSW5wdXQnO1xudmFyIF9kZWZhdWx0ID0gRm9ybUZpbGVJbnB1dDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0Zvcm1Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ29udGV4dFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBGb3JtRmlsZUxhYmVsID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgYnNDdXN0b21QcmVmaXggPSBfcmVmLmJzQ3VzdG9tUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBodG1sRm9yID0gX3JlZi5odG1sRm9yLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiYnNDdXN0b21QcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJodG1sRm9yXCJdKTtcblxuICB2YXIgX3VzZUNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Gb3JtQ29udGV4dC5kZWZhdWx0KSxcbiAgICAgIGNvbnRyb2xJZCA9IF91c2VDb250ZXh0LmNvbnRyb2xJZCxcbiAgICAgIGN1c3RvbSA9IF91c2VDb250ZXh0LmN1c3RvbTtcblxuICB2YXIgX3JlZjIgPSBjdXN0b20gPyBbYnNDdXN0b21QcmVmaXgsICdjdXN0b20tZmlsZS1sYWJlbCddIDogW2JzUHJlZml4LCAnZm9ybS1maWxlLWxhYmVsJ10sXG4gICAgICBwcmVmaXggPSBfcmVmMlswXSxcbiAgICAgIGRlZmF1bHRQcmVmaXggPSBfcmVmMlsxXTtcblxuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKHByZWZpeCwgZGVmYXVsdFByZWZpeCk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaHRtbEZvcjogaHRtbEZvciB8fCBjb250cm9sSWQsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCksXG4gICAgXCJkYXRhLWJyb3dzZVwiOiBwcm9wc1snZGF0YS1icm93c2UnXVxuICB9KSk7XG59KTtcblxuRm9ybUZpbGVMYWJlbC5kaXNwbGF5TmFtZSA9ICdGb3JtRmlsZUxhYmVsJztcbnZhciBfZGVmYXVsdCA9IEZvcm1GaWxlTGFiZWw7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Gb3JtQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRleHRcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgRm9ybUdyb3VwID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBjb250cm9sSWQgPSBfcmVmLmNvbnRyb2xJZCxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJjb250cm9sSWRcIiwgXCJhc1wiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdmb3JtLWdyb3VwJyk7XG4gIHZhciBjb250ZXh0ID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbnRyb2xJZDogY29udHJvbElkXG4gICAgfTtcbiAgfSwgW2NvbnRyb2xJZF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1Db250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeClcbiAgfSksIGNoaWxkcmVuKSk7XG59KTtcblxuRm9ybUdyb3VwLmRpc3BsYXlOYW1lID0gJ0Zvcm1Hcm91cCc7XG52YXIgX2RlZmF1bHQgPSBGb3JtR3JvdXA7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbnZhciBfQ29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Db2xcIikpO1xuXG52YXIgX0Zvcm1Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ29udGV4dFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNvbHVtbjogZmFsc2UsXG4gIHNyT25seTogZmFsc2Vcbn07XG5cbnZhciBGb3JtTGFiZWwgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdsYWJlbCcgOiBfcmVmJGFzLFxuICAgICAgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY29sdW1uID0gX3JlZi5jb2x1bW4sXG4gICAgICBzck9ubHkgPSBfcmVmLnNyT25seSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgaHRtbEZvciA9IF9yZWYuaHRtbEZvcixcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJhc1wiLCBcImJzUHJlZml4XCIsIFwiY29sdW1uXCIsIFwic3JPbmx5XCIsIFwiY2xhc3NOYW1lXCIsIFwiaHRtbEZvclwiXSk7XG5cbiAgdmFyIF91c2VDb250ZXh0ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfRm9ybUNvbnRleHQuZGVmYXVsdCksXG4gICAgICBjb250cm9sSWQgPSBfdXNlQ29udGV4dC5jb250cm9sSWQ7XG5cbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2Zvcm0tbGFiZWwnKTtcbiAgdmFyIGNvbHVtbkNsYXNzID0gJ2NvbC1mb3JtLWxhYmVsJztcbiAgaWYgKHR5cGVvZiBjb2x1bW4gPT09ICdzdHJpbmcnKSBjb2x1bW5DbGFzcyA9IGNvbHVtbkNsYXNzICsgXCIgXCIgKyBjb2x1bW5DbGFzcyArIFwiLVwiICsgY29sdW1uO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBzck9ubHkgJiYgJ3NyLW9ubHknLCBjb2x1bW4gJiYgY29sdW1uQ2xhc3MpO1xuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcuZGVmYXVsdCkoY29udHJvbElkID09IG51bGwgfHwgIWh0bWxGb3IsICdgY29udHJvbElkYCBpcyBpZ25vcmVkIG9uIGA8Rm9ybUxhYmVsPmAgd2hlbiBgaHRtbEZvcmAgaXMgc3BlY2lmaWVkLicpIDogdm9pZCAwO1xuICBodG1sRm9yID0gaHRtbEZvciB8fCBjb250cm9sSWQ7XG4gIGlmIChjb2x1bW4pIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ29sLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIGFzOiBcImxhYmVsXCIsXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgIGh0bWxGb3I6IGh0bWxGb3JcbiAgfSwgcHJvcHMpKTtcbiAgcmV0dXJuIChcbiAgICAvKiNfX1BVUkVfXyovXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L2xhYmVsLWhhcy1mb3IsIGpzeC1hMTF5L2xhYmVsLWhhcy1hc3NvY2lhdGVkLWNvbnRyb2xcbiAgICBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgICByZWY6IHJlZixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICAgIGh0bWxGb3I6IGh0bWxGb3JcbiAgICB9LCBwcm9wcykpXG4gICk7XG59KTtcblxuRm9ybUxhYmVsLmRpc3BsYXlOYW1lID0gJ0Zvcm1MYWJlbCc7XG5Gb3JtTGFiZWwuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gRm9ybUxhYmVsO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIEZvcm1UZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoIC8vIE5lZWQgdG8gZGVmaW5lIHRoZSBkZWZhdWx0IFwiYXNcIiBkdXJpbmcgcHJvcCBkZXN0cnVjdHVyaW5nIHRvIGJlIGNvbXBhdGlibGUgd2l0aCBzdHlsZWQtY29tcG9uZW50cyBnaXRodWIuY29tL3JlYWN0LWJvb3RzdHJhcC9yZWFjdC1ib290c3RyYXAvaXNzdWVzLzM1OTVcbmZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnc21hbGwnIDogX3JlZiRhcyxcbiAgICAgIG11dGVkID0gX3JlZi5tdXRlZCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImFzXCIsIFwibXV0ZWRcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnZm9ybS10ZXh0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCwgbXV0ZWQgJiYgJ3RleHQtbXV0ZWQnKVxuICB9KSk7XG59KTtcblxuRm9ybVRleHQuZGlzcGxheU5hbWUgPSAnRm9ybVRleHQnO1xudmFyIF9kZWZhdWx0ID0gRm9ybVRleHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5wcm9wVHlwZXMgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcHJvcFR5cGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAZGVmYXVsdCAnaW1nJ1xuICAgKi9cbiAgYnNQcmVmaXg6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFNldHMgaW1hZ2UgYXMgZmx1aWQgaW1hZ2UuXG4gICAqL1xuICBmbHVpZDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIFNldHMgaW1hZ2Ugc2hhcGUgYXMgcm91bmRlZC5cbiAgICovXG4gIHJvdW5kZWQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIGltYWdlIHNoYXBlIGFzIGNpcmNsZS5cbiAgICovXG4gIHJvdW5kZWRDaXJjbGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLFxuXG4gIC8qKlxuICAgKiBTZXRzIGltYWdlIHNoYXBlIGFzIHRodW1ibmFpbC5cbiAgICovXG4gIHRodW1ibmFpbDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2xcbn07XG5leHBvcnRzLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGZsdWlkOiBmYWxzZSxcbiAgcm91bmRlZDogZmFsc2UsXG4gIHJvdW5kZWRDaXJjbGU6IGZhbHNlLFxuICB0aHVtYm5haWw6IGZhbHNlXG59O1xuXG52YXIgSW1hZ2UgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGZsdWlkID0gX3JlZi5mbHVpZCxcbiAgICAgIHJvdW5kZWQgPSBfcmVmLnJvdW5kZWQsXG4gICAgICByb3VuZGVkQ2lyY2xlID0gX3JlZi5yb3VuZGVkQ2lyY2xlLFxuICAgICAgdGh1bWJuYWlsID0gX3JlZi50aHVtYm5haWwsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJmbHVpZFwiLCBcInJvdW5kZWRcIiwgXCJyb3VuZGVkQ2lyY2xlXCIsIFwidGh1bWJuYWlsXCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2ltZycpO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShmbHVpZCAmJiBic1ByZWZpeCArIFwiLWZsdWlkXCIsIHJvdW5kZWQgJiYgXCJyb3VuZGVkXCIsIHJvdW5kZWRDaXJjbGUgJiYgXCJyb3VuZGVkLWNpcmNsZVwiLCB0aHVtYm5haWwgJiYgYnNQcmVmaXggKyBcIi10aHVtYm5haWxcIik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGpzeC1hMTF5L2FsdC10ZXh0XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGNsYXNzZXMpXG4gIH0pKTtcbn0pO1xuXG5JbWFnZS5kaXNwbGF5TmFtZSA9ICdJbWFnZSc7XG5JbWFnZS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBJbWFnZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVXaXRoQnNQcmVmaXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdpdGhCc1ByZWZpeFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBJbnB1dEdyb3VwQXBwZW5kID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2lucHV0LWdyb3VwLWFwcGVuZCcpO1xudmFyIElucHV0R3JvdXBQcmVwZW5kID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ2lucHV0LWdyb3VwLXByZXBlbmQnKTtcbnZhciBJbnB1dEdyb3VwVGV4dCA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdpbnB1dC1ncm91cC10ZXh0Jywge1xuICBDb21wb25lbnQ6ICdzcGFuJ1xufSk7XG5cbnZhciBJbnB1dEdyb3VwQ2hlY2tib3ggPSBmdW5jdGlvbiBJbnB1dEdyb3VwQ2hlY2tib3gocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0R3JvdXBUZXh0LCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHR5cGU6IFwiY2hlY2tib3hcIlxuICB9LCBwcm9wcykpKTtcbn07XG5cbnZhciBJbnB1dEdyb3VwUmFkaW8gPSBmdW5jdGlvbiBJbnB1dEdyb3VwUmFkaW8ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KElucHV0R3JvdXBUZXh0LCBudWxsLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImlucHV0XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHR5cGU6IFwicmFkaW9cIlxuICB9LCBwcm9wcykpKTtcbn07XG5cbi8qKlxuICpcbiAqIEBwcm9wZXJ0eSB7SW5wdXRHcm91cEFwcGVuZH0gQXBwZW5kXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBQcmVwZW5kfSBQcmVwZW5kXG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBUZXh0fSBUZXh0XG4gKiBAcHJvcGVydHkge0lucHV0R3JvdXBSYWRpb30gUmFkaW9cbiAqIEBwcm9wZXJ0eSB7SW5wdXRHcm91cENoZWNrYm94fSBDaGVja2JveFxuICovXG52YXIgSW5wdXRHcm91cCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwic2l6ZVwiLCBcImNsYXNzTmFtZVwiLCBcImFzXCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2lucHV0LWdyb3VwJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCwgc2l6ZSAmJiBic1ByZWZpeCArIFwiLVwiICsgc2l6ZSlcbiAgfSkpO1xufSk7XG5cbklucHV0R3JvdXAuZGlzcGxheU5hbWUgPSAnSW5wdXRHcm91cCc7XG52YXIgSW5wdXRHcm91cFdpdGhFeHRyYXMgPSAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBJbnB1dEdyb3VwLCB7XG4gIFRleHQ6IElucHV0R3JvdXBUZXh0LFxuICBSYWRpbzogSW5wdXRHcm91cFJhZGlvLFxuICBDaGVja2JveDogSW5wdXRHcm91cENoZWNrYm94LFxuICBBcHBlbmQ6IElucHV0R3JvdXBBcHBlbmQsXG4gIFByZXBlbmQ6IElucHV0R3JvdXBQcmVwZW5kXG59KTtcbnZhciBfZGVmYXVsdCA9IElucHV0R3JvdXBXaXRoRXh0cmFzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZmx1aWQ6IGZhbHNlXG59O1xuXG52YXIgSnVtYm90cm9uID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzZXM7XG5cbiAgdmFyIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBmbHVpZCA9IF9yZWYuZmx1aWQsXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYXNcIiwgXCJjbGFzc05hbWVcIiwgXCJmbHVpZFwiLCBcImJzUHJlZml4XCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ2p1bWJvdHJvbicpO1xuICB2YXIgY2xhc3NlcyA9IChfY2xhc3NlcyA9IHt9LCBfY2xhc3Nlc1tic1ByZWZpeF0gPSB0cnVlLCBfY2xhc3Nlc1tic1ByZWZpeCArIFwiLWZsdWlkXCJdID0gZmx1aWQsIF9jbGFzc2VzKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGNsYXNzZXMpXG4gIH0pKTtcbn0pO1xuXG5KdW1ib3Ryb24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuSnVtYm90cm9uLmRpc3BsYXlOYW1lID0gJ0p1bWJvdHJvbic7XG52YXIgX2RlZmF1bHQgPSBKdW1ib3Ryb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ3YXJuaW5nXCIpKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoXCJ1bmNvbnRyb2xsYWJsZVwiKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIF9BYnN0cmFjdE5hdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWJzdHJhY3ROYXZcIikpO1xuXG52YXIgX0xpc3RHcm91cEl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0xpc3RHcm91cEl0ZW1cIikpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiB1bmRlZmluZWQsXG4gIGhvcml6b250YWw6IHVuZGVmaW5lZFxufTtcblxudmFyIExpc3RHcm91cCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfdXNlVW5jb250cm9sbGVkID0gKDAsIF91bmNvbnRyb2xsYWJsZS51c2VVbmNvbnRyb2xsZWQpKHByb3BzLCB7XG4gICAgYWN0aXZlS2V5OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgY2xhc3NOYW1lID0gX3VzZVVuY29udHJvbGxlZC5jbGFzc05hbWUsXG4gICAgICBpbml0aWFsQnNQcmVmaXggPSBfdXNlVW5jb250cm9sbGVkLmJzUHJlZml4LFxuICAgICAgdmFyaWFudCA9IF91c2VVbmNvbnRyb2xsZWQudmFyaWFudCxcbiAgICAgIGhvcml6b250YWwgPSBfdXNlVW5jb250cm9sbGVkLmhvcml6b250YWwsXG4gICAgICBfdXNlVW5jb250cm9sbGVkJGFzID0gX3VzZVVuY29udHJvbGxlZC5hcyxcbiAgICAgIGFzID0gX3VzZVVuY29udHJvbGxlZCRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfdXNlVW5jb250cm9sbGVkJGFzLFxuICAgICAgY29udHJvbGxlZFByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfdXNlVW5jb250cm9sbGVkLCBbXCJjbGFzc05hbWVcIiwgXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJob3Jpem9udGFsXCIsIFwiYXNcIl0pO1xuXG4gIHZhciBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGluaXRpYWxCc1ByZWZpeCwgJ2xpc3QtZ3JvdXAnKTtcbiAgdmFyIGhvcml6b250YWxWYXJpYW50O1xuXG4gIGlmIChob3Jpem9udGFsKSB7XG4gICAgaG9yaXpvbnRhbFZhcmlhbnQgPSBob3Jpem9udGFsID09PSB0cnVlID8gJ2hvcml6b250YWwnIDogXCJob3Jpem9udGFsLVwiICsgaG9yaXpvbnRhbDtcbiAgfSBlbHNlIHtcbiAgICBob3Jpem9udGFsVmFyaWFudCA9IG51bGw7XG4gIH1cblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyAoMCwgX3dhcm5pbmcuZGVmYXVsdCkoIShob3Jpem9udGFsICYmIHZhcmlhbnQgPT09ICdmbHVzaCcpLCAnYHZhcmlhbnQ9XCJmbHVzaFwiYCBhbmQgYGhvcml6b250YWxgIHNob3VsZCBub3QgYmUgdXNlZCB0b2dldGhlci4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BYnN0cmFjdE5hdi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBjb250cm9sbGVkUHJvcHMsIHtcbiAgICBhczogYXMsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeCwgdmFyaWFudCAmJiBic1ByZWZpeCArIFwiLVwiICsgdmFyaWFudCwgaG9yaXpvbnRhbFZhcmlhbnQgJiYgYnNQcmVmaXggKyBcIi1cIiArIGhvcml6b250YWxWYXJpYW50KVxuICB9KSk7XG59KTtcblxuTGlzdEdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkxpc3RHcm91cC5kaXNwbGF5TmFtZSA9ICdMaXN0R3JvdXAnO1xuTGlzdEdyb3VwLkl0ZW0gPSBfTGlzdEdyb3VwSXRlbS5kZWZhdWx0O1xudmFyIF9kZWZhdWx0ID0gTGlzdEdyb3VwO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfQWJzdHJhY3ROYXZJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BYnN0cmFjdE5hdkl0ZW1cIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gcmVxdWlyZShcIi4vU2VsZWN0YWJsZUNvbnRleHRcIik7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6IHVuZGVmaW5lZCxcbiAgYWN0aXZlOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xuXG52YXIgTGlzdEdyb3VwSXRlbSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgYWN0aW9uID0gX3JlZi5hY3Rpb24sXG4gICAgICBhcyA9IF9yZWYuYXMsXG4gICAgICBldmVudEtleSA9IF9yZWYuZXZlbnRLZXksXG4gICAgICBvbkNsaWNrID0gX3JlZi5vbkNsaWNrLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiYWN0aXZlXCIsIFwiZGlzYWJsZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJ2YXJpYW50XCIsIFwiYWN0aW9uXCIsIFwiYXNcIiwgXCJldmVudEtleVwiLCBcIm9uQ2xpY2tcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbGlzdC1ncm91cC1pdGVtJyk7XG4gIHZhciBoYW5kbGVDbGljayA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGV2ZW50KTtcbiAgfSwgW2Rpc2FibGVkLCBvbkNsaWNrXSk7XG5cbiAgaWYgKGRpc2FibGVkICYmIHByb3BzLnRhYkluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50YWJJbmRleCA9IC0xO1xuICAgIHByb3BzWydhcmlhLWRpc2FibGVkJ10gPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BYnN0cmFjdE5hdkl0ZW0uZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICAvLyBUT0RPOiBSZXN0cmljdCBldmVudEtleSB0byBzdHJpbmcgaW4gdjU/XG4gICAgZXZlbnRLZXk6ICgwLCBfU2VsZWN0YWJsZUNvbnRleHQubWFrZUV2ZW50S2V5KShldmVudEtleSwgcHJvcHMuaHJlZikgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgLFxuICAgIGFzOiBhcyB8fCAoYWN0aW9uID8gcHJvcHMuaHJlZiA/ICdhJyA6ICdidXR0b24nIDogJ2RpdicpLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgYnNQcmVmaXgsIGFjdGl2ZSAmJiAnYWN0aXZlJywgZGlzYWJsZWQgJiYgJ2Rpc2FibGVkJywgdmFyaWFudCAmJiBic1ByZWZpeCArIFwiLVwiICsgdmFyaWFudCwgYWN0aW9uICYmIGJzUHJlZml4ICsgXCItYWN0aW9uXCIpXG4gIH0pKTtcbn0pO1xuXG5MaXN0R3JvdXBJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbkxpc3RHcm91cEl0ZW0uZGlzcGxheU5hbWUgPSAnTGlzdEdyb3VwSXRlbSc7XG52YXIgX2RlZmF1bHQgPSBMaXN0R3JvdXBJdGVtO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVXaXRoQnNQcmVmaXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdpdGhCc1ByZWZpeFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBNZWRpYUJvZHkgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnbWVkaWEtYm9keScpO1xuXG52YXIgTWVkaWEgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZiggLy8gTmVlZCB0byBkZWZpbmUgdGhlIGRlZmF1bHQgXCJhc1wiIGR1cmluZyBwcm9wIGRlc3RydWN0dXJpbmcgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHN0eWxlZC1jb21wb25lbnRzIGdpdGh1Yi5jb20vcmVhY3QtYm9vdHN0cmFwL3JlYWN0LWJvb3RzdHJhcC9pc3N1ZXMvMzU5NVxuZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3JlZiRhcyxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImFzXCJdKTtcbiAgdmFyIHByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbWVkaWEnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIHByZWZpeClcbiAgfSkpO1xufSk7XG5cbk1lZGlhLmRpc3BsYXlOYW1lID0gJ01lZGlhJztcbk1lZGlhLkJvZHkgPSBNZWRpYUJvZHk7XG52YXIgX2RlZmF1bHQgPSBNZWRpYTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfYWRkRXZlbnRMaXN0ZW5lciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2FkZEV2ZW50TGlzdGVuZXJcIikpO1xuXG52YXIgX2NhblVzZURPTSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NhblVzZURPTVwiKSk7XG5cbnZhciBfb3duZXJEb2N1bWVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL293bmVyRG9jdW1lbnRcIikpO1xuXG52YXIgX3JlbW92ZUV2ZW50TGlzdGVuZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9yZW1vdmVFdmVudExpc3RlbmVyXCIpKTtcblxudmFyIF9zY3JvbGxiYXJTaXplID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvc2Nyb2xsYmFyU2l6ZVwiKSk7XG5cbnZhciBfdXNlQ2FsbGJhY2tSZWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWZcIikpO1xuXG52YXIgX3VzZUV2ZW50Q2FsbGJhY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VFdmVudENhbGxiYWNrXCIpKTtcblxudmFyIF91c2VXaWxsVW5tb3VudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZVdpbGxVbm1vdW50XCIpKTtcblxudmFyIF90cmFuc2l0aW9uRW5kID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvdHJhbnNpdGlvbkVuZFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX01vZGFsID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtb3ZlcmxheXMvTW9kYWxcIikpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJ3YXJuaW5nXCIpKTtcblxudmFyIF9Cb290c3RyYXBNb2RhbE1hbmFnZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Jvb3RzdHJhcE1vZGFsTWFuYWdlclwiKSk7XG5cbnZhciBfRmFkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRmFkZVwiKSk7XG5cbnZhciBfTW9kYWxCb2R5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbEJvZHlcIikpO1xuXG52YXIgX01vZGFsQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxDb250ZXh0XCIpKTtcblxudmFyIF9Nb2RhbERpYWxvZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxEaWFsb2dcIikpO1xuXG52YXIgX01vZGFsRm9vdGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbEZvb3RlclwiKSk7XG5cbnZhciBfTW9kYWxIZWFkZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsSGVhZGVyXCIpKTtcblxudmFyIF9Nb2RhbFRpdGxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbFRpdGxlXCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIG1hbmFnZXI7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBhdXRvRm9jdXM6IHRydWUsXG4gIGVuZm9yY2VGb2N1czogdHJ1ZSxcbiAgcmVzdG9yZUZvY3VzOiB0cnVlLFxuICBhbmltYXRpb246IHRydWUsXG4gIGRpYWxvZ0FzOiBfTW9kYWxEaWFsb2cuZGVmYXVsdFxufTtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbmZ1bmN0aW9uIERpYWxvZ1RyYW5zaXRpb24ocHJvcHMpIHtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9GYWRlLmRlZmF1bHQsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gQmFja2Ryb3BUcmFuc2l0aW9uKHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRmFkZS5kZWZhdWx0LCBwcm9wcyk7XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5cblxudmFyIE1vZGFsID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBkaWFsb2dDbGFzc05hbWUgPSBfcmVmLmRpYWxvZ0NsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUgPSBfcmVmLmNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBEaWFsb2cgPSBfcmVmLmRpYWxvZ0FzLFxuICAgICAgYXJpYUxhYmVsbGVkYnkgPSBfcmVmWydhcmlhLWxhYmVsbGVkYnknXSxcbiAgICAgIHNob3cgPSBfcmVmLnNob3csXG4gICAgICBhbmltYXRpb24gPSBfcmVmLmFuaW1hdGlvbixcbiAgICAgIGJhY2tkcm9wID0gX3JlZi5iYWNrZHJvcCxcbiAgICAgIGtleWJvYXJkID0gX3JlZi5rZXlib2FyZCxcbiAgICAgIG9uRXNjYXBlS2V5RG93biA9IF9yZWYub25Fc2NhcGVLZXlEb3duLFxuICAgICAgb25TaG93ID0gX3JlZi5vblNob3csXG4gICAgICBvbkhpZGUgPSBfcmVmLm9uSGlkZSxcbiAgICAgIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyLFxuICAgICAgYXV0b0ZvY3VzID0gX3JlZi5hdXRvRm9jdXMsXG4gICAgICBlbmZvcmNlRm9jdXMgPSBfcmVmLmVuZm9yY2VGb2N1cyxcbiAgICAgIHJlc3RvcmVGb2N1cyA9IF9yZWYucmVzdG9yZUZvY3VzLFxuICAgICAgcmVzdG9yZUZvY3VzT3B0aW9ucyA9IF9yZWYucmVzdG9yZUZvY3VzT3B0aW9ucyxcbiAgICAgIG9uRW50ZXJlZCA9IF9yZWYub25FbnRlcmVkLFxuICAgICAgb25FeGl0ID0gX3JlZi5vbkV4aXQsXG4gICAgICBvbkV4aXRpbmcgPSBfcmVmLm9uRXhpdGluZyxcbiAgICAgIG9uRW50ZXIgPSBfcmVmLm9uRW50ZXIsXG4gICAgICBvbkVudGVyaW5nID0gX3JlZi5vbkVudGVyaW5nLFxuICAgICAgb25FeGl0ZWQgPSBfcmVmLm9uRXhpdGVkLFxuICAgICAgYmFja2Ryb3BDbGFzc05hbWUgPSBfcmVmLmJhY2tkcm9wQ2xhc3NOYW1lLFxuICAgICAgcHJvcHNNYW5hZ2VyID0gX3JlZi5tYW5hZ2VyLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJkaWFsb2dDbGFzc05hbWVcIiwgXCJjb250ZW50Q2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJkaWFsb2dBc1wiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcInNob3dcIiwgXCJhbmltYXRpb25cIiwgXCJiYWNrZHJvcFwiLCBcImtleWJvYXJkXCIsIFwib25Fc2NhcGVLZXlEb3duXCIsIFwib25TaG93XCIsIFwib25IaWRlXCIsIFwiY29udGFpbmVyXCIsIFwiYXV0b0ZvY3VzXCIsIFwiZW5mb3JjZUZvY3VzXCIsIFwicmVzdG9yZUZvY3VzXCIsIFwicmVzdG9yZUZvY3VzT3B0aW9uc1wiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0ZWRcIiwgXCJiYWNrZHJvcENsYXNzTmFtZVwiLCBcIm1hbmFnZXJcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKSh7fSksXG4gICAgICBtb2RhbFN0eWxlID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0U3R5bGUgPSBfdXNlU3RhdGVbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTIgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKShmYWxzZSksXG4gICAgICBhbmltYXRlU3RhdGljTW9kYWwgPSBfdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0QW5pbWF0ZVN0YXRpY01vZGFsID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgd2FpdGluZ0Zvck1vdXNlVXBSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoZmFsc2UpO1xuICB2YXIgaWdub3JlQmFja2Ryb3BDbGlja1JlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShmYWxzZSk7XG4gIHZhciByZW1vdmVTdGF0aWNNb2RhbEFuaW1hdGlvblJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShudWxsKTsgLy8gVE9ETzogd2hhdCdzIHRoaXMgdHlwZVxuXG4gIHZhciBfdXNlQ2FsbGJhY2tSZWYgPSAoMCwgX3VzZUNhbGxiYWNrUmVmMi5kZWZhdWx0KSgpLFxuICAgICAgbW9kYWwgPSBfdXNlQ2FsbGJhY2tSZWZbMF0sXG4gICAgICBzZXRNb2RhbFJlZiA9IF91c2VDYWxsYmFja1JlZlsxXTtcblxuICB2YXIgaGFuZGxlSGlkZSA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShvbkhpZGUpO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbW9kYWwnKTtcbiAgKDAsIF9yZWFjdC51c2VJbXBlcmF0aXZlSGFuZGxlKShyZWYsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZ2V0IF9tb2RhbCgpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nLmRlZmF1bHQpKGZhbHNlLCAnQWNjZXNzaW5nIGBfbW9kYWxgIGlzIG5vdCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlJykgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBtb2RhbDtcbiAgICAgIH1cblxuICAgIH07XG4gIH0sIFttb2RhbF0pO1xuICB2YXIgbW9kYWxDb250ZXh0ID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9uSGlkZTogaGFuZGxlSGlkZVxuICAgIH07XG4gIH0sIFtoYW5kbGVIaWRlXSk7XG5cbiAgZnVuY3Rpb24gZ2V0TW9kYWxNYW5hZ2VyKCkge1xuICAgIGlmIChwcm9wc01hbmFnZXIpIHJldHVybiBwcm9wc01hbmFnZXI7XG4gICAgaWYgKCFtYW5hZ2VyKSBtYW5hZ2VyID0gbmV3IF9Cb290c3RyYXBNb2RhbE1hbmFnZXIuZGVmYXVsdCgpO1xuICAgIHJldHVybiBtYW5hZ2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRGlhbG9nU3R5bGUobm9kZSkge1xuICAgIGlmICghX2NhblVzZURPTS5kZWZhdWx0KSByZXR1cm47XG4gICAgdmFyIGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgPSBnZXRNb2RhbE1hbmFnZXIoKS5pc0NvbnRhaW5lck92ZXJmbG93aW5nKG1vZGFsKTtcbiAgICB2YXIgbW9kYWxJc092ZXJmbG93aW5nID0gbm9kZS5zY3JvbGxIZWlnaHQgPiAoMCwgX293bmVyRG9jdW1lbnQuZGVmYXVsdCkobm9kZSkuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgICBzZXRTdHlsZSh7XG4gICAgICBwYWRkaW5nUmlnaHQ6IGNvbnRhaW5lcklzT3ZlcmZsb3dpbmcgJiYgIW1vZGFsSXNPdmVyZmxvd2luZyA/ICgwLCBfc2Nyb2xsYmFyU2l6ZS5kZWZhdWx0KSgpIDogdW5kZWZpbmVkLFxuICAgICAgcGFkZGluZ0xlZnQ6ICFjb250YWluZXJJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/ICgwLCBfc2Nyb2xsYmFyU2l6ZS5kZWZhdWx0KSgpIDogdW5kZWZpbmVkXG4gICAgfSk7XG4gIH1cblxuICB2YXIgaGFuZGxlV2luZG93UmVzaXplID0gKDAsIF91c2VFdmVudENhbGxiYWNrLmRlZmF1bHQpKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIHVwZGF0ZURpYWxvZ1N0eWxlKG1vZGFsLmRpYWxvZyk7XG4gICAgfVxuICB9KTtcbiAgKDAsIF91c2VXaWxsVW5tb3VudC5kZWZhdWx0KShmdW5jdGlvbiAoKSB7XG4gICAgKDAsIF9yZW1vdmVFdmVudExpc3RlbmVyLmRlZmF1bHQpKHdpbmRvdywgJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG5cbiAgICBpZiAocmVtb3ZlU3RhdGljTW9kYWxBbmltYXRpb25SZWYuY3VycmVudCkge1xuICAgICAgcmVtb3ZlU3RhdGljTW9kYWxBbmltYXRpb25SZWYuY3VycmVudCgpO1xuICAgIH1cbiAgfSk7IC8vIFdlIHByZXZlbnQgdGhlIG1vZGFsIGZyb20gY2xvc2luZyBkdXJpbmcgYSBkcmFnIGJ5IGRldGVjdGluZyB3aGVyZSB0aGVcbiAgLy8gdGhlIGNsaWNrIG9yaWdpbmF0ZXMgZnJvbS4gSWYgaXQgc3RhcnRzIGluIHRoZSBtb2RhbCBhbmQgdGhlbiBlbmRzIG91dHNpZGVcbiAgLy8gZG9uJ3QgY2xvc2UuXG5cbiAgdmFyIGhhbmRsZURpYWxvZ01vdXNlRG93biA9IGZ1bmN0aW9uIGhhbmRsZURpYWxvZ01vdXNlRG93bigpIHtcbiAgICB3YWl0aW5nRm9yTW91c2VVcFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgfTtcblxuICB2YXIgaGFuZGxlTW91c2VVcCA9IGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZSkge1xuICAgIGlmICh3YWl0aW5nRm9yTW91c2VVcFJlZi5jdXJyZW50ICYmIG1vZGFsICYmIGUudGFyZ2V0ID09PSBtb2RhbC5kaWFsb2cpIHtcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2tSZWYuY3VycmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgd2FpdGluZ0Zvck1vdXNlVXBSZWYuY3VycmVudCA9IGZhbHNlO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTdGF0aWNNb2RhbEFuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhbmRsZVN0YXRpY01vZGFsQW5pbWF0aW9uKCkge1xuICAgIHNldEFuaW1hdGVTdGF0aWNNb2RhbCh0cnVlKTtcbiAgICByZW1vdmVTdGF0aWNNb2RhbEFuaW1hdGlvblJlZi5jdXJyZW50ID0gKDAsIF90cmFuc2l0aW9uRW5kLmRlZmF1bHQpKG1vZGFsLmRpYWxvZywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0QW5pbWF0ZVN0YXRpY01vZGFsKGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlU3RhdGljQmFja2Ryb3BDbGljayA9IGZ1bmN0aW9uIGhhbmRsZVN0YXRpY0JhY2tkcm9wQ2xpY2soZSkge1xuICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFuZGxlU3RhdGljTW9kYWxBbmltYXRpb24oKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKGJhY2tkcm9wID09PSAnc3RhdGljJykge1xuICAgICAgaGFuZGxlU3RhdGljQmFja2Ryb3BDbGljayhlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaWdub3JlQmFja2Ryb3BDbGlja1JlZi5jdXJyZW50IHx8IGUudGFyZ2V0ICE9PSBlLmN1cnJlbnRUYXJnZXQpIHtcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2tSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG9uSGlkZSgpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVFc2NhcGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlRXNjYXBlS2V5RG93bihlKSB7XG4gICAgaWYgKCFrZXlib2FyZCAmJiBiYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIC8vIENhbGwgcHJldmVudERlZmF1bHQgdG8gc3RvcCBtb2RhbCBmcm9tIGNsb3NpbmcgaW4gcmVhY3Qtb3ZlcmxheXMsXG4gICAgICAvLyB0aGVuIHBsYXkgb3VyIGFuaW1hdGlvbi5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGhhbmRsZVN0YXRpY01vZGFsQW5pbWF0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChrZXlib2FyZCAmJiBvbkVzY2FwZUtleURvd24pIHtcbiAgICAgIG9uRXNjYXBlS2V5RG93bihlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyID0gZnVuY3Rpb24gaGFuZGxlRW50ZXIobm9kZSkge1xuICAgIGlmIChub2RlKSB7XG4gICAgICBub2RlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdXBkYXRlRGlhbG9nU3R5bGUobm9kZSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKG9uRW50ZXIpIG9uRW50ZXIuYXBwbHkodm9pZCAwLCBbbm9kZV0uY29uY2F0KGFyZ3MpKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRXhpdCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXQobm9kZSkge1xuICAgIGlmIChyZW1vdmVTdGF0aWNNb2RhbEFuaW1hdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICByZW1vdmVTdGF0aWNNb2RhbEFuaW1hdGlvblJlZi5jdXJyZW50KCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgaWYgKG9uRXhpdCkgb25FeGl0LmFwcGx5KHZvaWQgMCwgW25vZGVdLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJpbmcobm9kZSkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyA+IDEgPyBfbGVuMyAtIDEgOiAwKSwgX2tleTMgPSAxOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICBhcmdzW19rZXkzIC0gMV0gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIGlmIChvbkVudGVyaW5nKSBvbkVudGVyaW5nLmFwcGx5KHZvaWQgMCwgW25vZGVdLmNvbmNhdChhcmdzKSk7IC8vIEZJWE1FOiBUaGlzIHNob3VsZCB3b3JrIGV2ZW4gd2hlbiBhbmltYXRpb24gaXMgZGlzYWJsZWQuXG5cbiAgICAoMCwgX2FkZEV2ZW50TGlzdGVuZXIuZGVmYXVsdCkod2luZG93LCAncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRXhpdGVkID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkKG5vZGUpIHtcbiAgICBpZiAobm9kZSkgbm9kZS5zdHlsZS5kaXNwbGF5ID0gJyc7IC8vIFJITCByZW1vdmVzIGl0IHNvbWV0aW1lc1xuXG4gICAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW40ID4gMSA/IF9sZW40IC0gMSA6IDApLCBfa2V5NCA9IDE7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTQgLSAxXSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgfVxuXG4gICAgaWYgKG9uRXhpdGVkKSBvbkV4aXRlZC5hcHBseSh2b2lkIDAsIGFyZ3MpOyAvLyBGSVhNRTogVGhpcyBzaG91bGQgd29yayBldmVuIHdoZW4gYW5pbWF0aW9uIGlzIGRpc2FibGVkLlxuXG4gICAgKDAsIF9yZW1vdmVFdmVudExpc3RlbmVyLmRlZmF1bHQpKHdpbmRvdywgJ3Jlc2l6ZScsIGhhbmRsZVdpbmRvd1Jlc2l6ZSk7XG4gIH07XG5cbiAgdmFyIHJlbmRlckJhY2tkcm9wID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGJhY2tkcm9wUHJvcHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgYmFja2Ryb3BQcm9wcywge1xuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoYnNQcmVmaXggKyBcIi1iYWNrZHJvcFwiLCBiYWNrZHJvcENsYXNzTmFtZSwgIWFuaW1hdGlvbiAmJiAnc2hvdycpXG4gICAgfSkpO1xuICB9LCBbYW5pbWF0aW9uLCBiYWNrZHJvcENsYXNzTmFtZSwgYnNQcmVmaXhdKTtcbiAgdmFyIGJhc2VNb2RhbFN0eWxlID0gKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgc3R5bGUsIG1vZGFsU3R5bGUpOyAvLyBTZXRzIGBkaXNwbGF5YCBhbHdheXMgYmxvY2sgd2hlbiBgYW5pbWF0aW9uYCBpcyBmYWxzZVxuXG4gIGlmICghYW5pbWF0aW9uKSB7XG4gICAgYmFzZU1vZGFsU3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cblxuICB2YXIgcmVuZGVyRGlhbG9nID0gZnVuY3Rpb24gcmVuZGVyRGlhbG9nKGRpYWxvZ1Byb3BzKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgICAgcm9sZTogXCJkaWFsb2dcIlxuICAgIH0sIGRpYWxvZ1Byb3BzLCB7XG4gICAgICBzdHlsZTogYmFzZU1vZGFsU3R5bGUsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBhbmltYXRlU3RhdGljTW9kYWwgJiYgYnNQcmVmaXggKyBcIi1zdGF0aWNcIiksXG4gICAgICBvbkNsaWNrOiBiYWNrZHJvcCA/IGhhbmRsZUNsaWNrIDogdW5kZWZpbmVkLFxuICAgICAgb25Nb3VzZVVwOiBoYW5kbGVNb3VzZVVwLFxuICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogYXJpYUxhYmVsbGVkYnlcbiAgICB9KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRGlhbG9nLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgICAgb25Nb3VzZURvd246IGhhbmRsZURpYWxvZ01vdXNlRG93bixcbiAgICAgIGNsYXNzTmFtZTogZGlhbG9nQ2xhc3NOYW1lLFxuICAgICAgY29udGVudENsYXNzTmFtZTogY29udGVudENsYXNzTmFtZVxuICAgIH0pLCBjaGlsZHJlbikpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTW9kYWxDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbW9kYWxDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Nb2RhbC5kZWZhdWx0LCB7XG4gICAgc2hvdzogc2hvdyxcbiAgICByZWY6IHNldE1vZGFsUmVmLFxuICAgIGJhY2tkcm9wOiBiYWNrZHJvcCxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lcixcbiAgICBrZXlib2FyZDogdHJ1ZSAvLyBBbHdheXMgc2V0IHRydWUgLSBzZWUgaGFuZGxlRXNjYXBlS2V5RG93blxuICAgICxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBlbmZvcmNlRm9jdXM6IGVuZm9yY2VGb2N1cyxcbiAgICByZXN0b3JlRm9jdXM6IHJlc3RvcmVGb2N1cyxcbiAgICByZXN0b3JlRm9jdXNPcHRpb25zOiByZXN0b3JlRm9jdXNPcHRpb25zLFxuICAgIG9uRXNjYXBlS2V5RG93bjogaGFuZGxlRXNjYXBlS2V5RG93bixcbiAgICBvblNob3c6IG9uU2hvdyxcbiAgICBvbkhpZGU6IG9uSGlkZSxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyaW5nOiBoYW5kbGVFbnRlcmluZyxcbiAgICBvbkVudGVyZWQ6IG9uRW50ZXJlZCxcbiAgICBvbkV4aXQ6IGhhbmRsZUV4aXQsXG4gICAgb25FeGl0aW5nOiBvbkV4aXRpbmcsXG4gICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZCxcbiAgICBtYW5hZ2VyOiBnZXRNb2RhbE1hbmFnZXIoKSxcbiAgICBjb250YWluZXJDbGFzc05hbWU6IGJzUHJlZml4ICsgXCItb3BlblwiLFxuICAgIHRyYW5zaXRpb246IGFuaW1hdGlvbiA/IERpYWxvZ1RyYW5zaXRpb24gOiB1bmRlZmluZWQsXG4gICAgYmFja2Ryb3BUcmFuc2l0aW9uOiBhbmltYXRpb24gPyBCYWNrZHJvcFRyYW5zaXRpb24gOiB1bmRlZmluZWQsXG4gICAgcmVuZGVyQmFja2Ryb3A6IHJlbmRlckJhY2tkcm9wLFxuICAgIHJlbmRlckRpYWxvZzogcmVuZGVyRGlhbG9nXG4gIH0pKTtcbn0pO1xuXG5Nb2RhbC5kaXNwbGF5TmFtZSA9ICdNb2RhbCc7XG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5Nb2RhbC5Cb2R5ID0gX01vZGFsQm9keS5kZWZhdWx0O1xuTW9kYWwuSGVhZGVyID0gX01vZGFsSGVhZGVyLmRlZmF1bHQ7XG5Nb2RhbC5UaXRsZSA9IF9Nb2RhbFRpdGxlLmRlZmF1bHQ7XG5Nb2RhbC5Gb290ZXIgPSBfTW9kYWxGb290ZXIuZGVmYXVsdDtcbk1vZGFsLkRpYWxvZyA9IF9Nb2RhbERpYWxvZy5kZWZhdWx0O1xuTW9kYWwuVFJBTlNJVElPTl9EVVJBVElPTiA9IDMwMDtcbk1vZGFsLkJBQ0tEUk9QX1RSQU5TSVRJT05fRFVSQVRJT04gPSAxNTA7XG52YXIgX2RlZmF1bHQgPSBNb2RhbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlV2l0aEJzUHJlZml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXaXRoQnNQcmVmaXhcIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVdpdGhCc1ByZWZpeC5kZWZhdWx0KSgnbW9kYWwtYm9keScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgTW9kYWxDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG4gIG9uSGlkZTogZnVuY3Rpb24gb25IaWRlKCkge31cbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBNb2RhbENvbnRleHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgTW9kYWxEaWFsb2cgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNvbnRlbnRDbGFzc05hbWUgPSBfcmVmLmNvbnRlbnRDbGFzc05hbWUsXG4gICAgICBjZW50ZXJlZCA9IF9yZWYuY2VudGVyZWQsXG4gICAgICBzaXplID0gX3JlZi5zaXplLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgc2Nyb2xsYWJsZSA9IF9yZWYuc2Nyb2xsYWJsZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImNvbnRlbnRDbGFzc05hbWVcIiwgXCJjZW50ZXJlZFwiLCBcInNpemVcIiwgXCJjaGlsZHJlblwiLCBcInNjcm9sbGFibGVcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbW9kYWwnKTtcbiAgdmFyIGRpYWxvZ0NsYXNzID0gYnNQcmVmaXggKyBcIi1kaWFsb2dcIjtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoZGlhbG9nQ2xhc3MsIGNsYXNzTmFtZSwgc2l6ZSAmJiBic1ByZWZpeCArIFwiLVwiICsgc2l6ZSwgY2VudGVyZWQgJiYgZGlhbG9nQ2xhc3MgKyBcIi1jZW50ZXJlZFwiLCBzY3JvbGxhYmxlICYmIGRpYWxvZ0NsYXNzICsgXCItc2Nyb2xsYWJsZVwiKVxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGJzUHJlZml4ICsgXCItY29udGVudFwiLCBjb250ZW50Q2xhc3NOYW1lKVxuICB9LCBjaGlsZHJlbikpO1xufSk7XG5cbk1vZGFsRGlhbG9nLmRpc3BsYXlOYW1lID0gJ01vZGFsRGlhbG9nJztcbnZhciBfZGVmYXVsdCA9IE1vZGFsRGlhbG9nO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9jcmVhdGVXaXRoQnNQcmVmaXggPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZVdpdGhCc1ByZWZpeFwiKSk7XG5cbnZhciBfZGVmYXVsdCA9ICgwLCBfY3JlYXRlV2l0aEJzUHJlZml4LmRlZmF1bHQpKCdtb2RhbC1mb290ZXInKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlRXZlbnRDYWxsYmFjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2tcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX0Nsb3NlQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DbG9zZUJ1dHRvblwiKSk7XG5cbnZhciBfTW9kYWxDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbENvbnRleHRcIikpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBjbG9zZUxhYmVsOiAnQ2xvc2UnLFxuICBjbG9zZUJ1dHRvbjogZmFsc2Vcbn07XG5cbnZhciBNb2RhbEhlYWRlciA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsb3NlTGFiZWwgPSBfcmVmLmNsb3NlTGFiZWwsXG4gICAgICBjbG9zZUJ1dHRvbiA9IF9yZWYuY2xvc2VCdXR0b24sXG4gICAgICBvbkhpZGUgPSBfcmVmLm9uSGlkZSxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xvc2VMYWJlbFwiLCBcImNsb3NlQnV0dG9uXCIsIFwib25IaWRlXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbW9kYWwtaGVhZGVyJyk7XG4gIHZhciBjb250ZXh0ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfTW9kYWxDb250ZXh0LmRlZmF1bHQpO1xuICB2YXIgaGFuZGxlQ2xpY2sgPSAoMCwgX3VzZUV2ZW50Q2FsbGJhY2suZGVmYXVsdCkoZnVuY3Rpb24gKCkge1xuICAgIGlmIChjb250ZXh0KSBjb250ZXh0Lm9uSGlkZSgpO1xuICAgIGlmIChvbkhpZGUpIG9uSGlkZSgpO1xuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeClcbiAgfSksIGNoaWxkcmVuLCBjbG9zZUJ1dHRvbiAmJiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQ2xvc2VCdXR0b24uZGVmYXVsdCwge1xuICAgIGxhYmVsOiBjbG9zZUxhYmVsLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrXG4gIH0pKTtcbn0pO1xuXG5Nb2RhbEhlYWRlci5kaXNwbGF5TmFtZSA9ICdNb2RhbEhlYWRlcic7XG5Nb2RhbEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBNb2RhbEhlYWRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfY3JlYXRlV2l0aEJzUHJlZml4ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVXaXRoQnNQcmVmaXhcIikpO1xuXG52YXIgX2RpdldpdGhDbGFzc05hbWUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RpdldpdGhDbGFzc05hbWVcIikpO1xuXG52YXIgRGl2U3R5bGVkQXNINCA9ICgwLCBfZGl2V2l0aENsYXNzTmFtZS5kZWZhdWx0KSgnaDQnKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ21vZGFsLXRpdGxlJywge1xuICBDb21wb25lbnQ6IERpdlN0eWxlZEFzSDRcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2FsbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXMtZXh0cmEvbGliL2FsbFwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZShcInVuY29udHJvbGxhYmxlXCIpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX05hdmJhckNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdmJhckNvbnRleHRcIikpO1xuXG52YXIgX0NhcmRDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DYXJkQ29udGV4dFwiKSk7XG5cbnZhciBfQWJzdHJhY3ROYXYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Fic3RyYWN0TmF2XCIpKTtcblxudmFyIF9OYXZJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZJdGVtXCIpKTtcblxudmFyIF9OYXZMaW5rID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZMaW5rXCIpKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAganVzdGlmeTogZmFsc2UsXG4gIGZpbGw6IGZhbHNlXG59O1xuXG52YXIgTmF2ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHVuY29udHJvbGxlZFByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBfdXNlVW5jb250cm9sbGVkID0gKDAsIF91bmNvbnRyb2xsYWJsZS51c2VVbmNvbnRyb2xsZWQpKHVuY29udHJvbGxlZFByb3BzLCB7XG4gICAgYWN0aXZlS2V5OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgX3VzZVVuY29udHJvbGxlZCRhcyA9IF91c2VVbmNvbnRyb2xsZWQuYXMsXG4gICAgICBhcyA9IF91c2VVbmNvbnRyb2xsZWQkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3VzZVVuY29udHJvbGxlZCRhcyxcbiAgICAgIGluaXRpYWxCc1ByZWZpeCA9IF91c2VVbmNvbnRyb2xsZWQuYnNQcmVmaXgsXG4gICAgICB2YXJpYW50ID0gX3VzZVVuY29udHJvbGxlZC52YXJpYW50LFxuICAgICAgZmlsbCA9IF91c2VVbmNvbnRyb2xsZWQuZmlsbCxcbiAgICAgIGp1c3RpZnkgPSBfdXNlVW5jb250cm9sbGVkLmp1c3RpZnksXG4gICAgICBuYXZiYXIgPSBfdXNlVW5jb250cm9sbGVkLm5hdmJhcixcbiAgICAgIGNsYXNzTmFtZSA9IF91c2VVbmNvbnRyb2xsZWQuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfdXNlVW5jb250cm9sbGVkLmNoaWxkcmVuLFxuICAgICAgYWN0aXZlS2V5ID0gX3VzZVVuY29udHJvbGxlZC5hY3RpdmVLZXksXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiYXNcIiwgXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJmaWxsXCIsIFwianVzdGlmeVwiLCBcIm5hdmJhclwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiYWN0aXZlS2V5XCJdKTtcblxuICB2YXIgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShpbml0aWFsQnNQcmVmaXgsICduYXYnKTtcbiAgdmFyIG5hdmJhckJzUHJlZml4O1xuICB2YXIgY2FyZEhlYWRlckJzUHJlZml4O1xuICB2YXIgaXNOYXZiYXIgPSBmYWxzZTtcbiAgdmFyIG5hdmJhckNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9OYXZiYXJDb250ZXh0LmRlZmF1bHQpO1xuICB2YXIgY2FyZENvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9DYXJkQ29udGV4dC5kZWZhdWx0KTtcblxuICBpZiAobmF2YmFyQ29udGV4dCkge1xuICAgIG5hdmJhckJzUHJlZml4ID0gbmF2YmFyQ29udGV4dC5ic1ByZWZpeDtcbiAgICBpc05hdmJhciA9IG5hdmJhciA9PSBudWxsID8gdHJ1ZSA6IG5hdmJhcjtcbiAgfSBlbHNlIGlmIChjYXJkQ29udGV4dCkge1xuICAgIGNhcmRIZWFkZXJCc1ByZWZpeCA9IGNhcmRDb250ZXh0LmNhcmRIZWFkZXJCc1ByZWZpeDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQWJzdHJhY3ROYXYuZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgYXM6IGFzLFxuICAgIHJlZjogcmVmLFxuICAgIGFjdGl2ZUtleTogYWN0aXZlS2V5LFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW2JzUHJlZml4XSA9ICFpc05hdmJhciwgX2NsYXNzTmFtZXNbbmF2YmFyQnNQcmVmaXggKyBcIi1uYXZcIl0gPSBpc05hdmJhciwgX2NsYXNzTmFtZXNbY2FyZEhlYWRlckJzUHJlZml4ICsgXCItXCIgKyB2YXJpYW50XSA9ICEhY2FyZEhlYWRlckJzUHJlZml4LCBfY2xhc3NOYW1lc1tic1ByZWZpeCArIFwiLVwiICsgdmFyaWFudF0gPSAhIXZhcmlhbnQsIF9jbGFzc05hbWVzW2JzUHJlZml4ICsgXCItZmlsbFwiXSA9IGZpbGwsIF9jbGFzc05hbWVzW2JzUHJlZml4ICsgXCItanVzdGlmaWVkXCJdID0ganVzdGlmeSwgX2NsYXNzTmFtZXMpKVxuICB9LCBwcm9wcyksIGNoaWxkcmVuKTtcbn0pO1xuXG5OYXYuZGlzcGxheU5hbWUgPSAnTmF2Jztcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5OYXYuSXRlbSA9IF9OYXZJdGVtLmRlZmF1bHQ7XG5OYXYuTGluayA9IF9OYXZMaW5rLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBOYXY7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgTmF2Q29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuXG5OYXZDb250ZXh0LmRpc3BsYXlOYW1lID0gJ05hdkNvbnRleHQnO1xudmFyIF9kZWZhdWx0ID0gTmF2Q29udGV4dDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9wcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTtcblxudmFyIF9Ecm9wZG93biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRHJvcGRvd25cIikpO1xuXG52YXIgX05hdkl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdkl0ZW1cIikpO1xuXG52YXIgX05hdkxpbmsgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdkxpbmtcIikpO1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBUb2dnbGUgYnV0dG9uLCBuZWNlc3NhcnkgZm9yIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuXG4gICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIGlkOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuXG4gIC8qKiBBbiBgb25DbGlja2AgaGFuZGxlciBwYXNzZWQgdG8gdGhlIFRvZ2dsZSBjb21wb25lbnQgKi9cbiAgb25DbGljazogX3Byb3BUeXBlcy5kZWZhdWx0LmZ1bmMsXG5cbiAgLyoqIFRoZSBjb250ZW50IG9mIHRoZSBub24tdG9nZ2xlIEJ1dHRvbi4gICovXG4gIHRpdGxlOiBfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuXG4gIC8qKiBEaXNhYmxlcyB0aGUgdG9nZ2xlIE5hdkxpbmsgICovXG4gIGRpc2FibGVkOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKiogU3R5bGUgdGhlIHRvZ2dsZSBOYXZMaW5rIGFzIGFjdGl2ZSAgKi9cbiAgYWN0aXZlOiBfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxcblxuICAvKiogQW4gQVJJQSBhY2Nlc3NpYmxlIHJvbGUgYXBwbGllZCB0byB0aGUgTWVudSBjb21wb25lbnQuIFdoZW4gc2V0IHRvICdtZW51JywgVGhlIGRyb3Bkb3duICovXG4gIG1lbnVSb2xlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgZHJvcGRvd24gbWVudSBpbiB0aGUgRE9NIGJlZm9yZSB0aGUgZmlyc3QgdGltZSBpdCBpcyBzaG93biAqL1xuICByZW5kZXJNZW51T25Nb3VudDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqICBXaGljaCBldmVudCB3aGVuIGZpcmVkIG91dHNpZGUgdGhlIGNvbXBvbmVudCB3aWxsIGNhdXNlIGl0IHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogX3NlZSBbRHJvcGRvd25NZW51XSgjbWVudS1wcm9wcykgZm9yIG1vcmUgZGV0YWlsc19cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICovXG4gIGJzUHJlZml4OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nXG59O1xuXG52YXIgTmF2RHJvcGRvd24gPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBpZCA9IF9yZWYuaWQsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICByb290Q2xvc2VFdmVudCA9IF9yZWYucm9vdENsb3NlRXZlbnQsXG4gICAgICBtZW51Um9sZSA9IF9yZWYubWVudVJvbGUsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBhY3RpdmUgPSBfcmVmLmFjdGl2ZSxcbiAgICAgIHJlbmRlck1lbnVPbk1vdW50ID0gX3JlZi5yZW5kZXJNZW51T25Nb3VudCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJpZFwiLCBcInRpdGxlXCIsIFwiY2hpbGRyZW5cIiwgXCJic1ByZWZpeFwiLCBcInJvb3RDbG9zZUV2ZW50XCIsIFwibWVudVJvbGVcIiwgXCJkaXNhYmxlZFwiLCBcImFjdGl2ZVwiLCBcInJlbmRlck1lbnVPbk1vdW50XCJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ecm9wZG93bi5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGFzOiBfTmF2SXRlbS5kZWZhdWx0XG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfRHJvcGRvd24uZGVmYXVsdC5Ub2dnbGUsIHtcbiAgICBpZDogaWQsXG4gICAgZXZlbnRLZXk6IG51bGwsXG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGNoaWxkQnNQcmVmaXg6IGJzUHJlZml4LFxuICAgIGFzOiBfTmF2TGluay5kZWZhdWx0XG4gIH0sIHRpdGxlKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duLmRlZmF1bHQuTWVudSwge1xuICAgIHJvbGU6IG1lbnVSb2xlLFxuICAgIHJlbmRlck9uTW91bnQ6IHJlbmRlck1lbnVPbk1vdW50LFxuICAgIHJvb3RDbG9zZUV2ZW50OiByb290Q2xvc2VFdmVudFxuICB9LCBjaGlsZHJlbikpO1xufSk7XG5cbk5hdkRyb3Bkb3duLmRpc3BsYXlOYW1lID0gJ05hdkRyb3Bkb3duJztcbk5hdkRyb3Bkb3duLnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk5hdkRyb3Bkb3duLkl0ZW0gPSBfRHJvcGRvd24uZGVmYXVsdC5JdGVtO1xuTmF2RHJvcGRvd24uSXRlbVRleHQgPSBfRHJvcGRvd24uZGVmYXVsdC5JdGVtVGV4dDtcbk5hdkRyb3Bkb3duLkRpdmlkZXIgPSBfRHJvcGRvd24uZGVmYXVsdC5EaXZpZGVyO1xuTmF2RHJvcGRvd24uSGVhZGVyID0gX0Ryb3Bkb3duLmRlZmF1bHQuSGVhZGVyO1xudmFyIF9kZWZhdWx0ID0gTmF2RHJvcGRvd247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgTmF2SXRlbSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKCAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG5mdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIiwgXCJhc1wiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICduYXYtaXRlbScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgYnNQcmVmaXgpXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcblxuTmF2SXRlbS5kaXNwbGF5TmFtZSA9ICdOYXZJdGVtJztcbnZhciBfZGVmYXVsdCA9IE5hdkl0ZW07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1NhZmVBbmNob3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NhZmVBbmNob3JcIikpO1xuXG52YXIgX0Fic3RyYWN0TmF2SXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWJzdHJhY3ROYXZJdGVtXCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBhczogX1NhZmVBbmNob3IuZGVmYXVsdFxufTtcblxudmFyIE5hdkxpbmsgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGhyZWYgPSBfcmVmLmhyZWYsXG4gICAgICBldmVudEtleSA9IF9yZWYuZXZlbnRLZXksXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBhcyA9IF9yZWYuYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJkaXNhYmxlZFwiLCBcImNsYXNzTmFtZVwiLCBcImhyZWZcIiwgXCJldmVudEtleVwiLCBcIm9uU2VsZWN0XCIsIFwiYXNcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbmF2LWxpbmsnKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9BYnN0cmFjdE5hdkl0ZW0uZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICBocmVmOiBocmVmLFxuICAgIHJlZjogcmVmLFxuICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICBhczogYXMsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIG9uU2VsZWN0OiBvblNlbGVjdCxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBkaXNhYmxlZCAmJiAnZGlzYWJsZWQnKVxuICB9KSk7XG59KTtcblxuTmF2TGluay5kaXNwbGF5TmFtZSA9ICdOYXZMaW5rJztcbk5hdkxpbmsuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gTmF2TGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZShcInVuY29udHJvbGxhYmxlXCIpO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9OYXZiYXJCcmFuZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2YmFyQnJhbmRcIikpO1xuXG52YXIgX05hdmJhckNvbGxhcHNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZiYXJDb2xsYXBzZVwiKSk7XG5cbnZhciBfTmF2YmFyVG9nZ2xlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZiYXJUb2dnbGVcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX05hdmJhckNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdmJhckNvbnRleHRcIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TZWxlY3RhYmxlQ29udGV4dFwiKSk7XG5cbnZhciBOYXZiYXJUZXh0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ25hdmJhci10ZXh0Jywge1xuICBDb21wb25lbnQ6ICdzcGFuJ1xufSk7XG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBleHBhbmQ6IHRydWUsXG4gIHZhcmlhbnQ6ICdsaWdodCcsXG4gIGNvbGxhcHNlT25TZWxlY3Q6IGZhbHNlXG59O1xuXG52YXIgTmF2YmFyID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF91c2VVbmNvbnRyb2xsZWQgPSAoMCwgX3VuY29udHJvbGxhYmxlLnVzZVVuY29udHJvbGxlZCkocHJvcHMsIHtcbiAgICBleHBhbmRlZDogJ29uVG9nZ2xlJ1xuICB9KSxcbiAgICAgIGluaXRpYWxCc1ByZWZpeCA9IF91c2VVbmNvbnRyb2xsZWQuYnNQcmVmaXgsXG4gICAgICBleHBhbmQgPSBfdXNlVW5jb250cm9sbGVkLmV4cGFuZCxcbiAgICAgIHZhcmlhbnQgPSBfdXNlVW5jb250cm9sbGVkLnZhcmlhbnQsXG4gICAgICBiZyA9IF91c2VVbmNvbnRyb2xsZWQuYmcsXG4gICAgICBmaXhlZCA9IF91c2VVbmNvbnRyb2xsZWQuZml4ZWQsXG4gICAgICBzdGlja3kgPSBfdXNlVW5jb250cm9sbGVkLnN0aWNreSxcbiAgICAgIGNsYXNzTmFtZSA9IF91c2VVbmNvbnRyb2xsZWQuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfdXNlVW5jb250cm9sbGVkLmNoaWxkcmVuLFxuICAgICAgX3VzZVVuY29udHJvbGxlZCRhcyA9IF91c2VVbmNvbnRyb2xsZWQuYXMsXG4gICAgICBDb21wb25lbnQgPSBfdXNlVW5jb250cm9sbGVkJGFzID09PSB2b2lkIDAgPyAnbmF2JyA6IF91c2VVbmNvbnRyb2xsZWQkYXMsXG4gICAgICBleHBhbmRlZCA9IF91c2VVbmNvbnRyb2xsZWQuZXhwYW5kZWQsXG4gICAgICBfb25Ub2dnbGUgPSBfdXNlVW5jb250cm9sbGVkLm9uVG9nZ2xlLFxuICAgICAgb25TZWxlY3QgPSBfdXNlVW5jb250cm9sbGVkLm9uU2VsZWN0LFxuICAgICAgY29sbGFwc2VPblNlbGVjdCA9IF91c2VVbmNvbnRyb2xsZWQuY29sbGFwc2VPblNlbGVjdCxcbiAgICAgIGNvbnRyb2xsZWRQcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiYnNQcmVmaXhcIiwgXCJleHBhbmRcIiwgXCJ2YXJpYW50XCIsIFwiYmdcIiwgXCJmaXhlZFwiLCBcInN0aWNreVwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiYXNcIiwgXCJleHBhbmRlZFwiLCBcIm9uVG9nZ2xlXCIsIFwib25TZWxlY3RcIiwgXCJjb2xsYXBzZU9uU2VsZWN0XCJdKTtcblxuICB2YXIgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShpbml0aWFsQnNQcmVmaXgsICduYXZiYXInKTtcbiAgdmFyIGhhbmRsZUNvbGxhcHNlID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3QuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuXG4gICAgaWYgKGNvbGxhcHNlT25TZWxlY3QgJiYgZXhwYW5kZWQpIHtcbiAgICAgIGlmIChfb25Ub2dnbGUpIHtcbiAgICAgICAgX29uVG9nZ2xlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtvblNlbGVjdCwgY29sbGFwc2VPblNlbGVjdCwgZXhwYW5kZWQsIF9vblRvZ2dsZV0pOyAvLyB3aWxsIHJlc3VsdCBpbiBzb21lIGZhbHNlIHBvc2l0aXZlcyBidXQgdGhhdCBzZWVtcyBiZXR0ZXJcbiAgLy8gdGhhbiBmYWxzZSBuZWdhdGl2ZXMuIHN0cmljdCBgdW5kZWZpbmVkYCBjaGVjayBhbGxvd3MgZXhwbGljaXRcbiAgLy8gXCJudWxsaW5nXCIgb2YgdGhlIHJvbGUgaWYgdGhlIHVzZXIgcmVhbGx5IGRvZXNuJ3Qgd2FudCBvbmVcblxuICBpZiAoY29udHJvbGxlZFByb3BzLnJvbGUgPT09IHVuZGVmaW5lZCAmJiBDb21wb25lbnQgIT09ICduYXYnKSB7XG4gICAgY29udHJvbGxlZFByb3BzLnJvbGUgPSAnbmF2aWdhdGlvbic7XG4gIH1cblxuICB2YXIgZXhwYW5kQ2xhc3MgPSBic1ByZWZpeCArIFwiLWV4cGFuZFwiO1xuICBpZiAodHlwZW9mIGV4cGFuZCA9PT0gJ3N0cmluZycpIGV4cGFuZENsYXNzID0gZXhwYW5kQ2xhc3MgKyBcIi1cIiArIGV4cGFuZDtcbiAgdmFyIG5hdmJhckNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25Ub2dnbGU6IGZ1bmN0aW9uIG9uVG9nZ2xlKCkge1xuICAgICAgICByZXR1cm4gX29uVG9nZ2xlICYmIF9vblRvZ2dsZSghZXhwYW5kZWQpO1xuICAgICAgfSxcbiAgICAgIGJzUHJlZml4OiBic1ByZWZpeCxcbiAgICAgIGV4cGFuZGVkOiAhIWV4cGFuZGVkXG4gICAgfTtcbiAgfSwgW2JzUHJlZml4LCBleHBhbmRlZCwgX29uVG9nZ2xlXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTmF2YmFyQ29udGV4dC5kZWZhdWx0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG5hdmJhckNvbnRleHRcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogaGFuZGxlQ29sbGFwc2VcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBjb250cm9sbGVkUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBleHBhbmQgJiYgZXhwYW5kQ2xhc3MsIHZhcmlhbnQgJiYgYnNQcmVmaXggKyBcIi1cIiArIHZhcmlhbnQsIGJnICYmIFwiYmctXCIgKyBiZywgc3RpY2t5ICYmIFwic3RpY2t5LVwiICsgc3RpY2t5LCBmaXhlZCAmJiBcImZpeGVkLVwiICsgZml4ZWQpXG4gIH0pLCBjaGlsZHJlbikpKTtcbn0pO1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuTmF2YmFyLmRpc3BsYXlOYW1lID0gJ05hdmJhcic7XG5OYXZiYXIuQnJhbmQgPSBfTmF2YmFyQnJhbmQuZGVmYXVsdDtcbk5hdmJhci5Ub2dnbGUgPSBfTmF2YmFyVG9nZ2xlLmRlZmF1bHQ7XG5OYXZiYXIuQ29sbGFwc2UgPSBfTmF2YmFyQ29sbGFwc2UuZGVmYXVsdDtcbk5hdmJhci5UZXh0ID0gTmF2YmFyVGV4dDtcbnZhciBfZGVmYXVsdCA9IE5hdmJhcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBOYXZiYXJCcmFuZCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgYXMgPSBfcmVmLmFzLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiYXNcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAnbmF2YmFyLWJyYW5kJyk7XG4gIHZhciBDb21wb25lbnQgPSBhcyB8fCAocHJvcHMuaHJlZiA/ICdhJyA6ICdzcGFuJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBic1ByZWZpeClcbiAgfSkpO1xufSk7XG5cbk5hdmJhckJyYW5kLmRpc3BsYXlOYW1lID0gJ05hdmJhckJyYW5kJztcbnZhciBfZGVmYXVsdCA9IE5hdmJhckJyYW5kO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0NvbGxhcHNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Db2xsYXBzZVwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBfTmF2YmFyQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2YmFyQ29udGV4dFwiKSk7XG5cbnZhciBOYXZiYXJDb2xsYXBzZSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJjaGlsZHJlblwiLCBcImJzUHJlZml4XCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ25hdmJhci1jb2xsYXBzZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX05hdmJhckNvbnRleHQuZGVmYXVsdC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0NvbGxhcHNlLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgICAgaW46ICEhKGNvbnRleHQgJiYgY29udGV4dC5leHBhbmRlZClcbiAgICB9LCBwcm9wcyksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiBic1ByZWZpeFxuICAgIH0sIGNoaWxkcmVuKSk7XG4gIH0pO1xufSk7XG5cbk5hdmJhckNvbGxhcHNlLmRpc3BsYXlOYW1lID0gJ05hdmJhckNvbGxhcHNlJztcbnZhciBfZGVmYXVsdCA9IE5hdmJhckNvbGxhcHNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIGNvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtcblxuY29udGV4dC5kaXNwbGF5TmFtZSA9ICdOYXZiYXJDb250ZXh0JztcbnZhciBfZGVmYXVsdCA9IGNvbnRleHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VFdmVudENhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFja1wiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBfTmF2YmFyQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2YmFyQ29udGV4dFwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGxhYmVsOiAnVG9nZ2xlIG5hdmlnYXRpb24nXG59O1xuXG52YXIgTmF2YmFyVG9nZ2xlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBsYWJlbCA9IF9yZWYubGFiZWwsXG4gICAgICBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICdidXR0b24nIDogX3JlZiRhcyxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImxhYmVsXCIsIFwiYXNcIiwgXCJvbkNsaWNrXCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ25hdmJhci10b2dnbGVyJyk7XG5cbiAgdmFyIF9yZWYyID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfTmF2YmFyQ29udGV4dC5kZWZhdWx0KSB8fCB7fSxcbiAgICAgIG9uVG9nZ2xlID0gX3JlZjIub25Ub2dnbGUsXG4gICAgICBleHBhbmRlZCA9IF9yZWYyLmV4cGFuZGVkO1xuXG4gIHZhciBoYW5kbGVDbGljayA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGUpO1xuICAgIGlmIChvblRvZ2dsZSkgb25Ub2dnbGUoKTtcbiAgfSk7XG5cbiAgaWYgKENvbXBvbmVudCA9PT0gJ2J1dHRvbicpIHtcbiAgICBwcm9wcy50eXBlID0gJ2J1dHRvbic7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgIFwiYXJpYS1sYWJlbFwiOiBsYWJlbCxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCAhZXhwYW5kZWQgJiYgJ2NvbGxhcHNlZCcpXG4gIH0pLCBjaGlsZHJlbiB8fCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogYnNQcmVmaXggKyBcIi1pY29uXCJcbiAgfSkpO1xufSk7XG5cbk5hdmJhclRvZ2dsZS5kaXNwbGF5TmFtZSA9ICdOYXZiYXJUb2dnbGUnO1xuTmF2YmFyVG9nZ2xlLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IE5hdmJhclRvZ2dsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX092ZXJsYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9PdmVybGF5XCIpKTtcblxudmFyIF9zYWZlRmluZERPTU5vZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9zYWZlRmluZERPTU5vZGVcIikpO1xuXG52YXIgX3VzZVBvcHBlck1hcmdpbk1vZGlmaWVycyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXNlUG9wcGVyTWFyZ2luTW9kaWZpZXJzXCIpKTtcblxudmFyIF9GYWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9GYWRlXCIpKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhbnNpdGlvbjogX0ZhZGUuZGVmYXVsdCxcbiAgcm9vdENsb3NlOiBmYWxzZSxcbiAgc2hvdzogZmFsc2UsXG4gIHBsYWNlbWVudDogJ3RvcCdcbn07XG5cbmZ1bmN0aW9uIHdyYXBSZWZzKHByb3BzLCBhcnJvd1Byb3BzKSB7XG4gIHZhciByZWYgPSBwcm9wcy5yZWY7XG4gIHZhciBhUmVmID0gYXJyb3dQcm9wcy5yZWY7XG5cbiAgcHJvcHMucmVmID0gcmVmLl9fd3JhcHBlZCB8fCAocmVmLl9fd3JhcHBlZCA9IGZ1bmN0aW9uIChyKSB7XG4gICAgcmV0dXJuIHJlZigoMCwgX3NhZmVGaW5kRE9NTm9kZS5kZWZhdWx0KShyKSk7XG4gIH0pO1xuXG4gIGFycm93UHJvcHMucmVmID0gYVJlZi5fX3dyYXBwZWQgfHwgKGFSZWYuX193cmFwcGVkID0gZnVuY3Rpb24gKHIpIHtcbiAgICByZXR1cm4gYVJlZigoMCwgX3NhZmVGaW5kRE9NTm9kZS5kZWZhdWx0KShyKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBPdmVybGF5KF9yZWYpIHtcbiAgdmFyIG92ZXJsYXkgPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgdHJhbnNpdGlvbiA9IF9yZWYudHJhbnNpdGlvbixcbiAgICAgIF9yZWYkcG9wcGVyQ29uZmlnID0gX3JlZi5wb3BwZXJDb25maWcsXG4gICAgICBwb3BwZXJDb25maWcgPSBfcmVmJHBvcHBlckNvbmZpZyA9PT0gdm9pZCAwID8ge30gOiBfcmVmJHBvcHBlckNvbmZpZyxcbiAgICAgIG91dGVyUHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcInBvcHBlckNvbmZpZ1wiXSk7XG4gIHZhciBwb3BwZXJSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikoe30pO1xuXG4gIHZhciBfdXNlUG9wcGVyTWFyZ2luTW9kaWYgPSAoMCwgX3VzZVBvcHBlck1hcmdpbk1vZGlmaWVycy5kZWZhdWx0KSgpLFxuICAgICAgcmVmID0gX3VzZVBvcHBlck1hcmdpbk1vZGlmWzBdLFxuICAgICAgbWFyZ2luTW9kaWZpZXJzID0gX3VzZVBvcHBlck1hcmdpbk1vZGlmWzFdO1xuXG4gIHZhciBhY3R1YWxUcmFuc2l0aW9uID0gdHJhbnNpdGlvbiA9PT0gdHJ1ZSA/IF9GYWRlLmRlZmF1bHQgOiB0cmFuc2l0aW9uIHx8IG51bGw7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfT3ZlcmxheS5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBvdXRlclByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgcG9wcGVyQ29uZmlnOiAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwb3BwZXJDb25maWcsIHtcbiAgICAgIG1vZGlmaWVyczogbWFyZ2luTW9kaWZpZXJzLmNvbmNhdChwb3BwZXJDb25maWcubW9kaWZpZXJzIHx8IFtdKVxuICAgIH0pLFxuICAgIHRyYW5zaXRpb246IGFjdHVhbFRyYW5zaXRpb25cbiAgfSksIGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBfc3RhdGUkbW9kaWZpZXJzRGF0YSQ7XG5cbiAgICB2YXIgb3ZlcmxheVByb3BzID0gX3JlZjIucHJvcHMsXG4gICAgICAgIGFycm93UHJvcHMgPSBfcmVmMi5hcnJvd1Byb3BzLFxuICAgICAgICBzaG93ID0gX3JlZjIuc2hvdyxcbiAgICAgICAgdXBkYXRlID0gX3JlZjIudXBkYXRlLFxuICAgICAgICBfID0gX3JlZjIuZm9yY2VVcGRhdGUsXG4gICAgICAgIHBsYWNlbWVudCA9IF9yZWYyLnBsYWNlbWVudCxcbiAgICAgICAgc3RhdGUgPSBfcmVmMi5zdGF0ZSxcbiAgICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYyLCBbXCJwcm9wc1wiLCBcImFycm93UHJvcHNcIiwgXCJzaG93XCIsIFwidXBkYXRlXCIsIFwiZm9yY2VVcGRhdGVcIiwgXCJwbGFjZW1lbnRcIiwgXCJzdGF0ZVwiXSk7XG4gICAgd3JhcFJlZnMob3ZlcmxheVByb3BzLCBhcnJvd1Byb3BzKTtcbiAgICB2YXIgcG9wcGVyID0gT2JqZWN0LmFzc2lnbihwb3BwZXJSZWYuY3VycmVudCwge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2NoZWR1bGVVcGRhdGU6IHVwZGF0ZSxcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgb3V0T2ZCb3VuZGFyaWVzOiAoc3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IChfc3RhdGUkbW9kaWZpZXJzRGF0YSQgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLmhpZGUpID09IG51bGwgPyB2b2lkIDAgOiBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuaXNSZWZlcmVuY2VIaWRkZW4pIHx8IGZhbHNlXG4gICAgfSk7XG4gICAgaWYgKHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nKSByZXR1cm4gb3ZlcmxheSgoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywgb3ZlcmxheVByb3BzLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIHNob3c6IHNob3csXG4gICAgICBwb3BwZXI6IHBvcHBlcixcbiAgICAgIGFycm93UHJvcHM6IGFycm93UHJvcHNcbiAgICB9KSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQob3ZlcmxheSwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIG92ZXJsYXlQcm9wcywge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBhcnJvd1Byb3BzOiBhcnJvd1Byb3BzLFxuICAgICAgcG9wcGVyOiBwb3BwZXIsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShvdmVybGF5LnByb3BzLmNsYXNzTmFtZSwgIXRyYW5zaXRpb24gJiYgc2hvdyAmJiAnc2hvdycpLFxuICAgICAgc3R5bGU6ICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIG92ZXJsYXkucHJvcHMuc3R5bGUsIG92ZXJsYXlQcm9wcy5zdHlsZSlcbiAgICB9KSk7XG4gIH0pO1xufVxuXG5PdmVybGF5LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IE92ZXJsYXk7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfaW5oZXJpdHNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2VcIikpO1xuXG52YXIgX2NvbnRhaW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiZG9tLWhlbHBlcnMvY29udGFpbnNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VUaW1lb3V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlVGltZW91dFwiKSk7XG5cbnZhciBfc2FmZUZpbmRET01Ob2RlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3Qtb3ZlcmxheXMvc2FmZUZpbmRET01Ob2RlXCIpKTtcblxudmFyIF93YXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwid2FybmluZ1wiKSk7XG5cbnZhciBfdW5jb250cm9sbGFibGUgPSByZXF1aXJlKFwidW5jb250cm9sbGFibGVcIik7XG5cbnZhciBfT3ZlcmxheSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vT3ZlcmxheVwiKSk7XG5cbnZhciBSZWZIb2xkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0c0xvb3NlMi5kZWZhdWx0KShSZWZIb2xkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFJlZkhvbGRlcigpIHtcbiAgICByZXR1cm4gX1JlYWN0JENvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gUmVmSG9sZGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9O1xuXG4gIHJldHVybiBSZWZIb2xkZXI7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURlbGF5KGRlbGF5KSB7XG4gIHJldHVybiBkZWxheSAmJiB0eXBlb2YgZGVsYXkgPT09ICdvYmplY3QnID8gZGVsYXkgOiB7XG4gICAgc2hvdzogZGVsYXksXG4gICAgaGlkZTogZGVsYXlcbiAgfTtcbn0gLy8gU2ltcGxlIGltcGxlbWVudGF0aW9uIG9mIG1vdXNlRW50ZXIgYW5kIG1vdXNlTGVhdmUuXG4vLyBSZWFjdCdzIGJ1aWx0IHZlcnNpb24gaXMgYnJva2VuOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzQyNTFcbi8vIGZvciBjYXNlcyB3aGVuIHRoZSB0cmlnZ2VyIGlzIGRpc2FibGVkIGFuZCBtb3VzZU91dC9PdmVyIGNhbiBjYXVzZSBmbGlja2VyXG4vLyBtb3ZpbmcgZnJvbSBvbmUgY2hpbGQgZWxlbWVudCB0byBhbm90aGVyLlxuXG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlT3Zlck91dChoYW5kbGVyLCBhcmdzLCByZWxhdGVkTmF0aXZlKSB7XG4gIHZhciBlID0gYXJnc1swXTtcbiAgdmFyIHRhcmdldCA9IGUuY3VycmVudFRhcmdldDtcbiAgdmFyIHJlbGF0ZWQgPSBlLnJlbGF0ZWRUYXJnZXQgfHwgZS5uYXRpdmVFdmVudFtyZWxhdGVkTmF0aXZlXTtcblxuICBpZiAoKCFyZWxhdGVkIHx8IHJlbGF0ZWQgIT09IHRhcmdldCkgJiYgISgwLCBfY29udGFpbnMuZGVmYXVsdCkodGFyZ2V0LCByZWxhdGVkKSkge1xuICAgIGhhbmRsZXIuYXBwbHkodm9pZCAwLCBhcmdzKTtcbiAgfVxufVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkZWZhdWx0U2hvdzogZmFsc2UsXG4gIHRyaWdnZXI6IFsnaG92ZXInLCAnZm9jdXMnXVxufTtcblxuZnVuY3Rpb24gT3ZlcmxheVRyaWdnZXIoX3JlZikge1xuICB2YXIgdHJpZ2dlciA9IF9yZWYudHJpZ2dlcixcbiAgICAgIG92ZXJsYXkgPSBfcmVmLm92ZXJsYXksXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBfcmVmJHBvcHBlckNvbmZpZyA9IF9yZWYucG9wcGVyQ29uZmlnLFxuICAgICAgcG9wcGVyQ29uZmlnID0gX3JlZiRwb3BwZXJDb25maWcgPT09IHZvaWQgMCA/IHt9IDogX3JlZiRwb3BwZXJDb25maWcsXG4gICAgICBwcm9wc1Nob3cgPSBfcmVmLnNob3csXG4gICAgICBfcmVmJGRlZmF1bHRTaG93ID0gX3JlZi5kZWZhdWx0U2hvdyxcbiAgICAgIGRlZmF1bHRTaG93ID0gX3JlZiRkZWZhdWx0U2hvdyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGRlZmF1bHRTaG93LFxuICAgICAgb25Ub2dnbGUgPSBfcmVmLm9uVG9nZ2xlLFxuICAgICAgcHJvcHNEZWxheSA9IF9yZWYuZGVsYXksXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmLnBsYWNlbWVudCxcbiAgICAgIF9yZWYkZmxpcCA9IF9yZWYuZmxpcCxcbiAgICAgIGZsaXAgPSBfcmVmJGZsaXAgPT09IHZvaWQgMCA/IHBsYWNlbWVudCAmJiBwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpICE9PSAtMSA6IF9yZWYkZmxpcCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJ0cmlnZ2VyXCIsIFwib3ZlcmxheVwiLCBcImNoaWxkcmVuXCIsIFwicG9wcGVyQ29uZmlnXCIsIFwic2hvd1wiLCBcImRlZmF1bHRTaG93XCIsIFwib25Ub2dnbGVcIiwgXCJkZWxheVwiLCBcInBsYWNlbWVudFwiLCBcImZsaXBcIl0pO1xuICB2YXIgdHJpZ2dlck5vZGVSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikobnVsbCk7XG4gIHZhciB0aW1lb3V0ID0gKDAsIF91c2VUaW1lb3V0LmRlZmF1bHQpKCk7XG4gIHZhciBob3ZlclN0YXRlUmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKCcnKTtcblxuICB2YXIgX3VzZVVuY29udHJvbGxlZFByb3AgPSAoMCwgX3VuY29udHJvbGxhYmxlLnVzZVVuY29udHJvbGxlZFByb3ApKHByb3BzU2hvdywgZGVmYXVsdFNob3csIG9uVG9nZ2xlKSxcbiAgICAgIHNob3cgPSBfdXNlVW5jb250cm9sbGVkUHJvcFswXSxcbiAgICAgIHNldFNob3cgPSBfdXNlVW5jb250cm9sbGVkUHJvcFsxXTtcblxuICB2YXIgZGVsYXkgPSBub3JtYWxpemVEZWxheShwcm9wc0RlbGF5KTtcblxuICB2YXIgX3JlZjIgPSB0eXBlb2YgY2hpbGRyZW4gIT09ICdmdW5jdGlvbicgPyBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKS5wcm9wcyA6IHt9LFxuICAgICAgb25Gb2N1cyA9IF9yZWYyLm9uRm9jdXMsXG4gICAgICBvbkJsdXIgPSBfcmVmMi5vbkJsdXIsXG4gICAgICBvbkNsaWNrID0gX3JlZjIub25DbGljaztcblxuICB2YXIgZ2V0VGFyZ2V0ID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX3NhZmVGaW5kRE9NTm9kZS5kZWZhdWx0KSh0cmlnZ2VyTm9kZVJlZi5jdXJyZW50KTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlU2hvdyA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0LmNsZWFyKCk7XG4gICAgaG92ZXJTdGF0ZVJlZi5jdXJyZW50ID0gJ3Nob3cnO1xuXG4gICAgaWYgKCFkZWxheS5zaG93KSB7XG4gICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRpbWVvdXQuc2V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChob3ZlclN0YXRlUmVmLmN1cnJlbnQgPT09ICdzaG93Jykgc2V0U2hvdyh0cnVlKTtcbiAgICB9LCBkZWxheS5zaG93KTtcbiAgfSwgW2RlbGF5LnNob3csIHNldFNob3csIHRpbWVvdXRdKTtcbiAgdmFyIGhhbmRsZUhpZGUgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dC5jbGVhcigpO1xuICAgIGhvdmVyU3RhdGVSZWYuY3VycmVudCA9ICdoaWRlJztcblxuICAgIGlmICghZGVsYXkuaGlkZSkge1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGltZW91dC5zZXQoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGhvdmVyU3RhdGVSZWYuY3VycmVudCA9PT0gJ2hpZGUnKSBzZXRTaG93KGZhbHNlKTtcbiAgICB9LCBkZWxheS5oaWRlKTtcbiAgfSwgW2RlbGF5LmhpZGUsIHNldFNob3csIHRpbWVvdXRdKTtcbiAgdmFyIGhhbmRsZUZvY3VzID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZVNob3coKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBvbkZvY3VzID09IG51bGwgPyB2b2lkIDAgOiBvbkZvY3VzLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH0sIFtoYW5kbGVTaG93LCBvbkZvY3VzXSk7XG4gIHZhciBoYW5kbGVCbHVyID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIGhhbmRsZUhpZGUoKTtcblxuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIG9uQmx1ciA9PSBudWxsID8gdm9pZCAwIDogb25CbHVyLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gIH0sIFtoYW5kbGVIaWRlLCBvbkJsdXJdKTtcbiAgdmFyIGhhbmRsZUNsaWNrID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKCkge1xuICAgIHNldFNob3coIXNob3cpO1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSwgW29uQ2xpY2ssIHNldFNob3csIHNob3ddKTtcbiAgdmFyIGhhbmRsZU1vdXNlT3ZlciA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU92ZXJPdXQoaGFuZGxlU2hvdywgYXJncywgJ2Zyb21FbGVtZW50Jyk7XG4gIH0sIFtoYW5kbGVTaG93XSk7XG4gIHZhciBoYW5kbGVNb3VzZU91dCA9ICgwLCBfcmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgIGFyZ3NbX2tleTRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICBoYW5kbGVNb3VzZU92ZXJPdXQoaGFuZGxlSGlkZSwgYXJncywgJ3RvRWxlbWVudCcpO1xuICB9LCBbaGFuZGxlSGlkZV0pO1xuICB2YXIgdHJpZ2dlcnMgPSB0cmlnZ2VyID09IG51bGwgPyBbXSA6IFtdLmNvbmNhdCh0cmlnZ2VyKTtcbiAgdmFyIHRyaWdnZXJQcm9wcyA9IHt9O1xuXG4gIGlmICh0cmlnZ2Vycy5pbmRleE9mKCdjbGljaycpICE9PSAtMSkge1xuICAgIHRyaWdnZXJQcm9wcy5vbkNsaWNrID0gaGFuZGxlQ2xpY2s7XG4gIH1cblxuICBpZiAodHJpZ2dlcnMuaW5kZXhPZignZm9jdXMnKSAhPT0gLTEpIHtcbiAgICB0cmlnZ2VyUHJvcHMub25Gb2N1cyA9IGhhbmRsZUZvY3VzO1xuICAgIHRyaWdnZXJQcm9wcy5vbkJsdXIgPSBoYW5kbGVCbHVyO1xuICB9XG5cbiAgaWYgKHRyaWdnZXJzLmluZGV4T2YoJ2hvdmVyJykgIT09IC0xKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF93YXJuaW5nLmRlZmF1bHQpKHRyaWdnZXJzLmxlbmd0aCA+IDEsICdbcmVhY3QtYm9vdHN0cmFwXSBTcGVjaWZ5aW5nIG9ubHkgdGhlIGBcImhvdmVyXCJgIHRyaWdnZXIgbGltaXRzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBvdmVybGF5IHRvIGp1c3QgbW91c2UgdXNlcnMuIENvbnNpZGVyIGFsc28gaW5jbHVkaW5nIHRoZSBgXCJmb2N1c1wiYCB0cmlnZ2VyIHNvIHRoYXQgdG91Y2ggYW5kIGtleWJvYXJkIG9ubHkgdXNlcnMgY2FuIHNlZSB0aGUgb3ZlcmxheSBhcyB3ZWxsLicpIDogdm9pZCAwO1xuICAgIHRyaWdnZXJQcm9wcy5vbk1vdXNlT3ZlciA9IGhhbmRsZU1vdXNlT3ZlcjtcbiAgICB0cmlnZ2VyUHJvcHMub25Nb3VzZU91dCA9IGhhbmRsZU1vdXNlT3V0O1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LCBudWxsLCB0eXBlb2YgY2hpbGRyZW4gPT09ICdmdW5jdGlvbicgPyBjaGlsZHJlbigoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCB0cmlnZ2VyUHJvcHMsIHtcbiAgICByZWY6IHRyaWdnZXJOb2RlUmVmXG4gIH0pKSA6IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFJlZkhvbGRlciwge1xuICAgIHJlZjogdHJpZ2dlck5vZGVSZWZcbiAgfSwgLyojX19QVVJFX18qLygwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZHJlbiwgdHJpZ2dlclByb3BzKSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9PdmVybGF5LmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgc2hvdzogc2hvdyxcbiAgICBvbkhpZGU6IGhhbmRsZUhpZGUsXG4gICAgZmxpcDogZmxpcCxcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICBwb3BwZXJDb25maWc6IHBvcHBlckNvbmZpZyxcbiAgICB0YXJnZXQ6IGdldFRhcmdldFxuICB9KSwgb3ZlcmxheSkpO1xufVxuXG5PdmVybGF5VHJpZ2dlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBPdmVybGF5VHJpZ2dlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkxhc3QgPSBleHBvcnRzLk5leHQgPSBleHBvcnRzLkVsbGlwc2lzID0gZXhwb3J0cy5QcmV2ID0gZXhwb3J0cy5GaXJzdCA9IGV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9TYWZlQW5jaG9yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TYWZlQW5jaG9yXCIpKTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tbXVsdGktY29tcCAqL1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBhY3RpdmVMYWJlbDogJyhjdXJyZW50KSdcbn07XG5cbnZhciBQYWdlSXRlbSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGFjdGl2ZSA9IF9yZWYuYWN0aXZlLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBhY3RpdmVMYWJlbCA9IF9yZWYuYWN0aXZlTGFiZWwsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYWN0aXZlXCIsIFwiZGlzYWJsZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImFjdGl2ZUxhYmVsXCIsIFwiY2hpbGRyZW5cIl0pO1xuICB2YXIgQ29tcG9uZW50ID0gYWN0aXZlIHx8IGRpc2FibGVkID8gJ3NwYW4nIDogX1NhZmVBbmNob3IuZGVmYXVsdDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsICdwYWdlLWl0ZW0nLCB7XG4gICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICAgIH0pXG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgY2xhc3NOYW1lOiBcInBhZ2UtbGlua1wiLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9LCBwcm9wcyksIGNoaWxkcmVuLCBhY3RpdmUgJiYgYWN0aXZlTGFiZWwgJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwic3Itb25seVwiXG4gIH0sIGFjdGl2ZUxhYmVsKSkpO1xufSk7XG5cblBhZ2VJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblBhZ2VJdGVtLmRpc3BsYXlOYW1lID0gJ1BhZ2VJdGVtJztcbnZhciBfZGVmYXVsdCA9IFBhZ2VJdGVtO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihuYW1lLCBkZWZhdWx0VmFsdWUsIGxhYmVsKSB7XG4gIGlmIChsYWJlbCA9PT0gdm9pZCAwKSB7XG4gICAgbGFiZWwgPSBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gQnV0dG9uKF9yZWYyKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gX3JlZjIuY2hpbGRyZW4sXG4gICAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmMiwgW1wiY2hpbGRyZW5cIl0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChQYWdlSXRlbSwgcHJvcHMsIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiXG4gICAgfSwgY2hpbGRyZW4gfHwgZGVmYXVsdFZhbHVlKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgICB9LCBsYWJlbCkpO1xuICB9XG5cbiAgQnV0dG9uLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgcmV0dXJuIEJ1dHRvbjtcbn1cblxudmFyIEZpcnN0ID0gY3JlYXRlQnV0dG9uKCdGaXJzdCcsICfCqycpO1xuZXhwb3J0cy5GaXJzdCA9IEZpcnN0O1xudmFyIFByZXYgPSBjcmVhdGVCdXR0b24oJ1ByZXYnLCAn4oC5JywgJ1ByZXZpb3VzJyk7XG5leHBvcnRzLlByZXYgPSBQcmV2O1xudmFyIEVsbGlwc2lzID0gY3JlYXRlQnV0dG9uKCdFbGxpcHNpcycsICfigKYnLCAnTW9yZScpO1xuZXhwb3J0cy5FbGxpcHNpcyA9IEVsbGlwc2lzO1xudmFyIE5leHQgPSBjcmVhdGVCdXR0b24oJ05leHQnLCAn4oC6Jyk7XG5leHBvcnRzLk5leHQgPSBOZXh0O1xudmFyIExhc3QgPSBjcmVhdGVCdXR0b24oJ0xhc3QnLCAnwrsnKTtcbmV4cG9ydHMuTGFzdCA9IExhc3Q7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX1BhZ2VJdGVtID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vUGFnZUl0ZW1cIikpO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7UGFnZUl0ZW19IEl0ZW1cbiAqIEBwcm9wZXJ0eSB7UGFnZUl0ZW19IEZpcnN0XG4gKiBAcHJvcGVydHkge1BhZ2VJdGVtfSBQcmV2XG4gKiBAcHJvcGVydHkge1BhZ2VJdGVtfSBFbGxpcHNpc1xuICogQHByb3BlcnR5IHtQYWdlSXRlbX0gTmV4dFxuICogQHByb3BlcnR5IHtQYWdlSXRlbX0gTGFzdFxuICovXG52YXIgUGFnaW5hdGlvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwic2l6ZVwiXSk7XG4gIHZhciBkZWNvcmF0ZWRCc1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAncGFnaW5hdGlvbicpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgsIHNpemUgJiYgZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1cIiArIHNpemUpXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcblxuUGFnaW5hdGlvbi5GaXJzdCA9IF9QYWdlSXRlbS5GaXJzdDtcblBhZ2luYXRpb24uUHJldiA9IF9QYWdlSXRlbS5QcmV2O1xuUGFnaW5hdGlvbi5FbGxpcHNpcyA9IF9QYWdlSXRlbS5FbGxpcHNpcztcblBhZ2luYXRpb24uSXRlbSA9IF9QYWdlSXRlbS5kZWZhdWx0O1xuUGFnaW5hdGlvbi5OZXh0ID0gX1BhZ2VJdGVtLk5leHQ7XG5QYWdpbmF0aW9uLkxhc3QgPSBfUGFnZUl0ZW0uTGFzdDtcbnZhciBfZGVmYXVsdCA9IFBhZ2luYXRpb247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2lzUmVxdWlyZWRGb3JBMTF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlcy1leHRyYS9saWIvaXNSZXF1aXJlZEZvckExMXlcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX1BvcG92ZXJUaXRsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUG9wb3ZlclRpdGxlXCIpKTtcblxudmFyIF9Qb3BvdmVyQ29udGVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUG9wb3ZlckNvbnRlbnRcIikpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZW1lbnQ6ICdyaWdodCdcbn07XG5cbnZhciBQb3BvdmVyID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgcGxhY2VtZW50ID0gX3JlZi5wbGFjZW1lbnQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlID0gX3JlZi5zdHlsZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIGNvbnRlbnQgPSBfcmVmLmNvbnRlbnQsXG4gICAgICBhcnJvd1Byb3BzID0gX3JlZi5hcnJvd1Byb3BzLFxuICAgICAgXyA9IF9yZWYucG9wcGVyLFxuICAgICAgXzEgPSBfcmVmLnNob3csXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJwbGFjZW1lbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwiY29udGVudFwiLCBcImFycm93UHJvcHNcIiwgXCJwb3BwZXJcIiwgXCJzaG93XCJdKTtcbiAgdmFyIGRlY29yYXRlZEJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdwb3BvdmVyJyk7XG5cbiAgdmFyIF9yZWYyID0gKHBsYWNlbWVudCA9PSBudWxsID8gdm9pZCAwIDogcGxhY2VtZW50LnNwbGl0KCctJykpIHx8IFtdLFxuICAgICAgcHJpbWFyeVBsYWNlbWVudCA9IF9yZWYyWzBdO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZixcbiAgICByb2xlOiBcInRvb2x0aXBcIixcbiAgICBzdHlsZTogc3R5bGUsXG4gICAgXCJ4LXBsYWNlbWVudFwiOiBwcmltYXJ5UGxhY2VtZW50LFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgsIHByaW1hcnlQbGFjZW1lbnQgJiYgXCJicy1wb3BvdmVyLVwiICsgcHJpbWFyeVBsYWNlbWVudClcbiAgfSwgcHJvcHMpLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICBjbGFzc05hbWU6IFwiYXJyb3dcIlxuICB9LCBhcnJvd1Byb3BzKSksIGNvbnRlbnQgPyAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUG9wb3ZlckNvbnRlbnQuZGVmYXVsdCwgbnVsbCwgY2hpbGRyZW4pIDogY2hpbGRyZW4pO1xufSk7XG5cblBvcG92ZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuUG9wb3Zlci5UaXRsZSA9IF9Qb3BvdmVyVGl0bGUuZGVmYXVsdDtcblBvcG92ZXIuQ29udGVudCA9IF9Qb3BvdmVyQ29udGVudC5kZWZhdWx0O1xudmFyIF9kZWZhdWx0ID0gUG9wb3ZlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBQb3BvdmVyQ29udGVudCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYXNcIiwgXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCJdKTtcbiAgYnNQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgJ3BvcG92ZXItYm9keScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgYnNQcmVmaXgpXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcblxudmFyIF9kZWZhdWx0ID0gUG9wb3ZlckNvbnRlbnQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgUG9wb3ZlclRpdGxlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJhc1wiLCBcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwiY2hpbGRyZW5cIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAncG9wb3Zlci1oZWFkZXInKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWZcbiAgfSwgcHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShic1ByZWZpeCwgY2xhc3NOYW1lKVxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5cbnZhciBfZGVmYXVsdCA9IFBvcG92ZXJUaXRsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX0VsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoXCIuL0VsZW1lbnRDaGlsZHJlblwiKTtcblxudmFyIFJPVU5EX1BSRUNJU0lPTiA9IDEwMDA7XG4vKipcbiAqIFZhbGlkYXRlIHRoYXQgY2hpbGRyZW4sIGlmIGFueSwgYXJlIGluc3RhbmNlcyBvZiBgPFByb2dyZXNzQmFyPmAuXG4gKi9cblxuZnVuY3Rpb24gb25seVByb2dyZXNzQmFyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgaWYgKCFjaGlsZHJlbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGVycm9yID0gbnVsbDtcblxuICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29tcGFyZSB0eXBlcyBpbiBhIHdheSB0aGF0IHdvcmtzIHdpdGggbGlicmFyaWVzIHRoYXQgcGF0Y2ggYW5kIHByb3h5XG4gICAgICogY29tcG9uZW50cyBsaWtlIHJlYWN0LWhvdC1sb2FkZXIuXG4gICAgICpcbiAgICAgKiBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2dhZWFyb24vcmVhY3QtaG90LWxvYWRlciNjaGVja2luZy1lbGVtZW50LXR5cGVzXG4gICAgICovXG5cblxuICAgIHZhciBlbGVtZW50ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvZ3Jlc3NCYXIsIG51bGwpO1xuXG4gICAgaWYgKGNoaWxkLnR5cGUgPT09IGVsZW1lbnQudHlwZSkgcmV0dXJuO1xuICAgIHZhciBjaGlsZFR5cGUgPSBjaGlsZC50eXBlO1xuICAgIHZhciBjaGlsZElkZW50aWZpZXIgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuaXNWYWxpZEVsZW1lbnQoY2hpbGQpID8gY2hpbGRUeXBlLmRpc3BsYXlOYW1lIHx8IGNoaWxkVHlwZS5uYW1lIHx8IGNoaWxkVHlwZSA6IGNoaWxkO1xuICAgIGVycm9yID0gbmV3IEVycm9yKFwiQ2hpbGRyZW4gb2YgXCIgKyBjb21wb25lbnROYW1lICsgXCIgY2FuIGNvbnRhaW4gb25seSBQcm9ncmVzc0JhciBcIiArIChcImNvbXBvbmVudHMuIEZvdW5kIFwiICsgY2hpbGRJZGVudGlmaWVyICsgXCIuXCIpKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGVycm9yO1xufVxuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICBhbmltYXRlZDogZmFsc2UsXG4gIGlzQ2hpbGQ6IGZhbHNlLFxuICBzck9ubHk6IGZhbHNlLFxuICBzdHJpcGVkOiBmYWxzZVxufTtcblxuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZShub3csIG1pbiwgbWF4KSB7XG4gIHZhciBwZXJjZW50YWdlID0gKG5vdyAtIG1pbikgLyAobWF4IC0gbWluKSAqIDEwMDtcbiAgcmV0dXJuIE1hdGgucm91bmQocGVyY2VudGFnZSAqIFJPVU5EX1BSRUNJU0lPTikgLyBST1VORF9QUkVDSVNJT047XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2dyZXNzQmFyKF9yZWYsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIG1pbiA9IF9yZWYubWluLFxuICAgICAgbm93ID0gX3JlZi5ub3csXG4gICAgICBtYXggPSBfcmVmLm1heCxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIHNyT25seSA9IF9yZWYuc3JPbmx5LFxuICAgICAgc3RyaXBlZCA9IF9yZWYuc3RyaXBlZCxcbiAgICAgIGFuaW1hdGVkID0gX3JlZi5hbmltYXRlZCxcbiAgICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuICAgICAgc3R5bGUgPSBfcmVmLnN0eWxlLFxuICAgICAgdmFyaWFudCA9IF9yZWYudmFyaWFudCxcbiAgICAgIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJtaW5cIiwgXCJub3dcIiwgXCJtYXhcIiwgXCJsYWJlbFwiLCBcInNyT25seVwiLCBcInN0cmlwZWRcIiwgXCJhbmltYXRlZFwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwidmFyaWFudFwiLCBcImJzUHJlZml4XCJdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgcm9sZTogXCJwcm9ncmVzc2JhclwiLFxuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgYnNQcmVmaXggKyBcIi1iYXJcIiwgKF9jbGFzc05hbWVzID0ge30sIF9jbGFzc05hbWVzW1wiYmctXCIgKyB2YXJpYW50XSA9IHZhcmlhbnQsIF9jbGFzc05hbWVzW2JzUHJlZml4ICsgXCItYmFyLWFuaW1hdGVkXCJdID0gYW5pbWF0ZWQsIF9jbGFzc05hbWVzW2JzUHJlZml4ICsgXCItYmFyLXN0cmlwZWRcIl0gPSBhbmltYXRlZCB8fCBzdHJpcGVkLCBfY2xhc3NOYW1lcykpLFxuICAgIHN0eWxlOiAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIHdpZHRoOiBnZXRQZXJjZW50YWdlKG5vdywgbWluLCBtYXgpICsgXCIlXCJcbiAgICB9LCBzdHlsZSksXG4gICAgXCJhcmlhLXZhbHVlbm93XCI6IG5vdyxcbiAgICBcImFyaWEtdmFsdWVtaW5cIjogbWluLFxuICAgIFwiYXJpYS12YWx1ZW1heFwiOiBtYXhcbiAgfSksIHNyT25seSA/IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInNyLW9ubHlcIlxuICB9LCBsYWJlbCkgOiBsYWJlbCk7XG59XG5cbnZhciBQcm9ncmVzc0JhciA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmMiwgcmVmKSB7XG4gIHZhciBpc0NoaWxkID0gX3JlZjIuaXNDaGlsZCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmMiwgW1wiaXNDaGlsZFwiXSk7XG4gIHByb3BzLmJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkocHJvcHMuYnNQcmVmaXgsICdwcm9ncmVzcycpO1xuXG4gIGlmIChpc0NoaWxkKSB7XG4gICAgcmV0dXJuIHJlbmRlclByb2dyZXNzQmFyKHByb3BzLCByZWYpO1xuICB9XG5cbiAgdmFyIG1pbiA9IHByb3BzLm1pbixcbiAgICAgIG5vdyA9IHByb3BzLm5vdyxcbiAgICAgIG1heCA9IHByb3BzLm1heCxcbiAgICAgIGxhYmVsID0gcHJvcHMubGFiZWwsXG4gICAgICBzck9ubHkgPSBwcm9wcy5zck9ubHksXG4gICAgICBzdHJpcGVkID0gcHJvcHMuc3RyaXBlZCxcbiAgICAgIGFuaW1hdGVkID0gcHJvcHMuYW5pbWF0ZWQsXG4gICAgICBic1ByZWZpeCA9IHByb3BzLmJzUHJlZml4LFxuICAgICAgdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgd3JhcHBlclByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShwcm9wcywgW1wibWluXCIsIFwibm93XCIsIFwibWF4XCIsIFwibGFiZWxcIiwgXCJzck9ubHlcIiwgXCJzdHJpcGVkXCIsIFwiYW5pbWF0ZWRcIiwgXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCB3cmFwcGVyUHJvcHMsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4KVxuICB9KSwgY2hpbGRyZW4gPyAoMCwgX0VsZW1lbnRDaGlsZHJlbi5tYXApKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qLygwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgaXNDaGlsZDogdHJ1ZVxuICAgIH0pO1xuICB9KSA6IHJlbmRlclByb2dyZXNzQmFyKHtcbiAgICBtaW46IG1pbixcbiAgICBub3c6IG5vdyxcbiAgICBtYXg6IG1heCxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgc3JPbmx5OiBzck9ubHksXG4gICAgc3RyaXBlZDogc3RyaXBlZCxcbiAgICBhbmltYXRlZDogYW5pbWF0ZWQsXG4gICAgYnNQcmVmaXg6IGJzUHJlZml4LFxuICAgIHZhcmlhbnQ6IHZhcmlhbnRcbiAgfSwgcmVmKSk7XG59KTtcblxuUHJvZ3Jlc3NCYXIuZGlzcGxheU5hbWUgPSAnUHJvZ3Jlc3NCYXInO1xuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gUHJvZ3Jlc3NCYXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhc3BlY3RSYXRpbzogJzFieTEnXG59O1xuXG52YXIgUmVzcG9uc2l2ZUVtYmVkID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhc3BlY3RSYXRpbyA9IF9yZWYuYXNwZWN0UmF0aW8sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImFzcGVjdFJhdGlvXCJdKTtcbiAgdmFyIGRlY29yYXRlZEJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdlbWJlZC1yZXNwb25zaXZlJyk7XG5cbiAgdmFyIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoZGVjb3JhdGVkQnNQcmVmaXgsIGNsYXNzTmFtZSwgYXNwZWN0UmF0aW8gJiYgZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1cIiArIGFzcGVjdFJhdGlvKVxuICB9KSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1pdGVtXCIpXG4gIH0pKTtcbn0pO1xuXG5SZXNwb25zaXZlRW1iZWQuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xudmFyIF9kZWZhdWx0ID0gUmVzcG9uc2l2ZUVtYmVkO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIERFVklDRV9TSVpFUyA9IFsneGwnLCAnbGcnLCAnbWQnLCAnc20nLCAneHMnXTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIG5vR3V0dGVyczogZmFsc2Vcbn07XG5cbnZhciBSb3cgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIG5vR3V0dGVycyA9IF9yZWYubm9HdXR0ZXJzLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJub0d1dHRlcnNcIiwgXCJhc1wiXSk7XG4gIHZhciBkZWNvcmF0ZWRCc1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAncm93Jyk7XG4gIHZhciBzaXplUHJlZml4ID0gZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1jb2xzXCI7XG4gIHZhciBjbGFzc2VzID0gW107XG4gIERFVklDRV9TSVpFUy5mb3JFYWNoKGZ1bmN0aW9uIChicmtQb2ludCkge1xuICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1ticmtQb2ludF07XG4gICAgZGVsZXRlIHByb3BzW2Jya1BvaW50XTtcbiAgICB2YXIgY29scztcblxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgY29scyA9IHByb3BWYWx1ZS5jb2xzO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xzID0gcHJvcFZhbHVlO1xuICAgIH1cblxuICAgIHZhciBpbmZpeCA9IGJya1BvaW50ICE9PSAneHMnID8gXCItXCIgKyBicmtQb2ludCA6ICcnO1xuICAgIGlmIChjb2xzICE9IG51bGwpIGNsYXNzZXMucHVzaChcIlwiICsgc2l6ZVByZWZpeCArIGluZml4ICsgXCItXCIgKyBjb2xzKTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBfY2xhc3NuYW1lcy5kZWZhdWx0LmFwcGx5KHZvaWQgMCwgW2NsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgsIG5vR3V0dGVycyAmJiAnbm8tZ3V0dGVycyddLmNvbmNhdChjbGFzc2VzKSlcbiAgfSkpO1xufSk7XG5cblJvdy5kaXNwbGF5TmFtZSA9ICdSb3cnO1xuUm93LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbnZhciBfZGVmYXVsdCA9IFJvdztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2NyZWF0ZUNoYWluZWRGdW5jdGlvblwiKSk7XG5cbmZ1bmN0aW9uIGlzVHJpdmlhbEhyZWYoaHJlZikge1xuICByZXR1cm4gIWhyZWYgfHwgaHJlZi50cmltKCkgPT09ICcjJztcbn1cbi8qKlxuICogVGhlcmUgYXJlIHNpdHVhdGlvbnMgZHVlIHRvIGJyb3dzZXIgcXVpcmtzIG9yIEJvb3RzdHJhcCBDU1Mgd2hlcmVcbiAqIGFuIGFuY2hvciB0YWcgaXMgbmVlZGVkLCB3aGVuIHNlbWFudGljYWxseSBhIGJ1dHRvbiB0YWcgaXMgdGhlXG4gKiBiZXR0ZXIgY2hvaWNlLiBTYWZlQW5jaG9yIGVuc3VyZXMgdGhhdCB3aGVuIGFuIGFuY2hvciBpcyB1c2VkIGxpa2UgYVxuICogYnV0dG9uIGl0cyBhY2Nlc3NpYmxlLiBJdCBhbHNvIGVtdWxhdGVzIGlucHV0IGBkaXNhYmxlZGAgYmVoYXZpb3IgZm9yXG4gKiBsaW5rcywgd2hpY2ggaXMgdXN1YWxseSBkZXNpcmFibGUgZm9yIEJ1dHRvbnMsIE5hdkl0ZW1zLCBEcm9wZG93bkl0ZW1zLCBldGMuXG4gKi9cblxuXG52YXIgU2FmZUFuY2hvciA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2EnIDogX3JlZiRhcyxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZCxcbiAgICAgIG9uS2V5RG93biA9IF9yZWYub25LZXlEb3duLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImFzXCIsIFwiZGlzYWJsZWRcIiwgXCJvbktleURvd25cIl0pO1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgdmFyIGhyZWYgPSBwcm9wcy5ocmVmLFxuICAgICAgICBvbkNsaWNrID0gcHJvcHMub25DbGljaztcblxuICAgIGlmIChkaXNhYmxlZCB8fCBpc1RyaXZpYWxIcmVmKGhyZWYpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnICcpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBoYW5kbGVDbGljayhldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChpc1RyaXZpYWxIcmVmKHByb3BzLmhyZWYpKSB7XG4gICAgcHJvcHMucm9sZSA9IHByb3BzLnJvbGUgfHwgJ2J1dHRvbic7IC8vIHdlIHdhbnQgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGEgaHJlZiBhdHRyaWJ1dGUgb24gdGhlIG5vZGVcbiAgICAvLyBvdGhlcndpc2UsIHRoZSBjdXJzb3IgaW5jb3JyZWN0bHkgc3R5bGVkIChleGNlcHQgd2l0aCByb2xlPSdidXR0b24nKVxuXG4gICAgcHJvcHMuaHJlZiA9IHByb3BzLmhyZWYgfHwgJyMnO1xuICB9XG5cbiAgaWYgKGRpc2FibGVkKSB7XG4gICAgcHJvcHMudGFiSW5kZXggPSAtMTtcbiAgICBwcm9wc1snYXJpYS1kaXNhYmxlZCddID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgb25LZXlEb3duOiAoMCwgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5kZWZhdWx0KShoYW5kbGVLZXlEb3duLCBvbktleURvd24pXG4gIH0pKTtcbn0pO1xuXG5TYWZlQW5jaG9yLmRpc3BsYXlOYW1lID0gJ1NhZmVBbmNob3InO1xudmFyIF9kZWZhdWx0ID0gU2FmZUFuY2hvcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBleHBvcnRzLm1ha2VFdmVudEtleSA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFNlbGVjdGFibGVDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5cbnZhciBtYWtlRXZlbnRLZXkgPSBmdW5jdGlvbiBtYWtlRXZlbnRLZXkoZXZlbnRLZXksIGhyZWYpIHtcbiAgaWYgKGhyZWYgPT09IHZvaWQgMCkge1xuICAgIGhyZWYgPSBudWxsO1xuICB9XG5cbiAgaWYgKGV2ZW50S2V5ICE9IG51bGwpIHJldHVybiBTdHJpbmcoZXZlbnRLZXkpO1xuICByZXR1cm4gaHJlZiB8fCBudWxsO1xufTtcblxuZXhwb3J0cy5tYWtlRXZlbnRLZXkgPSBtYWtlRXZlbnRLZXk7XG52YXIgX2RlZmF1bHQgPSBTZWxlY3RhYmxlQ29udGV4dDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIFNwaW5uZXIgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgYW5pbWF0aW9uID0gX3JlZi5hbmltYXRpb24sXG4gICAgICBzaXplID0gX3JlZi5zaXplLFxuICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcInZhcmlhbnRcIiwgXCJhbmltYXRpb25cIiwgXCJzaXplXCIsIFwiY2hpbGRyZW5cIiwgXCJhc1wiLCBcImNsYXNzTmFtZVwiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICdzcGlubmVyJyk7XG4gIHZhciBic1NwaW5uZXJQcmVmaXggPSBic1ByZWZpeCArIFwiLVwiICsgYW5pbWF0aW9uO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgYnNTcGlubmVyUHJlZml4LCBzaXplICYmIGJzU3Bpbm5lclByZWZpeCArIFwiLVwiICsgc2l6ZSwgdmFyaWFudCAmJiBcInRleHQtXCIgKyB2YXJpYW50KVxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5cblNwaW5uZXIuZGlzcGxheU5hbWUgPSAnU3Bpbm5lcic7XG52YXIgX2RlZmF1bHQgPSBTcGlubmVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3Byb3BUeXBlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO1xuXG52YXIgX0J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnV0dG9uXCIpKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnV0dG9uR3JvdXBcIikpO1xuXG52YXIgX0Ryb3Bkb3duID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ecm9wZG93blwiKSk7XG5cbnZhciBfRHJvcGRvd25NZW51ID0gcmVxdWlyZShcIi4vRHJvcGRvd25NZW51XCIpO1xuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQW4gaHRtbCBpZCBhdHRyaWJ1dGUgZm9yIHRoZSBUb2dnbGUgYnV0dG9uLCBuZWNlc3NhcnkgZm9yIGFzc2lzdGl2ZSB0ZWNobm9sb2dpZXMsIHN1Y2ggYXMgc2NyZWVuIHJlYWRlcnMuXG4gICAqIEB0eXBlIHtzdHJpbmd8bnVtYmVyfVxuICAgKiBAcmVxdWlyZWRcbiAgICovXG4gIGlkOiBfcHJvcFR5cGVzLmRlZmF1bHQuYW55LFxuXG4gIC8qKlxuICAgKiBBY2Nlc3NpYmxlIGxhYmVsIGZvciB0aGUgdG9nZ2xlOyB0aGUgdmFsdWUgb2YgYHRpdGxlYCBpZiBub3Qgc3BlY2lmaWVkLlxuICAgKi9cbiAgdG9nZ2xlTGFiZWw6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIEFuIGBocmVmYCBwYXNzZWQgdG8gdGhlIG5vbi10b2dnbGUgQnV0dG9uICovXG4gIGhyZWY6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIEFuIGFuY2hvciBgdGFyZ2V0YCBwYXNzZWQgdG8gdGhlIG5vbi10b2dnbGUgQnV0dG9uICovXG4gIHRhcmdldDogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKiogQW4gYG9uQ2xpY2tgIGhhbmRsZXIgcGFzc2VkIHRvIHRoZSBub24tdG9nZ2xlIEJ1dHRvbiAqL1xuICBvbkNsaWNrOiBfcHJvcFR5cGVzLmRlZmF1bHQuZnVuYyxcblxuICAvKiogVGhlIGNvbnRlbnQgb2YgdGhlIG5vbi10b2dnbGUgQnV0dG9uLiAgKi9cbiAgdGl0bGU6IF9wcm9wVHlwZXMuZGVmYXVsdC5ub2RlLmlzUmVxdWlyZWQsXG5cbiAgLyoqIEEgYHR5cGVgIHBhc3NlZCB0byB0aGUgbm9uLXRvZ2dsZSBCdXR0b24gKi9cbiAgdHlwZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxcblxuICAvKiogRGlzYWJsZXMgYm90aCBCdXR0b25zICAqL1xuICBkaXNhYmxlZDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqIEFsaWducyB0aGUgZHJvcGRvd24gbWVudSByZXNwb25zaXZlbHkuXG4gICAqXG4gICAqIF9zZWUgW0Ryb3Bkb3duTWVudV0oI2Ryb3Bkb3duLW1lbnUtcHJvcHMpIGZvciBtb3JlIGRldGFpbHNfXG4gICAqXG4gICAqIEB0eXBlIHtcImxlZnRcInxcInJpZ2h0XCJ8eyBzbTogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyBtZDogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyBsZzogXCJsZWZ0XCJ8XCJyaWdodFwiIH18eyB4bDogXCJsZWZ0XCJ8XCJyaWdodFwifSB9XG4gICAqL1xuICBtZW51QWxpZ246IF9Ecm9wZG93bk1lbnUuYWxpZ25Qcm9wVHlwZSxcblxuICAvKiogQW4gQVJJQSBhY2Nlc3NpYmxlIHJvbGUgYXBwbGllZCB0byB0aGUgTWVudSBjb21wb25lbnQuIFdoZW4gc2V0IHRvICdtZW51JywgVGhlIGRyb3Bkb3duICovXG4gIG1lbnVSb2xlOiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBXaGV0aGVyIHRvIHJlbmRlciB0aGUgZHJvcGRvd24gbWVudSBpbiB0aGUgRE9NIGJlZm9yZSB0aGUgZmlyc3QgdGltZSBpdCBpcyBzaG93biAqL1xuICByZW5kZXJNZW51T25Nb3VudDogX3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsXG5cbiAgLyoqXG4gICAqICBXaGljaCBldmVudCB3aGVuIGZpcmVkIG91dHNpZGUgdGhlIGNvbXBvbmVudCB3aWxsIGNhdXNlIGl0IHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogX3NlZSBbRHJvcGRvd25NZW51XSgjZHJvcGRvd24tbWVudS1wcm9wcykgZm9yIG1vcmUgZGV0YWlsc19cbiAgICovXG4gIHJvb3RDbG9zZUV2ZW50OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICovXG4gIGJzUHJlZml4OiBfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLFxuXG4gIC8qKiBAaWdub3JlICovXG4gIHZhcmlhbnQ6IF9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsXG5cbiAgLyoqIEBpZ25vcmUgKi9cbiAgc2l6ZTogX3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ1xufTtcbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIHRvZ2dsZUxhYmVsOiAnVG9nZ2xlIGRyb3Bkb3duJyxcbiAgdHlwZTogJ2J1dHRvbidcbn07XG4vKipcbiAqIEEgY29udmVuaWVuY2UgY29tcG9uZW50IGZvciBzaW1wbGUgb3IgZ2VuZXJhbCB1c2Ugc3BsaXQgYnV0dG9uIGRyb3Bkb3ducy4gUmVuZGVycyBhXG4gKiBgQnV0dG9uR3JvdXBgIGNvbnRhaW5pbmcgYSBgQnV0dG9uYCBhbmQgYSBgQnV0dG9uYCB0b2dnbGUgZm9yIHRoZSBgRHJvcGRvd25gLiBBbGwgYGNoaWxkcmVuYFxuICogYXJlIHBhc3NlZCBkaXJlY3RseSB0byB0aGUgZGVmYXVsdCBgRHJvcGRvd24uTWVudWAuIFRoaXMgY29tcG9uZW50IGFjY2VwdHMgYWxsIG9mIFtgRHJvcGRvd25gJ3NcbiAqIHByb3BzXSgjZHJvcGRvd24tcHJvcHMpLlxuICpcbiAqIF9BbGwgdW5rbm93biBwcm9wcyBhcmUgcGFzc2VkIHRocm91Z2ggdG8gdGhlIGBEcm9wZG93bmAgY29tcG9uZW50Ll9cbiAqIFRoZSBCdXR0b24gYHZhcmlhbnRgLCBgc2l6ZWAgYW5kIGBic1ByZWZpeGAgcHJvcHMgYXJlIHBhc3NlZCB0byB0aGUgYnV0dG9uIGFuZCB0b2dnbGUsXG4gKiBhbmQgbWVudS1yZWxhdGVkIHByb3BzIGFyZSBwYXNzZWQgdG8gdGhlIGBEcm9wZG93bi5NZW51YFxuICovXG5cbnZhciBTcGxpdEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGlkID0gX3JlZi5pZCxcbiAgICAgIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHNpemUgPSBfcmVmLnNpemUsXG4gICAgICB2YXJpYW50ID0gX3JlZi52YXJpYW50LFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIHRvZ2dsZUxhYmVsID0gX3JlZi50b2dnbGVMYWJlbCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBocmVmID0gX3JlZi5ocmVmLFxuICAgICAgdGFyZ2V0ID0gX3JlZi50YXJnZXQsXG4gICAgICBtZW51QWxpZ24gPSBfcmVmLm1lbnVBbGlnbixcbiAgICAgIG1lbnVSb2xlID0gX3JlZi5tZW51Um9sZSxcbiAgICAgIHJlbmRlck1lbnVPbk1vdW50ID0gX3JlZi5yZW5kZXJNZW51T25Nb3VudCxcbiAgICAgIHJvb3RDbG9zZUV2ZW50ID0gX3JlZi5yb290Q2xvc2VFdmVudCxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJpZFwiLCBcImJzUHJlZml4XCIsIFwic2l6ZVwiLCBcInZhcmlhbnRcIiwgXCJ0aXRsZVwiLCBcInR5cGVcIiwgXCJ0b2dnbGVMYWJlbFwiLCBcImNoaWxkcmVuXCIsIFwib25DbGlja1wiLCBcImhyZWZcIiwgXCJ0YXJnZXRcIiwgXCJtZW51QWxpZ25cIiwgXCJtZW51Um9sZVwiLCBcInJlbmRlck1lbnVPbk1vdW50XCIsIFwicm9vdENsb3NlRXZlbnRcIl0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duLmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgYXM6IF9CdXR0b25Hcm91cC5kZWZhdWx0XG4gIH0pLCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfQnV0dG9uLmRlZmF1bHQsIHtcbiAgICBzaXplOiBzaXplLFxuICAgIHZhcmlhbnQ6IHZhcmlhbnQsXG4gICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgIGJzUHJlZml4OiBic1ByZWZpeCxcbiAgICBocmVmOiBocmVmLFxuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIG9uQ2xpY2s6IG9uQ2xpY2ssXG4gICAgdHlwZTogdHlwZVxuICB9LCB0aXRsZSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Ecm9wZG93bi5kZWZhdWx0LlRvZ2dsZSwge1xuICAgIHNwbGl0OiB0cnVlLFxuICAgIGlkOiBpZCA/IGlkLnRvU3RyaW5nKCkgOiB1bmRlZmluZWQsXG4gICAgc2l6ZTogc2l6ZSxcbiAgICB2YXJpYW50OiB2YXJpYW50LFxuICAgIGRpc2FibGVkOiBwcm9wcy5kaXNhYmxlZCxcbiAgICBjaGlsZEJzUHJlZml4OiBic1ByZWZpeFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogXCJzci1vbmx5XCJcbiAgfSwgdG9nZ2xlTGFiZWwpKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Ryb3Bkb3duLmRlZmF1bHQuTWVudSwge1xuICAgIGFsaWduOiBtZW51QWxpZ24sXG4gICAgcm9sZTogbWVudVJvbGUsXG4gICAgcmVuZGVyT25Nb3VudDogcmVuZGVyTWVudU9uTW91bnQsXG4gICAgcm9vdENsb3NlRXZlbnQ6IHJvb3RDbG9zZUV2ZW50XG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcblxuU3BsaXRCdXR0b24ucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuU3BsaXRCdXR0b24uZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuU3BsaXRCdXR0b24uZGlzcGxheU5hbWUgPSAnU3BsaXRCdXR0b24nO1xudmFyIF9kZWZhdWx0ID0gU3BsaXRCdXR0b247XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Gb3JtQ2hlY2sgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Zvcm1DaGVja1wiKSk7XG5cbnZhciBTd2l0Y2ggPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Zvcm1DaGVjay5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIHJlZjogcmVmLFxuICAgIHR5cGU6IFwic3dpdGNoXCJcbiAgfSkpO1xufSk7XG5cblN3aXRjaC5kaXNwbGF5TmFtZSA9ICdTd2l0Y2gnO1xuU3dpdGNoLklucHV0ID0gX0Zvcm1DaGVjay5kZWZhdWx0LklucHV0O1xuU3dpdGNoLkxhYmVsID0gX0Zvcm1DaGVjay5kZWZhdWx0LkxhYmVsO1xudmFyIF9kZWZhdWx0ID0gU3dpdGNoO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9pbmhlcml0c0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNMb29zZVwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGFiQ29udGFpbmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UYWJDb250YWluZXJcIikpO1xuXG52YXIgX1RhYkNvbnRlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RhYkNvbnRlbnRcIikpO1xuXG52YXIgX1RhYlBhbmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RhYlBhbmVcIikpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLXJlbmRlci1yZXR1cm4sIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG52YXIgVGFiID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHNMb29zZTIuZGVmYXVsdCkoVGFiLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBUYWIoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFRhYi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlYWN0Qm9vdHN0cmFwOiBUaGUgYFRhYmAgY29tcG9uZW50IGlzIG5vdCBtZWFudCB0byBiZSByZW5kZXJlZCEgJyArIFwiSXQncyBhbiBhYnN0cmFjdCBjb21wb25lbnQgdGhhdCBpcyBvbmx5IHZhbGlkIGFzIGEgZGlyZWN0IENoaWxkIG9mIHRoZSBgVGFic2AgQ29tcG9uZW50LiBcIiArICdGb3IgY3VzdG9tIHRhYnMgY29tcG9uZW50cyB1c2UgVGFiUGFuZSBhbmQgVGFic0NvbnRhaW5lciBkaXJlY3RseScpO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBUYWI7XG59KF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudCk7XG5cblRhYi5Db250YWluZXIgPSBfVGFiQ29udGFpbmVyLmRlZmF1bHQ7XG5UYWIuQ29udGVudCA9IF9UYWJDb250ZW50LmRlZmF1bHQ7XG5UYWIuUGFuZSA9IF9UYWJQYW5lLmRlZmF1bHQ7XG52YXIgX2RlZmF1bHQgPSBUYWI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91bmNvbnRyb2xsYWJsZSA9IHJlcXVpcmUoXCJ1bmNvbnRyb2xsYWJsZVwiKTtcblxudmFyIF9UYWJDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UYWJDb250ZXh0XCIpKTtcblxudmFyIF9TZWxlY3RhYmxlQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2VsZWN0YWJsZUNvbnRleHRcIikpO1xuXG52YXIgVGFiQ29udGFpbmVyID0gZnVuY3Rpb24gVGFiQ29udGFpbmVyKHByb3BzKSB7XG4gIHZhciBfdXNlVW5jb250cm9sbGVkID0gKDAsIF91bmNvbnRyb2xsYWJsZS51c2VVbmNvbnRyb2xsZWQpKHByb3BzLCB7XG4gICAgYWN0aXZlS2V5OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgaWQgPSBfdXNlVW5jb250cm9sbGVkLmlkLFxuICAgICAgZ2VuZXJhdGVDdXN0b21DaGlsZElkID0gX3VzZVVuY29udHJvbGxlZC5nZW5lcmF0ZUNoaWxkSWQsXG4gICAgICBvblNlbGVjdCA9IF91c2VVbmNvbnRyb2xsZWQub25TZWxlY3QsXG4gICAgICBhY3RpdmVLZXkgPSBfdXNlVW5jb250cm9sbGVkLmFjdGl2ZUtleSxcbiAgICAgIHRyYW5zaXRpb24gPSBfdXNlVW5jb250cm9sbGVkLnRyYW5zaXRpb24sXG4gICAgICBtb3VudE9uRW50ZXIgPSBfdXNlVW5jb250cm9sbGVkLm1vdW50T25FbnRlcixcbiAgICAgIHVubW91bnRPbkV4aXQgPSBfdXNlVW5jb250cm9sbGVkLnVubW91bnRPbkV4aXQsXG4gICAgICBjaGlsZHJlbiA9IF91c2VVbmNvbnRyb2xsZWQuY2hpbGRyZW47XG5cbiAgdmFyIGdlbmVyYXRlQ2hpbGRJZCA9ICgwLCBfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnZW5lcmF0ZUN1c3RvbUNoaWxkSWQgfHwgZnVuY3Rpb24gKGtleSwgdHlwZSkge1xuICAgICAgcmV0dXJuIGlkID8gaWQgKyBcIi1cIiArIHR5cGUgKyBcIi1cIiArIGtleSA6IG51bGw7XG4gICAgfTtcbiAgfSwgW2lkLCBnZW5lcmF0ZUN1c3RvbUNoaWxkSWRdKTtcbiAgdmFyIHRhYkNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25TZWxlY3Q6IG9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5OiBhY3RpdmVLZXksXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uLFxuICAgICAgbW91bnRPbkVudGVyOiBtb3VudE9uRW50ZXIgfHwgZmFsc2UsXG4gICAgICB1bm1vdW50T25FeGl0OiB1bm1vdW50T25FeGl0IHx8IGZhbHNlLFxuICAgICAgZ2V0Q29udHJvbGxlZElkOiBmdW5jdGlvbiBnZXRDb250cm9sbGVkSWQoa2V5KSB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUNoaWxkSWQoa2V5LCAndGFicGFuZScpO1xuICAgICAgfSxcbiAgICAgIGdldENvbnRyb2xsZXJJZDogZnVuY3Rpb24gZ2V0Q29udHJvbGxlcklkKGtleSkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGVDaGlsZElkKGtleSwgJ3RhYicpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtvblNlbGVjdCwgYWN0aXZlS2V5LCB0cmFuc2l0aW9uLCBtb3VudE9uRW50ZXIsIHVubW91bnRPbkV4aXQsIGdlbmVyYXRlQ2hpbGRJZF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RhYkNvbnRleHQuZGVmYXVsdC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiB0YWJDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9TZWxlY3RhYmxlQ29udGV4dC5kZWZhdWx0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG9uU2VsZWN0IHx8IG51bGxcbiAgfSwgY2hpbGRyZW4pKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IFRhYkNvbnRhaW5lcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBUYWJDb250ZW50ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYnNQcmVmaXggPSBfcmVmLmJzUHJlZml4LFxuICAgICAgX3JlZiRhcyA9IF9yZWYuYXMsXG4gICAgICBDb21wb25lbnQgPSBfcmVmJGFzID09PSB2b2lkIDAgPyAnZGl2JyA6IF9yZWYkYXMsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImFzXCIsIFwiY2xhc3NOYW1lXCJdKTtcbiAgdmFyIGRlY29yYXRlZEJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICd0YWItY29udGVudCcpO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNsYXNzTmFtZSwgZGVjb3JhdGVkQnNQcmVmaXgpXG4gIH0pKTtcbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBUYWJDb250ZW50O1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFRhYkNvbnRleHQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtcblxudmFyIF9kZWZhdWx0ID0gVGFiQ29udGV4dDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgX1RhYkNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RhYkNvbnRleHRcIikpO1xuXG52YXIgX1NlbGVjdGFibGVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vU2VsZWN0YWJsZUNvbnRleHRcIikpO1xuXG52YXIgX0ZhZGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZhZGVcIikpO1xuXG5mdW5jdGlvbiB1c2VUYWJDb250ZXh0KHByb3BzKSB7XG4gIHZhciBjb250ZXh0ID0gKDAsIF9yZWFjdC51c2VDb250ZXh0KShfVGFiQ29udGV4dC5kZWZhdWx0KTtcbiAgaWYgKCFjb250ZXh0KSByZXR1cm4gcHJvcHM7XG4gIHZhciBhY3RpdmVLZXkgPSBjb250ZXh0LmFjdGl2ZUtleSxcbiAgICAgIGdldENvbnRyb2xsZWRJZCA9IGNvbnRleHQuZ2V0Q29udHJvbGxlZElkLFxuICAgICAgZ2V0Q29udHJvbGxlcklkID0gY29udGV4dC5nZXRDb250cm9sbGVySWQsXG4gICAgICByZXN0ID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShjb250ZXh0LCBbXCJhY3RpdmVLZXlcIiwgXCJnZXRDb250cm9sbGVkSWRcIiwgXCJnZXRDb250cm9sbGVySWRcIl0pO1xuICB2YXIgc2hvdWxkVHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24gIT09IGZhbHNlICYmIHJlc3QudHJhbnNpdGlvbiAhPT0gZmFsc2U7XG4gIHZhciBrZXkgPSAoMCwgX1NlbGVjdGFibGVDb250ZXh0Lm1ha2VFdmVudEtleSkocHJvcHMuZXZlbnRLZXkpO1xuICByZXR1cm4gKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICBhY3RpdmU6IHByb3BzLmFjdGl2ZSA9PSBudWxsICYmIGtleSAhPSBudWxsID8gKDAsIF9TZWxlY3RhYmxlQ29udGV4dC5tYWtlRXZlbnRLZXkpKGFjdGl2ZUtleSkgPT09IGtleSA6IHByb3BzLmFjdGl2ZSxcbiAgICBpZDogZ2V0Q29udHJvbGxlZElkKHByb3BzLmV2ZW50S2V5KSxcbiAgICAnYXJpYS1sYWJlbGxlZGJ5JzogZ2V0Q29udHJvbGxlcklkKHByb3BzLmV2ZW50S2V5KSxcbiAgICB0cmFuc2l0aW9uOiBzaG91bGRUcmFuc2l0aW9uICYmIChwcm9wcy50cmFuc2l0aW9uIHx8IHJlc3QudHJhbnNpdGlvbiB8fCBfRmFkZS5kZWZhdWx0KSxcbiAgICBtb3VudE9uRW50ZXI6IHByb3BzLm1vdW50T25FbnRlciAhPSBudWxsID8gcHJvcHMubW91bnRPbkVudGVyIDogcmVzdC5tb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdDogcHJvcHMudW5tb3VudE9uRXhpdCAhPSBudWxsID8gcHJvcHMudW5tb3VudE9uRXhpdCA6IHJlc3QudW5tb3VudE9uRXhpdFxuICB9KTtcbn1cblxudmFyIFRhYlBhbmUgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVRhYkNvbnRleHQgPSB1c2VUYWJDb250ZXh0KHByb3BzKSxcbiAgICAgIGJzUHJlZml4ID0gX3VzZVRhYkNvbnRleHQuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfdXNlVGFiQ29udGV4dC5jbGFzc05hbWUsXG4gICAgICBhY3RpdmUgPSBfdXNlVGFiQ29udGV4dC5hY3RpdmUsXG4gICAgICBvbkVudGVyID0gX3VzZVRhYkNvbnRleHQub25FbnRlcixcbiAgICAgIG9uRW50ZXJpbmcgPSBfdXNlVGFiQ29udGV4dC5vbkVudGVyaW5nLFxuICAgICAgb25FbnRlcmVkID0gX3VzZVRhYkNvbnRleHQub25FbnRlcmVkLFxuICAgICAgb25FeGl0ID0gX3VzZVRhYkNvbnRleHQub25FeGl0LFxuICAgICAgb25FeGl0aW5nID0gX3VzZVRhYkNvbnRleHQub25FeGl0aW5nLFxuICAgICAgb25FeGl0ZWQgPSBfdXNlVGFiQ29udGV4dC5vbkV4aXRlZCxcbiAgICAgIG1vdW50T25FbnRlciA9IF91c2VUYWJDb250ZXh0Lm1vdW50T25FbnRlcixcbiAgICAgIHVubW91bnRPbkV4aXQgPSBfdXNlVGFiQ29udGV4dC51bm1vdW50T25FeGl0LFxuICAgICAgVHJhbnNpdGlvbiA9IF91c2VUYWJDb250ZXh0LnRyYW5zaXRpb24sXG4gICAgICBfdXNlVGFiQ29udGV4dCRhcyA9IF91c2VUYWJDb250ZXh0LmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3VzZVRhYkNvbnRleHQkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3VzZVRhYkNvbnRleHQkYXMsXG4gICAgICBfID0gX3VzZVRhYkNvbnRleHQuZXZlbnRLZXksXG4gICAgICByZXN0ID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfdXNlVGFiQ29udGV4dCwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJhY3RpdmVcIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGluZ1wiLCBcIm9uRXhpdGVkXCIsIFwibW91bnRPbkVudGVyXCIsIFwidW5tb3VudE9uRXhpdFwiLCBcInRyYW5zaXRpb25cIiwgXCJhc1wiLCBcImV2ZW50S2V5XCJdKTtcblxuICB2YXIgcHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICd0YWItcGFuZScpO1xuICBpZiAoIWFjdGl2ZSAmJiAhVHJhbnNpdGlvbiAmJiB1bm1vdW50T25FeGl0KSByZXR1cm4gbnVsbDtcblxuICB2YXIgcGFuZSA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcmVzdCwge1xuICAgIHJlZjogcmVmLFxuICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6ICFhY3RpdmUsXG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCBwcmVmaXgsIHtcbiAgICAgIGFjdGl2ZTogYWN0aXZlXG4gICAgfSlcbiAgfSkpO1xuXG4gIGlmIChUcmFuc2l0aW9uKSBwYW5lID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwge1xuICAgIGluOiBhY3RpdmUsXG4gICAgb25FbnRlcjogb25FbnRlcixcbiAgICBvbkVudGVyaW5nOiBvbkVudGVyaW5nLFxuICAgIG9uRW50ZXJlZDogb25FbnRlcmVkLFxuICAgIG9uRXhpdDogb25FeGl0LFxuICAgIG9uRXhpdGluZzogb25FeGl0aW5nLFxuICAgIG9uRXhpdGVkOiBvbkV4aXRlZCxcbiAgICBtb3VudE9uRW50ZXI6IG1vdW50T25FbnRlcixcbiAgICB1bm1vdW50T25FeGl0OiB1bm1vdW50T25FeGl0XG4gIH0sIHBhbmUpOyAvLyBXZSBwcm92aWRlIGFuIGVtcHR5IHRoZSBUYWJDb250ZXh0IHNvIGA8TmF2PmBzIGluIGA8VGFiUGFuZT5gcyBkb24ndFxuICAvLyBjb25mbGljdCB3aXRoIHRoZSB0b3AgbGV2ZWwgb25lLlxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGFiQ29udGV4dC5kZWZhdWx0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG51bGxcbiAgfSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1NlbGVjdGFibGVDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbnVsbFxuICB9LCBwYW5lKSk7XG59KTtcblxuVGFiUGFuZS5kaXNwbGF5TmFtZSA9ICdUYWJQYW5lJztcbnZhciBfZGVmYXVsdCA9IFRhYlBhbmU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX1RoZW1lUHJvdmlkZXIgPSByZXF1aXJlKFwiLi9UaGVtZVByb3ZpZGVyXCIpO1xuXG52YXIgVGFibGUgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHN0cmlwZWQgPSBfcmVmLnN0cmlwZWQsXG4gICAgICBib3JkZXJlZCA9IF9yZWYuYm9yZGVyZWQsXG4gICAgICBib3JkZXJsZXNzID0gX3JlZi5ib3JkZXJsZXNzLFxuICAgICAgaG92ZXIgPSBfcmVmLmhvdmVyLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIHZhcmlhbnQgPSBfcmVmLnZhcmlhbnQsXG4gICAgICByZXNwb25zaXZlID0gX3JlZi5yZXNwb25zaXZlLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiY2xhc3NOYW1lXCIsIFwic3RyaXBlZFwiLCBcImJvcmRlcmVkXCIsIFwiYm9yZGVybGVzc1wiLCBcImhvdmVyXCIsIFwic2l6ZVwiLCBcInZhcmlhbnRcIiwgXCJyZXNwb25zaXZlXCJdKTtcbiAgdmFyIGRlY29yYXRlZEJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICd0YWJsZScpO1xuICB2YXIgY2xhc3NlcyA9ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGRlY29yYXRlZEJzUHJlZml4LCB2YXJpYW50ICYmIGRlY29yYXRlZEJzUHJlZml4ICsgXCItXCIgKyB2YXJpYW50LCBzaXplICYmIGRlY29yYXRlZEJzUHJlZml4ICsgXCItXCIgKyBzaXplLCBzdHJpcGVkICYmIGRlY29yYXRlZEJzUHJlZml4ICsgXCItc3RyaXBlZFwiLCBib3JkZXJlZCAmJiBkZWNvcmF0ZWRCc1ByZWZpeCArIFwiLWJvcmRlcmVkXCIsIGJvcmRlcmxlc3MgJiYgZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1ib3JkZXJsZXNzXCIsIGhvdmVyICYmIGRlY29yYXRlZEJzUHJlZml4ICsgXCItaG92ZXJcIik7XG5cbiAgdmFyIHRhYmxlID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogY2xhc3NlcyxcbiAgICByZWY6IHJlZlxuICB9KSk7XG5cbiAgaWYgKHJlc3BvbnNpdmUpIHtcbiAgICB2YXIgcmVzcG9uc2l2ZUNsYXNzID0gZGVjb3JhdGVkQnNQcmVmaXggKyBcIi1yZXNwb25zaXZlXCI7XG5cbiAgICBpZiAodHlwZW9mIHJlc3BvbnNpdmUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXNwb25zaXZlQ2xhc3MgPSByZXNwb25zaXZlQ2xhc3MgKyBcIi1cIiArIHJlc3BvbnNpdmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogcmVzcG9uc2l2ZUNsYXNzXG4gICAgfSwgdGFibGUpO1xuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufSk7XG5cbnZhciBfZGVmYXVsdCA9IFRhYmxlO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2lzUmVxdWlyZWRGb3JBMTF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlcy1leHRyYS9saWIvaXNSZXF1aXJlZEZvckExMXlcIikpO1xuXG52YXIgX3VuY29udHJvbGxhYmxlID0gcmVxdWlyZShcInVuY29udHJvbGxhYmxlXCIpO1xuXG52YXIgX05hdiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2XCIpKTtcblxudmFyIF9OYXZMaW5rID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZMaW5rXCIpKTtcblxudmFyIF9OYXZJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZJdGVtXCIpKTtcblxudmFyIF9UYWJDb250YWluZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RhYkNvbnRhaW5lclwiKSk7XG5cbnZhciBfVGFiQ29udGVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFiQ29udGVudFwiKSk7XG5cbnZhciBfVGFiUGFuZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFiUGFuZVwiKSk7XG5cbnZhciBfRWxlbWVudENoaWxkcmVuID0gcmVxdWlyZShcIi4vRWxlbWVudENoaWxkcmVuXCIpO1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAndGFicycsXG4gIG1vdW50T25FbnRlcjogZmFsc2UsXG4gIHVubW91bnRPbkV4aXQ6IGZhbHNlXG59O1xuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSB7XG4gIHZhciBkZWZhdWx0QWN0aXZlS2V5O1xuICAoMCwgX0VsZW1lbnRDaGlsZHJlbi5mb3JFYWNoKShjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGRlZmF1bHRBY3RpdmVLZXkgPT0gbnVsbCkge1xuICAgICAgZGVmYXVsdEFjdGl2ZUtleSA9IGNoaWxkLnByb3BzLmV2ZW50S2V5O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkZWZhdWx0QWN0aXZlS2V5O1xufVxuXG5mdW5jdGlvbiByZW5kZXJUYWIoY2hpbGQpIHtcbiAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzLFxuICAgICAgdGl0bGUgPSBfY2hpbGQkcHJvcHMudGl0bGUsXG4gICAgICBldmVudEtleSA9IF9jaGlsZCRwcm9wcy5ldmVudEtleSxcbiAgICAgIGRpc2FibGVkID0gX2NoaWxkJHByb3BzLmRpc2FibGVkLFxuICAgICAgdGFiQ2xhc3NOYW1lID0gX2NoaWxkJHByb3BzLnRhYkNsYXNzTmFtZSxcbiAgICAgIGlkID0gX2NoaWxkJHByb3BzLmlkO1xuXG4gIGlmICh0aXRsZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX05hdkl0ZW0uZGVmYXVsdCwge1xuICAgIGFzOiBfTmF2TGluay5kZWZhdWx0LFxuICAgIGV2ZW50S2V5OiBldmVudEtleSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgaWQ6IGlkLFxuICAgIGNsYXNzTmFtZTogdGFiQ2xhc3NOYW1lXG4gIH0sIHRpdGxlKTtcbn1cblxudmFyIFRhYnMgPSBmdW5jdGlvbiBUYWJzKHByb3BzKSB7XG4gIHZhciBfdXNlVW5jb250cm9sbGVkID0gKDAsIF91bmNvbnRyb2xsYWJsZS51c2VVbmNvbnRyb2xsZWQpKHByb3BzLCB7XG4gICAgYWN0aXZlS2V5OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgaWQgPSBfdXNlVW5jb250cm9sbGVkLmlkLFxuICAgICAgb25TZWxlY3QgPSBfdXNlVW5jb250cm9sbGVkLm9uU2VsZWN0LFxuICAgICAgdHJhbnNpdGlvbiA9IF91c2VVbmNvbnRyb2xsZWQudHJhbnNpdGlvbixcbiAgICAgIG1vdW50T25FbnRlciA9IF91c2VVbmNvbnRyb2xsZWQubW91bnRPbkVudGVyLFxuICAgICAgdW5tb3VudE9uRXhpdCA9IF91c2VVbmNvbnRyb2xsZWQudW5tb3VudE9uRXhpdCxcbiAgICAgIGNoaWxkcmVuID0gX3VzZVVuY29udHJvbGxlZC5jaGlsZHJlbixcbiAgICAgIF91c2VVbmNvbnRyb2xsZWQkYWN0aSA9IF91c2VVbmNvbnRyb2xsZWQuYWN0aXZlS2V5LFxuICAgICAgYWN0aXZlS2V5ID0gX3VzZVVuY29udHJvbGxlZCRhY3RpID09PSB2b2lkIDAgPyBnZXREZWZhdWx0QWN0aXZlS2V5KGNoaWxkcmVuKSA6IF91c2VVbmNvbnRyb2xsZWQkYWN0aSxcbiAgICAgIGNvbnRyb2xsZWRQcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3VzZVVuY29udHJvbGxlZCwgW1wiaWRcIiwgXCJvblNlbGVjdFwiLCBcInRyYW5zaXRpb25cIiwgXCJtb3VudE9uRW50ZXJcIiwgXCJ1bm1vdW50T25FeGl0XCIsIFwiY2hpbGRyZW5cIiwgXCJhY3RpdmVLZXlcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGFiQ29udGFpbmVyLmRlZmF1bHQsIHtcbiAgICBpZDogaWQsXG4gICAgYWN0aXZlS2V5OiBhY3RpdmVLZXksXG4gICAgb25TZWxlY3Q6IG9uU2VsZWN0LFxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb24sXG4gICAgbW91bnRPbkVudGVyOiBtb3VudE9uRW50ZXIsXG4gICAgdW5tb3VudE9uRXhpdDogdW5tb3VudE9uRXhpdFxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfTmF2LmRlZmF1bHQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIGNvbnRyb2xsZWRQcm9wcywge1xuICAgIHJvbGU6IFwidGFibGlzdFwiLFxuICAgIGFzOiBcIm5hdlwiXG4gIH0pLCAoMCwgX0VsZW1lbnRDaGlsZHJlbi5tYXApKGNoaWxkcmVuLCByZW5kZXJUYWIpKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX1RhYkNvbnRlbnQuZGVmYXVsdCwgbnVsbCwgKDAsIF9FbGVtZW50Q2hpbGRyZW4ubWFwKShjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgdmFyIGNoaWxkUHJvcHMgPSAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBjaGlsZC5wcm9wcyk7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGl0bGU7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMuZGlzYWJsZWQ7XG4gICAgZGVsZXRlIGNoaWxkUHJvcHMudGFiQ2xhc3NOYW1lO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVGFiUGFuZS5kZWZhdWx0LCBjaGlsZFByb3BzKTtcbiAgfSkpKTtcbn07XG5cblRhYnMuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuVGFicy5kaXNwbGF5TmFtZSA9ICdUYWJzJztcbnZhciBfZGVmYXVsdCA9IFRhYnM7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy51c2VCb290c3RyYXBQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXg7XG5leHBvcnRzLmNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudCA9IGNyZWF0ZUJvb3RzdHJhcENvbXBvbmVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuVGhlbWVDb25zdW1lciA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgVGhlbWVDb250ZXh0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO1xuXG52YXIgQ29uc3VtZXIgPSBUaGVtZUNvbnRleHQuQ29uc3VtZXIsXG4gICAgUHJvdmlkZXIgPSBUaGVtZUNvbnRleHQuUHJvdmlkZXI7XG5leHBvcnRzLlRoZW1lQ29uc3VtZXIgPSBDb25zdW1lcjtcblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcihfcmVmKSB7XG4gIHZhciBwcmVmaXhlcyA9IF9yZWYucHJlZml4ZXMsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW47XG4gIHZhciBjb3BpZWRQcmVmaXhlcyA9ICgwLCBfcmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBwcmVmaXhlcyk7XG4gIH0sIFtwcmVmaXhlc10pO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29waWVkUHJlZml4ZXNcbiAgfSwgY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiB1c2VCb290c3RyYXBQcmVmaXgocHJlZml4LCBkZWZhdWx0UHJlZml4KSB7XG4gIHZhciBwcmVmaXhlcyA9ICgwLCBfcmVhY3QudXNlQ29udGV4dCkoVGhlbWVDb250ZXh0KTtcbiAgcmV0dXJuIHByZWZpeCB8fCBwcmVmaXhlc1tkZWZhdWx0UHJlZml4XSB8fCBkZWZhdWx0UHJlZml4O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb290c3RyYXBDb21wb25lbnQoQ29tcG9uZW50LCBvcHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0cyA9PT0gJ3N0cmluZycpIG9wdHMgPSB7XG4gICAgcHJlZml4OiBvcHRzXG4gIH07XG4gIHZhciBpc0NsYXNzeSA9IENvbXBvbmVudC5wcm90b3R5cGUgJiYgQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50OyAvLyBJZiBpdCdzIGEgZnVuY3Rpb25hbCBjb21wb25lbnQgbWFrZSBzdXJlIHdlIGRvbid0IGJyZWFrIGl0IHdpdGggYSByZWZcblxuICB2YXIgX29wdHMgPSBvcHRzLFxuICAgICAgcHJlZml4ID0gX29wdHMucHJlZml4LFxuICAgICAgX29wdHMkZm9yd2FyZFJlZkFzID0gX29wdHMuZm9yd2FyZFJlZkFzLFxuICAgICAgZm9yd2FyZFJlZkFzID0gX29wdHMkZm9yd2FyZFJlZkFzID09PSB2b2lkIDAgPyBpc0NsYXNzeSA/ICdyZWYnIDogJ2lubmVyUmVmJyA6IF9vcHRzJGZvcndhcmRSZWZBcztcblxuICB2YXIgV3JhcHBlZCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmMiwgcmVmKSB7XG4gICAgdmFyIHByb3BzID0gKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgX3JlZjIpO1xuICAgIHByb3BzW2ZvcndhcmRSZWZBc10gPSByZWY7XG4gICAgdmFyIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KHByb3BzLmJzUHJlZml4LCBwcmVmaXgpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHByb3BzLCB7XG4gICAgICBic1ByZWZpeDogYnNQcmVmaXhcbiAgICB9KSk7XG4gIH0pO1xuXG4gIFdyYXBwZWQuZGlzcGxheU5hbWUgPSBcIkJvb3RzdHJhcChcIiArIChDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUpICsgXCIpXCI7XG4gIHJldHVybiBXcmFwcGVkO1xufVxuXG52YXIgX2RlZmF1bHQgPSBUaGVtZVByb3ZpZGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF91c2VUaW1lb3V0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlVGltZW91dFwiKSk7XG5cbnZhciBfRmFkZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRmFkZVwiKSk7XG5cbnZhciBfVG9hc3RIZWFkZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvYXN0SGVhZGVyXCIpKTtcblxudmFyIF9Ub2FzdEJvZHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvYXN0Qm9keVwiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBfVG9hc3RDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ub2FzdENvbnRleHRcIikpO1xuXG52YXIgVG9hc3QgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkdHJhbnNpdGlvbiA9IF9yZWYudHJhbnNpdGlvbixcbiAgICAgIFRyYW5zaXRpb24gPSBfcmVmJHRyYW5zaXRpb24gPT09IHZvaWQgMCA/IF9GYWRlLmRlZmF1bHQgOiBfcmVmJHRyYW5zaXRpb24sXG4gICAgICBfcmVmJHNob3cgPSBfcmVmLnNob3csXG4gICAgICBzaG93ID0gX3JlZiRzaG93ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRzaG93LFxuICAgICAgX3JlZiRhbmltYXRpb24gPSBfcmVmLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvbiA9IF9yZWYkYW5pbWF0aW9uID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRhbmltYXRpb24sXG4gICAgICBfcmVmJGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMzAwMCA6IF9yZWYkZGVsYXksXG4gICAgICBfcmVmJGF1dG9oaWRlID0gX3JlZi5hdXRvaGlkZSxcbiAgICAgIGF1dG9oaWRlID0gX3JlZiRhdXRvaGlkZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF1dG9oaWRlLFxuICAgICAgb25DbG9zZSA9IF9yZWYub25DbG9zZSxcbiAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMi5kZWZhdWx0KShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwidHJhbnNpdGlvblwiLCBcInNob3dcIiwgXCJhbmltYXRpb25cIiwgXCJkZWxheVwiLCBcImF1dG9oaWRlXCIsIFwib25DbG9zZVwiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICd0b2FzdCcpOyAvLyBXZSB1c2UgcmVmcyBmb3IgdGhlc2UsIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCB0byByZXN0YXJ0IHRoZSBhdXRvaGlkZVxuICAvLyB0aW1lciBpbiBjYXNlIHRoZXNlIHZhbHVlcyBjaGFuZ2UuXG5cbiAgdmFyIGRlbGF5UmVmID0gKDAsIF9yZWFjdC51c2VSZWYpKGRlbGF5KTtcbiAgdmFyIG9uQ2xvc2VSZWYgPSAoMCwgX3JlYWN0LnVzZVJlZikob25DbG9zZSk7XG4gICgwLCBfcmVhY3QudXNlRWZmZWN0KShmdW5jdGlvbiAoKSB7XG4gICAgZGVsYXlSZWYuY3VycmVudCA9IGRlbGF5O1xuICAgIG9uQ2xvc2VSZWYuY3VycmVudCA9IG9uQ2xvc2U7XG4gIH0sIFtkZWxheSwgb25DbG9zZV0pO1xuICB2YXIgYXV0b2hpZGVUaW1lb3V0ID0gKDAsIF91c2VUaW1lb3V0LmRlZmF1bHQpKCk7XG4gIHZhciBhdXRvaGlkZVRvYXN0ID0gISEoYXV0b2hpZGUgJiYgc2hvdyk7XG4gIHZhciBhdXRvaGlkZUZ1bmMgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGF1dG9oaWRlVG9hc3QpIHtcbiAgICAgIG9uQ2xvc2VSZWYuY3VycmVudCA9PSBudWxsID8gdm9pZCAwIDogb25DbG9zZVJlZi5jdXJyZW50KCk7XG4gICAgfVxuICB9LCBbYXV0b2hpZGVUb2FzdF0pO1xuICAoMCwgX3JlYWN0LnVzZUVmZmVjdCkoZnVuY3Rpb24gKCkge1xuICAgIC8vIE9ubHkgcmVzZXQgdGltZXIgaWYgc2hvdyBvciBhdXRvaGlkZSBjaGFuZ2VzLlxuICAgIGF1dG9oaWRlVGltZW91dC5zZXQoYXV0b2hpZGVGdW5jLCBkZWxheVJlZi5jdXJyZW50KTtcbiAgfSwgW2F1dG9oaWRlVGltZW91dCwgYXV0b2hpZGVGdW5jXSk7XG4gIHZhciB0b2FzdENvbnRleHQgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb25DbG9zZTogb25DbG9zZVxuICAgIH07XG4gIH0sIFtvbkNsb3NlXSk7XG4gIHZhciBoYXNBbmltYXRpb24gPSAhIShUcmFuc2l0aW9uICYmIGFuaW1hdGlvbik7XG5cbiAgdmFyIHRvYXN0ID0gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShic1ByZWZpeCwgY2xhc3NOYW1lLCAhaGFzQW5pbWF0aW9uICYmIChzaG93ID8gJ3Nob3cnIDogJ2hpZGUnKSksXG4gICAgcm9sZTogXCJhbGVydFwiLFxuICAgIFwiYXJpYS1saXZlXCI6IFwiYXNzZXJ0aXZlXCIsXG4gICAgXCJhcmlhLWF0b21pY1wiOiBcInRydWVcIlxuICB9KSwgY2hpbGRyZW4pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVG9hc3RDb250ZXh0LmRlZmF1bHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdG9hc3RDb250ZXh0XG4gIH0sIGhhc0FuaW1hdGlvbiAmJiBUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwge1xuICAgIGluOiBzaG93LFxuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSwgdG9hc3QpIDogdG9hc3QpO1xufSk7XG5cblRvYXN0LmRpc3BsYXlOYW1lID0gJ1RvYXN0JztcblxudmFyIF9kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbihUb2FzdCwge1xuICBCb2R5OiBfVG9hc3RCb2R5LmRlZmF1bHQsXG4gIEhlYWRlcjogX1RvYXN0SGVhZGVyLmRlZmF1bHRcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2NyZWF0ZVdpdGhCc1ByZWZpeCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY3JlYXRlV2l0aEJzUHJlZml4XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVXaXRoQnNQcmVmaXguZGVmYXVsdCkoJ3RvYXN0LWJvZHknKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFRvYXN0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1mdW5jdGlvblxuICBvbkNsb3NlOiBmdW5jdGlvbiBvbkNsb3NlKCkge31cbn0pO1xuXG52YXIgX2RlZmF1bHQgPSBUb2FzdENvbnRleHQ7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF91c2VFdmVudENhbGxiYWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlRXZlbnRDYWxsYmFja1wiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbnZhciBfQ2xvc2VCdXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Nsb3NlQnV0dG9uXCIpKTtcblxudmFyIF9Ub2FzdENvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvYXN0Q29udGV4dFwiKSk7XG5cbnZhciBkZWZhdWx0UHJvcHMgPSB7XG4gIGNsb3NlTGFiZWw6ICdDbG9zZScsXG4gIGNsb3NlQnV0dG9uOiB0cnVlXG59O1xuXG52YXIgVG9hc3RIZWFkZXIgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbG9zZUxhYmVsID0gX3JlZi5jbG9zZUxhYmVsLFxuICAgICAgY2xvc2VCdXR0b24gPSBfcmVmLmNsb3NlQnV0dG9uLFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbG9zZUxhYmVsXCIsIFwiY2xvc2VCdXR0b25cIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiXSk7XG4gIGJzUHJlZml4ID0gKDAsIF9UaGVtZVByb3ZpZGVyLnVzZUJvb3RzdHJhcFByZWZpeCkoYnNQcmVmaXgsICd0b2FzdC1oZWFkZXInKTtcbiAgdmFyIGNvbnRleHQgPSAoMCwgX3JlYWN0LnVzZUNvbnRleHQpKF9Ub2FzdENvbnRleHQuZGVmYXVsdCk7XG4gIHZhciBoYW5kbGVDbGljayA9ICgwLCBfdXNlRXZlbnRDYWxsYmFjay5kZWZhdWx0KShmdW5jdGlvbiAoZSkge1xuICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQub25DbG9zZSkge1xuICAgICAgY29udGV4dC5vbkNsb3NlKGUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICByZWY6IHJlZlxuICB9LCBwcm9wcywge1xuICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGJzUHJlZml4LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiwgY2xvc2VCdXR0b24gJiYgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0Nsb3NlQnV0dG9uLmRlZmF1bHQsIHtcbiAgICBsYWJlbDogY2xvc2VMYWJlbCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBjbGFzc05hbWU6IFwibWwtMiBtYi0xXCIsXG4gICAgXCJkYXRhLWRpc21pc3NcIjogXCJ0b2FzdFwiXG4gIH0pKTtcbn0pO1xuXG5Ub2FzdEhlYWRlci5kaXNwbGF5TmFtZSA9ICdUb2FzdEhlYWRlcic7XG5Ub2FzdEhlYWRlci5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG52YXIgX2RlZmF1bHQgPSBUb2FzdEhlYWRlcjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX0J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnV0dG9uXCIpKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxudmFyIFRvZ2dsZUJ1dHRvbiA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoZWNrZWQgPSBfcmVmLmNoZWNrZWQsXG4gICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlLFxuICAgICAgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBfcmVmLmRpc2FibGVkLFxuICAgICAgaW5wdXRSZWYgPSBfcmVmLmlucHV0UmVmLFxuICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYsIFtcImNoaWxkcmVuXCIsIFwibmFtZVwiLCBcImNsYXNzTmFtZVwiLCBcImNoZWNrZWRcIiwgXCJ0eXBlXCIsIFwib25DaGFuZ2VcIiwgXCJ2YWx1ZVwiLCBcImRpc2FibGVkXCIsIFwiaW5wdXRSZWZcIl0pO1xuXG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgX3JlYWN0LnVzZVN0YXRlKShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF91c2VTdGF0ZVsxXTtcblxuICB2YXIgaGFuZGxlRm9jdXMgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09PSAnSU5QVVQnKSBzZXRGb2N1c2VkKHRydWUpO1xuICB9LCBbXSk7XG4gIHZhciBoYW5kbGVCbHVyID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJykgc2V0Rm9jdXNlZChmYWxzZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9CdXR0b24uZGVmYXVsdCwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGZvY3VzZWQgJiYgJ2ZvY3VzJywgZGlzYWJsZWQgJiYgJ2Rpc2FibGVkJyksXG4gICAgdHlwZTogdW5kZWZpbmVkLFxuICAgIGFjdGl2ZTogISFjaGVja2VkLFxuICAgIGFzOiBcImxhYmVsXCJcbiAgfSksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgdHlwZTogdHlwZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgcmVmOiBpbnB1dFJlZixcbiAgICBhdXRvQ29tcGxldGU6IFwib2ZmXCIsXG4gICAgY2hlY2tlZDogISFjaGVja2VkLFxuICAgIGRpc2FibGVkOiAhIWRpc2FibGVkLFxuICAgIG9uRm9jdXM6IGhhbmRsZUZvY3VzLFxuICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICBvbkNoYW5nZTogb25DaGFuZ2UgfHwgbm9vcFxuICB9KSwgY2hpbGRyZW4pO1xufSk7XG5cblRvZ2dsZUJ1dHRvbi5kaXNwbGF5TmFtZSA9ICdUb2dnbGVCdXR0b24nO1xudmFyIF9kZWZhdWx0ID0gVG9nZ2xlQnV0dG9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2ludmFyaWFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5cbnZhciBfdW5jb250cm9sbGFibGUgPSByZXF1aXJlKFwidW5jb250cm9sbGFibGVcIik7XG5cbnZhciBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jcmVhdGVDaGFpbmVkRnVuY3Rpb25cIikpO1xuXG52YXIgX0VsZW1lbnRDaGlsZHJlbiA9IHJlcXVpcmUoXCIuL0VsZW1lbnRDaGlsZHJlblwiKTtcblxudmFyIF9CdXR0b25Hcm91cCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnV0dG9uR3JvdXBcIikpO1xuXG52YXIgX1RvZ2dsZUJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG9nZ2xlQnV0dG9uXCIpKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3JhZGlvJyxcbiAgdmVydGljYWw6IGZhbHNlXG59O1xuXG52YXIgVG9nZ2xlQnV0dG9uR3JvdXAgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX3VzZVVuY29udHJvbGxlZCA9ICgwLCBfdW5jb250cm9sbGFibGUudXNlVW5jb250cm9sbGVkKShwcm9wcywge1xuICAgIHZhbHVlOiAnb25DaGFuZ2UnXG4gIH0pLFxuICAgICAgY2hpbGRyZW4gPSBfdXNlVW5jb250cm9sbGVkLmNoaWxkcmVuLFxuICAgICAgdHlwZSA9IF91c2VVbmNvbnRyb2xsZWQudHlwZSxcbiAgICAgIG5hbWUgPSBfdXNlVW5jb250cm9sbGVkLm5hbWUsXG4gICAgICB2YWx1ZSA9IF91c2VVbmNvbnRyb2xsZWQudmFsdWUsXG4gICAgICBvbkNoYW5nZSA9IF91c2VVbmNvbnRyb2xsZWQub25DaGFuZ2UsXG4gICAgICBjb250cm9sbGVkUHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF91c2VVbmNvbnRyb2xsZWQsIFtcImNoaWxkcmVuXCIsIFwidHlwZVwiLCBcIm5hbWVcIiwgXCJ2YWx1ZVwiLCBcIm9uQ2hhbmdlXCJdKTtcblxuICB2YXIgZ2V0VmFsdWVzID0gZnVuY3Rpb24gZ2V0VmFsdWVzKCkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gW10gOiBbXS5jb25jYXQodmFsdWUpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVUb2dnbGUgPSBmdW5jdGlvbiBoYW5kbGVUb2dnbGUoaW5wdXRWYWwsIGV2ZW50KSB7XG4gICAgaWYgKCFvbkNoYW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBnZXRWYWx1ZXMoKTtcbiAgICB2YXIgaXNBY3RpdmUgPSB2YWx1ZXMuaW5kZXhPZihpbnB1dFZhbCkgIT09IC0xO1xuXG4gICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIGlmICghaXNBY3RpdmUgJiYgb25DaGFuZ2UpIG9uQ2hhbmdlKGlucHV0VmFsLCBldmVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICBvbkNoYW5nZSh2YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHJldHVybiBuICE9PSBpbnB1dFZhbDtcbiAgICAgIH0pLCBldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKFtdLmNvbmNhdCh2YWx1ZXMsIFtpbnB1dFZhbF0pLCBldmVudCk7XG4gICAgfVxuICB9O1xuXG4gICEodHlwZSAhPT0gJ3JhZGlvJyB8fCAhIW5hbWUpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF9pbnZhcmlhbnQuZGVmYXVsdCkoZmFsc2UsICdBIGBuYW1lYCBpcyByZXF1aXJlZCB0byBncm91cCB0aGUgdG9nZ2xlIGJ1dHRvbnMgd2hlbiB0aGUgYHR5cGVgICcgKyAnaXMgc2V0IHRvIFwicmFkaW9cIicpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9CdXR0b25Hcm91cC5kZWZhdWx0LCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHt9LCBjb250cm9sbGVkUHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICB0b2dnbGU6IHRydWVcbiAgfSksICgwLCBfRWxlbWVudENoaWxkcmVuLm1hcCkoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHZhciB2YWx1ZXMgPSBnZXRWYWx1ZXMoKTtcbiAgICB2YXIgX2NoaWxkJHByb3BzID0gY2hpbGQucHJvcHMsXG4gICAgICAgIGNoaWxkVmFsID0gX2NoaWxkJHByb3BzLnZhbHVlLFxuICAgICAgICBjaGlsZE9uQ2hhbmdlID0gX2NoaWxkJHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiBoYW5kbGVyKGUpIHtcbiAgICAgIHJldHVybiBoYW5kbGVUb2dnbGUoY2hpbGRWYWwsIGUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgdHlwZTogdHlwZSxcbiAgICAgIG5hbWU6IGNoaWxkLm5hbWUgfHwgbmFtZSxcbiAgICAgIGNoZWNrZWQ6IHZhbHVlcy5pbmRleE9mKGNoaWxkVmFsKSAhPT0gLTEsXG4gICAgICBvbkNoYW5nZTogKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24uZGVmYXVsdCkoY2hpbGRPbkNoYW5nZSwgaGFuZGxlcilcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5cblRvZ2dsZUJ1dHRvbkdyb3VwLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblRvZ2dsZUJ1dHRvbkdyb3VwLkJ1dHRvbiA9IF9Ub2dnbGVCdXR0b24uZGVmYXVsdDtcbnZhciBfZGVmYXVsdCA9IFRvZ2dsZUJ1dHRvbkdyb3VwO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9pc1JlcXVpcmVkRm9yQTExeSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXMtZXh0cmEvbGliL2lzUmVxdWlyZWRGb3JBMTF5XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAncmlnaHQnXG59O1xuXG52YXIgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50LFxuICAgICAgY2xhc3NOYW1lID0gX3JlZi5jbGFzc05hbWUsXG4gICAgICBzdHlsZSA9IF9yZWYuc3R5bGUsXG4gICAgICBjaGlsZHJlbiA9IF9yZWYuY2hpbGRyZW4sXG4gICAgICBhcnJvd1Byb3BzID0gX3JlZi5hcnJvd1Byb3BzLFxuICAgICAgXyA9IF9yZWYucG9wcGVyLFxuICAgICAgXzIgPSBfcmVmLnNob3csXG4gICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIuZGVmYXVsdCkoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJwbGFjZW1lbnRcIiwgXCJjbGFzc05hbWVcIiwgXCJzdHlsZVwiLCBcImNoaWxkcmVuXCIsIFwiYXJyb3dQcm9wc1wiLCBcInBvcHBlclwiLCBcInNob3dcIl0pO1xuICBic1ByZWZpeCA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKGJzUHJlZml4LCAndG9vbHRpcCcpO1xuXG4gIHZhciBfcmVmMiA9IChwbGFjZW1lbnQgPT0gbnVsbCA/IHZvaWQgMCA6IHBsYWNlbWVudC5zcGxpdCgnLScpKSB8fCBbXSxcbiAgICAgIHByaW1hcnlQbGFjZW1lbnQgPSBfcmVmMlswXTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgKDAsIF9leHRlbmRzMi5kZWZhdWx0KSh7XG4gICAgcmVmOiByZWYsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIHJvbGU6IFwidG9vbHRpcFwiLFxuICAgIFwieC1wbGFjZW1lbnRcIjogcHJpbWFyeVBsYWNlbWVudCxcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIGJzUHJlZml4LCBcImJzLXRvb2x0aXAtXCIgKyBwcmltYXJ5UGxhY2VtZW50KVxuICB9LCBwcm9wcyksIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe1xuICAgIGNsYXNzTmFtZTogXCJhcnJvd1wiXG4gIH0sIGFycm93UHJvcHMpKSwgLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogYnNQcmVmaXggKyBcIi1pbm5lclwiXG4gIH0sIGNoaWxkcmVuKSk7XG59KTtcblxuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5Ub29sdGlwLmRpc3BsYXlOYW1lID0gJ1Rvb2x0aXAnO1xudmFyIF9kZWZhdWx0ID0gVG9vbHRpcDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxuLyoqXG4gKiBTYWZlIGNoYWluZWQgZnVuY3Rpb25cbiAqXG4gKiBXaWxsIG9ubHkgY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIGlmIG5lZWRlZCxcbiAqIG90aGVyd2lzZSB3aWxsIHBhc3MgYmFjayBleGlzdGluZyBmdW5jdGlvbnMgb3IgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jdGlvbnMgdG8gY2hhaW5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbnxudWxsfVxuICovXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZiAhPSBudWxsO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgIH1cblxuICAgIGlmIChhY2MgPT09IG51bGwpIHJldHVybiBmO1xuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBhY2MuYXBwbHkodGhpcywgYXJncyk7IC8vIEB0cy1pZ25vcmVcblxuICAgICAgZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuICB9LCBudWxsKTtcbn1cblxudmFyIF9kZWZhdWx0ID0gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZVdpdGhCc1ByZWZpeDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jYW1lbGl6ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImRvbS1oZWxwZXJzL2NhbWVsaXplXCIpKTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9UaGVtZVByb3ZpZGVyID0gcmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKTtcblxudmFyIHBhc2NhbENhc2UgPSBmdW5jdGlvbiBwYXNjYWxDYXNlKHN0cikge1xuICByZXR1cm4gc3RyWzBdLnRvVXBwZXJDYXNlKCkgKyAoMCwgX2NhbWVsaXplLmRlZmF1bHQpKHN0cikuc2xpY2UoMSk7XG59O1xuXG4vLyBUT0RPOiBlbXN0cmljdGVuICYgZml4IHRoZSB0eXBpbmcgaGVyZSEgYGNyZWF0ZVdpdGhCc1ByZWZpeDxURWxlbWVudFR5cGU+Li4uYFxuZnVuY3Rpb24gY3JlYXRlV2l0aEJzUHJlZml4KHByZWZpeCwgX3RlbXApIHtcbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lLFxuICAgICAgZGlzcGxheU5hbWUgPSBfcmVmJGRpc3BsYXlOYW1lID09PSB2b2lkIDAgPyBwYXNjYWxDYXNlKHByZWZpeCkgOiBfcmVmJGRpc3BsYXlOYW1lLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZi5Db21wb25lbnQsXG4gICAgICBkZWZhdWx0UHJvcHMgPSBfcmVmLmRlZmF1bHRQcm9wcztcblxuICB2YXIgQnNDb21wb25lbnQgPSAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZjIsIHJlZikge1xuICAgIHZhciBjbGFzc05hbWUgPSBfcmVmMi5jbGFzc05hbWUsXG4gICAgICAgIGJzUHJlZml4ID0gX3JlZjIuYnNQcmVmaXgsXG4gICAgICAgIF9yZWYyJGFzID0gX3JlZjIuYXMsXG4gICAgICAgIFRhZyA9IF9yZWYyJGFzID09PSB2b2lkIDAgPyBDb21wb25lbnQgfHwgJ2RpdicgOiBfcmVmMiRhcyxcbiAgICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UyLmRlZmF1bHQpKF9yZWYyLCBbXCJjbGFzc05hbWVcIiwgXCJic1ByZWZpeFwiLCBcImFzXCJdKTtcbiAgICB2YXIgcmVzb2x2ZWRQcmVmaXggPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KShic1ByZWZpeCwgcHJlZml4KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVGFnLCAoMCwgX2V4dGVuZHMyLmRlZmF1bHQpKHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoY2xhc3NOYW1lLCByZXNvbHZlZFByZWZpeClcbiAgICB9LCBwcm9wcykpO1xuICB9KTtcblxuICBCc0NvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG4gIEJzQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIHJldHVybiBCc0NvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gZnVuY3Rpb24gX2RlZmF1bHQoY2xhc3NOYW1lKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbiAocCwgcmVmKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczIuZGVmYXVsdCkoe30sIHAsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkocC5jbGFzc05hbWUsIGNsYXNzTmFtZSlcbiAgICB9KSk7XG4gIH0pO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudXNlQWNjb3JkaW9uVG9nZ2xlID0gZXhwb3J0cy5Ub29sdGlwID0gZXhwb3J0cy5Ub2dnbGVCdXR0b25Hcm91cCA9IGV4cG9ydHMuVG9nZ2xlQnV0dG9uID0gZXhwb3J0cy5Ub2FzdEhlYWRlciA9IGV4cG9ydHMuVG9hc3RCb2R5ID0gZXhwb3J0cy5Ub2FzdCA9IGV4cG9ydHMuVGhlbWVQcm92aWRlciA9IGV4cG9ydHMuVGFicyA9IGV4cG9ydHMuVGFiUGFuZSA9IGV4cG9ydHMuVGFibGUgPSBleHBvcnRzLlRhYkNvbnRlbnQgPSBleHBvcnRzLlRhYkNvbnRhaW5lciA9IGV4cG9ydHMuVGFiID0gZXhwb3J0cy5TcGxpdEJ1dHRvbiA9IGV4cG9ydHMuU3Bpbm5lciA9IGV4cG9ydHMuU2FmZUFuY2hvciA9IGV4cG9ydHMuUm93ID0gZXhwb3J0cy5SZXNwb25zaXZlRW1iZWQgPSBleHBvcnRzLlByb2dyZXNzQmFyID0gZXhwb3J0cy5Qb3BvdmVyQ29udGVudCA9IGV4cG9ydHMuUG9wb3ZlclRpdGxlID0gZXhwb3J0cy5Qb3BvdmVyID0gZXhwb3J0cy5QYWdpbmF0aW9uID0gZXhwb3J0cy5QYWdlSXRlbSA9IGV4cG9ydHMuT3ZlcmxheVRyaWdnZXIgPSBleHBvcnRzLk92ZXJsYXkgPSBleHBvcnRzLk5hdkxpbmsgPSBleHBvcnRzLk5hdkl0ZW0gPSBleHBvcnRzLk5hdkRyb3Bkb3duID0gZXhwb3J0cy5OYXZiYXJCcmFuZCA9IGV4cG9ydHMuTmF2YmFyID0gZXhwb3J0cy5OYXYgPSBleHBvcnRzLk1vZGFsVGl0bGUgPSBleHBvcnRzLk1vZGFsRm9vdGVyID0gZXhwb3J0cy5Nb2RhbERpYWxvZyA9IGV4cG9ydHMuTW9kYWxCb2R5ID0gZXhwb3J0cy5Nb2RhbCA9IGV4cG9ydHMuTWVkaWEgPSBleHBvcnRzLkxpc3RHcm91cEl0ZW0gPSBleHBvcnRzLkxpc3RHcm91cCA9IGV4cG9ydHMuSnVtYm90cm9uID0gZXhwb3J0cy5JbnB1dEdyb3VwID0gZXhwb3J0cy5GaWd1cmUgPSBleHBvcnRzLkltYWdlID0gZXhwb3J0cy5Db250YWluZXIgPSBleHBvcnRzLkZvcm1UZXh0ID0gZXhwb3J0cy5Gb3JtTGFiZWwgPSBleHBvcnRzLkZvcm1Hcm91cCA9IGV4cG9ydHMuRm9ybUZpbGUgPSBleHBvcnRzLkZvcm1DaGVjayA9IGV4cG9ydHMuRm9ybUNvbnRyb2wgPSBleHBvcnRzLkZvcm0gPSBleHBvcnRzLkZhZGUgPSBleHBvcnRzLkRyb3Bkb3duQnV0dG9uID0gZXhwb3J0cy5Ecm9wZG93biA9IGV4cG9ydHMuQ29sbGFwc2UgPSBleHBvcnRzLkNvbCA9IGV4cG9ydHMuQ2xvc2VCdXR0b24gPSBleHBvcnRzLkNhcm91c2VsSXRlbSA9IGV4cG9ydHMuQ2Fyb3VzZWwgPSBleHBvcnRzLkNhcmRHcm91cCA9IGV4cG9ydHMuQ2FyZEltZyA9IGV4cG9ydHMuQ2FyZERlY2sgPSBleHBvcnRzLkNhcmRDb2x1bW5zID0gZXhwb3J0cy5DYXJkID0gZXhwb3J0cy5CdXR0b25Ub29sYmFyID0gZXhwb3J0cy5CdXR0b25Hcm91cCA9IGV4cG9ydHMuQnV0dG9uID0gZXhwb3J0cy5CcmVhZGNydW1iSXRlbSA9IGV4cG9ydHMuQnJlYWRjcnVtYiA9IGV4cG9ydHMuQmFkZ2UgPSBleHBvcnRzLkFsZXJ0ID0gZXhwb3J0cy5BY2NvcmRpb25Ub2dnbGUgPSBleHBvcnRzLkFjY29yZGlvbkNvbGxhcHNlID0gZXhwb3J0cy5BY2NvcmRpb25Db250ZXh0ID0gZXhwb3J0cy5BY2NvcmRpb24gPSB2b2lkIDA7XG5cbnZhciBfQWNjb3JkaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BY2NvcmRpb25cIikpO1xuXG5leHBvcnRzLkFjY29yZGlvbiA9IF9BY2NvcmRpb24uZGVmYXVsdDtcblxudmFyIF9BY2NvcmRpb25Db250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BY2NvcmRpb25Db250ZXh0XCIpKTtcblxuZXhwb3J0cy5BY2NvcmRpb25Db250ZXh0ID0gX0FjY29yZGlvbkNvbnRleHQuZGVmYXVsdDtcblxudmFyIF9BY2NvcmRpb25Db2xsYXBzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQWNjb3JkaW9uQ29sbGFwc2VcIikpO1xuXG5leHBvcnRzLkFjY29yZGlvbkNvbGxhcHNlID0gX0FjY29yZGlvbkNvbGxhcHNlLmRlZmF1bHQ7XG5cbnZhciBfQWNjb3JkaW9uVG9nZ2xlID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vQWNjb3JkaW9uVG9nZ2xlXCIpKTtcblxuZXhwb3J0cy5BY2NvcmRpb25Ub2dnbGUgPSBfQWNjb3JkaW9uVG9nZ2xlLmRlZmF1bHQ7XG5leHBvcnRzLnVzZUFjY29yZGlvblRvZ2dsZSA9IF9BY2NvcmRpb25Ub2dnbGUudXNlQWNjb3JkaW9uVG9nZ2xlO1xuXG52YXIgX0FsZXJ0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9BbGVydFwiKSk7XG5cbmV4cG9ydHMuQWxlcnQgPSBfQWxlcnQuZGVmYXVsdDtcblxudmFyIF9CYWRnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQmFkZ2VcIikpO1xuXG5leHBvcnRzLkJhZGdlID0gX0JhZGdlLmRlZmF1bHQ7XG5cbnZhciBfQnJlYWRjcnVtYiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnJlYWRjcnVtYlwiKSk7XG5cbmV4cG9ydHMuQnJlYWRjcnVtYiA9IF9CcmVhZGNydW1iLmRlZmF1bHQ7XG5cbnZhciBfQnJlYWRjcnVtYkl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0JyZWFkY3J1bWJJdGVtXCIpKTtcblxuZXhwb3J0cy5CcmVhZGNydW1iSXRlbSA9IF9CcmVhZGNydW1iSXRlbS5kZWZhdWx0O1xuXG52YXIgX0J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQnV0dG9uXCIpKTtcblxuZXhwb3J0cy5CdXR0b24gPSBfQnV0dG9uLmRlZmF1bHQ7XG5cbnZhciBfQnV0dG9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0J1dHRvbkdyb3VwXCIpKTtcblxuZXhwb3J0cy5CdXR0b25Hcm91cCA9IF9CdXR0b25Hcm91cC5kZWZhdWx0O1xuXG52YXIgX0J1dHRvblRvb2xiYXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0J1dHRvblRvb2xiYXJcIikpO1xuXG5leHBvcnRzLkJ1dHRvblRvb2xiYXIgPSBfQnV0dG9uVG9vbGJhci5kZWZhdWx0O1xuXG52YXIgX0NhcmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NhcmRcIikpO1xuXG5leHBvcnRzLkNhcmQgPSBfQ2FyZC5kZWZhdWx0O1xuXG52YXIgX0NhcmRDb2x1bW5zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DYXJkQ29sdW1uc1wiKSk7XG5cbmV4cG9ydHMuQ2FyZENvbHVtbnMgPSBfQ2FyZENvbHVtbnMuZGVmYXVsdDtcblxudmFyIF9DYXJkRGVjayA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2FyZERlY2tcIikpO1xuXG5leHBvcnRzLkNhcmREZWNrID0gX0NhcmREZWNrLmRlZmF1bHQ7XG5cbnZhciBfQ2FyZEltZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2FyZEltZ1wiKSk7XG5cbmV4cG9ydHMuQ2FyZEltZyA9IF9DYXJkSW1nLmRlZmF1bHQ7XG5cbnZhciBfQ2FyZEdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DYXJkR3JvdXBcIikpO1xuXG5leHBvcnRzLkNhcmRHcm91cCA9IF9DYXJkR3JvdXAuZGVmYXVsdDtcblxudmFyIF9DYXJvdXNlbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2Fyb3VzZWxcIikpO1xuXG5leHBvcnRzLkNhcm91c2VsID0gX0Nhcm91c2VsLmRlZmF1bHQ7XG5cbnZhciBfQ2Fyb3VzZWxJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DYXJvdXNlbEl0ZW1cIikpO1xuXG5leHBvcnRzLkNhcm91c2VsSXRlbSA9IF9DYXJvdXNlbEl0ZW0uZGVmYXVsdDtcblxudmFyIF9DbG9zZUJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2xvc2VCdXR0b25cIikpO1xuXG5leHBvcnRzLkNsb3NlQnV0dG9uID0gX0Nsb3NlQnV0dG9uLmRlZmF1bHQ7XG5cbnZhciBfQ29sID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Db2xcIikpO1xuXG5leHBvcnRzLkNvbCA9IF9Db2wuZGVmYXVsdDtcblxudmFyIF9Db2xsYXBzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ29sbGFwc2VcIikpO1xuXG5leHBvcnRzLkNvbGxhcHNlID0gX0NvbGxhcHNlLmRlZmF1bHQ7XG5cbnZhciBfRHJvcGRvd24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Ryb3Bkb3duXCIpKTtcblxuZXhwb3J0cy5Ecm9wZG93biA9IF9Ecm9wZG93bi5kZWZhdWx0O1xuXG52YXIgX0Ryb3Bkb3duQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Ecm9wZG93bkJ1dHRvblwiKSk7XG5cbmV4cG9ydHMuRHJvcGRvd25CdXR0b24gPSBfRHJvcGRvd25CdXR0b24uZGVmYXVsdDtcblxudmFyIF9GYWRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9GYWRlXCIpKTtcblxuZXhwb3J0cy5GYWRlID0gX0ZhZGUuZGVmYXVsdDtcblxudmFyIF9Gb3JtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtXCIpKTtcblxuZXhwb3J0cy5Gb3JtID0gX0Zvcm0uZGVmYXVsdDtcblxudmFyIF9Gb3JtQ29udHJvbCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUNvbnRyb2xcIikpO1xuXG5leHBvcnRzLkZvcm1Db250cm9sID0gX0Zvcm1Db250cm9sLmRlZmF1bHQ7XG5cbnZhciBfRm9ybUNoZWNrID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtQ2hlY2tcIikpO1xuXG5leHBvcnRzLkZvcm1DaGVjayA9IF9Gb3JtQ2hlY2suZGVmYXVsdDtcblxudmFyIF9Gb3JtRmlsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vRm9ybUZpbGVcIikpO1xuXG5leHBvcnRzLkZvcm1GaWxlID0gX0Zvcm1GaWxlLmRlZmF1bHQ7XG5cbnZhciBfRm9ybUdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtR3JvdXBcIikpO1xuXG5leHBvcnRzLkZvcm1Hcm91cCA9IF9Gb3JtR3JvdXAuZGVmYXVsdDtcblxudmFyIF9Gb3JtTGFiZWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0Zvcm1MYWJlbFwiKSk7XG5cbmV4cG9ydHMuRm9ybUxhYmVsID0gX0Zvcm1MYWJlbC5kZWZhdWx0O1xuXG52YXIgX0Zvcm1UZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Gb3JtVGV4dFwiKSk7XG5cbmV4cG9ydHMuRm9ybVRleHQgPSBfRm9ybVRleHQuZGVmYXVsdDtcblxudmFyIF9Db250YWluZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0NvbnRhaW5lclwiKSk7XG5cbmV4cG9ydHMuQ29udGFpbmVyID0gX0NvbnRhaW5lci5kZWZhdWx0O1xuXG52YXIgX0ltYWdlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9JbWFnZVwiKSk7XG5cbmV4cG9ydHMuSW1hZ2UgPSBfSW1hZ2UuZGVmYXVsdDtcblxudmFyIF9GaWd1cmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0ZpZ3VyZVwiKSk7XG5cbmV4cG9ydHMuRmlndXJlID0gX0ZpZ3VyZS5kZWZhdWx0O1xuXG52YXIgX0lucHV0R3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0lucHV0R3JvdXBcIikpO1xuXG5leHBvcnRzLklucHV0R3JvdXAgPSBfSW5wdXRHcm91cC5kZWZhdWx0O1xuXG52YXIgX0p1bWJvdHJvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSnVtYm90cm9uXCIpKTtcblxuZXhwb3J0cy5KdW1ib3Ryb24gPSBfSnVtYm90cm9uLmRlZmF1bHQ7XG5cbnZhciBfTGlzdEdyb3VwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9MaXN0R3JvdXBcIikpO1xuXG5leHBvcnRzLkxpc3RHcm91cCA9IF9MaXN0R3JvdXAuZGVmYXVsdDtcblxudmFyIF9MaXN0R3JvdXBJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9MaXN0R3JvdXBJdGVtXCIpKTtcblxuZXhwb3J0cy5MaXN0R3JvdXBJdGVtID0gX0xpc3RHcm91cEl0ZW0uZGVmYXVsdDtcblxudmFyIF9NZWRpYSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVkaWFcIikpO1xuXG5leHBvcnRzLk1lZGlhID0gX01lZGlhLmRlZmF1bHQ7XG5cbnZhciBfTW9kYWwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsXCIpKTtcblxuZXhwb3J0cy5Nb2RhbCA9IF9Nb2RhbC5kZWZhdWx0O1xuXG52YXIgX01vZGFsQm9keSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTW9kYWxCb2R5XCIpKTtcblxuZXhwb3J0cy5Nb2RhbEJvZHkgPSBfTW9kYWxCb2R5LmRlZmF1bHQ7XG5cbnZhciBfTW9kYWxEaWFsb2cgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01vZGFsRGlhbG9nXCIpKTtcblxuZXhwb3J0cy5Nb2RhbERpYWxvZyA9IF9Nb2RhbERpYWxvZy5kZWZhdWx0O1xuXG52YXIgX01vZGFsRm9vdGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbEZvb3RlclwiKSk7XG5cbmV4cG9ydHMuTW9kYWxGb290ZXIgPSBfTW9kYWxGb290ZXIuZGVmYXVsdDtcblxudmFyIF9Nb2RhbFRpdGxlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Nb2RhbFRpdGxlXCIpKTtcblxuZXhwb3J0cy5Nb2RhbFRpdGxlID0gX01vZGFsVGl0bGUuZGVmYXVsdDtcblxudmFyIF9OYXYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdlwiKSk7XG5cbmV4cG9ydHMuTmF2ID0gX05hdi5kZWZhdWx0O1xuXG52YXIgX05hdmJhciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTmF2YmFyXCIpKTtcblxuZXhwb3J0cy5OYXZiYXIgPSBfTmF2YmFyLmRlZmF1bHQ7XG5cbnZhciBfTmF2YmFyQnJhbmQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL05hdmJhckJyYW5kXCIpKTtcblxuZXhwb3J0cy5OYXZiYXJCcmFuZCA9IF9OYXZiYXJCcmFuZC5kZWZhdWx0O1xuXG52YXIgX05hdkRyb3Bkb3duID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZEcm9wZG93blwiKSk7XG5cbmV4cG9ydHMuTmF2RHJvcGRvd24gPSBfTmF2RHJvcGRvd24uZGVmYXVsdDtcblxudmFyIF9OYXZJdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZJdGVtXCIpKTtcblxuZXhwb3J0cy5OYXZJdGVtID0gX05hdkl0ZW0uZGVmYXVsdDtcblxudmFyIF9OYXZMaW5rID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9OYXZMaW5rXCIpKTtcblxuZXhwb3J0cy5OYXZMaW5rID0gX05hdkxpbmsuZGVmYXVsdDtcblxudmFyIF9PdmVybGF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9PdmVybGF5XCIpKTtcblxuZXhwb3J0cy5PdmVybGF5ID0gX092ZXJsYXkuZGVmYXVsdDtcblxudmFyIF9PdmVybGF5VHJpZ2dlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vT3ZlcmxheVRyaWdnZXJcIikpO1xuXG5leHBvcnRzLk92ZXJsYXlUcmlnZ2VyID0gX092ZXJsYXlUcmlnZ2VyLmRlZmF1bHQ7XG5cbnZhciBfUGFnZUl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BhZ2VJdGVtXCIpKTtcblxuZXhwb3J0cy5QYWdlSXRlbSA9IF9QYWdlSXRlbS5kZWZhdWx0O1xuXG52YXIgX1BhZ2luYXRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BhZ2luYXRpb25cIikpO1xuXG5leHBvcnRzLlBhZ2luYXRpb24gPSBfUGFnaW5hdGlvbi5kZWZhdWx0O1xuXG52YXIgX1BvcG92ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BvcG92ZXJcIikpO1xuXG5leHBvcnRzLlBvcG92ZXIgPSBfUG9wb3Zlci5kZWZhdWx0O1xuXG52YXIgX1BvcG92ZXJUaXRsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUG9wb3ZlclRpdGxlXCIpKTtcblxuZXhwb3J0cy5Qb3BvdmVyVGl0bGUgPSBfUG9wb3ZlclRpdGxlLmRlZmF1bHQ7XG5cbnZhciBfUG9wb3ZlckNvbnRlbnQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1BvcG92ZXJDb250ZW50XCIpKTtcblxuZXhwb3J0cy5Qb3BvdmVyQ29udGVudCA9IF9Qb3BvdmVyQ29udGVudC5kZWZhdWx0O1xuXG52YXIgX1Byb2dyZXNzQmFyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9Qcm9ncmVzc0JhclwiKSk7XG5cbmV4cG9ydHMuUHJvZ3Jlc3NCYXIgPSBfUHJvZ3Jlc3NCYXIuZGVmYXVsdDtcblxudmFyIF9SZXNwb25zaXZlRW1iZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Jlc3BvbnNpdmVFbWJlZFwiKSk7XG5cbmV4cG9ydHMuUmVzcG9uc2l2ZUVtYmVkID0gX1Jlc3BvbnNpdmVFbWJlZC5kZWZhdWx0O1xuXG52YXIgX1JvdyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vUm93XCIpKTtcblxuZXhwb3J0cy5Sb3cgPSBfUm93LmRlZmF1bHQ7XG5cbnZhciBfU2FmZUFuY2hvciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU2FmZUFuY2hvclwiKSk7XG5cbmV4cG9ydHMuU2FmZUFuY2hvciA9IF9TYWZlQW5jaG9yLmRlZmF1bHQ7XG5cbnZhciBfU3Bpbm5lciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU3Bpbm5lclwiKSk7XG5cbmV4cG9ydHMuU3Bpbm5lciA9IF9TcGlubmVyLmRlZmF1bHQ7XG5cbnZhciBfU3BsaXRCdXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1NwbGl0QnV0dG9uXCIpKTtcblxuZXhwb3J0cy5TcGxpdEJ1dHRvbiA9IF9TcGxpdEJ1dHRvbi5kZWZhdWx0O1xuXG52YXIgX1RhYiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFiXCIpKTtcblxuZXhwb3J0cy5UYWIgPSBfVGFiLmRlZmF1bHQ7XG5cbnZhciBfVGFiQ29udGFpbmVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UYWJDb250YWluZXJcIikpO1xuXG5leHBvcnRzLlRhYkNvbnRhaW5lciA9IF9UYWJDb250YWluZXIuZGVmYXVsdDtcblxudmFyIF9UYWJDb250ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9UYWJDb250ZW50XCIpKTtcblxuZXhwb3J0cy5UYWJDb250ZW50ID0gX1RhYkNvbnRlbnQuZGVmYXVsdDtcblxudmFyIF9UYWJsZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFibGVcIikpO1xuXG5leHBvcnRzLlRhYmxlID0gX1RhYmxlLmRlZmF1bHQ7XG5cbnZhciBfVGFiUGFuZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFiUGFuZVwiKSk7XG5cbmV4cG9ydHMuVGFiUGFuZSA9IF9UYWJQYW5lLmRlZmF1bHQ7XG5cbnZhciBfVGFicyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGFic1wiKSk7XG5cbmV4cG9ydHMuVGFicyA9IF9UYWJzLmRlZmF1bHQ7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVGhlbWVQcm92aWRlclwiKSk7XG5cbmV4cG9ydHMuVGhlbWVQcm92aWRlciA9IF9UaGVtZVByb3ZpZGVyLmRlZmF1bHQ7XG5cbnZhciBfVG9hc3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvYXN0XCIpKTtcblxuZXhwb3J0cy5Ub2FzdCA9IF9Ub2FzdC5kZWZhdWx0O1xuXG52YXIgX1RvYXN0Qm9keSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG9hc3RCb2R5XCIpKTtcblxuZXhwb3J0cy5Ub2FzdEJvZHkgPSBfVG9hc3RCb2R5LmRlZmF1bHQ7XG5cbnZhciBfVG9hc3RIZWFkZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvYXN0SGVhZGVyXCIpKTtcblxuZXhwb3J0cy5Ub2FzdEhlYWRlciA9IF9Ub2FzdEhlYWRlci5kZWZhdWx0O1xuXG52YXIgX1RvZ2dsZUJ1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVG9nZ2xlQnV0dG9uXCIpKTtcblxuZXhwb3J0cy5Ub2dnbGVCdXR0b24gPSBfVG9nZ2xlQnV0dG9uLmRlZmF1bHQ7XG5cbnZhciBfVG9nZ2xlQnV0dG9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1RvZ2dsZUJ1dHRvbkdyb3VwXCIpKTtcblxuZXhwb3J0cy5Ub2dnbGVCdXR0b25Hcm91cCA9IF9Ub2dnbGVCdXR0b25Hcm91cC5kZWZhdWx0O1xuXG52YXIgX1Rvb2x0aXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL1Rvb2x0aXBcIikpO1xuXG5leHBvcnRzLlRvb2x0aXAgPSBfVG9vbHRpcC5kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdHJpZ2dlckJyb3dzZXJSZWZsb3c7XG5cbi8vIHJlYWRpbmcgYSBkaW1lbnNpb24gcHJvcCB3aWxsIGNhdXNlIHRoZSBicm93c2VyIHRvIHJlY2FsY3VsYXRlLFxuLy8gd2hpY2ggd2lsbCBsZXQgb3VyIGFuaW1hdGlvbnMgd29ya1xuZnVuY3Rpb24gdHJpZ2dlckJyb3dzZXJSZWZsb3cobm9kZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICBub2RlLm9mZnNldEhlaWdodDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VQb3BwZXJNYXJnaW5Nb2RpZmllcnM7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfaGFzQ2xhc3MgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJkb20taGVscGVycy9oYXNDbGFzc1wiKSk7XG5cbnZhciBfVGhlbWVQcm92aWRlciA9IHJlcXVpcmUoXCIuL1RoZW1lUHJvdmlkZXJcIik7XG5cbmZ1bmN0aW9uIGdldE1hcmdpbnMoZWxlbWVudCkge1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciB0b3AgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApIHx8IDA7XG4gIHZhciByaWdodCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblJpZ2h0KSB8fCAwO1xuICB2YXIgYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tKSB8fCAwO1xuICB2YXIgbGVmdCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQpIHx8IDA7XG4gIHJldHVybiB7XG4gICAgdG9wOiB0b3AsXG4gICAgcmlnaHQ6IHJpZ2h0LFxuICAgIGJvdHRvbTogYm90dG9tLFxuICAgIGxlZnQ6IGxlZnRcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlUG9wcGVyTWFyZ2luTW9kaWZpZXJzKCkge1xuICB2YXIgb3ZlcmxheVJlZiA9ICgwLCBfcmVhY3QudXNlUmVmKShudWxsKTtcbiAgdmFyIG1hcmdpbnMgPSAoMCwgX3JlYWN0LnVzZVJlZikobnVsbCk7XG4gIHZhciBwb3BvdmVyQ2xhc3MgPSAoMCwgX1RoZW1lUHJvdmlkZXIudXNlQm9vdHN0cmFwUHJlZml4KSh1bmRlZmluZWQsICdwb3BvdmVyJyk7XG4gIHZhciBkcm9wZG93bk1lbnVDbGFzcyA9ICgwLCBfVGhlbWVQcm92aWRlci51c2VCb290c3RyYXBQcmVmaXgpKHVuZGVmaW5lZCwgJ2Ryb3Bkb3duLW1lbnUnKTtcbiAgdmFyIGNhbGxiYWNrID0gKDAsIF9yZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKG92ZXJsYXkpIHtcbiAgICBpZiAoIW92ZXJsYXkgfHwgISgoMCwgX2hhc0NsYXNzLmRlZmF1bHQpKG92ZXJsYXksIHBvcG92ZXJDbGFzcykgfHwgKDAsIF9oYXNDbGFzcy5kZWZhdWx0KShvdmVybGF5LCBkcm9wZG93bk1lbnVDbGFzcykpKSByZXR1cm47XG4gICAgbWFyZ2lucy5jdXJyZW50ID0gZ2V0TWFyZ2lucyhvdmVybGF5KTtcbiAgICBvdmVybGF5LnN0eWxlLm1hcmdpbiA9ICcwJztcbiAgICBvdmVybGF5UmVmLmN1cnJlbnQgPSBvdmVybGF5O1xuICB9LCBbcG9wb3ZlckNsYXNzLCBkcm9wZG93bk1lbnVDbGFzc10pO1xuICB2YXIgb2Zmc2V0ID0gKDAsIF9yZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIG9mZnNldChfcmVmKSB7XG4gICAgICAgICAgdmFyIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICAgICAgICAgIGlmICghbWFyZ2lucy5jdXJyZW50KSByZXR1cm4gWzAsIDBdO1xuICAgICAgICAgIHZhciBfbWFyZ2lucyRjdXJyZW50ID0gbWFyZ2lucy5jdXJyZW50LFxuICAgICAgICAgICAgICB0b3AgPSBfbWFyZ2lucyRjdXJyZW50LnRvcCxcbiAgICAgICAgICAgICAgbGVmdCA9IF9tYXJnaW5zJGN1cnJlbnQubGVmdCxcbiAgICAgICAgICAgICAgYm90dG9tID0gX21hcmdpbnMkY3VycmVudC5ib3R0b20sXG4gICAgICAgICAgICAgIHJpZ2h0ID0gX21hcmdpbnMkY3VycmVudC5yaWdodDtcblxuICAgICAgICAgIHN3aXRjaCAocGxhY2VtZW50LnNwbGl0KCctJylbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgIHJldHVybiBbMCwgYm90dG9tXTtcblxuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgIHJldHVybiBbMCwgcmlnaHRdO1xuXG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICByZXR1cm4gWzAsIHRvcF07XG5cbiAgICAgICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICAgICAgcmV0dXJuIFswLCBsZWZ0XTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIFswLCAwXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9LCBbbWFyZ2luc10pOyAvLyBDb252ZXJ0cyBwb3BvdmVyIGFycm93IG1hcmdpbiB0byBhcnJvdyBtb2RpZmllciBwYWRkaW5nXG5cbiAgdmFyIHBvcG92ZXJBcnJvd01hcmdpbnMgPSAoMCwgX3JlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogJ3BvcG92ZXJBcnJvd01hcmdpbnMnLFxuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHBoYXNlOiAnbWFpbicsXG4gICAgICByZXF1aXJlc0lmRXhpc3RzOiBbJ2Fycm93J10sXG4gICAgICBlZmZlY3Q6IGZ1bmN0aW9uIGVmZmVjdChfcmVmMikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmMi5zdGF0ZTtcblxuICAgICAgICBpZiAoIW92ZXJsYXlSZWYuY3VycmVudCB8fCAhc3RhdGUuZWxlbWVudHMuYXJyb3cgfHwgISgwLCBfaGFzQ2xhc3MuZGVmYXVsdCkob3ZlcmxheVJlZi5jdXJyZW50LCBwb3BvdmVyQ2xhc3MpIHx8ICFzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10pIHtcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF9nZXRNYXJnaW5zID0gZ2V0TWFyZ2lucyhzdGF0ZS5lbGVtZW50cy5hcnJvdyksXG4gICAgICAgICAgICB0b3AgPSBfZ2V0TWFyZ2lucy50b3AsXG4gICAgICAgICAgICByaWdodCA9IF9nZXRNYXJnaW5zLnJpZ2h0O1xuXG4gICAgICAgIHZhciBwYWRkaW5nID0gdG9wIHx8IHJpZ2h0O1xuICAgICAgICBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA9IHtcbiAgICAgICAgICB0b3A6IHBhZGRpbmcsXG4gICAgICAgICAgbGVmdDogcGFkZGluZyxcbiAgICAgICAgICByaWdodDogcGFkZGluZyxcbiAgICAgICAgICBib3R0b206IHBhZGRpbmdcbiAgICAgICAgfTtcbiAgICAgICAgc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUubWFyZ2luID0gJzAnO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChzdGF0ZS5lbGVtZW50cy5hcnJvdykgc3RhdGUuZWxlbWVudHMuYXJyb3cuc3R5bGUubWFyZ2luID0gJyc7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3BvcG92ZXJDbGFzc10pO1xuICByZXR1cm4gW2NhbGxiYWNrLCBbb2Zmc2V0LCBwb3BvdmVyQXJyb3dNYXJnaW5zXV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlV3JhcHBlZFJlZldpdGhXYXJuaW5nO1xuXG52YXIgX2ludmFyaWFudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImludmFyaWFudFwiKSk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBfdXNlTWVyZ2VkUmVmcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZU1lcmdlZFJlZnNcIikpO1xuXG5mdW5jdGlvbiB1c2VXcmFwcGVkUmVmV2l0aFdhcm5pbmcocmVmLCBjb21wb25lbnROYW1lKSB7XG4gIC8vIEB0cy1pZ25vcmVcbiAgaWYgKCEocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSkgcmV0dXJuIHJlZjsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG5cbiAgdmFyIHdhcm5pbmdSZWYgPSAoMCwgX3JlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAocmVmVmFsdWUpIHtcbiAgICAhKHJlZlZhbHVlID09IG51bGwgfHwgIXJlZlZhbHVlLmlzUmVhY3RDb21wb25lbnQpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gKDAsIF9pbnZhcmlhbnQuZGVmYXVsdCkoZmFsc2UsIGNvbXBvbmVudE5hbWUgKyBcIiBpbmplY3RlZCBhIHJlZiB0byBhIHByb3ZpZGVkIGBhc2AgY29tcG9uZW50IHRoYXQgcmVzb2x2ZWQgdG8gYSBjb21wb25lbnQgaW5zdGFuY2UgaW5zdGVhZCBvZiBhIERPTSBlbGVtZW50LiBcIiArICdVc2UgYFJlYWN0LmZvcndhcmRSZWZgIHRvIHByb3ZpZGUgdGhlIGluamVjdGVkIHJlZiB0byB0aGUgY2xhc3MgY29tcG9uZW50IGFzIGEgcHJvcCBpbiBvcmRlciB0byBwYXNzIGl0IGRpcmVjdGx5IHRvIGEgRE9NIGVsZW1lbnQnKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH0sIFtjb21wb25lbnROYW1lXSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuXG4gIHJldHVybiAoMCwgX3VzZU1lcmdlZFJlZnMuZGVmYXVsdCkod2FybmluZ1JlZiwgcmVmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL21lbnUnO1xyXG5pbXBvcnQgSWRlbnRpZmljYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuXHJcbiAgbGV0IGxvZ2dlZCA9IGZhbHNlO1xyXG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjY2Vzc1Rva2VuJylcclxuICBcclxuICBjb25zdCByZXMgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92ZXJpZnknLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IHRva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcblxyXG4gICAgbG9nZ2VkID0gcmVzLmpzb24oKVxyXG4gICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XHJcbiAgICBcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPElkZW50aWZpY2F0aW9uIGlzbG9nZ2VkPXt0cnVlfS8+XHJcbiAgICAgIDxNZW51Lz5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlQ2FsbGJhY2tSZWZcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlQ29tbWl0dGVkUmVmXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlRm9yY2VVcGRhdGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlc3RhcnQvaG9va3MvdXNlTWVyZ2VkUmVmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VUaW1lb3V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZXN0YXJ0L2hvb2tzL3VzZVVwZGF0ZUVmZmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVzdGFydC9ob29rcy91c2VXaWxsVW5tb3VudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbS1oZWxwZXJzL2FkZEV2ZW50TGlzdGVuZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2FtZWxpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tLWhlbHBlcnMvY2FuVXNlRE9NXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbS1oZWxwZXJzL2NvbnRhaW5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbS1oZWxwZXJzL2Nzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb20taGVscGVycy9oYXNDbGFzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb20taGVscGVycy9vd25lckRvY3VtZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbS1oZWxwZXJzL3F1ZXJ5U2VsZWN0b3JBbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG9tLWhlbHBlcnMvcmVtb3ZlRXZlbnRMaXN0ZW5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkb20taGVscGVycy9zY3JvbGxiYXJTaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvbS1oZWxwZXJzL3RyYW5zaXRpb25FbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW52YXJpYW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leHRyYS9saWIvYWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXh0cmEvbGliL2lzUmVxdWlyZWRGb3JBMTF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW92ZXJsYXlzL0Ryb3Bkb3duXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW92ZXJsYXlzL0Ryb3Bkb3duTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9Ecm9wZG93blRvZ2dsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9Nb2RhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9Nb2RhbE1hbmFnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtb3ZlcmxheXMvT3ZlcmxheVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1vdmVybGF5cy9zYWZlRmluZERPTU5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cC9UcmFuc2l0aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bmNvbnRyb2xsYWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3YXJuaW5nXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=