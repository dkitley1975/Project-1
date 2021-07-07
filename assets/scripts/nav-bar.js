const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let scrollY = window.pageYOffset;
    sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    )
    {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}

