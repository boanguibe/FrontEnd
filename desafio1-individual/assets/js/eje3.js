/*Crear un programa que pida al usuario una cantidad de días 
y que muestre su equivalente en Años, Semanas y Días.
Por ejemplo, si el usuario ingresa 373, el resultado debe ser:
1 año, 1 semana y 1 día. Se debe considerar lo siguiente: 
1 año tiene 365  días 
1 semana tiene 7 días

Se recomienda usar la función Math.floor 
para obtener la parte entera de un númerodecimal.*/

function calcularAnioMesDia(){
  let dias = parseInt(prompt('Ingrese la cantidad de dias: '))
  let anios = dias / 365
  let semanas = (dias % 365) / 7
  let dia = (dias % 365) % 7
  document.querySelector('#resultado3').innerHTML = `
  Los ${dias} dias ingresados equivalen a:<br>
  ## ${Math.floor(anios)} años ##<br>
  ## ${Math.floor(semanas)} semanas ##<br>
  ## ${dia} días ## <hr>`
}

document.querySelector("#calculaAnioMesDia").addEventListener("click", calcularAnioMesDia);



