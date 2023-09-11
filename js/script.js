const hb = document.querySelector(".navigation__hamburger");
const mobileNav = document.querySelector(".navigation__links-wrapper");

hb.addEventListener("click", () => mobileNav.classList.toggle("navigation__links-wrapper--open"));
