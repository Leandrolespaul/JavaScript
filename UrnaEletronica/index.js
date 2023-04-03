const candidatosPresidente = [{
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
const candidatosGovernador = [{
        nome: 'Garotinho',
        partido: 'PSDB',
        numero: 24,
        numeroVotos: 0

    },
    {
        nome: 'Danilo',
        partido: 'PL',
        numero: 22,
        numeroVotos: 0
    },
    {
        nome: 'Rosinha',
        partido: 'MDB',
        numero: 54,
        numeroVotos: 0
    }
]
const candidatoDepEstadual = [{
        nome: 'Pelé',
        partido: 'PSDB',
        numero: 2434,
        numeroVotos: 0

    },
    {
        nome: 'Lulino',
        partido: 'PL',
        numero: 2267,
        numeroVotos: 0
    },
    {
        nome: 'Caioq',
        partido: 'MDB',
        numero: 5421,
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
    votoBranco.innerHTML = ''
}

function confirmar(numeroDoCandidato) {

    numeroDoCandidato = parseInt(displayNumeros)
    const candidato = candidatosPresidente.find(candidato => candidato.numero === numeroDoCandidato)

    if (!candidato) {
        reset()
        votoAnulado.innerHTML = `VOTO NULO`

        return votosNulos++


    }

    candidato.numeroVotos++
    totalGeralVotos++

    console.log(candidato.nome, candidato.numero, candidato.partido, candidato.numeroVotos)
    console.log('Votos Nulos', votosNulos)
    console.log('Votos brancos', votosBrancos)

    reset()



}

function branco() {
    votoAnulado.innerHTML = ''
    votosBrancos++
    reset()
    votoBranco.innerHTML = `VOTO EM BRANCO`

}

function corrigir() {
    reset()
}
let votoAnulado = document.getElementById('votoAnulado')
let votoBranco = document.getElementById('votoBranco')
let candidatoDiv = document.getElementById('candidato')
let numeroDiv = document.getElementById('numero')
let partidoDiv = document.getElementById('partido')
let displayNumeros = '' // variavel inicializada com uma string vazia

const elements = document.getElementsByClassName('btnNum') // botões do HTML pegando pela CLASSE (CSS)
const evento = e => {
    displayNumeros += e.target.value
    console.log(displayNumeros)
}

for (let el of elements) { // fazendo um for para passar por cada button
    el.addEventListener('click', evento)


}

function voto() {
    if (displayNumeros.length === 4) return
    candidatoDepEstadual.forEach(depEst => {
        if (depEst.numero === parseInt(displayNumeros)) {
            console.log(depEst.nome)
        }
    })
}

voto()


candidatosPresidente.forEach(candidato => {
    if (candidato.numero === parseInt(displayNumeros)) {
        candidatoDiv.innerHTML = `Candidato à Presidência: ${candidato.nome}`
        numeroDiv.innerHTML = `Numero do candidato: ${candidato.numero}`
        partidoDiv.innerHTML = `Partido do candidato: ${candidato.partido}`
    }

});