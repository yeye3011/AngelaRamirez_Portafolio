const ilustraciones = [
  "Material_Ilustraciones/Ilu1.png",
  "Material_Ilustraciones/Ilu2.jpg",
  "Material_Ilustraciones/Ilu3.jpg",
  "Material_Ilustraciones/Ilu4.png"
];

let inicioCarrusel = 0;
const cantidadVisible = 2;

function mostrarCarrusel() {
  const wrapper = document.getElementById("ilustracionesWrapper");
  wrapper.innerHTML = "";

  for (let i = 0; i < cantidadVisible; i++) {
    const index = (inicioCarrusel + i) % ilustraciones.length;

    const card = document.createElement("div");
    card.className = "ilustracion-card";
    card.onclick = () => abrirIlustracion(index);

    card.innerHTML = `
      <img src="${ilustraciones[index]}" class="ilustracion-img">
      <img src="Img/Pin.png" class="pin-icon">
    `;

    wrapper.appendChild(card);
  }
}

function moverCarrusel(direccion) {
  const wrapper = document.getElementById("ilustracionesWrapper");

  inicioCarrusel += direccion;

  if (inicioCarrusel < 0) {
    inicioCarrusel = ilustraciones.length - 1;
  }

  if (inicioCarrusel >= ilustraciones.length) {
    inicioCarrusel = 0;
  }

  mostrarCarrusel();

  wrapper.classList.remove("animar-derecha", "animar-izquierda");

  void wrapper.offsetWidth;

  if (direccion > 0) {
    wrapper.classList.add("animar-derecha");
  } else {
    wrapper.classList.add("animar-izquierda");
  }
}

function abrirIlustracion(index) {
  const modal = document.getElementById("modalIlustracion");
  const imagen = document.getElementById("ilustracionActiva");

  imagen.src = ilustraciones[index];
  modal.style.display = "flex";
}

function cerrarIlustracion() {
  const modal = document.getElementById("modalIlustracion");
  const imagen = document.getElementById("ilustracionActiva");

  imagen.src = "";
  modal.style.display = "none";
}

function cerrarIlustracionDesdeFondo(event) {
  if (event.target.id === "modalIlustracion") {
    cerrarIlustracion();
  }
}

mostrarCarrusel();