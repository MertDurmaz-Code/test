"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// ------------------

const modal1 = document.querySelector(".modal1");
const overlay1 = document.querySelector(".overlay1");
const btnCloseModal1 = document.querySelector(".close-modal1");
const btnsOpenModal1 = document.querySelectorAll(".show-modal1");

const openModal1 = function () {
  modal1.classList.remove("hidden1");
  overlay1.classList.remove("hidden1");
};

const closeModal1 = function () {
  modal1.classList.add("hidden1");
  overlay1.classList.add("hidden1");
};

for (let i = 0; i < btnsOpenModal1.length; i++)
  btnsOpenModal1[i].addEventListener("click", openModal1);

btnCloseModal1.addEventListener("click", closeModal1);
overlay1.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden1")) {
    closeModal1();
  }
});
