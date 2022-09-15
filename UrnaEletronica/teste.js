// function contadoraDePalavras(frase) {
//     frase = frase.toLowerCase()
//     const objeto = {}

//     const textoSVirgulaSPonto = frase.replace(/,/g, ' ').replace('.', '').replace(': ', ' ')

//     const fraseSeparada = textoSVirgulaSPonto.split(' ')


//     for (let i = 0; i < fraseSeparada.length; i++) {
//         if (!objeto[fraseSeparada[i]]) { // se o valor (0, 1, 2...) for undenfiend (falso)
//             objeto[fraseSeparada[i]] = 1 // o valor passará a ser 1 
//         } else {
//             objeto[fraseSeparada[i]] = objeto[fraseSeparada[i]] + 1 // se o valor ja for 1 e vier outro valor soma + 1
//         }
//     }

//     return objeto
// }
// console.log(contadoraDePalavras('mudei um texto aqui para mostrar que o texto pode ser mudado aqui.'))


// function objeto() {
//     var endereco = {
//         rua: "Av do CPA",
//         numero: 1293,
//         bairro: "Jardim Cuiabá",
//         cidade: "Cuiabá",
//         uf: "MT"
//     };
//     console.log(`O usuário mora no ${endereco['cidade']}/${endereco['uf']} no bairro ${endereco['bairro']} cuiabá na ${endereco['rua']} numero ${endereco.numero}.`)
// }

// objeto()

const arrayObj = {
    nome: 'Leandro'
}
const nomeNovo = arrayObj.nome
arrayObj['nome'] = 'leo'
arrayObj['nome'] = nomeNovo

console.log(arrayObj)