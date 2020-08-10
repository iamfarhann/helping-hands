module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "/KGT":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("N4O8");


/***/ }),

/***/ "1gBk":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "1imS":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4DPt":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormGroup");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "6Yxu":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tab");

/***/ }),

/***/ "6jvx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "rc-drawer"
var external_rc_drawer_ = __webpack_require__("ik7d");
var external_rc_drawer_default = /*#__PURE__*/__webpack_require__.n(external_rc_drawer_);

// EXTERNAL MODULE: ./node_modules/rc-drawer/assets/index.css
var assets = __webpack_require__("/KGT");

// CONCATENATED MODULE: ./common/src/components/Drawer/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(external_react_["Fragment"], null, __jsx(external_rc_drawer_default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: addAllClasses.join(' ')
  }, props), __jsx("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle
  }, closeButton), children), __jsx("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ var components_Drawer = (Drawer);
// EXTERNAL MODULE: ./common/src/components/Image/index.js
var Image = __webpack_require__("CRF/");

// EXTERNAL MODULE: ./common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("EnxY");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: ./containers/Charity/Navbar/navbar.style.js
var navbar_style = __webpack_require__("ugQH");

// CONCATENATED MODULE: ./containers/Charity/DrawerSection/drawerSection.style.js



const InnerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "drawerSectionstyle__InnerWrapper",
  componentId: "j3eg0m-0"
})(["min-height:100vh;padding:30px;"]);
const SpreadButton = external_styled_components_default()(navbar_style["a" /* Button */]).withConfig({
  displayName: "drawerSectionstyle__SpreadButton",
  componentId: "j3eg0m-1"
})(["display:none;@media only screen and (max-width:991px){display:flex;width:calc(100% - 60px);width:calc(100% - 80px);position:absolute;left:40px;bottom:40px;min-height:54px;border-radius:10px;font-size:15px;overflow:hidden;z-index:1;img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{background-color:", ";&::before{left:0;opacity:0.8;visibility:visible;}}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'));
/* harmony default export */ var drawerSection_style = (InnerWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/DrawerSection/index.js
var DrawerSection_jsx = external_react_default.a.createElement;









const DrawerSection = () => {
  const {
    0: toggleState,
    1: setToggleState
  } = Object(external_react_["useState"])(false);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(DrawerContext["a" /* DrawerContext */]);

  const handleActiveClass = () => {
    setToggleState(!toggleState);
  };

  const handleDrawerToggle = () => {
    dispatch({
      type: "TOGGLE"
    });
    handleActiveClass();
  };

  const scrollItems = [];
  Charity["g" /* menuItems */].forEach(item => {
    scrollItems.push(item.path.slice(1));
  });
  return DrawerSection_jsx(components_Drawer, {
    width: "420px",
    placement: "right",
    drawerHandler: DrawerSection_jsx("button", {
      className: `drawer_btn ${toggleState ? "active" : ""}`,
      onClick: handleActiveClass,
      "aria-label": "drawer toggle button"
    }, DrawerSection_jsx("ul", {
      className: "grid"
    }, DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null), DrawerSection_jsx("li", null)), DrawerSection_jsx("i", {
      className: "flaticon-plus-symbol "
    })),
    open: state.isOpen,
    toggleHandler: handleDrawerToggle
  }, DrawerSection_jsx(drawerSection_style, null, DrawerSection_jsx(external_react_scrollspy_default.a, {
    className: "scrollspy__menu",
    items: scrollItems,
    offset: -81,
    currentClassName: "active"
  }, Charity["g" /* menuItems */].map((menu, index) => DrawerSection_jsx("li", {
    key: `menu_key${index}`
  }, DrawerSection_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: menu.path,
    offset: menu.offset,
    onClick: handleDrawerToggle
  }, menu.label)))), DrawerSection_jsx(SpreadButton, null, DrawerSection_jsx("span", {
    className: "text"
  }, "SPREAD"), DrawerSection_jsx(Image["a" /* default */], {
    src: "/image/charity/heart-red.png",
    alt: "Charity Landing"
  }))));
};

/* harmony default export */ var Charity_DrawerSection = __webpack_exports__["a"] = (DrawerSection);

/***/ }),

/***/ "7DIm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ charityTheme; });

// CONCATENATED MODULE: ./common/src/theme/charity/colors.js
const colors = {
  transparent: "transparent",
  lightGray: "#F0F0F0",
  primary: "#05B890",
  primaryHover: "#C3EEE4",
  primary2: "#C3EEE4",
  secondary: "#3E2672",
  secondary2: "#3E2672",
  secondaryHover: "#9F93B9",
  yellow: "#fdb32a",
  yellowHover: "#C3EEE4",
  border: "#dadada",
  black: "#000000",
  white: "#ffffff",
  heading: "#060F1E",
  text: "#294859",
  secondaryText: "#616970",
  lightText: "rgba(41, 72, 89, 0.5)",
  linkedin: "#0077B5",
  facebook: "#3b5998",
  twitter: "#38A1F3",
  github: "#211f1f",
  select: "#525F7F"
};
/* harmony default export */ var charity_colors = (colors);
// CONCATENATED MODULE: ./common/src/theme/charity/index.js

const charityTheme = {
  breakpoints: [480, 768, 990, 1220],
  space: [0, 5, 10, 15, 20, 25, 30, 40, 56, 71, 91],
  fontSizes: [10, 12, 14, 15, 16, 20, 24, 36, 48, 55, 60, 81],
  fontWeights: [300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  fonts: {
    roboto: '"Roboto", sans-serif'
  },
  borders: [0, '1px solid', '2px solid', '4px solid'],
  radius: [0, 3, 5, 10, 15, 20, 25, 50, 60, '50%'],
  colors: charity_colors,
  colorStyles: {
    primary: {
      color: charity_colors.primary,
      borderColor: charity_colors.primary,
      '&:hover': {
        color: charity_colors.primaryHover,
        borderColor: charity_colors.primaryHover
      }
    },
    secondary: {
      color: charity_colors.secondary,
      borderColor: charity_colors.secondary,
      '&:hover': {
        color: charity_colors.secondaryHover,
        borderColor: charity_colors.secondaryHover
      }
    },
    warning: {
      color: charity_colors.yellow,
      borderColor: charity_colors.yellow,
      '&:hover': {
        color: charity_colors.yellowHover,
        borderColor: charity_colors.yellowHover
      }
    },
    error: {
      color: charity_colors.secondaryHover,
      borderColor: charity_colors.secondaryHover,
      '&:hover': {
        color: charity_colors.secondary,
        borderColor: charity_colors.secondary
      }
    },
    primaryWithBg: {
      color: charity_colors.heading,
      backgroundColor: charity_colors.primary,
      borderColor: charity_colors.primary,
      '&:hover': {
        backgroundColor: charity_colors.primaryHover,
        borderColor: charity_colors.primaryHover
      }
    },
    secondaryWithBg: {
      color: charity_colors.white,
      backgroundColor: charity_colors.secondary,
      borderColor: charity_colors.secondary,
      '&:hover': {
        backgroundColor: charity_colors.secondaryHover,
        borderColor: charity_colors.secondaryHover
      }
    },
    warningWithBg: {
      color: charity_colors.heading,
      backgroundColor: charity_colors.yellow,
      borderColor: charity_colors.yellow,
      '&:hover': {
        backgroundColor: charity_colors.yellowHover,
        borderColor: charity_colors.yellowHover
      }
    },
    errorWithBg: {
      color: charity_colors.white,
      backgroundColor: charity_colors.secondaryHover,
      borderColor: charity_colors.secondaryHover,
      '&:hover': {
        backgroundColor: charity_colors.secondary,
        borderColor: charity_colors.secondary
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: charity_colors.primary,
      padding: 0,
      height: 'auto',
      backgroundColor: `${charity_colors.transparent}`
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: charity_colors.transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  }
};

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

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "8zAC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SectionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TextAndLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DonationProgressbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CurrentStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ShareArea; });
/* unused harmony export DonateButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ShareList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Item; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("k094");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2__);



const SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.section.withConfig({
  displayName: "fundraiserSectionstyle__SectionWrapper",
  componentId: "sc-1yudwxk-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:70px 0;}@media only screen and (max-width:1360px){padding:50px 0;}@media only screen and (max-width:991px){padding:40px 0;}"]);
const SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "fundraiserSectionstyle__SectionHeader",
  componentId: "sc-1yudwxk-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}}"]);
const ContentArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ContentArea",
  componentId: "sc-1yudwxk-2"
})(["display:flex;flex-wrap:wrap;width:100%;@media only screen and (max-width:480px){flex-direction:column;}"]);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ImageWrapper",
  componentId: "sc-1yudwxk-3"
})(["width:50%;@media only screen and (max-width:991px){width:42%;}@media only screen and (max-width:767px){width:100%;}"]);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextWrapper",
  componentId: "sc-1yudwxk-4"
})(["width:50%;padding-left:100px;@media only screen and (max-width:1440px){padding-left:70px;}@media only screen and (max-width:1360px){padding-left:60px;}@media only screen and (max-width:991px){width:48%;padding-left:40px;}@media only screen and (max-width:767px){width:100%;padding-left:0;margin-top:30px;}h3{font-size:30px;font-weight:400;margin-bottom:22px;@media only screen and (max-width:1440px){font-size:26px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:22px;margin-bottom:15px;}@media only screen and (max-width:991px){line-height:36px;margin-bottom:10px;}@media only screen and (max-width:480px){font-size:20px;line-height:30px;}}p{font-size:18px;line-height:28px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const TextAndLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextAndLink",
  componentId: "sc-1yudwxk-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;@media only screen and (max-width:1440px){margin-bottom:20px;}@media only screen and (max-width:991px){margin-bottom:15px;}h4{color:", ";font-weight:600;font-size:18px;line-height:28px;margin:0;@media only screen and (max-width:1440px){font-size:16px;line-height:26px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}}.text_btn{color:", ";font-weight:600;font-size:18px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}i{margin-left:5px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#D50032'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'));
const DonationProgressbar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__DonationProgressbar",
  componentId: "sc-1yudwxk-6"
})(["width:100%;margin-top:50px;@media only screen and (max-width:991px){margin-top:40px;}p{margin-top:0;@media only screen and (max-width:991px){margin:0 0 10px;}}h5{font-size:18px;line-height:31px;font-weight:400;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:28px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const BarArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__BarArea",
  componentId: "sc-1yudwxk-7"
})(["display:flex;justify-content:space-between;position:relative;margin-bottom:23px;@media only screen and (max-width:991px){margin-bottom:20px;}&::before,&::after{display:block;content:'';width:100%;height:5px;border-radius:5px;background-color:", ";position:absolute;bottom:-7px;left:0;}&::after{width:56%;background-color:", ";}p{line-height:30px;&:last-child{@media only screen and (max-width:991px){display:none;}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.lightGray', '#f0f0f0'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#D50032'));
const CurrentStatus = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "fundraiserSectionstyle__CurrentStatus",
  componentId: "sc-1yudwxk-8"
})(["color:", " !important;margin-top:-6px !important;strong{color:", ";font-size:40px;line-height:28px;font-weight:700;@media only screen and (max-width:991px){font-size:32px;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.secondary', '#D50032'));
const ShareArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ShareArea",
  componentId: "sc-1yudwxk-9"
})(["margin-top:50px;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:1360px){margin-top:45px;}@media only screen and (min-width:768px) and (max-width:991px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}@media only screen and (max-width:480px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}"]);
const DonateButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "fundraiserSectionstyle__DonateButton",
  componentId: "sc-1yudwxk-10"
})(["display:flex;align-items:center;justify-content:center;min-width:230px;height:65px;border:0;font-size:18px;font-weight:700;border-radius:10px;cursor:pointer;color:#ffffff;background-color:#c3eee4;position:relative;overflow:hidden;z-index:1;@media only screen and (max-width:1440px){font-size:15px;}@media only screen and (max-width:1360px){height:56px;min-width:200px;font-size:14px;}img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{&::before{left:0;opacity:0.8;visibility:visible;}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22B'));
const ShareList = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.ul.withConfig({
  displayName: "fundraiserSectionstyle__ShareList",
  componentId: "sc-1yudwxk-11"
})(["display:flex;align-items:center;@media only screen and (max-width:991px){margin-top:20px;}"]);
const Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.li.withConfig({
  displayName: "fundraiserSectionstyle__Item",
  componentId: "sc-1yudwxk-12"
})(["margin-right:30px;font-size:20px;font-weight:400;color:", ";@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1360px){font-size:15px;margin-right:25px;}&:last-child{margin-right:0;}svg{width:20px;fill:", ";transition:all 0.3s ease;}a{&:hover{&.twitter{svg{fill:", ";}}&.facebook{svg{fill:", ";}}}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.twitter', '#38A1F3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.facebook', '#38A1F3'));
/* harmony default export */ __webpack_exports__["l"] = (SectionWrapper);

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9gLy":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/twitter");

/***/ }),

/***/ "AXek":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/facebook");

/***/ }),

/***/ "Aa26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinearSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Bjmp");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const useStyles = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({}));
function LinearSlider(props) {
  const classes = useStyles();
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    width: 1,
    alignItems: "center"
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: 1
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["LinearProgress"], {
    variant: "determinate",
    value: 20
  })));
}
;

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

/***/ "BPv4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Help");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

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

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "CRF/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("I0Tn");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('img').withConfig({
  displayName: "Image__ImageWrapper",
  componentId: "csrlc2-0"
})({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_2__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_2__[/* themed */ "b"])('Image'));

const Image = (_ref) => {
  let {
    src,
    alt
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "alt"]);

  return __jsx(ImageWrapper, _extends({
    src: src,
    alt: alt
  }, props));
};

/* harmony default export */ __webpack_exports__["a"] = (Image);
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "DNyS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return useDispatchUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserStateContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const UserDispatchContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const UserProvider = ({
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        if (action.payload["id"]) {
          if (action.payload.user.role.name == "Donor") {
            router.push("/account");
          } else {
            router.push("/account_o");
          }
        }

        return action.payload;

      case "LOGOUT":
        return action.payload;

      case "UPDATE":
        return action.payload;

      default:
        throw new Error(`Unknown action: ${action.type}`);
    }
  };

  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, 0); //  useEffect(()=>{
  //   },[state])

  return __jsx(UserDispatchContext.Provider, {
    value: dispatch
  }, __jsx(UserStateContext.Provider, {
    value: state
  }, children));
};
const useData = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserStateContext);
const useDispatchUser = () => Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(UserDispatchContext);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "EnxY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(DrawerContext.Provider, {
    value: {
      state,
      dispatch
    }
  }, children);
};

/***/ }),

/***/ "FaSK":
/***/ (function(module, exports) {

module.exports = require("@material-ui/system");

/***/ }),

/***/ "Fm7H":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Favorite");

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "Gin0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Room");

/***/ }),

/***/ "H1BY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");
var external_react_icons_kit_default = /*#__PURE__*/__webpack_require__.n(external_react_icons_kit_);

// EXTERNAL MODULE: ./common/src/components/Box/index.js
var Box = __webpack_require__("yYDd");

// EXTERNAL MODULE: ./common/src/components/Text/index.js
var Text = __webpack_require__("RytF");

// EXTERNAL MODULE: ./common/src/components/Heading/index.js
var Heading = __webpack_require__("XcVC");

// EXTERNAL MODULE: ./common/src/components/Image/index.js
var Image = __webpack_require__("CRF/");

// EXTERNAL MODULE: ./common/src/components/Button/index.js + 5 modules
var Button = __webpack_require__("OGHJ");

// EXTERNAL MODULE: external "react-icons-kit/entypo/home"
var home_ = __webpack_require__("QkGq");

// EXTERNAL MODULE: external "react-icons-kit/entypo/ccw"
var ccw_ = __webpack_require__("SwrX");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./containers/Error/error.style.js

const ErrorWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorWrapper",
  componentId: "sc-1yedwaf-0"
})(["padding:80px 15px;height:100vh;display:flex;align-items:center;"]);
const ErrorConatent = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ErrorConatent",
  componentId: "sc-1yedwaf-1"
})(["width:450px;max-width:100%;margin:0 auto;.image-wrapper{@media (max-width:1480px){max-width:80%;margin-left:auto;margin-right:auto;}}"]);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "errorstyle__ButtonWrapper",
  componentId: "sc-1yedwaf-2"
})(["font-family:'roboto';text-align:center;> *{margin:0 8px;}"]);
// CONCATENATED MODULE: ./containers/Error/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const ErrorSec = ({
  imageWrapper,
  title,
  text,
  reloadButton,
  homeButton
}) => {
  const pageReload = () => {
    window.location.reload();
  };

  return __jsx(ErrorWrapper, null, __jsx(ErrorConatent, null, __jsx(Box["a" /* default */], _extends({}, imageWrapper, {
    className: "image-wrapper"
  }), __jsx(Image["a" /* default */], {
    src: "/image/404.svg",
    alt: "404"
  })), __jsx(Heading["a" /* default */], _extends({}, title, {
    content: "Page not found!"
  })), __jsx(Text["a" /* default */], _extends({}, text, {
    content: "Looks like the page you're trying to visit dosen't exist. Please check the URL and try your luck again."
  })), __jsx(ButtonWrapper, null, __jsx(Button["a" /* default */], _extends({}, reloadButton, {
    title: "Reload Page",
    icon: __jsx(external_react_icons_kit_default.a, {
      icon: ccw_["ccw"],
      size: 24
    }),
    className: "domain_search_button",
    onClick: pageReload
  })), __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx(Button["a" /* default */], _extends({}, homeButton, {
    title: "Go Home",
    icon: __jsx(external_react_icons_kit_default.a, {
      icon: home_["home"],
      size: 24
    }),
    className: "domain_search_button"
  })))))));
};

ErrorSec.defaultProps = {
  imageWrapper: {
    mb: ["40px", "55px"]
  },
  title: {
    fontSize: ["26px", "32px", "38px", "48px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "35px"],
    lineHeight: "1.31",
    textAlign: "center",
    fontFamily: "poppins",
    fontWeight: "600"
  },
  text: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#343d48",
    lineHeight: "2",
    mb: ["30px", "40px", "50px", "60px"],
    textAlign: "center",
    fontFamily: "lato"
  },
  reloadButton: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#fff",
    pl: ["15px", "22px"],
    pr: ["15px", "22px"],
    iconPosition: "left",
    bg: "#eaa03b",
    fontFamily: "lato"
  },
  homeButton: {
    type: "button",
    fontSize: "16px",
    fontWeight: "500",
    color: "#0f2137",
    pl: ["15px", "22px"],
    pr: ["15px", "22px"],
    iconPosition: "left",
    bg: "#e2e7f0",
    fontFamily: "lato"
  }
};
/* harmony default export */ var Error = __webpack_exports__["a"] = (ErrorSec);

/***/ }),

/***/ "I0Tn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return base; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** this is our Base Component every components must be Extend it */

const themed = key => props => props.theme[key];
const base = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["compose"])(() => ({
  boxSizing: 'border-box'
}), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"], styled_system__WEBPACK_IMPORTED_MODULE_0__["width"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_0__["height"], styled_system__WEBPACK_IMPORTED_MODULE_0__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_0__["color"], styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_0__["order"], styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_0__["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, styled_system__WEBPACK_IMPORTED_MODULE_0__["display"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["space"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borders"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["borderColor"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["width"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["height"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["fontSize"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["color"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["flex"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["order"].propTypes), styled_system__WEBPACK_IMPORTED_MODULE_0__["alignSelf"].propTypes);

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JJVH":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingBasket");

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "KrcP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Ballot");

/***/ }),

/***/ "LelX":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ThumbUp");

/***/ }),

/***/ "MbIc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "N4O8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/icons/House"
var House_ = __webpack_require__("mi5/");
var House_default = /*#__PURE__*/__webpack_require__.n(House_);

// EXTERNAL MODULE: external "@material-ui/system"
var system_ = __webpack_require__("FaSK");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Slider"
var Slider_ = __webpack_require__("bfSA");
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// CONCATENATED MODULE: ./common/src/components/HelpingHands/fancySlider.js
var __jsx = external_react_default.a.createElement;





const useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: "100%"
  },
  margin: {
    height: theme.spacing(3)
  }
}));

function ValueLabelComponent(props) {
  const {
    children,
    open,
    value
  } = props;
  return __jsx(Tooltip_default.a, {
    open: open,
    enterTouchDelay: 0,
    placement: "top",
    title: value
  }, children);
}

const iOSBoxShadow = "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";
const marks = [{
  value: 0
}, {
  value: 20
}, {
  value: 37
}, {
  value: 100
}];
const IOSSlider = Object(styles_["withStyles"])({
  root: {
    color: "#3880ff",
    height: 2,
    padding: "15px 0"
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: "#fff",
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    "&:focus, &:hover, &$active": {
      boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: iOSBoxShadow
      }
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 11px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 2
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  },
  mark: {
    backgroundColor: "#bfbfbf",
    height: 8,
    width: 1,
    marginTop: -3
  },
  markActive: {
    opacity: 1,
    backgroundColor: "currentColor"
  }
})(Slider_default.a);
const PrettoSlider = Object(styles_["withStyles"])({
  root: {
    color: "#FF0000",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider_default.a);
const AirbnbSlider = Object(styles_["withStyles"])({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0"
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#fff",
    border: "1px solid currentColor",
    marginTop: -12,
    marginLeft: -13,
    boxShadow: "#ebebeb 0px 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0px 2px 3px 1px"
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 3
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3
  }
})(Slider_default.a);

function AirbnbThumbComponent(props) {
  return __jsx("span", props, __jsx("span", {
    className: "bar"
  }), __jsx("span", {
    className: "bar"
  }), __jsx("span", {
    className: "bar"
  }));
}

function fancySlider() {
  const classes = useStyles();
  return __jsx("div", {
    className: classes.root
  }, __jsx(PrettoSlider, {
    valueLabelDisplay: "auto",
    "aria-label": "pretto slider",
    defaultValue: 40
  }));
}
// EXTERNAL MODULE: external "@material-ui/icons/Room"
var Room_ = __webpack_require__("Gin0");
var Room_default = /*#__PURE__*/__webpack_require__.n(Room_);

// CONCATENATED MODULE: ./common/src/components/HelpingHands/ProjectCard.js
var ProjectCard_jsx = external_react_default.a.createElement;






const ProjectCard_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 256 // paddingTop: '56.25%', // 16:9

  }
}));
const ProjectCard_marks = [{
  value: 0,
  label: "0°C"
}, {
  value: 20,
  label: "20°C"
}, {
  value: 37,
  label: "37°C"
}, {
  value: 100,
  label: "100°C"
}];

function valuetext(value) {
  return `${value}°C`;
}

function ProjectCard({
  data
}) {
  const classes = ProjectCard_useStyles();
  return ProjectCard_jsx(core_["Card"], {
    className: classes.root
  }, ProjectCard_jsx(core_["CardMedia"], {
    className: classes.media,
    image: "https://source.unsplash.com/random",
    title: "Paella dish"
  }), ProjectCard_jsx(core_["CardContent"], null, ProjectCard_jsx(core_["Box"], {
    width: 1
  }, ProjectCard_jsx(fancySlider, null)), ProjectCard_jsx(core_["Typography"], {
    variant: "h6",
    component: "h1",
    gutterBottom: true
  }, data.name), ProjectCard_jsx(core_["Grid"], {
    container: true,
    spacing: 1
  }, ProjectCard_jsx(core_["Grid"], {
    item: true,
    md: 11
  }, ProjectCard_jsx(core_["Typography"], {
    variant: "body2",
    gutterBottom: true
  }, "Akhuwat Foundation")), ProjectCard_jsx(core_["Grid"], {
    item: true,
    md: 1
  })), ProjectCard_jsx(core_["Divider"], {
    style: {
      marginBottom: "4px"
    }
  }), ProjectCard_jsx(core_["Grid"], {
    container: true,
    spacing: 1
  }, ProjectCard_jsx(core_["Grid"], {
    item: true,
    md: 6
  }, ProjectCard_jsx(core_["Typography"], {
    variant: "body2",
    gutterBottom: true
  }, "Location")), ProjectCard_jsx(core_["Grid"], {
    item: true,
    md: 6,
    justify: "flex-start"
  }, ProjectCard_jsx(core_["Typography"], {
    variant: "body2"
  }, ProjectCard_jsx(Room_default.a, {
    fontSize: "inherit"
  }), "Lahore,Pakistan"))), ProjectCard_jsx(core_["Box"], {
    width: 1,
    pt: 1,
    height: "100px"
  }, ProjectCard_jsx(core_["Typography"], {
    variant: "body2",
    gutterBottom: true,
    style: {
      display: '-webkit-box',
      WebkitLineClamp: 5,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      wordWrap: "break-word"
    }
  }, data.description))), ProjectCard_jsx(core_["CardActions"], null, ProjectCard_jsx(link_default.a, {
    href: "/projects/[project]",
    as: "/projects/School in Slum"
  }, ProjectCard_jsx(core_["Button"], {
    size: "small",
    variant: "contained",
    fullWidth: true,
    color: "primary"
  }, "Dontate Now"))));
}
// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemAvatar"
var ListItemAvatar_ = __webpack_require__("QEhy");

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");

// EXTERNAL MODULE: external "@material-ui/core/FormGroup"
var FormGroup_ = __webpack_require__("4DPt");

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/icons/Folder"
var Folder_ = __webpack_require__("XSPh");

// EXTERNAL MODULE: external "@material-ui/icons/Delete"
var Delete_ = __webpack_require__("ng1p");

// EXTERNAL MODULE: external "@material-ui/icons/LocalHospital"
var LocalHospital_ = __webpack_require__("yWGN");
var LocalHospital_default = /*#__PURE__*/__webpack_require__.n(LocalHospital_);

// EXTERNAL MODULE: external "@material-ui/icons/Pets"
var Pets_ = __webpack_require__("v5c1");
var Pets_default = /*#__PURE__*/__webpack_require__.n(Pets_);

// EXTERNAL MODULE: external "@material-ui/icons/Brush"
var Brush_ = __webpack_require__("wSzR");
var Brush_default = /*#__PURE__*/__webpack_require__.n(Brush_);

// EXTERNAL MODULE: external "@material-ui/icons/LocalLibrary"
var LocalLibrary_ = __webpack_require__("oYOj");

// EXTERNAL MODULE: external "@material-ui/icons/SportsBasketball"
var SportsBasketball_ = __webpack_require__("g5M9");
var SportsBasketball_default = /*#__PURE__*/__webpack_require__.n(SportsBasketball_);

// EXTERNAL MODULE: external "@material-ui/icons/Accessible"
var Accessible_ = __webpack_require__("PFV1");
var Accessible_default = /*#__PURE__*/__webpack_require__.n(Accessible_);

// EXTERNAL MODULE: external "@material-ui/icons/Public"
var Public_ = __webpack_require__("WfL7");
var Public_default = /*#__PURE__*/__webpack_require__.n(Public_);

// CONCATENATED MODULE: ./common/src/components/HelpingHands/Category.js
var Category_jsx = external_react_default.a.createElement;

























const Category_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));
function Category() {
  const classes = Category_useStyles();
  const [dense, setDense] = external_react_default.a.useState(false);
  const [secondary, setSecondary] = external_react_default.a.useState(false);
  return Category_jsx(Grid_default.a, {
    container: true
  }, Category_jsx(Grid_default.a, {
    item: true,
    md: 3
  }, Category_jsx(List_default.a, {
    dense: dense
  }, Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(LocalHospital_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Health & Welleness"
  })), Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(Pets_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Pets & Animals"
  })))), Category_jsx(Grid_default.a, {
    item: true,
    md: 3
  }, Category_jsx(List_default.a, {
    dense: dense
  }, Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(Brush_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Arts & Culture"
  })), Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(Pets_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Pets & Animals"
  })))), Category_jsx(Grid_default.a, {
    item: true,
    md: 3
  }, Category_jsx(List_default.a, {
    dense: dense
  }, Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(SportsBasketball_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Sports"
  })), Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(Accessible_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Disability"
  })))), Category_jsx(Grid_default.a, {
    item: true,
    md: 3
  }, Category_jsx(List_default.a, {
    dense: dense
  }, Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(Public_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "International Aid"
  })), Category_jsx(ListItem_default.a, {
    button: true
  }, Category_jsx(ListItemIcon_default.a, null, Category_jsx(House_default.a, null)), Category_jsx(ListItemText_default.a, {
    primary: "Local Community"
  })))));
}
// EXTERNAL MODULE: external "@material-ui/core/Card"
var Card_ = __webpack_require__("YeXC");

// EXTERNAL MODULE: external "@material-ui/core/CardActions"
var CardActions_ = __webpack_require__("PxrZ");

// EXTERNAL MODULE: external "@material-ui/core/CardContent"
var CardContent_ = __webpack_require__("thJL");

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");

// EXTERNAL MODULE: ./common/src/components/HelpingHands/LinearSlider.js
var LinearSlider = __webpack_require__("Aa26");

// CONCATENATED MODULE: ./common/src/components/HelpingHands/RankingDescription.js
var RankingDescription_jsx = external_react_default.a.createElement;

























const RankingDescription_useStyles = Object(styles_["makeStyles"])({
  root: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
function RankingDescription({
  data
}) {
  const classes = RankingDescription_useStyles();
  return RankingDescription_jsx(core_["Box"], {
    p: 4,
    borderLeft: 1,
    borderColor: "primary.main"
  }, RankingDescription_jsx(Typography_default.a, {
    variant: "body1",
    gutterBottom: true
  }, data.description));
}
// CONCATENATED MODULE: ./common/src/components/HelpingHands/RankingCard.js
var RankingCard_jsx = external_react_default.a.createElement;


























const RankingCard_useStyles = Object(styles_["makeStyles"])({
  root: {
    minWidth: "100%"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const RankingCard_data = [{
  id: 123,
  name: "Akhuwat Foundation",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  img: "https://source.unsplash.com/random",
  points: 84
}, {
  id: 124,
  name: "Edhi Foundation",
  description: "Edhi Description",
  img: "https://source.unsplash.com/random",
  points: 24
}, {
  id: 127,
  name: "Edhi Foundation",
  description: "Edhi Description",
  img: "https://source.unsplash.com/random",
  points: 72
}, {
  id: 197,
  name: "FIF Foundation",
  description: "FIF Description",
  img: "https://source.unsplash.com/random",
  points: 55
}];
function RankingCard() {
  const classes = RankingCard_useStyles();
  const {
    0: selected,
    1: setSelected
  } = Object(external_react_["useState"])(RankingCard_data[0]);
  return RankingCard_jsx(core_["Paper"], null, RankingCard_jsx(core_["Grid"], {
    container: true,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    },
    spacing: 4
  }, RankingCard_jsx(core_["Grid"], {
    item: true,
    md: 4
  }, RankingCard_jsx(List_default.a, null, RankingCard_data.map(item => {
    return RankingCard_jsx(core_["Grid"], {
      container: true,
      alignItems: "center",
      spacing: 1,
      key: item.id
    }, RankingCard_jsx(core_["Grid"], {
      item: true,
      md: 2,
      align: "center"
    }, RankingCard_jsx(link_default.a, {
      href: "/organizations/[organization]",
      as: `/organizations/${item.name}`
    }, RankingCard_jsx(Avatar_default.a, {
      alt: "Remy Sharp",
      src: item.img,
      style: {
        cursor: "pointer"
      }
    }))), RankingCard_jsx(core_["Grid"], {
      item: true,
      md: 10
    }, RankingCard_jsx(ListItem_default.a, {
      button: true,
      onClick: () => setSelected(item),
      selected: selected == item ? true : false
    }, RankingCard_jsx(ListItemText_default.a, {
      disableTypography: true
    }, RankingCard_jsx(core_["Grid"], {
      container: true,
      alignItems: "center",
      spacing: 2
    }, RankingCard_jsx(core_["Grid"], {
      item: true,
      md: 10
    }, RankingCard_jsx(core_["Box"], {
      width: 1
    }, RankingCard_jsx(Typography_default.a, {
      variant: "body1",
      gutterBottom: true
    }, item.name), RankingCard_jsx(LinearSlider["a" /* default */], null))), RankingCard_jsx(core_["Grid"], {
      item: true,
      md: 2
    }, RankingCard_jsx(core_["Box"], {
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: 1,
      borderRadius: 4,
      borderColor: "red"
    }, RankingCard_jsx(Typography_default.a, {
      variant: "h6"
    }, item.points))))))));
  }))), RankingCard_jsx(core_["Grid"], {
    item: true,
    md: 8
  }, RankingCard_jsx(core_["Paper"], {
    elevation: 0
  }, RankingCard_jsx(RankingDescription, {
    data: selected
  })))));
}
// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");

// EXTERNAL MODULE: external "@material-ui/core/Tabs"
var Tabs_ = __webpack_require__("SJC6");
var Tabs_default = /*#__PURE__*/__webpack_require__.n(Tabs_);

// EXTERNAL MODULE: external "@material-ui/core/Tab"
var Tab_ = __webpack_require__("6Yxu");
var Tab_default = /*#__PURE__*/__webpack_require__.n(Tab_);

// EXTERNAL MODULE: external "@material-ui/icons/Phone"
var Phone_ = __webpack_require__("lgrB");

// EXTERNAL MODULE: external "@material-ui/icons/Favorite"
var Favorite_ = __webpack_require__("Fm7H");

// EXTERNAL MODULE: external "@material-ui/icons/PersonPin"
var PersonPin_ = __webpack_require__("dFji");

// EXTERNAL MODULE: external "@material-ui/icons/Help"
var Help_ = __webpack_require__("BPv4");

// EXTERNAL MODULE: external "@material-ui/icons/ShoppingBasket"
var ShoppingBasket_ = __webpack_require__("JJVH");

// EXTERNAL MODULE: external "@material-ui/icons/ThumbDown"
var ThumbDown_ = __webpack_require__("dX7Z");

// EXTERNAL MODULE: external "@material-ui/icons/ThumbUp"
var ThumbUp_ = __webpack_require__("LelX");

// EXTERNAL MODULE: external "@material-ui/icons/Ballot"
var Ballot_ = __webpack_require__("KrcP");
var Ballot_default = /*#__PURE__*/__webpack_require__.n(Ballot_);

// EXTERNAL MODULE: external "@material-ui/icons/Assessment"
var Assessment_ = __webpack_require__("VmsQ");
var Assessment_default = /*#__PURE__*/__webpack_require__.n(Assessment_);

// EXTERNAL MODULE: external "@material-ui/icons/Business"
var Business_ = __webpack_require__("XcKE");
var Business_default = /*#__PURE__*/__webpack_require__.n(Business_);

// EXTERNAL MODULE: ./containers/Charity/Project/index.js + 1 modules
var Project = __webpack_require__("fOhY");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./common/src/components/Text/index.js
var Text = __webpack_require__("RytF");

// EXTERNAL MODULE: ./common/src/components/Heading/index.js
var Heading = __webpack_require__("XcVC");

// CONCATENATED MODULE: ./common/src/components/HelpingHands/ProjectListCard.js
var ProjectListCard_jsx = external_react_default.a.createElement;







const ProjectListCard_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 100 // paddingTop: '56.25%', // 16:9

  }
}));
function ProjectListCard_ProjectCard({
  data
}) {
  const classes = ProjectListCard_useStyles();
  return ProjectListCard_jsx(core_["Card"], {
    className: classes.root
  }, ProjectListCard_jsx(core_["CardMedia"], {
    className: classes.media,
    image: "https://source.unsplash.com/random",
    title: "Paella dish"
  }), ProjectListCard_jsx(core_["CardContent"], null, ProjectListCard_jsx(core_["Box"], {
    width: 1
  }, ProjectListCard_jsx(LinearSlider["a" /* default */], null)), ProjectListCard_jsx(core_["Typography"], {
    variant: "h6",
    component: "h1",
    gutterBottom: true
  }, data.title), ProjectListCard_jsx(core_["Grid"], {
    container: true,
    spacing: 1
  }, ProjectListCard_jsx(core_["Grid"], {
    item: true,
    md: 6
  }, ProjectListCard_jsx(core_["Typography"], {
    variant: "body2",
    gutterBottom: true
  }, "Location")), ProjectListCard_jsx(core_["Grid"], {
    item: true,
    md: 6,
    justify: "flex-start"
  }, ProjectListCard_jsx(core_["Typography"], {
    variant: "body2"
  }, ProjectListCard_jsx(Room_default.a, {
    fontSize: "inherit"
  }), "Lahore,Pakistan"))), ProjectListCard_jsx(core_["Box"], {
    width: 1,
    pt: 1,
    height: "100px"
  }, ProjectListCard_jsx(core_["Typography"], {
    variant: "body2",
    gutterBottom: true // style={{
    //   display: "-webkit-box",
    //   WebkitLineClamp: 5,
    //   WebkitBoxOrient: "vertical",
    //   overflow: "hidden",
    //   wordWrap: "break-word",
    // }}

  }, data.description))), ProjectListCard_jsx(core_["CardActions"], null));
}
// CONCATENATED MODULE: ./common/src/components/HelpingHands/Tabs.js
var Tabs_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






















const Tabs_data = [{
  id: 123,
  title: "Help childeren in orphanage",
  organization: "Akhuwat Foundation",
  description: " industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release",
  img: "https://source.unsplash.com/random",
  points: 84
}, {
  id: 124,
  title: "Save corona patients",
  organization: "Edhi Foundation",
  description: "Edhi Description",
  img: "https://source.unsplash.com/random",
  points: 34
}, {
  id: 127,
  organization: "FIF Foundation",
  title: "Donate for ration package",
  description: "FIF Description",
  img: "https://source.unsplash.com/random",
  points: 34
}, {
  id: 117,
  organization: "SOS Children Village",
  title: "Help us build a school in Kasur",
  description: "SOS Description",
  img: "https://source.unsplash.com/random",
  points: 34
}];

function TabPanel(props) {
  const {
    children,
    value,
    index
  } = props,
        other = _objectWithoutProperties(props, ["children", "value", "index"]);

  return (// <Typography
    //   component="div"
    //   role="tabpanel"
    //   hidden={value !== index}
    //   id={`scrollable-force-tabpanel-${index}`}
    //   aria-labelledby={`scrollable-force-tab-${index}`}
    //   {...other}
    // >
    Tabs_jsx(core_["Box"], _extends({
      hidden: value !== index,
      component: "div"
    }, other), value === index && Tabs_jsx(core_["Box"], {
      p: 3
    }, children)) // </Typography>

  );
}

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const Tabs_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    flexGrow: 2,
    width: "1150px",
    backgroundColor: theme.palette.background.paper
  }
}));
function ScrollableTabsButtonForce({
  organization
}) {
  const classes = Tabs_useStyles();
  const [value, setValue] = external_react_default.a.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return Tabs_jsx(core_["Paper"], null, Tabs_jsx(core_["Box"], {
    width: 1
  }, Tabs_jsx(core_["Box"], {
    width: 1
  }, Tabs_jsx(Tabs_default.a, {
    value: value,
    onChange: handleChange,
    variant: "fullWidth",
    scrollButtons: "on",
    indicatorColor: "primary",
    textColor: "primary",
    "aria-label": "scrollable force tabs example"
  }, Tabs_jsx(Tab_default.a, _extends({
    label: "Overview",
    icon: Tabs_jsx(Business_default.a, null)
  }, a11yProps(0))), Tabs_jsx(Tab_default.a, _extends({
    label: "Projects",
    icon: Tabs_jsx(Ballot_default.a, null)
  }, a11yProps(1))), Tabs_jsx(Tab_default.a, _extends({
    label: "Documents",
    icon: Tabs_jsx(Assessment_default.a, null)
  }, a11yProps(2))))), Tabs_jsx(core_["Box"], {
    width: 1
  }, Tabs_jsx(TabPanel, {
    value: value,
    index: 0
  }, Tabs_jsx(external_react_markdown_default.a, {
    source: organization.overview
  })), Tabs_jsx(TabPanel, {
    value: value,
    index: 1
  }, Tabs_jsx(core_["Grid"], {
    container: true,
    md: 12,
    spacing: 4
  }, organization.projects.map(project => {
    return Tabs_jsx(core_["Grid"], {
      item: true,
      md: 3,
      key: project.id
    }, Tabs_jsx(Project["a" /* default */], {
      project: project
    }));
  }))), Tabs_jsx(TabPanel, {
    value: value,
    index: 2
  }, Tabs_jsx(core_["Grid"], {
    container: true,
    md: 12,
    spacing: 4
  }, organization.taxExemptionForm ? Tabs_jsx(core_["Grid"], {
    item: true,
    md: 3
  }, Tabs_jsx("a", {
    href: `${"http://3.16.1.168/"}${organization.taxExemptionForm.url}`,
    target: "_blank"
  }, Tabs_jsx("img", {
    src: `${"http://3.16.1.168/"}${organization.taxExemptionForm.url}`,
    style: {
      height: "200px",
      objectFit: "cover"
    }
  }))) : null, organization.registrationCertificate ? Tabs_jsx(core_["Grid"], {
    item: true,
    md: 3
  }, Tabs_jsx("a", {
    href: `${"http://3.16.1.168/"}${organization.registrationCertificate.url}`,
    target: "_blank"
  }, Tabs_jsx("img", {
    src: `${"http://3.16.1.168/"}${organization.registrationCertificate.url}`,
    style: {
      height: "200px",
      objectFit: "cover"
    }
  }))) : null)))));
}
// EXTERNAL MODULE: ./containers/Charity/Navbar/index.js
var Navbar = __webpack_require__("OdHS");

// EXTERNAL MODULE: ./containers/Charity/charity.style.js
var charity_style = __webpack_require__("txJt");

// EXTERNAL MODULE: external "react-stickynode"
var external_react_stickynode_ = __webpack_require__("isz7");
var external_react_stickynode_default = /*#__PURE__*/__webpack_require__.n(external_react_stickynode_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./common/src/assets/css/style.js
var style = __webpack_require__("XoTP");

// EXTERNAL MODULE: ./common/src/theme/charity/index.js + 1 modules
var charity = __webpack_require__("7DIm");

// EXTERNAL MODULE: ./containers/Charity/DrawerSection/index.js + 2 modules
var DrawerSection = __webpack_require__("6jvx");

// EXTERNAL MODULE: ./common/src/contexts/DrawerContext.js
var DrawerContext = __webpack_require__("EnxY");

// EXTERNAL MODULE: ./containers/Charity/Footer/index.js + 1 modules
var Footer = __webpack_require__("b01i");

// EXTERNAL MODULE: ./common/src/components/Button/index.js + 5 modules
var Button = __webpack_require__("OGHJ");

// EXTERNAL MODULE: ./containers/Charity/FundraiserSection/fundraiserSection.style.js
var fundraiserSection_style = __webpack_require__("8zAC");

// EXTERNAL MODULE: external "@material-ui/core/CircularProgress"
var CircularProgress_ = __webpack_require__("1imS");
var CircularProgress_default = /*#__PURE__*/__webpack_require__.n(CircularProgress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./lib/userData.js
var userData = __webpack_require__("DNyS");

// EXTERNAL MODULE: ./lib/queries.js
var queries = __webpack_require__("R9qi");

// EXTERNAL MODULE: ./lib/mutations.js
var mutations = __webpack_require__("uVoW");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: ./containers/Error/index.js + 1 modules
var Error = __webpack_require__("H1BY");

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogActions"
var DialogActions_ = __webpack_require__("1gBk");
var DialogActions_default = /*#__PURE__*/__webpack_require__.n(DialogActions_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContentText"
var DialogContentText_ = __webpack_require__("MbIc");
var DialogContentText_default = /*#__PURE__*/__webpack_require__.n(DialogContentText_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: ./common/src/components/RadioGroup/index.js + 1 modules
var RadioGroup = __webpack_require__("WzBP");

// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./pages/organizations/[organization].js
var _organization_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';










































const _organization_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  testGrid: {
    backgroundColor: "orange"
  }
}));

function Organization({
  organizationID
}) {
  const classes = _organization_useStyles();
  const router = Object(router_["useRouter"])();
  const {
    0: portfolio,
    1: setPortfolio
  } = Object(external_react_["useState"])(false);
  const {
    0: createLoading,
    1: setCreateLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: createError,
    1: setCreateError
  } = Object(external_react_["useState"])("");
  const donor = Object(userData["b" /* useData */])();
  const dispatch = Object(userData["c" /* useDispatchUser */])();
  const {
    data,
    loading,
    error,
    refetch
  } = Object(react_hooks_["useQuery"])(queries["m" /* ORGANIZATION_INFO */], {
    variables: {
      fields: {
        id: organizationID
      }
    },
    skip: !organizationID,
    fetchPolicy: "network-only"
  });
  const paymentPolicy = [{
    id: 1,
    title: "One Time",
    value: "once",
    text: "One Time donation given"
  }, {
    id: 2,
    title: "Ongoing",
    value: "monthly",
    text: "Everymonth donation given"
  }];
  Object(external_react_["useEffect"])(() => {
    console.log(data);
  }, [data]);

  const handlePortfolio = () => {
    console.log("handle portfolio");

    if (donor["id"]) {
      setPortfolio(true);
    } else router.push("/signin");
  };

  const [createPortfolio] = Object(react_hooks_["useMutation"])(mutations["d" /* CREATE_PORTFOLIO */], {
    onCompleted: data => {
      console.log(data, "Portfolio Completed");
      setPortfolio(false);
      dispatch({
        type: "UPDATE",
        payload: _objectSpread(_objectSpread({}, donor), {}, {
          portfolios: donor.portfolios.concat(data.createPortfolio.portfolio),
          creditAmount: donor.creditAmount - data.updatePortfolio.portfolio.paymentSize
        })
      });
      setCreateError("Review Added succesfully!");
      setCreateLoading(false);
      handleReset();
    },
    onError: error => {
      console.log(error);
      setCreateError("Sorry an error occurred. Please try again!");
    }
  });
  const schemas = [{
    paymentSize: external_yup_["number"]().required("Please enter a donation paymentSize."),
    period: external_yup_["string"]().required("Please enter the period.")
  }];
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
    values,
    touched,
    errors,
    setFieldValue
  } = Object(external_formik_["useFormik"])({
    initialValues: {
      paymentSize: 0,
      period: ""
    },
    onSubmit: values => {
      console.log("Portfolio => On Submit");
      console.log(values.period, "Period:");
      setCreateLoading(true);
      setCreateError(null);

      if (donor.creditAmount >= values.paymentSize) {
        createPortfolio({
          variables: {
            field: {
              data: {
                paymentSize: parseInt(values.paymentSize),
                period: values.period,
                donor: donor ? donor.id : null,
                organization: organizationID,
                paymentDate: external_moment_default()().format("YYYY-MM-DD")
              }
            }
          }
        });
      } else {
        setCreateLoading(false);
        setCreateError("Insufficent balance. Please refill your account & then add to portfolio");
      }
    },
    validationSchema: external_yup_["object"]().shape(schemas[0])
  });

  if (error) {
    return _organization_jsx(Error["a" /* default */], {
      statusCode: 404
    });
  }

  if (!error && !loading && !data) {
    return _organization_jsx(Error["a" /* default */], {
      statusCode: 404
    });
  }

  if (loading && !data) {
    return _organization_jsx(core_["Container"], {
      maxWidth: "xl",
      style: {
        minHeight: "100vh",
        background: "#F2F2F2",
        textAlign: "center",
        paddingTop: "30%"
      }
    }, _organization_jsx(CircularProgress_default.a, {
      color: "secondary"
    }));
  }

  if (data && !loading) {
    return _organization_jsx(external_styled_components_["ThemeProvider"], {
      theme: charity["a" /* charityTheme */]
    }, _organization_jsx(external_react_["Fragment"], null, _organization_jsx(head_default.a, null, _organization_jsx("title", null, "Organization Page"), _organization_jsx("meta", {
      name: "Description",
      content: "React next landing page"
    }), _organization_jsx("meta", {
      name: "theme-color",
      content: "#FCF22B"
    }), _organization_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), _organization_jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap",
      rel: "stylesheet"
    })), _organization_jsx(style["a" /* ResetCSS */], null), _organization_jsx(charity_style["c" /* GlobalStyle */], null), _organization_jsx(charity_style["a" /* CharityWrapper */], null, _organization_jsx(external_react_stickynode_default.a, {
      top: 0,
      innerZ: 9999,
      activeClass: "sticky-nav-active"
    }, _organization_jsx(Navbar["a" /* default */], null)), _organization_jsx(DrawerContext["b" /* DrawerProvider */], null, _organization_jsx(DrawerSection["a" /* default */], null)), _organization_jsx(core_["Container"], {
      maxWidth: "xl",
      style: {
        minHeight: "100vh",
        background: "#F2F2F2",
        padding: 0
      }
    }, _organization_jsx(core_["Grid"], {
      container: true,
      style: {
        paddingLeft: 0
      }
    }, _organization_jsx(core_["Grid"], {
      item: true,
      container: true,
      md: 12,
      style: {
        backgroundImage: `url(${"http://3.16.1.168/"}${data.organizations[0].coverImage.url})`,
        backgroundSize: "cover",
        minHeight: "525px"
      }
    })), _organization_jsx(core_["Grid"], {
      item: true,
      md: 4
    }, _organization_jsx(core_["Box"], {
      width: 1,
      px: 20,
      my: -10
    }, _organization_jsx("img", {
      src: `${"http://3.16.1.168/"}${data.organizations[0].profilePicture.url}`,
      height: "150px",
      width: "175px",
      style: {
        borderRadius: "4px",
        objectFit: "cover",
        cursor: "pointer"
      }
    }))), _organization_jsx(core_["Container"], {
      maxWidth: "lg"
    }, _organization_jsx(core_["Grid"], {
      container: true,
      style: {
        background: "#F2F2F2",
        paddingTop: "50px"
      },
      spacing: 2
    }, _organization_jsx(core_["Grid"], {
      item: true,
      md: 8,
      style: {
        marginLeft: "60px",
        marginTop: "50px"
      }
    }, _organization_jsx(Heading["a" /* default */], {
      as: "h1",
      style: {
        marginBottom: 10
      },
      content: data.organizations[0].organizationName
    }), _organization_jsx(Text["a" /* default */], {
      content: data.organizations[0].mission
    })), _organization_jsx(core_["Grid"], {
      container: true,
      style: {
        marginLeft: "65px"
      }
    }, _organization_jsx(core_["Grid"], {
      item: true,
      md: 7,
      style: {
        display: "flex"
      }
    }, donor["id"] ? donor.user.role.name == "Donor" && donor.portfolios.filter(portfolio => portfolio.organization.id == data.organizations[0].id).length ? _organization_jsx(link_default.a, {
      href: "/portfolio"
    }, _organization_jsx(Button["a" /* default */], {
      title: "Added to Portfolio",
      variant: "outlined",
      style: {
        marginTop: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        height: "auto",
        border: "0",
        fontSize: "15px",
        fontWeight: "700",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#FFFFFF",
        backgroundColor: "#05B890",
        position: "relative",
        overflow: "hidden",
        zIndex: "1"
      }
    })) : donor.user.role.name == "Donor" ? _organization_jsx(Button["a" /* default */], {
      title: "Add to Portfolio",
      variant: "textButton",
      onClick: handlePortfolio,
      style: {
        marginTop: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        height: "auto",
        border: "0",
        fontSize: "15px",
        fontWeight: "700",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#FFFFFF",
        backgroundColor: "#05B890",
        position: "relative",
        overflow: "hidden",
        zIndex: "1"
      }
    }) : null : null, portfolio ? _organization_jsx(Dialog_default.a, {
      open: portfolio,
      onClose: () => setPortfolio(false),
      "aria-labelledby": "form-dialog-title"
    }, _organization_jsx(DialogTitle_default.a, {
      id: "form-dialog-title"
    }, "Add to portfolio"), _organization_jsx(DialogContent_default.a, null, _organization_jsx(DialogContentText_default.a, null, ` By adding this organization to your portfolio you give your consent to one-time or monthly deduction from your wallet. This amount will be transferred into  ${data.organizations[0].organizationName}'s account`), _organization_jsx(TextField_default.a, {
      type: "number",
      autoFocus: true,
      name: "paymentSize",
      value: values.paymentSize,
      onChange: handleChange,
      onBlur: handleBlur,
      error: errors.paymentSize && touched.paymentSize,
      helperText: errors.paymentSize && touched.paymentSize ? errors.paymentSize : null,
      label: "paymentSize",
      fullWidth: true,
      style: {
        marginBottom: "20px"
      }
    }), _organization_jsx(RadioGroup["a" /* default */], {
      name: "period",
      value: paymentPolicy.id,
      items: paymentPolicy,
      onUpdate: value => setFieldValue("period", value)
    }), createError ? _organization_jsx(core_["Box"], {
      width: "100%",
      p: 2
    }, _organization_jsx(Text["a" /* default */], {
      content: createError
    })) : null), _organization_jsx(DialogActions_default.a, null, _organization_jsx(Button["a" /* default */], {
      onClick: () => setPortfolio(false),
      title: "Cancel",
      variant: "extendedFab"
    }), _organization_jsx(Button["a" /* default */], {
      title: "Add",
      variant: "extendedFab",
      onClick: handleSubmit,
      disabled: createLoading,
      isLoading: createLoading
    }))) : null, _organization_jsx("a", {
      href: `mailto:${data.organizations[0].user.email}`
    }, _organization_jsx(Button["a" /* default */], {
      title: "Contact",
      variant: "outlined",
      style: {
        marginTop: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "200px",
        height: "auto",
        border: "1",
        borderColor: "#3E2672",
        fontSize: "15px",
        fontWeight: "700",
        borderRadius: "10px",
        cursor: "pointer",
        color: "#060F1E",
        position: "relative",
        overflow: "hidden",
        zIndex: "1"
      }
    })))), _organization_jsx(core_["Grid"], {
      container: true,
      item: true,
      md: 12,
      style: {
        marginTop: "20px"
      }
    }, _organization_jsx(core_["Box"], {
      width: "100%"
    }, _organization_jsx(core_["Paper"], null, _organization_jsx(ScrollableTabsButtonForce, {
      organization: data.organizations[0]
    })))))), _organization_jsx(core_["Grid"], {
      item: true,
      container: true,
      md: 12,
      style: {
        background: "#F2F2F2",
        minHeight: "100px"
      }
    })), _organization_jsx(Footer["a" /* default */], null))));
  }
}

Organization.getInitialProps = async ({
  query
}) => {
  console.log(query);

  if (query["organization"]) {
    return {
      organizationID: query.organization
    };
  } else {
    return {
      organizationID: ""
    };
  }
};

/* harmony default export */ var _organization_ = __webpack_exports__["default"] = (Organization);

/***/ }),

/***/ "OGHJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./common/src/components/customVariant.js

const buttonStyle = Object(external_styled_system_["variant"])({
  key: 'buttonStyles'
});
const colorStyle = Object(external_styled_system_["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
const sizeStyle = Object(external_styled_system_["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
const cards = Object(external_styled_system_["variant"])({
  key: 'cards'
});

// EXTERNAL MODULE: ./common/src/components/base.js
var base = __webpack_require__("I0Tn");

// CONCATENATED MODULE: ./common/src/components/Button/button.style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const ButtonStyle = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyle__ButtonStyle",
  componentId: "sc-1y9q4so-0"
})(["cursor:pointer;display:inline-flex;align-items:center;justify-content:center;color:", ";background-color:", ";min-height:", "px;min-width:", "px;border-radius:", "px;font-family:inherit;font-size:", "px;font-weight:", ";text-decoration:none;text-transform:capitalize;padding-top:", "px;padding-bottom:", "px;padding-left:", "px;padding-right:", "px;border:0;transition:all 0.3s ease;span.btn-text{padding-left:", "px;padding-right:", "px;}span.btn-icon{display:flex;> div{display:flex !important;}}&:focus{outline:none;}&.is-material{box-shadow:0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12);}&.is-loading{.btn-text{padding-left:", "px;padding-right:", "px;}}", " ", " ", " ", " ", " ", ""], Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'), Object(external_styled_system_["themeGet"])('colors.primary', '#028489'), Object(external_styled_system_["themeGet"])('heights.3', '48'), Object(external_styled_system_["themeGet"])('widths.3', '48'), Object(external_styled_system_["themeGet"])('radius.0', '3'), Object(external_styled_system_["themeGet"])('fontSizes.4', '16'), Object(external_styled_system_["themeGet"])('fontWeights.4', '500'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.4', '15'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.1', '4'), Object(external_styled_system_["themeGet"])('space.2', '8'), Object(external_styled_system_["themeGet"])('space.2', '8'), external_styled_system_["alignItems"], external_styled_system_["boxShadow"], buttonStyle, colorStyle, sizeStyle, base["a" /* base */]); // prop types can also be added from the style functions

ButtonStyle.propTypes = _objectSpread(_objectSpread(_objectSpread({}, external_styled_system_["alignItems"].propTypes), external_styled_system_["boxShadow"].propTypes), external_styled_system_["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ var button_style = (ButtonStyle);
// CONCATENATED MODULE: ./common/src/components/Animation/index.js

const spinner = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);}50%{transform:rotate(180deg);opacity:0.5;}100%{transform:rotate(360deg);}"]);
const AnimSpinner = Object(external_styled_components_["css"])(["animation:", " 1s linear infinite;"], spinner);

// CONCATENATED MODULE: ./common/src/components/Loader/loader.style.js
function loader_style_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function loader_style_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { loader_style_ownKeys(Object(source), true).forEach(function (key) { loader_style_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { loader_style_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function loader_style_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const LoaderStyle = external_styled_components_default.a.span.withConfig({
  displayName: "loaderstyle__LoaderStyle",
  componentId: "u2l068-0"
})(["display:inline-flex;width:14px;height:14px;border-radius:50%;overflow:hidden;border-width:2px;border-style:solid;border-color:", ";border-top-color:transparent !important;", " ", " ", ""], props => props.loaderColor ? props.loaderColor : '#000000', AnimSpinner, colorStyle, base["a" /* base */]); // prop types can also be added from the style functions

LoaderStyle.propTypes = loader_style_objectSpread({}, external_styled_system_["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ var loader_style = (LoaderStyle);
// CONCATENATED MODULE: ./common/src/components/Loader/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Loader = (_ref) => {
  let {
    loaderColor,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(loader_style, _extends({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props));
};

Loader.defaultProps = {};
/* harmony default export */ var components_Loader = (Loader);
// CONCATENATED MODULE: ./common/src/components/Button/index.js
var Button_jsx = external_react_default.a.createElement;

function Button_extends() { Button_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Button_extends.apply(this, arguments); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Button = (_ref) => {
  let {
    type,
    title,
    icon,
    disabled,
    iconPosition,
    onClick,
    loader,
    loaderColor,
    isMaterial,
    isLoading,
    className
  } = _ref,
      props = Button_objectWithoutProperties(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  const addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  const buttonIcon = isLoading !== false ? Button_jsx(external_react_["Fragment"], null, loader ? loader : Button_jsx(components_Loader, {
    loaderColor: loaderColor || '#30C56D'
  })) : icon && Button_jsx("span", {
    className: "btn-icon"
  }, icon); // set icon position

  const position = iconPosition || 'right';
  return Button_jsx(button_style, Button_extends({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props), position === 'left' && buttonIcon, title && Button_jsx("span", {
    className: "btn-text"
  }, title), position === 'right' && buttonIcon);
};

Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "OdHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k094");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_src_components_UIElements_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("uMji");
/* harmony import */ var _common_src_components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CRF/");
/* harmony import */ var _common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("y5yV");
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ugQH");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_userData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("DNyS");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const Navbar = () => {
  const user = Object(_lib_userData__WEBPACK_IMPORTED_MODULE_7__[/* useData */ "b"])();
  return __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* default */ "c"], {
    className: "navbar"
  }, __jsx(_common_src_components_UI_Container__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    fullWidth: true
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/"
  }, __jsx(_common_src_components_UIElements_Logo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    logoSrc: "/image/charity/logo.png",
    className: "logo",
    title: "Charity React Next Landing"
  })), __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* MenuWrapper */ "b"], null, __jsx("a", {
    href: "/account_o",
    style: {
      marginRight: "10px",
      color: "#060F1E"
    }
  }, __jsx("span", {
    className: "smooth_scroll"
  }, "Organize Fundraiser")), user["id"] ? user.user.role.name == "Donor" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/account"
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], null, __jsx("span", {
    className: "text"
  }, "My Account"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/account_o"
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], null, __jsx("span", {
    className: "text"
  }, "My Account"))) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "/signin"
  }, __jsx(_navbar_style__WEBPACK_IMPORTED_MODULE_5__[/* Button */ "a"], null, __jsx("span", {
    className: "text"
  }, "Sign In"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "Oi65":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PFV1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Accessible");

/***/ }),

/***/ "PxrZ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "QEhy":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemAvatar");

/***/ }),

/***/ "QkGq":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/home");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "R9qi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return INITIALIZATION_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DONOR_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ORGANIZATION_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GET_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return GET_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GET_PROJECTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GET_PROJECT_UPDATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return GET_PROJECT_DONATIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GET_PROJECT_REVIEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET_PORTFOLIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GET_ORGANIZATION_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GET_TAG_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GET_ORGANIZATIONS; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const INITIALIZATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    me {
      id
      confirmed
      blocked
      role {
        name
      }
    }
  }
`;
const DONOR_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query DonorInfo($fields: JSON) {
    donors(where: $fields) {
      id
      fullName
      profilePicture {
        id
        url
      }
      preferredTags {
        id
        name
        description
      }
      visitedTags {
        id
        name
        description
      }
      user {
        id
        email
        role {
          name
        }
      }
      portfolios {
        id
        organization {
          id
          organizationName
        }
      }
      creditAmount
      mobileNumber
      cnic
    }
  }
`;
const ORGANIZATION_INFO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query organizationInfo($fields: JSON) {
    organizations(where: $fields) {
      id
      organizationName
      registrationNumber
      focalPerson
      address
      mobileNumber
      overview
      mission
      user {
        id
        email
        role {
          name
        }
      }
      profilePicture {
        id
        url
      }
      coverImage {
        id
        url
      }

      projects {
        id
      }

      taxExemptionForm {
        id
        url
      }
      registrationCertificate {
        id
        url
      }
    }
  }
`;
const GET_TAGS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    tags {
      id
      name
      description
    }
  }
`;
const GET_PROJECT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      createdAt
      updatedAt
      name
      status
      shortDescription
      description
      totalDonations
      titleImage {
        id
        url
      }
      organization {
        id
        profilePicture {
          id
          url
        }
        organizationName
      }
      targetAmount
      relatedImages {
        id
        url
      }
      donations {
        id
      }
      reviews {
        id
      }
      tags {
        id
        name
      }
      updates {
        id
      }
    }
  }
`;
const GET_PROJECTS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProjects($sort: String, $start: Int, $limit: Int, $where: JSON) {
    projects(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      createdAt
      updatedAt
      name
      status
      shortDescription
      description
      totalDonations
      titleImage {
        id
        url
      }
      organization {
        id
        profilePicture {
          id
          url
        }
        organizationName
      }
      targetAmount
      relatedImages {
        id
        url
      }
      donations(sort: "createdAt:desc") {
        id
        createdAt
      }
      reviews {
        id
      }
      tags {
        id
        name
      }
      updates {
        id
      }
    }
  }
`;
const GET_PROJECT_UPDATES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProjectUpdates(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    updates(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      update
      createdAt
      images {
        id
        url
      }
    }
  }
`;
const GET_PROJECT_DONATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProjectDonations(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    donations(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      amount
      createdAt
      donor {
        id
        fullName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
const GET_PROJECT_REVIEWS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getProjectReviews(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    reviews(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      review
      rating
      donor {
        id
        fullName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
const GET_PORTFOLIOS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getPortfolios($sort: String, $start: Int, $limit: Int, $where: JSON) {
    portfolios(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      period
      paymentSize
      paymentDate
      organization {
        id
        organizationName
        profilePicture {
          id
          url
        }
      }
    }
  }
`;
const GET_ORGANIZATION_NAMES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    organizations {
      id
      organizationName
    }
  }
`;
const GET_TAG_NAMES = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query {
    tags {
      id
      name
    }
  }
`;
const GET_ORGANIZATIONS = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  query getOrganizations(
    $sort: String
    $start: Int
    $limit: Int
    $where: JSON
  ) {
    organizations(sort: $sort, start: $start, limit: $limit, where: $where) {
      id
      organizationName
      mission
      coverImage {
        id
        url
      }
      projects {
        id
      }
    }
  }
`;

/***/ }),

/***/ "RytF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("I0Tn");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Text__TextWrapper",
  componentId: "sc-49k381-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Text'));

const Text = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(TextWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Text);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "SJC6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tabs");

/***/ }),

/***/ "SwrX":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/entypo/ccw");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "VmsQ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Assessment");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "WfL7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Public");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "WzBP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/RadioGroup/radioGroup.style.js

const ComponentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "radioGroupstyle__ComponentWrapper",
  componentId: "sc-1ogtsv3-0"
})(["display:flex;align-items:flex-start;margin:0 -10px;h4,p{margin:0;}h4{margin-bottom:7px;}label{position:relative;padding:15px 25px;box-sizing:border-box;border:2px solid #f4f2fa;border-radius:10px;margin:0 10px;cursor:pointer;transition:all 0.3s ease;&.active{background-color:#f4f2fa;}input{visibility:hidden;opacity:0;position:absolute;}}"]);
/* harmony default export */ var radioGroup_style = (ComponentWrapper);
// CONCATENATED MODULE: ./common/src/components/RadioGroup/index.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const RadioGroup = ({
  className,
  name,
  value,
  items,
  onUpdate
}) => {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    value: value
  });

  const onChange = e => {
    const currentValue = e.target.value;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      value: currentValue
    }));
    onUpdate(e.target.value);
  };

  const addAllClasses = ['radio_group'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(radioGroup_style, {
    className: addAllClasses.join(' ')
  }, items.map(item => __jsx("label", {
    htmlFor: item.title.toLowerCase().split(' ').join('-'),
    key: `radio__group-id${item.id}`,
    className: state.value === item.value ? 'active' : ''
  }, __jsx("input", {
    type: "radio",
    id: item.title.toLowerCase().split(' ').join('-'),
    name: name,
    onChange: onChange,
    value: item.value,
    checked: state.value === item.value,
    disabled: item.disabled
  }), item.title || item.text ? __jsx("div", {
    className: "content"
  }, __jsx("h4", null, item.title && item.title), __jsx("p", null, item.text && item.text)) : '')));
};

/** RadioGroup default type. */
RadioGroup.defaultProps = {
  onUpdate: () => {}
};
/* harmony default export */ var components_RadioGroup = __webpack_exports__["a"] = (RadioGroup);

/***/ }),

/***/ "XSPh":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Folder");

/***/ }),

/***/ "XcKE":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Business");

/***/ }),

/***/ "XcVC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("I0Tn");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('p').withConfig({
  displayName: "Heading__HeadingWrapper",
  componentId: "sc-10v4eax-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Heading'));

const Heading = (_ref) => {
  let {
    content
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content"]);

  return __jsx(HeadingWrapper, props, content);
};

/* harmony default export */ __webpack_exports__["a"] = (Heading);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "XoTP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetCSS; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
 //import './flaticon.css';

const ResetCSS = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  ::selection {
    background: #333333;
    color: #ffffff;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  .reuseModalHolder {
    padding: 0 !important;
    &.demo_switcher_modal {
      border: 0 !important;
      background-color: rgba(16, 30, 77, 0.9) !important;
      .innerRndComponent {
        border-radius: 8px !important;
      }
    }
  }

  button.modalCloseBtn {
    position: fixed !important;
    z-index: 999991 !important;
    background-color: transparent !important;
    top: 10px !important;
    right: 10px !important;
    min-width: 34px !important;
    min-height: 34px !important;
    padding: 0 !important;
    span.btn-icon {
      font-size: 22px !important;
      transform: rotate(45deg) !important;
    }

    &.alt {
      border-radius: 50% !important;
      z-index: 999999 !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
      top: 25px !important;
      right: 30px !important;
      min-width: 40px !important;
      min-height: 40px !important;

      span.btn-icon {
        font-size: 20px !important;
      }

      &:hover {
        opacity: 0.88 !important;
      }
    }
  }
`;

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

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "YeXC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "b01i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./common/src/components/Box/index.js
var Box = __webpack_require__("yYDd");

// EXTERNAL MODULE: ./common/src/components/Text/index.js
var Text = __webpack_require__("RytF");

// EXTERNAL MODULE: ./common/src/components/Heading/index.js
var Heading = __webpack_require__("XcVC");

// EXTERNAL MODULE: ./common/src/components/UIElements/Logo/index.js + 1 modules
var Logo = __webpack_require__("uMji");

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./containers/Charity/Footer/footer.style.js


const FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "footerstyle__FooterWrapper",
  componentId: "mw4ta7-0"
})(["width:100%;padding:90px 0 40px;@media only screen and (max-width:1360px){padding:60px 0 30px;}@media only screen and (max-width:991px){padding:50px 0 30px;}.col-one{.logo{width:150px;margin:0 0 45px;@media only screen and (max-width:1440px){margin-bottom:40px;}@media only screen and (max-width:1360px){margin-bottom:30px;}@media only screen and (max-width:991px){margin-bottom:20px;}}.mail{font-size:18px;color:", ";@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}}.widget_title{color:", ";font-size:20px;font-weight:400;margin-bottom:24px;@media only screen and (max-width:1440px){font-size:18px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:16px;margin-bottom:15px;}}.text{color:", ";font-size:18px;margin-bottom:20px;@media only screen and (max-width:1440px){font-size:16px;margin-bottom:15px;}@media only screen and (max-width:1360px){font-size:15px;}}.copyright{align-items:center;justify-content:space-between;padding-top:156px;@media only screen and (max-width:1360px){padding-top:125px;}@media only screen and (max-width:991px){padding-top:60px;}@media only screen and (max-width:480px){padding-top:30px;}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#D50032'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'));
const SelectWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__SelectWrapper",
  componentId: "mw4ta7-1"
})(["display:flex;align-items:center;width:104px;margin-top:45px;position:relative;min-height:24px;@media only screen and (max-width:1440px){margin-top:40px;}@media only screen and (max-width:1360px){margin-top:30px;}@media only screen and (max-width:991px){margin-top:20px;}select{border:0;outline:none;background:transparent;appearance:none;color:", ";font-size:18px;cursor:pointer;position:absolute;top:0;left:0;width:100%;height:24px;z-index:1;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}svg{position:absolute;top:1px;right:10px;path{fill:", ";}}"], Object(external_styled_system_["themeGet"])('colors.select', '#525F7F'), Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'));
const List = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__List",
  componentId: "mw4ta7-2"
})(["width:100%;"]);
const ListItem = external_styled_components_default.a.li.withConfig({
  displayName: "footerstyle__ListItem",
  componentId: "mw4ta7-3"
})(["a{color:", ";font-size:18px;line-height:38px;transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:16px;line-height:36px;}@media only screen and (max-width:1360px){font-size:15px;}&:hover,&:focus{outline:0;text-decoration:none;color:", ";}}"], Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'));
const CopyrightText = external_styled_components_default.a.div.withConfig({
  displayName: "footerstyle__CopyrightText",
  componentId: "mw4ta7-4"
})(["display:flex;align-items:center;@media only screen and (max-width:480px){width:100%;justify-content:center;margin-bottom:10px;}p{margin-bottom:0 !important;}"]);
const SocialList = external_styled_components_default.a.ul.withConfig({
  displayName: "footerstyle__SocialList",
  componentId: "mw4ta7-5"
})(["display:flex;align-items:center;@media only screen and (max-width:480px){margin:0 auto;}li{margin:0 5px;a{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:50%;overflow:hidden;line-height:1;color:", ";position:relative;@media only screen and (max-width:480px){width:20px;heigt:40px;margin-bottom:10px;}&::before{content:'';display:block;width:100%;height:100%;background-color:", ";position:absolute;z-index:0;opacity:0;transform:scale(0.01);transition:all 0.35s ease;}i{position:relative;z-index:1;svg{width:18px;height:auto;@media only screen and (max-width:1360px){width:16px;}@media only screen and (max-width:580){width:14px;}}}}&.linkedin{a{&::before{background-color:", ";}}}&.facebook{a{&::before{background-color:", ";}}}&.twitter{a{&::before{background-color:", ";}}}&.github{a{&::before{background-color:", ";}}}&:hover{a{color:", ";&::before{opacity:1;transform:scale(1);}}}}"], Object(external_styled_system_["themeGet"])('colors.secondaryText', '#616970'), Object(external_styled_system_["themeGet"])('colors.text', '#294859'), Object(external_styled_system_["themeGet"])('colors.linkedin', '#0077B5'), Object(external_styled_system_["themeGet"])('colors.facebook', '#3b5998'), Object(external_styled_system_["themeGet"])('colors.twitter', '#38A1F3'), Object(external_styled_system_["themeGet"])('colors.github', '#211f1f'), Object(external_styled_system_["themeGet"])('colors.white', '#ffffff'));
/* harmony default export */ var footer_style = (FooterWrapper);
// EXTERNAL MODULE: ./common/src/data/Charity/index.js
var Charity = __webpack_require__("szdJ");

// CONCATENATED MODULE: ./containers/Charity/Footer/index.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











const Footer = ({
  row,
  col,
  colOne,
  colTwo
}) => {
  return __jsx(footer_style, null, __jsx(Container["a" /* default */], {
    width: "1260px"
  }, __jsx(Box["a" /* default */], _extends({
    className: "row"
  }, row), __jsx(Box["a" /* default */], _extends({
    className: "col-one"
  }, colOne), __jsx(Logo["a" /* default */], {
    className: "logo",
    href: "/charity",
    logoSrc: "/image/charity/logo.png",
    title: "Agency"
  }), __jsx(Text["a" /* default */], {
    className: "text",
    content: "PK: +92 324 4314039"
  }), __jsx(link_default.a, {
    href: "#1"
  }, __jsx("a", {
    className: "mail"
  }, "hello@esaar.org.pk")), __jsx(SelectWrapper, null, __jsx("select", {
    "aria-label": "language switcher"
  }, __jsx("option", {
    value: "english"
  }, "English"), __jsx("option", {
    value: "spanish"
  }, "Spanish"), __jsx("option", {
    value: "german"
  }, "German")), __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "21.994",
    height: "21.991",
    viewBox: "0 0 21.994 21.991"
  }, __jsx("path", {
    d: "M424,10280a10.931,10.931,0,0,1,2.3-6.712,11.244,11.244,0,0,1,1.255-1.372,10.982,10.982,0,0,1,14.843-.046c.173.157.338.322.5.49l.17.179a11.007,11.007,0,0,1,2.061,3.187v0l.058.023.034.186h-.008a10.921,10.921,0,0,1,.726,2.993c.031.315.049.636.052.956,0,.039,0,.075,0,.113a11.22,11.22,0,0,1-.17,1.922c-.039.22-.085.437-.137.653A11,11,0,0,1,424,10280Zm2.071-4.7-.362.439v.315a10.088,10.088,0,0,0,17.116,10.31h-.333v-.672l-.385-.516v-.809l-.294-.292-.026-.336.375-.713-.71-1.25.085-.85-.638-.064-.235-.235h-.429l-.217.2h-.754l-.026.066h-.418l-.963-1.1.008-.857.158-.057.059-.328h-.225l-.093-.344,1.116-.806v-.57l.545-.3.222.023h.449l.351-.19,1.131-.086v.579l.894.225.176.126h.165v-.314l.514-.052.491.366h.806l.054-.052c-.08-.271-.17-.537-.271-.8l-.527.008-.263-.289-.052-.465-.269.147-.145.568-.39-.416-.018-.393-.377-.323-.139-.14h-.436l.139.391.524.294.093.1-.114.057.005.311-.256.105-.22-.049-.137-.191.356.019.1-.13-.788-.531-.059-.226-.32.287-.325-.064-.493.641-.1.253-.315.028-.467,0-.279-.132-.083-.556.1-.266.475-.1.519.1.062-.284-.22-.055.075-.446.522-.083.367-.514.377-.064.338.049h.127l-.07-.483-.413.168-.145-.361-.24-.033-.046-.248.2-.215.465-.181.121-.214a10.063,10.063,0,0,0-12.593-.592l.509,0,.227.127.429.093.034.165.679.026-.093-.217-.6-.019.142-.132-.049-.16H429.8l.594-.444h.571l.269.37.444.025.269-.261.2.1-.369.361-.486.008a1.813,1.813,0,0,1,.041.352l.62-.016.067-.168.426-.025.052-.251-.251-.044.083-.225.194-.057.669.031-.369.336.059.261.387.057-.026-.468.369-.193.653-.075.948.419v.361l.3.075-.152.286h-.426l-.127.325-.979-.229.77-.411-.294-.247-.661.082-.059.06h0l-.01.016-.189.2-.315.028.023.157.111.044-.005.052-.256.039-.018.147-.245.013-.044-.295-.442.132-.9.527.1.369.251.165.5.07v.57l.232-.036.214-.447.535-.17V10273l.3-.225.718.168-.049.452h.191l.529-.259.026.6.385.232-.018.354-.367.126.023.116.447.2-.01.243-.129.013v-.008l-.56-.173-.026-.181.165-.111v-.165l-.178-.044-.044.152-.307.047-.031-.011v.016l-.108.016-.085-.176-.1-.044h-.22l-.1.08v.181l.191.064.183.026-.041.018-.168.188-.075-.093-.165-.044-.447.421.059.047-.661.366-.62.646-.041.286-.622.408-.31.313.034.62-.426-.2,0-.364-1.191,0-.617.31-.269.493-.1.393.173.38.486.06.772-.517.067.256-.235.444.586.1.059.906.8.137.511-.589.622.124.217.3.6-.036.016-.176.328.158.367.581.638.008.235.41.034.5.705.269.888.008.261.426.393.127-.075.354-.431.548-.127,1.214-.39.31-.579-.018-.194.336.145.63-.63.806-.2.369-.6.287-.4.06-.015.167.276.078-.034.181-.248.24.152.188.3.008-.016.232-.08.225-.026.184.442.372-.059.193-.6-.011-.6-.521-.467-.818.065-.791-.351-.47.142-.795-.209-.06v-1.729s-.586-.441-.62-.441-.31-.077-.31-.077l-.059-.328-.764-.956.077-.343.023-.561.529-.372-.077-.628-.77-.059-.6-.687-.429-.116-.276-.049.034-.253-.351-.05v.143l-.881-.22-.354-.54.142-.266-.558-.813-.093-.594h-.227l.075.578.387.6-.044.232-.325-.049-.4-.685v-.8l-.418-.2v-.573c.046-.11.1-.22.146-.327-.051.108-.1.217-.148.327v-.315l.362-.439.421-.509-.018-.184.015.184-.418.509Zm18.714,2.42.072.135Zm-.865-1.779.2-.025.106,0-.106,0Zm-12.784-.149h.323l.145-.145v0l-.147.145h-.32Zm-.6-.24.178.093.426-.6-.426.6Zm1.317.025h.32v0Zm-.511-.2.189-.033.152-.1v0l-.152.1-.189.033Zm.535-.269.124.1.121-.1-.121.1Zm.245,0-.152-.1h0Zm-.61-.145.207-.052Zm-.937-.064.227.064h.6v0h-.6Zm.741-.145h0v-.119h0Zm-1.312-.757.163.336Zm11.9-.2.044.145.692,0,.2-.294-.2.294-.692,0ZM430.5,10273.927Zm-1.433-.986.1.111.5-.031s.008-.095.008-.159c0,.064-.008.159-.008.159l-.5.031Zm0-.39h.5l.1-.14v0l-.1.14Zm4.347,2.673.093-.119.127.1-.021.146-.209.019Zm.465.031h-.067v-.15h.287l.062-.152.114,0,.132.025-.057.116-.142.013-.028.14-.111.069-.178.014C433.886,10275.285,433.881,10275.255,433.881,10275.255Zm5.891-.8.034-.349.245-.052-.021-.163-.23-.142-.158-.108v-.16l.093-.143.331-.067.083.4.178.284.116.137.214.08-.2.24-.39.039Zm-.674-.135v-.209l.2-.323.271-.064.194.083-.018.22-.413.294Z",
    transform: "translate(-424.002 -10269.002)"
  })))), __jsx(Box["a" /* default */], _extends({
    className: "col-two"
  }, colTwo), Charity["h" /* menuWidgets */].map(widget => __jsx(Box["a" /* default */], _extends({
    className: "col"
  }, col, {
    key: `footer__widget-key${widget.id}`
  }), __jsx(Heading["a" /* default */], {
    className: "widget_title",
    as: "h3",
    content: widget.title
  }), __jsx(List, null, widget.menu.map(item => __jsx(ListItem, {
    key: `list__item-${item.id}`
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", null, item.text))))))))), __jsx(Box["a" /* default */], _extends({
    className: "row copyright"
  }, row), __jsx(CopyrightText, null, __jsx(Text["a" /* default */], {
    className: "text",
    content: "\xA9 2020 Esaar Inc. All Rights Reserved"
  })), __jsx(SocialList, null, Charity["l" /* socialLinks */].map(item => __jsx("li", {
    className: item.name,
    key: `social__link-key${item.id}`
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", {
    "aria-label": "social share link"
  }, item.icon))))))));
}; // Footer style props


// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // Footer col one style
  colOne: {
    width: ["100%", "30%", "35%", "30%"],
    mt: [0, "13px", "0"],
    mb: ["30px", 0],
    pl: ["15px", 0],
    pr: ["15px", "15px", 0]
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "70%", "65%", "70%"],
    flexBox: true,
    flexWrap: "wrap"
  },
  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "33.33%"],
    pl: "15px",
    pr: "15px",
    mb: "30px"
  }
};
/* harmony default export */ var Charity_Footer = __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "bfSA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slider");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dFji":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PersonPin");

/***/ }),

/***/ "dX7Z":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ThumbDown");

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
        // tslint:disable-next-line:no-bitwise
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
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
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
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
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

    this.onPopState = e => {
      if (!e.state) {
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
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
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
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
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

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fDba":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Skeleton");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "fOhY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./common/src/components/UI/Container/index.js + 1 modules
var Container = __webpack_require__("y5yV");

// EXTERNAL MODULE: ./common/src/components/Heading/index.js
var Heading = __webpack_require__("XcVC");

// EXTERNAL MODULE: ./common/src/components/Button/index.js + 5 modules
var Button = __webpack_require__("OGHJ");

// EXTERNAL MODULE: ./common/src/components/Text/index.js
var Text = __webpack_require__("RytF");

// EXTERNAL MODULE: ./common/src/components/Image/index.js
var Image = __webpack_require__("CRF/");

// EXTERNAL MODULE: external "react-icons-kit"
var external_react_icons_kit_ = __webpack_require__("Oi65");

// EXTERNAL MODULE: external "react-icons-kit/fa/twitter"
var twitter_ = __webpack_require__("9gLy");

// EXTERNAL MODULE: external "react-icons-kit/fa/facebookSquare"
var facebookSquare_ = __webpack_require__("kcEG");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// CONCATENATED MODULE: ./containers/Charity/Project/fundraiserSection.style.js



const SectionWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "fundraiserSectionstyle__SectionWrapper",
  componentId: "sc-1gfhmbq-0"
})(["width:100%;padding:81px 0;@media only screen and (max-width:1440px){padding:50px 0 0;}@media only screen and (max-width:1360px){padding:50px 0;}@media only screen and (max-width:991px){padding:40px 0;}"]);
const SectionHeader = external_styled_components_default.a.header.withConfig({
  displayName: "fundraiserSectionstyle__SectionHeader",
  componentId: "sc-1gfhmbq-1"
})(["text-align:center;margin-bottom:90px;@media only screen and (max-width:1440px){margin-bottom:70px;}@media only screen and (max-width:991px){margin-bottom:54px;}h2{font-size:50px;font-weight:300;margin-bottom:12px;@media only screen and (max-width:1440px){font-size:36px;}@media only screen and (max-width:1360px){font-size:34px;}@media only screen and (max-width:991px){font-size:30px;margin-bottom:10px;}}p{font-size:18px;line-height:40px;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:32px;}@media only screen and (max-width:991px){font-size:15px;line-height:28px;}}"]);
const ContentArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ContentArea",
  componentId: "sc-1gfhmbq-2"
})(["display:flex;flex-wrap:wrap;width:100%;@media only screen and (max-width:480px){flex-direction:column;}"]);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ImageWrapper",
  componentId: "sc-1gfhmbq-3"
})(["width:50%;@media only screen and (max-width:991px){width:42%;}@media only screen and (max-width:767px){width:100%;}"]);
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextWrapper",
  componentId: "sc-1gfhmbq-4"
})(["width:50%;padding-left:10px;@media only screen and (max-width:1440px){padding-left:20px;}@media only screen and (max-width:1360px){padding-left:60px;}@media only screen and (max-width:991px){width:48%;padding-left:40px;}@media only screen and (max-width:767px){width:100%;padding-left:0;margin-top:30px;}h3{font-size:30px;font-weight:400;margin-bottom:22px;@media only screen and (max-width:1440px){font-size:26px;margin-bottom:20px;}@media only screen and (max-width:1360px){font-size:22px;margin-bottom:15px;}@media only screen and (max-width:991px){line-height:36px;margin-bottom:10px;}@media only screen and (max-width:480px){font-size:20px;line-height:30px;}}p{font-size:18px;line-height:28px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const TextAndLink = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__TextAndLink",
  componentId: "sc-1gfhmbq-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:26px;@media only screen and (max-width:1440px){margin-bottom:20px;}@media only screen and (max-width:991px){margin-bottom:15px;}h4{color:", ";font-weight:600;font-size:18px;line-height:28px;margin:0;@media only screen and (max-width:1440px){font-size:16px;line-height:26px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}}.text_btn{color:", ";font-weight:600;font-size:18px;@media only screen and (max-width:1440px){font-size:16px;}@media only screen and (max-width:1360px){font-size:14px;}@media only screen and (max-width:991px){font-size:13px;}i{margin-left:5px;}}"], Object(external_styled_system_["themeGet"])('colors.secondary', '#D50032'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'));
const DonationProgressbar = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__DonationProgressbar",
  componentId: "sc-1gfhmbq-6"
})(["width:100%;margin-top:50px;@media only screen and (max-width:991px){margin-top:40px;}p{margin-top:0;@media only screen and (max-width:991px){margin:0 0 10px;}}h5{font-size:18px;line-height:31px;font-weight:400;margin-bottom:0;@media only screen and (max-width:1440px){font-size:16px;line-height:28px;}@media only screen and (max-width:1360px){font-size:15px;}}"]);
const BarArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__BarArea",
  componentId: "sc-1gfhmbq-7"
})(["display:flex;justify-content:space-between;position:relative;margin-bottom:23px;@media only screen and (max-width:991px){margin-bottom:20px;}&::before,&::after{display:block;content:'';width:100%;height:5px;border-radius:5px;background-color:", ";position:absolute;bottom:-7px;left:0;}&::after{width:56%;background-color:", ";}p{line-height:30px;&:last-child{@media only screen and (max-width:991px){display:none;}}}"], Object(external_styled_system_["themeGet"])('colors.lightGray', '#f0f0f0'), Object(external_styled_system_["themeGet"])('colors.secondary', '#D50032'));
const CurrentStatus = external_styled_components_default.a.p.withConfig({
  displayName: "fundraiserSectionstyle__CurrentStatus",
  componentId: "sc-1gfhmbq-8"
})(["color:", " !important;margin-top:-6px !important;strong{color:", ";font-size:40px;line-height:28px;font-weight:700;@media only screen and (max-width:991px){font-size:32px;}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.secondary', '#D50032'));
const ShareArea = external_styled_components_default.a.div.withConfig({
  displayName: "fundraiserSectionstyle__ShareArea",
  componentId: "sc-1gfhmbq-9"
})(["margin-top:50px;display:flex;align-items:center;justify-content:space-between;@media only screen and (max-width:1360px){margin-top:45px;}@media only screen and (min-width:768px) and (max-width:991px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}@media only screen and (max-width:480px){margin-top:30px;flex-direction:column;align-items:flex-start;justify-content:flex-start;}"]);
const DonateButton = external_styled_components_default()(external_react_anchor_link_smooth_scroll_default.a).withConfig({
  displayName: "fundraiserSectionstyle__DonateButton",
  componentId: "sc-1gfhmbq-10"
})(["display:flex;align-items:center;justify-content:center;min-width:230px;height:65px;border:0;font-size:18px;font-weight:700;border-radius:10px;cursor:pointer;color:#ffffff;background-color:#c3eee4;position:relative;overflow:hidden;z-index:1;@media only screen and (max-width:1440px){font-size:15px;}@media only screen and (max-width:1360px){height:56px;min-width:200px;font-size:14px;}img{margin-left:13px;}&::before{content:'';display:block;width:100%;height:100%;position:absolute;top:0;left:-100%;z-index:-1;opacity:0;visibility:hidden;background:repeating-linear-gradient( -45deg,", ",", " 10px,", " 10px,", " 20px );transition:all 0.45s ease;@media only screen and (max-width:1440px){background:repeating-linear-gradient( -45deg,", ",", " 8px,", " 8px,", " 16px );}}&:hover{&::before{left:0;opacity:0.8;visibility:visible;}}"], Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primary', '#FCF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'), Object(external_styled_system_["themeGet"])('colors.primaryHover', '#ECF22B'));
const ShareList = external_styled_components_default.a.ul.withConfig({
  displayName: "fundraiserSectionstyle__ShareList",
  componentId: "sc-1gfhmbq-11"
})(["display:flex;align-items:center;@media only screen and (max-width:991px){margin-top:20px;}"]);
const Item = external_styled_components_default.a.li.withConfig({
  displayName: "fundraiserSectionstyle__Item",
  componentId: "sc-1gfhmbq-12"
})(["margin-right:30px;font-size:20px;font-weight:400;color:", ";@media only screen and (max-width:1440px){font-size:18px;}@media only screen and (max-width:1360px){font-size:15px;margin-right:25px;}&:last-child{margin-right:0;}svg{width:20px;fill:", ";transition:all 0.3s ease;}a{&:hover{&.twitter{svg{fill:", ";}}&.facebook{svg{fill:", ";}}}}"], Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.heading', '#060F1E'), Object(external_styled_system_["themeGet"])('colors.twitter', '#38A1F3'), Object(external_styled_system_["themeGet"])('colors.facebook', '#38A1F3'));
/* harmony default export */ var fundraiserSection_style = (SectionWrapper);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: ./lib/queries.js
var queries = __webpack_require__("R9qi");

// EXTERNAL MODULE: external "@material-ui/lab/Skeleton"
var Skeleton_ = __webpack_require__("fDba");
var Skeleton_default = /*#__PURE__*/__webpack_require__.n(Skeleton_);

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./containers/Charity/Project/index.js
var __jsx = external_react_default.a.createElement;

















const FundraiserSection = ({
  project
}) => {
  const {
    data,
    loading,
    error,
    refetch
  } = Object(react_hooks_["useQuery"])(queries["e" /* GET_PROJECT */], {
    variables: {
      id: project.id
    },
    skip: !project
  });
  return __jsx(external_react_default.a.Fragment, null, !data ? __jsx(core_["Box"], {
    width: "100%",
    p: 2
  }, __jsx(Skeleton_default.a, {
    variant: "rect",
    width: "100%",
    height: "170px"
  }), __jsx(Skeleton_default.a, {
    width: "100%"
  }), __jsx(core_["Divider"], null), __jsx(Skeleton_default.a, {
    width: "50%"
  }), __jsx(core_["Divider"], null), __jsx(Skeleton_default.a, {
    width: "70%"
  }), __jsx(core_["Divider"], null), __jsx(Skeleton_default.a, {
    width: "30%"
  }), __jsx(core_["Divider"], null), __jsx(Skeleton_default.a, {
    variant: "rect",
    width: "100%",
    height: "30px"
  })) : __jsx(core_["Box"], {
    width: "100%",
    p: 2
  }, __jsx(Image["a" /* default */], {
    loading: "lazy",
    src: `${"http://3.16.1.168/"}${data.project.titleImage.url}`,
    alt: "Project Image",
    style: {
      marginBottom: "10px",
      height: "150px",
      objectFit: "cover"
    }
  }), __jsx(Heading["a" /* default */], {
    as: "h4",
    content: data.project.name,
    style: {
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }), __jsx(core_["Divider"], {
    style: {
      marginBottom: "5px"
    }
  }), __jsx(Text["a" /* default */], {
    content: `Date: ${external_moment_default()(data.project.createdAt).format("DD-MM-YYYY")}`
  }), __jsx(core_["Divider"], {
    style: {
      marginBottom: "5px"
    }
  }), __jsx(Text["a" /* default */], {
    content: `Target Amount: ${data.project.targetAmount} Rs.`
  }), __jsx(core_["Divider"], {
    style: {
      marginBottom: "5px"
    }
  }), __jsx(Text["a" /* default */], {
    content: `status: ${data.project.status}`
  }), __jsx(core_["Divider"], {
    style: {
      marginBottom: "5px"
    }
  }), __jsx(link_default.a, {
    href: `/projects/[project]`,
    as: `/projects/${data.project.id}`
  }, __jsx(Button["a" /* default */], {
    title: "See Details",
    variant: "textButton",
    fullWidth: true,
    style: {
      marginTop: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
      height: "auto",
      border: "0",
      fontSize: "15px",
      fontWeight: "700",
      borderRadius: "10px",
      cursor: "pointer",
      color: "#FFFFFF",
      backgroundColor: "#05B890",
      position: "relative",
      overflow: "hidden",
      zIndex: "1"
    }
  }))));
};

/* harmony default export */ var Project = __webpack_exports__["a"] = (FundraiserSection);

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

var _url = __webpack_require__("bzos");
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

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g5M9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SportsBasketball");

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

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "ik7d":
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "isz7":
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kcEG":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/facebookSquare");

/***/ }),

/***/ "lNxm":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/linkedin");

/***/ }),

/***/ "lgrB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Phone");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "mi5/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/House");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
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
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

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
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

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

/***/ "ng1p":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "oYOj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalLibrary");

/***/ }),

/***/ "q+6x":
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/github");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "szdJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bannerSlides; });
/* unused harmony export featureData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return branchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return workData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return milestoneData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return humanityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return promotionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return paymentPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addCredits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return currencyOptions; });
/* unused harmony export posts */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return clients; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return menuWidgets; });
/* unused harmony export copyright */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return socialLinks; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Oi65");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lNxm");
/* harmony import */ var react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AXek");
/* harmony import */ var react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9gLy");
/* harmony import */ var react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("q+6x");
/* harmony import */ var react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu

/* ------------------------------------ */
const menuItems = [{
  label: "Categories",
  path: "#feature",
  offset: "81"
}, {
  label: "Top Organizations",
  path: "#branch",
  offset: "100"
}, {
  label: "Fundraisers",
  path: "#fundraisers",
  offset: "81"
}, {
  label: "Micro Donations",
  path: "#socialFundraising",
  offset: "81"
}, {
  label: "Scattered Data",
  path: "#socialFundraising",
  offset: "81"
}, {
  label: "Portfolios",
  path: "#socialFundraising",
  offset: "81"
}, {
  label: "Our Blog",
  path: "#blog",
  offset: "81"
}];
/* ------------------------------------ */
// Banner section data

/* ------------------------------------ */
//import bannerSlide1 from "/image/charity/banner/slide1.png";
//import bannerSlide2 from "/image/charity/banner/slide2.png";
//import bannerSlide3 from "/image/charity/banner/slide3.png";
//import bannerSlide4 from "/image/charity/banner/slide4.jpg";

const bannerSlides = [{
  id: 1,
  thumb_url: "/image/charity/banner/slide3.png"
}, {
  id: 2,
  thumb_url: "/image/charity/banner/slide2.png"
}, {
  id: 3,
  thumb_url: "/image/charity/banner/slide3.png"
}, {
  id: 4,
  thumb_url: "/image/charity/banner/slide4.jpg"
}];
/* ------------------------------------ */
// Feature section data
// /* ------------------------------------ */
// import featureIcon1 from "/image/charity/feature/1.svg";
// import featureIcon2 from "/image/charity/feature/2.svg";
// import featureIcon3 from "/image/charity/feature/3.svg";
// import featureIcon4 from "/image/charity/feature/4.svg";
// import featureIcon5 from "/image/charity/feature/5.svg";
// import featureIcon6 from "/image/charity/feature/6.svg";

const featureData = {
  title: "  Want to make a difference?  ",
  slogan: "You can choose to donate for a category that you prefer",
  features: [{
    id: 1,
    icon: "/image/charity/feature/1.svg",
    title: "Animals ",
    description: "If you want to change the world, one wish at a time, help kids"
  }, {
    id: 2,
    icon: "/image/charity/feature/2.svg",
    title: "Art & Culture",
    description: "Make it happen with your donation"
  }, {
    id: 3,
    icon: "/image/charity/feature/3.svg",
    title: "Food",
    description: "Feed the needy people who look up to you ."
  }, {
    id: 4,
    icon: "/image/charity/feature/4.svg",
    title: "Family",
    description: "Support them to fulfil their school dreams"
  }, {
    id: 5,
    icon: "/image/charity/feature/5.svg",
    title: "Disasters",
    description: "If you want to change the world, one wish at."
  }, {
    id: 6,
    icon: "/image/charity/feature/6.svg",
    title: "Health",
    description: "If you want to change the world, one wish at a time."
  }]
};
/* ------------------------------------ */
// Branch section data

/* ------------------------------------ */
// import thumbImage from "/image/charity/branch/image.png";
// import thumbImage1 from "/image/charity/branch/image1.png";
// import thumbImage2 from "/image/charity/branch/image2.png";
// import thumbImage3 from "/image/charity/branch/image3.png";
// import thumbImage4 from "/image/charity/branch/image4.png";
// import thumbImage5 from "/image/charity/branch/image5.png";

const branchData = [{
  id: 1,
  menuItem: "Akhuwat",
  image: "/image/charity/branch/image1.jpg",
  slogan: "TOP ORGANIZATIONS",
  title: `With transparency score of <strong>75%</strong> 
    Akhuwat is one of the best organization.`,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}, {
  id: 2,
  menuItem: "Shaukat Khanum",
  image: "/image/charity/branch/image2.jpg",
  slogan: "TOP ORGANIZATIONS",
  title: `With transparency score of <strong>75%</strong> 
    Shaukat Khanum is one of the best organization.`,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}, {
  id: 3,
  menuItem: "Tahreek-e-ilm ",
  image: "/image/charity/branch/image3.jpg",
  slogan: "TOP ORGANIZATIONS",
  title: `With transparency score of <strong>75%</strong> 
    Tahreek-e-ilm is one of the best organization. `,
  description: "Despite being a small organization we’ve funded 29,725 water projects for 8.4 million people around the world.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}, {
  id: 4,
  menuItem: "Alkhidmat Foundation",
  image: "/image/charity/branch/image4.jpg",
  slogan: "TOP ORGANIZATIONS",
  title: `We’ve funded <strong>10,792</strong> 
    water projects for 
    <strong>4.9 million</strong> people
    around the world.`,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}, {
  id: 5,
  menuItem: "Meem Foundation",
  image: "/image/charity/branch/image5.jpg",
  slogan: "WITH YOUR CARE",
  title: `We’ve funded <strong>10,071</strong> 
    water projects for 
    <strong>3.7 million</strong> people
    around the world.`,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}, {
  id: 6,
  menuItem: "Edhi Foundation",
  image: "/image/charity/branch/image6.jpg",
  slogan: "TOP ORGANIZATIONS",
  title: `We’ve funded <strong>19,792</strong> 
    water projects for 
    <strong>7.9 million</strong> people
    around the world.`,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  linkUrl: "#1",
  linkText: "SEE MORE OF OUR IMPACT"
}];
/* ------------------------------------ */
// Work feature data

/* ------------------------------------ */

const workData = {
  title: "How We Works",
  slogan: "Water is a non-profit organization bringing clean and safe drinking water to people in developing countries",
  features: [{
    id: 1,
    icon: "/image/charity/map-pin.svg",
    title: "We prove every project",
    description: "We track every dollar you raise, and show the projects you helped fund with photos."
  }, {
    id: 2,
    icon: "/image/charity/search-icon.svg",
    title: "We’re an open book",
    description: "We’ve consistently received the highest grades available for accountability."
  }, {
    id: 3,
    icon: "/image/charity/icon-100p.svg",
    title: "100% goes to the field",
    description: "Private donors cover our operating costs so 100% of your money can fund water projects."
  }]
};
/* ------------------------------------ */
// Milestone block data

/* ------------------------------------ */

const milestoneData = {
  title: "OUR FIRST MILESTONE",
  amount: "$4M",
  text: "RAISED TO DATE",
  counterItems: [{
    id: 1,
    amount: "154",
    title: "Successful Project"
  }, {
    id: 2,
    amount: "1534",
    title: "People Impacted"
  }, {
    id: 3,
    amount: "71",
    title: "Supported Country"
  }, {
    id: 4,
    amount: "15k",
    title: "Money Donated"
  }]
};
/* ------------------------------------ */
// Humanity block data

/* ------------------------------------ */
//import humanityGlob from "/image/charity/humanity-glob.png";

const humanityData = {
  image: "/image/charity/humanity-glob.png",
  slogan: "ONLINE SOCIAL FUNDRAISING",
  title: "We need your help to promotr humanity",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  lists: [{
    id: 1,
    text: "Let them drink pure"
  }, {
    id: 2,
    text: "Ensure them medicare"
  }, {
    id: 3,
    text: "create opportunity of education"
  }]
};
/* ------------------------------------ */
// Promotion block data

/* ------------------------------------ */

const promotionData = {
  slogan: "GET YOUR COMMUNITY ON BOARD",
  title: "We are creating a world with basic safety for all.",
  text1: "We exist to permanently end violent conict and exploitation facing our world’s most isolated and unprotected communities.",
  text2: "We partner with local visionaries in volatile conict zones to build community-run initiatives and drive global policy change to end violent conict, save lives, and give communities the safety they deserve.",
  lists: [{
    id: 1,
    text: "Let them drink pure"
  }, {
    id: 2,
    text: "Ensure them medicare"
  }, {
    id: 3,
    text: "create opportunity of education"
  }],
  image: "/image/charity/promotion.svg"
};
/* ------------------------------------ */
// Donation form data

/* ------------------------------------ */

const paymentPolicy = [{
  id: 1,
  title: "One Time",
  value: "oneTime",
  text: "One Time donation given"
}, {
  id: 2,
  title: "Ongoing",
  value: "ongoing",
  text: "Everymonth donation given"
}];
const addCredits = [{
  id: 1,
  title: "Basic",
  value: "Basic",
  text: "PKR 250.00 Credits"
}, {
  id: 2,
  title: "Standard",
  value: "Standard",
  text: "PKR 500.00 Credits"
}];
const currencyOptions = [{
  id: 1,
  value: "usd",
  title: "$ USD"
}, {
  id: 2,
  value: "gbp",
  title: "£ GBP"
}, {
  id: 3,
  value: "cny",
  title: "¥ CNY"
}];
/* ------------------------------------ */
// Blog post data

/* ------------------------------------ */
// import thumb1 from "/image/charity/blog/thumb-1.png";
// import thumb2 from "/image/charity/blog/thumb-2.png";

const posts = [{
  id: 1,
  title: "Uganda Embraces South Sudanese Refugees, For Now",
  excerpt: "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
  thumbUrl: "/image/charity/blog/thumb-1.png",
  btnText: "Learn More ",
  btnUrl: "#1"
}, {
  id: 2,
  title: "BRITs Week 2019 together with O2 is here",
  excerpt: "72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…",
  thumbUrl: "/image/charity/blog/thumb-2.png",
  btnText: "Learn More ",
  btnUrl: "#1"
}];
/* ------------------------------------ */
// Client block data

/* ------------------------------------ */

const clients = [{
  id: 1,
  logo: "/image/charity/clients/1.png",
  name: "windows",
  link: "#1"
}, {
  id: 2,
  logo: "/image/charity/clients/2.png",
  name: "airbnb",
  link: "#2"
}, {
  id: 3,
  logo: "/image/charity/clients/3.png",
  name: "adidas",
  link: "#3"
}, {
  id: 4,
  logo: "/image/charity/clients/4.png",
  name: "ibm",
  link: "#4"
}, {
  id: 5,
  logo: "/image/charity/clients/5.png",
  name: "amazon",
  link: "#5"
}, {
  id: 6,
  logo: "/image/charity/clients/6.png",
  name: "google",
  link: "#6"
}];
/* ------------------------------------ */
// Footer data section

/* ------------------------------------ */

const menuWidgets = [{
  id: 1,
  title: "FUNDRAISE FOR",
  menu: [{
    id: 1,
    text: "Medical",
    link: "#1"
  }, {
    id: 2,
    text: "Emergency",
    link: "#1"
  }, {
    id: 3,
    text: "Memorial",
    link: "#1"
  }, {
    id: 4,
    text: "Education",
    link: "#1"
  }, {
    id: 5,
    text: "Charity",
    link: "#1"
  }, {
    id: 6,
    text: "Nonprofit organization",
    link: "#1"
  }]
}, {
  id: 2,
  title: "LEARN MORE",
  menu: [{
    id: 1,
    text: "How invisiblechildren works",
    link: "#1"
  }, {
    id: 2,
    text: "Pricing and Fees",
    link: "#1"
  }, {
    id: 3,
    text: "Common questions",
    link: "#1"
  }, {
    id: 4,
    text: "Success stories",
    link: "#1"
  }, {
    id: 5,
    text: "Supported countries",
    link: "#1"
  }]
}, {
  id: 3,
  title: "RESOURCES",
  menu: [{
    id: 1,
    text: "Help center",
    link: "#1"
  }, {
    id: 2,
    text: "Blog",
    link: "#1"
  }, {
    id: 3,
    text: "GoFundMe Stories",
    link: "#1"
  }, {
    id: 4,
    text: "Press center",
    link: "#1"
  }, {
    id: 5,
    text: "Careers",
    link: "#1"
  }, {
    id: 6,
    text: "About",
    link: "#1"
  }]
}];
const copyright = [{
  id: 1,
  text: "Privacy Policy",
  link: "1#"
}, {
  id: 2,
  text: "Terms and Conditions",
  link: "1#"
}];





const socialLinks = [{
  id: 1,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_fa_linkedin__WEBPACK_IMPORTED_MODULE_2__["linkedin"]
  }),
  name: "linkedin",
  link: "1#"
}, {
  id: 2,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_fa_facebook__WEBPACK_IMPORTED_MODULE_3__["facebook"]
  }),
  name: "facebook",
  link: "2#"
}, {
  id: 3,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_fa_twitter__WEBPACK_IMPORTED_MODULE_4__["twitter"]
  }),
  name: "twitter",
  link: "3#"
}, {
  id: 4,
  icon: __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    icon: react_icons_kit_fa_github__WEBPACK_IMPORTED_MODULE_5__["github"]
  }),
  name: "github",
  link: "4#"
}];

/***/ }),

/***/ "thJL":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "txJt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharityWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContentWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const footerBg = "/image/charity/footer-bg.png";
const shake = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:translateX(-1px);}50%{transform:translateX(5px);}100%{transform:translateX(0);}"]);
/* Charity global style */

const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`
  body {
    font-family: 'Open Sans', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.heading", "#060F1E")};
    font-family: 'Open Sans', sans-serif;
  }

  section {
    position: relative;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.secondaryText", "#616970")};
  }

  /* Drawer menu style */
  .drawer {
    .drawer-content-wrapper {
      @media only screen and (max-width: 480px) {
        width: 320px !important;
      }

      .reusecore-drawer__close {
        position: absolute;
        top: 20px;
        right: 30px;

        > button {
          box-shadow: 0px 8px 38px 0px rgba(16, 172, 132, 0.5);
          transition: all 0.3s ease;

          svg {
            width: 22px;
            height: 22px;
          }

          &:hover {
            opacity: 0.9;
          }
        }
      }

      .scrollspy__menu {
        padding: 50px 40px;
        max-height: 505px;
        overflow-x: auto;

        @media only screen and (max-width: 480px) {
          padding: 30px 10px;
        }

        @media only screen and (max-width: 320px) {
          max-height: 380px;
        }

        li {
          margin: 35px 0;
          @media only screen and (max-width: 480px) {
            margin: 25px 0;
          }

          &:first-child {
            margin-top: 0;
          }

          &:last-child {
            margin-bottom: 0;
          }

          a {
            display: block;
            color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.heading", "#060F1E")};
            font-size: 18px;
            font-weight: 600;
            transition: all 0.3s ease;
            @media only screen and (max-width: 480px) {
              font-size: 16px;
            }
            &:hover {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.secondary", "#D50032")};
            }
          }

          &.active {
            a {
              color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.secondary", "#D50032")};
              position: relative;
              &:before {
                content: '';
                display: block;
                width: 20px;
                height: 2px;
                border-radius: 5px;
                background-color: ${Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.secondary", "#D50032")};
                position: absolute;
                top: calc(50% - 1px);
                left: -30px;
              }
            }
          }
        }
      }
    }
  }
`;
/* Charity wrapper style */

const CharityWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "charitystyle__CharityWrapper",
  componentId: "sc-1ggtki4-0"
})(["overflow:hidden;display:flex;flex-direction:column;min-height:100vh;background-image:url(", ");background-repeat:no-repeat;background-size:100% 1310px;background-position:bottom center;overflow-x:hidden;.container{@media only screen and (min-width:1220px) and (max-width:1440px){max-width:1170px;}}.navbar{width:100%;position:fixed;left:0;top:0;padding:22px 0;transition:padding 0.2s ease,background-color 0.1s ease;&::before{width:calc(100% - 650px);content:\"\";display:block;height:100%;position:absolute;right:0;top:0;z-index:-1;@media only screen and (max-width:1440px){width:calc(100% - 620px);}@media only screen and (max-width:1360px){width:calc(100% - 500px);}@media only screen and (max-width:991px){display:none;}}}.sticky-nav-active{.navbar{padding:16px 0;background-color:", ";box-shadow:0 0 20px rgba(0,0,0,0.1);&::before{display:none;}.smooth_scroll{color:", ";transition:color 0.3s ease;&:hover{color:", ";}}}}.learn__more-btn{display:inline-flex;align-items:center;font-family:\"Open Sans\",sans-serif;color:", ";font-size:14px;font-weight:700;letter-spacing:0;height:50px;min-width:151px;padding:0 20px;position:relative;@media only screen and (max-width:1360px){font-size:13px;}&::before{content:\"\";display:block;position:absolute;top:0;left:0;height:100%;border-radius:40px;width:72px;background-color:", ";transition:all 0.3s ease-out;}.btn_text{z-index:1;}.hyphen{width:20px;height:2px;margin-right:9px;background-color:", ";transform-origin:50% 50%;z-index:1;}&:hover{&::before{width:100%;}.hyphen{animation:", " 1s linear;}}}.reusecore-drawer__handler{.drawer_btn{border:0;width:80px;height:100px;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;position:fixed;top:0;right:60px;z-index:99999;background-color:", ";transition:background-color 0.2s ease;@media only screen and (max-width:1440px){width:75px;}@media only screen and (max-width:1360px){right:30px;}&:hover{background-color:#3e2672;}&:hover,&:focus{outline:0;}ul{display:grid;grid-template-columns:auto auto auto;grid-gap:5px;height:22px;width:26px;transition:all 0.35s ease;@media only screen and (max-width:1440px){transform:scale(0.9);}@media only screen and (max-width:667px){transform:scale(0.8);}li{width:5px;height:4px;background-color:", ";}}i{font-size:22px;position:absolute;font-weight:900;color:", ";transform:scale(0.1);opacity:0;visibility:hidden;transition:all 0.35s ease;}&.active{ul{opacity:0;transform:scale(0.1);}i{opacity:1;transform:rotate(45deg) scale(1);visibility:visible;}}}}"], footerBg, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.white", "#ffffff"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.heading", "#060F1E"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.text", "#294859"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.heading", "#060F1E"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.primary", "#FCF22B"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.heading", "#060F1E"), shake, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.secondary", "#D50032"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.white", "#ffffff"), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.white", "#ffffff"));
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "charitystyle__ContentWrapper",
  componentId: "sc-1ggtki4-1"
})(["flex:1 0 auto;width:100%;overflow:hidden;"]);


/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uMji":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/src/components/Text/index.js
var Text = __webpack_require__("RytF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./common/src/components/base.js
var base = __webpack_require__("I0Tn");

// CONCATENATED MODULE: ./common/src/components/Link/index.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const LinkWrapper = external_styled_components_default()('a').withConfig({
  displayName: "Link__LinkWrapper",
  componentId: "gszw5l-0"
})({
  textDecoration: 'none'
}, base["a" /* base */], Object(base["b" /* themed */])('Link'));

const Link = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(LinkWrapper, props, children);
};

/* harmony default export */ var components_Link = (Link);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};
// EXTERNAL MODULE: ./common/src/components/Image/index.js
var Image = __webpack_require__("CRF/");

// CONCATENATED MODULE: ./common/src/components/UIElements/Logo/index.js
var Logo_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Logo_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Logo_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Logo_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Logo = (_ref) => {
  let {
    logoWrapperStyle,
    logoStyle,
    titleStyle,
    withAchor,
    anchorProps,
    logoSrc,
    title
  } = _ref,
      props = Logo_objectWithoutProperties(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return Logo_jsx(components_Link, _extends({}, props, logoWrapperStyle), withAchor ? Logo_jsx("a", anchorProps, logoSrc ? Logo_jsx(Image["a" /* default */], _extends({
    src: logoSrc,
    alt: title
  }, logoStyle)) : Logo_jsx(Text["a" /* default */], _extends({
    content: title
  }, titleStyle))) : Logo_jsx(external_react_default.a.Fragment, null, logoSrc ? Logo_jsx(Image["a" /* default */], _extends({
    src: logoSrc,
    alt: title
  }, logoStyle)) : Logo_jsx(Text["a" /* default */], _extends({
    content: title
  }, titleStyle))));
};

Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ var UIElements_Logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "uVoW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CREATE_DONOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CREATE_ORGANIZATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return UPDATE_DONOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return UPDATE_ORGANIZATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CREATE_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CREATE_REVIEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CREATE_DONATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CREATE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UPDATE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return DELETE_PORTFOLIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CREATE_UPDATE; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("txk1");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_DONOR = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createDonor($fields: createDonorInput) {
    createDonor(input: $fields) {
      donor {
        id
      }
    }
  }
`;
const CREATE_ORGANIZATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation CreateOrg($fields: createOrganizationInput) {
    createOrganization(input: $fields) {
      organization {
        id
      }
    }
  }
`;
const REGISTER = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation register($fields: createUserInput) {
    createUser(input: $fields) {
      user {
        id
        role {
          id
          name
        }
      }
    }
  }
`;
const LOGIN = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation login($fields: UsersPermissionsLoginInput!) {
    login(input: $fields) {
      jwt
      user {
        id
      }
    }
  }
`;
const UPDATE_DONOR = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateDonor($fields: updateDonorInput) {
    updateDonor(input: $fields) {
      donor {
        id
        fullName
        profilePicture {
          id
          url
        }
        preferredTags {
          id
          name
          description
        }
        visitedTags {
          id
          name
          description
        }
        user {
          id
          email
          role {
            name
          }
        }
        portfolios {
          id
          organization {
            id
            organizationName
          }
        }
        creditAmount
        mobileNumber
        cnic
      }
    }
  }
`;
const UPDATE_ORGANIZATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updateOrganization($fields: updateOrganizationInput) {
    updateOrganization(input: $fields) {
      organization {
        id
        organizationName
        registrationNumber
        focalPerson
        address
        mobileNumber
        overview
        mission
        user {
          id
          email
          role {
            name
          }
        }
        profilePicture {
          id
          url
        }
        coverImage {
          id
          url
        }

        projects {
          id
        }

        taxExemptionForm {
          id
          url
        }
        registrationCertificate {
          id
          url
        }
      }
    }
  }
`;
const CREATE_PROJECT = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation CreateProject($fields: createProjectInput) {
    createProject(input: $fields) {
      project {
        name
        id
      }
    }
  }
`;
const CREATE_REVIEW = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation CreateReview($fields: createReviewInput) {
    createReview(input: $fields) {
      review {
        rating
        review
        donor {
          fullName
          id
          profilePicture {
            id
            url
          }
        }
      }
    }
  }
`;
const CREATE_DONATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createDonation($field: createDonationInput) {
    createDonation(input: $field) {
      donation {
        id
        amount
      }
    }
  }
`;
const CREATE_PORTFOLIO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createPortfolio($field: createPortfolioInput) {
    createPortfolio(input: $field) {
      portfolio {
        id
        paymentSize
        organization {
          id
          organizationName
        }
      }
    }
  }
`;
const UPDATE_PORTFOLIO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation updatePortfolio($field: updatePortfolioInput) {
    updatePortfolio(input: $field) {
      portfolio {
        id
        paymentSize
        organization {
          id
          organizationName
        }
      }
    }
  }
`;
const DELETE_PORTFOLIO = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation deletePortfolio($fields: deletePortfolioInput) {
    deletePortfolio(input: $fields) {
      portfolio {
        id
      }
    }
  }
`;
const CREATE_UPDATE = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
  mutation createUpdate($field: createUpdateInput) {
    createUpdate(input: $field) {
      update {
        id
      }
    }
  }
`;

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "ugQH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


const NavbarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "navbarstyle__NavbarWrapper",
  componentId: "sc-1t7ubrx-0"
})([".container{padding:0 200px;display:flex;align-items:center;justify-content:space-between;@media only screen and (min-width:1220px) and (max-width:1440px){max-width:1170px !important;}@media only screen and (max-width:1440px){padding:0 30px;}}.logo{max-width:150px;width:100%;}"]);
const MenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "navbarstyle__MenuWrapper",
  componentId: "sc-1t7ubrx-1"
})(["display:flex;align-items:center;@media only screen and (max-width:1440px){padding-right:20px;}@media only screen and (max-width:1360px){padding-right:calc(75px + 20px);}@media only screen and (max-width:1260px){padding-right:calc(75px + 30px);}@media only screen and (max-width:991px){display:none;}a{font-size:16px;font-weight:600;margin-right:46px;color:", ";transition:all 0.25s ease;@media only screen and (max-width:1440px){margin-right:40px;}@media only screen and (max-width:1360px){margin-right:30px;}&:hover{color:", ";}}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'));
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "navbarstyle__Button",
  componentId: "sc-1t7ubrx-2"
})(["border:0;padding:0;min-width:150px;min-height:50px;display:flex;align-items:center;justify-content:center;border-radius:50px;font-size:14px;font-weight:600;cursor:pointer;color:", ";background-color:", ";transition:all 0.3s ease;@media only screen and (max-width:1440px){font-size:15px;}@media only screen and (max-width:1360px){font-size:14px;}&:hover{background-color:", ";}img{margin-left:11px;@media only screen and (max-width:1440px){margin-left:10px;}}&:hover,&:focus{content:0;box-shadow:none;}"], Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.heading', '#060F1E'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primary', '#FCF22B'), Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('colors.primaryHover', '#ECF22F'));
/* harmony default export */ __webpack_exports__["c"] = (NavbarWrapper);

/***/ }),

/***/ "v5c1":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Pets");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "wSzR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Brush");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "y5yV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./common/src/components/UI/Container/style.js

const ContainerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "style__ContainerWrapper",
  componentId: "sc-1gre7ok-0"
})(["margin-left:auto;margin-right:auto;", ";", ";@media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1220px){max-width:", ";width:100%;}@media (max-width:768px){", ";}"], props => props.fullWidth && Object(external_styled_components_["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(external_styled_components_["css"])(["padding-left:0;padding-right:0;"]) || Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]), props => props.width || '1170px', props => props.mobileGutter && Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;"]));
/* harmony default export */ var style = (ContainerWrapper);
// CONCATENATED MODULE: ./common/src/components/UI/Container/index.js
var __jsx = external_react_default.a.createElement;



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  mobileGutter,
  width
}) => {
  // Add all classs to an array
  const addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(style, {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter
  }, children);
};

/* harmony default export */ var UI_Container = __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "yWGN":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocalHospital");

/***/ }),

/***/ "yYDd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("I0Tn");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-6cmitf-0"
})(_base__WEBPACK_IMPORTED_MODULE_3__[/* base */ "a"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('Box'), props => props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])({
  display: 'flex'
}, styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_3__[/* themed */ "b"])('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ })

/******/ });