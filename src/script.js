"use strict";

//hamburger menu
const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");
const closeBtn = document.getElementById("closeBtn");

const openMenu = function () {
  links.classList.remove("hidden");
};

const closeMenu = function () {
  links.classList.add('hidden')
}

hamburger.addEventListener("click", openMenu);
closeBtn.addEventListener('click', closeMenu)


//Making all the buttons to show 'click' on the console
const btn = document.querySelectorAll(".button");

for (let i = 0; i < btn.length; i++)
  btn[i].addEventListener("click", function () {
    console.log("Button clicked");
  });
