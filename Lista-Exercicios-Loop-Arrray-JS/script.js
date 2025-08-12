// // CRIE UM ARRAY COM NOMES DE CINCO CIDADES. USE UM LOOP FOR TRADICIONAL PARA IMPRIMIR CADA CIDADE COM SUA POSIÇÃO NO ARRAY.
/* 
const cidades = ["SÃO PAULO", "RIO DE JANEIRO", "BELO HORIZONTE", "CURITIBA", "PORTO ALEGRE"];

for (let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}
*/

// DADO UM ARRAY DE NÚMEROS INTEIROS, USE UM LOOP FOR PARA CALCULAR A SOMA TOTAL DOS ELEMENTOS.

/*
let numerosInteiros = [3, 7, 9, 12, 29, 30]
let soma = 0;

for (let i = 0; i < numerosInteiros.length; i++) {
    soma += numerosInteiros[i];
}

console.log("Soma total: ", soma);
*/

// CRIE UM ARRAY COM NOMES DE FRUTAS. USE FOR...OF PARA IMPRIMIR CADA FRUTA EM LETRAS MAIÚSCULAS.
/*
const frutas = ["MAÇÃ", "BANANA", "LARANJA"];

for (const fruta of frutas) {
    console.log(fruta);
}
*/

// Dado um array de preços, use foreach para imprimir o valor de cada item com 10% de desconto

/*
const precos = [100, 250, 80]

precos.forEach((preco) => {
    const desconto = preco * 0.9;
    console.log(desconto);
});
*/

// Crie um array com idades. Use map para gerar um novo array com as idades em meses (IDADE X 12)

/*
let idades = [10, 5, 8, 18, 30, 17, 35]

let idadesEmMeses = idades.map(idade => idade * 12);
console.log(idadesEmMeses);
*/

// Dado um array de temperaturas, use filter para retornar apenas as temperaturas acima de 30 graus

/*
let temperaturas = [20, 40, 35, 50, 15, 39]

let FiltrarTemperaturas = temperaturas.filter(temperaturas => temperaturas >= 30);
console.log(FiltrarTemperaturas);
*/

// Dado um array com letras repetidas, use para contar quantas vezes cada letra aparece

/*
let letrasRepetidas = ["a", "b", "a", "c", "u", "y", "b", "b", "a"]

let contador = {};

for (let i = 0; i < letrasRepetidas.length; i++) {
    let letra = letrasRepetidas[i];
    if (contador[letra]) {
        contador[letra]++;
    } else {
        contador[letra] = 1;
    }
}

console.log(contador);
*/

// Crie um array de notas de alunos. Use reduce para calcular a média das notas
/*
let notas = [8, 7, 5, 9, 6]

let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let media = soma / notas.length;

console.log("Média: ", soma);
*/

// Dado um array de números, filtre os pares e depois multiplie cada um por 2
/*
let numeros = [3, 8, 15, 22, 7, 19, 5, 14];

let paresMultiplicados = numeros
    .filter(num => num % 2 == 0)
    .map(num => num * 2);

console.log(paresMultiplicados);
*/

// Array de nomes usando filter + map
/*
const nomes = ["CARLOS", "ANA", "JOÃO"];

const resultado = nomes
    .filter(nome => nome.length % 2 === 0)
    .map(nome => nome + " " + nome);

console.log(resultado);
*/