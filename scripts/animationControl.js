function animar() {
    const elemento = document.getElementById("gif-shadow");

    elemento.style.display = "block";

    // Limpia cualquier animación anterior
    elemento.classList.remove("animate__animated", "animate__fadeOutLeft");

    // Fuerza el reflow (truco para reiniciar animación)
    void elemento.offsetWidth;

    // Vuelve a agregar las clases de animación
    elemento.classList.add("animate__animated", "animate__fadeOutLeft");
  }