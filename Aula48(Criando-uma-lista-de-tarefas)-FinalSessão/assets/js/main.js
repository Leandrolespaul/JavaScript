const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {    //função ára criar um li (li é um ponto  q fica antes das tarefas) para eu usar quando quiser
    const li = document.createElement('li'); 
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {   // evento de presionar a tecla 
    if (e.keyCode === 13){
        if(!inputTarefa.value) return; // Se o valor do input tarefa for vazio não retorna nada
        criaTarefa(inputTarefa.value)     
    }
});

function limpaInput() {
    inputTarefa.value = ''; // Vai limpar o valor que tiver no inputTarefas pelo botao adicionar
    inputTarefa.focus();  // evento de "focus" html 
}

function criaBotãoApagar(li){         // função apagar adicionado no "li"
    li.innerText += ' '; // espaço entre o texto do li
    const botaoApagar = document.createElement('button'); //criando o botao apagar
    botaoApagar.innerText = 'Apagar' // nome do botao
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    //botaoApagar.classList.add('apagar');

    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {  // uma função para adicionar uma tarefa digitada pelo usuário
    const li = criaLi();
    li.innerText = textoInput; // mostra as tarefas abaixo da caixa de texto que usuário digitou
    tarefas.appendChild(li); //adicionando as tarefas na "UL" (html) no li
    limpaInput(); // limpo meu input
    criaBotãoApagar(li); // botão apagar adicionado na tarefa
    salvarTarefas();
}

btnTarefa.addEventListener('click', function(){   //(Função anonima) Capturar o evento de click (pegar o click do botão) no botão "btn-tarefa"
    if(!inputTarefa.value) return; // Se o valor do input tarefa for vazio não retorna nada
    criaTarefa(inputTarefa.value)
    
});                                

document.addEventListener('click', function(e){ // TARGET DO CLICK
    const elemento = e.target;
    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove(); // do meu elemento "o pai dele", será removido
        salvarTarefas();

    }
});

function salvarTarefas() { // salvar as tarefas no li
    const liTarefas = tarefas.querySelectorAll('li'); // pegar de dentro das TAREFAS
    const listaDeTarefas = []; // um array vazio

    for (let tarefa of liTarefas) {          // pegando a lista de tarefas adicionadas para salvar
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // subistituindo a palavra apagar pra nada
        listaDeTarefas.push(tarefaTexto); // jogar o texto dentro da lista de tarefas
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // é uma string que depois posso converter em um array
    localStorage.setItem('tarefas', tarefasJSON); //('tarefas')= um nome q vc precisa pra recuperar novamente...
    //local do navegador onde vc pode salvar coisas
}

function adicionaTarefasSalvas() { 
    const tarefas = localStorage.getItem('tarefas'); // obter os itens pelo nome 'tarefas' (localStorage.setItem('tarefas', tarefasJSON);... do localStorage (navegador)
    const listaDeTarefas = JSON.parse(tarefas);// converter as 'tarefas' novamente em array (parse = converte para um elemento em javascript)
    console.log(listaDeTarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();


