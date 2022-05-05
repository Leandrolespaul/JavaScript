function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        console.log('Serei logado em porimeiro lugar')
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERROR!')
                return
            }
            resolve(msg.toUpperCase() + ' Passei na promise')
        }, tempo)
    })

}




async function play() {
    const resultado = await esperaAi('SOU A PROMESSA!', 2500)
    console.log(resultado)
}

play()
console.log('Hello World')