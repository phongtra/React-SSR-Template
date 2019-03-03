/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(3);

var _renderer2 = _interopRequireDefault(_renderer);

var _serveFavicon = __webpack_require__(9);

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static("public"));

app.get("/", function (req, res) {
  res.send((0, _renderer2.default)());
});

app.listen(process.env.PORT || 3000);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _Home = __webpack_require__(5);

var _Home2 = _interopRequireDefault(_Home);

var _rendererStyle = __webpack_require__(8);

var _rendererStyle2 = _interopRequireDefault(_rendererStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var content = (0, _server.renderToString)(_react2.default.createElement(_Home2.default, null));
  return "\n    <html>\n      <head>\n        <title>SSR</title>\n        <link rel='shortcut icon' type='image/x-icon' href=\"https://raw.githubusercontent.com/esausilva/react-starter-boilerplate-hmr/master/public/favicon.ico\" />\n        <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"/>\n      </head>\n      <style>\n        " + (0, _rendererStyle2.default)() + "\n      </style>\n      <body>\n        <div id=\"root\">\n          <div class=\"dimmed\">\n            <div class=\"loader\"></div>\n          </div>\n        </div>\n        <script src=\"bundle.js\"></script>\n      </body>\n    </html>\n  ";
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    _semanticUiReact.Container,
    null,
    _react2.default.createElement(
      "div",
      null,
      "I am the best home component"
    ),
    _react2.default.createElement(
      _semanticUiReact.Button,
      { onClick: function onClick() {
          return console.log("click me");
        } },
      "Click me"
    ),
    _react2.default.createElement("img", { src: __webpack_require__(7) })
  );
};

exports.default = Home;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7072c51436e7c5dd9f5409d8eb2956d8.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    body {\n      margin: 0;\n    }\n    .loader {\n      position: absolute;\n      left: 50%;\n      top: 30%;\n      z-index: 1;\n      width: 80px;\n      height: 80px;\n      margin: -75px 0 0 -75px;\n      border: 8px solid #f3f3f3;\n      border-radius: 50%;\n      border-top: 8px solid #020c1c;\n      -webkit-animation: spin 2s linear infinite;\n      animation: spin 2s linear infinite;\n    }\n\n    @-webkit-keyframes spin {\n      0% {\n        -webkit-transform: rotate(0deg);\n      }\n      100% {\n        -webkit-transform: rotate(360deg);\n      }\n    }\n\n    @keyframes spin {\n      0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n    }\n    #root {\n      height: 100%;\n      width: 100%;\n    }\n    .dimmed {\n      height: 100%;\n      width: 100%;\n      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));\n    }\n  ";
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ })
/******/ ]);