const nome = "Maria de Fátima";
let idade = 24;
var profissao = "Desenvolvedora Full-Stack";

console.log(nome)
console.log(idade)
console.log(profissao)

alert("Sua idade " + idade);

idade = prompt("Qual sua idade? ");
console.log(idade);

let valor1 = promt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");
let resultado = Number(valor1) + parseInt(valor2);

let resposta = confirm("Deseja salvar os dados?");

if(resposta == true) {
    alert("Dados salvos")
} else {
    alert("Os dados não foram salvos")
}
