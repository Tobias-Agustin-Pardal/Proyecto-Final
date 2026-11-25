const contenedorIz = document.querySelector(".cont-iz");
const opcionesIzq = document.querySelectorAll(".opcion-iz");

window.addEventListener("scroll", () => {
  const pasoLimite = window.scrollY > 100;

  // 2. Recorrás la lista y le aplicás la nueva clase a cada uno
  opcionesIzq.forEach(elemento => {
    elemento.classList.toggle("achicar", pasoLimite);
  });
  contenedorIz.classList.toggle("achicar", pasoLimite)
}, { passive: true });