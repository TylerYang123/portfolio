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

// Pokémon Generator (Local Images)
const pokemonList = [
  "pikachu.png", "rayquaza.png", "bulbasaur.png", "charizard.png", "gengar.png",
  "mewtwo.png", "snorlax.png", "lucario.png", "eevee.png", "dragonite.png",
  "charmander.png", "squirtle.png", "wartortle.png", "blastoise.png", "ivysaur.png",
  "venusaur.png", "pidgey.png", "rattata.png", "zubat.png", "jigglypuff.png",
  "wigglytuff.png", "meowth.png", "psyduck.png", "golduck.png", "machop.png",
  "machoke.png", "machamp.png", "magnemite.png", "magneton.png", "doduo.png",
  "dodrio.png", "seel.png", "dewgong.png", "grimer.png", "muk.png",
  "shellder.png", "cloyster.png", "gastly.png", "haunter.png", "onix.png",
  "drowzee.png", "hypno.png", "krabby.png", "kingler.png", "voltorb.png",
  "electrode.png", "cubone.png", "marowak.png", "hitmonlee.png", "hitmonchan.png",
  "lickitung.png", "koffing.png", "weezing.png", "rhyhorn.png", "rhydon.png",
  "chansey.png", "tangela.png", "kangaskhan.png", "horsea.png", "seadra.png",
  "goldeen.png", "seaking.png", "staryu.png", "starmie.png", "scyther.png",
  "jynx.png", "electabuzz.png", "magmar.png", "pinsir.png", "tauros.png",
  "magikarp.png", "gyarados.png", "lapras.png", "ditto.png", "vaporeon.png",
  "jolteon.png", "flareon.png", "porygon.png", "omanyte.png", "omastar.png",
  "kabuto.png", "kabutops.png", "aerodactyl.png", "articuno.png", "zapdos.png",
  "moltres.png", "dratini.png", "dragonair.png", "umbreon.png", "espeon.png",
  "sylveon.png", "leafeon.png", "glaceon.png", "ralts.png", "kirlia.png",
  "gardevoir.png", "gallade.png", "riolu.png", "zorua.png", "zoroark.png",
  "axew.png", "haxorus.png", "goodra.png", "tinkaton.png", "pawmi.png",
  "sprigatito.png", "quaxly.png", "fuecoco.png", "ironvaliant.png", "miraidon.png"
];

// Local image generator
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

// Live API generator (optional)
const getRandomPokemon = async () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // Gen 1-8 range
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();

  const pokemonName = data.name;
  const pokemonImage = data.sprites.other['official-artwork'].front_default;

  document.getElementById("pokemon-display").innerHTML = `
    <h2>${pokemonName.toUpperCase()}</h2>
    <img id="pokemon-img" src="${pokemonImage}" alt="${pokemonName}" />
  `;
};
