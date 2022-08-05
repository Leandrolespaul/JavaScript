function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;

}


let horas = 0
let minutos = 0
let segundos = 0
let milessimos = 0
let timer
let cronometroJaStartado = false

const start = () => {

    if (cronometroJaStartado) return
    cronometroJaStartado = true

    timer = setInterval(() => {
        if ((milessimos += 10) === 1000) {
            segundos++
            milessimos = 0
        }
        if (segundos === 60) {
            minutos++
            segundos = 0
        }
        if (minutos === 60) {
            horas++
            minutos = 0
        }
        if (horas === 24) {
            horas = 0
        }
        const cronometro = document.getElementById('cronometro')
        cronometro.innerText = `${zeroEsquerda(horas)} : ${zeroEsquerda(minutos)} : ${zeroEsquerda(segundos)} : ${zeroEsquerda(milessimos)}`
    }, 10)


}




const pause = () => {
    clearInterval(timer)
    cronometroJaStartado = false
}

const reset = () => {
    clearInterval(timer)
    horas = 0
    minutos = 0
    segundos = 0
    milessimos = 0
    cronometroJaStartado = false
    document.getElementById('cronometro').innerHTML = '00 : 00 : 00 : 00'
}