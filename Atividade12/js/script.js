var imagem = document.getElementById("imagem");

onload = () => {
    imagem.src = "img/fechada.png";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/aberta.jpg";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/fechada.jpg";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/quebrada.jpg";
});