function meuEscopo (){ // função de todo codigo
const form = document.querySelector('.form'); // Selecionar a Class do HTML, seleciona os elemento da class do (.form)
const resultado = document.querySelector('.resultado'); // Selecionar a Class <div> do HTML, seleciona os elemento da class do (.resultado)


const pessoas = []; //ARRAYs onde eu salvo meus Objetos! [] vazio pq o usuário q vai preencher

// todos os eventos começa com "on" ex: evento submit: onsubmit
    
function recebeEventoForm (evento) {
    evento.preventDefault();      // previne que a página seja atualizada.
    const nome = form.querySelector('.nome'); // selecionando o input (HTML) que esta dentro do formulario de HTML
    const sobrenome = form.querySelector('.sobrenome'); // selecionando o input (HTML) que esta dentro do formulario de HTML
    const peso = form.querySelector('.peso'); // selecionando o input (HTML) que esta dentro do formulario de HTML
    const altura = form.querySelector('.altura'); // selecionando o input (HTML) que esta dentro do formulario de HTML

    pessoas.push({ //push para pegar o valor que o usúario digitou  (CRIANDO OBJETO)
        nome: nome.value,// mostrar o valor do input
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    });
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
}
form.addEventListener('submit', recebeEventoForm);  // form adiciona um escutador de eventos no meu formulário


}
meuEscopo(); // chamando a funçao de todo codigo



