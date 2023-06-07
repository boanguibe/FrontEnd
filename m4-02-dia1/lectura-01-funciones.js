const f = function saludar(nombre, nombreFuncion) {
    function hola() {
        return "Hola " + nombre;
    }
    function buenosDias() {
        return "Buenos días " + nombre + "!";
    }
    if (nombreFuncion === "hola") {
        return hola;
    }
    return buenosDias;
}
let miFuncionDeHola = f("Desafio", "hola");
// Ahora miFuncionDeHola es una función y se debe llamar como tal.
console.log(miFuncionDeHola()); // "Hola Desafío"

// Ejercicio guiado: Suma de tres números.
const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function sum(nums) {
    let suma = 0
    for (let i = 0; i < nums.length; i++) {
        suma = suma + nums[i];
    }
    return suma;
}
console.log(sum(nums))

function suma(nums) {

    // La Recursión se detiene cuando un array está vacío
    if (nums.length < 1) { // con el length se mide la cantidad de
        //espacios que tiene la variable nums
        return 0;
    }
    // El método shift() remueve el primer elemento del array
    // y retorna ese valor. Este método cambia la longitud del array
    var valor = nums.shift();
    // retornando en cada pasada la suma de los primeros valores que se
    //van removiendo
    return valor + suma(nums);
}

console.log(suma(nums))

//Ejercicio guiado: Factorial de un número
function factorial_numero(x) {
    if (x > 1) {
        return x * factorial_numero(x - 1); // fórmula para el
        //factorial: x * (x - 1)!
    } else {
        return x;
    }
}
var x = prompt("Ingrese un número");
document.write(`El factorial de ${x}! es: ${factorial_numero(x)}`);