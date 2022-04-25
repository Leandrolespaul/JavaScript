const h2o1Litro = {
    marca: 'h2o',
    tamanho: '1Litro',
    quantidade: 10
}

const coca2Litros = {
    marca: 'coca-cola',
    tamanho: '2litros',
    quantidade: 10
}
const geladeira = [
    coca2Litros,
    h2o1Litro
]






// contar o total de itens independente da marca e tamanho
// console.log('Quantidade de itens na geladeira ->', geladeira.length) // itens que ainda não foi tirado da geladeira
const totalGeladeira = geladeira.reduce(function (acumulador, valor) {
    acumulador = valor.quantidade + acumulador.quantidade
    return acumulador
})
console.log('Itens na geladeira (quantidade)-> ', totalGeladeira, 'itens -> ', geladeira,) // listar todos itens da geladeira



const listaPedidos = [
    {
        marca: 'coca-cola',
        tamanho: '2litros',
        quantidade: 11
    },

    {
        marca: 'h2o',
        tamanho: '1Litro',
        quantidade: 1
    }
]
console.log('Cliente pediu: ', listaPedidos)



function pedidoCliente(listaPedidos) {
    for (let i = 0; i < listaPedidos.length; i++) {
        for (let j = 0; j < geladeira.length; j++) {
            const clienteVaiQuerer = 'Sim'
            const itenGeladeira = geladeira[j]
            const itenPedido = listaPedidos[i]
            if (itenPedido.marca === itenGeladeira.marca && itenPedido.tamanho === itenGeladeira.tamanho) {
                if (itenGeladeira.quantidade < itenPedido.quantidade) { 
                    console.log('Temos apenas: ', itenGeladeira)
                    console.log('Cliente vai querer os itens disponives? ', itenGeladeira)
                    console.log('Cliente vai querer os itens disponives')
                    
                    if(clienteVaiQuerer === 'Sim') { // Aqui pergunto se o cliente vai querer os itens q estao disponiveis
                        console.log('Cliente recebe -> ', itenGeladeira )
                        itenGeladeira.quantidade = (itenGeladeira.quantidade - itenPedido.quantidade) //  tirarando o pedido
                    if (itenGeladeira.quantidade < 0 ){
                        itenGeladeira.quantidade = 0
                        
                    }
                    
                    }
                    
                } else {
                    itenGeladeira.quantidade = (itenGeladeira.quantidade - itenPedido.quantidade) //  tirarando o pedido
                    console.log('Cliente recebe -> ', itenPedido)
                }
            }
        }
    }
   
        
    console.log('Estoque na Geladeira', geladeira)


}

pedidoCliente(listaPedidos)



