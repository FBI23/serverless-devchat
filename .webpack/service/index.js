(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.handler = undefined;\n\nvar _serverlessHttp = __webpack_require__(/*! serverless-http */ \"serverless-http\");\n\nvar _serverlessHttp2 = _interopRequireDefault(_serverlessHttp);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderengine = __webpack_require__(/*! ./middleware/renderengine */ \"./middleware/renderengine.js\");\n\nvar _renderengine2 = _interopRequireDefault(_renderengine);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\napp.use(_renderengine2.default);\n\napp.get(\"/\", function (req, res) {\n  res.send(\"Hello World!\");\n});\n\nvar handler = exports.handler = (0, _serverlessHttp2.default)(app);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./middleware/renderengine.js":
/*!************************************!*\
  !*** ./middleware/renderengine.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\n// import React from \"react\";\n// import ReactDOMServer from \"react-dom/server\";\n// // import our main App component\n// import App from \"../../src/App\";\n// const path = require(\"path\");\n// const fs = require(\"fs\");\n// export default (req, res, next) => {\n//   // point to the html file created by CRA's build tool\n//   const filePath = path.resolve(__dirname, \"..\", \"..\", \"build\", \"index.html\");\n//   fs.readFile(filePath, \"utf8\", (err, htmlData) => {\n//     if (err) {\n//       console.error(\"err\", err);\n//       return res.status(404).end();\n//     }\n//     // render the app as a string\n//     const html = ReactDOMServer.renderToString(<App />);\n//     // inject the rendered app into our html and send it\n//     return res.send(\n//       htmlData.replace('<div id=\"root\"></div>', `<div id=\"root\">${html}</div>`)\n//     );\n//   });\n// };\n\nexports.default = function () {\n  //\n};\n\n//# sourceURL=webpack:///./middleware/renderengine.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "serverless-http":
/*!**********************************!*\
  !*** external "serverless-http" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serverless-http\");\n\n//# sourceURL=webpack:///external_%22serverless-http%22?");

/***/ })

/******/ })));