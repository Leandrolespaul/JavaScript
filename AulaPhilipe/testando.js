const pessoas = [{
    nome: 'Leandro', 
    sobrenome: 'Cunha',
    idade: 36
},
{
    nome: 'Philipe', 
    sobrenome: 'Santos',
    idade: 32
},
{
    nome: 'Danilo', 
    sobrenome: 'Mello',
    idade: 38
}
]             

console.log('ARRAY ORIGINAL -> ', pessoas)

const media = pessoas.reduce((media, idades) => (media += idades.idade / pessoas.length), 0)
console.log('MEDIA DAS IDADES -> ', media.toFixed(2))


// CALCULEI A MEDIA DAS IDADES !!!! 

console.log('ARRAY DE FORMA ORDENADA ALFABETICA -> ', pessoas.sort(function(a, b) { //FORMA ORDENADA PELO ALFANBETO O NOME!!! 
    if(a.nome < b.nome) {
        return -1
    } else {
        return true
    }
}))


console.log('ARRAY DE FORMA ORDENADA NUMERICA -> ', pessoas.sort(function(a, b) { //FORMA ORDENADA NUMERICAMENTE A IDADE!!!
    if(a.idade < b.idade) {
        return -1
    } else {
        return true
    }
}))

console.log('SOMENTE A PESSOA COM SOBRENOME (CUNHA) -> ', pessoas.filter(sobrenome => sobrenome.sobrenome === 'Cunha'))

// console.log('OBJETOS EXCLUÍDOS DO ARRAY -> ', pessoas.splice(0, 2))


for(let i = 0; i < pessoas.length; i++){  
   if ( pessoas[i].nome === 'Danilo') {
       console.log('Tem o nome que procura!', pessoas[i].nome,'//', 'Informação: ', pessoas[i], 'Esta na pocisão do Array no numero -> ', i)
   }else {
       console.log('Não encontramos esse nome, Sorry!')
   }
   
}


