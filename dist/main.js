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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".textarea {\\n  width: 1024px;\\n  margin: 0 auto;\\n}\\n\\n.keybord {\\n  width: 1024px;\\n  margin: 50px auto;\\n}\\n\\n.line {\\n  display: flex;\\n  justify-content: center;\\n  width: 100%;\\n  margin: 0 auto;\\n}\\n\\n.key {\\n  width: 40px;\\n  height: 40px;\\n  margin: 5px 5px;\\n  border: 1px solid #ccc;\\n  background-color: #6B6894;\\n  border-radius: 5px;\\n  color: white;\\n  cursor: pointer;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 5px 10px;\\n  font-size: 20px;\\n  font-family: Arial, Helvetica, sans-serif;\\n  transition: 0.4s;\\n}\\n.key p {\\n  position: relative;\\n}\\n\\n.key:hover {\\n  background-color: #5B587D !important;\\n}\\n\\n.upper {\\n  position: relative;\\n  display: flex;\\n  left: -10px;\\n  top: -15px;\\n  font-size: 15px;\\n  overflow: hidden;\\n}\\n\\n#functional {\\n  background-color: #484661;\\n  color: #ccc;\\n}\\n\\n#functional:hover {\\n  background-color: #3D3C4F !important;\\n}\\n\\n.backspace {\\n  width: auto;\\n}\\n\\n.tab, .del {\\n  width: 70px;\\n}\\n\\n.caps, .left-shift {\\n  width: 150px;\\n}\\n\\n.enter {\\n  width: 130px;\\n}\\n\\n.ctrl-left, .ctrl-right {\\n  width: 80px;\\n}\\n\\n.space {\\n  width: 400px;\\n  background-color: #6B6894 !important;\\n}\\n\\n.space:hover {\\n  background-color: #5B587D !important;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scss/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scss/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calcLeft.js":
/*!*************************!*\
  !*** ./src/calcLeft.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ calcLeft)\n/* harmony export */ });\nfunction calcLeft() {  \r\n    const upper  = document.querySelectorAll('.upper');\r\n    const lower  = document.querySelectorAll('.lower');\r\n    let left = 0;\r\n    for (let i = 0; i < upper.length; i++) {\r\n        left = upper[i].offsetWidth;\r\n        lower[i].style.right = (left/2) + 'px';\r\n    } \r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/calcLeft.js?");

/***/ }),

/***/ "./src/capsToggle.js":
/*!***************************!*\
  !*** ./src/capsToggle.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ caps)\n/* harmony export */ });\nfunction caps(e, capsLock) {\r\n    let capsDiv = document.querySelector('.caps')\r\n    capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );\r\n    let keys = document.querySelectorAll('.key');\r\n    if(capsLock === true){\r\n        for(let i = 0; i < keys.length; i++) {\r\n            if(keys[i].innerHTML.length === 1){\r\n                keys[i].innerHTML = keys[i].innerHTML.toUpperCase();\r\n            }\r\n        }\r\n        capsDiv.style.backgroundColor = 'blue';\r\n        capsDiv.style.border = '1px solid #blue';\r\n        capsDiv.style.borderRadius = '20px';\r\n    }else{\r\n        for(let i = 0; i < keys.length; i++) {\r\n            if(keys[i].innerHTML.length === 1){\r\n                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();\r\n            }\r\n        }\r\n        capsDiv.style.backgroundColor = '#484661';\r\n        capsDiv.style.border = '1px solid #484661';\r\n        capsDiv.style.borderRadius = '5px';\r\n    };\r\n};\n\n//# sourceURL=webpack://virtual-keyboard/./src/capsToggle.js?");

/***/ }),

/***/ "./src/convertToRussian.js":
/*!*********************************!*\
  !*** ./src/convertToRussian.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ convert)\n/* harmony export */ });\nfunction convert(e){\r\n    const russianLetter = ['й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\\\','ф','ы','в','а','п','р','о','л','д','ж','э','я','ч','с','м','и','т','ь','б','ю','\\.'];\r\n    const englishLetter = ['q','w','e','r','t','y','u','i','o','p','[',']','\\\\','a','s','d','f','g','h','j','k','l','\\;','\\'','z','x','c','v','b','n','m','\\,','\\.','\\/'];\r\n    const upperRus = ['!','\\\"','№','\\;','%','\\:','?','*','(',')','_','+'];\r\n    const upperEng = ['!',\"@\",'#','$','%','^','&','*','(',')','_','+'];\r\n    const keys = document.querySelectorAll('.key');\r\n    const upper = document.querySelectorAll('.upper');\r\n    let j = 0;\r\n    if(keys[15].innerHTML === 'q'){\r\n        localStorage.setItem('lang', 'rus');\r\n        for(let i = 15; i < keys.length; i++) {\r\n            if(keys[i].innerHTML.length === 1){\r\n                if(i > keys.length - 12){\r\n                    continue;\r\n                }\r\n                keys[i].innerHTML = russianLetter[j];\r\n                j++;\r\n            }\r\n        }\r\n    }else{\r\n        localStorage.setItem('lang', 'eng');\r\n        for(let i = 15; i < keys.length; i++) {\r\n            if(keys[i].innerHTML.length === 1){\r\n                if(i > keys.length - 12){\r\n                    continue;\r\n                }\r\n                keys[i].innerHTML = englishLetter[j];\r\n                j++;\r\n            }\r\n        }\r\n    }\r\n    if(localStorage.lang === 'rus'){\r\n        keys[0].innerHTML = '<div class=\"upper\">~</div><div class=\"lower\">ё</div>';\r\n    }else{\r\n        keys[0].innerHTML = '<div class=\"upper\">~</div><p class=\"lower\" style=\"right: 4.5px;\">`</p>';\r\n    }\r\n    let k = 0;\r\n    if(localStorage.lang === 'rus'){\r\n        for(let i = 1; i < 13; i++){\r\n            upper[i].innerHTML = upperRus[k];\r\n            k++;\r\n        }\r\n    }else{\r\n        for(let i = 1; i < 13; i++){\r\n            upper[i].innerHTML = upperEng[k];\r\n            k++;\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/convertToRussian.js?");

/***/ }),

/***/ "./src/createDom.js":
/*!**************************!*\
  !*** ./src/createDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\nfunction create(){\r\n    const body = document.querySelector('body');\r\n    body.innerHTML = `\r\n    <div class=\"textarea\">\r\n    <textarea name=\"textarea\" id=\"textarea\" cols=\"136\" rows=\"17\"></textarea>\r\n</div>\r\n<div class=\"keybord\">\r\n    <div class=\"line\">\r\n        <div class=\"key\"><div class=\"upper\">~</div><p class=\"lower\">\\`</p></div>\r\n        <div class=\"key\"><div class=\"upper\">!</div><p class=\"lower\">1</p></div>\r\n        <div class=\"key\"><div class=\"upper\">@</div><p class=\"lower\">2</p></div>\r\n        <div class=\"key\"><div class=\"upper\">#</div><p class=\"lower\">3</p></div>\r\n        <div class=\"key\"><div class=\"upper\">$</div><p class=\"lower\">4</p></div>\r\n        <div class=\"key\"><div class=\"upper\">%</div><p class=\"lower\">5</p></div>\r\n        <div class=\"key\"><div class=\"upper\">^</div><p class=\"lower\">6</p></div>\r\n        <div class=\"key\"><div class=\"upper\">&</div><p class=\"lower\">7</p></div>\r\n        <div class=\"key\"><div class=\"upper\">*</div><p class=\"lower\">8</p></div>\r\n        <div class=\"key\"><div class=\"upper\">(</div><p class=\"lower\">9</p></div>\r\n        <div class=\"key\"><div class=\"upper\">)</div><p class=\"lower\">0</p></div>\r\n        <div class=\"key\"><div class=\"upper\">&#8212;</div><p class=\"lower\">-</p></div>\r\n        <div class=\"key\"><div class=\"upper\">+</div><p class=\"lower\">=</p></div>\r\n        <div class=\"key backspace\" id=\"functional\">Backspace</div>\r\n    </div>\r\n    <div class=\"line\">\r\n        <div class=\"key tab\" id=\"functional\">Tab</div>\r\n        <div class=\"key\">q</div>\r\n        <div class=\"key\">w</div>\r\n        <div class=\"key\">e</div>\r\n        <div class=\"key\">r</div>\r\n        <div class=\"key\">t</div>\r\n        <div class=\"key\">y</div>\r\n        <div class=\"key\">u</div>\r\n        <div class=\"key\">i</div>\r\n        <div class=\"key\">o</div>\r\n        <div class=\"key\">p</div>\r\n        <div class=\"key\">[</div>\r\n        <div class=\"key\">]</div>\r\n        <div class=\"key\">\\\\</div>\r\n        <div class=\"key del\" id=\"functional\">Del</div>\r\n    </div>\r\n    <div class=\"line\">\r\n        <div class=\"key caps\" id=\"functional\">Caps Lock</div>\r\n        <div class=\"key\">a</div>\r\n        <div class=\"key\">s</div>\r\n        <div class=\"key\">d</div>\r\n        <div class=\"key\">f</div>\r\n        <div class=\"key\">g</div>\r\n        <div class=\"key\">h</div>\r\n        <div class=\"key\">j</div>\r\n        <div class=\"key\">k</div>\r\n        <div class=\"key\">l</div>\r\n        <div class=\"key\">;</div>\r\n        <div class=\"key\">'</div>\r\n        <div class=\"key enter\" id=\"functional\">Enter</div>\r\n    </div>\r\n    <div class=\"line\">\r\n        <div class=\"key left-shift\" id=\"functional\">Shift</div>\r\n        <div class=\"key\">z</div>\r\n        <div class=\"key\">x</div>\r\n        <div class=\"key\">c</div>\r\n        <div class=\"key\">v</div>\r\n        <div class=\"key\">b</div>\r\n        <div class=\"key\">n</div>\r\n        <div class=\"key\">m</div>\r\n        <div class=\"key\">,</div>\r\n        <div class=\"key\">.</div>\r\n        <div class=\"key\">/</div>\r\n        <div class=\"key arr-up\" id=\"functional\">&uarr;</div>\r\n        <div class=\"key right-shift\" id=\"functional\">Shift</div>\r\n    </div>\r\n    <div class=\"line\">\r\n        <div class=\"key ctrl-left\" id=\"functional\">Ctrl</div>\r\n        <div class=\"key win\" id=\"functional\">Win</div>\r\n        <div class=\"key alt-left\" id=\"functional\">Alt</div>\r\n        <div class=\"key space\" id=\"functional\"></div>\r\n        <div class=\"key alt-right\" id=\"functional\">Alt</div>\r\n        <div class=\"key ctrl-right\" id=\"functional\">Ctrl</div>\r\n        <div class=\"key arr-left\" id=\"functional\">&larr;</div>\r\n        <div class=\"key arr-down\" id=\"functional\">&darr;</div>\r\n        <div class=\"key arr-right\" id=\"functional\">&rarr;</div>\r\n    </div>\r\n</div>`;\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/createDom.js?");

/***/ }),

/***/ "./src/functionalTestarea.js":
/*!***********************************!*\
  !*** ./src/functionalTestarea.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ functionalTestarea)\n/* harmony export */ });\nfunction functionalTestarea(e) {\r\n    if(e.code === 'Tab'){\r\n        textarea.innerHTML += '\\t';\r\n        e.preventDefault()\r\n    }\r\n    if(e.code === 'Backspace'){\r\n        textarea.innerHTML = textarea.innerHTML.slice(0, -1);\r\n    }\r\n    if(e.code === 'Delete'){\r\n        textarea.innerHTML = textarea.innerHTML.slice(1);\r\n    }\r\n    if(e.code === 'ArrowLeft'){\r\n        textarea.innerHTML += '&larr;'; \r\n    }\r\n    if(e.code === 'ArrowRight'){\r\n        textarea.innerHTML += '&rarr;';\r\n    }\r\n    if(e.code === 'ArrowUp'){\r\n        textarea.innerHTML += '&uarr;';\r\n    }\r\n    if(e.code === 'ArrowDown'){\r\n        textarea.innerHTML += '&darr;';\r\n    }\r\n    if(e.altKey){\r\n        e.preventDefault();\r\n    }\r\n    if(e.code === 'MetaLeft'){\r\n        e.preventDefault();\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/functionalTestarea.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _calcLeft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calcLeft.js */ \"./src/calcLeft.js\");\n/* harmony import */ var _keyDown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keyDown.js */ \"./src/keyDown.js\");\n/* harmony import */ var _keyUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyUp.js */ \"./src/keyUp.js\");\n/* harmony import */ var _capsToggle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capsToggle.js */ \"./src/capsToggle.js\");\n/* harmony import */ var _shiftToUpper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shiftToUpper.js */ \"./src/shiftToUpper.js\");\n/* harmony import */ var _shiftToLower_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shiftToLower.js */ \"./src/shiftToLower.js\");\n/* harmony import */ var _convertToRussian__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./convertToRussian */ \"./src/convertToRussian.js\");\n/* harmony import */ var _createDom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createDom */ \"./src/createDom.js\");\n/* harmony import */ var _inputTextarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inputTextarea */ \"./src/inputTextarea.js\");\n/* harmony import */ var _functionalTestarea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./functionalTestarea */ \"./src/functionalTestarea.js\");\n/* harmony import */ var _mouseTap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mouseTap */ \"./src/mouseTap.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_createDom__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_calcLeft_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\nif(localStorage.lang === 'rus'){\r\n    (0,_convertToRussian__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n    (0,_calcLeft_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\r\ndocument.addEventListener('keydown', function(e){\r\n    let capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );\r\n    if(e.code === 'CapsLock'){\r\n        (0,_capsToggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e, capsLock);\r\n    };\r\n    (0,_keyDown_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e);\r\n    if(e.altKey && e.shiftKey){\r\n        (0,_convertToRussian__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(e);\r\n        (0,_calcLeft_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    }\r\n    if(!e.altKey && e.code === 'ShiftLeft'){\r\n        (0,_shiftToUpper_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(e,capsLock);\r\n    }\r\n    (0,_functionalTestarea__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(e);\r\n});\r\ndocument.addEventListener('keyup', function(e){\r\n    let capsLock = e.getModifierState && e.getModifierState( 'CapsLock' );\r\n    (0,_keyUp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(e);\r\n    if(!e.altKey && e.code === 'ShiftLeft'){\r\n        (0,_shiftToLower_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(capsLock);\r\n    }\r\n    (0,_calcLeft_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_capsToggle_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(e,capsLock);\r\n});\r\ndocument.addEventListener('keypress', function(e){\r\n    (0,_inputTextarea__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(e);\r\n});\r\nconst lower = document.querySelectorAll('.lower');\r\nconst keys = document.querySelectorAll('.key');\r\nconst textarea = document.querySelector('textarea');\r\nkeys.forEach(key => {\r\n    key.addEventListener('click', e => {\r\n        if(key.innerHTML.length > 10){\r\n            textarea.innerHTML += key.querySelector('.lower').innerHTML;\r\n        }\r\n        else if(key.innerHTML.length === 1){\r\n            textarea.innerHTML += key.innerHTML;\r\n        }else{\r\n            (0,_mouseTap__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(e);\r\n        }\r\n    });\r\n});\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/inputTextarea.js":
/*!******************************!*\
  !*** ./src/inputTextarea.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ inputTextarea)\n/* harmony export */ });\nfunction inputTextarea(e) {\r\n    const textarea = document.querySelector('textarea');\r\n    if(e.code === 'Enter'){\r\n        textarea.innerHTML += '\\n';\r\n    }\r\n    if(e.code !== 'Enter'){\r\n        textarea.innerHTML += e.key;\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/inputTextarea.js?");

/***/ }),

/***/ "./src/keyDown.js":
/*!************************!*\
  !*** ./src/keyDown.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ keyDown)\n/* harmony export */ });\nfunction keyDown(e) {\r\n    const keys = document.querySelectorAll('.key');\r\n    const firstLine = document.querySelectorAll('.lower');\r\n    const leftShift = document.querySelector('.left-shift');\r\n    const rightShift = document.querySelector('.right-shift');\r\n    const controlLeft = document.querySelector('.ctrl-left');\r\n    const controlRight = document.querySelector('.ctrl-right');\r\n    const win = document.querySelector('.win');\r\n    const altLeft = document.querySelector('.alt-left');\r\n    const altRight = document.querySelector('.alt-right');\r\n    const enter = document.querySelector('.enter');\r\n    const del = document.querySelector('.del');\r\n    const backspace = document.querySelector('.backspace');\r\n    const tab = document.querySelector('.tab');\r\n    const space = document.querySelector('.space');\r\n    const arrUp = document.querySelector('.arr-up');\r\n    const arrDown = document.querySelector('.arr-down');\r\n    const arrLeft = document.querySelector('.arr-left');\r\n    const arrRight = document.querySelector('.arr-right');\r\n    for(let i = 0; i < firstLine.length; i++) {\r\n        if(e.key === firstLine[i].innerHTML) {\r\n            animate(keys, i);  \r\n        };     \r\n    };\r\n    for (let i = 0; i < keys.length; i++) {\r\n        if(e.code === 'ShiftLeft'){\r\n            animateFunc(leftShift);\r\n        }\r\n        if(e.code === 'ShiftRight'){\r\n            animateFunc(rightShift);\r\n        }\r\n        if(e.code === 'ControlLeft'){\r\n            animateFunc(controlLeft);\r\n        }\r\n        if(e.code === 'ControlRight'){\r\n            animateFunc(controlRight);\r\n        }\r\n        if(e.code === 'MetaLeft'){\r\n            animateFunc(win);\r\n        }\r\n        if(e.code === 'AltLeft'){\r\n            animateFunc(altLeft);\r\n        }\r\n        if(e.code === 'AltRight'){\r\n            animateFunc(altRight);\r\n        }\r\n        if(e.code === 'Enter'){\r\n            animateFunc(enter);\r\n        }\r\n        if(e.code === 'Delete'){\r\n            animateFunc(del);\r\n        }\r\n        if(e.code === 'Backspace'){\r\n            animateFunc(backspace);\r\n        }\r\n        if(e.code === 'Tab'){\r\n            animateFunc(tab);\r\n        }\r\n        if(e.code === 'Space'){\r\n            animateFunc(space);\r\n        }\r\n        if(e.code === 'ArrowUp'){\r\n            animateFunc(arrUp);\r\n        }\r\n        if(e.code === 'ArrowDown'){\r\n            animateFunc(arrDown);\r\n        }\r\n        if(e.code === 'ArrowLeft'){\r\n            animateFunc(arrLeft);\r\n        }\r\n        if(e.code === 'ArrowRight'){\r\n            animateFunc(arrRight);\r\n        }\r\n        if(e.key === keys[i].innerHTML.toLowerCase() || e.key === keys[i].innerHTML.toUpperCase()) {\r\n            animate(keys, i);\r\n        };\r\n    };\r\n}\r\nfunction animate(keys, i){\r\n    keys[i].style.border = 'solid 1px blue';\r\n    keys[i].style.backgroundColor = 'blue'; \r\n    keys[i].style.borderRadius = '20px';\r\n}\r\nfunction animateFunc(block){\r\n    block.style.backgroundColor = 'blue';\r\n    block.style.border = '1px solid #blue';\r\n    block.style.borderRadius = '20px';\r\n}\r\n\r\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/keyDown.js?");

/***/ }),

/***/ "./src/keyUp.js":
/*!**********************!*\
  !*** ./src/keyUp.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ keyUp)\n/* harmony export */ });\nfunction keyUp(e) {\r\n    const keys = document.querySelectorAll('.key');\r\n    const firstLine = document.querySelectorAll('.lower');\r\n    const leftShift = document.querySelector('.left-shift');\r\n    const rightShift = document.querySelector('.right-shift');\r\n    const controlLeft = document.querySelector('.ctrl-left');\r\n    const controlRight = document.querySelector('.ctrl-right');\r\n    const win = document.querySelector('.win');\r\n    const altLeft = document.querySelector('.alt-left');\r\n    const altRight = document.querySelector('.alt-right');\r\n    const enter = document.querySelector('.enter');\r\n    const del = document.querySelector('.del');\r\n    const backspace = document.querySelector('.backspace');\r\n    const tab = document.querySelector('.tab');\r\n    const space = document.querySelector('.space');\r\n    const arrUp = document.querySelector('.arr-up');\r\n    const arrDown = document.querySelector('.arr-down');\r\n    const arrLeft = document.querySelector('.arr-left');\r\n    const arrRight = document.querySelector('.arr-right');\r\n    for(let i = 0; i < firstLine.length; i++) {\r\n        if(e.key === firstLine[i].innerHTML) {\r\n            animate(keys, i);\r\n        };     \r\n    };\r\n    for (let i = 0; i < keys.length; i++) {\r\n        if(e.code === 'ShiftLeft'){\r\n            animateFunc(leftShift);\r\n        }\r\n        if(e.code === 'ShiftRight'){\r\n            animateFunc(rightShift)\r\n        }\r\n        if(e.code === 'ControlLeft'){\r\n            animateFunc(controlLeft);\r\n        }\r\n        if(e.code === 'ControlRight'){\r\n            animateFunc(controlRight);\r\n        }\r\n        if(e.code === 'MetaLeft'){\r\n            animateFunc(win);\r\n        }\r\n        if(e.code === 'AltLeft'){\r\n            animateFunc(altLeft);\r\n        }\r\n        if(e.code === 'AltRight'){\r\n            animateFunc(altRight);\r\n        }\r\n        if(e.code === 'Enter'){\r\n            animateFunc(enter);\r\n        }\r\n        if(e.code === 'Delete'){\r\n            animateFunc(del);\r\n        }\r\n        if(e.code === 'Backspace'){\r\n            animateFunc(backspace);\r\n        }\r\n        if(e.code === 'Tab'){\r\n            animateFunc(tab);\r\n        }\r\n        if(e.code === 'Space'){\r\n            animateFunc(space);\r\n        }\r\n        if(e.code === 'ArrowUp'){\r\n            animateFunc(arrUp);\r\n        }\r\n        if(e.code === 'ArrowDown'){\r\n            animateFunc(arrDown);\r\n        }\r\n        if(e.code === 'ArrowLeft'){\r\n            animateFunc(arrLeft);\r\n        }\r\n        if(e.code === 'ArrowRight'){\r\n            animateFunc(arrRight);\r\n        }\r\n        if(e.key === keys[i].innerHTML.toLowerCase() || e.key === keys[i].innerHTML.toUpperCase()) {\r\n            animate(keys, i);\r\n        };\r\n    };\r\n}\r\nfunction animate(keys, i){\r\n    keys[i].style.backgroundColor = '#6B6894';\r\n    keys[i].style.border = '1px solid #6B6894';\r\n    keys[i].style.borderRadius = '5px'; \r\n}\r\nfunction animateFunc(block){\r\n    block.style.backgroundColor = '#484661';\r\n    block.style.border = '1px solid #484661';\r\n    block.style.borderRadius = '5px';\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/keyUp.js?");

/***/ }),

/***/ "./src/mouseTap.js":
/*!*************************!*\
  !*** ./src/mouseTap.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mouseTap)\n/* harmony export */ });\nfunction mouseTap(e) {\r\n    if(e.target.innerHTML === 'Tab'){\r\n        textarea.innerHTML += '\\t';\r\n    }\r\n    if(e.target.innerHTML === 'Backspace'){\r\n        textarea.innerHTML = textarea.innerHTML.slice(0, -1);\r\n    }\r\n    if(e.target.innerHTML === 'Delete'){\r\n        textarea.innerHTML = textarea.innerHTML.slice(1);\r\n    }\r\n    if(e.target.innerHTML === 'Enter'){\r\n        textarea.innerHTML += '\\n';\r\n    }\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/mouseTap.js?");

/***/ }),

/***/ "./src/shiftToLower.js":
/*!*****************************!*\
  !*** ./src/shiftToLower.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shiftLow)\n/* harmony export */ });\nfunction shiftLow(caps) {\r\n    const keys = document.querySelectorAll('.key');\r\n    const lower = document.querySelectorAll('.lower');\r\n    const upper = document.querySelectorAll('.upper');\r\n    for(let i = 0; i < keys.length; i++) {        \r\n        if(keys[i].innerHTML.length === 1){\r\n            if(caps === true){\r\n                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();\r\n            }else{\r\n                keys[i].innerHTML = keys[i].innerHTML.toLowerCase();\r\n            }\r\n        };\r\n        if(keys[i].innerHTML === '{'){\r\n            keys[i].innerHTML = '[';\r\n        };\r\n        if(keys[i].innerHTML === '}'){\r\n            keys[i].innerHTML = ']';\r\n        };\r\n        if(keys[i].innerHTML === '|'){\r\n            keys[i].innerHTML = '\\\\';\r\n        };\r\n        if(keys[i].innerHTML === '\\:'){\r\n            keys[i].innerHTML = '\\;';\r\n        };\r\n        if(keys[i].innerHTML === '\\\"'){\r\n            keys[i].innerHTML = '\\'';\r\n        };\r\n        if(keys[i].innerHTML === '&lt;'){\r\n            keys[i].innerHTML = '\\,';\r\n        };\r\n        if(keys[i].innerHTML === '&gt;'){\r\n            keys[i].innerHTML = '\\.';\r\n        }\r\n        if(keys[i].innerHTML === '?'){\r\n            keys[i].innerHTML = '\\/';\r\n        }\r\n    }\r\n    for(let i = 0; i < 13; i++) {\r\n        lower[i].style.display = '';\r\n        upper[i].style.display = '';\r\n        upper[i].style.position = 'relative';\r\n        upper[i].style.fontSize = '15px';\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://virtual-keyboard/./src/shiftToLower.js?");

/***/ }),

/***/ "./src/shiftToUpper.js":
/*!*****************************!*\
  !*** ./src/shiftToUpper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ shiftUp)\n/* harmony export */ });\nfunction shiftUp(e, caps) {\r\n    const keys = document.querySelectorAll('.key');\r\n    const upper = document.querySelectorAll('.upper');\r\n    const lower = document.querySelectorAll('.lower');\r\n    if(e.code === 'ShiftLeft'){\r\n        for(let i = 0; i < keys.length; i++) {        \r\n            if(keys[i].innerHTML.length === 1){\r\n                if(caps === true){\r\n                    keys[i].innerHTML = keys[i].innerHTML.toLowerCase();\r\n                }else{\r\n                    keys[i].innerHTML = keys[i].innerHTML.toUpperCase();\r\n                }\r\n            };\r\n            if(keys[i].innerHTML === '['){\r\n                keys[i].innerHTML = '{';\r\n            };\r\n            if(keys[i].innerHTML === ']'){\r\n                keys[i].innerHTML = '}';\r\n            };\r\n            if(keys[i].innerHTML === '\\\\'){\r\n                keys[i].innerHTML = '|';\r\n            };\r\n            if(keys[i].innerHTML === '\\;'){\r\n                keys[i].innerHTML = '\\:';\r\n            };\r\n            if(keys[i].innerHTML === '\\''){\r\n                keys[i].innerHTML = '\\\"';\r\n            };\r\n            if(keys[i].innerHTML === '\\,'){\r\n                keys[i].innerHTML = '&lt;';\r\n            };\r\n            if(keys[i].innerHTML === '\\.'){\r\n                keys[i].innerHTML = '&gt;';\r\n            }\r\n            if(keys[i].innerHTML === '\\/'){\r\n                keys[i].innerHTML = '?';\r\n            }\r\n        }\r\n        for(let i = 0; i < 13; i++) {\r\n            if(e.repeat){\r\n                continue;\r\n            }else{\r\n                // undoMas.push(keys[i].innerHTML);\r\n                lower[i].style.display = 'none';\r\n                upper[i].style.display = 'flex';\r\n                upper[i].style.position = 'static';\r\n                upper[i].style.fontSize = '20px';\r\n            }\r\n        }\r\n    }\r\n} \n\n//# sourceURL=webpack://virtual-keyboard/./src/shiftToUpper.js?");

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