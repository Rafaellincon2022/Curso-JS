function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#anonasc')
    var resultado = document.querySelector('div#pt2')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique o ano e tente novamente.')
    } else {
        var fsex = window.document.getElementsByName('sexo') // Variável que armazena o conteúdo do sexo
        var idade = ano - Number(fano.value)
        var genero = ''
        // Criação da TAG IMG para mudança de imagem dinâmica
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // Isso é o mesmo que ir no HTML e criar <img id='foto'>
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancam.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemm.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultom.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosom.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancaf.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovemf.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adultof.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idosaf.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img) // Parâmetro que apresenta a imagem vinculada a variável
        
    }

}


