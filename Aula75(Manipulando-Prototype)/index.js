function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
// Método
Produto.prototype.desconto = function(percentual) {     // metodo de desconto com prototype
    this.preco = this.preco - (this.preco * (percentual / 100))
}


Produto.prototype.aumento = function(percentual) {     // metodo de desconto com prototype
    this.preco = this.preco + (this.preco * (percentual / 100))
}


const p1 = new Produto('Camiseta', 50)
// // p1.desconto(100)
// p1.aumento(100)


const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype) 

p2.aumento(10)


const p3 = Object.create(Produto.prototype) // cria um objeto e ja set o prototype dele

p3.nome = 'Bota'
p3.tipo = 'Couro'
p3.cor = 'Black'
p3.preco = 113

p3.aumento(10)
console.log(p3)

console.log(p1)
console.log(p2)


















// // nrew Object -> Object.prototype
// const objA = {
//     chaveA: 'A'
//     // __proto__: Object.prototype
// }
// // nrew Object -> Object.prototype
// const objB = {
//     chaveB: 'B'
//     // __proto__: Object.prototype
// }

// const objC = new Object()
// objC.chaveC = 'C'


// Object.setPrototypeOf(objB, objA)      // configurar o prototype de objB para objA
// Object.setPrototypeOf(objC, objB) 
// console.log(objC.chaveA)