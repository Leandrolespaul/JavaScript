const tabuleiro = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const guardado = tabuleiro

const jogador1 = "X"
const jogador2 = "O"

let vezJogador = jogador1


function jogar(casa) {

    if (typeof casa !== 'number' || casa > 8 || casa < 0) throw Error('Jogada inválida!')

    if (typeof tabuleiro[casa] === 'string') throw Error('Casa já marcada. Escolha outra casa!')
    // pensei no lance dos dados os tipos...

    tabuleiro[casa] = vezJogador

    vezJogador = vezJogador === jogador1 ? jogador2 : jogador1


    if (tabuleiro[0] === jogador1 && tabuleiro[1] === jogador1 && tabuleiro[2] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[3] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[5] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[6] === jogador1 && tabuleiro[7] === jogador1 && tabuleiro[8] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[0] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[8] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[2] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[6] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[0] === jogador1 && tabuleiro[3] === jogador1 && tabuleiro[6] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[1] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[7] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')
    if (tabuleiro[2] === jogador1 && tabuleiro[5] === jogador1 && tabuleiro[8] === jogador1) return console.log('Jogador 1 ganhou! Parabéns!!!')

    if (tabuleiro[0] === jogador2 && tabuleiro[1] === jogador2 && tabuleiro[2] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[3] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[5] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[6] === jogador2 && tabuleiro[7] === jogador2 && tabuleiro[8] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[0] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[8] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[2] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[6] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[0] === jogador2 && tabuleiro[3] === jogador2 && tabuleiro[6] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[1] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[7] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')
    if (tabuleiro[2] === jogador2 && tabuleiro[5] === jogador2 && tabuleiro[8] === jogador2) return console.log('Jogador 2 ganhou! Parabéns!!!')

    // let casasMarcadas = 0
    // for (let i = 0; i < tabuleiro.length; i++) {
    //     if (typeof tabuleiro[i] === 'string') {
    //         casasMarcadas++
    //     }
    // }
    // if (casasMarcadas === 9) {
    //     console.log('Velha!')
    // }
    // console.log(tabuleiro)


    if (tabuleiro.every(valor => typeof valor === 'string')) console.log('Velha!')

    console.log(tabuleiro)




}




jogar(0)
jogar(1)
jogar(5)
jogar(4)
jogar(2)
jogar(3)
jogar(7)
jogar(8)
jogar(6)