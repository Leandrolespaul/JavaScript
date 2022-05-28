const TABULEIRO_MODELO = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let tabuleiro = [...TABULEIRO_MODELO]

const jogador1 = "X"
const jogador2 = "O"

let jogadores = [jogador1, jogador2]

let vezJogador = rand(jogadores)

const jogadasVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


console.log('Vez do Jogador: ', vezJogador)


function jogar(casa) {

    if (typeof casa !== 'number' || casa > 8 || casa < 0) throw Error('Jogada inválida!')

    if (typeof tabuleiro[casa] === 'string') throw Error('Casa já marcada. Escolha outra casa!')
    // pensei no lance dos dados os tipos...

    tabuleiro[casa] = vezJogador

    vezJogador = vezJogador === jogador1 ? jogador2 : jogador1

    if (jogadasVencedoras.some(jogada => jogada.every(casa => tabuleiro[casa] === jogador1))) return jogadorVencedor(jogador1)

    if (jogadasVencedoras.some(jogada => jogada.every(casa => tabuleiro[casa] === jogador2))) return jogadorVencedor(jogador2)




    // if (tabuleiro[0] === jogador1 && tabuleiro[1] === jogador1 && tabuleiro[2] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[3] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[5] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[6] === jogador1 && tabuleiro[7] === jogador1 && tabuleiro[8] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[0] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[8] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[2] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[6] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[0] === jogador1 && tabuleiro[3] === jogador1 && tabuleiro[6] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[1] === jogador1 && tabuleiro[4] === jogador1 && tabuleiro[7] === jogador1) return jogadorXVenceu()
    // if (tabuleiro[2] === jogador1 && tabuleiro[5] === jogador1 && tabuleiro[8] === jogador1) return jogadorXVenceu()

    // if (tabuleiro[0] === jogador2 && tabuleiro[1] === jogador2 && tabuleiro[2] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[3] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[5] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[6] === jogador2 && tabuleiro[7] === jogador2 && tabuleiro[8] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[0] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[8] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[2] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[6] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[0] === jogador2 && tabuleiro[3] === jogador2 && tabuleiro[6] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[1] === jogador2 && tabuleiro[4] === jogador2 && tabuleiro[7] === jogador2) return jogadorOVenceu()
    // if (tabuleiro[2] === jogador2 && tabuleiro[5] === jogador2 && tabuleiro[8] === jogador2) return jogadorOVenceu()

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


    if (tabuleiro.every(valor => typeof valor === 'string')) {
        console.log('Velha!')
        resetGame()
    }

    console.log(tabuleiro)

}

function resetGame() {
    tabuleiro = [...TABULEIRO_MODELO]
}

function rand(jogadores) {
    return jogadores[(Math.random() * jogadores.length) | 0]
}

let pontuacaoJogadorX = 0
let pontuacaoJogadorO = 0

const funcoes = {
    jogadorXVenceu: function () {
        pontuacaoJogadorX++
        console.log('Jogador X venceu!!!', pontuacaoJogadorX)
    },
    jogadorOVenceu: function () {
        pontuacaoJogadorO++
        console.log('Jogador O venceu!!!', pontuacaoJogadorO)
    }

}


// function jogadorXVenceu() {
//     pontuacaoJogadorX++
//     console.log('Jogador X venceu!!!', pontuacaoJogadorX)
// }

// function jogadorOVenceu() {
//     pontuacaoJogadorO++
//     console.log('Jogador O venceu!!!', pontuacaoJogadorO)
// }

function jogadorVencedor(jogador) {
    funcoes['jogador' + jogador + 'Venceu']()
}



jogar(0)
jogar(4)
jogar(1)
jogar(7)
jogar(2)





// jogar(0)
// jogar(1)
// jogar(5)
// jogar(4)
// jogar(2)
// jogar(3)
// jogar(7)
// jogar(8)
// jogar(6)