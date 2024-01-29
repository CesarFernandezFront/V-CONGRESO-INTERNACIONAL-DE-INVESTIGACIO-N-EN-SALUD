export function pageScrollNav(contentLinks, sections) {  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionId = current.getAttribute("id");
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const NavigationLink = `${contentLinks} a[href*="${sectionId}"]`;

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ?
      document.querySelector(NavigationLink).classList.add("active")
      :
      document.querySelector(NavigationLink).classList.remove("active");
  })
}
