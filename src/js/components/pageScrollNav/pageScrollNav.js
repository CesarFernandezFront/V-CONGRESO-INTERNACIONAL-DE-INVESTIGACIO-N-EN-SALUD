export function pageScrollNav(contentLinks, sections) {  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionId = current.getAttribute("id");
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    // const NavigationLink = ".navigation a[href*=" + sectionId + "]";
    const NavigationLink = `${contentLinks} a[href*="${sectionId}"]`;

    // if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    //   document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    // } else {
    //   document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    // }

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ?
      document.querySelector(NavigationLink).classList.add("active")
      :
      document.querySelector(NavigationLink).classList.remove("active");
  })
}
