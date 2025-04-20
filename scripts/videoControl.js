const video = document.getElementById("video");
const cart = document.getElementById("cart-container");

video.addEventListener("ended", () => {
    video.style.display = "none";
    cart.style.display = "flex";
});