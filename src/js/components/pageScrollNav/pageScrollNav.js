export function pageScrollNav(contentLinks, sections) {  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionId = current.getAttribute("id");
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const NavigationLink = `${contentLinks} a[href*="${sectionId}"]`;

    const linkElement = document.querySelector(NavigationLink);

    if (linkElement) {
      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ?
        linkElement.classList.add("active")
        :
        linkElement.classList.remove("active");
    }
  })
}
