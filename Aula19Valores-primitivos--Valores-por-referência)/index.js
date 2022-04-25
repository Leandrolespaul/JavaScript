/*
Primitivos (imutáveis) - String, number, boolean, underfiend,
null (bigint, symbol) -  Valor. Reprensentado por = 

PRIMITIVOS SÃO VALORES COPIADOS

Referência (mutável) - Array, Object, Function - PASSADOS POR REFERÊCIA utilizando {} ou []
*/

let a = [1, 2, 3];
let b = a;
let c = b;

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);























/*
Valor primitivo!

let a = 'A';       
let b = a; //Cópia
console.log(a, b);

a = 'outra coisa';
console.log(a, b); 
// resultado A A
// outra coisa A    // O valor de b mantem o valor primitivo
*/



