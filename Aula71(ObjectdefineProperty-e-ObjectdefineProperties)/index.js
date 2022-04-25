// defineProperty - defineProperties
function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'estoque', {  // a propriedade que quer trabalhar
        enumerable: true, // exiba o estoque (mostra a chave)
        value: estoque, // exiba o valor (mostra o valor da chave)
        writable: false, // Pode alterar o valor (sim)true (não)false
        configurable: false // Pode apagar ou reconfigurar a chave? true(configuravel) false(Inão configuravel)
    })
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // exiba o estoque (mostra a chave)
            value: nome, // exiba o valor (mostra o valor da chave)
            writable: true, // Pode alterar o valor (sim)true (não)false
            configurable: true // Pode apagar ou reconfigurar a chave? true(configuravel) false(Inão configuravel)

        },
        preco: {
            enumerable: true, // exiba o estoque (mostra a chave)
            value: preco, // exiba o valor (mostra o valor da chave)
            writable: true, // Pode alterar o valor (sim)true (não)false
            configurable: true // Pode apagar ou reconfigurar a chave? true(configuravel) false(Inão configuravel)
        },

    })
}
const p1 = new Produto('Camiseta', 20, 3)
console.log(p1) // mostra o away com as chaves 
for (let chave in p1) {
    console.log(chave)
}