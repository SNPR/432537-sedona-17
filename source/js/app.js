var navigationList = document.querySelector(".navigation__list");
var navigationControl = document.querySelector(".navigation__control-button");

navigationControl.addEventListener("click", function() {
  navigationControl.classList.toggle("navigation__control-button--hamburger");
  navigationList.classList.toggle("navigation__list--hidden");
});
