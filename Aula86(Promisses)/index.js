function rand(min, max) { // função para um tempo aleatório
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min ) + min)
}

function esperaAi (msg, tempo) {  // função promise 
    return new Promise((resolve, reject) => {
        if(msg !== 'string') reject('ERROR')
    setTimeout( () => {
        resolve(msg)
    }, tempo )
    })
}

esperaAi('Conexão com DB', rand(1, 3))
.then(resposta => {
    console.log(resposta)
    return esperaAi('Buscando dados da base', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi('buscando...', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
}).then(() => {
    console.log('Exibe os dados da tela')
})
.catch(error => {
    console.log('Error', error)
})

console.log('Isso aqui será antes de qualquer promisse.')
