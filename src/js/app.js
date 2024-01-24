
// scroll detect
import { scrollDetectExecute } from './components/scrollDetectExecute/scrollDetectExecute.js';
import { externa } from './components/functions/externa.js';
import { addClassDisplay } from './components/functions/addClassDisplay.js';
import { toggleActive } from './components/functions/toggleActive.js';

const boxes = document.querySelectorAll('.box');

// execute functions when scroll detect
scrollDetectExecute(boxes, externa);
scrollDetectExecute(boxes, addClassDisplay);
scrollDetectExecute(boxes, toggleActive);

// execute functions when scroll detect
scrollDetectExecute(boxes, toggleActive);

// Slide fade
import { slideFade } from './components/slideFade/slideFade.js';
const contentSlideFade = document.querySelectorAll('.slideFade');
// contentSlideFade ? slideFade(contentSlideFade,2000) : null;
if (contentSlideFade.length > 0) {
  slideFade(contentSlideFade, 2000);
}

// Page Scroll Nav
import { pageScrollNav } from './components/pageScrollNav/pageScrollNav.js';
const sectionsScrollElements = document.querySelectorAll(".main-content section[id]");
const contentLinks = ".navigation";
if (sectionsScrollElements.length > 0) {
  // window.addEventListener("scroll", pageScrollNav());
  window.addEventListener("scroll", () => pageScrollNav(contentLinks, sectionsScrollElements));
}