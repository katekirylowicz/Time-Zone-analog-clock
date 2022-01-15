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

/***/ "./src/Scss/styles.scss":
/*!******************************!*\
  !*** ./src/Scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://clock2/./src/Scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scss/styles.scss */ \"./src/Scss/styles.scss\");\n\n\n\nlet hand_seconds = document.querySelector('.hand_seconds');\nlet hand_minutes = document.querySelector('.hand_minutes');\nlet hand_hours = document.querySelector('.hand_hours ');\nconst yourCity = document.querySelector('.choseCity');\n\n\nlet timeZone;\nconst selectCity = document.querySelector('select');\nselectCity.addEventListener(\"onChange\", changeCity);\n\nfunction changeCity() {\n\n    document.querySelector('.choseCity').innerHTML = selectCity.value\n    timeZone = selectCity.value;\n    console.log(timeZone);\n\n    return timeZone;\n};\n\nyourCity.innerHTML = selectCity.value;\n\n\n\nfunction clockRotating() {\n    var data = new Date();\n    var indexSeconds = data.getSeconds();\n    var indexMinutes = data.getMinutes() + indexSeconds / 60;\n    var indexHours = (data.getHours() < 12 ? data.getHours() : (data.getHours() - 12)) + indexMinutes / 60;\n    console.log(indexHours, indexMinutes, indexSeconds);\n\n    hand_seconds.style.transform = (`rotate(${indexSeconds * 6}deg)`);\n    hand_minutes.style.transform = (`rotate(${indexMinutes * 6}deg)`);\n    hand_hours.style.transform = (`rotate(${indexHours * 30}deg)`);\n\n\n}\n\nconst clock = () => {\n    let time = new Date();\n    let seconds = time.getSeconds() < 10 ? \"0\" + time.getSeconds() : time.getSeconds();\n    let minutes = time.getMinutes() < 10 ? \"0\" + time.getMinutes() : time.getMinutes();\n    let hours = time.getHours() < 10 ? \"0\" + time.getHours() : time.getHours();\n\n    document.querySelector('.current-time').innerHTML = (`${hours}:${minutes}:${seconds}`);\n}\n\n//function clockLocale() {\n//let smallClock = moment().format('LTS');\n\n//  console.log(smallClock);\n//}\n//clockLocale();\n\n//function clockRotatingLocale() {\n\n\n//}\n\n\n\nclockRotating();\nclock();\n\nsetInterval(clockRotating, 1000);\nsetInterval(clock, 1000);\n\n//# sourceURL=webpack://clock2/./src/index.js?");

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
/******/ 			// no module.id needed
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