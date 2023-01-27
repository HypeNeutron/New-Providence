//# Plans-----------------------------------
const $st = (st) => document.querySelector(st);
const $id = (id) => document.getElementById(id);

const individual = $id("individual");
const company = $id("company");
const switchSlide = $st(".switch");

const cardPro = $st(".plan__card--pro");
const cardCenterPro = $st(".plan__card--pro .plan__cardCenter");
const btnPro = $st(".plan__card--pro .btn--blue");

const cardInd = $st(".plan__card--individual");
const cardCenterInd = $st(".plan__card--individual .plan__cardCenter");
const btnInd = $st(".plan__card--individual .btn--blue");

// # Function Animate
// add and remove class
const removeActive = (ele) => ele.classList.remove("active");
const addActive = (ele) => ele.classList.add("active");

const expandIndividual = () => {
  cardInd.style.transform = "translate(0) scale(1.08)";
  cardPro.style.transform = "translate(0) scale(1)";
};
const expandPro = (translatePro, translateInd) => {
  cardPro.style.transform = `translate(${translatePro}) scale(1.08)`;
  cardInd.style.transform = `translate(${translateInd}) scale(1)`;
};

// switchInd
const switchIndividual = () => {
  removeActive(switchSlide);
  addActive(cardInd);
  addActive(cardCenterInd);
  addActive(btnInd);

  removeActive(cardPro);
  removeActive(cardCenterPro);
  removeActive(btnPro);
};

// switchPro
const switchPro = () => {
  addActive(switchSlide);
  addActive(cardPro);
  addActive(cardCenterPro);
  addActive(btnPro);

  removeActive(cardInd);
  removeActive(cardCenterInd);
  removeActive(btnInd);
};

const clickIndividual = () => {
  individual.addEventListener("click", () => {
    expandIndividual();
    switchIndividual();
  });
};

const clickPro = (translatePro, translateInd) => {
  company.addEventListener("click", () => {
    expandPro(translatePro, translateInd);
    switchPro();
  });
};

const matchScreen = window.matchMedia("(min-width:1089px)");

const handleDeviceChange = (e) => {
  if (e.matches || matchScreen.matches) {
    clickIndividual();
    clickPro("-330px", "300px");
  } else {
    clickIndividual();
    clickPro(0, 0);
  }
};

window.addEventListener("load", handleDeviceChange);
matchScreen.addEventListener("change", handleDeviceChange);
