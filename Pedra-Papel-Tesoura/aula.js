const PEDRA = 'PEDRA'
const PAPEL = 'PAPEL'
const TESOURA = 'TESOURA'

const jogadasValidas = [PEDRA, PAPEL, TESOURA]

const pedra = {
    nome: PEDRA,
    ganhaDe: TESOURA
}
const papel = {
    nome: PAPEL,
    ganhaDe: PEDRA
}
const tesoura = {
    nome: TESOURA,
    ganhaDe: PAPEL
                                                                        
}
const objs = {
    PEDRA: pedra,
    PAPEL: papel,
    TESOURA: tesoura
}

function jogar(opcaoP1, opcaoP2) {
    opcaoP1 = opcaoP1.toUpperCase()
    opcaoP2 = opcaoP2.toUpperCase()

    if (!jogadasValidas.includes(opcaoP1)) return console.log('Jogada Inválida.')
    if (!jogadasValidas.includes(opcaoP2)) return console.log('Jogada Inválida.')
    if (opcaoP1 === opcaoP2) return console.log('Empate.')

    if (objs[opcaoP1].ganhaDe === opcaoP2) return console.log('Player 1 é o Ganhador!')
    return console.log('Player 2 é o Ganhador!')
}

jogar(TESOURA, PAPEL)