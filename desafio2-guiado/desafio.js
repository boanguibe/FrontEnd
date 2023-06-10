// Funcion que genera una tabla de multiplicar
const tablaMultiplicar = (numero) => {
    for (let i = 1; i <= numero; i++) {
        console.log(`${i} x ${numero} = ${i * numero}`)
    }
}
// Funcion que genera el factorial de un numero
const factorial = (numero) => {
    for (let i = 1; i <= numero; i++) {
        let res = 1;
        for (let j = 1; j <= i; j++) {
            res = res * j;
        }
        console.log("Factorial de " + i + " es: " + res);
    }
}

// Ejercicio guiado: Validar un número y calculo de operacion
const validacion = () => {
    numero = parseInt(prompt('Ingrese un número entre 1 y 20'));
    if (numero > 0 && numero <= 20) {
        alert(`${numero}  "número valido"`);
        return `${tablaMultiplicar(numero)}<br>
                ${factorial(numero)}`
    } else {
        alert(`${numero}  "número fuera del rango, intenta de nuevo"`);
        return false
    }
    console.log(numero)
}

// Solicita numero hasta que este sea valido
while (validacion() === false) {
    validacion()
}




