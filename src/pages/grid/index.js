var buttonMobileHeader = document.querySelector(".header__mobile-menu_js");
var buttonCloseMobileHeader = document.querySelector(".mobile-header__button-close_js");
var mobileHeader = document.querySelector(".mobile-header");
var mobileBG = document.querySelector(".header__mobile-bg");

buttonMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.add("mobile-header_open");
});

buttonCloseMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.remove("mobile-header_open");
});

buttonMobileHeader.addEventListener("click", function(){
  mobileBG.classList.add("header__mobile-bg_open");
});

buttonCloseMobileHeader.addEventListener("click", function(){
  mobileBG.classList.remove("header__mobile-bg_open");
});