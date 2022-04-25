/*
Escreva uma função que recebe um número e 
retorne o seguinte:
Número é divisivel por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBizz
Número não é divisível por 3 e 5 = Retorna o própio numero
Checar se o número é realmente um número = retorna o propio número
Use a função com números de 0 a 100
*/

function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero; // Checar se o número é realmente um número = retorna o propio número
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz'; //(essa condição tem q vim primeiro) Número é divisível por 3 e 5 = FizzBizz
    if (numero % 3 === 0) return 'Fizz'; //Número é divisivel por 3 = Fizz
    if (numero % 5 === 0) return 'Buzz'; //Número é divisível por 5 = Buzz
    return numero;       
}
console.log('a', fizzBuzz('a')) // testar a função com string
for (let i = 0; i <= 100; i++) {  // Use a função com números de 0 a 100
    console.log(i, fizzBuzz(i)) // mostrar os numeros (i) de 0 a 100 e mostrar a função!
}

