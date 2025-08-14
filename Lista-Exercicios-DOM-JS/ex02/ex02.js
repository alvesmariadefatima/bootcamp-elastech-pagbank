const titulo = document.getElementById("meu-titulo");
const botao = document.getElementById("btn-clique-aqui");

botao.addEventListener("click", function() {
    titulo.style.color = "red";
});