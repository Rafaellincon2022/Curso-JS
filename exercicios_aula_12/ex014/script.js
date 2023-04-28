var msg = window.document.querySelector('div#msg')
var img = window.document.querySelector('img#imagem')
var time = new Date()
var hora = time.getHours() // Hora automática do sistema
//var hora = 22 // Colocando hora Manual
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom Dia
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    // Boa Tarde
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'
} else {
    // Boa Noite
    img.src = 'fotonoite.png'
    document.body.style.background = '#515154'
}
