const form = document.getElementById('validar-form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    let valorA = parseFloat(document.getElementById('NA').value);
    let valorB = parseFloat(document.getElementById('NB').value);
    formEValido = false
    const mensagemSucesso = `Formulario verificado com sucesso! O valor do <b>Primeiro</b> é menor que o do <b>Segundo</b>!`

    function ValidarNumero (valorA, valorB){
        return valorB > valorA;
    }

    formEValido = ValidarNumero(valorA, valorB) ;
        if(formEValido){
            const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block'
        document.querySelector('.error-message').style.display = 'none';
        valorA.value = '';
        valorB.value = '';
        } 

        else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.mensagemSucesso').style.display = 'none';
    }
});


