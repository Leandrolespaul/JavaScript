// Escreva uma function que recebe 2 números e retorne o maior deles

// function max (x, y) {
//     if (x > y) {
//         return x;                       // 1° jeito de fazer
//     }
//     return y;
// }
// console.log(max(10, 2));

// #####################################################################################
// function max (x, y) {
//     if (x > y) return x; 
//     return y;                            // 2° jeito de fazer (Eliminando as chavbes do if)
// }
// console.log(max(10, 2));

//#########################################################################################

// function max (x, y) {
//     return x > y ? x : y;                         // 3° jeito de fazer (condição ternária '?' ':')
// }
// console.log(max(10, 20));
//############################################################################################

// const max2 = (x, y) => {                                  // 4° jeito de fazer (Arrow function) + (condição ternária)
//     return x > y ? x : y;
// };
// console.log(max2(100, 20));
//###############################################################################################

const max2 = (x, y) => x > y ? x : y;                       // 5° jeito de fazer sem chaves (Arrow function)
console.log(max2(10, 5));