// Ejemplo de listener
let funcionAlerta = function(){
    alert('click');
}

let box = document.getElementById('box');
box.addEventListener('click', funcionAlerta);

// Otro ejemplo con mouseover
box.addEventListener('mouseover', function(){
    box.innerHTML = 'El puntero esta sobre el elemento';
})
box.addEventListener('mouseout', function(){
    box.innerHTML = 'El puntero no esta sobre el elemento';
})