/*Crear un programa que solicite al usuario 5 números 
y realice los cálculos que se piden a continuación.

● La suma de todos los números.
● El promedio de los 5 números ingresados*/


// Funcion que convierte nombre y apellido en mayusculas
function calculos() {
    let num1 = parseInt(prompt('Ingrese el primer numero: '));
    let num2 = parseInt(prompt('Ingrese el segundo numero: '));
    let num3 = parseInt(prompt('Ingrese el tercer numero: '));
    let num4 = parseInt(prompt('Ingrese el cuarto numero: '));
    let num5 = parseInt(prompt('Ingrese el quinto numero: '));
    let suma = num1 + num2 + num3 + num4 + num5;
    let promedio = suma / 5;
    document.querySelector('#resultado4').innerHTML = `
    La suma de los 5 numeros ingresados es: ${suma}<br>
    y el promedio es: ${promedio}`
  }
  

  document.querySelector("#calculos").addEventListener("click", calculos); 


  
  