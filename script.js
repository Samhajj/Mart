"use strict";
const button = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const times = document.querySelector(".cancel");
const price = document.querySelector("product-price-preview");
const product1EL = document.querySelector(".product1");
const product2EL = document.querySelector(".product2");
const product3EL = document.querySelector(".product3");
const product4EL = document.querySelector(".product4");
const product5EL = document.querySelector(".product5");
const product6EL = document.querySelector(".product6");
const productPreviewer = document.querySelector(".product-preview");
const previewImage = document.querySelector(".image-preview");

const add = document.querySelector(".fa-plus");
const reduce = document.querySelector(".fa-minus");

overlay.classList.add("hidden");
times.classList.add("hidden");
productPreviewer.style.display = "none";

const dice = Math.trunc(Math.random() * 6) + 1;

// Hides overlay and cancel button
const openOverLay = function () {
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
};

// Reaveals overlay and cancel button

const cancelOverLay = function () {
  overlay.classList.add("hidden");
  times.classList.add("hidden");
  productPreviewer.style.display = "none";
};

// button.addEventListener("click", openOverLay);

times.addEventListener("click", cancelOverLay);
overlay.addEventListener("click", cancelOverLay);

//Hides overlay and cancel button with ESC key

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cancelOverLay();
  }
});

const preferredQuantity = document.querySelector(".preferred-quantity");

add.addEventListener("click", function () {
  preferredQuantity.value++;
});

reduce.addEventListener("click", function () {
  if (preferredQuantity.value > 0) {
    preferredQuantity.value--;
  }
});

product1EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (9).png`;
});

product2EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (1).png`;
});

product3EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (13).png`;
});

product4EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (11).png`;
});

product5EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (7).png`;
});

product6EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (8).png`;
});

console.log(productPreviewer);
