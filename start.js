const text = "Hello there and welcome to Tyler's Personal Portfolio";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("myParagraph").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // typing speed
  } else {
    document.getElementById("continueBtn").style.display = "inline-block"; // reveal button
  }
}

window.onload = typeWriter;
// Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(slide => (slide.style.display = "none"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", showSlides);
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});