
function par_impar(numero) { // Criamos uma função PAR_IMPAR que recebe um NÚMERO
    if (numero % 2 == 0) { // Essa função irá dividir o NÚMERO por 2 e verificará se o resultado é 0
        console.log(`O número ${numero} é PAR!`); // Se for igual a 0, o NÚMERO é PAR.
    } else {
        console.log(`O número ${numero} é ÍMPAR!`); // Senão for igual a 0, o NÚMERO é ÍMPAR.
    }
}

let resposta = par_impar(2) // Aqui temos uma variável RESPOSTA que receber a função com o número que queremos verificar

