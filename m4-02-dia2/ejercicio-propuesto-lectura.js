// Creaun nuevo parrafo y agregarlo al doom
let parrafo = document.createElement('p');
parrafo.innerHTML = 'Nuevo Parrafo creado desde JS'
document.body.appendChild(parrafo)

// Reemplazar elemento caja por parrafo
let caja = document.getElementById('caja')
let enlace = document.createElement('a')
enlace.setAttribute('href', 'https://desafiolatam.com/')
enlace.setAttribute('title', 'ingresa aqui!!')
enlace.innerHTML = 'Desafio Latam'
document.body.replaceChild(enlace, caja)

//Eliminar elemento id="eliminar"
let eliminar = document.getElementById('eliminar')
document.body.removeChild(eliminar)