
// Realizar operaciones con dos números.
// Pedir al usuario que ingrese dos números diferentes y mayores a cero.
// Para ambos números, calcular lo siguiente:
// Suma Resta División Multiplicación Módulo


function calcularOperaciones(){
  let numero1 = parseInt(prompt('Ingrese primer numero'))
  let numero2 = parseInt(prompt('Ingrese segundo numero'))
  let suma = numero1 + numero2;
  let resta = numero1 - numero2;
  let division = numero1 / numero2;
  let multiplicacion = numero1 * numero2;
  let modulo = numero1 % numero2;
    document.querySelector("#resultado1").innerHTML = `
    Al ingresar el numero ${numero1} y numero ${numero2} se obtendra:<br>
    ## Suma: ${suma} ##<br>
    ## Resta: ${resta} ##<br>
    ## Division: ${division.toFixed(2)} ##<br>
    ## Multiplicacion: ${multiplicacion} ##<br>
    ## Modulo: ${modulo} ## <hr>`;
}

document.querySelector("#operaciones").addEventListener("click", calcularOperaciones);

 
