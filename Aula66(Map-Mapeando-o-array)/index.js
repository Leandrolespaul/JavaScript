

// dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosDobrado = numeros.map(valor => valor * 2)
// console.log(numerosDobrado)



//Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]
// Retorne apenas uma string com o nome da pessoa
// const umaString = pessoas.map(valor => valor.nome)
// // console.log(umaString)


// // Remova apenas a chave "nome" do objeto
// const chaveIdRemovida = pessoas.map(function (obj) {
//     delete obj.nome
//     return obj
// })
// // Remova apenas a chave "nome" do objeto
// const chaveIdRemovida = pessoas.map(obj => ({idade: obj.idade}))
// console.log(chaveIdRemovida)

// Adicione uma chave id em cada objeto
const comId = pessoas.map(function(obj, indice) { 
    const newObj = {...obj} // criando a copia do objeto 
    newObj.id = indice // adicionando id no obj
    return newObj
})
console.log(comId)