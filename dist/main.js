/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header {\\n  width: 80%;\\n  margin: 2% 10% 11px 10%;\\n  display: -ms-grid;\\n  display: grid;\\n  -ms-grid-columns: (auto)[12];\\n      grid-template-columns: repeat(12, auto);\\n  -ms-grid-rows: auto;\\n      grid-template-rows: auto;\\n}\\n\\n.header .logo {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 2;\\n  grid-column: 1 / span 2;\\n  margin: 15px 0px 0px 5px;\\n}\\n\\n.header .inner-header {\\n  grid-column: auto;\\n  font-weight: 400;\\n  opacity: 75%;\\n  text-decoration: none;\\n  margin: 15px 0px 0px 5px;\\n}\\n\\n.header .inner-header:hover {\\n  -webkit-text-decoration: underline solid #ff7d1a 4px;\\n          text-decoration: underline solid #ff7d1a 4px;\\n  text-underline-offset: 30px;\\n}\\n\\n.header .shopping-cart {\\n  -ms-grid-column: 11;\\n  -ms-grid-column-span: 1;\\n  grid-column: 11 / span 1;\\n  width: 0%;\\n  height: 0%;\\n  text-align: right;\\n  margin: 15px 0px 0px 5px;\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.header .shopping-cart:hover {\\n  cursor: pointer;\\n}\\n\\n.header .shopping-cart:before {\\n  content: attr(data);\\n  font-size: 12px;\\n  font-weight: 600;\\n  position: absolute;\\n  top: -10px;\\n  right: -10px;\\n  background: #ff7d1a;\\n  padding: 0px 3px;\\n  height: 15px;\\n  min-width: 15px;\\n  color: white;\\n  text-align: center;\\n  border-radius: 24px;\\n  -webkit-border-radius: 24px;\\n  -moz-border-radius: 24px;\\n  -ms-border-radius: 24px;\\n  -o-border-radius: 24px;\\n}\\n\\n.header .profile-picture {\\n  -ms-grid-column: 12;\\n  -ms-grid-column-span: 1;\\n  grid-column: 12 / span 1;\\n  text-align: right;\\n  width: 0%;\\n  height: 0%;\\n}\\n\\n.header .profile-picture img {\\n  height: 45px;\\n  width: 45px;\\n  margin: 0px 0px 5px 0px;\\n}\\n\\n.header .profile-picture img:hover {\\n  border: 2px solid #ff7d1a;\\n  border-radius: 50%;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  -ms-border-radius: 50%;\\n  -o-border-radius: 50%;\\n}\\n\\nhr {\\n  width: 80%;\\n  margin: 0% 10% 4% 10%;\\n  border: 0.5px solid #f7f8fd;\\n}\\n\\n.dropdown {\\n  position: relative;\\n  display: inline-block;\\n}\\n\\n.dropdown-content {\\n  display: none;\\n  margin-left: 250px;\\n  margin-top: -70px;\\n  position: absolute;\\n  background-color: white;\\n  width: 350px;\\n  -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  border-radius: 8px;\\n  z-index: 1;\\n}\\n\\n.dropdown-content .item-header {\\n  border-radius: 8px;\\n  -webkit-border-radius: 8px;\\n  -moz-border-radius: 8px;\\n  -ms-border-radius: 8px;\\n  -o-border-radius: 8px;\\n  margin: 10px 20px;\\n  font-size: 20px;\\n}\\n\\n.dropdown-content .inner-content {\\n  display: -ms-grid;\\n  display: grid;\\n  -ms-grid-columns: (auto)[6];\\n      grid-template-columns: repeat(6, auto);\\n  -ms-grid-rows: (auto)[2];\\n      grid-template-rows: repeat(2, auto);\\n}\\n\\n.dropdown-content .inner-content .item-image {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 1;\\n  grid-column: 1 / span 1;\\n  grid-row: auto;\\n  height: 50px;\\n  width: 50px;\\n  margin-top: 10px;\\n  margin-left: 20px;\\n  margin-right: 10px;\\n  border-radius: 8px;\\n  -webkit-border-radius: 8px;\\n  -moz-border-radius: 8px;\\n  -ms-border-radius: 8px;\\n  -o-border-radius: 8px;\\n}\\n\\n.dropdown-content .inner-content .item-name {\\n  -ms-grid-column: 2;\\n  -ms-grid-column-span: 4;\\n  grid-column: 2 / span 4;\\n  grid-row: auto;\\n  padding-top: 10px;\\n  font-weight: 200;\\n  font-size: 18px;\\n}\\n\\n.dropdown-content .inner-content .item-name2 {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 6;\\n  grid-column: 1 / span 6;\\n  padding: 20px;\\n  font-weight: bold;\\n  margin: 20px;\\n  text-align: center;\\n  font-size: 20px;\\n  color: #b6bcc8;\\n}\\n\\n.dropdown-content .inner-content .item-price {\\n  font-weight: 700;\\n}\\n\\n.dropdown-content .inner-content .item-icon {\\n  -ms-grid-column: 6;\\n  -ms-grid-column-span: 1;\\n  grid-column: 6 / span 1;\\n  grid-row: auto;\\n  margin: 25px 10px;\\n}\\n\\n.dropdown-content .inner-content .item-icon:hover {\\n  cursor: pointer;\\n}\\n\\n.dropdown-content .inner-content .item-button {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 6;\\n  grid-column: 1 / span 6;\\n  grid-row: auto;\\n  font-weight: bold;\\n  width: 80%;\\n  height: 40px;\\n  margin: 5% 10%;\\n  background-color: #ff7d1a;\\n  color: white;\\n  border: none;\\n  border-radius: 8px;\\n  -webkit-border-radius: 8px;\\n  -moz-border-radius: 8px;\\n  -ms-border-radius: 8px;\\n  -o-border-radius: 8px;\\n}\\n\\n.dropdown-content .inner-content .item-button:hover {\\n  cursor: pointer;\\n}\\n\\n.show {\\n  display: block;\\n}\\n\\n.container {\\n  display: -ms-grid;\\n  display: grid;\\n  -ms-grid-columns: (auto)[9];\\n      grid-template-columns: repeat(9, auto);\\n  -ms-grid-rows: (auto)[5];\\n      grid-template-rows: repeat(5, auto);\\n  width: 70%;\\n  margin: 0% 15% 1% 15%;\\n  row-gap: 15px;\\n  -webkit-column-gap: 20px;\\n          column-gap: 20px;\\n}\\n\\n.container-1 {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 4;\\n  grid-column: 1 / span 4;\\n  -ms-grid-row: 1;\\n  -ms-grid-row-span: 5;\\n  grid-row: 1/ span 5;\\n  display: -ms-grid;\\n  display: grid;\\n  row-gap: 10px;\\n  -webkit-column-gap: 5px;\\n          column-gap: 5px;\\n}\\n\\n.container-1 img {\\n  border-radius: 10px;\\n  -webkit-border-radius: 10px;\\n  -moz-border-radius: 10px;\\n  -ms-border-radius: 10px;\\n  -o-border-radius: 10px;\\n}\\n\\n.container-1 img:hover, .container-1 img:focus {\\n  cursor: pointer;\\n  opacity: 0.5;\\n  border: 3px solid #ff7d1a;\\n}\\n\\n.container-1 .img {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 4;\\n  grid-column: 1 / span 4;\\n  -ms-grid-row: 1;\\n  -ms-grid-row-span: 4;\\n  grid-row: 1 / span 4;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.container-1 .img:hover {\\n  cursor: auto;\\n  opacity: 1;\\n  border: none;\\n}\\n\\n.container-1 .img-1 {\\n  -ms-grid-column: 1;\\n  -ms-grid-column-span: 1;\\n  grid-column: 1 / span 1;\\n  -ms-grid-row: 5;\\n  -ms-grid-row-span: 1;\\n  grid-row: 5 / span 1;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.container-1 .img-2 {\\n  -ms-grid-column: 2;\\n  -ms-grid-column-span: 1;\\n  grid-column: 2 / span 1;\\n  -ms-grid-row: 5;\\n  -ms-grid-row-span: 1;\\n  grid-row: 5 / span 1;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.container-1 .img-3 {\\n  -ms-grid-column: 3;\\n  -ms-grid-column-span: 1;\\n  grid-column: 3 / span 1;\\n  -ms-grid-row: 5;\\n  -ms-grid-row-span: 1;\\n  grid-row: 5 / span 1;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.container-1 .img-4 {\\n  -ms-grid-column: 4;\\n  -ms-grid-column-span: 1;\\n  grid-column: 4 / span 1;\\n  -ms-grid-row: 5;\\n  -ms-grid-row-span: 1;\\n  grid-row: 5 / span 1;\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.container-2 {\\n  -ms-grid-column: 6;\\n  -ms-grid-column-span: 4;\\n  grid-column: 6 / span 4;\\n  -ms-grid-row: 1;\\n  -ms-grid-row-span: 5;\\n  grid-row: 1 / span 5;\\n}\\n\\n.container-2 .header-2 {\\n  color: #ff7d1a;\\n  font-size: 14px;\\n  font-weight: bold;\\n  text-transform: uppercase;\\n  margin: 5px 0px;\\n}\\n\\n.container-2 .title {\\n  font-weight: bold;\\n  font-size: 50px;\\n  margin: 10px 0px;\\n}\\n\\n.container-2 .para {\\n  margin: 30px 0px;\\n  padding: 0px 45px 0px 0px;\\n  opacity: 0.6;\\n  font-weight: bold;\\n}\\n\\n.container-2 .price {\\n  font-weight: bold;\\n  font-size: 30px;\\n  margin-bottom: 10px;\\n}\\n\\n.container-2 .discount {\\n  display: inline-block;\\n  color: #ff7d1a;\\n  background-color: #ffede0;\\n  padding: 5px;\\n  border-radius: 8px;\\n  transform: translate(6px, -6px);\\n  -webkit-transform: translate(6px, -6px);\\n  -moz-transform: translate(6px, -6px);\\n  -ms-transform: translate(6px, -6px);\\n  -o-transform: translate(6px, -6px);\\n  -webkit-border-radius: 8px;\\n  -moz-border-radius: 8px;\\n  -ms-border-radius: 8px;\\n  -o-border-radius: 8px;\\n}\\n\\n.container-2 .before-discount {\\n  opacity: 50%;\\n  font-weight: bold;\\n  font-size: small;\\n  text-decoration: line-through;\\n  -webkit-text-decoration-color: #666666;\\n          text-decoration-color: #666666;\\n  -moz-text-decoration-color: #666666;\\n}\\n\\n.container-2 form {\\n  padding-top: 6%;\\n}\\n\\n.container-2 form .value-button {\\n  display: inline-block;\\n  border: 1px solid #ddd;\\n  width: 40px;\\n  height: 40px;\\n  text-align: center;\\n  vertical-align: middle;\\n  background-color: #f7f8fd;\\n  font-weight: bolder;\\n  font-size: 18px;\\n  border: none;\\n  color: #ff7d1a;\\n}\\n\\n.container-2 form .value-button:hover {\\n  cursor: pointer;\\n}\\n\\n.container-2 form #decrease {\\n  margin-right: -5px;\\n  padding-top: 8px;\\n  border-radius: 8px 0 0 8px;\\n  -webkit-border-radius: 8px 0 0 8px;\\n  -moz-border-radius: 8px 0 0 8px;\\n  -ms-border-radius: 8px 0 0 8px;\\n  -o-border-radius: 8px 0 0 8px;\\n}\\n\\n.container-2 form #increase {\\n  margin-left: -5px;\\n  padding-top: 8px;\\n  border-radius: 0 8px 8px 0;\\n  -webkit-border-radius: 0 8px 8px 0;\\n  -moz-border-radius: 0 8px 8px 0;\\n  -ms-border-radius: 0 8px 8px 0;\\n  -o-border-radius: 0 8px 8px 0;\\n}\\n\\n.container-2 form #number {\\n  text-align: center;\\n  vertical-align: middle;\\n  border: none;\\n  width: 40px;\\n  height: 40px;\\n  background-color: #f7f8fd;\\n  font-weight: bolder;\\n}\\n\\n.container-2 form .button {\\n  margin-left: 10px;\\n  font-weight: bold;\\n  width: 50%;\\n  height: 40px;\\n  background-color: #ff7d1a;\\n  color: white;\\n  border: none;\\n  border-radius: 8px;\\n  -webkit-border-radius: 8px;\\n  -moz-border-radius: 8px;\\n  -ms-border-radius: 8px;\\n  -o-border-radius: 8px;\\n}\\n\\n.container-2 form .button:hover {\\n  cursor: pointer;\\n  opacity: 0.5;\\n}\\n\\n.container-2 form .button .cart-img {\\n  color: white;\\n  width: 14px;\\n  height: 14px;\\n  margin-right: 10px;\\n}\\n\\n* {\\n  margin: 0px;\\n  padding: 0px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  font-size: 16px;\\n  font-family: 'Barlow Semi Condensed', sans-serif;\\n  font-family: 'Cinzel', serif;\\n  font-family: 'Cormorant Garamond', serif;\\n  font-family: 'Kumbh Sans', sans-serif;\\n  font-family: 'Rubik', sans-serif;\\n  color: black;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./styles/main.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ecommerce-product-page-main/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\nconsole.log(\"Hello\");\r\n\n\n//# sourceURL=webpack://ecommerce-product-page-main/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;