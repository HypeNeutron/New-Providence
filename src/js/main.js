const $st = (st) => document.querySelector(st);
const $id = (id) => document.getElementById(id);

//# Nav-------------------------------
const nav = $st("nav");
const navContainer = $st(".navContainer");

const navToggle = (h, bg, boxShadow, pd) => {
  nav.style.height = h;
  nav.style.background = bg;
  nav.style.boxShadow = boxShadow;
  navContainer.style.padding = pd;
};

const scrollBar = () => {
  window.scrollY === 0
    ? navToggle("140px", "transparent", "none", "6rem 0")
    : navToggle("109px", "white", "0 1px 10px rgba(0, 0, 0, 0.15)", "4rem 0");
};

window.addEventListener("scroll", scrollBar);
window.addEventListener("DOMContentLoaded", scrollBar);

//# WOWjs-------------------------------
new WOW({
  boxClass: "wow",
  animateClass: "animate__animated",
  offset: 0,
  mobile: true,
  live: true,
  scrollContainer: null,
}).init();

//# Sidebar-------------------------------
const sidebar = $st(".sidebar");
const sidebarClose = $st(".sidebar__close");
const navigateSidebar = $id("navigation");

navigateSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

sidebarClose.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
