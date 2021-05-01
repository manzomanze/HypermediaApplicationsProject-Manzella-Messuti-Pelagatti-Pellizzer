//Burger NAVBAR
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //[Show - Hide] Navbar links
    nav.classList.toggle("navbar-visible");

    //Burger Animation
    burger.classList.toggle("switch");

    //Link fade animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        setTimeout(() => {
          link.style.animation = "";
        }, 300);
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

navSlide();

//Burger CHAPTERS
const arrow = document.getElementById("arrow");
const capBurger = document.querySelector(".capBurger");
const chapters = document.getElementById("chapters");
const capLinks = document.querySelectorAll("#chapters li");

capBurger.addEventListener("click", () => {
  //[Show - Hide] Navbar links
  chapters.classList.toggle("navbar-invisible");

  //Burger Animation
  arrow.classList.toggle("down-arrow");

  //Link fade animation
  capLinks.forEach((link, index) => {
    if (link.style.animation) {
      setTimeout(() => {
        link.style.animation = "";
      }, 300);
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
});
