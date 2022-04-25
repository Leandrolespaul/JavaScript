// try {
//     //console.log(a); // O ERRO COMO EXEMPLO
//     console.log('Abrir um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquivo');
//     // É executada quando NÃO há erros
//     try {
//       console.log(b);  // ERROR!
//     } catch (e) {
//         console.log('Deu erro');
//           // É executada quando há erros, so quando estiver erro!
//     }

// } catch (e) {
//     console.log('Tratando o erro');
//     // É executada quando há erros, so quando estiver erro!
// }
// finally {
//     console.log('Eu sempre sou executado');
//     // Será executado sempre
// }


// function retornaHora (data) {
//     if (!(data instanceof Date)) {
//         console.log('Não é!');
//     }
// }
// // retornaHora(11); // não é instancia de Date
// // retornaHora();  // não é instancia de Date
// retornaHora(new Date()); // É uma instancia de Date!!!!




function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError ('Esperando instância de Date');
    }
    if (!data) {
        data = new Date();
    }
return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
});
}

try {
const data = new Date ('01-01-1970 12:58:12');
const hora = retornaHora(); // ERROR 
console.log(hora);
} catch (e) {
    // tratar erro
    //console.log(e);
} finally {
    console.log('Tenha um bom dia!');
}