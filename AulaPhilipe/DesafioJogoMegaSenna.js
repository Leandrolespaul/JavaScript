// Gerador de jogo da mega sena
console.log('GERADOR DE JOGO DA MEGA SENA')
console.log('__________________________________')
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
     21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
      42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60
    ]

const jogo = [13, 15, 35, 2, 5, 21]
console.log('Meu Jogo -> ', jogo)

let numeroAleatorio;
let valor;
for (let i = numeros.length; i;) {
    numeroAleatorio = Math.random() * i-- | 0;
    valor = numeros[numeroAleatorio];
    // troca o número aleatório pelo atual
    numeros[numeroAleatorio] = numeros[i];
    // troca o atual pelo aleatório
    numeros[i] = valor;
}

let sorteio = []
for(let i = 0; i < 6; i++) {
   sorteio.push(numeros[i])
  
}
console.log('Numeros Sorteados -> ', sorteio.sort(function(a, b){
    if(a < b) {
        return -1
    } else {
        return true
    }
}))




    let acertos = []
    for (let i = 0; i < jogo.length; i++) {
        if (sorteio.indexOf(jogo[i]) > -1) {
            acertos.push(jogo[i]);
        }
    }

console.log("Você acertou " + acertos.length + " números: ", acertos);
if(acertos.length === 1){
    console.log(`Tente outra vez, você acertou apenas ${acertos.length}`)
}
if(acertos.length === 2){
    console.log(`Tente outra vez, você acertou apenas ${acertos.length}`)
}
if(acertos.length === 3){
    console.log(`Tente outra vez, você acertou apenas ${acertos.length}`)
}
if(acertos.length === 4) {
    console.log('Você acertou a quadra!')
} if (acertos.length === 5) {
    console.log('Você acertou a quina!')
}if(acertos.length === 6){
    console.log('Você foi o grande ganhador da Mega Sena')
}


