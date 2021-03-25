const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnhamburger = document.querySelector("#btn-hamburger");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnhamburger.addEventListener("click", () => {
  console.log("Open Hamburger");
  if (header.classList.contains("open")) {
    //Close nav
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((elem) => {
      if (elem.classList.contains("has-fade")) {
        elem.classList.remove("fade-in");
        elem.classList.add("fade-out");
      }
    });
  } else {
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((elem) => {
      elem.classList.add("fade-in");
      elem.classList.remove("fade-out");
    });
  }
});
