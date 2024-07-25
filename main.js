const inputNome = document.getElementById('nome')
const validarNome = document.querySelector('.validarNome')
const validarNome2 = document.querySelector('.fotoX1')
const validarNome3 = document.querySelector('.fotoCerto1')

const inputEmail = document.getElementById('email')
const validarEmail = document.querySelector('.validarEmail')
const validarEmail2 = document.querySelector('.fotoX2')
const validarEmail3 = document.querySelector('.fotoCerto2')

const inputTexto = document.getElementById('texto')
const validarTexto = document.querySelector('.validarTexto')
const validarTexto2 = document.querySelector('.fotoX3')
const validarTexto3 = document.querySelector('.fotoCerto3')

const botaoEnviar = document.getElementById('btnEnviar')


function nomeValidar(){
    if(inputNome.value.length <= 3){
        inputNome.style.border = '2px solid #ff0000'
        validarNome.dataset.nome = 'true'
        validarNome2.dataset.nome = 'true'
        validarNome3.dataset.nome2 = 'false'
    } else {
        inputNome.style.border = '2px solid #067403'
        validarNome.dataset.nome = 'false'
        validarNome2.dataset.nome = 'false'
        validarNome3.dataset.nome2 = 'true'
    }
}

function emailValidar(){
    if(inputEmail.checkValidity()){
        inputEmail.style.border = '2px solid #067403'
        validarEmail2.dataset.email = 'false'
        validarEmail.dataset.email = 'false'
        validarEmail3.dataset.email2 = 'true'
    } else {
        inputEmail.style.border = '2px solid #ff0000'
        validarEmail2.dataset.email = 'true'
        validarEmail.dataset.email = 'true'
        validarEmail3.dataset.email2 = 'false'
    }
}

function textoValidar(){
    if(inputTexto.value.length < 20){
        inputTexto.style.border = '2px solid #ff0000'
        validarTexto.dataset.texto = 'true'
        validarTexto2.dataset.texto = 'true'
        validarTexto3.dataset.texto2 = 'false'
    } else {
        inputTexto.style.border = '2px solid #067403'
        validarTexto.dataset.texto = 'false'
        validarTexto2.dataset.texto = 'false'
        validarTexto3.dataset.texto2 = 'true'
    }
}
