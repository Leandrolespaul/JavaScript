/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925924
Luiz Otávio nasceu em 1980.
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;
let imc; // peso = peso / (altura * altura)
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2021 - idade;

//template strings ${}

console.log(`${nome} ${sobrenome} tem idade anos pesa ${peso} kg`);
console.log(`tem ${altura} e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);



