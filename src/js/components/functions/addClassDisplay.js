export function addClassDisplay(entry) {
  if (entry.isIntersecting) {
    entry.target.classList.add('display');
  }
}
