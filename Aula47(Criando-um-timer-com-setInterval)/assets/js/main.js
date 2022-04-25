
function relogio () { // ENVOLVE TODO MEU CODIGO NUMA FUNÇÂO!!!!!
    function criaHoraDosSegundos (segundos){   // função para os segundos!
        const data = new Date(segundos * 1000); // JavaScript lê em milessimos de segundos por isso tive q multiplicar por 1000
        return data.toLocaleTimeString('pt-BR',  {
            hour12: false,
            timeZone: 'GMT' // para ele considerar e zerar o relogio em 00:00
        });
    }
    
    const relogio = document.querySelector('.relogio'); //Variavel para selecionar a class relogio no HTML
    const iniciar = document.querySelector('.iniciar');//Variavel para selecionar os botão iniciar HTML
    const pausar = document.querySelector('.pausar');//Variavel para selecionar os botão pausar HTML
    const zerar = document.querySelector('.zerar');//Variavel para selecionar os botão zerar HTML
    let segundos = 0; // variavel para zerar os segundos
    let timer; // varial pra pausar 
    
    
    function iniciaRelogio () {
        timer = setInterval(function () {  // essa função vai formatar os segundos em formato de horario
            segundos++; // somando 1 segundo na minha variavel 0 ou seja (0 + 1)
            relogio.innerHTML = criaHoraDosSegundos(segundos); // envolvi os segundos para começar como 00:00:00 nesta função
        }, 1000);
    }
    
    iniciar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado'); // remove o vermelho no relogio criado no css
        clearInterval(timer); // impede de ele criar um outro timer em cima do que ja esta rodando
        iniciaRelogio();
    });
    
    pausar.addEventListener('click', function(event) {
        relogio.classList.add('pausado'); // adiciona o vermelho no relogio
        clearInterval(timer);
    });
    
    zerar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer);  
        relogio.innerHTML = '00:00:00';  // zerar o relógio
        segundos = 0; // serar os segundos 
    });
    
}
relogio();
