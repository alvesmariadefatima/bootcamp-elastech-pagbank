// Escreva uma função que retorna "Olá, Mundo!"
function saudacao() {
    alert("Olá, Mundo!");
}

// Função que soma dois números
function soma(num1, num2) {
    return num1 + num2;
}

soma(3, 4)

// Função que verifica se um número é par
let numero = Number(prompt("Digite um número: "));

function numeroPar() {
    if(numero % 2 == 0) {
        alert("Número par");
    } else {
        alert("Número ímpar");
    }
}

// Função que converte Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(celsiusParaFahrenheit(0));
console.log(celsiusParaFahrenheit(25));
console.log(celsiusParaFahrenheit(100));

// Função que retorna o maior entre dois números
let valor1 = parseInt(prompt("Digite o primeiro valor: "));
let valor2 = parseInt(prompt("Digite o segundo valor: "));

if(valor1 > valor2) {
    alert(`O número ${valor1} é maior que ${valor2}`);
} else {
    alert(`O número ${valor1} é menor que ${valor2}`);
}

// Arrow function que retorna "Bom dia!"
const saudacaoBomDia = () => {
    alert("Bom dia!");
};

// Arrow function que multiplica dois números
let valorMultiplicado = (num1, num2) => {
    return num1 + num2;
}

valorMultiplicado(3, 5);

// Arrow function que calcula o quadrado de um número
let valorInicial = Number(prompt("Digite um valor: "));
let resultado = lado * 2;

alert(`O quadrado de ${valorInicial} é ${resultado}`);

// Arrow function que retorna o comprimento de uma string
const comprimentoString = (texto) => texto.length;

console.log(comprimentoString("Pizza"));
console.log(comprimentoString("Programar"));

// Criar uma função calculaIdade que receba o ano de nascimento e o ano atual e retorne a idade da pessoa
let anoNascimento = Number(prompt("Digite o ano de nascimento: "));
let anoAtual = Number(prompt("Digite o ano atual: "))

function calculaIdade(anoAtual, anoNascimento) {
    return anoAtual - anoNascimento;
}

console.log("Sua idade é: " + calculaIdade(anoNascimento, anoAtual) + " anos.");