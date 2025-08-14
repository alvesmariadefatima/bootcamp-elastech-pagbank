const lista = document.getElementById("minha-lista");
const campoTexto = document.getElementById("campo-item");
const botao = document.getElementById("btn-adicionar");

botao.addEventListener("click", function() {
    const texto = campoTexto.value.trim();

    if(texto !== "") {
        const novoItem = document.createElement("li");
        novoItem.textContent = texto;
        lista.appendChild(novoItem);

        campoTexto.value = "";
        campoTexto.focus();
    }
})