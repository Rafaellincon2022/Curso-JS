/*function contar() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let resultado = document.getElementById('resultado')
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Preencha todos os campos corretamente.')
    } else {
        resultado.innerHTML = 'Contando: </br>'
        for (let contador = inicio; contador <= fim; contador += passo) {
            resultado.innerHTML += `${contador} `
        }
    }

}
*/

function contar() {
    let inicio = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('resultado')
    //Aqui é preciso fazer essa montagem de INICIO.VALUE.LENGTH se não ele não entende que é uma string
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar! </br> Preencha todos os campos e tente novamente.'
    } else {
        // Os valores recebidos são string e aqui os convertemos para NÚMEROS
        resultado.innerHTML = 'Contando: </br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('[PASSO INVÁLIDO] Considerando Passo 1')
            p = 1
        }
        // Contagem Crescente
        if (i < f) {
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador} `
            }
        // Contagem Regressiva
        } else {
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += `${contador} `
            }   
        }
    }

}
