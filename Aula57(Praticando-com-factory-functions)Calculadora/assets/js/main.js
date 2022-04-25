function criCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),
        
        inicia() {  // metodo para iniciar o programa calculadora com um alerta no browser
            //alert('Oi Leandro, sua calcularora está pronta!')
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaEsc();
            this.pressionaBackspace();
            this.display.focus();
           
        },    
            pressionaBackspace() {   // metodo para pressionar o backspace
                document.addEventListener('keypress', e => {    // pressiona backspace
                    if (e.keyCode === 8) {   // se pressiona backspace
                        this.apagaUm(); // limpa o display um por um 
                    }
                });
            },


            pressionaEsc() {   // metodo para pressionar o Esc
                document.addEventListener('keyup', e => {    // pressiona Esc
                    if (e.keyCode === 27) {   // se pressiona Esc
                        this.clearDisplay(); // limpa o display
                    }
                    
                });

            },
            pressionaEnter() {   // metodo para pressionar o Enter
                document.addEventListener('keypress', e => {    // pressiona Enter
                    if (e.keyCode === 13) {   // se pressiona Enter
                       this.realizaConta();  // realiza conta
                    }
                   
                });

            },


            realizaConta() {
                this.display.focus();
                let conta = this.display.value; // dizendo que o display (input) recebe um numero

                // Tratando error
                try {
                    conta = eval(conta); // eval é uma função de avaliação de uma string
                    if (isNaN(conta)) { // se o valor for 3-3= zero 0  é true
                        alert('Conta inválida'); // entao "Conta inválida"
                        return; // para aqui mesmo o codigo
                    } 
                    this.display.value = String(conta); // se for uma string
                } catch(e) {
                    alert('Conta inválida');
                    return;
                }
            },

        clearDisplay(){ // metodo para zerar o display
            this.display.value = ' '; // valor vazio no display quando aperta o button C
            this.display.focus();
        },
        
        apagaUm() {       // metodo para apagar um numero por vez
            this.display.value = this.display.value.slice(0, - 1); 
        },                                      // (0 - 1) tamanho da string menos 1


        
        cliqueBotoes() { // metodo para pegar o click para os botoes
            // this -> calculadora
            document.addEventListener('click', (e) => { // pegando o click dos botoes pelo documento
                const elemento = e.target; // o elemento que esta clicando
                this.display.focus();

                if(elemento.classList.contains('btn-num')) {    // Se o elemento contem a classe btn-num
                   this.btnParaDisplay(elemento.innerText);    // quero fazer "um link" que o que esta no bottão vai para o display
                            //innertext = tudo q esta dentro do valor do btn. ex: 1, 2, 3, -, +, * e etc...
                }
                if (elemento.classList.contains('btn-clear')) { // se o botão clicado for o clear
                    this.clearDisplay(); //entao limpa o text do input
                }
                if (elemento.classList.contains('btn-del')) { // se o botao for clicado do <<
                    this.apagaUm(); // apaga um por um 
                }
                if (elemento.classList.contains('btn-eq')) { // se o botao de igual for clicado
                    this.realizaConta(); // chama o metodo realizaConta (Faz as contas)

                }

            });

        },
        btnParaDisplay(valor) { //metodo 
            this.display.value += valor; //; concatenar o valor do dois clicks
            this.display.focus();
            
        }
    };
}

const calculadora = criCalculadora();
calculadora.inicia(); // chamando o metodo iniciar 

