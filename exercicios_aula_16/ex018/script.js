// PRIMEIRA PARTE DO CÓDIGO - Coletar informações e inserir no quadro especificado

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

// Função Principal ADICIONAR DADOS 
function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, lista_numeros)) { // Essa ! faz o perfil de negação
        lista_numeros.push(Number(numero.value))
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        tela.appendChild(item)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = '' // Irá limpar o campo para adicionar novo número
    numero.focus() // Irá manter o curso pronto para uma nova adição
    window.alert(lista_numeros)
}

// SEGUNDA PARTE DO CÓDIGO - Analisar os dados coletados e apresentar um relatório

function finalizar() {
    // Encontrando o maior valor utilizando uma função nativa
    let maior_numero = Math.max(...lista_numeros)

    // Encontrando o maior valor utilizando uma função nativa
    let menor_numero = Math.min(...lista_numeros)

    // Encontrando a soma dos valores contidos no array
    let soma = 0
    for (let posicao = 0; posicao < lista_numeros.length; posicao++) {
        soma += lista_numeros[posicao];
    }

    // Encontrando a média dos valores contidos na lista
    let media = soma / lista_numeros.length

    resultado.innerHTML = `Ao todo temos ${lista_numeros.length} números cadastrados. </br>` // Tamanho da lista
    resultado.innerHTML += `O maior número informado foi ${maior_numero}. </br>` // Maior número da lista
    resultado.innerHTML += `O menor número informado foi ${menor_numero}. </br>` // Menor número da lista
    resultado.innerHTML += `A soma de todos os valores informados é ${soma}. </br>` // Soma de todos os valores contidos na lista
    resultado.innerHTML += `A média de todos os valores informados é ${media}. </br>`
    resultado.innerHTML += `Esses são os valores informados na lista: ${lista_numeros}.` // Mostra os valores contidos na lista
}


