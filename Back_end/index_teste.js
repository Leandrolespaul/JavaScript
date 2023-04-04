const idAutomatico = (() => {
    let id = 1 
    return () => id++
})()  


let clientes = [
  {
    id: idAutomatico(),
    nome: "Leandro",
    idade: 30,
  },
  {
    id: idAutomatico(),
    nome: "Camila",
    idade: 22,
  },
  {
    id: idAutomatico(),
    nome: "Carlos",
    idade: 31,
  },
];

// Validação de codigo

const alterar = (clienteAAlterar) => {
  const clienteFiltrado = clientes.find(
    (cliente) => cliente.id === clienteAAlterar.id
  );

  if (clienteAAlterar.nome) {
    clienteFiltrado.nome = clienteAAlterar.nome;
  }

  if (clienteAAlterar.idade) {
    clienteFiltrado.idade = clienteAAlterar.idade;
  }

  return clientes;
};

const deletar = (id) => {
  clientes = clientes.filter((cliente) => cliente.id !== id);
};

const criar = (novoCliente) => {
  const cliente = { ...novoCliente, id: idAutomatico() };
  clientes.push(cliente);

  return cliente;
}




// criar({ nome: "Philipe", idade: 32 });
// deletar(2);
// alterar({id: 1, nome: "Jairo", idade: 64})
// console.log(clientes);
 







