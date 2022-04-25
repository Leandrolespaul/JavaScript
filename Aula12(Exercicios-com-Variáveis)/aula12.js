/* Exercícios, atribue e mostre os valore de "varA, varB, varC", nas seguintes ordens
 varA = 'A' sendo B, varB = 'B'sendo C e varC = 'C' sendo A. Resultano no final pelo console B C A.
 */

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
                                                       //RESOLVIDO
const valortemp = varA;
varA = varB;
varB = varC;
varC = valortemp;

//[varA, varB, varC] = [varB, varC, varA] "Solução moderna!"




console.log(varA, varB, varC);