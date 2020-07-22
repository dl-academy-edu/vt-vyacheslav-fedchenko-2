var buttonMobileHeader = document.querySelector(".header__mobile-menu_js");
var buttonCloseMobileHeader = document.querySelector(".mobile-header__button-close_js");
var mobileHeader = document.querySelector(".mobile-header");
var mobileBG = document.querySelector(".header__mobile-overlay");

buttonMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.add("mobile-header_open");
  mobileBG.classList.add("header__mobile-overlay_open");
});

buttonCloseMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.remove("mobile-header_open");
  mobileBG.classList.remove("header__mobile-overlay_open");
});