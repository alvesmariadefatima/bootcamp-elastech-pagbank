// Crie um array chamado frutas com três frutas. Crie um codigo para  adicionar mais duas frutas ao final
let frutas = ["Maçã", "Banana", "Morango"]

frutas.push("Uva", "Melancia");
console.log(frutas)

// Crie um array chamado filmes com dois títulos. Crie um codigo para  adicionar um filme no início
let filmes = ["Os Filhos de Francisco", "Branca de Neve"]

filmes.unshift("O Auto da Compadecida");
console.log(filmes)

// Crie um array vazio chamado compras. Adicione três itens no inicio e dois no final.
let compras = []

// Adiciona três itens no início
compras.unshift("Leite", "Ovos", "Fermento");

// Adiciona dois itens no final
compras.push("Bolo", "Chocolate");
console.log(compras)

// Crie um array chamado jogos. Adicione um novo jogo na terceira posição
let jogos = ["Minecraft", "Roblox", "Xbox", "UNO"]

// Adiciona na posição de índice 2 (terceira posição)
jogos.splice(2, 0, "Candy Crush");
console.log(jogos)

// Crie um array com os dias da semana. Adicione “Fim de semana” entre “sexta” e “sábado”.
let diasSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"]

diasSemana.splice(5, 0, "Fim de semana");
console.log(diasSemana)

// Crie um array chamado animais com cinco elementos. Crie um codigo para  remover o ultimo.
let animais = ["Gato", "Cachorro", "Coelho", "Papagaio", "Hamster"]

// Remove o último elemento do array
animais.pop(4);
console.log(animais)

// Crie um array com números de 1 a 5. remova o elemento no indice 3 
let numeros = [1, 2, 3, 4, 5]

numeros.pop(3);
console.log(numeros)

// Crie um array com três elementos. Crie um codigo para remover o primeiro e o último.
let roupas = ["Blusa", "Vestido", "Bolsa", "Chapéu"]

// Remove o último elemento
roupas.pop();

// Adiciona o primeiro elemento
roupas.shift();

console.log(roupas)

// Crie um array chamado ingredientes. Remova dois ingredientes do meio.
let ingredientes = ["Ovos", "Leite", "Fermento", "Massa de bolo", "Gotas de chocolate", "Chantily"]

// Remove dois ingredientes do meio
ingredientes.splice(2, 2);
console.log(ingredientes)

// Crie um array com cinco palavras.Remova a terceira e substituí-la por outra.
let palavras = ["Livro", "Caderno", "Lápis", "Borracha"]

palavras.splice(2, 1, "Post-it");
console.log(palavras)
