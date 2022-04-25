// const numeros = [34, 5, 6, 8, 2, 3, 4]
// const dobro = numeros.map(dobro => dobro * 2)
// console.log(dobro)



// const carros = [{
//     car: 'Ford', 
//     color: 'Black'
// },
// {
//     car: 'Ferrari',
//     color: 'Red'
// }]

// console.log('Impirmi os carros vermelhos -> ', carros.filter(colors => colors.color === 'Red'))




const notas = [7, 2.5, 6.8, 8, 9, 9.2]
const resultado = notas.reduce(media => (media += media) / 2  )
const apOuRp = () => resultado > 5 ? 'Aluno Aprovado' : 'Aluno Reprovado'
console.log(resultado, apOuRp())

