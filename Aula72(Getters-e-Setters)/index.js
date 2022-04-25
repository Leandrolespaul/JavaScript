// defineProperty -> Getters e Settres
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'estoque', {  // a propriedade que quer trabalhar
        enumerable: true, // mostra a chave
        configurable: true , // configuravel
        get: function() {   // retorna o valor do estoque
            return estoquePrivado
        },
        set: function(valor) {
            if(typeof valor != 'number') {
                throw new TypeError('Estoque deve ser um número')
            }
            estoquePrivado = valor
        }
    })
}
function criaProduto(nome) {
    return {
        get nome() {
            return nome
        },
        set nome(valor) {
            nome =valor
        }
    }
}




// const p1 = new Produto('Camiseta', 20, 3)
// // p1.estoque = 'qwuehqwe'
// // console.log(p1)
// p1.estoque = 200
// console.log(p1.estoque)
const p211 = criaProduto('Camiseta')
console.log(p2)