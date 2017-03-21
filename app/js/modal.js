"use strict";

var body = document.querySelector("body");
var modal = document.querySelector(".modal-form");
var buttons = document.querySelectorAll("a.btn");

for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.add("modal-form--js");
    body.classList.add("overlay");
  });
}

