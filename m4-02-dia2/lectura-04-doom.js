// Ejercicio guiado: Acceso a elementos del DOM
var idContenedor = document.getElementById("contenedor");
console.log(idContenedor);


var elementoUl = document.getElementsByTagName("ul");
console.log(elementoUl);

var menuClase = document.getElementsByClassName("menu");
console.log(menuClase);

var items = document.querySelectorAll(".item");
console.log(items);

// Cambiando elementos del DOM
var parrafo = document.getElementById("parrafo").innerHTML;
document.getElementById("parrafo").innerHTML = "Soy un parrafo";





