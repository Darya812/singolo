const blockServicesNav = document.querySelector("#blockServicesNav");
blockServicesNav.addEventListener("click", () => {
  resetNavigationState();
  blockServicesNav.classList.add("nav-event");
});

const blockPortfolioNav = document.querySelector("#blockPortfolioNav");
blockPortfolioNav.addEventListener("click", () => {
  resetNavigationState();
  blockPortfolioNav.classList.add("nav-event");
});

const blockHomeNav = document.querySelector("#blockHomeNav");
blockHomeNav.addEventListener("click", () => {
  resetNavigationState();
  blockHomeNav.classList.add("nav-event");
});

const blockAboutNav = document.querySelector("#blockAboutNav");
blockAboutNav.addEventListener("click", () => {
  resetNavigationState();
  blockAboutNav.classList.add("nav-event");
});

const blockContactNav = document.querySelector("#blockContactNav");
blockContactNav.addEventListener("click", () => {
  resetNavigationState();
  blockContactNav.classList.add("nav-event");
});

function resetNavigationState() {
  blockServicesNav.classList.remove("nav-event");
  blockPortfolioNav.classList.remove("nav-event");
  blockContactNav.classList.remove("nav-event");
  blockAboutNav.classList.remove("nav-event");
  blockHomeNav.classList.remove("nav-event");
}

/*-------------portfolio tab----------change place img----------------------------------------------------------*/

const picture = document.querySelector("#first-picture");
const tabPortfolioAll = document.querySelector("#tabPortfolioAll");
tabPortfolioAll.addEventListener("click", () => {
  resetPortfolioState();
  tabPortfolioAll.classList.add("portfolio-event");
  picture.classList.toggle("change-place");
});

const tabPortfolioWebDesign = document.querySelector("#tabPortfolioWebDesign");
tabPortfolioWebDesign.addEventListener("click", () => {
  resetPortfolioState();
  tabPortfolioWebDesign.classList.add("portfolio-event");
  picture.classList.toggle("change-place");
});

const tabPortfolioGraphicDesign = document.querySelector(
  "#tabPortfolioGraphicDesign"
);
tabPortfolioGraphicDesign.addEventListener("click", () => {
  resetPortfolioState();
  tabPortfolioGraphicDesign.classList.add("portfolio-event");
  picture.classList.toggle("change-place");
});

const tabPortfolioArtwork = document.querySelector("#tabPortfolioArtwork");
tabPortfolioArtwork.addEventListener("click", () => {
  resetPortfolioState();
  tabPortfolioArtwork.classList.add("portfolio-event");
  picture.classList.toggle("change-place");
});

function resetPortfolioState() {
  tabPortfolioAll.classList.remove("portfolio-event");
  tabPortfolioWebDesign.classList.remove("portfolio-event");
  tabPortfolioGraphicDesign.classList.remove("portfolio-event");
  tabPortfolioArtwork.classList.remove("portfolio-event");
}

/*------------menu burger---------------------------------------------------------------------------------*/


const burgerMenu = document.querySelector("#body");
function openMenu() {
  burgerMenu.classList.toggle("active");
}


const blockHomeNavBurger = document.querySelector("#blockHomeNavBurger");
blockHomeNavBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  
});

const blockServicesNavBurger = document.querySelector("#blockServicesNavBurger");
blockServicesNavBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  
});

const blockPortfolioNavBurger = document.querySelector("#blockPortfolioNavBurger");
blockPortfolioNavBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  
});

const blockAboutNavBurger = document.querySelector("#blockAboutNavBurger");
blockAboutNavBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  
});

const blockContactNavBurger = document.querySelector("#blockContactNavBurger");
blockContactNavBurger.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  
});