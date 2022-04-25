// Some todos os numeros (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)


// Some todos os numeros (reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador = acumulador + valor // ou acumulador += valor
//     return acumulador
//  //   }, 0)  Valor inicial para o acumulador
// }, 0)
// console.log(total)

// Retorne um array com os pares (reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     if(valor % 2 === 0) acumulador.push(valor)
//     return acumulador
//  //   }, 0)  Valor inicial para o acumulador
// }, [])
// console.log(total)




// // Retorne um array com o dobro dos valores (reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function(acumulador, valor, indice, array) {
//     acumulador.push(valor * 2)
//     return acumulador
//  //   }, 0)  Valor inicial para o acumulador
// }, [])
// console.log(total)




// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
   if(acumulador.idade > valor.idade) return acumulador
   return valor
})
console.log(maisVelha)
