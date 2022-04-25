// //3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.


// const numeros = [1, 4, 6, 87, 10]

// console.log(numeros.filter(maior => maior > 10))\



// Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.

// const numeros = [3, 6, 3, 2, 3]
// console.log(Math.max(...numeros))

//Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

// const idades = [18, 35, 5, 23, 67, 1, 2, 14]

// console.log('Pessoas maiores de 18 anos -> ', idades.filter(maior => maior >= 18))
// console.log('Pessoas menores de 18 anos -> ', idades.filter(menor => menor < 18))

//Crie um programa que entre com os dados de altura e sexo de 5 pessoas. Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino. Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.

// const pessoas = [{nome:'Philipe', altura: 1.60, sexo: 'M'}, {nome:'João', altura: 1.80, sexo: 'M'}, {nome:'Vivian', altura: 1.68, sexo: 'F'}]

// console.log(pessoas.filter(sexoMasculino => sexoMasculino.sexo === 'M'))
// console.log(pessoas.filter(sexoFeminino => sexoFeminino.sexo === 'F'))
// const alturaMaior = pessoas.reduce((acumulador, valor) => {
//     if(acumulador.altura > valor.altura) return acumulador
//     return valor
// })

// console.log('Altura maior é -> ', alturaMaior)



// Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para o primeiro).

// const nomes = ['Jober', 'Derick', 'Philipe', 'Marcel', 'Danilo']

// console.log(nomes.reverse())

// Peça para o usuário digitar uma data. Exiba separadamente o dia, o mês e o ano. (Obs.: não necessita de laço de repetição)

// const dia = 01
// const mes = 10
// const ano = 1985
// console.log(`${dia}/${mes}/${ano}`)



const array = [1,25,3,4]
const maior = array.reduce((ac, maior) =>{
if(ac > maior) return ac
return maior
})
console.log(maior)
