module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0+zk":
/***/ (function(module, exports) {

module.exports = require("apollo-link-rest");

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// EXTERNAL MODULE: external "@redq/reuse-modal"
var reuse_modal_ = __webpack_require__("qbum");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");

// EXTERNAL MODULE: external "next-with-apollo"
var external_next_with_apollo_ = __webpack_require__("ePNP");
var external_next_with_apollo_default = /*#__PURE__*/__webpack_require__.n(external_next_with_apollo_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@apollo/react-ssr"
var react_ssr_ = __webpack_require__("7fVs");

// EXTERNAL MODULE: external "apollo-link-context"
var external_apollo_link_context_ = __webpack_require__("LvlT");

// EXTERNAL MODULE: external "apollo-link"
var external_apollo_link_ = __webpack_require__("vuC2");

// EXTERNAL MODULE: external "apollo-link-http"
var external_apollo_link_http_ = __webpack_require__("TG1l");

// EXTERNAL MODULE: external "apollo-link-rest"
var external_apollo_link_rest_ = __webpack_require__("0+zk");

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// CONCATENATED MODULE: ./theme.js


const theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: {
      main: "#3E2672"
    },
    secondary: {
      main: "#46436E"
    },
    error: {
      main: colors_["amber"].A700
    },
    background: {
      default: "#fff"
    }
  }
});
/* harmony default export */ var theme_0 = (Object(styles_["responsiveFontSizes"])(theme));
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./lib/getToken.js

function getToken() {
  const token = external_js_cookie_default.a.get('token');
  return token;
}
// EXTERNAL MODULE: ./lib/userData.js
var userData = __webpack_require__("DNyS");

// EXTERNAL MODULE: ./lib/queries.js
var queries = __webpack_require__("R9qi");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./lib/cookieChecker.js
var __jsx = external_react_default.a.createElement;






function CookieChecker(props) {
  const user = Object(userData["b" /* useData */])();
  const dispatch = Object(userData["c" /* useDispatchUser */])();
  const token = external_js_cookie_default.a.get("token");
  const router = Object(router_["useRouter"])();
  const {
    0: loggedIn,
    1: setLoginIn
  } = Object(external_react_["useState"])(false);
  const [getData, {
    data
  }] = Object(react_hooks_["useLazyQuery"])(queries["l" /* INITIALIZATION_QUERY */], {
    fetchPolicy: "no-cache"
  });
  const [getDonor, {
    data: donorInfo
  }] = Object(react_hooks_["useLazyQuery"])(queries["a" /* DONOR_INFO */], {
    fetchPolicy: "no-cache"
  });
  const [getOrganization, {
    data: organizationInfo
  }] = Object(react_hooks_["useLazyQuery"])(queries["m" /* ORGANIZATION_INFO */], {
    fetchPolicy: "no-cache"
  });
  Object(external_react_["useEffect"])(() => {
    console.log("called");

    if (user["id"] && token && data) {
      setLoginIn(true);
      console.log("im hereeeeeee"); // if (data.me.role.name == "Donor") {
      //   router.push("/account");
      // }
      // if (data.me.role.name == "Organization") {
      //   router.push("/account_o");
      // }
    }

    if (token && !data) {
      console.log("im here");
      getData();
    }

    if (data && (!donorInfo || !organizationInfo) && !user["id"]) {
      console.log("say hello");
      console.log(data, "data"); // console.log(data.me.id);

      if (data.me.role.name == "Donor") {
        getDonor({
          variables: {
            fields: {
              user: data.me.id
            }
          }
        });
      }

      if (data.me.role.name == "Organization") {
        getOrganization({
          variables: {
            fields: {
              user: data.me.id
            }
          }
        });
      }
    }

    if (!user["id"] && !token) {
      setLoginIn(false); // router.push("/login");
    }

    if (donorInfo && !user["id"]) {
      console.log(donorInfo); //   if (donorInfo["donors"]) {
      //     if (!donorInfo.donors.length) {
      //       router.push("/login");
      //     } else {

      dispatch({
        type: "LOGIN",
        payload: donorInfo.donors[0]
      }); //router.push("/account");
      //     }
      //   } else {
      //     router.push("/login");
      //   }
      // router.push("/");
    }

    if (organizationInfo && !user["id"]) {
      console.log(organizationInfo); //   if (organizationInfo["organizations"]) {
      //     if (!organizationInfo.organizations.length) {
      //       router.push("/login");
      //     } else {
      //       console.log(organizationInfo);

      dispatch({
        type: "LOGIN",
        payload: organizationInfo.organizations[0]
      }); //router.push("/account_o");
      //     }
      //   } else {
      //     router.push("/login");
      //   }
      // router.push("/");
    }
  }, [user, data, donorInfo, organizationInfo, token]);
  return __jsx("div", null, props.childeren);
}
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import React, { Fragment } from "react";
// import { Modal } from "@redq/reuse-modal";
// import "@redq/reuse-modal/es/index.css";
// export default ({ Component, pageProps }) => {
//   return (
//     <Fragment>
//       <Modal />
//       <Component {...pageProps} />
//     </Fragment>
//   );
// };






 // import ApolloClient, { InMemoryCache } from 'apollo-boost';













global.Headers = external_node_fetch_default.a.Headers;
const restLink = new external_apollo_link_rest_["RestLink"]({
  uri: "http://3.16.1.168/",
  credentials: "same-origin"
});
const httpLink = new external_apollo_link_http_["HttpLink"]({
  uri: "http://3.16.1.168/graphql",
  credentials: "same-origin"
});
const authLink = Object(external_apollo_link_context_["setContext"])((_, {
  headers
}) => {
  const token = getToken();
  return {
    headers: _objectSpread(_objectSpread({}, headers), {}, {
      accept: "application/json",
      authorization: token ? `Bearer ${token}` : ""
    })
  };
});

class _app_MyApp extends app_default.a {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps,
      apollo,
      router
    } = this.props;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(styles_["ThemeProvider"], {
      theme: theme_0
    }, _app_jsx(react_hooks_["ApolloProvider"], {
      client: apollo
    }, _app_jsx(userData["a" /* UserProvider */], null, _app_jsx(CookieChecker, null), _app_jsx(reuse_modal_["Modal"], null), _app_jsx(Component, pageProps)))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (external_next_with_apollo_default()(({
  initialState
}) => new client_["ApolloClient"]({
  link: external_apollo_link_["ApolloLink"].from([restLink, authLink, httpLink]),
  cache: new client_["InMemoryCache"]().restore(initialState || {})
}), {
  getDataFromTree: react_ssr_["getDataFromTree"]
})(_app_MyApp));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "LvlT":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

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

/***/ "TG1l":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "qbum":
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vuC2":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });