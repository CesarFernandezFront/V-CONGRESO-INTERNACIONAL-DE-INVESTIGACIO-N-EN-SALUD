/*
// PASA SOLO EL ELEMENTO ACTIVO - en el viewport
export function startObserver(boxes, externaCallback) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   externaCallback(entry);
      // }
      entry.isIntersecting ? externaCallback(entry) : 1;
    });
  });

  boxes.forEach((box) => {
    observer.observe(box);
  });
}
*/

export function scrollDetectExecute(elements, externaCallback) {
  let state =false;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      // if (entry.isIntersecting) {
      //   // El elemento se volvió visible
      //   externaCallback(entry,entries,true);
      //   // console.log(`Elemento ${entry.target.textContent} está en el viewport.`);
      // }
      // else {
      //   // El elemento se volvió invisible
      //   externaCallback(entry,entries,false);
      //   // console.log(`Elemento ${entry.target.textContent} salió del viewport.`);
      // }

      state = entry.isIntersecting ? true : false;
      externaCallback(entry,entries,state);
    });
  });

  elements.forEach((element) => {
    observer.observe(element);
  });
}
