const pedra = 1
const papel = 2
const tesoura = 3



function start(player1, player2) {

    console.log('Digite 1 para pedra, 2 para papel e 3 para tesoura.')
    console.log(`Player1 jogou: ${player1} | Player2 jogou: ${player2}`)


    if (typeof player1 !== 'number' || typeof player2 !== 'number') throw Error('Jogada inválida!')
    if (player1 > 3 || player2 > 3 || player1 < 1 || player2 < 1) return console.log('Jogada Inválida.')
    if (player1 === player2) return console.log('Empate.')

    if (player1 === 1 && player2 === 2) return console.log('Player1: Pedra <> Player2: Papel - Player2 (papel) é o Ganhador!')
    if (player1 === 1 && player2 === 3) return console.log('Player1: Pedra <> Player2: Tesoura - Player1 (pedra) é o ganhador!')
    if (player2 === 1 && player1 === 2) return console.log('Player1: Papel <> Player2: Pedra - Player1 (papel) é o ganhador!')
    if (player2 === 1 && player1 === 3) return console.log('Player1: Tesoura <> Player2: Pedra - Player2 (pedra) é o ganhador!')

    if (player1 === 2 && player2 === 1) return console.log('Player1: Papel <> Player2: Pedra - Player1 (papel) é o ganhador!')
    if (player1 === 2 && player2 === 3) return console.log('Player1: Papel <> Player2: Tesoura - Player2 (tesoura) é o ganhador!')
    if (player2 === 2 && player1 === 1) return console.log('Player1: Pedra <> Player2: Papel - Player2 (papel) é o ganhador!')
    if (player2 === 2 && player1 === 3) return console.log('Player1: Tesoura <> Player2: Papel - Player1 (tesoura) é o ganhador!')

    if (player1 === 3 && player2 === 1) return console.log('Player1: Tesoura <> Player2: Pedra - Player2 (pedra) é o ganhador!')
    if (player1 === 3 && player2 === 2) return console.log('Player1: Tesoura <> Player2: Papel - Player1 (tesoura) é o ganhador!')
    if (player2 === 3 && player1 === 1) return console.log('Player1: Pedra <> Player2: Tesoura - Player1 (pedra) é o ganhador!')
    if (player2 === 3 && player1 === 2) return console.log('Player1: Papel <> Player2: Tesoura - Player2 (tesoura) é o ganhador!')
}

start(1, 2)