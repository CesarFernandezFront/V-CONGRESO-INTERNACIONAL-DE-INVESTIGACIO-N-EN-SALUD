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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\nconsole.log('I am coming from the app.js file');\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrollDetectExecute/scrollDetectExecute.js */ \"./src/js/components/scrollDetectExecute/scrollDetectExecute.js\");\n/* harmony import */ var _components_functions_externa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/functions/externa.js */ \"./src/js/components/functions/externa.js\");\n/* harmony import */ var _components_functions_addClassDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/functions/addClassDisplay.js */ \"./src/js/components/functions/addClassDisplay.js\");\n/* harmony import */ var _components_functions_toggleActive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/functions/toggleActive.js */ \"./src/js/components/functions/toggleActive.js\");\n/* harmony import */ var _components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/slideFade/slideFade.js */ \"./src/js/components/slideFade/slideFade.js\");\n/* harmony import */ var _components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pageScrollNav/pageScrollNav.js */ \"./src/js/components/pageScrollNav/pageScrollNav.js\");\n// scroll detect\n\n\n\n\nconst boxes = document.querySelectorAll('.box');\n\n// execute functions when scroll detect\n(0,_components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__.scrollDetectExecute)(boxes, _components_functions_externa_js__WEBPACK_IMPORTED_MODULE_1__.externa);\n(0,_components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__.scrollDetectExecute)(boxes, _components_functions_addClassDisplay_js__WEBPACK_IMPORTED_MODULE_2__.addClassDisplay);\n(0,_components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__.scrollDetectExecute)(boxes, _components_functions_toggleActive_js__WEBPACK_IMPORTED_MODULE_3__.toggleActive);\n\n// execute functions when scroll detect\n(0,_components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__.scrollDetectExecute)(boxes, _components_functions_toggleActive_js__WEBPACK_IMPORTED_MODULE_3__.toggleActive);\n\n// Slide fade\n\nconst contentSlideFade = document.querySelectorAll('.slideFade');\n// contentSlideFade ? slideFade(contentSlideFade,2000) : null;\nif (contentSlideFade.length > 0) {\n  (0,_components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_4__.slideFade)(contentSlideFade, 2000);\n}\n\n// Page Scroll Nav\n\nconst sectionsScrollElements = document.querySelectorAll(\".main-content section[id]\");\nconst contentLinks = \".navigation\";\nif (sectionsScrollElements.length > 0) {\n  // window.addEventListener(\"scroll\", pageScrollNav());\n  window.addEventListener(\"scroll\", () => (0,_components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_5__.pageScrollNav)(contentLinks, sectionsScrollElements));\n}\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/functions/addClassDisplay.js":
/*!********************************************************!*\
  !*** ./src/js/components/functions/addClassDisplay.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClassDisplay\": () => (/* binding */ addClassDisplay)\n/* harmony export */ });\nfunction addClassDisplay(entry) {\n  if (entry.isIntersecting) {\n    entry.target.classList.add('display');\n  }\n}\n\n//# sourceURL=webpack:///./src/js/components/functions/addClassDisplay.js?");

/***/ }),

/***/ "./src/js/components/functions/externa.js":
/*!************************************************!*\
  !*** ./src/js/components/functions/externa.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"externa\": () => (/* binding */ externa)\n/* harmony export */ });\nfunction externa(entry) {\n  console.log('entry ============== ', entry);\n  // console.log(`El elemento con texto \"${entry.target.textContent}\" es visible.`);\n}\n\n//# sourceURL=webpack:///./src/js/components/functions/externa.js?");

/***/ }),

/***/ "./src/js/components/functions/toggleActive.js":
/*!*****************************************************!*\
  !*** ./src/js/components/functions/toggleActive.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleActive\": () => (/* binding */ toggleActive)\n/* harmony export */ });\nfunction toggleActive(entry, entries, state) {\n  console.log('state: ', state);\n\n  // if, la condición se evalúa tan pronto como se ejecuta la función. \n  if (state === true) {\n    console.log('Elemento entró: ', entry.target.textContent);\n    entry.target.classList.add('active');\n  } else {\n    console.log('Elemento salió: ', entry.target.textContent);\n    entries.forEach(entrie => {\n      entry.target.classList.remove('active');\n    });\n  }\n\n  // la condición no se evalúa inmediatamente al cargar la función, sino que se evalúa cuando se alcanza esa línea de código dentro de la función\n  // state === true ? entry.target.classList.add('active') : entries.forEach((entry) => entry.target.classList.remove('active'));\n}\n\n//# sourceURL=webpack:///./src/js/components/functions/toggleActive.js?");

/***/ }),

/***/ "./src/js/components/pageScrollNav/pageScrollNav.js":
/*!**********************************************************!*\
  !*** ./src/js/components/pageScrollNav/pageScrollNav.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageScrollNav\": () => (/* binding */ pageScrollNav)\n/* harmony export */ });\nfunction pageScrollNav(contentLinks, sections) {\n  let scrollY = window.pageYOffset;\n  sections.forEach(current => {\n    const sectionId = current.getAttribute(\"id\");\n    const sectionHeight = current.offsetHeight;\n    const sectionTop = current.offsetTop - 50;\n    // const NavigationLink = \".navigation a[href*=\" + sectionId + \"]\";\n    const NavigationLink = `${contentLinks} a[href*=\"${sectionId}\"]`;\n\n    // if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {\n    //   document.querySelector(\".navigation a[href*=\" + sectionId + \"]\").classList.add(\"active\");\n    // } else {\n    //   document.querySelector(\".navigation a[href*=\" + sectionId + \"]\").classList.remove(\"active\");\n    // }\n\n    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? document.querySelector(NavigationLink).classList.add(\"active\") : document.querySelector(NavigationLink).classList.remove(\"active\");\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/pageScrollNav/pageScrollNav.js?");

/***/ }),

/***/ "./src/js/components/scrollDetectExecute/scrollDetectExecute.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/scrollDetectExecute/scrollDetectExecute.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollDetectExecute\": () => (/* binding */ scrollDetectExecute)\n/* harmony export */ });\n/*\n// PASA SOLO EL ELEMENTO ACTIVO - en el viewport\nexport function startObserver(boxes, externaCallback) {\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach((entry) => {\n      // if (entry.isIntersecting) {\n      //   externaCallback(entry);\n      // }\n      entry.isIntersecting ? externaCallback(entry) : 1;\n    });\n  });\n\n  boxes.forEach((box) => {\n    observer.observe(box);\n  });\n}\n*/\n\nfunction scrollDetectExecute(elements, externaCallback) {\n  let state = false;\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n      // if (entry.isIntersecting) {\n      //   // El elemento se volvió visible\n      //   externaCallback(entry,entries,true);\n      //   // console.log(`Elemento ${entry.target.textContent} está en el viewport.`);\n      // }\n      // else {\n      //   // El elemento se volvió invisible\n      //   externaCallback(entry,entries,false);\n      //   // console.log(`Elemento ${entry.target.textContent} salió del viewport.`);\n      // }\n\n      state = entry.isIntersecting ? true : false;\n      externaCallback(entry, entries, state);\n    });\n  });\n  elements.forEach(element => {\n    observer.observe(element);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/scrollDetectExecute/scrollDetectExecute.js?");

/***/ }),

/***/ "./src/js/components/slideFade/slideFade.js":
/*!**************************************************!*\
  !*** ./src/js/components/slideFade/slideFade.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"slideFade\": () => (/* binding */ slideFade)\n/* harmony export */ });\nfunction slideFade(contentSlideFade, timeInterval) {\n  const slides = [...contentSlideFade].map(container => {\n    return [...container.querySelectorAll('li')];\n  }).flat();\n  const pauseButton = contentSlideFade[0].querySelector('.controls');\n  const slideInterval = setInterval(nextSlide, timeInterval);\n  let currentSlide = 0;\n  let playing = true;\n  function nextSlide() {\n    slides[currentSlide].classList.remove('showing');\n    currentSlide = (currentSlide + 1) % slides.length;\n    slides[currentSlide].classList.add('showing');\n  }\n  function pauseSlideshow() {\n    pauseButton.innerHTML = 'Play';\n    playing = false;\n    clearInterval(slideInterval);\n  }\n  function playSlideshow() {\n    pauseButton.innerHTML = 'Pause';\n    playing = true;\n    slideInterval = setInterval(nextSlide, timeInterval);\n  }\n  pauseButton.onclick = function () {\n    playing ? pauseSlideshow() : playSlideshow();\n  };\n}\n\n//# sourceURL=webpack:///./src/js/components/slideFade/slideFade.js?");

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