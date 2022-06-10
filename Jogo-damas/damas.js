const array = [1, 2, 3, 4, 5]

console.log(array.some(valor => valor === 10))

const value = array.some(function (valor) {
    return valor === 10
})

console.log(value)