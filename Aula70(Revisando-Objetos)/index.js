// const pessoa = {
//     nome: 'Luiz',
//     sobrenome: 'Otavio'
// }
// // console.log(pessoa.nome) // anotação de ponto
// // console.log(pessoa['sobrenome']) // anotação de colchetes

// const chave = 'sobrenome'
// console.log(pessoa[chave])

// #############################################################################################################################

// new Array(); []

// const pessoa1 = new Object() // criando um novo objeto array
// pessoa1.nome = 'Luiz'
// pessoa1.sobrenome = 'Otávio'
// pessoa1.idade = 30
// pessoa1.falarNome = function() {
//     return (`${this.nome} ${this.sobrenome} está falando seu nome`);
// }
// pessoa1.getDataNascimento = function() {
//     const dataAtual = new Date()
//     return dataAtual.getFullYear() - this.idade
// }

// pessoa1.falarNome()
// console.log(pessoa1.getDataNascimento())

// for (let chave in pessoa1) {
//     console.log(pessoa1[chave])
// }
// ###########################################################################################################################

// dois tipos de funções pra criar moldes dentro de objetos

// factory functions // constructor functions / classes (sintaxe sugar)
// factory functions
// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         nomeCompleto() { // metodo dentro do Objeto
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa ('Luiiz', 'Otávio')
// console.log(p1.nomeCompleto())



// constructor functions
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}
// new cria um objeto vazio, {} <- this ->(retorna) this
const p1 = new Pessoa('Luiz', 'Miranda')
// Object.freeze(p1) // travei o obj p1
p1.nome = 'Outra coisa'
const p2 = new Pessoa('Maria', 'Miranda')

console.log(p1) // Pessoa { nome: 'Luiz', sobrenome: 'Miranda' }  ("Pessoa é o construtor do Objeto")
console.log(p2)
