//MAP() MANUAL
const cotacaoDolarReal = 5.61 // declarando minha cotação para converter em real
const valoresDolar = [2.50, 4.59, 2.40, 12.42, 23, 90] // meu array com os valores em dolar
function meuMap(func) { // função MAP MANUAL -> recebe um para metro como função
    const arrayRetorno = [] // onde os valores depois de calculados irá ficar
    for(let i = 0; i < this.length; i++) { // o laço de repetição o for!
        const itenAInserir = func(this[i]) // onde insere a função
        arrayRetorno.push(itenAInserir)// push adiciona o valor no ultimo lugar do array vazio 
    }

    return arrayRetorno // retorna o array vazio com seus valores
}
Array.prototype.meuMap = meuMap 
console.log(valoresDolar.meuMap(valorDolar => (valorDolar * cotacaoDolarReal).toFixed(2)))


// console.log(valoresDolar.map(valorDolar => 'Leandro'))