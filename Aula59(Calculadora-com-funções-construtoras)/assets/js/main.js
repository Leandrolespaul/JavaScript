function Calculadora() {
  this.display = document.querySelector('.display'); // seleciona o display

  this.inicia = () => { // metodo para iniciar
    this.capturaCliques();
    this.capturaEnter();
    this.capturaBackspace();
    this.capturaEsc();
    this.display.focus();
  };


  this.capturaEsc = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.clear();
      }
    });
  };

  this.capturaBackspace = () => {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 8) {
        this.del();
      }
    });
  };
                    //função
  this.capturaEnter = () => {  // captura o enter para realizar a conta...
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        this.realizaConta();
      }
    });
  };

  this.capturaCliques = () => { // captura os clicks 
    document.addEventListener('click', event => {
      const el = event.target; // jogou o event numa variavel chamada "el"
      this.display.focus();
      
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value); // avaliar no display se ta como codigo JavaScript


      // é ou nao é um numero
      if (isNaN(conta)) { // faz com que a conta apareça 0 ... ex 3-3 = 0
        alert('Conta inválida');
        return;
      }

      this.display.value = conta;
    } catch(e) {
      alert('Conta inválida');
      return;
    }
  };

  this.addNumDisplay = el => {
    if (this.display.value === '0') {
      this.clear();
    }
    this.display.value += el.innerText; // concatenando o valor input + o valor q foi clicado (el.innerText = Botão)
    this.display.focus(); // colocar o foco no display
  };

  this.clear = () => this.display.value = ''; // limpando o display no botão "C"
  this.del = () => this.display.value = this.display.value.slice(0, -1); // deletando um por um no display
}

const calculadora = new Calculadora(); // criando um objeto CALCULADORA com a variavel
calculadora.inicia(); // chamando o metodo inicia (Tudo começa pelo metodo inicia)
