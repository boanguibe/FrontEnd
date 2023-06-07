// Ejercicio guiado: Alcance de variables
function suma() {
    let num1 = prompt("Ingrese un primer número para al suma");
    let num2 = prompt("Ingrese un segundo número para al suma");
    resultado = parseInt(num1) + parseInt(num2);
    return resultado;
};
function resta() {
    let num1 = prompt("Ingrese un primer número para al resta");
    let num2 = prompt("Ingrese un segundo número para al resta");
    resultado = parseInt(num1) - parseInt(num2);
    return resultado;
};
var resultado
document.write(`El resultado de la suma es: ${suma()}<br>`);
document.write(`El resultado de la resta es: ${resta()}`);


//Ejercicio guiado: Arrow Functions
var num = prompt("Ingrese un numero entero");
var resultado = 0;
let verificar = numero => {
    if (numero > 0) {
        resultado = "positivo";
    } else if (numero < 0) {
        resultado = "negativo";
    } else if (numero === 0) {
        resultado = "nulo";
    } else {
        resultado = "no es un número";
    }
    return resultado
}
alert(`El numero ingresado es: ${verificar(parseInt(num))}`);