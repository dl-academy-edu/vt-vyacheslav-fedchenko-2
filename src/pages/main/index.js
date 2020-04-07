var modal = document.querySelector(".modal-bg__js");
var buttonOpen = document.querySelector(".poster__button_js");
var buttonClose = document.querySelector(".modal-window__close__js");
var input = document.querySelector(".form-input__js");

buttonOpen.addEventListener("click", function(){
  modal.classList.remove("modal-bg__close");
  input.focus();
});

buttonClose.addEventListener("click", function(){
  modal.classList.add("modal-bg__close");
  buttonOpen.focus();
});

window.addEventListener("keydown", function(event){
  if(!modal.classList.contains("modal-bg__close") && event.code === "Escape") {
    modal.classList.add("modal-bg__close");
    buttonOpen.focus();
  }
});