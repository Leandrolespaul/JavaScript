const tabuleiro = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const jogador1 = "X"
const jogador2 = "O"

let vezJogador = jogador1


function jogar(casa) {

    if (typeof casa !== 'number' || casa > 8 || casa < 0) throw Error('Jogada inválida!')
    
    

    tabuleiro[casa] = vezJogador

    vezJogador = vezJogador === jogador1 ? jogador2 : jogador1


}


jogar(4)
jogar(4)




console.log(tabuleiro)