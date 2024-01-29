/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/utilities/toogleStyle.js
const toogleStyle = (elemnt, styleClass) => {
  elemnt.classList.toggle(styleClass);
};
;// CONCATENATED MODULE: ./src/js/components/slideFade/slideFade.js

function slideFade(contentSlideFade, timeInterval) {
  const slides = [...contentSlideFade].map(container => {
    return [...container.querySelectorAll('li')];
  }).flat();
  const pauseButton = contentSlideFade[0].querySelector('.controls');
  const slideInterval = setInterval(nextSlide, timeInterval);
  let currentSlide = 0;
  let playing = true;
  function nextSlide() {
    slides[currentSlide].classList.remove('showing');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('showing');
  }
  function pauseSlideshow() {
    // pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
  }
  function playSlideshow() {
    // pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, timeInterval);
  }
  pauseButton.onclick = function () {
    toogleStyle(this, "paused");
    playing ? pauseSlideshow() : playSlideshow();
  };
}
;// CONCATENATED MODULE: ./src/js/components/pageScrollNav/pageScrollNav.js
function pageScrollNav(contentLinks, sections) {
  let scrollY = window.pageYOffset;
  sections.forEach(current => {
    const sectionId = current.getAttribute("id");
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const NavigationLink = `${contentLinks} a[href*="${sectionId}"]`;
    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ? document.querySelector(NavigationLink).classList.add("active") : document.querySelector(NavigationLink).classList.remove("active");
  });
}
;// CONCATENATED MODULE: ./src/js/app.js
// scroll detect
// import { scrollDetectExecute } from './components/scrollDetectExecute/scrollDetectExecute.js';
// import { externa } from './components/functions/externa.js';
// import { addClassDisplay } from './components/functions/addClassDisplay.js';
// import { toggleActive } from './components/functions/toggleActive.js';


// const boxes = document.querySelectorAll('.box');

// // execute functions when scroll detect
// scrollDetectExecute(boxes, externa);
// scrollDetectExecute(boxes, addClassDisplay);
// scrollDetectExecute(boxes, toggleActive);

// // execute functions when scroll detect
// scrollDetectExecute(boxes, toggleActive);

// Slide fade

const contentSlideFade = document.querySelectorAll('.slideFade');
// contentSlideFade ? slideFade(contentSlideFade,2000) : null;
if (contentSlideFade.length > 0) {
  slideFade(contentSlideFade, 6000);
}

// Page Scroll Nav

const contentLinks = "#menu";
const sectionsScrollElements = document.querySelectorAll(".main section[id]");
if (sectionsScrollElements.length > 0) {
  window.addEventListener("scroll", () => pageScrollNav(contentLinks, sectionsScrollElements));
}
document.getElementById("hamburger").onclick = function toggleMenu() {
  const navToggle = document.querySelectorAll(".toggle");
  navToggle.forEach(item => {
    toogleStyle(item, "hidden");
  });
  const menu = document.getElementById("menu");
  toogleStyle(menu, "inline");
};
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;