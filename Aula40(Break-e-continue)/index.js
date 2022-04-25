// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//     if (numero === 2) {
//     console.log('Pulei o numero 2');
//     continue; // pula pra proxima interação e continua executando
// }
// if (numero === 7) {
// console.log('7 encontrado, saindo...')
//     break; // sai e termina o laço aqui
// }
// console.log(numero);

// }


// _____________________________________________


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i in numeros) {
//     let numero = numeros[i];
//     if (numero === 2) {
//     console.log('Pulei o numero 2');
//     continue; // pula pra proxima interação e continua executando
// }
// if (numero === 7) {
// console.log('7 encontrado, saindo...')
//     break; // sai e termina o laço aqui
// }
// console.log(numero);

// }

// _____________________________________________________________________


// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++) {
//     let numero = numeros[i]
    
//     if (numero === 2) {
//     console.log('Pulei o numero 2');
//     continue; // pula pra proxima interação e continua executando
// }
// if (numero === 7) {
// console.log('7 encontrado, saindo...')
//     break; // sai e termina o laço aqui
// }
// console.log(numero);

// }

//____________________________________________________________________________________
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let i = 0;
// while ( i < numeros.length) {
//     let numero = numeros[i]
    
//     if (numero === 2) {
//     console.log('Pulei o numero 2');
//     i++; // PARA NAO CAIR EM LOOP INFINITO
//     continue; // pula pra proxima interação e continua executando
// }
// if (numero === 7) {
// console.log('7 encontrado, saindo...');
// i++; // PARA NAO CAIR EM LOOP INFINITO
//     break; // sai e termina o laço aqui
// }
// console.log(numero);
// i++;                    // GERALMENTE ATUALIZA VARIÁVEL DE CONTROLE NO FINAL DO LAÇO!!!!!
// }

//_______________________________________________________

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;
do {
    let numero = numeros[i]
    
    if (numero === 2) {
    console.log('Pulei o numero 2');
    i++; // PARA NAO CAIR EM LOOP INFINITO
    continue; // pula pra proxima interação e continua executando
}
if (numero === 7) {
console.log('7 encontrado, saindo...');
i++; // PARA NAO CAIR EM LOOP INFINITO
    break; // sai e termina o laço aqui
}
console.log(numero);
i++;                    // GERALMENTE ATUALIZA VARIÁVEL DE CONTROLE NO FINAL DO LAÇO!!!!!
} while (i < numeros.length); //NO CASO do while A CONDIÇÂO FICA NO FINAL!!!!


//__________________________________________________________________________________


