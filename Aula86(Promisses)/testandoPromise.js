function player(email, senha) {
    return new Promise((resolve, reject) => {
        if (typeof email !== 'string' || typeof senha !== 'number') reject('Erro')
        setTimeout(() => {
            resolve({
                email,
                senha
            })
        }, 2000)


    })
}
function executarDepoisLogar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Executei depois de logar!')
        }, 2600)
    })
}

function terminado(msg) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, 2500)
    })

}
async function logar() {
    try {
        const jogador = await player('leandrolespaul01@hotmail.com', 25311417)
        console.log(jogador)
        const executar = executarDepoisLogar()
        console.log(executar)
        const executado = await terminado('Jogador logado com sucesso!')
        console.log(executado)

    } catch (error) {
        console.log('Error')
    }

}
console.log('Primeiro a Executar.')
logar()