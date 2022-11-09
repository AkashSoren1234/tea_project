// const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

const date = document.getElementById("date") 
date.innerHTML = new Date().getFullYear();
console.log(date)


const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
