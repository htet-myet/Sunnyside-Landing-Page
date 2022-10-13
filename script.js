"use strict";

const ataps = document.querySelectorAll("a");
const menuBtn = document.querySelector(".menu");
const dropDown = document.querySelector(".mobile-dropdown");

menuBtn.addEventListener("click", () => {
  if (!dropDown.classList.contains("active")) {
    dropDown.classList.add("active");
  } else {
    dropDown.classList.toggle("active");
  }
});

ataps.forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
  })
);
