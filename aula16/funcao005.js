// RECURSIVIDADE (Mais complicado um pouco)

function fatorial(numero) {
    if (numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}
console.log(`O fatorial de 5 é ${fatorial(5)}.`);

/*
FATORIAL NORMAL => 5! = 5 X 4 X 3 X 2 X 1
FATORIAL RECURSIVO => 5! = 5 X 4! O fatorial de um número pode ser calculado baseado no fatorial de outro

n! = n X (n - 1)!
1! = 1 - Matematicamente o fatorial de 1 é igual a 1.
*/