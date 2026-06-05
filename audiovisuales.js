const videos = [
  {
    video: "https://yeye3011.github.io/vid1/vid1.mp4",
    miniatura: "Material_AudioVisuales/min_vid1.png"
  },
  {
    video: "https://yeye3011.github.io/vid2/vid2.mp4",
    miniatura: "Material_AudioVisuales/min_vid2.png"
  },
    {
    video: "https://yeye3011.github.io/vid4/vid4.mov",
    miniatura: "Material_AudioVisuales/min_vid4.png"
  }
];

let inicioCarrusel = 0;
const cantidadVisible = 3;

function mostrarCarrusel() {
  const wrapper = document.getElementById("videosWrapper");
  wrapper.innerHTML = "";

  for (let i = 0; i < cantidadVisible; i++) {
    const index = (inicioCarrusel + i) % videos.length;

    const card = document.createElement("div");
    card.className = "video-card";
    card.onclick = () => abrirVideo(index);

    card.innerHTML = `
      <img src="${videos[index].miniatura}" class="thumbnail-video">
      <img src="Img/Marco_Videos.png" class="marco-video">
      <img src="Img/Play.png" class="play-icon">
    `;

    wrapper.appendChild(card);
  }
}

function moverCarrusel(direccion) {
  const wrapper = document.getElementById("videosWrapper");

  inicioCarrusel += direccion;

  if (inicioCarrusel < 0) {
    inicioCarrusel = videos.length - 1;
  }

  if (inicioCarrusel >= videos.length) {
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

function abrirVideo(index) {
  const modal = document.getElementById("modalVideo");
  const video = document.getElementById("videoActivo");

  video.pause();
  video.currentTime = 0;
  video.src = videos[index].video;
  video.load();

  modal.style.display = "flex";
  video.play();
}

function cerrarVideo() {
  const modal = document.getElementById("modalVideo");
  const video = document.getElementById("videoActivo");

  video.pause();
  video.currentTime = 0;
  video.src = "";
  modal.style.display = "none";
}

function cerrarVideoDesdeFondo(event) {
  if (event.target.id === "modalVideo") {
    cerrarVideo();
  }
}

mostrarCarrusel();