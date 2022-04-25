// IEEE 754-2008

let num1 = 0.7; //number
let num2 = 0.1; //number

num1 += num2; // 0.8 
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = num1.toFixed(2);
console.log(num1);0




//console.log(num1.toString() + num2);                 (Concatenação + o numero)
//num1 = num1.toString();                              (Alterar o Valor do Number pra String)
//console.log(num1.toString(2));                       (Mostra de forma Binária)
//console.log(num1.toFixed(2));                        (Arredonda o numero com 2 casas decimais...)
//console.log(Number.isInteger(num1));                 (Saber se o numero é interiro (true ou false))

/*
let temp = num1 * '5';                 (pra saber se a conta é com string)
console.log(Number.isNaN(temp)); 
*/

