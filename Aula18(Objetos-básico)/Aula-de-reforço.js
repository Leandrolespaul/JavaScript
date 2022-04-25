const array = [1, 2, 3]
array.push(4) // colocando um novo valor no array (numero 4)
array[0] = 'Leandro' //Ou seja o Elemento ou índice 0 foi mudado o valor para 'Leandro'
// array = 'Outra' // nao posso reatribuir uma constante se fosse let daria 
console.log(array)


// FUNÇÂO FACTORY
                    //PARAMETRO DA FUNÇÂO
function criaPessoa(nome, sobrenome, idade) { // Parametro quando envio na função, e argumento é o valor atribuído desses parametros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade 
    }
}
                         //ARGUMENTOS QUE É PASSADO PARA PARAMETRO
const pessoa1 = criaPessoa('Leandro', 'Cunha', 36)
console.log(pessoa1)

