// Nav menu

const btnNavEl = document.querySelector(".btn-mobile-nav");
const navEl = document.querySelector(".nav");

btnNavEl.addEventListener("click", function () {
  navEl.classList.toggle("nav-open");
});
