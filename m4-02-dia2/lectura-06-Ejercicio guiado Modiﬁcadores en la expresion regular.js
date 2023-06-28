var enviar = document.getElementById('enviar');
enviar.addEventListener('click',validar)

function validar(){
    var texto = document.querySelector('.texto').value;
    var patron1 = /flaco/gim
    var patron2 = /gordo/gim
    var patron3 = /^bajo/gim
    var patron4 = /$alto/gim
    if(texto.match(patron1) || texto.match(patron2) || texto.match(patron3) || texto.match(patron4)){
        alert('Las palabra ingresadas no son permitidas')
    }else{
        alert('Las palabras ingresadas son permitidas')
    }
}
