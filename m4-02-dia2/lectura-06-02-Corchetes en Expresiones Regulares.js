var enviar = document.getElementById('enviar')
enviar.addEventListener('click', validar)


function validar(){
    let lugar = document.querySelector('.lugar').value
    var permitido = /[a-zA-Z]/gim;
    if(lugar.match(permitido)){
        alert('El texto ingresado es permitido')
    }else{
        alert('"Solo debe ingresar caracteres alfabéticos')
    }
}





