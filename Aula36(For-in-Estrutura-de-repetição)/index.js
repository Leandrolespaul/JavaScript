// for in -> lê os indices ou chaves do objeto
const pessoas = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
};
    for (let chave in pessoas) {
        console.log(chave, pessoas[chave]);
    }        //     chave é o valor da variavel (nome, sobrenome, idade)
             //     pessoas[chave] é o valor que esta no objeto (Luiz, Otavio, 30)
















// const frutas =  ['Pera', 'Maça', 'Uva'];

// for (let indice in frutas) {            //ler pos índices
//     console.log(frutas[indice]);
// }














// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
