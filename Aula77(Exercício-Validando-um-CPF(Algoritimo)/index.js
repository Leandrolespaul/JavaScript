// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

//########################################################################################################################
// let cpf = '705.484.450-52'
//                 // tudo que não for numero é representado por '' (nada)
// let cpflimpo = cpf.replace(/\D+/g, '') // tirar os pontos do CPF (/\D+/g) = repreesentação númerica q reepresenta qualquer coisa q nao é um numero
// cpfArray = Array.from(cpflimpo) // Tenho um array da minha string, converti minha string em um array
// console.log(cpfArray.reduce((ac, val) => ac + Number(val), 0))

function ValidaCPF(cpfenviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpfenviado.replace(/\D+/g, '') // tirar os pontos do CPF (/\D+/g) = repreesentação númerica q reepresenta qualquer coisa q nao é um numero
        }
    })
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false
    if (this.cpfLimpo.length !== 11) return false


    return true
}

// metodo para validar o CPF

ValidaCPF.prototype.valida = function () {
    // metodo q retorna verdadeiro ou falso
    if (typeof this.cpfLimpo === 'undefined') return false // acessando tbm o cpfLimpo
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequencia()) return false

    // mandando o metodo do cria digito
    const cpfParcial = this.cpfLimpo.slice(0, -2) // Pegando os 9 primeiros digitos do cpf
    const digito1 = this.criaDigito(cpfParcial)// 
    const digito2 = this.criaDigito(cpfParcial + digito1)// 

    // comparar com outros cpf
    const novoCpf = cpfParcial + digito1 + digito2 // "+" aqui é concatenando 

    return novoCpf === this.cpfLimpo
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) { //
    // converter cpfparcial em um array
    const cpfArray = Array.from(cpfParcial)

    // CALCULO DO CPF (Passando sobre os numeros regressivamente)
    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, valor) => {
        ac += (regressivo * Number(valor))
        regressivo--
        return ac
    }, 0)
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito) // opração ternária
}

ValidaCPF.prototype.isSequencia = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCPF('10945157797')

console.log(cpf.valida())




if (cpf.valida()) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}
