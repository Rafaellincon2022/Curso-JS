function tabuada() {
    var numero = window.document.getElementById('txtnum') // Recebe o valor digitado
    var caixa = window.document.getElementById('seltab') // Marca o local que será apresentado o resultado
    // Condição para caso o campo esteja vazio
    if (numero.value.length == 0) { 
        window.alert('Por favor, digite um número!')
        // Condição para caso o campo tenha valor informado
    } else {
        let n = Number(numero.value) // Transforma o valor em número
        var contador = 1
        caixa.innerHTML = '' // Limpa a caixa de resultado
        while (contador <= 10) {
            let item = document.createElement('option') // Cria as opções (cada linha)
            item.text = `${n} X ${contador} = ${n * contador}` // Faz a tabuada
            caixa.value = `caixa${contador}` // Os OPTIONs precisam ter values, então aqui fazemos isso
            caixa.appendChild(item) // Adicionamos um elemento filho
            contador ++ // Acrescenta mais um ao contador
        }
    }
}
