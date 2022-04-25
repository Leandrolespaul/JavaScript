// const nome = ['Luiz', 'Leandro', 'Camila',];



// let i = 0;   //variavel de controle

// while (i < nome.length) {    // condição
//     console.log(nome[i]);
//     i++;   //atualiza a variavel de controle
// }
// console.log('Segue os codigos...')


//__________________________________________________________________

function random(min, max) {
    const r = Math.random() * (max + min) + min; // formula entre um numero minimo e outro maximo
    return Math.floor(r);   // Math.Floor retira as casas decimais

}
const min = 1; // declarei meu numero minimo
const max = 50; // declarei meu numero maximo
let rand = random(min, max); 

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}

