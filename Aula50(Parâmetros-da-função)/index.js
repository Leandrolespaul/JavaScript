
// // arguments que sustenta todos os argumentos enviados
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) { // criei uma variavel chamada 'argumento' e to pegando os arguments (ou seja os arrays)
//         total += argumento; // e aqui eu peço para somar todos os arguments que estao na variavel "argumento"
//     }
//     console.log(total); // mostro o total do meu for em cima de argumnents (1 + 2 + 3 + 4 + 5 + 6 + 7  = 28 ) resultado 28
// }
// funcao(1, 2, 3, 4, 5, 6, 7); // o valor de arguments esta aqui


//#####################################################################################################################################


// // arguments que sustenta todos os argumentos enviados (((((OBS: NÃO FUNCIONA EM ARROW FUNCTION))))
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) { // criei uma variavel chamada 'argumento' e to pegando os arguments (ou seja os arrays)
//         total += argumento; // e aqui eu peço para somar todos os arguments que estao na variavel "argumento"
//     }
//     console.log(total, a, b, c); // mostro o total do meu for em cima de argumnents (1 + 2 + 3 + 4 + 5 + 6 + 7  = 28 ) resultado 28
// }                                // e mostra os arrays dos valores de a, b, c (28=0 a=1 b=2 c=3) resultado 28 1 2 3
// funcao(1, 2, 3, 4, 5, 6, 7); // o valor de arguments esta aqui
 // ##########################################################################################################################
 
//  // de OBJETO
//  function funcao({nome, sobrenome, idade}) { // Fazendo a atribuição via desestruturação
//     console.log(nome, sobrenome, idade);                      
// }                                                              
// funcao({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});  // Fazendo a desestruturação

//_____________________________________________________________________________________________

// // de ARRAY
//  // de OBJETO
//  function funcao([valor1, valor2, valor3]) { // Fazendo a atribuição via desestruturação
//     console.log(valor1, valor2, valor3);                      
// }                                                              
// funcao(['Luiz Otávio', 'Miranda', 30]);  // Fazendo a desestruturação
// ___________________________________________________________________________________________________

const conta = function(operador, acumulador, ...numeros) { // (... rest) todo resto depois do acumulador, vai estar dentrto de um array mesmo sem os colchetes
    for(let numero of numeros) {                    // o parametro rest precisa ser o ultimo parametro formal da função
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
    
};
conta('+', 1, 20, 30, 40, 50); 
