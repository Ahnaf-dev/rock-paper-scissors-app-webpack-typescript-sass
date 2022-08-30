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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1 {\\n  color: #14163a;\\n}\\n\\nbody {\\n  font-family: \\\"Barlow Semi Condensed\\\", sans-serif;\\n  font-size: 1.8rem;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\np {\\n  color: #dddddd;\\n}\\n\\n.display-header__text {\\n  font-size: 3.3rem;\\n}\\n\\n.display-header__display__text {\\n  font-size: 4.4rem;\\n  color: #14163a;\\n}\\n.display-header__display__text--hl {\\n  font-size: 1.2rem;\\n  letter-spacing: 0.2rem;\\n  color: hsl(229deg, 64%, 46%);\\n}\\n\\nbody {\\n  background: radial-gradient(hsl(214deg, 47%, 23%), hsl(237deg, 49%, 15%));\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 100vh;\\n  position: relative;\\n  z-index: 1;\\n}\\n\\nheader {\\n  padding: 2rem;\\n}\\n\\n.container {\\n  margin: 0 auto;\\n}\\n\\n.display-header {\\n  padding: 2rem;\\n  border: 5px solid hsl(217deg, 16%, 45%);\\n  border-radius: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n  max-width: 90rem;\\n  margin-bottom: 2rem;\\n}\\n.display-header .display-header__display {\\n  width: 10rem;\\n  padding: 1rem;\\n  text-align: center;\\n  background-color: #dddddd;\\n}\\n\\n.game-section {\\n  padding: 2rem;\\n}\\n\\n.game__body {\\n  position: relative;\\n  margin: auto;\\n  max-width: 30rem;\\n  width: 100%;\\n  height: 300px;\\n}\\n@media only screen and (min-width: 900px) {\\n  .game__body {\\n    max-width: 40rem;\\n    height: 40rem;\\n  }\\n}\\n.game__body-triangle {\\n  position: absolute;\\n  width: 100%;\\n  left: 0;\\n}\\n@media only screen and (min-width: 600px) {\\n  .game__body-triangle {\\n    bottom: 0;\\n    height: 100%;\\n  }\\n}\\n.game__body__lg-circle {\\n  position: absolute;\\n  width: 12rem;\\n  height: 12rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  transition: all 0.7s ease-in-out;\\n}\\n.game__body__lg-circle:hover {\\n  opacity: 0.8;\\n}\\n@media only screen and (min-width: 600px) {\\n  .game__body__lg-circle {\\n    width: 15rem;\\n    height: 15rem;\\n  }\\n  .game__body__lg-circle:hover {\\n    transform: scale(1.3);\\n    opacity: 1;\\n  }\\n}\\n.game__body__sm-circle {\\n  border-radius: 50%;\\n  width: 8rem;\\n  height: 8rem;\\n  background-color: #dddddd;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n@media only screen and (min-width: 600px) {\\n  .game__body__sm-circle {\\n    width: 12rem;\\n    height: 12rem;\\n  }\\n}\\n.game__body__lg-circle--rock {\\n  background-color: #546ff5;\\n  bottom: 0;\\n  left: 30%;\\n}\\n.game__body__lg-circle--paper {\\n  background-color: #eca013;\\n  top: -2.6rem;\\n  right: -3rem;\\n}\\n.game__body__lg-circle--scissor {\\n  background-color: #dd3d5b;\\n  top: -2.6rem;\\n  left: -3rem;\\n}\\n\\n.rules {\\n  position: fixed;\\n  bottom: 30%;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  color: #dddddd;\\n  letter-spacing: 2px;\\n  padding: 1rem 2rem;\\n  border: 2px solid #dddddd;\\n  display: inline;\\n  border-radius: 0.5rem;\\n  cursor: pointer;\\n}\\n@media only screen and (min-width: 600px) {\\n  .rules {\\n    left: 90%;\\n  }\\n}\\n.rules:hover {\\n  background-color: #dddddd;\\n  color: #14163a;\\n}\\n\\n.rules-overlay.show {\\n  clip-path: circle(100% at 50% 50%);\\n}\\n\\n.rules-overlay {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: #eee;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 2rem;\\n  clip-path: circle(0 at 50% 50%);\\n  transition: all 0.5s ease-out;\\n  z-index: 999;\\n  pointer-events: all;\\n}\\n@media only screen and (min-width: 600px) {\\n  .rules-overlay {\\n    width: 50rem;\\n    height: 50rem;\\n    left: 50%;\\n    top: 50%;\\n    transform: translate(-50%, -50%);\\n  }\\n}\\n.rules-overlay h2 {\\n  color: #14163a;\\n  margin-bottom: 5rem;\\n}\\n.rules-overlay img {\\n  margin-bottom: 10rem;\\n}\\n@media only screen and (min-width: 600px) {\\n  .rules-overlay img {\\n    margin-bottom: 5rem;\\n  }\\n}\\n.rules-overlay .close-overlay {\\n  position: absolute;\\n  cursor: pointer;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  bottom: 40%;\\n}\\n@media only screen and (min-width: 600px) {\\n  .rules-overlay .close-overlay {\\n    bottom: 0;\\n  }\\n}\\n\\nspan.picked-message {\\n  display: none;\\n  color: white;\\n  position: absolute;\\n  opacity: 0.4;\\n  top: -20%;\\n}\\n\\nspan.picked-message.show {\\n  display: block;\\n}\\n\\n.game__body__lg-circle__right {\\n  top: 0;\\n  left: auto;\\n  right: 0;\\n  opacity: 0;\\n  visibility: hidden;\\n}\\n@media only screen and (min-width: 600px) {\\n  .game__body__lg-circle__right:hover {\\n    opacity: 0;\\n  }\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .game__body__lg-circle__user-2 {\\n    left: -100px !important;\\n  }\\n}\\n\\n.game__body__lg-circle__right-comp {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n@media only screen and (min-width: 600px) {\\n  .game__body__lg-circle__right-comp {\\n    opacity: 1;\\n    right: -100px !important;\\n  }\\n}\\n.game__body__lg-circle__right-comp:hover {\\n  opacity: 1;\\n}\\n\\n.game__body__lg-circle__user {\\n  top: 0;\\n  left: 0;\\n}\\n\\n.game__body-triangle.hide {\\n  display: none;\\n}\\n\\n.game__body-lg-circle__won span {\\n  color: goldenrod;\\n}\\n\\n@media only screen and (min-width: 600px) {\\n  .game__body-lg-circle__won {\\n    transform: scale(1.3);\\n    animation-name: pulse;\\n    animation-duration: 1s;\\n    animation-fill-mode: forwards;\\n    animation-delay: 0.8s;\\n    animation-timing-function: ease-in-out;\\n  }\\n  .game__body-lg-circle__won span {\\n    color: rgb(252, 183, 10);\\n  }\\n  @keyframes pulse {\\n    0% {\\n      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.08), 0 0 0 40px rgba(255, 255, 255, 0.02);\\n    }\\n    100% {\\n      box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.08), 0 0 0 90px rgba(255, 255, 255, 0.02);\\n    }\\n  }\\n}\\n.grey-bg {\\n  display: none;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  width: 14rem;\\n  height: 14rem;\\n  border-radius: 50%;\\n  background-color: #14163a;\\n}\\n\\n.grey-bg.show {\\n  display: block;\\n}\\n\\n.play-again.show {\\n  top: 20rem;\\n  opacity: 1;\\n}\\n\\n.play-again {\\n  transition: all 0.7s ease-in-out;\\n  position: absolute;\\n  top: 15rem;\\n  opacity: 0;\\n  left: 50%;\\n  transform: translateX(-50%);\\n  text-align: center;\\n}\\n.play-again span {\\n  font-weight: bold;\\n  color: #dddddd;\\n  font-size: 4rem;\\n  margin-bottom: 2rem;\\n}\\n.play-again a.reset {\\n  background-color: transparent;\\n  color: #dddddd;\\n}\\n.play-again a {\\n  display: block;\\n  text-decoration: none;\\n  margin-bottom: 1rem;\\n  padding: 1rem;\\n  background-color: #dddddd;\\n  color: #14163a;\\n  border-radius: 0.5rem;\\n  border: 2px solid #dddddd;\\n  transition: all 0.7s ease-in-out;\\n}\\n.play-again a:hover {\\n  transform: scale(1.2);\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rock-paper-scissors-master/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n\r\n// query selectors\r\nvar toggleOverlay = document.querySelector(\".rules\");\r\nvar closeOverlay = document.querySelector(\".close-overlay\");\r\nvar overlay = document.querySelector(\".rules-overlay\");\r\nvar rpsCircles = document.querySelectorAll(\".game__body__lg-circle\");\r\nvar displayScore = document.querySelector(\".display-header__display__text\");\r\nvar playAgain = document.querySelector(\".play-again .play\");\r\nvar playAgainText = document.querySelector(\".play-again span\");\r\nvar gameBody = document.querySelector(\".game__body\");\r\nvar resetScore = document.querySelector(\".reset\");\r\n// Game State\r\nvar score = 0;\r\nvar sendDataToInitGame = function (e) { return initGame(e); };\r\n// logic for game\r\nrpsCircles.forEach(function (circle) {\r\n    circle.addEventListener(\"click\", sendDataToInitGame);\r\n});\r\nplayAgain.addEventListener(\"click\", resetGame);\r\nresetScore.addEventListener(\"click\", function () {\r\n    score = 0;\r\n    displayScore.innerHTML = \"\".concat(score);\r\n});\r\nfunction initGame(target) {\r\n    // elem target\r\n    var pickedElem = target.currentTarget;\r\n    // so users don't use eventlisteners more than once per round\r\n    rpsCircles.forEach(function (circle) {\r\n        circle.removeEventListener(\"click\", sendDataToInitGame);\r\n    });\r\n    // functional logic for game\r\n    if (pickedElem instanceof HTMLElement) {\r\n        var pickedValue = pickedElem.dataset.rps;\r\n        computeWinner(pickedValue);\r\n        pickedElem.classList.add(\"chosen\");\r\n    }\r\n}\r\nfunction computeWinner(userValue) {\r\n    // getting user, comp and unchosen values\r\n    var rps = [\"r\", \"p\", \"s\"];\r\n    var remainingRPS = rps.filter(function (letter) { return letter !== userValue; });\r\n    var compValue = remainingRPS[Math.floor(Math.random() * 2)];\r\n    remainingRPS = rps.filter(function (letter) { return letter !== userValue && letter !== compValue; });\r\n    var unchosenValue = remainingRPS[0];\r\n    // setting styles for animation\r\n    determineWinner(userValue, compValue, unchosenValue);\r\n}\r\nfunction determineWinner(user, comp, unchosen) {\r\n    // variable for alerting user whether they won or lost\r\n    var result;\r\n    // showing styles logic\r\n    var userElem = document.querySelector(\"[data-rps=\\\"\".concat(user, \"\\\"]\"));\r\n    var userElemSpan = document.querySelector(\"[data-rps=\\\"\".concat(user, \"\\\"] span\"));\r\n    var compElem = document.querySelector(\"[data-rps=\\\"\".concat(comp, \"\\\"]\"));\r\n    var compElemSpan = document.querySelector(\"[data-rps=\\\"\".concat(comp, \"\\\"] span\"));\r\n    var unchosenElem = document.querySelector(\"[data-rps=\\\"\".concat(unchosen, \"\\\"]\"));\r\n    document.querySelector(\".game__body-triangle\").classList.add(\"hide\");\r\n    userElemSpan.innerHTML = \"YOU PICKED\";\r\n    userElemSpan.classList.add(\"show\");\r\n    compElemSpan.innerHTML = \"COMP PICKED\";\r\n    compElemSpan.classList.add(\"show\");\r\n    setTimeout(function () {\r\n        document.querySelector(\".grey-bg\").classList.add(\"show\");\r\n        userElem.classList.add(\"game__body__lg-circle__user\");\r\n        compElem.classList.add(\"game__body__lg-circle__right\");\r\n        unchosenElem.classList.add(\"game__body__lg-circle__right\");\r\n    }, 100);\r\n    // determining winner and loser logic\r\n    var computedValue = user + comp;\r\n    switch (computedValue) {\r\n        case \"sp\":\r\n        case \"rs\":\r\n        case \"pr\":\r\n            userElem.classList.add(\"game__body-lg-circle__won\");\r\n            result = \"You Won!\";\r\n            score++;\r\n            break;\r\n        case \"ps\":\r\n        case \"sr\":\r\n        case \"rp\":\r\n            compElem.classList.add(\"game__body-lg-circle__won\");\r\n            result = \"You Lost!\";\r\n            score--;\r\n            break;\r\n    }\r\n    setTimeout(function () {\r\n        document.querySelector(\".grey-bg\").classList.remove(\"show\");\r\n        playAgain.parentElement.classList.add(\"show\");\r\n        playAgainText.innerHTML = result;\r\n        userElem.classList.add(\"game__body__lg-circle__user-2\");\r\n        compElem.classList.add(\"game__body__lg-circle__right-comp\");\r\n        displayScore.innerHTML = \"\".concat(score);\r\n        // userElem.style.left = \"-100px\";\r\n        // compElem.style.right = \"-100px\";\r\n    }, 1000);\r\n}\r\n// logic for rules overlay\r\ntoggleOverlay.addEventListener(\"click\", function (e) {\r\n    overlay.classList.toggle(\"show\");\r\n});\r\ncloseOverlay.addEventListener(\"click\", function () {\r\n    overlay.classList.toggle(\"show\");\r\n});\r\n// game reset\r\nfunction resetGame() {\r\n    gameBody.innerHTML = \" <img\\n  class=\\\"game__body-triangle\\\"\\n  src=\\\"./images/bg-triangle.svg\\\"\\n  alt=\\\"background of traingle\\\"\\n/>\\n<div\\n  data-rps=\\\"r\\\"\\n  class=\\\"game__body__lg-circle game__body__lg-circle--rock\\\"\\n>\\n  <span class=\\\"picked-message\\\"></span>\\n  <div class=\\\"game__body__sm-circle\\\">\\n    <img src=\\\"./images/icon-rock.svg\\\" alt=\\\"logo of rock\\\" />\\n  </div>\\n</div>\\n<div\\n  data-rps=\\\"p\\\"\\n  class=\\\"game__body__lg-circle game__body__lg-circle--paper\\\"\\n>\\n  <span class=\\\"picked-message\\\"></span>\\n\\n  <div class=\\\"game__body__sm-circle\\\">\\n    <img src=\\\"./images/icon-paper.svg\\\" alt=\\\"logo of paper\\\" />\\n  </div>\\n</div>\\n<div\\n  data-rps=\\\"s\\\"\\n  class=\\\"game__body__lg-circle game__body__lg-circle--scissor\\\"\\n>\\n  <span class=\\\"picked-message\\\"></span>\\n  <div class=\\\"game__body__sm-circle\\\">\\n    <img src=\\\"./images/icon-scissors.svg\\\" alt=\\\"logo of scissor\\\" />\\n  </div>\\n</div>\\n<div class=\\\"grey-bg\\\"></div>\\n<div class=\\\"play-again\\\">\\n  <span></span>\\n  <a class='play' href=\\\"#\\\">Play Again</a>\\n  <a class=\\\"reset\\\" href=\\\"#\\\">Reset Score</a>\\n\\n</div>\";\r\n    rpsCircles = document.querySelectorAll(\".game__body__lg-circle\");\r\n    playAgain = document.querySelector(\".play-again .play\");\r\n    playAgainText = document.querySelector(\".play-again span\");\r\n    gameBody = document.querySelector(\".game__body\");\r\n    resetScore = document.querySelector(\".reset\");\r\n    resetScore.addEventListener(\"click\", function () {\r\n        score = 0;\r\n        displayScore.innerHTML = \"\".concat(score);\r\n    });\r\n    rpsCircles = document.querySelectorAll(\".game__body__lg-circle\");\r\n    rpsCircles.forEach(function (circle) {\r\n        circle.addEventListener(\"click\", sendDataToInitGame);\r\n    });\r\n    playAgain.addEventListener(\"click\", resetGame);\r\n}\r\n\n\n//# sourceURL=webpack://rock-paper-scissors-master/./src/index.ts?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;