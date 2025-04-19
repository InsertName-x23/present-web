const texts = [
    "Hola mi amor uwu",
    "¿Estás lista? OwO"
];
let index = 0;

const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

function changeText() {

    setTimeout(() => {
        index = (index + 1) % texts.length;
        document.getElementById("principal-text").textContent = texts[index];

        firstButton.style.display = "none";
        secondButton.style.display = "block";
    }, 200);
}