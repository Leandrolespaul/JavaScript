
// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (strings, array ou objetos)
// for of - Retorna o valor em si (interavéis, arrays ou strings)







//            123456789...
const nomes = ['Luiz', 'Otávio', 'Henrique'];

//            CONDIÇÃO
//   CONTROLE          TAMANHO     INCREMENTO
for (let i = 0; i < nomes .length; i++) {           //clássico  
    console.log(nomes[i]);
}//     nomes[i]:  nomes = VARIAVÉL ORIGINAL, [i] = VARIÁVEL DE CONTROLE

console.log('_______________________________');    
//   SIMPLIFICADA DO CLASSICO
for (let i in nomes ) {                             // for in
    console.log(nomes[i]);
}


console.log('_______________________________');       

for (let valor of nomes ) {                         // for of
    console.log(valor);
}

console.log('_______________________________');

nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});      // Luiz 0 [ 'Luiz', 'Otávio', 'Henrique' ]
        // Otávio 1 [ 'Luiz', 'Otávio', 'Henrique' ]    recebe tudo valores indices e arrays
       // Henrique 2 [ 'Luiz', 'Otávio', 'Henrique' ]




