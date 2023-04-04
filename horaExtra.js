//                                                TREINANDO ALGORITIMO CALCULAR HORA EXTRA E TETO
console.log("Servidor: Leonardo Mezzavilla Breder")

console.log("___________________________________________________________________________")

const HoraExtraLeonardo = 54.53

let isento = 1903.98
let seteMeio = 2826.65
let quinze = 3751.05
let viteDoisMeio = 4664.68
let vinteSeteMeio = 4664.68



// const calculoHoraExtra = (qtdHoraExtra) => {
//     const calculo = HoraExtraLeonardo  * qtdHoraExtra
    
//     return calculo
// }

const calcularSalarioDia = (salario, qtdDoMes) => {
    const calculo = salario / qtdDoMes 
    return calculo
    
}

const calcularTeto = (salarioMensal, qtdHoraExtra) => {
    
    const calculo = HoraExtraLeonardo  * qtdHoraExtra
    console.log("Valor da Hora Extra de Leonardo Mezzavilla: ","R$", HoraExtraLeonardo.toFixed(2))
    console.log("Valor da Hora Extra multiplicado pela quantidade de", qtdHoraExtra, "Horas:","R$",calculo.toFixed(2))

    let total = salarioMensal + calculo
    console.log("Total Salário mais as Horas Extras: ","R$",total.toFixed(2))
    console.log("___________________________________________________________________________")

    if(total <= isento){return console.log("Você está isento.")}
    if(total <= seteMeio){return console.log("Você pagará 7,5% do Imposto de Renda, no valor: R$142.80")}
    if(total <= quinze){return console.log("Você pagará 15% do Imposto de Renda, no valor: R$354.80")}
    if(total <= viteDoisMeio){return console.log("Você pagará 22,5% do Imposto de Renda, no valor: R$636,13")}
    if(total > vinteSeteMeio){return console.log("Você pagará 27,5% do Imposto de Renda, no valor: R$869.36")}


}                        


//                                                      DIGITE AQUI O SALÁRIO BASE   
//                                                                   |DIGITE AQUI OS DIAS DOS MESES QUE TRABALHOU                    
//                                                                   |      /
//                                                                   |     /
//                                                                   V    V
console.log("Salário calculado por dia: ","R$", calcularSalarioDia(2236.51, 30).toFixed(2))

//   DIGITE AQUI O SALARIO TOTAL MAIS ENCARGOS
//            | DIGITE AQUI QUANTIDADE DE HORAS EXTRAS
//            |    |     
//            |    |
//            V    V
calcularTeto(3471.28, 40)
