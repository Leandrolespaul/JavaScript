/*
Javascript é baseado em protótipos para passar propriedades e métodos
de um Objeto para outro

Definição de protótipo
Protótipo é o termo usadoo para referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produições.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propiedade prototype da função construtora que foi usada para 
criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no própio objeto e depois a cadeia 
de protótipos é usada até o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => 'ORIGINAL: ', this.nome + ' ' + this.sobrenome
}



Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}
// instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <- Pessoa = Função construtora
// const pessoa2 = new Pessoa('Maria', 'A.') // <- Pessoa = Função construtora
const data = new Date() // <- Date = Função construtora

console.dir(pessoa1)
console.dir(data)