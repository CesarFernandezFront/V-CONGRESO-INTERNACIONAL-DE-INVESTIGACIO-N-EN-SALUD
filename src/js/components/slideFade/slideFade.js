import { toogleStyle } from "../../utilities/toogleStyle";

export function slideFade(contentSlideFade, timeInterval) {
  const slides = [...contentSlideFade].map(container => {
    return [...container.querySelectorAll('li')];
  }).flat();
  const pauseButton = contentSlideFade[0].querySelector('.controls');
  const slideInterval = setInterval(nextSlide,timeInterval);

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
    slideInterval = setInterval(nextSlide,timeInterval);
  }
  
  pauseButton.onclick = function() {
    toogleStyle(this, "paused")
    playing ? pauseSlideshow() : playSlideshow();
  }
}
