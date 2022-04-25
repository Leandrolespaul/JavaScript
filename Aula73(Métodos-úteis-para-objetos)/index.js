/*
Object.value
Object.entries
object.assign(des, any)
obg.getOwnPropertyDescriptior(o, 'prop')
...(spread)

//Ja vimos
Object.key (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (Define varias propiedades)
Object.definePropety (define uma propiedade)
*/
// #####################################################################################################################

// const produto = {nome: 'produto', preco: 1.8}          // Copiar propiedades de um objeto parfa outro objeto
// const caneca = {                                                 // ...spread é bem mais usado
//     ...produto,
//     material: 'porcelana'
// }

// caneca.nome = 'outro nome'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca)

//##########################################################################################################################

// const produto = {nome: 'produto', preco: 1.8}          // Outro jeito de Copiar propiedades de um objeto para outro objeto
// const caneca = Object.assign({}, produto, {material: 'porcelana'})                     // Object.assingn não é tanto usado

// caneca.nome = 'outro nome'
// caneca.preco = 2.5
// console.log(produto)
// console.log(caneca)

//##################################################################################################################################

// const produto = {nome: 'Produto', preco: 1.8} 
// Object.defineProperty(produto, 'nome', {
//     writable: false, 
//     configurable: false,
//     value: 'Qualquer coisa'
// })
// console.log(Object.getOwnPropertyDescriptors(produto, 'nome'))   // retorna se é writable, configurable, value e enumerable (como se fosse um typeof)
// console.log(produto)

//#########################################################################################################

const produto = {nome: 'Produto', preco: 1.8} 
// console.log(Object.values(produto)) // retorna o valor da chave do objeto
// console.log(Object.entries(produto)) // retorna retorna a cada propriedade um array EXECUTADO ([ [ 'nome', 'Produto' ], [ 'preco', 1.8 ] ])

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}