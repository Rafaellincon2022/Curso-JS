var agora = new Date();
//var time = agora.toLocaleTimeString()
//var hora = time.slice(0, 5)
console.log(`Agora são ${hora}.`);
if (hora > ('06:00:00') && hora < ('12:00:00')) {
    console.log('Bom dia!');
} else if (hora < ('18:00:00')) {
    console.log('Boa Tarde!');
} else {
    console.log('Boa Noite!');
}
