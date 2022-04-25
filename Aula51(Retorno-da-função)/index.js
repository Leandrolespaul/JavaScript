// return 
// Retorna um valor
// Termina a função
// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';     // FUNÇÂO QUE NAO RETORNA VALOR
// });

// function criaPessoa(nome, sobrenome) {
//     return { nome, sobrenome };
// }
// const p1 = criaPessoa ('Luiz', 'Otávio'); // aqui a função ja cria pra mim o nome e o sobrenome
// const p2 = {                            
//     nome: 'João',                      // aqui teria q escrever o nome e sobrenome atribuindo o valor
//     sobrenome: 'Oliveira'
// };
// console.log(typeof p1);  // typeof para saber que tipo de valor é o p1
// console.log(typeof p2);  // typeof para saber que tipo de valor é o p2
//############################################################################################################

// function falaFrase(comeco) {
//     function falaResto(resto){ // outra função dentro de uma função
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
//   console.log(resto);
//#########################################################################################################################

function criaMultiplicador(multiplicador) {
    // multiplicador ta nesse escopo
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log(duplica(3));  // Valores que quer q duplica
console.log(triplica(2));
console.log(quadriplica(10));