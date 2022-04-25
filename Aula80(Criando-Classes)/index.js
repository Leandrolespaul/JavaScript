class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome

    }
    falar() {
        console.log(`${this.nome} esta falando`)
    }

    comer() {
        console.log(`${this.nome} esta comendo`)
    }

    beber() {
        console.log(`${this.nome} esta bebendo`)
    }
}

function Pessoa2(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} esta falando`)

}

Pessoa2.prototype.comer = function() {
    console.log(`${this.nome} esta comendo`)

}

Pessoa2.prototype.beber = function() {
    console.log(`${this.nome} esta bebendo`)

}


const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa2('Maria', 'A.')

console.log(p1)
console.log(p2)