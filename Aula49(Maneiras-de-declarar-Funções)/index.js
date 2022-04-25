// Declaração de função (function hoisting)

falaOi();
function falaOi() {
    console.log('Oie');
}

// // First-class Objects (Objetos de primeira classe)
// // Function Expression (Expressão de função) 
const souUmDado = function() {  //criar uma função como um dado
    console.log('Sou um dado.');
};
souUmDado();

// function executaFuncaoAcima(funcao) {   //executaFuncaoAcima(funcao) recebe a função acima souUmDado
//     console.log('Vou executar sua função abaixo: ');
//     funcao(); // chamei a função acima de souUmDado
// }
// executaFuncaoAcima(souUmDado); 


// Arrow function
const funcaoArrow = () => {  // => ARROW 
    console.log('Sou uma arrow function')
};
funcaoArrow(); 

// Dentro de um objeto
const obj = {      // Jogar uma função como metodo de objeto
    falar: function () {
        console.log('Estou falando...')
    }
};
obj.falar();

//  ################################ OUTRA MANEIRA DE EXECUTAR ####################################################

const obj = {      // Jogar uma função como metodo de objeto
    falar() { // Remove a palavra "function" e os dois pontos depois do "falar"
        console.log('Estou falando...')
    }
};
obj.falar();

// concluindo todas elas são tratadas como objetos de primeira classe (dados)