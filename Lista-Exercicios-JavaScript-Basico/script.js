// Exercício 1 - Saudação com nome
    nome = prompt("Qual o seu nome?");
    alert("Olá, " + nome + "! Seja bem-vindo(a).")

// Exercício 2 - Soma de dois números
    let num1 = prompt("Digite o primeiro valor: ");
    let num2 = prompt("Digite o segundo valor: ");

    let resultado = parseInt(num1) + parseInt(num2)
    console.log(resultado)

// Exercício 4 - Cálculo do dobro
    let numero = Number(prompt("Digite um número: "));
    let resultadoFinal = numero * 2;

    console.log(resultadoFinal);

// Exercício 5 - Área de um retângulo
    let base = parseFloat(prompt("Digite a base: "));
    let altura = parseFloat(prompt("Digite a altura: "));

    let area = base * altura;

    console.log(area);

// Exercício 6 - Desconto em produto
    let preco_original = Number(prompt("Digite o valor do preço original do produto: "));
    let percentual_desconto = Number(prompt("Digite o valor da porcentagem em %: "));

    let desconto = preco_original * (percentual_desconto/100);

    let preco_com_desconto = preco_original - desconto;

    console.log("Preço original: R$" + preco_original.toFixed(2));
    console.log("Desconto: R$" + percentual_desconto + "%");
    console.log("Preço com desconto: R$" + preco_com_desconto.toFixed(2));

// Exercício 7 - Nome completo
    let primeiro_nome = prompt("Digite seu primeiro nome: ");
    let sobrenome = prompt("Digite seu sobrenome: ");

    console.log(`Seu nome completo é: ${primeiro_nome} ${sobrenome}`);


// Exercício 8 - Confirmação de cadastro
    let confirmar_cadastro = confirm("Deseja realizar o cadastro em nosso site? ");

    if(confirmar_cadastro == true) {
    let = nome_completo = prompt("Digite seu nome completo: ");
    let idade = Number(prompt("Digite sua idade: "));
    console.log("Cadastro realizado com sucesso!");
    console.log(`Nome: ${nome_completo}`);
    console.log(`Idade: ${idade}`);
} else {
    console.log("Cadastro cancelado pelo usuário.");
}



