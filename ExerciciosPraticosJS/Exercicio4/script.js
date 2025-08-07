let nota = parseFloat(prompt("Digite uma nota de 0 a 10: "));

if (nota >= 7) {
    alert("Aprovado")
} else if (nota >= 5 && nota < 7) {
    alert("Recuperação")
} else {
    alert("Reprovado")
}