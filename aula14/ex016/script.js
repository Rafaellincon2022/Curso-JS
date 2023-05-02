function contar() {
    var inicio = window.document.getElementById('txtinicio')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    let resultado = window.document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length== 0 || passo.value.length == 0) {
        resultado.innerHTML = '<p> Impossível Contar! </p>'
    } else {
        resultado.innerHTML = `Contando: </br>`
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido. Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += `${contador} \u{1F449} `
            }
        } else {
            // Contagem Regressiva
            for (let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += `${contador} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
