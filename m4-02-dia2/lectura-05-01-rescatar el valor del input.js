let buscar = () => {
    var texto = document.querySelector('.input-a-buscar').value
    document.querySelector('.resultado').innerHTML = `
    Estas buscando: ${texto}`
}


let boton = document.getElementById('boton-buscar');
boton.addEventListener('click',buscar);


