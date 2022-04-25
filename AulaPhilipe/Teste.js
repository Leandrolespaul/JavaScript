// nome e quantidade nom estoque
// lista de itens (Variados) quantidade ARRAY
// todos os itens que tem menos de 5 itens filtrar

const estoque = [{
    nome: 'Arroz-Sepé',
    tamanho: '5kg',
    quantidade: 20
},
{
    nome: 'Açucar-União',
    tamanho: '1kg',
    quantidade: 3
},
{
    nome: 'Óleo-Lisa',
    tamanho: '5kg',
    quantidade: 12
},
{
    nome: 'Coca-cola',
    tamanho: '600ml',
    quantidade: 4
},
{
    nome: 'Água com gás',
    tamanho: '500ml',
    quantidade: 39
},
{
    nome: 'Feijão-Pereira',
    tamanho: '1kg',
    quantidade: 5
},
{
    nome: 'Farinha-Pereira',
    tamanho: '1kg',
    quantidade: 16
},]
const media = estoque.reduce((ac, quantidade) => (ac += quantidade.quantidade / estoque.length), 0)
console.log('Média de todos os produtos em estoque -> ', media.toFixed(0), 'Unidades de itens.')
console.log('Precisa comprar (menos de 5 quantidade)-> ',estoque.filter(precisaComprar => precisaComprar.quantidade <= 5))
console.log('Itens que tem mais de 10 quantidades -> ', estoque.filter(quantidade => quantidade.quantidade >= 10))
console.log(estoque.splice(4, 3))
console.log(estoque.splice(-7, 1))
console.log(estoque)