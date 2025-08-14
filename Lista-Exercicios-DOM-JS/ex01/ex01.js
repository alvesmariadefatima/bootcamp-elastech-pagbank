const paragrafo = document.getElementById("meu-paragrafo");
const botao = document.getElementById("btn-mudar-texto");

botao.addEventListener("click", function() {
    paragrafo.textContent = "Texto alterado com sucesso!";
});