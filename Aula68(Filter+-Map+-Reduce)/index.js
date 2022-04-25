// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar os valores
// Reduzir (somar tudo)

// Retorne a soma do dobro de todos os pares
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numerosPares = numeros
.filter(valor => valor % 2 === 0)     // Filtrar pares
.map(valor => valor * 2)  // Dobrar os valores
.reduce((ac, valor) => ac + valor) // Dobrar os valores 

console.log(numerosPares)

console.log(numeros.reduce((ac, valor) => ac + valor, 0 ))