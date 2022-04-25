//               -5       -4       -3        -2         -1
//                0        1        2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice atual, delete, addElemen1, addElemen2,  addElemen3);
// pop
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otávio');
// console.log(nomes, removidos);


// simular o push, adicionar um elemento no final do array
// nomes.splice(nomes.length, 0, 'Luiz');
// console.log(nomes);

// suimular o unshift, adicionar um elemento no começo do array
nomes.splice(0, 0, 'Luiz');
console.log(nomes);

// simular o pop
// const removidos = nomes.splice(-1, 1);

// simular o shift
// const removidos = nomes.splice(0, 1);




