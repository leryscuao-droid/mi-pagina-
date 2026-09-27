// ==========================================================
// MOONKISS SCAN — JAVASCRIPT
// Funciones básicas: tema, búsqueda, géneros y carrusel visual.
// ==========================================================

const themeToggle = document.getElementById("themeToggle");

themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});

// Búsqueda de tarjetas
const searchInput = document.getElementById("searchInput");
const cards = [...document.querySelectorAll(".series-card")];

searchInput?.addEventListener("input", (event) => {
  const term = event.target.value.trim().toLowerCase();

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = !term || text.includes(term) ? "" : "none";
  });
});

// Selección visual de géneros
document.querySelectorAll(".genre-list button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".genre-list button")
      .forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Carrusel de demostración.
// Cuando reemplaces los placeholders por imágenes reales,
// puedes conectar aquí los datos de cada slide.
const slides = [
  {
    title: "Baby Omega",
    chapter: "Capítulo 41",
    badge: "EN EMISIÓN",
    description: "El pequeño protagonista sigue demostrando que el amor también se vive en silencio. ¿Podrá al fin resistirse más tiempo?"
  },
  {
    title: "Tanhua",
    chapter: "Capítulo 92",
    badge: "EN EMISIÓN",
    description: "Nueva actualización disponible."
  },
  {
    title: "Pitter Patter",
    chapter: "Capítulo 16",
    badge: "EN EMISIÓN",
    description: "Una nueva entrega ya está disponible."
  },
  {
    title: "Law of Attraction",
    chapter: "Capítulo 12",
    badge: "EN EMISIÓN",
    description: "Continúa la historia en el nuevo capítulo."
  }
];

let currentSlide = 0;

const heroTitle = document.querySelector(".hero-copy h1");
const heroChapter = document.querySelector(".hero-copy .chapter");
const heroBadge = document.querySelector(".hero-copy .badge");
const heroDescription = document.querySelector(".hero-copy p");
const dots = [...document.querySelectorAll(".dot")];

function renderSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  const slide = slides[currentSlide];

  if (heroTitle) heroTitle.textContent = slide.title;
  if (heroChapter) heroChapter.textContent = slide.chapter;
  if (heroBadge) heroBadge.textContent = slide.badge;
  if (heroDescription) heroDescription.textContent = slide.description;

  dots.forEach((dot, i) => dot.classList.toggle("active", i === currentSlide));
}

document.querySelector(".hero-arrow.prev")?.addEventListener("click", () => {
  renderSlide(currentSlide - 1);
});

document.querySelector(".hero-arrow.next")?.addEventListener("click", () => {
  renderSlide(currentSlide + 1);
});

dots.forEach((dot, i) => dot.addEventListener("click", () => renderSlide(i)));

// Cambia automáticamente cada 7 segundos.
setInterval(() => renderSlide(currentSlide + 1), 7000);
