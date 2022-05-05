function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(mensagem, tempo){ // essa função me loga a mensagem no tempo aleatorio de uma outra função
    // retorno a promise
    return new Promise((resolve, reject) => {

        setTimeout(() => {
           
        }, tempo)

        resolve(mensagem)

        reject((e) => ('Erro de ordem', e))
    })
    
}

// esperaAi('Marrogar', rand(1, 5))
// .then((mensagem) => {
//     console.log(mensagem)
//     return esperaAi('leidy', rand(1, 5))
// })
// .then((mensagem) => {
//     console.log(mensagem)
//     return esperaAi('Db', rand(1, 5))
// })
// .then((mensagem) => {
//     console.log(mensagem)
//     return esperaAi('Gordos', rand(1, 5))
// })
// .then((mensagem) => {
//     console.log(mensagem)
//     return esperaAi('Prince', rand(1, 5))
// })
// .then((mensagem) => {
//     console.log(mensagem)
// })
// .then((mensagem) => {
//     console.log(mensagem)
//     return esperaAi('Parabéns você matou todos os boss!', rand(1, 5))
// })

async function boss() {
    try{
        const boss1 = await esperaAi('Marrogar', rand(1, 5))
        console.log(boss1)
    
        const boss2 = await esperaAi('Leidy', rand(1, 5))
        console.log(boss2)
    
        const boss3 = await esperaAi('Db', rand(1, 5))
        console.log(boss3)
    
        const boss4 = await esperaAi('Gordos', rand(1, 5))
        console.log(boss4)
    
        const boss5 = await esperaAi('Prince', rand(1, 5))
        console.log(boss5)
    }
    catch(e) {
        console.log(e, 'Não fez na ordem')
    }

}
boss()