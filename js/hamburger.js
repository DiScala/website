const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-left");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", (e) => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("active");
  e.stopPropagation(); // prevents immediate closing
});

/* Close menu when clicking outside */
document.addEventListener("click", (event) => {

  if (
    nav.classList.contains("open") &&
    !navbar.contains(event.target)
  ) {
    nav.classList.remove("open");
    hamburger.classList.remove("active");
  }

});