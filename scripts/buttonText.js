const texts = [
    "Hola mi amor uwu",
    "¿Estás lista? OwO"
];
let index = 0;

function changeText() {
    index = (index + 1) % texts.length;
    document.getElementById("principal-text").textContent = texts[index];
}