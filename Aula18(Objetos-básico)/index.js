

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
 
    fala() {
        console.log(`A minha idade atual é ${this.idade} `);
    },
    
    incremetaIdade(){                    //Obs:++ seria o operador de incremento (soma +1)
         this.idade++;    

    }
};

pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();



/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,
 
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... `);
    },

    

    }
};

pessoa1.fala();
*/






// função com OBJETos

/*function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criaPessoa ('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa ('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa ('João', 'Moreira', 55);
const pessoa4 = criaPessoa ('Junior', 'Lara', 44);
const pessoa5 = criaPessoa ('Jean', 'Otávio', 69);

console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade,
            pessoa2.nome, pessoa2.sobrenome, pessoa2.idade,
            pessoa3.nome, pessoa3.sobrenome, pessoa3.idade,
            pessoa4.nome, pessoa4.sobrenome, pessoa4.idade,
            pessoa5.nome, pessoa5.sobrenome, pessoa5.idade);
*/