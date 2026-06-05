const modelados = [
  {
    nombre: "Robot",
    miniatura: "Material_Modelados/mod2.jpg",
    modelo: "https://yeye3011.github.io/mod2/mod2.glb"
  },
  {
    nombre: "Deadpool",
    miniatura: "Material_Modelados/mod4.jpeg",
    modelo: "https://yeye3011.github.io/mod4/mod4.glb"
  },
];

let inicioCarruselGuardado = localStorage.getItem("inicioCarruselModelados");

let inicioCarrusel = inicioCarruselGuardado !== null 
  ? Number(inicioCarruselGuardado) 
  : 0;

const cantidadVisible = 2;

function mostrarCarrusel() {
  const wrapper = document.getElementById("modeladosWrapper");
  wrapper.innerHTML = "";

  for (let i = 0; i < cantidadVisible; i++) {
    const index = (inicioCarrusel + i) % modelados.length;
    const item = modelados[index];

    const card = document.createElement("div");
    card.className = "modelado-card";

    card.innerHTML = `
      <img src="${item.miniatura}" class="thumbnail-modelado" alt="${item.nombre}">
      <img src="Img/Marco_Modelados.png" class="marco-modelado" alt="Marco">
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("modeloSeleccionado", item.modelo);
      localStorage.setItem("nombreModeloSeleccionado", item.nombre);

      // Esta línea mantiene la posición del carrusel
      localStorage.setItem("inicioCarruselModelados", inicioCarrusel);

      window.location.href = "visor3d.html";
    });

    wrapper.appendChild(card);
  }
}

function moverCarrusel(direccion) {
  inicioCarrusel += direccion;

  if (inicioCarrusel < 0) {
    inicioCarrusel = modelados.length - 1;
  }

  if (inicioCarrusel >= modelados.length) {
    inicioCarrusel = 0;
  }

  localStorage.setItem("inicioCarruselModelados", inicioCarrusel);

  mostrarCarrusel();
}

mostrarCarrusel();