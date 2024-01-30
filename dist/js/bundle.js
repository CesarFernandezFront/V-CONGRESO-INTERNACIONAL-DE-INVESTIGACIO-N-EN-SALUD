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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities/toogleStyle.js */ \"./src/js/utilities/toogleStyle.js\");\n/* harmony import */ var _components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slideFade/slideFade.js */ \"./src/js/components/slideFade/slideFade.js\");\n/* harmony import */ var _components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pageScrollNav/pageScrollNav.js */ \"./src/js/components/pageScrollNav/pageScrollNav.js\");\n// scroll detect\n// import { scrollDetectExecute } from './components/scrollDetectExecute/scrollDetectExecute.js';\n// import { externa } from './components/functions/externa.js';\n// import { addClassDisplay } from './components/functions/addClassDisplay.js';\n// import { toggleActive } from './components/functions/toggleActive.js';\n\n\n// const boxes = document.querySelectorAll('.box');\n\n// // execute functions when scroll detect\n// scrollDetectExecute(boxes, externa);\n// scrollDetectExecute(boxes, addClassDisplay);\n// scrollDetectExecute(boxes, toggleActive);\n\n// // execute functions when scroll detect\n// scrollDetectExecute(boxes, toggleActive);\n\n// Slide fade\n\nconst contentSlideFade = document.querySelectorAll('.slideFade');\n// contentSlideFade ? slideFade(contentSlideFade,2000) : null;\nif (contentSlideFade.length > 0) {\n  (0,_components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_1__.slideFade)(contentSlideFade, 6000);\n}\n\n// Page Scroll Nav\n\nconst contentLinks = \"#menu\";\nconst sectionsScrollElements = document.querySelectorAll(\".main section[id]\");\nif (sectionsScrollElements.length > 0) {\n  window.addEventListener(\"scroll\", () => (0,_components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_2__.pageScrollNav)(contentLinks, sectionsScrollElements));\n}\ndocument.getElementById(\"hamburger\").onclick = function toggleMenu() {\n  const navToggle = document.querySelectorAll(\".toggle\");\n  navToggle.forEach(item => {\n    (0,_utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_0__.toogleStyle)(item, \"hidden\");\n  });\n  const menu = document.getElementById(\"menu\");\n  (0,_utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_0__.toogleStyle)(menu, \"inline\");\n};\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/pageScrollNav/pageScrollNav.js":
/*!**********************************************************!*\
  !*** ./src/js/components/pageScrollNav/pageScrollNav.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageScrollNav: () => (/* binding */ pageScrollNav)\n/* harmony export */ });\nfunction pageScrollNav(contentLinks, sections) {\n  let scrollY = window.pageYOffset;\n  sections.forEach(current => {\n    const sectionId = current.getAttribute(\"id\");\n    const sectionHeight = current.offsetHeight;\n    const sectionTop = current.offsetTop - 50;\n    const NavigationLink = `${contentLinks} a[href*=\"${sectionId}\"]`;\n    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? document.querySelector(NavigationLink).classList.add(\"active\") : document.querySelector(NavigationLink).classList.remove(\"active\");\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/pageScrollNav/pageScrollNav.js?");

/***/ }),

/***/ "./src/js/components/slideFade/slideFade.js":
/*!**************************************************!*\
  !*** ./src/js/components/slideFade/slideFade.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideFade: () => (/* binding */ slideFade)\n/* harmony export */ });\n/* harmony import */ var _utilities_toogleStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/toogleStyle */ \"./src/js/utilities/toogleStyle.js\");\n\nfunction slideFade(contentSlideFade, timeInterval) {\n  const slides = [...contentSlideFade].map(container => {\n    return [...container.querySelectorAll('li')];\n  }).flat();\n  const pauseButton = contentSlideFade[0].querySelector('.controls');\n  const slideInterval = setInterval(nextSlide, timeInterval);\n  let currentSlide = 0;\n  let playing = true;\n  function nextSlide() {\n    slides[currentSlide].classList.remove('showing');\n    currentSlide = (currentSlide + 1) % slides.length;\n    slides[currentSlide].classList.add('showing');\n  }\n  function pauseSlideshow() {\n    // pauseButton.innerHTML = 'Play';\n    playing = false;\n    clearInterval(slideInterval);\n  }\n  function playSlideshow() {\n    // pauseButton.innerHTML = 'Pause';\n    playing = true;\n    slideInterval = setInterval(nextSlide, timeInterval);\n  }\n  pauseButton.onclick = function () {\n    (0,_utilities_toogleStyle__WEBPACK_IMPORTED_MODULE_0__.toogleStyle)(this, \"paused\");\n    playing ? pauseSlideshow() : playSlideshow();\n  };\n}\n\n//# sourceURL=webpack:///./src/js/components/slideFade/slideFade.js?");

/***/ }),

/***/ "./src/js/utilities/toogleStyle.js":
/*!*****************************************!*\
  !*** ./src/js/utilities/toogleStyle.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toogleStyle: () => (/* binding */ toogleStyle)\n/* harmony export */ });\nconst toogleStyle = (elemnt, styleClass) => {\n  elemnt.classList.toggle(styleClass);\n};\n\n//# sourceURL=webpack:///./src/js/utilities/toogleStyle.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/styles.css?");

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