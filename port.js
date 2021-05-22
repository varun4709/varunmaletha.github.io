const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('.logo .nav .nav-line li');

 hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");

} );