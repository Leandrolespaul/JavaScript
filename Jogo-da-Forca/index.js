let palavra = 'Beterrába'.toUpperCase()
let palavraUsuario = palavra.split('').fill('_')
const letrasUsadas = []
let erros = 0
const MAX_ERROS = 7

function jogar(letra) {
    if (typeof letra !== 'string') return console.log('Caractere inválido.')

    if (letra.length !== 1) return console.log('Error')

    letra = letra.toUpperCase()

    if (erros >= MAX_ERROS - 1) return console.log('Jogador perdeu.')

    if (letrasUsadas.some(valor => valor === letra)) return console.log('Letra ja foi escolhida.')

    letrasUsadas.push(letra)

    if (palavra.indexOf(letra) === -1) {
        erros++
        return console.log('Você gastou uma tentativa: ', erros)
    }

    console.log('Você acertou uma letra: ', letra)

    palavraUsuario[palavra.indexOf(letra)] = letra
    console.log(palavraUsuario)
    if (!palavraUsuario.some(valor => valor === '_')) {

        palavraUsuario = palavra.split('').fill('_')
        letrasUsadas.length = 0
        erros = 0

        return console.log('Jogador Ganhou!')

    }



}

jogar('a')


console.log(letras)