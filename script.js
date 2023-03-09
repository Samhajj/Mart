"use strict";
const button = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const times = document.querySelector(".times");
const product6EL = document.querySelector(".product6");
const productPreviewer = document.querySelector("#product-preview");
const add = document.querySelector(".fa-plus");
const reduce = document.querySelector(".fa-minus");

overlay.classList.add("hidden");
times.classList.add("hidden");
// productPreviewer.style.display = "none";
productPreviewer.classList.add("hidden");

const openOverLay = function () {
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
};

const cancelOverLay = function () {
  overlay.classList.add("hidden");
  times.classList.add("hidden");
};

button.addEventListener("click", openOverLay);

times.addEventListener("click", cancelOverLay);

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cancelOverLay();
  }
});

add.addEventListener("click", function () {
  document.querySelector(".product-preferred-quantity").value++;
});

reduce.addEventListener("click", function () {
  if (document.querySelector(".product-preferred-quantity").value > 0) {
    document.querySelector(".product-preferred-quantity").value--;
  }
});
