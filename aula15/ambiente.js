let numero = []

// Incluindo valores na variável de forma automatica
numero.push(7, 9, 5, 3, 1, 8)
console.log(`Esses são os valores dentro do array: ${numero}.`);

let posicao = numero.indexOf(8)
if (posicao == -1) {
    console.log('Valor não encontrado!');
} else {
    console.log(`Valor Encontrado. O número 8 foi encontrado na posição ${posicao}.`);
}