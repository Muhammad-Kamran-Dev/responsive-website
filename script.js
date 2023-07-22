const closeBtn = document.querySelector(".close-nav");
const openBtn = document.querySelector(".open-nav");
const nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
  nav.classList.add("nav-close");
  nav.classList.remove("nav-open");
});
openBtn.addEventListener("click", () => {
  nav.classList.add("nav-open");
  nav.classList.remove("nav-close");
});
