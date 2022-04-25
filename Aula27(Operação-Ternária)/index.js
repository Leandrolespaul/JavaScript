// (condição) ? 'Valor para verdadeiro' : 'Valor para falso':
const porntuacaoUsuario = 500;
const nivelUsuario = porntuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);




//if (porntuacaoUsuario >= 1000) {
//   console.log('Usuário VIP');
//} else {
//    console.log('Usuário normal');
//}