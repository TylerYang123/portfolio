// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

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

// Cursor follow
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Pokémon Generator
const pokemonList = [
  "pokemon1.png", "pokemon2.png", "pokemon3.png", "pokemon4.png",
  "pokemon5.png", "pokemon6.png", "pokemon7.png", "pokemon8.png",
  "pokemon9.png", "pokemon10.png", "pokemon11.png", "pokemon12.png",
  "pokemon13.png", "pokemon14.png", "pokemon15.png", "pokemon16.png",
  "pokemon17.png", "pokemon18.png", "pokemon19.png", "pokemon20.png"
];

function generatePokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  const selectedPokemon = pokemonList[randomIndex];
  const pokemonImg = document.getElementById("pokemon-img");

  if (pokemonImg) {
    pokemonImg.src = `images/${selectedPokemon}`;
  } else {
    console.error("Element with ID 'pokemon-img' not found.");
  }
}
function generatePokemon() {
  const img = document.getElementById("pokemon-img");
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  img.src = `images/${pokemonList[randomIndex]}`;
}
const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // 1 to 898
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();

  const pokemonName = data.name;
  const pokemonImage = data.sprites.other['official-artwork'].front_default;

  document.getElementById("pokemon-display").innerHTML = `
    <h2>${pokemonName.toUpperCase()}</h2>
    <img id="pokemon-img" src="${pokemonImage}" alt="${pokemonName}" />
  `;
};