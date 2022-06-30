"use strict";

const colorButton = document.querySelector(".header__color-toggle");

colorButton.addEventListener("click", () => {
  document.body.classList.toggle("darkmode");
});
