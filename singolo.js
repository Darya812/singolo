
  const arrowLeft = document.querySelector('.slider__arrow--left');
  const arrowRight = document.querySelector('.slider__arrow--right');
  const sliders = document.querySelector('.sliders');
  const images = document.querySelectorAll('.slider__photo');
  
  let counter = 0;
  images[counter].style.display = 'block';
  
  function left() {
    let nextIndex = counter + 1;
  
    if (nextIndex >= images.length) {
      nextIndex = 0;
    }
  
    const next = images[nextIndex];
    sliders.append(next);
    next.style.display = 'block';
    next.style.animation = 'moveRight 1s';
  
    counter += 1;
    if (counter >= images.length) {
      counter = 0;
    }
  }
  
  function right(){
    let prevIndex = counter - 1;
  
    if (prevIndex < 0) {
      prevIndex = images.length - 1;
    }
  
    const prev = images[prevIndex];
    sliders.append(prev);
    prev.style.display = 'block';
    prev.style.animation = 'moveLeft 1s';
  
    counter -= 1;
    if (counter < 0) {
      counter = images.length - 1;
    }
  }
// ----------------------------


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

//---------scroll-event----------------------------------
function addColorNav(id) {
  resetNavigationState();
  const elem = document.querySelector(id);
  elem.classList.add("nav-event");
}

window.addEventListener("scroll", () => {
  let id;
  let scrollH = window.pageYOffset;
  if (scrollH <= 255) {
    id = "#blockHomeNav";
  }else if (scrollH >= 256 && scrollH < 902) {
    id = "#blockServicesNav";
  } else if (scrollH >= 903 && scrollH < 1553) {
    id = "#blockPortfolioNav";
  } else if (scrollH >= 1554) {
    id = "#blockAboutNav";
  }
  addColorNav(id);
});