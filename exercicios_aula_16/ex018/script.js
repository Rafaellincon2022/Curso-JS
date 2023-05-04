let numero = window.document.getElementById('caixa_numero')
let tela = window.document.getElementById('tabela_selecao')
let resultado = window.document.querySelector('div#resultado')
let lista_numeros = []

// Função ISNUMERO
function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

// Função INLISTA
function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, lista_numeros)) { // Essa ! faz o perfil de negação
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

 

/*
function adicionar() {
    let numero = window.document.getElementById('caixa_numero')
    let resultado = window.document.getElementById('tabela_selecao')
    let lista_numeros = []

    // Condições para checar caixa vazia
    if (numero.value.length == 0) {
        window.alert('Informe um valor!')
    } else {
        // Verifica se o número está entre 1 e 100
        if (numero.value < 1 || numero.value > 100) {
            window.alert('Informe um número entre 1 e 100!')
        }   else {
            // Adicionar o valor na lista de números
            lista_numeros.push(Number(numero.value))

            // Criar a caixa de Seleção e adicionar 
            let item = document.createElement('option')
            item.text = `Valor ${Number(numero.value)} adicionado.`
            resultado.appendChild(item)


        }
    }
}
*/

/*
let teste = []


function adicionar(valor) {
    teste.push(valor)
}
let numero = [8, 9, 10, 13, 21]

for (let contador = 0; contador < numero.length; contador++) {
    adicionar(numero[contador])
    
}

console.log(teste)
*/









