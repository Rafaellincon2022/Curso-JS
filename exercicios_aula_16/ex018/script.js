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
        resultado.innerHTML = '' // Ele irá limpar a tela para nova análise
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = '' // Irá limpar o campo para adicionar novo número
    numero.focus() // Irá manter o curso pronto para uma nova adição
}

// SEGUNDA PARTE DO CÓDIGO - Analisar os dados coletados e apresentar um relatório

function finalizar() {

    // Verifica se tem algum valor na tabela, senão ele não permite prosseguir
    if (lista_numeros.length == 0) {
        window.alert('Sem valores para analisar. Informe um número e tente novamente.')
    } else {
        // Encontrando o maior valor utilizando uma função nativa
        // let maior_numero = Math.max(...lista_numeros)

        // A forma "manual" de encontrar o maior valor
        let maior = lista_numeros[0]
        for (let posicao in lista_numeros) {
            if (lista_numeros[posicao] > maior)
            maior = lista_numeros[posicao]
        }

        // Encontrando o maior valor utilizando uma função nativa
        // let menor_numero = Math.min(...lista_numeros)

        // A forma "manual" de encontrar o maior valor
        let menor = lista_numeros[0]
        for (let posicao in lista_numeros) {
            if (lista_numeros[posicao] < menor) {
                menor = lista_numeros[posicao]
            }
        }

        // Encontrando a soma dos valores contidos no array
        let soma = 0
        for (let posicao = 0; posicao < lista_numeros.length; posicao++) {
            soma += lista_numeros[posicao];
        }

        // Encontrando a média dos valores contidos na lista
        let media = soma / lista_numeros.length

        
        resultado.innerHTML = `<p> Ao todo temos ${lista_numeros.length} números cadastrados. </p>` // Tamanho da lista
        resultado.innerHTML += `<p> O maior número informado foi ${maior}. </p>` // Maior número da lista
        resultado.innerHTML += `<p> O menor número informado foi ${menor}. </p>` // Menor número da lista
        resultado.innerHTML += `<p> A soma de todos os valores informados é ${soma}. </p>` // Soma de todos os valores contidos na lista
        resultado.innerHTML += `<p> A média de todos os valores informados é ${media.toFixed(2)}. </p>` // Média de todos os valores contidos na lista
        resultado.innerHTML += `<p> Esses são os valores informados na lista: ${lista_numeros}. </p>` // Mostra os valores contidos na lista

    }

}


