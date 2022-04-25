const falar = { // Uma variável que tem  um Objeto literal que tem o método "falar"
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = { // Uma variável que tem  um Objeto literal que tem o método "comer"
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = { // Uma variável que tem  um Objeto literal que tem o método "beber"
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};
                            //Criando uma copia do Objeto (Vazio)
const pessoaPrototype = Object.assign({}, falar, comer, beber); // Fazendo a cópia do Objeto (assing) e colocando os métodos

function criaPessoa(nome, sobrenome) {   // Function Factory - função fábrica
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome }
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);


// COMPOSIÇÃO (MIXING)