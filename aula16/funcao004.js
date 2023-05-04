// 5! = 5 X 4 X 3 X 2 X 1 = 120 - CÁLCULO DE FATORIAL

function fatorial(numero) {
    let fat = 1
    for (let contador = numero; contador > 1; contador --) {
        fat *= contador
    }
    return fat
}
console.log(` O fatorial de 5 é igual a ${fatorial(5)}.`);