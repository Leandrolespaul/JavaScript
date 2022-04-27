function rand(min, max) { // função para um tempo aleatório
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERROR!')
                return
            }
            resolve(msg.toUpperCase() + ' Passei na promise')
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

// const promises = [
//     esperaAi('Promise 1', rand(1, 5)),
//     esperaAi('Promise 2', rand(1, 5)),
//     esperaAi('Promise 3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5)),
// ]

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

// Promise.race(promises) // me entrega o primeiro valor
//     .then(function (valor) {
//         console.log(valor)
//     })
//     .catch(function (error) {
//         console.log(error)
//     })

function baixaPagina() {
    const emCache = false

    if (emCache) {
        return Promise.resolve('Pagina em cache')
    } else {
        return esperaAi('Baixei a pagina', 3000)
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))