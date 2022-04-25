class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false

    }


    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
        }
        this.ligado = false
    }
}



class Smartphone extends DispositivoEletronico { // heraça q extende a class DispositivoEletronico q eh o pai
    constructor(nome, cor, modelo) {
        super(nome)
        this.cor = cor // adicionando mais propriedades ao meu Smarthphone
        this.modelo = modelo
    }

}

class Tablet extends DispositivoEletronico {
    constructor(nome, temwifi) {
        super(nome )
        this.temwifi = temwifi
    }
    ligar() {
        console.log('Olha, você alterou o método ligar.')
    }
    falaOi(){
        console.log('Oi')
    }
}


const s1 = new Smartphone('Iphone', 'Black', 'Galaxy s10')

console.log(s1)

const t1 = new Tablet('iPad', true )
t1.ligar()
t1.ligar()
t1.falaOi()
// console.log(t1.ligado)