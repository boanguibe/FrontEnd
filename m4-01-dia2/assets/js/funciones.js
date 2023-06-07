// Ejercicio guiado: Aplicando funciones
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");

    function saludo(nombre, edad) {
        document.write("Hola " + nombre + " tienes " + edad + " años <br>");
    }
    saludo(nombre,edad)

// Ejercicio guiado: Entrada y salida de la función.
    var num1 = prompt('ingrese un numero');
    var num2 = prompt('ingrese otro numero');

    function suma(num1,num2) {
        let n1 = parseInt(num1)
        let n2 = parseInt(num2)
        let resultado = n1 + n2
        return `El resultado de la suma es: ${resultado}`
    }
    document.write(suma(num1,num2))

//Ejercicio guiado: Funciones en JavaScript
    function nuevaSuma(){
        let num1 = parseInt(document.getElementById('num1').value)
        let num2 = parseInt(document.getElementById('num2').value)
        let resultado = num1 + num2
        return resultado
}

