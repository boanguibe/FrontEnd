// 2.  Crear un programa que pida al usuario ingresar la temperatura
// en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.


// Funcion de calculo de grados
function transformarGrados(){
  console.log("hola")
  let celsius = parseInt(prompt('Ingrese la temperatura: '))
  let fahrenheit = celsius * 9/5 +32
  let kelvin = celsius + 273.15
  document.querySelector('#resultado2').innerHTML = `
  ${celsius}° Celsius equivalen a:<br>
  ## ${fahrenheit}° Fahrenheit ##<br>
  ## ${kelvin}° Kelvin ## <hr>`;
}

document.querySelector("#calculaGrados").addEventListener("click", transformarGrados);