/* // EXEMPLO DE ARRAY EM JAVASCRIPT
let lista = []
lista.push('Rafael', 'Diane', 'Pai', 'Filho', 'Espírito')

for (let posicao in lista) {
    console.log(`${posicao} = ${lista[posicao]}`);
}
*/

/* // EXEMPLO DE OBJETO EM JAVASCRIPT
let data = new Date()
let anoAtual = data.getFullYear()
let idade = anoAtual - 1991
let amigo = {nome: 'Rafael', sexo: 'M', idade: `${idade}`, altura: '1.73'}

console.log(amigo);

for (let chave in amigo) {
    console.log(`${chave} = ${amigo[chave]}`);
}
*/

// EXEMPLO DE OBJETO COM FUNÇÃO

let funcionario = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
funcionario.engordar(10)

console.log(`${funcionario.nome} pesa ${funcionario.peso} Kg.`);



