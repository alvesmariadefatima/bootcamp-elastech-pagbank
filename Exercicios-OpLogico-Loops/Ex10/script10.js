let numeroSorteado;

do {
    numeroSorteado = Math.floor(Math.random() * 100) + 1;
    console.log(`Número sorteado: ${numeroSorteado}`);
} while (numeroSorteado > 50);

console.log("Fim dos sorteios.");