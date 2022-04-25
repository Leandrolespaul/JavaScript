const empresas = [
    {empresa: 'Sumicity'},
    {empresa: 'Sumicity'},
    {empresa: 'Sumicity'},
    {empresa: 'Restaurante do Jairo'},
    {empresa: 'Facumuladorebook'},
    {empresa: 'Facumuladorebook'},
    {empresa: 'Restaurante do Jairo'},
    {empresa: 'Beira Rio'},
    {empresa: 'Facumuladorebook'},
    {empresa: 'Restaurante do Jairo'},
    {empresa: 'Sumicity'},
    {empresa: 'Google'},
    {empresa: 'Google'},
    {empresa: 'Google'},
    {empresa: 'Google'},
    {empresa: 'Google'},
    {empresa: 'Facumuladorebook'},
    {empresa: 'Sumicity'},
]

const obj = empresas.reduce((acumulador, valor) => {
    if (acumulador[valor.empresa]) {
        return {...acumulador, [valor.empresa]: acumulador[valor.empresa] + 1}
    } else {
        return {...acumulador, [valor.empresa]: 1}
    }
}, {})

console.log(obj)



