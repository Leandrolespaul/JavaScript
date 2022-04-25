//  arrays são valores por referências

// índice         0          1        2
// nomes.unshift(); // adiciona um eleemento no fim do array
// nomes.push('João'); // adiciona um elemento no array
// nomes.shift(); // deleta o primeiro elemento do array
//novo.pop(); // deleta o ultimo elemento do array
// const novo = [...nomes]; // criando uma copia do array nomes 
//const nomes = new Array('Eduardo', 'Maria', 'Joana'); // uma outra maneira de fazer arrays
// nomes[2] = 'João'; //Modifiquei o índice 2 de Joana por João {RESULTADO: [ 'João', 'Maria', 'Joana' }
// delete nomes[2]; // deletando o índice 2 do array {RESULTADO: [ 'Eduardo', 'Maria', <1 empty item> }


// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
// const novo = nomes.slice(1, 3); // pega o elemento que vc quer dentro do array 
// console.log(novo);


//                    //String
// const nome = 'Luiz Otávio Miranda';
//                 //converter string em array
// const nomes = nome.split(' '); // para separar (Através de um espaço) a string para conversão de array
// console.log(nomes); // resultado [ 'Luiz', 'Otávio', 'Miranda' ]



                   //Array
 const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
    //converter array em uma string
   const nome = nomes.join(' '); // agora vou unir todos os valores do meu array 
   console.log(nome); // resultado Luiz Otávio Miranda (uma string)