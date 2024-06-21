const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerLinks = document.querySelector(".hamburger-links");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  hamburgerLinks.classList.toggle("open");
});
