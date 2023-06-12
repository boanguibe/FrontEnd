// Ejercicio guiado: Gestionando elementos del DOM 

var titulo = document.createElement('h3')
titulo.innerHTML = 'Creando elementos desde JS y gestionando elementos del DOM'
document.body.appendChild(titulo)
// titulo.textContent = 'Ejercicio guiado: Gestionando elementos del DOM'
// document.body.appendChild(titulo)

// Reemplazo un elemento por otro
let caja = document.getElementById('caja')
let button = document.createElement('button')
button.setAttribute('type', 'button)')
button.setAttribute('title', 'click aqui!!')
button.innerHTML = 'Boton nuevo'
document.body.replaceChild(button, caja)

// Eliminar elementos del DOM
var borrando = document.getElementById('borrame')
document.body.removeChild(borrando)
