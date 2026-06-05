const fotos = [
  "Material_Fotografia/1.jpeg",
  "Material_Fotografia/2.jpg",
  "Material_Fotografia/3.jpeg",
  "Material_Fotografia/4.JPG",
  "Material_Fotografia/5.jpeg",
  "Material_Fotografia/6.1.jpg",
  "Material_Fotografia/6.jpeg",
  "Material_Fotografia/7.jpeg",
  "Material_Fotografia/8.jpeg",
  "Material_Fotografia/9.JPG",
  "Material_Fotografia/10.jpeg",
  "Material_Fotografia/11.jpg",
  "Material_Fotografia/12.jpg",
  "Material_Fotografia/13.jpeg",
  "Material_Fotografia/14.jpeg",
  "Material_Fotografia/15.jpg",
  "Material_Fotografia/16.jpeg",
  "Material_Fotografia/17.jpeg",
  "Material_Fotografia/18.jpg",
  "Material_Fotografia/19.JPG",
  "Material_Fotografia/20.jpeg",
  "Material_Fotografia/21.jpeg",
  "Material_Fotografia/22.jpeg",
  "Material_Fotografia/23.jpeg"
];

const ANCHO_FOTO = 260;
const ALTO_FOTO = 340;
const DISTANCIA_MINIMA = 70;

function cargarFotos() {
  const galeria = document.getElementById("galeriaFotos");

  fotos.forEach((foto, index) => {

    const card = document.createElement("div");
    card.className = "foto-card";

    const fila = Math.floor(index / 4);

    const columnas = [8, 30, 52, 74];

    const left =
      columnas[index % 4] +
      (Math.random() * 4 - 2);

    const top =
      120 +
      fila * 420 +
      (Math.random() * 50 - 25);

    const rotacion =
      3 +
      (Math.random() * 6 - 3);

    card.style.left = `${left}%`;
    card.style.top = `${top}px`;
    card.style.transform = `rotate(${rotacion}deg)`;

    card.innerHTML = `
      <img src="Img/Pin.png" class="pin" alt="Pin">
      <img src="${foto}" class="foto" alt="Fotografía">
    `;

    card.addEventListener("click", () => {
      abrirFoto(foto);
    });

    galeria.appendChild(card);
  });

  const filas = Math.ceil(fotos.length / 4);

  galeria.style.minHeight =
    `${filas * 420 + 100}px`;
}

function generarPosicionAleatoria() {
  const anchoPantalla = window.innerWidth;

  const maxLeft = anchoPantalla - ANCHO_FOTO - 80;

  return {
    left: Math.random() * maxLeft + 40,
    top: Math.random() * 2800 + 80
  };
}

function posicionValida(nueva, posicionesUsadas) {
  for (const pos of posicionesUsadas) {
    const muyCercaHorizontal =
      nueva.left < pos.left + ANCHO_FOTO + DISTANCIA_MINIMA &&
      nueva.left + ANCHO_FOTO + DISTANCIA_MINIMA > pos.left;

    const muyCercaVertical =
      nueva.top < pos.top + ALTO_FOTO + DISTANCIA_MINIMA &&
      nueva.top + ALTO_FOTO + DISTANCIA_MINIMA > pos.top;

    if (muyCercaHorizontal && muyCercaVertical) {
      return false;
    }
  }

  return true;
}

function abrirFoto(src) {
  const modal = document.getElementById("modalFoto");
  const imagen = document.getElementById("fotoActiva");

  imagen.src = src;
  modal.style.display = "flex";
}

function cerrarFoto() {
  const modal = document.getElementById("modalFoto");
  const imagen = document.getElementById("fotoActiva");

  imagen.src = "";
  modal.style.display = "none";
}

function cerrarFotoDesdeFondo(event) {
  if (event.target.id === "modalFoto") {
    cerrarFoto();
  }
}

cargarFotos();