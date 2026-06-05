const modeloSeleccionado = localStorage.getItem("modeloSeleccionado");
const viewer = document.getElementById("modeloViewer");

if (modeloSeleccionado) {
  viewer.setAttribute("src", modeloSeleccionado);
} else {
  window.location.href = "Modelados3D.html";
}