function teste() {
    console.log('Este é meu teste.')
}

class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
        teste()
    }
    aumentarVolume() {
        this.volume += 2
    }
    // método de instância
    diminuirVolume() {
        this.volume -= 2
    }
    // método estático ... so consegue acessar ele pela classe... referente a class
   static trocaPilha() {
        console.log('Ok, vou trocar a pilha.')
    }
    // métodos estáticos não tem acesso aos dados da instância
    static soma(x, y) {
        console.log(x + y)
    }
}

const controle1 = new ControleRemoto('LG')

controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
controle1.aumentarVolume()
ControleRemoto.trocaPilha()
ControleRemoto.soma(2, 3)

console.log(controle1)