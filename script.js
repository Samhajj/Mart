"use strict";
const mainBody = document.querySelector("#products-mart");
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

const cancelPreviewMode = function () {
  mainBody.style.height = `auto`;
  mainBody.style.overflow = `visible`;
};

times.addEventListener("click", cancelOverLay);
times.addEventListener("click", cancelPreviewMode);

overlay.addEventListener("click", cancelOverLay);
overlay.addEventListener("click", cancelPreviewMode);

//Hides overlay and cancel button with ESC key

document.querySelector("body").addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cancelOverLay();
  }
  mainBody.style.height = `auto`;
  mainBody.style.overflow = `visible`;
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
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

product2EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (1).png`;
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

product3EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (13).png`;
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

product4EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (11).png`;
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

product5EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (7).png`;
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

product6EL.addEventListener("click", function () {
  productPreviewer.style.display = "grid";
  overlay.classList.remove("hidden");
  times.classList.remove("hidden");
  previewImage.src = `images/1 (8).png`;
  mainBody.style.height = `110vh`;
  mainBody.style.overflow = `hidden`;
});

console.log(productPreviewer);
