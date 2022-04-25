function retornaFuncao(nome) {
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('Luiz'); // funcao é pq tem uma função anonima
const funcao2 = retornaFuncao('João');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());

// Closures á a habilidade que a função tem de acessar seu "escopo léxio"