const categories = [
  {
    title: "Modelados 3D",
    image: "Img/modelados.png",
    link: "Modelados3D.html"
  },
  {
    title: "Audiovisuales",
    image: "Img/Videos.png",
    link: "Audiovisuales.html"
  },
  {
    title: "Fotografías",
    image: "Img/fotografias.png",
    link: "Fotografia.html"
  },
  {
    title: "Ilustraciones",
    image: "Img/Ilustraciones.png",
    link: "Ilustraciones.html"
  }
];

let currentIndex = localStorage.getItem("categoriaSeleccionada");

currentIndex = currentIndex !== null ? Number(currentIndex) : 0;

const mainImage = document.getElementById("carouselImage");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");
const categoryText = document.getElementById("categoryText");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function getIndex(index) {
  return (index + categories.length) % categories.length;
}

const spinner = document.getElementById("spinner");

function updateCarousel() {
  // Oculta imagen y muestra spinner
  mainImage.style.opacity = "0";
  prevImage.style.opacity = "0";
  nextImage.style.opacity = "0";
  mainImage.style.transform = "scale(0.92)";
  spinner.style.display = "block";

  const prevIndex = getIndex(currentIndex - 1);
  const nextIndex = getIndex(currentIndex + 1);

  mainImage.src = categories[currentIndex].image;
  mainImage.alt = categories[currentIndex].title;

  prevImage.src = categories[prevIndex].image;
  prevImage.alt = categories[prevIndex].title;

  nextImage.src = categories[nextIndex].image;
  nextImage.alt = categories[nextIndex].title;

  categoryText.textContent = categories[currentIndex].title;

  // Cuando la imagen termina de cargar, oculta el spinner
  mainImage.onload = () => {
    spinner.style.display = "none";
    mainImage.style.opacity = "1";
    prevImage.style.opacity = "0.18";
    nextImage.style.opacity = "0.18";
    mainImage.style.transform = "scale(1)";
  };
}

nextBtn.addEventListener("click", () => {
  currentIndex = getIndex(currentIndex + 1);
  localStorage.setItem("categoriaSeleccionada", currentIndex);
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = getIndex(currentIndex - 1);
  localStorage.setItem("categoriaSeleccionada", currentIndex);
  updateCarousel();
});

mainImage.addEventListener("click", () => {
  localStorage.setItem("categoriaSeleccionada", currentIndex);
  window.location.href = categories[currentIndex].link;
});

updateCarousel();

