// Cambiar el texto de un parrafo id "textoSaludo"
document.getElementById("textoSaludo").innerHTML = "Hola, este párrafo fue modificado";

// Paso 2: Modiﬁcaremos el elemento input con el id denominado “entradaUno”, en este
// caso se deben cambiar distintos atributos de este elemento, como el caso del value,
// id y type. Se debe utilizar la instrucción document.getElementById(), más las
// propiedades de id, value y type para cambiar el valor existente por el nuevo valor:

document.getElementById("entradaUno").value = "Click Aquí";
document.getElementById("entradaUno").type = "button";
document.getElementById("entradaUno").setAttribute('style', 'color: yellow; background-color: red');