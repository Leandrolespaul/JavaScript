class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario') // Selecionando o formulario pela class dele "formulario" (HTML)
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => { //Capturando do evendo do botão ENVIAR
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {  // metodo para se o usuário nao preencher o que pede, não envia formulario
        e.preventDefault() // formulario nnão seja o enviado
        // console.log('Formulário não enviado.')
        const camposValidos = this.camposSaoValidos()
        const senhasValidas = this.senhasSaoValidas()

        if(camposValidos && senhasValidas) {
            alert('Formulário enviado.')
            this.formulario.submit()
        }

    }

    senhasSaoValidas() {
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha')

        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
        }
        if(senha.value.length < 6 || senha.value.length > 12) {
            valid = false
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid
    }

    camposSaoValidos() {
        let valid = true

        for (let errorText of this.formulario.querySelectorAll('.error-text')) { // for para nao ser enviado e error varias vezes
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) { // passando por todos os campos do input
            const label = campo.previousElementSibling.innerText
            // console.log(campo)
            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
                valid = false
            }

            if (campo.classList.contains('cpf')) { // se o campo é o CPF
                if (!this.validaCPF(campo)) valid = false
            }
            if (campo.classList.contains('usuario')) { // se o campo é o CPF
                if (!this.validaUsuario(campo)) valid = false
            }

        }
        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = false
        if(usuario.length < 3 || usuario.length > 12) {
        this.criaErro(campo, 'Usuário precisa ter entre 3 a 12 caratcteres')
        valid = false
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) { // expressao regular (/^[a-zA-Z0-9]+$/g)
        this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
        valid = false
    }
    

        return valid
    }

        validaCPF(campo) {
            const cpf = new ValidaCPF(campo.value)
            if (!cpf.valida()) {
                this.criaErro(campo, 'CPF inválido.')
                return false
            }
            return true
        }
    

    criaErro(campo, msg) {
        const div = document.createElement('div') // criando uma div para jogar o erro
        div.innerHTML = msg // Jogar a msg( mensagem do error)
        div.classList.add('error-text') // uma class na DIV 
        campo.insertAdjacentElement('Afterend', div)

    }
}

const valida = new ValidaFormulario();