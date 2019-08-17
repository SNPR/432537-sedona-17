var navigationList = document.querySelector(".navigation__list");
var navigationControl = document.querySelector(".navigation__control-button");
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 768) {
  if (navigationControl) {
    navigationControl.classList.remove("navigation__control-button--nojs");
    navigationControl.classList.add("navigation__control-button--hamburger");
  }

  if (navigationList) {
    navigationList.classList.add("navigation__list--hidden");
  }

  navigationControl.addEventListener("click", function() {
    navigationControl.classList.toggle("navigation__control-button--hamburger");
    navigationList.classList.toggle("navigation__list--hidden");
  });
}
