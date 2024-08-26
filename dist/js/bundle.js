/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");\n\n\n\n//# sourceURL=webpack:///./src/index.js?')},"./src/js/app.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrollDetectExecute/scrollDetectExecute.js */ "./src/js/components/scrollDetectExecute/scrollDetectExecute.js");\n/* harmony import */ var _components_functions_toggleActive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/functions/toggleActive.js */ "./src/js/components/functions/toggleActive.js");\n/* harmony import */ var _utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/toogleStyle.js */ "./src/js/utilities/toogleStyle.js");\n/* harmony import */ var _components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/slideFade/slideFade.js */ "./src/js/components/slideFade/slideFade.js");\n/* harmony import */ var _components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pageScrollNav/pageScrollNav.js */ "./src/js/components/pageScrollNav/pageScrollNav.js");\n// scroll detect\n\n\n\n\n// const boxes = document.querySelectorAll(\'.box\');\n\n// // execute functions when scroll detect\n// scrollDetectExecute(boxes, externa);\n// scrollDetectExecute(boxes, addClassDisplay);\n// scrollDetectExecute(boxes, toggleActive);\n\n// execute functions when scroll detect\nconst logoPath = document.querySelectorAll(\'.logoPath\');\n(0,_components_scrollDetectExecute_scrollDetectExecute_js__WEBPACK_IMPORTED_MODULE_0__.scrollDetectExecute)(logoPath, _components_functions_toggleActive_js__WEBPACK_IMPORTED_MODULE_1__.toggleActive);\n\n// const logoPaths = document.querySelectorAll(\'.logoPath\');\n// const elementsLogoPaths = Array.from(logoPaths);\n\n// elementsLogoPaths.forEach(element => {\n//   toogleStyle(element, \'active\');\n// });\n\n// Slide fade\n\nconst contentSlideFade = document.querySelectorAll(\'.slideFade\');\n// contentSlideFade ? slideFade(contentSlideFade,2000) : null;\nif (contentSlideFade.length > 0) {\n  (0,_components_slideFade_slideFade_js__WEBPACK_IMPORTED_MODULE_3__.slideFade)(contentSlideFade, 6000);\n}\n\n// Page Scroll Nav\n\nconst contentLinks = "#menu";\nconst sectionsScrollElements = document.querySelectorAll(".main section[id]");\nif (sectionsScrollElements.length > 0) {\n  window.addEventListener("scroll", () => (0,_components_pageScrollNav_pageScrollNav_js__WEBPACK_IMPORTED_MODULE_4__.pageScrollNav)(contentLinks, sectionsScrollElements));\n}\ndocument.getElementById("hamburger").onclick = function toggleMenu() {\n  const navToggle = document.querySelectorAll(".toggle");\n  navToggle.forEach(item => {\n    (0,_utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_2__.toogleStyle)(item, "hidden");\n  });\n  const menu = document.getElementById("menu");\n  (0,_utilities_toogleStyle_js__WEBPACK_IMPORTED_MODULE_2__.toogleStyle)(menu, "inline");\n};\n\n// https://docs.google.com/forms/d/e/1FAIpQLSfBKApMQu1LNXUg-uH42fNEVqTalV3wolITpTiuINL86vkPbA/viewform\n\n//# sourceURL=webpack:///./src/js/app.js?')},"./src/js/components/functions/toggleActive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleActive: () => (/* binding */ toggleActive)\n/* harmony export */ });\nfunction toggleActive(entry, entries, state) {\n  state ? entry.target.classList.add('active') : entry.target.classList.remove('active');\n}\n\n//# sourceURL=webpack:///./src/js/components/functions/toggleActive.js?")},"./src/js/components/pageScrollNav/pageScrollNav.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageScrollNav: () => (/* binding */ pageScrollNav)\n/* harmony export */ });\nfunction pageScrollNav(contentLinks, sections) {\n  let scrollY = window.pageYOffset;\n  sections.forEach(current => {\n    const sectionId = current.getAttribute("id");\n    const sectionHeight = current.offsetHeight;\n    const sectionTop = current.offsetTop - 50;\n    const NavigationLink = `${contentLinks} a[href*="${sectionId}"]`;\n    const linkElement = document.querySelector(NavigationLink);\n    if (linkElement) {\n      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? linkElement.classList.add("active") : linkElement.classList.remove("active");\n    }\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/pageScrollNav/pageScrollNav.js?')},"./src/js/components/scrollDetectExecute/scrollDetectExecute.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollDetectExecute: () => (/* binding */ scrollDetectExecute)\n/* harmony export */ });\n/*\r\n// PASA SOLO EL ELEMENTO ACTIVO - en el viewport\r\nexport function startObserver(boxes, externaCallback) {\r\n  const observer = new IntersectionObserver((entries, observer) => {\r\n    entries.forEach((entry) => {\r\n      // if (entry.isIntersecting) {\r\n      //   externaCallback(entry);\r\n      // }\r\n      entry.isIntersecting ? externaCallback(entry) : 1;\r\n    });\r\n  });\r\n\r\n  boxes.forEach((box) => {\r\n    observer.observe(box);\r\n  });\r\n}\r\n*/\n\nfunction scrollDetectExecute(elements, externaCallback) {\n  let state = false;\n  const observer = new IntersectionObserver((entries, observer) => {\n    entries.forEach(entry => {\n      // if (entry.isIntersecting) {\n      //   // El elemento se volvió visible\n      //   externaCallback(entry,entries,true);\n      //   // console.log(`Elemento ${entry.target.textContent} está en el viewport.`);\n      // }\n      // else {\n      //   // El elemento se volvió invisible\n      //   externaCallback(entry,entries,false);\n      //   // console.log(`Elemento ${entry.target.textContent} salió del viewport.`);\n      // }\n\n      state = entry.isIntersecting ? true : false;\n      externaCallback(entry, entries, state);\n    });\n  });\n  elements.forEach(element => {\n    observer.observe(element);\n  });\n}\n\n//# sourceURL=webpack:///./src/js/components/scrollDetectExecute/scrollDetectExecute.js?")},"./src/js/components/slideFade/slideFade.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slideFade: () => (/* binding */ slideFade)\n/* harmony export */ });\n/* harmony import */ var _utilities_toogleStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/toogleStyle */ \"./src/js/utilities/toogleStyle.js\");\n\nfunction slideFade(contentSlideFade, timeInterval) {\n  const slides = [...contentSlideFade].map(container => {\n    return [...container.querySelectorAll('li')];\n  }).flat();\n  const pauseButton = contentSlideFade[0].querySelector('.controls');\n  const slideInterval = setInterval(nextSlide, timeInterval);\n  let currentSlide = 0;\n  let playing = true;\n  function nextSlide() {\n    slides[currentSlide].classList.remove('showing');\n    currentSlide = (currentSlide + 1) % slides.length;\n    slides[currentSlide].classList.add('showing');\n  }\n  function pauseSlideshow() {\n    // pauseButton.innerHTML = 'Play';\n    playing = false;\n    clearInterval(slideInterval);\n  }\n  function playSlideshow() {\n    // pauseButton.innerHTML = 'Pause';\n    playing = true;\n    slideInterval = setInterval(nextSlide, timeInterval);\n  }\n  pauseButton.onclick = function () {\n    (0,_utilities_toogleStyle__WEBPACK_IMPORTED_MODULE_0__.toogleStyle)(this, \"paused\");\n    playing ? pauseSlideshow() : playSlideshow();\n  };\n}\n\n//# sourceURL=webpack:///./src/js/components/slideFade/slideFade.js?")},"./src/js/utilities/toogleStyle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toogleStyle: () => (/* binding */ toogleStyle)\n/* harmony export */ });\nconst toogleStyle = (elemnt, styleClass) => {\n  elemnt.classList.toggle(styleClass);\n};\n\n//# sourceURL=webpack:///./src/js/utilities/toogleStyle.js?")},"./src/css/styles.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/css/styles.css?")}},__webpack_module_cache__={};function __webpack_require__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,n)=>{for(var t in n)__webpack_require__.o(n,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},__webpack_require__.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();