const candidatos = [{
        nome: 'Lula',
        partido: 'PT',
        numero: 13,
        numeroVotos: 0


    },
    {
        nome: 'Bolsonaro',
        partido: 'PL',
        numero: 22,
        numeroVotos: 0
    },
    {
        nome: 'Simone Tebet',
        partido: 'MDB',
        numero: 45,
        numeroVotos: 0
    }
]
let totalGeralVotos = 0
let votosNulos = 0
let votosBrancos = 0

function reset() {
    candidatoDiv.innerHTML = ''
    numeroDiv.innerHTML = ''
    partidoDiv.innerHTML = ''
    displayNumeros = ''
}

function confirmar(numeroDoCandidato) {

    numeroDoCandidato = parseInt(displayNumeros)
    const candidato = candidatos.find(candidato => candidato.numero === numeroDoCandidato)

    if (!candidato) return votosNulos++
    candidato.numeroVotos++
    totalGeralVotos++

    console.log(candidato.nome, candidato.numero, candidato.partido, candidato.numeroVotos)
    console.log('Votos Nulos', votosNulos)
    console.log('Votos brancos', votosBrancos)

    reset()
}

function branco() {
    votosBrancos++
    alert('Seu voto foi em Branco.')
    reset()
}

function corrigir() {
    reset()
}


let candidatoDiv = document.getElementById('candidato')
let numeroDiv = document.getElementById('numero')
let partidoDiv = document.getElementById('partido')
let displayNumeros = '' // variavel inicializada com uma string vazia


const elements = document.getElementsByClassName('btnNum') // botões do HTML pegando pela CLASSE (CSS)
for (let el of elements) { // fazendo um for para passar por cada button
    el.addEventListener('click', e => { // pegando o evento de click em cada botao
        if (displayNumeros.length === 2) return // Se display (o click) for igual a tamanho 2
        displayNumeros += e.target.value // concatena os clicks 

        candidatoDiv.innerHTML = displayNumeros
        candidatos.forEach(candidato => {
            if (candidato.numero === parseInt(displayNumeros)) {
                candidatoDiv.innerHTML = `Candidato à Presidência: ${candidato.nome}`
                numeroDiv.innerHTML = `Numero do candidato: ${candidato.numero}`
                partidoDiv.innerHTML = `Partido do candidato: ${candidato.partido}`
            }
        });
    })

}