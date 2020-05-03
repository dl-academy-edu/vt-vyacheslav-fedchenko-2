var modal = document.querySelector(".modal-bg_js");
var buttonOpen = document.querySelector(".poster__button_js");
var buttonClose = document.querySelector(".form__close_js");
var input = document.querySelector(".form__input_js");

buttonOpen.addEventListener("click", function(){
  modal.classList.remove("modal-bg_close");
  input.focus();
});

buttonClose.addEventListener("click", function(){
  modal.classList.add("modal-bg_close");
  buttonOpen.focus();
});

window.addEventListener("keydown", function(event){
  if(!modal.classList.contains("modal-bg_close") && event.code === "Escape") {
    modal.classList.add("modal-bg_close");
    buttonOpen.focus();
  }
});


var buttonMobileHeader = document.querySelector(".header__mobile-menu_js");
var buttonCloseMobileHeader = document.querySelector(".mobile-header__button-close_js");
var mobileHeader = document.querySelector(".mobile-header");

buttonMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.add("mobile-header_open");
});

buttonCloseMobileHeader.addEventListener("click", function(){
  mobileHeader.classList.remove("mobile-header_open");
});