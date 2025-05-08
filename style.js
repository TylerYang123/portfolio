// JavaScript to handle the mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function openPopup() {
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}
let  = 0;
showSlides();

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => slide.style.display = "none");

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
