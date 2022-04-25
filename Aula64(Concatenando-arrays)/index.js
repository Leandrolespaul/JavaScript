const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// // concatena o a1 com o a2 mais os adicionais q coloquei ([7, 8, 9], 'Luiz')) ali  pelo metodo concat
// const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); 
//...rest -> ... spread (espalhando um array)
const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3);


const conta = 108-(72/3)^(2+2)
console.log(conta)