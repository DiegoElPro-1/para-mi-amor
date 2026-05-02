function entrar() {
  document.getElementById("inicio").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  // IMPORTANTE: mostrar solo la primera sección
  mostrarSeccion("sec1");
}

function siguiente(id) {
  mostrarSeccion(id);
}

function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");

  secciones.forEach(sec => {
    sec.classList.add("hidden");
  });

  document.getElementById(id).classList.remove("hidden");
}